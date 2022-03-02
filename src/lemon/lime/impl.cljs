(ns ^:no-doc lemon.lime.impl
  (:require [fsm.core :as fsm]
            [lemon.lime.protocols :as proto :refer [Renderer]]))

(def default-state
  {:frame        [0 0]
   :height       0
   :width        0
   :sprite-sheet {:height 0
                  :width  0}})

(defn renderer?
  [x]
  (satisfies? x Renderer))

(defn create-sprite
  [renderer uri initial-state sprite-states]
  [(fsm/create-state-machine sprite-states (merge default-state (assoc initial-state :uri uri))) renderer])

(defn load
  [sprite]
  (let [[_ renderer] sprite]
    (proto/-load renderer sprite)
    sprite))

(defn render
  [sprite options]
  (let [[_ renderer] sprite]
    (proto/-render renderer sprite options)
    sprite))

(defn current-state
  [[sm _]]
  (fsm/current-state sm))

(defn add-effect
  ([sprite key fn-3]
   (fsm/add-effect (first sprite) key #(fn-3 sprite %2 %3))
   sprite)
  ([sprite key from to fn-3]
   (fsm/add-effect (first sprite) key from to #(fn-3 sprite %2 %3))
   sprite))

(defn event-payload
  [sprite payload]
  (if (fn? payload)
    (fn [_ & args]
      (apply payload sprite args))
    payload))

(defn transition
  ([sprite event payload]
   (->> payload
        (event-payload sprite)
        (fsm/transition (first sprite) event))
   sprite)
  ([sprite event]
   (fsm/transition (first sprite) event)
   sprite))

(defn sprite
  [{:keys [uri] :as config} renderer on-change sprite-states]
  (-> (create-sprite renderer uri config sprite-states)
      (on-change #(render %1 config))
      (load)))

(defn move
  "Move the sprite from one frame to another"
  ([sprite from to update-fn]
   (let [{:keys [frame]} (current-state sprite)]
     (cond-> sprite
       (not= from frame) (update-fn from)
       :always           (update-fn to))))
  ([sprite to update-fn]
   (update-fn sprite to)))

(defn frames
  [sprite]
  (let [state  (current-state sprite)
        {:keys [width height sprite-sheet]} state
        {dw :width
         dy :height} sprite-sheet
        columns (/ dw width)
        rows    (/ dy height)]
    (->> (for [col (range columns)
               row (range rows)]
           [col row])
         (sort-by first)
         (sort-by second))))
