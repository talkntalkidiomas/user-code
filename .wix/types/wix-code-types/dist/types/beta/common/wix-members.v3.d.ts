declare module "wix-members.v3" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * A Badge is a a visible label to be displayed on a site member's profile.
   * You can use badges to create specific categories of members within your site.
   * Read more about Badges
   * in this [article](https://support.wix.com/en/article/about-member-badges).
   */
  interface Badge {
      /**
       * Badge ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the Badge is updated.
       * To prevent conflicting changes,
       * the current revision must be passed when updating the Badge.
       * Ignored when creating a Badge.
       * @readonly
       */
      revision?: string | null;
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
       * Badge icon image.
       * _Recommended_ to use `SVG` image format as it is resolution independent and looks great at any scale.
       */
      icon?: string;
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
       * Date and time the Badge was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the Badge was last updated.
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
  interface GetBadgeRequest {
      /** Badge ID. */
      badgeId: string;
  }
  interface GetBadgeResponse {
      /** Badge. */
      badge?: Badge;
  }
  interface ListBadgesRequest {
      /**
       * Pagination options. For more information, see
       * [API Query Language: The Paging Section]
       * (https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section)
       */
      paging?: CursorPaging;
  }
  interface CursorPaging {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface ListBadgesResponse {
      /** List of badges. */
      badges?: Badge[];
      /** Metadata for the paginated results. */
      pagingMetadata?: CursorPagingMetadata;
  }
  interface CursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryBadgesRequest {
      /** CursorQuery from protodep */
      query?: CursorQuery;
  }
  interface CursorQuery extends CursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
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
      pagingMetadata?: CursorPagingMetadata;
  }
  interface UpdateBadgeRequest {
      /** Badge to update. */
      badge: Badge;
  }
  interface UpdateBadgeResponse {
      /** Updated badge. */
      badge?: Badge;
  }
  interface DeleteBadgeRequest {
      /** Badge ID. */
      badgeId: string;
  }
  interface DeleteBadgeResponse {
  }
  interface UpdateBadgesDisplayOrderRequest {
      /** Ordered badge IDs. */
      ids: string[];
  }
  interface UpdateBadgesDisplayOrderResponse {
      /** Reordered badges list. */
      badges?: Badge[];
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
   * Creates a new Badge.
   * @param badge - Badge to create.
   * @internal
   * @documentationMaturity preview
   * @requiredField badge
   * @requiredField badge.title
   * @adminMethod
   * @returns Created badge.
   */
  function createBadge(badge: Badge): Promise<Badge>;
  /**
   * Retrieves a Badge.
   * @param badgeId - Badge ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField badgeId
   * @returns Badge.
   */
  function getBadge(badgeId: string): Promise<Badge>;
  /**
   * Retrieves up to 1000 badges, given the requested paging.
   * Default `paging.limit` is 100, `paging.offset` - 0.
   * For more information, see
   * [API Query Language: The Paging Section]
   * (https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section).
   * @internal
   * @documentationMaturity preview
   */
  function listBadges(options?: ListBadgesOptions): Promise<ListBadgesResponse>;
  interface ListBadgesOptions {
      /**
       * Pagination options. For more information, see
       * [API Query Language: The Paging Section]
       * (https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section)
       */
      paging?: CursorPaging;
  }
  /**
   * Retrieves up to 1000 badges, given the requested query options, paging, and sorting.
   * Default `paging.limit` is 100, `paging.offset` - 0.
   * For more information, see
   * [API Query Language: The Paging Section](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_the-paging-section).
   * @internal
   * @documentationMaturity preview
   */
  function queryBadges(): BadgesQueryBuilder;
  interface QueryOffsetResult {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface BadgesQueryResult extends QueryOffsetResult {
      items: Badge[];
      query: BadgesQueryBuilder;
      next: () => Promise<BadgesQueryResult>;
      prev: () => Promise<BadgesQueryResult>;
  }
  interface BadgesQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'title' | 'description' | 'permissionsEnabled' | 'slug', value: any) => BadgesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'title' | 'description' | 'permissionsEnabled' | 'slug', value: any) => BadgesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id' | 'title' | 'description' | 'slug', value: string) => BadgesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id' | 'title' | 'description' | 'permissionsEnabled' | 'slug', value: any[]) => BadgesQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'title' | 'description' | 'permissionsEnabled' | 'slug', value: any) => BadgesQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | 'title' | 'description' | 'permissionsEnabled' | 'slug', value: boolean) => BadgesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'title' | 'description' | 'permissionsEnabled' | 'slug'>) => BadgesQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => BadgesQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => BadgesQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<BadgesQueryResult>;
  }
  /**
   * Updates a badge's specified properties.
   * @param _id - Badge ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField badge
   * @adminMethod
   * @returns Updated badge.
   */
  function updateBadge(_id: string | null, badge: UpdateBadge): Promise<Badge>;
  interface UpdateBadge {
      /**
       * Badge ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the Badge is updated.
       * To prevent conflicting changes,
       * the current revision must be passed when updating the Badge.
       * Ignored when creating a Badge.
       * @readonly
       */
      revision?: string | null;
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
       * Badge icon image.
       * _Recommended_ to use `SVG` image format as it is resolution independent and looks great at any scale.
       */
      icon?: string;
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
       * Date and time the Badge was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the Badge was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  /**
   * Deletes a badge.
   * @param badgeId - Badge ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField badgeId
   * @adminMethod
   */
  function deleteBadge(badgeId: string): Promise<void>;
  /**
   * Updates badges' display order.
   * @param ids - Ordered badge IDs.
   * @internal
   * @documentationMaturity preview
   * @requiredField ids
   * @adminMethod
   */
  function updateBadgesDisplayOrder(ids: string[]): Promise<UpdateBadgesDisplayOrderResponse>;
  
  const badgesV4Badge_universal_d___debug: typeof __debug;
  type badgesV4Badge_universal_d_Badge = Badge;
  type badgesV4Badge_universal_d_CreateBadgeRequest = CreateBadgeRequest;
  type badgesV4Badge_universal_d_CreateBadgeResponse = CreateBadgeResponse;
  type badgesV4Badge_universal_d_GetBadgeRequest = GetBadgeRequest;
  type badgesV4Badge_universal_d_GetBadgeResponse = GetBadgeResponse;
  type badgesV4Badge_universal_d_ListBadgesRequest = ListBadgesRequest;
  type badgesV4Badge_universal_d_CursorPaging = CursorPaging;
  type badgesV4Badge_universal_d_ListBadgesResponse = ListBadgesResponse;
  type badgesV4Badge_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type badgesV4Badge_universal_d_Cursors = Cursors;
  type badgesV4Badge_universal_d_QueryBadgesRequest = QueryBadgesRequest;
  type badgesV4Badge_universal_d_CursorQuery = CursorQuery;
  type badgesV4Badge_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type badgesV4Badge_universal_d_Sorting = Sorting;
  type badgesV4Badge_universal_d_SortOrder = SortOrder;
  const badgesV4Badge_universal_d_SortOrder: typeof SortOrder;
  type badgesV4Badge_universal_d_QueryBadgesResponse = QueryBadgesResponse;
  type badgesV4Badge_universal_d_UpdateBadgeRequest = UpdateBadgeRequest;
  type badgesV4Badge_universal_d_UpdateBadgeResponse = UpdateBadgeResponse;
  type badgesV4Badge_universal_d_DeleteBadgeRequest = DeleteBadgeRequest;
  type badgesV4Badge_universal_d_DeleteBadgeResponse = DeleteBadgeResponse;
  type badgesV4Badge_universal_d_UpdateBadgesDisplayOrderRequest = UpdateBadgesDisplayOrderRequest;
  type badgesV4Badge_universal_d_UpdateBadgesDisplayOrderResponse = UpdateBadgesDisplayOrderResponse;
  type badgesV4Badge_universal_d_DomainEvent = DomainEvent;
  type badgesV4Badge_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type badgesV4Badge_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type badgesV4Badge_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type badgesV4Badge_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type badgesV4Badge_universal_d_ActionEvent = ActionEvent;
  const badgesV4Badge_universal_d_createBadge: typeof createBadge;
  const badgesV4Badge_universal_d_getBadge: typeof getBadge;
  const badgesV4Badge_universal_d_listBadges: typeof listBadges;
  type badgesV4Badge_universal_d_ListBadgesOptions = ListBadgesOptions;
  const badgesV4Badge_universal_d_queryBadges: typeof queryBadges;
  type badgesV4Badge_universal_d_BadgesQueryResult = BadgesQueryResult;
  type badgesV4Badge_universal_d_BadgesQueryBuilder = BadgesQueryBuilder;
  const badgesV4Badge_universal_d_updateBadge: typeof updateBadge;
  type badgesV4Badge_universal_d_UpdateBadge = UpdateBadge;
  const badgesV4Badge_universal_d_deleteBadge: typeof deleteBadge;
  const badgesV4Badge_universal_d_updateBadgesDisplayOrder: typeof updateBadgesDisplayOrder;
  namespace badgesV4Badge_universal_d {
    export {
      badgesV4Badge_universal_d___debug as __debug,
      badgesV4Badge_universal_d_Badge as Badge,
      badgesV4Badge_universal_d_CreateBadgeRequest as CreateBadgeRequest,
      badgesV4Badge_universal_d_CreateBadgeResponse as CreateBadgeResponse,
      badgesV4Badge_universal_d_GetBadgeRequest as GetBadgeRequest,
      badgesV4Badge_universal_d_GetBadgeResponse as GetBadgeResponse,
      badgesV4Badge_universal_d_ListBadgesRequest as ListBadgesRequest,
      badgesV4Badge_universal_d_CursorPaging as CursorPaging,
      badgesV4Badge_universal_d_ListBadgesResponse as ListBadgesResponse,
      badgesV4Badge_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      badgesV4Badge_universal_d_Cursors as Cursors,
      badgesV4Badge_universal_d_QueryBadgesRequest as QueryBadgesRequest,
      badgesV4Badge_universal_d_CursorQuery as CursorQuery,
      badgesV4Badge_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      badgesV4Badge_universal_d_Sorting as Sorting,
      badgesV4Badge_universal_d_SortOrder as SortOrder,
      badgesV4Badge_universal_d_QueryBadgesResponse as QueryBadgesResponse,
      badgesV4Badge_universal_d_UpdateBadgeRequest as UpdateBadgeRequest,
      badgesV4Badge_universal_d_UpdateBadgeResponse as UpdateBadgeResponse,
      badgesV4Badge_universal_d_DeleteBadgeRequest as DeleteBadgeRequest,
      badgesV4Badge_universal_d_DeleteBadgeResponse as DeleteBadgeResponse,
      badgesV4Badge_universal_d_UpdateBadgesDisplayOrderRequest as UpdateBadgesDisplayOrderRequest,
      badgesV4Badge_universal_d_UpdateBadgesDisplayOrderResponse as UpdateBadgesDisplayOrderResponse,
      badgesV4Badge_universal_d_DomainEvent as DomainEvent,
      badgesV4Badge_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      badgesV4Badge_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      badgesV4Badge_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      badgesV4Badge_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      badgesV4Badge_universal_d_ActionEvent as ActionEvent,
      badgesV4Badge_universal_d_createBadge as createBadge,
      badgesV4Badge_universal_d_getBadge as getBadge,
      badgesV4Badge_universal_d_listBadges as listBadges,
      badgesV4Badge_universal_d_ListBadgesOptions as ListBadgesOptions,
      badgesV4Badge_universal_d_queryBadges as queryBadges,
      badgesV4Badge_universal_d_BadgesQueryResult as BadgesQueryResult,
      badgesV4Badge_universal_d_BadgesQueryBuilder as BadgesQueryBuilder,
      badgesV4Badge_universal_d_updateBadge as updateBadge,
      badgesV4Badge_universal_d_UpdateBadge as UpdateBadge,
      badgesV4Badge_universal_d_deleteBadge as deleteBadge,
      badgesV4Badge_universal_d_updateBadgesDisplayOrder as updateBadgesDisplayOrder,
    };
  }
  
  export { badgesV4Badge_universal_d as badges };
}
