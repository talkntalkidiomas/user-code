declare module "wix-members-followers-backend.v2" {
  interface Follower {
      /** Member ID of the member who performed the action. */
      memberId?: string;
      /** Member ID of the member being followed or unfollowed. */
      affectedMemberId?: string;
  }
  interface FollowMemberRequest {
      /** Member ID. */
      memberId: string;
  }
  interface FollowMemberResponse {
  }
  interface MemberFollowed {
      /** Member who is following the other member. */
      memberConnection?: Follower;
  }
  interface UnfollowMemberRequest {
      /** Member ID. */
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
      paging?: Paging;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListMyMemberFollowingResponse {
      /** List of site members who are followed by the current member. */
      memberIds?: string[];
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadata;
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
  interface ListMemberFollowingRequest {
      /** Member ID. */
      memberId: string;
      /**
       * Pagination options. For more information, see
       * [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging;
  }
  interface ListMemberFollowingResponse {
      /** List of site members who are followed by the requested member. */
      memberIds?: string[];
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadata;
  }
  interface ListMyMemberFollowersRequest {
      /** Metadata for the paginated results. */
      paging?: Paging;
  }
  interface ListMyMemberFollowersResponse {
      /** List of members who are following the current member. */
      memberIds?: string[];
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadata;
  }
  interface ListMemberFollowersRequest {
      /** Member ID. */
      memberId: string;
      /** Metadata for the paginated results. */
      paging?: Paging;
  }
  interface ListMemberFollowersResponse {
      /** List of members who are following the request member. */
      memberIds?: string[];
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadata;
  }
  interface ListMyMemberConnectionsRequest {
      /**
       * List of member IDs whose connections to the current member
       * will be retrieved.
       */
      connectedMemberIds: string[];
  }
  interface ListMyMemberConnectionsResponse {
      /** List of site members whose connections to the current member were retrieved. */
      connectedMembers?: ConnectedMembers[];
  }
  interface ConnectedMembers {
      /** Site member ID. */
      connectedMemberId?: string;
      /** Indicates if the listed member is followed by the requested member. */
      followedByMember?: boolean;
      /** Indicates if the listed member is following the requested member. */
      followingMember?: boolean;
  }
  interface ListMemberConnectionsRequest {
      /**
       * List of member IDs whose connections to the requested member
       * will be retrieved.
       * For multiple connections, format as
       * `?connectedMemberIds=member-1-id&connectedMemberIds=member-2-id`.
       */
      connectedMemberIds: string[];
      /** ID of the requested member. */
      memberId: string;
  }
  interface ListMemberConnectionsResponse {
      /** List of site members whose connections to the requested member were retrieved. */
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
  /**
   * Sets the current member to follow another member.
   *
   * Members are typically associated with a contact, each having a distinct member and contact ID. When passing the ID as a parameter, avoid presuming the IDs are identical since they represent separate entities.
   * @param memberId - Member ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function followMember(memberId: string): Promise<void>;
  /** @param memberId - Member ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function unfollowMember(memberId: string): Promise<void>;
  /**
   * Returns IDs of members followed by the member making the call
   * @internal
   * @documentationMaturity preview
   */
  function listMyMemberFollowing(options?: ListMyMemberFollowingOptions): Promise<ListMyMemberFollowingResponse>;
  interface ListMyMemberFollowingOptions {
      /**
       * Pagination options. For more information, see
       * [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging;
  }
  /** @param memberId - Member ID.
   * @public
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function listMemberFollowing(memberId: string, options?: ListMemberFollowingOptions): Promise<ListMemberFollowingResponse>;
  interface ListMemberFollowingOptions {
      /**
       * Pagination options. For more information, see
       * [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging;
  }
  /**
   * Returns IDs of members who follow the member making the call
   * @internal
   * @documentationMaturity preview
   */
  function listMyMemberFollowers(options?: ListMyMemberFollowersOptions): Promise<ListMyMemberFollowersResponse>;
  interface ListMyMemberFollowersOptions {
      /** Metadata for the paginated results. */
      paging?: Paging;
  }
  /**
   * Lists members who follow the requested member.
   * @param memberId - Member ID.
   * @public
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function listMemberFollowers(memberId: string, options?: ListMemberFollowersOptions): Promise<ListMemberFollowersResponse>;
  interface ListMemberFollowersOptions {
      /** Metadata for the paginated results. */
      paging?: Paging;
  }
  /**
   * Returns information if provided site members are followers or are followed by the member making the call.
   * @param connectedMemberIds - List of member IDs whose connections to the current member
   * will be retrieved.
   * @internal
   * @documentationMaturity preview
   * @requiredField connectedMemberIds
   */
  function listMyMemberConnections(connectedMemberIds: string[]): Promise<ListMyMemberConnectionsResponse>;
  /**
   * Lists a member's follower or following connections to the other members specified in the request.
   * > Note: If no other members' IDs (`connectedMemberIds`) are passed, the call will return successful, but with no data.
   * @param memberId - ID of the requested member.
   * @param connectedMemberIds - List of member IDs whose connections to the requested member
   * will be retrieved.
   * For multiple connections, format as
   * `?connectedMemberIds=member-1-id&connectedMemberIds=member-2-id`.
   * @public
   * @documentationMaturity preview
   * @requiredField connectedMemberIds
   * @requiredField memberId
   */
  function listMemberConnections(memberId: string, connectedMemberIds: string[]): Promise<ListMemberConnectionsResponse>;
  
  export { ActionEvent, ConnectedMembers, DomainEvent, DomainEventBodyOneOf, EntityCreatedEvent, EntityDeletedEvent, EntityUpdatedEvent, FollowMemberRequest, FollowMemberResponse, Follower, ListMemberConnectionsRequest, ListMemberConnectionsResponse, ListMemberFollowersOptions, ListMemberFollowersRequest, ListMemberFollowersResponse, ListMemberFollowingOptions, ListMemberFollowingRequest, ListMemberFollowingResponse, ListMyMemberConnectionsRequest, ListMyMemberConnectionsResponse, ListMyMemberFollowersOptions, ListMyMemberFollowersRequest, ListMyMemberFollowersResponse, ListMyMemberFollowingOptions, ListMyMemberFollowingRequest, ListMyMemberFollowingResponse, MemberFollowed, MemberUnfollowed, Paging, PagingMetadata, UnfollowMemberRequest, UnfollowMemberResponse, followMember, listMemberConnections, listMemberFollowers, listMemberFollowing, listMyMemberConnections, listMyMemberFollowers, listMyMemberFollowing, unfollowMember };
}
