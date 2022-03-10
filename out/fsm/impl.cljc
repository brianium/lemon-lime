(ns ^:no-doc fsm.impl
  (:require [fsm.protocols :as p]))

(defn from?
  [prev state]
  (cond
    (set? prev) (contains? prev state)
    (keyword? prev) (= prev state)
    (nil? prev) (nil? state)
    :else nil))

(defn add-effect
  ([sm key fn-3]
   (p/-add-effect sm key fn-3)
   sm)
  ([sm key from to fn-3]
   (add-effect sm key (fn [sm old new]
                        (when (and (from? from (:fsm/state old)) (= to (:fsm/state new)))
                          (fn-3 sm old new))))))

(defn transition
  ([sm event payload]
   (->> (if (fn? payload)
          (payload sm)
          payload)
        (#(dissoc % :fsm/state))
        (#(merge % {:fsm/last-event event}))
        (p/-transition sm event))
   sm)
  ([sm event]
   (transition sm event nil)))

(defn current-state
  "Return the current state of the given state machine"
  [sm]
  (p/-current-state sm))

;;; Dumb simple implementation of the StateMachine protocol backed by atoms or atom likes

(defrecord AtomStateMachine [states *state]
  p/StateMachine
  (-transition [_ event payload]
    (let [current @*state
          next    (get-in states [(:fsm/state current) event] ::not-found)]
      (when-not (= ::not-found next)
        (->> payload
             (merge {:fsm/state next})
             (reset! *state)))))

  (-add-effect [this key fn-3]
    (add-watch *state key (fn [_ _ old new]
                            (fn-3 this old new))))

  (-current-state [_]
    @*state))

(defn create-state-machine
  [*initial-state states]
  (->AtomStateMachine states *initial-state))
