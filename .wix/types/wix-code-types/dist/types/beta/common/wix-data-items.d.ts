declare module "wix-data-items" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface DataItem {
      /** Data item ID. */
      _id?: string;
      /**
       * Data item contents.
       *
       * Property-value pairs representing the data item's payload. When retrieving a data item, it also includes the following read-only fields:
       *
       * + `_id`: Item ID.
       * + `_createdDate`: Date and time the item was added to the collection.
       * + `_updatedDate`: Date and time the item was last modified. When the item is first inserted, `_createdDate` and `_updatedDate` have the same value.
       * + `_ownerId`: ID of the user who created the item. Can be modified with site owner permissions.
       */
      data?: Record<string, any> | null;
  }
  interface InsertDataItemRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to insert the item. */
      dataCollectionId: string;
      /** Item to insert. */
      dataItem: DataItem;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * If true, referenced items will be included.
       * @internal
       */
      includeReferencedItems?: boolean;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  enum Environment {
      LIVE = "LIVE",
      SANDBOX = "SANDBOX"
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
      appOptions?: Record<string, any> | null;
      /** @internal */
      publishPluginOptions?: PublishPluginOptions;
  }
  interface PublishPluginOptions {
      showDraftItems?: boolean;
  }
  interface InsertDataItemResponse {
      /** Inserted data item. */
      dataItem?: DataItem;
  }
  interface UpdateDataItemRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the existing item. */
      dataCollectionId: string;
      /** Updated data item content. The existing data item's content is replaced entirely. */
      dataItem: DataItem;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * If true, referenced items will be included.
       * @internal
       */
      includeReferencedItems?: boolean;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface UpdateDataItemResponse {
      /** Updated data item. */
      dataItem?: DataItem;
  }
  interface SaveDataItemRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to insert or update the item. */
      dataCollectionId: string;
      /** Data item to insert or update. */
      dataItem: DataItem;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * If true, referenced items will be included.
       * @internal
       */
      includeReferencedItems?: boolean;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface SaveDataItemResponse {
      /**
       * The action carried out for the item.
       *
       * + `INSERTED`: A new item was added to the collection.
       * + `UPDATED`: An existing item in the collection was updated.
       */
      action?: Action;
      /** Inserted or updated data item. */
      dataItem?: DataItem;
  }
  enum Action {
      UNKNOWN_ACTION = "UNKNOWN_ACTION",
      INSERTED = "INSERTED",
      UPDATED = "UPDATED"
  }
  interface GetDataItemRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection from which to retrieve the data item. */
      dataCollectionId: string;
      /** ID of the data item to retrieve. */
      dataItemId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  interface GetDataItemResponse {
      /** Retrieved item. */
      dataItem?: DataItem;
  }
  interface RemoveDataItemRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection from which to remove the item. */
      dataCollectionId: string;
      /** ID of the item to remove. */
      dataItemId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface RemoveDataItemResponse {
      /** Removed item. */
      dataItem?: DataItem;
  }
  interface TruncateDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection to truncate. */
      dataCollectionId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface TruncateDataItemsResponse {
  }
  interface QueryDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to insert the item. */
      dataCollectionId: string;
      /** Query preferences. For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language). */
      query?: QueryV2;
      /**
       * Whether to return the total count in the response for a query with offset paging.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Properties for which to include referenced items in the query's results.
       * Up to 50 referenced items can be included for each item that matches the query.
       */
      includeReferencedItems?: string[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Filter object in the following format:
       *
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       *
       * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
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
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
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
  interface QueryDataItemsResponse {
      /** Retrieved items. */
      dataItems?: DataItem[];
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface PagingMetadataV2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used, `returnTotalCount` is `true` in the request, and `tooManyToCount` is false. */
      total?: number | null;
      /** Whether the server failed to calculate the `total` field. */
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
  interface AggregateDataItemsRequest extends AggregateDataItemsRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection on which to run the aggregation. */
      dataCollectionId: string;
      /** Filter applied to the collection's data prior to running the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
      initialFilter?: Record<string, any> | null;
      /** Aggregation applied to the data. */
      aggregation?: Aggregation;
      /** Filter applied to the processed data following the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
      finalFilter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
      /**
       * Whether to return the total count in the response for a query with offset paging.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  /** @oneof */
  interface AggregateDataItemsRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface Average {
      /** Name of the field for which to calculate the average value. */
      itemFieldName?: string;
  }
  interface Min {
      /** Name of the field for which to calculate the minimum value. */
      itemFieldName?: string;
  }
  interface Max {
      /** Name of the field for which to calculate the maximum value. */
      itemFieldName?: string;
  }
  interface Sum {
      /** Name of the field for which to calculate the sum. */
      itemFieldName?: string;
  }
  interface Count {
  }
  interface Operation extends OperationCalculateOneOf {
      /** Calculate the average value of a specified field for all items in the grouping. */
      average?: Average;
      /** Calculate the minimum value of a specified field for all items in the grouping. */
      min?: Min;
      /** Calculate the maximum value of a specified field for all items in the grouping. */
      max?: Max;
      /** Calculate the sum of values of a specified field for all items in the grouping. */
      sum?: Sum;
      /** Calculate the number of items in the grouping. */
      itemCount?: Count;
      /** Name of the field containing results of the operation. */
      resultFieldName?: string;
  }
  /** @oneof */
  interface OperationCalculateOneOf {
      /** Calculate the average value of a specified field for all items in the grouping. */
      average?: Average;
      /** Calculate the minimum value of a specified field for all items in the grouping. */
      min?: Min;
      /** Calculate the maximum value of a specified field for all items in the grouping. */
      max?: Max;
      /** Calculate the sum of values of a specified field for all items in the grouping. */
      sum?: Sum;
      /** Calculate the number of items in the grouping. */
      itemCount?: Count;
  }
  interface Aggregation {
      /** Fields by which to group items for the aggregation. If empty, the aggregation is carried out on all items in the collection. */
      groupingFields?: string[];
      /** Operations to carry out on the data in each grouping. */
      operations?: Operation[];
  }
  interface AggregateDataItemsResponse {
      /** Aggregation results. */
      results?: Record<string, any>[] | null;
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface CountDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection for which to count query results. */
      dataCollectionId: string;
      /**
       * Filter object in the following format:
       *
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`.
       *
       * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`.
       */
      filter?: Record<string, any> | null;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  interface CountDataItemsResponse {
      /** Number of items matching the query. */
      totalCount?: number;
  }
  interface QueryDistinctValuesRequest extends QueryDistinctValuesRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection to query. */
      dataCollectionId: string;
      /** Item field name for which to return all distinct values. */
      fieldName?: string;
      /**
       * Filter object in the following format:
       *
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`.
       *
       * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`.
       */
      filter?: Record<string, any> | null;
      /** Sort order. */
      order?: SortOrder;
      /**
       * Whether to return the total count in the response for a query with offset paging.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  /** @oneof */
  interface QueryDistinctValuesRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface QueryDistinctValuesResponse {
      /** List of distinct values contained in the field specified in `fieldName`. */
      distinctValues?: any[];
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface BulkInsertDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to insert the items. */
      dataCollectionId: string;
      /** Data items to insert. */
      dataItems: DataItem[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options.
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the inserted data items.
       * When `true`, the `results` objects contain a `dataItem` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  interface BulkInsertDataItemsResponse {
      /** Information about the inserted items. */
      results?: BulkDataItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDataItemResult {
      /** The action attempted for the data item. */
      action?: BulkActionType;
      /** Metadata related to the data item for which the action was attempted. */
      itemMetadata?: ItemMetadata;
      /** The data item for which the action was attempted. Only returned if `returnEntity` is `true` in the request and the action is successful. */
      dataItem?: DataItem;
  }
  enum BulkActionType {
      UNKNOWN_ACTION_TYPE = "UNKNOWN_ACTION_TYPE",
      INSERT = "INSERT",
      UPDATE = "UPDATE",
      DELETE = "DELETE"
  }
  interface ItemMetadata {
      /** Item ID. This field doesn't appear if there is no item ID, for example, when item creation fails. */
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
      /** Number of items successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
  }
  interface BulkUpdateDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to update items. */
      dataCollectionId: string;
      /** Data items to update. */
      dataItems: DataItem[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the updated data items.
       * When `true`, the `results` objects contain a `dataItem` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  interface BulkUpdateDataItemsResponse {
      /** Information about the updated items. */
      results?: BulkDataItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkSaveDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to insert or update the items. */
      dataCollectionId: string;
      /** Data items to insert or update. */
      dataItems: DataItem[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the saved data item.
       * When `true`, the `results` objects contain a `dataItem` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  interface BulkSaveDataItemsResponse {
      /** Information about the saved items. */
      results?: BulkDataItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkRemoveDataItemsRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection from which to remove the item. */
      dataCollectionId: string;
      /** IDs of data items to remove. */
      dataItemIds: string[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface BulkRemoveDataItemsResponse {
      /** Information about the removed data items. */
      results?: BulkDataItemResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface QueryReferencedDataItemsRequest extends QueryReferencedDataItemsRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the referring item. */
      dataCollectionId: string;
      /** ID of the referring item. */
      referringItemId?: string;
      /** Field containing references in the referring item. */
      referringItemFieldName?: string;
      /** Order of the returned referenced items. Sorted by the date each item was referenced. */
      order?: SortOrder;
      /**
       * Whether to return the total count in the response.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  /** @oneof */
  interface QueryReferencedDataItemsRequestPagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface QueryReferencedDataItemsResponse {
      /** Referenced items and/or IDs. For successfully resolved references, the referenced data item is returned. For references that can't be resolved, the ID is returned. */
      results?: ReferencedResult[];
      /** Paging information. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface UnresolvedReference {
      /** ID of the referring item. */
      referringItemId?: string;
      /** Field specified to query for references. */
      referringItemFieldName?: string;
  }
  interface ReferencedResult extends ReferencedResultEntityOneOf {
      /** Data item referenced. */
      dataItem?: DataItem;
      /** Unresolved reference. Appears instead of the data item when the reference doesn't resolve, for example, when an ID isn't found or if an item is in draft state. */
      unresolvedReference?: UnresolvedReference;
  }
  /** @oneof */
  interface ReferencedResultEntityOneOf {
      /** Data item referenced. */
      dataItem?: DataItem;
      /** Unresolved reference. Appears instead of the data item when the reference doesn't resolve, for example, when an ID isn't found or if an item is in draft state. */
      unresolvedReference?: UnresolvedReference;
  }
  interface IsReferencedDataItemRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the referring data item. */
      dataCollectionId: string;
      /** Field to check for a reference to the item that may be referenced. */
      referringItemFieldName: string;
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
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  interface IsReferencedDataItemResponse {
      /** Whether the specified reference exists. */
      isReferenced?: boolean;
  }
  interface InsertDataItemReferenceRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to insert the reference. */
      dataCollectionId: string;
      /** Reference to insert */
      dataItemReference?: DataItemReference;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface DataItemReference {
      /** Referring item field containing the references to the referenced items. */
      referringItemFieldName?: string;
      /** ID of the referring item. */
      referringItemId?: string;
      /** ID of the referenced item. */
      referencedItemId?: string;
  }
  interface InsertDataItemReferenceResponse {
      /** Inserted reference. */
      dataItemReference?: DataItemReference;
  }
  interface RemoveDataItemReferenceRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the referring item. */
      dataCollectionId: string;
      /** Reference to remove. */
      dataItemReference: DataItemReference;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface RemoveDataItemReferenceResponse {
      /** Removed reference. */
      dataItemReference?: DataItemReference;
  }
  interface BulkInsertDataItemReferencesRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the referring items. */
      dataCollectionId: string;
      /** References to insert. */
      dataItemReferences: DataItemReference[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the inserted data item references.
       * When `true`, the `results` objects contain a `dataItemReference` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  interface BulkInsertDataItemReferencesResponse {
      /** Information about the inserted references. */
      results?: BulkDataItemReferenceResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDataItemReferenceResult {
      /** The action attempted for the reference. */
      action?: BulkActionType;
      /** Metadata related to the reference for which the action was attempted. */
      referenceMetadata?: ItemMetadata;
      /** The reference for which the action was attempted. Only returned if `returnEntity` is `true` in the request and the action is successful. */
      dataItemReference?: DataItemReference;
  }
  interface BulkRemoveDataItemReferencesRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the referring items. */
      dataCollectionId: string;
      /** References to remove. */
      dataItemReferences: DataItemReference[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface BulkRemoveDataItemReferencesResponse {
      /** Information about the removed references. */
      results?: BulkDataItemReferenceResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface ReplaceDataItemReferencesRequest {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the referring item. */
      dataCollectionId: string;
      /** Field containing references in the referring item. */
      referringItemFieldName: string;
      /** ID of the referring item. */
      referringItemId: string;
      /** List of new referenced item IDs to replace the existing ones. */
      newReferencedItemIds?: string[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  interface ReplaceDataItemReferencesResponse {
      /** Updated references. */
      dataItemReferences?: DataItemReference[];
  }
  /**
   * Adds an item to a collection.
   *
   *
   * An item can only be inserted into an existing connection.
   * You can create a new collection using the [Data Collections API](https://dev.wix.com/api/rest/wix-data/wix-data/data-collections).
   *
   * When an item is inserted into a collection, the item's ID is automatically assigned a random value.
   * You can optionally provide a custom ID in `dataItem.id` when inserting the item.
   * If you specify an ID that already exists in the collection, the insertion will fail.
   *
   * If `dataItem.data` is empty, a new item is created with no data fields.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItem
   */
  function insertDataItem(options: InsertDataItemOptions): Promise<InsertDataItemResponse>;
  interface InsertDataItemOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to insert the item. */
      dataCollectionId: string;
      /** Item to insert. */
      dataItem: DataItem;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * If true, referenced items will be included.
       * @internal
       */
      includeReferencedItems?: boolean;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Updates an item in a collection.
   *
   *
   * This endpoint replaces the data item's existing data with the payload provided in `dataItem.data` in the request.
   *
   * To update an item, you need to specify an item ID and a collection ID.
   * If an item is found in the specified collection with the specified ID, that item is updated.
   * If the collection doesn't contain an item with that ID, the request fails.
   *
   * When an item is updated, its `data._updatedDate` field is changed to the current date and time.
   *
   * > **Note:**
   * > After an item is updated, it only contains the fields included in the `dataItem.data` payload in Update Data Item request.
   * > If the existing item has fields with values and those fields aren't included in the updated item, their values are lost.
   * @param _id - Data item ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItem
   */
  function updateDataItem(_id: string, options: UpdateDataItemOptions): Promise<UpdateDataItemResponse>;
  interface UpdateDataItemOptions {
      dataItem: {
          /** Data item ID. */
          _id?: string;
          /**
           * Data item contents.
           *
           * Property-value pairs representing the data item's payload. When retrieving a data item, it also includes the following read-only fields:
           *
           * + `_id`: Item ID.
           * + `_createdDate`: Date and time the item was added to the collection.
           * + `_updatedDate`: Date and time the item was last modified. When the item is first inserted, `_createdDate` and `_updatedDate` have the same value.
           * + `_ownerId`: ID of the user who created the item. Can be modified with site owner permissions.
           */
          data?: Record<string, any> | null;
      };
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the existing item. */
      dataCollectionId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * If true, referenced items will be included.
       * @internal
       */
      includeReferencedItems?: boolean;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Inserts or updates an item in a collection.
   *
   *
   * The Save Data Item endpoint inserts or updates the specified item, depending on whether it already exists in the collection.
   *
   * + If you don't provide an ID, a new item is created.
   *
   * + If you provide an ID that does not exist in the collection, a new item is created with that ID.
   *
   * + If an item with the ID you provide already exists in the collection, that item is updated. When an item is updated, its `data._updatedDate` field is changed to the current date and time.
   *
   * > **Note:** When you provide an item with an ID that already exists in the collection, the payload you provide in `dataItem.data` replaces the existing item with that ID.
   * > This means that the item's previous fields and values are lost.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItem
   */
  function saveDataItem(options: SaveDataItemOptions): Promise<SaveDataItemResponse>;
  interface SaveDataItemOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to insert or update the item. */
      dataCollectionId: string;
      /** Data item to insert or update. */
      dataItem: DataItem;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * If true, referenced items will be included.
       * @internal
       */
      includeReferencedItems?: boolean;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Retrieves an item from a collection.
   * @param dataItemId - ID of the data item to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField dataItemId
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @returns Retrieved item.
   */
  function getDataItem(dataItemId: string, options: GetDataItemOptions): Promise<DataItem>;
  interface GetDataItemOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection from which to retrieve the data item. */
      dataCollectionId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  /**
   * Removes an item from a collection.
   *
   *
   * If any items in other collections reference the removed item in reference or multi-reference fields, those fields are cleared.
   *
   * > **Note:**
   * > Once an item has been removed from a collection, it can't be restored.
   * @param dataItemId - ID of the item to remove.
   * @public
   * @documentationMaturity preview
   * @requiredField dataItemId
   * @requiredField options
   * @requiredField options.dataCollectionId
   */
  function removeDataItem(dataItemId: string, options: RemoveDataItemOptions): Promise<RemoveDataItemResponse>;
  interface RemoveDataItemOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection from which to remove the item. */
      dataCollectionId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Removes all items from a collection.
   *
   *
   * If any items in other collections reference the removed items in reference or multi-reference fields, those fields are cleared.
   *
   * > **Note:**
   * > Once items have been removed from a collection, they can't be restored.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   */
  function truncateDataItems(options: TruncateDataItemsOptions): Promise<void>;
  interface TruncateDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection to truncate. */
      dataCollectionId: string;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Retrieves a list of items, on the basis of the filtering, sorting, and paging preferences you provide.
   *
   *
   * For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * @public
   * @documentationMaturity preview
   * @requiredField options.options
   * @requiredField options.options.dataCollectionId
   */
  function queryDataItems(options: QueryDataItemsOptions): DataItemsQueryBuilder;
  interface QueryDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment | undefined;
      /** ID of the collection in which to insert the item. */
      dataCollectionId: string;
      /**
       * Whether to return the total count in the response for a query with offset paging.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean | undefined;
      /**
       * Properties for which to include referenced items in the query's results.
       * Up to 50 referenced items can be included for each item that matches the query.
       */
      includeReferencedItems?: string[] | undefined;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null | undefined;
      /**
       * Data access options
       * @internal
       */
      options?: Options | undefined;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean | undefined;
  }
  interface QueryOffsetResult {
      currentPage: number;
      totalPages: number;
      totalCount: number;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface DataItemsQueryResult extends QueryOffsetResult {
      items: DataItem[];
      query: DataItemsQueryBuilder;
      next: () => Promise<DataItemsQueryResult>;
      prev: () => Promise<DataItemsQueryResult>;
  }
  interface DataItemsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'data' | string, value: any) => DataItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'data' | string, value: any) => DataItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | string, value: string) => DataItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | 'data' | string, value: any[]) => DataItemsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'data' | string, value: any) => DataItemsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | 'data' | string, value: boolean) => DataItemsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'data' | string>) => DataItemsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'data' | string>) => DataItemsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => DataItemsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => DataItemsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<DataItemsQueryResult>;
  }
  /**
   * Runs an aggregation on a data collection and returns the resulting list of items.
   *
   *
   * An aggregation enables you to perform certain calculations on your collection data, or on groups of items that you define, to retrieve meaningful summaries.
   * You can also add paging, filtering, and sorting preferences to your aggregation to retrieve exactly what you need.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   */
  function aggregateDataItems(options: AggregateDataItemsOptions): Promise<AggregateDataItemsResponse>;
  interface AggregateDataItemsOptions extends AggregateDataItemsRequestPagingMethodOneOf {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection on which to run the aggregation. */
      dataCollectionId: string;
      /** Filter applied to the collection's data prior to running the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
      initialFilter?: Record<string, any> | null;
      /** Aggregation applied to the data. */
      aggregation?: Aggregation;
      /** Filter applied to the processed data following the aggregation. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section) for information on how to structure a filter object. */
      finalFilter?: Record<string, any> | null;
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
      /**
       * Whether to return the total count in the response for a query with offset paging.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  /**
   * Counts the number of items in a data collection that match the provided filtering preferences.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   */
  function countDataItems(options: CountDataItemsOptions): Promise<CountDataItemsResponse>;
  interface CountDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection for which to count query results. */
      dataCollectionId: string;
      /**
       * Filter object in the following format:
       *
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`.
       *
       * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`.
       */
      filter?: Record<string, any> | null;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  /**
   * Retrieves a list of distinct values for a given field in all items that match a query, without duplicates.
   *
   *
   * As with the [Query Data Items](https://dev.wix.com/api/rest/wix-data/wix-data/data-items/query-data-items) endpoint, this endpoint retrieves items based on the filtering, sorting, and paging preferences you provide.
   * However, the Query Distinct Values endpoint doesn't return all of the full items that match the query.
   * Rather, it returns all unique values of the field you specify in `fieldName` for items that match the query.
   * If more than one item has the same value for that field, that value appears only once.
   *
   * For more details on using queries, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   */
  function queryDistinctValues(options: QueryDistinctValuesOptions): Promise<QueryDistinctValuesResponse>;
  interface QueryDistinctValuesOptions extends QueryDistinctValuesRequestPagingMethodOneOf {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection to query. */
      dataCollectionId: string;
      /** Item field name for which to return all distinct values. */
      fieldName?: string;
      /**
       * Filter object in the following format:
       *
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`.
       *
       * Examples of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`.
       */
      filter?: Record<string, any> | null;
      /** Sort order. */
      order?: SortOrder;
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Whether to return the total count in the response for a query with offset paging.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  /**
   * Adds multiple items to a collection.
   *
   *
   * When each item is inserted into a collection, its ID is automatically assigned to random value.
   * You can optionally provide your own ID when inserting the item. If you specify an ID that already exists in the collection, the insertion will fail.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItems
   */
  function bulkInsertDataItems(options: BulkInsertDataItemsOptions): Promise<BulkInsertDataItemsResponse>;
  interface BulkInsertDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to insert the items. */
      dataCollectionId: string;
      /** Data items to insert. */
      dataItems: DataItem[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options.
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the inserted data items.
       * When `true`, the `results` objects contain a `dataItem` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  /**
   * Updates multiple items in a collection.
   *
   *
   * This endpoint replaces each specified data item's existing data with the payload provided in the request.
   *
   * Each item in the request must include an ID. If an item is found in the specified collection with
   * the same ID, that item is updated. If the collection doesn't contain an item with that ID, the update fails.
   *
   * When an item is updated, its `data._updatedDate` field is changed to the current date and time.
   *
   * > **Note:**
   * > After each item is updated, it only contains the fields included in the request. If the existing item has fields with values and those fields
   * > aren't included in the updated item, their values are lost.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItems
   */
  function bulkUpdateDataItems(options: BulkUpdateDataItemsOptions): Promise<BulkUpdateDataItemsResponse>;
  interface BulkUpdateDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to update items. */
      dataCollectionId: string;
      /** Data items to update. */
      dataItems: DataItem[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the updated data items.
       * When `true`, the `results` objects contain a `dataItem` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  /**
   * Inserts or updates multiple items in a collection.
   *
   *
   * The Bulk Save Data Items endpoint inserts or updates each item provided, depending on whether it already exists in the collection. For each item:
   *
   * + If you don't provide an ID, a new item is created.
   *
   * + If you provide an ID that doesn't exist in the collection, a new item is created with that ID.
   *
   * + If an item with the ID you provide already exists in the collection, that item is updated. When an item is updated, its `data._updatedDate` field is changed to the current date and time.
   *
   * > **Note:** When you provide an item with an ID that already exists in the collection, the item you provide completely replaces the existing item with that ID.
   * > This means that all of the item's previous fields and values are lost.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItems
   */
  function bulkSaveDataItems(options: BulkSaveDataItemsOptions): Promise<BulkSaveDataItemsResponse>;
  interface BulkSaveDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to insert or update the items. */
      dataCollectionId: string;
      /** Data items to insert or update. */
      dataItems: DataItem[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the saved data item.
       * When `true`, the `results` objects contain a `dataItem` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  /**
   * Removes multiple items from a collection.
   *
   *
   * If any items in other collections reference the removed items in reference or multi-reference fields, those fields are cleared.
   *
   * > **Note:** Once an item has been removed from a collection, it can't be restored.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItemIds
   */
  function bulkRemoveDataItems(options: BulkRemoveDataItemsOptions): Promise<BulkRemoveDataItemsResponse>;
  interface BulkRemoveDataItemsOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection from which to remove the item. */
      dataCollectionId: string;
      /** IDs of data items to remove. */
      dataItemIds: string[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Retrieves the full items referenced in the specified field of an item.
   *
   *
   * Reference and multi-reference fields refer to items in different collections.
   * Use this endpoint to retrieve the full details of the referenced items themselves.
   *
   * For example, suppose you have a **Movies** collection with an **Actors** field that contains references to items in a **People** collection.
   * Querying the **Movies** collection using the Query Referenced Data Items endpoint returns the relevant **People** items referenced in the **Actors** field of the specified **Movie** item.
   * This gives you information from the **People** collection about each of the actors in the specified movie.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   */
  function queryReferencedDataItems(options: QueryReferencedDataItemsOptions): Promise<QueryReferencedDataItemsResponse>;
  interface QueryReferencedDataItemsOptions extends QueryReferencedDataItemsRequestPagingMethodOneOf {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the referring item. */
      dataCollectionId: string;
      /** ID of the referring item. */
      referringItemId?: string;
      /** Field containing references in the referring item. */
      referringItemFieldName?: string;
      /** Order of the returned referenced items. Sorted by the date each item was referenced. */
      order?: SortOrder;
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Whether to return the total count in the response.
       * When `true`, the `pagingMetadata` object in the response contains a `total` field.
       *
       * Default: `false`
       */
      returnTotalCount?: boolean;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  /**
   * Checks whether a field in a referring item contains a reference to a specified item.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.referencedItemId
   * @requiredField options.referringItemFieldName
   * @requiredField options.referringItemId
   */
  function isReferencedDataItem(options: IsReferencedDataItemOptions): Promise<IsReferencedDataItemResponse>;
  interface IsReferencedDataItemOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the referring data item. */
      dataCollectionId: string;
      /** Field to check for a reference to the item that may be referenced. */
      referringItemFieldName: string;
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
      options?: Options;
      /**
       * Whether to retrieve data from the primary database instance.
       * This decreases performance but ensures data retrieved is up to date even immediately after an update.
       * Learn more about [Wix Data and eventual consistency](https://dev.wix.com/api/rest/wix-data/wix-data/eventual-consistency).
       *
       * Default: `false`
       */
      consistentRead?: boolean;
  }
  /**
   * Inserts a reference in the specified field in an item in a collection.
   *
   *
   * A reference in the `dataItemReference` field specifies a referring item's ID, the field in which to insert the reference, and the ID of the referenced item.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItemReference.referencedItemId
   * @requiredField options.dataItemReference.referringItemFieldName
   * @requiredField options.dataItemReference.referringItemId
   */
  function insertDataItemReference(options: InsertDataItemReferenceOptions): Promise<InsertDataItemReferenceResponse>;
  interface InsertDataItemReferenceOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection in which to insert the reference. */
      dataCollectionId: string;
      /** Reference to insert */
      dataItemReference?: DataItemReference;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Removes the specified reference from the specified field.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItemReference
   * @requiredField options.dataItemReference.referencedItemId
   * @requiredField options.dataItemReference.referringItemFieldName
   * @requiredField options.dataItemReference.referringItemId
   */
  function removeDataItemReference(options: RemoveDataItemReferenceOptions): Promise<RemoveDataItemReferenceResponse>;
  interface RemoveDataItemReferenceOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the referring item. */
      dataCollectionId: string;
      /** Reference to remove. */
      dataItemReference: DataItemReference;
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Inserts one or more references in the specified fields of items in a collection.
   *
   *
   * This endpoint adds one or more references to a collection.
   * Each new reference in the `dataItemReferences` field specifies a referring item's ID, the field in which to insert the reference, and the ID of the referenced item.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItemReferences
   * @requiredField options.dataItemReferences.referencedItemId
   * @requiredField options.dataItemReferences.referringItemFieldName
   * @requiredField options.dataItemReferences.referringItemId
   */
  function bulkInsertDataItemReferences(options: BulkInsertDataItemReferencesOptions): Promise<BulkInsertDataItemReferencesResponse>;
  interface BulkInsertDataItemReferencesOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the referring items. */
      dataCollectionId: string;
      /** References to insert. */
      dataItemReferences: DataItemReference[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
      /**
       * Whether to return the inserted data item references.
       * When `true`, the `results` objects contain a `dataItemReference` field.
       *
       * Default: `false`
       */
      returnEntity?: boolean;
  }
  /**
   * Removes one or more references.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.dataItemReferences
   * @requiredField options.dataItemReferences.referencedItemId
   * @requiredField options.dataItemReferences.referringItemFieldName
   * @requiredField options.dataItemReferences.referringItemId
   */
  function bulkRemoveDataItemReferences(options: BulkRemoveDataItemReferencesOptions): Promise<BulkRemoveDataItemReferencesResponse>;
  interface BulkRemoveDataItemReferencesOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the referring items. */
      dataCollectionId: string;
      /** References to remove. */
      dataItemReferences: DataItemReference[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  /**
   * Replaces references in a specified field of a specified data item.
   *
   *
   * This endpoint replaces the existing reference or references contained in the field specified in `referringItemFieldName` within the data item specified in `referringItemId`.
   * The endpoint removes existing references and in their place it adds references to the items specified in `newReferencedItemIds`.
   *
   * > **Note:** If you pass an empty array in `newReferencedItemIds`, all existing references are removed.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.dataCollectionId
   * @requiredField options.referringItemFieldName
   * @requiredField options.referringItemId
   */
  function replaceDataItemReferences(options: ReplaceDataItemReferencesOptions): Promise<ReplaceDataItemReferencesResponse>;
  interface ReplaceDataItemReferencesOptions {
      /**
       * Environment: LIVE or SANDBOX
       * @internal
       */
      environment?: Environment;
      /** ID of the collection containing the referring item. */
      dataCollectionId: string;
      /** Field containing references in the referring item. */
      referringItemFieldName: string;
      /** ID of the referring item. */
      referringItemId: string;
      /** List of new referenced item IDs to replace the existing ones. */
      newReferencedItemIds?: string[];
      /**
       * Grid app id. Optional in Live segment.
       * @internal
       */
      appId?: string | null;
      /**
       * Data access options
       * @internal
       */
      options?: Options;
  }
  
  const dataV2DataItem_universal_d___debug: typeof __debug;
  type dataV2DataItem_universal_d_DataItem = DataItem;
  type dataV2DataItem_universal_d_InsertDataItemRequest = InsertDataItemRequest;
  type dataV2DataItem_universal_d_Environment = Environment;
  const dataV2DataItem_universal_d_Environment: typeof Environment;
  type dataV2DataItem_universal_d_Options = Options;
  type dataV2DataItem_universal_d_PublishPluginOptions = PublishPluginOptions;
  type dataV2DataItem_universal_d_InsertDataItemResponse = InsertDataItemResponse;
  type dataV2DataItem_universal_d_UpdateDataItemRequest = UpdateDataItemRequest;
  type dataV2DataItem_universal_d_UpdateDataItemResponse = UpdateDataItemResponse;
  type dataV2DataItem_universal_d_SaveDataItemRequest = SaveDataItemRequest;
  type dataV2DataItem_universal_d_SaveDataItemResponse = SaveDataItemResponse;
  type dataV2DataItem_universal_d_Action = Action;
  const dataV2DataItem_universal_d_Action: typeof Action;
  type dataV2DataItem_universal_d_GetDataItemRequest = GetDataItemRequest;
  type dataV2DataItem_universal_d_GetDataItemResponse = GetDataItemResponse;
  type dataV2DataItem_universal_d_RemoveDataItemRequest = RemoveDataItemRequest;
  type dataV2DataItem_universal_d_RemoveDataItemResponse = RemoveDataItemResponse;
  type dataV2DataItem_universal_d_TruncateDataItemsRequest = TruncateDataItemsRequest;
  type dataV2DataItem_universal_d_TruncateDataItemsResponse = TruncateDataItemsResponse;
  type dataV2DataItem_universal_d_QueryDataItemsRequest = QueryDataItemsRequest;
  type dataV2DataItem_universal_d_QueryV2 = QueryV2;
  type dataV2DataItem_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type dataV2DataItem_universal_d_Sorting = Sorting;
  type dataV2DataItem_universal_d_SortOrder = SortOrder;
  const dataV2DataItem_universal_d_SortOrder: typeof SortOrder;
  type dataV2DataItem_universal_d_Paging = Paging;
  type dataV2DataItem_universal_d_CursorPaging = CursorPaging;
  type dataV2DataItem_universal_d_QueryDataItemsResponse = QueryDataItemsResponse;
  type dataV2DataItem_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type dataV2DataItem_universal_d_Cursors = Cursors;
  type dataV2DataItem_universal_d_AggregateDataItemsRequest = AggregateDataItemsRequest;
  type dataV2DataItem_universal_d_AggregateDataItemsRequestPagingMethodOneOf = AggregateDataItemsRequestPagingMethodOneOf;
  type dataV2DataItem_universal_d_Average = Average;
  type dataV2DataItem_universal_d_Min = Min;
  type dataV2DataItem_universal_d_Max = Max;
  type dataV2DataItem_universal_d_Sum = Sum;
  type dataV2DataItem_universal_d_Count = Count;
  type dataV2DataItem_universal_d_Operation = Operation;
  type dataV2DataItem_universal_d_OperationCalculateOneOf = OperationCalculateOneOf;
  type dataV2DataItem_universal_d_Aggregation = Aggregation;
  type dataV2DataItem_universal_d_AggregateDataItemsResponse = AggregateDataItemsResponse;
  type dataV2DataItem_universal_d_CountDataItemsRequest = CountDataItemsRequest;
  type dataV2DataItem_universal_d_CountDataItemsResponse = CountDataItemsResponse;
  type dataV2DataItem_universal_d_QueryDistinctValuesRequest = QueryDistinctValuesRequest;
  type dataV2DataItem_universal_d_QueryDistinctValuesRequestPagingMethodOneOf = QueryDistinctValuesRequestPagingMethodOneOf;
  type dataV2DataItem_universal_d_QueryDistinctValuesResponse = QueryDistinctValuesResponse;
  type dataV2DataItem_universal_d_BulkInsertDataItemsRequest = BulkInsertDataItemsRequest;
  type dataV2DataItem_universal_d_BulkInsertDataItemsResponse = BulkInsertDataItemsResponse;
  type dataV2DataItem_universal_d_BulkDataItemResult = BulkDataItemResult;
  type dataV2DataItem_universal_d_BulkActionType = BulkActionType;
  const dataV2DataItem_universal_d_BulkActionType: typeof BulkActionType;
  type dataV2DataItem_universal_d_ItemMetadata = ItemMetadata;
  type dataV2DataItem_universal_d_ApplicationError = ApplicationError;
  type dataV2DataItem_universal_d_BulkActionMetadata = BulkActionMetadata;
  type dataV2DataItem_universal_d_BulkUpdateDataItemsRequest = BulkUpdateDataItemsRequest;
  type dataV2DataItem_universal_d_BulkUpdateDataItemsResponse = BulkUpdateDataItemsResponse;
  type dataV2DataItem_universal_d_BulkSaveDataItemsRequest = BulkSaveDataItemsRequest;
  type dataV2DataItem_universal_d_BulkSaveDataItemsResponse = BulkSaveDataItemsResponse;
  type dataV2DataItem_universal_d_BulkRemoveDataItemsRequest = BulkRemoveDataItemsRequest;
  type dataV2DataItem_universal_d_BulkRemoveDataItemsResponse = BulkRemoveDataItemsResponse;
  type dataV2DataItem_universal_d_QueryReferencedDataItemsRequest = QueryReferencedDataItemsRequest;
  type dataV2DataItem_universal_d_QueryReferencedDataItemsRequestPagingMethodOneOf = QueryReferencedDataItemsRequestPagingMethodOneOf;
  type dataV2DataItem_universal_d_QueryReferencedDataItemsResponse = QueryReferencedDataItemsResponse;
  type dataV2DataItem_universal_d_UnresolvedReference = UnresolvedReference;
  type dataV2DataItem_universal_d_ReferencedResult = ReferencedResult;
  type dataV2DataItem_universal_d_ReferencedResultEntityOneOf = ReferencedResultEntityOneOf;
  type dataV2DataItem_universal_d_IsReferencedDataItemRequest = IsReferencedDataItemRequest;
  type dataV2DataItem_universal_d_IsReferencedDataItemResponse = IsReferencedDataItemResponse;
  type dataV2DataItem_universal_d_InsertDataItemReferenceRequest = InsertDataItemReferenceRequest;
  type dataV2DataItem_universal_d_DataItemReference = DataItemReference;
  type dataV2DataItem_universal_d_InsertDataItemReferenceResponse = InsertDataItemReferenceResponse;
  type dataV2DataItem_universal_d_RemoveDataItemReferenceRequest = RemoveDataItemReferenceRequest;
  type dataV2DataItem_universal_d_RemoveDataItemReferenceResponse = RemoveDataItemReferenceResponse;
  type dataV2DataItem_universal_d_BulkInsertDataItemReferencesRequest = BulkInsertDataItemReferencesRequest;
  type dataV2DataItem_universal_d_BulkInsertDataItemReferencesResponse = BulkInsertDataItemReferencesResponse;
  type dataV2DataItem_universal_d_BulkDataItemReferenceResult = BulkDataItemReferenceResult;
  type dataV2DataItem_universal_d_BulkRemoveDataItemReferencesRequest = BulkRemoveDataItemReferencesRequest;
  type dataV2DataItem_universal_d_BulkRemoveDataItemReferencesResponse = BulkRemoveDataItemReferencesResponse;
  type dataV2DataItem_universal_d_ReplaceDataItemReferencesRequest = ReplaceDataItemReferencesRequest;
  type dataV2DataItem_universal_d_ReplaceDataItemReferencesResponse = ReplaceDataItemReferencesResponse;
  const dataV2DataItem_universal_d_insertDataItem: typeof insertDataItem;
  type dataV2DataItem_universal_d_InsertDataItemOptions = InsertDataItemOptions;
  const dataV2DataItem_universal_d_updateDataItem: typeof updateDataItem;
  type dataV2DataItem_universal_d_UpdateDataItemOptions = UpdateDataItemOptions;
  const dataV2DataItem_universal_d_saveDataItem: typeof saveDataItem;
  type dataV2DataItem_universal_d_SaveDataItemOptions = SaveDataItemOptions;
  const dataV2DataItem_universal_d_getDataItem: typeof getDataItem;
  type dataV2DataItem_universal_d_GetDataItemOptions = GetDataItemOptions;
  const dataV2DataItem_universal_d_removeDataItem: typeof removeDataItem;
  type dataV2DataItem_universal_d_RemoveDataItemOptions = RemoveDataItemOptions;
  const dataV2DataItem_universal_d_truncateDataItems: typeof truncateDataItems;
  type dataV2DataItem_universal_d_TruncateDataItemsOptions = TruncateDataItemsOptions;
  const dataV2DataItem_universal_d_queryDataItems: typeof queryDataItems;
  type dataV2DataItem_universal_d_QueryDataItemsOptions = QueryDataItemsOptions;
  type dataV2DataItem_universal_d_DataItemsQueryResult = DataItemsQueryResult;
  type dataV2DataItem_universal_d_DataItemsQueryBuilder = DataItemsQueryBuilder;
  const dataV2DataItem_universal_d_aggregateDataItems: typeof aggregateDataItems;
  type dataV2DataItem_universal_d_AggregateDataItemsOptions = AggregateDataItemsOptions;
  const dataV2DataItem_universal_d_countDataItems: typeof countDataItems;
  type dataV2DataItem_universal_d_CountDataItemsOptions = CountDataItemsOptions;
  const dataV2DataItem_universal_d_queryDistinctValues: typeof queryDistinctValues;
  type dataV2DataItem_universal_d_QueryDistinctValuesOptions = QueryDistinctValuesOptions;
  const dataV2DataItem_universal_d_bulkInsertDataItems: typeof bulkInsertDataItems;
  type dataV2DataItem_universal_d_BulkInsertDataItemsOptions = BulkInsertDataItemsOptions;
  const dataV2DataItem_universal_d_bulkUpdateDataItems: typeof bulkUpdateDataItems;
  type dataV2DataItem_universal_d_BulkUpdateDataItemsOptions = BulkUpdateDataItemsOptions;
  const dataV2DataItem_universal_d_bulkSaveDataItems: typeof bulkSaveDataItems;
  type dataV2DataItem_universal_d_BulkSaveDataItemsOptions = BulkSaveDataItemsOptions;
  const dataV2DataItem_universal_d_bulkRemoveDataItems: typeof bulkRemoveDataItems;
  type dataV2DataItem_universal_d_BulkRemoveDataItemsOptions = BulkRemoveDataItemsOptions;
  const dataV2DataItem_universal_d_queryReferencedDataItems: typeof queryReferencedDataItems;
  type dataV2DataItem_universal_d_QueryReferencedDataItemsOptions = QueryReferencedDataItemsOptions;
  const dataV2DataItem_universal_d_isReferencedDataItem: typeof isReferencedDataItem;
  type dataV2DataItem_universal_d_IsReferencedDataItemOptions = IsReferencedDataItemOptions;
  const dataV2DataItem_universal_d_insertDataItemReference: typeof insertDataItemReference;
  type dataV2DataItem_universal_d_InsertDataItemReferenceOptions = InsertDataItemReferenceOptions;
  const dataV2DataItem_universal_d_removeDataItemReference: typeof removeDataItemReference;
  type dataV2DataItem_universal_d_RemoveDataItemReferenceOptions = RemoveDataItemReferenceOptions;
  const dataV2DataItem_universal_d_bulkInsertDataItemReferences: typeof bulkInsertDataItemReferences;
  type dataV2DataItem_universal_d_BulkInsertDataItemReferencesOptions = BulkInsertDataItemReferencesOptions;
  const dataV2DataItem_universal_d_bulkRemoveDataItemReferences: typeof bulkRemoveDataItemReferences;
  type dataV2DataItem_universal_d_BulkRemoveDataItemReferencesOptions = BulkRemoveDataItemReferencesOptions;
  const dataV2DataItem_universal_d_replaceDataItemReferences: typeof replaceDataItemReferences;
  type dataV2DataItem_universal_d_ReplaceDataItemReferencesOptions = ReplaceDataItemReferencesOptions;
  namespace dataV2DataItem_universal_d {
    export {
      dataV2DataItem_universal_d___debug as __debug,
      dataV2DataItem_universal_d_DataItem as DataItem,
      dataV2DataItem_universal_d_InsertDataItemRequest as InsertDataItemRequest,
      dataV2DataItem_universal_d_Environment as Environment,
      dataV2DataItem_universal_d_Options as Options,
      dataV2DataItem_universal_d_PublishPluginOptions as PublishPluginOptions,
      dataV2DataItem_universal_d_InsertDataItemResponse as InsertDataItemResponse,
      dataV2DataItem_universal_d_UpdateDataItemRequest as UpdateDataItemRequest,
      dataV2DataItem_universal_d_UpdateDataItemResponse as UpdateDataItemResponse,
      dataV2DataItem_universal_d_SaveDataItemRequest as SaveDataItemRequest,
      dataV2DataItem_universal_d_SaveDataItemResponse as SaveDataItemResponse,
      dataV2DataItem_universal_d_Action as Action,
      dataV2DataItem_universal_d_GetDataItemRequest as GetDataItemRequest,
      dataV2DataItem_universal_d_GetDataItemResponse as GetDataItemResponse,
      dataV2DataItem_universal_d_RemoveDataItemRequest as RemoveDataItemRequest,
      dataV2DataItem_universal_d_RemoveDataItemResponse as RemoveDataItemResponse,
      dataV2DataItem_universal_d_TruncateDataItemsRequest as TruncateDataItemsRequest,
      dataV2DataItem_universal_d_TruncateDataItemsResponse as TruncateDataItemsResponse,
      dataV2DataItem_universal_d_QueryDataItemsRequest as QueryDataItemsRequest,
      dataV2DataItem_universal_d_QueryV2 as QueryV2,
      dataV2DataItem_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      dataV2DataItem_universal_d_Sorting as Sorting,
      dataV2DataItem_universal_d_SortOrder as SortOrder,
      dataV2DataItem_universal_d_Paging as Paging,
      dataV2DataItem_universal_d_CursorPaging as CursorPaging,
      dataV2DataItem_universal_d_QueryDataItemsResponse as QueryDataItemsResponse,
      dataV2DataItem_universal_d_PagingMetadataV2 as PagingMetadataV2,
      dataV2DataItem_universal_d_Cursors as Cursors,
      dataV2DataItem_universal_d_AggregateDataItemsRequest as AggregateDataItemsRequest,
      dataV2DataItem_universal_d_AggregateDataItemsRequestPagingMethodOneOf as AggregateDataItemsRequestPagingMethodOneOf,
      dataV2DataItem_universal_d_Average as Average,
      dataV2DataItem_universal_d_Min as Min,
      dataV2DataItem_universal_d_Max as Max,
      dataV2DataItem_universal_d_Sum as Sum,
      dataV2DataItem_universal_d_Count as Count,
      dataV2DataItem_universal_d_Operation as Operation,
      dataV2DataItem_universal_d_OperationCalculateOneOf as OperationCalculateOneOf,
      dataV2DataItem_universal_d_Aggregation as Aggregation,
      dataV2DataItem_universal_d_AggregateDataItemsResponse as AggregateDataItemsResponse,
      dataV2DataItem_universal_d_CountDataItemsRequest as CountDataItemsRequest,
      dataV2DataItem_universal_d_CountDataItemsResponse as CountDataItemsResponse,
      dataV2DataItem_universal_d_QueryDistinctValuesRequest as QueryDistinctValuesRequest,
      dataV2DataItem_universal_d_QueryDistinctValuesRequestPagingMethodOneOf as QueryDistinctValuesRequestPagingMethodOneOf,
      dataV2DataItem_universal_d_QueryDistinctValuesResponse as QueryDistinctValuesResponse,
      dataV2DataItem_universal_d_BulkInsertDataItemsRequest as BulkInsertDataItemsRequest,
      dataV2DataItem_universal_d_BulkInsertDataItemsResponse as BulkInsertDataItemsResponse,
      dataV2DataItem_universal_d_BulkDataItemResult as BulkDataItemResult,
      dataV2DataItem_universal_d_BulkActionType as BulkActionType,
      dataV2DataItem_universal_d_ItemMetadata as ItemMetadata,
      dataV2DataItem_universal_d_ApplicationError as ApplicationError,
      dataV2DataItem_universal_d_BulkActionMetadata as BulkActionMetadata,
      dataV2DataItem_universal_d_BulkUpdateDataItemsRequest as BulkUpdateDataItemsRequest,
      dataV2DataItem_universal_d_BulkUpdateDataItemsResponse as BulkUpdateDataItemsResponse,
      dataV2DataItem_universal_d_BulkSaveDataItemsRequest as BulkSaveDataItemsRequest,
      dataV2DataItem_universal_d_BulkSaveDataItemsResponse as BulkSaveDataItemsResponse,
      dataV2DataItem_universal_d_BulkRemoveDataItemsRequest as BulkRemoveDataItemsRequest,
      dataV2DataItem_universal_d_BulkRemoveDataItemsResponse as BulkRemoveDataItemsResponse,
      dataV2DataItem_universal_d_QueryReferencedDataItemsRequest as QueryReferencedDataItemsRequest,
      dataV2DataItem_universal_d_QueryReferencedDataItemsRequestPagingMethodOneOf as QueryReferencedDataItemsRequestPagingMethodOneOf,
      dataV2DataItem_universal_d_QueryReferencedDataItemsResponse as QueryReferencedDataItemsResponse,
      dataV2DataItem_universal_d_UnresolvedReference as UnresolvedReference,
      dataV2DataItem_universal_d_ReferencedResult as ReferencedResult,
      dataV2DataItem_universal_d_ReferencedResultEntityOneOf as ReferencedResultEntityOneOf,
      dataV2DataItem_universal_d_IsReferencedDataItemRequest as IsReferencedDataItemRequest,
      dataV2DataItem_universal_d_IsReferencedDataItemResponse as IsReferencedDataItemResponse,
      dataV2DataItem_universal_d_InsertDataItemReferenceRequest as InsertDataItemReferenceRequest,
      dataV2DataItem_universal_d_DataItemReference as DataItemReference,
      dataV2DataItem_universal_d_InsertDataItemReferenceResponse as InsertDataItemReferenceResponse,
      dataV2DataItem_universal_d_RemoveDataItemReferenceRequest as RemoveDataItemReferenceRequest,
      dataV2DataItem_universal_d_RemoveDataItemReferenceResponse as RemoveDataItemReferenceResponse,
      dataV2DataItem_universal_d_BulkInsertDataItemReferencesRequest as BulkInsertDataItemReferencesRequest,
      dataV2DataItem_universal_d_BulkInsertDataItemReferencesResponse as BulkInsertDataItemReferencesResponse,
      dataV2DataItem_universal_d_BulkDataItemReferenceResult as BulkDataItemReferenceResult,
      dataV2DataItem_universal_d_BulkRemoveDataItemReferencesRequest as BulkRemoveDataItemReferencesRequest,
      dataV2DataItem_universal_d_BulkRemoveDataItemReferencesResponse as BulkRemoveDataItemReferencesResponse,
      dataV2DataItem_universal_d_ReplaceDataItemReferencesRequest as ReplaceDataItemReferencesRequest,
      dataV2DataItem_universal_d_ReplaceDataItemReferencesResponse as ReplaceDataItemReferencesResponse,
      dataV2DataItem_universal_d_insertDataItem as insertDataItem,
      dataV2DataItem_universal_d_InsertDataItemOptions as InsertDataItemOptions,
      dataV2DataItem_universal_d_updateDataItem as updateDataItem,
      dataV2DataItem_universal_d_UpdateDataItemOptions as UpdateDataItemOptions,
      dataV2DataItem_universal_d_saveDataItem as saveDataItem,
      dataV2DataItem_universal_d_SaveDataItemOptions as SaveDataItemOptions,
      dataV2DataItem_universal_d_getDataItem as getDataItem,
      dataV2DataItem_universal_d_GetDataItemOptions as GetDataItemOptions,
      dataV2DataItem_universal_d_removeDataItem as removeDataItem,
      dataV2DataItem_universal_d_RemoveDataItemOptions as RemoveDataItemOptions,
      dataV2DataItem_universal_d_truncateDataItems as truncateDataItems,
      dataV2DataItem_universal_d_TruncateDataItemsOptions as TruncateDataItemsOptions,
      dataV2DataItem_universal_d_queryDataItems as queryDataItems,
      dataV2DataItem_universal_d_QueryDataItemsOptions as QueryDataItemsOptions,
      dataV2DataItem_universal_d_DataItemsQueryResult as DataItemsQueryResult,
      dataV2DataItem_universal_d_DataItemsQueryBuilder as DataItemsQueryBuilder,
      dataV2DataItem_universal_d_aggregateDataItems as aggregateDataItems,
      dataV2DataItem_universal_d_AggregateDataItemsOptions as AggregateDataItemsOptions,
      dataV2DataItem_universal_d_countDataItems as countDataItems,
      dataV2DataItem_universal_d_CountDataItemsOptions as CountDataItemsOptions,
      dataV2DataItem_universal_d_queryDistinctValues as queryDistinctValues,
      dataV2DataItem_universal_d_QueryDistinctValuesOptions as QueryDistinctValuesOptions,
      dataV2DataItem_universal_d_bulkInsertDataItems as bulkInsertDataItems,
      dataV2DataItem_universal_d_BulkInsertDataItemsOptions as BulkInsertDataItemsOptions,
      dataV2DataItem_universal_d_bulkUpdateDataItems as bulkUpdateDataItems,
      dataV2DataItem_universal_d_BulkUpdateDataItemsOptions as BulkUpdateDataItemsOptions,
      dataV2DataItem_universal_d_bulkSaveDataItems as bulkSaveDataItems,
      dataV2DataItem_universal_d_BulkSaveDataItemsOptions as BulkSaveDataItemsOptions,
      dataV2DataItem_universal_d_bulkRemoveDataItems as bulkRemoveDataItems,
      dataV2DataItem_universal_d_BulkRemoveDataItemsOptions as BulkRemoveDataItemsOptions,
      dataV2DataItem_universal_d_queryReferencedDataItems as queryReferencedDataItems,
      dataV2DataItem_universal_d_QueryReferencedDataItemsOptions as QueryReferencedDataItemsOptions,
      dataV2DataItem_universal_d_isReferencedDataItem as isReferencedDataItem,
      dataV2DataItem_universal_d_IsReferencedDataItemOptions as IsReferencedDataItemOptions,
      dataV2DataItem_universal_d_insertDataItemReference as insertDataItemReference,
      dataV2DataItem_universal_d_InsertDataItemReferenceOptions as InsertDataItemReferenceOptions,
      dataV2DataItem_universal_d_removeDataItemReference as removeDataItemReference,
      dataV2DataItem_universal_d_RemoveDataItemReferenceOptions as RemoveDataItemReferenceOptions,
      dataV2DataItem_universal_d_bulkInsertDataItemReferences as bulkInsertDataItemReferences,
      dataV2DataItem_universal_d_BulkInsertDataItemReferencesOptions as BulkInsertDataItemReferencesOptions,
      dataV2DataItem_universal_d_bulkRemoveDataItemReferences as bulkRemoveDataItemReferences,
      dataV2DataItem_universal_d_BulkRemoveDataItemReferencesOptions as BulkRemoveDataItemReferencesOptions,
      dataV2DataItem_universal_d_replaceDataItemReferences as replaceDataItemReferences,
      dataV2DataItem_universal_d_ReplaceDataItemReferencesOptions as ReplaceDataItemReferencesOptions,
    };
  }
  
  export { dataV2DataItem_universal_d as dataItems };
}
