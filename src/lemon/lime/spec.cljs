(ns ^:no-doc lemon.lime.spec
  (:require [cljs.spec.alpha :as s]
            [fsm.protocols :refer [StateMachine]]
            [lemon.lime.impl :as impl]))

(s/def ::width nat-int?)

(s/def ::height nat-int?)

(s/def ::dimensions (s/keys :req-un [::width ::height]))

(s/def ::x nat-int?)

(s/def ::y nat-int?)

(s/def ::point (s/tuple ::x ::y))

(s/def ::frame ::point)

(s/def ::reel (s/coll-of ::frame))

(s/def ::table (s/map-of ::point ::frame))

(s/def ::frames (s/keys :req-un [::reel ::table]))

(s/def ::uri string?)

(s/def ::sprite-sheet (s/keys :req-un [::dimensions]))

(s/def ::renderer impl/renderer?)

(s/def ::state (s/keys :req-un [::uri ::frame ::width ::height ::sprite-sheet]))

(s/def ::state-machine #(satisfies? % StateMachine))

(s/def ::sprite (s/tuple ::state-machine ::renderer))

(s/def ::from ::frame)

(s/def ::to ::frame)
