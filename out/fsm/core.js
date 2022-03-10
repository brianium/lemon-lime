// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('fsm.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fsm.impl');
/**
 * Register a function to be called in response to a state change.
 * 
 * The given key should be unique for the given state machine.
 * 
 * The effect fn must be an fn of 3 args: the state machine, the old state, and the new state.
 * 
 * When add-effect is invoked with three arguments, the effect fn will be called
 * when any state change occurs:
 * 
 * ```clojure
 * (add-effect my-synthesizer ::fun (fn [synth old-state new-state]
 *                                    (do-something-fun synth old-state new-state)))
 * ```
 * 
 * When add-effect is called with five arguments, the effect fn will be called when
 * an explicit state transition occurs:
 * 
 * ```clojure
 * (add-effect my-synthesizer ::resumed :paused :speaking on-resume)
 * ```
 * 
 * The previous state value can also be a set of previous states:
 * 
 * ```clojure
 * (add-effect my-microphone ::init #{:dormant :stopped} :ready on-ready)
 * ```
 * 
 * The add-effect function is useful for monitoring state changes or dispatching
 * other effects in response to state changes.
 */
fsm.core.add_effect = (function fsm$core$add_effect(var_args){
var G__570 = arguments.length;
switch (G__570) {
case 3:
return fsm.core.add_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return fsm.core.add_effect.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(fsm.core.add_effect.cljs$core$IFn$_invoke$arity$3 = (function (sm,key,fn_3){
fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$3(sm,key,fn_3);

return sm;
}));

(fsm.core.add_effect.cljs$core$IFn$_invoke$arity$5 = (function (sm,key,from,to,fn_3){
return fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$5(sm,key,from,to,fn_3);
}));

(fsm.core.add_effect.cljs$lang$maxFixedArity = 5);

/**
 * Transition a state machine using the given event and an optional payload.
 * 
 * The payload can be a hash map (or nil) or a function that returns a hash map (or nil). If a function, the
 * payload must be a function of 1 arg: the state machine itself.
 * 
 * The payload hash map will replace the state machine's internal state entirely. A function
 * payload may be useful for merging state instead of replacing it entirely.
 * 
 * ```clojure
 * ;;; Set state to the given data
 * (core/transition this :init {:recognition          recognition
 *                              :speech-ch            speech-ch
 *                              :listener/result      on-result})
 * 
 * ;;; Maintain current state
 * (core/transition this :pause some-fn-that-just-returns-the-current-state)
 * 
 * ;;; Set the current state to nil by omitting the payload altogether
 * (core/transition this :stop)
 * ```
 */
fsm.core.transition = (function fsm$core$transition(var_args){
var G__573 = arguments.length;
switch (G__573) {
case 3:
return fsm.core.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return fsm.core.transition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(fsm.core.transition.cljs$core$IFn$_invoke$arity$3 = (function (sm,event,payload){
fsm.impl.transition.cljs$core$IFn$_invoke$arity$3(sm,event,payload);

return sm;
}));

(fsm.core.transition.cljs$core$IFn$_invoke$arity$2 = (function (sm,event){
return fsm.impl.transition.cljs$core$IFn$_invoke$arity$2(sm,event);
}));

(fsm.core.transition.cljs$lang$maxFixedArity = 3);

/**
 * Returns the current state of the given state machine as a hash map.
 * 
 * ```clojure
 * (-> state-machine current-state :count)
 * ```
 */
fsm.core.current_state = (function fsm$core$current_state(sm){
return fsm.impl.current_state(sm);
});
/**
 * Create a state machine backed by atoms.
 * 
 * This function can be called with three arguments to specify the function
 * used for creating the atom. This is useful for atom like types such as reagent's
 * ratoms:
 * 
 * ```clojure
 * (create-state-machine states default reagent.core/atom)
 * ```
 * 
 * The states map should be a hash map indicating supported states and their
 * allowed transitions. A transition key is a named event and the transition
 * value is the expected state after said event occurs:
 * 
 * ```clojure
 * {:speaking {:pause :paused}
 *  :paused   {:resume :speaking}}
 * ```
 * 
 * The above state map indicates that only when the state machine is in a speaking state,
 * can a pause event be used via core.transition to move the machine to a paused state. Similarly,
 * only a paused machine can be resumed to a speaking state via a resume event.
 * 
 * The initial-state must be a map that will be used as the initial value of the underlying
 * atom map's :data value.
 * 
 * If an atom-fn is given, it will be called with the initial state provided
 * to this function. This may be useful for something like using reagent's "ratoms" instead of
 * Clojure's own atoms.
 */
fsm.core.create_state_machine = (function fsm$core$create_state_machine(var_args){
var G__576 = arguments.length;
switch (G__576) {
case 2:
return fsm.core.create_state_machine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fsm.core.create_state_machine.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(fsm.core.create_state_machine.cljs$core$IFn$_invoke$arity$2 = (function (states,initial_state){
return fsm.core.create_state_machine.cljs$core$IFn$_invoke$arity$3(states,initial_state,cljs.core.atom);
}));

(fsm.core.create_state_machine.cljs$core$IFn$_invoke$arity$3 = (function (states,initial_state,atom_fn){
return fsm.impl.create_state_machine((function (){var G__577 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(initial_state,cljs.core.cst$kw$fsm_SLASH_state,cljs.core.cst$kw$fsm_SLASH_state),cljs.core.cst$kw$fsm_SLASH_last_DASH_event,null);
return (atom_fn.cljs$core$IFn$_invoke$arity$1 ? atom_fn.cljs$core$IFn$_invoke$arity$1(G__577) : atom_fn.call(null,G__577));
})(),states);
}));

(fsm.core.create_state_machine.cljs$lang$maxFixedArity = 3);

