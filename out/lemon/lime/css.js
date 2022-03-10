// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('lemon.lime.css');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('goog.events');
goog.require('lemon.lime.impl');
goog.require('lemon.lime.protocols');
goog.require('lemon.lime.spec');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$lemon$lime$css_SLASH_id,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$lemon$lime$css_SLASH_element,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,cljs.core.cst$sym$js_SLASH_HTMLElement,cljs.core.cst$sym$_PERCENT_)),(function (p1__595_SHARP_){
return (p1__595_SHARP_ instanceof HTMLElement);
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$lemon$lime$css_SLASH_append,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$element,cljs.core.cst$kw$lemon$lime$css_SLASH_element,cljs.core.cst$kw$target,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$lemon$lime$css_SLASH_element),cljs.core.cst$kw$id,cljs.core.cst$kw$lemon$lime$css_SLASH_id),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$element,cljs.core.cst$kw$lemon$lime$css_SLASH_element,cljs.core.cst$kw$target,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$lemon$lime$css_SLASH_element),cljs.core.cst$kw$id,cljs.core.cst$kw$lemon$lime$css_SLASH_id),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$element,cljs.core.cst$kw$target,cljs.core.cst$kw$id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$css_SLASH_element,cljs.spec.alpha.nilable_impl(cljs.core.cst$kw$lemon$lime$css_SLASH_element,cljs.core.cst$kw$lemon$lime$css_SLASH_element,null),cljs.core.cst$kw$lemon$lime$css_SLASH_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$css_SLASH_element,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$lemon$lime$css_SLASH_element),cljs.core.cst$kw$lemon$lime$css_SLASH_id], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$element,cljs.core.cst$kw$lemon$lime$css_SLASH_element,cljs.core.cst$kw$target,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$lemon$lime$css_SLASH_element),cljs.core.cst$kw$id,cljs.core.cst$kw$lemon$lime$css_SLASH_id),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$lemon$lime$css_SLASH_renderer,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$css_SLASH_id], null),cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$css_SLASH_append], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$css_SLASH_id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$css_SLASH_append], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__596){
return cljs.core.map_QMARK_(G__596);
}),(function (G__596){
return cljs.core.contains_QMARK_(G__596,cljs.core.cst$kw$id);
})], null),(function (G__596){
return ((cljs.core.map_QMARK_(G__596)) && (cljs.core.contains_QMARK_(G__596,cljs.core.cst$kw$id)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$append], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$css_SLASH_id], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$css_SLASH_append], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$id))], null),null])));
/**
 * Convert x to a valid css pixel value. Returns a space joined string of pixel
 * values if x is seqable
 */
lemon.lime.css.px = (function lemon$lime$css$px(x){
if((!(cljs.core.seqable_QMARK_(x)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join('');
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(lemon.lime.css.px,x));
}
});
/**
 * Returns a valid CSS background position from the given sprite state
 */
lemon.lime.css.pos = (function lemon$lime$css$pos(p__597){
var map__598 = p__597;
var map__598__$1 = cljs.core.__destructure_map(map__598);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__598__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__598__$1,cljs.core.cst$kw$height);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__598__$1,cljs.core.cst$kw$frame);
var vec__599 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.unchecked_negate,frame);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__599,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__599,(1),null);
return lemon.lime.css.px(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(x * width)),(y * height)));
});
/**
 * Get the computed background-image for an element. Useful for checking if the sprite element already
 * has a background-image
 */
lemon.lime.css.get_background_image = (function lemon$lime$css$get_background_image(element){
var declaration = window.getComputedStyle(element);
var background_image = declaration.getPropertyValue("background-image");
if(cljs.core.seq(background_image)){
return background_image;
} else {
return null;
}
});
/**
 * Load the sprite image by uri. Calls fn-1 with the laoded image or throws an error if the image fails
 * to load
 */
