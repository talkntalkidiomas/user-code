declare module "wix-badges-backend.v3" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
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
       * Badge background color in hexadecimal RGB format.
       * Uppercase letters only.
       * Example: `#FFFFFF`.
       */
      backgroundColor?: string | null;
      /**
       * Badge text color in hexadecimal RGB format.
       * Uppercase letters only.
       * Example: `#C81B53`.
       */
      textColor?: string | null;
      /**
       * URL of the badge icon image.
       * _Recommended_ to use `SVG` image format as it is resolution independent and looks great at any scale.
       */
      icon?: string | null;
      /**
       * Whether the badge has special permissions
       * to access specific members-only pages.
       * When `true`, members with the badge receive special permissions,
       * and site contributors can
       * [manage badge permissions](https://support.wix.com/en/article/setting-permissions-for-a-member-badge)
       * in the site dashboard.
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
      /**
       * Pagination options. For more information, see
       * [API Query Language: The Paging Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section).
       */
      paging?: Paging;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListBadgesResponse {
      /** List of badges. */
      badges?: Badge[];
      /** Metadata for the paginated results. */
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
      sort?: Sorting[];
      /**
       * Pagination options. For more information, see
       * [API Query Language: The Paging Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section).
       */
      paging?: Paging;
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
  interface QueryBadgesResponse {
      /** List of badges. */
      badges?: Badge[];
      /** Metadata for the paginated results. */
      metadata?: PagingMetadata;
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
  interface ListMembersRequest {
      /** Badge ID. */
      _id: string;
      /**
       * Pagination options. For more information, see
       * [API Query Language: The Paging Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section).
       */
      paging?: Paging;
  }
  interface ListMembersResponse {
      /** Member IDs assigned to the badge. */
      memberIds?: string[];
      /** Metadata for the paginated results. */
      metadata?: PagingMetadata;
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
      badgeIds?: string[];
  }
  interface UpdateBadgesDisplayOrderResponse {
      /** Reordered badges list. */
      badges?: Badge[];
  }
  /**
   * Creates a new badge.
   * @param badge - Badge to create.
   * @public
   * @requiredField badge
   * @requiredField badge.backgroundColor
   * @requiredField badge.textColor
   * @requiredField badge.title
   */
  function createBadge(badge: Badge): Promise<CreateBadgeResponse>;
  /**
   * Updates a badge's specified properties.
   * @param _id - Badge ID.
   * @public
   * @requiredField _id
   * @requiredField badge
   */
  function updateBadge(_id: string, badge: UpdateBadge): Promise<UpdateBadgeResponse>;
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
       * Badge background color in hexadecimal RGB format.
       * Uppercase letters only.
       * Example: `#FFFFFF`.
       */
      backgroundColor?: string | null;
      /**
       * Badge text color in hexadecimal RGB format.
       * Uppercase letters only.
       * Example: `#C81B53`.
       */
      textColor?: string | null;
      /**
       * URL of the badge icon image.
       * _Recommended_ to use `SVG` image format as it is resolution independent and looks great at any scale.
       */
      icon?: string | null;
      /**
       * Whether the badge has special permissions
       * to access specific members-only pages.
       * When `true`, members with the badge receive special permissions,
       * and site contributors can
       * [manage badge permissions](https://support.wix.com/en/article/setting-permissions-for-a-member-badge)
       * in the site dashboard.
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
   * Retrieves up to 1000 badges, given the requested paging.
   * Default `paging.limit` is 100, `paging.offset` - 0.
   * For more information, see
   * [API Query Language: The Paging Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section).
   * @public */
  function listBadges(options?: ListBadgesOptions): Promise<ListBadgesResponse>;
  interface ListBadgesOptions {
      /**
       * Pagination options. For more information, see
       * [API Query Language: The Paging Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section).
       */
      paging?: Paging;
  }
  /**
   * Retrieves up to 1000 badges, given the requested query options, paging, and sorting.
   * Default `paging.limit` is 100, `paging.offset` - 0.
   * For more information, see
   * [API Query Language: The Paging Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section).
   * @public */
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
      sort?: Sorting[];
      /**
       * Pagination options. For more information, see
       * [API Query Language: The Paging Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section).
       */
      paging?: Paging;
  }
  /**
   * Retrieves a badge.
   * @param _id - Badge ID.
   * @public
   * @requiredField _id
   */
  function getBadge(_id: string): Promise<GetBadgeResponse>;
  /**
   * Deletes a badge.
   * @param _id - Badge ID.
   * @public
   * @requiredField _id
   */
  function deleteBadge(_id: string): Promise<void>;
  /** Retrieves the site's badge count, given the requested filtering. */
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
   * Assigns a badge to the specified members.
   * The members inherit the badge's permissions when they receive the badge, if applicable.
   * Badge permissions are added to previous member permissions (they don't replace existing permissions).
   * @param _id - Badge ID.
   * @param memberIds - List of member IDs to assign to the badge.
   * @public
   * @requiredField _id
   * @requiredField memberIds
   */
  function assignBadge(_id: string, memberIds: string[]): Promise<AssignBadgeResponse>;
  /**
   * Assigns multiple badges to the specified member.
   * The member inherits the badges' permissions when they receive the badge, if applicable.
   * Badge permissions are added to previous member permissions (they don't replace existing permissions).
   * @param memberId - Member ID.
   * @param ids - List of badge IDs to assign to the member.
   * @requiredField ids
   * @requiredField memberId
   */
  function assignBadges(memberId: string, ids: string[]): Promise<AssignBadgesResponse>;
  /**
   * Removes the requested members from a badge.
   * Members removed from a badge lose the badge's permissions, if applicable.
   * @param _id - Badge ID.
   * @param memberIds - List of members to remove.
   * @public
   * @requiredField _id
   * @requiredField memberIds
   */
  function unassignBadge(_id: string, memberIds: string[]): Promise<void>;
  /**
   * Retrieves up to 1000 site members
   * who have a specified badge.
   * Default `paging.limit` is 100, `paging.offset` - 0.
   * For more details on how to use paging, see documentation
   * [here](https://dev.wix.com/api/rest/getting-started/pagination).
   * @param _id - Badge ID.
   * @public
   * @requiredField _id
   */
  function listMembers(_id: string, options?: ListMembersOptions): Promise<ListMembersResponse>;
  interface ListMembersOptions {
      /**
       * Pagination options. For more information, see
       * [API Query Language: The Paging Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section).
       */
      paging?: Paging;
  }
  /**
   * Retrieves badges assigned to the requested members.
   * @param memberIds - List of members.
   * @public
   * @requiredField memberIds
   */
  function listMembersBadgeIds(memberIds: string[]): Promise<ListMembersBadgeIdsResponse>;
  /**
   * Retrieves member count per badge.
   * @public */
  function getMemberCountsPerBadge(): Promise<GetMemberCountsPerBadgeResponse>;
  /**
   * Updates badges' display order.
   * @public */
  function updateBadgesDisplayOrder(options?: UpdateBadgesDisplayOrderOptions): Promise<UpdateBadgesDisplayOrderResponse>;
  interface UpdateBadgesDisplayOrderOptions {
      /** Ordered badge IDs. */
      badgeIds?: string[];
  }
  
  export { AssignBadgeRequest, AssignBadgeResponse, AssignBadgesRequest, AssignBadgesResponse, Badge, BadgeAssigned, BadgeMemberCount, BadgeUnassigned, CountBadgesOptions, CountBadgesRequest, CountBadgesResponse, CreateBadgeRequest, CreateBadgeResponse, DeleteBadgeRequest, DeleteBadgeResponse, GetBadgeRequest, GetBadgeResponse, GetMemberCountsPerBadgeRequest, GetMemberCountsPerBadgeResponse, ListBadgesOptions, ListBadgesRequest, ListBadgesResponse, ListMembersBadgeIdsRequest, ListMembersBadgeIdsResponse, ListMembersOptions, ListMembersRequest, ListMembersResponse, MemberBadgeIds, Paging, PagingMetadata, QueryBadgesOptions, QueryBadgesRequest, QueryBadgesResponse, SortOrder, Sorting, UnassignBadgeRequest, UnassignBadgeResponse, UpdateBadge, UpdateBadgeRequest, UpdateBadgeResponse, UpdateBadgesDisplayOrderOptions, UpdateBadgesDisplayOrderRequest, UpdateBadgesDisplayOrderResponse, __debug, assignBadge, assignBadges, countBadges, createBadge, deleteBadge, getBadge, getMemberCountsPerBadge, listBadges, listMembers, listMembersBadgeIds, queryBadges, unassignBadge, updateBadge, updateBadgesDisplayOrder };
}
