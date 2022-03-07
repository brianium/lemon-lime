(ns lemon.lime
  (:require [lemon.lime.css :as css]
            [lemon.lime.impl :as impl])
  (:refer-clojure :exclude [range]))

(def sprite-states
  {nil         {::load ::loaded}
   ::loaded    {::render ::ready}
   ::ready     {::animate ::animating
                ::render  ::ready}
   ::animating {::done   ::ready
                ::render ::animating}})

(defn current-state
  [sprite]
  (impl/current-state sprite))

(defn add-effect
  ([sprite key fn-3]
   (impl/add-effect sprite key fn-3))
  ([sprite key from to fn-3]
   (impl/add-effect sprite key from to fn-3)))

(defn on-change
  ([sprite key fn-3]
   (add-effect sprite key (fn [sprite old new]
                            (when (not= old new)
                              (fn-3 sprite old new)))))
  ([sprite fn-3]
   (on-change sprite ::changed fn-3)))

(defn transition
  ([sprite event payload]
   (impl/transition sprite event payload))
  ([sprite event]
   (impl/transition sprite event)))

(defn create-frames
  [sprite-sheet dimensions]
  (impl/create-frames sprite-sheet dimensions))

(defn frames
  [sprite]
  (impl/frames sprite))

(defn sprite
  ([config renderer]
   (impl/sprite config renderer on-change sprite-states))
  ([config]
   (let [transition-load   #(transition %1 ::load %2)
         transition-render #(transition %1 ::render %2)
         renderer          (css/create-renderer transition-load transition-render)]
     (sprite config renderer))))

(defn index-of
  [frame sprite]
  (impl/index-of frame sprite))

(defn range
  ([from to sprite]
   (impl/range from to sprite))
  ([from sprite]
   (impl/range from sprite)))

(defn move
  [frame sprite]
  (transition sprite ::render (fn [sprite]
                                (-> sprite
                                    current-state
                                    (assoc :frame frame)))))

(defn start
  ([sprite set-state]
   (transition sprite ::animate set-state))
  ([sprite]
   (start sprite current-state)))

(defn stop
  ([sprite set-state]
   (transition sprite ::done set-state))
  ([sprite]
   (stop sprite current-state)))
