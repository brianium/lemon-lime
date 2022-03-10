// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('lemon.lime.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * The Renderer protocol deals with loading and rendering sprites. The render function
 * is meant to draw meaningful changes to the sprite on some display. 
 * 
 * The meaning of "load" may vary from renderer to renderer. However,
 * loading should be responsible for setting the initial state of the sprite, especially
 * where dimensions and the finite frame set are concerned. It is expected
 * that the load function sets state for the sprites :sprite-sheet and :frames keys while transitioning
 * to a :lemon.lime/loaded state.
 * @interface
 */
lemon.lime.protocols.Renderer = function(){};

var lemon$lime$protocols$Renderer$_load$dyn_528 = (function (self,sprite){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (lemon.lime.protocols._load[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(self,sprite) : m__4551__auto__.call(null,self,sprite));
} else {
var m__4549__auto__ = (lemon.lime.protocols._load["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(self,sprite) : m__4549__auto__.call(null,self,sprite));
} else {
throw cljs.core.missing_protocol("Renderer.-load",self);
}
}
});
/**
 * Load the sprite and put it into a :lemon.lime/loaded state. Sets :sprite-sheet and :frames keys
 */
lemon.lime.protocols._load = (function lemon$lime$protocols$_load(self,sprite){
if((((!((self == null)))) && ((!((self.lemon$lime$protocols$Renderer$_load$arity$2 == null)))))){
return self.lemon$lime$protocols$Renderer$_load$arity$2(self,sprite);
} else {
return lemon$lime$protocols$Renderer$_load$dyn_528(self,sprite);
}
});

var lemon$lime$protocols$Renderer$_render$dyn_529 = (function (self,sprite,options){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (lemon.lime.protocols._render[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(self,sprite,options) : m__4551__auto__.call(null,self,sprite,options));
} else {
var m__4549__auto__ = (lemon.lime.protocols._render["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(self,sprite,options) : m__4549__auto__.call(null,self,sprite,options));
} else {
throw cljs.core.missing_protocol("Renderer.-render",self);
}
}
});
/**
 * Draw state changes to the sprite
 */
lemon.lime.protocols._render = (function lemon$lime$protocols$_render(self,sprite,options){
if((((!((self == null)))) && ((!((self.lemon$lime$protocols$Renderer$_render$arity$3 == null)))))){
return self.lemon$lime$protocols$Renderer$_render$arity$3(self,sprite,options);
} else {
return lemon$lime$protocols$Renderer$_render$dyn_529(self,sprite,options);
}
});

