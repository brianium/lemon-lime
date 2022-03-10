(ns fsm.protocols
  "Contains fsm protocol(s)")

(defprotocol StateMachine
  (-add-effect [_ key fn-3] "Add a side effect that is invoked when a change to state happens. Is called with the state machine, previous, and next state")
  (-transition [_ event payload] "Transition the state machine to a new state")
  (-current-state [_] "Return the current state of the state machine"))
