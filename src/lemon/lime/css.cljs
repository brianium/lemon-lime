(ns lemon.lime.css
  "This provides a default renderer implementation based on CSS background positions. Most
   renderers should leverage lemon.lime instead of lemon.lime.impl. This renderer leverages impl
   so it can be provided as a default renderer when creating a sprite via lemon.lime. It is a design
   goal of this library to support state transition keys exclusively via the lemon.lime namespace, hence
   the CssRenderer type accepting transition-x style functions at creation time.
   
   The css renderer supports configuration via a lemon.lime.css/renderer key. This configuration map
   accepts an :id field indicating a dom id to be replaced. An :append field may be provided to control
   how the sprite is added to the dom. The :append key must be a function of 3 arguments. It will receive
   the sprite element, a target identified by :id if available, and the given :id."
  (:require [clojure.string :as string]
            [cljs.spec.alpha :as s]
            [goog.dom :as gdom]
            [goog.style :as gstyle]
            [goog.events :as gevent :refer [EventType]]
            [lemon.lime.impl :as impl]
            [lemon.lime.protocols :refer [Renderer]]
            [lemon.lime.spec :as ll.spec]))

(s/def ::id string?)

(s/def ::element #(instance? js/HTMLElement %))

(s/def ::append
  (s/fspec
   :args (s/cat :element ::element :target (s/nilable ::element) :id ::id)
   :ret any?))

(s/def ::renderer (s/keys :req-un [::id] :opt-un [::append]))

(defn ^:no-doc px
  "Convert x to a valid css pixel value. Returns a space joined string of pixel
   values if x is seqable"
  [x]
  (if-not (seqable? x)
    (str x "px")
    (->> (map px x)
         (string/join " "))))

(defn ^:no-doc pos
  "Returns a valid CSS background position from the given sprite state"
  [{:keys [width height frame]}]
  (let [[x y] (mapv unchecked-negate frame)]
    (-> []
        (conj (* x width))
        (conj (* y height))
        (px))))

(defn ^:no-doc get-background-image
  "Get the computed background-image for an element. Useful for checking if the sprite element already
   has a background-image"
  [element]
  (let [declaration      (.getComputedStyle js/window element)
        background-image (.getPropertyValue declaration "background-image")]
    (if (seq background-image)
      background-image
      nil)))

(defn ^:no-doc load-image
  "Load the sprite image by uri. Calls fn-1 with the laoded image or throws an error if the image fails
   to load"
  [uri fn-1]
  (let [image (js/Image.)]
    (gevent/listen image EventType.LOAD #(fn-1 image))
    (gevent/listen image EventType.ERROR #(throw (js/Error. (str "Could not load sprite image identified by uri " uri))))
    (set! (.-src image) uri)))

(defn ^:no-doc update-dimensions
  "Set the dimensions of the element to match the sprite's state"
  [{:keys [width height]
    :as state} element]
  (gstyle/setStyle element #js {:width              (px width)
                                :height             (px height)})
  state)

(defn ^:no-doc update-position
  "Update the css background properties of the sprite element"
  [state element]
  (gstyle/setStyle element #js {:backgroundPosition (pos state)})
  state)

(defn ^:no-doc draw
  "Update the sprite's CSS background with current state"
  [state element]
  (-> state
      (update-position element)
      (assoc ::element element)))

(defn ^:no-doc create-frames
  "The available set of frames is a function of the loaded sprite-sheet. The renderer
   implementation is responsible for setting the initial frame state. So it is written. So
   it shall be."
  [{:keys [sprite-sheet] :as state}]
  (let [frames (impl/create-frames sprite-sheet state)]
    (-> state
        (assoc :frames frames)
        (assoc :frame  (first frames)))))

(defn ^:no-doc guarantee-background
  "If the element already has the given uri as a background image, then dont update
   the background-image style. This can prevent a flicker caused by setting the background-image
   style via cljs (even when they are technically the same value)"
  [{:keys [uri] :as state} element]
  (let [current (get-background-image element)]
    (when-not (= current uri)
      (gstyle/setStyle element #js {:backgroundImage  (str "url(" uri ")")
                                    :backgroundRepeat "no-repeat"}))
    state))

(defn ^:no-doc create-state
  "Create the sprite element and draw it's initial state. Returns new
   sprite state that includes the element and sprite sheet dimensions"
  [image sprite]
  (let [element (gdom/createDom "div" "ll-sprite")]
    (-> (impl/current-state sprite)
        (guarantee-background element)
        (draw element)
        (update-dimensions element)
        (assoc-in [:sprite-sheet :height] (.-naturalHeight image))
        (assoc-in [:sprite-sheet :width] (.-naturalWidth image))
        (create-frames))))

(defn ^:no-doc replace-element
  "The default append function. Is used to replace a configured sprite
   element that already exists on the page."
  [element target _]
  (gdom/replaceNode element target))

;;; A renderer based on updating a CSS background-position property

(deftype ^:no-doc CssRenderer [transition-load transition-render]
  Renderer
  (-load
    [_ sprite]
    (let [{:keys [uri]} (impl/current-state sprite)]
      (load-image uri #(transition-load sprite (partial create-state %)))))

  (-render
    [_ sprite options]
    (let [{{:keys [id append]
            :or   {append replace-element}} ::renderer} options
          state     (impl/current-state sprite)
          target    (gdom/getElement id)
          appended? (some? (gdom/getParentElement target))
          element   (if appended? target (::element state))]

      (when-not appended?
        (append element target id))

      (transition-render sprite (fn [sprite]
                                  (-> (impl/current-state sprite)
                                      (draw element)))))))

(defn create-renderer
  "Create a css renderer"
  [transition-load transition-render]
  (CssRenderer. transition-load transition-render))

(defn element
  "Sprites rendered by a css renderer contain a reference to their dom element.
   This function returns that element when available"
  [sprite]
  (some-> sprite
          (impl/current-state)
          (get ::element)))

(s/fdef element
  :args (s/cat :sprite ::ll.spec/sprite)
  :ret  (s/nilable ::element))
