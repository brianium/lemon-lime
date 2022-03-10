// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('lemon.lime');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('lemon.lime.css');
goog.require('lemon.lime.impl');
goog.require('lemon.lime.spec');
/**
 * The valid states and transitions for a sprite. Top level keys represent
 *        valid states. The map associated with each top level key is a map of events to
 *        new states.
 */
lemon.lime.sprite_states = new cljs.core.PersistentArrayMap(null, 4, [null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lemon$lime_SLASH_load,cljs.core.cst$kw$lemon$lime_SLASH_loaded], null),cljs.core.cst$kw$lemon$lime_SLASH_loaded,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lemon$lime_SLASH_render,cljs.core.cst$kw$lemon$lime_SLASH_ready], null),cljs.core.cst$kw$lemon$lime_SLASH_ready,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lemon$lime_SLASH_animate,cljs.core.cst$kw$lemon$lime_SLASH_animating,cljs.core.cst$kw$lemon$lime_SLASH_render,cljs.core.cst$kw$lemon$lime_SLASH_ready], null),cljs.core.cst$kw$lemon$lime_SLASH_animating,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lemon$lime_SLASH_done,cljs.core.cst$kw$lemon$lime_SLASH_ready,cljs.core.cst$kw$lemon$lime_SLASH_render,cljs.core.cst$kw$lemon$lime_SLASH_animating], null)], null);
/**
 * Returns the current state of the given sprite
 */
lemon.lime.current_state = (function lemon$lime$current_state(sprite){
return lemon.lime.impl.current_state(sprite);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_current_DASH_state,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_state),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_state,cljs.core.cst$kw$lemon$lime$spec_SLASH_state,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_state,null,null,null));
/**
 * Register a function to be called when the sprite's state changes
 */
lemon.lime.add_effect = (function lemon$lime$add_effect(var_args){
var G__2529 = arguments.length;
switch (G__2529) {
case 3:
return lemon.lime.add_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return lemon.lime.add_effect.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lemon.lime.add_effect.cljs$core$IFn$_invoke$arity$3 = (function (sprite,key,fn_3){
return lemon.lime.impl.add_effect.cljs$core$IFn$_invoke$arity$3(sprite,key,fn_3);
}));

(lemon.lime.add_effect.cljs$core$IFn$_invoke$arity$5 = (function (sprite,key,from,to,fn_3){
return lemon.lime.impl.add_effect.cljs$core$IFn$_invoke$arity$5(sprite,key,from,to,fn_3);
}));

(lemon.lime.add_effect.cljs$lang$maxFixedArity = 5);

cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_add_DASH_effect,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$fn_DASH_3,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$fn_DASH_3,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$key,cljs.core.cst$kw$fn_DASH_3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.keyword_QMARK_,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$fn_DASH_3,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null,null));
/**
 * Add an effect handler to be called when the sprite's old and new states are no longer equal in
 * value. When called with 2 arguments, a key will be provided. This will ensure that only one change
 * handler is added. If for some reason multiple change handlers are desired, be sure to provide distinct
 * keys for each handler
 */
lemon.lime.on_change = (function lemon$lime$on_change(var_args){
var G__2532 = arguments.length;
switch (G__2532) {
case 3:
return lemon.lime.on_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return lemon.lime.on_change.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lemon.lime.on_change.cljs$core$IFn$_invoke$arity$3 = (function (sprite,key,fn_3){
return lemon.lime.add_effect.cljs$core$IFn$_invoke$arity$3(sprite,key,(function (sprite__$1,old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return (fn_3.cljs$core$IFn$_invoke$arity$3 ? fn_3.cljs$core$IFn$_invoke$arity$3(sprite__$1,old,new$) : fn_3.call(null,sprite__$1,old,new$));
} else {
return null;
}
}));
}));

(lemon.lime.on_change.cljs$core$IFn$_invoke$arity$2 = (function (sprite,fn_3){
return lemon.lime.on_change.cljs$core$IFn$_invoke$arity$3(sprite,cljs.core.cst$kw$lemon$lime_SLASH_changed,fn_3);
}));

(lemon.lime.on_change.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_on_DASH_change,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$all,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$fn_DASH_3,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$fn_DASH_3,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler)),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$all,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$fn_DASH_3,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$fn_DASH_3,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler)),cljs.spec.alpha.alt_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all,cljs.core.cst$kw$binary], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$key,cljs.core.cst$kw$fn_DASH_3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.keyword_QMARK_,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$fn_DASH_3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$fn_DASH_3,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$fn_DASH_3,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$all,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$fn_DASH_3,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$fn_DASH_3,cljs.core.cst$kw$lemon$lime$spec_SLASH_effect_DASH_handler)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null,null));
/**
 * Transition the sprite to a new state. See [[lemon.lime/sprite-states]] for allowed states
 * and their events
 */
