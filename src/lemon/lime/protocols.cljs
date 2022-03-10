(ns lemon.lime.protocols)

(defprotocol Renderer
  "The Renderer protocol deals with loading and rendering sprites. The render function
   is meant to draw meaningful changes to the sprite on some display. 
   
   The meaning of \"load\" may vary from renderer to renderer. However,
   loading should be responsible for setting the initial state of the sprite, especially
   where dimensions and the finite frame set are concerned. It is expected
   that the load function sets state for the sprites :sprite-sheet and :frames keys while transitioning
   to a :lemon.lime/loaded state."
  (-load [self sprite] "Load the sprite and put it into a :lemon.lime/loaded state. Sets :sprite-sheet and :frames keys")
  (-render [self sprite options] "Draw state changes to the sprite"))
