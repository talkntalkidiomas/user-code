/**
 * The wix-animations-frontend module contains functionality for working with
 *  animations.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.html#)
 */
declare module 'wix-animations-frontend' {
    /**
     * Creates a new animation timeline.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.html#timeline)
     */
    function timeline(timelineOptions?: TimeLineOptions): TimeLine;
    /**
     * An object containing options for creating a timeline.
     */
    type TimeLineOptions = {
        /**
         * Number of times the timeline repeats after it
         *  finishes playing all the animations in the timeline once.
         *
         *  For example, if `repeat` is `2`, the timeline plays a total of 3 times,
         *  the initial play plus 2 repetitions.
         *
         *  To repeat infinitely, pass a `repeat` value of `-1`.
         *
         *  Defaults to `0`, meaning the timeline plays only once.
         */
        repeat?: number;
        /**
         * Number of milliseconds to wait between
         *  repetitions.
         *
         *  For example, if `repeat` is `2` and `repeatDelay` is `1000`, the timeline plays
         *  the initial play, then waits for 1 second before it plays again, and then waits
         *  1 second again before the final play.
         *
         *  Defaults to `0`, meaning the each repetition plays immediately after the one
         *  that preceded it.
         */
        repeatDelay?: number;
        /**
         * Whether to reverse the animation play for each successive
         *  repetition.
         *
         *  For example, if `repeat` is `2` and the timeline contains the animations **A**,
         *  **B**, and **C** to be played one after the other, the animations will play in
         *  the following order:
         *
         *  + If `yoyo` is `false`:
         *
         *    **A** -> **B** -> **C** -> **A** -> **B** -> **C** -> **A** -> **B** -> **C**
         *  + If `yoyo` is `true`:
         *
         *    **A** -> **B** -> **C** -> **C** -> **B** -> **A** -> **A** -> **B** -> **C**
         *
         *
         *  Defaults to `false`.
         */
        yoyo?: boolean;
    };
    /**
     * An animation timeline.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.TimeLine.html#)
     */
    interface TimeLine {
        /**
         * Adds an animation to a timeline.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.TimeLine.html#add)
         */
        add(target: $w.Element | $w.Element[], animation: TimeLine.AnimationAttributes | TimeLine.AnimationAttributes[], offset?: number | string): TimeLine;
        /**
         * Sets an event handler that runs when the timeline completes playing.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.TimeLine.html#onComplete)
         */
        onComplete(handler: Function): TimeLine;
        /**
         * Sets an event handler that runs when a the timeline repeats.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.TimeLine.html#onRepeat)
         */
        onRepeat(handler: Function): TimeLine;
        /**
         * Sets an event handler that runs when the timeline completes playing
         *  in the reverse direction.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.TimeLine.html#onReverseComplete)
         */
        onReverseComplete(handler: Function): TimeLine;
        /**
         * Sets an event handler that runs when the timeline starts playing.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.TimeLine.html#onStart)
         */
        onStart(handler: Function): TimeLine;
        /**
         * Pauses a timeline.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.TimeLine.html#pause)
         */
        pause(): TimeLine;
        /**
         * Plays a timeline forwards.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.TimeLine.html#play)
         */
        play(): TimeLine;
        /**
         * Replays a timeline.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.TimeLine.html#replay)
         */
        replay(): TimeLine;
        /**
         * Plays a timeline in reverse.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.TimeLine.html#reverse)
         */
        reverse(): TimeLine;
    }
    /**
     * An animation timeline.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-animations-frontend.TimeLine.html#)
     */
    namespace TimeLine {
        /**
         * An object representing the attributes of an animation in an timeline.
         */
        type AnimationAttributes = {
            /**
             * Animation duration in milliseconds.
             */
            duration: number;
            /**
             * Number of milliseconds to delay before beginning the animation.
             */
            delay?: number;
            /**
             * Target opacity of the animated element or elements, from 0.0 to 1.0.
             */
            opacity?: number;
            /**
             * The target degree to rotate to, where a complete rotation
             *  is 360 degrees.
             *
             *  Note that the starting orientation of each element is determined by the rotation set in the
             *  Editor. If you did not rotate the element in the Editor, it begins at 0 degrees.
             *
             *  The direction of the rotation is determined by the current orientation of the animated
             *  element or elements, the target degree specified by the `rotate` attribute, and, optionally,
             *  the specified `rotateDirection` attribute.
             *
             *  + If the target degree is greater than the current rotation degree, the animation
             *    rotates clockwise.
             *
             *    For example, if an element starts at 0 degrees and `rotate` is `540`, it rotates clockwise
             *    one and a half rotations. Similarly, if an element starts at -540 degrees and `rotate` is `0`,
             *    it also rotates clockwise one and a half rotations.
             *  + If the target degree is less than the current rotation degree, the animation
             *    rotates counterclockwise.
             *
             *    For example, if an element starts at 0 degrees and `rotate` is `-540`, it rotates counterclockwise
             *    one and a half rotations. Similarly, if an element starts a 540 degrees and `rotate` is `0`,
             *    it also rotates counterclockwise one and a half rotations.
             *  + If a `rotateDirection` value is specified, that direction overrides the rules listed
             *    above.
             *
             *
             *  The `rotate` value is specified using one of the following formats:
             *
             *  + A number to specify the target degree to rotate to.
             *  + A `"+=X"` expression to specify a target degree is `X` number of degrees greater
             *    than the current orientation.
             *
             *    For example, if the current orientation is 540 degrees and `rotate` is `"+=90"`,
             *    the target degree is 630 and the rotation will be a quarter turn clockwise,
             *    unless the direction is overridden by specifying a `rotateDirection` value.
             *  + A `"-=X"` expression to specify a target degree is `X` number of degrees less
             *    than the current orientation.
             *
             *    For example, if the current orientation is 540 degrees and `rotate` is `"-=90"`,
             *    the target degree is 450 and the rotation will be a quarter turn counterclockwise,
             *    unless the direction is overridden by specifying a `rotateDirection` value.
             */
            rotate?: number | string;
            /**
             * Direction in which to rotate. Overrides the
             *  default rotation direction as explained in the `rotate` property.
             *
             *  Either `"cw"` to rotate clockwise or `"ccw"` to rotate counterclockwise.
             */
            rotateDirection?: string;
            /**
             * Target scale of the animated element or elements, where
             *  `1` is the original size.
             *
             *  For example, if `scale` is `.5`, the animated element or elements will shrink to
             *  half their original sizes and if `scale` is `2`, the animated element or elements
             *  will grow to double their original sizes.
             */
            scale?: number;
            /**
             * Target horizontal scale of the animated element or elements.
             *
             *  If a `scale` value is set, also setting a `scaleX` value overrides the horizontal
             *  scaling set use `scale`.
             */
            scaleX?: number;
            /**
             * Target vertical scale of the animated element or elements.
             *
             *  If a `scale` value is set, also setting a `scaleY` value overrides the vertical
             *  scaling set use `scale`.
             */
            scaleY?: number;
            /**
             * Horizontal pixel target to move the element or elements
             *  to horizontally.
             *
             *  One of the following formats:
             *
             *  + A positive number to specify a target pixel to the right, relative to the
             *    original position.
             *  + A negative number to specify a target pixel to the left, relative to the
             *    original position.
             *  + A `"+="` expression to specify a target pixel to the right, relative to the
             *    last animated position. For example, `"+=100"` moves 100 pixels to the right
             *    of wherever the element or elements are positioned when this specific animation
             *    begins.
             *  + A `"-="` expression to specify a target pixel to the left, relative to the
             *    last animated position. For example, `"-=100"` moves 100 pixels to the left
             *    of wherever the element or elements are positioned when this specific animation
             *    begins.
             */
            x?: number | string;
            /**
             * Vertical pixel target to move the element or elements
             *  to vertically.
             *
             *  One of the following formats:
             *
             *  + A positive number to specify a target pixel down, relative to the
             *    original position.
             *  + A negative number to specify a target pixel up, relative to the
             *    original position.
             *  + A `"+="` expression to specify a target pixel down, relative to the
             *    last animated position. For example, `"+=100"` moves 100 pixels down
             *    from wherever the element or elements are positioned when this specific animation
             *    begins.
             *  + A `"-="` expression to specify a target pixel up, relative to the
             *    last animated position.For example, `"-=100"` moves 100 pixels up
             *    from wherever the element or elements are positioned when this specific animation
             *    begins.
             */
            y?: number | string;
            /**
             * The animation motion acceleration or deceleration. Specifies
             * the rate of change of the animation attributes over time.
             *
             * One of:
             *
             *
             * | Ease In | Ease Out | Ease In-Out |
             * |---|---|---|
             * | `"easeInSine"` ![Ease In Sine](images/easeInSine.png "Ease In Sine") | `"easeOutSine"` ![Ease Out Sine](images/easeOutSine.png "Ease Out Sine") | `"easeInOutSine"` ![Ease In Sine](images/easeInOutSine.png "Ease In-Out Sine") |
             * | `"easeInQuad"` ![Ease In Quad](images/easeInQuad.png "Ease In Quad") | `"easeOutQuad"` ![Ease Out Quad](images/easeOutQuad.png "Ease Out Quad") | `"easeInOutQuad"` ![Ease In-Out Quad](images/easeInOutQuad.png "Ease In-Out Quad") |
             * | `"easeInCubic"` ![Ease In Cubic](images/easeInCubic.png "Ease In Cubic") | `"easeOutCubic"` ![Ease Out Cubic](images/easeOutCubic.png "Ease Out Cubic") | `"easeInOutCubic"` ![Ease In-Out Cubic](images/easeInOutCubic.png "Ease In-Out Cubic") |
             * | `"easeInQuart"` ![Ease In Quart](images/easeInQuart.png "Ease In Quart") | `"easeOutQuart"` ![Ease Out Quart](images/easeOutQuart.png "Ease Out Quart") | `"easeInOutQuart"` ![Ease In-Out Quart](images/easeInOutQuart.png "Ease In-Out Quart") |
             * | `"easeInQuint"` ![Ease In Quint](images/easeInQuint.png "Ease In Quint") | `"easeOutQuint"` ![Ease Out Quint](images/easeOutQuint.png "Ease Out Quint") | `"easeInOutQuint"` ![Ease In-Out Quint](images/easeInOutQuint.png "Ease In-Out Quint") |
             * | `"easeInExpo"` ![Ease In Expo](images/easeInExpo.png "Ease In Expo") | `"easeOutExpo"` ![Ease Out Expo](images/easeOutExpo.png "Ease Out Expo") | `"easeInOutExpo"` ![Ease In-Out Expo](images/easeInOutExpo.png "Ease In-Out Expo") |
             * | `"easeInCirc"` ![Ease In Circ](images/easeInCirc.png "Ease In Circ") | `"easeOutCirc"` ![Ease Out Circ](images/easeOutCirc.png "Ease Out Circ") | `"easeInOutCirc"` ![Ease In-Out Circ](images/easeInOutCirc.png "Ease In-Out Circ") |
             * | `"easeInBack"` ![Ease In Back](images/easeInBack.png "Ease In Back") | `"easeOutBack"` ![Ease Out Back](images/easeOutBack.png "Ease Out Back") | `"easeInOutBack"` ![Ease In-Out Back](images/easeInOutBack.png "Ease In-Out Back") |
             * | `"easeInElastic"` ![Ease In Elastic](images/easeInElastic.png "Ease In Elastic") | `"easeOutElastic"` ![Ease Out Elastic](images/easeOutElastic.png "Ease Out Elastic") | `"easeInOutElastic"` ![Ease In-Out Elastic](images/easeInOutElastic.png "Ease In-Out Elastic") |
             * | `"easeInBounce"` ![Ease In Bounce](images/easeInBounce.png "Ease In Bounce") | `"easeOutBounce"` ![Ease Out Bounce](images/easeOutBounce.png "Ease Out Bounce") | `"easeInOutBounce"` ![Ease In-Out Bounce](images/easeInOutBounce.png "Ease In-Out Bounce") |
             * | `"easeLinear"` ![Ease Linear](images/easeLinear.png "Ease Linear") | | |
             *
             *
             * Defaults to `"easeInSine"`.
             */
            easing?: string;
        };
    }
}