lemon.lime.transition = (function lemon$lime$transition(var_args){
var G__2535 = arguments.length;
switch (G__2535) {
case 3:
return lemon.lime.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return lemon.lime.transition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lemon.lime.transition.cljs$core$IFn$_invoke$arity$3 = (function (sprite,event,payload){
return lemon.lime.impl.transition.cljs$core$IFn$_invoke$arity$3(sprite,event,payload);
}));

(lemon.lime.transition.cljs$core$IFn$_invoke$arity$2 = (function (sprite,event){
return lemon.lime.impl.transition.cljs$core$IFn$_invoke$arity$2(sprite,event);
}));

(lemon.lime.transition.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_transition,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$all,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$event,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$payload,cljs.core.cst$kw$lemon$lime$spec_SLASH_event_DASH_payload),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$event,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_)),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$all,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$event,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$payload,cljs.core.cst$kw$lemon$lime$spec_SLASH_event_DASH_payload),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$event,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_)),cljs.spec.alpha.alt_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all,cljs.core.cst$kw$binary], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$event,cljs.core.cst$kw$payload], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.qualified_keyword_QMARK_,cljs.core.cst$kw$lemon$lime$spec_SLASH_event_DASH_payload], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$lemon$lime$spec_SLASH_event_DASH_payload], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.qualified_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$event,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$payload,cljs.core.cst$kw$lemon$lime$spec_SLASH_event_DASH_payload),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$event,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$all,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$event,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_,cljs.core.cst$kw$payload,cljs.core.cst$kw$lemon$lime$spec_SLASH_event_DASH_payload),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$event,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null,null));
/**
 * Given the dimensions of the sprite and it's sprite sheet, calcuate the full range of frames
 * available to the sprite. This function can be used to get a collection of frames, but is best
 * used by renderers during the load phase. Frames should be created and then stored in state, as they
 * should not change. See [[lemon.lime.css/create-frames]]
 */
lemon.lime.create_frames = (function lemon$lime$create_frames(sprite_sheet,dimensions){
return lemon.lime.impl.create_frames(sprite_sheet,dimensions);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_create_DASH_frames,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite_DASH_sheet,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite_DASH_sheet,cljs.core.cst$kw$dimensions,cljs.core.cst$kw$lemon$lime$spec_SLASH_dimensions),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_frames),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite_DASH_sheet,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite_DASH_sheet,cljs.core.cst$kw$dimensions,cljs.core.cst$kw$lemon$lime$spec_SLASH_dimensions),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite_DASH_sheet,cljs.core.cst$kw$dimensions], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite_DASH_sheet,cljs.core.cst$kw$lemon$lime$spec_SLASH_dimensions], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite_DASH_sheet,cljs.core.cst$kw$lemon$lime$spec_SLASH_dimensions], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite_DASH_sheet,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite_DASH_sheet,cljs.core.cst$kw$dimensions,cljs.core.cst$kw$lemon$lime$spec_SLASH_dimensions),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_frames,cljs.core.cst$kw$lemon$lime$spec_SLASH_frames,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_frames,null,null,null));
/**
 * Get an ordered collection of frames for the sprite
 */
lemon.lime.frames = (function lemon$lime$frames(sprite){
return lemon.lime.impl.frames(sprite);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_frames,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_frames),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_frames,cljs.core.cst$kw$lemon$lime$spec_SLASH_frames,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_frames,null,null,null));
/**
 * Get the index of a frame within a sprite's frame collection. Returns -1 if the
 * frame is not found
 */
lemon.lime.index_of = (function lemon$lime$index_of(frame,sprite){
return lemon.lime.impl.index_of(frame,sprite);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_index_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$sprite], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.int_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,null,null,null));
/**
 * Returns a subset of the sprite's frames in a way that is useful for animation. Consider
 * a sprite with 7 frames:
 * 
 * ```clojure
 * (reel [0 0] [6 0] sprite) => [[0 0] [1 0] [2 0] [3 0] [4 0] [5 0] [6 0]]
 * ```
 * 
 * Omitting the to value will assume the last frame:
 * 
 * ```clojure
 * (reel [0 0] sprite) => [[0 0] [1 0] [2 0] [3 0] [4 0] [5 0] [6 0]]
 * ```
 * 
 * It is also possible to create a reel from start to start:
 * 
 * ```clojure
 * (reel [0 0] [0 0] sprite) => [[0 0] [1 0] [2 0] [3 0] [4 0] [5 0] [6 0] [0 0]]
 * ```
 * 
 * Reels can be created that range from later reels to earlier reels:
 * 
 * ```clojure
 * (reel [1 0] [0 0] sprite) => [[1 0] [2 0] [3 0] [4 0] [5 0] [6 0] [0 0]]
 * ```
 */
