(ns app.handlers
  (:require [re-frame.core :refer [dispatch
                                   register-sub
                                   dispatch-sync
                                   register-handler
                                   subscribe]]
            [reagent.core :as r]

            [app.views.helpers :as helpers]
            )
  (:require-macros
   [reagent.ratom :refer [reaction]]))

(register-handler
 :init
 (fn [db [_ data]]
   (merge db data)))
(register-handler
 :add-item
 (fn [db [_ item]]
   (update db :items conj item)))
(register-handler
 :add-items
 (fn [db [_ items]]
   (update db :items concat items)))
(register-handler
 :add-input
 (fn [db [_ input]]
   (-> db
       (assoc :hist-pos 0)
       (update :history conj "")
       (update :items conj {:type :input :text input}))))
(register-handler
 :add-result
 (fn [db [_ value]]
   (update db :items conj {:type :output :value value})))



(register-handler
 :set-text
 (fn [db [_ text]]
   (let [history (:history db)
         pos (:hist-pos db)
         idx (- (count history) pos 1)]
     (-> db
         (assoc :hist-pos 0)
         (assoc :history
                (if (= pos 0)
                  (assoc history idx text)
                  (conj history text)))))))

(register-handler
 :go-up
 (fn [db _]
   (let [pos (:hist-pos db)
         len (count (:history db))
         new-pos (if (>= pos (dec len))
                   0
                   (inc pos))]
     (assoc db :hist-pos new-pos))))

(register-handler
 :go-down
 (fn [db _]
   (let [pos (:hist-pos db)
         new-pos (if (<= pos 0)
                   (dec (count (:history db)))
                   (dec pos))
         ]
     (assoc db :hist-pos new-pos))))