lemon.lime.css.load_image = (function lemon$lime$css$load_image(uri,fn_1){
var image = (new Image());
goog.events.listen(image,goog.events.EventType.LOAD,(function (){
return (fn_1.cljs$core$IFn$_invoke$arity$1 ? fn_1.cljs$core$IFn$_invoke$arity$1(image) : fn_1.call(null,image));
}));

goog.events.listen(image,goog.events.EventType.ERROR,(function (){
throw (new Error(["Could not load sprite image identified by uri ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')));
}));

return (image.src = uri);
});
/**
 * Set the dimensions of the element to match the sprite's state
 */
lemon.lime.css.update_dimensions = (function lemon$lime$css$update_dimensions(p__602,element){
var map__603 = p__602;
var map__603__$1 = cljs.core.__destructure_map(map__603);
var state = map__603__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__603__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__603__$1,cljs.core.cst$kw$height);
goog.style.setStyle(element,({"width": lemon.lime.css.px(width), "height": lemon.lime.css.px(height)}));

return state;
});
/**
 * Update the css background properties of the sprite element
 */
lemon.lime.css.update_position = (function lemon$lime$css$update_position(state,element){
goog.style.setStyle(element,({"backgroundPosition": lemon.lime.css.pos(state)}));

return state;
});
/**
 * Update the sprite's CSS background with current state
 */
lemon.lime.css.draw = (function lemon$lime$css$draw(state,element){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lemon.lime.css.update_position(state,element),cljs.core.cst$kw$lemon$lime$css_SLASH_element,element);
});
/**
 * The available set of frames is a function of the loaded sprite-sheet. The renderer
 * implementation is responsible for setting the initial frame state. So it is written. So
 * it shall be.
 */
lemon.lime.css.create_frames = (function lemon$lime$css$create_frames(p__604){
var map__605 = p__604;
var map__605__$1 = cljs.core.__destructure_map(map__605);
var state = map__605__$1;
var sprite_sheet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__605__$1,cljs.core.cst$kw$sprite_DASH_sheet);
var frames = lemon.lime.impl.create_frames(sprite_sheet,state);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$frames,frames),cljs.core.cst$kw$frame,cljs.core.first(frames));
});
/**
 * If the element already has the given uri as a background image, then dont update
 * the background-image style. This can prevent a flicker caused by setting the background-image
 * style via cljs (even when they are technically the same value)
 */
lemon.lime.css.guarantee_background = (function lemon$lime$css$guarantee_background(p__606,element){
var map__607 = p__606;
var map__607__$1 = cljs.core.__destructure_map(map__607);
var state = map__607__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__607__$1,cljs.core.cst$kw$uri);
var current = lemon.lime.css.get_background_image(element);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,uri)){
} else {
goog.style.setStyle(element,({"backgroundImage": ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),")"].join(''), "backgroundRepeat": "no-repeat"}));
}

return state;
});
/**
 * Create the sprite element and draw it's initial state. Returns new
 * sprite state that includes the element and sprite sheet dimensions
 */
lemon.lime.css.create_state = (function lemon$lime$css$create_state(image,sprite){
var element = goog.dom.createDom("div","ll-sprite");
return lemon.lime.css.create_frames(cljs.core.assoc_in(cljs.core.assoc_in(lemon.lime.css.update_dimensions(lemon.lime.css.draw(lemon.lime.css.guarantee_background(lemon.lime.impl.current_state(sprite),element),element),element),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite_DASH_sheet,cljs.core.cst$kw$height], null),image.naturalHeight),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite_DASH_sheet,cljs.core.cst$kw$width], null),image.naturalWidth));
});
/**
 * The default append function. Is used to replace a configured sprite
 * element that already exists on the page.
 */
lemon.lime.css.replace_element = (function lemon$lime$css$replace_element(element,target,_){
return goog.dom.replaceNode(element,target);
});

/**
* @constructor
 * @implements {lemon.lime.protocols.Renderer}
*/
lemon.lime.css.CssRenderer = (function (transition_load,transition_render){
this.transition_load = transition_load;
this.transition_render = transition_render;
});
(lemon.lime.css.CssRenderer.prototype.lemon$lime$protocols$Renderer$ = cljs.core.PROTOCOL_SENTINEL);

