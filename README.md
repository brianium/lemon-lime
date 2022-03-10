<p align="center">
  <img src="shepherd-swing.png">
  <br />
  <br />
  <img src="logo-text.png" alt="Blah">
</p>

Lemon Lime makes for delicious sprite(s) in ClojureScript.

## Table of contents

- [Usage](#usage)
  - [Config](#config)
  - [Renderers](#renderers)
- [Animation](#animation)
- [Frames](#frames)
- [Development](#development)

### Usage

Lemon Lime supports creating sprites backed by tiny state machines. Sprites are backed by renderers that respond
to changes in state.

```clojure
(require '[lemon.lime :as ll])
(require '[lemon.lime.css :as css])

(def shepherd
 (ll/sprite {:uri           "shepherd-swing.png"
             :height        52
             :width         47
             ::css/renderer {:id "shepherd"}}))

(ll/frames shepherd) ;=> [[0 0] [1 0] [2 0] [3 0] [4 0] [5 0] [6 0] [7 0]]

(ll/reel [0 0] [0 0] shepherd) ;=> [[0 0] [1 0] [2 0] [3 0] [4 0] [5 0] [6 0] [7 0] [0 0]]

(ll/move shepherd [1 0]) ;; transition the sprite to a new frame
```

#### Config

The core config for sprites is minimal.

```clojure
(def config {:uri    "shepherd-swing.png"
             :height 52
             :width  47})
```

This core config is the pixel dimensions of your sprite and a uri used to uniquely identify the sprite. This uri could be a url
to an image, or some other way of pointing to the resources necessary for loading the sprite. It uniquely identifies the sprite and is leveraged by the `load` phase of renderers.

The core config is extended by renderers in order to support rendering needs:

```clojure
(def config {:uri           "shepherd-swing.png"
             :height        52
             :width         47
             ::css/renderer {:id "shepherd"}})
```

It is recommended, but not required, that renderer keys are namespaced in the style of ::ns/renderer. A sprite config
could contain multiple renderer configs so they are ready to be used where they are needed.

#### Renderers

When a sprite is created via `lemon.lime/sprite` it is bound to a renderer. A render is any type that implements the `lemon.lime.protocols/Renderer` protocol.

Renderers handle initial load of sprite resources and setting initial state.

See [src/lemon/lime/css.cljs](src/lemon/lime/css.cljs) for the default renderer implementation
backed by css' `background-position`.

A render can be given as the second argument to the `lemon.lime/sprite` function.

```clojure
(def my-sprite (sprite config (create-css-renderer)))
```

### Animation

At it's core, Lemon Lime is a library for managing sprite state. It is used to load spritesheets and transition an individual
sprite instance through the frames thereof. To that end, no animation code is actually provided as part of the core library.

The `lemon.lime/frames` and `lemon.lime/reel` functions are intended for use within animation loops. The typical workflow
would be creating a reel via `lemon.lime/reels` and then transitioning the sprite's state, relying on the renderer to draw
the meaningful changes:

```clojure
(let [reel (ll/reel [0 0] [0 0] shepherd)
  (doseq [frame reel]
    (ll/move shepherd frame))])
```

The above `doseq` is meant to illustrate. A useful animation loop would respect frame duration and not transition
through the reel so quickly.

See [dev/cljs/user.cljs](dev/cljs/user.cljs) for a full-fledged animation example backed by
[core.async](https://github.com/clojure/core.async).

### Frames

Frames are articulated as a vector of `[x y]` coordinates within a spritesheet.

The collection of frames `[[0 0] [1 0] [3 0] [4 0]]` would reflect a row based spritesheet:

```
xxxx
```

The collection of frames `[[0 0] [1 0] [0 1] [1 1]]` would reflect a grid based spritesheet:

```
xx
xx
```

The frameset is created by considering the sprites dimensions against the spritesheet dimensions.
See `lemon.lime/create-frames` for the implementation used to generate a sprites frame set.

### Development

Lemon Lime is developed using a vanilla ClojureScript repl. This plays well with development environments like [Calva](https://calva.io/), or a plain repl.

See the [ClojureScript quick start](https://clojurescript.org/guides/quick-start) for info on running a repl. 

See [dev/cljs/user.cljs](dev/cljs/user.cljs). This is where development takes place.
