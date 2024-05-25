declare module "wix-data-backend-public-sdk-poc" {
  interface Item {
      item?: Record<string, any> | null;
  }
  interface InsertRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Item to insert. */
      item?: Record<string, any> | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection in which to insert the item. */
      dataCollectionId?: string;
  }
  enum Segment {
      /** Access database used in the Live site. */
      LIVE = "LIVE",
      /** Access staging (sandbox) database used in the editor. */
      SANDBOX = "SANDBOX",
      /** Access deleted database used in the Live site. */
      TRASH_LIVE = "TRASH_LIVE"
  }
  interface Options {
      /**
       * Should hooks execution be suppressed.
       * This option can only be used with Corvid backend
       * code identity.
       * @internal
       */
      suppressHooks?: boolean;
      /** @internal */
      includeReferences?: boolean;
      /** @internal */
      overrideExisting?: boolean;
      /** @internal */
      wrapDataHookErrors?: boolean;
      /** @internal */
      appOptions?: Record<string, any> | null;
      /** @internal */
      pluginOptions?: Record<string, any> | null;
  }
  interface InsertResponse {
      /** Inserted item. */
      item?: Record<string, any> | null;
  }
  interface UpdateRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Item to update. The existing item is replaced with this version. */
      item: Record<string, any> | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment
       * @internal
       */
      appId?: string | null;
      /**
       * Optional item constraint
       * @internal
       */
      constraint?: Record<string, any> | null;
      /**
       * Optional item authorizationConstraint
       * @internal
       */
      authorizationConstraint?: Record<string, any> | null;
      /**
       * Optional explicit ID of the item to be updated. If the ID is provided here, it doesn't need to be provided in the `item` body parameter.
       * @internal
       */
      itemId: string;
      /** ID of the collection containing the existing item. */
      dataCollectionId?: string;
  }
  interface UpdateResponse {
      /** Updated item */
      item?: Record<string, any> | null;
  }
  interface SaveRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Item to insert or update. */
      item?: Record<string, any> | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection in which to insert or update the item. */
      dataCollectionId?: string;
  }
  interface SaveResponse {
      /** Inserted or updated item. */
      item?: Record<string, any> | null;
  }
  interface PatchRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** item id to patch */
      itemId?: string;
      /** Patch data */
      patch?: Record<string, any> | null;
      /** Data access options */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment
       * @internal
       */
      appId?: string | null;
      /**
       * Optional item constraint
       * @internal
       */
      constraint?: Record<string, any> | null;
      /**
       * Optional item authorizationConstraint
       * @internal
       */
      authorizationConstraint?: Record<string, any> | null;
      /** ID of the collection */
      dataCollectionId?: string;
  }
  interface PatchResponse {
      /** Patched item */
      item?: Record<string, any> | null;
  }
  interface PatchWhereRequest {
      /** Data segment */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** filter items to patch */
      filter?: any;
      /** Patch data */
      patch?: Record<string, any> | null;
      /** Data access options */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment
       * @internal
       */
      appId?: string | null;
      /** ID of the collection */
      dataCollectionId?: string;
  }
  interface PatchWhereResponse {
      /** Number of patched items */
      totalCount?: number;
      totalAffectedValues?: number;
  }
  interface GetRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** ID of the item to retrieve. */
      itemId: string;
      /**
       * Data access options
       * @internal
       */
      options?: ReadOptions;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection from which to retrieve the item. */
      dataCollectionId?: string;
  }
  interface ReadOptions {
      /** @internal */
      suppressHooks?: boolean;
      /** @internal */
      includeReferences?: boolean;
      /** @internal */
      wrapDataHookErrors?: boolean;
      /** @internal */
      consistentRead?: boolean;
      /** @internal */
      appOptions?: Record<string, any> | null;
      /** @internal */
      pluginOptions?: Record<string, any> | null;
      /** @internal */
      language?: string | null;
  }
  interface GetResponse {
      /** Retrieved item. */
      item?: Record<string, any> | null;
  }
  interface RemoveRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** ID of the item to remove. */
      itemId: string;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Optional item constraint
       * @internal
       */
      constraint?: Record<string, any> | null;
      /**
       * Optional item authorizationConstraint
       * @internal
       */
      authorizationConstraint?: Record<string, any> | null;
      /** ID of the collection from which to remove the item. */
      dataCollectionId?: string;
  }
  interface RemoveResponse {
      /** Removed item. */
      item?: Record<string, any> | null;
  }
  interface TruncateRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead
       * Collection name
       * @internal
       */
      collectionName?: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection to truncate. */
      dataCollectionId?: string;
  }
  interface TruncateResponse {
  }
  interface QueryRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated. Use `dataCollectionId`` instead.
       * Collection name.
       * @internal
       */
      collectionName?: string;
      /**
       * Deprecated. Use 'data_query' instead.  Query https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_api-query-language
       * @internal
       */
      query?: Query;
      /**
       * Deprecated. Use `includeReferencedItems` instead. Includes referenced items for the specified properties in a query's results.
       * @internal
       */
      include?: string[];
      /**
       * Data access options.
       * @internal
       */
      options?: ReadOptions;
      /**
       * Grid app id. Optional in live segment.
       * @internal
       */
      appId?: string | null;
      /** Query preferences. For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language). */
      dataQuery?: QueryV2;
      /**
       * Optional item authorization constraint.
       * @internal
       */
      authorizationConstraint?: Record<string, any> | null;
      /**
       * Whether to omit the total count in the response.
       * When `true`, the `pagingMetadata` object in the response doesn't contain a `total` field.
       *
       * Default: `false`
       */
      omitTotalCount?: boolean;
      /**
       * Properties for which to include referenced items in the query's results.
       * Up to 50 referenced items can be included for each item that matches the query.
       * If more than 50 items are referenced, `partialIncludes` in the response is `true`.
       */
      includeReferencedItems?: string[];
      /** ID of the collection to query. */
      dataCollectionId?: string;
  }
  interface Query {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: any;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Array of projected fields. A list of specific field names to return. */
      fields?: string[];
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
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
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
      /** Array of projected fields. A list of specific field names to return. */
      fields?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
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
  interface QueryResponse {
      /** Retrieved items. */
      items?: Record<string, any>[] | null;
      /** *Deprecated.** Refer to 'pagingMetadata' instead. Total number of items satisfying the query. */
      totalCount?: number;
      /** *Deprecated.** Refer to 'pagingMetadata' instead. Total number of items satisfying the query. */
      totalResults?: number;
      /** Whether referenced items are trimmed from the results. This occurs when there are more than 50 referenced items. */
      partialIncludes?: boolean;
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
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
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface AggregationRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /**
       * Sorting preferences.
       * @internal
       */
      sorting?: Sorting[];
      /** Paging preferences. */
      paging?: Paging;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: ReadOptions;
      /**
       * Cursor pointing to page of results. Can't be used together with 'paging'.
       * @internal
       */
      cursorPaging?: CursorPaging;
      /** Filter applied to the collection's data prior to running the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
      initialFilter?: Record<string, any> | null;
      /**
       * Object defining the steps of the aggregation to be This is an object defining aggregation itself.
       *
       * * Grouping rule is defined as _id field. It takes a form of:
       * {
       * "_id": "$field"
       * }
       *
       * If multiple fields are used for grouping, Group takes a form of:
       * {
       * "_id": {
       * "field1": "$field1"
       * "field2": "$field2"
       * }
       * }
       *
       * * Aggregation functions are defined as special field definitions.
       *
       * Average:
       * {
       * "_id": "$field"
       * "my_avg": {
       * "$avg": "$other_field"
       * }
       * }
       *
       * Max:
       * {
       * "_id": "$field"
       * "my_max": {
       * "$max": "$other_field"
       * }
       * }
       *
       * Min:
       * {
       * "_id": "$field"
       * "my_min": {
       * "$min": "$other_field"
       * }
       * }
       *
       * Sum:
       * {
       * "_id": "$field"
       * "my_sum": {
       * "$sum": "$other_field"
       * }
       * }
       */
      aggregation?: Record<string, any> | null;
      /** Filter applied to the processed data following the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
      finalFilter?: Record<string, any> | null;
      /** Sorting preferences. */
      sort?: Sorting[];
      /** ID of the collection on which to run the aggregation. */
      dataCollectionId?: string;
  }
  interface AggregationResponse {
      /** Aggregation results. */
      items?: Record<string, any>[] | null;
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface CountRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Filter preferences defining the query. For more information on how to structure a filter object, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section). */
      filter?: Record<string, any> | null;
      /**
       * Data access options
       * @internal
       */
      options?: ReadOptions;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection for which to count query results. */
      dataCollectionId?: string;
  }
  interface CountResponse {
      /** Count of items matching the query. */
      totalCount?: number;
      /** *Deprecated.** Refer to `totalCount` instead. */
      totalResults?: number;
  }
  interface DistinctRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Query preferences. For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language). */
      dataQuery?: QueryV2;
      /** Property name for which to return all distinct values. */
      propertyName: string;
      /**
       * Data access options
       * @internal
       */
      options?: ReadOptions;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection to query. */
      dataCollectionId?: string;
      /**
       * Whether to omit the total count in the response.
       * When `true`, the `pagingMetadata` object in the response doesn't contain a `total` field.
       *
       * Default: `false`
       */
      omitTotalCount?: boolean;
  }
  interface DistinctResponse {
      /** List of distinct values contained in the property specified in `propertyName`. */
      items?: any[];
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface BulkInsertRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Items to insert. */
      items: Record<string, any>[] | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection in which to insert the items. */
      dataCollectionId?: string;
  }
  interface BulkInsertResponse {
      /** IDs of items inserted. */
      insertedItemIds?: string[];
      /** Error details for items that couldn't be inserted. */
      errors?: BulkError[];
  }
  interface BulkError {
      /** ID of the item that couldn't be inserted. */
      itemId?: string | null;
      /** Error message. */
      message?: string;
      /** Error details. */
      details?: Details;
      /** Index of the failed item in the `items` paramater of the request. */
      originalIndex?: number;
  }
  interface ApplicationError {
      /** Error code. */
      code?: string;
      /** Error description. */
      description?: string;
      /** Error data. */
      data?: Record<string, any> | null;
  }
  interface Details {
      /** Application error. */
      applicationError?: ApplicationError;
  }
  interface BulkSaveRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Items to insert or update. */
      items: Record<string, any>[] | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection in which to insert or update the items. */
      dataCollectionId?: string;
  }
  interface BulkSaveResponse {
      /** IDs of items inserted. */
      insertedItemIds?: string[];
      /** IDs of items updated. */
      updatedItemIds?: string[];
      /** Errors for items that couldn't be inserted or updated. */
      errors?: BulkError[];
  }
  interface BulkUpdateRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * collection name
       * @internal
       */
      collectionName?: string;
      /** Items to update. */
      items: Record<string, any>[] | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection in which to update items. */
      dataCollectionId?: string;
  }
  interface BulkUpdateResponse {
      /** IDs of items updated. */
      updatedItemIds?: string[];
      /** Errors for items that couldn't be updated. */
      errors?: BulkError[];
  }
  interface BulkPatchRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** List of items and their patches */
      entries?: Entry[];
      /** Data access options */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment
       * @internal
       */
      appId?: string | null;
      /** ID of the collection */
      dataCollectionId?: string;
  }
  interface Entry {
      /** item id to patch */
      itemId?: string;
      /** Patch data */
      patch?: Record<string, any> | null;
      /**
       * Optional item constraint
       * @internal
       */
      constraint?: Record<string, any> | null;
  }
  interface BulkPatchResponse {
      /** Patched item ids */
      patchedItemIds?: string[];
      /** Errors */
      errors?: BulkError[];
  }
  interface BulkRemoveRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** IDs of items to remove. */
      entries?: BulkRemoveRequestEntry[];
      /** ID of the collection from which to remove the items. */
      dataCollectionId?: string;
  }
  interface BulkRemoveRequestEntry {
      /** ID of item to remove. */
      itemId?: string;
      /**
       * Optional item constraint
       * @internal
       */
      constraint?: Record<string, any> | null;
  }
  interface BulkRemoveResponse {
      /** IDs of items removed. */
      removedItemIds?: string[];
      /** Errors for items that couldn't be removed. */
      errors?: BulkError[];
  }
  interface QueryReferencedRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** ID of the referring item. */
      referringItemId: string;
      /** Property containing the references to the referenced items. */
      propertyName: string;
      /**
       * Result order
       * @internal
       */
      order?: Order;
      /** Paging preferences. */
      paging?: Paging;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Cursor pointing to page of results. Can't be used together with 'paging'.
       * @internal
       */
      cursorPaging?: CursorPaging;
      /**
       * Data access options
       * @internal
       */
      options?: ReadOptions;
      /** ID of the collection containing the referring item. */
      dataCollectionId?: string;
      /**
       * Whether to omit the total count in the response.
       * When `true`, the `pagingMetadata` object in the response doesn't contain a `total` field.
       *
       * Default: `false`
       */
      omitTotalCount?: boolean;
  }
  enum Order {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryReferencedResponse {
      /** *Deprecated.** Refer to `entities` instead. List of referenced items. */
      items?: Record<string, any>[] | null;
      /** *Deprecated**. Refer to 'pagingMetadata' instead. Total number of referenced items satisfying the query. */
      totalCount?: number;
      /** *Deprecated**. Refer to 'pagingMetadata' instead. Total number of referenced items satisfying the query. */
      totalResults?: number;
      /** List of referenced items and/or IDs. For successfully resolved references, the referenced data item appears. For references that can't be resolved, the ID appears. */
      entities?: ReferencedEntity[];
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface ReferencedEntity extends ReferencedEntityEntityOneOf {
      /** Data item referenced. */
      item?: Record<string, any> | null;
      /** Unresolved ID. Appears instead of the data item when the reference doesn't resolve. For example, when an ID isn't found or if an item is in draft state. */
      referenceId?: string;
  }
  /** @oneof */
  interface ReferencedEntityEntityOneOf {
      /** Data item referenced. */
      item?: Record<string, any> | null;
      /** Unresolved ID. Appears instead of the data item when the reference doesn't resolve. For example, when an ID isn't found or if an item is in draft state. */
      referenceId?: string;
  }
  interface BulkInsertReferencesRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use 'dataCollectionId' instead.
       * Name of the collection that contains the referring item
       * @internal
       */
      collectionName?: string;
      /** References to insert. */
      references: Reference[];
      /**
       * Options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection containing the referring item. */
      dataCollectionId?: string;
  }
  interface Reference {
      /** Property containing the references to the referenced items. */
      propertyName?: string;
      /** ID of the referring item. */
      referringItemId?: string;
      /** ID of the referenced item. */
      referencedItemId?: string;
  }
  interface BulkInsertReferencesResponse {
  }
  interface BulkReplaceReferencesRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Name of the collection that contains the referring item
       * @internal
       */
      collectionName?: string;
      /** Property containing the references to the referenced items. */
      propertyName: string;
      /** ID of the referring item. */
      referringItemId: string;
      /** List of new referenced item IDs to replace the existing ones. */
      newReferencedItemIds?: string[];
      /**
       * Options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in  Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection containing the referring item. */
      dataCollectionId?: string;
  }
  interface BulkReplaceReferencesResponse {
  }
  interface BulkRemoveReferencesRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** References to be removed. */
      references: Reference[];
      /**
       * Options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection containing the referring item. */
      dataCollectionId?: string;
  }
  interface BulkRemoveReferencesResponse {
  }
  interface IsReferencedRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Name of the collection that contains the referring item
       * @internal
       */
      collectionName?: string;
      /** Property that may contain a reference to the specified item. */
      propertyName: string;
      /** ID of the referring item. */
      referringItemId: string;
      /** ID of the item that may be referenced. */
      referencedItemId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: ReadOptions;
      /** ID of the collection containing the referring item. */
      dataCollectionId?: string;
  }
  interface IsReferencedResponse {
      /** Whether the specified property of the referring item contains a reference to the specified referenced item. */
      isReferenced?: boolean;
  }
  interface RestoreFromTrashBinRequest {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       */
      collectionName?: string;
      /** Item id */
      itemId?: string;
      /** Data access options */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Optional item constraint
       * @internal
       */
      constraint?: Record<string, any> | null;
      /**
       * Optional item authorizationConstraint
       * @internal
       */
      authorizationConstraint?: Record<string, any> | null;
      /** ID of the collection */
      dataCollectionId?: string;
  }
  interface RestoreFromTrashBinResponse {
      item?: Record<string, any> | null;
  }
  /**
   * Adds an item to a collection.
   *
   * When an item is inserted into a collection, the following properties and values are added to it:
   * * `_id`: A unique identifier for an item in a collection. You can optionally provide your own ID when inserting the item. If you specify an ID that already exists in the collection, the insertion will fail.
   * * `_createdDate`: The date the item was added to the collection.
   * * `_updatedDate`: The date the item was last modified. When the item is first inserted, `_createdDate` and `_updatedDate` have the same value.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function insert(options?: InsertOptions): Promise<InsertResponse>;
  interface InsertOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Item to insert. */
      item?: Record<string, any> | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection in which to insert the item. */
      dataCollectionId?: string;
  }
  /**
   * Updates an item in a collection.
   *
   * An item ID must be submitted as part of the request, either as a path parameter or within the `item` body parameter. If an item is found in the specified collection with
   * the same ID, that item is updated. If the collection doesn't contain an item with that ID, the request fails.
   *
   * When an item is updated, its `_updatedDate` property is changed to the current date.
   *
   * **Note:**
   * After an item is updated, it only contains the properties included in the Update Data Item request. If the existing item has properties with values and those properties
   * aren't included in the updated item, their values are lost.
   * @param itemId - Optional explicit ID of the item to be updated. If the ID is provided here, it doesn't need to be provided in the `item` body parameter.
   * @internal
   * @documentationMaturity preview
   * @requiredField itemId
   * @requiredField options.item
   * @adminMethod
   */
  function update(itemId: string, options?: UpdateOptions): Promise<UpdateResponse>;
  interface UpdateOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Item to update. The existing item is replaced with this version. */
      item: Record<string, any> | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment
       * @internal
       */
      appId?: string | null;
      /**
       * Optional item constraint
       * @internal
       */
      constraint?: Record<string, any> | null;
      /**
       * Optional item authorizationConstraint
       * @internal
       */
      authorizationConstraint?: Record<string, any> | null;
      /** ID of the collection containing the existing item. */
      dataCollectionId?: string;
  }
  /**
   * Inserts or updates an item in a collection.
   *
   * The Save Data Item endpoint inserts or updates the specified item, depending on whether it already exists in the collection.
   *
   * * If you don't provide an ID, a new item is created.
   *
   * * If you provide an ID that doesn't exist in the collection, a new item is created with that ID.
   *
   * * If an item with the ID you provide already exists in the collection, that item is updated. When an item is updated, its `_updatedDate` property is changed to the current date.
   *
   * ***Note:*** When you provide an item with an ID that already exists in the collection, the item you provide completely replaces the existing item with that ID.
   * This means that all of the item's previous properties and values are lost.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function save(options?: SaveOptions): Promise<SaveResponse>;
  interface SaveOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Item to insert or update. */
      item?: Record<string, any> | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection in which to insert or update the item. */
      dataCollectionId?: string;
  }
  /**
   * Retrieves an item from a collection.
   * @param itemId - ID of the item to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField itemId
   * @adminMethod
   */
  function get(itemId: string, options?: GetOptions): Promise<GetResponse>;
  interface GetOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /**
       * Data access options
       * @internal
       */
      options?: ReadOptions;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection from which to retrieve the item. */
      dataCollectionId?: string;
  }
  /**
   * Removes an item from a collection.
   *
   * If any items in other collections reference the removed item in a reference or multi-reference field, the field is cleared.
   *
   * **Note:**
   * Once an item has been removed from a collection, it can't be restored.
   * @param itemId - ID of the item to remove.
   * @internal
   * @documentationMaturity preview
   * @requiredField itemId
   * @adminMethod
   */
  function remove(itemId: string, options?: RemoveOptions): Promise<RemoveResponse>;
  interface RemoveOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Optional item constraint
       * @internal
       */
      constraint?: Record<string, any> | null;
      /**
       * Optional item authorizationConstraint
       * @internal
       */
      authorizationConstraint?: Record<string, any> | null;
      /** ID of the collection from which to remove the item. */
      dataCollectionId?: string;
  }
  /**
   * Removes all items from a collection. Site owner (`ADMIN`) permissions are required in order to invoke this operation.
   *
   * If any items in other collections reference the removed items in reference or multi-reference fields, those fields are cleared.
   *
   * **Note:**
   * Once items have been removed from a collection, they can't be restored.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function truncate(options?: TruncateOptions): Promise<void>;
  interface TruncateOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead
       * Collection name
       * @internal
       */
      collectionName?: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection to truncate. */
      dataCollectionId?: string;
  }
  /**
   * Retrieves a list of items, on the basis of the filtering, sorting, and paging preferences you provide.
   *
   * For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function query(options?: QueryOptions): Promise<QueryResponse>;
  interface QueryOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated. Use `dataCollectionId`` instead.
       * Collection name.
       * @internal
       */
      collectionName?: string;
      /**
       * Deprecated. Use 'data_query' instead.  Query https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_api-query-language
       * @internal
       */
      query?: Query;
      /**
       * Deprecated. Use `includeReferencedItems` instead. Includes referenced items for the specified properties in a query's results.
       * @internal
       */
      include?: string[];
      /**
       * Data access options.
       * @internal
       */
      options?: ReadOptions;
      /**
       * Grid app id. Optional in live segment.
       * @internal
       */
      appId?: string | null;
      /** Query preferences. For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language). */
      dataQuery?: QueryV2;
      /**
       * Optional item authorization constraint.
       * @internal
       */
      authorizationConstraint?: Record<string, any> | null;
      /**
       * Whether to omit the total count in the response.
       * When `true`, the `pagingMetadata` object in the response doesn't contain a `total` field.
       *
       * Default: `false`
       */
      omitTotalCount?: boolean;
      /**
       * Properties for which to include referenced items in the query's results.
       * Up to 50 referenced items can be included for each item that matches the query.
       * If more than 50 items are referenced, `partialIncludes` in the response is `true`.
       */
      includeReferencedItems?: string[];
      /** ID of the collection to query. */
      dataCollectionId?: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function aggregate(options?: AggregateOptions): Promise<AggregationResponse>;
  interface AggregateOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /**
       * Sorting preferences.
       * @internal
       */
      sorting?: Sorting[];
      /** Paging preferences. */
      paging?: Paging;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: ReadOptions;
      /**
       * Cursor pointing to page of results. Can't be used together with 'paging'.
       * @internal
       */
      cursorPaging?: CursorPaging;
      /** Filter applied to the collection's data prior to running the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
      initialFilter?: Record<string, any> | null;
      /**
       * Object defining the steps of the aggregation to be This is an object defining aggregation itself.
       *
       * * Grouping rule is defined as _id field. It takes a form of:
       * {
       * "_id": "$field"
       * }
       *
       * If multiple fields are used for grouping, Group takes a form of:
       * {
       * "_id": {
       * "field1": "$field1"
       * "field2": "$field2"
       * }
       * }
       *
       * * Aggregation functions are defined as special field definitions.
       *
       * Average:
       * {
       * "_id": "$field"
       * "my_avg": {
       * "$avg": "$other_field"
       * }
       * }
       *
       * Max:
       * {
       * "_id": "$field"
       * "my_max": {
       * "$max": "$other_field"
       * }
       * }
       *
       * Min:
       * {
       * "_id": "$field"
       * "my_min": {
       * "$min": "$other_field"
       * }
       * }
       *
       * Sum:
       * {
       * "_id": "$field"
       * "my_sum": {
       * "$sum": "$other_field"
       * }
       * }
       */
      aggregation?: Record<string, any> | null;
      /** Filter applied to the processed data following the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
      finalFilter?: Record<string, any> | null;
      /** Sorting preferences. */
      sort?: Sorting[];
      /** ID of the collection on which to run the aggregation. */
      dataCollectionId?: string;
  }
  /**
   * Returns the number of items in a collection that match a query.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function count(options?: CountOptions): Promise<CountResponse>;
  interface CountOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Filter preferences defining the query. For more information on how to structure a filter object, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section). */
      filter?: Record<string, any> | null;
      /**
       * Data access options
       * @internal
       */
      options?: ReadOptions;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection for which to count query results. */
      dataCollectionId?: string;
  }
  /**
   * Retrieves a list of distinct values for a given property in all items that match a query, without duplicates.
   *
   * As with the [Query Data Items]() endpoint, this endpoint retrieves items based on the filtering, sorting, and paging preferences you provide.
   * However, the Query Distinct Values endpoint doesn't return all of the full items that match the query.
   * Rather, it returns all unique values of the property you specify in `propertyName` for items that match the query.
   * If more than one item has the same value for that property, that value appears only once.
   *
   * For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * @internal
   * @documentationMaturity preview
   * @requiredField options.propertyName
   * @adminMethod
   */
  function distinct(options?: DistinctOptions): Promise<DistinctResponse>;
  interface DistinctOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Query preferences. For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language). */
      dataQuery?: QueryV2;
      /** Property name for which to return all distinct values. */
      propertyName: string;
      /**
       * Data access options
       * @internal
       */
      options?: ReadOptions;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection to query. */
      dataCollectionId?: string;
      /**
       * Whether to omit the total count in the response.
       * When `true`, the `pagingMetadata` object in the response doesn't contain a `total` field.
       *
       * Default: `false`
       */
      omitTotalCount?: boolean;
  }
  /**
   * Adds multiple items to a collection.
   *
   * When each item is inserted into a collection, the following properties and values are added to it:
   * * `_id`: A unique identifier for an item in a collection. You can optionally provide your own ID when inserting the item. If you specify an ID that already exists in the collection, the insertion will fail.
   * * `_createdDate`: The date the item was added to the collection.
   * * `_updatedDate`: The date the item was last modified. When the item is first inserted, `_createdDate` and `_updatedDate` have the same value.
   *
   * The endpoint returns a list of the IDs of items successfully inserted in `insertedItemIds`.
   * When any items can't be inserted, error details are provided for each failed item in `errors`.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.items
   * @adminMethod
   */
  function bulkInsert(options?: BulkInsertOptions): Promise<BulkInsertResponse>;
  interface BulkInsertOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Items to insert. */
      items: Record<string, any>[] | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection in which to insert the items. */
      dataCollectionId?: string;
  }
  /**
   * Inserts or updates multiple items in a collection.
   *
   * The Bulk Save Data Items endpoint inserts or updates each item, depending on whether it already exists in the collection. For each item:
   *
   * * If you don't provide an ID, a new item is created.
   *
   * * If you provide an ID that doesn't exist in the collection, a new item is created with that ID.
   *
   * * If an item with the ID you provide already exists in the collection, that item is updated. When an item is updated, its `_updatedDate` property is changed to the current date.
   *
   * The endpoint returns a list of the IDs of items successfully inserted in `insertedItemIds` and a list of the IDs of items successfully updated in `updatedItemIds`.
   * When any items can't be inserted or updated, error details are provided for each failed item in `errors`.
   *
   * ***Note:*** When you provide an item with an ID that already exists in the collection, the item you provide completely replaces the existing item with that ID.
   * This means that all of the item's previous properties and values are lost.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.items
   * @adminMethod
   */
  function bulkSave(options?: BulkSaveOptions): Promise<BulkSaveResponse>;
  interface BulkSaveOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** Items to insert or update. */
      items: Record<string, any>[] | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection in which to insert or update the items. */
      dataCollectionId?: string;
  }
  /**
   * Updates multiple items in a collection.
   *
   * Each item in the request must include an ID. If an item is found in the specified collection with
   * the same ID, that item is updated. If the collection doesn't contain an item with that ID, the update fails.
   *
   * When an item is updated, its `_updatedDate` property is changed to the current date.
   *
   * The endpoint returns a list of the IDs of items successfully updated in `updatedItemIds`.
   * When any items can't be inserted, error details are provided for each failed item in `errors`.
   *
   * **Note:**
   * After each item is updated, it only contains the properties included in the Update Data Item request. If the existing item has properties with values and those properties
   * aren't included in the updated item, their values are lost.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.items
   * @adminMethod
   */
  function bulkUpdate(options?: BulkUpdateOptions): Promise<BulkUpdateResponse>;
  interface BulkUpdateOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * collection name
       * @internal
       */
      collectionName?: string;
      /** Items to update. */
      items: Record<string, any>[] | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection in which to update items. */
      dataCollectionId?: string;
  }
  /**
   * Removes multiple items from a collection.
   *
   * If any items in other collections reference the removed items in reference or multi-reference fields, the fields are cleared.
   *
   * The endpoint returns a list of the IDs of items successfully removed in `removedItemIds`.
   * When any items can't be removed, error details are provided for each failed item in `errors`.
   *
   * **Note:** Once an item has been removed from a collection, it can't be restored.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function bulkRemove(options?: BulkRemoveOptions): Promise<BulkRemoveResponse>;
  interface BulkRemoveOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** IDs of items to remove. */
      entries?: BulkRemoveRequestEntry[];
      /** ID of the collection from which to remove the items. */
      dataCollectionId?: string;
  }
  /**
   * Gets the full items referenced in the specified property of an item.
   *
   * For example, suppose you have a **Movies** collection with an **Actors** field that contains references to items in a **People** collection.
   * Querying the **Movies** collection using the Query Referenced Data Items endpoint returns the relevant **People** items referenced in the **Actors** field of the specified **Movie** item.
   * This gives you information from the **People** collection about each of the actors in the specified movie.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.propertyName
   * @requiredField options.referringItemId
   * @adminMethod
   */
  function queryReferenced(options?: QueryReferencedOptions): Promise<QueryReferencedResponse>;
  interface QueryReferencedOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** ID of the referring item. */
      referringItemId: string;
      /** Property containing the references to the referenced items. */
      propertyName: string;
      /**
       * Result order
       * @internal
       */
      order?: Order;
      /** Paging preferences. */
      paging?: Paging;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Cursor pointing to page of results. Can't be used together with 'paging'.
       * @internal
       */
      cursorPaging?: CursorPaging;
      /**
       * Data access options
       * @internal
       */
      options?: ReadOptions;
      /** ID of the collection containing the referring item. */
      dataCollectionId?: string;
      /**
       * Whether to omit the total count in the response.
       * When `true`, the `pagingMetadata` object in the response doesn't contain a `total` field.
       *
       * Default: `false`
       */
      omitTotalCount?: boolean;
  }
  /**
   * Inserts one or more references in the specified properties of items in a collection.
   *
   * The Bulk Insert References endpoint adds one or more references to a collection.
   * Each new reference in the `references` field specifies a referring item's ID, the property in which to insert the reference, and the ID of the referenced item.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.references
   * @requiredField options.references.propertyName
   * @requiredField options.references.referencedItemId
   * @requiredField options.references.referringItemId
   * @adminMethod
   */
  function bulkInsertReferences(options?: BulkInsertReferencesOptions): Promise<void>;
  interface BulkInsertReferencesOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use 'dataCollectionId' instead.
       * Name of the collection that contains the referring item
       * @internal
       */
      collectionName?: string;
      /** References to insert. */
      references: Reference[];
      /**
       * Options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection containing the referring item. */
      dataCollectionId?: string;
  }
  /**
   * Replaces references in a specified property of a specified data item.
   *
   * The Bulk Replace References endpoint replaces the existing reference or references contained in the property specified in `propertyName` within the data item specified in `referringItemId`.
   * The endpoint removes existing references and in their place it adds references to the items specified in `newReferencedItemIds`.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.propertyName
   * @requiredField options.referringItemId
   * @adminMethod
   */
  function bulkReplaceReferences(options?: BulkReplaceReferencesOptions): Promise<void>;
  interface BulkReplaceReferencesOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Name of the collection that contains the referring item
       * @internal
       */
      collectionName?: string;
      /** Property containing the references to the referenced items. */
      propertyName: string;
      /** ID of the referring item. */
      referringItemId: string;
      /** List of new referenced item IDs to replace the existing ones. */
      newReferencedItemIds?: string[];
      /**
       * Options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in  Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection containing the referring item. */
      dataCollectionId?: string;
  }
  /**
   * Removes one or more references.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.references
   * @requiredField options.references.propertyName
   * @adminMethod
   */
  function bulkRemoveReferences(options?: BulkRemoveReferencesOptions): Promise<void>;
  interface BulkRemoveReferencesOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Collection name
       * @internal
       */
      collectionName?: string;
      /** References to be removed. */
      references: Reference[];
      /**
       * Options
       * @internal
       */
      options?: Options;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /** ID of the collection containing the referring item. */
      dataCollectionId?: string;
  }
  /**
   * Checks if a specific property of a referring item contains a reference to another specific item.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.propertyName
   * @requiredField options.referencedItemId
   * @requiredField options.referringItemId
   * @adminMethod
   */
  function isReferenced(options?: IsReferencedOptions): Promise<IsReferencedResponse>;
  interface IsReferencedOptions {
      /**
       * Data segment
       * @internal
       */
      segment?: Segment;
      /**
       * Deprecated, use dataCollectionId instead.
       * Name of the collection that contains the referring item
       * @internal
       */
      collectionName?: string;
      /** Property that may contain a reference to the specified item. */
      propertyName: string;
      /** ID of the referring item. */
      referringItemId: string;
      /** ID of the item that may be referenced. */
      referencedItemId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: ReadOptions;
      /** ID of the collection containing the referring item. */
      dataCollectionId?: string;
  }
  
  type dataV1DataService_universal_d_Item = Item;
  type dataV1DataService_universal_d_InsertRequest = InsertRequest;
  type dataV1DataService_universal_d_Segment = Segment;
  const dataV1DataService_universal_d_Segment: typeof Segment;
  type dataV1DataService_universal_d_Options = Options;
  type dataV1DataService_universal_d_InsertResponse = InsertResponse;
  type dataV1DataService_universal_d_UpdateRequest = UpdateRequest;
  type dataV1DataService_universal_d_UpdateResponse = UpdateResponse;
  type dataV1DataService_universal_d_SaveRequest = SaveRequest;
  type dataV1DataService_universal_d_SaveResponse = SaveResponse;
  type dataV1DataService_universal_d_PatchRequest = PatchRequest;
  type dataV1DataService_universal_d_PatchResponse = PatchResponse;
  type dataV1DataService_universal_d_PatchWhereRequest = PatchWhereRequest;
  type dataV1DataService_universal_d_PatchWhereResponse = PatchWhereResponse;
  type dataV1DataService_universal_d_GetRequest = GetRequest;
  type dataV1DataService_universal_d_ReadOptions = ReadOptions;
  type dataV1DataService_universal_d_GetResponse = GetResponse;
  type dataV1DataService_universal_d_RemoveRequest = RemoveRequest;
  type dataV1DataService_universal_d_RemoveResponse = RemoveResponse;
  type dataV1DataService_universal_d_TruncateRequest = TruncateRequest;
  type dataV1DataService_universal_d_TruncateResponse = TruncateResponse;
  type dataV1DataService_universal_d_QueryRequest = QueryRequest;
  type dataV1DataService_universal_d_Query = Query;
  type dataV1DataService_universal_d_Sorting = Sorting;
  type dataV1DataService_universal_d_SortOrder = SortOrder;
  const dataV1DataService_universal_d_SortOrder: typeof SortOrder;
  type dataV1DataService_universal_d_Paging = Paging;
  type dataV1DataService_universal_d_QueryV2 = QueryV2;
  type dataV1DataService_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type dataV1DataService_universal_d_CursorPaging = CursorPaging;
  type dataV1DataService_universal_d_QueryResponse = QueryResponse;
  type dataV1DataService_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type dataV1DataService_universal_d_Cursors = Cursors;
  type dataV1DataService_universal_d_AggregationRequest = AggregationRequest;
  type dataV1DataService_universal_d_AggregationResponse = AggregationResponse;
  type dataV1DataService_universal_d_CountRequest = CountRequest;
  type dataV1DataService_universal_d_CountResponse = CountResponse;
  type dataV1DataService_universal_d_DistinctRequest = DistinctRequest;
  type dataV1DataService_universal_d_DistinctResponse = DistinctResponse;
  type dataV1DataService_universal_d_BulkInsertRequest = BulkInsertRequest;
  type dataV1DataService_universal_d_BulkInsertResponse = BulkInsertResponse;
  type dataV1DataService_universal_d_BulkError = BulkError;
  type dataV1DataService_universal_d_ApplicationError = ApplicationError;
  type dataV1DataService_universal_d_Details = Details;
  type dataV1DataService_universal_d_BulkSaveRequest = BulkSaveRequest;
  type dataV1DataService_universal_d_BulkSaveResponse = BulkSaveResponse;
  type dataV1DataService_universal_d_BulkUpdateRequest = BulkUpdateRequest;
  type dataV1DataService_universal_d_BulkUpdateResponse = BulkUpdateResponse;
  type dataV1DataService_universal_d_BulkPatchRequest = BulkPatchRequest;
  type dataV1DataService_universal_d_Entry = Entry;
  type dataV1DataService_universal_d_BulkPatchResponse = BulkPatchResponse;
  type dataV1DataService_universal_d_BulkRemoveRequest = BulkRemoveRequest;
  type dataV1DataService_universal_d_BulkRemoveRequestEntry = BulkRemoveRequestEntry;
  type dataV1DataService_universal_d_BulkRemoveResponse = BulkRemoveResponse;
  type dataV1DataService_universal_d_QueryReferencedRequest = QueryReferencedRequest;
  type dataV1DataService_universal_d_Order = Order;
  const dataV1DataService_universal_d_Order: typeof Order;
  type dataV1DataService_universal_d_QueryReferencedResponse = QueryReferencedResponse;
  type dataV1DataService_universal_d_ReferencedEntity = ReferencedEntity;
  type dataV1DataService_universal_d_ReferencedEntityEntityOneOf = ReferencedEntityEntityOneOf;
  type dataV1DataService_universal_d_BulkInsertReferencesRequest = BulkInsertReferencesRequest;
  type dataV1DataService_universal_d_Reference = Reference;
  type dataV1DataService_universal_d_BulkInsertReferencesResponse = BulkInsertReferencesResponse;
  type dataV1DataService_universal_d_BulkReplaceReferencesRequest = BulkReplaceReferencesRequest;
  type dataV1DataService_universal_d_BulkReplaceReferencesResponse = BulkReplaceReferencesResponse;
  type dataV1DataService_universal_d_BulkRemoveReferencesRequest = BulkRemoveReferencesRequest;
  type dataV1DataService_universal_d_BulkRemoveReferencesResponse = BulkRemoveReferencesResponse;
  type dataV1DataService_universal_d_IsReferencedRequest = IsReferencedRequest;
  type dataV1DataService_universal_d_IsReferencedResponse = IsReferencedResponse;
  type dataV1DataService_universal_d_RestoreFromTrashBinRequest = RestoreFromTrashBinRequest;
  type dataV1DataService_universal_d_RestoreFromTrashBinResponse = RestoreFromTrashBinResponse;
  const dataV1DataService_universal_d_insert: typeof insert;
  type dataV1DataService_universal_d_InsertOptions = InsertOptions;
  const dataV1DataService_universal_d_update: typeof update;
  type dataV1DataService_universal_d_UpdateOptions = UpdateOptions;
  const dataV1DataService_universal_d_save: typeof save;
  type dataV1DataService_universal_d_SaveOptions = SaveOptions;
  const dataV1DataService_universal_d_get: typeof get;
  type dataV1DataService_universal_d_GetOptions = GetOptions;
  const dataV1DataService_universal_d_remove: typeof remove;
  type dataV1DataService_universal_d_RemoveOptions = RemoveOptions;
  const dataV1DataService_universal_d_truncate: typeof truncate;
  type dataV1DataService_universal_d_TruncateOptions = TruncateOptions;
  const dataV1DataService_universal_d_query: typeof query;
  type dataV1DataService_universal_d_QueryOptions = QueryOptions;
  const dataV1DataService_universal_d_aggregate: typeof aggregate;
  type dataV1DataService_universal_d_AggregateOptions = AggregateOptions;
  const dataV1DataService_universal_d_count: typeof count;
  type dataV1DataService_universal_d_CountOptions = CountOptions;
  const dataV1DataService_universal_d_distinct: typeof distinct;
  type dataV1DataService_universal_d_DistinctOptions = DistinctOptions;
  const dataV1DataService_universal_d_bulkInsert: typeof bulkInsert;
  type dataV1DataService_universal_d_BulkInsertOptions = BulkInsertOptions;
  const dataV1DataService_universal_d_bulkSave: typeof bulkSave;
  type dataV1DataService_universal_d_BulkSaveOptions = BulkSaveOptions;
  const dataV1DataService_universal_d_bulkUpdate: typeof bulkUpdate;
  type dataV1DataService_universal_d_BulkUpdateOptions = BulkUpdateOptions;
  const dataV1DataService_universal_d_bulkRemove: typeof bulkRemove;
  type dataV1DataService_universal_d_BulkRemoveOptions = BulkRemoveOptions;
  const dataV1DataService_universal_d_queryReferenced: typeof queryReferenced;
  type dataV1DataService_universal_d_QueryReferencedOptions = QueryReferencedOptions;
  const dataV1DataService_universal_d_bulkInsertReferences: typeof bulkInsertReferences;
  type dataV1DataService_universal_d_BulkInsertReferencesOptions = BulkInsertReferencesOptions;
  const dataV1DataService_universal_d_bulkReplaceReferences: typeof bulkReplaceReferences;
  type dataV1DataService_universal_d_BulkReplaceReferencesOptions = BulkReplaceReferencesOptions;
  const dataV1DataService_universal_d_bulkRemoveReferences: typeof bulkRemoveReferences;
  type dataV1DataService_universal_d_BulkRemoveReferencesOptions = BulkRemoveReferencesOptions;
  const dataV1DataService_universal_d_isReferenced: typeof isReferenced;
  type dataV1DataService_universal_d_IsReferencedOptions = IsReferencedOptions;
  namespace dataV1DataService_universal_d {
    export {
      dataV1DataService_universal_d_Item as Item,
      dataV1DataService_universal_d_InsertRequest as InsertRequest,
      dataV1DataService_universal_d_Segment as Segment,
      dataV1DataService_universal_d_Options as Options,
      dataV1DataService_universal_d_InsertResponse as InsertResponse,
      dataV1DataService_universal_d_UpdateRequest as UpdateRequest,
      dataV1DataService_universal_d_UpdateResponse as UpdateResponse,
      dataV1DataService_universal_d_SaveRequest as SaveRequest,
      dataV1DataService_universal_d_SaveResponse as SaveResponse,
      dataV1DataService_universal_d_PatchRequest as PatchRequest,
      dataV1DataService_universal_d_PatchResponse as PatchResponse,
      dataV1DataService_universal_d_PatchWhereRequest as PatchWhereRequest,
      dataV1DataService_universal_d_PatchWhereResponse as PatchWhereResponse,
      dataV1DataService_universal_d_GetRequest as GetRequest,
      dataV1DataService_universal_d_ReadOptions as ReadOptions,
      dataV1DataService_universal_d_GetResponse as GetResponse,
      dataV1DataService_universal_d_RemoveRequest as RemoveRequest,
      dataV1DataService_universal_d_RemoveResponse as RemoveResponse,
      dataV1DataService_universal_d_TruncateRequest as TruncateRequest,
      dataV1DataService_universal_d_TruncateResponse as TruncateResponse,
      dataV1DataService_universal_d_QueryRequest as QueryRequest,
      dataV1DataService_universal_d_Query as Query,
      dataV1DataService_universal_d_Sorting as Sorting,
      dataV1DataService_universal_d_SortOrder as SortOrder,
      dataV1DataService_universal_d_Paging as Paging,
      dataV1DataService_universal_d_QueryV2 as QueryV2,
      dataV1DataService_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      dataV1DataService_universal_d_CursorPaging as CursorPaging,
      dataV1DataService_universal_d_QueryResponse as QueryResponse,
      dataV1DataService_universal_d_PagingMetadataV2 as PagingMetadataV2,
      dataV1DataService_universal_d_Cursors as Cursors,
      dataV1DataService_universal_d_AggregationRequest as AggregationRequest,
      dataV1DataService_universal_d_AggregationResponse as AggregationResponse,
      dataV1DataService_universal_d_CountRequest as CountRequest,
      dataV1DataService_universal_d_CountResponse as CountResponse,
      dataV1DataService_universal_d_DistinctRequest as DistinctRequest,
      dataV1DataService_universal_d_DistinctResponse as DistinctResponse,
      dataV1DataService_universal_d_BulkInsertRequest as BulkInsertRequest,
      dataV1DataService_universal_d_BulkInsertResponse as BulkInsertResponse,
      dataV1DataService_universal_d_BulkError as BulkError,
      dataV1DataService_universal_d_ApplicationError as ApplicationError,
      dataV1DataService_universal_d_Details as Details,
      dataV1DataService_universal_d_BulkSaveRequest as BulkSaveRequest,
      dataV1DataService_universal_d_BulkSaveResponse as BulkSaveResponse,
      dataV1DataService_universal_d_BulkUpdateRequest as BulkUpdateRequest,
      dataV1DataService_universal_d_BulkUpdateResponse as BulkUpdateResponse,
      dataV1DataService_universal_d_BulkPatchRequest as BulkPatchRequest,
      dataV1DataService_universal_d_Entry as Entry,
      dataV1DataService_universal_d_BulkPatchResponse as BulkPatchResponse,
      dataV1DataService_universal_d_BulkRemoveRequest as BulkRemoveRequest,
      dataV1DataService_universal_d_BulkRemoveRequestEntry as BulkRemoveRequestEntry,
      dataV1DataService_universal_d_BulkRemoveResponse as BulkRemoveResponse,
      dataV1DataService_universal_d_QueryReferencedRequest as QueryReferencedRequest,
      dataV1DataService_universal_d_Order as Order,
      dataV1DataService_universal_d_QueryReferencedResponse as QueryReferencedResponse,
      dataV1DataService_universal_d_ReferencedEntity as ReferencedEntity,
      dataV1DataService_universal_d_ReferencedEntityEntityOneOf as ReferencedEntityEntityOneOf,
      dataV1DataService_universal_d_BulkInsertReferencesRequest as BulkInsertReferencesRequest,
      dataV1DataService_universal_d_Reference as Reference,
      dataV1DataService_universal_d_BulkInsertReferencesResponse as BulkInsertReferencesResponse,
      dataV1DataService_universal_d_BulkReplaceReferencesRequest as BulkReplaceReferencesRequest,
      dataV1DataService_universal_d_BulkReplaceReferencesResponse as BulkReplaceReferencesResponse,
      dataV1DataService_universal_d_BulkRemoveReferencesRequest as BulkRemoveReferencesRequest,
      dataV1DataService_universal_d_BulkRemoveReferencesResponse as BulkRemoveReferencesResponse,
      dataV1DataService_universal_d_IsReferencedRequest as IsReferencedRequest,
      dataV1DataService_universal_d_IsReferencedResponse as IsReferencedResponse,
      dataV1DataService_universal_d_RestoreFromTrashBinRequest as RestoreFromTrashBinRequest,
      dataV1DataService_universal_d_RestoreFromTrashBinResponse as RestoreFromTrashBinResponse,
      dataV1DataService_universal_d_insert as insert,
      dataV1DataService_universal_d_InsertOptions as InsertOptions,
      dataV1DataService_universal_d_update as update,
      dataV1DataService_universal_d_UpdateOptions as UpdateOptions,
      dataV1DataService_universal_d_save as save,
      dataV1DataService_universal_d_SaveOptions as SaveOptions,
      dataV1DataService_universal_d_get as get,
      dataV1DataService_universal_d_GetOptions as GetOptions,
      dataV1DataService_universal_d_remove as remove,
      dataV1DataService_universal_d_RemoveOptions as RemoveOptions,
      dataV1DataService_universal_d_truncate as truncate,
      dataV1DataService_universal_d_TruncateOptions as TruncateOptions,
      dataV1DataService_universal_d_query as query,
      dataV1DataService_universal_d_QueryOptions as QueryOptions,
      dataV1DataService_universal_d_aggregate as aggregate,
      dataV1DataService_universal_d_AggregateOptions as AggregateOptions,
      dataV1DataService_universal_d_count as count,
      dataV1DataService_universal_d_CountOptions as CountOptions,
      dataV1DataService_universal_d_distinct as distinct,
      dataV1DataService_universal_d_DistinctOptions as DistinctOptions,
      dataV1DataService_universal_d_bulkInsert as bulkInsert,
      dataV1DataService_universal_d_BulkInsertOptions as BulkInsertOptions,
      dataV1DataService_universal_d_bulkSave as bulkSave,
      dataV1DataService_universal_d_BulkSaveOptions as BulkSaveOptions,
      dataV1DataService_universal_d_bulkUpdate as bulkUpdate,
      dataV1DataService_universal_d_BulkUpdateOptions as BulkUpdateOptions,
      dataV1DataService_universal_d_bulkRemove as bulkRemove,
      dataV1DataService_universal_d_BulkRemoveOptions as BulkRemoveOptions,
      dataV1DataService_universal_d_queryReferenced as queryReferenced,
      dataV1DataService_universal_d_QueryReferencedOptions as QueryReferencedOptions,
      dataV1DataService_universal_d_bulkInsertReferences as bulkInsertReferences,
      dataV1DataService_universal_d_BulkInsertReferencesOptions as BulkInsertReferencesOptions,
      dataV1DataService_universal_d_bulkReplaceReferences as bulkReplaceReferences,
      dataV1DataService_universal_d_BulkReplaceReferencesOptions as BulkReplaceReferencesOptions,
      dataV1DataService_universal_d_bulkRemoveReferences as bulkRemoveReferences,
      dataV1DataService_universal_d_BulkRemoveReferencesOptions as BulkRemoveReferencesOptions,
      dataV1DataService_universal_d_isReferenced as isReferenced,
      dataV1DataService_universal_d_IsReferencedOptions as IsReferencedOptions,
    };
  }
  
  export { dataV1DataService_universal_d as data };
}