lemon.lime.reel = (function lemon$lime$reel(var_args){
var G__2538 = arguments.length;
switch (G__2538) {
case 3:
return lemon.lime.reel.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return lemon.lime.reel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lemon.lime.reel.cljs$core$IFn$_invoke$arity$3 = (function (from,to,sprite){
return lemon.lime.impl.reel.cljs$core$IFn$_invoke$arity$3(from,to,sprite);
}));

(lemon.lime.reel.cljs$core$IFn$_invoke$arity$2 = (function (from,sprite){
return lemon.lime.impl.reel.cljs$core$IFn$_invoke$arity$2(from,sprite);
}));

(lemon.lime.reel.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_reel,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$from,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$to,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_frames),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$from,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$to,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$from,cljs.core.cst$kw$to,cljs.core.cst$kw$sprite], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$from,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$to,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_frames,cljs.core.cst$kw$lemon$lime$spec_SLASH_frames,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_frames,null,null,null));
/**
 * Update the sprite's current frame. This state change should be rendered by
 * the sprite's underlying renderer
 */
lemon.lime.move = (function lemon$lime$move(sprite,frame){
return lemon.lime.transition.cljs$core$IFn$_invoke$arity$3(sprite,cljs.core.cst$kw$lemon$lime_SLASH_render,(function (sprite__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lemon.lime.current_state(sprite__$1),cljs.core.cst$kw$frame,frame);
}));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_move,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$frame], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$frame,cljs.core.cst$kw$lemon$lime$spec_SLASH_frame),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null,null));
/**
 * Moves the sprite to an animating state. This is just a convenience function for transitioning
 * to an animating state. It is not required for any purpose other than marking the sprite's state
 * as ::animating
 */
lemon.lime.animate = (function lemon$lime$animate(var_args){
var G__2541 = arguments.length;
switch (G__2541) {
case 2:
return lemon.lime.animate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return lemon.lime.animate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lemon.lime.animate.cljs$core$IFn$_invoke$arity$2 = (function (sprite,set_state){
return lemon.lime.transition.cljs$core$IFn$_invoke$arity$3(sprite,cljs.core.cst$kw$lemon$lime_SLASH_animate,set_state);
}));

(lemon.lime.animate.cljs$core$IFn$_invoke$arity$1 = (function (sprite){
return lemon.lime.animate.cljs$core$IFn$_invoke$arity$2(sprite,lemon.lime.current_state);
}));

(lemon.lime.animate.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_animate,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$unary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$set_DASH_state,cljs.core.cst$kw$lemon$lime$spec_SLASH_payload_DASH_fn)),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$unary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$set_DASH_state,cljs.core.cst$kw$lemon$lime$spec_SLASH_payload_DASH_fn)),cljs.spec.alpha.alt_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unary,cljs.core.cst$kw$binary], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$set_DASH_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_payload_DASH_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_payload_DASH_fn], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$set_DASH_state,cljs.core.cst$kw$lemon$lime$spec_SLASH_payload_DASH_fn)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$unary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$set_DASH_state,cljs.core.cst$kw$lemon$lime$spec_SLASH_payload_DASH_fn)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null,null));
/**
 * Moves the sprite out of an animating state. This is just a convenience function for transitioning
 * back to a ready state. It is not required for any purpose other than moving the sprite's state
 * from ::animating to ::ready
 */
lemon.lime.done = (function lemon$lime$done(var_args){
var G__2544 = arguments.length;
switch (G__2544) {
case 2:
return lemon.lime.done.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return lemon.lime.done.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lemon.lime.done.cljs$core$IFn$_invoke$arity$2 = (function (sprite,set_state){
return lemon.lime.transition.cljs$core$IFn$_invoke$arity$3(sprite,cljs.core.cst$kw$lemon$lime_SLASH_done,set_state);
}));

(lemon.lime.done.cljs$core$IFn$_invoke$arity$1 = (function (sprite){
return lemon.lime.done.cljs$core$IFn$_invoke$arity$2(sprite,lemon.lime.current_state);
}));

(lemon.lime.done.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_done,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$unary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$set_DASH_state,cljs.core.cst$kw$lemon$lime$spec_SLASH_payload_DASH_fn)),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$unary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$set_DASH_state,cljs.core.cst$kw$lemon$lime$spec_SLASH_payload_DASH_fn)),cljs.spec.alpha.alt_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unary,cljs.core.cst$kw$binary], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite,cljs.core.cst$kw$set_DASH_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_payload_DASH_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_payload_DASH_fn], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$set_DASH_state,cljs.core.cst$kw$lemon$lime$spec_SLASH_payload_DASH_fn)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$unary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$set_DASH_state,cljs.core.cst$kw$lemon$lime$spec_SLASH_payload_DASH_fn)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null,null));
/**
 * Create a sprite renderer backed by CSS. This is merely a default renderer
 * implementation shipped with lemon.lime. Feel free to implement [[lemon.lime.protocols/Renderer]] protocol
 * if different behavior is desired.
 */
