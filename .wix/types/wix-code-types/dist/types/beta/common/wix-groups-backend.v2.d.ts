declare module "wix-groups-backend.v2" {
  const __debug$6: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * Guidelines ensuring that members post responsibly and respectfully. Site owners can set up Group Rules in the Business Manager.
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
  /**
   * Retrieves rules.
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function listRules(groupId: string): Promise<ListRulesResponse>;
  /**
   * Creates rules if no rules have been set up. Otherwise, replaces all existing rules.
   * > **Note:** Only admins can create or replace rules.
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
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
      __debug$6 as __debug,
      socialGroupsV2GroupRules_universal_d_GroupRules as GroupRules,
      socialGroupsV2GroupRules_universal_d_GroupRule as GroupRule,
      socialGroupsV2GroupRules_universal_d_ListRulesRequest as ListRulesRequest,
      socialGroupsV2GroupRules_universal_d_ListRulesResponse as ListRulesResponse,
      socialGroupsV2GroupRules_universal_d_CreateOrReplaceAllRulesRequest as CreateOrReplaceAllRulesRequest,
      socialGroupsV2GroupRules_universal_d_CreateOrReplaceAllRulesResponse as CreateOrReplaceAllRulesResponse,
      socialGroupsV2GroupRules_universal_d_Empty as Empty,
      socialGroupsV2GroupRules_universal_d_ListTemplatesResponse as ListTemplatesResponse,
      socialGroupsV2GroupRules_universal_d_listRules as listRules,
      socialGroupsV2GroupRules_universal_d_createOrReplaceAllRules as createOrReplaceAllRules,
      socialGroupsV2GroupRules_universal_d_CreateOrReplaceAllRulesOptions as CreateOrReplaceAllRulesOptions,
      socialGroupsV2GroupRules_universal_d_listTemplates as listTemplates,
    };
  }
  
  const __debug$5: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Group$1 {
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
      details?: GroupDetails$1;
      /** What group members are called, for example `Coworkers`, `Friends`, or `Students`. */
      memberTitle?: string | null;
      /** Cover image. You cannot upload your own cover image. */
      coverImage?: CoverImage$1;
      /** Group specific settings. Available to the site owners under `Admin Tools` in the Business Manager. */
      settings?: GroupSettings$1;
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
      type?: Type$1;
      events?: Events$1;
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
       * __Deprecated.__ Use `membersCanInvite` instead.
       * This property will be removed on June 30, 2022.
       */
      membersPermittedToInvite?: boolean | null;
      /**
       * Whether regular members are permitted to invite new members.
       * If `false`, only admins can invite members. Defaults to `true`.
       */
      membersCanInvite?: boolean | null;
      /**
       * __Deprecated.__ Use `membersCanApprove` instead.
       * This property will be removed on June 30, 2022.
       */
      membersPermittedToApprove?: boolean | null;
      /**
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
      group?: Group$1;
      /** ID of the member who created the group. This member will automatically become an admin. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details. */
      creatorId?: string | null;
      /**
       * Group ID.
       * @internal
       */
      groupId?: string | null;
  }
  interface CreateGroupResponse {
      /** Created group. */
      group?: Group$1;
  }
  interface UpdateGroupRequest {
      /** Group to update. */
      group?: Group$1;
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
  }
  interface GetGroupResponse {
      /** Retrieved group. */
      group?: Group$1;
  }
  interface GetGroupBySlugRequest {
      /** Unique part of the group's URL, for example `group-1` in `https:/example.com/groups/group-1`. Pass only the slug. Case-sensitive. */
      slug: string;
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
  }
  interface QueryJoinedGroupsResponse {
      /** Retrieved groups. */
      groups?: Group$1[];
      metadata?: PagingMetadata$4;
  }
  interface QueryGroupsByMembershipRequest {
      query?: Query$3;
      membershipStatus?: MembershipStatus$1;
  }
  enum MembershipStatus$1 {
      NONE = "NONE",
      JOINED = "JOINED",
      PENDING = "PENDING"
  }
  interface QueryGroupsByMembershipResponse {
      /** Retrieved groups. */
      groups?: Group$1[];
      metadata?: PagingMetadata$4;
  }
  /**
   * Creates a group.
   * >**Notes:**
   * > + The site owners may not allow members to create groups.
   * > + Specify a `creatorId` to set the group's creator.
   * > + The group's creator will automatically become an admin.
   * @public
   * @documentationMaturity preview
   */
  function createGroup(options?: CreateGroupOptions): Promise<CreateGroupResponse>;
  interface CreateGroupOptions {
      /** Group to create. */
      group?: Group$1;
      /** ID of the member who created the group. This member will automatically become an admin. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details. */
      creatorId?: string | null;
      /**
       * Group ID.
       * @internal
       */
      groupId?: string | null;
  }
  /**
   * Updates a group.
   * >**Note:**
   * > + Only admins can update a group.
   * > + When `group.privacyLevel` is updated from `PRIVATE` to `PUBLIC`, all pending group join requests are automatically approved.
   * > + When `group.privacyLevel` is updated from `PRIVATE` to `SECRET`, all pending group join requests are automatically rejected.
   * @param _id - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function updateGroup(_id: string | null, options?: UpdateGroupOptions): Promise<UpdateGroupResponse>;
  interface UpdateGroupOptions {
      group: {
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
          details?: GroupDetails$1;
          /** What group members are called, for example `Coworkers`, `Friends`, or `Students`. */
          memberTitle?: string | null;
          /** Cover image. You cannot upload your own cover image. */
          coverImage?: CoverImage$1;
          /** Group specific settings. Available to the site owners under `Admin Tools` in the Business Manager. */
          settings?: GroupSettings$1;
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
      };
  }
  /**
   * Hides a group from the Group List or cancels group request.
   * >**Notes:**
   * > + Only admins can delete a group.
   * > + The group will no longer be visible in the live site or the Wix business manager.
   * > + It is not possible to restore the group via the [Update Group](https://dev.wix.com/api/rest/wix-groups/groups/group/update-group) endpoint into the live site.
   * > + It is still possible to retrieve the group via the [Get Group](https://dev.wix.com/api/rest/wix-groups/groups/group/get-group), [List Groups](https://dev.wix.com/api/rest/wix-groups/groups/group/list-groups) and [Query Groups](https://dev.wix.com/api/rest/wix-groups/groups/group/query-groups) endpoints.
   * @param groupId - ID of the group to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function deleteGroup(groupId: string): Promise<DeleteGroupResponse>;
  /**
   * Retrieves a group.
   * @param groupId - ID of the group to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function getGroup(groupId: string): Promise<GetGroupResponse>;
  /**
   * Retrieves a group by slug.
   * @param slug - Unique part of the group's URL, for example `group-1` in `https:/example.com/groups/group-1`. Pass only the slug. Case-sensitive.
   * @public
   * @documentationMaturity preview
   * @requiredField slug
   */
  function getGroupBySlug(slug: string): Promise<GetGroupBySlugResponse>;
  /**
   * Retrieves up to 100 groups.
   * @public
   * @documentationMaturity preview
   */
  function listGroups(options?: ListGroupsOptions): Promise<ListGroupsResponse>;
  interface ListGroupsOptions {
      /** Number of items to load. Maximum `100`. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  /**
   * Retrieves a list of all groups user is member of from all sites. Expects Wix User authorization.
   * Used in My Activity widget inside of Spaces App
   * @internal
   * @documentationMaturity preview
   */
  function listGroupsByUserId(): Promise<ListGroupsByUserIdResponse>;
  /**
   * Retrieves up to 100 groups, given the provided paging, filtering, and sorting.
   *
   * Supported fields for filtering:
   * - `title`
   *
   * Supported fields for sorting:
   * - `title`
   * - `createdDate`
   * - `membersCount`
   * - `recentActivityDate`
   * @public
   * @documentationMaturity preview
   */
  function queryGroups(options?: QueryGroupsOptions): Promise<QueryGroupsResponse>;
  interface QueryGroupsOptions {
      query?: Query$3;
  }
  /**
   * Retrieves groups that the current member has joined (deprecated, use `QueryGroupsByMembership`).
   * @internal
   * @documentationMaturity preview
   */
  function queryJoinedGroups(options?: QueryJoinedGroupsOptions): Promise<QueryJoinedGroupsResponse>;
  interface QueryJoinedGroupsOptions {
      query?: Query$3;
  }
  /**
   * Retrieves groups by membership status for the current member.
   * @internal
   * @documentationMaturity preview
   */
  function queryGroupsByMembership(options?: QueryGroupsByMembershipOptions): Promise<QueryGroupsByMembershipResponse>;
  interface QueryGroupsByMembershipOptions {
      query?: Query$3;
      membershipStatus?: MembershipStatus$1;
  }
  
  type socialGroupsV2Group_universal_d_CreateGroupRequest = CreateGroupRequest;
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
  type socialGroupsV2Group_universal_d_QueryGroupsByMembershipResponse = QueryGroupsByMembershipResponse;
  const socialGroupsV2Group_universal_d_createGroup: typeof createGroup;
  type socialGroupsV2Group_universal_d_CreateGroupOptions = CreateGroupOptions;
  const socialGroupsV2Group_universal_d_updateGroup: typeof updateGroup;
  type socialGroupsV2Group_universal_d_UpdateGroupOptions = UpdateGroupOptions;
  const socialGroupsV2Group_universal_d_deleteGroup: typeof deleteGroup;
  const socialGroupsV2Group_universal_d_getGroup: typeof getGroup;
  const socialGroupsV2Group_universal_d_getGroupBySlug: typeof getGroupBySlug;
  const socialGroupsV2Group_universal_d_listGroups: typeof listGroups;
  type socialGroupsV2Group_universal_d_ListGroupsOptions = ListGroupsOptions;
  const socialGroupsV2Group_universal_d_listGroupsByUserId: typeof listGroupsByUserId;
  const socialGroupsV2Group_universal_d_queryGroups: typeof queryGroups;
  type socialGroupsV2Group_universal_d_QueryGroupsOptions = QueryGroupsOptions;
  const socialGroupsV2Group_universal_d_queryJoinedGroups: typeof queryJoinedGroups;
  type socialGroupsV2Group_universal_d_QueryJoinedGroupsOptions = QueryJoinedGroupsOptions;
  const socialGroupsV2Group_universal_d_queryGroupsByMembership: typeof queryGroupsByMembership;
  type socialGroupsV2Group_universal_d_QueryGroupsByMembershipOptions = QueryGroupsByMembershipOptions;
  namespace socialGroupsV2Group_universal_d {
    export {
      __debug$5 as __debug,
      Group$1 as Group,
      Type$1 as Type,
      Events$1 as Events,
      Logo$1 as Logo,
      GroupDetailsPosition$1 as GroupDetailsPosition,
      Image$1 as Image,
      Position$1 as Position,
      PrivacyStatus$1 as PrivacyStatus,
      AccessRestriction$1 as AccessRestriction,
      AccessRestrictionDataOneOf$1 as AccessRestrictionDataOneOf,
      GroupDetails$1 as GroupDetails,
      CoverImage$1 as CoverImage,
      GroupSettings$1 as GroupSettings,
      Identity$1 as Identity,
      IdentityType$1 as IdentityType,
      socialGroupsV2Group_universal_d_CreateGroupRequest as CreateGroupRequest,
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
      socialGroupsV2Group_universal_d_QueryGroupsByMembershipResponse as QueryGroupsByMembershipResponse,
      socialGroupsV2Group_universal_d_createGroup as createGroup,
      socialGroupsV2Group_universal_d_CreateGroupOptions as CreateGroupOptions,
      socialGroupsV2Group_universal_d_updateGroup as updateGroup,
      socialGroupsV2Group_universal_d_UpdateGroupOptions as UpdateGroupOptions,
      socialGroupsV2Group_universal_d_deleteGroup as deleteGroup,
      socialGroupsV2Group_universal_d_getGroup as getGroup,
      socialGroupsV2Group_universal_d_getGroupBySlug as getGroupBySlug,
      socialGroupsV2Group_universal_d_listGroups as listGroups,
      socialGroupsV2Group_universal_d_ListGroupsOptions as ListGroupsOptions,
      socialGroupsV2Group_universal_d_listGroupsByUserId as listGroupsByUserId,
      socialGroupsV2Group_universal_d_queryGroups as queryGroups,
      socialGroupsV2Group_universal_d_QueryGroupsOptions as QueryGroupsOptions,
      socialGroupsV2Group_universal_d_queryJoinedGroups as queryJoinedGroups,
      socialGroupsV2Group_universal_d_QueryJoinedGroupsOptions as QueryJoinedGroupsOptions,
      socialGroupsV2Group_universal_d_queryGroupsByMembership as queryGroupsByMembership,
      socialGroupsV2Group_universal_d_QueryGroupsByMembershipOptions as QueryGroupsByMembershipOptions,
    };
  }
  
  const __debug$4: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface GroupMember$1 {
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
       * Member's role.
       * - `MEMBER` - Regular group member.
       * - `ADMIN` - Group administrator.
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
       * __Deprecated.__ Use `memberIds` instead.
       * This parameter will be removed on June 30, 2022.
       */
      siteMemberIds?: string[];
      /** Member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
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
       * __Deprecated.__ Use `memberIds` instead.
       * This parameter will be removed on June 30, 2022.
       */
      siteMemberIds?: string[];
      /** Member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
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
      /** Number of items to skip in the current sort order. */
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
       * __Deprecated.__ Use `memberId` instead.
       * This parameter will be removed on June 30, 2022.
       * @internal
       */
      siteMemberId?: string | null;
      /** Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
      memberId: string | null;
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListMembershipsResponse {
      /** Site member's memberships. */
      memberships?: Membership[];
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
       * - `JOINED` - Site member is a group member.
       * - `PENDING` - Site member has submitted a Join Request for this group that is still `PENDING`.
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
       * __Deprecated.__ Use the `memberId` path parameter instead.
       * This parameter will be removed on June 30, 2022.
       */
      siteMemberId?: string | null;
      /** Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
      memberId: string | null;
      query?: Query$2;
  }
  interface QueryMembershipsResponse {
      /** Site member's memberships. */
      memberships?: Membership[];
      metadata?: PagingMetadata$3;
  }
  /**
   * Join a specific group.
   * Site owners can use it for groups with any privacy level and automatically receives `ADMIN` group role. A site member can use it only for public groups.
   * This endpoint doesn't support server signing.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
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
   */
  function leaveGroup(groupId: string): Promise<void>;
  /**
   * Add site members to a specific group.
   * Admins always have access to this functionality. Site owners may allow members to use this functionality as well.
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function addGroupMembers(groupId: string, options?: AddGroupMembersOptions): Promise<AddGroupMembersResponse>;
  interface AddGroupMembersOptions {
      /**
       * __Deprecated.__ Use `memberIds` instead.
       * This parameter will be removed on June 30, 2022.
       */
      siteMemberIds?: string[];
      /** Member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
      memberIds?: string[];
      /**
       * Whether to send invitations to private site members. Defaults to `true`.
       * @internal
       */
      invitePrivateMembers?: boolean | null;
  }
  /**
   * Removes site members from a specific group.
   * Only admins have can remove members from a group.
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function removeGroupMembers(groupId: string, options?: RemoveGroupMembersOptions): Promise<void>;
  interface RemoveGroupMembersOptions {
      /**
       * __Deprecated.__ Use `memberIds` instead.
       * This parameter will be removed on June 30, 2022.
       */
      siteMemberIds?: string[];
      /** Member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
      memberIds?: string[];
  }
  /**
   * Retrieves a list of up to 100 group members, given the provided paging.
   * Groups mangers can retrieve group members of any group.
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function listGroupMembers(groupId: string, options?: ListGroupMembersOptions): Promise<ListGroupMembersResponse>;
  interface ListGroupMembersOptions {
      /** Number of items to load. Maximum `100.` */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
      /**
       * Return members who left groups (internal, used for history in analytics)
       * @internal
       */
      includeDeleted?: boolean;
  }
  /**
   * Retrieves a list of up to 100 group members, given the provided paging, sorting and filtering.
   * Groups mangers can retrieve group members of any group.
   *
   * Supported fields for filtering:
   * - `role`
   *
   * Supported fields for sorting:
   * - `joinedOn`
   * - `role`
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function queryGroupMembers(groupId: string, options?: QueryGroupMembersOptions): Promise<QueryGroupMembersResponse>;
  interface QueryGroupMembersOptions {
      query?: Query$2;
  }
  /**
   * Don't expose to 3rd parties! (Use GroupMembersWithProfilesService.QueryNonGroupMembersWithProfiles)
   * @param groupId - Group ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function queryNonGroupMembers(groupId: string, options?: QueryNonGroupMembersOptions): Promise<QueryNonGroupMembersResponse>;
  interface QueryNonGroupMembersOptions {
      query?: Query$2;
  }
  /**
   * Retrieves a list of up to 100 members and their membership status, given the provided paging.
   * Groups mangers can see all memberships for any group.
   * @param memberId - Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details.
   * @public
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function listMemberships(memberId: string | null, options?: ListMembershipsOptions): Promise<ListMembershipsResponse>;
  interface ListMembershipsOptions {
      /**
       * __Deprecated.__ Use `memberId` instead.
       * This parameter will be removed on June 30, 2022.
       * @internal
       */
      siteMemberId?: string | null;
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  /**
   * Retrieves a list of up to 100 members and their membership status, given the provided paging and filtering.
   * Groups mangers can see all memberships for any group.
   *
   * Supported fields for filtering:
   * - `role`
   * - `status`
   *
   * No supported fields for sorting.
   * @param memberId - Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details.
   * @public
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function queryMemberships(memberId: string | null, options?: QueryMembershipsOptions): Promise<QueryMembershipsResponse>;
  interface QueryMembershipsOptions {
      /**
       * __Deprecated.__ Use the `memberId` path parameter instead.
       * This parameter will be removed on June 30, 2022.
       */
      siteMemberId?: string | null;
      query?: Query$2;
  }
  
  type socialGroupsV2GroupMember_universal_d_JoinRequest = JoinRequest;
  type socialGroupsV2GroupMember_universal_d_JoinResponse = JoinResponse;
  type socialGroupsV2GroupMember_universal_d_MemberJoined = MemberJoined;
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
  type socialGroupsV2GroupMember_universal_d_QueryGroupMembersOptions = QueryGroupMembersOptions;
  const socialGroupsV2GroupMember_universal_d_queryNonGroupMembers: typeof queryNonGroupMembers;
  type socialGroupsV2GroupMember_universal_d_QueryNonGroupMembersOptions = QueryNonGroupMembersOptions;
  const socialGroupsV2GroupMember_universal_d_listMemberships: typeof listMemberships;
  type socialGroupsV2GroupMember_universal_d_ListMembershipsOptions = ListMembershipsOptions;
  const socialGroupsV2GroupMember_universal_d_queryMemberships: typeof queryMemberships;
  type socialGroupsV2GroupMember_universal_d_QueryMembershipsOptions = QueryMembershipsOptions;
  namespace socialGroupsV2GroupMember_universal_d {
    export {
      __debug$4 as __debug,
      GroupMember$1 as GroupMember,
      GroupRole$1 as GroupRole,
      Role$1 as Role,
      socialGroupsV2GroupMember_universal_d_JoinRequest as JoinRequest,
      MembershipQuestionAnswer$2 as MembershipQuestionAnswer,
      socialGroupsV2GroupMember_universal_d_JoinResponse as JoinResponse,
      socialGroupsV2GroupMember_universal_d_MemberJoined as MemberJoined,
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
      socialGroupsV2GroupMember_universal_d_QueryGroupMembersOptions as QueryGroupMembersOptions,
      socialGroupsV2GroupMember_universal_d_queryNonGroupMembers as queryNonGroupMembers,
      socialGroupsV2GroupMember_universal_d_QueryNonGroupMembersOptions as QueryNonGroupMembersOptions,
      socialGroupsV2GroupMember_universal_d_listMemberships as listMemberships,
      socialGroupsV2GroupMember_universal_d_ListMembershipsOptions as ListMembershipsOptions,
      socialGroupsV2GroupMember_universal_d_queryMemberships as queryMemberships,
      socialGroupsV2GroupMember_universal_d_QueryMembershipsOptions as QueryMembershipsOptions,
    };
  }
  
  const __debug$3: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
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
       * Group request ID
       * @readonly
       */
      _id?: string | null;
      /** Group requested for creation. */
      group?: Group;
      /**
       * Status of group request.
       * - `PENDING` - Pending group request.
       * - `APPROVED` - Approved group request.
       * - `REJECTED` - Rejected group request.
       * - `CANCELED` - Canceled group request.
       */
      status?: RequestStatus$1;
      /** Group request details. */
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
      /** Group specific settings. Available to the site owners under `Admin Tools` in the Business Manager. */
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
      type?: Type;
      events?: Events;
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
       * __Deprecated.__ Use `membersCanInvite` instead.
       * This property will be removed on June 30, 2022.
       */
      membersPermittedToInvite?: boolean | null;
      /**
       * Whether regular members are permitted to invite new members.
       * If `false`, only admins can invite members. Defaults to `true`.
       */
      membersCanInvite?: boolean | null;
      /**
       * __Deprecated.__ Use `membersCanApprove` instead.
       * This property will be removed on June 30, 2022.
       */
      membersPermittedToApprove?: boolean | null;
      /**
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
      /** Group Request IDs to approve. Limited to `100`. */
      groupRequestIds?: string[];
  }
  enum ItemsToUpdate$1 {
      /** Take into account only items which are listed in request. */
      BY_ID = "BY_ID",
      /** Update all items. */
      ALL_ITEMS = "ALL_ITEMS"
  }
  interface ApproveGroupRequestsResponse {
      /** Approved Group Requests. */
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
      /** ID of the Group Request to reject. */
      groupRequestId?: string;
      /** Rejection reason. Free text displayed to the creator of the rejected Group Request. Limited to 1,000 characters. */
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
      /** Group Requests. */
      groupRequests?: GroupRequest[];
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
  }
  enum SortOrder$1 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging$2 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryGroupRequestsResponse {
      /** Retrieved Group Requests. */
      groupRequests?: GroupRequest[];
      metadata?: PagingMetadata$2;
  }
  /**
   * Submit a group request.
   * Can be used in case `GroupsAppSettings.create_groups_policy` = `MEMBERS_WITH_APPROVAL`.
   * This endpoint doesn't support server signing.
   * @internal
   * @documentationMaturity preview
   */
  function submitGroupRequest(options?: SubmitGroupRequestOptions): Promise<SubmitGroupRequestResponse>;
  interface SubmitGroupRequestOptions {
      /** Group submitted for creation. */
      group?: Group;
  }
  /**
   * Approves Group Requests.
   * Only admins can approve Group Requests.
   * @public
   * @documentationMaturity preview
   */
  function approveGroupRequests(options?: ApproveGroupRequestsOptions): Promise<ApproveGroupRequestsResponse>;
  interface ApproveGroupRequestsOptions {
      /**
       * Which items to approve.
       * @internal
       */
      itemsToApprove?: ItemsToUpdate$1;
      /** Group Request IDs to approve. Limited to `100`. */
      groupRequestIds?: string[];
  }
  /**
   * Rejects Group Requests.
   * Only admins can reject Group Requests.
   * @public
   * @documentationMaturity preview
   */
  function rejectGroupRequests(options?: RejectGroupRequestsOptions): Promise<RejectGroupRequestsResponse>;
  interface RejectGroupRequestsOptions {
      /**
       * Which items to reject.
       * @internal
       */
      itemsToReject?: ItemsToUpdate$1;
      /** Rejection data. */
      rejections?: Rejection$1[];
  }
  /**
   * Cancels a Group Request.
   * Group managers always have access to this functionality. Site members can cancel their own group requests.
   * This endpoint doesn't support server signing.
   * @param groupRequestId - ID of the Group Request to cancel.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupRequestId
   */
  function cancelGroupRequest(groupRequestId: string): Promise<CancelGroupRequestResponse>;
  /**
   * Lists group requests across the site.
   * @public
   * @documentationMaturity preview
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
      /** Number of items to load. Maximum `100`. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  /**
   * Retrieves a list of groups requests across the site.
   *
   * Supported fields for filtering:
   * - `status`
   *
   * Supported fields for sorting:
   * - `createdDate`
   * @public
   * @documentationMaturity preview
   */
  function queryGroupRequests(options?: QueryGroupRequestsOptions): Promise<QueryGroupRequestsResponse>;
  interface QueryGroupRequestsOptions {
      /**
       * Ownership filter. In case of server signing `ALL` value has to be used.
       * - `ALL` - All group requests.
       * - `CURRENT_MEMBER` - Group requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter$1;
      query?: Query$1;
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
  namespace socialGroupsV2GroupRequest_universal_d {
    export {
      __debug$3 as __debug,
      socialGroupsV2GroupRequest_universal_d_GroupRequest as GroupRequest,
      socialGroupsV2GroupRequest_universal_d_Group as Group,
      socialGroupsV2GroupRequest_universal_d_Type as Type,
      socialGroupsV2GroupRequest_universal_d_Events as Events,
      socialGroupsV2GroupRequest_universal_d_Logo as Logo,
      socialGroupsV2GroupRequest_universal_d_GroupDetailsPosition as GroupDetailsPosition,
      socialGroupsV2GroupRequest_universal_d_Image as Image,
      socialGroupsV2GroupRequest_universal_d_Position as Position,
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
    };
  }
  
  const __debug$2: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
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
       * __Deprecated.__ Use `memberIds` instead.
       * This parameter will be removed on June 30, 2022.
       */
      siteMemberIds?: string[];
      /** Member IDs. Limited to 100 member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
      memberIds?: string[];
      /** Role to assign. */
      role?: GroupRole;
  }
  interface AssignRoleResponse {
      /** Group ID. */
      groupId?: string;
      /**
       * __Deprecated.__ Use `memberIds` instead.
       * This parameter will be removed on June 30, 2022.
       */
      siteMemberIds?: string[];
      /** Member IDs. Limited to 100 member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
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
       * __Deprecated.__ Use `memberIds` instead.
       * This parameter will be removed on June 30, 2022.
       */
      siteMemberIds?: string[];
      /** Member IDs. Limited to 100 member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
      memberIds?: string[];
      /** Role to unassign. */
      role?: GroupRole;
  }
  interface UnassignRoleResponse {
      /** Group ID. */
      groupId?: string;
      /** Member IDs. Limited to 100 member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
      siteMemberIds?: string[];
      /** Member IDs. Limited to 100 member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
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
  /**
   * Assigns a specific role to members.
   * >**Notes:**
   * > + Only admins can assign roles.
   * > + You cannot create new members via this endpoint.
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function assignRole(groupId: string, options?: AssignRoleOptions): Promise<AssignRoleResponse>;
  interface AssignRoleOptions {
      /**
       * __Deprecated.__ Use `memberIds` instead.
       * This parameter will be removed on June 30, 2022.
       */
      siteMemberIds?: string[];
      /** Member IDs. Limited to 100 member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
      memberIds?: string[];
      /** Role to assign. */
      role?: GroupRole;
  }
  /**
   * Unassigns a role from members.
   * >**Notes:**
   * > + Only admins can unassign roles.
   * > + You cannot remove members via this endpoint.
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function unassignRole(groupId: string, options?: UnassignRoleOptions): Promise<UnassignRoleResponse>;
  interface UnassignRoleOptions {
      /**
       * __Deprecated.__ Use `memberIds` instead.
       * This parameter will be removed on June 30, 2022.
       */
      siteMemberIds?: string[];
      /** Member IDs. Limited to 100 member IDs. See [Members API](https://dev.wix.com/api/rest/members/members/member-object) for details. */
      memberIds?: string[];
      /** Role to unassign. */
      role?: GroupRole;
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
      __debug$2 as __debug,
      socialGroupsV2GroupRole_universal_d_GroupRole as GroupRole,
      socialGroupsV2GroupRole_universal_d_Role as Role,
      socialGroupsV2GroupRole_universal_d_AssignRoleRequest as AssignRoleRequest,
      socialGroupsV2GroupRole_universal_d_AssignRoleResponse as AssignRoleResponse,
      socialGroupsV2GroupRole_universal_d_RoleAssignedToGroupMember as RoleAssignedToGroupMember,
      socialGroupsV2GroupRole_universal_d_GroupMember as GroupMember,
      socialGroupsV2GroupRole_universal_d_UnassignRoleRequest as UnassignRoleRequest,
      socialGroupsV2GroupRole_universal_d_UnassignRoleResponse as UnassignRoleResponse,
      socialGroupsV2GroupRole_universal_d_RoleUnassignedFromGroupMember as RoleUnassignedFromGroupMember,
      socialGroupsV2GroupRole_universal_d_assignRole as assignRole,
      socialGroupsV2GroupRole_universal_d_AssignRoleOptions as AssignRoleOptions,
      socialGroupsV2GroupRole_universal_d_unassignRole as unassignRole,
      socialGroupsV2GroupRole_universal_d_UnassignRoleOptions as UnassignRoleOptions,
    };
  }
  
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * To join a private group, a site member must submit a Join Request, which can be approved or rejected by an admin.
   * When the request is approved, the site member becomes a group member.
   */
  interface JoinGroupRequest {
      /**
       * Member ID. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details.
       * @readonly
       */
      siteMemberId?: string;
      /**
       * Join group request status.
       * - `PENDING` - Pending join group request.
       * - `APPROVED` - Approved join group request.
       * - `REJECTED` - Rejected join group request.
       * - `CANCELED` - Canceled join group request.
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
       * Id of the group
       * @internal
       * @readonly
       */
      groupId?: string | null;
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
  interface GetJoinRequirementsRequest {
      /** Group ID. */
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
      violationType?: ViolationType;
      eventsOptions?: EventsViolationOptions;
      pricingPlansOptions?: PricingPlanViolationOptions;
      membershipQuestionsOptions?: MembershipQuestionViolationOptions;
  }
  /** @oneof */
  interface ViolationViolationOptionsOneOf {
      eventsOptions?: EventsViolationOptions;
      pricingPlansOptions?: PricingPlanViolationOptions;
      membershipQuestionsOptions?: MembershipQuestionViolationOptions;
  }
  interface SubmitJoinGroupRequestRequest {
      /** Relevant group. */
      groupId: string;
      /** Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted. */
      membershipQuestionAnswers?: MembershipQuestionAnswer$1[];
  }
  interface SubmitJoinGroupRequestResponse {
      /** Submitted join group request. */
      joinGroupRequest?: JoinGroupRequest;
  }
  interface CancelJoinGroupRequestRequest {
      /** Relevant group. */
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
      /** Relevant group. */
      groupId: string;
      /** @internal */
      itemsToApprove?: ItemsToUpdate;
      /**
       * __Deprecated.__ Use `memberIds` instead.
       * This parameter will be removed on June 30, 2022.
       *
       * Required if `memberIds` is not provided.
       */
      siteMemberIds?: string[];
      /**
       * Member IDs to approve.
       *
       * <blockquote class='important'>
       *
       * __Important:__
       * This parameter will be required after the deprecated `siteMemberIds` is removed
       * on June 30, 2022.
       *
       * </blockquote>
       */
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
      /** Relevant group. */
      groupId: string;
      /** @internal */
      itemsToReject?: ItemsToUpdate;
      /** Rejection data. */
      rejections?: Rejection[];
  }
  interface Rejection {
      /**
       * __Deprecated.__ Use `memberId` instead.
       * This parameter will be removed on June 30, 2022.
       * @internal
       */
      siteMemberId?: string;
      /** Member ID to reject. */
      memberId?: string;
      /** Rejection reason. Free text that will be displayed to the rejected site member (max 1,000 characters). */
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
  interface ListJoinGroupRequestsResponse {
      /** Join group requests. */
      joinGroupRequests?: JoinGroupRequest[];
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
  interface QueryJoinGroupRequestsRequest {
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
      /** Join group requests. */
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
  }
  interface ListAllJoinGroupRequestsResponse {
      /** Join group requests. */
      joinGroupRequests?: JoinGroupRequest[];
  }
  /**
   * Get join group requirements. Will return empty response for public groups and details to fulfil if it's private.
   * @param groupId - Group ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
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
   * @param groupId - Relevant group.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function submitJoinGroupRequest(groupId: string, options?: SubmitJoinGroupRequestOptions): Promise<SubmitJoinGroupRequestResponse>;
  interface SubmitJoinGroupRequestOptions {
      /** Answers to membership questions. They can be empty, but submit join group request will fail if an answer to a required question is omitted. */
      membershipQuestionAnswers?: MembershipQuestionAnswer$1[];
  }
  /**
   * Cancels a join group request.
   * A site member can cancel only their own pending Join group requests.
   * @param groupId - Relevant group.
   * @internal
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function cancelJoinGroupRequest(groupId: string): Promise<CancelJoinGroupRequestResponse>;
  /**
   * Approves pending join group requests.
   * Group managers always have access to this functionality. In some cases, site owners will allow group members to use this functionality as well.
   * @param groupId - Relevant group.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function approveJoinGroupRequests(groupId: string, options?: ApproveJoinGroupRequestsOptions): Promise<ApproveJoinGroupRequestsResponse>;
  interface ApproveJoinGroupRequestsOptions {
      /** @internal */
      itemsToApprove?: ItemsToUpdate;
      /**
       * __Deprecated.__ Use `memberIds` instead.
       * This parameter will be removed on June 30, 2022.
       *
       * Required if `memberIds` is not provided.
       */
      siteMemberIds?: string[];
      /**
       * Member IDs to approve.
       *
       * <blockquote class='important'>
       *
       * __Important:__
       * This parameter will be required after the deprecated `siteMemberIds` is removed
       * on June 30, 2022.
       *
       * </blockquote>
       */
      memberIds?: string[];
  }
  /**
   * Rejects pending join group requests.
   * Group managers always have access to this functionality. In some cases, site owners will allow group members to use this functionality as well.
   * @param groupId - Relevant group.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function rejectJoinGroupRequests(groupId: string, options?: RejectJoinGroupRequestsOptions): Promise<RejectJoinGroupRequestsResponse>;
  interface RejectJoinGroupRequestsOptions {
      /** @internal */
      itemsToReject?: ItemsToUpdate;
      /** Rejection data. */
      rejections?: Rejection[];
  }
  /**
   * Retrieves a list of up to 100 join group requests, given the provided paging.
   * Group managers always have access to this functionality (site members can access their own join group requests in the site).
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
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
   * Retrieves a list of up to 100 join group requests, given the provided paging and filtering.
   * Group managers always have access to this functionality (site members can access their own join group requests in the site).
   *
   * Supported fields for filtering:
   * - `status`
   *
   * No supported fields for sorting
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function queryJoinGroupRequests(groupId: string, options?: QueryJoinGroupRequestsOptions): Promise<QueryJoinGroupRequestsResponse>;
  interface QueryJoinGroupRequestsOptions {
      /**
       * Ownership filter. In case of server signing `ALL` value must be used.
       * - `ALL` - All join group requests.
       * - `CURRENT_MEMBER` - Join group requests for current site member.
       * @internal
       */
      ownershipFilter?: OwnershipFilter;
      query?: Query;
  }
  /** @internal
   * @documentationMaturity preview
   */
  function rejectAllJoinGroupRequests(): Promise<RejectAllJoinGroupRequestsResponse>;
  /** @internal
   * @documentationMaturity preview
   */
  function approveAllJoinGroupRequests(): Promise<ApproveAllJoinGroupRequestsResponse>;
  /** @internal
   * @documentationMaturity preview
   */
  function listAllJoinGroupRequests(): Promise<ListAllJoinGroupRequestsResponse>;
  
  type socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequest = JoinGroupRequest;
  type socialGroupsV2JoinGroupRequest_universal_d_RequestStatus = RequestStatus;
  const socialGroupsV2JoinGroupRequest_universal_d_RequestStatus: typeof RequestStatus;
  type socialGroupsV2JoinGroupRequest_universal_d_RequestDetails = RequestDetails;
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
  const socialGroupsV2JoinGroupRequest_universal_d_rejectAllJoinGroupRequests: typeof rejectAllJoinGroupRequests;
  const socialGroupsV2JoinGroupRequest_universal_d_approveAllJoinGroupRequests: typeof approveAllJoinGroupRequests;
  const socialGroupsV2JoinGroupRequest_universal_d_listAllJoinGroupRequests: typeof listAllJoinGroupRequests;
  namespace socialGroupsV2JoinGroupRequest_universal_d {
    export {
      __debug$1 as __debug,
      socialGroupsV2JoinGroupRequest_universal_d_JoinGroupRequest as JoinGroupRequest,
      socialGroupsV2JoinGroupRequest_universal_d_RequestStatus as RequestStatus,
      socialGroupsV2JoinGroupRequest_universal_d_RequestDetails as RequestDetails,
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
      socialGroupsV2JoinGroupRequest_universal_d_rejectAllJoinGroupRequests as rejectAllJoinGroupRequests,
      socialGroupsV2JoinGroupRequest_universal_d_approveAllJoinGroupRequests as approveAllJoinGroupRequests,
      socialGroupsV2JoinGroupRequest_universal_d_listAllJoinGroupRequests as listAllJoinGroupRequests,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * Question asked to members when joining a group. Site owners can set whether it is required to answer the question in the Business Manager.
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
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function listMembershipQuestions(groupId: string): Promise<ListMembershipQuestionsResponse>;
  /**
   * Creates membership questions if none have been set up. Otherwise, replaces all existing questions.
   * > **Notes:**
   * > * Only admins can create or replace membership questions.
   * > * Providing an empty array means that members won't have to answer any question when joining the group.
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function createOrReplaceAllMembershipQuestions(groupId: string, options?: CreateOrReplaceAllMembershipQuestionsOptions): Promise<CreateOrReplaceAllMembershipQuestionsResponse>;
  interface CreateOrReplaceAllMembershipQuestionsOptions {
      /** New membership questions. */
      questions?: MembershipQuestion[];
  }
  /**
   * Retrieves the answers to the membership questions, given the provided filters.
   * @param groupId - Group ID.
   * @public
   * @documentationMaturity preview
   * @requiredField groupId
   */
  function listAnswers(groupId: string, options?: ListAnswersOptions): Promise<ListAnswersResponse>;
  interface ListAnswersOptions {
      /** Member IDs. If no member ID is provided, answers for all members will be returned. See [Members API](https://dev.wix.com/api/rest/members/members/about-wix-members) for more details. */
      memberIds?: string[];
      paging?: Paging;
  }
  /** @internal
   * @documentationMaturity preview
   */
  function listAnswerCounts(options?: ListAnswerCountsOptions): Promise<ListAnswerCountsResponse>;
  interface ListAnswerCountsOptions {
      memberIds?: string[];
  }
  
  const socialGroupsV2MembershipQuestion_universal_d___debug: typeof __debug;
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
      socialGroupsV2MembershipQuestion_universal_d___debug as __debug,
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
  
  export { socialGroupsV2GroupRequest_universal_d as createRequests, socialGroupsV2Group_universal_d as groups, socialGroupsV2JoinGroupRequest_universal_d as joinRequests, socialGroupsV2GroupMember_universal_d as members, socialGroupsV2MembershipQuestion_universal_d as membershipQuestions, socialGroupsV2GroupRole_universal_d as roles, socialGroupsV2GroupRules_universal_d as rules };
}
