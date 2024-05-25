declare module "interfaces-items-selection-v1-items-selection-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface QueryItemsRequest {
      /** Query options. */
      query?: Query;
      /** A tag representing the Wix service requesting the list of items. */
      tag?: Tag;
  }
  interface Query extends QueryPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests include a cursor token and do not define `filter`. */
      cursorPaging?: CursorPaging;
      /**
       * Filter object.
       * See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more information.
       */
      filter?: Record<string, any> | null;
      /**
       * An optional repeated field that allows to specify sorting criteria for the search results.
       * @internal
       */
      sort?: Sorting[];
      /**
       * Plain text search for an exact match.
       *
       * Supported properties are defined in the `searchParams.fields` property of the Item Selection Provider configuration in the Wix Developers Center.
       *
       * Max: 100 characters
       */
      search?: string | null;
  }
  /** @oneof */
  interface QueryPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests include a cursor token and do not define `filter`. */
      cursorPaging?: CursorPaging;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder;
      /**
       * When `field_name` is a property of repeated field that is marked as `MATCH_ITEMS` and sort should be done by
       * a specific element from a collection, filter can/should be provided to ensure correct sort value is picked.
       *
       * If multiple filters are provided, they are combined with AND operator.
       *
       * Example:
       * Given we have document like {"id": "1", "nestedField": [{"price": 10, "region": "EU"}, {"price": 20, "region": "US"}]}
       * and `nestedField` is marked as `MATCH_ITEMS`, to ensure that sorting is done by correct region, filter should be
       * { fieldName: "nestedField.price", "select_items_by": [{"nestedField.region": "US"}] }
       * @internal
       */
      selectItemsBy?: Record<string, any>[] | null;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface CursorPaging {
      /** Maximum number of items to return in the results. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * Pass the relevant cursor token from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  enum Tag {
      UNKNOWN_TAG = "UNKNOWN_TAG",
      EMBEDDABLE = "EMBEDDABLE",
      ECOM_EDIT_ORDER = "ECOM_EDIT_ORDER",
      ECOM_CREATE_ORDER = "ECOM_CREATE_ORDER",
      INBOX = "INBOX"
  }
  interface QueryItemsResponse {
      /** List of items. */
      items?: Item[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface Item {
      /** Item ID. */
      _id?: string;
      /** Item name. */
      name?: string | null;
      /** Item description. */
      description?: string | null;
      /** Item image. */
      image?: Image;
      /** Additional information about the item. For example, an item's price. */
      note?: string | null;
      /**
       * Indicates whether the item has additional steps, additional step will replace any existing additional_data exists on the item.
       * @internal
       */
      hasAdditionalStep?: boolean | null;
      /** Additional data associated with an item. The content of this object changes based on the Wix service defined in the `tag` field. */
      additionalData?: AdditionalData;
  }
  interface Image {
      /** Image URL. */
      url?: string | null;
  }
  interface AdditionalData extends AdditionalDataDataOneOf {
      /** Additional data associated with ecom catalog order. */
      ecomCatalogData?: EcomCatalogData;
      /** Additional data associated with inbox */
      inboxData?: InboxData;
  }
  /** @oneof */
  interface AdditionalDataDataOneOf {
      /** Additional data associated with ecom catalog order. */
      ecomCatalogData?: EcomCatalogData;
      /** Additional data associated with inbox */
      inboxData?: InboxData;
  }
  interface EcomCatalogData {
      /** ID of the app that owns the order. */
      appId?: string;
      /** ID of the catalog item associated with the order. */
      catalogItemId?: string;
      /** Price of the item associated with the order. */
      price?: string;
      /** Additional options associated with the order. */
      options?: Record<string, any> | null;
  }
  interface InboxData {
      /** An array of actions that is supported by Inbox page */
      actions?: Action[];
  }
  interface Action {
      /** The title of the action */
      title?: string;
      /** The url of the action */
      url?: string;
  }
  interface PagingMetadataV2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface FailureData {
      /** Error details. */
      error?: QueryError;
  }
  interface QueryError {
      /** Error code. */
      code?: Code;
      /** Error message. */
      message?: string;
      /** Raw error data. */
      data?: Record<string, any> | null;
  }
  enum Code {
      NONE = "NONE",
      SYSTEM_ERROR = "SYSTEM_ERROR",
      OTHER = "OTHER"
  }
  interface ItemsSelectionProviderConfig {
      /** A unique identifier for the provider. */
      key?: string;
      /** Supported search parameters. */
      searchParams?: SearchParams;
      /** Display data such as provider name and icon. */
      contentData?: ContentData;
      /**
       * Optional additional step taken after the initial item selection.
       * @internal
       */
      additionalStepInfo?: AdditionalStepInfo;
      /** An array of strings representing the Wix UI pages supported by your SPI implementation. If no tags are listed, Wix assumes that the implementation supports all eligible pages. */
      supportedTags?: Tag[];
      /**
       * Optional create new item option, to define a widget that will be opened to create a new item
       * @internal
       */
      createNewItemInfo?: CreateNewItemInfo;
  }
  interface LearnMore {
      /** The url of the learn more link. If you want a dynamic url according to the user locale, you can add {{locale}} variable within the string. */
      url?: string;
      /** Optional link label. */
      label?: string | null;
  }
  interface SearchField {
      /** Supported searchable fields. */
      key?: string;
      /** Item description. */
      description?: string;
  }
  interface FilterInfo extends FilterInfoOptionsOneOf {
      /** Static hardcoded options */
      staticOptions?: StaticFilterOptions;
      /** Key of the filter */
      key?: string;
      /** Optional filter will be shown only for consumers with this tag. Only one filter is allowed per tag. */
      tag?: Tag;
      /** The filter selection type. For now only single selection is available */
      selectionType?: FilterSelectionType;
      /** Filter options type. For now only static options are supported */
      optionsType?: FilterOptionsType;
  }
  /** @oneof */
  interface FilterInfoOptionsOneOf {
      /** Static hardcoded options */
      staticOptions?: StaticFilterOptions;
  }
  enum FilterSelectionType {
      UNKNOWN_SELECTION = "UNKNOWN_SELECTION",
      /** Allow to select only a single item */
      SINGLE_SELECTION = "SINGLE_SELECTION"
  }
  enum FilterOptionsType {
      UNKNOWN_FILTER_OPTIONS = "UNKNOWN_FILTER_OPTIONS",
      /** Static hardcoded options */
      STATIC = "STATIC"
  }
  interface StaticFilterOptions {
      /** List of hardcoded options for a filter */
      data?: StaticFilterOption[];
  }
  interface StaticFilterOption {
      /** Title of a filter option */
      label?: string;
      /** Value of a filter option */
      value?: string;
  }
  interface SearchParams {
      /** Supported search parameters. */
      fields?: SearchField[];
      /** Filter for viewing only part of the items. */
      filter?: FilterInfo;
  }
  interface ContentData {
      /** Provider icon. Choose an icon name from the [Wix Design System](https://www.wixdesignsystem.com/). */
      iconKey?: string | null;
      /** Provider name. */
      providerName?: string;
      /** Item title. */
      title?: string;
      /** Button label. */
      button?: string;
      /** Item description. */
      subtitle?: string | null;
      /** Learn more link. */
      learnMore?: LearnMore;
  }
  interface AdditionalStepInfo {
      /** ID of the widget associated with the step. */
      widgetId?: string;
      /** Title of the additional step. */
      title?: string;
      /** Subtitle of the additional step. */
      subtitle?: string | null;
      /** Hide item note if exists when showing selected item on additional step header, default: false. */
      hideItemNote?: boolean | null;
  }
  interface CreateNewItemInfo {
      /** ID of the widget associated with the new item modal. */
      widgetId?: string;
      /**
       * one app (mobile) component id that will be opened to create a new item
       * @internal
       */
      mobileComponentId?: string | null;
      /** Button label for creating a new item */
      buttonText?: string | null;
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
  interface QueryItemsOptions {
      /** Query options. */
      query?: Query;
      /** A tag representing the Wix service requesting the list of items. */
      tag?: Tag;
  }
  
  function queryItemsFailed(data: FailureData): BusinessError<FailureData>;
  
  const queryItemsSpiErrors_d_queryItemsFailed: typeof queryItemsFailed;
  namespace queryItemsSpiErrors_d {
    export {
      queryItemsSpiErrors_d_queryItemsFailed as queryItemsFailed,
    };
  }
  
  namespace spiErrorHelpers_d {
    export {
      queryItemsSpiErrors_d as queryItems,
    };
  }
  
  export { Action, AdditionalData, AdditionalDataDataOneOf, AdditionalStepInfo, BusinessError, Code, ContentData, Context, CreateNewItemInfo, CursorPaging, Cursors, EcomCatalogData, FailureData, FilterInfo, FilterInfoOptionsOneOf, FilterOptionsType, FilterSelectionType, IdentificationData, IdentificationDataIdOneOf, IdentityType, Image, InboxData, Item, ItemsSelectionProviderConfig, LearnMore, Paging, PagingMetadataV2, Query, QueryError, QueryItemsOptions, QueryItemsRequest, QueryItemsResponse, QueryPagingMethodOneOf, SearchField, SearchParams, SortOrder, Sorting, StaticFilterOption, StaticFilterOptions, Tag, spiErrorHelpers_d as errorHelpers };
}
