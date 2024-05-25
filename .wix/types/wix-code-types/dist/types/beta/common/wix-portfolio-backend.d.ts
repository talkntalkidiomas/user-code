declare module "wix-portfolio-backend" {
  /** Collection is the main entity of CollectionsService */
  interface Collection {
      /**
       * Collection ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      title?: string | null;
      description?: string | null;
      /** Url of Collection */
      slug?: string | null;
      /** Collection's cover photo */
      coverImage?: CommonImage$2;
      /** Indicates if the collection is hidden from Portfolio */
      hidden?: boolean | null;
      /** if not present in an update it means the collection will be added as currentTimestamp - as the last collection */
      sortOrder?: number | null;
      /**
       * Represents the time this Collection was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Collection was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Url and relative url of Collection - in order to receive this field in READ requests you will need to pass the `include_page_url` field as part of request
       * @readonly
       */
      url?: string;
      seoData?: SeoSchema$2;
  }
  interface CommonImage$2 {
      /** @internal */
      type?: ImageImageType$2;
      /** Image info - Wix Media Image. */
      imageInfo?: string;
      /** Focal point of the image. */
      focalPoint?: CommonPoint$2;
      /**
       * Set of key-value pairs describing the media in [Exchangeable Image File format](https://en.wikipedia.org/wiki/Exif).
       * @internal
       */
      exif?: Record<string, any> | null;
      /**
       * Image compression level. <br />
       *
       * Min: `30` <br />
       * Max: `100`
       * @internal
       */
      quality?: number | null;
      /**
       * [Unsharp masking](https://en.wikipedia.org/wiki/Unsharp_masking) values of the image.
       * @internal
       */
      unsharpMasking?: CommonUnsharpMasking$2;
      /**
       * Whether the image is saved in secure media.
       * @internal
       */
      secure?: boolean | null;
      /**
       * When image is saved in secure media, token is generated.
       * @internal
       * @readonly
       */
      token?: string | null;
  }
  enum ImageImageType$2 {
      UNDEFINED = "UNDEFINED",
      WIX_MEDIA = "WIX_MEDIA",
      EXTERNAL = "EXTERNAL"
  }
  interface CommonPoint$2 {
      /** X-coordinate of the focal point. */
      x?: number;
      /** Y-coordinate of the focal point. */
      y?: number;
  }
  interface CommonUnsharpMasking$2 {
      /**
       * Unsharp masking amount. Controls the sharpening strength. <br />
       *
       * Min: `0` <br />
       * Max: `5`
       */
      amount?: number | null;
      /** Unsharp masking radius in pixels. Controls the sharpening width. */
      radius?: number | null;
      /**
       * Unsharp masking threshold. Controls how different neighboring pixels must be for shapening to apply. <br />
       *
       * Min: `0` <br />
       * Max: `1`
       */
      threshold?: number | null;
  }
  /**
   * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
   * The search engines use this information for ranking purposes, or to display snippets in the search results.
   * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
   */
  interface SeoSchema$2 {
      /** SEO tag information. */
      tags?: Tag$2[];
      /** SEO general settings. */
      settings?: Settings$2;
  }
  interface Keyword$2 {
      /** Keyword value. */
      term?: string;
      /** Whether the keyword is the main focus keyword. */
      isMain?: boolean;
  }
  interface Tag$2 {
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
  interface Settings$2 {
      /**
       * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
       *
       *
       * Default: `false` (Auto Redirect is enabled.)
       */
      preventAutoRedirect?: boolean;
      /** User-selected keyword terms for a specific page. */
      keywords?: Keyword$2[];
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
  interface AdminRemoveMenuItemsResponse {
      /** number of items queried for deletion */
      numItems?: number;
      /** number of items sucessfully deleted */
      numItemsSuccessfullyDeleted?: number;
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
  interface CreateCollectionRequest {
      /** Collection to be created */
      collection: Collection;
  }
  interface CreateCollectionResponse {
      /** The created Collection */
      collection?: Collection;
  }
  interface GetCollectionRequest {
      /** Id of the Collection to retrieve */
      collectionId: string;
      includePageUrl?: boolean | null;
  }
  interface GetCollectionResponse {
      /** The retrieved Collection */
      collection?: Collection;
  }
  interface ListCollectionsRequest {
      /** Maximum limit per response is 100, in first request cursor is None */
      paging?: CursorPaging$3;
      includePageUrl?: boolean | null;
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
  interface ListCollectionsResponse {
      /** Retrieved Collections */
      collections?: Collection[];
      /**
       * Paging metadata
       * @internal
       */
      pagingMetadataV2?: PagingMetadataV2$3;
      /** Paging metadata */
      metadata?: PagingMetadataV2$3;
  }
  interface PagingMetadataV2$3 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$3;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$3 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface UpdateCollectionRequest {
      /** Collection to be updated, may be partial */
      collection: Collection;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface UpdateCollectionResponse {
      /** The updated Collection */
      collection?: Collection;
  }
  interface DeleteCollectionRequest {
      /** Id of the Collection to delete */
      collectionId: string;
      /**
       * The revision of the Collection
       * @internal
       */
      revision?: string;
  }
  interface DeleteCollectionResponse {
      /** Id of the Deleted Collection */
      collectionId?: string;
  }
  interface QueryCollectionsRequest {
      /** WQL expression */
      query: QueryV2$3;
      includePageUrl?: boolean | null;
  }
  interface QueryV2$3 extends QueryV2PagingMethodOneOf$3 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$3;
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
      sort?: Sorting$3[];
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$3 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$3;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$3;
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
  interface Paging$3 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryCollectionsResponse {
      /** The retrieved Collections */
      collections?: Collection[];
      /**
       * Paging metadata
       * @internal
       */
      pagingMetadataV2?: PagingMetadataV2$3;
      /** Paging metadata */
      metadata?: PagingMetadataV2$3;
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
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function adminRemoveMenuItems(): Promise<AdminRemoveMenuItemsResponse>;
  /**
   * Creates a new Collection
   * @param collection - Collection to be created
   * @public
   * @documentationMaturity preview
   * @requiredField collection
   * @adminMethod
   * @returns The created Collection
   */
  function createCollection(collection: Collection): Promise<Collection>;
  /**
   * Get a Collection by id
   * @param collectionId - Id of the Collection to retrieve
   * @public
   * @documentationMaturity preview
   * @requiredField collectionId
   * @returns The retrieved Collection
   */
  function getCollection(collectionId: string, options?: GetCollectionOptions): Promise<Collection>;
  interface GetCollectionOptions {
      includePageUrl?: boolean | null;
  }
  /**
   * List all Collections in portfolio
   * @public
   * @documentationMaturity preview
   */
  function listCollections(options?: ListCollectionsOptions): Promise<ListCollectionsResponse>;
  interface ListCollectionsOptions {
      /** Maximum limit per response is 100, in first request cursor is None */
      paging?: CursorPaging$3;
      includePageUrl?: boolean | null;
  }
  /**
   * Update a Collection, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - Collection ID
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField collection
   * @requiredField collection.revision
   * @adminMethod
   * @returns The updated Collection
   */
  function updateCollection(_id: string | null, collection: UpdateCollection, options?: UpdateCollectionOptions): Promise<Collection>;
  interface UpdateCollection {
      /**
       * Collection ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      title?: string | null;
      description?: string | null;
      /** Url of Collection */
      slug?: string | null;
      /** Collection's cover photo */
      coverImage?: CommonImage$2;
      /** Indicates if the collection is hidden from Portfolio */
      hidden?: boolean | null;
      /** if not present in an update it means the collection will be added as currentTimestamp - as the last collection */
      sortOrder?: number | null;
      /**
       * Represents the time this Collection was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Collection was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Url and relative url of Collection - in order to receive this field in READ requests you will need to pass the `include_page_url` field as part of request
       * @readonly
       */
      url?: string;
      seoData?: SeoSchema$2;
  }
  interface UpdateCollectionOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  /**
   * Delete a Collection
   * @param collectionId - Id of the Collection to delete
   * @public
   * @documentationMaturity preview
   * @requiredField collectionId
   * @adminMethod
   */
  function deleteCollection(collectionId: string, options?: DeleteCollectionOptions): Promise<DeleteCollectionResponse>;
  interface DeleteCollectionOptions {
      /**
       * The revision of the Collection
       * @internal
       */
      revision?: string;
  }
  /**
   * Query Collections using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @public
   * @documentationMaturity preview
   */
  function queryCollections(options?: QueryCollectionsOptions): CollectionsQueryBuilder;
  interface QueryCollectionsOptions {
      includePageUrl?: boolean | null | undefined;
  }
  interface QueryCursorResult$2 {
      cursors: Cursors$3;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface CollectionsQueryResult extends QueryCursorResult$2 {
      items: Collection[];
      query: CollectionsQueryBuilder;
      next: () => Promise<CollectionsQueryResult>;
      prev: () => Promise<CollectionsQueryResult>;
  }
  interface CollectionsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'title' | 'description' | 'slug' | 'hidden' | 'sortOrder' | '_createdDate' | '_updatedDate', value: any) => CollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'title' | 'description' | 'slug' | 'hidden' | 'sortOrder' | '_createdDate' | '_updatedDate', value: any) => CollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: 'sortOrder' | '_createdDate' | '_updatedDate', value: any) => CollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: 'sortOrder' | '_createdDate' | '_updatedDate', value: any) => CollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: 'sortOrder' | '_createdDate' | '_updatedDate', value: any) => CollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: 'sortOrder' | '_createdDate' | '_updatedDate', value: any) => CollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'title' | 'description' | 'slug', value: string) => CollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | 'title' | 'description' | 'slug' | 'hidden' | 'sortOrder' | '_createdDate' | '_updatedDate', value: any[]) => CollectionsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'title' | 'description' | 'slug' | 'hidden' | 'sortOrder' | '_createdDate' | '_updatedDate', value: any) => CollectionsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | 'title' | 'description' | 'slug' | 'hidden' | 'sortOrder' | '_createdDate' | '_updatedDate', value: boolean) => CollectionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'title' | 'description' | 'slug' | 'sortOrder' | '_createdDate' | '_updatedDate'>) => CollectionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'title' | 'description' | 'slug' | 'sortOrder' | '_createdDate' | '_updatedDate'>) => CollectionsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => CollectionsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => CollectionsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<CollectionsQueryResult>;
  }
  
  type portfolioCollectionsV1Collection_universal_d_Collection = Collection;
  type portfolioCollectionsV1Collection_universal_d_AdminRemoveMenuItemsResponse = AdminRemoveMenuItemsResponse;
  type portfolioCollectionsV1Collection_universal_d_CreateCollectionRequest = CreateCollectionRequest;
  type portfolioCollectionsV1Collection_universal_d_CreateCollectionResponse = CreateCollectionResponse;
  type portfolioCollectionsV1Collection_universal_d_GetCollectionRequest = GetCollectionRequest;
  type portfolioCollectionsV1Collection_universal_d_GetCollectionResponse = GetCollectionResponse;
  type portfolioCollectionsV1Collection_universal_d_ListCollectionsRequest = ListCollectionsRequest;
  type portfolioCollectionsV1Collection_universal_d_ListCollectionsResponse = ListCollectionsResponse;
  type portfolioCollectionsV1Collection_universal_d_UpdateCollectionRequest = UpdateCollectionRequest;
  type portfolioCollectionsV1Collection_universal_d_UpdateCollectionResponse = UpdateCollectionResponse;
  type portfolioCollectionsV1Collection_universal_d_DeleteCollectionRequest = DeleteCollectionRequest;
  type portfolioCollectionsV1Collection_universal_d_DeleteCollectionResponse = DeleteCollectionResponse;
  type portfolioCollectionsV1Collection_universal_d_QueryCollectionsRequest = QueryCollectionsRequest;
  type portfolioCollectionsV1Collection_universal_d_QueryCollectionsResponse = QueryCollectionsResponse;
  const portfolioCollectionsV1Collection_universal_d_adminRemoveMenuItems: typeof adminRemoveMenuItems;
  const portfolioCollectionsV1Collection_universal_d_createCollection: typeof createCollection;
  const portfolioCollectionsV1Collection_universal_d_getCollection: typeof getCollection;
  type portfolioCollectionsV1Collection_universal_d_GetCollectionOptions = GetCollectionOptions;
  const portfolioCollectionsV1Collection_universal_d_listCollections: typeof listCollections;
  type portfolioCollectionsV1Collection_universal_d_ListCollectionsOptions = ListCollectionsOptions;
  const portfolioCollectionsV1Collection_universal_d_updateCollection: typeof updateCollection;
  type portfolioCollectionsV1Collection_universal_d_UpdateCollection = UpdateCollection;
  type portfolioCollectionsV1Collection_universal_d_UpdateCollectionOptions = UpdateCollectionOptions;
  const portfolioCollectionsV1Collection_universal_d_deleteCollection: typeof deleteCollection;
  type portfolioCollectionsV1Collection_universal_d_DeleteCollectionOptions = DeleteCollectionOptions;
  const portfolioCollectionsV1Collection_universal_d_queryCollections: typeof queryCollections;
  type portfolioCollectionsV1Collection_universal_d_QueryCollectionsOptions = QueryCollectionsOptions;
  type portfolioCollectionsV1Collection_universal_d_CollectionsQueryResult = CollectionsQueryResult;
  type portfolioCollectionsV1Collection_universal_d_CollectionsQueryBuilder = CollectionsQueryBuilder;
  namespace portfolioCollectionsV1Collection_universal_d {
    export {
      portfolioCollectionsV1Collection_universal_d_Collection as Collection,
      CommonImage$2 as CommonImage,
      ImageImageType$2 as ImageImageType,
      CommonPoint$2 as CommonPoint,
      CommonUnsharpMasking$2 as CommonUnsharpMasking,
      SeoSchema$2 as SeoSchema,
      Keyword$2 as Keyword,
      Tag$2 as Tag,
      Settings$2 as Settings,
      DomainEvent$3 as DomainEvent,
      DomainEventBodyOneOf$3 as DomainEventBodyOneOf,
      EntityCreatedEvent$3 as EntityCreatedEvent,
      EntityUpdatedEvent$3 as EntityUpdatedEvent,
      EntityDeletedEvent$3 as EntityDeletedEvent,
      ActionEvent$3 as ActionEvent,
      Empty$2 as Empty,
      portfolioCollectionsV1Collection_universal_d_AdminRemoveMenuItemsResponse as AdminRemoveMenuItemsResponse,
      InvalidateCache$2 as InvalidateCache,
      InvalidateCacheGetByOneOf$2 as InvalidateCacheGetByOneOf,
      App$2 as App,
      Page$2 as Page,
      URI$2 as URI,
      File$2 as File,
      portfolioCollectionsV1Collection_universal_d_CreateCollectionRequest as CreateCollectionRequest,
      portfolioCollectionsV1Collection_universal_d_CreateCollectionResponse as CreateCollectionResponse,
      portfolioCollectionsV1Collection_universal_d_GetCollectionRequest as GetCollectionRequest,
      portfolioCollectionsV1Collection_universal_d_GetCollectionResponse as GetCollectionResponse,
      portfolioCollectionsV1Collection_universal_d_ListCollectionsRequest as ListCollectionsRequest,
      CursorPaging$3 as CursorPaging,
      portfolioCollectionsV1Collection_universal_d_ListCollectionsResponse as ListCollectionsResponse,
      PagingMetadataV2$3 as PagingMetadataV2,
      Cursors$3 as Cursors,
      portfolioCollectionsV1Collection_universal_d_UpdateCollectionRequest as UpdateCollectionRequest,
      portfolioCollectionsV1Collection_universal_d_UpdateCollectionResponse as UpdateCollectionResponse,
      portfolioCollectionsV1Collection_universal_d_DeleteCollectionRequest as DeleteCollectionRequest,
      portfolioCollectionsV1Collection_universal_d_DeleteCollectionResponse as DeleteCollectionResponse,
      portfolioCollectionsV1Collection_universal_d_QueryCollectionsRequest as QueryCollectionsRequest,
      QueryV2$3 as QueryV2,
      QueryV2PagingMethodOneOf$3 as QueryV2PagingMethodOneOf,
      Sorting$3 as Sorting,
      SortOrder$3 as SortOrder,
      Paging$3 as Paging,
      portfolioCollectionsV1Collection_universal_d_QueryCollectionsResponse as QueryCollectionsResponse,
      MessageEnvelope$3 as MessageEnvelope,
      IdentificationData$3 as IdentificationData,
      IdentificationDataIdOneOf$3 as IdentificationDataIdOneOf,
      WebhookIdentityType$3 as WebhookIdentityType,
      portfolioCollectionsV1Collection_universal_d_adminRemoveMenuItems as adminRemoveMenuItems,
      portfolioCollectionsV1Collection_universal_d_createCollection as createCollection,
      portfolioCollectionsV1Collection_universal_d_getCollection as getCollection,
      portfolioCollectionsV1Collection_universal_d_GetCollectionOptions as GetCollectionOptions,
      portfolioCollectionsV1Collection_universal_d_listCollections as listCollections,
      portfolioCollectionsV1Collection_universal_d_ListCollectionsOptions as ListCollectionsOptions,
      portfolioCollectionsV1Collection_universal_d_updateCollection as updateCollection,
      portfolioCollectionsV1Collection_universal_d_UpdateCollection as UpdateCollection,
      portfolioCollectionsV1Collection_universal_d_UpdateCollectionOptions as UpdateCollectionOptions,
      portfolioCollectionsV1Collection_universal_d_deleteCollection as deleteCollection,
      portfolioCollectionsV1Collection_universal_d_DeleteCollectionOptions as DeleteCollectionOptions,
      portfolioCollectionsV1Collection_universal_d_queryCollections as queryCollections,
      portfolioCollectionsV1Collection_universal_d_QueryCollectionsOptions as QueryCollectionsOptions,
      portfolioCollectionsV1Collection_universal_d_CollectionsQueryResult as CollectionsQueryResult,
      portfolioCollectionsV1Collection_universal_d_CollectionsQueryBuilder as CollectionsQueryBuilder,
    };
  }
  
  /** ProjectItem is the main entity of ProjectItemsService */
  interface ProjectitemsItem extends ProjectitemsItemMetadataOneOf {
      /** Information about the image. */
      image?: CommonImage$1;
      /** Information about the video. */
      video?: CommonVideo;
      /**
       * Id of the Project the items are part of
       * Project must exist before adding items to it. project can be created/updated/deleted using this //TODO
       */
      projectId?: string | null;
      /**
       * Item ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Index that determines which position a media item is displayed in the gallery. <br />
       *
       * Default: [Epoch](https://www.epoch101.com/) timestamp. <br /> //TODO: decide if needed, what happens if user add an item without sortOrder? do we give it the default timestamp? if not, does sorting by sortOrder will work when no sortOrder?
       */
      sortOrder?: number | null;
      /** Item title. */
      title?: string | null;
      /** Item description. */
      description?: string | null;
      /**
       * Item data type. One of:
       * <br />
       * +`"IMAGE"`
       * <br />
       * +`"VIDEO"`
       * @readonly
       */
      type?: ItemType;
      /**
       * Date and time the item was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the item was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Item tags.
       * @internal
       */
      tags?: ProjectitemsTags;
      /** Link from the item. */
      link?: Link;
  }
  /** @oneof */
  interface ProjectitemsItemMetadataOneOf {
      /** Information about the image. */
      image?: CommonImage$1;
      /** Information about the video. */
      video?: CommonVideo;
  }
  enum ItemType {
      UNDEFINED = "UNDEFINED",
      IMAGE = "IMAGE",
      VIDEO = "VIDEO"
  }
  interface CommonImage$1 {
      /** @internal */
      type?: ImageImageType$1;
      /** Image info - Wix Media Image. */
      imageInfo?: string;
      /** Focal point of the image. */
      focalPoint?: CommonPoint$1;
      /**
       * Set of key-value pairs describing the media in [Exchangeable Image File format](https://en.wikipedia.org/wiki/Exif).
       * @internal
       */
      exif?: Record<string, any> | null;
      /**
       * Image compression level. <br />
       *
       * Min: `30` <br />
       * Max: `100`
       * @internal
       */
      quality?: number | null;
      /**
       * [Unsharp masking](https://en.wikipedia.org/wiki/Unsharp_masking) values of the image.
       * @internal
       */
      unsharpMasking?: CommonUnsharpMasking$1;
      /**
       * Whether the image is saved in secure media.
       * @internal
       */
      secure?: boolean | null;
      /**
       * When image is saved in secure media, token is generated.
       * @internal
       * @readonly
       */
      token?: string | null;
  }
  enum ImageImageType$1 {
      UNDEFINED = "UNDEFINED",
      WIX_MEDIA = "WIX_MEDIA",
      EXTERNAL = "EXTERNAL"
  }
  interface CommonPoint$1 {
      /** X-coordinate of the focal point. */
      x?: number;
      /** Y-coordinate of the focal point. */
      y?: number;
  }
  interface CommonUnsharpMasking$1 {
      /**
       * Unsharp masking amount. Controls the sharpening strength. <br />
       *
       * Min: `0` <br />
       * Max: `5`
       */
      amount?: number | null;
      /** Unsharp masking radius in pixels. Controls the sharpening width. */
      radius?: number | null;
      /**
       * Unsharp masking threshold. Controls how different neighboring pixels must be for shapening to apply. <br />
       *
       * Min: `0` <br />
       * Max: `1`
       */
      threshold?: number | null;
  }
  interface CommonVideo {
      /** Video info - Wix Media Image. */
      videoInfo?: string;
      /** Manually defined Video duration in milliseconds. */
      durationInMillis?: number | null;
  }
  interface CommonVideoResolution {
      /** Video URL.  Required. */
      url?: string;
      /** Video height. Required. */
      height?: number;
      /** Video width.  Required. */
      width?: number;
      /**
       * Video poster. Deprecated, please use the `posters` property in the parent entity
       * @internal
       */
      poster?: string;
      /** Video format for example, mp4, hls.  Required. */
      format?: string;
      /** Video quality for example 480p, 720p. */
      quality?: string | null;
      /** Video filename. */
      filename?: string | null;
  }
  interface ProjectitemsTags {
      /** List of tags assigned to the media item. */
      values?: string[];
  }
  interface Link {
      /** Display text of the link. */
      text?: string | null;
      /** Target URL of the link. */
      url?: string | null;
      /**
       * Whether the link opens in a new tab or window. One of:
       * * `'_blank'`: The link opens in a new tab or window.
       * * `'_self'`: The link opens in the same tab or window.
       */
      target?: string | null;
  }
  interface GenerateTokenForProjectItemsRequest {
      /** Media ids of requested project items */
      mediaIds: string[];
  }
  interface GenerateTokenForProjectItemsResponse {
      mediaTokens?: ProjectItemMediaToken[];
  }
  interface ProjectItemMediaToken {
      /** Media id of project item */
      mediaId?: string;
      /** Generated media token for project item */
      mediaToken?: string;
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
  interface CreateProjectItemRequest {
      /** Item to be created */
      item: ProjectitemsItem;
  }
  interface CreateProjectItemResponse {
      /** @internal */
      projectId?: string;
      /** The created item */
      item?: ProjectitemsItem;
  }
  interface BulkCreateProjectItemsRequest {
      /**
       * Id of the Project the items are part of
       * Project must exist before adding items to it. project can be created/updated/deleted using this //TODO
       * @internal
       */
      projectId: string;
      /** items to be created. */
      items: ProjectitemsItem[];
      returnFullEntity?: boolean | null;
  }
  interface BulkCreateProjectItemsResponse {
      /**
       * Id of the Project the item is part of
       * @internal
       */
      projectId?: string;
      /** Array with all created items results. */
      results?: BulkCreateProjectItemResult[];
      /** Holds metadata of the entire bulk create operation */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkCreateProjectItemResult {
      /** Holds information about an item in bulk create - id, index in original request array, action successful, error (if failed) */
      itemMetadata?: ItemMetadata$1;
      item?: ProjectitemsItem;
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
  interface GetProjectItemRequest {
      /**
       * Id of the Project the item is part of
       * @internal
       */
      projectId?: string;
      /** Id of the ProjectItem to retrieve */
      itemId: string;
  }
  interface GetProjectItemResponse {
      /**
       * Id of the Project the item is part of
       * @internal
       */
      projectId?: string;
      /** The retrieved ProjectItem */
      item?: ProjectitemsItem;
  }
  interface ListProjectItemsRequest {
      /** Id of the Project the item is part of */
      projectId: string;
      /** limit and offset for ProjectItems - maximum limit is 200 per request, default is 50 */
      paging?: Paging$2;
  }
  interface Paging$2 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListProjectItemsResponse {
      /**
       * Id of the Project the item is part of
       * @internal
       */
      projectId?: string;
      /** ProjectItems retrieved */
      items?: ProjectitemsItem[];
      /** Paging metadata */
      pagingMetadataV2?: PagingMetadataV2$2;
      /** Paging metadata */
      metadata?: PagingMetadataV2$2;
  }
  interface PagingMetadataV2$2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$2;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$2 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryProjectItemsRequest {
      /** WQL expression */
      query?: QueryV2$2;
  }
  interface QueryV2$2 extends QueryV2PagingMethodOneOf$2 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$2;
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
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$2 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$2;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
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
  interface QueryProjectItemsResponse {
      /** ProjectItems retrieved */
      items?: ProjectitemsItem[];
      /** Paging metadata */
      metadata?: PagingMetadataV2$2;
  }
  interface UpdateProjectItemRequest {
      /** ProjectItem to be updated, may be partial */
      item: ProjectitemsItem;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface UpdateProjectItemResponse {
      /**
       * Id of the Project the item is part of
       * @internal
       */
      projectId?: string;
      /** The updated ProjectItem */
      item?: ProjectitemsItem;
  }
  interface BulkUpdateProjectItemsRequest {
      /**
       * Id of the Project the items are part of
       * @internal
       */
      projectId: string;
      /** items to be updated. */
      items?: MaskedItem[];
      returnFullEntity?: boolean | null;
  }
  interface MaskedItem {
      item?: ProjectitemsItem;
      /** @internal */
      fieldMask?: string[];
  }
  interface BulkUpdateProjectItemsResponse {
      /**
       * Id of the Project the item is part of
       * @internal
       */
      projectId?: string;
      /** Array with all updated items results. */
      results?: BulkUpdateProjectItemResult[];
      /** Holds metadata of the entire bulk update operation */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkUpdateProjectItemResult {
      /** Holds information about an item in bulk update - id, index in original request array, action successful, error (if failed). */
      itemMetadata?: ItemMetadata$1;
      item?: ProjectitemsItem;
  }
  interface DeleteProjectItemRequest {
      /**
       * Id of the Project the item is part of
       * @internal
       */
      projectId?: string;
      /** Id of the Item to delete */
      itemId: string;
  }
  interface DeleteProjectItemResponse {
      /** Id of the Project the item is part of */
      projectId?: string;
      /** Id of deleted item */
      itemId?: string;
  }
  interface BulkDeleteProjectItemsRequest {
      /**
       * Id of the project
       * @internal
       */
      projectId: string;
      /** Ids of the items to be deleted */
      itemIds: string[];
  }
  interface BulkDeleteProjectItemsResponse {
      /**
       * Id of the Project the item is part of
       * @internal
       */
      projectId?: string;
      /** Array with all deleted items results */
      results?: BulkDeleteProjectItemResult[];
      /** Holds metadata of the entire bulk delete operation */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkDeleteProjectItemResult {
      /** Holds information about an item in bulk delete - id, index in original request array, action successful, error (if failed) */
      itemMetadata?: ItemMetadata$1;
      /** Id of the ProjectItem */
      itemId?: string;
  }
  interface CreateProjectGalleryRequest {
      /** Id of Project to create */
      projectId?: string;
  }
  interface CreateProjectGalleryResponse {
      /** Id of created Project */
      projectId?: string;
      /** Id of created gallery */
      galleryId?: string;
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
  interface DuplicateProjectItemsRequest {
      /** Id of Project to duplicate */
      originProjectId: string;
      /** Target project ID to duplicate to (same instance as request) */
      targetProjectId: string;
  }
  interface DuplicateProjectItemsResponse {
      /** Id of target project */
      projectId?: string;
      /** Result metadata */
      bulkActionMetadata?: BulkActionMetadata$1;
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
  /** @param mediaIds - Media ids of requested project items
   * @internal
   * @documentationMaturity preview
   * @requiredField mediaIds
   * @adminMethod
   */
  function generateTokenForProjectItems(mediaIds: string[]): Promise<GenerateTokenForProjectItemsResponse>;
  /**
   * Creates a new ProjectItem
   * @param item - Item to be created
   * @public
   * @documentationMaturity preview
   * @requiredField item
   * @adminMethod
   * @returns The created item
   */
  function createProjectItem(item: ProjectitemsItem): Promise<ProjectitemsItem>;
  /**
   * Create items in bulk
   * @param projectId - Id of the Project the items are part of
   * Project must exist before adding items to it. project can be created/updated/deleted using this //TODO
   * @internal
   * @documentationMaturity preview
   * @requiredField options.items
   * @requiredField projectId
   * @adminMethod
   */
  function bulkCreateProjectItems(projectId: string, options?: BulkCreateProjectItemsOptions): Promise<BulkCreateProjectItemsResponse>;
  interface BulkCreateProjectItemsOptions {
      /** items to be created. */
      items: ProjectitemsItem[];
      returnFullEntity?: boolean | null;
  }
  /**
   * Get a ProjectItem by id
   * @param itemId - Id of the ProjectItem to retrieve
   * @public
   * @documentationMaturity preview
   * @requiredField itemId
   * @returns The retrieved ProjectItem
   */
  function getProjectItem(itemId: string, options?: GetProjectItemOptions): Promise<ProjectitemsItem>;
  interface GetProjectItemOptions {
      /**
       * Id of the Project the item is part of
       * @internal
       */
      projectId?: string;
  }
  /**
   * List all items in project
   * @param projectId - Id of the Project the item is part of
   * @public
   * @documentationMaturity preview
   * @requiredField projectId
   */
  function listProjectItems(projectId: string, options?: ListProjectItemsOptions): Promise<ListProjectItemsResponse>;
  interface ListProjectItemsOptions {
      /** limit and offset for ProjectItems - maximum limit is 200 per request, default is 50 */
      paging?: Paging$2;
  }
  /**
   * Query Collections using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * supported only by projectId & id
   * internal usage only - should not be used, created for auto-db-driver only
   * @internal
   * @documentationMaturity preview
   */
  function queryProjectItems(): ItemsQueryBuilder;
  interface QueryOffsetResult {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ItemsQueryResult extends QueryOffsetResult {
      items: ProjectitemsItem[];
      query: ItemsQueryBuilder;
      next: () => Promise<ItemsQueryResult>;
      prev: () => Promise<ItemsQueryResult>;
  }
  interface ItemsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: 'projectId' | '_id', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id', value: any[]) => ItemsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ItemsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => ItemsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ItemsQueryResult>;
  }
  /**
   * Update a ProjectItem, supports partial update
   * @param _id - Item ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField item
   * @adminMethod
   * @returns The updated ProjectItem
   */
  function updateProjectItem(_id: string | null, item: UpdateProjectItem, options?: UpdateProjectItemOptions): Promise<ProjectitemsItem>;
  interface UpdateProjectItem {
      /** Information about the image. */
      image?: CommonImage$1;
      /** Information about the video. */
      video?: CommonVideo;
      /**
       * Id of the Project the items are part of
       * Project must exist before adding items to it. project can be created/updated/deleted using this //TODO
       */
      projectId?: string | null;
      /**
       * Item ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Index that determines which position a media item is displayed in the gallery. <br />
       *
       * Default: [Epoch](https://www.epoch101.com/) timestamp. <br /> //TODO: decide if needed, what happens if user add an item without sortOrder? do we give it the default timestamp? if not, does sorting by sortOrder will work when no sortOrder?
       */
      sortOrder?: number | null;
      /** Item title. */
      title?: string | null;
      /** Item description. */
      description?: string | null;
      /**
       * Item data type. One of:
       * <br />
       * +`"IMAGE"`
       * <br />
       * +`"VIDEO"`
       * @readonly
       */
      type?: ItemType;
      /**
       * Date and time the item was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the item was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Item tags.
       * @internal
       */
      tags?: ProjectitemsTags;
      /** Link from the item. */
      link?: Link;
  }
  interface UpdateProjectItemOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  /**
   * Update ProjectItems in bulk
   * @param projectId - Id of the Project the items are part of
   * @internal
   * @documentationMaturity preview
   * @requiredField options.items.item
   * @requiredField options.items.item._id
   * @requiredField projectId
   * @adminMethod
   */
  function bulkUpdateProjectItems(projectId: string, options?: BulkUpdateProjectItemsOptions): Promise<BulkUpdateProjectItemsResponse>;
  interface BulkUpdateProjectItemsOptions {
      /** items to be updated. */
      items?: MaskedItem[];
      returnFullEntity?: boolean | null;
  }
  /**
   * Delete a ProjectItem
   * @param itemId - Id of the Item to delete
   * @public
   * @documentationMaturity preview
   * @requiredField itemId
   * @adminMethod
   */
  function deleteProjectItem(itemId: string, options?: DeleteProjectItemOptions): Promise<DeleteProjectItemResponse>;
  interface DeleteProjectItemOptions {
      /**
       * Id of the Project the item is part of
       * @internal
       */
      projectId?: string;
  }
  /**
   * Delete items in bulk
   * @param projectId - Id of the project
   * @internal
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.itemIds
   * @requiredField projectId
   * @adminMethod
   */
  function bulkDeleteProjectItems(projectId: string, options: BulkDeleteProjectItemsOptions): Promise<BulkDeleteProjectItemsResponse>;
  interface BulkDeleteProjectItemsOptions {
      /** Ids of the items to be deleted */
      itemIds: string[];
  }
  /**
   * Given an 'origin' Project and 'target' Project, copy all ProjectItems in 'origin' Project to 'target' Project.
   * @param originProjectId - Id of Project to duplicate
   * @internal
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.targetProjectId
   * @requiredField originProjectId
   * @adminMethod
   */
  function duplicateProjectItems(originProjectId: string, options: DuplicateProjectItemsOptions): Promise<DuplicateProjectItemsResponse>;
  interface DuplicateProjectItemsOptions {
      /** Target project ID to duplicate to (same instance as request) */
      targetProjectId: string;
  }
  
  type portfolioProjectItemsV1ProjectItem_universal_d_ProjectitemsItem = ProjectitemsItem;
  type portfolioProjectItemsV1ProjectItem_universal_d_ProjectitemsItemMetadataOneOf = ProjectitemsItemMetadataOneOf;
  type portfolioProjectItemsV1ProjectItem_universal_d_ItemType = ItemType;
  const portfolioProjectItemsV1ProjectItem_universal_d_ItemType: typeof ItemType;
  type portfolioProjectItemsV1ProjectItem_universal_d_CommonVideo = CommonVideo;
  type portfolioProjectItemsV1ProjectItem_universal_d_CommonVideoResolution = CommonVideoResolution;
  type portfolioProjectItemsV1ProjectItem_universal_d_ProjectitemsTags = ProjectitemsTags;
  type portfolioProjectItemsV1ProjectItem_universal_d_Link = Link;
  type portfolioProjectItemsV1ProjectItem_universal_d_GenerateTokenForProjectItemsRequest = GenerateTokenForProjectItemsRequest;
  type portfolioProjectItemsV1ProjectItem_universal_d_GenerateTokenForProjectItemsResponse = GenerateTokenForProjectItemsResponse;
  type portfolioProjectItemsV1ProjectItem_universal_d_ProjectItemMediaToken = ProjectItemMediaToken;
  type portfolioProjectItemsV1ProjectItem_universal_d_CreateProjectItemRequest = CreateProjectItemRequest;
  type portfolioProjectItemsV1ProjectItem_universal_d_CreateProjectItemResponse = CreateProjectItemResponse;
  type portfolioProjectItemsV1ProjectItem_universal_d_BulkCreateProjectItemsRequest = BulkCreateProjectItemsRequest;
  type portfolioProjectItemsV1ProjectItem_universal_d_BulkCreateProjectItemsResponse = BulkCreateProjectItemsResponse;
  type portfolioProjectItemsV1ProjectItem_universal_d_BulkCreateProjectItemResult = BulkCreateProjectItemResult;
  type portfolioProjectItemsV1ProjectItem_universal_d_GetProjectItemRequest = GetProjectItemRequest;
  type portfolioProjectItemsV1ProjectItem_universal_d_GetProjectItemResponse = GetProjectItemResponse;
  type portfolioProjectItemsV1ProjectItem_universal_d_ListProjectItemsRequest = ListProjectItemsRequest;
  type portfolioProjectItemsV1ProjectItem_universal_d_ListProjectItemsResponse = ListProjectItemsResponse;
  type portfolioProjectItemsV1ProjectItem_universal_d_QueryProjectItemsRequest = QueryProjectItemsRequest;
  type portfolioProjectItemsV1ProjectItem_universal_d_QueryProjectItemsResponse = QueryProjectItemsResponse;
  type portfolioProjectItemsV1ProjectItem_universal_d_UpdateProjectItemRequest = UpdateProjectItemRequest;
  type portfolioProjectItemsV1ProjectItem_universal_d_UpdateProjectItemResponse = UpdateProjectItemResponse;
  type portfolioProjectItemsV1ProjectItem_universal_d_BulkUpdateProjectItemsRequest = BulkUpdateProjectItemsRequest;
  type portfolioProjectItemsV1ProjectItem_universal_d_MaskedItem = MaskedItem;
  type portfolioProjectItemsV1ProjectItem_universal_d_BulkUpdateProjectItemsResponse = BulkUpdateProjectItemsResponse;
  type portfolioProjectItemsV1ProjectItem_universal_d_BulkUpdateProjectItemResult = BulkUpdateProjectItemResult;
  type portfolioProjectItemsV1ProjectItem_universal_d_DeleteProjectItemRequest = DeleteProjectItemRequest;
  type portfolioProjectItemsV1ProjectItem_universal_d_DeleteProjectItemResponse = DeleteProjectItemResponse;
  type portfolioProjectItemsV1ProjectItem_universal_d_BulkDeleteProjectItemsRequest = BulkDeleteProjectItemsRequest;
  type portfolioProjectItemsV1ProjectItem_universal_d_BulkDeleteProjectItemsResponse = BulkDeleteProjectItemsResponse;
  type portfolioProjectItemsV1ProjectItem_universal_d_BulkDeleteProjectItemResult = BulkDeleteProjectItemResult;
  type portfolioProjectItemsV1ProjectItem_universal_d_CreateProjectGalleryRequest = CreateProjectGalleryRequest;
  type portfolioProjectItemsV1ProjectItem_universal_d_CreateProjectGalleryResponse = CreateProjectGalleryResponse;
  type portfolioProjectItemsV1ProjectItem_universal_d_DuplicateProjectItemsRequest = DuplicateProjectItemsRequest;
  type portfolioProjectItemsV1ProjectItem_universal_d_DuplicateProjectItemsResponse = DuplicateProjectItemsResponse;
  const portfolioProjectItemsV1ProjectItem_universal_d_generateTokenForProjectItems: typeof generateTokenForProjectItems;
  const portfolioProjectItemsV1ProjectItem_universal_d_createProjectItem: typeof createProjectItem;
  const portfolioProjectItemsV1ProjectItem_universal_d_bulkCreateProjectItems: typeof bulkCreateProjectItems;
  type portfolioProjectItemsV1ProjectItem_universal_d_BulkCreateProjectItemsOptions = BulkCreateProjectItemsOptions;
  const portfolioProjectItemsV1ProjectItem_universal_d_getProjectItem: typeof getProjectItem;
  type portfolioProjectItemsV1ProjectItem_universal_d_GetProjectItemOptions = GetProjectItemOptions;
  const portfolioProjectItemsV1ProjectItem_universal_d_listProjectItems: typeof listProjectItems;
  type portfolioProjectItemsV1ProjectItem_universal_d_ListProjectItemsOptions = ListProjectItemsOptions;
  const portfolioProjectItemsV1ProjectItem_universal_d_queryProjectItems: typeof queryProjectItems;
  type portfolioProjectItemsV1ProjectItem_universal_d_ItemsQueryResult = ItemsQueryResult;
  type portfolioProjectItemsV1ProjectItem_universal_d_ItemsQueryBuilder = ItemsQueryBuilder;
  const portfolioProjectItemsV1ProjectItem_universal_d_updateProjectItem: typeof updateProjectItem;
  type portfolioProjectItemsV1ProjectItem_universal_d_UpdateProjectItem = UpdateProjectItem;
  type portfolioProjectItemsV1ProjectItem_universal_d_UpdateProjectItemOptions = UpdateProjectItemOptions;
  const portfolioProjectItemsV1ProjectItem_universal_d_bulkUpdateProjectItems: typeof bulkUpdateProjectItems;
  type portfolioProjectItemsV1ProjectItem_universal_d_BulkUpdateProjectItemsOptions = BulkUpdateProjectItemsOptions;
  const portfolioProjectItemsV1ProjectItem_universal_d_deleteProjectItem: typeof deleteProjectItem;
  type portfolioProjectItemsV1ProjectItem_universal_d_DeleteProjectItemOptions = DeleteProjectItemOptions;
  const portfolioProjectItemsV1ProjectItem_universal_d_bulkDeleteProjectItems: typeof bulkDeleteProjectItems;
  type portfolioProjectItemsV1ProjectItem_universal_d_BulkDeleteProjectItemsOptions = BulkDeleteProjectItemsOptions;
  const portfolioProjectItemsV1ProjectItem_universal_d_duplicateProjectItems: typeof duplicateProjectItems;
  type portfolioProjectItemsV1ProjectItem_universal_d_DuplicateProjectItemsOptions = DuplicateProjectItemsOptions;
  namespace portfolioProjectItemsV1ProjectItem_universal_d {
    export {
      portfolioProjectItemsV1ProjectItem_universal_d_ProjectitemsItem as ProjectitemsItem,
      portfolioProjectItemsV1ProjectItem_universal_d_ProjectitemsItemMetadataOneOf as ProjectitemsItemMetadataOneOf,
      portfolioProjectItemsV1ProjectItem_universal_d_ItemType as ItemType,
      CommonImage$1 as CommonImage,
      ImageImageType$1 as ImageImageType,
      CommonPoint$1 as CommonPoint,
      CommonUnsharpMasking$1 as CommonUnsharpMasking,
      portfolioProjectItemsV1ProjectItem_universal_d_CommonVideo as CommonVideo,
      portfolioProjectItemsV1ProjectItem_universal_d_CommonVideoResolution as CommonVideoResolution,
      portfolioProjectItemsV1ProjectItem_universal_d_ProjectitemsTags as ProjectitemsTags,
      portfolioProjectItemsV1ProjectItem_universal_d_Link as Link,
      portfolioProjectItemsV1ProjectItem_universal_d_GenerateTokenForProjectItemsRequest as GenerateTokenForProjectItemsRequest,
      portfolioProjectItemsV1ProjectItem_universal_d_GenerateTokenForProjectItemsResponse as GenerateTokenForProjectItemsResponse,
      portfolioProjectItemsV1ProjectItem_universal_d_ProjectItemMediaToken as ProjectItemMediaToken,
      InvalidateCache$1 as InvalidateCache,
      InvalidateCacheGetByOneOf$1 as InvalidateCacheGetByOneOf,
      App$1 as App,
      Page$1 as Page,
      URI$1 as URI,
      File$1 as File,
      portfolioProjectItemsV1ProjectItem_universal_d_CreateProjectItemRequest as CreateProjectItemRequest,
      portfolioProjectItemsV1ProjectItem_universal_d_CreateProjectItemResponse as CreateProjectItemResponse,
      portfolioProjectItemsV1ProjectItem_universal_d_BulkCreateProjectItemsRequest as BulkCreateProjectItemsRequest,
      portfolioProjectItemsV1ProjectItem_universal_d_BulkCreateProjectItemsResponse as BulkCreateProjectItemsResponse,
      portfolioProjectItemsV1ProjectItem_universal_d_BulkCreateProjectItemResult as BulkCreateProjectItemResult,
      ItemMetadata$1 as ItemMetadata,
      ApplicationError$1 as ApplicationError,
      BulkActionMetadata$1 as BulkActionMetadata,
      portfolioProjectItemsV1ProjectItem_universal_d_GetProjectItemRequest as GetProjectItemRequest,
      portfolioProjectItemsV1ProjectItem_universal_d_GetProjectItemResponse as GetProjectItemResponse,
      portfolioProjectItemsV1ProjectItem_universal_d_ListProjectItemsRequest as ListProjectItemsRequest,
      Paging$2 as Paging,
      portfolioProjectItemsV1ProjectItem_universal_d_ListProjectItemsResponse as ListProjectItemsResponse,
      PagingMetadataV2$2 as PagingMetadataV2,
      Cursors$2 as Cursors,
      portfolioProjectItemsV1ProjectItem_universal_d_QueryProjectItemsRequest as QueryProjectItemsRequest,
      QueryV2$2 as QueryV2,
      QueryV2PagingMethodOneOf$2 as QueryV2PagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      CursorPaging$2 as CursorPaging,
      portfolioProjectItemsV1ProjectItem_universal_d_QueryProjectItemsResponse as QueryProjectItemsResponse,
      portfolioProjectItemsV1ProjectItem_universal_d_UpdateProjectItemRequest as UpdateProjectItemRequest,
      portfolioProjectItemsV1ProjectItem_universal_d_UpdateProjectItemResponse as UpdateProjectItemResponse,
      portfolioProjectItemsV1ProjectItem_universal_d_BulkUpdateProjectItemsRequest as BulkUpdateProjectItemsRequest,
      portfolioProjectItemsV1ProjectItem_universal_d_MaskedItem as MaskedItem,
      portfolioProjectItemsV1ProjectItem_universal_d_BulkUpdateProjectItemsResponse as BulkUpdateProjectItemsResponse,
      portfolioProjectItemsV1ProjectItem_universal_d_BulkUpdateProjectItemResult as BulkUpdateProjectItemResult,
      portfolioProjectItemsV1ProjectItem_universal_d_DeleteProjectItemRequest as DeleteProjectItemRequest,
      portfolioProjectItemsV1ProjectItem_universal_d_DeleteProjectItemResponse as DeleteProjectItemResponse,
      portfolioProjectItemsV1ProjectItem_universal_d_BulkDeleteProjectItemsRequest as BulkDeleteProjectItemsRequest,
      portfolioProjectItemsV1ProjectItem_universal_d_BulkDeleteProjectItemsResponse as BulkDeleteProjectItemsResponse,
      portfolioProjectItemsV1ProjectItem_universal_d_BulkDeleteProjectItemResult as BulkDeleteProjectItemResult,
      portfolioProjectItemsV1ProjectItem_universal_d_CreateProjectGalleryRequest as CreateProjectGalleryRequest,
      portfolioProjectItemsV1ProjectItem_universal_d_CreateProjectGalleryResponse as CreateProjectGalleryResponse,
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      Empty$1 as Empty,
      portfolioProjectItemsV1ProjectItem_universal_d_DuplicateProjectItemsRequest as DuplicateProjectItemsRequest,
      portfolioProjectItemsV1ProjectItem_universal_d_DuplicateProjectItemsResponse as DuplicateProjectItemsResponse,
      MessageEnvelope$2 as MessageEnvelope,
      IdentificationData$2 as IdentificationData,
      IdentificationDataIdOneOf$2 as IdentificationDataIdOneOf,
      WebhookIdentityType$2 as WebhookIdentityType,
      portfolioProjectItemsV1ProjectItem_universal_d_generateTokenForProjectItems as generateTokenForProjectItems,
      portfolioProjectItemsV1ProjectItem_universal_d_createProjectItem as createProjectItem,
      portfolioProjectItemsV1ProjectItem_universal_d_bulkCreateProjectItems as bulkCreateProjectItems,
      portfolioProjectItemsV1ProjectItem_universal_d_BulkCreateProjectItemsOptions as BulkCreateProjectItemsOptions,
      portfolioProjectItemsV1ProjectItem_universal_d_getProjectItem as getProjectItem,
      portfolioProjectItemsV1ProjectItem_universal_d_GetProjectItemOptions as GetProjectItemOptions,
      portfolioProjectItemsV1ProjectItem_universal_d_listProjectItems as listProjectItems,
      portfolioProjectItemsV1ProjectItem_universal_d_ListProjectItemsOptions as ListProjectItemsOptions,
      portfolioProjectItemsV1ProjectItem_universal_d_queryProjectItems as queryProjectItems,
      portfolioProjectItemsV1ProjectItem_universal_d_ItemsQueryResult as ItemsQueryResult,
      portfolioProjectItemsV1ProjectItem_universal_d_ItemsQueryBuilder as ItemsQueryBuilder,
      portfolioProjectItemsV1ProjectItem_universal_d_updateProjectItem as updateProjectItem,
      portfolioProjectItemsV1ProjectItem_universal_d_UpdateProjectItem as UpdateProjectItem,
      portfolioProjectItemsV1ProjectItem_universal_d_UpdateProjectItemOptions as UpdateProjectItemOptions,
      portfolioProjectItemsV1ProjectItem_universal_d_bulkUpdateProjectItems as bulkUpdateProjectItems,
      portfolioProjectItemsV1ProjectItem_universal_d_BulkUpdateProjectItemsOptions as BulkUpdateProjectItemsOptions,
      portfolioProjectItemsV1ProjectItem_universal_d_deleteProjectItem as deleteProjectItem,
      portfolioProjectItemsV1ProjectItem_universal_d_DeleteProjectItemOptions as DeleteProjectItemOptions,
      portfolioProjectItemsV1ProjectItem_universal_d_bulkDeleteProjectItems as bulkDeleteProjectItems,
      portfolioProjectItemsV1ProjectItem_universal_d_BulkDeleteProjectItemsOptions as BulkDeleteProjectItemsOptions,
      portfolioProjectItemsV1ProjectItem_universal_d_duplicateProjectItems as duplicateProjectItems,
      portfolioProjectItemsV1ProjectItem_universal_d_DuplicateProjectItemsOptions as DuplicateProjectItemsOptions,
    };
  }
  
  /** Project is the main entity of ProjectsService */
  interface Project$1 extends ProjectCoverOneOf$1 {
      /** project's cover photo */
      coverImage?: CommonImage;
      /** project's cover video */
      coverVideo?: Video$1;
      /**
       * Project ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      title?: string | null;
      description?: string | null;
      /** indicates if the project should be hidden from Portfolio */
      hidden?: boolean | null;
      /** Collections must exist to be added to a project. can be created/updated/deleted using this //TODO */
      collectionIds?: string[];
      /** Custom project details */
      details?: ProjectDetail$1[];
      slug?: string | null;
      /**
       * Represents the time this Project was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Project was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * project source - When project is synced from external platform, this field will represent the app & source the projects synced from.
       * @internal
       */
      source?: ProjectSource$1;
      /**
       * Url and relative url of Project - in order to receive this field in READ requests you will need to pass the `include_page_url` field as part of request
       * @readonly
       */
      url?: string;
      seoData?: SeoSchema$1;
      /**
       * indicates if the project is synced from external platform (via integration page) and therefore will be updated from the external platform on daily basis
       * @readonly
       */
      syncedProject?: boolean | null;
  }
  /** @oneof */
  interface ProjectCoverOneOf$1 {
      /** project's cover photo */
      coverImage?: CommonImage;
      /** project's cover video */
      coverVideo?: Video$1;
  }
  interface CommonImage {
      /** @internal */
      type?: ImageImageType;
      /** Image info - Wix Media Image. */
      imageInfo?: string;
      /** Focal point of the image. */
      focalPoint?: CommonPoint;
      /**
       * Set of key-value pairs describing the media in [Exchangeable Image File format](https://en.wikipedia.org/wiki/Exif).
       * @internal
       */
      exif?: Record<string, any> | null;
      /**
       * Image compression level. <br />
       *
       * Min: `30` <br />
       * Max: `100`
       * @internal
       */
      quality?: number | null;
      /**
       * [Unsharp masking](https://en.wikipedia.org/wiki/Unsharp_masking) values of the image.
       * @internal
       */
      unsharpMasking?: CommonUnsharpMasking;
      /**
       * Whether the image is saved in secure media.
       * @internal
       */
      secure?: boolean | null;
      /**
       * When image is saved in secure media, token is generated.
       * @internal
       * @readonly
       */
      token?: string | null;
  }
  enum ImageImageType {
      UNDEFINED = "UNDEFINED",
      WIX_MEDIA = "WIX_MEDIA",
      EXTERNAL = "EXTERNAL"
  }
  interface CommonPoint {
      /** X-coordinate of the focal point. */
      x?: number;
      /** Y-coordinate of the focal point. */
      y?: number;
  }
  interface CommonUnsharpMasking {
      /**
       * Unsharp masking amount. Controls the sharpening strength. <br />
       *
       * Min: `0` <br />
       * Max: `5`
       */
      amount?: number | null;
      /** Unsharp masking radius in pixels. Controls the sharpening width. */
      radius?: number | null;
      /**
       * Unsharp masking threshold. Controls how different neighboring pixels must be for shapening to apply. <br />
       *
       * Min: `0` <br />
       * Max: `1`
       */
      threshold?: number | null;
  }
  interface Video$1 {
      /** Video info - Wix Media Image. */
      videoInfo?: string;
      /** Manually defined Video duration in milliseconds. */
      durationInMillis?: number | null;
  }
  interface VideoResolution$1 {
      /** Video URL.  Required. */
      url?: string;
      /** Video height. Required. */
      height?: number;
      /** Video width.  Required. */
      width?: number;
      /**
       * Video poster. Deprecated, please use the `posters` property in the parent entity
       * @internal
       */
      poster?: string;
      /** Video format for example, mp4, hls.  Required. */
      format?: string;
      /** Video quality for example 480p, 720p. */
      quality?: string | null;
      /** Video filename. */
      filename?: string | null;
  }
  interface ProjectDetail$1 extends ProjectDetailValueOneOf$1 {
      text?: string;
      link?: DetailsLink$1;
      label?: string;
  }
  /** @oneof */
  interface ProjectDetailValueOneOf$1 {
      text?: string;
      link?: DetailsLink$1;
  }
  interface DetailsLink$1 {
      text?: string | null;
      /** link to external source */
      url?: string | null;
      /**
       * Whether the link opens in a new tab or window. One of:
       * * `'_blank'`: The link opens in a new tab or window.
       * * `'_self'`: The link opens in the same tab or window.
       */
      target?: string | null;
  }
  interface ProjectSource$1 {
      appDefId?: string;
      externalId?: string;
      sourceName?: string;
      description?: string | null;
      /** link to external source */
      link?: string | null;
      syncStatus?: SyncStatus$1;
      /** fields that are synced from external source, should be blocked to update in UI */
      notEditableFields?: string[];
      /** last date the project was synced */
      lastSync?: Date;
  }
  enum SyncStatus$1 {
      SYNCED = "SYNCED",
      SYNCING = "SYNCING",
      NOT_SYNCED = "NOT_SYNCED"
  }
  /**
   * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
   * The search engines use this information for ranking purposes, or to display snippets in the search results.
   * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
   */
  interface SeoSchema$1 {
      /** SEO tag information. */
      tags?: Tag$1[];
      /** SEO general settings. */
      settings?: Settings$1;
  }
  interface Keyword$1 {
      /** Keyword value. */
      term?: string;
      /** Whether the keyword is the main focus keyword. */
      isMain?: boolean;
  }
  interface Tag$1 {
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
  interface Settings$1 {
      /**
       * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
       *
       *
       * Default: `false` (Auto Redirect is enabled.)
       */
      preventAutoRedirect?: boolean;
      /** User-selected keyword terms for a specific page. */
      keywords?: Keyword$1[];
  }
  interface MenuSettingUpdatedEvent {
  }
  interface GetProjectPageDataRequest {
      /** Slug of the project's current collection */
      collectionSlug: string;
      /** Project's slug */
      projectSlug: string;
  }
  interface GetProjectPageDataResponse {
      project?: Project$1;
      previousProject?: ProjectSlug;
      nextProject?: ProjectSlug;
  }
  interface ProjectSlug {
      /** Project id */
      projectId?: string;
      slug?: string;
  }
  interface CreateNewPortfolioAppRequest {
  }
  interface CreateNewPortfolioAppResponse {
  }
  interface MetaSiteSpecialEvent extends MetaSiteSpecialEventPayloadOneOf {
      /** Emitted on a meta site creation. */
      siteCreated?: SiteCreated;
      /** Emitted on a meta site transfer completion. */
      siteTransferred?: SiteTransferred;
      /** Emitted on a meta site deletion. */
      siteDeleted?: SiteDeleted;
      /** Emitted on a meta site restoration. */
      siteUndeleted?: SiteUndeleted;
      /** Emitted on the first* publish of the meta site (* switching from unpublished to published state). */
      sitePublished?: SitePublished;
      /** Emitted on a meta site unpublish. */
      siteUnpublished?: SiteUnpublished;
      /** Emitted when meta site is marked as template. */
      siteMarkedAsTemplate?: SiteMarkedAsTemplate;
      /** Emitted when meta site is marked as a WixSite. */
      siteMarkedAsWixSite?: SiteMarkedAsWixSite;
      /** Emitted when an application is provisioned (installed). */
      serviceProvisioned?: ServiceProvisioned;
      /** Emitted when an application is removed (uninstalled). */
      serviceRemoved?: ServiceRemoved;
      /** Emitted when meta site name (URL slug) is changed. */
      siteRenamedPayload?: SiteRenamed;
      /** Emitted when meta site was permanently deleted. */
      hardDeleted?: SiteHardDeleted;
      /** Emitted on a namespace change. */
      namespaceChanged?: NamespaceChanged;
      /** Emitted when Studio is attached. */
      studioAssigned?: StudioAssigned;
      /** Emitted when Studio is detached. */
      studioUnassigned?: StudioUnassigned;
      /** A meta site id. */
      metaSiteId?: string;
      /** A meta site version. Monotonically increasing. */
      version?: string;
      /** A timestamp of the event. */
      timestamp?: string;
      /** A list of "assets" (applications). The same as MetaSiteContext. */
      assets?: Asset[];
  }
  /** @oneof */
  interface MetaSiteSpecialEventPayloadOneOf {
      /** Emitted on a meta site creation. */
      siteCreated?: SiteCreated;
      /** Emitted on a meta site transfer completion. */
      siteTransferred?: SiteTransferred;
      /** Emitted on a meta site deletion. */
      siteDeleted?: SiteDeleted;
      /** Emitted on a meta site restoration. */
      siteUndeleted?: SiteUndeleted;
      /** Emitted on the first* publish of the meta site (* switching from unpublished to published state). */
      sitePublished?: SitePublished;
      /** Emitted on a meta site unpublish. */
      siteUnpublished?: SiteUnpublished;
      /** Emitted when meta site is marked as template. */
      siteMarkedAsTemplate?: SiteMarkedAsTemplate;
      /** Emitted when meta site is marked as a WixSite. */
      siteMarkedAsWixSite?: SiteMarkedAsWixSite;
      /** Emitted when an application is provisioned (installed). */
      serviceProvisioned?: ServiceProvisioned;
      /** Emitted when an application is removed (uninstalled). */
      serviceRemoved?: ServiceRemoved;
      /** Emitted when meta site name (URL slug) is changed. */
      siteRenamedPayload?: SiteRenamed;
      /** Emitted when meta site was permanently deleted. */
      hardDeleted?: SiteHardDeleted;
      /** Emitted on a namespace change. */
      namespaceChanged?: NamespaceChanged;
      /** Emitted when Studio is attached. */
      studioAssigned?: StudioAssigned;
      /** Emitted when Studio is detached. */
      studioUnassigned?: StudioUnassigned;
  }
  interface Asset {
      /** An application definition id (app_id in dev-center). For legacy reasons may be UUID or a string (from Java Enum). */
      appDefId?: string;
      /** An instance id. For legacy reasons may be UUID or a string. */
      instanceId?: string;
      /** An application state. */
      state?: State;
  }
  enum State {
      UNKNOWN = "UNKNOWN",
      ENABLED = "ENABLED",
      DISABLED = "DISABLED",
      PENDING = "PENDING",
      DEMO = "DEMO"
  }
  interface SiteCreated {
      /** A template identifier (empty if not created from a template). */
      originTemplateId?: string;
      /** An account id of the owner. */
      ownerId?: string;
      /** A context in which meta site was created. */
      context?: SiteCreatedContext;
      /**
       * A meta site id from which this site was created.
       *
       * In case of a creation from a template it's a template id.
       * In case of a site duplication ("Save As" in dashboard or duplicate in UM) it's an id of a source site.
       */
      originMetaSiteId?: string | null;
      /** A meta site name (URL slug). */
      siteName?: string;
      /** A namespace. */
      namespace?: Namespace;
  }
  enum SiteCreatedContext {
      /** A valid option, we don't expose all reasons why site might be created. */
      OTHER = "OTHER",
      /** A meta site was created from template. */
      FROM_TEMPLATE = "FROM_TEMPLATE",
      /** A meta site was created by copying of the transfferred meta site. */
      DUPLICATE_BY_SITE_TRANSFER = "DUPLICATE_BY_SITE_TRANSFER",
      /** A copy of existing meta site. */
      DUPLICATE = "DUPLICATE",
      /** A meta site was created as a transfferred site (copy of the original), old flow, should die soon. */
      OLD_SITE_TRANSFER = "OLD_SITE_TRANSFER",
      /** deprecated A meta site was created for Flash editor. */
      FLASH = "FLASH"
  }
  enum Namespace {
      UNKNOWN_NAMESPACE = "UNKNOWN_NAMESPACE",
      /** Default namespace for UGC sites. MetaSites with this namespace will be shown in a user's site list by default. */
      WIX = "WIX",
      /** ShoutOut stand alone product. These are siteless (no actual Wix site, no HtmlWeb). MetaSites with this namespace will *not* be shown in a user's site list by default. */
      SHOUT_OUT = "SHOUT_OUT",
      /** MetaSites created by the Albums product, they appear as part of the Albums app. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      ALBUMS = "ALBUMS",
      /** Part of the WixStores migration flow, a user tries to migrate and gets this site to view and if the user likes it then stores removes this namespace and deletes the old site with the old stores. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      WIX_STORES_TEST_DRIVE = "WIX_STORES_TEST_DRIVE",
      /** Hotels standalone (siteless). MetaSites with this namespace will *not* be shown in a user's site list by default. */
      HOTELS = "HOTELS",
      /** Clubs siteless MetaSites, a club without a wix website. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      CLUBS = "CLUBS",
      /** A partially created ADI website. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      ONBOARDING_DRAFT = "ONBOARDING_DRAFT",
      /** AppBuilder for AppStudio / shmite (c). MetaSites with this namespace will *not* be shown in a user's site list by default. */
      DEV_SITE = "DEV_SITE",
      /** LogoMaker websites offered to the user after logo purchase. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      LOGOS = "LOGOS",
      /** VideoMaker websites offered to the user after video purchase. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      VIDEO_MAKER = "VIDEO_MAKER",
      /** MetaSites with this namespace will *not* be shown in a user's site list by default. */
      PARTNER_DASHBOARD = "PARTNER_DASHBOARD",
      /** MetaSites with this namespace will *not* be shown in a user's site list by default. */
      DEV_CENTER_COMPANY = "DEV_CENTER_COMPANY",
      /**
       * A draft created by HTML editor on open. Upon "first save" it will be moved to be of WIX domain.
       *
       * Meta site with this namespace will *not* be shown in a user's site list by default.
       */
      HTML_DRAFT = "HTML_DRAFT",
      /**
       * the user-journey for Fitness users who want to start from managing their business instead of designing their website.
       * Will be accessible from Site List and will not have a website app.
       * Once the user attaches a site, the site will become a regular wixsite.
       */
      SITELESS_BUSINESS = "SITELESS_BUSINESS",
      /** Belongs to "strategic products" company. Supports new product in the creator's economy space. */
      CREATOR_ECONOMY = "CREATOR_ECONOMY",
      /** It is to be used in the Business First efforts. */
      DASHBOARD_FIRST = "DASHBOARD_FIRST",
      /** Bookings business flow with no site. */
      ANYWHERE = "ANYWHERE",
      /** Namespace for Headless Backoffice with no editor */
      HEADLESS = "HEADLESS",
      /**
       * Namespace for master site that will exist in parent account that will be referenced by subaccounts
       * The site will be used for account level CSM feature for enterprise
       */
      ACCOUNT_MASTER_CMS = "ACCOUNT_MASTER_CMS",
      /** Rise.ai Siteless account management for Gift Cards and Store Credit. */
      RISE = "RISE",
      /**
       * As part of the branded app new funnel, users now can create a meta site that will be branded app first.
       * There's a blank site behind the scene but it's blank).
       * The Mobile company will be the owner of this namespace.
       */
      BRANDED_FIRST = "BRANDED_FIRST"
  }
  /** Site transferred to another user. */
  interface SiteTransferred {
      /** A previous owner id (user that transfers meta site). */
      oldOwnerId?: string;
      /** A new owner id (user that accepts meta site). */
      newOwnerId?: string;
  }
  /** Soft deletion of the meta site. Could be restored. */
  interface SiteDeleted {
      /** A deletion context. */
      deleteContext?: DeleteContext;
  }
  interface DeleteContext {
      /** When the meta site was deleted. */
      dateDeleted?: Date;
      /** A status. */
      deleteStatus?: DeleteStatus;
      /** A reason (flow). */
      deleteOrigin?: string;
      /** A service that deleted it. */
      initiatorId?: string | null;
  }
  enum DeleteStatus {
      UNKNOWN = "UNKNOWN",
      TRASH = "TRASH",
      DELETED = "DELETED",
      PENDING_PURGE = "PENDING_PURGE"
  }
  /** Restoration of the meta site. */
  interface SiteUndeleted {
  }
  /** First publish of a meta site. Or subsequent publish after unpublish. */
  interface SitePublished {
  }
  interface SiteUnpublished {
      /** A list of URLs previously associated with the meta site. */
      urls?: string[];
  }
  interface SiteMarkedAsTemplate {
  }
  interface SiteMarkedAsWixSite {
  }
  interface ServiceProvisioned {
      /** Either UUID or EmbeddedServiceType. */
      appDefId?: string;
      /** Not only UUID. Something here could be something weird. */
      instanceId?: string;
      /** An instance id from which this instance is originated. */
      originInstanceId?: string;
      /** A version. */
      version?: string | null;
  }
  interface ServiceRemoved {
      /** Either UUID or EmbeddedServiceType. */
      appDefId?: string;
      /** Not only UUID. Something here could be something weird. */
      instanceId?: string;
      /** A version. */
      version?: string | null;
  }
  /** Rename of the site. Meaning, free public url has been changed as well. */
  interface SiteRenamed {
      /** A new meta site name (URL slug). */
      newSiteName?: string;
      /** A previous meta site name (URL slug). */
      oldSiteName?: string;
  }
  /**
   * Hard deletion of the meta site.
   *
   * Could not be restored. Therefore it's desirable to cleanup data.
   */
  interface SiteHardDeleted {
      /** A deletion context. */
      deleteContext?: DeleteContext;
  }
  interface NamespaceChanged {
      /** A previous namespace. */
      oldNamespace?: Namespace;
      /** A new namespace. */
      newNamespace?: Namespace;
  }
  /** Assigned Studio editor */
  interface StudioAssigned {
  }
  /** Unassigned Studio editor */
  interface StudioUnassigned {
  }
  interface Empty {
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
  interface SyncProjectWithCollectionMappings {
      /** Id of recently updated Project */
      projectId?: string;
      /** fields that were updated in the given project */
      fieldMaskPaths?: string[];
  }
  interface CreateProjectRequest {
      /** Project to be created */
      project: Project$1;
  }
  interface CreateProjectResponse {
      /** The created Project */
      project?: Project$1;
  }
  interface GetProjectRequest {
      /** Id of the Project to retrieve */
      projectId: string;
      includePageUrl?: boolean | null;
  }
  interface GetProjectResponse {
      /** The retrieved Project */
      project?: Project$1;
  }
  interface ListProjectsRequest {
      /** Projects limit per response is maximum 100, In the first request the cursor is None */
      paging?: CursorPaging$1;
      includePageUrl?: boolean | null;
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
  interface ListProjectsResponse {
      /** The retrieved Projects */
      projects?: Project$1[];
      /**
       * Paging metadata
       * @internal
       */
      pagingMetadataV2?: PagingMetadataV2$1;
      /** Paging metadata */
      metadata?: PagingMetadataV2$1;
  }
  interface PagingMetadataV2$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$1;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface UpdateProjectRequest {
      /** Project to be updated, may be partial */
      project: Project$1;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface UpdateProjectResponse {
      /** The updated Project */
      project?: Project$1;
  }
  interface BulkUpdateProjectsRequest {
      /** projects to be updated. */
      projects?: MaskedProject[];
      returnFullEntity?: boolean | null;
  }
  interface MaskedProject {
      project?: Project$1;
      /** @internal */
      fieldMask?: string[];
  }
  interface BulkUpdateProjectsResponse {
      /** Array with all updated items results. */
      results?: BulkUpdateProjectsResult[];
      /** Holds metadata of the entire bulk update operation */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkUpdateProjectsResult {
      /** Holds information about an item in bulk update - id, index in original request array, action successful, error (if failed). */
      itemMetadata?: ItemMetadata;
      project?: Project$1;
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
  interface DeleteProjectRequest {
      /** Id of the Project to delete */
      projectId: string;
      /**
       * The revision of the Project
       * @internal
       */
      revision?: string;
  }
  interface DeleteProjectResponse {
      /** Id of the deleted Project */
      projectId?: string;
  }
  interface QueryProjectsRequest {
      /** WQL expression */
      query: QueryV2$1;
      includePageUrl?: boolean | null;
  }
  interface QueryV2$1 extends QueryV2PagingMethodOneOf$1 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
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
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$1 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
  }
  interface Sorting$1 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$1;
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
  enum SortOrder$1 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging$1 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryProjectsResponse {
      /** The retrieved Projects */
      projects?: Project$1[];
      /**
       * Paging metadata
       * @internal
       */
      pagingMetadataV2?: PagingMetadataV2$1;
      /** Paging metadata */
      metadata?: PagingMetadataV2$1;
  }
  interface UpdateProjectOrderInCollectionRequest$1 {
      /** Id of the Project to update its order */
      projectId: string;
      /** Id of the collection in which the project will be re-ordered */
      collectionId: string;
      /** The new sort order of the project in the given collection */
      sortOrder: number | null;
  }
  interface UpdateProjectOrderInCollectionResponse$1 {
      /** @internal */
      project?: ProjectInCollection$1;
      /** project with new sort order set */
      projectInCollection?: ProjectInCollection$1;
  }
  interface ProjectInCollection$1 {
      /** Collection ID */
      collectionId?: string;
      /** Project */
      project?: Project$1;
      /** The sort order of the project in the given Collection */
      sortOrder?: number | null;
  }
  interface QueryProjectWithCollectionInfoRequest {
      /** WQL expression */
      query: QueryV2$1;
      includePageUrl?: boolean | null;
  }
  interface QueryProjectWithCollectionInfoResponse {
      /** The retrieved Projects in Collection */
      projects?: ProjectInCollection$1[];
      /**
       * Paging metadata
       * @internal
       */
      pagingMetadataV2?: PagingMetadataV2$1;
      /** Paging metadata */
      metadata?: PagingMetadataV2$1;
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
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.collectionSlug
   * @requiredField identifiers.projectSlug
   */
  function getProjectPageData(identifiers: GetProjectPageDataIdentifiers): Promise<GetProjectPageDataResponse>;
  interface GetProjectPageDataIdentifiers {
      /** Slug of the project's current collection */
      collectionSlug: string;
      /** Project's slug */
      projectSlug: string;
  }
  /**
   * create default Portfolio data
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function createNewPortfolioApp(): Promise<void>;
  /**
   * Creates a new Project
   * @param project - Project to be created
   * @public
   * @documentationMaturity preview
   * @requiredField project
   * @adminMethod
   * @returns The created Project
   */
  function createProject(project: Project$1): Promise<Project$1>;
  /**
   * Get a Project by id
   * @param projectId - Id of the Project to retrieve
   * @public
   * @documentationMaturity preview
   * @requiredField projectId
   * @returns The retrieved Project
   */
  function getProject(projectId: string, options?: GetProjectOptions): Promise<Project$1>;
  interface GetProjectOptions {
      includePageUrl?: boolean | null;
  }
  /**
   * List all projects in portfolio by creation date
   * @public
   * @documentationMaturity preview
   */
  function listProjects(options?: ListProjectsOptions): Promise<ListProjectsResponse>;
  interface ListProjectsOptions {
      /** Projects limit per response is maximum 100, In the first request the cursor is None */
      paging?: CursorPaging$1;
      includePageUrl?: boolean | null;
  }
  /**
   * Update a Project, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - Project ID
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField project
   * @requiredField project.revision
   * @adminMethod
   * @returns The updated Project
   */
  function updateProject(_id: string | null, project: UpdateProject, options?: UpdateProjectOptions): Promise<Project$1>;
  interface UpdateProject {
      /** project's cover photo */
      coverImage?: CommonImage;
      /** project's cover video */
      coverVideo?: Video$1;
      /**
       * Project ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      title?: string | null;
      description?: string | null;
      /** indicates if the project should be hidden from Portfolio */
      hidden?: boolean | null;
      /** Collections must exist to be added to a project. can be created/updated/deleted using this //TODO */
      collectionIds?: string[];
      /** Custom project details */
      details?: ProjectDetail$1[];
      slug?: string | null;
      /**
       * Represents the time this Project was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Project was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * project source - When project is synced from external platform, this field will represent the app & source the projects synced from.
       * @internal
       */
      source?: ProjectSource$1;
      /**
       * Url and relative url of Project - in order to receive this field in READ requests you will need to pass the `include_page_url` field as part of request
       * @readonly
       */
      url?: string;
      seoData?: SeoSchema$1;
      /**
       * indicates if the project is synced from external platform (via integration page) and therefore will be updated from the external platform on daily basis
       * @readonly
       */
      syncedProject?: boolean | null;
  }
  interface UpdateProjectOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  /**
   * Update Projects in bulk
   * @internal
   * @documentationMaturity preview
   * @requiredField options.projects.project
   * @requiredField options.projects.project._id
   * @requiredField options.projects.project.revision
   * @adminMethod
   */
  function bulkUpdateProjects(options?: BulkUpdateProjectsOptions): Promise<BulkUpdateProjectsResponse>;
  interface BulkUpdateProjectsOptions {
      /** projects to be updated. */
      projects?: MaskedProject[];
      returnFullEntity?: boolean | null;
  }
  /**
   * Delete a Project
   * @param projectId - Id of the Project to delete
   * @public
   * @documentationMaturity preview
   * @requiredField projectId
   * @adminMethod
   */
  function deleteProject(projectId: string, options?: DeleteProjectOptions): Promise<DeleteProjectResponse>;
  interface DeleteProjectOptions {
      /**
       * The revision of the Project
       * @internal
       */
      revision?: string;
  }
  /**
   * Query Projects using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @public
   * @documentationMaturity preview
   */
  function queryProjects(options?: QueryProjectsOptions): ProjectsQueryBuilder;
  interface QueryProjectsOptions {
      includePageUrl?: boolean | null | undefined;
  }
  interface QueryCursorResult$1 {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ProjectsQueryResult extends QueryCursorResult$1 {
      items: Project$1[];
      query: ProjectsQueryBuilder;
      next: () => Promise<ProjectsQueryResult>;
      prev: () => Promise<ProjectsQueryResult>;
  }
  interface ProjectsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'title' | 'description' | 'hidden' | 'collectionIds' | 'slug' | '_createdDate' | '_updatedDate', value: any) => ProjectsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'title' | 'description' | 'hidden' | 'collectionIds' | 'slug' | '_createdDate' | '_updatedDate', value: any) => ProjectsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => ProjectsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ProjectsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => ProjectsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ProjectsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'title' | 'description' | 'slug', value: string) => ProjectsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | 'title' | 'description' | 'hidden' | 'collectionIds' | 'slug' | '_createdDate' | '_updatedDate', value: any[]) => ProjectsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasAll: (propertyName: 'collectionIds', value: any[]) => ProjectsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'title' | 'description' | 'hidden' | 'collectionIds' | 'slug' | '_createdDate' | '_updatedDate', value: any) => ProjectsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | 'title' | 'description' | 'hidden' | 'collectionIds' | 'slug' | '_createdDate' | '_updatedDate', value: boolean) => ProjectsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'title' | 'description' | 'slug' | '_createdDate' | '_updatedDate'>) => ProjectsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'title' | 'description' | 'slug' | '_createdDate' | '_updatedDate'>) => ProjectsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ProjectsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ProjectsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ProjectsQueryResult>;
  }
  /**
   * Deprecated - please use ProjectsInCollectionsService.UpdateProjectOrderInCollection instead
   * our Client still use it
   * @param sortOrder - The new sort order of the project in the given collection
   * @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.collectionId
   * @requiredField identifiers.projectId
   * @requiredField sortOrder
   * @adminMethod
   */
  function updateProjectOrderInCollection$1(identifiers: UpdateProjectOrderInCollectionIdentifiers$1, sortOrder: number | null): Promise<UpdateProjectOrderInCollectionResponse$1>;
  interface UpdateProjectOrderInCollectionIdentifiers$1 {
      /** Id of the Project to update its order */
      projectId: string;
      /** Id of the collection in which the project will be re-ordered */
      collectionId: string;
  }
  /**
   * Deprecated - please use ProjectsInCollectionsService.QueryProjectsInCollections instead
   * our Client still use it
   * @param query - WQL expression
   * @internal
   * @documentationMaturity preview
   * @requiredField query
   */
  function queryProjectsWithCollectionInfo(query: QueryV2$1, options?: QueryProjectsWithCollectionInfoOptions): Promise<QueryProjectWithCollectionInfoResponse>;
  interface QueryProjectsWithCollectionInfoOptions {
      includePageUrl?: boolean | null;
  }
  
  type portfolioProjectsV1Project_universal_d_CommonImage = CommonImage;
  type portfolioProjectsV1Project_universal_d_ImageImageType = ImageImageType;
  const portfolioProjectsV1Project_universal_d_ImageImageType: typeof ImageImageType;
  type portfolioProjectsV1Project_universal_d_CommonPoint = CommonPoint;
  type portfolioProjectsV1Project_universal_d_CommonUnsharpMasking = CommonUnsharpMasking;
  type portfolioProjectsV1Project_universal_d_MenuSettingUpdatedEvent = MenuSettingUpdatedEvent;
  type portfolioProjectsV1Project_universal_d_GetProjectPageDataRequest = GetProjectPageDataRequest;
  type portfolioProjectsV1Project_universal_d_GetProjectPageDataResponse = GetProjectPageDataResponse;
  type portfolioProjectsV1Project_universal_d_ProjectSlug = ProjectSlug;
  type portfolioProjectsV1Project_universal_d_CreateNewPortfolioAppRequest = CreateNewPortfolioAppRequest;
  type portfolioProjectsV1Project_universal_d_CreateNewPortfolioAppResponse = CreateNewPortfolioAppResponse;
  type portfolioProjectsV1Project_universal_d_MetaSiteSpecialEvent = MetaSiteSpecialEvent;
  type portfolioProjectsV1Project_universal_d_MetaSiteSpecialEventPayloadOneOf = MetaSiteSpecialEventPayloadOneOf;
  type portfolioProjectsV1Project_universal_d_Asset = Asset;
  type portfolioProjectsV1Project_universal_d_State = State;
  const portfolioProjectsV1Project_universal_d_State: typeof State;
  type portfolioProjectsV1Project_universal_d_SiteCreated = SiteCreated;
  type portfolioProjectsV1Project_universal_d_SiteCreatedContext = SiteCreatedContext;
  const portfolioProjectsV1Project_universal_d_SiteCreatedContext: typeof SiteCreatedContext;
  type portfolioProjectsV1Project_universal_d_Namespace = Namespace;
  const portfolioProjectsV1Project_universal_d_Namespace: typeof Namespace;
  type portfolioProjectsV1Project_universal_d_SiteTransferred = SiteTransferred;
  type portfolioProjectsV1Project_universal_d_SiteDeleted = SiteDeleted;
  type portfolioProjectsV1Project_universal_d_DeleteContext = DeleteContext;
  type portfolioProjectsV1Project_universal_d_DeleteStatus = DeleteStatus;
  const portfolioProjectsV1Project_universal_d_DeleteStatus: typeof DeleteStatus;
  type portfolioProjectsV1Project_universal_d_SiteUndeleted = SiteUndeleted;
  type portfolioProjectsV1Project_universal_d_SitePublished = SitePublished;
  type portfolioProjectsV1Project_universal_d_SiteUnpublished = SiteUnpublished;
  type portfolioProjectsV1Project_universal_d_SiteMarkedAsTemplate = SiteMarkedAsTemplate;
  type portfolioProjectsV1Project_universal_d_SiteMarkedAsWixSite = SiteMarkedAsWixSite;
  type portfolioProjectsV1Project_universal_d_ServiceProvisioned = ServiceProvisioned;
  type portfolioProjectsV1Project_universal_d_ServiceRemoved = ServiceRemoved;
  type portfolioProjectsV1Project_universal_d_SiteRenamed = SiteRenamed;
  type portfolioProjectsV1Project_universal_d_SiteHardDeleted = SiteHardDeleted;
  type portfolioProjectsV1Project_universal_d_NamespaceChanged = NamespaceChanged;
  type portfolioProjectsV1Project_universal_d_StudioAssigned = StudioAssigned;
  type portfolioProjectsV1Project_universal_d_StudioUnassigned = StudioUnassigned;
  type portfolioProjectsV1Project_universal_d_Empty = Empty;
  type portfolioProjectsV1Project_universal_d_InvalidateCache = InvalidateCache;
  type portfolioProjectsV1Project_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type portfolioProjectsV1Project_universal_d_App = App;
  type portfolioProjectsV1Project_universal_d_Page = Page;
  type portfolioProjectsV1Project_universal_d_URI = URI;
  type portfolioProjectsV1Project_universal_d_File = File;
  type portfolioProjectsV1Project_universal_d_SyncProjectWithCollectionMappings = SyncProjectWithCollectionMappings;
  type portfolioProjectsV1Project_universal_d_CreateProjectRequest = CreateProjectRequest;
  type portfolioProjectsV1Project_universal_d_CreateProjectResponse = CreateProjectResponse;
  type portfolioProjectsV1Project_universal_d_GetProjectRequest = GetProjectRequest;
  type portfolioProjectsV1Project_universal_d_GetProjectResponse = GetProjectResponse;
  type portfolioProjectsV1Project_universal_d_ListProjectsRequest = ListProjectsRequest;
  type portfolioProjectsV1Project_universal_d_ListProjectsResponse = ListProjectsResponse;
  type portfolioProjectsV1Project_universal_d_UpdateProjectRequest = UpdateProjectRequest;
  type portfolioProjectsV1Project_universal_d_UpdateProjectResponse = UpdateProjectResponse;
  type portfolioProjectsV1Project_universal_d_BulkUpdateProjectsRequest = BulkUpdateProjectsRequest;
  type portfolioProjectsV1Project_universal_d_MaskedProject = MaskedProject;
  type portfolioProjectsV1Project_universal_d_BulkUpdateProjectsResponse = BulkUpdateProjectsResponse;
  type portfolioProjectsV1Project_universal_d_BulkUpdateProjectsResult = BulkUpdateProjectsResult;
  type portfolioProjectsV1Project_universal_d_ItemMetadata = ItemMetadata;
  type portfolioProjectsV1Project_universal_d_ApplicationError = ApplicationError;
  type portfolioProjectsV1Project_universal_d_BulkActionMetadata = BulkActionMetadata;
  type portfolioProjectsV1Project_universal_d_DeleteProjectRequest = DeleteProjectRequest;
  type portfolioProjectsV1Project_universal_d_DeleteProjectResponse = DeleteProjectResponse;
  type portfolioProjectsV1Project_universal_d_QueryProjectsRequest = QueryProjectsRequest;
  type portfolioProjectsV1Project_universal_d_QueryProjectsResponse = QueryProjectsResponse;
  type portfolioProjectsV1Project_universal_d_QueryProjectWithCollectionInfoRequest = QueryProjectWithCollectionInfoRequest;
  type portfolioProjectsV1Project_universal_d_QueryProjectWithCollectionInfoResponse = QueryProjectWithCollectionInfoResponse;
  const portfolioProjectsV1Project_universal_d_getProjectPageData: typeof getProjectPageData;
  type portfolioProjectsV1Project_universal_d_GetProjectPageDataIdentifiers = GetProjectPageDataIdentifiers;
  const portfolioProjectsV1Project_universal_d_createNewPortfolioApp: typeof createNewPortfolioApp;
  const portfolioProjectsV1Project_universal_d_createProject: typeof createProject;
  const portfolioProjectsV1Project_universal_d_getProject: typeof getProject;
  type portfolioProjectsV1Project_universal_d_GetProjectOptions = GetProjectOptions;
  const portfolioProjectsV1Project_universal_d_listProjects: typeof listProjects;
  type portfolioProjectsV1Project_universal_d_ListProjectsOptions = ListProjectsOptions;
  const portfolioProjectsV1Project_universal_d_updateProject: typeof updateProject;
  type portfolioProjectsV1Project_universal_d_UpdateProject = UpdateProject;
  type portfolioProjectsV1Project_universal_d_UpdateProjectOptions = UpdateProjectOptions;
  const portfolioProjectsV1Project_universal_d_bulkUpdateProjects: typeof bulkUpdateProjects;
  type portfolioProjectsV1Project_universal_d_BulkUpdateProjectsOptions = BulkUpdateProjectsOptions;
  const portfolioProjectsV1Project_universal_d_deleteProject: typeof deleteProject;
  type portfolioProjectsV1Project_universal_d_DeleteProjectOptions = DeleteProjectOptions;
  const portfolioProjectsV1Project_universal_d_queryProjects: typeof queryProjects;
  type portfolioProjectsV1Project_universal_d_QueryProjectsOptions = QueryProjectsOptions;
  type portfolioProjectsV1Project_universal_d_ProjectsQueryResult = ProjectsQueryResult;
  type portfolioProjectsV1Project_universal_d_ProjectsQueryBuilder = ProjectsQueryBuilder;
  const portfolioProjectsV1Project_universal_d_queryProjectsWithCollectionInfo: typeof queryProjectsWithCollectionInfo;
  type portfolioProjectsV1Project_universal_d_QueryProjectsWithCollectionInfoOptions = QueryProjectsWithCollectionInfoOptions;
  namespace portfolioProjectsV1Project_universal_d {
    export {
      Project$1 as Project,
      ProjectCoverOneOf$1 as ProjectCoverOneOf,
      portfolioProjectsV1Project_universal_d_CommonImage as CommonImage,
      portfolioProjectsV1Project_universal_d_ImageImageType as ImageImageType,
      portfolioProjectsV1Project_universal_d_CommonPoint as CommonPoint,
      portfolioProjectsV1Project_universal_d_CommonUnsharpMasking as CommonUnsharpMasking,
      Video$1 as Video,
      VideoResolution$1 as VideoResolution,
      ProjectDetail$1 as ProjectDetail,
      ProjectDetailValueOneOf$1 as ProjectDetailValueOneOf,
      DetailsLink$1 as DetailsLink,
      ProjectSource$1 as ProjectSource,
      SyncStatus$1 as SyncStatus,
      SeoSchema$1 as SeoSchema,
      Keyword$1 as Keyword,
      Tag$1 as Tag,
      Settings$1 as Settings,
      portfolioProjectsV1Project_universal_d_MenuSettingUpdatedEvent as MenuSettingUpdatedEvent,
      portfolioProjectsV1Project_universal_d_GetProjectPageDataRequest as GetProjectPageDataRequest,
      portfolioProjectsV1Project_universal_d_GetProjectPageDataResponse as GetProjectPageDataResponse,
      portfolioProjectsV1Project_universal_d_ProjectSlug as ProjectSlug,
      portfolioProjectsV1Project_universal_d_CreateNewPortfolioAppRequest as CreateNewPortfolioAppRequest,
      portfolioProjectsV1Project_universal_d_CreateNewPortfolioAppResponse as CreateNewPortfolioAppResponse,
      portfolioProjectsV1Project_universal_d_MetaSiteSpecialEvent as MetaSiteSpecialEvent,
      portfolioProjectsV1Project_universal_d_MetaSiteSpecialEventPayloadOneOf as MetaSiteSpecialEventPayloadOneOf,
      portfolioProjectsV1Project_universal_d_Asset as Asset,
      portfolioProjectsV1Project_universal_d_State as State,
      portfolioProjectsV1Project_universal_d_SiteCreated as SiteCreated,
      portfolioProjectsV1Project_universal_d_SiteCreatedContext as SiteCreatedContext,
      portfolioProjectsV1Project_universal_d_Namespace as Namespace,
      portfolioProjectsV1Project_universal_d_SiteTransferred as SiteTransferred,
      portfolioProjectsV1Project_universal_d_SiteDeleted as SiteDeleted,
      portfolioProjectsV1Project_universal_d_DeleteContext as DeleteContext,
      portfolioProjectsV1Project_universal_d_DeleteStatus as DeleteStatus,
      portfolioProjectsV1Project_universal_d_SiteUndeleted as SiteUndeleted,
      portfolioProjectsV1Project_universal_d_SitePublished as SitePublished,
      portfolioProjectsV1Project_universal_d_SiteUnpublished as SiteUnpublished,
      portfolioProjectsV1Project_universal_d_SiteMarkedAsTemplate as SiteMarkedAsTemplate,
      portfolioProjectsV1Project_universal_d_SiteMarkedAsWixSite as SiteMarkedAsWixSite,
      portfolioProjectsV1Project_universal_d_ServiceProvisioned as ServiceProvisioned,
      portfolioProjectsV1Project_universal_d_ServiceRemoved as ServiceRemoved,
      portfolioProjectsV1Project_universal_d_SiteRenamed as SiteRenamed,
      portfolioProjectsV1Project_universal_d_SiteHardDeleted as SiteHardDeleted,
      portfolioProjectsV1Project_universal_d_NamespaceChanged as NamespaceChanged,
      portfolioProjectsV1Project_universal_d_StudioAssigned as StudioAssigned,
      portfolioProjectsV1Project_universal_d_StudioUnassigned as StudioUnassigned,
      portfolioProjectsV1Project_universal_d_Empty as Empty,
      MessageEnvelope$1 as MessageEnvelope,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
      portfolioProjectsV1Project_universal_d_InvalidateCache as InvalidateCache,
      portfolioProjectsV1Project_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      portfolioProjectsV1Project_universal_d_App as App,
      portfolioProjectsV1Project_universal_d_Page as Page,
      portfolioProjectsV1Project_universal_d_URI as URI,
      portfolioProjectsV1Project_universal_d_File as File,
      portfolioProjectsV1Project_universal_d_SyncProjectWithCollectionMappings as SyncProjectWithCollectionMappings,
      portfolioProjectsV1Project_universal_d_CreateProjectRequest as CreateProjectRequest,
      portfolioProjectsV1Project_universal_d_CreateProjectResponse as CreateProjectResponse,
      portfolioProjectsV1Project_universal_d_GetProjectRequest as GetProjectRequest,
      portfolioProjectsV1Project_universal_d_GetProjectResponse as GetProjectResponse,
      portfolioProjectsV1Project_universal_d_ListProjectsRequest as ListProjectsRequest,
      CursorPaging$1 as CursorPaging,
      portfolioProjectsV1Project_universal_d_ListProjectsResponse as ListProjectsResponse,
      PagingMetadataV2$1 as PagingMetadataV2,
      Cursors$1 as Cursors,
      portfolioProjectsV1Project_universal_d_UpdateProjectRequest as UpdateProjectRequest,
      portfolioProjectsV1Project_universal_d_UpdateProjectResponse as UpdateProjectResponse,
      portfolioProjectsV1Project_universal_d_BulkUpdateProjectsRequest as BulkUpdateProjectsRequest,
      portfolioProjectsV1Project_universal_d_MaskedProject as MaskedProject,
      portfolioProjectsV1Project_universal_d_BulkUpdateProjectsResponse as BulkUpdateProjectsResponse,
      portfolioProjectsV1Project_universal_d_BulkUpdateProjectsResult as BulkUpdateProjectsResult,
      portfolioProjectsV1Project_universal_d_ItemMetadata as ItemMetadata,
      portfolioProjectsV1Project_universal_d_ApplicationError as ApplicationError,
      portfolioProjectsV1Project_universal_d_BulkActionMetadata as BulkActionMetadata,
      portfolioProjectsV1Project_universal_d_DeleteProjectRequest as DeleteProjectRequest,
      portfolioProjectsV1Project_universal_d_DeleteProjectResponse as DeleteProjectResponse,
      portfolioProjectsV1Project_universal_d_QueryProjectsRequest as QueryProjectsRequest,
      QueryV2$1 as QueryV2,
      QueryV2PagingMethodOneOf$1 as QueryV2PagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      Paging$1 as Paging,
      portfolioProjectsV1Project_universal_d_QueryProjectsResponse as QueryProjectsResponse,
      UpdateProjectOrderInCollectionRequest$1 as UpdateProjectOrderInCollectionRequest,
      UpdateProjectOrderInCollectionResponse$1 as UpdateProjectOrderInCollectionResponse,
      ProjectInCollection$1 as ProjectInCollection,
      portfolioProjectsV1Project_universal_d_QueryProjectWithCollectionInfoRequest as QueryProjectWithCollectionInfoRequest,
      portfolioProjectsV1Project_universal_d_QueryProjectWithCollectionInfoResponse as QueryProjectWithCollectionInfoResponse,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      portfolioProjectsV1Project_universal_d_getProjectPageData as getProjectPageData,
      portfolioProjectsV1Project_universal_d_GetProjectPageDataIdentifiers as GetProjectPageDataIdentifiers,
      portfolioProjectsV1Project_universal_d_createNewPortfolioApp as createNewPortfolioApp,
      portfolioProjectsV1Project_universal_d_createProject as createProject,
      portfolioProjectsV1Project_universal_d_getProject as getProject,
      portfolioProjectsV1Project_universal_d_GetProjectOptions as GetProjectOptions,
      portfolioProjectsV1Project_universal_d_listProjects as listProjects,
      portfolioProjectsV1Project_universal_d_ListProjectsOptions as ListProjectsOptions,
      portfolioProjectsV1Project_universal_d_updateProject as updateProject,
      portfolioProjectsV1Project_universal_d_UpdateProject as UpdateProject,
      portfolioProjectsV1Project_universal_d_UpdateProjectOptions as UpdateProjectOptions,
      portfolioProjectsV1Project_universal_d_bulkUpdateProjects as bulkUpdateProjects,
      portfolioProjectsV1Project_universal_d_BulkUpdateProjectsOptions as BulkUpdateProjectsOptions,
      portfolioProjectsV1Project_universal_d_deleteProject as deleteProject,
      portfolioProjectsV1Project_universal_d_DeleteProjectOptions as DeleteProjectOptions,
      portfolioProjectsV1Project_universal_d_queryProjects as queryProjects,
      portfolioProjectsV1Project_universal_d_QueryProjectsOptions as QueryProjectsOptions,
      portfolioProjectsV1Project_universal_d_ProjectsQueryResult as ProjectsQueryResult,
      portfolioProjectsV1Project_universal_d_ProjectsQueryBuilder as ProjectsQueryBuilder,
      updateProjectOrderInCollection$1 as updateProjectOrderInCollection,
      UpdateProjectOrderInCollectionIdentifiers$1 as UpdateProjectOrderInCollectionIdentifiers,
      portfolioProjectsV1Project_universal_d_queryProjectsWithCollectionInfo as queryProjectsWithCollectionInfo,
      portfolioProjectsV1Project_universal_d_QueryProjectsWithCollectionInfoOptions as QueryProjectsWithCollectionInfoOptions,
    };
  }
  
  interface ProjectInCollection {
      /** Collection ID */
      collectionId?: string;
      /** Project */
      project?: Project;
      /** The sort order of the project in the given Collection */
      sortOrder?: number | null;
  }
  /** Project is the main entity of ProjectsService */
  interface Project extends ProjectCoverOneOf {
      /** project's cover photo */
      coverImage?: Image;
      /** project's cover video */
      coverVideo?: Video;
      /**
       * Project ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      title?: string | null;
      description?: string | null;
      /** indicates if the project should be hidden from Portfolio */
      hidden?: boolean | null;
      /** Collections must exist to be added to a project. can be created/updated/deleted using this //TODO */
      collectionIds?: string[];
      /** Custom project details */
      details?: ProjectDetail[];
      slug?: string | null;
      /**
       * Represents the time this Project was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Project was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * project source - When project is synced from external platform, this field will represent the app & source the projects synced from.
       * @internal
       */
      source?: ProjectSource;
      /**
       * Url and relative url of Project - in order to receive this field in READ requests you will need to pass the `include_page_url` field as part of request
       * @readonly
       */
      url?: string;
      seoData?: SeoSchema;
      /**
       * indicates if the project is synced from external platform (via integration page) and therefore will be updated from the external platform on daily basis
       * @readonly
       */
      syncedProject?: boolean | null;
  }
  /** @oneof */
  interface ProjectCoverOneOf {
      /** project's cover photo */
      coverImage?: Image;
      /** project's cover video */
      coverVideo?: Video;
  }
  interface Image {
      /** @internal */
      type?: ImageType;
      /** Image info - Wix Media Image. */
      imageInfo?: string;
      /** Focal point of the image. */
      focalPoint?: Point;
      /**
       * Set of key-value pairs describing the media in [Exchangeable Image File format](https://en.wikipedia.org/wiki/Exif).
       * @internal
       */
      exif?: Record<string, any> | null;
      /**
       * Image compression level. <br />
       *
       * Min: `30` <br />
       * Max: `100`
       * @internal
       */
      quality?: number | null;
      /**
       * [Unsharp masking](https://en.wikipedia.org/wiki/Unsharp_masking) values of the image.
       * @internal
       */
      unsharpMasking?: UnsharpMasking;
      /**
       * Whether the image is saved in secure media.
       * @internal
       */
      secure?: boolean | null;
      /**
       * When image is saved in secure media, token is generated.
       * @internal
       * @readonly
       */
      token?: string | null;
  }
  enum ImageType {
      UNDEFINED = "UNDEFINED",
      WIX_MEDIA = "WIX_MEDIA",
      EXTERNAL = "EXTERNAL"
  }
  interface Point {
      /** X-coordinate of the focal point. */
      x?: number;
      /** Y-coordinate of the focal point. */
      y?: number;
  }
  interface UnsharpMasking {
      /**
       * Unsharp masking amount. Controls the sharpening strength. <br />
       *
       * Min: `0` <br />
       * Max: `5`
       */
      amount?: number | null;
      /** Unsharp masking radius in pixels. Controls the sharpening width. */
      radius?: number | null;
      /**
       * Unsharp masking threshold. Controls how different neighboring pixels must be for shapening to apply. <br />
       *
       * Min: `0` <br />
       * Max: `1`
       */
      threshold?: number | null;
  }
  interface Video {
      /** Video info - Wix Media Image. */
      videoInfo?: string;
      /** Manually defined Video duration in milliseconds. */
      durationInMillis?: number | null;
  }
  interface VideoResolution {
      /** Video URL.  Required. */
      url?: string;
      /** Video height. Required. */
      height?: number;
      /** Video width.  Required. */
      width?: number;
      /**
       * Video poster. Deprecated, please use the `posters` property in the parent entity
       * @internal
       */
      poster?: string;
      /** Video format for example, mp4, hls.  Required. */
      format?: string;
      /** Video quality for example 480p, 720p. */
      quality?: string | null;
      /** Video filename. */
      filename?: string | null;
  }
  interface ProjectDetail extends ProjectDetailValueOneOf {
      text?: string;
      link?: DetailsLink;
      label?: string;
  }
  /** @oneof */
  interface ProjectDetailValueOneOf {
      text?: string;
      link?: DetailsLink;
  }
  interface DetailsLink {
      text?: string | null;
      /** link to external source */
      url?: string | null;
      /**
       * Whether the link opens in a new tab or window. One of:
       * * `'_blank'`: The link opens in a new tab or window.
       * * `'_self'`: The link opens in the same tab or window.
       */
      target?: string | null;
  }
  interface ProjectSource {
      appDefId?: string;
      externalId?: string;
      sourceName?: string;
      description?: string | null;
      /** link to external source */
      link?: string | null;
      syncStatus?: SyncStatus;
      /** fields that are synced from external source, should be blocked to update in UI */
      notEditableFields?: string[];
      /** last date the project was synced */
      lastSync?: Date;
  }
  enum SyncStatus {
      SYNCED = "SYNCED",
      SYNCING = "SYNCING",
      NOT_SYNCED = "NOT_SYNCED"
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
  interface QueryProjectInCollectionsRequest {
      /** WQL expression */
      query: QueryV2;
      includePageUrl?: boolean | null;
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
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
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
  interface QueryProjectInCollectionsResponse {
      /** The retrieved Projects in Collections context */
      projectInCollections?: ProjectInCollection[];
      /** Paging metadata */
      metadata?: PagingMetadataV2;
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
  interface UpdateProjectOrderInCollectionRequest {
      /** Id of the Project to update its order */
      projectId: string;
      /** Id of the collection in which the project will be re-ordered */
      collectionId: string;
      /** The new sort order of the project in the given collection */
      sortOrder: number | null;
  }
  interface UpdateProjectOrderInCollectionResponse {
      /** @internal */
      project?: ProjectInCollection;
      /** project with new sort order set */
      projectInCollection?: ProjectInCollection;
  }
  interface ProjectOrderInCollectionUpdatedEvent {
      /** Id of the Project to update its order */
      projectId?: string;
      /** Id of the collection in which the project will be re-ordered */
      collectionId?: string;
      /** The new sort order of the project in the given collection */
      sortOrder?: number | null;
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
   * Query project in collection context using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   *
   * Because project can be ordered different in each collection, use this when want to query the projects in a Collection ordered by the order in given collection
   *
   * Supported Fields for query and ordering: collectionId, project.id, sortOrder, project.hidden, project.slug
   *
   * If you want to Query project by Project properties please use ProjectsService.Query method - link //TODO
   * @public
   * @documentationMaturity preview
   */
  function queryProjectInCollections(options?: QueryProjectInCollectionsOptions): ProjectInCollectionsQueryBuilder;
  interface QueryProjectInCollectionsOptions {
      includePageUrl?: boolean | null | undefined;
  }
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ProjectInCollectionsQueryResult extends QueryCursorResult {
      items: ProjectInCollection[];
      query: ProjectInCollectionsQueryBuilder;
      next: () => Promise<ProjectInCollectionsQueryResult>;
      prev: () => Promise<ProjectInCollectionsQueryResult>;
  }
  interface ProjectInCollectionsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: 'collectionId' | 'project.id' | 'project.hidden' | 'project.slug' | 'sortOrder', value: any) => ProjectInCollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: 'collectionId' | 'project.id' | 'project.hidden' | 'project.slug' | 'sortOrder', value: any) => ProjectInCollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: 'sortOrder', value: any) => ProjectInCollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: 'sortOrder', value: any) => ProjectInCollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: 'sortOrder', value: any) => ProjectInCollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: 'sortOrder', value: any) => ProjectInCollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: 'collectionId' | 'project.id' | 'project.slug', value: string) => ProjectInCollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: 'collectionId' | 'project.id' | 'project.hidden' | 'project.slug' | 'sortOrder', value: any[]) => ProjectInCollectionsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: 'collectionId' | 'project.id' | 'project.hidden' | 'project.slug' | 'sortOrder', value: any) => ProjectInCollectionsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: 'collectionId' | 'project.id' | 'project.hidden' | 'project.slug' | 'sortOrder', value: boolean) => ProjectInCollectionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'collectionId' | 'project.id' | 'project.slug' | 'sortOrder'>) => ProjectInCollectionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'collectionId' | 'project.id' | 'project.slug' | 'sortOrder'>) => ProjectInCollectionsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ProjectInCollectionsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ProjectInCollectionsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ProjectInCollectionsQueryResult>;
  }
  /**
   * Updates Project's order in a given Collection
   * @param sortOrder - The new sort order of the project in the given collection
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.collectionId
   * @requiredField identifiers.projectId
   * @requiredField sortOrder
   * @adminMethod
   */
  function updateProjectOrderInCollection(identifiers: UpdateProjectOrderInCollectionIdentifiers, sortOrder: number | null): Promise<UpdateProjectOrderInCollectionResponse>;
  interface UpdateProjectOrderInCollectionIdentifiers {
      /** Id of the Project to update its order */
      projectId: string;
      /** Id of the collection in which the project will be re-ordered */
      collectionId: string;
  }
  
  type portfolioProjectsV1ProjectInCollection_universal_d_ProjectInCollection = ProjectInCollection;
  type portfolioProjectsV1ProjectInCollection_universal_d_Project = Project;
  type portfolioProjectsV1ProjectInCollection_universal_d_ProjectCoverOneOf = ProjectCoverOneOf;
  type portfolioProjectsV1ProjectInCollection_universal_d_Image = Image;
  type portfolioProjectsV1ProjectInCollection_universal_d_ImageType = ImageType;
  const portfolioProjectsV1ProjectInCollection_universal_d_ImageType: typeof ImageType;
  type portfolioProjectsV1ProjectInCollection_universal_d_Point = Point;
  type portfolioProjectsV1ProjectInCollection_universal_d_UnsharpMasking = UnsharpMasking;
  type portfolioProjectsV1ProjectInCollection_universal_d_Video = Video;
  type portfolioProjectsV1ProjectInCollection_universal_d_VideoResolution = VideoResolution;
  type portfolioProjectsV1ProjectInCollection_universal_d_ProjectDetail = ProjectDetail;
  type portfolioProjectsV1ProjectInCollection_universal_d_ProjectDetailValueOneOf = ProjectDetailValueOneOf;
  type portfolioProjectsV1ProjectInCollection_universal_d_DetailsLink = DetailsLink;
  type portfolioProjectsV1ProjectInCollection_universal_d_ProjectSource = ProjectSource;
  type portfolioProjectsV1ProjectInCollection_universal_d_SyncStatus = SyncStatus;
  const portfolioProjectsV1ProjectInCollection_universal_d_SyncStatus: typeof SyncStatus;
  type portfolioProjectsV1ProjectInCollection_universal_d_SeoSchema = SeoSchema;
  type portfolioProjectsV1ProjectInCollection_universal_d_Keyword = Keyword;
  type portfolioProjectsV1ProjectInCollection_universal_d_Tag = Tag;
  type portfolioProjectsV1ProjectInCollection_universal_d_Settings = Settings;
  type portfolioProjectsV1ProjectInCollection_universal_d_QueryProjectInCollectionsRequest = QueryProjectInCollectionsRequest;
  type portfolioProjectsV1ProjectInCollection_universal_d_QueryV2 = QueryV2;
  type portfolioProjectsV1ProjectInCollection_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type portfolioProjectsV1ProjectInCollection_universal_d_Sorting = Sorting;
  type portfolioProjectsV1ProjectInCollection_universal_d_SortOrder = SortOrder;
  const portfolioProjectsV1ProjectInCollection_universal_d_SortOrder: typeof SortOrder;
  type portfolioProjectsV1ProjectInCollection_universal_d_Paging = Paging;
  type portfolioProjectsV1ProjectInCollection_universal_d_CursorPaging = CursorPaging;
  type portfolioProjectsV1ProjectInCollection_universal_d_QueryProjectInCollectionsResponse = QueryProjectInCollectionsResponse;
  type portfolioProjectsV1ProjectInCollection_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type portfolioProjectsV1ProjectInCollection_universal_d_Cursors = Cursors;
  type portfolioProjectsV1ProjectInCollection_universal_d_UpdateProjectOrderInCollectionRequest = UpdateProjectOrderInCollectionRequest;
  type portfolioProjectsV1ProjectInCollection_universal_d_UpdateProjectOrderInCollectionResponse = UpdateProjectOrderInCollectionResponse;
  type portfolioProjectsV1ProjectInCollection_universal_d_ProjectOrderInCollectionUpdatedEvent = ProjectOrderInCollectionUpdatedEvent;
  type portfolioProjectsV1ProjectInCollection_universal_d_DomainEvent = DomainEvent;
  type portfolioProjectsV1ProjectInCollection_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type portfolioProjectsV1ProjectInCollection_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type portfolioProjectsV1ProjectInCollection_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type portfolioProjectsV1ProjectInCollection_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type portfolioProjectsV1ProjectInCollection_universal_d_ActionEvent = ActionEvent;
  type portfolioProjectsV1ProjectInCollection_universal_d_MessageEnvelope = MessageEnvelope;
  type portfolioProjectsV1ProjectInCollection_universal_d_IdentificationData = IdentificationData;
  type portfolioProjectsV1ProjectInCollection_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type portfolioProjectsV1ProjectInCollection_universal_d_WebhookIdentityType = WebhookIdentityType;
  const portfolioProjectsV1ProjectInCollection_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const portfolioProjectsV1ProjectInCollection_universal_d_queryProjectInCollections: typeof queryProjectInCollections;
  type portfolioProjectsV1ProjectInCollection_universal_d_QueryProjectInCollectionsOptions = QueryProjectInCollectionsOptions;
  type portfolioProjectsV1ProjectInCollection_universal_d_ProjectInCollectionsQueryResult = ProjectInCollectionsQueryResult;
  type portfolioProjectsV1ProjectInCollection_universal_d_ProjectInCollectionsQueryBuilder = ProjectInCollectionsQueryBuilder;
  const portfolioProjectsV1ProjectInCollection_universal_d_updateProjectOrderInCollection: typeof updateProjectOrderInCollection;
  type portfolioProjectsV1ProjectInCollection_universal_d_UpdateProjectOrderInCollectionIdentifiers = UpdateProjectOrderInCollectionIdentifiers;
  namespace portfolioProjectsV1ProjectInCollection_universal_d {
    export {
      portfolioProjectsV1ProjectInCollection_universal_d_ProjectInCollection as ProjectInCollection,
      portfolioProjectsV1ProjectInCollection_universal_d_Project as Project,
      portfolioProjectsV1ProjectInCollection_universal_d_ProjectCoverOneOf as ProjectCoverOneOf,
      portfolioProjectsV1ProjectInCollection_universal_d_Image as Image,
      portfolioProjectsV1ProjectInCollection_universal_d_ImageType as ImageType,
      portfolioProjectsV1ProjectInCollection_universal_d_Point as Point,
      portfolioProjectsV1ProjectInCollection_universal_d_UnsharpMasking as UnsharpMasking,
      portfolioProjectsV1ProjectInCollection_universal_d_Video as Video,
      portfolioProjectsV1ProjectInCollection_universal_d_VideoResolution as VideoResolution,
      portfolioProjectsV1ProjectInCollection_universal_d_ProjectDetail as ProjectDetail,
      portfolioProjectsV1ProjectInCollection_universal_d_ProjectDetailValueOneOf as ProjectDetailValueOneOf,
      portfolioProjectsV1ProjectInCollection_universal_d_DetailsLink as DetailsLink,
      portfolioProjectsV1ProjectInCollection_universal_d_ProjectSource as ProjectSource,
      portfolioProjectsV1ProjectInCollection_universal_d_SyncStatus as SyncStatus,
      portfolioProjectsV1ProjectInCollection_universal_d_SeoSchema as SeoSchema,
      portfolioProjectsV1ProjectInCollection_universal_d_Keyword as Keyword,
      portfolioProjectsV1ProjectInCollection_universal_d_Tag as Tag,
      portfolioProjectsV1ProjectInCollection_universal_d_Settings as Settings,
      portfolioProjectsV1ProjectInCollection_universal_d_QueryProjectInCollectionsRequest as QueryProjectInCollectionsRequest,
      portfolioProjectsV1ProjectInCollection_universal_d_QueryV2 as QueryV2,
      portfolioProjectsV1ProjectInCollection_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      portfolioProjectsV1ProjectInCollection_universal_d_Sorting as Sorting,
      portfolioProjectsV1ProjectInCollection_universal_d_SortOrder as SortOrder,
      portfolioProjectsV1ProjectInCollection_universal_d_Paging as Paging,
      portfolioProjectsV1ProjectInCollection_universal_d_CursorPaging as CursorPaging,
      portfolioProjectsV1ProjectInCollection_universal_d_QueryProjectInCollectionsResponse as QueryProjectInCollectionsResponse,
      portfolioProjectsV1ProjectInCollection_universal_d_PagingMetadataV2 as PagingMetadataV2,
      portfolioProjectsV1ProjectInCollection_universal_d_Cursors as Cursors,
      portfolioProjectsV1ProjectInCollection_universal_d_UpdateProjectOrderInCollectionRequest as UpdateProjectOrderInCollectionRequest,
      portfolioProjectsV1ProjectInCollection_universal_d_UpdateProjectOrderInCollectionResponse as UpdateProjectOrderInCollectionResponse,
      portfolioProjectsV1ProjectInCollection_universal_d_ProjectOrderInCollectionUpdatedEvent as ProjectOrderInCollectionUpdatedEvent,
      portfolioProjectsV1ProjectInCollection_universal_d_DomainEvent as DomainEvent,
      portfolioProjectsV1ProjectInCollection_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      portfolioProjectsV1ProjectInCollection_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      portfolioProjectsV1ProjectInCollection_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      portfolioProjectsV1ProjectInCollection_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      portfolioProjectsV1ProjectInCollection_universal_d_ActionEvent as ActionEvent,
      portfolioProjectsV1ProjectInCollection_universal_d_MessageEnvelope as MessageEnvelope,
      portfolioProjectsV1ProjectInCollection_universal_d_IdentificationData as IdentificationData,
      portfolioProjectsV1ProjectInCollection_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      portfolioProjectsV1ProjectInCollection_universal_d_WebhookIdentityType as WebhookIdentityType,
      portfolioProjectsV1ProjectInCollection_universal_d_queryProjectInCollections as queryProjectInCollections,
      portfolioProjectsV1ProjectInCollection_universal_d_QueryProjectInCollectionsOptions as QueryProjectInCollectionsOptions,
      portfolioProjectsV1ProjectInCollection_universal_d_ProjectInCollectionsQueryResult as ProjectInCollectionsQueryResult,
      portfolioProjectsV1ProjectInCollection_universal_d_ProjectInCollectionsQueryBuilder as ProjectInCollectionsQueryBuilder,
      portfolioProjectsV1ProjectInCollection_universal_d_updateProjectOrderInCollection as updateProjectOrderInCollection,
      portfolioProjectsV1ProjectInCollection_universal_d_UpdateProjectOrderInCollectionIdentifiers as UpdateProjectOrderInCollectionIdentifiers,
    };
  }
  
  export { portfolioCollectionsV1Collection_universal_d as collections, portfolioProjectsV1ProjectInCollection_universal_d as projectInCollections, portfolioProjectItemsV1ProjectItem_universal_d as projectItems, portfolioProjectsV1Project_universal_d as projects };
}
