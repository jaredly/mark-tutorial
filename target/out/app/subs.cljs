(ns app.subs
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


(register-sub :items (fn [db _] (reaction (:items @db))))

(register-sub
 :current-text
 (fn [db _]
   (let [idx (reaction (:hist-pos @db))
         history (reaction (:history @db))]
     (reaction (let [items @history
                     pos (- (count items) @idx 1)]
                 (get items pos))))))
