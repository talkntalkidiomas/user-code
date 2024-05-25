declare module "wix-marketing-tags-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface MarketingTag extends MarketingTagParamsOneOf {
      /**
       * Marketing tag ID.
       * @readonly
       */
      _id?: string;
      /**
       * Marketing tag type.
       * @readonly
       */
      type?: Type;
      /**
       * Whether this tag is enabled.
       * Defaults to `true`.
       */
      enabled?: boolean | null;
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
  }
  enum Type {
      /** Illegal default value, exception will be thrown if used */
      UNKNOWN = "UNKNOWN",
      GOOGLE_ADS = "GOOGLE_ADS",
      GOOGLE_ANALYTICS = "GOOGLE_ANALYTICS",
      YANDEX_METRICA = "YANDEX_METRICA",
      FACEBOOK_PIXEL = "FACEBOOK_PIXEL",
      GOOGLE_TAG_MANAGER = "GOOGLE_TAG_MANAGER"
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
  interface UpsertMarketingTagRequest {
      /** Marketing tag to create or update. */
      tag: MarketingTag;
  }
  interface UpsertMarketingTagResponse {
      /** Created or updated marketing tag. */
      tag?: MarketingTag;
  }
  interface ListMarketingTagsRequest {
      /** optional filter */
      filter?: Filter;
  }
  interface Filter {
      /** Filter by tag type. */
      byType?: Type;
  }
  interface ListMarketingTagsResponse {
      /** List of marketing tags. */
      tags?: MarketingTag[];
  }
  interface DeleteMarketingTagRequest {
      /** Marketing tag to delete. */
      type?: Type;
  }
  interface DeleteMarketingTagResponse {
  }
  interface DeleteMarketingTagV2Request {
      /** Marketing tag to delete. */
      tagType?: Type;
  }
  interface DeleteMarketingTagV2Response {
  }
  /**
   * Creates or updates a marketing tag.
   * @param tag - Marketing tag to create or update.
   * @public
   * @documentationMaturity preview
   * @requiredField tag
   * @requiredField tag
   */
  function upsertMarketingTag(tag: MarketingTag): Promise<UpsertMarketingTagResponse>;
  /**
   * Retrieves marketing tags given the provided filter.
   * @public
   * @documentationMaturity preview
   */
  function listMarketingTags(options?: ListMarketingTagsOptions): Promise<ListMarketingTagsResponse>;
  interface ListMarketingTagsOptions {
      /** optional filter */
      filter?: Filter;
  }
  /**
   * Deletes a marketing tag.
   * @public
   * @documentationMaturity preview
   */
  function deleteMarketingTag(options?: DeleteMarketingTagOptions): Promise<void>;
  interface DeleteMarketingTagOptions {
      /** Marketing tag to delete. */
      type?: Type;
  }
  /**
   * Deletes a marketing tag
   * @documentationMaturity preview */
  function deleteMarketingTagV2(options?: DeleteMarketingTagV2Options): Promise<void>;
  interface DeleteMarketingTagV2Options {
      /** Marketing tag to delete. */
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
  const marketingV1Tag_universal_d_deleteMarketingTagV2: typeof deleteMarketingTagV2;
  type marketingV1Tag_universal_d_DeleteMarketingTagV2Options = DeleteMarketingTagV2Options;
  namespace marketingV1Tag_universal_d {
    export {
      marketingV1Tag_universal_d___debug as __debug,
      marketingV1Tag_universal_d_MarketingTag as MarketingTag,
      marketingV1Tag_universal_d_MarketingTagParamsOneOf as MarketingTagParamsOneOf,
      marketingV1Tag_universal_d_Type as Type,
      marketingV1Tag_universal_d_GoogleAds as GoogleAds,
      marketingV1Tag_universal_d_GoogleAnalytics as GoogleAnalytics,
      marketingV1Tag_universal_d_YandexMetrica as YandexMetrica,
      marketingV1Tag_universal_d_FacebookPixel as FacebookPixel,
      marketingV1Tag_universal_d_GoogleTagManager as GoogleTagManager,
      marketingV1Tag_universal_d_UpsertMarketingTagRequest as UpsertMarketingTagRequest,
      marketingV1Tag_universal_d_UpsertMarketingTagResponse as UpsertMarketingTagResponse,
      marketingV1Tag_universal_d_ListMarketingTagsRequest as ListMarketingTagsRequest,
      marketingV1Tag_universal_d_Filter as Filter,
      marketingV1Tag_universal_d_ListMarketingTagsResponse as ListMarketingTagsResponse,
      marketingV1Tag_universal_d_DeleteMarketingTagRequest as DeleteMarketingTagRequest,
      marketingV1Tag_universal_d_DeleteMarketingTagResponse as DeleteMarketingTagResponse,
      marketingV1Tag_universal_d_DeleteMarketingTagV2Request as DeleteMarketingTagV2Request,
      marketingV1Tag_universal_d_DeleteMarketingTagV2Response as DeleteMarketingTagV2Response,
      marketingV1Tag_universal_d_upsertMarketingTag as upsertMarketingTag,
      marketingV1Tag_universal_d_listMarketingTags as listMarketingTags,
      marketingV1Tag_universal_d_ListMarketingTagsOptions as ListMarketingTagsOptions,
      marketingV1Tag_universal_d_deleteMarketingTag as deleteMarketingTag,
      marketingV1Tag_universal_d_DeleteMarketingTagOptions as DeleteMarketingTagOptions,
      marketingV1Tag_universal_d_deleteMarketingTagV2 as deleteMarketingTagV2,
      marketingV1Tag_universal_d_DeleteMarketingTagV2Options as DeleteMarketingTagV2Options,
    };
  }
  
  export { marketingV1Tag_universal_d as marketingTags };
}
