import wixDataset from 'wix-dataset';
declare global {
    /**
     * The `$w` namespace contains everything you need in order to work
     *  with your site's components.
     * 	[Read more](https://www.wix.com/corvid/reference/$w.html#)
     */
    namespace $w {
        type dataset = wixDataset.Dataset;
        type router_dataset = wixDataset.DynamicDataset;
        type BasicEventHandler = () => void;
        /**
         * Function that runs when custom validation is checked.
         */
        type CheckboxGroupValidator = (value: string[], reject: Function) => void;
        /**
         * Function that runs when custom validation is checked.
         */
        type CheckboxValidator = (value: string, reject: Function) => void;
        /**
         * Function that runs when custom validation is checked.
         */
        type DatePickerValidator = (value: Date, reject: Function) => void;
        /**
         * Function that runs when custom validation is checked.
         */
        type DropdownValidator = (value: string, reject: Function) => void;
        type EventHandler = (event: Event) => void;
        type ForItemCallback = ($item: $w, itemData: any, index: number) => void;
        /**
         * Handles events fired when a gallery moves to a new image.
         */
        type GalleryItemChangedEventHandler = (event: GalleryItemChangedEvent) => void;
        /**
         * Handles events fired when an image in a gallery is clicked.
         */
        type GalleryItemClickedEventHandler = (event: GalleryItemClickedEvent) => void;
        /**
         * Handles events fired when the code in an HtmlComponent sends a message.
         */
        type HtmlComponentMessageEventHandler = (event: HtmlComponentMessageEvent) => void;
        type HtmlElementEventHandler = (event: HtmlComponentMessageEvent) => void;
        /**
         * Handles events fired when a user hovers over a star on the rating component.
         */
        type IconMouseInEventHandler = (event: IconMouseInEvent) => void;
        type ItemReadyEventHandler = ($item: $w, itemData: any, index: number) => void;
        type ItemRemovedEventHandler = (itemData: any) => void;
        /**
         * Handles events fired when the keyboard is pressed.
         */
        type KeyboardEventHandler = (event: KeyboardEvent) => void;
        /**
         * Handles events fired when the mouse is used on a menu item.
         */
        type MenuItemMouseEventHandler = (event: MenuItemMouseEvent) => void;
        /**
         * Handles events fired when the mouse is clicked.
         */
        type MouseEventHandler = (event: MouseEvent) => void;
        /**
         * Handles events fired when an item in a quick action bar is clicked.
         */
        type QuickActionBarItemClickedEventHandler = (event: QuickActionBarItemClickedEvent) => void;
        /**
         * Function that runs when custom validation is checked.
         */
        type RadioButtonGroupValidator = (value: string, reject: Function) => void;
        /**
         * Function that runs when all page elements have finished loading.
         */
        type ReadyHandler = () => Promise<void> | void;
        /**
         * Handles events fired when a table cell is selected.
         */
        type TableCellEventHandler = (event: TableCellEvent) => void;
        /**
         * Handles events fired when a table row is selected.
         */
        type TableRowEventHandler = (event: TableRowEvent) => void;
        /**
         * Function that runs when custom validation is checked.
         */
        type TextBoxValidator = (value: string, reject: Function) => void;
        /**
         * Function that runs when custom validation is checked.
         */
        type TextInputValidator = (value: string, reject: Function) => void;
        /**
         * Function that runs when custom validation is checked.
         */
        type UploadButtonValidator = (value: UploadButton.File[], reject: Function) => void;
        /**
         * Function that runs when custom validation is checked.
         */
        type Validator = (value: any, reject: Function) => void;
        type ViewChangeEventHandler = (event: ViewChangeEvent) => void;
        type ViewChangeOperation = (options: AppointmentField.OperationOptions) => any;
        /**
         * An [accordion element](https://support.wix.com/en/article/editor-x-adding-and-customizing-an-accordion-5177642#adding-and-managing-accordion-items)
         * is a container that holds multiple collapsible accordion item elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Accordion.html#)
         */
        interface Accordion extends Element {
        }
        /**
         * The [account nav bar](https://support.wix.com/en/article/site-members-adding-a-members-area-login-bar) is the menu in a user profile.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.AccountNavBar.html#)
         */
        interface AccountNavBar extends Element, HiddenCollapsedMixin {
        }
        /**
         * [Address input](https://support.wix.com/en/article/content-manager-adding-and-setting-up-an-address-input-element)
         * is used for entering addresses. It lets users type
         * an address, and suggests exact locations using Google Maps services.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.AddressInput.html#)
         */
        interface AddressInput extends LabelMixin, FormElement, DisabledMixin, RequiredMixin, ReadOnlyMixin, HiddenCollapsedMixin, FocusMixin, ClickableMixin {
            /**
             * Sets or gets the filter of the address input.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AddressInput.html#filter)
             */
            filter: AddressInput.AddressFilter;
            /**
             * Sets or gets the placeholder of the address input.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AddressInput.html#placeholder)
             */
            placeholder: string;
            /**
             * Sets or gets the value of the address input.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AddressInput.html#value)
             */
            value: AddressInput.Address;
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AddressInput.html#onCustomValidation)
             */
            onCustomValidation(validator: AddressInput.AddressInputValidator, override?: boolean): void;
        }
        /**
         * [Anchors](https://www.wix.com/support/html5/article/about-anchors)
         *  are invisible position markers which you can place anywhere on your site.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Anchor.html#)
         */
        interface Anchor extends Node, ViewportMixin {
            /**
             * Gets the name of an anchor.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Anchor.html#name)
             */
            readonly name: string;
        }
        /**
         * Use an `AppointmentField` to select dates, times, and timezones for scheduling appointments.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#)
         */
        interface AppointmentField extends FormElement, HiddenCollapsedMixin, DisabledMixin, FocusMixin, ClickableMixin, RequiredMixin {
            /**
             * Sets or gets a list of dates and times that a site visitor can select.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#dateTimeRanges)
             */
            dateTimeRanges: AppointmentField.dateTimeRangeInfo;
            /**
             * Sets or gets a list of days in the week that are not selectable.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#disabledDaysOfWeek)
             */
            disabledDaysOfWeek: number[];
            /**
             * Sets or gets the latest date that a site visitor can select.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#maxDate)
             */
            maxDate: Date;
            /**
             * Sets or gets the earliest date that a site visitor can select.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#minDate)
             */
            minDate: Date;
            /**
             * Sets or gets the minimum amount of time before an appointment starts that a time slot is displayed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#schedulingNotice)
             */
            schedulingNotice: number;
            /**
             * Sets  or gets the interval between the times displayed in the time picker.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#timeIncrements)
             */
            timeIncrements: number;
            /**
             * Sets or gets the title of an appointment field.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#title)
             */
            title: string;
            /**
             * Sets or gets the time format.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#useAmPmFormat)
             */
            useAmPmFormat: boolean;
            /**
             * Sets or gets the date and time value of the appointment field.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#value)
             */
            value: Date;
            /**
             * Sets or gets the timezone dropdown value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#visitorTimeZone)
             */
            visitorTimeZone: string;
            /**
             * Adds an event handler that triggers when the appointment field's year or month changes.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#onViewChange)
             *  @eventType onViewChange
             */
            onViewChange(handler: ViewChangeEventHandler, operation?: ViewChangeOperation, timeout?: number): void;
            /**
             * Resets the appointment field to its original values.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#reset)
             */
            reset(): void;
        }
        /**
         * The [audio player](https://support.wix.com/en/article/about-the-wix-audio-player) is an element for playing audio files.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#)
         */
        interface AudioPlayer extends Element, HiddenCollapsedMixin {
            /**
             * Sets or gets the name of the artist displayed in an audio player.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#artistName)
             */
            artistName: string;
            /**
             * Sets or gets the cover image displayed in an audio player.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#coverImage)
             */
            coverImage: string;
            /**
             * Gets the current play time from the beginning of the audio track, in seconds.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#currentTime)
             */
            readonly currentTime: number;
            /**
             * Gets the total play time of the audio track, in seconds.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#duration)
             */
            readonly duration: number;
            /**
             * Indicates if the volume is currently muted.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#isMuted)
             */
            readonly isMuted: boolean;
            /**
             * Indicates if an audio track is currently playing.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#isPlaying)
             */
            readonly isPlaying: boolean;
            /**
             * Sets or gets the file location of the audio file.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#src)
             */
            src: string;
            /**
             * Sets or gets the track name displayed in an audio player.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#trackName)
             */
            trackName: string;
            /**
             * Sets or gets an audio player's volume.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#volume)
             */
            volume: number;
            /**
             * Mutes audio volume.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#mute)
             */
            mute(): Promise<void>;
            /**
             * Adds an event handler that runs when playback has ended.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#onEnded)
             *  @eventType onEnded
             */
            onEnded(handler: EventHandler): AudioPlayer;
            /**
             * Adds an event handler that runs when playback is paused.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#onPause)
             *  @eventType onPause
             */
            onPause(handler: EventHandler): AudioPlayer;
            /**
             * Adds an event handler that runs when playback is started or restarted.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#onPlay)
             *  @eventType onPlay
             */
            onPlay(handler: EventHandler): AudioPlayer;
            /**
             * Adds an event handler that runs when playback progresses.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#onProgress)
             *  @eventType onProgress
             */
            onProgress(handler: EventHandler): AudioPlayer;
            /**
             * Pauses playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#pause)
             */
            pause(): Promise<void>;
            /**
             * Begins or resumes playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#play)
             */
            play(): Promise<void>;
            /**
             * Moves playback to the specified time, in seconds.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#seek)
             */
            seek(time: number): Promise<void>;
            /**
             * Stops playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#stop)
             */
            stop(): Promise<void>;
            /**
             * Toggles playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#togglePlay)
             */
            togglePlay(): Promise<void>;
            /**
             * Unmutes audio volume.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#unmute)
             */
            unmute(): Promise<void>;
        }
        /**
         * Provides functionality for [background images](https://support.wix.com/en/article/wix-editor-adding-an-image-to-your-page-background) in certain elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Background.html#)
         */
        interface Background {
            /**
             * Sets or gets an object containing information about the element's background.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Background.html#background)
             */
            background: Background.BackgroundOptions;
        }
        /**
         * Container [boxes](https://support.wix.com/en/article/container-boxes)
         *  are used to structure your site.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Box.html#)
         */
        interface Box extends Element, HiddenCollapsedMixin, ClickableMixin, ContainableMixin, StyleMixin {
            /**
             * Gets an object containing information about the box's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Box.html#style)
             */
            readonly style: Style;
        }
        /**
         * [Breadcrumbs](https://support.wix.com/en/article/wix-editor-adding-and-setting-up-breadcrumbs) are used for navigating between site pages.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Breadcrumbs.html#)
         */
        interface Breadcrumbs extends HiddenCollapsedMixin, ViewportMixin {
            /**
             * Indicates if an ellipsis is displayed in the breadcrumbs trail.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Breadcrumbs.html#isEllipsisVisible)
             */
            readonly isEllipsisVisible: boolean;
            /**
             * Sets or gets breadcrumbs items.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Breadcrumbs.html#items)
             */
            items: Breadcrumbs.Item[];
            /**
             * Sets or gets the number of items that appear in the breadcrumbs trail after an ellipsis.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Breadcrumbs.html#itemsAfterEllipsis)
             */
            itemsAfterEllipsis: number;
            /**
             * Sets or gets the number of items that appear in the breadcrumbs trail before an ellipsis.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Breadcrumbs.html#itemsBeforeEllipsis)
             */
            itemsBeforeEllipsis: number;
            /**
             * Hides an ellipsis displayed in a breadcrumbs element and displays the middle items of the breadcrumbs trail instead.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Breadcrumbs.html#hideEllipsis)
             */
            hideEllipsis(): void;
            /**
             * Displays an ellipsis in a breadcrumbs element instead of the middle items of the breadcrumbs trail.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Breadcrumbs.html#showEllipsis)
             */
            showEllipsis(): void;
        }
        /**
         * A [button](https://support.wix.com/en/article/wix-editor-about-buttons) on your site.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#)
         */
        interface Button extends Element, HiddenCollapsedMixin, DisabledMixin, LinkableMixin, ClickableMixin, StyleMixin, LabelMixin, EffectsMixin {
            /**
             * Sets or gets the icon image displayed on the button.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#icon)
             */
            icon: string;
            /**
             * Indicates if the button’s icon is collapsed or expanded.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#iconCollapsed)
             */
            readonly iconCollapsed: boolean;
            /**
             * Sets or gets a button's label.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#label)
             */
            label: string;
            /**
             * Sets or gets the button's link.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#link)
             */
            link: string;
            /**
             * Gets an object containing information about the button's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#style)
             */
            readonly style: Style;
            /**
             * Collapses the button’s icon and sets its `iconCollapsed` property to `true`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#collapseIcon)
             */
            collapseIcon(): Promise<void>;
            /**
             * Expands the button’s icon and sets its `iconCollapsed` property to `false`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#expandIcon)
             */
            expandIcon(): Promise<void>;
            /**
             * Adds an event handler that runs when the pointer is moved
             *  onto the element.
             *
             *  You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#onMouseIn)
             */
            onMouseIn(handler: MouseEventHandler): Button;
            /**
             * Adds an event handler that runs when the pointer is moved
             *  off of the element.
             *
             *  You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Button.html#onMouseOut)
             */
            onMouseOut(handler: MouseEventHandler): Button;
        }
        /**
         * The [reCAPTCHA](https://support.wix.com/en/article/velo-about-recaptcha)
         * element allows you to present a challenge-response test to site visitors to determine whether they are human or a bot.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#)
         */
        interface Captcha extends Element, FocusMixin, HiddenCollapsedMixin {
            /**
             * Gets the reCAPTCHA token.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#token)
             */
            readonly token: string;
            /**
             * Adds an event handler that runs when a connection error occurs while completing the CAPTCHA challenge.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#onError)
             *  @eventType onError
             */
            onError(handler: Captcha.ErrorHandler): void;
            /**
             * Adds an event handler that runs when the CAPTCHA token expires.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#onTimeout)
             *  @eventType onTimeout
             */
            onTimeout(handler: Captcha.TimeoutHandler): void;
            /**
             * Adds an event handler that runs when the CAPTCHA challenge is successfully completed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#onVerified)
             *  @eventType onVerified
             */
            onVerified(handler: Captcha.VerifiedHandler): void;
            /**
             * Resets the reCAPTCHA element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#reset)
             */
            reset(): Promise<void>;
        }
        /**
         * An icon that leads users to the shopping cart.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.CartIcon.html#)
         */
        interface CartIcon extends Element, HiddenCollapsedMixin {
            /**
             * **Deprecated.**
             * This function will continue to work, but a newer version is available at
             * [wix-stores.cart.addProducts()](https://www.wix.com/velo/reference/wix-stores/cart/addproducts).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CartIcon.html#addProductsToCart)
             */
            addProductsToCart(products: CartIcon.AddToCartItem[]): Promise<void>;
            /**
             * **Deprecated.**
             * This function will continue to work, but a newer version is available at
             * [wix-stores.cart.addProducts()](https://www.wix.com/velo/reference/wix-stores/cart/addproducts).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CartIcon.html#addToCart)
             */
            addToCart(productID: string, quantity?: number, options?: CartIcon.AddToCartOptions): Promise<void>;
        }
        /**
         * A [chatbox](https://support.wix.com/en/article/editor-x-adding-and-customizing-chat) is an element for sending and receiving chat messages.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#)
         */
        interface Chatbox extends Element, HiddenMixin {
            /**
             * Indicates if an element appears on all pages or only on the current page.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#global)
             */
            readonly global: boolean;
            /**
             * Indicates if the chatbox is visible or hidden.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#hidden)
             */
            readonly hidden: boolean;
            /**
             * Indicates if the element is actually visible.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#isVisible)
             */
            readonly isVisible: boolean;
            /**
             * Indicates if the chatbox is maximized.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#maximized)
             */
            readonly maximized: boolean;
            /**
             * Note: This standard element property is not relevant for Chatbox.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#parent)
             */
            readonly parent: Node;
            /**
             * Expands the chatbox and focuses it on the specified chat channel.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#focusChannel)
             */
            focusChannel(channelInfo: Chatbox.ChannelInfo): Promise<void>;
            /**
             * Gets a chatbox channel.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#getChannel)
             */
            getChannel(channelInfo: Chatbox.ChannelInfo): Promise<Chatbox.Channel>;
            /**
             * Gets a list of available chat channels for a site visitor.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#getChannelList)
             */
            getChannelList(): Promise<Chatbox.Channel[]>;
            /**
             * Expands the chatbox and sets its [`maximized`](#maximized) property to `true`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#maximize)
             */
            maximize(): Promise<void>;
            /**
             * Collapses the chatbox and sets its [`maximized`](#maximized) property to `false`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#minimize)
             */
            minimize(): Promise<void>;
            /**
             * An event that fires when the chatbox is maximized.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onMaximize)
             */
            onMaximize(handler: BasicEventHandler): void;
            /**
             * An event that fires when a site visitor receives a chat message.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onMessageReceived)
             */
            onMessageReceived(message: Chatbox.Message): void;
            /**
             * An event that fires when a site visitor sends a chat message.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onMessageSent)
             */
            onMessageSent(message: Chatbox.Message): void;
            /**
             * An event that fires when the chatbox is minimized.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onMinimize)
             */
            onMinimize(handler: BasicEventHandler): void;
            /**
             * Note: This standard element event is not relevant for Chatbox.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onViewportEnter)
             *  @eventType viewportEnter
             */
            onViewportEnter(handler: EventHandler): Element;
            /**
             * Note: This standard element event is not relevant for Chatbox.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onViewportLeave)
             *  @eventType viewportLeave
             */
            onViewportLeave(handler: EventHandler): Element;
            /**
             * Note: This standard element function is not relevant for Chatbox.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#scrollTo)
             */
            scrollTo(): Promise<void>;
            /**
             * Sends a chat message from a site visitor.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#sendMessage)
             */
            sendMessage(messageInfo: Chatbox.MessageInfo): Promise<void>;
        }
        /**
         * [Checkboxes](https://support.wix.com/en/article/content-manager-adding-and-setting-up-a-checkbox) are used for a single binary choice.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Checkbox.html#)
         */
        interface Checkbox extends LabelMixin, FormElement, DisabledMixin, HiddenCollapsedMixin, FocusMixin, ClickableMixin, StyleMixin, RequiredMixin, CheckedMixin {
            /**
             * Sets or gets whether a checkbox is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Checkbox.html#checked)
             */
            checked: boolean;
            /**
             * Gets or sets if a checkbox is required to be checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Checkbox.html#required)
             */
            required: boolean;
            /**
             * Gets an object containing information about the checkbox's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Checkbox.html#style)
             */
            readonly style: Style;
            /**
             * Sets or gets a checkbox's value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Checkbox.html#value)
             */
            value: string;
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Checkbox.html#onCustomValidation)
             */
            onCustomValidation(validator: CheckboxValidator, override?: boolean): void;
        }
        /**
         * [Checkbox groups](https://support.wix.com/en/article/content-manager-adding-and-setting-up-a-checkbox) are used for selecting any number of the given
         *  options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.CheckboxGroup.html#)
         */
        interface CheckboxGroup extends LabelMixin, FormElement, HiddenCollapsedMixin, DisabledMixin, FocusMixin, ClickableMixin, StyleMixin, RequiredMixin {
            /**
             * Sets or gets the options of a checkbox group.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CheckboxGroup.html#options)
             */
            options: CheckboxGroup.Option[];
            /**
             * Sets or gets the indices of the selected options.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CheckboxGroup.html#selectedIndices)
             */
            selectedIndices: number[];
            /**
             * Gets an object containing information about the checkbox group's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CheckboxGroup.html#style)
             */
            readonly style: Style;
            /**
             * Sets or gets the value of the selected options.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CheckboxGroup.html#value)
             */
            value: string[];
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CheckboxGroup.html#onCustomValidation)
             */
            onCustomValidation(validator: CheckboxGroupValidator, override?: boolean): void;
        }
        /**
         * Provides functionality for elements that can be checked.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.CheckedMixin.html#)
         */
        interface CheckedMixin {
            /**
             * Sets or gets whether the element is checked or not.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CheckedMixin.html#checked)
             */
            checked: boolean;
        }
        /**
         * Provides functionality for elements that can be clicked.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#)
         */
        interface ClickableMixin {
            /**
             * Adds an event handler that runs when the element is clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
             *  @eventType click
             */
            onClick(handler: MouseEventHandler): Element;
            /**
             * Adds an event handler that runs when the element is double-clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
             *  @eventType dblClick
             */
            onDblClick(handler: MouseEventHandler): Element;
        }
        /**
         * Provides functionality for elements that can be collapsed.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsedMixin.html#)
         */
        interface CollapsedMixin {
            /**
             * Indicates if the element is collapsed or expanded.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsedMixin.html#collapsed)
             */
            readonly collapsed: boolean;
            /**
             * Collapses the element and sets its `collapsed` property to `true`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsedMixin.html#collapse)
             */
            collapse(): Promise<void>;
            /**
             * Expands the element and sets its `collapsed` property to `false`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsedMixin.html#expand)
             */
            expand(): Promise<void>;
        }
        /**
         * [Collapsible text](https://support.wix.com/en/article/adding-and-setting-up-ellipsis-text) is a text element for managing large amounts of text.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#)
         */
        interface CollapsibleText extends Element, HiddenCollapsedMixin, ClickableMixin {
            /**
             * Indicates whether the ellipsis functionality is turned on.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#ellipsisEnabled)
             */
            readonly ellipsisEnabled: boolean;
            /**
             * Sets or gets the maximum number of lines of introductory text in the collapsible text.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#maxLines)
             */
            maxLines: number;
            /**
             * Sets or gets the data object of the read more action for the collapsible text.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#readMoreActionData)
             */
            readMoreActionData: CollapsibleText.ExpandOnCurrentPage | CollapsibleText.LinkToContent;
            /**
             * Sets or gets the type of read more action for the collapsible text.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#readMoreActionType)
             */
            readMoreActionType: string;
            /**
             * Sets or gets the plain-text content of a collapsible text element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#text)
             */
            text: string;
            /**
             * Adds a read more button that links to the remaining text when clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#addReadMoreButton)
             */
            addReadMoreButton(buttonText?: string): void;
            /**
             * Collapses the collapsible text and displays the introductory text with an ellipsis.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#collapseText)
             */
            collapseText(): void;
            /**
             * Turns off the ellipsis functionality.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#disableEllipsis)
             */
            disableEllipsis(): void;
            /**
             * Turns on the ellipsis functionality.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#enableEllipsis)
             */
            enableEllipsis(): void;
            /**
             * Expands the collapsible text, displays the full text, and hides the ellipsis.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#expandText)
             */
            expandText(): void;
            /**
             * Removes the read more button that links to the remaining text when clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#removeReadMoreButton)
             */
            removeReadMoreButton(): void;
        }
        /**
         * A [column](https://support.wix.com/en/article/wix-editor-attaching-elements-to-strips-and-columns)
         * is a component part of a `ColumnStrip`.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Column.html#)
         */
        interface Column extends Element, HiddenCollapsedMixin, Background, ClickableMixin, ContainableMixin {
        }
        /**
         * A [column strip](https://support.wix.com/en/article/wix-editor-attaching-elements-to-strips-and-columns) is a strip of column elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ColumnStrip.html#)
         */
        interface ColumnStrip extends Element, Background, HiddenCollapsedMixin, ClickableMixin, ContainableMixin {
            /**
             * Gets an object containing information about the column strip's background, such as its image or video source.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ColumnStrip.html#background)
             */
            readonly background: Document.BackgroundOptions;
            /**
             * Gets a list of all the columns contained in the column strip.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ColumnStrip.html#columns)
             */
            readonly columns: Column[];
        }
        /**
         * Provides functionality for elements that can contain other elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ContainableMixin.html#)
         */
        interface ContainableMixin {
            /**
             * Gets an array of the elements that are contained within the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ContainableMixin.html#children)
             */
            readonly children: (Element & AnyProperties)[];
        }
        /**
         * A [container](https://support.wix.com/en/article/editor-x-using-containers) for Repeater items.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Container.html#)
         */
        interface Container extends Element, HiddenCollapsedMixin, Background, ClickableMixin, ContainableMixin, EffectsMixin {
            /**
             * Adds an event handler that runs when a keyboard key is pressed while the container or one of its child elements is focused.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Container.html#onKeyPress)
             *  @eventType keyPress
             */
            onKeyPress(eventHandler: KeyboardEventHandler): Element;
        }
        /**
         * Provides functionality for manipulating custom CSS classes.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.CustomClassList.html#)
         */
        interface CustomClassList {
            /**
             * Adds custom CSS classes to an element's class list.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CustomClassList.html#add)
             */
            add(...className: string[]): void;
            /**
             * Indicates whether the element's class list contains a specified custom CSS class.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CustomClassList.html#contains)
             */
            contains(className: string): boolean;
            /**
             * Removes custom CSS classes from an element's class list.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CustomClassList.html#remove)
             */
            remove(...className: string[]): void;
            /**
             * Replaces a custom CSS class of an element with a different custom CSS class.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CustomClassList.html#replace)
             */
            replace(currentClassName: string, newClassName: string): boolean;
            /**
             * Toggles an element's custom CSS class.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CustomClassList.html#toggle)
             */
            toggle(className: string): boolean;
            /**
             * Gets an array of strings listing an element's custom CSS classes.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CustomClassList.html#values)
             */
            values(): string[];
        }
        /**
         * [Custom element](https://dev.wix.com/docs/develop-websites/articles/wix-editor-elements/custom-elements/about-custom-elements) provides an API for rendering a custom element.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.CustomElement.html#)
         */
        interface CustomElement extends Element, HiddenCollapsedMixin {
            /**
             * Sets or gets the SEO markup to be rendered for search engine bots.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CustomElement.html#seoMarkup)
             */
            seoMarkup: string;
            /**
             * Registers a callback function in Velo for an event triggered from the custom element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CustomElement.html#on)
             */
            on(eventName: string, callBackFunction: Function): void;
            /**
             * Sets an HTML attribute on the custom element's DOM node.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.CustomElement.html#setAttribute)
             */
            setAttribute(key: string, value: string | boolean | number): void;
        }
        /**
         * A button on your [dashboard page](https://dev.wix.com/docs/build-apps/developer-tools/cli/wix-cli-for-apps/dashboard-pages).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardButton.html#)
         */
        interface DashboardButton extends ClickableMixin, DisabledMixin, HiddenCollapsedElement {
            /**
             * Note: This standard element property is not relevant for this DashboardButton.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardButton.html#customClassList)
             */
            readonly customClassList: CustomClassList;
            /**
             * Indicates whether the dashboard button is currently loading.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardButton.html#isLoaderVisible)
             */
            readonly isLoaderVisible: boolean;
            /**
             * Sets or gets the dashboard button's label.
             *
             * Max: 120 characters
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardButton.html#label)
             */
            label: string;
            /**
             * Sets or gets the dashboard button's link.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardButton.html#link)
             */
            link: string;
            /**
             * Sets or gets the dashboard button prefix.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardButton.html#prefix)
             */
            prefix: string | null;
            /**
             * Sets or gets the dashboard button suffix.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardButton.html#suffix)
             */
            suffix: string | null;
            /**
             * Sets or gets the target of the dashboard button's link.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardButton.html#target)
             */
            target: string | null;
            /**
             * Hides the button's loading indicator.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardButton.html#hideLoader)
             */
            hideLoader(): void;
            /**
             * Shows the dashboard button's loading indicator.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardButton.html#showLoader)
             */
            showLoader(): void;
        }
        /**
         * An element for displaying headings on your [dashboard page](https://dev.wix.com/docs/build-apps/developer-tools/cli/wix-cli-for-apps/dashboard-pages).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardHeading.html#)
         */
        interface DashboardHeading extends HiddenCollapsedElement {
            /**
             * Note: This standard element property is not relevant for this DashboardHeading.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardHeading.html#customClassList)
             */
            readonly customClassList: CustomClassList;
            /**
             * Sets or gets the text of a dashboard heading element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardHeading.html#text)
             */
            text: string;
        }
        /**
         * An icon button on your [dashboard page](https://dev.wix.com/docs/build-apps/developer-tools/cli/wix-cli-for-apps/dashboard-pages).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardIconButton.html#)
         */
        interface DashboardIconButton extends HiddenCollapsedElement, ClickableMixin, DisabledMixin {
            /**
             * Note: This standard element property is not relevant for this DashboardIconButton.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardIconButton.html#customClassList)
             */
            readonly customClassList: CustomClassList;
            /**
             * Sets or gets the dashboard icon button's icon.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardIconButton.html#icon)
             */
            icon: string;
            /**
             * Sets or gets the dashboard icon button's link.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardIconButton.html#link)
             */
            link: string;
            /**
             * Sets or gets the target of the dashboard icon button's link.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardIconButton.html#target)
             */
            target: string | null;
            /**
             * Sets or gets the dashboard icon button's tooltip content.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardIconButton.html#tooltip)
             */
            tooltip: string;
        }
        /**
         * An element for directing visitors to important information on your [dashboard page](https://dev.wix.com/docs/build-apps/developer-tools/cli/wix-cli-for-apps/dashboard-pages).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInfoIcon.html#)
         */
        interface DashboardInfoIcon extends HiddenCollapsedMixin, Element {
            /**
             * Note: This standard element property is not relevant for this DashboardInfoIcon.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInfoIcon.html#customClassList)
             */
            readonly customClassList: CustomClassList;
            /**
             * Sets or gets an element's tooltip.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInfoIcon.html#tooltip)
             */
            tooltip: string;
            /**
             * Sets or gets the element's tooltip link.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInfoIcon.html#tooltipLink)
             */
            tooltipLink: string;
            /**
             * Sets or gets the element's tooltip link text.
             *
             * Max: 120 characters
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInfoIcon.html#tooltipLinkText)
             */
            tooltipLinkText: string;
            /**
             * Adds an event handler that runs when the link within a tooltip is clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInfoIcon.html#onTooltipLinkClick)
             *  @eventType click
             */
            onTooltipLinkClick(handler: EventHandler): Element;
        }
        /**
         * An input element for capturing small amounts of text on your [dashboard page](https://dev.wix.com/docs/build-apps/developer-tools/cli/wix-cli-for-apps/dashboard-pages).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInput.html#)
         */
        interface DashboardInput extends HiddenCollapsedElement, ValueMixin, DisabledMixin {
            /**
             * Note: This standard element property is not relevant for this DashboardInput.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInput.html#customClassList)
             */
            readonly customClassList: CustomClassList;
            /**
             * Sets or gets the dashboard input's label.
             *
             * Max: 120 characters
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInput.html#label)
             */
            label: string;
            /**
             * Sets or gets the placeholder text content.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInput.html#placeholder)
             */
            placeholder: string;
            /**
             * Sets or gets the dashboard input prefix.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInput.html#prefix)
             */
            prefix: string;
            /**
             * Indicates if the dashboard input element is read-only.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInput.html#readOnly)
             */
            readOnly: boolean;
            /**
             * Sets or gets the dashboard input suffix.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInput.html#suffix)
             */
            suffix: string;
            /**
             * Sets or gets the dashboard input element's tooltip content.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInput.html#tooltip)
             */
            tooltip: string;
            /**
             * Sets or gets the value in the dashboard input field.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInput.html#value)
             */
            value: string;
            /**
             * Adds an event handler that runs when a key is pressed inside the dashboard input field.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInput.html#onKeyPress)
             *  @eventType keyPress
             */
            onKeyPress(eventHandler: KeyboardEventHandler): Element;
            /**
             * Adds an event handler that runs when the key is released within the dashboard input.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardInput.html#onKeyRelease)
             *  @eventType keyRelease
             */
            onKeyRelease(handler: KeyboardEventHandler): Element;
        }
        /**
         * An input element for capturing numbers on your [dashboard page](https://dev.wix.com/docs/build-apps/developer-tools/cli/wix-cli-for-apps/dashboard-pages).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardNumberInput.html#)
         */
        interface DashboardNumberInput extends HiddenCollapsedElement, ValueMixin, DisabledMixin {
            /**
             * Note: This standard element property is not relevant for this DashboardNumberInput.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardNumberInput.html#customClassList)
             */
            readonly customClassList: CustomClassList;
            /**
             * Sets or gets the dashboard number input's label.
             *
             * Max: 1200 characters
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardNumberInput.html#label)
             */
            label: string;
            /**
             * Sets or gets the maximum allowed input value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardNumberInput.html#max)
             */
            max: number;
            /**
             * Sets or gets the minimum allowed number value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardNumberInput.html#min)
             */
            min: number;
            /**
             * Sets or gets the placeholder text content.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardNumberInput.html#placeholder)
             */
            placeholder: string;
            /**
             * Indicates if the dashboard number input element is read-only.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardNumberInput.html#readOnly)
             */
            readOnly: boolean;
            /**
             * Sets or gets the dashboard number input's tooltip content.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardNumberInput.html#tooltip)
             */
            tooltip: string;
            /**
             * Sets or gets the value in the dashboard number input field.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardNumberInput.html#value)
             */
            value: number;
            /**
             * Adds an event handler that runs when a key is pressed within
             * the input field.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardNumberInput.html#onKeyPress)
             *  @eventType keyPress
             */
            onKeyPress(eventHandler: KeyboardEventHandler): Element;
            /**
             * Adds an event handler that runs when the key is released within an input.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardNumberInput.html#onKeyRelease)
             *  @eventType keyRelease
             */
            onKeyRelease(handler: KeyboardEventHandler): Element;
        }
        /**
         * An element for displaying text on your [dashboard page](https://dev.wix.com/docs/build-apps/developer-tools/cli/wix-cli-for-apps/dashboard-pages).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardText.html#)
         */
        interface DashboardText extends HiddenCollapsedMixin, Element {
            /**
             * Note: This standard element property is not relevant for this DashboardText.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardText.html#customClassList)
             */
            readonly customClassList: CustomClassList;
            /**
             * Sets or gets the plain-text contents of a text element.
             *
             * Max: 1200 characters
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardText.html#text)
             */
            text: string;
        }
        /**
         * A text button on your [dashboard page](https://dev.wix.com/docs/build-apps/developer-tools/cli/wix-cli-for-apps/dashboard-pages).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardTextButton.html#)
         */
        interface DashboardTextButton extends HiddenCollapsedMixin, DisabledMixin, ClickableMixin, LinkableMixin {
            /**
             * Note: This standard element property is not relevant for this DashboardTextButton.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardTextButton.html#customClassList)
             */
            readonly customClassList: CustomClassList;
            /**
             * Sets or gets the button's label.
             *
             * Max: 1200 characters.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardTextButton.html#label)
             */
            label: string;
            /**
             * Sets or gets the dashboard text button's link.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardTextButton.html#link)
             */
            link: string;
            /**
             * Sets or gets the dashboard text button prefix.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardTextButton.html#prefix)
             */
            prefix: string;
            /**
             * Sets or gets the dashboard text button suffix.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardTextButton.html#suffix)
             */
            suffix: string;
            /**
             * Sets or gets the target of the dashboard text button's link.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardTextButton.html#target)
             */
            target: string | null;
        }
        /**
         * An element for creating a single binary choice on your [dashboard page](https://dev.wix.com/docs/build-apps/developer-tools/cli/wix-cli-for-apps/dashboard-pages).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardToggleSwitch.html#)
         */
        interface DashboardToggleSwitch extends HiddenCollapsedElement, DisabledMixin {
            /**
             * Sets or gets the state of the toggle switch.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardToggleSwitch.html#checked)
             */
            checked: boolean;
            /**
             * Note: This standard element property is not relevant for this DashboardToggleSwitch.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardToggleSwitch.html#customClassList)
             */
            readonly customClassList: CustomClassList;
            /**
             * Sets or gets the toggle switch label.
             *
             * Max: 120 characters
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardToggleSwitch.html#label)
             */
            label: string | null;
            /**
             * Sets or gets the toggle switch's tooltip content.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DashboardToggleSwitch.html#tooltip)
             */
            tooltip: string | null;
        }
        /**
         * A [date picker](https://dev.wix.com/docs/develop-websites/articles/wix-editor-elements/formatting-layout/formatting-dates#displaying-dates-in-date-pickers)
         * is used for entering dates. It lets site visitors populate a
         * date field by picking a date using a calendar popup.
         * You can enable and disable dates, date ranges, and days of the week  on your date picker.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#)
         */
        interface DatePicker extends LabelMixin, FormElement, HiddenCollapsedMixin, DisabledMixin, FocusMixin, ReadOnlyMixin, ClickableMixin, RequiredMixin {
            /**
             * Sets or gets the format of the date displayed in the date picker.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#dateFormat)
             */
            dateFormat: string;
            /**
             * Sets or gets ranges of dates that a site visitor can't select.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#disabledDateRanges)
             */
            disabledDateRanges: DatePicker.DateRange[];
            /**
             * **Deprecated.** This property will continue to work, but a newer version is available at [`disabledDateRanges`](https://www.wix.com/velo/reference/$w/datepicker/disableddateranges).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#disabledDates)
             */
            disabledDates: Date[];
            /**
             * Sets or gets the days of the week that a site visitor can't select.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#disabledDaysOfWeek)
             */
            disabledDaysOfWeek: number[];
            /**
             * Sets or gets ranges of dates that a site visitor can select.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#enabledDateRanges)
             */
            enabledDateRanges: DatePicker.DateRange[];
            /**
             * Sets or gets the latest date that a site visitor can select.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#maxDate)
             */
            maxDate: Date;
            /**
             * Sets or gets the earliest date that a site visitor can select.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#minDate)
             */
            minDate: Date;
            /**
             * Sets or gets the date picker's timezone.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#timeZone)
             */
            timeZone: string;
            /**
             * Sets or gets the value of the date picker.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#value)
             */
            value: Date;
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#onCustomValidation)
             */
            onCustomValidation(validator: DatePickerValidator, override?: boolean): void;
            /**
             * Adds an event handler that triggers when the date picker's view changes.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#onViewChange)
             *  @eventType onViewChange
             */
            onViewChange(handler: ViewChangeEventHandler, operation?: ViewChangeOperation, timeout?: number): void;
        }
        /**
         * Provides functionality for elements that can be disabled.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.DisabledMixin.html#)
         */
        interface DisabledMixin {
            /**
             * Indicates if the element is enabled or disabled.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DisabledMixin.html#enabled)
             */
            readonly enabled: boolean;
            /**
             * Disables the element and sets its `enabled` property to `false`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DisabledMixin.html#disable)
             */
            disable(): Promise<void>;
            /**
             * Enables the element and sets its `enabled` property to `true`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.DisabledMixin.html#enable)
             */
            enable(): Promise<void>;
        }
        /**
         * A [Document](https://support.wix.com/en/article/wix-editor-managing-your-sites-pages) is a complete web page, which consists of a Header, Page, and Footer.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Document.html#)
         */
        interface Document {
            /**
             * Gets an object containing information about the document's background, such as its image or video source.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Document.html#background)
             */
            readonly background: Document.BackgroundOptions;
            /**
             * Gets the document's Header, Page, and Footer.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Document.html#children)
             */
            readonly children: Node[];
            /**
             * Gets the document's type.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Document.html#type)
             */
            readonly type: string;
        }
        /**
         * [Dropdowns](https://support.wix.com/en/article/content-manager-adding-and-setting-up-a-dropdown-selection-for-a-form-submission)
         * are used for selecting one of a number of options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Dropdown.html#)
         */
        interface Dropdown extends LabelMixin, FormElement, HiddenCollapsedMixin, DisabledMixin, FocusMixin, ClickableMixin, StyleMixin, RequiredMixin {
            /**
             * Sets or gets a dropdown's label.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Dropdown.html#label)
             */
            label: string;
            /**
             * Sets or gets the options in a dropdown.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Dropdown.html#options)
             */
            options: Dropdown.Option[];
            /**
             * Sets or gets the dropdown's placeholder text.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Dropdown.html#placeholder)
             */
            placeholder: string;
            /**
             * Sets or gets the index of the selected option.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Dropdown.html#selectedIndex)
             */
            selectedIndex: number;
            /**
             * Gets an object containing information about the dropdown's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Dropdown.html#style)
             */
            readonly style: Style;
            /**
             * Sets or gets an element's value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Dropdown.html#value)
             */
            value: string;
            /**
             * Adds an event handler that runs when an input element's value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Dropdown.html#onChange)
             */
            onChange(handler: EventHandler): Dropdown;
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Dropdown.html#onCustomValidation)
             */
            onCustomValidation(validator: DropdownValidator, override?: boolean): void;
        }
        /**
         * Use effect options to customize an effect when [showing]($w.HiddenMixin.html#show) or [hiding]($w.HiddenMixin.html#hide) an element.
         *  Effect options include arcs, bouncing, fading, flipping, floating, flying in/out, folding, gliding and more.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.EffectOptions.html#)
         */
        interface EffectOptions {
        }
        /**
         * Functionality for displaying the [effects](https://support.wix.com/en/article/editor-x-about-click-and-hover-interactions-beta#choosing-and-customizing-effects) defined for an element using Editor X.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Effects.html#)
         */
        interface Effects {
            /**
             * Gets an element's currently applied effects.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Effects.html#activeEffects)
             */
            readonly activeEffects: string[];
            /**
             * Gets all of the effects defined for an element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Effects.html#allEffects)
             */
            readonly allEffects: string[];
            /**
             * Applies one or more of an element's effects.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Effects.html#applyEffects)
             */
            applyEffects(effects: string[]): void;
            /**
             * Removes all of an element's applied effects.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Effects.html#removeAllEffects)
             */
            removeAllEffects(): void;
            /**
             * Removes one or more of an element's effects.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Effects.html#removeEffects)
             */
            removeEffects(effects: string[]): void;
            /**
             * Toggles the state of one or more of an element's effects.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Effects.html#toggleEffects)
             */
            toggleEffects(effects: string[]): void;
        }
        /**
         * Provides functionality for elements with [effects](https://support.wix.com/en/article/editor-x-about-click-and-hover-interactions-beta#choosing-and-customizing-effects) defined using Editor X.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.EffectsMixin.html#)
         */
        interface EffectsMixin {
            /**
             * An object containing functionality for displaying the [effects](https://support.wix.com/en/article/editor-x-about-click-and-hover-interactions-beta#choosing-and-customizing-effects) defined for an element using Editor X.
             *
             * >**Note:** This API can only be used in Editor X.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.EffectsMixin.html#effects)
             */
            readonly effects: Effects;
        }
        /**
         * Provides basic functionality for elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#)
         */
        interface Element extends Node, ViewportMixin {
            /**
             * A property that represents an element's custom CSS classes.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#customClassList)
             */
            readonly customClassList: CustomClassList;
            /**
             * Indicates if an element was temporarily deleted from the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).
             * Use the [`restore`](#restore) function to restore the deleted element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#deleted)
             */
            readonly deleted: boolean;
            /**
             * Indicates if an element is currently in the [DOM structure](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#rendered)
             */
            readonly rendered: boolean;
            /**
             * Deletes an element from the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).
             * This is a temporary deletion. Use [`restore`](#restore) to restore the deleted element.
             *
             * SEO crawlers cannot find content in an element whose `deleted` status is `true`.
             * Content in an element that is in `hidden` status can be found by crawlers.
             *
             * >**Note:** An element whose `deleted` status is `true` can be edited.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#delete)
             */
            delete(): Promise<void>;
            /**
             * Adds an event handler that runs when the pointer is moved
             *  onto the element.
             *
             *  You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
             *  @eventType mouseenter
             */
            onMouseIn(handler: MouseEventHandler): Element;
            /**
             * Adds an event handler that runs when the pointer is moved
             *  off of the element.
             *
             *  You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
             *  @eventType mouseleave
             */
            onMouseOut(handler: MouseEventHandler): Element;
            /**
             * Restores a deleted element to the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#restore)
             */
            restore(): Promise<void>;
        }
        /**
         * Events are fired when certain actions occur to elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Event.html#)
         */
        interface Event {
            /**
             * Gets the context in which an event was fired.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Event.html#context)
             */
            readonly context: Event.EventContext;
            /**
             * Gets the element that the event was fired on.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Event.html#target)
             */
            readonly target: Element & AnyProperties;
            /**
             * Gets the type of event that was fired.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Event.html#type)
             */
            readonly type: string;
        }
        /**
         * Provides functionality for elements that can set and lose focus.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#)
         */
        interface FocusMixin {
            /**
             * Removes focus from the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#blur)
             */
            blur(): void;
            /**
             * Places focus on the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#focus)
             */
            focus(): void;
            /**
             * Adds an event handler that runs when the element loses focus.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
             *  @eventType blur
             */
            onBlur(handler: EventHandler): Element;
            /**
             * Adds an event handler that runs when the element receives focus.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
             *  @eventType focus
             */
            onFocus(handler: EventHandler): Element;
        }
        /**
         * The [footer](https://support.wix.com/en/article/wix-editor-about-your-sites-footer) is the area of your site that appears at the bottom and
         *  throughout all of your pages.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Footer.html#)
         */
        interface Footer extends Element, ClickableMixin, ContainableMixin, StyleMixin {
            /**
             * Gets an object containing information about the footer's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Footer.html#style)
             */
            readonly style: Style;
        }
        /**
         * A [form](https://support.wix.com/en/article/wix-forms-adding-and-setting-up-a-form-on-your-site)
         * is a container for the input elements and buttons in a `WixForms` `$w` element.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Form.html#)
         */
        interface Form extends Element, ClickableMixin, ContainableMixin, HiddenCollapsedMixin, StyleMixin {
            /**
             * Gets an object containing information about the styles of the form.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Form.html#style)
             */
            readonly style: Style;
        }
        /**
         * Provides functionality related to user input elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.FormElement.html#)
         */
        interface FormElement extends Element, ValidatableMixin, ValueMixin {
        }
        /**
         * A [Gallery](https://support.wix.com/en/article/wix-editor-adding-and-setting-up-a-gallery) displays multiple items.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#)
         */
        interface Gallery extends Element, HiddenCollapsedMixin, PlayableMixin {
            /**
             * Sets or gets the action that occurs when an item in the gallery is clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#clickAction)
             */
            clickAction: string;
            /**
             * Gets the index of the gallery's current item.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#currentIndex)
             */
            readonly currentIndex: number;
            /**
             * Gets an object containing information about the current item.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#currentItem)
             */
            readonly currentItem: Gallery.ImageItem | Gallery.VideoItem;
            /**
             * Gets an object containing information about the gallery's capabilities.
             *
             * >**Note:** For [gallery types](https://support.wix.com/en/article/wix-editor-customizing-your-gallery-design#switching-to-a-different-gallery-type) that display one item at a time such as a slide show layout, `isPlayable` and `hasCurrentItem` are `false` .
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#galleryCapabilities)
             */
            readonly galleryCapabilities: Gallery.GalleryCapabilities;
            /**
             * Sets or gets the items in a gallery.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#items)
             */
            items: Gallery.ImageItem[] | Gallery.VideoItem[];
            /**
             * Determines if a gallery's navigation arrows are shown.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#showNavigationButtons)
             */
            showNavigationButtons: boolean;
            /**
             * Adds an event handler that runs when a gallery's current item changes.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#onCurrentItemChanged)
             *  @eventType imageChanged
             */
            onCurrentItemChanged(handler: GalleryItemChangedEventHandler): Gallery;
            /**
             * Adds an event handler that runs when an item in a gallery is
             *  clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#onItemClicked)
             *  @eventType itemClicked
             */
            onItemClicked(handler: GalleryItemClickedEventHandler): Gallery;
        }
        /**
         * Event that is fired when a gallery moves to a new image.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.GalleryItemChangedEvent.html#)
         */
        interface GalleryItemChangedEvent extends Event {
            /**
             * Gets the gallery item.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.GalleryItemChangedEvent.html#item)
             */
            readonly item: Gallery.ImageItem | Gallery.VideoItem;
            /**
             * Gets the gallery item's index.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.GalleryItemChangedEvent.html#itemIndex)
             */
            readonly itemIndex: number;
        }
        /**
         * Event that is fired when an image in a gallery is clicked.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.GalleryItemClickedEvent.html#)
         */
        interface GalleryItemClickedEvent extends GalleryItemChangedEvent, Event {
        }
        /**
         * A [Google map element](https://www.wix.com/support/html5/article/adding-google-maps)
         *  that allows you to display a given location.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.GoogleMap.html#)
         */
        interface GoogleMap extends Element, HiddenCollapsedMixin {
            /**
             * Sets or gets the location information of a map's marked location.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.GoogleMap.html#location)
             */
            location: GoogleMap.MapLocation;
        }
        /**
         * Represents the icon button that closes the [hamburger menu](https://support.wix.com/en/article/editor-x-using-hamburger-menus).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerCloseButton.html#)
         */
        interface HamburgerCloseButton extends Element, HiddenCollapsedMixin, StyleMixin, LabelMixin, EffectsMixin {
            /**
             * Sets or gets the icon image displayed on the button.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerCloseButton.html#icon)
             */
            icon: string;
            /**
             * Adds an event handler that runs when the element is clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerCloseButton.html#onClick)
             *  @eventType click
             */
            onClick(handler: MouseEventHandler): Element;
        }
        /**
         * The hamburger menu container holds the items of an expanded
         * [hamburger menu](https://support.wix.com/en/article/editor-x-using-hamburger-menus).
         * It features a list of menu items that navigate to sections or pages on your site,
         * a fullscreen overlay, and a button to close the menu.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerMenuContainer.html#)
         */
        interface HamburgerMenuContainer extends Element, ClickableMixin, ContainableMixin {
            /**
             * Indicates if the hamburger menu container is currently open.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerMenuContainer.html#opened)
             */
            readonly opened: boolean;
            /**
             * Closes the hamburger menu container.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerMenuContainer.html#close)
             */
            close(): Promise<void>;
            /**
             * Adds an event handler that is triggered when the menu container is closed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerMenuContainer.html#onClose)
             *  @eventType close
             */
            onClose(handler: EventHandler): void;
            /**
             * Adds an event handler that is triggered when the menu container is opened.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerMenuContainer.html#onOpen)
             *  @eventType open
             */
            onOpen(handler: EventHandler): void;
            /**
             * Opens the hamburger menu container.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerMenuContainer.html#open)
             */
            open(): Promise<void>;
        }
        /**
         * Represents the icon button that opens the [hamburger menu](https://support.wix.com/en/article/editor-x-using-hamburger-menus).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerOpenButton.html#)
         */
        interface HamburgerOpenButton extends Element, HiddenCollapsedMixin, StyleMixin, LabelMixin, EffectsMixin {
            /**
             * Sets or gets the icon image displayed on the button.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerOpenButton.html#icon)
             */
            icon: string;
            /**
             * Adds an event handler that runs when the element is clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerOpenButton.html#onClick)
             *  @eventType click
             */
            onClick(handler: MouseEventHandler): Element;
        }
        /**
         * Represents the fullscreen overlay that appears when the [hamburger menu](https://support.wix.com/en/article/editor-x-using-hamburger-menus) is open.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.HamburgerOverlay.html#)
         */
        interface HamburgerOverlay extends Element, ClickableMixin, ContainableMixin {
        }
        /**
         * The [header](https://support.wix.com/en/article/wix-editor-about-your-sites-header) is the area of your site that appears at the top and
         *  throughout all of your pages.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Header.html#)
         */
        interface Header extends Element, ClickableMixin, ContainableMixin, StyleMixin {
            /**
             * Gets an object containing information about the header's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Header.html#style)
             */
            readonly style: Style;
        }
        /**
         * Provides functionality for all elements that can be hidden or collapsed.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenCollapsedElement.html#)
         */
        interface HiddenCollapsedElement extends Element, HiddenCollapsedMixin {
        }
        /**
         * Provides functionality for all elements that can be hidden or collapsed.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenCollapsedMixin.html#)
         */
        interface HiddenCollapsedMixin extends HiddenMixin, CollapsedMixin {
        }
        /**
         * Provides functionality for elements that can be hidden.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenMixin.html#)
         */
        interface HiddenMixin {
            /**
             * Indicates if the element is visible or hidden.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenMixin.html#hidden)
             */
            readonly hidden: boolean;
            /**
             * Indicates if the element is actually visible.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenMixin.html#isVisible)
             */
            readonly isVisible: boolean;
            /**
             * Hides the element and sets its `hidden` property
             *  to `true`, using an effect if specified.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenMixin.html#hide)
             */
            hide(effectName?: string, effectOptions?: EffectOptions.ArcEffectOptions | EffectOptions.BounceEffectOptions | EffectOptions.FadeEffectOptions | EffectOptions.FlipEffectOptions | EffectOptions.FloatEffectOptions | EffectOptions.FlyEffectOptions | EffectOptions.FoldEffectOptions | EffectOptions.GlideEffectOptions | EffectOptions.PuffEffectOptions | EffectOptions.RollEffectOptions | EffectOptions.SlideEffectOptions | EffectOptions.SpinEffectOptions | EffectOptions.TurnEffectOptions | EffectOptions.ZoomEffectOptions): Promise<void>;
            /**
             * Shows the element and sets its `hidden` property
             *  to `false`, using an effect if specified.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HiddenMixin.html#show)
             */
            show(effectName?: string, effectOptions?: EffectOptions.ArcEffectOptions | EffectOptions.BounceEffectOptions | EffectOptions.FadeEffectOptions | EffectOptions.FlipEffectOptions | EffectOptions.FloatEffectOptions | EffectOptions.FlyEffectOptions | EffectOptions.FoldEffectOptions | EffectOptions.GlideEffectOptions | EffectOptions.PuffEffectOptions | EffectOptions.RollEffectOptions | EffectOptions.SlideEffectOptions | EffectOptions.SpinEffectOptions | EffectOptions.TurnEffectOptions | EffectOptions.ZoomEffectOptions): Promise<void>;
        }
        /**
         * An [HtmlComponent](https://support.wix.com/en/article/velo-working-with-the-html-iframe-element) is a container for internal or external HTML code.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.HtmlComponent.html#)
         */
        interface HtmlComponent extends IFrame {
            /**
             * Sets or gets whether the HTML Component displays scrollbars.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HtmlComponent.html#scrolling)
             */
            scrolling: string;
            /**
             * Sets or gets the URL of the HTML Component's code.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HtmlComponent.html#src)
             */
            src: string;
            /**
             * Allows the HTML Component to be put into full screen mode.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HtmlComponent.html#allowFullScreen)
             */
            allowFullScreen(): HtmlComponent;
            /**
             * Adds an event handler that runs when the HTML Component
             *  sends a message.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HtmlComponent.html#onMessage)
             *  @eventType message
             */
            onMessage(handler: HtmlComponentMessageEventHandler): HtmlComponent;
            /**
             * Sends a message to the HTML Component.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HtmlComponent.html#postMessage)
             */
            postMessage(message: string | number | boolean | any | any[]): void;
        }
        /**
         * Event that is fired when the code in an HtmlComponent sends a message.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.HtmlComponentMessageEvent.html#)
         */
        interface HtmlComponentMessageEvent extends Event {
            /**
             * Gets the event data.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.HtmlComponentMessageEvent.html#data)
             */
            readonly data: any;
        }
        /**
         * Event that is fired when a user hovers over a star on a ratings input component.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.IconMouseInEvent.html#)
         */
        interface IconMouseInEvent extends Event {
            /**
             * Gets the display label that corresponds to the icon that the mouse entered.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.IconMouseInEvent.html#label)
             */
            readonly label: string;
            /**
             * Gets the value (1-5) that corresponds to the icon that the mouse entered.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.IconMouseInEvent.html#value)
             */
            readonly value: number;
        }
        /**
         * Provides functionality for iframe-based elements, such as [`HtmlComponent`]($w.HtmlComponent.html).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.IFrame.html#)
         */
        interface IFrame extends Element, HiddenCollapsedMixin {
        }
        /**
         * [Images](https://support.wix.com/en/article/wix-media-supported-media-file-types-and-file-sizes?tabs=Images)
         * are stored in the [Media Manager](https://support.wix.com/en/article/about-the-media-manager)
         *  or retrieved from an external web location.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Image.html#)
         */
        interface Image extends Element, HiddenCollapsedMixin, LinkableMixin, ClickableMixin, EffectsMixin {
            /**
             * Sets or gets an image's alt text.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Image.html#alt)
             */
            alt: string;
            /**
             * Sets or gets the action that occurs when an image is clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Image.html#clickAction)
             */
            clickAction: string;
            /**
             * Sets or gets how an image is placed inside an image element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Image.html#fitMode)
             */
            fitMode: string;
            /**
             * Sets or gets the file location of the image.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Image.html#src)
             */
            src: string;
            /**
             * Sets or gets an image's tooltip.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Image.html#tooltip)
             */
            tooltip: string;
        }
        /**
         * Event that is fired when the keyboard is pressed.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.KeyboardEvent.html#)
         */
        interface KeyboardEvent extends Event {
            /**
             * Indicates if the Option key on a Mac or Alt key on a PC was pressed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.KeyboardEvent.html#altKey)
             */
            readonly altKey: boolean;
            /**
             * Indicates if the Control (Ctrl) key was pressed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.KeyboardEvent.html#ctrlKey)
             */
            readonly ctrlKey: boolean;
            /**
             * Gets a string representation of the key that was pressed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.KeyboardEvent.html#key)
             */
            readonly key: string;
            /**
             * Indicates if the ⌘ Command key on a Mac or ⊞ Windows key on a PC was pressed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.KeyboardEvent.html#metaKey)
             */
            readonly metaKey: boolean;
            /**
             * Indicates if the Shift key was pressed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.KeyboardEvent.html#shiftKey)
             */
            readonly shiftKey: boolean;
        }
        /**
         * Provides functionality for elements that have a label.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.LabelMixin.html#)
         */
        interface LabelMixin {
            /**
             * Sets or gets the label of an element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.LabelMixin.html#label)
             */
            label: string;
        }
        /**
         * Provides functionality for elements that can act as links.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.LinkableMixin.html#)
         */
        interface LinkableMixin {
            /**
             * Sets or gets the element's link.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.LinkableMixin.html#link)
             */
            link: string;
            /**
             * Sets or gets the target of the element's link.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.LinkableMixin.html#target)
             */
            target: string;
        }
        /**
         * The [Lottie](https://support.wix.com/en/article/wix-editor-importing-lottie-animations-to-your-site)
         * element is used for adding and customizing a Lottie animation.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Lottie.html#)
         */
        interface Lottie extends Element, FocusMixin, HiddenCollapsedMixin, ClickableMixin {
            /**
             * Sets or gets a Lottie animation's alt text.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Lottie.html#alt)
             */
            alt: string;
            /**
             * Sets or gets whether the Lottie animation plays in a loop.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Lottie.html#loop)
             */
            loop: boolean;
            /**
             * Sets or gets the Lottie animation's playback speed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Lottie.html#speed)
             */
            speed: number;
            /**
             * Sets or gets the source of the Lottie animation.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Lottie.html#src)
             */
            src: string;
            /**
             * Pauses playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Lottie.html#pause)
             */
            pause(): void;
            /**
             * Begins or resumes playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Lottie.html#play)
             */
            play(): void;
            /**
             * Stops the playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Lottie.html#stop)
             */
            stop(): void;
        }
        /**
         * A container for media items.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MediaBox.html#)
         */
        interface MediaBox extends Element, HiddenCollapsedMixin, Background {
        }
        /**
         * [Menus](https://support.wix.com/en/article/wix-editor-adding-a-site-menu) are used for navigating between site pages.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Menu.html#)
         */
        interface Menu extends Element, HiddenCollapsedMixin {
            /**
             * Sets or gets menu items.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Menu.html#menuItems)
             */
            menuItems: Menu.MenuItem[];
            /**
             * Adds an event handler that runs when a user clicks a menu item.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Menu.html#onItemClick)
             *  @eventType ItemMouseClick
             */
            onItemClick(handler: MenuItemMouseEventHandler): Menu.MenuItem;
            /**
             * Adds an event handler that runs when a user double clicks a menu item.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Menu.html#onItemDblClick)
             *  @eventType ItemMouseDblClick
             */
            onItemDblClick(handler: MenuItemMouseEventHandler): Menu.MenuItem;
            /**
             * Adds an event handler that runs when a user hovers over a menu item.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Menu.html#onItemMouseIn)
             *  @eventType ItemMouseIn
             */
            onItemMouseIn(handler: MenuItemMouseEventHandler): Menu.MenuItem;
            /**
             * Adds an event handler that runs when a user stops hovering over a menu item.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Menu.html#onItemMouseOut)
             *  @eventType ItemMouseOut
             */
            onItemMouseOut(handler: MenuItemMouseEventHandler): Menu.MenuItem;
        }
        /**
         * A [menu container](https://support.wix.com/en/article/wix-editor-about-the-mobile-menu) holds the elements in a
         *  mobile menu that are used for navigating between mobile site pages.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuContainer.html#)
         */
        interface MenuContainer extends Element {
            /**
             * Closes a mobile menu.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuContainer.html#close)
             */
            close(): Promise<void>;
            /**
             * Opens a mobile menu.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuContainer.html#open)
             */
            open(): Promise<void>;
        }
        /**
         * Event that is fired when the mouse is used on a menu item.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuItemMouseEvent.html#)
         */
        interface MenuItemMouseEvent extends Event {
            /**
             * Gets the distance in pixels between the pointer and the
             *  left edge of the browser's viewable area.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuItemMouseEvent.html#clientX)
             */
            readonly clientX: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  top edge of the browser's viewable area.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuItemMouseEvent.html#clientY)
             */
            readonly clientY: number;
            /**
             * The menu item on which the event occurred.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuItemMouseEvent.html#item)
             */
            readonly item: Menu.MenuItem;
            /**
             * Gets the distance in pixels between the pointer and the
             *  left edge of the element that triggered this event.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuItemMouseEvent.html#offsetX)
             */
            readonly offsetX: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  top edge of the element that triggered this event.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuItemMouseEvent.html#offsetY)
             */
            readonly offsetY: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  left edge of the page.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuItemMouseEvent.html#pageX)
             */
            readonly pageX: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  top edge of the page.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuItemMouseEvent.html#pageY)
             */
            readonly pageY: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  left edge of the screen or screens.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuItemMouseEvent.html#screenX)
             */
            readonly screenX: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  top edge of the screen or screens.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MenuItemMouseEvent.html#screenY)
             */
            readonly screenY: number;
        }
        /**
         * A button element on a mobile app.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileButton.html#)
         */
        interface MobileButton extends MobileElement, MobileHiddenCollapsedMixin, MobileDisabledMixin, MobilePressableMixin {
            /**
             * Sets or gets a mobile button's label.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileButton.html#label)
             */
            label: string;
        }
        /**
         * A container element for repeater items on a mobile app.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileContainer.html#)
         */
        interface MobileContainer extends MobileElement, MobileHiddenCollapsedMixin, MobilePressableMixin, ContainableMixin {
        }
        /**
         * Provides functionality for mobile elements that can be disabled.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileDisabledMixin.html#)
         */
        interface MobileDisabledMixin {
            /**
             * Indicates if the mobile element is enabled or disabled.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileDisabledMixin.html#enabled)
             */
            readonly enabled: boolean;
            /**
             * Disables the mobile element and sets its `enabled` property to `false`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileDisabledMixin.html#disable)
             */
            disable(): Promise<void>;
            /**
             * Enables the mobile element and sets its `enabled` property to `true`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileDisabledMixin.html#enable)
             */
            enable(): Promise<void>;
        }
        /**
         * Provides basic functionality for mobile elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileElement.html#)
         */
        interface MobileElement {
            /**
             * Gets the mobile element's ID.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileElement.html#id)
             */
            readonly id: string;
            /**
             * Gets the mobile element's parent element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileElement.html#parent)
             */
            readonly parent: Node;
            /**
             * Gets the mobile element's type.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileElement.html#type)
             */
            readonly type: string;
        }
        /**
         * Provides functionality for input elements on mobile apps.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileFormElementMixin.html#)
         */
        interface MobileFormElementMixin extends MobileElement, MobileValueMixin {
            /**
             * Sets or gets whether to validate the mobile element when it loses focus.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileFormElementMixin.html#validateOnBlur)
             */
            validateOnBlur: boolean;
        }
        /**
         * Provides functionality for all mobile elements that can be hidden or collapsed.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileHiddenCollapsedMixin.html#)
         */
        interface MobileHiddenCollapsedMixin extends MobileHiddenMixin, CollapsedMixin {
            /**
             * Indicates if the element is collapsed or expanded.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileHiddenCollapsedMixin.html#collapsed)
             */
            readonly collapsed: boolean;
            /**
             * Collapses the element and sets its `collapsed` property to `true`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileHiddenCollapsedMixin.html#collapse)
             */
            collapse(): Promise<void>;
            /**
             * Expands the element and sets its `collapsed` property to `false`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileHiddenCollapsedMixin.html#expand)
             */
            expand(): Promise<void>;
        }
        /**
         * Provides functionality for mobile elements that can be hidden.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileHiddenMixin.html#)
         */
        interface MobileHiddenMixin extends HiddenMixin {
            /**
             * Indicates if the element is visible or hidden.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileHiddenMixin.html#hidden)
             */
            readonly hidden: boolean;
            /**
             * Indicates if the element is actually visible.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileHiddenMixin.html#isVisible)
             */
            readonly isVisible: boolean;
            /**
             * Hides the element and sets its `hidden` property
             *  to `true`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileHiddenMixin.html#hide)
             */
            hide(): Promise<void>;
            /**
             * Shows the element and sets its `hidden` property
             *  to `false`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileHiddenMixin.html#show)
             */
            show(): Promise<void>;
        }
        /**
         * An image element on a mobile app.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileImage.html#)
         */
        interface MobileImage extends MobileElement, MobileHiddenCollapsedMixin, MobilePressableMixin {
            /**
             * Sets or gets the image's source.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileImage.html#src)
             */
            src: string;
        }
        /**
         * A picker for selecting items on a mobile app.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePicker.html#)
         */
        interface MobilePicker extends MobileElement, LabelMixin, MobileValueMixin, MobileHiddenCollapsedMixin, MobileDisabledMixin, MobilePressableMixin {
            /**
             * Sets or gets the picker's options.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePicker.html#options)
             */
            options: MobilePicker.Option[];
            /**
             * Sets or gets the option dialog's subtitle.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePicker.html#optionsDialogSubtitle)
             */
            optionsDialogSubtitle: string;
            /**
             * Sets or gets the option dialog's title.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePicker.html#optionsDialogTitle)
             */
            optionsDialogTitle: string;
            /**
             * Sets or gets the indicies of the selected options.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePicker.html#selectedIndices)
             */
            selectedIndices: number[];
            /**
             * Sets or gets the value of the selected option.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePicker.html#value)
             */
            value: string;
            /**
             * Adds an event handler that runs when the mobile picker element's value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePicker.html#onChange)
             *  @eventType change
             */
            onChange(handler: EventHandler): MobilePicker;
        }
        /**
         * Provides functionality for elements on a mobile app that can be pressed.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePressableMixin.html#)
         */
        interface MobilePressableMixin {
            /**
             * Adds an event handler that runs when the element is pressed for more than 500 milliseconds.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePressableMixin.html#onLongPress)
             *  @eventType longPress
             */
            onLongPress(handler: EventHandler): MobileElement;
            /**
             * Adds an event handler that runs when an element on a mobile app is pressed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePressableMixin.html#onPress)
             *  @eventType press
             */
            onPress(handler: EventHandler): MobileElement;
            /**
             * Adds an event handler that runs immediately when an element on a mobile app is pressed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePressableMixin.html#onPressIn)
             *  @eventType pressIn
             */
            onPressIn(handler: EventHandler): MobileElement;
            /**
             * Adds an event handler that runs when an element on a mobile app is released after being pressed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePressableMixin.html#onPressOut)
             *  @eventType pressOut
             */
            onPressOut(handler: EventHandler): MobileElement;
        }
        /**
         * The [repeater](https://support.wix.com/en/article/wix-editor-adding-and-managing-repeaters-lists-grids) mobile
         * element is used to create repeating layouts on a mobile app widget.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileRepeater.html#)
         */
        interface MobileRepeater extends MobileElement, MobileHiddenCollapsedMixin {
            /**
             * Sets or gets the repeater data.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileRepeater.html#data)
             */
            data: any[];
            /**
             * Runs a function for each repeated item.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileRepeater.html#forEachItem)
             */
            forEachItem(callback: ForItemCallback): void;
            /**
             * Runs a function for each repeated item with the given IDs.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileRepeater.html#forItems)
             */
            forItems(itemIds: string[], callback: ForItemCallback): void;
            /**
             * Sets the function that runs when a new repeated item is created.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileRepeater.html#onItemReady)
             *  @eventType itemReady
             */
            onItemReady(handler: ItemReadyEventHandler): MobileRepeater;
            /**
             * Sets the function that runs when a repeated item is removed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileRepeater.html#onItemRemoved)
             *  @eventType itemRemoved
             */
            onItemRemoved(handler: ItemRemovedEventHandler): MobileRepeater;
        }
        /**
         * A switch used for a single binary choice on a mobile app.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileSwitch.html#)
         */
        interface MobileSwitch extends MobileElement, MobileDisabledMixin, MobileHiddenCollapsedMixin {
            /**
             * Sets or gets the value of the switch state.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileSwitch.html#value)
             */
            value: boolean;
        }
        /**
         * A text element on a mobile app.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileText.html#)
         */
        interface MobileText extends MobileElement, MobileHiddenCollapsedMixin, MobilePressableMixin {
            /**
             * Sets or gets the plain-text contents of a text element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileText.html#text)
             */
            text: string;
        }
        /**
         * A [text input](https://support.wix.com/en/article/content-manager-adding-and-setting-up-a-text-input) element for capturing small amounts of text on a mobile app.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileTextInput.html#)
         */
        interface MobileTextInput extends MobileElement, LabelMixin, MobileFormElementMixin, MobileHiddenCollapsedMixin, MobileDisabledMixin {
            /**
             * Sets or gets the input element's placeholder text.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileTextInput.html#placeholder)
             */
            placeholder: string;
        }
        /**
         * Provides functionality for mobile elements that have values.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileValueMixin.html#)
         */
        interface MobileValueMixin {
            /**
             * Indicates if an input element's value is valid.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileValueMixin.html#valid)
             */
            readonly valid: boolean;
            /**
             * Sets or gets whether to validate the mobile element when its value changes.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileValueMixin.html#validateOnChange)
             */
            validateOnChange: boolean;
            /**
             * Sets or gets whether to validate the mobile element when it is loaded.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileValueMixin.html#validateOnStart)
             */
            validateOnStart: boolean;
            /**
             * Sets or gets the validations for mobile elements in a form.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileValueMixin.html#validations)
             */
            validations: MobileValueMixin.Validation[];
            /**
             * Sets or gets an element's value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileValueMixin.html#value)
             */
            value: any;
            /**
             * Adds an event handler that runs when an input element's value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileValueMixin.html#onChange)
             *  @eventType change
             */
            onChange(handler: EventHandler): MobileElement;
        }
        /**
         * Event that is fired when the mouse is clicked.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MouseEvent.html#)
         */
        interface MouseEvent extends Event {
            /**
             * Gets the distance in pixels between the pointer and the
             *  left edge of the browser's viewable area.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MouseEvent.html#clientX)
             */
            readonly clientX: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  top edge of the browser's viewable area.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MouseEvent.html#clientY)
             */
            readonly clientY: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  left edge of the element that triggered this event.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MouseEvent.html#offsetX)
             */
            readonly offsetX: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  top edge of the element that triggered this event.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MouseEvent.html#offsetY)
             */
            readonly offsetY: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  left edge of the page.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MouseEvent.html#pageX)
             */
            readonly pageX: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  top edge of the page.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MouseEvent.html#pageY)
             */
            readonly pageY: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  left edge of the screen or screens.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MouseEvent.html#screenX)
             */
            readonly screenX: number;
            /**
             * Gets the distance in pixels between the pointer and the
             *  top edge of the screen or screens.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MouseEvent.html#screenY)
             */
            readonly screenY: number;
        }
        /**
         * [Multi-state boxes](https://support.wix.com/en/article/velo-about-multi-state-boxes) are containers for states.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MultiStateBox.html#)
         */
        interface MultiStateBox extends Element, HiddenCollapsedMixin, ClickableMixin, ContainableMixin {
            /**
             * Gets the multi-state box's current state.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MultiStateBox.html#currentState)
             */
            readonly currentState: State;
            /**
             * Gets a list of all the states contained in the multi-state box.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MultiStateBox.html#states)
             */
            readonly states: State[];
            /**
             * Change the multi-state box's current state to a specific state.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MultiStateBox.html#changeState)
             */
            changeState(stateReference: string | State): Promise<State>;
            /**
             * Adds an event handler that runs when the multi-state box moves to a new state.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.MultiStateBox.html#onChange)
             *  @eventType change
             */
            onChange(eventHandler: EventHandler): MultiStateBox;
        }
        /**
         * Provides basic functionality for all Wix objects, including objects
         *  that are not [elements]($w.Element.html).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Node.html#)
         */
        interface Node {
            /**
             * Indicates if an element appears on all pages or only on the current page.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Node.html#global)
             */
            readonly global: boolean;
            /**
             * Gets the element's ID.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Node.html#id)
             */
            readonly id: string;
            /**
             * Gets the element's parent element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Node.html#parent)
             */
            readonly parent: Node;
            /**
             * Gets the element's type.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Node.html#type)
             */
            readonly type: string;
            /**
             * Scrolls the page to the top of the element using an animation.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Node.html#scrollTo)
             */
            scrollTo(): Promise<void>;
        }
        /**
         * A [page](https://support.wix.com/en/article/wix-editor-adding-a-page-to-your-site) is a web page that can contain other elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Page.html#)
         */
        interface Page extends Element, ClickableMixin, ContainableMixin {
            /**
             * Gets the page's [SEO description](https://support.wix.com/en/article/adding-seo-page-titles-and-descriptions-meta-tags).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Page.html#description)
             */
            readonly description: string;
            /**
             * Gets the page's keywords.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Page.html#keywords)
             */
            readonly keywords: string[];
            /**
             * Gets the page's title.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Page.html#title)
             */
            readonly title: string;
            /**
             * Indicates if the page is included in the site's menu.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Page.html#visibleInMenu)
             */
            readonly visibleInMenu: boolean;
        }
        /**
         * [Pagination](https://support.wix.com/en/article/content-manager-adding-and-setting-up-a-pagination-bar) is an element for working with paging.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Pagination.html#)
         */
        interface Pagination extends Element, DisabledMixin, HiddenCollapsedMixin, ClickableMixin, ViewportMixin {
            /**
             * Sets or gets the current page.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Pagination.html#currentPage)
             */
            currentPage: number;
            /**
             * Sets or gets the total number of pages shown in a pagination bar.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Pagination.html#totalPages)
             */
            totalPages: number;
            /**
             * Adds an event handler that runs when the pagination bar
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Pagination.html#onChange)
             *  @eventType Change
             */
            onChange(handler: EventHandler): Pagination;
        }
        /**
         * A button on your Blocks panel.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelButton.html#)
         */
        interface PanelButton extends HiddenCollapsedMixin, Element, DisabledMixin, LinkableMixin {
            /**
             * Sets or gets the button's label (the text that appears on the button).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelButton.html#buttonLabel)
             */
            buttonLabel: string;
            /**
             * Sets or gets the type of divider displayed under the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelButton.html#divider)
             */
            divider: string;
            /**
             * Sets or gets the text above the button (field title). Maximum length is 120 characters.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelButton.html#label)
             */
            label: string;
            /**
             * Sets or gets the element's link to an external site.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelButton.html#link)
             */
            link: string;
            /**
             * Sets or gets the button's size.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelButton.html#size)
             */
            size: string;
            /**
             * Sets or gets the button's skin.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelButton.html#skin)
             */
            skin: string;
            /**
             * Sets or gets whether the button is stretched to the full width of the panel.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelButton.html#stretched)
             */
            stretched: boolean;
            /**
             * Sets or gets an element's tooltip.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelButton.html#tooltip)
             */
            tooltip: string;
            /**
             * Adds an event handler that runs when the element is clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelButton.html#onClick)
             *  @eventType click
             */
            onClick(handler: EventHandler): Element;
        }
        /**
         * Panel checkbox groups are used in the Blocks panel builder for selecting any number of the given options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelCheckboxGroup.html#)
         */
        interface PanelCheckboxGroup extends HiddenCollapsedMixin, Element, DisabledMixin {
            /**
             * Sets or gets the type of divider displayed under the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelCheckboxGroup.html#divider)
             */
            divider: string;
            /**
             * Sets or gets the label of an element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelCheckboxGroup.html#label)
             */
            label: string;
            /**
             * Sets or gets the options of the checkbox group.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelCheckboxGroup.html#options)
             */
            options: PanelCheckboxGroup.option[];
            /**
             * Sets or gets the indices of the selected options.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelCheckboxGroup.html#selectedIndices)
             */
            selectedIndices: number[];
            /**
             * Sets or gets an element's tooltip.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelCheckboxGroup.html#tooltip)
             */
            tooltip: string;
            /**
             * Sets or gets the value of the selected options.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelCheckboxGroup.html#value)
             */
            value: string[];
            /**
             * Adds an event handler that runs when an input element's value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelCheckboxGroup.html#onChange)
             *  @eventType change
             */
            onChange(handler: EventHandler): Element;
        }
        /**
         * Panel color picker elements are used in the Wix Blocks panel builder for selecting colors.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelColorPicker.html#)
         */
        interface PanelColorPicker extends PanelElementMixin, HiddenCollapsedMixin, Element, DisabledMixin, PanelElementMixin {
            /**
             * Sets or gets the type of divider displayed under the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelColorPicker.html#divider)
             */
            divider: string;
            /**
             * Sets or gets an element's color value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelColorPicker.html#value)
             */
            value: string;
            /**
             * Adds an event handler that runs when an element's value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelColorPicker.html#onChange)
             *  @eventType change
             */
            onChange(handler: EventHandler): Element;
        }
        /**
         * Panel dropdowns are used in the Blocks panel builder for selecting one of a number of options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelDropdown.html#)
         */
        interface PanelDropdown extends HiddenCollapsedMixin, Element, DisabledMixin {
            /**
             * Sets or gets the type of divider displayed under the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelDropdown.html#divider)
             */
            divider: string;
            /**
             * Sets or gets the label of an element. Maximum length is 120 characters.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelDropdown.html#label)
             */
            label: string;
            /**
             * Sets or gets the options in the dropdown.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelDropdown.html#options)
             */
            options: PanelDropdown.option[];
            /**
             * Sets or gets the placeholder text of an element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelDropdown.html#placeholder)
             */
            placeholder: string;
            /**
             * Sets or gets the index of the selected option.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelDropdown.html#selectedIndex)
             */
            selectedIndex: number;
            /**
             * Sets or gets an element's tooltip.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelDropdown.html#tooltip)
             */
            tooltip: string;
            /**
             * Sets or gets an element's value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelDropdown.html#value)
             */
            value: string;
            /**
             * Adds an event handler that runs when an input element's value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelDropdown.html#onChange)
             *  @eventType change
             */
            onChange(handler: EventHandler): Element;
        }
        /**
         * Provides functionality for panel elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelElementMixin.html#)
         */
        interface PanelElementMixin extends LabelMixin {
            /**
             * Sets or gets the type of divider displayed under the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelElementMixin.html#divider)
             */
            divider: string;
        }
        /**
         * Panel font and color picker elements are used in the Wix Blocks panel builder for selecting fonts and colors.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelFontAndColorPicker.html#)
         */
        interface PanelFontAndColorPicker extends PanelElementMixin, HiddenCollapsedMixin, Element, DisabledMixin {
            /**
             * Sets or gets an element's color.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelFontAndColorPicker.html#color)
             */
            color: string;
            /**
             * Sets or gets the type of divider displayed under the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelFontAndColorPicker.html#divider)
             */
            divider: string;
            /**
             * Sets or gets an element's font.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelFontAndColorPicker.html#fontFamily)
             */
            fontFamily: string;
            /**
             * Sets or gets an element's tooltip.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelFontAndColorPicker.html#tooltip)
             */
            tooltip: string;
            /**
             * Adds an event handler that runs when an element's color value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelFontAndColorPicker.html#onColorChange)
             *  @eventType change
             */
            onColorChange(handler: EventHandler): Element;
            /**
             * Adds an event handler that runs when an element's font value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelFontAndColorPicker.html#onFontChange)
             *  @eventType change
             */
            onFontChange(handler: EventHandler): Element;
        }
        /**
         * Panel radio button groups are used in the Blocks panel builder for selecting one of a number of options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRadioButtonGroup.html#)
         */
        interface PanelRadioButtonGroup extends HiddenCollapsedMixin, Element, DisabledMixin {
            /**
             * Sets or gets the type of divider displayed under the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRadioButtonGroup.html#divider)
             */
            divider: string;
            /**
             * Sets or gets the label of an element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRadioButtonGroup.html#label)
             */
            label: string;
            /**
             * Sets or gets the options in the radio button group.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRadioButtonGroup.html#options)
             */
            options: PanelRadioButtonGroup.option[];
            /**
             * Sets or gets the index of the selected option.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRadioButtonGroup.html#selectedIndex)
             */
            selectedIndex: number;
            /**
             * Sets or gets an element's tooltip.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRadioButtonGroup.html#tooltip)
             */
            tooltip: string;
            /**
             * Sets or gets an element's value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRadioButtonGroup.html#value)
             */
            value: string;
            /**
             * Adds an event handler that runs when an input element's value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRadioButtonGroup.html#onChange)
             *  @eventType change
             */
            onChange(handler: EventHandler): Element;
        }
        /**
         * A rich text element is used in the Blocks panel builder to display text followed by a link.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRichText.html#)
         */
        interface PanelRichText extends HiddenCollapsedMixin, Element {
            /**
             * Sets or gets the type of divider displayed under the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRichText.html#divider)
             */
            divider: string;
            /**
             * Sets or gets the URL of the rich text's link
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRichText.html#link)
             */
            link: string;
            /**
             * Sets or gets the label of the rich text's link
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRichText.html#linkLabel)
             */
            linkLabel: string;
            /**
             * Sets or gets the target of the rich text's link
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRichText.html#target)
             */
            target: string;
            /**
             * Sets or gets the text part of the rich text element (without the link). Maximum length is 120,000 characters.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRichText.html#text)
             */
            text: string;
        }
        /**
         * Displays a section heading in the Blocks panel.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSectionDivider.html#)
         */
        interface PanelSectionDivider extends HiddenCollapsedMixin, Element {
            /**
             * Sets or gets the label of an element. Maximum length is 120 characters.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSectionDivider.html#label)
             */
            label: string;
            /**
             * Sets or gets an element's tooltip.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSectionDivider.html#tooltip)
             */
            tooltip: string;
        }
        /**
         * Panel sliders allow site creators to select a number from a given range.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSlider.html#)
         */
        interface PanelSlider extends HiddenCollapsedMixin, Element, DisabledMixin {
            /**
             * Sets or gets the type of divider displayed under the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSlider.html#divider)
             */
            divider: string;
            /**
             * Sets or gets the label of an element. Maximum length is 120 characters.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSlider.html#label)
             */
            label: string;
            /**
             * Sets or gets the slider's maximum value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSlider.html#max)
             */
            max: number;
            /**
             * Sets or gets the slider's minimum value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSlider.html#min)
             */
            min: number;
            /**
             * Sets or gets the slider's step value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSlider.html#step)
             */
            step: number;
            /**
             * Sets or gets an element's tooltip. Maximum length is 1200 characters.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSlider.html#tooltip)
             */
            tooltip: string;
            /**
             * Sets or gets the unit of a slider's numeric input.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSlider.html#unit)
             */
            unit: string;
            /**
             * Sets or gets the value of the slider.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSlider.html#value)
             */
            value: number;
            /**
             * Adds an event handler that runs when an input element's value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelSlider.html#onChange)
             *  @eventType change
             */
            onChange(handler: EventHandler): Element;
        }
        /**
         * An input element in a Blocks panel for capturing small amounts of text.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelTextInput.html#)
         */
        interface PanelTextInput extends HiddenCollapsedMixin, Element, DisabledMixin {
            /**
             * Sets or gets the type of divider displayed under the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelTextInput.html#divider)
             */
            divider: string;
            /**
             * Sets or gets the label of an element. Maximum length is 120 characters.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelTextInput.html#label)
             */
            label: string;
            /**
             * Sets or gets the maximum number of characters in the input text.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelTextInput.html#maxLength)
             */
            maxLength: number;
            /**
             * Sets or gets the placeholder text of an element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelTextInput.html#placeholder)
             */
            placeholder: string;
            /**
             * Sets or gets whether the value of the input element is read-only (cannot be modified by users).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelTextInput.html#readOnly)
             */
            readOnly: boolean;
            /**
             * Sets or gets an element's tooltip.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelTextInput.html#tooltip)
             */
            tooltip: string;
            /**
             * Sets or gets an element's value.
             *  Maximum length is 120 characters.
             *  To reset the element, restoring any placeholder text, set the value
             *  property to `null` or `undefined`.
             *
             * > **Note**: Changing an element's `value` in code does not trigger an `onChange` event.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelTextInput.html#value)
             */
            value: string;
            /**
             * Adds an event handler that runs when an input element's value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelTextInput.html#onChange)
             *  @eventType change
             */
            onChange(handler: EventHandler): Element;
        }
        /**
         * A Panel thumbnail groups allow users to select an option using a set of thumbnail images in a Blocks panel.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelThumbnails.html#)
         */
        interface PanelThumbnails extends HiddenCollapsedMixin, Element {
            /**
             * Sets or gets the number of thumbnail columns. Minimum is 1, maximum is 5.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelThumbnails.html#columnCount)
             */
            columnCount: number;
            /**
             * Sets or gets the type of divider displayed under the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelThumbnails.html#divider)
             */
            divider: string;
            /**
             * Sets or gets the label of an element. Maximum length is 120 characters.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelThumbnails.html#label)
             */
            label: string;
            /**
             * Sets or gets the options in the thumbnail group.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelThumbnails.html#options)
             */
            options: PanelThumbnails.option[];
            /**
             * Gets the index of the selected option.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelThumbnails.html#selectedIndex)
             */
            selectedIndex: number;
            /**
             * Sets or gets an element's tooltip.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelThumbnails.html#tooltip)
             */
            tooltip: string;
            /**
             * Sets or gets an element's value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelThumbnails.html#value)
             */
            value: string;
            /**
             * Adds an event handler that runs when an input element's value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelThumbnails.html#onChange)
             *  @eventType change
             */
            onChange(handler: EventHandler): Element;
        }
        /**
         * Toggle switches are used in a Blocks panel for a single binary choice.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelToggleSwitch.html#)
         */
        interface PanelToggleSwitch extends HiddenCollapsedMixin, Element, DisabledMixin {
            /**
             * Sets or gets whether the toggle switch is on or off.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelToggleSwitch.html#checked)
             */
            checked: boolean;
            /**
             * Sets or gets the type of divider displayed under the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelToggleSwitch.html#divider)
             */
            divider: string;
            /**
             * Sets or gets the label of an element. Maximum length is 120 characters.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelToggleSwitch.html#label)
             */
            label: string;
            /**
             * Adds an event handler that runs when an input element's value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelToggleSwitch.html#onChange)
             *  @eventType change
             */
            onChange(handler: EventHandler): Element;
        }
        /**
         * Provides functionality for elements that can be played.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#)
         */
        interface PlayableMixin {
            /**
             * Indicates if the element is currently playing.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#isPlaying)
             */
            readonly isPlaying: boolean;
            /**
             * Moves to the next item.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#next)
             */
            next(): Promise<Element & AnyProperties>;
            /**
             * Adds an event handler that runs when playback is paused.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#onPause)
             *  @eventType autoplayOff
             */
            onPause(handler: EventHandler): Gallery & Slideshow;
            /**
             * Adds an event handler that runs when playback is started or restarted.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#onPlay)
             *  @eventType autoplayOn
             */
            onPlay(handler: EventHandler): Gallery & Slideshow;
            /**
             * Pauses playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#pause)
             */
            pause(): void;
            /**
             * Begins or resumes playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#play)
             */
            play(): void;
            /**
             * Moves to the previous image or slide.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#previous)
             */
            previous(): Promise<Element & AnyProperties>;
        }
        /**
         * A post page for a specific blog post.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PostPage.html#)
         */
        interface PostPage extends Element, HiddenCollapsedMixin {
            /**
             * Gets the all the information associated with the current blog post.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.PostPage.html#getPost)
             */
            getPost(): Promise<PostPage.BlogPost>;
        }
        /**
         * A store page for a specific product.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#)
         */
        interface ProductPage extends Element, HiddenCollapsedMixin {
            /**
             * Gets the values of a product's [custom text fields](https://support.wix.com/en/article/wix-stores-allowing-customers-to-add-a-message-when-purchasing-a-product).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#getCustomText)
             */
            getCustomText(): Promise<string[]>;
            /**
             * Gets all the information associated with the current product.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#getProduct)
             */
            getProduct(): Promise<ProductPage.Product>;
            /**
             * Gets the quantity of a product on the Product Page.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#getQuantity)
             */
            getQuantity(): Promise<number>;
            /**
             * Gets the selected [product option](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options) choices of a product on the Product Page.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#getSelectedChoices)
             */
            getSelectedChoices(): Promise<any>;
            /**
             * Gets the variant ID of the selected [product variant](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#getSelectedVariantId)
             */
            getSelectedVariantId(): Promise<string>;
            /**
             * Adds an event handler that runs when the **Add To Cart** button on the Product Page is clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#onAddToCart)
             */
            onAddToCart(addToCartEventHandler: ProductPage.addToCartEventHandler): Promise<void>;
            /**
             * Adds an event handler that runs when the **Buy Now** button on the Product Page is clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#onBuyNow)
             */
            onBuyNow(buyNowEventHandler: ProductPage.buyNowEventHandler): Promise<void>;
            /**
             * Adds an event handler that runs when a [product option](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options) choice is selected.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#onChoiceSelected)
             */
            onChoiceSelected(choiceSelectedEventhandler: ProductPage.choiceSelectedEventHandler): Promise<void>;
            /**
             * Adds an event handler that runs when a product's quantity is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#onQuantityChanged)
             */
            onQuantityChanged(quantityChangedEventHandler: ProductPage.quantityChangedEventHandler): Promise<void>;
            /**
             * Sets the **Add To Cart** button's label.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#setAddToCartLabel)
             */
            setAddToCartLabel(label: string): Promise<void>;
            /**
             * Sets the **Buy Now** button's label.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#setBuyNowLabel)
             */
            setBuyNowLabel(label: string): Promise<void>;
            /**
             * Sets the quantity of a product on the Product Page.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#setQuantity)
             */
            setQuantity(value: number): Promise<void>;
        }
        /**
         * A [progress bar](https://support.wix.com/en/article/velo-working-with-the-progress-bar-element) is an element for displaying the status of an ongoing process.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ProgressBar.html#)
         */
        interface ProgressBar extends Element, HiddenCollapsedMixin, StyleMixin {
            /**
             * Gets an object containing information about the progress bar's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProgressBar.html#style)
             */
            readonly style: Style;
            /**
             * Sets or gets a progress bar's target value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProgressBar.html#targetValue)
             */
            targetValue: number;
            /**
             * Sets or gets a progress bar's value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ProgressBar.html#value)
             */
            value: number;
        }
        /**
         * A [quick action bar](https://support.wix.com/en/article/adding-and-setting-up-the-quick-action-bar-on-your-mobile-site)
         *  helps your visitors contact you instantly from their mobile devices.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.QuickActionBar.html#)
         */
        interface QuickActionBar extends HiddenCollapsedMixin, StyleMixin {
            /**
             * Sets or gets a quick action bar's alignment.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.QuickActionBar.html#alignment)
             */
            alignment: boolean;
            /**
             * Sets or gets a quick action bar's color scheme.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.QuickActionBar.html#colorScheme)
             */
            colorScheme: string;
            /**
             * Sets or gets whether a quick action bar's color scheme is inverted.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.QuickActionBar.html#invertColorScheme)
             */
            invertColorScheme: boolean;
            /**
             * Sets or gets whether a quick action bar's labels are shown.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.QuickActionBar.html#showLabels)
             */
            showLabels: boolean;
            /**
             * Adds an event handler that runs when an item in a quick action bar is
             *  clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.QuickActionBar.html#onItemClicked)
             *  @eventType itemClicked
             */
            onItemClicked(handler: QuickActionBarItemClickedEventHandler): QuickActionBar;
        }
        /**
         * Event that is fired when a quick action bar item is clicked.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.QuickActionBarItemClickedEvent.html#)
         */
        interface QuickActionBarItemClickedEvent extends Event {
            /**
             * Gets the gallery item.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.QuickActionBarItemClickedEvent.html#item)
             */
            readonly item: QuickActionBarItemClickedEvent.QuickActionBarItem;
            /**
             * Gets the quick action bar item's index.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.QuickActionBarItemClickedEvent.html#itemIndex)
             */
            readonly itemIndex: number;
        }
        /**
         * [Radio button groups](https://support.wix.com/en/article/content-manager-adding-and-setting-up-radio-buttons) are used for selecting one of a number of
         *  options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html#)
         */
        interface RadioButtonGroup extends LabelMixin, FormElement, HiddenCollapsedMixin, DisabledMixin, FocusMixin, ClickableMixin, StyleMixin, RequiredMixin {
            /**
             * Sets or gets the options in a radio button group.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html#options)
             */
            options: RadioButtonGroup.Option[];
            /**
             * Sets or gets the index of the selected option.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html#selectedIndex)
             */
            selectedIndex: number;
            /**
             * Gets an object containing information about the radio button group's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html#style)
             */
            readonly style: Style;
            /**
             * Sets or gets the value of the selected option.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html#value)
             */
            value: string;
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html#onCustomValidation)
             */
            onCustomValidation(validator: RadioButtonGroupValidator, override?: boolean): void;
        }
        /**
         * [Range sliders](https://support.wix.com/en/article/content-manager-adding-and-setting-up-a-range-slider)
         * allow site visitors to select a range of values within a given range.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.RangeSlider.html#)
         */
        interface RangeSlider extends Element, ValueMixin, DisabledMixin, HiddenCollapsedMixin, FocusMixin {
            /**
             * Sets or gets the label of a range slider.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RangeSlider.html#label)
             */
            label: string;
            /**
             * Sets or gets the maximum value of a range slider.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RangeSlider.html#max)
             */
            max: number;
            /**
             * Sets or gets the minimum value of a range slider.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RangeSlider.html#min)
             */
            min: number;
            /**
             * Sets or gets the prefix of a range slider's value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RangeSlider.html#prefix)
             */
            prefix: string;
            /**
             * Sets or gets a range slider's type.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RangeSlider.html#sliderType)
             */
            sliderType: string;
            /**
             * Sets or gets a range slider's step value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RangeSlider.html#step)
             */
            step: number;
            /**
             * Sets or gets a range slider's step type.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RangeSlider.html#stepType)
             */
            stepType: string;
            /**
             * Sets or gets the suffix of a range slider's value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RangeSlider.html#suffix)
             */
            suffix: string;
            /**
             * Sets or gets the value(s) of a range slider's handle(s).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RangeSlider.html#value)
             */
            value: number | number[];
        }
        /**
         * A [ratings display](https://support.wix.com/en/article/content-manager-adding-and-setting-up-a-ratings-display-element)
         * element allows you to display a value to your users
         *  using icons.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.RatingsDisplay.html#)
         */
        interface RatingsDisplay extends Element, HiddenCollapsedMixin, ClickableMixin {
            /**
             * Sets or gets the displayed number of ratings.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RatingsDisplay.html#numRatings)
             */
            numRatings: number;
            /**
             * Sets or gets the displayed rating.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RatingsDisplay.html#rating)
             */
            rating: number;
        }
        /**
         * A [ratings input](https://support.wix.com/en/article/content-manager-adding-and-setting-up-a-ratings-input-element)
         *  element allows you to capture a value from your users
         *  using icons.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.RatingsInput.html#)
         */
        interface RatingsInput extends FormElement, DisabledMixin, RequiredMixin, HiddenCollapsedMixin, FocusMixin, ClickableMixin, ViewportMixin {
            /**
             * Sets or gets the rating value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RatingsInput.html#value)
             */
            value: number;
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RatingsInput.html#onCustomValidation)
             */
            onCustomValidation(validator: RatingsInput.RatingsInputValidator, override?: boolean): void;
            /**
             * Sets the function that runs when a user's mouse enters one of the rating icons.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RatingsInput.html#onIconMouseIn)
             *  @eventType IconMouseIn
             */
            onIconMouseIn(handler: IconMouseInEventHandler): RatingsInput;
        }
        /**
         * The [React component](https://dev.wix.com/docs/develop-websites/articles/wix-editor-elements/react-components/about-the-wix-react-component) element allows you to add your own [React](https://react.dev/) component.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ReactComponent.html#)
         */
        interface ReactComponent extends Element, HiddenCollapsedMixin {
            /**
             * Sets or gets the React component's [props](https://react.dev/learn/passing-props-to-a-component).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ReactComponent.html#props)
             */
            props: any;
        }
        /**
         * Event that is fired when a specific action is performed on the React element.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ReactEvent.html#)
         */
        interface ReactEvent {
            /**
             * Gets the context in which an event was fired.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ReactEvent.html#context)
             */
            readonly context: Event.EventContext;
            /**
             * Gets the React component's $w element that the event was fired on.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ReactEvent.html#wixTarget)
             */
            wixTarget: Element;
        }
        /**
         * Provides functionality for input elements that support readonly mode.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ReadOnlyMixin.html#)
         */
        interface ReadOnlyMixin {
            /**
             * Sets or gets if a user can modify the value of the input element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ReadOnlyMixin.html#readOnly)
             */
            readOnly: boolean;
        }
        /**
         * The [repeater](https://support.wix.com/en/article/wix-editor-adding-and-managing-repeaters-lists-grids)
         * element is used to create repeating layouts on a site page.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Repeater.html#)
         */
        interface Repeater extends Element, HiddenCollapsedMixin, EffectsMixin {
            /**
             * Sets or gets the repeater data.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Repeater.html#data)
             */
            data: any[];
            /**
             * Runs a function for each repeated item.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Repeater.html#forEachItem)
             */
            forEachItem(callback: ForItemCallback): void;
            /**
             * Runs a function for each repeated item with the given IDs.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Repeater.html#forItems)
             */
            forItems(itemIds: string[], callback: ForItemCallback): void;
            /**
             * Sets the function that runs when a new repeated item is created.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Repeater.html#onItemReady)
             *  @eventType itemReady
             */
            onItemReady(handler: ItemReadyEventHandler): Repeater;
            /**
             * Sets the function that runs when a repeated item is removed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Repeater.html#onItemRemoved)
             *  @eventType itemRemoved
             */
            onItemRemoved(handler: ItemRemovedEventHandler): Repeater;
        }
        /**
         * Provides functionality for input elements that can be required to have a value.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.RequiredMixin.html#)
         */
        interface RequiredMixin {
            /**
             * Sets or gets whether an input element is required to have a value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RequiredMixin.html#required)
             */
            required: boolean;
        }
        /**
         * The Rich Content Viewer is an element that displays rich content created using the
         * [Rich Content Editor](https://support.wix.com/en/article/cms-formerly-content-manager-working-with-rich-content-and-adding-it-to-a-dynamic-page)
         * in the CMS (Content Management System).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.RichContentViewer.html#)
         */
        interface RichContentViewer extends Element, HiddenCollapsedMixin {
            /**
             * Sets or gets the element's content.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RichContentViewer.html#content)
             */
            content: any | null;
        }
        /**
         * A [rich text box](https://support.wix.com/article/content-manager-adding-and-setting-up-a-text-input)
         * is an input element for entering information in rich text format.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.RichTextBox.html#)
         */
        interface RichTextBox extends FormElement, DisabledMixin, TextInputMixin, HiddenCollapsedMixin, FocusMixin, ReadOnlyMixin, ClickableMixin, RequiredMixin {
            /**
             * **This standard element function is not supported for RichTextBox.**
             * 	[Read more](https://www.wix.com/corvid/reference/$w.RichTextBox.html#onInput)
             */
            onInput(eventHandler: EventHandler): Element;
        }
        /**
         * [Section](https://support.wix.com/en/article/wix-editor-about-sections) is a container component used to divide your page into meaningful segments.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Section.html#)
         */
        interface Section extends Element, Background, HiddenCollapsedMixin, ClickableMixin, ContainableMixin, EffectsMixin {
        }
        /**
         * [Selection tags](https://support.wix.com/en/article/adding-and-setting-up-selection-tags) are used for selecting one or more options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.SelectionTags.html#)
         */
        interface SelectionTags extends FormElement, HiddenCollapsedMixin, DisabledMixin, ClickableMixin, StyleMixin, RequiredMixin, ValidatableMixin {
            /**
             * Sets or gets a list of items which will be rendered as tags.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SelectionTags.html#options)
             */
            options: SelectionTags.Option[];
            /**
             * Sets or gets the indices of the selected options.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SelectionTags.html#selectedIndices)
             */
            selectedIndices: number[];
            /**
             * Gets an object containing information about the selection tags' styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SelectionTags.html#style)
             */
            readonly style: Style;
            /**
             * Sets or gets the values of the selected options.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SelectionTags.html#value)
             */
            value: string[];
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SelectionTags.html#onCustomValidation)
             */
            onCustomValidation(validator: SelectionTags.SelectionTagsValidator, override?: boolean): void;
        }
        /**
         * [Signature input](https://support.wix.com/en/article/wix-forms-adding-a-signature-field) lets site visitors enter signatures.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.SignatureInput.html#)
         */
        interface SignatureInput extends LabelMixin, FormElement, HiddenCollapsedMixin, DisabledMixin, FocusMixin, StyleMixin, RequiredMixin {
            /**
             * Gets an object containing information about the signature input element's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SignatureInput.html#style)
             */
            readonly style: Style;
            /**
             * Gets the value of a signature input.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SignatureInput.html#value)
             */
            readonly value: string;
            /**
             * Clears the signature.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SignatureInput.html#clear)
             */
            clear(): void;
            /**
             * Adds an event handler that runs when a signature input element's value
             *  is changed by a site visitor.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SignatureInput.html#onChange)
             */
            onChange(handler: EventHandler): SignatureInput;
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SignatureInput.html#onCustomValidation)
             */
            onCustomValidation(validator: SignatureInput.SignatureInputValidator, override?: boolean): void;
        }
        /**
         * A [slide](https://support.wix.com/en/article/wix-editor-managing-the-slides-in-your-slideshow)
         * from a [slideshow]($w.Slideshow.html) that can contain other elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Slide.html#)
         */
        interface Slide extends Element, Background, ContainableMixin {
            /**
             * Gets the slide's ID.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slide.html#id)
             */
            readonly id: string;
            /**
             * Gets the name of the slide.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slide.html#name)
             */
            readonly name: string;
        }
        /**
         * [Sliders](https://support.wix.com/en/article/adding-and-setting-up-a-slider) allow users to select a number from a given range.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Slider.html#)
         */
        interface Slider extends Element, ValueMixin, DisabledMixin, HiddenCollapsedMixin, FocusMixin {
            /**
             * Sets or gets the slider's maximum value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slider.html#max)
             */
            max: number;
            /**
             * Sets or gets the slider's minimum value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slider.html#min)
             */
            min: number;
            /**
             * Sets or gets a slider's step value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slider.html#step)
             */
            step: number;
            /**
             * Sets or gets a slider's step type.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slider.html#stepType)
             */
            stepType: string;
            /**
             * Sets or gets the value of the slider.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slider.html#value)
             */
            value: number;
        }
        /**
         * [Slideshows](https://support.wix.com/en/article/wix-editor-adding-and-setting-up-a-slideshow) are playable containers for slides.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Slideshow.html#)
         */
        interface Slideshow extends Element, HiddenCollapsedMixin, PlayableMixin, ClickableMixin, ContainableMixin {
            /**
             * Gets the index of the slideshow's current slide.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slideshow.html#currentIndex)
             */
            readonly currentIndex: number;
            /**
             * Gets the slideshow's current slide.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slideshow.html#currentSlide)
             */
            readonly currentSlide: Slide;
            /**
             * Sets or gets whether a slideshow's navigation buttons are shown.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slideshow.html#showNavigationButtons)
             */
            showNavigationButtons: boolean;
            /**
             * Set or returns whether a slideshow's slide buttons are shown.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slideshow.html#showSlideButtons)
             */
            showSlideButtons: boolean;
            /**
             * Gets a list of all the slides contained in the slideshow.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slideshow.html#slides)
             */
            readonly slides: Slide[];
            /**
             * Change the slideshow's current slide to a specific slide or index.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slideshow.html#changeSlide)
             */
            changeSlide(slideReference: number | Slide): Promise<Slide>;
            /**
             * Adds an event handler that runs when the slideshow moves to a new slide.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Slideshow.html#onChange)
             *  @eventType change
             */
            onChange(eventHandler: EventHandler): Slideshow;
        }
        /**
         * The [slideshow button](https://support.wix.com/en/article/wix-editor-displaying-navigation-buttons-and-arrows-on-your-slideshow)
         * is a button element on a [slideshow]($w.Slideshow.html).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.SlideshowButton.html#)
         */
        interface SlideshowButton extends Element, HiddenCollapsedMixin, DisabledMixin, ClickableMixin, StyleMixin, LabelMixin, EffectsMixin {
            /**
             * Sets or gets the icon image displayed on the slideshow button.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SlideshowButton.html#icon)
             */
            icon: string;
            /**
             * Indicates if the slideshow button icon is collapsed or expanded.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SlideshowButton.html#iconCollapsed)
             */
            readonly iconCollapsed: boolean;
            /**
             * Sets or gets the label of a slideshow button.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SlideshowButton.html#label)
             */
            label: string;
            /**
             * Gets an object containing information about the styles of a slideshow button.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SlideshowButton.html#style)
             */
            readonly style: Style;
            /**
             * Collapses the icon of a slideshow button and sets its `iconCollapsed` property to `true`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SlideshowButton.html#collapseIcon)
             */
            collapseIcon(): Promise<void>;
            /**
             * Expands the slideshow button icon and sets its `iconCollapsed` property to `false`.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SlideshowButton.html#expandIcon)
             */
            expandIcon(): Promise<void>;
            /**
             * Adds an event handler that runs when the pointer is moved
             *  onto the element.
             *
             *  You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SlideshowButton.html#onMouseIn)
             */
            onMouseIn(handler: MouseEventHandler): SlideshowButton;
            /**
             * Adds an event handler that runs when the pointer is moved
             *  off of the element.
             *
             *  You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.SlideshowButton.html#onMouseOut)
             */
            onMouseOut(handler: MouseEventHandler): SlideshowButton;
        }
        /**
         * A [state](https://dev.wix.com/docs/develop-websites/articles/wix-editor-elements/other-elements/multi-state-boxes/setting-up-your-multi-state-box#navigate-your-states)
         * from a [multi-state box]($w.MultiStateBox.html) that can contain other elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.State.html#)
         */
        interface State extends Element, Background, ContainableMixin {
            /**
             * Gets the state's ID.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.State.html#id)
             */
            readonly id: string;
        }
        /**
         * An object representing an element's styles.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#)
         */
        interface Style {
            /**
             * Sets or gets the background color of an element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#backgroundColor)
             */
            backgroundColor: string;
            /**
             * Sets or gets the border color of an element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#borderColor)
             */
            borderColor: string;
            /**
             * Sets or gets the border radius of an element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#borderRadius)
             */
            borderRadius: string;
            /**
             * Sets or gets the border width of an element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#borderWidth)
             */
            borderWidth: string;
            /**
             * Sets or gets the text color of an element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#color)
             */
            color: string;
            /**
             * Sets or gets the foreground color of an element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Style.html#foregroundColor)
             */
            foregroundColor: string;
        }
        /**
         * Provides functionality for elements that can be styled.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.StyleMixin.html#)
         */
        interface StyleMixin {
            /**
             * Gets an object containing information about the element's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.StyleMixin.html#style)
             */
            readonly style: Style;
        }
        /**
         * [Switches](https://support.wix.com/en/article/adding-and-setting-up-a-switch-element) are used for a single binary choice.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Switch.html#)
         */
        interface Switch extends Element, DisabledMixin, HiddenCollapsedMixin, FocusMixin, ClickableMixin, ValueMixin, CheckedMixin {
            /**
             * Sets or gets whether a switch is on or off.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Switch.html#checked)
             */
            checked: boolean;
            /**
             * **Note: This standard element property is not relevant for Switch. Use [`checked`](#checked) instead.**
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Switch.html#value)
             */
            readonly value: string;
        }
        /**
         * A [tab](https://support.wix.com/en/article/wix-editor-about-tabs) within a [tabs]($w.Tabs.html) element.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Tab.html#)
         */
        interface Tab extends Element, Background, ContainableMixin {
            /**
             * Gets the tab's ID.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Tab.html#id)
             */
            readonly id: string;
            /**
             * Sets or gets the tab's label.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Tab.html#label)
             */
            label: string;
            /**
             * Gets the element's type.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Tab.html#type)
             */
            readonly type: string;
        }
        /**
         * A [table](https://support.wix.com/en/article/content-manager-displaying-collection-content-in-a-table) for displaying data.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#)
         */
        interface Table extends Element, HiddenCollapsedMixin, ClickableMixin {
            /**
             * Sets or gets the defining properties of the columns in a table.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#columns)
             */
            columns: Table.Column[];
            /**
             * Sets the function that is called when a new page of table data is to be displayed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#dataFetcher)
             */
            dataFetcher: Function;
            /**
             * Sets or gets the table's pagination options.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#pagination)
             */
            pagination: Table.PaginationOptions;
            /**
             * Sets or gets the table's row data.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#rows)
             */
            rows: any[];
            /**
             * Adds an event handler that runs when a table cell is selected.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#onCellSelect)
             *  @eventType cellSelect
             */
            onCellSelect(eventHandler: TableCellEventHandler): Table;
            /**
             * Adds an event handler that runs when the table's data is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#onDataChange)
             *  @eventType dataChange
             */
            onDataChange(eventHandler: EventHandler): void;
            /**
             * Adds an event handler that runs when a table row is selected.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#onRowSelect)
             *  @eventType rowSelect
             */
            onRowSelect(eventHandler: TableRowEventHandler): Table;
            /**
             * Fetches the most current data and updates the table.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#refresh)
             */
            refresh(): void;
            /**
             * Selects a table row by index.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#selectRow)
             */
            selectRow(index: number): void;
            /**
             * Updates the row data of a single row at the specified index.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#updateRow)
             */
            updateRow(index: number, rowData: any): void;
        }
        /**
         * Event that is fired when a table cell is selected.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.TableCellEvent.html#)
         */
        interface TableCellEvent extends Event {
            /**
             * Gets the column ID of the selected cell.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TableCellEvent.html#cellColumnId)
             */
            readonly cellColumnId: string;
            /**
             * Gets the data from the selected cell.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TableCellEvent.html#cellData)
             */
            readonly cellData: string;
            /**
             * Gets the row index of the selected cell.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TableCellEvent.html#cellRowIndex)
             */
            readonly cellRowIndex: number;
        }
        /**
         * Event that is fired when a table row is selected.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.TableRowEvent.html#)
         */
        interface TableRowEvent extends Event {
            /**
             * Gets the data for the selected row.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TableRowEvent.html#rowData)
             */
            readonly rowData: any;
            /**
             * Gets the index of the selected row.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TableRowEvent.html#rowIndex)
             */
            readonly rowIndex: number;
        }
        /**
         * A [tabs](https://support.wix.com/en/article/wix-editor-about-tabs) element is a container that holds multiple
         * [tabs]($w.Tab.html), displaying one at a time.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Tabs.html#)
         */
        interface Tabs extends Element, HiddenCollapsedMixin, ClickableMixin, ContainableMixin {
            /**
             * Gets the tab currently displayed in the tabs element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Tabs.html#currentTab)
             */
            readonly currentTab: Tab;
            /**
             * Gets the tabs element's default tab.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Tabs.html#defaultTab)
             */
            readonly defaultTab: Tab;
            /**
             * Gets a list of all the tabs contained in the tabs element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Tabs.html#tabs)
             */
            readonly tabs: Tab[];
            /**
             * Gets the element's type.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Tabs.html#type)
             */
            readonly type: string;
            /**
             * Changes the tabs element's current tab.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Tabs.html#changeTab)
             */
            changeTab(tabReference: string | Tab): Promise<Tab>;
            /**
             * Adds an event handler that runs when the tabs element moves to a different tab.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Tabs.html#onChange)
             *  @eventType change
             */
            onChange(eventHandler: EventHandler): void;
            /**
             * Adds an event handler that runs when any tab menu item is clicked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Tabs.html#onTabItemClicked)
             *  @eventType click
             */
            onTabItemClicked(eventHandler: EventHandler): Tabs;
            /**
             * Changes the order of the tabs in a tabs element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Tabs.html#orderTabs)
             */
            orderTabs(orderedTabIds: string[] | Tab[]): Promise<void>;
        }
        /**
         * [Text](https://support.wix.com/en/article/wix-editor-adding-and-editing-text) provides functionality for text elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Text.html#)
         */
        interface Text extends Element, HiddenCollapsedMixin, ClickableMixin, EffectsMixin {
            /**
             * Sets or gets the contents of a text element using standard HTML.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Text.html#html)
             */
            html: string;
            /**
             * Sets or gets the plain-text contents of a text element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Text.html#text)
             */
            text: string;
        }
        /**
         * [Text box](https://support.wix.com/en/article/wix-editor-adding-and-editing-text) is an input element for capturing large amounts of text.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.TextBox.html#)
         */
        interface TextBox extends LabelMixin, FormElement, DisabledMixin, TextInputMixin, HiddenCollapsedMixin, FocusMixin, ReadOnlyMixin, ClickableMixin, StyleMixin, RequiredMixin {
            /**
             * Gets an object containing information about the text box's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextBox.html#style)
             */
            readonly style: Style;
            /**
             * Sets or gets a text input's value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextBox.html#value)
             */
            value: string;
            /**
             * Determines if the text contains line breaks when its value is read.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextBox.html#wrap)
             */
            wrap: string;
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextBox.html#onCustomValidation)
             */
            onCustomValidation(validator: TextBoxValidator, override?: boolean): void;
        }
        /**
         * [Text input](https://support.wix.com/en/article/content-manager-adding-and-setting-up-a-text-input) is an element for capturing small amounts of text.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInput.html#)
         */
        interface TextInput extends LabelMixin, FormElement, HiddenCollapsedMixin, DisabledMixin, TextInputMixin, FocusMixin, ReadOnlyMixin, ClickableMixin, StyleMixin, RequiredMixin {
            /**
             * Sets or gets the input type of an Input element. Does not change the type of data stored in the text input's `value` property, which will remain a string.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInput.html#inputType)
             */
            inputType: string;
            /**
             * Sets or gets the maximum value for a text input element whose
             *  type is set to **Number**.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInput.html#max)
             */
            max: number;
            /**
             * Sets or gets the minimum value for a text input element whose
             *  type is set to **Number**.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInput.html#min)
             */
            min: number;
            /**
             * Indicates if the number spinner is hidden or visible for a numeric text input element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInput.html#numberSpinnerHidden)
             */
            readonly numberSpinnerHidden: boolean;
            /**
             * Gets an object containing information about the text input's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInput.html#style)
             */
            readonly style: Style;
            /**
             * Gets a ValidityState object that contains
             *  detailed information about the validity states of the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInput.html#validity)
             */
            readonly validity: ValidatableMixin.ValidityState;
            /**
             * Sets or gets a text input's value. This value will always be of type string, regardless of the text input's [`inputType`](#inputtype).
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInput.html#value)
             */
            value: string;
            /**
             * Hides the number spinner for a numeric text input.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInput.html#hideNumberSpinner)
             */
            hideNumberSpinner(): void;
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInput.html#onCustomValidation)
             */
            onCustomValidation(validator: TextInputValidator, override?: boolean): void;
            /**
             * Shows the number spinner for a numeric text input.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInput.html#showNumberSpinner)
             */
            showNumberSpinner(): void;
        }
        /**
         * Provides functionality for elements that accept text as input.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#)
         */
        interface TextInputMixin {
            /**
             * Sets or gets the maximum number of characters that can be entered.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#maxLength)
             */
            maxLength: number;
            /**
             * Sets or gets the element's placeholder text.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#placeholder)
             */
            placeholder: string;
            /**
             * Adds an event handler that runs when the input element receives
             * input.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#onInput)
             *  @eventType onInput
             */
            onInput(eventHandler: EventHandler): Element;
            /**
             * Adds an event handler that runs when the cursor is inside the
             *  input element and a key is pressed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#onKeyPress)
             *  @eventType keyPress
             */
            onKeyPress(eventHandler: KeyboardEventHandler): Element;
        }
        /**
         * The TextMask element is used for masking media inside text.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.TextMask.html#)
         */
        interface TextMask extends Element, Background, HiddenCollapsedMixin, LinkableMixin {
            /**
             * Sets or gets an object containing information about the TextMask's background.
             *
             * Setting the `src` property sets the source of the TextMask's background. The `src` property can be set to an image or a video. Images can either be from the [Media Manager](https://support.wix.com/en/article/about-the-media-manager) or an external image from any web location. Videos must come from the Media Manager.
             *
             * The supported URL formats are:
             * + Images from the Media Manager: `wix:image://v1//#originWidth=&originHeight=[&watermark=]`
             * + Videos from the Media Manager: `wix:video://v1//#posterUri=&posterWidth=&posterHeight=`
             * + Images from the web: `http(s)://`
             *
             * The URL for Media Manager images and videos is the `fileUrl` value returned by the [`listFiles()`](https://www.wix.com/velo/reference/wix-media-v2/files/listfiles) function.
             *
             * Getting the `src` property gets the source of the TextMask's background.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextMask.html#background)
             */
            background: Background.BackgroundOptions;
            /**
             * Sets or gets the plain-text content of a TextMask element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TextMask.html#text)
             */
            text: string;
        }
        /**
         * A thank you page displayed when an order is created.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ThankYouPage.html#)
         */
        interface ThankYouPage extends Element, HiddenCollapsedMixin {
            /**
             * Gets the order associated with the current page.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ThankYouPage.html#getOrder)
             */
            getOrder(): Promise<ThankYouPage.Order>;
        }
        /**
         * [Time picker](https://support.wix.com/en/article/time-picker-settings) is an input element for capturing the time of day.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.TimePicker.html#)
         */
        interface TimePicker extends LabelMixin, FocusMixin, DisabledMixin, HiddenCollapsedMixin, RequiredMixin, ReadOnlyMixin, FormElement {
            /**
             * Sets or gets the time slots that are available for a time picker.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TimePicker.html#enabledTimes)
             */
            enabledTimes: TimePicker.TimeSlot[];
            /**
             * Sets or gets the number of minutes the time picker steps.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TimePicker.html#step)
             */
            step: number;
            /**
             * Sets or gets whether the time picker uses 12-hour or 24-hour format.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TimePicker.html#useAmPmFormat)
             */
            useAmPmFormat: boolean;
            /**
             * Sets or gets a time picker's value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TimePicker.html#value)
             */
            value: string;
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.TimePicker.html#onCustomValidation)
             */
            onCustomValidation(validator: TimePicker.TimePickerValidator, override?: boolean): void;
        }
        /**
         * An [upload button](https://support.wix.com/en/article/content-manager-adding-and-setting-up-an-upload-button) enables site visitors to upload files to your site.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#)
         */
        interface UploadButton extends LabelMixin, FormElement, HiddenCollapsedMixin, DisabledMixin, FocusMixin, StyleMixin, RequiredMixin {
            /**
             * Sets or gets the label on the upload button.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#buttonLabel)
             */
            buttonLabel: string;
            /**
             * Sets or gets the maximum amount of files a site visitor can upload at a time.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#fileLimit)
             */
            fileLimit: number;
            /**
             * Sets or gets the type of file a site visitor can upload.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#fileType)
             */
            fileType: string;
            /**
             * Gets an object containing information about the upload button's styles.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#style)
             */
            readonly style: Style;
            /**
             * Indicates if a required file was selected, and if the file is valid for upload to the Media Manager.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#valid)
             */
            readonly valid: boolean;
            /**
             * Gets a message indicating why the file is invalid or could not be uploaded. Contains
             *  empty string if the file is valid and successfully uploaded.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#validationMessage)
             */
            readonly validationMessage: string;
            /**
             * Gets a ValidityState object that contains
             *  detailed information about the validity states of the file to upload.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#validity)
             */
            readonly validity: UploadButton.ValidityState;
            /**
             * Returns a list of files that are pending upload.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#value)
             */
            readonly value: UploadButton.File[];
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#onCustomValidation)
             */
            onCustomValidation(validator: UploadButtonValidator, override?: boolean): void;
            /**
             * Clears the files that are pending upload.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#reset)
             */
            reset(): void;
            /**
             * **Deprecated.** This function will continue to work, but a newer version is available. Use the
             * [`uploadFiles()`](#uploadFiles) function instead.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#startUpload)
             */
            startUpload(): Promise<UploadButton.UploadFile>;
            /**
             * Uploads the files that the site visitor has chosen.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#uploadFiles)
             */
            uploadFiles(): Promise<UploadButton.UploadedFile[]>;
        }
        /**
         * Provides functionality for elements that can be validated.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ValidatableMixin.html#)
         */
        interface ValidatableMixin {
            /**
             * Indicates if an input element's value is valid.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ValidatableMixin.html#valid)
             */
            readonly valid: boolean;
            /**
             * Gets a message indicating why the element is invalid, or an
             *  empty string if the message is valid.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ValidatableMixin.html#validationMessage)
             */
            readonly validationMessage: string;
            /**
             * Gets a ValidityState object that contains
             *  detailed information about the validity states of the element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ValidatableMixin.html#validity)
             */
            readonly validity: ValidatableMixin.ValidityState;
            /**
             * Adds an event handler that runs when the element's validation is checked.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ValidatableMixin.html#onCustomValidation)
             */
            onCustomValidation(validator: Validator, override?: boolean): void;
            /**
             * Resets the element's visual validity indication.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ValidatableMixin.html#resetValidityIndication)
             */
            resetValidityIndication(): void;
            /**
             * Updates the element's visual validity indication based on its current validity state.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ValidatableMixin.html#updateValidityIndication)
             */
            updateValidityIndication(): void;
        }
        /**
         * Adds the value property to elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#)
         */
        interface ValueMixin {
            /**
             * Sets or gets an element's value.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#value)
             */
            value: any;
            /**
             * Adds an event handler that runs when an input element's value
             *  is changed.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
             *  @eventType change
             */
            onChange(handler: EventHandler): Element;
        }
        /**
         * [Vector images](https://support.wix.com/en/article/wix-editor-about-vector-art) are digital illustrations based on geometric shapes.
         *  They maintain their high quality when resized.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.VectorImage.html#)
         */
        interface VectorImage extends Element, HiddenCollapsedMixin, LinkableMixin, ClickableMixin, EffectsMixin {
            /**
             * Sets or gets the file location of the vector image.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VectorImage.html#src)
             */
            src: string;
        }
        /**
         * **Deprecated.**
         * This API will continue to work, but a newer version is available at
         * [Video Player]($w/videoplayer).
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Video.html#)
         */
        interface Video extends Element, HiddenCollapsedMixin {
            /**
             * Sets or gets the URL of the video.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.Video.html#videoUrl)
             */
            videoUrl: string;
        }
        /**
         * [Video box](https://support.wix.com/en/article/videobox) is an element for displaying videos in customizable video containers.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#)
         */
        interface VideoBox extends Element, HiddenCollapsedMixin {
            /**
             * Gets the current play time from the beginning of the current video, in seconds.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#currentTime)
             */
            readonly currentTime: number;
            /**
             * Gets the total play time of the current video, in seconds.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#duration)
             */
            readonly duration: number;
            /**
             * Indicates if the volume is currently muted.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#isMuted)
             */
            readonly isMuted: boolean;
            /**
             * Indicates if a video is currently playing.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#isPlaying)
             */
            readonly isPlaying: boolean;
            /**
             * Sets or gets the file location of the current video.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#src)
             */
            src: string;
            /**
             * Sets or gets the video box volume.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#volume)
             */
            readonly volume: number;
            /**
             * Mutes video box volume.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#mute)
             */
            mute(): Promise<void>;
            /**
             * Adds an event handler that runs when the playback has ended.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onEnded)
             *  @eventType onEnded
             */
            onEnded(handler: EventHandler): VideoBox;
            /**
             * **Note: This standard element property is not relevant for VideoBox.**
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onMouseIn)
             *  @eventType mouseenter
             */
            onMouseIn(handler: MouseEventHandler): Element;
            /**
             * **Note: This standard element property is not relevant for VideoBox.**
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onMouseOut)
             *  @eventType mouseleave
             */
            onMouseOut(handler: MouseEventHandler): Element;
            /**
             * Adds an event handler that runs when the playback is paused.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onPause)
             *  @eventType onPause
             */
            onPause(handler: EventHandler): VideoBox;
            /**
             * Adds an event handler that runs when the playback is started or restarted.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onPlay)
             *  @eventType onPlay
             */
            onPlay(handler: EventHandler): VideoBox;
            /**
             * Adds an event handler that runs when the playback progresses.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onProgress)
             *  @eventType onProgress
             */
            onProgress(handler: EventHandler): VideoBox;
            /**
             * Pauses playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#pause)
             */
            pause(): Promise<void>;
            /**
             * Begins or resumes playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#play)
             */
            play(): Promise<void>;
            /**
             * Stops the playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#stop)
             */
            stop(): Promise<void>;
            /**
             * Toggles playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#togglePlay)
             */
            togglePlay(): Promise<void>;
            /**
             * Unmutes video volume.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#unmute)
             */
            unmute(): Promise<void>;
        }
        /**
         * [Video player](https://support.wix.com/en/article/wix-video-displaying-videos-on-your-site) is an element for presenting videos.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#)
         */
        interface VideoPlayer extends Element, HiddenCollapsedMixin {
            /**
             * Gets the current play time from the beginning of the current video, in seconds.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#currentTime)
             */
            readonly currentTime: number;
            /**
             * Sets or gets the description of a video.
             *  > **Notes:**
             *  > - Setting a video description only works when a video player is presenting a
             *  >   video uploaded to your site.
             *  > - Getting a video description does not work when a video player is presenting a
             *  >   video from Facebook, Twitch, or YouTube.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#description)
             */
            description: string;
            /**
             * Gets the total play time of the current video, in seconds.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#duration)
             */
            readonly duration: number;
            /**
             * Indicates if the volume is currently muted.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#isMuted)
             */
            readonly isMuted: boolean;
            /**
             * Indicates if a video is currently playing.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#isPlaying)
             */
            readonly isPlaying: boolean;
            /**
             * Sets or gets the image shown in the video player before the video is played.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#poster)
             */
            poster: string;
            /**
             * Sets or gets the file location of the current video.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#src)
             */
            src: string;
            /**
             * Sets or gets the title displayed in a video player.
             *  > **Notes:**
             *  > - Setting a video title only works when a video player is presenting a
             *  >   video uploaded to your site.
             *  > - Getting a video title does not work when a video player is presenting a
             *  >   video from Facebook, Twitch, or YouTube.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#title)
             */
            title: string;
            /**
             * Sets or gets the video player volume.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#volume)
             */
            volume: number;
            /**
             * Mutes video volume.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#mute)
             */
            mute(): Promise<void>;
            /**
             * Adds an event handler that runs when playback has ended.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#onEnded)
             *  @eventType onEnded
             */
            onEnded(handler: EventHandler): VideoPlayer;
            /**
             * Adds an event handler that runs when playback is paused.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#onPause)
             *  @eventType onPause
             */
            onPause(handler: EventHandler): VideoPlayer;
            /**
             * Adds an event handler that runs when playback is started or restarted.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#onPlay)
             *  @eventType onPlay
             */
            onPlay(handler: EventHandler): VideoPlayer;
            /**
             * Adds an event handler that runs when playback progresses.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#onProgress)
             *  @eventType onProgress
             */
            onProgress(handler: EventHandler): VideoPlayer;
            /**
             * Pauses playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#pause)
             */
            pause(): Promise<void>;
            /**
             * Begins or resumes playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#play)
             */
            play(): Promise<void>;
            /**
             * Moves playback to the specified time, in seconds.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#seek)
             */
            seek(time: number): Promise<void>;
            /**
             * Pauses playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#stop)
             */
            stop(): Promise<void>;
            /**
             * Toggles playback.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#togglePlay)
             */
            togglePlay(): Promise<void>;
            /**
             * Unmutes video volume.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#unmute)
             */
            unmute(): Promise<void>;
        }
        /**
         * The ViewChangeEvent is triggered when the month or year changes on a date picker or appointment field element.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewChangeEvent.html#)
         */
        interface ViewChangeEvent {
            /**
             * Gets the context in which an event was triggered.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewChangeEvent.html#context)
             */
            readonly context: Event.EventContext;
            /**
             * Gets the options that relate to the date picker or appointment field view change event.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewChangeEvent.html#options)
             */
            readonly options: ViewChangeEvent.ViewChangeEventOptions;
            /**
             * Gets the type of event that was triggered.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewChangeEvent.html#type)
             */
            readonly type: string;
        }
        /**
         * Provides functionality for elements that can be scrolled into and out
         *  of view.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#)
         */
        interface ViewportMixin {
            /**
             * Adds an event handler that runs when an element is displayed
             *  in the viewable part of the current window.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
             *  @eventType viewportEnter
             */
            onViewportEnter(handler: EventHandler): Element;
            /**
             * Adds an event handler that runs when an element is no longer
             *  displayed in the viewable part of the current window.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
             *  @eventType viewportLeave
             */
            onViewportLeave(handler: EventHandler): Element;
        }
        /**
         * A [WixEvents](https://support.wix.com/en/article/editor-x-adding-wix-events) element displays your site's events.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.WixEvents.html#)
         */
        interface WixEvents extends Element, HiddenCollapsedMixin {
            /**
             * Sets or gets the event category displayed in a Wix Events element.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixEvents.html#categoryId)
             */
            categoryId: string;
        }
        /**
         * A `$w` element for enabling your site contacts and visitors to work with the Wix Forms app.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.WixForms.html#)
         */
        interface WixForms extends HiddenCollapsedMixin {
            /**
             * Adds an event handler that runs when a site visitor starts to submit a Wix Form yet before the form is actually submitted and sent to the server.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixForms.html#onWixFormSubmit)
             *  @eventType WixFormSubmitEvent
             */
            onWixFormSubmit(eventHandler: WixForms.WixFormSubmitEventHandler): void;
            /**
             * Adds an event handler that runs when a site visitor submits a Wix Form and it is successfully received by the server.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixForms.html#onWixFormSubmitted)
             *  @eventType WixFormSubmittedEvent
             */
            onWixFormSubmitted(eventHandler: WixForms.WixFormSubmittedEventHandler): void;
            /**
             * Adds an event handler that runs when a site visitor is not able to successfully submit a Wix Form to the server.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixForms.html#onWixFormSubmittedError)
             *  @eventType WixFormSubmittedErrorEvent
             */
            onWixFormSubmittedError(eventHandler: WixForms.WixFormSubmittedErrorEventHandler): void;
        }
        /**
         * An event that is fired when a site visitor clicks a submit button on a [`WixForms`](wix-crm.html#$w-wixforms) element and the Wix Form is about to be submitted to the server.
         *  You do not need to import `$w` or `wix-crm` to work with Wix Forms events.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormSubmitEvent.html#)
         */
        interface WixFormSubmitEvent extends Event {
        }
        /**
         * An event that is fired when a site visitor clicks a submit button on a [`WixForms`](wix-crm.html#$w-wixforms) element but the Wix Form is not successfully submitted to the server.
         *  You do not need to import `$w` or `wix-crm` to work with Wix Forms events.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormSubmittedErrorEvent.html#)
         */
        interface WixFormSubmittedErrorEvent extends Event {
            /**
             * Gets the error code for a failed Wix Form submission.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormSubmittedErrorEvent.html#code)
             */
            readonly code: string;
            /**
             * Gets the error message for a failed Wix Form submission.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormSubmittedErrorEvent.html#message)
             */
            readonly message: string;
        }
        /**
         * An event that is fired when a site visitor clicks a submit button on a [`WixForms`](wix-crm.html#$w-wixforms) element and the Wix Form is successfully submitted to the server.
         *  You do not need to import `$w` or `wix-crm` to work with Wix Forms events.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormSubmittedEvent.html#)
         */
        interface WixFormSubmittedEvent extends Event {
        }
        /**
         * A `WixFormsV2` element displays customizable forms, collects all the info that a site visitor entered into the form fields, and lets you track all form submissions in the dashboard.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#)
         */
        interface WixFormsV2 extends Element, HiddenCollapsedMixin {
            /**
             * Gets Wix Form field values.
             * > **Note:**
             * > The `WixFormsV2` element is only available in Wix Studio and Editor X.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#getFieldValues)
             */
            getFieldValues(): WixFormsV2.FormValues;
            /**
             * Gets the total number of steps in a Wix Form.
             * > **Note:**
             * > The `WixFormsV2` element is only available in Wix Studio and Editor X.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#getStepCount)
             */
            getStepCount(): number;
            /**
             * Gets the current step number of a Wix Form. Counting starts from 1.
             * > **Note:**
             * > The `WixFormsV2` element is only available in Wix Studio and Editor X.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#getStepNumber)
             */
            getStepNumber(): number;
            /**
             * Navigates to the given Wix Form step. If an invalid number is passed, `navigateToStep()` doesn't run.
             * > **Note:**
             * > The `WixFormsV2` element is only available in Wix Studio and Editor X.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#navigateToStep)
             */
            navigateToStep(stepNumber: number): void;
            /**
             * Runs a callback when a site visitor changes Wix Form field values.
             * > **Note:**
             * > The `WixFormsV2` element is only available in Wix Studio and Editor X.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#onFieldValueChange)
             */
            onFieldValueChange(callback: WixFormsV2.OnFieldValueChangeCallback): void;
            /**
             * Runs a callback when a Wix Form navigates to another step.
             * > **Note:**
             * > The `WixFormsV2` element is only available in Wix Studio and Editor X.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#onStepNumberChange)
             */
            onStepNumberChange(callback: WixFormsV2.OnStepNumberChangeCallback): void;
            /**
             * Runs a callback when a site visitor starts to submit a Wix Form yet before the form is actually submitted and sent to the server.
             * > **Note:**
             * > The `WixFormsV2` element is only available in Wix Studio and Editor X.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#onSubmit)
             */
            onSubmit(callback: WixFormsV2.OnSubmitCallback): void;
            /**
             * Runs a callback when a site visitor is not able to successfully submit a Wix Form to the server.
             * > **Note:**
             * > The `WixFormsV2` element is only available in Wix Studio and Editor X.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#onSubmitFailure)
             */
            onSubmitFailure(callback: WixFormsV2.OnSubmitFailureCallback): void;
            /**
             * Runs a callback when a site visitor submits a Wix Form and it is successfully received by the server.
             * > **Note:**
             * > The `WixFormsV2` element is only available in Wix Studio and Editor X.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#onSubmitSuccess)
             */
            onSubmitSuccess(callback: WixFormsV2.OnSubmitSuccessCallback): void;
            /**
             * Sets Wix Form field values.
             * Setting the invalid field values fires the `onFieldValuesChange()` callback. The callback returns fields with the valid values previously set.
             * > **Note:**
             * > The `WixFormsV2` element is only available in Wix Studio and Editor X.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#setFieldValues)
             */
            setFieldValues(values: WixFormsV2.FormValues): void;
            /**
             * Submits a Wix Form.
             * > **Note:**
             * > The `WixFormsV2` element is only available in Wix Studio and Editor X.
             * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#submit)
             */
            submit(): Promise<WixFormsV2.FormValues>;
        }
        /**
         * [Address input](https://support.wix.com/en/article/content-manager-adding-and-setting-up-an-address-input-element)
         * is used for entering addresses. It lets users type
         * an address, and suggests exact locations using Google Maps services.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.AddressInput.html#)
         */
        namespace AddressInput {
            /**
             * An object representing a physical address.
             */
            type Address = {
                /**
                 * Address in human-readable format. The formatted address is displayed in the address input element.
                 */
                formatted: string;
                /**
                 * Address coordinates.
                 */
                location?: AddressInput.AddressLocation;
                /**
                 * Address street name and number.
                 */
                streetAddress?: AddressInput.StreetAddress;
                /**
                 * Address city.
                 */
                city?: string;
                /**
                 * Address subdivision of a country, such as a state or province.
                 */
                subdivision?: string;
                /**
                 * Address country.
                 */
                country?: string;
                /**
                 * Address postal code.
                 */
                postalCode?: string;
            };
            /**
             * An object containing a filter for filtering address suggestions
             * in an address input. Suggestions are restricted to addresses within
             * the specified country.
             * > **Note:** Currently only filtering by country is supported.
             */
            type AddressFilter = {
                /**
                 * [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country code.
                 */
                country?: string;
            };
            /**
             * An object containing the coordinates of an address.
             */
            type AddressLocation = {
                /**
                 * Address latitude.
                 */
                latitude: number;
                /**
                 * Address longitude.
                 */
                longitude: number;
            };
            /**
             * An object containing the street name and number of an address.
             */
            type StreetAddress = {
                /**
                 * Street name.
                 */
                name: string;
                /**
                 * Street number.
                 */
                number?: string;
            };
            /**
             * Function that runs when custom validation is checked.
             */
            type AddressInputValidator = (value: AddressInput.Address, reject: Function) => void;
        }
        /**
         * Use an `AppointmentField` to select dates, times, and timezones for scheduling appointments.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.AppointmentField.html#)
         */
        namespace AppointmentField {
            type OperationOptions = {
                /**
                 * Start date of the currently displayed month.
                 */
                startDate: Date;
                /**
                 * End date of the currently displayed month.
                 */
                endDate: Date;
            };
            type dateTimeRange = {
                /**
                 * Date and time of the start of the range.
                 */
                startDateTime: Date;
                /**
                 * Date and time of the end of the range.
                 */
                endDateTime: Date;
            };
            type dateTimeRangeInfo = {
                /**
                 * Date range type. Valid values: `'enabledRanges'`
                 */
                type: string;
                /**
                 * Array of dateTimeRange objects.
                 */
                payload: AppointmentField.dateTimeRange[];
            };
        }
        /**
         * Provides functionality for [background images](https://support.wix.com/en/article/wix-editor-adding-an-image-to-your-page-background) in certain elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Background.html#)
         */
        namespace Background {
            /**
             * An object used by the `background` property that contains the background options.
             */
            type BackgroundOptions = {
                /**
                 * The file location of the background image or video.
                 *  Setting the `src` property changes the
                 *  displayed image or video to the image or video found at the new `src` value.
                 *
                 *  Getting the `src` property returns the
                 *  location of the current image or video file.
                 *
                 *  Images can either be from the [Media Manager](https://support.wix.com/en/article/about-the-media-manager)
                 *  or an external image from any web location. Videos must come from the
                 *  [Media Manager](https://support.wix.com/en/article/about-the-media-manager).
                 *
                 *  The URL formats supported are:
                 *
                 *  + Images from the Media Manager:
                 *    `wix:image://v1//#originWidth=&originHeight=[&watermark=]`
                 *  + Videos from the Media Manager:
                 *    `wix:video://v1//#posterUri=&posterWidth=&posterHeight=`
                 *  + Images from the web:
                 *    `http(s)://`
                 */
                src: string;
            };
        }
        /**
         * [Breadcrumbs](https://support.wix.com/en/article/wix-editor-adding-and-setting-up-breadcrumbs) are used for navigating between site pages.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Breadcrumbs.html#)
         */
        namespace Breadcrumbs {
            /**
             * An object that contains the attributes of a breadcrumbs item.
             */
            type Item = {
                /**
                 * The label of the breadcrumbs item. This is text that the site visitor sees and can click to navigate. Required if `icon` isn't specified. If not specified, `label` is omitted from the returned array.
                 */
                label?: string;
                /**
                 * The icon of the breadcrumbs item. This is a vector image that the site visitor sees and can click to navigate. Required if `label` isn't specified. If not specified, the `icon` key is omitted from the returned array.
                 *
                 *  The vector image file can be an image file from the Media Manager, an external SVG image from any web location, or a literal SVG XML string.
                 *
                 *  The formats supported are:
                 *  + Vector images from the Media Manager: `wix:vector://v1//`
                 *  + Vector images from the web: `http(s)://`
                 *  + Vector XML string: `...`
                 */
                icon?: string;
                /**
                 * Optional link for the breadcrumbs item as a URL relative to your site's home page. This is the link the site visitor navigates to when they click on a breadcrumbs item. The page opens in the same window/tab.
                 *
                 *  If a link isn't specified, it's `undefined` in the breadcrumbs object. The corresponding label or icon isn't clickable.
                 *
                 *  >**Note:**
                 *  > In the default breadcrumbs `items` array generated for a page, any `link` properties contain absolute URLs, not relative ones.
                 */
                link?: string;
                /**
                 * Setting `isCurrent` to `true` for a breadcrumbs item causes the item to appear highlighted in the breadcrumbs element.
                 * You can use this property to indicate which page in a breadcrumbs trail is currently displayed. In a default `items` array, the last item's `isCurrent` value is `true`.
                 * >**Note:** The value of `isCurrent` isn't validated against which page is actually displayed. It can also be set to `true` for multiple breadcrumbs items.
                 */
                isCurrent?: boolean;
            };
        }
        /**
         * The [reCAPTCHA](https://support.wix.com/en/article/velo-about-recaptcha)
         * element allows you to present a challenge-response test to site visitors to determine whether they are human or a bot.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#)
         */
        namespace Captcha {
            /**
             * An error event handler.
             */
            type ErrorHandler = () => void;
            /**
             * A timeout event handler.
             */
            type TimeoutHandler = () => void;
            /**
             * A verification event handler.
             */
            type VerifiedHandler = () => Promise<void> | void;
        }
        /**
         * An icon that leads users to the shopping cart.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.CartIcon.html#)
         */
        namespace CartIcon {
            /**
             * An object used to pass a custom text field when adding a product to
             *  the shopping cart with options.
             */
            type AddToCartCustomTextField = {
                /**
                 * Custom text field title.
                 */
                title: string;
                /**
                 * Custom text field value.
                 */
                value: string;
            };
            /**
             * An object used when adding multiple products to the shopping cart.
             */
            type AddToCartItem = {
                /**
                 * The ID of the product to add to the cart.
                 */
                productId: string;
                /**
                 * The number of product units to add to the cart.
                 */
                quantity: number;
                /**
                 * Specific product options to add to the cart.
                 */
                options?: CartIcon.AddToCartOptions;
            };
            /**
             * An object used when adding a product to the shopping cart with options.
             */
            type AddToCartOptions = {
                /**
                 * Product options to use when adding the product to the cart.
                 * The object contains key:value pairs where the key is the option name and the value is the chosen option value.
                 */
                choices: any;
                /**
                 * Custom text fields to use when adding the product to the cart.
                 */
                customTextFields: CartIcon.AddToCartCustomTextField[];
            };
        }
        /**
         * A [chatbox](https://support.wix.com/en/article/editor-x-adding-and-customizing-chat) is an element for sending and receiving chat messages.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#)
         */
        namespace Chatbox {
            /**
             * An object representing a chat channel.
             */
            type Channel = {
                /**
                 * ID of the channel.
                 */
                id: string;
                /**
                 * Display information associated with the channel.
                 */
                displayData: Chatbox.DisplayData;
                /**
                 * An array of messages sent over the channel. Currently only the last message is included.
                 */
                messages: Chatbox.Message[];
            };
            /**
             * An object containing information about a chat channel.
             */
            type ChannelInfo = {
                /**
                 * ID of a chat channel.
                 */
                channelId?: string;
                /**
                 * Type of chat channel.
                 *  One of the following:
                 *
                 *  + `"Focused"`: Currently focused channel.
                 *  + `"Business"`: Business channel.
                 */
                type?: string;
            };
            /**
             * An object representing display information associated with a [`Channel`](#channel).
             */
            type DisplayData = {
                /**
                 * The image associated with the channel.
                 *  One of the following:
                 *
                 *  + For private social channels, the image associated with the site member's account. If there is no image associated with the account, defaults to the avatar image.
                 *  + For group social channels, the image associated with the chat group.
                 *  + For business channels, `image` is not currently supported.
                 */
                image: string;
                /**
                 * For social channels, the member's name or chat group name. For business channels, the site's [display name](wix-site-backend.generalInfo.html#getSiteDisplayName).
                 */
                name: string;
                /**
                 * Only supported for business channels. Initials of the site's business.
                 */
                initials: string;
            };
            /**
             * An object that contains information about a chat message.
             */
            type Message = {
                /**
                 * ID of the channel on which the message was sent.
                 */
                channelId: string;
                /**
                 * Type of message. Currently only `TEXT` is supported.
                 */
                type: string;
                /**
                 * First 250 characters of the chat message. Currently only text is included in the summary.
                 */
                summary: string;
                /**
                 * The sender's member ID. For a message sent from the site's business, the site owner's member ID.
                 */
                participantId: string;
                /**
                 * Date and time the message was sent.
                 */
                createdAt: Date;
                /**
                 * Content of the message.
                 */
                payload: Chatbox.MessagePayload;
                /**
                 * An object representing additional contextual message information included in a chat message. Only relevant for messages sent using the backend [`sendMessage()`](wix-chat-backend.html#sendMessage) function. Site visitors do not see metadata.
                 */
                metadata?: any;
            };
            /**
             * An object representing a chat message to be sent.
             */
            type MessageInfo = {
                /**
                 * The text to be sent in the message.
                 */
                messageText: string;
                /**
                 * The ID of the channel over which the message is sent. If empty, message is sent to the site's business.
                 */
                channelId?: string;
            };
            /**
             * The content of a chat message.
             */
            type MessagePayload = {
                /**
                 * Text of the chat message.
                 */
                text: string;
            };
        }
        /**
         * [Checkbox groups](https://support.wix.com/en/article/content-manager-adding-and-setting-up-a-checkbox) are used for selecting any number of the given
         *  options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.CheckboxGroup.html#)
         */
        namespace CheckboxGroup {
            /**
             * An object used by the `options` property that contains the attributes of a checkbox item.
             */
            type Option = {
                /**
                 * The value of the checkbox option. This is what you use in code and is what is stored in your collections. Mandatory if `label` is not specified.
                 */
                value?: string;
                /**
                 * The label of the checkbox option. This is what a user sees.  Mandatory if `value` is not specified.
                 */
                label?: string;
            };
        }
        /**
         * [Collapsible text](https://support.wix.com/en/article/adding-and-setting-up-ellipsis-text) is a text element for managing large amounts of text.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.CollapsibleText.html#)
         */
        namespace CollapsibleText {
            /**
             * Expands content overflow on current page.
             */
            type ExpandOnCurrentPage = {
                /**
                 * Text of the read more button. Defaults to `Read more`.
                 */
                readMoreButtonText?: string;
                /**
                 * Text of the read less button. Defaults to `Read less`.
                 */
                readLessButtonText?: string;
                /**
                 * Whether the collapsible text is currently collapsed. Defaults to `true`.
                 */
                collapsed?: boolean;
            };
            /**
             * Links to the content overflow.
             */
            type LinkToContent = {
                /**
                 * Link for the remaining text. Supports all [link types](https://www.wix.com/velo/reference/$w/linkablemixin/link).
                 */
                link: string;
                /**
                 * Determines where the link opens, either in the current page or in a new page.
                 * One of:
                 * `"_blank"`: The link opens in a new tab or window.
                 * `"_self"`: The link opens in the tab or window.
                 *
                 * Defaults to `"_blank"`.
                 *
                 * Note: Link targets are only supported for external web links, for example, `https://www.wix.com`.
                 */
                target?: string;
                /**
                 * Whether the read more button is visible. Defaults to `false`.
                 */
                readMoreButtonVisible?: boolean;
                /**
                 * Text of the read more button. Defaults to 'Link to full article'.
                 */
                readMoreButtonText?: string;
            };
        }
        /**
         * A [date picker](https://dev.wix.com/docs/develop-websites/articles/wix-editor-elements/formatting-layout/formatting-dates#displaying-dates-in-date-pickers)
         * is used for entering dates. It lets site visitors populate a
         * date field by picking a date using a calendar popup.
         * You can enable and disable dates, date ranges, and days of the week  on your date picker.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.DatePicker.html#)
         */
        namespace DatePicker {
            /**
             * An object containing the start and end dates of a range of dates.
             */
            type DateRange = {
                /**
                 * Start date for the range. The `startDate` is inclusive,
                 *  meaning it's included in the range. The start date must be earlier than or the same as the
                 *  end date of the range.
                 */
                startDate: Date;
                /**
                 * End date for the range. The `endDate` is inclusive,
                 *  meaning it's included in the range. The end date must be later than or the same as the
                 *  start date of the range.
                 */
                endDate: Date;
            };
        }
        /**
         * A [Document](https://support.wix.com/en/article/wix-editor-managing-your-sites-pages) is a complete web page, which consists of a Header, Page, and Footer.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Document.html#)
         */
        namespace Document {
            /**
             * An object used by the `background` property that contains the background options.
             */
            type BackgroundOptions = {
                /**
                 * The file location of the background image.
                 *
                 *  Setting the `src` property changes the
                 *  displayed image or video to the image or video found at the new `src` value.
                 *
                 *  Getting the `src` property returns the
                 *  location of the current image or video file.
                 *
                 *  Images can either be from the [Media Manager](https://support.wix.com/en/article/about-the-media-manager)
                 *  or an external image from any web location. Videos must come from the
                 *  [Media Manager](https://support.wix.com/en/article/about-the-media-manager).
                 *
                 *  The URL formats supported are:
                 *
                 *  + Images from the Media Manager:
                 *    `wix:image://v1//#originWidth=&originHeight=[&watermark=]`
                 *  + Videos from the Media Manager:
                 *    `wix:video://v1//#posterUri=&posterWidth=&posterHeight=`
                 *  + Images from the web:
                 *    `http(s)://`
                 */
                src: string;
            };
        }
        /**
         * [Dropdowns](https://support.wix.com/en/article/content-manager-adding-and-setting-up-a-dropdown-selection-for-a-form-submission)
         * are used for selecting one of a number of options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Dropdown.html#)
         */
        namespace Dropdown {
            /**
             * An object used by the `options` property that contains the attributes of a dropdown list item.
             */
            type Option = {
                /**
                 * The value of the dropdown option. This is what you use in code and is what is stored in your collections. Mandatory if `label` is not specified.
                 */
                value?: string;
                /**
                 * The label of the dropdown option. This is what a user sees. Mandatory if `value` is not specified.
                 */
                label?: string;
            };
        }
        /**
         * Use effect options to customize an effect when [showing]($w.HiddenMixin.html#show) or [hiding]($w.HiddenMixin.html#hide) an element.
         *  Effect options include arcs, bouncing, fading, flipping, floating, flying in/out, folding, gliding and more.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.EffectOptions.html#)
         */
        namespace EffectOptions {
            /**
             * An object used to customize the `"arc"` effect.
             */
            type ArcEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
                /**
                 * Valid values: `"left"`, `"right"`. Defaults to `"left"`.
                 */
                direction?: string;
            };
            /**
             * An object used to customize the `"bounce"` effect.
             */
            type BounceEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
                /**
                 * Valid values: `"topLeft"`, `"topRight"`, `"bottomRight"`,
                 *  `"bottomLeft"`, `"center"`. Defaults to `"topLeft"`.
                 */
                direction?: string;
                /**
                 * Valid values: `"soft"`, `"medium"`, `"hard"`. Defaults to `"medium"`.
                 */
                intensity?: string;
            };
            /**
             * An object used to customize the `"fade"` effect.
             */
            type FadeEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
            };
            /**
             * An object used to customize the `"flip"` effect.
             */
            type FlipEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
                /**
                 * Valid values: `"top"`, `"right"`, `"bottom"`, `"left"`. Defaults to `"right"`.
                 */
                direction?: string;
            };
            /**
             * An object used to customize the `"float"` effect.
             */
            type FloatEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
                /**
                 * Valid values: `"top"`, `"right"`, `"bottom"`, `"left"`. Defaults to `"right"`.
                 */
                direction?: string;
            };
            /**
             * An object used to customize the `"fly"` effect.
             */
            type FlyEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
                /**
                 * Valid values: `"top"`, `"right"`, `"bottom"`, `"left"`. Defaults to `"right"`.
                 */
                direction?: string;
            };
            /**
             * An object used to customize the `"fold"` effect.
             */
            type FoldEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
                /**
                 * Valid values: `"top"`, `"right"`, `"bottom"`, `"left"`. Defaults to `"left"`.
                 */
                direction?: string;
            };
            /**
             * An object used to customize the `"glide"` effect.
             */
            type GlideEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
                /**
                 * Valid values: `0`-`360` degrees. Defaults to `0`.
                 */
                angle?: number;
                /**
                 * Valid values: `0`-`300` pixels. Defaults to `0`.
                 */
                distance?: number;
            };
            /**
             * An object used to customize the `"puff"` effect.
             */
            type PuffEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
            };
            /**
             * An object used to customize the `"roll"` effect.
             */
            type RollEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
                /**
                 * Valid values: `"top"`, `"right"`, `"bottom"`, `"left"`. Defaults to `"left"`.
                 */
                direction?: string;
            };
            /**
             * An object used to customize the `"slide"` effect.
             */
            type SlideEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
                /**
                 * Valid values: `"top"`, `"right"`, `"bottom"`, `"left"`. Defaults to `"left"`.
                 */
                direction?: string;
            };
            /**
             * An object used to customize the `"spin"` effect.
             */
            type SpinEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
                /**
                 * Valid values: `cw`, `ccw`. Defaults to `cw`.
                 */
                direction?: string;
                /**
                 * Valid values: `1`-`15`. Defaults to `5`.
                 */
                cycles?: number;
            };
            /**
             * An object used to customize the `"turn"` effect.
             */
            type TurnEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
                /**
                 * Valid values: `"right"`, `"left"`. Defaults to `"right"`.
                 */
                direction?: string;
            };
            /**
             * An object used to customize the `"zoom"` effect.
             */
            type ZoomEffectOptions = {
                /**
                 * Valid values: `0`-`4000` milliseconds. Defaults to `1200`.
                 */
                duration?: number;
                /**
                 * Valid values: `0`-`8000` milliseconds. Defaults to `0`.
                 */
                delay?: number;
            };
        }
        /**
         * Events are fired when certain actions occur to elements.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Event.html#)
         */
        namespace Event {
            /**
             * An object that contains information about the context in which an event was fired.
             */
            type EventContext = {
                /**
                 * `"GLOBAL_SCOPE"` for events fired outside
                 *  of repeaters, or `"COMPONENT_SCOPE"` for events fired from repeaters.
                 */
                type: string;
                /**
                 * ID of the repeater item where the
                 *  event was fired from.
                 */
                itemId: string;
            };
        }
        /**
         * A [Gallery](https://support.wix.com/en/article/wix-editor-adding-and-setting-up-a-gallery) displays multiple items.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#)
         */
        namespace Gallery {
            /**
             * An object used by the `galleryCapabilities` property that contains the capabilities of a gallery.
             */
            type GalleryCapabilities = {
                /**
                 * Indicates if the gallery supports play operations.
                 */
                isPlayable: boolean;
                /**
                 * Indicates if the gallery supports the notion of a current item.
                 */
                hasCurrentItem: boolean;
                /**
                 * Indicates if the gallery supports navigation buttons.
                 */
                hasNavigationButtons: boolean;
            };
            /**
             * An object used by the Gallery properties `items` and `currentItem` to represent a single gallery image.
             */
            type ImageItem = {
                /**
                 * Item type. Value is `"image"`.
                 */
                type: string;
                /**
                 * Item slug.
                 */
                slug?: string;
                /**
                 * Image source URL.
                 */
                src: string;
                /**
                 * Image description. Descriptions over 100 characters are truncated.
                 */
                description?: string;
                /**
                 * Image title.
                 */
                title?: string;
                /**
                 * URL of the image's clickable link. See [here]($w.LinkableMixin.html#link) for more information about links.
                 */
                link?: string;
            };
            /**
             * An object used by the Gallery properties `items` and `currentItem` to represent a single gallery video.
             */
            type VideoItem = {
                /**
                 * Item type. Value is `"video"`.
                 */
                type: string;
                /**
                 * Item slug.
                 */
                slug?: string;
                /**
                 * Video source URL.
                 */
                src: string;
                /**
                 * Video description. Descriptions over 100 characters are truncated.
                 */
                description?: string;
                /**
                 * Video title.
                 */
                title?: string;
                /**
                 * URL of the video's clickable link. See [here]($w.LinkableMixin.html#link) for more information about links.
                 */
                link?: string;
                /**
                 * Video thumbnail URL.
                 */
                thumbnail?: string;
            };
        }
        /**
         * A [Google map element](https://www.wix.com/support/html5/article/adding-google-maps)
         *  that allows you to display a given location.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.GoogleMap.html#)
         */
        namespace GoogleMap {
            /**
             * An object used by the `location` property that
             *  contains the attributes of a marked map location.
             */
            type MapLocation = {
                /**
                 * The latitude of the location. Must be between -90 and 90.
                 */
                latitude: number;
                /**
                 * The longitude of the location. Must be between -180 and 180.
                 */
                longitude: number;
                /**
                 * The description of the location.
                 */
                description?: string;
            };
        }
        /**
         * [Menus](https://support.wix.com/en/article/wix-editor-adding-a-site-menu) are used for navigating between site pages.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Menu.html#)
         */
        namespace Menu {
            /**
             * An object that contains the attributes of a menu item.
             */
            type MenuItem = {
                /**
                 * The label of the menu item. This is text that the site visitor sees in the menu and can click to navigate.
                 *
                 *  If not specified, and the page that the link property references is:
                 *  + An external page or an empty string: The menu defaults to the menu items based on site pages only, as defined in the Editor, and an error is logged to the console.
                 *  + A page nested under a folder: The specific menu item label defaults to the name of the corresponding page as defined in the Editor.
                 *  + A regular, non-nested, site page: The `label` for the menu item gets its value from the name of the page that the `link` property references.
                 *
                 *  Min: 1 character
                 *
                 *  Max: 40 characters
                 */
                label?: string;
                /**
                 * Setting `selected` to `true` for a menu item causes the item to appear highlighted in the menu element.
                 *  You can use this property to indicate which page is currently being displayed.
                 *
                 *  >**Note:** The value of `selected` isn't validated against which page is actually displayed. For example, you can write code that misleadingly sets `selected` to `true` for multiple menu items.
                 *
                 *  When not defined explicitly using the `selected` property, the `selected` value is derived from the currently-active page in the site's _main_ menu
                 *  (as defined when managing the menu in the Editor) and not derived from a currently-active page in a _custom_ menu.
                 *
                 *  Default: `false`
                 */
                selected?: boolean;
                /**
                 * Optional link for the menu item. This is the link the site visitor navigates to when they click on a menu item.
                 *  The different types of links you can use are:
                 *
                 *  + `/localPageURL`: Another page on your site, such as `/about` or `/rentals/shortterm`.
                 *  + `/`: Your site's home page.
                 *  + `http(s)://`: An external web address, such as `https://www.mortgagecalculator.org/`.
                 *  + `wix:document://`: A document stored in the Media Manager, such as `wix:document://v1/9bec_52fb06ea/filename.xls`.
                 *  + `mailto:?subject=`: An email, such as `mailto:michael@example.com?subject=Coming%20Soon`.
                 *  + `tel:`: A phone number, such as `tel:+1-555-555-5555`.
                 *
                 *  If `link` isn't specified, the corresponding label isn't clickable.
                 *
                 *  Specifying an empty string is not supported. The menu defaults to the menu items as defined in the Editor and an error is logged to the console.
                 *
                 *  Min: 1 character
                 *
                 *  Max: 40 characters
                 */
                link?: string;
                /**
                 * Whether the link opens in the same window/tab or in a new window/tab.
                 *  + `_self`. The page opens in the same window/tab.
                 *  + `_blank`. The page opens in a new window/tab.
                 *
                 *  > **Note:** `target` doesn't work when previewing your site.
                 *
                 *
                 *  Default: `_self`
                 */
                target?: string;
                /**
                 * Menus can have additional levels of submenus. Vertical menus can have
                 *  1 level of submenus. Horizontal menus can have 2 additional levels of submenus.
                 */
                menuItems?: Menu.MenuItem[];
                /**
                 * A unique ID that can be used to customize events triggered on a menu item.
                 *  For example, when a visitor clicks a menu item, the ID can be checked in order to trigger the appropriate action for that menu item.
                 */
                id?: string;
            };
        }
        /**
         * A picker for selecting items on a mobile app.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobilePicker.html#)
         */
        namespace MobilePicker {
            type Option = {
                /**
                 * The value of the mobile picker option. This is what you use in code and is what is stored in your collections. Mandatory if `label` is not specified.
                 */
                value?: string;
                /**
                 * The label of the mobile picker option. This is what a mobile app user sees.  Mandatory if `value` is not specified.
                 */
                label?: string;
                /**
                 * The description of the mobile picker option. This is what a mobile app user sees.
                 */
                description?: string;
                /**
                 * Whether the mobile picker option is selected.
                 */
                selected?: boolean;
                /**
                 * Whether the mobile picker option is enabled.
                 */
                enabled?: boolean;
            };
        }
        /**
         * Provides functionality for mobile elements that have values.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.MobileValueMixin.html#)
         */
        namespace MobileValueMixin {
            type Validation = {
                /**
                 * The validation type.
                 * Supported values:
                 * + 'required'
                 * + 'url'
                 * + 'numeric'
                 * + 'wholeNumber'
                 * + 'decimalNumber'
                 */
                validationType: string;
                /**
                 * The validation message.
                 */
                message: string;
            };
        }
        /**
         * A button on your Blocks panel.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelButton.html#)
         */
        namespace PanelButton {
            /**
             * An object representing an SVG icon.
             */
            type icon = {
                /**
                 * An SVG element
                 */
                svgId: string;
            };
        }
        /**
         * Panel checkbox groups are used in the Blocks panel builder for selecting any number of the given options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelCheckboxGroup.html#)
         */
        namespace PanelCheckboxGroup {
            /**
             * An object representing a checkbox option.
             */
            type option = {
                /**
                 * The label of the checkbox option. This is what a user sees.
                 */
                label: string;
                /**
                 * The value of the checkbox option. This is what you use in code.
                 */
                value: string;
            };
        }
        /**
         * Panel dropdowns are used in the Blocks panel builder for selecting one of a number of options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelDropdown.html#)
         */
        namespace PanelDropdown {
            /**
             * An object representing a dropdown option.
             */
            type option = {
                /**
                 * The label of the dropdown option. This is what a user sees.
                 */
                label: string;
                /**
                 * The value of the dropdown option. This is what you use in code.
                 */
                value: string;
            };
        }
        /**
         * Panel radio button groups are used in the Blocks panel builder for selecting one of a number of options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelRadioButtonGroup.html#)
         */
        namespace PanelRadioButtonGroup {
            /**
             * An object representing a radio button option.
             */
            type option = {
                /**
                 * The label of the radio button option. This is what a user sees.
                 */
                label: string;
                /**
                 * The value of the radio button option. This is what you use in code.
                 */
                value: string;
            };
        }
        /**
         * A Panel thumbnail groups allow users to select an option using a set of thumbnail images in a Blocks panel.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PanelThumbnails.html#)
         */
        namespace PanelThumbnails {
            /**
             * An object representing a thumbnail option.
             */
            type option = {
                /**
                 * The label of the thumbnail option, optionally displayed below the thumbnail. Maximum 120 chars.
                 */
                label: string;
                /**
                 * The value of the thumbnail option. This is what you use in code.
                 */
                value: string;
            };
        }
        /**
         * A post page for a specific blog post.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.PostPage.html#)
         */
        namespace PostPage {
            /**
             * An object representing a blog post on a post page.
             * > **Note:**
             * `viewCount` and `likeCount` data used on your site pages is eventually consistent and may require up
             * to 24 hours to update. To make sure new post views and likes are included on your site in real time,
             * [disable caching](https://support.wix.com/en/article/caching-your-sites-pages) for
             * any page that uses `viewCount` or `likeCount` data. Note that disabling caching may increase your page loading time.
             */
            type BlogPost = {
                /**
                 * Post ID.
                 */
                _id: string;
                /**
                 * Post title.
                 */
                title: string;
                /**
                 * Text of the post.
                 */
                plainContent: string;
                /**
                 * Date the post was originally published.
                 */
                publishedDate: Date;
                /**
                 * Number of times the post was viewed.
                 */
                viewCount: number;
                /**
                 * Number of likes the post received.
                 */
                likeCount: number;
                /**
                 * Number of comments the post received.
                 */
                commentCount: number;
                /**
                 * Date the post was most recently published.
                 */
                lastPublishedDate: Date;
                /**
                 * Indicates whether the cover image is displayed in the post.
                 */
                coverImageDisplayed: boolean;
                /**
                 * Estimated time in minutes required to read the post.
                 */
                timeToRead: number;
                /**
                 * Indicates whether the post was pinned to the top of the blog feed.
                 */
                pinned: boolean;
                /**
                 * Indicates whether the post is set as featured in the post settings. Featured posts appear in custom blog feeds.
                 */
                featured: boolean;
                /**
                 * List of all hashtags in the post.
                 */
                hashtags: string[];
                /**
                 * The post's cover [image]($w.Image.html#src).
                 */
                coverImage: string;
                /**
                 * Relative URL of the post page on your published site.
                 */
                postPageUrl: string;
                /**
                 * A few lines of text that appear in the blog feed. Defined
                 * in [Post Settings](https://support.wix.com/en/article/editing-excerpts-in-the-new-wix-blog) or default of first 160 characters of the post.
                 */
                excerpt: string;
            };
        }
        /**
         * A store page for a specific product.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ProductPage.html#)
         */
        namespace ProductPage {
            /**
             * An object representing a media item.
             */
            type MediaItem = {
                /**
                 * Media item ID.
                 */
                id: string;
                /**
                 * Media item title.
                 */
                title: string;
                /**
                 * Media item description. Descriptions over 100 characters are truncated.
                 */
                description: string;
                /**
                 * Media item type. Can be "image" or "video."
                 */
                type: string;
                /**
                 * Media item source URL.
                 */
                src: string;
                /**
                 * Thumbnail URL for videos only.
                 */
                thumbnail?: string;
            };
            /**
             * An object representing a product in a store.
             */
            type Product = {
                /**
                 * Product ID.
                 */
                _id: string;
                /**
                 * Date and time the product was last updated.
                 */
                _updatedDate: Date;
                /**
                 * Product name.
                 */
                name: string;
                /**
                 * Product description.
                 */
                description: string;
                /**
                 * Main product media item (image or video thumbnail) URL.
                 */
                mainMedia: string;
                /**
                 * List of product media items.
                 */
                mediaItems: ProductPage.MediaItem;
                /**
                 * Product stock keeping unit value. Must be unique.
                 */
                sku: string;
                /**
                 * Deprecated. Use `ribbon` instead.
                 */
                ribbons: ProductPage.ProductRibbon[];
                /**
                 * Product currency.
                 */
                currency: string;
                /**
                 * Product price.
                 *  The price must be greater than its discount.
                 *  The product price is propagated to the product's newly-created variants. Product variants whose prices have been updated directly are not affected by the changes to the product price.
                 */
                price: number;
                /**
                 * Discounted product price.
                 */
                discountedPrice: number;
                /**
                 * Product price formatted with the currency.
                 */
                formattedPrice: string;
                /**
                 * Discounted product price formatted with the currency.
                 */
                formattedDiscountedPrice: string;
                /**
                 * ID for the inventory item.
                 */
                inventoryItemId: string;
                /**
                 * Product discount.
                 */
                discount: ProductPage.ProductDiscount;
                /**
                 * Indicates whether inventory is tracked for the product.
                 */
                trackInventory: boolean;
                /**
                 * Indicates whether the product is in stock.
                 */
                inStock: boolean;
                /**
                 * Number of units currently in stock.
                 */
                quantityInStock: number;
                /**
                 * Additional product information sections.
                 */
                additionalInfoSections: ProductPage.ProductAdditionalInfoSection[];
                /**
                 * All the available options for a store product.
                 */
                productOptions: ProductPage.ProductOptions;
                /**
                 * Product page relative URL.
                 */
                productPageUrl: string;
                /**
                 * Indicates whether product variants are managed. Can be set to true only if the product has options. Once set to true, `manageVariants` can only be reset to false only if no variants exist. Use [`getProductVariants()`](https://www.wix.com/velo/reference/wix-stores.html#getProductVariants) to check if variants exist. You cannot set `manageVariants` to true if more than 300 variants are defined.
                 */
                manageVariants: boolean;
                /**
                 * List of product customization fields.
                 */
                customTextFields: ProductPage.ProductCustomTextFields[];
                /**
                 * Product type. Either `"physical"` or `"digital"`. When creating a product using the API, currently only `"physical"` is supported.
                 */
                productType: string;
                /**
                 * Product slug.
                 */
                slug: string;
                /**
                 * Product weight.
                 */
                weight: number;
                /**
                 * Product variants.
                 */
                variants: ProductPage.VariantItem[];
                /**
                 * Price per unit.
                 */
                pricePerUnit: number;
                /**
                 * Price per unit formatted with currency symbol.
                 */
                formattedPricePerUnit: string;
                /**
                 * Details of the product's price per unit.
                 */
                pricePerUnitData: ProductPage.pricePerUnitData;
                /**
                 * Custom SEO data for the product. Learn more [about SEO](https://support.wix.com/en/search?term=seo).
                 */
                seoData: ProductPage.SeoData;
                /**
                 * Product ribbon. Used to highlight relevant information about a product. For example, `"Sale"`, `"New Arrival"`, `"Sold Out"`.
                 */
                ribbon: string;
            };
            /**
             * An object representing an additional info section for a store product.
             */
            type ProductAdditionalInfoSection = {
                /**
                 * Section title.
                 */
                title: string;
                /**
                 * Section description.
                 */
                description: string;
            };
            /**
             * An object representing a product variant's option choices.
             */
            type ProductChoices = {
                /**
                 * Value of the choice. This key name is dependent on the
                 *  product option. For example, if a product has a size option, this
                 *  key value will be something like `"Size"` and its value will be something like
                 *  `"Large"`.
                 *
                 *  `optionKey` is not case-sensitive. Therefore the values for the option keys "`Size`", "`SIZE`", and "`size`" are combined.
                 */
                optionKey: string;
            };
            /**
             * An object representing a custom text field for a store product.
             */
            type ProductCustomTextFields = {
                /**
                 * Product customization field title.
                 */
                title: string;
                /**
                 * Maximum length of product customization field in characters.
                 */
                maxLength: string;
            };
            /**
             * An object representing a product discount.
             */
            type ProductDiscount = {
                /**
                 * Discount type. Required.
                 *
                 *  One of:
                 *
                 *
                 *
                 *  - `"AMOUNT"`
                 *  - `"PERCENT"`
                 *  - `"NONE"`
                 */
                type: string;
                /**
                 * Discount value. The discount value cannot be greater than the price of the product or the variant.
                 */
                value: string;
            };
            /**
             * An object representing an option for a store product.
             */
            type ProductOption = {
                /**
                 * Option type. Either `"color"` or `"drop_down"`.
                 */
                optionType: string;
                /**
                 * Option name.
                 */
                name: string;
                /**
                 * Option choices.
                 */
                choices: ProductPage.ProductOptionsChoice[];
            };
            /**
             * An object representing all the available options for a store product, such as "Size" and "Color."
             */
            type ProductOptions = {
                /**
                 * Name of the option. This key name
                 *  is dependent on the options added to the product. For example, if a product has a size
                 *  option, this key will be something like `"Size"`.
                 *
                 *  `optionKey` is not case-sensitive. Therefore the values for the option keys "`Size`", "`SIZE`", and "`size`" are combined.
                 */
                optionKey: ProductPage.ProductOption;
            };
            /**
             * An object representing an option's choice for a store product, such as choice "Small" for the option "Size."
             */
            type ProductOptionsChoice = {
                /**
                 * Choice value.
                 */
                value: number;
                /**
                 * Choice description.
                 */
                description: number;
                /**
                 * Choice media.
                 */
                media: ProductPage.ProductOptionsChoiceMedia;
                /**
                 * Indicates whether the product with this choice is in stock.
                 */
                inStock: boolean;
                /**
                 * Indicates whether the product with this option is visible.
                 */
                visible: boolean;
            };
            /**
             * An object representing the choice media.
             */
            type ProductOptionsChoiceMedia = {
                /**
                 * Main choice media item (image or video thumbnail) URL.
                 */
                mainMedia: string;
                /**
                 * List of choice media items.
                 */
                mediaItems: ProductPage.MediaItem;
            };
            /**
             * An object representing a ribbon for a store product.
             */
            type ProductRibbon = {
                /**
                 * Ribbon text.
                 */
                text: string;
            };
            /**
             * An object representing custom SEO data for the product.
             */
            type SeoData = {
                /**
                 * SEO tag details.
                 */
                tags: ProductPage.SeoTag[];
            };
            /**
             * An object representing the product's custom SEO tags.
             */
            type SeoTag = {
                /**
                 * SEO tag type.
                 * Supported values:
                 *
                 *  + `"title"`
                 *  + `"meta"`
                 *  + `"script"`
                 *  + `"link"`
                 */
                type: string;
                /**
                 * The props property holds an object of `{"key": "value"}` pairs where the key is one of the SEO tag's properties (name, content, rel, href, etc.)
                 * and the value is the value for that property. `{"name": "description", "content": "The description itself."}`.
                 */
                props: object;
                /**
                 * Tag metadata. For example, `{"height": 300, "width": 240}`.
                 */
                meta: object;
                /**
                 * Tag inner content. For example, ` inner content `.
                 */
                children: string;
                /**
                 * Whether the tag is a custom tag.
                 */
                custom: boolean;
                /**
                 * Whether the tag is disabled.
                 */
                disabled: boolean;
            };
            /**
             * An object representing variant information to use when creating or updating variants.
             */
            type VariantInfo = {
                /**
                 * Variant currency.
                 */
                currency: string;
                /**
                 * Variant price. The variant price must be greater than its discount. If the variant price has been updated, changes to the product price do not affect the variant price.
                 */
                price: number;
                /**
                 * Discounted variant price.
                 */
                discountedPrice: number;
                /**
                 * Variant price formatted with the currency.
                 */
                formattedPrice: string;
                /**
                 * Discounted variant price formatted with the currency.
                 */
                formattedDiscountedPrice: string;
                /**
                 * Variant weight.
                 */
                weight: number;
                /**
                 * Variant stock keeping unit value.
                 */
                sku: string;
                /**
                 * Whether the variant is visible in the store.
                 */
                visible: boolean;
                /**
                 * Price per unit.
                 */
                pricePerUnit: number;
                /**
                 * Price per unit formatted with currency symbol.
                 */
                formattedPricePerUnit: string;
            };
            /**
             * An object representing a product variant item.
             */
            type VariantItem = {
                /**
                 * Unique variant ID.
                 */
                _id: string;
                /**
                 * The choices of the retrieved variant.
                 */
                choices: ProductPage.ProductChoices;
                /**
                 * Variant information.
                 */
                variant: ProductPage.VariantInfo;
            };
            /**
             * An object representing a product's price per unit data.
             */
            type pricePerUnitData = {
                /**
                 * Product’s total weight, volume, or area. For example, if your product weighs 1 kilogram, the `totalQuantity` is `1`.
                 */
                totalQuantity: number;
                /**
                 * Total measurement unit of weight, volume, or area. For example, if your product weighs 1 kilogram, the `totalMeasurementUnit` is `"KG"`.
                 *
                 * Supported values:
                 * `"ML"`, `"CL"`, `"L"`, `"CBM"`, `"MG"`, `"G"`, `"KG"`, `"MM"`, `"CM"`, `"M"`, `"SQM"`, `"OZ"`, `"LB"`, `"FLOZ"`, `"PT"`, `"QT"`, `"GAL"`, `"IN"`, `"FT"`, `"YD"`, `"SQFT"`.
                 */
                totalMeasurementUnit: string;
                /**
                 * Product’s base weight, volume, or area. For example, for a product weighing 1 kilogram, the `baseQuantity` could be `100` (grams).
                 */
                baseQuantity: number;
                /**
                 * Base measurement unit of weight, volume, or area. For example, if your product weighs 1 kilogram, and the `baseQuantity` is `100` grams, `baseMeasurementUnit` is `"G"`.
                 *
                 * Supported values:
                 * `"ML"`, `"CL"`, `"L"`, `"CBM"`, `"MG"`, `"G"`, `"KG"`, `"MM"`, `"CM"`, `"M"`, `"SQM"`, `"OZ"`, `"LB"`, `"FLOZ"`, `"PT"`, `"QT"`, `"GAL"`, `"IN"`, `"FT"`, `"YD"`, `"SQFT"`.
                 */
                baseMeasurementUnit: string;
            };
            /**
             * Handles events triggered when the **Add To Cart** button on the Product Page is clicked.
             */
            type addToCartEventHandler = (resume: Function, cancel: Function) => void;
            /**
             * Handles events triggered when the **Buy Now** button on the Product Page is clicked.
             */
            type buyNowEventHandler = (resume: Function, cancel: Function) => void;
            /**
             * Handles events triggred when a product option choice is selected.
             */
            type choiceSelectedEventHandler = (selectedChoices: any) => void;
            /**
             * Handles events triggred when a product's quantity is changed.
             */
            type quantityChangedEventHandler = (quantity: number) => void;
        }
        /**
         * Event that is fired when a quick action bar item is clicked.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.QuickActionBarItemClickedEvent.html#)
         */
        namespace QuickActionBarItemClickedEvent {
            /**
             * An object representing a quick action bar item.
             */
            type QuickActionBarItem = {
                /**
                 * The quick action bar item type.
                 *
                 *  One of:
                 *
                 *  + `"3dots"`
                 *  + `"3dotsvertical"`
                 *  + `"about"`
                 *  + `"add"`
                 *  + `"address"`
                 *  + `"arrowdown"`
                 *  + `"arrowup"`
                 *  + `"blog"`
                 *  + `"booking"`
                 *  + `"briefcase"`
                 *  + `"clock"`
                 *  + `"clothes"`
                 *  + `"cloud"`
                 *  + `"contactform"`
                 *  + `"creditcard"`
                 *  + `"crown"`
                 *  + `"currency"`
                 *  + `"earth"`
                 *  + `"ecom"`
                 *  + `"email"`
                 *  + `"facebook"`
                 *  + `"flag"`
                 *  + `"flickr"`
                 *  + `"freebutton"`
                 *  + `"gallery"`
                 *  + `"googleplus"`
                 *  + `"hamburgermenu"`
                 *  + `"heart"`
                 *  + `"home"`
                 *  + `"hot"`
                 *  + `"hotel"`
                 *  + `"hotsale"`
                 *  + `"icecream"`
                 *  + `"instagram"`
                 *  + `"lightning"`
                 *  + `"link"`
                 *  + `"linkedin"`
                 *  + `"music"`
                 *  + `"new"`
                 *  + `"page"`
                 *  + `"phone"`
                 *  + `"pinterest"`
                 *  + `"present"`
                 *  + `"register"`
                 *  + `"restaurant"`
                 *  + `"rocket"`
                 *  + `"sale"`
                 *  + `"search"`
                 *  + `"shoppingcart"`
                 *  + `"signup"`
                 *  + `"smile"`
                 *  + `"social"`
                 *  + `"speaker"`
                 *  + `"star"`
                 *  + `"ticket"`
                 *  + `"twitter"`
                 *  + `"vimeo"`
                 *  + `"vk"`
                 *  + `"yelp"`
                 *  + `"youtube"`
                 */
                itemType: string;
                /**
                 * The quick action bar item label.
                 */
                label: string;
                /**
                 * The quick action bar item link.
                 */
                link: string;
            };
        }
        /**
         * [Radio button groups](https://support.wix.com/en/article/content-manager-adding-and-setting-up-radio-buttons) are used for selecting one of a number of
         *  options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.RadioButtonGroup.html#)
         */
        namespace RadioButtonGroup {
            /**
             * An object used by the `options` property that contains the attributes of a radio button item.
             */
            type Option = {
                /**
                 * The value of the radio button option. This is what you use in code and is what is stored in your collections. Mandatory if `label` is not specified.
                 */
                value?: string;
                /**
                 * The label of the radio button option. This is what a user sees. Mandatory if `value` is not specified.
                 */
                label?: string;
            };
        }
        /**
         * A [ratings input](https://support.wix.com/en/article/content-manager-adding-and-setting-up-a-ratings-input-element)
         *  element allows you to capture a value from your users
         *  using icons.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.RatingsInput.html#)
         */
        namespace RatingsInput {
            /**
             * Function that runs when custom validation is checked.
             */
            type RatingsInputValidator = (value: number, reject: Function) => void;
        }
        /**
         * [Selection tags](https://support.wix.com/en/article/adding-and-setting-up-selection-tags) are used for selecting one or more options.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.SelectionTags.html#)
         */
        namespace SelectionTags {
            /**
             * An object used by the [`options`](#options) property that contains the attributes of the selection tag item.
             */
            type Option = {
                /**
                 * The value of the selection tag option. This is what you use in code and is what is stored in your collections.
                 */
                value: string;
                /**
                 * The label of the selection tag option. This is what a site visitor sees.
                 */
                label: string;
            };
            /**
             * Function that runs when custom validation is checked.
             */
            type SelectionTagsValidator = (value: string[], reject: Function) => void;
        }
        /**
         * [Signature input](https://support.wix.com/en/article/wix-forms-adding-a-signature-field) lets site visitors enter signatures.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.SignatureInput.html#)
         */
        namespace SignatureInput {
            /**
             * Function that runs when custom validation is checked.
             */
            type SignatureInputValidator = (value: string, reject: Function) => void;
        }
        /**
         * A [table](https://support.wix.com/en/article/content-manager-displaying-collection-content-in-a-table) for displaying data.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.Table.html#)
         */
        namespace Table {
            /**
             * An object used by the `columns` property that
             *  contains the properties that define a table column. Table columns do not
             *  store any data.
             */
            type Column = {
                /**
                 * The column ID.
                 */
                id: string;
                /**
                 * The location of the data displayed
                 *  in the column.
                 *
                 *  When the table is populated by a connection to a dataset, the `dataPath`
                 *  value is a field ID from the collection that the dataset is connected to. The
                 *  `dataPath` can contain a [reference field](https://support.wix.com/en/article/about-reference-fields-in-database-collections)
                 *  by prefixing the field with the referenced collection name and a period. For example,
                 *  `"dataPath": "writer.name"`.
                 *
                 *  When the table is populated by using the [`rows`](#rows) or
                 *  [`dataFetcher`](#dataFetcher) properties, the `dataPath` value is one of the
                 *  property keys from the table's row objects.
                 */
                dataPath: string;
                /**
                 * The column header label.
                 */
                label: string;
                /**
                 * The type of data in this column: `"number"`, `"string"`, `"date"`, `"image"`, `"bool"`, or `"richText"`.
                 */
                type: string;
                /**
                 * The pixel width of the column.
                 */
                width?: number;
                /**
                 * Whether the column is visible.
                 */
                visible?: boolean;
                /**
                 * The location of the links used when
                 *  the items in the column are clicked.
                 *
                 *  When the table is populated by a connection to a dataset, the `linkPath`
                 *  value is a field ID from the collection that the dataset is connected to.
                 *  The collection field can be a [regular field](https://support.wix.com/en/article/about-database-collections#regular-fields)
                 *  that contains URLs, a [calculated field](https://support.wix.com/en/article/about-database-collections#calculated-fields), or a [reference field](https://support.wix.com/en/article/about-reference-fields-in-database-collections)
                 *  that contains relative links to dynamic pages.
                 *
                 *  When the table is populated by using the [`rows`](#rows) or
                 *  [`dataFetcher`](#dataFetcher) properties, the `linkPath` value is one of the
                 *  property keys from the table's rows objects.
                 *  The property values associated with that key contain URLs or relative links.
                 */
                linkPath?: string;
            };
            /**
             * An object used by the `pagination` property that
             * contains the pagination options which determine if and how the table
             * is paginated.
             */
            type PaginationOptions = {
                /**
                 * The type of pagination.
                 *  One of:
                 *
                 *  + `"normal"`: No pagination. The table is scrollable if there are more
                 *    rows than can be displayed at once. All data is fetched at once.
                 *  + `"pagination"`: The data is separated into pages which are navigatable
                 *    using paging buttons. New data is fetched when a user clicks on a
                 *    paging button.
                 *  + `"virtual"`: The data is separated into pages which are navigated by
                 *    scrolling. New data is fetched when user a user scrolls below the
                 *    displayed rows.
                 */
                type: string;
                /**
                 * The number of rows per page.
                 */
                rowsPerPage: number;
            };
        }
        /**
         * A thank you page displayed when an order is created.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ThankYouPage.html#)
         */
        namespace ThankYouPage {
            /**
             * An object representing address information.
             */
            type Address = {
                /**
                 * Address in readable format.
                 */
                formatted: string;
                /**
                 * City.
                 */
                city?: string;
                /**
                 * Country.
                 */
                country?: string;
                /**
                 * Main address information.
                 */
                addressLine?: string;
                /**
                 * Additional address information (apt, floor, etc.).
                 */
                addressLine2?: string;
                /**
                 * Alternative property for street name and number.
                 */
                streetAddress?: ThankYouPage.StreetAddress;
                /**
                 * Postal/zip code.
                 */
                postalCode?: string;
                /**
                 * Subdivision of a country, such as a state or province.
                 */
                subdivision?: string;
            };
            /**
             * An object representing a coupon applied to the order.
             */
            type AppliedCoupon = {
                /**
                 * Coupon ID.
                 */
                couponId: string;
                /**
                 * Coupon name.
                 */
                name: string;
                /**
                 * Coupon code.
                 */
                code: string;
            };
            /**
             * An object representing an order's billing info.
             */
            type BillingInfo = {
                /**
                 * Billing address.
                 */
                address?: ThankYouPage.Address;
                /**
                 * Last name.
                 */
                lastName?: string;
                /**
                 * First name.
                 */
                firstName?: string;
                /**
                 * Email address.
                 */
                email?: string;
                /**
                 * Phone number.
                 */
                phone?: string;
                /**
                 * Company name.
                 */
                company?: string;
                /**
                 * VAT information.
                 */
                vatId?: ThankYouPage.VatId;
            };
            /**
             * An object representing information about the buyer.
             */
            type BuyerInfo = {
                /**
                 * Unique buyer's ID.
                 */
                id: string;
                /**
                 * Buyer's email address.
                 */
                email: string;
                /**
                 * Buyer's first name.
                 */
                firstName: string;
                /**
                 * Buyer's last name.
                 */
                lastName: string;
                /**
                 * Buyer's identity.
                 * One of:
                 *
                 *
                 *  - `"MEMBER"`: A logged-in site member.
                 *  - `"CONTACT"`: A Wix contact.
                 */
                identityType: string;
                /**
                 * Buyer's phone number.
                 */
                phone?: string;
            };
            /**
             * An object representing information about the sales channel that submitted this order.
             */
            type ChannelInfo = {
                /**
                 * Order ID from an external system (e.g., eBay or Amazon).
                 */
                externalOrderId?: string;
                /**
                 * URL to the order in the external system (e.g., eBay or Amazon).
                 */
                externalOrderUrl?: string;
                /**
                 * Sales channel that submitted the order.
                 * One of:
                 *
                 *
                 *  + `"WEB"`: Wix online store.
                 *  + `"POS"`: Point of sale.
                 *  + `"EBAY"`: eBay.
                 *  + `"OTHER_PLATFORM"`: Order imported from another system (e.g., Cart2Cart).
                 *  + `"WIX_APP_STORE"`: Order created via the Wix mobile app.
                 */
                type: string;
            };
            /**
             * An object representing a custom field added by the customer during the checkout process.
             */
            type CustomField = {
                /**
                 * Custom field's title.
                 */
                title: string;
                /**
                 * Title translated into the buyer's language.
                 */
                translatedTitle: string;
                /**
                 * Custom field's text.
                 */
                value: string;
            };
            /**
             * An object representing a custom text field.
             */
            type CustomTextField = {
                /**
                 * Field title.
                 */
                title: string;
                /**
                 * Field value.
                 */
                value: string;
            };
            /**
             * An object representing a discount applied to the order.
             */
            type Discount = {
                appliedCoupon: ThankYouPage.AppliedCoupon;
            };
            /**
             * An object representing information about the identity of the order initiator.
             * Occasionally, the person that completes the order isn't the buyer. For example, this occurs when an order is created using a point of sale terminal.
             */
            type EnteredBy = {
                id: string;
                /**
                 * Order was created by one of the following:
                 *
                 *
                 *   + `"USER"`: Wix user who performed a POS transaction on behalf of the buyer.
                 *   + `"MEMBER"`: Logged-in site member.
                 *   + `"CONTACT"`: A Wix contact.
                 */
                identityType: string;
            };
            /**
             * An object representing an line item's price information.
             */
            type LineItemPriceData = {
                /**
                 * Price of the item.
                 */
                price: number;
                /**
                 * Total price charged to the customer (per line item) after calculation of quantity and discount.
                 */
                totalPrice: number;
                /**
                 * Whether the price includes tax.
                 */
                taxIncludedInPrice: boolean;
            };
            /**
             * An object representing a line item's primary media item.
             */
            type MediaItem = {
                /**
                 * Image description for accessibility purposes.
                 */
                altText?: string;
                /**
                 * Unique media item ID.
                 */
                id: string;
                /**
                 * Media item external URL.
                 */
                externalImageUrl?: string;
                /**
                 * Media item source URL for media uploaded to Wix.
                 */
                src: string;
                /**
                 * Media item width.
                 *  One of:
                 *
                 *
                 *  - `"IMAGE"`: Image item.
                 *  - `"UNSPECIFIED_MEDIA_TYPE_ITEM"`: Media item type can't be classified due to an error.
                 */
                type: string;
            };
            /**
             * An object representing a line item option.
             */
            type Option = {
                /**
                 * Name of the product option.
                 */
                option: string;
                /**
                 * Selected option.
                 */
                selection: string;
            };
            /**
             * An object representing an order.
             */
            type Order = {
                /**
                 * Unique order ID.
                 */
                _id: string;
                /**
                 * Date and time the order was updated.
                 */
                _updatedDate: Date;
                /**
                 * The site's displayed language.
                 */
                buyerLanguage: string;
                /**
                 * The shopping cart's unique ID.
                 */
                cartId?: string;
                /**
                 * Channel information.
                 */
                channelInfo: ThankYouPage.ChannelInfo;
                /**
                 * Identity of the order's operator.
                 */
                enteredBy: ThankYouPage.EnteredBy;
                /**
                 * Billing information.
                 */
                billingInfo?: ThankYouPage.BillingInfo;
                /**
                 * Buyer information.
                 */
                buyerInfo: ThankYouPage.BuyerInfo;
                /**
                 * A note added by the buyer.
                 */
                buyerNote?: string;
                /**
                 * Date and time the order was created.
                 */
                _dateCreated: Date;
                /**
                 * Order currency.
                 */
                currency: string;
                /**
                 * Running order number.
                 */
                number: number;
                /**
                 * Shipping information.
                 */
                shippingInfo?: ThankYouPage.OrderShippingInfo;
                /**
                 * Order items.
                 */
                lineItems: ThankYouPage.OrderLineItem[];
                /**
                 * Order totals.
                 */
                totals: ThankYouPage.Totals;
                /**
                 * The unit in which the order's weight is measured. Either `"KG"` or `"LB"`.
                 */
                weightUnit: string;
                /**
                 * Information about a custom field.
                 */
                customField?: ThankYouPage.CustomField;
                /**
                 * Discount information.
                 */
                discount?: ThankYouPage.Discount;
            };
            /**
             * An object representing a line item in an order.
             */
            type OrderLineItem = {
                /**
                 * Custom text.
                 */
                customTextFields?: ThankYouPage.CustomTextField[];
                /**
                 * Line item product ID.
                 */
                productId?: string;
                /**
                 * Type of the line item.
                 *  One of:
                 *
                 *
                 *  - `"DIGITAL"`: Digital item.
                 *  - `"PHYSICAL"`: Physical item.
                 *  - `"CUSTOM_AMOUNT_ITEM"`: Item with a custom price.
                 */
                lineItemType?: string;
                /**
                 * Information about the line item's primary media item.
                 */
                mediaItem: ThankYouPage.MediaItem;
                /**
                 * Name of the line item.
                 */
                name: string;
                /**
                 * Notes about the line item.
                 */
                notes?: string;
                /**
                 * Line item options.
                 */
                options: ThankYouPage.Option[];
                /**
                 * Deprecated: see priceData.
                 */
                price: number;
                /**
                 * Line item quantity.
                 */
                quantity: number;
                /**
                 * Line item stock keeping unit.
                 */
                sku: string;
                /**
                 * Deprecated: see priceData.
                 */
                totalPrice: number;
                /**
                 * Line item weight.
                 */
                weight: number;
                /**
                 * Line item index.
                 */
                index: number;
                /**
                 * Line item's name, translated into the customer's language.
                 */
                translatedName: string;
                /**
                 * Line item's discount amount.
                 */
                discount?: number;
                /**
                 * Line item's total amount of tax applied.
                 */
                tax?: number;
                /**
                 * Price information.
                 */
                priceData?: ThankYouPage.LineItemPriceData;
                /**
                 * Tax group ID.
                 */
                taxGroupId?: string;
                /**
                 * Line item's fulfiller ID.
                 */
                fulfillerId: string;
                /**
                 * Line item's variant ID.
                 */
                variantId: string;
            };
            /**
             * An object representing an order's shipping information.
             */
            type OrderShippingInfo = {
                /**
                 * Expected date of delivery.
                 */
                deliverByDate?: Date;
                /**
                 * Delivery option name.
                 */
                deliveryOption: string;
                /**
                 * Estimated time until delivery.
                 */
                estimatedDeliveryTime?: string;
                /**
                 * Shipment details (empty if order was designated for pickup).
                 */
                shipmentDetails?: ThankYouPage.ShipmentDetails;
                /**
                 * Pickup details (empty if order was designated for delivery).
                 */
                pickupDetails?: ThankYouPage.PickupDetails;
                /**
                 * Shipping region.
                 */
                shippingRegion?: string;
            };
            /**
             * An object representing an order's pickup details.
             */
            type PickupDetails = {
                /**
                 * Pickup instructions.
                 */
                pickupInstructions?: string;
                /**
                 * Pickup address.
                 */
                pickupAddress?: ThankYouPage.Address;
                /**
                 * First name.
                 */
                firstName?: string;
                /**
                 * Last name.
                 */
                lastName?: string;
                /**
                 * Email address.
                 */
                email?: string;
                /**
                 * Phone number.
                 */
                phone?: string;
            };
            /**
             * An object representing an order's shipping details.
             */
            type ShipmentDetails = {
                /**
                 * Shipping address.
                 */
                address?: ThankYouPage.Address;
                /**
                 * Last name.
                 */
                lastName?: string;
                /**
                 * First name.
                 */
                firstName?: string;
                /**
                 * Email address.
                 */
                email?: string;
                /**
                 * Phone number.
                 */
                phone?: string;
                /**
                 * Company name.
                 */
                company?: string;
                /**
                 * VAT information.
                 */
                vatId?: ThankYouPage.VatId;
                /**
                 * Deprecated: see priceData.
                 */
                tax?: number;
                /**
                 * Deprecated: see priceData.
                 */
                discount?: number;
                /**
                 * Shipment price information.
                 */
                priceData?: ThankYouPage.ShipmentPriceData;
            };
            /**
             * An object representing shipment price information.
             */
            type ShipmentPriceData = {
                /**
                 * Price of the item.
                 */
                price: number;
                /**
                 * Whether the price includes tax.
                 */
                taxIncludedInPrice: boolean;
            };
            /**
             * An object representing information about the street name and street number of an address.
             */
            type StreetAddress = {
                /**
                 * Address street name.
                 */
                name: string;
                /**
                 * Address street number.
                 */
                number: string;
            };
            /**
             * An object representing an order's totals.
             */
            type Totals = {
                /**
                 * Total calculated discount amount.
                 */
                discount?: number;
                /**
                 * Total quantity of the the order's line items.
                 */
                quantity: number;
                /**
                 * Total shipping price, including tax.
                 */
                shipping?: number;
                /**
                 * Subtotal of all the order's line items, excluding tax.
                 */
                subtotal: number;
                /**
                 * Total amount of tax.
                 */
                tax?: number;
                /**
                 * Total price.
                 */
                total: number;
                /**
                 * Total weight of the order's items.
                 */
                weight: number;
            };
            /**
             * An object representing value added tax (VAT) information.
             */
            type VatId = {
                /**
                 * VAT number.
                 */
                number: string;
                /**
                 * VAT type. Either `"CPF"` or `"CNPJ"`.
                 */
                type: string;
            };
        }
        /**
         * [Time picker](https://support.wix.com/en/article/time-picker-settings) is an input element for capturing the time of day.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.TimePicker.html#)
         */
        namespace TimePicker {
            /**
             * An object representing an available time slot for a time picker.
             */
            type TimeSlot = {
                /**
                 * Start time for the time slot. The `startTime` must be earlier than the `endTime`, and
                 *  be in one of the following formats:
                 *  + `HH:MM` (hours and minutes)
                 *  + `HH:MM:SS` (hours, minutes, and seconds)
                 *  + `HH:MM:SS.mmm` (hours, minutes, seconds, and milliseconds)
                 *
                 *  `HH` is a 2-digit value between 0-23.
                 *
                 *  `MM` is a 2-digit value between 0-59.
                 *
                 *  `SS` is a 2-digit value between 0-59. Seconds are rounded down to the nearest minute.
                 *
                 *  `mmm` is a 3-digit value between 0-999. Milliseconds are rounded down to the nearest second.
                 *
                 *
                 *  The time picker's first input time option is the `startTime`.
                 *  This means that if the `startTime` is '10:00', the first input time option is '10:00'.
                 */
                startTime: string;
                /**
                 * End time for the time slot. The `endTime` must be later than the `startTime`, and
                 *  be in one of the following formats:
                 *  + `HH:MM` (hours and minutes)
                 *  + `HH:MM:SS` (hours, minutes, and seconds)
                 *  + `HH:MM:SS.mmm` (hours, minutes, seconds, and milliseconds)
                 *
                 *  `HH` is a 2-digit value between 0-23.
                 *  > Note that '24:00' is a valid `endTime` in order for '23:59' to be an input time option.
                 *
                 *  `MM` is a 2-digit value between 0-59.
                 *
                 *  `SS` is a 2-digit value between 0-59. Seconds are rounded down to the nearest minute.
                 *
                 *  `mmm` is a 3-digit value between 0-999.  Milliseconds are rounded down to the nearest second.
                 *
                 *
                 *  The `endTime` is not included in the time picker's input time options. This means that if the `endTime`
                 *  is '11:00', the time picker's last input time option (assuming [`step`](#step) is '1'), is '10:59'.
                 */
                endTime: string;
            };
            /**
             * Function that runs when custom validation is checked.
             */
            type TimePickerValidator = (value: string, reject: Function) => void;
        }
        /**
         * An [upload button](https://support.wix.com/en/article/content-manager-adding-and-setting-up-an-upload-button) enables site visitors to upload files to your site.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.UploadButton.html#)
         */
        namespace UploadButton {
            /**
             * The object used by the [`value`](#value) property that represents files ready for upload.
             */
            type File = {
                /**
                 * File name.
                 */
                name: string;
                /**
                 * File size in bytes.
                 */
                size: number;
                /**
                 * `true` if the file is valid for upload to the Media Manager.
                 */
                valid: boolean;
                /**
                 * Message indicating why the file is invalid. Empty if the file is valid.
                 */
                validationMessage: string;
            };
            /**
             * The error message object returned when the `uploadFiles()`'s Promise is rejected.
             */
            type UploadError = {
                /**
                 * The error's code.
                 */
                errorCode: string;
                /**
                 * The error's description.
                 */
                errorDescription: string;
            };
            /**
             * Object returned by the `startUpload()`'s Promise.
             */
            type UploadFile = {
                /**
                 * Wix URL of the successfully uploaded file.
                 */
                url: string;
                /**
                 * Wix media ID of the uploaded file.
                 */
                mediaId: string;
                /**
                 * Title of the uploaded file.
                 */
                title: string;
                /**
                 * Width of an uploaded image or video file.
                 */
                width: number;
                /**
                 * Height of an uploaded image or video file.
                 */
                height: number;
                /**
                 * Duration (in milliseconds) of an uploaded audio file.
                 */
                duration: number;
            };
            /**
             * An array of objects returned by the `uploadFiles()`'s Promise.
             */
            type UploadedFile = {
                /**
                 * Width of an uploaded image or video file.
                 */
                width: number;
                /**
                 * Height of an uploaded image or video file.
                 */
                height: number;
                /**
                 * Duration (in milliseconds) of an uploaded audio file.
                 */
                duration: number;
                /**
                 * Wix media URL of the successfully uploaded file in the following format: `'wix:image://v1//#originWidth=&originHeight=[&watermark=]'`.
                 *
                 * **Note:** This replaces the old `fileName` parameter. `fileName` will continue to work, but we recommend that you use the updated `fileUrl` parameter instead.
                 */
                fileUrl: string;
                /**
                 * **Deprecated**. Use the `fileUrl` property instead.
                 *
                 * Internal file name of the uploaded file, generated by the Media Manager. The name is the string located in the file's URL. Click [here](https://www.wix.com/velo/forum/tips-tutorials-examples/creating-a-url-for-a-media-file-or-the-truth-about-getfileurl) to learn more.
                 */
                fileName: string;
                /**
                 * Original name of the uploaded file.
                 */
                originalFileName: string;
            };
            /**
             * Contains detailed information about the validity states of a file to upload.
             */
            type ValidityState = {
                /**
                 * `true` if the file's custom validity message has been set to a non-empty string.
                 */
                customError: boolean;
                /**
                 * `true` if the file to upload meets all validations.
                 */
                valid: boolean;
                /**
                 * `true` if a file is required, and either no file has been selected, or a file has been selected but not uploaded.
                 */
                fileNotUploaded: boolean;
                /**
                 * `true` if a file has been selected but it is too large. Maximum allowed file sizes are listed [here](https://support.wix.com/en/article/supported-media-file-types-and-file-sizes).
                 */
                fileSizeExceedsLimit: boolean;
                /**
                 * `true` if a file has been selected but the file's type is not supported. Supported file types are listed [here](https://support.wix.com/en/article/supported-media-file-types-and-file-sizes).
                 */
                fileTypeNotAllowed: boolean;
                /**
                 * `true` if a file is required but no file has been selected.
                 */
                valueMissing: boolean;
                /**
                 * `true` if the text input element's value does not match its type when the type is email or url.
                 */
                typeMismatch: boolean;
                /**
                 * `true` if the element's value does not match its pattern validation.
                 */
                patternMismatch: boolean;
                /**
                 * `true` if the length of the element's value exceeds its [`maxLength`]($w.TextInputMixin.html#maxLength) property.
                 */
                tooLong: boolean;
                /**
                 * `true` if the length of the element's value is smaller than its `minlength` property.
                 */
                tooShort: boolean;
                /**
                 * `true` if the element's value is less than the its [`min`]($w.TextInput.html#min) property.
                 */
                rangeUnderflow: boolean;
                /**
                 * `true` if the element's value is more than the its [`max`]($w.TextInput.html#max) property.
                 */
                rangeOverflow: boolean;
                /**
                 * `true` if a text input element's numeric value is defined as a whole number but a decimal number is entered.
                 */
                stepMismatch: boolean;
                /**
                 * `true` if the element's value cannot be converted to a value.
                 */
                badInput: boolean;
                /**
                 * `true` if the number of files selected exceeds the limit defined in the `fileLimit` property.
                 */
                exceedsFileLimit: boolean;
                /**
                 * `true` if the element's time value is not a valid time.
                 */
                invalidTime: boolean;
                /**
                 * `true` if the element's date value is not a valid date.
                 */
                invalidDate: boolean;
            };
        }
        /**
         * Provides functionality for elements that can be validated.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ValidatableMixin.html#)
         */
        namespace ValidatableMixin {
            /**
             * Contains detailed information about the validity states of an element.
             */
            type ValidityState = {
                /**
                 * `true` if the element's custom
                 *  validity message has been set to a non-empty string.
                 */
                customError: boolean;
                /**
                 * `true` if the element meets all
                 *  constraint validations.
                 */
                valid: boolean;
                /**
                 * `true` if the element's
                 *  [`required`]($w.RequiredMixin.html#required) property is `true`, but
                 *  it does not contain a value.
                 */
                valueMissing: boolean;
                /**
                 * `true` if the text input element's value
                 *  does not match its type when the type is email or url.
                 */
                typeMismatch: boolean;
                /**
                 * `true` if the element's
                 *  value does not match its pattern validation.
                 */
                patternMismatch: boolean;
                /**
                 * `true` if the length of the
                 *  element's value exceeds its [`maxLength`]($w.TextInputMixin.html#maxLength)
                 *  property.
                 */
                tooLong: boolean;
                /**
                 * `true` if the length of the
                 *  element's value is smaller than its `minlength` property.
                 */
                tooShort: boolean;
                /**
                 * `true` if the element's
                 *  value is less than its [`min`]($w.TextInput.html#min) property.
                 */
                rangeUnderflow: boolean;
                /**
                 * `true` if the element's
                 *  value is more than its [`max`]($w.TextInput.html#max) property.
                 */
                rangeOverflow: boolean;
                /**
                 * `true` if the element is
                 *  an upload button that is required and a file has been selected but not
                 *  uploaded.
                 */
                fileNotUploaded: boolean;
                /**
                 * `true` if a text input
                 *  element's numeric value is defined as a whole number but a decimal
                 *  number is entered.
                 */
                stepMismatch: boolean;
                /**
                 * `true` if the element's value
                 *  cannot be converted to a value.
                 */
                badInput: boolean;
                /**
                 * `true` if the element's time value
                 *  is not a valid time.
                 */
                invalidTime: boolean;
                /**
                 * `true` if the element's date value
                 *  is not a valid date.
                 */
                invalidDate: boolean;
            };
        }
        /**
         * The ViewChangeEvent is triggered when the month or year changes on a date picker or appointment field element.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewChangeEvent.html#)
         */
        namespace ViewChangeEvent {
            /**
             * An object that contains information about the date picker or appointment field for which an event was triggered.
             */
            type ViewChangeEventOptions = {
                /**
                 * Start date of the currently displayed month.
                 */
                startDate: Date;
                /**
                 * End date of the currently displayed month.
                 */
                endDate: Date;
                /**
                 * Result returned by the operation.
                 */
                operationResult: any;
            };
        }
        /**
         * A `$w` element for enabling your site contacts and visitors to work with the Wix Forms app.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.WixForms.html#)
         */
        namespace WixForms {
            /**
             * Handles events fired when the Wix Form is about to be submitted.
             */
            type WixFormSubmitEventHandler = (event: WixFormSubmitEvent) => any | boolean;
            /**
             * Handles events fired when the Wix Form is not submitted due to error.
             */
            type WixFormSubmittedErrorEventHandler = (errorEvent: WixFormSubmittedErrorEvent) => void;
            /**
             * Handles events fired when the Wix Form is submitted.
             */
            type WixFormSubmittedEventHandler = (event: WixFormSubmittedEvent) => void;
        }
        /**
         * A `WixFormsV2` element displays customizable forms, collects all the info that a site visitor entered into the form fields, and lets you track all form submissions in the dashboard.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.WixFormsV2.html#)
         */
        namespace WixFormsV2 {
            /**
             * An object containing information about an input field in a form.
             */
            type FormValues = {
                /**
                 * Key is the form field name, and value is the data submitted for the given field.
                 */
                "key:value": string;
            };
            /**
             * An object containing information about the error.
             */
            type SubmissionError = {
                /**
                 * Error code.
                 */
                code: string;
                /**
                 * Error message.
                 */
                message: string;
            };
            /**
             * A callback for a form field value change.
             */
            type OnFieldValueChangeCallback = (newValues: WixFormsV2.FormValues) => void;
            /**
             * A callback for a changed form step number.
             */
            type OnStepNumberChangeCallback = (currentStepNumber: number) => void;
            /**
             * A callback for a form submission.
             */
            type OnSubmitCallback = (values: WixFormsV2.FormValues) => void;
            /**
             * A callback for a failed form submission.
             */
            type OnSubmitFailureCallback = (error: WixFormsV2.SubmissionError) => void;
            /**
             * A callback for a successful form submission.
             */
            type OnSubmitSuccessCallback = () => void;
        }
    }
}
