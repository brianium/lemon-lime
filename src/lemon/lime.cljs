(ns lemon.lime
  (:require [lemon.lime.css :as css]
            [lemon.lime.impl :as impl]))

(def sprite-states
  {nil         {::load ::loaded}
   ::loaded    {::render ::ready}
   ::ready     {::animate ::animating
                ::render  ::ready}
   ::animating {::done   ::ready
                ::render ::animating}})

(defn renderer?
  [x]
  (impl/renderer? x))

(defn load
  [sprite]
  (impl/load sprite))

(defn render
  ([sprite options]
   (impl/render sprite options))
  ([sprite]
   (render sprite {})))

(defn current-state
  [sprite]
  (impl/current-state sprite))

(defn add-effect
  ([sprite key fn-3]
   (impl/add-effect sprite key fn-3))
  ([sprite key from to fn-3]
   (impl/add-effect sprite key from to fn-3)))

(defn on-loaded
  ([key sprite fn-3]
   (add-effect sprite key nil ::loaded fn-3))
  ([sprite fn-3]
   (on-loaded ::loaded sprite fn-3)))

(defn on-change
  ([key sprite fn-3]
   (add-effect sprite key (fn [sprite old new]
                            (when (not= old new)
                              (fn-3 sprite old new)))))
  ([sprite fn-3]
   (on-change ::changed sprite fn-3)))

(defn transition
  ([sprite event payload]
   (impl/transition sprite event payload))
  ([sprite event]
   (impl/transition sprite event)))

(defn update-frame
  [sprite frame]
  (transition sprite ::render (fn [sprite]
                                (-> sprite
                                    current-state
                                    (assoc :frame frame)))))

(defn move
  ([sprite from to update-fn]
   (impl/move sprite from to update-fn))
  ([sprite from to]
   (move sprite from to update-frame))
  ([sprite to]
   (impl/move sprite to update-frame)))

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
