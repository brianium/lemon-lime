// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.user');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.spec.alpha');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('lemon.lime');
goog.require('lemon.lime.css');
goog.require('lemon.lime.spec');
goog.require('integrant.core');
goog.require('goog.events.EventType');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$user_SLASH_from,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$user_SLASH_to,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$user_SLASH_duration,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_,cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$user_SLASH_done,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_satisfies_QMARK_,cljs.core.cst$sym$cljs$core$async$impl$protocols_SLASH_WritePort,cljs.core.cst$sym$_PERCENT_)),(function (p1__2555_SHARP_){
if((!((p1__2555_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__2555_SHARP_.cljs$core$async$impl$protocols$WritePort$)))){
return true;
} else {
if((!p1__2555_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.WritePort,p1__2555_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.WritePort,p1__2555_SHARP_);
}
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$user_SLASH_animation,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$user_SLASH_from,cljs.core.cst$kw$cljs$user_SLASH_to], null),cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$user_SLASH_duration,cljs.core.cst$kw$cljs$user_SLASH_done], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$user_SLASH_from,cljs.core.cst$kw$cljs$user_SLASH_to], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$user_SLASH_duration,cljs.core.cst$kw$cljs$user_SLASH_done], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__2557){
return cljs.core.map_QMARK_(G__2557);
}),(function (G__2557){
return cljs.core.contains_QMARK_(G__2557,cljs.core.cst$kw$from);
}),(function (G__2557){
return cljs.core.contains_QMARK_(G__2557,cljs.core.cst$kw$to);
})], null),(function (G__2557){
return ((cljs.core.map_QMARK_(G__2557)) && (((cljs.core.contains_QMARK_(G__2557,cljs.core.cst$kw$from)) && (cljs.core.contains_QMARK_(G__2557,cljs.core.cst$kw$to)))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$duration,cljs.core.cst$kw$done], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$user_SLASH_from,cljs.core.cst$kw$cljs$user_SLASH_to], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$from,cljs.core.cst$kw$to], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$user_SLASH_duration,cljs.core.cst$kw$cljs$user_SLASH_done], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$from)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$to))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$user_SLASH_pred,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$frame], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$user_SLASH_process,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_satisfies_QMARK_,cljs.core.cst$sym$cljs$core$async$impl$protocols_SLASH_ReadPort,cljs.core.cst$sym$_PERCENT_)),(function (p1__2558_SHARP_){
if((!((p1__2558_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__2558_SHARP_.cljs$core$async$impl$protocols$ReadPort$)))){
return true;
} else {
if((!p1__2558_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,p1__2558_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,p1__2558_SHARP_);
}
}));
/**
 * An animation primitive. Given an animation map, loop until the given pred is true.
 */
