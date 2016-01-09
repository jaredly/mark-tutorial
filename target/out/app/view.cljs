(ns app.view
  (:require [re-frame.core :refer [dispatch
                                   register-sub
                                   dispatch-sync
                                   register-handler
                                   subscribe]]
            [clojure.string :as str]
            [reagent.core :as r]
            [devtools.format :as devtools]
            [cljs.reader]

            [cljs.pprint :as pprint]
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
   :error-item {:color :red
                :padding "5px 10px"}
   :caret {
           :color "#aaa"
           :font-weight "bold"
           :margin-right 5
           :margin-left 5
           :font-size 11
           :padding-top 2
           }
   :input-caret {:color "#555"}
   :input-text {:flex 1
                :word-wrap :break-word}
   :output-caret {}
   :output-value {:flex 1
                  :word-wrap :break-word}
   :repl-input {:padding "5px 10px"
                :font-family "monospace"
                :font-size "1.3em"}
   :clear-button {}

   :value-head {:flex-direction :row}
   :value-toggle {
                  :font-size 9
                  :padding 4
                  :cursor :pointer}
   })

(def view (partial helpers/view styles))
(def text (partial helpers/text styles))
(def button (partial helpers/button styles))

(defn str? [val]
  (= js/String (type val)))

(defn pprint-str [val]
  (pprint/write val :stream nil))


(defn show-str [val]
  (if (str? val)
    val
    (pprint-str val)))

(declare show-value)

(defn js-array? [val]
  (= js/Array (type val)))

(defn parse-style [raw]
  (into {}
        (map (fn [line]
               (let [[k v] (str/split line ":")]
                 [(keyword k) v]))(str/split raw ";"))))

(defn show-el [val]
  (let [type (first val)
        opts (second val)
        children (drop 2 val)]
    (if (= "object" type)
      [show-value (.-object opts) (.-config opts)]
      (into
       [(keyword type) {:style (when opts (parse-style (.-style opts)))}]
       (map #(if-not (js-array? %) % (show-el %)) children))
      )))

;; see https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview
(defn show-value [val config]
  (if (var? val)
    [view nil (show-str val)]
    (let [header (devtools/header-api-call val config)]
    (if-not header
      [view nil (show-str val)]
      (if-not (devtools/has-body-api-call val config)
        [view nil (show-el header)]
        (let [open (r/atom false)]
          (fn [_ _]
            (let [is-open @open]
              [view :value-with-body
               [view :value-head
                [view {:on-click #(swap! open not)
                       :style :value-toggle}
                 (if is-open "▼" "▶")]
                (show-el header)]
               (when is-open
                 (show-el (devtools/body-api-call val config)))
               ]))))))))

(defmulti repl-item :type)

(defmethod repl-item :input
  [{:keys [text]}]
  [view {:style [:repl-item :input-item]}
   [view {:style [:caret :input-caret]} ">"]
   [view :input-text text]])

(defmethod repl-item :log
  [{:keys [value]}]
  [view {:style [:repl-item :log-item]}
   [show-value value nil]])

(defmethod repl-item :error
  [{:keys [value]}]
  (let [message (.-message value)
        underlying (.-cause value)]
    [view {:style [:repl-item :output-item :error-item]}
     message
     (when underlying
       (.-message underlying)) ; TODO also show stack?
     ]))

(defmethod repl-item :output
  [{:keys [value]}]
  [view {:style [:repl-item :output-item]}
   [view {:style [:caret :output-caret]} "<"]
   [view :output-value [show-value value nil]]])

(defn repl-items [items]
  (into
   [view :repl-items]
   (map repl-item items)))

(defn code-mirror
  [value-atom {:keys [style
                      on-change
                      on-eval
                      on-up
                      on-down
                      should-go-up
                      should-go-down
                      should-eval]}]
  (let [cm (atom nil)]
    (r/create-class
     {:component-did-mount
      (fn [this]
        (let [el (r/dom-node this)
              inst (js/CodeMirror.
                    el
                    #js {:lineNumbers false
                         :viewportMargin js/Infinity
                         :matchBrackets true
                         :extraKeys
                         #js {"Shift-Enter" "newlineAndIndent"}
                         :value @value-atom
                         :autoCloseBrackets true
                         :mode "clojure"})]
          (reset! cm inst)
          (.on inst "change"
               (fn []
                 (let [value (.getValue inst)]
                   (when-not (= value @value-atom)
                     (on-change value)))))
          (.on inst "keydown"
               (fn [inst evt]
                 (case (.-keyCode evt)
                   13 (let [source (.getValue inst)] ; enter
                        (when (should-eval source inst evt)
                          (.preventDefault evt)
                          (on-eval source)))
                   38 (let [source (.getValue inst)] ; up
                        (when (should-go-up source inst)
                          (.preventDefault evt)
                          (on-up)))
                   40 (let [source (.getValue inst)] ; down
                        (when (should-go-down source inst)
                          (.preventDefault evt)
                          (on-down)))
                   :none)
                 ))
          ))
      :component-did-update
      (fn [this old-argv]
        (when-not (= @value-atom (.getValue @cm))
          (.setValue @cm @value-atom)
          (let [last-line (.lastLine @cm)
                last-ch (count (.getLine @cm last-line))]
            (.setCursor @cm last-line last-ch))))
      :reagent-render
      (fn [_ _ _]
        @value-atom
        [:div {:style style}])})))

(defn is-valid-cljs? [source]
  (try
    (do
      (cljs.reader/read-string source)
      true)
    (catch js/Error _
      false)))

(def cm-options
  {:should-go-up
   (fn [source inst]
     (let [pos (.getCursor inst)]
       (= 0 (.-line pos)))
     )
   :should-go-down
   (fn [source inst]
     (let [pos (.getCursor inst)
           last-line (.lastLine inst)]
       (= last-line (.-line pos))))

   :should-eval
   (fn [source inst evt] ; todo check syntax, cursor position
     (if (.-shiftKey evt)
       false
       (if (.-metaKey evt)
         true
         (let [lines (.lineCount inst)
               in-place (or (= 1 lines)
                            (let [pos (.getCursor inst)
                                  last-line (dec lines)]
                              (and
                               (= last-line (.-line pos))
                               (= (.-ch pos)
                                  (count (.getLine inst last-line))))))]
           (and in-place
                (is-valid-cljs? source))))))
   })

(defn repl-input [submit]
  (let [text (subscribe [:current-text])
        #_keydown #_(fn [evt]
                  (when-not (= :none (case (.-keyCode evt)
                                       13 (submit @text)
                                       38 (dispatch [:go-up])
                                       40 (dispatch [:go-down])
                                       :none))
                    (.preventDefault evt)))]
    (fn []

      [code-mirror text
       (merge
        cm-options
        {:style {:height "auto"
                 :border-top "2px solid #eee"
                 :font-size 16
                 :padding "2px"}
         :on-change #(dispatch [:set-text %])
         :on-eval #(submit %)
         :on-up #(dispatch [:go-up])
         :on-down #(dispatch [:go-down])})]
      )))

(defn repl [execute]
  (let [items (subscribe [:items])
        submit (fn [text]
                 (when (< 0 (count (.trim text)))
                   (dispatch [:add-input text])
                   (execute text #(do
                                    (dispatch [:add-result (not %1) %2])))))]
    (fn []
      [view :container
       [button {:on-click #(dispatch [:clear-items])
                :style :clear-button}
        "Clear"]
       [repl-items @items]
       [repl-input submit]])))

(def initial-state
  {:items []
   :hist-pos 0
   :history ["{:a 2 {:b 3} 4}"]})

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