(lemon.lime.css.CssRenderer.prototype.lemon$lime$protocols$Renderer$_load$arity$2 = (function (_,sprite){
var self__ = this;
var ___$1 = this;
var map__609 = lemon.lime.impl.current_state(sprite);
var map__609__$1 = cljs.core.__destructure_map(map__609);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__609__$1,cljs.core.cst$kw$uri);
return lemon.lime.css.load_image(uri,(function (p1__608_SHARP_){
var G__610 = sprite;
var G__611 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lemon.lime.css.create_state,p1__608_SHARP_);
return (self__.transition_load.cljs$core$IFn$_invoke$arity$2 ? self__.transition_load.cljs$core$IFn$_invoke$arity$2(G__610,G__611) : self__.transition_load.call(null,G__610,G__611));
}));
}));

(lemon.lime.css.CssRenderer.prototype.lemon$lime$protocols$Renderer$_render$arity$3 = (function (_,sprite,options){
var self__ = this;
var ___$1 = this;
var map__612 = options;
var map__612__$1 = cljs.core.__destructure_map(map__612);
var map__613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__612__$1,cljs.core.cst$kw$lemon$lime$css_SLASH_renderer);
var map__613__$1 = cljs.core.__destructure_map(map__613);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__613__$1,cljs.core.cst$kw$id);
var append = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__613__$1,cljs.core.cst$kw$append,lemon.lime.css.replace_element);
var state = lemon.lime.impl.current_state(sprite);
var target = goog.dom.getElement(id);
var appended_QMARK_ = (!((goog.dom.getParentElement(target) == null)));
var element = ((appended_QMARK_)?target:cljs.core.cst$kw$lemon$lime$css_SLASH_element.cljs$core$IFn$_invoke$arity$1(state));
if(appended_QMARK_){
} else {
(append.cljs$core$IFn$_invoke$arity$3 ? append.cljs$core$IFn$_invoke$arity$3(element,target,id) : append.call(null,element,target,id));
}

var G__614 = sprite;
var G__615 = (function (sprite__$1){
return lemon.lime.css.draw(lemon.lime.impl.current_state(sprite__$1),element);
});
return (self__.transition_render.cljs$core$IFn$_invoke$arity$2 ? self__.transition_render.cljs$core$IFn$_invoke$arity$2(G__614,G__615) : self__.transition_render.call(null,G__614,G__615));
}));

(lemon.lime.css.CssRenderer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$transition_DASH_load,cljs.core.cst$sym$transition_DASH_render], null);
}));

(lemon.lime.css.CssRenderer.cljs$lang$type = true);

(lemon.lime.css.CssRenderer.cljs$lang$ctorStr = "lemon.lime.css/CssRenderer");

(lemon.lime.css.CssRenderer.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"lemon.lime.css/CssRenderer");
}));

/**
 * Positional factory function for lemon.lime.css/CssRenderer.
 */
lemon.lime.css.__GT_CssRenderer = (function lemon$lime$css$__GT_CssRenderer(transition_load,transition_render){
return (new lemon.lime.css.CssRenderer(transition_load,transition_render));
});

/**
 * Create a css renderer
 */
lemon.lime.css.create_renderer = (function lemon$lime$css$create_renderer(transition_load,transition_render){
return (new lemon.lime.css.CssRenderer(transition_load,transition_render));
});
/**
 * Sprites rendered by a css renderer contain a reference to their dom element.
 * This function returns that element when available
 */
lemon.lime.css.element = (function lemon$lime$css$element(sprite){
var G__616 = sprite;
var G__616__$1 = (((G__616 == null))?null:lemon.lime.impl.current_state(G__616));
if((G__616__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__616__$1,cljs.core.cst$kw$lemon$lime$css_SLASH_element);
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$lemon$lime$css_SLASH_element,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$lemon$lime$css_SLASH_element)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprite], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$sprite,cljs.core.cst$kw$lemon$lime$spec_SLASH_sprite),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$lemon$lime$css_SLASH_element),cljs.spec.alpha.nilable_impl(cljs.core.cst$kw$lemon$lime$css_SLASH_element,cljs.core.cst$kw$lemon$lime$css_SLASH_element,null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$lemon$lime$css_SLASH_element),null,null,null));
