declare module "wix-forum-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Comment {
      /**
       * Comment ID
       * @readonly
       */
      _id?: string | null;
      /**
       * ID of parent comment (if relevant)
       * @readonly
       */
      parentId?: string | null;
      /** ID of post comment was made on */
      postId?: string | null;
      /**
       * SiteMember ID of comment owner
       * @readonly
       */
      ownerId?: string | null;
      /** Plain content text (no formatting) */
      contentText?: string | null;
      /**
       * Total number of comments made responding to this comment
       * @readonly
       */
      replyCount?: number | null;
      /**
       * Total number of comment likes
       * @readonly
       */
      likeCount?: number | null;
      /**
       * Date comment was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date comment was edited
       * @readonly
       */
      editedDate?: Date;
      /**
       * Date of latest activity on this comment (e.g., date the latest reply was added to comment)
       * @readonly
       */
      lastActivityDate?: Date;
      /**
       * Comment URL
       * @readonly
       */
      url?: string;
      /**
       * Total number of comment upvotes
       * @readonly
       */
      upvoteCount?: number | null;
      /**
       * Total number of comment downvotes
       * @readonly
       */
      downvoteCount?: number | null;
      /**
       * Score of comment
       * @readonly
       */
      score?: number | null;
      /**
       * Comment legacy ID
       * @internal
       * @readonly
       */
      legacyId?: string | null;
      /**
       * The comment content as a stringified DraftJs document.
       * @internal
       * @readonly
       */
      content?: string | null;
      /**
       * Whether comment is marked.
       * @readonly
       */
      marked?: boolean;
      /**
       * Ids of members mentioned in comment content
       * @readonly
       */
      mentions?: string[];
      /**
       * Images from comment content.
       * @readonly
       */
      images?: string[];
  }
  interface Upvoted {
      /** Comment ID */
      commentId?: string;
      /** Post ID */
      postId?: string;
  }
  interface Downvoted {
      /** Comment ID */
      commentId?: string;
      /** Post ID */
      postId?: string;
  }
  interface Unvoted {
      /** Comment ID */
      commentId?: string;
      /** Post ID */
      postId?: string;
  }
  interface Liked {
      /** Comment ID */
      commentId?: string;
      /** Post ID */
      postId?: string;
  }
  interface Unliked {
      /** Comment ID */
      commentId?: string;
      /** Post ID */
      postId?: string;
  }
  interface MarkedAsBest {
      /** Comment ID */
      commentId?: string;
      /** Post ID */
      postId?: string;
  }
  interface UnmarkedAsBest {
      /** Comment ID */
      commentId?: string;
      /** Post ID */
      postId?: string;
  }
  interface Reported {
      /** Report Type */
      reportType?: ReportType;
      /** Comment ID */
      commentId?: string;
      /** Post ID */
      postId?: string;
  }
  enum ReportType {
      OFFENSIVE_CONTENT = "OFFENSIVE_CONTENT",
      OFFENSIVE_MEDIA = "OFFENSIVE_MEDIA",
      SPAM = "SPAM"
  }
  interface Deleted {
      /** ID of the deleted comment. */
      commentId?: string;
      /** Post ID */
      postId?: string;
  }
  interface CommentRequest {
      /** Comment ID */
      commentId: string;
      /** Supported values: URL, CONTENT */
      fieldsets?: string[];
  }
  interface CommentResponse {
      /** Comment for provided post ID */
      comment?: Comment;
  }
  interface ApiQueryCommentsRequest {
      /** Paging object (e.g., { limit: 10, offset: 100 } ) */
      paging?: CommentsPaging;
      /** Filter object (e.g., { $and: [{ ownerId: { eq: 'ownerId' } }, { likeCount: { $gt: 0 }] } ) */
      filter?: Record<string, any> | null;
      /** Array of sort objects (e.g.,  [{ fieldName: createdDate, order: Order.ASC }] ) */
      sort?: CommentsSort[];
      /** Supported values: URL, CONTENT */
      fieldsets?: string[];
  }
  interface CommentsPaging {
      /** The number of items to load */
      limit?: number;
      /** Number of items to skip in the current sort order */
      offset?: number;
  }
  interface CommentsSort {
      /**
       * Records can be sorted by:
       * lastActivityDate
       * createdDate
       * replyCount
       * likeCount
       */
      fieldName?: string;
      /** Records can be sorted in ascending (default) or descending order */
      order?: Order;
  }
  enum Order {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface ApiQueryCommentsResponse {
      /** Comments list */
      comments?: Comment[];
      /** Pagination */
      metaData?: QueryCommentsResponseMetaData;
  }
  interface QueryCommentsResponseMetaData {
      /** Total number of records returned */
      count?: number;
      /** Offset of records */
      offset?: number;
      /** Total number of records that match the filters */
      total?: number;
  }
  interface CreateCommentRequest {
      /** Comment to create */
      comment?: Comment;
  }
  interface CreateCommentResponse {
      /** Created comment */
      comment?: Comment;
  }
  interface UpdateCommentRequest {
      /** ID of the comment to update */
      commentId: string;
      /** Field mask of fields to update */
      fieldMask?: string[];
      /** Comment data with partial data to update */
      comment?: Comment;
  }
  interface UpdateCommentResponse {
      /** Updated comment */
      comment?: Comment;
  }
  interface DeleteCommentRequest {
      /** ID of the comment to delete */
      commentId: string;
  }
  interface DeleteCommentResponse {
      /** Deleted comment */
      comment?: Comment;
  }
  interface GetCommentRequest {
      commentId: string;
      /** Supported values: URL, CONTENT */
      fieldsets?: string[];
  }
  interface GetCommentResponse {
      comment?: Comment;
  }
  interface QueryCommentsRequest {
      query: QueryV2;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
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
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
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
  interface QueryCommentsResponse {
      comments?: Comment[];
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
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface DomainEvent extends DomainEventBodyOneOf {
      /** random GUID so clients can tell if event was already handled */
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
      /**
       * Assuming that all messages including Actions have id
       * Example: The id of the specific order, the id of a specific campaign
       */
      entityId?: string;
      /** The time of the event. Useful if there was a delay in dispatching */
      eventTime?: Date;
      /**
       * A field that should be set if this event was triggered by an anonymize request.
       * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
       * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
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
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
  }
  /** @oneof */
  interface DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
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
  interface ExtendedFieldsUpdatedEvent {
      currentEntityAsJson?: string;
  }
  interface Empty {
  }
  /**
   * Returns a single comment by ID
   * @param commentId - Comment ID
   * @requiredField commentId
   */
  function getComment(commentId: string, options?: GetCommentOptions): Promise<CommentResponse>;
  interface GetCommentOptions {
      /** Supported values: URL, CONTENT */
      fieldsets?: string[];
  }
  /**
   * Returns a list of comments by [query](https://github.com/wix-private/platformization-guidelines/blob/master/Server/API-Query.md)
   *
   * Paging
   * - limit: default - 10, min - 0, max - 100
   * - offset: default - 0, min - 0
   *
   * Filterable fields:
   * - id
   * - parentId
   * - postId
   * - ownerId
   * - contentText
   * - replyCount
   * - likeCount
   * - createdDate
   * - editedDate
   * - lastActivityDate
   *
   * Sortable fields:
   * - lastActivityDate
   * - createdDate
   * - replyCount
   * - likeCount
   */
  function queryComments(options?: QueryCommentsOptions): Promise<ApiQueryCommentsResponse>;
  interface QueryCommentsOptions {
      /** Paging object (e.g., { limit: 10, offset: 100 } ) */
      paging?: CommentsPaging;
      /** Filter object (e.g., { $and: [{ ownerId: { eq: 'ownerId' } }, { likeCount: { $gt: 0 }] } ) */
      filter?: Record<string, any> | null;
      /** Array of sort objects (e.g.,  [{ fieldName: createdDate, order: Order.ASC }] ) */
      sort?: CommentsSort[];
      /** Supported values: URL, CONTENT */
      fieldsets?: string[];
  }
  /**
   * Creates comment
   * @requiredField options.comment.contentText
   * @requiredField options.comment.postId
   */
  function createComment(options?: CreateCommentOptions): Promise<CreateCommentResponse>;
  interface CreateCommentOptions {
      /** Comment to create */
      comment?: Comment;
  }
  /**
   * Updates comment fields according to fieldMask
   * @param commentId - ID of the comment to update
   * @requiredField commentId
   */
  function updateComment(commentId: string, options?: UpdateCommentOptions): Promise<UpdateCommentResponse>;
  interface UpdateCommentOptions {
      /** Field mask of fields to update */
      fieldMask?: string[];
      /** Comment data with partial data to update */
      comment?: Comment;
  }
  /**
   * Deletes comment
   * @param commentId - ID of the comment to delete
   * @requiredField commentId
   */
  function deleteComment(commentId: string): Promise<DeleteCommentResponse>;
  /** @requiredField commentId */
  function forumCommentsAdapterGetComment(commentId: string, options?: ForumCommentsAdapterGetCommentOptions): Promise<GetCommentResponse>;
  interface ForumCommentsAdapterGetCommentOptions {
      /** Supported values: URL, CONTENT */
      fieldsets?: string[];
  }
  /** @requiredField QueryCommentsRequest */
  function forumCommentsAdapterQueryComments(query?: QueryV2): Promise<QueryCommentsResponse>;
  
  const forumV1Comment_universal_d___debug: typeof __debug;
  type forumV1Comment_universal_d_Comment = Comment;
  type forumV1Comment_universal_d_Upvoted = Upvoted;
  type forumV1Comment_universal_d_Downvoted = Downvoted;
  type forumV1Comment_universal_d_Unvoted = Unvoted;
  type forumV1Comment_universal_d_Liked = Liked;
  type forumV1Comment_universal_d_Unliked = Unliked;
  type forumV1Comment_universal_d_MarkedAsBest = MarkedAsBest;
  type forumV1Comment_universal_d_UnmarkedAsBest = UnmarkedAsBest;
  type forumV1Comment_universal_d_Reported = Reported;
  type forumV1Comment_universal_d_ReportType = ReportType;
  const forumV1Comment_universal_d_ReportType: typeof ReportType;
  type forumV1Comment_universal_d_Deleted = Deleted;
  type forumV1Comment_universal_d_CommentRequest = CommentRequest;
  type forumV1Comment_universal_d_CommentResponse = CommentResponse;
  type forumV1Comment_universal_d_ApiQueryCommentsRequest = ApiQueryCommentsRequest;
  type forumV1Comment_universal_d_CommentsPaging = CommentsPaging;
  type forumV1Comment_universal_d_CommentsSort = CommentsSort;
  type forumV1Comment_universal_d_Order = Order;
  const forumV1Comment_universal_d_Order: typeof Order;
  type forumV1Comment_universal_d_ApiQueryCommentsResponse = ApiQueryCommentsResponse;
  type forumV1Comment_universal_d_QueryCommentsResponseMetaData = QueryCommentsResponseMetaData;
  type forumV1Comment_universal_d_CreateCommentRequest = CreateCommentRequest;
  type forumV1Comment_universal_d_CreateCommentResponse = CreateCommentResponse;
  type forumV1Comment_universal_d_UpdateCommentRequest = UpdateCommentRequest;
  type forumV1Comment_universal_d_UpdateCommentResponse = UpdateCommentResponse;
  type forumV1Comment_universal_d_DeleteCommentRequest = DeleteCommentRequest;
  type forumV1Comment_universal_d_DeleteCommentResponse = DeleteCommentResponse;
  type forumV1Comment_universal_d_GetCommentRequest = GetCommentRequest;
  type forumV1Comment_universal_d_GetCommentResponse = GetCommentResponse;
  type forumV1Comment_universal_d_QueryCommentsRequest = QueryCommentsRequest;
  type forumV1Comment_universal_d_QueryV2 = QueryV2;
  type forumV1Comment_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type forumV1Comment_universal_d_Sorting = Sorting;
  type forumV1Comment_universal_d_SortOrder = SortOrder;
  const forumV1Comment_universal_d_SortOrder: typeof SortOrder;
  type forumV1Comment_universal_d_Paging = Paging;
  type forumV1Comment_universal_d_CursorPaging = CursorPaging;
  type forumV1Comment_universal_d_QueryCommentsResponse = QueryCommentsResponse;
  type forumV1Comment_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type forumV1Comment_universal_d_Cursors = Cursors;
  type forumV1Comment_universal_d_DomainEvent = DomainEvent;
  type forumV1Comment_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type forumV1Comment_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type forumV1Comment_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type forumV1Comment_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type forumV1Comment_universal_d_ActionEvent = ActionEvent;
  type forumV1Comment_universal_d_ExtendedFieldsUpdatedEvent = ExtendedFieldsUpdatedEvent;
  type forumV1Comment_universal_d_Empty = Empty;
  const forumV1Comment_universal_d_getComment: typeof getComment;
  type forumV1Comment_universal_d_GetCommentOptions = GetCommentOptions;
  const forumV1Comment_universal_d_queryComments: typeof queryComments;
  type forumV1Comment_universal_d_QueryCommentsOptions = QueryCommentsOptions;
  const forumV1Comment_universal_d_createComment: typeof createComment;
  type forumV1Comment_universal_d_CreateCommentOptions = CreateCommentOptions;
  const forumV1Comment_universal_d_updateComment: typeof updateComment;
  type forumV1Comment_universal_d_UpdateCommentOptions = UpdateCommentOptions;
  const forumV1Comment_universal_d_deleteComment: typeof deleteComment;
  const forumV1Comment_universal_d_forumCommentsAdapterGetComment: typeof forumCommentsAdapterGetComment;
  type forumV1Comment_universal_d_ForumCommentsAdapterGetCommentOptions = ForumCommentsAdapterGetCommentOptions;
  const forumV1Comment_universal_d_forumCommentsAdapterQueryComments: typeof forumCommentsAdapterQueryComments;
  namespace forumV1Comment_universal_d {
    export {
      forumV1Comment_universal_d___debug as __debug,
      forumV1Comment_universal_d_Comment as Comment,
      forumV1Comment_universal_d_Upvoted as Upvoted,
      forumV1Comment_universal_d_Downvoted as Downvoted,
      forumV1Comment_universal_d_Unvoted as Unvoted,
      forumV1Comment_universal_d_Liked as Liked,
      forumV1Comment_universal_d_Unliked as Unliked,
      forumV1Comment_universal_d_MarkedAsBest as MarkedAsBest,
      forumV1Comment_universal_d_UnmarkedAsBest as UnmarkedAsBest,
      forumV1Comment_universal_d_Reported as Reported,
      forumV1Comment_universal_d_ReportType as ReportType,
      forumV1Comment_universal_d_Deleted as Deleted,
      forumV1Comment_universal_d_CommentRequest as CommentRequest,
      forumV1Comment_universal_d_CommentResponse as CommentResponse,
      forumV1Comment_universal_d_ApiQueryCommentsRequest as ApiQueryCommentsRequest,
      forumV1Comment_universal_d_CommentsPaging as CommentsPaging,
      forumV1Comment_universal_d_CommentsSort as CommentsSort,
      forumV1Comment_universal_d_Order as Order,
      forumV1Comment_universal_d_ApiQueryCommentsResponse as ApiQueryCommentsResponse,
      forumV1Comment_universal_d_QueryCommentsResponseMetaData as QueryCommentsResponseMetaData,
      forumV1Comment_universal_d_CreateCommentRequest as CreateCommentRequest,
      forumV1Comment_universal_d_CreateCommentResponse as CreateCommentResponse,
      forumV1Comment_universal_d_UpdateCommentRequest as UpdateCommentRequest,
      forumV1Comment_universal_d_UpdateCommentResponse as UpdateCommentResponse,
      forumV1Comment_universal_d_DeleteCommentRequest as DeleteCommentRequest,
      forumV1Comment_universal_d_DeleteCommentResponse as DeleteCommentResponse,
      forumV1Comment_universal_d_GetCommentRequest as GetCommentRequest,
      forumV1Comment_universal_d_GetCommentResponse as GetCommentResponse,
      forumV1Comment_universal_d_QueryCommentsRequest as QueryCommentsRequest,
      forumV1Comment_universal_d_QueryV2 as QueryV2,
      forumV1Comment_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      forumV1Comment_universal_d_Sorting as Sorting,
      forumV1Comment_universal_d_SortOrder as SortOrder,
      forumV1Comment_universal_d_Paging as Paging,
      forumV1Comment_universal_d_CursorPaging as CursorPaging,
      forumV1Comment_universal_d_QueryCommentsResponse as QueryCommentsResponse,
      forumV1Comment_universal_d_PagingMetadataV2 as PagingMetadataV2,
      forumV1Comment_universal_d_Cursors as Cursors,
      forumV1Comment_universal_d_DomainEvent as DomainEvent,
      forumV1Comment_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      forumV1Comment_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      forumV1Comment_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      forumV1Comment_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      forumV1Comment_universal_d_ActionEvent as ActionEvent,
      forumV1Comment_universal_d_ExtendedFieldsUpdatedEvent as ExtendedFieldsUpdatedEvent,
      forumV1Comment_universal_d_Empty as Empty,
      forumV1Comment_universal_d_getComment as getComment,
      forumV1Comment_universal_d_GetCommentOptions as GetCommentOptions,
      forumV1Comment_universal_d_queryComments as queryComments,
      forumV1Comment_universal_d_QueryCommentsOptions as QueryCommentsOptions,
      forumV1Comment_universal_d_createComment as createComment,
      forumV1Comment_universal_d_CreateCommentOptions as CreateCommentOptions,
      forumV1Comment_universal_d_updateComment as updateComment,
      forumV1Comment_universal_d_UpdateCommentOptions as UpdateCommentOptions,
      forumV1Comment_universal_d_deleteComment as deleteComment,
      forumV1Comment_universal_d_forumCommentsAdapterGetComment as forumCommentsAdapterGetComment,
      forumV1Comment_universal_d_ForumCommentsAdapterGetCommentOptions as ForumCommentsAdapterGetCommentOptions,
      forumV1Comment_universal_d_forumCommentsAdapterQueryComments as forumCommentsAdapterQueryComments,
    };
  }
  
  export { forumV1Comment_universal_d as forum };
}
