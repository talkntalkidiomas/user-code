declare module "wix-groups-backend.v3" {
  /**
   * >**Notes:**
   * > + Site owners may set that members are not permitted to create groups in the Wix Groups application settings.
   * > + In this situation, site members have to submit a Create Request to create a new group.
   * > + Create Requests can be approved or rejected by an admin.
   * > + After a Create Request has been approved, the new group is added to the Group List in the Wix Groups app home page.
   * > + See [Introduction](https://dev.wix.com/api/rest/wix-groups/groups/introduction#wix-groups_groups_introduction_terminology) for more details.
   */
  interface CreateRequest {
      /**
       * Create request ID
       * @readonly
       */
      _id?: string | null;
      /** Group requested for creation. */
      group?: Group;
      /**
       * Status of request.
       * - `PENDING` - Pending request.
       * - `APPROVED` - Approved request.
       * - `REJECTED` - Rejected request.
       * - `CANCELED` - Canceled request.
       */
      status?: RequestStatus$1;
      /** Request details. */
      requestDetails?: RequestDetails$1;
  }
  interface Group {
      /**
       * Group ID.
       * @readonly
       */
      _id?: string | null;
      /** A unique part of a group's URL, for example `https:/example.com/groups/slug`. */
      slug?: string | null;
      /**
       * __Deprecated.__ Use `privacyStatus` instead.
       * This property will be removed on June 30, 2022.
       */
      privacyLevel?: PrivacyStatus;
      /**
       * Group privacy status.
       * - `PUBLIC` - Anyone can see the group and its content. Anyone can join the group.
       * - `PRIVATE` - Anyone can see the group, but only members can see its content. New member must submit a `Join Group Request`.
       * - `SECRET` - Only admins and members can see the group. New members can only be added by other members.
       */
      privacyStatus?: PrivacyStatus;
      /** @internal */
      accessRestriction?: AccessRestriction;
      /**
       * __Deprecated.__ Use `name` instead.
       * This property will be removed on June 30, 2022.
       */
      title?: string | null;
      /** Group name. */
      name?: string | null;
      /** Group description in DraftJS format. */
      description?: string | null;
      /** Group teaser. */
      teaser?: string | null;
      /**
       * __Deprecated.__
       * For `details.logo`, use `coverImage` instead.
       * For `details.membersTitle`, `memberTitle` instead.
       * This property will be removed on June 30, 2022.
       */
      details?: GroupDetails;
      /** What group members are called, for example `Coworkers`, `Friends`, or `Students`. */
      memberTitle?: string | null;
      /** Cover image. You cannot upload your own cover image. */
      coverImage?: CoverImage;
      /** Group specific settings. Available to the site owners under `Admin Tools` in the dashboard. */
      settings?: GroupSettings;
      /**
       * Total count of current group members.
       * @readonly
       */
      membersCount?: number | null;
      /**
       * __Deprecated.__ Use `ownerId` instead.
       * This property will be removed on June 30, 2022.
       * @readonly
       */
      createdBy?: Identity;
      /**
       * Group owner.
       * @readonly
       */
      ownerId?: string | null;
      /**
       * Group creation date and time.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time of the latest group update.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * __Deprecated.__ Use `lastActivityDate` instead.
       * This property will be removed on June 30, 2022.
       * @readonly
       */
      recentActivityDate?: Date;
      /**
       * Date and time of the most recent group activity, for example a post or comment.
       * @readonly
       */
      lastActivityDate?: Date;
      /**
       * Number of pending group members. Relevant only for `PRIVATE` groups.
       * @internal
       * @readonly
       */
      pendingMembersCount?: number | null;
      /**
       * Number of posts and comments in the group since the calling member last saw the group.
       * @internal
       * @readonly
       */
      updatesCount?: number | null;
  }
  enum Type {
      UNKNOWN = "UNKNOWN",
      ADMIN_APPROVAL = "ADMIN_APPROVAL",
      PAID_PLANS = "PAID_PLANS",
      EVENTS = "EVENTS"
  }
  interface Events {
      eventIds?: string[];
  }
  interface Logo {
      /** Logo image ID (for internal use). */
      mediaId?: string | null;
      /**
       * Logo image file URL.
       * @internal
       */
      fileUrl?: string | null;
      /** Logo image width. */
      width?: number | null;
      /** Logo image height. */
      height?: number | null;
  }
  interface GroupDetailsPosition {
      /** horizontal coordinate */
      x?: number;
      /** vertical coordinate */
      y?: number;
  }
  interface Image {
      /** Image ID (for internal use). */
      mediaId?: string | null;
      /**
       * Image file URL.
       * @internal
       */
      fileUrl?: string | null;
      /** Image width. */
      width?: number | null;
      /** Image height. */
      height?: number | null;
  }
  interface Position {
      /** horizontal coordinate */
      x?: number;
      /** vertical coordinate */
      y?: number;
  }
  enum AllowPolicy {
      UNKNOWN = "UNKNOWN",
      OWNER_AND_ADMINS = "OWNER_AND_ADMINS",
      OWNER = "OWNER",
      ALL_MEMBERS = "ALL_MEMBERS"
  }
  interface OnboardingStepSettings {
      stepKey?: StepKey;
      visible?: boolean;
  }
  enum StepKey {
      UNKNOWN = "UNKNOWN",
      CREATE_POST = "CREATE_POST",
      REACT_TO_POST = "REACT_TO_POST",
      INVITE_MEMBERS = "INVITE_MEMBERS"
  }
  enum PrivacyStatus {
      UNKNOWN = "UNKNOWN",
      /** Anyone can see the group in the group list and view its content. Anyone can join. */
      PUBLIC = "PUBLIC",
      /** Anyone can see the group in the group list, but only group members can see its content. In order to join a group, a group join request must be submitted. */
      PRIVATE = "PRIVATE",
      /** Only group members and admins can see the group in the group list. New group members can only be added by existing group members. */
      SECRET = "SECRET"
  }
  interface AccessRestriction extends AccessRestrictionDataOneOf {
      events?: Events;
      type?: Type;
  }
  /** @oneof */
  interface AccessRestrictionDataOneOf {
      events?: Events;
  }
  interface GroupDetails {
      /** Group logo. You cannot upload your own logo. */
      logo?: Logo;
      /** What group members are called, for example `Coworkers`, `Friends`, or `Students`. */
      membersTitle?: string | null;
      /**
       * Position of the corner of the cover image (or logo).
       * @internal
       */
      logoPosition?: GroupDetailsPosition;
      /**
       * Position of the corner of the cover image (or logo) for mobile browser.
       * @internal
       */
      mobileLogoPosition?: GroupDetailsPosition;
  }
  interface CoverImage {
      /** Cover image. */
      image?: Image;
      /** Position of the corner of the cover image (or logo). */
      position?: Position;
      /** Position of the corner of the cover image (or logo) for mobile browser. */
      mobilePosition?: Position;
  }
  interface GroupSettings {
      /**
       * __Deprecated.__ Use `allowedToInviteMembers` instead.
       * Whether regular members are permitted to invite new members.
       * If `false`, only admins can invite members. Defaults to `true`.
       */
      membersCanInvite?: boolean | null;
      /**
       * __Deprecated.__ Use `allowedToApproveJoinRequests` instead.
       * Whether all group members are permitted to approve join group requests.
       * If `false`, member approval is limited to the admins.
       */
      membersCanApprove?: boolean | null;
      /**
       * __Deprecated.__ Use `welcomeMemberPostEnabled` instead.
       * This property will be removed on June 30, 2022.
       */
      memberWelcomePostEnabled?: boolean | null;
      /** Whether a daily post about new members is enabled. */
      welcomeMemberPostEnabled?: boolean | null;
      /** Whether an automatic post about changing the group details is enabled. */
      groupDetailsChangedPostEnabled?: boolean | null;
      /** Whether all members can see the full member list. */
      showMemberList?: boolean | null;
      /**
       * Whether an automatic post about added events is enabled.
       * @internal
       */
      eventAddedPostEnabled?: boolean | null;
      /**
       * Determines who can invite members to the group
       * @internal
       */
      allowedToInviteMembers?: AllowPolicy;
      /**
       * Determines who can approve member join requests to the group
       * @internal
       */
      allowedToApproveJoinRequests?: AllowPolicy;
      /**
       * Determines who can add site members to the group
       * @internal
       */
      allowedToAddMembers?: AllowPolicy;
      /**
       * Determines who can create posts in the group
       * @internal
       */
      allowedToCreatePosts?: AllowPolicy;
      /**
       * Determines who can comment posts in the group
       * @internal
       */
      allowedToCommentPosts?: AllowPolicy;
      onboardingStepsSettings?: OnboardingStepSettings[];
  }
  interface Identity {
      /** Member ID of the group creator.  See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details. */
      _id?: string | null;
      identityType?: IdentityType;
  }
  enum IdentityType {
      USER = "USER",
      MEMBER = "MEMBER"
  }
  enum RequestStatus$1 {
      UNKNOWN_STATUS = "UNKNOWN_STATUS",
      /** Pending request. */
      PENDING = "PENDING",
      /** Approved request. */
      APPROVED = "APPROVED",
      /** Rejected request. */
      REJECTED = "REJECTED",
      /** Cancelled request. */
      CANCELLED = "CANCELLED",
      /** Canceled request. */
      CANCELED = "CANCELED"
  }
  interface RequestDetails$1 {
      /** Reason the request has been rejected. */
      rejectionReason?: string | null;
  }
  interface SubmitCreateRequestRequest {
      /** Group submitted for creation. */
      group?: Group;
  }
  interface SubmitCreateRequestResponse {
      /** Submitted Create Request. */
      createRequest?: CreateRequest;
  }
  interface ApproveCreateRequestsRequest {
      /**
       * Which items to approve.
       * @internal
       */
      itemsToApprove?: ItemsToUpdate$1;
      /** Create Request IDs to approve. Limited to `100`. */
      createRequestIds?: string[];
  }
  enum ItemsToUpdate$1 {
      /** Take into account only items which are listed in request. */
      BY_ID = "BY_ID",
      /** Update all items. */
      ALL_ITEMS = "ALL_ITEMS"
  }
  interface ApproveCreateRequestsResponse {
      /** Approved Create Requests. */
      createRequest?: CreateRequest[];
  }
  interface CreateRequestApproved {
      /** Approved create request. */
      createRequest?: CreateRequest;
  }
  interface RejectCreateRequestsRequest {
      /**
       * Which items to reject.
       * @internal
       */
      itemsToReject?: ItemsToUpdate$1;
      /** Rejection data. */
      rejections?: Rejection$1[];
  }
  interface Rejection$1 {
      /** ID of the Create Request to reject. */
      createRequestId?: string;
      /** Rejection reason. Free text displayed to the creator of the rejected Create Request. Limited to 1,000 characters. */
      reason?: string | null;
  }
  interface RejectCreateRequestsResponse {
      /** Rejected Create Requests. */
      createRequest?: CreateRequest[];
  }
  interface CreateRequestRejected {
      /** Rejected create request. */
      createRequest?: CreateRequest;
  }
  interface CancelCreateRequestRequest {
      /** ID of the Create Request to cancel. */
      createRequestId: string;
  }
  interface CancelCreateRequestResponse {
      /** Canceled Create Request. */
      createRequest?: CreateRequest;
  }
  interface ListCreateRequestsRequest {
      /**
       * Ownership filter. In case of server signing `ALL` value has to be used.
       * - `ALL` - All Create requests.
       * - `CURRENT_MEMBER` - Create requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter$1;
      /** Number of items to load. Maximum `100`. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  enum OwnershipFilter$1 {
      /** All items. */
      ALL = "ALL",
      /** Items for current site member. */
      CURRENT_MEMBER = "CURRENT_MEMBER"
  }
  interface ListCreateRequestsResponse {
      /** Create Requests. */
      createRequests?: CreateRequest[];
      metadata?: PagingMetadata$1;
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
  interface QueryCreateRequestsRequest {
      /**
       * Ownership filter. In case of server signing `ALL` value has to be used.
       * - `ALL` - All create requests.
       * - `CURRENT_MEMBER` - Create requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter$1;
      query?: Query$1;
  }
  interface Query$1 {
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
      sort?: Sorting$1[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
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
  interface QueryCreateRequestsResponse {
      /** Retrieved Create Requests. */
      createRequests?: CreateRequest[];
      metadata?: PagingMetadata$1;
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
  /**
   * Submit a create request.
   * Can be used in case `GroupsAppSettings.create_groups_policy` = `MEMBERS_WITH_APPROVAL`.
   * This endpoint doesn't support server signing.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function submitCreateRequest(options?: SubmitCreateRequestOptions): Promise<SubmitCreateRequestResponse>;
  interface SubmitCreateRequestOptions {
      /** Group submitted for creation. */
      group?: Group;
  }
  /**
   * Approves Create Requests.
   * Only admins can approve Create Requests.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function approveCreateRequests(options?: ApproveCreateRequestsOptions): Promise<ApproveCreateRequestsResponse>;
  interface ApproveCreateRequestsOptions {
      /**
       * Which items to approve.
       * @internal
       */
      itemsToApprove?: ItemsToUpdate$1;
      /** Create Request IDs to approve. Limited to `100`. */
      createRequestIds?: string[];
  }
  /**
   * Rejects Create Requests.
   * Only admins can reject Create Requests.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function rejectCreateRequests(options?: RejectCreateRequestsOptions): Promise<RejectCreateRequestsResponse>;
  interface RejectCreateRequestsOptions {
      /**
       * Which items to reject.
       * @internal
       */
      itemsToReject?: ItemsToUpdate$1;
      /** Rejection data. */
      rejections?: Rejection$1[];
  }
  /**
   * Cancels a Create Request.
   * Group managers always have access to this functionality. Site members can cancel their own create requests.
   * This endpoint doesn't support server signing.
   * @param createRequestId - ID of the Create Request to cancel.
   * @internal
   * @documentationMaturity preview
   * @requiredField createRequestId
   * @adminMethod
   */
  function cancelCreateRequest(createRequestId: string): Promise<CancelCreateRequestResponse>;
  /**
   * Lists create requests across the site.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function listCreateRequests(options?: ListCreateRequestsOptions): Promise<ListCreateRequestsResponse>;
  interface ListCreateRequestsOptions {
      /**
       * Ownership filter. In case of server signing `ALL` value has to be used.
       * - `ALL` - All Create requests.
       * - `CURRENT_MEMBER` - Create requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter$1;
      /** Number of items to load. Maximum `100`. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  /**
   * Retrieves a list of create requests across the site.
   *
   * Supported fields for filtering:
   * - `status`
   *
   * Supported fields for sorting:
   * - `createdDate`
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryCreateRequests(options?: QueryCreateRequestsOptions): Promise<QueryCreateRequestsResponse>;
  interface QueryCreateRequestsOptions {
      /**
       * Ownership filter. In case of server signing `ALL` value has to be used.
       * - `ALL` - All create requests.
       * - `CURRENT_MEMBER` - Create requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter$1;
      query?: Query$1;
  }
  
  type socialGroupsV3CreateRequest_universal_d_CreateRequest = CreateRequest;
  type socialGroupsV3CreateRequest_universal_d_Group = Group;
  type socialGroupsV3CreateRequest_universal_d_Type = Type;
  const socialGroupsV3CreateRequest_universal_d_Type: typeof Type;
  type socialGroupsV3CreateRequest_universal_d_Events = Events;
  type socialGroupsV3CreateRequest_universal_d_Logo = Logo;
  type socialGroupsV3CreateRequest_universal_d_GroupDetailsPosition = GroupDetailsPosition;
  type socialGroupsV3CreateRequest_universal_d_Image = Image;
  type socialGroupsV3CreateRequest_universal_d_Position = Position;
  type socialGroupsV3CreateRequest_universal_d_AllowPolicy = AllowPolicy;
  const socialGroupsV3CreateRequest_universal_d_AllowPolicy: typeof AllowPolicy;
  type socialGroupsV3CreateRequest_universal_d_OnboardingStepSettings = OnboardingStepSettings;
  type socialGroupsV3CreateRequest_universal_d_StepKey = StepKey;
  const socialGroupsV3CreateRequest_universal_d_StepKey: typeof StepKey;
  type socialGroupsV3CreateRequest_universal_d_PrivacyStatus = PrivacyStatus;
  const socialGroupsV3CreateRequest_universal_d_PrivacyStatus: typeof PrivacyStatus;
  type socialGroupsV3CreateRequest_universal_d_AccessRestriction = AccessRestriction;
  type socialGroupsV3CreateRequest_universal_d_AccessRestrictionDataOneOf = AccessRestrictionDataOneOf;
  type socialGroupsV3CreateRequest_universal_d_GroupDetails = GroupDetails;
  type socialGroupsV3CreateRequest_universal_d_CoverImage = CoverImage;
  type socialGroupsV3CreateRequest_universal_d_GroupSettings = GroupSettings;
  type socialGroupsV3CreateRequest_universal_d_Identity = Identity;
  type socialGroupsV3CreateRequest_universal_d_IdentityType = IdentityType;
  const socialGroupsV3CreateRequest_universal_d_IdentityType: typeof IdentityType;
  type socialGroupsV3CreateRequest_universal_d_SubmitCreateRequestRequest = SubmitCreateRequestRequest;
  type socialGroupsV3CreateRequest_universal_d_SubmitCreateRequestResponse = SubmitCreateRequestResponse;
  type socialGroupsV3CreateRequest_universal_d_ApproveCreateRequestsRequest = ApproveCreateRequestsRequest;
  type socialGroupsV3CreateRequest_universal_d_ApproveCreateRequestsResponse = ApproveCreateRequestsResponse;
  type socialGroupsV3CreateRequest_universal_d_CreateRequestApproved = CreateRequestApproved;
  type socialGroupsV3CreateRequest_universal_d_RejectCreateRequestsRequest = RejectCreateRequestsRequest;
  type socialGroupsV3CreateRequest_universal_d_RejectCreateRequestsResponse = RejectCreateRequestsResponse;
  type socialGroupsV3CreateRequest_universal_d_CreateRequestRejected = CreateRequestRejected;
  type socialGroupsV3CreateRequest_universal_d_CancelCreateRequestRequest = CancelCreateRequestRequest;
  type socialGroupsV3CreateRequest_universal_d_CancelCreateRequestResponse = CancelCreateRequestResponse;
  type socialGroupsV3CreateRequest_universal_d_ListCreateRequestsRequest = ListCreateRequestsRequest;
  type socialGroupsV3CreateRequest_universal_d_ListCreateRequestsResponse = ListCreateRequestsResponse;
  type socialGroupsV3CreateRequest_universal_d_QueryCreateRequestsRequest = QueryCreateRequestsRequest;
  type socialGroupsV3CreateRequest_universal_d_QueryCreateRequestsResponse = QueryCreateRequestsResponse;
  const socialGroupsV3CreateRequest_universal_d_submitCreateRequest: typeof submitCreateRequest;
  type socialGroupsV3CreateRequest_universal_d_SubmitCreateRequestOptions = SubmitCreateRequestOptions;
  const socialGroupsV3CreateRequest_universal_d_approveCreateRequests: typeof approveCreateRequests;
  type socialGroupsV3CreateRequest_universal_d_ApproveCreateRequestsOptions = ApproveCreateRequestsOptions;
  const socialGroupsV3CreateRequest_universal_d_rejectCreateRequests: typeof rejectCreateRequests;
  type socialGroupsV3CreateRequest_universal_d_RejectCreateRequestsOptions = RejectCreateRequestsOptions;
  const socialGroupsV3CreateRequest_universal_d_cancelCreateRequest: typeof cancelCreateRequest;
  const socialGroupsV3CreateRequest_universal_d_listCreateRequests: typeof listCreateRequests;
  type socialGroupsV3CreateRequest_universal_d_ListCreateRequestsOptions = ListCreateRequestsOptions;
  const socialGroupsV3CreateRequest_universal_d_queryCreateRequests: typeof queryCreateRequests;
  type socialGroupsV3CreateRequest_universal_d_QueryCreateRequestsOptions = QueryCreateRequestsOptions;
  namespace socialGroupsV3CreateRequest_universal_d {
    export {
      socialGroupsV3CreateRequest_universal_d_CreateRequest as CreateRequest,
      socialGroupsV3CreateRequest_universal_d_Group as Group,
      socialGroupsV3CreateRequest_universal_d_Type as Type,
      socialGroupsV3CreateRequest_universal_d_Events as Events,
      socialGroupsV3CreateRequest_universal_d_Logo as Logo,
      socialGroupsV3CreateRequest_universal_d_GroupDetailsPosition as GroupDetailsPosition,
      socialGroupsV3CreateRequest_universal_d_Image as Image,
      socialGroupsV3CreateRequest_universal_d_Position as Position,
      socialGroupsV3CreateRequest_universal_d_AllowPolicy as AllowPolicy,
      socialGroupsV3CreateRequest_universal_d_OnboardingStepSettings as OnboardingStepSettings,
      socialGroupsV3CreateRequest_universal_d_StepKey as StepKey,
      socialGroupsV3CreateRequest_universal_d_PrivacyStatus as PrivacyStatus,
      socialGroupsV3CreateRequest_universal_d_AccessRestriction as AccessRestriction,
      socialGroupsV3CreateRequest_universal_d_AccessRestrictionDataOneOf as AccessRestrictionDataOneOf,
      socialGroupsV3CreateRequest_universal_d_GroupDetails as GroupDetails,
      socialGroupsV3CreateRequest_universal_d_CoverImage as CoverImage,
      socialGroupsV3CreateRequest_universal_d_GroupSettings as GroupSettings,
      socialGroupsV3CreateRequest_universal_d_Identity as Identity,
      socialGroupsV3CreateRequest_universal_d_IdentityType as IdentityType,
      RequestStatus$1 as RequestStatus,
      RequestDetails$1 as RequestDetails,
      socialGroupsV3CreateRequest_universal_d_SubmitCreateRequestRequest as SubmitCreateRequestRequest,
      socialGroupsV3CreateRequest_universal_d_SubmitCreateRequestResponse as SubmitCreateRequestResponse,
      socialGroupsV3CreateRequest_universal_d_ApproveCreateRequestsRequest as ApproveCreateRequestsRequest,
      ItemsToUpdate$1 as ItemsToUpdate,
      socialGroupsV3CreateRequest_universal_d_ApproveCreateRequestsResponse as ApproveCreateRequestsResponse,
      socialGroupsV3CreateRequest_universal_d_CreateRequestApproved as CreateRequestApproved,
      socialGroupsV3CreateRequest_universal_d_RejectCreateRequestsRequest as RejectCreateRequestsRequest,
      Rejection$1 as Rejection,
      socialGroupsV3CreateRequest_universal_d_RejectCreateRequestsResponse as RejectCreateRequestsResponse,
      socialGroupsV3CreateRequest_universal_d_CreateRequestRejected as CreateRequestRejected,
      socialGroupsV3CreateRequest_universal_d_CancelCreateRequestRequest as CancelCreateRequestRequest,
      socialGroupsV3CreateRequest_universal_d_CancelCreateRequestResponse as CancelCreateRequestResponse,
      socialGroupsV3CreateRequest_universal_d_ListCreateRequestsRequest as ListCreateRequestsRequest,
      OwnershipFilter$1 as OwnershipFilter,
      socialGroupsV3CreateRequest_universal_d_ListCreateRequestsResponse as ListCreateRequestsResponse,
      PagingMetadata$1 as PagingMetadata,
      socialGroupsV3CreateRequest_universal_d_QueryCreateRequestsRequest as QueryCreateRequestsRequest,
      Query$1 as Query,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      Paging$1 as Paging,
      socialGroupsV3CreateRequest_universal_d_QueryCreateRequestsResponse as QueryCreateRequestsResponse,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      socialGroupsV3CreateRequest_universal_d_submitCreateRequest as submitCreateRequest,
      socialGroupsV3CreateRequest_universal_d_SubmitCreateRequestOptions as SubmitCreateRequestOptions,
      socialGroupsV3CreateRequest_universal_d_approveCreateRequests as approveCreateRequests,
      socialGroupsV3CreateRequest_universal_d_ApproveCreateRequestsOptions as ApproveCreateRequestsOptions,
      socialGroupsV3CreateRequest_universal_d_rejectCreateRequests as rejectCreateRequests,
      socialGroupsV3CreateRequest_universal_d_RejectCreateRequestsOptions as RejectCreateRequestsOptions,
      socialGroupsV3CreateRequest_universal_d_cancelCreateRequest as cancelCreateRequest,
      socialGroupsV3CreateRequest_universal_d_listCreateRequests as listCreateRequests,
      socialGroupsV3CreateRequest_universal_d_ListCreateRequestsOptions as ListCreateRequestsOptions,
      socialGroupsV3CreateRequest_universal_d_queryCreateRequests as queryCreateRequests,
      socialGroupsV3CreateRequest_universal_d_QueryCreateRequestsOptions as QueryCreateRequestsOptions,
    };
  }
  
  /**
   * To join a private group, a site member must submit a Join Request, which can be approved or rejected by an admin.
   * When the request is approved, the site member becomes a group member.
   */
  interface JoinRequest {
      /**
       * Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details.
       * @readonly
       */
      memberId?: string;
      /**
       * Join request status.
       * - `PENDING` - Pending join request.
       * - `APPROVED` - Approved join request.
       * - `REJECTED` - Rejected join request.
       * - `CANCELED` - Canceled join request.
       */
      status?: RequestStatus;
      /** Join request details. */
      requestDetails?: RequestDetails;
      /**
       * Date and time the request was created.
       * @internal
       * @readonly
       */
      _createdDate?: Date;
  }
  enum RequestStatus {
      UNKNOWN_STATUS = "UNKNOWN_STATUS",
      /** Pending request. */
      PENDING = "PENDING",
      /** Approved request. */
      APPROVED = "APPROVED",
      /** Rejected request. */
      REJECTED = "REJECTED",
      /** Cancelled request. */
      CANCELLED = "CANCELLED",
      /** Canceled request. */
      CANCELED = "CANCELED"
  }
  interface RequestDetails {
      /** Reason the request has been rejected. */
      rejectionReason?: string | null;
  }
  interface SubmitJoinRequestRequest {
      /** Relevant group. */
      groupId: string;
      /** Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted. */
      membershipQuestionAnswers?: MembershipQuestionAnswer[];
  }
  /** Answer to a membership question. */
  interface MembershipQuestionAnswer {
      /** Question ID. */
      _id?: string;
      /** Answer text. */
      text?: string | null;
  }
  interface SubmitJoinRequestResponse {
      /** Submitted join request. */
      joinRequest?: JoinRequest;
  }
  interface CancelJoinRequestRequest {
      /** Relevant group. */
      groupId: string;
  }
  interface CancelJoinRequestResponse {
      /** Cancelled join request. */
      joinRequest?: JoinRequest;
  }
  interface JoinRequestCancelled {
      /** Group ID for which join request was cancelled. */
      groupId?: string;
      /** Cancelled join request. */
      joinRequest?: JoinRequest;
  }
  interface ApproveJoinRequestsRequest {
      /** Relevant group. */
      groupId: string;
      /** @internal */
      itemsToApprove?: ItemsToUpdate;
      /** Member IDs to approve. */
      memberIds: string[];
  }
  enum ItemsToUpdate {
      /** Take into account only items which are listed in request. */
      BY_ID = "BY_ID",
      /** Update all items. */
      ALL_ITEMS = "ALL_ITEMS"
  }
  interface ApproveJoinRequestsResponse {
      /** Approved join requests. */
      joinRequests?: JoinRequest[];
  }
  interface JoinRequestApproved {
      /** Group ID for which join request was approved. */
      groupId?: string;
      /** Approved join request. */
      joinRequest?: JoinRequest;
  }
  interface RejectJoinRequestsRequest {
      /** Relevant group. */
      groupId: string;
      /** @internal */
      itemsToReject?: ItemsToUpdate;
      /** Rejection data. */
      rejections?: Rejection[];
  }
  interface Rejection {
      /** Member ID to reject. */
      memberId?: string;
      /** Rejection reason. Free text that will be displayed to the rejected site member (max 1,000 characters). */
      reason?: string | null;
  }
  interface RejectJoinRequestsResponse {
      /** Rejected join requests. */
      joinRequests?: JoinRequest[];
  }
  interface JoinRequestRejected {
      /** Group ID for which join request was rejected. */
      groupId?: string;
      /** Rejected join request. */
      joinRequest?: JoinRequest;
  }
  interface ListJoinRequestsRequest {
      /** Group ID. */
      groupId: string;
      /**
       * Ownership filter. In case of server signing, `ALL` value must be used.
       * - `ALL` - All join group requests.
       * - `CURRENT_MEMBER` - Join group requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter;
      limit?: number | null;
      offset?: number | null;
  }
  enum OwnershipFilter {
      /** All items. */
      ALL = "ALL",
      /** Items for current site member. */
      CURRENT_MEMBER = "CURRENT_MEMBER"
  }
  interface ListJoinRequestsResponse {
      /** Join requests. */
      joinRequests?: JoinRequest[];
      metadata?: PagingMetadata;
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
  interface QueryJoinRequestsRequest {
      /** Group ID. */
      groupId: string;
      /**
       * Ownership filter. In case of server signing `ALL` value must be used.
       * - `ALL` - All join group requests.
       * - `CURRENT_MEMBER` - Join group requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter;
      query?: Query;
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
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
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
  interface QueryJoinRequestsResponse {
      /** Join requests. */
      joinRequests?: JoinRequest[];
      metadata?: PagingMetadata;
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
  /**
   * Submits a join request.
   * Relevant only for private groups.
   * @param groupId - Relevant group.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function submitJoinRequest(groupId: string, options?: SubmitJoinRequestOptions): Promise<SubmitJoinRequestResponse>;
  interface SubmitJoinRequestOptions {
      /** Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted. */
      membershipQuestionAnswers?: MembershipQuestionAnswer[];
  }
  /**
   * Cancels a join request.
   * A site member can cancel only their own pending Join requests.
   * @param groupId - Relevant group.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function cancelJoinRequest(groupId: string): Promise<CancelJoinRequestResponse>;
  /**
   * Approves pending join requests.
   * Group managers always have access to this functionality. In some cases, site owners will allow group members to use this functionality as well.
   * @param groupId - Relevant group.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   * @requiredField options.memberIds
   * @adminMethod
   */
  function approveJoinRequests(groupId: string, options?: ApproveJoinRequestsOptions): Promise<ApproveJoinRequestsResponse>;
  interface ApproveJoinRequestsOptions {
      /** @internal */
      itemsToApprove?: ItemsToUpdate;
      /** Member IDs to approve. */
      memberIds: string[];
  }
  /**
   * Rejects pending join requests.
   * Group managers always have access to this functionality. In some cases, site owners will allow group members to use this functionality as well.
   * @param groupId - Relevant group.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function rejectJoinRequests(groupId: string, options?: RejectJoinRequestsOptions): Promise<RejectJoinRequestsResponse>;
  interface RejectJoinRequestsOptions {
      /** @internal */
      itemsToReject?: ItemsToUpdate;
      /** Rejection data. */
      rejections?: Rejection[];
  }
  /**
   * Retrieves a list of up to 100 join requests, given the provided paging.
   * Group managers always have access to this functionality (site members can access their own join requests in the site).
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function listJoinRequests(groupId: string, options?: ListJoinRequestsOptions): Promise<ListJoinRequestsResponse>;
  interface ListJoinRequestsOptions {
      /**
       * Ownership filter. In case of server signing, `ALL` value must be used.
       * - `ALL` - All join group requests.
       * - `CURRENT_MEMBER` - Join group requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter;
      limit?: number | null;
      offset?: number | null;
  }
  /**
   * Retrieves a list of up to 100 join requests, given the provided paging and filtering.
   * Group managers always have access to this functionality (site members can access their own join requests in the site).
   *
   * Supported fields for filtering:
   * - `status`
   *
   * No supported fields for sorting
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function queryJoinRequests(groupId: string, options?: QueryJoinRequestsOptions): Promise<QueryJoinRequestsResponse>;
  interface QueryJoinRequestsOptions {
      /**
       * Ownership filter. In case of server signing `ALL` value must be used.
       * - `ALL` - All join group requests.
       * - `CURRENT_MEMBER` - Join group requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter;
      query?: Query;
  }
  
  type socialGroupsV3JoinRequest_universal_d_JoinRequest = JoinRequest;
  type socialGroupsV3JoinRequest_universal_d_RequestStatus = RequestStatus;
  const socialGroupsV3JoinRequest_universal_d_RequestStatus: typeof RequestStatus;
  type socialGroupsV3JoinRequest_universal_d_RequestDetails = RequestDetails;
  type socialGroupsV3JoinRequest_universal_d_SubmitJoinRequestRequest = SubmitJoinRequestRequest;
  type socialGroupsV3JoinRequest_universal_d_MembershipQuestionAnswer = MembershipQuestionAnswer;
  type socialGroupsV3JoinRequest_universal_d_SubmitJoinRequestResponse = SubmitJoinRequestResponse;
  type socialGroupsV3JoinRequest_universal_d_CancelJoinRequestRequest = CancelJoinRequestRequest;
  type socialGroupsV3JoinRequest_universal_d_CancelJoinRequestResponse = CancelJoinRequestResponse;
  type socialGroupsV3JoinRequest_universal_d_JoinRequestCancelled = JoinRequestCancelled;
  type socialGroupsV3JoinRequest_universal_d_ApproveJoinRequestsRequest = ApproveJoinRequestsRequest;
  type socialGroupsV3JoinRequest_universal_d_ItemsToUpdate = ItemsToUpdate;
  const socialGroupsV3JoinRequest_universal_d_ItemsToUpdate: typeof ItemsToUpdate;
  type socialGroupsV3JoinRequest_universal_d_ApproveJoinRequestsResponse = ApproveJoinRequestsResponse;
  type socialGroupsV3JoinRequest_universal_d_JoinRequestApproved = JoinRequestApproved;
  type socialGroupsV3JoinRequest_universal_d_RejectJoinRequestsRequest = RejectJoinRequestsRequest;
  type socialGroupsV3JoinRequest_universal_d_Rejection = Rejection;
  type socialGroupsV3JoinRequest_universal_d_RejectJoinRequestsResponse = RejectJoinRequestsResponse;
  type socialGroupsV3JoinRequest_universal_d_JoinRequestRejected = JoinRequestRejected;
  type socialGroupsV3JoinRequest_universal_d_ListJoinRequestsRequest = ListJoinRequestsRequest;
  type socialGroupsV3JoinRequest_universal_d_OwnershipFilter = OwnershipFilter;
  const socialGroupsV3JoinRequest_universal_d_OwnershipFilter: typeof OwnershipFilter;
  type socialGroupsV3JoinRequest_universal_d_ListJoinRequestsResponse = ListJoinRequestsResponse;
  type socialGroupsV3JoinRequest_universal_d_PagingMetadata = PagingMetadata;
  type socialGroupsV3JoinRequest_universal_d_QueryJoinRequestsRequest = QueryJoinRequestsRequest;
  type socialGroupsV3JoinRequest_universal_d_Query = Query;
  type socialGroupsV3JoinRequest_universal_d_Sorting = Sorting;
  type socialGroupsV3JoinRequest_universal_d_SortOrder = SortOrder;
  const socialGroupsV3JoinRequest_universal_d_SortOrder: typeof SortOrder;
  type socialGroupsV3JoinRequest_universal_d_Paging = Paging;
  type socialGroupsV3JoinRequest_universal_d_QueryJoinRequestsResponse = QueryJoinRequestsResponse;
  type socialGroupsV3JoinRequest_universal_d_DomainEvent = DomainEvent;
  type socialGroupsV3JoinRequest_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type socialGroupsV3JoinRequest_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type socialGroupsV3JoinRequest_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type socialGroupsV3JoinRequest_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type socialGroupsV3JoinRequest_universal_d_ActionEvent = ActionEvent;
  const socialGroupsV3JoinRequest_universal_d_submitJoinRequest: typeof submitJoinRequest;
  type socialGroupsV3JoinRequest_universal_d_SubmitJoinRequestOptions = SubmitJoinRequestOptions;
  const socialGroupsV3JoinRequest_universal_d_cancelJoinRequest: typeof cancelJoinRequest;
  const socialGroupsV3JoinRequest_universal_d_approveJoinRequests: typeof approveJoinRequests;
  type socialGroupsV3JoinRequest_universal_d_ApproveJoinRequestsOptions = ApproveJoinRequestsOptions;
  const socialGroupsV3JoinRequest_universal_d_rejectJoinRequests: typeof rejectJoinRequests;
  type socialGroupsV3JoinRequest_universal_d_RejectJoinRequestsOptions = RejectJoinRequestsOptions;
  const socialGroupsV3JoinRequest_universal_d_listJoinRequests: typeof listJoinRequests;
  type socialGroupsV3JoinRequest_universal_d_ListJoinRequestsOptions = ListJoinRequestsOptions;
  const socialGroupsV3JoinRequest_universal_d_queryJoinRequests: typeof queryJoinRequests;
  type socialGroupsV3JoinRequest_universal_d_QueryJoinRequestsOptions = QueryJoinRequestsOptions;
  namespace socialGroupsV3JoinRequest_universal_d {
    export {
      socialGroupsV3JoinRequest_universal_d_JoinRequest as JoinRequest,
      socialGroupsV3JoinRequest_universal_d_RequestStatus as RequestStatus,
      socialGroupsV3JoinRequest_universal_d_RequestDetails as RequestDetails,
      socialGroupsV3JoinRequest_universal_d_SubmitJoinRequestRequest as SubmitJoinRequestRequest,
      socialGroupsV3JoinRequest_universal_d_MembershipQuestionAnswer as MembershipQuestionAnswer,
      socialGroupsV3JoinRequest_universal_d_SubmitJoinRequestResponse as SubmitJoinRequestResponse,
      socialGroupsV3JoinRequest_universal_d_CancelJoinRequestRequest as CancelJoinRequestRequest,
      socialGroupsV3JoinRequest_universal_d_CancelJoinRequestResponse as CancelJoinRequestResponse,
      socialGroupsV3JoinRequest_universal_d_JoinRequestCancelled as JoinRequestCancelled,
      socialGroupsV3JoinRequest_universal_d_ApproveJoinRequestsRequest as ApproveJoinRequestsRequest,
      socialGroupsV3JoinRequest_universal_d_ItemsToUpdate as ItemsToUpdate,
      socialGroupsV3JoinRequest_universal_d_ApproveJoinRequestsResponse as ApproveJoinRequestsResponse,
      socialGroupsV3JoinRequest_universal_d_JoinRequestApproved as JoinRequestApproved,
      socialGroupsV3JoinRequest_universal_d_RejectJoinRequestsRequest as RejectJoinRequestsRequest,
      socialGroupsV3JoinRequest_universal_d_Rejection as Rejection,
      socialGroupsV3JoinRequest_universal_d_RejectJoinRequestsResponse as RejectJoinRequestsResponse,
      socialGroupsV3JoinRequest_universal_d_JoinRequestRejected as JoinRequestRejected,
      socialGroupsV3JoinRequest_universal_d_ListJoinRequestsRequest as ListJoinRequestsRequest,
      socialGroupsV3JoinRequest_universal_d_OwnershipFilter as OwnershipFilter,
      socialGroupsV3JoinRequest_universal_d_ListJoinRequestsResponse as ListJoinRequestsResponse,
      socialGroupsV3JoinRequest_universal_d_PagingMetadata as PagingMetadata,
      socialGroupsV3JoinRequest_universal_d_QueryJoinRequestsRequest as QueryJoinRequestsRequest,
      socialGroupsV3JoinRequest_universal_d_Query as Query,
      socialGroupsV3JoinRequest_universal_d_Sorting as Sorting,
      socialGroupsV3JoinRequest_universal_d_SortOrder as SortOrder,
      socialGroupsV3JoinRequest_universal_d_Paging as Paging,
      socialGroupsV3JoinRequest_universal_d_QueryJoinRequestsResponse as QueryJoinRequestsResponse,
      socialGroupsV3JoinRequest_universal_d_DomainEvent as DomainEvent,
      socialGroupsV3JoinRequest_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      socialGroupsV3JoinRequest_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      socialGroupsV3JoinRequest_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      socialGroupsV3JoinRequest_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      socialGroupsV3JoinRequest_universal_d_ActionEvent as ActionEvent,
      socialGroupsV3JoinRequest_universal_d_submitJoinRequest as submitJoinRequest,
      socialGroupsV3JoinRequest_universal_d_SubmitJoinRequestOptions as SubmitJoinRequestOptions,
      socialGroupsV3JoinRequest_universal_d_cancelJoinRequest as cancelJoinRequest,
      socialGroupsV3JoinRequest_universal_d_approveJoinRequests as approveJoinRequests,
      socialGroupsV3JoinRequest_universal_d_ApproveJoinRequestsOptions as ApproveJoinRequestsOptions,
      socialGroupsV3JoinRequest_universal_d_rejectJoinRequests as rejectJoinRequests,
      socialGroupsV3JoinRequest_universal_d_RejectJoinRequestsOptions as RejectJoinRequestsOptions,
      socialGroupsV3JoinRequest_universal_d_listJoinRequests as listJoinRequests,
      socialGroupsV3JoinRequest_universal_d_ListJoinRequestsOptions as ListJoinRequestsOptions,
      socialGroupsV3JoinRequest_universal_d_queryJoinRequests as queryJoinRequests,
      socialGroupsV3JoinRequest_universal_d_QueryJoinRequestsOptions as QueryJoinRequestsOptions,
    };
  }
  
  export { socialGroupsV3CreateRequest_universal_d as createRequests, socialGroupsV3JoinRequest_universal_d as joinRequests };
}
