declare module "interfaces-ecom-v1-recommendations-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface RecommendationsProviderEntity {
  }
  /** additional information can be passed via aspects, for example GEO */
  interface GetRecommendationsRequest {
      /** The set of items used by algorithms with the `RELATED_ITEMS` `algorithmType` to determine related item recommendations. */
      items?: CatalogReference[];
      /** List of algorithms used to find recommended items. Items will be returned in a seperate object for each algorithm */
      algorithmIds?: string[];
  }
  /** Used for grouping line items. Sent when an item is added to a cart, checkout, or order. */
  interface CatalogReference {
      /** ID of the item within the catalog it belongs to. */
      catalogItemId?: string;
      /**
       * ID of the app providing the catalog.
       *
       * You can get your app's ID from its page in the [Wix Dev Center](https://dev.wix.com/apps).
       *
       * For items from Wix catalogs, the following values always apply:
       * + Wix Stores: `"215238eb-22a5-4c36-9e7b-e7c08025e04e"`
       * + Wix Bookings: `"13d21c63-b5ec-5912-8397-c3a5ddb27a97"`
       * + Wix Restaurants: `"9a5d83fd-8570-482e-81ab-cfa88942ee60"`
       */
      appId?: string;
      /**
       * Additional item details in key:value pairs. Use this optional field to provide more specificity with item selection. The `options` field values differ depending on which catalog is providing the items.
       *
       * For products and variants from your Wix Stores catalog, learn more about [eCommerce integration](https://dev.wix.com/docs/rest/business-solutions/stores/catalog/e-commerce-integration).
       */
      options?: Record<string, any> | null;
  }
  interface GetRecommendationsResponse {
      /**
       * Related items returned by each algorithm.
       *
       * Each object in the array contains an `algorithmId` and a list of the item recommendations provided by that algorithm.
       */
      recommendationPerAlgorithm?: RecommendationForAlgorithm[];
  }
  interface RecommendationForAlgorithm {
      /** Id of the algorithm that provided the recommendation. */
      algorithmId?: string;
      /** Item recommendations provided by the algorithm. Depending on the algorithm, these recommendations may be influenced by the items provided in the request. */
      recommendedItems?: CatalogReference[];
  }
  interface RecommendationAlgorithmNotSupported {
      /** Not supported algorithms. */
      unsupportedAlgorithms?: string[];
  }
  interface ItemAppIdNotSupportedError {
      /** Items with not supported catalogs. */
      items?: CatalogReference[];
  }
  interface RecommendationsProviderConfig {
      /** App IDs of catalogs for which recommended items can be found. */
      catalogAppIds?: string[];
      /** The algorithms that this application can use to calculate item recommendations. */
      supportedAlgorithms?: AlgorithmConfig[];
  }
  interface AlgorithmConfig {
      /** Algorithm ID. This must be unique for a specific app but does not have to be unique across all apps on the site or in the project. */
      _id?: string;
      /** Algorithm name. This value is not translatable. */
      name?: string;
      /** Algorithm description. This describes how the algorithm works and if it has any limitations regarding site content, number of items in the catalog, site traffic, and so on. This value is not translatable. */
      description?: string;
      /** A supplemental `description`. It can be used to help break up and organize information. You can, for example, display this information as a tooltip or as an additional section that is collapsed by default. */
      additionalInfo?: string | null;
      /**
       * Algorithms may have the following types:
       * * `RELATED_ITEMS` - This type of algorithm provides recommendations based on 1 or more other provided items. For example, when an item is added to a cart, the algorithm can suggest other items frequently bought together with that item.
       * * `GLOBAL` - This type of algorithm provides general recommendations based on site or project statistics. For example, bestsellers or new arrivals.
       */
      algorithmType?: AlgorithmType;
  }
  enum AlgorithmType {
      UNSPECIFIED = "UNSPECIFIED",
      RELATED_ITEMS = "RELATED_ITEMS",
      GLOBAL = "GLOBAL"
  }
  /**
   * this message is not directly used by any service,
   * it exists to describe the expected parameters that SHOULD be provided to invoked Velo methods as part of open-platform.
   * e.g. SPIs, event-handlers, etc..
   * NOTE: this context object MUST be provided as the last argument in each Velo method signature.
   *
   * Example:
   * ```typescript
   * export function wixStores_onOrderCanceled(event: OrderCanceledEvent, context: Context) {
   * ...
   * }
   * ```
   */
  interface Context {
      /** A unique identifier for each request. Can be used for logging / troubleshooting */
      requestId?: string | null;
      /** 3 capital letters string representing a currency according to ISO-4217 */
      currency?: string | null;
      /** The identification type and identity data */
      identity?: IdentificationData;
      /** A string representing a language and region in the format of "xx-XX". First 2 letters represent the language code according to ISO 639-1. This is followed by a dash "-", and then a by 2 capital letters representing the region according to ISO 3166-2 */
      languages?: string[];
      /** App instance ID of SPI in context */
      instanceId?: string | null;
  }
  enum IdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface IdentificationData extends IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: IdentityType;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  interface GetRecommendationsOptions {
      /** The set of items used by algorithms with the `RELATED_ITEMS` `algorithmType` to determine related item recommendations. */
      items?: CatalogReference[];
      /** List of algorithms used to find recommended items. Items will be returned in a seperate object for each algorithm */
      algorithmIds?: string[];
  }
  
  function algorithmNotSupportedError(data: RecommendationAlgorithmNotSupported): BusinessError<RecommendationAlgorithmNotSupported>;
  function itemAppIdNotSupportedError(data: ItemAppIdNotSupportedError): BusinessError<ItemAppIdNotSupportedError>;
  
  const getRecommendationsSpiErrors_d_algorithmNotSupportedError: typeof algorithmNotSupportedError;
  const getRecommendationsSpiErrors_d_itemAppIdNotSupportedError: typeof itemAppIdNotSupportedError;
  namespace getRecommendationsSpiErrors_d {
    export {
      getRecommendationsSpiErrors_d_algorithmNotSupportedError as algorithmNotSupportedError,
      getRecommendationsSpiErrors_d_itemAppIdNotSupportedError as itemAppIdNotSupportedError,
    };
  }
  
  namespace spiErrorHelpers_d {
    export {
      getRecommendationsSpiErrors_d as getRecommendations,
    };
  }
  
  export { AlgorithmConfig, AlgorithmType, BusinessError, CatalogReference, Context, GetRecommendationsOptions, GetRecommendationsRequest, GetRecommendationsResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, ItemAppIdNotSupportedError, RecommendationAlgorithmNotSupported, RecommendationForAlgorithm, RecommendationsProviderConfig, RecommendationsProviderEntity, spiErrorHelpers_d as errorHelpers };
}
