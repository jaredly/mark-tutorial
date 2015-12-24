(ns app.core
  (:require [cljs.js :as jsc]
            [cljs.analyzer :as ana]
            [app.timers :as timers]
            [devtools.core :as devtools]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(devtools/install!)

(def funcs {:update identity
            :mouse-moved identity
            :setup #(-> {})
            :key-pressed identity
            :draw (fn [state]
                    (q/background 200)
                    (q/ellipse 10 10 20 20))})

(def text-area (js/document.getElementById "text"))
(def button (js/document.getElementById "button"))
(enable-console-print!)

(def compiler-state (jsc/empty-state))

(defn run-code []
  (let [source (str "(ns app.core (:require [quil.core :as q] [app.timers :as t]))"
                    (.-value text-area)
                    "{:update update :draw draw}")]
    (jsc/eval-str compiler-state
            source
            "evaled-source"
            {:eval (fn [val cb]
                     (println val)
                     (js/console.log val)
                     (js/console.log 11)
                     (jsc/js-eval val cb))
             }
            (fn [{{:keys [draw update]} :value :as full}]
              (println full)
              (def funcs
                (merge funcs (:value full))))
            )))

;(aset text-area "value" "Hello!")
(aset button "onclick" run-code)

(def convert clj->js)

(q/defsketch example
  :host "output"
  :size [200 200]
  :draw #(do
          ((:draw funcs) %))
  :setup #(
           (:setup funcs) %)
  :mouse-moved #(
                 (:mouse-moved funcs) %)
  :key-pressed #(
                 (:key-pressed funcs) %)
  :update #(
            (:update funcs) %)
  :middleware [m/fun-mode timers/middleware])

(defn main []
  (println "wat")
  (js/console.log "www"))
(swap! jsc/*loaded* conj 'quil.core)
(swap! jsc/*loaded* conj 'app.timers)
