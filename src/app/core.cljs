(ns app.core
  (:require [cljs.js :as jsc]
            [cljs.analyzer :as ana]
            [app.timers :as timers]
            [devtools.core :as devtools]
            [cljsjs.codemirror]
            [cljsjs.codemirror.addon.edit.closebrackets]
            [cljsjs.codemirror.addon.edit.matchbrackets]
            [cljsjs.codemirror.mode.clojure]
            [cljsjs.codemirror.mode.javascript]
            [cljsjs.codemirror.keymap.vim]
            [cljs.pprint :as pprint]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(devtools/install!) ;(enable-console-print!)

(def default-code
  "
(defn change-color [state]
  (assoc state :color (rand 255)))
(defn update-state [state]
  (if (= 0 (t/num-timers state))
    (t/add-timer state 500 change-color)
  state))
(defn draw [state]
  (q/background (:color state 100)))
")

(def default-state
  "
{:color 0
 :x 0}")

(def funcs {:update identity
            :mouse-moved identity
            :setup #(-> {})
            :key-pressed identity
            :draw (fn [state]
                    (q/background 200)
                    (q/ellipse 10 10 20 20))})

(defonce setup-mirror
  (js/CodeMirror.
   (js/document.getElementById "state")
   #js {:lineNumbers true
        :matchBrackets true
        :value default-state
        :autoCloseBrackets true
        :mode "clojure"}))

(defonce code-mirror
  (js/CodeMirror.
   (js/document.getElementById "text")
   #js {:lineNumbers true
        :matchBrackets true
        :value default-code
        :autoCloseBrackets true
        :mode "clojure"}))

(def current-state (js/document.getElementById "current-state"))

(js/Inlet setup-mirror)
(js/Inlet code-mirror)

(defn pprint-str [val]
  (pprint/write val :stream nil))

(def log-el (js/document.getElementById "log"))
(def reload-button (js/document.getElementById "button"))
(.addEventListener
 (js/document.getElementById "clear")
 "click" (fn [] (aset log-el "innerHTML" "")))

(defn str? [val]
  (= js/String (type val)))

(defn log [val]
  (let [el (js/document.createElement "div")
        val (if-not (str? val)
              (pprint-str val)
              val)]
    (aset el "textContent" val)
    (.appendChild log-el el)))

(defn debug [val] (js/console.log val))

(defn log-error [err]
  (log err))

(def compiler-state (jsc/empty-state))
(defonce compnumber (atom 0))

(defn ns-str [id]
  (str "(ns eval.main" id
       "  (:require [quil.core :as q]"
       "            [app.timers :as t]))"))

(def header "(declare update-state draw mouse-moved key-pressed)")

(def footer "
{:draw draw
 :update update-state
 :mouse-moved mouse-moved
 :key-pressed key-pressed
}")

(defn wrap-fn [kwd arg]
  (let [func (kwd funcs)]
    (when func
      (try (func arg)
       (catch js/Error e
         (log-error e)
         arg))))) ; we just return the arg passed in (might be state)

(defn make-app []
  (q/defsketch example
    :host "output"
    :size [300 300]
    :draw (partial wrap-fn :draw)
    :setup (fn []
             (def sketch (quil.sketch/current-applet))
             (wrap-fn :setup))
    :mouse-moved (partial wrap-fn :mouse-moved)
    :key-pressed (partial wrap-fn :key-pressed)
    :update (fn [state]
              (let [state (or (wrap-fn :update state) state)]
                (aset current-state
                      "textContent" (pprint-str state))
                state))
    :middleware [m/fun-mode timers/middleware]))

(defn eval [source file-name callback]
  (jsc/eval-str
   compiler-state
   source
   file-name
   {:eval (fn [val cb]
            (jsc/js-eval val cb))}
   callback))

(defn run-setup []
  (let [next-num (swap! compnumber inc)
        source (str (ns-str next-num))]
    (eval source (str "eval-setup-" next-num ".cljs")
          (fn [{setup-fn :value}]
            (def funcs (assoc funcs :setup setup-fn))
            (make-app)))))

(defn run-code []
  (let [next-num (swap! compnumber inc)
        source (str (ns-str next-num)
                    header
                    (.getValue code-mirror)
                    footer)]
    (eval source (str "eval-code-" next-num ".cljs")
          (fn [{new-funcs :value}]
            (def funcs
              (merge funcs new-funcs))))))

(.on setup-mirror "change" run-setup)
(.on code-mirror "change" run-code)

(aset reload-button "onclick"
      (fn []
        (run-setup)
        (run-code)
        (make-app)
        ))

(defn main []
  (debug "wat")
  (js/console.log "www"))

(swap! jsc/*loaded* conj 'quil.core)
(swap! jsc/*loaded* conj 'app.timers)

(defn set-print! []
  (set! cljs.core/*print-newline* false)
  (set! cljs.core/*print-err-fn*
        (fn [& args]
          (if (= 1 (count args))
            (log (first args))
            (log args))))
  (set! cljs.core/*print-fn*
        (fn [& args]
          (if (= 1 (count args))
            (log (first args))
            (log args)))))

(set-print!)
(make-app)
(run-code)

(js/setTimeout set-print! 100)
