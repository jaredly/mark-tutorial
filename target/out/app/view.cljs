(ns app.view
  (:require [re-frame.core :refer [dispatch
                                   register-sub
                                   dispatch-sync
                                   register-handler
                                   subscribe]]
            [reagent.core :as r]

            [app.handlers]
            [app.subs]
            [app.views.helpers :as helpers]
            )
  (:require-macros
   [reagent.ratom :refer [reaction]]))

(def styles
  {:container {:font-family "monospace"
               :flex 1
               :background-color "white"
               :display :flex
               :white-space "pre-wrap"}
   :repl-items {:flex 1
                :overflow :auto
                :height 200
                :flex-shrink 1
                }
   :repl-item {:flex-direction :row
               :padding "3px 5px"}
   :input-item {}
   :output-item {}
   :input-caret {:margin-right 10}
   :output-caret {:margin-right 10}
   :repl-input {:padding "5px 10px"
                :font-family "monospace"
                :font-size "1.3em"}
   })

(def view (partial helpers/view styles))
(def text (partial helpers/text styles))

(defn str? [val]
  (= js/String (type val)))

(defn pprint-str [val]
  (pprint/write val :stream nil))

(defmulti repl-item :type)
(defmethod repl-item :input
  [{:keys [text]}]
  [view {:style [:repl-item :input-item]} [view :input-caret ">"] text])
(defmethod repl-item :log
  [{:keys [value]}]
  [view {:style [:repl-item :log-item]} (if (str? value)
                    value
                    (pprint-str value))])
(defmethod repl-item :output
  [{:keys [value]}]
  [view {:style [:repl-item :output-item]} [view :output-caret "<"] (pr-str value)])

(defn repl-items [items]
  (into
   [view :repl-items]
   (map repl-item items)))

(defn repl-input [submit]
  (let [text (subscribe [:current-text])
        keydown (fn [evt]
                  (when-not (= :none (case (.-keyCode evt)
                                       13 (submit @text)
                                       38 (dispatch [:go-up])
                                       40 (dispatch [:go-down])
                                       :none))
                    (.preventDefault evt)))]
    (fn []
      [:input {:on-change #(dispatch [:set-text (.-target.value %)])
               :placeholder "ClojureScript REPL"
               :on-key-down keydown
               :style (:repl-input styles)
               :value @text}])))

(defn repl [execute]
  (let [items (subscribe [:items])
        submit (fn [text]
                 (dispatch [:add-input text])
                 (execute text #(do
                                  (js/console.log "Got result" [%1 %2])
                                  (dispatch [:add-result %2]))))]
    (fn []
      [view :container
       [repl-items @items]
       [repl-input submit]])))

(def initial-state
  {:items []
   :hist-pos 0
   :history [""]})

(defn init []
  (dispatch-sync [:init initial-state]))

(defn log [val]
  (dispatch [:add-item {:type :log :value val}]))

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
