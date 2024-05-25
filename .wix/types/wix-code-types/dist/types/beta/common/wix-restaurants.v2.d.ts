declare module "wix-restaurants.v2" {
  interface Item extends ItemPricingOneOf {
      /** Item price. */
      price?: string;
      /** Item price variants. */
      priceVariants?: PriceVariants;
      /**
       * Item ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the item is updated. To prevent conflicting changes, the current revision must be passed when updating the item. Ignored when creating a item.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the item was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the item was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Item name. */
      name?: string;
      /** Item description. */
      description?: string | null;
      /** Main item image. */
      image?: string;
      /** Additional item images. */
      additionalImages?: string[];
      /** Item labels. */
      labels?: Label[];
      /** Whether the item is visible in the menu for site visitors. */
      visible?: boolean | null;
      /** Online order settings. */
      orderSettings?: OrderSettings;
      /** Item modifier groups. */
      modifierGroups?: ModifierGroup$1[];
      /** Extended fields. */
      extendedFields?: ExtendedFields$4;
  }
  /** @oneof */
  interface ItemPricingOneOf {
      /** Item price. */
      price?: string;
      /** Item price variants. */
      priceVariants?: PriceVariants;
  }
  interface PriceVariants {
      /** List of price variants. */
      variants?: PriceVariant[];
  }
  /** flynt-deleted-field-enum-reserved */
  interface PriceVariant {
      /** Price variant ID. */
      variantId?: string | null;
      /** Price of a variant. */
      price?: string;
  }
  interface Label {
      /** Item label ID. */
      _id?: string;
  }
  interface OrderSettings {
      /**
       * Whether the item is in stock.
       * Default: `true`.
       */
      inStock?: boolean | null;
      /**
       * Whether a customer can add a special request when ordering this item.
       * Default: `true`.
       */
      acceptSpecialRequests?: boolean | null;
      /**
       * E-com defined tax group for the product.
       * @internal
       */
      taxGroupId?: string | null;
  }
  interface ModifierGroup$1 {
      /** Modifier group ID. */
      _id?: string | null;
  }
  interface ExtendedFields$4 {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       *
       * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface InvalidateCache$6 extends InvalidateCacheGetByOneOf$6 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$6;
      /** Invalidate by page id */
      page?: Page$6;
      /** Invalidate by URI path */
      uri?: URI$6;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File$6;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf$6 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$6;
      /** Invalidate by page id */
      page?: Page$6;
      /** Invalidate by URI path */
      uri?: URI$6;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File$6;
  }
  interface App$6 {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page$6 {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI$6 {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface File$6 {
      /** the msid the file is related to */
      metaSiteId?: string;
      /** Invalidate by filename (for media files such as PDFs) */
      fileName?: string;
  }
  interface CreateItemRequest {
      /** Item details. */
      item: Item;
      /**
       * The source of this request.
       * @internal
       */
      source?: string | null;
  }
  interface CreateItemResponse {
      /** Item. */
      item?: Item;
  }
  interface BulkCreateItemsRequest {
      /** Items details. */
      items: Item[];
      /** Whether to return entity in the response. */
      returnEntity?: boolean;
      /**
       * The source of this request.
       * @internal
       */
      source?: string | null;
  }
  interface BulkCreateItemsResponse {
      /** Information about the created items. */
      results?: BulkCreateItemResult[];
      /** Metadata for the API call. */
      bulkActionMetadata?: BulkActionMetadata$5;
  }
  interface BulkCreateItemResult {
      /** Metadata for item update. */
      itemMetadata?: ItemMetadata$5;
      /** Created item. */
      item?: Item;
  }
  interface ItemMetadata$5 {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError$5;
  }
  interface ApplicationError$5 {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata$5 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface GetItemRequest {
      /** Item ID. */
      itemId: string;
  }
  interface GetItemResponse {
      /** Item. */
      item?: Item;
  }
  interface ListItemsRequest {
      /** Item IDs. */
      itemIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$6;
  }
  interface CursorPaging$6 {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface ListItemsResponse {
      /** Items. */
      items?: Item[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$6;
  }
  interface CursorPagingMetadata$6 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$6;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$6 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryItemsRequest {
      /** Query options. */
      query?: CursorQuery$7;
  }
  interface CursorQuery$7 extends CursorQueryPagingMethodOneOf$7 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$6;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$7[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$7 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$6;
  }
  interface Sorting$7 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$7;
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
  enum SortOrder$7 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryItemsResponse {
      /** Retrieved items. */
      items?: Item[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$6;
  }
  interface CountItemsRequest {
      /** Filter for counting items. */
      filter?: Record<string, any> | null;
  }
  interface CountItemsResponse {
      /** Counted items. */
      count?: number;
  }
  interface UpdateItemRequest {
      /** Item to update. */
      item: Item;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
      /**
       * The source of this request.
       * @internal
       */
      source?: string | null;
  }
  interface UpdateItemResponse {
      /** Updated item. */
      item?: Item;
  }
  interface BulkUpdateItemRequest {
      /** Items to update. */
      items: MaskedItem[];
      /** Whether to return entity in the response. */
      returnEntity?: boolean;
      /**
       * The source of this request.
       * @internal
       */
      source?: string | null;
  }
  interface MaskedItem {
      /** Item to update. */
      item?: Item;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface BulkUpdateItemResponse {
      /** Information about the updated items. */
      results?: BulkItemResult[];
      /** Metadata for the API call. */
      bulkActionMetadata?: BulkActionMetadata$5;
  }
  interface BulkItemResult {
      /** Metadata for item update. */
      itemMetadata?: ItemMetadata$5;
      /** Updated item. Only returned if `returnEntity` is set to `true`. */
      item?: Item;
  }
  interface DeleteItemRequest {
      /** Item ID. */
      itemId: string;
      /**
       * The source of this request.
       * @internal
       */
      source?: string | null;
  }
  interface DeleteItemResponse {
  }
  interface BulkDeleteItemsRequest {
      /** Item IDs. */
      ids: string[];
      /**
       * The source of this request.
       * @internal
       */
      source?: string | null;
  }
  interface BulkDeleteItemsResponse {
      /** Information about the deleted items. */
      results?: BulkDeleteItemResult[];
      /** Metadata for the API call. */
      bulkActionMetadata?: BulkActionMetadata$5;
  }
  interface BulkDeleteItemResult {
      /** Metadata for item update. */
      itemMetadata?: ItemMetadata$5;
  }
  interface CloneItemsRequest {
      /** The MetaSiteId to clone from. */
      metaSiteId: string;
  }
  interface CloneItemsResponse {
  }
  interface DomainEvent$7 extends DomainEventBodyOneOf$7 {
      createdEvent?: EntityCreatedEvent$7;
      updatedEvent?: EntityUpdatedEvent$7;
      deletedEvent?: EntityDeletedEvent$7;
      actionEvent?: ActionEvent$7;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf$7 {
      createdEvent?: EntityCreatedEvent$7;
      updatedEvent?: EntityUpdatedEvent$7;
      deletedEvent?: EntityDeletedEvent$7;
      actionEvent?: ActionEvent$7;
  }
  interface EntityCreatedEvent$7 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$7 {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$7 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$7 {
      bodyAsJson?: string;
  }
  interface Empty$6 {
  }
  interface MessageEnvelope$7 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$7;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$7 extends IdentificationDataIdOneOf$7 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$7;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$7 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$7 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * > **Note:** The Item API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Creates an item.
   *
   * To create multiple items at once, use [Bulk Create Items](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/item/bulk-create-items).
   * @param item - Item details.
   * @public
   * @documentationMaturity preview
   * @requiredField item
   * @adminMethod
   * @returns Item.
   */
  function createItem(item: Item, options?: CreateItemOptions): Promise<Item>;
  interface CreateItemOptions {
      /**
       * The source of this request.
       * @internal
       */
      source?: string | null;
  }
  /**
   * > **Note:** The Items API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Creates multiple items at once.
   * @param items - Items details.
   * @public
   * @documentationMaturity preview
   * @requiredField items
   * @adminMethod
   */
  function bulkCreateItems(items: Item[], options?: BulkCreateItemsOptions): Promise<BulkCreateItemsResponse>;
  interface BulkCreateItemsOptions {
      /** Whether to return entity in the response. */
      returnEntity?: boolean;
      /**
       * The source of this request.
       * @internal
       */
      source?: string | null;
  }
  /**
   * > **Note:** The Item API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves an item by ID.
   * @param itemId - Item ID.
   * @public
   * @documentationMaturity preview
   * @requiredField itemId
   * @returns Item.
   */
  function getItem(itemId: string): Promise<Item>;
  /**
   * > **Note:** The Item API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves a list of up to 500 items.
   * @public
   * @documentationMaturity preview
   */
  function listItems(options?: ListItemsOptions): Promise<ListItemsResponse>;
  interface ListItemsOptions {
      /** Item IDs. */
      itemIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$6;
  }
  /**
   * > **Note:** The Item API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves a list of items given the provided paging, filtering, and sorting. Up to 500 items can be returned per request.
   *
   * For a detailed list of supported operations, see the [Supported Filters and Sorting](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/item/supported-filters-and-sorting) article. To learn how to query items, see [API Query Language](https://dev.wix.com/docs/rest/articles/getting-started/api-query-language).
   * @public
   * @documentationMaturity preview
   */
  function queryItems(): ItemsQueryBuilder;
  interface QueryCursorResult$7 {
      cursors: Cursors$6;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ItemsQueryResult extends QueryCursorResult$7 {
      items: Item[];
      query: ItemsQueryBuilder;
      next: () => Promise<ItemsQueryResult>;
      prev: () => Promise<ItemsQueryResult>;
  }
  interface ItemsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: 'priceVariants.variants.price' | '_id' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'image.id' | 'orderSettings.inStock' | 'orderSettings.acceptSpecialRequests', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: 'priceVariants.variants.price' | '_id' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'image.id' | 'orderSettings.inStock' | 'orderSettings.acceptSpecialRequests', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: 'name' | 'description', value: string) => ItemsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: 'priceVariants.variants.variantId' | '_id' | 'name' | 'description' | 'labels.id' | 'orderSettings.inStock' | 'orderSettings.acceptSpecialRequests', value: any) => ItemsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: 'priceVariants.variants' | 'image' | 'labels' | 'orderSettings', value: boolean) => ItemsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ItemsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ItemsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ItemsQueryResult>;
  }
  /**
   * > **Note:** The Item API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves the number of items that match a specified filter.
   *
   * If filter isn't passed in the request, the endpoint returns the count of all items.
   * @public
   * @documentationMaturity preview
   */
  function countItems(options?: CountItemsOptions): Promise<CountItemsResponse>;
  interface CountItemsOptions {
      /** Filter for counting items. */
      filter?: Record<string, any> | null;
  }
  /**
   * > **Note:** The Item API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Updates an item.
   *
   * To update multiple items at once, use [Bulk Update Item](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/item/bulk-update-item)
   *
   * Each time an item is updated, revision increments by 1. The existing revision must be included when updating the item. This ensures you're working with the latest item information, and it prevents unintended overwrites.
   * @param _id - Item ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField item
   * @requiredField item.revision
   * @adminMethod
   * @returns Updated item.
   */
  function updateItem(_id: string | null, item: UpdateItem, options?: UpdateItemOptions): Promise<Item>;
  interface UpdateItem {
      /** Item price. */
      price?: string;
      /** Item price variants. */
      priceVariants?: PriceVariants;
      /**
       * Item ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the item is updated. To prevent conflicting changes, the current revision must be passed when updating the item. Ignored when creating a item.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the item was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the item was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Item name. */
      name?: string;
      /** Item description. */
      description?: string | null;
      /** Main item image. */
      image?: string;
      /** Additional item images. */
      additionalImages?: string[];
      /** Item labels. */
      labels?: Label[];
      /** Whether the item is visible in the menu for site visitors. */
      visible?: boolean | null;
      /** Online order settings. */
      orderSettings?: OrderSettings;
      /** Item modifier groups. */
      modifierGroups?: ModifierGroup$1[];
      /** Extended fields. */
      extendedFields?: ExtendedFields$4;
  }
  interface UpdateItemOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
      /**
       * The source of this request.
       * @internal
       */
      source?: string | null;
  }
  /**
   * > **Note:** The Item API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Updates up to 100 multiple items at once.
   *
   * Each time an item is updated, revision increments by 1. The existing revision must be included when updating item. This ensures you're working with the latest item information, and it prevents unintended overwrites.
   * @param items - Items to update.
   * @public
   * @documentationMaturity preview
   * @requiredField items
   * @requiredField items.item._id
   * @requiredField items.item.revision
   * @adminMethod
   */
  function bulkUpdateItem(items: MaskedItem[], options?: BulkUpdateItemOptions): Promise<BulkUpdateItemResponse>;
  interface BulkUpdateItemOptions {
      /** Whether to return entity in the response. */
      returnEntity?: boolean;
      /**
       * The source of this request.
       * @internal
       */
      source?: string | null;
  }
  /**
   * > **Note:** The Item API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Deletes an item.
   * @param itemId - Item ID.
   * @public
   * @documentationMaturity preview
   * @requiredField itemId
   * @adminMethod
   */
  function deleteItem(itemId: string, options?: DeleteItemOptions): Promise<void>;
  interface DeleteItemOptions {
      /**
       * The source of this request.
       * @internal
       */
      source?: string | null;
  }
  /**
   * > **Note:** The Item API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Deletes multiple items at once.
   * @param ids - Item IDs.
   * @public
   * @documentationMaturity preview
   * @requiredField ids
   * @adminMethod
   */
  function bulkDeleteItems(ids: string[], options?: BulkDeleteItemsOptions): Promise<BulkDeleteItemsResponse>;
  interface BulkDeleteItemsOptions {
      /**
       * The source of this request.
       * @internal
       */
      source?: string | null;
  }
  /**
   * Clone items from a different metasite.
   * @param metaSiteId - The MetaSiteId to clone from.
   * @internal
   * @documentationMaturity preview
   * @requiredField metaSiteId
   * @adminMethod
   */
  function cloneItems(metaSiteId: string): Promise<void>;
  
  type restaurantsMenusV1Item_universal_d_Item = Item;
  type restaurantsMenusV1Item_universal_d_ItemPricingOneOf = ItemPricingOneOf;
  type restaurantsMenusV1Item_universal_d_PriceVariants = PriceVariants;
  type restaurantsMenusV1Item_universal_d_PriceVariant = PriceVariant;
  type restaurantsMenusV1Item_universal_d_Label = Label;
  type restaurantsMenusV1Item_universal_d_OrderSettings = OrderSettings;
  type restaurantsMenusV1Item_universal_d_CreateItemRequest = CreateItemRequest;
  type restaurantsMenusV1Item_universal_d_CreateItemResponse = CreateItemResponse;
  type restaurantsMenusV1Item_universal_d_BulkCreateItemsRequest = BulkCreateItemsRequest;
  type restaurantsMenusV1Item_universal_d_BulkCreateItemsResponse = BulkCreateItemsResponse;
  type restaurantsMenusV1Item_universal_d_BulkCreateItemResult = BulkCreateItemResult;
  type restaurantsMenusV1Item_universal_d_GetItemRequest = GetItemRequest;
  type restaurantsMenusV1Item_universal_d_GetItemResponse = GetItemResponse;
  type restaurantsMenusV1Item_universal_d_ListItemsRequest = ListItemsRequest;
  type restaurantsMenusV1Item_universal_d_ListItemsResponse = ListItemsResponse;
  type restaurantsMenusV1Item_universal_d_QueryItemsRequest = QueryItemsRequest;
  type restaurantsMenusV1Item_universal_d_QueryItemsResponse = QueryItemsResponse;
  type restaurantsMenusV1Item_universal_d_CountItemsRequest = CountItemsRequest;
  type restaurantsMenusV1Item_universal_d_CountItemsResponse = CountItemsResponse;
  type restaurantsMenusV1Item_universal_d_UpdateItemRequest = UpdateItemRequest;
  type restaurantsMenusV1Item_universal_d_UpdateItemResponse = UpdateItemResponse;
  type restaurantsMenusV1Item_universal_d_BulkUpdateItemRequest = BulkUpdateItemRequest;
  type restaurantsMenusV1Item_universal_d_MaskedItem = MaskedItem;
  type restaurantsMenusV1Item_universal_d_BulkUpdateItemResponse = BulkUpdateItemResponse;
  type restaurantsMenusV1Item_universal_d_BulkItemResult = BulkItemResult;
  type restaurantsMenusV1Item_universal_d_DeleteItemRequest = DeleteItemRequest;
  type restaurantsMenusV1Item_universal_d_DeleteItemResponse = DeleteItemResponse;
  type restaurantsMenusV1Item_universal_d_BulkDeleteItemsRequest = BulkDeleteItemsRequest;
  type restaurantsMenusV1Item_universal_d_BulkDeleteItemsResponse = BulkDeleteItemsResponse;
  type restaurantsMenusV1Item_universal_d_BulkDeleteItemResult = BulkDeleteItemResult;
  type restaurantsMenusV1Item_universal_d_CloneItemsRequest = CloneItemsRequest;
  type restaurantsMenusV1Item_universal_d_CloneItemsResponse = CloneItemsResponse;
  const restaurantsMenusV1Item_universal_d_createItem: typeof createItem;
  type restaurantsMenusV1Item_universal_d_CreateItemOptions = CreateItemOptions;
  const restaurantsMenusV1Item_universal_d_bulkCreateItems: typeof bulkCreateItems;
  type restaurantsMenusV1Item_universal_d_BulkCreateItemsOptions = BulkCreateItemsOptions;
  const restaurantsMenusV1Item_universal_d_getItem: typeof getItem;
  const restaurantsMenusV1Item_universal_d_listItems: typeof listItems;
  type restaurantsMenusV1Item_universal_d_ListItemsOptions = ListItemsOptions;
  const restaurantsMenusV1Item_universal_d_queryItems: typeof queryItems;
  type restaurantsMenusV1Item_universal_d_ItemsQueryResult = ItemsQueryResult;
  type restaurantsMenusV1Item_universal_d_ItemsQueryBuilder = ItemsQueryBuilder;
  const restaurantsMenusV1Item_universal_d_countItems: typeof countItems;
  type restaurantsMenusV1Item_universal_d_CountItemsOptions = CountItemsOptions;
  const restaurantsMenusV1Item_universal_d_updateItem: typeof updateItem;
  type restaurantsMenusV1Item_universal_d_UpdateItem = UpdateItem;
  type restaurantsMenusV1Item_universal_d_UpdateItemOptions = UpdateItemOptions;
  const restaurantsMenusV1Item_universal_d_bulkUpdateItem: typeof bulkUpdateItem;
  type restaurantsMenusV1Item_universal_d_BulkUpdateItemOptions = BulkUpdateItemOptions;
  const restaurantsMenusV1Item_universal_d_deleteItem: typeof deleteItem;
  type restaurantsMenusV1Item_universal_d_DeleteItemOptions = DeleteItemOptions;
  const restaurantsMenusV1Item_universal_d_bulkDeleteItems: typeof bulkDeleteItems;
  type restaurantsMenusV1Item_universal_d_BulkDeleteItemsOptions = BulkDeleteItemsOptions;
  const restaurantsMenusV1Item_universal_d_cloneItems: typeof cloneItems;
  namespace restaurantsMenusV1Item_universal_d {
    export {
      restaurantsMenusV1Item_universal_d_Item as Item,
      restaurantsMenusV1Item_universal_d_ItemPricingOneOf as ItemPricingOneOf,
      restaurantsMenusV1Item_universal_d_PriceVariants as PriceVariants,
      restaurantsMenusV1Item_universal_d_PriceVariant as PriceVariant,
      restaurantsMenusV1Item_universal_d_Label as Label,
      restaurantsMenusV1Item_universal_d_OrderSettings as OrderSettings,
      ModifierGroup$1 as ModifierGroup,
      ExtendedFields$4 as ExtendedFields,
      InvalidateCache$6 as InvalidateCache,
      InvalidateCacheGetByOneOf$6 as InvalidateCacheGetByOneOf,
      App$6 as App,
      Page$6 as Page,
      URI$6 as URI,
      File$6 as File,
      restaurantsMenusV1Item_universal_d_CreateItemRequest as CreateItemRequest,
      restaurantsMenusV1Item_universal_d_CreateItemResponse as CreateItemResponse,
      restaurantsMenusV1Item_universal_d_BulkCreateItemsRequest as BulkCreateItemsRequest,
      restaurantsMenusV1Item_universal_d_BulkCreateItemsResponse as BulkCreateItemsResponse,
      restaurantsMenusV1Item_universal_d_BulkCreateItemResult as BulkCreateItemResult,
      ItemMetadata$5 as ItemMetadata,
      ApplicationError$5 as ApplicationError,
      BulkActionMetadata$5 as BulkActionMetadata,
      restaurantsMenusV1Item_universal_d_GetItemRequest as GetItemRequest,
      restaurantsMenusV1Item_universal_d_GetItemResponse as GetItemResponse,
      restaurantsMenusV1Item_universal_d_ListItemsRequest as ListItemsRequest,
      CursorPaging$6 as CursorPaging,
      restaurantsMenusV1Item_universal_d_ListItemsResponse as ListItemsResponse,
      CursorPagingMetadata$6 as CursorPagingMetadata,
      Cursors$6 as Cursors,
      restaurantsMenusV1Item_universal_d_QueryItemsRequest as QueryItemsRequest,
      CursorQuery$7 as CursorQuery,
      CursorQueryPagingMethodOneOf$7 as CursorQueryPagingMethodOneOf,
      Sorting$7 as Sorting,
      SortOrder$7 as SortOrder,
      restaurantsMenusV1Item_universal_d_QueryItemsResponse as QueryItemsResponse,
      restaurantsMenusV1Item_universal_d_CountItemsRequest as CountItemsRequest,
      restaurantsMenusV1Item_universal_d_CountItemsResponse as CountItemsResponse,
      restaurantsMenusV1Item_universal_d_UpdateItemRequest as UpdateItemRequest,
      restaurantsMenusV1Item_universal_d_UpdateItemResponse as UpdateItemResponse,
      restaurantsMenusV1Item_universal_d_BulkUpdateItemRequest as BulkUpdateItemRequest,
      restaurantsMenusV1Item_universal_d_MaskedItem as MaskedItem,
      restaurantsMenusV1Item_universal_d_BulkUpdateItemResponse as BulkUpdateItemResponse,
      restaurantsMenusV1Item_universal_d_BulkItemResult as BulkItemResult,
      restaurantsMenusV1Item_universal_d_DeleteItemRequest as DeleteItemRequest,
      restaurantsMenusV1Item_universal_d_DeleteItemResponse as DeleteItemResponse,
      restaurantsMenusV1Item_universal_d_BulkDeleteItemsRequest as BulkDeleteItemsRequest,
      restaurantsMenusV1Item_universal_d_BulkDeleteItemsResponse as BulkDeleteItemsResponse,
      restaurantsMenusV1Item_universal_d_BulkDeleteItemResult as BulkDeleteItemResult,
      restaurantsMenusV1Item_universal_d_CloneItemsRequest as CloneItemsRequest,
      restaurantsMenusV1Item_universal_d_CloneItemsResponse as CloneItemsResponse,
      DomainEvent$7 as DomainEvent,
      DomainEventBodyOneOf$7 as DomainEventBodyOneOf,
      EntityCreatedEvent$7 as EntityCreatedEvent,
      EntityUpdatedEvent$7 as EntityUpdatedEvent,
      EntityDeletedEvent$7 as EntityDeletedEvent,
      ActionEvent$7 as ActionEvent,
      Empty$6 as Empty,
      MessageEnvelope$7 as MessageEnvelope,
      IdentificationData$7 as IdentificationData,
      IdentificationDataIdOneOf$7 as IdentificationDataIdOneOf,
      WebhookIdentityType$7 as WebhookIdentityType,
      restaurantsMenusV1Item_universal_d_createItem as createItem,
      restaurantsMenusV1Item_universal_d_CreateItemOptions as CreateItemOptions,
      restaurantsMenusV1Item_universal_d_bulkCreateItems as bulkCreateItems,
      restaurantsMenusV1Item_universal_d_BulkCreateItemsOptions as BulkCreateItemsOptions,
      restaurantsMenusV1Item_universal_d_getItem as getItem,
      restaurantsMenusV1Item_universal_d_listItems as listItems,
      restaurantsMenusV1Item_universal_d_ListItemsOptions as ListItemsOptions,
      restaurantsMenusV1Item_universal_d_queryItems as queryItems,
      restaurantsMenusV1Item_universal_d_ItemsQueryResult as ItemsQueryResult,
      restaurantsMenusV1Item_universal_d_ItemsQueryBuilder as ItemsQueryBuilder,
      restaurantsMenusV1Item_universal_d_countItems as countItems,
      restaurantsMenusV1Item_universal_d_CountItemsOptions as CountItemsOptions,
      restaurantsMenusV1Item_universal_d_updateItem as updateItem,
      restaurantsMenusV1Item_universal_d_UpdateItem as UpdateItem,
      restaurantsMenusV1Item_universal_d_UpdateItemOptions as UpdateItemOptions,
      restaurantsMenusV1Item_universal_d_bulkUpdateItem as bulkUpdateItem,
      restaurantsMenusV1Item_universal_d_BulkUpdateItemOptions as BulkUpdateItemOptions,
      restaurantsMenusV1Item_universal_d_deleteItem as deleteItem,
      restaurantsMenusV1Item_universal_d_DeleteItemOptions as DeleteItemOptions,
      restaurantsMenusV1Item_universal_d_bulkDeleteItems as bulkDeleteItems,
      restaurantsMenusV1Item_universal_d_BulkDeleteItemsOptions as BulkDeleteItemsOptions,
      restaurantsMenusV1Item_universal_d_cloneItems as cloneItems,
    };
  }
  
  /**
   * An item modifier is a type of menu item that serves as an addition to a menu item.
   * Read more about [item modifiers](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/item-modifiers/introduction).
   */
  interface Modifier$1 {
      /**
       * Item modifier ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the item modifier is updated.
       * To prevent conflicting changes,
       * the current revision must be passed when updating the item modifier. <br />
       *
       * Ignored when creating an item modifier.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the item modifier was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the item modifier was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Item modifier display name. */
      name?: string | null;
      /**
       * Modifier type.
       * DEPRECATED - use the [item variant](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/item-variant/introduction). API to add a variant for the item.
       * For modifiers - use type Modifier
       */
      type?: Type$2;
      /** Extended fields. */
      extendedFields?: ExtendedFields$3;
  }
  enum Type$2 {
      UNKNOWN_VARIATION_AND_MODIFIER = "UNKNOWN_VARIATION_AND_MODIFIER",
      VARIANT = "VARIANT",
      MODIFIER = "MODIFIER"
  }
  interface ExtendedFields$3 {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       *
       * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface InvalidateCache$5 extends InvalidateCacheGetByOneOf$5 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$5;
      /** Invalidate by page id */
      page?: Page$5;
      /** Invalidate by URI path */
      uri?: URI$5;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File$5;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf$5 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$5;
      /** Invalidate by page id */
      page?: Page$5;
      /** Invalidate by URI path */
      uri?: URI$5;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File$5;
  }
  interface App$5 {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page$5 {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI$5 {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface File$5 {
      /** the msid the file is related to */
      metaSiteId?: string;
      /** Invalidate by filename (for media files such as PDFs) */
      fileName?: string;
  }
  interface CreateModifierRequest {
      /** Item modifier to create. */
      modifier: Modifier$1;
  }
  interface CreateModifierResponse {
      /** Created item modifier. */
      modifier?: Modifier$1;
  }
  interface GetModifierRequest {
      /** ID of the item modifier to retrieve. */
      modifierId: string;
  }
  interface GetModifierResponse {
      /** Retrieved item modifier. */
      modifier?: Modifier$1;
  }
  interface ListModifiersRequest {
      /** IDs of the item modifiers to retrieve. */
      modifierIds?: string[];
      /** Metadata of the paginated results. */
      paging?: CursorPaging$5;
  }
  interface CursorPaging$5 {
      /** Maximum number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface ListModifiersResponse {
      /** Retrieved item modifiers. */
      modifiers?: Modifier$1[];
      /** Metadata of the paginated results. */
      metadata?: CursorPagingMetadata$5;
  }
  interface CursorPagingMetadata$5 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor pointing to the next page and the previous page in the list of results. */
      cursors?: Cursors$5;
      /**
       * Whether there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$5 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface UpdateModifierRequest {
      /** Item Modifier with updated properties. */
      modifier: Modifier$1;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateModifierResponse {
      /** Updated item modifier. */
      modifier?: Modifier$1;
  }
  interface BulkCreateModifiersRequest {
      /** List of item modifiers to create. */
      modifiers: Modifier$1[];
      /**
       * Whether the created item modifiers are included in the response. <br />
       * Default: `false`.
       */
      returnEntity?: boolean;
  }
  interface BulkCreateModifiersResponse {
      /** Information about the created item modifiers. */
      results?: BulkCreateModifierResult[];
      /** Metadata for Bulk Create Modifiers API call. */
      bulkActionMetadata?: BulkActionMetadata$4;
  }
  interface BulkCreateModifierResult {
      /** Metadata for creation of the item modifer. */
      itemMetadata?: ItemMetadata$4;
      /** Created item modifier. */
      modifier?: Modifier$1;
  }
  interface ItemMetadata$4 {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError$4;
  }
  interface ApplicationError$4 {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata$4 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface BulkUpdateModifiersRequest {
      /** List of item modifiers to update. */
      modifiers: MaskedModifier[];
      /** Whether the updated item modifiers are included in the response. */
      returnEntity?: boolean;
  }
  interface MaskedModifier {
      /** Item modifier to update. */
      modifier?: Modifier$1;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface BulkUpdateModifiersResponse {
      /** Information about the updated item modifiers. */
      results?: BulkUpdateModifierResult[];
      /** Metadata for Bulk Update Modifiers API call. */
      bulkActionMetadata?: BulkActionMetadata$4;
  }
  interface BulkUpdateModifierResult {
      /** Metadata for the update of the item modifer. */
      itemMetadata?: ItemMetadata$4;
      /** Updated item modifier. */
      modifier?: Modifier$1;
  }
  interface DeleteModifierRequest {
      /** ID of the item modifier to delete. */
      modifierId: string;
  }
  interface DeleteModifierResponse {
  }
  interface QueryModifiersRequest {
      /** Query options. */
      query?: CursorQuery$6;
  }
  interface CursorQuery$6 extends CursorQueryPagingMethodOneOf$6 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$5;
      /**
       * Filter object.
       * See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
       * for more information.
       *
       * For a detailed list of supported filters, see
       * [Supported Filters](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/item-modifiers/supported-filters-and-sorting).
       */
      filter?: Record<string, any> | null;
      /** Sort object. */
      sort?: Sorting$6[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$6 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$5;
  }
  interface Sorting$6 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$6;
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
  enum SortOrder$6 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryModifiersResponse {
      /** Retrieved item modifiers. */
      modifiers?: Modifier$1[];
      /** Metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$5;
  }
  interface CloneModifiersRequest {
      /** The MetaSiteId to clone from */
      metaSiteId: string;
  }
  interface CloneModifiersResponse {
  }
  interface DomainEvent$6 extends DomainEventBodyOneOf$6 {
      createdEvent?: EntityCreatedEvent$6;
      updatedEvent?: EntityUpdatedEvent$6;
      deletedEvent?: EntityDeletedEvent$6;
      actionEvent?: ActionEvent$6;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf$6 {
      createdEvent?: EntityCreatedEvent$6;
      updatedEvent?: EntityUpdatedEvent$6;
      deletedEvent?: EntityDeletedEvent$6;
      actionEvent?: ActionEvent$6;
  }
  interface EntityCreatedEvent$6 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$6 {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$6 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$6 {
      bodyAsJson?: string;
  }
  interface Empty$5 {
  }
  interface MessageEnvelope$6 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$6;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$6 extends IdentificationDataIdOneOf$6 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$6;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$6 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$6 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * > **Note:** The Item Modifiers API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Creates an item modifier.
   *
   * To create multiple item modifiers at once, use [Bulk Create Modifiers](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/item-modifiers/bulk-create-modifiers).
   * @param modifier - Item modifier to create.
   * @public
   * @documentationMaturity preview
   * @requiredField modifier
   * @requiredField modifier.name
   * @adminMethod
   * @returns Created item modifier.
   */
  function createModifier(modifier: Modifier$1): Promise<Modifier$1>;
  /**
   * > **Note:** The Item Modifier API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves an item modifier by ID.
   * @param modifierId - ID of the item modifier to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField modifierId
   * @returns Retrieved item modifier.
   */
  function getModifier(modifierId: string): Promise<Modifier$1>;
  /**
   * > **Note:** The Item Modifier API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves a list of up to 100 item modifiers.
   * @public
   * @documentationMaturity preview
   */
  function listModifiers(options?: ListModifiersOptions): Promise<ListModifiersResponse>;
  interface ListModifiersOptions {
      /** IDs of the item modifiers to retrieve. */
      modifierIds?: string[];
      /** Metadata of the paginated results. */
      paging?: CursorPaging$5;
  }
  /**
   * > **Note:** The Item Modifier API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Updates an item modifier.
   *
   * To update multiple item modifiers at once, use [Bulk Update Item Modifiers](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/item-modifiers/bulk-update-modifiers).
   *
   * Each time an item modifier is updated, revision increments by 1. The existing revision must be included when updating an item modifier. This ensures you're working with the latest item modifier information, and it prevents unintended overwrites.
   * @param _id - Item modifier ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField modifier
   * @requiredField modifier.revision
   * @adminMethod
   * @returns Updated item modifier.
   */
  function updateModifier(_id: string | null, modifier: UpdateModifier, options?: UpdateModifierOptions): Promise<Modifier$1>;
  interface UpdateModifier {
      /**
       * Item modifier ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the item modifier is updated.
       * To prevent conflicting changes,
       * the current revision must be passed when updating the item modifier. <br />
       *
       * Ignored when creating an item modifier.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the item modifier was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the item modifier was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Item modifier display name. */
      name?: string | null;
      /**
       * Modifier type.
       * DEPRECATED - use the [item variant](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/item-variant/introduction). API to add a variant for the item.
       * For modifiers - use type Modifier
       */
      type?: Type$2;
      /** Extended fields. */
      extendedFields?: ExtendedFields$3;
  }
  interface UpdateModifierOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * > **Note:** The Item Modifier API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Creates multiple item modifiers.
   * @param modifiers - List of item modifiers to create.
   * @public
   * @documentationMaturity preview
   * @requiredField modifiers
   * @adminMethod
   */
  function bulkCreateModifiers(modifiers: Modifier$1[], options?: BulkCreateModifiersOptions): Promise<BulkCreateModifiersResponse>;
  interface BulkCreateModifiersOptions {
      /**
       * Whether the created item modifiers are included in the response. <br />
       * Default: `false`.
       */
      returnEntity?: boolean;
  }
  /**
   * > **Note:** The Item modifier API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Updates multiple item modifiers at once.
   * Each time an item modifier is updated, revision increments by 1. The existing revision must be included when updating the item modifier. This ensures you're working with the latest ite modifier information, and it prevents unintended overwrites.
   * @param modifiers - List of item modifiers to update.
   * @public
   * @documentationMaturity preview
   * @requiredField modifiers
   * @adminMethod
   */
  function bulkUpdateModifiers(modifiers: MaskedModifier[], options?: BulkUpdateModifiersOptions): Promise<BulkUpdateModifiersResponse>;
  interface BulkUpdateModifiersOptions {
      /** Whether the updated item modifiers are included in the response. */
      returnEntity?: boolean;
  }
  /**
   * > **Note:** The Item modifier API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   * Deletes an item modifier.
   * @param modifierId - ID of the item modifier to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField modifierId
   * @adminMethod
   */
  function deleteModifier(modifierId: string): Promise<void>;
  /**
   * > **Note:** The Item Modifier API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves a list of item modifiers given the provided paging, filtering, and sorting. Up to 100 item modifiers can be returned per request.
   * For a detailed list of supported operations, see the [Supported Filters and Sorting](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/item-modifiers/supported-filters-and-sorting) article. To learn how to query menus, see [API Query Language](https://dev.wix.com/docs/rest/articles/getting-started/api-query-language).
   * @public
   * @documentationMaturity preview
   */
  function queryModifiers(): ModifiersQueryBuilder;
  interface QueryCursorResult$6 {
      cursors: Cursors$5;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ModifiersQueryResult extends QueryCursorResult$6 {
      items: Modifier$1[];
      query: ModifiersQueryBuilder;
      next: () => Promise<ModifiersQueryResult>;
      prev: () => Promise<ModifiersQueryResult>;
  }
  interface ModifiersQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name', value: any) => ModifiersQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name', value: any) => ModifiersQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => ModifiersQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ModifiersQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => ModifiersQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ModifiersQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'name', value: any) => ModifiersQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ModifiersQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ModifiersQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ModifiersQueryResult>;
  }
  /**
   * Clone item modifiers from a different metasite.
   * @param metaSiteId - The MetaSiteId to clone from
   * @internal
   * @documentationMaturity preview
   * @requiredField metaSiteId
   * @adminMethod
   */
  function cloneModifiers(metaSiteId: string): Promise<void>;
  
  type restaurantsMenusV1ItemModifier_universal_d_CreateModifierRequest = CreateModifierRequest;
  type restaurantsMenusV1ItemModifier_universal_d_CreateModifierResponse = CreateModifierResponse;
  type restaurantsMenusV1ItemModifier_universal_d_GetModifierRequest = GetModifierRequest;
  type restaurantsMenusV1ItemModifier_universal_d_GetModifierResponse = GetModifierResponse;
  type restaurantsMenusV1ItemModifier_universal_d_ListModifiersRequest = ListModifiersRequest;
  type restaurantsMenusV1ItemModifier_universal_d_ListModifiersResponse = ListModifiersResponse;
  type restaurantsMenusV1ItemModifier_universal_d_UpdateModifierRequest = UpdateModifierRequest;
  type restaurantsMenusV1ItemModifier_universal_d_UpdateModifierResponse = UpdateModifierResponse;
  type restaurantsMenusV1ItemModifier_universal_d_BulkCreateModifiersRequest = BulkCreateModifiersRequest;
  type restaurantsMenusV1ItemModifier_universal_d_BulkCreateModifiersResponse = BulkCreateModifiersResponse;
  type restaurantsMenusV1ItemModifier_universal_d_BulkCreateModifierResult = BulkCreateModifierResult;
  type restaurantsMenusV1ItemModifier_universal_d_BulkUpdateModifiersRequest = BulkUpdateModifiersRequest;
  type restaurantsMenusV1ItemModifier_universal_d_MaskedModifier = MaskedModifier;
  type restaurantsMenusV1ItemModifier_universal_d_BulkUpdateModifiersResponse = BulkUpdateModifiersResponse;
  type restaurantsMenusV1ItemModifier_universal_d_BulkUpdateModifierResult = BulkUpdateModifierResult;
  type restaurantsMenusV1ItemModifier_universal_d_DeleteModifierRequest = DeleteModifierRequest;
  type restaurantsMenusV1ItemModifier_universal_d_DeleteModifierResponse = DeleteModifierResponse;
  type restaurantsMenusV1ItemModifier_universal_d_QueryModifiersRequest = QueryModifiersRequest;
  type restaurantsMenusV1ItemModifier_universal_d_QueryModifiersResponse = QueryModifiersResponse;
  type restaurantsMenusV1ItemModifier_universal_d_CloneModifiersRequest = CloneModifiersRequest;
  type restaurantsMenusV1ItemModifier_universal_d_CloneModifiersResponse = CloneModifiersResponse;
  const restaurantsMenusV1ItemModifier_universal_d_createModifier: typeof createModifier;
  const restaurantsMenusV1ItemModifier_universal_d_getModifier: typeof getModifier;
  const restaurantsMenusV1ItemModifier_universal_d_listModifiers: typeof listModifiers;
  type restaurantsMenusV1ItemModifier_universal_d_ListModifiersOptions = ListModifiersOptions;
  const restaurantsMenusV1ItemModifier_universal_d_updateModifier: typeof updateModifier;
  type restaurantsMenusV1ItemModifier_universal_d_UpdateModifier = UpdateModifier;
  type restaurantsMenusV1ItemModifier_universal_d_UpdateModifierOptions = UpdateModifierOptions;
  const restaurantsMenusV1ItemModifier_universal_d_bulkCreateModifiers: typeof bulkCreateModifiers;
  type restaurantsMenusV1ItemModifier_universal_d_BulkCreateModifiersOptions = BulkCreateModifiersOptions;
  const restaurantsMenusV1ItemModifier_universal_d_bulkUpdateModifiers: typeof bulkUpdateModifiers;
  type restaurantsMenusV1ItemModifier_universal_d_BulkUpdateModifiersOptions = BulkUpdateModifiersOptions;
  const restaurantsMenusV1ItemModifier_universal_d_deleteModifier: typeof deleteModifier;
  const restaurantsMenusV1ItemModifier_universal_d_queryModifiers: typeof queryModifiers;
  type restaurantsMenusV1ItemModifier_universal_d_ModifiersQueryResult = ModifiersQueryResult;
  type restaurantsMenusV1ItemModifier_universal_d_ModifiersQueryBuilder = ModifiersQueryBuilder;
  const restaurantsMenusV1ItemModifier_universal_d_cloneModifiers: typeof cloneModifiers;
  namespace restaurantsMenusV1ItemModifier_universal_d {
    export {
      Modifier$1 as Modifier,
      Type$2 as Type,
      ExtendedFields$3 as ExtendedFields,
      InvalidateCache$5 as InvalidateCache,
      InvalidateCacheGetByOneOf$5 as InvalidateCacheGetByOneOf,
      App$5 as App,
      Page$5 as Page,
      URI$5 as URI,
      File$5 as File,
      restaurantsMenusV1ItemModifier_universal_d_CreateModifierRequest as CreateModifierRequest,
      restaurantsMenusV1ItemModifier_universal_d_CreateModifierResponse as CreateModifierResponse,
      restaurantsMenusV1ItemModifier_universal_d_GetModifierRequest as GetModifierRequest,
      restaurantsMenusV1ItemModifier_universal_d_GetModifierResponse as GetModifierResponse,
      restaurantsMenusV1ItemModifier_universal_d_ListModifiersRequest as ListModifiersRequest,
      CursorPaging$5 as CursorPaging,
      restaurantsMenusV1ItemModifier_universal_d_ListModifiersResponse as ListModifiersResponse,
      CursorPagingMetadata$5 as CursorPagingMetadata,
      Cursors$5 as Cursors,
      restaurantsMenusV1ItemModifier_universal_d_UpdateModifierRequest as UpdateModifierRequest,
      restaurantsMenusV1ItemModifier_universal_d_UpdateModifierResponse as UpdateModifierResponse,
      restaurantsMenusV1ItemModifier_universal_d_BulkCreateModifiersRequest as BulkCreateModifiersRequest,
      restaurantsMenusV1ItemModifier_universal_d_BulkCreateModifiersResponse as BulkCreateModifiersResponse,
      restaurantsMenusV1ItemModifier_universal_d_BulkCreateModifierResult as BulkCreateModifierResult,
      ItemMetadata$4 as ItemMetadata,
      ApplicationError$4 as ApplicationError,
      BulkActionMetadata$4 as BulkActionMetadata,
      restaurantsMenusV1ItemModifier_universal_d_BulkUpdateModifiersRequest as BulkUpdateModifiersRequest,
      restaurantsMenusV1ItemModifier_universal_d_MaskedModifier as MaskedModifier,
      restaurantsMenusV1ItemModifier_universal_d_BulkUpdateModifiersResponse as BulkUpdateModifiersResponse,
      restaurantsMenusV1ItemModifier_universal_d_BulkUpdateModifierResult as BulkUpdateModifierResult,
      restaurantsMenusV1ItemModifier_universal_d_DeleteModifierRequest as DeleteModifierRequest,
      restaurantsMenusV1ItemModifier_universal_d_DeleteModifierResponse as DeleteModifierResponse,
      restaurantsMenusV1ItemModifier_universal_d_QueryModifiersRequest as QueryModifiersRequest,
      CursorQuery$6 as CursorQuery,
      CursorQueryPagingMethodOneOf$6 as CursorQueryPagingMethodOneOf,
      Sorting$6 as Sorting,
      SortOrder$6 as SortOrder,
      restaurantsMenusV1ItemModifier_universal_d_QueryModifiersResponse as QueryModifiersResponse,
      restaurantsMenusV1ItemModifier_universal_d_CloneModifiersRequest as CloneModifiersRequest,
      restaurantsMenusV1ItemModifier_universal_d_CloneModifiersResponse as CloneModifiersResponse,
      DomainEvent$6 as DomainEvent,
      DomainEventBodyOneOf$6 as DomainEventBodyOneOf,
      EntityCreatedEvent$6 as EntityCreatedEvent,
      EntityUpdatedEvent$6 as EntityUpdatedEvent,
      EntityDeletedEvent$6 as EntityDeletedEvent,
      ActionEvent$6 as ActionEvent,
      Empty$5 as Empty,
      MessageEnvelope$6 as MessageEnvelope,
      IdentificationData$6 as IdentificationData,
      IdentificationDataIdOneOf$6 as IdentificationDataIdOneOf,
      WebhookIdentityType$6 as WebhookIdentityType,
      restaurantsMenusV1ItemModifier_universal_d_createModifier as createModifier,
      restaurantsMenusV1ItemModifier_universal_d_getModifier as getModifier,
      restaurantsMenusV1ItemModifier_universal_d_listModifiers as listModifiers,
      restaurantsMenusV1ItemModifier_universal_d_ListModifiersOptions as ListModifiersOptions,
      restaurantsMenusV1ItemModifier_universal_d_updateModifier as updateModifier,
      restaurantsMenusV1ItemModifier_universal_d_UpdateModifier as UpdateModifier,
      restaurantsMenusV1ItemModifier_universal_d_UpdateModifierOptions as UpdateModifierOptions,
      restaurantsMenusV1ItemModifier_universal_d_bulkCreateModifiers as bulkCreateModifiers,
      restaurantsMenusV1ItemModifier_universal_d_BulkCreateModifiersOptions as BulkCreateModifiersOptions,
      restaurantsMenusV1ItemModifier_universal_d_bulkUpdateModifiers as bulkUpdateModifiers,
      restaurantsMenusV1ItemModifier_universal_d_BulkUpdateModifiersOptions as BulkUpdateModifiersOptions,
      restaurantsMenusV1ItemModifier_universal_d_deleteModifier as deleteModifier,
      restaurantsMenusV1ItemModifier_universal_d_queryModifiers as queryModifiers,
      restaurantsMenusV1ItemModifier_universal_d_ModifiersQueryResult as ModifiersQueryResult,
      restaurantsMenusV1ItemModifier_universal_d_ModifiersQueryBuilder as ModifiersQueryBuilder,
      restaurantsMenusV1ItemModifier_universal_d_cloneModifiers as cloneModifiers,
    };
  }
  
  interface ModifierGroup {
      /**
       * Modifier group ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the modifier group is updated. To prevent conflicting changes, the current revision must be passed when updating the modifier group. Ignored when creating a modifier group.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the modifier group was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the modifier group was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Modifier group name. */
      name?: string | null;
      /** Group of item modifiers. */
      modifiers?: Modifier[];
      /** Modifier group details. */
      rule?: Rule$1;
      /** Extended fields. */
      extendedFields?: ExtendedFields$2;
  }
  interface Modifier {
      /** Item modifier ID. */
      _id?: string;
      /**
       * Deprecated, modifier additional charge. Can be 0 to represent free.
       * @internal
       */
      additionalCharge?: string | null;
      /**
       * Whether the item modifier is pre-selected.
       * Default: `false`.
       */
      preSelected?: boolean | null;
      /** Item modifier price details. */
      additionalChargeInfo?: AdditionalChargeInfo;
  }
  interface PriceInfo {
      /** Modifier additional charge. Can be 0 to represent free. */
      additionalCharge?: string | null;
  }
  interface Rule$1 {
      /** Whether the items from group modifier are required to select. */
      required?: boolean | null;
      /**
       * Minimum number of item modifiers a site visitor must select. The value must be lower or equal to the available item modifiers in the group.
       * Default: `0`.
       */
      minSelections?: number | null;
      /** Minimum number of item modifiers a site visitor must select. Must be greater than or equal to the value of `minSelections`. */
      maxSelections?: number | null;
  }
  interface ExtendedFields$2 {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       *
       * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface AdditionalChargeInfo {
      /** Additional charge to the item modifier. The value of `0` means the item modifier is free. */
      additionalCharge?: string | null;
  }
  interface InvalidateCache$4 extends InvalidateCacheGetByOneOf$4 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$4;
      /** Invalidate by page id */
      page?: Page$4;
      /** Invalidate by URI path */
      uri?: URI$4;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File$4;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf$4 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$4;
      /** Invalidate by page id */
      page?: Page$4;
      /** Invalidate by URI path */
      uri?: URI$4;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File$4;
  }
  interface App$4 {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page$4 {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI$4 {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface File$4 {
      /** the msid the file is related to */
      metaSiteId?: string;
      /** Invalidate by filename (for media files such as PDFs) */
      fileName?: string;
  }
  interface CreateModifierGroupRequest {
      /** Modifier group details. */
      modifierGroup: ModifierGroup;
  }
  interface CreateModifierGroupResponse {
      /** Modifier group. */
      modifierGroup?: ModifierGroup;
  }
  interface GetModifierGroupRequest {
      /** Modifier group ID. */
      modifierGroupId: string;
  }
  interface GetModifierGroupResponse {
      /** Modifier group. */
      modifierGroup?: ModifierGroup;
  }
  interface ListModifierGroupRequest {
      /** Modifier group IDs. */
      modifierGroupIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$4;
  }
  interface CursorPaging$4 {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface ListModifierGroupResponse {
      /** Retrieved modifier groups. */
      modifierGroups?: ModifierGroup[];
      /** The metadata of the paginated results. */
      metadata?: CursorPagingMetadata$4;
  }
  interface CursorPagingMetadata$4 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$4;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$4 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryModifierGroupsRequest {
      /** Query options. */
      query?: CursorQuery$5;
  }
  interface CursorQuery$5 extends CursorQueryPagingMethodOneOf$5 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$4;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$5[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$5 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$4;
  }
  interface Sorting$5 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$5;
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
  enum SortOrder$5 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryModifierGroupsResponse {
      /** Retrieved modifier groups. */
      modifierGroups?: ModifierGroup[];
      /** Metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$4;
  }
  interface UpdateModifierGroupRequest {
      /** Modifier group to update. */
      modifierGroup: ModifierGroup;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateModifierGroupResponse {
      /** Updated modifier group. */
      modifierGroup?: ModifierGroup;
  }
  interface DeleteModifierGroupRequest {
      /** Modifier group ID. */
      modifierGroupId: string;
  }
  interface DeleteModifierGroupResponse {
  }
  interface BulkCreateModifierGroupsRequest {
      /** Modifier groups details. */
      modifierGroups: ModifierGroup[];
      /** Whether to receive the created modifier groups in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateModifierGroupsResponse {
      /** Information about the created modifier groups. */
      results?: BulkCreateModifierGroupsResult[];
      /** Metadata for the API call. */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkCreateModifierGroupsResult {
      /** Metadata for group modifier creation. */
      itemMetadata?: ItemMetadata$3;
      /** Created modifier group. */
      modifierGroup?: ModifierGroup;
  }
  interface ItemMetadata$3 {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError$3;
  }
  interface ApplicationError$3 {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata$3 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface BulkUpdateModifierGroupsRequest {
      /** Modifier groups to update. */
      modifierGroups: MaskedModifierGroup[];
      /** Whether to receive the updated modifier groups in the response. */
      returnEntity?: boolean;
  }
  interface MaskedModifierGroup {
      /** Modifier group to update. */
      modifierGroup?: ModifierGroup;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface BulkUpdateModifierGroupsResponse {
      /** Information about the updated modifier groups. */
      results?: BulkUpdateModifierGroupsResult[];
      /** Metadata for the API call. */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkUpdateModifierGroupsResult {
      /** Metadata for group modifier update. */
      itemMetadata?: ItemMetadata$3;
      /** Updated modifier group. Only returned if `returnEntity` is set to `true`. */
      modifierGroup?: ModifierGroup;
  }
  interface CloneModifierGroupsRequest {
      /** The MetaSiteId to clone from. */
      metaSiteId: string;
  }
  interface CloneModifierGroupsResponse {
  }
  interface DomainEvent$5 extends DomainEventBodyOneOf$5 {
      createdEvent?: EntityCreatedEvent$5;
      updatedEvent?: EntityUpdatedEvent$5;
      deletedEvent?: EntityDeletedEvent$5;
      actionEvent?: ActionEvent$5;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf$5 {
      createdEvent?: EntityCreatedEvent$5;
      updatedEvent?: EntityUpdatedEvent$5;
      deletedEvent?: EntityDeletedEvent$5;
      actionEvent?: ActionEvent$5;
  }
  interface EntityCreatedEvent$5 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$5 {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$5 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$5 {
      bodyAsJson?: string;
  }
  interface Empty$4 {
  }
  interface MessageEnvelope$5 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$5;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$5 extends IdentificationDataIdOneOf$5 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$5;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$5 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$5 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * > **Note:** The Item Modifier Groups API only works with the Wix Restaurants Menus (New) app. Make sure you downloaded this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Creates a modifier group.
   * To create multiple modifier groups at once, use [Bulk Create Modifiers](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/item-modifier-groups/bulk-create-modifier-groups).
   * @param modifierGroup - Modifier group details.
   * @public
   * @documentationMaturity preview
   * @requiredField modifierGroup
   * @requiredField modifierGroup.name
   * @adminMethod
   * @returns Modifier group.
   */
  function createModifierGroup(modifierGroup: ModifierGroup): Promise<ModifierGroup>;
  /**
   * > **Note:** The Item Modifier Groups API only works with the Wix Restaurants Menus (New) app. Make sure you downloaded this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves a modifier group by the ID.
   * @param modifierGroupId - Modifier group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField modifierGroupId
   * @returns Modifier group.
   */
  function getModifierGroup(modifierGroupId: string): Promise<ModifierGroup>;
  /**
   * > **Note:** The Item Modifier Groups API only works with the Wix Restaurants Menus (New) app. Make sure you downloaded this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves a list of up to 100 modifier groups.
   * @public
   * @documentationMaturity preview
   */
  function listModifierGroups(options?: ListModifierGroupsOptions): Promise<ListModifierGroupResponse>;
  interface ListModifierGroupsOptions {
      /** Modifier group IDs. */
      modifierGroupIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$4;
  }
  /**
   * > **Note:** The Item Modifier Groups API only works with the Wix Restaurants Menus (New) app. Make sure you downloaded this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves a list of modifier groups given the provided paging, filtering, and sorting. Up to 100 modifier groups can be returned per request.
   * For a detailed list of supported operations, see the [Supported Filters and Sorting](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/item-modifier-groups/supported-filters-and-sorting) article. To learn how to query modifier groups, see [API Query Language](https://dev.wix.com/docs/rest/articles/getting-started/api-query-language).
   * @public
   * @documentationMaturity preview
   */
  function queryModifierGroups(): ModifierGroupsQueryBuilder;
  interface QueryCursorResult$5 {
      cursors: Cursors$4;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ModifierGroupsQueryResult extends QueryCursorResult$5 {
      items: ModifierGroup[];
      query: ModifierGroupsQueryBuilder;
      next: () => Promise<ModifierGroupsQueryResult>;
      prev: () => Promise<ModifierGroupsQueryResult>;
  }
  interface ModifierGroupsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'modifiers.preSelected' | 'rule.required' | 'rule.minSelections' | 'rule.maxSelections', value: any) => ModifierGroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'modifiers.preSelected' | 'rule.required' | 'rule.minSelections' | 'rule.maxSelections', value: any) => ModifierGroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => ModifierGroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ModifierGroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => ModifierGroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ModifierGroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: 'name', value: string) => ModifierGroupsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'name' | 'modifiers.id' | 'modifiers.preSelected' | 'rule.required', value: any) => ModifierGroupsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: 'modifiers' | 'rule', value: boolean) => ModifierGroupsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ModifierGroupsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ModifierGroupsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ModifierGroupsQueryResult>;
  }
  /**
   * > **Note:** The Item Modifier Groups API only works with the Wix Restaurants Menus (New) app. Make sure you downloaded this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Updates a modifier group.
   * Each time a modifier group is updated, revision increments by 1. The existing revision must be included when updating the modifier group. This ensures you're working with the latest modifier group information, and it prevents unintended overwrites.
   * @param _id - Modifier group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField modifierGroup
   * @requiredField modifierGroup.revision
   * @adminMethod
   * @returns Updated modifier group.
   */
  function updateModifierGroup(_id: string | null, modifierGroup: UpdateModifierGroup, options?: UpdateModifierGroupOptions): Promise<ModifierGroup>;
  interface UpdateModifierGroup {
      /**
       * Modifier group ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the modifier group is updated. To prevent conflicting changes, the current revision must be passed when updating the modifier group. Ignored when creating a modifier group.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the modifier group was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the modifier group was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Modifier group name. */
      name?: string | null;
      /** Group of item modifiers. */
      modifiers?: Modifier[];
      /** Modifier group details. */
      rule?: Rule$1;
      /** Extended fields. */
      extendedFields?: ExtendedFields$2;
  }
  interface UpdateModifierGroupOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * > **Note:** The Item Modifier Groups API only works with the Wix Restaurants Menus (New) app. Make sure you downloaded this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Deletes a modifier group.
   * @param modifierGroupId - Modifier group ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField modifierGroupId
   * @adminMethod
   */
  function deleteModifierGroup(modifierGroupId: string): Promise<void>;
  /**
   * > **Note:** The Item Modifier Groups API only works with the Wix Restaurants Menus (New) app. Make sure you downloaded this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Creates multiple modifier groups.
   * @param modifierGroups - Modifier groups details.
   * @public
   * @documentationMaturity preview
   * @requiredField modifierGroups
   * @adminMethod
   */
  function bulkCreateModifierGroups(modifierGroups: ModifierGroup[], options?: BulkCreateModifierGroupsOptions): Promise<BulkCreateModifierGroupsResponse>;
  interface BulkCreateModifierGroupsOptions {
      /** Whether to receive the created modifier groups in the response. */
      returnEntity?: boolean;
  }
  /**
   * > **Note:** The Item Modifier Groups API only works with the Wix Restaurants Menus (New) app. Make sure you downloaded this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Bulk update a Modifier Group, supports partial update.
   * Each time a modifier group is updated, revision increments by 1. The existing revision must be included when updating modifier group. This ensures you're working with the latest item information, and it prevents unintended overwrites.
   * Up to 100 modifier groups can be returned per request.
   * @param modifierGroups - Modifier groups to update.
   * @public
   * @documentationMaturity preview
   * @requiredField modifierGroups
   * @requiredField modifierGroups.modifierGroup._id
   * @requiredField modifierGroups.modifierGroup.revision
   * @adminMethod
   */
  function bulkUpdateModifierGroups(modifierGroups: MaskedModifierGroup[], options?: BulkUpdateModifierGroupsOptions): Promise<BulkUpdateModifierGroupsResponse>;
  interface BulkUpdateModifierGroupsOptions {
      /** Whether to receive the updated modifier groups in the response. */
      returnEntity?: boolean;
  }
  /**
   * Clone modifier groups from a different metasite.
   * @param metaSiteId - The MetaSiteId to clone from.
   * @internal
   * @documentationMaturity preview
   * @requiredField metaSiteId
   * @adminMethod
   */
  function cloneModifierGroups(metaSiteId: string): Promise<void>;
  
  type restaurantsMenusV1ItemModifierGroup_universal_d_ModifierGroup = ModifierGroup;
  type restaurantsMenusV1ItemModifierGroup_universal_d_Modifier = Modifier;
  type restaurantsMenusV1ItemModifierGroup_universal_d_PriceInfo = PriceInfo;
  type restaurantsMenusV1ItemModifierGroup_universal_d_AdditionalChargeInfo = AdditionalChargeInfo;
  type restaurantsMenusV1ItemModifierGroup_universal_d_CreateModifierGroupRequest = CreateModifierGroupRequest;
  type restaurantsMenusV1ItemModifierGroup_universal_d_CreateModifierGroupResponse = CreateModifierGroupResponse;
  type restaurantsMenusV1ItemModifierGroup_universal_d_GetModifierGroupRequest = GetModifierGroupRequest;
  type restaurantsMenusV1ItemModifierGroup_universal_d_GetModifierGroupResponse = GetModifierGroupResponse;
  type restaurantsMenusV1ItemModifierGroup_universal_d_ListModifierGroupRequest = ListModifierGroupRequest;
  type restaurantsMenusV1ItemModifierGroup_universal_d_ListModifierGroupResponse = ListModifierGroupResponse;
  type restaurantsMenusV1ItemModifierGroup_universal_d_QueryModifierGroupsRequest = QueryModifierGroupsRequest;
  type restaurantsMenusV1ItemModifierGroup_universal_d_QueryModifierGroupsResponse = QueryModifierGroupsResponse;
  type restaurantsMenusV1ItemModifierGroup_universal_d_UpdateModifierGroupRequest = UpdateModifierGroupRequest;
  type restaurantsMenusV1ItemModifierGroup_universal_d_UpdateModifierGroupResponse = UpdateModifierGroupResponse;
  type restaurantsMenusV1ItemModifierGroup_universal_d_DeleteModifierGroupRequest = DeleteModifierGroupRequest;
  type restaurantsMenusV1ItemModifierGroup_universal_d_DeleteModifierGroupResponse = DeleteModifierGroupResponse;
  type restaurantsMenusV1ItemModifierGroup_universal_d_BulkCreateModifierGroupsRequest = BulkCreateModifierGroupsRequest;
  type restaurantsMenusV1ItemModifierGroup_universal_d_BulkCreateModifierGroupsResponse = BulkCreateModifierGroupsResponse;
  type restaurantsMenusV1ItemModifierGroup_universal_d_BulkCreateModifierGroupsResult = BulkCreateModifierGroupsResult;
  type restaurantsMenusV1ItemModifierGroup_universal_d_BulkUpdateModifierGroupsRequest = BulkUpdateModifierGroupsRequest;
  type restaurantsMenusV1ItemModifierGroup_universal_d_MaskedModifierGroup = MaskedModifierGroup;
  type restaurantsMenusV1ItemModifierGroup_universal_d_BulkUpdateModifierGroupsResponse = BulkUpdateModifierGroupsResponse;
  type restaurantsMenusV1ItemModifierGroup_universal_d_BulkUpdateModifierGroupsResult = BulkUpdateModifierGroupsResult;
  type restaurantsMenusV1ItemModifierGroup_universal_d_CloneModifierGroupsRequest = CloneModifierGroupsRequest;
  type restaurantsMenusV1ItemModifierGroup_universal_d_CloneModifierGroupsResponse = CloneModifierGroupsResponse;
  const restaurantsMenusV1ItemModifierGroup_universal_d_createModifierGroup: typeof createModifierGroup;
  const restaurantsMenusV1ItemModifierGroup_universal_d_getModifierGroup: typeof getModifierGroup;
  const restaurantsMenusV1ItemModifierGroup_universal_d_listModifierGroups: typeof listModifierGroups;
  type restaurantsMenusV1ItemModifierGroup_universal_d_ListModifierGroupsOptions = ListModifierGroupsOptions;
  const restaurantsMenusV1ItemModifierGroup_universal_d_queryModifierGroups: typeof queryModifierGroups;
  type restaurantsMenusV1ItemModifierGroup_universal_d_ModifierGroupsQueryResult = ModifierGroupsQueryResult;
  type restaurantsMenusV1ItemModifierGroup_universal_d_ModifierGroupsQueryBuilder = ModifierGroupsQueryBuilder;
  const restaurantsMenusV1ItemModifierGroup_universal_d_updateModifierGroup: typeof updateModifierGroup;
  type restaurantsMenusV1ItemModifierGroup_universal_d_UpdateModifierGroup = UpdateModifierGroup;
  type restaurantsMenusV1ItemModifierGroup_universal_d_UpdateModifierGroupOptions = UpdateModifierGroupOptions;
  const restaurantsMenusV1ItemModifierGroup_universal_d_deleteModifierGroup: typeof deleteModifierGroup;
  const restaurantsMenusV1ItemModifierGroup_universal_d_bulkCreateModifierGroups: typeof bulkCreateModifierGroups;
  type restaurantsMenusV1ItemModifierGroup_universal_d_BulkCreateModifierGroupsOptions = BulkCreateModifierGroupsOptions;
  const restaurantsMenusV1ItemModifierGroup_universal_d_bulkUpdateModifierGroups: typeof bulkUpdateModifierGroups;
  type restaurantsMenusV1ItemModifierGroup_universal_d_BulkUpdateModifierGroupsOptions = BulkUpdateModifierGroupsOptions;
  const restaurantsMenusV1ItemModifierGroup_universal_d_cloneModifierGroups: typeof cloneModifierGroups;
  namespace restaurantsMenusV1ItemModifierGroup_universal_d {
    export {
      restaurantsMenusV1ItemModifierGroup_universal_d_ModifierGroup as ModifierGroup,
      restaurantsMenusV1ItemModifierGroup_universal_d_Modifier as Modifier,
      restaurantsMenusV1ItemModifierGroup_universal_d_PriceInfo as PriceInfo,
      Rule$1 as Rule,
      ExtendedFields$2 as ExtendedFields,
      restaurantsMenusV1ItemModifierGroup_universal_d_AdditionalChargeInfo as AdditionalChargeInfo,
      InvalidateCache$4 as InvalidateCache,
      InvalidateCacheGetByOneOf$4 as InvalidateCacheGetByOneOf,
      App$4 as App,
      Page$4 as Page,
      URI$4 as URI,
      File$4 as File,
      restaurantsMenusV1ItemModifierGroup_universal_d_CreateModifierGroupRequest as CreateModifierGroupRequest,
      restaurantsMenusV1ItemModifierGroup_universal_d_CreateModifierGroupResponse as CreateModifierGroupResponse,
      restaurantsMenusV1ItemModifierGroup_universal_d_GetModifierGroupRequest as GetModifierGroupRequest,
      restaurantsMenusV1ItemModifierGroup_universal_d_GetModifierGroupResponse as GetModifierGroupResponse,
      restaurantsMenusV1ItemModifierGroup_universal_d_ListModifierGroupRequest as ListModifierGroupRequest,
      CursorPaging$4 as CursorPaging,
      restaurantsMenusV1ItemModifierGroup_universal_d_ListModifierGroupResponse as ListModifierGroupResponse,
      CursorPagingMetadata$4 as CursorPagingMetadata,
      Cursors$4 as Cursors,
      restaurantsMenusV1ItemModifierGroup_universal_d_QueryModifierGroupsRequest as QueryModifierGroupsRequest,
      CursorQuery$5 as CursorQuery,
      CursorQueryPagingMethodOneOf$5 as CursorQueryPagingMethodOneOf,
      Sorting$5 as Sorting,
      SortOrder$5 as SortOrder,
      restaurantsMenusV1ItemModifierGroup_universal_d_QueryModifierGroupsResponse as QueryModifierGroupsResponse,
      restaurantsMenusV1ItemModifierGroup_universal_d_UpdateModifierGroupRequest as UpdateModifierGroupRequest,
      restaurantsMenusV1ItemModifierGroup_universal_d_UpdateModifierGroupResponse as UpdateModifierGroupResponse,
      restaurantsMenusV1ItemModifierGroup_universal_d_DeleteModifierGroupRequest as DeleteModifierGroupRequest,
      restaurantsMenusV1ItemModifierGroup_universal_d_DeleteModifierGroupResponse as DeleteModifierGroupResponse,
      restaurantsMenusV1ItemModifierGroup_universal_d_BulkCreateModifierGroupsRequest as BulkCreateModifierGroupsRequest,
      restaurantsMenusV1ItemModifierGroup_universal_d_BulkCreateModifierGroupsResponse as BulkCreateModifierGroupsResponse,
      restaurantsMenusV1ItemModifierGroup_universal_d_BulkCreateModifierGroupsResult as BulkCreateModifierGroupsResult,
      ItemMetadata$3 as ItemMetadata,
      ApplicationError$3 as ApplicationError,
      BulkActionMetadata$3 as BulkActionMetadata,
      restaurantsMenusV1ItemModifierGroup_universal_d_BulkUpdateModifierGroupsRequest as BulkUpdateModifierGroupsRequest,
      restaurantsMenusV1ItemModifierGroup_universal_d_MaskedModifierGroup as MaskedModifierGroup,
      restaurantsMenusV1ItemModifierGroup_universal_d_BulkUpdateModifierGroupsResponse as BulkUpdateModifierGroupsResponse,
      restaurantsMenusV1ItemModifierGroup_universal_d_BulkUpdateModifierGroupsResult as BulkUpdateModifierGroupsResult,
      restaurantsMenusV1ItemModifierGroup_universal_d_CloneModifierGroupsRequest as CloneModifierGroupsRequest,
      restaurantsMenusV1ItemModifierGroup_universal_d_CloneModifierGroupsResponse as CloneModifierGroupsResponse,
      DomainEvent$5 as DomainEvent,
      DomainEventBodyOneOf$5 as DomainEventBodyOneOf,
      EntityCreatedEvent$5 as EntityCreatedEvent,
      EntityUpdatedEvent$5 as EntityUpdatedEvent,
      EntityDeletedEvent$5 as EntityDeletedEvent,
      ActionEvent$5 as ActionEvent,
      Empty$4 as Empty,
      MessageEnvelope$5 as MessageEnvelope,
      IdentificationData$5 as IdentificationData,
      IdentificationDataIdOneOf$5 as IdentificationDataIdOneOf,
      WebhookIdentityType$5 as WebhookIdentityType,
      restaurantsMenusV1ItemModifierGroup_universal_d_createModifierGroup as createModifierGroup,
      restaurantsMenusV1ItemModifierGroup_universal_d_getModifierGroup as getModifierGroup,
      restaurantsMenusV1ItemModifierGroup_universal_d_listModifierGroups as listModifierGroups,
      restaurantsMenusV1ItemModifierGroup_universal_d_ListModifierGroupsOptions as ListModifierGroupsOptions,
      restaurantsMenusV1ItemModifierGroup_universal_d_queryModifierGroups as queryModifierGroups,
      restaurantsMenusV1ItemModifierGroup_universal_d_ModifierGroupsQueryResult as ModifierGroupsQueryResult,
      restaurantsMenusV1ItemModifierGroup_universal_d_ModifierGroupsQueryBuilder as ModifierGroupsQueryBuilder,
      restaurantsMenusV1ItemModifierGroup_universal_d_updateModifierGroup as updateModifierGroup,
      restaurantsMenusV1ItemModifierGroup_universal_d_UpdateModifierGroup as UpdateModifierGroup,
      restaurantsMenusV1ItemModifierGroup_universal_d_UpdateModifierGroupOptions as UpdateModifierGroupOptions,
      restaurantsMenusV1ItemModifierGroup_universal_d_deleteModifierGroup as deleteModifierGroup,
      restaurantsMenusV1ItemModifierGroup_universal_d_bulkCreateModifierGroups as bulkCreateModifierGroups,
      restaurantsMenusV1ItemModifierGroup_universal_d_BulkCreateModifierGroupsOptions as BulkCreateModifierGroupsOptions,
      restaurantsMenusV1ItemModifierGroup_universal_d_bulkUpdateModifierGroups as bulkUpdateModifierGroups,
      restaurantsMenusV1ItemModifierGroup_universal_d_BulkUpdateModifierGroupsOptions as BulkUpdateModifierGroupsOptions,
      restaurantsMenusV1ItemModifierGroup_universal_d_cloneModifierGroups as cloneModifierGroups,
    };
  }
  
  interface Menu {
      /**
       * Menu ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the menu is updated. To prevent conflicting changes, the current revision must be passed when updating the menu. Ignored when creating a menu.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the menu was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the menu was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Menu name. */
      name?: string;
      /** Menu description. */
      description?: string | null;
      /** Is the menu visible to site visitors. */
      visible?: boolean | null;
      /** Menu section IDs. */
      sectionIds?: string[];
      /** Extended fields. */
      extendedFields?: ExtendedFields$1;
      /** Part of the site URL, that redirects to the menu. For example, in the URL `www.mywebsite.com/our-menus/dinner-menu`, `dinner-menu` is the field value. */
      urlQueryParam?: string | null;
  }
  interface ExtendedFields$1 {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       *
       * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface GetMenuSiteUrlRequest {
      /**
       * Menu ID.
       * @readonly
       */
      _id: string | null;
  }
  interface GetMenuSiteUrlResponse {
      /** Retrieved menuInfo with path url. */
      menuSiteUrl?: MenuSiteUrl;
  }
  interface MenuSiteUrl {
      /** Path URL. */
      path?: string;
  }
  interface InvalidateCache$3 extends InvalidateCacheGetByOneOf$3 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$3;
      /** Invalidate by page id */
      page?: Page$3;
      /** Invalidate by URI path */
      uri?: URI$3;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File$3;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf$3 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$3;
      /** Invalidate by page id */
      page?: Page$3;
      /** Invalidate by URI path */
      uri?: URI$3;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File$3;
  }
  interface App$3 {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page$3 {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI$3 {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface File$3 {
      /** the msid the file is related to */
      metaSiteId?: string;
      /** Invalidate by filename (for media files such as PDFs) */
      fileName?: string;
  }
  interface DeleteOrphanSections {
      /** Menu id */
      menuId?: string;
  }
  interface CreateMenuRequest {
      /** Menu details. */
      menu: Menu;
  }
  interface CreateMenuResponse {
      /** Menu. */
      menu?: Menu;
  }
  interface BulkCreateMenusRequest {
      /** Menu details. */
      menus: Menu[];
      /** Whether to receive the created menus in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateMenusResponse {
      /** Information about the created menus. */
      results?: BulkCreateMenuResult[];
      /** Metadata for the API call. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkCreateMenuResult {
      /** Whether to receive the created menus in the response. */
      menuMetadata?: ItemMetadata$2;
      /** Created menu. */
      menu?: Menu;
  }
  interface ItemMetadata$2 {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError$2;
  }
  interface ApplicationError$2 {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata$2 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface GetMenuRequest {
      /** Menu ID. */
      menuId: string;
  }
  interface GetMenuResponse {
      /** Menu. */
      menu?: Menu;
  }
  interface ListMenusRequest {
      /** Menu IDs. */
      menuIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$3;
  }
  interface CursorPaging$3 {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface ListMenusResponse {
      /** Retrieved menus. */
      menus?: Menu[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$3;
  }
  interface CursorPagingMetadata$3 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$3;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$3 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryMenusRequest {
      /** Query options. */
      query?: CursorQuery$4;
  }
  interface CursorQuery$4 extends CursorQueryPagingMethodOneOf$4 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$3;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$4[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$4 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$3;
  }
  interface Sorting$4 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$4;
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
  enum SortOrder$4 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryMenusResponse {
      /** Retrieved menus. */
      menus?: Menu[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$3;
  }
  interface UpdateMenuRequest {
      /** Menu to update. */
      menu: Menu;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateMenuResponse {
      /** Updated menu. */
      menu?: Menu;
  }
  interface BulkUpdateMenuRequest {
      /** Menus to update. */
      menus: MaskedMenu[];
      /** Whether to receive the entity in the response. */
      returnEntity?: boolean;
  }
  interface MaskedMenu {
      /** Menu to updated. */
      menu?: Menu;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface BulkUpdateMenuResponse {
      /** Results of bulk menu update. */
      results?: BulkMenuResult[];
      /** Metadata for the API call. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkMenuResult {
      /** Metadata for menu update. */
      menuMetadata?: ItemMetadata$2;
      /** Updated menu. Only returned if `returnEntity` is set to `true`. */
      menu?: Menu;
  }
  interface UpdateExtendedFieldsRequest {
      /** ID of the entity to update. */
      _id: string;
      /** Identifier for the app whose extended fields are being updated. */
      namespace: string;
      /** Data to update. Structured according to the [schema](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields#json-schema-for-extended-fields) defined when the extended fields were configured. */
      namespaceData: Record<string, any> | null;
  }
  interface UpdateExtendedFieldsResponse {
      /** Namespace of the app. */
      namespace?: string;
      /** Updated extended fields data. */
      namespaceData?: Record<string, any> | null;
  }
  interface DeleteMenuRequest {
      /** Menu ID. */
      menuId: string;
  }
  interface DeleteMenuResponse {
  }
  interface CloneMenusRequest {
      /** The MetaSiteId to clone from. */
      metaSiteId: string;
  }
  interface CloneMenusResponse {
  }
  interface DomainEvent$4 extends DomainEventBodyOneOf$4 {
      createdEvent?: EntityCreatedEvent$4;
      updatedEvent?: EntityUpdatedEvent$4;
      deletedEvent?: EntityDeletedEvent$4;
      actionEvent?: ActionEvent$4;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf$4 {
      createdEvent?: EntityCreatedEvent$4;
      updatedEvent?: EntityUpdatedEvent$4;
      deletedEvent?: EntityDeletedEvent$4;
      actionEvent?: ActionEvent$4;
  }
  interface EntityCreatedEvent$4 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$4 {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$4 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$4 {
      bodyAsJson?: string;
  }
  interface Empty$3 {
  }
  interface MessageEnvelope$4 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$4;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$4 extends IdentificationDataIdOneOf$4 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$4;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$4 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$4 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Get menu details and path URL by menu ID.
   * @param _id - Menu ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   */
  function getMenuSiteUrl(_id: string | null): Promise<GetMenuSiteUrlResponse>;
  /**
   * > **Note:** The Menus API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Creates a menu.
   *
   * To create multiple menus at once, use [Bulk Create Menus](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/menu/bulk-create-menus).
   * @param menu - Menu details.
   * @public
   * @documentationMaturity preview
   * @requiredField menu
   * @adminMethod
   * @returns Menu.
   */
  function createMenu(menu: Menu): Promise<Menu>;
  /**
   * > **Note:** The Menu API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Creates multiple menus at once.
   * @param menus - Menu details.
   * @public
   * @documentationMaturity preview
   * @requiredField menus
   * @adminMethod
   */
  function bulkCreateMenus(menus: Menu[], options?: BulkCreateMenusOptions): Promise<BulkCreateMenusResponse>;
  interface BulkCreateMenusOptions {
      /** Whether to receive the created menus in the response. */
      returnEntity?: boolean;
  }
  /**
   * > **Note:** The Menu API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieve a menu by ID.
   * @param menuId - Menu ID.
   * @public
   * @documentationMaturity preview
   * @requiredField menuId
   * @returns Menu.
   */
  function getMenu(menuId: string): Promise<Menu>;
  /**
   * > **Note:** The Menu API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves a list of up to 500 menus.
   * @public
   * @documentationMaturity preview
   */
  function listMenus(options?: ListMenusOptions): Promise<ListMenusResponse>;
  interface ListMenusOptions {
      /** Menu IDs. */
      menuIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$3;
  }
  /**
   * > **Note:** The Menu API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves a list of menus given the provided paging, filtering, and sorting. Up to 500 menus can be returned per request.
   *
   * For a detailed list of supported operations, see the [Supported Filters and Sorting](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/menu/supported-filters-and-sorting) article. To learn how to query menus, see [API Query Language](https://dev.wix.com/docs/rest/articles/getting-started/api-query-language).
   * @public
   * @documentationMaturity preview
   */
  function queryMenus(): MenusQueryBuilder;
  interface QueryCursorResult$4 {
      cursors: Cursors$3;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface MenusQueryResult extends QueryCursorResult$4 {
      items: Menu[];
      query: MenusQueryBuilder;
      next: () => Promise<MenusQueryResult>;
      prev: () => Promise<MenusQueryResult>;
  }
  interface MenusQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'urlQueryParam', value: any) => MenusQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'urlQueryParam', value: any) => MenusQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => MenusQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => MenusQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => MenusQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => MenusQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: 'name' | 'description' | 'urlQueryParam', value: string) => MenusQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'name' | 'description' | 'urlQueryParam', value: any) => MenusQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => MenusQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => MenusQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<MenusQueryResult>;
  }
  /**
   * > **Note:** The Menu API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Updates a menu.
   *
   * To update multiple menus at once, use [Bulk Update Menu](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/menu/bulk-update-menu).
   *
   * Each time a menu is updated, revision increments by 1. The existing revision must be included when updating a menu. This ensures you're working with the latest menu information, and it prevents unintended overwrites.
   * @param _id - Menu ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField menu
   * @requiredField menu.revision
   * @adminMethod
   * @returns Updated menu.
   */
  function updateMenu(_id: string | null, menu: UpdateMenu, options?: UpdateMenuOptions): Promise<Menu>;
  interface UpdateMenu {
      /**
       * Menu ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the menu is updated. To prevent conflicting changes, the current revision must be passed when updating the menu. Ignored when creating a menu.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the menu was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the menu was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Menu name. */
      name?: string;
      /** Menu description. */
      description?: string | null;
      /** Is the menu visible to site visitors. */
      visible?: boolean | null;
      /** Menu section IDs. */
      sectionIds?: string[];
      /** Extended fields. */
      extendedFields?: ExtendedFields$1;
      /** Part of the site URL, that redirects to the menu. For example, in the URL `www.mywebsite.com/our-menus/dinner-menu`, `dinner-menu` is the field value. */
      urlQueryParam?: string | null;
  }
  interface UpdateMenuOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * > **Note:** The Menu API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Updates multiple menus at once.
   *
   * Each time a menu is updated, revision increments by 1. The existing revision must be included when updating the menu. This ensures you're working with the latest menu information, and it prevents unintended overwrites.
   * @param menus - Menus to update.
   * @public
   * @documentationMaturity preview
   * @requiredField menus
   * @requiredField menus.menu._id
   * @requiredField menus.menu.revision
   * @adminMethod
   */
  function bulkUpdateMenu(menus: MaskedMenu[], options?: BulkUpdateMenuOptions): Promise<BulkUpdateMenuResponse>;
  interface BulkUpdateMenuOptions {
      /** Whether to receive the entity in the response. */
      returnEntity?: boolean;
  }
  /**
   * > **Note:** The Menu API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Updates only the `extendedFields` field.
   *
   * Updates only the `extendedFields` field.
   * @param _id - ID of the entity to update.
   * @param namespace - Identifier for the app whose extended fields are being updated.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField namespace
   * @requiredField options
   * @requiredField options.namespaceData
   * @adminMethod
   */
  function updateExtendedFields(_id: string, namespace: string, options: UpdateExtendedFieldsOptions): Promise<UpdateExtendedFieldsResponse>;
  interface UpdateExtendedFieldsOptions {
      /** Data to update. Structured according to the [schema](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields#json-schema-for-extended-fields) defined when the extended fields were configured. */
      namespaceData: Record<string, any> | null;
  }
  /**
   * > **Note:** The Menu API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Deletes a menu.
   * @param menuId - Menu ID.
   * @public
   * @documentationMaturity preview
   * @requiredField menuId
   * @adminMethod
   */
  function deleteMenu(menuId: string): Promise<void>;
  /**
   * Clone menus from a different metasite
   * @param metaSiteId - The MetaSiteId to clone from.
   * @internal
   * @documentationMaturity preview
   * @requiredField metaSiteId
   * @adminMethod
   */
  function cloneMenus(metaSiteId: string): Promise<void>;
  
  type restaurantsMenusV1Menu_universal_d_Menu = Menu;
  type restaurantsMenusV1Menu_universal_d_GetMenuSiteUrlRequest = GetMenuSiteUrlRequest;
  type restaurantsMenusV1Menu_universal_d_GetMenuSiteUrlResponse = GetMenuSiteUrlResponse;
  type restaurantsMenusV1Menu_universal_d_MenuSiteUrl = MenuSiteUrl;
  type restaurantsMenusV1Menu_universal_d_DeleteOrphanSections = DeleteOrphanSections;
  type restaurantsMenusV1Menu_universal_d_CreateMenuRequest = CreateMenuRequest;
  type restaurantsMenusV1Menu_universal_d_CreateMenuResponse = CreateMenuResponse;
  type restaurantsMenusV1Menu_universal_d_BulkCreateMenusRequest = BulkCreateMenusRequest;
  type restaurantsMenusV1Menu_universal_d_BulkCreateMenusResponse = BulkCreateMenusResponse;
  type restaurantsMenusV1Menu_universal_d_BulkCreateMenuResult = BulkCreateMenuResult;
  type restaurantsMenusV1Menu_universal_d_GetMenuRequest = GetMenuRequest;
  type restaurantsMenusV1Menu_universal_d_GetMenuResponse = GetMenuResponse;
  type restaurantsMenusV1Menu_universal_d_ListMenusRequest = ListMenusRequest;
  type restaurantsMenusV1Menu_universal_d_ListMenusResponse = ListMenusResponse;
  type restaurantsMenusV1Menu_universal_d_QueryMenusRequest = QueryMenusRequest;
  type restaurantsMenusV1Menu_universal_d_QueryMenusResponse = QueryMenusResponse;
  type restaurantsMenusV1Menu_universal_d_UpdateMenuRequest = UpdateMenuRequest;
  type restaurantsMenusV1Menu_universal_d_UpdateMenuResponse = UpdateMenuResponse;
  type restaurantsMenusV1Menu_universal_d_BulkUpdateMenuRequest = BulkUpdateMenuRequest;
  type restaurantsMenusV1Menu_universal_d_MaskedMenu = MaskedMenu;
  type restaurantsMenusV1Menu_universal_d_BulkUpdateMenuResponse = BulkUpdateMenuResponse;
  type restaurantsMenusV1Menu_universal_d_BulkMenuResult = BulkMenuResult;
  type restaurantsMenusV1Menu_universal_d_UpdateExtendedFieldsRequest = UpdateExtendedFieldsRequest;
  type restaurantsMenusV1Menu_universal_d_UpdateExtendedFieldsResponse = UpdateExtendedFieldsResponse;
  type restaurantsMenusV1Menu_universal_d_DeleteMenuRequest = DeleteMenuRequest;
  type restaurantsMenusV1Menu_universal_d_DeleteMenuResponse = DeleteMenuResponse;
  type restaurantsMenusV1Menu_universal_d_CloneMenusRequest = CloneMenusRequest;
  type restaurantsMenusV1Menu_universal_d_CloneMenusResponse = CloneMenusResponse;
  const restaurantsMenusV1Menu_universal_d_getMenuSiteUrl: typeof getMenuSiteUrl;
  const restaurantsMenusV1Menu_universal_d_createMenu: typeof createMenu;
  const restaurantsMenusV1Menu_universal_d_bulkCreateMenus: typeof bulkCreateMenus;
  type restaurantsMenusV1Menu_universal_d_BulkCreateMenusOptions = BulkCreateMenusOptions;
  const restaurantsMenusV1Menu_universal_d_getMenu: typeof getMenu;
  const restaurantsMenusV1Menu_universal_d_listMenus: typeof listMenus;
  type restaurantsMenusV1Menu_universal_d_ListMenusOptions = ListMenusOptions;
  const restaurantsMenusV1Menu_universal_d_queryMenus: typeof queryMenus;
  type restaurantsMenusV1Menu_universal_d_MenusQueryResult = MenusQueryResult;
  type restaurantsMenusV1Menu_universal_d_MenusQueryBuilder = MenusQueryBuilder;
  const restaurantsMenusV1Menu_universal_d_updateMenu: typeof updateMenu;
  type restaurantsMenusV1Menu_universal_d_UpdateMenu = UpdateMenu;
  type restaurantsMenusV1Menu_universal_d_UpdateMenuOptions = UpdateMenuOptions;
  const restaurantsMenusV1Menu_universal_d_bulkUpdateMenu: typeof bulkUpdateMenu;
  type restaurantsMenusV1Menu_universal_d_BulkUpdateMenuOptions = BulkUpdateMenuOptions;
  const restaurantsMenusV1Menu_universal_d_updateExtendedFields: typeof updateExtendedFields;
  type restaurantsMenusV1Menu_universal_d_UpdateExtendedFieldsOptions = UpdateExtendedFieldsOptions;
  const restaurantsMenusV1Menu_universal_d_deleteMenu: typeof deleteMenu;
  const restaurantsMenusV1Menu_universal_d_cloneMenus: typeof cloneMenus;
  namespace restaurantsMenusV1Menu_universal_d {
    export {
      restaurantsMenusV1Menu_universal_d_Menu as Menu,
      ExtendedFields$1 as ExtendedFields,
      restaurantsMenusV1Menu_universal_d_GetMenuSiteUrlRequest as GetMenuSiteUrlRequest,
      restaurantsMenusV1Menu_universal_d_GetMenuSiteUrlResponse as GetMenuSiteUrlResponse,
      restaurantsMenusV1Menu_universal_d_MenuSiteUrl as MenuSiteUrl,
      InvalidateCache$3 as InvalidateCache,
      InvalidateCacheGetByOneOf$3 as InvalidateCacheGetByOneOf,
      App$3 as App,
      Page$3 as Page,
      URI$3 as URI,
      File$3 as File,
      restaurantsMenusV1Menu_universal_d_DeleteOrphanSections as DeleteOrphanSections,
      restaurantsMenusV1Menu_universal_d_CreateMenuRequest as CreateMenuRequest,
      restaurantsMenusV1Menu_universal_d_CreateMenuResponse as CreateMenuResponse,
      restaurantsMenusV1Menu_universal_d_BulkCreateMenusRequest as BulkCreateMenusRequest,
      restaurantsMenusV1Menu_universal_d_BulkCreateMenusResponse as BulkCreateMenusResponse,
      restaurantsMenusV1Menu_universal_d_BulkCreateMenuResult as BulkCreateMenuResult,
      ItemMetadata$2 as ItemMetadata,
      ApplicationError$2 as ApplicationError,
      BulkActionMetadata$2 as BulkActionMetadata,
      restaurantsMenusV1Menu_universal_d_GetMenuRequest as GetMenuRequest,
      restaurantsMenusV1Menu_universal_d_GetMenuResponse as GetMenuResponse,
      restaurantsMenusV1Menu_universal_d_ListMenusRequest as ListMenusRequest,
      CursorPaging$3 as CursorPaging,
      restaurantsMenusV1Menu_universal_d_ListMenusResponse as ListMenusResponse,
      CursorPagingMetadata$3 as CursorPagingMetadata,
      Cursors$3 as Cursors,
      restaurantsMenusV1Menu_universal_d_QueryMenusRequest as QueryMenusRequest,
      CursorQuery$4 as CursorQuery,
      CursorQueryPagingMethodOneOf$4 as CursorQueryPagingMethodOneOf,
      Sorting$4 as Sorting,
      SortOrder$4 as SortOrder,
      restaurantsMenusV1Menu_universal_d_QueryMenusResponse as QueryMenusResponse,
      restaurantsMenusV1Menu_universal_d_UpdateMenuRequest as UpdateMenuRequest,
      restaurantsMenusV1Menu_universal_d_UpdateMenuResponse as UpdateMenuResponse,
      restaurantsMenusV1Menu_universal_d_BulkUpdateMenuRequest as BulkUpdateMenuRequest,
      restaurantsMenusV1Menu_universal_d_MaskedMenu as MaskedMenu,
      restaurantsMenusV1Menu_universal_d_BulkUpdateMenuResponse as BulkUpdateMenuResponse,
      restaurantsMenusV1Menu_universal_d_BulkMenuResult as BulkMenuResult,
      restaurantsMenusV1Menu_universal_d_UpdateExtendedFieldsRequest as UpdateExtendedFieldsRequest,
      restaurantsMenusV1Menu_universal_d_UpdateExtendedFieldsResponse as UpdateExtendedFieldsResponse,
      restaurantsMenusV1Menu_universal_d_DeleteMenuRequest as DeleteMenuRequest,
      restaurantsMenusV1Menu_universal_d_DeleteMenuResponse as DeleteMenuResponse,
      restaurantsMenusV1Menu_universal_d_CloneMenusRequest as CloneMenusRequest,
      restaurantsMenusV1Menu_universal_d_CloneMenusResponse as CloneMenusResponse,
      DomainEvent$4 as DomainEvent,
      DomainEventBodyOneOf$4 as DomainEventBodyOneOf,
      EntityCreatedEvent$4 as EntityCreatedEvent,
      EntityUpdatedEvent$4 as EntityUpdatedEvent,
      EntityDeletedEvent$4 as EntityDeletedEvent,
      ActionEvent$4 as ActionEvent,
      Empty$3 as Empty,
      MessageEnvelope$4 as MessageEnvelope,
      IdentificationData$4 as IdentificationData,
      IdentificationDataIdOneOf$4 as IdentificationDataIdOneOf,
      WebhookIdentityType$4 as WebhookIdentityType,
      restaurantsMenusV1Menu_universal_d_getMenuSiteUrl as getMenuSiteUrl,
      restaurantsMenusV1Menu_universal_d_createMenu as createMenu,
      restaurantsMenusV1Menu_universal_d_bulkCreateMenus as bulkCreateMenus,
      restaurantsMenusV1Menu_universal_d_BulkCreateMenusOptions as BulkCreateMenusOptions,
      restaurantsMenusV1Menu_universal_d_getMenu as getMenu,
      restaurantsMenusV1Menu_universal_d_listMenus as listMenus,
      restaurantsMenusV1Menu_universal_d_ListMenusOptions as ListMenusOptions,
      restaurantsMenusV1Menu_universal_d_queryMenus as queryMenus,
      restaurantsMenusV1Menu_universal_d_MenusQueryResult as MenusQueryResult,
      restaurantsMenusV1Menu_universal_d_MenusQueryBuilder as MenusQueryBuilder,
      restaurantsMenusV1Menu_universal_d_updateMenu as updateMenu,
      restaurantsMenusV1Menu_universal_d_UpdateMenu as UpdateMenu,
      restaurantsMenusV1Menu_universal_d_UpdateMenuOptions as UpdateMenuOptions,
      restaurantsMenusV1Menu_universal_d_bulkUpdateMenu as bulkUpdateMenu,
      restaurantsMenusV1Menu_universal_d_BulkUpdateMenuOptions as BulkUpdateMenuOptions,
      restaurantsMenusV1Menu_universal_d_updateExtendedFields as updateExtendedFields,
      restaurantsMenusV1Menu_universal_d_UpdateExtendedFieldsOptions as UpdateExtendedFieldsOptions,
      restaurantsMenusV1Menu_universal_d_deleteMenu as deleteMenu,
      restaurantsMenusV1Menu_universal_d_cloneMenus as cloneMenus,
    };
  }
  
  interface Section {
      /**
       * Section ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the section is updated. To prevent conflicting changes, the current revision must be passed when updating the section. Ignored when creating a section.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the section was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the section was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Section name. */
      name?: string;
      /** Section description. */
      description?: string | null;
      /** Main section image. */
      image?: string;
      /** Additional section images. */
      additionalImages?: string[];
      /** Item IDs. */
      itemIds?: string[];
      /** Extended fields. */
      extendedFields?: ExtendedFields;
  }
  interface ExtendedFields {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       *
       * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface InvalidateCache$2 extends InvalidateCacheGetByOneOf$2 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$2;
      /** Invalidate by page id */
      page?: Page$2;
      /** Invalidate by URI path */
      uri?: URI$2;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File$2;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf$2 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$2;
      /** Invalidate by page id */
      page?: Page$2;
      /** Invalidate by URI path */
      uri?: URI$2;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File$2;
  }
  interface App$2 {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page$2 {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI$2 {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface File$2 {
      /** the msid the file is related to */
      metaSiteId?: string;
      /** Invalidate by filename (for media files such as PDFs) */
      fileName?: string;
  }
  interface CreateSectionRequest {
      /** Section details. */
      section: Section;
  }
  interface CreateSectionResponse {
      /** Section. */
      section?: Section;
  }
  interface BulkCreateSectionsRequest {
      /** Sections details. */
      sections: Section[];
      /** Whether to receive the created sections in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateSectionsResponse {
      /** Information about the created sections. */
      results?: BulkCreateSectionResult[];
      /** Metadata for the API call. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkCreateSectionResult {
      /** Metadata for created sections. */
      itemMetadata?: ItemMetadata$1;
      /** Created section. Only returned if `returnEntity` is set to `true`. */
      item?: Section;
  }
  interface ItemMetadata$1 {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError$1;
  }
  interface ApplicationError$1 {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata$1 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface GetSectionRequest {
      /** Section ID. */
      sectionId: string;
  }
  interface GetSectionResponse {
      /** Section. */
      section?: Section;
  }
  interface ListSectionsRequest {
      /** Section IDs. */
      sectionIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$2;
  }
  interface CursorPaging$2 {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface ListSectionsResponse {
      /** Retrieved sections. */
      sections?: Section[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$2;
  }
  interface CursorPagingMetadata$2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$2;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$2 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QuerySectionsRequest {
      /** Query options. */
      query?: CursorQuery$3;
  }
  interface CursorQuery$3 extends CursorQueryPagingMethodOneOf$3 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$3[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$3 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
  }
  interface Sorting$3 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$3;
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
  enum SortOrder$3 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QuerySectionsResponse {
      /** Retrieved sections. */
      sections?: Section[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$2;
  }
  interface UpdateSectionRequest {
      /** Section update. */
      section: Section;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateSectionResponse {
      /** Updated section. */
      section?: Section;
  }
  interface BulkUpdateSectionRequest {
      /** Sections to update. */
      sections: MaskedSection[];
      /** Whether to receive the updated sections in the response. */
      returnEntity?: boolean;
  }
  interface MaskedSection {
      /** Section update. */
      section?: Section;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface BulkUpdateSectionResponse {
      /** Information about the updated sections. */
      results?: BulkSectionResult[];
      /** Metadata for the API call. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkSectionResult {
      /** Whether to receive the updated sections in the response. */
      sectionMetadata?: ItemMetadata$1;
      /** Updated section. Only returned if `returnEntity` is set to `true`. */
      section?: Section;
  }
  interface DeleteSectionRequest {
      /** Section ID. */
      sectionId: string;
  }
  interface DeleteSectionResponse {
  }
  interface BulkDeleteSectionsRequest {
      /** Section IDs. */
      ids: string[];
  }
  interface BulkDeleteSectionsResponse {
      /** Information about the deleted sections. */
      results?: BulkDeleteSectionResult[];
      /** Metadata for the API call. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkDeleteSectionResult {
      /** Metadata for deleted sections. */
      itemMetadata?: ItemMetadata$1;
  }
  interface CloneSectionsRequest {
      /** The MetaSiteId to clone from. */
      metaSiteId: string;
  }
  interface CloneSectionsResponse {
  }
  interface DomainEvent$3 extends DomainEventBodyOneOf$3 {
      createdEvent?: EntityCreatedEvent$3;
      updatedEvent?: EntityUpdatedEvent$3;
      deletedEvent?: EntityDeletedEvent$3;
      actionEvent?: ActionEvent$3;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf$3 {
      createdEvent?: EntityCreatedEvent$3;
      updatedEvent?: EntityUpdatedEvent$3;
      deletedEvent?: EntityDeletedEvent$3;
      actionEvent?: ActionEvent$3;
  }
  interface EntityCreatedEvent$3 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$3 {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$3 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$3 {
      bodyAsJson?: string;
  }
  interface Empty$2 {
  }
  interface MessageEnvelope$3 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$3;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$3 extends IdentificationDataIdOneOf$3 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$3;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$3 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$3 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * > **Note:** The Sections API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Creates a section.
   *
   * To create multiple sections at once, use [Bulk Create Sections](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/section/bulk-create-sections).
   * @param section - Section details.
   * @public
   * @documentationMaturity preview
   * @requiredField section
   * @adminMethod
   * @returns Section.
   */
  function createSection(section: Section): Promise<Section>;
  /**
   * > **Note:** The Section API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Create multiple sections at once.
   * @param sections - Sections details.
   * @public
   * @documentationMaturity preview
   * @requiredField sections
   * @adminMethod
   */
  function bulkCreateSections(sections: Section[], options?: BulkCreateSectionsOptions): Promise<BulkCreateSectionsResponse>;
  interface BulkCreateSectionsOptions {
      /** Whether to receive the created sections in the response. */
      returnEntity?: boolean;
  }
  /**
   * > **Note:** The Section API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves a section by ID.
   * @param sectionId - Section ID.
   * @public
   * @documentationMaturity preview
   * @requiredField sectionId
   * @returns Section.
   */
  function getSection(sectionId: string): Promise<Section>;
  /**
   * > **Note:** The Section API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves a list of up to 500 sections.
   * @public
   * @documentationMaturity preview
   */
  function listSections(options?: ListSectionsOptions): Promise<ListSectionsResponse>;
  interface ListSectionsOptions {
      /** Section IDs. */
      sectionIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$2;
  }
  /**
   * > **Note:** The Section API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Retrieves a list of sections given the provided paging, filtering, and sorting. Up to 500 sections can be returned per request.
   *
   * For a detailed list of supported operations, see the [Supported Filters and Sorting](https://dev.wix.com/docs/rest/business-solutions/restaurants/menus/section/supported-filters-and-sorting) article. To learn how to query sections, see [API Query Language](https://dev.wix.com/docs/rest/articles/getting-started/api-query-language).
   * @public
   * @documentationMaturity preview
   */
  function querySections(): SectionsQueryBuilder;
  interface QueryCursorResult$3 {
      cursors: Cursors$2;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface SectionsQueryResult extends QueryCursorResult$3 {
      items: Section[];
      query: SectionsQueryBuilder;
      next: () => Promise<SectionsQueryResult>;
      prev: () => Promise<SectionsQueryResult>;
  }
  interface SectionsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'description', value: any) => SectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'description', value: any) => SectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => SectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => SectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => SectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => SectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: 'name' | 'description', value: string) => SectionsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'name' | 'description', value: any) => SectionsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: 'image' | 'itemIds', value: boolean) => SectionsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => SectionsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => SectionsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<SectionsQueryResult>;
  }
  /**
   * > **Note:** The Section API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Updates a section.
   *
   * Each time a section is updated, revision increments by 1. The existing revision must be included when updating a section. This ensures you're working with the latest section information, and it prevents unintended overwrites.
   * @param _id - Section ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField section
   * @requiredField section.revision
   * @adminMethod
   * @returns Updated section.
   */
  function updateSection(_id: string | null, section: UpdateSection, options?: UpdateSectionOptions): Promise<Section>;
  interface UpdateSection {
      /**
       * Section ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the section is updated. To prevent conflicting changes, the current revision must be passed when updating the section. Ignored when creating a section.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the section was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the section was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Section name. */
      name?: string;
      /** Section description. */
      description?: string | null;
      /** Main section image. */
      image?: string;
      /** Additional section images. */
      additionalImages?: string[];
      /** Item IDs. */
      itemIds?: string[];
      /** Extended fields. */
      extendedFields?: ExtendedFields;
  }
  interface UpdateSectionOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * > **Note:** The Section API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Updates multiple sections at once.
   *
   * Each time a section is updated, revision increments by 1. The existing revision must be included when updating a section. This ensures you're working with the latest section information, and it prevents unintended overwrites.
   * @param sections - Sections to update.
   * @public
   * @documentationMaturity preview
   * @requiredField sections
   * @requiredField sections.section._id
   * @requiredField sections.section.revision
   * @adminMethod
   */
  function bulkUpdateSection(sections: MaskedSection[], options?: BulkUpdateSectionOptions): Promise<BulkUpdateSectionResponse>;
  interface BulkUpdateSectionOptions {
      /** Whether to receive the updated sections in the response. */
      returnEntity?: boolean;
  }
  /**
   * > **Note:** The Section API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Deletes a section.
   * @param sectionId - Section ID.
   * @public
   * @documentationMaturity preview
   * @requiredField sectionId
   * @adminMethod
   */
  function deleteSection(sectionId: string): Promise<void>;
  /**
   * > **Note:** The Section API only works with the Wix Restaurants Menus (New) app. Make sure you have installed this app from [Wix App Market](https://www.wix.com/app-market/wix-restaurants-menus-new).
   *
   * Deletes multiple sections at once.
   * @param ids - Section IDs.
   * @public
   * @documentationMaturity preview
   * @requiredField ids
   * @adminMethod
   */
  function bulkDeleteSections(ids: string[]): Promise<BulkDeleteSectionsResponse>;
  /**
   * Clone sections from a different metasite
   * @param metaSiteId - The MetaSiteId to clone from.
   * @internal
   * @documentationMaturity preview
   * @requiredField metaSiteId
   * @adminMethod
   */
  function cloneSections(metaSiteId: string): Promise<void>;
  
  type restaurantsMenusV1Section_universal_d_Section = Section;
  type restaurantsMenusV1Section_universal_d_ExtendedFields = ExtendedFields;
  type restaurantsMenusV1Section_universal_d_CreateSectionRequest = CreateSectionRequest;
  type restaurantsMenusV1Section_universal_d_CreateSectionResponse = CreateSectionResponse;
  type restaurantsMenusV1Section_universal_d_BulkCreateSectionsRequest = BulkCreateSectionsRequest;
  type restaurantsMenusV1Section_universal_d_BulkCreateSectionsResponse = BulkCreateSectionsResponse;
  type restaurantsMenusV1Section_universal_d_BulkCreateSectionResult = BulkCreateSectionResult;
  type restaurantsMenusV1Section_universal_d_GetSectionRequest = GetSectionRequest;
  type restaurantsMenusV1Section_universal_d_GetSectionResponse = GetSectionResponse;
  type restaurantsMenusV1Section_universal_d_ListSectionsRequest = ListSectionsRequest;
  type restaurantsMenusV1Section_universal_d_ListSectionsResponse = ListSectionsResponse;
  type restaurantsMenusV1Section_universal_d_QuerySectionsRequest = QuerySectionsRequest;
  type restaurantsMenusV1Section_universal_d_QuerySectionsResponse = QuerySectionsResponse;
  type restaurantsMenusV1Section_universal_d_UpdateSectionRequest = UpdateSectionRequest;
  type restaurantsMenusV1Section_universal_d_UpdateSectionResponse = UpdateSectionResponse;
  type restaurantsMenusV1Section_universal_d_BulkUpdateSectionRequest = BulkUpdateSectionRequest;
  type restaurantsMenusV1Section_universal_d_MaskedSection = MaskedSection;
  type restaurantsMenusV1Section_universal_d_BulkUpdateSectionResponse = BulkUpdateSectionResponse;
  type restaurantsMenusV1Section_universal_d_BulkSectionResult = BulkSectionResult;
  type restaurantsMenusV1Section_universal_d_DeleteSectionRequest = DeleteSectionRequest;
  type restaurantsMenusV1Section_universal_d_DeleteSectionResponse = DeleteSectionResponse;
  type restaurantsMenusV1Section_universal_d_BulkDeleteSectionsRequest = BulkDeleteSectionsRequest;
  type restaurantsMenusV1Section_universal_d_BulkDeleteSectionsResponse = BulkDeleteSectionsResponse;
  type restaurantsMenusV1Section_universal_d_BulkDeleteSectionResult = BulkDeleteSectionResult;
  type restaurantsMenusV1Section_universal_d_CloneSectionsRequest = CloneSectionsRequest;
  type restaurantsMenusV1Section_universal_d_CloneSectionsResponse = CloneSectionsResponse;
  const restaurantsMenusV1Section_universal_d_createSection: typeof createSection;
  const restaurantsMenusV1Section_universal_d_bulkCreateSections: typeof bulkCreateSections;
  type restaurantsMenusV1Section_universal_d_BulkCreateSectionsOptions = BulkCreateSectionsOptions;
  const restaurantsMenusV1Section_universal_d_getSection: typeof getSection;
  const restaurantsMenusV1Section_universal_d_listSections: typeof listSections;
  type restaurantsMenusV1Section_universal_d_ListSectionsOptions = ListSectionsOptions;
  const restaurantsMenusV1Section_universal_d_querySections: typeof querySections;
  type restaurantsMenusV1Section_universal_d_SectionsQueryResult = SectionsQueryResult;
  type restaurantsMenusV1Section_universal_d_SectionsQueryBuilder = SectionsQueryBuilder;
  const restaurantsMenusV1Section_universal_d_updateSection: typeof updateSection;
  type restaurantsMenusV1Section_universal_d_UpdateSection = UpdateSection;
  type restaurantsMenusV1Section_universal_d_UpdateSectionOptions = UpdateSectionOptions;
  const restaurantsMenusV1Section_universal_d_bulkUpdateSection: typeof bulkUpdateSection;
  type restaurantsMenusV1Section_universal_d_BulkUpdateSectionOptions = BulkUpdateSectionOptions;
  const restaurantsMenusV1Section_universal_d_deleteSection: typeof deleteSection;
  const restaurantsMenusV1Section_universal_d_bulkDeleteSections: typeof bulkDeleteSections;
  const restaurantsMenusV1Section_universal_d_cloneSections: typeof cloneSections;
  namespace restaurantsMenusV1Section_universal_d {
    export {
      restaurantsMenusV1Section_universal_d_Section as Section,
      restaurantsMenusV1Section_universal_d_ExtendedFields as ExtendedFields,
      InvalidateCache$2 as InvalidateCache,
      InvalidateCacheGetByOneOf$2 as InvalidateCacheGetByOneOf,
      App$2 as App,
      Page$2 as Page,
      URI$2 as URI,
      File$2 as File,
      restaurantsMenusV1Section_universal_d_CreateSectionRequest as CreateSectionRequest,
      restaurantsMenusV1Section_universal_d_CreateSectionResponse as CreateSectionResponse,
      restaurantsMenusV1Section_universal_d_BulkCreateSectionsRequest as BulkCreateSectionsRequest,
      restaurantsMenusV1Section_universal_d_BulkCreateSectionsResponse as BulkCreateSectionsResponse,
      restaurantsMenusV1Section_universal_d_BulkCreateSectionResult as BulkCreateSectionResult,
      ItemMetadata$1 as ItemMetadata,
      ApplicationError$1 as ApplicationError,
      BulkActionMetadata$1 as BulkActionMetadata,
      restaurantsMenusV1Section_universal_d_GetSectionRequest as GetSectionRequest,
      restaurantsMenusV1Section_universal_d_GetSectionResponse as GetSectionResponse,
      restaurantsMenusV1Section_universal_d_ListSectionsRequest as ListSectionsRequest,
      CursorPaging$2 as CursorPaging,
      restaurantsMenusV1Section_universal_d_ListSectionsResponse as ListSectionsResponse,
      CursorPagingMetadata$2 as CursorPagingMetadata,
      Cursors$2 as Cursors,
      restaurantsMenusV1Section_universal_d_QuerySectionsRequest as QuerySectionsRequest,
      CursorQuery$3 as CursorQuery,
      CursorQueryPagingMethodOneOf$3 as CursorQueryPagingMethodOneOf,
      Sorting$3 as Sorting,
      SortOrder$3 as SortOrder,
      restaurantsMenusV1Section_universal_d_QuerySectionsResponse as QuerySectionsResponse,
      restaurantsMenusV1Section_universal_d_UpdateSectionRequest as UpdateSectionRequest,
      restaurantsMenusV1Section_universal_d_UpdateSectionResponse as UpdateSectionResponse,
      restaurantsMenusV1Section_universal_d_BulkUpdateSectionRequest as BulkUpdateSectionRequest,
      restaurantsMenusV1Section_universal_d_MaskedSection as MaskedSection,
      restaurantsMenusV1Section_universal_d_BulkUpdateSectionResponse as BulkUpdateSectionResponse,
      restaurantsMenusV1Section_universal_d_BulkSectionResult as BulkSectionResult,
      restaurantsMenusV1Section_universal_d_DeleteSectionRequest as DeleteSectionRequest,
      restaurantsMenusV1Section_universal_d_DeleteSectionResponse as DeleteSectionResponse,
      restaurantsMenusV1Section_universal_d_BulkDeleteSectionsRequest as BulkDeleteSectionsRequest,
      restaurantsMenusV1Section_universal_d_BulkDeleteSectionsResponse as BulkDeleteSectionsResponse,
      restaurantsMenusV1Section_universal_d_BulkDeleteSectionResult as BulkDeleteSectionResult,
      restaurantsMenusV1Section_universal_d_CloneSectionsRequest as CloneSectionsRequest,
      restaurantsMenusV1Section_universal_d_CloneSectionsResponse as CloneSectionsResponse,
      DomainEvent$3 as DomainEvent,
      DomainEventBodyOneOf$3 as DomainEventBodyOneOf,
      EntityCreatedEvent$3 as EntityCreatedEvent,
      EntityUpdatedEvent$3 as EntityUpdatedEvent,
      EntityDeletedEvent$3 as EntityDeletedEvent,
      ActionEvent$3 as ActionEvent,
      Empty$2 as Empty,
      MessageEnvelope$3 as MessageEnvelope,
      IdentificationData$3 as IdentificationData,
      IdentificationDataIdOneOf$3 as IdentificationDataIdOneOf,
      WebhookIdentityType$3 as WebhookIdentityType,
      restaurantsMenusV1Section_universal_d_createSection as createSection,
      restaurantsMenusV1Section_universal_d_bulkCreateSections as bulkCreateSections,
      restaurantsMenusV1Section_universal_d_BulkCreateSectionsOptions as BulkCreateSectionsOptions,
      restaurantsMenusV1Section_universal_d_getSection as getSection,
      restaurantsMenusV1Section_universal_d_listSections as listSections,
      restaurantsMenusV1Section_universal_d_ListSectionsOptions as ListSectionsOptions,
      restaurantsMenusV1Section_universal_d_querySections as querySections,
      restaurantsMenusV1Section_universal_d_SectionsQueryResult as SectionsQueryResult,
      restaurantsMenusV1Section_universal_d_SectionsQueryBuilder as SectionsQueryBuilder,
      restaurantsMenusV1Section_universal_d_updateSection as updateSection,
      restaurantsMenusV1Section_universal_d_UpdateSection as UpdateSection,
      restaurantsMenusV1Section_universal_d_UpdateSectionOptions as UpdateSectionOptions,
      restaurantsMenusV1Section_universal_d_bulkUpdateSection as bulkUpdateSection,
      restaurantsMenusV1Section_universal_d_BulkUpdateSectionOptions as BulkUpdateSectionOptions,
      restaurantsMenusV1Section_universal_d_deleteSection as deleteSection,
      restaurantsMenusV1Section_universal_d_bulkDeleteSections as bulkDeleteSections,
      restaurantsMenusV1Section_universal_d_cloneSections as cloneSections,
    };
  }
  
  /**
   * An operation is a service a restaurant offers that includes various aspects of its online ordering.
   * You can define default fulfillments, service fees, and scheduling requirements for each operation.
   */
  interface Operation$1 extends OperationOnlineOrderingStatusOptionsOneOf {
      /** Options for online ordering status. Required when `onlineOrderingStatus` is `PAUSED_UNTIL`. */
      pausedUntilOptions?: OnlineOrderingPausedUntilOptions;
      /**
       * Operation ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number. Increments by 1 each time the operation is updated.
       * To prevent conflicting changes,
       * the existing `revision` must be passed when updating an operation.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the operation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the operation was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Operation name. */
      name?: string | null;
      /**
       * Currently INTERNAL. Whether the operation is enabled.
       * @internal
       */
      enabled?: boolean | null;
      /**
       * The scheduling data for this operation.
       * Scheduling specifies when an order can be placed for.
       * @internal
       */
      scheduling?: Scheduling;
      /**
       * INTERNAL. Profile ID associated with the operation.
       * @internal
       */
      profileId?: string | null;
      /**
       * Whether the operation is the default operation. <br />
       * Default: `false`.
       */
      default?: boolean | null;
      /** IDs of the [fulfillment methods](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/fulfillment-methods/introduction) associated with the operation. */
      fulfillmentIds?: string[] | null;
      /**
       * IDs of the [service fee](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/service-fees/introduction) rules associated with the operation.
       * @internal
       */
      serviceFeeRulesIds?: string[] | null;
      /**
       * Online ordering status of the operation. <br />
       * - `ENABLED`: Operation currently accepts online orders. <br />
       * - `DISABLED`: Operation currently does not accept online orders. <br />
       * - `PAUSED_UNTIL`: Operation currently does not accept online orders, but will accept online orders from a specifed time and date. When applied, `pausedUntilOptions` is a required field. <br />
       * - `UNDEFINED_ONLINE_ORDERING_STATUS`: Online ordering status is not defined.
       */
      onlineOrderingStatus?: OnlineOrderingStatusType;
      /** IDs of the [service fee](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/service-fees/introduction) rules associated with the operation. */
      serviceFeeRuleIds?: string[] | null;
      /** Default fulfillment type of the operation. */
      defaultFulfillmentType?: FulfillmentType;
      /** Information about when an order can be placed for. */
      orderScheduling?: OrderScheduling;
  }
  /** @oneof */
  interface OperationOnlineOrderingStatusOptionsOneOf {
      /** Options for online ordering status. Required when `onlineOrderingStatus` is `PAUSED_UNTIL`. */
      pausedUntilOptions?: OnlineOrderingPausedUntilOptions;
  }
  /** Information about when an order can be placed for. */
  interface Scheduling extends SchedulingSchedulingOptionsOneOf {
      /** Options for scheduling. Required when `type` is `ASAP`. */
      asapOptions?: AsapScheduling;
      /** Options for scheduling. Required when `type` is `REQUIRED`. */
      preorderOptions?: PreorderScheduling;
      /**
       * Scheduling type. <br />
       * - When `ASAP`, `asapOptions` is a required field.
       * - When `PREORDER`, `preorderOptions` is a required field.
       */
      type?: SchedulingType;
  }
  /** @oneof */
  interface SchedulingSchedulingOptionsOneOf {
      /** Options for scheduling. Required when `type` is `ASAP`. */
      asapOptions?: AsapScheduling;
      /** Options for scheduling. Required when `type` is `REQUIRED`. */
      preorderOptions?: PreorderScheduling;
  }
  /** Scheduling type enum. */
  enum SchedulingType {
      /** Unknown scheduling type. */
      UNKNOWN_SCHEDULING = "UNKNOWN_SCHEDULING",
      /** Orders can be scheduled for the future and to be handled immediately. */
      ASAP = "ASAP",
      /** Orders can be scheduled only for the future. */
      PREORDER = "PREORDER"
  }
  /** Options for scheduling. Required if `type` is `ASAP`. */
  interface AsapScheduling extends AsapSchedulingPreparationTimeOneOf, AsapSchedulingAsapPreorderOneOf {
      /** Options for preparation time. Required when `type` is `MAX_TIME`. */
      maxOptions?: TimeDuration;
      /** Options for preparation time. Required when `type` is `TIME_RANGE`. */
      rangeOptions?: TimeDurationRange;
      /** Information for when orders must be made a set number of business days in advance. */
      businessDaysPreorderOptions?: BusinessDaysPreorder;
      /** How to define the time needed to prepare an order. */
      type?: PreparationTimeType;
      /** Indication of whether it is possible to place an order for a later time on the same day. */
      allowSameDayPreorder?: boolean | null;
      /** The type of preorder allowed for the ASAP scheduling. */
      asapPreorderType?: AsapPreorderType;
  }
  /** @oneof */
  interface AsapSchedulingPreparationTimeOneOf {
      /** Options for preparation time. Required when `type` is `MAX_TIME`. */
      maxOptions?: TimeDuration;
      /** Options for preparation time. Required when `type` is `TIME_RANGE`. */
      rangeOptions?: TimeDurationRange;
  }
  /** @oneof */
  interface AsapSchedulingAsapPreorderOneOf {
      /** Information for when orders must be made a set number of business days in advance. */
      businessDaysPreorderOptions?: BusinessDaysPreorder;
  }
  /** Preparation time type enum. */
  enum PreparationTimeType {
      /** Unknown preparation time type. */
      UNKNOWN_PREPARATION_TIME = "UNKNOWN_PREPARATION_TIME",
      /** Preparation time that is bounded by a maximum time. */
      MAX = "MAX",
      /** Preparation time that is bounded by a range of times. */
      RANGE = "RANGE"
  }
  /** Time duration. */
  interface TimeDuration {
      /** Unit of time for the duration. */
      timeUnit?: TimeUnit;
      /** Duration value. Unit of time specified in `timeUnit`. */
      duration?: number | null;
  }
  /** Time unit enum. */
  enum TimeUnit {
      /** Unknown time unit. */
      UNKNOWN_TIME_UNIT = "UNKNOWN_TIME_UNIT",
      /** Minutes time unit. */
      MINUTES = "MINUTES",
      /** Hours time unit. */
      HOURS = "HOURS",
      /** Days time unit. */
      DAYS = "DAYS"
  }
  /** Time range for preparation. */
  interface TimeDurationRange {
      /** Time unit for the time range. */
      timeUnit?: TimeUnit;
      /**
       * Minimum duration value. Unit of time specified in `timeUnit`.
       * @internal
       */
      rangeMinimumDuration?: number | null;
      /**
       * Maximum duration value. Unit of time specified in `timeUnit`.
       * @internal
       */
      rangeMaximumDuration?: number | null;
      /** Minimum duration value. Unit of time specified in `timeUnit`. */
      minDuration?: number | null;
      /** Maximum duration value. Unit of time specified in `timeUnit`. */
      maxDuration?: number | null;
  }
  /** Asap preorder type enum. */
  enum AsapPreorderType {
      /** Unknown ASAP preorder type. */
      UNKNOWN_ASAP_PREORDER = "UNKNOWN_ASAP_PREORDER",
      /** Doesn't allow preorder. */
      NO_PREORDER = "NO_PREORDER",
      /** Allows preorder for a maximum specified number of business days in advance. */
      BUSINESS_DAYS_PREORDER = "BUSINESS_DAYS_PREORDER"
  }
  /** Information for when orders must be made a set number of business days in advance. */
  interface BusinessDaysPreorder {
      /**
       * Maximum number of business days an order can be scheduled in advance.
       *
       * When `0`, an order can be scheduled only until the end of the current business day.
       * For any other value, the order can be scheduled for the end of the business day in that many days.
       * For example, `5` means the order can be scheduled for any time before the end of the 5th business day from today (where today is "day 0").
       */
      businessDays?: number | null;
  }
  /** Information about preorders. */
  interface PreorderScheduling {
      method?: PreorderMethod;
      /**
       * Configuration of the fulfillment times. <br />
       * Currenly, only `TIME_WINDOWS` is supported.
       * @internal
       */
      fulfillmentTimesDisplayConfig?: FulfillmentTimesDisplayConfig;
      /**
       * Configuration of the fulfillment times. <br />
       * Currenly, only `TIME_WINDOWS` is supported.
       */
      fulfillmentTimesDisplay?: FulfillmentTimesDisplayConfig;
  }
  /** Method for `PREORDER` scheduling type. */
  interface PreorderMethod extends PreorderMethodMethodOptionsOneOf {
      /** Options for method. Required when `type` is `TIME_BOUNDED`. */
      timeBoundedOptions?: TimeBounded;
      /** Options for method. Required when `type` is `WEEKLY_SCHEDULE`. */
      weeklyScheduleOptions?: WeeklySchedule;
      /**
       * Type of time frame for how long in advance preorders can be made. <br />
       * - When `TIME_BOUNDED`, `timeBoundedOptions` is a required field.
       * - When `WEEKLY_SCHEDULE`, `weeklyScheduleOptions` is a required field.
       */
      type?: MethodType;
  }
  /** @oneof */
  interface PreorderMethodMethodOptionsOneOf {
      /** Options for method. Required when `type` is `TIME_BOUNDED`. */
      timeBoundedOptions?: TimeBounded;
      /** Options for method. Required when `type` is `WEEKLY_SCHEDULE`. */
      weeklyScheduleOptions?: WeeklySchedule;
  }
  /** Day of the week and time of the day. */
  interface DayAndTime {
      /** Day of the week. */
      dayOfWeek?: EntitiesDayOfWeek$1;
      /** Time of the day. */
      timeOfDay?: TimeOfDay$1;
  }
  enum EntitiesDayOfWeek$1 {
      /** Monday. */
      MON = "MON",
      /** Tuesday. */
      TUE = "TUE",
      /** Wednesday. */
      WED = "WED",
      /** Thursday. */
      THU = "THU",
      /** Friday. */
      FRI = "FRI",
      /** Saturday. */
      SAT = "SAT",
      /** Sunday. */
      SUN = "SUN"
  }
  interface TimeOfDay$1 {
      /**
       * Hours. <br />
       * Min: `0`. <br />
       * Max: `23`.
       */
      hours?: number;
      /**
       * Minutes. <br />
       * Min: `0`. <br />
       * Max: `23`.
       */
      minutes?: number;
  }
  /** Preorder method type enum. */
  enum MethodType {
      /** Unknown preorder method type. */
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      /** Preorder time has a minimum and a maximum. */
      TIME_BOUNDED = "TIME_BOUNDED",
      /** Preorder have a weekly schedule with a weekly a cutoff time. */
      WEEKLY_SCHEDULE = "WEEKLY_SCHEDULE"
  }
  /** Information about the time range when preorders are time bounded. */
  interface TimeBounded {
      /**
       * Minimum time required to schedule the order.
       * @internal
       */
      minimumInAdvanceTime?: TimeDuration;
      /**
       * Maximum time allowed to schedule the order.
       * @internal
       */
      maximumInAdvanceTime?: TimeDuration;
      /** Minimum time required to schedule the order. */
      minTimeInAdvance?: TimeDuration;
      /** Maximum time allowed to schedule the order. */
      maxTimeInAdvance?: TimeDuration;
  }
  /** Options for method. Required when `type` is `WEEKLY_SCHEDULE`. */
  interface WeeklySchedule {
      /**
       * The weekly schedule cutoff time. <br />
       * Orders placed before the cutoff time are scheduled for the current week. <br />
       * Orders placed after the cutoff time are scheduled for the next week.
       */
      cutOffTime?: DayAndTime;
  }
  /** Way by which fulfillment times should be displayed. */
  interface FulfillmentTimesDisplayConfig extends FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf {
      /** Options for fulfillment time. Required when `fulfillmentTimesType` is `TIME_WINDOWS`. */
      timeWindowsOptions?: TimeDuration;
      /**
       * Type of the fulfillment times.<br />
       * When `TIME_WINDOWS`, `timeWindowsOptions` is a required field.
       * @internal
       */
      fulfillmentTimesType?: FulfillmentTimesType;
      /**
       * Type of the fulfillment times. <br />
       * When `TIME_WINDOWS`, `timeWindowsOptions` is a required field.
       */
      type?: FulfillmentTimesType;
  }
  /** @oneof */
  interface FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf {
      /** Options for fulfillment time. Required when `fulfillmentTimesType` is `TIME_WINDOWS`. */
      timeWindowsOptions?: TimeDuration;
  }
  /** The fulfillment times type enum. */
  enum FulfillmentTimesType {
      /** Unknown fulfillment times type. */
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      /** Display fulfillment times as time windows. */
      TIME_WINDOWS = "TIME_WINDOWS"
  }
  /** Online ordering status enum. */
  enum OnlineOrderingStatusType {
      /** Undefined online ordering status. */
      UNDEFINED_ONLINE_ORDERING_STATUS = "UNDEFINED_ONLINE_ORDERING_STATUS",
      /** Online ordering is enabled. */
      ENABLED = "ENABLED",
      /** Online ordering is disabled. */
      DISABLED = "DISABLED",
      /** Online ordering is paused until a specific date and time. */
      PAUSED_UNTIL = "PAUSED_UNTIL"
  }
  /** Options for online ordering status. Required when `onlineOrderingStatus` is `PAUSED_UNTIL`. */
  interface OnlineOrderingPausedUntilOptions {
      /**
       * Date and time until which online ordering is paused. <br />
       *
       * Before the specified time, behavior is the same as when `onlineOrderingStatus` is `DISABLED`. <br />
       *
       * After the specified time, behavior is the same as when `onlineOrderingStatus` is `ENABLED`. <br />
       *
       * Passing the time does not trigger any changes to value of any properties.
       */
      time?: Date;
  }
  /** Fulfillment type enum. */
  enum FulfillmentType {
      /** Undefined fulfillment type. */
      UNDEFINED_FULFILLMENT_TYPE = "UNDEFINED_FULFILLMENT_TYPE",
      /** Pickup fulfillment. */
      PICKUP = "PICKUP",
      /** Delivery fulfillment. */
      DELIVERY = "DELIVERY"
  }
  /** Information about when an order can be placed for. */
  interface OrderScheduling extends OrderSchedulingOrderSchedulingOptionsOneOf {
      /** Options for scheduling. Required if `type` is `ASAP`. */
      asapOptions?: AsapOrderScheduling;
      /** Options for scheduling. Required if `type` is `PREORDER`. */
      preorderOptions?: PreorderScheduling;
      /**
       * Scheduling type. <br />
       * - When `ASAP`, `asapOptions` is a required field.
       * - When `PREORDER`, `preorderOptions` is a required field.
       */
      type?: SchedulingType;
  }
  /** @oneof */
  interface OrderSchedulingOrderSchedulingOptionsOneOf {
      /** Options for scheduling. Required if `type` is `ASAP`. */
      asapOptions?: AsapOrderScheduling;
      /** Options for scheduling. Required if `type` is `PREORDER`. */
      preorderOptions?: PreorderScheduling;
  }
  interface AsapOrderScheduling extends AsapOrderSchedulingAsapFutureHandlingOptionsOneOf {
      /** Options for future handling. Required when `asapFutureHandlingType` is `BUSINESS_DAYS_AHEAD_HANDLING`. */
      businessDaysAheadHandlingOptions?: BusinessDaysAheadHandling;
      /**
       * Amount of time needed to prepare the order. <br />
       * - When `MAX_TIME`, `maxTimeOptions` is a required field.
       * - When `MAX_RANGE`, `timeRangeOptions` is a required field.
       */
      preparationTime?: PreparationTime;
      /**
       * Defines if and how non-immediate orders should be handled. <br />
       * When `BUSINESS_DAYS_AHEAD_HANDLING`, `businessDaysAheadHandlingOptions` is a required field.
       */
      asapFutureHandlingType?: AsapFutureHandlingType;
  }
  /** @oneof */
  interface AsapOrderSchedulingAsapFutureHandlingOptionsOneOf {
      /** Options for future handling. Required when `asapFutureHandlingType` is `BUSINESS_DAYS_AHEAD_HANDLING`. */
      businessDaysAheadHandlingOptions?: BusinessDaysAheadHandling;
  }
  interface PreparationTime extends PreparationTimeTimeSpecificationOneOf {
      /** Options for preparation time. Required when `type` is `MAX_TIME`. */
      maxTimeOptions?: TimeDuration;
      /** Options for preparation time. Required when `type` is `TIME_RANGE`. */
      timeRangeOptions?: TimeDurationRange;
      /** Preparation time type. */
      type?: PreparationTimePreparationTimeType;
  }
  /** @oneof */
  interface PreparationTimeTimeSpecificationOneOf {
      /** Options for preparation time. Required when `type` is `MAX_TIME`. */
      maxTimeOptions?: TimeDuration;
      /** Options for preparation time. Required when `type` is `TIME_RANGE`. */
      timeRangeOptions?: TimeDurationRange;
  }
  /** Preparation time type enum. */
  enum PreparationTimePreparationTimeType {
      /** Unknown preparation time type. */
      UNKNOWN_PREPARATION_TIME = "UNKNOWN_PREPARATION_TIME",
      /** Options for preparation time. Required when `type` is `MAX_TIME`. */
      MAX_TIME = "MAX_TIME",
      /** Options for preparation time. Required when `type` is `TIME_RANGE`. */
      TIME_RANGE = "TIME_RANGE"
  }
  enum AsapFutureHandlingType {
      /** Unknown asap future handling type. */
      UNKNOWN_ASAP_FUTURE_HANDLING = "UNKNOWN_ASAP_FUTURE_HANDLING",
      /** No future handling. */
      NO_FUTURE_HANDLING = "NO_FUTURE_HANDLING",
      /** Allows future orders for up to a specified number of business days ahead. */
      BUSINESS_DAYS_AHEAD_HANDLING = "BUSINESS_DAYS_AHEAD_HANDLING"
  }
  interface BusinessDaysAheadHandling {
      /**
       * Number of business days ahead for which orders can be scheduled. <br />
       * Setting the `daysCount` to 0 means that orders can be scheduled until the end of the current business day.
       */
      daysCount?: number | null;
  }
  interface InvalidateCache$1 extends InvalidateCacheGetByOneOf$1 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$1;
      /** Invalidate by page id */
      page?: Page$1;
      /** Invalidate by URI path */
      uri?: URI$1;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File$1;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf$1 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$1;
      /** Invalidate by page id */
      page?: Page$1;
      /** Invalidate by URI path */
      uri?: URI$1;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File$1;
  }
  interface App$1 {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page$1 {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI$1 {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface File$1 {
      /** the msid the file is related to */
      metaSiteId?: string;
      /** Invalidate by filename (for media files such as PDFs) */
      fileName?: string;
  }
  interface DeliveryProfileConfiguredForOperation {
      /** Operation */
      operation?: Operation$1;
  }
  interface CreateOperationRequest {
      /** Operation to create. */
      operation: Operation$1;
  }
  interface CreateOperationResponse {
      /** Created operation. */
      operation?: Operation$1;
  }
  interface GetOperationRequest {
      /** ID of the operation to retrieve. */
      operationId: string;
  }
  interface GetOperationResponse {
      /** Retrieved operation. */
      operation?: Operation$1;
  }
  interface UpdateOperationRequest {
      /** Operation to update. */
      operation: Operation$1;
      /**
       * Field mask of the fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateOperationResponse {
      /** Updated operation. */
      operation?: Operation$1;
  }
  interface DeleteOperationRequest {
      /** ID of the operation to delete. */
      operationId: string;
  }
  interface DeleteOperationResponse {
  }
  interface QueryOperationRequest {
      /** Query options. */
      query: CursorQuery$2;
  }
  interface CursorQuery$2 extends CursorQueryPagingMethodOneOf$2 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
      /**
       * Filter object.
       * See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
       * for more information.
       *
       * For a detailed list of supported filters, see
       * [Supported Filters](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/operations/operations/supported-filters-and-sorting).
       */
      filter?: Record<string, any> | null;
      /** Sort object. */
      sort?: Sorting$2[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$2 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
  }
  interface Sorting$2 {
      /**
       * Supported properties:
       * - `id`
       * - `createdDate`
       * - `updatedDate`
       * - `name`
       */
      fieldName?: string;
      /**
       * Sort order. Use `ASC` for ascending order or `DESC` for descending order. <br />
       *
       * Default: `ASC`
       */
      order?: SortOrder$2;
  }
  enum SortOrder$2 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface CursorPaging$1 {
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
  interface QueryOperationResponse {
      /** Retrieved operations. */
      operations?: Operation$1[];
      /** Metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$1;
  }
  interface CursorPagingMetadata$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: Cursors$1;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface ListOperationsRequest {
  }
  interface ListOperationsResponse {
      /** Retrieved operations. */
      operations?: Operation$1[];
  }
  interface ListOperationIdsRequest {
      /** metasite id */
      metasiteId: string;
  }
  interface ListOperationIdsResponse {
      /** List of operation ids */
      operationIds?: string[];
  }
  interface ListAvailableFulfillmentOptionsRequest {
      /** Operation ID. Returned fulfillment options will belong to this operation. */
      operationId: string;
      /**
       * Delivery address. Optional.
       *
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
  }
  /** Physical address */
  interface CommonAddress$1 extends CommonAddressStreetOneOf$1 {
      /** Street name and number. */
      streetAddress?: StreetAddress$1;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
      /** Country code. */
      country?: string | null;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Zip/postal code. */
      postalCode?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
      addressLine2?: string | null;
      /**
       * A string containing the full address of this location.
       * @internal
       */
      formatted?: string | null;
      /**
       * Coordinates of the physical address.
       * @internal
       */
      location?: AddressLocation$1;
  }
  /** @oneof */
  interface CommonAddressStreetOneOf$1 {
      /** Street name and number. */
      streetAddress?: StreetAddress$1;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
  }
  interface StreetAddress$1 {
      /** Street number. */
      number?: string;
      /** Street name. */
      name?: string;
      /**
       * Apartment number.
       * @internal
       */
      apt?: string;
      /**
       * Optional address line 1
       * @internal
       */
      formattedAddressLine?: string | null;
  }
  interface AddressLocation$1 {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Subdivision$1 {
      /** Short subdivision code. */
      code?: string;
      /** Subdivision full name. */
      name?: string;
      /**
       * Subdivision level
       * @internal
       */
      type?: SubdivisionType$1;
      /**
       * Free text description of subdivision type.
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType$1 {
      UNKNOWN_SUBDIVISION_TYPE = "UNKNOWN_SUBDIVISION_TYPE",
      /** State */
      ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
      /** County */
      ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
      /** City/town */
      ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3",
      /** Neighborhood/quarter */
      ADMINISTRATIVE_AREA_LEVEL_4 = "ADMINISTRATIVE_AREA_LEVEL_4",
      /** Street/block */
      ADMINISTRATIVE_AREA_LEVEL_5 = "ADMINISTRATIVE_AREA_LEVEL_5",
      /** ADMINISTRATIVE_AREA_LEVEL_0. Indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
      COUNTRY = "COUNTRY"
  }
  interface ListAvailableFulfillmentOptionsResponse {
      /** Whether pickup fulfillment method is configured for the requested operation. */
      pickupConfigured?: boolean;
      /** Whether delivery fulfillment method is configured for the requested operation. */
      deliveryConfigured?: boolean;
      /** List of the available fulfillment options. */
      fulfillmentOptions?: FulfillmentOption[];
      /** Whether availability exceptions block the fulfillment options. */
      blockedByAvailabilityExceptions?: boolean | null;
  }
  /** Fulfillment method that is currently available to fulfil orders, given its availability and the operation's scheduling configurations. */
  interface FulfillmentOption extends FulfillmentOptionFulfillmentTimeOptionsOneOf, FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf, FulfillmentOptionFulfillmentTypeOptionsOneOf {
      /** Fulfillment time has a maximum time. */
      maxTimeOptions?: number;
      /** Fulfillment time is limitted by a range. */
      durationRangeOptions?: DurationRange;
      /** Options for fulfillment time. Required when `type` is `TIME_WINDOWS`. */
      timeWindowsOptions?: TimeWindowDisplayConfig;
      /** Information about pickup fulfillment types. */
      pickupOptions?: PickupDetails;
      /** Information about delivery fulfillment types. */
      deliveryOptions?: DeliveryDetails;
      /** Fulfillment method ID. */
      _id?: string | null;
      /** Fulfillment option type. */
      type?: FulfillmentType;
      /** Minimum order price to qualify for the fulfillment option. */
      minOrderPrice?: string | null;
      /** Fee for using the fulfillment option. */
      fee?: string | null;
      /** Availability of the fulfillment option. */
      availability?: FulfillmentOptionAvailability;
      /**
       * Fulfillment time type.
       * Relevant only to ASAP operations.
       */
      fulfillmentTimeType?: FulfillmentTimeType;
      /** Fulfillment times display type. Relevant to preorder operations. */
      fulfillmentTimesDisplayType?: FulfillmentTimesDisplayType;
      /**
       * Minimum order price for free fulfillment.
       * If order price exceeds this amount, the given `fee` is waived.
       */
      freeFulfillmentPriceThreshold?: string | null;
      /** Instructions for the fulfillment. */
      instructions?: string | null;
  }
  /** @oneof */
  interface FulfillmentOptionFulfillmentTimeOptionsOneOf {
      /** Fulfillment time has a maximum time. */
      maxTimeOptions?: number;
      /** Fulfillment time is limitted by a range. */
      durationRangeOptions?: DurationRange;
  }
  /** @oneof */
  interface FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf {
      /** Options for fulfillment time. Required when `type` is `TIME_WINDOWS`. */
      timeWindowsOptions?: TimeWindowDisplayConfig;
  }
  /** @oneof */
  interface FulfillmentOptionFulfillmentTypeOptionsOneOf {
      /** Information about pickup fulfillment types. */
      pickupOptions?: PickupDetails;
      /** Information about delivery fulfillment types. */
      deliveryOptions?: DeliveryDetails;
  }
  /** Availability of the fulfillment option. */
  interface FulfillmentOptionAvailability {
      /** Whether it is possible to submit an order for as soon as possible handling. */
      canSubmitOrderForNow?: boolean;
      /** Date and time at which the fulfillment option's availability starts. */
      startTime?: Date;
      /** Date and time at which the fulfillment option's availability ends. */
      endTime?: Date;
      /**
       * List of availabile times for the days of the week.
       * All the given times must be within the range between `startTime` and `endTime`.
       */
      availableTimes?: DayOfWeekAvailability$1[];
      /** List of availability exceptions that override the availability defined in `availableTimes`. */
      exceptions?: AvailabilityException[];
      /** Timezone for which the available times are given. */
      timeZone?: string | null;
      /** Whether it is possible to submit an order for as soon as possible handling. */
      asapHandlingAvailable?: boolean;
      /** Whether it is possible to submit an order for future handling. */
      futureHandlingAvailable?: boolean | null;
  }
  interface DayOfWeekAvailability$1 {
      /** The day of week this availability relates to. */
      dayOfWeek?: EntitiesDayOfWeek$1;
      /** A list of time ranges during which the fulfillment should be available. */
      timeRanges?: TimeOfDayRange$1[];
  }
  interface TimeOfDayRange$1 {
      /** The start time in time of day representation. */
      startTime?: TimeOfDay$1;
      /** The end time in time of day representation. */
      endTime?: TimeOfDay$1;
  }
  interface AvailabilityException {
      /** The start time of the availability exception. */
      startTime?: Date;
      /** The end time of the availability exception. */
      endTime?: Date;
      /** An indication whether the exception makes the [`start_time`, `end_time`] range available. */
      available?: boolean;
      /** The reason for the exception. */
      reason?: string | null;
  }
  /** Fulfillment time type enum. */
  enum FulfillmentTimeType {
      /** Undefined fulfillment time type. */
      UNDEFINED_FULFILLMENT_TIME = "UNDEFINED_FULFILLMENT_TIME",
      /** Fulfillment time has a maximum. */
      MAX_TIME = "MAX_TIME",
      /** Fulfillment time has a minimum and a maximum. */
      DURATION_RANGE = "DURATION_RANGE"
  }
  /** Duration range. */
  interface DurationRange {
      /** Minimum duration in minutes. */
      minDuration?: number;
      /** Maximum duration in minutes. */
      maxDuration?: number;
  }
  /** Fulfillment times display type enum. */
  enum FulfillmentTimesDisplayType {
      /** Undefined fulfillment times display type. */
      UNDEFINED_FULFILLMENT_TIMES_DISPLAY = "UNDEFINED_FULFILLMENT_TIMES_DISPLAY",
      /** Fulfillment times are displayed as a list of time windows. */
      TIME_WINDOWS = "TIME_WINDOWS"
  }
  /** Time window. */
  interface TimeWindowDisplayConfig {
      /** Time window duration in minutes. */
      durationInMinutes?: number;
  }
  /** Information about pickup fulfillment types. */
  interface PickupDetails {
      /** Pickup address. This is the restaurant's address. */
      address?: CommonAddress$1;
  }
  /** Information about delivery fulfillment types. */
  interface DeliveryDetails {
      /** Delivery provider app id. */
      deliveryProviderAppId?: string | null;
  }
  interface ListFirstAvailableTimeSlotForFulfillmentTypesRequest {
      /**
       * Operation ID.
       * Returned fulfillment options will belong to this operation.
       */
      operationId: string;
      /**
       * Delivery address. Optional.
       *
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
  }
  interface ListFirstAvailableTimeSlotForFulfillmentTypesResponse {
      /**
       * List of available time slots for each fulfillment type.
       *
       * Each time slot will be the first available time slot for the given fulfillment type.
       * A delivery fulfillment type will only be returned if the delivery address is provided.
       */
      timeSlots?: FulfillmentTimeSlot[];
  }
  interface FulfillmentTimeSlot {
      /** Start time and date of the time slot. */
      startTime?: Date;
      /** End time and date of the time slot. */
      endTime?: Date;
      /** Type of the fulfillment. */
      fulfilmentType?: FulfillmentType;
      /** Whether the time slot starts now. */
      startsNow?: boolean;
      /** Details for each fulfillment option of the time slot. */
      fulfillmentDetails?: FulfillmentDetails[];
      /** Address of the fulfillment. */
      fulfillmentAddress?: FulfillmentAddress;
  }
  /** Details about the fulfillment option. */
  interface FulfillmentDetails extends FulfillmentDetailsFulfillmentTimeOptionsOneOf {
      /** Fulfillment time has a maximum. */
      maxTimeOptions?: number;
      /** Fulfillment time has a minimum and a maximum. */
      durationRangeOptions?: DurationRange;
      /** Fee for using this fulfillment. */
      fee?: string | null;
      /** Minimum order price to qualify for using this fulfillment. */
      minOrderPrice?: string | null;
      /** Fulfillment time type. Only be relevant to ASAP operations. */
      fulfillmentTimeType?: FulfillmentTimeType;
      /**
       * Minimum order price for free fulfillment.
       * If order price exceeds this amount, the given `fee` is waived.
       */
      freeFulfillmentPriceThreshold?: string | null;
  }
  /** @oneof */
  interface FulfillmentDetailsFulfillmentTimeOptionsOneOf {
      /** Fulfillment time has a maximum. */
      maxTimeOptions?: number;
      /** Fulfillment time has a minimum and a maximum. */
      durationRangeOptions?: DurationRange;
  }
  /**
   * Details on the address of the fulfillment.
   * For pickup it will the address to take the order from.
   * For delivery it will be the address to deliver the order to.
   */
  interface FulfillmentAddress {
      /** Pickup address. This is the address of the restaurant. */
      address?: CommonAddress$1;
  }
  interface ListAvailableTimeSlotsForDateRequest {
      /**
       * Operation ID.
       * The returned fulfillment options will belong to this operation.
       */
      operationId: string;
      /**
       * Delivery address. Optional.
       *
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
      /** Date and time to get the available time slots for. */
      date: _Date;
  }
  interface _Date {
      /** The day of the month. */
      day?: number;
      /** The month of the year. */
      month?: number;
      /** The year of the date. */
      year?: number;
  }
  interface ListAvailableTimeSlotsForDateResponse {
      /** Lst of the available time slots in the requested date. */
      timeSlots?: FulfillmentTimeSlot[];
  }
  interface ListAvailableDatesInRangeRequest {
      /**
       * Operation ID.
       * The returned fulfillment options will belong to this operation.
       */
      operationId: string;
      /**
       * Delivery address. Optional.
       *
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
      /** Start date and time of the range. */
      from: _Date;
      /** End date and time of the range. */
      until: _Date;
  }
  interface ListAvailableDatesInRangeResponse {
      /** List of the available dates in descending order for each fulfillment type. */
      availableDates?: FulfillmentTypeAvailableDates[];
  }
  /** Available dates for a given fulfillment type. */
  interface FulfillmentTypeAvailableDates {
      /** Type of the fulfillment. */
      fulfilmentType?: FulfillmentType;
      /** List of the available dates in descending order. */
      dates?: _Date[];
  }
  interface GetExpectedFulfillmentSelectionRequest {
      /** Operation ID. The returned fulfillment will belong to this operation. */
      operationId: string;
      /**
       * Delivery address. Optional.
       *
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
      /** Start time and date of the time slot. */
      timeslotStartTime?: Date;
      /** End time and date of the time slot. */
      timeslotEndTime?: Date;
      /** Type of fulfillment. */
      fulfilmentType: FulfillmentType;
      /** Whether it is possible to submit an order to be prepared asap. */
      canSubmitOrderForNow?: boolean | null;
  }
  interface GetExpectedFulfillmentSelectionResponse {
      /** Expected fulfillment option. */
      expectedFulfillmentSelections?: FulfillmentOption[];
  }
  interface DomainEvent$2 extends DomainEventBodyOneOf$2 {
      createdEvent?: EntityCreatedEvent$2;
      updatedEvent?: EntityUpdatedEvent$2;
      deletedEvent?: EntityDeletedEvent$2;
      actionEvent?: ActionEvent$2;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf$2 {
      createdEvent?: EntityCreatedEvent$2;
      updatedEvent?: EntityUpdatedEvent$2;
      deletedEvent?: EntityDeletedEvent$2;
      actionEvent?: ActionEvent$2;
  }
  interface EntityCreatedEvent$2 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$2 {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$2 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$2 {
      bodyAsJson?: string;
  }
  interface Empty$1 {
  }
  /** Encapsulates all details written to the Greyhound topic when a site's properties are updated. */
  interface SitePropertiesNotification$1 {
      /** The site ID for which this update notification applies. */
      metasiteId?: string;
      /** The actual update event. */
      event?: SitePropertiesEvent$1;
      /** A convenience set of mappings from the MetaSite ID to its constituent services. */
      translations?: Translation$1[];
      /** Context of the notification */
      changeContext?: ChangeContext$1;
  }
  /** The actual update event for a particular notification. */
  interface SitePropertiesEvent$1 {
      /** Version of the site's properties represented by this update. */
      version?: number;
      /**
       * Set of properties that were updated - corresponds to the fields in "properties".
       * @internal
       */
      fields?: string[];
      /** Updated properties. */
      properties?: Properties$1;
  }
  interface Properties$1 {
      /** Site categories. */
      categories?: Categories$1;
      /** Site locale. */
      locale?: Locale$2;
      /**
       * Site language.
       *
       * Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * Site currency format used to bill customers.
       *
       * Three-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       */
      paymentCurrency?: string | null;
      /** Timezone in `America/New_York` format. */
      timeZone?: string | null;
      /** Email address. */
      email?: string | null;
      /** Phone number. */
      phone?: string | null;
      /** Fax number. */
      fax?: string | null;
      /** Address. */
      address?: Address$1;
      /** Site display name. */
      siteDisplayName?: string | null;
      /** Business name. */
      businessName?: string | null;
      /** Path to the site's logo in Wix Media (without Wix Media base URL). */
      logo?: string | null;
      /** Site description. */
      description?: string | null;
      /**
       * Business schedule. Regular and exceptional time periods when the business is open or the service is available.
       *
       * __Note:__ Not supported by Wix Bookings.
       */
      businessSchedule?: BusinessSchedule$1;
      /** Supported languages of a site and the primary language. */
      multilingual?: Multilingual$1;
      /** Cookie policy the site owner defined for their site (before the users interacts with/limits it). */
      consentPolicy?: ConsentPolicy$1;
      /**
       * Supported values: `FITNESS SERVICE`, `RESTAURANT`, `BLOG`, `STORE`, `EVENT`, `UNKNOWN`.
       *
       * Site business type.
       */
      businessConfig?: string | null;
      /** External site url that uses Wix as its headless business solution */
      externalSiteUrl?: string | null;
      /** Track clicks analytics */
      trackClicksAnalytics?: boolean;
  }
  interface Categories$1 {
      /** Primary site category. */
      primary?: string;
      /** Secondary site category. */
      secondary?: string[];
      /** Business Term Id */
      businessTermId?: string | null;
  }
  interface Locale$2 {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Two-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string;
  }
  interface Address$1 {
      /** Street name. */
      street?: string;
      /** City name. */
      city?: string;
      /** Two-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
      country?: string;
      /** State. */
      state?: string;
      /** Zip or postal code. */
      zip?: string;
      /** Extra information to be displayed in the address. */
      hint?: AddressHint$1;
      /** Whether this address represents a physical location. */
      isPhysical?: boolean;
      /** Google-formatted version of this address. */
      googleFormattedAddress?: string;
      /** Street number. */
      streetNumber?: string;
      /** Apartment number. */
      apartmentNumber?: string;
      /** Geographic coordinates of location. */
      coordinates?: GeoCoordinates$1;
  }
  /**
   * Extra information on displayed addresses.
   * This is used for display purposes. Used to add additional data about the address, such as "In the passage".
   * Free text. In addition the user can state where he wants that additional description - before, after, or instead
   * the address string.
   */
  interface AddressHint$1 {
      /** Extra text displayed next to, or instead of, the actual address. */
      text?: string;
      /** Where the extra text should be displayed. */
      placement?: PlacementType$1;
  }
  /** Where the extra text should be displayed: before, after or instead of the actual address. */
  enum PlacementType$1 {
      BEFORE = "BEFORE",
      AFTER = "AFTER",
      REPLACE = "REPLACE"
  }
  /** Geocoordinates for a particular address. */
  interface GeoCoordinates$1 {
      /** Latitude of the location. Must be between -90 and 90. */
      latitude?: number;
      /** Longitude of the location. Must be between -180 and 180. */
      longitude?: number;
  }
  /** Business schedule. Regular and exceptional time periods when the business is open or the service is available. */
  interface BusinessSchedule$1 {
      /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
      periods?: TimePeriod$1[];
      /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
      specialHourPeriod?: SpecialHourPeriod$1[];
  }
  /** Weekly recurring time periods when the business is regularly open or the service is available. */
  interface TimePeriod$1 {
      /** Day of the week the period starts on. */
      openDay?: DayOfWeek$1;
      /**
       * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
       * midnight at the end of the specified day.
       */
      openTime?: string;
      /** Day of the week the period ends on. */
      closeDay?: DayOfWeek$1;
      /**
       * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
       * midnight at the end of the specified day.
       *
       * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
       */
      closeTime?: string;
  }
  /** Enumerates the days of the week. */
  enum DayOfWeek$1 {
      MONDAY = "MONDAY",
      TUESDAY = "TUESDAY",
      WEDNESDAY = "WEDNESDAY",
      THURSDAY = "THURSDAY",
      FRIDAY = "FRIDAY",
      SATURDAY = "SATURDAY",
      SUNDAY = "SUNDAY"
  }
  /** Exception to the business's regular hours. The business can be open or closed during the exception. */
  interface SpecialHourPeriod$1 {
      /** Start date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      startDate?: string;
      /** End date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      endDate?: string;
      /**
       * Whether the business is closed (or the service is not available) during the exception.
       *
       * Default: `true`.
       */
      isClosed?: boolean;
      /** Additional info about the exception. For example, "We close earlier on New Year's Eve." */
      comment?: string;
  }
  interface Multilingual$1 {
      /** Supported languages list. */
      supportedLanguages?: SupportedLanguage$1[];
      /** Whether to redirect to user language. */
      autoRedirect?: boolean;
  }
  interface SupportedLanguage$1 {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Locale. */
      locale?: Locale$2;
      /** Whether the supported language is the primary language for the site. */
      isPrimary?: boolean;
      /** Language icon. */
      countryCode?: string;
      /** How the language will be resolved. For internal use. */
      resolutionMethod?: ResolutionMethod$1;
  }
  enum ResolutionMethod$1 {
      QUERY_PARAM = "QUERY_PARAM",
      SUBDOMAIN = "SUBDOMAIN",
      SUBDIRECTORY = "SUBDIRECTORY"
  }
  interface ConsentPolicy$1 {
      /** Whether the site uses cookies that are essential to site operation. */
      essential?: boolean | null;
      /** Whether the site uses cookies that affect site performance and other functional measurements. */
      functional?: boolean | null;
      /** Whether the site uses cookies that collect analytics about how the site is used (in order to improve it). */
      analytics?: boolean | null;
      /** Whether the site uses cookies that collect information allowing better customization of the experience for a current visitor. */
      advertising?: boolean | null;
      /** CCPA compliance flag. */
      dataToThirdParty?: boolean | null;
  }
  /** A single mapping from the MetaSite ID to a particular service. */
  interface Translation$1 {
      /** The service type. */
      serviceType?: string;
      /** The application definition ID; this only applies to services of type ThirdPartyApps. */
      appDefId?: string;
      /** The instance ID of the service. */
      instanceId?: string;
  }
  interface ChangeContext$1 extends ChangeContextPayloadOneOf$1 {
      /** Properties were updated. */
      propertiesChange?: PropertiesChange$1;
      /** Default properties were created on site creation. */
      siteCreated?: SiteCreated$1;
      /** Properties were cloned on site cloning. */
      siteCloned?: SiteCloned$1;
  }
  /** @oneof */
  interface ChangeContextPayloadOneOf$1 {
      /** Properties were updated. */
      propertiesChange?: PropertiesChange$1;
      /** Default properties were created on site creation. */
      siteCreated?: SiteCreated$1;
      /** Properties were cloned on site cloning. */
      siteCloned?: SiteCloned$1;
  }
  interface PropertiesChange$1 {
  }
  interface SiteCreated$1 {
      /** Origin template site id. */
      originTemplateId?: string | null;
  }
  interface SiteCloned$1 {
      /** Origin site id. */
      originMetaSiteId?: string;
  }
  interface MessageEnvelope$2 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$2;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$2 extends IdentificationDataIdOneOf$2 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$2;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$2 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$2 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Creates a new operation.
   * @param operation - Operation to create.
   * @public
   * @documentationMaturity preview
   * @requiredField operation
   * @adminMethod
   * @returns Created operation.
   */
  function createOperation(operation: Operation$1): Promise<Operation$1>;
  /**
   * Retrieves an operation.
   * @param operationId - ID of the operation to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField operationId
   * @returns Retrieved operation.
   */
  function getOperation(operationId: string): Promise<Operation$1>;
  /**
   * Updates an operation.
   *
   * If you update part of the `orderScheduling` property, the whole object is overwritten,
   * so you must include the entire object unless you are not updating `orderScheduling` at all. <br />
   *
   * Each time the operation is updated,
   * `revision` increments by 1.
   * The current `revision` must be passed when updating the operation.
   * This ensures you're working with the latest operation
   * and prevents unintended overwrites.
   * @param _id - Operation ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField operation
   * @requiredField operation.revision
   * @adminMethod
   * @returns Updated operation.
   */
  function updateOperation(_id: string | null, operation: UpdateOperation, options?: UpdateOperationOptions): Promise<Operation$1>;
  interface UpdateOperation {
      /** Options for online ordering status. Required when `onlineOrderingStatus` is `PAUSED_UNTIL`. */
      pausedUntilOptions?: OnlineOrderingPausedUntilOptions;
      /**
       * Operation ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number. Increments by 1 each time the operation is updated.
       * To prevent conflicting changes,
       * the existing `revision` must be passed when updating an operation.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the operation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the operation was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Operation name. */
      name?: string | null;
      /**
       * Currently INTERNAL. Whether the operation is enabled.
       * @internal
       */
      enabled?: boolean | null;
      /**
       * The scheduling data for this operation.
       * Scheduling specifies when an order can be placed for.
       * @internal
       */
      scheduling?: Scheduling;
      /**
       * INTERNAL. Profile ID associated with the operation.
       * @internal
       */
      profileId?: string | null;
      /**
       * Whether the operation is the default operation. <br />
       * Default: `false`.
       */
      default?: boolean | null;
      /** IDs of the [fulfillment methods](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/fulfillment-methods/introduction) associated with the operation. */
      fulfillmentIds?: string[] | null;
      /**
       * IDs of the [service fee](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/service-fees/introduction) rules associated with the operation.
       * @internal
       */
      serviceFeeRulesIds?: string[] | null;
      /**
       * Online ordering status of the operation. <br />
       * - `ENABLED`: Operation currently accepts online orders. <br />
       * - `DISABLED`: Operation currently does not accept online orders. <br />
       * - `PAUSED_UNTIL`: Operation currently does not accept online orders, but will accept online orders from a specifed time and date. When applied, `pausedUntilOptions` is a required field. <br />
       * - `UNDEFINED_ONLINE_ORDERING_STATUS`: Online ordering status is not defined.
       */
      onlineOrderingStatus?: OnlineOrderingStatusType;
      /** IDs of the [service fee](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/service-fees/introduction) rules associated with the operation. */
      serviceFeeRuleIds?: string[] | null;
      /** Default fulfillment type of the operation. */
      defaultFulfillmentType?: FulfillmentType;
      /** Information about when an order can be placed for. */
      orderScheduling?: OrderScheduling;
  }
  interface UpdateOperationOptions {
      /**
       * Field mask of the fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Deletes an operation.
   * @param operationId - ID of the operation to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField operationId
   * @adminMethod
   */
  function deleteOperation(operationId: string): Promise<void>;
  /**
   * Retrieves a list of operations, given the provided paging, filtering, and sorting.
   *
   * Query Operation runs with these defaults, which you can override:
   *
   * - `paging.limit` is `50`
   * - `sort.order` is `ASC`
   *
   * For field support for filters and sorting,
   * see [Operations: Supported Filters and Sorting](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/operations/operation-v1/supported-filters-and-sorting).
   *
   * To learn about working with _Query_ endpoints, see
   * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language),
   * [Sorting and Paging](https://dev.wix.com/docs/rest/articles/getting-started/sorting-and-paging),
   * and [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   * @public
   * @documentationMaturity preview
   */
  function queryOperation(): OperationsQueryBuilder;
  interface QueryCursorResult$2 {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface OperationsQueryResult extends QueryCursorResult$2 {
      items: Operation$1[];
      query: OperationsQueryBuilder;
      next: () => Promise<OperationsQueryResult>;
      prev: () => Promise<OperationsQueryResult>;
  }
  interface OperationsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'default' | 'fulfillmentIds' | 'onlineOrderingStatus' | 'serviceFeeRuleIds' | 'defaultFulfillmentType', value: any) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'default' | 'fulfillmentIds' | 'onlineOrderingStatus' | 'serviceFeeRuleIds' | 'defaultFulfillmentType', value: any) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'name', value: string) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'default' | 'fulfillmentIds' | 'onlineOrderingStatus' | 'serviceFeeRuleIds' | 'defaultFulfillmentType', value: any[]) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasAll: (propertyName: 'fulfillmentIds' | 'serviceFeeRuleIds', value: any[]) => OperationsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'default' | 'fulfillmentIds' | 'onlineOrderingStatus' | 'serviceFeeRuleIds' | 'defaultFulfillmentType', value: any) => OperationsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name' | 'default' | 'fulfillmentIds' | 'onlineOrderingStatus' | 'serviceFeeRuleIds' | 'defaultFulfillmentType', value: boolean) => OperationsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | '_createdDate' | '_updatedDate' | 'name' | 'profileId' | 'default' | 'fulfillmentIds' | 'onlineOrderingStatus' | 'serviceFeeRuleIds' | 'defaultFulfillmentType'>) => OperationsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | '_createdDate' | '_updatedDate' | 'name' | 'profileId' | 'default' | 'fulfillmentIds' | 'onlineOrderingStatus' | 'serviceFeeRuleIds' | 'defaultFulfillmentType'>) => OperationsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => OperationsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => OperationsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<OperationsQueryResult>;
  }
  /**
   * Retrieves a list of operations.
   * @public
   * @documentationMaturity preview
   */
  function listOperations(): Promise<ListOperationsResponse>;
  /** @param metasiteId - metasite id
   * @internal
   * @documentationMaturity preview
   * @requiredField metasiteId
   * @adminMethod
   */
  function listOperationIds(metasiteId: string): Promise<ListOperationIdsResponse>;
  /**
   * Retrieves a list of available fulfillment options.
   *
   * What makes a fulfillment option available is whether it's possible to submit an order given the scheduling configurations and the fulfillment method's availability.
   * When a delivery address is not provided in the input, our system retrieves a list encompassing all types of fulfillment methods.
   * Conversely, if a delivery address` is given, the response may includes non-delivery fulfillment options along with delivery fulfillment methods that are applicable to the given address, ensuring the address falls within the defined delivery area of these methods.
   * @param operationId - Operation ID. Returned fulfillment options will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   */
  function listAvailableFulfillmentOptions(operationId: string, options?: ListAvailableFulfillmentOptions): Promise<ListAvailableFulfillmentOptionsResponse>;
  interface ListAvailableFulfillmentOptions {
      /**
       * Delivery address. Optional.
       *
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
  }
  /**
   * Retrieves a list of available time slots for each fulfillment type.
   *
   * Each time slot will be the first available time slot for the given fulfillment type.
   * @param operationId - Operation ID.
   * Returned fulfillment options will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   */
  function listFirstAvailableTimeSlotForFulfillmentTypes(operationId: string, options?: ListFirstAvailableTimeSlotForFulfillmentTypesOptions): Promise<ListFirstAvailableTimeSlotForFulfillmentTypesResponse>;
  interface ListFirstAvailableTimeSlotForFulfillmentTypesOptions {
      /**
       * Delivery address. Optional.
       *
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
  }
  /**
   * Retrieves a list of the available time slots for a given date.
   * @param operationId - Operation ID.
   * The returned fulfillment options will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @requiredField options.date
   * @requiredField options.date.day
   * @requiredField options.date.month
   * @requiredField options.date.year
   */
  function listAvailableTimeSlotsForDate(operationId: string, options?: ListAvailableTimeSlotsForDateOptions): Promise<ListAvailableTimeSlotsForDateResponse>;
  interface ListAvailableTimeSlotsForDateOptions {
      /**
       * Delivery address. Optional.
       *
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
      /** Date and time to get the available time slots for. */
      date: _Date;
  }
  /**
   * Retrieves a list of the available dates in a given time range.
   *
   * A date is considered available if it has at least one available time slot.
   * @param operationId - Operation ID.
   * The returned fulfillment options will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @requiredField options.from
   * @requiredField options.until
   */
  function listAvailableDatesInRange(operationId: string, options?: ListAvailableDatesInRangeOptions): Promise<ListAvailableDatesInRangeResponse>;
  interface ListAvailableDatesInRangeOptions {
      /**
       * Delivery address. Optional.
       *
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
      /** Start date and time of the range. */
      from: _Date;
      /** End date and time of the range. */
      until: _Date;
  }
  /**
   * Retrieves a list of the fulfillment options that will be available given the provided filters.
   *
   * TODO: probably rename, the implementation took a different direction than the name suggests
   * @param operationId - Operation ID. The returned fulfillment will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @requiredField options.fulfilmentType
   */
  function getExpectedFulfillmentSelection(operationId: string, options?: GetExpectedFulfillmentSelectionOptions): Promise<GetExpectedFulfillmentSelectionResponse>;
  interface GetExpectedFulfillmentSelectionOptions {
      /**
       * Delivery address. Optional.
       *
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
      /** Start time and date of the time slot. */
      timeslotStartTime?: Date;
      /** End time and date of the time slot. */
      timeslotEndTime?: Date;
      /** Type of fulfillment. */
      fulfilmentType: FulfillmentType;
      /** Whether it is possible to submit an order to be prepared asap. */
      canSubmitOrderForNow?: boolean | null;
  }
  
  type restaurantsOperationsV1Operation_universal_d_OperationOnlineOrderingStatusOptionsOneOf = OperationOnlineOrderingStatusOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_Scheduling = Scheduling;
  type restaurantsOperationsV1Operation_universal_d_SchedulingSchedulingOptionsOneOf = SchedulingSchedulingOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_SchedulingType = SchedulingType;
  const restaurantsOperationsV1Operation_universal_d_SchedulingType: typeof SchedulingType;
  type restaurantsOperationsV1Operation_universal_d_AsapScheduling = AsapScheduling;
  type restaurantsOperationsV1Operation_universal_d_AsapSchedulingPreparationTimeOneOf = AsapSchedulingPreparationTimeOneOf;
  type restaurantsOperationsV1Operation_universal_d_AsapSchedulingAsapPreorderOneOf = AsapSchedulingAsapPreorderOneOf;
  type restaurantsOperationsV1Operation_universal_d_PreparationTimeType = PreparationTimeType;
  const restaurantsOperationsV1Operation_universal_d_PreparationTimeType: typeof PreparationTimeType;
  type restaurantsOperationsV1Operation_universal_d_TimeDuration = TimeDuration;
  type restaurantsOperationsV1Operation_universal_d_TimeUnit = TimeUnit;
  const restaurantsOperationsV1Operation_universal_d_TimeUnit: typeof TimeUnit;
  type restaurantsOperationsV1Operation_universal_d_TimeDurationRange = TimeDurationRange;
  type restaurantsOperationsV1Operation_universal_d_AsapPreorderType = AsapPreorderType;
  const restaurantsOperationsV1Operation_universal_d_AsapPreorderType: typeof AsapPreorderType;
  type restaurantsOperationsV1Operation_universal_d_BusinessDaysPreorder = BusinessDaysPreorder;
  type restaurantsOperationsV1Operation_universal_d_PreorderScheduling = PreorderScheduling;
  type restaurantsOperationsV1Operation_universal_d_PreorderMethod = PreorderMethod;
  type restaurantsOperationsV1Operation_universal_d_PreorderMethodMethodOptionsOneOf = PreorderMethodMethodOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_DayAndTime = DayAndTime;
  type restaurantsOperationsV1Operation_universal_d_MethodType = MethodType;
  const restaurantsOperationsV1Operation_universal_d_MethodType: typeof MethodType;
  type restaurantsOperationsV1Operation_universal_d_TimeBounded = TimeBounded;
  type restaurantsOperationsV1Operation_universal_d_WeeklySchedule = WeeklySchedule;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayConfig = FulfillmentTimesDisplayConfig;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf = FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimesType = FulfillmentTimesType;
  const restaurantsOperationsV1Operation_universal_d_FulfillmentTimesType: typeof FulfillmentTimesType;
  type restaurantsOperationsV1Operation_universal_d_OnlineOrderingStatusType = OnlineOrderingStatusType;
  const restaurantsOperationsV1Operation_universal_d_OnlineOrderingStatusType: typeof OnlineOrderingStatusType;
  type restaurantsOperationsV1Operation_universal_d_OnlineOrderingPausedUntilOptions = OnlineOrderingPausedUntilOptions;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentType = FulfillmentType;
  const restaurantsOperationsV1Operation_universal_d_FulfillmentType: typeof FulfillmentType;
  type restaurantsOperationsV1Operation_universal_d_OrderScheduling = OrderScheduling;
  type restaurantsOperationsV1Operation_universal_d_OrderSchedulingOrderSchedulingOptionsOneOf = OrderSchedulingOrderSchedulingOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_AsapOrderScheduling = AsapOrderScheduling;
  type restaurantsOperationsV1Operation_universal_d_AsapOrderSchedulingAsapFutureHandlingOptionsOneOf = AsapOrderSchedulingAsapFutureHandlingOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_PreparationTime = PreparationTime;
  type restaurantsOperationsV1Operation_universal_d_PreparationTimeTimeSpecificationOneOf = PreparationTimeTimeSpecificationOneOf;
  type restaurantsOperationsV1Operation_universal_d_PreparationTimePreparationTimeType = PreparationTimePreparationTimeType;
  const restaurantsOperationsV1Operation_universal_d_PreparationTimePreparationTimeType: typeof PreparationTimePreparationTimeType;
  type restaurantsOperationsV1Operation_universal_d_AsapFutureHandlingType = AsapFutureHandlingType;
  const restaurantsOperationsV1Operation_universal_d_AsapFutureHandlingType: typeof AsapFutureHandlingType;
  type restaurantsOperationsV1Operation_universal_d_BusinessDaysAheadHandling = BusinessDaysAheadHandling;
  type restaurantsOperationsV1Operation_universal_d_DeliveryProfileConfiguredForOperation = DeliveryProfileConfiguredForOperation;
  type restaurantsOperationsV1Operation_universal_d_CreateOperationRequest = CreateOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_CreateOperationResponse = CreateOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_GetOperationRequest = GetOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_GetOperationResponse = GetOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_UpdateOperationRequest = UpdateOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_UpdateOperationResponse = UpdateOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_DeleteOperationRequest = DeleteOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_DeleteOperationResponse = DeleteOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_QueryOperationRequest = QueryOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_QueryOperationResponse = QueryOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_ListOperationsRequest = ListOperationsRequest;
  type restaurantsOperationsV1Operation_universal_d_ListOperationsResponse = ListOperationsResponse;
  type restaurantsOperationsV1Operation_universal_d_ListOperationIdsRequest = ListOperationIdsRequest;
  type restaurantsOperationsV1Operation_universal_d_ListOperationIdsResponse = ListOperationIdsResponse;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptionsRequest = ListAvailableFulfillmentOptionsRequest;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptionsResponse = ListAvailableFulfillmentOptionsResponse;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOption = FulfillmentOption;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTimeOptionsOneOf = FulfillmentOptionFulfillmentTimeOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf = FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTypeOptionsOneOf = FulfillmentOptionFulfillmentTypeOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOptionAvailability = FulfillmentOptionAvailability;
  type restaurantsOperationsV1Operation_universal_d_AvailabilityException = AvailabilityException;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimeType = FulfillmentTimeType;
  const restaurantsOperationsV1Operation_universal_d_FulfillmentTimeType: typeof FulfillmentTimeType;
  type restaurantsOperationsV1Operation_universal_d_DurationRange = DurationRange;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayType = FulfillmentTimesDisplayType;
  const restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayType: typeof FulfillmentTimesDisplayType;
  type restaurantsOperationsV1Operation_universal_d_TimeWindowDisplayConfig = TimeWindowDisplayConfig;
  type restaurantsOperationsV1Operation_universal_d_PickupDetails = PickupDetails;
  type restaurantsOperationsV1Operation_universal_d_DeliveryDetails = DeliveryDetails;
  type restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesRequest = ListFirstAvailableTimeSlotForFulfillmentTypesRequest;
  type restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesResponse = ListFirstAvailableTimeSlotForFulfillmentTypesResponse;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimeSlot = FulfillmentTimeSlot;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentDetails = FulfillmentDetails;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentDetailsFulfillmentTimeOptionsOneOf = FulfillmentDetailsFulfillmentTimeOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentAddress = FulfillmentAddress;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateRequest = ListAvailableTimeSlotsForDateRequest;
  type restaurantsOperationsV1Operation_universal_d__Date = _Date;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateResponse = ListAvailableTimeSlotsForDateResponse;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeRequest = ListAvailableDatesInRangeRequest;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeResponse = ListAvailableDatesInRangeResponse;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTypeAvailableDates = FulfillmentTypeAvailableDates;
  type restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionRequest = GetExpectedFulfillmentSelectionRequest;
  type restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionResponse = GetExpectedFulfillmentSelectionResponse;
  const restaurantsOperationsV1Operation_universal_d_createOperation: typeof createOperation;
  const restaurantsOperationsV1Operation_universal_d_getOperation: typeof getOperation;
  const restaurantsOperationsV1Operation_universal_d_updateOperation: typeof updateOperation;
  type restaurantsOperationsV1Operation_universal_d_UpdateOperation = UpdateOperation;
  type restaurantsOperationsV1Operation_universal_d_UpdateOperationOptions = UpdateOperationOptions;
  const restaurantsOperationsV1Operation_universal_d_deleteOperation: typeof deleteOperation;
  const restaurantsOperationsV1Operation_universal_d_queryOperation: typeof queryOperation;
  type restaurantsOperationsV1Operation_universal_d_OperationsQueryResult = OperationsQueryResult;
  type restaurantsOperationsV1Operation_universal_d_OperationsQueryBuilder = OperationsQueryBuilder;
  const restaurantsOperationsV1Operation_universal_d_listOperations: typeof listOperations;
  const restaurantsOperationsV1Operation_universal_d_listOperationIds: typeof listOperationIds;
  const restaurantsOperationsV1Operation_universal_d_listAvailableFulfillmentOptions: typeof listAvailableFulfillmentOptions;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptions = ListAvailableFulfillmentOptions;
  const restaurantsOperationsV1Operation_universal_d_listFirstAvailableTimeSlotForFulfillmentTypes: typeof listFirstAvailableTimeSlotForFulfillmentTypes;
  type restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesOptions = ListFirstAvailableTimeSlotForFulfillmentTypesOptions;
  const restaurantsOperationsV1Operation_universal_d_listAvailableTimeSlotsForDate: typeof listAvailableTimeSlotsForDate;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateOptions = ListAvailableTimeSlotsForDateOptions;
  const restaurantsOperationsV1Operation_universal_d_listAvailableDatesInRange: typeof listAvailableDatesInRange;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeOptions = ListAvailableDatesInRangeOptions;
  const restaurantsOperationsV1Operation_universal_d_getExpectedFulfillmentSelection: typeof getExpectedFulfillmentSelection;
  type restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionOptions = GetExpectedFulfillmentSelectionOptions;
  namespace restaurantsOperationsV1Operation_universal_d {
    export {
      Operation$1 as Operation,
      restaurantsOperationsV1Operation_universal_d_OperationOnlineOrderingStatusOptionsOneOf as OperationOnlineOrderingStatusOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_Scheduling as Scheduling,
      restaurantsOperationsV1Operation_universal_d_SchedulingSchedulingOptionsOneOf as SchedulingSchedulingOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_SchedulingType as SchedulingType,
      restaurantsOperationsV1Operation_universal_d_AsapScheduling as AsapScheduling,
      restaurantsOperationsV1Operation_universal_d_AsapSchedulingPreparationTimeOneOf as AsapSchedulingPreparationTimeOneOf,
      restaurantsOperationsV1Operation_universal_d_AsapSchedulingAsapPreorderOneOf as AsapSchedulingAsapPreorderOneOf,
      restaurantsOperationsV1Operation_universal_d_PreparationTimeType as PreparationTimeType,
      restaurantsOperationsV1Operation_universal_d_TimeDuration as TimeDuration,
      restaurantsOperationsV1Operation_universal_d_TimeUnit as TimeUnit,
      restaurantsOperationsV1Operation_universal_d_TimeDurationRange as TimeDurationRange,
      restaurantsOperationsV1Operation_universal_d_AsapPreorderType as AsapPreorderType,
      restaurantsOperationsV1Operation_universal_d_BusinessDaysPreorder as BusinessDaysPreorder,
      restaurantsOperationsV1Operation_universal_d_PreorderScheduling as PreorderScheduling,
      restaurantsOperationsV1Operation_universal_d_PreorderMethod as PreorderMethod,
      restaurantsOperationsV1Operation_universal_d_PreorderMethodMethodOptionsOneOf as PreorderMethodMethodOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_DayAndTime as DayAndTime,
      EntitiesDayOfWeek$1 as EntitiesDayOfWeek,
      TimeOfDay$1 as TimeOfDay,
      restaurantsOperationsV1Operation_universal_d_MethodType as MethodType,
      restaurantsOperationsV1Operation_universal_d_TimeBounded as TimeBounded,
      restaurantsOperationsV1Operation_universal_d_WeeklySchedule as WeeklySchedule,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayConfig as FulfillmentTimesDisplayConfig,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf as FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimesType as FulfillmentTimesType,
      restaurantsOperationsV1Operation_universal_d_OnlineOrderingStatusType as OnlineOrderingStatusType,
      restaurantsOperationsV1Operation_universal_d_OnlineOrderingPausedUntilOptions as OnlineOrderingPausedUntilOptions,
      restaurantsOperationsV1Operation_universal_d_FulfillmentType as FulfillmentType,
      restaurantsOperationsV1Operation_universal_d_OrderScheduling as OrderScheduling,
      restaurantsOperationsV1Operation_universal_d_OrderSchedulingOrderSchedulingOptionsOneOf as OrderSchedulingOrderSchedulingOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_AsapOrderScheduling as AsapOrderScheduling,
      restaurantsOperationsV1Operation_universal_d_AsapOrderSchedulingAsapFutureHandlingOptionsOneOf as AsapOrderSchedulingAsapFutureHandlingOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_PreparationTime as PreparationTime,
      restaurantsOperationsV1Operation_universal_d_PreparationTimeTimeSpecificationOneOf as PreparationTimeTimeSpecificationOneOf,
      restaurantsOperationsV1Operation_universal_d_PreparationTimePreparationTimeType as PreparationTimePreparationTimeType,
      restaurantsOperationsV1Operation_universal_d_AsapFutureHandlingType as AsapFutureHandlingType,
      restaurantsOperationsV1Operation_universal_d_BusinessDaysAheadHandling as BusinessDaysAheadHandling,
      InvalidateCache$1 as InvalidateCache,
      InvalidateCacheGetByOneOf$1 as InvalidateCacheGetByOneOf,
      App$1 as App,
      Page$1 as Page,
      URI$1 as URI,
      File$1 as File,
      restaurantsOperationsV1Operation_universal_d_DeliveryProfileConfiguredForOperation as DeliveryProfileConfiguredForOperation,
      restaurantsOperationsV1Operation_universal_d_CreateOperationRequest as CreateOperationRequest,
      restaurantsOperationsV1Operation_universal_d_CreateOperationResponse as CreateOperationResponse,
      restaurantsOperationsV1Operation_universal_d_GetOperationRequest as GetOperationRequest,
      restaurantsOperationsV1Operation_universal_d_GetOperationResponse as GetOperationResponse,
      restaurantsOperationsV1Operation_universal_d_UpdateOperationRequest as UpdateOperationRequest,
      restaurantsOperationsV1Operation_universal_d_UpdateOperationResponse as UpdateOperationResponse,
      restaurantsOperationsV1Operation_universal_d_DeleteOperationRequest as DeleteOperationRequest,
      restaurantsOperationsV1Operation_universal_d_DeleteOperationResponse as DeleteOperationResponse,
      restaurantsOperationsV1Operation_universal_d_QueryOperationRequest as QueryOperationRequest,
      CursorQuery$2 as CursorQuery,
      CursorQueryPagingMethodOneOf$2 as CursorQueryPagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      CursorPaging$1 as CursorPaging,
      restaurantsOperationsV1Operation_universal_d_QueryOperationResponse as QueryOperationResponse,
      CursorPagingMetadata$1 as CursorPagingMetadata,
      Cursors$1 as Cursors,
      restaurantsOperationsV1Operation_universal_d_ListOperationsRequest as ListOperationsRequest,
      restaurantsOperationsV1Operation_universal_d_ListOperationsResponse as ListOperationsResponse,
      restaurantsOperationsV1Operation_universal_d_ListOperationIdsRequest as ListOperationIdsRequest,
      restaurantsOperationsV1Operation_universal_d_ListOperationIdsResponse as ListOperationIdsResponse,
      restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptionsRequest as ListAvailableFulfillmentOptionsRequest,
      CommonAddress$1 as CommonAddress,
      CommonAddressStreetOneOf$1 as CommonAddressStreetOneOf,
      StreetAddress$1 as StreetAddress,
      AddressLocation$1 as AddressLocation,
      Subdivision$1 as Subdivision,
      SubdivisionType$1 as SubdivisionType,
      restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptionsResponse as ListAvailableFulfillmentOptionsResponse,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOption as FulfillmentOption,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTimeOptionsOneOf as FulfillmentOptionFulfillmentTimeOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf as FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTypeOptionsOneOf as FulfillmentOptionFulfillmentTypeOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOptionAvailability as FulfillmentOptionAvailability,
      DayOfWeekAvailability$1 as DayOfWeekAvailability,
      TimeOfDayRange$1 as TimeOfDayRange,
      restaurantsOperationsV1Operation_universal_d_AvailabilityException as AvailabilityException,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimeType as FulfillmentTimeType,
      restaurantsOperationsV1Operation_universal_d_DurationRange as DurationRange,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayType as FulfillmentTimesDisplayType,
      restaurantsOperationsV1Operation_universal_d_TimeWindowDisplayConfig as TimeWindowDisplayConfig,
      restaurantsOperationsV1Operation_universal_d_PickupDetails as PickupDetails,
      restaurantsOperationsV1Operation_universal_d_DeliveryDetails as DeliveryDetails,
      restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesRequest as ListFirstAvailableTimeSlotForFulfillmentTypesRequest,
      restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesResponse as ListFirstAvailableTimeSlotForFulfillmentTypesResponse,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimeSlot as FulfillmentTimeSlot,
      restaurantsOperationsV1Operation_universal_d_FulfillmentDetails as FulfillmentDetails,
      restaurantsOperationsV1Operation_universal_d_FulfillmentDetailsFulfillmentTimeOptionsOneOf as FulfillmentDetailsFulfillmentTimeOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FulfillmentAddress as FulfillmentAddress,
      restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateRequest as ListAvailableTimeSlotsForDateRequest,
      restaurantsOperationsV1Operation_universal_d__Date as _Date,
      restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateResponse as ListAvailableTimeSlotsForDateResponse,
      restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeRequest as ListAvailableDatesInRangeRequest,
      restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeResponse as ListAvailableDatesInRangeResponse,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTypeAvailableDates as FulfillmentTypeAvailableDates,
      restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionRequest as GetExpectedFulfillmentSelectionRequest,
      restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionResponse as GetExpectedFulfillmentSelectionResponse,
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      Empty$1 as Empty,
      SitePropertiesNotification$1 as SitePropertiesNotification,
      SitePropertiesEvent$1 as SitePropertiesEvent,
      Properties$1 as Properties,
      Categories$1 as Categories,
      Locale$2 as Locale,
      Address$1 as Address,
      AddressHint$1 as AddressHint,
      PlacementType$1 as PlacementType,
      GeoCoordinates$1 as GeoCoordinates,
      BusinessSchedule$1 as BusinessSchedule,
      TimePeriod$1 as TimePeriod,
      DayOfWeek$1 as DayOfWeek,
      SpecialHourPeriod$1 as SpecialHourPeriod,
      Multilingual$1 as Multilingual,
      SupportedLanguage$1 as SupportedLanguage,
      ResolutionMethod$1 as ResolutionMethod,
      ConsentPolicy$1 as ConsentPolicy,
      Translation$1 as Translation,
      ChangeContext$1 as ChangeContext,
      ChangeContextPayloadOneOf$1 as ChangeContextPayloadOneOf,
      PropertiesChange$1 as PropertiesChange,
      SiteCreated$1 as SiteCreated,
      SiteCloned$1 as SiteCloned,
      MessageEnvelope$2 as MessageEnvelope,
      IdentificationData$2 as IdentificationData,
      IdentificationDataIdOneOf$2 as IdentificationDataIdOneOf,
      WebhookIdentityType$2 as WebhookIdentityType,
      restaurantsOperationsV1Operation_universal_d_createOperation as createOperation,
      restaurantsOperationsV1Operation_universal_d_getOperation as getOperation,
      restaurantsOperationsV1Operation_universal_d_updateOperation as updateOperation,
      restaurantsOperationsV1Operation_universal_d_UpdateOperation as UpdateOperation,
      restaurantsOperationsV1Operation_universal_d_UpdateOperationOptions as UpdateOperationOptions,
      restaurantsOperationsV1Operation_universal_d_deleteOperation as deleteOperation,
      restaurantsOperationsV1Operation_universal_d_queryOperation as queryOperation,
      restaurantsOperationsV1Operation_universal_d_OperationsQueryResult as OperationsQueryResult,
      restaurantsOperationsV1Operation_universal_d_OperationsQueryBuilder as OperationsQueryBuilder,
      restaurantsOperationsV1Operation_universal_d_listOperations as listOperations,
      restaurantsOperationsV1Operation_universal_d_listOperationIds as listOperationIds,
      restaurantsOperationsV1Operation_universal_d_listAvailableFulfillmentOptions as listAvailableFulfillmentOptions,
      restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptions as ListAvailableFulfillmentOptions,
      restaurantsOperationsV1Operation_universal_d_listFirstAvailableTimeSlotForFulfillmentTypes as listFirstAvailableTimeSlotForFulfillmentTypes,
      restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesOptions as ListFirstAvailableTimeSlotForFulfillmentTypesOptions,
      restaurantsOperationsV1Operation_universal_d_listAvailableTimeSlotsForDate as listAvailableTimeSlotsForDate,
      restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateOptions as ListAvailableTimeSlotsForDateOptions,
      restaurantsOperationsV1Operation_universal_d_listAvailableDatesInRange as listAvailableDatesInRange,
      restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeOptions as ListAvailableDatesInRangeOptions,
      restaurantsOperationsV1Operation_universal_d_getExpectedFulfillmentSelection as getExpectedFulfillmentSelection,
      restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionOptions as GetExpectedFulfillmentSelectionOptions,
    };
  }
  
  /** A Fulfillment Method represents a way in which a restaurant can provide orders to its customers. */
  interface FulfillmentMethod extends FulfillmentMethodMethodOptionsOneOf {
      /** Data specific for pickup fulfillment method. */
      pickupOptions?: PickupInfo;
      /** Data specific for delivery fulfillment method. */
      deliveryOptions?: DeliveryInfo;
      /**
       * Fulfillment method ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * The current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the fulfillment method was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the fulfillment method was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Type of fulfillment method. */
      type?: FulfillmentMethodType;
      /**
       * The minimum order price to qualify for using this fulfillment method.
       * @internal
       */
      minimumOrderAmount?: string | null;
      /** Fulfillment method name. */
      name?: string | null;
      /** Whether the fulfillment method is enabled. */
      enabled?: boolean | null;
      /** Fee for using this fulfillment method. */
      fee?: string | null;
      /** Availability of this fulfillment method. */
      availability?: Availability;
      /** Minimum order price to qualify for using this fulfillment method. */
      minOrderPrice?: string | null;
  }
  /** @oneof */
  interface FulfillmentMethodMethodOptionsOneOf {
      /** Data specific for pickup fulfillment method. */
      pickupOptions?: PickupInfo;
      /** Data specific for delivery fulfillment method. */
      deliveryOptions?: DeliveryInfo;
  }
  enum FulfillmentMethodType {
      /** Missing type due to an error. */
      UNKNOWN_FULFILLMENT_TYPE = "UNKNOWN_FULFILLMENT_TYPE",
      /**
       * Pickup fulfillment method.
       *
       * This indicates that the customer must pick up the order from the restaurant.
       */
      PICKUP = "PICKUP",
      /**
       * Delivery fulfillment method.
       *
       * This indicates that the restaurant, or someone on behalf of the restaurant, must deliver the order to the customer.
       */
      DELIVERY = "DELIVERY"
  }
  interface PickupInfo {
      /** Instructions for the pickup. */
      instructions?: string | null;
      /**
       * Pickup address.
       *
       * This is set to the address of the restaurant.
       * @readonly
       */
      address?: CommonAddress;
  }
  /** Physical address */
  interface CommonAddress extends CommonAddressStreetOneOf {
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
      /** Country code. */
      country?: string | null;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Zip/postal code. */
      postalCode?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
      addressLine2?: string | null;
      /**
       * A string containing the full address of this location.
       * @internal
       */
      formatted?: string | null;
      /**
       * Coordinates of the physical address.
       * @internal
       */
      location?: AddressLocation;
  }
  /** @oneof */
  interface CommonAddressStreetOneOf {
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
  }
  interface StreetAddress {
      /** Street number. */
      number?: string;
      /** Street name. */
      name?: string;
      /**
       * Apartment number.
       * @internal
       */
      apt?: string;
      /**
       * Optional address line 1
       * @internal
       */
      formattedAddressLine?: string | null;
  }
  interface AddressLocation {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Subdivision {
      /** Short subdivision code. */
      code?: string;
      /** Subdivision full name. */
      name?: string;
      /**
       * Subdivision level
       * @internal
       */
      type?: SubdivisionType;
      /**
       * Free text description of subdivision type.
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType {
      UNKNOWN_SUBDIVISION_TYPE = "UNKNOWN_SUBDIVISION_TYPE",
      /** State */
      ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
      /** County */
      ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
      /** City/town */
      ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3",
      /** Neighborhood/quarter */
      ADMINISTRATIVE_AREA_LEVEL_4 = "ADMINISTRATIVE_AREA_LEVEL_4",
      /** Street/block */
      ADMINISTRATIVE_AREA_LEVEL_5 = "ADMINISTRATIVE_AREA_LEVEL_5",
      /** ADMINISTRATIVE_AREA_LEVEL_0. Indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
      COUNTRY = "COUNTRY"
  }
  interface DeliveryInfo {
      /** Estimated delivery time in minutes. */
      deliveryTimeInMinutes?: number | null;
      /**
       * Threshold for offering free delivery.
       * If the order price exceeds this threshold, the delivery fee is waived.
       */
      freeDeliveryThreshold?: string | null;
      /** Delivery area supported by this delivery fulfillment method. */
      deliveryArea?: DeliveryArea;
      /**
       * Delivery provider app id.
       * @readonly
       */
      deliveryProviderAppId?: string | null;
      /** Pickup instructions for couriers. */
      courierPickupInstructions?: string | null;
  }
  interface DeliveryArea extends DeliveryAreaAreaOptionsOneOf {
      /** Settings for a radius delivery area. */
      radiusOptions?: Radius;
      /** Settings for a postal code delivery area. */
      postalCodeOptions?: PostalCode;
      /** Settings for a custom delivery area. */
      customOptions?: CustomArea;
      /** Type of delivery area. */
      type?: Type$1;
  }
  /** @oneof */
  interface DeliveryAreaAreaOptionsOneOf {
      /** Settings for a radius delivery area. */
      radiusOptions?: Radius;
      /** Settings for a postal code delivery area. */
      postalCodeOptions?: PostalCode;
      /** Settings for a custom delivery area. */
      customOptions?: CustomArea;
  }
  enum Type$1 {
      /** Unknown delivery area type. */
      UNKNOWN_DELIVERY_AREA = "UNKNOWN_DELIVERY_AREA",
      /** Delivery area defined by a radius around the restaurant's address. */
      RADIUS = "RADIUS",
      /** Delivery area defined by a list of postal codes. */
      POSTAL_CODE = "POSTAL_CODE",
      /** Delivery area defined by a custom polygon. */
      CUSTOM = "CUSTOM",
      /** Delivery area that is determined by the provider. Setting this option, you must also provide `delivery_provider_app_id`. */
      PROVIDER_DEFINED = "PROVIDER_DEFINED"
  }
  interface Radius {
      /**
       * Radius value.
       * The unit of the radius is specified in the `unit` field.
       */
      value?: string | null;
      /**
       * Address at the center of the circle.
       * @readonly
       */
      centerPointAddress?: CommonAddress;
      /** Unit of measurement of the radius. */
      unit?: Unit;
  }
  enum Unit {
      /** Unknown unit. */
      UNKNOWN_UNIT = "UNKNOWN_UNIT",
      /** Miles. */
      MILES = "MILES",
      /** Kilometers. */
      KILOMETERS = "KILOMETERS"
  }
  interface PostalCode {
      /**
       * Postal code of the delivery area.
       * @internal
       */
      postalCode?: string | null;
      /**
       * Country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
       * @readonly
       */
      countryCode?: string | null;
      /**
       * List of postal codes and postal code regexes. For example, `10001`, `10002` or `1000*`.
       * A postal code regex will enable you to define a range of postal codes using an asterisk (*).
       * For example, to include the postal codes in the range of `10001`-`10009`, use `1000*`.
       */
      postalCodes?: string[] | null;
  }
  interface CustomArea {
      /** Geocodes of the polygon defining the delivery area. */
      geocodes?: AddressLocation[];
  }
  interface Availability {
      /** A list of availability times for the days of the week. */
      availableTimes?: DayOfWeekAvailability[];
      /**
       * The timezone in which the availability times are given.
       * @readonly
       */
      timeZone?: string | null;
  }
  interface DayOfWeekAvailability {
      /** The day of week this availability relates to. */
      dayOfWeek?: EntitiesDayOfWeek;
      /** A list of time ranges during which the fulfillment should be available. */
      timeRanges?: TimeOfDayRange[];
  }
  enum EntitiesDayOfWeek {
      /** Monday. */
      MON = "MON",
      /** Tuesday. */
      TUE = "TUE",
      /** Wednesday. */
      WED = "WED",
      /** Thursday. */
      THU = "THU",
      /** Friday. */
      FRI = "FRI",
      /** Saturday. */
      SAT = "SAT",
      /** Sunday. */
      SUN = "SUN"
  }
  interface TimeOfDayRange {
      /** The start time in time of day representation. */
      startTime?: TimeOfDay;
      /** The end time in time of day representation. */
      endTime?: TimeOfDay;
  }
  interface TimeOfDay {
      /**
       * Hours. <br />
       * Min: `0`. <br />
       * Max: `23`.
       */
      hours?: number;
      /**
       * Minutes. <br />
       * Min: `0`. <br />
       * Max: `23`.
       */
      minutes?: number;
  }
  interface InvalidateCache extends InvalidateCacheGetByOneOf {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App;
      /** Invalidate by page id */
      page?: Page;
      /** Invalidate by URI path */
      uri?: URI;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App;
      /** Invalidate by page id */
      page?: Page;
      /** Invalidate by URI path */
      uri?: URI;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File;
  }
  interface App {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface File {
      /** the msid the file is related to */
      metaSiteId?: string;
      /** Invalidate by filename (for media files such as PDFs) */
      fileName?: string;
  }
  interface CreateFulfillmentMethodRequest {
      /** Fulfillment method to create. */
      fulfillmentMethod: FulfillmentMethod;
  }
  interface CreateFulfillmentMethodResponse {
      /** The created fulfillment method. */
      fulfillmentMethod?: FulfillmentMethod;
  }
  interface GetFulfillmentMethodRequest {
      /** The ID of the fulfillment method to retrieve. */
      fulfillmentMethodId: string;
  }
  interface GetFulfillmentMethodResponse {
      /** The retrieved fulfillment method. */
      fulfillmentMethod?: FulfillmentMethod;
  }
  interface UpdateFulfillmentMethodRequest {
      /**
       * Fulfillment method to update.
       * The fulfillment method update may be partial with the use of `field_mask`.
       */
      fulfillmentMethod: FulfillmentMethod;
      /**
       * Field mask of the fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateFulfillmentMethodResponse {
      /** The updated fulfillment method. */
      fulfillmentMethod?: FulfillmentMethod;
  }
  interface DeleteFulfillmentMethodRequest {
      /** The ID of the fulfillment method to delete. */
      fulfillmentMethodId: string;
  }
  interface DeleteFulfillmentMethodResponse {
  }
  interface QueryFulfillmentMethodsRequest {
      /** The query by which to select fulfillment methods. */
      query?: CursorQuery$1;
      /**
       * Projection mask of the fields to return.
       * @internal
       */
      projectionMask?: string[];
  }
  interface CursorQuery$1 extends CursorQueryPagingMethodOneOf$1 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CommonCursorPaging;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$1[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$1 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CommonCursorPaging;
  }
  interface Sorting$1 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$1;
  }
  enum SortOrder$1 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface CommonCursorPaging {
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
  interface QueryFulfillmentMethodsResponse {
      /** The retrieved fulfillment methods. */
      fulfillmentMethods?: FulfillmentMethod[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CommonCursorPagingMetadata;
  }
  interface CommonCursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: CommonCursors;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface CommonCursors {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface ListFulfillmentMethodsRequest {
      /**
       * The address by which to filter delivery fulfillment methods.
       * @internal
       */
      address?: CommonAddress;
      /** Cursor paging */
      cursorPaging?: CommonCursorPaging;
  }
  interface ListFulfillmentMethodsResponse {
      /** The retrieved fulfillment methods. */
      fulfillmentMethods?: FulfillmentMethod[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CommonCursorPagingMetadata;
  }
  interface ListAvailableFulfillmentMethodsForAddressRequest {
      /** The address by which to filter delivery fulfillment methods. */
      address?: CommonAddress;
      /** Cursor paging */
      cursorPaging?: CommonCursorPaging;
      /** If provided, only fulfillment methods with the given IDs will be returned. */
      fulfillmentMethodIds?: string[];
  }
  interface ListAvailableFulfillmentMethodsForAddressResponse {
      /** The retrieved fulfillment methods. */
      fulfillmentMethods?: FulfillmentMethod[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CommonCursorPagingMetadata;
  }
  interface GetAccumulatedFulfillmentMethodsAvailabilityRequest {
      /** fulfillment method ids to check availability for. */
      fulfillmentMethodIds?: string[];
  }
  interface GetAccumulatedFulfillmentMethodsAvailabilityResponse {
      /** The accumulated availability of all fulfillment methods. */
      availability?: Availability;
  }
  /** Encapsulates all details written to the Greyhound topic when a site's properties are updated. */
  interface SitePropertiesNotification {
      /** The site ID for which this update notification applies. */
      metasiteId?: string;
      /** The actual update event. */
      event?: SitePropertiesEvent;
      /** A convenience set of mappings from the MetaSite ID to its constituent services. */
      translations?: Translation[];
      /** Context of the notification */
      changeContext?: ChangeContext;
  }
  /** The actual update event for a particular notification. */
  interface SitePropertiesEvent {
      /** Version of the site's properties represented by this update. */
      version?: number;
      /**
       * Set of properties that were updated - corresponds to the fields in "properties".
       * @internal
       */
      fields?: string[];
      /** Updated properties. */
      properties?: Properties;
  }
  interface Properties {
      /** Site categories. */
      categories?: Categories;
      /** Site locale. */
      locale?: Locale$1;
      /**
       * Site language.
       *
       * Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * Site currency format used to bill customers.
       *
       * Three-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       */
      paymentCurrency?: string | null;
      /** Timezone in `America/New_York` format. */
      timeZone?: string | null;
      /** Email address. */
      email?: string | null;
      /** Phone number. */
      phone?: string | null;
      /** Fax number. */
      fax?: string | null;
      /** Address. */
      address?: Address;
      /** Site display name. */
      siteDisplayName?: string | null;
      /** Business name. */
      businessName?: string | null;
      /** Path to the site's logo in Wix Media (without Wix Media base URL). */
      logo?: string | null;
      /** Site description. */
      description?: string | null;
      /**
       * Business schedule. Regular and exceptional time periods when the business is open or the service is available.
       *
       * __Note:__ Not supported by Wix Bookings.
       */
      businessSchedule?: BusinessSchedule;
      /** Supported languages of a site and the primary language. */
      multilingual?: Multilingual;
      /** Cookie policy the site owner defined for their site (before the users interacts with/limits it). */
      consentPolicy?: ConsentPolicy;
      /**
       * Supported values: `FITNESS SERVICE`, `RESTAURANT`, `BLOG`, `STORE`, `EVENT`, `UNKNOWN`.
       *
       * Site business type.
       */
      businessConfig?: string | null;
      /** External site url that uses Wix as its headless business solution */
      externalSiteUrl?: string | null;
      /** Track clicks analytics */
      trackClicksAnalytics?: boolean;
  }
  interface Categories {
      /** Primary site category. */
      primary?: string;
      /** Secondary site category. */
      secondary?: string[];
      /** Business Term Id */
      businessTermId?: string | null;
  }
  interface Locale$1 {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Two-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string;
  }
  interface Address {
      /** Street name. */
      street?: string;
      /** City name. */
      city?: string;
      /** Two-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
      country?: string;
      /** State. */
      state?: string;
      /** Zip or postal code. */
      zip?: string;
      /** Extra information to be displayed in the address. */
      hint?: AddressHint;
      /** Whether this address represents a physical location. */
      isPhysical?: boolean;
      /** Google-formatted version of this address. */
      googleFormattedAddress?: string;
      /** Street number. */
      streetNumber?: string;
      /** Apartment number. */
      apartmentNumber?: string;
      /** Geographic coordinates of location. */
      coordinates?: GeoCoordinates;
  }
  /**
   * Extra information on displayed addresses.
   * This is used for display purposes. Used to add additional data about the address, such as "In the passage".
   * Free text. In addition the user can state where he wants that additional description - before, after, or instead
   * the address string.
   */
  interface AddressHint {
      /** Extra text displayed next to, or instead of, the actual address. */
      text?: string;
      /** Where the extra text should be displayed. */
      placement?: PlacementType;
  }
  /** Where the extra text should be displayed: before, after or instead of the actual address. */
  enum PlacementType {
      BEFORE = "BEFORE",
      AFTER = "AFTER",
      REPLACE = "REPLACE"
  }
  /** Geocoordinates for a particular address. */
  interface GeoCoordinates {
      /** Latitude of the location. Must be between -90 and 90. */
      latitude?: number;
      /** Longitude of the location. Must be between -180 and 180. */
      longitude?: number;
  }
  /** Business schedule. Regular and exceptional time periods when the business is open or the service is available. */
  interface BusinessSchedule {
      /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
      periods?: TimePeriod[];
      /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
      specialHourPeriod?: SpecialHourPeriod[];
  }
  /** Weekly recurring time periods when the business is regularly open or the service is available. */
  interface TimePeriod {
      /** Day of the week the period starts on. */
      openDay?: DayOfWeek;
      /**
       * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
       * midnight at the end of the specified day.
       */
      openTime?: string;
      /** Day of the week the period ends on. */
      closeDay?: DayOfWeek;
      /**
       * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
       * midnight at the end of the specified day.
       *
       * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
       */
      closeTime?: string;
  }
  /** Enumerates the days of the week. */
  enum DayOfWeek {
      MONDAY = "MONDAY",
      TUESDAY = "TUESDAY",
      WEDNESDAY = "WEDNESDAY",
      THURSDAY = "THURSDAY",
      FRIDAY = "FRIDAY",
      SATURDAY = "SATURDAY",
      SUNDAY = "SUNDAY"
  }
  /** Exception to the business's regular hours. The business can be open or closed during the exception. */
  interface SpecialHourPeriod {
      /** Start date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      startDate?: string;
      /** End date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      endDate?: string;
      /**
       * Whether the business is closed (or the service is not available) during the exception.
       *
       * Default: `true`.
       */
      isClosed?: boolean;
      /** Additional info about the exception. For example, "We close earlier on New Year's Eve." */
      comment?: string;
  }
  interface Multilingual {
      /** Supported languages list. */
      supportedLanguages?: SupportedLanguage[];
      /** Whether to redirect to user language. */
      autoRedirect?: boolean;
  }
  interface SupportedLanguage {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Locale. */
      locale?: Locale$1;
      /** Whether the supported language is the primary language for the site. */
      isPrimary?: boolean;
      /** Language icon. */
      countryCode?: string;
      /** How the language will be resolved. For internal use. */
      resolutionMethod?: ResolutionMethod;
  }
  enum ResolutionMethod {
      QUERY_PARAM = "QUERY_PARAM",
      SUBDOMAIN = "SUBDOMAIN",
      SUBDIRECTORY = "SUBDIRECTORY"
  }
  interface ConsentPolicy {
      /** Whether the site uses cookies that are essential to site operation. */
      essential?: boolean | null;
      /** Whether the site uses cookies that affect site performance and other functional measurements. */
      functional?: boolean | null;
      /** Whether the site uses cookies that collect analytics about how the site is used (in order to improve it). */
      analytics?: boolean | null;
      /** Whether the site uses cookies that collect information allowing better customization of the experience for a current visitor. */
      advertising?: boolean | null;
      /** CCPA compliance flag. */
      dataToThirdParty?: boolean | null;
  }
  /** A single mapping from the MetaSite ID to a particular service. */
  interface Translation {
      /** The service type. */
      serviceType?: string;
      /** The application definition ID; this only applies to services of type ThirdPartyApps. */
      appDefId?: string;
      /** The instance ID of the service. */
      instanceId?: string;
  }
  interface ChangeContext extends ChangeContextPayloadOneOf {
      /** Properties were updated. */
      propertiesChange?: PropertiesChange;
      /** Default properties were created on site creation. */
      siteCreated?: SiteCreated;
      /** Properties were cloned on site cloning. */
      siteCloned?: SiteCloned;
  }
  /** @oneof */
  interface ChangeContextPayloadOneOf {
      /** Properties were updated. */
      propertiesChange?: PropertiesChange;
      /** Default properties were created on site creation. */
      siteCreated?: SiteCreated;
      /** Properties were cloned on site cloning. */
      siteCloned?: SiteCloned;
  }
  interface PropertiesChange {
  }
  interface SiteCreated {
      /** Origin template site id. */
      originTemplateId?: string | null;
  }
  interface SiteCloned {
      /** Origin site id. */
      originMetaSiteId?: string;
  }
  interface Empty {
  }
  interface DomainEvent$1 extends DomainEventBodyOneOf$1 {
      createdEvent?: EntityCreatedEvent$1;
      updatedEvent?: EntityUpdatedEvent$1;
      deletedEvent?: EntityDeletedEvent$1;
      actionEvent?: ActionEvent$1;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf$1 {
      createdEvent?: EntityCreatedEvent$1;
      updatedEvent?: EntityUpdatedEvent$1;
      deletedEvent?: EntityDeletedEvent$1;
      actionEvent?: ActionEvent$1;
  }
  interface EntityCreatedEvent$1 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$1 {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$1 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$1 {
      bodyAsJson?: string;
  }
  interface MessageEnvelope$1 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$1;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$1 extends IdentificationDataIdOneOf$1 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$1;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$1 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$1 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Creates a new fulfillment method.
   *
   * >**Note:** `fulfillment_method.availability.time_zone` uses the time zone specified in the [`language and regions`](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsettings/language-and-region) settings in the dashboard, regardless of the value provided.
   * @param fulfillmentMethod - Fulfillment method to create.
   * @public
   * @documentationMaturity preview
   * @requiredField fulfillmentMethod
   * @requiredField fulfillmentMethod.availability.timeZone
   * @requiredField fulfillmentMethod.deliveryOptions.deliveryArea
   * @requiredField fulfillmentMethod.deliveryOptions.deliveryArea.postalCodeOptions.countryCode
   * @requiredField fulfillmentMethod.deliveryOptions.deliveryArea.radiusOptions.centerPointAddress
   * @requiredField fulfillmentMethod.deliveryOptions.deliveryArea.radiusOptions.value
   * @requiredField fulfillmentMethod.pickupOptions.address
   * @adminMethod
   * @returns The created fulfillment method.
   */
  function createFulfillmentMethod(fulfillmentMethod: FulfillmentMethod): Promise<FulfillmentMethod>;
  /**
   * Retrieves a fulfillment method.
   * @param fulfillmentMethodId - The ID of the fulfillment method to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField fulfillmentMethodId
   * @returns The retrieved fulfillment method.
   */
  function getFulfillmentMethod(fulfillmentMethodId: string): Promise<FulfillmentMethod>;
  /**
   * Updates a fulfillment method.
   *
   * Each time the fulfillment method is updated, revision increments by 1. The existing revision must be included when updating the fulfillment method. This ensures you're working with the latest fulfillment method information, and it prevents unintended overwrites.
   * @param _id - Fulfillment method ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField fulfillmentMethod
   * @requiredField fulfillmentMethod.revision
   * @param fulfillmentMethod - Fulfillment method information to update.
   * @adminMethod
   * @returns The updated fulfillment method.
   */
  function updateFulfillmentMethod(_id: string | null, fulfillmentMethod: UpdateFulfillmentMethod, options?: UpdateFulfillmentMethodOptions): Promise<FulfillmentMethod>;
  interface UpdateFulfillmentMethod {
      /** Data specific for pickup fulfillment method. */
      pickupOptions?: PickupInfo;
      /** Data specific for delivery fulfillment method. */
      deliveryOptions?: DeliveryInfo;
      /**
       * Fulfillment method ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * The current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the fulfillment method was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the fulfillment method was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Type of fulfillment method. */
      type?: FulfillmentMethodType;
      /**
       * The minimum order price to qualify for using this fulfillment method.
       * @internal
       */
      minimumOrderAmount?: string | null;
      /** Fulfillment method name. */
      name?: string | null;
      /** Whether the fulfillment method is enabled. */
      enabled?: boolean | null;
      /** Fee for using this fulfillment method. */
      fee?: string | null;
      /** Availability of this fulfillment method. */
      availability?: Availability;
      /** Minimum order price to qualify for using this fulfillment method. */
      minOrderPrice?: string | null;
  }
  interface UpdateFulfillmentMethodOptions {
      /**
       * Field mask of the fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes a fulfillment method.
   * @param fulfillmentMethodId - The ID of the fulfillment method to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField fulfillmentMethodId
   * @adminMethod
   */
  function deleteFulfillmentMethod(fulfillmentMethodId: string): Promise<void>;
  /**
   * Creates a query to retrieve a list of fulfillment methods.
   *
   * The [`queryFulfillmentMethods()`](https://www.wix.com/velo/reference/wix-restaurants-v2/fulfillmentmethods/queryfulfillmentmethods) function builds a query to retrieve a list of reservations and returns a `FulfillmentMethodsQueryBuilder` object.
   *
   * The returned object contains the query definition, which is used to run the query using the [`find()`](https://www.wix.com/velo/reference/wix-restaurants-v2/fulfillmentmethods/fulfillmentmethodsquerybuilder/find) function.
   *
   * You can refine the query by chaining `FulfillmentMethodsQueryBuilder` functions onto the query. `FulfillmentMethodsQueryBuilder` functions enable you to filter, sort, and control the results that `queryFulfillmentMethods()` returns.
   *
   * The following `FulfillmentMethodsQueryBuilder` functions are supported for `queryFulfillmentMethods()`. For a full description of the reservation object, see the object returned for the [`items`](https://www.wix.com/velo/reference/wix-restaurants-v2/fulfillmentmethods/fulfillmentmethodsqueryresult/items) property in [`FulfillmentMethodsQueryResult`](https://www.wix.com/velo/reference/wix-restaurants-v2/fulfillmentmethods/fulfillmentmethodsqueryresult).
   * @public
   * @documentationMaturity preview
   */
  function queryFulfillmentMethods(options?: QueryFulfillmentMethodsOptions): FulfillmentMethodsQueryBuilder;
  interface QueryFulfillmentMethodsOptions {
      /**
       * Projection mask of the fields to return.
       * @internal
       */
      projectionMask?: string[] | undefined;
  }
  interface QueryCursorResult$1 {
      cursors: CommonCursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface FulfillmentMethodsQueryResult extends QueryCursorResult$1 {
      items: FulfillmentMethod[];
      query: FulfillmentMethodsQueryBuilder;
      next: () => Promise<FulfillmentMethodsQueryResult>;
      prev: () => Promise<FulfillmentMethodsQueryResult>;
  }
  interface FulfillmentMethodsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'type' | 'name' | 'enabled' | 'fee' | 'minOrderPrice', value: any) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'type' | 'name' | 'enabled' | 'fee' | 'minOrderPrice', value: any) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'name' | 'fee' | 'minOrderPrice', value: string) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'type' | 'name' | 'enabled' | 'fee' | 'minOrderPrice', value: any[]) => FulfillmentMethodsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'type' | 'name' | 'enabled' | 'fee' | 'minOrderPrice', value: any) => FulfillmentMethodsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'type' | 'name' | 'enabled' | 'fee' | 'minOrderPrice', value: boolean) => FulfillmentMethodsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | '_createdDate' | '_updatedDate' | 'type' | 'name' | 'enabled' | 'fee' | 'minOrderPrice'>) => FulfillmentMethodsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | '_createdDate' | '_updatedDate' | 'type' | 'name' | 'enabled' | 'fee' | 'minOrderPrice'>) => FulfillmentMethodsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => FulfillmentMethodsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => FulfillmentMethodsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<FulfillmentMethodsQueryResult>;
  }
  /**
   * Retrieves a list of up to 100 fulfillment methods.
   * @public
   * @documentationMaturity preview
   * @param options - Options for listing the fulfillment methods.
   */
  function listFulfillmentMethods(options?: ListFulfillmentMethodsOptions): Promise<ListFulfillmentMethodsResponse>;
  interface ListFulfillmentMethodsOptions {
      /**
       * The address by which to filter delivery fulfillment methods.
       * @internal
       */
      address?: CommonAddress;
      /** Cursor paging */
      cursorPaging?: CommonCursorPaging;
  }
  /**
   * Retrieves a list of up to 100 fulfillment methods available for a given address.
   *
   * The response will only include:
   * - Non-delivery fulfillment methods.
   * - Delivery fulfillment methods that are available to the given address according to their delivery areas.
   * @public
   * @documentationMaturity preview
   * @param options - Options for listing the available fulfillment methods.
   */
  function listAvailableFulfillmentMethodsForAddress(options?: ListAvailableFulfillmentMethodsForAddressOptions): Promise<ListAvailableFulfillmentMethodsForAddressResponse>;
  interface ListAvailableFulfillmentMethodsForAddressOptions {
      /** The address by which to filter delivery fulfillment methods. */
      address?: CommonAddress;
      /** Cursor paging */
      cursorPaging?: CommonCursorPaging;
      /** If provided, only fulfillment methods with the given IDs will be returned. */
      fulfillmentMethodIds?: string[];
  }
  /**
   * Retrieves the accumulated availability of all fulfillment methods.
   * @internal
   * @documentationMaturity preview
   */
  function getAccumulatedFulfillmentMethodsAvailability(options?: GetAccumulatedFulfillmentMethodsAvailabilityOptions): Promise<GetAccumulatedFulfillmentMethodsAvailabilityResponse>;
  interface GetAccumulatedFulfillmentMethodsAvailabilityOptions {
      /** fulfillment method ids to check availability for. */
      fulfillmentMethodIds?: string[];
  }
  
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethod = FulfillmentMethod;
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodMethodOptionsOneOf = FulfillmentMethodMethodOptionsOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodType = FulfillmentMethodType;
  const restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodType: typeof FulfillmentMethodType;
  type restaurantsV1FulfillmentMethod_universal_d_PickupInfo = PickupInfo;
  type restaurantsV1FulfillmentMethod_universal_d_CommonAddress = CommonAddress;
  type restaurantsV1FulfillmentMethod_universal_d_CommonAddressStreetOneOf = CommonAddressStreetOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_StreetAddress = StreetAddress;
  type restaurantsV1FulfillmentMethod_universal_d_AddressLocation = AddressLocation;
  type restaurantsV1FulfillmentMethod_universal_d_Subdivision = Subdivision;
  type restaurantsV1FulfillmentMethod_universal_d_SubdivisionType = SubdivisionType;
  const restaurantsV1FulfillmentMethod_universal_d_SubdivisionType: typeof SubdivisionType;
  type restaurantsV1FulfillmentMethod_universal_d_DeliveryInfo = DeliveryInfo;
  type restaurantsV1FulfillmentMethod_universal_d_DeliveryArea = DeliveryArea;
  type restaurantsV1FulfillmentMethod_universal_d_DeliveryAreaAreaOptionsOneOf = DeliveryAreaAreaOptionsOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_Radius = Radius;
  type restaurantsV1FulfillmentMethod_universal_d_Unit = Unit;
  const restaurantsV1FulfillmentMethod_universal_d_Unit: typeof Unit;
  type restaurantsV1FulfillmentMethod_universal_d_PostalCode = PostalCode;
  type restaurantsV1FulfillmentMethod_universal_d_CustomArea = CustomArea;
  type restaurantsV1FulfillmentMethod_universal_d_Availability = Availability;
  type restaurantsV1FulfillmentMethod_universal_d_DayOfWeekAvailability = DayOfWeekAvailability;
  type restaurantsV1FulfillmentMethod_universal_d_EntitiesDayOfWeek = EntitiesDayOfWeek;
  const restaurantsV1FulfillmentMethod_universal_d_EntitiesDayOfWeek: typeof EntitiesDayOfWeek;
  type restaurantsV1FulfillmentMethod_universal_d_TimeOfDayRange = TimeOfDayRange;
  type restaurantsV1FulfillmentMethod_universal_d_TimeOfDay = TimeOfDay;
  type restaurantsV1FulfillmentMethod_universal_d_InvalidateCache = InvalidateCache;
  type restaurantsV1FulfillmentMethod_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_App = App;
  type restaurantsV1FulfillmentMethod_universal_d_Page = Page;
  type restaurantsV1FulfillmentMethod_universal_d_URI = URI;
  type restaurantsV1FulfillmentMethod_universal_d_File = File;
  type restaurantsV1FulfillmentMethod_universal_d_CreateFulfillmentMethodRequest = CreateFulfillmentMethodRequest;
  type restaurantsV1FulfillmentMethod_universal_d_CreateFulfillmentMethodResponse = CreateFulfillmentMethodResponse;
  type restaurantsV1FulfillmentMethod_universal_d_GetFulfillmentMethodRequest = GetFulfillmentMethodRequest;
  type restaurantsV1FulfillmentMethod_universal_d_GetFulfillmentMethodResponse = GetFulfillmentMethodResponse;
  type restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethodRequest = UpdateFulfillmentMethodRequest;
  type restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethodResponse = UpdateFulfillmentMethodResponse;
  type restaurantsV1FulfillmentMethod_universal_d_DeleteFulfillmentMethodRequest = DeleteFulfillmentMethodRequest;
  type restaurantsV1FulfillmentMethod_universal_d_DeleteFulfillmentMethodResponse = DeleteFulfillmentMethodResponse;
  type restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsRequest = QueryFulfillmentMethodsRequest;
  type restaurantsV1FulfillmentMethod_universal_d_CommonCursorPaging = CommonCursorPaging;
  type restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsResponse = QueryFulfillmentMethodsResponse;
  type restaurantsV1FulfillmentMethod_universal_d_CommonCursorPagingMetadata = CommonCursorPagingMetadata;
  type restaurantsV1FulfillmentMethod_universal_d_CommonCursors = CommonCursors;
  type restaurantsV1FulfillmentMethod_universal_d_ListFulfillmentMethodsRequest = ListFulfillmentMethodsRequest;
  type restaurantsV1FulfillmentMethod_universal_d_ListFulfillmentMethodsResponse = ListFulfillmentMethodsResponse;
  type restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressRequest = ListAvailableFulfillmentMethodsForAddressRequest;
  type restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressResponse = ListAvailableFulfillmentMethodsForAddressResponse;
  type restaurantsV1FulfillmentMethod_universal_d_GetAccumulatedFulfillmentMethodsAvailabilityRequest = GetAccumulatedFulfillmentMethodsAvailabilityRequest;
  type restaurantsV1FulfillmentMethod_universal_d_GetAccumulatedFulfillmentMethodsAvailabilityResponse = GetAccumulatedFulfillmentMethodsAvailabilityResponse;
  type restaurantsV1FulfillmentMethod_universal_d_SitePropertiesNotification = SitePropertiesNotification;
  type restaurantsV1FulfillmentMethod_universal_d_SitePropertiesEvent = SitePropertiesEvent;
  type restaurantsV1FulfillmentMethod_universal_d_Properties = Properties;
  type restaurantsV1FulfillmentMethod_universal_d_Categories = Categories;
  type restaurantsV1FulfillmentMethod_universal_d_Address = Address;
  type restaurantsV1FulfillmentMethod_universal_d_AddressHint = AddressHint;
  type restaurantsV1FulfillmentMethod_universal_d_PlacementType = PlacementType;
  const restaurantsV1FulfillmentMethod_universal_d_PlacementType: typeof PlacementType;
  type restaurantsV1FulfillmentMethod_universal_d_GeoCoordinates = GeoCoordinates;
  type restaurantsV1FulfillmentMethod_universal_d_BusinessSchedule = BusinessSchedule;
  type restaurantsV1FulfillmentMethod_universal_d_TimePeriod = TimePeriod;
  type restaurantsV1FulfillmentMethod_universal_d_DayOfWeek = DayOfWeek;
  const restaurantsV1FulfillmentMethod_universal_d_DayOfWeek: typeof DayOfWeek;
  type restaurantsV1FulfillmentMethod_universal_d_SpecialHourPeriod = SpecialHourPeriod;
  type restaurantsV1FulfillmentMethod_universal_d_Multilingual = Multilingual;
  type restaurantsV1FulfillmentMethod_universal_d_SupportedLanguage = SupportedLanguage;
  type restaurantsV1FulfillmentMethod_universal_d_ResolutionMethod = ResolutionMethod;
  const restaurantsV1FulfillmentMethod_universal_d_ResolutionMethod: typeof ResolutionMethod;
  type restaurantsV1FulfillmentMethod_universal_d_ConsentPolicy = ConsentPolicy;
  type restaurantsV1FulfillmentMethod_universal_d_Translation = Translation;
  type restaurantsV1FulfillmentMethod_universal_d_ChangeContext = ChangeContext;
  type restaurantsV1FulfillmentMethod_universal_d_ChangeContextPayloadOneOf = ChangeContextPayloadOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_PropertiesChange = PropertiesChange;
  type restaurantsV1FulfillmentMethod_universal_d_SiteCreated = SiteCreated;
  type restaurantsV1FulfillmentMethod_universal_d_SiteCloned = SiteCloned;
  type restaurantsV1FulfillmentMethod_universal_d_Empty = Empty;
  const restaurantsV1FulfillmentMethod_universal_d_createFulfillmentMethod: typeof createFulfillmentMethod;
  const restaurantsV1FulfillmentMethod_universal_d_getFulfillmentMethod: typeof getFulfillmentMethod;
  const restaurantsV1FulfillmentMethod_universal_d_updateFulfillmentMethod: typeof updateFulfillmentMethod;
  type restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethod = UpdateFulfillmentMethod;
  type restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethodOptions = UpdateFulfillmentMethodOptions;
  const restaurantsV1FulfillmentMethod_universal_d_deleteFulfillmentMethod: typeof deleteFulfillmentMethod;
  const restaurantsV1FulfillmentMethod_universal_d_queryFulfillmentMethods: typeof queryFulfillmentMethods;
  type restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsOptions = QueryFulfillmentMethodsOptions;
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodsQueryResult = FulfillmentMethodsQueryResult;
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodsQueryBuilder = FulfillmentMethodsQueryBuilder;
  const restaurantsV1FulfillmentMethod_universal_d_listFulfillmentMethods: typeof listFulfillmentMethods;
  type restaurantsV1FulfillmentMethod_universal_d_ListFulfillmentMethodsOptions = ListFulfillmentMethodsOptions;
  const restaurantsV1FulfillmentMethod_universal_d_listAvailableFulfillmentMethodsForAddress: typeof listAvailableFulfillmentMethodsForAddress;
  type restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressOptions = ListAvailableFulfillmentMethodsForAddressOptions;
  const restaurantsV1FulfillmentMethod_universal_d_getAccumulatedFulfillmentMethodsAvailability: typeof getAccumulatedFulfillmentMethodsAvailability;
  type restaurantsV1FulfillmentMethod_universal_d_GetAccumulatedFulfillmentMethodsAvailabilityOptions = GetAccumulatedFulfillmentMethodsAvailabilityOptions;
  namespace restaurantsV1FulfillmentMethod_universal_d {
    export {
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethod as FulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodMethodOptionsOneOf as FulfillmentMethodMethodOptionsOneOf,
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodType as FulfillmentMethodType,
      restaurantsV1FulfillmentMethod_universal_d_PickupInfo as PickupInfo,
      restaurantsV1FulfillmentMethod_universal_d_CommonAddress as CommonAddress,
      restaurantsV1FulfillmentMethod_universal_d_CommonAddressStreetOneOf as CommonAddressStreetOneOf,
      restaurantsV1FulfillmentMethod_universal_d_StreetAddress as StreetAddress,
      restaurantsV1FulfillmentMethod_universal_d_AddressLocation as AddressLocation,
      restaurantsV1FulfillmentMethod_universal_d_Subdivision as Subdivision,
      restaurantsV1FulfillmentMethod_universal_d_SubdivisionType as SubdivisionType,
      restaurantsV1FulfillmentMethod_universal_d_DeliveryInfo as DeliveryInfo,
      restaurantsV1FulfillmentMethod_universal_d_DeliveryArea as DeliveryArea,
      restaurantsV1FulfillmentMethod_universal_d_DeliveryAreaAreaOptionsOneOf as DeliveryAreaAreaOptionsOneOf,
      Type$1 as Type,
      restaurantsV1FulfillmentMethod_universal_d_Radius as Radius,
      restaurantsV1FulfillmentMethod_universal_d_Unit as Unit,
      restaurantsV1FulfillmentMethod_universal_d_PostalCode as PostalCode,
      restaurantsV1FulfillmentMethod_universal_d_CustomArea as CustomArea,
      restaurantsV1FulfillmentMethod_universal_d_Availability as Availability,
      restaurantsV1FulfillmentMethod_universal_d_DayOfWeekAvailability as DayOfWeekAvailability,
      restaurantsV1FulfillmentMethod_universal_d_EntitiesDayOfWeek as EntitiesDayOfWeek,
      restaurantsV1FulfillmentMethod_universal_d_TimeOfDayRange as TimeOfDayRange,
      restaurantsV1FulfillmentMethod_universal_d_TimeOfDay as TimeOfDay,
      restaurantsV1FulfillmentMethod_universal_d_InvalidateCache as InvalidateCache,
      restaurantsV1FulfillmentMethod_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      restaurantsV1FulfillmentMethod_universal_d_App as App,
      restaurantsV1FulfillmentMethod_universal_d_Page as Page,
      restaurantsV1FulfillmentMethod_universal_d_URI as URI,
      restaurantsV1FulfillmentMethod_universal_d_File as File,
      restaurantsV1FulfillmentMethod_universal_d_CreateFulfillmentMethodRequest as CreateFulfillmentMethodRequest,
      restaurantsV1FulfillmentMethod_universal_d_CreateFulfillmentMethodResponse as CreateFulfillmentMethodResponse,
      restaurantsV1FulfillmentMethod_universal_d_GetFulfillmentMethodRequest as GetFulfillmentMethodRequest,
      restaurantsV1FulfillmentMethod_universal_d_GetFulfillmentMethodResponse as GetFulfillmentMethodResponse,
      restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethodRequest as UpdateFulfillmentMethodRequest,
      restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethodResponse as UpdateFulfillmentMethodResponse,
      restaurantsV1FulfillmentMethod_universal_d_DeleteFulfillmentMethodRequest as DeleteFulfillmentMethodRequest,
      restaurantsV1FulfillmentMethod_universal_d_DeleteFulfillmentMethodResponse as DeleteFulfillmentMethodResponse,
      restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsRequest as QueryFulfillmentMethodsRequest,
      CursorQuery$1 as CursorQuery,
      CursorQueryPagingMethodOneOf$1 as CursorQueryPagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      restaurantsV1FulfillmentMethod_universal_d_CommonCursorPaging as CommonCursorPaging,
      restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsResponse as QueryFulfillmentMethodsResponse,
      restaurantsV1FulfillmentMethod_universal_d_CommonCursorPagingMetadata as CommonCursorPagingMetadata,
      restaurantsV1FulfillmentMethod_universal_d_CommonCursors as CommonCursors,
      restaurantsV1FulfillmentMethod_universal_d_ListFulfillmentMethodsRequest as ListFulfillmentMethodsRequest,
      restaurantsV1FulfillmentMethod_universal_d_ListFulfillmentMethodsResponse as ListFulfillmentMethodsResponse,
      restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressRequest as ListAvailableFulfillmentMethodsForAddressRequest,
      restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressResponse as ListAvailableFulfillmentMethodsForAddressResponse,
      restaurantsV1FulfillmentMethod_universal_d_GetAccumulatedFulfillmentMethodsAvailabilityRequest as GetAccumulatedFulfillmentMethodsAvailabilityRequest,
      restaurantsV1FulfillmentMethod_universal_d_GetAccumulatedFulfillmentMethodsAvailabilityResponse as GetAccumulatedFulfillmentMethodsAvailabilityResponse,
      restaurantsV1FulfillmentMethod_universal_d_SitePropertiesNotification as SitePropertiesNotification,
      restaurantsV1FulfillmentMethod_universal_d_SitePropertiesEvent as SitePropertiesEvent,
      restaurantsV1FulfillmentMethod_universal_d_Properties as Properties,
      restaurantsV1FulfillmentMethod_universal_d_Categories as Categories,
      Locale$1 as Locale,
      restaurantsV1FulfillmentMethod_universal_d_Address as Address,
      restaurantsV1FulfillmentMethod_universal_d_AddressHint as AddressHint,
      restaurantsV1FulfillmentMethod_universal_d_PlacementType as PlacementType,
      restaurantsV1FulfillmentMethod_universal_d_GeoCoordinates as GeoCoordinates,
      restaurantsV1FulfillmentMethod_universal_d_BusinessSchedule as BusinessSchedule,
      restaurantsV1FulfillmentMethod_universal_d_TimePeriod as TimePeriod,
      restaurantsV1FulfillmentMethod_universal_d_DayOfWeek as DayOfWeek,
      restaurantsV1FulfillmentMethod_universal_d_SpecialHourPeriod as SpecialHourPeriod,
      restaurantsV1FulfillmentMethod_universal_d_Multilingual as Multilingual,
      restaurantsV1FulfillmentMethod_universal_d_SupportedLanguage as SupportedLanguage,
      restaurantsV1FulfillmentMethod_universal_d_ResolutionMethod as ResolutionMethod,
      restaurantsV1FulfillmentMethod_universal_d_ConsentPolicy as ConsentPolicy,
      restaurantsV1FulfillmentMethod_universal_d_Translation as Translation,
      restaurantsV1FulfillmentMethod_universal_d_ChangeContext as ChangeContext,
      restaurantsV1FulfillmentMethod_universal_d_ChangeContextPayloadOneOf as ChangeContextPayloadOneOf,
      restaurantsV1FulfillmentMethod_universal_d_PropertiesChange as PropertiesChange,
      restaurantsV1FulfillmentMethod_universal_d_SiteCreated as SiteCreated,
      restaurantsV1FulfillmentMethod_universal_d_SiteCloned as SiteCloned,
      restaurantsV1FulfillmentMethod_universal_d_Empty as Empty,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      MessageEnvelope$1 as MessageEnvelope,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
      restaurantsV1FulfillmentMethod_universal_d_createFulfillmentMethod as createFulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_getFulfillmentMethod as getFulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_updateFulfillmentMethod as updateFulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethod as UpdateFulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethodOptions as UpdateFulfillmentMethodOptions,
      restaurantsV1FulfillmentMethod_universal_d_deleteFulfillmentMethod as deleteFulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_queryFulfillmentMethods as queryFulfillmentMethods,
      restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsOptions as QueryFulfillmentMethodsOptions,
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodsQueryResult as FulfillmentMethodsQueryResult,
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodsQueryBuilder as FulfillmentMethodsQueryBuilder,
      restaurantsV1FulfillmentMethod_universal_d_listFulfillmentMethods as listFulfillmentMethods,
      restaurantsV1FulfillmentMethod_universal_d_ListFulfillmentMethodsOptions as ListFulfillmentMethodsOptions,
      restaurantsV1FulfillmentMethod_universal_d_listAvailableFulfillmentMethodsForAddress as listAvailableFulfillmentMethodsForAddress,
      restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressOptions as ListAvailableFulfillmentMethodsForAddressOptions,
      restaurantsV1FulfillmentMethod_universal_d_getAccumulatedFulfillmentMethodsAvailability as getAccumulatedFulfillmentMethodsAvailability,
      restaurantsV1FulfillmentMethod_universal_d_GetAccumulatedFulfillmentMethodsAvailabilityOptions as GetAccumulatedFulfillmentMethodsAvailabilityOptions,
    };
  }
  
  interface Rule extends RuleValueOneOf, RuleRequirementsOneOf, RuleConditionsOneOf, RuleConditionTypeOptionsOneOf, RuleTaxesOneOf {
      /** Fixed fee. Must hold a positive value. */
      amount?: Money;
      /** Percentage fee. For example, `5` represents a 5% fee applied to the order's total. */
      percentage?: string | null;
      /** Fixed fee. Must hold a positive value. */
      fixedFee?: CommonMoney;
      /**
       * Percentage fee. For example, 5 represents a 5% fee applied to the order's total.
       *
       * Min: `0`.
       *
       * Max: `100`.
       */
      percentageFee?: string | null;
      /** Single condition that must be met for the rule to be applied to an order. */
      condition?: Condition;
      /** Binary tree of conditions. Use the operator to indicate whether only one or both conditions must be met in order for a service fee rule to be applied to an order. */
      conditionTree?: ConditionTree;
      /** Single condition that must be met for the rule to be applied to an order. */
      conditionOptions?: Condition;
      /** Binary tree of conditions. Use the operator to indicate whether only one or both conditions must be met in order for a service fee rule to be applied to an order. */
      conditionTreeOptions?: ConditionTree;
      /** Percentage value to apply as a custom tax rate. Range: [0-100]. */
      customTaxRate?: string | null;
      /** Tax group ID. Internal only. */
      taxGroupId?: string | null;
      /**
       * Rule ID.
       * @readonly
       */
      _id?: string | null;
      /** ID of the restaurant’s [location](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/introduction). */
      locationId?: string | null;
      /** Rule name. */
      name?: string | null;
      /**
       * Date and time the rule was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the rule was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Percentage value to apply as a custom tax rate. For example, `5` respresents a 5% fee applied to the order's total. <br />
       * Min: '0'. <br />
       * Max: `100`.
       */
      taxRate?: string | null;
      /** Specifies the type of condition. */
      conditionsType?: ConditionsType;
      /** Specifies the type of condition. */
      conditionType?: ConditionType;
      /** Whether the rule is enabled. If `true`, the rule is evaluated when service fees are calculated. If `false`, the rule will not be evaluated when service fees are calculated. */
      enabled?: boolean | null;
      /**
       * Revision number. Increments by 1 each time the rule is updated.
       * To prevent conflicting changes, the existing `revision` must be used when updating a rule.
       * @readonly
       */
      revision?: string | null;
      /** DEPRECATED. Defines the app that the rule is connected to. */
      label?: string | null;
      /** Defines the app that the rule is connected to. */
      appId?: string | null;
      /**
       * Rounding strategy to apply to fee and tax calculation.
       *
       * Supported values:
       *
       * - `"HALF_UP"`: Rounds up any number exactly halfway between two integers. For example, `2.5` rounds to `3`, and `3.5` and rounds to `4`.
       * - `"HALF_EVEN"`: Rounds such numbers to the nearest even integer. For example, `2.5` rounds to `2`, but `3.5` rounds to `4`.
       * - `"UNKNOWN_ROUNDING_STRATEGY"`
       */
      roundingStrategy?: RoundingStrategy;
  }
  /** @oneof */
  interface RuleValueOneOf {
      /** Fixed fee. Must hold a positive value. */
      amount?: Money;
      /** Percentage fee. For example, `5` represents a 5% fee applied to the order's total. */
      percentage?: string | null;
  }
  /** @oneof */
  interface RuleRequirementsOneOf {
      /** Fixed fee. Must hold a positive value. */
      fixedFee?: CommonMoney;
      /**
       * Percentage fee. For example, 5 represents a 5% fee applied to the order's total.
       *
       * Min: `0`.
       *
       * Max: `100`.
       */
      percentageFee?: string | null;
  }
  /** @oneof */
  interface RuleConditionsOneOf {
      /** Single condition that must be met for the rule to be applied to an order. */
      condition?: Condition;
      /** Binary tree of conditions. Use the operator to indicate whether only one or both conditions must be met in order for a service fee rule to be applied to an order. */
      conditionTree?: ConditionTree;
  }
  /** @oneof */
  interface RuleConditionTypeOptionsOneOf {
      /** Single condition that must be met for the rule to be applied to an order. */
      conditionOptions?: Condition;
      /** Binary tree of conditions. Use the operator to indicate whether only one or both conditions must be met in order for a service fee rule to be applied to an order. */
      conditionTreeOptions?: ConditionTree;
  }
  /** @oneof */
  interface RuleTaxesOneOf {
      /** Percentage value to apply as a custom tax rate. Range: [0-100]. */
      customTaxRate?: string | null;
      /** Tax group ID. Internal only. */
      taxGroupId?: string | null;
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface Money {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string;
      /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
      currency?: string;
      /** Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative. */
      formattedValue?: string | null;
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface CommonMoney {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string;
      /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
      currency?: string;
      /** Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative. */
      formattedValue?: string | null;
  }
  interface Condition extends ConditionValueOneOf {
      /**
       * Contains a numeric value and an operation.
       *
       * Required if `expectedFieldType` is `NUMBER`.
       */
      number?: _Number;
      /**
       * Contains an array of strings to compare with the value of the specified field. If the value of the field matches a string in the array, the condition is considered met.
       *
       * Required if `expectedFieldType` is `LIST`.
       */
      list?: List;
      /** Path of the field in the order entity that this condition will evaluate. For example, `priceSummary.subtotal`. */
      path?: string;
      /** Path of the field in the order entity that this condition will evaluate. For example, `priceSummary.subtotal`. */
      orderFieldPath?: string;
      /** Type of the field specified in `orderFieldPath`. For example, the type of `priceSummary.subtotal` is `"NUMBER"`). */
      expectedType?: ExpectedType;
      /**
       * Type of the field specified in `orderFieldPath`. For example, the type of `priceSummary.subtotal` is `"NUMBER"`).
       *
       * Supported values: `"UNKNOWN_EXPECTED_FIELD_TYPE"`, `"NUMBER"`, `"LIST"`, `"STRING"`.
       */
      expectedFieldType?: ExpectedFieldType;
  }
  /** @oneof */
  interface ConditionValueOneOf {
      /**
       * Contains a numeric value and an operation.
       *
       * Required if `expectedFieldType` is `NUMBER`.
       */
      number?: _Number;
      /**
       * Contains an array of strings to compare with the value of the specified field. If the value of the field matches a string in the array, the condition is considered met.
       *
       * Required if `expectedFieldType` is `LIST`.
       */
      list?: List;
  }
  interface ExpectedType {
      /**
       * Type of the field specified in `orderFieldPath`.
       *
       * Supported values: `"NUMBER"`, `"LIST"`, `"STRING"`.
       */
      value?: Value;
  }
  enum Value {
      /** Represents a number value. */
      NUMBER = "NUMBER",
      /** Represents a list of strings values - Not supported yet. */
      LIST = "LIST",
      /** Represents a string value. */
      STRING = "STRING"
  }
  enum ExpectedFieldType {
      /** Unknown expected field type */
      UNKNOWN_EXPECTED_FIELD_TYPE = "UNKNOWN_EXPECTED_FIELD_TYPE",
      /** Represents a number value. */
      NUMBER = "NUMBER",
      /** Represents a list of strings values - Not supported yet. */
      LIST = "LIST",
      /** Represents a string value. */
      STRING = "STRING"
  }
  interface _Number {
      /** Numeric value to compare with the value of the specified field. */
      value?: number;
      /**
       * Operation to use.
       *
       * Supported values:
       *
       * - `"EQ"`: Equal to.
       * - `"LT"`: Strictly less than.
       * - `"LE"`: Less than or equal to.
       * - `"GT"`: Strictly greater than.
       * - `"GE"`: Greater than or equal to.
       */
      operation?: Operation;
  }
  enum Operation {
      /** == */
      EQ = "EQ",
      /** < */
      LT = "LT",
      /** <= */
      LE = "LE",
      /** > */
      GT = "GT",
      /** >= */
      GE = "GE"
  }
  interface List {
      /** Array of string values to compare with the value of the field. If the value of the fields matches a string in the array, the condition is considered met. */
      values?: string[];
  }
  /** Used to represent a logical condition in the form of a tree structure. */
  interface ConditionTree extends ConditionTreeLeftConditionNodeOneOf, ConditionTreeRightConditionNodeOneOf {
      /** Single condition that must be met for the rule to be applied to an order. */
      leftCondition?: Condition;
      /** Binary tree of conditions. Use the operator to indicate whether only one or both conditions must be met in order for a service fee rule to be applied to an order. */
      leftConditionsTree?: ConditionTree;
      /** Single condition that must be met for the rule to be applied to an order. */
      rightCondition?: Condition;
      /** Binary tree of conditions. Use the operator to indicate whether only one or both conditions must be met in order for a service fee rule to be applied to an order. */
      rightConditionsTree?: ConditionTree;
      /**
       * Specifies the logical operator to use when combining the evaluation of the left and right conditions.
       *
       * Supported values: `"AND"`, `"OR"`.
       */
      operator?: Operator;
  }
  /** @oneof */
  interface ConditionTreeLeftConditionNodeOneOf {
      /** Single condition that must be met for the rule to be applied to an order. */
      leftCondition?: Condition;
      /** Binary tree of conditions. Use the operator to indicate whether only one or both conditions must be met in order for a service fee rule to be applied to an order. */
      leftConditionsTree?: ConditionTree;
  }
  /** @oneof */
  interface ConditionTreeRightConditionNodeOneOf {
      /** Single condition that must be met for the rule to be applied to an order. */
      rightCondition?: Condition;
      /** Binary tree of conditions. Use the operator to indicate whether only one or both conditions must be met in order for a service fee rule to be applied to an order. */
      rightConditionsTree?: ConditionTree;
  }
  enum Operator {
      /** The condition is true if both the left and right sides are true. */
      AND = "AND",
      /** The condition is true if either the left or right side is true. */
      OR = "OR"
  }
  enum ConditionsType {
      /** Indicates that the Rule has no conditions specified. */
      NO_CONDITIONS = "NO_CONDITIONS",
      /** Indicates that the Rule has a single Condition. */
      CONDITION = "CONDITION",
      /** Indicates that the Rule has a complex condition specified as a ConditionTree. */
      CONDITION_TREE = "CONDITION_TREE"
  }
  enum ConditionType {
      /** Indicates that the Rule has no conditions specified. */
      UNDEFINED_CONDITION_TYPE = "UNDEFINED_CONDITION_TYPE",
      /** Indicates that the Rule has a single Condition. */
      CONDITION = "CONDITION",
      /** Indicates that the Rule has a complex condition specified as a ConditionTree. */
      CONDITION_TREE = "CONDITION_TREE"
  }
  enum RoundingStrategy {
      /** Unknown rounding strategy */
      UNKNOWN_ROUNDING_STRATEGY = "UNKNOWN_ROUNDING_STRATEGY",
      /** Half-up rounding strategy - relevant for fee and percentage fee calculation. */
      HALF_UP = "HALF_UP",
      /** Half-even rounding strategy - relevant for fee and percentage fee calculation. */
      HALF_EVEN = "HALF_EVEN"
  }
  interface CalculateServiceFeesRequest {
      /** Order information needed to evaluate the rules and calculate the relevant fees. */
      order: Order;
      /** DEPRECATED. Defines the app that the rule is connected to. */
      label?: string | null;
      /** Defines the app that the rule is connected to. */
      appId?: string | null;
  }
  interface Order {
      /**
       * Order ID.
       * @readonly
       */
      _id?: string;
      /** ID of the site's location. */
      locationId?: string | null;
      /** Currency used for pricing on the site. */
      currency?: string | null;
      /** Information about the price of the order. */
      priceSummary?: PriceSummary;
      /** Order's shipping information. */
      shippingInfo?: ShippingInformation;
      /** Platform on which the order was placed. */
      platform?: Platform;
      /** Order's locale. */
      locale?: Locale;
  }
  interface PriceSummary {
      /** Subtotal of the order. */
      subtotal?: string;
  }
  interface ShippingInformation {
      /** Information about the type of delivery. For example, pick-up. */
      logistics?: DeliveryLogistics;
  }
  interface DeliveryLogistics {
      /**
       * Type of delivery.
       *
       * Supported values:
       * - `"UNSPECIFIED_FULFILLMENT_TYPE"`
       * - `"PICKUP"`
       * - `"DELIVERY"`
       * - `"DINE_IN"`
       * - `"CURBSIDE_PICKUP"`
       */
      type?: Type;
  }
  enum Type {
      /** Missing type due to an error */
      UNSPECIFIED_FULFILLMENT_TYPE = "UNSPECIFIED_FULFILLMENT_TYPE",
      /** Pickup */
      PICKUP = "PICKUP",
      /** Delivery */
      DELIVERY = "DELIVERY",
      /** Dine-in */
      DINE_IN = "DINE_IN",
      /** Curbside-pickup */
      CURBSIDE_PICKUP = "CURBSIDE_PICKUP"
  }
  interface Platform {
      /**
       * Platform on which the order was placed.
       *
       * Supported values:
       * - `"SITE"`
       * - `"MOBILE_SITE"`
       * - `"MOBILE_APP"`
       */
      value?: PlatformValue;
  }
  enum PlatformValue {
      /** Site */
      SITE = "SITE",
      /** Mobile site */
      MOBILE_SITE = "MOBILE_SITE",
      /** Mobile app */
      MOBILE_APP = "MOBILE_APP"
  }
  interface Locale {
      /**
       * Locale in [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.
       * Typically, this is a lowercase 2-letter language code,
       * followed by a hyphen, followed by an uppercase 2-letter country code.
       * For example, `en-US` for U.S. English, and `de-DE` for Germany German.
       */
      languageCode?: string | null;
      /** 2-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string | null;
  }
  interface CalculateServiceFeesResponse {
      /** A list of calculated fees based on rules evaluation. */
      calculatedFees?: CalculatedFee[];
  }
  interface CalculatedFee {
      /** The ID of the rule that was used to calculate the fee. */
      ruleId?: string;
      /**
       * The name of the rule that was used to calculate the fee.
       * @readonly
       */
      name?: string;
      /** Fee amount. */
      fee?: CommonMoney;
      /** Tax amount. */
      tax?: CommonMoney;
      /** Tax group ID. This is an alternative to calculating the tax amount manually. */
      taxGroupId?: string | null;
  }
  interface CreateRuleRequest {
      /** Rule to create. */
      rule: Rule;
  }
  interface CreateRuleResponse {
      /** Created rule */
      rule?: Rule;
  }
  interface GetRuleRequest {
      /** ID of the rule to retrieve. */
      ruleId: string;
  }
  interface GetRuleResponse {
      /** The retrieved rule. */
      rule?: Rule;
  }
  interface UpdateRuleRequest {
      /** Rule to update. */
      rule: Rule;
      /**
       * List of fields to update in the rule.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateRuleResponse {
      /** Updated rule. */
      rule?: Rule;
  }
  interface DeleteRuleRequest {
      /** ID of the rule to delete. */
      ruleId: string;
  }
  interface DeleteRuleResponse {
  }
  interface ListRulesRequest {
      /** Retrieve only rule that apply at the [location](https://dev.wix.com/docs/rest/api-reference/business-tools/locations/location-object) with this ID. If this field is `null`, the rules will not be filtered by location. */
      locationId?: string | null;
      /** DEPRECATED. Defines the app that the rule is connected to. */
      label?: string | null;
      /** Defines the app that the rule is connected to. */
      appId?: string | null;
  }
  interface ListRulesResponse {
      /** Array containing the retrieved rules. */
      rules?: Rule[];
  }
  interface QueryRulesRequest {
      /** Query options. */
      query: CursorQuery;
  }
  interface CursorQuery extends CursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Filter object.
       * See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
       * for more information.
       *
       * For a detailed list of supported filters, see
       * [Supported Filters](/supported-filters-and-sorting).
       */
      filter?: Record<string, any> | null;
      /** Sort object. */
      sort?: Sorting[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /**
       * Sort order.
       *
       * Supported values:
       * - `"ASC"`
       * - `"DESC"`
       */
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
  interface CursorPaging {
      /**
       * Number of items to load. <br />
       * Default: `50`
       */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryRulesResponse {
      /** The retrieved rules. */
      rules?: Rule[];
      /** Paging metadata. */
      pagingMetadata?: CursorPagingMetadata;
  }
  interface CursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface BulkCreateRulesRequest {
      /** Rules to create. */
      rules: Rule[];
      /**
       * Whether the full rule entity is returned. <br />
       * Default: `false`.
       */
      returnFullEntity?: boolean;
  }
  interface BulkCreateRulesResponse {
      /** The created rules. Omitted if `returnFullEntity` is set to false. */
      results?: BulkRuleResult[];
      /** Bulk Create Rule metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkRuleResult {
      /** Metadata of the rule. */
      itemMetadata?: ItemMetadata;
      /** The created rule. */
      rule?: Rule;
  }
  interface ItemMetadata {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError;
  }
  interface ApplicationError {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface BulkUpdateRulesRequest {
      /** Masked rules to update. */
      rules: MaskedRule[];
      /**
       * Whether the full rule entity is returned. <br />
       * Default: `false`.
       */
      returnFullEntity?: boolean;
  }
  interface MaskedRule {
      /** Rule to update. */
      rule?: Rule;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface BulkUpdateRulesResponse {
      /** The updated rules. Omitted if `returnFullEntity` is set to false. */
      results?: BulkRuleResult[];
      /** Bulk Update Rule metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDeleteRulesRequest {
      /** IDs of the rules to delete. */
      ruleIds: string[];
  }
  interface BulkDeleteRulesResponse {
      /** Information about the deleted rules. */
      results?: BulkRuleResult[];
      /** Bulk Delete Rule metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface DomainEvent extends DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
  }
  interface EntityCreatedEvent {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  interface MessageEnvelope {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData;
      /** Stringify payload. */
      data?: string;
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
      identityType?: WebhookIdentityType;
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
  enum WebhookIdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * The `calculateServiceFees()` function returns a Promise that resolves to an array containing the calculated fees.
   *
   *
   * The specified order information is evaluated against all rules created for the site. If the rule conditions are met, the service fee set in the rule is applied. Otherwise, no service fee is added.
   * @param order - Order information needed to evaluate the rules and calculate the relevant fees.
   * @public
   * @documentationMaturity preview
   * @requiredField order
   * @requiredField order.currency
   * @requiredField order.priceSummary
   */
  function calculateServiceFees(order: Order, options?: CalculateServiceFeesOptions): Promise<CalculateServiceFeesResponse>;
  interface CalculateServiceFeesOptions {
      /** DEPRECATED. Defines the app that the rule is connected to. */
      label?: string | null;
      /** Defines the app that the rule is connected to. */
      appId?: string | null;
  }
  /**
   * The `createRule()` function returns a Promise that resolves to the created rule.
   *
   *
   * To create multiple rules at once, use the `bulkCreateRules()` function.
   * @param rule - Rule to create.
   * @public
   * @documentationMaturity preview
   * @requiredField rule
   * @requiredField rule.enabled
   * @requiredField rule.name
   * @adminMethod
   * @returns Created rule
   */
  function createRule(rule: Rule): Promise<Rule>;
  /**
   * The `createRule()` function returns a Promise that resolves to the retrieved rule.
   * @param ruleId - ID of the rule to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField ruleId
   * @returns The retrieved rule.
   */
  function getRule(ruleId: string): Promise<Rule>;
  /**
   * The `updateRule()` function returns a Promise that resolves to the updated rule.
   *
   *
   * Each time the task is updated, `revision` increments by 1. The existing `revision` must be included when updating the task. This ensures you're working with the latest task and prevents unintended overwrites.
   *
   * To update multiple rules at once, use the `bulkUpdateRules()` function.
   * @param _id - Rule ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField rule
   * @requiredField rule.revision
   * @adminMethod
   * @returns Updated rule.
   */
  function updateRule(_id: string | null, rule: UpdateRule, options?: UpdateRuleOptions): Promise<Rule>;
  interface UpdateRule {
      /** Fixed fee. Must hold a positive value. */
      amount?: Money;
      /** Percentage fee. For example, `5` represents a 5% fee applied to the order's total. */
      percentage?: string | null;
      /** Fixed fee. Must hold a positive value. */
      fixedFee?: CommonMoney;
      /**
       * Percentage fee. For example, 5 represents a 5% fee applied to the order's total.
       *
       * Min: `0`.
       *
       * Max: `100`.
       */
      percentageFee?: string | null;
      /** Single condition that must be met for the rule to be applied to an order. */
      condition?: Condition;
      /** Binary tree of conditions. Use the operator to indicate whether only one or both conditions must be met in order for a service fee rule to be applied to an order. */
      conditionTree?: ConditionTree;
      /** Single condition that must be met for the rule to be applied to an order. */
      conditionOptions?: Condition;
      /** Binary tree of conditions. Use the operator to indicate whether only one or both conditions must be met in order for a service fee rule to be applied to an order. */
      conditionTreeOptions?: ConditionTree;
      /** Percentage value to apply as a custom tax rate. Range: [0-100]. */
      customTaxRate?: string | null;
      /** Tax group ID. Internal only. */
      taxGroupId?: string | null;
      /**
       * Rule ID.
       * @readonly
       */
      _id?: string | null;
      /** ID of the restaurant’s [location](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/introduction). */
      locationId?: string | null;
      /** Rule name. */
      name?: string | null;
      /**
       * Date and time the rule was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the rule was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Percentage value to apply as a custom tax rate. For example, `5` respresents a 5% fee applied to the order's total. <br />
       * Min: '0'. <br />
       * Max: `100`.
       */
      taxRate?: string | null;
      /** Specifies the type of condition. */
      conditionsType?: ConditionsType;
      /** Specifies the type of condition. */
      conditionType?: ConditionType;
      /** Whether the rule is enabled. If `true`, the rule is evaluated when service fees are calculated. If `false`, the rule will not be evaluated when service fees are calculated. */
      enabled?: boolean | null;
      /**
       * Revision number. Increments by 1 each time the rule is updated.
       * To prevent conflicting changes, the existing `revision` must be used when updating a rule.
       * @readonly
       */
      revision?: string | null;
      /** DEPRECATED. Defines the app that the rule is connected to. */
      label?: string | null;
      /** Defines the app that the rule is connected to. */
      appId?: string | null;
      /**
       * Rounding strategy to apply to fee and tax calculation.
       *
       * Supported values:
       *
       * - `"HALF_UP"`: Rounds up any number exactly halfway between two integers. For example, `2.5` rounds to `3`, and `3.5` and rounds to `4`.
       * - `"HALF_EVEN"`: Rounds such numbers to the nearest even integer. For example, `2.5` rounds to `2`, but `3.5` rounds to `4`.
       * - `"UNKNOWN_ROUNDING_STRATEGY"`
       */
      roundingStrategy?: RoundingStrategy;
  }
  interface UpdateRuleOptions {
      /**
       * List of fields to update in the rule.
       * @internal
       */
      mask?: string[];
  }
  /**
   * The `deleteRule()` function returns a Promise that resolves to void.
   *
   *
   * To delete multiple rules at once, use the `bulkDeleteRules()` function.
   * @param ruleId - ID of the rule to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField ruleId
   * @adminMethod
   */
  function deleteRule(ruleId: string): Promise<void>;
  /**
   * The `listRules()` function returns a Promise that resolves to an array of the retrieved rules.
   *
   *
   * You can filter by location or app that the rules are associated with.
   * @public
   * @documentationMaturity preview
   */
  function listRules(options?: ListRulesOptions): Promise<ListRulesResponse>;
  interface ListRulesOptions {
      /** Retrieve only rule that apply at the [location](https://dev.wix.com/docs/rest/api-reference/business-tools/locations/location-object) with this ID. If this field is `null`, the rules will not be filtered by location. */
      locationId?: string | null;
      /** DEPRECATED. Defines the app that the rule is connected to. */
      label?: string | null;
      /** Defines the app that the rule is connected to. */
      appId?: string | null;
  }
  /**
   * Creates a query to retrieve a list of rules.
   *
   *
   * The `queryRules()` function builds a query to retrieve a list of up to 1,000 rules and returns a `RulesQueryBuilder` object.
   *
   * The returned object contains the query definition which is typically used to run the query using the `find()` function.
   *
   * You can refine the query by chaining `RulesQueryBuilder` functions onto the query. `RulesQueryBuilder` functions enable you to sort, filter, and control the results that `queryRules()` returns. The functions that are chained to `queryRules()` are applied in the order they are called.
   *
   * `queryRules()` runs with the following `RulesQueryBuilder` defaults that you can override:
   * - `skip`: `0`
   * - `limit`: `50`
   *
   * The following `QueryRulesBuilder` functions are supported for the `queryRules()` function. For a full description of the Rules object, see the object returned for the `items` property in `RulesQueryResult`.
   * @public
   * @documentationMaturity preview
   */
  function queryRules(): RulesQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface RulesQueryResult extends QueryCursorResult {
      items: Rule[];
      query: RulesQueryBuilder;
      next: () => Promise<RulesQueryResult>;
      prev: () => Promise<RulesQueryResult>;
  }
  interface RulesQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id', value: any) => RulesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id', value: any) => RulesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id', value: string) => RulesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id', value: any[]) => RulesQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id', value: any) => RulesQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id', value: boolean) => RulesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id'>) => RulesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id'>) => RulesQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => RulesQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => RulesQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<RulesQueryResult>;
  }
  /**
   * The `bulkCreateRules()` function returns a Promise that resolves to the created rules.
   *
   *
   * To create only one rule, use the `createRule()` function.
   * @param rules - Rules to create.
   * @public
   * @documentationMaturity preview
   * @requiredField rules
   * @adminMethod
   */
  function bulkCreateRules(rules: Rule[], options?: BulkCreateRulesOptions): Promise<BulkCreateRulesResponse>;
  interface BulkCreateRulesOptions {
      /**
       * Whether the full rule entity is returned. <br />
       * Default: `false`.
       */
      returnFullEntity?: boolean;
  }
  /**
   * The `bulkUpdateRules()` function returns a Promise that resolves to the updated rules.
   *
   *
   * Each time the task is updated, `revision` increments by 1. The existing `revision` must be included when updating the task. This ensures you're working with the latest task and prevents unintended overwrites.
   *
   * To update only one rule, use the `updateRule()` function.
   * @param rules - Masked rules to update.
   * @public
   * @documentationMaturity preview
   * @requiredField rules
   * @adminMethod
   */
  function bulkUpdateRules(rules: MaskedRule[], options?: BulkUpdateRulesOptions): Promise<BulkUpdateRulesResponse>;
  interface BulkUpdateRulesOptions {
      /**
       * Whether the full rule entity is returned. <br />
       * Default: `false`.
       */
      returnFullEntity?: boolean;
  }
  /**
   * The `bulkDeleteRules()` function returns a Promise that resolves to the deleted rules.
   *
   *
   * To delete only one rule, use the `deleteRule()` function.
   * @param ruleIds - IDs of the rules to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField ruleIds
   * @adminMethod
   */
  function bulkDeleteRules(ruleIds: string[]): Promise<BulkDeleteRulesResponse>;
  
  type serviceFeesV1Rule_universal_d_Rule = Rule;
  type serviceFeesV1Rule_universal_d_RuleValueOneOf = RuleValueOneOf;
  type serviceFeesV1Rule_universal_d_RuleRequirementsOneOf = RuleRequirementsOneOf;
  type serviceFeesV1Rule_universal_d_RuleConditionsOneOf = RuleConditionsOneOf;
  type serviceFeesV1Rule_universal_d_RuleConditionTypeOptionsOneOf = RuleConditionTypeOptionsOneOf;
  type serviceFeesV1Rule_universal_d_RuleTaxesOneOf = RuleTaxesOneOf;
  type serviceFeesV1Rule_universal_d_Money = Money;
  type serviceFeesV1Rule_universal_d_CommonMoney = CommonMoney;
  type serviceFeesV1Rule_universal_d_Condition = Condition;
  type serviceFeesV1Rule_universal_d_ConditionValueOneOf = ConditionValueOneOf;
  type serviceFeesV1Rule_universal_d_ExpectedType = ExpectedType;
  type serviceFeesV1Rule_universal_d_Value = Value;
  const serviceFeesV1Rule_universal_d_Value: typeof Value;
  type serviceFeesV1Rule_universal_d_ExpectedFieldType = ExpectedFieldType;
  const serviceFeesV1Rule_universal_d_ExpectedFieldType: typeof ExpectedFieldType;
  type serviceFeesV1Rule_universal_d__Number = _Number;
  type serviceFeesV1Rule_universal_d_Operation = Operation;
  const serviceFeesV1Rule_universal_d_Operation: typeof Operation;
  type serviceFeesV1Rule_universal_d_List = List;
  type serviceFeesV1Rule_universal_d_ConditionTree = ConditionTree;
  type serviceFeesV1Rule_universal_d_ConditionTreeLeftConditionNodeOneOf = ConditionTreeLeftConditionNodeOneOf;
  type serviceFeesV1Rule_universal_d_ConditionTreeRightConditionNodeOneOf = ConditionTreeRightConditionNodeOneOf;
  type serviceFeesV1Rule_universal_d_Operator = Operator;
  const serviceFeesV1Rule_universal_d_Operator: typeof Operator;
  type serviceFeesV1Rule_universal_d_ConditionsType = ConditionsType;
  const serviceFeesV1Rule_universal_d_ConditionsType: typeof ConditionsType;
  type serviceFeesV1Rule_universal_d_ConditionType = ConditionType;
  const serviceFeesV1Rule_universal_d_ConditionType: typeof ConditionType;
  type serviceFeesV1Rule_universal_d_RoundingStrategy = RoundingStrategy;
  const serviceFeesV1Rule_universal_d_RoundingStrategy: typeof RoundingStrategy;
  type serviceFeesV1Rule_universal_d_CalculateServiceFeesRequest = CalculateServiceFeesRequest;
  type serviceFeesV1Rule_universal_d_Order = Order;
  type serviceFeesV1Rule_universal_d_PriceSummary = PriceSummary;
  type serviceFeesV1Rule_universal_d_ShippingInformation = ShippingInformation;
  type serviceFeesV1Rule_universal_d_DeliveryLogistics = DeliveryLogistics;
  type serviceFeesV1Rule_universal_d_Type = Type;
  const serviceFeesV1Rule_universal_d_Type: typeof Type;
  type serviceFeesV1Rule_universal_d_Platform = Platform;
  type serviceFeesV1Rule_universal_d_PlatformValue = PlatformValue;
  const serviceFeesV1Rule_universal_d_PlatformValue: typeof PlatformValue;
  type serviceFeesV1Rule_universal_d_Locale = Locale;
  type serviceFeesV1Rule_universal_d_CalculateServiceFeesResponse = CalculateServiceFeesResponse;
  type serviceFeesV1Rule_universal_d_CalculatedFee = CalculatedFee;
  type serviceFeesV1Rule_universal_d_CreateRuleRequest = CreateRuleRequest;
  type serviceFeesV1Rule_universal_d_CreateRuleResponse = CreateRuleResponse;
  type serviceFeesV1Rule_universal_d_GetRuleRequest = GetRuleRequest;
  type serviceFeesV1Rule_universal_d_GetRuleResponse = GetRuleResponse;
  type serviceFeesV1Rule_universal_d_UpdateRuleRequest = UpdateRuleRequest;
  type serviceFeesV1Rule_universal_d_UpdateRuleResponse = UpdateRuleResponse;
  type serviceFeesV1Rule_universal_d_DeleteRuleRequest = DeleteRuleRequest;
  type serviceFeesV1Rule_universal_d_DeleteRuleResponse = DeleteRuleResponse;
  type serviceFeesV1Rule_universal_d_ListRulesRequest = ListRulesRequest;
  type serviceFeesV1Rule_universal_d_ListRulesResponse = ListRulesResponse;
  type serviceFeesV1Rule_universal_d_QueryRulesRequest = QueryRulesRequest;
  type serviceFeesV1Rule_universal_d_CursorQuery = CursorQuery;
  type serviceFeesV1Rule_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type serviceFeesV1Rule_universal_d_Sorting = Sorting;
  type serviceFeesV1Rule_universal_d_SortOrder = SortOrder;
  const serviceFeesV1Rule_universal_d_SortOrder: typeof SortOrder;
  type serviceFeesV1Rule_universal_d_CursorPaging = CursorPaging;
  type serviceFeesV1Rule_universal_d_QueryRulesResponse = QueryRulesResponse;
  type serviceFeesV1Rule_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type serviceFeesV1Rule_universal_d_Cursors = Cursors;
  type serviceFeesV1Rule_universal_d_BulkCreateRulesRequest = BulkCreateRulesRequest;
  type serviceFeesV1Rule_universal_d_BulkCreateRulesResponse = BulkCreateRulesResponse;
  type serviceFeesV1Rule_universal_d_BulkRuleResult = BulkRuleResult;
  type serviceFeesV1Rule_universal_d_ItemMetadata = ItemMetadata;
  type serviceFeesV1Rule_universal_d_ApplicationError = ApplicationError;
  type serviceFeesV1Rule_universal_d_BulkActionMetadata = BulkActionMetadata;
  type serviceFeesV1Rule_universal_d_BulkUpdateRulesRequest = BulkUpdateRulesRequest;
  type serviceFeesV1Rule_universal_d_MaskedRule = MaskedRule;
  type serviceFeesV1Rule_universal_d_BulkUpdateRulesResponse = BulkUpdateRulesResponse;
  type serviceFeesV1Rule_universal_d_BulkDeleteRulesRequest = BulkDeleteRulesRequest;
  type serviceFeesV1Rule_universal_d_BulkDeleteRulesResponse = BulkDeleteRulesResponse;
  type serviceFeesV1Rule_universal_d_DomainEvent = DomainEvent;
  type serviceFeesV1Rule_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type serviceFeesV1Rule_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type serviceFeesV1Rule_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type serviceFeesV1Rule_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type serviceFeesV1Rule_universal_d_ActionEvent = ActionEvent;
  type serviceFeesV1Rule_universal_d_MessageEnvelope = MessageEnvelope;
  type serviceFeesV1Rule_universal_d_IdentificationData = IdentificationData;
  type serviceFeesV1Rule_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type serviceFeesV1Rule_universal_d_WebhookIdentityType = WebhookIdentityType;
  const serviceFeesV1Rule_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const serviceFeesV1Rule_universal_d_calculateServiceFees: typeof calculateServiceFees;
  type serviceFeesV1Rule_universal_d_CalculateServiceFeesOptions = CalculateServiceFeesOptions;
  const serviceFeesV1Rule_universal_d_createRule: typeof createRule;
  const serviceFeesV1Rule_universal_d_getRule: typeof getRule;
  const serviceFeesV1Rule_universal_d_updateRule: typeof updateRule;
  type serviceFeesV1Rule_universal_d_UpdateRule = UpdateRule;
  type serviceFeesV1Rule_universal_d_UpdateRuleOptions = UpdateRuleOptions;
  const serviceFeesV1Rule_universal_d_deleteRule: typeof deleteRule;
  const serviceFeesV1Rule_universal_d_listRules: typeof listRules;
  type serviceFeesV1Rule_universal_d_ListRulesOptions = ListRulesOptions;
  const serviceFeesV1Rule_universal_d_queryRules: typeof queryRules;
  type serviceFeesV1Rule_universal_d_RulesQueryResult = RulesQueryResult;
  type serviceFeesV1Rule_universal_d_RulesQueryBuilder = RulesQueryBuilder;
  const serviceFeesV1Rule_universal_d_bulkCreateRules: typeof bulkCreateRules;
  type serviceFeesV1Rule_universal_d_BulkCreateRulesOptions = BulkCreateRulesOptions;
  const serviceFeesV1Rule_universal_d_bulkUpdateRules: typeof bulkUpdateRules;
  type serviceFeesV1Rule_universal_d_BulkUpdateRulesOptions = BulkUpdateRulesOptions;
  const serviceFeesV1Rule_universal_d_bulkDeleteRules: typeof bulkDeleteRules;
  namespace serviceFeesV1Rule_universal_d {
    export {
      serviceFeesV1Rule_universal_d_Rule as Rule,
      serviceFeesV1Rule_universal_d_RuleValueOneOf as RuleValueOneOf,
      serviceFeesV1Rule_universal_d_RuleRequirementsOneOf as RuleRequirementsOneOf,
      serviceFeesV1Rule_universal_d_RuleConditionsOneOf as RuleConditionsOneOf,
      serviceFeesV1Rule_universal_d_RuleConditionTypeOptionsOneOf as RuleConditionTypeOptionsOneOf,
      serviceFeesV1Rule_universal_d_RuleTaxesOneOf as RuleTaxesOneOf,
      serviceFeesV1Rule_universal_d_Money as Money,
      serviceFeesV1Rule_universal_d_CommonMoney as CommonMoney,
      serviceFeesV1Rule_universal_d_Condition as Condition,
      serviceFeesV1Rule_universal_d_ConditionValueOneOf as ConditionValueOneOf,
      serviceFeesV1Rule_universal_d_ExpectedType as ExpectedType,
      serviceFeesV1Rule_universal_d_Value as Value,
      serviceFeesV1Rule_universal_d_ExpectedFieldType as ExpectedFieldType,
      serviceFeesV1Rule_universal_d__Number as _Number,
      serviceFeesV1Rule_universal_d_Operation as Operation,
      serviceFeesV1Rule_universal_d_List as List,
      serviceFeesV1Rule_universal_d_ConditionTree as ConditionTree,
      serviceFeesV1Rule_universal_d_ConditionTreeLeftConditionNodeOneOf as ConditionTreeLeftConditionNodeOneOf,
      serviceFeesV1Rule_universal_d_ConditionTreeRightConditionNodeOneOf as ConditionTreeRightConditionNodeOneOf,
      serviceFeesV1Rule_universal_d_Operator as Operator,
      serviceFeesV1Rule_universal_d_ConditionsType as ConditionsType,
      serviceFeesV1Rule_universal_d_ConditionType as ConditionType,
      serviceFeesV1Rule_universal_d_RoundingStrategy as RoundingStrategy,
      serviceFeesV1Rule_universal_d_CalculateServiceFeesRequest as CalculateServiceFeesRequest,
      serviceFeesV1Rule_universal_d_Order as Order,
      serviceFeesV1Rule_universal_d_PriceSummary as PriceSummary,
      serviceFeesV1Rule_universal_d_ShippingInformation as ShippingInformation,
      serviceFeesV1Rule_universal_d_DeliveryLogistics as DeliveryLogistics,
      serviceFeesV1Rule_universal_d_Type as Type,
      serviceFeesV1Rule_universal_d_Platform as Platform,
      serviceFeesV1Rule_universal_d_PlatformValue as PlatformValue,
      serviceFeesV1Rule_universal_d_Locale as Locale,
      serviceFeesV1Rule_universal_d_CalculateServiceFeesResponse as CalculateServiceFeesResponse,
      serviceFeesV1Rule_universal_d_CalculatedFee as CalculatedFee,
      serviceFeesV1Rule_universal_d_CreateRuleRequest as CreateRuleRequest,
      serviceFeesV1Rule_universal_d_CreateRuleResponse as CreateRuleResponse,
      serviceFeesV1Rule_universal_d_GetRuleRequest as GetRuleRequest,
      serviceFeesV1Rule_universal_d_GetRuleResponse as GetRuleResponse,
      serviceFeesV1Rule_universal_d_UpdateRuleRequest as UpdateRuleRequest,
      serviceFeesV1Rule_universal_d_UpdateRuleResponse as UpdateRuleResponse,
      serviceFeesV1Rule_universal_d_DeleteRuleRequest as DeleteRuleRequest,
      serviceFeesV1Rule_universal_d_DeleteRuleResponse as DeleteRuleResponse,
      serviceFeesV1Rule_universal_d_ListRulesRequest as ListRulesRequest,
      serviceFeesV1Rule_universal_d_ListRulesResponse as ListRulesResponse,
      serviceFeesV1Rule_universal_d_QueryRulesRequest as QueryRulesRequest,
      serviceFeesV1Rule_universal_d_CursorQuery as CursorQuery,
      serviceFeesV1Rule_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      serviceFeesV1Rule_universal_d_Sorting as Sorting,
      serviceFeesV1Rule_universal_d_SortOrder as SortOrder,
      serviceFeesV1Rule_universal_d_CursorPaging as CursorPaging,
      serviceFeesV1Rule_universal_d_QueryRulesResponse as QueryRulesResponse,
      serviceFeesV1Rule_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      serviceFeesV1Rule_universal_d_Cursors as Cursors,
      serviceFeesV1Rule_universal_d_BulkCreateRulesRequest as BulkCreateRulesRequest,
      serviceFeesV1Rule_universal_d_BulkCreateRulesResponse as BulkCreateRulesResponse,
      serviceFeesV1Rule_universal_d_BulkRuleResult as BulkRuleResult,
      serviceFeesV1Rule_universal_d_ItemMetadata as ItemMetadata,
      serviceFeesV1Rule_universal_d_ApplicationError as ApplicationError,
      serviceFeesV1Rule_universal_d_BulkActionMetadata as BulkActionMetadata,
      serviceFeesV1Rule_universal_d_BulkUpdateRulesRequest as BulkUpdateRulesRequest,
      serviceFeesV1Rule_universal_d_MaskedRule as MaskedRule,
      serviceFeesV1Rule_universal_d_BulkUpdateRulesResponse as BulkUpdateRulesResponse,
      serviceFeesV1Rule_universal_d_BulkDeleteRulesRequest as BulkDeleteRulesRequest,
      serviceFeesV1Rule_universal_d_BulkDeleteRulesResponse as BulkDeleteRulesResponse,
      serviceFeesV1Rule_universal_d_DomainEvent as DomainEvent,
      serviceFeesV1Rule_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      serviceFeesV1Rule_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      serviceFeesV1Rule_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      serviceFeesV1Rule_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      serviceFeesV1Rule_universal_d_ActionEvent as ActionEvent,
      serviceFeesV1Rule_universal_d_MessageEnvelope as MessageEnvelope,
      serviceFeesV1Rule_universal_d_IdentificationData as IdentificationData,
      serviceFeesV1Rule_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      serviceFeesV1Rule_universal_d_WebhookIdentityType as WebhookIdentityType,
      serviceFeesV1Rule_universal_d_calculateServiceFees as calculateServiceFees,
      serviceFeesV1Rule_universal_d_CalculateServiceFeesOptions as CalculateServiceFeesOptions,
      serviceFeesV1Rule_universal_d_createRule as createRule,
      serviceFeesV1Rule_universal_d_getRule as getRule,
      serviceFeesV1Rule_universal_d_updateRule as updateRule,
      serviceFeesV1Rule_universal_d_UpdateRule as UpdateRule,
      serviceFeesV1Rule_universal_d_UpdateRuleOptions as UpdateRuleOptions,
      serviceFeesV1Rule_universal_d_deleteRule as deleteRule,
      serviceFeesV1Rule_universal_d_listRules as listRules,
      serviceFeesV1Rule_universal_d_ListRulesOptions as ListRulesOptions,
      serviceFeesV1Rule_universal_d_queryRules as queryRules,
      serviceFeesV1Rule_universal_d_RulesQueryResult as RulesQueryResult,
      serviceFeesV1Rule_universal_d_RulesQueryBuilder as RulesQueryBuilder,
      serviceFeesV1Rule_universal_d_bulkCreateRules as bulkCreateRules,
      serviceFeesV1Rule_universal_d_BulkCreateRulesOptions as BulkCreateRulesOptions,
      serviceFeesV1Rule_universal_d_bulkUpdateRules as bulkUpdateRules,
      serviceFeesV1Rule_universal_d_BulkUpdateRulesOptions as BulkUpdateRulesOptions,
      serviceFeesV1Rule_universal_d_bulkDeleteRules as bulkDeleteRules,
    };
  }
  
  export { restaurantsV1FulfillmentMethod_universal_d as fulfillmentMethods, restaurantsMenusV1ItemModifierGroup_universal_d as itemModifierGroups, restaurantsMenusV1ItemModifier_universal_d as itemModifiers, restaurantsMenusV1Item_universal_d as menuItems, restaurantsMenusV1Menu_universal_d as menus, restaurantsOperationsV1Operation_universal_d as operations, restaurantsMenusV1Section_universal_d as sections, serviceFeesV1Rule_universal_d as serviceFeesCalculate };
}
