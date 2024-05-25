declare module "wix-data-collection-service-v2" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** A data collection determines the structure of data to be stored in a database. */
  interface DataCollection {
      /** Collection ID. For example, `my-first-collection`. May include a namespace. */
      _id?: string;
      /**
       * Collection type. Indicates how the collection was created and is stored.
       *
       * * `NATIVE`: User-created collection.
       * * `WIX_APP`: [Collection](https://support.wix.com/en/article/velo-working-with-wix-app-collections-and-code#what-are-wix-app-collections) created by a Wix app, including [starter collections](https://support.wix.com/en/article/velo-working-with-wix-app-collections-and-code#what-are-wix-app-starter-collections) created when a Wix app is installed.
       * * `BLOCKS_APP`: Collection created by a Wix Blocks app.
       * * `EXTERNAL`: Collection located in externally connected storage.
       * @readonly
       */
      collectionType?: CollectionType;
      /**
       * ID of the app that defined this collection. For user-defined collections, this value is null.
       * @readonly
       */
      ownerAppId?: string | null;
      /**
       * Maximum number of items returned in a single query, based on the underlying storage.
       * Native collections have a maximum page size of 1000 for offset-based queries or 100 for cursor-based queries.
       * External collections' maximum page size defaults to 50, but an external provider can set any maximum value up to 1000.
       * @readonly
       */
      maxPageSize?: number | null;
      /** Collection's display name as shown in the Content Manager. For example, `My First Collection`. */
      displayName?: string | null;
      /**
       * Indicates how the collection's items are sorted by default when a query doesn't specify an order.
       * @readonly
       */
      defaultDisplayOrder?: Sort;
      /**
       * UI-friendly namespace of the Wix app with which the data collection is associated, such as Stores or Bookings.
       * Empty for all data collections not owned by internal Wix apps.
       */
      displayNamespace?: string | null;
      /**
       * The field whose value the Content Manager displays to represent the collection item when referenced in a different collection.
       * @readonly
       */
      displayField?: string;
      /**
       * Capabilities the collection supports.
       * @readonly
       */
      capabilities?: CollectionCapabilities;
      /** Collection's field structure. A collection must have at least 1 field. */
      fields?: Field[];
      /** Levels of permission for accessing and modifying data, defined by lowest role needed to perform each action. */
      permissions?: Permissions;
      /**
       * Collection's current revision number, which increments each time the collection is updated. For an update operation to succeed, you must pass the latest revision number.
       * @readonly
       */
      revision?: string | null;
      /** All plugins the collection uses. Plugins apply additional capabilities to the collection or extend its functionality. */
      plugins?: Plugin[];
      /**
       * All paging modes the collection supports. In native collections, offset-based paging is supported by default.
       * @readonly
       */
      pagingModes?: PagingMode[];
      /**
       * Date the collection was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date the collection was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  enum CollectionType {
      /** User-created collection. */
      NATIVE = "NATIVE",
      /** [Collection](https://support.wix.com/en/article/velo-working-with-wix-app-collections-and-code#what-are-wix-app-collections) created by a Wix app when it is installed. This type of collection can be modified dynamically by that app (for example, Wix Forms). */
      WIX_APP = "WIX_APP",
      /** Collection created by a Wix Blocks app. */
      BLOCKS_APP = "BLOCKS_APP",
      /** Collection located in externally connected storage. */
      EXTERNAL = "EXTERNAL"
  }
  interface Sort {
      /** Field to sort by. */
      fieldKey?: string;
      /**
       * Sort order. Use `ASC` for ascending order or `DESC` for descending order.
       *
       * Default: `ASC`
       */
      direction?: Direction;
  }
  enum Direction {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface CollectionCapabilities {
      /** Data operations the collection supports. */
      dataOperations?: DataOperation[];
  }
  enum DataOperation {
      AGGREGATE = "AGGREGATE",
      BULK_INSERT = "BULK_INSERT",
      BULK_REMOVE = "BULK_REMOVE",
      BULK_SAVE = "BULK_SAVE",
      BULK_UPDATE = "BULK_UPDATE",
      COUNT = "COUNT",
      DISTINCT = "DISTINCT",
      FIND = "FIND",
      GET = "GET",
      INSERT = "INSERT",
      INSERT_REFERENCE = "INSERT_REFERENCE",
      IS_REFERENCED = "IS_REFERENCED",
      QUERY_REFERENCED = "QUERY_REFERENCED",
      REMOVE = "REMOVE",
      REMOVE_REFERENCE = "REMOVE_REFERENCE",
      REPLACE_REFERENCES = "REPLACE_REFERENCES",
      SAVE = "SAVE",
      TRUNCATE = "TRUNCATE",
      UPDATE = "UPDATE"
  }
  interface Field extends FieldRangeValidationsOneOf {
      /** Range of possible values for a numerical field. */
      numberRange?: NumberRange;
      /** Length range permitted for a text field. Relevant for fields that hold strings, such as those of type `TEXT` or `RICH_TEXT`. */
      stringLengthRange?: StringLengthRange;
      /** Array size range permitted. Relevant for fields that hold arrays, such as those of type `ARRAY`, `ARRAY_STRING`, or `ARRAY_DOCUMENT`. */
      arraySizeRange?: ArraySizeRange;
      /** Unique identifier for the field. For example, `firstName`. */
      key?: string;
      /** Field's display name when shown in the Content Manager. For example, `First Name`. */
      displayName?: string;
      /** Field's data type. */
      type?: TypeEnum;
      /** Metadata for complex data types. This property only exists for references, multi-references, objects, and arrays. */
      typeMetadata?: TypeMetadata;
      /**
       * Whether the field is a system field (created automatically).
       * @readonly
       */
      systemField?: boolean;
      /** Capabilities the field supports. */
      capabilities?: FieldCapabilities;
      /** Indicates if field is encrypted. */
      encrypted?: boolean;
      /** Defines reference to router pattern in the site document. */
      linkedRouterPage?: string | null;
      /** Description of the field. */
      description?: string | null;
      plugin?: string | null;
      /**
       * Whether the field is read-only. A read-only field can't be changed.
       *
       * Default: `false`
       */
      readOnly?: boolean | null;
      /**
       * Whether the field is immutable. An immutable field can be set once, but then cannot be updated.
       *
       * Default: `false`
       */
      immutable?: boolean | null;
      /**
       * Whether the field is required.
       *
       * Default: `false`
       */
      required?: boolean | null;
  }
  /** @oneof */
  interface FieldRangeValidationsOneOf {
      /** Range of possible values for a numerical field. */
      numberRange?: NumberRange;
      /** Length range permitted for a text field. Relevant for fields that hold strings, such as those of type `TEXT` or `RICH_TEXT`. */
      stringLengthRange?: StringLengthRange;
      /** Array size range permitted. Relevant for fields that hold arrays, such as those of type `ARRAY`, `ARRAY_STRING`, or `ARRAY_DOCUMENT`. */
      arraySizeRange?: ArraySizeRange;
  }
  enum TypeEnum {
      TEXT = "TEXT",
      NUMBER = "NUMBER",
      DATE = "DATE",
      DATETIME = "DATETIME",
      IMAGE = "IMAGE",
      BOOLEAN = "BOOLEAN",
      DOCUMENT = "DOCUMENT",
      URL = "URL",
      RICH_TEXT = "RICH_TEXT",
      VIDEO = "VIDEO",
      ANY = "ANY",
      ARRAY_STRING = "ARRAY_STRING",
      ARRAY_DOCUMENT = "ARRAY_DOCUMENT",
      AUDIO = "AUDIO",
      TIME = "TIME",
      LANGUAGE = "LANGUAGE",
      RICH_CONTENT = "RICH_CONTENT",
      MEDIA_GALLERY = "MEDIA_GALLERY",
      ADDRESS = "ADDRESS",
      PAGE_LINK = "PAGE_LINK",
      REFERENCE = "REFERENCE",
      MULTI_REFERENCE = "MULTI_REFERENCE",
      OBJECT = "OBJECT",
      ARRAY = "ARRAY",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_TIME = "LEGACY_TIME",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_BOOK = "LEGACY_BOOK",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_EXTERNAL_URL = "LEGACY_EXTERNAL_URL",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_BROKEN_REFERENCE = "LEGACY_BROKEN_REFERENCE",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_IMAGE = "LEGACY_IMAGE",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_COLOR = "LEGACY_COLOR",
      /** Deprecated - can’t be added to collections. Can only appear in older collections. */
      LEGACY_EXTERNAL_VIDEO = "LEGACY_EXTERNAL_VIDEO"
  }
  interface TypeMetadata extends TypeMetadataMetadataOneOf {
      /** Metadata for a reference field. */
      reference?: Reference;
      /** Metadata for a multi-reference field. */
      multiReference?: MultiReference;
      /** Metadata for an object field. */
      object?: Object$1;
      /** Metadata for an array field. */
      array?: Array;
      /** Metadata for a page link field. */
      pageLink?: PageLink;
  }
  /** @oneof */
  interface TypeMetadataMetadataOneOf {
      /** Metadata for a reference field. */
      reference?: Reference;
      /** Metadata for a multi-reference field. */
      multiReference?: MultiReference;
      /** Metadata for an object field. */
      object?: Object$1;
      /** Metadata for an array field. */
      array?: Array;
      /** Metadata for a page link field. */
      pageLink?: PageLink;
  }
  interface FieldCapabilities {
      /**
       * Whether the collection can be sorted by this field.
       *
       * Default: `false`
       */
      sortable?: boolean;
      /** Query operators that can be used for this field. */
      queryOperators?: QueryOperator[];
  }
  enum QueryOperator {
      EQ = "EQ",
      LT = "LT",
      GT = "GT",
      NE = "NE",
      LTE = "LTE",
      GTE = "GTE",
      STARTS_WITH = "STARTS_WITH",
      ENDS_WITH = "ENDS_WITH",
      CONTAINS = "CONTAINS",
      HAS_SOME = "HAS_SOME",
      HAS_ALL = "HAS_ALL",
      EXISTS = "EXISTS",
      URLIZED = "URLIZED"
  }
  interface ObjectField {
      /** Field key. */
      key?: string;
      /** Display name for the field. */
      displayName?: string;
      /** Field type. */
      type?: TypeEnum;
      /** Metadata for complex data types. This property only exists for references, multi-references, objects, and arrays. */
      typeMetadata?: TypeMetadata;
      /** Capabilities the object field supports. */
      capabilities?: FieldCapabilities;
  }
  interface FieldsPattern {
      pattern?: string;
      lowercase?: boolean;
  }
  interface UrlizedOnlyPattern {
      pattern?: string;
  }
  interface Calculator extends CalculatorPatternOneOf {
      /** Value is calculated according to pattern, whitespaces are replaced with dash [-]. */
      fieldsPattern?: FieldsPattern;
      /** Value is only URL encoded. */
      urlizedOnlyPattern?: UrlizedOnlyPattern;
      _id?: string;
  }
  /** @oneof */
  interface CalculatorPatternOneOf {
      /** Value is calculated according to pattern, whitespaces are replaced with dash [-]. */
      fieldsPattern?: FieldsPattern;
      /** Value is only URL encoded. */
      urlizedOnlyPattern?: UrlizedOnlyPattern;
  }
  interface Reference {
      /** Referenced collection ID. */
      referencedCollectionId?: string;
  }
  interface MultiReference {
      /** Referenced collection ID. */
      referencedCollectionId?: string;
      /** Referencing field key. */
      referencingFieldKey?: string;
      /** Display name in the Content Manager for the referenced data. */
      referencingDisplayName?: string;
  }
  interface Object$1 {
      /** Fields within the object. */
      fields?: ObjectField[];
  }
  interface Array {
      /** Element's data type. */
      elementType?: TypeEnum;
      /** Metadata for complex data types. This property only exists for references, multi-references, objects, and arrays. */
      typeMetadata?: TypeMetadata;
  }
  interface PageLink {
      calculator?: Calculator;
  }
  interface NumberRange {
      /**
       * Minimum permitted value for a numerical field.
       *
       * Default: No validation
       */
      min?: number | null;
      /**
       * Maximum permitted value for a numerical field.
       *
       * Default: No validation
       */
      max?: number | null;
  }
  interface StringLengthRange {
      /**
       * Minimum permitted length for a text field.
       *
       * Default: No validation
       */
      minLength?: number | null;
      /**
       * Maximum permitted length for a text field.
       *
       * Default: No validation
       */
      maxLength?: number | null;
  }
  interface ArraySizeRange {
      /**
       * Minimum permitted number of items in an array field. Relevant for fields that hold arrays, such as those of type `ARRAY`, `ARRAY_STRING`, or `ARRAY_DOCUMENT`.
       *
       * Default: No validation
       */
      minSize?: number | null;
      /**
       * Maximum permitted number of items in an array field. Relevant for fields that hold arrays, such as those of type `ARRAY`, `ARRAY_STRING`, or `ARRAY_DOCUMENT`.
       *
       * Default: No validation
       */
      maxSize?: number | null;
  }
  /** Permissions defined by the lowest role needed to perform each action. */
  interface Permissions {
      /** Lowest role needed to add a collection. */
      insert?: Role;
      /** Lowest role needed to update a collection. */
      update?: Role;
      /** Lowest role needed to remove a collection. */
      remove?: Role;
      /** Lowest role needed to read a collection. */
      read?: Role;
  }
  enum Role {
      /** Site administrator. */
      ADMIN = "ADMIN",
      /** Signed-in user who added content to this collection. */
      SITE_MEMBER_AUTHOR = "SITE_MEMBER_AUTHOR",
      /** Any signed-in user. */
      SITE_MEMBER = "SITE_MEMBER",
      /** Any site visitor. */
      ANYONE = "ANYONE"
  }
  interface Plugin extends PluginOptionsOneOf {
      /** Options for the Publish plugin. */
      publishOptions?: PublishPluginOptions;
      /** Options for the Single Item plugin. */
      singleItemOptions?: SingleItemPluginOptions;
      /** Options for the Urlized plugin. */
      urlizedOptions?: UrlizedPluginOptions;
      /** Options for Gridappless plugin. */
      gridapplessOptions?: GridapplessPluginOptions;
      /**
       * Plugin types. The following plugins are supported:
       *
       * * `PUBLISH`: Allows items to be marked as either draft or published. For each item you can set a publishing time when the item will become visible to site visitors.
       * * `SINGLE_ITEM`: Ensures the collection can have one item at most. Can only be applied to a new collection.
       * * `URLIZED`: Generates item URLs for collections used by dynamic pages.
       * * `GRIDAPPLESS`: This plugin is read-only and can't be manually added. Indicates the collection structure is shared between sandbox and live environments.
       */
      type?: Type;
  }
  /** @oneof */
  interface PluginOptionsOneOf {
      /** Options for the Publish plugin. */
      publishOptions?: PublishPluginOptions;
      /** Options for the Single Item plugin. */
      singleItemOptions?: SingleItemPluginOptions;
      /** Options for the Urlized plugin. */
      urlizedOptions?: UrlizedPluginOptions;
      /** Options for Gridappless plugin. */
      gridapplessOptions?: GridapplessPluginOptions;
  }
  enum Status {
      PUBLISHED = "PUBLISHED",
      DRAFT = "DRAFT"
  }
  enum Format {
      ORIGINAL = "ORIGINAL",
      PLAIN = "PLAIN"
  }
  enum Type {
      /** Allows items to be marked as either draft or published. For each item you can set a publishing time when the item will become visible to site visitors. */
      PUBLISH = "PUBLISH",
      /** Ensures the collection can have one item at most. Can only be applied to a new collection. */
      SINGLE_ITEM = "SINGLE_ITEM",
      /** Generates item URLs for collections used by dynamic pages. */
      URLIZED = "URLIZED",
      /** This plugin is read-only and can't be manually added. Indicates collection structure is shared between sandbox and live environments. */
      GRIDAPPLESS = "GRIDAPPLESS"
  }
  interface PublishPluginOptions {
      /** Default status. */
      defaultStatus?: Status;
  }
  interface SingleItemPluginOptions {
      /** ID of the single item in this collection. If you insert or update an item, its ID value is always changed to this. */
      singleItemId?: string;
  }
  interface UrlizedPluginOptions {
      /**
       * Encoding method for generating a URL in ASCII characters.
       *
       * * `ORIGINAL`: Letters are converted to lower case and spaces are replaced with dashes before generating the encoded URL.
       * * `PLAIN`: No changes are made before generating the encoded URL.
       */
      format?: Format;
  }
  interface GridapplessPluginOptions {
      /** indicates if tenant is migrated to gridappless or initially on it */
      migrated?: boolean;
  }
  enum PagingMode {
      /** Offset-based paging. */
      OFFSET = "OFFSET",
      /** Cursor-based paging. */
      CURSOR = "CURSOR"
  }
  interface DataCollectionClonedEvent {
      /** original instance collection is cloned from */
      originInstanceId?: string;
      /** original collection ID, may be same as current one */
      originId?: string;
  }
  interface DataCollectionChangedEvent {
      /** list of new fields */
      fieldsAdded?: Field[];
      /** list of changed fields */
      fieldsUpdated?: Field[];
      /** list of removed fields */
      fieldsRemoved?: Field[];
      /** list of new plugins */
      pluginsAdded?: Plugin[];
      /** list of changed plugins */
      pluginsUpdated?: Plugin[];
      /** list of removed plugins */
      pluginsRemoved?: Plugin[];
  }
  interface CreateDataCollectionRequest {
      /** Collection details. */
      collection?: DataCollection;
  }
  interface CreateDataCollectionResponse {
      /** Details of collection created. */
      collection?: DataCollection;
  }
  interface GetDataCollectionRequest {
      /** ID of the collection to retrieve. */
      dataCollectionId: string;
      /**
       * Whether to return all collections referenced by the requested collection.
       *
       * Default: `false`
       */
      includeReferencedCollections?: boolean;
  }
  interface GetDataCollectionResponse {
      /** Details of the collection requested. */
      collection?: DataCollection;
      /**
       * Details of collections referenced by the collection requested.
       * Only populated when `includeReferencedCollections` is `true` in the request.
       */
      referencedCollections?: DataCollection[];
  }
  interface ListDataCollectionsRequest extends ListDataCollectionsRequestPagingMethodOneOf {
      /** Offset-based paging. */
      paging?: Paging;
      /** Cursor-based paging. */
      cursorPaging?: CursorPaging;
      /**
       * Defines how collections in the response are sorted.
       *
       * Default: Ordered by ID in ascending order.
       */
      sort?: Sorting;
  }
  /** @oneof */
  interface ListDataCollectionsRequestPagingMethodOneOf {
      /** Offset-based paging. */
      paging?: Paging;
      /** Cursor-based paging. */
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
  interface ListDataCollectionsResponse {
      /** List of collections. */
      collections?: DataCollection[];
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
  interface BulkGetDataCollectionsRequest {
      /** IDs of the collections to retrieve. */
      dataCollectionIds?: string[];
      /**
       * Whether to include deleted collections.
       *
       * Default: `false`
       */
      showDeletedCollections?: boolean;
      /**
       * Whether the returned collection list should include referenced collections.
       *
       * Default: `false`
       */
      includeReferencedCollections?: boolean;
      /** Sorting preferences. */
      sort?: Sorting;
  }
  interface BulkGetDataCollectionsResponse {
      /**
       * List of requested collections.
       * When `include_referenced_collections` is `true` in the request, referenced collections are included here.
       */
      activeCollections?: DataCollection[];
      /** List of requested deleted collections. Only populated when `showDeletedCollections` is true in the request. */
      deletedCollections?: DataCollection[];
  }
  interface BulkGetDataCollectionsBySnapshotsRequest {
      /** Ids of schema snapshot */
      snapshotIds?: string[];
  }
  interface BulkGetDataCollectionsBySnapshotsResponse {
      /** List of snapshot collection map */
      snapshotCollections?: SnapshotDataCollections[];
  }
  interface SnapshotDataCollections {
      snapshotId?: string;
      collections?: DataCollection[];
  }
  interface UpdateDataCollectionRequest {
      /** Updated collection details. The existing collection is replaced with this version. */
      collection?: DataCollection;
  }
  interface UpdateDataCollectionResponse {
      /** Updated collection details. */
      collection?: DataCollection;
  }
  interface DeleteDataCollectionRequest {
      /** ID of the collection to delete. */
      dataCollectionId: string;
  }
  interface DeleteDataCollectionResponse {
  }
  /**
   * Creates a new data collection.
   *
   * The request body must include an ID, details for at least 1 field, and a permissions object. If any of these are missing, the collection isn't created.
   * @public
   * @documentationMaturity preview
   * @requiredField options.collection._id
   * @requiredField options.collection.fields
   * @requiredField options.collection.permissions
   */
  function createDataCollection(options?: CreateDataCollectionOptions): Promise<CreateDataCollectionResponse>;
  interface CreateDataCollectionOptions {
      /** Collection details. */
      collection?: DataCollection;
  }
  /**
   * Retrieves a data collection by ID.
   * @param dataCollectionId - ID of the collection to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField GetDataCollectionRequest
   * @requiredField dataCollectionId
   */
  function getDataCollection(dataCollectionId: string, options?: GetDataCollectionOptions): Promise<GetDataCollectionResponse>;
  interface GetDataCollectionOptions {
      /**
       * Whether to return all collections referenced by the requested collection.
       *
       * Default: `false`
       */
      includeReferencedCollections?: boolean;
  }
  /**
   * Retrieves a list of all data collections associated with the site.
   *
   * By default, the list is ordered by ID in ascending order.
   * @public
   * @documentationMaturity preview
   */
  function listDataCollections(options?: ListDataCollectionsOptions): Promise<ListDataCollectionsResponse>;
  interface ListDataCollectionsOptions extends ListDataCollectionsRequestPagingMethodOneOf {
      /**
       * Defines how collections in the response are sorted.
       *
       * Default: Ordered by ID in ascending order.
       */
      sort?: Sorting;
      /** Offset-based paging. */
      paging?: Paging;
      /** Cursor-based paging. */
      cursorPaging?: CursorPaging;
  }
  /**
   * Retrieves multiple data collections by ID.
   * Used in frontend databinding to load multiple specific collections at once. For internal use only.
   * @internal
   * @documentationMaturity preview
   */
  function bulkGetDataCollections(options?: BulkGetDataCollectionsOptions): Promise<BulkGetDataCollectionsResponse>;
  interface BulkGetDataCollectionsOptions {
      /** IDs of the collections to retrieve. */
      dataCollectionIds?: string[];
      /**
       * Whether to include deleted collections.
       *
       * Default: `false`
       */
      showDeletedCollections?: boolean;
      /**
       * Whether the returned collection list should include referenced collections.
       *
       * Default: `false`
       */
      includeReferencedCollections?: boolean;
      /** Sorting preferences. */
      sort?: Sorting;
  }
  /**
   * Updates a data collection.
   *
   * A collection ID, revision number, permissions, and at least 1 field must be provided within the `collection` body parameter.
   * If a collection with that ID exists, and if its current `revision` number matches the one provided, it is updated.
   * Otherwise, the request fails.
   *
   * When a collection is updated, its `updatedDate` property is changed to the current date and its `revision` property is incremented.
   *
   * > **Note:**
   * > After a collection is updated, it only contains the properties included in the Update Data Collection request. If the existing collection has properties with values and those properties
   * > aren't included in the updated collection details, their values are lost.
   * @public
   * @documentationMaturity preview
   * @requiredField options.collection._id
   * @requiredField options.collection.fields
   * @requiredField options.collection.permissions
   * @requiredField options.collection.revision
   */
  function updateDataCollection(options?: UpdateDataCollectionOptions): Promise<UpdateDataCollectionResponse>;
  interface UpdateDataCollectionOptions {
      /** Updated collection details. The existing collection is replaced with this version. */
      collection?: DataCollection;
  }
  /**
   * Deletes a data collection.
   *
   * > **Note:**
   * > Once a collection is deleted, it can't be restored.
   * @param dataCollectionId - ID of the collection to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField DeleteDataCollectionRequest
   * @requiredField dataCollectionId
   */
  function deleteDataCollection(dataCollectionId: string): Promise<void>;
  
  const dataV1DataCollection_universal_d___debug: typeof __debug;
  type dataV1DataCollection_universal_d_DataCollection = DataCollection;
  type dataV1DataCollection_universal_d_CollectionType = CollectionType;
  const dataV1DataCollection_universal_d_CollectionType: typeof CollectionType;
  type dataV1DataCollection_universal_d_Sort = Sort;
  type dataV1DataCollection_universal_d_Direction = Direction;
  const dataV1DataCollection_universal_d_Direction: typeof Direction;
  type dataV1DataCollection_universal_d_CollectionCapabilities = CollectionCapabilities;
  type dataV1DataCollection_universal_d_DataOperation = DataOperation;
  const dataV1DataCollection_universal_d_DataOperation: typeof DataOperation;
  type dataV1DataCollection_universal_d_Field = Field;
  type dataV1DataCollection_universal_d_FieldRangeValidationsOneOf = FieldRangeValidationsOneOf;
  type dataV1DataCollection_universal_d_TypeEnum = TypeEnum;
  const dataV1DataCollection_universal_d_TypeEnum: typeof TypeEnum;
  type dataV1DataCollection_universal_d_TypeMetadata = TypeMetadata;
  type dataV1DataCollection_universal_d_TypeMetadataMetadataOneOf = TypeMetadataMetadataOneOf;
  type dataV1DataCollection_universal_d_FieldCapabilities = FieldCapabilities;
  type dataV1DataCollection_universal_d_QueryOperator = QueryOperator;
  const dataV1DataCollection_universal_d_QueryOperator: typeof QueryOperator;
  type dataV1DataCollection_universal_d_ObjectField = ObjectField;
  type dataV1DataCollection_universal_d_FieldsPattern = FieldsPattern;
  type dataV1DataCollection_universal_d_UrlizedOnlyPattern = UrlizedOnlyPattern;
  type dataV1DataCollection_universal_d_Calculator = Calculator;
  type dataV1DataCollection_universal_d_CalculatorPatternOneOf = CalculatorPatternOneOf;
  type dataV1DataCollection_universal_d_Reference = Reference;
  type dataV1DataCollection_universal_d_MultiReference = MultiReference;
  type dataV1DataCollection_universal_d_Array = Array;
  type dataV1DataCollection_universal_d_PageLink = PageLink;
  type dataV1DataCollection_universal_d_NumberRange = NumberRange;
  type dataV1DataCollection_universal_d_StringLengthRange = StringLengthRange;
  type dataV1DataCollection_universal_d_ArraySizeRange = ArraySizeRange;
  type dataV1DataCollection_universal_d_Permissions = Permissions;
  type dataV1DataCollection_universal_d_Role = Role;
  const dataV1DataCollection_universal_d_Role: typeof Role;
  type dataV1DataCollection_universal_d_Plugin = Plugin;
  type dataV1DataCollection_universal_d_PluginOptionsOneOf = PluginOptionsOneOf;
  type dataV1DataCollection_universal_d_Status = Status;
  const dataV1DataCollection_universal_d_Status: typeof Status;
  type dataV1DataCollection_universal_d_Format = Format;
  const dataV1DataCollection_universal_d_Format: typeof Format;
  type dataV1DataCollection_universal_d_Type = Type;
  const dataV1DataCollection_universal_d_Type: typeof Type;
  type dataV1DataCollection_universal_d_PublishPluginOptions = PublishPluginOptions;
  type dataV1DataCollection_universal_d_SingleItemPluginOptions = SingleItemPluginOptions;
  type dataV1DataCollection_universal_d_UrlizedPluginOptions = UrlizedPluginOptions;
  type dataV1DataCollection_universal_d_GridapplessPluginOptions = GridapplessPluginOptions;
  type dataV1DataCollection_universal_d_PagingMode = PagingMode;
  const dataV1DataCollection_universal_d_PagingMode: typeof PagingMode;
  type dataV1DataCollection_universal_d_DataCollectionClonedEvent = DataCollectionClonedEvent;
  type dataV1DataCollection_universal_d_DataCollectionChangedEvent = DataCollectionChangedEvent;
  type dataV1DataCollection_universal_d_CreateDataCollectionRequest = CreateDataCollectionRequest;
  type dataV1DataCollection_universal_d_CreateDataCollectionResponse = CreateDataCollectionResponse;
  type dataV1DataCollection_universal_d_GetDataCollectionRequest = GetDataCollectionRequest;
  type dataV1DataCollection_universal_d_GetDataCollectionResponse = GetDataCollectionResponse;
  type dataV1DataCollection_universal_d_ListDataCollectionsRequest = ListDataCollectionsRequest;
  type dataV1DataCollection_universal_d_ListDataCollectionsRequestPagingMethodOneOf = ListDataCollectionsRequestPagingMethodOneOf;
  type dataV1DataCollection_universal_d_Sorting = Sorting;
  type dataV1DataCollection_universal_d_SortOrder = SortOrder;
  const dataV1DataCollection_universal_d_SortOrder: typeof SortOrder;
  type dataV1DataCollection_universal_d_Paging = Paging;
  type dataV1DataCollection_universal_d_CursorPaging = CursorPaging;
  type dataV1DataCollection_universal_d_ListDataCollectionsResponse = ListDataCollectionsResponse;
  type dataV1DataCollection_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type dataV1DataCollection_universal_d_Cursors = Cursors;
  type dataV1DataCollection_universal_d_BulkGetDataCollectionsRequest = BulkGetDataCollectionsRequest;
  type dataV1DataCollection_universal_d_BulkGetDataCollectionsResponse = BulkGetDataCollectionsResponse;
  type dataV1DataCollection_universal_d_BulkGetDataCollectionsBySnapshotsRequest = BulkGetDataCollectionsBySnapshotsRequest;
  type dataV1DataCollection_universal_d_BulkGetDataCollectionsBySnapshotsResponse = BulkGetDataCollectionsBySnapshotsResponse;
  type dataV1DataCollection_universal_d_SnapshotDataCollections = SnapshotDataCollections;
  type dataV1DataCollection_universal_d_UpdateDataCollectionRequest = UpdateDataCollectionRequest;
  type dataV1DataCollection_universal_d_UpdateDataCollectionResponse = UpdateDataCollectionResponse;
  type dataV1DataCollection_universal_d_DeleteDataCollectionRequest = DeleteDataCollectionRequest;
  type dataV1DataCollection_universal_d_DeleteDataCollectionResponse = DeleteDataCollectionResponse;
  const dataV1DataCollection_universal_d_createDataCollection: typeof createDataCollection;
  type dataV1DataCollection_universal_d_CreateDataCollectionOptions = CreateDataCollectionOptions;
  const dataV1DataCollection_universal_d_getDataCollection: typeof getDataCollection;
  type dataV1DataCollection_universal_d_GetDataCollectionOptions = GetDataCollectionOptions;
  const dataV1DataCollection_universal_d_listDataCollections: typeof listDataCollections;
  type dataV1DataCollection_universal_d_ListDataCollectionsOptions = ListDataCollectionsOptions;
  const dataV1DataCollection_universal_d_bulkGetDataCollections: typeof bulkGetDataCollections;
  type dataV1DataCollection_universal_d_BulkGetDataCollectionsOptions = BulkGetDataCollectionsOptions;
  const dataV1DataCollection_universal_d_updateDataCollection: typeof updateDataCollection;
  type dataV1DataCollection_universal_d_UpdateDataCollectionOptions = UpdateDataCollectionOptions;
  const dataV1DataCollection_universal_d_deleteDataCollection: typeof deleteDataCollection;
  namespace dataV1DataCollection_universal_d {
    export {
      dataV1DataCollection_universal_d___debug as __debug,
      dataV1DataCollection_universal_d_DataCollection as DataCollection,
      dataV1DataCollection_universal_d_CollectionType as CollectionType,
      dataV1DataCollection_universal_d_Sort as Sort,
      dataV1DataCollection_universal_d_Direction as Direction,
      dataV1DataCollection_universal_d_CollectionCapabilities as CollectionCapabilities,
      dataV1DataCollection_universal_d_DataOperation as DataOperation,
      dataV1DataCollection_universal_d_Field as Field,
      dataV1DataCollection_universal_d_FieldRangeValidationsOneOf as FieldRangeValidationsOneOf,
      dataV1DataCollection_universal_d_TypeEnum as TypeEnum,
      dataV1DataCollection_universal_d_TypeMetadata as TypeMetadata,
      dataV1DataCollection_universal_d_TypeMetadataMetadataOneOf as TypeMetadataMetadataOneOf,
      dataV1DataCollection_universal_d_FieldCapabilities as FieldCapabilities,
      dataV1DataCollection_universal_d_QueryOperator as QueryOperator,
      dataV1DataCollection_universal_d_ObjectField as ObjectField,
      dataV1DataCollection_universal_d_FieldsPattern as FieldsPattern,
      dataV1DataCollection_universal_d_UrlizedOnlyPattern as UrlizedOnlyPattern,
      dataV1DataCollection_universal_d_Calculator as Calculator,
      dataV1DataCollection_universal_d_CalculatorPatternOneOf as CalculatorPatternOneOf,
      dataV1DataCollection_universal_d_Reference as Reference,
      dataV1DataCollection_universal_d_MultiReference as MultiReference,
      Object$1 as Object,
      dataV1DataCollection_universal_d_Array as Array,
      dataV1DataCollection_universal_d_PageLink as PageLink,
      dataV1DataCollection_universal_d_NumberRange as NumberRange,
      dataV1DataCollection_universal_d_StringLengthRange as StringLengthRange,
      dataV1DataCollection_universal_d_ArraySizeRange as ArraySizeRange,
      dataV1DataCollection_universal_d_Permissions as Permissions,
      dataV1DataCollection_universal_d_Role as Role,
      dataV1DataCollection_universal_d_Plugin as Plugin,
      dataV1DataCollection_universal_d_PluginOptionsOneOf as PluginOptionsOneOf,
      dataV1DataCollection_universal_d_Status as Status,
      dataV1DataCollection_universal_d_Format as Format,
      dataV1DataCollection_universal_d_Type as Type,
      dataV1DataCollection_universal_d_PublishPluginOptions as PublishPluginOptions,
      dataV1DataCollection_universal_d_SingleItemPluginOptions as SingleItemPluginOptions,
      dataV1DataCollection_universal_d_UrlizedPluginOptions as UrlizedPluginOptions,
      dataV1DataCollection_universal_d_GridapplessPluginOptions as GridapplessPluginOptions,
      dataV1DataCollection_universal_d_PagingMode as PagingMode,
      dataV1DataCollection_universal_d_DataCollectionClonedEvent as DataCollectionClonedEvent,
      dataV1DataCollection_universal_d_DataCollectionChangedEvent as DataCollectionChangedEvent,
      dataV1DataCollection_universal_d_CreateDataCollectionRequest as CreateDataCollectionRequest,
      dataV1DataCollection_universal_d_CreateDataCollectionResponse as CreateDataCollectionResponse,
      dataV1DataCollection_universal_d_GetDataCollectionRequest as GetDataCollectionRequest,
      dataV1DataCollection_universal_d_GetDataCollectionResponse as GetDataCollectionResponse,
      dataV1DataCollection_universal_d_ListDataCollectionsRequest as ListDataCollectionsRequest,
      dataV1DataCollection_universal_d_ListDataCollectionsRequestPagingMethodOneOf as ListDataCollectionsRequestPagingMethodOneOf,
      dataV1DataCollection_universal_d_Sorting as Sorting,
      dataV1DataCollection_universal_d_SortOrder as SortOrder,
      dataV1DataCollection_universal_d_Paging as Paging,
      dataV1DataCollection_universal_d_CursorPaging as CursorPaging,
      dataV1DataCollection_universal_d_ListDataCollectionsResponse as ListDataCollectionsResponse,
      dataV1DataCollection_universal_d_PagingMetadataV2 as PagingMetadataV2,
      dataV1DataCollection_universal_d_Cursors as Cursors,
      dataV1DataCollection_universal_d_BulkGetDataCollectionsRequest as BulkGetDataCollectionsRequest,
      dataV1DataCollection_universal_d_BulkGetDataCollectionsResponse as BulkGetDataCollectionsResponse,
      dataV1DataCollection_universal_d_BulkGetDataCollectionsBySnapshotsRequest as BulkGetDataCollectionsBySnapshotsRequest,
      dataV1DataCollection_universal_d_BulkGetDataCollectionsBySnapshotsResponse as BulkGetDataCollectionsBySnapshotsResponse,
      dataV1DataCollection_universal_d_SnapshotDataCollections as SnapshotDataCollections,
      dataV1DataCollection_universal_d_UpdateDataCollectionRequest as UpdateDataCollectionRequest,
      dataV1DataCollection_universal_d_UpdateDataCollectionResponse as UpdateDataCollectionResponse,
      dataV1DataCollection_universal_d_DeleteDataCollectionRequest as DeleteDataCollectionRequest,
      dataV1DataCollection_universal_d_DeleteDataCollectionResponse as DeleteDataCollectionResponse,
      dataV1DataCollection_universal_d_createDataCollection as createDataCollection,
      dataV1DataCollection_universal_d_CreateDataCollectionOptions as CreateDataCollectionOptions,
      dataV1DataCollection_universal_d_getDataCollection as getDataCollection,
      dataV1DataCollection_universal_d_GetDataCollectionOptions as GetDataCollectionOptions,
      dataV1DataCollection_universal_d_listDataCollections as listDataCollections,
      dataV1DataCollection_universal_d_ListDataCollectionsOptions as ListDataCollectionsOptions,
      dataV1DataCollection_universal_d_bulkGetDataCollections as bulkGetDataCollections,
      dataV1DataCollection_universal_d_BulkGetDataCollectionsOptions as BulkGetDataCollectionsOptions,
      dataV1DataCollection_universal_d_updateDataCollection as updateDataCollection,
      dataV1DataCollection_universal_d_UpdateDataCollectionOptions as UpdateDataCollectionOptions,
      dataV1DataCollection_universal_d_deleteDataCollection as deleteDataCollection,
    };
  }
  
  export { dataV1DataCollection_universal_d as data };
}
