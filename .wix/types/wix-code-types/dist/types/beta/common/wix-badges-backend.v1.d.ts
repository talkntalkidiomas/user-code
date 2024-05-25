declare module "wix-badges-backend.v1" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Badge {
      /** Badge id */
      _id?: string;
      /** Badge title */
      title?: string;
      /** Badge description */
      description?: string;
      /** Badge background color in 6-digit color hex (e.g. #FFFFFF) */
      backgroundColor?: string;
      /** Badge text color in 6-digit color hex (e.g. #FFFFFF) */
      textColor?: string;
      /** Badge icon SVG as 'https://...' */
      icon?: string;
      /** Id of role/group in groups service that badge assignee belongs to */
      roleId?: string;
      /** Indicates whether badge has permissions */
      hasPermissions?: boolean;
      /** Badge url keyword operator */
      slug?: string;
      /** Date when badge was created */
      dateCreated?: Date;
      /** Date when badge was last updated */
      dateUpdated?: Date;
  }
  interface CreateRequest {
      /** Badge title */
      title: string;
      /** Badge description */
      description?: string;
      /** Badge background color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      backgroundColor: string;
      /** Badge text color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      textColor: string;
      /** Badge icon SVG as 'https://...' */
      icon?: string;
      /** Indicates whether badge has permissions */
      hasPermissions?: boolean;
  }
  interface CreateResponse {
      /** Created badge */
      badge?: Badge;
  }
  interface UpdateRequest {
      /** Badge id */
      _id: string;
      /** Badge title */
      title: string;
      /** Badge description */
      description?: string;
      /** Badge background color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      backgroundColor: string;
      /** Badge text color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      textColor: string;
      /** Badge icon SVG as 'https://...' */
      icon?: string;
      /** Indicates whether badge has permissions */
      hasPermissions?: boolean;
  }
  interface UpdateResponse {
      /** Updated badge */
      badge?: Badge;
  }
  interface ListRequest {
      /** Limit the number of badges to return */
      limit?: number | null;
      /** Default offset is 0. */
      offset?: number | null;
  }
  interface ListResponse {
      /** List of badges in a site */
      badges?: Badge[];
  }
  interface QueryRequest {
      /** Filter criteria */
      filter?: Record<string, any> | null;
      /** Sorting criteria */
      sorting?: Sorting[];
      /** Result paging data */
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
  interface Paging {
      /** Limit the number of badges to return */
      limit?: number | null;
      /** Default offset is 0. */
      offset?: number | null;
  }
  interface QueryResponse {
      /** List of sorted badges in a site that satisfy filter and paging */
      badges?: Badge[];
      /** Total count of badges in a site that satisfy given filter */
      count?: string;
  }
  interface GetRequest {
      /** Badge id */
      _id: string;
  }
  interface GetResponse {
      /** Badge */
      badge?: Badge;
  }
  interface DeleteRequest {
      /** Badge id */
      _id: string;
  }
  interface DeleteResponse {
  }
  interface CountRequest {
      /** Filter criteria used for counting */
      filter?: Record<string, any> | null;
  }
  interface CountResponse {
      /** Badges count */
      count?: string;
  }
  interface AssignMembersRequest {
      /** Badge id */
      _id: string;
      /** Ids of members this badge should be assigned to */
      memberIds: string[];
  }
  interface AssignMembersResponse {
      /** Ids of members given badge has been assigned to */
      memberIds?: string[];
  }
  interface ListMembersRequest {
      /** Badge id */
      _id: string;
  }
  interface ListMembersResponse {
      /** Member ids who have the given badge assigned */
      memberIds?: string[];
  }
  interface ListMembersBadgeIdsRequest {
      /** Ids of members whose badge ids should be listed */
      memberIds: string[];
  }
  interface ListMembersBadgeIdsResponse {
      /** List of members with Ids of badges assigned to them */
      memberBadgeIds?: MemberBadgeIds[];
  }
  interface MemberBadgeIds {
      /** Member id */
      memberId?: string;
      /** Badge ids assigned to a given member */
      badgeId?: string[];
  }
  interface BulkRemoveMembersFromBadgeRequest {
      /** Badge id */
      _id: string;
      /** Ids of members given badge will be removed from */
      memberIds: string[];
  }
  interface BulkRemoveMembersFromBadgeResponse {
  }
  interface GetBadgesMembersCountRequest {
  }
  interface GetBadgesMembersCountResponse {
      /** Ids of badges with a member count with this assigned badge */
      badgeMemberCount?: BadgeMemberCount[];
  }
  interface BadgeMemberCount {
      /** Badge id */
      badgeId?: string;
      /** Number of members with assigned badge */
      memberCount?: number;
  }
  /**
   * Create badge
   * @param title - Badge title
   * @internal
   * @documentationMaturity preview
   * @requiredField options.backgroundColor
   * @requiredField options.textColor
   * @requiredField title
   * @adminMethod
   */
  function create(title: string, options?: CreateOptions): Promise<CreateResponse>;
  interface CreateOptions {
      /** Badge description */
      description?: string;
      /** Badge background color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      backgroundColor: string;
      /** Badge text color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      textColor: string;
      /** Badge icon SVG as 'https://...' */
      icon?: string;
      /** Indicates whether badge has permissions */
      hasPermissions?: boolean;
  }
  /**
   * Update badge
   * @param _id - Badge id
   * @param title - Badge title
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField options.backgroundColor
   * @requiredField options.textColor
   * @requiredField title
   * @adminMethod
   */
  function update(_id: string, title: string, options?: UpdateOptions): Promise<UpdateResponse>;
  interface UpdateOptions {
      /** Badge description */
      description?: string;
      /** Badge background color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      backgroundColor: string;
      /** Badge text color in 6-digit upper-cased color hex (e.g. #FFFFFF) */
      textColor: string;
      /** Badge icon SVG as 'https://...' */
      icon?: string;
      /** Indicates whether badge has permissions */
      hasPermissions?: boolean;
  }
  /**
   * List all badges in a site
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function list(options?: ListOptions): Promise<ListResponse>;
  interface ListOptions {
      /** Limit the number of badges to return */
      limit?: number | null;
      /** Default offset is 0. */
      offset?: number | null;
  }
  /**
   * Query badges in a site
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function query(options?: QueryOptions): Promise<QueryResponse>;
  interface QueryOptions {
      /** Filter criteria */
      filter?: Record<string, any> | null;
      /** Sorting criteria */
      sorting?: Sorting[];
      /** Result paging data */
      paging?: Paging;
  }
  /**
   * Get a badge
   * @param _id - Badge id
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function get(_id: string): Promise<GetResponse>;
  /**
   * Delete a badge
   * @param _id - Badge id
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function _delete(_id: string): Promise<void>;
  /**
   * Count badges in a site
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function count(options?: CountOptions): Promise<CountResponse>;
  interface CountOptions {
      /** Filter criteria used for counting */
      filter?: Record<string, any> | null;
  }
  /**
   * Assign a badge to the given members
   * @param _id - Badge id
   * @param memberIds - Ids of members this badge should be assigned to
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField memberIds
   * @adminMethod
   */
  function assignMembers(_id: string, memberIds: string[]): Promise<AssignMembersResponse>;
  /**
   * Return list of members that have the given badge
   * @param _id - Badge id
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function listMembers(_id: string): Promise<ListMembersResponse>;
  /**
   * Return list of badge ids assigned to a given members
   * @param memberIds - Ids of members whose badge ids should be listed
   * @internal
   * @documentationMaturity preview
   * @requiredField memberIds
   * @adminMethod
   */
  function listMembersBadgeIds(memberIds: string[]): Promise<ListMembersBadgeIdsResponse>;
  /**
   * Remove badge from given members
   * @param _id - Badge id
   * @param memberIds - Ids of members given badge will be removed from
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField memberIds
   * @adminMethod
   */
  function bulkRemoveMembersFromBadge(_id: string, memberIds: string[]): Promise<void>;
  /**
   * Return badge ids with a count of members they are assigned to
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getBadgesMembersCount(): Promise<GetBadgesMembersCountResponse>;
  
  export { AssignMembersRequest, AssignMembersResponse, Badge, BadgeMemberCount, BulkRemoveMembersFromBadgeRequest, BulkRemoveMembersFromBadgeResponse, CountOptions, CountRequest, CountResponse, CreateOptions, CreateRequest, CreateResponse, DeleteRequest, DeleteResponse, GetBadgesMembersCountRequest, GetBadgesMembersCountResponse, GetRequest, GetResponse, ListMembersBadgeIdsRequest, ListMembersBadgeIdsResponse, ListMembersRequest, ListMembersResponse, ListOptions, ListRequest, ListResponse, MemberBadgeIds, Paging, QueryOptions, QueryRequest, QueryResponse, SortOrder, Sorting, UpdateOptions, UpdateRequest, UpdateResponse, __debug, _delete, assignMembers, bulkRemoveMembersFromBadge, count, create, get, getBadgesMembersCount, list, listMembers, listMembersBadgeIds, query, update };
}
