(ns cljs.user
  (:require [cljs.pprint]
            [lemon.lime :as ll]
            [lemon.lime.css :as css]))

(def shepherd (ll/sprite
               {:uri          "shepherd-swing.png"
                :height       52
                :width        47
                ::css/renderer {:id "shepherd-swing"}}))

#_(defn interval
    [fps handler]
    (js/setInterval handler 1000))

#_(def interval-id
    (interval 80 (fn []
                   (->> shepherd
                        (ll/next-frame)
                        (ll/move shepherd)))))

#_(js/clearInterval interval-id)