cljs.user.loop_until = (function cljs$user$loop_until(sprite,p__2560,pred){
var map__2561 = p__2560;
var map__2561__$1 = cljs.core.__destructure_map(map__2561);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2561__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2561__$1,cljs.core.cst$kw$to);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__2561__$1,cljs.core.cst$kw$duration,(80));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__2561__$1,cljs.core.cst$kw$done,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var c__2375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2376__auto__ = (function (){var switch__2352__auto__ = (function (state_2615){
var state_val_2616 = (state_2615[(1)]);
if((state_val_2616 === (7))){
var inst_2594 = (state_2615[(2)]);
var inst_2595 = cljs.core.not(inst_2594);
var state_2615__$1 = state_2615;
if(inst_2595){
var statearr_2617_2645 = state_2615__$1;
(statearr_2617_2645[(1)] = (11));

} else {
var statearr_2618_2646 = state_2615__$1;
(statearr_2618_2646[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (1))){
var inst_2562 = cljs.core.async.timeout(duration);
var inst_2563 = lemon.lime.animate.cljs$core$IFn$_invoke$arity$1(sprite);
var inst_2564 = lemon.lime.reel.cljs$core$IFn$_invoke$arity$3(from,to,inst_2563);
var inst_2565 = cljs.core.cycle(inst_2564);
var inst_2566 = inst_2562;
var inst_2567 = inst_2565;
var inst_2568 = null;
var state_2615__$1 = (function (){var statearr_2619 = state_2615;
(statearr_2619[(7)] = inst_2566);

(statearr_2619[(8)] = inst_2567);

(statearr_2619[(9)] = inst_2568);

return statearr_2619;
})();
var statearr_2620_2647 = state_2615__$1;
(statearr_2620_2647[(2)] = null);

(statearr_2620_2647[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (4))){
var inst_2584 = (state_2615[(10)]);
var inst_2577 = (state_2615[(11)]);
var inst_2582 = (state_2615[(2)]);
var inst_2583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2582,(0),null);
var inst_2584__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2582,(1),null);
var inst_2585 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_2584__$1,inst_2577);
var state_2615__$1 = (function (){var statearr_2621 = state_2615;
(statearr_2621[(10)] = inst_2584__$1);

(statearr_2621[(12)] = inst_2583);

return statearr_2621;
})();
if(inst_2585){
var statearr_2622_2648 = state_2615__$1;
(statearr_2622_2648[(1)] = (5));

} else {
var statearr_2623_2649 = state_2615__$1;
(statearr_2623_2649[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (15))){
var inst_2566 = (state_2615[(7)]);
var state_2615__$1 = state_2615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2615__$1,(17),inst_2566);
} else {
if((state_val_2616 === (13))){
var inst_2611 = (state_2615[(2)]);
var state_2615__$1 = state_2615;
var statearr_2624_2650 = state_2615__$1;
(statearr_2624_2650[(2)] = inst_2611);

(statearr_2624_2650[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (6))){
var inst_2584 = (state_2615[(10)]);
var inst_2588 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_2584,cljs.core.cst$kw$default);
var state_2615__$1 = state_2615;
if(inst_2588){
var statearr_2625_2651 = state_2615__$1;
(statearr_2625_2651[(1)] = (8));

} else {
var statearr_2626_2652 = state_2615__$1;
(statearr_2626_2652[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (17))){
var inst_2567 = (state_2615[(8)]);
var inst_2570 = (state_2615[(13)]);
var inst_2604 = (state_2615[(2)]);
var inst_2605 = cljs.core.async.timeout(duration);
var inst_2606 = cljs.core.next(inst_2567);
var inst_2566 = inst_2605;
var inst_2567__$1 = inst_2606;
var inst_2568 = inst_2570;
var state_2615__$1 = (function (){var statearr_2627 = state_2615;
(statearr_2627[(7)] = inst_2566);

(statearr_2627[(8)] = inst_2567__$1);

(statearr_2627[(14)] = inst_2604);

(statearr_2627[(9)] = inst_2568);

return statearr_2627;
})();
var statearr_2628_2653 = state_2615__$1;
(statearr_2628_2653[(2)] = null);

(statearr_2628_2653[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (3))){
var inst_2613 = (state_2615[(2)]);
var state_2615__$1 = state_2615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2615__$1,inst_2613);
} else {
if((state_val_2616 === (12))){
var inst_2568 = (state_2615[(9)]);
var inst_2570 = (state_2615[(13)]);
var inst_2599 = lemon.lime.move(sprite,inst_2570);
var inst_2600 = (pred.cljs$core$IFn$_invoke$arity$3 ? pred.cljs$core$IFn$_invoke$arity$3(sprite,inst_2570,inst_2568) : pred.call(null,sprite,inst_2570,inst_2568));
var state_2615__$1 = (function (){var statearr_2629 = state_2615;
(statearr_2629[(15)] = inst_2599);

return statearr_2629;
})();
if(cljs.core.truth_(inst_2600)){
var statearr_2630_2654 = state_2615__$1;
(statearr_2630_2654[(1)] = (14));

} else {
var statearr_2631_2655 = state_2615__$1;
(statearr_2631_2655[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (2))){
var inst_2567 = (state_2615[(8)]);
var inst_2577 = (state_2615[(11)]);
var inst_2570 = cljs.core.first(inst_2567);
var inst_2577__$1 = done;
var inst_2578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2579 = [inst_2577__$1];
var inst_2580 = (new cljs.core.PersistentVector(null,1,(5),inst_2578,inst_2579,null));
var state_2615__$1 = (function (){var statearr_2632 = state_2615;
(statearr_2632[(13)] = inst_2570);

(statearr_2632[(11)] = inst_2577__$1);

return statearr_2632;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_2615__$1,(4),inst_2580,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default,cljs.core.cst$kw$continue], 0));
} else {
if((state_val_2616 === (11))){
var inst_2597 = lemon.lime.done.cljs$core$IFn$_invoke$arity$1(sprite);
var state_2615__$1 = state_2615;
var statearr_2633_2656 = state_2615__$1;
(statearr_2633_2656[(2)] = inst_2597);

(statearr_2633_2656[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (9))){
var state_2615__$1 = state_2615;
var statearr_2634_2657 = state_2615__$1;
(statearr_2634_2657[(2)] = null);

(statearr_2634_2657[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (5))){
var state_2615__$1 = state_2615;
var statearr_2635_2658 = state_2615__$1;
(statearr_2635_2658[(2)] = false);

(statearr_2635_2658[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (14))){
var state_2615__$1 = state_2615;
var statearr_2636_2659 = state_2615__$1;
(statearr_2636_2659[(2)] = null);

(statearr_2636_2659[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (16))){
var inst_2609 = (state_2615[(2)]);
var state_2615__$1 = state_2615;
var statearr_2637_2660 = state_2615__$1;
(statearr_2637_2660[(2)] = inst_2609);

(statearr_2637_2660[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (10))){
var inst_2592 = (state_2615[(2)]);
var state_2615__$1 = state_2615;
var statearr_2638_2661 = state_2615__$1;
(statearr_2638_2661[(2)] = inst_2592);

(statearr_2638_2661[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2616 === (8))){
var inst_2583 = (state_2615[(12)]);
var state_2615__$1 = state_2615;
var statearr_2639_2662 = state_2615__$1;
(statearr_2639_2662[(2)] = inst_2583);

(statearr_2639_2662[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$user$loop_until_$_state_machine__2353__auto__ = null;
var cljs$user$loop_until_$_state_machine__2353__auto____0 = (function (){
var statearr_2640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2640[(0)] = cljs$user$loop_until_$_state_machine__2353__auto__);

(statearr_2640[(1)] = (1));

return statearr_2640;
});
var cljs$user$loop_until_$_state_machine__2353__auto____1 = (function (state_2615){
while(true){
var ret_value__2354__auto__ = (function (){try{while(true){
var result__2355__auto__ = switch__2352__auto__(state_2615);
if(cljs.core.keyword_identical_QMARK_(result__2355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2355__auto__;
}
break;
}
}catch (e2641){var ex__2356__auto__ = e2641;
var statearr_2642_2663 = state_2615;
(statearr_2642_2663[(2)] = ex__2356__auto__);


if(cljs.core.seq((state_2615[(4)]))){
var statearr_2643_2664 = state_2615;
(statearr_2643_2664[(1)] = cljs.core.first((state_2615[(4)])));

} else {
throw ex__2356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2354__auto__,cljs.core.cst$kw$recur)){
var G__2665 = state_2615;
state_2615 = G__2665;
continue;
} else {
return ret_value__2354__auto__;
}
break;
}
});
cljs$user$loop_until_$_state_machine__2353__auto__ = function(state_2615){
switch(arguments.length){
case 0:
return cljs$user$loop_until_$_state_machine__2353__auto____0.call(this);
case 1:
return cljs$user$loop_until_$_state_machine__2353__auto____1.call(this,state_2615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$loop_until_$_state_machine__2353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$loop_until_$_state_machine__2353__auto____0;
cljs$user$loop_until_$_state_machine__2353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$loop_until_$_state_machine__2353__auto____1;
return cljs$user$loop_until_$_state_machine__2353__auto__;
})()
})();
var state__2377__auto__ = (function (){var statearr_2644 = (f__2376__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2376__auto__.cljs$core$IFn$_invoke$arity$0() : f__2376__auto__.call(null));
(statearr_2644[(6)] = c__2375__auto__);

return statearr_2644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2377__auto__);
}));

return c__2375__auto__;
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$cljs$user_SLASH_loop_DASH_until,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$cljs$user_SLASH_animation,cljs.core.cst$kw$pred,cljs.core.cst$kw$cljs$user_SLASH_pred),cljs.core.cst$kw$ret,cljs.core.cst$kw$cljs$user_SLASH_process),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$cljs$user_SLASH_animation,cljs.core.cst$kw$pred,cljs.core.cst$kw$cljs$user_SLASH_pred),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$pred], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$cljs$user_SLASH_animation,cljs.core.cst$kw$cljs$user_SLASH_pred], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$cljs$user_SLASH_animation,cljs.core.cst$kw$cljs$user_SLASH_pred], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$cljs$user_SLASH_animation,cljs.core.cst$kw$pred,cljs.core.cst$kw$cljs$user_SLASH_pred),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$cljs$user_SLASH_process,cljs.core.cst$kw$cljs$user_SLASH_process,null,null),cljs.core.cst$kw$cljs$user_SLASH_process,null,null,null));
/**
 * Loop forever. A done channel should be given here if you want to be able to kill it
 */
cljs.user.loop = (function cljs$user$loop(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2670 = arguments.length;
var i__4865__auto___2671 = (0);
while(true){
if((i__4865__auto___2671 < len__4864__auto___2670)){
args__4870__auto__.push((arguments[i__4865__auto___2671]));

var G__2672 = (i__4865__auto___2671 + (1));
i__4865__auto___2671 = G__2672;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.user.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.user.loop.cljs$core$IFn$_invoke$arity$variadic = (function (sprite,p__2668){
var map__2669 = p__2668;
var map__2669__$1 = cljs.core.__destructure_map(map__2669);
var animation = map__2669__$1;
return cljs.user.loop_until(sprite,animation,cljs.core.constantly(false));
}));

(cljs.user.loop.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.user.loop.cljs$lang$applyTo = (function (seq2666){
var G__2667 = cljs.core.first(seq2666);
var seq2666__$1 = cljs.core.next(seq2666);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2667,seq2666__$1);
}));

cljs.spec.alpha.def_impl(cljs.core.cst$sym$cljs$user_SLASH_loop,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$cljs$user_SLASH_animation),cljs.core.cst$kw$ret,cljs.core.cst$kw$cljs$user_SLASH_process),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$cljs$user_SLASH_animation),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$animation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$cljs$user_SLASH_animation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$cljs$user_SLASH_animation], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$cljs$user_SLASH_animation),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$cljs$user_SLASH_process,cljs.core.cst$kw$cljs$user_SLASH_process,null,null),cljs.core.cst$kw$cljs$user_SLASH_process,null,null,null));
/**
 * Reset the sprite to a frame
 */
cljs.user.reset = (function cljs$user$reset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2678 = arguments.length;
var i__4865__auto___2679 = (0);
while(true){
if((i__4865__auto___2679 < len__4864__auto___2678)){
args__4870__auto__.push((arguments[i__4865__auto___2679]));

var G__2680 = (i__4865__auto___2679 + (1));
i__4865__auto___2679 = G__2680;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.user.reset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.user.reset.cljs$core$IFn$_invoke$arity$variadic = (function (sprites){
var seq__2674 = cljs.core.seq(sprites);
var chunk__2675 = null;
var count__2676 = (0);
var i__2677 = (0);
while(true){
if((i__2677 < count__2676)){
var sprite = chunk__2675.cljs$core$IIndexed$_nth$arity$2(null,i__2677);
lemon.lime.move(sprite,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));


var G__2681 = seq__2674;
var G__2682 = chunk__2675;
var G__2683 = count__2676;
var G__2684 = (i__2677 + (1));
seq__2674 = G__2681;
chunk__2675 = G__2682;
count__2676 = G__2683;
i__2677 = G__2684;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2674);
if(temp__5753__auto__){
var seq__2674__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2674__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2674__$1);
var G__2685 = cljs.core.chunk_rest(seq__2674__$1);
var G__2686 = c__4679__auto__;
var G__2687 = cljs.core.count(c__4679__auto__);
var G__2688 = (0);
seq__2674 = G__2685;
chunk__2675 = G__2686;
count__2676 = G__2687;
i__2677 = G__2688;
continue;
} else {
var sprite = cljs.core.first(seq__2674__$1);
lemon.lime.move(sprite,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));


var G__2689 = cljs.core.next(seq__2674__$1);
var G__2690 = null;
var G__2691 = (0);
var G__2692 = (0);
seq__2674 = G__2689;
chunk__2675 = G__2690;
count__2676 = G__2691;
i__2677 = G__2692;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.user.reset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.user.reset.cljs$lang$applyTo = (function (seq2673){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2673));
}));

cljs.spec.alpha.def_impl(cljs.core.cst$sym$cljs$user_SLASH_reset,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprites,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite)),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprites,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprites], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.rep_PLUS_impl(cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprites,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null,null));
/**
 * Animate through a range of frames and then stop
 */
cljs.user.play = (function cljs$user$play(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2697 = arguments.length;
var i__4865__auto___2698 = (0);
while(true){
if((i__4865__auto___2698 < len__4864__auto___2697)){
args__4870__auto__.push((arguments[i__4865__auto___2698]));

var G__2699 = (i__4865__auto___2698 + (1));
i__4865__auto___2698 = G__2699;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.user.play.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.user.play.cljs$core$IFn$_invoke$arity$variadic = (function (sprite,p__2695){
var map__2696 = p__2695;
var map__2696__$1 = cljs.core.__destructure_map(map__2696);
var animation = map__2696__$1;
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2696__$1,cljs.core.cst$kw$to);
return cljs.user.loop_until(sprite,animation,(function (_,frame,last_frame){
return (((!((last_frame == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frame,to)));
}));
}));

(cljs.user.play.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.user.play.cljs$lang$applyTo = (function (seq2693){
var G__2694 = cljs.core.first(seq2693);
var seq2693__$1 = cljs.core.next(seq2693);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2694,seq2693__$1);
}));

cljs.spec.alpha.def_impl(cljs.core.cst$sym$cljs$user_SLASH_play,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$cljs$user_SLASH_animation),cljs.core.cst$kw$ret,cljs.core.cst$kw$cljs$user_SLASH_process),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$cljs$user_SLASH_animation),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$animation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$cljs$user_SLASH_animation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$cljs$user_SLASH_animation], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$cljs$user_SLASH_animation),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$cljs$user_SLASH_process,cljs.core.cst$kw$cljs$user_SLASH_process,null,null),cljs.core.cst$kw$cljs$user_SLASH_process,null,null,null));
/**
 * Animate back and forth between two frames
 */
