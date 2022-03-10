(ns lemon.lime
  (:require [cljs.spec.alpha :as s]
            [lemon.lime.css :as css]
            [lemon.lime.impl :as impl]
            [lemon.lime.spec :as ll.spec])
  (:refer-clojure :exclude [range]))

(def
  ^{:doc "The valid states and transitions for a sprite. Top level keys represent
          valid states. The map associated with each top level key is a map of events to
          new states."}
  sprite-states
  {nil         {::load ::loaded}
   ::loaded    {::render ::ready}
   ::ready     {::animate ::animating
                ::render  ::ready}
   ::animating {::done   ::ready
                ::render ::animating}})

(defn current-state
  "Returns the current state of the given sprite"
  [sprite]
  (impl/current-state sprite))

(s/fdef current-state
  :args (s/cat :sprite ::ll.spec/sprite)
  :ret  ::ll.spec/state)

(defn add-effect
  "Register a function to be called when the sprite's state changes"
  ([sprite key fn-3]
   (impl/add-effect sprite key fn-3))
  ([sprite key from to fn-3]
   (impl/add-effect sprite key from to fn-3)))

(s/fdef add-effect
  :args (s/cat :sprite ::ll.spec/sprite :key keyword? :fn-3 ::ll.spec/effect-handler)
  :ret  ::ll.spec/sprite)

(defn on-change
  "Add an effect handler to be called when the sprite's old and new states are no longer equal in
   value. When called with 2 arguments, a key will be provided. This will ensure that only one change
   handler is added. If for some reason multiple change handlers are desired, be sure to provide distinct
   keys for each handler"
  ([sprite key fn-3]
   (add-effect sprite key (fn [sprite old new]
                            (when (not= old new)
                              (fn-3 sprite old new)))))
  ([sprite fn-3]
   (on-change sprite ::changed fn-3)))

(s/fdef on-change
  :args (s/alt :all    (s/cat :sprite ::ll.spec/sprite :key keyword? :fn-3 ::ll.spec/effect-handler)
               :binary (s/cat :sprite ::ll.spec/sprite :fn-3 ::ll.spec/effect-handler))
  :ret  ::ll.spec/sprite)

(defn transition
  "Transition the sprite to a new state. See [[lemon.lime/sprite-states]] for allowed states
   and their events"
  ([sprite event payload]
   (impl/transition sprite event payload))
  ([sprite event]
   (impl/transition sprite event)))

(s/fdef transition
  :args (s/alt :all    (s/cat :sprite ::ll.spec/sprite :event qualified-keyword? :payload ::ll.spec/event-payload)
               :binary (s/cat :sprite ::ll.spec/sprite :event qualified-keyword?))
  :ret ::ll.spec/sprite)

(defn create-frames
  "Given the dimensions of the sprite and it's sprite sheet, calcuate the full range of frames
   available to the sprite. This function can be used to get a collection of frames, but is best
   used by renderers during the load phase. Frames should be created and then stored in state, as they
   should not change. See [[lemon.lime.css/create-frames]]"
  [sprite-sheet dimensions]
  (impl/create-frames sprite-sheet dimensions))

(s/fdef create-frames
  :args (s/cat :sprite-sheet ::ll.spec/sprite-sheet :dimensions ::ll.spec/dimensions)
  :ret  ::ll.spec/frames)

(defn frames
  "Get an ordered collection of frames for the sprite"
  [sprite]
  (impl/frames sprite))

(s/fdef frames
  :args (s/cat :sprite ::ll.spec/sprite)
  :ret  ::ll.spec/frames)

(defn index-of
  "Get the index of a frame within a sprite's frame collection. Returns -1 if the
   frame is not found"
  [frame sprite]
  (impl/index-of frame sprite))

(s/fdef index-of
  :args (s/cat :frame ::ll.spec/frame :sprite ::ll.spec/sprite)
  :ret  int?)

(defn reel
  "Returns a subset of the sprite's frames in a way that is useful for animation. Consider
   a sprite with 7 frames:
   
   ```clojure
   (reel [0 0] [6 0] sprite) => [[0 0] [1 0] [2 0] [3 0] [4 0] [5 0] [6 0]]
   ```
   
   Omitting the to value will assume the last frame:
   
   ```clojure
   (reel [0 0] sprite) => [[0 0] [1 0] [2 0] [3 0] [4 0] [5 0] [6 0]]
   ```
   
   It is also possible to create a reel from start to start:
   
   ```clojure
   (reel [0 0] [0 0] sprite) => [[0 0] [1 0] [2 0] [3 0] [4 0] [5 0] [6 0] [0 0]]
   ```
   
   Reels can be created that range from later reels to earlier reels:
   
   ```clojure
   (reel [1 0] [0 0] sprite) => [[1 0] [2 0] [3 0] [4 0] [5 0] [6 0] [0 0]]
   ```"
  ([from to sprite]
   (impl/reel from to sprite))
  ([from sprite]
   (impl/reel from sprite)))

(s/fdef reel
  :args (s/cat :from ::ll.spec/frame :to ::ll.spec/frame :sprite ::ll.spec/sprite)
  :ret  ::ll.spec/frames)

(defn move
  "Update the sprite's current frame. This state change should be rendered by
   the sprite's underlying renderer"
  [sprite frame]
  (transition sprite ::render (fn [sprite]
                                (-> sprite
                                    current-state
                                    (assoc :frame frame)))))

(s/fdef move
  :args (s/cat :sprite ::ll.spec/sprite :frame ::ll.spec/frame)
  :ret  ::ll.spec/sprite)

(defn animate
  "Moves the sprite to an animating state. This is just a convenience function for transitioning
   to an animating state. It is not required for any purpose other than marking the sprite's state
   as ::animating"
  ([sprite set-state]
   (transition sprite ::animate set-state))
  ([sprite]
   (animate sprite current-state)))

(s/fdef animate
  :args (s/alt :unary (s/cat :sprite ::ll.spec/sprite)
               :binary (s/cat :sprite ::ll.spec/sprite :set-state ::ll.spec/payload-fn))
  :ret  ::ll.spec/sprite)

(defn done
  "Moves the sprite out of an animating state. This is just a convenience function for transitioning
   back to a ready state. It is not required for any purpose other than moving the sprite's state
   from ::animating to ::ready"
  ([sprite set-state]
   (transition sprite ::done set-state))
  ([sprite]
   (done sprite current-state)))

(s/fdef done
  :args (s/alt :unary (s/cat :sprite ::ll.spec/sprite)
               :binary (s/cat :sprite ::ll.spec/sprite :set-state ::ll.spec/payload-fn))
  :ret  ::ll.spec/sprite)

(defn create-css-renderer
  "Create a sprite renderer backed by CSS. This is merely a default renderer
   implementation shipped with lemon.lime. Feel free to implement [[lemon.lime.protocols/Renderer]] protocol
   if different behavior is desired."
  []
  (let [transition-load   #(transition %1 ::load %2)
        transition-render #(transition %1 ::render %2)]
    (css/create-renderer transition-load transition-render)))

(s/fdef create-css-renderer
  :args (s/cat)
  :ret  ::ll.spec/renderer)

(defn sprite
  "Create a sprite. The rendered outcome of doing so may vary from renderer to renderer.
   See [[lemon.lime.spec/config]] for the structure of common configuration. 
   Renderers should support namespaced keys for their own configuration.
   For instance, the default css renderer accepts config identifying a dom id to replace
   and an optional append function for taking control of dom insertion on your own:
   
   ```clojure
   {:uri          \"shepherd-swing.png\"
    :height        52
    :width         47
    ::css/renderer {:id \"shepherd\"
                    :append appendFn}
   ```"
  ([config renderer]
   (impl/sprite config renderer on-change sprite-states))
  ([config]
   (sprite config (create-css-renderer))))

(s/fdef sprite
  :args (s/alt :unary (s/cat :config ::ll.spec/config)
               :binary (s/cat :config ::ll.spec/config :renderer ::ll.spec/renderer))
  :ret  ::ll.spec/sprite)
