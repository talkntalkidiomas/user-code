declare module "interfaces-premium-v1-productspaths" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  /**
   * Wix Premium sends you a request with this object that includes information
   * about the product a customer wants to up- or downgrade. You must then respond
   * with information about all supported upgrades and downgrades.
   */
  interface GetProductPathsRequest {
      /** ID of the current product to retrieve upgrades and downgrades for. */
      productId: string;
      /** Billing cycle settings of the current product. */
      currentCycle?: Cycle;
      /**
       * List of all IDs of the products belonging to the same type as the current
       * product. __Note__: We recommend to retrieve these IDs via the
       * [Dealer](https://wix-marketing.wixanswers.com/en/article/dealer-faqs).
       */
      targetProductIds: string[];
      /**
       * Information about the supported billing cycle lengths and each corresponding
       * price for the upgrades and downgrades. You must provide this field, if you
       * use the default config or any other config that includes has
       * `should_upgrade_by_pricing` or `should_downgrade_by_pricing` set to `true`.
       */
      catalogPricingInfo?: CatalogPricingInfo[];
      pricingInfo?: AdditionalCatalogPricingInfo;
  }
  interface Cycle extends CycleCycleSelectorOneOf {
      /** repetitive interval */
      interval?: Interval;
      /** one time */
      oneTime?: OneTime;
  }
  /** @oneof */
  interface CycleCycleSelectorOneOf {
      /** repetitive interval */
      interval?: Interval;
      /** one time */
      oneTime?: OneTime;
  }
  interface Interval {
      /** interval unit of measure */
      unit?: IntervalUnit;
      /** number of interval */
      count?: number;
  }
  enum IntervalUnit {
      /** unknown interval unit */
      UNKNOWN = "UNKNOWN",
      /** day */
      DAY = "DAY",
      /** week */
      WEEK = "WEEK",
      /** month */
      MONTH = "MONTH",
      /** year */
      YEAR = "YEAR"
  }
  interface OneTime {
  }
  interface CatalogPricingInfo {
      /** Product ID of the upgrade or downgrade. */
      productId?: string;
      /** List of all supported billing cycle lengths for the upgrade or downgrade. */
      cyclePricing?: CyclePricing[];
  }
  interface CyclePricing {
      /** Information about the length of the billing cycle. */
      cycle?: Cycle;
      /**
       * Product price for the corresponding billing cycle length. Specified in
       * the currency saved in the
       * [Site Properties](https://dev.wix.com/api/rest/business-info/site-properties/properties/get-site-properties).
       */
      price?: string;
  }
  interface AdditionalCatalogPricingInfo {
      currentProductPricingInfo?: CatalogPricingInfo;
      targetProductsPricingInfo?: CatalogPricingInfo[];
  }
  /**
   * Your response to the Get Product Paths SPI request from Wix Premium must include information
   * about all supported upgrades and downgrades.
   */
  interface GetProductPathsResponse {
      /**
       * List of all products supported as upgrades for the current product.
       * Calculated according to the settings in the provider config.
       */
      upgradeProducts?: ProductPathInfo[];
      /**
       * List of all products supported as downgrades for the current product.
       * Calculated according to the settings in the provider config.
       */
      downgradeProducts?: ProductPathInfo[];
  }
  interface ProductPathInfo {
      /** Product ID of the upgrade or downgrade. */
      productId?: string;
      /**
       * List of all supported billing cycle lengths for this upgrade or downgrade.
       * Available only when the corresponding product has at least 1 billing cycle
       * length defined in the product catalog.
       */
      compatibleCycles?: CompatibleCycles;
  }
  interface CompatibleCycles {
      compatibleCycles?: Cycle[];
  }
  interface ProductsPathsConfig {
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
  interface GetProductPathsOptions {
      /** ID of the current product to retrieve upgrades and downgrades for. */
      productId: string;
      /** Billing cycle settings of the current product. */
      currentCycle?: Cycle;
      /**
       * List of all IDs of the products belonging to the same type as the current
       * product. __Note__: We recommend to retrieve these IDs via the
       * [Dealer](https://wix-marketing.wixanswers.com/en/article/dealer-faqs).
       */
      targetProductIds: string[];
      /**
       * Information about the supported billing cycle lengths and each corresponding
       * price for the upgrades and downgrades. You must provide this field, if you
       * use the default config or any other config that includes has
       * `should_upgrade_by_pricing` or `should_downgrade_by_pricing` set to `true`.
       */
      catalogPricingInfo?: CatalogPricingInfo[];
      pricingInfo?: AdditionalCatalogPricingInfo;
  }
  
  export { AdditionalCatalogPricingInfo, BusinessError, CatalogPricingInfo, CompatibleCycles, Context, Cycle, CycleCycleSelectorOneOf, CyclePricing, GetProductPathsOptions, GetProductPathsRequest, GetProductPathsResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, Interval, IntervalUnit, OneTime, ProductPathInfo, ProductsPathsConfig };
}
