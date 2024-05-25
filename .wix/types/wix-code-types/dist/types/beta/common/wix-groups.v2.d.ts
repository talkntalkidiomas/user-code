declare module "wix-groups.v2" {
  interface Group$1 {
      /**
       * Group ID.
       * @readonly
       */
      _id?: string | null;
      /** A unique part of a group's URL, for example `https:/example.com/groups/slug`. */
      slug?: string | null;
      /**
       * @internal
       * @internal */
      privacyLevel?: PrivacyStatus$1;
      /**
       * Group privacy status.
       * - `PUBLIC` - Anyone can see the group and its content. Anyone can join the group.
       * - `PRIVATE` - Anyone can see the group, but only members can see its content. New member must submit a `Join Group Request`.
       * - `SECRET` - Only admins and members can see the group. New members can only be added by other members.
       */
      privacyStatus?: PrivacyStatus$1;
      /** @internal */
      accessRestriction?: AccessRestriction$1;
      /**
       * @internal
       * @internal */
      title?: string | null;
      /** Group name. */
      name?: string | null;
      /** Group description in DraftJS format. */
      description?: string | null;
      /** Group teaser. */
      teaser?: string | null;
      /**
       * @internal
       * @internal */
      details?: GroupDetails$1;
      /** What group members are called, for example `Coworkers`, `Friends`, or `Students`. */
      memberTitle?: string | null;
      /** Cover image. You cannot upload your own cover image. */
      coverImage?: CoverImage$1;
      /** Group specific settings. Available to the site owners under `Admin Tools` in the dashboard. */
      settings?: GroupSettings$1;
      /**
       * Total count of current group members.
       * @readonly
       */
      membersCount?: number | null;
      /**
       * @internal
       * @internal
       * @readonly
       */
      createdBy?: Identity$1;
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
       * @internal
       * @internal
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
  enum Type$1 {
      UNKNOWN = "UNKNOWN",
      ADMIN_APPROVAL = "ADMIN_APPROVAL",
      PAID_PLANS = "PAID_PLANS",
      EVENTS = "EVENTS"
  }
  interface Events$1 {
      eventIds?: string[];
  }
  interface Logo$1 {
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
  interface GroupDetailsPosition$1 {
      /** horizontal coordinate */
      x?: number;
      /** vertical coordinate */
      y?: number;
  }
  interface Image$1 {
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
  interface Position$1 {
      /** horizontal coordinate */
      x?: number;
      /** vertical coordinate */
      y?: number;
  }
  enum AllowPolicy$1 {
      UNKNOWN = "UNKNOWN",
      OWNER_AND_ADMINS = "OWNER_AND_ADMINS",
      OWNER = "OWNER",
      ALL_MEMBERS = "ALL_MEMBERS"
  }
  interface OnboardingStepSettings$1 {
      stepKey?: StepKey$1;
      visible?: boolean;
  }
  enum StepKey$1 {
      UNKNOWN = "UNKNOWN",
      CREATE_POST = "CREATE_POST",
      REACT_TO_POST = "REACT_TO_POST",
      INVITE_MEMBERS = "INVITE_MEMBERS"
  }
  enum PrivacyStatus$1 {
      UNKNOWN = "UNKNOWN",
      /** Anyone can see the group in the group list and view its content. Anyone can join. */
      PUBLIC = "PUBLIC",
      /** Anyone can see the group in the group list, but only group members can see its content. In order to join a group, a group join request must be submitted. */
      PRIVATE = "PRIVATE",
      /** Only group members and admins can see the group in the group list. New group members can only be added by existing group members. */
      SECRET = "SECRET"
  }
  interface AccessRestriction$1 extends AccessRestrictionDataOneOf$1 {
      events?: Events$1;
      type?: Type$1;
  }
  /** @oneof */
  interface AccessRestrictionDataOneOf$1 {
      events?: Events$1;
  }
  interface GroupDetails$1 {
      /** Group logo. You cannot upload your own logo. */
      logo?: Logo$1;
      /** What group members are called, for example `Coworkers`, `Friends`, or `Students`. */
      membersTitle?: string | null;
      /**
       * Position of the corner of the cover image (or logo).
       * @internal
       */
      logoPosition?: GroupDetailsPosition$1;
      /**
       * Position of the corner of the cover image (or logo) for mobile browser.
       * @internal
       */
      mobileLogoPosition?: GroupDetailsPosition$1;
  }
  interface CoverImage$1 {
      /** Cover image. */
      image?: Image$1;
      /** Position of the corner of the cover image (or logo). */
      position?: Position$1;
      /** Position of the corner of the cover image (or logo) for mobile browser. */
      mobilePosition?: Position$1;
  }
  interface GroupSettings$1 {
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
       * @internal
       * @internal */
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
      allowedToInviteMembers?: AllowPolicy$1;
      /**
       * Determines who can approve member join requests to the group
       * @internal
       */
      allowedToApproveJoinRequests?: AllowPolicy$1;
      /**
       * Determines who can add site members to the group
       * @internal
       */
      allowedToAddMembers?: AllowPolicy$1;
      /**
       * Determines who can create posts in the group
       * @internal
       */
      allowedToCreatePosts?: AllowPolicy$1;
      /**
       * Determines who can comment posts in the group
       * @internal
       */
      allowedToCommentPosts?: AllowPolicy$1;
      onboardingStepsSettings?: OnboardingStepSettings$1[];
  }
  interface Identity$1 {
      /** Member ID of the group creator.  See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details. */
      _id?: string | null;
      identityType?: IdentityType$1;
  }
  enum IdentityType$1 {
      USER = "USER",
      MEMBER = "MEMBER"
  }
  interface CreateGroupRequest {
      /** Group to create. */
      group: Group$1;
      /** ID of the member who created the group. This member will automatically become an admin.  */
      creatorId?: string | null;
      /**
       * Group ID.
       * @internal
       */
      groupId?: string | null;
      /** Content Type */
      contentType?: ContentType;
  }
  enum ContentType {
      PLAIN_TEXT = "PLAIN_TEXT",
      DRAFTJS = "DRAFTJS",
      RICH_CONTENT = "RICH_CONTENT"
  }
  interface CreateGroupResponse {
      /** Created group. */
      group?: Group$1;
  }
  interface UpdateGroupRequest {
      /** Group to update. */
      group: Group$1;
      /** Content Type */
      contentType?: ContentType;
  }
  interface UpdateGroupResponse {
      /** Updated group. */
      group?: Group$1;
  }
  interface GroupCoverChanged {
      oldUrl?: string | null;
      newUrl?: string | null;
  }
  interface GroupDescriptionChanged {
      oldDescription?: string | null;
      newDescription?: string | null;
  }
  interface DeleteGroupRequest {
      /** ID of the group to delete. */
      groupId: string;
  }
  interface DeleteGroupResponse {
      /** Deleted group. */
      group?: Group$1;
  }
  interface GetGroupRequest {
      /** ID of the group to retrieve. */
      groupId: string;
      /**
       * ID of the auto invite to get hidden groups
       * @internal
       */
      autoInviteId?: string | null;
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  interface GetGroupResponse {
      /** Retrieved group. */
      group?: Group$1;
  }
  interface GetGroupBySlugRequest {
      /** Unique part of the group's URL, for example `group-1` in `https:/example.com/groups/group-1`. Pass only the slug. Case-sensitive. */
      slug: string;
      autoInviteId?: string | null;
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  interface GetGroupBySlugResponse {
      /** Retrieved group. */
      group?: Group$1;
  }
  interface ListGroupsRequest {
      /** Number of items to load. Maximum `100`. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  interface ListGroupsResponse {
      /** Retrieved Groups. */
      groups?: Group$1[];
      metadata?: PagingMetadata$4;
  }
  interface PagingMetadata$4 {
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
  interface ListGroupsByUserIdRequest {
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  interface ListGroupsByUserIdResponse {
      groups?: GroupWithMsId[];
  }
  /** Retrieved Groups by metasite id */
  interface GroupWithMsId {
      metaSiteId?: string;
      groups?: Group$1[];
  }
  interface QueryGroupsRequest {
      query?: Query$3;
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  interface Query$3 {
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
      sort?: Sorting$3[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$4;
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
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
  interface Paging$4 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryGroupsResponse {
      /** Retrieved groups. */
      groups?: Group$1[];
      metadata?: PagingMetadata$4;
  }
  interface QueryJoinedGroupsRequest {
      query?: Query$3;
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  interface QueryJoinedGroupsResponse {
      /** Retrieved groups. */
      groups?: Group$1[];
      metadata?: PagingMetadata$4;
  }
  interface QueryGroupsByMembershipRequest {
      query?: Query$3;
      membershipStatus?: MembershipStatus$1;
      /** Filter groups by permissions. */
      permissionsFilter?: GroupPermissions;
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  enum MembershipStatus$1 {
      NONE = "NONE",
      JOINED = "JOINED",
      PENDING = "PENDING"
  }
  interface GroupPermissions {
      canCreatePosts?: boolean | null;
  }
  interface QueryGroupsByMembershipResponse {
      /** Retrieved groups. */
      groups?: Group$1[];
      metadata?: PagingMetadata$4;
  }
  interface ListGroupIntegrationsDataRequest {
      groupIds?: string[];
  }
  interface ListGroupIntegrationsDataResponse {
      groupsIntegrationsData?: GroupIntegrationsData[];
  }
  interface GroupIntegrationsData {
      groupId?: string;
      feedItemsCount?: number;
      topicIds?: string[];
      eventIds?: string[];
      connectedPricingPlanIds?: string[];
      onlineProgramIds?: string[];
  }
  interface GetGroupMembersGroupIdsRequest {
      /** ID of the group to retrieve members group ids. */
      groupId?: string;
  }
  interface GetGroupMembersGroupIdsResponse {
      /** All members group id */
      allMembersGroupId?: string;
      /** Admins members group id */
      adminMembersGroupId?: string;
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
   * Creates a group.
   *
   *
   * The `createGroup()` function returns a Promise that resolves to a newly-created group after it has successfully been created. The new group is added to the Groups List page of your site.
   *
   * Site admins can choose to allow site members to create a group. They can also require that site members request their approval when creating a group. This setting can be found in your site's Dashboard under **Groups Application > General Settings > Group Creation**. If set to admin approval required, a site member uses this function to create a group, and the group becomes a `createRequest` with a status of `PENDING` until the group is reviewed. The default is set to site members with admin approval.
   * @param group - Group to create.
   * @public
   * @requiredField group
   * @param options - Optional fields for group creation.
   * @adminMethod
   * @returns Created group.
   */
  function createGroup(group: Group$1, options?: CreateGroupOptions): Promise<Group$1>;
  interface CreateGroupOptions {
      /** ID of the member who created the group. This member will automatically become an admin.  */
      creatorId?: string | null;
      /**
       * Group ID.
       * @internal
       */
      groupId?: string | null;
      /** Content Type */
      contentType?: ContentType;
  }
  /**
   * Updates a group.
   *
   *
   * The `updateGroup()` function returns a Promise that resolves to the updated group. Only site admins and group admins can update their group. Only the fields in the groupInfo object parameter can be updated. Specify which fields to update. Unspecified fields remain the same.
   *
   * > **Notes:**
   *
   * - When a group's `privacyStatus` is updated from `PRIVATE` to `PUBLIC`, all pending join requests for that group are automatically approved.
   * - When a group's `privacyStatus` is updated from `PRIVATE` to `SECRET`, all pending join requests for that group are automatically rejected.
   * - When a public or private group's name is updated, the slug is updated to reflect the new group name.
   * @param _id - Group ID.
   * @public
   * @requiredField _id
   * @requiredField group
   * @adminMethod
   * @returns Updated group.
   */
  function updateGroup(_id: string | null, group: UpdateGroup, options?: UpdateGroupOptions): Promise<Group$1>;
  interface UpdateGroup {
      /**
       * Group ID.
       * @readonly
       */
      _id?: string | null;
      /** A unique part of a group's URL, for example `https:/example.com/groups/slug`. */
      slug?: string | null;
      /** @internal */
      privacyLevel?: PrivacyStatus$1;
      /**
       * Group privacy status.
       * - `PUBLIC` - Anyone can see the group and its content. Anyone can join the group.
       * - `PRIVATE` - Anyone can see the group, but only members can see its content. New member must submit a `Join Group Request`.
       * - `SECRET` - Only admins and members can see the group. New members can only be added by other members.
       */
      privacyStatus?: PrivacyStatus$1;
      /** @internal */
      accessRestriction?: AccessRestriction$1;
      /** @internal */
      title?: string | null;
      /** Group name. */
      name?: string | null;
      /** Group description in DraftJS format. */
      description?: string | null;
      /** Group teaser. */
      teaser?: string | null;
      /** @internal */
      details?: GroupDetails$1;
      /** What group members are called, for example `Coworkers`, `Friends`, or `Students`. */
      memberTitle?: string | null;
      /** Cover image. You cannot upload your own cover image. */
      coverImage?: CoverImage$1;
      /** Group specific settings. Available to the site owners under `Admin Tools` in the dashboard. */
      settings?: GroupSettings$1;
      /**
       * Total count of current group members.
       * @readonly
       */
      membersCount?: number | null;
      /**
       * @internal
       * @readonly
       */
      createdBy?: Identity$1;
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
       * @internal
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
  interface UpdateGroupOptions {
      /** Content Type */
      contentType?: ContentType;
  }
  /**
   * Deletes a group.
   *
   *
   * The `deleteGroup()` function returns a Promise resolves to the deleted group after it has successfully been deleted. Only site admins and group admins can delete their group. After the group is deleted, it is removed from both your site and the site's Dashboard.
   *
   * @param groupId - ID of the group to delete.
   * @public
   * @requiredField groupId
   * @adminMethod
   */
  function deleteGroup(groupId: string): Promise<DeleteGroupResponse>;
  /**
   * Gets a group by ID.
   *
   *
   * The `getGroup()` function returns a Promise that resolves to a group whose ID matches the given ID.
   *
   * > **Note:** For `SECRET` groups, only site admins, group admins, and group members can see a group and its content.
   * @param groupId - ID of the group to retrieve.
   * @public
   * @requiredField groupId
   * @adminMethod
   * @returns Retrieved group.
   */
  function getGroup(groupId: string, options?: GetGroupOptions): Promise<Group$1>;
  interface GetGroupOptions {
      /**
       * ID of the auto invite to get hidden groups
       * @internal
       */
      autoInviteId?: string | null;
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  /**
   * Gets a group by slug.
   *
   *
   * The `getGroupBySlug()` function returns a Promise that resolves to a group whose slug matches the given slug. The slug is the end of a group's URL that refers to a specific group. For example, if a group's URL is `https:/example.com/groups/{my-fitness-group}`, the slug is `my-fitness-group`. The slug is case-sensitive. It is generally based on the group name, but for secret groups it is an autogenerated string of characters, for example, `https:/example.com/groups/{5D3yTX}`.
   *
   * > **Note:** For `SECRET` groups, only site admins, group admins, and group members can see a group and its content.
   * @param slug - Unique part of the group's URL, for example `group-1` in `https:/example.com/groups/group-1`. Pass only the slug. Case-sensitive.
   * @public
   * @requiredField slug
   * @adminMethod
   */
  function getGroupBySlug(slug: string, options?: GetGroupBySlugOptions): Promise<GetGroupBySlugResponse>;
  interface GetGroupBySlugOptions {
      autoInviteId?: string | null;
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  /**
   * Lists groups.
   *
   *
   * The `listGroups()` function returns a Promise that resolves to a list of up to 1,000 groups on your site. Sorts by default to `_createdDate` in descending order.
   *
   * > **Notes:**
   *
   * - For `SECRET` groups, only site admins, group admins, and group members can see a list of group and their content.
   * - This function's parameters are positional, and must be specified in the sequence shown in the syntax below. When specifying a parameter, use `null` as a placeholder for any unspecified parameters. For example, to specify limit only, call `listGroups(paging, null)`.
   * @public
   * @param options - Limit and offset options.
   * @adminMethod
   */
  function listGroups(options?: ListGroupsOptions): Promise<ListGroupsResponse>;
  interface ListGroupsOptions {
      /** Number of items to load. Maximum `100`. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  /**
   * Retrieves a list of all groups user is member of from all sites. Expects Wix User authorization.
   * Used in My Activity widget inside of Spaces App
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listGroupsByUserId(options?: ListGroupsByUserIdOptions): Promise<ListGroupsByUserIdResponse>;
  interface ListGroupsByUserIdOptions {
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  /**
   * Creates a query to retrieve a list of groups.
   *
   *
   * Note: For `SECRET` groups, only site admins, group admins, and group members can query groups and their content.
   *
   * The `queryGroups()` function builds a query to retrieve a list of all groups, and returns a GroupsQueryBuilder object.
   * @public
   * @adminMethod
   */
  function queryGroups(options?: QueryGroupsOptions): GroupsQueryBuilder;
  interface QueryGroupsOptions {
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType | undefined;
  }
  interface QueryOffsetResult$3 {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface GroupsQueryResult extends QueryOffsetResult$3 {
      items: Group$1[];
      query: GroupsQueryBuilder;
      next: () => Promise<GroupsQueryResult>;
      prev: () => Promise<GroupsQueryResult>;
  }
  interface GroupsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: 'title', value: any) => GroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: 'title', value: any) => GroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       */
      startsWith: (propertyName: 'title', value: string) => GroupsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       */
      hasSome: (propertyName: 'title', value: any[]) => GroupsQueryBuilder;
      in: (propertyName: 'title', value: any) => GroupsQueryBuilder;
      exists: (propertyName: 'title', value: boolean) => GroupsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'title' | 'membersCount' | '_createdDate' | 'recentActivityDate'>) => GroupsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'title' | 'membersCount' | '_createdDate' | 'recentActivityDate'>) => GroupsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => GroupsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results. */
      skip: (skip: number) => GroupsQueryBuilder;
      find: () => Promise<GroupsQueryResult>;
  }
  /**
   * @internal
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryJoinedGroups(options?: QueryJoinedGroupsOptions): Promise<QueryJoinedGroupsResponse>;
  interface QueryJoinedGroupsOptions {
      query?: Query$3;
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  /**
   * Retrieves groups by membership status for the current member.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryGroupsByMembership(options?: QueryGroupsByMembershipOptions): Promise<QueryGroupsByMembershipResponse>;
  interface QueryGroupsByMembershipOptions {
      query?: Query$3;
      membershipStatus?: MembershipStatus$1;
      /** Filter groups by permissions. */
      permissionsFilter?: GroupPermissions;
      /** Content type (PLAIN_TEXT returns content as it is) */
      contentType?: ContentType;
  }
  /**
   * Returns general data about integrations (e.g. counts of events or topics) for specified group ids
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listGroupIntegrationsData(options?: ListGroupIntegrationsDataOptions): Promise<ListGroupIntegrationsDataResponse>;
  interface ListGroupIntegrationsDataOptions {
      groupIds?: string[];
  }
  
  type socialGroupsV2Group_universal_d_CreateGroupRequest = CreateGroupRequest;
  type socialGroupsV2Group_universal_d_ContentType = ContentType;
  const socialGroupsV2Group_universal_d_ContentType: typeof ContentType;
  type socialGroupsV2Group_universal_d_CreateGroupResponse = CreateGroupResponse;
  type socialGroupsV2Group_universal_d_UpdateGroupRequest = UpdateGroupRequest;
  type socialGroupsV2Group_universal_d_UpdateGroupResponse = UpdateGroupResponse;
  type socialGroupsV2Group_universal_d_GroupCoverChanged = GroupCoverChanged;
  type socialGroupsV2Group_universal_d_GroupDescriptionChanged = GroupDescriptionChanged;
  type socialGroupsV2Group_universal_d_DeleteGroupRequest = DeleteGroupRequest;
  type socialGroupsV2Group_universal_d_DeleteGroupResponse = DeleteGroupResponse;
  type socialGroupsV2Group_universal_d_GetGroupRequest = GetGroupRequest;
  type socialGroupsV2Group_universal_d_GetGroupResponse = GetGroupResponse;
  type socialGroupsV2Group_universal_d_GetGroupBySlugRequest = GetGroupBySlugRequest;
  type socialGroupsV2Group_universal_d_GetGroupBySlugResponse = GetGroupBySlugResponse;
  type socialGroupsV2Group_universal_d_ListGroupsRequest = ListGroupsRequest;
  type socialGroupsV2Group_universal_d_ListGroupsResponse = ListGroupsResponse;
  type socialGroupsV2Group_universal_d_ListGroupsByUserIdRequest = ListGroupsByUserIdRequest;
  type socialGroupsV2Group_universal_d_ListGroupsByUserIdResponse = ListGroupsByUserIdResponse;
  type socialGroupsV2Group_universal_d_GroupWithMsId = GroupWithMsId;
  type socialGroupsV2Group_universal_d_QueryGroupsRequest = QueryGroupsRequest;
  type socialGroupsV2Group_universal_d_QueryGroupsResponse = QueryGroupsResponse;
  type socialGroupsV2Group_universal_d_QueryJoinedGroupsRequest = QueryJoinedGroupsRequest;
  type socialGroupsV2Group_universal_d_QueryJoinedGroupsResponse = QueryJoinedGroupsResponse;
  type socialGroupsV2Group_universal_d_QueryGroupsByMembershipRequest = QueryGroupsByMembershipRequest;
  type socialGroupsV2Group_universal_d_GroupPermissions = GroupPermissions;
  type socialGroupsV2Group_universal_d_QueryGroupsByMembershipResponse = QueryGroupsByMembershipResponse;
  type socialGroupsV2Group_universal_d_ListGroupIntegrationsDataRequest = ListGroupIntegrationsDataRequest;
  type socialGroupsV2Group_universal_d_ListGroupIntegrationsDataResponse = ListGroupIntegrationsDataResponse;
  type socialGroupsV2Group_universal_d_GroupIntegrationsData = GroupIntegrationsData;
  type socialGroupsV2Group_universal_d_GetGroupMembersGroupIdsRequest = GetGroupMembersGroupIdsRequest;
  type socialGroupsV2Group_universal_d_GetGroupMembersGroupIdsResponse = GetGroupMembersGroupIdsResponse;
  const socialGroupsV2Group_universal_d_createGroup: typeof createGroup;
  type socialGroupsV2Group_universal_d_CreateGroupOptions = CreateGroupOptions;
  const socialGroupsV2Group_universal_d_updateGroup: typeof updateGroup;
  type socialGroupsV2Group_universal_d_UpdateGroup = UpdateGroup;
  type socialGroupsV2Group_universal_d_UpdateGroupOptions = UpdateGroupOptions;
  const socialGroupsV2Group_universal_d_deleteGroup: typeof deleteGroup;
  const socialGroupsV2Group_universal_d_getGroup: typeof getGroup;
  type socialGroupsV2Group_universal_d_GetGroupOptions = GetGroupOptions;
  const socialGroupsV2Group_universal_d_getGroupBySlug: typeof getGroupBySlug;
  type socialGroupsV2Group_universal_d_GetGroupBySlugOptions = GetGroupBySlugOptions;
  const socialGroupsV2Group_universal_d_listGroups: typeof listGroups;
  type socialGroupsV2Group_universal_d_ListGroupsOptions = ListGroupsOptions;
  const socialGroupsV2Group_universal_d_listGroupsByUserId: typeof listGroupsByUserId;
  type socialGroupsV2Group_universal_d_ListGroupsByUserIdOptions = ListGroupsByUserIdOptions;
  const socialGroupsV2Group_universal_d_queryGroups: typeof queryGroups;
  type socialGroupsV2Group_universal_d_QueryGroupsOptions = QueryGroupsOptions;
  type socialGroupsV2Group_universal_d_GroupsQueryResult = GroupsQueryResult;
  type socialGroupsV2Group_universal_d_GroupsQueryBuilder = GroupsQueryBuilder;
  const socialGroupsV2Group_universal_d_queryJoinedGroups: typeof queryJoinedGroups;
  type socialGroupsV2Group_universal_d_QueryJoinedGroupsOptions = QueryJoinedGroupsOptions;
  const socialGroupsV2Group_universal_d_queryGroupsByMembership: typeof queryGroupsByMembership;
  type socialGroupsV2Group_universal_d_QueryGroupsByMembershipOptions = QueryGroupsByMembershipOptions;
  const socialGroupsV2Group_universal_d_listGroupIntegrationsData: typeof listGroupIntegrationsData;
  type socialGroupsV2Group_universal_d_ListGroupIntegrationsDataOptions = ListGroupIntegrationsDataOptions;
  namespace socialGroupsV2Group_universal_d {
    export {
      Group$1 as Group,
      Type$1 as Type,
      Events$1 as Events,
      Logo$1 as Logo,
      GroupDetailsPosition$1 as GroupDetailsPosition,
      Image$1 as Image,
      Position$1 as Position,
      AllowPolicy$1 as AllowPolicy,
      OnboardingStepSettings$1 as OnboardingStepSettings,
      StepKey$1 as StepKey,
      PrivacyStatus$1 as PrivacyStatus,
      AccessRestriction$1 as AccessRestriction,
      AccessRestrictionDataOneOf$1 as AccessRestrictionDataOneOf,
      GroupDetails$1 as GroupDetails,
      CoverImage$1 as CoverImage,
      GroupSettings$1 as GroupSettings,
      Identity$1 as Identity,
      IdentityType$1 as IdentityType,
      socialGroupsV2Group_universal_d_CreateGroupRequest as CreateGroupRequest,
      socialGroupsV2Group_universal_d_ContentType as ContentType,
      socialGroupsV2Group_universal_d_CreateGroupResponse as CreateGroupResponse,
      socialGroupsV2Group_universal_d_UpdateGroupRequest as UpdateGroupRequest,
      socialGroupsV2Group_universal_d_UpdateGroupResponse as UpdateGroupResponse,
      socialGroupsV2Group_universal_d_GroupCoverChanged as GroupCoverChanged,
      socialGroupsV2Group_universal_d_GroupDescriptionChanged as GroupDescriptionChanged,
      socialGroupsV2Group_universal_d_DeleteGroupRequest as DeleteGroupRequest,
      socialGroupsV2Group_universal_d_DeleteGroupResponse as DeleteGroupResponse,
      socialGroupsV2Group_universal_d_GetGroupRequest as GetGroupRequest,
      socialGroupsV2Group_universal_d_GetGroupResponse as GetGroupResponse,
      socialGroupsV2Group_universal_d_GetGroupBySlugRequest as GetGroupBySlugRequest,
      socialGroupsV2Group_universal_d_GetGroupBySlugResponse as GetGroupBySlugResponse,
      socialGroupsV2Group_universal_d_ListGroupsRequest as ListGroupsRequest,
      socialGroupsV2Group_universal_d_ListGroupsResponse as ListGroupsResponse,
      PagingMetadata$4 as PagingMetadata,
      socialGroupsV2Group_universal_d_ListGroupsByUserIdRequest as ListGroupsByUserIdRequest,
      socialGroupsV2Group_universal_d_ListGroupsByUserIdResponse as ListGroupsByUserIdResponse,
      socialGroupsV2Group_universal_d_GroupWithMsId as GroupWithMsId,
      socialGroupsV2Group_universal_d_QueryGroupsRequest as QueryGroupsRequest,
      Query$3 as Query,
      Sorting$3 as Sorting,
      SortOrder$3 as SortOrder,
      Paging$4 as Paging,
      socialGroupsV2Group_universal_d_QueryGroupsResponse as QueryGroupsResponse,
      socialGroupsV2Group_universal_d_QueryJoinedGroupsRequest as QueryJoinedGroupsRequest,
      socialGroupsV2Group_universal_d_QueryJoinedGroupsResponse as QueryJoinedGroupsResponse,
      socialGroupsV2Group_universal_d_QueryGroupsByMembershipRequest as QueryGroupsByMembershipRequest,
      MembershipStatus$1 as MembershipStatus,
      socialGroupsV2Group_universal_d_GroupPermissions as GroupPermissions,
      socialGroupsV2Group_universal_d_QueryGroupsByMembershipResponse as QueryGroupsByMembershipResponse,
      socialGroupsV2Group_universal_d_ListGroupIntegrationsDataRequest as ListGroupIntegrationsDataRequest,
      socialGroupsV2Group_universal_d_ListGroupIntegrationsDataResponse as ListGroupIntegrationsDataResponse,
      socialGroupsV2Group_universal_d_GroupIntegrationsData as GroupIntegrationsData,
      socialGroupsV2Group_universal_d_GetGroupMembersGroupIdsRequest as GetGroupMembersGroupIdsRequest,
      socialGroupsV2Group_universal_d_GetGroupMembersGroupIdsResponse as GetGroupMembersGroupIdsResponse,
      DomainEvent$5 as DomainEvent,
      DomainEventBodyOneOf$5 as DomainEventBodyOneOf,
      EntityCreatedEvent$5 as EntityCreatedEvent,
      EntityUpdatedEvent$5 as EntityUpdatedEvent,
      EntityDeletedEvent$5 as EntityDeletedEvent,
      ActionEvent$5 as ActionEvent,
      MessageEnvelope$5 as MessageEnvelope,
      IdentificationData$5 as IdentificationData,
      IdentificationDataIdOneOf$5 as IdentificationDataIdOneOf,
      WebhookIdentityType$5 as WebhookIdentityType,
      socialGroupsV2Group_universal_d_createGroup as createGroup,
      socialGroupsV2Group_universal_d_CreateGroupOptions as CreateGroupOptions,
      socialGroupsV2Group_universal_d_updateGroup as updateGroup,
      socialGroupsV2Group_universal_d_UpdateGroup as UpdateGroup,
      socialGroupsV2Group_universal_d_UpdateGroupOptions as UpdateGroupOptions,
      socialGroupsV2Group_universal_d_deleteGroup as deleteGroup,
      socialGroupsV2Group_universal_d_getGroup as getGroup,
      socialGroupsV2Group_universal_d_GetGroupOptions as GetGroupOptions,
      socialGroupsV2Group_universal_d_getGroupBySlug as getGroupBySlug,
      socialGroupsV2Group_universal_d_GetGroupBySlugOptions as GetGroupBySlugOptions,
      socialGroupsV2Group_universal_d_listGroups as listGroups,
      socialGroupsV2Group_universal_d_ListGroupsOptions as ListGroupsOptions,
      socialGroupsV2Group_universal_d_listGroupsByUserId as listGroupsByUserId,
      socialGroupsV2Group_universal_d_ListGroupsByUserIdOptions as ListGroupsByUserIdOptions,
      socialGroupsV2Group_universal_d_queryGroups as queryGroups,
      socialGroupsV2Group_universal_d_QueryGroupsOptions as QueryGroupsOptions,
      socialGroupsV2Group_universal_d_GroupsQueryResult as GroupsQueryResult,
      socialGroupsV2Group_universal_d_GroupsQueryBuilder as GroupsQueryBuilder,
      socialGroupsV2Group_universal_d_queryJoinedGroups as queryJoinedGroups,
      socialGroupsV2Group_universal_d_QueryJoinedGroupsOptions as QueryJoinedGroupsOptions,
      socialGroupsV2Group_universal_d_queryGroupsByMembership as queryGroupsByMembership,
      socialGroupsV2Group_universal_d_QueryGroupsByMembershipOptions as QueryGroupsByMembershipOptions,
      socialGroupsV2Group_universal_d_listGroupIntegrationsData as listGroupIntegrationsData,
      socialGroupsV2Group_universal_d_ListGroupIntegrationsDataOptions as ListGroupIntegrationsDataOptions,
    };
  }
  
  interface GroupMember$1 {
      /**
       * @internal
       * @internal
       * @readonly
       */
      siteMemberId?: string;
      /**
       * Site member ID.
       * @readonly
       */
      memberId?: string;
      /** Group Member Role. */
      role?: GroupRole$1;
      /**
       * Date and time the group Member joined the group.
       * @readonly
       */
      joinedDate?: Date;
      /**
       * @internal
       * @readonly
       */
      contactId?: string | null;
  }
  /**
   * A group member may have multiple roles in a single group.
   * Currently, only `MEMBER` and `ADMIN` roles are supported, but more roles may be available in the future.
   */
  interface GroupRole$1 {
      /**
       * Group member role. One of:
       * - `"MEMBER"` - Regular group member.
       * - `"ADMIN"` - Group administrator.
       */
      value?: Role$1;
  }
  enum Role$1 {
      UNKNOWN_ROLE = "UNKNOWN_ROLE",
      /** Regular group member. */
      MEMBER = "MEMBER",
      /** Group administrator. */
      ADMIN = "ADMIN"
  }
  interface SocialGroupsEvent$1 extends SocialGroupsEventPayloadOneOf$1 {
      memberJoined?: MemberJoinedGroup$1;
      membersAdded?: MembersAddedToGroup$1;
      joinRequestsApproved?: JoinRequestsApproved$1;
      membersInvited?: MembersInvitedToGroup$1;
  }
  /** @oneof */
  interface SocialGroupsEventPayloadOneOf$1 {
      memberJoined?: MemberJoinedGroup$1;
      membersAdded?: MembersAddedToGroup$1;
      joinRequestsApproved?: JoinRequestsApproved$1;
      membersInvited?: MembersInvitedToGroup$1;
  }
  interface MemberJoinedGroup$1 {
      groupId?: string;
      groupsInstanceId?: string;
      siteMemberId?: string;
  }
  interface MembersAddedToGroup$1 {
      groupId?: string;
      groupsInstanceId?: string;
      whoAddedId?: string | null;
      siteMemberIds?: string[];
      /** Used for Apes sticky experiment */
      operationId?: string;
  }
  interface JoinRequestsApproved$1 {
      groupId?: string;
      groupsInstanceId?: string;
      siteMemberIds?: string[];
      /** Used for Apes sticky experiment */
      operationId?: string;
  }
  interface MembersInvitedToGroup$1 {
      groupId?: string;
      groupsInstanceId?: string;
      siteMemberIds?: string[];
  }
  /** ID of the group to join. */
  interface JoinRequest {
      groupId: string;
      /** Answers to membership questions. A Join Request will fail, if the answer to a required question is omitted. */
      membershipQuestionAnswers?: MembershipQuestionAnswer$2[];
      autoInviteId?: string | null;
  }
  /** Answer to a membership question. */
  interface MembershipQuestionAnswer$2 {
      /** Question ID. */
      _id?: string;
      /** Answer text. */
      text?: string | null;
  }
  interface JoinResponse {
      /** New member. */
      member?: GroupMember$1;
  }
  interface MemberJoined {
      /** Group ID that member has joined. */
      groupId?: string;
      /** Joined group member. */
      groupMember?: GroupMember$1;
      /**
       * Type of join - can be either invite or clicking join button in the group
       * @internal
       */
      joinBy?: JoinBy;
      /**
       * ID of the invite that was used to join the group. It can be empty if the member joined manually.
       * @internal
       */
      inviteId?: string | null;
  }
  enum JoinBy {
      MANUALLY = "MANUALLY",
      PERSONAL_INVITE_LINK = "PERSONAL_INVITE_LINK",
      PUBLIC_INVITE_LINK = "PUBLIC_INVITE_LINK"
  }
  interface LeaveRequest {
      /** ID of the Group to leave. */
      groupId: string;
  }
  interface LeaveResponse {
  }
  interface MemberLeft {
      /** Group ID that member has left. */
      groupId?: string;
      /** Group member that left. */
      groupMember?: GroupMember$1;
  }
  interface AddGroupMembersRequest {
      /** Group ID. */
      groupId: string;
      /**
       * @internal
       * @internal */
      siteMemberIds?: string[];
      /**
       * IDs of the site members to add to the group.
       *
       *
       */
      memberIds?: string[];
      /**
       * Whether to send invitations to private site members. Defaults to `true`.
       * @internal
       */
      invitePrivateMembers?: boolean | null;
  }
  interface AddGroupMembersResponse {
      /** New members. */
      members?: GroupMember$1[];
  }
  interface MemberAdded {
      /** Group ID that member was added to. */
      groupId?: string;
      /** Added group member. */
      groupMember?: GroupMember$1;
  }
  interface RemoveGroupMembersRequest {
      /** Group ID. */
      groupId: string;
      /**
       * @internal
       * @internal */
      siteMemberIds?: string[];
      /**  IDs of the site members to remove from the group. */
      memberIds?: string[];
  }
  interface RemoveGroupMembersResponse {
  }
  interface MemberRemoved {
      /** Group ID that member was removed from. */
      groupId?: string;
      /** Removed group member. */
      groupMember?: GroupMember$1;
  }
  interface ListGroupMembersRequest {
      /** Group ID. */
      groupId: string;
      /** Number of items to load. Maximum `100.` */
      limit?: number | null;
      /** Number of group members to skip in the list. */
      offset?: number | null;
      /**
       * Return members who left groups (internal, used for history in analytics)
       * @internal
       */
      includeDeleted?: boolean;
  }
  interface ListGroupMembersResponse {
      /** Retrieved members. */
      members?: GroupMember$1[];
      /** Paging information. */
      metadata?: PagingMetadata$3;
  }
  interface PagingMetadata$3 {
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
  interface QueryGroupMembersRequest {
      /** Group ID. */
      groupId: string;
      query?: Query$2;
  }
  interface Query$2 {
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
      sort?: Sorting$2[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$3;
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
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
  interface Paging$3 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryGroupMembersResponse {
      /** Group members. */
      members?: GroupMember$1[];
      /** Paging information. */
      metadata?: PagingMetadata$3;
  }
  interface QueryNonGroupMembersRequest {
      /** Group ID. */
      groupId: string;
      query?: Query$2;
  }
  interface QueryNonGroupMembersResponse {
      /** Retrieved members. */
      members?: GroupMember$1[];
  }
  interface ListMembershipsRequest {
      /**
       * @internal
       * @internal
       * @internal
       */
      siteMemberId?: string | null;
      /** Site member ID. */
      memberId: string | null;
      /** Number of items to load. */
      limit?: number | null;
      /** Number of memberships to skip in the list. */
      offset?: number | null;
  }
  interface ListMembershipsResponse {
      /** Site member's memberships. */
      memberships?: Membership[];
      /** Paging information. */
      metadata?: PagingMetadata$3;
  }
  interface Membership {
      /**
       * Group ID.
       * @readonly
       */
      groupId?: string;
      /**
       * Membership status with Group
       * - `"JOINED"` - Site member is a group member.
       * - `"PENDING"` - Site member has submitted a Join Request for this group that is still `"PENDING"`.
       */
      status?: MembershipStatus;
      /** Group member role. When membership status is not `JOINED`, this is empty. */
      role?: GroupRole$1;
  }
  enum MembershipStatus {
      UNKNOWN_STATUS = "UNKNOWN_STATUS",
      /** Site member is a group member. */
      JOINED = "JOINED",
      /** Site member has join group request with `PENDING` status for this group. */
      PENDING = "PENDING"
  }
  interface QueryMembershipsRequest {
      /**
       * @internal
       * @internal */
      siteMemberId?: string | null;
      /** Site member ID. */
      memberId: string | null;
      query?: Query$2;
  }
  interface QueryMembershipsResponse {
      /** Site member's memberships. */
      memberships?: Membership[];
      /** Paging information. */
      metadata?: PagingMetadata$3;
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
   * Join a specific group.
   * Site owners can use it for groups with any privacy level and automatically receives `ADMIN` group role. A site member can use it only for public groups.
   * This endpoint doesn't support server signing.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function joinGroup(groupId: string, options?: JoinGroupOptions): Promise<JoinResponse>;
  interface JoinGroupOptions {
      /** Answers to membership questions. A Join Request will fail, if the answer to a required question is omitted. */
      membershipQuestionAnswers?: MembershipQuestionAnswer$2[];
      autoInviteId?: string | null;
  }
  /**
   * Leave a group.
   * This endpoint doesn't support server signing.
   * @param groupId - ID of the Group to leave.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function leaveGroup(groupId: string): Promise<void>;
  /**
   * Adds site members to a group.
   *
   *
   * The `addGroupMembers()` function returns a Promise that resolves to the newly-added group member
   * after the member has successfully been added.
   *
   * For `SECRET` groups, site admins, group admins, and group members can add additional members to their group.
   *
   * For `PUBLIC` and `PRIVATE` groups, only site admins and group admins can add additional members to their group. They can also choose to allow all group members to add a new member to the group.
   * This setting can be found in your site's Dashboard under **Groups Application > Your Group > Admin Tools > Member Permissions**.
   *
   * <!-- > **Note:** If the `suppressAuth` option is set to `true`, all permissions are overwritten and all site members (including non-group members) can add additional members to a group. -->
   *
   * @param groupId - Group ID.
   * @param memberIds - IDs of the site members to add to the group.
   * @public
   * @requiredField groupId
   * @requiredField memberIds
   * @adminMethod
   */
  function addGroupMembers(groupId: string, memberIds: string[], options?: AddGroupMembersOptions): Promise<AddGroupMembersResponse>;
  interface AddGroupMembersOptions {
      /**
       * @internal
       * @internal */
      siteMemberIds?: string[];
      /**
       * Whether to send invitations to private site members. Defaults to `true`.
       * @internal
       */
      invitePrivateMembers?: boolean | null;
  }
  /**
   * Removes members from a group.
   *
   *
   * The `removeGroupMembers()` function returns a Promise that resolves when the member is removed from the group.
   *
   * > **Note:** Only site admins and group admins can remove members from their group. <!-- However, if the `suppressAuth` option is set to `true`, all permissions are overwritten and all site members (including non-group members) can remove members from a group. -->
   *
   * @param groupId - Group ID.
   * @param memberIds - IDs of the site members to remove from the group.
   * @public
   * @requiredField groupId
   * @requiredField memberIds
   * @adminMethod
   */
  function removeGroupMembers(groupId: string, memberIds: string[], options?: RemoveGroupMembersOptions): Promise<void>;
  interface RemoveGroupMembersOptions {
      /**
       * @internal
       * @internal */
      siteMemberIds?: string[];
  }
  /**
   * Lists all members of a group.
   *
   *
   *  The `listGroupMembers()` function returns a Promise that resolves to a list of up to 100 group members.
   *  Sorts by default to `joinedDate` in descending order.
   *
   *  > **Note:** For `SECRET` groups, only site admins, group admins, and group members can see the list of group members. <!-- However, if the `suppressAuth` option is set to `true`, all permissions are overwritten, and all site members (including non-group members) can see the list of group members.  -->
   *  <!-- > + This function's parameters are positional, and must be specified in the sequence shown in the syntax below. When specifying a parameter, use `null` as a placeholder for any unspecified parameters. For example, to specify `limit` only, call `listGroupMembers(groupId, paging, null)`. To specify `supressAuth` only, call `listGroupMembers(groupId, null, options)`. -->
   *
   * @param groupId - Group ID.
   * @public
   * @requiredField groupId
   * @param options - Paging options.
   * @adminMethod
   */
  function listGroupMembers(groupId: string, options?: ListGroupMembersOptions): Promise<ListGroupMembersResponse>;
  interface ListGroupMembersOptions {
      /** Maximum number of group members to retrieve. Defaults to 100. */
      limit?: number | null;
      /** Number of group members to skip in the list. */
      offset?: number | null;
      /**
       * Return members who left groups (internal, used for history in analytics)
       * @internal
       */
      includeDeleted?: boolean;
  }
  /**
   * Retrieves a list of up to 100 group members, given the provided paging, sorting and filtering.
   *
   *
   * Creates a query to retrieve a list of group members.
   *
   * > **Note:** For `SECRET` groups, only site admins, group admins, and group members can query group members. <!-- However, if the `suppressAuth` option is set to `true`, all permissions are overwritten, and all site members (including non-group members) can query group members.  -->
   *
   * The `queryGroupMembers()` function builds a query to retrieve a list of all group members, and returns a [GroupMembersQueryBuilder](#membersquerybuilder) object.
   *
   * The returned object contains the query definition which is typically used to run the query using the [`find()`](#membersquerybuilder/find) function.
   *
   * You can refine the query by chaining `GroupMembersQueryBuilder` functions onto the query. `GroupMembersQueryBuilder` functions enable you to sort, filter, and control the results that `queryMembers()` returns.
   *
   *  `queryGroupMembers()` runs with these `GroupMembersQueryBuilder` defaults, which you can override:
   *  + [`limit(100)`](#membersquerybuilder/limit)
   *  + [`descending("joinedDate")`](#membersquerybuilder/descending)
   *
   * The following `GroupMembersQueryBuilder` functions are supported for `queryGroupMembers()`. For a full description of the Members object, see the object returned for the [`items`](#membersqueryresult/items) property in [`GroupMembersQueryResult`](#membersqueryresult).
   *
   * | Property                    | Supported Filters & Sorting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
   * | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `role`                      | [`eq()`](#membersquerybuilder/eq), [`ne()`](#membersquerybuilder/ne)                            |
   * | `joinedDate`                | [`ascending()`](#membersquerybuilder/ascending), [`descending()`](#membersquerybuilder/descending)     |
   *
   *
   * @public
   * @requiredField groupId
   * @param groupId - Group ID.
   * @adminMethod
   */
  function queryGroupMembers(groupId: string): MembersQueryBuilder;
  interface QueryOffsetResult$2 {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface MembersQueryResult extends QueryOffsetResult$2 {
      items: GroupMember$1[];
      query: MembersQueryBuilder;
      next: () => Promise<MembersQueryResult>;
      prev: () => Promise<MembersQueryResult>;
  }
  interface MembersQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: 'role', value: any) => MembersQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: 'role', value: any) => MembersQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       */
      hasSome: (propertyName: 'role', value: any[]) => MembersQueryBuilder;
      in: (propertyName: 'role', value: any) => MembersQueryBuilder;
      exists: (propertyName: 'role', value: boolean) => MembersQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'role' | 'joinedDate'>) => MembersQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'role' | 'joinedDate'>) => MembersQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => MembersQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results. */
      skip: (skip: number) => MembersQueryBuilder;
      find: () => Promise<MembersQueryResult>;
  }
  /**
   * Don't expose to 3rd parties! (Use GroupMembersWithProfilesService.QueryNonGroupMembersWithProfiles)
   * @param groupId - Group ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function queryNonGroupMembers(groupId: string, options?: QueryNonGroupMembersOptions): Promise<QueryNonGroupMembersResponse>;
  interface QueryNonGroupMembersOptions {
      query?: Query$2;
  }
  /**
   * Lists all group memberships of a site member.
   *
   *
   * The `listMemberships()` function returns a Promise that resolves to a list of up to 100 group memberships.
   * Sorts by default to `groupId` in descending order.
   *
   * > **Note:** Only site admins can retrieve a site member's memberships. Site members can see a list of their memberships. <!-- However, if the `suppressAuth` option is set to `true`, all permissions are overwritten, and all site members (including non-group members) can see a list of a site member's memberships. -->
   * <!-- > + This function's parameters are positional, and must be specified in the sequence shown in the syntax below. When specifying a parameter, use `null` as a placeholder for any unspecified parameters. For example, to specify `limit` only, call `listMemberships(memberId, paging, null)`. To specify `supressAuth` only, call `listMemberships(memberId, null, options)`. -->
   *
   * @public
   * @requiredField memberId
   * @param memberId - Site member ID.
   * @param options - Paging options.
   * @adminMethod
   */
  function listMemberships(memberId: string | null, options?: ListMembershipsOptions): Promise<ListMembershipsResponse>;
  interface ListMembershipsOptions {
      /**
       * @internal
       * @internal
       * @internal
       */
      siteMemberId?: string | null;
      /** Maximum number of memberships to retrieve. Defaults to 100. */
      limit?: number | null;
      /** Number of memberships to skip in the list. */
      offset?: number | null;
  }
  /**
   * Retrieves a list of up to 100 members and their membership status, given the provided paging and filtering.
   *
   * The queryMemberships function returns a Promise that resolves to a list of memberships.
   *
   * >**Note:** Site members can only query their own memberships.
   *
   * | Property                    | Supported Filters & Sorting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
   * | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `status`                    | [`eq()`](#membershipsquerybuilder/eq), [`ne()`](#membershipsquerybuilder/ne)             |
   * | `role`                      | [`eq()`](#membershipsquerybuilder/eq), [`ne()`](#membershipsquerybuilder/ne)             |
   *
   * @public
   * @requiredField memberId
   * @param memberId - Site member ID.
   * @adminMethod
   */
  function queryMemberships(memberId: string | null, options?: QueryMembershipsOptions): Promise<QueryMembershipsResponse>;
  interface QueryMembershipsOptions {
      /**
       * @internal
       * @internal */
      siteMemberId?: string | null;
      query?: Query$2;
  }
  
  type socialGroupsV2GroupMember_universal_d_JoinRequest = JoinRequest;
  type socialGroupsV2GroupMember_universal_d_JoinResponse = JoinResponse;
  type socialGroupsV2GroupMember_universal_d_MemberJoined = MemberJoined;
  type socialGroupsV2GroupMember_universal_d_JoinBy = JoinBy;
  const socialGroupsV2GroupMember_universal_d_JoinBy: typeof JoinBy;
  type socialGroupsV2GroupMember_universal_d_LeaveRequest = LeaveRequest;
  type socialGroupsV2GroupMember_universal_d_LeaveResponse = LeaveResponse;
  type socialGroupsV2GroupMember_universal_d_MemberLeft = MemberLeft;
  type socialGroupsV2GroupMember_universal_d_AddGroupMembersRequest = AddGroupMembersRequest;
  type socialGroupsV2GroupMember_universal_d_AddGroupMembersResponse = AddGroupMembersResponse;
  type socialGroupsV2GroupMember_universal_d_MemberAdded = MemberAdded;
  type socialGroupsV2GroupMember_universal_d_RemoveGroupMembersRequest = RemoveGroupMembersRequest;
  type socialGroupsV2GroupMember_universal_d_RemoveGroupMembersResponse = RemoveGroupMembersResponse;
  type socialGroupsV2GroupMember_universal_d_MemberRemoved = MemberRemoved;
  type socialGroupsV2GroupMember_universal_d_ListGroupMembersRequest = ListGroupMembersRequest;
  type socialGroupsV2GroupMember_universal_d_ListGroupMembersResponse = ListGroupMembersResponse;
  type socialGroupsV2GroupMember_universal_d_QueryGroupMembersRequest = QueryGroupMembersRequest;
  type socialGroupsV2GroupMember_universal_d_QueryGroupMembersResponse = QueryGroupMembersResponse;
  type socialGroupsV2GroupMember_universal_d_QueryNonGroupMembersRequest = QueryNonGroupMembersRequest;
  type socialGroupsV2GroupMember_universal_d_QueryNonGroupMembersResponse = QueryNonGroupMembersResponse;
  type socialGroupsV2GroupMember_universal_d_ListMembershipsRequest = ListMembershipsRequest;
  type socialGroupsV2GroupMember_universal_d_ListMembershipsResponse = ListMembershipsResponse;
  type socialGroupsV2GroupMember_universal_d_Membership = Membership;
  type socialGroupsV2GroupMember_universal_d_MembershipStatus = MembershipStatus;
  const socialGroupsV2GroupMember_universal_d_MembershipStatus: typeof MembershipStatus;
  type socialGroupsV2GroupMember_universal_d_QueryMembershipsRequest = QueryMembershipsRequest;
  type socialGroupsV2GroupMember_universal_d_QueryMembershipsResponse = QueryMembershipsResponse;
  const socialGroupsV2GroupMember_universal_d_joinGroup: typeof joinGroup;
  type socialGroupsV2GroupMember_universal_d_JoinGroupOptions = JoinGroupOptions;
  const socialGroupsV2GroupMember_universal_d_leaveGroup: typeof leaveGroup;
  const socialGroupsV2GroupMember_universal_d_addGroupMembers: typeof addGroupMembers;
  type socialGroupsV2GroupMember_universal_d_AddGroupMembersOptions = AddGroupMembersOptions;
  const socialGroupsV2GroupMember_universal_d_removeGroupMembers: typeof removeGroupMembers;
  type socialGroupsV2GroupMember_universal_d_RemoveGroupMembersOptions = RemoveGroupMembersOptions;
  const socialGroupsV2GroupMember_universal_d_listGroupMembers: typeof listGroupMembers;
  type socialGroupsV2GroupMember_universal_d_ListGroupMembersOptions = ListGroupMembersOptions;
  const socialGroupsV2GroupMember_universal_d_queryGroupMembers: typeof queryGroupMembers;
  type socialGroupsV2GroupMember_universal_d_MembersQueryResult = MembersQueryResult;
  type socialGroupsV2GroupMember_universal_d_MembersQueryBuilder = MembersQueryBuilder;
  const socialGroupsV2GroupMember_universal_d_queryNonGroupMembers: typeof queryNonGroupMembers;
  type socialGroupsV2GroupMember_universal_d_QueryNonGroupMembersOptions = QueryNonGroupMembersOptions;
  const socialGroupsV2GroupMember_universal_d_listMemberships: typeof listMemberships;
  type socialGroupsV2GroupMember_universal_d_ListMembershipsOptions = ListMembershipsOptions;
  const socialGroupsV2GroupMember_universal_d_queryMemberships: typeof queryMemberships;
  type socialGroupsV2GroupMember_universal_d_QueryMembershipsOptions = QueryMembershipsOptions;
  namespace socialGroupsV2GroupMember_universal_d {
    export {
      GroupMember$1 as GroupMember,
      GroupRole$1 as GroupRole,
      Role$1 as Role,
      SocialGroupsEvent$1 as SocialGroupsEvent,
      SocialGroupsEventPayloadOneOf$1 as SocialGroupsEventPayloadOneOf,
      MemberJoinedGroup$1 as MemberJoinedGroup,
      MembersAddedToGroup$1 as MembersAddedToGroup,
      JoinRequestsApproved$1 as JoinRequestsApproved,
      MembersInvitedToGroup$1 as MembersInvitedToGroup,
      socialGroupsV2GroupMember_universal_d_JoinRequest as JoinRequest,
      MembershipQuestionAnswer$2 as MembershipQuestionAnswer,
      socialGroupsV2GroupMember_universal_d_JoinResponse as JoinResponse,
      socialGroupsV2GroupMember_universal_d_MemberJoined as MemberJoined,
      socialGroupsV2GroupMember_universal_d_JoinBy as JoinBy,
      socialGroupsV2GroupMember_universal_d_LeaveRequest as LeaveRequest,
      socialGroupsV2GroupMember_universal_d_LeaveResponse as LeaveResponse,
      socialGroupsV2GroupMember_universal_d_MemberLeft as MemberLeft,
      socialGroupsV2GroupMember_universal_d_AddGroupMembersRequest as AddGroupMembersRequest,
      socialGroupsV2GroupMember_universal_d_AddGroupMembersResponse as AddGroupMembersResponse,
      socialGroupsV2GroupMember_universal_d_MemberAdded as MemberAdded,
      socialGroupsV2GroupMember_universal_d_RemoveGroupMembersRequest as RemoveGroupMembersRequest,
      socialGroupsV2GroupMember_universal_d_RemoveGroupMembersResponse as RemoveGroupMembersResponse,
      socialGroupsV2GroupMember_universal_d_MemberRemoved as MemberRemoved,
      socialGroupsV2GroupMember_universal_d_ListGroupMembersRequest as ListGroupMembersRequest,
      socialGroupsV2GroupMember_universal_d_ListGroupMembersResponse as ListGroupMembersResponse,
      PagingMetadata$3 as PagingMetadata,
      socialGroupsV2GroupMember_universal_d_QueryGroupMembersRequest as QueryGroupMembersRequest,
      Query$2 as Query,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      Paging$3 as Paging,
      socialGroupsV2GroupMember_universal_d_QueryGroupMembersResponse as QueryGroupMembersResponse,
      socialGroupsV2GroupMember_universal_d_QueryNonGroupMembersRequest as QueryNonGroupMembersRequest,
      socialGroupsV2GroupMember_universal_d_QueryNonGroupMembersResponse as QueryNonGroupMembersResponse,
      socialGroupsV2GroupMember_universal_d_ListMembershipsRequest as ListMembershipsRequest,
      socialGroupsV2GroupMember_universal_d_ListMembershipsResponse as ListMembershipsResponse,
      socialGroupsV2GroupMember_universal_d_Membership as Membership,
      socialGroupsV2GroupMember_universal_d_MembershipStatus as MembershipStatus,
      socialGroupsV2GroupMember_universal_d_QueryMembershipsRequest as QueryMembershipsRequest,
      socialGroupsV2GroupMember_universal_d_QueryMembershipsResponse as QueryMembershipsResponse,
      DomainEvent$4 as DomainEvent,
      DomainEventBodyOneOf$4 as DomainEventBodyOneOf,
      EntityCreatedEvent$4 as EntityCreatedEvent,
      EntityUpdatedEvent$4 as EntityUpdatedEvent,
      EntityDeletedEvent$4 as EntityDeletedEvent,
      ActionEvent$4 as ActionEvent,
      MessageEnvelope$4 as MessageEnvelope,
      IdentificationData$4 as IdentificationData,
      IdentificationDataIdOneOf$4 as IdentificationDataIdOneOf,
      WebhookIdentityType$4 as WebhookIdentityType,
      socialGroupsV2GroupMember_universal_d_joinGroup as joinGroup,
      socialGroupsV2GroupMember_universal_d_JoinGroupOptions as JoinGroupOptions,
      socialGroupsV2GroupMember_universal_d_leaveGroup as leaveGroup,
      socialGroupsV2GroupMember_universal_d_addGroupMembers as addGroupMembers,
      socialGroupsV2GroupMember_universal_d_AddGroupMembersOptions as AddGroupMembersOptions,
      socialGroupsV2GroupMember_universal_d_removeGroupMembers as removeGroupMembers,
      socialGroupsV2GroupMember_universal_d_RemoveGroupMembersOptions as RemoveGroupMembersOptions,
      socialGroupsV2GroupMember_universal_d_listGroupMembers as listGroupMembers,
      socialGroupsV2GroupMember_universal_d_ListGroupMembersOptions as ListGroupMembersOptions,
      socialGroupsV2GroupMember_universal_d_queryGroupMembers as queryGroupMembers,
      socialGroupsV2GroupMember_universal_d_MembersQueryResult as MembersQueryResult,
      socialGroupsV2GroupMember_universal_d_MembersQueryBuilder as MembersQueryBuilder,
      socialGroupsV2GroupMember_universal_d_queryNonGroupMembers as queryNonGroupMembers,
      socialGroupsV2GroupMember_universal_d_QueryNonGroupMembersOptions as QueryNonGroupMembersOptions,
      socialGroupsV2GroupMember_universal_d_listMemberships as listMemberships,
      socialGroupsV2GroupMember_universal_d_ListMembershipsOptions as ListMembershipsOptions,
      socialGroupsV2GroupMember_universal_d_queryMemberships as queryMemberships,
      socialGroupsV2GroupMember_universal_d_QueryMembershipsOptions as QueryMembershipsOptions,
    };
  }
  
  /**
   * >**Notes:**
   * > + Site owners may set that members are not permitted to create groups in the Wix Groups application settings.
   * > + In this situation, site members have to submit a Group Request to create a new group.
   * > + Group Requests can be approved or rejected by an admin.
   * > + After a Group Request has been approved, the new group is added to the Group List in the Wix Groups app home page.
   * > + See [Introduction](https://dev.wix.com/api/rest/wix-groups/groups/introduction#wix-groups_groups_introduction_terminology) for more details.
   */
  interface GroupRequest {
      /**
       * ID of the request to create a group. Same as group ID.
       * @readonly
       */
      _id?: string | null;
      /** Group requested to create. */
      group?: Group;
      /**
       * Status of the request to create a group. One of:
       * - `"PENDING"` - Pending group request.
       * - `"APPROVED"` - Approved group request.
       * - `"REJECTED"` - Rejected group request.
       * - `"CANCELED"` - Canceled group request.
       */
      status?: RequestStatus$1;
      /** Details of request to create a group. */
      requestDetails?: RequestDetails$1;
  }
  interface Group {
      /**
       * Group ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Part of a group's URL.
       *
       * For example, `'https:/example.com/groups/{my-group-slug}'`. Generally based on the group name, but for secret groups it is an autogenerated string of characters, for example, `'https:/example.com/groups/{5D3yTX}'`. It is case-sensitive.
       */
      slug?: string | null;
      /**
       * @internal
       * @internal */
      privacyLevel?: PrivacyStatus;
      /**
       * Group privacy status.
       * - `"PUBLIC"` - Site visitors can see the group and its content in the list of groups. Members can join the group.
       * - `"PRIVATE"` - Site visitors can see the group in the list of groups, but only site members can see its content. Members can request to join the group.
       * - `"SECRET"` - Only admins and group members can see the group and its content in the list of groups. Members can only join a group if invited by group admins, or other group members.
       */
      privacyStatus?: PrivacyStatus;
      /** @internal */
      accessRestriction?: AccessRestriction;
      /**
       * @interal
       * @interal */
      title?: string | null;
      /** Group name. */
      name?: string | null;
      /** Group Description. */
      description?: string | null;
      /** Group teaser. */
      teaser?: string | null;
      /**
       * @internal
       * @internal */
      details?: GroupDetails;
      /**
       * What group members are called.
       *
       * For example, 'Coworkers', 'Friends', or 'Students'.
       */
      memberTitle?: string | null;
      /**
       * Group cover image. You cannot upload your own cover image.
       *
       */
      coverImage?: CoverImage;
      /** Group settings. */
      settings?: GroupSettings;
      /**
       * Total number of members in the group.
       * @readonly
       */
      membersCount?: number | null;
      /**
       * @internal
       * @internal
       * @readonly
       */
      createdBy?: Identity;
      /**
       * Member ID of the group creator.
       * @readonly
       */
      ownerId?: string | null;
      /**
       * Date and time the group was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the group was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * @internal
       * @internal
       * @readonly
       */
      recentActivityDate?: Date;
      /**
       * Date and time the group was last active.
       *
       * For example, a post or comment made in the group.
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
       * Whether group members can send an email inviting others to join the group. When `false`, only site admins and group admins can invite others to join the group.
       *
       * Default: `false`
       */
      membersCanInvite?: boolean | null;
      /**
       * Whether group members can approve or reject requests to join a group. When `false`, only site admins and group admins can approve or reject requests to join a group.
       *
       * Default: `false`
       */
      membersCanApprove?: boolean | null;
      /**
       * @internal
       * @internal */
      memberWelcomePostEnabled?: boolean | null;
      /**
       * Whether to create a daily group post welcoming new members.
       *
       * Default: `true`
       */
      welcomeMemberPostEnabled?: boolean | null;
      /**
       * Whether to create an automatic group post when group details are changed.
       *
       * Default: `true`
       */
      groupDetailsChangedPostEnabled?: boolean | null;
      /**
       * Whether all group members can view the full list of group members.
       *
       * Default: `true`
       */
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
      /** Reason the request to create a group is rejected.  */
      rejectionReason?: string | null;
  }
  interface SubmitGroupRequestRequest {
      /** Group submitted for creation. */
      group?: Group;
  }
  interface SubmitGroupRequestResponse {
      /** Submitted Group Request. */
      groupRequest?: GroupRequest;
  }
  interface ApproveGroupRequestsRequest {
      /**
       * Which items to approve.
       * @internal
       */
      itemsToApprove?: ItemsToUpdate$1;
      /**
       * IDs of the requests create groups to approve.
       *
       * Max: 100 create group request IDs
       */
      groupRequestIds?: string[];
  }
  enum ItemsToUpdate$1 {
      /** Take into account only items which are listed in request. */
      BY_ID = "BY_ID",
      /** Update all items. */
      ALL_ITEMS = "ALL_ITEMS"
  }
  interface ApproveGroupRequestsResponse {
      /** Approved request to create a group. */
      groupRequest?: GroupRequest[];
  }
  interface GroupRequestApproved {
      /** Approved group request. */
      groupRequest?: GroupRequest;
  }
  interface RejectGroupRequestsRequest {
      /**
       * Which items to reject.
       * @internal
       */
      itemsToReject?: ItemsToUpdate$1;
      /** Rejection data. */
      rejections?: Rejection$1[];
  }
  interface Rejection$1 {
      /**
       * ID of the requests to create groups to reject.
       *
       */
      groupRequestId?: string;
      /**
       * Reason the request to create a group is rejected. This text is displayed to the creator of the rejected request.
       *
       * Max: 1,000 characters.
       */
      reason?: string | null;
  }
  interface RejectGroupRequestsResponse {
      /** Rejected Group Requests. */
      groupRequest?: GroupRequest[];
  }
  interface GroupRequestRejected {
      /** Rejected group request. */
      groupRequest?: GroupRequest;
  }
  interface CancelGroupRequestRequest {
      /** ID of the Group Request to cancel. */
      groupRequestId: string;
  }
  interface CancelGroupRequestResponse {
      /** Canceled Group Request. */
      groupRequest?: GroupRequest;
  }
  interface ListGroupRequestsRequest {
      /**
       * Ownership filter. In case of server signing `ALL` value has to be used.
       * - `ALL` - All Group requests.
       * - `CURRENT_MEMBER` - Group requests for current site member.
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
  interface ListGroupRequestsResponse {
      /** List of requests to create a group.  */
      groupRequests?: GroupRequest[];
      /** Paging information. */
      metadata?: PagingMetadata$2;
  }
  interface PagingMetadata$2 {
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
  interface QueryGroupRequestsRequest {
      /**
       * Ownership filter. In case of server signing `ALL` value has to be used.
       * - `ALL` - All group requests.
       * - `CURRENT_MEMBER` - Group requests for current site member.
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
      paging?: Paging$2;
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
  interface Paging$2 {
      /**
       * Number of items to load.
       *
       * Max: `100`
       */
      limit?: number | null;
      /**
       * Number of items to skip in the current sort order.
       *
       */
      offset?: number | null;
  }
  interface QueryGroupRequestsResponse {
      /** Retrieved Group Requests. */
      groupRequests?: GroupRequest[];
      metadata?: PagingMetadata$2;
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
   * Submit a group request.
   * Can be used in case `GroupsAppSettings.create_groups_policy` = `MEMBERS_WITH_APPROVAL`.
   * This endpoint doesn't support server signing.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function submitGroupRequest(options?: SubmitGroupRequestOptions): Promise<SubmitGroupRequestResponse>;
  interface SubmitGroupRequestOptions {
      /** Group submitted for creation. */
      group?: Group;
  }
  /**
   * Approves requests to create a group.
   *
   * The `approveGroupRequests()` function returns a Promise that resolves when a site member's request to create a group is approved. Only site admins can approve requests to create a group. When the request is approved, the new group is added to the Groups List page of your site.
   *
   * >**Note:** This function is only relevant if admin approval is required for creating a group.
   * @param groupRequestIds - IDs of the requests create groups to approve.
   *
   * Max: 100 create group request IDs
   * @public
   * @documentationMaturity preview
   * @requiredField groupRequestIds
   * @adminMethod
   */
  function approveGroupRequests(groupRequestIds: string[], options?: ApproveGroupRequestsOptions): Promise<ApproveGroupRequestsResponse>;
  interface ApproveGroupRequestsOptions {
      /**
       * Which items to approve.
       * @internal
       */
      itemsToApprove?: ItemsToUpdate$1;
  }
  /**
   * Rejects a request to create a group.
   *
   * The `rejectGroupRequests()` function returns a Promise that resolves when a member's request to create a group is rejected. Only site admins can reject requests to create a group.
   *
   * >**Note:** This function is only relevant if admin approval is required for creating a group.
   * @param rejections - Rejection data.
   * @public
   * @documentationMaturity preview
   * @requiredField rejections
   * @adminMethod
   */
  function rejectGroupRequests(rejections: Rejection$1[], options?: RejectGroupRequestsOptions): Promise<RejectGroupRequestsResponse>;
  interface RejectGroupRequestsOptions {
      /**
       * Which items to reject.
       * @internal
       */
      itemsToReject?: ItemsToUpdate$1;
  }
  /**
   * Cancels a Group Request.
   * Group managers always have access to this functionality. Site members can cancel their own group requests.
   * This endpoint doesn't support server signing.
   * @param groupRequestId - ID of the Group Request to cancel.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupRequestId
   * @adminMethod
   */
  function cancelGroupRequest(groupRequestId: string): Promise<CancelGroupRequestResponse>;
  /**
   * Lists requests to create a group.
   *
   * The `listGroupRequests()` function returns a Promise that resolves to a list of up to 1,000 create group requests on your site.
   *
   * Using the options parameter, you can filter your list of posts, set the amount of posts to be returned, and sort your list in a specified order.
   *
   * By default, the list is sorted by `_createdDate` in descending order. Only admins can see create group requests. Members can access their own create group requests in their site.
   *
   * >**Note:** This function is only relevant if admin approval is required for creating a group.
   *
   * @public
   * @documentationMaturity preview
   * @param options - Paging options.
   * @adminMethod
   */
  function listGroupRequests(options?: ListGroupRequestsOptions): Promise<ListGroupRequestsResponse>;
  interface ListGroupRequestsOptions {
      /**
       * Ownership filter. In case of server signing `ALL` value has to be used.
       * - `ALL` - All Group requests.
       * - `CURRENT_MEMBER` - Group requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter$1;
      /**
       * Number of items to load.
       *
       * Max: `100`
       *
       */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  /**
   * Creates a query to retrieve a list of create requests.
   *
   * The `queryGroupRequests()` function builds a query to retrieve a list of all requests to create a group, and returns a [`GroupRequestsQueryBuilder`](#grouprequestsquerybuilder) object.
   *
   * The returned object contains the query definition which is typically used to run the query using the [`find()`](#grouprequestsquerybuilder/find) function. You can refine the query by chaining `GroupRequestQueryBuilder` functions onto the query. `GroupRequestQueryBuilder` functions enable you to sort, filter, and control the results that `queryGroupRequests()` returns.
   *
   * `queryGorupRequests()` runs with these `GroupRequestsQueryBuilder` defaults, which you can override:
   * - [`limit(1000)`](#grouprequestsquerybuilder/limit)
   * - [`descending('_createdDate')`](#grouprequestsquerybuilder/descending)
   *
   * The following `GroupRequestsQueryBuilder` functions are supported for `queryGroupRequests()`. For a full description of the `GroupRequests` object, see the object returned for the [`items`](#grouprequestsqueryresult/items) property in [`GroupRequestsQueryResult`](#grouprequestsqueryresult).
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryGroupRequests(options?: QueryGroupRequestsOptions): GroupRequestsQueryBuilder;
  interface QueryGroupRequestsOptions {
      /**
       * Ownership filter. In case of server signing `ALL` value has to be used.
       * - `ALL` - All group requests.
       * - `CURRENT_MEMBER` - Group requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter$1 | undefined;
  }
  interface QueryOffsetResult$1 {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface GroupRequestsQueryResult extends QueryOffsetResult$1 {
      items: GroupRequest[];
      query: GroupRequestsQueryBuilder;
      next: () => Promise<GroupRequestsQueryResult>;
      prev: () => Promise<GroupRequestsQueryResult>;
  }
  interface GroupRequestsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: 'status', value: any) => GroupRequestsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: 'status', value: any) => GroupRequestsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: 'status', value: any[]) => GroupRequestsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: 'status', value: any) => GroupRequestsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: 'status', value: boolean) => GroupRequestsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => GroupRequestsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => GroupRequestsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<GroupRequestsQueryResult>;
  }
  
  type socialGroupsV2GroupRequest_universal_d_GroupRequest = GroupRequest;
  type socialGroupsV2GroupRequest_universal_d_Group = Group;
  type socialGroupsV2GroupRequest_universal_d_Type = Type;
  const socialGroupsV2GroupRequest_universal_d_Type: typeof Type;
  type socialGroupsV2GroupRequest_universal_d_Events = Events;
  type socialGroupsV2GroupRequest_universal_d_Logo = Logo;
  type socialGroupsV2GroupRequest_universal_d_GroupDetailsPosition = GroupDetailsPosition;
  type socialGroupsV2GroupRequest_universal_d_Image = Image;
  type socialGroupsV2GroupRequest_universal_d_Position = Position;
  type socialGroupsV2GroupRequest_universal_d_AllowPolicy = AllowPolicy;
  const socialGroupsV2GroupRequest_universal_d_AllowPolicy: typeof AllowPolicy;
  type socialGroupsV2GroupRequest_universal_d_OnboardingStepSettings = OnboardingStepSettings;
  type socialGroupsV2GroupRequest_universal_d_StepKey = StepKey;
  const socialGroupsV2GroupRequest_universal_d_StepKey: typeof StepKey;
  type socialGroupsV2GroupRequest_universal_d_PrivacyStatus = PrivacyStatus;
  const socialGroupsV2GroupRequest_universal_d_PrivacyStatus: typeof PrivacyStatus;
  type socialGroupsV2GroupRequest_universal_d_AccessRestriction = AccessRestriction;
  type socialGroupsV2GroupRequest_universal_d_AccessRestrictionDataOneOf = AccessRestrictionDataOneOf;
  type socialGroupsV2GroupRequest_universal_d_GroupDetails = GroupDetails;
  type socialGroupsV2GroupRequest_universal_d_CoverImage = CoverImage;
  type socialGroupsV2GroupRequest_universal_d_GroupSettings = GroupSettings;
  type socialGroupsV2GroupRequest_universal_d_Identity = Identity;
  type socialGroupsV2GroupRequest_universal_d_IdentityType = IdentityType;
  const socialGroupsV2GroupRequest_universal_d_IdentityType: typeof IdentityType;
  type socialGroupsV2GroupRequest_universal_d_SubmitGroupRequestRequest = SubmitGroupRequestRequest;
  type socialGroupsV2GroupRequest_universal_d_SubmitGroupRequestResponse = SubmitGroupRequestResponse;
  type socialGroupsV2GroupRequest_universal_d_ApproveGroupRequestsRequest = ApproveGroupRequestsRequest;
  type socialGroupsV2GroupRequest_universal_d_ApproveGroupRequestsResponse = ApproveGroupRequestsResponse;
  type socialGroupsV2GroupRequest_universal_d_GroupRequestApproved = GroupRequestApproved;
  type socialGroupsV2GroupRequest_universal_d_RejectGroupRequestsRequest = RejectGroupRequestsRequest;
  type socialGroupsV2GroupRequest_universal_d_RejectGroupRequestsResponse = RejectGroupRequestsResponse;
  type socialGroupsV2GroupRequest_universal_d_GroupRequestRejected = GroupRequestRejected;
  type socialGroupsV2GroupRequest_universal_d_CancelGroupRequestRequest = CancelGroupRequestRequest;
  type socialGroupsV2GroupRequest_universal_d_CancelGroupRequestResponse = CancelGroupRequestResponse;
  type socialGroupsV2GroupRequest_universal_d_ListGroupRequestsRequest = ListGroupRequestsRequest;
  type socialGroupsV2GroupRequest_universal_d_ListGroupRequestsResponse = ListGroupRequestsResponse;
  type socialGroupsV2GroupRequest_universal_d_QueryGroupRequestsRequest = QueryGroupRequestsRequest;
  type socialGroupsV2GroupRequest_universal_d_QueryGroupRequestsResponse = QueryGroupRequestsResponse;
  const socialGroupsV2GroupRequest_universal_d_submitGroupRequest: typeof submitGroupRequest;
  type socialGroupsV2GroupRequest_universal_d_SubmitGroupRequestOptions = SubmitGroupRequestOptions;
  const socialGroupsV2GroupRequest_universal_d_approveGroupRequests: typeof approveGroupRequests;
  type socialGroupsV2GroupRequest_universal_d_ApproveGroupRequestsOptions = ApproveGroupRequestsOptions;
  const socialGroupsV2GroupRequest_universal_d_rejectGroupRequests: typeof rejectGroupRequests;
  type socialGroupsV2GroupRequest_universal_d_RejectGroupRequestsOptions = RejectGroupRequestsOptions;
  const socialGroupsV2GroupRequest_universal_d_cancelGroupRequest: typeof cancelGroupRequest;
  const socialGroupsV2GroupRequest_universal_d_listGroupRequests: typeof listGroupRequests;
  type socialGroupsV2GroupRequest_universal_d_ListGroupRequestsOptions = ListGroupRequestsOptions;
  const socialGroupsV2GroupRequest_universal_d_queryGroupRequests: typeof queryGroupRequests;
  type socialGroupsV2GroupRequest_universal_d_QueryGroupRequestsOptions = QueryGroupRequestsOptions;
  type socialGroupsV2GroupRequest_universal_d_GroupRequestsQueryResult = GroupRequestsQueryResult;
  type socialGroupsV2GroupRequest_universal_d_GroupRequestsQueryBuilder = GroupRequestsQueryBuilder;
  namespace socialGroupsV2GroupRequest_universal_d {
    export {
      socialGroupsV2GroupRequest_universal_d_GroupRequest as GroupRequest,
      socialGroupsV2GroupRequest_universal_d_Group as Group,
      socialGroupsV2GroupRequest_universal_d_Type as Type,
      socialGroupsV2GroupRequest_universal_d_Events as Events,
      socialGroupsV2GroupRequest_universal_d_Logo as Logo,
      socialGroupsV2GroupRequest_universal_d_GroupDetailsPosition as GroupDetailsPosition,
      socialGroupsV2GroupRequest_universal_d_Image as Image,
      socialGroupsV2GroupRequest_universal_d_Position as Position,
      socialGroupsV2GroupRequest_universal_d_AllowPolicy as AllowPolicy,
      socialGroupsV2GroupRequest_universal_d_OnboardingStepSettings as OnboardingStepSettings,
      socialGroupsV2GroupRequest_universal_d_StepKey as StepKey,
      socialGroupsV2GroupRequest_universal_d_PrivacyStatus as PrivacyStatus,
      socialGroupsV2GroupRequest_universal_d_AccessRestriction as AccessRestriction,
      socialGroupsV2GroupRequest_universal_d_AccessRestrictionDataOneOf as AccessRestrictionDataOneOf,
      socialGroupsV2GroupRequest_universal_d_GroupDetails as GroupDetails,
      socialGroupsV2GroupRequest_universal_d_CoverImage as CoverImage,
      socialGroupsV2GroupRequest_universal_d_GroupSettings as GroupSettings,
      socialGroupsV2GroupRequest_universal_d_Identity as Identity,
      socialGroupsV2GroupRequest_universal_d_IdentityType as IdentityType,
      RequestStatus$1 as RequestStatus,
      RequestDetails$1 as RequestDetails,
      socialGroupsV2GroupRequest_universal_d_SubmitGroupRequestRequest as SubmitGroupRequestRequest,
      socialGroupsV2GroupRequest_universal_d_SubmitGroupRequestResponse as SubmitGroupRequestResponse,
      socialGroupsV2GroupRequest_universal_d_ApproveGroupRequestsRequest as ApproveGroupRequestsRequest,
      ItemsToUpdate$1 as ItemsToUpdate,
      socialGroupsV2GroupRequest_universal_d_ApproveGroupRequestsResponse as ApproveGroupRequestsResponse,
      socialGroupsV2GroupRequest_universal_d_GroupRequestApproved as GroupRequestApproved,
      socialGroupsV2GroupRequest_universal_d_RejectGroupRequestsRequest as RejectGroupRequestsRequest,
      Rejection$1 as Rejection,
      socialGroupsV2GroupRequest_universal_d_RejectGroupRequestsResponse as RejectGroupRequestsResponse,
      socialGroupsV2GroupRequest_universal_d_GroupRequestRejected as GroupRequestRejected,
      socialGroupsV2GroupRequest_universal_d_CancelGroupRequestRequest as CancelGroupRequestRequest,
      socialGroupsV2GroupRequest_universal_d_CancelGroupRequestResponse as CancelGroupRequestResponse,
      socialGroupsV2GroupRequest_universal_d_ListGroupRequestsRequest as ListGroupRequestsRequest,
      OwnershipFilter$1 as OwnershipFilter,
      socialGroupsV2GroupRequest_universal_d_ListGroupRequestsResponse as ListGroupRequestsResponse,
      PagingMetadata$2 as PagingMetadata,
      socialGroupsV2GroupRequest_universal_d_QueryGroupRequestsRequest as QueryGroupRequestsRequest,
      Query$1 as Query,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      Paging$2 as Paging,
      socialGroupsV2GroupRequest_universal_d_QueryGroupRequestsResponse as QueryGroupRequestsResponse,
      DomainEvent$3 as DomainEvent,
      DomainEventBodyOneOf$3 as DomainEventBodyOneOf,
      EntityCreatedEvent$3 as EntityCreatedEvent,
      EntityUpdatedEvent$3 as EntityUpdatedEvent,
      EntityDeletedEvent$3 as EntityDeletedEvent,
      ActionEvent$3 as ActionEvent,
      MessageEnvelope$3 as MessageEnvelope,
      IdentificationData$3 as IdentificationData,
      IdentificationDataIdOneOf$3 as IdentificationDataIdOneOf,
      WebhookIdentityType$3 as WebhookIdentityType,
      socialGroupsV2GroupRequest_universal_d_submitGroupRequest as submitGroupRequest,
      socialGroupsV2GroupRequest_universal_d_SubmitGroupRequestOptions as SubmitGroupRequestOptions,
      socialGroupsV2GroupRequest_universal_d_approveGroupRequests as approveGroupRequests,
      socialGroupsV2GroupRequest_universal_d_ApproveGroupRequestsOptions as ApproveGroupRequestsOptions,
      socialGroupsV2GroupRequest_universal_d_rejectGroupRequests as rejectGroupRequests,
      socialGroupsV2GroupRequest_universal_d_RejectGroupRequestsOptions as RejectGroupRequestsOptions,
      socialGroupsV2GroupRequest_universal_d_cancelGroupRequest as cancelGroupRequest,
      socialGroupsV2GroupRequest_universal_d_listGroupRequests as listGroupRequests,
      socialGroupsV2GroupRequest_universal_d_ListGroupRequestsOptions as ListGroupRequestsOptions,
      socialGroupsV2GroupRequest_universal_d_queryGroupRequests as queryGroupRequests,
      socialGroupsV2GroupRequest_universal_d_QueryGroupRequestsOptions as QueryGroupRequestsOptions,
      socialGroupsV2GroupRequest_universal_d_GroupRequestsQueryResult as GroupRequestsQueryResult,
      socialGroupsV2GroupRequest_universal_d_GroupRequestsQueryBuilder as GroupRequestsQueryBuilder,
    };
  }
  
  /**
   * A group member may have multiple roles in a single group.
   * Currently, only `MEMBER` and `ADMIN` roles are supported, but more roles may be available in the future.
   */
  interface GroupRole {
      /**
       * Member's role.
       * - `MEMBER` - Regular group member.
       * - `ADMIN` - Group administrator.
       */
      value?: Role;
  }
  enum Role {
      UNKNOWN_ROLE = "UNKNOWN_ROLE",
      /** Regular group member. */
      MEMBER = "MEMBER",
      /** Group administrator. */
      ADMIN = "ADMIN"
  }
  interface AssignRoleRequest {
      /** Group ID. */
      groupId: string;
      /**
       * @internal
       * @internal */
      siteMemberIds?: string[];
      /**
       * Member IDs.
       *
       * Max: 100 member IDs
       */
      memberIds?: string[];
      /** Role to assign. */
      role?: GroupRole;
  }
  interface AssignRoleResponse {
      /** Group ID. */
      groupId?: string;
      /**
       * @internal
       * @internal */
      siteMemberIds?: string[];
      /** Member IDs */
      memberIds?: string[];
      /** Assigned role. */
      role?: GroupRole;
  }
  interface RoleAssignedToGroupMember {
      /** Group ID in which role was assigned. */
      groupId?: string;
      /** Group member to whom the role was assigned. */
      groupMember?: GroupMember;
      /** Assigned group role. */
      role?: GroupRole;
      /** ID of site member who assigned the role. It can be empty if the role was assigned by a third-party application. */
      assignedById?: string | null;
  }
  interface GroupMember {
      /**
       * __Deprecated.__ Use `memberId` instead.
       * This property will be removed on June 30, 2022.
       * @readonly
       */
      siteMemberId?: string;
      /**
       * Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details.
       * @readonly
       */
      memberId?: string;
      /** Group Member Role. */
      role?: GroupRole;
      /**
       * Date and time the group Member joined the group.
       * @readonly
       */
      joinedDate?: Date;
      /**
       * @internal
       * @readonly
       */
      contactId?: string | null;
  }
  interface UnassignRoleRequest {
      /** Group ID. */
      groupId: string;
      /**
       * @internal
       * @internal */
      siteMemberIds?: string[];
      /**
       * Member IDs.
       *
       * Max: 100 member IDs
       */
      memberIds?: string[];
      /** Role to unassign. */
      role?: GroupRole;
  }
  interface UnassignRoleResponse {
      /** Group ID. */
      groupId?: string;
      /**
       * @internal
       * @internal */
      siteMemberIds?: string[];
      /** Member IDs. */
      memberIds?: string[];
      /** Unassigned role. */
      role?: GroupRole;
  }
  interface RoleUnassignedFromGroupMember {
      /** Group ID in which role was unassigned. */
      groupId?: string;
      /** Group member from whom role was removed. */
      groupMember?: GroupMember;
      /** Unassigned group role. */
      role?: GroupRole;
      /** ID of site member who unassigned the role. It can be empty if the role was assigned by a third-party application. */
      unassignedById?: string | null;
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
  /**
   * Assigns a specific role to group members.
   *
   *
   * >**Note:** This function is only relevant for site admins, and group members with group admin permissions.
   *
   * The `assignRole()` function returns a Promise that resolves to the newly-assigned role after it has successfully been assigned. Assigning a role overrides an existing role. For example, assigning a member role to an admin unassigned their admin role.
   * @param groupId - Group ID.
   * @param memberIds - Member IDs.
   *
   * Max: 100 member IDs
   * @param role - Role to assign.
   * @public
   * @requiredField groupId
   * @requiredField memberIds
   * @requiredField role
   * @adminMethod
   */
  function assignRole(groupId: string, memberIds: string[], role: GroupRole, options?: AssignRoleOptions): Promise<AssignRoleResponse>;
  interface AssignRoleOptions {
      /** @internal */
      siteMemberIds?: string[];
  }
  /**
   * Unassigns a role from group members.
   *
   * >**Note:** This function is only relevant for site admins, and group members with group admin permissions.
   *
   * The `unassignRole()` function returns a Promise that resolves to the unassigned role after it has successfully been unassigned. This function only applies to admin roles. Using this function with member roles returns an error.
   * @param groupId - Group ID.
   * @param memberIds - Member IDs.
   *
   * Max: 100 member IDs
   * @param role - Role to unassign.
   * @public
   * @requiredField groupId
   * @requiredField memberIds
   * @requiredField role
   * @adminMethod
   */
  function unassignRole(groupId: string, memberIds: string[], role: GroupRole, options?: UnassignRoleOptions): Promise<UnassignRoleResponse>;
  interface UnassignRoleOptions {
      /** @internal */
      siteMemberIds?: string[];
  }
  
  type socialGroupsV2GroupRole_universal_d_GroupRole = GroupRole;
  type socialGroupsV2GroupRole_universal_d_Role = Role;
  const socialGroupsV2GroupRole_universal_d_Role: typeof Role;
  type socialGroupsV2GroupRole_universal_d_AssignRoleRequest = AssignRoleRequest;
  type socialGroupsV2GroupRole_universal_d_AssignRoleResponse = AssignRoleResponse;
  type socialGroupsV2GroupRole_universal_d_RoleAssignedToGroupMember = RoleAssignedToGroupMember;
  type socialGroupsV2GroupRole_universal_d_GroupMember = GroupMember;
  type socialGroupsV2GroupRole_universal_d_UnassignRoleRequest = UnassignRoleRequest;
  type socialGroupsV2GroupRole_universal_d_UnassignRoleResponse = UnassignRoleResponse;
  type socialGroupsV2GroupRole_universal_d_RoleUnassignedFromGroupMember = RoleUnassignedFromGroupMember;
  const socialGroupsV2GroupRole_universal_d_assignRole: typeof assignRole;
  type socialGroupsV2GroupRole_universal_d_AssignRoleOptions = AssignRoleOptions;
  const socialGroupsV2GroupRole_universal_d_unassignRole: typeof unassignRole;
  type socialGroupsV2GroupRole_universal_d_UnassignRoleOptions = UnassignRoleOptions;
  namespace socialGroupsV2GroupRole_universal_d {
    export {
      socialGroupsV2GroupRole_universal_d_GroupRole as GroupRole,
      socialGroupsV2GroupRole_universal_d_Role as Role,
      socialGroupsV2GroupRole_universal_d_AssignRoleRequest as AssignRoleRequest,
      socialGroupsV2GroupRole_universal_d_AssignRoleResponse as AssignRoleResponse,
      socialGroupsV2GroupRole_universal_d_RoleAssignedToGroupMember as RoleAssignedToGroupMember,
      socialGroupsV2GroupRole_universal_d_GroupMember as GroupMember,
      socialGroupsV2GroupRole_universal_d_UnassignRoleRequest as UnassignRoleRequest,
      socialGroupsV2GroupRole_universal_d_UnassignRoleResponse as UnassignRoleResponse,
      socialGroupsV2GroupRole_universal_d_RoleUnassignedFromGroupMember as RoleUnassignedFromGroupMember,
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
      socialGroupsV2GroupRole_universal_d_assignRole as assignRole,
      socialGroupsV2GroupRole_universal_d_AssignRoleOptions as AssignRoleOptions,
      socialGroupsV2GroupRole_universal_d_unassignRole as unassignRole,
      socialGroupsV2GroupRole_universal_d_UnassignRoleOptions as UnassignRoleOptions,
    };
  }
  
  /**
   * Guidelines ensuring that members post responsibly and respectfully. Site owners can set up Group Rules in the dashboard.
   * >**Note:** Only admins can update the group rules.
   */
  interface GroupRules {
      /** Group rules. */
      rules?: GroupRule[];
  }
  interface GroupRule {
      /** Rule title. */
      title?: string;
      /** Rule description. */
      description?: string;
  }
  interface ListRulesRequest {
      /** Group ID. */
      groupId: string;
  }
  interface ListRulesResponse {
      /** Retrieved rules. */
      rules?: GroupRule[];
  }
  interface CreateOrReplaceAllRulesRequest {
      /** Group ID. */
      groupId: string;
      /** New rules. */
      rules?: GroupRule[];
  }
  interface CreateOrReplaceAllRulesResponse {
      /** Group ID. */
      groupId?: string;
      /** Rules. */
      rules?: GroupRule[];
  }
  interface Empty {
  }
  interface ListTemplatesResponse {
      /** Retrieved rule templates. */
      rules?: GroupRule[];
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
   * Retrieves rules.
   *
   * >**Note:**
   * >This endpoint requires [visitor or member authentication](https://dev.wix.com/docs/rest/articles/getting-started/access-types-and-permissions).
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function listRules(groupId: string): Promise<ListRulesResponse>;
  /**
   * Creates rules if no rules have been set up. Otherwise, replaces all existing rules.
   * > **Note:** Only admins can create or replace rules.
   *
   * >**Note:**
   * >This endpoint requires [visitor or member authentication](https://dev.wix.com/docs/rest/articles/getting-started/access-types-and-permissions).
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function createOrReplaceAllRules(groupId: string, options?: CreateOrReplaceAllRulesOptions): Promise<CreateOrReplaceAllRulesResponse>;
  interface CreateOrReplaceAllRulesOptions {
      /** New rules. */
      rules?: GroupRule[];
  }
  /**
   * Retrieves the rule templates.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listTemplates(): Promise<ListTemplatesResponse>;
  
  type socialGroupsV2GroupRules_universal_d_GroupRules = GroupRules;
  type socialGroupsV2GroupRules_universal_d_GroupRule = GroupRule;
  type socialGroupsV2GroupRules_universal_d_ListRulesRequest = ListRulesRequest;
  type socialGroupsV2GroupRules_universal_d_ListRulesResponse = ListRulesResponse;
  type socialGroupsV2GroupRules_universal_d_CreateOrReplaceAllRulesRequest = CreateOrReplaceAllRulesRequest;
  type socialGroupsV2GroupRules_universal_d_CreateOrReplaceAllRulesResponse = CreateOrReplaceAllRulesResponse;
  type socialGroupsV2GroupRules_universal_d_Empty = Empty;
  type socialGroupsV2GroupRules_universal_d_ListTemplatesResponse = ListTemplatesResponse;
  const socialGroupsV2GroupRules_universal_d_listRules: typeof listRules;
  const socialGroupsV2GroupRules_universal_d_createOrReplaceAllRules: typeof createOrReplaceAllRules;
  type socialGroupsV2GroupRules_universal_d_CreateOrReplaceAllRulesOptions = CreateOrReplaceAllRulesOptions;
  const socialGroupsV2GroupRules_universal_d_listTemplates: typeof listTemplates;
  namespace socialGroupsV2GroupRules_universal_d {
    export {
      socialGroupsV2GroupRules_universal_d_GroupRules as GroupRules,
      socialGroupsV2GroupRules_universal_d_GroupRule as GroupRule,
      socialGroupsV2GroupRules_universal_d_ListRulesRequest as ListRulesRequest,
      socialGroupsV2GroupRules_universal_d_ListRulesResponse as ListRulesResponse,
      socialGroupsV2GroupRules_universal_d_CreateOrReplaceAllRulesRequest as CreateOrReplaceAllRulesRequest,
      socialGroupsV2GroupRules_universal_d_CreateOrReplaceAllRulesResponse as CreateOrReplaceAllRulesResponse,
      socialGroupsV2GroupRules_universal_d_Empty as Empty,
      socialGroupsV2GroupRules_universal_d_ListTemplatesResponse as ListTemplatesResponse,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      MessageEnvelope$1 as MessageEnvelope,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
      socialGroupsV2GroupRules_universal_d_listRules as listRules,
      socialGroupsV2GroupRules_universal_d_createOrReplaceAllRules as createOrReplaceAllRules,
      socialGroupsV2GroupRules_universal_d_CreateOrReplaceAllRulesOptions as CreateOrReplaceAllRulesOptions,
      socialGroupsV2GroupRules_universal_d_listTemplates as listTemplates,
    };
  }
  
  /**
   * To join a private group, a site member must submit a Join Request, which can be approved or rejected by an admin.
   * When the request is approved, the site member becomes a group member.
   */
  interface JoinGroupRequest {
      /**
       * Site member ID of the requester.
       * @readonly
       */
      siteMemberId?: string;
      /** @readonly */
      contactId?: string;
      /**
       * Status of the request to join a group.
       *
       * One of:
       * - `"PENDING"`
       * - `"APPROVED"`
       * - `"REJECTED"`
       */
      status?: RequestStatus;
      /** Join group request details. */
      requestDetails?: RequestDetails;
      /**
       * Date and time the request was created.
       * @internal
       * @readonly
       */
      _createdDate?: Date;
      /**
       * ID of the group requested to join.
       * @internal
       * @readonly
       */
      groupId?: string | null;
      /**
       * Membership questions answers count
       * @internal
       * @readonly
       */
      membershipQuestionAnswersCount?: number | null;
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
      /** Reason the request to join a group was rejected. */
      rejectionReason?: string | null;
  }
  interface SocialGroupsEvent extends SocialGroupsEventPayloadOneOf {
      memberJoined?: MemberJoinedGroup;
      membersAdded?: MembersAddedToGroup;
      joinRequestsApproved?: JoinRequestsApproved;
      membersInvited?: MembersInvitedToGroup;
  }
  /** @oneof */
  interface SocialGroupsEventPayloadOneOf {
      memberJoined?: MemberJoinedGroup;
      membersAdded?: MembersAddedToGroup;
      joinRequestsApproved?: JoinRequestsApproved;
      membersInvited?: MembersInvitedToGroup;
  }
  interface MemberJoinedGroup {
      groupId?: string;
      groupsInstanceId?: string;
      siteMemberId?: string;
  }
  interface MembersAddedToGroup {
      groupId?: string;
      groupsInstanceId?: string;
      whoAddedId?: string | null;
      siteMemberIds?: string[];
      /** Used for Apes sticky experiment */
      operationId?: string;
  }
  interface JoinRequestsApproved {
      groupId?: string;
      groupsInstanceId?: string;
      siteMemberIds?: string[];
      /** Used for Apes sticky experiment */
      operationId?: string;
  }
  interface MembersInvitedToGroup {
      groupId?: string;
      groupsInstanceId?: string;
      siteMemberIds?: string[];
  }
  interface GetJoinRequirementsRequest {
      /** ID of the group requested to join. */
      groupId: string;
      /** Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted. */
      membershipQuestionAnswers?: MembershipQuestionAnswer$1[];
      autoInviteId?: string | null;
  }
  /** Answer to a membership question. */
  interface MembershipQuestionAnswer$1 {
      /** Question ID. */
      _id?: string;
      /** Answer text. */
      text?: string | null;
  }
  interface GetJoinRequirementsResponse {
      violation?: Violation;
  }
  interface PaidPlan {
      planId?: string;
      name?: string;
      startsAt?: Date;
  }
  enum ViolationType {
      NONE = "NONE",
      NOT_LOGGED_IN = "NOT_LOGGED_IN",
      ALREADY_JOINED = "ALREADY_JOINED",
      SECRET_GROUP = "SECRET_GROUP",
      EVENTS = "EVENTS",
      PRICING_PlANS = "PRICING_PlANS",
      MEMBERSHIP_QUESTIONS = "MEMBERSHIP_QUESTIONS",
      ADMIN_APPROVAL = "ADMIN_APPROVAL"
  }
  interface EventsViolationOptions {
      /** Events which allow user to join the group. */
      eventIds?: string[];
  }
  interface PricingPlanViolationOptions {
      installed?: boolean;
      /** Plan ids which allow user to join the group. */
      requiredPlans?: PaidPlan[];
      /** Plan ids which user have, but they don't allow to join group right now, because they start some time in the future. */
      futurePlans?: PaidPlan[];
  }
  interface MembershipQuestionViolationOptions {
      requiredQuestionIds?: string[];
  }
  interface Violation extends ViolationViolationOptionsOneOf {
      eventsOptions?: EventsViolationOptions;
      pricingPlansOptions?: PricingPlanViolationOptions;
      membershipQuestionsOptions?: MembershipQuestionViolationOptions;
      violationType?: ViolationType;
  }
  /** @oneof */
  interface ViolationViolationOptionsOneOf {
      eventsOptions?: EventsViolationOptions;
      pricingPlansOptions?: PricingPlanViolationOptions;
      membershipQuestionsOptions?: MembershipQuestionViolationOptions;
  }
  interface SubmitJoinGroupRequestRequest {
      /** ID of the group requested to join. */
      groupId: string;
      /** Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted. */
      membershipQuestionAnswers?: MembershipQuestionAnswer$1[];
  }
  interface SubmitJoinGroupRequestResponse {
      /** Submitted join group request. */
      joinGroupRequest?: JoinGroupRequest;
  }
  interface CancelJoinGroupRequestRequest {
      /** ID of the group requested to join. */
      groupId: string;
  }
  interface CancelJoinGroupRequestResponse {
      /** Cancelled join group request. */
      joinGroupRequest?: JoinGroupRequest;
  }
  interface JoinGroupRequestCancelled {
      /** Group ID for which join request was cancelled. */
      groupId?: string;
      /** Cancelled join group request. */
      joinGroupRequest?: JoinGroupRequest;
  }
  interface ApproveJoinGroupRequestsRequest {
      /** ID of the group requested to join. */
      groupId: string;
      /** @internal */
      itemsToApprove?: ItemsToUpdate;
      /**
       * @Internal
       * @Internal */
      siteMemberIds?: string[];
      /** IDs of the site members to approve. */
      memberIds?: string[];
  }
  enum ItemsToUpdate {
      /** Take into account only items which are listed in request. */
      BY_ID = "BY_ID",
      /** Update all items. */
      ALL_ITEMS = "ALL_ITEMS"
  }
  interface ApproveJoinGroupRequestsResponse {
      /** Approved join group requests. */
      joinGroupRequests?: JoinGroupRequest[];
  }
  interface JoinGroupRequestApproved {
      /** Group ID for which join request was approved. */
      groupId?: string;
      /** Approved join group request. */
      joinGroupRequest?: JoinGroupRequest;
  }
  interface RejectJoinGroupRequestsRequest {
      /** ID of the group requested to join. */
      groupId: string;
      /** @internal */
      itemsToReject?: ItemsToUpdate;
      /** Rejection data. */
      rejections?: Rejection[];
  }
  interface Rejection {
      /**
       * @Internal
       * @Internal
       * @internal
       */
      siteMemberId?: string;
      /** Member ID to reject. */
      memberId?: string;
      /** Reason the request to join a group was rejected. Text written by the request reviewer that is displayed when the group is rejected (max 1,000 characters). */
      reason?: string | null;
  }
  interface RejectJoinGroupRequestsResponse {
      /** Rejected join group requests. */
      joinGroupRequests?: JoinGroupRequest[];
  }
  interface JoinGroupRequestRejected {
      /** Group ID for which join request was rejected. */
      groupId?: string;
      /** Rejected join group request. */
      joinGroupRequest?: JoinGroupRequest;
  }
  interface ListJoinGroupRequestsRequest {
      /** ID of the group requested to join. */
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
  interface ListJoinGroupRequestsResponse {
      /** Join group requests. */
      joinGroupRequests?: JoinGroupRequest[];
      metadata?: PagingMetadata$1;
  }
  interface PagingMetadata$1 {
      /** Number of items in the current results page. */
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
  interface QueryJoinGroupRequestsRequest {
      /** ID of the group requested to join. */
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
      paging?: Paging$1;
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
  interface Paging$1 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryJoinGroupRequestsResponse {
      /** Requests to join a group. */
      joinGroupRequests?: JoinGroupRequest[];
      metadata?: PagingMetadata$1;
  }
  interface RejectAllJoinGroupRequestsRequest {
  }
  interface RejectAllJoinGroupRequestsResponse {
      /** Rejected join group requests. */
      joinGroupRequests?: JoinGroupRequest[];
  }
  interface ApproveAllJoinGroupRequestsRequest {
  }
  interface ApproveAllJoinGroupRequestsResponse {
      /** Rejected join group requests. */
      joinGroupRequests?: JoinGroupRequest[];
  }
  interface ListAllJoinGroupRequestsRequest {
      query?: Query;
  }
  interface ListAllJoinGroupRequestsResponse {
      /** Join group requests. */
      joinGroupRequests?: JoinGroupRequest[];
      metadata?: PagingMetadata$1;
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
   * Get join group requirements. Will return empty response for public groups and details to fulfil if it's private.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
   * @param groupId - ID of the group requested to join.
   * @adminMethod
   */
  function getJoinRequirements(groupId: string, options?: GetJoinRequirementsOptions): Promise<GetJoinRequirementsResponse>;
  interface GetJoinRequirementsOptions {
      /** Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted. */
      membershipQuestionAnswers?: MembershipQuestionAnswer$1[];
      autoInviteId?: string | null;
  }
  /**
   * Submits a join group request.
   * Relevant only for private groups.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
   * @param groupId - ID of the group requested to join.
   * @adminMethod
   */
  function submitJoinGroupRequest(groupId: string, options?: SubmitJoinGroupRequestOptions): Promise<SubmitJoinGroupRequestResponse>;
  interface SubmitJoinGroupRequestOptions {
      /** Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted. */
      membershipQuestionAnswers?: MembershipQuestionAnswer$1[];
  }
  /**
   * Cancels a join group request.
   * A site member can cancel only their own pending Join group requests.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
   * @param groupId - ID of the group requested to join.
   * @adminMethod
   */
  function cancelJoinGroupRequest(groupId: string): Promise<CancelJoinGroupRequestResponse>;
  /**
   * Approves requests to join a group.
   *
   * > **Note:** This function is only relevant for private groups.
   *
   * The `approvejoinGroupRequests()` function returns a Promise that resolves when a site member's request to join a group is approved.
   * Only site admins and group admins can approve site member requests to join a group, unless the group setting, `membersCanApprove` is set to `true`.
   *
   * <!--
   * > **Note:** If the `suppressAuth` option is set to `true`, all permissions are overwritten, and all site members (including non-group members) can approve site member requests to join a group.
   * -->
   * @param memberIds - IDs of the site members to approve.
   * @public
   * @requiredField groupId
   * @requiredField memberIds
   * @param groupId - ID of the group requested to join.
   * @adminMethod
   */
  function approveJoinGroupRequests(groupId: string, memberIds: string[], options?: ApproveJoinGroupRequestsOptions): Promise<ApproveJoinGroupRequestsResponse>;
  interface ApproveJoinGroupRequestsOptions {
      /** @internal */
      itemsToApprove?: ItemsToUpdate;
      /**
       * @Internal
       * @Internal */
      siteMemberIds?: string[];
  }
  /**
   * Rejects requests to join a group.
   *
   * > **Note:**  This function is only relevant for private groups.
   *
   * The `rejectjoinGroupRequests()` function returns a Promise that resolves when the site member's request to join a group is rejected.
   * Only site admins or group admins can reject site member requests to join the group, unless the group setting, `membersCanApprove` is set to `true`.
   *
   * <!--
   * > **Note:** If the `suppressAuth` option is set to `true`, all permissions are overwritten, and all site members (including non-group members) can reject site member requests to join a group.
   * -->
   *
   * @param rejections - Rejection data.
   * @public
   * @requiredField groupId
   * @requiredField rejections
   * @param groupId - ID of the group requested to join.
   * @adminMethod
   */
  function rejectJoinGroupRequests(groupId: string, rejections: Rejection[], options?: RejectJoinGroupRequestsOptions): Promise<RejectJoinGroupRequestsResponse>;
  interface RejectJoinGroupRequestsOptions {
      /** @internal */
      itemsToReject?: ItemsToUpdate;
  }
  /**
   * Lists requests to join a group.
   *
   * > **Note:** This function is only relevant for private groups.
   *
   * The `listjoinGroupRequests()` function returns a Promise that resolves to a list of up to 100 requests to join a group. Sorts by default to `_createdDate` in descending order.
   * Only site admins and group admins can see requests to join their group. Site members can access their own join requests in their site.
   *
   * > **Notes:**
   * <!-- > + If the `suppressAuth` option is set to `true`, all permissions are overwritten, and all site members (including non-group members) can see requests to join a group. -->
   * @public
   * @requiredField groupId
   * @param groupId - ID of the group requested to join.
   * @adminMethod
   */
  function listJoinGroupRequests(groupId: string, options?: ListJoinGroupRequestsOptions): Promise<ListJoinGroupRequestsResponse>;
  interface ListJoinGroupRequestsOptions {
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
   * Creates a query to retrieve a list of join requests.
   *
   * > **Notes:**
   * + This function is only relevant for private groups.
   * + For `SECRET` groups, only site admins and group admins can query requests to join their group. <!-- However, if the `suppressAuth` option is set to `true`, all permissions are overwritten, and all site members (including non-group members) can query requests to join a group. -->
   *
   * The `queryjoinGroupRequests()` function builds a query to retrieve a list of all requests to join a group, and returns a [joinGroupRequestsQueryBuilder](#joinGroupRequestsquerybuilder) object.
   *
   * The returned object contains the query definition which is typically used to run the query using the [`find()`](#joinGroupRequestsquerybuilder/find) function.
   *
   * You can refine the query by chaining `joinGroupRequestsQueryBuilder` functions onto the query. `joinGroupRequestsQueryBuilder` functions enable you to sort, filter, and control the results that `queryjoinGroupRequests()` returns.
   *
   * The results of the `queryjoinGroupRequests()` function are sorted by `_createdDate` in descending order.
   *
   * `queryjoinGroupRequests()` runs with this `joinGroupRequestsQueryBuilder` default, which you can override:
   * + [`limit(100)`](#joinGroupRequestsquerybuilder/limit)
   *
   * The following `joinGroupRequestsQueryBuilder` functions are supported for `queryjoinGroupRequests()`. For a full description of the joinGroupRequests object, see the object returned for the [`items`](#joinGroupRequestsqueryresult/items) property in [`joinGroupRequestsQueryResult`](#joinGroupRequestsqueryresult).
   *
   * | Property                    | Supported Filters & Sorting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
   * | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `status`                    | [`eq()`](#joinGroupRequestsquerybuilder/eq), [`ne()`](#joinGroupRequestsquerybuilder/ne), [`hasSome()`](#joinGroupRequestsquerybuilder/hasSome), [`or()`](#joinGroupRequestsquerybuilder/or)                                |
   *
   * @public
   * @requiredField groupId
   * @param groupId - Group ID.
   * @adminMethod
   */
  function queryJoinGroupRequests(groupId: string, options?: QueryJoinGroupRequestsOptions): JoinGroupRequestsQueryBuilder;
  interface QueryJoinGroupRequestsOptions {
      /**
       * Ownership filter. In case of server signing `ALL` value must be used.
       * - `ALL` - All join group requests.
       * - `CURRENT_MEMBER` - Join group requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter | undefined;
  }
  interface QueryOffsetResult {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface JoinGroupRequestsQueryResult extends QueryOffsetResult {
      items: JoinGroupRequest[];
      query: JoinGroupRequestsQueryBuilder;
      next: () => Promise<JoinGroupRequestsQueryResult>;
      prev: () => Promise<JoinGroupRequestsQueryResult>;
  }
  interface JoinGroupRequestsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: 'status', value: any) => JoinGroupRequestsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: 'status', value: any) => JoinGroupRequestsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       */
      hasSome: (propertyName: 'status', value: any[]) => JoinGroupRequestsQueryBuilder;
      in: (propertyName: 'status', value: any) => JoinGroupRequestsQueryBuilder;
      exists: (propertyName: 'status', value: boolean) => JoinGroupRequestsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => JoinGroupRequestsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results. */
      skip: (skip: number) => JoinGroupRequestsQueryBuilder;
      find: () => Promise<JoinGroupRequestsQueryResult>;
  }
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function rejectAllJoinGroupRequests(): Promise<RejectAllJoinGroupRequestsResponse>;
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function approveAllJoinGroupRequests(): Promise<ApproveAllJoinGroupRequestsResponse>;
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listAllJoinGroupRequests(options?: ListAllJoinGroupRequestsOptions): Promise<ListAllJoinGroupRequestsResponse>;
  interface ListAllJoinGroupRequestsOptions {
      query?: Query;
  }
  
  type socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequest = JoinGroupRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_RequestStatus = RequestStatus;
  const socialGroupsV2JoinGroupRequest_universal_d_RequestStatus: typeof RequestStatus;
  type socialGroupsV2JoinGroupRequest_universal_d_RequestDetails = RequestDetails;
  type socialGroupsV2JoinGroupRequest_universal_d_SocialGroupsEvent = SocialGroupsEvent;
  type socialGroupsV2JoinGroupRequest_universal_d_SocialGroupsEventPayloadOneOf = SocialGroupsEventPayloadOneOf;
  type socialGroupsV2JoinGroupRequest_universal_d_MemberJoinedGroup = MemberJoinedGroup;
  type socialGroupsV2JoinGroupRequest_universal_d_MembersAddedToGroup = MembersAddedToGroup;
  type socialGroupsV2JoinGroupRequest_universal_d_JoinRequestsApproved = JoinRequestsApproved;
  type socialGroupsV2JoinGroupRequest_universal_d_MembersInvitedToGroup = MembersInvitedToGroup;
  type socialGroupsV2JoinGroupRequest_universal_d_GetJoinRequirementsRequest = GetJoinRequirementsRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_GetJoinRequirementsResponse = GetJoinRequirementsResponse;
  type socialGroupsV2JoinGroupRequest_universal_d_PaidPlan = PaidPlan;
  type socialGroupsV2JoinGroupRequest_universal_d_ViolationType = ViolationType;
  const socialGroupsV2JoinGroupRequest_universal_d_ViolationType: typeof ViolationType;
  type socialGroupsV2JoinGroupRequest_universal_d_EventsViolationOptions = EventsViolationOptions;
  type socialGroupsV2JoinGroupRequest_universal_d_PricingPlanViolationOptions = PricingPlanViolationOptions;
  type socialGroupsV2JoinGroupRequest_universal_d_MembershipQuestionViolationOptions = MembershipQuestionViolationOptions;
  type socialGroupsV2JoinGroupRequest_universal_d_Violation = Violation;
  type socialGroupsV2JoinGroupRequest_universal_d_ViolationViolationOptionsOneOf = ViolationViolationOptionsOneOf;
  type socialGroupsV2JoinGroupRequest_universal_d_SubmitJoinGroupRequestRequest = SubmitJoinGroupRequestRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_SubmitJoinGroupRequestResponse = SubmitJoinGroupRequestResponse;
  type socialGroupsV2JoinGroupRequest_universal_d_CancelJoinGroupRequestRequest = CancelJoinGroupRequestRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_CancelJoinGroupRequestResponse = CancelJoinGroupRequestResponse;
  type socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequestCancelled = JoinGroupRequestCancelled;
  type socialGroupsV2JoinGroupRequest_universal_d_ApproveJoinGroupRequestsRequest = ApproveJoinGroupRequestsRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_ItemsToUpdate = ItemsToUpdate;
  const socialGroupsV2JoinGroupRequest_universal_d_ItemsToUpdate: typeof ItemsToUpdate;
  type socialGroupsV2JoinGroupRequest_universal_d_ApproveJoinGroupRequestsResponse = ApproveJoinGroupRequestsResponse;
  type socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequestApproved = JoinGroupRequestApproved;
  type socialGroupsV2JoinGroupRequest_universal_d_RejectJoinGroupRequestsRequest = RejectJoinGroupRequestsRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_Rejection = Rejection;
  type socialGroupsV2JoinGroupRequest_universal_d_RejectJoinGroupRequestsResponse = RejectJoinGroupRequestsResponse;
  type socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequestRejected = JoinGroupRequestRejected;
  type socialGroupsV2JoinGroupRequest_universal_d_ListJoinGroupRequestsRequest = ListJoinGroupRequestsRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_OwnershipFilter = OwnershipFilter;
  const socialGroupsV2JoinGroupRequest_universal_d_OwnershipFilter: typeof OwnershipFilter;
  type socialGroupsV2JoinGroupRequest_universal_d_ListJoinGroupRequestsResponse = ListJoinGroupRequestsResponse;
  type socialGroupsV2JoinGroupRequest_universal_d_QueryJoinGroupRequestsRequest = QueryJoinGroupRequestsRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_Query = Query;
  type socialGroupsV2JoinGroupRequest_universal_d_Sorting = Sorting;
  type socialGroupsV2JoinGroupRequest_universal_d_SortOrder = SortOrder;
  const socialGroupsV2JoinGroupRequest_universal_d_SortOrder: typeof SortOrder;
  type socialGroupsV2JoinGroupRequest_universal_d_QueryJoinGroupRequestsResponse = QueryJoinGroupRequestsResponse;
  type socialGroupsV2JoinGroupRequest_universal_d_RejectAllJoinGroupRequestsRequest = RejectAllJoinGroupRequestsRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_RejectAllJoinGroupRequestsResponse = RejectAllJoinGroupRequestsResponse;
  type socialGroupsV2JoinGroupRequest_universal_d_ApproveAllJoinGroupRequestsRequest = ApproveAllJoinGroupRequestsRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_ApproveAllJoinGroupRequestsResponse = ApproveAllJoinGroupRequestsResponse;
  type socialGroupsV2JoinGroupRequest_universal_d_ListAllJoinGroupRequestsRequest = ListAllJoinGroupRequestsRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_ListAllJoinGroupRequestsResponse = ListAllJoinGroupRequestsResponse;
  type socialGroupsV2JoinGroupRequest_universal_d_DomainEvent = DomainEvent;
  type socialGroupsV2JoinGroupRequest_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type socialGroupsV2JoinGroupRequest_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type socialGroupsV2JoinGroupRequest_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type socialGroupsV2JoinGroupRequest_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type socialGroupsV2JoinGroupRequest_universal_d_ActionEvent = ActionEvent;
  type socialGroupsV2JoinGroupRequest_universal_d_MessageEnvelope = MessageEnvelope;
  type socialGroupsV2JoinGroupRequest_universal_d_IdentificationData = IdentificationData;
  type socialGroupsV2JoinGroupRequest_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type socialGroupsV2JoinGroupRequest_universal_d_WebhookIdentityType = WebhookIdentityType;
  const socialGroupsV2JoinGroupRequest_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const socialGroupsV2JoinGroupRequest_universal_d_getJoinRequirements: typeof getJoinRequirements;
  type socialGroupsV2JoinGroupRequest_universal_d_GetJoinRequirementsOptions = GetJoinRequirementsOptions;
  const socialGroupsV2JoinGroupRequest_universal_d_submitJoinGroupRequest: typeof submitJoinGroupRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_SubmitJoinGroupRequestOptions = SubmitJoinGroupRequestOptions;
  const socialGroupsV2JoinGroupRequest_universal_d_cancelJoinGroupRequest: typeof cancelJoinGroupRequest;
  const socialGroupsV2JoinGroupRequest_universal_d_approveJoinGroupRequests: typeof approveJoinGroupRequests;
  type socialGroupsV2JoinGroupRequest_universal_d_ApproveJoinGroupRequestsOptions = ApproveJoinGroupRequestsOptions;
  const socialGroupsV2JoinGroupRequest_universal_d_rejectJoinGroupRequests: typeof rejectJoinGroupRequests;
  type socialGroupsV2JoinGroupRequest_universal_d_RejectJoinGroupRequestsOptions = RejectJoinGroupRequestsOptions;
  const socialGroupsV2JoinGroupRequest_universal_d_listJoinGroupRequests: typeof listJoinGroupRequests;
  type socialGroupsV2JoinGroupRequest_universal_d_ListJoinGroupRequestsOptions = ListJoinGroupRequestsOptions;
  const socialGroupsV2JoinGroupRequest_universal_d_queryJoinGroupRequests: typeof queryJoinGroupRequests;
  type socialGroupsV2JoinGroupRequest_universal_d_QueryJoinGroupRequestsOptions = QueryJoinGroupRequestsOptions;
  type socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequestsQueryResult = JoinGroupRequestsQueryResult;
  type socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequestsQueryBuilder = JoinGroupRequestsQueryBuilder;
  const socialGroupsV2JoinGroupRequest_universal_d_rejectAllJoinGroupRequests: typeof rejectAllJoinGroupRequests;
  const socialGroupsV2JoinGroupRequest_universal_d_approveAllJoinGroupRequests: typeof approveAllJoinGroupRequests;
  const socialGroupsV2JoinGroupRequest_universal_d_listAllJoinGroupRequests: typeof listAllJoinGroupRequests;
  type socialGroupsV2JoinGroupRequest_universal_d_ListAllJoinGroupRequestsOptions = ListAllJoinGroupRequestsOptions;
  namespace socialGroupsV2JoinGroupRequest_universal_d {
    export {
      socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequest as JoinGroupRequest,
      socialGroupsV2JoinGroupRequest_universal_d_RequestStatus as RequestStatus,
      socialGroupsV2JoinGroupRequest_universal_d_RequestDetails as RequestDetails,
      socialGroupsV2JoinGroupRequest_universal_d_SocialGroupsEvent as SocialGroupsEvent,
      socialGroupsV2JoinGroupRequest_universal_d_SocialGroupsEventPayloadOneOf as SocialGroupsEventPayloadOneOf,
      socialGroupsV2JoinGroupRequest_universal_d_MemberJoinedGroup as MemberJoinedGroup,
      socialGroupsV2JoinGroupRequest_universal_d_MembersAddedToGroup as MembersAddedToGroup,
      socialGroupsV2JoinGroupRequest_universal_d_JoinRequestsApproved as JoinRequestsApproved,
      socialGroupsV2JoinGroupRequest_universal_d_MembersInvitedToGroup as MembersInvitedToGroup,
      socialGroupsV2JoinGroupRequest_universal_d_GetJoinRequirementsRequest as GetJoinRequirementsRequest,
      MembershipQuestionAnswer$1 as MembershipQuestionAnswer,
      socialGroupsV2JoinGroupRequest_universal_d_GetJoinRequirementsResponse as GetJoinRequirementsResponse,
      socialGroupsV2JoinGroupRequest_universal_d_PaidPlan as PaidPlan,
      socialGroupsV2JoinGroupRequest_universal_d_ViolationType as ViolationType,
      socialGroupsV2JoinGroupRequest_universal_d_EventsViolationOptions as EventsViolationOptions,
      socialGroupsV2JoinGroupRequest_universal_d_PricingPlanViolationOptions as PricingPlanViolationOptions,
      socialGroupsV2JoinGroupRequest_universal_d_MembershipQuestionViolationOptions as MembershipQuestionViolationOptions,
      socialGroupsV2JoinGroupRequest_universal_d_Violation as Violation,
      socialGroupsV2JoinGroupRequest_universal_d_ViolationViolationOptionsOneOf as ViolationViolationOptionsOneOf,
      socialGroupsV2JoinGroupRequest_universal_d_SubmitJoinGroupRequestRequest as SubmitJoinGroupRequestRequest,
      socialGroupsV2JoinGroupRequest_universal_d_SubmitJoinGroupRequestResponse as SubmitJoinGroupRequestResponse,
      socialGroupsV2JoinGroupRequest_universal_d_CancelJoinGroupRequestRequest as CancelJoinGroupRequestRequest,
      socialGroupsV2JoinGroupRequest_universal_d_CancelJoinGroupRequestResponse as CancelJoinGroupRequestResponse,
      socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequestCancelled as JoinGroupRequestCancelled,
      socialGroupsV2JoinGroupRequest_universal_d_ApproveJoinGroupRequestsRequest as ApproveJoinGroupRequestsRequest,
      socialGroupsV2JoinGroupRequest_universal_d_ItemsToUpdate as ItemsToUpdate,
      socialGroupsV2JoinGroupRequest_universal_d_ApproveJoinGroupRequestsResponse as ApproveJoinGroupRequestsResponse,
      socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequestApproved as JoinGroupRequestApproved,
      socialGroupsV2JoinGroupRequest_universal_d_RejectJoinGroupRequestsRequest as RejectJoinGroupRequestsRequest,
      socialGroupsV2JoinGroupRequest_universal_d_Rejection as Rejection,
      socialGroupsV2JoinGroupRequest_universal_d_RejectJoinGroupRequestsResponse as RejectJoinGroupRequestsResponse,
      socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequestRejected as JoinGroupRequestRejected,
      socialGroupsV2JoinGroupRequest_universal_d_ListJoinGroupRequestsRequest as ListJoinGroupRequestsRequest,
      socialGroupsV2JoinGroupRequest_universal_d_OwnershipFilter as OwnershipFilter,
      socialGroupsV2JoinGroupRequest_universal_d_ListJoinGroupRequestsResponse as ListJoinGroupRequestsResponse,
      PagingMetadata$1 as PagingMetadata,
      socialGroupsV2JoinGroupRequest_universal_d_QueryJoinGroupRequestsRequest as QueryJoinGroupRequestsRequest,
      socialGroupsV2JoinGroupRequest_universal_d_Query as Query,
      socialGroupsV2JoinGroupRequest_universal_d_Sorting as Sorting,
      socialGroupsV2JoinGroupRequest_universal_d_SortOrder as SortOrder,
      Paging$1 as Paging,
      socialGroupsV2JoinGroupRequest_universal_d_QueryJoinGroupRequestsResponse as QueryJoinGroupRequestsResponse,
      socialGroupsV2JoinGroupRequest_universal_d_RejectAllJoinGroupRequestsRequest as RejectAllJoinGroupRequestsRequest,
      socialGroupsV2JoinGroupRequest_universal_d_RejectAllJoinGroupRequestsResponse as RejectAllJoinGroupRequestsResponse,
      socialGroupsV2JoinGroupRequest_universal_d_ApproveAllJoinGroupRequestsRequest as ApproveAllJoinGroupRequestsRequest,
      socialGroupsV2JoinGroupRequest_universal_d_ApproveAllJoinGroupRequestsResponse as ApproveAllJoinGroupRequestsResponse,
      socialGroupsV2JoinGroupRequest_universal_d_ListAllJoinGroupRequestsRequest as ListAllJoinGroupRequestsRequest,
      socialGroupsV2JoinGroupRequest_universal_d_ListAllJoinGroupRequestsResponse as ListAllJoinGroupRequestsResponse,
      socialGroupsV2JoinGroupRequest_universal_d_DomainEvent as DomainEvent,
      socialGroupsV2JoinGroupRequest_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      socialGroupsV2JoinGroupRequest_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      socialGroupsV2JoinGroupRequest_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      socialGroupsV2JoinGroupRequest_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      socialGroupsV2JoinGroupRequest_universal_d_ActionEvent as ActionEvent,
      socialGroupsV2JoinGroupRequest_universal_d_MessageEnvelope as MessageEnvelope,
      socialGroupsV2JoinGroupRequest_universal_d_IdentificationData as IdentificationData,
      socialGroupsV2JoinGroupRequest_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      socialGroupsV2JoinGroupRequest_universal_d_WebhookIdentityType as WebhookIdentityType,
      socialGroupsV2JoinGroupRequest_universal_d_getJoinRequirements as getJoinRequirements,
      socialGroupsV2JoinGroupRequest_universal_d_GetJoinRequirementsOptions as GetJoinRequirementsOptions,
      socialGroupsV2JoinGroupRequest_universal_d_submitJoinGroupRequest as submitJoinGroupRequest,
      socialGroupsV2JoinGroupRequest_universal_d_SubmitJoinGroupRequestOptions as SubmitJoinGroupRequestOptions,
      socialGroupsV2JoinGroupRequest_universal_d_cancelJoinGroupRequest as cancelJoinGroupRequest,
      socialGroupsV2JoinGroupRequest_universal_d_approveJoinGroupRequests as approveJoinGroupRequests,
      socialGroupsV2JoinGroupRequest_universal_d_ApproveJoinGroupRequestsOptions as ApproveJoinGroupRequestsOptions,
      socialGroupsV2JoinGroupRequest_universal_d_rejectJoinGroupRequests as rejectJoinGroupRequests,
      socialGroupsV2JoinGroupRequest_universal_d_RejectJoinGroupRequestsOptions as RejectJoinGroupRequestsOptions,
      socialGroupsV2JoinGroupRequest_universal_d_listJoinGroupRequests as listJoinGroupRequests,
      socialGroupsV2JoinGroupRequest_universal_d_ListJoinGroupRequestsOptions as ListJoinGroupRequestsOptions,
      socialGroupsV2JoinGroupRequest_universal_d_queryJoinGroupRequests as queryJoinGroupRequests,
      socialGroupsV2JoinGroupRequest_universal_d_QueryJoinGroupRequestsOptions as QueryJoinGroupRequestsOptions,
      socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequestsQueryResult as JoinGroupRequestsQueryResult,
      socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequestsQueryBuilder as JoinGroupRequestsQueryBuilder,
      socialGroupsV2JoinGroupRequest_universal_d_rejectAllJoinGroupRequests as rejectAllJoinGroupRequests,
      socialGroupsV2JoinGroupRequest_universal_d_approveAllJoinGroupRequests as approveAllJoinGroupRequests,
      socialGroupsV2JoinGroupRequest_universal_d_listAllJoinGroupRequests as listAllJoinGroupRequests,
      socialGroupsV2JoinGroupRequest_universal_d_ListAllJoinGroupRequestsOptions as ListAllJoinGroupRequestsOptions,
    };
  }
  
  /**
   * Question asked to members when joining a group. Site owners can set whether it is required to answer the question in the dashboard.
   * > **Note:** Only admins can create or update membership questions.
   */
  interface MembershipQuestion {
      /**
       * Question ID.
       * @readonly
       */
      _id?: string | null;
      /** Whether a member must answer this question when joining the group. */
      required?: boolean;
      /** Question text. */
      text?: string;
  }
  interface ListMembershipQuestionsRequest {
      /** Group ID. */
      groupId: string;
  }
  interface ListMembershipQuestionsResponse {
      /** Membership questions. */
      questions?: MembershipQuestion[];
  }
  interface CreateOrReplaceAllMembershipQuestionsRequest {
      /** Group ID. */
      groupId: string;
      /** New membership questions. */
      questions?: MembershipQuestion[];
  }
  interface CreateOrReplaceAllMembershipQuestionsResponse {
      /** Membership questions. */
      questions?: MembershipQuestion[];
  }
  interface ListAnswersRequest {
      /** Group ID. */
      groupId: string;
      /** Member IDs. If no member ID is provided, answers for all members will be returned. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details. */
      memberIds?: string[];
      paging?: Paging;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListAnswersResponse {
      /** Answers to the membership questions, grouped by member. */
      memberAnswers?: MemberMembershipQuestionAnswers[];
      /** Membership questions by question ID. Inludes only questions that have been answered by the specified members. */
      questions?: Record<string, MembershipQuestion>;
      metadata?: PagingMetadata;
  }
  interface MemberMembershipQuestionAnswers {
      /** Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details. */
      memberId?: string;
      /** Answers to the membership question. */
      answers?: MembershipQuestionAnswer[];
  }
  /** Answer to a membership question. */
  interface MembershipQuestionAnswer {
      /** Question ID. */
      _id?: string;
      /** Answer text. */
      text?: string | null;
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
  interface ListAnswerCountsRequest {
      memberIds?: string[];
  }
  interface ListAnswerCountsResponse {
      memberAnswerCounts?: MemberAnswerCount[];
  }
  interface MemberAnswerCount {
      memberId?: string;
      groupId?: string;
      count?: number;
  }
  /**
   * Retrieves the membership questions for the given group.
   *
   * >**Note:**
   * >This endpoint requires [visitor or member authentication](https://dev.wix.com/docs/rest/articles/getting-started/access-types-and-permissions).
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function listMembershipQuestions(groupId: string): Promise<ListMembershipQuestionsResponse>;
  /**
   * Creates membership questions if none have been set up. Otherwise, replaces all existing questions.
   * > **Notes:**
   * > * Only admins can create or replace membership questions.
   * > * Providing an empty array means that members won't have to answer any question when joining the group.
   *
   * >**Note:**
   * >This endpoint requires [visitor or member authentication](https://dev.wix.com/docs/rest/articles/getting-started/access-types-and-permissions).
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function createOrReplaceAllMembershipQuestions(groupId: string, options?: CreateOrReplaceAllMembershipQuestionsOptions): Promise<CreateOrReplaceAllMembershipQuestionsResponse>;
  interface CreateOrReplaceAllMembershipQuestionsOptions {
      /** New membership questions. */
      questions?: MembershipQuestion[];
  }
  /**
   * Retrieves the answers to the membership questions, given the provided filters.
   *
   * >**Note:**
   * >This endpoint requires [visitor or member authentication](https://dev.wix.com/docs/rest/articles/getting-started/access-types-and-permissions).
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   * @adminMethod
   */
  function listAnswers(groupId: string, options?: ListAnswersOptions): Promise<ListAnswersResponse>;
  interface ListAnswersOptions {
      /** Member IDs. If no member ID is provided, answers for all members will be returned. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details. */
      memberIds?: string[];
      paging?: Paging;
  }
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listAnswerCounts(options?: ListAnswerCountsOptions): Promise<ListAnswerCountsResponse>;
  interface ListAnswerCountsOptions {
      memberIds?: string[];
  }
  
  type socialGroupsV2MembershipQuestion_universal_d_MembershipQuestion = MembershipQuestion;
  type socialGroupsV2MembershipQuestion_universal_d_ListMembershipQuestionsRequest = ListMembershipQuestionsRequest;
  type socialGroupsV2MembershipQuestion_universal_d_ListMembershipQuestionsResponse = ListMembershipQuestionsResponse;
  type socialGroupsV2MembershipQuestion_universal_d_CreateOrReplaceAllMembershipQuestionsRequest = CreateOrReplaceAllMembershipQuestionsRequest;
  type socialGroupsV2MembershipQuestion_universal_d_CreateOrReplaceAllMembershipQuestionsResponse = CreateOrReplaceAllMembershipQuestionsResponse;
  type socialGroupsV2MembershipQuestion_universal_d_ListAnswersRequest = ListAnswersRequest;
  type socialGroupsV2MembershipQuestion_universal_d_Paging = Paging;
  type socialGroupsV2MembershipQuestion_universal_d_ListAnswersResponse = ListAnswersResponse;
  type socialGroupsV2MembershipQuestion_universal_d_MemberMembershipQuestionAnswers = MemberMembershipQuestionAnswers;
  type socialGroupsV2MembershipQuestion_universal_d_MembershipQuestionAnswer = MembershipQuestionAnswer;
  type socialGroupsV2MembershipQuestion_universal_d_PagingMetadata = PagingMetadata;
  type socialGroupsV2MembershipQuestion_universal_d_ListAnswerCountsRequest = ListAnswerCountsRequest;
  type socialGroupsV2MembershipQuestion_universal_d_ListAnswerCountsResponse = ListAnswerCountsResponse;
  type socialGroupsV2MembershipQuestion_universal_d_MemberAnswerCount = MemberAnswerCount;
  const socialGroupsV2MembershipQuestion_universal_d_listMembershipQuestions: typeof listMembershipQuestions;
  const socialGroupsV2MembershipQuestion_universal_d_createOrReplaceAllMembershipQuestions: typeof createOrReplaceAllMembershipQuestions;
  type socialGroupsV2MembershipQuestion_universal_d_CreateOrReplaceAllMembershipQuestionsOptions = CreateOrReplaceAllMembershipQuestionsOptions;
  const socialGroupsV2MembershipQuestion_universal_d_listAnswers: typeof listAnswers;
  type socialGroupsV2MembershipQuestion_universal_d_ListAnswersOptions = ListAnswersOptions;
  const socialGroupsV2MembershipQuestion_universal_d_listAnswerCounts: typeof listAnswerCounts;
  type socialGroupsV2MembershipQuestion_universal_d_ListAnswerCountsOptions = ListAnswerCountsOptions;
  namespace socialGroupsV2MembershipQuestion_universal_d {
    export {
      socialGroupsV2MembershipQuestion_universal_d_MembershipQuestion as MembershipQuestion,
      socialGroupsV2MembershipQuestion_universal_d_ListMembershipQuestionsRequest as ListMembershipQuestionsRequest,
      socialGroupsV2MembershipQuestion_universal_d_ListMembershipQuestionsResponse as ListMembershipQuestionsResponse,
      socialGroupsV2MembershipQuestion_universal_d_CreateOrReplaceAllMembershipQuestionsRequest as CreateOrReplaceAllMembershipQuestionsRequest,
      socialGroupsV2MembershipQuestion_universal_d_CreateOrReplaceAllMembershipQuestionsResponse as CreateOrReplaceAllMembershipQuestionsResponse,
      socialGroupsV2MembershipQuestion_universal_d_ListAnswersRequest as ListAnswersRequest,
      socialGroupsV2MembershipQuestion_universal_d_Paging as Paging,
      socialGroupsV2MembershipQuestion_universal_d_ListAnswersResponse as ListAnswersResponse,
      socialGroupsV2MembershipQuestion_universal_d_MemberMembershipQuestionAnswers as MemberMembershipQuestionAnswers,
      socialGroupsV2MembershipQuestion_universal_d_MembershipQuestionAnswer as MembershipQuestionAnswer,
      socialGroupsV2MembershipQuestion_universal_d_PagingMetadata as PagingMetadata,
      socialGroupsV2MembershipQuestion_universal_d_ListAnswerCountsRequest as ListAnswerCountsRequest,
      socialGroupsV2MembershipQuestion_universal_d_ListAnswerCountsResponse as ListAnswerCountsResponse,
      socialGroupsV2MembershipQuestion_universal_d_MemberAnswerCount as MemberAnswerCount,
      socialGroupsV2MembershipQuestion_universal_d_listMembershipQuestions as listMembershipQuestions,
      socialGroupsV2MembershipQuestion_universal_d_createOrReplaceAllMembershipQuestions as createOrReplaceAllMembershipQuestions,
      socialGroupsV2MembershipQuestion_universal_d_CreateOrReplaceAllMembershipQuestionsOptions as CreateOrReplaceAllMembershipQuestionsOptions,
      socialGroupsV2MembershipQuestion_universal_d_listAnswers as listAnswers,
      socialGroupsV2MembershipQuestion_universal_d_ListAnswersOptions as ListAnswersOptions,
      socialGroupsV2MembershipQuestion_universal_d_listAnswerCounts as listAnswerCounts,
      socialGroupsV2MembershipQuestion_universal_d_ListAnswerCountsOptions as ListAnswerCountsOptions,
    };
  }
  
  export { socialGroupsV2GroupRequest_universal_d as groupRequests, socialGroupsV2Group_universal_d as groups, socialGroupsV2JoinGroupRequest_universal_d as joinGroupRequests, socialGroupsV2GroupMember_universal_d as members, socialGroupsV2MembershipQuestion_universal_d as membershipQuestions, socialGroupsV2GroupRole_universal_d as roles, socialGroupsV2GroupRules_universal_d as rules };
}
