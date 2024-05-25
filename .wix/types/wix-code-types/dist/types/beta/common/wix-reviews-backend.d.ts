declare module "wix-reviews-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Entity describing Review */
  interface Review {
      /** Namespace of app integrated with reviews */
      namespace?: string;
      /** Entity to what review is written id */
      entityId?: string;
      /**
       * Review Id
       * @readonly
       */
      _id?: string;
      /** Review content */
      content?: ReviewContent;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
      /**
       * Author of review data
       * @readonly
       */
      author?: Author;
      /**
       * Reply to review
       * @readonly
       */
      reply?: Reply;
      /**
       * Number of reader found this review helpful
       * @readonly
       */
      foundHelpful?: number;
      /**
       * Number of reader found this review unhelpful
       * @readonly
       */
      foundUnhelpful?: number;
      /**
       * Helpfulness score
       * @readonly
       */
      helpfulness?: number;
      /** Moderation status of review content */
      moderation?: Moderation;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
  }
  /** Entity describing review content */
  interface ReviewContent {
      /** Review title */
      title?: string | null;
      /** Review body */
      body?: string | null;
      /** List of media items in review */
      media?: Media[];
      /** Given rating to review */
      rating?: number;
  }
  /** Entity describing media item of review */
  interface Media extends MediaMediaOneOf {
      /** image format media item */
      image?: string;
      /** video format media item */
      video?: string;
  }
  /** @oneof */
  interface MediaMediaOneOf {
      /** image format media item */
      image?: string;
      /** video format media item */
      video?: string;
  }
  interface VideoResolution {
      /**
       * Video URL.
       * @readonly
       */
      url?: string;
      /**
       * Video height.
       * @readonly
       */
      height?: number;
      /**
       * Video width.
       * @readonly
       */
      width?: number;
      /**
       * Video thumbnail.
       * @readonly
       */
      poster?: string;
      /**
       * Video format for example, mp4, hls.
       * @readonly
       */
      format?: string;
  }
  /** Entity describing review author */
  interface Author {
      /** Contact id of author */
      contactId?: string | null;
      /** Author identity type */
      authorType?: AuthorType;
      /** Author name */
      authorName?: string | null;
  }
  /** Supported types of review author */
  enum AuthorType {
      UNKNOWN = "UNKNOWN",
      MEMBER = "MEMBER",
      VISITOR = "VISITOR"
  }
  /** Entity describing reply to review */
  interface Reply {
      /** Reply content */
      message?: string;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
  }
  /** Entity defining review moderation status */
  interface Moderation {
      moderationStatus?: ModerationModerationStatus;
      /**
       * Indicates whether the moderation status of the review was changed manually by a moderator.
       * i.e., when a moderator reviews the review and explicitly chooses to approve, reject.
       * If the status is changed automatically, for example as a result of
       * passing the moderation rules, this field will be set to false.
       * @readonly
       */
      manuallyChanged?: boolean;
  }
  /** Supported states review can be during moderation */
  enum ModerationModerationStatus {
      UNKNOWN = "UNKNOWN",
      APPROVED = "APPROVED",
      IN_MODERATION = "IN_MODERATION",
      REJECTED = "REJECTED",
      SUBMITTED = "SUBMITTED"
  }
  interface AsyncSubmitModeratedContentRequest {
      /** meta_site_id */
      metaSiteId?: string | null;
      /** App Def Id of moderated content owner vertical, if not provided, will be taken from CallScope */
      appDefId?: string | null;
      /** Content to moderate */
      content?: Content;
      /** optional content revision supplied and managed by vertical */
      contentRevision?: string | null;
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
  interface GetReviewRequest {
      /** Review id */
      reviewId: string;
      /** Feature flag which enables to return private (not published) review */
      returnPrivateReviews?: boolean;
  }
  interface GetReviewResponse {
      /** Review entity */
      review?: Review;
  }
  interface CreateReviewAndContactRequest {
      /** Namespace where review is created */
      namespace: string;
      /** Entity id of reviewed entity */
      entityId: string;
      /** Review author name */
      name?: string | null;
      /** Review author email. Only required when review author is visitor */
      email?: string | null;
      /** Review content */
      content: ReviewContent;
  }
  interface CreateReviewResponse {
      /** Review entity */
      review?: Review;
  }
  interface CreateReviewRequest {
      /** Review entity to create */
      review?: Review;
  }
  interface UpdateReviewContentRequest {
      /** Review id */
      reviewId: string;
      /** Review content */
      content?: ReviewContent;
      /**
       * Fieldmask with changed fields
       * Supported fields: content.title, content.body, content.media, content.rating
       */
      fieldMask?: string[];
      /** @internal */
      mask?: string[];
  }
  interface UpdateReviewContentResponse {
      /** Updated review data */
      review?: Review;
  }
  /** Action describing changed review moderation status */
  interface ModerationStatusChanged {
      /** Review entity */
      review?: Review;
  }
  interface UpdateReviewRequest {
      /** Review to be updated */
      review?: Review;
      /**
       * Fieldmask with changed fields
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateReviewResponse {
      /** Updated review data */
      review?: Review;
  }
  interface DeleteReviewRequest {
      /** Review id */
      reviewId: string;
  }
  interface DeleteReviewResponse {
      /** Review entity */
      review?: Review;
  }
  interface BulkDeleteReviewsRequest {
      /** Reviews to delete */
      filter?: Record<string, any> | null;
  }
  interface BulkDeleteReviewsResponse {
      /** Reference to async job */
      jobId?: string;
  }
  interface QueryReviewsRequest {
      /** Review query */
      query?: QueryV2;
      /** Feature flag which enables to query private (not published) reviews */
      returnPrivateReviews?: boolean;
  }
  interface QueryV2 {
      filter?: Record<string, any> | null;
      sort?: Sorting[];
      cursorPaging?: CursorPaging;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /**
       * Sort order.
       *
       * Defaults to `ASC`.
       */
      order?: SortOrder;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface CursorPaging {
      /**
       * The number of items to load.
       * Cursor token returned in the query response. To be used on the next query request, but not the first query request.
       */
      limit?: number | null;
      /** Cursor returned in last query response. Should not be provided on first page request */
      cursor?: string | null;
  }
  interface QueryReviewsResponse {
      /** List of review */
      results?: Review[];
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
  }
  interface Cursors {
      /** Cursor pointing to next result page. */
      next?: string | null;
      /** Cursor pointing to previous result page. */
      prev?: string | null;
  }
  interface SetReplyRequest {
      /** Review id */
      reviewId: string;
      /** Response to review author */
      message: string;
  }
  interface SetReplyResponse {
      /** Review entity */
      review?: Review;
  }
  interface RemoveReplyRequest {
      /** Review id */
      reviewId: string;
  }
  interface RemoveReplyResponse {
      /** Review id */
      review?: Review;
  }
  interface DomainEvent extends DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
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
  interface BulkUpdateModerationStatusRequest {
      /** Reviews to moderate */
      filter?: Record<string, any> | null;
      /** Moderation status to set */
      status?: ModerationStatus;
  }
  enum ModerationStatus {
      UNKNOWN = "UNKNOWN",
      APPROVED = "APPROVED",
      REJECTED = "REJECTED"
  }
  interface BulkUpdateModerationStatusResponse {
      /** Reference to async job */
      jobId?: string;
  }
  /**
   * Returns requested review
   * @param reviewId - Review id
   * @public
   * @documentationMaturity preview
   * @requiredField reviewId
   * @returns Review entity
   */
  function getReview(reviewId: string, options?: GetReviewOptions): Promise<Review>;
  interface GetReviewOptions {
      /** Feature flag which enables to return private (not published) review */
      returnPrivateReviews?: boolean;
  }
  /**
   * Creates review and author contact in contacts system
   * @param namespace - Namespace where review is created
   * @public
   * @documentationMaturity preview
   * @requiredField namespace
   * @requiredField options
   * @requiredField options.content
   * @requiredField options.entityId
   */
  function createReviewAndContact(namespace: string, options: CreateReviewAndContactOptions): Promise<CreateReviewResponse>;
  interface CreateReviewAndContactOptions {
      /** Entity id of reviewed entity */
      entityId: string;
      /** Review author name */
      name?: string | null;
      /** Review author email. Only required when review author is visitor */
      email?: string | null;
      /** Review content */
      content: ReviewContent;
  }
  /**
   * Creates review
   * @public
   * @documentationMaturity preview
   * @requiredField options.review.author
   * @requiredField options.review.author.contactId
   * @requiredField options.review.content
   * @requiredField options.review.entityId
   * @requiredField options.review.namespace
   * @returns Review entity
   */
  function createReview(options?: CreateReviewOptions): Promise<Review>;
  interface CreateReviewOptions {
      /** Review entity to create */
      review?: Review;
  }
  /**
   * Updates review content with provided data
   * @param reviewId - Review id
   * @internal
   * @documentationMaturity preview
   * @requiredField reviewId
   */
  function updateReviewContent(reviewId: string, options?: UpdateReviewContentOptions): Promise<UpdateReviewContentResponse>;
  interface UpdateReviewContentOptions {
      /** Review content */
      content?: ReviewContent;
      /**
       * Fieldmask with changed fields
       * Supported fields: content.title, content.body, content.media, content.rating
       */
      fieldMask?: string[];
      /** @internal */
      mask?: string[];
  }
  /**
   * Updates review with provided data.
   * Pass the latest `revision` for a successful update.
   *
   * | Supported fields      |
   * | ----------- |
   * | content.title |
   * | content.body |
   * | content.media |
   * | content.rating |
   * @param _id - Review Id
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField options.review.revision
   * @returns Updated review data
   */
  function updateReview(_id: string, options?: UpdateReviewOptions): Promise<Review>;
  interface UpdateReviewOptions {
      review: {
          /** Namespace of app integrated with reviews */
          namespace?: string;
          /** Entity to what review is written id */
          entityId?: string;
          /**
           * Review Id
           * @readonly
           */
          _id?: string;
          /** Review content */
          content?: ReviewContent;
          /** @readonly */
          _createdDate?: Date;
          /** @readonly */
          _updatedDate?: Date;
          /**
           * Author of review data
           * @readonly
           */
          author?: Author;
          /**
           * Reply to review
           * @readonly
           */
          reply?: Reply;
          /**
           * Number of reader found this review helpful
           * @readonly
           */
          foundHelpful?: number;
          /**
           * Number of reader found this review unhelpful
           * @readonly
           */
          foundUnhelpful?: number;
          /**
           * Helpfulness score
           * @readonly
           */
          helpfulness?: number;
          /** Moderation status of review content */
          moderation?: Moderation;
          /**
           * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
           * @readonly
           */
          revision?: string | null;
      };
      /**
       * Fieldmask with changed fields
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes review
   * @param reviewId - Review id
   * @public
   * @documentationMaturity preview
   * @requiredField reviewId
   */
  function deleteReview(reviewId: string): Promise<DeleteReviewResponse>;
  /**
   * Deletes list of reviews by ids
   * @public
   * @documentationMaturity preview
   */
  function bulkDeleteReviews(options?: BulkDeleteReviewsOptions): Promise<BulkDeleteReviewsResponse>;
  interface BulkDeleteReviewsOptions {
      /** Reviews to delete */
      filter?: Record<string, any> | null;
  }
  /**
   * Return Reviews based on provided Query
   *
   *
   * | Filterable fields      | Supported operators |
   * | ----------- | ----------- |
   * | id | `$eq`, `$ne`, `$in` |
   * | namespace | `$eq`, `$ne`, `$in` |
   * | entityId | `$eq`, `$ne`, `$in` |
   * | content.rating | `$eq`, `$ne`, `$in`, `$lt`, `$lte`, `$gt`, `$gte` |
   * | content.media | `$isEmpty` |
   * | helpfulness | `$eq`, `$ne`, `$in`, `$lt`, `$lte`, `$gt`, `$gte` |
   * | moderation.moderationStatus | `$eq`, `$ne`, `$in` |
   * | createdDate | `$eq`, `$ne`, `$in`, `$lt`, `$lte`, `$gt`, `$gte` |
   *
   * | Sortable fields      | Supported directions |
   * | ----------- | ----------- |
   * | content.rating | `ASC`, `DESC` |
   * | helpfulness | `ASC`, `DESC` |
   * | createdDate | `ASC`, `DESC` |
   * @public
   * @documentationMaturity preview
   */
  function queryReviews(options?: QueryReviewsOptions): ResultsQueryBuilder;
  interface QueryReviewsOptions {
      /** Feature flag which enables to query private (not published) reviews */
      returnPrivateReviews?: boolean | undefined;
  }
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ResultsQueryResult extends QueryCursorResult {
      items: Review[];
      query: ResultsQueryBuilder;
      next: () => Promise<ResultsQueryResult>;
      prev: () => Promise<ResultsQueryResult>;
  }
  interface ResultsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: 'namespace' | '_id' | 'content.rating' | '_createdDate' | 'helpfulness' | 'moderation.moderationStatus', value: any) => ResultsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: 'namespace' | '_id' | 'content.rating' | '_createdDate' | 'helpfulness' | 'moderation.moderationStatus', value: any) => ResultsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: 'content.rating' | 'helpfulness', value: any) => ResultsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: 'content.rating' | '_createdDate' | 'helpfulness', value: any) => ResultsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: 'content.rating' | '_createdDate' | 'helpfulness', value: any) => ResultsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: 'content.rating' | '_createdDate' | 'helpfulness', value: any) => ResultsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: 'namespace' | '_id' | 'content.rating' | '_createdDate' | 'helpfulness' | 'moderation.moderationStatus', value: any) => ResultsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'content.rating' | '_createdDate' | 'helpfulness'>) => ResultsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'content.rating' | '_createdDate' | 'helpfulness'>) => ResultsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ResultsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ResultsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ResultsQueryResult>;
  }
  /**
   * Set reply on a review
   * @param reviewId - Review id
   * @param message - Response to review author
   * @internal
   * @documentationMaturity preview
   * @requiredField message
   * @requiredField reviewId
   */
  function setReply(reviewId: string, message: string): Promise<SetReplyResponse>;
  /**
   * Removes reply from review
   * @param reviewId - Review id
   * @internal
   * @documentationMaturity preview
   * @requiredField reviewId
   */
  function removeReply(reviewId: string): Promise<RemoveReplyResponse>;
  /**
   * Changes moderation status for multiple reviews
   * @internal
   * @documentationMaturity preview
   */
  function bulkUpdateModerationStatus(options?: BulkUpdateModerationStatusOptions): Promise<BulkUpdateModerationStatusResponse>;
  interface BulkUpdateModerationStatusOptions {
      /** Reviews to moderate */
      filter?: Record<string, any> | null;
      /** Moderation status to set */
      status?: ModerationStatus;
  }
  
  const reviewsV1Review_universal_d___debug: typeof __debug;
  type reviewsV1Review_universal_d_Review = Review;
  type reviewsV1Review_universal_d_ReviewContent = ReviewContent;
  type reviewsV1Review_universal_d_Media = Media;
  type reviewsV1Review_universal_d_MediaMediaOneOf = MediaMediaOneOf;
  type reviewsV1Review_universal_d_VideoResolution = VideoResolution;
  type reviewsV1Review_universal_d_Author = Author;
  type reviewsV1Review_universal_d_AuthorType = AuthorType;
  const reviewsV1Review_universal_d_AuthorType: typeof AuthorType;
  type reviewsV1Review_universal_d_Reply = Reply;
  type reviewsV1Review_universal_d_Moderation = Moderation;
  type reviewsV1Review_universal_d_ModerationModerationStatus = ModerationModerationStatus;
  const reviewsV1Review_universal_d_ModerationModerationStatus: typeof ModerationModerationStatus;
  type reviewsV1Review_universal_d_AsyncSubmitModeratedContentRequest = AsyncSubmitModeratedContentRequest;
  type reviewsV1Review_universal_d_Content = Content;
  type reviewsV1Review_universal_d_ContentPart = ContentPart;
  type reviewsV1Review_universal_d_ContentPartContentOneOf = ContentPartContentOneOf;
  type reviewsV1Review_universal_d_MediaItem = MediaItem;
  type reviewsV1Review_universal_d_MediaItemMediaOneOf = MediaItemMediaOneOf;
  type reviewsV1Review_universal_d_ClassifierValues = ClassifierValues;
  type reviewsV1Review_universal_d_AuthorInfo = AuthorInfo;
  type reviewsV1Review_universal_d_AuthorInfoIdentityOneOf = AuthorInfoIdentityOneOf;
  type reviewsV1Review_universal_d_ParentInfo = ParentInfo;
  type reviewsV1Review_universal_d_Link = Link;
  type reviewsV1Review_universal_d_Visibility = Visibility;
  type reviewsV1Review_universal_d_VisibilityType = VisibilityType;
  const reviewsV1Review_universal_d_VisibilityType: typeof VisibilityType;
  type reviewsV1Review_universal_d_GetReviewRequest = GetReviewRequest;
  type reviewsV1Review_universal_d_GetReviewResponse = GetReviewResponse;
  type reviewsV1Review_universal_d_CreateReviewAndContactRequest = CreateReviewAndContactRequest;
  type reviewsV1Review_universal_d_CreateReviewResponse = CreateReviewResponse;
  type reviewsV1Review_universal_d_CreateReviewRequest = CreateReviewRequest;
  type reviewsV1Review_universal_d_UpdateReviewContentRequest = UpdateReviewContentRequest;
  type reviewsV1Review_universal_d_UpdateReviewContentResponse = UpdateReviewContentResponse;
  type reviewsV1Review_universal_d_ModerationStatusChanged = ModerationStatusChanged;
  type reviewsV1Review_universal_d_UpdateReviewRequest = UpdateReviewRequest;
  type reviewsV1Review_universal_d_UpdateReviewResponse = UpdateReviewResponse;
  type reviewsV1Review_universal_d_DeleteReviewRequest = DeleteReviewRequest;
  type reviewsV1Review_universal_d_DeleteReviewResponse = DeleteReviewResponse;
  type reviewsV1Review_universal_d_BulkDeleteReviewsRequest = BulkDeleteReviewsRequest;
  type reviewsV1Review_universal_d_BulkDeleteReviewsResponse = BulkDeleteReviewsResponse;
  type reviewsV1Review_universal_d_QueryReviewsRequest = QueryReviewsRequest;
  type reviewsV1Review_universal_d_QueryV2 = QueryV2;
  type reviewsV1Review_universal_d_Sorting = Sorting;
  type reviewsV1Review_universal_d_SortOrder = SortOrder;
  const reviewsV1Review_universal_d_SortOrder: typeof SortOrder;
  type reviewsV1Review_universal_d_CursorPaging = CursorPaging;
  type reviewsV1Review_universal_d_QueryReviewsResponse = QueryReviewsResponse;
  type reviewsV1Review_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type reviewsV1Review_universal_d_Cursors = Cursors;
  type reviewsV1Review_universal_d_SetReplyRequest = SetReplyRequest;
  type reviewsV1Review_universal_d_SetReplyResponse = SetReplyResponse;
  type reviewsV1Review_universal_d_RemoveReplyRequest = RemoveReplyRequest;
  type reviewsV1Review_universal_d_RemoveReplyResponse = RemoveReplyResponse;
  type reviewsV1Review_universal_d_DomainEvent = DomainEvent;
  type reviewsV1Review_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type reviewsV1Review_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type reviewsV1Review_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type reviewsV1Review_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type reviewsV1Review_universal_d_ActionEvent = ActionEvent;
  type reviewsV1Review_universal_d_ExtendedFieldsUpdatedEvent = ExtendedFieldsUpdatedEvent;
  type reviewsV1Review_universal_d_Empty = Empty;
  type reviewsV1Review_universal_d_BulkUpdateModerationStatusRequest = BulkUpdateModerationStatusRequest;
  type reviewsV1Review_universal_d_ModerationStatus = ModerationStatus;
  const reviewsV1Review_universal_d_ModerationStatus: typeof ModerationStatus;
  type reviewsV1Review_universal_d_BulkUpdateModerationStatusResponse = BulkUpdateModerationStatusResponse;
  const reviewsV1Review_universal_d_getReview: typeof getReview;
  type reviewsV1Review_universal_d_GetReviewOptions = GetReviewOptions;
  const reviewsV1Review_universal_d_createReviewAndContact: typeof createReviewAndContact;
  type reviewsV1Review_universal_d_CreateReviewAndContactOptions = CreateReviewAndContactOptions;
  const reviewsV1Review_universal_d_createReview: typeof createReview;
  type reviewsV1Review_universal_d_CreateReviewOptions = CreateReviewOptions;
  const reviewsV1Review_universal_d_updateReviewContent: typeof updateReviewContent;
  type reviewsV1Review_universal_d_UpdateReviewContentOptions = UpdateReviewContentOptions;
  const reviewsV1Review_universal_d_updateReview: typeof updateReview;
  type reviewsV1Review_universal_d_UpdateReviewOptions = UpdateReviewOptions;
  const reviewsV1Review_universal_d_deleteReview: typeof deleteReview;
  const reviewsV1Review_universal_d_bulkDeleteReviews: typeof bulkDeleteReviews;
  type reviewsV1Review_universal_d_BulkDeleteReviewsOptions = BulkDeleteReviewsOptions;
  const reviewsV1Review_universal_d_queryReviews: typeof queryReviews;
  type reviewsV1Review_universal_d_QueryReviewsOptions = QueryReviewsOptions;
  type reviewsV1Review_universal_d_ResultsQueryResult = ResultsQueryResult;
  type reviewsV1Review_universal_d_ResultsQueryBuilder = ResultsQueryBuilder;
  const reviewsV1Review_universal_d_setReply: typeof setReply;
  const reviewsV1Review_universal_d_removeReply: typeof removeReply;
  const reviewsV1Review_universal_d_bulkUpdateModerationStatus: typeof bulkUpdateModerationStatus;
  type reviewsV1Review_universal_d_BulkUpdateModerationStatusOptions = BulkUpdateModerationStatusOptions;
  namespace reviewsV1Review_universal_d {
    export {
      reviewsV1Review_universal_d___debug as __debug,
      reviewsV1Review_universal_d_Review as Review,
      reviewsV1Review_universal_d_ReviewContent as ReviewContent,
      reviewsV1Review_universal_d_Media as Media,
      reviewsV1Review_universal_d_MediaMediaOneOf as MediaMediaOneOf,
      reviewsV1Review_universal_d_VideoResolution as VideoResolution,
      reviewsV1Review_universal_d_Author as Author,
      reviewsV1Review_universal_d_AuthorType as AuthorType,
      reviewsV1Review_universal_d_Reply as Reply,
      reviewsV1Review_universal_d_Moderation as Moderation,
      reviewsV1Review_universal_d_ModerationModerationStatus as ModerationModerationStatus,
      reviewsV1Review_universal_d_AsyncSubmitModeratedContentRequest as AsyncSubmitModeratedContentRequest,
      reviewsV1Review_universal_d_Content as Content,
      reviewsV1Review_universal_d_ContentPart as ContentPart,
      reviewsV1Review_universal_d_ContentPartContentOneOf as ContentPartContentOneOf,
      reviewsV1Review_universal_d_MediaItem as MediaItem,
      reviewsV1Review_universal_d_MediaItemMediaOneOf as MediaItemMediaOneOf,
      reviewsV1Review_universal_d_ClassifierValues as ClassifierValues,
      reviewsV1Review_universal_d_AuthorInfo as AuthorInfo,
      reviewsV1Review_universal_d_AuthorInfoIdentityOneOf as AuthorInfoIdentityOneOf,
      reviewsV1Review_universal_d_ParentInfo as ParentInfo,
      reviewsV1Review_universal_d_Link as Link,
      reviewsV1Review_universal_d_Visibility as Visibility,
      reviewsV1Review_universal_d_VisibilityType as VisibilityType,
      reviewsV1Review_universal_d_GetReviewRequest as GetReviewRequest,
      reviewsV1Review_universal_d_GetReviewResponse as GetReviewResponse,
      reviewsV1Review_universal_d_CreateReviewAndContactRequest as CreateReviewAndContactRequest,
      reviewsV1Review_universal_d_CreateReviewResponse as CreateReviewResponse,
      reviewsV1Review_universal_d_CreateReviewRequest as CreateReviewRequest,
      reviewsV1Review_universal_d_UpdateReviewContentRequest as UpdateReviewContentRequest,
      reviewsV1Review_universal_d_UpdateReviewContentResponse as UpdateReviewContentResponse,
      reviewsV1Review_universal_d_ModerationStatusChanged as ModerationStatusChanged,
      reviewsV1Review_universal_d_UpdateReviewRequest as UpdateReviewRequest,
      reviewsV1Review_universal_d_UpdateReviewResponse as UpdateReviewResponse,
      reviewsV1Review_universal_d_DeleteReviewRequest as DeleteReviewRequest,
      reviewsV1Review_universal_d_DeleteReviewResponse as DeleteReviewResponse,
      reviewsV1Review_universal_d_BulkDeleteReviewsRequest as BulkDeleteReviewsRequest,
      reviewsV1Review_universal_d_BulkDeleteReviewsResponse as BulkDeleteReviewsResponse,
      reviewsV1Review_universal_d_QueryReviewsRequest as QueryReviewsRequest,
      reviewsV1Review_universal_d_QueryV2 as QueryV2,
      reviewsV1Review_universal_d_Sorting as Sorting,
      reviewsV1Review_universal_d_SortOrder as SortOrder,
      reviewsV1Review_universal_d_CursorPaging as CursorPaging,
      reviewsV1Review_universal_d_QueryReviewsResponse as QueryReviewsResponse,
      reviewsV1Review_universal_d_PagingMetadataV2 as PagingMetadataV2,
      reviewsV1Review_universal_d_Cursors as Cursors,
      reviewsV1Review_universal_d_SetReplyRequest as SetReplyRequest,
      reviewsV1Review_universal_d_SetReplyResponse as SetReplyResponse,
      reviewsV1Review_universal_d_RemoveReplyRequest as RemoveReplyRequest,
      reviewsV1Review_universal_d_RemoveReplyResponse as RemoveReplyResponse,
      reviewsV1Review_universal_d_DomainEvent as DomainEvent,
      reviewsV1Review_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      reviewsV1Review_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      reviewsV1Review_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      reviewsV1Review_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      reviewsV1Review_universal_d_ActionEvent as ActionEvent,
      reviewsV1Review_universal_d_ExtendedFieldsUpdatedEvent as ExtendedFieldsUpdatedEvent,
      reviewsV1Review_universal_d_Empty as Empty,
      reviewsV1Review_universal_d_BulkUpdateModerationStatusRequest as BulkUpdateModerationStatusRequest,
      reviewsV1Review_universal_d_ModerationStatus as ModerationStatus,
      reviewsV1Review_universal_d_BulkUpdateModerationStatusResponse as BulkUpdateModerationStatusResponse,
      reviewsV1Review_universal_d_getReview as getReview,
      reviewsV1Review_universal_d_GetReviewOptions as GetReviewOptions,
      reviewsV1Review_universal_d_createReviewAndContact as createReviewAndContact,
      reviewsV1Review_universal_d_CreateReviewAndContactOptions as CreateReviewAndContactOptions,
      reviewsV1Review_universal_d_createReview as createReview,
      reviewsV1Review_universal_d_CreateReviewOptions as CreateReviewOptions,
      reviewsV1Review_universal_d_updateReviewContent as updateReviewContent,
      reviewsV1Review_universal_d_UpdateReviewContentOptions as UpdateReviewContentOptions,
      reviewsV1Review_universal_d_updateReview as updateReview,
      reviewsV1Review_universal_d_UpdateReviewOptions as UpdateReviewOptions,
      reviewsV1Review_universal_d_deleteReview as deleteReview,
      reviewsV1Review_universal_d_bulkDeleteReviews as bulkDeleteReviews,
      reviewsV1Review_universal_d_BulkDeleteReviewsOptions as BulkDeleteReviewsOptions,
      reviewsV1Review_universal_d_queryReviews as queryReviews,
      reviewsV1Review_universal_d_QueryReviewsOptions as QueryReviewsOptions,
      reviewsV1Review_universal_d_ResultsQueryResult as ResultsQueryResult,
      reviewsV1Review_universal_d_ResultsQueryBuilder as ResultsQueryBuilder,
      reviewsV1Review_universal_d_setReply as setReply,
      reviewsV1Review_universal_d_removeReply as removeReply,
      reviewsV1Review_universal_d_bulkUpdateModerationStatus as bulkUpdateModerationStatus,
      reviewsV1Review_universal_d_BulkUpdateModerationStatusOptions as BulkUpdateModerationStatusOptions,
    };
  }
  
  export { reviewsV1Review_universal_d as reviews };
}
