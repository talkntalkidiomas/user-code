declare module "wix-members.v2" {
  interface Badge {
      /**
       * Badge ID.
       * @readonly
       */
      _id?: string;
      /** Text displayed on the badge in the Wix UI. */
      title?: string | null;
      /** Badge description. */
      description?: string | null;
      /**
       * Badge background color in hexadecimal RGB format. Uppercase letters only.
       *
       * Default: `#796EFF ` (purple).
       */
      backgroundColor?: string | null;
      /**
       * Badge text color in hexadecimal RGB format. Uppercase letters only.
       *
       * Default: `"#FFFFFF"` (white).
       */
      textColor?: string | null;
      /**
       * Badge icon as an SVG image. One of:
       *
       * - An external web URL in the following format: `http(s)://<image url>`.
       * - The [source URL](https://www.wix.com/velo/reference/wix-media-backend/mediamanager-obj/getfileurl) for a Wix Media Manager file. Wix Media Manager file names in a `wix:image://...` format are not supported.
       */
      icon?: string | null;
      /**
       * Whether the badge has special permissions
       * to access specific members-only pages.
       * When `true`, members with the badge receive special permissions,
       * and site contributors can
       * [manage badge permissions](https://support.wix.com/en/article/setting-permissions-for-a-member-badge)
       * in the Dashboard.
       * When `false`, members with the badge receive no special permissions.
       */
      permissionsEnabled?: boolean | null;
      /**
       * Slugified name. Used to represent the badge in a URL.
       * @readonly
       */
      slug?: string | null;
      /**
       * Date the badge was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date the badge was updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface CreateBadgeRequest {
      /** Badge to create. */
      badge: Badge;
  }
  interface CreateBadgeResponse {
      /** Created badge. */
      badge?: Badge;
  }
  interface UpdateBadgeRequest {
      /** Badge to update. */
      badge: Badge;
  }
  interface UpdateBadgeResponse {
      /** Updated badge. */
      badge?: Badge;
  }
  interface ListBadgesRequest {
      /** Pagination options. */
      paging?: Paging$2;
  }
  interface Paging$2 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListBadgesResponse {
      /** List of badges. */
      badges?: Badge[];
      /** Metadata for the paginated results. */
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
  interface QueryBadgesRequest {
      /**
       * Filter options.
       * Currently supported fields for filtering:
       * - id
       * - title
       * - slug
       * For more details on how to use filter, see [API Query Language: The Filter Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section).
       */
      filter?: Record<string, any> | null;
      /**
       * Sorting options.
       * For more details on how to use sorting,
       * see [API Query Language: The Sort Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-sort-section)
       */
      sort?: Sorting$2[];
      /** Pagination options.  */
      paging?: Paging$2;
  }
  interface Sorting$2 {
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
  interface QueryBadgesResponse {
      /** List of badges. */
      badges?: Badge[];
      /** Metadata for the paginated results. */
      metadata?: PagingMetadata$1;
  }
  interface GetBadgeRequest {
      /** Badge ID. */
      _id: string;
  }
  interface GetBadgeResponse {
      /** Badge. */
      badge?: Badge;
  }
  interface DeleteBadgeRequest {
      /** Badge ID. */
      _id: string;
  }
  interface DeleteBadgeResponse {
  }
  interface CountBadgesRequest {
      /**
       * Filter options.
       * Currently supported fields for filtering:
       * - id
       * - title
       * - slug
       * For more details on how to use filter, see [API Query Language: The Filter Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section).
       */
      filter?: Record<string, any> | null;
  }
  interface CountBadgesResponse {
      /** Badge count. */
      count?: string;
  }
  interface AssignBadgeRequest {
      /** Badge ID. */
      _id: string;
      /** List of member IDs to assign to the badge. */
      memberIds: string[];
  }
  interface AssignBadgeResponse {
      /** List of member IDs assigned to the badge. */
      memberIds?: string[];
  }
  interface BadgeAssigned {
      /** ID of the member who received the badge. */
      memberId?: string;
  }
  interface AssignBadgesRequest {
      /** List of badge IDs to assign to the member. */
      ids: string[];
      /** Member ID. */
      memberId: string;
  }
  interface AssignBadgesResponse {
      /** List of badge IDs newly assigned to the member. */
      ids?: string[];
  }
  interface UnassignBadgeRequest {
      /** Badge ID. */
      _id: string;
      /** List of members to remove. */
      memberIds: string[];
  }
  interface UnassignBadgeResponse {
  }
  interface BadgeUnassigned {
      /** ID of the member who lost the badge. */
      memberId?: string;
  }
  interface ListMembersRequest$2 {
      /** Badge ID. */
      _id: string;
      /** Pagination options. */
      paging?: Paging$2;
  }
  interface ListMembersResponse$2 {
      /** Member IDs assigned to the badge. */
      memberIds?: string[];
      /** Metadata for the paginated results. */
      metadata?: PagingMetadata$1;
  }
  interface ListMembersBadgeIdsRequest {
      /** List of members. */
      memberIds: string[];
  }
  interface ListMembersBadgeIdsResponse {
      /** List of members and the badges they're assigned to. */
      memberBadgeIds?: MemberBadgeIds[];
  }
  interface MemberBadgeIds {
      /** Member ID. */
      memberId?: string;
      /** List of badges the member is assigned to. */
      badgeIds?: string[];
  }
  interface GetMemberCountsPerBadgeRequest {
  }
  interface GetMemberCountsPerBadgeResponse {
      /** List of badges and counts of members who have each badge. */
      badgeMemberCounts?: BadgeMemberCount[];
  }
  interface BadgeMemberCount {
      /** Badge ID. */
      badgeId?: string;
      /** Badge member count. */
      memberCount?: number;
  }
  interface UpdateBadgesDisplayOrderRequest {
      /** Ordered badge IDs. */
      badgeIds: string[];
  }
  interface UpdateBadgesDisplayOrderResponse {
      /** Reordered badges list. */
      badges?: Badge[];
  }
  interface ListMembersWithBadgesRequest {
      /** Cursor paging options */
      paging?: CursorPaging$1;
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
  interface ListMembersWithBadgesResponse {
      /** List of members */
      memberIds?: string[];
      /** Metadata for the paginated results */
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
   * Creates a badge.
   *
   *
   * The `createBadge()` function returns a Promise that resolves to the newly created badge.
   *
   * New badges do not have any badge permissions by default. You can set [badge permissions](https://support.wix.com/en/article/setting-permissions-for-a-member-badge) from the Badges page in the Dashboard.
   *
   * If `backgroundColor` or `textColor` are not specified, they default to `"#796EFF"` (purple) and `"#FFFFFF"` (white) respectively.
   * @param badge - Badge to create.
   * @public
   * @requiredField badge
   * @requiredField badge.backgroundColor
   * @requiredField badge.textColor
   * @requiredField badge.title
   * @adminMethod
   * @returns Created badge.
   */
  function createBadge(badge: Badge): Promise<Badge>;
  /**
   * Updates a badge.
   *
   * The `updateBadge()` function returns a Promise that resolves to the updated badge.
   *
   * Only the properties passed in the `BadgeInfo` object will be updated. All other properties will remain the same.
   *
   * Because the badge `slug` is based on the badge `title`, if you change `title`, `slug` is updated accordingly.
   *
   * `badgeId` must be an ID from your site's `Members/Badges` collection. Typically, you retrieve the ID from the collection using a query or through a dataset.
   * @param _id - Badge ID.
   * @public
   * @requiredField _id
   * @requiredField badge
   * @adminMethod
   * @returns Updated badge.
   */
  function updateBadge(_id: string, badge: UpdateBadge): Promise<Badge>;
  interface UpdateBadge {
      /**
       * Badge ID.
       * @readonly
       */
      _id?: string;
      /** Text displayed on the badge in the Wix UI. */
      title?: string | null;
      /** Badge description. */
      description?: string | null;
      /**
       * Badge background color in hexadecimal RGB format. Uppercase letters only.
       *
       * Default: `#796EFF ` (purple).
       */
      backgroundColor?: string | null;
      /**
       * Badge text color in hexadecimal RGB format. Uppercase letters only.
       *
       * Default: `"#FFFFFF"` (white).
       */
      textColor?: string | null;
      /**
       * Badge icon as an SVG image. One of:
       *
       * - An external web URL in the following format: `http(s)://<image url>`.
       * - The [source URL](https://www.wix.com/velo/reference/wix-media-backend/mediamanager-obj/getfileurl) for a Wix Media Manager file. Wix Media Manager file names in a `wix:image://...` format are not supported.
       */
      icon?: string | null;
      /**
       * Whether the badge has special permissions
       * to access specific members-only pages.
       * When `true`, members with the badge receive special permissions,
       * and site contributors can
       * [manage badge permissions](https://support.wix.com/en/article/setting-permissions-for-a-member-badge)
       * in the Dashboard.
       * When `false`, members with the badge receive no special permissions.
       */
      permissionsEnabled?: boolean | null;
      /**
       * Slugified name. Used to represent the badge in a URL.
       * @readonly
       */
      slug?: string | null;
      /**
       * Date the badge was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date the badge was updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  /**
   * Lists the badges.
   *
   *
   * The `listBadges` function returns a Promise that resolves when the badges are retrieved. Retrieves up to 1000 badges, given the requested paging. Default paging.limit is 100, paging.offset - 0.
   *
   * This function is not a universal function and runs only on the backend.
   * @public */
  function listBadges(options?: ListBadgesOptions): Promise<ListBadgesResponse>;
  interface ListBadgesOptions {
      /** Pagination options.  */
      paging?: Paging$2;
  }
  /**
   * Retrieves up to 1000 badges, given the requested query options, paging, and sorting.
   * Default `paging.limit` is 100, `paging.offset` - 0.
   * For more information, see
   * [API Query Language: The Paging Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section).
   * @internal */
  function queryBadges(options?: QueryBadgesOptions): Promise<QueryBadgesResponse>;
  interface QueryBadgesOptions {
      /**
       * Filter options.
       * Currently supported fields for filtering:
       * - id
       * - title
       * - slug
       * For more details on how to use filter, see [API Query Language: The Filter Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section).
       */
      filter?: Record<string, any> | null;
      /**
       * Sorting options.
       * For more details on how to use sorting,
       * see [API Query Language: The Sort Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-sort-section)
       */
      sort?: Sorting$2[];
      /** Pagination options. */
      paging?: Paging$2;
  }
  /**
   * Retrieves information about a badge.
   *
   *
   * The `getBadge` function returns a Promise that resolves when the badge information is retrieved.
   *
   * The `_id` parameter must be an ID from your site's `Members/Badges` collection. Typically, you retrieve the ID from the collection using a query or through a dataset.
   *
   * This function is not a universal function and runs only on the backend.
   * @param _id - Badge ID.
   * @public
   * @requiredField _id
   * @returns Badge.
   */
  function getBadge(_id: string): Promise<Badge>;
  /**
   * Deletes a badge.
   *
   *
   * The `deleteBadge()` function returns a Promise that resolves when the specified badge is deleted.
   *
   * The `badgeId` parameter must be an ID from your site's `Members/Badges` collection. Typically, you retrieve the ID from the collection using a query or through a dataset.
   * @param _id - Badge ID.
   * @public
   * @requiredField _id
   * @adminMethod
   */
  function deleteBadge(_id: string): Promise<void>;
  /**
   * Retrieves the site's badge count, given the requested filtering.
   * @internal
   * @documentationMaturity preview
   */
  function countBadges(options?: CountBadgesOptions): Promise<CountBadgesResponse>;
  interface CountBadgesOptions {
      /**
       * Filter options.
       * Currently supported fields for filtering:
       * - id
       * - title
       * - slug
       * For more details on how to use filter, see [API Query Language: The Filter Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-filter-section).
       */
      filter?: Record<string, any> | null;
  }
  /**
   * Assigns a badge to site members.
   *
   *
   * The `assignBadge()` function returns a Promise that resolves when the specified badge is assigned to the specified members.
   *
   * The `badgeId` parameter must be an ID from your site's `Members/Badges` collection. Typically, you retrieve the ID from the collection using a query or through a dataset.
   * @param _id - Badge ID.
   * @param memberIds - List of member IDs to assign to the badge.
   * @public
   * @requiredField _id
   * @requiredField memberIds
   * @adminMethod
   */
  function assignBadge(_id: string, memberIds: string[]): Promise<AssignBadgeResponse>;
  /**
   * Assigns multiple badges to the specified member.
   * The member inherits the badges' permissions when they receive the badge, if applicable.
   * Badge permissions are added to previous member permissions (they don't replace existing permissions).
   * @param memberId - Member ID.
   * @param ids - List of badge IDs to assign to the member.
   * @internal
   * @requiredField ids
   * @requiredField memberId
   * @adminMethod
   */
  function assignBadges(memberId: string, ids: string[]): Promise<AssignBadgesResponse>;
  /**
   * Removes site members from an assigned badge.
   *
   *
   * The `unassignBadge()` function returns a Promise that resolves when the specified members are removed as holders of the specified badge.
   *
   * The `badgeId` parameter must be an ID from your site's `Members/Badges` collection. Typically, you retrieve the ID from the collection using a query or through a dataset.
   * @param _id - Badge ID.
   * @param memberIds - List of members to remove.
   * @public
   * @requiredField _id
   * @requiredField memberIds
   * @adminMethod
   */
  function unassignBadge(_id: string, memberIds: string[]): Promise<void>;
  /**
   * Lists the IDs of all members assigned to a badge.
   *
   *
   * The `listMembersByBadge()` function returns a Promise that resolves to a list of member IDs assigned to the specified badge.
   *
   * Retrieves up to 1000 site members who have a specified badge. Default `paging.limit` is 100, `paging.offset` - 0.
   *
   * The `_id` parameter must be an ID from your site's `Members/Badges` collection. Typically, you retrieve the ID from the collection using a query or through a dataset.
   *
   * This function is not a universal function and runs only on the backend.
   * @param _id - Badge ID.
   * @public
   * @requiredField _id
   */
  function listMembersByBadge(_id: string, options?: ListMembersByBadgeOptions): Promise<ListMembersResponse$2>;
  interface ListMembersByBadgeOptions {
      /** Pagination options. */
      paging?: Paging$2;
  }
  /**
   * Lists the badges assigned to each of the specified site members.
   *
   *
   * The `listBadgesPerMember()` function returns a Promise that resolves to a list of badge IDs associated with each of the specified members.
   *
   * This function is not a universal function and runs only on the backend.
   * @param memberIds - List of members.
   * @public
   * @requiredField memberIds
   */
  function listBadgesPerMember(memberIds: string[]): Promise<ListMembersBadgeIdsResponse>;
  /**
   * Retrieves member count per badge.
   *
   *
   * The `getMemberCountsPerBadge` function returns a Promise that resolves when the member counts of each badge are retrieved.
   *
   * This function is not a universal function and runs only on the backend.
   * @public */
  function getMemberCountsPerBadge(): Promise<GetMemberCountsPerBadgeResponse>;
  /**
   * Updates badges' display order.
   *
   *
   * The `badgeId` parameter must be an ID from your site's `Members/Badges` collection. Typically, you retrieve the ID from the collection using a query or through a dataset.
   *
   * This function is not a universal function and runs only on the backend
   * @param badgeIds - Ordered badge IDs.
   * @public
   * @requiredField badgeIds
   * @adminMethod
   */
  function updateBadgesDisplayOrder(badgeIds: string[]): Promise<UpdateBadgesDisplayOrderResponse>;
  
  type badgesV3Badge_universal_d_Badge = Badge;
  type badgesV3Badge_universal_d_CreateBadgeRequest = CreateBadgeRequest;
  type badgesV3Badge_universal_d_CreateBadgeResponse = CreateBadgeResponse;
  type badgesV3Badge_universal_d_UpdateBadgeRequest = UpdateBadgeRequest;
  type badgesV3Badge_universal_d_UpdateBadgeResponse = UpdateBadgeResponse;
  type badgesV3Badge_universal_d_ListBadgesRequest = ListBadgesRequest;
  type badgesV3Badge_universal_d_ListBadgesResponse = ListBadgesResponse;
  type badgesV3Badge_universal_d_QueryBadgesRequest = QueryBadgesRequest;
  type badgesV3Badge_universal_d_QueryBadgesResponse = QueryBadgesResponse;
  type badgesV3Badge_universal_d_GetBadgeRequest = GetBadgeRequest;
  type badgesV3Badge_universal_d_GetBadgeResponse = GetBadgeResponse;
  type badgesV3Badge_universal_d_DeleteBadgeRequest = DeleteBadgeRequest;
  type badgesV3Badge_universal_d_DeleteBadgeResponse = DeleteBadgeResponse;
  type badgesV3Badge_universal_d_CountBadgesRequest = CountBadgesRequest;
  type badgesV3Badge_universal_d_CountBadgesResponse = CountBadgesResponse;
  type badgesV3Badge_universal_d_AssignBadgeRequest = AssignBadgeRequest;
  type badgesV3Badge_universal_d_AssignBadgeResponse = AssignBadgeResponse;
  type badgesV3Badge_universal_d_BadgeAssigned = BadgeAssigned;
  type badgesV3Badge_universal_d_AssignBadgesRequest = AssignBadgesRequest;
  type badgesV3Badge_universal_d_AssignBadgesResponse = AssignBadgesResponse;
  type badgesV3Badge_universal_d_UnassignBadgeRequest = UnassignBadgeRequest;
  type badgesV3Badge_universal_d_UnassignBadgeResponse = UnassignBadgeResponse;
  type badgesV3Badge_universal_d_BadgeUnassigned = BadgeUnassigned;
  type badgesV3Badge_universal_d_ListMembersBadgeIdsRequest = ListMembersBadgeIdsRequest;
  type badgesV3Badge_universal_d_ListMembersBadgeIdsResponse = ListMembersBadgeIdsResponse;
  type badgesV3Badge_universal_d_MemberBadgeIds = MemberBadgeIds;
  type badgesV3Badge_universal_d_GetMemberCountsPerBadgeRequest = GetMemberCountsPerBadgeRequest;
  type badgesV3Badge_universal_d_GetMemberCountsPerBadgeResponse = GetMemberCountsPerBadgeResponse;
  type badgesV3Badge_universal_d_BadgeMemberCount = BadgeMemberCount;
  type badgesV3Badge_universal_d_UpdateBadgesDisplayOrderRequest = UpdateBadgesDisplayOrderRequest;
  type badgesV3Badge_universal_d_UpdateBadgesDisplayOrderResponse = UpdateBadgesDisplayOrderResponse;
  type badgesV3Badge_universal_d_ListMembersWithBadgesRequest = ListMembersWithBadgesRequest;
  type badgesV3Badge_universal_d_ListMembersWithBadgesResponse = ListMembersWithBadgesResponse;
  const badgesV3Badge_universal_d_createBadge: typeof createBadge;
  const badgesV3Badge_universal_d_updateBadge: typeof updateBadge;
  type badgesV3Badge_universal_d_UpdateBadge = UpdateBadge;
  const badgesV3Badge_universal_d_listBadges: typeof listBadges;
  type badgesV3Badge_universal_d_ListBadgesOptions = ListBadgesOptions;
  const badgesV3Badge_universal_d_queryBadges: typeof queryBadges;
  type badgesV3Badge_universal_d_QueryBadgesOptions = QueryBadgesOptions;
  const badgesV3Badge_universal_d_getBadge: typeof getBadge;
  const badgesV3Badge_universal_d_deleteBadge: typeof deleteBadge;
  const badgesV3Badge_universal_d_countBadges: typeof countBadges;
  type badgesV3Badge_universal_d_CountBadgesOptions = CountBadgesOptions;
  const badgesV3Badge_universal_d_assignBadge: typeof assignBadge;
  const badgesV3Badge_universal_d_assignBadges: typeof assignBadges;
  const badgesV3Badge_universal_d_unassignBadge: typeof unassignBadge;
  const badgesV3Badge_universal_d_listMembersByBadge: typeof listMembersByBadge;
  type badgesV3Badge_universal_d_ListMembersByBadgeOptions = ListMembersByBadgeOptions;
  const badgesV3Badge_universal_d_listBadgesPerMember: typeof listBadgesPerMember;
  const badgesV3Badge_universal_d_getMemberCountsPerBadge: typeof getMemberCountsPerBadge;
  const badgesV3Badge_universal_d_updateBadgesDisplayOrder: typeof updateBadgesDisplayOrder;
  namespace badgesV3Badge_universal_d {
    export {
      badgesV3Badge_universal_d_Badge as Badge,
      badgesV3Badge_universal_d_CreateBadgeRequest as CreateBadgeRequest,
      badgesV3Badge_universal_d_CreateBadgeResponse as CreateBadgeResponse,
      badgesV3Badge_universal_d_UpdateBadgeRequest as UpdateBadgeRequest,
      badgesV3Badge_universal_d_UpdateBadgeResponse as UpdateBadgeResponse,
      badgesV3Badge_universal_d_ListBadgesRequest as ListBadgesRequest,
      Paging$2 as Paging,
      badgesV3Badge_universal_d_ListBadgesResponse as ListBadgesResponse,
      PagingMetadata$1 as PagingMetadata,
      badgesV3Badge_universal_d_QueryBadgesRequest as QueryBadgesRequest,
      Sorting$2 as Sorting,
      SortOrder$1 as SortOrder,
      badgesV3Badge_universal_d_QueryBadgesResponse as QueryBadgesResponse,
      badgesV3Badge_universal_d_GetBadgeRequest as GetBadgeRequest,
      badgesV3Badge_universal_d_GetBadgeResponse as GetBadgeResponse,
      badgesV3Badge_universal_d_DeleteBadgeRequest as DeleteBadgeRequest,
      badgesV3Badge_universal_d_DeleteBadgeResponse as DeleteBadgeResponse,
      badgesV3Badge_universal_d_CountBadgesRequest as CountBadgesRequest,
      badgesV3Badge_universal_d_CountBadgesResponse as CountBadgesResponse,
      badgesV3Badge_universal_d_AssignBadgeRequest as AssignBadgeRequest,
      badgesV3Badge_universal_d_AssignBadgeResponse as AssignBadgeResponse,
      badgesV3Badge_universal_d_BadgeAssigned as BadgeAssigned,
      badgesV3Badge_universal_d_AssignBadgesRequest as AssignBadgesRequest,
      badgesV3Badge_universal_d_AssignBadgesResponse as AssignBadgesResponse,
      badgesV3Badge_universal_d_UnassignBadgeRequest as UnassignBadgeRequest,
      badgesV3Badge_universal_d_UnassignBadgeResponse as UnassignBadgeResponse,
      badgesV3Badge_universal_d_BadgeUnassigned as BadgeUnassigned,
      ListMembersRequest$2 as ListMembersRequest,
      ListMembersResponse$2 as ListMembersResponse,
      badgesV3Badge_universal_d_ListMembersBadgeIdsRequest as ListMembersBadgeIdsRequest,
      badgesV3Badge_universal_d_ListMembersBadgeIdsResponse as ListMembersBadgeIdsResponse,
      badgesV3Badge_universal_d_MemberBadgeIds as MemberBadgeIds,
      badgesV3Badge_universal_d_GetMemberCountsPerBadgeRequest as GetMemberCountsPerBadgeRequest,
      badgesV3Badge_universal_d_GetMemberCountsPerBadgeResponse as GetMemberCountsPerBadgeResponse,
      badgesV3Badge_universal_d_BadgeMemberCount as BadgeMemberCount,
      badgesV3Badge_universal_d_UpdateBadgesDisplayOrderRequest as UpdateBadgesDisplayOrderRequest,
      badgesV3Badge_universal_d_UpdateBadgesDisplayOrderResponse as UpdateBadgesDisplayOrderResponse,
      badgesV3Badge_universal_d_ListMembersWithBadgesRequest as ListMembersWithBadgesRequest,
      CursorPaging$1 as CursorPaging,
      badgesV3Badge_universal_d_ListMembersWithBadgesResponse as ListMembersWithBadgesResponse,
      CursorPagingMetadata$1 as CursorPagingMetadata,
      Cursors$1 as Cursors,
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
      badgesV3Badge_universal_d_createBadge as createBadge,
      badgesV3Badge_universal_d_updateBadge as updateBadge,
      badgesV3Badge_universal_d_UpdateBadge as UpdateBadge,
      badgesV3Badge_universal_d_listBadges as listBadges,
      badgesV3Badge_universal_d_ListBadgesOptions as ListBadgesOptions,
      badgesV3Badge_universal_d_queryBadges as queryBadges,
      badgesV3Badge_universal_d_QueryBadgesOptions as QueryBadgesOptions,
      badgesV3Badge_universal_d_getBadge as getBadge,
      badgesV3Badge_universal_d_deleteBadge as deleteBadge,
      badgesV3Badge_universal_d_countBadges as countBadges,
      badgesV3Badge_universal_d_CountBadgesOptions as CountBadgesOptions,
      badgesV3Badge_universal_d_assignBadge as assignBadge,
      badgesV3Badge_universal_d_assignBadges as assignBadges,
      badgesV3Badge_universal_d_unassignBadge as unassignBadge,
      badgesV3Badge_universal_d_listMembersByBadge as listMembersByBadge,
      badgesV3Badge_universal_d_ListMembersByBadgeOptions as ListMembersByBadgeOptions,
      badgesV3Badge_universal_d_listBadgesPerMember as listBadgesPerMember,
      badgesV3Badge_universal_d_getMemberCountsPerBadge as getMemberCountsPerBadge,
      badgesV3Badge_universal_d_updateBadgesDisplayOrder as updateBadgesDisplayOrder,
    };
  }
  
  interface Member$1 {
      /**
       * Member ID.
       * @readonly
       */
      _id?: string;
      /**
       * @internal
       * @internal
       * @readonly
       */
      emailVerified?: boolean;
      /**
       * @internal
       * @internal */
      role?: Role$1;
      /**
       * Email used by the member to log in to the site.
       *
       *
       */
      loginEmail?: string | null;
      /**
       * @internal
       * @internal */
      memberName?: string | null;
      /** Member's first name. */
      firstName?: string | null;
      /** Member's last name. */
      lastName?: string | null;
      /**
       * @internal
       * @internal */
      imageUrl?: string | null;
      /** Name that identifies the member to other members. Displayed on the member's profile page and interactions in the forum or blog. */
      nickname?: string | null;
      /**
       * Member privacy status.
       *
       * One of:
       * - `"PUBLIC"`: Member is visible to everyone.
       * - `"PRIVATE"`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
       * - `"UNKNOWN"`: Insufficient permissions to get the status.
       */
      profilePrivacyStatus?: SiteMemberPrivacyStatus;
      /** URL segment that determines the member's profile page. */
      slug?: string | null;
      /**
       * @internal
       * @internal */
      language?: string | null;
      /**
       * Member site access status.
       *
       * One of:
       * - `"PENDING"`: Member created and is waiting for approval by site owner.
       * - `"APPROVED"`: Member can log in to the site.
       * - "OFFLINE"`: Member is a guest author for the site blog and cannot log in to the site.
       * - `"BLOCKED"`: Member is blocked and cannot log in to the site.
       * - `"UNKNOWN"`: Insufficient permissions to get the status.
       */
      status?: SiteMemberStatus;
      /**
       * Date and time when the member was created.
       * @readonly
       */
      creationDate?: Date;
      /**
       * Date and time when the member was last updated.
       *
       *
       * @readonly
       */
      lastUpdateDate?: Date;
      /**
       * Date and time when the member last logged in to the site.
       *
       * @readonly
       */
      lastLoginDate?: Date;
      /**
       * List of email addresses.
       *
       *
       */
      emails?: string[];
      /** List of phone numbers.  */
      phones?: string[];
      /** List of street addresses. */
      addresses?: Address$1[];
      /**
       * @internal
       * @internal */
      labels?: string[];
      /**
       * Custom fields, structured as key:object pairs. Custom field keys are defined in the Contacts Extended Fields API. The paired object contains the `name` and `value` properties, where `name` is the display name and `value` is the value stored for the member.
       *
       * Only custom fields added to the member profile in the Dashboard are available through the Members API. Empty fields are not returned.
       *
       * When updating a member, `name` is ignored.
       */
      customFields?: CustomField$1[];
      /** Member's profile picture URL. */
      picture?: string;
      /**
       * @internal
       * @internal */
      userId?: string | null;
      /**
       * @internal
       * @internal */
      groups?: Group[];
      /**
       * Member's contact ID.
       * @readonly
       */
      contactId?: string | null;
  }
  enum Role$1 {
      UNDEFINED_ROLE = "UNDEFINED_ROLE",
      MEMBER = "MEMBER",
      OWNER = "OWNER",
      CONTRIBUTOR = "CONTRIBUTOR"
  }
  enum SiteMemberPrivacyStatus {
      UNDEFINED = "UNDEFINED",
      PUBLIC = "PUBLIC",
      PRIVATE = "PRIVATE",
      COMMUNITY = "COMMUNITY"
  }
  enum SiteMemberStatus {
      UNDEFINED_STATUS = "UNDEFINED_STATUS",
      APPLICANT = "APPLICANT",
      ACTIVE = "ACTIVE",
      INACTIVE = "INACTIVE",
      BLOCKED = "BLOCKED",
      OFFLINE_ONLY = "OFFLINE_ONLY"
  }
  interface Address$1 {
      /** Street address. */
      street?: string | null;
      /** City name. */
      city?: string | null;
      /** Region name. */
      region?: string | null;
      /** 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
      country?: string | null;
      /** Postal code. */
      postalCode?: string | null;
  }
  interface CustomField$1 extends CustomFieldValueOneOf {
      /** String value. */
      strValue?: string | null;
      /** Number value. */
      numValue?: number;
      /** Date value. */
      dateValue?: Date;
      /** Display name. */
      name?: string;
  }
  /** @oneof */
  interface CustomFieldValueOneOf {
      strValue?: string | null;
      numValue?: number;
      dateValue?: Date;
  }
  interface Group {
      _id?: string;
      name?: string;
      type?: string;
  }
  interface ListMembersRequest$1 {
      /** for paging - maximum number of records to retrieve */
      limit?: number;
      /** for paging - how many records to skip */
      offset?: number;
      /** sort order - list of field and direction tuples. e.g. `["first_name:asc", "last_name:desc"]` */
      order?: string[];
      /** partial response request - list of field names to get back in response */
      fields?: string[];
      /** filter members with specific status */
      status?: SiteMemberStatus;
      /** whether to include contact details */
      includeContactDetails?: boolean;
  }
  interface ListMembersResponse$1 {
      /** members returned by List request */
      members?: Member$1[];
      /** pagination information */
      pagination?: PaginationResponse;
  }
  interface PaginationResponse {
      /** offset that was applied to the request */
      offset?: number;
      /** limit that was applied to the request */
      limit?: number;
      /** total rows available */
      total?: number;
      /** indication that the total count was too expensive to calculate */
      tooManyToCount?: boolean;
  }
  interface SearchRequest {
      /** paging - offset and limit */
      paging?: Paging$1;
      /** search by field */
      searchBy?: SearchBy;
      /** partial response request - list of field names to get back in response */
      fields?: string[];
      /** filters */
      filterBy?: FilterBy;
      /** ASC or DESC order */
      sort?: Sorting$1;
  }
  interface Paging$1 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface SearchBy {
      /** nick name filter */
      nickname?: string | null;
  }
  interface FilterBy {
      /** filter members with specific status */
      status?: string | null;
      /** group Id filter */
      groupId?: string | null;
      /** privacy status filter */
      privacyStatus?: SiteMemberPrivacyStatus;
      /** roles filter */
      roles?: Role$1[];
  }
  enum Sorting$1 {
      DESC = "DESC",
      ASC = "ASC"
  }
  interface SearchResponse {
      /** members returned by List request */
      members?: Member$1[];
      /** pagination information */
      pagination?: PaginationResponse;
  }
  interface GetCurrentMemberRequest {
  }
  interface GetMemberResponse$1 {
      member?: Member$1;
  }
  interface GetMemberRequest$1 {
      /** unique identifier of the requested member(required) */
      _id: string;
      /** whether to include contact details */
      includeContactDetails?: boolean;
      /** whether to include groups details */
      includeGroupsDetails?: boolean;
  }
  interface GetUserMembershipsRequest {
      /** unique identifier of the requested **Wix** user */
      userId: string;
      /** paging - offset and limit ( the max limit for page is 200) */
      paging?: Paging$1;
  }
  interface GetUserMembershipsResponse {
      /** sequence of member's of the user with there metaSiteId */
      userMemberships?: UserMembership[];
  }
  interface UserMembership {
      /** member id */
      memberId?: string;
      /** meta site id whom the member existing on */
      metasiteId?: string;
  }
  interface GetMemberRoleRequest {
      _id: string;
  }
  interface GetMemberRoleResponse {
      /**
       * member's role:
       *
       * `OWNER` - member that belongs to site owner
       * `CONTRIBUTOR` - member that belongs to a contributor in site
       * `MEMBER` - other members that registered to site
       */
      role?: Role$1;
      userId?: string | null;
      status?: SiteMemberStatus;
      contactId?: string | null;
  }
  interface GetMemberRolesRequest {
      /** user_id and/or contact_id */
      ids?: string[];
  }
  interface GetMemberRolesResponse {
      idsToRoles?: Record<string, MemberRole$1>;
  }
  interface MemberRole$1 {
      /**
       * member's role:
       *
       * `OWNER` - member that belongs to site owner
       * `CONTRIBUTOR` - member that belongs to a contributor in site
       * `MEMBER` - other members that registered to site
       */
      role?: Role$1;
      userId?: string | null;
      status?: SiteMemberStatus;
      contactId?: string | null;
  }
  interface BatchGetMembersRequest {
      /** unique identifier of the requested member(required) */
      ids?: string[];
      /** whether to include contact details */
      includeContactDetails?: boolean;
      /** whether to include groups details */
      includeGroupsDetails?: boolean;
  }
  interface BatchGetMembersResponse {
      /** lest of members details */
      members?: Member$1[];
  }
  interface GetAuthorizedPagesRequest {
      _id?: string;
      siteId: string;
  }
  interface GetAuthorizedPagesResponse {
      authorizedPages?: Record<string, string>;
  }
  interface UpdateMemberRequest$1 {
      /** member id */
      _id: string;
      /** the Member object containing the fields to update */
      member?: Member$1;
      /**
       * an explicit declaration of contact fields that should be updated by this request.
       * *Currently only affects contact fields.
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateMemberResponse$1 {
      /** updated member */
      member?: Member$1;
  }
  interface ChangeLoginEmailRequest {
      /** Member ID. */
      _id: string;
      /** New login email address. */
      newEmail?: string;
      /**
       * @internal
       * @internal */
      revokeCurrentSessions?: boolean | null;
  }
  interface ChangeLoginEmailResponse {
      /** Member with the updated login email address. */
      member?: Member$1;
  }
  interface QueryMembersRequest$1 {
      /**
       * query - See https://github.com/wix-private/platformization-guidelines/blob/master/Server/API-Query.md
       * supported fields: `id`, `login_email`, `status`, `language`, `date_created`, `last_update_date`, `flags`, `name`, `first_name`, `last_name`, `nickname`, `email_verified`, `privacy_status`
       */
      query?: string;
      /** whether to include contact details */
      includeContactDetails?: boolean;
      /** whether to include offline members */
      includeOfflineMembers?: boolean;
  }
  interface QueryMembersResponse$1 {
      /** members matching the query criteria */
      members?: Member$1[];
      /** pagination information */
      pagination?: PaginationResponse;
  }
  interface DeleteMemberRequest$1 {
      /** id of member that should be deleted (required) */
      _id: string;
      /** defines if the request is a bulk action */
      isBulkAction?: boolean;
  }
  interface DeleteMemberResponse$1 {
  }
  interface ApproveMemberRequest$1 extends ApproveMemberRequestMemberIdentifierOneOf {
      /** ID of the member to approve. */
      _id?: string;
      /** Login email address of the member to approve. */
      email?: string;
      /** Approval token returned by the [`register()`](#register) function. */
      token?: string;
  }
  /** @oneof */
  interface ApproveMemberRequestMemberIdentifierOneOf {
      /** ID of the member to approve. */
      _id?: string;
      /** Login email address of the member to approve. */
      email?: string;
      /**
       * <!--ONLY:VELO
       * Approval token returned by `register()`.
       * <!--END:ONLY:VELO-->
       */
      token?: string;
  }
  interface ApproveMemberResponse$1 {
      /** Approval session token. */
      session?: Session;
  }
  interface Session {
      /** Session token when the current member is logged into the site. */
      token?: string | null;
  }
  interface BlockMemberRequest$1 extends BlockMemberRequestMemberIdentifierOneOf {
      /** ID of the member to block. */
      _id?: string;
      /** Login email address of the member to block. */
      email?: string;
      /**
       * @internal
       * @internal */
      source?: Source;
  }
  /** @oneof */
  interface BlockMemberRequestMemberIdentifierOneOf {
      _id?: string;
      /** Login email address of the member to block. */
      email?: string;
  }
  enum Source {
      UNKNOWN = "UNKNOWN",
      HANDLING_SPAM = "HANDLING_SPAM"
  }
  interface BlockMemberResponse$1 {
  }
  interface MakeMemberOfflineRequest {
      /** unique identifier of the requested member */
      _id: string;
  }
  interface MakeMemberOfflineResponse {
  }
  /** Registration options. */
  interface RegisterRequest {
      /** Login email address for the new site member. */
      email?: string;
      /**
       * Password the new site member will use to log in.
       *
       * Must be 4 to 15 ASCII-printable characters.
       */
      password?: string;
      /** Contact information for the registered member. */
      contactInfo?: MemberContactInfo;
      /**
       * @internal
       * @internal */
      dialogData?: DialogData;
      /**
       * Sets the privacy status of a new member upon registration.
       *
       * - `PUBLIC`: Member is visible to everyone.
       * - `PRIVATE`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
       * - `UNKNOWN`: Insufficient permissions to get the status.
       */
      profilePrivacyStatus?: SiteMemberPrivacyStatus;
      /**
       * @internal
       * @internal */
      isOfflineRegistration?: boolean;
      /**
       * @internal
       * @internal */
      recaptchaToken?: string | null;
      /**
       * @internal
       * @internal */
      invisibleRecaptchaToken?: string | null;
      /**
       * @internal
       * @internal */
      emailVerification?: EmailVerification;
      /**
       * @internal
       * @internal */
      isMobile?: boolean | null;
  }
  interface MemberContactInfo {
      /** First name. */
      firstName?: string | null;
      /** Last name. */
      lastName?: string | null;
      /** Contact's profile picture. */
      picture?: string | null;
      /** Contact's email addresses. */
      emails?: string[];
      /** Contact's phone numbers. */
      phones?: string[];
      /** List of contact's labels. */
      labels?: string[];
      /**
       * @internal
       * @internal */
      locale?: string | null;
      /**
       * Any number of custom fields.
       * [Custom fields](https://support.wix.com/en/article/adding-custom-fields-to-contacts)
       * are used to store additional information about your site's contacts.
       * When setting a custom field, use key:value pairs,
       * where the key matches the names defined in your site's
       * [Contact List](https://support.wix.com/en/article/accessing-your-contact-list).
       * You can only set values for custom fields that already exist in the Contacts application.
       */
      customFields?: CustomField$1[];
  }
  interface DialogData {
      visitorId?: string | null;
      appId?: string | null;
      initiator?: string | null;
  }
  interface EmailVerification {
      /** ID of the verification process. */
      verificationId?: string;
      /**
       * 6-digit code for verification.  Code can be between 100000 and 999999.
       *
       */
      otp?: string;
  }
  interface RegisterResponse {
      /** Newly registered member. */
      member?: Member$1;
      /**
       * in case the site is open for registration, all members are automatically
       * approved. they will get a temporary token for obtaining a valid session
       */
      session?: Session;
      /**
       * in case the site requires members approval, the registered member
       * will be an applicant until he's approved. the token can be used as a member
       * identifier for approval using the `MembersService.Approve` API
       */
      approvalToken?: string | null;
  }
  interface EmailVerificationRequired {
      /** ID of the verification process. */
      verificationId?: string;
  }
  interface EmailVerificationFailed {
      /** ID of the failed verification process.  */
      verificationId?: string;
      /** Reason for verification failure. */
      verificationFailureReason?: VerificationFailureReason;
  }
  enum VerificationFailureReason {
      /** Default value - means no failure */
      UNSPECIFIED = "UNSPECIFIED",
      /** Bad verification code */
      BAD_CODE = "BAD_CODE",
      /** Verification code was not found */
      NOT_FOUND = "NOT_FOUND",
      /** Error while sending the code to the user */
      SEND_CODE_ERROR = "SEND_CODE_ERROR"
  }
  interface LoginRequest {
      /** Login email address. */
      email?: string;
      /** Member password. */
      password?: string;
      /**
       * @internal
       * @internal */
      recaptchaToken?: string;
      /**
       * @internal
       * @internal */
      invisibleRecaptchaToken?: string;
      /**
       * @internal
       * @internal */
      emailVerification?: EmailVerification;
      /**
       * @internal
       * @internal */
      isMobile?: boolean | null;
  }
  /** Session token for logging the member in. */
  interface LoginResponse {
      /** Session token. */
      session?: Session;
      /** the member's details */
      member?: Member$1;
  }
  interface GetResetPasswordLinkRequest {
      /** Contact ID of the member whose password will be reset. */
      contactId: string;
  }
  interface GetResetPasswordLinkResponse {
      /**
       * Reset password link.
       * Valid for one use, up to two weeks from when it is created.
       */
      resetPasswordLink?: string;
  }
  interface SendSetPasswordEmailRequest {
      /** Login email of the member whose password will be set. */
      email: string;
      /**
       * @internal
       * @internal */
      requestedByMember?: boolean;
      /**
       * Whether to hide the ignore this email message .
       *
       * If `true`, the email tells the member
       * they can safely ignore
       * if they did not request the password change.
       *
       * Default: `false`.
       */
      hideIgnoreMessage?: boolean;
  }
  interface SendSetPasswordEmailResponse {
      /** Indicates if the request was successfully received. */
      accepted?: boolean;
  }
  interface ResetPasswordRequest {
      /** Contact ID of the member whose password will be reset. */
      contactId: string;
  }
  interface ResetPasswordResponse {
      /** Indicates if the request was successfully received. */
      accepted?: boolean;
  }
  interface SocialLoginRequest extends SocialLoginRequestLoginOneOf {
      appleLogin?: AppleLogin;
      googleLogin?: GoogleLogin;
      facebookLogin?: FacebookLogin;
      /** Must either pass explicit msid OR signed instance with visitor */
      metaSiteId?: string | null;
  }
  /** @oneof */
  interface SocialLoginRequestLoginOneOf {
      appleLogin?: AppleLogin;
      googleLogin?: GoogleLogin;
      facebookLogin?: FacebookLogin;
  }
  interface AppleLogin {
      /** JWT signed by apple, contains target (aud), email etc */
      token?: string;
  }
  interface GoogleLogin {
      /** JWT signed by Google, contains target (aud), email etc */
      token?: string;
  }
  interface FacebookLogin {
      /** AccessToken created by Facebook, used to later fetch details over API */
      token?: string;
  }
  /**
   * Returns a list of members according to:
   * - Pagination: `offset`, `limit`
   * - Order: by some of the following fields: `id`, `login_email`, `status`, `language`, `date_created`, `last_update_date`, `flags`, `name`, `first_name`, `last_name`, `nickname`, `email_verified`, `privacy_status`
   * - Optional filter by `SiteMemberStatus`
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function list(options?: ListOptions): Promise<ListMembersResponse$1>;
  interface ListOptions {
      /** for paging - maximum number of records to retrieve */
      limit?: number;
      /** for paging - how many records to skip */
      offset?: number;
      /** sort order - list of field and direction tuples. e.g. `["first_name:asc", "last_name:desc"]` */
      order?: string[];
      /** partial response request - list of field names to get back in response */
      fields?: string[];
      /** filter members with specific status */
      status?: SiteMemberStatus;
      /** whether to include contact details */
      includeContactDetails?: boolean;
  }
  /**
   * Returns a list of members according to search and filter inputs:
   * - Pagination: `offset`, `limit`
   * - Optional filter by `group_id` `SiteMemberStatus`
   * - Optional search by `nickname`
   * - Order: by `date_created`
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function search(options?: SearchOptions): Promise<SearchResponse>;
  interface SearchOptions {
      /** paging - offset and limit */
      paging?: Paging$1;
      /** search by field */
      searchBy?: SearchBy;
      /** partial response request - list of field names to get back in response */
      fields?: string[];
      /** filters */
      filterBy?: FilterBy;
      /** ASC or DESC order */
      sort?: Sorting$1;
  }
  /**
   * Returns information about a current member (by authorization header)
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getCurrent(): Promise<GetMemberResponse$1>;
  /**
   * Returns information about a particular member
   * @param _id - unique identifier of the requested member(required)
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function get(_id: string, options?: GetOptions): Promise<GetMemberResponse$1>;
  interface GetOptions {
      /** whether to include contact details */
      includeContactDetails?: boolean;
      /** whether to include groups details */
      includeGroupsDetails?: boolean;
  }
  /**
   * Returns all user memberships
   * @param userId - unique identifier of the requested **Wix** user
   * @internal
   * @documentationMaturity preview
   * @requiredField userId
   * @adminMethod
   */
  function getUserMemberships(userId: string, options?: GetUserMembershipsOptions): Promise<GetUserMembershipsResponse>;
  interface GetUserMembershipsOptions {
      /** paging - offset and limit ( the max limit for page is 200) */
      paging?: Paging$1;
  }
  /**
   * Returns member role.
   * This endpoint is needed for migration from this API to umbrella API, because umbrella API does not expose role.
   * Accepts siteMemberId as id param, which can be: contactId, userId
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function getRole(_id: string): Promise<GetMemberRoleResponse>;
  /**
   * Returns members roles.
   * This endpoint is needed for migration from this API to umbrella API, because umbrella API does not expose role.
   * Accepts siteMemberId as id params, which can be: contactId, userId
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getRoles$1(options?: GetRolesOptions): Promise<GetMemberRolesResponse>;
  interface GetRolesOptions {
      /** user_id and/or contact_id */
      ids?: string[];
  }
  /**
   * Returns information about a list member
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function batchGet(options?: BatchGetOptions): Promise<BatchGetMembersResponse>;
  interface BatchGetOptions {
      /** unique identifier of the requested member(required) */
      ids?: string[];
      /** whether to include contact details */
      includeContactDetails?: boolean;
      /** whether to include groups details */
      includeGroupsDetails?: boolean;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField siteId
   * @adminMethod
   */
  function getAuthorizedPages(siteId: string, options?: GetAuthorizedPagesOptions): Promise<GetAuthorizedPagesResponse>;
  interface GetAuthorizedPagesOptions {
      _id?: string;
  }
  /**
   * Update fields of an existing member
   * - Possible fields are: `imageUrl`, `nickname`, `privacyStatus`, `slug`
   * @param _id - member id
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function update(_id: string, options?: UpdateOptions): Promise<UpdateMemberResponse$1>;
  interface UpdateOptions {
      /** the Member object containing the fields to update */
      member?: Member$1;
      /**
       * an explicit declaration of contact fields that should be updated by this request.
       * *Currently only affects contact fields.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Changes a member's login email address.
   *
   * After running this function, the specified member can log in with the new email address. If the member uses social login (for example, Google login) and the member tries to log in with the old email address, they will be re-registered with the old email address.
   *
   * Site collaborators can use `changeLoginEmail()` to change another member's login email. Members who are not site collaborators can use `changeLoginEmail()` to change their own login email only.
   *
   * > **Note:** `changeLoginEmail()` cannot be used to change the login email of a site collaborator. Site collaborators can change their login emails from their Wix [account settings](https://manage.wix.com/account/account-settings).
   * @param _id - Member ID.
   * @param newEmail - New login email address.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField newEmail
   * @param options - Options for changing a login email address.
   * @adminMethod
   */
  function changeLoginEmail(_id: string, newEmail: string, options?: ChangeLoginEmailOptions): Promise<ChangeLoginEmailResponse>;
  interface ChangeLoginEmailOptions {
      /**
       * @internal
       * @internal */
      revokeCurrentSessions?: boolean | null;
  }
  /**
   * Returns a list of members, given the provided paging, sort and filter
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function query(options?: QueryOptions): Promise<QueryMembersResponse$1>;
  interface QueryOptions {
      /**
       * query - See https://github.com/wix-private/platformization-guidelines/blob/master/Server/API-Query.md
       * supported fields: `id`, `login_email`, `status`, `language`, `date_created`, `last_update_date`, `flags`, `name`, `first_name`, `last_name`, `nickname`, `email_verified`, `privacy_status`
       */
      query?: string;
      /** whether to include contact details */
      includeContactDetails?: boolean;
      /** whether to include offline members */
      includeOfflineMembers?: boolean;
  }
  /**
   * Delete a member by id
   * @param _id - id of member that should be deleted (required)
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function _delete(_id: string, options?: DeleteOptions): Promise<void>;
  interface DeleteOptions {
      /** defines if the request is a bulk action */
      isBulkAction?: boolean;
  }
  /**
   * Approves a pending member using an ID, email address or approval token.
   *
   * Tokens must be approved within 30 hours of token creation.
   * Use the `approvalToken` parameter returned from the
   * [`register()`](#register) function when approving a member by `token`.
   *
   * > **Note:**
   * > A new member's status is `"PENDING"` when the site's membership policy is set to manual approval.
   * > To learn more about setting your site's membership approval policy, see
   * > [Editing Your Member Signup Settings](https://support.wix.com/en/article/editing-your-member-signup-settings-for-the-default-form).
   *
   * Members are typically associated with a contact, each having a distinct member and contact ID. When passing the ID as a parameter, avoid presuming the IDs are identical since they represent separate entities.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function approve(options?: ApproveOptions): Promise<ApproveMemberResponse$1>;
  interface ApproveOptions extends ApproveMemberRequestMemberIdentifierOneOf {
      /** ID of the member to approve. */
      _id?: string;
      /** Login email address of the member to approve. */
      email?: string;
      /** Approval token returned by the [`register()`](#register) function. */
      token?: string;
  }
  /**
   * Blocks a member from logging in to the site using an ID or email address.
   *
   * To unblock the member and allow them to log in to the site, use the [`approve()`](#approve) function.
   * @public
   * @documentationMaturity preview
   * @param options - Options for blocking a member from logging in.
   * @adminMethod
   */
  function block(options?: BlockOptions): Promise<void>;
  interface BlockOptions extends BlockMemberRequestMemberIdentifierOneOf {
      /** ID of the member to block. */
      _id?: string;
      /** Login email address of the member to block. */
      email?: string;
      /**
       * @internal
       * @internal */
      source?: Source;
  }
  /**
   * Make member offline.
   * After this action, member `status` field is set to `OFFLINE_ONLY`.
   * Offline member cannot log into a site. Member is not visible in Business Manager site members list.
   * @param _id - unique identifier of the requested member
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function makeMemberOffline(_id: string): Promise<void>;
  /**
   * Registers a new site member.
   *
   * The specified `password` must be between 4 and 100 ASCII characters.
   *
   * >**Note:** The `register()` function behaves differently depending on your site's [member signup settings](https://dev.wix.com/docs/develop-websites/articles/wix-apps/wix-members/enabling-custom-site-registration).
   * @param email - Login email address for the new site member.
   * @param password - Password the new site member will use to log in.
   *
   * Must be 4 to 15 ASCII-printable characters.
   * @public
   * @documentationMaturity preview
   * @requiredField email
   * @requiredField password
   * @param options - Options for registering a new member.
   * @adminMethod
   */
  function register(email: string, password: string, options?: RegisterOptions): Promise<RegisterResponse>;
  interface RegisterOptions {
      /** Contact information for the registered member. */
      contactInfo?: MemberContactInfo;
      /** @internal */
      dialogData?: DialogData;
      /**
       * Sets the privacy status of a new member upon registration.
       *
       * - `PUBLIC`: Member is visible to everyone.
       * - `PRIVATE`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
       * - `UNKNOWN`: Insufficient permissions to get the status.
       */
      profilePrivacyStatus?: SiteMemberPrivacyStatus;
      /** @internal */
      isOfflineRegistration?: boolean;
      /** @internal */
      recaptchaToken?: string | null;
      /** @internal */
      invisibleRecaptchaToken?: string | null;
      /**
       * Email verification.
       * @internal */
      emailVerification?: EmailVerification;
      /** @internal */
      isMobile?: boolean | null;
  }
  /**
   * Registers new site member.
   * This will try to connect the member to an existing contact, or create a new one in case no matches were found.
   *
   * To resend email with `otp` code, please provide `emailVerification` with `verificationId` only, and no `otp`.
   * It will skip recaptcha and resend the code to the given email.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function signup(options?: SignupOptions): Promise<RegisterResponse>;
  interface SignupOptions {
      /** Login email address for the new site member. */
      email?: string;
      /**
       * Password the new site member will use to log in.
       *
       * Must be 4 to 15 ASCII-printable characters.
       */
      password?: string;
      /** Contact information for the registered member. */
      contactInfo?: MemberContactInfo;
      /** @internal */
      dialogData?: DialogData;
      /**
       * Sets the privacy status of a new member upon registration.
       *
       * - `PUBLIC`: Member is visible to everyone.
       * - `PRIVATE`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
       * - `UNKNOWN`: Insufficient permissions to get the status.
       */
      profilePrivacyStatus?: SiteMemberPrivacyStatus;
      /** @internal */
      isOfflineRegistration?: boolean;
      /** @internal */
      recaptchaToken?: string | null;
      /** @internal */
      invisibleRecaptchaToken?: string | null;
      /** @internal */
      emailVerification?: EmailVerification;
      /** @internal */
      isMobile?: boolean | null;
  }
  /**
   * Logs in a registered member with an email and password.
   *
   * The `login()` function only works with existing members. To register a new member use the [`register()`](#register) function.
   *
   * To complete the login, the returned session token must be applied using the `applySessionToken()` function in the wix-members-frontend API.
   * @param email - Login email address.
   * @param password - Member password.
   * @public
   * @documentationMaturity preview
   * @requiredField email
   * @requiredField password
   * @param options - Options for logging in a member.
   * @adminMethod
   * @returns Session token for logging the member in.
   */
  function login(email: string, password: string, options?: LoginOptions): Promise<LoginResponse>;
  interface LoginOptions {
      /** @internal */
      recaptchaToken?: string;
      /** @internal */
      invisibleRecaptchaToken?: string;
      /** @internal */
      emailVerification?: EmailVerification;
      /** @internal */
      isMobile?: boolean | null;
  }
  /**
   * Creates a link to reset a site member's password.
   *
   * The returned link must be provided to the site member,
   * who must click the link and provide a new password.
   * The link is valid for one use, up to two weeks from when it is created.
   * @param contactId - Contact ID of the member whose password will be reset.
   * @internal
   * @documentationMaturity preview
   * @requiredField contactId
   * @adminMethod
   */
  function getResetPasswordLink(contactId: string): Promise<GetResetPasswordLinkResponse>;
  /**
   * Sends a site member an email with a link to set their password.
   *
   * The set password link is valid for 3 hours,
   * and it can be used only once.
   * If the link expires, the original password remains.
   * @param email - Login email of the member whose password will be set.
   * @public
   * @documentationMaturity preview
   * @requiredField email
   * @param options - Email display options.
   */
  function sendSetPasswordEmail(email: string, options?: SendSetPasswordEmailOptions): Promise<SendSetPasswordEmailResponse>;
  interface SendSetPasswordEmailOptions {
      /**
       * @internal
       * @internal */
      requestedByMember?: boolean;
      /**
       * Whether to hide the ignore this email message .
       *
       * If `true`, the email tells the member
       * they can safely ignore
       * if they did not request the password change.
       *
       * Default: `false`.
       */
      hideIgnoreMessage?: boolean;
  }
  /**
   * Reset member password
   *
   * Replaces the member password with a random password and it requires the member to reset his password to login
   * @param contactId - Contact ID of the member whose password will be reset.
   * @internal
   * @documentationMaturity preview
   * @requiredField contactId
   * @adminMethod
   */
  function resetPassword(contactId: string): Promise<ResetPasswordResponse>;
  /**
   * Logs a member in with a social provider.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   * @returns Session token for logging the member in.
   */
  function socialLogin(options?: SocialLoginOptions): Promise<LoginResponse>;
  interface SocialLoginOptions extends SocialLoginRequestLoginOneOf {
      /** Must either pass explicit msid OR signed instance with visitor */
      metaSiteId?: string | null;
      appleLogin?: AppleLogin;
      googleLogin?: GoogleLogin;
      facebookLogin?: FacebookLogin;
  }
  
  type identityMembersV1Member_universal_d_SiteMemberPrivacyStatus = SiteMemberPrivacyStatus;
  const identityMembersV1Member_universal_d_SiteMemberPrivacyStatus: typeof SiteMemberPrivacyStatus;
  type identityMembersV1Member_universal_d_SiteMemberStatus = SiteMemberStatus;
  const identityMembersV1Member_universal_d_SiteMemberStatus: typeof SiteMemberStatus;
  type identityMembersV1Member_universal_d_CustomFieldValueOneOf = CustomFieldValueOneOf;
  type identityMembersV1Member_universal_d_Group = Group;
  type identityMembersV1Member_universal_d_PaginationResponse = PaginationResponse;
  type identityMembersV1Member_universal_d_SearchRequest = SearchRequest;
  type identityMembersV1Member_universal_d_SearchBy = SearchBy;
  type identityMembersV1Member_universal_d_FilterBy = FilterBy;
  type identityMembersV1Member_universal_d_SearchResponse = SearchResponse;
  type identityMembersV1Member_universal_d_GetCurrentMemberRequest = GetCurrentMemberRequest;
  type identityMembersV1Member_universal_d_GetUserMembershipsRequest = GetUserMembershipsRequest;
  type identityMembersV1Member_universal_d_GetUserMembershipsResponse = GetUserMembershipsResponse;
  type identityMembersV1Member_universal_d_UserMembership = UserMembership;
  type identityMembersV1Member_universal_d_GetMemberRoleRequest = GetMemberRoleRequest;
  type identityMembersV1Member_universal_d_GetMemberRoleResponse = GetMemberRoleResponse;
  type identityMembersV1Member_universal_d_GetMemberRolesRequest = GetMemberRolesRequest;
  type identityMembersV1Member_universal_d_GetMemberRolesResponse = GetMemberRolesResponse;
  type identityMembersV1Member_universal_d_BatchGetMembersRequest = BatchGetMembersRequest;
  type identityMembersV1Member_universal_d_BatchGetMembersResponse = BatchGetMembersResponse;
  type identityMembersV1Member_universal_d_GetAuthorizedPagesRequest = GetAuthorizedPagesRequest;
  type identityMembersV1Member_universal_d_GetAuthorizedPagesResponse = GetAuthorizedPagesResponse;
  type identityMembersV1Member_universal_d_ChangeLoginEmailRequest = ChangeLoginEmailRequest;
  type identityMembersV1Member_universal_d_ChangeLoginEmailResponse = ChangeLoginEmailResponse;
  type identityMembersV1Member_universal_d_ApproveMemberRequestMemberIdentifierOneOf = ApproveMemberRequestMemberIdentifierOneOf;
  type identityMembersV1Member_universal_d_Session = Session;
  type identityMembersV1Member_universal_d_BlockMemberRequestMemberIdentifierOneOf = BlockMemberRequestMemberIdentifierOneOf;
  type identityMembersV1Member_universal_d_Source = Source;
  const identityMembersV1Member_universal_d_Source: typeof Source;
  type identityMembersV1Member_universal_d_MakeMemberOfflineRequest = MakeMemberOfflineRequest;
  type identityMembersV1Member_universal_d_MakeMemberOfflineResponse = MakeMemberOfflineResponse;
  type identityMembersV1Member_universal_d_RegisterRequest = RegisterRequest;
  type identityMembersV1Member_universal_d_MemberContactInfo = MemberContactInfo;
  type identityMembersV1Member_universal_d_DialogData = DialogData;
  type identityMembersV1Member_universal_d_EmailVerification = EmailVerification;
  type identityMembersV1Member_universal_d_RegisterResponse = RegisterResponse;
  type identityMembersV1Member_universal_d_EmailVerificationRequired = EmailVerificationRequired;
  type identityMembersV1Member_universal_d_EmailVerificationFailed = EmailVerificationFailed;
  type identityMembersV1Member_universal_d_VerificationFailureReason = VerificationFailureReason;
  const identityMembersV1Member_universal_d_VerificationFailureReason: typeof VerificationFailureReason;
  type identityMembersV1Member_universal_d_LoginRequest = LoginRequest;
  type identityMembersV1Member_universal_d_LoginResponse = LoginResponse;
  type identityMembersV1Member_universal_d_GetResetPasswordLinkRequest = GetResetPasswordLinkRequest;
  type identityMembersV1Member_universal_d_GetResetPasswordLinkResponse = GetResetPasswordLinkResponse;
  type identityMembersV1Member_universal_d_SendSetPasswordEmailRequest = SendSetPasswordEmailRequest;
  type identityMembersV1Member_universal_d_SendSetPasswordEmailResponse = SendSetPasswordEmailResponse;
  type identityMembersV1Member_universal_d_ResetPasswordRequest = ResetPasswordRequest;
  type identityMembersV1Member_universal_d_ResetPasswordResponse = ResetPasswordResponse;
  type identityMembersV1Member_universal_d_SocialLoginRequest = SocialLoginRequest;
  type identityMembersV1Member_universal_d_SocialLoginRequestLoginOneOf = SocialLoginRequestLoginOneOf;
  type identityMembersV1Member_universal_d_AppleLogin = AppleLogin;
  type identityMembersV1Member_universal_d_GoogleLogin = GoogleLogin;
  type identityMembersV1Member_universal_d_FacebookLogin = FacebookLogin;
  const identityMembersV1Member_universal_d_list: typeof list;
  type identityMembersV1Member_universal_d_ListOptions = ListOptions;
  const identityMembersV1Member_universal_d_search: typeof search;
  type identityMembersV1Member_universal_d_SearchOptions = SearchOptions;
  const identityMembersV1Member_universal_d_getCurrent: typeof getCurrent;
  const identityMembersV1Member_universal_d_get: typeof get;
  type identityMembersV1Member_universal_d_GetOptions = GetOptions;
  const identityMembersV1Member_universal_d_getUserMemberships: typeof getUserMemberships;
  type identityMembersV1Member_universal_d_GetUserMembershipsOptions = GetUserMembershipsOptions;
  const identityMembersV1Member_universal_d_getRole: typeof getRole;
  type identityMembersV1Member_universal_d_GetRolesOptions = GetRolesOptions;
  const identityMembersV1Member_universal_d_batchGet: typeof batchGet;
  type identityMembersV1Member_universal_d_BatchGetOptions = BatchGetOptions;
  const identityMembersV1Member_universal_d_getAuthorizedPages: typeof getAuthorizedPages;
  type identityMembersV1Member_universal_d_GetAuthorizedPagesOptions = GetAuthorizedPagesOptions;
  const identityMembersV1Member_universal_d_update: typeof update;
  type identityMembersV1Member_universal_d_UpdateOptions = UpdateOptions;
  const identityMembersV1Member_universal_d_changeLoginEmail: typeof changeLoginEmail;
  type identityMembersV1Member_universal_d_ChangeLoginEmailOptions = ChangeLoginEmailOptions;
  const identityMembersV1Member_universal_d_query: typeof query;
  type identityMembersV1Member_universal_d_QueryOptions = QueryOptions;
  const identityMembersV1Member_universal_d__delete: typeof _delete;
  type identityMembersV1Member_universal_d_DeleteOptions = DeleteOptions;
  const identityMembersV1Member_universal_d_approve: typeof approve;
  type identityMembersV1Member_universal_d_ApproveOptions = ApproveOptions;
  const identityMembersV1Member_universal_d_block: typeof block;
  type identityMembersV1Member_universal_d_BlockOptions = BlockOptions;
  const identityMembersV1Member_universal_d_makeMemberOffline: typeof makeMemberOffline;
  const identityMembersV1Member_universal_d_register: typeof register;
  type identityMembersV1Member_universal_d_RegisterOptions = RegisterOptions;
  const identityMembersV1Member_universal_d_signup: typeof signup;
  type identityMembersV1Member_universal_d_SignupOptions = SignupOptions;
  const identityMembersV1Member_universal_d_login: typeof login;
  type identityMembersV1Member_universal_d_LoginOptions = LoginOptions;
  const identityMembersV1Member_universal_d_getResetPasswordLink: typeof getResetPasswordLink;
  const identityMembersV1Member_universal_d_sendSetPasswordEmail: typeof sendSetPasswordEmail;
  type identityMembersV1Member_universal_d_SendSetPasswordEmailOptions = SendSetPasswordEmailOptions;
  const identityMembersV1Member_universal_d_resetPassword: typeof resetPassword;
  const identityMembersV1Member_universal_d_socialLogin: typeof socialLogin;
  type identityMembersV1Member_universal_d_SocialLoginOptions = SocialLoginOptions;
  namespace identityMembersV1Member_universal_d {
    export {
      Member$1 as Member,
      Role$1 as Role,
      identityMembersV1Member_universal_d_SiteMemberPrivacyStatus as SiteMemberPrivacyStatus,
      identityMembersV1Member_universal_d_SiteMemberStatus as SiteMemberStatus,
      Address$1 as Address,
      CustomField$1 as CustomField,
      identityMembersV1Member_universal_d_CustomFieldValueOneOf as CustomFieldValueOneOf,
      identityMembersV1Member_universal_d_Group as Group,
      ListMembersRequest$1 as ListMembersRequest,
      ListMembersResponse$1 as ListMembersResponse,
      identityMembersV1Member_universal_d_PaginationResponse as PaginationResponse,
      identityMembersV1Member_universal_d_SearchRequest as SearchRequest,
      Paging$1 as Paging,
      identityMembersV1Member_universal_d_SearchBy as SearchBy,
      identityMembersV1Member_universal_d_FilterBy as FilterBy,
      Sorting$1 as Sorting,
      identityMembersV1Member_universal_d_SearchResponse as SearchResponse,
      identityMembersV1Member_universal_d_GetCurrentMemberRequest as GetCurrentMemberRequest,
      GetMemberResponse$1 as GetMemberResponse,
      GetMemberRequest$1 as GetMemberRequest,
      identityMembersV1Member_universal_d_GetUserMembershipsRequest as GetUserMembershipsRequest,
      identityMembersV1Member_universal_d_GetUserMembershipsResponse as GetUserMembershipsResponse,
      identityMembersV1Member_universal_d_UserMembership as UserMembership,
      identityMembersV1Member_universal_d_GetMemberRoleRequest as GetMemberRoleRequest,
      identityMembersV1Member_universal_d_GetMemberRoleResponse as GetMemberRoleResponse,
      identityMembersV1Member_universal_d_GetMemberRolesRequest as GetMemberRolesRequest,
      identityMembersV1Member_universal_d_GetMemberRolesResponse as GetMemberRolesResponse,
      MemberRole$1 as MemberRole,
      identityMembersV1Member_universal_d_BatchGetMembersRequest as BatchGetMembersRequest,
      identityMembersV1Member_universal_d_BatchGetMembersResponse as BatchGetMembersResponse,
      identityMembersV1Member_universal_d_GetAuthorizedPagesRequest as GetAuthorizedPagesRequest,
      identityMembersV1Member_universal_d_GetAuthorizedPagesResponse as GetAuthorizedPagesResponse,
      UpdateMemberRequest$1 as UpdateMemberRequest,
      UpdateMemberResponse$1 as UpdateMemberResponse,
      identityMembersV1Member_universal_d_ChangeLoginEmailRequest as ChangeLoginEmailRequest,
      identityMembersV1Member_universal_d_ChangeLoginEmailResponse as ChangeLoginEmailResponse,
      QueryMembersRequest$1 as QueryMembersRequest,
      QueryMembersResponse$1 as QueryMembersResponse,
      DeleteMemberRequest$1 as DeleteMemberRequest,
      DeleteMemberResponse$1 as DeleteMemberResponse,
      ApproveMemberRequest$1 as ApproveMemberRequest,
      identityMembersV1Member_universal_d_ApproveMemberRequestMemberIdentifierOneOf as ApproveMemberRequestMemberIdentifierOneOf,
      ApproveMemberResponse$1 as ApproveMemberResponse,
      identityMembersV1Member_universal_d_Session as Session,
      BlockMemberRequest$1 as BlockMemberRequest,
      identityMembersV1Member_universal_d_BlockMemberRequestMemberIdentifierOneOf as BlockMemberRequestMemberIdentifierOneOf,
      identityMembersV1Member_universal_d_Source as Source,
      BlockMemberResponse$1 as BlockMemberResponse,
      identityMembersV1Member_universal_d_MakeMemberOfflineRequest as MakeMemberOfflineRequest,
      identityMembersV1Member_universal_d_MakeMemberOfflineResponse as MakeMemberOfflineResponse,
      identityMembersV1Member_universal_d_RegisterRequest as RegisterRequest,
      identityMembersV1Member_universal_d_MemberContactInfo as MemberContactInfo,
      identityMembersV1Member_universal_d_DialogData as DialogData,
      identityMembersV1Member_universal_d_EmailVerification as EmailVerification,
      identityMembersV1Member_universal_d_RegisterResponse as RegisterResponse,
      identityMembersV1Member_universal_d_EmailVerificationRequired as EmailVerificationRequired,
      identityMembersV1Member_universal_d_EmailVerificationFailed as EmailVerificationFailed,
      identityMembersV1Member_universal_d_VerificationFailureReason as VerificationFailureReason,
      identityMembersV1Member_universal_d_LoginRequest as LoginRequest,
      identityMembersV1Member_universal_d_LoginResponse as LoginResponse,
      identityMembersV1Member_universal_d_GetResetPasswordLinkRequest as GetResetPasswordLinkRequest,
      identityMembersV1Member_universal_d_GetResetPasswordLinkResponse as GetResetPasswordLinkResponse,
      identityMembersV1Member_universal_d_SendSetPasswordEmailRequest as SendSetPasswordEmailRequest,
      identityMembersV1Member_universal_d_SendSetPasswordEmailResponse as SendSetPasswordEmailResponse,
      identityMembersV1Member_universal_d_ResetPasswordRequest as ResetPasswordRequest,
      identityMembersV1Member_universal_d_ResetPasswordResponse as ResetPasswordResponse,
      identityMembersV1Member_universal_d_SocialLoginRequest as SocialLoginRequest,
      identityMembersV1Member_universal_d_SocialLoginRequestLoginOneOf as SocialLoginRequestLoginOneOf,
      identityMembersV1Member_universal_d_AppleLogin as AppleLogin,
      identityMembersV1Member_universal_d_GoogleLogin as GoogleLogin,
      identityMembersV1Member_universal_d_FacebookLogin as FacebookLogin,
      identityMembersV1Member_universal_d_list as list,
      identityMembersV1Member_universal_d_ListOptions as ListOptions,
      identityMembersV1Member_universal_d_search as search,
      identityMembersV1Member_universal_d_SearchOptions as SearchOptions,
      identityMembersV1Member_universal_d_getCurrent as getCurrent,
      identityMembersV1Member_universal_d_get as get,
      identityMembersV1Member_universal_d_GetOptions as GetOptions,
      identityMembersV1Member_universal_d_getUserMemberships as getUserMemberships,
      identityMembersV1Member_universal_d_GetUserMembershipsOptions as GetUserMembershipsOptions,
      identityMembersV1Member_universal_d_getRole as getRole,
      getRoles$1 as getRoles,
      identityMembersV1Member_universal_d_GetRolesOptions as GetRolesOptions,
      identityMembersV1Member_universal_d_batchGet as batchGet,
      identityMembersV1Member_universal_d_BatchGetOptions as BatchGetOptions,
      identityMembersV1Member_universal_d_getAuthorizedPages as getAuthorizedPages,
      identityMembersV1Member_universal_d_GetAuthorizedPagesOptions as GetAuthorizedPagesOptions,
      identityMembersV1Member_universal_d_update as update,
      identityMembersV1Member_universal_d_UpdateOptions as UpdateOptions,
      identityMembersV1Member_universal_d_changeLoginEmail as changeLoginEmail,
      identityMembersV1Member_universal_d_ChangeLoginEmailOptions as ChangeLoginEmailOptions,
      identityMembersV1Member_universal_d_query as query,
      identityMembersV1Member_universal_d_QueryOptions as QueryOptions,
      identityMembersV1Member_universal_d__delete as _delete,
      identityMembersV1Member_universal_d_DeleteOptions as DeleteOptions,
      identityMembersV1Member_universal_d_approve as approve,
      identityMembersV1Member_universal_d_ApproveOptions as ApproveOptions,
      identityMembersV1Member_universal_d_block as block,
      identityMembersV1Member_universal_d_BlockOptions as BlockOptions,
      identityMembersV1Member_universal_d_makeMemberOffline as makeMemberOffline,
      identityMembersV1Member_universal_d_register as register,
      identityMembersV1Member_universal_d_RegisterOptions as RegisterOptions,
      identityMembersV1Member_universal_d_signup as signup,
      identityMembersV1Member_universal_d_SignupOptions as SignupOptions,
      identityMembersV1Member_universal_d_login as login,
      identityMembersV1Member_universal_d_LoginOptions as LoginOptions,
      identityMembersV1Member_universal_d_getResetPasswordLink as getResetPasswordLink,
      identityMembersV1Member_universal_d_sendSetPasswordEmail as sendSetPasswordEmail,
      identityMembersV1Member_universal_d_SendSetPasswordEmailOptions as SendSetPasswordEmailOptions,
      identityMembersV1Member_universal_d_resetPassword as resetPassword,
      identityMembersV1Member_universal_d_socialLogin as socialLogin,
      identityMembersV1Member_universal_d_SocialLoginOptions as SocialLoginOptions,
    };
  }
  
  interface Member {
      /**
       * Member ID.
       * @readonly
       */
      _id?: string | null;
      /** Email used by the member to log in to the site. */
      loginEmail?: string | null;
      /**
       * Whether the email used by the member has been verified.
       * @readonly
       */
      loginEmailVerified?: boolean | null;
      /**
       * Member site access status.
       *
       * - `PENDING`: Member created and is waiting for approval by site owner.
       * - `APPROVED`: Member can log in to the site.
       * - `OFFLINE`: Member is a [guest author](https://support.wix.com/en/article/wix-blog-adding-guest-authors-to-your-blog) for the site blog and cannot log in to the site.
       * - `BLOCKED`: Member is blocked and cannot log in to the site.
       * - `UNKNOWN`: Insufficient permissions to get the status.
       * @readonly
       */
      status?: Status;
      /**
       * Contact ID.
       * @readonly
       */
      contactId?: string | null;
      /**
       * Member's contact information. Contact information is stored in the
       * [Contact List](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
       */
      contact?: Contact;
      /** Profile display info. */
      profile?: Profile;
      /**
       * Member privacy status.
       *
       * - `PUBLIC`: Member is visible to everyone.
       * - `PRIVATE`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
       * - `UNKNOWN`: Insufficient permissions to get the status.
       */
      privacyStatus?: PrivacyStatusStatus;
      /**
       * Member activity status.
       *
       * - `ACTIVE`: Member can write forum posts and blog comments.
       * - `MUTED`: Member cannot write forum posts or blog comments.
       * - `UNKNOWN`: Insufficient permissions to get the status.
       * @readonly
       */
      activityStatus?: ActivityStatusStatus;
      /**
       * Date and time when the member was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time when the member was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Date and time when the member last logged in to the site.
       * @readonly
       */
      lastLoginDate?: Date;
      /**
       * Extended fields
       * @internal
       */
      extendedFields?: ExtendedFields;
  }
  enum Status {
      UNKNOWN = "UNKNOWN",
      PENDING = "PENDING",
      APPROVED = "APPROVED",
      BLOCKED = "BLOCKED",
      OFFLINE = "OFFLINE"
  }
  /** Contact info associated with the member. */
  interface Contact {
      /**
       * @internal
       * @internal
       * @readonly
       */
      contactId?: string | null;
      /** Contact's first name. */
      firstName?: string | null;
      /** Contact's last name. */
      lastName?: string | null;
      /** List of phone numbers. */
      phones?: string[] | null;
      /** List of email addresses. */
      emails?: string[] | null;
      /** List of street addresses. */
      addresses?: Address[];
      /**
       * Contact's birthdate, formatted as `"YYYY-MM-DD"`.
       *
       * Example: `"2020-03-15"` for March 15, 2020.
       */
      birthdate?: string | null;
      /** Contact's company name. */
      company?: string | null;
      /** Contact's job title. */
      jobTitle?: string | null;
      /**
       * Custom fields are structured as key:value pairs where each key is the field `name`, and each value is the field's `value` for the member.
       *
       * > **Notes:**
       * > - Only custom fields added to the member profile in the Dashboard are available through the Members API. Empty fields are not returned.
       * > - When updating a member, `name` is ignored.
       */
      customFields?: Record<string, CustomField>;
  }
  /** Street address. */
  interface Address extends AddressStreetOneOf {
      /** Street address object, with number and name in separate fields. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number, as free text. */
      addressLine?: string | null;
      /**
       * Street address ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Free text providing more detailed address information,
       * such as apartment, suite, or floor.
       */
      addressLine2?: string | null;
      /** City name. */
      city?: string | null;
      /**
       * Code for a subdivision (such as state, prefecture, or province) in an
       * [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
       */
      subdivision?: string | null;
      /**
       * 2-letter country code in an
       * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
       */
      country?: string | null;
      /** Postal code. */
      postalCode?: string | null;
  }
  /** @oneof */
  interface AddressStreetOneOf {
      /** Street address object, with number and name in separate fields. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number, as free text. */
      addressLine?: string | null;
  }
  interface StreetAddress {
      /** Street number. */
      number?: string;
      /** Street name. */
      name?: string;
  }
  interface CustomField {
      /** Custom field name. */
      name?: string | null;
      /** Custom field value. */
      value?: any;
  }
  /** Member Profile */
  interface Profile {
      /**
       * Name that identifies the member to other members.
       * Displayed on the member's profile page
       * and interactions in the forum or blog.
       */
      nickname?: string | null;
      /**
       * Slug that determines the member's profile page URL.
       * @readonly
       */
      slug?: string | null;
      /** Member's profile photo. */
      photo?: Image;
      /**
       * Member's cover photo,
       * used as a background picture in members profile page.
       *
       * Cover positioning can be altered with `cover.offsetX` and `cover.offsetY`.
       * When left empty, the values default to `0`.
       */
      cover?: Image;
      /**
       * Member title.
       *
       * Currently available through the API only.
       */
      title?: string | null;
  }
  interface Image {
      /**
       * Wix Media image ID,
       * set when the member selects an image from Wix Media.
       */
      _id?: string;
      /** Image URL. */
      url?: string;
      /** Original image width. */
      height?: number;
      /** Original image height. */
      width?: number;
      /**
       * X-axis offset.
       *
       * Default: `0`.
       */
      offsetX?: number | null;
      /**
       * Y-axis offset.
       *
       * Default: `0`.
       */
      offsetY?: number | null;
  }
  enum PrivacyStatusStatus {
      UNKNOWN = "UNKNOWN",
      PRIVATE = "PRIVATE",
      PUBLIC = "PUBLIC"
  }
  enum ActivityStatusStatus {
      UNKNOWN = "UNKNOWN",
      ACTIVE = "ACTIVE",
      MUTED = "MUTED"
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
  interface UpdateMySlugRequest {
      /** New slug. */
      slug: string;
  }
  interface UpdateMySlugResponse {
      /** Updated member. */
      member?: Member;
  }
  interface SlugAlreadyExistsPayload {
      slug?: string;
  }
  interface UpdateMemberSlugRequest {
      /** ID of the member whose slug will be updated. */
      _id: string;
      /** New slug. */
      slug: string;
  }
  interface UpdateMemberSlugResponse {
      /** Updated member. */
      member?: Member;
  }
  interface JoinCommunityRequest {
  }
  /** Member profile. */
  interface JoinCommunityResponse {
      /** The updated member. */
      member?: Member;
  }
  interface MemberJoinedCommunity {
      /**
       * Member id who joined the community
       * @readonly
       */
      memberId?: string;
  }
  interface LeaveCommunityRequest {
  }
  /** Member profile. */
  interface LeaveCommunityResponse {
      /** The updated member. */
      member?: Member;
  }
  interface MemberLeftCommunity {
      /**
       * Member id who left the community
       * @readonly
       */
      memberId?: string;
  }
  interface GetMyMemberRequest {
      /**
       * Predefined set of fields to return.
       *
       * - `"FULL"`: Returns all fields.
       * - `"PUBLIC"`: Returns `_id` and all fields under `profile`.
       *
       * > **Note:**
       * > When returning the `"PUBLIC"` fieldset,
       * > `profile.status`, `profile.privacyStatus`, and `profile.activityStatus`
       * > are returned as `"UNKNOWN"`.
       */
      fieldSet?: Set;
      /**
       * Predefined set of fields to return. One of:
       *
       * - `FULL`: Returns all fields.
       * - `PUBLIC`: Returns `id`, `contactId`, and the `profile` object. `status`, `privacyStatus`, and `activityStatus` are returned as `UNKNOWN`.
       * - `EXTENDED`: Returns `id`, `loginEmail`, `status`, `contactId`, `privacyStatus`, `activityStatus`, and the `profile` object.
       *
       * Default: `PUBLIC`.
       */
      fieldsets?: Set[];
  }
  enum Set {
      /** Public properties of the entity */
      PUBLIC = "PUBLIC",
      /** Extended properties of the entity */
      EXTENDED = "EXTENDED",
      /** Full entity defined in the doc */
      FULL = "FULL"
  }
  /** Member profile. */
  interface GetMyMemberResponse {
      /** The logged-in member. */
      member?: Member;
  }
  interface GetMemberRequest {
      /** Member ID. */
      _id: string;
      /**
       * @internal
       * @internal
       * @internal
       */
      fieldSet?: Set;
      /**
       * Predefined set of fields to return. One of:
       * - `"FULL"`: Returns all fields.
       * - `"PUBLIC"`: Returns `id`, `contactId`, and the `profile` object. `status`, `privacyStatus`, and `activityStatus` are returned as `UNKNOWN`.
       * - `"EXTENDED"`: Returns `id`, `loginEmail`, `status`, `contactId`, `privacyStatus`, `activityStatus`, and the `profile` object.
       *
       *
       */
      fieldsets?: Set[];
  }
  interface GetMemberResponse {
      /** The requested member. */
      member?: Member;
  }
  interface MemberToMemberBlockedPayload {
      /** Member ID. */
      memberId?: string;
  }
  interface ListMembersRequest {
      paging?: Paging;
      /**
       * @internal
       * @internal
       * @internal
       */
      fieldSet?: Set;
      /**
       * Predefined set of fields to return. One of:
       * - `"FULL"`: Returns all fields.
       * - `"PUBLIC"`: Returns `id`, `contactId`, and the `profile` object. `status`, `privacyStatus`, and `activityStatus` are returned as `UNKNOWN`.
       * - `"EXTENDED"`: Returns `id`, `loginEmail`, `status`, `contactId`, `privacyStatus`, `activityStatus`, and the `profile` object.
       *
       * Default: `"PUBLIC"`.
       */
      fieldsets?: Set[];
      sorting?: Sorting[];
      /**
       * Cursor paging.
       *
       * Priority over paging property
       * @internal
       */
      cursorPaging?: CursorPaging;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
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
  interface ListMembersResponse {
      /** List of members. */
      members?: Member[];
      /** Metadata for the paginated results. */
      metadata?: PagingMetadata;
      /**
       * Cursor metadata for paginated results.
       * @internal
       */
      cursorPagingMetadata?: CursorPagingMetadata;
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
  interface CursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: Cursors;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryMembersRequest {
      /** Query options. */
      query?: Query$1;
      /**
       * @internal
       * @internal
       * @internal
       */
      fieldSet?: Set;
      /**
       * Predefined sets of fields to return.
       *
       * Defaults to `PUBLIC`.
       */
      fieldsets?: Set[];
      /** Plain text search. */
      search?: Search;
  }
  interface Query$1 {
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter?: any;
      /** Limit number of results */
      paging?: Paging;
      /** Sort the results */
      sorting?: Sorting[];
      /**
       * Cursor paging.
       *
       * Priority over paging property
       * @internal
       */
      cursorPaging?: CursorPaging;
  }
  /** Free text to match in searchable fields */
  interface Search {
      /** Search term or expression */
      expression?: string | null;
      /**
       * Currently supported fields for search:
       *
       * - `loginEmail`
       * - `contact.firstName`
       * - `contact.lastName`
       * - `profile.title`
       * - `profile.nickname`
       * - `profile.slug`
       *
       * Default is `profile.nickname`
       */
      fields?: string[];
  }
  interface QueryMembersResponse {
      /** List of members that met the query filter criteria. */
      members?: Member[];
      /** Metadata for the paginated results. */
      metadata?: PagingMetadata;
      /**
       * Cursor metadata for paginated results.
       * @internal
       */
      cursorPagingMetadata?: CursorPagingMetadata;
  }
  interface MuteMemberRequest {
      _id: string;
  }
  interface MuteMemberResponse {
      member?: Member;
  }
  interface MemberMuted {
      /**
       * Member id who got muted
       * @readonly
       */
      memberId?: string;
  }
  interface UnmuteMemberRequest {
      _id: string;
  }
  interface UnmuteMemberResponse {
      member?: Member;
  }
  interface MemberUnmuted {
      /**
       * Member id who got unmuted
       * @readonly
       */
      memberId?: string;
  }
  interface ApproveMemberRequest {
      _id: string;
  }
  interface ApproveMemberResponse {
      member?: Member;
  }
  interface MemberApproved {
      /**
       * Member id who got approved
       * @readonly
       */
      memberId?: string;
  }
  interface BlockMemberRequest {
      _id: string;
  }
  interface BlockMemberResponse {
      member?: Member;
  }
  interface MemberBlocked {
      /**
       * Member id who got blocked
       * @readonly
       */
      memberId?: string;
  }
  interface MemberSelfBlockForbiddenPayload {
      /** Target's member ID. */
      memberId?: string;
  }
  interface OwnerMemberBlockForbiddenPayload {
      /** Owner's member ID. */
      memberId?: string;
  }
  interface ActiveSubscriptionMemberBlockForbiddenPayload {
      /** Active subscription member ID. */
      memberId?: string;
  }
  interface DisconnectMemberRequest {
      _id: string;
  }
  interface DisconnectMemberResponse {
      member?: Member;
  }
  interface DeleteMemberRequest {
      /** ID of the member to delete. */
      _id: string;
      /**
       * ID of a member receiving deleted member's content
       * @internal
       */
      contentAssigneeId?: string | null;
  }
  interface DeleteMemberResponse {
  }
  interface ContentReassignmentRequested {
      fromMember?: Member;
      toMember?: Member;
  }
  interface ContentDeletionRequested {
      member?: Member;
  }
  interface DeleteMyMemberRequest {
      /** ID of a member receiving deleted member's content */
      contentAssigneeId?: string | null;
  }
  interface DeleteMyMemberResponse {
  }
  interface BulkDeleteMembersRequest {
      /** Member ids to be deleted */
      memberIds: string[];
  }
  interface BulkDeleteMembersResponse {
      /** Results. */
      results?: BulkMemberResult[];
      /** Bulk action result metadata */
      bulkActionMetadata?: BulkActionMetadata;
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
  interface BulkMemberResult {
      itemMetadata?: ItemMetadata;
  }
  interface BulkActionMetadata {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface BulkDeleteMembersByFilterRequest {
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter: any;
      /** ID of a member receiving deleted members' content. */
      contentAssigneeId?: string | null;
      /** Plain text search. */
      search?: Search;
  }
  interface BulkDeleteMembersByFilterResponse {
      /** Token to be used to query an "async jobs service" */
      jobId?: string;
  }
  interface BulkApproveMembersRequest {
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter: any;
  }
  interface BulkApproveMembersResponse {
      /** Token to be used to query an "async jobs service" */
      jobId?: string;
  }
  interface BulkBlockMembersRequest {
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter: any;
  }
  interface BulkBlockMembersResponse {
      /** Token to be used to query an "async jobs service" */
      jobId?: string;
  }
  interface CreateMemberRequest {
      /** Member to create. */
      member?: Member;
  }
  interface CreateMemberResponse {
      /** New member. */
      member?: Member;
  }
  interface UpdateMemberRequest {
      /** Member to update. */
      member?: Member;
  }
  interface UpdateMemberResponse {
      member?: Member;
  }
  interface DeleteMemberPhonesRequest {
      /** ID of the member whose phone numbers will be deleted. */
      _id: string;
  }
  interface DeleteMemberPhonesResponse {
      /** Updated member. */
      member?: Member;
  }
  interface DeleteMemberEmailsRequest {
      /** ID of the member whose email addresses will be deleted. */
      _id: string;
  }
  interface DeleteMemberEmailsResponse {
      /** Updated member. */
      member?: Member;
  }
  interface DeleteMemberAddressesRequest {
      /** ID of the member whose street addresses will be deleted. */
      _id: string;
  }
  interface DeleteMemberAddressesResponse {
      /** Updated member. */
      member?: Member;
  }
  interface Empty$1 {
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
  interface MemberOwnershipTransferred {
      fromMember?: Member;
      toMember?: Member;
  }
  interface MemberIdChanged {
      fromId?: string;
      toId?: string;
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
   * Updates the currently logged in member's slug.
   *
   * The `slug` is the end of a member's URL that refers to a specific logged-in member. For example, if a member's URL is `https://example.com/member/{my-member-slug}`, the slug is `my-member-slug`. The slug is case-sensitive and is generally derived from the member's `nickname`; otherwise, it's derived from the `loginEmail`.
   *
   * > **Note:**
   * > Only logged-in members can call this function without elevated permissions.
   * > To call this function as a different identity, [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate) are required.
   * @param slug - New slug.
   * @public
   * @documentationMaturity preview
   * @requiredField slug
   */
  function updateCurrentMemberSlug(slug: string): Promise<UpdateMySlugResponse>;
  /**
   * Change member slug.
   * @param _id - ID of the member whose slug will be updated.
   * @param slug - New slug.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField slug
   */
  function updateMemberSlug(_id: string, slug: string): Promise<UpdateMemberSlugResponse>;
  /**
   * Joins the currently logged-in member to the site community and sets their profile to public.
   *
   * When a member's profile is public, they have access to the site's
   * [Members Area](https://support.wix.com/en/article/about-members-area)
   * features — such as chat, forum, and followers —
   * and their profile is visible to other members and site visitors.
   *
   * > **Note:**
   * > Only logged-in members can call this function without elevated permissions.
   * > To call this function as a different identity, [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate) are required.
   * @public
   * @returns Member profile.
   */
  function joinCommunity(): Promise<JoinCommunityResponse>;
  /**
   * Removes the currently logged-in member from the site community and sets their profile to private.
   *
   * When a member's profile is private,
   * they do not have access to the site's
   * [Members Area](https://support.wix.com/en/article/about-members-area)
   * features — such as chat, forum, and followers —
   * and their profile is hidden from other members and site visitors.
   *
   * > **Notes:**
   * > + If a member leaves the site's community, their content (such as forum posts and blog comments) remain publicly visible.
   *
   * > + Only logged-in members can call this function without elevated permissions.
   * > + To call this function as a different identity, [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate) are required.
   * @public
   * @returns Member profile.
   */
  function leaveCommunity(): Promise<LeaveCommunityResponse>;
  /**
   * Retrieves the currently logged-in member.
   * @public
   * @documentationMaturity preview
   * @returns Member profile.
   */
  function getCurrentMember(options?: GetCurrentMemberOptions): Promise<GetMyMemberResponse>;
  interface GetCurrentMemberOptions {
      /**
       * Predefined set of fields to return.
       *
       * - `"FULL"`: Returns all fields.
       * - `"PUBLIC"`: Returns `_id` and all fields under `profile`.
       *
       * > **Note:**
       * > When returning the `"PUBLIC"` fieldset,
       * > `profile.status`, `profile.privacyStatus`, and `profile.activityStatus`
       * > are returned as `"UNKNOWN"`.
       */
      fieldSet?: Set;
      /**
       * Predefined set of fields to return. One of:
       *
       * - `FULL`: Returns all fields.
       * - `PUBLIC`: Returns `id`, `contactId`, and the `profile` object. `status`, `privacyStatus`, and `activityStatus` are returned as `UNKNOWN`.
       * - `EXTENDED`: Returns `id`, `loginEmail`, `status`, `contactId`, `privacyStatus`, `activityStatus`, and the `profile` object.
       *
       * Default: `PUBLIC`.
       */
      fieldsets?: Set[];
  }
  /**
   * Retrieves a member by ID.
   *
   * >**Note:** The returned Member object contains only the fields that were explicitly added to the Member object. Custom Contact fields are **not** automatically added to the Member object. They must be [added to the Member object by the site owner](https://support.wix.com/en/article/site-members-customizing-your-member-profile-fields).
   *
   * @param _id - Member ID.
   * @public
   * @requiredField _id
   * @param options - Fieldset options.
   * @returns The requested member.
   */
  function getMember(_id: string, options?: GetMemberOptions): Promise<Member>;
  interface GetMemberOptions {
      /**
       * @internal
       * @internal
       */
      fieldSet?: Set;
      /**
       * Predefined set of fields to return. One of:
       * - `"FULL"`: Returns all fields.
       * - `"PUBLIC"`: Returns `id`, `contactId`, and the `profile` object. `status`, `privacyStatus`, and `activityStatus` are returned as `UNKNOWN`.
       * - `"EXTENDED"`: Returns `id`, `loginEmail`, `status`, `contactId`, `privacyStatus`, `activityStatus`, and the `profile` object.
       *
       * Default: `"PUBLIC"`.
       */
      fieldsets?: Set[];
  }
  /**
   * Lists site members, given the provided paging and fieldsets.
   *
   * - `PUBLIC` fieldset returns `id` and `profile` object. `status`, `privacyStatus` and `activityStatus` are returned as `UNKNOWN`.
   * - `FULL` fieldset returns all fields.
   * @public
   * @documentationMaturity preview
   * @param options - Options for paging, sorting, and specifying fields to return.
   */
  function listMembers(options?: ListMembersOptions): Promise<ListMembersResponse>;
  interface ListMembersOptions {
      /** Paging options. */
      paging?: Paging;
      /**
       * @internal
       * @internal
       * @internal
       */
      fieldSet?: Set;
      /**
       * Predefined set of fields to return. One of:
       * - `"FULL"`: Returns all fields.
       * - `"PUBLIC"`: Returns `id`, `contactId`, and the `profile` object. `status`, `privacyStatus`, and `activityStatus` are returned as `UNKNOWN`.
       * - `"EXTENDED"`: Returns `id`, `loginEmail`, `status`, `contactId`, `privacyStatus`, `activityStatus`, and the `profile` object.
       *
       * Default: `"PUBLIC"`.
       */
      fieldsets?: Set[];
      /** Sorting options. */
      sorting?: Sorting[];
      /**
       * Cursor paging.
       *
       * Priority over paging property
       * @internal
       */
      cursorPaging?: CursorPaging;
  }
  /**
   * Retrieves a list of up to 100 members, given the provided filters, fieldsets, sorting and paging, and returns a `MembersQueryBuilder` object.
   *
   * The returned object contains the query definition which is typically used to run the query using the `find()` function.
   *
   * You can refine the query by chaining `MembersQueryBuilder` functions onto the query. `MembersQueryBuilder` functions enable you to sort, filter, and control the results that `queryMembers()` returns. The functions that are chained to `queryMembers()` are applied in the order they are called.
   *
   * `queryMembers()` runs with the following `MembersQueryBuilder` defaults that you can override:
   * - `skip`: `0`
   * - `limit`: `50`
   *
   * Currently supported fields for sorting:
   * - `profile.nickname`
   * - `contact.firstName`
   * - `contact.lastName`
   * - `createdDate`
   * - `lastLoginDate`
   *
   * The following `MembersQueryBuilder` functions are supported for the `queryMembers()` function. For a full description of the Locations object, see the returned for the `items` property in `MembersQueryResult`.
   * @public
   * @documentationMaturity preview
   * @param options - Query options.
   */
  function queryMembers(options?: QueryMembersOptions): MembersQueryBuilder;
  interface QueryMembersOptions {
      /**
       * @internal
       * @internal
       * @internal
       */
      fieldSet?: Set | undefined;
      /**
       * Predefined set of fields to return. One of:
       * - `"FULL"`: Returns all fields.
       * - `"PUBLIC"`: Returns `id`, `contactId`, and the `profile` object. `status`, `privacyStatus`, and `activityStatus` are returned as `UNKNOWN`.
       * - `"EXTENDED"`: Returns `id`, `loginEmail`, `status`, `contactId`, `privacyStatus`, `activityStatus`, and the `profile` object.
       *
       * Default: `"PUBLIC"`.
       */
      fieldsets?: Set[] | undefined;
      /** Plain text search. */
      search?: Search | undefined;
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
  interface MembersQueryResult extends QueryOffsetResult {
      items: Member[];
      query: MembersQueryBuilder;
      next: () => Promise<MembersQueryResult>;
      prev: () => Promise<MembersQueryResult>;
  }
  interface MembersQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'loginEmail' | 'contact.firstName' | 'contact.lastName' | 'profile.nickname' | 'profile.slug' | 'privacyStatus', value: any) => MembersQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'loginEmail' | 'contact.firstName' | 'contact.lastName' | 'profile.nickname' | 'profile.slug' | 'privacyStatus', value: any) => MembersQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'loginEmail' | 'contact.firstName' | 'contact.lastName' | 'profile.nickname' | 'profile.slug', value: string) => MembersQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | 'loginEmail' | 'contact.firstName' | 'contact.lastName' | 'profile.nickname' | 'profile.slug' | 'privacyStatus', value: any[]) => MembersQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'loginEmail' | 'contact.firstName' | 'contact.lastName' | 'profile.nickname' | 'profile.slug' | 'privacyStatus', value: any) => MembersQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | 'loginEmail' | 'contact.firstName' | 'contact.lastName' | 'profile.nickname' | 'profile.slug' | 'privacyStatus', value: boolean) => MembersQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => MembersQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => MembersQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<MembersQueryResult>;
  }
  /**
   * Restricts member's social participation in the community.
   *
   * After this action, muted member cannot leave comments, like or share posts.
   *
   * Verticals, which are respecting this property:
   *
   * - Forum
   * - Blog
   *
   * Returns full member entity with updated activity_status.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function muteMember(_id: string): Promise<MuteMemberResponse>;
  /**
   * Lifts restrictions of member's social participation in the community
   *
   * After this action, unmuted member can leave comments, post likes or share posts.
   *
   * Verticals, which are respecting this property:
   *
   * - Forum
   * - Blog
   *
   * Returns full member entity with updated activity_status.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function unmuteMember(_id: string): Promise<UnmuteMemberResponse>;
  /**
   * Approves a pending member, giving them access to members-only pages on the site.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function approveMember(_id: string): Promise<ApproveMemberResponse>;
  /**
   * Blocks member.
   *
   * After this action, blocked member cannot log into Members-Only pages on a site.
   *
   * Returns full member entity with updated status.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function blockMember(_id: string): Promise<BlockMemberResponse>;
  /**
   * Disconnects member.
   *
   * After this action, offline member cannot log into on a site. Member is not visible in Business Manager.
   *
   * Returns full member entity with updated status.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function disconnectMember(_id: string): Promise<DisconnectMemberResponse>;
  /**
   * Deletes a member.
   *
   * The `deleteMember()` function returns a Promise that resolves to a member object when the specified member is deleted.
   *
   * >**Note:** This function permanently deletes a member. Once deleted, a member cannot be restored.
   * @param _id - ID of the member to delete.
   * @public
   * @requiredField _id
   * @adminMethod
   */
  function deleteMember(_id: string, options?: DeleteMemberOptions): Promise<void>;
  interface DeleteMemberOptions {
      /**
       * ID of a member receiving deleted member's content
       * @internal
       */
      contentAssigneeId?: string | null;
  }
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function deleteMyMember(options?: DeleteMyMemberOptions): Promise<void>;
  interface DeleteMyMemberOptions {
      /** ID of a member receiving deleted member's content */
      contentAssigneeId?: string | null;
  }
  /**
   * Deletes multiple members which satisfy the provided filter.
   * @param memberIds - Member ids to be deleted
   * @internal
   * @documentationMaturity preview
   * @requiredField memberIds
   * @adminMethod
   */
  function bulkDeleteMembers(memberIds: string[]): Promise<BulkDeleteMembersResponse>;
  /**
   * Deletes multiple members which satisfy the provided filter.
   * @param filter - A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf)
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @adminMethod
   */
  function bulkDeleteMembersByFilter(filter: any, options?: BulkDeleteMembersByFilterOptions): Promise<BulkDeleteMembersByFilterResponse>;
  interface BulkDeleteMembersByFilterOptions {
      /** ID of a member receiving deleted members' content. */
      contentAssigneeId?: string | null;
      /** Plain text search. */
      search?: Search;
  }
  /**
   * Approves multiple members which satisfy the provided filter.
   * @param filter - A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf)
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @adminMethod
   */
  function bulkApproveMembers(filter: any): Promise<BulkApproveMembersResponse>;
  /**
   * Blocks multiple members which satisfy the provided filter.
   *
   * See documentation for blocking of a single member [here](https://bo.wix.com/wix-docs/rest/members/members/block-member)
   * @param filter - A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf)
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @adminMethod
   */
  function bulkBlockMembers(filter: any): Promise<BulkBlockMembersResponse>;
  /**
   * Creates a site member.
   *
   * After creation, you can use the `sendSetPasswordEmail()` function in the Members Authentication API to email the member with a link to set their password.
   * The member can log in to the site once they set their password for the first time.
   *
   * > **Note:**
   * > When creating multiple members, set your requests at least 1 second apart to keep below rate limits.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   * @returns New member.
   */
  function createMember(options?: CreateMemberOptions): Promise<Member>;
  interface CreateMemberOptions {
      /** Member to create. */
      member?: Member;
  }
  /**
   * Updates a member's properties.
   *
   * Only the requested fields are updated.
   * To clear a field's value, set an empty value with an empty string `""`.
   *
   * > **Note:**
   * > Updating the `contact.addresses`, `contact.emails`, or `contact.phones` array overwrites the entire array, so any existing values you want to retain must be passed in the `updateMember()` call along with the new values to add.
   * > However, passing an empty array will have no effect, and these functions must be used to clear all data from the respective array:
   * >- To clear `contact.addresses`, use `deleteMemberAddresses()`.
   * >- To clear `contact.emails`, use `deleteMemberEmails()`.
   * >- To clear `contact.phones`, use `deleteMemberPhones()`.
   *
   * > **Note:**
   * > Only logged-in members can call this function without elevated permissions.
   * > To call this function as a different identity, [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate) are required.
   * @param _id - Member ID.
   * @public
   * @requiredField _id
   * @requiredField member
   * @param options - Member to update.
   */
  function updateMember(_id: string | null, member: UpdateMember): Promise<Member>;
  interface UpdateMember {
      /**
       * Member ID.
       * @readonly
       */
      _id?: string | null;
      /** Email used by the member to log in to the site. */
      loginEmail?: string | null;
      /**
       * Whether the email used by the member has been verified.
       * @readonly
       */
      loginEmailVerified?: boolean | null;
      /**
       * Member site access status.
       *
       * - `PENDING`: Member created and is waiting for approval by site owner.
       * - `APPROVED`: Member can log in to the site.
       * - `OFFLINE`: Member is a [guest author](https://support.wix.com/en/article/wix-blog-adding-guest-authors-to-your-blog) for the site blog and cannot log in to the site.
       * - `BLOCKED`: Member is blocked and cannot log in to the site.
       * - `UNKNOWN`: Insufficient permissions to get the status.
       * @readonly
       */
      status?: Status;
      /**
       * Contact ID.
       * @readonly
       */
      contactId?: string | null;
      /**
       * Member's contact information. Contact information is stored in the
       * [Contact List](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fcontacts).
       */
      contact?: Contact;
      /** Profile display info. */
      profile?: Profile;
      /**
       * Member privacy status.
       *
       * - `PUBLIC`: Member is visible to everyone.
       * - `PRIVATE`: Member is hidden from site visitors and other site members. Member is returned only to site contributors and apps with the appropriate permissions.
       * - `UNKNOWN`: Insufficient permissions to get the status.
       */
      privacyStatus?: PrivacyStatusStatus;
      /**
       * Member activity status.
       *
       * - `ACTIVE`: Member can write forum posts and blog comments.
       * - `MUTED`: Member cannot write forum posts or blog comments.
       * - `UNKNOWN`: Insufficient permissions to get the status.
       * @readonly
       */
      activityStatus?: ActivityStatusStatus;
      /**
       * Date and time when the member was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time when the member was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Date and time when the member last logged in to the site.
       * @readonly
       */
      lastLoginDate?: Date;
      /**
       * Extended fields
       * @internal
       */
      extendedFields?: ExtendedFields;
  }
  /**
   * Clears a member's phone numbers.
   *
   * The `deleteMemberPhones()` function clears the `phones` array under the `contact` property.
   *
   * > **Note:**
   * > Only logged-in members can call this function without elevated permissions.
   * > To call this function as a different identity, [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate) are required.
   * @param _id - ID of the member whose phone numbers will be deleted.
   * @public
   * @requiredField _id
   */
  function deleteMemberPhones(_id: string): Promise<DeleteMemberPhonesResponse>;
  /**
   * Clears a member's email addresses.
   *
   * The `deleteMemberEmails()` function clears the `emails` array under the `contact` property.
   *
   * > **Notes:**
   * > A member can still log in with their `loginEmail`,
   * > which is not cleared when this function is called.
   *
   * > Only logged-in members can call this function without elevated permissions.
   * > To call this function as a different identity, [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate) are required.
   * @param _id - ID of the member whose email addresses will be deleted.
   * @public
   * @requiredField _id
   */
  function deleteMemberEmails(_id: string): Promise<DeleteMemberEmailsResponse>;
  /**
   * Deletes a member's street addresses.
   *
   * The `deleteMemberAddresses()` function clears the `addresses` array under the `contact` property.
   *
   * > **Note:**
   * > Only logged-in members can call this function without elevated permissions.
   * > To call this function as a different identity, [elevated permissions](https://www.wix.com/velo/reference/wix-auth/elevate) are required.
   * @param _id - ID of the member whose street addresses will be deleted.
   * @public
   * @requiredField _id
   */
  function deleteMemberAddresses(_id: string): Promise<DeleteMemberAddressesResponse>;
  
  type membersV1Member_universal_d_Member = Member;
  type membersV1Member_universal_d_Status = Status;
  const membersV1Member_universal_d_Status: typeof Status;
  type membersV1Member_universal_d_Contact = Contact;
  type membersV1Member_universal_d_Address = Address;
  type membersV1Member_universal_d_AddressStreetOneOf = AddressStreetOneOf;
  type membersV1Member_universal_d_StreetAddress = StreetAddress;
  type membersV1Member_universal_d_CustomField = CustomField;
  type membersV1Member_universal_d_Profile = Profile;
  type membersV1Member_universal_d_Image = Image;
  type membersV1Member_universal_d_PrivacyStatusStatus = PrivacyStatusStatus;
  const membersV1Member_universal_d_PrivacyStatusStatus: typeof PrivacyStatusStatus;
  type membersV1Member_universal_d_ActivityStatusStatus = ActivityStatusStatus;
  const membersV1Member_universal_d_ActivityStatusStatus: typeof ActivityStatusStatus;
  type membersV1Member_universal_d_ExtendedFields = ExtendedFields;
  type membersV1Member_universal_d_InvalidateCache = InvalidateCache;
  type membersV1Member_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type membersV1Member_universal_d_App = App;
  type membersV1Member_universal_d_Page = Page;
  type membersV1Member_universal_d_URI = URI;
  type membersV1Member_universal_d_UpdateMySlugRequest = UpdateMySlugRequest;
  type membersV1Member_universal_d_UpdateMySlugResponse = UpdateMySlugResponse;
  type membersV1Member_universal_d_SlugAlreadyExistsPayload = SlugAlreadyExistsPayload;
  type membersV1Member_universal_d_UpdateMemberSlugRequest = UpdateMemberSlugRequest;
  type membersV1Member_universal_d_UpdateMemberSlugResponse = UpdateMemberSlugResponse;
  type membersV1Member_universal_d_JoinCommunityRequest = JoinCommunityRequest;
  type membersV1Member_universal_d_JoinCommunityResponse = JoinCommunityResponse;
  type membersV1Member_universal_d_MemberJoinedCommunity = MemberJoinedCommunity;
  type membersV1Member_universal_d_LeaveCommunityRequest = LeaveCommunityRequest;
  type membersV1Member_universal_d_LeaveCommunityResponse = LeaveCommunityResponse;
  type membersV1Member_universal_d_MemberLeftCommunity = MemberLeftCommunity;
  type membersV1Member_universal_d_GetMyMemberRequest = GetMyMemberRequest;
  type membersV1Member_universal_d_Set = Set;
  const membersV1Member_universal_d_Set: typeof Set;
  type membersV1Member_universal_d_GetMyMemberResponse = GetMyMemberResponse;
  type membersV1Member_universal_d_GetMemberRequest = GetMemberRequest;
  type membersV1Member_universal_d_GetMemberResponse = GetMemberResponse;
  type membersV1Member_universal_d_MemberToMemberBlockedPayload = MemberToMemberBlockedPayload;
  type membersV1Member_universal_d_ListMembersRequest = ListMembersRequest;
  type membersV1Member_universal_d_Paging = Paging;
  type membersV1Member_universal_d_Sorting = Sorting;
  type membersV1Member_universal_d_SortOrder = SortOrder;
  const membersV1Member_universal_d_SortOrder: typeof SortOrder;
  type membersV1Member_universal_d_CursorPaging = CursorPaging;
  type membersV1Member_universal_d_ListMembersResponse = ListMembersResponse;
  type membersV1Member_universal_d_PagingMetadata = PagingMetadata;
  type membersV1Member_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type membersV1Member_universal_d_Cursors = Cursors;
  type membersV1Member_universal_d_QueryMembersRequest = QueryMembersRequest;
  type membersV1Member_universal_d_Search = Search;
  type membersV1Member_universal_d_QueryMembersResponse = QueryMembersResponse;
  type membersV1Member_universal_d_MuteMemberRequest = MuteMemberRequest;
  type membersV1Member_universal_d_MuteMemberResponse = MuteMemberResponse;
  type membersV1Member_universal_d_MemberMuted = MemberMuted;
  type membersV1Member_universal_d_UnmuteMemberRequest = UnmuteMemberRequest;
  type membersV1Member_universal_d_UnmuteMemberResponse = UnmuteMemberResponse;
  type membersV1Member_universal_d_MemberUnmuted = MemberUnmuted;
  type membersV1Member_universal_d_ApproveMemberRequest = ApproveMemberRequest;
  type membersV1Member_universal_d_ApproveMemberResponse = ApproveMemberResponse;
  type membersV1Member_universal_d_MemberApproved = MemberApproved;
  type membersV1Member_universal_d_BlockMemberRequest = BlockMemberRequest;
  type membersV1Member_universal_d_BlockMemberResponse = BlockMemberResponse;
  type membersV1Member_universal_d_MemberBlocked = MemberBlocked;
  type membersV1Member_universal_d_MemberSelfBlockForbiddenPayload = MemberSelfBlockForbiddenPayload;
  type membersV1Member_universal_d_OwnerMemberBlockForbiddenPayload = OwnerMemberBlockForbiddenPayload;
  type membersV1Member_universal_d_ActiveSubscriptionMemberBlockForbiddenPayload = ActiveSubscriptionMemberBlockForbiddenPayload;
  type membersV1Member_universal_d_DisconnectMemberRequest = DisconnectMemberRequest;
  type membersV1Member_universal_d_DisconnectMemberResponse = DisconnectMemberResponse;
  type membersV1Member_universal_d_DeleteMemberRequest = DeleteMemberRequest;
  type membersV1Member_universal_d_DeleteMemberResponse = DeleteMemberResponse;
  type membersV1Member_universal_d_ContentReassignmentRequested = ContentReassignmentRequested;
  type membersV1Member_universal_d_ContentDeletionRequested = ContentDeletionRequested;
  type membersV1Member_universal_d_DeleteMyMemberRequest = DeleteMyMemberRequest;
  type membersV1Member_universal_d_DeleteMyMemberResponse = DeleteMyMemberResponse;
  type membersV1Member_universal_d_BulkDeleteMembersRequest = BulkDeleteMembersRequest;
  type membersV1Member_universal_d_BulkDeleteMembersResponse = BulkDeleteMembersResponse;
  type membersV1Member_universal_d_ItemMetadata = ItemMetadata;
  type membersV1Member_universal_d_ApplicationError = ApplicationError;
  type membersV1Member_universal_d_BulkMemberResult = BulkMemberResult;
  type membersV1Member_universal_d_BulkActionMetadata = BulkActionMetadata;
  type membersV1Member_universal_d_BulkDeleteMembersByFilterRequest = BulkDeleteMembersByFilterRequest;
  type membersV1Member_universal_d_BulkDeleteMembersByFilterResponse = BulkDeleteMembersByFilterResponse;
  type membersV1Member_universal_d_BulkApproveMembersRequest = BulkApproveMembersRequest;
  type membersV1Member_universal_d_BulkApproveMembersResponse = BulkApproveMembersResponse;
  type membersV1Member_universal_d_BulkBlockMembersRequest = BulkBlockMembersRequest;
  type membersV1Member_universal_d_BulkBlockMembersResponse = BulkBlockMembersResponse;
  type membersV1Member_universal_d_CreateMemberRequest = CreateMemberRequest;
  type membersV1Member_universal_d_CreateMemberResponse = CreateMemberResponse;
  type membersV1Member_universal_d_UpdateMemberRequest = UpdateMemberRequest;
  type membersV1Member_universal_d_UpdateMemberResponse = UpdateMemberResponse;
  type membersV1Member_universal_d_DeleteMemberPhonesRequest = DeleteMemberPhonesRequest;
  type membersV1Member_universal_d_DeleteMemberPhonesResponse = DeleteMemberPhonesResponse;
  type membersV1Member_universal_d_DeleteMemberEmailsRequest = DeleteMemberEmailsRequest;
  type membersV1Member_universal_d_DeleteMemberEmailsResponse = DeleteMemberEmailsResponse;
  type membersV1Member_universal_d_DeleteMemberAddressesRequest = DeleteMemberAddressesRequest;
  type membersV1Member_universal_d_DeleteMemberAddressesResponse = DeleteMemberAddressesResponse;
  type membersV1Member_universal_d_DomainEvent = DomainEvent;
  type membersV1Member_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type membersV1Member_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type membersV1Member_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type membersV1Member_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type membersV1Member_universal_d_ActionEvent = ActionEvent;
  type membersV1Member_universal_d_MetaSiteSpecialEvent = MetaSiteSpecialEvent;
  type membersV1Member_universal_d_MetaSiteSpecialEventPayloadOneOf = MetaSiteSpecialEventPayloadOneOf;
  type membersV1Member_universal_d_Asset = Asset;
  type membersV1Member_universal_d_State = State;
  const membersV1Member_universal_d_State: typeof State;
  type membersV1Member_universal_d_SiteCreated = SiteCreated;
  type membersV1Member_universal_d_SiteCreatedContext = SiteCreatedContext;
  const membersV1Member_universal_d_SiteCreatedContext: typeof SiteCreatedContext;
  type membersV1Member_universal_d_Namespace = Namespace;
  const membersV1Member_universal_d_Namespace: typeof Namespace;
  type membersV1Member_universal_d_SiteTransferred = SiteTransferred;
  type membersV1Member_universal_d_SiteDeleted = SiteDeleted;
  type membersV1Member_universal_d_DeleteContext = DeleteContext;
  type membersV1Member_universal_d_DeleteStatus = DeleteStatus;
  const membersV1Member_universal_d_DeleteStatus: typeof DeleteStatus;
  type membersV1Member_universal_d_SiteUndeleted = SiteUndeleted;
  type membersV1Member_universal_d_SitePublished = SitePublished;
  type membersV1Member_universal_d_SiteUnpublished = SiteUnpublished;
  type membersV1Member_universal_d_SiteMarkedAsTemplate = SiteMarkedAsTemplate;
  type membersV1Member_universal_d_SiteMarkedAsWixSite = SiteMarkedAsWixSite;
  type membersV1Member_universal_d_ServiceProvisioned = ServiceProvisioned;
  type membersV1Member_universal_d_ServiceRemoved = ServiceRemoved;
  type membersV1Member_universal_d_SiteRenamed = SiteRenamed;
  type membersV1Member_universal_d_SiteHardDeleted = SiteHardDeleted;
  type membersV1Member_universal_d_NamespaceChanged = NamespaceChanged;
  type membersV1Member_universal_d_StudioAssigned = StudioAssigned;
  type membersV1Member_universal_d_StudioUnassigned = StudioUnassigned;
  type membersV1Member_universal_d_MemberOwnershipTransferred = MemberOwnershipTransferred;
  type membersV1Member_universal_d_MemberIdChanged = MemberIdChanged;
  type membersV1Member_universal_d_MessageEnvelope = MessageEnvelope;
  type membersV1Member_universal_d_IdentificationData = IdentificationData;
  type membersV1Member_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type membersV1Member_universal_d_WebhookIdentityType = WebhookIdentityType;
  const membersV1Member_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const membersV1Member_universal_d_updateCurrentMemberSlug: typeof updateCurrentMemberSlug;
  const membersV1Member_universal_d_updateMemberSlug: typeof updateMemberSlug;
  const membersV1Member_universal_d_joinCommunity: typeof joinCommunity;
  const membersV1Member_universal_d_leaveCommunity: typeof leaveCommunity;
  const membersV1Member_universal_d_getCurrentMember: typeof getCurrentMember;
  type membersV1Member_universal_d_GetCurrentMemberOptions = GetCurrentMemberOptions;
  const membersV1Member_universal_d_getMember: typeof getMember;
  type membersV1Member_universal_d_GetMemberOptions = GetMemberOptions;
  const membersV1Member_universal_d_listMembers: typeof listMembers;
  type membersV1Member_universal_d_ListMembersOptions = ListMembersOptions;
  const membersV1Member_universal_d_queryMembers: typeof queryMembers;
  type membersV1Member_universal_d_QueryMembersOptions = QueryMembersOptions;
  type membersV1Member_universal_d_MembersQueryResult = MembersQueryResult;
  type membersV1Member_universal_d_MembersQueryBuilder = MembersQueryBuilder;
  const membersV1Member_universal_d_muteMember: typeof muteMember;
  const membersV1Member_universal_d_unmuteMember: typeof unmuteMember;
  const membersV1Member_universal_d_approveMember: typeof approveMember;
  const membersV1Member_universal_d_blockMember: typeof blockMember;
  const membersV1Member_universal_d_disconnectMember: typeof disconnectMember;
  const membersV1Member_universal_d_deleteMember: typeof deleteMember;
  type membersV1Member_universal_d_DeleteMemberOptions = DeleteMemberOptions;
  const membersV1Member_universal_d_deleteMyMember: typeof deleteMyMember;
  type membersV1Member_universal_d_DeleteMyMemberOptions = DeleteMyMemberOptions;
  const membersV1Member_universal_d_bulkDeleteMembers: typeof bulkDeleteMembers;
  const membersV1Member_universal_d_bulkDeleteMembersByFilter: typeof bulkDeleteMembersByFilter;
  type membersV1Member_universal_d_BulkDeleteMembersByFilterOptions = BulkDeleteMembersByFilterOptions;
  const membersV1Member_universal_d_bulkApproveMembers: typeof bulkApproveMembers;
  const membersV1Member_universal_d_bulkBlockMembers: typeof bulkBlockMembers;
  const membersV1Member_universal_d_createMember: typeof createMember;
  type membersV1Member_universal_d_CreateMemberOptions = CreateMemberOptions;
  const membersV1Member_universal_d_updateMember: typeof updateMember;
  type membersV1Member_universal_d_UpdateMember = UpdateMember;
  const membersV1Member_universal_d_deleteMemberPhones: typeof deleteMemberPhones;
  const membersV1Member_universal_d_deleteMemberEmails: typeof deleteMemberEmails;
  const membersV1Member_universal_d_deleteMemberAddresses: typeof deleteMemberAddresses;
  namespace membersV1Member_universal_d {
    export {
      membersV1Member_universal_d_Member as Member,
      membersV1Member_universal_d_Status as Status,
      membersV1Member_universal_d_Contact as Contact,
      membersV1Member_universal_d_Address as Address,
      membersV1Member_universal_d_AddressStreetOneOf as AddressStreetOneOf,
      membersV1Member_universal_d_StreetAddress as StreetAddress,
      membersV1Member_universal_d_CustomField as CustomField,
      membersV1Member_universal_d_Profile as Profile,
      membersV1Member_universal_d_Image as Image,
      membersV1Member_universal_d_PrivacyStatusStatus as PrivacyStatusStatus,
      membersV1Member_universal_d_ActivityStatusStatus as ActivityStatusStatus,
      membersV1Member_universal_d_ExtendedFields as ExtendedFields,
      membersV1Member_universal_d_InvalidateCache as InvalidateCache,
      membersV1Member_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      membersV1Member_universal_d_App as App,
      membersV1Member_universal_d_Page as Page,
      membersV1Member_universal_d_URI as URI,
      membersV1Member_universal_d_UpdateMySlugRequest as UpdateMySlugRequest,
      membersV1Member_universal_d_UpdateMySlugResponse as UpdateMySlugResponse,
      membersV1Member_universal_d_SlugAlreadyExistsPayload as SlugAlreadyExistsPayload,
      membersV1Member_universal_d_UpdateMemberSlugRequest as UpdateMemberSlugRequest,
      membersV1Member_universal_d_UpdateMemberSlugResponse as UpdateMemberSlugResponse,
      membersV1Member_universal_d_JoinCommunityRequest as JoinCommunityRequest,
      membersV1Member_universal_d_JoinCommunityResponse as JoinCommunityResponse,
      membersV1Member_universal_d_MemberJoinedCommunity as MemberJoinedCommunity,
      membersV1Member_universal_d_LeaveCommunityRequest as LeaveCommunityRequest,
      membersV1Member_universal_d_LeaveCommunityResponse as LeaveCommunityResponse,
      membersV1Member_universal_d_MemberLeftCommunity as MemberLeftCommunity,
      membersV1Member_universal_d_GetMyMemberRequest as GetMyMemberRequest,
      membersV1Member_universal_d_Set as Set,
      membersV1Member_universal_d_GetMyMemberResponse as GetMyMemberResponse,
      membersV1Member_universal_d_GetMemberRequest as GetMemberRequest,
      membersV1Member_universal_d_GetMemberResponse as GetMemberResponse,
      membersV1Member_universal_d_MemberToMemberBlockedPayload as MemberToMemberBlockedPayload,
      membersV1Member_universal_d_ListMembersRequest as ListMembersRequest,
      membersV1Member_universal_d_Paging as Paging,
      membersV1Member_universal_d_Sorting as Sorting,
      membersV1Member_universal_d_SortOrder as SortOrder,
      membersV1Member_universal_d_CursorPaging as CursorPaging,
      membersV1Member_universal_d_ListMembersResponse as ListMembersResponse,
      membersV1Member_universal_d_PagingMetadata as PagingMetadata,
      membersV1Member_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      membersV1Member_universal_d_Cursors as Cursors,
      membersV1Member_universal_d_QueryMembersRequest as QueryMembersRequest,
      Query$1 as Query,
      membersV1Member_universal_d_Search as Search,
      membersV1Member_universal_d_QueryMembersResponse as QueryMembersResponse,
      membersV1Member_universal_d_MuteMemberRequest as MuteMemberRequest,
      membersV1Member_universal_d_MuteMemberResponse as MuteMemberResponse,
      membersV1Member_universal_d_MemberMuted as MemberMuted,
      membersV1Member_universal_d_UnmuteMemberRequest as UnmuteMemberRequest,
      membersV1Member_universal_d_UnmuteMemberResponse as UnmuteMemberResponse,
      membersV1Member_universal_d_MemberUnmuted as MemberUnmuted,
      membersV1Member_universal_d_ApproveMemberRequest as ApproveMemberRequest,
      membersV1Member_universal_d_ApproveMemberResponse as ApproveMemberResponse,
      membersV1Member_universal_d_MemberApproved as MemberApproved,
      membersV1Member_universal_d_BlockMemberRequest as BlockMemberRequest,
      membersV1Member_universal_d_BlockMemberResponse as BlockMemberResponse,
      membersV1Member_universal_d_MemberBlocked as MemberBlocked,
      membersV1Member_universal_d_MemberSelfBlockForbiddenPayload as MemberSelfBlockForbiddenPayload,
      membersV1Member_universal_d_OwnerMemberBlockForbiddenPayload as OwnerMemberBlockForbiddenPayload,
      membersV1Member_universal_d_ActiveSubscriptionMemberBlockForbiddenPayload as ActiveSubscriptionMemberBlockForbiddenPayload,
      membersV1Member_universal_d_DisconnectMemberRequest as DisconnectMemberRequest,
      membersV1Member_universal_d_DisconnectMemberResponse as DisconnectMemberResponse,
      membersV1Member_universal_d_DeleteMemberRequest as DeleteMemberRequest,
      membersV1Member_universal_d_DeleteMemberResponse as DeleteMemberResponse,
      membersV1Member_universal_d_ContentReassignmentRequested as ContentReassignmentRequested,
      membersV1Member_universal_d_ContentDeletionRequested as ContentDeletionRequested,
      membersV1Member_universal_d_DeleteMyMemberRequest as DeleteMyMemberRequest,
      membersV1Member_universal_d_DeleteMyMemberResponse as DeleteMyMemberResponse,
      membersV1Member_universal_d_BulkDeleteMembersRequest as BulkDeleteMembersRequest,
      membersV1Member_universal_d_BulkDeleteMembersResponse as BulkDeleteMembersResponse,
      membersV1Member_universal_d_ItemMetadata as ItemMetadata,
      membersV1Member_universal_d_ApplicationError as ApplicationError,
      membersV1Member_universal_d_BulkMemberResult as BulkMemberResult,
      membersV1Member_universal_d_BulkActionMetadata as BulkActionMetadata,
      membersV1Member_universal_d_BulkDeleteMembersByFilterRequest as BulkDeleteMembersByFilterRequest,
      membersV1Member_universal_d_BulkDeleteMembersByFilterResponse as BulkDeleteMembersByFilterResponse,
      membersV1Member_universal_d_BulkApproveMembersRequest as BulkApproveMembersRequest,
      membersV1Member_universal_d_BulkApproveMembersResponse as BulkApproveMembersResponse,
      membersV1Member_universal_d_BulkBlockMembersRequest as BulkBlockMembersRequest,
      membersV1Member_universal_d_BulkBlockMembersResponse as BulkBlockMembersResponse,
      membersV1Member_universal_d_CreateMemberRequest as CreateMemberRequest,
      membersV1Member_universal_d_CreateMemberResponse as CreateMemberResponse,
      membersV1Member_universal_d_UpdateMemberRequest as UpdateMemberRequest,
      membersV1Member_universal_d_UpdateMemberResponse as UpdateMemberResponse,
      membersV1Member_universal_d_DeleteMemberPhonesRequest as DeleteMemberPhonesRequest,
      membersV1Member_universal_d_DeleteMemberPhonesResponse as DeleteMemberPhonesResponse,
      membersV1Member_universal_d_DeleteMemberEmailsRequest as DeleteMemberEmailsRequest,
      membersV1Member_universal_d_DeleteMemberEmailsResponse as DeleteMemberEmailsResponse,
      membersV1Member_universal_d_DeleteMemberAddressesRequest as DeleteMemberAddressesRequest,
      membersV1Member_universal_d_DeleteMemberAddressesResponse as DeleteMemberAddressesResponse,
      Empty$1 as Empty,
      membersV1Member_universal_d_DomainEvent as DomainEvent,
      membersV1Member_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      membersV1Member_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      membersV1Member_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      membersV1Member_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      membersV1Member_universal_d_ActionEvent as ActionEvent,
      membersV1Member_universal_d_MetaSiteSpecialEvent as MetaSiteSpecialEvent,
      membersV1Member_universal_d_MetaSiteSpecialEventPayloadOneOf as MetaSiteSpecialEventPayloadOneOf,
      membersV1Member_universal_d_Asset as Asset,
      membersV1Member_universal_d_State as State,
      membersV1Member_universal_d_SiteCreated as SiteCreated,
      membersV1Member_universal_d_SiteCreatedContext as SiteCreatedContext,
      membersV1Member_universal_d_Namespace as Namespace,
      membersV1Member_universal_d_SiteTransferred as SiteTransferred,
      membersV1Member_universal_d_SiteDeleted as SiteDeleted,
      membersV1Member_universal_d_DeleteContext as DeleteContext,
      membersV1Member_universal_d_DeleteStatus as DeleteStatus,
      membersV1Member_universal_d_SiteUndeleted as SiteUndeleted,
      membersV1Member_universal_d_SitePublished as SitePublished,
      membersV1Member_universal_d_SiteUnpublished as SiteUnpublished,
      membersV1Member_universal_d_SiteMarkedAsTemplate as SiteMarkedAsTemplate,
      membersV1Member_universal_d_SiteMarkedAsWixSite as SiteMarkedAsWixSite,
      membersV1Member_universal_d_ServiceProvisioned as ServiceProvisioned,
      membersV1Member_universal_d_ServiceRemoved as ServiceRemoved,
      membersV1Member_universal_d_SiteRenamed as SiteRenamed,
      membersV1Member_universal_d_SiteHardDeleted as SiteHardDeleted,
      membersV1Member_universal_d_NamespaceChanged as NamespaceChanged,
      membersV1Member_universal_d_StudioAssigned as StudioAssigned,
      membersV1Member_universal_d_StudioUnassigned as StudioUnassigned,
      membersV1Member_universal_d_MemberOwnershipTransferred as MemberOwnershipTransferred,
      membersV1Member_universal_d_MemberIdChanged as MemberIdChanged,
      membersV1Member_universal_d_MessageEnvelope as MessageEnvelope,
      membersV1Member_universal_d_IdentificationData as IdentificationData,
      membersV1Member_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      membersV1Member_universal_d_WebhookIdentityType as WebhookIdentityType,
      membersV1Member_universal_d_updateCurrentMemberSlug as updateCurrentMemberSlug,
      membersV1Member_universal_d_updateMemberSlug as updateMemberSlug,
      membersV1Member_universal_d_joinCommunity as joinCommunity,
      membersV1Member_universal_d_leaveCommunity as leaveCommunity,
      membersV1Member_universal_d_getCurrentMember as getCurrentMember,
      membersV1Member_universal_d_GetCurrentMemberOptions as GetCurrentMemberOptions,
      membersV1Member_universal_d_getMember as getMember,
      membersV1Member_universal_d_GetMemberOptions as GetMemberOptions,
      membersV1Member_universal_d_listMembers as listMembers,
      membersV1Member_universal_d_ListMembersOptions as ListMembersOptions,
      membersV1Member_universal_d_queryMembers as queryMembers,
      membersV1Member_universal_d_QueryMembersOptions as QueryMembersOptions,
      membersV1Member_universal_d_MembersQueryResult as MembersQueryResult,
      membersV1Member_universal_d_MembersQueryBuilder as MembersQueryBuilder,
      membersV1Member_universal_d_muteMember as muteMember,
      membersV1Member_universal_d_unmuteMember as unmuteMember,
      membersV1Member_universal_d_approveMember as approveMember,
      membersV1Member_universal_d_blockMember as blockMember,
      membersV1Member_universal_d_disconnectMember as disconnectMember,
      membersV1Member_universal_d_deleteMember as deleteMember,
      membersV1Member_universal_d_DeleteMemberOptions as DeleteMemberOptions,
      membersV1Member_universal_d_deleteMyMember as deleteMyMember,
      membersV1Member_universal_d_DeleteMyMemberOptions as DeleteMyMemberOptions,
      membersV1Member_universal_d_bulkDeleteMembers as bulkDeleteMembers,
      membersV1Member_universal_d_bulkDeleteMembersByFilter as bulkDeleteMembersByFilter,
      membersV1Member_universal_d_BulkDeleteMembersByFilterOptions as BulkDeleteMembersByFilterOptions,
      membersV1Member_universal_d_bulkApproveMembers as bulkApproveMembers,
      membersV1Member_universal_d_bulkBlockMembers as bulkBlockMembers,
      membersV1Member_universal_d_createMember as createMember,
      membersV1Member_universal_d_CreateMemberOptions as CreateMemberOptions,
      membersV1Member_universal_d_updateMember as updateMember,
      membersV1Member_universal_d_UpdateMember as UpdateMember,
      membersV1Member_universal_d_deleteMemberPhones as deleteMemberPhones,
      membersV1Member_universal_d_deleteMemberEmails as deleteMemberEmails,
      membersV1Member_universal_d_deleteMemberAddresses as deleteMemberAddresses,
    };
  }
  
  interface Role {
      roleKey?: string;
      title?: string;
  }
  interface AssignRoleRequest {
      memberId: string;
      roleKey: string;
  }
  interface AssignRoleResponse {
      roleKey?: string;
  }
  interface UnassignRoleRequest {
      memberId: string;
      roleKey: string;
  }
  interface UnassignRoleResponse {
      roleKey?: string;
  }
  interface GetRolesRequest {
      memberId: string;
  }
  interface GetRolesResponse {
      roles?: Role[];
  }
  interface QueryRolesRequest {
      /** Query options. */
      query?: Query;
  }
  interface Query {
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter?: any;
  }
  interface QueryRolesResponse {
      /** Map of members that met the query filter criteria. */
      rolesByMemberId?: Record<string, MemberRole>;
  }
  interface MemberRole {
      roles?: Role[];
  }
  interface PolicyAssignedToContributor {
      accountId?: string;
      metaSiteId?: string;
      policyIds?: string[];
  }
  interface Empty {
  }
  interface PolicyRemovedFromContributor {
      accountId?: string;
      metaSiteId?: string;
      policyIds?: string[];
  }
  interface PolicyUpdatedForContributor {
      accountId?: string;
      metaSiteId?: string;
      oldPolicyIds?: string[];
      newPolicyIds?: string[];
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField memberId
   * @requiredField roleKey
   */
  function assignRole(memberId: string, roleKey: string): Promise<AssignRoleResponse>;
  /** @internal
   * @documentationMaturity preview
   * @requiredField memberId
   * @requiredField roleKey
   */
  function unassignRole(memberId: string, roleKey: string): Promise<UnassignRoleResponse>;
  /** @internal
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function getRoles(memberId: string): Promise<GetRolesResponse>;
  /** @internal
   * @documentationMaturity preview
   */
  function queryRoles(options?: QueryRolesOptions): Promise<QueryRolesResponse>;
  interface QueryRolesOptions {
      /** Query options. */
      query?: Query;
  }
  
  type membersV1Role_universal_d_Role = Role;
  type membersV1Role_universal_d_AssignRoleRequest = AssignRoleRequest;
  type membersV1Role_universal_d_AssignRoleResponse = AssignRoleResponse;
  type membersV1Role_universal_d_UnassignRoleRequest = UnassignRoleRequest;
  type membersV1Role_universal_d_UnassignRoleResponse = UnassignRoleResponse;
  type membersV1Role_universal_d_GetRolesRequest = GetRolesRequest;
  type membersV1Role_universal_d_GetRolesResponse = GetRolesResponse;
  type membersV1Role_universal_d_QueryRolesRequest = QueryRolesRequest;
  type membersV1Role_universal_d_Query = Query;
  type membersV1Role_universal_d_QueryRolesResponse = QueryRolesResponse;
  type membersV1Role_universal_d_MemberRole = MemberRole;
  type membersV1Role_universal_d_PolicyAssignedToContributor = PolicyAssignedToContributor;
  type membersV1Role_universal_d_Empty = Empty;
  type membersV1Role_universal_d_PolicyRemovedFromContributor = PolicyRemovedFromContributor;
  type membersV1Role_universal_d_PolicyUpdatedForContributor = PolicyUpdatedForContributor;
  const membersV1Role_universal_d_assignRole: typeof assignRole;
  const membersV1Role_universal_d_unassignRole: typeof unassignRole;
  const membersV1Role_universal_d_getRoles: typeof getRoles;
  const membersV1Role_universal_d_queryRoles: typeof queryRoles;
  type membersV1Role_universal_d_QueryRolesOptions = QueryRolesOptions;
  namespace membersV1Role_universal_d {
    export {
      membersV1Role_universal_d_Role as Role,
      membersV1Role_universal_d_AssignRoleRequest as AssignRoleRequest,
      membersV1Role_universal_d_AssignRoleResponse as AssignRoleResponse,
      membersV1Role_universal_d_UnassignRoleRequest as UnassignRoleRequest,
      membersV1Role_universal_d_UnassignRoleResponse as UnassignRoleResponse,
      membersV1Role_universal_d_GetRolesRequest as GetRolesRequest,
      membersV1Role_universal_d_GetRolesResponse as GetRolesResponse,
      membersV1Role_universal_d_QueryRolesRequest as QueryRolesRequest,
      membersV1Role_universal_d_Query as Query,
      membersV1Role_universal_d_QueryRolesResponse as QueryRolesResponse,
      membersV1Role_universal_d_MemberRole as MemberRole,
      membersV1Role_universal_d_PolicyAssignedToContributor as PolicyAssignedToContributor,
      membersV1Role_universal_d_Empty as Empty,
      membersV1Role_universal_d_PolicyRemovedFromContributor as PolicyRemovedFromContributor,
      membersV1Role_universal_d_PolicyUpdatedForContributor as PolicyUpdatedForContributor,
      membersV1Role_universal_d_assignRole as assignRole,
      membersV1Role_universal_d_unassignRole as unassignRole,
      membersV1Role_universal_d_getRoles as getRoles,
      membersV1Role_universal_d_queryRoles as queryRoles,
      membersV1Role_universal_d_QueryRolesOptions as QueryRolesOptions,
    };
  }
  
  export { identityMembersV1Member_universal_d as authentication, membersV1Role_universal_d as authorization, badgesV3Badge_universal_d as badges, membersV1Member_universal_d as members };
}
