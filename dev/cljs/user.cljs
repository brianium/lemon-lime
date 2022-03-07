(ns cljs.user
  "lemon.lime provides a framework for loading and iterating over sprite frames in
   a stateful way. A lemon.lime sprite is a tiny state machine that is transitioned via
   lemon.lime functions. An end user can animate lemon.lime sprites any way they see fit.
   
   The examples within this namespace demonstrate one possible way to accomplish this using core.async."
  (:require [cljs.pprint]
            [cljs.core.async :refer [chan go go-loop <! timeout put! alt!]]
            [cljs.core.async.impl.protocols :refer [WritePort ReadPort]]
            [cljs.spec.alpha :as s]
            [lemon.lime :as ll]
            [lemon.lime.css :as css]
            [lemon.lime.spec :as ll.spec])
  (:refer-clojure :exclude [loop]))

;;; Sweet user.cljs animation api specs for great good

(s/def ::from ::ll.spec/frame)

(s/def ::to ::ll.spec/frame)

(s/def ::duration nat-int?)

(s/def ::done #(satisfies? WritePort %))

(s/def ::animation (s/keys :req-un [::from ::to] :opt-un [::duration ::done]))

(s/def ::pred (s/fspec
               :args (s/cat :sprite ::ll.spec/sprite :frame ::ll.spec/frame)
               :ret  boolean?))

(s/def ::process #(satisfies? ReadPort %))

;;; Some simple core.async looping mechanisms for transitioning a sprite

(defn loop-until
  "An animation primitive. Given an animation map, loop until the given pred is true."
  [sprite {:keys [from to duration done] :or {duration 80 done (chan)}} pred]
  (go-loop [t          (timeout duration)
            frames     (cycle (ll/reel from to (ll/start sprite)))
            last-frame nil]
    (let [frame (first frames)]
      (if-not (alt! done false :default :continue)
        (ll/stop sprite)
        (do
          (ll/move frame sprite)
          (when-not (pred sprite frame last-frame)
            (<! t)
            (recur (timeout duration) (next frames) frame)))))))

(s/fdef loop-until
  :args (s/cat :sprite ::ll.spec/sprite :animation ::animation :pred ::pred)
  :ret  ::process)

(defn loop
  "Loop forever. A done channel should be given here if you want to be able to kill it"
  [sprite & {:as animation}]
  (loop-until sprite animation (constantly false)))

(s/fdef loop
  :args (s/cat :sprite ::ll.spec/sprite :animation ::animation)
  :ret  ::process)

(defn reset
  "Reset the sprite to a frame"
  ([sprite from]
   (ll/move from sprite))
  ([sprite]
   (reset sprite [0 0])))

(s/fdef reset
  :args (s/cat :sprite ::ll.spec/sprite :from (s/? ::ll.spec/frame))
  :ret  ::ll.spec/sprite)

(defn play
  "Animate through a range of frames and then stop"
  [sprite & {:keys [to] :as animation}]
  (loop-until sprite animation (fn [_ frame last-frame]
                                 (and (some? last-frame) (= frame to)))))

(s/fdef play
  :args (s/cat :sprite ::ll.spec/sprite :animation ::animation)
  :ret  ::process)

(defn ping-pong
  [sprite & {:keys [from to duration done] :or {duration 80 done (chan)}}]
  (go-loop [t (timeout duration)
            ping (ll/reel from to (ll/start sprite))
            pong []]
    (if-not (alt! done false :default :continue)
      (ll/stop sprite)
      (let [frame (first ping)]
        (ll/move frame sprite)
        (<! t)
        (if-let [remaining (next ping)]
          (recur (timeout duration)
                 remaining
                 (into [frame] pong))
          (recur (timeout duration)
                 (into [frame] pong)
                 []))))))

(s/fdef ping-pong
  :args (s/cat :sprite ::ll.spec/sprite :animation ::animation)
  :ret  ::process)

;;; Let's test this jam out on some sprites

(def shepherd (ll/sprite
               {:uri          "shepherd-swing.png"
                :height       52
                :width        47
                ::css/renderer {:id "shepherd"}}))

(def pedestal (ll/sprite
               {:uri          "pedestal.png"
                :height       40
                :width        21
                ::css/renderer {:id "pedestal"}}))

(defn swing
  "Swing mighty shepherd! The on-contact function will be called
   with 0 arugmnets when the shepherd reaches the 6th frame, the frame
   where his crook \"makes contact\""
  [shepherd on-contact]
  (-> shepherd
      (ll/on-change ::contact (fn [_ _ {:keys [frame]}]
                                (when (= frame [5 0])
                                  (on-contact))))
      (play :from [0 0] :to [0 0])))

(defn activate
  "Bring forth the power of the pedestal! Accepts a done channel used to control
   when the pedestal stops"
  [pedestal done]
  (go
    (<! (play pedestal :from [0 0] :to [13 0]))
    (ping-pong pedestal :from [14 0] :to [18 0] :done done)))

(defn play-scene
  "Let our shepherd activate the powers of the pedestal"
  [shepherd pedestal]
  (let [done (chan)]
    (swing shepherd #(activate pedestal done))
    done))

#_(def d (play-scene shepherd pedestal))

#_(put! d :stop)

#_(doseq [sprite [shepherd pedestal]]
    (reset sprite))