lemon.lime.create_css_renderer = (function lemon$lime$create_css_renderer(){
var transition_load = (function (p1__2546_SHARP_,p2__2547_SHARP_){
return lemon.lime.transition.cljs$core$IFn$_invoke$arity$3(p1__2546_SHARP_,cljs.core.cst$kw$lemon$lime_SLASH_load,p2__2547_SHARP_);
});
var transition_render = (function (p1__2548_SHARP_,p2__2549_SHARP_){
return lemon.lime.transition.cljs$core$IFn$_invoke$arity$3(p1__2548_SHARP_,cljs.core.cst$kw$lemon$lime_SLASH_render,p2__2549_SHARP_);
});
return lemon.lime.css.create_renderer(transition_load,transition_render);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_create_DASH_css_DASH_renderer,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_renderer),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat),cljs.spec.alpha.cat_impl(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_renderer,cljs.core.cst$kw$lemon$lime$spec_SLASH_renderer,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_renderer,null,null,null));
/**
 * Create a sprite. The rendered outcome of doing so may vary from renderer to renderer.
 * See [[lemon.lime.spec/config]] for the structure of common configuration. 
 * Renderers should support namespaced keys for their own configuration.
 * For instance, the default css renderer accepts config identifying a dom id to replace
 * and an optional append function for taking control of dom insertion on your own:
 * 
 * ```clojure
 * {:uri          "shepherd-swing.png"
 *  :height        52
 *  :width         47
 *  ::css/renderer {:id "shepherd"
 *                  :append appendFn}
 * ```
 */
lemon.lime.sprite = (function lemon$lime$sprite(var_args){
var G__2551 = arguments.length;
switch (G__2551) {
case 2:
return lemon.lime.sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return lemon.lime.sprite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lemon.lime.sprite.cljs$core$IFn$_invoke$arity$2 = (function (config,renderer){
return lemon.lime.impl.sprite(config,renderer,lemon.lime.on_change,lemon.lime.sprite_states);
}));

(lemon.lime.sprite.cljs$core$IFn$_invoke$arity$1 = (function (config){
return lemon.lime.sprite.cljs$core$IFn$_invoke$arity$2(config,lemon.lime.create_css_renderer());
}));

(lemon.lime.sprite.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime_SLASH_sprite,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$unary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$config,cljs.core.cst$kw$lemon$lime$spec_SLASH_config),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$config,cljs.core.cst$kw$lemon$lime$spec_SLASH_config,cljs.core.cst$kw$renderer,cljs.core.cst$kw$lemon$lime$spec_SLASH_renderer)),cljs.core.cst$kw$ret,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$unary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$config,cljs.core.cst$kw$lemon$lime$spec_SLASH_config),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$config,cljs.core.cst$kw$lemon$lime$spec_SLASH_config,cljs.core.cst$kw$renderer,cljs.core.cst$kw$lemon$lime$spec_SLASH_renderer)),cljs.spec.alpha.alt_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unary,cljs.core.cst$kw$binary], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_config], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_config], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$renderer], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_config,cljs.core.cst$kw$lemon$lime$spec_SLASH_renderer], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_config,cljs.core.cst$kw$lemon$lime$spec_SLASH_renderer], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$config,cljs.core.cst$kw$lemon$lime$spec_SLASH_config),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$config,cljs.core.cst$kw$lemon$lime$spec_SLASH_config,cljs.core.cst$kw$renderer,cljs.core.cst$kw$lemon$lime$spec_SLASH_renderer)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$unary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$config,cljs.core.cst$kw$lemon$lime$spec_SLASH_config),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$config,cljs.core.cst$kw$lemon$lime$spec_SLASH_config,cljs.core.cst$kw$renderer,cljs.core.cst$kw$lemon$lime$spec_SLASH_renderer)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null),cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite,null,null,null));
