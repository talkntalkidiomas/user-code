declare module "wix-stores-v3" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Brand is the main entity of Brands that can be used for lorem ipsum dolor */
  interface Brand {
      /**
       * Brand ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server.
       * for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Brand was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Brand was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Brand name */
      name?: string;
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
  interface CreateBrandRequest {
      /** Brand to be created */
      brand: Brand;
  }
  interface CreateBrandResponse {
      /** The created Brand */
      brand?: Brand;
  }
  interface GetBrandRequest {
      /** Id of the Brand to retrieve */
      brandId: string;
  }
  interface GetBrandResponse {
      /** The retrieved Brand */
      brand?: Brand;
  }
  interface UpdateBrandRequest {
      /** Brand to be updated, may be partial */
      brand: Brand;
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateBrandResponse {
      /** The updated Brand */
      brand?: Brand;
  }
  interface DeleteBrandRequest {
      /** Id of the Brand to delete */
      brandId: string;
  }
  interface DeleteBrandResponse {
  }
  interface QueryBrandsRequest {
      /** WQL expression */
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
  interface QueryBrandsResponse {
      /** The retrieved Brands */
      brands?: Brand[];
      /** Paging metadata */
      pagingMetadata?: CursorPagingMetadata;
  }
  interface CursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: Cursors;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface BulkCreateBrandsRequest {
      /** List of brands to be created or updated. */
      brands: Brand[];
      /** Whether to return the full brand entity in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateBrandsResponse {
      /** brands created by bulk action. */
      results?: BulkBrandsResults[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkBrandsResults {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata;
      /** Updated brand Optional - returned only if requested with `return_entity` set to `true`. */
      item?: Brand;
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
  interface BulkUpdateBrandsRequest {
      /** List of brands to be updated */
      brands: MaskedBrand[];
      /** Whether to return the full category entity in the response. */
      returnEntity?: boolean;
  }
  interface MaskedBrand {
      /** brands to be updated, may be partial */
      brand?: Brand;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateBrandsResponse {
      /** Updated brands */
      results?: BulkBrandsResults[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface GetOrCreateBrandRequest {
      /** The brand name to fetch or create if doesn't exist */
      brandName: string;
  }
  interface GetOrCreateBrandResponse {
      brand?: Brand;
  }
  interface BulkGetOrCreateBrandsRequest {
      /** The brands names to fetch or create if they don't exist */
      brandNames: string[];
  }
  interface BulkGetOrCreateBrandsResponse {
      /** brands created by bulk action. */
      results?: BulkBrandsResults[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDeleteBrandsRequest {
      /** IDs of brands to delete. */
      brandIds: string[];
  }
  interface BulkDeleteBrandsResponse {
      /** bulk action results */
      results?: ItemMetadata[];
      /** Bulk action metadata. */
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
  interface Empty {
  }
  /**
   * Creates a new Brand
   * @param brand - Brand to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField brand
   * @requiredField brand.name
   * @adminMethod
   * @returns The created Brand
   */
  function createBrand(brand: Brand): Promise<Brand>;
  /**
   * Get a Brand by id
   * @param brandId - Id of the Brand to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField brandId
   * @adminMethod
   * @returns The retrieved Brand
   */
  function getBrand(brandId: string): Promise<Brand>;
  /**
   * Update a Brand, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - Brand ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField brand
   * @requiredField brand.revision
   * @adminMethod
   * @returns The updated Brand
   */
  function updateBrand(_id: string | null, brand: UpdateBrand, options?: UpdateBrandOptions): Promise<Brand>;
  interface UpdateBrand {
      /**
       * Brand ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server.
       * for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Brand was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Brand was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Brand name */
      name?: string;
  }
  interface UpdateBrandOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Delete a Brand, the deleted brand will also be removed from any product it's assigned to
   * @param brandId - Id of the Brand to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField brandId
   * @adminMethod
   */
  function deleteBrand(brandId: string): Promise<void>;
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryBrands(): BrandsQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface BrandsQueryResult extends QueryCursorResult {
      items: Brand[];
      query: BrandsQueryBuilder;
      next: () => Promise<BrandsQueryResult>;
      prev: () => Promise<BrandsQueryResult>;
  }
  interface BrandsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'name', value: any) => BrandsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'name', value: any) => BrandsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'name', value: string) => BrandsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | 'name', value: any[]) => BrandsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'name', value: any) => BrandsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | 'name', value: boolean) => BrandsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'name'>) => BrandsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'name'>) => BrandsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => BrandsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => BrandsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<BrandsQueryResult>;
  }
  /**
   * Creates multiple brands.
   * @param brands - List of brands to be created or updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField brands
   * @requiredField brands.name
   * @adminMethod
   */
  function bulkCreateBrands(brands: Brand[], options?: BulkCreateBrandsOptions): Promise<BulkCreateBrandsResponse>;
  interface BulkCreateBrandsOptions {
      /** Whether to return the full brand entity in the response. */
      returnEntity?: boolean;
  }
  /**
   * Bulk updates brands
   * @param brands - List of brands to be updated
   * @internal
   * @documentationMaturity preview
   * @requiredField brands
   * @requiredField brands.brand._id
   * @requiredField brands.brand.revision
   * @adminMethod
   */
  function bulkUpdateBrands(brands: MaskedBrand[], options?: BulkUpdateBrandsOptions): Promise<BulkUpdateBrandsResponse>;
  interface BulkUpdateBrandsOptions {
      /** Whether to return the full category entity in the response. */
      returnEntity?: boolean;
  }
  /**
   * Fetches the brand by name, or creates it if it doesn't exist.
   * @param brandName - The brand name to fetch or create if doesn't exist
   * @internal
   * @documentationMaturity preview
   * @requiredField brandName
   * @adminMethod
   */
  function getOrCreateBrand(brandName: string): Promise<GetOrCreateBrandResponse>;
  /**
   * Fetches brands by name, or creates them if they doesn't exist.
   * @param brandNames - The brands names to fetch or create if they don't exist
   * @internal
   * @documentationMaturity preview
   * @requiredField brandNames
   * @adminMethod
   */
  function bulkGetOrCreateBrands(brandNames: string[]): Promise<BulkGetOrCreateBrandsResponse>;
  /**
   * Deletes multiple brands
   * @param brandIds - IDs of brands to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField brandIds
   * @adminMethod
   */
  function bulkDeleteBrands(brandIds: string[]): Promise<BulkDeleteBrandsResponse>;
  
  const storesCatalogV3Brand_universal_d___debug: typeof __debug;
  type storesCatalogV3Brand_universal_d_Brand = Brand;
  type storesCatalogV3Brand_universal_d_InvalidateCache = InvalidateCache;
  type storesCatalogV3Brand_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type storesCatalogV3Brand_universal_d_App = App;
  type storesCatalogV3Brand_universal_d_Page = Page;
  type storesCatalogV3Brand_universal_d_URI = URI;
  type storesCatalogV3Brand_universal_d_CreateBrandRequest = CreateBrandRequest;
  type storesCatalogV3Brand_universal_d_CreateBrandResponse = CreateBrandResponse;
  type storesCatalogV3Brand_universal_d_GetBrandRequest = GetBrandRequest;
  type storesCatalogV3Brand_universal_d_GetBrandResponse = GetBrandResponse;
  type storesCatalogV3Brand_universal_d_UpdateBrandRequest = UpdateBrandRequest;
  type storesCatalogV3Brand_universal_d_UpdateBrandResponse = UpdateBrandResponse;
  type storesCatalogV3Brand_universal_d_DeleteBrandRequest = DeleteBrandRequest;
  type storesCatalogV3Brand_universal_d_DeleteBrandResponse = DeleteBrandResponse;
  type storesCatalogV3Brand_universal_d_QueryBrandsRequest = QueryBrandsRequest;
  type storesCatalogV3Brand_universal_d_CursorQuery = CursorQuery;
  type storesCatalogV3Brand_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type storesCatalogV3Brand_universal_d_Sorting = Sorting;
  type storesCatalogV3Brand_universal_d_SortOrder = SortOrder;
  const storesCatalogV3Brand_universal_d_SortOrder: typeof SortOrder;
  type storesCatalogV3Brand_universal_d_CursorPaging = CursorPaging;
  type storesCatalogV3Brand_universal_d_QueryBrandsResponse = QueryBrandsResponse;
  type storesCatalogV3Brand_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type storesCatalogV3Brand_universal_d_Cursors = Cursors;
  type storesCatalogV3Brand_universal_d_BulkCreateBrandsRequest = BulkCreateBrandsRequest;
  type storesCatalogV3Brand_universal_d_BulkCreateBrandsResponse = BulkCreateBrandsResponse;
  type storesCatalogV3Brand_universal_d_BulkBrandsResults = BulkBrandsResults;
  type storesCatalogV3Brand_universal_d_ItemMetadata = ItemMetadata;
  type storesCatalogV3Brand_universal_d_ApplicationError = ApplicationError;
  type storesCatalogV3Brand_universal_d_BulkActionMetadata = BulkActionMetadata;
  type storesCatalogV3Brand_universal_d_BulkUpdateBrandsRequest = BulkUpdateBrandsRequest;
  type storesCatalogV3Brand_universal_d_MaskedBrand = MaskedBrand;
  type storesCatalogV3Brand_universal_d_BulkUpdateBrandsResponse = BulkUpdateBrandsResponse;
  type storesCatalogV3Brand_universal_d_GetOrCreateBrandRequest = GetOrCreateBrandRequest;
  type storesCatalogV3Brand_universal_d_GetOrCreateBrandResponse = GetOrCreateBrandResponse;
  type storesCatalogV3Brand_universal_d_BulkGetOrCreateBrandsRequest = BulkGetOrCreateBrandsRequest;
  type storesCatalogV3Brand_universal_d_BulkGetOrCreateBrandsResponse = BulkGetOrCreateBrandsResponse;
  type storesCatalogV3Brand_universal_d_BulkDeleteBrandsRequest = BulkDeleteBrandsRequest;
  type storesCatalogV3Brand_universal_d_BulkDeleteBrandsResponse = BulkDeleteBrandsResponse;
  type storesCatalogV3Brand_universal_d_DomainEvent = DomainEvent;
  type storesCatalogV3Brand_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type storesCatalogV3Brand_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type storesCatalogV3Brand_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type storesCatalogV3Brand_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type storesCatalogV3Brand_universal_d_ActionEvent = ActionEvent;
  type storesCatalogV3Brand_universal_d_Empty = Empty;
  const storesCatalogV3Brand_universal_d_createBrand: typeof createBrand;
  const storesCatalogV3Brand_universal_d_getBrand: typeof getBrand;
  const storesCatalogV3Brand_universal_d_updateBrand: typeof updateBrand;
  type storesCatalogV3Brand_universal_d_UpdateBrand = UpdateBrand;
  type storesCatalogV3Brand_universal_d_UpdateBrandOptions = UpdateBrandOptions;
  const storesCatalogV3Brand_universal_d_deleteBrand: typeof deleteBrand;
  const storesCatalogV3Brand_universal_d_queryBrands: typeof queryBrands;
  type storesCatalogV3Brand_universal_d_BrandsQueryResult = BrandsQueryResult;
  type storesCatalogV3Brand_universal_d_BrandsQueryBuilder = BrandsQueryBuilder;
  const storesCatalogV3Brand_universal_d_bulkCreateBrands: typeof bulkCreateBrands;
  type storesCatalogV3Brand_universal_d_BulkCreateBrandsOptions = BulkCreateBrandsOptions;
  const storesCatalogV3Brand_universal_d_bulkUpdateBrands: typeof bulkUpdateBrands;
  type storesCatalogV3Brand_universal_d_BulkUpdateBrandsOptions = BulkUpdateBrandsOptions;
  const storesCatalogV3Brand_universal_d_getOrCreateBrand: typeof getOrCreateBrand;
  const storesCatalogV3Brand_universal_d_bulkGetOrCreateBrands: typeof bulkGetOrCreateBrands;
  const storesCatalogV3Brand_universal_d_bulkDeleteBrands: typeof bulkDeleteBrands;
  namespace storesCatalogV3Brand_universal_d {
    export {
      storesCatalogV3Brand_universal_d___debug as __debug,
      storesCatalogV3Brand_universal_d_Brand as Brand,
      storesCatalogV3Brand_universal_d_InvalidateCache as InvalidateCache,
      storesCatalogV3Brand_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      storesCatalogV3Brand_universal_d_App as App,
      storesCatalogV3Brand_universal_d_Page as Page,
      storesCatalogV3Brand_universal_d_URI as URI,
      storesCatalogV3Brand_universal_d_CreateBrandRequest as CreateBrandRequest,
      storesCatalogV3Brand_universal_d_CreateBrandResponse as CreateBrandResponse,
      storesCatalogV3Brand_universal_d_GetBrandRequest as GetBrandRequest,
      storesCatalogV3Brand_universal_d_GetBrandResponse as GetBrandResponse,
      storesCatalogV3Brand_universal_d_UpdateBrandRequest as UpdateBrandRequest,
      storesCatalogV3Brand_universal_d_UpdateBrandResponse as UpdateBrandResponse,
      storesCatalogV3Brand_universal_d_DeleteBrandRequest as DeleteBrandRequest,
      storesCatalogV3Brand_universal_d_DeleteBrandResponse as DeleteBrandResponse,
      storesCatalogV3Brand_universal_d_QueryBrandsRequest as QueryBrandsRequest,
      storesCatalogV3Brand_universal_d_CursorQuery as CursorQuery,
      storesCatalogV3Brand_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      storesCatalogV3Brand_universal_d_Sorting as Sorting,
      storesCatalogV3Brand_universal_d_SortOrder as SortOrder,
      storesCatalogV3Brand_universal_d_CursorPaging as CursorPaging,
      storesCatalogV3Brand_universal_d_QueryBrandsResponse as QueryBrandsResponse,
      storesCatalogV3Brand_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      storesCatalogV3Brand_universal_d_Cursors as Cursors,
      storesCatalogV3Brand_universal_d_BulkCreateBrandsRequest as BulkCreateBrandsRequest,
      storesCatalogV3Brand_universal_d_BulkCreateBrandsResponse as BulkCreateBrandsResponse,
      storesCatalogV3Brand_universal_d_BulkBrandsResults as BulkBrandsResults,
      storesCatalogV3Brand_universal_d_ItemMetadata as ItemMetadata,
      storesCatalogV3Brand_universal_d_ApplicationError as ApplicationError,
      storesCatalogV3Brand_universal_d_BulkActionMetadata as BulkActionMetadata,
      storesCatalogV3Brand_universal_d_BulkUpdateBrandsRequest as BulkUpdateBrandsRequest,
      storesCatalogV3Brand_universal_d_MaskedBrand as MaskedBrand,
      storesCatalogV3Brand_universal_d_BulkUpdateBrandsResponse as BulkUpdateBrandsResponse,
      storesCatalogV3Brand_universal_d_GetOrCreateBrandRequest as GetOrCreateBrandRequest,
      storesCatalogV3Brand_universal_d_GetOrCreateBrandResponse as GetOrCreateBrandResponse,
      storesCatalogV3Brand_universal_d_BulkGetOrCreateBrandsRequest as BulkGetOrCreateBrandsRequest,
      storesCatalogV3Brand_universal_d_BulkGetOrCreateBrandsResponse as BulkGetOrCreateBrandsResponse,
      storesCatalogV3Brand_universal_d_BulkDeleteBrandsRequest as BulkDeleteBrandsRequest,
      storesCatalogV3Brand_universal_d_BulkDeleteBrandsResponse as BulkDeleteBrandsResponse,
      storesCatalogV3Brand_universal_d_DomainEvent as DomainEvent,
      storesCatalogV3Brand_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      storesCatalogV3Brand_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      storesCatalogV3Brand_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      storesCatalogV3Brand_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      storesCatalogV3Brand_universal_d_ActionEvent as ActionEvent,
      storesCatalogV3Brand_universal_d_Empty as Empty,
      storesCatalogV3Brand_universal_d_createBrand as createBrand,
      storesCatalogV3Brand_universal_d_getBrand as getBrand,
      storesCatalogV3Brand_universal_d_updateBrand as updateBrand,
      storesCatalogV3Brand_universal_d_UpdateBrand as UpdateBrand,
      storesCatalogV3Brand_universal_d_UpdateBrandOptions as UpdateBrandOptions,
      storesCatalogV3Brand_universal_d_deleteBrand as deleteBrand,
      storesCatalogV3Brand_universal_d_queryBrands as queryBrands,
      storesCatalogV3Brand_universal_d_BrandsQueryResult as BrandsQueryResult,
      storesCatalogV3Brand_universal_d_BrandsQueryBuilder as BrandsQueryBuilder,
      storesCatalogV3Brand_universal_d_bulkCreateBrands as bulkCreateBrands,
      storesCatalogV3Brand_universal_d_BulkCreateBrandsOptions as BulkCreateBrandsOptions,
      storesCatalogV3Brand_universal_d_bulkUpdateBrands as bulkUpdateBrands,
      storesCatalogV3Brand_universal_d_BulkUpdateBrandsOptions as BulkUpdateBrandsOptions,
      storesCatalogV3Brand_universal_d_getOrCreateBrand as getOrCreateBrand,
      storesCatalogV3Brand_universal_d_bulkGetOrCreateBrands as bulkGetOrCreateBrands,
      storesCatalogV3Brand_universal_d_bulkDeleteBrands as bulkDeleteBrands,
    };
  }
  
  export { storesCatalogV3Brand_universal_d as brand };
}
