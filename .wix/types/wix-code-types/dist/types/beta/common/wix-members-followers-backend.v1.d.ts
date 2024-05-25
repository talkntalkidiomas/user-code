declare module "wix-members-followers-backend.v1" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * Fake FQDN
   * Service will soon be replaces by v2 of the service, so does not make sense to refactor this service to support fqdn
   */
  interface Follower {
  }
  interface FollowRequest {
      /** Site member ID */
      userId: string;
  }
  interface FollowResponse {
  }
  interface UnfollowRequest {
      /** Site member ID */
      userId: string;
  }
  interface UnfollowResponse {
  }
  interface ListFollowingsRequest {
      /** Site member ID */
      userId: string | null;
      /** Amount of items per response */
      limit?: number;
      /** Number of items to skip */
      offset?: number;
  }
  interface ListFollowingsResponse {
      /** Followed site member IDs */
      userIds?: string[];
      /** Total count of followed users */
      count?: string;
  }
  interface ListFollowersRequest {
      /** Site member ID */
      userId: string | null;
      /** Amount of items per response */
      limit?: number;
      /** Number of items to skip */
      offset?: number;
  }
  interface ListFollowersResponse {
      /** Follower site member IDs */
      userIds?: string[];
      /** Total follower count */
      count?: string;
  }
  interface ListFollowingsFollowersRequest {
      /** Site member IDs */
      userIds?: string[];
      /** Site member ID */
      userId: string | null;
  }
  interface ListFollowingsFollowersResponse {
      /** Site members IDs with their status */
      followingsFollowers?: FollowingsFollowers[];
  }
  interface FollowingsFollowers {
      /** Site member ID */
      userId?: string;
      /** Shows if the caller is following this site member */
      followed?: boolean;
      /** Shows if this site member is following the caller */
      following?: boolean;
  }
  /**
   * Follows site member with a provided ID
   * @param userId - Site member ID
   * @internal
   * @documentationMaturity preview
   * @requiredField userId
   */
  function follow(userId: string): Promise<void>;
  /**
   * Unfollows site member with a provided ID
   * @param userId - Site member ID
   * @internal
   * @documentationMaturity preview
   * @requiredField userId
   */
  function unfollow(userId: string): Promise<void>;
  /**
   * Returns IDs of members followed by the provided site member ID
   * When calling service without the ID, the list will contain members followed by the member making the call
   * @param userId - Site member ID
   * @internal
   * @documentationMaturity preview
   * @requiredField userId
   */
  function listFollowings(userId: string | null, options?: ListFollowingsOptions): Promise<ListFollowingsResponse>;
  interface ListFollowingsOptions {
      /** Amount of items per response */
      limit?: number;
      /** Number of items to skip */
      offset?: number;
  }
  /**
   * Returns IDs of members who follow provided site member ID
   * When calling service without the ID, the list will contain followers for the member making the call.
   * @param userId - Site member ID
   * @internal
   * @documentationMaturity preview
   * @requiredField userId
   */
  function listFollowers(userId: string | null, options?: ListFollowersOptions): Promise<ListFollowersResponse>;
  interface ListFollowersOptions {
      /** Amount of items per response */
      limit?: number;
      /** Number of items to skip */
      offset?: number;
  }
  /**
   * Returns information if provided site members are followers or are followed by the member making the call.
   * When calling service without the ID, the list will contain information related to the member making the call.
   * @param userId - Site member ID
   * @internal
   * @documentationMaturity preview
   * @requiredField userId
   */
  function listFollowingsFollowers(userId: string | null, options?: ListFollowingsFollowersOptions): Promise<ListFollowingsFollowersResponse>;
  interface ListFollowingsFollowersOptions {
      /** Site member IDs */
      userIds?: string[];
  }
  
  export { FollowRequest, FollowResponse, Follower, FollowingsFollowers, ListFollowersOptions, ListFollowersRequest, ListFollowersResponse, ListFollowingsFollowersOptions, ListFollowingsFollowersRequest, ListFollowingsFollowersResponse, ListFollowingsOptions, ListFollowingsRequest, ListFollowingsResponse, UnfollowRequest, UnfollowResponse, __debug, follow, listFollowers, listFollowings, listFollowingsFollowers, unfollow };
}
