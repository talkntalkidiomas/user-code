declare module "wix-data-indexes" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** An index is a map of a collection's data, organized according to specific fields to increase query speed. */
  interface Index {
      /** Name of the index. */
      name?: string;
      /**
       * Fields for which the index is defined.
       *
       * Max: 3 fields (for a unique index: 1 field)
       */
      fields?: Field[];
      /**
       * Current status of the index.
       * - `BUILDING`: Index creation is in progress.
       * - `ACTIVE`: Index has been successfully created and can be used in queries.
       * - `DROPPING`: Index is in the process of being dropped.
       * - `DROPPED`: Index has been dropped successfully.
       * - `FAILED`: Index creation has failed.
       * - `INVALID`: Index contains incorrectly indexed data.
       * @readonly
       */
      status?: Status;
      /**
       * Contains details about the reasons for failure when `status` is `FAILED`.
       * @readonly
       */
      failure?: Failure;
      /**
       * Whether the index enforces uniqueness of values in the field for which it is defined.
       * If `true`, the index can have only one field.
       *
       * Default: `false`
       */
      unique?: boolean;
      /**
       * Whether the index ignores case.
       *
       * Default: `false`
       */
      caseInsensitive?: boolean;
  }
  /**
   * Order determines how values are ordered in the index. This is important when
   * ordering and/or range querying by indexed fields.
   */
  enum Order {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Field {
      /** Path of the field to index. For example: `title` or `options.price`. */
      path?: string;
      /**
       * Sort order for the index. Base on how the data is regularly queried.
       *
       * Default: `ASC`
       */
      order?: Order;
  }
  enum Status {
      /** Place holder. Never returned by the service. */
      UNKNOWN = "UNKNOWN",
      /** Index creation is in progress. */
      BUILDING = "BUILDING",
      /** Index has been successfully created and can be used in queries. */
      ACTIVE = "ACTIVE",
      /** Index is in the process of being dropped. */
      DROPPING = "DROPPING",
      /** Index has been dropped successfully. */
      DROPPED = "DROPPED",
      /** Index creation has failed. */
      FAILED = "FAILED",
      /** Index contains incorrectly indexed data. */
      INVALID = "INVALID"
  }
  interface Failure {
      /**
       * Error code.
       * - `WDE0112`: Unknown error while building collection index.
       * - `WDE0113`: Duplicate key error while building collection index.
       * - `WDE0114`: Document too large while building collection index.
       */
      code?: string;
      /**
       * Broad error code.
       * - `WD_UNKNOWN_ERROR`: Unknown error.
       * @internal
       */
      broadCode?: string;
      /** Description of the failure. */
      description?: string;
      /**
       * ID of the data item that caused the failure.
       * For example, if `unique` is `true`, the ID of an item containing a duplicate value.
       */
      itemId?: string | null;
  }
  interface CreateIndexRequest {
      /**
       * DEPRECATED. Use data_collection_id
       * @internal
       */
      collectionName?: string;
      /**
       * Environment on which to define the index. Default value is LIVE.
       * @internal
       */
      environment?: Environment;
      /** Details of the index to be created. */
      index: Index;
      /** ID of the [data collection](https://dev.wix.com/api/rest/wix-data/wix-data/data-collections) for which to generate the index. */
      dataCollectionId?: string;
  }
  enum Environment {
      LIVE = "LIVE",
      SANDBOX = "SANDBOX"
  }
  interface CreateIndexResponse {
      /** Details of the index being generated. */
      index?: Index;
  }
  interface DropIndexRequest {
      /**
       * DEPRECATED. Use data_collection_id
       * @internal
       */
      collectionName?: string;
      /**
       * Environment on which the index is defined. Default value is LIVE.
       * @internal
       */
      environment?: Environment;
      /** Name of the index to drop. */
      indexName: string;
      /** ID of the [data collection](https://dev.wix.com/api/rest/wix-data/wix-data/data-collections) for which the index to be dropped is defined. */
      dataCollectionId?: string;
  }
  interface DropIndexResponse {
  }
  interface ListIndexesRequest {
      /**
       * DEPRECATED. Use data_collection_id
       * @internal
       */
      collectionName?: string;
      /**
       * Environment to list indexes for
       * @internal
       */
      environment?: Environment;
      /**
       * slower read but consistent with recent updates
       * @internal
       */
      consistentRead?: boolean;
      /** ID of the [data collection](https://dev.wix.com/api/rest/wix-data/wix-data/data-collections) for which to list indexes. */
      dataCollectionId?: string;
  }
  interface ListIndexesResponse {
      /** List of all indexes for the requested data collection. */
      indexes?: Index[];
  }
  /**
   * Creates an index for a data collection.
   *
   * The index can't be used immediately, as the process of generating the index takes time.
   * You can check whether your index is ready using the [List Indexes](https://dev.wix.com/api/rest/wix-data/wix-data/indexes/list-indexes) endpoint.
   *
   * Note that when an index fails to create, the failed index still occupies a slot.
   * To remove the failed index and free up the slot for a new index, use the Drop Index endpoint.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.index
   * @requiredField options.index.fields
   * @requiredField options.index.fields.path
   * @requiredField options.index.name
   */
  function createIndex(options: CreateIndexOptions): Promise<CreateIndexResponse>;
  interface CreateIndexOptions {
      /**
       * DEPRECATED. Use data_collection_id
       * @internal
       */
      collectionName?: string;
      /**
       * Environment on which to define the index. Default value is LIVE.
       * @internal
       */
      environment?: Environment;
      /** Details of the index to be created. */
      index: Index;
      /** ID of the [data collection](https://dev.wix.com/api/rest/wix-data/wix-data/data-collections) for which to generate the index. */
      dataCollectionId?: string;
  }
  /**
   * Removes an index from a data collection.
   *
   * The process of dropping an index from a collection takes time.
   * You can check whether your index has been dropped by using the [List Indexes](https://dev.wix.com/api/rest/wix-data/wix-data/indexes/list-indexes) endpoint.
   * @public
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.indexName
   */
  function dropIndex(options: DropIndexOptions): Promise<void>;
  interface DropIndexOptions {
      /**
       * DEPRECATED. Use data_collection_id
       * @internal
       */
      collectionName?: string;
      /**
       * Environment on which the index is defined. Default value is LIVE.
       * @internal
       */
      environment?: Environment;
      /** Name of the index to drop. */
      indexName: string;
      /** ID of the [data collection](https://dev.wix.com/api/rest/wix-data/wix-data/data-collections) for which the index to be dropped is defined. */
      dataCollectionId?: string;
  }
  /**
   * Lists all indexes defined for a data collection.
   *
   * When an index's status is `ACTIVE`, it is ready to use.
   * While it is still being created, its status is `BUILDING`.
   *
   * When an index's status is `DROPPED`, it has been dropped successfully.
   * While it is still in the process of being removed, its status is `DROPPING`.
   * @public
   * @documentationMaturity preview
   */
  function listIndexes(options?: ListIndexesOptions): Promise<ListIndexesResponse>;
  interface ListIndexesOptions {
      /**
       * DEPRECATED. Use data_collection_id
       * @internal
       */
      collectionName?: string;
      /**
       * Environment to list indexes for
       * @internal
       */
      environment?: Environment;
      /**
       * slower read but consistent with recent updates
       * @internal
       */
      consistentRead?: boolean;
      /** ID of the [data collection](https://dev.wix.com/api/rest/wix-data/wix-data/data-collections) for which to list indexes. */
      dataCollectionId?: string;
  }
  
  const dataV2Index_universal_d___debug: typeof __debug;
  type dataV2Index_universal_d_Index = Index;
  type dataV2Index_universal_d_Order = Order;
  const dataV2Index_universal_d_Order: typeof Order;
  type dataV2Index_universal_d_Field = Field;
  type dataV2Index_universal_d_Status = Status;
  const dataV2Index_universal_d_Status: typeof Status;
  type dataV2Index_universal_d_Failure = Failure;
  type dataV2Index_universal_d_CreateIndexRequest = CreateIndexRequest;
  type dataV2Index_universal_d_Environment = Environment;
  const dataV2Index_universal_d_Environment: typeof Environment;
  type dataV2Index_universal_d_CreateIndexResponse = CreateIndexResponse;
  type dataV2Index_universal_d_DropIndexRequest = DropIndexRequest;
  type dataV2Index_universal_d_DropIndexResponse = DropIndexResponse;
  type dataV2Index_universal_d_ListIndexesRequest = ListIndexesRequest;
  type dataV2Index_universal_d_ListIndexesResponse = ListIndexesResponse;
  const dataV2Index_universal_d_createIndex: typeof createIndex;
  type dataV2Index_universal_d_CreateIndexOptions = CreateIndexOptions;
  const dataV2Index_universal_d_dropIndex: typeof dropIndex;
  type dataV2Index_universal_d_DropIndexOptions = DropIndexOptions;
  const dataV2Index_universal_d_listIndexes: typeof listIndexes;
  type dataV2Index_universal_d_ListIndexesOptions = ListIndexesOptions;
  namespace dataV2Index_universal_d {
    export {
      dataV2Index_universal_d___debug as __debug,
      dataV2Index_universal_d_Index as Index,
      dataV2Index_universal_d_Order as Order,
      dataV2Index_universal_d_Field as Field,
      dataV2Index_universal_d_Status as Status,
      dataV2Index_universal_d_Failure as Failure,
      dataV2Index_universal_d_CreateIndexRequest as CreateIndexRequest,
      dataV2Index_universal_d_Environment as Environment,
      dataV2Index_universal_d_CreateIndexResponse as CreateIndexResponse,
      dataV2Index_universal_d_DropIndexRequest as DropIndexRequest,
      dataV2Index_universal_d_DropIndexResponse as DropIndexResponse,
      dataV2Index_universal_d_ListIndexesRequest as ListIndexesRequest,
      dataV2Index_universal_d_ListIndexesResponse as ListIndexesResponse,
      dataV2Index_universal_d_createIndex as createIndex,
      dataV2Index_universal_d_CreateIndexOptions as CreateIndexOptions,
      dataV2Index_universal_d_dropIndex as dropIndex,
      dataV2Index_universal_d_DropIndexOptions as DropIndexOptions,
      dataV2Index_universal_d_listIndexes as listIndexes,
      dataV2Index_universal_d_ListIndexesOptions as ListIndexesOptions,
    };
  }
  
  export { dataV2Index_universal_d as dataIndexes };
}
