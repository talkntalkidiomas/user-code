declare module "interfaces-ecom-v1-related-items-provider" {
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
      /** items for which related items will be found */
      items?: CatalogReference[];
      /** List of algorithms to find recommended items. Related items will be returned separately for each algorithm */
      algorithmIds?: string[];
  }
  /** Used for grouping line items and is sent on add to cart */
  interface CatalogReference {
      /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores or `eventId` for Wix Events. */
      catalogItemId?: string;
      /** ID of the catalog app. For example, the Wix Stores `appId`, or the 3rd-party `appId`. */
      appId?: string;
      /** Additional info in key:value form. For example, `{"options":{"Size": "M", "Color": "Red"}}` or `{"variantId": "<VARIANT_ID>"}`. */
      options?: Record<string, any> | null;
  }
  interface GetRecommendationsResponse {
      /** Related items for each algorithm */
      recommendationPerAlgorithm?: RecommendationForAlgorithm[];
  }
  interface RecommendationForAlgorithm {
      /** algorithm which was used to find recommendation */
      algorithmId?: string;
      /** recommended items according to algorithm and items in request (when provided) */
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
      /** app ids of catalogs for which recommended items can be found */
      catalogAppIds?: string[];
      /** supported algorithms */
      supportedAlgorithms?: AlgorithmConfig[];
  }
  interface AlgorithmConfig {
      /** Algorithm id which will be sent in requests. It must be unique per provider. */
      _id?: string;
      /** Name which will be shown to user in list of algorithms available for site. For example "Best sellers", "Frequently watched together". This value is not translatable. */
      name?: string;
      /** Description of algorithm which will be shown to user in list of algorithms available for site. This value is not translatable. It should describe how algorithm works, if it has any limitations regarding site content, number of items, site traffic and so on. */
      description?: string;
      /** This field can be used when `description ` field is not enough to describe algorithm and you want to have separate section with additional info. It can be used to not overload user with too much information on main page. Depending on frontend implementation it can be displayed as tooltip or as additional section which is collapsed by default. */
      additionalInfo?: string | null;
      /**
       * `RELATED_ITEMS` - algorithm provides recommendations based on some other items interested for user/user of user. For example once one item added to cart algorithm can suggest other items frequently bought together with given one.
       * `GLOBAL` - algorithm provides generic recommendations for given site. For example, best sellers items or new arrivals
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
      /** @readonly */
      identityType?: IdentityType;
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
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
      /** items for which related items will be found */
      items?: CatalogReference[];
      /** List of algorithms to find recommended items. Related items will be returned separately for each algorithm */
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
  
  export { AlgorithmConfig, AlgorithmType, CatalogReference, Context, GetRecommendationsOptions, GetRecommendationsRequest, GetRecommendationsResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, ItemAppIdNotSupportedError, RecommendationAlgorithmNotSupported, RecommendationForAlgorithm, RecommendationsProviderConfig, RecommendationsProviderEntity, spiErrorHelpers_d as errorHelpers };
}
