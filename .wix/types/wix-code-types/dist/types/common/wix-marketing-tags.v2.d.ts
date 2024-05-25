declare module "wix-marketing-tags.v2" {
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface MarketingTag extends MarketingTagParamsOneOf {
        /**
         * A [Google Ads Conversion tag](https://support.google.com/tagmanager/answer/6105160?hl=en&ref_topic=6334091)
         * lets site owners analyze what a visitor does after clicking on a Google ad.
         */
        googleAds?: GoogleAds;
        /**
         * A [Google Analytics tag](https://support.google.com/tagmanager/topic/6333310?hl=en&ref_topic=3002579)
         * lets site owners track page views, where visitors are coming from, how long they stay, and
         * what keywords they used to find the site. Both [Google Universal Analytics Tags](https://support.google.com/tagmanager/answer/6107124?hl=en&ref_topic=6333310)
         * and [Google Analytics 4 tags](https://support.google.com/tagmanager/answer/9442095?hl=en&ref_topic=6333310)
         * are supported.
         */
        googleAnalytics?: GoogleAnalytics;
        /**
         * A [Yandex Metrica tag](https://yandex.com/support/metrica/index.html) lets site
         * owners build visual reports of visitor activity that helps them evaluate the
         * performance of their marketing campaigns.
         */
        yandexMetrica?: YandexMetrica;
        /**
         * A [Facebook Pixel tag](https://developers.facebook.com/docs/facebook-pixel/)
         * allows site owners to track Facebook ad-driven visitor activity on their site.
         */
        facebookPixel?: FacebookPixel;
        /**
         * A [Google tag](https://support.google.com/tagmanager/answer/6102821?hl=en&ref_topic=3441530)
         * lets site owners implement a quick and easy tag management system that keeps
         * 3rd party code snippets organized.
         */
        googleTagManager?: GoogleTagManager;
        /**
         * A [TikTok Pixel](https://ads.tiktok.com/help/article?aid=9663)
         * allows site owners to share visitor events to TikTok on their site.
         */
        tikTokPixel?: TikTokPixel;
        /**
         * A [Google tag manager consent mode tag](https://support.google.com/tagmanager/answer/6102821?hl=en&ref_topic=3441530)
         * lets site owners implement a quick and easy tag management system that keeps
         * 3rd party code snippets organized.
         */
        googleTagManagerConsentMode?: GoogleTagManagerConsentMode;
        /**
         * A [Google Analytics consent mode tag](https://developers.google.com/tag-platform/gtagjs/reference)
         * lets site owners track page views, where visitors are coming from, how long they stay, and
         * what keywords they used to find the site.
         */
        googleAnalyticsConsentMode?: GoogleAnalyticsConsentMode;
        /**
         * Marketing tag ID.
         * @readonly
         */
        _id?: string;
        /**
         * Marketing tag type. Supported values: `"GOOGLE_ADS"`, `"GOOGLE_ANALYTICS"`, `"YANDEX_METRICA"`, `"FACEBOOK_PIXEL"`, `"GOOGLE_TAG_MANAGER"`.
         * @readonly
         */
        type?: Type;
        /**
         * Whether this tag is enabled.
         * Defaults to `true`.
         */
        enabled?: boolean | null;
    }
    /** @oneof */
    interface MarketingTagParamsOneOf {
        /**
         * A [Google Ads Conversion tag](https://support.google.com/tagmanager/answer/6105160?hl=en&ref_topic=6334091)
         * lets site owners analyze what a visitor does after clicking on a Google ad.
         */
        googleAds?: GoogleAds;
        /**
         * A [Google Analytics tag](https://support.google.com/tagmanager/topic/6333310?hl=en&ref_topic=3002579)
         * lets site owners track page views, where visitors are coming from, how long they stay, and
         * what keywords they used to find the site. Both [Google Universal Analytics Tags](https://support.google.com/tagmanager/answer/6107124?hl=en&ref_topic=6333310)
         * and [Google Analytics 4 tags](https://support.google.com/tagmanager/answer/9442095?hl=en&ref_topic=6333310)
         * are supported.
         */
        googleAnalytics?: GoogleAnalytics;
        /**
         * A [Yandex Metrica tag](https://yandex.com/support/metrica/index.html) lets site
         * owners build visual reports of visitor activity that helps them evaluate the
         * performance of their marketing campaigns.
         */
        yandexMetrica?: YandexMetrica;
        /**
         * A [Facebook Pixel tag](https://developers.facebook.com/docs/facebook-pixel/)
         * allows site owners to track Facebook ad-driven visitor activity on their site.
         */
        facebookPixel?: FacebookPixel;
        /**
         * A [Google tag](https://support.google.com/tagmanager/answer/6102821?hl=en&ref_topic=3441530)
         * lets site owners implement a quick and easy tag management system that keeps
         * 3rd party code snippets organized.
         */
        googleTagManager?: GoogleTagManager;
        /**
         * A [TikTok Pixel](https://ads.tiktok.com/help/article?aid=9663)
         * allows site owners to share visitor events to TikTok on their site.
         */
        tikTokPixel?: TikTokPixel;
        /**
         * A [Google tag manager consent mode tag](https://support.google.com/tagmanager/answer/6102821?hl=en&ref_topic=3441530)
         * lets site owners implement a quick and easy tag management system that keeps
         * 3rd party code snippets organized.
         */
        googleTagManagerConsentMode?: GoogleTagManagerConsentMode;
        /**
         * A [Google Analytics consent mode tag](https://developers.google.com/tag-platform/gtagjs/reference)
         * lets site owners track page views, where visitors are coming from, how long they stay, and
         * what keywords they used to find the site.
         */
        googleAnalyticsConsentMode?: GoogleAnalyticsConsentMode;
    }
    enum Type {
        /** Illegal default value, exception will be thrown if used */
        UNKNOWN = "UNKNOWN",
        GOOGLE_ADS = "GOOGLE_ADS",
        GOOGLE_ANALYTICS = "GOOGLE_ANALYTICS",
        YANDEX_METRICA = "YANDEX_METRICA",
        FACEBOOK_PIXEL = "FACEBOOK_PIXEL",
        GOOGLE_TAG_MANAGER = "GOOGLE_TAG_MANAGER",
        TIKTOK_PIXEL = "TIKTOK_PIXEL",
        GOOGLE_TAG_MANAGER_CONSENT_MODE = "GOOGLE_TAG_MANAGER_CONSENT_MODE",
        GOOGLE_ANALYTICS_CONSENT_MODE = "GOOGLE_ANALYTICS_CONSENT_MODE"
    }
    interface GoogleAds {
        /** Domain associated with the Google Ads Conversion tag. */
        domain?: string;
        /**
         * Conversion ID in AW-123456789 format.
         * Specifies which Google property is associated with the site owner.
         */
        trackingId?: string;
    }
    interface GoogleAnalytics {
        /** Domain associated with the Google Analytics tag. */
        domain?: string;
        /**
         * Measurement ID for Google Analytics 4 tags in G-12345 format,
         * or Analytics ID for Google Universal Analytics tags in UA-12345-1 format.
         * Specifies which Google property is associated with the site owner.
         */
        trackingId?: string;
        /** Whether IP addresses of site visitors are hidden from Google. */
        ipAnonymization?: boolean | null;
    }
    interface YandexMetrica {
        /** Domain associated with the Yandex Metrica tag. */
        domain?: string;
        /**
         * Yandex Tag Number in 123456789 format.
         * Specifies which Yandex tag is associated with the site owner.
         */
        trackingId?: string;
    }
    interface FacebookPixel {
        /** Domain associated with the Facebook Pixel tag. */
        domain?: string;
        /**
         * Pixel ID in 123456789 format.
         * Specifies which Facebook Pixel is associated with the site owner.
         */
        trackingId?: string;
    }
    interface GoogleTagManager {
        /** Domain associated with the Google tag. */
        domain?: string;
        /**
         * Tag Manager Container ID in GTM-12345 format.
         * Specifies which Google Tag Manager Container is associated with the site owner.
         */
        trackingId?: string;
    }
    interface TikTokPixel {
        /** Domain associated with the TikTok Pixel. */
        domain?: string;
        /** Specifies which TikTok Pixel is associated with the site owner. */
        trackingId?: string;
    }
    interface GoogleTagManagerConsentMode {
        /** Domain associated with the Google tag. */
        domain?: string;
        /**
         * Tag Manager Container ID.
         * Specifies which Google Tag Manager Container is associated with the site owner.
         */
        trackingId?: string;
    }
    interface GoogleAnalyticsConsentMode {
        /** Domain associated with the Google Analytics tag. */
        domain?: string;
        /**
         * Measurement ID for Google Analytics 4 tags in G-12345 format,
         * or Analytics ID for Google Universal Analytics tags in UA-12345-1 format.
         * Specifies which Google property is associated with the site owner.
         */
        trackingId?: string;
        /** Whether IP addresses of site visitors are hidden from Google. */
        ipAnonymization?: boolean | null;
    }
    interface HtmlEmbedUpdateMessage {
        /** Site's id */
        siteId?: string;
    }
    interface UpsertMarketingTagRequest {
        /** Marketing tag to create or update. */
        tag: MarketingTag;
    }
    interface UpsertMarketingTagResponse {
        /** Created or updated marketing tag. */
        tag?: MarketingTag;
    }
    interface ListMarketingTagsRequest {
        /** Information about which tags to retrieve. */
        filter?: Filter;
    }
    /** Information about which marketing tags to retrieve. */
    interface Filter {
        /** Filter by tag type. Supported values: `"GOOGLE_ADS"`, `"GOOGLE_ANALYTICS"`, `"YANDEX_METRICA"`, `"FACEBOOK_PIXEL"`, `"GOOGLE_TAG_MANAGER"`. */
        byType?: Type;
    }
    interface ListMarketingTagsResponse {
        /** List of marketing tags. */
        tags?: MarketingTag[];
    }
    interface DeleteMarketingTagRequest {
        /** Marketing tag to delete. Supported values: `"GOOGLE_ADS"`, `"GOOGLE_ANALYTICS"`, `"YANDEX_METRICA"`, `"FACEBOOK_PIXEL"`, `"GOOGLE_TAG_MANAGER"`. */
        type?: Type;
    }
    interface DeleteMarketingTagResponse {
    }
    interface DeleteMarketingTagV2Request {
        /** Marketing tag to delete. Supported values: `"GOOGLE_ADS"`, `"GOOGLE_ANALYTICS"`, `"YANDEX_METRICA"`, `"FACEBOOK_PIXEL"`, `"GOOGLE_TAG_MANAGER"`. */
        tagType?: Type;
    }
    interface DeleteMarketingTagV2Response {
    }
    /**
     * Creates or updates a marketing tag.
     * <!--
     * > __Note__: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @param tag - Marketing tag to create or update.
     * @public
     * @documentationMaturity preview
     * @requiredField tag
     * @adminMethod
     */
    function upsertMarketingTag(tag: MarketingTag): Promise<UpsertMarketingTagResponse>;
    /**
     * Retrieves marketing tags given the provided filter.
     * <!--
     * > __Note__: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @param options - Information about the marketing tags to retrieve.
     * @adminMethod
     */
    function listMarketingTags(options?: ListMarketingTagsOptions): Promise<ListMarketingTagsResponse>;
    interface ListMarketingTagsOptions {
        /** Information about which tags to retrieve. */
        filter?: Filter;
    }
    /**
     * Deletes a marketing tag.
     * <!-- Commented this out.
     * > __Note__: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @param options - Options to use when deleting a marketing tag.
     * @adminMethod
     */
    function deleteMarketingTag(options?: DeleteMarketingTagOptions): Promise<void>;
    interface DeleteMarketingTagOptions {
        /** Information about the marketing tag to delete. */
        type?: Type;
    }
    interface DeleteMarketingTagV2Options {
        /** Marketing tag to delete. Supported values: `"GOOGLE_ADS"`, `"GOOGLE_ANALYTICS"`, `"YANDEX_METRICA"`, `"FACEBOOK_PIXEL"`, `"GOOGLE_TAG_MANAGER"`. */
        tagType?: Type;
    }
    const marketingV1Tag_universal_d___debug: typeof __debug;
    type marketingV1Tag_universal_d_MarketingTag = MarketingTag;
    type marketingV1Tag_universal_d_MarketingTagParamsOneOf = MarketingTagParamsOneOf;
    type marketingV1Tag_universal_d_Type = Type;
    const marketingV1Tag_universal_d_Type: typeof Type;
    type marketingV1Tag_universal_d_GoogleAds = GoogleAds;
    type marketingV1Tag_universal_d_GoogleAnalytics = GoogleAnalytics;
    type marketingV1Tag_universal_d_YandexMetrica = YandexMetrica;
    type marketingV1Tag_universal_d_FacebookPixel = FacebookPixel;
    type marketingV1Tag_universal_d_GoogleTagManager = GoogleTagManager;
    type marketingV1Tag_universal_d_TikTokPixel = TikTokPixel;
    type marketingV1Tag_universal_d_GoogleTagManagerConsentMode = GoogleTagManagerConsentMode;
    type marketingV1Tag_universal_d_GoogleAnalyticsConsentMode = GoogleAnalyticsConsentMode;
    type marketingV1Tag_universal_d_HtmlEmbedUpdateMessage = HtmlEmbedUpdateMessage;
    type marketingV1Tag_universal_d_UpsertMarketingTagRequest = UpsertMarketingTagRequest;
    type marketingV1Tag_universal_d_UpsertMarketingTagResponse = UpsertMarketingTagResponse;
    type marketingV1Tag_universal_d_ListMarketingTagsRequest = ListMarketingTagsRequest;
    type marketingV1Tag_universal_d_Filter = Filter;
    type marketingV1Tag_universal_d_ListMarketingTagsResponse = ListMarketingTagsResponse;
    type marketingV1Tag_universal_d_DeleteMarketingTagRequest = DeleteMarketingTagRequest;
    type marketingV1Tag_universal_d_DeleteMarketingTagResponse = DeleteMarketingTagResponse;
    type marketingV1Tag_universal_d_DeleteMarketingTagV2Request = DeleteMarketingTagV2Request;
    type marketingV1Tag_universal_d_DeleteMarketingTagV2Response = DeleteMarketingTagV2Response;
    const marketingV1Tag_universal_d_upsertMarketingTag: typeof upsertMarketingTag;
    const marketingV1Tag_universal_d_listMarketingTags: typeof listMarketingTags;
    type marketingV1Tag_universal_d_ListMarketingTagsOptions = ListMarketingTagsOptions;
    const marketingV1Tag_universal_d_deleteMarketingTag: typeof deleteMarketingTag;
    type marketingV1Tag_universal_d_DeleteMarketingTagOptions = DeleteMarketingTagOptions;
    type marketingV1Tag_universal_d_DeleteMarketingTagV2Options = DeleteMarketingTagV2Options;
    namespace marketingV1Tag_universal_d {
        export { marketingV1Tag_universal_d___debug as __debug, marketingV1Tag_universal_d_MarketingTag as MarketingTag, marketingV1Tag_universal_d_MarketingTagParamsOneOf as MarketingTagParamsOneOf, marketingV1Tag_universal_d_Type as Type, marketingV1Tag_universal_d_GoogleAds as GoogleAds, marketingV1Tag_universal_d_GoogleAnalytics as GoogleAnalytics, marketingV1Tag_universal_d_YandexMetrica as YandexMetrica, marketingV1Tag_universal_d_FacebookPixel as FacebookPixel, marketingV1Tag_universal_d_GoogleTagManager as GoogleTagManager, marketingV1Tag_universal_d_TikTokPixel as TikTokPixel, marketingV1Tag_universal_d_GoogleTagManagerConsentMode as GoogleTagManagerConsentMode, marketingV1Tag_universal_d_GoogleAnalyticsConsentMode as GoogleAnalyticsConsentMode, marketingV1Tag_universal_d_HtmlEmbedUpdateMessage as HtmlEmbedUpdateMessage, marketingV1Tag_universal_d_UpsertMarketingTagRequest as UpsertMarketingTagRequest, marketingV1Tag_universal_d_UpsertMarketingTagResponse as UpsertMarketingTagResponse, marketingV1Tag_universal_d_ListMarketingTagsRequest as ListMarketingTagsRequest, marketingV1Tag_universal_d_Filter as Filter, marketingV1Tag_universal_d_ListMarketingTagsResponse as ListMarketingTagsResponse, marketingV1Tag_universal_d_DeleteMarketingTagRequest as DeleteMarketingTagRequest, marketingV1Tag_universal_d_DeleteMarketingTagResponse as DeleteMarketingTagResponse, marketingV1Tag_universal_d_DeleteMarketingTagV2Request as DeleteMarketingTagV2Request, marketingV1Tag_universal_d_DeleteMarketingTagV2Response as DeleteMarketingTagV2Response, marketingV1Tag_universal_d_upsertMarketingTag as upsertMarketingTag, marketingV1Tag_universal_d_listMarketingTags as listMarketingTags, marketingV1Tag_universal_d_ListMarketingTagsOptions as ListMarketingTagsOptions, marketingV1Tag_universal_d_deleteMarketingTag as deleteMarketingTag, marketingV1Tag_universal_d_DeleteMarketingTagOptions as DeleteMarketingTagOptions, marketingV1Tag_universal_d_DeleteMarketingTagV2Options as DeleteMarketingTagV2Options, };
    }
    export { marketingV1Tag_universal_d as marketingTags };
}
