// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('fsm.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fsm.protocols');
fsm.impl.from_QMARK_ = (function fsm$impl$from_QMARK_(prev,state){
if(cljs.core.set_QMARK_(prev)){
return cljs.core.contains_QMARK_(prev,state);
} else {
if((prev instanceof cljs.core.Keyword)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev,state);
} else {
if((prev == null)){
return (state == null);
} else {
return null;

}
}
}
});
fsm.impl.add_effect = (function fsm$impl$add_effect(var_args){
var G__534 = arguments.length;
switch (G__534) {
case 3:
return fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$3 = (function (sm,key,fn_3){
fsm.protocols._add_effect(sm,key,fn_3);

return sm;
}));

(fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$5 = (function (sm,key,from,to,fn_3){
return fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$3(sm,key,(function (sm__$1,old,new$){
if(cljs.core.truth_((function (){var and__4251__auto__ = fsm.impl.from_QMARK_(from,cljs.core.cst$kw$fsm_SLASH_state.cljs$core$IFn$_invoke$arity$1(old));
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.cst$kw$fsm_SLASH_state.cljs$core$IFn$_invoke$arity$1(new$));
} else {
return and__4251__auto__;
}
})())){
return (fn_3.cljs$core$IFn$_invoke$arity$3 ? fn_3.cljs$core$IFn$_invoke$arity$3(sm__$1,old,new$) : fn_3.call(null,sm__$1,old,new$));
} else {
return null;
}
}));
}));

(fsm.impl.add_effect.cljs$lang$maxFixedArity = 5);

fsm.impl.transition = (function fsm$impl$transition(var_args){
var G__539 = arguments.length;
switch (G__539) {
case 3:
return fsm.impl.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return fsm.impl.transition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(fsm.impl.transition.cljs$core$IFn$_invoke$arity$3 = (function (sm,event,payload){
fsm.protocols._transition(sm,event,(function (){var G__541 = (function (){var G__543 = ((cljs.core.fn_QMARK_(payload))?(payload.cljs$core$IFn$_invoke$arity$1 ? payload.cljs$core$IFn$_invoke$arity$1(sm) : payload.call(null,sm)):payload);
var fexpr__542 = (function (p1__536_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__536_SHARP_,cljs.core.cst$kw$fsm_SLASH_state);
});
return fexpr__542(G__543);
})();
var fexpr__540 = (function (p1__537_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__537_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fsm_SLASH_last_DASH_event,event], null)], 0));
});
return fexpr__540(G__541);
})());

return sm;
}));

(fsm.impl.transition.cljs$core$IFn$_invoke$arity$2 = (function (sm,event){
return fsm.impl.transition.cljs$core$IFn$_invoke$arity$3(sm,event,null);
}));

(fsm.impl.transition.cljs$lang$maxFixedArity = 3);

/**
 * Return the current state of the given state machine
 */
fsm.impl.current_state = (function fsm$impl$current_state(sm){
return fsm.protocols._current_state(sm);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {fsm.protocols.StateMachine}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fsm.impl.AtomStateMachine = (function (states,_STAR_state,__meta,__extmap,__hash){
this.states = states;
this._STAR_state = _STAR_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(fsm.impl.AtomStateMachine.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k546,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__550 = k546;
var G__550__$1 = (((G__550 instanceof cljs.core.Keyword))?G__550.fqn:null);
switch (G__550__$1) {
case "states":
return self__.states;

break;
case "*state":
return self__._STAR_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k546,else__4505__auto__);

}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__551){
var vec__552 = p__551;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__552,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__552,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#fsm.impl.AtomStateMachine{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$states,self__.states],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_STAR_state,self__._STAR_state],null))], null),self__.__extmap));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__545){
var self__ = this;
var G__545__$1 = this;
return (new cljs.core.RecordIter((0),G__545__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$states,cljs.core.cst$kw$_STAR_state], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new fsm.impl.AtomStateMachine(self__.states,self__._STAR_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (){var fexpr__555 = (function (coll__4499__auto__){
return (479424173 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
});
return fexpr__555(this__4498__auto____$1);
})();
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this547,other548){
var self__ = this;
var this547__$1 = this;
return (((!((other548 == null)))) && ((((this547__$1.constructor === other548.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this547__$1.states,other548.states)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this547__$1._STAR_state,other548._STAR_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this547__$1.__extmap,other548.__extmap)))))))));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_STAR_state,null,cljs.core.cst$kw$states,null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new fsm.impl.AtomStateMachine(self__.states,self__._STAR_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k546){
var self__ = this;
var this__4509__auto____$1 = this;
var G__556 = k546;
var G__556__$1 = (((G__556 instanceof cljs.core.Keyword))?G__556.fqn:null);
switch (G__556__$1) {
case "states":
case "*state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k546);

}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__545){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__557 = cljs.core.keyword_identical_QMARK_;
var expr__558 = k__4511__auto__;
if(cljs.core.truth_((function (){var G__560 = cljs.core.cst$kw$states;
var G__561 = expr__558;
return (pred__557.cljs$core$IFn$_invoke$arity$2 ? pred__557.cljs$core$IFn$_invoke$arity$2(G__560,G__561) : pred__557.call(null,G__560,G__561));
})())){
return (new fsm.impl.AtomStateMachine(G__545,self__._STAR_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__562 = cljs.core.cst$kw$_STAR_state;
var G__563 = expr__558;
return (pred__557.cljs$core$IFn$_invoke$arity$2 ? pred__557.cljs$core$IFn$_invoke$arity$2(G__562,G__563) : pred__557.call(null,G__562,G__563));
})())){
return (new fsm.impl.AtomStateMachine(self__.states,G__545,self__.__meta,self__.__extmap,null));
} else {
return (new fsm.impl.AtomStateMachine(self__.states,self__._STAR_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__545),null));
}
}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$states,self__.states,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$_STAR_state,self__._STAR_state,null))], null),self__.__extmap));
}));

