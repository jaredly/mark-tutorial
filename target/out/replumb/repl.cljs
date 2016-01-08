(ns replumb.repl
  (:refer-clojure :exclude [load-file ns-publics ns-interns find-ns])
  (:require-macros [cljs.env.macros :refer [with-compiler-env]])
  (:require [cljs.js :as cljs]
            [cljs.tagged-literals :as tags]
            [cljs.tools.reader :as r]
            [cljs.tools.reader.reader-types :as rt]
            [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.repl :as repl]
            [cljs.pprint :refer [pprint]]
            [clojure.string :as s]
            [replumb.common :as common]
            [replumb.ast :as ast]
            [replumb.doc-maps :as docs]
            [replumb.load :as load]
            [replumb.browser :as browser]
            [replumb.nodejs :as nodejs]))

;;;;;;;;;;;;;
;;; State ;;;
;;;;;;;;;;;;;

;; This is the compiler state atom. Note that cljs/eval wants exactly an atom.
(defonce st (cljs/empty-state))

(defonce app-env (atom {:current-ns 'cljs.user
                        :last-eval-warning nil
                        :initializing? false
                        :needs-init? true
                        :previous-init-opts {}}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Util fns - many from mfikes/plank ;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def ex-info-data "The ex-info data for this file" {:tag ::error})

(defn current-ns
  "Return the current namespace, as a symbol."
  []
  (:current-ns @app-env))

(defn get-goog-path
  "Given a Google Closure provide / Clojure require (e.g. goog.string),
  returns the path to the actual file (without extension)."
  [provide]
  (get-in @app-env [:goog-provide->path provide]))

(defn empty-analyzer-env
  []
  (assoc (ana/empty-env)
         :ns (ast/namespace @st (:current-ns @app-env))
         :context :expr))

(defn map-keys
  [f m]
  (reduce-kv (fn [r k v] (assoc r (f k) v)) {} m))

(defn repl-read-string
  "Try to read a string binding all the standard data readers. This
  function throws if a valid form cannot be found."
  [line]
  (binding [r/*data-readers* tags/*cljs-data-readers*]
    (r/read-string {:read-cond :allow :features #{:cljs}} line)))

(defn ns-form?
  [form]
  (and (seq? form) (= 'ns (first form))))

(defn macro?
  "Is the input analyzer var (from either cljs.analyzer/resolve-var or
  cljs.analyzer/resolve-macro-var) a macro?"
  [var]
  (:macro var))

(defn extract-namespace
  [source]
  (let [first-form (repl-read-string source)]
    (when (ns-form? first-form)
      (second first-form))))

(defn resolve
  "From cljs.analyzer.api.clj. Given an analysis environment resolve a
  var. Analogous to clojure.core/resolve"
  [opts env sym]
  {:pre [(map? env) (symbol? sym)]}
  (let [macro-var (ana/resolve-macro-var env sym)
        var (ana/resolve-var env sym ana/confirm-var-exist-warning)]
    (when (:verbose opts)
      (do (common/debug-prn "cljs.analyzer/resolve-macro-var returned" (with-out-str (pprint macro-var)))
          (common/debug-prn "cljs.analyzer/resolve-var returned" (with-out-str (pprint var)))))
    ;; AR - we need to merge because ana/resolve-var sometimes returns more
    ;; info than ana/resolve-macro-var, sometimes not
    (merge macro-var var)))

(defn get-var
  [opts env sym]
  (let [var (with-compiler-env st (resolve opts env sym))]
    (if (= (namespace (:name var)) (str (:ns var)))
      (update var :name #(symbol (name %)))
      var)))

(def replumb-repl-special-set
  '#{in-ns require require-macros import load-file doc source pst dir apropos find-doc})

(defn repl-special?
  [form]
  (and (seq? form) (replumb-repl-special-set (first form))))

(defn make-base-eval-opts!
  "Gets the base set of evaluation options. The 1-arity function
  specifies opts that override default. No check here if opts are
  valid."
  ([]
   (make-base-eval-opts! {}))
  ([opts]
   {:ns (:current-ns @app-env)
    :context :expr
    :source-map false
    :def-emits-var true
    :load (:load-fn! opts)
    :eval cljs/js-eval
    :verbose (or (:verbose opts) false)
    :static-fns false}))

(defn self-require?
  [specs]
  (some
   (fn [quoted-spec-or-kw]
     (and (not (keyword? quoted-spec-or-kw))
          (let [spec (second quoted-spec-or-kw)
                ns (if (sequential? spec)
                     (first spec)
                     spec)]
            (= ns @current-ns))))
   specs))

(defn canonicalize-specs
  [specs]
  (letfn [(canonicalize [quoted-spec-or-kw]
            (if (keyword? quoted-spec-or-kw)
              quoted-spec-or-kw
              (as-> (second quoted-spec-or-kw) spec
                (if (vector? spec) spec [spec]))))]
    (map canonicalize specs)))

(defn purge-ns!
  [st ns]
  (swap! st ast/dissoc-ns ns)
  (swap! cljs.js/*loaded* disj ns))

(defn process-reloads!
  [specs]
  (if-let [k (some #{:reload :reload-all} specs)]
    (let [specs (remove #{k} specs)]
      (if (= k :reload-all)
        (doseq [ns @cljs.js/*loaded*]
          (purge-ns! st ns))
        (doseq [ns (map first specs)]
          (purge-ns! st ns)))
      specs)
    specs))

(defn make-ns-form
  [kind specs target-ns]
  (if (= kind :import)
    (with-meta `(~'ns ~target-ns
                  (~kind
                   ~@(map (fn [quoted-spec-or-kw]
                            (if (keyword? quoted-spec-or-kw)
                              quoted-spec-or-kw
                              (second quoted-spec-or-kw)))
                          specs)))
      {:merge true :line 1 :column 1})
    (with-meta `(~'ns ~target-ns
                  (~kind
                   ~@(-> specs canonicalize-specs process-reloads!)))
      {:merge true :line 1 :column 1})))

(defn goog-deps-map
  "Given the content of goog/deps.js file, create a map
  provide->path (without extension) of Google dependencies.

  Adapted from planck:
  https://github.com/mfikes/planck/blob/master/planck-cljs/src/planck/repl.cljs#L438-L451"
  [deps-js-content]
  (let [paths-to-provides (map (fn [[_ path provides]]
                                 [path (map second (re-seq #"'(.*?)'" provides))])
                               (re-seq #"\ngoog\.addDependency\('(.*)', \[(.*?)\].*"
                                       deps-js-content))]
    (into {} (for [[path provides] paths-to-provides
                   provide provides]
               [(symbol provide) (str "goog/" (second (re-find #"(.*)\.js$" path)))]))))

(defn make-load-fn
  "Makes a load function that will read from a sequence of src-paths
  using a supplied read-file-fn!. It returns a cljs.js-compatible
  *load-fn*.

  Read-file-fn! is an async 2-arity function with signature [file-path
  src-cb] where src-cb is itself a function (fn [source] ...) that needs
  to be called with the full source of the library (as string)."
  [verbose? src-paths read-file-fn!]
  (if (and read-file-fn! (sequential? src-paths) (every? string? src-paths))
    (fn [{:keys [name macros path] :as load-map} cb]
      (cond
        (load/skip-load? load-map) (load/fake-load-fn! load-map cb)
        (re-matches #"^goog/.*" path) (if-let [goog-path (get-goog-path name)]
                                        (load/read-files-and-callback! verbose?
                                                                       (load/file-paths-for-closure src-paths goog-path)
                                                                       read-file-fn!
                                                                       cb)
                                        (cb nil))
        :else (load/read-files-and-callback! verbose?
                                             (load/file-paths-for-load-fn src-paths macros path)
                                             read-file-fn!
                                             cb)))
    (do (when verbose?
          (common/debug-prn "Invalid :read-file-fn! or :src-paths (is it sequential? Are all paths strings?). No *load-fn* will be passed to cljs.js."))
        ;; AR - by returning nil we force a "No *load-fn* set" in cljs.js
        nil)))

;;;;;;;;;;;;;;;;
;;; Options ;;;;
;;;;;;;;;;;;;;;;

(def valid-opts-set
  "Set of valid option used for external input validation."
  #{:verbose :warning-as-error :target :init-fn!
    :no-pr-str-on-value :load-fn! :read-file-fn! :src-paths})

(defn valid-opts
  "Validate the input user options. Returns a new map without invalid
  ones according to valid-opts-set."
  [user-opts]
  (into {} (filter (comp valid-opts-set first) user-opts)))

(defn add-default-opts
  "Given user provided options, conjoins the default option map for
  its :target (string or keyword). Defaults to conjoining :default (browser,
  aka :js target)."
  [opts user-opts]
  (merge opts (condp = (keyword (:target user-opts))
                :nodejs nodejs/default-opts
                browser/default-opts)))

(defn add-load-fn
  "Given current and user options, if :load-fn! is present in user-opts,
  conjoins it. Try to create and conjoin one from :src-paths
  and :read-file-fn! otherwise. Conjoins nil if it cannot."
  [opts user-opts]
  (assoc opts :load-fn!
         (or (:load-fn! user-opts)
             ;; AR - make-load-fn will validate :src-paths/:read-file-fn!
             (make-load-fn (:verbose user-opts)
                           (:src-paths user-opts)
                           (:read-file-fn! user-opts)))))

(defn add-init-fns
  "Given current and user options, returns a map containing a
  valid :init-fns,conjoining with the one in current if necessary."
  [opts user-opts]
  (update-in opts [:init-fns] (fn [init-fns]
                                (if-let [fn (:init-fn! user-opts)]
                                  (conj init-fns fn)
                                  init-fns))))

(defn normalize-opts
  "Process the user options. Returns the map that can be fed to
  read-eval-call."
  [user-opts]
  (let [vld-opts (valid-opts user-opts)]
    ;; AR - note the order here, the last always overrides
    (-> vld-opts
        (add-default-opts vld-opts)
        (add-load-fn vld-opts)
        (add-init-fns vld-opts))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Callback handling fns ;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn success-map
  "Builds the map to return when the evaluation returned success.
  Supports the following options:

  * :no-pr-str-on-value avoids wrapping value in pr-str."
  ([opts form warning value]
   {:success? true
    :form form
    :warning warning
    :value (if-not (:no-pr-str-on-value opts)
             (pr-str value)
             value)}))

(defn error-map
  "Builds the map to return when the evaluation returned error."
  ([opts form warning error]
   {:success? false
    :form form
    :warning warning
    :error error}))

(defn reset-last-warning!
  []
  (swap! app-env assoc :last-eval-warning nil))

(defn custom-warning-handler
  "Handles the case when the evaluation returns a warning and can be
  passed as a warning handler when partially applied. At the moment it
  treats warnings as errors."
  [opts cb warning-type env extra]
  (when (:verbose opts)
    (common/debug-prn (str "Handling warning:\n" (with-out-str (pprint {:warning-type warning-type
                                                                        :env env
                                                                        :extra extra})))))
  (when (warning-type ana/*cljs-warnings*)
    (when-let [s (ana/error-message warning-type extra)]
      (swap! app-env assoc :last-eval-warning (ana/message env s)))))

(defn validated-call-back!
  [call-back! res]
  {:pre [(map? res)
         (find res :form)
         (or (find res :error) (find res :value))
         (or (and (find res :value) (get res :success?))
             (and (find res :error) (not (get res :success?))))
         (or (and (find res :value) (string? (get res :value)))
             (and (find res :error) (instance? js/Error (get res :error))))
         (or (not (find res :warning))
             (and (find res :warning)) (string? (get res :warning)))]}
  (call-back! res))

(defn validated-init-fn!
  [init-fn! res]
  {:pre [(map? res)
         (find res :form)
         (find res :ns)
         (= *target*  (get res :target))]}
  (init-fn! res))

(defn call-side-effect!
  "Execute the correct side effecting function from data.
  Handles :side-effect-fn!, :on-error-fn! and on-success-fn!."
  [data {:keys [value error]}]
  (if-let [f! (:side-effect-fn! data)]
    (f!)
    (if-not error
      (when-let [s! (:on-success-fn! data)] (s!))
      (when-let [e! (:on-error-fn! data)] (e!)))))

(defn warning-error-map!
  "Checks if there has been a warning and if so will return a new result
  map instead of the input one, potentially with a :warning key
  containing the warning message in it.

  The code paths are the following:

  - if the input map was already an :error, there will be no warning,
  the original :error is returned.
  - if the input map was a :value:
    - if (:warning-as-error opts) is truey, the new map will always
      contain it as :error, overriding the original.
    - if (:warning-as-error opts) is falsey, the new map will contain
      the warning as :warning along with the original :value"

  [opts {:keys [error] :as orig}]
  (if-let [warning-msg (:last-eval-warning @app-env)]
    (if-not error
      (if (not (:warning-as-error opts))
        (assoc orig :warning warning-msg)
        (let [warning-error (ex-info warning-msg ex-info-data)]
          (when (:verbose opts)
            (common/debug-prn "Erroring on last warning: " warning-msg))
          (common/wrap-error warning-error)))
      orig)
    orig))

(defn call-back!
  "Handles the evaluation result, calling the callback in the right way,
  based on the success or error of the evaluation. The res parameter
  expects the same map as ClojureScript's cljs.js callback,
  :value if success and :error if not. The data parameter might contain
  additional stuff:

  * :form the source form that has been eval-ed
  * :on-success-fn! 0-arity function that will be executed on success
  * :on-error-fn! 0-arity function that will be executed on error
  * :side-effect-fn! 0-arity function that if present will be executed
  for both success and error, effectively disabling the individual
  on-success-fn! and on-error-fn!

  Call-back! supports the following opts:

  * :verbose will enable the the evaluation logging, defaults to false.
  * :no-pr-str-on-value avoids wrapping successful value in a pr-str
  * :warning-as-error will consider a warning like an error

  Notes:
  1. The opts map passed here overrides the environment options.
  2. This function will also clear the :last-eval-warning flag in
  app-env.
  3. It will execute (:side-effect-fn!) or (on-success-fn!)
  and (on-error-fn!)  *before* the callback is called.

  ** Every function in this namespace should call call-back! as
  single point of exit. **"
  ([opts cb res]
   (call-back! opts cb {} res))
  ([opts cb data res]
   (when (:verbose opts)
     (common/debug-prn "Calling back!\n" (with-out-str (pprint {:opts (common/filter-fn-keys opts)
                                                                :data (common/filter-fn-keys data)
                                                                :res res}))))
   (let [new-map (warning-error-map! opts res)]
     (let [{:keys [value error warning]} new-map]
       (call-side-effect! data new-map)
       (reset-last-warning!)
       (if-not error
         (do (set! *e nil)
             (cb (success-map opts (:form data) warning value)))
         (do (set! *e error)
             (cb (error-map opts (:form data) warning error))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Processing fns - from mfikes/plank ;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn process-require
  [opts cb data kind specs]
  ;; TODO - cannot find a way to handle (require something) correctly, note no quote
  (if-not (= 'quote (ffirst specs))
    (call-back! opts cb data (common/error-argument-must-be-symbol "require" ex-info-data))
    (let [is-self-require? (and (= :kind :require) (self-require? specs))
          [target-ns restore-ns] (if-not is-self-require?
                                   [(:current-ns @app-env) nil]
                                   ['cljs.user (:current-ns @app-env)])
          ns-form (make-ns-form kind specs target-ns)]
      (when (:verbose opts)
        (common/debug-prn "Processing" kind "via" (pr-str ns-form)))
      (cljs/eval st
                 ns-form
                 (make-base-eval-opts! opts)
                 (fn [{error :error}]
                   (call-back! opts cb
                               (merge data
                                      {:side-effect-fn! #(when is-self-require?
                                                           (swap! app-env assoc :current-ns restore-ns))})
                               (if error
                                 (common/wrap-error error)
                                 (common/wrap-success nil))))))))

(defn process-doc
  [opts cb data sym]
  (call-back! (merge opts {:no-pr-str-on-value true})
              cb
              data
              (common/wrap-success
               (with-out-str
                 (cond
                   (docs/special-doc-map sym) (repl/print-doc (docs/special-doc sym))
                   (docs/repl-special-doc-map sym) (repl/print-doc (docs/repl-special-doc sym))
                   (ast/namespace @st sym) (repl/print-doc (select-keys (ast/namespace @st sym) [:name :doc]))
                   :else (repl/print-doc (get-var opts (empty-analyzer-env) sym)))))))

(defn process-pst
  [opts cb data expr]
  (if-let [expr (or expr '*e)]
    (cljs/eval st
               expr
               (make-base-eval-opts! opts)
               (fn [res]
                 (let [[opts msg] (if res
                                    [(assoc opts :no-pr-str-on-value true) (common/extract-message res true true)]
                                    [opts res])]
                   (call-back! opts cb data (common/wrap-success msg)))))
    (call-back! opts cb data (common/wrap-success nil))))

(defn process-in-ns
  [opts cb data ns-string]
  (cljs/eval
   st
   ns-string
   (make-base-eval-opts! opts)
   (fn [result]
     (if (and (map? result) (:error result))
       (call-back! opts cb data result)
       (let [ns-symbol result]
         (when (:verbose opts)
           (common/debug-prn "in-ns argument is symbol? " (symbol? ns-symbol)))
         (if-not (symbol? ns-symbol)
           (call-back! opts cb data (common/error-argument-must-be-symbol "in-ns" ex-info-data))
           (if (some (partial = ns-symbol) (ast/known-namespaces @st))
             (call-back! opts cb
                         (merge data {:side-effect-fn! #(swap! app-env assoc :current-ns ns-symbol)})
                         (common/wrap-success nil))
             (let [ns-form `(~'ns ~ns-symbol)]
               (cljs/eval
                st
                ns-form
                (make-base-eval-opts! opts)
                (fn [error]
                  (call-back! opts
                              cb
                              (merge data {:on-success-fn! #(swap! app-env assoc :current-ns ns-symbol)})
                              (if error
                                (common/wrap-error error)
                                (common/wrap-success nil)))))))))))))

(defn fetch-source
  [{:keys [verbose read-file-fn!]} var paths-to-try cb]
  (if read-file-fn!
    (load/read-files-and-callback! verbose
                                   paths-to-try
                                   read-file-fn!
                                   (fn [result]
                                     (if result
                                       (let [source (:source result)
                                             rdr (rt/source-logging-push-back-reader source)]
                                         (dotimes [_ (dec (:line var))] (rt/read-line rdr))
                                         (-> (r/read {:read-cond :allow :features #{:cljs}} rdr)
                                             meta
                                             :source
                                             common/wrap-success
                                             cb))
                                       (cb (common/wrap-success "nil")))))
    (do (when verbose
          (common/debug-prn "No :read-file-fn! provided, skipping source fetching..."))
        (cb (common/wrap-success "nil")))))

;; Inspired by cljs.repl/source-fn
(defn process-source
  [opts cb data sym]
  (let [var (get-var opts (empty-analyzer-env) sym)
        call-back (partial call-back! (merge opts {:no-pr-str-on-value true}) cb data)]
    (if-let [full-path-or-ns (or (:file var) (:file (:meta var)))]
      ;; see discussion here: https://github.com/ScalaConsultants/replumb/issues/17#issuecomment-163832028
      ;; if (symbol? filepath) is true, filepath will contain the symbol of a namespace
      ;; eg. clojure.set
      (let [paths-to-try (if-not (symbol? full-path-or-ns)
                           (load/file-paths (:src-paths opts) full-path-or-ns)
                           (load/file-paths-for-load-fn (:src-paths opts) ;; this branch tries the conversion ns->file
                                                        (macro? var)
                                                        (cljs/ns->relpath full-path-or-ns)))]
        (fetch-source opts var paths-to-try call-back))
      (call-back (common/wrap-success "nil")))))

(defn process-dir
  [opts cb data sym]
  (let [vars (-> (ast/ns-publics @st sym) keys sort)
        call-back (partial call-back! (merge opts {:no-pr-str-on-value true}) cb data)]
    (if (seq vars)
      (call-back (common/wrap-success (s/join \newline vars)))
      (call-back (common/wrap-success "nil")))))

(defn process-apropos
  [opts cb data str-or-pattern]
  (let [matches? (if (instance? js/RegExp str-or-pattern)
                   #(re-find str-or-pattern (str %))
                   #(< -1 (.indexOf (str %) (str str-or-pattern))))
        defs (->> (ast/known-namespaces @st)
                  (mapcat (fn [ns]
                            (let [ns-name (str ns)]
                              (map #(symbol ns-name (str %))
                                   (filter matches? (keys (ast/ns-publics @st ns)))))))
                  sort)]
    (call-back! opts cb data (common/wrap-success (seq defs)))))

(defn process-find-doc
  [opts cb data re-string-or-pattern]
  (let [re (re-pattern re-string-or-pattern)
        ms (concat
            (mapcat
             (fn [ns]
               (map
                (fn [m]
                  (update-in (select-keys m [:ns :name :doc :forms :arglists :macro :url])
                             [:name] #(if-not (nil? %) (clojure.core/name %) %)))
                (sort-by :name (vals (ast/ns-interns @st ns)))))
             (ast/known-namespaces @st))
            (map #(select-keys (ast/namespace @st %) [:name :doc]) (ast/known-namespaces @st))
            (map docs/special-doc (keys docs/special-doc-map)))
        ms (for [m ms
                 :when (and (:doc m)
                            (or (re-find re (:doc m))
                                (re-find re (str (:name m)))))]
             m)
        call-back (partial call-back! (merge opts {:no-pr-str-on-value true}) cb data)]
    (if (seq ms)
      (call-back (common/wrap-success (s/join (map #(with-out-str (repl/print-doc %)) ms))))
      (call-back (common/wrap-success "nil")))))

(defn process-repl-special
  [opts cb data expression-form]
  (let [argument (second expression-form)]
    (case (first expression-form)
      in-ns (process-in-ns opts cb data argument)
      require (process-require opts cb data :require (rest expression-form))
      require-macros (process-require opts cb data :require-macros (rest expression-form))
      import (process-require opts cb data :import (rest expression-form))
      doc (process-doc opts cb data argument)
      source (process-source opts cb data argument)
      pst (process-pst opts cb data argument)
      dir (process-dir opts cb data argument)
      apropos (process-apropos opts cb data argument)
      find-doc (process-find-doc opts cb data argument)
      load-file (call-back! opts cb data (common/error-keyword-not-supported "load-file" ex-info-data))))) ;; (process-load-file argument opts)

(defn process-1-2-3
  [data expression-form value]
  (when-not (or ('#{*1 *2 *3 *e} expression-form)
                (ns-form? expression-form))
    (set! *3 *2)
    (set! *2 *1)
    (set! *1 value)))

;;;;;;;;;;;;;;;;;;;;;;
;;; Initialization ;;;
;;;;;;;;;;;;;;;;;;;;;;

(def init-option-set #{:init-fn! :src-paths})

;;; Init FSM

(defn initializing-state
  "If we are not already :initializing? and :needs-init? is true, then
  move to the \"Initializing\" state, signaling that the init is in
  progress."
  [old-app-env]
  (if (and (not (:initializing? old-app-env))
           (:needs-init? old-app-env))
    (assoc old-app-env :initializing? true)
    (assoc old-app-env :needs-init? false)))

(defn initialized-state
  "Move the state to \"Initialized\", signaling that the init is not in
  progress and done."
  [old-app-env]
  {:pre [(:needs-init? old-app-env) (:initializing? old-app-env)]}
  (merge old-app-env {:initializing? false
                      :needs-init? false}))

(defn auto-init-opts
  "Just assoc the options to persist to the input map."
  [opts]
  (into {} (filter #(init-option-set (first %)) opts)))

(defn needs-init-state
  "Reset the initialization state, moving to \"Needs Init\", signaling
  that the we need to initialize the app."
  [old-app-env]
  (merge old-app-env {:initializing? false
                      :needs-init? true}))

(defn needs-init-from-opts-state
  "Update the :previous-auto-init-opts and, if necessary, also
  turns :needs-init? to true, concretely deciding whether when need to
  initialise again. Move the state to \"Needs Init\"."
  [old-app-env new-opts]
  (if-not (= (:previous-init-opts old-app-env)
             (auto-init-opts new-opts))
    (needs-init-state old-app-env)
    old-app-env))

(defn force-init!
  "Force the initialization at the next read-eval-call. Use this every
  time an option that needs to be read at initialization time changes,
  e.g. :source-path. In the future this will be automated."
  []
  (swap! app-env needs-init-state))

(defn persist-init-opts!
  "Persist the options necessary to the initialization FSM to work."
  [opts]
  (swap! app-env assoc :previous-init-opts (auto-init-opts opts)))

(defn reset-init-opts!
  "Reset the initialization persisted options."
  []
  (swap! app-env assoc :previous-init-opts {}))

(defn init-closure-index!
  "Create and swap in app-env a map from Google Closure provide string
  to their respective path (without extension).  It merges with the
  current map if many deps.js are on the source path, precedence to the
  last (as per merge)."
  [opts]
  (let [verbose? (:verbose opts)
        read-file! (:read-file-fn! opts)]
    (if read-file!
      (do (when verbose?
            (common/debug-prn "Discovering goog/deps.js in" (:src-paths opts)))
          (doseq [path (:src-paths opts)]
            (let [goog-deps-path (str (common/normalize-path path) "goog/deps.js")]
              (read-file! goog-deps-path
                          (fn [content]
                            (when content
                              (do (when verbose?
                                    (common/debug-prn "Found valid" goog-deps-path))
                                  (swap! app-env
                                         update :goog-provide->path
                                         merge (goog-deps-map content)))))))))
      (when verbose?
        (common/debug-prn "No :read-file-fn! provided, skipping goog/deps.js discovering...")))))

(defn init-repl!
  "The init-repl function. It uses the following opts keys:

  * :init-fns initialization function vector, it will be executed in
  order

  Data is passed from outside and will be forwarded to :init-fn!."
  [opts data]
  (when (:verbose opts)
    (common/debug-prn "Initializing REPL environment with data" (println data)))

  ;; Target/user init, we need at least one init-fn, the default init function
  (let [init-fns (:init-fns opts)]
    (assert (> (count init-fns) 0))
    (doseq [init-fn! init-fns]
      (init-fn! data)))
  ;; Building the closure index
  (init-closure-index! opts)
  ;; Persist the options I need for auto init
  (persist-init-opts! opts))

(defn init-repl-if-necessary!
  [opts data]
  (when (:needs-init? (swap! app-env #(-> %
                                          (needs-init-from-opts-state opts)
                                          initializing-state)))
    (do (init-repl! opts data)
        (swap! app-env initialized-state))))

;;;;;;;;;;;;;;;;;;;;;;
;;; Read-Eval-Call ;;;
;;;;;;;;;;;;;;;;;;;;;;

(defn read-eval-call
  "Reads, evaluates and calls back with the evaluation result.

  The first parameter is a map of configuration options, currently
  supporting:

  * :verbose - will enable the the evaluation logging, defaults to false
  * :warning-as-error - will consider a compiler warning as error
  * :target - :nodejs and :browser supported, the latter is used if
  missing
  * :init-fn! - user provided initialization function, it will be passed
  a map of data currently containing:

      :form   ;; the form to evaluate, as data, past the reader step
      :ns     ;; the current namespace, as symbol
      :target ;; *target* as keyword, :default is the default

  * :load-fn! - will override replumb's default cljs.js/*load-fn*.
  It rules out :read-file-fn!, losing any perk of using replumb.load
  helpers. Use it if you know what you are doing.

  * :read-file-fn! an asynchronous 2-arity function with signature
  [file-path src-cb] where src-cb is itself a function (fn [source] ...)
  that needs to be called with the file content as string (nil if no
  file is found). It is mutually exclusive with :load-fn! and will be
  ignored in case both are present

  * :src-paths - a vector of paths containing source files.

  The second parameter cb, is a 1-arity function which receives the
  result map.

  Therefore, given cb (fn [result-map] ...), the main map keys are:

  :success? ;; a boolean indicating if everything went right
  :value    ;; (if (success? result)) will contain the actual yield of the evaluation
  :error    ;; (if (not (success? result)) will contain a js/Error
  :warning  ;; in case a warning was thrown and :warning-as-error is falsey
  :form     ;; the evaluated form as data structure (not a string)

  The third parameter is the source string to be read and evaluated.

  It initializes the repl harness either on first execution or if an
  option in #{:src-paths :init-fn!} changes from the previous
  `read-eval-call`."
  [opts cb source]
  (try
    (let [expression-form (repl-read-string source)
          opts (normalize-opts opts) ;; AR - does the whole user option processing
          data {:form expression-form
                :ns (:current-ns @app-env)
                :target (keyword *target*)}]
      (init-repl-if-necessary! opts data)
      (when (:verbose opts)
        (common/debug-prn "Calling eval-str on" expression-form "with options" (common/filter-fn-keys opts)))
      (binding [ana/*cljs-warning-handlers* [(partial custom-warning-handler opts cb)]]
        (if (repl-special? expression-form)
          (process-repl-special opts cb data expression-form)
          (cljs/eval-str st
                         source
                         source
                         ;; opts (map)
                         (make-base-eval-opts! opts)
                         (fn [res]
                           (when (:verbose opts)
                             (common/debug-prn "Evaluation returned: " res))
                           (call-back! opts cb
                                       (merge data
                                              {:on-success-fn! #(do (process-1-2-3 data expression-form (:value res))
                                                                    (swap! app-env assoc :current-ns (:ns res)))})
                                       res))))))
    (catch :default e
      (when (:verbose opts)
        (common/debug-prn "Exception caught in read-eval-call: " (.-stack e)))
      (call-back! opts cb {} (common/wrap-error e)))))

(defn reset-env!
  "It does the following (in order):

  1. in-ns to cljs.user
  2. remove the input namespaces from the compiler environment
  3. reset the last warning
  4. set *e to nil

  It accepts a sequence of symbols or strings."
  ([]
   (reset-env! nil))
  ([opts]
   (reset-env! opts nil))
  ([opts namespaces]
   (read-eval-call opts identity "(in-ns 'cljs.user)")
   (doseq [ns namespaces]
     (purge-ns! st (symbol ns))
     (purge-ns! st (symbol (str ns "$macros"))))
   (if (seq @cljs.js/*loaded*)
     (throw (ex-info (str "The cljs.js/*loaded* atom still contains " @cljs.js/*loaded* " - make sure you purge dependent namespaces.") ex-info-data)))
   (reset-last-warning!)
   (read-eval-call opts identity "(set! *e nil)")
   (reset-init-opts!)))