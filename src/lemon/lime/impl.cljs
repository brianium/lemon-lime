(ns ^:no-doc lemon.lime.impl
  (:require [fsm.core :as fsm]
            [lemon.lime.protocols :as proto :refer [Renderer]]))

(defn renderer?
  [x]
  (satisfies? x Renderer))

;;; State machine

(def default-state
  {:frame        [0 0]
   :frames       {:reel  []
                  :table {}}
   :height       0
   :width        0
   :sprite-sheet {:height 0
                  :width  0}})

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

;;; Core API

(defn with-frame-meta
  "Add meta to each frame containing the previous and next frames"
  [original]
  (loop [metafied   []
         frames     original
         prev-frame (last original)]
    (let [frame      (first frames)
          next-frame (or (fnext frames) (first original))]
      (if-not frames
        metafied
        (recur
         (conj metafied (with-meta frame [prev-frame next-frame]))
         (next frames)
         frame)))))

(defn create-frames*
  [frames]
  (->> frames
       (reduce #(assoc %1 [(first %2) (second %2)] %2) {})
       (assoc {:reel frames} :table)))

(defn create-frames
  [sprite-sheet {:keys [width height]}]
  (let [{dw :width
         dy :height} sprite-sheet
        columns                 (/ dw width)
        rows                    (/ dy height)]
    (->> (for [col (range columns)
               row (range rows)]
           [col row])
         (sort-by first)
         (sort-by second)
         (with-frame-meta)
         (create-frames*))))

(defn frames*
  [sprite]
  (-> sprite
      current-state
      :frames))

(def frames (memoize frames*))

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

(defn get-frame
  [frame sprite]
  (-> (current-state sprite)
      (get-in [:frames :table])
      (get frame)))

(defn current-frame
  [sprite]
  (-> sprite
      (current-state)
      :frame))

(defn next-frame
  [sprite]
  (-> sprite
      current-frame
      meta
      second
      (get-frame sprite)))

(defn prev-frame
  [sprite]
  (-> sprite
      current-frame
      meta
      first
      (get-frame sprite)))
