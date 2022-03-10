// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('lemon.lime.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fsm.core');
goog.require('lemon.lime.protocols');
lemon.lime.impl.renderer_QMARK_ = (function lemon$lime$impl$renderer_QMARK_(x){
if((!((lemon.lime.protocols.Renderer == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === lemon.lime.protocols.Renderer.lemon$lime$impl$x$)))){
return true;
} else {
if((!lemon.lime.protocols.Renderer.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(x,lemon.lime.protocols.Renderer);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(x,lemon.lime.protocols.Renderer);
}
});
lemon.lime.impl.default_state = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$frames,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$height,(0),cljs.core.cst$kw$width,(0),cljs.core.cst$kw$sprite_DASH_sheet,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,(0),cljs.core.cst$kw$width,(0)], null)], null);
lemon.lime.impl.create_sprite = (function lemon$lime$impl$create_sprite(renderer,uri,initial_state,sprite_states){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fsm.core.create_state_machine.cljs$core$IFn$_invoke$arity$2(sprite_states,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lemon.lime.impl.default_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_state,cljs.core.cst$kw$uri,uri)], 0))),renderer], null);
});
lemon.lime.impl.load = (function lemon$lime$impl$load(sprite){
var vec__533 = sprite;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__533,(0),null);
var renderer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__533,(1),null);
lemon.lime.protocols._load(renderer,sprite);

return sprite;
});
lemon.lime.impl.render = (function lemon$lime$impl$render(sprite,options){
var vec__536 = sprite;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__536,(0),null);
var renderer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__536,(1),null);
lemon.lime.protocols._render(renderer,sprite,options);

