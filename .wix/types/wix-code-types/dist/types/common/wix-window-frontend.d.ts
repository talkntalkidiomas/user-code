/**
 * The wix-window-frontend module contains functionality that pertains to the
 *  current browser window.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#)
 */
declare module 'wix-window-frontend' {
    /**
     * Gets the locale of the site visitor's browser.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#browserLocale)
     */
    const browserLocale: string;
    /**
     * The ConsentPolicy API is used to perform actions related to the user's allowed cookies and 3rd-party data transfer, such as for GDPR or CCPA purposes.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#consentPolicy)
     */
    const consentPolicy: ConsentPolicy;
    /**
     * Gets what kind of device is being used to view the page.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#formFactor)
     */
    const formFactor: string;
    /**
     * A [lightbox](https://support.wix.com/en/article/about-lightboxes) pops up on your site to grab your visitor's attention.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#lightbox)
     */
    const lightbox: Lightbox;
    /**
     * The Multilingual API is used when working with the languages in a multilingual site.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#multilingual)
     */
    const multilingual: Multilingual;
    /**
     * Gets the HTTP referrer header field.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#referrer)
     */
    const referrer: string;
    /**
     * The [Rendering API](wix-window-frontend.html#rendering) is used to control when code is run as a page is being loaded.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#rendering)
     */
    const rendering: Rendering;
    /**
     * Gets which mode the site is currently being viewed in.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#viewMode)
     */
    const viewMode: string;
    /**
     * The Warmup Data API is used to optimize data loading for sites that render both on the server and in the browser,
     *  allowing costly data fetching operations to be done only once.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#warmupData)
     */
    const warmupData: WarmupData;
    /**
     * Copies text to the site visitor's clipboard.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#copyToClipboard)
     */
    function copyToClipboard(text: string): Promise<void>;
    /**
     * Returns the data passed to a [custom app page](https://dev.wix.com/docs/develop-websites/articles/wix-apps/build-a-custom-wix-business-app-page).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#getAppPageData)
     */
    function getAppPageData(): any;
    /**
     * Returns information about the window.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#getBoundingRect)
     */
    function getBoundingRect(): Promise<WindowSizeInfo>;
    /**
     * Returns the current geolocation of the user.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#getCurrentGeolocation)
     */
    function getCurrentGeolocation(): Promise<CurrentGeolocation>;
    /**
     * Returns the data that a router passed to the page in its response.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#getRouterData)
     */
    function getRouterData(): any;
    /**
     * Opens a lightbox and optionally passes it the given data.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#openLightbox)
     */
    function openLightbox(name: string, data?: any): Promise<any>;
    /**
     * Opens a modal window that displays the specified web page.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#openModal)
     */
    function openModal(url: string, options: OpenModalOptions): Promise<void>;
    /**
     * Sends a message to the page's parent.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#postMessage)
     */
    function postMessage(message: any, target?: string): Promise<any>;
    /**
     * Scrolls the page by a given number of pixels.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#scrollBy)
     */
    function scrollBy(x: number, y: number): Promise<void>;
    /**
     * Scrolls the page to a specific location on the page.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#scrollTo)
     */
    function scrollTo(x: number, y: number, options?: ScrollToOptions): Promise<void>;
    /**
     * Sends a tracking event to external analytics tools.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.html#trackEvent)
     */
    function trackEvent(eventName: string, parameters: trackingParametersCustomEvent | trackingParametersAddPaymentInfoEvent | trackingParametersAddProductImpressionEvent | trackingParametersAddToCartEvent | trackingParametersCheckoutStepEvent | trackingParametersClickProductEvent | trackingParametersInitiateCheckoutEvent | trackingParametersLeadEvent | trackingParametersPurchaseEvent | trackingParametersRemoveFromCartEvent | trackingParametersStartPaymentEvent | trackingParametersViewContentEvent): void;
    /**
     * An object that defines the location.
     */
    type Coordinates = {
        /**
         * The position's latitude in decimal degrees.
         */
        latitude: number;
        /**
         * The position's longitude in decimal degrees.
         */
        longitude: number;
        /**
         * The position's altitude in meters, relative to sea level. This value may be null if the browser cannot provide the data.
         */
        altitude: number;
        /**
         * The accuracy in meters of the `latitude` and `longitude` properties.
         */
        accuracy: number;
        /**
         * The accuracy in meters of the `altitude` property. This value may be null.
         */
        altitudeAccuracy: number;
        /**
         * The direction in degrees in which the device is traveling. It indicates how far off from heading true north the device is. If `speed` is `0`, the heading is `NaN`. This value may be null if the browser cannot provide the data.
         */
        heading: number;
        /**
         * The velocity in meters per second of the device. This value may be null if the browser cannot provide the data.
         */
        speed: number;
    };
    /**
     * An object returned by the `getCurrentGeolocation()` function that contains information about the current geolocation.
     */
    type CurrentGeolocation = {
        /**
         * The geolocation timestamp representing the date and time at which the location was retrieved.
         */
        timestamp: string;
        /**
         * An object that defines the location.
         */
        coords: Coordinates;
    };
    /**
     * A custom parameter used when sending a CustomEvent track event.
     */
    type CustomType = {};
    /**
     * An object containing the size of the actual body of the page, which may be larger or smaller than the current window.
     */
    type DocumentSize = {
        /**
         * The height of the page body.
         */
        height: number;
        /**
         * The width of the page body.
         */
        width: number;
    };
    /**
     * An object used when opening a modal window.
     */
    type OpenModalOptions = {
        /**
         * Width of the modal window.
         */
        width: number;
        /**
         * Height of the modal window.
         */
        height: number;
    };
    /**
     * An object containing the scroll offset of the page within the window from the top-left corner.
     */
    type ScrollOffset = {
        /**
         * The horizontal scroll offset of the page within the window from the left.
         */
        x: number;
        /**
         * The vertical scroll offset of the page within the window from the top.
         */
        y: number;
    };
    /**
     * An object used for providing options for the `scrollTo()` method.
     */
    type ScrollToOptions = {
        /**
         * Indicates whether to scroll with an animation. Defaults to `true`.
         */
        scrollAnimation: boolean;
    };
    /**
     * An object containing the size of the viewable area of the current browser window.
     */
    type WindowSize = {
        /**
         * The height of the window.
         */
        height: number;
        /**
         * The width of the window.
         */
        width: number;
    };
    /**
     * An object returned by the `getBoundingRect()` function that contains information about the window's size, the document's size, and the current scroll position.
     */
    type WindowSizeInfo = {
        /**
         * An object containing the size of the viewable area of the current browser window.
         */
        window: WindowSize;
        /**
         * An object containing the size of the actual body of the page, which may be larger or smaller than the current window.
         */
        document: DocumentSize;
        /**
         * An object containing the scroll offset of the page within the window from the top-left corner.
         */
        scroll: ScrollOffset;
    };
    /**
     * Objects used when calling the [`trackEvent()`](wix-window-frontend.html#trackEvent) function.
     */
    type trackingParameters = {
        /**
         * Object used for `AddPaymentInfo` events.
         */
        AddPaymentInfoEvent?: trackingParametersAddPaymentInfoEvent;
        /**
         * Object used for `AddProductImpression` events.
         */
        AddProductImpressionEvent?: trackingParametersAddProductImpressionEvent;
        /**
         * Object used for `AddToCart` events.
         */
        AddToCartEvent?: trackingParametersAddToCartEvent;
        /**
         * Object used for `CheckoutStep` events.
         */
        CheckoutStepEvent?: trackingParametersCheckoutStepEvent;
        /**
         * Object used for `ClickProduct` events.
         */
        ClickProductEvent?: trackingParametersClickProductEvent;
        /**
         * Object used for `InitiateCheckout` events.
         */
        InitiateCheckoutEvent?: trackingParametersInitiateCheckoutEvent;
        /**
         * Object used for `Lead` events.
         */
        LeadEvent?: trackingParametersLeadEvent;
        /**
         * Object used for `Purchase` events.
         */
        PurchaseEvent?: trackingParametersPurchaseEvent;
        /**
         * Object used for `RemoveFromCart` events.
         */
        RemoveFromCartEvent?: trackingParametersRemoveFromCartEvent;
        /**
         * Object used for `StartPayment` events.
         */
        StartPaymentEvent?: trackingParametersStartPaymentEvent;
        /**
         * Object used for `ViewContent` events.
         */
        ViewContentEvent?: trackingParametersViewContentEvent;
        /**
         * Object used for custom events.
         */
        CustomEvent?: trackingParametersCustomEvent;
    };
    /**
     * An object used when sending an `AddPaymentInfo` track event.
     */
    type trackingParametersAddPaymentInfoEvent = {
        /**
         * Event origin. For example, `Music Player` or `Contact Form`.
         */
        origin?: string;
        /**
         * Payment type. For example, `Visa` or `PayPal`.
         */
        option?: string;
    };
    /**
     * An object used when sending an AddProductImpression track event.
     */
    type trackingParametersAddProductImpressionEvent = {
        /**
         * Event origin. For example, `Music Player` or `Contact Form`.
         */
        origin?: string;
        /**
         * `key:value` pairs describing the products.
         */
        contents: trackingParametersAddProductImpressionEventContents[];
    };
    /**
     * An object used when sending an AddProductImpression track event.
     */
    type trackingParametersAddProductImpressionEventContents = {
        /**
         * Product ID.
         */
        id?: string;
        /**
         * Stock-keeping unit for the product.
         */
        sku?: string;
        /**
         * Product name.
         */
        name: string;
        /**
         * Product category. For example, `Accessories/Watches`.
         */
        category?: string;
        /**
         * Product price.
         */
        price?: number;
        /**
         * Currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217). For example, `EUR`, `USD`, or `CAD`.
         */
        currency?: string;
        /**
         * Brand name of the product.
         */
        brand?: string;
        /**
         * Product variant such as `green` or `large`.
         */
        variant?: string;
        /**
         * List or collection the product is part of. For example, `Product Gallery` or `Search Results`.
         */
        list?: string;
        /**
         * Position of the product within a list or collection.
         */
        position?: string;
    };
    /**
     * An object used when sending an AddToCart track event.
     */
    type trackingParametersAddToCartEvent = {
        /**
         * Event origin. For example, `Music Player` or `Contact Form`.
         */
        origin?: string;
        /**
         * Product ID.
         */
        id?: string;
        /**
         * Stock-keeping unit for the product.
         */
        sku?: string;
        /**
         * Product name.
         */
        name: string;
        /**
         * Product price.
         */
        price?: number;
        /**
         * Currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217). For example, `EUR`, `USD`, or `CAD`.
         */
        currency?: string;
        /**
         * Product category. For example, `Accessories/Watches`.
         */
        category?: string;
        /**
         * Brand name of the product.
         */
        brand?: string;
        /**
         * Product variant such as `green` or `large`.
         */
        variant?: string;
        /**
         * List or collection the product is part of. For example, `Product Gallery` or `Search Results`.
         */
        position?: string;
        /**
         * Product quantity.
         */
        quantity?: number;
    };
    /**
     * An object used when sending an CheckoutStep track event.
     */
    type trackingParametersCheckoutStepEvent = {
        /**
         * Event origin. For example, `Music Player` or `Contact Form`.
         */
        origin?: string;
        /**
         * Number of the step in the checkout process.
         * For example `2` for `addPaymentInfo` in a checkout flow that consists of the steps `StartPayment`, `addPaymentInfo`, and `Select Shipping`.
         */
        step?: string;
        /**
         * Action the visitor has taken in this step. For example, `Select Shipping`.
         */
        action?: string;
        /**
         * Option information on the checkout page. For example the selected payment method.
         */
        option?: string;
    };
    /**
     * An object used when sending a ClickProduct track event.
     */
    type trackingParametersClickProductEvent = {
        /**
         * Event origin. For example, `Music Player` or `Contact Form`.
         */
        origin?: string;
        /**
         * Product ID.
         */
        id?: string;
        /**
         * Stock-keeping unit for the product.
         */
        sku?: string;
        /**
         * Product name.
         */
        name: string;
        /**
         * Product price.
         */
        price?: number;
        /**
         * Currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217). For example, `EUR`, `USD`, or `CAD`.
         */
        currency?: string;
        /**
         * Product category. For example, `Accessories/Watches`.
         */
        category?: string;
        /**
         * Brand name of the product.
         */
        brand?: string;
        /**
         * Product variant such as `green` or `large`.
         */
        variant?: string;
        /**
         * List or collection the product is part of. For example, `Product Gallery` or `Search Results`.
         */
        list?: string;
        /**
         * Position of the product within a list or collection.
         */
        position?: string;
    };
    /**
     * An object used when sending a CustomEvent track event.
     */
    type trackingParametersCustomEvent = {
        /**
         * Event category. **Note:** Required for Google Analytics and Facebook Pixel.
         */
        eventCategory?: string;
        /**
         * Event action type. **Note:** Required for Google Analytics and Facebook Pixel.
         */
        eventAction?: string;
        /**
         * Event label.
         */
        eventLabel?: string;
        /**
         * Event value.
         */
        eventValue?: number;
        /**
         * Any number of custom properties.
         */
        "*"?: CustomType;
    };
    /**
     * An object used when sending an InitiateCheckout track event.
     */
    type trackingParametersInitiateCheckoutEvent = {
        /**
         * Event origin. For example, `Music Player` or `Contact Form`.
         */
        origin?: string;
        /**
         * `key:value` pairs describing the products.
         */
        contents: trackingParametersInitiateCheckoutEventContents[];
    };
    /**
     * An object used when sending an InitiateCheckout track event.
     */
    type trackingParametersInitiateCheckoutEventContents = {
        /**
         * Product ID.
         */
        id?: string;
        /**
         * Stock-keeping unit for the product.
         */
        sku?: string;
        /**
         * Product name.
         */
        name: string;
        /**
         * Product category. For example, `Accessories/Watches`.
         */
        category?: string;
        /**
         * Product price.
         */
        price?: number;
        /**
         * Currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217). For example, `EUR`, `USD`, or `CAD`.
         */
        currency?: string;
        /**
         * Brand name of the product.
         */
        brand?: string;
        /**
         * Product variant such as `green` or `large`.
         */
        variant?: string;
        /**
         * Product quantity.
         */
        quantity?: number;
    };
    /**
     * An object used when sending a Lead track event.
     */
    type trackingParametersLeadEvent = {
        /**
         * Lead category.
         */
        category?: string;
        /**
         * Lead action.
         */
        action?: string;
        /**
         * Lead label.
         */
        label?: string;
    };
    /**
     * An object used when sending a Purchase track event.
     */
    type trackingParametersPurchaseEvent = {
        /**
         * Event origin. For example, `Music Player` or `Contact Form`.
         */
        origin?: string;
        /**
         * Transaction ID or order number.
         */
        id?: string;
        /**
         * Store name.
         */
        affiliation?: string;
        /**
         * Total purchase price. Includes tax and shipping fee.
         */
        revenue?: number;
        /**
         * Total tax.
         */
        tax?: number;
        /**
         * Shipping fee.
         */
        shipping?: number;
        /**
         * Applied coupon code.
         */
        coupon?: string;
        /**
         * `key:value` pairs describing the purchased products.
         */
        contents: trackingParametersPurchaseEventContents[];
    };
    /**
     * An object used when sending an Purchase track event.
     */
    type trackingParametersPurchaseEventContents = {
        /**
         * Product ID.
         */
        id?: string;
        /**
         * Product name.
         */
        name: string;
        /**
         * Product category. For example, `Accessories/Watches`.
         */
        category?: string;
        /**
         * Product price.
         */
        price?: number;
        /**
         * Currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217). For example, `EUR`, `USD`, or `CAD`.
         */
        currency?: string;
        /**
         * Brand name of the product.
         */
        brand?: string;
        /**
         * Product variant such as `green` or `large`.
         */
        variant?: string;
        /**
         * Product quantity.
         */
        quantity?: number;
    };
    /**
     * An object used when sending a RemoveFromCart track event.
     */
    type trackingParametersRemoveFromCartEvent = {
        /**
         * Event origin. For example, `Music Player` or `Contact Form`.
         */
        origin?: string;
        /**
         * Product ID.
         */
        id?: string;
        /**
         * Product name.
         */
        name: string;
        /**
         * Product price.
         */
        price?: number;
        /**
         * Currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217). For example, `EUR`, `USD`, or `CAD`.
         */
        currency?: string;
        /**
         * Product category. For example, `Accessories/Watches`.
         */
        category?: string;
        /**
         * Brand name of the product.
         */
        brand?: string;
        /**
         * Product variant such as `green` or `large`.
         */
        variant?: string;
        /**
         * Position of the product within a list or collection.
         */
        position?: string;
        /**
         * Product quantity.
         */
        quantity?: number;
    };
    /**
     * An object used when sending an StartPayment track event.
     */
    type trackingParametersStartPaymentEvent = {
        /**
         * Event origin. For example, `Music Player` or `Contact Form`.
         */
        origin?: string;
        /**
         * Payment type. For example, `Visa` or `PayPal`.
         */
        option?: string;
    };
    /**
     * An object used when sending a ViewContent track event.
     */
    type trackingParametersViewContentEvent = {
        /**
         * Event origin. For example, `Music Player` or `Contact Form`.
         */
        origin?: string;
        /**
         * Product ID.
         */
        id?: string;
        /**
         * Stock-keeping unit for the product.
         */
        sku?: string;
        /**
         * Product name.
         */
        name: string;
        /**
         * Product price.
         */
        price?: number;
        /**
         * Currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217). For example, `EUR`, `USD`, or `CAD`.
         */
        currency?: string;
        /**
         * Product category. For example, `Accessories/Watches`.
         */
        category?: string;
        /**
         * Brand name of the product.
         */
        brand?: string;
        /**
         * Product variant such as `green` or `large`.
         */
        variant?: string;
        /**
         * List or collection the product is part of. For example, `Product Gallery` or `Search Results`.
         */
        list?: string;
        /**
         * Position of the product within a list or collection.
         */
        position?: string;
    };
    /**
     * The ConsentPolicy API is used to perform actions related to the user's allowed cookies and 3rd-party data transfer, such as for GDPR or CCPA purposes.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.ConsentPolicy.html#)
     */
    interface ConsentPolicy {
        /**
         * Gets the visitor's consent policy regarding allowed cookies and 3rd-party data transfer, such as for GDPR or CCPA purposes.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.ConsentPolicy.html#getCurrentConsentPolicy)
         */
        getCurrentConsentPolicy(): ConsentPolicy.PolicyDetails;
        /**
         * Sets the function that runs
         * when a visitor's consent policy was changed using
         * [`setConsentPolicy()`](#setConsentPolicy) or reset using
         * [`resetConsentPolicy()`](#resetConsentPolicy).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.ConsentPolicy.html#onConsentPolicyChanged)
         */
        onConsentPolicyChanged(handler: ConsentPolicy.ConsentPolicyChangedHandler): void;
        /**
         * Removes the current policy from the visitor's browser
         * and resets the visitor's consent policy to the default policy for the site.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.ConsentPolicy.html#resetConsentPolicy)
         */
        resetConsentPolicy(): Promise<void>;
        /**
         * Sets the current visitor's consent policy
         * regarding allowed cookies and data transfer to 3rd parties,
         * such as for GDPR or CCPA purposes.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.ConsentPolicy.html#setConsentPolicy)
         */
        setConsentPolicy(policy: ConsentPolicy.Policy): Promise<ConsentPolicy.PolicyDetails>;
    }
    /**
     * A [lightbox](https://support.wix.com/en/article/about-lightboxes) pops up on your site to grab your visitor's attention.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.Lightbox.html#)
     */
    interface Lightbox {
        /**
         * Closes the lightbox.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.Lightbox.html#close)
         */
        close(data?: any): void;
        /**
         * Returns the data object that was passed to a lightbox.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.Lightbox.html#getContext)
         */
        getContext(): any;
    }
    /**
     * The Multilingual API is used when working with the languages in a multilingual site.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.Multilingual.html#)
     */
    interface Multilingual {
        /**
         * Sets or gets the site's current display language.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.Multilingual.html#currentLanguage)
         */
        currentLanguage: string;
        /**
         * Gets whether the site has been set up to be shown in multiple languages.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.Multilingual.html#isEnabled)
         */
        readonly isEnabled: boolean;
        /**
         * Gets information about the site's languages.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.Multilingual.html#siteLanguages)
         */
        readonly siteLanguages: Multilingual.SiteLanguage[];
    }
    /**
     * The Rendering API is used to control when code is run as a page is being loaded.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.Rendering.html#)
     */
    interface Rendering {
        /**
         * Gets the current environment the rendering process is running in.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.Rendering.html#env)
         */
        readonly env: string;
    }
    /**
     * The Warmup Data API is used to optimize data loading for sites that render both on the server and in the browser,
     *  allowing costly data fetching operations to be done only once.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.WarmupData.html#)
     */
    interface WarmupData {
        /**
         * Gets data from server-side code for use in client-side code.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.WarmupData.html#get)
         */
        get(key: string): any;
        /**
         * Sets data in server-side code for use in client-side code.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.WarmupData.html#set)
         */
        set(key: string, data: any): void;
    }
    /**
     * The ConsentPolicy API is used to perform actions related to the user's allowed cookies and 3rd-party data transfer, such as for GDPR or CCPA purposes.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.ConsentPolicy.html#)
     */
    namespace ConsentPolicy {
        /**
         * The event that occurred when the consent policy changed.
         */
        type ConsentPolicyChangedEvent = {};
        /**
         * The current user's consent policy settings.
         */
        type Policy = {
            /**
             * Consent for mandatory cookies for Wix websites, such as for security cookies. Wix places these cookies on your device and these cookies do not require user consent. Always `true`.
             */
            essential: boolean;
            /**
             * Consent for cookies placed on the user's device that "remember" user settings to improve user experience. For example, an indication that the user dismissed a popup. The default is `true`.
             */
            functional: boolean;
            /**
             * Consent for cookies used for analytics, such as Wix analytics, Google Analytics, Yandex Metrica, and so on. The default is `true`.
             */
            analytics: boolean;
            /**
             * Consent for cookies used for advertising purposes. This includes 3rd-party scripts and pixels that may potentially place advertising cookies on the device (such as Twitter page view and Facebook Pixel). The default is `true`.
             */
            advertising: boolean;
            /**
             * Consent for a user's personal data to be transferred to a 3rd party (such as Google Analytics, Facebook Pixel, and FullStory). The default is `true`.
             */
            dataToThirdParty: boolean;
        };
        /**
         * The complete details of the current user's consent policy.
         */
        type PolicyDetails = {
            /**
             * Whether the policy is the default consent policy set by the site owner. If `true`, either the user has not set a policy or the site owner has reset the policy.
             */
            defaultPolicy: boolean;
            /**
             * An object representing the user's current consent policy.
             */
            policy: ConsentPolicy.Policy;
            /**
             * If a cookie exists in the browser defining the current consent policy, the date the policy was set. Otherwise, undefined.
             */
            createdDate?: Date;
        };
        /**
         * Function that runs when a user's consent policy was changed using [`setConsentPolicy()`](#setConsentPolicy).
         */
        type ConsentPolicyChangedHandler = (event: ConsentPolicy.ConsentPolicyChangedEvent) => void;
    }
    /**
     * The Multilingual API is used when working with the languages in a multilingual site.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-window-frontend.Multilingual.html#)
     */
    namespace Multilingual {
        /**
         * An object returned by the `siteLanguages` property that contains information about the site's languages.
         */
        type SiteLanguage = {
            /**
             * The language's full name.
             */
            name: string;
            /**
             * The language's locale code, which represents a set of language-related formatting preferences.
             */
            locale: string;
            /**
             * The language's two-letter code.
             */
            languageCode: string;
            /**
             * The language's three-letter country code.
             */
            countryCode: string;
            /**
             * Whether the language is the site's primary language.
             */
            isPrimaryLanguage: boolean;
        };
    }
}
