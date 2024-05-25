declare module "interfaces-ecommerce-v1-custom-trigger-provider" {
  interface CustomTriggerProvider {
  }
  interface ListTriggersRequest {
  }
  interface ListTriggersResponse {
      /** List of custom triggers */
      customTriggers?: ListTriggersResponseCustomTrigger[];
  }
  interface ListTriggersResponseCustomTrigger {
      /** Unique ID of the trigger */
      _id?: string;
      /** Trigger display name */
      name?: string;
  }
  interface GetEligibleTriggersRequest {
      /** List of line items to check the triggers on */
      lineItems?: LineItem[];
      /** List of custom triggers to check 'is eligible' on */
      triggers?: TriggerToFilterBy[];
  }
  interface LineItem {
      /** Line item ID. */
      _id?: string;
      /** Quantity. */
      quantity?: number | null;
      /**
       * Optional references to the line item's origin catalog.
       * See [Catalog SPI](https://bo.wix.com/wix-docs/rest/ecommerce/catalog-spi/introduction) for more details.
       * This field is empty in the case of a custom line item.
       * currently we only use the catalog app id to set tax=0 for specific apps.
       */
      catalogReference?: CatalogReference;
      /** Price. */
      price?: string;
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
  interface TriggerToFilterBy {
      /** Custom trigger */
      customTrigger?: CustomTrigger;
      /** Unique identifier that will return in `EligibleTrigger.identifier` to distinguish between scopes */
      identifier?: string | null;
  }
  interface CustomTrigger {
      /** Unique ID of the trigger */
      _id?: string;
      /**
       * Optional - additional data in key:value form
       * This data will be passed to `GetEligibleTriggers` SPI
       * i.e weather trigger - be eligible if temp is above 30 degrees, params will have  { "minTemp": 30 }
       * @internal
       */
      params?: Record<string, any> | null;
  }
  interface GetEligibleTriggersResponse {
      /** A List of eligible triggers and the items included in each trigger */
      eligibleTriggers?: EligibleTrigger[];
  }
  interface EligibleTrigger {
      /** The id of the trigger */
      customTriggerId?: string;
      /** Unique identifier that was assigned in `TriggerToFilterBy.identifier` to distinguish between custom triggers */
      identifier?: string | null;
  }
  interface CustomTriggerConfig {
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
  interface GetEligibleTriggersOptions {
      /** List of line items to check the triggers on */
      lineItems?: LineItem[];
      /** List of custom triggers to check 'is eligible' on */
      triggers?: TriggerToFilterBy[];
  }
  
  export { CatalogReference, Context, CustomTrigger, CustomTriggerConfig, CustomTriggerProvider, EligibleTrigger, GetEligibleTriggersOptions, GetEligibleTriggersRequest, GetEligibleTriggersResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, LineItem, ListTriggersRequest, ListTriggersResponse, ListTriggersResponseCustomTrigger, TriggerToFilterBy };
}