return sprite;
});
lemon.lime.impl.current_state = (function lemon$lime$impl$current_state(p__539){
var vec__540 = p__539;
var sm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__540,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__540,(1),null);
return fsm.core.current_state(sm);
});
lemon.lime.impl.add_effect = (function lemon$lime$impl$add_effect(var_args){
var G__550 = arguments.length;
switch (G__550) {
case 3:
return lemon.lime.impl.add_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return lemon.lime.impl.add_effect.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lemon.lime.impl.add_effect.cljs$core$IFn$_invoke$arity$3 = (function (sprite,key,fn_3){
fsm.core.add_effect.cljs$core$IFn$_invoke$arity$3(cljs.core.first(sprite),key,(function (p1__545_SHARP_,p2__543_SHARP_,p3__544_SHARP_){
return (fn_3.cljs$core$IFn$_invoke$arity$3 ? fn_3.cljs$core$IFn$_invoke$arity$3(sprite,p2__543_SHARP_,p3__544_SHARP_) : fn_3.call(null,sprite,p2__543_SHARP_,p3__544_SHARP_));
}));

return sprite;
}));

(lemon.lime.impl.add_effect.cljs$core$IFn$_invoke$arity$5 = (function (sprite,key,from,to,fn_3){
fsm.core.add_effect.cljs$core$IFn$_invoke$arity$5(cljs.core.first(sprite),key,from,to,(function (p1__548_SHARP_,p2__546_SHARP_,p3__547_SHARP_){
return (fn_3.cljs$core$IFn$_invoke$arity$3 ? fn_3.cljs$core$IFn$_invoke$arity$3(sprite,p2__546_SHARP_,p3__547_SHARP_) : fn_3.call(null,sprite,p2__546_SHARP_,p3__547_SHARP_));
}));

return sprite;
}));

(lemon.lime.impl.add_effect.cljs$lang$maxFixedArity = 5);

lemon.lime.impl.event_payload = (function lemon$lime$impl$event_payload(sprite,payload){
if(cljs.core.fn_QMARK_(payload)){
return (function() { 
var G__552__delegate = function (_,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(payload,sprite,args);
};
var G__552 = function (_,var_args){
var args = null;
if (arguments.length > 1) {
var G__553__i = 0, G__553__a = new Array(arguments.length -  1);
while (G__553__i < G__553__a.length) {G__553__a[G__553__i] = arguments[G__553__i + 1]; ++G__553__i;}
  args = new cljs.core.IndexedSeq(G__553__a,0,null);
} 
return G__552__delegate.call(this,_,args);};
G__552.cljs$lang$maxFixedArity = 1;
G__552.cljs$lang$applyTo = (function (arglist__554){
var _ = cljs.core.first(arglist__554);
var args = cljs.core.rest(arglist__554);
return G__552__delegate(_,args);
});
G__552.cljs$core$IFn$_invoke$arity$variadic = G__552__delegate;
return G__552;
})()
;
} else {
return payload;
}
});
lemon.lime.impl.transition = (function lemon$lime$impl$transition(var_args){
var G__556 = arguments.length;
switch (G__556) {
case 3:
return lemon.lime.impl.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return lemon.lime.impl.transition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lemon.lime.impl.transition.cljs$core$IFn$_invoke$arity$3 = (function (sprite,event,payload){
fsm.core.transition.cljs$core$IFn$_invoke$arity$3(cljs.core.first(sprite),event,lemon.lime.impl.event_payload(sprite,payload));

return sprite;
}));

(lemon.lime.impl.transition.cljs$core$IFn$_invoke$arity$2 = (function (sprite,event){
fsm.core.transition.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sprite),event);

return sprite;
}));

(lemon.lime.impl.transition.cljs$lang$maxFixedArity = 3);

lemon.lime.impl.create_frames = (function lemon$lime$impl$create_frames(sprite_sheet,p__558){
var map__559 = p__558;
var map__559__$1 = cljs.core.__destructure_map(map__559);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__559__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__559__$1,cljs.core.cst$kw$height);
var map__560 = sprite_sheet;
var map__560__$1 = cljs.core.__destructure_map(map__560);
var dw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__560__$1,cljs.core.cst$kw$width);
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__560__$1,cljs.core.cst$kw$height);
var columns = (dw / width);
var rows = (dy / height);
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var iter__4652__auto__ = (function lemon$lime$impl$create_frames_$_iter__561(s__562){
return (new cljs.core.LazySeq(null,(function (){
var s__562__$1 = s__562;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__562__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var col = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__562__$1,col,xs__6308__auto__,temp__5753__auto__,map__560,map__560__$1,dw,dy,columns,rows,map__559,map__559__$1,width,height){
return (function lemon$lime$impl$create_frames_$_iter__561_$_iter__563(s__564){
return (new cljs.core.LazySeq(null,((function (s__562__$1,col,xs__6308__auto__,temp__5753__auto__,map__560,map__560__$1,dw,dy,columns,rows,map__559,map__559__$1,width,height){
return (function (){
var s__564__$1 = s__564;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__564__$1);
if(temp__5753__auto____$1){
var s__564__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__564__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__564__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__566 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__565 = (0);
while(true){
if((i__565 < size__4651__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4650__auto__,i__565);
cljs.core.chunk_append(b__566,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null));

var G__567 = (i__565 + (1));
i__565 = G__567;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__566),lemon$lime$impl$create_frames_$_iter__561_$_iter__563(cljs.core.chunk_rest(s__564__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__566),null);
}
} else {
var row = cljs.core.first(s__564__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null),lemon$lime$impl$create_frames_$_iter__561_$_iter__563(cljs.core.rest(s__564__$2)));
}
} else {
return null;
}
break;
}
});})(s__562__$1,col,xs__6308__auto__,temp__5753__auto__,map__560,map__560__$1,dw,dy,columns,rows,map__559,map__559__$1,width,height))
,null,null));
});})(s__562__$1,col,xs__6308__auto__,temp__5753__auto__,map__560,map__560__$1,dw,dy,columns,rows,map__559,map__559__$1,width,height))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,lemon$lime$impl$create_frames_$_iter__561(cljs.core.rest(s__562__$1)));
} else {
var G__568 = cljs.core.rest(s__562__$1);
s__562__$1 = G__568;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(columns));
})())));
});
lemon.lime.impl.frames = (function lemon$lime$impl$frames(sprite){
return cljs.core.cst$kw$frames.cljs$core$IFn$_invoke$arity$1(lemon.lime.impl.current_state(sprite));
});
lemon.lime.impl.sprite = (function lemon$lime$impl$sprite(p__570,renderer,on_change,sprite_states){
var map__571 = p__570;
var map__571__$1 = cljs.core.__destructure_map(map__571);
var config = map__571__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__571__$1,cljs.core.cst$kw$uri);
return lemon.lime.impl.load((function (){var G__572 = lemon.lime.impl.create_sprite(renderer,uri,config,sprite_states);
var G__573 = (function (p1__569_SHARP_){
return lemon.lime.impl.render(p1__569_SHARP_,config);
});
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(G__572,G__573) : on_change.call(null,G__572,G__573));
})());
});
lemon.lime.impl.index_of = (function lemon$lime$impl$index_of(frame,sprite){
var i = (0);
var fs = lemon.lime.impl.frames(sprite);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frame,cljs.core.first(fs))){
return i;
} else {
if(cljs.core.empty_QMARK_(fs)){
return (-1);
} else {
var G__574 = (i + (1));
var G__575 = cljs.core.next(fs);
i = G__574;
fs = G__575;
continue;

}
}
break;
}
});
lemon.lime.impl.reel = (function lemon$lime$impl$reel(var_args){
var G__577 = arguments.length;
switch (G__577) {
case 3:
return lemon.lime.impl.reel.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return lemon.lime.impl.reel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lemon.lime.impl.reel.cljs$core$IFn$_invoke$arity$3 = (function (from,to,sprite){
var fs = cljs.core.cycle(lemon.lime.impl.frames(sprite));
var frame = cljs.core.first(fs);
var rng = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.seq(rng)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,frame)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rng,frame);
} else {
if(((((cljs.core.empty_QMARK_(rng)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,frame)))) || (cljs.core.seq(rng)))){
var G__579 = cljs.core.next(fs);
var G__580 = cljs.core.fnext(fs);
var G__581 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rng,frame);
fs = G__579;
frame = G__580;
rng = G__581;
continue;
} else {
var G__582 = cljs.core.next(fs);
var G__583 = cljs.core.fnext(fs);
var G__584 = rng;
fs = G__582;
frame = G__583;
rng = G__584;
continue;

}
}
break;
}
}));

(lemon.lime.impl.reel.cljs$core$IFn$_invoke$arity$2 = (function (from,sprite){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(lemon.lime.impl.frames(sprite),lemon.lime.impl.index_of(from,sprite));
}));

(lemon.lime.impl.reel.cljs$lang$maxFixedArity = 3);

