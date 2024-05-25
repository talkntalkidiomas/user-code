declare module "wix-members-followers-backend.v3" {
  interface Follower {
      /** Member ID of the member who performed the action. */
      memberId?: string;
      /** Member ID of the member being followed or unfollowed. */
      affectedMemberId?: string;
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
      /** Invalidate by file (for media files such as PDFs) */
      file?: File;
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
      /** Invalidate by file (for media files such as PDFs) */
      file?: File;
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
  interface File {
      /** the msid the file is related to */
      metaSiteId?: string;
      /** Invalidate by filename (for media files such as PDFs) */
      fileName?: string;
  }
  interface FollowMemberRequest {
      /** The ID of the member who you want to follow. */
      memberId: string;
  }
  interface FollowMemberResponse {
  }
  interface MemberFollowed {
      /** Member who is following the other member. */
      memberConnection?: Follower;
  }
  interface UnfollowMemberRequest {
      /** The ID of the member who you want to unfollow. */
      memberId: string;
  }
  interface UnfollowMemberResponse {
  }
  interface MemberUnfollowed {
      /** Member who is unfollowing the other member. */
      memberConnection?: Follower;
  }
  interface ListMyMemberFollowingRequest {
      /**
       * Pagination options. For more information, see
       * [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: CursorPaging;
  }
  interface CursorPaging {
      /** Number of items to return. See [Pagination](https://dev.wix.com/docs/rest/business-solutions/events/events/rsvp/introduction) for more information. */
      limit?: number | null;
      /** Cursor returned from last query response. */
      cursor?: string | null;
  }
  interface ListMyMemberFollowingResponse {
      /** List of members followed by the current member. */
      memberIds?: string[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface PagingMetadataV2 {
      /** Number of items starting from given cursor. */
      count?: number | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. */
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
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface ListMemberFollowingRequest {
      /** The ID of the member whose followers you want to list. */
      memberId: string;
      /**
       * Pagination options. For more information, see
       * [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: CursorPaging;
  }
  interface ListMemberFollowingResponse {
      /** List of members who are followed by the given member. */
      memberIds?: string[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface ListMyMemberFollowersRequest {
      /**
       * Pagination options. For more information, see
       * [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: CursorPaging;
  }
  interface ListMyMemberFollowersResponse {
      /** List of members who are following the current member. */
      memberIds?: string[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface ListMemberFollowersRequest {
      /** The ID of the member whose followed members you want to list. */
      memberId: string;
      /**
       * Pagination options. For more information, see
       * [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: CursorPaging;
  }
  interface ListMemberFollowersResponse {
      /** List of members who are following the given member. */
      memberIds?: string[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface QueryMyMemberConnectionsRequest {
      /** List of member IDs whose connections to the current member will be retrieved. */
      connectedMemberIds: string[];
  }
  interface QueryMyMemberConnectionsResponse {
      /** List of members whose connections to the current member were retrieved. */
      connectedMembers?: ConnectedMembers[];
  }
  interface ConnectedMembers {
      /** Site member ID. */
      connectedMemberId?: string;
      /** Indicates if the listed member is followed by the given member. */
      followedByMember?: boolean;
      /** Indicates if the listed member is following the given member. */
      followingMember?: boolean;
  }
  interface QueryMemberConnectionsRequest {
      /** List of member IDs whose connections to the given member will be retrieved. */
      connectedMemberIds: string[];
      /** Member ID. */
      memberId: string;
  }
  interface QueryMemberConnectionsResponse {
      /** List of members whose connections to the given member were retrieved. */
      connectedMembers?: ConnectedMembers[];
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
   * Sets the current member to follow another member.
   * @param memberId - The ID of the member who you want to follow.
   * @public
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function followMember(memberId: string): Promise<void>;
  /**
   * Sets the current member to unfollow another member.
   * @param memberId - The ID of the member who you want to unfollow.
   * @public
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function unfollowMember(memberId: string): Promise<void>;
  /**
   * Lists members who are followed by the current member.
   * @public
   * @documentationMaturity preview
   */
  function listCurrentMemberFollowing(options?: ListCurrentMemberFollowingOptions): Promise<ListCurrentMemberFollowingResult>;
  interface ListCurrentMemberFollowingOptions {
      /**
       * Pagination options. For more information, see
       * [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: CursorPaging;
  }
  interface ListCurrentMemberFollowingResult {
      memberIds: string[];
      metadata: PagingMetadataV2;
  }
  /**
   * Lists members who are followed by the given member.
   * @param memberId - The ID of the member whose followers you want to list.
   * @public
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function listMemberFollowing(memberId: string, options?: ListMemberFollowingOptions): Promise<ListMemberFollowingResult>;
  interface ListMemberFollowingOptions {
      /**
       * Pagination options. For more information, see
       * [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: CursorPaging;
  }
  interface ListMemberFollowingResult {
      memberIds: string[];
      metadata: PagingMetadataV2;
  }
  /**
   * Lists members who are following the current member.
   * @public
   * @documentationMaturity preview
   */
  function listCurrentMemberFollowers(options?: ListCurrentMemberFollowersOptions): Promise<ListCurrentMemberFollowersResult>;
  interface ListCurrentMemberFollowersOptions {
      /**
       * Pagination options. For more information, see
       * [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: CursorPaging;
  }
  interface ListCurrentMemberFollowersResult {
      memberIds: string[];
      metadata: PagingMetadataV2;
  }
  /**
   * Lists members who are following the given member.
   * @param memberId - The ID of the member whose followed members you want to list.
   * @public
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function listMemberFollowers(memberId: string, options?: ListMemberFollowersOptions): Promise<ListMemberFollowersResult>;
  interface ListMemberFollowersOptions {
      /**
       * Pagination options. For more information, see
       * [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: CursorPaging;
  }
  interface ListMemberFollowersResult {
      memberIds: string[];
      metadata: PagingMetadataV2;
  }
  /**
   * Retrieves a list of members whose connections to the current member were retrieved.
   * @param connectedMemberIds - List of member IDs whose connections to the current member will be retrieved.
   * @public
   * @documentationMaturity preview
   * @requiredField connectedMemberIds
   */
  function queryCurrentMemberConnections(connectedMemberIds: string[]): Promise<QueryMyMemberConnectionsResponse>;
  /**
   * Retrieves a list of members whose connections to the given member were retrieved.
   * > **Note:** If an empty array is passed as `connectedMemberIds`, the call will succeed, but it will not return any data.
   * @param memberId - Member ID.
   * @param connectedMemberIds - List of member IDs whose connections to the given member will be retrieved.
   * @public
   * @documentationMaturity preview
   * @requiredField connectedMemberIds
   * @requiredField memberId
   */
  function queryMemberConnections(memberId: string, connectedMemberIds: string[]): Promise<QueryMemberConnectionsResponse>;
  
  export { ActionEvent, App, ConnectedMembers, CursorPaging, Cursors, DomainEvent, DomainEventBodyOneOf, Empty, EntityCreatedEvent, EntityDeletedEvent, EntityUpdatedEvent, File, FollowMemberRequest, FollowMemberResponse, Follower, IdentificationData, IdentificationDataIdOneOf, InvalidateCache, InvalidateCacheGetByOneOf, ListCurrentMemberFollowersOptions, ListCurrentMemberFollowersResult, ListCurrentMemberFollowingOptions, ListCurrentMemberFollowingResult, ListMemberFollowersOptions, ListMemberFollowersRequest, ListMemberFollowersResponse, ListMemberFollowersResult, ListMemberFollowingOptions, ListMemberFollowingRequest, ListMemberFollowingResponse, ListMemberFollowingResult, ListMyMemberFollowersRequest, ListMyMemberFollowersResponse, ListMyMemberFollowingRequest, ListMyMemberFollowingResponse, MemberFollowed, MemberUnfollowed, MessageEnvelope, Page, PagingMetadataV2, QueryMemberConnectionsRequest, QueryMemberConnectionsResponse, QueryMyMemberConnectionsRequest, QueryMyMemberConnectionsResponse, URI, UnfollowMemberRequest, UnfollowMemberResponse, WebhookIdentityType, followMember, listCurrentMemberFollowers, listCurrentMemberFollowing, listMemberFollowers, listMemberFollowing, queryCurrentMemberConnections, queryMemberConnections, unfollowMember };
}
