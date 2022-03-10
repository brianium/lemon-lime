(ns fsm.core
  "This is yet another fsm library. I just want simple transitions and the ability
   to add side effects. If you want these things too, then I want to share this library
   with you."
  (:require [fsm.impl :as impl]))

(defn add-effect
  "Register a function to be called in response to a state change.
   
   The given key should be unique for the given state machine.

   The effect fn must be an fn of 3 args: the state machine, the old state, and the new state.
   
   When add-effect is invoked with three arguments, the effect fn will be called
   when any state change occurs:
   
   ```clojure
   (add-effect my-synthesizer ::fun (fn [synth old-state new-state]
                                      (do-something-fun synth old-state new-state)))
   ```
   
   When add-effect is called with five arguments, the effect fn will be called when
   an explicit state transition occurs:
   
   ```clojure
   (add-effect my-synthesizer ::resumed :paused :speaking on-resume)
   ```

   The previous state value can also be a set of previous states:

   ```clojure
   (add-effect my-microphone ::init #{:dormant :stopped} :ready on-ready)
   ```
   
   The add-effect function is useful for monitoring state changes or dispatching
   other effects in response to state changes."
  ([sm key fn-3]
   (impl/add-effect sm key fn-3)
   sm)
  ([sm key from to fn-3]
   (impl/add-effect sm key from to fn-3)))

(defn transition
  "Transition a state machine using the given event and an optional payload.
   
   The payload can be a hash map (or nil) or a function that returns a hash map (or nil). If a function, the
   payload must be a function of 1 arg: the state machine itself.
   
   The payload hash map will replace the state machine's internal state entirely. A function
   payload may be useful for merging state instead of replacing it entirely.
   
   ```clojure
   ;;; Set state to the given data
   (core/transition this :init {:recognition          recognition
                                :speech-ch            speech-ch
                                :listener/result      on-result})
   
   ;;; Maintain current state
   (core/transition this :pause some-fn-that-just-returns-the-current-state)

   ;;; Set the current state to nil by omitting the payload altogether
   (core/transition this :stop)
   ```"
  ([sm event payload]
   (impl/transition sm event payload)
   sm)
  ([sm event]
   (impl/transition sm event)))

(defn current-state
  "Returns the current state of the given state machine as a hash map.
   
   ```clojure
   (-> state-machine current-state :count)
   ```"
  [sm]
  (impl/current-state sm))

(defn create-state-machine
  "Create a state machine backed by atoms.
   
   This function can be called with three arguments to specify the function
   used for creating the atom. This is useful for atom like types such as reagent's
   ratoms:
   
   ```clojure
   (create-state-machine states default reagent.core/atom)
   ```
   
   The states map should be a hash map indicating supported states and their
   allowed transitions. A transition key is a named event and the transition
   value is the expected state after said event occurs:
   
   ```clojure
   {:speaking {:pause :paused}
    :paused   {:resume :speaking}}
   ```
   
   The above state map indicates that only when the state machine is in a speaking state,
   can a pause event be used via core.transition to move the machine to a paused state. Similarly,
   only a paused machine can be resumed to a speaking state via a resume event.
   
   The initial-state must be a map that will be used as the initial value of the underlying
   atom map's :data value.
   
   If an atom-fn is given, it will be called with the initial state provided
   to this function. This may be useful for something like using reagent's \"ratoms\" instead of
   Clojure's own atoms."
  ([states initial-state]
   (create-state-machine states initial-state atom))
  ([states initial-state atom-fn]
   (-> initial-state
       (update :fsm/state :fsm/state)
       (assoc :fsm/last-event nil)
       (atom-fn)
       (impl/create-state-machine states))))
