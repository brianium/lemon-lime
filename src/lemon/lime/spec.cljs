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

(s/def ::frames (s/coll-of ::point))

(s/def ::uri string?)

(s/def ::sprite-sheet ::dimensions)

(s/def ::renderer impl/renderer?)

(s/def ::state (s/keys :req-un [::uri ::frame ::width ::height ::sprite-sheet]))

(s/def ::state-machine #(satisfies? % StateMachine))

(s/def ::sprite (s/tuple ::state-machine ::renderer))

(s/def ::effect-handler
  (s/fspec :args (s/cat :sprite ::sprite :old ::state :new ::state)
           :ret   any?))

(s/def ::payload-fn
  (s/fspec :args (s/cat :sprite ::sprite)
           :ret  ::state))

(s/def ::event-payload (s/or :map map? :fn ::payload-fn))

(s/def ::config (s/keys :req-un [::uri ::height ::width]))