cljs.user.ping_pong = (function cljs$user$ping_pong(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2799 = arguments.length;
var i__4865__auto___2800 = (0);
while(true){
if((i__4865__auto___2800 < len__4864__auto___2799)){
args__4870__auto__.push((arguments[i__4865__auto___2800]));

var G__2801 = (i__4865__auto___2800 + (1));
i__4865__auto___2800 = G__2801;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.user.ping_pong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.user.ping_pong.cljs$core$IFn$_invoke$arity$variadic = (function (sprite,p__2702){
var map__2703 = p__2702;
var map__2703__$1 = cljs.core.__destructure_map(map__2703);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2703__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2703__$1,cljs.core.cst$kw$to);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__2703__$1,cljs.core.cst$kw$duration,(80));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__2703__$1,cljs.core.cst$kw$done,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var c__2375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2376__auto__ = (function (){var switch__2352__auto__ = (function (state_2767){
var state_val_2768 = (state_2767[(1)]);
if((state_val_2768 === (7))){
var inst_2735 = (state_2767[(2)]);
var inst_2736 = cljs.core.not(inst_2735);
var state_2767__$1 = state_2767;
if(inst_2736){
var statearr_2769_2802 = state_2767__$1;
(statearr_2769_2802[(1)] = (11));

} else {
var statearr_2770_2803 = state_2767__$1;
(statearr_2770_2803[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (1))){
var inst_2704 = cljs.core.async.timeout(duration);
var inst_2705 = lemon.lime.animate.cljs$core$IFn$_invoke$arity$1(sprite);
var inst_2706 = lemon.lime.reel.cljs$core$IFn$_invoke$arity$3(from,to,inst_2705);
var inst_2707 = cljs.core.PersistentVector.EMPTY;
var inst_2708 = inst_2704;
var inst_2709 = inst_2706;
var inst_2710 = inst_2707;
var state_2767__$1 = (function (){var statearr_2771 = state_2767;
(statearr_2771[(7)] = inst_2709);

(statearr_2771[(8)] = inst_2708);

(statearr_2771[(9)] = inst_2710);

return statearr_2771;
})();
var statearr_2772_2804 = state_2767__$1;
(statearr_2772_2804[(2)] = null);

(statearr_2772_2804[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (4))){
var inst_2718 = (state_2767[(10)]);
var inst_2725 = (state_2767[(11)]);
var inst_2723 = (state_2767[(2)]);
var inst_2724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2723,(0),null);
var inst_2725__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2723,(1),null);
var inst_2726 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_2725__$1,inst_2718);
var state_2767__$1 = (function (){var statearr_2773 = state_2767;
(statearr_2773[(12)] = inst_2724);

(statearr_2773[(11)] = inst_2725__$1);

return statearr_2773;
})();
if(inst_2726){
var statearr_2774_2805 = state_2767__$1;
(statearr_2774_2805[(1)] = (5));

} else {
var statearr_2775_2806 = state_2767__$1;
(statearr_2775_2806[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (15))){
var inst_2740 = (state_2767[(13)]);
var inst_2744 = (state_2767[(14)]);
var inst_2710 = (state_2767[(9)]);
var inst_2746 = cljs.core.async.timeout(duration);
var inst_2747 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2748 = [inst_2740];
var inst_2749 = (new cljs.core.PersistentVector(null,1,(5),inst_2747,inst_2748,null));
var inst_2750 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_2749,inst_2710);
var inst_2708 = inst_2746;
var inst_2709 = inst_2744;
var inst_2710__$1 = inst_2750;
var state_2767__$1 = (function (){var statearr_2776 = state_2767;
(statearr_2776[(7)] = inst_2709);

(statearr_2776[(8)] = inst_2708);

(statearr_2776[(9)] = inst_2710__$1);

return statearr_2776;
})();
var statearr_2777_2807 = state_2767__$1;
(statearr_2777_2807[(2)] = null);

(statearr_2777_2807[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (13))){
var inst_2763 = (state_2767[(2)]);
var state_2767__$1 = state_2767;
var statearr_2778_2808 = state_2767__$1;
(statearr_2778_2808[(2)] = inst_2763);

(statearr_2778_2808[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (6))){
var inst_2725 = (state_2767[(11)]);
var inst_2729 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_2725,cljs.core.cst$kw$default);
var state_2767__$1 = state_2767;
if(inst_2729){
var statearr_2779_2809 = state_2767__$1;
(statearr_2779_2809[(1)] = (8));

} else {
var statearr_2780_2810 = state_2767__$1;
(statearr_2780_2810[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (17))){
var inst_2761 = (state_2767[(2)]);
var state_2767__$1 = state_2767;
var statearr_2781_2811 = state_2767__$1;
(statearr_2781_2811[(2)] = inst_2761);

(statearr_2781_2811[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (3))){
var inst_2765 = (state_2767[(2)]);
var state_2767__$1 = state_2767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2767__$1,inst_2765);
} else {
if((state_val_2768 === (12))){
var inst_2709 = (state_2767[(7)]);
var inst_2708 = (state_2767[(8)]);
var inst_2740 = (state_2767[(13)]);
var inst_2740__$1 = cljs.core.first(inst_2709);
var inst_2741 = lemon.lime.move(sprite,inst_2740__$1);
var state_2767__$1 = (function (){var statearr_2782 = state_2767;
(statearr_2782[(15)] = inst_2741);

(statearr_2782[(13)] = inst_2740__$1);

return statearr_2782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2767__$1,(14),inst_2708);
} else {
if((state_val_2768 === (2))){
var inst_2718 = (state_2767[(10)]);
var inst_2718__$1 = done;
var inst_2719 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2720 = [inst_2718__$1];
var inst_2721 = (new cljs.core.PersistentVector(null,1,(5),inst_2719,inst_2720,null));
var state_2767__$1 = (function (){var statearr_2783 = state_2767;
(statearr_2783[(10)] = inst_2718__$1);

return statearr_2783;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_2767__$1,(4),inst_2721,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default,cljs.core.cst$kw$continue], 0));
} else {
if((state_val_2768 === (11))){
var inst_2738 = lemon.lime.done.cljs$core$IFn$_invoke$arity$1(sprite);
var state_2767__$1 = state_2767;
var statearr_2784_2812 = state_2767__$1;
(statearr_2784_2812[(2)] = inst_2738);

(statearr_2784_2812[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (9))){
var state_2767__$1 = state_2767;
var statearr_2785_2813 = state_2767__$1;
(statearr_2785_2813[(2)] = null);

(statearr_2785_2813[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (5))){
var state_2767__$1 = state_2767;
var statearr_2786_2814 = state_2767__$1;
(statearr_2786_2814[(2)] = false);

(statearr_2786_2814[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (14))){
var inst_2709 = (state_2767[(7)]);
var inst_2744 = (state_2767[(14)]);
var inst_2743 = (state_2767[(2)]);
var inst_2744__$1 = cljs.core.next(inst_2709);
var state_2767__$1 = (function (){var statearr_2787 = state_2767;
(statearr_2787[(16)] = inst_2743);

(statearr_2787[(14)] = inst_2744__$1);

return statearr_2787;
})();
if(inst_2744__$1){
var statearr_2788_2815 = state_2767__$1;
(statearr_2788_2815[(1)] = (15));

} else {
var statearr_2789_2816 = state_2767__$1;
(statearr_2789_2816[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (16))){
var inst_2740 = (state_2767[(13)]);
var inst_2710 = (state_2767[(9)]);
var inst_2753 = cljs.core.async.timeout(duration);
var inst_2754 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2755 = [inst_2740];
var inst_2756 = (new cljs.core.PersistentVector(null,1,(5),inst_2754,inst_2755,null));
var inst_2757 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_2756,inst_2710);
var inst_2758 = cljs.core.PersistentVector.EMPTY;
var inst_2708 = inst_2753;
var inst_2709 = inst_2757;
var inst_2710__$1 = inst_2758;
var state_2767__$1 = (function (){var statearr_2790 = state_2767;
(statearr_2790[(7)] = inst_2709);

(statearr_2790[(8)] = inst_2708);

(statearr_2790[(9)] = inst_2710__$1);

return statearr_2790;
})();
var statearr_2791_2817 = state_2767__$1;
(statearr_2791_2817[(2)] = null);

(statearr_2791_2817[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (10))){
var inst_2733 = (state_2767[(2)]);
var state_2767__$1 = state_2767;
var statearr_2792_2818 = state_2767__$1;
(statearr_2792_2818[(2)] = inst_2733);

(statearr_2792_2818[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2768 === (8))){
var inst_2724 = (state_2767[(12)]);
var state_2767__$1 = state_2767;
var statearr_2793_2819 = state_2767__$1;
(statearr_2793_2819[(2)] = inst_2724);

(statearr_2793_2819[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$user$state_machine__2353__auto__ = null;
var cljs$user$state_machine__2353__auto____0 = (function (){
var statearr_2794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2794[(0)] = cljs$user$state_machine__2353__auto__);

(statearr_2794[(1)] = (1));

return statearr_2794;
});
var cljs$user$state_machine__2353__auto____1 = (function (state_2767){
while(true){
var ret_value__2354__auto__ = (function (){try{while(true){
var result__2355__auto__ = switch__2352__auto__(state_2767);
if(cljs.core.keyword_identical_QMARK_(result__2355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2355__auto__;
}
break;
}
}catch (e2795){var ex__2356__auto__ = e2795;
var statearr_2796_2820 = state_2767;
(statearr_2796_2820[(2)] = ex__2356__auto__);


if(cljs.core.seq((state_2767[(4)]))){
var statearr_2797_2821 = state_2767;
(statearr_2797_2821[(1)] = cljs.core.first((state_2767[(4)])));

} else {
throw ex__2356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2354__auto__,cljs.core.cst$kw$recur)){
var G__2822 = state_2767;
state_2767 = G__2822;
continue;
} else {
return ret_value__2354__auto__;
}
break;
}
});
cljs$user$state_machine__2353__auto__ = function(state_2767){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2353__auto____0.call(this);
case 1:
return cljs$user$state_machine__2353__auto____1.call(this,state_2767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2353__auto____0;
cljs$user$state_machine__2353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2353__auto____1;
return cljs$user$state_machine__2353__auto__;
})()
})();
var state__2377__auto__ = (function (){var statearr_2798 = (f__2376__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2376__auto__.cljs$core$IFn$_invoke$arity$0() : f__2376__auto__.call(null));
(statearr_2798[(6)] = c__2375__auto__);

return statearr_2798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2377__auto__);
}));

return c__2375__auto__;
}));

(cljs.user.ping_pong.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.user.ping_pong.cljs$lang$applyTo = (function (seq2700){
var G__2701 = cljs.core.first(seq2700);
var seq2700__$1 = cljs.core.next(seq2700);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2701,seq2700__$1);
}));

cljs.spec.alpha.def_impl(cljs.core.cst$sym$cljs$user_SLASH_ping_DASH_pong,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$cljs$user_SLASH_animation),cljs.core.cst$kw$ret,cljs.core.cst$kw$cljs$user_SLASH_process),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$cljs$user_SLASH_animation),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$animation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$cljs$user_SLASH_animation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$cljs$user_SLASH_animation], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$animation,cljs.core.cst$kw$cljs$user_SLASH_animation),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$cljs$user_SLASH_process,cljs.core.cst$kw$cljs$user_SLASH_process,null,null),cljs.core.cst$kw$cljs$user_SLASH_process,null,null,null));
/**
 * Swing mighty shepherd! The on-contact function will be called
 * with 0 arugmnets when the shepherd reaches the 6th frame, the frame
 * where his crook "makes contact"
 */
cljs.user.swing = (function cljs$user$swing(shepherd,on_contact){
return cljs.user.play.cljs$core$IFn$_invoke$arity$variadic(lemon.lime.on_change.cljs$core$IFn$_invoke$arity$3(shepherd,cljs.core.cst$kw$cljs$user_SLASH_contact,(function (_,___$1,p__2823){
var map__2824 = p__2823;
var map__2824__$1 = cljs.core.__destructure_map(map__2824);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2824__$1,cljs.core.cst$kw$frame);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(0)], null))){
return (on_contact.cljs$core$IFn$_invoke$arity$0 ? on_contact.cljs$core$IFn$_invoke$arity$0() : on_contact.call(null));
} else {
return null;
}
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$from,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], 0));
});
/**
 * Bring forth the power of the pedestal! Accepts a done channel used to control
 * when the pedestal stops
 */
cljs.user.activate = (function cljs$user$activate(pedestal,done){
var c__2375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2376__auto__ = (function (){var switch__2352__auto__ = (function (state_2842){
var state_val_2843 = (state_2842[(1)]);
if((state_val_2843 === (1))){
var inst_2825 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2826 = [(0),(0)];
var inst_2827 = (new cljs.core.PersistentVector(null,2,(5),inst_2825,inst_2826,null));
var inst_2828 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2829 = [(13),(0)];
var inst_2830 = (new cljs.core.PersistentVector(null,2,(5),inst_2828,inst_2829,null));
var inst_2831 = cljs.user.play.cljs$core$IFn$_invoke$arity$variadic(pedestal,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$from,inst_2827,cljs.core.cst$kw$to,inst_2830], 0));
var state_2842__$1 = state_2842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2842__$1,(2),inst_2831);
} else {
if((state_val_2843 === (2))){
var inst_2833 = (state_2842[(2)]);
var inst_2834 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2835 = [(14),(0)];
var inst_2836 = (new cljs.core.PersistentVector(null,2,(5),inst_2834,inst_2835,null));
var inst_2837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2838 = [(18),(0)];
var inst_2839 = (new cljs.core.PersistentVector(null,2,(5),inst_2837,inst_2838,null));
var inst_2840 = cljs.user.ping_pong.cljs$core$IFn$_invoke$arity$variadic(pedestal,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$from,inst_2836,cljs.core.cst$kw$to,inst_2839,cljs.core.cst$kw$done,done], 0));
var state_2842__$1 = (function (){var statearr_2844 = state_2842;
(statearr_2844[(7)] = inst_2833);

return statearr_2844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_2842__$1,inst_2840);
} else {
return null;
}
}
});
return (function() {
var cljs$user$activate_$_state_machine__2353__auto__ = null;
var cljs$user$activate_$_state_machine__2353__auto____0 = (function (){
var statearr_2845 = [null,null,null,null,null,null,null,null];
(statearr_2845[(0)] = cljs$user$activate_$_state_machine__2353__auto__);

(statearr_2845[(1)] = (1));

return statearr_2845;
});
var cljs$user$activate_$_state_machine__2353__auto____1 = (function (state_2842){
while(true){
var ret_value__2354__auto__ = (function (){try{while(true){
var result__2355__auto__ = switch__2352__auto__(state_2842);
if(cljs.core.keyword_identical_QMARK_(result__2355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2355__auto__;
}
break;
}
}catch (e2846){var ex__2356__auto__ = e2846;
var statearr_2847_2850 = state_2842;
(statearr_2847_2850[(2)] = ex__2356__auto__);


if(cljs.core.seq((state_2842[(4)]))){
var statearr_2848_2851 = state_2842;
(statearr_2848_2851[(1)] = cljs.core.first((state_2842[(4)])));

} else {
throw ex__2356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2354__auto__,cljs.core.cst$kw$recur)){
var G__2852 = state_2842;
state_2842 = G__2852;
continue;
} else {
return ret_value__2354__auto__;
}
break;
}
});
cljs$user$activate_$_state_machine__2353__auto__ = function(state_2842){
switch(arguments.length){
case 0:
return cljs$user$activate_$_state_machine__2353__auto____0.call(this);
case 1:
return cljs$user$activate_$_state_machine__2353__auto____1.call(this,state_2842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$activate_$_state_machine__2353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$activate_$_state_machine__2353__auto____0;
cljs$user$activate_$_state_machine__2353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$activate_$_state_machine__2353__auto____1;
return cljs$user$activate_$_state_machine__2353__auto__;
})()
})();
var state__2377__auto__ = (function (){var statearr_2849 = (f__2376__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2376__auto__.cljs$core$IFn$_invoke$arity$0() : f__2376__auto__.call(null));
(statearr_2849[(6)] = c__2375__auto__);

return statearr_2849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2377__auto__);
}));

return c__2375__auto__;
});
/**
 * Let our shepherd activate the powers of the pedestal
 */
cljs.user.play_scene = (function cljs$user$play_scene(shepherd,pedestal,done){
return cljs.user.swing(shepherd,(function (){
return cljs.user.activate(pedestal,done);
}));
});
cljs.user.config = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$sprite_SLASH_renderer,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$sprite_SLASH_pedestal,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,"pedestal.png",cljs.core.cst$kw$height,(40),cljs.core.cst$kw$width,(21),cljs.core.cst$kw$lemon$lime$css_SLASH_renderer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"pedestal"], null),cljs.core.cst$kw$renderer,integrant.core.ref(cljs.core.cst$kw$sprite_SLASH_renderer)], null),cljs.core.cst$kw$sprite_SLASH_shepherd,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,"shepherd-swing.png",cljs.core.cst$kw$height,(52),cljs.core.cst$kw$width,(47),cljs.core.cst$kw$lemon$lime$css_SLASH_renderer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"shepherd"], null),cljs.core.cst$kw$renderer,integrant.core.ref(cljs.core.cst$kw$sprite_SLASH_renderer)], null),cljs.core.cst$kw$animation_SLASH_done,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$animation_SLASH_play,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$done,integrant.core.ref(cljs.core.cst$kw$animation_SLASH_done),cljs.core.cst$kw$shepherd,integrant.core.ref(cljs.core.cst$kw$sprite_SLASH_shepherd),cljs.core.cst$kw$pedestal,integrant.core.ref(cljs.core.cst$kw$sprite_SLASH_pedestal)], null),cljs.core.cst$kw$ui_SLASH_controls,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$play,integrant.core.ref(cljs.core.cst$kw$animation_SLASH_play),cljs.core.cst$kw$done,integrant.core.ref(cljs.core.cst$kw$animation_SLASH_done),cljs.core.cst$kw$shepherd,integrant.core.ref(cljs.core.cst$kw$sprite_SLASH_shepherd),cljs.core.cst$kw$pedestal,integrant.core.ref(cljs.core.cst$kw$sprite_SLASH_pedestal)], null)], null);
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sprite_SLASH_renderer,(function (_,___$1){
return lemon.lime.create_css_renderer();
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sprite_SLASH_pedestal,(function (_,p__2853){
var map__2854 = p__2853;
var map__2854__$1 = cljs.core.__destructure_map(map__2854);
var config = map__2854__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2854__$1,cljs.core.cst$kw$renderer);
return lemon.lime.sprite.cljs$core$IFn$_invoke$arity$2(config,renderer);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sprite_SLASH_shepherd,(function (_,p__2855){
var map__2856 = p__2855;
var map__2856__$1 = cljs.core.__destructure_map(map__2856);
var config = map__2856__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2856__$1,cljs.core.cst$kw$renderer);
return lemon.lime.sprite.cljs$core$IFn$_invoke$arity$2(config,renderer);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$animation_SLASH_done,(function (_,___$1){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$animation_SLASH_play,(function (_,p__2857){
var map__2858 = p__2857;
var map__2858__$1 = cljs.core.__destructure_map(map__2858);
var shepherd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2858__$1,cljs.core.cst$kw$shepherd);
var pedestal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2858__$1,cljs.core.cst$kw$pedestal);
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2858__$1,cljs.core.cst$kw$done);
return (function (){
return cljs.user.play_scene(shepherd,pedestal,done);
});
}));
cljs.user.disable = (function cljs$user$disable(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2864 = arguments.length;
var i__4865__auto___2865 = (0);
while(true){
if((i__4865__auto___2865 < len__4864__auto___2864)){
args__4870__auto__.push((arguments[i__4865__auto___2865]));

var G__2866 = (i__4865__auto___2865 + (1));
i__4865__auto___2865 = G__2866;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.user.disable.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.user.disable.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var seq__2860 = cljs.core.seq(elems);
var chunk__2861 = null;
var count__2862 = (0);
var i__2863 = (0);
while(true){
if((i__2863 < count__2862)){
var elem = chunk__2861.cljs$core$IIndexed$_nth$arity$2(null,i__2863);
elem.setAttribute("disabled","disabled");


var G__2867 = seq__2860;
var G__2868 = chunk__2861;
var G__2869 = count__2862;
var G__2870 = (i__2863 + (1));
seq__2860 = G__2867;
chunk__2861 = G__2868;
count__2862 = G__2869;
i__2863 = G__2870;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2860);
if(temp__5753__auto__){
var seq__2860__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2860__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2860__$1);
var G__2871 = cljs.core.chunk_rest(seq__2860__$1);
var G__2872 = c__4679__auto__;
var G__2873 = cljs.core.count(c__4679__auto__);
var G__2874 = (0);
seq__2860 = G__2871;
chunk__2861 = G__2872;
count__2862 = G__2873;
i__2863 = G__2874;
continue;
} else {
var elem = cljs.core.first(seq__2860__$1);
elem.setAttribute("disabled","disabled");


var G__2875 = cljs.core.next(seq__2860__$1);
var G__2876 = null;
var G__2877 = (0);
var G__2878 = (0);
seq__2860 = G__2875;
chunk__2861 = G__2876;
count__2862 = G__2877;
i__2863 = G__2878;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.user.disable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.user.disable.cljs$lang$applyTo = (function (seq2859){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2859));
}));

cljs.user.enable = (function cljs$user$enable(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2884 = arguments.length;
var i__4865__auto___2885 = (0);
while(true){
if((i__4865__auto___2885 < len__4864__auto___2884)){
args__4870__auto__.push((arguments[i__4865__auto___2885]));

var G__2886 = (i__4865__auto___2885 + (1));
i__4865__auto___2885 = G__2886;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.user.enable.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.user.enable.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var seq__2880 = cljs.core.seq(elems);
var chunk__2881 = null;
var count__2882 = (0);
var i__2883 = (0);
while(true){
if((i__2883 < count__2882)){
var elem = chunk__2881.cljs$core$IIndexed$_nth$arity$2(null,i__2883);
elem.removeAttribute("disabled");


var G__2887 = seq__2880;
var G__2888 = chunk__2881;
var G__2889 = count__2882;
var G__2890 = (i__2883 + (1));
seq__2880 = G__2887;
chunk__2881 = G__2888;
count__2882 = G__2889;
i__2883 = G__2890;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2880);
if(temp__5753__auto__){
var seq__2880__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2880__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2880__$1);
var G__2891 = cljs.core.chunk_rest(seq__2880__$1);
var G__2892 = c__4679__auto__;
var G__2893 = cljs.core.count(c__4679__auto__);
var G__2894 = (0);
seq__2880 = G__2891;
chunk__2881 = G__2892;
count__2882 = G__2893;
i__2883 = G__2894;
continue;
} else {
var elem = cljs.core.first(seq__2880__$1);
elem.removeAttribute("disabled");


var G__2895 = cljs.core.next(seq__2880__$1);
var G__2896 = null;
var G__2897 = (0);
var G__2898 = (0);
seq__2880 = G__2895;
chunk__2881 = G__2896;
count__2882 = G__2897;
i__2883 = G__2898;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.user.enable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.user.enable.cljs$lang$applyTo = (function (seq2879){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2879));
}));

integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_controls,(function (_,p__2899){
var map__2900 = p__2899;
var map__2900__$1 = cljs.core.__destructure_map(map__2900);
var play = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2900__$1,cljs.core.cst$kw$play);
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2900__$1,cljs.core.cst$kw$done);
var shepherd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2900__$1,cljs.core.cst$kw$shepherd);
var pedestal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2900__$1,cljs.core.cst$kw$pedestal);
var start = goog.dom.getElement("start");
var stop = goog.dom.getElement("stop");
var reset_button = goog.dom.getElement("reset");
goog.events.listen(start,goog.events.EventType.CLICK,(function (){
(play.cljs$core$IFn$_invoke$arity$0 ? play.cljs$core$IFn$_invoke$arity$0() : play.call(null));

return cljs.user.disable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start,reset_button], 0));
}));

goog.events.listen(stop,goog.events.EventType.CLICK,(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(done,cljs.core.cst$kw$done);

return cljs.user.enable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start,reset_button], 0));
}));

