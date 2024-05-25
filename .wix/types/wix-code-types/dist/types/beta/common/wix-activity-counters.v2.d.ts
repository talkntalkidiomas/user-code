declare module "wix-activity-counters.v2" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface ActivityCounter {
      /** Member ID. */
      memberId?: string;
      /** App ID. */
      appId?: string;
      /** Counters for this member and this app. */
      counters?: Counter[];
      /** @readonly */
      revision?: string | null;
  }
  interface Counter {
      /** Key of the counter. Must be unique within a given app. */
      key?: string;
      /** Whether count is available to all (if `public` is false, the counter is only available to the data owner; the site member, or the third party app that created the counter). */
      public?: boolean;
      /** Count of activity. */
      count?: number;
  }
  interface DiffmatokyPayload {
      left?: string;
      right?: string;
      compareChannel?: string;
      entityId?: string;
      errorInformation?: ErrorInformation;
      tags?: string[];
  }
  interface ErrorInformation {
      stackTrace?: string;
  }
  interface SetActivityCountersRequest {
      /** ID of the member to count activities for. */
      memberId: string;
      /** Site member ID whose counter will be set. */
      counter: Counter;
  }
  interface SetActivityCountersResponse {
      /** Information about a member's activity counter. */
      activityCounter?: ActivityCounter;
  }
  interface IncrementActivityCountersRequest {
      memberId: string;
      /** Site member ID whose counter will be increment. */
      counter: Counter;
  }
  interface IncrementActivityCountersResponse {
      activityCounter?: ActivityCounter;
  }
  interface GetActivityCountersRequest {
      /** ID of the member to retrieve activity counters for. */
      memberId: string;
  }
  interface GetActivityCountersResponse {
      /** Information about a member's activity counters. */
      activityCounters?: ActivityCounter[];
  }
  interface QueryActivityCountersRequest {
      /** Information about the activity counters to retrieve. */
      query?: Query;
  }
  interface Query {
      /** A filter object. */
      filter?: any;
      /** Limit number of results. */
      paging?: Paging;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryActivityCountersResponse {
      /** Retrieved activity counters. */
      activityCounters?: ActivityCounter[];
      /** Retrieved activity counters. */
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
  /**
   * Sets activity counters for a member.
   *
   * If a counter doesn't exist, it's created.
   *
   * Counters are set under a custom key, which is an ID for the counter, and is unique per app.
   * @public
   * @documentationMaturity preview
   * @requiredField counter
   * @requiredField memberId
   * @param memberId - ID of the member to upsert an activity counter for.
   * @param counter - Details of the counter to be set.
   * @adminMethod
   * @returns Upserted activity counter.
   */
  function setActivityCounters(memberId: string, counter: Counter): Promise<SetActivityCountersResponse>;
  /**
   * Increments activity counters for a requested site member by the count provided in counter.
   *
   * If a counter does not yet exist, it will be created.
   *
   * Counters are incremented under a custom key, which is an ID for the counter, and is unique per app.
   *
   * Members are typically associated with a contact, each having a distinct member and contact ID. When passing the ID as a parameter, avoid presuming the IDs are identical since they represent separate entities.
   * @param counter - Site member ID whose counter will be increment.
   * @internal
   * @documentationMaturity preview
   * @requiredField counter
   * @requiredField memberId
   * @adminMethod
   */
  function incrementActivityCounters(memberId: string, counter: Counter): Promise<IncrementActivityCountersResponse>;
  /**
   * Retrieves activity counters.
   * @public
   * @documentationMaturity preview
   * @requiredField memberId
   * @param memberId - ID of the member to retrieve activity counters for.
   * @returns Retrieved activity counter.
   */
  function getActivityCounters(memberId: string): Promise<GetActivityCountersResponse>;
  /**
   * Returns up to 100 activity counters for the provided filter and paging.
   *
   * Service will return only counters that are marked as public, or private counters from apps created by the requesting third party.
   *
   * Supported fields for filtering:
   * - memberId
   *
   * Supported operations:
   * Comparison:
   * - $eq
   * - $ne
   * - $in
   * Logical:
   * - $and
   * - $not
   * - $or
   * @public
   * @documentationMaturity preview
   * @param options - Information about the activity counters to retrieve.
   */
  function queryActivityCounters(): ActivityCountersQueryBuilder;
  interface QueryOffsetResult {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ActivityCountersQueryResult extends QueryOffsetResult {
      items: ActivityCounter[];
      query: ActivityCountersQueryBuilder;
      next: () => Promise<ActivityCountersQueryResult>;
      prev: () => Promise<ActivityCountersQueryResult>;
  }
  interface ActivityCountersQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: 'memberId', value: any) => ActivityCountersQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: 'memberId', value: any) => ActivityCountersQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: 'memberId', value: any) => ActivityCountersQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ActivityCountersQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => ActivityCountersQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ActivityCountersQueryResult>;
  }
  
  const membersV1ActivityCounter_universal_d___debug: typeof __debug;
  type membersV1ActivityCounter_universal_d_ActivityCounter = ActivityCounter;
  type membersV1ActivityCounter_universal_d_Counter = Counter;
  type membersV1ActivityCounter_universal_d_DiffmatokyPayload = DiffmatokyPayload;
  type membersV1ActivityCounter_universal_d_ErrorInformation = ErrorInformation;
  type membersV1ActivityCounter_universal_d_SetActivityCountersRequest = SetActivityCountersRequest;
  type membersV1ActivityCounter_universal_d_SetActivityCountersResponse = SetActivityCountersResponse;
  type membersV1ActivityCounter_universal_d_IncrementActivityCountersRequest = IncrementActivityCountersRequest;
  type membersV1ActivityCounter_universal_d_IncrementActivityCountersResponse = IncrementActivityCountersResponse;
  type membersV1ActivityCounter_universal_d_GetActivityCountersRequest = GetActivityCountersRequest;
  type membersV1ActivityCounter_universal_d_GetActivityCountersResponse = GetActivityCountersResponse;
  type membersV1ActivityCounter_universal_d_QueryActivityCountersRequest = QueryActivityCountersRequest;
  type membersV1ActivityCounter_universal_d_Query = Query;
  type membersV1ActivityCounter_universal_d_Paging = Paging;
  type membersV1ActivityCounter_universal_d_QueryActivityCountersResponse = QueryActivityCountersResponse;
  type membersV1ActivityCounter_universal_d_PagingMetadata = PagingMetadata;
  type membersV1ActivityCounter_universal_d_DomainEvent = DomainEvent;
  type membersV1ActivityCounter_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type membersV1ActivityCounter_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type membersV1ActivityCounter_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type membersV1ActivityCounter_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type membersV1ActivityCounter_universal_d_ActionEvent = ActionEvent;
  type membersV1ActivityCounter_universal_d_Empty = Empty;
  const membersV1ActivityCounter_universal_d_setActivityCounters: typeof setActivityCounters;
  const membersV1ActivityCounter_universal_d_incrementActivityCounters: typeof incrementActivityCounters;
  const membersV1ActivityCounter_universal_d_getActivityCounters: typeof getActivityCounters;
  const membersV1ActivityCounter_universal_d_queryActivityCounters: typeof queryActivityCounters;
  type membersV1ActivityCounter_universal_d_ActivityCountersQueryResult = ActivityCountersQueryResult;
  type membersV1ActivityCounter_universal_d_ActivityCountersQueryBuilder = ActivityCountersQueryBuilder;
  namespace membersV1ActivityCounter_universal_d {
    export {
      membersV1ActivityCounter_universal_d___debug as __debug,
      membersV1ActivityCounter_universal_d_ActivityCounter as ActivityCounter,
      membersV1ActivityCounter_universal_d_Counter as Counter,
      membersV1ActivityCounter_universal_d_DiffmatokyPayload as DiffmatokyPayload,
      membersV1ActivityCounter_universal_d_ErrorInformation as ErrorInformation,
      membersV1ActivityCounter_universal_d_SetActivityCountersRequest as SetActivityCountersRequest,
      membersV1ActivityCounter_universal_d_SetActivityCountersResponse as SetActivityCountersResponse,
      membersV1ActivityCounter_universal_d_IncrementActivityCountersRequest as IncrementActivityCountersRequest,
      membersV1ActivityCounter_universal_d_IncrementActivityCountersResponse as IncrementActivityCountersResponse,
      membersV1ActivityCounter_universal_d_GetActivityCountersRequest as GetActivityCountersRequest,
      membersV1ActivityCounter_universal_d_GetActivityCountersResponse as GetActivityCountersResponse,
      membersV1ActivityCounter_universal_d_QueryActivityCountersRequest as QueryActivityCountersRequest,
      membersV1ActivityCounter_universal_d_Query as Query,
      membersV1ActivityCounter_universal_d_Paging as Paging,
      membersV1ActivityCounter_universal_d_QueryActivityCountersResponse as QueryActivityCountersResponse,
      membersV1ActivityCounter_universal_d_PagingMetadata as PagingMetadata,
      membersV1ActivityCounter_universal_d_DomainEvent as DomainEvent,
      membersV1ActivityCounter_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      membersV1ActivityCounter_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      membersV1ActivityCounter_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      membersV1ActivityCounter_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      membersV1ActivityCounter_universal_d_ActionEvent as ActionEvent,
      membersV1ActivityCounter_universal_d_Empty as Empty,
      membersV1ActivityCounter_universal_d_setActivityCounters as setActivityCounters,
      membersV1ActivityCounter_universal_d_incrementActivityCounters as incrementActivityCounters,
      membersV1ActivityCounter_universal_d_getActivityCounters as getActivityCounters,
      membersV1ActivityCounter_universal_d_queryActivityCounters as queryActivityCounters,
      membersV1ActivityCounter_universal_d_ActivityCountersQueryResult as ActivityCountersQueryResult,
      membersV1ActivityCounter_universal_d_ActivityCountersQueryBuilder as ActivityCountersQueryBuilder,
    };
  }
  
  export { membersV1ActivityCounter_universal_d as activityCounters };
}
