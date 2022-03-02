(ns lemon.lime.protocols)

(defprotocol Renderer
  (-load [self sprite])
  (-render [self sprite options]))
