declare module "interfaces-ecommerce-v1-custom-scopes-provider" {
  interface CustomScopesProvider {
  }
  interface GetScopesRequest {
  }
  interface GetScopesResponse {
      /** A list of scopes */
      scopes?: CustomScope[];
  }
  interface CustomScope {
      /** The id of this scope. This should be a unique id for the implementer */
      _id?: string;
      /**
       * The name of the scope, for example: "Specific Collections, "Specific Sizes"
       * Wix applications implementing this SPI should return the translation key of the scopes name,
       * and make sure to add translations to this key the scopes SPI host
       * External implementation should return the English name of the scope
       */
      nameTranslationKey?: string;
      /**
       * Optional - the app_id of the catalog this scope is applied on.
       * This should be the app_id of the catalog this filter applies on, if there is one.
       * If this scope applies on more than one catalog, or does not related to a catalog - this field can be empty
       */
      catalogAppId?: string | null;
      /**
       * Optional - additional data used in order to generate and resolve the the discount scope.
       * If this scope represents "specific" items (collections, seasons, months, etc) - this should be defined with:
       * title: a title to the selectable items (for example: "specific collections"),
       * type: "multi_select",
       * custom_filter_params_struct: {"field_name" : fieldName},
       * where fieldName is the name of the field that will hold the selected items in the scope
       * For example, "Specific collections" filter would have {"field_name" : "collectionIds"}
       */
      filterAdditionalData?: FilterAdditionalData;
  }
  /** Additional data of the scope - for the scope's query of type CATALOG_ITEM or CUSTOM_FILTER */
  interface FilterAdditionalData {
      /** The translated title of the list of scope items, for example: "Specific collections" */
      title?: string;
      /** The type of the additional data, for example: "multi_select" */
      type?: string;
      /**
       * Optional - the object structure for customFilter.params (in discount scope).
       * For example, "Specific collections" filter would have {"field_name" : "collectionIds"} under this filed,
       * which will make the UI set scope.customFilter.params to { "collectionIds": [...]}
       * Will be returned for scopes of type CUSTOM_FILTER only
       */
      customFilterParamsStruct?: Record<string, any> | null;
  }
  interface ListScopeItemsRequest {
      /** Id of the Scope to retrieve */
      scopeId: string;
      /** A list of itemIDs to filter by. If exists, the result will only include the items with the IDs passed. */
      itemIds?: string[];
      /** An item name to filter by. If exists, the result will only include items with name that include this string. */
      itemName?: string | null;
      /** Paging options to limit and skip a number of items. */
      paging?: Paging;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListScopeItemsResponse {
      /** A list of the Scope Items */
      scopeItems?: ScopeItem[];
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
  }
  interface ScopeItem {
      /** The ID of the the item */
      _id?: string;
      /** The translated name of the item */
      name?: string;
  }
  interface GetAppliedScopesRequest {
      /** A list of scope to filter the line items by */
      scopes?: ScopeToFilterBy[];
      /**
       * References to the line item's origin catalog to check if included in one of the scopes provided.
       * See [Catalog SPI](https://bo.wix.com/wix-docs/rest/ecommerce/catalog-spi/introduction) for more details.
       */
      catalogReference?: CatalogReference[];
  }
  interface ScopeToFilterBy {
      /** The ID of the the scope to filter items by */
      scopeId?: string;
      /** The scope's custom filter values */
      customFilterParams?: Record<string, any> | null;
      /** Unique identifier that will return in `AppliedItemsByScopes.identifier` to distinguish between scopes in the response */
      identifier?: string | null;
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
  interface GetAppliedScopesResponse {
      /** A list of items and the scopes they included in */
      appliedItemsByScopes?: AppliedItemsByScopes[];
  }
  interface AppliedItemsByScopes {
      /** Id of the scope the provided items are valid for */
      scopeId?: string;
      /** A list of items that matches the scope */
      catalogReferences?: CatalogReference[];
      /** Unique identifier that was assigned in `ScopeToFilterBy.identifier` to distinguish between scopes */
      identifier?: string | null;
  }
  interface CustomScopeConfig {
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
  interface ListScopeItemsOptions {
      /** A list of itemIDs to filter by. If exists, the result will only include the items with the IDs passed. */
      itemIds?: string[];
      /** An item name to filter by. If exists, the result will only include items with name that include this string. */
      itemName?: string | null;
      /** Paging options to limit and skip a number of items. */
      paging?: Paging;
  }
  interface GetAppliedScopesOptions {
      /** A list of scope to filter the line items by */
      scopes?: ScopeToFilterBy[];
      /**
       * References to the line item's origin catalog to check if included in one of the scopes provided.
       * See [Catalog SPI](https://bo.wix.com/wix-docs/rest/ecommerce/catalog-spi/introduction) for more details.
       */
      catalogReference?: CatalogReference[];
  }
  
  export { AppliedItemsByScopes, CatalogReference, Context, CustomScope, CustomScopeConfig, CustomScopesProvider, FilterAdditionalData, GetAppliedScopesOptions, GetAppliedScopesRequest, GetAppliedScopesResponse, GetScopesRequest, GetScopesResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, ListScopeItemsOptions, ListScopeItemsRequest, ListScopeItemsResponse, Paging, ScopeItem, ScopeToFilterBy };
}
