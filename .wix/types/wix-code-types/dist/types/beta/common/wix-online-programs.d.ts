declare module "wix-online-programs" {
  /** Category is the main entity of CategoriesService that can be used to group programs by */
  interface Category {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Category was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Category was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Human readable name of the category */
      label?: string;
      /** List of programs in that category. */
      assignedTo?: string[];
  }
  interface CreateCategoryRequest {
      /** Category to be created */
      category: Category;
  }
  interface CreateCategoryResponse {
      /** The created Category */
      category?: Category;
  }
  interface BulkCreateCategoryRequest {
      /** List of categories you want to create */
      categories: Category[];
      /** Flag to specify if you want to get created entities in response */
      returnEntity?: boolean;
  }
  interface BulkCreateCategoryResponse {
      results?: BulkCategoryResult[];
      bulkActionMetadata?: BulkActionMetadata$4;
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
  interface BulkCategoryResult {
      itemMetadata?: ItemMetadata$4;
      item?: Category;
  }
  interface BulkActionMetadata$4 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface GetCategoryRequest {
      /** Id of the Category to retrieve */
      categoryId: string;
  }
  interface GetCategoryResponse {
      /** The retrieved Category */
      category?: Category;
  }
  interface ListCategoriesRequest {
      /** Ids of categories to list */
      categoryIds?: string[];
  }
  interface ListCategoriesResponse {
      /** The retrieved categories */
      categories?: Category[];
  }
  interface UpdateCategoryRequest {
      /** Category to be updated, may be partial */
      category: Category;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface UpdateCategoryResponse {
      /** The updated Category */
      category?: Category;
  }
  interface DeleteCategoryRequest {
      /** Id of the Category to delete */
      categoryId: string;
  }
  interface DeleteCategoryResponse {
  }
  interface QueryCategoriesRequest {
      /** WQL expression */
      query?: CursorQuery$4;
  }
  interface CursorQuery$4 extends CursorQueryPagingMethodOneOf$4 {
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
  interface CursorQueryPagingMethodOneOf$4 {
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
  interface QueryCategoriesResponse {
      /** The retrieved Categories */
      categories?: Category[];
      /** Metadata for paging */
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
  interface BulkAssignCategoriesToProgramRequest {
      /** program ID which categories are changing */
      programId: string;
      /** Categories which are added to program */
      categoriesToAssign?: string[];
      /** Categories which are removed from program */
      categoriesToUnassign?: string[];
      returnEntity?: boolean;
  }
  interface BulkAssignCategoriesToProgramResponse {
      results?: BulkAssignCategoryResult[];
      bulkActionMetadata?: BulkActionMetadata$4;
  }
  enum Action {
      UNKNOWN = "UNKNOWN",
      ASSIGN_PROGRAMS = "ASSIGN_PROGRAMS"
  }
  interface BulkAssignCategoryResult {
      action?: Action;
      itemMetadata?: ItemMetadata$4;
      item?: Category;
  }
  interface CategoriesAssignedToProgram {
      /** Categories which were added to program */
      categoriesAdded?: string[];
      /** Categories which were removed from program */
      categoriesRemoved?: string[];
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
   * Creates a new Category
   * @param category - Category to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField category
   * @adminMethod
   * @returns The created Category
   */
  function createCategory(category: Category): Promise<Category>;
  /**
   * Creates new categories in a bulk
   * @param categories - List of categories you want to create
   * @internal
   * @documentationMaturity preview
   * @requiredField categories
   * @adminMethod
   */
  function bulkCreateCategory(categories: Category[], options?: BulkCreateCategoryOptions): Promise<BulkCreateCategoryResponse>;
  interface BulkCreateCategoryOptions {
      /** Flag to specify if you want to get created entities in response */
      returnEntity?: boolean;
  }
  /**
   * Get a Category by id
   * @param categoryId - Id of the Category to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @returns The retrieved Category
   */
  function getCategory(categoryId: string): Promise<Category>;
  /**
   * Get list of categories by list of ids
   * @internal
   * @documentationMaturity preview
   */
  function listCategories(options?: ListCategoriesOptions): Promise<ListCategoriesResponse>;
  interface ListCategoriesOptions {
      /** Ids of categories to list */
      categoryIds?: string[];
  }
  /**
   * Update a Category, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - Category ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField category
   * @requiredField category.revision
   * @adminMethod
   * @returns The updated Category
   */
  function updateCategory(_id: string | null, category: UpdateCategory, options?: UpdateCategoryOptions): Promise<Category>;
  interface UpdateCategory {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Category was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Category was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Human readable name of the category */
      label?: string;
      /** List of programs in that category. */
      assignedTo?: string[];
  }
  interface UpdateCategoryOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  /**
   * Delete a Category
   * @param categoryId - Id of the Category to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField categoryId
   * @adminMethod
   */
  function deleteCategory(categoryId: string): Promise<void>;
  /**
   * Query Categories using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   */
  function queryCategories(): CategoriesQueryBuilder;
  interface QueryCursorResult$4 {
      cursors: Cursors$4;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface CategoriesQueryResult extends QueryCursorResult$4 {
      items: Category[];
      query: CategoriesQueryBuilder;
      next: () => Promise<CategoriesQueryResult>;
      prev: () => Promise<CategoriesQueryResult>;
  }
  interface CategoriesQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id', value: any) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id', value: string) => CategoriesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id', value: any[]) => CategoriesQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id', value: any) => CategoriesQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id', value: boolean) => CategoriesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id'>) => CategoriesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id'>) => CategoriesQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => CategoriesQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => CategoriesQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<CategoriesQueryResult>;
  }
  /**
   * Assign or unassign categories to a program
   * @param programId - program ID which categories are changing
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function bulkAssignCategoriesToProgram(programId: string, options?: BulkAssignCategoriesToProgramOptions): Promise<BulkAssignCategoriesToProgramResponse>;
  interface BulkAssignCategoriesToProgramOptions {
      /** Categories which are added to program */
      categoriesToAssign?: string[];
      /** Categories which are removed from program */
      categoriesToUnassign?: string[];
      returnEntity?: boolean;
  }
  
  type achievementsCategoriesV3Category_universal_d_Category = Category;
  type achievementsCategoriesV3Category_universal_d_CreateCategoryRequest = CreateCategoryRequest;
  type achievementsCategoriesV3Category_universal_d_CreateCategoryResponse = CreateCategoryResponse;
  type achievementsCategoriesV3Category_universal_d_BulkCreateCategoryRequest = BulkCreateCategoryRequest;
  type achievementsCategoriesV3Category_universal_d_BulkCreateCategoryResponse = BulkCreateCategoryResponse;
  type achievementsCategoriesV3Category_universal_d_BulkCategoryResult = BulkCategoryResult;
  type achievementsCategoriesV3Category_universal_d_GetCategoryRequest = GetCategoryRequest;
  type achievementsCategoriesV3Category_universal_d_GetCategoryResponse = GetCategoryResponse;
  type achievementsCategoriesV3Category_universal_d_ListCategoriesRequest = ListCategoriesRequest;
  type achievementsCategoriesV3Category_universal_d_ListCategoriesResponse = ListCategoriesResponse;
  type achievementsCategoriesV3Category_universal_d_UpdateCategoryRequest = UpdateCategoryRequest;
  type achievementsCategoriesV3Category_universal_d_UpdateCategoryResponse = UpdateCategoryResponse;
  type achievementsCategoriesV3Category_universal_d_DeleteCategoryRequest = DeleteCategoryRequest;
  type achievementsCategoriesV3Category_universal_d_DeleteCategoryResponse = DeleteCategoryResponse;
  type achievementsCategoriesV3Category_universal_d_QueryCategoriesRequest = QueryCategoriesRequest;
  type achievementsCategoriesV3Category_universal_d_QueryCategoriesResponse = QueryCategoriesResponse;
  type achievementsCategoriesV3Category_universal_d_BulkAssignCategoriesToProgramRequest = BulkAssignCategoriesToProgramRequest;
  type achievementsCategoriesV3Category_universal_d_BulkAssignCategoriesToProgramResponse = BulkAssignCategoriesToProgramResponse;
  type achievementsCategoriesV3Category_universal_d_Action = Action;
  const achievementsCategoriesV3Category_universal_d_Action: typeof Action;
  type achievementsCategoriesV3Category_universal_d_BulkAssignCategoryResult = BulkAssignCategoryResult;
  type achievementsCategoriesV3Category_universal_d_CategoriesAssignedToProgram = CategoriesAssignedToProgram;
  const achievementsCategoriesV3Category_universal_d_createCategory: typeof createCategory;
  const achievementsCategoriesV3Category_universal_d_bulkCreateCategory: typeof bulkCreateCategory;
  type achievementsCategoriesV3Category_universal_d_BulkCreateCategoryOptions = BulkCreateCategoryOptions;
  const achievementsCategoriesV3Category_universal_d_getCategory: typeof getCategory;
  const achievementsCategoriesV3Category_universal_d_listCategories: typeof listCategories;
  type achievementsCategoriesV3Category_universal_d_ListCategoriesOptions = ListCategoriesOptions;
  const achievementsCategoriesV3Category_universal_d_updateCategory: typeof updateCategory;
  type achievementsCategoriesV3Category_universal_d_UpdateCategory = UpdateCategory;
  type achievementsCategoriesV3Category_universal_d_UpdateCategoryOptions = UpdateCategoryOptions;
  const achievementsCategoriesV3Category_universal_d_deleteCategory: typeof deleteCategory;
  const achievementsCategoriesV3Category_universal_d_queryCategories: typeof queryCategories;
  type achievementsCategoriesV3Category_universal_d_CategoriesQueryResult = CategoriesQueryResult;
  type achievementsCategoriesV3Category_universal_d_CategoriesQueryBuilder = CategoriesQueryBuilder;
  const achievementsCategoriesV3Category_universal_d_bulkAssignCategoriesToProgram: typeof bulkAssignCategoriesToProgram;
  type achievementsCategoriesV3Category_universal_d_BulkAssignCategoriesToProgramOptions = BulkAssignCategoriesToProgramOptions;
  namespace achievementsCategoriesV3Category_universal_d {
    export {
      achievementsCategoriesV3Category_universal_d_Category as Category,
      achievementsCategoriesV3Category_universal_d_CreateCategoryRequest as CreateCategoryRequest,
      achievementsCategoriesV3Category_universal_d_CreateCategoryResponse as CreateCategoryResponse,
      achievementsCategoriesV3Category_universal_d_BulkCreateCategoryRequest as BulkCreateCategoryRequest,
      achievementsCategoriesV3Category_universal_d_BulkCreateCategoryResponse as BulkCreateCategoryResponse,
      ItemMetadata$4 as ItemMetadata,
      ApplicationError$4 as ApplicationError,
      achievementsCategoriesV3Category_universal_d_BulkCategoryResult as BulkCategoryResult,
      BulkActionMetadata$4 as BulkActionMetadata,
      achievementsCategoriesV3Category_universal_d_GetCategoryRequest as GetCategoryRequest,
      achievementsCategoriesV3Category_universal_d_GetCategoryResponse as GetCategoryResponse,
      achievementsCategoriesV3Category_universal_d_ListCategoriesRequest as ListCategoriesRequest,
      achievementsCategoriesV3Category_universal_d_ListCategoriesResponse as ListCategoriesResponse,
      achievementsCategoriesV3Category_universal_d_UpdateCategoryRequest as UpdateCategoryRequest,
      achievementsCategoriesV3Category_universal_d_UpdateCategoryResponse as UpdateCategoryResponse,
      achievementsCategoriesV3Category_universal_d_DeleteCategoryRequest as DeleteCategoryRequest,
      achievementsCategoriesV3Category_universal_d_DeleteCategoryResponse as DeleteCategoryResponse,
      achievementsCategoriesV3Category_universal_d_QueryCategoriesRequest as QueryCategoriesRequest,
      CursorQuery$4 as CursorQuery,
      CursorQueryPagingMethodOneOf$4 as CursorQueryPagingMethodOneOf,
      Sorting$4 as Sorting,
      SortOrder$4 as SortOrder,
      CursorPaging$4 as CursorPaging,
      achievementsCategoriesV3Category_universal_d_QueryCategoriesResponse as QueryCategoriesResponse,
      CursorPagingMetadata$4 as CursorPagingMetadata,
      Cursors$4 as Cursors,
      achievementsCategoriesV3Category_universal_d_BulkAssignCategoriesToProgramRequest as BulkAssignCategoriesToProgramRequest,
      achievementsCategoriesV3Category_universal_d_BulkAssignCategoriesToProgramResponse as BulkAssignCategoriesToProgramResponse,
      achievementsCategoriesV3Category_universal_d_Action as Action,
      achievementsCategoriesV3Category_universal_d_BulkAssignCategoryResult as BulkAssignCategoryResult,
      achievementsCategoriesV3Category_universal_d_CategoriesAssignedToProgram as CategoriesAssignedToProgram,
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
      achievementsCategoriesV3Category_universal_d_createCategory as createCategory,
      achievementsCategoriesV3Category_universal_d_bulkCreateCategory as bulkCreateCategory,
      achievementsCategoriesV3Category_universal_d_BulkCreateCategoryOptions as BulkCreateCategoryOptions,
      achievementsCategoriesV3Category_universal_d_getCategory as getCategory,
      achievementsCategoriesV3Category_universal_d_listCategories as listCategories,
      achievementsCategoriesV3Category_universal_d_ListCategoriesOptions as ListCategoriesOptions,
      achievementsCategoriesV3Category_universal_d_updateCategory as updateCategory,
      achievementsCategoriesV3Category_universal_d_UpdateCategory as UpdateCategory,
      achievementsCategoriesV3Category_universal_d_UpdateCategoryOptions as UpdateCategoryOptions,
      achievementsCategoriesV3Category_universal_d_deleteCategory as deleteCategory,
      achievementsCategoriesV3Category_universal_d_queryCategories as queryCategories,
      achievementsCategoriesV3Category_universal_d_CategoriesQueryResult as CategoriesQueryResult,
      achievementsCategoriesV3Category_universal_d_CategoriesQueryBuilder as CategoriesQueryBuilder,
      achievementsCategoriesV3Category_universal_d_bulkAssignCategoriesToProgram as bulkAssignCategoriesToProgram,
      achievementsCategoriesV3Category_universal_d_BulkAssignCategoriesToProgramOptions as BulkAssignCategoriesToProgramOptions,
    };
  }
  
  interface Participant extends ParticipantStateOptionsOneOf {
      paymentPendingOptions?: PaymentPendingOptions;
      joinedOptions?: JoinedOptions;
      completedOptions?: CompletedOptions;
      failedOptions?: FailedOptions;
      suspendedOptions?: SuspendedOptions;
      /**
       * Participant ID.
       * @readonly
       */
      _id?: string | null;
      /** @readonly */
      revision?: string | null;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
      /**
       * Member ID of participant on site
       * @readonly
       */
      memberId?: string;
      /**
       * Program ID which participant participates in
       * @readonly
       */
      programId?: string;
      /**
       * Program completion progress
       * @readonly
       */
      progress?: Progress;
      /** state of participation in the program */
      state?: State$2;
      /** Certificate issued to participant */
      certificate?: Certificate$1;
  }
  /** @oneof */
  interface ParticipantStateOptionsOneOf {
      paymentPendingOptions?: PaymentPendingOptions;
      joinedOptions?: JoinedOptions;
      completedOptions?: CompletedOptions;
      failedOptions?: FailedOptions;
      suspendedOptions?: SuspendedOptions;
  }
  enum JoinPath {
      UNKNOWN_JOIN_PATH = "UNKNOWN_JOIN_PATH",
      /** Member joined to the program for free */
      FREE = "FREE",
      /** Member was added to the program by site owner */
      ADDED = "ADDED",
      /** Member paid once to join the program */
      SINGLE_PAYMENT = "SINGLE_PAYMENT",
      /** Member has Paid Plan to join */
      PAID_PLAN = "PAID_PLAN",
      /** Member joined with the Free Coupon */
      FREE_COUPON = "FREE_COUPON"
  }
  interface SinglePaymentOptions {
      orderId?: string;
  }
  interface PaidPlanOptions {
      planIds?: string[];
  }
  interface FreeCouponOptions {
      couponId?: string;
  }
  interface Progress {
      /** Number of program steps completed by member */
      totalStepsCompleted?: number;
      /** Total number of program steps available to resolve */
      totalStepsAvailable?: number;
      /** Completion percentage */
      completionPercentage?: number;
  }
  enum State$2 {
      /** Unknown state */
      UNKNOWN_STATE = "UNKNOWN_STATE",
      /** Member invited to participate in program */
      INVITED = "INVITED",
      /** Member asked owner to participate in program */
      APPROVAL_PENDING = "APPROVAL_PENDING",
      PAYMENT_PENDING = "PAYMENT_PENDING",
      /** Member joined the program and became participant */
      JOINED = "JOINED",
      /** Participant completed the program, and could join again */
      COMPLETED = "COMPLETED",
      /** Participant failed to complete the program, and could join again */
      FAILED = "FAILED",
      /** Participant with ended pricing plan (PP), will be joined as renew PP */
      SUSPENDED = "SUSPENDED"
  }
  interface Certificate$1 {
      /**
       * when certificate was issued, UTC
       * @readonly
       */
      issuedDate?: Date;
  }
  interface PaymentPendingOptions {
      /** Payment order */
      paymentOrderId?: string | null;
      /** Offline payment transaction */
      offlineTrxId?: string | null;
      /** Pricing plans */
      paidPlanIds?: string[];
  }
  interface JoinedOptions extends JoinedOptionsJoinPathOptionsOneOf {
      singlePaymentOptions?: SinglePaymentOptions;
      paidPlanOptions?: PaidPlanOptions;
      freeCouponOptions?: FreeCouponOptions;
      timeZone?: string;
      startDate?: string;
      joinPath?: JoinPath;
  }
  /** @oneof */
  interface JoinedOptionsJoinPathOptionsOneOf {
      singlePaymentOptions?: SinglePaymentOptions;
      paidPlanOptions?: PaidPlanOptions;
      freeCouponOptions?: FreeCouponOptions;
  }
  interface CompletedOptions {
      startDate?: string;
  }
  interface FailedOptions {
      startDate?: string;
  }
  interface SuspendedOptions {
      startDate?: string;
  }
  interface ExportParticipantsStatsRequest {
      /** program id to export data from */
      programId: string;
  }
  interface ExportParticipantsStatsResponse {
  }
  interface ResolveStepRequest {
      participantId: string;
      stepId: string;
      quizSubmissionId?: string | null;
  }
  interface ResolveStepResponse {
      resolvedStep?: ResolvedStep;
  }
  interface ResolvedStep {
      /** participant who resolved step */
      participantId?: string;
      /** program step been resolve */
      programStepId?: string;
      /** quiz submission */
      quizSubmissionId?: string | null;
      /** earned score for resolved step */
      earnedScore?: number | null;
      /** step passing grade */
      passingGrade?: number | null;
      /** resolved step status */
      status?: Status;
      /**
       * created date of resolved step
       * @readonly
       */
      _createdDate?: Date;
      /**
       * updated date of resolved step
       * @readonly
       */
      _updatedDate?: Date;
  }
  enum Status {
      /** step completed */
      COMPLETED = "COMPLETED",
      /** participant failed to resolve step */
      FAILED = "FAILED"
  }
  interface StepResolved {
      resolvedStep?: ResolvedStep;
      programId?: string;
      memberId?: string;
  }
  interface UndoStepRequest {
      participantId: string;
      stepId: string;
  }
  interface UndoStepResponse {
  }
  interface StepUndone {
      participantId?: string;
      stepId?: string;
  }
  interface ListResolvedStepsRequest {
      participantId: string;
  }
  interface ListResolvedStepsResponse {
      resolvedSteps?: ResolvedStep[];
  }
  interface GetResolvedStepRequest {
      participantId: string;
      stepId: string;
  }
  interface GetResolvedStepResponse {
      resolvedStep?: ResolvedStep;
  }
  interface QueryResolvedStepsRequest {
      query?: CursorQuery$3;
  }
  interface CursorQuery$3 extends CursorQueryPagingMethodOneOf$3 {
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
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$3 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$3;
  }
  interface Sorting$3 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$3;
  }
  enum SortOrder$3 {
      ASC = "ASC",
      DESC = "DESC"
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
  interface QueryResolvedStepsResponse {
      resolvedSteps?: ResolvedStep[];
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
  interface BulkCreateResolvedStepMigrationRequest {
      /** resolved steps to create */
      resolvedSteps: ResolvedStep[];
  }
  interface BulkCreateResolvedStepMigrationResponse {
      /** results of bulk insertion */
      results?: BulkResolvedStepResult[];
      /** metadata about resolved steps that were to insert */
      bulkActionMetadata?: CommonBulkActionMetadata;
  }
  interface CommonItemMetadata {
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
  interface BulkResolvedStepResult {
      /** info about whether resolved step was inserted etc */
      itemMetadata?: CommonItemMetadata;
      /** resolved step itself */
      item?: ResolvedStep;
  }
  interface CommonBulkActionMetadata {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
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
  interface JoinProgramRequest {
      /** Program to join */
      programId: string;
  }
  interface JoinProgramResponse {
      /** Created participant with corresponding state */
      participant?: Participant;
  }
  interface ParticipantJoined {
      /** Joined participant */
      participant?: Participant;
  }
  interface GetParticipantRequest {
      /** Participant id to fetch */
      participantId: string;
  }
  interface GetParticipantResponse {
      /** existing participant */
      participant?: Participant;
  }
  interface LeaveProgramRequest {
      /** Participant id to leave program */
      participantId: string;
  }
  interface LeaveProgramResponse {
  }
  interface ParticipantLeft {
      /** Participant id who left */
      participantId?: string;
      /** Program id participant left */
      programId?: string;
      /** Participant's member id */
      memberId?: string;
  }
  interface QueryParticipantsRequest {
      /** Platformized query */
      query?: CursorQuery$3;
  }
  interface QueryParticipantsResponse {
      /** found participants */
      participants?: Participant[];
      /** paging metadata */
      pagingMetadata?: CursorPagingMetadata$3;
  }
  interface QueryProgramSummariesRequest {
      /**
       * Basically the query to sort and query the programs;
       * Works exactly the same as the query in QueryPrograms request
       */
      query?: CommonCursorQuery;
  }
  interface CommonCursorQuery extends CommonCursorQueryPagingMethodOneOf {
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
      sort?: CommonSorting[];
  }
  /** @oneof */
  interface CommonCursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CommonCursorPaging;
  }
  interface CommonSorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: CommonSortOrder;
  }
  enum CommonSortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface CommonCursorPaging {
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
  interface QueryProgramSummariesResponse {
      /** summaries */
      summaries?: ProgramSummary[];
      /** paging metadata */
      pagingMetadata?: CommonCursorPagingMetadata;
  }
  interface ProgramSummary {
      /** Program */
      program?: Program$1;
      /** Statistic for the program */
      statistic?: Statistic;
      /** Membership of the participant; if participant is not in the program, this field will be empty */
      membership?: Membership$1;
  }
  interface Program$1 {
      /**
       * Program ID.
       * @readonly
       */
      _id?: string | null;
      /** @readonly */
      revision?: string | null;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
      /**
       * current program state / does participant need it?
       * @readonly
       */
      state?: V3State;
      /**
       * assigned categories
       * @readonly
       */
      categoryIds?: string[];
      /** general program info. */
      description?: Description$3;
      /** timeline type -> Self-paced, time-restricted. */
      timeline?: Timeline$1;
      /** participant limitation, step-completion pace and etc. */
      restrictions?: Restrictions$1;
      /** single-payment price. */
      pricing?: Money$1;
      /** seo settings. */
      seo?: Seo$1;
      /** rewards to be assigned after reaching some of the program milestones. */
      rewards?: Reward$1[];
      /** connected social group. */
      socialGroupId?: string | null;
      /** join flow options. */
      accessType?: AccessType$1;
      /** extensible field */
      extendedFields?: ExtendedFields$1;
      /** if true -> invoice is sent to the customer who purchased the program via single payment; else -> payment confirmation email is sent */
      shouldSendInvoice?: boolean;
  }
  enum V3State {
      /** not published program, visible only on BM */
      DRAFT = "DRAFT",
      /** program visible regarding to restrictions */
      PUBLISHED = "PUBLISHED",
      /** program isn't available to join. */
      ENDED = "ENDED",
      /** closed program. Joins and sections/steps are not available for participants. */
      ARCHIVED = "ARCHIVED"
  }
  interface Description$3 extends DescriptionMediaOneOf$3 {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
      /** step title */
      title?: string;
      /** step additional details */
      details?: string | null;
  }
  /** @oneof */
  interface DescriptionMediaOneOf$3 {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
  }
  interface VideoResolution$3 {
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
      /** Video format for example, mp4, hls. */
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
  interface Timeline$1 extends TimelineFinishConditionOptionsOneOf$1 {
      /** evaluate after some period of time in days. */
      timeEvaluationOptions?: TimeEvaluationOptions$1;
      /** are sections/steps evaluated every day? Or can UoU participate in a self paced mode? */
      selfPaced?: boolean;
      /** everyone starts on this day */
      startDate?: string | null;
      /** condition on which the program is completed */
      finishCondition?: FinishCondition$1;
  }
  /** @oneof */
  interface TimelineFinishConditionOptionsOneOf$1 {
      /** evaluate after some period of time in days. */
      timeEvaluationOptions?: TimeEvaluationOptions$1;
  }
  enum FinishCondition$1 {
      UNKNOWN_FINISH_CONDITION = "UNKNOWN_FINISH_CONDITION",
      /** finish participation after some time. */
      TIME_EVALUATION = "TIME_EVALUATION",
      /** finish participation when all steps are resolved. */
      ALL_STEPS_COMPLETED = "ALL_STEPS_COMPLETED"
  }
  interface TimeEvaluationOptions$1 {
      /** duration in days */
      durationInDays?: number;
  }
  interface Restrictions$1 {
      /** limit of active participants in the program. */
      maxParticipants?: number | null;
      /** hide steps in the Pending state. */
      hideFutureSteps?: boolean;
      /** allow participants complete steps in the certain order. */
      resolveStepsInOrder?: boolean;
      /** allow program participants to share their progress in group */
      shareProgress?: boolean;
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface Money$1 {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string;
      /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
      currency?: string;
      /** Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative. */
      formattedValue?: string | null;
  }
  interface Seo$1 {
      /** challenge slug expression. */
      slug?: string;
      /** schema used by Seo team */
      seoData?: SeoSchema$1;
      /** program url */
      url?: string;
      /** image url from description media */
      imageUrl?: string | null;
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
  interface Reward$1 {
      /** on which action rewards must be assigned. */
      trigger?: Trigger$1;
      /** badges participant will get on program complete */
      badgeIds?: string[];
      /** certificate for program. Currently is program GUID */
      certificate?: RewardCertificate;
  }
  enum Trigger$1 {
      /** member joins the program */
      JOINED_TO_PROGRAM = "JOINED_TO_PROGRAM",
      /** at least one step completed */
      STEP_COMPLETED = "STEP_COMPLETED",
      /** all steps are completed. */
      ALL_STEPS_COMPLETED = "ALL_STEPS_COMPLETED"
  }
  interface RewardCertificate {
      /** Certificate for program completion. Currently is program GUID */
      _id?: string;
      /** date it was connected to program */
      connectedDate?: Date;
  }
  enum AccessType$1 {
      /** join without approvals */
      PUBLIC = "PUBLIC",
      /** send a join request to the owner and get an approval from him. */
      PRIVATE = "PRIVATE",
      /** join possible only after owner invite. */
      SECRET = "SECRET"
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
  interface Statistic {
      /** number of invited members */
      invited?: string;
      /** number of join requests */
      approvalPending?: string;
      /** number of participants waiting for the owner payment confirmation */
      paymentPending?: string;
      /** number of joined participants */
      joined?: string;
      /** number of finished participants */
      completed?: string;
      /** number of failed participants */
      failed?: string;
      /** number of suspended participants */
      suspended?: string;
      /** number of participants who started the program */
      inProgress?: string;
  }
  interface Membership$1 {
      /** Referenced participant id */
      participantId?: string;
      /** state of the participant */
      state?: State$2;
      /** number of completed steps */
      completedStepsCount?: number;
  }
  interface CommonCursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: CommonCursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface CommonCursors {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface GetStatisticsRequest {
      /** Program to get statistics about */
      programId?: string;
  }
  interface GetStatisticsResponse {
      /** number of active and finished participants. */
      totalJoined?: number;
      /** number of pending join requests */
      totalCompleted?: number;
      /** number of invited members. */
      totalFailed?: number;
      /** number of participants waiting for the owner payment confirmation. */
      totalApprovalWaiting?: number;
      /** number of participants who not started progress on program */
      totalWithoutProgress?: number;
      /** number of participant who started progress on program */
      totalWithProgress?: number;
  }
  interface GetProgramSummariesRequest {
      /** Programs to get summary about */
      programIds?: string[];
  }
  interface GetProgramSummariesResponse {
      /** summaries for each program in the same order as program_ids */
      summaries?: ParticipantsSummary[];
  }
  interface ParticipantsSummary {
      /** Referenced program id */
      programId?: string;
      /** Statistics for the program */
      statistic?: Statistic;
      /** Membership of the participant; if participant is not in the program, this field will be empty */
      membership?: Membership$1;
  }
  interface OfflinePaymentSent {
      /** Participant who started offline payment */
      participant?: Participant;
  }
  interface PaymentFailed {
      /** Participant whose payment was failed */
      participant?: Participant;
  }
  interface SinglePaymentConfirmed {
      /** Participant whose payment was confirmed */
      participant?: Participant;
  }
  interface SinglePaymentDeclined {
      /** Participant whose payment was declined */
      participant?: Participant;
  }
  interface BenefitNotification {
      /** Plan unique ID */
      planId?: string;
      /** App def ID */
      appDefId?: string;
      /** Current benefit details */
      benefit?: Benefit;
      /** Previous benefit */
      prevBenefit?: Benefit;
      /** Notification event */
      event?: Event;
  }
  interface Benefit {
      /**
       * Benefit unique ID
       * @readonly
       */
      _id?: string | null;
      /** Benefit Type */
      benefitType?: BenefitType;
      /** Resource IDs that serves by this benefit */
      resourceIds?: string[];
      /** Amount of credits that provided by this benefit */
      creditAmount?: number | null;
      /** additional details related to benefit; limited to 20 entries, 20 symbols for key and 20 symbols for value */
      customFields?: Record<string, string>;
      /** return value only in case it required in the ListRequest, true means that benefit's type could be updated */
      editable?: boolean | null;
      /** Benefit behavior */
      behavior?: Behavior;
      /**
       * Id of the app associated with this benefit
       * @readonly
       */
      appDefId?: string | null;
  }
  interface EntryPass {
  }
  interface Discount extends DiscountDiscountOneOf {
      /** Fixed-rate percent off discount */
      percentOffRate?: string;
      /** Absolute amount discount */
      moneyOffAmount?: string;
  }
  /** @oneof */
  interface DiscountDiscountOneOf {
      /** Fixed-rate percent off discount */
      percentOffRate?: string;
      /** Absolute amount discount */
      moneyOffAmount?: string;
  }
  enum BenefitType {
      /** Should never be used */
      UNDEFINED = "UNDEFINED",
      /** Limited benefit type */
      LIMITED = "LIMITED",
      /** Unlimited benefit type */
      UNLIMITED = "UNLIMITED"
  }
  interface Behavior extends BehaviorBehaviorOneOf {
      /** Entry pass for resources, e.g. a ticket for Bookings service or a ticket for Events. */
      defaultBehavior?: EntryPass;
      /** Discount applied to paid resources */
      discount?: Discount;
  }
  /** @oneof */
  interface BehaviorBehaviorOneOf {
      /** Entry pass for resources, e.g. a ticket for Bookings service or a ticket for Events. */
      defaultBehavior?: EntryPass;
      /** Discount applied to paid resources */
      discount?: Discount;
  }
  enum Event {
      Updated = "Updated",
      Deleted = "Deleted",
      Created = "Created"
  }
  interface BulkInviteToProgramRequest {
      /** Program to which bulk invite participants. */
      programId: string;
      /** Return added participants in the response or not. */
      memberIds?: string[];
      /** Return invited participants in the response or not. */
      returnEntity?: boolean;
  }
  interface BulkInviteToProgramResponse {
      /** Participants created by bulk action */
      results?: BulkInviteToProgramResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$3;
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
  interface BulkInviteToProgramResult {
      /** Invited participant metadata. */
      itemMetadata?: ItemMetadata$3;
      /** Invited participant */
      item?: Participant;
  }
  interface BulkActionMetadata$3 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface ParticipantInvited {
      /** Program to which bulk invite participants. */
      programId?: string;
      /** Invited member to program */
      memberId?: string;
  }
  interface BulkInviteAllToProgramRequest {
      /** Program to which bulk add participants. */
      programId: string;
      /** Exclude site members. */
      excludeMemberIds?: string[];
  }
  interface BulkInviteAllToProgramResponse {
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkAddToProgramRequest {
      /** Program to which bulk add participants. */
      programId: string;
      /** Site members. */
      memberIds?: string[];
      /** Return added participants in the response or not. */
      returnEntity?: boolean;
  }
  interface BulkAddToProgramResponse {
      /** Participants created by bulk action */
      results?: BulkAddToProgramResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkAddToProgramResult {
      /** Added participant metadata. */
      itemMetadata?: ItemMetadata$3;
      /** Added participant */
      item?: Participant;
  }
  interface ParticipantAdded {
      /** Program ID which participant was added */
      programId?: string;
      /** Member ID of participant on site */
      memberId?: string;
  }
  interface BulkAddAllToProgramRequest {
      /** Program to which bulk add participants. */
      programId: string;
      /** Exclude site members. */
      excludeMemberIds?: string[];
  }
  interface BulkAddAllToProgramResponse {
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkApproveParticipantRequest {
      /** Participants to add */
      participantIds: string[];
      /** program to approve participant */
      programId?: string;
      /** Return approved participants in the response or not */
      returnEntity?: boolean;
  }
  interface BulkApproveParticipantResponse {
      /** Participants approved by bulk action */
      results?: BulkApproveParticipantResult[];
      /** Bulk action metadata */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkApproveParticipantResult {
      /** Approved participant metadata */
      itemMetadata?: ItemMetadata$3;
      /** Approved or existing participant */
      item?: Participant;
  }
  interface ParticipantApproved {
      /** Program ID which participant approved */
      programId?: string;
      /** Member ID of participant approved */
      memberId?: string;
  }
  interface BulkApproveAllParticipantRequest {
      /** Program to approve all participants. */
      programId?: string;
      /** Exclude site members. */
      excludeParticipantIds?: string[];
  }
  interface BulkApproveAllParticipantResponse {
      /** Job id with async process */
      jobId?: string;
  }
  interface DeleteParticipantRequest {
      /** Participants to delete */
      participantId: string;
  }
  interface DeleteParticipantResponse {
  }
  interface ParticipantRejected {
      /** Program ID which participant rejected */
      programId?: string;
      /** Member ID of participant rejected */
      memberId?: string;
  }
  interface IssueCertificateRequest {
      /** Participant to get certificate */
      participantId: string;
  }
  interface IssueCertificateResponse {
      /** Updated participant */
      participant?: Participant;
  }
  interface ApplyCouponRequest {
      participantId: string;
      orderId: string;
      couponCode: string;
  }
  interface ApplyCouponResponse {
      couponId?: string;
      subTotal?: number;
      discount?: number;
      total?: number;
  }
  interface RevertCouponRequest {
      participantId: string;
      orderId: string;
      couponId: string;
  }
  interface RevertCouponResponse {
      total?: number;
  }
  /**
   * Exports data about participants as well as resolved steps in program.
   * @param programId - program id to export data from
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function exportParticipantsStats(programId: string): Promise<void>;
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.participantId
   * @requiredField identifiers.stepId
   */
  function resolveStep(identifiers: ResolveStepIdentifiers, options?: ResolveStepOptions): Promise<ResolveStepResponse>;
  interface ResolveStepIdentifiers {
      participantId: string;
      stepId: string;
  }
  interface ResolveStepOptions {
      quizSubmissionId?: string | null;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.participantId
   * @requiredField identifiers.stepId
   */
  function undoStep(identifiers: UndoStepIdentifiers): Promise<void>;
  interface UndoStepIdentifiers {
      participantId: string;
      stepId: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField participantId
   */
  function listResolvedSteps(participantId: string): Promise<ListResolvedStepsResponse>;
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.participantId
   * @requiredField identifiers.stepId
   */
  function getResolvedStep(identifiers: GetResolvedStepIdentifiers): Promise<GetResolvedStepResponse>;
  interface GetResolvedStepIdentifiers {
      participantId: string;
      stepId: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryResolvedSteps(options?: QueryResolvedStepsOptions): Promise<QueryResolvedStepsResponse>;
  interface QueryResolvedStepsOptions {
      query?: CursorQuery$3;
  }
  /**
   * Create resolved steps in batches, needed for migration of participant steps from v1
   * @param resolvedSteps - resolved steps to create
   * @internal
   * @documentationMaturity preview
   * @requiredField resolvedSteps
   */
  function bulkCreateResolvedStepMigration(resolvedSteps: ResolvedStep[]): Promise<BulkCreateResolvedStepMigrationResponse>;
  /**
   * Member joins the program. By the type of program, participant in corresponding
   * state will be created.
   * @param programId - Program to join
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   */
  function joinProgram(programId: string): Promise<JoinProgramResponse>;
  /**
   * Returns participant.
   * @param participantId - Participant id to fetch
   * @internal
   * @documentationMaturity preview
   * @requiredField participantId
   * @returns existing participant
   */
  function getParticipant(participantId: string): Promise<Participant>;
  /**
   * Participant leaves program. Entity will be deleted. Idempotent call.
   * @param participantId - Participant id to leave program
   * @internal
   * @documentationMaturity preview
   * @requiredField participantId
   */
  function leaveProgram(participantId: string): Promise<void>;
  /**
   * Query existing participants
   * @internal
   * @documentationMaturity preview
   */
  function queryParticipants(): ParticipantsQueryBuilder;
  interface QueryCursorResult$3 {
      cursors: Cursors$3;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ParticipantsQueryResult extends QueryCursorResult$3 {
      items: Participant[];
      query: ParticipantsQueryBuilder;
      next: () => Promise<ParticipantsQueryResult>;
      prev: () => Promise<ParticipantsQueryResult>;
  }
  interface ParticipantsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'memberId' | 'programId' | 'state', value: any) => ParticipantsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'memberId' | 'state', value: any) => ParticipantsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'joinedOptions.startDate' | '_id' | '_createdDate' | 'state'>) => ParticipantsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'joinedOptions.startDate' | '_id' | '_createdDate' | 'state'>) => ParticipantsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ParticipantsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ParticipantsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ParticipantsQueryResult>;
  }
  /** @internal
   * @documentationMaturity preview
   */
  function queryProgramSummaries(options?: QueryProgramSummariesOptions): Promise<QueryProgramSummariesResponse>;
  interface QueryProgramSummariesOptions {
      /**
       * Basically the query to sort and query the programs;
       * Works exactly the same as the query in QueryPrograms request
       */
      query?: CommonCursorQuery;
  }
  /**
   * Get statistics about participants interacting with the program
   * @internal
   * @documentationMaturity preview
   */
  function getStatistics(options?: GetStatisticsOptions): Promise<GetStatisticsResponse>;
  interface GetStatisticsOptions {
      /** Program to get statistics about */
      programId?: string;
  }
  /**
   * Get summary about participants interacting with the program
   * @internal
   * @documentationMaturity preview
   */
  function getProgramSummaries(options?: GetProgramSummariesOptions): Promise<GetProgramSummariesResponse>;
  interface GetProgramSummariesOptions {
      /** Programs to get summary about */
      programIds?: string[];
  }
  /**
   * Bulk invites participants to program.
   * For each member participant in Invited state is created.
   * @param programId - Program to which bulk invite participants.
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function bulkInviteToProgram(programId: string, options?: BulkInviteToProgramOptions): Promise<BulkInviteToProgramResponse>;
  interface BulkInviteToProgramOptions {
      /** Return added participants in the response or not. */
      memberIds?: string[];
      /** Return invited participants in the response or not. */
      returnEntity?: boolean;
  }
  /**
   * Bulk invites all participants to program, but not more then 1000.
   * For each member participant in Invited state is created.
   * @param programId - Program to which bulk add participants.
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function bulkInviteAllToProgram(programId: string, options?: BulkInviteAllToProgramOptions): Promise<BulkInviteAllToProgramResponse>;
  interface BulkInviteAllToProgramOptions {
      /** Exclude site members. */
      excludeMemberIds?: string[];
  }
  /**
   * Bulk adds participants to program.
   * Participant will be either created in state Joined, or updated to that state
   * from pending one.
   * @param programId - Program to which bulk add participants.
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   */
  function bulkAddToProgram(programId: string, options?: BulkAddToProgramOptions): Promise<BulkAddToProgramResponse>;
  interface BulkAddToProgramOptions {
      /** Site members. */
      memberIds?: string[];
      /** Return added participants in the response or not. */
      returnEntity?: boolean;
  }
  /**
   * Bulk adds all site members to program, but not more then 1000.
   * Participant will be either created in state Joined, or updated to that state
   * from pending one.
   * @param programId - Program to which bulk add participants.
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   */
  function bulkAddAllToProgram(programId: string, options?: BulkAddAllToProgramOptions): Promise<BulkAddAllToProgramResponse>;
  interface BulkAddAllToProgramOptions {
      /** Exclude site members. */
      excludeMemberIds?: string[];
  }
  /**
   * Bulk approves participants, who asked to join private program (aka in
   * state `APPROVAL_PENDING`). If participant was in other state, no effect and
   * error returned.
   * @param participantIds - Participants to add
   * @internal
   * @documentationMaturity preview
   * @requiredField participantIds
   * @adminMethod
   */
  function bulkApproveParticipant(participantIds: string[], options?: BulkApproveParticipantOptions): Promise<BulkApproveParticipantResponse>;
  interface BulkApproveParticipantOptions {
      /** program to approve participant */
      programId?: string;
      /** Return approved participants in the response or not */
      returnEntity?: boolean;
  }
  /**
   * Bulk approves all pending participants, who asked to join private program (aka
   * in state `APPROVAL_PENDING`).
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function bulkApproveAllParticipant(options?: BulkApproveAllParticipantOptions): Promise<BulkApproveAllParticipantResponse>;
  interface BulkApproveAllParticipantOptions {
      /** Program to approve all participants. */
      programId?: string;
      /** Exclude site members. */
      excludeParticipantIds?: string[];
  }
  /**
   * Delete participant from program by owner will. Removes participant from member
   * group. Leaves him in Social Group.
   * @param participantId - Participants to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField participantId
   * @adminMethod
   */
  function deleteParticipant(participantId: string): Promise<void>;
  /**
   * Issue certificate by site admin
   * @param participantId - Participant to get certificate
   * @internal
   * @documentationMaturity preview
   * @requiredField participantId
   * @adminMethod
   */
  function issueCertificate(participantId: string): Promise<IssueCertificateResponse>;
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.couponCode
   * @requiredField identifiers.participantId
   * @requiredField orderId
   * @adminMethod
   */
  function applyCoupon(identifiers: ApplyCouponIdentifiers, orderId: string): Promise<ApplyCouponResponse>;
  interface ApplyCouponIdentifiers {
      participantId: string;
      couponCode: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.couponId
   * @requiredField identifiers.participantId
   * @requiredField orderId
   * @adminMethod
   */
  function revertCoupon(identifiers: RevertCouponIdentifiers, orderId: string): Promise<RevertCouponResponse>;
  interface RevertCouponIdentifiers {
      participantId: string;
      couponId: string;
  }
  
  type onlineProgramsV3Participant_universal_d_Participant = Participant;
  type onlineProgramsV3Participant_universal_d_ParticipantStateOptionsOneOf = ParticipantStateOptionsOneOf;
  type onlineProgramsV3Participant_universal_d_JoinPath = JoinPath;
  const onlineProgramsV3Participant_universal_d_JoinPath: typeof JoinPath;
  type onlineProgramsV3Participant_universal_d_SinglePaymentOptions = SinglePaymentOptions;
  type onlineProgramsV3Participant_universal_d_PaidPlanOptions = PaidPlanOptions;
  type onlineProgramsV3Participant_universal_d_FreeCouponOptions = FreeCouponOptions;
  type onlineProgramsV3Participant_universal_d_Progress = Progress;
  type onlineProgramsV3Participant_universal_d_PaymentPendingOptions = PaymentPendingOptions;
  type onlineProgramsV3Participant_universal_d_JoinedOptions = JoinedOptions;
  type onlineProgramsV3Participant_universal_d_JoinedOptionsJoinPathOptionsOneOf = JoinedOptionsJoinPathOptionsOneOf;
  type onlineProgramsV3Participant_universal_d_CompletedOptions = CompletedOptions;
  type onlineProgramsV3Participant_universal_d_FailedOptions = FailedOptions;
  type onlineProgramsV3Participant_universal_d_SuspendedOptions = SuspendedOptions;
  type onlineProgramsV3Participant_universal_d_ExportParticipantsStatsRequest = ExportParticipantsStatsRequest;
  type onlineProgramsV3Participant_universal_d_ExportParticipantsStatsResponse = ExportParticipantsStatsResponse;
  type onlineProgramsV3Participant_universal_d_ResolveStepRequest = ResolveStepRequest;
  type onlineProgramsV3Participant_universal_d_ResolveStepResponse = ResolveStepResponse;
  type onlineProgramsV3Participant_universal_d_ResolvedStep = ResolvedStep;
  type onlineProgramsV3Participant_universal_d_Status = Status;
  const onlineProgramsV3Participant_universal_d_Status: typeof Status;
  type onlineProgramsV3Participant_universal_d_StepResolved = StepResolved;
  type onlineProgramsV3Participant_universal_d_UndoStepRequest = UndoStepRequest;
  type onlineProgramsV3Participant_universal_d_UndoStepResponse = UndoStepResponse;
  type onlineProgramsV3Participant_universal_d_StepUndone = StepUndone;
  type onlineProgramsV3Participant_universal_d_ListResolvedStepsRequest = ListResolvedStepsRequest;
  type onlineProgramsV3Participant_universal_d_ListResolvedStepsResponse = ListResolvedStepsResponse;
  type onlineProgramsV3Participant_universal_d_GetResolvedStepRequest = GetResolvedStepRequest;
  type onlineProgramsV3Participant_universal_d_GetResolvedStepResponse = GetResolvedStepResponse;
  type onlineProgramsV3Participant_universal_d_QueryResolvedStepsRequest = QueryResolvedStepsRequest;
  type onlineProgramsV3Participant_universal_d_QueryResolvedStepsResponse = QueryResolvedStepsResponse;
  type onlineProgramsV3Participant_universal_d_BulkCreateResolvedStepMigrationRequest = BulkCreateResolvedStepMigrationRequest;
  type onlineProgramsV3Participant_universal_d_BulkCreateResolvedStepMigrationResponse = BulkCreateResolvedStepMigrationResponse;
  type onlineProgramsV3Participant_universal_d_CommonItemMetadata = CommonItemMetadata;
  type onlineProgramsV3Participant_universal_d_BulkResolvedStepResult = BulkResolvedStepResult;
  type onlineProgramsV3Participant_universal_d_CommonBulkActionMetadata = CommonBulkActionMetadata;
  type onlineProgramsV3Participant_universal_d_JoinProgramRequest = JoinProgramRequest;
  type onlineProgramsV3Participant_universal_d_JoinProgramResponse = JoinProgramResponse;
  type onlineProgramsV3Participant_universal_d_ParticipantJoined = ParticipantJoined;
  type onlineProgramsV3Participant_universal_d_GetParticipantRequest = GetParticipantRequest;
  type onlineProgramsV3Participant_universal_d_GetParticipantResponse = GetParticipantResponse;
  type onlineProgramsV3Participant_universal_d_LeaveProgramRequest = LeaveProgramRequest;
  type onlineProgramsV3Participant_universal_d_LeaveProgramResponse = LeaveProgramResponse;
  type onlineProgramsV3Participant_universal_d_ParticipantLeft = ParticipantLeft;
  type onlineProgramsV3Participant_universal_d_QueryParticipantsRequest = QueryParticipantsRequest;
  type onlineProgramsV3Participant_universal_d_QueryParticipantsResponse = QueryParticipantsResponse;
  type onlineProgramsV3Participant_universal_d_QueryProgramSummariesRequest = QueryProgramSummariesRequest;
  type onlineProgramsV3Participant_universal_d_CommonCursorQuery = CommonCursorQuery;
  type onlineProgramsV3Participant_universal_d_CommonCursorQueryPagingMethodOneOf = CommonCursorQueryPagingMethodOneOf;
  type onlineProgramsV3Participant_universal_d_CommonSorting = CommonSorting;
  type onlineProgramsV3Participant_universal_d_CommonSortOrder = CommonSortOrder;
  const onlineProgramsV3Participant_universal_d_CommonSortOrder: typeof CommonSortOrder;
  type onlineProgramsV3Participant_universal_d_CommonCursorPaging = CommonCursorPaging;
  type onlineProgramsV3Participant_universal_d_QueryProgramSummariesResponse = QueryProgramSummariesResponse;
  type onlineProgramsV3Participant_universal_d_ProgramSummary = ProgramSummary;
  type onlineProgramsV3Participant_universal_d_V3State = V3State;
  const onlineProgramsV3Participant_universal_d_V3State: typeof V3State;
  type onlineProgramsV3Participant_universal_d_RewardCertificate = RewardCertificate;
  type onlineProgramsV3Participant_universal_d_Statistic = Statistic;
  type onlineProgramsV3Participant_universal_d_CommonCursorPagingMetadata = CommonCursorPagingMetadata;
  type onlineProgramsV3Participant_universal_d_CommonCursors = CommonCursors;
  type onlineProgramsV3Participant_universal_d_GetStatisticsRequest = GetStatisticsRequest;
  type onlineProgramsV3Participant_universal_d_GetStatisticsResponse = GetStatisticsResponse;
  type onlineProgramsV3Participant_universal_d_GetProgramSummariesRequest = GetProgramSummariesRequest;
  type onlineProgramsV3Participant_universal_d_GetProgramSummariesResponse = GetProgramSummariesResponse;
  type onlineProgramsV3Participant_universal_d_ParticipantsSummary = ParticipantsSummary;
  type onlineProgramsV3Participant_universal_d_OfflinePaymentSent = OfflinePaymentSent;
  type onlineProgramsV3Participant_universal_d_PaymentFailed = PaymentFailed;
  type onlineProgramsV3Participant_universal_d_SinglePaymentConfirmed = SinglePaymentConfirmed;
  type onlineProgramsV3Participant_universal_d_SinglePaymentDeclined = SinglePaymentDeclined;
  type onlineProgramsV3Participant_universal_d_BenefitNotification = BenefitNotification;
  type onlineProgramsV3Participant_universal_d_Benefit = Benefit;
  type onlineProgramsV3Participant_universal_d_EntryPass = EntryPass;
  type onlineProgramsV3Participant_universal_d_Discount = Discount;
  type onlineProgramsV3Participant_universal_d_DiscountDiscountOneOf = DiscountDiscountOneOf;
  type onlineProgramsV3Participant_universal_d_BenefitType = BenefitType;
  const onlineProgramsV3Participant_universal_d_BenefitType: typeof BenefitType;
  type onlineProgramsV3Participant_universal_d_Behavior = Behavior;
  type onlineProgramsV3Participant_universal_d_BehaviorBehaviorOneOf = BehaviorBehaviorOneOf;
  type onlineProgramsV3Participant_universal_d_Event = Event;
  const onlineProgramsV3Participant_universal_d_Event: typeof Event;
  type onlineProgramsV3Participant_universal_d_BulkInviteToProgramRequest = BulkInviteToProgramRequest;
  type onlineProgramsV3Participant_universal_d_BulkInviteToProgramResponse = BulkInviteToProgramResponse;
  type onlineProgramsV3Participant_universal_d_BulkInviteToProgramResult = BulkInviteToProgramResult;
  type onlineProgramsV3Participant_universal_d_ParticipantInvited = ParticipantInvited;
  type onlineProgramsV3Participant_universal_d_BulkInviteAllToProgramRequest = BulkInviteAllToProgramRequest;
  type onlineProgramsV3Participant_universal_d_BulkInviteAllToProgramResponse = BulkInviteAllToProgramResponse;
  type onlineProgramsV3Participant_universal_d_BulkAddToProgramRequest = BulkAddToProgramRequest;
  type onlineProgramsV3Participant_universal_d_BulkAddToProgramResponse = BulkAddToProgramResponse;
  type onlineProgramsV3Participant_universal_d_BulkAddToProgramResult = BulkAddToProgramResult;
  type onlineProgramsV3Participant_universal_d_ParticipantAdded = ParticipantAdded;
  type onlineProgramsV3Participant_universal_d_BulkAddAllToProgramRequest = BulkAddAllToProgramRequest;
  type onlineProgramsV3Participant_universal_d_BulkAddAllToProgramResponse = BulkAddAllToProgramResponse;
  type onlineProgramsV3Participant_universal_d_BulkApproveParticipantRequest = BulkApproveParticipantRequest;
  type onlineProgramsV3Participant_universal_d_BulkApproveParticipantResponse = BulkApproveParticipantResponse;
  type onlineProgramsV3Participant_universal_d_BulkApproveParticipantResult = BulkApproveParticipantResult;
  type onlineProgramsV3Participant_universal_d_ParticipantApproved = ParticipantApproved;
  type onlineProgramsV3Participant_universal_d_BulkApproveAllParticipantRequest = BulkApproveAllParticipantRequest;
  type onlineProgramsV3Participant_universal_d_BulkApproveAllParticipantResponse = BulkApproveAllParticipantResponse;
  type onlineProgramsV3Participant_universal_d_DeleteParticipantRequest = DeleteParticipantRequest;
  type onlineProgramsV3Participant_universal_d_DeleteParticipantResponse = DeleteParticipantResponse;
  type onlineProgramsV3Participant_universal_d_ParticipantRejected = ParticipantRejected;
  type onlineProgramsV3Participant_universal_d_IssueCertificateRequest = IssueCertificateRequest;
  type onlineProgramsV3Participant_universal_d_IssueCertificateResponse = IssueCertificateResponse;
  type onlineProgramsV3Participant_universal_d_ApplyCouponRequest = ApplyCouponRequest;
  type onlineProgramsV3Participant_universal_d_ApplyCouponResponse = ApplyCouponResponse;
  type onlineProgramsV3Participant_universal_d_RevertCouponRequest = RevertCouponRequest;
  type onlineProgramsV3Participant_universal_d_RevertCouponResponse = RevertCouponResponse;
  const onlineProgramsV3Participant_universal_d_exportParticipantsStats: typeof exportParticipantsStats;
  const onlineProgramsV3Participant_universal_d_resolveStep: typeof resolveStep;
  type onlineProgramsV3Participant_universal_d_ResolveStepIdentifiers = ResolveStepIdentifiers;
  type onlineProgramsV3Participant_universal_d_ResolveStepOptions = ResolveStepOptions;
  const onlineProgramsV3Participant_universal_d_undoStep: typeof undoStep;
  type onlineProgramsV3Participant_universal_d_UndoStepIdentifiers = UndoStepIdentifiers;
  const onlineProgramsV3Participant_universal_d_listResolvedSteps: typeof listResolvedSteps;
  const onlineProgramsV3Participant_universal_d_getResolvedStep: typeof getResolvedStep;
  type onlineProgramsV3Participant_universal_d_GetResolvedStepIdentifiers = GetResolvedStepIdentifiers;
  const onlineProgramsV3Participant_universal_d_queryResolvedSteps: typeof queryResolvedSteps;
  type onlineProgramsV3Participant_universal_d_QueryResolvedStepsOptions = QueryResolvedStepsOptions;
  const onlineProgramsV3Participant_universal_d_bulkCreateResolvedStepMigration: typeof bulkCreateResolvedStepMigration;
  const onlineProgramsV3Participant_universal_d_joinProgram: typeof joinProgram;
  const onlineProgramsV3Participant_universal_d_getParticipant: typeof getParticipant;
  const onlineProgramsV3Participant_universal_d_leaveProgram: typeof leaveProgram;
  const onlineProgramsV3Participant_universal_d_queryParticipants: typeof queryParticipants;
  type onlineProgramsV3Participant_universal_d_ParticipantsQueryResult = ParticipantsQueryResult;
  type onlineProgramsV3Participant_universal_d_ParticipantsQueryBuilder = ParticipantsQueryBuilder;
  const onlineProgramsV3Participant_universal_d_queryProgramSummaries: typeof queryProgramSummaries;
  type onlineProgramsV3Participant_universal_d_QueryProgramSummariesOptions = QueryProgramSummariesOptions;
  const onlineProgramsV3Participant_universal_d_getStatistics: typeof getStatistics;
  type onlineProgramsV3Participant_universal_d_GetStatisticsOptions = GetStatisticsOptions;
  const onlineProgramsV3Participant_universal_d_getProgramSummaries: typeof getProgramSummaries;
  type onlineProgramsV3Participant_universal_d_GetProgramSummariesOptions = GetProgramSummariesOptions;
  const onlineProgramsV3Participant_universal_d_bulkInviteToProgram: typeof bulkInviteToProgram;
  type onlineProgramsV3Participant_universal_d_BulkInviteToProgramOptions = BulkInviteToProgramOptions;
  const onlineProgramsV3Participant_universal_d_bulkInviteAllToProgram: typeof bulkInviteAllToProgram;
  type onlineProgramsV3Participant_universal_d_BulkInviteAllToProgramOptions = BulkInviteAllToProgramOptions;
  const onlineProgramsV3Participant_universal_d_bulkAddToProgram: typeof bulkAddToProgram;
  type onlineProgramsV3Participant_universal_d_BulkAddToProgramOptions = BulkAddToProgramOptions;
  const onlineProgramsV3Participant_universal_d_bulkAddAllToProgram: typeof bulkAddAllToProgram;
  type onlineProgramsV3Participant_universal_d_BulkAddAllToProgramOptions = BulkAddAllToProgramOptions;
  const onlineProgramsV3Participant_universal_d_bulkApproveParticipant: typeof bulkApproveParticipant;
  type onlineProgramsV3Participant_universal_d_BulkApproveParticipantOptions = BulkApproveParticipantOptions;
  const onlineProgramsV3Participant_universal_d_bulkApproveAllParticipant: typeof bulkApproveAllParticipant;
  type onlineProgramsV3Participant_universal_d_BulkApproveAllParticipantOptions = BulkApproveAllParticipantOptions;
  const onlineProgramsV3Participant_universal_d_deleteParticipant: typeof deleteParticipant;
  const onlineProgramsV3Participant_universal_d_issueCertificate: typeof issueCertificate;
  const onlineProgramsV3Participant_universal_d_applyCoupon: typeof applyCoupon;
  type onlineProgramsV3Participant_universal_d_ApplyCouponIdentifiers = ApplyCouponIdentifiers;
  const onlineProgramsV3Participant_universal_d_revertCoupon: typeof revertCoupon;
  type onlineProgramsV3Participant_universal_d_RevertCouponIdentifiers = RevertCouponIdentifiers;
  namespace onlineProgramsV3Participant_universal_d {
    export {
      onlineProgramsV3Participant_universal_d_Participant as Participant,
      onlineProgramsV3Participant_universal_d_ParticipantStateOptionsOneOf as ParticipantStateOptionsOneOf,
      onlineProgramsV3Participant_universal_d_JoinPath as JoinPath,
      onlineProgramsV3Participant_universal_d_SinglePaymentOptions as SinglePaymentOptions,
      onlineProgramsV3Participant_universal_d_PaidPlanOptions as PaidPlanOptions,
      onlineProgramsV3Participant_universal_d_FreeCouponOptions as FreeCouponOptions,
      onlineProgramsV3Participant_universal_d_Progress as Progress,
      State$2 as State,
      Certificate$1 as Certificate,
      onlineProgramsV3Participant_universal_d_PaymentPendingOptions as PaymentPendingOptions,
      onlineProgramsV3Participant_universal_d_JoinedOptions as JoinedOptions,
      onlineProgramsV3Participant_universal_d_JoinedOptionsJoinPathOptionsOneOf as JoinedOptionsJoinPathOptionsOneOf,
      onlineProgramsV3Participant_universal_d_CompletedOptions as CompletedOptions,
      onlineProgramsV3Participant_universal_d_FailedOptions as FailedOptions,
      onlineProgramsV3Participant_universal_d_SuspendedOptions as SuspendedOptions,
      onlineProgramsV3Participant_universal_d_ExportParticipantsStatsRequest as ExportParticipantsStatsRequest,
      onlineProgramsV3Participant_universal_d_ExportParticipantsStatsResponse as ExportParticipantsStatsResponse,
      onlineProgramsV3Participant_universal_d_ResolveStepRequest as ResolveStepRequest,
      onlineProgramsV3Participant_universal_d_ResolveStepResponse as ResolveStepResponse,
      onlineProgramsV3Participant_universal_d_ResolvedStep as ResolvedStep,
      onlineProgramsV3Participant_universal_d_Status as Status,
      onlineProgramsV3Participant_universal_d_StepResolved as StepResolved,
      onlineProgramsV3Participant_universal_d_UndoStepRequest as UndoStepRequest,
      onlineProgramsV3Participant_universal_d_UndoStepResponse as UndoStepResponse,
      onlineProgramsV3Participant_universal_d_StepUndone as StepUndone,
      onlineProgramsV3Participant_universal_d_ListResolvedStepsRequest as ListResolvedStepsRequest,
      onlineProgramsV3Participant_universal_d_ListResolvedStepsResponse as ListResolvedStepsResponse,
      onlineProgramsV3Participant_universal_d_GetResolvedStepRequest as GetResolvedStepRequest,
      onlineProgramsV3Participant_universal_d_GetResolvedStepResponse as GetResolvedStepResponse,
      onlineProgramsV3Participant_universal_d_QueryResolvedStepsRequest as QueryResolvedStepsRequest,
      CursorQuery$3 as CursorQuery,
      CursorQueryPagingMethodOneOf$3 as CursorQueryPagingMethodOneOf,
      Sorting$3 as Sorting,
      SortOrder$3 as SortOrder,
      CursorPaging$3 as CursorPaging,
      onlineProgramsV3Participant_universal_d_QueryResolvedStepsResponse as QueryResolvedStepsResponse,
      CursorPagingMetadata$3 as CursorPagingMetadata,
      Cursors$3 as Cursors,
      onlineProgramsV3Participant_universal_d_BulkCreateResolvedStepMigrationRequest as BulkCreateResolvedStepMigrationRequest,
      onlineProgramsV3Participant_universal_d_BulkCreateResolvedStepMigrationResponse as BulkCreateResolvedStepMigrationResponse,
      onlineProgramsV3Participant_universal_d_CommonItemMetadata as CommonItemMetadata,
      ApplicationError$3 as ApplicationError,
      onlineProgramsV3Participant_universal_d_BulkResolvedStepResult as BulkResolvedStepResult,
      onlineProgramsV3Participant_universal_d_CommonBulkActionMetadata as CommonBulkActionMetadata,
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
      onlineProgramsV3Participant_universal_d_JoinProgramRequest as JoinProgramRequest,
      onlineProgramsV3Participant_universal_d_JoinProgramResponse as JoinProgramResponse,
      onlineProgramsV3Participant_universal_d_ParticipantJoined as ParticipantJoined,
      onlineProgramsV3Participant_universal_d_GetParticipantRequest as GetParticipantRequest,
      onlineProgramsV3Participant_universal_d_GetParticipantResponse as GetParticipantResponse,
      onlineProgramsV3Participant_universal_d_LeaveProgramRequest as LeaveProgramRequest,
      onlineProgramsV3Participant_universal_d_LeaveProgramResponse as LeaveProgramResponse,
      onlineProgramsV3Participant_universal_d_ParticipantLeft as ParticipantLeft,
      onlineProgramsV3Participant_universal_d_QueryParticipantsRequest as QueryParticipantsRequest,
      onlineProgramsV3Participant_universal_d_QueryParticipantsResponse as QueryParticipantsResponse,
      onlineProgramsV3Participant_universal_d_QueryProgramSummariesRequest as QueryProgramSummariesRequest,
      onlineProgramsV3Participant_universal_d_CommonCursorQuery as CommonCursorQuery,
      onlineProgramsV3Participant_universal_d_CommonCursorQueryPagingMethodOneOf as CommonCursorQueryPagingMethodOneOf,
      onlineProgramsV3Participant_universal_d_CommonSorting as CommonSorting,
      onlineProgramsV3Participant_universal_d_CommonSortOrder as CommonSortOrder,
      onlineProgramsV3Participant_universal_d_CommonCursorPaging as CommonCursorPaging,
      onlineProgramsV3Participant_universal_d_QueryProgramSummariesResponse as QueryProgramSummariesResponse,
      onlineProgramsV3Participant_universal_d_ProgramSummary as ProgramSummary,
      Program$1 as Program,
      onlineProgramsV3Participant_universal_d_V3State as V3State,
      Description$3 as Description,
      DescriptionMediaOneOf$3 as DescriptionMediaOneOf,
      VideoResolution$3 as VideoResolution,
      Timeline$1 as Timeline,
      TimelineFinishConditionOptionsOneOf$1 as TimelineFinishConditionOptionsOneOf,
      FinishCondition$1 as FinishCondition,
      TimeEvaluationOptions$1 as TimeEvaluationOptions,
      Restrictions$1 as Restrictions,
      Money$1 as Money,
      Seo$1 as Seo,
      SeoSchema$1 as SeoSchema,
      Keyword$1 as Keyword,
      Tag$1 as Tag,
      Settings$1 as Settings,
      Reward$1 as Reward,
      Trigger$1 as Trigger,
      onlineProgramsV3Participant_universal_d_RewardCertificate as RewardCertificate,
      AccessType$1 as AccessType,
      ExtendedFields$1 as ExtendedFields,
      onlineProgramsV3Participant_universal_d_Statistic as Statistic,
      Membership$1 as Membership,
      onlineProgramsV3Participant_universal_d_CommonCursorPagingMetadata as CommonCursorPagingMetadata,
      onlineProgramsV3Participant_universal_d_CommonCursors as CommonCursors,
      onlineProgramsV3Participant_universal_d_GetStatisticsRequest as GetStatisticsRequest,
      onlineProgramsV3Participant_universal_d_GetStatisticsResponse as GetStatisticsResponse,
      onlineProgramsV3Participant_universal_d_GetProgramSummariesRequest as GetProgramSummariesRequest,
      onlineProgramsV3Participant_universal_d_GetProgramSummariesResponse as GetProgramSummariesResponse,
      onlineProgramsV3Participant_universal_d_ParticipantsSummary as ParticipantsSummary,
      onlineProgramsV3Participant_universal_d_OfflinePaymentSent as OfflinePaymentSent,
      onlineProgramsV3Participant_universal_d_PaymentFailed as PaymentFailed,
      onlineProgramsV3Participant_universal_d_SinglePaymentConfirmed as SinglePaymentConfirmed,
      onlineProgramsV3Participant_universal_d_SinglePaymentDeclined as SinglePaymentDeclined,
      onlineProgramsV3Participant_universal_d_BenefitNotification as BenefitNotification,
      onlineProgramsV3Participant_universal_d_Benefit as Benefit,
      onlineProgramsV3Participant_universal_d_EntryPass as EntryPass,
      onlineProgramsV3Participant_universal_d_Discount as Discount,
      onlineProgramsV3Participant_universal_d_DiscountDiscountOneOf as DiscountDiscountOneOf,
      onlineProgramsV3Participant_universal_d_BenefitType as BenefitType,
      onlineProgramsV3Participant_universal_d_Behavior as Behavior,
      onlineProgramsV3Participant_universal_d_BehaviorBehaviorOneOf as BehaviorBehaviorOneOf,
      onlineProgramsV3Participant_universal_d_Event as Event,
      onlineProgramsV3Participant_universal_d_BulkInviteToProgramRequest as BulkInviteToProgramRequest,
      onlineProgramsV3Participant_universal_d_BulkInviteToProgramResponse as BulkInviteToProgramResponse,
      ItemMetadata$3 as ItemMetadata,
      onlineProgramsV3Participant_universal_d_BulkInviteToProgramResult as BulkInviteToProgramResult,
      BulkActionMetadata$3 as BulkActionMetadata,
      onlineProgramsV3Participant_universal_d_ParticipantInvited as ParticipantInvited,
      onlineProgramsV3Participant_universal_d_BulkInviteAllToProgramRequest as BulkInviteAllToProgramRequest,
      onlineProgramsV3Participant_universal_d_BulkInviteAllToProgramResponse as BulkInviteAllToProgramResponse,
      onlineProgramsV3Participant_universal_d_BulkAddToProgramRequest as BulkAddToProgramRequest,
      onlineProgramsV3Participant_universal_d_BulkAddToProgramResponse as BulkAddToProgramResponse,
      onlineProgramsV3Participant_universal_d_BulkAddToProgramResult as BulkAddToProgramResult,
      onlineProgramsV3Participant_universal_d_ParticipantAdded as ParticipantAdded,
      onlineProgramsV3Participant_universal_d_BulkAddAllToProgramRequest as BulkAddAllToProgramRequest,
      onlineProgramsV3Participant_universal_d_BulkAddAllToProgramResponse as BulkAddAllToProgramResponse,
      onlineProgramsV3Participant_universal_d_BulkApproveParticipantRequest as BulkApproveParticipantRequest,
      onlineProgramsV3Participant_universal_d_BulkApproveParticipantResponse as BulkApproveParticipantResponse,
      onlineProgramsV3Participant_universal_d_BulkApproveParticipantResult as BulkApproveParticipantResult,
      onlineProgramsV3Participant_universal_d_ParticipantApproved as ParticipantApproved,
      onlineProgramsV3Participant_universal_d_BulkApproveAllParticipantRequest as BulkApproveAllParticipantRequest,
      onlineProgramsV3Participant_universal_d_BulkApproveAllParticipantResponse as BulkApproveAllParticipantResponse,
      onlineProgramsV3Participant_universal_d_DeleteParticipantRequest as DeleteParticipantRequest,
      onlineProgramsV3Participant_universal_d_DeleteParticipantResponse as DeleteParticipantResponse,
      onlineProgramsV3Participant_universal_d_ParticipantRejected as ParticipantRejected,
      onlineProgramsV3Participant_universal_d_IssueCertificateRequest as IssueCertificateRequest,
      onlineProgramsV3Participant_universal_d_IssueCertificateResponse as IssueCertificateResponse,
      onlineProgramsV3Participant_universal_d_ApplyCouponRequest as ApplyCouponRequest,
      onlineProgramsV3Participant_universal_d_ApplyCouponResponse as ApplyCouponResponse,
      onlineProgramsV3Participant_universal_d_RevertCouponRequest as RevertCouponRequest,
      onlineProgramsV3Participant_universal_d_RevertCouponResponse as RevertCouponResponse,
      onlineProgramsV3Participant_universal_d_exportParticipantsStats as exportParticipantsStats,
      onlineProgramsV3Participant_universal_d_resolveStep as resolveStep,
      onlineProgramsV3Participant_universal_d_ResolveStepIdentifiers as ResolveStepIdentifiers,
      onlineProgramsV3Participant_universal_d_ResolveStepOptions as ResolveStepOptions,
      onlineProgramsV3Participant_universal_d_undoStep as undoStep,
      onlineProgramsV3Participant_universal_d_UndoStepIdentifiers as UndoStepIdentifiers,
      onlineProgramsV3Participant_universal_d_listResolvedSteps as listResolvedSteps,
      onlineProgramsV3Participant_universal_d_getResolvedStep as getResolvedStep,
      onlineProgramsV3Participant_universal_d_GetResolvedStepIdentifiers as GetResolvedStepIdentifiers,
      onlineProgramsV3Participant_universal_d_queryResolvedSteps as queryResolvedSteps,
      onlineProgramsV3Participant_universal_d_QueryResolvedStepsOptions as QueryResolvedStepsOptions,
      onlineProgramsV3Participant_universal_d_bulkCreateResolvedStepMigration as bulkCreateResolvedStepMigration,
      onlineProgramsV3Participant_universal_d_joinProgram as joinProgram,
      onlineProgramsV3Participant_universal_d_getParticipant as getParticipant,
      onlineProgramsV3Participant_universal_d_leaveProgram as leaveProgram,
      onlineProgramsV3Participant_universal_d_queryParticipants as queryParticipants,
      onlineProgramsV3Participant_universal_d_ParticipantsQueryResult as ParticipantsQueryResult,
      onlineProgramsV3Participant_universal_d_ParticipantsQueryBuilder as ParticipantsQueryBuilder,
      onlineProgramsV3Participant_universal_d_queryProgramSummaries as queryProgramSummaries,
      onlineProgramsV3Participant_universal_d_QueryProgramSummariesOptions as QueryProgramSummariesOptions,
      onlineProgramsV3Participant_universal_d_getStatistics as getStatistics,
      onlineProgramsV3Participant_universal_d_GetStatisticsOptions as GetStatisticsOptions,
      onlineProgramsV3Participant_universal_d_getProgramSummaries as getProgramSummaries,
      onlineProgramsV3Participant_universal_d_GetProgramSummariesOptions as GetProgramSummariesOptions,
      onlineProgramsV3Participant_universal_d_bulkInviteToProgram as bulkInviteToProgram,
      onlineProgramsV3Participant_universal_d_BulkInviteToProgramOptions as BulkInviteToProgramOptions,
      onlineProgramsV3Participant_universal_d_bulkInviteAllToProgram as bulkInviteAllToProgram,
      onlineProgramsV3Participant_universal_d_BulkInviteAllToProgramOptions as BulkInviteAllToProgramOptions,
      onlineProgramsV3Participant_universal_d_bulkAddToProgram as bulkAddToProgram,
      onlineProgramsV3Participant_universal_d_BulkAddToProgramOptions as BulkAddToProgramOptions,
      onlineProgramsV3Participant_universal_d_bulkAddAllToProgram as bulkAddAllToProgram,
      onlineProgramsV3Participant_universal_d_BulkAddAllToProgramOptions as BulkAddAllToProgramOptions,
      onlineProgramsV3Participant_universal_d_bulkApproveParticipant as bulkApproveParticipant,
      onlineProgramsV3Participant_universal_d_BulkApproveParticipantOptions as BulkApproveParticipantOptions,
      onlineProgramsV3Participant_universal_d_bulkApproveAllParticipant as bulkApproveAllParticipant,
      onlineProgramsV3Participant_universal_d_BulkApproveAllParticipantOptions as BulkApproveAllParticipantOptions,
      onlineProgramsV3Participant_universal_d_deleteParticipant as deleteParticipant,
      onlineProgramsV3Participant_universal_d_issueCertificate as issueCertificate,
      onlineProgramsV3Participant_universal_d_applyCoupon as applyCoupon,
      onlineProgramsV3Participant_universal_d_ApplyCouponIdentifiers as ApplyCouponIdentifiers,
      onlineProgramsV3Participant_universal_d_revertCoupon as revertCoupon,
      onlineProgramsV3Participant_universal_d_RevertCouponIdentifiers as RevertCouponIdentifiers,
    };
  }
  
  interface Program {
      /**
       * Program ID.
       * @readonly
       */
      _id?: string | null;
      /** @readonly */
      revision?: string | null;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
      /**
       * current program state / does participant need it?
       * @readonly
       */
      state?: State$1;
      /**
       * assigned categories
       * @readonly
       */
      categoryIds?: string[];
      /** general program info. */
      description?: Description$2;
      /** timeline type -> Self-paced, time-restricted. */
      timeline?: Timeline;
      /** participant limitation, step-completion pace and etc. */
      restrictions?: Restrictions;
      /** single-payment price. */
      pricing?: Money;
      /** seo settings. */
      seo?: Seo;
      /** rewards to be assigned after reaching some of the program milestones. */
      rewards?: Reward[];
      /** connected social group. */
      socialGroupId?: string | null;
      /** join flow options. */
      accessType?: AccessType;
      /** extensible field */
      extendedFields?: ExtendedFields;
      /** if true -> invoice is sent to the customer who purchased the program via single payment; else -> payment confirmation email is sent */
      shouldSendInvoice?: boolean;
  }
  enum State$1 {
      /** not published program, visible only on BM */
      DRAFT = "DRAFT",
      /** program visible regarding to restrictions */
      PUBLISHED = "PUBLISHED",
      /** program isn't available to join. */
      ENDED = "ENDED",
      /** closed program. Joins and sections/steps are not available for participants. */
      ARCHIVED = "ARCHIVED"
  }
  interface Description$2 extends DescriptionMediaOneOf$2 {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
      /** step title */
      title?: string;
      /** step additional details */
      details?: string | null;
  }
  /** @oneof */
  interface DescriptionMediaOneOf$2 {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
  }
  interface VideoResolution$2 {
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
      /** Video format for example, mp4, hls. */
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
  interface Timeline extends TimelineFinishConditionOptionsOneOf {
      /** evaluate after some period of time in days. */
      timeEvaluationOptions?: TimeEvaluationOptions;
      /** are sections/steps evaluated every day? Or can UoU participate in a self paced mode? */
      selfPaced?: boolean;
      /** everyone starts on this day */
      startDate?: string | null;
      /** condition on which the program is completed */
      finishCondition?: FinishCondition;
  }
  /** @oneof */
  interface TimelineFinishConditionOptionsOneOf {
      /** evaluate after some period of time in days. */
      timeEvaluationOptions?: TimeEvaluationOptions;
  }
  enum FinishCondition {
      UNKNOWN_FINISH_CONDITION = "UNKNOWN_FINISH_CONDITION",
      /** finish participation after some time. */
      TIME_EVALUATION = "TIME_EVALUATION",
      /** finish participation when all steps are resolved. */
      ALL_STEPS_COMPLETED = "ALL_STEPS_COMPLETED"
  }
  interface TimeEvaluationOptions {
      /** duration in days */
      durationInDays?: number;
  }
  interface Restrictions {
      /** limit of active participants in the program. */
      maxParticipants?: number | null;
      /** hide steps in the Pending state. */
      hideFutureSteps?: boolean;
      /** allow participants complete steps in the certain order. */
      resolveStepsInOrder?: boolean;
      /** allow program participants to share their progress in group */
      shareProgress?: boolean;
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
  interface Seo {
      /** challenge slug expression. */
      slug?: string;
      /** schema used by Seo team */
      seoData?: SeoSchema;
      /** program url */
      url?: string;
      /** image url from description media */
      imageUrl?: string | null;
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
  interface Reward {
      /** on which action rewards must be assigned. */
      trigger?: Trigger;
      /** badges participant will get on program complete */
      badgeIds?: string[];
      /** certificate for program. Currently is program GUID */
      certificate?: Certificate;
  }
  enum Trigger {
      /** member joins the program */
      JOINED_TO_PROGRAM = "JOINED_TO_PROGRAM",
      /** at least one step completed */
      STEP_COMPLETED = "STEP_COMPLETED",
      /** all steps are completed. */
      ALL_STEPS_COMPLETED = "ALL_STEPS_COMPLETED"
  }
  interface Certificate {
      /** Certificate for program completion. Currently is program GUID */
      _id?: string;
      /** date it was connected to program */
      connectedDate?: Date;
  }
  enum AccessType {
      /** join without approvals */
      PUBLIC = "PUBLIC",
      /** send a join request to the owner and get an approval from him. */
      PRIVATE = "PRIVATE",
      /** join possible only after owner invite. */
      SECRET = "SECRET"
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
  interface DiscoverableContentChange extends DiscoverableContentChangeChangeOneOf {
      created?: ContentCreated;
      updated?: ContentUpdated;
      deleted?: ContentDeleted;
      /** content id */
      _id?: string;
      /** fqdn for the content */
      fqdn?: string;
  }
  /** @oneof */
  interface DiscoverableContentChangeChangeOneOf {
      created?: ContentCreated;
      updated?: ContentUpdated;
      deleted?: ContentDeleted;
  }
  interface ContentCreated {
      /** created content */
      content?: Content;
  }
  /** content data */
  interface Content {
      /** content id */
      _id?: string;
      /** fqdn for the content */
      fqdn?: string;
      /** optional content title */
      title?: string | null;
      /** content parts */
      contentParts?: ContentPart[];
      /** classifier values that apply to content (i.e. Blog categories) */
      classifierValues?: ClassifierValues[];
      /** author info */
      authorInfo?: AuthorInfo;
      /** time of content creation */
      _createdDate?: Date;
      /** parent content info, optional */
      parent?: ParentInfo;
      /** optional deep link to content in vertical ui */
      deepLink?: Link;
      /** content visibility (read access) settings */
      visibility?: Visibility;
  }
  interface ContentPart extends ContentPartContentOneOf {
      /** plain text content */
      textContent?: string | null;
      /** draftJs content */
      draftJs?: string | null;
      /** Wix Media item */
      attachment?: MediaItem;
      /** content id stored in the future (rich) content server */
      storedContentId?: string | null;
      jsonData?: any;
      /** content part name */
      name?: string;
  }
  /** @oneof */
  interface ContentPartContentOneOf {
      /** plain text content */
      textContent?: string | null;
      /** draftJs content */
      draftJs?: string | null;
      /** Wix Media item */
      attachment?: MediaItem;
      /** content id stored in the future (rich) content server */
      storedContentId?: string | null;
      jsonData?: any;
  }
  /** Deprecated - Copy this message into your service, do not reference it */
  interface MediaItem extends MediaItemMediaOneOf {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
      /** WixMedia document */
      document?: string;
  }
  /** @oneof */
  interface MediaItemMediaOneOf {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
      /** WixMedia document */
      document?: string;
  }
  interface ClassifierValues {
      /** classifier type, fqdn if applicable */
      type?: string;
      /** applicable value ids */
      valueIds?: string[];
  }
  interface AuthorInfo extends AuthorInfoIdentityOneOf {
      visitorId?: string;
      siteMemberId?: string;
      userId?: string;
      service?: string;
      externalApp?: string;
  }
  /** @oneof */
  interface AuthorInfoIdentityOneOf {
      visitorId?: string;
      siteMemberId?: string;
      userId?: string;
      service?: string;
      externalApp?: string;
  }
  interface ParentInfo {
      /** fqdn for the parent */
      fqdn?: string;
      /** parent id */
      parentId?: string;
      /** classifier values that apply to parent (i.e. Blog categories) */
      classifierValues?: ClassifierValues[];
      /** classifier values for parent are not known and should be queried from SPI for parent if possible */
      classifiersUnknown?: boolean;
  }
  /** to be replaced by commons wix.common.Link once merged */
  interface Link {
      /** Page url */
      url?: string;
      /** The mobile deeplink - e.g wix://app/1234-1234-1234-1234/memberships/manager */
      mobileLink?: string;
  }
  interface Visibility {
      /** enum stating content visibility type */
      visibilityType?: VisibilityType;
      /** array of permission ids or member groups that can be used with isPermitted to check content visibility */
      permissions?: string[];
  }
  enum VisibilityType {
      UNKNOWN = "UNKNOWN",
      PUBLIC = "PUBLIC",
      RESTRICTED = "RESTRICTED"
  }
  interface ContentUpdated {
      /** updated content */
      content?: Content;
  }
  interface ContentDeleted {
  }
  interface CreateProgramRequest {
      /** Program to be created. */
      program: Program;
  }
  interface CreateProgramResponse {
      /** The created Program. */
      program?: Program;
  }
  interface DuplicateProgramRequest {
      /** Program to be duplicated from. */
      programId: string;
  }
  interface DuplicateProgramResponse {
      /** The created Program. */
      program?: Program;
  }
  interface ProgramDuplicated {
      /** Newly created program */
      program?: Program;
      /** Program that was duplicated */
      duplicatedFrom?: Program;
  }
  interface GetProgramRequest {
      /** ID or slug of the Program to retrieve. */
      programId: string;
  }
  interface GetProgramResponse {
      /** The requested Program. */
      program?: Program;
  }
  interface UpdateProgramRequest {
      /** Program to be updated, may be partial. */
      program: Program;
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateProgramResponse {
      /** Updated Program. */
      program?: Program;
  }
  interface WrongStartDateErrorDetails {
  }
  interface WrongParticipantsNumberErrorDetails {
      /** Participants that already joined the program */
      activeParticipantsCount?: number;
  }
  interface DuplicatedSlugErrorDetails {
  }
  interface DeleteProgramRequest {
      /** Id of the Program to delete. */
      programId: string;
  }
  interface DeleteProgramResponse {
  }
  interface QueryProgramsRequest {
      /** Query to filter programs */
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
  interface QueryProgramsResponse {
      /** Found programs */
      programs?: Program[];
      /** paging */
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
  interface PublishProgramRequest {
      /** Program to publish */
      programId: string;
  }
  interface PublishProgramResponse {
      /** Published program */
      program?: Program;
  }
  interface ChangedProgramState {
      /** Id of the Program. */
      programId?: string;
      /** program's new state */
      newState?: State$1;
  }
  interface EndProgramRequest {
      /** Program to finish */
      programId: string;
  }
  interface EndProgramResponse {
      /** Finished program */
      program?: Program;
  }
  interface ArchiveProgramRequest {
      /** Program to archive */
      programId: string;
  }
  interface ArchiveProgramResponse {
      /** Archived program */
      program?: Program;
  }
  interface BulkUpdateProgramsRequest {
      /** List of programs you want to update */
      programs: MaskedProgram[];
      /** set to `true` if you wish to receive back the created programs in the response */
      returnEntity?: boolean;
  }
  interface MaskedProgram {
      /** Program to be updated, may be partial */
      program?: Program;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateProgramsResponse {
      results?: BulkUpdateProgramResult[];
      /** metadata */
      bulkActionMetadata?: BulkActionMetadata$2;
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
  interface BulkUpdateProgramResult {
      /** item metadata */
      itemMetadata?: ItemMetadata$2;
      /** Only exists if `returnEntity` was set to true in the request */
      item?: Program;
  }
  interface BulkActionMetadata$2 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface ListSampleProgramsRequest {
  }
  interface ListSampleProgramsResponse {
      /** sample programs */
      programs?: Program[];
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
  interface ListProgramMembershipsRequest {
      /** paging */
      paging?: CursorPaging$2;
  }
  interface ListProgramMembershipsResponse {
      /** memberships */
      programMemberships?: ProgramMembership[];
      /** metadata */
      pagingMetadata?: CursorPagingMetadata$2;
  }
  interface ProgramMembership {
      /** program */
      program?: Program;
      /** participant's membership */
      membership?: Membership;
  }
  interface Membership {
      /** participant in this program */
      participantId?: string;
      /** participant's state */
      participantState?: ParticipantState;
  }
  enum ParticipantState {
      /** participant joined program */
      JOINED = "JOINED",
      /** participant completed program */
      COMPLETED = "COMPLETED",
      /** participant failed to complete program in time */
      FAILED = "FAILED",
      /** participant invited to program */
      INVITED = "INVITED",
      /** participant asked to join the program */
      JOIN_REQUESTED = "JOIN_REQUESTED"
  }
  interface GetProgramMembershipRequest {
      /** program to get membership */
      programId: string;
  }
  interface GetProgramMembershipResponse {
      /** membership */
      programMembership?: ProgramMembership;
  }
  /**
   * Creates a Program.
   * @param program - Program to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField program
   * @adminMethod
   * @returns The created Program.
   */
  function createProgram(program: Program): Promise<Program>;
  /**
   * Duplicates the Program. Leaves certificate template, but removes social group.
   * @param programId - Program to be duplicated from.
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function duplicateProgram(programId: string): Promise<DuplicateProgramResponse>;
  /**
   * Retrieves a Program.
   * @param programId - ID or slug of the Program to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @returns The requested Program.
   */
  function getProgram(programId: string): Promise<Program>;
  /**
   * Updates a Program.
   * @param _id - Program ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField program
   * @requiredField program.revision
   * @adminMethod
   * @returns Updated Program.
   */
  function updateProgram(_id: string | null, program: UpdateProgram, options?: UpdateProgramOptions): Promise<Program>;
  interface UpdateProgram {
      /**
       * Program ID.
       * @readonly
       */
      _id?: string | null;
      /** @readonly */
      revision?: string | null;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
      /**
       * current program state / does participant need it?
       * @readonly
       */
      state?: State$1;
      /**
       * assigned categories
       * @readonly
       */
      categoryIds?: string[];
      /** general program info. */
      description?: Description$2;
      /** timeline type -> Self-paced, time-restricted. */
      timeline?: Timeline;
      /** participant limitation, step-completion pace and etc. */
      restrictions?: Restrictions;
      /** single-payment price. */
      pricing?: Money;
      /** seo settings. */
      seo?: Seo;
      /** rewards to be assigned after reaching some of the program milestones. */
      rewards?: Reward[];
      /** connected social group. */
      socialGroupId?: string | null;
      /** join flow options. */
      accessType?: AccessType;
      /** extensible field */
      extendedFields?: ExtendedFields;
      /** if true -> invoice is sent to the customer who purchased the program via single payment; else -> payment confirmation email is sent */
      shouldSendInvoice?: boolean;
  }
  interface UpdateProgramOptions {
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes a Program.
   * Deleting a Program permanently removes them from the Program List.
   * @param programId - Id of the Program to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function deleteProgram(programId: string): Promise<void>;
  /**
   * Retrieves a list of Programs
   * @internal
   * @documentationMaturity preview
   */
  function queryPrograms(): ProgramsQueryBuilder;
  interface QueryCursorResult$2 {
      cursors: Cursors$2;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ProgramsQueryResult extends QueryCursorResult$2 {
      items: Program[];
      query: ProgramsQueryBuilder;
      next: () => Promise<ProgramsQueryResult>;
      prev: () => Promise<ProgramsQueryResult>;
  }
  interface ProgramsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'state' | 'seo.slug', value: any) => ProgramsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'state', value: any) => ProgramsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'state' | 'seo.slug'>) => ProgramsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'state' | 'seo.slug'>) => ProgramsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ProgramsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ProgramsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ProgramsQueryResult>;
  }
  /**
   * Publishes draft program. In other state returns program as is.
   * @param programId - Program to publish
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function publishProgram(programId: string): Promise<PublishProgramResponse>;
  /**
   * Ends program.
   * @param programId - Program to finish
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function endProgram(programId: string): Promise<EndProgramResponse>;
  /**
   * Archives program
   * @param programId - Program to archive
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function archiveProgram(programId: string): Promise<ArchiveProgramResponse>;
  /**
   * Update multiple Programs in a single request. Works synchronously.
   * @param programs - List of programs you want to update
   * @internal
   * @documentationMaturity preview
   * @requiredField programs
   * @requiredField programs.program.revision
   * @adminMethod
   */
  function bulkUpdatePrograms(programs: MaskedProgram[], options?: BulkUpdateProgramsOptions): Promise<BulkUpdateProgramsResponse>;
  interface BulkUpdateProgramsOptions {
      /** set to `true` if you wish to receive back the created programs in the response */
      returnEntity?: boolean;
  }
  /**
   * Returns list of sample programs.
   * @internal
   * @documentationMaturity preview
   */
  function listSamplePrograms(): Promise<ListSampleProgramsResponse>;
  /**
   * List program membership for UoU.
   * @internal
   * @documentationMaturity preview
   */
  function listProgramMemberships(options?: ListProgramMembershipsOptions): Promise<ListProgramMembershipsResponse>;
  interface ListProgramMembershipsOptions {
      /** paging */
      paging?: CursorPaging$2;
  }
  /**
   * Get program membership for UoU.
   * @param programId - program to get membership
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   */
  function getProgramMembership(programId: string): Promise<GetProgramMembershipResponse>;
  
  type onlineProgramsV3Program_universal_d_Program = Program;
  type onlineProgramsV3Program_universal_d_Timeline = Timeline;
  type onlineProgramsV3Program_universal_d_TimelineFinishConditionOptionsOneOf = TimelineFinishConditionOptionsOneOf;
  type onlineProgramsV3Program_universal_d_FinishCondition = FinishCondition;
  const onlineProgramsV3Program_universal_d_FinishCondition: typeof FinishCondition;
  type onlineProgramsV3Program_universal_d_TimeEvaluationOptions = TimeEvaluationOptions;
  type onlineProgramsV3Program_universal_d_Restrictions = Restrictions;
  type onlineProgramsV3Program_universal_d_Money = Money;
  type onlineProgramsV3Program_universal_d_Seo = Seo;
  type onlineProgramsV3Program_universal_d_SeoSchema = SeoSchema;
  type onlineProgramsV3Program_universal_d_Keyword = Keyword;
  type onlineProgramsV3Program_universal_d_Tag = Tag;
  type onlineProgramsV3Program_universal_d_Settings = Settings;
  type onlineProgramsV3Program_universal_d_Reward = Reward;
  type onlineProgramsV3Program_universal_d_Trigger = Trigger;
  const onlineProgramsV3Program_universal_d_Trigger: typeof Trigger;
  type onlineProgramsV3Program_universal_d_Certificate = Certificate;
  type onlineProgramsV3Program_universal_d_AccessType = AccessType;
  const onlineProgramsV3Program_universal_d_AccessType: typeof AccessType;
  type onlineProgramsV3Program_universal_d_ExtendedFields = ExtendedFields;
  type onlineProgramsV3Program_universal_d_DiscoverableContentChange = DiscoverableContentChange;
  type onlineProgramsV3Program_universal_d_DiscoverableContentChangeChangeOneOf = DiscoverableContentChangeChangeOneOf;
  type onlineProgramsV3Program_universal_d_ContentCreated = ContentCreated;
  type onlineProgramsV3Program_universal_d_Content = Content;
  type onlineProgramsV3Program_universal_d_ContentPart = ContentPart;
  type onlineProgramsV3Program_universal_d_ContentPartContentOneOf = ContentPartContentOneOf;
  type onlineProgramsV3Program_universal_d_MediaItem = MediaItem;
  type onlineProgramsV3Program_universal_d_MediaItemMediaOneOf = MediaItemMediaOneOf;
  type onlineProgramsV3Program_universal_d_ClassifierValues = ClassifierValues;
  type onlineProgramsV3Program_universal_d_AuthorInfo = AuthorInfo;
  type onlineProgramsV3Program_universal_d_AuthorInfoIdentityOneOf = AuthorInfoIdentityOneOf;
  type onlineProgramsV3Program_universal_d_ParentInfo = ParentInfo;
  type onlineProgramsV3Program_universal_d_Link = Link;
  type onlineProgramsV3Program_universal_d_Visibility = Visibility;
  type onlineProgramsV3Program_universal_d_VisibilityType = VisibilityType;
  const onlineProgramsV3Program_universal_d_VisibilityType: typeof VisibilityType;
  type onlineProgramsV3Program_universal_d_ContentUpdated = ContentUpdated;
  type onlineProgramsV3Program_universal_d_ContentDeleted = ContentDeleted;
  type onlineProgramsV3Program_universal_d_CreateProgramRequest = CreateProgramRequest;
  type onlineProgramsV3Program_universal_d_CreateProgramResponse = CreateProgramResponse;
  type onlineProgramsV3Program_universal_d_DuplicateProgramRequest = DuplicateProgramRequest;
  type onlineProgramsV3Program_universal_d_DuplicateProgramResponse = DuplicateProgramResponse;
  type onlineProgramsV3Program_universal_d_ProgramDuplicated = ProgramDuplicated;
  type onlineProgramsV3Program_universal_d_GetProgramRequest = GetProgramRequest;
  type onlineProgramsV3Program_universal_d_GetProgramResponse = GetProgramResponse;
  type onlineProgramsV3Program_universal_d_UpdateProgramRequest = UpdateProgramRequest;
  type onlineProgramsV3Program_universal_d_UpdateProgramResponse = UpdateProgramResponse;
  type onlineProgramsV3Program_universal_d_WrongStartDateErrorDetails = WrongStartDateErrorDetails;
  type onlineProgramsV3Program_universal_d_WrongParticipantsNumberErrorDetails = WrongParticipantsNumberErrorDetails;
  type onlineProgramsV3Program_universal_d_DuplicatedSlugErrorDetails = DuplicatedSlugErrorDetails;
  type onlineProgramsV3Program_universal_d_DeleteProgramRequest = DeleteProgramRequest;
  type onlineProgramsV3Program_universal_d_DeleteProgramResponse = DeleteProgramResponse;
  type onlineProgramsV3Program_universal_d_QueryProgramsRequest = QueryProgramsRequest;
  type onlineProgramsV3Program_universal_d_QueryProgramsResponse = QueryProgramsResponse;
  type onlineProgramsV3Program_universal_d_PublishProgramRequest = PublishProgramRequest;
  type onlineProgramsV3Program_universal_d_PublishProgramResponse = PublishProgramResponse;
  type onlineProgramsV3Program_universal_d_ChangedProgramState = ChangedProgramState;
  type onlineProgramsV3Program_universal_d_EndProgramRequest = EndProgramRequest;
  type onlineProgramsV3Program_universal_d_EndProgramResponse = EndProgramResponse;
  type onlineProgramsV3Program_universal_d_ArchiveProgramRequest = ArchiveProgramRequest;
  type onlineProgramsV3Program_universal_d_ArchiveProgramResponse = ArchiveProgramResponse;
  type onlineProgramsV3Program_universal_d_BulkUpdateProgramsRequest = BulkUpdateProgramsRequest;
  type onlineProgramsV3Program_universal_d_MaskedProgram = MaskedProgram;
  type onlineProgramsV3Program_universal_d_BulkUpdateProgramsResponse = BulkUpdateProgramsResponse;
  type onlineProgramsV3Program_universal_d_BulkUpdateProgramResult = BulkUpdateProgramResult;
  type onlineProgramsV3Program_universal_d_ListSampleProgramsRequest = ListSampleProgramsRequest;
  type onlineProgramsV3Program_universal_d_ListSampleProgramsResponse = ListSampleProgramsResponse;
  type onlineProgramsV3Program_universal_d_ListProgramMembershipsRequest = ListProgramMembershipsRequest;
  type onlineProgramsV3Program_universal_d_ListProgramMembershipsResponse = ListProgramMembershipsResponse;
  type onlineProgramsV3Program_universal_d_ProgramMembership = ProgramMembership;
  type onlineProgramsV3Program_universal_d_Membership = Membership;
  type onlineProgramsV3Program_universal_d_ParticipantState = ParticipantState;
  const onlineProgramsV3Program_universal_d_ParticipantState: typeof ParticipantState;
  type onlineProgramsV3Program_universal_d_GetProgramMembershipRequest = GetProgramMembershipRequest;
  type onlineProgramsV3Program_universal_d_GetProgramMembershipResponse = GetProgramMembershipResponse;
  const onlineProgramsV3Program_universal_d_createProgram: typeof createProgram;
  const onlineProgramsV3Program_universal_d_duplicateProgram: typeof duplicateProgram;
  const onlineProgramsV3Program_universal_d_getProgram: typeof getProgram;
  const onlineProgramsV3Program_universal_d_updateProgram: typeof updateProgram;
  type onlineProgramsV3Program_universal_d_UpdateProgram = UpdateProgram;
  type onlineProgramsV3Program_universal_d_UpdateProgramOptions = UpdateProgramOptions;
  const onlineProgramsV3Program_universal_d_deleteProgram: typeof deleteProgram;
  const onlineProgramsV3Program_universal_d_queryPrograms: typeof queryPrograms;
  type onlineProgramsV3Program_universal_d_ProgramsQueryResult = ProgramsQueryResult;
  type onlineProgramsV3Program_universal_d_ProgramsQueryBuilder = ProgramsQueryBuilder;
  const onlineProgramsV3Program_universal_d_publishProgram: typeof publishProgram;
  const onlineProgramsV3Program_universal_d_endProgram: typeof endProgram;
  const onlineProgramsV3Program_universal_d_archiveProgram: typeof archiveProgram;
  const onlineProgramsV3Program_universal_d_bulkUpdatePrograms: typeof bulkUpdatePrograms;
  type onlineProgramsV3Program_universal_d_BulkUpdateProgramsOptions = BulkUpdateProgramsOptions;
  const onlineProgramsV3Program_universal_d_listSamplePrograms: typeof listSamplePrograms;
  const onlineProgramsV3Program_universal_d_listProgramMemberships: typeof listProgramMemberships;
  type onlineProgramsV3Program_universal_d_ListProgramMembershipsOptions = ListProgramMembershipsOptions;
  const onlineProgramsV3Program_universal_d_getProgramMembership: typeof getProgramMembership;
  namespace onlineProgramsV3Program_universal_d {
    export {
      onlineProgramsV3Program_universal_d_Program as Program,
      State$1 as State,
      Description$2 as Description,
      DescriptionMediaOneOf$2 as DescriptionMediaOneOf,
      VideoResolution$2 as VideoResolution,
      onlineProgramsV3Program_universal_d_Timeline as Timeline,
      onlineProgramsV3Program_universal_d_TimelineFinishConditionOptionsOneOf as TimelineFinishConditionOptionsOneOf,
      onlineProgramsV3Program_universal_d_FinishCondition as FinishCondition,
      onlineProgramsV3Program_universal_d_TimeEvaluationOptions as TimeEvaluationOptions,
      onlineProgramsV3Program_universal_d_Restrictions as Restrictions,
      onlineProgramsV3Program_universal_d_Money as Money,
      onlineProgramsV3Program_universal_d_Seo as Seo,
      onlineProgramsV3Program_universal_d_SeoSchema as SeoSchema,
      onlineProgramsV3Program_universal_d_Keyword as Keyword,
      onlineProgramsV3Program_universal_d_Tag as Tag,
      onlineProgramsV3Program_universal_d_Settings as Settings,
      onlineProgramsV3Program_universal_d_Reward as Reward,
      onlineProgramsV3Program_universal_d_Trigger as Trigger,
      onlineProgramsV3Program_universal_d_Certificate as Certificate,
      onlineProgramsV3Program_universal_d_AccessType as AccessType,
      onlineProgramsV3Program_universal_d_ExtendedFields as ExtendedFields,
      onlineProgramsV3Program_universal_d_DiscoverableContentChange as DiscoverableContentChange,
      onlineProgramsV3Program_universal_d_DiscoverableContentChangeChangeOneOf as DiscoverableContentChangeChangeOneOf,
      onlineProgramsV3Program_universal_d_ContentCreated as ContentCreated,
      onlineProgramsV3Program_universal_d_Content as Content,
      onlineProgramsV3Program_universal_d_ContentPart as ContentPart,
      onlineProgramsV3Program_universal_d_ContentPartContentOneOf as ContentPartContentOneOf,
      onlineProgramsV3Program_universal_d_MediaItem as MediaItem,
      onlineProgramsV3Program_universal_d_MediaItemMediaOneOf as MediaItemMediaOneOf,
      onlineProgramsV3Program_universal_d_ClassifierValues as ClassifierValues,
      onlineProgramsV3Program_universal_d_AuthorInfo as AuthorInfo,
      onlineProgramsV3Program_universal_d_AuthorInfoIdentityOneOf as AuthorInfoIdentityOneOf,
      onlineProgramsV3Program_universal_d_ParentInfo as ParentInfo,
      onlineProgramsV3Program_universal_d_Link as Link,
      onlineProgramsV3Program_universal_d_Visibility as Visibility,
      onlineProgramsV3Program_universal_d_VisibilityType as VisibilityType,
      onlineProgramsV3Program_universal_d_ContentUpdated as ContentUpdated,
      onlineProgramsV3Program_universal_d_ContentDeleted as ContentDeleted,
      onlineProgramsV3Program_universal_d_CreateProgramRequest as CreateProgramRequest,
      onlineProgramsV3Program_universal_d_CreateProgramResponse as CreateProgramResponse,
      onlineProgramsV3Program_universal_d_DuplicateProgramRequest as DuplicateProgramRequest,
      onlineProgramsV3Program_universal_d_DuplicateProgramResponse as DuplicateProgramResponse,
      onlineProgramsV3Program_universal_d_ProgramDuplicated as ProgramDuplicated,
      onlineProgramsV3Program_universal_d_GetProgramRequest as GetProgramRequest,
      onlineProgramsV3Program_universal_d_GetProgramResponse as GetProgramResponse,
      onlineProgramsV3Program_universal_d_UpdateProgramRequest as UpdateProgramRequest,
      onlineProgramsV3Program_universal_d_UpdateProgramResponse as UpdateProgramResponse,
      onlineProgramsV3Program_universal_d_WrongStartDateErrorDetails as WrongStartDateErrorDetails,
      onlineProgramsV3Program_universal_d_WrongParticipantsNumberErrorDetails as WrongParticipantsNumberErrorDetails,
      onlineProgramsV3Program_universal_d_DuplicatedSlugErrorDetails as DuplicatedSlugErrorDetails,
      onlineProgramsV3Program_universal_d_DeleteProgramRequest as DeleteProgramRequest,
      onlineProgramsV3Program_universal_d_DeleteProgramResponse as DeleteProgramResponse,
      onlineProgramsV3Program_universal_d_QueryProgramsRequest as QueryProgramsRequest,
      CursorQuery$2 as CursorQuery,
      CursorQueryPagingMethodOneOf$2 as CursorQueryPagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      CursorPaging$2 as CursorPaging,
      onlineProgramsV3Program_universal_d_QueryProgramsResponse as QueryProgramsResponse,
      CursorPagingMetadata$2 as CursorPagingMetadata,
      Cursors$2 as Cursors,
      onlineProgramsV3Program_universal_d_PublishProgramRequest as PublishProgramRequest,
      onlineProgramsV3Program_universal_d_PublishProgramResponse as PublishProgramResponse,
      onlineProgramsV3Program_universal_d_ChangedProgramState as ChangedProgramState,
      onlineProgramsV3Program_universal_d_EndProgramRequest as EndProgramRequest,
      onlineProgramsV3Program_universal_d_EndProgramResponse as EndProgramResponse,
      onlineProgramsV3Program_universal_d_ArchiveProgramRequest as ArchiveProgramRequest,
      onlineProgramsV3Program_universal_d_ArchiveProgramResponse as ArchiveProgramResponse,
      onlineProgramsV3Program_universal_d_BulkUpdateProgramsRequest as BulkUpdateProgramsRequest,
      onlineProgramsV3Program_universal_d_MaskedProgram as MaskedProgram,
      onlineProgramsV3Program_universal_d_BulkUpdateProgramsResponse as BulkUpdateProgramsResponse,
      ItemMetadata$2 as ItemMetadata,
      ApplicationError$2 as ApplicationError,
      onlineProgramsV3Program_universal_d_BulkUpdateProgramResult as BulkUpdateProgramResult,
      BulkActionMetadata$2 as BulkActionMetadata,
      onlineProgramsV3Program_universal_d_ListSampleProgramsRequest as ListSampleProgramsRequest,
      onlineProgramsV3Program_universal_d_ListSampleProgramsResponse as ListSampleProgramsResponse,
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      MessageEnvelope$2 as MessageEnvelope,
      IdentificationData$2 as IdentificationData,
      IdentificationDataIdOneOf$2 as IdentificationDataIdOneOf,
      WebhookIdentityType$2 as WebhookIdentityType,
      onlineProgramsV3Program_universal_d_ListProgramMembershipsRequest as ListProgramMembershipsRequest,
      onlineProgramsV3Program_universal_d_ListProgramMembershipsResponse as ListProgramMembershipsResponse,
      onlineProgramsV3Program_universal_d_ProgramMembership as ProgramMembership,
      onlineProgramsV3Program_universal_d_Membership as Membership,
      onlineProgramsV3Program_universal_d_ParticipantState as ParticipantState,
      onlineProgramsV3Program_universal_d_GetProgramMembershipRequest as GetProgramMembershipRequest,
      onlineProgramsV3Program_universal_d_GetProgramMembershipResponse as GetProgramMembershipResponse,
      onlineProgramsV3Program_universal_d_createProgram as createProgram,
      onlineProgramsV3Program_universal_d_duplicateProgram as duplicateProgram,
      onlineProgramsV3Program_universal_d_getProgram as getProgram,
      onlineProgramsV3Program_universal_d_updateProgram as updateProgram,
      onlineProgramsV3Program_universal_d_UpdateProgram as UpdateProgram,
      onlineProgramsV3Program_universal_d_UpdateProgramOptions as UpdateProgramOptions,
      onlineProgramsV3Program_universal_d_deleteProgram as deleteProgram,
      onlineProgramsV3Program_universal_d_queryPrograms as queryPrograms,
      onlineProgramsV3Program_universal_d_ProgramsQueryResult as ProgramsQueryResult,
      onlineProgramsV3Program_universal_d_ProgramsQueryBuilder as ProgramsQueryBuilder,
      onlineProgramsV3Program_universal_d_publishProgram as publishProgram,
      onlineProgramsV3Program_universal_d_endProgram as endProgram,
      onlineProgramsV3Program_universal_d_archiveProgram as archiveProgram,
      onlineProgramsV3Program_universal_d_bulkUpdatePrograms as bulkUpdatePrograms,
      onlineProgramsV3Program_universal_d_BulkUpdateProgramsOptions as BulkUpdateProgramsOptions,
      onlineProgramsV3Program_universal_d_listSamplePrograms as listSamplePrograms,
      onlineProgramsV3Program_universal_d_listProgramMemberships as listProgramMemberships,
      onlineProgramsV3Program_universal_d_ListProgramMembershipsOptions as ListProgramMembershipsOptions,
      onlineProgramsV3Program_universal_d_getProgramMembership as getProgramMembership,
    };
  }
  
  interface Section {
      /**
       * Program Section ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Section was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Section was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Program Id to which this section is assigned to. */
      programId?: string;
      /** title, description and media content. */
      description?: Description$1;
      /** is this section published yet? */
      state?: State;
      /**
       * number of program steps in this section.
       * @readonly
       */
      totalSteps?: number;
      /** should we open this section as a trial content even though the owning program isn't purchased yet? */
      trialSection?: boolean;
      /** field for manual ordering of sections */
      ordering?: number;
      /** open after defined number of days passed. */
      delayInDays?: number;
  }
  interface Description$1 extends DescriptionMediaOneOf$1 {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
      title?: string;
      details?: string | null;
  }
  /** @oneof */
  interface DescriptionMediaOneOf$1 {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
  }
  interface VideoResolution$1 {
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
      /** Video format for example, mp4, hls. */
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
  enum State {
      /** invalid default state. */
      UNKNOWN = "UNKNOWN",
      /** the section isn't ready to be shown to participants. */
      DRAFT = "DRAFT",
      /** this content is visible to participants. */
      PUBLISHED = "PUBLISHED"
  }
  interface UpdateDocumentsEvent$1 extends UpdateDocumentsEventOperationOneOf$1 {
      /** insert/update documents */
      update?: DocumentUpdateOperation$1;
      /** delete by document ids */
      deleteByIds?: DeleteByIdsOperation$1;
      /** delete documents matching filter */
      deleteByFilter?: DeleteByFilterOperation$1;
      /** update documents matching filter */
      updateByFilter?: UpdateByFilterOperation$1;
      /** update only existing documents */
      updateExisting?: UpdateExistingOperation$1;
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
  interface UpdateDocumentsEventOperationOneOf$1 {
      /** insert/update documents */
      update?: DocumentUpdateOperation$1;
      /** delete by document ids */
      deleteByIds?: DeleteByIdsOperation$1;
      /** delete documents matching filter */
      deleteByFilter?: DeleteByFilterOperation$1;
      /** update documents matching filter */
      updateByFilter?: UpdateByFilterOperation$1;
      /** update only existing documents */
      updateExisting?: UpdateExistingOperation$1;
  }
  interface DocumentUpdateOperation$1 {
      /** documents to index or update */
      documents?: IndexDocument$1[];
  }
  interface IndexDocument$1 {
      /** data bag with non-searchable fields (url, image) */
      payload?: DocumentPayload$1;
      /** what type of users should documents be visible to */
      exposure?: Enum$1;
      /** document with mandatory fields (id, title, description) and with fields specific to the type of the document */
      document?: Record<string, any> | null;
      /** what member groups is the document exposed to. Used only with GROUP_PROTECTED exposure */
      permittedMemberGroups?: string[];
      /** if true SEO is disabled for this document */
      seoHidden?: boolean | null;
      /** if true the page is a lightbox popup */
      isPopup?: boolean | null;
  }
  interface DocumentPayload$1 {
      /** url of the page representing the document */
      url?: string | null;
      /** image which represents the document */
      documentImage?: DocumentImage$1;
  }
  interface DocumentImage$1 {
      /** the name of the image */
      name?: string;
      /** the width of the image */
      width?: number;
      /** the height of the image */
      height?: number;
  }
  enum Enum$1 {
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
  interface DeleteByIdsOperation$1 {
      /** ids of the documents to delete */
      documentIds?: string[];
  }
  interface DeleteByFilterOperation$1 {
      /** documents matching this filter wil be deleted. only filterable documents defined in document_type can be used for filtering */
      filter?: Record<string, any> | null;
  }
  interface UpdateByFilterOperation$1 {
      /** documents matching this filter will be updated */
      filter?: Record<string, any> | null;
      /** partial document to apply */
      document?: IndexDocument$1;
  }
  interface UpdateExistingOperation$1 {
      /** documents to update */
      documents?: IndexDocument$1[];
  }
  interface CreateSectionRequest {
      /** Section to be created. */
      section: Section;
  }
  interface CreateSectionResponse {
      /** The created Section. */
      section?: Section;
  }
  interface BulkCreateSectionRequest {
      /** List of sections you want to create */
      sections: Section[];
  }
  interface BulkCreateSectionResponse {
      /** bulk results */
      results?: BulkSectionResult[];
      /** bulk metadata */
      bulkActionMetadata?: BulkActionMetadata$1;
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
  interface BulkSectionResult {
      /** item metadata */
      itemMetadata?: ItemMetadata$1;
      /** created section */
      item?: Section;
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
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet$1;
  }
  enum DescriptionFieldSet$1 {
      STANDARD = "STANDARD",
      EXTENDED = "EXTENDED"
  }
  interface GetSectionResponse {
      /** The requested Section. */
      section?: Section;
  }
  interface UpdateSectionRequest {
      /** Section to be updated, may be partial. */
      section: Section;
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateSectionResponse {
      /** Updated Section. */
      section?: Section;
  }
  interface DeleteSectionRequest {
      /** Id of the Section to delete. */
      sectionId: string;
  }
  interface DeleteSectionResponse {
  }
  interface QuerySectionsRequest {
      /** WQL expression. */
      query?: CursorQuery$1;
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet$1;
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
  interface QuerySectionsResponse {
      /** List of Sections. */
      sections?: Section[];
      /** Paging metadata */
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
  interface ListSectionsRequest {
      /** Program id to list sections */
      programId: string;
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet$1;
  }
  interface ListSectionsResponse {
      /** sections */
      sections?: Section[];
  }
  interface CloneSectionRequest {
      /** Section to clone */
      sectionId: string;
  }
  interface CloneSectionResponse {
      /** cloned section */
      section?: Section;
  }
  interface MoveSectionRequest {
      /** Section to move */
      sectionId?: string;
      /** change section position to be after the specified section. If empty insert in the "0" position. */
      afterSectionId?: string | null;
      /** section revision */
      revision?: string;
  }
  interface MoveSectionResponse {
      /** updated section which was moved */
      section?: Section;
  }
  interface SectionMoved {
      /** Moved section id */
      sectionId?: string;
      /** section position */
      newSectionPositionRank?: number;
  }
  interface PublishSectionRequest {
      /** Section to publish */
      sectionId?: string;
      /** section revision */
      revision?: string;
  }
  interface PublishSectionResponse {
      /** Published section */
      section?: Section;
  }
  interface SectionPublished {
      /** Published section id */
      sectionId?: string;
  }
  interface BulkCloneSectionRequest {
      /** id of program which was cloned */
      prototypeProgramId?: string;
      /** id of program created after clone */
      clonedProgramId?: string;
  }
  interface BulkCloneSectionResponse {
      /** id of program which was cloned */
      prototypeProgramId?: string;
      /** id of program created after clone */
      clonedProgramId?: string;
      /** mapping of original to cloned section ids */
      prototypeIdToClonedId?: Record<string, string>;
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
   * Creates a Section.
   * @param section - Section to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField section
   * @adminMethod
   * @returns The created Section.
   */
  function createSection(section: Section): Promise<Section>;
  /**
   * Bulk Section creation.
   * @param sections - List of sections you want to create
   * @internal
   * @documentationMaturity preview
   * @requiredField sections
   * @adminMethod
   */
  function bulkCreateSection(sections: Section[]): Promise<BulkCreateSectionResponse>;
  /**
   * Retrieves a Section.
   * @param sectionId - ID of the Section to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField sectionId
   * @returns The requested Section.
   */
  function getSection(sectionId: string, options?: GetSectionOptions): Promise<Section>;
  interface GetSectionOptions {
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet$1;
  }
  /**
   * Updates a Section.
   * @param _id - Program Section ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField section
   * @requiredField section.revision
   * @adminMethod
   * @returns Updated Section.
   */
  function updateSection(_id: string | null, section: UpdateSection, options?: UpdateSectionOptions): Promise<Section>;
  interface UpdateSection {
      /**
       * Program Section ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Section was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Section was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Program Id to which this section is assigned to. */
      programId?: string;
      /** title, description and media content. */
      description?: Description$1;
      /** is this section published yet? */
      state?: State;
      /**
       * number of program steps in this section.
       * @readonly
       */
      totalSteps?: number;
      /** should we open this section as a trial content even though the owning program isn't purchased yet? */
      trialSection?: boolean;
      /** field for manual ordering of sections */
      ordering?: number;
      /** open after defined number of days passed. */
      delayInDays?: number;
  }
  interface UpdateSectionOptions {
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes a Section.
   * Deleting a Section permanently removes them from the Section List.
   * @param sectionId - Id of the Section to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField sectionId
   * @adminMethod
   */
  function deleteSection(sectionId: string): Promise<void>;
  /**
   * Retrieves a list of Sections, given the provided [paging, filtering, and sorting][1].
   *
   * Up to 1,000 Sections can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function querySections(options?: QuerySectionsOptions): SectionsQueryBuilder;
  interface QuerySectionsOptions {
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet$1 | undefined;
  }
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
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'programId' | 'trialSection' | 'delayInDays', value: any) => SectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id', value: any) => SectionsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id', value: any) => SectionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | '_createdDate' | 'ordering' | 'delayInDays'>) => SectionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | '_createdDate' | 'ordering' | 'delayInDays'>) => SectionsQueryBuilder;
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
   * List sections per program id
   * @param programId - Program id to list sections
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   */
  function listSections(programId: string, options?: ListSectionsOptions): Promise<ListSectionsResponse>;
  interface ListSectionsOptions {
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet$1;
  }
  /**
   * Clones section with specified id
   * @param sectionId - Section to clone
   * @internal
   * @documentationMaturity preview
   * @requiredField sectionId
   * @adminMethod
   */
  function cloneSection(sectionId: string): Promise<CloneSectionResponse>;
  /**
   * Places section after specified one or inserts it in the beginning
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function moveSection(options?: MoveSectionOptions): Promise<MoveSectionResponse>;
  interface MoveSectionOptions {
      /** Section to move */
      sectionId?: string;
      /** change section position to be after the specified section. If empty insert in the "0" position. */
      afterSectionId?: string | null;
      /** section revision */
      revision?: string;
  }
  /**
   * Publishes section
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function publishSection(options?: PublishSectionOptions): Promise<PublishSectionResponse>;
  interface PublishSectionOptions {
      /** Section to publish */
      sectionId?: string;
      /** section revision */
      revision?: string;
  }
  /**
   * Clones all sections from prototype program
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function bulkCloneSection(options?: BulkCloneSectionOptions): Promise<BulkCloneSectionResponse>;
  interface BulkCloneSectionOptions {
      /** id of program which was cloned */
      prototypeProgramId?: string;
      /** id of program created after clone */
      clonedProgramId?: string;
  }
  
  type onlineProgramsV3Section_universal_d_Section = Section;
  type onlineProgramsV3Section_universal_d_State = State;
  const onlineProgramsV3Section_universal_d_State: typeof State;
  type onlineProgramsV3Section_universal_d_CreateSectionRequest = CreateSectionRequest;
  type onlineProgramsV3Section_universal_d_CreateSectionResponse = CreateSectionResponse;
  type onlineProgramsV3Section_universal_d_BulkCreateSectionRequest = BulkCreateSectionRequest;
  type onlineProgramsV3Section_universal_d_BulkCreateSectionResponse = BulkCreateSectionResponse;
  type onlineProgramsV3Section_universal_d_BulkSectionResult = BulkSectionResult;
  type onlineProgramsV3Section_universal_d_GetSectionRequest = GetSectionRequest;
  type onlineProgramsV3Section_universal_d_GetSectionResponse = GetSectionResponse;
  type onlineProgramsV3Section_universal_d_UpdateSectionRequest = UpdateSectionRequest;
  type onlineProgramsV3Section_universal_d_UpdateSectionResponse = UpdateSectionResponse;
  type onlineProgramsV3Section_universal_d_DeleteSectionRequest = DeleteSectionRequest;
  type onlineProgramsV3Section_universal_d_DeleteSectionResponse = DeleteSectionResponse;
  type onlineProgramsV3Section_universal_d_QuerySectionsRequest = QuerySectionsRequest;
  type onlineProgramsV3Section_universal_d_QuerySectionsResponse = QuerySectionsResponse;
  type onlineProgramsV3Section_universal_d_ListSectionsRequest = ListSectionsRequest;
  type onlineProgramsV3Section_universal_d_ListSectionsResponse = ListSectionsResponse;
  type onlineProgramsV3Section_universal_d_CloneSectionRequest = CloneSectionRequest;
  type onlineProgramsV3Section_universal_d_CloneSectionResponse = CloneSectionResponse;
  type onlineProgramsV3Section_universal_d_MoveSectionRequest = MoveSectionRequest;
  type onlineProgramsV3Section_universal_d_MoveSectionResponse = MoveSectionResponse;
  type onlineProgramsV3Section_universal_d_SectionMoved = SectionMoved;
  type onlineProgramsV3Section_universal_d_PublishSectionRequest = PublishSectionRequest;
  type onlineProgramsV3Section_universal_d_PublishSectionResponse = PublishSectionResponse;
  type onlineProgramsV3Section_universal_d_SectionPublished = SectionPublished;
  type onlineProgramsV3Section_universal_d_BulkCloneSectionRequest = BulkCloneSectionRequest;
  type onlineProgramsV3Section_universal_d_BulkCloneSectionResponse = BulkCloneSectionResponse;
  const onlineProgramsV3Section_universal_d_createSection: typeof createSection;
  const onlineProgramsV3Section_universal_d_bulkCreateSection: typeof bulkCreateSection;
  const onlineProgramsV3Section_universal_d_getSection: typeof getSection;
  type onlineProgramsV3Section_universal_d_GetSectionOptions = GetSectionOptions;
  const onlineProgramsV3Section_universal_d_updateSection: typeof updateSection;
  type onlineProgramsV3Section_universal_d_UpdateSection = UpdateSection;
  type onlineProgramsV3Section_universal_d_UpdateSectionOptions = UpdateSectionOptions;
  const onlineProgramsV3Section_universal_d_deleteSection: typeof deleteSection;
  const onlineProgramsV3Section_universal_d_querySections: typeof querySections;
  type onlineProgramsV3Section_universal_d_QuerySectionsOptions = QuerySectionsOptions;
  type onlineProgramsV3Section_universal_d_SectionsQueryResult = SectionsQueryResult;
  type onlineProgramsV3Section_universal_d_SectionsQueryBuilder = SectionsQueryBuilder;
  const onlineProgramsV3Section_universal_d_listSections: typeof listSections;
  type onlineProgramsV3Section_universal_d_ListSectionsOptions = ListSectionsOptions;
  const onlineProgramsV3Section_universal_d_cloneSection: typeof cloneSection;
  const onlineProgramsV3Section_universal_d_moveSection: typeof moveSection;
  type onlineProgramsV3Section_universal_d_MoveSectionOptions = MoveSectionOptions;
  const onlineProgramsV3Section_universal_d_publishSection: typeof publishSection;
  type onlineProgramsV3Section_universal_d_PublishSectionOptions = PublishSectionOptions;
  const onlineProgramsV3Section_universal_d_bulkCloneSection: typeof bulkCloneSection;
  type onlineProgramsV3Section_universal_d_BulkCloneSectionOptions = BulkCloneSectionOptions;
  namespace onlineProgramsV3Section_universal_d {
    export {
      onlineProgramsV3Section_universal_d_Section as Section,
      Description$1 as Description,
      DescriptionMediaOneOf$1 as DescriptionMediaOneOf,
      VideoResolution$1 as VideoResolution,
      onlineProgramsV3Section_universal_d_State as State,
      UpdateDocumentsEvent$1 as UpdateDocumentsEvent,
      UpdateDocumentsEventOperationOneOf$1 as UpdateDocumentsEventOperationOneOf,
      DocumentUpdateOperation$1 as DocumentUpdateOperation,
      IndexDocument$1 as IndexDocument,
      DocumentPayload$1 as DocumentPayload,
      DocumentImage$1 as DocumentImage,
      Enum$1 as Enum,
      DeleteByIdsOperation$1 as DeleteByIdsOperation,
      DeleteByFilterOperation$1 as DeleteByFilterOperation,
      UpdateByFilterOperation$1 as UpdateByFilterOperation,
      UpdateExistingOperation$1 as UpdateExistingOperation,
      onlineProgramsV3Section_universal_d_CreateSectionRequest as CreateSectionRequest,
      onlineProgramsV3Section_universal_d_CreateSectionResponse as CreateSectionResponse,
      onlineProgramsV3Section_universal_d_BulkCreateSectionRequest as BulkCreateSectionRequest,
      onlineProgramsV3Section_universal_d_BulkCreateSectionResponse as BulkCreateSectionResponse,
      ItemMetadata$1 as ItemMetadata,
      ApplicationError$1 as ApplicationError,
      onlineProgramsV3Section_universal_d_BulkSectionResult as BulkSectionResult,
      BulkActionMetadata$1 as BulkActionMetadata,
      onlineProgramsV3Section_universal_d_GetSectionRequest as GetSectionRequest,
      DescriptionFieldSet$1 as DescriptionFieldSet,
      onlineProgramsV3Section_universal_d_GetSectionResponse as GetSectionResponse,
      onlineProgramsV3Section_universal_d_UpdateSectionRequest as UpdateSectionRequest,
      onlineProgramsV3Section_universal_d_UpdateSectionResponse as UpdateSectionResponse,
      onlineProgramsV3Section_universal_d_DeleteSectionRequest as DeleteSectionRequest,
      onlineProgramsV3Section_universal_d_DeleteSectionResponse as DeleteSectionResponse,
      onlineProgramsV3Section_universal_d_QuerySectionsRequest as QuerySectionsRequest,
      CursorQuery$1 as CursorQuery,
      CursorQueryPagingMethodOneOf$1 as CursorQueryPagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      CursorPaging$1 as CursorPaging,
      onlineProgramsV3Section_universal_d_QuerySectionsResponse as QuerySectionsResponse,
      CursorPagingMetadata$1 as CursorPagingMetadata,
      Cursors$1 as Cursors,
      onlineProgramsV3Section_universal_d_ListSectionsRequest as ListSectionsRequest,
      onlineProgramsV3Section_universal_d_ListSectionsResponse as ListSectionsResponse,
      onlineProgramsV3Section_universal_d_CloneSectionRequest as CloneSectionRequest,
      onlineProgramsV3Section_universal_d_CloneSectionResponse as CloneSectionResponse,
      onlineProgramsV3Section_universal_d_MoveSectionRequest as MoveSectionRequest,
      onlineProgramsV3Section_universal_d_MoveSectionResponse as MoveSectionResponse,
      onlineProgramsV3Section_universal_d_SectionMoved as SectionMoved,
      onlineProgramsV3Section_universal_d_PublishSectionRequest as PublishSectionRequest,
      onlineProgramsV3Section_universal_d_PublishSectionResponse as PublishSectionResponse,
      onlineProgramsV3Section_universal_d_SectionPublished as SectionPublished,
      onlineProgramsV3Section_universal_d_BulkCloneSectionRequest as BulkCloneSectionRequest,
      onlineProgramsV3Section_universal_d_BulkCloneSectionResponse as BulkCloneSectionResponse,
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
      onlineProgramsV3Section_universal_d_createSection as createSection,
      onlineProgramsV3Section_universal_d_bulkCreateSection as bulkCreateSection,
      onlineProgramsV3Section_universal_d_getSection as getSection,
      onlineProgramsV3Section_universal_d_GetSectionOptions as GetSectionOptions,
      onlineProgramsV3Section_universal_d_updateSection as updateSection,
      onlineProgramsV3Section_universal_d_UpdateSection as UpdateSection,
      onlineProgramsV3Section_universal_d_UpdateSectionOptions as UpdateSectionOptions,
      onlineProgramsV3Section_universal_d_deleteSection as deleteSection,
      onlineProgramsV3Section_universal_d_querySections as querySections,
      onlineProgramsV3Section_universal_d_QuerySectionsOptions as QuerySectionsOptions,
      onlineProgramsV3Section_universal_d_SectionsQueryResult as SectionsQueryResult,
      onlineProgramsV3Section_universal_d_SectionsQueryBuilder as SectionsQueryBuilder,
      onlineProgramsV3Section_universal_d_listSections as listSections,
      onlineProgramsV3Section_universal_d_ListSectionsOptions as ListSectionsOptions,
      onlineProgramsV3Section_universal_d_cloneSection as cloneSection,
      onlineProgramsV3Section_universal_d_moveSection as moveSection,
      onlineProgramsV3Section_universal_d_MoveSectionOptions as MoveSectionOptions,
      onlineProgramsV3Section_universal_d_publishSection as publishSection,
      onlineProgramsV3Section_universal_d_PublishSectionOptions as PublishSectionOptions,
      onlineProgramsV3Section_universal_d_bulkCloneSection as bulkCloneSection,
      onlineProgramsV3Section_universal_d_BulkCloneSectionOptions as BulkCloneSectionOptions,
    };
  }
  
  interface Step extends StepStepTypeOptionsOneOf {
      /** options of video step. */
      videoOptions?: VideoOptions;
      /** options of quiz step. */
      quizOptions?: QuizOptions;
      /**
       * Program Task ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Task was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Task was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** id of the owning section. */
      sectionId?: string;
      /** title, description and media content. */
      description?: Description;
      /** field for manual ordering of steps */
      ordering?: number;
      stepType?: StepType;
  }
  /** @oneof */
  interface StepStepTypeOptionsOneOf {
      /** options of video step. */
      videoOptions?: VideoOptions;
      /** options of quiz step. */
      quizOptions?: QuizOptions;
  }
  interface WixVideo {
      _id?: string;
      paid?: boolean;
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
      /** Video format for example, mp4, hls. */
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
  interface Description extends DescriptionMediaOneOf {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
      title?: string;
      details?: string | null;
  }
  /** @oneof */
  interface DescriptionMediaOneOf {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
  }
  enum StepType {
      ARTICLE = "ARTICLE",
      VIDEO = "VIDEO",
      QUIZ = "QUIZ"
  }
  interface VideoOptions extends VideoOptionsVideoSourceOneOf {
      wixVideo?: WixVideo;
      video?: string;
      requiredCompletionPercentage?: number;
      coverImage?: string;
      durationInMilliseconds?: number | null;
      deleted?: boolean;
  }
  /** @oneof */
  interface VideoOptionsVideoSourceOneOf {
      wixVideo?: WixVideo;
      video?: string;
  }
  interface QuizOptions {
      /** quiz id */
      _id?: string;
      /**
       * number of questions inside the quiz
       * @readonly
       */
      totalQuestions?: number;
      /**
       * percentage of right answers to complete the quiz.
       * @readonly
       */
      passingGrade?: number | null;
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
  interface CreateStepRequest {
      /** Step to be created. */
      step: Step;
  }
  interface CreateStepResponse {
      /** The created Step. */
      step?: Step;
  }
  interface BulkCreateStepRequest {
      /** List of steps you want to create */
      steps: Step[];
      returnEntity?: boolean;
  }
  interface BulkCreateStepResponse {
      results?: BulkStepResult[];
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkStepResult {
      itemMetadata?: ItemMetadata;
      item?: Step;
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
  interface BulkCreateStepMigrationRequest {
      /** List of steps you want to create */
      steps: Step[];
      programId?: string;
  }
  interface BulkCreateStepMigrationResponse {
      results?: BulkStepResult[];
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface GetStepRequest {
      /** ID of the Step to retrieve. */
      stepId: string;
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet;
  }
  enum DescriptionFieldSet {
      STANDARD = "STANDARD",
      EXTENDED = "EXTENDED"
  }
  interface GetStepResponse {
      /** The requested Step. */
      step?: Step;
  }
  interface UpdateStepRequest {
      /** Step to be updated, may be partial. */
      step: Step;
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateStepResponse {
      /** Updated Step. */
      step?: Step;
  }
  interface DeleteStepRequest {
      /** Id of the Step to delete. */
      stepId: string;
  }
  interface DeleteStepResponse {
  }
  interface QueryStepsRequest {
      /** WQL expression. */
      query?: CursorQuery;
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet;
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
  interface QueryStepsResponse {
      /** List of Steps. */
      steps?: Step[];
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
  interface QueryStepsWithoutPagingRequest {
      /** WQL expression. Cursor paging is not supported in this endpoint. */
      query?: CursorQuery;
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet;
  }
  interface QueryStepsWithoutPagingResponse {
      /** List of Steps. */
      steps?: Step[];
  }
  interface ListAllProgramStepsRequest {
      /** program id of requested steps */
      programId?: string;
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet;
  }
  interface ListAllProgramStepsResponse {
      /** List of Steps. */
      steps?: Step[];
  }
  interface BulkCloneStepRequest {
      /** id of program which was cloned */
      prototypeProgramId?: string;
      /** id of program which was cloned */
      clonedProgramId?: string;
      /** mapping of original to cloned section ids */
      prototypeIdToClonedId?: Record<string, string>;
  }
  interface BulkCloneStepResponse {
      /** ids of newly created steps */
      createdStepIds?: string[];
  }
  interface MoveStepRequest {
      /** what step to move */
      stepId: string;
      /** target section (keep the same or move step to a different one) */
      sectionId: string;
      /** insert after this step id (can be empty if it's the first position in the section) */
      afterStepId?: string | null;
      revision?: string;
  }
  interface MoveStepResponse {
      step?: Step;
  }
  interface StepMoved {
      /** target section id */
      sectionId?: string;
      /** what step to move */
      stepId?: string;
      /** new step position */
      newPosition?: number;
  }
  interface CloneStepRequest {
      /** what step to clone */
      stepId: string;
  }
  interface CloneStepResponse {
      /** created step. */
      step?: Step;
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
   * Creates a Step.
   * @param step - Step to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField step
   * @adminMethod
   * @returns The created Step.
   */
  function createStep(step: Step): Promise<Step>;
  /** @param steps - List of steps you want to create
   * @internal
   * @documentationMaturity preview
   * @requiredField steps
   * @adminMethod
   */
  function bulkCreateStep(steps: Step[], options?: BulkCreateStepOptions): Promise<BulkCreateStepResponse>;
  interface BulkCreateStepOptions {
      returnEntity?: boolean;
  }
  /** @param steps - List of steps you want to create
   * @internal
   * @documentationMaturity preview
   * @requiredField steps
   * @adminMethod
   */
  function bulkCreateStepMigration(steps: Step[], options?: BulkCreateStepMigrationOptions): Promise<BulkCreateStepMigrationResponse>;
  interface BulkCreateStepMigrationOptions {
      programId?: string;
  }
  /**
   * Retrieves a Step.
   * @param stepId - ID of the Step to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField stepId
   * @returns The requested Step.
   */
  function getStep(stepId: string, options?: GetStepOptions): Promise<Step>;
  interface GetStepOptions {
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet;
  }
  /**
   * Update Step.
   * @param _id - Program Task ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField step
   * @requiredField step.revision
   * @adminMethod
   * @returns Updated Step.
   */
  function updateStep(_id: string | null, step: UpdateStep, options?: UpdateStepOptions): Promise<Step>;
  interface UpdateStep {
      /** options of video step. */
      videoOptions?: VideoOptions;
      /** options of quiz step. */
      quizOptions?: QuizOptions;
      /**
       * Program Task ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Task was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Task was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** id of the owning section. */
      sectionId?: string;
      /** title, description and media content. */
      description?: Description;
      /** field for manual ordering of steps */
      ordering?: number;
      stepType?: StepType;
  }
  interface UpdateStepOptions {
      /**
       * Set of fields to update.
       *
       * Fields that aren't included in `fieldMask.paths` are ignored.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes a Step.
   * Deleting a Step permanently removes them from the Step List.
   * @param stepId - Id of the Step to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField stepId
   * @adminMethod
   */
  function deleteStep(stepId: string): Promise<void>;
  /**
   * Query steps.
   * @internal
   * @documentationMaturity preview
   */
  function querySteps(options?: QueryStepsOptions): Promise<QueryStepsResponse>;
  interface QueryStepsOptions {
      /** WQL expression. */
      query?: CursorQuery;
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet;
  }
  /** @internal
   * @documentationMaturity preview
   */
  function queryStepsWithoutPaging(options?: QueryStepsWithoutPagingOptions): StepsQueryBuilder;
  interface QueryStepsWithoutPagingOptions {
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet | undefined;
  }
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface StepsQueryResult extends QueryCursorResult {
      items: Step[];
      query: StepsQueryBuilder;
      next: () => Promise<StepsQueryResult>;
      prev: () => Promise<StepsQueryResult>;
  }
  interface StepsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'sectionId', value: any) => StepsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id', value: any) => StepsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'sectionId', value: any) => StepsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id'>) => StepsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id'>) => StepsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => StepsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => StepsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<StepsQueryResult>;
  }
  /**
   * List all program steps without paging
   * @internal
   * @documentationMaturity preview
   */
  function listAllProgramSteps(options?: ListAllProgramStepsOptions): Promise<ListAllProgramStepsResponse>;
  interface ListAllProgramStepsOptions {
      /** program id of requested steps */
      programId?: string;
      /** Whenever to return description only with title or with details as well */
      descriptionFieldSet?: DescriptionFieldSet;
  }
  /**
   * Clones all steps of prototype program
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function bulkCloneStep(options?: BulkCloneStepOptions): Promise<BulkCloneStepResponse>;
  interface BulkCloneStepOptions {
      /** id of program which was cloned */
      prototypeProgramId?: string;
      /** id of program which was cloned */
      clonedProgramId?: string;
      /** mapping of original to cloned section ids */
      prototypeIdToClonedId?: Record<string, string>;
  }
  /**
   * Change Step position.
   * @param stepId - what step to move
   * @param sectionId - target section (keep the same or move step to a different one)
   * @internal
   * @documentationMaturity preview
   * @requiredField sectionId
   * @requiredField stepId
   * @adminMethod
   */
  function moveStep(stepId: string, sectionId: string, options?: MoveStepOptions): Promise<MoveStepResponse>;
  interface MoveStepOptions {
      /** insert after this step id (can be empty if it's the first position in the section) */
      afterStepId?: string | null;
      revision?: string;
  }
  /**
   * Clone Step.
   * @param stepId - what step to clone
   * @internal
   * @documentationMaturity preview
   * @requiredField stepId
   * @adminMethod
   */
  function cloneStep(stepId: string): Promise<CloneStepResponse>;
  
  type onlineProgramsV3Step_universal_d_Step = Step;
  type onlineProgramsV3Step_universal_d_StepStepTypeOptionsOneOf = StepStepTypeOptionsOneOf;
  type onlineProgramsV3Step_universal_d_WixVideo = WixVideo;
  type onlineProgramsV3Step_universal_d_VideoResolution = VideoResolution;
  type onlineProgramsV3Step_universal_d_Description = Description;
  type onlineProgramsV3Step_universal_d_DescriptionMediaOneOf = DescriptionMediaOneOf;
  type onlineProgramsV3Step_universal_d_StepType = StepType;
  const onlineProgramsV3Step_universal_d_StepType: typeof StepType;
  type onlineProgramsV3Step_universal_d_VideoOptions = VideoOptions;
  type onlineProgramsV3Step_universal_d_VideoOptionsVideoSourceOneOf = VideoOptionsVideoSourceOneOf;
  type onlineProgramsV3Step_universal_d_QuizOptions = QuizOptions;
  type onlineProgramsV3Step_universal_d_UpdateDocumentsEvent = UpdateDocumentsEvent;
  type onlineProgramsV3Step_universal_d_UpdateDocumentsEventOperationOneOf = UpdateDocumentsEventOperationOneOf;
  type onlineProgramsV3Step_universal_d_DocumentUpdateOperation = DocumentUpdateOperation;
  type onlineProgramsV3Step_universal_d_IndexDocument = IndexDocument;
  type onlineProgramsV3Step_universal_d_DocumentPayload = DocumentPayload;
  type onlineProgramsV3Step_universal_d_DocumentImage = DocumentImage;
  type onlineProgramsV3Step_universal_d_Enum = Enum;
  const onlineProgramsV3Step_universal_d_Enum: typeof Enum;
  type onlineProgramsV3Step_universal_d_DeleteByIdsOperation = DeleteByIdsOperation;
  type onlineProgramsV3Step_universal_d_DeleteByFilterOperation = DeleteByFilterOperation;
  type onlineProgramsV3Step_universal_d_UpdateByFilterOperation = UpdateByFilterOperation;
  type onlineProgramsV3Step_universal_d_UpdateExistingOperation = UpdateExistingOperation;
  type onlineProgramsV3Step_universal_d_CreateStepRequest = CreateStepRequest;
  type onlineProgramsV3Step_universal_d_CreateStepResponse = CreateStepResponse;
  type onlineProgramsV3Step_universal_d_BulkCreateStepRequest = BulkCreateStepRequest;
  type onlineProgramsV3Step_universal_d_BulkCreateStepResponse = BulkCreateStepResponse;
  type onlineProgramsV3Step_universal_d_BulkStepResult = BulkStepResult;
  type onlineProgramsV3Step_universal_d_ItemMetadata = ItemMetadata;
  type onlineProgramsV3Step_universal_d_ApplicationError = ApplicationError;
  type onlineProgramsV3Step_universal_d_BulkActionMetadata = BulkActionMetadata;
  type onlineProgramsV3Step_universal_d_BulkCreateStepMigrationRequest = BulkCreateStepMigrationRequest;
  type onlineProgramsV3Step_universal_d_BulkCreateStepMigrationResponse = BulkCreateStepMigrationResponse;
  type onlineProgramsV3Step_universal_d_GetStepRequest = GetStepRequest;
  type onlineProgramsV3Step_universal_d_DescriptionFieldSet = DescriptionFieldSet;
  const onlineProgramsV3Step_universal_d_DescriptionFieldSet: typeof DescriptionFieldSet;
  type onlineProgramsV3Step_universal_d_GetStepResponse = GetStepResponse;
  type onlineProgramsV3Step_universal_d_UpdateStepRequest = UpdateStepRequest;
  type onlineProgramsV3Step_universal_d_UpdateStepResponse = UpdateStepResponse;
  type onlineProgramsV3Step_universal_d_DeleteStepRequest = DeleteStepRequest;
  type onlineProgramsV3Step_universal_d_DeleteStepResponse = DeleteStepResponse;
  type onlineProgramsV3Step_universal_d_QueryStepsRequest = QueryStepsRequest;
  type onlineProgramsV3Step_universal_d_CursorQuery = CursorQuery;
  type onlineProgramsV3Step_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type onlineProgramsV3Step_universal_d_Sorting = Sorting;
  type onlineProgramsV3Step_universal_d_SortOrder = SortOrder;
  const onlineProgramsV3Step_universal_d_SortOrder: typeof SortOrder;
  type onlineProgramsV3Step_universal_d_CursorPaging = CursorPaging;
  type onlineProgramsV3Step_universal_d_QueryStepsResponse = QueryStepsResponse;
  type onlineProgramsV3Step_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type onlineProgramsV3Step_universal_d_Cursors = Cursors;
  type onlineProgramsV3Step_universal_d_QueryStepsWithoutPagingRequest = QueryStepsWithoutPagingRequest;
  type onlineProgramsV3Step_universal_d_QueryStepsWithoutPagingResponse = QueryStepsWithoutPagingResponse;
  type onlineProgramsV3Step_universal_d_ListAllProgramStepsRequest = ListAllProgramStepsRequest;
  type onlineProgramsV3Step_universal_d_ListAllProgramStepsResponse = ListAllProgramStepsResponse;
  type onlineProgramsV3Step_universal_d_BulkCloneStepRequest = BulkCloneStepRequest;
  type onlineProgramsV3Step_universal_d_BulkCloneStepResponse = BulkCloneStepResponse;
  type onlineProgramsV3Step_universal_d_MoveStepRequest = MoveStepRequest;
  type onlineProgramsV3Step_universal_d_MoveStepResponse = MoveStepResponse;
  type onlineProgramsV3Step_universal_d_StepMoved = StepMoved;
  type onlineProgramsV3Step_universal_d_CloneStepRequest = CloneStepRequest;
  type onlineProgramsV3Step_universal_d_CloneStepResponse = CloneStepResponse;
  type onlineProgramsV3Step_universal_d_DomainEvent = DomainEvent;
  type onlineProgramsV3Step_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type onlineProgramsV3Step_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type onlineProgramsV3Step_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type onlineProgramsV3Step_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type onlineProgramsV3Step_universal_d_ActionEvent = ActionEvent;
  type onlineProgramsV3Step_universal_d_Empty = Empty;
  type onlineProgramsV3Step_universal_d_MessageEnvelope = MessageEnvelope;
  type onlineProgramsV3Step_universal_d_IdentificationData = IdentificationData;
  type onlineProgramsV3Step_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type onlineProgramsV3Step_universal_d_WebhookIdentityType = WebhookIdentityType;
  const onlineProgramsV3Step_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const onlineProgramsV3Step_universal_d_createStep: typeof createStep;
  const onlineProgramsV3Step_universal_d_bulkCreateStep: typeof bulkCreateStep;
  type onlineProgramsV3Step_universal_d_BulkCreateStepOptions = BulkCreateStepOptions;
  const onlineProgramsV3Step_universal_d_bulkCreateStepMigration: typeof bulkCreateStepMigration;
  type onlineProgramsV3Step_universal_d_BulkCreateStepMigrationOptions = BulkCreateStepMigrationOptions;
  const onlineProgramsV3Step_universal_d_getStep: typeof getStep;
  type onlineProgramsV3Step_universal_d_GetStepOptions = GetStepOptions;
  const onlineProgramsV3Step_universal_d_updateStep: typeof updateStep;
  type onlineProgramsV3Step_universal_d_UpdateStep = UpdateStep;
  type onlineProgramsV3Step_universal_d_UpdateStepOptions = UpdateStepOptions;
  const onlineProgramsV3Step_universal_d_deleteStep: typeof deleteStep;
  const onlineProgramsV3Step_universal_d_querySteps: typeof querySteps;
  type onlineProgramsV3Step_universal_d_QueryStepsOptions = QueryStepsOptions;
  const onlineProgramsV3Step_universal_d_queryStepsWithoutPaging: typeof queryStepsWithoutPaging;
  type onlineProgramsV3Step_universal_d_QueryStepsWithoutPagingOptions = QueryStepsWithoutPagingOptions;
  type onlineProgramsV3Step_universal_d_StepsQueryResult = StepsQueryResult;
  type onlineProgramsV3Step_universal_d_StepsQueryBuilder = StepsQueryBuilder;
  const onlineProgramsV3Step_universal_d_listAllProgramSteps: typeof listAllProgramSteps;
  type onlineProgramsV3Step_universal_d_ListAllProgramStepsOptions = ListAllProgramStepsOptions;
  const onlineProgramsV3Step_universal_d_bulkCloneStep: typeof bulkCloneStep;
  type onlineProgramsV3Step_universal_d_BulkCloneStepOptions = BulkCloneStepOptions;
  const onlineProgramsV3Step_universal_d_moveStep: typeof moveStep;
  type onlineProgramsV3Step_universal_d_MoveStepOptions = MoveStepOptions;
  const onlineProgramsV3Step_universal_d_cloneStep: typeof cloneStep;
  namespace onlineProgramsV3Step_universal_d {
    export {
      onlineProgramsV3Step_universal_d_Step as Step,
      onlineProgramsV3Step_universal_d_StepStepTypeOptionsOneOf as StepStepTypeOptionsOneOf,
      onlineProgramsV3Step_universal_d_WixVideo as WixVideo,
      onlineProgramsV3Step_universal_d_VideoResolution as VideoResolution,
      onlineProgramsV3Step_universal_d_Description as Description,
      onlineProgramsV3Step_universal_d_DescriptionMediaOneOf as DescriptionMediaOneOf,
      onlineProgramsV3Step_universal_d_StepType as StepType,
      onlineProgramsV3Step_universal_d_VideoOptions as VideoOptions,
      onlineProgramsV3Step_universal_d_VideoOptionsVideoSourceOneOf as VideoOptionsVideoSourceOneOf,
      onlineProgramsV3Step_universal_d_QuizOptions as QuizOptions,
      onlineProgramsV3Step_universal_d_UpdateDocumentsEvent as UpdateDocumentsEvent,
      onlineProgramsV3Step_universal_d_UpdateDocumentsEventOperationOneOf as UpdateDocumentsEventOperationOneOf,
      onlineProgramsV3Step_universal_d_DocumentUpdateOperation as DocumentUpdateOperation,
      onlineProgramsV3Step_universal_d_IndexDocument as IndexDocument,
      onlineProgramsV3Step_universal_d_DocumentPayload as DocumentPayload,
      onlineProgramsV3Step_universal_d_DocumentImage as DocumentImage,
      onlineProgramsV3Step_universal_d_Enum as Enum,
      onlineProgramsV3Step_universal_d_DeleteByIdsOperation as DeleteByIdsOperation,
      onlineProgramsV3Step_universal_d_DeleteByFilterOperation as DeleteByFilterOperation,
      onlineProgramsV3Step_universal_d_UpdateByFilterOperation as UpdateByFilterOperation,
      onlineProgramsV3Step_universal_d_UpdateExistingOperation as UpdateExistingOperation,
      onlineProgramsV3Step_universal_d_CreateStepRequest as CreateStepRequest,
      onlineProgramsV3Step_universal_d_CreateStepResponse as CreateStepResponse,
      onlineProgramsV3Step_universal_d_BulkCreateStepRequest as BulkCreateStepRequest,
      onlineProgramsV3Step_universal_d_BulkCreateStepResponse as BulkCreateStepResponse,
      onlineProgramsV3Step_universal_d_BulkStepResult as BulkStepResult,
      onlineProgramsV3Step_universal_d_ItemMetadata as ItemMetadata,
      onlineProgramsV3Step_universal_d_ApplicationError as ApplicationError,
      onlineProgramsV3Step_universal_d_BulkActionMetadata as BulkActionMetadata,
      onlineProgramsV3Step_universal_d_BulkCreateStepMigrationRequest as BulkCreateStepMigrationRequest,
      onlineProgramsV3Step_universal_d_BulkCreateStepMigrationResponse as BulkCreateStepMigrationResponse,
      onlineProgramsV3Step_universal_d_GetStepRequest as GetStepRequest,
      onlineProgramsV3Step_universal_d_DescriptionFieldSet as DescriptionFieldSet,
      onlineProgramsV3Step_universal_d_GetStepResponse as GetStepResponse,
      onlineProgramsV3Step_universal_d_UpdateStepRequest as UpdateStepRequest,
      onlineProgramsV3Step_universal_d_UpdateStepResponse as UpdateStepResponse,
      onlineProgramsV3Step_universal_d_DeleteStepRequest as DeleteStepRequest,
      onlineProgramsV3Step_universal_d_DeleteStepResponse as DeleteStepResponse,
      onlineProgramsV3Step_universal_d_QueryStepsRequest as QueryStepsRequest,
      onlineProgramsV3Step_universal_d_CursorQuery as CursorQuery,
      onlineProgramsV3Step_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      onlineProgramsV3Step_universal_d_Sorting as Sorting,
      onlineProgramsV3Step_universal_d_SortOrder as SortOrder,
      onlineProgramsV3Step_universal_d_CursorPaging as CursorPaging,
      onlineProgramsV3Step_universal_d_QueryStepsResponse as QueryStepsResponse,
      onlineProgramsV3Step_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      onlineProgramsV3Step_universal_d_Cursors as Cursors,
      onlineProgramsV3Step_universal_d_QueryStepsWithoutPagingRequest as QueryStepsWithoutPagingRequest,
      onlineProgramsV3Step_universal_d_QueryStepsWithoutPagingResponse as QueryStepsWithoutPagingResponse,
      onlineProgramsV3Step_universal_d_ListAllProgramStepsRequest as ListAllProgramStepsRequest,
      onlineProgramsV3Step_universal_d_ListAllProgramStepsResponse as ListAllProgramStepsResponse,
      onlineProgramsV3Step_universal_d_BulkCloneStepRequest as BulkCloneStepRequest,
      onlineProgramsV3Step_universal_d_BulkCloneStepResponse as BulkCloneStepResponse,
      onlineProgramsV3Step_universal_d_MoveStepRequest as MoveStepRequest,
      onlineProgramsV3Step_universal_d_MoveStepResponse as MoveStepResponse,
      onlineProgramsV3Step_universal_d_StepMoved as StepMoved,
      onlineProgramsV3Step_universal_d_CloneStepRequest as CloneStepRequest,
      onlineProgramsV3Step_universal_d_CloneStepResponse as CloneStepResponse,
      onlineProgramsV3Step_universal_d_DomainEvent as DomainEvent,
      onlineProgramsV3Step_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      onlineProgramsV3Step_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      onlineProgramsV3Step_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      onlineProgramsV3Step_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      onlineProgramsV3Step_universal_d_ActionEvent as ActionEvent,
      onlineProgramsV3Step_universal_d_Empty as Empty,
      onlineProgramsV3Step_universal_d_MessageEnvelope as MessageEnvelope,
      onlineProgramsV3Step_universal_d_IdentificationData as IdentificationData,
      onlineProgramsV3Step_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      onlineProgramsV3Step_universal_d_WebhookIdentityType as WebhookIdentityType,
      onlineProgramsV3Step_universal_d_createStep as createStep,
      onlineProgramsV3Step_universal_d_bulkCreateStep as bulkCreateStep,
      onlineProgramsV3Step_universal_d_BulkCreateStepOptions as BulkCreateStepOptions,
      onlineProgramsV3Step_universal_d_bulkCreateStepMigration as bulkCreateStepMigration,
      onlineProgramsV3Step_universal_d_BulkCreateStepMigrationOptions as BulkCreateStepMigrationOptions,
      onlineProgramsV3Step_universal_d_getStep as getStep,
      onlineProgramsV3Step_universal_d_GetStepOptions as GetStepOptions,
      onlineProgramsV3Step_universal_d_updateStep as updateStep,
      onlineProgramsV3Step_universal_d_UpdateStep as UpdateStep,
      onlineProgramsV3Step_universal_d_UpdateStepOptions as UpdateStepOptions,
      onlineProgramsV3Step_universal_d_deleteStep as deleteStep,
      onlineProgramsV3Step_universal_d_querySteps as querySteps,
      onlineProgramsV3Step_universal_d_QueryStepsOptions as QueryStepsOptions,
      onlineProgramsV3Step_universal_d_queryStepsWithoutPaging as queryStepsWithoutPaging,
      onlineProgramsV3Step_universal_d_QueryStepsWithoutPagingOptions as QueryStepsWithoutPagingOptions,
      onlineProgramsV3Step_universal_d_StepsQueryResult as StepsQueryResult,
      onlineProgramsV3Step_universal_d_StepsQueryBuilder as StepsQueryBuilder,
      onlineProgramsV3Step_universal_d_listAllProgramSteps as listAllProgramSteps,
      onlineProgramsV3Step_universal_d_ListAllProgramStepsOptions as ListAllProgramStepsOptions,
      onlineProgramsV3Step_universal_d_bulkCloneStep as bulkCloneStep,
      onlineProgramsV3Step_universal_d_BulkCloneStepOptions as BulkCloneStepOptions,
      onlineProgramsV3Step_universal_d_moveStep as moveStep,
      onlineProgramsV3Step_universal_d_MoveStepOptions as MoveStepOptions,
      onlineProgramsV3Step_universal_d_cloneStep as cloneStep,
    };
  }
  
  export { achievementsCategoriesV3Category_universal_d as categories, onlineProgramsV3Participant_universal_d as participants, onlineProgramsV3Program_universal_d as programs, onlineProgramsV3Section_universal_d as sections, onlineProgramsV3Step_universal_d as steps };
}
