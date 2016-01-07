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

(devtools/install!)

(def WIDTH 300)
(def HEIGHT 300)

(def convert clj->js)

(def default-code
  "
(defn change-color [state]
  (assoc state :color (rand 255)))

(defn clamp [val mx]
  (max (min val mx) (- mx)))

(defn bounce [{:keys [x y dx dy width height] :as state}]
  (let [dx (clamp dx 7)
        dy (clamp dy 7)
        [x dx] (cond
                 (< x 0) [0 (- dx)]
                 (> x (- WIDTH width)) [(- WIDTH width) (- dx)]
                 :default [(+ x dx) dx])
        [y dy] (cond
                 (< y 0) [0 (- dy)]
                 (> y (- HEIGHT height)) [(- HEIGHT height) (- dy)]
                 :default [(+ y dy) (+ dy 0.2)])]
    (merge state {:x x :y y :dx dx :dy dy})))

(defn update-color [state]
  (when (= 0 (t/num-timers state))
    (t/add-timer state 500 change-color)))

(def update-functions
  [update-color bounce])

(defn draw [{:keys [x y color]}]
  (q/background color)
  (q/rect x y 10 10))
")

(def default-state
  "
{:color 0
 :x 0
 :y 0
 :dx (rand 5)
 :dy (rand 5)
 :width 10
 :height 10}")

(def funcs
  {:update-functions []
   :mouse-moved nil
   :setup #(-> {})
   :key-pressed nil
   :draw nil})

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

(defn debug [& val]
  (let [val (if (= 1 (count val))
              (first val)
              val)]
    (js/console.log val)))

(defn log-error [err]
  (log err))

(def compiler-state (jsc/empty-state))
(defonce compnumber (atom 0))

(defn ns-str [id]
  (str "(ns eval.main" id
       "  (:require [quil.core :as q]"
       "            [app.timers :as t]))"))

(def header (str "(declare update-functions draw mouse-moved key-pressed)"
                 "(def WIDTH " WIDTH ")(def HEIGHT " HEIGHT ")"))

(def footer "
{:draw draw
 :update-functions update-functions
 :mouse-moved mouse-moved
 :key-pressed key-pressed
}")

(defn wrap-fn [kwd arg]
  (let [func (kwd funcs)]
    (when func
      (try (func arg)
       (catch js/Error e
         (log-error (str "Unable to execute " kwd " " e))
         arg))))) ; we just return the arg passed in (might be state)

(declare sketch)

(defn try-wrap [f arg]
  (try (f arg)
       (catch js/Error e
         (log-error e)
         arg)))

(defn make-app []
  (q/defsketch example
    :host "output"
    :size [WIDTH HEIGHT]
    :draw (partial wrap-fn :draw)
    :setup (fn []
             (js/console.log "first thing or what" result)
             (def sketch (quil.sketch/current-applet))
             (let [result (or (wrap-fn :setup) {})]
               (js/console.log "resulting setup" result)
               result))
    :mouse-moved (partial wrap-fn :mouse-moved)
    :key-pressed (partial wrap-fn :key-pressed)
    :update (fn [state]
              (js/console.log "update" state)
              (let [functions (:update-functions funcs)
                    state (reduce #(or (try-wrap %2 %1) %1) state functions)]
                (aset current-state
                      "textContent" (pprint-str state))
                (js/console.log "updated" state functions)
                state))
    :middleware [m/fun-mode timers/middleware])
  )

(defn reset-setup []
  (if sketch
    (reset! (.-quil sketch) (wrap-fn :setup))))

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
        source (str (ns-str next-num)
                    (.getValue setup-mirror)
                    )]
    (debug "setup" source)
    (eval source (str "eval-setup-" next-num ".cljs")
          (fn [{initial-state :value :as full}]
            (js/console.log full initial-state)
            (def funcs (assoc funcs :setup #(-> initial-state)))
            (reset-setup)))))

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

(defn throttle [f time]
  (let [last (atom nil)]
    (fn [& args]
      (js/clearTimeout @last)
      (reset! last (js/setTimeout #(apply f args)
                                  time)))))

(defonce -setup
  (do
    (.on setup-mirror "change" run-setup)
    (.on code-mirror "change" (throttle run-code 400))
    nil))

(aset reload-button "onclick"
      (fn []
        (run-setup)
        (run-code)
        (reset-setup)
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
(run-setup)
(run-code)
(make-app)

(js/setTimeout set-print! 100)
