(ns cljs.user
  (:require [cljs.pprint]
            [lemon.lime :as ll]
            [lemon.lime.css :as css]))

#_(def shepherd (ll/sprite
                 {:uri           "shepherd-swing.png"
                  :height        52
                  :width         47
                  ::css/renderer {:id "shepherd-swing"}}))

#_(ll/frames shepherd)

#_(ll/move shepherd [0 0] [1 0])