(fsm.impl.AtomStateMachine.prototype.fsm$protocols$StateMachine$ = cljs.core.PROTOCOL_SENTINEL);

(fsm.impl.AtomStateMachine.prototype.fsm$protocols$StateMachine$_transition$arity$3 = (function (_,event,payload){
var self__ = this;
var ___$1 = this;
var current = cljs.core.deref(self__._STAR_state);
var next = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(self__.states,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fsm_SLASH_state.cljs$core$IFn$_invoke$arity$1(current),event], null),cljs.core.cst$kw$fsm$impl_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fsm$impl_SLASH_not_DASH_found,next)){
return null;
} else {
return cljs.core.reset_BANG_(self__._STAR_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fsm_SLASH_state,next], null),payload], 0)));
}
}));

(fsm.impl.AtomStateMachine.prototype.fsm$protocols$StateMachine$_add_effect$arity$3 = (function (this$,key,fn_3){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch(self__._STAR_state,key,(function (_,___$1,old,new$){
return (fn_3.cljs$core$IFn$_invoke$arity$3 ? fn_3.cljs$core$IFn$_invoke$arity$3(this$__$1,old,new$) : fn_3.call(null,this$__$1,old,new$));
}));
}));

(fsm.impl.AtomStateMachine.prototype.fsm$protocols$StateMachine$_current_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__._STAR_state);
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__545){
var self__ = this;
var this__4501__auto____$1 = this;
return (new fsm.impl.AtomStateMachine(self__.states,self__._STAR_state,G__545,self__.__extmap,self__.__hash));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4508__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(fsm.impl.AtomStateMachine.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$states,cljs.core.cst$sym$_STAR_state], null);
}));

(fsm.impl.AtomStateMachine.cljs$lang$type = true);

(fsm.impl.AtomStateMachine.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"fsm.impl/AtomStateMachine",null,(1),null));
}));

(fsm.impl.AtomStateMachine.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"fsm.impl/AtomStateMachine");
}));

/**
 * Positional factory function for fsm.impl/AtomStateMachine.
 */
fsm.impl.__GT_AtomStateMachine = (function fsm$impl$__GT_AtomStateMachine(states,_STAR_state){
return (new fsm.impl.AtomStateMachine(states,_STAR_state,null,null,null));
});

/**
 * Factory function for fsm.impl/AtomStateMachine, taking a map of keywords to field values.
 */
fsm.impl.map__GT_AtomStateMachine = (function fsm$impl$map__GT_AtomStateMachine(G__549){
var extmap__4542__auto__ = (function (){var G__564 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__549,cljs.core.cst$kw$states,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_STAR_state], 0));
if(cljs.core.record_QMARK_(G__549)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__564);
} else {
return G__564;
}
})();
return (new fsm.impl.AtomStateMachine(cljs.core.cst$kw$states.cljs$core$IFn$_invoke$arity$1(G__549),cljs.core.cst$kw$_STAR_state.cljs$core$IFn$_invoke$arity$1(G__549),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

fsm.impl.create_state_machine = (function fsm$impl$create_state_machine(_STAR_initial_state,states){
return fsm.impl.__GT_AtomStateMachine(states,_STAR_initial_state);
});