goog.events.listen(reset_button,goog.events.EventType.CLICK,(function (){
return cljs.user.reset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shepherd,pedestal], 0));
}));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,stop,reset_button], null);
}));
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_controls,(function (_,elems){
var seq__2901 = cljs.core.seq(elems);
var chunk__2902 = null;
var count__2903 = (0);
var i__2904 = (0);
while(true){
if((i__2904 < count__2903)){
var elem = chunk__2902.cljs$core$IIndexed$_nth$arity$2(null,i__2904);
goog.events.removeAll(elem);


var G__2905 = seq__2901;
var G__2906 = chunk__2902;
var G__2907 = count__2903;
var G__2908 = (i__2904 + (1));
seq__2901 = G__2905;
chunk__2902 = G__2906;
count__2903 = G__2907;
i__2904 = G__2908;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2901);
if(temp__5753__auto__){
var seq__2901__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2901__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2901__$1);
var G__2909 = cljs.core.chunk_rest(seq__2901__$1);
var G__2910 = c__4679__auto__;
var G__2911 = cljs.core.count(c__4679__auto__);
var G__2912 = (0);
seq__2901 = G__2909;
chunk__2902 = G__2910;
count__2903 = G__2911;
i__2904 = G__2912;
continue;
} else {
var elem = cljs.core.first(seq__2901__$1);
goog.events.removeAll(elem);


var G__2913 = cljs.core.next(seq__2901__$1);
var G__2914 = null;
var G__2915 = (0);
var G__2916 = (0);
seq__2901 = G__2913;
chunk__2902 = G__2914;
count__2903 = G__2915;
i__2904 = G__2916;
continue;
}
} else {
return null;
}
}
break;
}
}));
if((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined') && (typeof cljs.user._STAR_system !== 'undefined')){
} else {
cljs.user._STAR_system = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Start the system by populating controls and wiring up event listeners
 */
cljs.user.start = (function cljs$user$start(){
return cljs.core.reset_BANG_(cljs.user._STAR_system,integrant.core.init.cljs$core$IFn$_invoke$arity$1(cljs.user.config));
});
/**
 * Stop the system. Removes event listeners and closes channels
 */
cljs.user.stop = (function cljs$user$stop(){
var temp__5757__auto__ = cljs.core.deref(cljs.user._STAR_system);
if((temp__5757__auto__ == null)){
return null;
} else {
var system = temp__5757__auto__;
integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1(system);

return cljs.core.cst$kw$stopped;
}
});
cljs.user.restart = (function cljs$user$restart(){
cljs.user.stop();

return cljs.user.start();
});
cljs.user.restart();
