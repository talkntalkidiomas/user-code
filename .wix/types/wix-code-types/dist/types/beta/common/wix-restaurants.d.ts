declare module "wix-restaurants" {
  const __debug$2: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Item is the main entity of RestaurantsMenusItem that represents the item (dish) of the restaurant menu. */
  interface Item extends ItemPricingOneOf {
      price?: string;
      priceVariants?: PriceVariants;
      /**
       * Item ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Item was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Item was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Item name. */
      name?: string;
      /** Item description. */
      description?: string | null;
      /** Item primary image. */
      image?: string;
      /** Item additional images. */
      additionalImages?: string[];
      /** Item labels. */
      labels?: Label[];
      /** Is visible. */
      visible?: boolean | null;
      /** Online order settings. */
      orderSettings?: OrderSettings;
      /** Modifier Groups. */
      modifierGroups?: ModifierGroup[];
      /** Extended fields. */
      extendedFields?: ExtendedFields$1;
  }
  /** @oneof */
  interface ItemPricingOneOf {
      price?: string;
      priceVariants?: PriceVariants;
  }
  interface PriceVariants {
      /** A list of price variants. */
      priceVariants?: PriceVariant[];
  }
  interface PriceVariant {
      /** Price variant modifier ID. */
      modifierId?: string;
      /** Price of a variant. */
      price?: string;
  }
  interface Label {
      /** Label ID. */
      _id?: string;
  }
  interface OrderSettings {
      /** Whether the item is out of stock. */
      outOfStock?: boolean | null;
      /** Whether a customer can add a special request when ordering this item. Defaults to `true`. */
      acceptSpecialRequests?: boolean | null;
      /**
       * E-com defined tax group for the product.
       * @internal
       */
      taxGroupId?: string | null;
  }
  interface ModifierGroup {
      /** Modifier Group ID. */
      _id?: string | null;
  }
  interface ExtendedFields$1 {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
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
  interface CreateItemRequest {
      /** Item to be created. */
      item: Item;
  }
  interface CreateItemResponse {
      /** The created item. */
      item?: Item;
  }
  interface BulkCreateItemsRequest {
      /** Items to be created. */
      items: Item[];
      /** set to `true` if you wish to receive back the created items in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateItemsResponse {
      /** Results of bulk item create. */
      results?: BulkCreateItemResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkCreateItemResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$2;
      /** Created item. */
      item?: Item;
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
  interface GetItemRequest {
      /** ID of the Item to retrieve. */
      itemId: string;
  }
  interface GetItemResponse {
      /** The retrieved Item. */
      item?: Item;
  }
  interface ListItemsRequest {
      /** IDs of the items to be listed */
      itemIds?: string[];
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
  interface ListItemsResponse {
      /** The retrieved items. */
      items?: Item[];
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
  interface QueryItemsRequest {
      /** The query by which to select items. */
      query?: CursorQuery$2;
  }
  interface CursorQuery$2 extends CursorQueryPagingMethodOneOf$2 {
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
      sort?: Sorting$2[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$2 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
  }
  interface Sorting$2 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$2;
  }
  enum SortOrder$2 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryItemsResponse {
      /** The retrieved items. */
      items?: Item[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$2;
  }
  interface CountItemsRequest {
      /** Filter criteria for counting items. */
      filter?: Record<string, any> | null;
  }
  interface CountItemsResponse {
      /** The count of items. */
      count?: number;
  }
  interface UpdateItemRequest {
      /** Item to be updated, may be partial. */
      item: Item;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateItemResponse {
      /** The updated Item. */
      item?: Item;
  }
  interface BulkUpdateItemRequest {
      /** Items to be updated. */
      items: MaskedItem[];
      /** set to `true` if you wish to receive back the created items in the response. */
      returnEntity?: boolean;
  }
  interface MaskedItem {
      /** Item to be updated, may be partial. */
      item?: Item;
      /** Explicit list of fields to update. */
      mask?: string[];
  }
  interface BulkUpdateItemResponse {
      /** Results of bulk item update. */
      results?: BulkItemResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkItemResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$2;
      /** Only exists if `returnEntity` was set to true in the request. */
      item?: Item;
  }
  interface DeleteItemRequest {
      /** ID of the Item to delete. */
      itemId: string;
  }
  interface DeleteItemResponse {
  }
  interface BulkDeleteItemsRequest {
      /** Item IDs to be deleted. */
      ids: string[];
  }
  interface BulkDeleteItemsResponse {
      /** Results of bulk item delete. */
      results?: BulkDeleteItemResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkDeleteItemResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$2;
  }
  interface CloneItemsRequest {
      /** The MetaSiteId to clone from. */
      metaSiteId: string;
  }
  interface CloneItemsResponse {
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
  }
  interface ActionEvent$2 {
      bodyAsJson?: string;
  }
  interface Empty$2 {
  }
  /**
   * Creates a new menu item.
   * @param item - Item to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField item
   * @adminMethod
   * @returns The created item.
   */
  function createItem(item: Item): Promise<Item>;
  /**
   * Bulk create new menu items.
   * @param items - Items to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField items
   * @adminMethod
   */
  function bulkCreateItems(items: Item[], options?: BulkCreateItemsOptions): Promise<BulkCreateItemsResponse>;
  interface BulkCreateItemsOptions {
      /** set to `true` if you wish to receive back the created items in the response. */
      returnEntity?: boolean;
  }
  /**
   * Get an Item by id.
   * @param itemId - ID of the Item to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField itemId
   * @returns The retrieved Item.
   */
  function getItem(itemId: string): Promise<Item>;
  /**
   * Retrieves a list of items.
   * @internal
   * @documentationMaturity preview
   */
  function listItems(options?: ListItemsOptions): Promise<ListItemsResponse>;
  interface ListItemsOptions {
      /** IDs of the items to be listed */
      itemIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$2;
  }
  /**
   * Retrieves a list of items by a given query.
   *
   * To learn how to query items, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   *
   * Up to 100 items can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function queryItems(): ItemsQueryBuilder;
  interface QueryCursorResult$2 {
      cursors: Cursors$2;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ItemsQueryResult extends QueryCursorResult$2 {
      items: Item[];
      query: ItemsQueryBuilder;
      next: () => Promise<ItemsQueryResult>;
      prev: () => Promise<ItemsQueryResult>;
  }
  interface ItemsQueryBuilder {
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
   * retrieves the number of items based on a specified filter that match the criteria specified by the provided filter.
   *
   * If no filter is provided, it will return the count of all items.
   * @internal
   * @documentationMaturity preview
   */
  function countItems(options?: CountItemsOptions): Promise<CountItemsResponse>;
  interface CountItemsOptions {
      /** Filter criteria for counting items. */
      filter?: Record<string, any> | null;
  }
  /**
   * Update an Item, supports partial update.
   *
   * Each time an item is updated, revision increments by 1. The existing revision must be included when updating the menu item. This ensures you're working with the latest menu item information, and it prevents unintended overwrites.
   * @param _id - Item ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField item
   * @requiredField item.revision
   * @adminMethod
   * @returns The updated Item.
   */
  function updateItem(_id: string | null, item: UpdateItem, options?: UpdateItemOptions): Promise<Item>;
  interface UpdateItem {
      price?: string;
      priceVariants?: PriceVariants;
      /**
       * Item ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Item was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Item was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Item name. */
      name?: string;
      /** Item description. */
      description?: string | null;
      /** Item primary image. */
      image?: string;
      /** Item additional images. */
      additionalImages?: string[];
      /** Item labels. */
      labels?: Label[];
      /** Is visible. */
      visible?: boolean | null;
      /** Online order settings. */
      orderSettings?: OrderSettings;
      /** Modifier Groups. */
      modifierGroups?: ModifierGroup[];
      /** Extended fields. */
      extendedFields?: ExtendedFields$1;
  }
  interface UpdateItemOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Bulk update an Item, supports partial update.
   *
   * Each time a menu item is updated, revision increments by 1. The existing revision must be included when updating menu item. This ensures you're working with the latest item information, and it prevents unintended overwrites.
   *
   * Up to 100 items can be returned per request.
   * @param items - Items to be updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField items
   * @requiredField items.item._id
   * @requiredField items.item.revision
   * @adminMethod
   */
  function bulkUpdateItem(items: MaskedItem[], options?: BulkUpdateItemOptions): Promise<BulkUpdateItemResponse>;
  interface BulkUpdateItemOptions {
      /** set to `true` if you wish to receive back the created items in the response. */
      returnEntity?: boolean;
  }
  /**
   * Deletes an Item.
   * @param itemId - ID of the Item to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField itemId
   * @adminMethod
   */
  function deleteItem(itemId: string): Promise<void>;
  /**
   * Bulk delete Items.
   * @param ids - Item IDs to be deleted.
   * @internal
   * @documentationMaturity preview
   * @requiredField ids
   * @adminMethod
   */
  function bulkDeleteItems(ids: string[]): Promise<BulkDeleteItemsResponse>;
  /**
   * Clone items from a different metasite
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
  type restaurantsMenusV1Item_universal_d_ModifierGroup = ModifierGroup;
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
  const restaurantsMenusV1Item_universal_d_bulkDeleteItems: typeof bulkDeleteItems;
  const restaurantsMenusV1Item_universal_d_cloneItems: typeof cloneItems;
  namespace restaurantsMenusV1Item_universal_d {
    export {
      __debug$2 as __debug,
      restaurantsMenusV1Item_universal_d_Item as Item,
      restaurantsMenusV1Item_universal_d_ItemPricingOneOf as ItemPricingOneOf,
      restaurantsMenusV1Item_universal_d_PriceVariants as PriceVariants,
      restaurantsMenusV1Item_universal_d_PriceVariant as PriceVariant,
      restaurantsMenusV1Item_universal_d_Label as Label,
      restaurantsMenusV1Item_universal_d_OrderSettings as OrderSettings,
      restaurantsMenusV1Item_universal_d_ModifierGroup as ModifierGroup,
      ExtendedFields$1 as ExtendedFields,
      InvalidateCache$2 as InvalidateCache,
      InvalidateCacheGetByOneOf$2 as InvalidateCacheGetByOneOf,
      App$2 as App,
      Page$2 as Page,
      URI$2 as URI,
      restaurantsMenusV1Item_universal_d_CreateItemRequest as CreateItemRequest,
      restaurantsMenusV1Item_universal_d_CreateItemResponse as CreateItemResponse,
      restaurantsMenusV1Item_universal_d_BulkCreateItemsRequest as BulkCreateItemsRequest,
      restaurantsMenusV1Item_universal_d_BulkCreateItemsResponse as BulkCreateItemsResponse,
      restaurantsMenusV1Item_universal_d_BulkCreateItemResult as BulkCreateItemResult,
      ItemMetadata$2 as ItemMetadata,
      ApplicationError$2 as ApplicationError,
      BulkActionMetadata$2 as BulkActionMetadata,
      restaurantsMenusV1Item_universal_d_GetItemRequest as GetItemRequest,
      restaurantsMenusV1Item_universal_d_GetItemResponse as GetItemResponse,
      restaurantsMenusV1Item_universal_d_ListItemsRequest as ListItemsRequest,
      CursorPaging$2 as CursorPaging,
      restaurantsMenusV1Item_universal_d_ListItemsResponse as ListItemsResponse,
      CursorPagingMetadata$2 as CursorPagingMetadata,
      Cursors$2 as Cursors,
      restaurantsMenusV1Item_universal_d_QueryItemsRequest as QueryItemsRequest,
      CursorQuery$2 as CursorQuery,
      CursorQueryPagingMethodOneOf$2 as CursorQueryPagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
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
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      Empty$2 as Empty,
      restaurantsMenusV1Item_universal_d_createItem as createItem,
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
      restaurantsMenusV1Item_universal_d_bulkDeleteItems as bulkDeleteItems,
      restaurantsMenusV1Item_universal_d_cloneItems as cloneItems,
    };
  }
  
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Section is the main entity of RestaurantsMenusSection that represents a section inside a restaurant menu. */
  interface Section {
      /**
       * Section ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of a section. Each time the section is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Section was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Section was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Section name. */
      name?: string;
      /** Section description. */
      description?: string | null;
      /** Section primary image. */
      image?: string;
      /** Section additional images. */
      additionalImages?: string[];
      /** Item ids. */
      itemIds?: string[];
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
  interface CreateSectionRequest {
      /** Section to be created. */
      section: Section;
  }
  interface CreateSectionResponse {
      /** The created Section. */
      section?: Section;
  }
  interface BulkCreateSectionsRequest {
      /** Sections to be created. */
      sections: Section[];
      /** Set to `true` if you wish to receive back the created sections in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateSectionsResponse {
      /** Results of bulk sections create. */
      results?: BulkCreateSectionResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkCreateSectionResult {
      /** Set to `true` if you wish to receive back the created section in the response. */
      itemMetadata?: ItemMetadata$1;
      /** The created section. */
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
      /** ID of the Section to retrieve. */
      sectionId: string;
  }
  interface GetSectionResponse {
      /** The retrieved Section. */
      section?: Section;
  }
  interface ListSectionsRequest {
      /** IDs of the sections to be listed. */
      sectionIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$1;
  }
  interface CursorPaging$1 {
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
      /** The retrieved sections. */
      sections?: Section[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$1;
  }
  interface CursorPagingMetadata$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$1;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QuerySectionsRequest {
      /** The query by which to select sections. */
      query?: CursorQuery$1;
  }
  interface CursorQuery$1 extends CursorQueryPagingMethodOneOf$1 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
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
      cursorPaging?: CursorPaging$1;
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
  interface QuerySectionsResponse {
      /** The retrieved sections. */
      sections?: Section[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$1;
  }
  interface UpdateSectionRequest {
      /** Section to be updated, may be partial. */
      section: Section;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateSectionResponse {
      /** The updated Section. */
      section?: Section;
  }
  interface BulkUpdateSectionRequest {
      /** Sections to be updated. */
      sections: MaskedSection[];
      /** set to `true` if you wish to receive back the created sections in the response. */
      returnEntity?: boolean;
  }
  interface MaskedSection {
      /** Section to be updated, may be partial. */
      section?: Section;
      /** Explicit list of fields to update. */
      mask?: string[];
  }
  interface BulkUpdateSectionResponse {
      /** Results of bulk sections update. */
      results?: BulkSectionResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkSectionResult {
      /** set to `true` if you wish to receive back the updated sections in the response. */
      sectionMetadata?: ItemMetadata$1;
      /** Only exists if `returnEntity` was set to true in the request. */
      section?: Section;
  }
  interface DeleteSectionRequest {
      /** ID of the Section to delete. */
      sectionId: string;
  }
  interface DeleteSectionResponse {
  }
  interface BulkDeleteSectionsRequest {
      /** IDs of the sections to be listed. */
      ids: string[];
  }
  interface BulkDeleteSectionsResponse {
      /** Results of bulk sections delete. */
      results?: BulkDeleteSectionResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkDeleteSectionResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$1;
  }
  interface CloneSectionsRequest {
      /** The MetaSiteId to clone from. */
      metaSiteId: string;
  }
  interface CloneSectionsResponse {
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
  }
  interface ActionEvent$1 {
      bodyAsJson?: string;
  }
  interface Empty$1 {
  }
  /**
   * Creates a new Section.
   * @param section - Section to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField section
   * @adminMethod
   * @returns The created Section.
   */
  function createSection(section: Section): Promise<Section>;
  /**
   * Bulk create new Sections.
   * @param sections - Sections to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField sections
   * @adminMethod
   */
  function bulkCreateSections(sections: Section[], options?: BulkCreateSectionsOptions): Promise<BulkCreateSectionsResponse>;
  interface BulkCreateSectionsOptions {
      /** Set to `true` if you wish to receive back the created sections in the response. */
      returnEntity?: boolean;
  }
  /**
   * Get a Section by id.
   * @param sectionId - ID of the Section to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField sectionId
   * @returns The retrieved Section.
   */
  function getSection(sectionId: string): Promise<Section>;
  /**
   * Retrieves a list of sections.
   *
   * Up to 500 sections can be returned.
   * @internal
   * @documentationMaturity preview
   */
  function listSections(options?: ListSectionsOptions): Promise<ListSectionsResponse>;
  interface ListSectionsOptions {
      /** IDs of the sections to be listed. */
      sectionIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$1;
  }
  /**
   * Retrieves a list of sections by a given query.
   *
   * To learn how to query sections, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   *
   * Up to 500 sections can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function querySections(): SectionsQueryBuilder;
  interface QueryCursorResult$1 {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface SectionsQueryResult extends QueryCursorResult$1 {
      items: Section[];
      query: SectionsQueryBuilder;
      next: () => Promise<SectionsQueryResult>;
      prev: () => Promise<SectionsQueryResult>;
  }
  interface SectionsQueryBuilder {
      /** @documentationMaturity preview */
      in: (propertyName: 'itemIds', value: any) => SectionsQueryBuilder;
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
   * Update a Section, supports partial update.
   *
   * Each time a section is updated, revision increments by 1. The existing revision must be included when updating a section. This ensures you're working with the latest section information, and it prevents unintended overwrites.
   * @param _id - Section ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField section
   * @requiredField section.revision
   * @adminMethod
   * @returns The updated Section.
   */
  function updateSection(_id: string | null, section: UpdateSection, options?: UpdateSectionOptions): Promise<Section>;
  interface UpdateSection {
      /**
       * Section ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of a section. Each time the section is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Section was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Section was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Section name. */
      name?: string;
      /** Section description. */
      description?: string | null;
      /** Section primary image. */
      image?: string;
      /** Section additional images. */
      additionalImages?: string[];
      /** Item ids. */
      itemIds?: string[];
  }
  interface UpdateSectionOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Bulk update a Section, supports partial update.
   *
   * Each time a section is updated, revision increments by 1. The existing revision must be included when updating a section. This ensures you're working with the latest section information, and it prevents unintended overwrites.
   * @param sections - Sections to be updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField sections
   * @requiredField sections.section._id
   * @requiredField sections.section.revision
   * @adminMethod
   */
  function bulkUpdateSection(sections: MaskedSection[], options?: BulkUpdateSectionOptions): Promise<BulkUpdateSectionResponse>;
  interface BulkUpdateSectionOptions {
      /** set to `true` if you wish to receive back the created sections in the response. */
      returnEntity?: boolean;
  }
  /**
   * Delete a Section.
   * @param sectionId - ID of the Section to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField sectionId
   * @adminMethod
   */
  function deleteSection(sectionId: string): Promise<void>;
  /**
   * Bulk delete Sections.
   * @param ids - IDs of the sections to be listed.
   * @internal
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
      __debug$1 as __debug,
      restaurantsMenusV1Section_universal_d_Section as Section,
      InvalidateCache$1 as InvalidateCache,
      InvalidateCacheGetByOneOf$1 as InvalidateCacheGetByOneOf,
      App$1 as App,
      Page$1 as Page,
      URI$1 as URI,
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
      CursorPaging$1 as CursorPaging,
      restaurantsMenusV1Section_universal_d_ListSectionsResponse as ListSectionsResponse,
      CursorPagingMetadata$1 as CursorPagingMetadata,
      Cursors$1 as Cursors,
      restaurantsMenusV1Section_universal_d_QuerySectionsRequest as QuerySectionsRequest,
      CursorQuery$1 as CursorQuery,
      CursorQueryPagingMethodOneOf$1 as CursorQueryPagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
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
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      Empty$1 as Empty,
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
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Menu is the main entity of RestaurantsMenusMenu that represents a menu of a restaurant. */
  interface Menu {
      /**
       * Menu ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of a menu. Each time the menu is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Menu was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Menu was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Menu name. */
      name?: string;
      /** Menu description. */
      description?: string | null;
      /** Is visible. */
      visible?: boolean | null;
      /** Section ids. */
      sectionIds?: string[];
      /** Order index. */
      orderIdx?: number | null;
      /** Data extension. */
      extendedFields?: ExtendedFields;
      /** URL query param for displaying the menu in the livesite. */
      urlQueryParam?: string | null;
  }
  interface ExtendedFields {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       */
      namespaces?: Record<string, Record<string, any>>;
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
  interface DeleteOrphanSections {
      /** Menu id */
      menuId?: string;
  }
  interface CreateMenuRequest {
      /** Menu to be created. */
      menu: Menu;
  }
  interface CreateMenuResponse {
      /** The created Menu. */
      menu?: Menu;
  }
  interface BulkCreateMenusRequest {
      /** Items to be created. */
      menus: Menu[];
      /** Set to `true` if you wish to receive back the created menus in the response */
      returnEntity?: boolean;
  }
  interface BulkCreateMenusResponse {
      /** Results of bulk menu create. */
      results?: BulkCreateMenuResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkCreateMenuResult {
      /** Set to `true` if you wish to receive back the created menus in the response. */
      menuMetadata?: ItemMetadata;
      /** The created Menu. */
      menu?: Menu;
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
  interface GetMenuRequest {
      /** ID of the menu to retrieve. */
      menuId: string;
  }
  interface GetMenuResponse {
      /** The retrieved menu. */
      menu?: Menu;
  }
  interface ListMenusRequest {
      /** IDs of the menus to be listed. */
      menuIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging;
  }
  interface CursorPaging {
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
      /** The retrieved menus. */
      menus?: Menu[];
      /** The metadata of the paginated results. */
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
  interface QueryMenusRequest {
      /** The query by which to select menus. */
      query?: CursorQuery;
  }
  interface CursorQuery extends CursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
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
      /** Sort order. */
      order?: SortOrder;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryMenusResponse {
      /** The retrieved menus. */
      menus?: Menu[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata;
  }
  interface UpdateMenuRequest {
      /** Menu to be updated, may be partial. */
      menu: Menu;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateMenuResponse {
      /** The updated menu. */
      menu?: Menu;
  }
  interface BulkUpdateMenuRequest {
      /** Menus to be updated. */
      menus: MaskedMenu[];
      /** Set to `true` if you wish to receive back the created menus in the response. */
      returnEntity?: boolean;
  }
  interface MaskedMenu {
      /** Menu to be updated, may be partial. */
      menu?: Menu;
      /** Explicit list of fields to update. */
      mask?: string[];
  }
  interface BulkUpdateMenuResponse {
      /** Results of bulk menu update. */
      results?: BulkMenuResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkMenuResult {
      /** Set to `true` if you wish to receive back the updated menus in the response. */
      menuMetadata?: ItemMetadata;
      /** The Updated menu. */
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
      /** Namespace of data-extensions. */
      namespace?: string;
      /** Only data from UpdateExtendedFieldsRequest namespace_data. */
      namespaceData?: Record<string, any> | null;
  }
  interface DeleteMenuRequest {
      /** ID of the menu to delete. */
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
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  interface Empty {
  }
  /**
   * Creates a new Menu.
   * @param menu - Menu to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField menu
   * @adminMethod
   * @returns The created Menu.
   */
  function createMenu(menu: Menu): Promise<Menu>;
  /**
   * Bulk create new menus.
   * @param menus - Items to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField menus
   * @adminMethod
   */
  function bulkCreateMenus(menus: Menu[], options?: BulkCreateMenusOptions): Promise<BulkCreateMenusResponse>;
  interface BulkCreateMenusOptions {
      /** Set to `true` if you wish to receive back the created menus in the response */
      returnEntity?: boolean;
  }
  /**
   * Get a menu by id.
   * @param menuId - ID of the menu to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField menuId
   * @returns The retrieved menu.
   */
  function getMenu(menuId: string): Promise<Menu>;
  /**
   * Retrieves a list of menus.
   *
   * Up to 500 menus can be returned.
   * @internal
   * @documentationMaturity preview
   */
  function listMenus(options?: ListMenusOptions): Promise<ListMenusResponse>;
  interface ListMenusOptions {
      /** IDs of the menus to be listed. */
      menuIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging;
  }
  /**
   * Retrieves a list of menus by a given query.
   *
   * To learn how to query menus, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   *
   * Up to 500 menus can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function queryMenus(): MenusQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface MenusQueryResult extends QueryCursorResult {
      items: Menu[];
      query: MenusQueryBuilder;
      next: () => Promise<MenusQueryResult>;
      prev: () => Promise<MenusQueryResult>;
  }
  interface MenusQueryBuilder {
      /** @documentationMaturity preview */
      in: (propertyName: 'sectionIds', value: any) => MenusQueryBuilder;
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
   * Update a menu, supports partial update.
   *
   * Each time a menu is updated, revision increments by 1. The existing revision must be included when updating a menu. This ensures you're working with the latest menu information, and it prevents unintended overwrites.
   * @param _id - Menu ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField menu
   * @requiredField menu.revision
   * @adminMethod
   * @returns The updated menu.
   */
  function updateMenu(_id: string | null, menu: UpdateMenu, options?: UpdateMenuOptions): Promise<Menu>;
  interface UpdateMenu {
      /**
       * Menu ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of a menu. Each time the menu is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Menu was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Menu was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Menu name. */
      name?: string;
      /** Menu description. */
      description?: string | null;
      /** Is visible. */
      visible?: boolean | null;
      /** Section ids. */
      sectionIds?: string[];
      /** Order index. */
      orderIdx?: number | null;
      /** Data extension. */
      extendedFields?: ExtendedFields;
      /** URL query param for displaying the menu in the livesite. */
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
   * Bulk update a menu, supports partial update.
   *
   * Each time a menu is updated, revision increments by 1. The existing revision must be included when updating the menu. This ensures you're working with the latest menu information, and it prevents unintended overwrites.
   *
   * Up to 500 menus can be returned per request.
   * @param menus - Menus to be updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField menus
   * @requiredField menus.menu._id
   * @requiredField menus.menu.revision
   * @adminMethod
   */
  function bulkUpdateMenu(menus: MaskedMenu[], options?: BulkUpdateMenuOptions): Promise<BulkUpdateMenuResponse>;
  interface BulkUpdateMenuOptions {
      /** Set to `true` if you wish to receive back the created menus in the response. */
      returnEntity?: boolean;
  }
  /**
   * Update Extended Fields of the Menu.
   * @param _id - ID of the entity to update.
   * @param namespace - Identifier for the app whose extended fields are being updated.
   * @internal
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
   * Delete a Menu.
   * @param menuId - ID of the menu to delete.
   * @internal
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
  
  const restaurantsMenusV1Menu_universal_d___debug: typeof __debug;
  type restaurantsMenusV1Menu_universal_d_Menu = Menu;
  type restaurantsMenusV1Menu_universal_d_ExtendedFields = ExtendedFields;
  type restaurantsMenusV1Menu_universal_d_InvalidateCache = InvalidateCache;
  type restaurantsMenusV1Menu_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type restaurantsMenusV1Menu_universal_d_App = App;
  type restaurantsMenusV1Menu_universal_d_Page = Page;
  type restaurantsMenusV1Menu_universal_d_URI = URI;
  type restaurantsMenusV1Menu_universal_d_DeleteOrphanSections = DeleteOrphanSections;
  type restaurantsMenusV1Menu_universal_d_CreateMenuRequest = CreateMenuRequest;
  type restaurantsMenusV1Menu_universal_d_CreateMenuResponse = CreateMenuResponse;
  type restaurantsMenusV1Menu_universal_d_BulkCreateMenusRequest = BulkCreateMenusRequest;
  type restaurantsMenusV1Menu_universal_d_BulkCreateMenusResponse = BulkCreateMenusResponse;
  type restaurantsMenusV1Menu_universal_d_BulkCreateMenuResult = BulkCreateMenuResult;
  type restaurantsMenusV1Menu_universal_d_ItemMetadata = ItemMetadata;
  type restaurantsMenusV1Menu_universal_d_ApplicationError = ApplicationError;
  type restaurantsMenusV1Menu_universal_d_BulkActionMetadata = BulkActionMetadata;
  type restaurantsMenusV1Menu_universal_d_GetMenuRequest = GetMenuRequest;
  type restaurantsMenusV1Menu_universal_d_GetMenuResponse = GetMenuResponse;
  type restaurantsMenusV1Menu_universal_d_ListMenusRequest = ListMenusRequest;
  type restaurantsMenusV1Menu_universal_d_CursorPaging = CursorPaging;
  type restaurantsMenusV1Menu_universal_d_ListMenusResponse = ListMenusResponse;
  type restaurantsMenusV1Menu_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type restaurantsMenusV1Menu_universal_d_Cursors = Cursors;
  type restaurantsMenusV1Menu_universal_d_QueryMenusRequest = QueryMenusRequest;
  type restaurantsMenusV1Menu_universal_d_CursorQuery = CursorQuery;
  type restaurantsMenusV1Menu_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type restaurantsMenusV1Menu_universal_d_Sorting = Sorting;
  type restaurantsMenusV1Menu_universal_d_SortOrder = SortOrder;
  const restaurantsMenusV1Menu_universal_d_SortOrder: typeof SortOrder;
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
  type restaurantsMenusV1Menu_universal_d_DomainEvent = DomainEvent;
  type restaurantsMenusV1Menu_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type restaurantsMenusV1Menu_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type restaurantsMenusV1Menu_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type restaurantsMenusV1Menu_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type restaurantsMenusV1Menu_universal_d_ActionEvent = ActionEvent;
  type restaurantsMenusV1Menu_universal_d_Empty = Empty;
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
      restaurantsMenusV1Menu_universal_d___debug as __debug,
      restaurantsMenusV1Menu_universal_d_Menu as Menu,
      restaurantsMenusV1Menu_universal_d_ExtendedFields as ExtendedFields,
      restaurantsMenusV1Menu_universal_d_InvalidateCache as InvalidateCache,
      restaurantsMenusV1Menu_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      restaurantsMenusV1Menu_universal_d_App as App,
      restaurantsMenusV1Menu_universal_d_Page as Page,
      restaurantsMenusV1Menu_universal_d_URI as URI,
      restaurantsMenusV1Menu_universal_d_DeleteOrphanSections as DeleteOrphanSections,
      restaurantsMenusV1Menu_universal_d_CreateMenuRequest as CreateMenuRequest,
      restaurantsMenusV1Menu_universal_d_CreateMenuResponse as CreateMenuResponse,
      restaurantsMenusV1Menu_universal_d_BulkCreateMenusRequest as BulkCreateMenusRequest,
      restaurantsMenusV1Menu_universal_d_BulkCreateMenusResponse as BulkCreateMenusResponse,
      restaurantsMenusV1Menu_universal_d_BulkCreateMenuResult as BulkCreateMenuResult,
      restaurantsMenusV1Menu_universal_d_ItemMetadata as ItemMetadata,
      restaurantsMenusV1Menu_universal_d_ApplicationError as ApplicationError,
      restaurantsMenusV1Menu_universal_d_BulkActionMetadata as BulkActionMetadata,
      restaurantsMenusV1Menu_universal_d_GetMenuRequest as GetMenuRequest,
      restaurantsMenusV1Menu_universal_d_GetMenuResponse as GetMenuResponse,
      restaurantsMenusV1Menu_universal_d_ListMenusRequest as ListMenusRequest,
      restaurantsMenusV1Menu_universal_d_CursorPaging as CursorPaging,
      restaurantsMenusV1Menu_universal_d_ListMenusResponse as ListMenusResponse,
      restaurantsMenusV1Menu_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      restaurantsMenusV1Menu_universal_d_Cursors as Cursors,
      restaurantsMenusV1Menu_universal_d_QueryMenusRequest as QueryMenusRequest,
      restaurantsMenusV1Menu_universal_d_CursorQuery as CursorQuery,
      restaurantsMenusV1Menu_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      restaurantsMenusV1Menu_universal_d_Sorting as Sorting,
      restaurantsMenusV1Menu_universal_d_SortOrder as SortOrder,
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
      restaurantsMenusV1Menu_universal_d_DomainEvent as DomainEvent,
      restaurantsMenusV1Menu_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      restaurantsMenusV1Menu_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      restaurantsMenusV1Menu_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      restaurantsMenusV1Menu_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      restaurantsMenusV1Menu_universal_d_ActionEvent as ActionEvent,
      restaurantsMenusV1Menu_universal_d_Empty as Empty,
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
  
  export { restaurantsMenusV1Item_universal_d as menuItems, restaurantsMenusV1Menu_universal_d as menus, restaurantsMenusV1Section_universal_d as sections };
}
