declare module "wix-stores.v3" {
  /** Brand is the main entity of Brands that can be used for lorem ipsum dolor */
  interface Brand$1 {
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
      /**
       * Number of products using this brand.
       * > **Note:** This field is returned only when you pass `fields: "ASSIGNED_PRODUCT_COUNT"` in the request for Get Brand and Query Brands endpoints.
       * @readonly
       */
      assignedProductsCount?: number | null;
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
  interface CreateBrandRequest {
      /** Brand to be created */
      brand: Brand$1;
  }
  interface CreateBrandResponse {
      /** The created Brand */
      brand?: Brand$1;
  }
  interface GetBrandRequest {
      /** Id of the Brand to retrieve */
      brandId: string;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$3[];
  }
  enum RequestedFields$3 {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      ASSIGNED_PRODUCTS_COUNT = "ASSIGNED_PRODUCTS_COUNT"
  }
  interface GetBrandResponse {
      /** The retrieved Brand */
      brand?: Brand$1;
  }
  interface UpdateBrandRequest {
      /** Brand to be updated, may be partial */
      brand: Brand$1;
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$3[];
  }
  interface UpdateBrandResponse {
      /** The updated Brand */
      brand?: Brand$1;
  }
  interface DeleteBrandRequest {
      /** Id of the Brand to delete */
      brandId: string;
  }
  interface DeleteBrandResponse {
  }
  interface QueryBrandsRequest {
      /** WQL expression */
      query?: CursorQuery$4;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$3[];
  }
  interface CursorQuery$4 extends CursorQueryPagingMethodOneOf$4 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$5;
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
  interface CursorQueryPagingMethodOneOf$4 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$5;
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
  interface CursorPaging$5 {
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
      brands?: Brand$1[];
      /** Paging metadata */
      pagingMetadata?: CursorPagingMetadata$5;
  }
  interface CursorPagingMetadata$5 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: Cursors$5;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$5 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface BulkCreateBrandsRequest {
      /** List of brands to be created or updated. */
      brands: Brand$1[];
      /** Whether to return the full brand entity in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateBrandsResponse {
      /** brands created by bulk action. */
      results?: BulkBrandsResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$4;
  }
  interface BulkBrandsResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$4;
      /** Updated brand Optional - returned only if requested with `return_entity` set to `true`. */
      item?: Brand$1;
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
  interface BulkUpdateBrandsRequest {
      /** List of brands to be updated */
      brands: MaskedBrand[];
      /** Whether to return the full brand entity in the response. */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$3[];
  }
  interface MaskedBrand {
      /** brands to be updated, may be partial */
      brand?: Brand$1;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateBrandsResponse {
      /** Updated brands */
      results?: BulkBrandsResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$4;
  }
  interface GetOrCreateBrandRequest {
      /** The brand name to fetch or create if doesn't exist */
      brandName: string;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$3[];
  }
  interface GetOrCreateBrandResponse {
      /** The retrieved, or created Brand */
      brand?: Brand$1;
  }
  interface BulkGetOrCreateBrandsRequest {
      /** The brands names to fetch or create if they don't exist */
      brandNames: string[];
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$3[];
  }
  interface BulkGetOrCreateBrandsResponse {
      /** brands created by bulk action. */
      results?: BulkBrandsResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$4;
  }
  interface BulkDeleteBrandsRequest {
      /** IDs of brands to delete. */
      brandIds: string[];
  }
  interface BulkDeleteBrandsResponse {
      /** bulk action results */
      results?: ItemMetadata$4[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$4;
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
  interface Empty$5 {
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
   * Creates a new Brand
   * @param brand - Brand to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField brand
   * @requiredField brand.name
   * @adminMethod
   * @returns The created Brand
   */
  function createBrand(brand: Brand$1): Promise<Brand$1>;
  /**
   * Get a Brand by id
   * @param brandId - Id of the Brand to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField brandId
   * @returns The retrieved Brand
   */
  function getBrand(brandId: string, options?: GetBrandOptions): Promise<Brand$1>;
  interface GetBrandOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$3[];
  }
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
  function updateBrand(_id: string | null, brand: UpdateBrand, options?: UpdateBrandOptions): Promise<Brand$1>;
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
      /**
       * Number of products using this brand.
       * > **Note:** This field is returned only when you pass `fields: "ASSIGNED_PRODUCT_COUNT"` in the request for Get Brand and Query Brands endpoints.
       * @readonly
       */
      assignedProductsCount?: number | null;
  }
  interface UpdateBrandOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$3[];
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
  /**
   * Query Brands using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   */
  function queryBrands(options?: QueryBrandsOptions): BrandsQueryBuilder;
  interface QueryBrandsOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$3[] | undefined;
  }
  interface QueryCursorResult$5 {
      cursors: Cursors$5;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface BrandsQueryResult extends QueryCursorResult$5 {
      items: Brand$1[];
      query: BrandsQueryBuilder;
      next: () => Promise<BrandsQueryResult>;
      prev: () => Promise<BrandsQueryResult>;
  }
  interface BrandsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name', value: any) => BrandsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name', value: any) => BrandsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => BrandsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => BrandsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => BrandsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => BrandsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'name', value: string) => BrandsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name', value: any[]) => BrandsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name', value: any) => BrandsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name', value: boolean) => BrandsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_createdDate' | '_updatedDate' | 'name'>) => BrandsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_createdDate' | '_updatedDate' | 'name'>) => BrandsQueryBuilder;
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
  function bulkCreateBrands(brands: Brand$1[], options?: BulkCreateBrandsOptions): Promise<BulkCreateBrandsResponse>;
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
      /** Whether to return the full brand entity in the response. */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$3[];
  }
  /**
   * Fetches the brand by name, or creates it if it doesn't exist.
   * @param brandName - The brand name to fetch or create if doesn't exist
   * @internal
   * @documentationMaturity preview
   * @requiredField brandName
   * @adminMethod
   */
  function getOrCreateBrand(brandName: string, options?: GetOrCreateBrandOptions): Promise<GetOrCreateBrandResponse>;
  interface GetOrCreateBrandOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$3[];
  }
  /**
   * Fetches brands by name, or creates them if they doesn't exist.
   * @param brandNames - The brands names to fetch or create if they don't exist
   * @internal
   * @documentationMaturity preview
   * @requiredField brandNames
   * @adminMethod
   */
  function bulkGetOrCreateBrands(brandNames: string[], options?: BulkGetOrCreateBrandsOptions): Promise<BulkGetOrCreateBrandsResponse>;
  interface BulkGetOrCreateBrandsOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$3[];
  }
  /**
   * Deletes multiple brands
   * @param brandIds - IDs of brands to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField brandIds
   * @adminMethod
   */
  function bulkDeleteBrands(brandIds: string[]): Promise<BulkDeleteBrandsResponse>;
  
  type storesCatalogV3Brand_universal_d_CreateBrandRequest = CreateBrandRequest;
  type storesCatalogV3Brand_universal_d_CreateBrandResponse = CreateBrandResponse;
  type storesCatalogV3Brand_universal_d_GetBrandRequest = GetBrandRequest;
  type storesCatalogV3Brand_universal_d_GetBrandResponse = GetBrandResponse;
  type storesCatalogV3Brand_universal_d_UpdateBrandRequest = UpdateBrandRequest;
  type storesCatalogV3Brand_universal_d_UpdateBrandResponse = UpdateBrandResponse;
  type storesCatalogV3Brand_universal_d_DeleteBrandRequest = DeleteBrandRequest;
  type storesCatalogV3Brand_universal_d_DeleteBrandResponse = DeleteBrandResponse;
  type storesCatalogV3Brand_universal_d_QueryBrandsRequest = QueryBrandsRequest;
  type storesCatalogV3Brand_universal_d_QueryBrandsResponse = QueryBrandsResponse;
  type storesCatalogV3Brand_universal_d_BulkCreateBrandsRequest = BulkCreateBrandsRequest;
  type storesCatalogV3Brand_universal_d_BulkCreateBrandsResponse = BulkCreateBrandsResponse;
  type storesCatalogV3Brand_universal_d_BulkBrandsResult = BulkBrandsResult;
  type storesCatalogV3Brand_universal_d_BulkUpdateBrandsRequest = BulkUpdateBrandsRequest;
  type storesCatalogV3Brand_universal_d_MaskedBrand = MaskedBrand;
  type storesCatalogV3Brand_universal_d_BulkUpdateBrandsResponse = BulkUpdateBrandsResponse;
  type storesCatalogV3Brand_universal_d_GetOrCreateBrandRequest = GetOrCreateBrandRequest;
  type storesCatalogV3Brand_universal_d_GetOrCreateBrandResponse = GetOrCreateBrandResponse;
  type storesCatalogV3Brand_universal_d_BulkGetOrCreateBrandsRequest = BulkGetOrCreateBrandsRequest;
  type storesCatalogV3Brand_universal_d_BulkGetOrCreateBrandsResponse = BulkGetOrCreateBrandsResponse;
  type storesCatalogV3Brand_universal_d_BulkDeleteBrandsRequest = BulkDeleteBrandsRequest;
  type storesCatalogV3Brand_universal_d_BulkDeleteBrandsResponse = BulkDeleteBrandsResponse;
  const storesCatalogV3Brand_universal_d_createBrand: typeof createBrand;
  const storesCatalogV3Brand_universal_d_getBrand: typeof getBrand;
  type storesCatalogV3Brand_universal_d_GetBrandOptions = GetBrandOptions;
  const storesCatalogV3Brand_universal_d_updateBrand: typeof updateBrand;
  type storesCatalogV3Brand_universal_d_UpdateBrand = UpdateBrand;
  type storesCatalogV3Brand_universal_d_UpdateBrandOptions = UpdateBrandOptions;
  const storesCatalogV3Brand_universal_d_deleteBrand: typeof deleteBrand;
  const storesCatalogV3Brand_universal_d_queryBrands: typeof queryBrands;
  type storesCatalogV3Brand_universal_d_QueryBrandsOptions = QueryBrandsOptions;
  type storesCatalogV3Brand_universal_d_BrandsQueryResult = BrandsQueryResult;
  type storesCatalogV3Brand_universal_d_BrandsQueryBuilder = BrandsQueryBuilder;
  const storesCatalogV3Brand_universal_d_bulkCreateBrands: typeof bulkCreateBrands;
  type storesCatalogV3Brand_universal_d_BulkCreateBrandsOptions = BulkCreateBrandsOptions;
  const storesCatalogV3Brand_universal_d_bulkUpdateBrands: typeof bulkUpdateBrands;
  type storesCatalogV3Brand_universal_d_BulkUpdateBrandsOptions = BulkUpdateBrandsOptions;
  const storesCatalogV3Brand_universal_d_getOrCreateBrand: typeof getOrCreateBrand;
  type storesCatalogV3Brand_universal_d_GetOrCreateBrandOptions = GetOrCreateBrandOptions;
  const storesCatalogV3Brand_universal_d_bulkGetOrCreateBrands: typeof bulkGetOrCreateBrands;
  type storesCatalogV3Brand_universal_d_BulkGetOrCreateBrandsOptions = BulkGetOrCreateBrandsOptions;
  const storesCatalogV3Brand_universal_d_bulkDeleteBrands: typeof bulkDeleteBrands;
  namespace storesCatalogV3Brand_universal_d {
    export {
      Brand$1 as Brand,
      InvalidateCache$5 as InvalidateCache,
      InvalidateCacheGetByOneOf$5 as InvalidateCacheGetByOneOf,
      App$5 as App,
      Page$5 as Page,
      URI$5 as URI,
      File$5 as File,
      storesCatalogV3Brand_universal_d_CreateBrandRequest as CreateBrandRequest,
      storesCatalogV3Brand_universal_d_CreateBrandResponse as CreateBrandResponse,
      storesCatalogV3Brand_universal_d_GetBrandRequest as GetBrandRequest,
      RequestedFields$3 as RequestedFields,
      storesCatalogV3Brand_universal_d_GetBrandResponse as GetBrandResponse,
      storesCatalogV3Brand_universal_d_UpdateBrandRequest as UpdateBrandRequest,
      storesCatalogV3Brand_universal_d_UpdateBrandResponse as UpdateBrandResponse,
      storesCatalogV3Brand_universal_d_DeleteBrandRequest as DeleteBrandRequest,
      storesCatalogV3Brand_universal_d_DeleteBrandResponse as DeleteBrandResponse,
      storesCatalogV3Brand_universal_d_QueryBrandsRequest as QueryBrandsRequest,
      CursorQuery$4 as CursorQuery,
      CursorQueryPagingMethodOneOf$4 as CursorQueryPagingMethodOneOf,
      Sorting$5 as Sorting,
      SortOrder$5 as SortOrder,
      CursorPaging$5 as CursorPaging,
      storesCatalogV3Brand_universal_d_QueryBrandsResponse as QueryBrandsResponse,
      CursorPagingMetadata$5 as CursorPagingMetadata,
      Cursors$5 as Cursors,
      storesCatalogV3Brand_universal_d_BulkCreateBrandsRequest as BulkCreateBrandsRequest,
      storesCatalogV3Brand_universal_d_BulkCreateBrandsResponse as BulkCreateBrandsResponse,
      storesCatalogV3Brand_universal_d_BulkBrandsResult as BulkBrandsResult,
      ItemMetadata$4 as ItemMetadata,
      ApplicationError$4 as ApplicationError,
      BulkActionMetadata$4 as BulkActionMetadata,
      storesCatalogV3Brand_universal_d_BulkUpdateBrandsRequest as BulkUpdateBrandsRequest,
      storesCatalogV3Brand_universal_d_MaskedBrand as MaskedBrand,
      storesCatalogV3Brand_universal_d_BulkUpdateBrandsResponse as BulkUpdateBrandsResponse,
      storesCatalogV3Brand_universal_d_GetOrCreateBrandRequest as GetOrCreateBrandRequest,
      storesCatalogV3Brand_universal_d_GetOrCreateBrandResponse as GetOrCreateBrandResponse,
      storesCatalogV3Brand_universal_d_BulkGetOrCreateBrandsRequest as BulkGetOrCreateBrandsRequest,
      storesCatalogV3Brand_universal_d_BulkGetOrCreateBrandsResponse as BulkGetOrCreateBrandsResponse,
      storesCatalogV3Brand_universal_d_BulkDeleteBrandsRequest as BulkDeleteBrandsRequest,
      storesCatalogV3Brand_universal_d_BulkDeleteBrandsResponse as BulkDeleteBrandsResponse,
      DomainEvent$5 as DomainEvent,
      DomainEventBodyOneOf$5 as DomainEventBodyOneOf,
      EntityCreatedEvent$5 as EntityCreatedEvent,
      EntityUpdatedEvent$5 as EntityUpdatedEvent,
      EntityDeletedEvent$5 as EntityDeletedEvent,
      ActionEvent$5 as ActionEvent,
      Empty$5 as Empty,
      MessageEnvelope$5 as MessageEnvelope,
      IdentificationData$5 as IdentificationData,
      IdentificationDataIdOneOf$5 as IdentificationDataIdOneOf,
      WebhookIdentityType$5 as WebhookIdentityType,
      storesCatalogV3Brand_universal_d_createBrand as createBrand,
      storesCatalogV3Brand_universal_d_getBrand as getBrand,
      storesCatalogV3Brand_universal_d_GetBrandOptions as GetBrandOptions,
      storesCatalogV3Brand_universal_d_updateBrand as updateBrand,
      storesCatalogV3Brand_universal_d_UpdateBrand as UpdateBrand,
      storesCatalogV3Brand_universal_d_UpdateBrandOptions as UpdateBrandOptions,
      storesCatalogV3Brand_universal_d_deleteBrand as deleteBrand,
      storesCatalogV3Brand_universal_d_queryBrands as queryBrands,
      storesCatalogV3Brand_universal_d_QueryBrandsOptions as QueryBrandsOptions,
      storesCatalogV3Brand_universal_d_BrandsQueryResult as BrandsQueryResult,
      storesCatalogV3Brand_universal_d_BrandsQueryBuilder as BrandsQueryBuilder,
      storesCatalogV3Brand_universal_d_bulkCreateBrands as bulkCreateBrands,
      storesCatalogV3Brand_universal_d_BulkCreateBrandsOptions as BulkCreateBrandsOptions,
      storesCatalogV3Brand_universal_d_bulkUpdateBrands as bulkUpdateBrands,
      storesCatalogV3Brand_universal_d_BulkUpdateBrandsOptions as BulkUpdateBrandsOptions,
      storesCatalogV3Brand_universal_d_getOrCreateBrand as getOrCreateBrand,
      storesCatalogV3Brand_universal_d_GetOrCreateBrandOptions as GetOrCreateBrandOptions,
      storesCatalogV3Brand_universal_d_bulkGetOrCreateBrands as bulkGetOrCreateBrands,
      storesCatalogV3Brand_universal_d_BulkGetOrCreateBrandsOptions as BulkGetOrCreateBrandsOptions,
      storesCatalogV3Brand_universal_d_bulkDeleteBrands as bulkDeleteBrands,
    };
  }
  
  /** InfoSection is the main entity of InfoSections */
  interface InfoSection$1 {
      /**
       * InfoSection ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this InfoSection was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this InfoSection was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * User friendly unique identifier. Customers won’t see this
       * For example, if two info sections have the same title "Return Policy", the unique name must be different: "return-policy-1", "return-policy-2".
       */
      uniqueName?: string;
      /** Info section title */
      title?: string;
      /**
       * Info section description
       * In order to use this field you have to integrate with "Ricos" on frontend side. To learn how to do it visit https://ricos.js.org/.
       */
      description?: RichContent$1;
      /**
       * Optional - RichContent description converted to html.
       * If provided on write: this description must be a valid html and will be converted to RichContent description.
       * It is ignored if provided along with RichContent description.
       */
      plainDescription?: string | null;
      /**
       * Number of products having this info section.
       * > **Note:** This field is returned only when you pass `fields: "ASSIGNED_PRODUCT_COUNT"` in the request for Get Info Section and Query Info Sections endpoints.
       * @readonly
       */
      assignedProductsCount?: number | null;
  }
  interface RichContent$1 {
      /** Node objects representing a rich content document. */
      nodes?: Node$1[];
      /** Object metadata. */
      metadata?: Metadata$1;
      /** Global styling for header, paragraph, block quote, and code block nodes in the object. */
      documentStyle?: DocumentStyle$1;
  }
  interface Node$1 extends NodeDataOneOf$1 {
      /** Data for a button node. */
      buttonData?: ButtonData$1;
      /** Data for a code block node. */
      codeBlockData?: CodeBlockData$1;
      /** Data for a divider node. */
      dividerData?: DividerData$1;
      /** Data for a file node. */
      fileData?: FileData$1;
      /** Data for a gallery node. */
      galleryData?: GalleryData$1;
      /** Data for a GIF node. */
      gifData?: GIFData$1;
      /** Data for a heading node. */
      headingData?: HeadingData$1;
      /** Data for an embedded HTML node. */
      htmlData?: HTMLData$1;
      /** Data for an image node. */
      imageData?: ImageData$1;
      /** Data for a link preview node. */
      linkPreviewData?: LinkPreviewData$1;
      /** Data for a map node. */
      mapData?: MapData$1;
      /** Data for a paragraph node. */
      paragraphData?: ParagraphData$1;
      /** Data for a poll node. */
      pollData?: PollData$1;
      /** Data for a text node. Used to apply decorations to text. */
      textData?: TextData$1;
      /** Data for an app embed node. */
      appEmbedData?: AppEmbedData$1;
      /** Data for a video node. */
      videoData?: VideoData$1;
      /** Data for an oEmbed node. */
      embedData?: EmbedData$1;
      /** Data for a collapsible list node. */
      collapsibleListData?: CollapsibleListData$1;
      /** Data for a table node. */
      tableData?: TableData$1;
      /** Data for a table cell node. */
      tableCellData?: TableCellData$1;
      /** Data for a custon external node. */
      externalData?: Record<string, any> | null;
      /** Data for an audio node. */
      audioData?: AudioData$1;
      /** Data for an ordered list node. */
      orderedListData?: OrderedListData$1;
      /** Data for a bulleted list node. */
      bulletedListData?: BulletedListData$1;
      /** Data for a block quote node. */
      blockquoteData?: BlockquoteData$1;
      /** Node type. Use `APP_EMBED` for nodes that embed content from other Wix apps. Use `EMBED` to embed content in [oEmbed](https://oembed.com/) format. */
      type?: NodeType$1;
      /** Node ID. */
      _id?: string;
      /** A list of child nodes. */
      nodes?: Node$1[];
      /** Padding and background color styling for the node. */
      style?: NodeStyle$1;
  }
  /** @oneof */
  interface NodeDataOneOf$1 {
      /** Data for a button node. */
      buttonData?: ButtonData$1;
      /** Data for a code block node. */
      codeBlockData?: CodeBlockData$1;
      /** Data for a divider node. */
      dividerData?: DividerData$1;
      /** Data for a file node. */
      fileData?: FileData$1;
      /** Data for a gallery node. */
      galleryData?: GalleryData$1;
      /** Data for a GIF node. */
      gifData?: GIFData$1;
      /** Data for a heading node. */
      headingData?: HeadingData$1;
      /** Data for an embedded HTML node. */
      htmlData?: HTMLData$1;
      /** Data for an image node. */
      imageData?: ImageData$1;
      /** Data for a link preview node. */
      linkPreviewData?: LinkPreviewData$1;
      /** Data for a map node. */
      mapData?: MapData$1;
      /** Data for a paragraph node. */
      paragraphData?: ParagraphData$1;
      /** Data for a poll node. */
      pollData?: PollData$1;
      /** Data for a text node. Used to apply decorations to text. */
      textData?: TextData$1;
      /** Data for an app embed node. */
      appEmbedData?: AppEmbedData$1;
      /** Data for a video node. */
      videoData?: VideoData$1;
      /** Data for an oEmbed node. */
      embedData?: EmbedData$1;
      /** Data for a collapsible list node. */
      collapsibleListData?: CollapsibleListData$1;
      /** Data for a table node. */
      tableData?: TableData$1;
      /** Data for a table cell node. */
      tableCellData?: TableCellData$1;
      /** Data for a custon external node. */
      externalData?: Record<string, any> | null;
      /** Data for an audio node. */
      audioData?: AudioData$1;
      /** Data for an ordered list node. */
      orderedListData?: OrderedListData$1;
      /** Data for a bulleted list node. */
      bulletedListData?: BulletedListData$1;
      /** Data for a block quote node. */
      blockquoteData?: BlockquoteData$1;
  }
  enum NodeType$1 {
      PARAGRAPH = "PARAGRAPH",
      TEXT = "TEXT",
      HEADING = "HEADING",
      BULLETED_LIST = "BULLETED_LIST",
      ORDERED_LIST = "ORDERED_LIST",
      LIST_ITEM = "LIST_ITEM",
      BLOCKQUOTE = "BLOCKQUOTE",
      CODE_BLOCK = "CODE_BLOCK",
      VIDEO = "VIDEO",
      DIVIDER = "DIVIDER",
      FILE = "FILE",
      GALLERY = "GALLERY",
      GIF = "GIF",
      HTML = "HTML",
      IMAGE = "IMAGE",
      LINK_PREVIEW = "LINK_PREVIEW",
      MAP = "MAP",
      POLL = "POLL",
      APP_EMBED = "APP_EMBED",
      BUTTON = "BUTTON",
      COLLAPSIBLE_LIST = "COLLAPSIBLE_LIST",
      TABLE = "TABLE",
      EMBED = "EMBED",
      COLLAPSIBLE_ITEM = "COLLAPSIBLE_ITEM",
      COLLAPSIBLE_ITEM_TITLE = "COLLAPSIBLE_ITEM_TITLE",
      COLLAPSIBLE_ITEM_BODY = "COLLAPSIBLE_ITEM_BODY",
      TABLE_CELL = "TABLE_CELL",
      TABLE_ROW = "TABLE_ROW",
      EXTERNAL = "EXTERNAL",
      AUDIO = "AUDIO"
  }
  interface NodeStyle$1 {
      /** The top padding value in pixels. */
      paddingTop?: string | null;
      /** The bottom padding value in pixels. */
      paddingBottom?: string | null;
      /** The background color as a hexadecimal value. */
      backgroundColor?: string | null;
  }
  interface ButtonData$1 {
      /** Styling for the button's container. */
      containerData?: PluginContainerData$1;
      /** The button type. */
      type?: Type$1;
      /** Styling for the button. */
      styles?: Styles$1;
      /** The text to display on the button. */
      text?: string | null;
      /** Button link details. */
      link?: Link$1;
  }
  interface Border$1 {
      /** Border width in pixels. */
      width?: number | null;
      /** Border radius in pixels. */
      radius?: number | null;
  }
  interface Colors$1 {
      /** The text color as a hexadecimal value. */
      text?: string | null;
      /** The border color as a hexadecimal value. */
      border?: string | null;
      /** The background color as a hexadecimal value. */
      background?: string | null;
  }
  interface PluginContainerData$1 {
      /** The width of the node when it's displayed. */
      width?: PluginContainerDataWidth$1;
      /** The node's alignment within its container. */
      alignment?: PluginContainerDataAlignment$1;
      /** Spoiler cover settings for the node. */
      spoiler?: Spoiler$1;
      /** The height of the node when it's displayed. */
      height?: Height$1;
      /** Sets whether text should wrap around this node when it's displayed. If `textWrap` is `false`, the node takes up the width of its container. */
      textWrap?: boolean | null;
  }
  enum WidthType$1 {
      /** Width matches the content width */
      CONTENT = "CONTENT",
      /** Small Width */
      SMALL = "SMALL",
      /** Width will match the original asset width */
      ORIGINAL = "ORIGINAL",
      /** coast-to-coast display */
      FULL_WIDTH = "FULL_WIDTH"
  }
  interface PluginContainerDataWidth$1 extends PluginContainerDataWidthDataOneOf$1 {
      /**
       * One of the following predefined width options:
       * `CONTENT`: The width of the container matches the content width.
       * `SMALL`: Small width.
       * `ORIGINAL`: The width of the container matches the original asset width.
       * `FULL_WIDTH`: Full width.
       */
      size?: WidthType$1;
      /** A custom width value in pixels. */
      custom?: string | null;
  }
  /** @oneof */
  interface PluginContainerDataWidthDataOneOf$1 {
      /**
       * One of the following predefined width options:
       * `CONTENT`: The width of the container matches the content width.
       * `SMALL`: Small width.
       * `ORIGINAL`: The width of the container matches the original asset width.
       * `FULL_WIDTH`: Full width.
       */
      size?: WidthType$1;
      /** A custom width value in pixels. */
      custom?: string | null;
  }
  enum PluginContainerDataAlignment$1 {
      /** Center Alignment */
      CENTER = "CENTER",
      /** Left Alignment */
      LEFT = "LEFT",
      /** Right Alignment */
      RIGHT = "RIGHT"
  }
  interface Spoiler$1 {
      /** Sets whether the spoiler cover is enabled for this node. */
      enabled?: boolean | null;
      /** The description displayed on top of the spoiler cover. */
      description?: string | null;
      /** The text for the button used to remove the spoiler cover. */
      buttonText?: string | null;
  }
  interface Height$1 {
      /** A custom height value in pixels. */
      custom?: string | null;
  }
  enum Type$1 {
      /** Regular link button */
      LINK = "LINK",
      /** Triggers custom action that is defined in plugin configuration by the consumer */
      ACTION = "ACTION"
  }
  interface Styles$1 {
      /** Border attributes. */
      border?: Border$1;
      /** Color attributes. */
      colors?: Colors$1;
  }
  interface Link$1 extends LinkDataOneOf$1 {
      /** The absolute URL for the linked document. */
      url?: string;
      /** The target node's ID. Used for linking to another node in this object. */
      anchor?: string;
      /**
       * he HTML `target` attribute value for the link. This property defines where the linked document opens as follows:
       * `SELF` - Default. Opens the linked document in the same frame as the link.
       * `BLANK` - Opens the linked document in a new browser tab or window.
       * `PARENT` - Opens the linked document in the link's parent frame.
       * `TOP` - Opens the linked document in the full body of the link's browser tab or window.
       */
      target?: Target$1;
      /** The HTML `rel` attribute value for the link. This object specifies the relationship between the current document and the linked document. */
      rel?: Rel$1;
      /** A serialized object used for a custom or external link panel. */
      customData?: string | null;
  }
  /** @oneof */
  interface LinkDataOneOf$1 {
      /** The absolute URL for the linked document. */
      url?: string;
      /** The target node's ID. Used for linking to another node in this object. */
      anchor?: string;
  }
  enum Target$1 {
      /** Opens the linked document in the same frame as it was clicked (this is default) */
      SELF = "SELF",
      /** Opens the linked document in a new window or tab */
      BLANK = "BLANK",
      /** Opens the linked document in the parent frame */
      PARENT = "PARENT",
      /** Opens the linked document in the full body of the window */
      TOP = "TOP"
  }
  interface Rel$1 {
      /** Indicates to search engine crawlers not to follow the link. */
      nofollow?: boolean | null;
      /** Indicates to search engine crawlers that the link is a paid placement such as sponsored content or an advertisement. */
      sponsored?: boolean | null;
      /** Indicates that this link is user-generated content and isn't necessarily trusted or endorsed by the page’s author. For example, a link in a fourm post. */
      ugc?: boolean | null;
      /** Indicates that this link protect referral information from being passed to the target website. */
      noreferrer?: boolean | null;
  }
  interface CodeBlockData$1 {
      /** Styling for the code block's text. */
      textStyle?: TextStyle$1;
  }
  interface TextStyle$1 {
      /** Text alignment. Defaults to `AUTO`. */
      textAlignment?: TextAlignment$1;
      /** A CSS `line-height` value for the text as a unitless ratio. */
      lineHeight?: string | null;
  }
  enum TextAlignment$1 {
      /** browser default, eqivalent to `initial` */
      AUTO = "AUTO",
      /** Left align */
      LEFT = "LEFT",
      /** Right align */
      RIGHT = "RIGHT",
      /** Center align */
      CENTER = "CENTER",
      /** Text is spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. */
      JUSTIFY = "JUSTIFY"
  }
  interface DividerData$1 {
      /** Styling for the divider's container. */
      containerData?: PluginContainerData$1;
      /** Divider line style. */
      lineStyle?: LineStyle$1;
      /** Divider width. */
      width?: Width$1;
      /** Divider alignment. */
      alignment?: Alignment$1;
  }
  enum LineStyle$1 {
      /** Single Line */
      SINGLE = "SINGLE",
      /** Double Line */
      DOUBLE = "DOUBLE",
      /** Dashed Line */
      DASHED = "DASHED",
      /** Dotted Line */
      DOTTED = "DOTTED"
  }
  enum Width$1 {
      /** Large line */
      LARGE = "LARGE",
      /** Medium line */
      MEDIUM = "MEDIUM",
      /** Small line */
      SMALL = "SMALL"
  }
  enum Alignment$1 {
      /** Center alignment */
      CENTER = "CENTER",
      /** Left alignment */
      LEFT = "LEFT",
      /** Right alignment */
      RIGHT = "RIGHT"
  }
  interface FileData$1 {
      /** Styling for the file's container. */
      containerData?: PluginContainerData$1;
      /** The source for the file's data. */
      src?: FileSource$1;
      /** File name. */
      name?: string | null;
      /** File type. */
      type?: string | null;
      /** File size in KB. */
      size?: number | null;
      /** Settings for PDF files. */
      pdfSettings?: PDFSettings$1;
      /** File MIME type. */
      mimeType?: string | null;
      /** File path. */
      path?: string | null;
  }
  enum ViewMode$1 {
      /** No PDF view */
      NONE = "NONE",
      /** Full PDF view */
      FULL = "FULL",
      /** Mini PDF view */
      MINI = "MINI"
  }
  interface FileSource$1 extends FileSourceDataOneOf$1 {
      /** The absolute URL for the file's source. */
      url?: string | null;
      /** Custom ID. Use `id` instead. */
      custom?: string | null;
      /** An ID that's resolved to a URL by a resolver function. */
      _id?: string | null;
      /** Indicates whether the file's source is private. */
      private?: boolean | null;
  }
  /** @oneof */
  interface FileSourceDataOneOf$1 {
      /** The absolute URL for the file's source. */
      url?: string | null;
      /** Custom ID. Use `id` instead. */
      custom?: string | null;
      /** An ID that's resolved to a URL by a resolver function. */
      _id?: string | null;
  }
  interface PDFSettings$1 {
      /**
       * PDF view mode. One of the following:
       * `NONE` : The PDF isn't displayed.
       * `FULL` : A full page view of the PDF is displayed.
       * `MINI` : A mini view of the PDF is displayed.
       */
      viewMode?: ViewMode$1;
      /** Sets whether the PDF download button is disabled. */
      disableDownload?: boolean | null;
      /** Sets whether the PDF print button is disabled. */
      disablePrint?: boolean | null;
  }
  interface GalleryData$1 {
      /** Styling for the gallery's container. */
      containerData?: PluginContainerData$1;
      /** The items in the gallery. */
      items?: Item$1[];
      /** Options for defining the gallery's appearance. */
      options?: GalleryOptions$1;
      /** Sets whether the gallery's expand button is disabled. */
      disableExpand?: boolean | null;
      /** Sets whether the gallery's download button is disabled. */
      disableDownload?: boolean | null;
  }
  interface Media$1 {
      /** The source for the media's data. */
      src?: FileSource$1;
      /** Media width in pixels. */
      width?: number | null;
      /** Media height in pixels. */
      height?: number | null;
      /** Media duration in seconds. Only relevant for audio and video files. */
      duration?: number | null;
  }
  interface Image$1 {
      /** Image file details. */
      media?: Media$1;
      /** Link details for images that are links. */
      link?: Link$1;
  }
  interface Video$1 {
      /** Video file details. */
      media?: Media$1;
      /** Video thumbnail file details. */
      thumbnail?: Media$1;
  }
  interface Item$1 extends ItemDataOneOf$1 {
      /** An image item. */
      image?: Image$1;
      /** A video item. */
      video?: Video$1;
      /** Item title. */
      title?: string | null;
      /** Item's alternative text. */
      altText?: string | null;
  }
  /** @oneof */
  interface ItemDataOneOf$1 {
      /** An image item. */
      image?: Image$1;
      /** A video item. */
      video?: Video$1;
  }
  interface GalleryOptions$1 {
      /** Gallery layout. */
      layout?: Layout$1;
      /** Styling for gallery items. */
      item?: ItemStyle$1;
      /** Styling for gallery thumbnail images. */
      thumbnails?: Thumbnails$1;
  }
  enum LayoutType$1 {
      /** Collage type */
      COLLAGE = "COLLAGE",
      /** Masonry type */
      MASONRY = "MASONRY",
      /** Grid type */
      GRID = "GRID",
      /** Thumbnail type */
      THUMBNAIL = "THUMBNAIL",
      /** Slider type */
      SLIDER = "SLIDER",
      /** Slideshow type */
      SLIDESHOW = "SLIDESHOW",
      /** Panorama type */
      PANORAMA = "PANORAMA",
      /** Column type */
      COLUMN = "COLUMN",
      /** Magic type */
      MAGIC = "MAGIC",
      /** Fullsize images type */
      FULLSIZE = "FULLSIZE"
  }
  enum Orientation$1 {
      /** Rows Orientation */
      ROWS = "ROWS",
      /** Columns Orientation */
      COLUMNS = "COLUMNS"
  }
  enum Crop$1 {
      /** Crop to fill */
      FILL = "FILL",
      /** Crop to fit */
      FIT = "FIT"
  }
  enum ThumbnailsAlignment$1 {
      /** Top alignment */
      TOP = "TOP",
      /** Right alignment */
      RIGHT = "RIGHT",
      /** Bottom alignment */
      BOTTOM = "BOTTOM",
      /** Left alignment */
      LEFT = "LEFT",
      /** No thumbnail */
      NONE = "NONE"
  }
  interface Layout$1 {
      /** Gallery layout type. */
      type?: LayoutType$1;
      /** Sets whether horizontal scroll is enabled. */
      horizontalScroll?: boolean | null;
      /** Gallery orientation. */
      orientation?: Orientation$1;
      /** The number of columns to display on full size screens. */
      numberOfColumns?: number | null;
      /** The number of columns to display on mobile screens. */
      mobileNumberOfColumns?: number | null;
  }
  interface ItemStyle$1 {
      /** Desirable dimension for each item in pixels (behvaior changes according to gallery type) */
      targetSize?: number | null;
      /** Item ratio */
      ratio?: number | null;
      /** Sets how item images are cropped. */
      crop?: Crop$1;
      /** The spacing between items in pixels. */
      spacing?: number | null;
  }
  interface Thumbnails$1 {
      /** Thumbnail alignment. */
      placement?: ThumbnailsAlignment$1;
      /** Spacing between thumbnails in pixels. */
      spacing?: number | null;
  }
  interface GIFData$1 {
      /** Styling for the GIF's container. */
      containerData?: PluginContainerData$1;
      /** The source of the full size GIF. */
      original?: GIF$1;
      /** The source of the downsized GIF. */
      downsized?: GIF$1;
      /** Height in pixels. */
      height?: number;
      /** Width in pixels. */
      width?: number;
  }
  interface GIF$1 {
      /** GIF format URL. */
      gif?: string | null;
      /** MP4 format URL. */
      mp4?: string | null;
      /** Thumbnail URL. */
      still?: string | null;
  }
  interface HeadingData$1 {
      /** Heading level from 1-6. */
      level?: number;
      /** Styling for the heading text. */
      textStyle?: TextStyle$1;
      /** Indentation level from 1-6. */
      indentation?: number | null;
  }
  interface HTMLData$1 extends HTMLDataDataOneOf$1 {
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
      /** Styling for the HTML node's container. */
      containerData?: PluginContainerData$1;
      /** The type of HTML code. */
      source?: Source$1;
  }
  /** @oneof */
  interface HTMLDataDataOneOf$1 {
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
  }
  enum Source$1 {
      HTML = "HTML",
      ADSENSE = "ADSENSE"
  }
  interface ImageData$1 {
      /** Styling for the image's container. */
      containerData?: PluginContainerData$1;
      /** Image file details. */
      image?: Media$1;
      /** Link details for images that are links. */
      link?: Link$1;
      /** Sets whether the image expands to full screen when clicked. */
      disableExpand?: boolean | null;
      /** Image's alternative text. */
      altText?: string | null;
      /** Image caption. */
      caption?: string | null;
      /** Sets whether the image's download button is disabled. */
      disableDownload?: boolean | null;
  }
  interface LinkPreviewData$1 {
      /** Styling for the link preview's container. */
      containerData?: PluginContainerData$1;
      /** Link details. */
      link?: Link$1;
      /** Preview title. */
      title?: string | null;
      /** Preview thumbnail URL. */
      thumbnailUrl?: string | null;
      /** Preview description. */
      description?: string | null;
      /** The preview content as HTML. */
      html?: string | null;
  }
  interface MapData$1 {
      /** Styling for the map's container. */
      containerData?: PluginContainerData$1;
      /** Map settings. */
      mapSettings?: MapSettings$1;
  }
  interface MapSettings$1 {
      /** The address to display on the map. */
      address?: string | null;
      /** Sets whether the map is draggable. */
      draggable?: boolean | null;
      /** Sets whether the location marker is visible. */
      marker?: boolean | null;
      /** Sets whether street view control is enabled. */
      streetViewControl?: boolean | null;
      /** Sets whether zoom control is enabled. */
      zoomControl?: boolean | null;
      /** Location latitude. */
      lat?: number | null;
      /** Location longitude. */
      lng?: number | null;
      /** Location name. */
      locationName?: string | null;
      /** Sets whether view mode control is enabled. */
      viewModeControl?: boolean | null;
      /** Initial zoom value. */
      initialZoom?: number | null;
      /** Map type. `HYBRID` is a combination of the `ROADMAP` and `SATELLITE` map types. */
      mapType?: MapType$1;
  }
  enum MapType$1 {
      /** Roadmap map type */
      ROADMAP = "ROADMAP",
      /** Satellite map type */
      SATELITE = "SATELITE",
      /** Hybrid map type */
      HYBRID = "HYBRID",
      /** Terrain map type */
      TERRAIN = "TERRAIN"
  }
  interface ParagraphData$1 {
      /** Styling for the paragraph text. */
      textStyle?: TextStyle$1;
      /** Indentation level from 1-6. */
      indentation?: number | null;
  }
  interface PollData$1 {
      /** Styling for the poll's container. */
      containerData?: PluginContainerData$1;
      /** Poll data. */
      poll?: Poll$1;
      /** Layout settings for the poll and voting options. */
      layout?: PollDataLayout$1;
      /** Styling for the poll and voting options. */
      design?: Design$1;
  }
  enum ViewRole$1 {
      /** Only Poll creator can view the results */
      CREATOR = "CREATOR",
      /** Anyone who voted can see the results */
      VOTERS = "VOTERS",
      /** Anyone can see the results, even if one didn't vote */
      EVERYONE = "EVERYONE"
  }
  enum VoteRole$1 {
      /** Logged in member */
      SITE_MEMBERS = "SITE_MEMBERS",
      /** Anyone */
      ALL = "ALL"
  }
  interface Permissions$1 {
      /** Sets who can view the poll results. */
      view?: ViewRole$1;
      /** Sets who can vote. */
      vote?: VoteRole$1;
      /** Sets whether one voter can vote multiple times. */
      allowMultipleVotes?: boolean | null;
  }
  interface Option$1 {
      /** Option ID. */
      _id?: string | null;
      /** Option title. */
      title?: string | null;
      /** The image displayed with the option. */
      image?: Media$1;
  }
  interface Settings$1 {
      /** Permissions settings for voting. */
      permissions?: Permissions$1;
      /** Sets whether voters are displayed in the vote results. */
      showVoters?: boolean | null;
      /** Sets whether the vote count is displayed. */
      showVotesCount?: boolean | null;
  }
  enum PollLayoutType$1 {
      /** List */
      LIST = "LIST",
      /** Grid */
      GRID = "GRID"
  }
  enum PollLayoutDirection$1 {
      /** Left-to-right */
      LTR = "LTR",
      /** Right-to-left */
      RTL = "RTL"
  }
  interface PollLayout$1 {
      /** The layout for displaying the voting options. */
      type?: PollLayoutType$1;
      /** The direction of the text displayed in the voting options. Text can be displayed either right-to-left or left-to-right. */
      direction?: PollLayoutDirection$1;
      /** Sets whether to display the main poll image. */
      enableImage?: boolean | null;
  }
  interface OptionLayout$1 {
      /** Sets whether to display option images. */
      enableImage?: boolean | null;
  }
  enum BackgroundType$1 {
      /** Color background type */
      COLOR = "COLOR",
      /** Image background type */
      IMAGE = "IMAGE",
      /** Gradiant background type */
      GRADIENT = "GRADIENT"
  }
  interface Gradient$1 {
      /** The gradient angle in degrees. */
      angle?: number | null;
      /** The start color as a hexademical value. */
      startColor?: string | null;
      /** The end color as a hexademical value. */
      lastColor?: string | null;
  }
  interface Background$1 extends BackgroundBackgroundOneOf$1 {
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: Media$1;
      /** Details for a gradient background. */
      gradient?: Gradient$1;
      /** Background type. For each option, include the relevant details. */
      type?: BackgroundType$1;
  }
  /** @oneof */
  interface BackgroundBackgroundOneOf$1 {
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: Media$1;
      /** Details for a gradient background. */
      gradient?: Gradient$1;
  }
  interface PollDesign$1 {
      /** Background styling. */
      background?: Background$1;
      /** Border radius in pixels. */
      borderRadius?: number | null;
  }
  interface OptionDesign$1 {
      /** Border radius in pixels. */
      borderRadius?: number | null;
  }
  interface Poll$1 {
      /** Poll ID. */
      _id?: string | null;
      /** Poll title. */
      title?: string | null;
      /** Poll creator ID. */
      creatorId?: string | null;
      /** Main poll image. */
      image?: Media$1;
      /** Voting options. */
      options?: Option$1[];
      /** The poll's permissions and display settings. */
      settings?: Settings$1;
  }
  interface PollDataLayout$1 {
      /** Poll layout settings. */
      poll?: PollLayout$1;
      /** Voting otpions layout settings. */
      options?: OptionLayout$1;
  }
  interface Design$1 {
      /** Styling for the poll. */
      poll?: PollDesign$1;
      /** Styling for voting options. */
      options?: OptionDesign$1;
  }
  interface TextData$1 {
      /** The text to apply decorations to. */
      text?: string;
      /** The decorations to apply. */
      decorations?: Decoration$1[];
  }
  /** Adds appearence changes to text */
  interface Decoration$1 extends DecorationDataOneOf$1 {
      /** Data for an anchor link decoration. */
      anchorData?: AnchorData$1;
      /** Data for a color decoration. */
      colorData?: ColorData$1;
      /** Data for an external link decoration. */
      linkData?: LinkData$1;
      /** Data for a mention decoration. */
      mentionData?: MentionData$1;
      /** Data for a font size decoration. */
      fontSizeData?: FontSizeData$1;
      /** Font weight for a bold decoration. */
      fontWeightValue?: number | null;
      /** Data for an italic decoration. */
      italicData?: boolean | null;
      /** Data for an underline decoration. */
      underlineData?: boolean | null;
      /** The type of decoration to apply. */
      type?: DecorationType$1;
  }
  /** @oneof */
  interface DecorationDataOneOf$1 {
      /** Data for an anchor link decoration. */
      anchorData?: AnchorData$1;
      /** Data for a color decoration. */
      colorData?: ColorData$1;
      /** Data for an external link decoration. */
      linkData?: LinkData$1;
      /** Data for a mention decoration. */
      mentionData?: MentionData$1;
      /** Data for a font size decoration. */
      fontSizeData?: FontSizeData$1;
      /** Font weight for a bold decoration. */
      fontWeightValue?: number | null;
      /** Data for an italic decoration. */
      italicData?: boolean | null;
      /** Data for an underline decoration. */
      underlineData?: boolean | null;
  }
  enum DecorationType$1 {
      BOLD = "BOLD",
      ITALIC = "ITALIC",
      UNDERLINE = "UNDERLINE",
      SPOILER = "SPOILER",
      ANCHOR = "ANCHOR",
      MENTION = "MENTION",
      LINK = "LINK",
      COLOR = "COLOR",
      FONT_SIZE = "FONT_SIZE",
      EXTERNAL = "EXTERNAL"
  }
  interface AnchorData$1 {
      /** The target node's ID. */
      anchor?: string;
  }
  interface ColorData$1 {
      /** The text's background color as a hexadecimal value. */
      background?: string | null;
      /** The text's foreground color as a hexadecimal value. */
      foreground?: string | null;
  }
  interface LinkData$1 {
      /** Link details. */
      link?: Link$1;
  }
  interface MentionData$1 {
      /** The mentioned user's name. */
      name?: string;
      /** The version of the user's name that appears after the `@` character in the mention. */
      slug?: string;
      /** Mentioned user's ID. */
      _id?: string | null;
  }
  interface FontSizeData$1 {
      /** The units used for the font size. */
      unit?: FontType$1;
      /** Font size value. */
      value?: number | null;
  }
  enum FontType$1 {
      PX = "PX",
      EM = "EM"
  }
  interface AppEmbedData$1 extends AppEmbedDataAppDataOneOf$1 {
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData$1;
      /** Data for embedded Wix Events content. */
      eventData?: EventData$1;
      /** The type of Wix App content being embedded. */
      type?: AppType$1;
      /** The ID of the embedded content. */
      itemId?: string | null;
      /** The name of the embedded content. */
      name?: string | null;
      /** Deprecated: Use `image` instead. */
      imageSrc?: string | null;
      /** The URL for the embedded content. */
      url?: string | null;
      /** An image for the embedded content. */
      image?: Media$1;
  }
  /** @oneof */
  interface AppEmbedDataAppDataOneOf$1 {
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData$1;
      /** Data for embedded Wix Events content. */
      eventData?: EventData$1;
  }
  enum AppType$1 {
      PRODUCT = "PRODUCT",
      EVENT = "EVENT",
      BOOKING = "BOOKING"
  }
  interface BookingData$1 {
      /** Booking duration in minutes. */
      durations?: string | null;
  }
  interface EventData$1 {
      /** Event schedule. */
      scheduling?: string | null;
      /** Event location. */
      location?: string | null;
  }
  interface VideoData$1 {
      /** Styling for the video's container. */
      containerData?: PluginContainerData$1;
      /** Video details. */
      video?: Media$1;
      /** Video thumbnail details. */
      thumbnail?: Media$1;
      /** Sets whether the video's download button is disabled. */
      disableDownload?: boolean | null;
      /** Video title. */
      title?: string | null;
      /** Video options. */
      options?: PlaybackOptions$1;
  }
  interface PlaybackOptions$1 {
      /** Sets whether the media will automatically start playing. */
      autoPlay?: boolean | null;
      /** Sets whether media's will be looped. */
      playInLoop?: boolean | null;
      /** Sets whether media's controls will be shown. */
      showControls?: boolean | null;
  }
  interface EmbedData$1 {
      /** Styling for the oEmbed node's container. */
      containerData?: PluginContainerData$1;
      /** An [oEmbed](https://www.oembed.com) object. */
      oembed?: Oembed$1;
      /** Origin asset source. */
      src?: string | null;
  }
  interface Oembed$1 {
      /** The resource type. */
      type?: string | null;
      /** The width of the resource specified in the `url` property in pixels. */
      width?: number | null;
      /** The height of the resource specified in the `url` property in pixels. */
      height?: number | null;
      /** Resource title. */
      title?: string | null;
      /** The source URL for the resource. */
      url?: string | null;
      /** HTML for embedding a video player. The HTML should have no padding or margins. */
      html?: string | null;
      /** The name of the author or owner of the resource. */
      authorName?: string | null;
      /** The URL for the author or owner of the resource. */
      authorUrl?: string | null;
      /** The name of the resource provider. */
      providerName?: string | null;
      /** The URL for the resource provider. */
      providerUrl?: string | null;
      /** The URL for a thumbnail image for the resource. If this property is defined, `thumbnailWidth` and `thumbnailHeight` must also be defined. */
      thumbnailUrl?: string | null;
      /** The width of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailHeight` must also be defined. */
      thumbnailWidth?: string | null;
      /** The height of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailWidth`must also be defined. */
      thumbnailHeight?: string | null;
      /** The URL for an embedded viedo. */
      videoUrl?: string | null;
      /** The oEmbed version number.  This value must be `1.0`. */
      version?: string | null;
  }
  interface CollapsibleListData$1 {
      /** Styling for the collapsible list's container. */
      containerData?: PluginContainerData$1;
      /** If `true`, only one item can be expanded at a time. */
      expandOnlyOne?: boolean | null;
      /** Sets which items are expanded when the page loads. */
      initialExpandedItems?: InitialExpandedItems$1;
      /** The direction of the text in the list. Either left-to-right or right-to-left. */
      direction?: Direction$1;
      /** If `true`, The collapsible item will appear in search results as an FAQ. */
      isQapageData?: boolean | null;
  }
  enum InitialExpandedItems$1 {
      /** First item will be expended initally */
      FIRST = "FIRST",
      /** All items will expended initally */
      ALL = "ALL",
      /** All items collapsed initally */
      NONE = "NONE"
  }
  enum Direction$1 {
      /** Left-to-right */
      LTR = "LTR",
      /** Right-to-left */
      RTL = "RTL"
  }
  interface TableData$1 {
      /** Styling for the table's container. */
      containerData?: PluginContainerData$1;
      /** The table's dimensions. */
      dimensions?: Dimensions$1;
      /** Deprecated: Use `rowHeader` and `columnHeader` instead. */
      header?: boolean | null;
      /** Sets whether the table's first row is a header. */
      rowHeader?: boolean | null;
      /** Sets whether the table's first column is a header. */
      columnHeader?: boolean | null;
  }
  interface Dimensions$1 {
      /** An array representing relative width of each column in relation to the other columns. */
      colsWidthRatio?: number[];
      /** An array representing the height of each row in pixels. */
      rowsHeight?: number[];
      /** An array representing the minimum width of each column in pixels. */
      colsMinWidth?: number[];
  }
  interface TableCellData$1 {
      /** Styling for the cell's background color and text alignment. */
      cellStyle?: CellStyle$1;
      /** The cell's border colors. */
      borderColors?: BorderColors$1;
  }
  enum VerticalAlignment$1 {
      /** Top alignment */
      TOP = "TOP",
      /** Middle alignment */
      MIDDLE = "MIDDLE",
      /** Bottom alignment */
      BOTTOM = "BOTTOM"
  }
  interface CellStyle$1 {
      /** Vertical alignment for the cell's text. */
      verticalAlignment?: VerticalAlignment$1;
      /** Cell background color as a hexadecimal value. */
      backgroundColor?: string | null;
  }
  interface BorderColors$1 {
      /** Left border color as a hexadecimal value. */
      left?: string | null;
      /** Right border color as a hexadecimal value. */
      right?: string | null;
      /** Top border color as a hexadecimal value. */
      top?: string | null;
      /** Bottom border color as a hexadecimal value. */
      bottom?: string | null;
  }
  /**
   * `NullValue` is a singleton enumeration to represent the null value for the
   * `Value` type union.
   *
   * The JSON representation for `NullValue` is JSON `null`.
   */
  enum NullValue$1 {
      /** Null value. */
      NULL_VALUE = "NULL_VALUE"
  }
  /**
   * `ListValue` is a wrapper around a repeated field of values.
   *
   * The JSON representation for `ListValue` is JSON array.
   */
  interface ListValue$1 {
      /** Repeated field of dynamically typed values. */
      values?: any[];
  }
  interface AudioData$1 {
      /** Styling for the audio node's container. */
      containerData?: PluginContainerData$1;
      /** Audio file details. */
      audio?: Media$1;
      /** Sets whether the audio node's download button is disabled. */
      disableDownload?: boolean | null;
      /** Cover image. */
      coverImage?: Media$1;
      /** Track name. */
      name?: string | null;
      /** Author name. */
      authorName?: string | null;
      /** An HTML version of the audio node. */
      html?: string | null;
  }
  interface OrderedListData$1 {
      /** Indentation level. */
      indentation?: number;
  }
  interface BulletedListData$1 {
      /** Indentation level. */
      indentation?: number;
  }
  interface BlockquoteData$1 {
      /** Indentation level. */
      indentation?: number;
  }
  interface Metadata$1 {
      /** Schema version. */
      version?: number;
      /**
       * When the object was created.
       * @readonly
       */
      createdTimestamp?: Date;
      /** When the object was most recently updated. */
      updatedTimestamp?: Date;
      /** Object ID. */
      _id?: string | null;
  }
  interface DocumentStyle$1 {
      /** Styling for H1 nodes. */
      headerOne?: TextNodeStyle$1;
      /** Styling for H2 nodes. */
      headerTwo?: TextNodeStyle$1;
      /** Styling for H3 nodes. */
      headerThree?: TextNodeStyle$1;
      /** Styling for H4 nodes. */
      headerFour?: TextNodeStyle$1;
      /** Styling for H5 nodes. */
      headerFive?: TextNodeStyle$1;
      /** Styling for H6 nodes. */
      headerSix?: TextNodeStyle$1;
      /** Styling for paragraph nodes. */
      paragraph?: TextNodeStyle$1;
      /** Styling for block quote nodes. */
      blockquote?: TextNodeStyle$1;
      /** Styling for code block nodes. */
      codeBlock?: TextNodeStyle$1;
  }
  interface TextNodeStyle$1 {
      /** The decorations to apply to the node. */
      decorations?: Decoration$1[];
      /** Padding and background color for the node. */
      nodeStyle?: NodeStyle$1;
      /** Line height for text in the node. */
      lineHeight?: string | null;
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
  interface CreateInfoSectionRequest {
      /** InfoSection to be created */
      infoSection: InfoSection$1;
  }
  interface CreateInfoSectionResponse {
      /** The created InfoSection */
      infoSection?: InfoSection$1;
  }
  interface GetInfoSectionRequest {
      /** Id of the InfoSection to retrieve */
      infoSectionId: string;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$2[];
  }
  enum RequestedFields$2 {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      ASSIGNED_PRODUCTS_COUNT = "ASSIGNED_PRODUCTS_COUNT"
  }
  interface GetInfoSectionResponse {
      /** The retrieved InfoSection */
      infoSection?: InfoSection$1;
  }
  interface GetOrCreateInfoSectionRequest {
      /** Info section to fetch by id\unique name or create new if doesn't exist */
      infoSection?: InfoSectionForGetOrCreate;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$2[];
  }
  interface InfoSectionForGetOrCreate {
      /** Info section id, if exist - will try get by id */
      _id?: string | null;
      /**
       * Info section unique name, if id not provided try get by uniqueName
       * if not found by unique name - will create new one with given title+description (if exist)
       */
      uniqueName?: string | null;
      /** Info section title */
      title?: string | null;
      /** Info section description */
      description?: RichContent$1;
      /**
       * HTML or plain text description.
       * If provided, converted to RichContent description, unless a RichContent description is provided.
       */
      plainDescription?: string | null;
  }
  interface GetOrCreateInfoSectionResponse {
      /** The retrieved, or created Info section */
      infoSection?: InfoSection$1;
  }
  interface BulkGetOrCreateInfoSectionsRequest {
      /** Info sections to fetch by id\unique name or create news if doesn't exist */
      infoSections?: InfoSectionForGetOrCreate[];
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$2[];
  }
  interface BulkGetOrCreateInfoSectionsResponse {
      /** info sections created by bulk action. */
      results?: BulkInfoSectionItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkInfoSectionItemResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$3;
      /** Created info section. Optional - returned only if requested with `return_entity` set to `true`. */
      item?: InfoSection$1;
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
  interface UpdateInfoSectionRequest {
      /** InfoSection to be updated, may be partial */
      infoSection: InfoSection$1;
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$2[];
  }
  interface UpdateInfoSectionResponse {
      /** The updated InfoSection */
      infoSection?: InfoSection$1;
  }
  interface DeleteInfoSectionRequest {
      /** Id of the InfoSection to delete */
      infoSectionId: string;
  }
  interface DeleteInfoSectionResponse {
  }
  interface QueryInfoSectionsRequest {
      /** WQL expression */
      query?: CursorQuery$3;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$2[];
  }
  interface CursorQuery$3 extends CursorQueryPagingMethodOneOf$3 {
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
      sort?: Sorting$4[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$3 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$4;
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
  interface CursorPaging$4 {
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
  interface QueryInfoSectionsResponse {
      /** The retrieved InfoSections */
      infoSections?: InfoSection$1[];
      /** Paging metadata. */
      pagingMetadata?: CursorPagingMetadata$4;
  }
  interface CursorPagingMetadata$4 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: Cursors$4;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$4 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface BulkCreateInfoSectionsRequest {
      /** List of infoSections to be created */
      infoSections: InfoSection$1[];
      /** Whether to return the full entity in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateInfoSectionsResponse {
      /** Info sections created by bulk action. */
      results?: BulkInfoSectionItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkUpdateInfoSectionsRequest {
      /** List of info sections to be updated */
      infoSections: MaskedInfoSection[];
      /** Whether to return the full entity in the response. */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$2[];
  }
  interface MaskedInfoSection {
      /** Info section to be updated, may be partial */
      infoSection?: InfoSection$1;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateInfoSectionsResponse {
      /** Info sections updated by bulk action */
      results?: BulkInfoSectionItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkDeleteInfoSectionsRequest {
      /** IDs of info sections to be deleted. */
      infoSectionIds: string[];
  }
  interface BulkDeleteInfoSectionsResponse {
      /** Info sections updated by bulk action */
      itemsMetadata?: ItemMetadata$3[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$3;
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
  interface Empty$4 {
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
   * Creates a new InfoSection
   * @param infoSection - InfoSection to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField infoSection
   * @requiredField infoSection.title
   * @requiredField infoSection.uniqueName
   * @adminMethod
   * @returns The created InfoSection
   */
  function createInfoSection(infoSection: InfoSection$1): Promise<InfoSection$1>;
  /**
   * Get a InfoSection by id
   * @param infoSectionId - Id of the InfoSection to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField infoSectionId
   * @returns The retrieved InfoSection
   */
  function getInfoSection(infoSectionId: string, options?: GetInfoSectionOptions): Promise<InfoSection$1>;
  interface GetInfoSectionOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$2[];
  }
  /**
   * Fetches info section by uniqueName, or creates it if it doesn't exist.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getOrCreateInfoSection(options?: GetOrCreateInfoSectionOptions): Promise<GetOrCreateInfoSectionResponse>;
  interface GetOrCreateInfoSectionOptions {
      /** Info section to fetch by id\unique name or create new if doesn't exist */
      infoSection?: InfoSectionForGetOrCreate;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$2[];
  }
  /**
   * Fetches info sections by uniqueName, or creates them if they doesn't exist.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function bulkGetOrCreateInfoSections(options?: BulkGetOrCreateInfoSectionsOptions): Promise<BulkGetOrCreateInfoSectionsResponse>;
  interface BulkGetOrCreateInfoSectionsOptions {
      /** Info sections to fetch by id\unique name or create news if doesn't exist */
      infoSections?: InfoSectionForGetOrCreate[];
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$2[];
  }
  /**
   * Update a InfoSection, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - InfoSection ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField infoSection
   * @requiredField infoSection.revision
   * @adminMethod
   * @returns The updated InfoSection
   */
  function updateInfoSection(_id: string | null, infoSection: UpdateInfoSection, options?: UpdateInfoSectionOptions): Promise<InfoSection$1>;
  interface UpdateInfoSection {
      /**
       * InfoSection ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this InfoSection was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this InfoSection was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * User friendly unique identifier. Customers won’t see this
       * For example, if two info sections have the same title "Return Policy", the unique name must be different: "return-policy-1", "return-policy-2".
       */
      uniqueName?: string;
      /** Info section title */
      title?: string;
      /**
       * Info section description
       * In order to use this field you have to integrate with "Ricos" on frontend side. To learn how to do it visit https://ricos.js.org/.
       */
      description?: RichContent$1;
      /**
       * Optional - RichContent description converted to html.
       * If provided on write: this description must be a valid html and will be converted to RichContent description.
       * It is ignored if provided along with RichContent description.
       */
      plainDescription?: string | null;
      /**
       * Number of products having this info section.
       * > **Note:** This field is returned only when you pass `fields: "ASSIGNED_PRODUCT_COUNT"` in the request for Get Info Section and Query Info Sections endpoints.
       * @readonly
       */
      assignedProductsCount?: number | null;
  }
  interface UpdateInfoSectionOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$2[];
  }
  /**
   * Delete a InfoSection
   * On info section deleted - product consumer will update product.infoSectionIds
   * to NOT include the deleted info-section anymore.
   * @param infoSectionId - Id of the InfoSection to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField infoSectionId
   * @adminMethod
   */
  function deleteInfoSection(infoSectionId: string): Promise<void>;
  /**
   * Query InfoSections using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   */
  function queryInfoSections(options?: QueryInfoSectionsOptions): InfoSectionsQueryBuilder;
  interface QueryInfoSectionsOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$2[] | undefined;
  }
  interface QueryCursorResult$4 {
      cursors: Cursors$4;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface InfoSectionsQueryResult extends QueryCursorResult$4 {
      items: InfoSection$1[];
      query: InfoSectionsQueryBuilder;
      next: () => Promise<InfoSectionsQueryResult>;
      prev: () => Promise<InfoSectionsQueryResult>;
  }
  interface InfoSectionsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'uniqueName' | 'title', value: any) => InfoSectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'uniqueName' | 'title', value: any) => InfoSectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => InfoSectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => InfoSectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => InfoSectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => InfoSectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'uniqueName' | 'title', value: string) => InfoSectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'uniqueName' | 'title', value: any[]) => InfoSectionsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'uniqueName' | 'title', value: any) => InfoSectionsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'uniqueName' | 'title', value: boolean) => InfoSectionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_createdDate' | '_updatedDate' | 'uniqueName' | 'title'>) => InfoSectionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_createdDate' | '_updatedDate' | 'uniqueName' | 'title'>) => InfoSectionsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => InfoSectionsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => InfoSectionsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<InfoSectionsQueryResult>;
  }
  /**
   * Bulk creates a new InfoSections
   * @param infoSections - List of infoSections to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField infoSections
   * @requiredField infoSections.title
   * @requiredField infoSections.uniqueName
   * @adminMethod
   */
  function bulkCreateInfoSections(infoSections: InfoSection$1[], options?: BulkCreateInfoSectionsOptions): Promise<BulkCreateInfoSectionsResponse>;
  interface BulkCreateInfoSectionsOptions {
      /** Whether to return the full entity in the response. */
      returnEntity?: boolean;
  }
  /**
   * Bulk updates InfoSections
   * @param infoSections - List of info sections to be updated
   * @internal
   * @documentationMaturity preview
   * @requiredField infoSections
   * @requiredField infoSections.infoSection._id
   * @requiredField infoSections.infoSection.revision
   * @adminMethod
   */
  function bulkUpdateInfoSections(infoSections: MaskedInfoSection[], options?: BulkUpdateInfoSectionsOptions): Promise<BulkUpdateInfoSectionsResponse>;
  interface BulkUpdateInfoSectionsOptions {
      /** Whether to return the full entity in the response. */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$2[];
  }
  /**
   * Bulk deletes a new InfoSections
   * @param infoSectionIds - IDs of info sections to be deleted.
   * @internal
   * @documentationMaturity preview
   * @requiredField infoSectionIds
   * @adminMethod
   */
  function bulkDeleteInfoSections(infoSectionIds: string[]): Promise<BulkDeleteInfoSectionsResponse>;
  
  type storesCatalogV3InfoSection_universal_d_CreateInfoSectionRequest = CreateInfoSectionRequest;
  type storesCatalogV3InfoSection_universal_d_CreateInfoSectionResponse = CreateInfoSectionResponse;
  type storesCatalogV3InfoSection_universal_d_GetInfoSectionRequest = GetInfoSectionRequest;
  type storesCatalogV3InfoSection_universal_d_GetInfoSectionResponse = GetInfoSectionResponse;
  type storesCatalogV3InfoSection_universal_d_GetOrCreateInfoSectionRequest = GetOrCreateInfoSectionRequest;
  type storesCatalogV3InfoSection_universal_d_InfoSectionForGetOrCreate = InfoSectionForGetOrCreate;
  type storesCatalogV3InfoSection_universal_d_GetOrCreateInfoSectionResponse = GetOrCreateInfoSectionResponse;
  type storesCatalogV3InfoSection_universal_d_BulkGetOrCreateInfoSectionsRequest = BulkGetOrCreateInfoSectionsRequest;
  type storesCatalogV3InfoSection_universal_d_BulkGetOrCreateInfoSectionsResponse = BulkGetOrCreateInfoSectionsResponse;
  type storesCatalogV3InfoSection_universal_d_BulkInfoSectionItemResult = BulkInfoSectionItemResult;
  type storesCatalogV3InfoSection_universal_d_UpdateInfoSectionRequest = UpdateInfoSectionRequest;
  type storesCatalogV3InfoSection_universal_d_UpdateInfoSectionResponse = UpdateInfoSectionResponse;
  type storesCatalogV3InfoSection_universal_d_DeleteInfoSectionRequest = DeleteInfoSectionRequest;
  type storesCatalogV3InfoSection_universal_d_DeleteInfoSectionResponse = DeleteInfoSectionResponse;
  type storesCatalogV3InfoSection_universal_d_QueryInfoSectionsRequest = QueryInfoSectionsRequest;
  type storesCatalogV3InfoSection_universal_d_QueryInfoSectionsResponse = QueryInfoSectionsResponse;
  type storesCatalogV3InfoSection_universal_d_BulkCreateInfoSectionsRequest = BulkCreateInfoSectionsRequest;
  type storesCatalogV3InfoSection_universal_d_BulkCreateInfoSectionsResponse = BulkCreateInfoSectionsResponse;
  type storesCatalogV3InfoSection_universal_d_BulkUpdateInfoSectionsRequest = BulkUpdateInfoSectionsRequest;
  type storesCatalogV3InfoSection_universal_d_MaskedInfoSection = MaskedInfoSection;
  type storesCatalogV3InfoSection_universal_d_BulkUpdateInfoSectionsResponse = BulkUpdateInfoSectionsResponse;
  type storesCatalogV3InfoSection_universal_d_BulkDeleteInfoSectionsRequest = BulkDeleteInfoSectionsRequest;
  type storesCatalogV3InfoSection_universal_d_BulkDeleteInfoSectionsResponse = BulkDeleteInfoSectionsResponse;
  const storesCatalogV3InfoSection_universal_d_createInfoSection: typeof createInfoSection;
  const storesCatalogV3InfoSection_universal_d_getInfoSection: typeof getInfoSection;
  type storesCatalogV3InfoSection_universal_d_GetInfoSectionOptions = GetInfoSectionOptions;
  const storesCatalogV3InfoSection_universal_d_getOrCreateInfoSection: typeof getOrCreateInfoSection;
  type storesCatalogV3InfoSection_universal_d_GetOrCreateInfoSectionOptions = GetOrCreateInfoSectionOptions;
  const storesCatalogV3InfoSection_universal_d_bulkGetOrCreateInfoSections: typeof bulkGetOrCreateInfoSections;
  type storesCatalogV3InfoSection_universal_d_BulkGetOrCreateInfoSectionsOptions = BulkGetOrCreateInfoSectionsOptions;
  const storesCatalogV3InfoSection_universal_d_updateInfoSection: typeof updateInfoSection;
  type storesCatalogV3InfoSection_universal_d_UpdateInfoSection = UpdateInfoSection;
  type storesCatalogV3InfoSection_universal_d_UpdateInfoSectionOptions = UpdateInfoSectionOptions;
  const storesCatalogV3InfoSection_universal_d_deleteInfoSection: typeof deleteInfoSection;
  const storesCatalogV3InfoSection_universal_d_queryInfoSections: typeof queryInfoSections;
  type storesCatalogV3InfoSection_universal_d_QueryInfoSectionsOptions = QueryInfoSectionsOptions;
  type storesCatalogV3InfoSection_universal_d_InfoSectionsQueryResult = InfoSectionsQueryResult;
  type storesCatalogV3InfoSection_universal_d_InfoSectionsQueryBuilder = InfoSectionsQueryBuilder;
  const storesCatalogV3InfoSection_universal_d_bulkCreateInfoSections: typeof bulkCreateInfoSections;
  type storesCatalogV3InfoSection_universal_d_BulkCreateInfoSectionsOptions = BulkCreateInfoSectionsOptions;
  const storesCatalogV3InfoSection_universal_d_bulkUpdateInfoSections: typeof bulkUpdateInfoSections;
  type storesCatalogV3InfoSection_universal_d_BulkUpdateInfoSectionsOptions = BulkUpdateInfoSectionsOptions;
  const storesCatalogV3InfoSection_universal_d_bulkDeleteInfoSections: typeof bulkDeleteInfoSections;
  namespace storesCatalogV3InfoSection_universal_d {
    export {
      InfoSection$1 as InfoSection,
      RichContent$1 as RichContent,
      Node$1 as Node,
      NodeDataOneOf$1 as NodeDataOneOf,
      NodeType$1 as NodeType,
      NodeStyle$1 as NodeStyle,
      ButtonData$1 as ButtonData,
      Border$1 as Border,
      Colors$1 as Colors,
      PluginContainerData$1 as PluginContainerData,
      WidthType$1 as WidthType,
      PluginContainerDataWidth$1 as PluginContainerDataWidth,
      PluginContainerDataWidthDataOneOf$1 as PluginContainerDataWidthDataOneOf,
      PluginContainerDataAlignment$1 as PluginContainerDataAlignment,
      Spoiler$1 as Spoiler,
      Height$1 as Height,
      Type$1 as Type,
      Styles$1 as Styles,
      Link$1 as Link,
      LinkDataOneOf$1 as LinkDataOneOf,
      Target$1 as Target,
      Rel$1 as Rel,
      CodeBlockData$1 as CodeBlockData,
      TextStyle$1 as TextStyle,
      TextAlignment$1 as TextAlignment,
      DividerData$1 as DividerData,
      LineStyle$1 as LineStyle,
      Width$1 as Width,
      Alignment$1 as Alignment,
      FileData$1 as FileData,
      ViewMode$1 as ViewMode,
      FileSource$1 as FileSource,
      FileSourceDataOneOf$1 as FileSourceDataOneOf,
      PDFSettings$1 as PDFSettings,
      GalleryData$1 as GalleryData,
      Media$1 as Media,
      Image$1 as Image,
      Video$1 as Video,
      Item$1 as Item,
      ItemDataOneOf$1 as ItemDataOneOf,
      GalleryOptions$1 as GalleryOptions,
      LayoutType$1 as LayoutType,
      Orientation$1 as Orientation,
      Crop$1 as Crop,
      ThumbnailsAlignment$1 as ThumbnailsAlignment,
      Layout$1 as Layout,
      ItemStyle$1 as ItemStyle,
      Thumbnails$1 as Thumbnails,
      GIFData$1 as GIFData,
      GIF$1 as GIF,
      HeadingData$1 as HeadingData,
      HTMLData$1 as HTMLData,
      HTMLDataDataOneOf$1 as HTMLDataDataOneOf,
      Source$1 as Source,
      ImageData$1 as ImageData,
      LinkPreviewData$1 as LinkPreviewData,
      MapData$1 as MapData,
      MapSettings$1 as MapSettings,
      MapType$1 as MapType,
      ParagraphData$1 as ParagraphData,
      PollData$1 as PollData,
      ViewRole$1 as ViewRole,
      VoteRole$1 as VoteRole,
      Permissions$1 as Permissions,
      Option$1 as Option,
      Settings$1 as Settings,
      PollLayoutType$1 as PollLayoutType,
      PollLayoutDirection$1 as PollLayoutDirection,
      PollLayout$1 as PollLayout,
      OptionLayout$1 as OptionLayout,
      BackgroundType$1 as BackgroundType,
      Gradient$1 as Gradient,
      Background$1 as Background,
      BackgroundBackgroundOneOf$1 as BackgroundBackgroundOneOf,
      PollDesign$1 as PollDesign,
      OptionDesign$1 as OptionDesign,
      Poll$1 as Poll,
      PollDataLayout$1 as PollDataLayout,
      Design$1 as Design,
      TextData$1 as TextData,
      Decoration$1 as Decoration,
      DecorationDataOneOf$1 as DecorationDataOneOf,
      DecorationType$1 as DecorationType,
      AnchorData$1 as AnchorData,
      ColorData$1 as ColorData,
      LinkData$1 as LinkData,
      MentionData$1 as MentionData,
      FontSizeData$1 as FontSizeData,
      FontType$1 as FontType,
      AppEmbedData$1 as AppEmbedData,
      AppEmbedDataAppDataOneOf$1 as AppEmbedDataAppDataOneOf,
      AppType$1 as AppType,
      BookingData$1 as BookingData,
      EventData$1 as EventData,
      VideoData$1 as VideoData,
      PlaybackOptions$1 as PlaybackOptions,
      EmbedData$1 as EmbedData,
      Oembed$1 as Oembed,
      CollapsibleListData$1 as CollapsibleListData,
      InitialExpandedItems$1 as InitialExpandedItems,
      Direction$1 as Direction,
      TableData$1 as TableData,
      Dimensions$1 as Dimensions,
      TableCellData$1 as TableCellData,
      VerticalAlignment$1 as VerticalAlignment,
      CellStyle$1 as CellStyle,
      BorderColors$1 as BorderColors,
      NullValue$1 as NullValue,
      ListValue$1 as ListValue,
      AudioData$1 as AudioData,
      OrderedListData$1 as OrderedListData,
      BulletedListData$1 as BulletedListData,
      BlockquoteData$1 as BlockquoteData,
      Metadata$1 as Metadata,
      DocumentStyle$1 as DocumentStyle,
      TextNodeStyle$1 as TextNodeStyle,
      InvalidateCache$4 as InvalidateCache,
      InvalidateCacheGetByOneOf$4 as InvalidateCacheGetByOneOf,
      App$4 as App,
      Page$4 as Page,
      URI$4 as URI,
      File$4 as File,
      storesCatalogV3InfoSection_universal_d_CreateInfoSectionRequest as CreateInfoSectionRequest,
      storesCatalogV3InfoSection_universal_d_CreateInfoSectionResponse as CreateInfoSectionResponse,
      storesCatalogV3InfoSection_universal_d_GetInfoSectionRequest as GetInfoSectionRequest,
      RequestedFields$2 as RequestedFields,
      storesCatalogV3InfoSection_universal_d_GetInfoSectionResponse as GetInfoSectionResponse,
      storesCatalogV3InfoSection_universal_d_GetOrCreateInfoSectionRequest as GetOrCreateInfoSectionRequest,
      storesCatalogV3InfoSection_universal_d_InfoSectionForGetOrCreate as InfoSectionForGetOrCreate,
      storesCatalogV3InfoSection_universal_d_GetOrCreateInfoSectionResponse as GetOrCreateInfoSectionResponse,
      storesCatalogV3InfoSection_universal_d_BulkGetOrCreateInfoSectionsRequest as BulkGetOrCreateInfoSectionsRequest,
      storesCatalogV3InfoSection_universal_d_BulkGetOrCreateInfoSectionsResponse as BulkGetOrCreateInfoSectionsResponse,
      storesCatalogV3InfoSection_universal_d_BulkInfoSectionItemResult as BulkInfoSectionItemResult,
      ItemMetadata$3 as ItemMetadata,
      ApplicationError$3 as ApplicationError,
      BulkActionMetadata$3 as BulkActionMetadata,
      storesCatalogV3InfoSection_universal_d_UpdateInfoSectionRequest as UpdateInfoSectionRequest,
      storesCatalogV3InfoSection_universal_d_UpdateInfoSectionResponse as UpdateInfoSectionResponse,
      storesCatalogV3InfoSection_universal_d_DeleteInfoSectionRequest as DeleteInfoSectionRequest,
      storesCatalogV3InfoSection_universal_d_DeleteInfoSectionResponse as DeleteInfoSectionResponse,
      storesCatalogV3InfoSection_universal_d_QueryInfoSectionsRequest as QueryInfoSectionsRequest,
      CursorQuery$3 as CursorQuery,
      CursorQueryPagingMethodOneOf$3 as CursorQueryPagingMethodOneOf,
      Sorting$4 as Sorting,
      SortOrder$4 as SortOrder,
      CursorPaging$4 as CursorPaging,
      storesCatalogV3InfoSection_universal_d_QueryInfoSectionsResponse as QueryInfoSectionsResponse,
      CursorPagingMetadata$4 as CursorPagingMetadata,
      Cursors$4 as Cursors,
      storesCatalogV3InfoSection_universal_d_BulkCreateInfoSectionsRequest as BulkCreateInfoSectionsRequest,
      storesCatalogV3InfoSection_universal_d_BulkCreateInfoSectionsResponse as BulkCreateInfoSectionsResponse,
      storesCatalogV3InfoSection_universal_d_BulkUpdateInfoSectionsRequest as BulkUpdateInfoSectionsRequest,
      storesCatalogV3InfoSection_universal_d_MaskedInfoSection as MaskedInfoSection,
      storesCatalogV3InfoSection_universal_d_BulkUpdateInfoSectionsResponse as BulkUpdateInfoSectionsResponse,
      storesCatalogV3InfoSection_universal_d_BulkDeleteInfoSectionsRequest as BulkDeleteInfoSectionsRequest,
      storesCatalogV3InfoSection_universal_d_BulkDeleteInfoSectionsResponse as BulkDeleteInfoSectionsResponse,
      DomainEvent$4 as DomainEvent,
      DomainEventBodyOneOf$4 as DomainEventBodyOneOf,
      EntityCreatedEvent$4 as EntityCreatedEvent,
      EntityUpdatedEvent$4 as EntityUpdatedEvent,
      EntityDeletedEvent$4 as EntityDeletedEvent,
      ActionEvent$4 as ActionEvent,
      Empty$4 as Empty,
      MessageEnvelope$4 as MessageEnvelope,
      IdentificationData$4 as IdentificationData,
      IdentificationDataIdOneOf$4 as IdentificationDataIdOneOf,
      WebhookIdentityType$4 as WebhookIdentityType,
      storesCatalogV3InfoSection_universal_d_createInfoSection as createInfoSection,
      storesCatalogV3InfoSection_universal_d_getInfoSection as getInfoSection,
      storesCatalogV3InfoSection_universal_d_GetInfoSectionOptions as GetInfoSectionOptions,
      storesCatalogV3InfoSection_universal_d_getOrCreateInfoSection as getOrCreateInfoSection,
      storesCatalogV3InfoSection_universal_d_GetOrCreateInfoSectionOptions as GetOrCreateInfoSectionOptions,
      storesCatalogV3InfoSection_universal_d_bulkGetOrCreateInfoSections as bulkGetOrCreateInfoSections,
      storesCatalogV3InfoSection_universal_d_BulkGetOrCreateInfoSectionsOptions as BulkGetOrCreateInfoSectionsOptions,
      storesCatalogV3InfoSection_universal_d_updateInfoSection as updateInfoSection,
      storesCatalogV3InfoSection_universal_d_UpdateInfoSection as UpdateInfoSection,
      storesCatalogV3InfoSection_universal_d_UpdateInfoSectionOptions as UpdateInfoSectionOptions,
      storesCatalogV3InfoSection_universal_d_deleteInfoSection as deleteInfoSection,
      storesCatalogV3InfoSection_universal_d_queryInfoSections as queryInfoSections,
      storesCatalogV3InfoSection_universal_d_QueryInfoSectionsOptions as QueryInfoSectionsOptions,
      storesCatalogV3InfoSection_universal_d_InfoSectionsQueryResult as InfoSectionsQueryResult,
      storesCatalogV3InfoSection_universal_d_InfoSectionsQueryBuilder as InfoSectionsQueryBuilder,
      storesCatalogV3InfoSection_universal_d_bulkCreateInfoSections as bulkCreateInfoSections,
      storesCatalogV3InfoSection_universal_d_BulkCreateInfoSectionsOptions as BulkCreateInfoSectionsOptions,
      storesCatalogV3InfoSection_universal_d_bulkUpdateInfoSections as bulkUpdateInfoSections,
      storesCatalogV3InfoSection_universal_d_BulkUpdateInfoSectionsOptions as BulkUpdateInfoSectionsOptions,
      storesCatalogV3InfoSection_universal_d_bulkDeleteInfoSections as bulkDeleteInfoSections,
    };
  }
  
  /** InventoryItem is the main entity of InventoryService */
  interface InventoryItem$1 extends InventoryItemTrackingMethodOneOf$1 {
      /** Inventory tracking status, when set to true, item is available for sale without quantity limit. */
      inStock?: boolean;
      /**
       * Quantity currently left in inventory.
       * In some scenarios, quantity could go negative, for example when decreasing inventory for an order that has already been paid.
       */
      quantity?: number;
      /**
       * Inventory ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Inventory was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Inventory was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Variant ID. */
      variantId?: string;
      /** Location ID, location_id with variant_id is unique. */
      locationId?: string | null;
      /** Product ID. */
      productId?: string;
      /**
       * Whether the quantity is being tracked.
       * @readonly
       */
      trackQuantity?: boolean;
      /**
       * Item availability, availability is combination of status and available quantity.
       * @readonly
       */
      availability?: ItemAvailability$1;
      /**
       * Item availability status, availability is combination of status and available quantity.
       * + OUT_OF_STOCK: no available quantity
       * + IN_STOCK: available quantity can be found in `quantity` field.
       * + PREORDER: available quantity can be found in `preorderInfo.quantity` field.
       * @readonly
       */
      availabilityStatus?: V3AvailabilityStatus$1;
      /** Item preorder info. */
      preorderInfo?: PreorderInfo$1;
      /**
       * Item categories ID.
       * @readonly
       */
      categoriesId?: string[];
      /** Extensions enabling users to save custom data related to the inventory item. */
      extendedFields?: ExtendedFields$1;
  }
  /** @oneof */
  interface InventoryItemTrackingMethodOneOf$1 {
      /** Inventory tracking status, when set to true, item is available for sale without quantity limit. */
      inStock?: boolean;
      /**
       * Quantity currently left in inventory.
       * In some scenarios, quantity could go negative, for example when decreasing inventory for an order that has already been paid.
       */
      quantity?: number;
  }
  interface ItemAvailability$1 {
      /**
       * If `AvailableStatus` is NOT_AVAILABLE the item is not available
       * If `AvailableStatus` is PURCHASE and available_quantity is N then up to N items can be purchased right now
       * If `AvailableStatus` is PURCHASE and available_quantity is not defined then unlimited number of items can be purchased right now
       * If `AvailableStatus` is PREORDER and available_quantity is N then up to N items can be purchased as preorder
       * If `AvailableStatus` is PREORDER and available_quantity is not defined then unlimited number of items can be purchased as preorder
       * @readonly
       */
      status?: AvailabilityStatus$1;
      /**
       * Available quantity, when not defined then unlimited number of items can be purchased.
       * @readonly
       */
      quantity?: number | null;
  }
  /** Item availability status. */
  enum AvailabilityStatus$1 {
      UNKNOWN = "UNKNOWN",
      NOT_AVAILABLE = "NOT_AVAILABLE",
      PURCHASE = "PURCHASE",
      /**
       * Whether the variant is available for preorder. InventoryItem will be available only when all below conditions are met:
       * 1. the variant is out of stock
       * 2. preorder is enabled on inventory item level (preorder_setting.enabled is true)
       * 3. preorder limit wasn't reached (preorder_setting.limit)
       */
      PREORDER = "PREORDER"
  }
  enum V3AvailabilityStatus$1 {
      UNKNOWN_AVAILABILITY_STATUS = "UNKNOWN_AVAILABILITY_STATUS",
      OUT_OF_STOCK = "OUT_OF_STOCK",
      IN_STOCK = "IN_STOCK",
      /**
       * Whether the variant is available for preorder. InventoryItem will be available only when all below conditions are met:
       * 1. the variant is out of stock
       * 2. preorder is enabled on inventory item level (preorder_setting.enabled is true)
       * 3. preorder limit wasn't reached (preorder_setting.limit)
       */
      PREORDER = "PREORDER"
  }
  interface PreorderInfo$1 {
      /** Whether the item is available for preorder. */
      enabled?: boolean;
      /** Optional - A message the buyer will see when the item is out of stock and preorder is enabled. */
      message?: string | null;
      /**
       * Optional - Number of products that can be purchased as preorder after stock reaches zero.
       * If not defined -100,000 products can be purchased as preorder.
       */
      limit?: number | null;
      /**
       * How many times this item was purchased as a preorder, limited by the value of PreorderSettings.limit.
       * It may cross the limit if the restrict_inventory_value = false.
       * @readonly
       */
      counter?: number | null;
      /**
       * Available quantity for preorder.
       * @readonly
       */
      quantity?: number | null;
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
  interface CreateInventoryItemRequest {
      /** Inventory item to be created. */
      inventoryItem: InventoryItem$1;
  }
  interface CreateInventoryItemResponse {
      /** The created Inventory item. */
      inventoryItem?: InventoryItem$1;
  }
  interface BulkCreateInventoryItemsRequest {
      /** List of inventory items to be created. */
      inventoryItems: InventoryItem$1[];
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateInventoryItemsResponse {
      /** Inventory items created by bulk action. */
      results?: BulkInventoryItemResult$1[];
      /** Bulk action metadata details as: totalSuccess and totalFailure. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkInventoryItemResult$1 {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$2;
      /** Created or updated inventory item. Optional - returned only if requested with `return_entity` set to `true`. */
      item?: InventoryItem$1;
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
  interface GetInventoryItemRequest {
      /** Id of the Inventory item to retrieve. */
      inventoryItemId: string;
  }
  interface GetInventoryItemResponse {
      /** The retrieved Inventory item. */
      inventoryItem?: InventoryItem$1;
  }
  interface UpdateInventoryItemRequest {
      /** Inventory item to be updated, may be partial. */
      inventoryItem: InventoryItem$1;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
      /** Reason data */
      reason?: ReasonType;
  }
  /** The reason for the inventory change. */
  enum ReasonType {
      UNKNOWN = "UNKNOWN",
      ORDER = "ORDER",
      MANUAL = "MANUAL",
      REVERT_INVENTORY_CHANGE = "REVERT_INVENTORY_CHANGE"
  }
  interface UpdateInventoryItemResponse {
      /** The updated Inventory item. */
      inventoryItem?: InventoryItem$1;
  }
  /** Report when Inventory item stock status changed from in stock to out of stock and the opposite. */
  interface InventoryItemStockStatusUpdatedEvent {
      /** Inventory item previous status. */
      previousInStock?: boolean;
      /** Inventory item new status. */
      newInStock?: boolean;
  }
  interface InventoryItemUpdatedWithReason {
      /** Current entity */
      currentEntity?: InventoryItem$1;
      /** The reason for the inventory change. */
      reason?: ReasonType;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface BulkUpdateInventoryItemsRequest {
      /** List of inventory items to be updated. */
      inventoryItems: MaskedInventoryItem[];
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
      /** Reason data */
      reason?: ReasonType;
  }
  interface MaskedInventoryItem {
      /** Inventory item to be updated, may be partial. */
      inventoryItem?: InventoryItem$1;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateInventoryItemsResponse {
      /** Inventory items updated by bulk action. */
      results?: BulkInventoryItemResult$1[];
      /** Bulk action metadata details as: totalSuccess and totalFailure. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkUpdateInventoryItemsByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
      /** Inventory item to be updated, may be partial. */
      inventoryItem: InventoryItem$1;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask: string[];
  }
  interface BulkUpdateInventoryItemsByFilterResponse {
      /** Guid token that can be used to query "AsyncJobService". */
      jobId?: string;
  }
  interface BulkIncrementInventoryItemsByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
      /** Quantity to increment by. */
      incrementBy: number;
  }
  interface BulkIncrementInventoryItemsByFilterResponse {
      /** Guid token that can be used to query "AsyncJobService". */
      jobId?: string;
  }
  interface BulkDecrementInventoryItemsByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
      /** Quantity to decrement by. */
      decrementBy: number;
  }
  interface BulkDecrementInventoryItemsByFilterResponse {
      /** Guid token that can be used to query "AsyncJobService". */
      jobId?: string;
  }
  interface DeleteInventoryItemRequest {
      /** Id of the Inventory item to delete. */
      inventoryItemId: string;
  }
  interface DeleteInventoryItemResponse {
  }
  interface BulkDeleteInventoryItemsRequest {
      /** IDs of inventories to be deleted. */
      inventoryItemIds: string[];
  }
  interface BulkDeleteInventoryItemsResponse {
      /** Inventories deleted by bulk action. */
      results?: BulkInventoryItemResult$1[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface QueryInventoryItemsRequest {
      /** WQL expression */
      query?: InventoryQuery;
  }
  interface InventoryQuery extends InventoryQueryPagingMethodOneOf {
      /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
      paging?: InventoryPaging;
      /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
      cursorPaging?: InventoryCursorPaging;
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
  interface InventoryQueryPagingMethodOneOf {
      /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
      paging?: InventoryPaging;
      /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
      cursorPaging?: InventoryCursorPaging;
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
  interface InventoryPaging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface InventoryCursorPaging {
      /**
       * Number of items to load.
       * Cursor token returned in the query response. To be used on the next query request, but not the first query request.
       */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryInventoryItemsResponse {
      /** The retrieved Inventory items. */
      inventoryItems?: InventoryItem$1[];
      /** Paging metadata. Contains cursor which can be used in next query. */
      pagingMetadata?: PlatformPagingMetadataV2;
  }
  interface PlatformPagingMetadataV2 {
      /** The number of items returned in this response. */
      count?: number | null;
      /**
       * The offset which was requested. Returned if offset paging was used.
       * @internal
       */
      offset?: number | null;
      /**
       * The total number of items that match the query. Returned if offset paging was used.
       * @internal
       */
      total?: number | null;
      /** Cursors to navigate through result pages. Returned if cursor paging was used. */
      cursors?: Cursors$3;
  }
  interface Cursors$3 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
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
  interface Empty$3 {
  }
  interface BulkDecrementInventoryItemsRequest {
      /** Which inventory items to decrement, and how much to decrement from each one. */
      decrementData: DecrementDataById[];
      /**
       * Should allow having negative inventory following this decrement action.
       * If its undefined then the Value is true
       */
      restrictInventory?: boolean | null;
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
      /** Reason data */
      reason?: ReasonType;
  }
  interface DecrementDataById {
      /** Id of the Inventory item. */
      inventoryItemId?: string;
      /** Quantity to decrement by. */
      decrementBy?: number;
      /**
       * Whether the request to decrement the item's inventory was made as part of a purchase that includes preorder items.
       * If true and the item is available for preorder in the default location, we allow negative inventory.
       * If false and the item is not available for preorder, we allow regular buy flow (no negative inventory).
       */
      preorderRequest?: boolean;
  }
  interface BulkDecrementInventoryItemsResponse {
      /** Inventory items updated by bulk action. */
      results?: BulkInventoryItemResult$1[];
      /** Bulk action metadata details as: totalSuccess and totalFailure. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkIncrementInventoryItemsRequest {
      /** Which items to increment, and how much to increment from each one. */
      incrementData: IncrementDataById[];
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
      /** Reason data */
      reason?: ReasonType;
  }
  interface IncrementDataById {
      /** Id of the Inventory item. */
      inventoryItemId?: string;
      /** Quantity to increment by. */
      incrementBy?: number;
  }
  interface BulkIncrementInventoryItemsResponse {
      /** Inventory items updated by bulk action. */
      results?: BulkInventoryItemResult$1[];
      /** Bulk action metadata details as: totalSuccess and totalFailure. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkDecrementInventoryItemsByVariantAndLocationRequest {
      /** Which inventory items to decrement, and how much to decrement from each one. */
      decrementData: DecrementDataByVariantAndLocation[];
      /**
       * Should allow having negative inventory following this decrement action.
       * If its undefined then the Value is true
       */
      restrictInventory?: boolean | null;
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
      /** Reason data */
      reason?: ReasonType;
  }
  interface DecrementDataByVariantAndLocation {
      /** Id of the Variant. */
      variantId?: string;
      /** Id of the Location. */
      locationId?: string | null;
      /** Quantity to decrement by. */
      decrementBy?: number;
      /**
       * Whether the request to decrement the item's inventory was made as part of a purchase that includes preorder items.
       * If true and the item is available for preorder in the default location, we allow negative inventory.
       * If false and the item is not available for preorder, we allow regular buy flow (no negative inventory).
       */
      preorderRequest?: boolean;
  }
  interface BulkDecrementInventoryItemsByVariantAndLocationResponse {
      /** Inventory items updated by bulk action. */
      results?: BulkInventoryItemResult$1[];
      /** Bulk action metadata details as: totalSuccess and totalFailure. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkIncrementInventoryItemsByVariantAndLocationRequest {
      /** Which items to increment, and how much to increment from each one. */
      incrementData: IncrementDataByVariantAndLocation[];
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
      /** Reason data */
      reason?: ReasonType;
  }
  interface IncrementDataByVariantAndLocation {
      /** Id of the Variant. */
      variantId?: string;
      /** Id of the Location. */
      locationId?: string | null;
      /** Quantity to increment by. */
      incrementBy?: number;
  }
  interface BulkIncrementInventoryItemsByVariantAndLocationResponse {
      /** Inventory items updated by bulk action. */
      results?: BulkInventoryItemResult$1[];
      /** Bulk action metadata details as: totalSuccess and totalFailure. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkSetInventoryItemsForProductsInLocationRequest {
      locationId: string;
      /**
       * List of inventory items per product. All existing inventory items for given product in given location_id will be replaced by ones provided in this request.
       * >**Note:** you can provide up to 1000 inventory items in total. For example you can provide 100 products with 10 inventory items in each or 1 product with 1000 inventory items or something in between.
       */
      productInventoryItems: ProductInventoryItems[];
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
  }
  interface ProductInventoryItems {
      /** The id of the product to set inventory items to. */
      productId?: string;
      /** List of inventory items to be created (if no id provided) or updated (if existing id provided). */
      inventoryItems?: InventoryItem$1[];
  }
  interface BulkSetInventoryItemsForProductsInLocationResponse {
      /** Created inventory items by bulk action. */
      results?: BulkInventoryItemResult$1[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface CountInventoryItemsRequest {
      /**
       * A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf)
       * To understand supported filters and limitations see `QueryInventoryItems` method.
       */
      filter?: Record<string, any> | null;
  }
  interface CountInventoryItemsResponse {
      count?: number;
  }
  interface SearchInventoryItemsRequest {
      /** WQL expression. */
      search?: CursorSearch$1;
  }
  interface CursorSearch$1 extends CursorSearchPagingMethodOneOf$1 {
      /**
       * Cursor pointing to page of results.
       * When requesting 'cursor_paging.cursor', no `filter`, `sort` or `search` can be provided.
       */
      cursorPaging?: CursorPaging$3;
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter?: Record<string, any> | null;
      /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
      sort?: Sorting$3[];
      /** Aggregations | Faceted search: refers to a way to explore large amounts of data by displaying summaries about various partitions of the data and later allowing to narrow the navigation to a specific partition. */
      aggregations?: Aggregation$1[];
      /** Free text to match in searchable fields */
      search?: SearchDetails$1;
      /**
       * UTC offset or IANA time zone. Valid values are
       * ISO 8601 UTC offsets, such as +02:00 or -06:00,
       * and IANA time zone IDs, such as Europe/Rome
       *
       * Affects all filters and aggregations returned values.
       * You may override this behavior in a specific filter by providing
       * timestamps including time zone. e.g. `"2023-12-20T10:52:34.795Z"`
       */
      timeZone?: string | null;
  }
  /** @oneof */
  interface CursorSearchPagingMethodOneOf$1 {
      /**
       * Cursor pointing to page of results.
       * When requesting 'cursor_paging.cursor', no `filter`, `sort` or `search` can be provided.
       */
      cursorPaging?: CursorPaging$3;
  }
  interface Aggregation$1 extends AggregationKindOneOf$1 {
      /** Value aggregation */
      value?: ValueAggregation$1;
      /** Range aggregation */
      range?: RangeAggregation$1;
      /** Scalar aggregation */
      scalar?: ScalarAggregation$1;
      /** Date histogram aggregation */
      dateHistogram?: DateHistogramAggregation$1;
      /** Nested aggregation */
      nested?: NestedAggregation$1;
      /** User-defined name of aggregation, should be unique, will appear in aggregation results */
      name?: string | null;
      /** Type of aggregation, client must provide matching aggregation field below */
      type?: AggregationType$1;
      /** Field to aggregate by, use dot notation to specify json path */
      fieldPath?: string;
      /** deprecated, use `nested` instead */
      groupBy?: GroupByAggregation$1;
  }
  /** @oneof */
  interface AggregationKindOneOf$1 {
      /** Value aggregation */
      value?: ValueAggregation$1;
      /** Range aggregation */
      range?: RangeAggregation$1;
      /** Scalar aggregation */
      scalar?: ScalarAggregation$1;
      /** Date histogram aggregation */
      dateHistogram?: DateHistogramAggregation$1;
      /** Nested aggregation */
      nested?: NestedAggregation$1;
  }
  interface RangeBucket$1 {
      /** Inclusive lower bound of the range. Required if to is not given */
      from?: number | null;
      /** Exclusive upper bound of the range. Required if from is not given */
      to?: number | null;
  }
  enum SortType$1 {
      /** Should sort by number of matches */
      COUNT = "COUNT",
      /** Should sort by value of the field alphabetically */
      VALUE = "VALUE"
  }
  enum SortDirection$1 {
      /** Should sort in descending order */
      DESC = "DESC",
      /** Should sort in ascending order */
      ASC = "ASC"
  }
  enum MissingValues$1 {
      /** Should missing values be excluded from the aggregation results */
      EXCLUDE = "EXCLUDE",
      /** Should missing values be included in the aggregation results */
      INCLUDE = "INCLUDE"
  }
  interface IncludeMissingValuesOptions$1 {
      /** Can specify custom bucket name. Defaults are [string -> "N/A"], [int -> "0"], [bool -> "false"] ... */
      addToBucket?: string;
  }
  enum ScalarType$1 {
      UNKNOWN_SCALAR_TYPE = "UNKNOWN_SCALAR_TYPE",
      /** Count of distinct values */
      COUNT_DISTINCT = "COUNT_DISTINCT",
      /** Minimum value */
      MIN = "MIN",
      /** Maximum value */
      MAX = "MAX",
      /** Sum of values */
      SUM = "SUM",
      /** Average of values */
      AVG = "AVG"
  }
  interface ValueAggregation$1 extends ValueAggregationOptionsOneOf$1 {
      /** Options for including missing values */
      includeOptions?: IncludeMissingValuesOptions$1;
      /** Should sort by number of matches or value of the field */
      sortType?: SortType$1;
      /** Should sort in ascending or descending order */
      sortDirection?: SortDirection$1;
      /** How many aggregations would you like to return? Can be between 1 and 250. 10 is the default. */
      limit?: number | null;
      /** Should missing values be included or excluded from the aggregation results. Default is EXCLUDE */
      missingValues?: MissingValues$1;
  }
  /** @oneof */
  interface ValueAggregationOptionsOneOf$1 {
      /** Options for including missing values */
      includeOptions?: IncludeMissingValuesOptions$1;
  }
  enum NestedAggregationType$1 {
      UNKNOWN_AGGREGATION_TYPE = "UNKNOWN_AGGREGATION_TYPE",
      /** An aggregation where result buckets are dynamically built - one per unique value */
      VALUE = "VALUE",
      /** An aggregation, where user can define set of ranges - each representing a bucket */
      RANGE = "RANGE",
      /** A single-value metric aggregation - e.g. min, max, sum, avg */
      SCALAR = "SCALAR",
      /** An aggregation, where result buckets are dynamically built - one per time interval (hour, day, week, etc.) */
      DATE_HISTOGRAM = "DATE_HISTOGRAM"
  }
  interface RangeAggregation$1 {
      /** List of range buckets, where during aggregation each entity will be placed in the first bucket where its value falls into based on provided range bounds */
      buckets?: RangeBucket$1[];
  }
  interface ScalarAggregation$1 {
      /** Define the operator for the scalar aggregation */
      type?: ScalarType$1;
  }
  interface DateHistogramAggregation$1 {
      /** Interval for date histogram aggregation */
      interval?: Interval$1;
  }
  enum Interval$1 {
      UNKNOWN_INTERVAL = "UNKNOWN_INTERVAL",
      /** Yearly interval */
      YEAR = "YEAR",
      /** Monthly interval */
      MONTH = "MONTH",
      /** Weekly interval */
      WEEK = "WEEK",
      /** Daily interval */
      DAY = "DAY",
      /** Hourly interval */
      HOUR = "HOUR",
      /** Minute interval */
      MINUTE = "MINUTE",
      /** Second interval */
      SECOND = "SECOND"
  }
  interface NestedAggregationItem$1 extends NestedAggregationItemKindOneOf$1 {
      /** Value aggregation */
      value?: ValueAggregation$1;
      /** Range aggregation */
      range?: RangeAggregation$1;
      /** Scalar aggregation */
      scalar?: ScalarAggregation$1;
      /** Date histogram aggregation */
      dateHistogram?: DateHistogramAggregation$1;
      /** User-defined name of aggregation, should be unique, will appear in aggregation results */
      name?: string | null;
      /** Type of aggregation, client must provide matching aggregation field below */
      type?: NestedAggregationType$1;
      /** Field to aggregate by, use dont notation to specify json path */
      fieldPath?: string;
  }
  /** @oneof */
  interface NestedAggregationItemKindOneOf$1 {
      /** Value aggregation */
      value?: ValueAggregation$1;
      /** Range aggregation */
      range?: RangeAggregation$1;
      /** Scalar aggregation */
      scalar?: ScalarAggregation$1;
      /** Date histogram aggregation */
      dateHistogram?: DateHistogramAggregation$1;
  }
  enum AggregationType$1 {
      UNKNOWN_AGGREGATION_TYPE = "UNKNOWN_AGGREGATION_TYPE",
      /** An aggregation where result buckets are dynamically built - one per unique value */
      VALUE = "VALUE",
      /** An aggregation, where user can define set of ranges - each representing a bucket */
      RANGE = "RANGE",
      /** A single-value metric aggregation - e.g. min, max, sum, avg */
      SCALAR = "SCALAR",
      /** An aggregation, where result buckets are dynamically built - one per time interval (hour, day, week, etc.) */
      DATE_HISTOGRAM = "DATE_HISTOGRAM",
      /** Multi-level aggregation, where each next aggregation is nested within previous one */
      NESTED = "NESTED"
  }
  /** Nested aggregation expressed through a list of aggregation where each next aggregation is nested within previous one */
  interface NestedAggregation$1 {
      /** Flattened list of aggregations, where each next aggregation is nested within previous one */
      nestedAggregations?: NestedAggregationItem$1[];
  }
  interface GroupByAggregation$1 extends GroupByAggregationKindOneOf$1 {
      /** Value aggregation configuration */
      value?: ValueAggregation$1;
      /** User-defined name of aggregation, should be unique, will appear in aggregation results */
      name?: string | null;
      /** Field to aggregate by */
      fieldPath?: string;
  }
  /** @oneof */
  interface GroupByAggregationKindOneOf$1 {
      /** Value aggregation configuration */
      value?: ValueAggregation$1;
  }
  interface SearchDetails$1 {
      /** Defines how separate search terms in `expression` are combined */
      mode?: Mode$1;
      /** Search term or expression */
      expression?: string | null;
      /** Fields to search in. If empty - will search in all searchable fields. Use dot notation to specify json path */
      fields?: string[];
      /** Flag if should use auto fuzzy search (allowing typos by a managed proximity algorithm) */
      fuzzy?: boolean;
  }
  enum Mode$1 {
      /** Any of the search terms must be present */
      OR = "OR",
      /** All search terms must be present */
      AND = "AND"
  }
  interface CursorPaging$3 {
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
  interface SearchInventoryItemsResponse {
      /** InventoryItems which satisfy the provided query. */
      inventoryItems?: InventoryItem$1[];
      /** Paging metadata. Contains cursor which can be used in next query. */
      pagingMetadata?: CursorPagingMetadata$3;
      /** Aggregation data. */
      aggregationData?: AggregationData$1;
  }
  interface CursorPagingMetadata$3 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: Cursors$3;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface AggregationData$1 {
      /** key = aggregation name (as derived from search request) */
      results?: AggregationResults$1[];
  }
  interface ValueAggregationResult$1 {
      /** Value of the field */
      value?: string;
      /** Count of entities with this value */
      count?: number;
  }
  interface RangeAggregationResult$1 {
      /** Inclusive lower bound of the range */
      from?: number | null;
      /** Exclusive upper bound of the range */
      to?: number | null;
      /** Count of entities in this range */
      count?: number;
  }
  interface NestedAggregationResults$1 extends NestedAggregationResultsResultOneOf$1 {
      /** Value aggregation results */
      values?: ValueResults$1;
      /** Range aggregation results */
      ranges?: RangeResults$1;
      /** Scalar aggregation results */
      scalar?: AggregationResultsScalarResult$1;
      /** User-defined name of aggregation, matches the one provided in request */
      name?: string;
      /** Type of aggregation that matches result */
      type?: AggregationType$1;
      /** Field to aggregate by, matches the one provided in request */
      fieldPath?: string;
  }
  /** @oneof */
  interface NestedAggregationResultsResultOneOf$1 {
      /** Value aggregation results */
      values?: ValueResults$1;
      /** Range aggregation results */
      ranges?: RangeResults$1;
      /** Scalar aggregation results */
      scalar?: AggregationResultsScalarResult$1;
  }
  interface ValueResults$1 {
      /** List of value aggregations */
      results?: ValueAggregationResult$1[];
  }
  interface RangeResults$1 {
      /** List of ranges returned in same order as requested */
      results?: RangeAggregationResult$1[];
  }
  interface AggregationResultsScalarResult$1 {
      /** Type of scalar aggregation */
      type?: ScalarType$1;
      /** Value of the scalar aggregation */
      value?: number;
  }
  interface NestedValueAggregationResult$1 {
      /** Value of the field */
      value?: string;
      /** Nested aggregations */
      nestedResults?: NestedAggregationResults$1;
  }
  interface ValueResult$1 {
      /** Value of the field */
      value?: string;
      /** Count of entities with this value */
      count?: number | null;
  }
  interface RangeResult$1 {
      /** Inclusive lower bound of the range */
      from?: number | null;
      /** Exclusive upper bound of the range */
      to?: number | null;
      /** Count of entities in this range */
      count?: number | null;
  }
  interface ScalarResult$1 {
      /** Value of the scalar aggregation */
      value?: number;
  }
  interface NestedResultValue$1 extends NestedResultValueResultOneOf$1 {
      /** Value aggregation result */
      value?: ValueResult$1;
      /** Range aggregation result */
      range?: RangeResult$1;
      /** Scalar aggregation result */
      scalar?: ScalarResult$1;
      /** Date histogram aggregation result */
      dateHistogram?: ValueResult$1;
  }
  /** @oneof */
  interface NestedResultValueResultOneOf$1 {
      /** Value aggregation result */
      value?: ValueResult$1;
      /** Range aggregation result */
      range?: RangeResult$1;
      /** Scalar aggregation result */
      scalar?: ScalarResult$1;
      /** Date histogram aggregation result */
      dateHistogram?: ValueResult$1;
  }
  interface Results$1 {
      /** List of nested aggregations */
      results?: Record<string, NestedResultValue$1>;
  }
  interface DateHistogramResult$1 {
      /** Date in ISO 8601 format */
      value?: string;
      /** Count of documents in the bucket */
      count?: number;
  }
  interface GroupByValueResults$1 {
      /** List of value aggregations */
      results?: NestedValueAggregationResult$1[];
  }
  interface DateHistogramResults$1 {
      /** List of date histogram aggregations */
      results?: DateHistogramResult$1[];
  }
  /**
   * Results of `NESTED` aggregation type in a flattened form
   * aggregations in resulting array are keyed by requested aggregation `name`.
   */
  interface NestedResults$1 {
      /** List of nested aggregations */
      results?: Results$1[];
  }
  interface AggregationResults$1 extends AggregationResultsResultOneOf$1 {
      /** Value aggregation results */
      values?: ValueResults$1;
      /** Range aggregation results */
      ranges?: RangeResults$1;
      /** Scalar aggregation results */
      scalar?: AggregationResultsScalarResult$1;
      /** Group by value aggregation results */
      groupedByValue?: GroupByValueResults$1;
      /** Date histogram aggregation results */
      dateHistogram?: DateHistogramResults$1;
      /** Nested aggregation results */
      nested?: NestedResults$1;
      /** User-defined name of aggregation as derived from search request */
      name?: string;
      /** Type of aggregation that must match provided kind as derived from search request */
      type?: AggregationType$1;
      /** Field to aggregate by as derived from search request */
      fieldPath?: string;
  }
  /** @oneof */
  interface AggregationResultsResultOneOf$1 {
      /** Value aggregation results */
      values?: ValueResults$1;
      /** Range aggregation results */
      ranges?: RangeResults$1;
      /** Scalar aggregation results */
      scalar?: AggregationResultsScalarResult$1;
      /** Group by value aggregation results */
      groupedByValue?: GroupByValueResults$1;
      /** Date histogram aggregation results */
      dateHistogram?: DateHistogramResults$1;
      /** Nested aggregation results */
      nested?: NestedResults$1;
  }
  interface SearchInventoryItemsWithOffsetRequest {
      /** WQL expression. */
      search?: PlatformOffsetSearch$1;
  }
  interface PlatformOffsetSearch$1 extends PlatformOffsetSearchPagingMethodOneOf$1 {
      /** Pointer to page of results using offset. Can not be used together with 'cursor_paging' */
      paging?: PlatformPaging$1;
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter?: Record<string, any> | null;
      /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
      sort?: Sorting$3[];
      /** Aggregations | Faceted search: refers to a way to explore large amounts of data by displaying summaries about various partitions of the data and later allowing to narrow the navigation to a specific partition. */
      aggregations?: Aggregation$1[];
      /** free text to match in searchable fields */
      search?: SearchDetails$1;
  }
  /** @oneof */
  interface PlatformOffsetSearchPagingMethodOneOf$1 {
      /** Pointer to page of results using offset. Can not be used together with 'cursor_paging' */
      paging?: PlatformPaging$1;
  }
  interface PlatformPaging$1 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface SearchInventoryItemsWithOffsetResponse {
      /** InventoryItems which satisfy the provided query. */
      inventoryItems?: InventoryItem$1[];
      /** Paging metadata. Contains cursor which can be used in next query. */
      pagingMetadata?: PagingMetadata$1;
  }
  interface PagingMetadata$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
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
   * Creates a new Inventory item.
   * The combination of variant_id and location_id is unique.
   * @param inventoryItem - Inventory item to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField inventoryItem
   * @requiredField inventoryItem.productId
   * @requiredField inventoryItem.variantId
   * @adminMethod
   * @returns The created Inventory item.
   */
  function createInventoryItem(inventoryItem: InventoryItem$1): Promise<InventoryItem$1>;
  /**
   * Creates multiple Inventory items.
   * @param inventoryItems - List of inventory items to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField inventoryItems
   * @requiredField inventoryItems.productId
   * @requiredField inventoryItems.variantId
   * @adminMethod
   */
  function bulkCreateInventoryItems(inventoryItems: InventoryItem$1[], options?: BulkCreateInventoryItemsOptions): Promise<BulkCreateInventoryItemsResponse>;
  interface BulkCreateInventoryItemsOptions {
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
  }
  /**
   * Retrieves a inventory item with the provided ID.
   * @param inventoryItemId - Id of the Inventory item to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField inventoryItemId
   * @returns The retrieved Inventory item.
   */
  function getInventoryItem(inventoryItemId: string): Promise<InventoryItem$1>;
  /**
   * Update a Inventory item, supports partial update.
   * Pass the latest `revision` for a successful update.
   * @param _id - Inventory ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField inventoryItem
   * @requiredField inventoryItem.revision
   * @adminMethod
   * @returns The updated Inventory item.
   */
  function updateInventoryItem(_id: string | null, inventoryItem: UpdateInventoryItem, options?: UpdateInventoryItemOptions): Promise<InventoryItem$1>;
  interface UpdateInventoryItem {
      /** Inventory tracking status, when set to true, item is available for sale without quantity limit. */
      inStock?: boolean;
      /**
       * Quantity currently left in inventory.
       * In some scenarios, quantity could go negative, for example when decreasing inventory for an order that has already been paid.
       */
      quantity?: number;
      /**
       * Inventory ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Inventory was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Inventory was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Variant ID. */
      variantId?: string;
      /** Location ID, location_id with variant_id is unique. */
      locationId?: string | null;
      /** Product ID. */
      productId?: string;
      /**
       * Whether the quantity is being tracked.
       * @readonly
       */
      trackQuantity?: boolean;
      /**
       * Item availability, availability is combination of status and available quantity.
       * @readonly
       */
      availability?: ItemAvailability$1;
      /**
       * Item availability status, availability is combination of status and available quantity.
       * + OUT_OF_STOCK: no available quantity
       * + IN_STOCK: available quantity can be found in `quantity` field.
       * + PREORDER: available quantity can be found in `preorderInfo.quantity` field.
       * @readonly
       */
      availabilityStatus?: V3AvailabilityStatus$1;
      /** Item preorder info. */
      preorderInfo?: PreorderInfo$1;
      /**
       * Item categories ID.
       * @readonly
       */
      categoriesId?: string[];
      /** Extensions enabling users to save custom data related to the inventory item. */
      extendedFields?: ExtendedFields$1;
  }
  interface UpdateInventoryItemOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
      /** Reason data */
      reason?: ReasonType;
  }
  /**
   * Update multiple Inventory items, supports partial update.
   * @param inventoryItems - List of inventory items to be updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField inventoryItems
   * @requiredField inventoryItems.inventoryItem._id
   * @requiredField inventoryItems.inventoryItem.revision
   * @adminMethod
   */
  function bulkUpdateInventoryItems(inventoryItems: MaskedInventoryItem[], options?: BulkUpdateInventoryItemsOptions): Promise<BulkUpdateInventoryItemsResponse>;
  interface BulkUpdateInventoryItemsOptions {
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
      /** Reason data */
      reason?: ReasonType;
  }
  /**
   * Update multiple Inventory items which satisfy the provided filter.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options.inventoryItem
   * @adminMethod
   */
  function bulkUpdateInventoryItemsByFilter(filter: Record<string, any> | null, options?: BulkUpdateInventoryItemsByFilterOptions): Promise<BulkUpdateInventoryItemsByFilterResponse>;
  interface BulkUpdateInventoryItemsByFilterOptions {
      /** Inventory item to be updated, may be partial. */
      inventoryItem: InventoryItem$1;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask: string[];
  }
  /**
   * Increment the inventory quantity to the items which satisfy the provided filter.
   * The item must be on track for allowing quantity increment.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options
   * @requiredField options.incrementBy
   * @adminMethod
   */
  function bulkIncrementInventoryItemsByFilter(filter: Record<string, any> | null, options: BulkIncrementInventoryItemsByFilterOptions): Promise<BulkIncrementInventoryItemsByFilterResponse>;
  interface BulkIncrementInventoryItemsByFilterOptions {
      /** Quantity to increment by. */
      incrementBy: number;
  }
  /**
   * Decrement the inventory quantity to the items which satisfy the provided filter.
   * The item must be on track for allowing quantity decrement.
   * The item quantity cannot go into negative.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "fieldName1": "value1",
   * "fieldName2":{"$operator":"value2"}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options
   * @requiredField options.decrementBy
   * @adminMethod
   */
  function bulkDecrementInventoryItemsByFilter(filter: Record<string, any> | null, options: BulkDecrementInventoryItemsByFilterOptions): Promise<BulkDecrementInventoryItemsByFilterResponse>;
  interface BulkDecrementInventoryItemsByFilterOptions {
      /** Quantity to decrement by. */
      decrementBy: number;
  }
  /**
   * Delete an Inventory item.
   * @param inventoryItemId - Id of the Inventory item to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField inventoryItemId
   * @adminMethod
   */
  function deleteInventoryItem(inventoryItemId: string): Promise<void>;
  /**
   * Deletes up to 100 products with variants.
   * @param inventoryItemIds - IDs of inventories to be deleted.
   * @internal
   * @documentationMaturity preview
   * @requiredField inventoryItemIds
   * @adminMethod
   */
  function bulkDeleteInventoryItems(inventoryItemIds: string[]): Promise<BulkDeleteInventoryItemsResponse>;
  /**
   * Query Inventory items using [WQL - Wix Query Language].
   * @internal
   * @documentationMaturity preview
   */
  function queryInventoryItems(): InventoryItemsQueryBuilder;
  interface QueryCursorResult$3 {
      cursors: Cursors$3;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface InventoryItemsQueryResult extends QueryCursorResult$3 {
      items: InventoryItem$1[];
      query: InventoryItemsQueryBuilder;
      next: () => Promise<InventoryItemsQueryResult>;
      prev: () => Promise<InventoryItemsQueryResult>;
  }
  interface InventoryItemsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: 'inStock' | 'quantity' | '_id' | '_createdDate' | '_updatedDate' | 'variantId' | 'locationId' | 'productId' | 'trackQuantity' | 'availability.status' | 'availabilityStatus' | 'preorderInfo.enabled', value: any) => InventoryItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: 'inStock' | 'quantity' | '_id' | '_createdDate' | '_updatedDate' | 'variantId' | 'locationId' | 'productId' | 'trackQuantity' | 'availability.status' | 'availabilityStatus' | 'preorderInfo.enabled', value: any) => InventoryItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: 'quantity' | '_createdDate' | '_updatedDate', value: any) => InventoryItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: 'quantity' | '_createdDate' | '_updatedDate', value: any) => InventoryItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: 'quantity' | '_createdDate' | '_updatedDate', value: any) => InventoryItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: 'quantity' | '_createdDate' | '_updatedDate', value: any) => InventoryItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'variantId' | 'locationId' | 'productId', value: string) => InventoryItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: 'inStock' | 'quantity' | '_id' | '_createdDate' | '_updatedDate' | 'variantId' | 'locationId' | 'productId' | 'trackQuantity' | 'availability.status' | 'availabilityStatus' | 'preorderInfo.enabled', value: any[]) => InventoryItemsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: 'inStock' | 'quantity' | '_id' | '_createdDate' | '_updatedDate' | 'variantId' | 'locationId' | 'productId' | 'trackQuantity' | 'availability.status' | 'availabilityStatus' | 'preorderInfo.enabled', value: any) => InventoryItemsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: 'inStock' | 'quantity' | '_id' | '_createdDate' | '_updatedDate' | 'variantId' | 'locationId' | 'productId' | 'trackQuantity' | 'availability.status' | 'availabilityStatus' | 'preorderInfo.enabled', value: boolean) => InventoryItemsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'inStock' | 'quantity' | '_createdDate' | '_updatedDate' | 'trackQuantity' | 'availability.status' | 'availabilityStatus' | 'preorderInfo.enabled'>) => InventoryItemsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'inStock' | 'quantity' | '_createdDate' | '_updatedDate' | 'trackQuantity' | 'availability.status' | 'availabilityStatus' | 'preorderInfo.enabled'>) => InventoryItemsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => InventoryItemsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => InventoryItemsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<InventoryItemsQueryResult>;
  }
  /**
   * Decrement inventory items quantity.
   * The item must be on track for allowing quantity decrement.
   * A bulk decrement request is all or nothing if the restrict_inventory is true and at least one of the items goes into negative inventory or passes the preOrder limit,
   * the request will fail with an INSUFFICIENT_INVENTORY error and an increment back operation will be executed.
   * The item quantity can go into negative if restrict_inventory is false or the item has been purchased as preOrder.
   * When preorder_request is true and the item is available for preOrder, Item preorder_counter will increase and item quantity will stay the same.
   * @param decrementData - Which inventory items to decrement, and how much to decrement from each one.
   * @internal
   * @documentationMaturity preview
   * @requiredField decrementData
   * @requiredField decrementData.decrementBy
   * @requiredField decrementData.inventoryItemId
   * @adminMethod
   */
  function bulkDecrementInventoryItems(decrementData: DecrementDataById[], options?: BulkDecrementInventoryItemsOptions): Promise<BulkDecrementInventoryItemsResponse>;
  interface BulkDecrementInventoryItemsOptions {
      /**
       * Should allow having negative inventory following this decrement action.
       * If its undefined then the Value is true
       */
      restrictInventory?: boolean | null;
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
      /** Reason data */
      reason?: ReasonType;
  }
  /**
   * Increment inventory items quantity.
   * The item must be on track for allowing quantity increment.
   * @param incrementData - Which items to increment, and how much to increment from each one.
   * @internal
   * @documentationMaturity preview
   * @requiredField incrementData
   * @requiredField incrementData.incrementBy
   * @requiredField incrementData.inventoryItemId
   * @adminMethod
   */
  function bulkIncrementInventoryItems(incrementData: IncrementDataById[], options?: BulkIncrementInventoryItemsOptions): Promise<BulkIncrementInventoryItemsResponse>;
  interface BulkIncrementInventoryItemsOptions {
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
      /** Reason data */
      reason?: ReasonType;
  }
  /**
   * Decrement inventory items quantity.
   * The item must be on track for allowing quantity decrement.
   * A bulk decrement request is all or nothing if the restrict_inventory is true and at least one of the items goes into negative inventory or passes the preOrder limit,
   * the request will fail with an INSUFFICIENT_INVENTORY error and an increment back operation will be executed.
   * The item quantity can go into negative if restrict_inventory is false or the item has been purchased as preOrder.
   * When preorder_request is true and the item is available for preOrder, Item preorder_counter will increase and item quantity will stay the same.
   * @param decrementData - Which inventory items to decrement, and how much to decrement from each one.
   * @internal
   * @documentationMaturity preview
   * @requiredField decrementData
   * @requiredField decrementData.decrementBy
   * @requiredField decrementData.variantId
   * @adminMethod
   */
  function bulkDecrementInventoryItemsByVariantAndLocation(decrementData: DecrementDataByVariantAndLocation[], options?: BulkDecrementInventoryItemsByVariantAndLocationOptions): Promise<BulkDecrementInventoryItemsByVariantAndLocationResponse>;
  interface BulkDecrementInventoryItemsByVariantAndLocationOptions {
      /**
       * Should allow having negative inventory following this decrement action.
       * If its undefined then the Value is true
       */
      restrictInventory?: boolean | null;
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
      /** Reason data */
      reason?: ReasonType;
  }
  /**
   * Increment inventory items quantity.
   * The item must be on track for allowing quantity increment.
   * @param incrementData - Which items to increment, and how much to increment from each one.
   * @internal
   * @documentationMaturity preview
   * @requiredField incrementData
   * @requiredField incrementData.incrementBy
   * @requiredField incrementData.variantId
   * @adminMethod
   */
  function bulkIncrementInventoryItemsByVariantAndLocation(incrementData: IncrementDataByVariantAndLocation[], options?: BulkIncrementInventoryItemsByVariantAndLocationOptions): Promise<BulkIncrementInventoryItemsByVariantAndLocationResponse>;
  interface BulkIncrementInventoryItemsByVariantAndLocationOptions {
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
      /** Reason data */
      reason?: ReasonType;
  }
  /**
   * @param productInventoryItems - List of inventory items per product. All existing inventory items for given product in given location_id will be replaced by ones provided in this request.
   * >**Note:** you can provide up to 1000 inventory items in total. For example you can provide 100 products with 10 inventory items in each or 1 product with 1000 inventory items or something in between.
   * @internal
   * @documentationMaturity preview
   * @requiredField locationId
   * @requiredField productInventoryItems
   * @requiredField productInventoryItems.inventoryItems
   * @requiredField productInventoryItems.inventoryItems.locationId
   * @requiredField productInventoryItems.inventoryItems.productId
   * @requiredField productInventoryItems.inventoryItems.variantId
   * @requiredField productInventoryItems.productId
   * @adminMethod
   */
  function bulkSetInventoryItemsForProductsInLocation(locationId: string, productInventoryItems: ProductInventoryItems[], options?: BulkSetInventoryItemsForProductsInLocationOptions): Promise<BulkSetInventoryItemsForProductsInLocationResponse>;
  interface BulkSetInventoryItemsForProductsInLocationOptions {
      /** Whether to return the full inventory item entity in the response. */
      returnEntity?: boolean;
  }
  /**
   * Returns total count of inventory items satisfying filter
   * @internal
   * @documentationMaturity preview
   */
  function countInventoryItems(options?: CountInventoryItemsOptions): Promise<CountInventoryItemsResponse>;
  interface CountInventoryItemsOptions {
      /**
       * A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf)
       * To understand supported filters and limitations see `QueryInventoryItems` method.
       */
      filter?: Record<string, any> | null;
  }
  /**
   * Search Inventory Items using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   */
  function searchInventoryItems(options?: SearchInventoryItemsOptions): Promise<SearchInventoryItemsResponse>;
  interface SearchInventoryItemsOptions {
      /** WQL expression. */
      search?: CursorSearch$1;
  }
  
  type storesCatalogV3InventoryItem_universal_d_CreateInventoryItemRequest = CreateInventoryItemRequest;
  type storesCatalogV3InventoryItem_universal_d_CreateInventoryItemResponse = CreateInventoryItemResponse;
  type storesCatalogV3InventoryItem_universal_d_BulkCreateInventoryItemsRequest = BulkCreateInventoryItemsRequest;
  type storesCatalogV3InventoryItem_universal_d_BulkCreateInventoryItemsResponse = BulkCreateInventoryItemsResponse;
  type storesCatalogV3InventoryItem_universal_d_GetInventoryItemRequest = GetInventoryItemRequest;
  type storesCatalogV3InventoryItem_universal_d_GetInventoryItemResponse = GetInventoryItemResponse;
  type storesCatalogV3InventoryItem_universal_d_UpdateInventoryItemRequest = UpdateInventoryItemRequest;
  type storesCatalogV3InventoryItem_universal_d_ReasonType = ReasonType;
  const storesCatalogV3InventoryItem_universal_d_ReasonType: typeof ReasonType;
  type storesCatalogV3InventoryItem_universal_d_UpdateInventoryItemResponse = UpdateInventoryItemResponse;
  type storesCatalogV3InventoryItem_universal_d_InventoryItemStockStatusUpdatedEvent = InventoryItemStockStatusUpdatedEvent;
  type storesCatalogV3InventoryItem_universal_d_InventoryItemUpdatedWithReason = InventoryItemUpdatedWithReason;
  type storesCatalogV3InventoryItem_universal_d_BulkUpdateInventoryItemsRequest = BulkUpdateInventoryItemsRequest;
  type storesCatalogV3InventoryItem_universal_d_MaskedInventoryItem = MaskedInventoryItem;
  type storesCatalogV3InventoryItem_universal_d_BulkUpdateInventoryItemsResponse = BulkUpdateInventoryItemsResponse;
  type storesCatalogV3InventoryItem_universal_d_BulkUpdateInventoryItemsByFilterRequest = BulkUpdateInventoryItemsByFilterRequest;
  type storesCatalogV3InventoryItem_universal_d_BulkUpdateInventoryItemsByFilterResponse = BulkUpdateInventoryItemsByFilterResponse;
  type storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsByFilterRequest = BulkIncrementInventoryItemsByFilterRequest;
  type storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsByFilterResponse = BulkIncrementInventoryItemsByFilterResponse;
  type storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsByFilterRequest = BulkDecrementInventoryItemsByFilterRequest;
  type storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsByFilterResponse = BulkDecrementInventoryItemsByFilterResponse;
  type storesCatalogV3InventoryItem_universal_d_DeleteInventoryItemRequest = DeleteInventoryItemRequest;
  type storesCatalogV3InventoryItem_universal_d_DeleteInventoryItemResponse = DeleteInventoryItemResponse;
  type storesCatalogV3InventoryItem_universal_d_BulkDeleteInventoryItemsRequest = BulkDeleteInventoryItemsRequest;
  type storesCatalogV3InventoryItem_universal_d_BulkDeleteInventoryItemsResponse = BulkDeleteInventoryItemsResponse;
  type storesCatalogV3InventoryItem_universal_d_QueryInventoryItemsRequest = QueryInventoryItemsRequest;
  type storesCatalogV3InventoryItem_universal_d_InventoryQuery = InventoryQuery;
  type storesCatalogV3InventoryItem_universal_d_InventoryQueryPagingMethodOneOf = InventoryQueryPagingMethodOneOf;
  type storesCatalogV3InventoryItem_universal_d_InventoryPaging = InventoryPaging;
  type storesCatalogV3InventoryItem_universal_d_InventoryCursorPaging = InventoryCursorPaging;
  type storesCatalogV3InventoryItem_universal_d_QueryInventoryItemsResponse = QueryInventoryItemsResponse;
  type storesCatalogV3InventoryItem_universal_d_PlatformPagingMetadataV2 = PlatformPagingMetadataV2;
  type storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsRequest = BulkDecrementInventoryItemsRequest;
  type storesCatalogV3InventoryItem_universal_d_DecrementDataById = DecrementDataById;
  type storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsResponse = BulkDecrementInventoryItemsResponse;
  type storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsRequest = BulkIncrementInventoryItemsRequest;
  type storesCatalogV3InventoryItem_universal_d_IncrementDataById = IncrementDataById;
  type storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsResponse = BulkIncrementInventoryItemsResponse;
  type storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsByVariantAndLocationRequest = BulkDecrementInventoryItemsByVariantAndLocationRequest;
  type storesCatalogV3InventoryItem_universal_d_DecrementDataByVariantAndLocation = DecrementDataByVariantAndLocation;
  type storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsByVariantAndLocationResponse = BulkDecrementInventoryItemsByVariantAndLocationResponse;
  type storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsByVariantAndLocationRequest = BulkIncrementInventoryItemsByVariantAndLocationRequest;
  type storesCatalogV3InventoryItem_universal_d_IncrementDataByVariantAndLocation = IncrementDataByVariantAndLocation;
  type storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsByVariantAndLocationResponse = BulkIncrementInventoryItemsByVariantAndLocationResponse;
  type storesCatalogV3InventoryItem_universal_d_BulkSetInventoryItemsForProductsInLocationRequest = BulkSetInventoryItemsForProductsInLocationRequest;
  type storesCatalogV3InventoryItem_universal_d_ProductInventoryItems = ProductInventoryItems;
  type storesCatalogV3InventoryItem_universal_d_BulkSetInventoryItemsForProductsInLocationResponse = BulkSetInventoryItemsForProductsInLocationResponse;
  type storesCatalogV3InventoryItem_universal_d_CountInventoryItemsRequest = CountInventoryItemsRequest;
  type storesCatalogV3InventoryItem_universal_d_CountInventoryItemsResponse = CountInventoryItemsResponse;
  type storesCatalogV3InventoryItem_universal_d_SearchInventoryItemsRequest = SearchInventoryItemsRequest;
  type storesCatalogV3InventoryItem_universal_d_SearchInventoryItemsResponse = SearchInventoryItemsResponse;
  type storesCatalogV3InventoryItem_universal_d_SearchInventoryItemsWithOffsetRequest = SearchInventoryItemsWithOffsetRequest;
  type storesCatalogV3InventoryItem_universal_d_SearchInventoryItemsWithOffsetResponse = SearchInventoryItemsWithOffsetResponse;
  const storesCatalogV3InventoryItem_universal_d_createInventoryItem: typeof createInventoryItem;
  const storesCatalogV3InventoryItem_universal_d_bulkCreateInventoryItems: typeof bulkCreateInventoryItems;
  type storesCatalogV3InventoryItem_universal_d_BulkCreateInventoryItemsOptions = BulkCreateInventoryItemsOptions;
  const storesCatalogV3InventoryItem_universal_d_getInventoryItem: typeof getInventoryItem;
  const storesCatalogV3InventoryItem_universal_d_updateInventoryItem: typeof updateInventoryItem;
  type storesCatalogV3InventoryItem_universal_d_UpdateInventoryItem = UpdateInventoryItem;
  type storesCatalogV3InventoryItem_universal_d_UpdateInventoryItemOptions = UpdateInventoryItemOptions;
  const storesCatalogV3InventoryItem_universal_d_bulkUpdateInventoryItems: typeof bulkUpdateInventoryItems;
  type storesCatalogV3InventoryItem_universal_d_BulkUpdateInventoryItemsOptions = BulkUpdateInventoryItemsOptions;
  const storesCatalogV3InventoryItem_universal_d_bulkUpdateInventoryItemsByFilter: typeof bulkUpdateInventoryItemsByFilter;
  type storesCatalogV3InventoryItem_universal_d_BulkUpdateInventoryItemsByFilterOptions = BulkUpdateInventoryItemsByFilterOptions;
  const storesCatalogV3InventoryItem_universal_d_bulkIncrementInventoryItemsByFilter: typeof bulkIncrementInventoryItemsByFilter;
  type storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsByFilterOptions = BulkIncrementInventoryItemsByFilterOptions;
  const storesCatalogV3InventoryItem_universal_d_bulkDecrementInventoryItemsByFilter: typeof bulkDecrementInventoryItemsByFilter;
  type storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsByFilterOptions = BulkDecrementInventoryItemsByFilterOptions;
  const storesCatalogV3InventoryItem_universal_d_deleteInventoryItem: typeof deleteInventoryItem;
  const storesCatalogV3InventoryItem_universal_d_bulkDeleteInventoryItems: typeof bulkDeleteInventoryItems;
  const storesCatalogV3InventoryItem_universal_d_queryInventoryItems: typeof queryInventoryItems;
  type storesCatalogV3InventoryItem_universal_d_InventoryItemsQueryResult = InventoryItemsQueryResult;
  type storesCatalogV3InventoryItem_universal_d_InventoryItemsQueryBuilder = InventoryItemsQueryBuilder;
  const storesCatalogV3InventoryItem_universal_d_bulkDecrementInventoryItems: typeof bulkDecrementInventoryItems;
  type storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsOptions = BulkDecrementInventoryItemsOptions;
  const storesCatalogV3InventoryItem_universal_d_bulkIncrementInventoryItems: typeof bulkIncrementInventoryItems;
  type storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsOptions = BulkIncrementInventoryItemsOptions;
  const storesCatalogV3InventoryItem_universal_d_bulkDecrementInventoryItemsByVariantAndLocation: typeof bulkDecrementInventoryItemsByVariantAndLocation;
  type storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsByVariantAndLocationOptions = BulkDecrementInventoryItemsByVariantAndLocationOptions;
  const storesCatalogV3InventoryItem_universal_d_bulkIncrementInventoryItemsByVariantAndLocation: typeof bulkIncrementInventoryItemsByVariantAndLocation;
  type storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsByVariantAndLocationOptions = BulkIncrementInventoryItemsByVariantAndLocationOptions;
  const storesCatalogV3InventoryItem_universal_d_bulkSetInventoryItemsForProductsInLocation: typeof bulkSetInventoryItemsForProductsInLocation;
  type storesCatalogV3InventoryItem_universal_d_BulkSetInventoryItemsForProductsInLocationOptions = BulkSetInventoryItemsForProductsInLocationOptions;
  const storesCatalogV3InventoryItem_universal_d_countInventoryItems: typeof countInventoryItems;
  type storesCatalogV3InventoryItem_universal_d_CountInventoryItemsOptions = CountInventoryItemsOptions;
  const storesCatalogV3InventoryItem_universal_d_searchInventoryItems: typeof searchInventoryItems;
  type storesCatalogV3InventoryItem_universal_d_SearchInventoryItemsOptions = SearchInventoryItemsOptions;
  namespace storesCatalogV3InventoryItem_universal_d {
    export {
      InventoryItem$1 as InventoryItem,
      InventoryItemTrackingMethodOneOf$1 as InventoryItemTrackingMethodOneOf,
      ItemAvailability$1 as ItemAvailability,
      AvailabilityStatus$1 as AvailabilityStatus,
      V3AvailabilityStatus$1 as V3AvailabilityStatus,
      PreorderInfo$1 as PreorderInfo,
      ExtendedFields$1 as ExtendedFields,
      InvalidateCache$3 as InvalidateCache,
      InvalidateCacheGetByOneOf$3 as InvalidateCacheGetByOneOf,
      App$3 as App,
      Page$3 as Page,
      URI$3 as URI,
      File$3 as File,
      storesCatalogV3InventoryItem_universal_d_CreateInventoryItemRequest as CreateInventoryItemRequest,
      storesCatalogV3InventoryItem_universal_d_CreateInventoryItemResponse as CreateInventoryItemResponse,
      storesCatalogV3InventoryItem_universal_d_BulkCreateInventoryItemsRequest as BulkCreateInventoryItemsRequest,
      storesCatalogV3InventoryItem_universal_d_BulkCreateInventoryItemsResponse as BulkCreateInventoryItemsResponse,
      BulkInventoryItemResult$1 as BulkInventoryItemResult,
      ItemMetadata$2 as ItemMetadata,
      ApplicationError$2 as ApplicationError,
      BulkActionMetadata$2 as BulkActionMetadata,
      storesCatalogV3InventoryItem_universal_d_GetInventoryItemRequest as GetInventoryItemRequest,
      storesCatalogV3InventoryItem_universal_d_GetInventoryItemResponse as GetInventoryItemResponse,
      storesCatalogV3InventoryItem_universal_d_UpdateInventoryItemRequest as UpdateInventoryItemRequest,
      storesCatalogV3InventoryItem_universal_d_ReasonType as ReasonType,
      storesCatalogV3InventoryItem_universal_d_UpdateInventoryItemResponse as UpdateInventoryItemResponse,
      storesCatalogV3InventoryItem_universal_d_InventoryItemStockStatusUpdatedEvent as InventoryItemStockStatusUpdatedEvent,
      storesCatalogV3InventoryItem_universal_d_InventoryItemUpdatedWithReason as InventoryItemUpdatedWithReason,
      storesCatalogV3InventoryItem_universal_d_BulkUpdateInventoryItemsRequest as BulkUpdateInventoryItemsRequest,
      storesCatalogV3InventoryItem_universal_d_MaskedInventoryItem as MaskedInventoryItem,
      storesCatalogV3InventoryItem_universal_d_BulkUpdateInventoryItemsResponse as BulkUpdateInventoryItemsResponse,
      storesCatalogV3InventoryItem_universal_d_BulkUpdateInventoryItemsByFilterRequest as BulkUpdateInventoryItemsByFilterRequest,
      storesCatalogV3InventoryItem_universal_d_BulkUpdateInventoryItemsByFilterResponse as BulkUpdateInventoryItemsByFilterResponse,
      storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsByFilterRequest as BulkIncrementInventoryItemsByFilterRequest,
      storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsByFilterResponse as BulkIncrementInventoryItemsByFilterResponse,
      storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsByFilterRequest as BulkDecrementInventoryItemsByFilterRequest,
      storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsByFilterResponse as BulkDecrementInventoryItemsByFilterResponse,
      storesCatalogV3InventoryItem_universal_d_DeleteInventoryItemRequest as DeleteInventoryItemRequest,
      storesCatalogV3InventoryItem_universal_d_DeleteInventoryItemResponse as DeleteInventoryItemResponse,
      storesCatalogV3InventoryItem_universal_d_BulkDeleteInventoryItemsRequest as BulkDeleteInventoryItemsRequest,
      storesCatalogV3InventoryItem_universal_d_BulkDeleteInventoryItemsResponse as BulkDeleteInventoryItemsResponse,
      storesCatalogV3InventoryItem_universal_d_QueryInventoryItemsRequest as QueryInventoryItemsRequest,
      storesCatalogV3InventoryItem_universal_d_InventoryQuery as InventoryQuery,
      storesCatalogV3InventoryItem_universal_d_InventoryQueryPagingMethodOneOf as InventoryQueryPagingMethodOneOf,
      Sorting$3 as Sorting,
      SortOrder$3 as SortOrder,
      storesCatalogV3InventoryItem_universal_d_InventoryPaging as InventoryPaging,
      storesCatalogV3InventoryItem_universal_d_InventoryCursorPaging as InventoryCursorPaging,
      storesCatalogV3InventoryItem_universal_d_QueryInventoryItemsResponse as QueryInventoryItemsResponse,
      storesCatalogV3InventoryItem_universal_d_PlatformPagingMetadataV2 as PlatformPagingMetadataV2,
      Cursors$3 as Cursors,
      DomainEvent$3 as DomainEvent,
      DomainEventBodyOneOf$3 as DomainEventBodyOneOf,
      EntityCreatedEvent$3 as EntityCreatedEvent,
      EntityUpdatedEvent$3 as EntityUpdatedEvent,
      EntityDeletedEvent$3 as EntityDeletedEvent,
      ActionEvent$3 as ActionEvent,
      Empty$3 as Empty,
      storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsRequest as BulkDecrementInventoryItemsRequest,
      storesCatalogV3InventoryItem_universal_d_DecrementDataById as DecrementDataById,
      storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsResponse as BulkDecrementInventoryItemsResponse,
      storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsRequest as BulkIncrementInventoryItemsRequest,
      storesCatalogV3InventoryItem_universal_d_IncrementDataById as IncrementDataById,
      storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsResponse as BulkIncrementInventoryItemsResponse,
      storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsByVariantAndLocationRequest as BulkDecrementInventoryItemsByVariantAndLocationRequest,
      storesCatalogV3InventoryItem_universal_d_DecrementDataByVariantAndLocation as DecrementDataByVariantAndLocation,
      storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsByVariantAndLocationResponse as BulkDecrementInventoryItemsByVariantAndLocationResponse,
      storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsByVariantAndLocationRequest as BulkIncrementInventoryItemsByVariantAndLocationRequest,
      storesCatalogV3InventoryItem_universal_d_IncrementDataByVariantAndLocation as IncrementDataByVariantAndLocation,
      storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsByVariantAndLocationResponse as BulkIncrementInventoryItemsByVariantAndLocationResponse,
      storesCatalogV3InventoryItem_universal_d_BulkSetInventoryItemsForProductsInLocationRequest as BulkSetInventoryItemsForProductsInLocationRequest,
      storesCatalogV3InventoryItem_universal_d_ProductInventoryItems as ProductInventoryItems,
      storesCatalogV3InventoryItem_universal_d_BulkSetInventoryItemsForProductsInLocationResponse as BulkSetInventoryItemsForProductsInLocationResponse,
      storesCatalogV3InventoryItem_universal_d_CountInventoryItemsRequest as CountInventoryItemsRequest,
      storesCatalogV3InventoryItem_universal_d_CountInventoryItemsResponse as CountInventoryItemsResponse,
      storesCatalogV3InventoryItem_universal_d_SearchInventoryItemsRequest as SearchInventoryItemsRequest,
      CursorSearch$1 as CursorSearch,
      CursorSearchPagingMethodOneOf$1 as CursorSearchPagingMethodOneOf,
      Aggregation$1 as Aggregation,
      AggregationKindOneOf$1 as AggregationKindOneOf,
      RangeBucket$1 as RangeBucket,
      SortType$1 as SortType,
      SortDirection$1 as SortDirection,
      MissingValues$1 as MissingValues,
      IncludeMissingValuesOptions$1 as IncludeMissingValuesOptions,
      ScalarType$1 as ScalarType,
      ValueAggregation$1 as ValueAggregation,
      ValueAggregationOptionsOneOf$1 as ValueAggregationOptionsOneOf,
      NestedAggregationType$1 as NestedAggregationType,
      RangeAggregation$1 as RangeAggregation,
      ScalarAggregation$1 as ScalarAggregation,
      DateHistogramAggregation$1 as DateHistogramAggregation,
      Interval$1 as Interval,
      NestedAggregationItem$1 as NestedAggregationItem,
      NestedAggregationItemKindOneOf$1 as NestedAggregationItemKindOneOf,
      AggregationType$1 as AggregationType,
      NestedAggregation$1 as NestedAggregation,
      GroupByAggregation$1 as GroupByAggregation,
      GroupByAggregationKindOneOf$1 as GroupByAggregationKindOneOf,
      SearchDetails$1 as SearchDetails,
      Mode$1 as Mode,
      CursorPaging$3 as CursorPaging,
      storesCatalogV3InventoryItem_universal_d_SearchInventoryItemsResponse as SearchInventoryItemsResponse,
      CursorPagingMetadata$3 as CursorPagingMetadata,
      AggregationData$1 as AggregationData,
      ValueAggregationResult$1 as ValueAggregationResult,
      RangeAggregationResult$1 as RangeAggregationResult,
      NestedAggregationResults$1 as NestedAggregationResults,
      NestedAggregationResultsResultOneOf$1 as NestedAggregationResultsResultOneOf,
      ValueResults$1 as ValueResults,
      RangeResults$1 as RangeResults,
      AggregationResultsScalarResult$1 as AggregationResultsScalarResult,
      NestedValueAggregationResult$1 as NestedValueAggregationResult,
      ValueResult$1 as ValueResult,
      RangeResult$1 as RangeResult,
      ScalarResult$1 as ScalarResult,
      NestedResultValue$1 as NestedResultValue,
      NestedResultValueResultOneOf$1 as NestedResultValueResultOneOf,
      Results$1 as Results,
      DateHistogramResult$1 as DateHistogramResult,
      GroupByValueResults$1 as GroupByValueResults,
      DateHistogramResults$1 as DateHistogramResults,
      NestedResults$1 as NestedResults,
      AggregationResults$1 as AggregationResults,
      AggregationResultsResultOneOf$1 as AggregationResultsResultOneOf,
      storesCatalogV3InventoryItem_universal_d_SearchInventoryItemsWithOffsetRequest as SearchInventoryItemsWithOffsetRequest,
      PlatformOffsetSearch$1 as PlatformOffsetSearch,
      PlatformOffsetSearchPagingMethodOneOf$1 as PlatformOffsetSearchPagingMethodOneOf,
      PlatformPaging$1 as PlatformPaging,
      storesCatalogV3InventoryItem_universal_d_SearchInventoryItemsWithOffsetResponse as SearchInventoryItemsWithOffsetResponse,
      PagingMetadata$1 as PagingMetadata,
      MessageEnvelope$3 as MessageEnvelope,
      IdentificationData$3 as IdentificationData,
      IdentificationDataIdOneOf$3 as IdentificationDataIdOneOf,
      WebhookIdentityType$3 as WebhookIdentityType,
      storesCatalogV3InventoryItem_universal_d_createInventoryItem as createInventoryItem,
      storesCatalogV3InventoryItem_universal_d_bulkCreateInventoryItems as bulkCreateInventoryItems,
      storesCatalogV3InventoryItem_universal_d_BulkCreateInventoryItemsOptions as BulkCreateInventoryItemsOptions,
      storesCatalogV3InventoryItem_universal_d_getInventoryItem as getInventoryItem,
      storesCatalogV3InventoryItem_universal_d_updateInventoryItem as updateInventoryItem,
      storesCatalogV3InventoryItem_universal_d_UpdateInventoryItem as UpdateInventoryItem,
      storesCatalogV3InventoryItem_universal_d_UpdateInventoryItemOptions as UpdateInventoryItemOptions,
      storesCatalogV3InventoryItem_universal_d_bulkUpdateInventoryItems as bulkUpdateInventoryItems,
      storesCatalogV3InventoryItem_universal_d_BulkUpdateInventoryItemsOptions as BulkUpdateInventoryItemsOptions,
      storesCatalogV3InventoryItem_universal_d_bulkUpdateInventoryItemsByFilter as bulkUpdateInventoryItemsByFilter,
      storesCatalogV3InventoryItem_universal_d_BulkUpdateInventoryItemsByFilterOptions as BulkUpdateInventoryItemsByFilterOptions,
      storesCatalogV3InventoryItem_universal_d_bulkIncrementInventoryItemsByFilter as bulkIncrementInventoryItemsByFilter,
      storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsByFilterOptions as BulkIncrementInventoryItemsByFilterOptions,
      storesCatalogV3InventoryItem_universal_d_bulkDecrementInventoryItemsByFilter as bulkDecrementInventoryItemsByFilter,
      storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsByFilterOptions as BulkDecrementInventoryItemsByFilterOptions,
      storesCatalogV3InventoryItem_universal_d_deleteInventoryItem as deleteInventoryItem,
      storesCatalogV3InventoryItem_universal_d_bulkDeleteInventoryItems as bulkDeleteInventoryItems,
      storesCatalogV3InventoryItem_universal_d_queryInventoryItems as queryInventoryItems,
      storesCatalogV3InventoryItem_universal_d_InventoryItemsQueryResult as InventoryItemsQueryResult,
      storesCatalogV3InventoryItem_universal_d_InventoryItemsQueryBuilder as InventoryItemsQueryBuilder,
      storesCatalogV3InventoryItem_universal_d_bulkDecrementInventoryItems as bulkDecrementInventoryItems,
      storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsOptions as BulkDecrementInventoryItemsOptions,
      storesCatalogV3InventoryItem_universal_d_bulkIncrementInventoryItems as bulkIncrementInventoryItems,
      storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsOptions as BulkIncrementInventoryItemsOptions,
      storesCatalogV3InventoryItem_universal_d_bulkDecrementInventoryItemsByVariantAndLocation as bulkDecrementInventoryItemsByVariantAndLocation,
      storesCatalogV3InventoryItem_universal_d_BulkDecrementInventoryItemsByVariantAndLocationOptions as BulkDecrementInventoryItemsByVariantAndLocationOptions,
      storesCatalogV3InventoryItem_universal_d_bulkIncrementInventoryItemsByVariantAndLocation as bulkIncrementInventoryItemsByVariantAndLocation,
      storesCatalogV3InventoryItem_universal_d_BulkIncrementInventoryItemsByVariantAndLocationOptions as BulkIncrementInventoryItemsByVariantAndLocationOptions,
      storesCatalogV3InventoryItem_universal_d_bulkSetInventoryItemsForProductsInLocation as bulkSetInventoryItemsForProductsInLocation,
      storesCatalogV3InventoryItem_universal_d_BulkSetInventoryItemsForProductsInLocationOptions as BulkSetInventoryItemsForProductsInLocationOptions,
      storesCatalogV3InventoryItem_universal_d_countInventoryItems as countInventoryItems,
      storesCatalogV3InventoryItem_universal_d_CountInventoryItemsOptions as CountInventoryItemsOptions,
      storesCatalogV3InventoryItem_universal_d_searchInventoryItems as searchInventoryItems,
      storesCatalogV3InventoryItem_universal_d_SearchInventoryItemsOptions as SearchInventoryItemsOptions,
    };
  }
  
  /** Product is the main entity of ProductService that can be used for lorem ipsum dolor */
  interface Product extends ProductTypedPropertiesOneOf {
      /** Physical properties, can be provided only when `product_type` is PHYSICAL */
      physicalProperties?: PhysicalProperties;
      /**
       * Product ID. Auto-generated on product creation.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Product was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Product was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Product name. Translatable. */
      name?: string | null;
      /**
       * A permanent, friendly URL name.
       * If not provided, on create generated automatically.
       * When provided, validated and must be unique.
       */
      slug?: string | null;
      /**
       * URL to product page on the site.
       * > **Note:** This field is returned only when you pass `fields: "URL"` in the request.
       * @readonly
       */
      url?: string;
      /**
       * Optional - Product description which supports rich content.
       * In order to use this field you have to integrate with "Ricos" on frontend side. To learn how to do it visit https://ricos.js.org/.
       * @internal
       */
      description?: RichContent;
      /**
       * Optional - RichContent description converted to html.
       * If provided on write: this description must be a valid html and will be converted to RichContent description.
       * It is ignored if provided along with RichContent description.
       * > **Note:** This field is returned only when you pass `fields: "PLAIN_DESCRIPTION"` in the request.
       */
      plainDescription?: string | null;
      /** Whether the product is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /**
       * Whether the product is visible in POS (point of sale app). Default: `true` for productType PHYSICAL.
       * Note: productType DIGITAL is not supported in POS so for such products it's always `false` and it's not allowed to change it.
       */
      visibleInPos?: boolean | null;
      /** Media items (images, videos etc) associated with this product. */
      media?: Media;
      /** Custom SEO data for the product. */
      seoData?: SeoSchema;
      /** Tax group id */
      taxGroupId?: string | null;
      /**
       * Product options. Allows buyer to customize product, e.g. select Color, Size and so on.
       * Always generates variants: every variant must have exactly one choice related to each option.
       * Since options and variants tightly coupled and rely on each other they usually should be provided together in all operations.
       */
      options?: ConnectedOption[];
      /** Product Modifiers. Allows buyer to customize product, e.g. select Color, Size and so on similarly to `options` but with one main difference - `modifiers` never generate any variants. */
      modifiers?: ConnectedModifier[];
      /** Optional - Brand. To assign existing brand to product provide `brand.id`. */
      brand?: Brand;
      /** Product info sections. */
      infoSections?: InfoSection[];
      /** Product ribbon. */
      ribbon?: Ribbon$1;
      /**
       * A list of categories that this product is included in directly. Updated automatically when product added/removed from category, when an item is moved within the category or when category deleted.
       * @readonly
       */
      directCategories?: ProductCategory[];
      /**
       * A list of all categories that this product is included in directly and their parent category ids. For example, product included in category "Shoes", "Shoes" has parent category "Women", product is not included in category "Women" directly but it still will be returned in this list because product included in it's subcategory.
       * @readonly
       */
      allCategories?: ProductCategory[];
      /**
       * Main category id. If product belongs to more than one category main category defines `breadcrumbs` on product page.
       * By default first category from `category_ids` list. Provided value MUST be in `category_ids`
       * Can be empty only in case if product doesn't belong to any category.
       */
      mainCategoryId?: string | null;
      /**
       * Product base price range. The minimum and maximum prices of all the variants.
       * @readonly
       */
      basePriceRange?: PriceRange;
      /**
       * Product sale price range. The minimum and maximum sale prices of all the variants.
       * @readonly
       */
      salePriceRange?: PriceRange;
      /**
       * Product cost range. The minimum and maximum costs of all the variants.
       * > **Note:** This field is returned by the API only if `fields: "MERCHANT_DATA"` is passed in a request and a user has authorized your app with one of the following permission scopes: `SCOPE.DC-STORES.MANAGE-PRODUCTS`, `SCOPE.POS.MANAGE-PRODUCTS-COLLECTIONS	`, `SCOPE.STORES.MANAGE-STORES`, `SCOPE.STORES.MANAGE-STORES-LIMITED`.
       * @readonly
       */
      costRange?: PriceRange;
      /**
       * Product inventory state in the online store.
       * @readonly
       */
      inventory?: Inventory;
      /** Product type. Affects which properties product has. Also defines type of variants which allowed to be associated with this product. Product type must be provided on creation and cannot be changed. */
      productType?: ProductType;
      /**
       * Currency code in ISO 4217 format (e.g., USD). All prices in responses are in this currency.
       * Represents site currency specified in settings unless other currency explicitly provided in `x-wix-currency` header.
       * > **Note:** This field is returned only when you pass `fields: "CURRENCY"` in the request.
       * @readonly
       */
      currency?: string | null;
      /**
       * Info about breadcrumbs of the `main_category_id`. Can be used to navigate to parent categories.
       * > **Note:** This field is returned only when you pass `fields: "BREADCRUMBS_INFO"` in the request.
       * @readonly
       */
      breadcrumbsInfo?: BreadcrumbsInfo;
      /**
       * List of related variants.
       * On update product request with variants product options must be provided
       */
      variants?: Variant[];
      /**
       * Info about product variants.
       * Required in update request if `options` provided and vice verse: if `variants_info` provided then `options` also required.
       * > **Note:** This field is returned only when you pass `fields: "VARIANTS_INFO"` in the request.
       */
      variantsInfo?: V3VariantsInfo;
      /** Extensions enabling users to save custom data related to the product. */
      extendedFields?: ExtendedFields;
      /**
       * SEO title extracted from `seo_data` for backward compatibility.
       * @internal
       * @readonly
       */
      seoTitle?: string | null;
      /**
       * SEO description extracted from `seo_data` for backward compatibility.
       * @internal
       * @readonly
       */
      seoDescription?: string | null;
      subscription?: Subscription;
      /**
       * Not yet implemented, will later replace subscription.
       * Product subscription based purchases.
       */
      subscriptionDetails?: SubscriptionDetails;
      /**
       * internal util field to improve nile-search performance
       * @internal
       * @readonly
       */
      flattenOptions?: string[];
      /**
       * internal util field to improve nile-search performance
       * @internal
       * @readonly
       */
      flattenModifiers?: string[];
  }
  /** @oneof */
  interface ProductTypedPropertiesOneOf {
      /** Physical properties, can be provided only when `product_type` is PHYSICAL */
      physicalProperties?: PhysicalProperties;
  }
  interface RichContent {
      /** Node objects representing a rich content document. */
      nodes?: Node[];
      /** Object metadata. */
      metadata?: Metadata;
      /** Global styling for header, paragraph, block quote, and code block nodes in the object. */
      documentStyle?: DocumentStyle;
  }
  interface Node extends NodeDataOneOf {
      /** Data for a button node. */
      buttonData?: ButtonData;
      /** Data for a code block node. */
      codeBlockData?: CodeBlockData;
      /** Data for a divider node. */
      dividerData?: DividerData;
      /** Data for a file node. */
      fileData?: FileData;
      /** Data for a gallery node. */
      galleryData?: GalleryData;
      /** Data for a GIF node. */
      gifData?: GIFData;
      /** Data for a heading node. */
      headingData?: HeadingData;
      /** Data for an embedded HTML node. */
      htmlData?: HTMLData;
      /** Data for an image node. */
      imageData?: ImageData;
      /** Data for a link preview node. */
      linkPreviewData?: LinkPreviewData;
      /** Data for a map node. */
      mapData?: MapData;
      /** Data for a paragraph node. */
      paragraphData?: ParagraphData;
      /** Data for a poll node. */
      pollData?: PollData;
      /** Data for a text node. Used to apply decorations to text. */
      textData?: TextData;
      /** Data for an app embed node. */
      appEmbedData?: AppEmbedData;
      /** Data for a video node. */
      videoData?: VideoData;
      /** Data for an oEmbed node. */
      embedData?: EmbedData;
      /** Data for a collapsible list node. */
      collapsibleListData?: CollapsibleListData;
      /** Data for a table node. */
      tableData?: TableData;
      /** Data for a table cell node. */
      tableCellData?: TableCellData;
      /** Data for a custon external node. */
      externalData?: Record<string, any> | null;
      /** Data for an audio node. */
      audioData?: AudioData;
      /** Data for an ordered list node. */
      orderedListData?: OrderedListData;
      /** Data for a bulleted list node. */
      bulletedListData?: BulletedListData;
      /** Data for a block quote node. */
      blockquoteData?: BlockquoteData;
      /** Node type. Use `APP_EMBED` for nodes that embed content from other Wix apps. Use `EMBED` to embed content in [oEmbed](https://oembed.com/) format. */
      type?: NodeType;
      /** Node ID. */
      _id?: string;
      /** A list of child nodes. */
      nodes?: Node[];
      /** Padding and background color styling for the node. */
      style?: NodeStyle;
  }
  /** @oneof */
  interface NodeDataOneOf {
      /** Data for a button node. */
      buttonData?: ButtonData;
      /** Data for a code block node. */
      codeBlockData?: CodeBlockData;
      /** Data for a divider node. */
      dividerData?: DividerData;
      /** Data for a file node. */
      fileData?: FileData;
      /** Data for a gallery node. */
      galleryData?: GalleryData;
      /** Data for a GIF node. */
      gifData?: GIFData;
      /** Data for a heading node. */
      headingData?: HeadingData;
      /** Data for an embedded HTML node. */
      htmlData?: HTMLData;
      /** Data for an image node. */
      imageData?: ImageData;
      /** Data for a link preview node. */
      linkPreviewData?: LinkPreviewData;
      /** Data for a map node. */
      mapData?: MapData;
      /** Data for a paragraph node. */
      paragraphData?: ParagraphData;
      /** Data for a poll node. */
      pollData?: PollData;
      /** Data for a text node. Used to apply decorations to text. */
      textData?: TextData;
      /** Data for an app embed node. */
      appEmbedData?: AppEmbedData;
      /** Data for a video node. */
      videoData?: VideoData;
      /** Data for an oEmbed node. */
      embedData?: EmbedData;
      /** Data for a collapsible list node. */
      collapsibleListData?: CollapsibleListData;
      /** Data for a table node. */
      tableData?: TableData;
      /** Data for a table cell node. */
      tableCellData?: TableCellData;
      /** Data for a custon external node. */
      externalData?: Record<string, any> | null;
      /** Data for an audio node. */
      audioData?: AudioData;
      /** Data for an ordered list node. */
      orderedListData?: OrderedListData;
      /** Data for a bulleted list node. */
      bulletedListData?: BulletedListData;
      /** Data for a block quote node. */
      blockquoteData?: BlockquoteData;
  }
  enum NodeType {
      PARAGRAPH = "PARAGRAPH",
      TEXT = "TEXT",
      HEADING = "HEADING",
      BULLETED_LIST = "BULLETED_LIST",
      ORDERED_LIST = "ORDERED_LIST",
      LIST_ITEM = "LIST_ITEM",
      BLOCKQUOTE = "BLOCKQUOTE",
      CODE_BLOCK = "CODE_BLOCK",
      VIDEO = "VIDEO",
      DIVIDER = "DIVIDER",
      FILE = "FILE",
      GALLERY = "GALLERY",
      GIF = "GIF",
      HTML = "HTML",
      IMAGE = "IMAGE",
      LINK_PREVIEW = "LINK_PREVIEW",
      MAP = "MAP",
      POLL = "POLL",
      APP_EMBED = "APP_EMBED",
      BUTTON = "BUTTON",
      COLLAPSIBLE_LIST = "COLLAPSIBLE_LIST",
      TABLE = "TABLE",
      EMBED = "EMBED",
      COLLAPSIBLE_ITEM = "COLLAPSIBLE_ITEM",
      COLLAPSIBLE_ITEM_TITLE = "COLLAPSIBLE_ITEM_TITLE",
      COLLAPSIBLE_ITEM_BODY = "COLLAPSIBLE_ITEM_BODY",
      TABLE_CELL = "TABLE_CELL",
      TABLE_ROW = "TABLE_ROW",
      EXTERNAL = "EXTERNAL",
      AUDIO = "AUDIO"
  }
  interface NodeStyle {
      /** The top padding value in pixels. */
      paddingTop?: string | null;
      /** The bottom padding value in pixels. */
      paddingBottom?: string | null;
      /** The background color as a hexadecimal value. */
      backgroundColor?: string | null;
  }
  interface ButtonData {
      /** Styling for the button's container. */
      containerData?: PluginContainerData;
      /** The button type. */
      type?: Type;
      /** Styling for the button. */
      styles?: Styles;
      /** The text to display on the button. */
      text?: string | null;
      /** Button link details. */
      link?: Link;
  }
  interface Border {
      /** Border width in pixels. */
      width?: number | null;
      /** Border radius in pixels. */
      radius?: number | null;
  }
  interface Colors {
      /** The text color as a hexadecimal value. */
      text?: string | null;
      /** The border color as a hexadecimal value. */
      border?: string | null;
      /** The background color as a hexadecimal value. */
      background?: string | null;
  }
  interface PluginContainerData {
      /** The width of the node when it's displayed. */
      width?: PluginContainerDataWidth;
      /** The node's alignment within its container. */
      alignment?: PluginContainerDataAlignment;
      /** Spoiler cover settings for the node. */
      spoiler?: Spoiler;
      /** The height of the node when it's displayed. */
      height?: Height;
      /** Sets whether text should wrap around this node when it's displayed. If `textWrap` is `false`, the node takes up the width of its container. */
      textWrap?: boolean | null;
  }
  enum WidthType {
      /** Width matches the content width */
      CONTENT = "CONTENT",
      /** Small Width */
      SMALL = "SMALL",
      /** Width will match the original asset width */
      ORIGINAL = "ORIGINAL",
      /** coast-to-coast display */
      FULL_WIDTH = "FULL_WIDTH"
  }
  interface PluginContainerDataWidth extends PluginContainerDataWidthDataOneOf {
      /**
       * One of the following predefined width options:
       * `CONTENT`: The width of the container matches the content width.
       * `SMALL`: Small width.
       * `ORIGINAL`: The width of the container matches the original asset width.
       * `FULL_WIDTH`: Full width.
       */
      size?: WidthType;
      /** A custom width value in pixels. */
      custom?: string | null;
  }
  /** @oneof */
  interface PluginContainerDataWidthDataOneOf {
      /**
       * One of the following predefined width options:
       * `CONTENT`: The width of the container matches the content width.
       * `SMALL`: Small width.
       * `ORIGINAL`: The width of the container matches the original asset width.
       * `FULL_WIDTH`: Full width.
       */
      size?: WidthType;
      /** A custom width value in pixels. */
      custom?: string | null;
  }
  enum PluginContainerDataAlignment {
      /** Center Alignment */
      CENTER = "CENTER",
      /** Left Alignment */
      LEFT = "LEFT",
      /** Right Alignment */
      RIGHT = "RIGHT"
  }
  interface Spoiler {
      /** Sets whether the spoiler cover is enabled for this node. */
      enabled?: boolean | null;
      /** The description displayed on top of the spoiler cover. */
      description?: string | null;
      /** The text for the button used to remove the spoiler cover. */
      buttonText?: string | null;
  }
  interface Height {
      /** A custom height value in pixels. */
      custom?: string | null;
  }
  enum Type {
      /** Regular link button */
      LINK = "LINK",
      /** Triggers custom action that is defined in plugin configuration by the consumer */
      ACTION = "ACTION"
  }
  interface Styles {
      /** Border attributes. */
      border?: Border;
      /** Color attributes. */
      colors?: Colors;
  }
  interface Link extends LinkDataOneOf {
      /** The absolute URL for the linked document. */
      url?: string;
      /** The target node's ID. Used for linking to another node in this object. */
      anchor?: string;
      /**
       * he HTML `target` attribute value for the link. This property defines where the linked document opens as follows:
       * `SELF` - Default. Opens the linked document in the same frame as the link.
       * `BLANK` - Opens the linked document in a new browser tab or window.
       * `PARENT` - Opens the linked document in the link's parent frame.
       * `TOP` - Opens the linked document in the full body of the link's browser tab or window.
       */
      target?: Target;
      /** The HTML `rel` attribute value for the link. This object specifies the relationship between the current document and the linked document. */
      rel?: Rel;
      /** A serialized object used for a custom or external link panel. */
      customData?: string | null;
  }
  /** @oneof */
  interface LinkDataOneOf {
      /** The absolute URL for the linked document. */
      url?: string;
      /** The target node's ID. Used for linking to another node in this object. */
      anchor?: string;
  }
  enum Target {
      /** Opens the linked document in the same frame as it was clicked (this is default) */
      SELF = "SELF",
      /** Opens the linked document in a new window or tab */
      BLANK = "BLANK",
      /** Opens the linked document in the parent frame */
      PARENT = "PARENT",
      /** Opens the linked document in the full body of the window */
      TOP = "TOP"
  }
  interface Rel {
      /** Indicates to search engine crawlers not to follow the link. */
      nofollow?: boolean | null;
      /** Indicates to search engine crawlers that the link is a paid placement such as sponsored content or an advertisement. */
      sponsored?: boolean | null;
      /** Indicates that this link is user-generated content and isn't necessarily trusted or endorsed by the page’s author. For example, a link in a fourm post. */
      ugc?: boolean | null;
      /** Indicates that this link protect referral information from being passed to the target website. */
      noreferrer?: boolean | null;
  }
  interface CodeBlockData {
      /** Styling for the code block's text. */
      textStyle?: TextStyle;
  }
  interface TextStyle {
      /** Text alignment. Defaults to `AUTO`. */
      textAlignment?: TextAlignment;
      /** A CSS `line-height` value for the text as a unitless ratio. */
      lineHeight?: string | null;
  }
  enum TextAlignment {
      /** browser default, eqivalent to `initial` */
      AUTO = "AUTO",
      /** Left align */
      LEFT = "LEFT",
      /** Right align */
      RIGHT = "RIGHT",
      /** Center align */
      CENTER = "CENTER",
      /** Text is spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. */
      JUSTIFY = "JUSTIFY"
  }
  interface DividerData {
      /** Styling for the divider's container. */
      containerData?: PluginContainerData;
      /** Divider line style. */
      lineStyle?: LineStyle;
      /** Divider width. */
      width?: Width;
      /** Divider alignment. */
      alignment?: Alignment;
  }
  enum LineStyle {
      /** Single Line */
      SINGLE = "SINGLE",
      /** Double Line */
      DOUBLE = "DOUBLE",
      /** Dashed Line */
      DASHED = "DASHED",
      /** Dotted Line */
      DOTTED = "DOTTED"
  }
  enum Width {
      /** Large line */
      LARGE = "LARGE",
      /** Medium line */
      MEDIUM = "MEDIUM",
      /** Small line */
      SMALL = "SMALL"
  }
  enum Alignment {
      /** Center alignment */
      CENTER = "CENTER",
      /** Left alignment */
      LEFT = "LEFT",
      /** Right alignment */
      RIGHT = "RIGHT"
  }
  interface FileData {
      /** Styling for the file's container. */
      containerData?: PluginContainerData;
      /** The source for the file's data. */
      src?: FileSource;
      /** File name. */
      name?: string | null;
      /** File type. */
      type?: string | null;
      /** File size in KB. */
      size?: number | null;
      /** Settings for PDF files. */
      pdfSettings?: PDFSettings;
      /** File MIME type. */
      mimeType?: string | null;
      /** File path. */
      path?: string | null;
  }
  enum ViewMode {
      /** No PDF view */
      NONE = "NONE",
      /** Full PDF view */
      FULL = "FULL",
      /** Mini PDF view */
      MINI = "MINI"
  }
  interface FileSource extends FileSourceDataOneOf {
      /** The absolute URL for the file's source. */
      url?: string | null;
      /** Custom ID. Use `id` instead. */
      custom?: string | null;
      /** An ID that's resolved to a URL by a resolver function. */
      _id?: string | null;
      /** Indicates whether the file's source is private. */
      private?: boolean | null;
  }
  /** @oneof */
  interface FileSourceDataOneOf {
      /** The absolute URL for the file's source. */
      url?: string | null;
      /** Custom ID. Use `id` instead. */
      custom?: string | null;
      /** An ID that's resolved to a URL by a resolver function. */
      _id?: string | null;
  }
  interface PDFSettings {
      /**
       * PDF view mode. One of the following:
       * `NONE` : The PDF isn't displayed.
       * `FULL` : A full page view of the PDF is displayed.
       * `MINI` : A mini view of the PDF is displayed.
       */
      viewMode?: ViewMode;
      /** Sets whether the PDF download button is disabled. */
      disableDownload?: boolean | null;
      /** Sets whether the PDF print button is disabled. */
      disablePrint?: boolean | null;
  }
  interface GalleryData {
      /** Styling for the gallery's container. */
      containerData?: PluginContainerData;
      /** The items in the gallery. */
      items?: Item[];
      /** Options for defining the gallery's appearance. */
      options?: GalleryOptions;
      /** Sets whether the gallery's expand button is disabled. */
      disableExpand?: boolean | null;
      /** Sets whether the gallery's download button is disabled. */
      disableDownload?: boolean | null;
  }
  interface V1Media {
      /** The source for the media's data. */
      src?: FileSource;
      /** Media width in pixels. */
      width?: number | null;
      /** Media height in pixels. */
      height?: number | null;
      /** Media duration in seconds. Only relevant for audio and video files. */
      duration?: number | null;
  }
  interface Image {
      /** Image file details. */
      media?: V1Media;
      /** Link details for images that are links. */
      link?: Link;
  }
  interface Video {
      /** Video file details. */
      media?: V1Media;
      /** Video thumbnail file details. */
      thumbnail?: V1Media;
  }
  interface Item extends ItemDataOneOf {
      /** An image item. */
      image?: Image;
      /** A video item. */
      video?: Video;
      /** Item title. */
      title?: string | null;
      /** Item's alternative text. */
      altText?: string | null;
  }
  /** @oneof */
  interface ItemDataOneOf {
      /** An image item. */
      image?: Image;
      /** A video item. */
      video?: Video;
  }
  interface GalleryOptions {
      /** Gallery layout. */
      layout?: Layout;
      /** Styling for gallery items. */
      item?: ItemStyle;
      /** Styling for gallery thumbnail images. */
      thumbnails?: Thumbnails;
  }
  enum LayoutType {
      /** Collage type */
      COLLAGE = "COLLAGE",
      /** Masonry type */
      MASONRY = "MASONRY",
      /** Grid type */
      GRID = "GRID",
      /** Thumbnail type */
      THUMBNAIL = "THUMBNAIL",
      /** Slider type */
      SLIDER = "SLIDER",
      /** Slideshow type */
      SLIDESHOW = "SLIDESHOW",
      /** Panorama type */
      PANORAMA = "PANORAMA",
      /** Column type */
      COLUMN = "COLUMN",
      /** Magic type */
      MAGIC = "MAGIC",
      /** Fullsize images type */
      FULLSIZE = "FULLSIZE"
  }
  enum Orientation {
      /** Rows Orientation */
      ROWS = "ROWS",
      /** Columns Orientation */
      COLUMNS = "COLUMNS"
  }
  enum Crop {
      /** Crop to fill */
      FILL = "FILL",
      /** Crop to fit */
      FIT = "FIT"
  }
  enum ThumbnailsAlignment {
      /** Top alignment */
      TOP = "TOP",
      /** Right alignment */
      RIGHT = "RIGHT",
      /** Bottom alignment */
      BOTTOM = "BOTTOM",
      /** Left alignment */
      LEFT = "LEFT",
      /** No thumbnail */
      NONE = "NONE"
  }
  interface Layout {
      /** Gallery layout type. */
      type?: LayoutType;
      /** Sets whether horizontal scroll is enabled. */
      horizontalScroll?: boolean | null;
      /** Gallery orientation. */
      orientation?: Orientation;
      /** The number of columns to display on full size screens. */
      numberOfColumns?: number | null;
      /** The number of columns to display on mobile screens. */
      mobileNumberOfColumns?: number | null;
  }
  interface ItemStyle {
      /** Desirable dimension for each item in pixels (behvaior changes according to gallery type) */
      targetSize?: number | null;
      /** Item ratio */
      ratio?: number | null;
      /** Sets how item images are cropped. */
      crop?: Crop;
      /** The spacing between items in pixels. */
      spacing?: number | null;
  }
  interface Thumbnails {
      /** Thumbnail alignment. */
      placement?: ThumbnailsAlignment;
      /** Spacing between thumbnails in pixels. */
      spacing?: number | null;
  }
  interface GIFData {
      /** Styling for the GIF's container. */
      containerData?: PluginContainerData;
      /** The source of the full size GIF. */
      original?: GIF;
      /** The source of the downsized GIF. */
      downsized?: GIF;
      /** Height in pixels. */
      height?: number;
      /** Width in pixels. */
      width?: number;
  }
  interface GIF {
      /** GIF format URL. */
      gif?: string | null;
      /** MP4 format URL. */
      mp4?: string | null;
      /** Thumbnail URL. */
      still?: string | null;
  }
  interface HeadingData {
      /** Heading level from 1-6. */
      level?: number;
      /** Styling for the heading text. */
      textStyle?: TextStyle;
      /** Indentation level from 1-6. */
      indentation?: number | null;
  }
  interface HTMLData extends HTMLDataDataOneOf {
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
      /** Styling for the HTML node's container. */
      containerData?: PluginContainerData;
      /** The type of HTML code. */
      source?: Source;
  }
  /** @oneof */
  interface HTMLDataDataOneOf {
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
  }
  enum Source {
      HTML = "HTML",
      ADSENSE = "ADSENSE"
  }
  interface ImageData {
      /** Styling for the image's container. */
      containerData?: PluginContainerData;
      /** Image file details. */
      image?: V1Media;
      /** Link details for images that are links. */
      link?: Link;
      /** Sets whether the image expands to full screen when clicked. */
      disableExpand?: boolean | null;
      /** Image's alternative text. */
      altText?: string | null;
      /** Image caption. */
      caption?: string | null;
      /** Sets whether the image's download button is disabled. */
      disableDownload?: boolean | null;
  }
  interface LinkPreviewData {
      /** Styling for the link preview's container. */
      containerData?: PluginContainerData;
      /** Link details. */
      link?: Link;
      /** Preview title. */
      title?: string | null;
      /** Preview thumbnail URL. */
      thumbnailUrl?: string | null;
      /** Preview description. */
      description?: string | null;
      /** The preview content as HTML. */
      html?: string | null;
  }
  interface MapData {
      /** Styling for the map's container. */
      containerData?: PluginContainerData;
      /** Map settings. */
      mapSettings?: MapSettings;
  }
  interface MapSettings {
      /** The address to display on the map. */
      address?: string | null;
      /** Sets whether the map is draggable. */
      draggable?: boolean | null;
      /** Sets whether the location marker is visible. */
      marker?: boolean | null;
      /** Sets whether street view control is enabled. */
      streetViewControl?: boolean | null;
      /** Sets whether zoom control is enabled. */
      zoomControl?: boolean | null;
      /** Location latitude. */
      lat?: number | null;
      /** Location longitude. */
      lng?: number | null;
      /** Location name. */
      locationName?: string | null;
      /** Sets whether view mode control is enabled. */
      viewModeControl?: boolean | null;
      /** Initial zoom value. */
      initialZoom?: number | null;
      /** Map type. `HYBRID` is a combination of the `ROADMAP` and `SATELLITE` map types. */
      mapType?: MapType;
  }
  enum MapType {
      /** Roadmap map type */
      ROADMAP = "ROADMAP",
      /** Satellite map type */
      SATELITE = "SATELITE",
      /** Hybrid map type */
      HYBRID = "HYBRID",
      /** Terrain map type */
      TERRAIN = "TERRAIN"
  }
  interface ParagraphData {
      /** Styling for the paragraph text. */
      textStyle?: TextStyle;
      /** Indentation level from 1-6. */
      indentation?: number | null;
  }
  interface PollData {
      /** Styling for the poll's container. */
      containerData?: PluginContainerData;
      /** Poll data. */
      poll?: Poll;
      /** Layout settings for the poll and voting options. */
      layout?: PollDataLayout;
      /** Styling for the poll and voting options. */
      design?: Design;
  }
  enum ViewRole {
      /** Only Poll creator can view the results */
      CREATOR = "CREATOR",
      /** Anyone who voted can see the results */
      VOTERS = "VOTERS",
      /** Anyone can see the results, even if one didn't vote */
      EVERYONE = "EVERYONE"
  }
  enum VoteRole {
      /** Logged in member */
      SITE_MEMBERS = "SITE_MEMBERS",
      /** Anyone */
      ALL = "ALL"
  }
  interface Permissions {
      /** Sets who can view the poll results. */
      view?: ViewRole;
      /** Sets who can vote. */
      vote?: VoteRole;
      /** Sets whether one voter can vote multiple times. */
      allowMultipleVotes?: boolean | null;
  }
  interface Option {
      /** Option ID. */
      _id?: string | null;
      /** Option title. */
      title?: string | null;
      /** The image displayed with the option. */
      image?: V1Media;
  }
  interface PollSettings {
      /** Permissions settings for voting. */
      permissions?: Permissions;
      /** Sets whether voters are displayed in the vote results. */
      showVoters?: boolean | null;
      /** Sets whether the vote count is displayed. */
      showVotesCount?: boolean | null;
  }
  enum PollLayoutType {
      /** List */
      LIST = "LIST",
      /** Grid */
      GRID = "GRID"
  }
  enum PollLayoutDirection {
      /** Left-to-right */
      LTR = "LTR",
      /** Right-to-left */
      RTL = "RTL"
  }
  interface PollLayout {
      /** The layout for displaying the voting options. */
      type?: PollLayoutType;
      /** The direction of the text displayed in the voting options. Text can be displayed either right-to-left or left-to-right. */
      direction?: PollLayoutDirection;
      /** Sets whether to display the main poll image. */
      enableImage?: boolean | null;
  }
  interface OptionLayout {
      /** Sets whether to display option images. */
      enableImage?: boolean | null;
  }
  enum BackgroundType {
      /** Color background type */
      COLOR = "COLOR",
      /** Image background type */
      IMAGE = "IMAGE",
      /** Gradiant background type */
      GRADIENT = "GRADIENT"
  }
  interface Gradient {
      /** The gradient angle in degrees. */
      angle?: number | null;
      /** The start color as a hexademical value. */
      startColor?: string | null;
      /** The end color as a hexademical value. */
      lastColor?: string | null;
  }
  interface Background extends BackgroundBackgroundOneOf {
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: V1Media;
      /** Details for a gradient background. */
      gradient?: Gradient;
      /** Background type. For each option, include the relevant details. */
      type?: BackgroundType;
  }
  /** @oneof */
  interface BackgroundBackgroundOneOf {
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: V1Media;
      /** Details for a gradient background. */
      gradient?: Gradient;
  }
  interface PollDesign {
      /** Background styling. */
      background?: Background;
      /** Border radius in pixels. */
      borderRadius?: number | null;
  }
  interface OptionDesign {
      /** Border radius in pixels. */
      borderRadius?: number | null;
  }
  interface Poll {
      /** Poll ID. */
      _id?: string | null;
      /** Poll title. */
      title?: string | null;
      /** Poll creator ID. */
      creatorId?: string | null;
      /** Main poll image. */
      image?: V1Media;
      /** Voting options. */
      options?: Option[];
      /** The poll's permissions and display settings. */
      settings?: PollSettings;
  }
  interface PollDataLayout {
      /** Poll layout settings. */
      poll?: PollLayout;
      /** Voting otpions layout settings. */
      options?: OptionLayout;
  }
  interface Design {
      /** Styling for the poll. */
      poll?: PollDesign;
      /** Styling for voting options. */
      options?: OptionDesign;
  }
  interface TextData {
      /** The text to apply decorations to. */
      text?: string;
      /** The decorations to apply. */
      decorations?: Decoration[];
  }
  /** Adds appearence changes to text */
  interface Decoration extends DecorationDataOneOf {
      /** Data for an anchor link decoration. */
      anchorData?: AnchorData;
      /** Data for a color decoration. */
      colorData?: ColorData;
      /** Data for an external link decoration. */
      linkData?: LinkData;
      /** Data for a mention decoration. */
      mentionData?: MentionData;
      /** Data for a font size decoration. */
      fontSizeData?: FontSizeData;
      /** Font weight for a bold decoration. */
      fontWeightValue?: number | null;
      /** Data for an italic decoration. */
      italicData?: boolean | null;
      /** Data for an underline decoration. */
      underlineData?: boolean | null;
      /** The type of decoration to apply. */
      type?: DecorationType;
  }
  /** @oneof */
  interface DecorationDataOneOf {
      /** Data for an anchor link decoration. */
      anchorData?: AnchorData;
      /** Data for a color decoration. */
      colorData?: ColorData;
      /** Data for an external link decoration. */
      linkData?: LinkData;
      /** Data for a mention decoration. */
      mentionData?: MentionData;
      /** Data for a font size decoration. */
      fontSizeData?: FontSizeData;
      /** Font weight for a bold decoration. */
      fontWeightValue?: number | null;
      /** Data for an italic decoration. */
      italicData?: boolean | null;
      /** Data for an underline decoration. */
      underlineData?: boolean | null;
  }
  enum DecorationType {
      BOLD = "BOLD",
      ITALIC = "ITALIC",
      UNDERLINE = "UNDERLINE",
      SPOILER = "SPOILER",
      ANCHOR = "ANCHOR",
      MENTION = "MENTION",
      LINK = "LINK",
      COLOR = "COLOR",
      FONT_SIZE = "FONT_SIZE",
      EXTERNAL = "EXTERNAL"
  }
  interface AnchorData {
      /** The target node's ID. */
      anchor?: string;
  }
  interface ColorData {
      /** The text's background color as a hexadecimal value. */
      background?: string | null;
      /** The text's foreground color as a hexadecimal value. */
      foreground?: string | null;
  }
  interface LinkData {
      /** Link details. */
      link?: Link;
  }
  interface MentionData {
      /** The mentioned user's name. */
      name?: string;
      /** The version of the user's name that appears after the `@` character in the mention. */
      slug?: string;
      /** Mentioned user's ID. */
      _id?: string | null;
  }
  interface FontSizeData {
      /** The units used for the font size. */
      unit?: FontType;
      /** Font size value. */
      value?: number | null;
  }
  enum FontType {
      PX = "PX",
      EM = "EM"
  }
  interface AppEmbedData extends AppEmbedDataAppDataOneOf {
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData;
      /** Data for embedded Wix Events content. */
      eventData?: EventData;
      /** The type of Wix App content being embedded. */
      type?: AppType;
      /** The ID of the embedded content. */
      itemId?: string | null;
      /** The name of the embedded content. */
      name?: string | null;
      /** Deprecated: Use `image` instead. */
      imageSrc?: string | null;
      /** The URL for the embedded content. */
      url?: string | null;
      /** An image for the embedded content. */
      image?: V1Media;
  }
  /** @oneof */
  interface AppEmbedDataAppDataOneOf {
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData;
      /** Data for embedded Wix Events content. */
      eventData?: EventData;
  }
  enum AppType {
      PRODUCT = "PRODUCT",
      EVENT = "EVENT",
      BOOKING = "BOOKING"
  }
  interface BookingData {
      /** Booking duration in minutes. */
      durations?: string | null;
  }
  interface EventData {
      /** Event schedule. */
      scheduling?: string | null;
      /** Event location. */
      location?: string | null;
  }
  interface VideoData {
      /** Styling for the video's container. */
      containerData?: PluginContainerData;
      /** Video details. */
      video?: V1Media;
      /** Video thumbnail details. */
      thumbnail?: V1Media;
      /** Sets whether the video's download button is disabled. */
      disableDownload?: boolean | null;
      /** Video title. */
      title?: string | null;
      /** Video options. */
      options?: PlaybackOptions;
  }
  interface PlaybackOptions {
      /** Sets whether the media will automatically start playing. */
      autoPlay?: boolean | null;
      /** Sets whether media's will be looped. */
      playInLoop?: boolean | null;
      /** Sets whether media's controls will be shown. */
      showControls?: boolean | null;
  }
  interface EmbedData {
      /** Styling for the oEmbed node's container. */
      containerData?: PluginContainerData;
      /** An [oEmbed](https://www.oembed.com) object. */
      oembed?: Oembed;
      /** Origin asset source. */
      src?: string | null;
  }
  interface Oembed {
      /** The resource type. */
      type?: string | null;
      /** The width of the resource specified in the `url` property in pixels. */
      width?: number | null;
      /** The height of the resource specified in the `url` property in pixels. */
      height?: number | null;
      /** Resource title. */
      title?: string | null;
      /** The source URL for the resource. */
      url?: string | null;
      /** HTML for embedding a video player. The HTML should have no padding or margins. */
      html?: string | null;
      /** The name of the author or owner of the resource. */
      authorName?: string | null;
      /** The URL for the author or owner of the resource. */
      authorUrl?: string | null;
      /** The name of the resource provider. */
      providerName?: string | null;
      /** The URL for the resource provider. */
      providerUrl?: string | null;
      /** The URL for a thumbnail image for the resource. If this property is defined, `thumbnailWidth` and `thumbnailHeight` must also be defined. */
      thumbnailUrl?: string | null;
      /** The width of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailHeight` must also be defined. */
      thumbnailWidth?: string | null;
      /** The height of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailWidth`must also be defined. */
      thumbnailHeight?: string | null;
      /** The URL for an embedded viedo. */
      videoUrl?: string | null;
      /** The oEmbed version number.  This value must be `1.0`. */
      version?: string | null;
  }
  interface CollapsibleListData {
      /** Styling for the collapsible list's container. */
      containerData?: PluginContainerData;
      /** If `true`, only one item can be expanded at a time. */
      expandOnlyOne?: boolean | null;
      /** Sets which items are expanded when the page loads. */
      initialExpandedItems?: InitialExpandedItems;
      /** The direction of the text in the list. Either left-to-right or right-to-left. */
      direction?: Direction;
      /** If `true`, The collapsible item will appear in search results as an FAQ. */
      isQapageData?: boolean | null;
  }
  enum InitialExpandedItems {
      /** First item will be expended initally */
      FIRST = "FIRST",
      /** All items will expended initally */
      ALL = "ALL",
      /** All items collapsed initally */
      NONE = "NONE"
  }
  enum Direction {
      /** Left-to-right */
      LTR = "LTR",
      /** Right-to-left */
      RTL = "RTL"
  }
  interface TableData {
      /** Styling for the table's container. */
      containerData?: PluginContainerData;
      /** The table's dimensions. */
      dimensions?: Dimensions;
      /** Deprecated: Use `rowHeader` and `columnHeader` instead. */
      header?: boolean | null;
      /** Sets whether the table's first row is a header. */
      rowHeader?: boolean | null;
      /** Sets whether the table's first column is a header. */
      columnHeader?: boolean | null;
  }
  interface Dimensions {
      /** An array representing relative width of each column in relation to the other columns. */
      colsWidthRatio?: number[];
      /** An array representing the height of each row in pixels. */
      rowsHeight?: number[];
      /** An array representing the minimum width of each column in pixels. */
      colsMinWidth?: number[];
  }
  interface TableCellData {
      /** Styling for the cell's background color and text alignment. */
      cellStyle?: CellStyle;
      /** The cell's border colors. */
      borderColors?: BorderColors;
  }
  enum VerticalAlignment {
      /** Top alignment */
      TOP = "TOP",
      /** Middle alignment */
      MIDDLE = "MIDDLE",
      /** Bottom alignment */
      BOTTOM = "BOTTOM"
  }
  interface CellStyle {
      /** Vertical alignment for the cell's text. */
      verticalAlignment?: VerticalAlignment;
      /** Cell background color as a hexadecimal value. */
      backgroundColor?: string | null;
  }
  interface BorderColors {
      /** Left border color as a hexadecimal value. */
      left?: string | null;
      /** Right border color as a hexadecimal value. */
      right?: string | null;
      /** Top border color as a hexadecimal value. */
      top?: string | null;
      /** Bottom border color as a hexadecimal value. */
      bottom?: string | null;
  }
  /**
   * `NullValue` is a singleton enumeration to represent the null value for the
   * `Value` type union.
   *
   * The JSON representation for `NullValue` is JSON `null`.
   */
  enum NullValue {
      /** Null value. */
      NULL_VALUE = "NULL_VALUE"
  }
  /**
   * `ListValue` is a wrapper around a repeated field of values.
   *
   * The JSON representation for `ListValue` is JSON array.
   */
  interface ListValue {
      /** Repeated field of dynamically typed values. */
      values?: any[];
  }
  interface AudioData {
      /** Styling for the audio node's container. */
      containerData?: PluginContainerData;
      /** Audio file details. */
      audio?: V1Media;
      /** Sets whether the audio node's download button is disabled. */
      disableDownload?: boolean | null;
      /** Cover image. */
      coverImage?: V1Media;
      /** Track name. */
      name?: string | null;
      /** Author name. */
      authorName?: string | null;
      /** An HTML version of the audio node. */
      html?: string | null;
  }
  interface OrderedListData {
      /** Indentation level. */
      indentation?: number;
  }
  interface BulletedListData {
      /** Indentation level. */
      indentation?: number;
  }
  interface BlockquoteData {
      /** Indentation level. */
      indentation?: number;
  }
  interface Metadata {
      /** Schema version. */
      version?: number;
      /**
       * When the object was created.
       * @readonly
       */
      createdTimestamp?: Date;
      /** When the object was most recently updated. */
      updatedTimestamp?: Date;
      /** Object ID. */
      _id?: string | null;
  }
  interface DocumentStyle {
      /** Styling for H1 nodes. */
      headerOne?: TextNodeStyle;
      /** Styling for H2 nodes. */
      headerTwo?: TextNodeStyle;
      /** Styling for H3 nodes. */
      headerThree?: TextNodeStyle;
      /** Styling for H4 nodes. */
      headerFour?: TextNodeStyle;
      /** Styling for H5 nodes. */
      headerFive?: TextNodeStyle;
      /** Styling for H6 nodes. */
      headerSix?: TextNodeStyle;
      /** Styling for paragraph nodes. */
      paragraph?: TextNodeStyle;
      /** Styling for block quote nodes. */
      blockquote?: TextNodeStyle;
      /** Styling for code block nodes. */
      codeBlock?: TextNodeStyle;
  }
  interface TextNodeStyle {
      /** The decorations to apply to the node. */
      decorations?: Decoration[];
      /** Padding and background color for the node. */
      nodeStyle?: NodeStyle;
      /** Line height for text in the node. */
      lineHeight?: string | null;
  }
  interface Media {
      /**
       * Primary media (image, video etc) associated with this product.
       * @readonly
       */
      main?: ProductMedia;
      /** Media (images, videos etc) associated with this product. */
      items?: ProductMedia[];
  }
  interface ProductMedia extends ProductMediaSetByOneOf, ProductMediaMediaOneOf {
      /** Image ID from Media Manager. Use when you already uploaded media in Media Manager. */
      _id?: string;
      /** URL of image to be uploaded. Upload by url is async process so expect product to be created without any media. If upload successful then media will appear in product later. */
      url?: string;
      /**
       * Product image.
       * @readonly
       */
      image?: string;
      /**
       * Product video.
       * @readonly
       */
      video?: string;
      /** Image alt text. Relevant only for images. */
      altText?: string | null;
      /**
       * ID used to upload media to Wix Media Manager.
       * Since media upload by url is asynchronous `upload_id` helps to link media item provided in request with media that we eventually have in product after upload complete.
       * When media item set by id `upload_id` will be the same. When media set by url `upload_id` will be auto-generated.
       * @readonly
       */
      uploadId?: string;
  }
  /** @oneof */
  interface ProductMediaSetByOneOf {
      /** Image ID from Media Manager. Use when you already uploaded media in Media Manager. */
      _id?: string;
      /** URL of image to be uploaded. Upload by url is async process so expect product to be created without any media. If upload successful then media will appear in product later. */
      url?: string;
  }
  /** @oneof */
  interface ProductMediaMediaOneOf {
      /**
       * Product image.
       * @readonly
       */
      image?: string;
      /**
       * Product video.
       * @readonly
       */
      video?: string;
  }
  interface VideoResolution {
      /** Video URL. */
      url?: string;
      /** Video height. */
      height?: number;
      /** Video width. */
      width?: number;
      /**
       * Deprecated. Use the `posters` property in the parent entity instead.
       * @internal
       */
      poster?: string;
      /**
       * Video format
       * Possible values: ['144p.mp4' '144p.webm' '240p.mp4' '240p.webm' '360p.mp4' '360p.webm' '480p.mp4' '480p.webm'
       * '720p.mp4' '720p.webm' '1080p.mp4' '1080p.webm', 'hls' ]
       */
      format?: string;
      /**
       * Deprecated. Use the `urlExpirationDate` property in the parent entity instead.
       * @internal
       */
      urlExpirationDate?: Date;
      /**
       * Deprecated. Use the `sizeInBytes` property in the parent entity instead. Size cannot be provided per resolution.
       * @internal
       */
      sizeInBytes?: string | null;
      /**
       * Video quality. For example: 480p, 720p.
       * @internal
       */
      quality?: string | null;
      /**
       * Video filename.
       * @internal
       */
      filename?: string | null;
      /**
       * Video duration in seconds.
       * @internal
       * @readonly
       */
      durationInSeconds?: number | null;
      /**
       * Video duration in milliseconds.
       * @internal
       * @readonly
       */
      durationInMilliseconds?: number | null;
      /**
       * When true, this is a protected asset, and calling the URL will return a 403 error.
       * In order to access private assets, make a request to:
       * `GenerateFileDownloadUrl` with the WixMedia id and specify the asset_key in the request
       * @internal
       * @readonly
       */
      private?: boolean | null;
      /**
       * Key to identify the video resolution's relationship to the original media in WixMedia.
       * Can be used to request a download for the specific video resolution.
       * For example: 480p.mp4, 720p.mp4, 1080p.mp4, trailer-720p.mp4, clip-720p.mp4
       * @internal
       * @readonly
       */
      assetKey?: string | null;
  }
  /**
   * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
   * The search engines use this information for ranking purposes, or to display snippets in the search results.
   * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
   */
  interface SeoSchema {
      /** SEO tag information. */
      tags?: Tag[];
      /** SEO general settings. */
      settings?: Settings;
  }
  interface Keyword {
      /** Keyword value. */
      term?: string;
      /** Whether the keyword is the main focus keyword. */
      isMain?: boolean;
  }
  interface Tag {
      /**
       * SEO tag type.
       *
       *
       * Supported values: `title`, `meta`, `script`, `link`.
       */
      type?: string;
      /**
       * A `{'key':'value'}` pair object where each SEO tag property (`'name'`, `'content'`, `'rel'`, `'href'`) contains a value.
       * For example: `{'name': 'description', 'content': 'the description itself'}`.
       */
      props?: Record<string, any> | null;
      /** SEO tag meta data. For example, `{height: 300, width: 240}`. */
      meta?: Record<string, any> | null;
      /** SEO tag inner content. For example, `<title> inner content </title>`. */
      children?: string;
      /** Whether the tag is a custom tag. */
      custom?: boolean;
      /** Whether the tag is disabled. */
      disabled?: boolean;
  }
  interface Settings {
      /**
       * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
       *
       *
       * Default: `false` (Auto Redirect is enabled.)
       */
      preventAutoRedirect?: boolean;
      /** User-selected keyword terms for a specific page. */
      keywords?: Keyword[];
  }
  interface ConnectedOption extends ConnectedOptionOptionSettingsOneOf {
      /** Swatch choices or Text choices */
      choicesSettings?: ChoicesSettings;
      /** The id of the option */
      _id?: string | null;
      /** Option title. */
      name?: string | null;
      /** Option settings type */
      optionRenderType?: ProductOptionRenderType;
      /**
       * Option key based the option name. Used internally by Stores web client in CatalogSPI endpoints for checkout flow when option name cannot be used because it can be translated.
       * @internal
       * @readonly
       */
      key?: string;
  }
  /** @oneof */
  interface ConnectedOptionOptionSettingsOneOf {
      /** Swatch choices or Text choices */
      choicesSettings?: ChoicesSettings;
  }
  enum ProductOptionRenderType {
      UNKNOWN_OPTION_RENDER_TYPE = "UNKNOWN_OPTION_RENDER_TYPE",
      TEXT_CHOICES = "TEXT_CHOICES",
      SWATCH_CHOICES = "SWATCH_CHOICES"
  }
  interface ChoicesSettings {
      /**
       * A list of choices available for this Option.
       * To update choices for existing Option, use SetProductOptionChoices, AddProductOptionChoices, DeleteProductOptionChoices and BulkAddProductOptionChoices endpoints
       */
      choices?: ConnectedOptionChoice[];
  }
  interface ConnectedOptionChoice extends ConnectedOptionChoiceValueOneOf {
      /** One color - HEX (#RRGGBB) color code for display. */
      colorCode?: string;
      /**
       * Multiple colors  - HEX (#RRGGBB) color code
       * @internal
       */
      colorCodes?: MultipleColors;
      /**
       * Image
       * @internal
       */
      image?: string;
      /** The id of the choice. */
      choiceId?: string | null;
      /**
       * Product media overrides. When not empty only these images will be shown when such choices selected by customer. Otherwise all images of product.
       * When several choices from different options selected only media filter present in `media_overrides` of ALL choices will be shown.
       * For example if Color:red has images 1,2,3 and Material:Silk has images 2,3,5 then only images 2,3 will be shown when both of them selected.
       */
      linkedMedia?: ProductMedia[];
      /** The type of this choice. */
      choiceType?: ChoiceType;
      /**
       * A key based the choice name. Used internally by Stores web client in CatalogSPI endpoints for checkout flow when name cannot be used because it can be translated.
       * @internal
       * @readonly
       */
      key?: string;
      /** Choice name. */
      name?: string | null;
  }
  /** @oneof */
  interface ConnectedOptionChoiceValueOneOf {
      /** One color - HEX (#RRGGBB) color code for display. */
      colorCode?: string;
      /**
       * Multiple colors  - HEX (#RRGGBB) color code
       * @internal
       */
      colorCodes?: MultipleColors;
      /**
       * Image
       * @internal
       */
      image?: string;
  }
  enum ChoiceType {
      UNKNOWN_CHOICE_TYPE = "UNKNOWN_CHOICE_TYPE",
      CHOICE_TEXT = "CHOICE_TEXT",
      ONE_COLOR = "ONE_COLOR",
      MULTIPLE_COLORS = "MULTIPLE_COLORS",
      IMAGE = "IMAGE"
  }
  interface MultipleColors {
      /** A list of color codes. */
      colorCodes?: string[];
  }
  interface ConnectedModifier extends ConnectedModifierModifierSettingsOneOf {
      /** Free Text modifier settings */
      freeTextSettings?: FreeTextSettings;
      /** SwatchChoices modifier settings */
      choicesSettings?: ModifierChoicesSettings;
      /** The id of the option */
      _id?: string | null;
      /** Modifier title. */
      name?: string | null;
      /** Option settings type */
      modifierRenderType?: ModifierRenderType;
      /**
       * Whether buyer input is required for this modifier.
       * For example, T-shirt cannot be purchased without selecting specific color so for such modifier `mandatory` will be true.
       * From another side if buyer doesn't provide free text input T-shirt will just not have text on it but still can be purchased so for such modifier `mandatory` will be false.
       */
      mandatory?: boolean;
      /**
       * Modifier key based on name. Used internally by Stores web client in CatalogSPI endpoints for checkout flow when name cannot be used because it can be translated.
       * @internal
       * @readonly
       */
      key?: string;
  }
  /** @oneof */
  interface ConnectedModifierModifierSettingsOneOf {
      /** Free Text modifier settings */
      freeTextSettings?: FreeTextSettings;
      /** SwatchChoices modifier settings */
      choicesSettings?: ModifierChoicesSettings;
  }
  enum ModifierRenderType {
      UNKNOWN_MODIFIER_RENDER_TYPE = "UNKNOWN_MODIFIER_RENDER_TYPE",
      FREE_TEXT = "FREE_TEXT",
      TEXT_CHOICES = "TEXT_CHOICES",
      SWATCH_CHOICES = "SWATCH_CHOICES"
  }
  interface FreeTextSettings {
      /** minimum text length */
      minCharCount?: number;
      /** maximum text length */
      maxCharCount?: number;
      /** Default amount to be added to product's price when Choice is assigned to a Modifier. Can be overridden when assigning to a Product. */
      defaultAddedPrice?: string | null;
      /** Title input by user for free text modifier */
      title?: string;
      /**
       * A read-only key auto-generated based on the title that will be used for CatalogSPI endpoints (GetCatalogItems), to support cart and checkout flows
       * @internal
       * @readonly
       */
      key?: string;
  }
  interface ModifierChoicesSettings {
      /**
       * A list of choices available for this Option.
       * To update choices for existing Option, use SetProductOptionChoices, AddProductOptionChoices, DeleteProductOptionChoices and BulkAddProductOptionChoices endpoints
       */
      choices?: ConnectedModifierChoice[];
  }
  interface ConnectedModifierChoice extends ConnectedModifierChoiceValueOneOf {
      /** One color - HEX (#RRGGBB) color code for display. */
      colorCode?: string;
      /**
       * Multiple colors  - HEX (#RRGGBB) color code
       * @internal
       */
      colorCodes?: MultipleColors;
      /**
       * Image
       * @internal
       */
      image?: string;
      /** The id of the choice. */
      choiceId?: string | null;
      /**
       * Product media overrides. When not empty only these images will be shown when such choices selected by customer. Otherwise all images of product.
       * When several choices from different options selected only media filter present in `media_overrides` of ALL choices will be shown.
       * For example if Color:red has images 1,2,3 and Material:Silk has images 2,3,5 then only images 2,3 will be shown when both of them selected.
       */
      linkedMedia?: ProductMedia[];
      /** The type of this choice. */
      choiceType?: ChoiceType;
      /**
       * A key based the choice name. Used internally by Stores web client in CatalogSPI endpoints for checkout flow when name cannot be used because it can be translated.
       * @readonly
       */
      key?: string;
      /** Choice name. */
      name?: string | null;
      /** Price added to product price for this Choice when Option is assigned to Product as Modifier. */
      addedPrice?: string | null;
  }
  /** @oneof */
  interface ConnectedModifierChoiceValueOneOf {
      /** One color - HEX (#RRGGBB) color code for display. */
      colorCode?: string;
      /**
       * Multiple colors  - HEX (#RRGGBB) color code
       * @internal
       */
      colorCodes?: MultipleColors;
      /**
       * Image
       * @internal
       */
      image?: string;
  }
  interface Brand {
      /** brand ID */
      _id?: string | null;
      /** brand name. Translatable. Materialized field view. */
      name?: string | null;
  }
  interface InfoSection {
      /** info section id */
      _id?: string | null;
      /**
       * Product info section unique name. For example "care_cotton"
       * > **Note:** This field is returned only when you pass `fields: "INFO_SECTION"` in the request.
       */
      uniqueName?: string | null;
      /**
       * Product info section title. Translatable. For example "Care instructions".
       * Pay attention that you can use same "Care instructions" name for different types of clothes with different descriptions but you still can easily differentiate them using different `unique_name`
       * > **Note:** This field is returned only when you pass `fields: "INFO_SECTION"` in the request.
       * @readonly
       */
      title?: string | null;
      /**
       * Product info section description. Translatable.
       * In order to use this field you have to integrate with "Ricos" on frontend side. To learn how to do it visit https://ricos.js.org/.
       * > **Note:** This field is returned only when you pass `fields: "INFO_SECTION"` in the request.
       * @readonly
       */
      description?: RichContent;
      /**
       * RichContent description converted to html or plain text depends on the description value.
       * > **Note:** This field is returned only when you pass `fields: "INFO_SECTION_PLAIN_DESCRIPTION"` in the request.
       */
      plainDescription?: string | null;
  }
  interface Ribbon$1 {
      /** ribbon ID */
      _id?: string | null;
      /** ribbon name. Translatable. */
      name?: string | null;
  }
  interface ProductCategory {
      /** Id of the category */
      _id?: string;
      /** Location of the product within the category (sorted lowest to highest) */
      index?: number | null;
  }
  interface PriceRange {
      /** Minimum value. */
      minValue?: FixedMonetaryAmount;
      /** Maximum value. */
      maxValue?: FixedMonetaryAmount;
  }
  interface FixedMonetaryAmount {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      amount?: string;
      /**
       * Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative.
       * For example, €10.00
       * > **Note:** This field is returned only when you pass `fields: "CURRENCY"` in the request.
       * @readonly
       */
      formattedAmount?: string | null;
  }
  interface Inventory {
      /**
       * The current purchase availability status calculated based on variants
       * + IN_STOCK: All variants are in stock and available for purchase
       * + OUT_OF_STOCK: All variants are out of stock
       * + PARTIALLY_OUT_OF_STOCK: Some variants are out of stock and some are in stock and available for purchase
       * @readonly
       */
      availabilityStatus?: InventoryAvailabilityStatus;
      /**
       * The current preorder status calculated based on variants
       * + ENABLED: All variants are enabled for preorder
       * + DISABLED: All variants are disabled for preorder
       * + PARTIALLY_ENABLED: Some variants are disabled and some are enabled for preorder
       * @readonly
       */
      preorderStatus?: PreorderStatus;
  }
  enum InventoryAvailabilityStatus {
      UNKNOWN_AVAILABILITY_STATUS = "UNKNOWN_AVAILABILITY_STATUS",
      IN_STOCK = "IN_STOCK",
      OUT_OF_STOCK = "OUT_OF_STOCK",
      PARTIALLY_OUT_OF_STOCK = "PARTIALLY_OUT_OF_STOCK"
  }
  enum PreorderStatus {
      UNKNOWN_PREORDER_STATUS = "UNKNOWN_PREORDER_STATUS",
      ENABLED = "ENABLED",
      DISABLED = "DISABLED",
      PARTIALLY_ENABLED = "PARTIALLY_ENABLED"
  }
  enum ProductType {
      UNKNOWN_PRODUCT_TYPE = "UNKNOWN_PRODUCT_TYPE",
      PHYSICAL = "PHYSICAL",
      DIGITAL = "DIGITAL"
  }
  interface PhysicalProperties {
      /**
       * Price per unit settings - base measurement unit and quantity in order to show price per unit data on the product page.
       * This setting is fixed for a product. The specific price per unit value for each variant is set on each variant
       * For example if one sells cheese and price per unit settings is 100 gr. then we will display price per 100 gr. of cheese.
       */
      pricePerUnit?: PricePerUnitSettings;
      /** Fulfiller id */
      fulfillerId?: string | null;
      /**
       * Shipping group id
       * @internal
       */
      shippingGroupId?: string | null;
      /**
       * Product weight range. The minimum and maximum weights of all the variants.
       * this is needed for bulk adjust product properties action, and also exist in the current API.
       * @readonly
       */
      shippingWeightRange?: WeightRange;
      /**
       * Info about site weight unit. For physical products weight in all variants returned in this unit.
       * > **Note:** This field is returned only when you pass `fields: "WEIGHT_MEASUREMENT_UNIT_INFO"` in the request.
       * @readonly
       */
      weightMeasurementUnitInfo?: WeightMeasurementUnitInfo;
  }
  interface PricePerUnitSettings {
      /** Quantity value. e.g to define price per unit product setting to price per 100 gr. Set this value to 100. */
      quantity?: number;
      /** Measurement unit, e.g to define price per unit product setting to price per 100 gr. Set this value to "G". */
      measurementUnit?: MeasurementUnit;
  }
  enum MeasurementUnit {
      UNSPECIFIED = "UNSPECIFIED",
      ML = "ML",
      CL = "CL",
      L = "L",
      CBM = "CBM",
      MG = "MG",
      G = "G",
      KG = "KG",
      MM = "MM",
      CM = "CM",
      M = "M",
      SQM = "SQM",
      OZ = "OZ",
      LB = "LB",
      FLOZ = "FLOZ",
      PT = "PT",
      QT = "QT",
      GAL = "GAL",
      IN = "IN",
      FT = "FT",
      YD = "YD",
      SQFT = "SQFT"
  }
  interface WeightRange {
      /** Minimum weight across all variants associated with product. */
      minValue?: number;
      /** Maximum weight across all variants associated with product. */
      maxValue?: number;
  }
  interface WeightMeasurementUnitInfo {
      /**
       * Weight measurement unit.
       * @readonly
       */
      weightMeasurementUnit?: WeightUnit;
  }
  enum WeightUnit {
      /** Weight unit can't be classified, due to an error */
      UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
      /** Kilograms */
      KG = "KG",
      /** Pounds */
      LB = "LB"
  }
  interface BreadcrumbsInfo {
      /**
       * Breadcrumbs.
       * @readonly
       */
      breadcrumbs?: BreadCrumb[];
  }
  interface BreadCrumb {
      /** Category ID. */
      categoryId?: string;
      /** Category name. Translatable */
      categoryName?: string;
      /** A permanent, friendly URL name of category. */
      categorySlug?: string;
  }
  interface Variant extends VariantTypedPropertiesOneOf {
      /** Physical properties. Can be provided when `product_type` PHYSICAL */
      physicalProperties?: VariantPhysicalProperties;
      /** Digital properties. Can be provided when `product_type` DIGITAL */
      digitalProperties?: VariantDigitalProperties;
      /** Variant id. */
      _id?: string | null;
      /** Whether the variant is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /** Variant SKU (stock keeping unit) */
      sku?: string | null;
      /** Variant barcode. */
      barcode?: string | null;
      /**
       * A list of options with a selection of choice per option
       * In case this list is empty, this is the default variant of an unmanaged product
       */
      choices?: OptionChoice[];
      /** Variant price */
      price?: PriceInfo;
      /**
       * Variant revenue details.
       * > **Note:** This field is returned by the API only if `fields: "MERCHANT_DATA"` is passed in a request and a user has authorized your app with one of the following permission scopes: `SCOPE.DC-STORES.MANAGE-PRODUCTS`, `SCOPE.POS.MANAGE-PRODUCTS-COLLECTIONS	`, `SCOPE.STORES.MANAGE-STORES`, `SCOPE.STORES.MANAGE-STORES-LIMITED`.
       */
      revenueDetails?: RevenueDetails;
      /**
       * Variant name. Generated automatically based on product name and option choice names
       * not sure it's needed here. maybe only on the view entity
       * @readonly
       */
      name?: string | null;
      /**
       * The main media of the variant.
       * You can select specific set of media items per choices using `options.choices.linkedMedia` field of product, for example to show only imaged with red dress for Color:red.
       * If specific media items defined for some `choices` of this variant then variant media contains first of such media items.
       * Otherwise - main image of product.
       * @readonly
       */
      media?: ProductMedia;
      /** @readonly */
      subscriptionPlansPrices?: SubscriptionPlanPrice[];
      /**
       * Not implemented, will replace subscription_plans_prices
       * Subscription prices calculated by applying subscription discount to the variant `price.discounted_price`.
       * > **Note:** This field is returned by the API only when you pass `fields: "SUBSCRIPTION_PRICES"` in a request.
       * @readonly
       */
      subscriptionPrices?: SubscriptionPrice[];
  }
  /** @oneof */
  interface VariantTypedPropertiesOneOf {
      /** Physical properties. Can be provided when `product_type` PHYSICAL */
      physicalProperties?: VariantPhysicalProperties;
      /** Digital properties. Can be provided when `product_type` DIGITAL */
      digitalProperties?: VariantDigitalProperties;
  }
  interface OptionChoice {
      /** The name of the option, */
      optionName?: string;
      /** The name of the choice selected for this option */
      choiceName?: string;
      /** Option setting type. */
      renderType?: ProductOptionRenderType;
  }
  interface PriceInfo {
      /** Variant price. Must be greater or equal to 0. */
      basePrice?: FixedMonetaryAmount;
      /** Variant sale price. If not provided will be equal to `basePrice`. When provided must be greater or equal to 0 and less than or equal to `basePrice`. */
      salePrice?: FixedMonetaryAmount;
  }
  interface RevenueDetails {
      /** Item cost. */
      cost?: FixedMonetaryAmount;
      /**
       * Profit. Calculated by reducing `cost` from `discounted_price`.
       * @readonly
       */
      profit?: FixedMonetaryAmount;
      /**
       * Profit Margin. Calculated by dividing `profit` by `discounted_price`.
       * The result is rounded to 4 decimal places.
       * @readonly
       */
      profitMargin?: number;
  }
  interface VariantPhysicalProperties {
      /** Variant shipping weight. */
      weight?: number | null;
      /**
       * Price per unit info, in order to show price per unit on the product page.
       * For example if one sells cheese and defines 100g here then we know that buying this variant buyer receives 100g of cheese.
       * But on product page price will be displayed for units defined on product level. See `pricePerUnit.value` to understand how it's calculated.
       */
      pricePerUnit?: PricePerUnit;
  }
  interface PricePerUnit {
      /**
       * Price per unit data for this variant
       * measurement_unit value must be corresponding to the measurement unit set on the product,
       * for example if the base measurement unit is Kg. the variants value of total_measurement_unit must be mg, g, or kg
       */
      settings?: PricePerUnitSettings;
      /**
       * Calculated value of price per unit. Takes into account pricePerUnit settings of parent product, of this variants and discounted price of variant.
       * For example if discounted price is 2$, product's price per unit setting is 1 Kg, variant price per unit setting is 0.5 Kg then this value is 4$ (means variant weight is 0.5 Kg and it costs 2$ but we want to show price per 1 Kg so we show 4$).
       * @readonly
       */
      value?: string;
      /**
       * Price per unit info in the format of variant specific data / product setting, for example €4.00 / 1 Kg.
       * > **Note:** This field is returned by the API only when you pass `fields: "CURRENCY"` in a request.
       * @readonly
       */
      description?: string | null;
  }
  interface VariantDigitalProperties {
      /** Digital file which will be downloaded by buyer after successful purchase. */
      digitalFile?: SecuredMedia;
  }
  interface SecuredMedia {
      /** Media ID in media manager. */
      _id?: string;
      /**
       * Original file name.
       * @readonly
       */
      fileName?: string;
      /**
       * Original file size.
       * @readonly
       */
      fileSize?: string | null;
      /**
       * File type.
       * @readonly
       */
      fileType?: FileType;
  }
  enum FileType {
      UNSPECIFIED = "UNSPECIFIED",
      SECURE_PICTURE = "SECURE_PICTURE",
      SECURE_VIDEO = "SECURE_VIDEO",
      SECURE_DOCUMENT = "SECURE_DOCUMENT",
      SECURE_MUSIC = "SECURE_MUSIC",
      SECURE_ARCHIVE = "SECURE_ARCHIVE"
  }
  interface SubscriptionPlanPrice {
      /**
       * Subscription plan ID (auto-generated upon subscription plan creation).
       * @readonly
       */
      planId?: string;
      /**
       * Subscription plan price calculated by applying subscription plan discount to the variant `price.discounted_price`
       * @readonly
       */
      price?: FixedMonetaryAmount;
      /**
       * Price per unit info, in order to show price per unit on the product page.
       * @readonly
       */
      pricePerUnit?: SubscriptionPlanPricePerUnit;
  }
  interface SubscriptionPlanPricePerUnit {
      /**
       * Calculated value of price per unit. Takes into account pricePerUnit settings of parent product, pricePerUnit settings of this variant and the variant subscription plan price.
       * For example if variant price after applying subscription plan discount is 2$, product's price per unit setting is 1 Kg, variant price per unit setting is 0.5 Kg then this value is 4$ (means variant weight is 0.5 Kg and it costs 2$ but we want to show price per 1 Kg so we show 4$).
       * @readonly
       */
      value?: string;
      /**
       * Price per unit info in the format of variant specific data / product setting, for example €4.00 / 1 Kg.
       * > **Note:** This field is returned by the API only when you pass `fields: "CURRENCY"` in a request.
       * @readonly
       */
      description?: string | null;
  }
  interface SubscriptionPrice {
      /**
       * Subscription ID (auto-generated upon subscription creation).
       * @readonly
       */
      subscriptionId?: string;
      /**
       * Subscription price calculated by applying subscription discount to the variant `price.discounted_price`
       * @readonly
       */
      price?: FixedMonetaryAmount;
      /**
       * Price per unit info, in order to show price per unit on the product page.
       * @readonly
       */
      pricePerUnit?: SubscriptionPricePerUnit;
  }
  interface SubscriptionPricePerUnit {
      /**
       * Calculated value of price per unit. Takes into account pricePerUnit settings of parent product, pricePerUnit settings of this variant and the variant subscription price.
       * For example if variant price after applying subscription discount is 2$, product's price per unit setting is 1 Kg, variant price per unit setting is 0.5 Kg then this value is 4$ (means variant weight is 0.5 Kg and it costs 2$ but we want to show price per 1 Kg so we show 4$).
       * @readonly
       */
      value?: string;
      /**
       * Price per unit info in the format of variant specific data / product setting, for example €4.00 / 1 Kg.
       * > **Note:** This field is returned by the API only when you pass `fields: "CURRENCY"` in a request.
       * @readonly
       */
      description?: string | null;
  }
  interface V3VariantsInfo {
      /** List of related variants. */
      variants?: Variant[];
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
  interface Subscription {
      /** Subscription plans. */
      subscriptionPlans?: SubscriptionPlan[];
      /** Product could be purchased as individual product in addition to a subscription based purchases. Default: `false`. */
      allowOneTimePurchases?: boolean | null;
  }
  interface SubscriptionPlan {
      /** Subscription plan ID (auto-generated upon subscription plan creation). */
      _id?: string | null;
      /** Subscription plan title. */
      title?: string;
      /** Subscription plan description (optional). */
      description?: string | null;
      /** Whether the plan is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /** Subscription charge times. For example, if `frequency: MONTH` and `billingCycles: 6`; payment will be made monthly for 6 months. */
      subscriptionSettings?: SubscriptionSettings;
      /**
       * Discount info (optional).
       * For example, a $20 discount would be `amount: 20`, `type: AMOUNT`.
       */
      discount?: SubscriptionPlanDiscount;
  }
  interface SubscriptionSettings extends SubscriptionSettingsCyclesOneOf {
      /** Whether subscription is renewed automatically at the end of each period. Cannot be `false`, instead set `billingCycles`. */
      autoRenewal?: boolean;
      /** Number of billing cycles before subscription ends. */
      billingCycles?: number;
      /** Frequency of recurring payment. */
      frequency?: SubscriptionFrequency;
      /** Interval of recurring payment. Default: `1` */
      interval?: number | null;
  }
  /** @oneof */
  interface SubscriptionSettingsCyclesOneOf {
      /** Whether subscription is renewed automatically at the end of each period. Cannot be `false`, instead set `billingCycles`. */
      autoRenewal?: boolean;
      /** Number of billing cycles before subscription ends. */
      billingCycles?: number;
  }
  /** Frequency unit of recurring payment */
  enum SubscriptionFrequency {
      UNDEFINED = "UNDEFINED",
      DAY = "DAY",
      WEEK = "WEEK",
      MONTH = "MONTH",
      YEAR = "YEAR"
  }
  interface SubscriptionPlanDiscount extends SubscriptionPlanDiscountDiscountOneOf {
      /** Amount to discount from the variant discounted_price. */
      amountOff?: string;
      /** Percentage to discount from variant discounted_price. */
      percentOff?: number;
      /** Discount type. */
      type?: DiscountType;
  }
  /** @oneof */
  interface SubscriptionPlanDiscountDiscountOneOf {
      /** Amount to discount from the variant discounted_price. */
      amountOff?: string;
      /** Percentage to discount from variant discounted_price. */
      percentOff?: number;
  }
  enum DiscountType {
      UNKNOWN_DISCOUNT = "UNKNOWN_DISCOUNT",
      AMOUNT = "AMOUNT",
      PERCENT = "PERCENT"
  }
  interface SubscriptionDetails {
      /** Subscriptions. */
      subscriptions?: SubscriptionDetailsSubscription[];
      /** Product could be purchased as an individual product in addition to a subscription-based purchases. Default: `false`. */
      allowOneTimePurchases?: boolean | null;
  }
  interface SubscriptionDiscount extends SubscriptionDiscountDiscountOneOf {
      /** Amount to discount from the variant discounted_price. */
      amountOff?: string;
      /** Percentage to discount from variant discounted_price. */
      percentOff?: number;
      /** Discount type. */
      type?: SubscriptionDiscountDiscountType;
  }
  /** @oneof */
  interface SubscriptionDiscountDiscountOneOf {
      /** Amount to discount from the variant discounted_price. */
      amountOff?: string;
      /** Percentage to discount from variant discounted_price. */
      percentOff?: number;
  }
  enum SubscriptionDiscountDiscountType {
      UNKNOWN_DISCOUNT = "UNKNOWN_DISCOUNT",
      AMOUNT = "AMOUNT",
      PERCENT = "PERCENT"
  }
  interface SubscriptionDetailsSubscription extends SubscriptionDetailsSubscriptionCyclesOneOf {
      /** Whether subscription is renewed automatically at the end of each period. Cannot be `false`, instead set `billingCycles`. */
      autoRenewal?: boolean;
      /** Number of billing cycles before subscription ends. */
      billingCycles?: number;
      /** Subscription ID (auto-generated upon subscription creation). */
      _id?: string | null;
      /** Subscription title. */
      title?: string;
      /** Subscription description (optional). */
      description?: string | null;
      /** Whether the subscription is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /** Frequency of recurring payment. For example, if `frequency: MONTH` and `billingCycles: 6`; payment will be made monthly for 6 months. */
      frequency?: SubscriptionFrequency;
      /** Interval of recurring payment. Default: `1`. For example, if `frequency: MONTH`, `billingCycles: 3` and `interval: 2`; payment will be made every 2 months for a total of 6 months. */
      interval?: number | null;
      /**
       * Discount info (optional).
       * For example, a $20 discount would be `amount: 20`, `type: AMOUNT`.
       */
      discount?: SubscriptionDiscount;
  }
  /** @oneof */
  interface SubscriptionDetailsSubscriptionCyclesOneOf {
      /** Whether subscription is renewed automatically at the end of each period. Cannot be `false`, instead set `billingCycles`. */
      autoRenewal?: boolean;
      /** Number of billing cycles before subscription ends. */
      billingCycles?: number;
  }
  interface UpdateDocumentsEvent extends UpdateDocumentsEventOperationOneOf {
      /** insert/update documents */
      update?: DocumentUpdateOperation;
      /** delete by document ids */
      deleteByIds?: DeleteByIdsOperation;
      /** delete documents matching filter */
      deleteByFilter?: DeleteByFilterOperation;
      /** update documents matching filter */
      updateByFilter?: UpdateByFilterOperation;
      /** update only existing documents */
      updateExisting?: UpdateExistingOperation;
      /** application which owns documents */
      appDefId?: string | null;
      /** type of the documents */
      documentType?: string | null;
      /** language of the documents */
      language?: string | null;
      /** site documents belong to */
      msId?: string | null;
  }
  /** @oneof */
  interface UpdateDocumentsEventOperationOneOf {
      /** insert/update documents */
      update?: DocumentUpdateOperation;
      /** delete by document ids */
      deleteByIds?: DeleteByIdsOperation;
      /** delete documents matching filter */
      deleteByFilter?: DeleteByFilterOperation;
      /** update documents matching filter */
      updateByFilter?: UpdateByFilterOperation;
      /** update only existing documents */
      updateExisting?: UpdateExistingOperation;
  }
  interface DocumentUpdateOperation {
      /** documents to index or update */
      documents?: IndexDocument[];
  }
  interface IndexDocument {
      /** data bag with non-searchable fields (url, image) */
      payload?: DocumentPayload;
      /** what type of users should documents be visible to */
      exposure?: Enum;
      /** document with mandatory fields (id, title, description) and with fields specific to the type of the document */
      document?: Record<string, any> | null;
      /** what member groups is the document exposed to. Used only with GROUP_PROTECTED exposure */
      permittedMemberGroups?: string[];
      /** if true SEO is disabled for this document */
      seoHidden?: boolean | null;
      /** if true the page is a lightbox popup */
      isPopup?: boolean | null;
  }
  interface DocumentPayload {
      /** url of the page representing the document */
      url?: string | null;
      /** image which represents the document */
      documentImage?: DocumentImage;
  }
  interface DocumentImage {
      /** the name of the image */
      name?: string;
      /** the width of the image */
      width?: number;
      /** the height of the image */
      height?: number;
  }
  enum Enum {
      /** Default value. Means that permission not set */
      UNKNOWN = "UNKNOWN",
      /** Protected exposure. Exposed to members and owners */
      PROTECTED = "PROTECTED",
      /** Private exposure. Exposed to owners */
      PRIVATE = "PRIVATE",
      /** Public exposure. Visible to everyone */
      PUBLIC = "PUBLIC",
      /** Used for partial updates, to state that exposure is not changing */
      UNCHANGED = "UNCHANGED",
      /** Protected to members of permitted groups and owners */
      GROUP_PROTECTED = "GROUP_PROTECTED"
  }
  interface DeleteByIdsOperation {
      /** ids of the documents to delete */
      documentIds?: string[];
  }
  interface DeleteByFilterOperation {
      /** documents matching this filter wil be deleted. only filterable documents defined in document_type can be used for filtering */
      filter?: Record<string, any> | null;
  }
  interface UpdateByFilterOperation {
      /** documents matching this filter will be updated */
      filter?: Record<string, any> | null;
      /** partial document to apply */
      document?: IndexDocument;
  }
  interface UpdateExistingOperation {
      /** documents to update */
      documents?: IndexDocument[];
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
  interface Empty$2 {
  }
  interface SearchIndexingNotification {
      /** new state of indexing for the site specified in ms_id */
      indexState?: State;
      /** type of the document the notification is targeted for. Applies to all types if not provided */
      documentType?: string | null;
      /** languaInternalDocumentUpdateByFilterOperationge the notification is targeted for. Applies to all languages if not provided */
      language?: string | null;
      /** site for which notification is targeted */
      msId?: string | null;
  }
  enum State {
      /** default state */
      Unknown = "Unknown",
      /** metasite does not require site search indexing */
      Off = "Off",
      /** metasite requires site search indexing */
      On = "On"
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
  interface CreateProductRequest {
      /**
       * Product to be created.
       * At least one variant must be provided and each variant must have relevant item in `choices` field for every item in `options`.
       * In case if `options` is empty one default variant must be provided with empty `choices` list.
       */
      product: ProductComposite;
      /** Whether to return the full product, variant and inventory entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  interface ProductComposite extends ProductCompositeTypedPropertiesOneOf {
      /** Physical properties, can be provided only when `product_type` is PHYSICAL */
      physicalProperties?: PhysicalProperties;
      /**
       * Product ID. Auto-generated on product creation.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /** Product name. Translatable. */
      name?: string | null;
      /**
       * A permanent, friendly URL name.
       * If not provided, on create generated automatically.
       * When provided, validated and must be unique.
       */
      slug?: string | null;
      /**
       * Optional - Product description which supports rich content.
       * In order to use this field you have to integrate with "Ricos" on frontend side. To learn how to do it visit https://ricos.js.org/.
       * @internal
       */
      description?: RichContent;
      /**
       * Optional - RichContent description converted to html.
       * If provided on write: this description must be a valid html and converted to RichContent description.
       * It is ignored if provided along with RichContent description.
       * > **Note:** This field is returned by the API only when you pass `fields: "PLAIN_DESCRIPTION"` in a request.
       */
      plainDescription?: string | null;
      /** Whether the product is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /**
       * Whether the product is visible in POS (point of sale app). Default: `true` for productType PHYSICAL.
       * Note: productType DIGITAL is not supported in POS so for such products it's always `false` and it's not allowed to change it.
       */
      visibleInPos?: boolean | null;
      /** Media items (images, videos etc) associated with this product. */
      media?: Media;
      /** Custom SEO data for the product. */
      seoData?: SeoSchema;
      /** Tax group id */
      taxGroupId?: string | null;
      /**
       * Product options. Allows buyer to customize product, e.g. select Color, Size and so on.
       * Always generates variants: every variant must have exactly one choice related to each option.
       * Since options and variants tightly coupled and rely on each other they usually should be provided together in all operations.
       * For existing options and choices provide ids only, all other data (e.g. names, title, types and so on) will be resolved for you by ids.
       * If you don't have ids it's ok to omit them but provide all other data instead. For existing options ids will be resolved, not existing options will be created.
       * *None*: you cannot change name of existing option via this endpoint but you can do it by calling CustomizationService
       */
      options?: ConnectedOption[];
      /**
       * Product Modifiers. Allows buyer to customize product, e.g. select Color, Size and so on similarly to `options` but with one main difference - `modifiers` never generate any variants.
       * For existing modifiers and choices provide ids only, all other data (e.g. names, title, types and so on) will be resolved for you by ids.
       * If you don't have ids it's ok to omit them but provide all other data instead. For existing modifiers ids will be resolved, not existing modifiers will be created.
       * *None*: you cannot change name of existing modifier via this endpoint by passing id and changed name, if you pass id name will be ignored. If you want to update existing modifier name do it by calling CustomizationService
       */
      modifiers?: ConnectedModifier[];
      /**
       * Optional - Brand. To assign existing brand to product provide `brand.id`.
       * If you provide `brand.name` only then if brand with such name already exits it will be assigned, otherwise new brand will be created.
       * *None*: you cannot change name of existing brand via this endpoint but you can do it by calling BrandService.
       */
      brand?: Brand;
      /**
       * Product info sections.
       * To assign existing info section to product provide `infoSections.id` or `infoSections.uniqueName`.
       * To create new info section provide `uniqueName`, `title` and `description`
       * *None*: you cannot change name of existing brand via this endpoint but you can do it by calling BrandService.
       */
      infoSections?: InfoSection[];
      /**
       * Product ribbon. To assign existing ribbon to product provide `ribbon.id`.
       * If you provide `ribbon.name` only then if ribbon with such name already exits it will be assigned, otherwise new ribbon will be created.
       * *None*: you cannot change name of existing ribbon via this endpoint but you can do it by calling RibbonService.
       */
      ribbon?: Ribbon$1;
      /**
       * Main category id. If product belongs to more than one category main category defines `breadcrumbs` on product page.
       * By default first category from `category_ids` list. Provided value MUST be in `category_ids`
       * Can be empty only in case if product doesn't belong to any category.
       */
      mainCategoryId?: string | null;
      /** Product type. Affects which properties product has. Also defines type of variants which allowed to be associated with this product. Product type must be provided on creation and cannot be changed. */
      productType?: ProductType;
      /**
       * List of related variants.
       * On create request at least one variant must be provided.
       * On update product request if you wish to update variants you must pass all of them with together with product options.
       * Partial update of variants is not supported.
       * If you want to update existing variant you must provide `id`, otherwise new variant with different id will be created which might break some integrations that rely on variant ids.
       */
      variants?: VariantComposite[];
      /**
       * Info about product variants.
       * Required in update request if `options` provided and vice verse: if `variants_info` provided then `options` also required.
       * > **Note:** This field is returned only when you pass `fields: "VARIANTS_INFO"` in the request.
       */
      variantsInfo?: VariantsInfo;
      subscription?: Subscription;
      /**
       * Not yet implemented, will later replace subscription.
       * Product subscription based purchases.
       */
      subscriptionDetails?: SubscriptionDetails;
  }
  /** @oneof */
  interface ProductCompositeTypedPropertiesOneOf {
      /** Physical properties, can be provided only when `product_type` is PHYSICAL */
      physicalProperties?: PhysicalProperties;
  }
  interface VariantComposite extends VariantCompositeTypedPropertiesOneOf {
      /** Physical properties. Can be provided when `product_type` PHYSICAL */
      physicalProperties?: VariantPhysicalProperties;
      /** Digital properties. Can be provided when `product_type` DIGITAL */
      digitalProperties?: VariantDigitalProperties;
      /** Variant id. Autogenerated on create. */
      _id?: string | null;
      /** Whether the variant is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /** Variant SKU (stock keeping unit). Unique for each variant in store. */
      sku?: string | null;
      /** Variant barcode. . Unique for each variant in store. */
      barcode?: string | null;
      /** Variant price */
      price?: PriceInfo;
      /**
       * Variant revenue details.
       * > **Note:** This field is returned by the API only if `fields: "MERCHANT_DATA"` is passed in a request and a user has authorized your app with one of the following permission scopes: `SCOPE.DC-STORES.MANAGE-PRODUCTS`, `SCOPE.POS.MANAGE-PRODUCTS-COLLECTIONS	`, `SCOPE.STORES.MANAGE-STORES`, `SCOPE.STORES.MANAGE-STORES-LIMITED`.
       */
      revenueDetails?: RevenueDetails;
      /** Inventory item of the variant on the default location. */
      inventoryItem?: InventoryItemComposite;
      /**
       * List of option choices. Must contain exactly one choice of every option defined in product `options`.
       * Example: product has option Size with TEXT_CHOICES S and L and option Color with SWATCH_CHOICES blue and red. Then valid choices will be:
       * [Size:S:TEXT_CHOICES, Color:blue:SWATCH_CHOICES] or [Size:S:TEXT_CHOICES, Color:red:SWATCH_CHOICES] or [Size:L:TEXT_CHOICES, Color:blue:SWATCH_CHOICES] or [Size:L:TEXT_CHOICES, Color:red:SWATCH_CHOICES]
       */
      choices?: OptionChoiceReferences[];
  }
  /** @oneof */
  interface VariantCompositeTypedPropertiesOneOf {
      /** Physical properties. Can be provided when `product_type` PHYSICAL */
      physicalProperties?: VariantPhysicalProperties;
      /** Digital properties. Can be provided when `product_type` DIGITAL */
      digitalProperties?: VariantDigitalProperties;
  }
  interface InventoryItemComposite extends InventoryItemCompositeTrackingMethodOneOf {
      /** Inventory tracking status, when set to true, item is available for sale without quantity limit. */
      inStock?: boolean;
      /**
       * Quantity currently left in inventory.
       * In some scenarios, quantity could go negative, for example when decreasing inventory for an order that has already been paid.
       */
      quantity?: number;
      /**
       * InventoryItem ID. Auto-generated on inventory creation.
       * @readonly
       */
      _id?: string | null;
      /**
       * InventoryItem revision. Auto-generated on inventory creation. incremented on each update
       * @readonly
       */
      revision?: string | null;
      /** Item preorder info. */
      preorderInfo?: PreorderInfo;
  }
  /** @oneof */
  interface InventoryItemCompositeTrackingMethodOneOf {
      /** Inventory tracking status, when set to true, item is available for sale without quantity limit. */
      inStock?: boolean;
      /**
       * Quantity currently left in inventory.
       * In some scenarios, quantity could go negative, for example when decreasing inventory for an order that has already been paid.
       */
      quantity?: number;
  }
  interface PreorderInfo {
      /** Whether the item is available for preorder. */
      enabled?: boolean;
      /** Optional - A message the buyer will see when the item is out of stock and preorder is enabled. */
      message?: string | null;
      /**
       * Optional - Number of products that can be purchased as preorder after stock reaches zero.
       * If not defined -100,000 products can be purchased as preorder.
       */
      limit?: number | null;
      /**
       * How many times this item was purchased as a preorder, limited by the value of PreorderSettings.limit.
       * It may cross the limit if the restrict_inventory_value = false.
       * @readonly
       */
      counter?: number | null;
      /**
       * Available quantity for preorder.
       * @readonly
       */
      quantity?: number | null;
  }
  interface OptionChoiceReferences {
      /** The name of the option, */
      optionName?: string;
      /** The name of the choice selected for this option */
      choiceName?: string;
      /** Option setting type. */
      renderType?: ProductOptionRenderType;
  }
  interface VariantsInfo {
      /**
       * List of related variants.
       * Partial update of variants is not supported so on update you must pass all data for all of them.
       * If you want to update existing variant you must provide `id`, otherwise new variant with different id will be created which might break some integrations that rely on variant ids.
       */
      variants?: VariantComposite[];
  }
  enum RequestedFields$1 {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      URL = "URL",
      CURRENCY = "CURRENCY",
      INFO_SECTION = "INFO_SECTION",
      /** You can request merchant data only if you have `WIX_STORES.PRODUCT_MERCHANT_DATA_READ` permission. */
      MERCHANT_DATA = "MERCHANT_DATA",
      /** replaced with VARIANTS_INFO */
      VARIANTS = "VARIANTS",
      /** Deprecated, replcaed by SUBSCRIPTION_PRICES */
      SUBSCRIPTION_PLANS_PRICES = "SUBSCRIPTION_PLANS_PRICES",
      PLAIN_DESCRIPTION = "PLAIN_DESCRIPTION",
      INFO_SECTION_PLAIN_DESCRIPTION = "INFO_SECTION_PLAIN_DESCRIPTION",
      SUBSCRIPTION_PRICES = "SUBSCRIPTION_PRICES",
      VARIANTS_INFO = "VARIANTS_INFO",
      BREADCRUMBS_INFO = "BREADCRUMBS_INFO",
      WEIGHT_MEASUREMENT_UNIT_INFO = "WEIGHT_MEASUREMENT_UNIT_INFO"
  }
  interface CreateProductResponse {
      /** The created Product */
      product?: Product;
      /** Inventories created by bulk action. */
      inventoryResults?: BulkInventoryItemResults;
  }
  interface BulkInventoryItemResults {
      /**
       * todo need to change min to 1
       * Inventories by bulk action.
       */
      results?: BulkInventoryItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
      /** Details about the error in case if entire request failed. */
      error?: ApplicationError$1;
  }
  interface BulkInventoryItemResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$1;
      /** Created or updated inventory item. Optional - returned only if requested with `return_entity` set to `true`. */
      item?: InventoryItem;
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
  /** InventoryItem is the main entity of InventoryService */
  interface InventoryItem extends InventoryItemTrackingMethodOneOf {
      /** Inventory tracking status, when set to true, item is available for sale without quantity limit. */
      inStock?: boolean;
      /**
       * Quantity currently left in inventory.
       * In some scenarios, quantity could go negative, for example when decreasing inventory for an order that has already been paid.
       */
      quantity?: number;
      /**
       * Inventory ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Inventory was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Inventory was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Variant ID. */
      variantId?: string;
      /** Location ID, location_id with variant_id is unique. */
      locationId?: string | null;
      /** Product ID. */
      productId?: string;
      /**
       * Whether the quantity is being tracked.
       * @readonly
       */
      trackQuantity?: boolean;
      /**
       * Item availability, availability is combination of status and available quantity.
       * @readonly
       */
      availability?: ItemAvailability;
      /**
       * Item availability status, availability is combination of status and available quantity.
       * + OUT_OF_STOCK: no available quantity
       * + IN_STOCK: available quantity can be found in `quantity` field.
       * + PREORDER: available quantity can be found in `preorderInfo.quantity` field.
       * @readonly
       */
      availabilityStatus?: V3AvailabilityStatus;
      /** Item preorder info. */
      preorderInfo?: PreorderInfo;
      /**
       * Item categories ID.
       * @readonly
       */
      categoriesId?: string[];
      /** Extensions enabling users to save custom data related to the inventory item. */
      extendedFields?: ExtendedFields;
  }
  /** @oneof */
  interface InventoryItemTrackingMethodOneOf {
      /** Inventory tracking status, when set to true, item is available for sale without quantity limit. */
      inStock?: boolean;
      /**
       * Quantity currently left in inventory.
       * In some scenarios, quantity could go negative, for example when decreasing inventory for an order that has already been paid.
       */
      quantity?: number;
  }
  interface ItemAvailability {
      /**
       * If `AvailableStatus` is NOT_AVAILABLE the item is not available
       * If `AvailableStatus` is PURCHASE and available_quantity is N then up to N items can be purchased right now
       * If `AvailableStatus` is PURCHASE and available_quantity is not defined then unlimited number of items can be purchased right now
       * If `AvailableStatus` is PREORDER and available_quantity is N then up to N items can be purchased as preorder
       * If `AvailableStatus` is PREORDER and available_quantity is not defined then unlimited number of items can be purchased as preorder
       * @readonly
       */
      status?: AvailabilityStatus;
      /**
       * Available quantity, when not defined then unlimited number of items can be purchased.
       * @readonly
       */
      quantity?: number | null;
  }
  /** Item availability status. */
  enum AvailabilityStatus {
      UNKNOWN = "UNKNOWN",
      NOT_AVAILABLE = "NOT_AVAILABLE",
      PURCHASE = "PURCHASE",
      /**
       * Whether the variant is available for preorder. InventoryItem will be available only when all below conditions are met:
       * 1. the variant is out of stock
       * 2. preorder is enabled on inventory item level (preorder_setting.enabled is true)
       * 3. preorder limit wasn't reached (preorder_setting.limit)
       */
      PREORDER = "PREORDER"
  }
  enum V3AvailabilityStatus {
      UNKNOWN_AVAILABILITY_STATUS = "UNKNOWN_AVAILABILITY_STATUS",
      OUT_OF_STOCK = "OUT_OF_STOCK",
      IN_STOCK = "IN_STOCK",
      /**
       * Whether the variant is available for preorder. InventoryItem will be available only when all below conditions are met:
       * 1. the variant is out of stock
       * 2. preorder is enabled on inventory item level (preorder_setting.enabled is true)
       * 3. preorder limit wasn't reached (preorder_setting.limit)
       */
      PREORDER = "PREORDER"
  }
  interface BulkActionMetadata$1 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface VariantsNotAlignedWithProduct {
      /** Variants not aligned with product */
      variants?: VariantNotAlignedWithProduct[];
  }
  interface VariantNotAlignedWithProduct {
      /** variant id */
      variantId?: string;
      /** what's wrong with this specific variant */
      errorDescription?: string;
  }
  interface InventoryBulkErrors {
      /** errors occurred in inventory service */
      inventoryErrors?: ItemMetadata$1[];
  }
  interface UpdateProductRequest {
      /** Product to be updated, may be partial */
      product: ProductComposite;
      /**
       * Explicit list of fields to update in product
       * @internal
       */
      fieldMask?: string[];
      /** Whether to return the variant and inventory entities in the response. Relevant only if variants and inventory were provided in request. Otherwise this parameter will be ignored. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  interface UpdateProductResponse {
      /** The updated Product */
      product?: Product;
      /** Inventories updated by bulk action. */
      inventoryResults?: BulkInventoryItemResults;
  }
  interface UnsupportedFieldMasks {
      /** Field masks provided in request but not supported */
      fieldMasks?: string[];
  }
  interface BulkCreateProductsRequest {
      /** List of products to be created. */
      products: ProductComposite[];
      /** Whether to return the full product, variant and inventory entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  interface BulkCreateProductsResponse {
      /** Products by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
      /** Products created by bulk action. */
      productResults?: BulkProductResults;
      /** Inventories created by bulk action. */
      inventoryResults?: BulkInventoryItemResults;
  }
  interface BulkProductResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$1;
      /** Product after bulk operation. Optional - returned only if requested with `return_entity` set to `true`. */
      item?: Product;
  }
  interface BulkProductResults {
      /** Products by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkUpdateProductsRequest {
      /** List of products to be updated. */
      products: MaskedProductComposite[];
      /** Whether to return the full product entity in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  interface MaskedProductComposite {
      /** product to be updated, may be partial. */
      product?: ProductComposite;
      /**
       * Explicit list of fields to update in product
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateProductsResponse {
      /** Products by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
      /** Products updated by bulk action. */
      productResults?: BulkProductResults;
      /** Inventories updated by bulk action. */
      inventoryResults?: BulkInventoryItemResults;
  }
  interface BulkAddProductsToCategoriesByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "basePriceRange.minValue": {"$lte": 5.99}
       * }`
       * See all available operators here: dev.wix.com/docs/rest/articles/getting-started/api-query-language#the-filter-section
       */
      filter: Record<string, any> | null;
      /** Categories to which all filtered products will be added. */
      categoryIds: string[];
  }
  interface BulkAddProductsToCategoriesByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface BulkRemoveProductsFromCategoriesByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "basePriceRange.minValue": {"$lte": 5.99}
       * }`
       * See all available operators here: dev.wix.com/docs/rest/articles/getting-started/api-query-language#the-filter-section
       */
      filter: Record<string, any> | null;
      /** Categories to which all products which match the filter will be added. */
      categoryIds: string[];
  }
  interface BulkRemoveProductsFromCategoriesByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
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
  interface DoNotCallCreateProductRequest {
      /** Product to be created */
      product?: Product;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  interface DoNotCallCreateProductResponse {
      /** The created Product */
      product?: Product;
  }
  interface VariantAdded {
      variant?: Variant;
  }
  interface GetProductRequest {
      /** Id of the Product to retrieve */
      productId: string;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
      /**
       * Indicates if the read should be done consistent or not. Default is false
       * @internal
       */
      consistent?: boolean | null;
  }
  interface GetProductResponse {
      /** The retrieved Product */
      product?: Product;
  }
  interface GetProductBySlugRequest {
      /** Product slug. A permanent, friendly URL name unique per store. */
      slug: string;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  interface GetProductBySlugResponse {
      /** The retrieved Product */
      product?: Product;
  }
  interface DoNotCallUpdateProductRequest {
      /** Product to be updated, may be partial */
      product?: Product;
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  interface DoNotCallUpdateProductResponse {
      /** The updated Product */
      product?: Product;
  }
  interface VariantUpdated {
      previous?: Variant;
      current?: Variant;
  }
  interface VariantRemoved {
      variant?: Variant;
  }
  interface DeleteProductRequest {
      /** Id of the Product to delete */
      productId: string;
  }
  interface DeleteProductResponse {
  }
  interface SearchProductsRequest {
      /**
       * WQL expression. Please pay attention that unlike other arrays when you want to filter by `inventory` or `variants` instead of standard array operators you must use `$matchItems` (for usage see examples).
       * It means that product will be returned only if one or more items satisfy all filters specified in $matchItems.
       * For example, if you have 2 variants: one visible with price 10 and another one not visible with price 20, when inside $matchItems you specify `visible:true` and `price > 15` nothing will be returned because there are no variants which satisfy both conditions.
       * You still can use `$isEmpty` and `$exists` operators for fields listed above.
       * See examples to understand supported capabilities.
       */
      search?: CursorSearch;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NON_VISIBLE` permission or	`SCOPE.DC-STORES.MANAGE-PRODUCTS` permission scope required. */
      returnNonVisibleProducts?: boolean;
  }
  interface CursorSearch extends CursorSearchPagingMethodOneOf {
      /**
       * Cursor pointing to page of results.
       * When requesting 'cursor_paging.cursor', no `filter`, `sort` or `search` can be provided.
       */
      cursorPaging?: CursorPaging$2;
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter?: Record<string, any> | null;
      /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
      sort?: Sorting$2[];
      /** Aggregations | Faceted search: refers to a way to explore large amounts of data by displaying summaries about various partitions of the data and later allowing to narrow the navigation to a specific partition. */
      aggregations?: Aggregation[];
      /** Free text to match in searchable fields */
      search?: SearchDetails;
      /**
       * UTC offset or IANA time zone. Valid values are
       * ISO 8601 UTC offsets, such as +02:00 or -06:00,
       * and IANA time zone IDs, such as Europe/Rome
       *
       * Affects all filters and aggregations returned values.
       * You may override this behavior in a specific filter by providing
       * timestamps including time zone. e.g. `"2023-12-20T10:52:34.795Z"`
       */
      timeZone?: string | null;
  }
  /** @oneof */
  interface CursorSearchPagingMethodOneOf {
      /**
       * Cursor pointing to page of results.
       * When requesting 'cursor_paging.cursor', no `filter`, `sort` or `search` can be provided.
       */
      cursorPaging?: CursorPaging$2;
  }
  interface Sorting$2 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$2;
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
  enum SortOrder$2 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Aggregation extends AggregationKindOneOf {
      /** Value aggregation */
      value?: ValueAggregation;
      /** Range aggregation */
      range?: RangeAggregation;
      /** Scalar aggregation */
      scalar?: ScalarAggregation;
      /** Date histogram aggregation */
      dateHistogram?: DateHistogramAggregation;
      /** Nested aggregation */
      nested?: NestedAggregation;
      /** User-defined name of aggregation, should be unique, will appear in aggregation results */
      name?: string | null;
      /** Type of aggregation, client must provide matching aggregation field below */
      type?: AggregationType;
      /** Field to aggregate by, use dot notation to specify json path */
      fieldPath?: string;
      /** deprecated, use `nested` instead */
      groupBy?: GroupByAggregation;
  }
  /** @oneof */
  interface AggregationKindOneOf {
      /** Value aggregation */
      value?: ValueAggregation;
      /** Range aggregation */
      range?: RangeAggregation;
      /** Scalar aggregation */
      scalar?: ScalarAggregation;
      /** Date histogram aggregation */
      dateHistogram?: DateHistogramAggregation;
      /** Nested aggregation */
      nested?: NestedAggregation;
  }
  interface RangeBucket {
      /** Inclusive lower bound of the range. Required if to is not given */
      from?: number | null;
      /** Exclusive upper bound of the range. Required if from is not given */
      to?: number | null;
  }
  enum SortType {
      /** Should sort by number of matches */
      COUNT = "COUNT",
      /** Should sort by value of the field alphabetically */
      VALUE = "VALUE"
  }
  enum SortDirection {
      /** Should sort in descending order */
      DESC = "DESC",
      /** Should sort in ascending order */
      ASC = "ASC"
  }
  enum MissingValues {
      /** Should missing values be excluded from the aggregation results */
      EXCLUDE = "EXCLUDE",
      /** Should missing values be included in the aggregation results */
      INCLUDE = "INCLUDE"
  }
  interface IncludeMissingValuesOptions {
      /** Can specify custom bucket name. Defaults are [string -> "N/A"], [int -> "0"], [bool -> "false"] ... */
      addToBucket?: string;
  }
  enum ScalarType {
      UNKNOWN_SCALAR_TYPE = "UNKNOWN_SCALAR_TYPE",
      /** Count of distinct values */
      COUNT_DISTINCT = "COUNT_DISTINCT",
      /** Minimum value */
      MIN = "MIN",
      /** Maximum value */
      MAX = "MAX",
      /** Sum of values */
      SUM = "SUM",
      /** Average of values */
      AVG = "AVG"
  }
  interface ValueAggregation extends ValueAggregationOptionsOneOf {
      /** Options for including missing values */
      includeOptions?: IncludeMissingValuesOptions;
      /** Should sort by number of matches or value of the field */
      sortType?: SortType;
      /** Should sort in ascending or descending order */
      sortDirection?: SortDirection;
      /** How many aggregations would you like to return? Can be between 1 and 250. 10 is the default. */
      limit?: number | null;
      /** Should missing values be included or excluded from the aggregation results. Default is EXCLUDE */
      missingValues?: MissingValues;
  }
  /** @oneof */
  interface ValueAggregationOptionsOneOf {
      /** Options for including missing values */
      includeOptions?: IncludeMissingValuesOptions;
  }
  enum NestedAggregationType {
      UNKNOWN_AGGREGATION_TYPE = "UNKNOWN_AGGREGATION_TYPE",
      /** An aggregation where result buckets are dynamically built - one per unique value */
      VALUE = "VALUE",
      /** An aggregation, where user can define set of ranges - each representing a bucket */
      RANGE = "RANGE",
      /** A single-value metric aggregation - e.g. min, max, sum, avg */
      SCALAR = "SCALAR",
      /** An aggregation, where result buckets are dynamically built - one per time interval (hour, day, week, etc.) */
      DATE_HISTOGRAM = "DATE_HISTOGRAM"
  }
  interface RangeAggregation {
      /** List of range buckets, where during aggregation each entity will be placed in the first bucket where its value falls into based on provided range bounds */
      buckets?: RangeBucket[];
  }
  interface ScalarAggregation {
      /** Define the operator for the scalar aggregation */
      type?: ScalarType;
  }
  interface DateHistogramAggregation {
      /** Interval for date histogram aggregation */
      interval?: Interval;
  }
  enum Interval {
      UNKNOWN_INTERVAL = "UNKNOWN_INTERVAL",
      /** Yearly interval */
      YEAR = "YEAR",
      /** Monthly interval */
      MONTH = "MONTH",
      /** Weekly interval */
      WEEK = "WEEK",
      /** Daily interval */
      DAY = "DAY",
      /** Hourly interval */
      HOUR = "HOUR",
      /** Minute interval */
      MINUTE = "MINUTE",
      /** Second interval */
      SECOND = "SECOND"
  }
  interface NestedAggregationItem extends NestedAggregationItemKindOneOf {
      /** Value aggregation */
      value?: ValueAggregation;
      /** Range aggregation */
      range?: RangeAggregation;
      /** Scalar aggregation */
      scalar?: ScalarAggregation;
      /** Date histogram aggregation */
      dateHistogram?: DateHistogramAggregation;
      /** User-defined name of aggregation, should be unique, will appear in aggregation results */
      name?: string | null;
      /** Type of aggregation, client must provide matching aggregation field below */
      type?: NestedAggregationType;
      /** Field to aggregate by, use dont notation to specify json path */
      fieldPath?: string;
  }
  /** @oneof */
  interface NestedAggregationItemKindOneOf {
      /** Value aggregation */
      value?: ValueAggregation;
      /** Range aggregation */
      range?: RangeAggregation;
      /** Scalar aggregation */
      scalar?: ScalarAggregation;
      /** Date histogram aggregation */
      dateHistogram?: DateHistogramAggregation;
  }
  enum AggregationType {
      UNKNOWN_AGGREGATION_TYPE = "UNKNOWN_AGGREGATION_TYPE",
      /** An aggregation where result buckets are dynamically built - one per unique value */
      VALUE = "VALUE",
      /** An aggregation, where user can define set of ranges - each representing a bucket */
      RANGE = "RANGE",
      /** A single-value metric aggregation - e.g. min, max, sum, avg */
      SCALAR = "SCALAR",
      /** An aggregation, where result buckets are dynamically built - one per time interval (hour, day, week, etc.) */
      DATE_HISTOGRAM = "DATE_HISTOGRAM",
      /** Multi-level aggregation, where each next aggregation is nested within previous one */
      NESTED = "NESTED"
  }
  /** Nested aggregation expressed through a list of aggregation where each next aggregation is nested within previous one */
  interface NestedAggregation {
      /** Flattened list of aggregations, where each next aggregation is nested within previous one */
      nestedAggregations?: NestedAggregationItem[];
  }
  interface GroupByAggregation extends GroupByAggregationKindOneOf {
      /** Value aggregation configuration */
      value?: ValueAggregation;
      /** User-defined name of aggregation, should be unique, will appear in aggregation results */
      name?: string | null;
      /** Field to aggregate by */
      fieldPath?: string;
  }
  /** @oneof */
  interface GroupByAggregationKindOneOf {
      /** Value aggregation configuration */
      value?: ValueAggregation;
  }
  interface SearchDetails {
      /** Defines how separate search terms in `expression` are combined */
      mode?: Mode;
      /** Search term or expression */
      expression?: string | null;
      /** Fields to search in. If empty - will search in all searchable fields. Use dot notation to specify json path */
      fields?: string[];
      /** Flag if should use auto fuzzy search (allowing typos by a managed proximity algorithm) */
      fuzzy?: boolean;
  }
  enum Mode {
      /** Any of the search terms must be present */
      OR = "OR",
      /** All search terms must be present */
      AND = "AND"
  }
  interface CursorPaging$2 {
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
  interface SearchProductsResponse {
      /** Products which satisfy the provided query. */
      products?: Product[];
      /** Paging metadata. Contains cursor which can be used in next query. */
      pagingMetadata?: CursorPagingMetadata$2;
      /** Aggregation data. */
      aggregationData?: AggregationData;
  }
  interface CursorPagingMetadata$2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: Cursors$2;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$2 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface AggregationData {
      /** key = aggregation name (as derived from search request) */
      results?: AggregationResults[];
  }
  interface ValueAggregationResult {
      /** Value of the field */
      value?: string;
      /** Count of entities with this value */
      count?: number;
  }
  interface RangeAggregationResult {
      /** Inclusive lower bound of the range */
      from?: number | null;
      /** Exclusive upper bound of the range */
      to?: number | null;
      /** Count of entities in this range */
      count?: number;
  }
  interface NestedAggregationResults extends NestedAggregationResultsResultOneOf {
      /** Value aggregation results */
      values?: ValueResults;
      /** Range aggregation results */
      ranges?: RangeResults;
      /** Scalar aggregation results */
      scalar?: AggregationResultsScalarResult;
      /** User-defined name of aggregation, matches the one provided in request */
      name?: string;
      /** Type of aggregation that matches result */
      type?: AggregationType;
      /** Field to aggregate by, matches the one provided in request */
      fieldPath?: string;
  }
  /** @oneof */
  interface NestedAggregationResultsResultOneOf {
      /** Value aggregation results */
      values?: ValueResults;
      /** Range aggregation results */
      ranges?: RangeResults;
      /** Scalar aggregation results */
      scalar?: AggregationResultsScalarResult;
  }
  interface ValueResults {
      /** List of value aggregations */
      results?: ValueAggregationResult[];
  }
  interface RangeResults {
      /** List of ranges returned in same order as requested */
      results?: RangeAggregationResult[];
  }
  interface AggregationResultsScalarResult {
      /** Type of scalar aggregation */
      type?: ScalarType;
      /** Value of the scalar aggregation */
      value?: number;
  }
  interface NestedValueAggregationResult {
      /** Value of the field */
      value?: string;
      /** Nested aggregations */
      nestedResults?: NestedAggregationResults;
  }
  interface ValueResult {
      /** Value of the field */
      value?: string;
      /** Count of entities with this value */
      count?: number | null;
  }
  interface RangeResult {
      /** Inclusive lower bound of the range */
      from?: number | null;
      /** Exclusive upper bound of the range */
      to?: number | null;
      /** Count of entities in this range */
      count?: number | null;
  }
  interface ScalarResult {
      /** Value of the scalar aggregation */
      value?: number;
  }
  interface NestedResultValue extends NestedResultValueResultOneOf {
      /** Value aggregation result */
      value?: ValueResult;
      /** Range aggregation result */
      range?: RangeResult;
      /** Scalar aggregation result */
      scalar?: ScalarResult;
      /** Date histogram aggregation result */
      dateHistogram?: ValueResult;
  }
  /** @oneof */
  interface NestedResultValueResultOneOf {
      /** Value aggregation result */
      value?: ValueResult;
      /** Range aggregation result */
      range?: RangeResult;
      /** Scalar aggregation result */
      scalar?: ScalarResult;
      /** Date histogram aggregation result */
      dateHistogram?: ValueResult;
  }
  interface Results {
      /** List of nested aggregations */
      results?: Record<string, NestedResultValue>;
  }
  interface DateHistogramResult {
      /** Date in ISO 8601 format */
      value?: string;
      /** Count of documents in the bucket */
      count?: number;
  }
  interface GroupByValueResults {
      /** List of value aggregations */
      results?: NestedValueAggregationResult[];
  }
  interface DateHistogramResults {
      /** List of date histogram aggregations */
      results?: DateHistogramResult[];
  }
  /**
   * Results of `NESTED` aggregation type in a flattened form
   * aggregations in resulting array are keyed by requested aggregation `name`.
   */
  interface NestedResults {
      /** List of nested aggregations */
      results?: Results[];
  }
  interface AggregationResults extends AggregationResultsResultOneOf {
      /** Value aggregation results */
      values?: ValueResults;
      /** Range aggregation results */
      ranges?: RangeResults;
      /** Scalar aggregation results */
      scalar?: AggregationResultsScalarResult;
      /** Group by value aggregation results */
      groupedByValue?: GroupByValueResults;
      /** Date histogram aggregation results */
      dateHistogram?: DateHistogramResults;
      /** Nested aggregation results */
      nested?: NestedResults;
      /** User-defined name of aggregation as derived from search request */
      name?: string;
      /** Type of aggregation that must match provided kind as derived from search request */
      type?: AggregationType;
      /** Field to aggregate by as derived from search request */
      fieldPath?: string;
  }
  /** @oneof */
  interface AggregationResultsResultOneOf {
      /** Value aggregation results */
      values?: ValueResults;
      /** Range aggregation results */
      ranges?: RangeResults;
      /** Scalar aggregation results */
      scalar?: AggregationResultsScalarResult;
      /** Group by value aggregation results */
      groupedByValue?: GroupByValueResults;
      /** Date histogram aggregation results */
      dateHistogram?: DateHistogramResults;
      /** Nested aggregation results */
      nested?: NestedResults;
  }
  interface EventuallyConsistentQueryProductsRequest {
      /**
       * WQL expression. Please pay attention that unlike other arrays when you want to filter by `inventory`, `options` or `variants` instead of standard array operators you must use `$matchItems` (for usage see examples).
       * It means that product will be returned only if one or more items satisfy all filters specified in $matchItems.
       * For example, if you have 2 variants: one visible with price 10 and another one not visible with price 20, when inside $matchItems you specify `visible:true` and `price > 15` nothing will be returned because there are no variants which satisfy both conditions.
       * You still can use `$isEmpty` and `$exists` operators for fields listed above.
       * See examples to understand supported capabilities.
       */
      query?: CursorQuery$2;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NON_VISIBLE` permission or	`SCOPE.DC-STORES.MANAGE-PRODUCTS` permission scop required. */
      returnNonVisibleProducts?: boolean;
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
  interface EventuallyConsistentQueryProductsResponse {
      /** Products which satisfy the provided query. */
      products?: Product[];
      /** Paging metadata. Contains cursor which can be used in next query. */
      pagingMetadata?: CursorPagingMetadata$2;
  }
  interface QueryProductsRequest {
      /** WQL expression */
      query?: CursorQuery$2;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
      /**
       * Whether to return products with `visible:false`.
       * Default: false so only visible products will be in response.
       * When true `WIX_STORES.PRODUCT_READ_NON_VISIBLE` permission or `SCOPE.DC-STORES.MANAGE-PRODUCTS` permission scope required.
       */
      returnNonVisibleProducts?: boolean;
  }
  interface QueryProductsResponse {
      /** The retrieved Products */
      products?: Product[];
      /** Paging metadata. */
      pagingMetadata?: CursorPagingMetadata$2;
  }
  interface DeprecatedSearchProductsWithOffsetRequest {
      search?: PlatformOffsetSearch;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NON_VISIBLE` permission or `SCOPE.DC-STORES.MANAGE-PRODUCTS` permission scope permission required. */
      returnNonVisibleProducts?: boolean;
  }
  interface PlatformOffsetSearch extends PlatformOffsetSearchPagingMethodOneOf {
      /** Pointer to page of results using offset. Can not be used together with 'cursor_paging' */
      paging?: PlatformPaging;
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter?: Record<string, any> | null;
      /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
      sort?: Sorting$2[];
      /** Aggregations | Faceted search: refers to a way to explore large amounts of data by displaying summaries about various partitions of the data and later allowing to narrow the navigation to a specific partition. */
      aggregations?: Aggregation[];
      /** free text to match in searchable fields */
      search?: SearchDetails;
  }
  /** @oneof */
  interface PlatformOffsetSearchPagingMethodOneOf {
      /** Pointer to page of results using offset. Can not be used together with 'cursor_paging' */
      paging?: PlatformPaging;
  }
  interface PlatformPaging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface DeprecatedSearchProductsWithOffsetResponse {
      /** Products which satisfy the provided query. */
      products?: Product[];
      /** Paging metadata. */
      pagingMetadata?: PagingMetadata;
      /** Aggregation data. */
      aggregationData?: AggregationData;
  }
  interface PagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface CountProductsRequest {
      /**
       * A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf)
       * To understand supported filters and limitations see `SearchProducts` method.
       */
      filter?: Record<string, any> | null;
      /** free text to match in searchable fields */
      search?: SearchDetails;
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NON_VISIBLE` permission or `SCOPE.DC-STORES.MANAGE-PRODUCTS` permission scope required. */
      returnNonVisibleProducts?: boolean;
  }
  interface CountProductsResponse {
      count?: number;
  }
  interface DoNotCallBulkCreateProductsRequest {
      /** List of products to be created. */
      products?: Product[];
      /** Whether to return the full product entity in the response. */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. Relevant only if `return_entity` true. */
      fields?: RequestedFields$1[];
  }
  interface DoNotCallBulkCreateProductsResponse {
      /** Products created by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface DoNotCallBulkUpdateProductsRequest {
      /** List of products to be updated. */
      products?: MaskedProduct[];
      /** Whether to return the full product entity in the response. */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. Relevant only if `return_entity` true. */
      fields?: RequestedFields$1[];
  }
  interface MaskedProduct {
      /** product to be updated, may be partial. */
      product?: Product;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface DoNotCallBulkUpdateProductsResponse {
      /** Products updated by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkUpdateProductsByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "name": "value1",
       * "categoryIds":{"$in":["categoryId1", "categoryId2"]}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
      /** Product with new field values. */
      product: Product;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateProductsByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface BulkDeleteProductsRequest {
      /** IDs of products to be deleted. */
      productIds: string[];
  }
  interface BulkDeleteProductsResponse {
      /** Products deleted by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkDeleteProductsByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "basePriceRange.minValue": {"$lte": 5.99}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
  }
  interface BulkDeleteProductsByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface BulkAddInfoSectionsToProductsByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "basePriceRange.minValue": {"$lte": 5.99}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
      /** Info sections to be added */
      infoSectionIds: string[];
  }
  interface BulkAddInfoSectionsToProductsByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface BulkAddInfoSectionsToProductsRequest {
      /** Products to be updated with id and revision. */
      products: ProductIdWithRevision[];
      /**
       * Products to be updated with id and revision.
       * Info section to be added
       */
      infoSectionIds: string[];
      /** Whether to return all updated product entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  interface ProductIdWithRevision {
      /** ID of product. */
      productId?: string;
      /** The revision of the Product */
      revision?: string;
  }
  interface BulkAddInfoSectionsToProductsResponse {
      /** Products updated by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkRemoveInfoSectionsFromProductsByFilterRequest {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "name": "value1",
       * "categoryIds":{"$in":["categoryId1", "categoryId2"]}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter: Record<string, any> | null;
      /** Info sections to be removed */
      infoSectionIds: string[];
  }
  interface BulkRemoveInfoSectionsFromProductsByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface BulkRemoveInfoSectionsFromProductsRequest {
      /** Products to be updated with id and revision. */
      products: ProductIdWithRevision[];
      /** Info section to be removed. */
      infoSectionIds: string[];
      /** Whether to return all updated product entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  interface BulkRemoveInfoSectionsFromProductsResponse {
      /** Products updated by bulk action. */
      results?: BulkProductResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkUpdateVariantsByFilterRequest {
      /** Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains` */
      filter: Record<string, any> | null;
      /** Variant with new field values. */
      variant: Variant;
      /**
       * Explicit list of variant fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateVariantsByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  interface BulkAdjustVariantsByFilterRequest {
      /** Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$contains` */
      filter: Record<string, any> | null;
      /** The amount or percentage to change the variants price by */
      basePrice?: AdjustValue;
      /** The amount or percentage to change the variants sale price by */
      salePrice?: AdjustValue;
      /** The amount or percentage to change the variants cost by */
      cost?: AdjustValue;
      /**
       * Set variant sale price from base price by applying provided discount to it.
       * For example variant base price 100$, variant sale price 95$, requested `sale_price_from_base_price.percentage` is 10, then old sale price ignored and new sale price set to 90 (100$ - 10%)
       */
      salePriceFromBasePrice?: UnsignedAdjustValue;
      /** Defines rounding strategy of new calculated prices. Default: CURRENCY_PRECISION. */
      rounding?: RoundingStrategy;
  }
  interface AdjustValue extends AdjustValueAdjustValueOneOf {
      /** A decimal value to increase or reduce from the original value, can be negative. */
      amount?: string;
      /** The percentage value to increase or reduce from the current value, can be negative. */
      percentage?: number;
  }
  /** @oneof */
  interface AdjustValueAdjustValueOneOf {
      /** A decimal value to increase or reduce from the original value, can be negative. */
      amount?: string;
      /** The percentage value to increase or reduce from the current value, can be negative. */
      percentage?: number;
  }
  interface UnsignedAdjustValue extends UnsignedAdjustValueAdjustValueOneOf {
      /** A decimal value to reduce from the original value. */
      amount?: string;
      /** The percentage value to reduce from the original value. */
      percentage?: number;
  }
  /** @oneof */
  interface UnsignedAdjustValueAdjustValueOneOf {
      /** A decimal value to reduce from the original value. */
      amount?: string;
      /** The percentage value to reduce from the original value. */
      percentage?: number;
  }
  enum RoundingStrategy {
      UNKNOWN_ROUNDING_STRATEGY = "UNKNOWN_ROUNDING_STRATEGY",
      /**
       * Calculated prices will be saved without rounding to keep max possible precision. It's still good idea to round numbers before displaying them.
       * Example: input $3.5555 -> saved value $3.5555
       */
      NO_ROUNDING = "NO_ROUNDING",
      /**
       * Calculated prices will be rounded according to currency precision.
       * Example: input $3.5555 -> saved value $3.56, input ¥3.5555 -> saved value ¥4
       */
      CURRENCY_PRECISION = "CURRENCY_PRECISION",
      /**
       * Calculated prices will be rounded to nearest whole number.
       * Example: input $3.5555 -> saved value $4
       */
      NEAREST_WHOLE_NUMBER = "NEAREST_WHOLE_NUMBER"
  }
  interface BulkAdjustVariantsByFilterResponse {
      /** Token that can be used to query "AsyncJobService" */
      jobId?: string;
  }
  /**
   * Creates a new Product with ribbon, brand, info sections, options/modifiers and inventory.
   *
   * Permissions: Requires app to be authorized with one of following permission scopes: `SCOPE.STORES.CATALOG_PRODUCT_CREATE`, `SCOPE.STORES.MANAGE-STORES`, `SCOPE.DC-STORES.MANAGE-PRODUCTS`, `SCOPE.POS.MANAGE-PRODUCTS-COLLECTIONS`, `SCOPE.STORES.MANAGE-STORES` or `SCOPE.STORES.MANAGE-STORES-LIMITED`.
   * @param product - Product to be created.
   * At least one variant must be provided and each variant must have relevant item in `choices` field for every item in `options`.
   * In case if `options` is empty one default variant must be provided with empty `choices` list.
   * @internal
   * @documentationMaturity preview
   * @requiredField product
   * @requiredField product.media.items
   * @requiredField product.modifiers.choicesSettings.choices
   * @requiredField product.name
   * @requiredField product.options.choicesSettings.choices
   * @requiredField product.physicalProperties.pricePerUnit.measurementUnit
   * @requiredField product.productType
   * @requiredField product.subscriptionDetails.subscriptions
   * @requiredField product.subscriptionDetails.subscriptions.discount
   * @requiredField product.subscriptionDetails.subscriptions.discount.type
   * @requiredField product.subscriptionDetails.subscriptions.frequency
   * @requiredField product.subscriptionDetails.subscriptions.title
   * @adminMethod
   * @returns The created Product
   */
  function catalogCreateProduct(product: ProductComposite, options?: CatalogCreateProductOptions): Promise<Product>;
  interface CatalogCreateProductOptions {
      /** Whether to return the full product, variant and inventory entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  /**
   * Update a Product, supports partial update.
   * Pass the latest `revision` for a successful update.
   * If you don't need to update product's `options`, `variants` and `inventory` you can stop reading.
   *
   * If product `options` updated then `variants` must be provided.
   * If `variants` provided they will replace all variants for given product.
   * If you want update existing variant make sure to provide `id` with new data. If `id` field isn't provided then new variants with new ID will be created.
   * If you don't want to update variants omit `variants` field.
   * If you don't want to update inventory items don't provide `inventoryItem` for any variants. In such case for existing variants (with variant.id provided) inventory won't change but all new variants without ids will be out of stock.
   * If you provide at least one inventory item inventory will be updated for all variants, variants for which you don't provide inventoryItem considered out of stock.
   *
   * Scopes: Requires app to be authorized with one of following permission scopes: `SCOPE.STORES.CATALOG_PRODUCT_UPDATE`, `SCOPE.STORES.MANAGE-STORES`, `SCOPE.DC-STORES.MANAGE-PRODUCTS`, `SCOPE.POS.MANAGE-PRODUCTS-COLLECTIONS`, `SCOPE.STORES.MANAGE-STORES` or `	SCOPE.STORES.MANAGE-STORES-LIMITED`.
   * @param _id - Product ID. Auto-generated on product creation.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField product
   * @requiredField product.media.items
   * @requiredField product.modifiers.choicesSettings.choices
   * @requiredField product.options.choicesSettings.choices
   * @requiredField product.physicalProperties.pricePerUnit.measurementUnit
   * @requiredField product.revision
   * @requiredField product.subscriptionDetails.subscriptions
   * @requiredField product.subscriptionDetails.subscriptions.discount
   * @requiredField product.subscriptionDetails.subscriptions.discount.type
   * @requiredField product.subscriptionDetails.subscriptions.frequency
   * @requiredField product.subscriptionDetails.subscriptions.title
   * @adminMethod
   * @returns The updated Product
   */
  function catalogUpdateProduct(_id: string | null, product: CatalogUpdateProduct, options?: CatalogUpdateProductOptions): Promise<Product>;
  interface CatalogUpdateProduct {
      /** Physical properties, can be provided only when `product_type` is PHYSICAL */
      physicalProperties?: PhysicalProperties;
      /**
       * Product ID. Auto-generated on product creation.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /** Product name. Translatable. */
      name?: string | null;
      /**
       * A permanent, friendly URL name.
       * If not provided, on create generated automatically.
       * When provided, validated and must be unique.
       */
      slug?: string | null;
      /**
       * Optional - Product description which supports rich content.
       * In order to use this field you have to integrate with "Ricos" on frontend side. To learn how to do it visit https://ricos.js.org/.
       * @internal
       */
      description?: RichContent;
      /**
       * Optional - RichContent description converted to html.
       * If provided on write: this description must be a valid html and converted to RichContent description.
       * It is ignored if provided along with RichContent description.
       * > **Note:** This field is returned by the API only when you pass `fields: "PLAIN_DESCRIPTION"` in a request.
       */
      plainDescription?: string | null;
      /** Whether the product is visible to site visitors in Online Stores. Default: `true` */
      visible?: boolean | null;
      /**
       * Whether the product is visible in POS (point of sale app). Default: `true` for productType PHYSICAL.
       * Note: productType DIGITAL is not supported in POS so for such products it's always `false` and it's not allowed to change it.
       */
      visibleInPos?: boolean | null;
      /** Media items (images, videos etc) associated with this product. */
      media?: Media;
      /** Custom SEO data for the product. */
      seoData?: SeoSchema;
      /** Tax group id */
      taxGroupId?: string | null;
      /**
       * Product options. Allows buyer to customize product, e.g. select Color, Size and so on.
       * Always generates variants: every variant must have exactly one choice related to each option.
       * Since options and variants tightly coupled and rely on each other they usually should be provided together in all operations.
       * For existing options and choices provide ids only, all other data (e.g. names, title, types and so on) will be resolved for you by ids.
       * If you don't have ids it's ok to omit them but provide all other data instead. For existing options ids will be resolved, not existing options will be created.
       * *None*: you cannot change name of existing option via this endpoint but you can do it by calling CustomizationService
       */
      options?: ConnectedOption[];
      /**
       * Product Modifiers. Allows buyer to customize product, e.g. select Color, Size and so on similarly to `options` but with one main difference - `modifiers` never generate any variants.
       * For existing modifiers and choices provide ids only, all other data (e.g. names, title, types and so on) will be resolved for you by ids.
       * If you don't have ids it's ok to omit them but provide all other data instead. For existing modifiers ids will be resolved, not existing modifiers will be created.
       * *None*: you cannot change name of existing modifier via this endpoint by passing id and changed name, if you pass id name will be ignored. If you want to update existing modifier name do it by calling CustomizationService
       */
      modifiers?: ConnectedModifier[];
      /**
       * Optional - Brand. To assign existing brand to product provide `brand.id`.
       * If you provide `brand.name` only then if brand with such name already exits it will be assigned, otherwise new brand will be created.
       * *None*: you cannot change name of existing brand via this endpoint but you can do it by calling BrandService.
       */
      brand?: Brand;
      /**
       * Product info sections.
       * To assign existing info section to product provide `infoSections.id` or `infoSections.uniqueName`.
       * To create new info section provide `uniqueName`, `title` and `description`
       * *None*: you cannot change name of existing brand via this endpoint but you can do it by calling BrandService.
       */
      infoSections?: InfoSection[];
      /**
       * Product ribbon. To assign existing ribbon to product provide `ribbon.id`.
       * If you provide `ribbon.name` only then if ribbon with such name already exits it will be assigned, otherwise new ribbon will be created.
       * *None*: you cannot change name of existing ribbon via this endpoint but you can do it by calling RibbonService.
       */
      ribbon?: Ribbon$1;
      /**
       * Main category id. If product belongs to more than one category main category defines `breadcrumbs` on product page.
       * By default first category from `category_ids` list. Provided value MUST be in `category_ids`
       * Can be empty only in case if product doesn't belong to any category.
       */
      mainCategoryId?: string | null;
      /** Product type. Affects which properties product has. Also defines type of variants which allowed to be associated with this product. Product type must be provided on creation and cannot be changed. */
      productType?: ProductType;
      /**
       * List of related variants.
       * On create request at least one variant must be provided.
       * On update product request if you wish to update variants you must pass all of them with together with product options.
       * Partial update of variants is not supported.
       * If you want to update existing variant you must provide `id`, otherwise new variant with different id will be created which might break some integrations that rely on variant ids.
       */
      variants?: VariantComposite[];
      /**
       * Info about product variants.
       * Required in update request if `options` provided and vice verse: if `variants_info` provided then `options` also required.
       * > **Note:** This field is returned only when you pass `fields: "VARIANTS_INFO"` in the request.
       */
      variantsInfo?: VariantsInfo;
      subscription?: Subscription;
      /**
       * Not yet implemented, will later replace subscription.
       * Product subscription based purchases.
       */
      subscriptionDetails?: SubscriptionDetails;
  }
  interface CatalogUpdateProductOptions {
      /**
       * Explicit list of fields to update in product
       * @internal
       */
      fieldMask?: string[];
      /** Whether to return the variant and inventory entities in the response. Relevant only if variants and inventory were provided in request. Otherwise this parameter will be ignored. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  /**
   * Scopes: Requires app to be authorized with one of following permission scopes: `SCOPE.STORES.CATALOG_PRODUCT_CREATE`, `SCOPE.STORES.MANAGE-STORES`, `SCOPE.DC-STORES.MANAGE-PRODUCTS`, `SCOPE.POS.MANAGE-PRODUCTS-COLLECTIONS`, `SCOPE.STORES.MANAGE-STORES` or `	SCOPE.STORES.MANAGE-STORES-LIMITED`.
   * @param products - List of products to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField products
   * @requiredField products.media.items
   * @requiredField products.modifiers.choicesSettings.choices
   * @requiredField products.name
   * @requiredField products.options.choicesSettings.choices
   * @requiredField products.physicalProperties.pricePerUnit.measurementUnit
   * @requiredField products.productType
   * @requiredField products.subscriptionDetails.subscriptions
   * @requiredField products.subscriptionDetails.subscriptions.discount
   * @requiredField products.subscriptionDetails.subscriptions.discount.type
   * @requiredField products.subscriptionDetails.subscriptions.frequency
   * @requiredField products.subscriptionDetails.subscriptions.title
   * @adminMethod
   */
  function catalogBulkCreateProducts(products: ProductComposite[], options?: CatalogBulkCreateProductsOptions): Promise<BulkCreateProductsResponse>;
  interface CatalogBulkCreateProductsOptions {
      /** Whether to return the full product, variant and inventory entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  /**
   * Bulk update up to 100 products. Can return partial success.
   * If you need to update product's `options`, variants or inventory please read carefully description of UpdateProduct method, same logic applied here.
   *
   * Limitations. In one request you can pass limited number of entities in total for all products:
   * - options - 100
   * - modifiers - 100
   * - infoSections - 100
   * - variants - 1000
   * For example, you can update 100 products with up to 10 variants in each (100*10 = 1000) or one product with 1000 variants.
   *
   * Scopes: Requires app to be authorized with one of following permission scopes: `SCOPE.STORES.CATALOG_PRODUCT_UPDATE`, `SCOPE.STORES.MANAGE-STORES`, `SCOPE.DC-STORES.MANAGE-PRODUCTS`, `SCOPE.POS.MANAGE-PRODUCTS-COLLECTIONS`, `SCOPE.STORES.MANAGE-STORES` or `	SCOPE.STORES.MANAGE-STORES-LIMITED`.
   * @param products - List of products to be updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField products
   * @requiredField products.product
   * @requiredField products.product._id
   * @requiredField products.product.media.items
   * @requiredField products.product.modifiers.choicesSettings.choices
   * @requiredField products.product.options.choicesSettings.choices
   * @requiredField products.product.physicalProperties.pricePerUnit.measurementUnit
   * @requiredField products.product.revision
   * @requiredField products.product.subscriptionDetails.subscriptions
   * @requiredField products.product.subscriptionDetails.subscriptions.discount
   * @requiredField products.product.subscriptionDetails.subscriptions.discount.type
   * @requiredField products.product.subscriptionDetails.subscriptions.frequency
   * @requiredField products.product.subscriptionDetails.subscriptions.title
   * @adminMethod
   */
  function catalogBulkUpdateProducts(products: MaskedProductComposite[], options?: CatalogBulkUpdateProductsOptions): Promise<BulkUpdateProductsResponse>;
  interface CatalogBulkUpdateProductsOptions {
      /** Whether to return the full product entity in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  /**
   * Adds filtered products to categories
   * Works best when many products are added to a small number of categories
   * Can be partially successful
   * Async method, returns job_id which can be used to retrieve results.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "basePriceRange.minValue": {"$lte": 5.99}
   * }`
   * See all available operators here: dev.wix.com/docs/rest/articles/getting-started/api-query-language#the-filter-section
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options
   * @requiredField options.categoryIds
   * @adminMethod
   */
  function bulkAddProductsToCategoriesByFilter(filter: Record<string, any> | null, options: BulkAddProductsToCategoriesByFilterOptions): Promise<BulkAddProductsToCategoriesByFilterResponse>;
  interface BulkAddProductsToCategoriesByFilterOptions {
      /** Categories to which all filtered products will be added. */
      categoryIds: string[];
  }
  /**
   * Removes filtered products from categories
   * Works best when many products are added to a small number of categories
   * Can be partially successful
   * Async method, returns job_id which can be used to retrieve results.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "basePriceRange.minValue": {"$lte": 5.99}
   * }`
   * See all available operators here: dev.wix.com/docs/rest/articles/getting-started/api-query-language#the-filter-section
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options
   * @requiredField options.categoryIds
   * @adminMethod
   */
  function bulkRemoveProductsFromCategoriesByFilter(filter: Record<string, any> | null, options: BulkRemoveProductsFromCategoriesByFilterOptions): Promise<BulkRemoveProductsFromCategoriesByFilterResponse>;
  interface BulkRemoveProductsFromCategoriesByFilterOptions {
      /** Categories to which all products which match the filter will be added. */
      categoryIds: string[];
  }
  /**
   * Get a Product by id. If product exist but has `visible:false` it will be returned only if caller has additional permission `WIX_STORES.PRODUCT_READ_ADMIN`, otherwise NOT_FOUND error will be thrown.
   * @param productId - Id of the Product to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField productId
   * @returns The retrieved Product
   */
  function getProduct(productId: string, options?: GetProductOptions): Promise<Product>;
  interface GetProductOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
      /**
       * Indicates if the read should be done consistent or not. Default is false
       * @internal
       */
      consistent?: boolean | null;
  }
  /**
   * Retrieves product by slug. If product exist but has `visible:false` it will be returned only if caller has additional permission `WIX_STORES.PRODUCT_READ_NON_VISIBLE` or `	SCOPE.DC-STORES.MANAGE-PRODUCTS` permission scope, otherwise NOT_FOUND error will be thrown.
   * @param slug - Product slug. A permanent, friendly URL name unique per store.
   * @internal
   * @documentationMaturity preview
   * @requiredField slug
   */
  function getProductBySlug(slug: string, options?: GetProductBySlugOptions): Promise<GetProductBySlugResponse>;
  interface GetProductBySlugOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  /**
   * Delete a Product and all related variants
   * @param productId - Id of the Product to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField productId
   * @adminMethod
   */
  function deleteProduct(productId: string): Promise<void>;
  /**
   * Search Products using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   */
  function searchProducts(options?: SearchProductsOptions): Promise<SearchProductsResponse>;
  interface SearchProductsOptions {
      /**
       * WQL expression. Please pay attention that unlike other arrays when you want to filter by `inventory` or `variants` instead of standard array operators you must use `$matchItems` (for usage see examples).
       * It means that product will be returned only if one or more items satisfy all filters specified in $matchItems.
       * For example, if you have 2 variants: one visible with price 10 and another one not visible with price 20, when inside $matchItems you specify `visible:true` and `price > 15` nothing will be returned because there are no variants which satisfy both conditions.
       * You still can use `$isEmpty` and `$exists` operators for fields listed above.
       * See examples to understand supported capabilities.
       */
      search?: CursorSearch;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NON_VISIBLE` permission or	`SCOPE.DC-STORES.MANAGE-PRODUCTS` permission scope required. */
      returnNonVisibleProducts?: boolean;
  }
  /** @internal
   * @documentationMaturity preview
   */
  function eventuallyConsistentQueryProducts(options?: EventuallyConsistentQueryProductsOptions): Promise<EventuallyConsistentQueryProductsResponse>;
  interface EventuallyConsistentQueryProductsOptions {
      /**
       * WQL expression. Please pay attention that unlike other arrays when you want to filter by `inventory`, `options` or `variants` instead of standard array operators you must use `$matchItems` (for usage see examples).
       * It means that product will be returned only if one or more items satisfy all filters specified in $matchItems.
       * For example, if you have 2 variants: one visible with price 10 and another one not visible with price 20, when inside $matchItems you specify `visible:true` and `price > 15` nothing will be returned because there are no variants which satisfy both conditions.
       * You still can use `$isEmpty` and `$exists` operators for fields listed above.
       * See examples to understand supported capabilities.
       */
      query?: CursorQuery$2;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NON_VISIBLE` permission or	`SCOPE.DC-STORES.MANAGE-PRODUCTS` permission scop required. */
      returnNonVisibleProducts?: boolean;
  }
  /**
   * Query Products using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language). Use instead of Search when eventually consistent data is not acceptable
   * @internal
   * @documentationMaturity preview
   */
  function queryProducts(options?: QueryProductsOptions): ProductsQueryBuilder;
  interface QueryProductsOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[] | undefined;
      /**
       * Whether to return products with `visible:false`.
       * Default: false so only visible products will be in response.
       * When true `WIX_STORES.PRODUCT_READ_NON_VISIBLE` permission or `SCOPE.DC-STORES.MANAGE-PRODUCTS` permission scope required.
       */
      returnNonVisibleProducts?: boolean | undefined;
  }
  interface QueryCursorResult$2 {
      cursors: Cursors$2;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ProductsQueryResult extends QueryCursorResult$2 {
      items: Product[];
      query: ProductsQueryBuilder;
      next: () => Promise<ProductsQueryResult>;
      prev: () => Promise<ProductsQueryResult>;
  }
  interface ProductsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'slug' | 'options.id', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'slug' | 'options.id', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'slug' | 'options.id', value: string) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'slug' | 'options.id', value: any[]) => ProductsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'slug' | 'options.id', value: any) => ProductsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'slug' | 'options.id', value: boolean) => ProductsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_createdDate' | '_updatedDate'>) => ProductsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_createdDate' | '_updatedDate'>) => ProductsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ProductsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ProductsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ProductsQueryResult>;
  }
  /**
   * Returns total count of products satisfying filter and/or search
   * @internal
   * @documentationMaturity preview
   */
  function countProducts(options?: CountProductsOptions): Promise<CountProductsResponse>;
  interface CountProductsOptions {
      /**
       * A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf)
       * To understand supported filters and limitations see `SearchProducts` method.
       */
      filter?: Record<string, any> | null;
      /** free text to match in searchable fields */
      search?: SearchDetails;
      /** Whether to return products with `visible:false`. Default: false so only visible products will be in response. When true `WIX_STORES.PRODUCT_READ_NON_VISIBLE` permission or `SCOPE.DC-STORES.MANAGE-PRODUCTS` permission scope required. */
      returnNonVisibleProducts?: boolean;
  }
  /**
   * Bulk update products by filter.
   * Async method with returns job_id which can be used to retrieve update results.
   * Can be partially successful.
   * Doesn't require revision and don't use optimistic locking.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "name": "value1",
   * "categoryIds":{"$in":["categoryId1", "categoryId2"]}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options.product
   * @requiredField options.product.media.items
   * @requiredField options.product.modifiers.choicesSettings.choices
   * @requiredField options.product.options.choicesSettings.choices
   * @requiredField options.product.physicalProperties.pricePerUnit.measurementUnit
   * @requiredField options.product.subscriptionDetails.subscriptions
   * @requiredField options.product.subscriptionDetails.subscriptions.discount
   * @requiredField options.product.subscriptionDetails.subscriptions.discount.type
   * @requiredField options.product.subscriptionDetails.subscriptions.frequency
   * @requiredField options.product.subscriptionDetails.subscriptions.title
   * @adminMethod
   */
  function bulkUpdateProductsByFilter(filter: Record<string, any> | null, options?: BulkUpdateProductsByFilterOptions): Promise<BulkUpdateProductsByFilterResponse>;
  interface BulkUpdateProductsByFilterOptions {
      /** Product with new field values. */
      product: Product;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes up to 100 products with variants.
   * @param productIds - IDs of products to be deleted.
   * @internal
   * @documentationMaturity preview
   * @requiredField productIds
   * @adminMethod
   */
  function bulkDeleteProducts(productIds: string[]): Promise<BulkDeleteProductsResponse>;
  /**
   * Delete multiple products which satisfy the provided filter.
   * Async method with returns job_id which can be used to retrieve results.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "basePriceRange.minValue": {"$lte": 5.99}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @adminMethod
   */
  function bulkDeleteProductsByFilter(filter: Record<string, any> | null): Promise<BulkDeleteProductsByFilterResponse>;
  /**
   * Adds info sections to the end of info sections list of multiple products which satisfy filter.
   * Can be partially successful.
   * Async method, returns job_id which can be used to retrieve results.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "basePriceRange.minValue": {"$lte": 5.99}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options
   * @requiredField options.infoSectionIds
   * @adminMethod
   */
  function bulkAddInfoSectionsToProductsByFilter(filter: Record<string, any> | null, options: BulkAddInfoSectionsToProductsByFilterOptions): Promise<BulkAddInfoSectionsToProductsByFilterResponse>;
  interface BulkAddInfoSectionsToProductsByFilterOptions {
      /** Info sections to be added */
      infoSectionIds: string[];
  }
  /**
   * Adds info sections to the end of info sections list of multiple products.
   * Can be partially successful.
   * @param products - Products to be updated with id and revision.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.infoSectionIds
   * @requiredField products
   * @adminMethod
   */
  function bulkAddInfoSectionsToProducts(products: ProductIdWithRevision[], options?: BulkAddInfoSectionsToProductsOptions): Promise<BulkAddInfoSectionsToProductsResponse>;
  interface BulkAddInfoSectionsToProductsOptions {
      /**
       * Products to be updated with id and revision.
       * Info section to be added
       */
      infoSectionIds: string[];
      /** Whether to return all updated product entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  /**
   * Removes info sections from info sections list of multiple products which satisfy filter.
   * Can be partially successful.
   * Async method, returns job_id which can be used to retrieve results.
   * @param filter - Filter object in the following format:
   * `"filter" : {
   * "name": "value1",
   * "categoryIds":{"$in":["categoryId1", "categoryId2"]}
   * }`
   * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options
   * @requiredField options.infoSectionIds
   * @adminMethod
   */
  function bulkRemoveInfoSectionsFromProductsByFilter(filter: Record<string, any> | null, options: BulkRemoveInfoSectionsFromProductsByFilterOptions): Promise<BulkRemoveInfoSectionsFromProductsByFilterResponse>;
  interface BulkRemoveInfoSectionsFromProductsByFilterOptions {
      /** Info sections to be removed */
      infoSectionIds: string[];
  }
  /**
   * Removes info sections from info sections list of multiple products.
   * Can be partially successful.
   * @param products - Products to be updated with id and revision.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.infoSectionIds
   * @requiredField products
   * @adminMethod
   */
  function bulkRemoveInfoSectionsFromProducts(products: ProductIdWithRevision[], options?: BulkRemoveInfoSectionsFromProductsOptions): Promise<BulkRemoveInfoSectionsFromProductsResponse>;
  interface BulkRemoveInfoSectionsFromProductsOptions {
      /** Info section to be removed. */
      infoSectionIds: string[];
      /** Whether to return all updated product entities in the response. Default: false */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields$1[];
  }
  /**
   * Update multiple variants which satisfy the provided product filter and meet the following conditions:
   * + `typed_properties` of variants must correlate with `product_type`.
   * + `typed_properties.price_per_unit.measurement_unit` of product and variant must be aligned.
   * Only "visible", "price", "revenueDetails.cost" and "physicalOptions" update is supported.
   * Async method that returns job_id which can be used to retrieve update results.
   * Can be partially successful.
   * Doesn't require revision and don't use optimistic locking.
   * @param filter - Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @requiredField options.variant
   * @adminMethod
   */
  function bulkUpdateVariantsByFilter(filter: Record<string, any> | null, options?: BulkUpdateVariantsByFilterOptions): Promise<BulkUpdateVariantsByFilterResponse>;
  interface BulkUpdateVariantsByFilterOptions {
      /** Variant with new field values. */
      variant: Variant;
      /**
       * Explicit list of variant fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Adjust the price and cost of multiple variants, which satisfy the provided product filter.
   * Allowed actions: Increase/reduce price, sale price and cost of goods by amount or by percentage,
   * To set a exact new value for multiple variants, use BulkUpdateVariantsByFilter.
   * @param filter - Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$contains`
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @adminMethod
   */
  function bulkAdjustVariantsByFilter(filter: Record<string, any> | null, options?: BulkAdjustVariantsByFilterOptions): Promise<BulkAdjustVariantsByFilterResponse>;
  interface BulkAdjustVariantsByFilterOptions {
      /** The amount or percentage to change the variants price by */
      basePrice?: AdjustValue;
      /** The amount or percentage to change the variants sale price by */
      salePrice?: AdjustValue;
      /** The amount or percentage to change the variants cost by */
      cost?: AdjustValue;
      /**
       * Set variant sale price from base price by applying provided discount to it.
       * For example variant base price 100$, variant sale price 95$, requested `sale_price_from_base_price.percentage` is 10, then old sale price ignored and new sale price set to 90 (100$ - 10%)
       */
      salePriceFromBasePrice?: UnsignedAdjustValue;
      /** Defines rounding strategy of new calculated prices. Default: CURRENCY_PRECISION. */
      rounding?: RoundingStrategy;
  }
  
  type storesCatalogV3Product_universal_d_Product = Product;
  type storesCatalogV3Product_universal_d_ProductTypedPropertiesOneOf = ProductTypedPropertiesOneOf;
  type storesCatalogV3Product_universal_d_RichContent = RichContent;
  type storesCatalogV3Product_universal_d_Node = Node;
  type storesCatalogV3Product_universal_d_NodeDataOneOf = NodeDataOneOf;
  type storesCatalogV3Product_universal_d_NodeType = NodeType;
  const storesCatalogV3Product_universal_d_NodeType: typeof NodeType;
  type storesCatalogV3Product_universal_d_NodeStyle = NodeStyle;
  type storesCatalogV3Product_universal_d_ButtonData = ButtonData;
  type storesCatalogV3Product_universal_d_Border = Border;
  type storesCatalogV3Product_universal_d_Colors = Colors;
  type storesCatalogV3Product_universal_d_PluginContainerData = PluginContainerData;
  type storesCatalogV3Product_universal_d_WidthType = WidthType;
  const storesCatalogV3Product_universal_d_WidthType: typeof WidthType;
  type storesCatalogV3Product_universal_d_PluginContainerDataWidth = PluginContainerDataWidth;
  type storesCatalogV3Product_universal_d_PluginContainerDataWidthDataOneOf = PluginContainerDataWidthDataOneOf;
  type storesCatalogV3Product_universal_d_PluginContainerDataAlignment = PluginContainerDataAlignment;
  const storesCatalogV3Product_universal_d_PluginContainerDataAlignment: typeof PluginContainerDataAlignment;
  type storesCatalogV3Product_universal_d_Spoiler = Spoiler;
  type storesCatalogV3Product_universal_d_Height = Height;
  type storesCatalogV3Product_universal_d_Type = Type;
  const storesCatalogV3Product_universal_d_Type: typeof Type;
  type storesCatalogV3Product_universal_d_Styles = Styles;
  type storesCatalogV3Product_universal_d_Link = Link;
  type storesCatalogV3Product_universal_d_LinkDataOneOf = LinkDataOneOf;
  type storesCatalogV3Product_universal_d_Target = Target;
  const storesCatalogV3Product_universal_d_Target: typeof Target;
  type storesCatalogV3Product_universal_d_Rel = Rel;
  type storesCatalogV3Product_universal_d_CodeBlockData = CodeBlockData;
  type storesCatalogV3Product_universal_d_TextStyle = TextStyle;
  type storesCatalogV3Product_universal_d_TextAlignment = TextAlignment;
  const storesCatalogV3Product_universal_d_TextAlignment: typeof TextAlignment;
  type storesCatalogV3Product_universal_d_DividerData = DividerData;
  type storesCatalogV3Product_universal_d_LineStyle = LineStyle;
  const storesCatalogV3Product_universal_d_LineStyle: typeof LineStyle;
  type storesCatalogV3Product_universal_d_Width = Width;
  const storesCatalogV3Product_universal_d_Width: typeof Width;
  type storesCatalogV3Product_universal_d_Alignment = Alignment;
  const storesCatalogV3Product_universal_d_Alignment: typeof Alignment;
  type storesCatalogV3Product_universal_d_FileData = FileData;
  type storesCatalogV3Product_universal_d_ViewMode = ViewMode;
  const storesCatalogV3Product_universal_d_ViewMode: typeof ViewMode;
  type storesCatalogV3Product_universal_d_FileSource = FileSource;
  type storesCatalogV3Product_universal_d_FileSourceDataOneOf = FileSourceDataOneOf;
  type storesCatalogV3Product_universal_d_PDFSettings = PDFSettings;
  type storesCatalogV3Product_universal_d_GalleryData = GalleryData;
  type storesCatalogV3Product_universal_d_V1Media = V1Media;
  type storesCatalogV3Product_universal_d_Image = Image;
  type storesCatalogV3Product_universal_d_Video = Video;
  type storesCatalogV3Product_universal_d_Item = Item;
  type storesCatalogV3Product_universal_d_ItemDataOneOf = ItemDataOneOf;
  type storesCatalogV3Product_universal_d_GalleryOptions = GalleryOptions;
  type storesCatalogV3Product_universal_d_LayoutType = LayoutType;
  const storesCatalogV3Product_universal_d_LayoutType: typeof LayoutType;
  type storesCatalogV3Product_universal_d_Orientation = Orientation;
  const storesCatalogV3Product_universal_d_Orientation: typeof Orientation;
  type storesCatalogV3Product_universal_d_Crop = Crop;
  const storesCatalogV3Product_universal_d_Crop: typeof Crop;
  type storesCatalogV3Product_universal_d_ThumbnailsAlignment = ThumbnailsAlignment;
  const storesCatalogV3Product_universal_d_ThumbnailsAlignment: typeof ThumbnailsAlignment;
  type storesCatalogV3Product_universal_d_Layout = Layout;
  type storesCatalogV3Product_universal_d_ItemStyle = ItemStyle;
  type storesCatalogV3Product_universal_d_Thumbnails = Thumbnails;
  type storesCatalogV3Product_universal_d_GIFData = GIFData;
  type storesCatalogV3Product_universal_d_GIF = GIF;
  type storesCatalogV3Product_universal_d_HeadingData = HeadingData;
  type storesCatalogV3Product_universal_d_HTMLData = HTMLData;
  type storesCatalogV3Product_universal_d_HTMLDataDataOneOf = HTMLDataDataOneOf;
  type storesCatalogV3Product_universal_d_Source = Source;
  const storesCatalogV3Product_universal_d_Source: typeof Source;
  type storesCatalogV3Product_universal_d_ImageData = ImageData;
  type storesCatalogV3Product_universal_d_LinkPreviewData = LinkPreviewData;
  type storesCatalogV3Product_universal_d_MapData = MapData;
  type storesCatalogV3Product_universal_d_MapSettings = MapSettings;
  type storesCatalogV3Product_universal_d_MapType = MapType;
  const storesCatalogV3Product_universal_d_MapType: typeof MapType;
  type storesCatalogV3Product_universal_d_ParagraphData = ParagraphData;
  type storesCatalogV3Product_universal_d_PollData = PollData;
  type storesCatalogV3Product_universal_d_ViewRole = ViewRole;
  const storesCatalogV3Product_universal_d_ViewRole: typeof ViewRole;
  type storesCatalogV3Product_universal_d_VoteRole = VoteRole;
  const storesCatalogV3Product_universal_d_VoteRole: typeof VoteRole;
  type storesCatalogV3Product_universal_d_Permissions = Permissions;
  type storesCatalogV3Product_universal_d_Option = Option;
  type storesCatalogV3Product_universal_d_PollSettings = PollSettings;
  type storesCatalogV3Product_universal_d_PollLayoutType = PollLayoutType;
  const storesCatalogV3Product_universal_d_PollLayoutType: typeof PollLayoutType;
  type storesCatalogV3Product_universal_d_PollLayoutDirection = PollLayoutDirection;
  const storesCatalogV3Product_universal_d_PollLayoutDirection: typeof PollLayoutDirection;
  type storesCatalogV3Product_universal_d_PollLayout = PollLayout;
  type storesCatalogV3Product_universal_d_OptionLayout = OptionLayout;
  type storesCatalogV3Product_universal_d_BackgroundType = BackgroundType;
  const storesCatalogV3Product_universal_d_BackgroundType: typeof BackgroundType;
  type storesCatalogV3Product_universal_d_Gradient = Gradient;
  type storesCatalogV3Product_universal_d_Background = Background;
  type storesCatalogV3Product_universal_d_BackgroundBackgroundOneOf = BackgroundBackgroundOneOf;
  type storesCatalogV3Product_universal_d_PollDesign = PollDesign;
  type storesCatalogV3Product_universal_d_OptionDesign = OptionDesign;
  type storesCatalogV3Product_universal_d_Poll = Poll;
  type storesCatalogV3Product_universal_d_PollDataLayout = PollDataLayout;
  type storesCatalogV3Product_universal_d_Design = Design;
  type storesCatalogV3Product_universal_d_TextData = TextData;
  type storesCatalogV3Product_universal_d_Decoration = Decoration;
  type storesCatalogV3Product_universal_d_DecorationDataOneOf = DecorationDataOneOf;
  type storesCatalogV3Product_universal_d_DecorationType = DecorationType;
  const storesCatalogV3Product_universal_d_DecorationType: typeof DecorationType;
  type storesCatalogV3Product_universal_d_AnchorData = AnchorData;
  type storesCatalogV3Product_universal_d_ColorData = ColorData;
  type storesCatalogV3Product_universal_d_LinkData = LinkData;
  type storesCatalogV3Product_universal_d_MentionData = MentionData;
  type storesCatalogV3Product_universal_d_FontSizeData = FontSizeData;
  type storesCatalogV3Product_universal_d_FontType = FontType;
  const storesCatalogV3Product_universal_d_FontType: typeof FontType;
  type storesCatalogV3Product_universal_d_AppEmbedData = AppEmbedData;
  type storesCatalogV3Product_universal_d_AppEmbedDataAppDataOneOf = AppEmbedDataAppDataOneOf;
  type storesCatalogV3Product_universal_d_AppType = AppType;
  const storesCatalogV3Product_universal_d_AppType: typeof AppType;
  type storesCatalogV3Product_universal_d_BookingData = BookingData;
  type storesCatalogV3Product_universal_d_EventData = EventData;
  type storesCatalogV3Product_universal_d_VideoData = VideoData;
  type storesCatalogV3Product_universal_d_PlaybackOptions = PlaybackOptions;
  type storesCatalogV3Product_universal_d_EmbedData = EmbedData;
  type storesCatalogV3Product_universal_d_Oembed = Oembed;
  type storesCatalogV3Product_universal_d_CollapsibleListData = CollapsibleListData;
  type storesCatalogV3Product_universal_d_InitialExpandedItems = InitialExpandedItems;
  const storesCatalogV3Product_universal_d_InitialExpandedItems: typeof InitialExpandedItems;
  type storesCatalogV3Product_universal_d_Direction = Direction;
  const storesCatalogV3Product_universal_d_Direction: typeof Direction;
  type storesCatalogV3Product_universal_d_TableData = TableData;
  type storesCatalogV3Product_universal_d_Dimensions = Dimensions;
  type storesCatalogV3Product_universal_d_TableCellData = TableCellData;
  type storesCatalogV3Product_universal_d_VerticalAlignment = VerticalAlignment;
  const storesCatalogV3Product_universal_d_VerticalAlignment: typeof VerticalAlignment;
  type storesCatalogV3Product_universal_d_CellStyle = CellStyle;
  type storesCatalogV3Product_universal_d_BorderColors = BorderColors;
  type storesCatalogV3Product_universal_d_NullValue = NullValue;
  const storesCatalogV3Product_universal_d_NullValue: typeof NullValue;
  type storesCatalogV3Product_universal_d_ListValue = ListValue;
  type storesCatalogV3Product_universal_d_AudioData = AudioData;
  type storesCatalogV3Product_universal_d_OrderedListData = OrderedListData;
  type storesCatalogV3Product_universal_d_BulletedListData = BulletedListData;
  type storesCatalogV3Product_universal_d_BlockquoteData = BlockquoteData;
  type storesCatalogV3Product_universal_d_Metadata = Metadata;
  type storesCatalogV3Product_universal_d_DocumentStyle = DocumentStyle;
  type storesCatalogV3Product_universal_d_TextNodeStyle = TextNodeStyle;
  type storesCatalogV3Product_universal_d_Media = Media;
  type storesCatalogV3Product_universal_d_ProductMedia = ProductMedia;
  type storesCatalogV3Product_universal_d_ProductMediaSetByOneOf = ProductMediaSetByOneOf;
  type storesCatalogV3Product_universal_d_ProductMediaMediaOneOf = ProductMediaMediaOneOf;
  type storesCatalogV3Product_universal_d_VideoResolution = VideoResolution;
  type storesCatalogV3Product_universal_d_SeoSchema = SeoSchema;
  type storesCatalogV3Product_universal_d_Keyword = Keyword;
  type storesCatalogV3Product_universal_d_Tag = Tag;
  type storesCatalogV3Product_universal_d_Settings = Settings;
  type storesCatalogV3Product_universal_d_ConnectedOption = ConnectedOption;
  type storesCatalogV3Product_universal_d_ConnectedOptionOptionSettingsOneOf = ConnectedOptionOptionSettingsOneOf;
  type storesCatalogV3Product_universal_d_ProductOptionRenderType = ProductOptionRenderType;
  const storesCatalogV3Product_universal_d_ProductOptionRenderType: typeof ProductOptionRenderType;
  type storesCatalogV3Product_universal_d_ChoicesSettings = ChoicesSettings;
  type storesCatalogV3Product_universal_d_ConnectedOptionChoice = ConnectedOptionChoice;
  type storesCatalogV3Product_universal_d_ConnectedOptionChoiceValueOneOf = ConnectedOptionChoiceValueOneOf;
  type storesCatalogV3Product_universal_d_ChoiceType = ChoiceType;
  const storesCatalogV3Product_universal_d_ChoiceType: typeof ChoiceType;
  type storesCatalogV3Product_universal_d_MultipleColors = MultipleColors;
  type storesCatalogV3Product_universal_d_ConnectedModifier = ConnectedModifier;
  type storesCatalogV3Product_universal_d_ConnectedModifierModifierSettingsOneOf = ConnectedModifierModifierSettingsOneOf;
  type storesCatalogV3Product_universal_d_ModifierRenderType = ModifierRenderType;
  const storesCatalogV3Product_universal_d_ModifierRenderType: typeof ModifierRenderType;
  type storesCatalogV3Product_universal_d_FreeTextSettings = FreeTextSettings;
  type storesCatalogV3Product_universal_d_ModifierChoicesSettings = ModifierChoicesSettings;
  type storesCatalogV3Product_universal_d_ConnectedModifierChoice = ConnectedModifierChoice;
  type storesCatalogV3Product_universal_d_ConnectedModifierChoiceValueOneOf = ConnectedModifierChoiceValueOneOf;
  type storesCatalogV3Product_universal_d_Brand = Brand;
  type storesCatalogV3Product_universal_d_InfoSection = InfoSection;
  type storesCatalogV3Product_universal_d_ProductCategory = ProductCategory;
  type storesCatalogV3Product_universal_d_PriceRange = PriceRange;
  type storesCatalogV3Product_universal_d_FixedMonetaryAmount = FixedMonetaryAmount;
  type storesCatalogV3Product_universal_d_Inventory = Inventory;
  type storesCatalogV3Product_universal_d_InventoryAvailabilityStatus = InventoryAvailabilityStatus;
  const storesCatalogV3Product_universal_d_InventoryAvailabilityStatus: typeof InventoryAvailabilityStatus;
  type storesCatalogV3Product_universal_d_PreorderStatus = PreorderStatus;
  const storesCatalogV3Product_universal_d_PreorderStatus: typeof PreorderStatus;
  type storesCatalogV3Product_universal_d_ProductType = ProductType;
  const storesCatalogV3Product_universal_d_ProductType: typeof ProductType;
  type storesCatalogV3Product_universal_d_PhysicalProperties = PhysicalProperties;
  type storesCatalogV3Product_universal_d_PricePerUnitSettings = PricePerUnitSettings;
  type storesCatalogV3Product_universal_d_MeasurementUnit = MeasurementUnit;
  const storesCatalogV3Product_universal_d_MeasurementUnit: typeof MeasurementUnit;
  type storesCatalogV3Product_universal_d_WeightRange = WeightRange;
  type storesCatalogV3Product_universal_d_WeightMeasurementUnitInfo = WeightMeasurementUnitInfo;
  type storesCatalogV3Product_universal_d_WeightUnit = WeightUnit;
  const storesCatalogV3Product_universal_d_WeightUnit: typeof WeightUnit;
  type storesCatalogV3Product_universal_d_BreadcrumbsInfo = BreadcrumbsInfo;
  type storesCatalogV3Product_universal_d_BreadCrumb = BreadCrumb;
  type storesCatalogV3Product_universal_d_Variant = Variant;
  type storesCatalogV3Product_universal_d_VariantTypedPropertiesOneOf = VariantTypedPropertiesOneOf;
  type storesCatalogV3Product_universal_d_OptionChoice = OptionChoice;
  type storesCatalogV3Product_universal_d_PriceInfo = PriceInfo;
  type storesCatalogV3Product_universal_d_RevenueDetails = RevenueDetails;
  type storesCatalogV3Product_universal_d_VariantPhysicalProperties = VariantPhysicalProperties;
  type storesCatalogV3Product_universal_d_PricePerUnit = PricePerUnit;
  type storesCatalogV3Product_universal_d_VariantDigitalProperties = VariantDigitalProperties;
  type storesCatalogV3Product_universal_d_SecuredMedia = SecuredMedia;
  type storesCatalogV3Product_universal_d_FileType = FileType;
  const storesCatalogV3Product_universal_d_FileType: typeof FileType;
  type storesCatalogV3Product_universal_d_SubscriptionPlanPrice = SubscriptionPlanPrice;
  type storesCatalogV3Product_universal_d_SubscriptionPlanPricePerUnit = SubscriptionPlanPricePerUnit;
  type storesCatalogV3Product_universal_d_SubscriptionPrice = SubscriptionPrice;
  type storesCatalogV3Product_universal_d_SubscriptionPricePerUnit = SubscriptionPricePerUnit;
  type storesCatalogV3Product_universal_d_V3VariantsInfo = V3VariantsInfo;
  type storesCatalogV3Product_universal_d_ExtendedFields = ExtendedFields;
  type storesCatalogV3Product_universal_d_Subscription = Subscription;
  type storesCatalogV3Product_universal_d_SubscriptionPlan = SubscriptionPlan;
  type storesCatalogV3Product_universal_d_SubscriptionSettings = SubscriptionSettings;
  type storesCatalogV3Product_universal_d_SubscriptionSettingsCyclesOneOf = SubscriptionSettingsCyclesOneOf;
  type storesCatalogV3Product_universal_d_SubscriptionFrequency = SubscriptionFrequency;
  const storesCatalogV3Product_universal_d_SubscriptionFrequency: typeof SubscriptionFrequency;
  type storesCatalogV3Product_universal_d_SubscriptionPlanDiscount = SubscriptionPlanDiscount;
  type storesCatalogV3Product_universal_d_SubscriptionPlanDiscountDiscountOneOf = SubscriptionPlanDiscountDiscountOneOf;
  type storesCatalogV3Product_universal_d_DiscountType = DiscountType;
  const storesCatalogV3Product_universal_d_DiscountType: typeof DiscountType;
  type storesCatalogV3Product_universal_d_SubscriptionDetails = SubscriptionDetails;
  type storesCatalogV3Product_universal_d_SubscriptionDiscount = SubscriptionDiscount;
  type storesCatalogV3Product_universal_d_SubscriptionDiscountDiscountOneOf = SubscriptionDiscountDiscountOneOf;
  type storesCatalogV3Product_universal_d_SubscriptionDiscountDiscountType = SubscriptionDiscountDiscountType;
  const storesCatalogV3Product_universal_d_SubscriptionDiscountDiscountType: typeof SubscriptionDiscountDiscountType;
  type storesCatalogV3Product_universal_d_SubscriptionDetailsSubscription = SubscriptionDetailsSubscription;
  type storesCatalogV3Product_universal_d_SubscriptionDetailsSubscriptionCyclesOneOf = SubscriptionDetailsSubscriptionCyclesOneOf;
  type storesCatalogV3Product_universal_d_UpdateDocumentsEvent = UpdateDocumentsEvent;
  type storesCatalogV3Product_universal_d_UpdateDocumentsEventOperationOneOf = UpdateDocumentsEventOperationOneOf;
  type storesCatalogV3Product_universal_d_DocumentUpdateOperation = DocumentUpdateOperation;
  type storesCatalogV3Product_universal_d_IndexDocument = IndexDocument;
  type storesCatalogV3Product_universal_d_DocumentPayload = DocumentPayload;
  type storesCatalogV3Product_universal_d_DocumentImage = DocumentImage;
  type storesCatalogV3Product_universal_d_Enum = Enum;
  const storesCatalogV3Product_universal_d_Enum: typeof Enum;
  type storesCatalogV3Product_universal_d_DeleteByIdsOperation = DeleteByIdsOperation;
  type storesCatalogV3Product_universal_d_DeleteByFilterOperation = DeleteByFilterOperation;
  type storesCatalogV3Product_universal_d_UpdateByFilterOperation = UpdateByFilterOperation;
  type storesCatalogV3Product_universal_d_UpdateExistingOperation = UpdateExistingOperation;
  type storesCatalogV3Product_universal_d_SearchIndexingNotification = SearchIndexingNotification;
  type storesCatalogV3Product_universal_d_State = State;
  const storesCatalogV3Product_universal_d_State: typeof State;
  type storesCatalogV3Product_universal_d_CreateProductRequest = CreateProductRequest;
  type storesCatalogV3Product_universal_d_ProductComposite = ProductComposite;
  type storesCatalogV3Product_universal_d_ProductCompositeTypedPropertiesOneOf = ProductCompositeTypedPropertiesOneOf;
  type storesCatalogV3Product_universal_d_VariantComposite = VariantComposite;
  type storesCatalogV3Product_universal_d_VariantCompositeTypedPropertiesOneOf = VariantCompositeTypedPropertiesOneOf;
  type storesCatalogV3Product_universal_d_InventoryItemComposite = InventoryItemComposite;
  type storesCatalogV3Product_universal_d_InventoryItemCompositeTrackingMethodOneOf = InventoryItemCompositeTrackingMethodOneOf;
  type storesCatalogV3Product_universal_d_PreorderInfo = PreorderInfo;
  type storesCatalogV3Product_universal_d_OptionChoiceReferences = OptionChoiceReferences;
  type storesCatalogV3Product_universal_d_VariantsInfo = VariantsInfo;
  type storesCatalogV3Product_universal_d_CreateProductResponse = CreateProductResponse;
  type storesCatalogV3Product_universal_d_BulkInventoryItemResults = BulkInventoryItemResults;
  type storesCatalogV3Product_universal_d_BulkInventoryItemResult = BulkInventoryItemResult;
  type storesCatalogV3Product_universal_d_InventoryItem = InventoryItem;
  type storesCatalogV3Product_universal_d_InventoryItemTrackingMethodOneOf = InventoryItemTrackingMethodOneOf;
  type storesCatalogV3Product_universal_d_ItemAvailability = ItemAvailability;
  type storesCatalogV3Product_universal_d_AvailabilityStatus = AvailabilityStatus;
  const storesCatalogV3Product_universal_d_AvailabilityStatus: typeof AvailabilityStatus;
  type storesCatalogV3Product_universal_d_V3AvailabilityStatus = V3AvailabilityStatus;
  const storesCatalogV3Product_universal_d_V3AvailabilityStatus: typeof V3AvailabilityStatus;
  type storesCatalogV3Product_universal_d_VariantsNotAlignedWithProduct = VariantsNotAlignedWithProduct;
  type storesCatalogV3Product_universal_d_VariantNotAlignedWithProduct = VariantNotAlignedWithProduct;
  type storesCatalogV3Product_universal_d_InventoryBulkErrors = InventoryBulkErrors;
  type storesCatalogV3Product_universal_d_UpdateProductRequest = UpdateProductRequest;
  type storesCatalogV3Product_universal_d_UpdateProductResponse = UpdateProductResponse;
  type storesCatalogV3Product_universal_d_UnsupportedFieldMasks = UnsupportedFieldMasks;
  type storesCatalogV3Product_universal_d_BulkCreateProductsRequest = BulkCreateProductsRequest;
  type storesCatalogV3Product_universal_d_BulkCreateProductsResponse = BulkCreateProductsResponse;
  type storesCatalogV3Product_universal_d_BulkProductResult = BulkProductResult;
  type storesCatalogV3Product_universal_d_BulkProductResults = BulkProductResults;
  type storesCatalogV3Product_universal_d_BulkUpdateProductsRequest = BulkUpdateProductsRequest;
  type storesCatalogV3Product_universal_d_MaskedProductComposite = MaskedProductComposite;
  type storesCatalogV3Product_universal_d_BulkUpdateProductsResponse = BulkUpdateProductsResponse;
  type storesCatalogV3Product_universal_d_BulkAddProductsToCategoriesByFilterRequest = BulkAddProductsToCategoriesByFilterRequest;
  type storesCatalogV3Product_universal_d_BulkAddProductsToCategoriesByFilterResponse = BulkAddProductsToCategoriesByFilterResponse;
  type storesCatalogV3Product_universal_d_BulkRemoveProductsFromCategoriesByFilterRequest = BulkRemoveProductsFromCategoriesByFilterRequest;
  type storesCatalogV3Product_universal_d_BulkRemoveProductsFromCategoriesByFilterResponse = BulkRemoveProductsFromCategoriesByFilterResponse;
  type storesCatalogV3Product_universal_d_DoNotCallCreateProductRequest = DoNotCallCreateProductRequest;
  type storesCatalogV3Product_universal_d_DoNotCallCreateProductResponse = DoNotCallCreateProductResponse;
  type storesCatalogV3Product_universal_d_VariantAdded = VariantAdded;
  type storesCatalogV3Product_universal_d_GetProductRequest = GetProductRequest;
  type storesCatalogV3Product_universal_d_GetProductResponse = GetProductResponse;
  type storesCatalogV3Product_universal_d_GetProductBySlugRequest = GetProductBySlugRequest;
  type storesCatalogV3Product_universal_d_GetProductBySlugResponse = GetProductBySlugResponse;
  type storesCatalogV3Product_universal_d_DoNotCallUpdateProductRequest = DoNotCallUpdateProductRequest;
  type storesCatalogV3Product_universal_d_DoNotCallUpdateProductResponse = DoNotCallUpdateProductResponse;
  type storesCatalogV3Product_universal_d_VariantUpdated = VariantUpdated;
  type storesCatalogV3Product_universal_d_VariantRemoved = VariantRemoved;
  type storesCatalogV3Product_universal_d_DeleteProductRequest = DeleteProductRequest;
  type storesCatalogV3Product_universal_d_DeleteProductResponse = DeleteProductResponse;
  type storesCatalogV3Product_universal_d_SearchProductsRequest = SearchProductsRequest;
  type storesCatalogV3Product_universal_d_CursorSearch = CursorSearch;
  type storesCatalogV3Product_universal_d_CursorSearchPagingMethodOneOf = CursorSearchPagingMethodOneOf;
  type storesCatalogV3Product_universal_d_Aggregation = Aggregation;
  type storesCatalogV3Product_universal_d_AggregationKindOneOf = AggregationKindOneOf;
  type storesCatalogV3Product_universal_d_RangeBucket = RangeBucket;
  type storesCatalogV3Product_universal_d_SortType = SortType;
  const storesCatalogV3Product_universal_d_SortType: typeof SortType;
  type storesCatalogV3Product_universal_d_SortDirection = SortDirection;
  const storesCatalogV3Product_universal_d_SortDirection: typeof SortDirection;
  type storesCatalogV3Product_universal_d_MissingValues = MissingValues;
  const storesCatalogV3Product_universal_d_MissingValues: typeof MissingValues;
  type storesCatalogV3Product_universal_d_IncludeMissingValuesOptions = IncludeMissingValuesOptions;
  type storesCatalogV3Product_universal_d_ScalarType = ScalarType;
  const storesCatalogV3Product_universal_d_ScalarType: typeof ScalarType;
  type storesCatalogV3Product_universal_d_ValueAggregation = ValueAggregation;
  type storesCatalogV3Product_universal_d_ValueAggregationOptionsOneOf = ValueAggregationOptionsOneOf;
  type storesCatalogV3Product_universal_d_NestedAggregationType = NestedAggregationType;
  const storesCatalogV3Product_universal_d_NestedAggregationType: typeof NestedAggregationType;
  type storesCatalogV3Product_universal_d_RangeAggregation = RangeAggregation;
  type storesCatalogV3Product_universal_d_ScalarAggregation = ScalarAggregation;
  type storesCatalogV3Product_universal_d_DateHistogramAggregation = DateHistogramAggregation;
  type storesCatalogV3Product_universal_d_Interval = Interval;
  const storesCatalogV3Product_universal_d_Interval: typeof Interval;
  type storesCatalogV3Product_universal_d_NestedAggregationItem = NestedAggregationItem;
  type storesCatalogV3Product_universal_d_NestedAggregationItemKindOneOf = NestedAggregationItemKindOneOf;
  type storesCatalogV3Product_universal_d_AggregationType = AggregationType;
  const storesCatalogV3Product_universal_d_AggregationType: typeof AggregationType;
  type storesCatalogV3Product_universal_d_NestedAggregation = NestedAggregation;
  type storesCatalogV3Product_universal_d_GroupByAggregation = GroupByAggregation;
  type storesCatalogV3Product_universal_d_GroupByAggregationKindOneOf = GroupByAggregationKindOneOf;
  type storesCatalogV3Product_universal_d_SearchDetails = SearchDetails;
  type storesCatalogV3Product_universal_d_Mode = Mode;
  const storesCatalogV3Product_universal_d_Mode: typeof Mode;
  type storesCatalogV3Product_universal_d_SearchProductsResponse = SearchProductsResponse;
  type storesCatalogV3Product_universal_d_AggregationData = AggregationData;
  type storesCatalogV3Product_universal_d_ValueAggregationResult = ValueAggregationResult;
  type storesCatalogV3Product_universal_d_RangeAggregationResult = RangeAggregationResult;
  type storesCatalogV3Product_universal_d_NestedAggregationResults = NestedAggregationResults;
  type storesCatalogV3Product_universal_d_NestedAggregationResultsResultOneOf = NestedAggregationResultsResultOneOf;
  type storesCatalogV3Product_universal_d_ValueResults = ValueResults;
  type storesCatalogV3Product_universal_d_RangeResults = RangeResults;
  type storesCatalogV3Product_universal_d_AggregationResultsScalarResult = AggregationResultsScalarResult;
  type storesCatalogV3Product_universal_d_NestedValueAggregationResult = NestedValueAggregationResult;
  type storesCatalogV3Product_universal_d_ValueResult = ValueResult;
  type storesCatalogV3Product_universal_d_RangeResult = RangeResult;
  type storesCatalogV3Product_universal_d_ScalarResult = ScalarResult;
  type storesCatalogV3Product_universal_d_NestedResultValue = NestedResultValue;
  type storesCatalogV3Product_universal_d_NestedResultValueResultOneOf = NestedResultValueResultOneOf;
  type storesCatalogV3Product_universal_d_Results = Results;
  type storesCatalogV3Product_universal_d_DateHistogramResult = DateHistogramResult;
  type storesCatalogV3Product_universal_d_GroupByValueResults = GroupByValueResults;
  type storesCatalogV3Product_universal_d_DateHistogramResults = DateHistogramResults;
  type storesCatalogV3Product_universal_d_NestedResults = NestedResults;
  type storesCatalogV3Product_universal_d_AggregationResults = AggregationResults;
  type storesCatalogV3Product_universal_d_AggregationResultsResultOneOf = AggregationResultsResultOneOf;
  type storesCatalogV3Product_universal_d_EventuallyConsistentQueryProductsRequest = EventuallyConsistentQueryProductsRequest;
  type storesCatalogV3Product_universal_d_EventuallyConsistentQueryProductsResponse = EventuallyConsistentQueryProductsResponse;
  type storesCatalogV3Product_universal_d_QueryProductsRequest = QueryProductsRequest;
  type storesCatalogV3Product_universal_d_QueryProductsResponse = QueryProductsResponse;
  type storesCatalogV3Product_universal_d_DeprecatedSearchProductsWithOffsetRequest = DeprecatedSearchProductsWithOffsetRequest;
  type storesCatalogV3Product_universal_d_PlatformOffsetSearch = PlatformOffsetSearch;
  type storesCatalogV3Product_universal_d_PlatformOffsetSearchPagingMethodOneOf = PlatformOffsetSearchPagingMethodOneOf;
  type storesCatalogV3Product_universal_d_PlatformPaging = PlatformPaging;
  type storesCatalogV3Product_universal_d_DeprecatedSearchProductsWithOffsetResponse = DeprecatedSearchProductsWithOffsetResponse;
  type storesCatalogV3Product_universal_d_PagingMetadata = PagingMetadata;
  type storesCatalogV3Product_universal_d_CountProductsRequest = CountProductsRequest;
  type storesCatalogV3Product_universal_d_CountProductsResponse = CountProductsResponse;
  type storesCatalogV3Product_universal_d_DoNotCallBulkCreateProductsRequest = DoNotCallBulkCreateProductsRequest;
  type storesCatalogV3Product_universal_d_DoNotCallBulkCreateProductsResponse = DoNotCallBulkCreateProductsResponse;
  type storesCatalogV3Product_universal_d_DoNotCallBulkUpdateProductsRequest = DoNotCallBulkUpdateProductsRequest;
  type storesCatalogV3Product_universal_d_MaskedProduct = MaskedProduct;
  type storesCatalogV3Product_universal_d_DoNotCallBulkUpdateProductsResponse = DoNotCallBulkUpdateProductsResponse;
  type storesCatalogV3Product_universal_d_BulkUpdateProductsByFilterRequest = BulkUpdateProductsByFilterRequest;
  type storesCatalogV3Product_universal_d_BulkUpdateProductsByFilterResponse = BulkUpdateProductsByFilterResponse;
  type storesCatalogV3Product_universal_d_BulkDeleteProductsRequest = BulkDeleteProductsRequest;
  type storesCatalogV3Product_universal_d_BulkDeleteProductsResponse = BulkDeleteProductsResponse;
  type storesCatalogV3Product_universal_d_BulkDeleteProductsByFilterRequest = BulkDeleteProductsByFilterRequest;
  type storesCatalogV3Product_universal_d_BulkDeleteProductsByFilterResponse = BulkDeleteProductsByFilterResponse;
  type storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsByFilterRequest = BulkAddInfoSectionsToProductsByFilterRequest;
  type storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsByFilterResponse = BulkAddInfoSectionsToProductsByFilterResponse;
  type storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsRequest = BulkAddInfoSectionsToProductsRequest;
  type storesCatalogV3Product_universal_d_ProductIdWithRevision = ProductIdWithRevision;
  type storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsResponse = BulkAddInfoSectionsToProductsResponse;
  type storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsByFilterRequest = BulkRemoveInfoSectionsFromProductsByFilterRequest;
  type storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsByFilterResponse = BulkRemoveInfoSectionsFromProductsByFilterResponse;
  type storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsRequest = BulkRemoveInfoSectionsFromProductsRequest;
  type storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsResponse = BulkRemoveInfoSectionsFromProductsResponse;
  type storesCatalogV3Product_universal_d_BulkUpdateVariantsByFilterRequest = BulkUpdateVariantsByFilterRequest;
  type storesCatalogV3Product_universal_d_BulkUpdateVariantsByFilterResponse = BulkUpdateVariantsByFilterResponse;
  type storesCatalogV3Product_universal_d_BulkAdjustVariantsByFilterRequest = BulkAdjustVariantsByFilterRequest;
  type storesCatalogV3Product_universal_d_AdjustValue = AdjustValue;
  type storesCatalogV3Product_universal_d_AdjustValueAdjustValueOneOf = AdjustValueAdjustValueOneOf;
  type storesCatalogV3Product_universal_d_UnsignedAdjustValue = UnsignedAdjustValue;
  type storesCatalogV3Product_universal_d_UnsignedAdjustValueAdjustValueOneOf = UnsignedAdjustValueAdjustValueOneOf;
  type storesCatalogV3Product_universal_d_RoundingStrategy = RoundingStrategy;
  const storesCatalogV3Product_universal_d_RoundingStrategy: typeof RoundingStrategy;
  type storesCatalogV3Product_universal_d_BulkAdjustVariantsByFilterResponse = BulkAdjustVariantsByFilterResponse;
  const storesCatalogV3Product_universal_d_catalogCreateProduct: typeof catalogCreateProduct;
  type storesCatalogV3Product_universal_d_CatalogCreateProductOptions = CatalogCreateProductOptions;
  const storesCatalogV3Product_universal_d_catalogUpdateProduct: typeof catalogUpdateProduct;
  type storesCatalogV3Product_universal_d_CatalogUpdateProduct = CatalogUpdateProduct;
  type storesCatalogV3Product_universal_d_CatalogUpdateProductOptions = CatalogUpdateProductOptions;
  const storesCatalogV3Product_universal_d_catalogBulkCreateProducts: typeof catalogBulkCreateProducts;
  type storesCatalogV3Product_universal_d_CatalogBulkCreateProductsOptions = CatalogBulkCreateProductsOptions;
  const storesCatalogV3Product_universal_d_catalogBulkUpdateProducts: typeof catalogBulkUpdateProducts;
  type storesCatalogV3Product_universal_d_CatalogBulkUpdateProductsOptions = CatalogBulkUpdateProductsOptions;
  const storesCatalogV3Product_universal_d_bulkAddProductsToCategoriesByFilter: typeof bulkAddProductsToCategoriesByFilter;
  type storesCatalogV3Product_universal_d_BulkAddProductsToCategoriesByFilterOptions = BulkAddProductsToCategoriesByFilterOptions;
  const storesCatalogV3Product_universal_d_bulkRemoveProductsFromCategoriesByFilter: typeof bulkRemoveProductsFromCategoriesByFilter;
  type storesCatalogV3Product_universal_d_BulkRemoveProductsFromCategoriesByFilterOptions = BulkRemoveProductsFromCategoriesByFilterOptions;
  const storesCatalogV3Product_universal_d_getProduct: typeof getProduct;
  type storesCatalogV3Product_universal_d_GetProductOptions = GetProductOptions;
  const storesCatalogV3Product_universal_d_getProductBySlug: typeof getProductBySlug;
  type storesCatalogV3Product_universal_d_GetProductBySlugOptions = GetProductBySlugOptions;
  const storesCatalogV3Product_universal_d_deleteProduct: typeof deleteProduct;
  const storesCatalogV3Product_universal_d_searchProducts: typeof searchProducts;
  type storesCatalogV3Product_universal_d_SearchProductsOptions = SearchProductsOptions;
  const storesCatalogV3Product_universal_d_eventuallyConsistentQueryProducts: typeof eventuallyConsistentQueryProducts;
  type storesCatalogV3Product_universal_d_EventuallyConsistentQueryProductsOptions = EventuallyConsistentQueryProductsOptions;
  const storesCatalogV3Product_universal_d_queryProducts: typeof queryProducts;
  type storesCatalogV3Product_universal_d_QueryProductsOptions = QueryProductsOptions;
  type storesCatalogV3Product_universal_d_ProductsQueryResult = ProductsQueryResult;
  type storesCatalogV3Product_universal_d_ProductsQueryBuilder = ProductsQueryBuilder;
  const storesCatalogV3Product_universal_d_countProducts: typeof countProducts;
  type storesCatalogV3Product_universal_d_CountProductsOptions = CountProductsOptions;
  const storesCatalogV3Product_universal_d_bulkUpdateProductsByFilter: typeof bulkUpdateProductsByFilter;
  type storesCatalogV3Product_universal_d_BulkUpdateProductsByFilterOptions = BulkUpdateProductsByFilterOptions;
  const storesCatalogV3Product_universal_d_bulkDeleteProducts: typeof bulkDeleteProducts;
  const storesCatalogV3Product_universal_d_bulkDeleteProductsByFilter: typeof bulkDeleteProductsByFilter;
  const storesCatalogV3Product_universal_d_bulkAddInfoSectionsToProductsByFilter: typeof bulkAddInfoSectionsToProductsByFilter;
  type storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsByFilterOptions = BulkAddInfoSectionsToProductsByFilterOptions;
  const storesCatalogV3Product_universal_d_bulkAddInfoSectionsToProducts: typeof bulkAddInfoSectionsToProducts;
  type storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsOptions = BulkAddInfoSectionsToProductsOptions;
  const storesCatalogV3Product_universal_d_bulkRemoveInfoSectionsFromProductsByFilter: typeof bulkRemoveInfoSectionsFromProductsByFilter;
  type storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsByFilterOptions = BulkRemoveInfoSectionsFromProductsByFilterOptions;
  const storesCatalogV3Product_universal_d_bulkRemoveInfoSectionsFromProducts: typeof bulkRemoveInfoSectionsFromProducts;
  type storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsOptions = BulkRemoveInfoSectionsFromProductsOptions;
  const storesCatalogV3Product_universal_d_bulkUpdateVariantsByFilter: typeof bulkUpdateVariantsByFilter;
  type storesCatalogV3Product_universal_d_BulkUpdateVariantsByFilterOptions = BulkUpdateVariantsByFilterOptions;
  const storesCatalogV3Product_universal_d_bulkAdjustVariantsByFilter: typeof bulkAdjustVariantsByFilter;
  type storesCatalogV3Product_universal_d_BulkAdjustVariantsByFilterOptions = BulkAdjustVariantsByFilterOptions;
  namespace storesCatalogV3Product_universal_d {
    export {
      storesCatalogV3Product_universal_d_Product as Product,
      storesCatalogV3Product_universal_d_ProductTypedPropertiesOneOf as ProductTypedPropertiesOneOf,
      storesCatalogV3Product_universal_d_RichContent as RichContent,
      storesCatalogV3Product_universal_d_Node as Node,
      storesCatalogV3Product_universal_d_NodeDataOneOf as NodeDataOneOf,
      storesCatalogV3Product_universal_d_NodeType as NodeType,
      storesCatalogV3Product_universal_d_NodeStyle as NodeStyle,
      storesCatalogV3Product_universal_d_ButtonData as ButtonData,
      storesCatalogV3Product_universal_d_Border as Border,
      storesCatalogV3Product_universal_d_Colors as Colors,
      storesCatalogV3Product_universal_d_PluginContainerData as PluginContainerData,
      storesCatalogV3Product_universal_d_WidthType as WidthType,
      storesCatalogV3Product_universal_d_PluginContainerDataWidth as PluginContainerDataWidth,
      storesCatalogV3Product_universal_d_PluginContainerDataWidthDataOneOf as PluginContainerDataWidthDataOneOf,
      storesCatalogV3Product_universal_d_PluginContainerDataAlignment as PluginContainerDataAlignment,
      storesCatalogV3Product_universal_d_Spoiler as Spoiler,
      storesCatalogV3Product_universal_d_Height as Height,
      storesCatalogV3Product_universal_d_Type as Type,
      storesCatalogV3Product_universal_d_Styles as Styles,
      storesCatalogV3Product_universal_d_Link as Link,
      storesCatalogV3Product_universal_d_LinkDataOneOf as LinkDataOneOf,
      storesCatalogV3Product_universal_d_Target as Target,
      storesCatalogV3Product_universal_d_Rel as Rel,
      storesCatalogV3Product_universal_d_CodeBlockData as CodeBlockData,
      storesCatalogV3Product_universal_d_TextStyle as TextStyle,
      storesCatalogV3Product_universal_d_TextAlignment as TextAlignment,
      storesCatalogV3Product_universal_d_DividerData as DividerData,
      storesCatalogV3Product_universal_d_LineStyle as LineStyle,
      storesCatalogV3Product_universal_d_Width as Width,
      storesCatalogV3Product_universal_d_Alignment as Alignment,
      storesCatalogV3Product_universal_d_FileData as FileData,
      storesCatalogV3Product_universal_d_ViewMode as ViewMode,
      storesCatalogV3Product_universal_d_FileSource as FileSource,
      storesCatalogV3Product_universal_d_FileSourceDataOneOf as FileSourceDataOneOf,
      storesCatalogV3Product_universal_d_PDFSettings as PDFSettings,
      storesCatalogV3Product_universal_d_GalleryData as GalleryData,
      storesCatalogV3Product_universal_d_V1Media as V1Media,
      storesCatalogV3Product_universal_d_Image as Image,
      storesCatalogV3Product_universal_d_Video as Video,
      storesCatalogV3Product_universal_d_Item as Item,
      storesCatalogV3Product_universal_d_ItemDataOneOf as ItemDataOneOf,
      storesCatalogV3Product_universal_d_GalleryOptions as GalleryOptions,
      storesCatalogV3Product_universal_d_LayoutType as LayoutType,
      storesCatalogV3Product_universal_d_Orientation as Orientation,
      storesCatalogV3Product_universal_d_Crop as Crop,
      storesCatalogV3Product_universal_d_ThumbnailsAlignment as ThumbnailsAlignment,
      storesCatalogV3Product_universal_d_Layout as Layout,
      storesCatalogV3Product_universal_d_ItemStyle as ItemStyle,
      storesCatalogV3Product_universal_d_Thumbnails as Thumbnails,
      storesCatalogV3Product_universal_d_GIFData as GIFData,
      storesCatalogV3Product_universal_d_GIF as GIF,
      storesCatalogV3Product_universal_d_HeadingData as HeadingData,
      storesCatalogV3Product_universal_d_HTMLData as HTMLData,
      storesCatalogV3Product_universal_d_HTMLDataDataOneOf as HTMLDataDataOneOf,
      storesCatalogV3Product_universal_d_Source as Source,
      storesCatalogV3Product_universal_d_ImageData as ImageData,
      storesCatalogV3Product_universal_d_LinkPreviewData as LinkPreviewData,
      storesCatalogV3Product_universal_d_MapData as MapData,
      storesCatalogV3Product_universal_d_MapSettings as MapSettings,
      storesCatalogV3Product_universal_d_MapType as MapType,
      storesCatalogV3Product_universal_d_ParagraphData as ParagraphData,
      storesCatalogV3Product_universal_d_PollData as PollData,
      storesCatalogV3Product_universal_d_ViewRole as ViewRole,
      storesCatalogV3Product_universal_d_VoteRole as VoteRole,
      storesCatalogV3Product_universal_d_Permissions as Permissions,
      storesCatalogV3Product_universal_d_Option as Option,
      storesCatalogV3Product_universal_d_PollSettings as PollSettings,
      storesCatalogV3Product_universal_d_PollLayoutType as PollLayoutType,
      storesCatalogV3Product_universal_d_PollLayoutDirection as PollLayoutDirection,
      storesCatalogV3Product_universal_d_PollLayout as PollLayout,
      storesCatalogV3Product_universal_d_OptionLayout as OptionLayout,
      storesCatalogV3Product_universal_d_BackgroundType as BackgroundType,
      storesCatalogV3Product_universal_d_Gradient as Gradient,
      storesCatalogV3Product_universal_d_Background as Background,
      storesCatalogV3Product_universal_d_BackgroundBackgroundOneOf as BackgroundBackgroundOneOf,
      storesCatalogV3Product_universal_d_PollDesign as PollDesign,
      storesCatalogV3Product_universal_d_OptionDesign as OptionDesign,
      storesCatalogV3Product_universal_d_Poll as Poll,
      storesCatalogV3Product_universal_d_PollDataLayout as PollDataLayout,
      storesCatalogV3Product_universal_d_Design as Design,
      storesCatalogV3Product_universal_d_TextData as TextData,
      storesCatalogV3Product_universal_d_Decoration as Decoration,
      storesCatalogV3Product_universal_d_DecorationDataOneOf as DecorationDataOneOf,
      storesCatalogV3Product_universal_d_DecorationType as DecorationType,
      storesCatalogV3Product_universal_d_AnchorData as AnchorData,
      storesCatalogV3Product_universal_d_ColorData as ColorData,
      storesCatalogV3Product_universal_d_LinkData as LinkData,
      storesCatalogV3Product_universal_d_MentionData as MentionData,
      storesCatalogV3Product_universal_d_FontSizeData as FontSizeData,
      storesCatalogV3Product_universal_d_FontType as FontType,
      storesCatalogV3Product_universal_d_AppEmbedData as AppEmbedData,
      storesCatalogV3Product_universal_d_AppEmbedDataAppDataOneOf as AppEmbedDataAppDataOneOf,
      storesCatalogV3Product_universal_d_AppType as AppType,
      storesCatalogV3Product_universal_d_BookingData as BookingData,
      storesCatalogV3Product_universal_d_EventData as EventData,
      storesCatalogV3Product_universal_d_VideoData as VideoData,
      storesCatalogV3Product_universal_d_PlaybackOptions as PlaybackOptions,
      storesCatalogV3Product_universal_d_EmbedData as EmbedData,
      storesCatalogV3Product_universal_d_Oembed as Oembed,
      storesCatalogV3Product_universal_d_CollapsibleListData as CollapsibleListData,
      storesCatalogV3Product_universal_d_InitialExpandedItems as InitialExpandedItems,
      storesCatalogV3Product_universal_d_Direction as Direction,
      storesCatalogV3Product_universal_d_TableData as TableData,
      storesCatalogV3Product_universal_d_Dimensions as Dimensions,
      storesCatalogV3Product_universal_d_TableCellData as TableCellData,
      storesCatalogV3Product_universal_d_VerticalAlignment as VerticalAlignment,
      storesCatalogV3Product_universal_d_CellStyle as CellStyle,
      storesCatalogV3Product_universal_d_BorderColors as BorderColors,
      storesCatalogV3Product_universal_d_NullValue as NullValue,
      storesCatalogV3Product_universal_d_ListValue as ListValue,
      storesCatalogV3Product_universal_d_AudioData as AudioData,
      storesCatalogV3Product_universal_d_OrderedListData as OrderedListData,
      storesCatalogV3Product_universal_d_BulletedListData as BulletedListData,
      storesCatalogV3Product_universal_d_BlockquoteData as BlockquoteData,
      storesCatalogV3Product_universal_d_Metadata as Metadata,
      storesCatalogV3Product_universal_d_DocumentStyle as DocumentStyle,
      storesCatalogV3Product_universal_d_TextNodeStyle as TextNodeStyle,
      storesCatalogV3Product_universal_d_Media as Media,
      storesCatalogV3Product_universal_d_ProductMedia as ProductMedia,
      storesCatalogV3Product_universal_d_ProductMediaSetByOneOf as ProductMediaSetByOneOf,
      storesCatalogV3Product_universal_d_ProductMediaMediaOneOf as ProductMediaMediaOneOf,
      storesCatalogV3Product_universal_d_VideoResolution as VideoResolution,
      storesCatalogV3Product_universal_d_SeoSchema as SeoSchema,
      storesCatalogV3Product_universal_d_Keyword as Keyword,
      storesCatalogV3Product_universal_d_Tag as Tag,
      storesCatalogV3Product_universal_d_Settings as Settings,
      storesCatalogV3Product_universal_d_ConnectedOption as ConnectedOption,
      storesCatalogV3Product_universal_d_ConnectedOptionOptionSettingsOneOf as ConnectedOptionOptionSettingsOneOf,
      storesCatalogV3Product_universal_d_ProductOptionRenderType as ProductOptionRenderType,
      storesCatalogV3Product_universal_d_ChoicesSettings as ChoicesSettings,
      storesCatalogV3Product_universal_d_ConnectedOptionChoice as ConnectedOptionChoice,
      storesCatalogV3Product_universal_d_ConnectedOptionChoiceValueOneOf as ConnectedOptionChoiceValueOneOf,
      storesCatalogV3Product_universal_d_ChoiceType as ChoiceType,
      storesCatalogV3Product_universal_d_MultipleColors as MultipleColors,
      storesCatalogV3Product_universal_d_ConnectedModifier as ConnectedModifier,
      storesCatalogV3Product_universal_d_ConnectedModifierModifierSettingsOneOf as ConnectedModifierModifierSettingsOneOf,
      storesCatalogV3Product_universal_d_ModifierRenderType as ModifierRenderType,
      storesCatalogV3Product_universal_d_FreeTextSettings as FreeTextSettings,
      storesCatalogV3Product_universal_d_ModifierChoicesSettings as ModifierChoicesSettings,
      storesCatalogV3Product_universal_d_ConnectedModifierChoice as ConnectedModifierChoice,
      storesCatalogV3Product_universal_d_ConnectedModifierChoiceValueOneOf as ConnectedModifierChoiceValueOneOf,
      storesCatalogV3Product_universal_d_Brand as Brand,
      storesCatalogV3Product_universal_d_InfoSection as InfoSection,
      Ribbon$1 as Ribbon,
      storesCatalogV3Product_universal_d_ProductCategory as ProductCategory,
      storesCatalogV3Product_universal_d_PriceRange as PriceRange,
      storesCatalogV3Product_universal_d_FixedMonetaryAmount as FixedMonetaryAmount,
      storesCatalogV3Product_universal_d_Inventory as Inventory,
      storesCatalogV3Product_universal_d_InventoryAvailabilityStatus as InventoryAvailabilityStatus,
      storesCatalogV3Product_universal_d_PreorderStatus as PreorderStatus,
      storesCatalogV3Product_universal_d_ProductType as ProductType,
      storesCatalogV3Product_universal_d_PhysicalProperties as PhysicalProperties,
      storesCatalogV3Product_universal_d_PricePerUnitSettings as PricePerUnitSettings,
      storesCatalogV3Product_universal_d_MeasurementUnit as MeasurementUnit,
      storesCatalogV3Product_universal_d_WeightRange as WeightRange,
      storesCatalogV3Product_universal_d_WeightMeasurementUnitInfo as WeightMeasurementUnitInfo,
      storesCatalogV3Product_universal_d_WeightUnit as WeightUnit,
      storesCatalogV3Product_universal_d_BreadcrumbsInfo as BreadcrumbsInfo,
      storesCatalogV3Product_universal_d_BreadCrumb as BreadCrumb,
      storesCatalogV3Product_universal_d_Variant as Variant,
      storesCatalogV3Product_universal_d_VariantTypedPropertiesOneOf as VariantTypedPropertiesOneOf,
      storesCatalogV3Product_universal_d_OptionChoice as OptionChoice,
      storesCatalogV3Product_universal_d_PriceInfo as PriceInfo,
      storesCatalogV3Product_universal_d_RevenueDetails as RevenueDetails,
      storesCatalogV3Product_universal_d_VariantPhysicalProperties as VariantPhysicalProperties,
      storesCatalogV3Product_universal_d_PricePerUnit as PricePerUnit,
      storesCatalogV3Product_universal_d_VariantDigitalProperties as VariantDigitalProperties,
      storesCatalogV3Product_universal_d_SecuredMedia as SecuredMedia,
      storesCatalogV3Product_universal_d_FileType as FileType,
      storesCatalogV3Product_universal_d_SubscriptionPlanPrice as SubscriptionPlanPrice,
      storesCatalogV3Product_universal_d_SubscriptionPlanPricePerUnit as SubscriptionPlanPricePerUnit,
      storesCatalogV3Product_universal_d_SubscriptionPrice as SubscriptionPrice,
      storesCatalogV3Product_universal_d_SubscriptionPricePerUnit as SubscriptionPricePerUnit,
      storesCatalogV3Product_universal_d_V3VariantsInfo as V3VariantsInfo,
      storesCatalogV3Product_universal_d_ExtendedFields as ExtendedFields,
      storesCatalogV3Product_universal_d_Subscription as Subscription,
      storesCatalogV3Product_universal_d_SubscriptionPlan as SubscriptionPlan,
      storesCatalogV3Product_universal_d_SubscriptionSettings as SubscriptionSettings,
      storesCatalogV3Product_universal_d_SubscriptionSettingsCyclesOneOf as SubscriptionSettingsCyclesOneOf,
      storesCatalogV3Product_universal_d_SubscriptionFrequency as SubscriptionFrequency,
      storesCatalogV3Product_universal_d_SubscriptionPlanDiscount as SubscriptionPlanDiscount,
      storesCatalogV3Product_universal_d_SubscriptionPlanDiscountDiscountOneOf as SubscriptionPlanDiscountDiscountOneOf,
      storesCatalogV3Product_universal_d_DiscountType as DiscountType,
      storesCatalogV3Product_universal_d_SubscriptionDetails as SubscriptionDetails,
      storesCatalogV3Product_universal_d_SubscriptionDiscount as SubscriptionDiscount,
      storesCatalogV3Product_universal_d_SubscriptionDiscountDiscountOneOf as SubscriptionDiscountDiscountOneOf,
      storesCatalogV3Product_universal_d_SubscriptionDiscountDiscountType as SubscriptionDiscountDiscountType,
      storesCatalogV3Product_universal_d_SubscriptionDetailsSubscription as SubscriptionDetailsSubscription,
      storesCatalogV3Product_universal_d_SubscriptionDetailsSubscriptionCyclesOneOf as SubscriptionDetailsSubscriptionCyclesOneOf,
      storesCatalogV3Product_universal_d_UpdateDocumentsEvent as UpdateDocumentsEvent,
      storesCatalogV3Product_universal_d_UpdateDocumentsEventOperationOneOf as UpdateDocumentsEventOperationOneOf,
      storesCatalogV3Product_universal_d_DocumentUpdateOperation as DocumentUpdateOperation,
      storesCatalogV3Product_universal_d_IndexDocument as IndexDocument,
      storesCatalogV3Product_universal_d_DocumentPayload as DocumentPayload,
      storesCatalogV3Product_universal_d_DocumentImage as DocumentImage,
      storesCatalogV3Product_universal_d_Enum as Enum,
      storesCatalogV3Product_universal_d_DeleteByIdsOperation as DeleteByIdsOperation,
      storesCatalogV3Product_universal_d_DeleteByFilterOperation as DeleteByFilterOperation,
      storesCatalogV3Product_universal_d_UpdateByFilterOperation as UpdateByFilterOperation,
      storesCatalogV3Product_universal_d_UpdateExistingOperation as UpdateExistingOperation,
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      Empty$2 as Empty,
      storesCatalogV3Product_universal_d_SearchIndexingNotification as SearchIndexingNotification,
      storesCatalogV3Product_universal_d_State as State,
      MessageEnvelope$2 as MessageEnvelope,
      IdentificationData$2 as IdentificationData,
      IdentificationDataIdOneOf$2 as IdentificationDataIdOneOf,
      WebhookIdentityType$2 as WebhookIdentityType,
      storesCatalogV3Product_universal_d_CreateProductRequest as CreateProductRequest,
      storesCatalogV3Product_universal_d_ProductComposite as ProductComposite,
      storesCatalogV3Product_universal_d_ProductCompositeTypedPropertiesOneOf as ProductCompositeTypedPropertiesOneOf,
      storesCatalogV3Product_universal_d_VariantComposite as VariantComposite,
      storesCatalogV3Product_universal_d_VariantCompositeTypedPropertiesOneOf as VariantCompositeTypedPropertiesOneOf,
      storesCatalogV3Product_universal_d_InventoryItemComposite as InventoryItemComposite,
      storesCatalogV3Product_universal_d_InventoryItemCompositeTrackingMethodOneOf as InventoryItemCompositeTrackingMethodOneOf,
      storesCatalogV3Product_universal_d_PreorderInfo as PreorderInfo,
      storesCatalogV3Product_universal_d_OptionChoiceReferences as OptionChoiceReferences,
      storesCatalogV3Product_universal_d_VariantsInfo as VariantsInfo,
      RequestedFields$1 as RequestedFields,
      storesCatalogV3Product_universal_d_CreateProductResponse as CreateProductResponse,
      storesCatalogV3Product_universal_d_BulkInventoryItemResults as BulkInventoryItemResults,
      storesCatalogV3Product_universal_d_BulkInventoryItemResult as BulkInventoryItemResult,
      ItemMetadata$1 as ItemMetadata,
      ApplicationError$1 as ApplicationError,
      storesCatalogV3Product_universal_d_InventoryItem as InventoryItem,
      storesCatalogV3Product_universal_d_InventoryItemTrackingMethodOneOf as InventoryItemTrackingMethodOneOf,
      storesCatalogV3Product_universal_d_ItemAvailability as ItemAvailability,
      storesCatalogV3Product_universal_d_AvailabilityStatus as AvailabilityStatus,
      storesCatalogV3Product_universal_d_V3AvailabilityStatus as V3AvailabilityStatus,
      BulkActionMetadata$1 as BulkActionMetadata,
      storesCatalogV3Product_universal_d_VariantsNotAlignedWithProduct as VariantsNotAlignedWithProduct,
      storesCatalogV3Product_universal_d_VariantNotAlignedWithProduct as VariantNotAlignedWithProduct,
      storesCatalogV3Product_universal_d_InventoryBulkErrors as InventoryBulkErrors,
      storesCatalogV3Product_universal_d_UpdateProductRequest as UpdateProductRequest,
      storesCatalogV3Product_universal_d_UpdateProductResponse as UpdateProductResponse,
      storesCatalogV3Product_universal_d_UnsupportedFieldMasks as UnsupportedFieldMasks,
      storesCatalogV3Product_universal_d_BulkCreateProductsRequest as BulkCreateProductsRequest,
      storesCatalogV3Product_universal_d_BulkCreateProductsResponse as BulkCreateProductsResponse,
      storesCatalogV3Product_universal_d_BulkProductResult as BulkProductResult,
      storesCatalogV3Product_universal_d_BulkProductResults as BulkProductResults,
      storesCatalogV3Product_universal_d_BulkUpdateProductsRequest as BulkUpdateProductsRequest,
      storesCatalogV3Product_universal_d_MaskedProductComposite as MaskedProductComposite,
      storesCatalogV3Product_universal_d_BulkUpdateProductsResponse as BulkUpdateProductsResponse,
      storesCatalogV3Product_universal_d_BulkAddProductsToCategoriesByFilterRequest as BulkAddProductsToCategoriesByFilterRequest,
      storesCatalogV3Product_universal_d_BulkAddProductsToCategoriesByFilterResponse as BulkAddProductsToCategoriesByFilterResponse,
      storesCatalogV3Product_universal_d_BulkRemoveProductsFromCategoriesByFilterRequest as BulkRemoveProductsFromCategoriesByFilterRequest,
      storesCatalogV3Product_universal_d_BulkRemoveProductsFromCategoriesByFilterResponse as BulkRemoveProductsFromCategoriesByFilterResponse,
      InvalidateCache$2 as InvalidateCache,
      InvalidateCacheGetByOneOf$2 as InvalidateCacheGetByOneOf,
      App$2 as App,
      Page$2 as Page,
      URI$2 as URI,
      File$2 as File,
      storesCatalogV3Product_universal_d_DoNotCallCreateProductRequest as DoNotCallCreateProductRequest,
      storesCatalogV3Product_universal_d_DoNotCallCreateProductResponse as DoNotCallCreateProductResponse,
      storesCatalogV3Product_universal_d_VariantAdded as VariantAdded,
      storesCatalogV3Product_universal_d_GetProductRequest as GetProductRequest,
      storesCatalogV3Product_universal_d_GetProductResponse as GetProductResponse,
      storesCatalogV3Product_universal_d_GetProductBySlugRequest as GetProductBySlugRequest,
      storesCatalogV3Product_universal_d_GetProductBySlugResponse as GetProductBySlugResponse,
      storesCatalogV3Product_universal_d_DoNotCallUpdateProductRequest as DoNotCallUpdateProductRequest,
      storesCatalogV3Product_universal_d_DoNotCallUpdateProductResponse as DoNotCallUpdateProductResponse,
      storesCatalogV3Product_universal_d_VariantUpdated as VariantUpdated,
      storesCatalogV3Product_universal_d_VariantRemoved as VariantRemoved,
      storesCatalogV3Product_universal_d_DeleteProductRequest as DeleteProductRequest,
      storesCatalogV3Product_universal_d_DeleteProductResponse as DeleteProductResponse,
      storesCatalogV3Product_universal_d_SearchProductsRequest as SearchProductsRequest,
      storesCatalogV3Product_universal_d_CursorSearch as CursorSearch,
      storesCatalogV3Product_universal_d_CursorSearchPagingMethodOneOf as CursorSearchPagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      storesCatalogV3Product_universal_d_Aggregation as Aggregation,
      storesCatalogV3Product_universal_d_AggregationKindOneOf as AggregationKindOneOf,
      storesCatalogV3Product_universal_d_RangeBucket as RangeBucket,
      storesCatalogV3Product_universal_d_SortType as SortType,
      storesCatalogV3Product_universal_d_SortDirection as SortDirection,
      storesCatalogV3Product_universal_d_MissingValues as MissingValues,
      storesCatalogV3Product_universal_d_IncludeMissingValuesOptions as IncludeMissingValuesOptions,
      storesCatalogV3Product_universal_d_ScalarType as ScalarType,
      storesCatalogV3Product_universal_d_ValueAggregation as ValueAggregation,
      storesCatalogV3Product_universal_d_ValueAggregationOptionsOneOf as ValueAggregationOptionsOneOf,
      storesCatalogV3Product_universal_d_NestedAggregationType as NestedAggregationType,
      storesCatalogV3Product_universal_d_RangeAggregation as RangeAggregation,
      storesCatalogV3Product_universal_d_ScalarAggregation as ScalarAggregation,
      storesCatalogV3Product_universal_d_DateHistogramAggregation as DateHistogramAggregation,
      storesCatalogV3Product_universal_d_Interval as Interval,
      storesCatalogV3Product_universal_d_NestedAggregationItem as NestedAggregationItem,
      storesCatalogV3Product_universal_d_NestedAggregationItemKindOneOf as NestedAggregationItemKindOneOf,
      storesCatalogV3Product_universal_d_AggregationType as AggregationType,
      storesCatalogV3Product_universal_d_NestedAggregation as NestedAggregation,
      storesCatalogV3Product_universal_d_GroupByAggregation as GroupByAggregation,
      storesCatalogV3Product_universal_d_GroupByAggregationKindOneOf as GroupByAggregationKindOneOf,
      storesCatalogV3Product_universal_d_SearchDetails as SearchDetails,
      storesCatalogV3Product_universal_d_Mode as Mode,
      CursorPaging$2 as CursorPaging,
      storesCatalogV3Product_universal_d_SearchProductsResponse as SearchProductsResponse,
      CursorPagingMetadata$2 as CursorPagingMetadata,
      Cursors$2 as Cursors,
      storesCatalogV3Product_universal_d_AggregationData as AggregationData,
      storesCatalogV3Product_universal_d_ValueAggregationResult as ValueAggregationResult,
      storesCatalogV3Product_universal_d_RangeAggregationResult as RangeAggregationResult,
      storesCatalogV3Product_universal_d_NestedAggregationResults as NestedAggregationResults,
      storesCatalogV3Product_universal_d_NestedAggregationResultsResultOneOf as NestedAggregationResultsResultOneOf,
      storesCatalogV3Product_universal_d_ValueResults as ValueResults,
      storesCatalogV3Product_universal_d_RangeResults as RangeResults,
      storesCatalogV3Product_universal_d_AggregationResultsScalarResult as AggregationResultsScalarResult,
      storesCatalogV3Product_universal_d_NestedValueAggregationResult as NestedValueAggregationResult,
      storesCatalogV3Product_universal_d_ValueResult as ValueResult,
      storesCatalogV3Product_universal_d_RangeResult as RangeResult,
      storesCatalogV3Product_universal_d_ScalarResult as ScalarResult,
      storesCatalogV3Product_universal_d_NestedResultValue as NestedResultValue,
      storesCatalogV3Product_universal_d_NestedResultValueResultOneOf as NestedResultValueResultOneOf,
      storesCatalogV3Product_universal_d_Results as Results,
      storesCatalogV3Product_universal_d_DateHistogramResult as DateHistogramResult,
      storesCatalogV3Product_universal_d_GroupByValueResults as GroupByValueResults,
      storesCatalogV3Product_universal_d_DateHistogramResults as DateHistogramResults,
      storesCatalogV3Product_universal_d_NestedResults as NestedResults,
      storesCatalogV3Product_universal_d_AggregationResults as AggregationResults,
      storesCatalogV3Product_universal_d_AggregationResultsResultOneOf as AggregationResultsResultOneOf,
      storesCatalogV3Product_universal_d_EventuallyConsistentQueryProductsRequest as EventuallyConsistentQueryProductsRequest,
      CursorQuery$2 as CursorQuery,
      CursorQueryPagingMethodOneOf$2 as CursorQueryPagingMethodOneOf,
      storesCatalogV3Product_universal_d_EventuallyConsistentQueryProductsResponse as EventuallyConsistentQueryProductsResponse,
      storesCatalogV3Product_universal_d_QueryProductsRequest as QueryProductsRequest,
      storesCatalogV3Product_universal_d_QueryProductsResponse as QueryProductsResponse,
      storesCatalogV3Product_universal_d_DeprecatedSearchProductsWithOffsetRequest as DeprecatedSearchProductsWithOffsetRequest,
      storesCatalogV3Product_universal_d_PlatformOffsetSearch as PlatformOffsetSearch,
      storesCatalogV3Product_universal_d_PlatformOffsetSearchPagingMethodOneOf as PlatformOffsetSearchPagingMethodOneOf,
      storesCatalogV3Product_universal_d_PlatformPaging as PlatformPaging,
      storesCatalogV3Product_universal_d_DeprecatedSearchProductsWithOffsetResponse as DeprecatedSearchProductsWithOffsetResponse,
      storesCatalogV3Product_universal_d_PagingMetadata as PagingMetadata,
      storesCatalogV3Product_universal_d_CountProductsRequest as CountProductsRequest,
      storesCatalogV3Product_universal_d_CountProductsResponse as CountProductsResponse,
      storesCatalogV3Product_universal_d_DoNotCallBulkCreateProductsRequest as DoNotCallBulkCreateProductsRequest,
      storesCatalogV3Product_universal_d_DoNotCallBulkCreateProductsResponse as DoNotCallBulkCreateProductsResponse,
      storesCatalogV3Product_universal_d_DoNotCallBulkUpdateProductsRequest as DoNotCallBulkUpdateProductsRequest,
      storesCatalogV3Product_universal_d_MaskedProduct as MaskedProduct,
      storesCatalogV3Product_universal_d_DoNotCallBulkUpdateProductsResponse as DoNotCallBulkUpdateProductsResponse,
      storesCatalogV3Product_universal_d_BulkUpdateProductsByFilterRequest as BulkUpdateProductsByFilterRequest,
      storesCatalogV3Product_universal_d_BulkUpdateProductsByFilterResponse as BulkUpdateProductsByFilterResponse,
      storesCatalogV3Product_universal_d_BulkDeleteProductsRequest as BulkDeleteProductsRequest,
      storesCatalogV3Product_universal_d_BulkDeleteProductsResponse as BulkDeleteProductsResponse,
      storesCatalogV3Product_universal_d_BulkDeleteProductsByFilterRequest as BulkDeleteProductsByFilterRequest,
      storesCatalogV3Product_universal_d_BulkDeleteProductsByFilterResponse as BulkDeleteProductsByFilterResponse,
      storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsByFilterRequest as BulkAddInfoSectionsToProductsByFilterRequest,
      storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsByFilterResponse as BulkAddInfoSectionsToProductsByFilterResponse,
      storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsRequest as BulkAddInfoSectionsToProductsRequest,
      storesCatalogV3Product_universal_d_ProductIdWithRevision as ProductIdWithRevision,
      storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsResponse as BulkAddInfoSectionsToProductsResponse,
      storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsByFilterRequest as BulkRemoveInfoSectionsFromProductsByFilterRequest,
      storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsByFilterResponse as BulkRemoveInfoSectionsFromProductsByFilterResponse,
      storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsRequest as BulkRemoveInfoSectionsFromProductsRequest,
      storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsResponse as BulkRemoveInfoSectionsFromProductsResponse,
      storesCatalogV3Product_universal_d_BulkUpdateVariantsByFilterRequest as BulkUpdateVariantsByFilterRequest,
      storesCatalogV3Product_universal_d_BulkUpdateVariantsByFilterResponse as BulkUpdateVariantsByFilterResponse,
      storesCatalogV3Product_universal_d_BulkAdjustVariantsByFilterRequest as BulkAdjustVariantsByFilterRequest,
      storesCatalogV3Product_universal_d_AdjustValue as AdjustValue,
      storesCatalogV3Product_universal_d_AdjustValueAdjustValueOneOf as AdjustValueAdjustValueOneOf,
      storesCatalogV3Product_universal_d_UnsignedAdjustValue as UnsignedAdjustValue,
      storesCatalogV3Product_universal_d_UnsignedAdjustValueAdjustValueOneOf as UnsignedAdjustValueAdjustValueOneOf,
      storesCatalogV3Product_universal_d_RoundingStrategy as RoundingStrategy,
      storesCatalogV3Product_universal_d_BulkAdjustVariantsByFilterResponse as BulkAdjustVariantsByFilterResponse,
      storesCatalogV3Product_universal_d_catalogCreateProduct as catalogCreateProduct,
      storesCatalogV3Product_universal_d_CatalogCreateProductOptions as CatalogCreateProductOptions,
      storesCatalogV3Product_universal_d_catalogUpdateProduct as catalogUpdateProduct,
      storesCatalogV3Product_universal_d_CatalogUpdateProduct as CatalogUpdateProduct,
      storesCatalogV3Product_universal_d_CatalogUpdateProductOptions as CatalogUpdateProductOptions,
      storesCatalogV3Product_universal_d_catalogBulkCreateProducts as catalogBulkCreateProducts,
      storesCatalogV3Product_universal_d_CatalogBulkCreateProductsOptions as CatalogBulkCreateProductsOptions,
      storesCatalogV3Product_universal_d_catalogBulkUpdateProducts as catalogBulkUpdateProducts,
      storesCatalogV3Product_universal_d_CatalogBulkUpdateProductsOptions as CatalogBulkUpdateProductsOptions,
      storesCatalogV3Product_universal_d_bulkAddProductsToCategoriesByFilter as bulkAddProductsToCategoriesByFilter,
      storesCatalogV3Product_universal_d_BulkAddProductsToCategoriesByFilterOptions as BulkAddProductsToCategoriesByFilterOptions,
      storesCatalogV3Product_universal_d_bulkRemoveProductsFromCategoriesByFilter as bulkRemoveProductsFromCategoriesByFilter,
      storesCatalogV3Product_universal_d_BulkRemoveProductsFromCategoriesByFilterOptions as BulkRemoveProductsFromCategoriesByFilterOptions,
      storesCatalogV3Product_universal_d_getProduct as getProduct,
      storesCatalogV3Product_universal_d_GetProductOptions as GetProductOptions,
      storesCatalogV3Product_universal_d_getProductBySlug as getProductBySlug,
      storesCatalogV3Product_universal_d_GetProductBySlugOptions as GetProductBySlugOptions,
      storesCatalogV3Product_universal_d_deleteProduct as deleteProduct,
      storesCatalogV3Product_universal_d_searchProducts as searchProducts,
      storesCatalogV3Product_universal_d_SearchProductsOptions as SearchProductsOptions,
      storesCatalogV3Product_universal_d_eventuallyConsistentQueryProducts as eventuallyConsistentQueryProducts,
      storesCatalogV3Product_universal_d_EventuallyConsistentQueryProductsOptions as EventuallyConsistentQueryProductsOptions,
      storesCatalogV3Product_universal_d_queryProducts as queryProducts,
      storesCatalogV3Product_universal_d_QueryProductsOptions as QueryProductsOptions,
      storesCatalogV3Product_universal_d_ProductsQueryResult as ProductsQueryResult,
      storesCatalogV3Product_universal_d_ProductsQueryBuilder as ProductsQueryBuilder,
      storesCatalogV3Product_universal_d_countProducts as countProducts,
      storesCatalogV3Product_universal_d_CountProductsOptions as CountProductsOptions,
      storesCatalogV3Product_universal_d_bulkUpdateProductsByFilter as bulkUpdateProductsByFilter,
      storesCatalogV3Product_universal_d_BulkUpdateProductsByFilterOptions as BulkUpdateProductsByFilterOptions,
      storesCatalogV3Product_universal_d_bulkDeleteProducts as bulkDeleteProducts,
      storesCatalogV3Product_universal_d_bulkDeleteProductsByFilter as bulkDeleteProductsByFilter,
      storesCatalogV3Product_universal_d_bulkAddInfoSectionsToProductsByFilter as bulkAddInfoSectionsToProductsByFilter,
      storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsByFilterOptions as BulkAddInfoSectionsToProductsByFilterOptions,
      storesCatalogV3Product_universal_d_bulkAddInfoSectionsToProducts as bulkAddInfoSectionsToProducts,
      storesCatalogV3Product_universal_d_BulkAddInfoSectionsToProductsOptions as BulkAddInfoSectionsToProductsOptions,
      storesCatalogV3Product_universal_d_bulkRemoveInfoSectionsFromProductsByFilter as bulkRemoveInfoSectionsFromProductsByFilter,
      storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsByFilterOptions as BulkRemoveInfoSectionsFromProductsByFilterOptions,
      storesCatalogV3Product_universal_d_bulkRemoveInfoSectionsFromProducts as bulkRemoveInfoSectionsFromProducts,
      storesCatalogV3Product_universal_d_BulkRemoveInfoSectionsFromProductsOptions as BulkRemoveInfoSectionsFromProductsOptions,
      storesCatalogV3Product_universal_d_bulkUpdateVariantsByFilter as bulkUpdateVariantsByFilter,
      storesCatalogV3Product_universal_d_BulkUpdateVariantsByFilterOptions as BulkUpdateVariantsByFilterOptions,
      storesCatalogV3Product_universal_d_bulkAdjustVariantsByFilter as bulkAdjustVariantsByFilter,
      storesCatalogV3Product_universal_d_BulkAdjustVariantsByFilterOptions as BulkAdjustVariantsByFilterOptions,
    };
  }
  
  /** Ribbon is the main entity of RibbonService */
  interface Ribbon {
      /**
       * Ribbon ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the Ribbon is updated.
       * To prevent conflicting changes,
       * the current revision must be passed when updating the Ribbon.
       *
       * Ignored when creating a Ribbon.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the Ribbon was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the Ribbon was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Ribbon name */
      name?: string;
      /**
       * Number of products assigned to this ribbon.
       * > **Note:** This field is returned by the API only when you pass `fields: "ASSIGNED_PRODUCT_COUNT"` in the request for Get Ribbon and Query Ribbons endpoints.
       * @readonly
       */
      assignedProductCount?: number | null;
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
  interface CreateRibbonRequest {
      /** Ribbon to be created. */
      ribbon: Ribbon;
  }
  interface CreateRibbonResponse {
      /** The created Ribbon. */
      ribbon?: Ribbon;
  }
  interface GetRibbonRequest {
      /** ID of the Ribbon to retrieve. */
      ribbonId: string;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  enum RequestedFields {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      ASSIGNED_PRODUCT_COUNT = "ASSIGNED_PRODUCT_COUNT"
  }
  interface GetRibbonResponse {
      /** The requested Ribbon. */
      ribbon?: Ribbon;
  }
  interface UpdateRibbonRequest {
      /** Ribbon to be updated, may be partial. */
      ribbon: Ribbon;
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface UpdateRibbonResponse {
      /** Updated Ribbon. */
      ribbon?: Ribbon;
  }
  interface DeleteRibbonRequest {
      /** Id of the Ribbon to delete. */
      ribbonId: string;
  }
  interface DeleteRibbonResponse {
  }
  interface QueryRibbonsRequest {
      /** WQL expression. */
      query?: CursorQuery$1;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
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
  interface QueryRibbonsResponse {
      /** List of Ribbons. */
      ribbons?: Ribbon[];
      /** Paging metadata */
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
  interface BulkCreateRibbonsRequest {
      /** List of ribbons to be created. */
      ribbons: Ribbon[];
      /** Whether to return the full ribbon entity in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateRibbonsResponse {
      /** ribbons created by bulk action. */
      results?: BulkRibbonResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkRibbonResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata;
      /** Updated ribbon Optional - returned only if requested with `return_entity` set to `true`. */
      item?: Ribbon;
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
  interface BulkUpdateRibbonsRequest {
      /** List of ribbons to be updated */
      ribbons: MaskedRibbon[];
      /** Whether to return the full ribbon entity in the response. */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface MaskedRibbon {
      /** ribbons to be updated, may be partial */
      ribbon?: Ribbon;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateRibbonsResponse {
      /** Updated ribbons */
      results?: BulkRibbonResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface GetOrCreateRibbonRequest {
      /** The ribbon name to fetch or create if doesn't exist */
      ribbonName: string;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface GetOrCreateRibbonResponse {
      ribbon?: Ribbon;
  }
  interface BulkGetOrCreateRibbonsRequest {
      /** The ribbon names to fetch or create if they don't exist */
      ribbonNames: string[];
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  interface BulkGetOrCreateRibbonsResponse {
      /** ribbons created by bulk action. */
      results?: BulkRibbonResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDeleteRibbonsRequest {
      /** IDs of ribbons to delete. */
      ribbonIds: string[];
  }
  interface BulkDeleteRibbonsResponse {
      /** ribbons deleted by bulk action. */
      results?: ItemMetadata[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
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
  interface Empty$1 {
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
   * Creates a Ribbon.
   *
   * The request body must include name.
   * @param ribbon - Ribbon to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField ribbon
   * @requiredField ribbon.name
   * @adminMethod
   * @returns The created Ribbon.
   */
  function createRibbon(ribbon: Ribbon): Promise<Ribbon>;
  /**
   * Retrieves a Ribbon.
   * @param ribbonId - ID of the Ribbon to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField ribbonId
   * @adminMethod
   * @returns The requested Ribbon.
   */
  function getRibbon(ribbonId: string, options?: GetRibbonOptions): Promise<Ribbon>;
  interface GetRibbonOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  /**
   * Updates a Ribbon.
   *
   *
   * Each time the Ribbon is updated,
   * `revision` increments by 1.
   * The current `revision` must be passed when updating the Ribbon.
   * This ensures you're working with the latest Ribbon
   * and prevents unintended overwrites.
   * @param _id - Ribbon ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField ribbon
   * @requiredField ribbon.revision
   * @adminMethod
   * @returns Updated Ribbon.
   */
  function updateRibbon(_id: string | null, ribbon: UpdateRibbon, options?: UpdateRibbonOptions): Promise<Ribbon>;
  interface UpdateRibbon {
      /**
       * Ribbon ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the Ribbon is updated.
       * To prevent conflicting changes,
       * the current revision must be passed when updating the Ribbon.
       *
       * Ignored when creating a Ribbon.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the Ribbon was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the Ribbon was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Ribbon name */
      name?: string;
      /**
       * Number of products assigned to this ribbon.
       * > **Note:** This field is returned by the API only when you pass `fields: "ASSIGNED_PRODUCT_COUNT"` in the request for Get Ribbon and Query Ribbons endpoints.
       * @readonly
       */
      assignedProductCount?: number | null;
  }
  interface UpdateRibbonOptions {
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  /**
   * Deletes a Ribbon.
   *
   *
   * Deleting a Ribbon permanently removes them from the Ribbon List.
   * @param ribbonId - Id of the Ribbon to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField ribbonId
   * @adminMethod
   */
  function deleteRibbon(ribbonId: string): Promise<void>;
  /**
   * Retrieves a list of Ribbons, given the provided [paging, filtering, and sorting][1].
   *
   * Up to 1,000 Ribbons can be returned per request.
   *
   * To learn how to query Ribbons, see [API Query Language][2].
   *
   * [1]: https://dev.wix.com/api/rest/getting-started/sorting-and-paging
   * [2]: https://dev.wix.com/api/rest/getting-started/api-query-language
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryRibbons(options?: QueryRibbonsOptions): RibbonsQueryBuilder;
  interface QueryRibbonsOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[] | undefined;
  }
  interface QueryCursorResult$1 {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface RibbonsQueryResult extends QueryCursorResult$1 {
      items: Ribbon[];
      query: RibbonsQueryBuilder;
      next: () => Promise<RibbonsQueryResult>;
      prev: () => Promise<RibbonsQueryResult>;
  }
  interface RibbonsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name', value: any) => RibbonsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name', value: any) => RibbonsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => RibbonsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => RibbonsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => RibbonsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => RibbonsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'name', value: string) => RibbonsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name', value: any[]) => RibbonsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name', value: any) => RibbonsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'name', value: boolean) => RibbonsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_createdDate' | '_updatedDate' | 'name'>) => RibbonsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_createdDate' | '_updatedDate' | 'name'>) => RibbonsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => RibbonsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => RibbonsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<RibbonsQueryResult>;
  }
  /**
   * Creates multiple ribbons.
   * @param ribbons - List of ribbons to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField ribbons
   * @requiredField ribbons.name
   * @adminMethod
   */
  function bulkCreateRibbons(ribbons: Ribbon[], options?: BulkCreateRibbonsOptions): Promise<BulkCreateRibbonsResponse>;
  interface BulkCreateRibbonsOptions {
      /** Whether to return the full ribbon entity in the response. */
      returnEntity?: boolean;
  }
  /**
   * Bulk updates ribbons
   * @param ribbons - List of ribbons to be updated
   * @internal
   * @documentationMaturity preview
   * @requiredField ribbons
   * @requiredField ribbons.ribbon._id
   * @requiredField ribbons.ribbon.revision
   * @adminMethod
   */
  function bulkUpdateRibbons(ribbons: MaskedRibbon[], options?: BulkUpdateRibbonsOptions): Promise<BulkUpdateRibbonsResponse>;
  interface BulkUpdateRibbonsOptions {
      /** Whether to return the full ribbon entity in the response. */
      returnEntity?: boolean;
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  /**
   * Fetches the ribbon by name, or creates it if it doesn't exist.
   * @param ribbonName - The ribbon name to fetch or create if doesn't exist
   * @internal
   * @documentationMaturity preview
   * @requiredField ribbonName
   * @adminMethod
   */
  function getOrCreateRibbon(ribbonName: string, options?: GetOrCreateRibbonOptions): Promise<GetOrCreateRibbonResponse>;
  interface GetOrCreateRibbonOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  /**
   * Fetches multiple ribbons by name, or creates them if they doesn't exist.
   * @param ribbonNames - The ribbon names to fetch or create if they don't exist
   * @internal
   * @documentationMaturity preview
   * @requiredField ribbonNames
   * @adminMethod
   */
  function bulkGetOrCreateRibbons(ribbonNames: string[], options?: BulkGetOrCreateRibbonsOptions): Promise<BulkGetOrCreateRibbonsResponse>;
  interface BulkGetOrCreateRibbonsOptions {
      /** A list of requested fields to be included in the response. */
      fields?: RequestedFields[];
  }
  /**
   * Deletes multiple ribbons
   * @param ribbonIds - IDs of ribbons to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField ribbonIds
   * @adminMethod
   */
  function bulkDeleteRibbons(ribbonIds: string[]): Promise<BulkDeleteRibbonsResponse>;
  
  type storesCatalogV3Ribbon_universal_d_Ribbon = Ribbon;
  type storesCatalogV3Ribbon_universal_d_CreateRibbonRequest = CreateRibbonRequest;
  type storesCatalogV3Ribbon_universal_d_CreateRibbonResponse = CreateRibbonResponse;
  type storesCatalogV3Ribbon_universal_d_GetRibbonRequest = GetRibbonRequest;
  type storesCatalogV3Ribbon_universal_d_RequestedFields = RequestedFields;
  const storesCatalogV3Ribbon_universal_d_RequestedFields: typeof RequestedFields;
  type storesCatalogV3Ribbon_universal_d_GetRibbonResponse = GetRibbonResponse;
  type storesCatalogV3Ribbon_universal_d_UpdateRibbonRequest = UpdateRibbonRequest;
  type storesCatalogV3Ribbon_universal_d_UpdateRibbonResponse = UpdateRibbonResponse;
  type storesCatalogV3Ribbon_universal_d_DeleteRibbonRequest = DeleteRibbonRequest;
  type storesCatalogV3Ribbon_universal_d_DeleteRibbonResponse = DeleteRibbonResponse;
  type storesCatalogV3Ribbon_universal_d_QueryRibbonsRequest = QueryRibbonsRequest;
  type storesCatalogV3Ribbon_universal_d_QueryRibbonsResponse = QueryRibbonsResponse;
  type storesCatalogV3Ribbon_universal_d_BulkCreateRibbonsRequest = BulkCreateRibbonsRequest;
  type storesCatalogV3Ribbon_universal_d_BulkCreateRibbonsResponse = BulkCreateRibbonsResponse;
  type storesCatalogV3Ribbon_universal_d_BulkRibbonResult = BulkRibbonResult;
  type storesCatalogV3Ribbon_universal_d_ItemMetadata = ItemMetadata;
  type storesCatalogV3Ribbon_universal_d_ApplicationError = ApplicationError;
  type storesCatalogV3Ribbon_universal_d_BulkActionMetadata = BulkActionMetadata;
  type storesCatalogV3Ribbon_universal_d_BulkUpdateRibbonsRequest = BulkUpdateRibbonsRequest;
  type storesCatalogV3Ribbon_universal_d_MaskedRibbon = MaskedRibbon;
  type storesCatalogV3Ribbon_universal_d_BulkUpdateRibbonsResponse = BulkUpdateRibbonsResponse;
  type storesCatalogV3Ribbon_universal_d_GetOrCreateRibbonRequest = GetOrCreateRibbonRequest;
  type storesCatalogV3Ribbon_universal_d_GetOrCreateRibbonResponse = GetOrCreateRibbonResponse;
  type storesCatalogV3Ribbon_universal_d_BulkGetOrCreateRibbonsRequest = BulkGetOrCreateRibbonsRequest;
  type storesCatalogV3Ribbon_universal_d_BulkGetOrCreateRibbonsResponse = BulkGetOrCreateRibbonsResponse;
  type storesCatalogV3Ribbon_universal_d_BulkDeleteRibbonsRequest = BulkDeleteRibbonsRequest;
  type storesCatalogV3Ribbon_universal_d_BulkDeleteRibbonsResponse = BulkDeleteRibbonsResponse;
  const storesCatalogV3Ribbon_universal_d_createRibbon: typeof createRibbon;
  const storesCatalogV3Ribbon_universal_d_getRibbon: typeof getRibbon;
  type storesCatalogV3Ribbon_universal_d_GetRibbonOptions = GetRibbonOptions;
  const storesCatalogV3Ribbon_universal_d_updateRibbon: typeof updateRibbon;
  type storesCatalogV3Ribbon_universal_d_UpdateRibbon = UpdateRibbon;
  type storesCatalogV3Ribbon_universal_d_UpdateRibbonOptions = UpdateRibbonOptions;
  const storesCatalogV3Ribbon_universal_d_deleteRibbon: typeof deleteRibbon;
  const storesCatalogV3Ribbon_universal_d_queryRibbons: typeof queryRibbons;
  type storesCatalogV3Ribbon_universal_d_QueryRibbonsOptions = QueryRibbonsOptions;
  type storesCatalogV3Ribbon_universal_d_RibbonsQueryResult = RibbonsQueryResult;
  type storesCatalogV3Ribbon_universal_d_RibbonsQueryBuilder = RibbonsQueryBuilder;
  const storesCatalogV3Ribbon_universal_d_bulkCreateRibbons: typeof bulkCreateRibbons;
  type storesCatalogV3Ribbon_universal_d_BulkCreateRibbonsOptions = BulkCreateRibbonsOptions;
  const storesCatalogV3Ribbon_universal_d_bulkUpdateRibbons: typeof bulkUpdateRibbons;
  type storesCatalogV3Ribbon_universal_d_BulkUpdateRibbonsOptions = BulkUpdateRibbonsOptions;
  const storesCatalogV3Ribbon_universal_d_getOrCreateRibbon: typeof getOrCreateRibbon;
  type storesCatalogV3Ribbon_universal_d_GetOrCreateRibbonOptions = GetOrCreateRibbonOptions;
  const storesCatalogV3Ribbon_universal_d_bulkGetOrCreateRibbons: typeof bulkGetOrCreateRibbons;
  type storesCatalogV3Ribbon_universal_d_BulkGetOrCreateRibbonsOptions = BulkGetOrCreateRibbonsOptions;
  const storesCatalogV3Ribbon_universal_d_bulkDeleteRibbons: typeof bulkDeleteRibbons;
  namespace storesCatalogV3Ribbon_universal_d {
    export {
      storesCatalogV3Ribbon_universal_d_Ribbon as Ribbon,
      InvalidateCache$1 as InvalidateCache,
      InvalidateCacheGetByOneOf$1 as InvalidateCacheGetByOneOf,
      App$1 as App,
      Page$1 as Page,
      URI$1 as URI,
      File$1 as File,
      storesCatalogV3Ribbon_universal_d_CreateRibbonRequest as CreateRibbonRequest,
      storesCatalogV3Ribbon_universal_d_CreateRibbonResponse as CreateRibbonResponse,
      storesCatalogV3Ribbon_universal_d_GetRibbonRequest as GetRibbonRequest,
      storesCatalogV3Ribbon_universal_d_RequestedFields as RequestedFields,
      storesCatalogV3Ribbon_universal_d_GetRibbonResponse as GetRibbonResponse,
      storesCatalogV3Ribbon_universal_d_UpdateRibbonRequest as UpdateRibbonRequest,
      storesCatalogV3Ribbon_universal_d_UpdateRibbonResponse as UpdateRibbonResponse,
      storesCatalogV3Ribbon_universal_d_DeleteRibbonRequest as DeleteRibbonRequest,
      storesCatalogV3Ribbon_universal_d_DeleteRibbonResponse as DeleteRibbonResponse,
      storesCatalogV3Ribbon_universal_d_QueryRibbonsRequest as QueryRibbonsRequest,
      CursorQuery$1 as CursorQuery,
      CursorQueryPagingMethodOneOf$1 as CursorQueryPagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      CursorPaging$1 as CursorPaging,
      storesCatalogV3Ribbon_universal_d_QueryRibbonsResponse as QueryRibbonsResponse,
      CursorPagingMetadata$1 as CursorPagingMetadata,
      Cursors$1 as Cursors,
      storesCatalogV3Ribbon_universal_d_BulkCreateRibbonsRequest as BulkCreateRibbonsRequest,
      storesCatalogV3Ribbon_universal_d_BulkCreateRibbonsResponse as BulkCreateRibbonsResponse,
      storesCatalogV3Ribbon_universal_d_BulkRibbonResult as BulkRibbonResult,
      storesCatalogV3Ribbon_universal_d_ItemMetadata as ItemMetadata,
      storesCatalogV3Ribbon_universal_d_ApplicationError as ApplicationError,
      storesCatalogV3Ribbon_universal_d_BulkActionMetadata as BulkActionMetadata,
      storesCatalogV3Ribbon_universal_d_BulkUpdateRibbonsRequest as BulkUpdateRibbonsRequest,
      storesCatalogV3Ribbon_universal_d_MaskedRibbon as MaskedRibbon,
      storesCatalogV3Ribbon_universal_d_BulkUpdateRibbonsResponse as BulkUpdateRibbonsResponse,
      storesCatalogV3Ribbon_universal_d_GetOrCreateRibbonRequest as GetOrCreateRibbonRequest,
      storesCatalogV3Ribbon_universal_d_GetOrCreateRibbonResponse as GetOrCreateRibbonResponse,
      storesCatalogV3Ribbon_universal_d_BulkGetOrCreateRibbonsRequest as BulkGetOrCreateRibbonsRequest,
      storesCatalogV3Ribbon_universal_d_BulkGetOrCreateRibbonsResponse as BulkGetOrCreateRibbonsResponse,
      storesCatalogV3Ribbon_universal_d_BulkDeleteRibbonsRequest as BulkDeleteRibbonsRequest,
      storesCatalogV3Ribbon_universal_d_BulkDeleteRibbonsResponse as BulkDeleteRibbonsResponse,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      Empty$1 as Empty,
      MessageEnvelope$1 as MessageEnvelope,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
      storesCatalogV3Ribbon_universal_d_createRibbon as createRibbon,
      storesCatalogV3Ribbon_universal_d_getRibbon as getRibbon,
      storesCatalogV3Ribbon_universal_d_GetRibbonOptions as GetRibbonOptions,
      storesCatalogV3Ribbon_universal_d_updateRibbon as updateRibbon,
      storesCatalogV3Ribbon_universal_d_UpdateRibbon as UpdateRibbon,
      storesCatalogV3Ribbon_universal_d_UpdateRibbonOptions as UpdateRibbonOptions,
      storesCatalogV3Ribbon_universal_d_deleteRibbon as deleteRibbon,
      storesCatalogV3Ribbon_universal_d_queryRibbons as queryRibbons,
      storesCatalogV3Ribbon_universal_d_QueryRibbonsOptions as QueryRibbonsOptions,
      storesCatalogV3Ribbon_universal_d_RibbonsQueryResult as RibbonsQueryResult,
      storesCatalogV3Ribbon_universal_d_RibbonsQueryBuilder as RibbonsQueryBuilder,
      storesCatalogV3Ribbon_universal_d_bulkCreateRibbons as bulkCreateRibbons,
      storesCatalogV3Ribbon_universal_d_BulkCreateRibbonsOptions as BulkCreateRibbonsOptions,
      storesCatalogV3Ribbon_universal_d_bulkUpdateRibbons as bulkUpdateRibbons,
      storesCatalogV3Ribbon_universal_d_BulkUpdateRibbonsOptions as BulkUpdateRibbonsOptions,
      storesCatalogV3Ribbon_universal_d_getOrCreateRibbon as getOrCreateRibbon,
      storesCatalogV3Ribbon_universal_d_GetOrCreateRibbonOptions as GetOrCreateRibbonOptions,
      storesCatalogV3Ribbon_universal_d_bulkGetOrCreateRibbons as bulkGetOrCreateRibbons,
      storesCatalogV3Ribbon_universal_d_BulkGetOrCreateRibbonsOptions as BulkGetOrCreateRibbonsOptions,
      storesCatalogV3Ribbon_universal_d_bulkDeleteRibbons as bulkDeleteRibbons,
    };
  }
  
  interface StoresLocation {
      /**
       * StoresLocation ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the StoresLocation is updated.
       * To prevent conflicting changes,
       * the current revision must be passed when updating the StoresLocation.
       *
       * Ignored when creating a StoresLocation.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the StoresLocation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the StoresLocation was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** location_id from OS location service. */
      osLocationId?: string | null;
      /**
       * Indicates if the location is a physical site or virtual online store
       * @readonly
       */
      locationType?: LocationType;
      /**
       * Materialized display name of the location.
       * @readonly
       */
      name?: string;
      /** Whether the InventoryLocation is the default location. */
      defaultLocation?: boolean;
  }
  enum LocationType {
      UNKNOWN_LOCATION_TYPE = "UNKNOWN_LOCATION_TYPE",
      /** Online stores location. */
      VIRTUAL = "VIRTUAL",
      /** Physical location like POS */
      PHYSICAL = "PHYSICAL"
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
  interface CreateStoresLocationRequest {
      /** StoresLocation to be created. */
      storesLocation: StoresLocation;
  }
  interface CreateStoresLocationResponse {
      /** The created StoresLocation. */
      storesLocation?: StoresLocation;
  }
  interface GetStoresLocationRequest {
      /** ID of the StoresLocation to retrieve. */
      storesLocationId: string;
  }
  interface GetStoresLocationResponse {
      /** The requested StoresLocation. */
      storesLocation?: StoresLocation;
  }
  interface UpdateStoresLocationRequest {
      /** StoresLocation to be updated, may be partial. */
      storesLocation: StoresLocation;
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateStoresLocationResponse {
      /** Updated StoresLocation. */
      storesLocation?: StoresLocation;
  }
  interface DeleteStoresLocationRequest {
      /** Id of the StoresLocation to delete. */
      storesLocationId: string;
  }
  interface DeleteStoresLocationResponse {
  }
  interface QueryStoresLocationsRequest {
      /** WQL expression. */
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
  interface QueryStoresLocationsResponse {
      /** List of StoresLocations. */
      storesLocations?: StoresLocation[];
      /** Paging metadata */
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
  interface GetDefaultStoresLocationRequest {
  }
  interface GetDefaultStoresLocationResponse {
      /** The default StoresLocations. */
      storesLocation?: StoresLocation;
  }
  interface GetOrCreateDefaultStoresLocationRequest {
  }
  interface GetOrCreateDefaultStoresLocationResponse {
      /** The default StoresLocations. */
      storesLocation?: StoresLocation;
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
   * Creates a StoresLocation.
   *
   * The request body must include os_location_id of a corresponding site location:
   * https://bo.wix.com/wix-docs/rest/business-tools/locations/introduction
   * @param storesLocation - StoresLocation to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField storesLocation
   * @requiredField storesLocation.name
   * @adminMethod
   * @returns The created StoresLocation.
   */
  function createStoresLocation(storesLocation: StoresLocation): Promise<StoresLocation>;
  /**
   * Retrieves a StoresLocation.
   * @param storesLocationId - ID of the StoresLocation to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField storesLocationId
   * @returns The requested StoresLocation.
   */
  function getStoresLocation(storesLocationId: string): Promise<StoresLocation>;
  /**
   * Updates a StoresLocation.
   * Each time the StoresLocation is updated,
   * `revision` increments by 1.
   * The current `revision` must be passed when updating the StoresLocation.
   * This ensures you're working with the latest StoresLocation
   * and prevents unintended overwrites.
   * @param _id - StoresLocation ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField storesLocation
   * @requiredField storesLocation.revision
   * @adminMethod
   * @returns Updated StoresLocation.
   */
  function updateStoresLocation(_id: string | null, storesLocation: UpdateStoresLocation, options?: UpdateStoresLocationOptions): Promise<StoresLocation>;
  interface UpdateStoresLocation {
      /**
       * StoresLocation ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the StoresLocation is updated.
       * To prevent conflicting changes,
       * the current revision must be passed when updating the StoresLocation.
       *
       * Ignored when creating a StoresLocation.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the StoresLocation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the StoresLocation was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** location_id from OS location service. */
      osLocationId?: string | null;
      /**
       * Indicates if the location is a physical site or virtual online store
       * @readonly
       */
      locationType?: LocationType;
      /**
       * Materialized display name of the location.
       * @readonly
       */
      name?: string;
      /** Whether the InventoryLocation is the default location. */
      defaultLocation?: boolean;
  }
  interface UpdateStoresLocationOptions {
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes a StoresLocation.
   *
   *
   * Deleting a StoresLocation permanently removes them from the StoresLocation List.
   * @param storesLocationId - Id of the StoresLocation to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField storesLocationId
   * @adminMethod
   */
  function deleteStoresLocation(storesLocationId: string): Promise<void>;
  /**
   * Retrieves a list of StoresLocations, given the provided [paging, filtering, and sorting][1].
   *
   * Up to 1,000 StoresLocations can be returned per request.
   *
   * To learn how to query StoresLocations, see [API Query Language][2].
   *
   * [1]: https://dev.wix.com/api/rest/getting-started/sorting-and-paging
   * [2]: https://dev.wix.com/api/rest/getting-started/api-query-language
   *
   *
   * Notice, not all sits locations will be fetched, only the ones that are assigned as inventory locations
   * @internal
   * @documentationMaturity preview
   */
  function queryStoresLocations(): StoresLocationsQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface StoresLocationsQueryResult extends QueryCursorResult {
      items: StoresLocation[];
      query: StoresLocationsQueryBuilder;
      next: () => Promise<StoresLocationsQueryResult>;
      prev: () => Promise<StoresLocationsQueryResult>;
  }
  interface StoresLocationsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id', value: any) => StoresLocationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id', value: any) => StoresLocationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id', value: string) => StoresLocationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id', value: any[]) => StoresLocationsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id', value: any) => StoresLocationsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id', value: boolean) => StoresLocationsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => StoresLocationsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => StoresLocationsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<StoresLocationsQueryResult>;
  }
  /**
   * Retrieves the default inventory location.
   * @internal
   * @documentationMaturity preview
   */
  function getDefaultStoresLocation(): Promise<GetDefaultStoresLocationResponse>;
  /**
   * Retrieves the default inventory location, or creates it if it doesn't exist.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getOrCreateDefaultStoresLocation(): Promise<GetOrCreateDefaultStoresLocationResponse>;
  
  type storesCatalogV3StoresLocation_universal_d_StoresLocation = StoresLocation;
  type storesCatalogV3StoresLocation_universal_d_LocationType = LocationType;
  const storesCatalogV3StoresLocation_universal_d_LocationType: typeof LocationType;
  type storesCatalogV3StoresLocation_universal_d_InvalidateCache = InvalidateCache;
  type storesCatalogV3StoresLocation_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type storesCatalogV3StoresLocation_universal_d_App = App;
  type storesCatalogV3StoresLocation_universal_d_Page = Page;
  type storesCatalogV3StoresLocation_universal_d_URI = URI;
  type storesCatalogV3StoresLocation_universal_d_File = File;
  type storesCatalogV3StoresLocation_universal_d_CreateStoresLocationRequest = CreateStoresLocationRequest;
  type storesCatalogV3StoresLocation_universal_d_CreateStoresLocationResponse = CreateStoresLocationResponse;
  type storesCatalogV3StoresLocation_universal_d_GetStoresLocationRequest = GetStoresLocationRequest;
  type storesCatalogV3StoresLocation_universal_d_GetStoresLocationResponse = GetStoresLocationResponse;
  type storesCatalogV3StoresLocation_universal_d_UpdateStoresLocationRequest = UpdateStoresLocationRequest;
  type storesCatalogV3StoresLocation_universal_d_UpdateStoresLocationResponse = UpdateStoresLocationResponse;
  type storesCatalogV3StoresLocation_universal_d_DeleteStoresLocationRequest = DeleteStoresLocationRequest;
  type storesCatalogV3StoresLocation_universal_d_DeleteStoresLocationResponse = DeleteStoresLocationResponse;
  type storesCatalogV3StoresLocation_universal_d_QueryStoresLocationsRequest = QueryStoresLocationsRequest;
  type storesCatalogV3StoresLocation_universal_d_CursorQuery = CursorQuery;
  type storesCatalogV3StoresLocation_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type storesCatalogV3StoresLocation_universal_d_Sorting = Sorting;
  type storesCatalogV3StoresLocation_universal_d_SortOrder = SortOrder;
  const storesCatalogV3StoresLocation_universal_d_SortOrder: typeof SortOrder;
  type storesCatalogV3StoresLocation_universal_d_CursorPaging = CursorPaging;
  type storesCatalogV3StoresLocation_universal_d_QueryStoresLocationsResponse = QueryStoresLocationsResponse;
  type storesCatalogV3StoresLocation_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type storesCatalogV3StoresLocation_universal_d_Cursors = Cursors;
  type storesCatalogV3StoresLocation_universal_d_GetDefaultStoresLocationRequest = GetDefaultStoresLocationRequest;
  type storesCatalogV3StoresLocation_universal_d_GetDefaultStoresLocationResponse = GetDefaultStoresLocationResponse;
  type storesCatalogV3StoresLocation_universal_d_GetOrCreateDefaultStoresLocationRequest = GetOrCreateDefaultStoresLocationRequest;
  type storesCatalogV3StoresLocation_universal_d_GetOrCreateDefaultStoresLocationResponse = GetOrCreateDefaultStoresLocationResponse;
  type storesCatalogV3StoresLocation_universal_d_DomainEvent = DomainEvent;
  type storesCatalogV3StoresLocation_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type storesCatalogV3StoresLocation_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type storesCatalogV3StoresLocation_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type storesCatalogV3StoresLocation_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type storesCatalogV3StoresLocation_universal_d_ActionEvent = ActionEvent;
  type storesCatalogV3StoresLocation_universal_d_Empty = Empty;
  type storesCatalogV3StoresLocation_universal_d_MessageEnvelope = MessageEnvelope;
  type storesCatalogV3StoresLocation_universal_d_IdentificationData = IdentificationData;
  type storesCatalogV3StoresLocation_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type storesCatalogV3StoresLocation_universal_d_WebhookIdentityType = WebhookIdentityType;
  const storesCatalogV3StoresLocation_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const storesCatalogV3StoresLocation_universal_d_createStoresLocation: typeof createStoresLocation;
  const storesCatalogV3StoresLocation_universal_d_getStoresLocation: typeof getStoresLocation;
  const storesCatalogV3StoresLocation_universal_d_updateStoresLocation: typeof updateStoresLocation;
  type storesCatalogV3StoresLocation_universal_d_UpdateStoresLocation = UpdateStoresLocation;
  type storesCatalogV3StoresLocation_universal_d_UpdateStoresLocationOptions = UpdateStoresLocationOptions;
  const storesCatalogV3StoresLocation_universal_d_deleteStoresLocation: typeof deleteStoresLocation;
  const storesCatalogV3StoresLocation_universal_d_queryStoresLocations: typeof queryStoresLocations;
  type storesCatalogV3StoresLocation_universal_d_StoresLocationsQueryResult = StoresLocationsQueryResult;
  type storesCatalogV3StoresLocation_universal_d_StoresLocationsQueryBuilder = StoresLocationsQueryBuilder;
  const storesCatalogV3StoresLocation_universal_d_getDefaultStoresLocation: typeof getDefaultStoresLocation;
  const storesCatalogV3StoresLocation_universal_d_getOrCreateDefaultStoresLocation: typeof getOrCreateDefaultStoresLocation;
  namespace storesCatalogV3StoresLocation_universal_d {
    export {
      storesCatalogV3StoresLocation_universal_d_StoresLocation as StoresLocation,
      storesCatalogV3StoresLocation_universal_d_LocationType as LocationType,
      storesCatalogV3StoresLocation_universal_d_InvalidateCache as InvalidateCache,
      storesCatalogV3StoresLocation_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      storesCatalogV3StoresLocation_universal_d_App as App,
      storesCatalogV3StoresLocation_universal_d_Page as Page,
      storesCatalogV3StoresLocation_universal_d_URI as URI,
      storesCatalogV3StoresLocation_universal_d_File as File,
      storesCatalogV3StoresLocation_universal_d_CreateStoresLocationRequest as CreateStoresLocationRequest,
      storesCatalogV3StoresLocation_universal_d_CreateStoresLocationResponse as CreateStoresLocationResponse,
      storesCatalogV3StoresLocation_universal_d_GetStoresLocationRequest as GetStoresLocationRequest,
      storesCatalogV3StoresLocation_universal_d_GetStoresLocationResponse as GetStoresLocationResponse,
      storesCatalogV3StoresLocation_universal_d_UpdateStoresLocationRequest as UpdateStoresLocationRequest,
      storesCatalogV3StoresLocation_universal_d_UpdateStoresLocationResponse as UpdateStoresLocationResponse,
      storesCatalogV3StoresLocation_universal_d_DeleteStoresLocationRequest as DeleteStoresLocationRequest,
      storesCatalogV3StoresLocation_universal_d_DeleteStoresLocationResponse as DeleteStoresLocationResponse,
      storesCatalogV3StoresLocation_universal_d_QueryStoresLocationsRequest as QueryStoresLocationsRequest,
      storesCatalogV3StoresLocation_universal_d_CursorQuery as CursorQuery,
      storesCatalogV3StoresLocation_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      storesCatalogV3StoresLocation_universal_d_Sorting as Sorting,
      storesCatalogV3StoresLocation_universal_d_SortOrder as SortOrder,
      storesCatalogV3StoresLocation_universal_d_CursorPaging as CursorPaging,
      storesCatalogV3StoresLocation_universal_d_QueryStoresLocationsResponse as QueryStoresLocationsResponse,
      storesCatalogV3StoresLocation_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      storesCatalogV3StoresLocation_universal_d_Cursors as Cursors,
      storesCatalogV3StoresLocation_universal_d_GetDefaultStoresLocationRequest as GetDefaultStoresLocationRequest,
      storesCatalogV3StoresLocation_universal_d_GetDefaultStoresLocationResponse as GetDefaultStoresLocationResponse,
      storesCatalogV3StoresLocation_universal_d_GetOrCreateDefaultStoresLocationRequest as GetOrCreateDefaultStoresLocationRequest,
      storesCatalogV3StoresLocation_universal_d_GetOrCreateDefaultStoresLocationResponse as GetOrCreateDefaultStoresLocationResponse,
      storesCatalogV3StoresLocation_universal_d_DomainEvent as DomainEvent,
      storesCatalogV3StoresLocation_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      storesCatalogV3StoresLocation_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      storesCatalogV3StoresLocation_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      storesCatalogV3StoresLocation_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      storesCatalogV3StoresLocation_universal_d_ActionEvent as ActionEvent,
      storesCatalogV3StoresLocation_universal_d_Empty as Empty,
      storesCatalogV3StoresLocation_universal_d_MessageEnvelope as MessageEnvelope,
      storesCatalogV3StoresLocation_universal_d_IdentificationData as IdentificationData,
      storesCatalogV3StoresLocation_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      storesCatalogV3StoresLocation_universal_d_WebhookIdentityType as WebhookIdentityType,
      storesCatalogV3StoresLocation_universal_d_createStoresLocation as createStoresLocation,
      storesCatalogV3StoresLocation_universal_d_getStoresLocation as getStoresLocation,
      storesCatalogV3StoresLocation_universal_d_updateStoresLocation as updateStoresLocation,
      storesCatalogV3StoresLocation_universal_d_UpdateStoresLocation as UpdateStoresLocation,
      storesCatalogV3StoresLocation_universal_d_UpdateStoresLocationOptions as UpdateStoresLocationOptions,
      storesCatalogV3StoresLocation_universal_d_deleteStoresLocation as deleteStoresLocation,
      storesCatalogV3StoresLocation_universal_d_queryStoresLocations as queryStoresLocations,
      storesCatalogV3StoresLocation_universal_d_StoresLocationsQueryResult as StoresLocationsQueryResult,
      storesCatalogV3StoresLocation_universal_d_StoresLocationsQueryBuilder as StoresLocationsQueryBuilder,
      storesCatalogV3StoresLocation_universal_d_getDefaultStoresLocation as getDefaultStoresLocation,
      storesCatalogV3StoresLocation_universal_d_getOrCreateDefaultStoresLocation as getOrCreateDefaultStoresLocation,
    };
  }
  
  export { storesCatalogV3Brand_universal_d as brand, storesCatalogV3InfoSection_universal_d as infoSections, storesCatalogV3InventoryItem_universal_d as inventoryV3, storesCatalogV3Product_universal_d as product, storesCatalogV3Ribbon_universal_d as ribbon, storesCatalogV3StoresLocation_universal_d as storesLocationV3 };
}
