(ns ^:no-doc lemon.lime.impl
  (:require [fsm.core :as fsm]
            [lemon.lime.protocols :as proto :refer [Renderer]])
  (:refer-clojure :rename {range core-range}))

(defn renderer?
  [x]
  (satisfies? x Renderer))

;;; State machine

(def default-state
  {:frame        [0 0]
   :frames       []
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

(defn create-frames
  [sprite-sheet {:keys [width height]}]
  (let [{dw :width
         dy :height} sprite-sheet
        columns                 (/ dw width)
        rows                    (/ dy height)]
    (->> (for [col (core-range columns)
               row (core-range rows)]
           [col row])
         (sort-by first)
         (sort-by second)
         (vec))))

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

(defn index-of*
  [frame sprite]
  (loop [i 0
         fs (frames sprite)]
    (cond
      (= frame (first fs)) i
      (empty? fs) -1
      :else   (recur (inc i) (next fs)))))

(def index-of (memoize index-of*))

(defn range
  ([from to sprite]
   (loop [fs    (cycle (frames sprite))
          frame (first fs)
          rng   []]
     (cond
       (and (seq rng) (= to frame))
       (conj rng frame)

       (or
        (and (empty? rng) (= from frame))
        (seq rng))
       (recur (next fs) (fnext fs) (conj rng frame))

       :else (recur (next fs) (fnext fs) rng))))
  ([from sprite]
   (subvec (frames sprite) (index-of from sprite))))
