declare module "wix-benefit-programs-backend.v1" {
  interface Balance {
      /** The id of the balance. Same as the pool id */
      _id?: string;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time the transaction was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time the transaction was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * The owner of this balance
       * @readonly
       */
      beneficiary?: IdentificationData$5;
      /**
       * Balance for the pool
       * @readonly
       */
      balance?: BalanceAmount;
      /**
       * Pool information
       * @readonly
       */
      pool?: PoolInfo$1;
      /** Data extensions */
      extendedFields?: ExtendedFields$3;
      /**
       * Last transaction id, which triggered balance change
       * @readonly
       */
      lastTransactionId?: string | null;
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
      /**
       * @internal
       * @readonly
       */
      identityType?: IdentityType$2;
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
  enum IdentityType$2 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface BalanceAmount {
      /**
       * Represents the sum of the available credits for the pool
       * @readonly
       */
      available?: string;
  }
  interface PoolInfo$1 {
      /**
       * The pool from which the balance was changed
       * @readonly
       */
      _id?: string;
      /**
       * PoolDefinition that this pool was created from
       * @readonly
       */
      poolDefinitionId?: string | null;
      /**
       * Program definition from which this entitlement was provisioned from
       * @readonly
       */
      programDefinitionId?: string | null;
      /**
       * Package that this entitlement belongs to
       * @readonly
       */
      programId?: string | null;
      /** The total amount of credits available for this pool */
      creditAmount?: string | null;
      /** The namespace of the pool */
      namespace?: string | null;
  }
  interface ExtendedFields$3 {
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
  interface GetBalanceRequest {
      /** The id of the pool */
      poolId: string;
  }
  interface GetBalanceResponse {
      /** Requested balance */
      balance?: Balance;
  }
  interface ListBalancesRequest {
      /** The ids of the pools */
      poolIds?: string[];
      /** Cursor paging */
      cursorPaging?: CursorPaging$5;
  }
  interface CursorPaging$5 {
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
  interface ListBalancesResponse {
      /** Requested balances */
      balances?: Balance[];
      /** Paging information */
      metadata?: CursorPagingMetadata$5;
  }
  interface CursorPagingMetadata$5 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$5;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$5 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryBalancesRequest {
      /** WQL expression */
      query?: CursorQuery$5;
  }
  interface CursorQuery$5 extends CursorQueryPagingMethodOneOf$5 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$5;
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
      sort?: Sorting$5[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$5 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$5;
  }
  interface Sorting$5 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$5;
  }
  enum SortOrder$5 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryBalancesResponse {
      /** The retrieved balances */
      balances?: Balance[];
      /** Paging information */
      metadata?: CursorPagingMetadata$5;
  }
  interface ChangeBalanceRequest extends ChangeBalanceRequestOperationOneOf {
      /** Applies the delta to the current balance. If 0, change won't be performed, but the transaction is still going to be reported */
      adjustOptions?: AdjustOptions;
      /** Sets the balance to any amount. If the set amount is the same as the current balance no action will be performed */
      setOptions?: SetOptions;
      /**
       * Sets the initial balance to any amount. Initializes the pool account. Must be the first operation performed on the account and only called once
       * All subsequent SetInitialOperations will fail.
       */
      setInitialOptions?: SetInitialOptions;
      /** The id of the pool */
      poolId: string;
      /** Unique value generated by the client which the service uses to recognize subsequent retries of the same request */
      idempotencyKey: string;
      /** Party that initiated this change. Could be the site use, the pool owner or the beneficiary */
      instructingParty?: IdentificationData$5;
      /** The operation to perform on the balance */
      type?: Type$3;
      /** Transaction details related to the change */
      transactionDetails?: TransactionDetails$1;
  }
  /** @oneof */
  interface ChangeBalanceRequestOperationOneOf {
      /** Applies the delta to the current balance. If 0, change won't be performed, but the transaction is still going to be reported */
      adjustOptions?: AdjustOptions;
      /** Sets the balance to any amount. If the set amount is the same as the current balance no action will be performed */
      setOptions?: SetOptions;
      /**
       * Sets the initial balance to any amount. Initializes the pool account. Must be the first operation performed on the account and only called once
       * All subsequent SetInitialOperations will fail.
       */
      setInitialOptions?: SetInitialOptions;
  }
  enum Type$3 {
      UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
      ADJUST = "ADJUST",
      SET = "SET",
      SET_INITIAL = "SET_INITIAL"
  }
  interface AdjustOptions {
      /** Change the available balance by the provided amount. Can be negative and positive values. */
      amount?: string;
      /** Beneficiary of the operation */
      beneficiary?: IdentificationData$5;
  }
  interface SetOptions {
      /** Set the available balance to the provided amount. */
      amount?: string;
      /** Beneficiary of the transaction */
      beneficiary?: IdentificationData$5;
  }
  interface SetInitialOptions {
      /** Set the available balance to the provided amount. */
      amount?: string;
      /** Beneficiary of the transaction */
      beneficiary?: IdentificationData$5;
  }
  interface TransactionDetails$1 {
      /**
       * The item for which the balance was changed, if applicable
       * @readonly
       */
      item?: Item$3;
      /** Item count, if applicable */
      itemCount?: number | null;
      /**
       * Represents the time the business performed the transaction
       * @readonly
       */
      effectiveDate?: Date;
      /**
       * Free format string
       * @readonly
       */
      reason?: string | null;
  }
  interface Item$3 {
      /**
       * The item id
       * @readonly
       */
      _id?: string | null;
      /**
       * External item identifier
       * @readonly
       */
      externalId?: string | null;
      /**
       * Item category. Discriminates between different types of items. E.g. posts, groups etc.
       * @readonly
       */
      category?: string | null;
      /**
       * Key of the set that this item is part of
       * @readonly
       */
      itemSetId?: string | null;
      /**
       * Display name of the item
       * @readonly
       */
      displayName?: string | null;
  }
  interface ChangeBalanceResponse {
      /** Changed balance */
      balance?: Balance;
      /** Id of the resulting transaction from balance change operation */
      transactionId?: string | null;
  }
  interface NotEnoughBalance$1 {
      /** Current balance */
      balance?: BalanceAmount;
      /**
       * The requested amount
       * @readonly
       */
      requested?: string;
  }
  interface RevertBalanceChangeRequest {
      /** Reverts the change to the balance made by the provided transaction */
      transactionId: string;
      /** Unique value generated by the client which the service uses to recognize subsequent retries of the same request */
      idempotencyKey: string;
      /** Party that initiated this change. Could be the site use, the pool owner or the beneficiary */
      instructingParty?: IdentificationData$5;
  }
  interface RevertBalanceChangeResponse {
      /** Id of the created reverse transaction */
      transactionId?: string | null;
  }
  interface ChangeAlreadyReverted {
      /** The id of the transaction which was already reverted */
      originalTransactionId?: string;
      /** The id of the transaction which reverted the original transaction */
      revertedTransactionId?: string;
  }
  interface GetTransactionReversibilityRequest {
      /** Id of the transaction to get the reversibility */
      transactionId: string;
  }
  interface GetTransactionReversibilityResponse {
      /** The result of transaction reversibility validation */
      transactionReversibility?: TransactionReversibility;
  }
  /** Transaction reversibility results */
  enum TransactionReversibility {
      /** Transaction is allowed to be reverted */
      TRANSACTION_IS_REVERSIBLE = "TRANSACTION_IS_REVERSIBLE",
      /** Transaction isn't allowed to be reverted, because it was already reverted */
      TRANSACTION_ALREADY_REVERSED = "TRANSACTION_ALREADY_REVERSED"
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
      identity?: WebhooksIdentificationData$2;
      /** Stringify payload. */
      data?: string;
  }
  interface WebhooksIdentificationData$2 extends WebhooksIdentificationDataIdOneOf$2 {
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
  interface WebhooksIdentificationDataIdOneOf$2 {
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
   * Get the balance in the pool.
   * @param poolId - The id of the pool
   * @internal
   * @documentationMaturity preview
   * @requiredField poolId
   * @adminMethod
   * @returns Requested balance
   */
  function getBalance(poolId: string): Promise<Balance>;
  /**
   * Get the balances for provided pools
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listBalances(options?: ListBalancesOptions): Promise<ListBalancesResponse>;
  interface ListBalancesOptions {
      /** The ids of the pools */
      poolIds?: string[];
      /** Cursor paging */
      cursorPaging?: CursorPaging$5;
  }
  /**
   * Query the balances for provided pools
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryBalances(): BalancesQueryBuilder;
  interface QueryCursorResult$5 {
      cursors: Cursors$5;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface BalancesQueryResult extends QueryCursorResult$5 {
      items: Balance[];
      query: BalancesQueryBuilder;
      next: () => Promise<BalancesQueryResult>;
      prev: () => Promise<BalancesQueryResult>;
  }
  interface BalancesQueryBuilder {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => BalancesQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => BalancesQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<BalancesQueryResult>;
  }
  /**
   * Change balance using one of these operations:
   * ADJUST
   * SET
   * SET_INITIAL
   * @param poolId - The id of the pool
   * @param idempotencyKey - Unique value generated by the client which the service uses to recognize subsequent retries of the same request
   * @internal
   * @documentationMaturity preview
   * @requiredField idempotencyKey
   * @requiredField poolId
   * @adminMethod
   */
  function changeBalance(poolId: string, idempotencyKey: string, options?: ChangeBalanceOptions): Promise<ChangeBalanceResponse>;
  interface ChangeBalanceOptions extends ChangeBalanceRequestOperationOneOf {
      /** Party that initiated this change. Could be the site use, the pool owner or the beneficiary */
      instructingParty?: IdentificationData$5;
      /** The operation to perform on the balance */
      type?: Type$3;
      /** Applies the delta to the current balance. If 0, change won't be performed, but the transaction is still going to be reported */
      adjustOptions?: AdjustOptions;
      /** Sets the balance to any amount. If the set amount is the same as the current balance no action will be performed */
      setOptions?: SetOptions;
      /**
       * Sets the initial balance to any amount. Initializes the pool account. Must be the first operation performed on the account and only called once
       * All subsequent SetInitialOperations will fail.
       */
      setInitialOptions?: SetInitialOptions;
      /** Transaction details related to the change */
      transactionDetails?: TransactionDetails$1;
  }
  /**
   * Reverts balance change done with ChangeBalance
   * @param transactionId - Reverts the change to the balance made by the provided transaction
   * @param idempotencyKey - Unique value generated by the client which the service uses to recognize subsequent retries of the same request
   * @internal
   * @documentationMaturity preview
   * @requiredField idempotencyKey
   * @requiredField transactionId
   * @adminMethod
   */
  function revertBalanceChange(transactionId: string, idempotencyKey: string, options?: RevertBalanceChangeOptions): Promise<RevertBalanceChangeResponse>;
  interface RevertBalanceChangeOptions {
      /** Party that initiated this change. Could be the site use, the pool owner or the beneficiary */
      instructingParty?: IdentificationData$5;
  }
  /**
   * Get a transaction reversibility by transaction id
   *
   * Should be always internal this is only used to support EcomMembershipSPI
   * @param transactionId - Id of the transaction to get the reversibility
   * @internal
   * @documentationMaturity preview
   * @requiredField transactionId
   * @adminMethod
   */
  function getTransactionReversibility(transactionId: string): Promise<GetTransactionReversibilityResponse>;
  
  type benefitProgramsV1Balance_universal_d_Balance = Balance;
  type benefitProgramsV1Balance_universal_d_BalanceAmount = BalanceAmount;
  type benefitProgramsV1Balance_universal_d_GetBalanceRequest = GetBalanceRequest;
  type benefitProgramsV1Balance_universal_d_GetBalanceResponse = GetBalanceResponse;
  type benefitProgramsV1Balance_universal_d_ListBalancesRequest = ListBalancesRequest;
  type benefitProgramsV1Balance_universal_d_ListBalancesResponse = ListBalancesResponse;
  type benefitProgramsV1Balance_universal_d_QueryBalancesRequest = QueryBalancesRequest;
  type benefitProgramsV1Balance_universal_d_QueryBalancesResponse = QueryBalancesResponse;
  type benefitProgramsV1Balance_universal_d_ChangeBalanceRequest = ChangeBalanceRequest;
  type benefitProgramsV1Balance_universal_d_ChangeBalanceRequestOperationOneOf = ChangeBalanceRequestOperationOneOf;
  type benefitProgramsV1Balance_universal_d_AdjustOptions = AdjustOptions;
  type benefitProgramsV1Balance_universal_d_SetOptions = SetOptions;
  type benefitProgramsV1Balance_universal_d_SetInitialOptions = SetInitialOptions;
  type benefitProgramsV1Balance_universal_d_ChangeBalanceResponse = ChangeBalanceResponse;
  type benefitProgramsV1Balance_universal_d_RevertBalanceChangeRequest = RevertBalanceChangeRequest;
  type benefitProgramsV1Balance_universal_d_RevertBalanceChangeResponse = RevertBalanceChangeResponse;
  type benefitProgramsV1Balance_universal_d_ChangeAlreadyReverted = ChangeAlreadyReverted;
  type benefitProgramsV1Balance_universal_d_GetTransactionReversibilityRequest = GetTransactionReversibilityRequest;
  type benefitProgramsV1Balance_universal_d_GetTransactionReversibilityResponse = GetTransactionReversibilityResponse;
  type benefitProgramsV1Balance_universal_d_TransactionReversibility = TransactionReversibility;
  const benefitProgramsV1Balance_universal_d_TransactionReversibility: typeof TransactionReversibility;
  const benefitProgramsV1Balance_universal_d_getBalance: typeof getBalance;
  const benefitProgramsV1Balance_universal_d_listBalances: typeof listBalances;
  type benefitProgramsV1Balance_universal_d_ListBalancesOptions = ListBalancesOptions;
  const benefitProgramsV1Balance_universal_d_queryBalances: typeof queryBalances;
  type benefitProgramsV1Balance_universal_d_BalancesQueryResult = BalancesQueryResult;
  type benefitProgramsV1Balance_universal_d_BalancesQueryBuilder = BalancesQueryBuilder;
  const benefitProgramsV1Balance_universal_d_changeBalance: typeof changeBalance;
  type benefitProgramsV1Balance_universal_d_ChangeBalanceOptions = ChangeBalanceOptions;
  const benefitProgramsV1Balance_universal_d_revertBalanceChange: typeof revertBalanceChange;
  type benefitProgramsV1Balance_universal_d_RevertBalanceChangeOptions = RevertBalanceChangeOptions;
  const benefitProgramsV1Balance_universal_d_getTransactionReversibility: typeof getTransactionReversibility;
  namespace benefitProgramsV1Balance_universal_d {
    export {
      benefitProgramsV1Balance_universal_d_Balance as Balance,
      IdentificationData$5 as IdentificationData,
      IdentificationDataIdOneOf$5 as IdentificationDataIdOneOf,
      IdentityType$2 as IdentityType,
      benefitProgramsV1Balance_universal_d_BalanceAmount as BalanceAmount,
      PoolInfo$1 as PoolInfo,
      ExtendedFields$3 as ExtendedFields,
      benefitProgramsV1Balance_universal_d_GetBalanceRequest as GetBalanceRequest,
      benefitProgramsV1Balance_universal_d_GetBalanceResponse as GetBalanceResponse,
      benefitProgramsV1Balance_universal_d_ListBalancesRequest as ListBalancesRequest,
      CursorPaging$5 as CursorPaging,
      benefitProgramsV1Balance_universal_d_ListBalancesResponse as ListBalancesResponse,
      CursorPagingMetadata$5 as CursorPagingMetadata,
      Cursors$5 as Cursors,
      benefitProgramsV1Balance_universal_d_QueryBalancesRequest as QueryBalancesRequest,
      CursorQuery$5 as CursorQuery,
      CursorQueryPagingMethodOneOf$5 as CursorQueryPagingMethodOneOf,
      Sorting$5 as Sorting,
      SortOrder$5 as SortOrder,
      benefitProgramsV1Balance_universal_d_QueryBalancesResponse as QueryBalancesResponse,
      benefitProgramsV1Balance_universal_d_ChangeBalanceRequest as ChangeBalanceRequest,
      benefitProgramsV1Balance_universal_d_ChangeBalanceRequestOperationOneOf as ChangeBalanceRequestOperationOneOf,
      Type$3 as Type,
      benefitProgramsV1Balance_universal_d_AdjustOptions as AdjustOptions,
      benefitProgramsV1Balance_universal_d_SetOptions as SetOptions,
      benefitProgramsV1Balance_universal_d_SetInitialOptions as SetInitialOptions,
      TransactionDetails$1 as TransactionDetails,
      Item$3 as Item,
      benefitProgramsV1Balance_universal_d_ChangeBalanceResponse as ChangeBalanceResponse,
      NotEnoughBalance$1 as NotEnoughBalance,
      benefitProgramsV1Balance_universal_d_RevertBalanceChangeRequest as RevertBalanceChangeRequest,
      benefitProgramsV1Balance_universal_d_RevertBalanceChangeResponse as RevertBalanceChangeResponse,
      benefitProgramsV1Balance_universal_d_ChangeAlreadyReverted as ChangeAlreadyReverted,
      benefitProgramsV1Balance_universal_d_GetTransactionReversibilityRequest as GetTransactionReversibilityRequest,
      benefitProgramsV1Balance_universal_d_GetTransactionReversibilityResponse as GetTransactionReversibilityResponse,
      benefitProgramsV1Balance_universal_d_TransactionReversibility as TransactionReversibility,
      DomainEvent$5 as DomainEvent,
      DomainEventBodyOneOf$5 as DomainEventBodyOneOf,
      EntityCreatedEvent$5 as EntityCreatedEvent,
      EntityUpdatedEvent$5 as EntityUpdatedEvent,
      EntityDeletedEvent$5 as EntityDeletedEvent,
      ActionEvent$5 as ActionEvent,
      MessageEnvelope$5 as MessageEnvelope,
      WebhooksIdentificationData$2 as WebhooksIdentificationData,
      WebhooksIdentificationDataIdOneOf$2 as WebhooksIdentificationDataIdOneOf,
      WebhookIdentityType$5 as WebhookIdentityType,
      benefitProgramsV1Balance_universal_d_getBalance as getBalance,
      benefitProgramsV1Balance_universal_d_listBalances as listBalances,
      benefitProgramsV1Balance_universal_d_ListBalancesOptions as ListBalancesOptions,
      benefitProgramsV1Balance_universal_d_queryBalances as queryBalances,
      benefitProgramsV1Balance_universal_d_BalancesQueryResult as BalancesQueryResult,
      benefitProgramsV1Balance_universal_d_BalancesQueryBuilder as BalancesQueryBuilder,
      benefitProgramsV1Balance_universal_d_changeBalance as changeBalance,
      benefitProgramsV1Balance_universal_d_ChangeBalanceOptions as ChangeBalanceOptions,
      benefitProgramsV1Balance_universal_d_revertBalanceChange as revertBalanceChange,
      benefitProgramsV1Balance_universal_d_RevertBalanceChangeOptions as RevertBalanceChangeOptions,
      benefitProgramsV1Balance_universal_d_getTransactionReversibility as getTransactionReversibility,
    };
  }
  
  /**
   * Represents anything that an external system exposes as a benefit. It could be a specific event, a booking session, or even a physical good.
   * `category` is used to identify the type of the item and id is used to uniquely identify it within the category.
   * For example, if the item is a blog post, then the category could be "post" and the id could be the post id.
   */
  interface Item$2 {
      /**
       * Item identifier
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this Item was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Item was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** External item identifier */
      externalId?: string;
      /** Item category. Discriminates between different types of items. E.g. posts, groups etc. */
      category?: string | null;
      /** Key of the set that this item is part of */
      itemSetId?: string;
      /** Display name of the item */
      displayName?: string | null;
      /** ID of the app that provides this item, eg. bookings, blog or events */
      providerAppId?: string | null;
      /** Data extensions */
      extendedFields?: ExtendedFields$2;
  }
  interface ExtendedFields$2 {
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
  interface CreateItemRequest {
      /** Item to be created */
      item: Item$2;
  }
  interface CreateItemResponse {
      /** Item that was created */
      item?: Item$2;
  }
  interface BulkCreateItemRequest {
      /** Items to be added */
      items: Item$2[];
      /** set to `true` if you wish to receive back the created items in the response */
      returnEntity?: boolean;
  }
  interface BulkCreateItemResponse {
      /** Item that were added */
      results?: BulkItemResult$1[];
      /** Bulk action metadata */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkItemResult$1 {
      /** Item metadata */
      itemMetadata?: ItemMetadata$3;
      /** Only exists if `returnEntity` was set to true in the request */
      item?: Item$2;
  }
  interface ItemMetadata$3 {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError$3;
  }
  interface ApplicationError$3 {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata$3 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface DeleteItemRequest {
      /** Item id */
      itemId: string;
  }
  interface DeleteItemResponse {
  }
  interface BulkDeleteItemRequest {
      /** Items to be deleted */
      itemIds: string[];
  }
  interface BulkDeleteItemResponse {
      /** Items that were removed */
      results?: BulkItemResult$1[];
      /** Bulk action metadata */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface UpdateItemRequest$1 {
      /** Item to be updated, may be partial */
      item: Item$2;
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateItemResponse$1 {
      /** Item that was updated */
      item?: Item$2;
  }
  interface BulkUpdateItemRequest {
      /** Items to be added */
      items?: MaskedItem[];
      /** set to `true` if you wish to receive back the delete items in the response */
      returnEntity?: boolean;
  }
  interface MaskedItem {
      /** Item to be updated, may be partial */
      item?: Item$2;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateItemResponse {
      /** Item that were updated */
      results?: BulkItemResult$1[];
      /** Bulk action metadata */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface GetItemRequest$1 {
      /** Id of the Item to retrieve */
      itemId: string;
  }
  interface GetItemResponse$1 {
      /** The retrieved Item */
      item?: Item$2;
  }
  interface ListItemsRequest {
      /** The filter */
      filter?: Filter$1;
      /** Cursor paging */
      cursorPaging?: CursorPaging$4;
  }
  enum Type$2 {
      UNKNOWN_FILTER = "UNKNOWN_FILTER",
      BY_ITEM_SET_ID_AND_REFERENCE = "BY_ITEM_SET_ID_AND_REFERENCE",
      BY_REFERENCE = "BY_REFERENCE"
  }
  interface ByItemSetIdAndReference {
      /** A list of filters */
      filters?: ByItemSetIdAndReferenceFilter[];
  }
  interface ByItemSetIdAndReferenceFilter {
      /** Key of the set that this item is part of */
      itemSetId?: string;
      /** External item identifier */
      externalId?: string;
      /** Item category. Discriminates between different types of items. E.g. posts, groups etc. */
      category?: string | null;
      /** Item provider app id */
      providerAppId?: string;
  }
  interface ByReference {
      /** A list of filters */
      filters?: ByReferenceFilter[];
  }
  interface ByReferenceFilter {
      /** External item identifier */
      externalId?: string;
      /** Item category. Discriminates between different types of items. E.g. posts, groups etc. */
      category?: string | null;
      /** Item provider app id */
      providerAppId?: string;
  }
  interface Filter$1 extends FilterFilterOneOf$1 {
      /** A list of filters by itemSetId and reference */
      byItemSetIdAndReferenceOptions?: ByItemSetIdAndReference;
      /** A list of filters by reference */
      byReferenceOptions?: ByReference;
      /** Type of the filter */
      type?: Type$2;
  }
  /** @oneof */
  interface FilterFilterOneOf$1 {
      /** A list of filters by itemSetId and reference */
      byItemSetIdAndReferenceOptions?: ByItemSetIdAndReference;
      /** A list of filters by reference */
      byReferenceOptions?: ByReference;
  }
  interface CursorPaging$4 {
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
  interface ListItemsResponse {
      /** The retrieved items */
      items?: Item$2[];
      /** Paging information */
      metadata?: CursorPagingMetadata$4;
  }
  interface CursorPagingMetadata$4 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$4;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$4 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryItemsRequest$1 {
      /** WQL expression */
      query?: CursorQuery$4;
  }
  interface CursorQuery$4 extends CursorQueryPagingMethodOneOf$4 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$4;
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
      sort?: Sorting$4[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$4 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$4;
  }
  interface Sorting$4 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$4;
  }
  enum SortOrder$4 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryItemsResponse$1 {
      /** The retrieved Items */
      items?: Item$2[];
      /** Paging information */
      metadata?: CursorPagingMetadata$4;
  }
  interface CountItemsRequest {
      /** Items filter to count */
      filter?: Record<string, any> | null;
  }
  interface CountItemsResponse {
      /** Number of counted items */
      count?: number;
  }
  interface CloneItemsRequest {
      /** Id of the item set that these items were added to */
      itemSetId: string;
  }
  interface CloneItemsResponse {
      /** Id of the item set that these items were added to */
      clonedItemSetId?: string;
      /** Id of the job that is cloning the item set */
      cloneJobId?: string;
  }
  interface AllocateItemSetsRequest {
      /** Number of sets to allocate */
      numberOfSets?: number;
  }
  interface AllocateItemSetsResponse {
      /** Key of the item set that was created */
      itemSetIds?: string[];
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
   * Create an item
   * @param item - Item to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField item
   * @requiredField item.externalId
   * @requiredField item.itemSetId
   * @requiredField item.providerAppId
   * @adminMethod
   * @returns Item that was created
   */
  function createItem(item: Item$2): Promise<Item$2>;
  /**
   * Adds items to the benefit
   * @param items - Items to be added
   * @internal
   * @documentationMaturity preview
   * @requiredField items
   * @requiredField items.externalId
   * @requiredField items.itemSetId
   * @adminMethod
   */
  function bulkCreateItem(items: Item$2[], options?: BulkCreateItemOptions): Promise<BulkCreateItemResponse>;
  interface BulkCreateItemOptions {
      /** set to `true` if you wish to receive back the created items in the response */
      returnEntity?: boolean;
  }
  /**
   * Removes the item from the benefit
   * @param itemId - Item id
   * @internal
   * @documentationMaturity preview
   * @requiredField itemId
   * @adminMethod
   */
  function deleteItem(itemId: string): Promise<void>;
  /**
   * Deletes the items
   * @param itemIds - Items to be deleted
   * @internal
   * @documentationMaturity preview
   * @requiredField itemIds
   * @adminMethod
   */
  function bulkDeleteItem(itemIds: string[]): Promise<BulkDeleteItemResponse>;
  /**
   * Update the Item, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - Item identifier
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField item
   * @requiredField item.revision
   * @adminMethod
   * @returns Item that was updated
   */
  function updateItem$1(_id: string | null, item: UpdateItem$1, options?: UpdateItemOptions$1): Promise<Item$2>;
  interface UpdateItem$1 {
      /**
       * Item identifier
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this Item was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Item was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** External item identifier */
      externalId?: string;
      /** Item category. Discriminates between different types of items. E.g. posts, groups etc. */
      category?: string | null;
      /** Key of the set that this item is part of */
      itemSetId?: string;
      /** Display name of the item */
      displayName?: string | null;
      /** ID of the app that provides this item, eg. bookings, blog or events */
      providerAppId?: string | null;
      /** Data extensions */
      extendedFields?: ExtendedFields$2;
  }
  interface UpdateItemOptions$1 {
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Update the Item, supports partial update
   * Pass the latest `revision` for a successful update
   * @internal
   * @documentationMaturity preview
   * @requiredField options.items.item
   * @requiredField options.items.item._id
   * @requiredField options.items.item.revision
   * @adminMethod
   */
  function bulkUpdateItem(options?: BulkUpdateItemOptions): Promise<BulkUpdateItemResponse>;
  interface BulkUpdateItemOptions {
      /** Items to be added */
      items?: MaskedItem[];
      /** set to `true` if you wish to receive back the delete items in the response */
      returnEntity?: boolean;
  }
  /**
   * Get a Benefit Item by id
   * @param itemId - Id of the Item to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField itemId
   * @adminMethod
   * @returns The retrieved Item
   */
  function getItem$1(itemId: string): Promise<Item$2>;
  /**
   * Get all items matching the filter
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listItems(options?: ListItemsOptions): Promise<ListItemsResponse>;
  interface ListItemsOptions {
      /** The filter */
      filter?: Filter$1;
      /** Cursor paging */
      cursorPaging?: CursorPaging$4;
  }
  /**
   * Query Items using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryItems$1(): ItemsQueryBuilder$1;
  interface QueryCursorResult$4 {
      cursors: Cursors$4;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ItemsQueryResult$1 extends QueryCursorResult$4 {
      items: Item$2[];
      query: ItemsQueryBuilder$1;
      next: () => Promise<ItemsQueryResult$1>;
      prev: () => Promise<ItemsQueryResult$1>;
  }
  interface ItemsQueryBuilder$1 {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ItemsQueryBuilder$1;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ItemsQueryBuilder$1;
      /** @documentationMaturity preview */
      find: () => Promise<ItemsQueryResult$1>;
  }
  /**
   * Used for counting items
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function countItems(options?: CountItemsOptions): Promise<CountItemsResponse>;
  interface CountItemsOptions {
      /** Items filter to count */
      filter?: Record<string, any> | null;
  }
  /**
   * Clone the item set
   * @param itemSetId - Id of the item set that these items were added to
   * @internal
   * @documentationMaturity preview
   * @requiredField itemSetId
   * @adminMethod
   */
  function cloneItems(itemSetId: string): Promise<CloneItemsResponse>;
  /**
   * Allocates the provided number of sets
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function allocateItemSets(options?: AllocateItemSetsOptions): Promise<AllocateItemSetsResponse>;
  interface AllocateItemSetsOptions {
      /** Number of sets to allocate */
      numberOfSets?: number;
  }
  
  type benefitProgramsV1Item_universal_d_CreateItemRequest = CreateItemRequest;
  type benefitProgramsV1Item_universal_d_CreateItemResponse = CreateItemResponse;
  type benefitProgramsV1Item_universal_d_BulkCreateItemRequest = BulkCreateItemRequest;
  type benefitProgramsV1Item_universal_d_BulkCreateItemResponse = BulkCreateItemResponse;
  type benefitProgramsV1Item_universal_d_DeleteItemRequest = DeleteItemRequest;
  type benefitProgramsV1Item_universal_d_DeleteItemResponse = DeleteItemResponse;
  type benefitProgramsV1Item_universal_d_BulkDeleteItemRequest = BulkDeleteItemRequest;
  type benefitProgramsV1Item_universal_d_BulkDeleteItemResponse = BulkDeleteItemResponse;
  type benefitProgramsV1Item_universal_d_BulkUpdateItemRequest = BulkUpdateItemRequest;
  type benefitProgramsV1Item_universal_d_MaskedItem = MaskedItem;
  type benefitProgramsV1Item_universal_d_BulkUpdateItemResponse = BulkUpdateItemResponse;
  type benefitProgramsV1Item_universal_d_ListItemsRequest = ListItemsRequest;
  type benefitProgramsV1Item_universal_d_ByItemSetIdAndReference = ByItemSetIdAndReference;
  type benefitProgramsV1Item_universal_d_ByItemSetIdAndReferenceFilter = ByItemSetIdAndReferenceFilter;
  type benefitProgramsV1Item_universal_d_ByReference = ByReference;
  type benefitProgramsV1Item_universal_d_ByReferenceFilter = ByReferenceFilter;
  type benefitProgramsV1Item_universal_d_ListItemsResponse = ListItemsResponse;
  type benefitProgramsV1Item_universal_d_CountItemsRequest = CountItemsRequest;
  type benefitProgramsV1Item_universal_d_CountItemsResponse = CountItemsResponse;
  type benefitProgramsV1Item_universal_d_CloneItemsRequest = CloneItemsRequest;
  type benefitProgramsV1Item_universal_d_CloneItemsResponse = CloneItemsResponse;
  type benefitProgramsV1Item_universal_d_AllocateItemSetsRequest = AllocateItemSetsRequest;
  type benefitProgramsV1Item_universal_d_AllocateItemSetsResponse = AllocateItemSetsResponse;
  const benefitProgramsV1Item_universal_d_createItem: typeof createItem;
  const benefitProgramsV1Item_universal_d_bulkCreateItem: typeof bulkCreateItem;
  type benefitProgramsV1Item_universal_d_BulkCreateItemOptions = BulkCreateItemOptions;
  const benefitProgramsV1Item_universal_d_deleteItem: typeof deleteItem;
  const benefitProgramsV1Item_universal_d_bulkDeleteItem: typeof bulkDeleteItem;
  const benefitProgramsV1Item_universal_d_bulkUpdateItem: typeof bulkUpdateItem;
  type benefitProgramsV1Item_universal_d_BulkUpdateItemOptions = BulkUpdateItemOptions;
  const benefitProgramsV1Item_universal_d_listItems: typeof listItems;
  type benefitProgramsV1Item_universal_d_ListItemsOptions = ListItemsOptions;
  const benefitProgramsV1Item_universal_d_countItems: typeof countItems;
  type benefitProgramsV1Item_universal_d_CountItemsOptions = CountItemsOptions;
  const benefitProgramsV1Item_universal_d_cloneItems: typeof cloneItems;
  const benefitProgramsV1Item_universal_d_allocateItemSets: typeof allocateItemSets;
  type benefitProgramsV1Item_universal_d_AllocateItemSetsOptions = AllocateItemSetsOptions;
  namespace benefitProgramsV1Item_universal_d {
    export {
      Item$2 as Item,
      ExtendedFields$2 as ExtendedFields,
      benefitProgramsV1Item_universal_d_CreateItemRequest as CreateItemRequest,
      benefitProgramsV1Item_universal_d_CreateItemResponse as CreateItemResponse,
      benefitProgramsV1Item_universal_d_BulkCreateItemRequest as BulkCreateItemRequest,
      benefitProgramsV1Item_universal_d_BulkCreateItemResponse as BulkCreateItemResponse,
      BulkItemResult$1 as BulkItemResult,
      ItemMetadata$3 as ItemMetadata,
      ApplicationError$3 as ApplicationError,
      BulkActionMetadata$3 as BulkActionMetadata,
      benefitProgramsV1Item_universal_d_DeleteItemRequest as DeleteItemRequest,
      benefitProgramsV1Item_universal_d_DeleteItemResponse as DeleteItemResponse,
      benefitProgramsV1Item_universal_d_BulkDeleteItemRequest as BulkDeleteItemRequest,
      benefitProgramsV1Item_universal_d_BulkDeleteItemResponse as BulkDeleteItemResponse,
      UpdateItemRequest$1 as UpdateItemRequest,
      UpdateItemResponse$1 as UpdateItemResponse,
      benefitProgramsV1Item_universal_d_BulkUpdateItemRequest as BulkUpdateItemRequest,
      benefitProgramsV1Item_universal_d_MaskedItem as MaskedItem,
      benefitProgramsV1Item_universal_d_BulkUpdateItemResponse as BulkUpdateItemResponse,
      GetItemRequest$1 as GetItemRequest,
      GetItemResponse$1 as GetItemResponse,
      benefitProgramsV1Item_universal_d_ListItemsRequest as ListItemsRequest,
      Type$2 as Type,
      benefitProgramsV1Item_universal_d_ByItemSetIdAndReference as ByItemSetIdAndReference,
      benefitProgramsV1Item_universal_d_ByItemSetIdAndReferenceFilter as ByItemSetIdAndReferenceFilter,
      benefitProgramsV1Item_universal_d_ByReference as ByReference,
      benefitProgramsV1Item_universal_d_ByReferenceFilter as ByReferenceFilter,
      Filter$1 as Filter,
      FilterFilterOneOf$1 as FilterFilterOneOf,
      CursorPaging$4 as CursorPaging,
      benefitProgramsV1Item_universal_d_ListItemsResponse as ListItemsResponse,
      CursorPagingMetadata$4 as CursorPagingMetadata,
      Cursors$4 as Cursors,
      QueryItemsRequest$1 as QueryItemsRequest,
      CursorQuery$4 as CursorQuery,
      CursorQueryPagingMethodOneOf$4 as CursorQueryPagingMethodOneOf,
      Sorting$4 as Sorting,
      SortOrder$4 as SortOrder,
      QueryItemsResponse$1 as QueryItemsResponse,
      benefitProgramsV1Item_universal_d_CountItemsRequest as CountItemsRequest,
      benefitProgramsV1Item_universal_d_CountItemsResponse as CountItemsResponse,
      benefitProgramsV1Item_universal_d_CloneItemsRequest as CloneItemsRequest,
      benefitProgramsV1Item_universal_d_CloneItemsResponse as CloneItemsResponse,
      benefitProgramsV1Item_universal_d_AllocateItemSetsRequest as AllocateItemSetsRequest,
      benefitProgramsV1Item_universal_d_AllocateItemSetsResponse as AllocateItemSetsResponse,
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
      benefitProgramsV1Item_universal_d_createItem as createItem,
      benefitProgramsV1Item_universal_d_bulkCreateItem as bulkCreateItem,
      benefitProgramsV1Item_universal_d_BulkCreateItemOptions as BulkCreateItemOptions,
      benefitProgramsV1Item_universal_d_deleteItem as deleteItem,
      benefitProgramsV1Item_universal_d_bulkDeleteItem as bulkDeleteItem,
      updateItem$1 as updateItem,
      UpdateItem$1 as UpdateItem,
      UpdateItemOptions$1 as UpdateItemOptions,
      benefitProgramsV1Item_universal_d_bulkUpdateItem as bulkUpdateItem,
      benefitProgramsV1Item_universal_d_BulkUpdateItemOptions as BulkUpdateItemOptions,
      getItem$1 as getItem,
      benefitProgramsV1Item_universal_d_listItems as listItems,
      benefitProgramsV1Item_universal_d_ListItemsOptions as ListItemsOptions,
      queryItems$1 as queryItems,
      ItemsQueryResult$1 as ItemsQueryResult,
      ItemsQueryBuilder$1 as ItemsQueryBuilder,
      benefitProgramsV1Item_universal_d_countItems as countItems,
      benefitProgramsV1Item_universal_d_CountItemsOptions as CountItemsOptions,
      benefitProgramsV1Item_universal_d_cloneItems as cloneItems,
      benefitProgramsV1Item_universal_d_allocateItemSets as allocateItemSets,
      benefitProgramsV1Item_universal_d_AllocateItemSetsOptions as AllocateItemSetsOptions,
    };
  }
  
  /**
   * This represents the current state of what the beneficiary is entitled to. Pool is always created in the image of the template.
   * + Pool supports basic lifecycle, can be paused or resumed. E.g. for recurring entitlements they should be active only when the underlying subscription is active. Redemption would fail on a non-active entitlement
   * + Pool may be recurring. Recurrence is driven by an external system (e.g. pricing plans order billing cycle) via the grant method of this API.
   * + Depending on user input updates to entitlement templates may cascade to entitlements in 3 different ways:
   * + On Provision
   * + On Grant
   * + Immediately
   *
   * Entitlements much like their templates are also grouped together in packages which are identified by their id.
   * When entitlements are provisioned from either a single template or a template package they are always assigned to a new entitlement package (id provided by the caller). This reference
   * is then used throughout the lifecycle of the entitlement.
   */
  interface Pool {
      /**
       * Pool ID
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this Pool was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Pool was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * PoolDefinition that this entitlement was created from
       * @readonly
       */
      poolDefinitionId?: string;
      /**
       * Program definition from which this entitlement was provisioned from
       * @readonly
       */
      programDefinitionId?: string | null;
      /**
       * Package that this entitlement belongs to
       * @readonly
       */
      programId?: string;
      /**
       * Status of entitlement
       * @readonly
       */
      status?: PoolStatus;
      /** Who is getting the entitlement */
      beneficiary?: IdentificationData$3;
      /** Items and policies how the entitlement works */
      details?: Details$1;
      /**
       * Name of the entitlement template that this Pool was provisioned from
       * @readonly
       */
      displayName?: string;
      /** Used to determine the source of the pool that is copied from the pool definition. Default is "unknown". */
      namespace?: string | null;
      /** Data extensions */
      extendedFields?: ExtendedFields$1;
      /**
       * Program definition info
       * @readonly
       */
      programDefinition?: ProgramDefinitionInfo;
      /**
       * Program info
       * @readonly
       */
      program?: ProgramInfo;
  }
  enum PoolStatus {
      UNDEFINED = "UNDEFINED",
      ACTIVE = "ACTIVE",
      PAUSED = "PAUSED",
      ENDED = "ENDED",
      PROVISIONING = "PROVISIONING"
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
      /**
       * @internal
       * @readonly
       */
      identityType?: IdentityType$1;
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
  enum IdentityType$1 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface Details$1 {
      /** A set of benefits that share the credit pool and policies of the entitlement */
      benefits?: Benefit$1[];
      /** Settings that control the behavior of the credit pool. If this value is left empty, then the entitlement is unlimited and items should not have prices */
      creditConfiguration?: CreditConfiguration$1;
      /** Defines entitlement eligibility. Default policy for all items, but may be overridden by a specific item */
      policyExpression?: PolicyExpression$1;
      /** Additional info that was set by the Entitlement Provider */
      additionalData?: Record<string, any> | null;
  }
  /** Groups items that share the same credit pool and policies */
  interface Benefit$1 {
      /** An identifier for the benefit. Should be unique per pool / pool definition. May be an empty string */
      benefitKey?: string;
      /**
       * Id referencing the set of items that can be used to redeem this benefit
       * @readonly
       */
      itemSetId?: string | null;
      /** Price of the item expressed in credits */
      price?: string | null;
      /** Overrides the default policies in Entitlement Data */
      policyExpression?: PolicyExpression$1;
      /** Additional info that was set by the Entitlement Provider */
      additionalData?: Record<string, any> | null;
      /** ID of the app that provides this benefit, eg. bookings, blog or events */
      providerAppId?: string | null;
      /** Display name of the benefit */
      displayName?: string | null;
      /** Description of the benefit */
      description?: string | null;
  }
  interface PolicyExpression$1 extends PolicyExpressionExpressionOneOf$1 {
      /** Negates the expression */
      operatorNotOptions?: PolicyExpressionNot$1;
      /** Combines the expressions with an `AND` operator */
      operatorAndOptions?: PolicyExpressionAnd$1;
      /** Combines the expressions with an `OR` operator */
      operatorOrOptions?: PolicyExpressionOr$1;
      /** Represents the specific policy */
      policyOptions?: Policy$1;
      /** Policy expression type */
      type?: PolicyExpressionType$1;
  }
  /** @oneof */
  interface PolicyExpressionExpressionOneOf$1 {
      /** Negates the expression */
      operatorNotOptions?: PolicyExpressionNot$1;
      /** Combines the expressions with an `AND` operator */
      operatorAndOptions?: PolicyExpressionAnd$1;
      /** Combines the expressions with an `OR` operator */
      operatorOrOptions?: PolicyExpressionOr$1;
      /** Represents the specific policy */
      policyOptions?: Policy$1;
  }
  enum PolicyExpressionType$1 {
      UNKNOWN = "UNKNOWN",
      OPERATOR_NOT = "OPERATOR_NOT",
      OPERATOR_AND = "OPERATOR_AND",
      OPERATOR_OR = "OPERATOR_OR",
      POLICY = "POLICY"
  }
  interface PolicyExpressionNot$1 {
      /** Expression that is negated */
      expression?: PolicyExpression$1;
  }
  interface PolicyExpressionAnd$1 {
      /** Expressions that are combined with an `AND` operator */
      expressions?: PolicyExpression$1[];
  }
  interface PolicyExpressionOr$1 {
      /** Expressions that are combined with an `OR` operator */
      expressions?: PolicyExpression$1[];
  }
  interface Policy$1 extends PolicyPolicyOneOf$1 {
      /** Policy which defines entitlement eligibility on particular days or hours */
      fixedIntervalOptions?: FixedIntervalPolicy$1;
      /** Policy which limits entitlement usage per time unit */
      rateLimitedOptions?: RateLimitedPolicy$1;
      /** Custom policy definition that is controlled by the CustomPolicyProvider */
      customOptions?: CustomPolicy$1;
      /** Policy type */
      type?: Type$1;
  }
  /** @oneof */
  interface PolicyPolicyOneOf$1 {
      /** Policy which defines entitlement eligibility on particular days or hours */
      fixedIntervalOptions?: FixedIntervalPolicy$1;
      /** Policy which limits entitlement usage per time unit */
      rateLimitedOptions?: RateLimitedPolicy$1;
      /** Custom policy definition that is controlled by the CustomPolicyProvider */
      customOptions?: CustomPolicy$1;
  }
  enum Type$1 {
      UNKNOWN = "UNKNOWN",
      FIXED_INTERVAL = "FIXED_INTERVAL",
      RATE_LIMITED = "RATE_LIMITED",
      CUSTOM = "CUSTOM"
  }
  interface FixedIntervalPolicy$1 {
      /** Weekday that this interval starts from. If this is set then to_week_day must also be set */
      fromWeekDay?: WeekDay$1;
      /** Weekday that this interval ends at. If this is set then from_week_day must also be set */
      toWeekDay?: WeekDay$1;
      /** Hour that this interval starts from. If this is set then to_hour must also be set */
      fromHour?: number | null;
      /** Hour that this interval ends at. If this is set then from_hour must also be set */
      toHour?: number | null;
      /** Minute that this interval starts from. If this is set then to_minute must also be set */
      fromMinute?: number | null;
      /** Minute that this interval ends at. If this is set then from_minute must also be set */
      toMinute?: number | null;
  }
  enum WeekDay$1 {
      UNKNOWN = "UNKNOWN",
      MONDAY = "MONDAY",
      TUESDAY = "TUESDAY",
      WEDNESDAY = "WEDNESDAY",
      THURSDAY = "THURSDAY",
      FRIDAY = "FRIDAY",
      SATURDAY = "SATURDAY",
      SUNDAY = "SUNDAY"
  }
  interface RateLimitedPolicy$1 extends RateLimitedPolicyPeriodOneOf$1 {
      /** Policy which defines entitlement eligibility on particular days or hours */
      fixedIntervalOptions?: FixedIntervalPolicy$1;
      /** Defines how many times it's allowed to consume a item over the period */
      times?: number;
      /** Type of period */
      type?: RateLimitedPolicyType$1;
  }
  /** @oneof */
  interface RateLimitedPolicyPeriodOneOf$1 {
      /** Policy which defines entitlement eligibility on particular days or hours */
      fixedIntervalOptions?: FixedIntervalPolicy$1;
  }
  enum RateLimitedPolicyType$1 {
      UNKNOWN = "UNKNOWN",
      FIXED_INTERVAL = "FIXED_INTERVAL",
      PER_CYCLE = "PER_CYCLE"
  }
  /** Custom policy as implemented by the Entitlement Policy Provider */
  interface CustomPolicy$1 {
      /** References a specific custom policy on the provider's system */
      _id?: string;
      /** Custom policy provider id */
      appId?: string | null;
      /** Additional info for this custom policy. It's going to be passed to the policy provider during eligibility checks */
      additionalData?: Record<string, any> | null;
  }
  interface CreditConfiguration$1 {
      /** The total amount of credits available for this entitlement */
      amount?: string;
      /** Rollover configuration */
      rolloverConfiguration?: RolloverConfiguration$1;
      /** Display name of the unit */
      unitDisplayName?: string | null;
  }
  interface RolloverConfiguration$1 {
      /** Determined whether unused credits are rolled over to the new cycle */
      enabled?: boolean | null;
      /** The maximum amount of credits to roll over on renewal. The rolled over value will be the minimum of this value and the remaining credits. */
      amount?: string | null;
  }
  interface ExtendedFields$1 {
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
  interface ProgramDefinitionInfo {
      /**
       * Id of the program definition
       * @readonly
       */
      _id?: string;
      /**
       * External id of the pool definition
       * @readonly
       */
      externalId?: string | null;
  }
  interface ProgramInfo {
      /**
       * Id of the program
       * @readonly
       */
      _id?: string;
      /**
       * External id of the program
       * @readonly
       */
      externalId?: string | null;
  }
  interface CreatePoolRequest {
      /** Pool to be created */
      pool: Pool;
  }
  interface CreatePoolResponse {
      /** The created Pool */
      pool?: Pool;
  }
  interface GetPoolRequest {
      /** Id of the Pool to retrieve */
      poolId: string;
  }
  interface GetPoolResponse {
      /** The retrieved Pool */
      pool?: Pool;
  }
  interface UpdatePoolRequest {
      /** Pool to be updated, may be partial */
      pool: Pool;
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdatePoolResponse {
      /** The updated Pool */
      pool?: Pool;
  }
  interface DeletePoolRequest {
      /** Id of the Pool to delete */
      poolId: string;
  }
  interface DeletePoolResponse {
  }
  interface QueryPoolsRequest {
      /** WQL expression */
      query: CursorQuery$3;
  }
  interface CursorQuery$3 extends CursorQueryPagingMethodOneOf$3 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$3;
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
      sort?: Sorting$3[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$3 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$3;
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
  interface CursorPaging$3 {
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
  interface QueryPoolsResponse {
      /** The retrieved Pools */
      pools?: Pool[];
      /** Paging information */
      metadata?: CursorPagingMetadata$3;
  }
  interface CursorPagingMetadata$3 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$3;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$3 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface RedeemBenefitRequest {
      /** Id of the pool that is being redeemed from */
      poolId: string;
      /** Reference of the item that is being redeemed */
      itemReference: ItemReference;
      /** If provided it will force the redemption to be done from the specific benefit instead of the first eligible one */
      benefitKey?: string | null;
      /** Number of of items to redeem */
      count?: number;
      /**
       * Date at which the item will be used. Target date does not necessarily equal the redemption date. Credits are redeemed immediately.
       * This date is only used for validations that may be performed by benefit policy providers
       */
      targetDate?: Date;
      /** Idempotency key */
      idempotencyKey: string;
      /** Additional info */
      additionalData?: Record<string, any> | null;
      /** Beneficiary of the benefit. If not provided, will use the identity in the context */
      beneficiary?: IdentificationData$3;
      /** Namespace of the pool */
      namespace?: string;
  }
  interface ItemReference {
      /** External Id of the item */
      externalId?: string;
      /** Item category */
      category?: string | null;
      /** Item provider app Id */
      providerAppId?: string;
  }
  interface RedeemBenefitResponse {
      /** Id of the resulting transaction */
      transactionId?: string;
  }
  interface BenefitRedeemed {
      /** Pool which has been redeemed */
      pool?: Pool;
      /** Details of the redemption */
      redemptionDetails?: RedemptionDetails;
  }
  interface RedemptionDetails {
      /** Id of the redemption transaction */
      transactionId?: string;
      /** Reference of the item that is being redeemed */
      itemReference?: ItemReference;
      /** Number of of items to redeem */
      itemCount?: number;
      /**
       * Date at which the item will be used. Target date does not necessarily equal the redemption date. Credits are redeemed immediately.
       * This date is only used for validations that may be performed by entitlement providers
       */
      targetDate?: Date;
      /** Idempotency key */
      idempotencyKey?: string;
      /** Additional info provided during redemption */
      additionalData?: Record<string, any> | null;
      /** Beneficiary of the entitlement */
      beneficiary?: IdentificationData$3;
  }
  interface NotEnoughBalance {
      /** Pool ID */
      poolId?: string;
      /** Item reference */
      itemReference?: ItemReference;
      /** Price of the item expressed in credits */
      availableBalance?: string;
      /** Price of the item expressed in credits */
      requestedBalance?: string;
  }
  interface PolicyExpressionEvaluatedToFalse {
      /** Pool ID */
      poolId?: string;
      /** Item reference */
      itemReference?: ItemReference;
      /** Failure details */
      failureDetails?: FailureDetails[];
  }
  interface FailureDetails {
      /** Failure code */
      code?: string;
      /** Failure message */
      message?: string | null;
      /** Policy id */
      policyId?: string | null;
      /** App that owns the policy */
      appId?: string | null;
      /** Information provided by the policy */
      errorData?: Record<string, any> | null;
  }
  interface PoolNotActive {
      /** Pool ID */
      poolId?: string;
      /** Pool status */
      poolStatus?: PoolStatus;
  }
  interface BenefitAlreadyRedeemed {
      /** Pool ID */
      poolId?: string;
      /** Idempotency key of the request that failed */
      idempotencyKey?: string;
  }
  interface BenefitNotFound {
      /** Pool ID */
      poolId?: string;
      /** Key of the referenced benefit, if provided */
      benefitKey?: string | null;
  }
  interface ReserveBenefitRequest {
      /** Id of the pool that is being redeemed from */
      poolId: string;
      /** Reference of the item that is being redeemed */
      itemReference: ItemReference;
      /** If provided it will force the redemption to be done from the specific benefit instead of the first eligible one */
      benefitKey?: string | null;
      /** Number of items to redeem */
      count?: number;
      /**
       * Date at which the item will be used. Target date does not necessarily equal the redemption date. Credits are redeemed immediately.
       * This date is only used for validations that may be performed by benefit policy providers
       */
      targetDate?: Date;
      /** Idempotency key */
      idempotencyKey: string;
      /** Additional info */
      additionalData?: Record<string, any> | null;
      /** Beneficiary of the benefit. If not provided, will use the identity in the context */
      beneficiary?: IdentificationData$3;
      /** Namespace of the pool */
      namespace?: string;
  }
  interface ReserveBenefitResponse {
      /** Id of the transaction that was created as a result of this request */
      transactionId?: string;
  }
  interface BenefitReserved {
      /** Pool which was used to perform this transaction */
      pool?: Pool;
      /** Details of the redemption */
      redemptionDetails?: RedemptionDetails;
  }
  interface CancelBenefitReservationRequest {
      /** Id of the transaction that was created as a result of this request */
      transactionId: string;
  }
  interface CancelBenefitReservationResponse {
      /** Id of the transaction that was created as a result of this request */
      transactionId?: string;
  }
  interface BenefitReservationCanceled {
      /** Pool which was used to perform this transaction */
      pool?: Pool;
      /** Id of the canceled reservation transaction */
      transactionId?: string;
  }
  interface ReleaseBenefitReservationRequest {
      /** Id of the transaction that was created as a result of this request */
      transactionId: string;
  }
  interface ReleaseBenefitReservationResponse {
      /** Id of the transaction that was created as a result of this request */
      transactionId?: string;
  }
  interface BenefitReservationReleased {
      /** Pool which was used to perform this transaction */
      pool?: Pool;
      /** Id of the released reservation transaction */
      transactionId?: string;
  }
  interface CheckBenefitEligibilityRequest {
      /** Id of the pool to check eligibility for */
      poolId: string;
      /** If provided it will force the redemption to be done from the specific benefit instead of the first eligible one */
      benefitKey?: string | null;
      /** Reference of the item for which to check benefit's eligibility */
      itemReference: ItemReference;
      /** Number of items to check eligibility for. This number if checked against the policies and credit pool of the pools */
      count?: number;
      /**
       * Date at which the item will be used. Target date does not necessarily equal the redemption date. Credits are redeemed immediately.
       * This date is only used for validations that may be performed by benefit policy providers
       */
      targetDate?: Date;
      /** Additional info */
      additionalData?: Record<string, any> | null;
      /** Beneficiary of the benefit. If not provided, will use the identity in the context */
      beneficiary?: IdentificationData$3;
      /** Namespace of the pool */
      namespace?: string;
  }
  interface CheckBenefitEligibilityResponse {
      /** The result of the eligibility check. Indicates whether the benefit is eligible for redemption, and if not, returns the reason */
      result?: EligibilityCheckResult;
  }
  interface EligibilityCheckResult extends EligibilityCheckResultResultOneOf {
      /** Set when eligibility check passed */
      eligibleOptions?: Eligible;
      /** Set when not enough balance */
      notEnoughBalanceOptions?: NotEnoughBalance;
      /** Set when policy expression evaluated to false */
      policyExpressionEvaluatedToFalseOptions?: PolicyExpressionEvaluatedToFalse;
      /** Set when pool is not active */
      poolNotActiveOptions?: PoolNotActive;
      /** Set when benefit not found */
      benefitNotFoundOptions?: BenefitNotFound;
      /** Set when pool not found */
      poolNotFoundOptions?: PoolNotFound;
      /** Type of the result */
      type?: EligibilityCheckResultType;
  }
  /** @oneof */
  interface EligibilityCheckResultResultOneOf {
      /** Set when eligibility check passed */
      eligibleOptions?: Eligible;
      /** Set when not enough balance */
      notEnoughBalanceOptions?: NotEnoughBalance;
      /** Set when policy expression evaluated to false */
      policyExpressionEvaluatedToFalseOptions?: PolicyExpressionEvaluatedToFalse;
      /** Set when pool is not active */
      poolNotActiveOptions?: PoolNotActive;
      /** Set when benefit not found */
      benefitNotFoundOptions?: BenefitNotFound;
      /** Set when pool not found */
      poolNotFoundOptions?: PoolNotFound;
  }
  interface EligibleBenefit {
      /**
       * Pool ID
       * @readonly
       */
      poolId?: string;
      /** A unique identifier for the group. May be empty, but only one group can have an empty key */
      benefitKey?: string;
      /** Item reference */
      itemReference?: ItemReference;
      /** Price of the item expressed in credits */
      price?: string | null;
  }
  enum EligibilityCheckResultType {
      UNKNOWN = "UNKNOWN",
      ELIGIBLE = "ELIGIBLE",
      NOT_ENOUGH_BALANCE = "NOT_ENOUGH_BALANCE",
      POLICY_EXPRESSION_EVALUATED_TO_FALSE = "POLICY_EXPRESSION_EVALUATED_TO_FALSE",
      POOL_NOT_ACTIVE = "POOL_NOT_ACTIVE",
      BENEFIT_NOT_FOUND = "BENEFIT_NOT_FOUND",
      POOL_NOT_FOUND = "POOL_NOT_FOUND"
  }
  interface Eligible {
      /** Eligible benefits */
      eligibleBenefits?: EligibleBenefit[];
  }
  interface PoolNotFound {
      /** Pool ID */
      poolId?: string;
  }
  interface BulkCheckBenefitEligibilityRequest {
      /** Benefits to check eligibility for */
      benefitSelectors?: BenefitSelector[];
      /** Namespace of the benefits */
      namespace?: string;
      /** Beneficiary of the benefit. If not provided, will use the identity in the context */
      beneficiary?: IdentificationData$3;
  }
  interface BenefitSelector {
      /** Id of the pool to check eligibility for */
      poolId?: string;
      /** If provided it will force the redemption to be done from the specific benefit instead of the first eligible one */
      benefitKey?: string | null;
      /** Reference of the item for which to check benefit's eligibility */
      itemReference?: ItemReference;
      /** Number of items to check eligibility for. This number if checked against the policies and credit pool of the pools */
      count?: number;
      /**
       * Date at which the item will be used. Target date does not necessarily equal the redemption date. Credits are redeemed immediately.
       * This date is only used for validations that may be performed by benefit policy providers
       */
      targetDate?: Date;
      /** Additional info */
      additionalData?: Record<string, any> | null;
  }
  interface BulkCheckBenefitEligibilityResponse {
      /** Benefit eligibility check results */
      results?: BulkEligibilityCheckResult[];
  }
  interface BulkEligibilityCheckResult {
      /** Evaluated request */
      benefitSelector?: BenefitSelector;
      /** Eligibility check result */
      result?: EligibilityCheckResult;
  }
  interface GetEligibleBenefitsRequest {
      /** Reference of the item for which all eligible pools will be returned */
      itemReference: ItemReference;
      /** Number of items to check eligibility for. This number is checked against the policies and credit pool of the pools */
      count?: number;
      /**
       * Date at which the item will be used. Target date does not necessarily equal the redemption date. Credits are redeemed immediately.
       * This date is only used for validations that may be performed by benefit policy providers
       */
      targetDate?: Date;
      /** Additional info */
      additionalData?: Record<string, any> | null;
      /** Beneficiary of the benefit. If not provided, will use the identity in the context */
      beneficiary?: IdentificationData$3;
      /** Namespace of the pool */
      namespace?: string;
  }
  interface GetEligibleBenefitsResponse {
      /** Eligible benefits */
      eligibleBenefits?: EligibleBenefit[];
  }
  interface ListPoolsRequest {
      /** The filter */
      filter?: Filter;
      /** Cursor paging */
      cursorPaging?: CursorPaging$3;
  }
  enum ListPoolsRequestType {
      UNKNOWN_FILTER = "UNKNOWN_FILTER",
      BY_ITEM_REFERENCE = "BY_ITEM_REFERENCE"
  }
  interface ByItemReference {
      /** A list of filters */
      filters?: ByItemReferenceFilter[];
      /** Beneficiary of the pool */
      beneficiary?: IdentificationData$3;
      /** Returns pools that are in the following statuses */
      poolStatuses?: PoolStatus[];
  }
  interface ByItemReferenceFilter {
      itemReference?: ItemReference;
  }
  interface Filter extends FilterFilterOneOf {
      /** A list of filters by reference */
      byItemReferenceOptions?: ByItemReference;
      /** Type of the filter */
      type?: ListPoolsRequestType;
  }
  /** @oneof */
  interface FilterFilterOneOf {
      /** A list of filters by reference */
      byItemReferenceOptions?: ByItemReference;
  }
  interface ListPoolsResponse {
      /** The retrieved pools */
      pools?: PoolWithItems[];
      /** Paging information */
      metadata?: CursorPagingMetadata$3;
  }
  interface PoolWithItems {
      /** The pool */
      pool?: Pool;
      /** The items in the pool */
      itemReference?: ItemReference[];
  }
  interface BulkUpdatePoolRequest {
      /** Pools to be added */
      pools?: MaskedPool[];
      /** set to `true` if you wish to receive back the delete items in the response */
      returnEntity?: boolean;
  }
  interface MaskedPool {
      /** Pool to be updated, may be partial */
      pool?: Pool;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdatePoolResponse {
      /** Pool that were updated */
      results?: BulkPoolResult[];
      /** Bulk action metadata */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkPoolResult {
      /** Pool metadata */
      poolMetadata?: ItemMetadata$2;
      /** Only exists if `returnEntity` was set to true in the request */
      pool?: Pool;
  }
  interface ItemMetadata$2 {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError$2;
  }
  interface ApplicationError$2 {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata$2 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
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
      identity?: WebhooksIdentificationData$1;
      /** Stringify payload. */
      data?: string;
  }
  interface WebhooksIdentificationData$1 extends WebhooksIdentificationDataIdOneOf$1 {
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
  interface WebhooksIdentificationDataIdOneOf$1 {
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
   * Creates a new Pool
   * @param pool - Pool to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField pool
   * @adminMethod
   * @returns The created Pool
   */
  function createPool(pool: Pool): Promise<Pool>;
  /**
   * Get an Pool by id
   * @param poolId - Id of the Pool to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField poolId
   * @adminMethod
   * @returns The retrieved Pool
   */
  function getPool(poolId: string): Promise<Pool>;
  /**
   * Update an Pool, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - Pool ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField pool
   * @requiredField pool.revision
   * @adminMethod
   * @returns The updated Pool
   */
  function updatePool(_id: string | null, pool: UpdatePool, options?: UpdatePoolOptions): Promise<Pool>;
  interface UpdatePool {
      /**
       * Pool ID
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this Pool was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Pool was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * PoolDefinition that this entitlement was created from
       * @readonly
       */
      poolDefinitionId?: string;
      /**
       * Program definition from which this entitlement was provisioned from
       * @readonly
       */
      programDefinitionId?: string | null;
      /**
       * Package that this entitlement belongs to
       * @readonly
       */
      programId?: string;
      /**
       * Status of entitlement
       * @readonly
       */
      status?: PoolStatus;
      /** Who is getting the entitlement */
      beneficiary?: IdentificationData$3;
      /** Items and policies how the entitlement works */
      details?: Details$1;
      /**
       * Name of the entitlement template that this Pool was provisioned from
       * @readonly
       */
      displayName?: string;
      /** Used to determine the source of the pool that is copied from the pool definition. Default is "unknown". */
      namespace?: string | null;
      /** Data extensions */
      extendedFields?: ExtendedFields$1;
      /**
       * Program definition info
       * @readonly
       */
      programDefinition?: ProgramDefinitionInfo;
      /**
       * Program info
       * @readonly
       */
      program?: ProgramInfo;
  }
  interface UpdatePoolOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Delete an Pool
   * @param poolId - Id of the Pool to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField poolId
   * @adminMethod
   */
  function deletePool(poolId: string): Promise<void>;
  /**
   * Query Pools using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryPools(): PoolsQueryBuilder;
  interface QueryCursorResult$3 {
      cursors: Cursors$3;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface PoolsQueryResult extends QueryCursorResult$3 {
      items: Pool[];
      query: PoolsQueryBuilder;
      next: () => Promise<PoolsQueryResult>;
      prev: () => Promise<PoolsQueryResult>;
  }
  interface PoolsQueryBuilder {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => PoolsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => PoolsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<PoolsQueryResult>;
  }
  /**
   * Redeems the requested number of credits for one specific item
   * @param poolId - Id of the pool that is being redeemed from
   * @internal
   * @documentationMaturity preview
   * @requiredField options.idempotencyKey
   * @requiredField options.itemReference
   * @requiredField options.itemReference.externalId
   * @requiredField poolId
   * @adminMethod
   */
  function redeemBenefit(poolId: string, options?: RedeemBenefitOptions): Promise<RedeemBenefitResponse>;
  interface RedeemBenefitOptions {
      /** Reference of the item that is being redeemed */
      itemReference: ItemReference;
      /** If provided it will force the redemption to be done from the specific benefit instead of the first eligible one */
      benefitKey?: string | null;
      /** Number of of items to redeem */
      count?: number;
      /**
       * Date at which the item will be used. Target date does not necessarily equal the redemption date. Credits are redeemed immediately.
       * This date is only used for validations that may be performed by benefit policy providers
       */
      targetDate?: Date;
      /** Idempotency key */
      idempotencyKey: string;
      /** Additional info */
      additionalData?: Record<string, any> | null;
      /** Beneficiary of the benefit. If not provided, will use the identity in the context */
      beneficiary?: IdentificationData$3;
      /** Namespace of the pool */
      namespace?: string;
  }
  /**
   * Performed as two-part redemption
   * @param poolId - Id of the pool that is being redeemed from
   * @internal
   * @documentationMaturity preview
   * @requiredField options.idempotencyKey
   * @requiredField options.itemReference
   * @requiredField options.itemReference.externalId
   * @requiredField poolId
   * @adminMethod
   */
  function reserveBenefit(poolId: string, options?: ReserveBenefitOptions): Promise<ReserveBenefitResponse>;
  interface ReserveBenefitOptions {
      /** Reference of the item that is being redeemed */
      itemReference: ItemReference;
      /** If provided it will force the redemption to be done from the specific benefit instead of the first eligible one */
      benefitKey?: string | null;
      /** Number of items to redeem */
      count?: number;
      /**
       * Date at which the item will be used. Target date does not necessarily equal the redemption date. Credits are redeemed immediately.
       * This date is only used for validations that may be performed by benefit policy providers
       */
      targetDate?: Date;
      /** Idempotency key */
      idempotencyKey: string;
      /** Additional info */
      additionalData?: Record<string, any> | null;
      /** Beneficiary of the benefit. If not provided, will use the identity in the context */
      beneficiary?: IdentificationData$3;
      /** Namespace of the pool */
      namespace?: string;
  }
  /**
   * Performed as two-part redemption
   * @param transactionId - Id of the transaction that was created as a result of this request
   * @internal
   * @documentationMaturity preview
   * @requiredField transactionId
   * @adminMethod
   */
  function cancelBenefitReservation(transactionId: string): Promise<CancelBenefitReservationResponse>;
  /**
   * Performed as two-part redemption
   * @param transactionId - Id of the transaction that was created as a result of this request
   * @internal
   * @documentationMaturity preview
   * @requiredField transactionId
   * @adminMethod
   */
  function releaseBenefitReservation(transactionId: string): Promise<ReleaseBenefitReservationResponse>;
  /**
   * Performed as part of redemption, but can be called on its own
   * @param poolId - Id of the pool to check eligibility for
   * @internal
   * @documentationMaturity preview
   * @requiredField options.itemReference
   * @requiredField options.itemReference.externalId
   * @requiredField poolId
   * @adminMethod
   */
  function checkBenefitEligibility(poolId: string, options?: CheckBenefitEligibilityOptions): Promise<CheckBenefitEligibilityResponse>;
  interface CheckBenefitEligibilityOptions {
      /** If provided it will force the redemption to be done from the specific benefit instead of the first eligible one */
      benefitKey?: string | null;
      /** Reference of the item for which to check benefit's eligibility */
      itemReference: ItemReference;
      /** Number of items to check eligibility for. This number if checked against the policies and credit pool of the pools */
      count?: number;
      /**
       * Date at which the item will be used. Target date does not necessarily equal the redemption date. Credits are redeemed immediately.
       * This date is only used for validations that may be performed by benefit policy providers
       */
      targetDate?: Date;
      /** Additional info */
      additionalData?: Record<string, any> | null;
      /** Beneficiary of the benefit. If not provided, will use the identity in the context */
      beneficiary?: IdentificationData$3;
      /** Namespace of the pool */
      namespace?: string;
  }
  /**
   * Bulk version of the CheckBenefitEligibility endpoint
   * @internal
   * @documentationMaturity preview
   * @requiredField options.benefitSelectors.itemReference
   * @requiredField options.benefitSelectors.itemReference.externalId
   * @requiredField options.benefitSelectors.poolId
   * @adminMethod
   */
  function bulkCheckBenefitEligibility(options?: BulkCheckBenefitEligibilityOptions): Promise<BulkCheckBenefitEligibilityResponse>;
  interface BulkCheckBenefitEligibilityOptions {
      /** Benefits to check eligibility for */
      benefitSelectors?: BenefitSelector[];
      /** Namespace of the benefits */
      namespace?: string;
      /** Beneficiary of the benefit. If not provided, will use the identity in the context */
      beneficiary?: IdentificationData$3;
  }
  /**
   * Performed as part of redemption, but can be called on its own
   * @param itemReference - Reference of the item for which all eligible pools will be returned
   * @internal
   * @documentationMaturity preview
   * @requiredField itemReference
   * @requiredField itemReference.externalId
   * @adminMethod
   */
  function getEligibleBenefits(itemReference: ItemReference, options?: GetEligibleBenefitsOptions): Promise<GetEligibleBenefitsResponse>;
  interface GetEligibleBenefitsOptions {
      /** Number of items to check eligibility for. This number is checked against the policies and credit pool of the pools */
      count?: number;
      /**
       * Date at which the item will be used. Target date does not necessarily equal the redemption date. Credits are redeemed immediately.
       * This date is only used for validations that may be performed by benefit policy providers
       */
      targetDate?: Date;
      /** Additional info */
      additionalData?: Record<string, any> | null;
      /** Beneficiary of the benefit. If not provided, will use the identity in the context */
      beneficiary?: IdentificationData$3;
      /** Namespace of the pool */
      namespace?: string;
  }
  /**
   * Get all pools matching the filter
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listPools(options?: ListPoolsOptions): Promise<ListPoolsResponse>;
  interface ListPoolsOptions {
      /** The filter */
      filter?: Filter;
      /** Cursor paging */
      cursorPaging?: CursorPaging$3;
  }
  /**
   * Update the Pool, supports partial update
   * Pass the latest `revision` for a successful update
   * @internal
   * @documentationMaturity preview
   * @requiredField options.pools.pool
   * @requiredField options.pools.pool._id
   * @requiredField options.pools.pool.revision
   * @adminMethod
   */
  function bulkUpdatePool(options?: BulkUpdatePoolOptions): Promise<BulkUpdatePoolResponse>;
  interface BulkUpdatePoolOptions {
      /** Pools to be added */
      pools?: MaskedPool[];
      /** set to `true` if you wish to receive back the delete items in the response */
      returnEntity?: boolean;
  }
  
  type benefitProgramsV1Pool_universal_d_Pool = Pool;
  type benefitProgramsV1Pool_universal_d_PoolStatus = PoolStatus;
  const benefitProgramsV1Pool_universal_d_PoolStatus: typeof PoolStatus;
  type benefitProgramsV1Pool_universal_d_ProgramDefinitionInfo = ProgramDefinitionInfo;
  type benefitProgramsV1Pool_universal_d_ProgramInfo = ProgramInfo;
  type benefitProgramsV1Pool_universal_d_CreatePoolRequest = CreatePoolRequest;
  type benefitProgramsV1Pool_universal_d_CreatePoolResponse = CreatePoolResponse;
  type benefitProgramsV1Pool_universal_d_GetPoolRequest = GetPoolRequest;
  type benefitProgramsV1Pool_universal_d_GetPoolResponse = GetPoolResponse;
  type benefitProgramsV1Pool_universal_d_UpdatePoolRequest = UpdatePoolRequest;
  type benefitProgramsV1Pool_universal_d_UpdatePoolResponse = UpdatePoolResponse;
  type benefitProgramsV1Pool_universal_d_DeletePoolRequest = DeletePoolRequest;
  type benefitProgramsV1Pool_universal_d_DeletePoolResponse = DeletePoolResponse;
  type benefitProgramsV1Pool_universal_d_QueryPoolsRequest = QueryPoolsRequest;
  type benefitProgramsV1Pool_universal_d_QueryPoolsResponse = QueryPoolsResponse;
  type benefitProgramsV1Pool_universal_d_RedeemBenefitRequest = RedeemBenefitRequest;
  type benefitProgramsV1Pool_universal_d_ItemReference = ItemReference;
  type benefitProgramsV1Pool_universal_d_RedeemBenefitResponse = RedeemBenefitResponse;
  type benefitProgramsV1Pool_universal_d_BenefitRedeemed = BenefitRedeemed;
  type benefitProgramsV1Pool_universal_d_RedemptionDetails = RedemptionDetails;
  type benefitProgramsV1Pool_universal_d_NotEnoughBalance = NotEnoughBalance;
  type benefitProgramsV1Pool_universal_d_PolicyExpressionEvaluatedToFalse = PolicyExpressionEvaluatedToFalse;
  type benefitProgramsV1Pool_universal_d_FailureDetails = FailureDetails;
  type benefitProgramsV1Pool_universal_d_PoolNotActive = PoolNotActive;
  type benefitProgramsV1Pool_universal_d_BenefitAlreadyRedeemed = BenefitAlreadyRedeemed;
  type benefitProgramsV1Pool_universal_d_BenefitNotFound = BenefitNotFound;
  type benefitProgramsV1Pool_universal_d_ReserveBenefitRequest = ReserveBenefitRequest;
  type benefitProgramsV1Pool_universal_d_ReserveBenefitResponse = ReserveBenefitResponse;
  type benefitProgramsV1Pool_universal_d_BenefitReserved = BenefitReserved;
  type benefitProgramsV1Pool_universal_d_CancelBenefitReservationRequest = CancelBenefitReservationRequest;
  type benefitProgramsV1Pool_universal_d_CancelBenefitReservationResponse = CancelBenefitReservationResponse;
  type benefitProgramsV1Pool_universal_d_BenefitReservationCanceled = BenefitReservationCanceled;
  type benefitProgramsV1Pool_universal_d_ReleaseBenefitReservationRequest = ReleaseBenefitReservationRequest;
  type benefitProgramsV1Pool_universal_d_ReleaseBenefitReservationResponse = ReleaseBenefitReservationResponse;
  type benefitProgramsV1Pool_universal_d_BenefitReservationReleased = BenefitReservationReleased;
  type benefitProgramsV1Pool_universal_d_CheckBenefitEligibilityRequest = CheckBenefitEligibilityRequest;
  type benefitProgramsV1Pool_universal_d_CheckBenefitEligibilityResponse = CheckBenefitEligibilityResponse;
  type benefitProgramsV1Pool_universal_d_EligibilityCheckResult = EligibilityCheckResult;
  type benefitProgramsV1Pool_universal_d_EligibilityCheckResultResultOneOf = EligibilityCheckResultResultOneOf;
  type benefitProgramsV1Pool_universal_d_EligibleBenefit = EligibleBenefit;
  type benefitProgramsV1Pool_universal_d_EligibilityCheckResultType = EligibilityCheckResultType;
  const benefitProgramsV1Pool_universal_d_EligibilityCheckResultType: typeof EligibilityCheckResultType;
  type benefitProgramsV1Pool_universal_d_Eligible = Eligible;
  type benefitProgramsV1Pool_universal_d_PoolNotFound = PoolNotFound;
  type benefitProgramsV1Pool_universal_d_BulkCheckBenefitEligibilityRequest = BulkCheckBenefitEligibilityRequest;
  type benefitProgramsV1Pool_universal_d_BenefitSelector = BenefitSelector;
  type benefitProgramsV1Pool_universal_d_BulkCheckBenefitEligibilityResponse = BulkCheckBenefitEligibilityResponse;
  type benefitProgramsV1Pool_universal_d_BulkEligibilityCheckResult = BulkEligibilityCheckResult;
  type benefitProgramsV1Pool_universal_d_GetEligibleBenefitsRequest = GetEligibleBenefitsRequest;
  type benefitProgramsV1Pool_universal_d_GetEligibleBenefitsResponse = GetEligibleBenefitsResponse;
  type benefitProgramsV1Pool_universal_d_ListPoolsRequest = ListPoolsRequest;
  type benefitProgramsV1Pool_universal_d_ListPoolsRequestType = ListPoolsRequestType;
  const benefitProgramsV1Pool_universal_d_ListPoolsRequestType: typeof ListPoolsRequestType;
  type benefitProgramsV1Pool_universal_d_ByItemReference = ByItemReference;
  type benefitProgramsV1Pool_universal_d_ByItemReferenceFilter = ByItemReferenceFilter;
  type benefitProgramsV1Pool_universal_d_Filter = Filter;
  type benefitProgramsV1Pool_universal_d_FilterFilterOneOf = FilterFilterOneOf;
  type benefitProgramsV1Pool_universal_d_ListPoolsResponse = ListPoolsResponse;
  type benefitProgramsV1Pool_universal_d_PoolWithItems = PoolWithItems;
  type benefitProgramsV1Pool_universal_d_BulkUpdatePoolRequest = BulkUpdatePoolRequest;
  type benefitProgramsV1Pool_universal_d_MaskedPool = MaskedPool;
  type benefitProgramsV1Pool_universal_d_BulkUpdatePoolResponse = BulkUpdatePoolResponse;
  type benefitProgramsV1Pool_universal_d_BulkPoolResult = BulkPoolResult;
  const benefitProgramsV1Pool_universal_d_createPool: typeof createPool;
  const benefitProgramsV1Pool_universal_d_getPool: typeof getPool;
  const benefitProgramsV1Pool_universal_d_updatePool: typeof updatePool;
  type benefitProgramsV1Pool_universal_d_UpdatePool = UpdatePool;
  type benefitProgramsV1Pool_universal_d_UpdatePoolOptions = UpdatePoolOptions;
  const benefitProgramsV1Pool_universal_d_deletePool: typeof deletePool;
  const benefitProgramsV1Pool_universal_d_queryPools: typeof queryPools;
  type benefitProgramsV1Pool_universal_d_PoolsQueryResult = PoolsQueryResult;
  type benefitProgramsV1Pool_universal_d_PoolsQueryBuilder = PoolsQueryBuilder;
  const benefitProgramsV1Pool_universal_d_redeemBenefit: typeof redeemBenefit;
  type benefitProgramsV1Pool_universal_d_RedeemBenefitOptions = RedeemBenefitOptions;
  const benefitProgramsV1Pool_universal_d_reserveBenefit: typeof reserveBenefit;
  type benefitProgramsV1Pool_universal_d_ReserveBenefitOptions = ReserveBenefitOptions;
  const benefitProgramsV1Pool_universal_d_cancelBenefitReservation: typeof cancelBenefitReservation;
  const benefitProgramsV1Pool_universal_d_releaseBenefitReservation: typeof releaseBenefitReservation;
  const benefitProgramsV1Pool_universal_d_checkBenefitEligibility: typeof checkBenefitEligibility;
  type benefitProgramsV1Pool_universal_d_CheckBenefitEligibilityOptions = CheckBenefitEligibilityOptions;
  const benefitProgramsV1Pool_universal_d_bulkCheckBenefitEligibility: typeof bulkCheckBenefitEligibility;
  type benefitProgramsV1Pool_universal_d_BulkCheckBenefitEligibilityOptions = BulkCheckBenefitEligibilityOptions;
  const benefitProgramsV1Pool_universal_d_getEligibleBenefits: typeof getEligibleBenefits;
  type benefitProgramsV1Pool_universal_d_GetEligibleBenefitsOptions = GetEligibleBenefitsOptions;
  const benefitProgramsV1Pool_universal_d_listPools: typeof listPools;
  type benefitProgramsV1Pool_universal_d_ListPoolsOptions = ListPoolsOptions;
  const benefitProgramsV1Pool_universal_d_bulkUpdatePool: typeof bulkUpdatePool;
  type benefitProgramsV1Pool_universal_d_BulkUpdatePoolOptions = BulkUpdatePoolOptions;
  namespace benefitProgramsV1Pool_universal_d {
    export {
      benefitProgramsV1Pool_universal_d_Pool as Pool,
      benefitProgramsV1Pool_universal_d_PoolStatus as PoolStatus,
      IdentificationData$3 as IdentificationData,
      IdentificationDataIdOneOf$3 as IdentificationDataIdOneOf,
      IdentityType$1 as IdentityType,
      Details$1 as Details,
      Benefit$1 as Benefit,
      PolicyExpression$1 as PolicyExpression,
      PolicyExpressionExpressionOneOf$1 as PolicyExpressionExpressionOneOf,
      PolicyExpressionType$1 as PolicyExpressionType,
      PolicyExpressionNot$1 as PolicyExpressionNot,
      PolicyExpressionAnd$1 as PolicyExpressionAnd,
      PolicyExpressionOr$1 as PolicyExpressionOr,
      Policy$1 as Policy,
      PolicyPolicyOneOf$1 as PolicyPolicyOneOf,
      Type$1 as Type,
      FixedIntervalPolicy$1 as FixedIntervalPolicy,
      WeekDay$1 as WeekDay,
      RateLimitedPolicy$1 as RateLimitedPolicy,
      RateLimitedPolicyPeriodOneOf$1 as RateLimitedPolicyPeriodOneOf,
      RateLimitedPolicyType$1 as RateLimitedPolicyType,
      CustomPolicy$1 as CustomPolicy,
      CreditConfiguration$1 as CreditConfiguration,
      RolloverConfiguration$1 as RolloverConfiguration,
      ExtendedFields$1 as ExtendedFields,
      benefitProgramsV1Pool_universal_d_ProgramDefinitionInfo as ProgramDefinitionInfo,
      benefitProgramsV1Pool_universal_d_ProgramInfo as ProgramInfo,
      benefitProgramsV1Pool_universal_d_CreatePoolRequest as CreatePoolRequest,
      benefitProgramsV1Pool_universal_d_CreatePoolResponse as CreatePoolResponse,
      benefitProgramsV1Pool_universal_d_GetPoolRequest as GetPoolRequest,
      benefitProgramsV1Pool_universal_d_GetPoolResponse as GetPoolResponse,
      benefitProgramsV1Pool_universal_d_UpdatePoolRequest as UpdatePoolRequest,
      benefitProgramsV1Pool_universal_d_UpdatePoolResponse as UpdatePoolResponse,
      benefitProgramsV1Pool_universal_d_DeletePoolRequest as DeletePoolRequest,
      benefitProgramsV1Pool_universal_d_DeletePoolResponse as DeletePoolResponse,
      benefitProgramsV1Pool_universal_d_QueryPoolsRequest as QueryPoolsRequest,
      CursorQuery$3 as CursorQuery,
      CursorQueryPagingMethodOneOf$3 as CursorQueryPagingMethodOneOf,
      Sorting$3 as Sorting,
      SortOrder$3 as SortOrder,
      CursorPaging$3 as CursorPaging,
      benefitProgramsV1Pool_universal_d_QueryPoolsResponse as QueryPoolsResponse,
      CursorPagingMetadata$3 as CursorPagingMetadata,
      Cursors$3 as Cursors,
      benefitProgramsV1Pool_universal_d_RedeemBenefitRequest as RedeemBenefitRequest,
      benefitProgramsV1Pool_universal_d_ItemReference as ItemReference,
      benefitProgramsV1Pool_universal_d_RedeemBenefitResponse as RedeemBenefitResponse,
      benefitProgramsV1Pool_universal_d_BenefitRedeemed as BenefitRedeemed,
      benefitProgramsV1Pool_universal_d_RedemptionDetails as RedemptionDetails,
      benefitProgramsV1Pool_universal_d_NotEnoughBalance as NotEnoughBalance,
      benefitProgramsV1Pool_universal_d_PolicyExpressionEvaluatedToFalse as PolicyExpressionEvaluatedToFalse,
      benefitProgramsV1Pool_universal_d_FailureDetails as FailureDetails,
      benefitProgramsV1Pool_universal_d_PoolNotActive as PoolNotActive,
      benefitProgramsV1Pool_universal_d_BenefitAlreadyRedeemed as BenefitAlreadyRedeemed,
      benefitProgramsV1Pool_universal_d_BenefitNotFound as BenefitNotFound,
      benefitProgramsV1Pool_universal_d_ReserveBenefitRequest as ReserveBenefitRequest,
      benefitProgramsV1Pool_universal_d_ReserveBenefitResponse as ReserveBenefitResponse,
      benefitProgramsV1Pool_universal_d_BenefitReserved as BenefitReserved,
      benefitProgramsV1Pool_universal_d_CancelBenefitReservationRequest as CancelBenefitReservationRequest,
      benefitProgramsV1Pool_universal_d_CancelBenefitReservationResponse as CancelBenefitReservationResponse,
      benefitProgramsV1Pool_universal_d_BenefitReservationCanceled as BenefitReservationCanceled,
      benefitProgramsV1Pool_universal_d_ReleaseBenefitReservationRequest as ReleaseBenefitReservationRequest,
      benefitProgramsV1Pool_universal_d_ReleaseBenefitReservationResponse as ReleaseBenefitReservationResponse,
      benefitProgramsV1Pool_universal_d_BenefitReservationReleased as BenefitReservationReleased,
      benefitProgramsV1Pool_universal_d_CheckBenefitEligibilityRequest as CheckBenefitEligibilityRequest,
      benefitProgramsV1Pool_universal_d_CheckBenefitEligibilityResponse as CheckBenefitEligibilityResponse,
      benefitProgramsV1Pool_universal_d_EligibilityCheckResult as EligibilityCheckResult,
      benefitProgramsV1Pool_universal_d_EligibilityCheckResultResultOneOf as EligibilityCheckResultResultOneOf,
      benefitProgramsV1Pool_universal_d_EligibleBenefit as EligibleBenefit,
      benefitProgramsV1Pool_universal_d_EligibilityCheckResultType as EligibilityCheckResultType,
      benefitProgramsV1Pool_universal_d_Eligible as Eligible,
      benefitProgramsV1Pool_universal_d_PoolNotFound as PoolNotFound,
      benefitProgramsV1Pool_universal_d_BulkCheckBenefitEligibilityRequest as BulkCheckBenefitEligibilityRequest,
      benefitProgramsV1Pool_universal_d_BenefitSelector as BenefitSelector,
      benefitProgramsV1Pool_universal_d_BulkCheckBenefitEligibilityResponse as BulkCheckBenefitEligibilityResponse,
      benefitProgramsV1Pool_universal_d_BulkEligibilityCheckResult as BulkEligibilityCheckResult,
      benefitProgramsV1Pool_universal_d_GetEligibleBenefitsRequest as GetEligibleBenefitsRequest,
      benefitProgramsV1Pool_universal_d_GetEligibleBenefitsResponse as GetEligibleBenefitsResponse,
      benefitProgramsV1Pool_universal_d_ListPoolsRequest as ListPoolsRequest,
      benefitProgramsV1Pool_universal_d_ListPoolsRequestType as ListPoolsRequestType,
      benefitProgramsV1Pool_universal_d_ByItemReference as ByItemReference,
      benefitProgramsV1Pool_universal_d_ByItemReferenceFilter as ByItemReferenceFilter,
      benefitProgramsV1Pool_universal_d_Filter as Filter,
      benefitProgramsV1Pool_universal_d_FilterFilterOneOf as FilterFilterOneOf,
      benefitProgramsV1Pool_universal_d_ListPoolsResponse as ListPoolsResponse,
      benefitProgramsV1Pool_universal_d_PoolWithItems as PoolWithItems,
      benefitProgramsV1Pool_universal_d_BulkUpdatePoolRequest as BulkUpdatePoolRequest,
      benefitProgramsV1Pool_universal_d_MaskedPool as MaskedPool,
      benefitProgramsV1Pool_universal_d_BulkUpdatePoolResponse as BulkUpdatePoolResponse,
      benefitProgramsV1Pool_universal_d_BulkPoolResult as BulkPoolResult,
      ItemMetadata$2 as ItemMetadata,
      ApplicationError$2 as ApplicationError,
      BulkActionMetadata$2 as BulkActionMetadata,
      DomainEvent$3 as DomainEvent,
      DomainEventBodyOneOf$3 as DomainEventBodyOneOf,
      EntityCreatedEvent$3 as EntityCreatedEvent,
      EntityUpdatedEvent$3 as EntityUpdatedEvent,
      EntityDeletedEvent$3 as EntityDeletedEvent,
      ActionEvent$3 as ActionEvent,
      MessageEnvelope$3 as MessageEnvelope,
      WebhooksIdentificationData$1 as WebhooksIdentificationData,
      WebhooksIdentificationDataIdOneOf$1 as WebhooksIdentificationDataIdOneOf,
      WebhookIdentityType$3 as WebhookIdentityType,
      benefitProgramsV1Pool_universal_d_createPool as createPool,
      benefitProgramsV1Pool_universal_d_getPool as getPool,
      benefitProgramsV1Pool_universal_d_updatePool as updatePool,
      benefitProgramsV1Pool_universal_d_UpdatePool as UpdatePool,
      benefitProgramsV1Pool_universal_d_UpdatePoolOptions as UpdatePoolOptions,
      benefitProgramsV1Pool_universal_d_deletePool as deletePool,
      benefitProgramsV1Pool_universal_d_queryPools as queryPools,
      benefitProgramsV1Pool_universal_d_PoolsQueryResult as PoolsQueryResult,
      benefitProgramsV1Pool_universal_d_PoolsQueryBuilder as PoolsQueryBuilder,
      benefitProgramsV1Pool_universal_d_redeemBenefit as redeemBenefit,
      benefitProgramsV1Pool_universal_d_RedeemBenefitOptions as RedeemBenefitOptions,
      benefitProgramsV1Pool_universal_d_reserveBenefit as reserveBenefit,
      benefitProgramsV1Pool_universal_d_ReserveBenefitOptions as ReserveBenefitOptions,
      benefitProgramsV1Pool_universal_d_cancelBenefitReservation as cancelBenefitReservation,
      benefitProgramsV1Pool_universal_d_releaseBenefitReservation as releaseBenefitReservation,
      benefitProgramsV1Pool_universal_d_checkBenefitEligibility as checkBenefitEligibility,
      benefitProgramsV1Pool_universal_d_CheckBenefitEligibilityOptions as CheckBenefitEligibilityOptions,
      benefitProgramsV1Pool_universal_d_bulkCheckBenefitEligibility as bulkCheckBenefitEligibility,
      benefitProgramsV1Pool_universal_d_BulkCheckBenefitEligibilityOptions as BulkCheckBenefitEligibilityOptions,
      benefitProgramsV1Pool_universal_d_getEligibleBenefits as getEligibleBenefits,
      benefitProgramsV1Pool_universal_d_GetEligibleBenefitsOptions as GetEligibleBenefitsOptions,
      benefitProgramsV1Pool_universal_d_listPools as listPools,
      benefitProgramsV1Pool_universal_d_ListPoolsOptions as ListPoolsOptions,
      benefitProgramsV1Pool_universal_d_bulkUpdatePool as bulkUpdatePool,
      benefitProgramsV1Pool_universal_d_BulkUpdatePoolOptions as BulkUpdatePoolOptions,
    };
  }
  
  /**
   * Stores the values that will be used to construct / update the entitlement on provision and grant actions.
   * It defines a set of items sharing the same credit pool and abiding by the same default redemption policy. Each item has a price and may override the default redemption policy
   *
   * PoolDefinitions can be used individually to provision an entitlement or be grouped into program definitions. A pool definition may be a member of multiple program definitions. Program Definitions as well as individual pool definitions are
   * accepted by the entitlement service provision and grant methods. Program Definitions are just a convenient way of grouping and reusing individual pool definitions.
   * For example, pool definition program definitions can be used to model tiered plans: "Gold" and "Silver":
   * - "Silver" program definition would include the following pool definitions: "silver_reward1", "silver_reward2"
   * - "Gold" program definition would then include pool definitions: "gold_reward", "silver_reward1" and "silver_reward2"
   * Notice, that "silver_reward1" and "silver_reward2" are members of both program definitions and "gold_reward" is specific only to the "Gold" program definition
   */
  interface PoolDefinition {
      /**
       * PoolDefinition ID
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this PoolDefinition was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this PoolDefinition was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Name of the pool definition */
      displayName?: string;
      /**
       * Program definitions that this pool definition belongs to
       * @readonly
       */
      programDefinitionIds?: string[];
      /**
       * Entitlement data, which contains item, policy and credit pool configuration
       * and is copied over to an entitlement on provisioning and grant actions
       */
      details?: Details;
      /** Used to determine the source of the pool definition creation, eg. pricing plans (wix.pricing_plans), loyalty (wix.loyalty) or velo (velo.custom_name) */
      namespace?: string | null;
      /** Data extensions */
      extendedFields?: ExtendedFields;
  }
  interface Details {
      /** A set of benefits that share the credit pool and policies of the entitlement */
      benefits?: Benefit[];
      /** Settings that control the behavior of the credit pool. If this value is left empty, then the entitlement is unlimited and items should not have prices */
      creditConfiguration?: CreditConfiguration;
      /** Defines entitlement eligibility. Default policy for all items, but may be overridden by a specific item */
      policyExpression?: PolicyExpression;
      /** Additional info that was set by the Entitlement Provider */
      additionalData?: Record<string, any> | null;
  }
  /** Groups items that share the same credit pool and policies */
  interface Benefit {
      /** An identifier for the benefit. Should be unique per pool / pool definition. May be an empty string */
      benefitKey?: string;
      /**
       * Id referencing the set of items that can be used to redeem this benefit
       * @readonly
       */
      itemSetId?: string | null;
      /** Price of the item expressed in credits */
      price?: string | null;
      /** Overrides the default policies in Entitlement Data */
      policyExpression?: PolicyExpression;
      /** Additional info that was set by the Entitlement Provider */
      additionalData?: Record<string, any> | null;
      /** ID of the app that provides this benefit, eg. bookings, blog or events */
      providerAppId?: string | null;
      /** Display name of the benefit */
      displayName?: string | null;
      /** Description of the benefit */
      description?: string | null;
  }
  interface PolicyExpression extends PolicyExpressionExpressionOneOf {
      /** Negates the expression */
      operatorNotOptions?: PolicyExpressionNot;
      /** Combines the expressions with an `AND` operator */
      operatorAndOptions?: PolicyExpressionAnd;
      /** Combines the expressions with an `OR` operator */
      operatorOrOptions?: PolicyExpressionOr;
      /** Represents the specific policy */
      policyOptions?: Policy;
      /** Policy expression type */
      type?: PolicyExpressionType;
  }
  /** @oneof */
  interface PolicyExpressionExpressionOneOf {
      /** Negates the expression */
      operatorNotOptions?: PolicyExpressionNot;
      /** Combines the expressions with an `AND` operator */
      operatorAndOptions?: PolicyExpressionAnd;
      /** Combines the expressions with an `OR` operator */
      operatorOrOptions?: PolicyExpressionOr;
      /** Represents the specific policy */
      policyOptions?: Policy;
  }
  enum PolicyExpressionType {
      UNKNOWN = "UNKNOWN",
      OPERATOR_NOT = "OPERATOR_NOT",
      OPERATOR_AND = "OPERATOR_AND",
      OPERATOR_OR = "OPERATOR_OR",
      POLICY = "POLICY"
  }
  interface PolicyExpressionNot {
      /** Expression that is negated */
      expression?: PolicyExpression;
  }
  interface PolicyExpressionAnd {
      /** Expressions that are combined with an `AND` operator */
      expressions?: PolicyExpression[];
  }
  interface PolicyExpressionOr {
      /** Expressions that are combined with an `OR` operator */
      expressions?: PolicyExpression[];
  }
  interface Policy extends PolicyPolicyOneOf {
      /** Policy which defines entitlement eligibility on particular days or hours */
      fixedIntervalOptions?: FixedIntervalPolicy;
      /** Policy which limits entitlement usage per time unit */
      rateLimitedOptions?: RateLimitedPolicy;
      /** Custom policy definition that is controlled by the CustomPolicyProvider */
      customOptions?: CustomPolicy;
      /** Policy type */
      type?: Type;
  }
  /** @oneof */
  interface PolicyPolicyOneOf {
      /** Policy which defines entitlement eligibility on particular days or hours */
      fixedIntervalOptions?: FixedIntervalPolicy;
      /** Policy which limits entitlement usage per time unit */
      rateLimitedOptions?: RateLimitedPolicy;
      /** Custom policy definition that is controlled by the CustomPolicyProvider */
      customOptions?: CustomPolicy;
  }
  enum Type {
      UNKNOWN = "UNKNOWN",
      FIXED_INTERVAL = "FIXED_INTERVAL",
      RATE_LIMITED = "RATE_LIMITED",
      CUSTOM = "CUSTOM"
  }
  interface FixedIntervalPolicy {
      /** Weekday that this interval starts from. If this is set then to_week_day must also be set */
      fromWeekDay?: WeekDay;
      /** Weekday that this interval ends at. If this is set then from_week_day must also be set */
      toWeekDay?: WeekDay;
      /** Hour that this interval starts from. If this is set then to_hour must also be set */
      fromHour?: number | null;
      /** Hour that this interval ends at. If this is set then from_hour must also be set */
      toHour?: number | null;
      /** Minute that this interval starts from. If this is set then to_minute must also be set */
      fromMinute?: number | null;
      /** Minute that this interval ends at. If this is set then from_minute must also be set */
      toMinute?: number | null;
  }
  enum WeekDay {
      UNKNOWN = "UNKNOWN",
      MONDAY = "MONDAY",
      TUESDAY = "TUESDAY",
      WEDNESDAY = "WEDNESDAY",
      THURSDAY = "THURSDAY",
      FRIDAY = "FRIDAY",
      SATURDAY = "SATURDAY",
      SUNDAY = "SUNDAY"
  }
  interface RateLimitedPolicy extends RateLimitedPolicyPeriodOneOf {
      /** Policy which defines entitlement eligibility on particular days or hours */
      fixedIntervalOptions?: FixedIntervalPolicy;
      /** Defines how many times it's allowed to consume a item over the period */
      times?: number;
      /** Type of period */
      type?: RateLimitedPolicyType;
  }
  /** @oneof */
  interface RateLimitedPolicyPeriodOneOf {
      /** Policy which defines entitlement eligibility on particular days or hours */
      fixedIntervalOptions?: FixedIntervalPolicy;
  }
  enum RateLimitedPolicyType {
      UNKNOWN = "UNKNOWN",
      FIXED_INTERVAL = "FIXED_INTERVAL",
      PER_CYCLE = "PER_CYCLE"
  }
  /** Custom policy as implemented by the Entitlement Policy Provider */
  interface CustomPolicy {
      /** References a specific custom policy on the provider's system */
      _id?: string;
      /** Custom policy provider id */
      appId?: string | null;
      /** Additional info for this custom policy. It's going to be passed to the policy provider during eligibility checks */
      additionalData?: Record<string, any> | null;
  }
  interface CreditConfiguration {
      /** The total amount of credits available for this entitlement */
      amount?: string;
      /** Rollover configuration */
      rolloverConfiguration?: RolloverConfiguration;
      /** Display name of the unit */
      unitDisplayName?: string | null;
  }
  interface RolloverConfiguration {
      /** Determined whether unused credits are rolled over to the new cycle */
      enabled?: boolean | null;
      /** The maximum amount of credits to roll over on renewal. The rolled over value will be the minimum of this value and the remaining credits. */
      amount?: string | null;
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
  interface CreatePoolDefinitionRequest {
      /** PoolDefinition to be created */
      poolDefinition: PoolDefinition;
      /** Defines how the update cascades to related pools. Must be provided if program_definition_ids are provided */
      cascade?: Cascade$1;
  }
  enum Cascade$1 {
      /** No cascade is performed. Can only be used when data is not being updated */
      UNKNOWN_CASCADE = "UNKNOWN_CASCADE",
      /** Scenario 1. Update to data cascades only to newly created entitlements */
      ON_PROVISION = "ON_PROVISION",
      /** Scenario 2. Update to data cascades to entitlements on new grants (e.g. when a new cycle is triggered) and new purchases */
      ON_GRANT = "ON_GRANT",
      /** Scenario 3. Update to data cascades to entitlements immediately */
      IMMEDIATELY = "IMMEDIATELY"
  }
  interface CreatePoolDefinitionResponse {
      /** The created PoolDefinition */
      poolDefinition?: PoolDefinition;
  }
  interface UpdatePoolDefinitionRequest {
      /** PoolDefinition to be updated, may be partial */
      poolDefinition: PoolDefinition;
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
      /** Defines how the update cascades to related Entitlements. Must be provided if details are being updated */
      cascade?: Cascade$1;
  }
  interface UpdatePoolDefinitionResponse {
      /** The updated PoolDefinition */
      poolDefinition?: PoolDefinition;
  }
  interface PoolDefinitionUpdateCascaded {
      /** PoolDefinition which has caused the cascade to happen (data was updated) */
      poolDefinition?: PoolDefinition;
      /** Previous pool definition, if cascade type was ON_PROVISION */
      previousPoolDefinition?: PoolDefinition;
      /** Type of cascade */
      cascadeType?: Cascade$1;
  }
  /** This event is needed to support legacy benefit notification event. Should be only consumed in the proxy. */
  interface PoolDefinitionUpdatedProxySupport {
      /** PoolDefinition after the update */
      currentPoolDefinition?: PoolDefinition;
      /** PoolDefinition before the update */
      previousPoolDefinition?: PoolDefinition;
  }
  interface DeletePoolDefinitionRequest {
      /** Id of the PoolDefinition to delete */
      poolDefinitionId: string;
      /** Defines how the delete operation cascades to related pools. Must be provided if pool definition is a member of at least one program definition */
      cascade?: Cascade$1;
  }
  interface DeletePoolDefinitionResponse {
  }
  /** This event is needed to support legacy benefit notification event. Should be only consumed in the proxy. */
  interface PoolDefinitionDeletedProxySupport {
      /** PoolDefinition which was deleted */
      deletedPoolDefinition?: PoolDefinition;
  }
  interface PoolDefinitionDeleteCascaded {
      /** PoolDefinition which has caused the cascade to happen (data was updated) */
      poolDefinition?: PoolDefinition;
      /** Type of cascade */
      cascadeType?: Cascade$1;
  }
  interface BulkDeletePoolDefinitionRequest {
      /** Pool definition ids to delete */
      poolDefinitionIds: string[];
      /** Defines how the delete operation cascades to related pools. Must be provided if pool definition is a member of at least one program definition */
      cascade?: Cascade$1;
  }
  interface BulkDeletePoolDefinitionResponse {
      /** Pool definitions that were removed */
      results?: BulkPoolDefinitionResult[];
      /** Bulk action metadata */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkPoolDefinitionResult {
      /** Item metadata */
      itemMetadata?: ItemMetadata$1;
      /** Only exists if `returnEntity` was set to true in the request */
      poolDefinition?: PoolDefinition;
  }
  interface ItemMetadata$1 {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError$1;
  }
  interface ApplicationError$1 {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata$1 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface GetPoolDefinitionRequest {
      /** Id of the PoolDefinition to retrieve */
      poolDefinitionId: string;
  }
  interface GetPoolDefinitionResponse {
      /** The retrieved PoolDefinition */
      poolDefinition?: PoolDefinition;
  }
  interface QueryPoolDefinitionsRequest {
      /** WQL expression */
      query?: CursorQuery$2;
  }
  interface CursorQuery$2 extends CursorQueryPagingMethodOneOf$2 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
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
      sort?: Sorting$2[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$2 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
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
  interface CursorPaging$2 {
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
  interface QueryPoolDefinitionsResponse {
      /** The retrieved PoolDefinitions */
      poolDefinitions?: PoolDefinition[];
      /** Paging information */
      metadata?: CursorPagingMetadata$2;
  }
  interface CursorPagingMetadata$2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$2;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$2 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface AddPoolDefinitionToProgramDefinitionRequest {
      /** PoolDefinition to be added to the program definition */
      poolDefinitionId: string;
      /** Program Definition to add the pool definition to */
      programDefinitionId: string;
      /** Defines how the update cascades to related Entitlements */
      cascade?: Cascade$1;
  }
  interface AddPoolDefinitionToProgramDefinitionResponse {
      /** Updated pool definition */
      poolDefinition?: PoolDefinition;
  }
  interface PoolDefinitionAddedToProgramDefinition {
      /** PoolDefinition that was added to the program definition */
      poolDefinition?: PoolDefinition;
      /** Program Definition that the pool definition was added to */
      programDefinitionId?: string;
      /** Type of cascade */
      cascadeType?: Cascade$1;
  }
  interface RemovePoolDefinitionFromProgramDefinitionRequest {
      /** PoolDefinition to be removed from the program definition */
      poolDefinitionId: string;
      /** Program Definition to remove the pool_definition from */
      programDefinitionId: string;
      /** Defines how the update cascades to related Entitlements */
      cascade?: Cascade$1;
  }
  interface RemovePoolDefinitionFromProgramDefinitionResponse {
      /** Updated pool definition */
      poolDefinition?: PoolDefinition;
  }
  interface PoolDefinitionRemovedFromProgramDefinition {
      /** PoolDefinition that was removed from the program definition */
      poolDefinition?: PoolDefinition;
      /** Program Definition that the pool definition was removed from */
      programDefinitionId?: string;
      /** Type of cascade */
      cascadeType?: Cascade$1;
  }
  interface FindPoolDefinitionsByProgramDefinitionRequest {
      /** Program definition key */
      programDefinitionId?: string;
      /** Program definition namespace */
      namespace?: string;
  }
  interface FindPoolDefinitionsByProgramDefinitionResponse {
      /** Pool Definitions belonging to the provided program definition id */
      poolDefinitions?: PoolDefinition[];
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
   * Creates a new Pool Definition
   * @param poolDefinition - PoolDefinition to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField poolDefinition
   * @requiredField poolDefinition.details
   * @requiredField poolDefinition.details.benefits
   * @requiredField poolDefinition.details.benefits.benefitKey
   * @requiredField poolDefinition.details.benefits.providerAppId
   * @requiredField poolDefinition.namespace
   * @adminMethod
   * @returns The created PoolDefinition
   */
  function createPoolDefinition(poolDefinition: PoolDefinition, options?: CreatePoolDefinitionOptions): Promise<PoolDefinition>;
  interface CreatePoolDefinitionOptions {
      /** Defines how the update cascades to related pools. Must be provided if program_definition_ids are provided */
      cascade?: Cascade$1;
  }
  /**
   * Update the PoolDefinition, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - PoolDefinition ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField poolDefinition
   * @requiredField poolDefinition.revision
   * @adminMethod
   * @returns The updated PoolDefinition
   */
  function updatePoolDefinition(_id: string | null, poolDefinition: UpdatePoolDefinition, options?: UpdatePoolDefinitionOptions): Promise<PoolDefinition>;
  interface UpdatePoolDefinition {
      /**
       * PoolDefinition ID
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this PoolDefinition was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this PoolDefinition was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Name of the pool definition */
      displayName?: string;
      /**
       * Program definitions that this pool definition belongs to
       * @readonly
       */
      programDefinitionIds?: string[];
      /**
       * Entitlement data, which contains item, policy and credit pool configuration
       * and is copied over to an entitlement on provisioning and grant actions
       */
      details?: Details;
      /** Used to determine the source of the pool definition creation, eg. pricing plans (wix.pricing_plans), loyalty (wix.loyalty) or velo (velo.custom_name) */
      namespace?: string | null;
      /** Data extensions */
      extendedFields?: ExtendedFields;
  }
  interface UpdatePoolDefinitionOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
      /** Defines how the update cascades to related Entitlements. Must be provided if details are being updated */
      cascade?: Cascade$1;
  }
  /**
   * Delete the PoolDefinition
   * @param poolDefinitionId - Id of the PoolDefinition to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField poolDefinitionId
   * @adminMethod
   */
  function deletePoolDefinition(poolDefinitionId: string, options?: DeletePoolDefinitionOptions): Promise<void>;
  interface DeletePoolDefinitionOptions {
      /** Defines how the delete operation cascades to related pools. Must be provided if pool definition is a member of at least one program definition */
      cascade?: Cascade$1;
  }
  /**
   * Delete multiple pool definitions in a single request. Works synchronously.
   * @param poolDefinitionIds - Pool definition ids to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField poolDefinitionIds
   * @adminMethod
   */
  function bulkDeletePoolDefinition(poolDefinitionIds: string[], options?: BulkDeletePoolDefinitionOptions): Promise<BulkDeletePoolDefinitionResponse>;
  interface BulkDeletePoolDefinitionOptions {
      /** Defines how the delete operation cascades to related pools. Must be provided if pool definition is a member of at least one program definition */
      cascade?: Cascade$1;
  }
  /**
   * Get a PoolDefinition by id
   * @param poolDefinitionId - Id of the PoolDefinition to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField poolDefinitionId
   * @adminMethod
   * @returns The retrieved PoolDefinition
   */
  function getPoolDefinition(poolDefinitionId: string): Promise<PoolDefinition>;
  /**
   * Query PoolDefinitions using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryPoolDefinitions(): PoolDefinitionsQueryBuilder;
  interface QueryCursorResult$2 {
      cursors: Cursors$2;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface PoolDefinitionsQueryResult extends QueryCursorResult$2 {
      items: PoolDefinition[];
      query: PoolDefinitionsQueryBuilder;
      next: () => Promise<PoolDefinitionsQueryResult>;
      prev: () => Promise<PoolDefinitionsQueryResult>;
  }
  interface PoolDefinitionsQueryBuilder {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => PoolDefinitionsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => PoolDefinitionsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<PoolDefinitionsQueryResult>;
  }
  /**
   * Assign a PoolDefinition to a Program Definition. PoolDefinition program definitions are used to group pool definitions together and provision them as a single unit.
   * PoolDefinitions assigned to a program definition cannot be provisioned individually.
   * @param poolDefinitionId - PoolDefinition to be added to the program definition
   * @internal
   * @documentationMaturity preview
   * @requiredField options.programDefinitionId
   * @requiredField poolDefinitionId
   * @adminMethod
   */
  function addPoolDefinitionToProgramDefinition(poolDefinitionId: string, options?: AddPoolDefinitionToProgramDefinitionOptions): Promise<AddPoolDefinitionToProgramDefinitionResponse>;
  interface AddPoolDefinitionToProgramDefinitionOptions {
      /** Program Definition to add the pool definition to */
      programDefinitionId: string;
      /** Defines how the update cascades to related Entitlements */
      cascade?: Cascade$1;
  }
  /**
   * Unassign a PoolDefinition from a Program Definition. PoolDefinition program definitions are used to group pool definitions together and provision them as a single unit.
   * PoolDefinitions assigned to a program definition cannot be provisioned individually.
   * @param poolDefinitionId - PoolDefinition to be removed from the program definition
   * @internal
   * @documentationMaturity preview
   * @requiredField options.programDefinitionId
   * @requiredField poolDefinitionId
   * @adminMethod
   */
  function removePoolDefinitionFromProgramDefinition(poolDefinitionId: string, options?: RemovePoolDefinitionFromProgramDefinitionOptions): Promise<RemovePoolDefinitionFromProgramDefinitionResponse>;
  interface RemovePoolDefinitionFromProgramDefinitionOptions {
      /** Program Definition to remove the pool_definition from */
      programDefinitionId: string;
      /** Defines how the update cascades to related Entitlements */
      cascade?: Cascade$1;
  }
  /**
   * Get a pool definition program definition by its id
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function findPoolDefinitionsByProgramDefinition(options?: FindPoolDefinitionsByProgramDefinitionOptions): Promise<FindPoolDefinitionsByProgramDefinitionResponse>;
  interface FindPoolDefinitionsByProgramDefinitionOptions {
      /** Program definition key */
      programDefinitionId?: string;
      /** Program definition namespace */
      namespace?: string;
  }
  
  type benefitProgramsV1PoolDefinition_universal_d_PoolDefinition = PoolDefinition;
  type benefitProgramsV1PoolDefinition_universal_d_Details = Details;
  type benefitProgramsV1PoolDefinition_universal_d_Benefit = Benefit;
  type benefitProgramsV1PoolDefinition_universal_d_PolicyExpression = PolicyExpression;
  type benefitProgramsV1PoolDefinition_universal_d_PolicyExpressionExpressionOneOf = PolicyExpressionExpressionOneOf;
  type benefitProgramsV1PoolDefinition_universal_d_PolicyExpressionType = PolicyExpressionType;
  const benefitProgramsV1PoolDefinition_universal_d_PolicyExpressionType: typeof PolicyExpressionType;
  type benefitProgramsV1PoolDefinition_universal_d_PolicyExpressionNot = PolicyExpressionNot;
  type benefitProgramsV1PoolDefinition_universal_d_PolicyExpressionAnd = PolicyExpressionAnd;
  type benefitProgramsV1PoolDefinition_universal_d_PolicyExpressionOr = PolicyExpressionOr;
  type benefitProgramsV1PoolDefinition_universal_d_Policy = Policy;
  type benefitProgramsV1PoolDefinition_universal_d_PolicyPolicyOneOf = PolicyPolicyOneOf;
  type benefitProgramsV1PoolDefinition_universal_d_Type = Type;
  const benefitProgramsV1PoolDefinition_universal_d_Type: typeof Type;
  type benefitProgramsV1PoolDefinition_universal_d_FixedIntervalPolicy = FixedIntervalPolicy;
  type benefitProgramsV1PoolDefinition_universal_d_WeekDay = WeekDay;
  const benefitProgramsV1PoolDefinition_universal_d_WeekDay: typeof WeekDay;
  type benefitProgramsV1PoolDefinition_universal_d_RateLimitedPolicy = RateLimitedPolicy;
  type benefitProgramsV1PoolDefinition_universal_d_RateLimitedPolicyPeriodOneOf = RateLimitedPolicyPeriodOneOf;
  type benefitProgramsV1PoolDefinition_universal_d_RateLimitedPolicyType = RateLimitedPolicyType;
  const benefitProgramsV1PoolDefinition_universal_d_RateLimitedPolicyType: typeof RateLimitedPolicyType;
  type benefitProgramsV1PoolDefinition_universal_d_CustomPolicy = CustomPolicy;
  type benefitProgramsV1PoolDefinition_universal_d_CreditConfiguration = CreditConfiguration;
  type benefitProgramsV1PoolDefinition_universal_d_RolloverConfiguration = RolloverConfiguration;
  type benefitProgramsV1PoolDefinition_universal_d_ExtendedFields = ExtendedFields;
  type benefitProgramsV1PoolDefinition_universal_d_CreatePoolDefinitionRequest = CreatePoolDefinitionRequest;
  type benefitProgramsV1PoolDefinition_universal_d_CreatePoolDefinitionResponse = CreatePoolDefinitionResponse;
  type benefitProgramsV1PoolDefinition_universal_d_UpdatePoolDefinitionRequest = UpdatePoolDefinitionRequest;
  type benefitProgramsV1PoolDefinition_universal_d_UpdatePoolDefinitionResponse = UpdatePoolDefinitionResponse;
  type benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionUpdateCascaded = PoolDefinitionUpdateCascaded;
  type benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionUpdatedProxySupport = PoolDefinitionUpdatedProxySupport;
  type benefitProgramsV1PoolDefinition_universal_d_DeletePoolDefinitionRequest = DeletePoolDefinitionRequest;
  type benefitProgramsV1PoolDefinition_universal_d_DeletePoolDefinitionResponse = DeletePoolDefinitionResponse;
  type benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionDeletedProxySupport = PoolDefinitionDeletedProxySupport;
  type benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionDeleteCascaded = PoolDefinitionDeleteCascaded;
  type benefitProgramsV1PoolDefinition_universal_d_BulkDeletePoolDefinitionRequest = BulkDeletePoolDefinitionRequest;
  type benefitProgramsV1PoolDefinition_universal_d_BulkDeletePoolDefinitionResponse = BulkDeletePoolDefinitionResponse;
  type benefitProgramsV1PoolDefinition_universal_d_BulkPoolDefinitionResult = BulkPoolDefinitionResult;
  type benefitProgramsV1PoolDefinition_universal_d_GetPoolDefinitionRequest = GetPoolDefinitionRequest;
  type benefitProgramsV1PoolDefinition_universal_d_GetPoolDefinitionResponse = GetPoolDefinitionResponse;
  type benefitProgramsV1PoolDefinition_universal_d_QueryPoolDefinitionsRequest = QueryPoolDefinitionsRequest;
  type benefitProgramsV1PoolDefinition_universal_d_QueryPoolDefinitionsResponse = QueryPoolDefinitionsResponse;
  type benefitProgramsV1PoolDefinition_universal_d_AddPoolDefinitionToProgramDefinitionRequest = AddPoolDefinitionToProgramDefinitionRequest;
  type benefitProgramsV1PoolDefinition_universal_d_AddPoolDefinitionToProgramDefinitionResponse = AddPoolDefinitionToProgramDefinitionResponse;
  type benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionAddedToProgramDefinition = PoolDefinitionAddedToProgramDefinition;
  type benefitProgramsV1PoolDefinition_universal_d_RemovePoolDefinitionFromProgramDefinitionRequest = RemovePoolDefinitionFromProgramDefinitionRequest;
  type benefitProgramsV1PoolDefinition_universal_d_RemovePoolDefinitionFromProgramDefinitionResponse = RemovePoolDefinitionFromProgramDefinitionResponse;
  type benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionRemovedFromProgramDefinition = PoolDefinitionRemovedFromProgramDefinition;
  type benefitProgramsV1PoolDefinition_universal_d_FindPoolDefinitionsByProgramDefinitionRequest = FindPoolDefinitionsByProgramDefinitionRequest;
  type benefitProgramsV1PoolDefinition_universal_d_FindPoolDefinitionsByProgramDefinitionResponse = FindPoolDefinitionsByProgramDefinitionResponse;
  const benefitProgramsV1PoolDefinition_universal_d_createPoolDefinition: typeof createPoolDefinition;
  type benefitProgramsV1PoolDefinition_universal_d_CreatePoolDefinitionOptions = CreatePoolDefinitionOptions;
  const benefitProgramsV1PoolDefinition_universal_d_updatePoolDefinition: typeof updatePoolDefinition;
  type benefitProgramsV1PoolDefinition_universal_d_UpdatePoolDefinition = UpdatePoolDefinition;
  type benefitProgramsV1PoolDefinition_universal_d_UpdatePoolDefinitionOptions = UpdatePoolDefinitionOptions;
  const benefitProgramsV1PoolDefinition_universal_d_deletePoolDefinition: typeof deletePoolDefinition;
  type benefitProgramsV1PoolDefinition_universal_d_DeletePoolDefinitionOptions = DeletePoolDefinitionOptions;
  const benefitProgramsV1PoolDefinition_universal_d_bulkDeletePoolDefinition: typeof bulkDeletePoolDefinition;
  type benefitProgramsV1PoolDefinition_universal_d_BulkDeletePoolDefinitionOptions = BulkDeletePoolDefinitionOptions;
  const benefitProgramsV1PoolDefinition_universal_d_getPoolDefinition: typeof getPoolDefinition;
  const benefitProgramsV1PoolDefinition_universal_d_queryPoolDefinitions: typeof queryPoolDefinitions;
  type benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionsQueryResult = PoolDefinitionsQueryResult;
  type benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionsQueryBuilder = PoolDefinitionsQueryBuilder;
  const benefitProgramsV1PoolDefinition_universal_d_addPoolDefinitionToProgramDefinition: typeof addPoolDefinitionToProgramDefinition;
  type benefitProgramsV1PoolDefinition_universal_d_AddPoolDefinitionToProgramDefinitionOptions = AddPoolDefinitionToProgramDefinitionOptions;
  const benefitProgramsV1PoolDefinition_universal_d_removePoolDefinitionFromProgramDefinition: typeof removePoolDefinitionFromProgramDefinition;
  type benefitProgramsV1PoolDefinition_universal_d_RemovePoolDefinitionFromProgramDefinitionOptions = RemovePoolDefinitionFromProgramDefinitionOptions;
  const benefitProgramsV1PoolDefinition_universal_d_findPoolDefinitionsByProgramDefinition: typeof findPoolDefinitionsByProgramDefinition;
  type benefitProgramsV1PoolDefinition_universal_d_FindPoolDefinitionsByProgramDefinitionOptions = FindPoolDefinitionsByProgramDefinitionOptions;
  namespace benefitProgramsV1PoolDefinition_universal_d {
    export {
      benefitProgramsV1PoolDefinition_universal_d_PoolDefinition as PoolDefinition,
      benefitProgramsV1PoolDefinition_universal_d_Details as Details,
      benefitProgramsV1PoolDefinition_universal_d_Benefit as Benefit,
      benefitProgramsV1PoolDefinition_universal_d_PolicyExpression as PolicyExpression,
      benefitProgramsV1PoolDefinition_universal_d_PolicyExpressionExpressionOneOf as PolicyExpressionExpressionOneOf,
      benefitProgramsV1PoolDefinition_universal_d_PolicyExpressionType as PolicyExpressionType,
      benefitProgramsV1PoolDefinition_universal_d_PolicyExpressionNot as PolicyExpressionNot,
      benefitProgramsV1PoolDefinition_universal_d_PolicyExpressionAnd as PolicyExpressionAnd,
      benefitProgramsV1PoolDefinition_universal_d_PolicyExpressionOr as PolicyExpressionOr,
      benefitProgramsV1PoolDefinition_universal_d_Policy as Policy,
      benefitProgramsV1PoolDefinition_universal_d_PolicyPolicyOneOf as PolicyPolicyOneOf,
      benefitProgramsV1PoolDefinition_universal_d_Type as Type,
      benefitProgramsV1PoolDefinition_universal_d_FixedIntervalPolicy as FixedIntervalPolicy,
      benefitProgramsV1PoolDefinition_universal_d_WeekDay as WeekDay,
      benefitProgramsV1PoolDefinition_universal_d_RateLimitedPolicy as RateLimitedPolicy,
      benefitProgramsV1PoolDefinition_universal_d_RateLimitedPolicyPeriodOneOf as RateLimitedPolicyPeriodOneOf,
      benefitProgramsV1PoolDefinition_universal_d_RateLimitedPolicyType as RateLimitedPolicyType,
      benefitProgramsV1PoolDefinition_universal_d_CustomPolicy as CustomPolicy,
      benefitProgramsV1PoolDefinition_universal_d_CreditConfiguration as CreditConfiguration,
      benefitProgramsV1PoolDefinition_universal_d_RolloverConfiguration as RolloverConfiguration,
      benefitProgramsV1PoolDefinition_universal_d_ExtendedFields as ExtendedFields,
      benefitProgramsV1PoolDefinition_universal_d_CreatePoolDefinitionRequest as CreatePoolDefinitionRequest,
      Cascade$1 as Cascade,
      benefitProgramsV1PoolDefinition_universal_d_CreatePoolDefinitionResponse as CreatePoolDefinitionResponse,
      benefitProgramsV1PoolDefinition_universal_d_UpdatePoolDefinitionRequest as UpdatePoolDefinitionRequest,
      benefitProgramsV1PoolDefinition_universal_d_UpdatePoolDefinitionResponse as UpdatePoolDefinitionResponse,
      benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionUpdateCascaded as PoolDefinitionUpdateCascaded,
      benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionUpdatedProxySupport as PoolDefinitionUpdatedProxySupport,
      benefitProgramsV1PoolDefinition_universal_d_DeletePoolDefinitionRequest as DeletePoolDefinitionRequest,
      benefitProgramsV1PoolDefinition_universal_d_DeletePoolDefinitionResponse as DeletePoolDefinitionResponse,
      benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionDeletedProxySupport as PoolDefinitionDeletedProxySupport,
      benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionDeleteCascaded as PoolDefinitionDeleteCascaded,
      benefitProgramsV1PoolDefinition_universal_d_BulkDeletePoolDefinitionRequest as BulkDeletePoolDefinitionRequest,
      benefitProgramsV1PoolDefinition_universal_d_BulkDeletePoolDefinitionResponse as BulkDeletePoolDefinitionResponse,
      benefitProgramsV1PoolDefinition_universal_d_BulkPoolDefinitionResult as BulkPoolDefinitionResult,
      ItemMetadata$1 as ItemMetadata,
      ApplicationError$1 as ApplicationError,
      BulkActionMetadata$1 as BulkActionMetadata,
      benefitProgramsV1PoolDefinition_universal_d_GetPoolDefinitionRequest as GetPoolDefinitionRequest,
      benefitProgramsV1PoolDefinition_universal_d_GetPoolDefinitionResponse as GetPoolDefinitionResponse,
      benefitProgramsV1PoolDefinition_universal_d_QueryPoolDefinitionsRequest as QueryPoolDefinitionsRequest,
      CursorQuery$2 as CursorQuery,
      CursorQueryPagingMethodOneOf$2 as CursorQueryPagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      CursorPaging$2 as CursorPaging,
      benefitProgramsV1PoolDefinition_universal_d_QueryPoolDefinitionsResponse as QueryPoolDefinitionsResponse,
      CursorPagingMetadata$2 as CursorPagingMetadata,
      Cursors$2 as Cursors,
      benefitProgramsV1PoolDefinition_universal_d_AddPoolDefinitionToProgramDefinitionRequest as AddPoolDefinitionToProgramDefinitionRequest,
      benefitProgramsV1PoolDefinition_universal_d_AddPoolDefinitionToProgramDefinitionResponse as AddPoolDefinitionToProgramDefinitionResponse,
      benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionAddedToProgramDefinition as PoolDefinitionAddedToProgramDefinition,
      benefitProgramsV1PoolDefinition_universal_d_RemovePoolDefinitionFromProgramDefinitionRequest as RemovePoolDefinitionFromProgramDefinitionRequest,
      benefitProgramsV1PoolDefinition_universal_d_RemovePoolDefinitionFromProgramDefinitionResponse as RemovePoolDefinitionFromProgramDefinitionResponse,
      benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionRemovedFromProgramDefinition as PoolDefinitionRemovedFromProgramDefinition,
      benefitProgramsV1PoolDefinition_universal_d_FindPoolDefinitionsByProgramDefinitionRequest as FindPoolDefinitionsByProgramDefinitionRequest,
      benefitProgramsV1PoolDefinition_universal_d_FindPoolDefinitionsByProgramDefinitionResponse as FindPoolDefinitionsByProgramDefinitionResponse,
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
      benefitProgramsV1PoolDefinition_universal_d_createPoolDefinition as createPoolDefinition,
      benefitProgramsV1PoolDefinition_universal_d_CreatePoolDefinitionOptions as CreatePoolDefinitionOptions,
      benefitProgramsV1PoolDefinition_universal_d_updatePoolDefinition as updatePoolDefinition,
      benefitProgramsV1PoolDefinition_universal_d_UpdatePoolDefinition as UpdatePoolDefinition,
      benefitProgramsV1PoolDefinition_universal_d_UpdatePoolDefinitionOptions as UpdatePoolDefinitionOptions,
      benefitProgramsV1PoolDefinition_universal_d_deletePoolDefinition as deletePoolDefinition,
      benefitProgramsV1PoolDefinition_universal_d_DeletePoolDefinitionOptions as DeletePoolDefinitionOptions,
      benefitProgramsV1PoolDefinition_universal_d_bulkDeletePoolDefinition as bulkDeletePoolDefinition,
      benefitProgramsV1PoolDefinition_universal_d_BulkDeletePoolDefinitionOptions as BulkDeletePoolDefinitionOptions,
      benefitProgramsV1PoolDefinition_universal_d_getPoolDefinition as getPoolDefinition,
      benefitProgramsV1PoolDefinition_universal_d_queryPoolDefinitions as queryPoolDefinitions,
      benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionsQueryResult as PoolDefinitionsQueryResult,
      benefitProgramsV1PoolDefinition_universal_d_PoolDefinitionsQueryBuilder as PoolDefinitionsQueryBuilder,
      benefitProgramsV1PoolDefinition_universal_d_addPoolDefinitionToProgramDefinition as addPoolDefinitionToProgramDefinition,
      benefitProgramsV1PoolDefinition_universal_d_AddPoolDefinitionToProgramDefinitionOptions as AddPoolDefinitionToProgramDefinitionOptions,
      benefitProgramsV1PoolDefinition_universal_d_removePoolDefinitionFromProgramDefinition as removePoolDefinitionFromProgramDefinition,
      benefitProgramsV1PoolDefinition_universal_d_RemovePoolDefinitionFromProgramDefinitionOptions as RemovePoolDefinitionFromProgramDefinitionOptions,
      benefitProgramsV1PoolDefinition_universal_d_findPoolDefinitionsByProgramDefinition as findPoolDefinitionsByProgramDefinition,
      benefitProgramsV1PoolDefinition_universal_d_FindPoolDefinitionsByProgramDefinitionOptions as FindPoolDefinitionsByProgramDefinitionOptions,
    };
  }
  
  /**
   * Represents anything that an external system exposes as an entitlement. It could be a specific event, a booking session, or even a physical good.
   * `category` is used to identify the type of the item and id is used to uniquely identify it within the category. The `name` is used for display purposes only.
   * For example, if the item is a blog post, then the category could be "post" and the id could be the post id.
   */
  interface Item$1 {
      /**
       * Item identifier
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this Item was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Item was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** External item identifier */
      externalId?: string;
      /** Item category. Discriminates between different types of items. E.g. posts, groups etc. */
      category?: string | null;
      /** Key of the set that this item is part of */
      itemSetId?: string;
      /** Display name of the item */
      displayName?: string | null;
  }
  interface AddItemToBenefitRequest {
      /** Item to be added */
      item: ItemInfo;
      /** Benefit that this item is added to */
      benefitReference?: BenefitReference;
      /** Defines how the update cascades to related pools */
      cascade: Cascade;
  }
  interface ItemInfo {
      /** External item identifier */
      externalId?: string;
      /** Item category. Discriminates between different types of items. E.g. posts, groups etc. */
      category?: string | null;
      /** Display name of the item */
      displayName?: string | null;
  }
  interface BenefitReference {
      /** Pool definition id that this item is added to */
      poolDefinitionId?: string;
      /** A reference to the benefit in the pool definition */
      benefitKey?: string;
  }
  enum Cascade {
      /** No cascade is performed. Can only be used when data is not being updated */
      UNKNOWN_CASCADE = "UNKNOWN_CASCADE",
      /** Scenario 1. Update to data cascades only to newly created entitlements */
      ON_PROVISION = "ON_PROVISION",
      /** Scenario 2. Update to data cascades to entitlements on new grants (e.g. when a new cycle is triggered) and new purchases */
      ON_GRANT = "ON_GRANT",
      /** Scenario 3. Update to data cascades to entitlements immediately */
      IMMEDIATELY = "IMMEDIATELY"
  }
  interface AddItemToBenefitResponse {
      /** Item that was added */
      item?: Item$1;
  }
  interface ItemsAddedToBenefit {
      /** Items that were added to the benefit */
      items?: Item$1[];
      /** Benefit that these items were added to */
      benefitReference?: BenefitReference;
      /** Id of the item set that these items were added to */
      itemSetId?: string;
  }
  interface BulkAddItemToBenefitRequest {
      /** Items to be added */
      items: ItemInfo[];
      /** Benefit that this item is added to */
      benefitReference?: BenefitReference;
      /** set to `true` if you wish to receive back the created items in the response */
      returnEntity?: boolean;
      /** Defines how the update cascades to related pools */
      cascade: Cascade;
  }
  interface BulkAddItemToBenefitResponse {
      /** Item that were added */
      results?: BulkItemResult[];
      /** Bulk action metadata */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkItemResult {
      /** Item metadata */
      itemMetadata?: ItemMetadata;
      /** Only exists if `returnEntity` was set to true in the request */
      item?: Item$1;
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
  interface BulkActionMetadata {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface RemoveItemFromBenefitRequest {
      /** Item id */
      itemId: string;
      /** Defines how the update cascades to related Entitlements */
      cascade: Cascade;
  }
  interface RemoveItemFromBenefitResponse {
  }
  interface ItemsRemovedFromBenefit {
      /** Items that were removed from the benefit */
      items?: Item$1[];
      /** Benefit that these items were removed from */
      benefitReference?: BenefitReference;
      /** Id of the item set that these items were removed from */
      itemSetId?: string;
  }
  interface UpdateItemRequest {
      /** Item to be updated, may be partial */
      item: Item$1;
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
      /** Defines how the update cascades to related Entitlements */
      cascade?: Cascade;
  }
  interface UpdateItemResponse {
      /** Item that was updated */
      item?: Item$1;
  }
  interface GetItemRequest {
      /** Id of the Item to retrieve */
      itemId: string;
  }
  interface GetItemResponse {
      /** The retrieved Item */
      item?: Item$1;
  }
  interface QueryItemsRequest {
      /** WQL expression */
      query?: CursorQuery$1;
  }
  interface CursorQuery$1 extends CursorQueryPagingMethodOneOf$1 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
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
      sort?: Sorting$1[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$1 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
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
  interface CursorPaging$1 {
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
  interface QueryItemsResponse {
      /** The retrieved Items */
      items?: Item$1[];
      /** Paging information */
      metadata?: CursorPagingMetadata$1;
  }
  interface CursorPagingMetadata$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$1;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
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
   * Adds the item to the benefit
   * @param item - Item to be added
   * @internal
   * @documentationMaturity preview
   * @requiredField item
   * @requiredField item.externalId
   * @requiredField options.benefitReference.benefitKey
   * @requiredField options.benefitReference.poolDefinitionId
   * @requiredField options.cascade
   * @adminMethod
   */
  function addItemToBenefit(item: ItemInfo, options?: AddItemToBenefitOptions): Promise<AddItemToBenefitResponse>;
  interface AddItemToBenefitOptions {
      /** Benefit that this item is added to */
      benefitReference?: BenefitReference;
      /** Defines how the update cascades to related pools */
      cascade: Cascade;
  }
  /**
   * Adds items to the benefit
   * @param items - Items to be added
   * @internal
   * @documentationMaturity preview
   * @requiredField items
   * @requiredField items.externalId
   * @requiredField options.benefitReference.benefitKey
   * @requiredField options.benefitReference.poolDefinitionId
   * @requiredField options.cascade
   * @adminMethod
   */
  function bulkAddItemToBenefit(items: ItemInfo[], options?: BulkAddItemToBenefitOptions): Promise<BulkAddItemToBenefitResponse>;
  interface BulkAddItemToBenefitOptions {
      /** Benefit that this item is added to */
      benefitReference?: BenefitReference;
      /** set to `true` if you wish to receive back the created items in the response */
      returnEntity?: boolean;
      /** Defines how the update cascades to related pools */
      cascade: Cascade;
  }
  /**
   * Removes the item from the benefit
   * @param itemId - Item id
   * @param cascade - Defines how the update cascades to related Entitlements
   * @internal
   * @documentationMaturity preview
   * @requiredField cascade
   * @requiredField itemId
   * @adminMethod
   */
  function removeItemFromBenefit(itemId: string, cascade: Cascade): Promise<void>;
  /**
   * Update the Item, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - Item identifier
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField item
   * @requiredField item.revision
   * @adminMethod
   * @returns Item that was updated
   */
  function updateItem(_id: string | null, item: UpdateItem, options?: UpdateItemOptions): Promise<Item$1>;
  interface UpdateItem {
      /**
       * Item identifier
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this Item was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Item was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** External item identifier */
      externalId?: string;
      /** Item category. Discriminates between different types of items. E.g. posts, groups etc. */
      category?: string | null;
      /** Key of the set that this item is part of */
      itemSetId?: string;
      /** Display name of the item */
      displayName?: string | null;
  }
  interface UpdateItemOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      fieldMask?: string[];
      /** Defines how the update cascades to related Entitlements */
      cascade?: Cascade;
  }
  /**
   * Get a Benefit Item by id
   * @param itemId - Id of the Item to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField itemId
   * @adminMethod
   * @returns The retrieved Item
   */
  function getItem(itemId: string): Promise<Item$1>;
  /**
   * Query Benefits using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryItems(): ItemsQueryBuilder;
  interface QueryCursorResult$1 {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ItemsQueryResult extends QueryCursorResult$1 {
      items: Item$1[];
      query: ItemsQueryBuilder;
      next: () => Promise<ItemsQueryResult>;
      prev: () => Promise<ItemsQueryResult>;
  }
  interface ItemsQueryBuilder {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ItemsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ItemsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ItemsQueryResult>;
  }
  
  type benefitProgramsV1PoolDefinitionItem_universal_d_AddItemToBenefitRequest = AddItemToBenefitRequest;
  type benefitProgramsV1PoolDefinitionItem_universal_d_ItemInfo = ItemInfo;
  type benefitProgramsV1PoolDefinitionItem_universal_d_BenefitReference = BenefitReference;
  type benefitProgramsV1PoolDefinitionItem_universal_d_Cascade = Cascade;
  const benefitProgramsV1PoolDefinitionItem_universal_d_Cascade: typeof Cascade;
  type benefitProgramsV1PoolDefinitionItem_universal_d_AddItemToBenefitResponse = AddItemToBenefitResponse;
  type benefitProgramsV1PoolDefinitionItem_universal_d_ItemsAddedToBenefit = ItemsAddedToBenefit;
  type benefitProgramsV1PoolDefinitionItem_universal_d_BulkAddItemToBenefitRequest = BulkAddItemToBenefitRequest;
  type benefitProgramsV1PoolDefinitionItem_universal_d_BulkAddItemToBenefitResponse = BulkAddItemToBenefitResponse;
  type benefitProgramsV1PoolDefinitionItem_universal_d_BulkItemResult = BulkItemResult;
  type benefitProgramsV1PoolDefinitionItem_universal_d_ItemMetadata = ItemMetadata;
  type benefitProgramsV1PoolDefinitionItem_universal_d_ApplicationError = ApplicationError;
  type benefitProgramsV1PoolDefinitionItem_universal_d_BulkActionMetadata = BulkActionMetadata;
  type benefitProgramsV1PoolDefinitionItem_universal_d_RemoveItemFromBenefitRequest = RemoveItemFromBenefitRequest;
  type benefitProgramsV1PoolDefinitionItem_universal_d_RemoveItemFromBenefitResponse = RemoveItemFromBenefitResponse;
  type benefitProgramsV1PoolDefinitionItem_universal_d_ItemsRemovedFromBenefit = ItemsRemovedFromBenefit;
  type benefitProgramsV1PoolDefinitionItem_universal_d_UpdateItemRequest = UpdateItemRequest;
  type benefitProgramsV1PoolDefinitionItem_universal_d_UpdateItemResponse = UpdateItemResponse;
  type benefitProgramsV1PoolDefinitionItem_universal_d_GetItemRequest = GetItemRequest;
  type benefitProgramsV1PoolDefinitionItem_universal_d_GetItemResponse = GetItemResponse;
  type benefitProgramsV1PoolDefinitionItem_universal_d_QueryItemsRequest = QueryItemsRequest;
  type benefitProgramsV1PoolDefinitionItem_universal_d_QueryItemsResponse = QueryItemsResponse;
  const benefitProgramsV1PoolDefinitionItem_universal_d_addItemToBenefit: typeof addItemToBenefit;
  type benefitProgramsV1PoolDefinitionItem_universal_d_AddItemToBenefitOptions = AddItemToBenefitOptions;
  const benefitProgramsV1PoolDefinitionItem_universal_d_bulkAddItemToBenefit: typeof bulkAddItemToBenefit;
  type benefitProgramsV1PoolDefinitionItem_universal_d_BulkAddItemToBenefitOptions = BulkAddItemToBenefitOptions;
  const benefitProgramsV1PoolDefinitionItem_universal_d_removeItemFromBenefit: typeof removeItemFromBenefit;
  const benefitProgramsV1PoolDefinitionItem_universal_d_updateItem: typeof updateItem;
  type benefitProgramsV1PoolDefinitionItem_universal_d_UpdateItem = UpdateItem;
  type benefitProgramsV1PoolDefinitionItem_universal_d_UpdateItemOptions = UpdateItemOptions;
  const benefitProgramsV1PoolDefinitionItem_universal_d_getItem: typeof getItem;
  const benefitProgramsV1PoolDefinitionItem_universal_d_queryItems: typeof queryItems;
  type benefitProgramsV1PoolDefinitionItem_universal_d_ItemsQueryResult = ItemsQueryResult;
  type benefitProgramsV1PoolDefinitionItem_universal_d_ItemsQueryBuilder = ItemsQueryBuilder;
  namespace benefitProgramsV1PoolDefinitionItem_universal_d {
    export {
      Item$1 as Item,
      benefitProgramsV1PoolDefinitionItem_universal_d_AddItemToBenefitRequest as AddItemToBenefitRequest,
      benefitProgramsV1PoolDefinitionItem_universal_d_ItemInfo as ItemInfo,
      benefitProgramsV1PoolDefinitionItem_universal_d_BenefitReference as BenefitReference,
      benefitProgramsV1PoolDefinitionItem_universal_d_Cascade as Cascade,
      benefitProgramsV1PoolDefinitionItem_universal_d_AddItemToBenefitResponse as AddItemToBenefitResponse,
      benefitProgramsV1PoolDefinitionItem_universal_d_ItemsAddedToBenefit as ItemsAddedToBenefit,
      benefitProgramsV1PoolDefinitionItem_universal_d_BulkAddItemToBenefitRequest as BulkAddItemToBenefitRequest,
      benefitProgramsV1PoolDefinitionItem_universal_d_BulkAddItemToBenefitResponse as BulkAddItemToBenefitResponse,
      benefitProgramsV1PoolDefinitionItem_universal_d_BulkItemResult as BulkItemResult,
      benefitProgramsV1PoolDefinitionItem_universal_d_ItemMetadata as ItemMetadata,
      benefitProgramsV1PoolDefinitionItem_universal_d_ApplicationError as ApplicationError,
      benefitProgramsV1PoolDefinitionItem_universal_d_BulkActionMetadata as BulkActionMetadata,
      benefitProgramsV1PoolDefinitionItem_universal_d_RemoveItemFromBenefitRequest as RemoveItemFromBenefitRequest,
      benefitProgramsV1PoolDefinitionItem_universal_d_RemoveItemFromBenefitResponse as RemoveItemFromBenefitResponse,
      benefitProgramsV1PoolDefinitionItem_universal_d_ItemsRemovedFromBenefit as ItemsRemovedFromBenefit,
      benefitProgramsV1PoolDefinitionItem_universal_d_UpdateItemRequest as UpdateItemRequest,
      benefitProgramsV1PoolDefinitionItem_universal_d_UpdateItemResponse as UpdateItemResponse,
      benefitProgramsV1PoolDefinitionItem_universal_d_GetItemRequest as GetItemRequest,
      benefitProgramsV1PoolDefinitionItem_universal_d_GetItemResponse as GetItemResponse,
      benefitProgramsV1PoolDefinitionItem_universal_d_QueryItemsRequest as QueryItemsRequest,
      CursorQuery$1 as CursorQuery,
      CursorQueryPagingMethodOneOf$1 as CursorQueryPagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      CursorPaging$1 as CursorPaging,
      benefitProgramsV1PoolDefinitionItem_universal_d_QueryItemsResponse as QueryItemsResponse,
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
      benefitProgramsV1PoolDefinitionItem_universal_d_addItemToBenefit as addItemToBenefit,
      benefitProgramsV1PoolDefinitionItem_universal_d_AddItemToBenefitOptions as AddItemToBenefitOptions,
      benefitProgramsV1PoolDefinitionItem_universal_d_bulkAddItemToBenefit as bulkAddItemToBenefit,
      benefitProgramsV1PoolDefinitionItem_universal_d_BulkAddItemToBenefitOptions as BulkAddItemToBenefitOptions,
      benefitProgramsV1PoolDefinitionItem_universal_d_removeItemFromBenefit as removeItemFromBenefit,
      benefitProgramsV1PoolDefinitionItem_universal_d_updateItem as updateItem,
      benefitProgramsV1PoolDefinitionItem_universal_d_UpdateItem as UpdateItem,
      benefitProgramsV1PoolDefinitionItem_universal_d_UpdateItemOptions as UpdateItemOptions,
      benefitProgramsV1PoolDefinitionItem_universal_d_getItem as getItem,
      benefitProgramsV1PoolDefinitionItem_universal_d_queryItems as queryItems,
      benefitProgramsV1PoolDefinitionItem_universal_d_ItemsQueryResult as ItemsQueryResult,
      benefitProgramsV1PoolDefinitionItem_universal_d_ItemsQueryBuilder as ItemsQueryBuilder,
    };
  }
  
  interface Transaction {
      /** @readonly */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time the transaction was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time the transaction was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * The pool from which the balance was changed
       * @readonly
       */
      pool?: PoolInfo;
      /**
       * Absolute amount to adjust the balance with. The balance change depends on the source and target balances
       * @readonly
       */
      amount?: string;
      /**
       * The source balance
       * @readonly
       */
      source?: BalanceType;
      /**
       * The target balance
       * @readonly
       */
      target?: BalanceType;
      /**
       * Generated idempotency key from the client when making a change to the balance.
       * @readonly
       */
      idempotencyKey?: string;
      /**
       * Related transaction id. For example - for a reservation cancellation transaction, the related transaction is the redemption itself.
       * @readonly
       */
      relatedTransactionId?: string | null;
      /**
       * The identity that owns this transaction
       * @readonly
       */
      beneficiary?: IdentificationData;
      /**
       * The identity that created this transaction
       * @readonly
       */
      instructingParty?: IdentificationData;
      /** status of the transaction */
      status?: TransactionStatus;
      /**
       * Additional details about the transaction
       * @readonly
       */
      details?: TransactionDetails;
  }
  interface PoolInfo {
      /**
       * The pool from which the balance was changed
       * @readonly
       */
      _id?: string;
      /**
       * PoolDefinition that this pool was created from
       * @readonly
       */
      poolDefinitionId?: string | null;
      /**
       * Program definition from which this entitlement was provisioned from
       * @readonly
       */
      programDefinitionId?: string | null;
      /**
       * Package that this entitlement belongs to
       * @readonly
       */
      programId?: string | null;
      /** The total amount of credits available for this pool */
      creditAmount?: string | null;
      /** The namespace of the pool */
      namespace?: string | null;
  }
  enum BalanceType {
      UNDEFINED = "UNDEFINED",
      /** Available balance */
      AVAILABLE = "AVAILABLE",
      /** Reserved balance */
      RESERVED = "RESERVED",
      /** External balance */
      EXTERNAL = "EXTERNAL"
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
      /**
       * @internal
       * @readonly
       */
      identityType?: IdentityType;
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
  enum IdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  enum TransactionStatus {
      UNDEFINED = "UNDEFINED",
      /** Transaction is pending. This is the initial status of the transaction. Once the balance is updated, the transaction will become COMPLETED. If the balance update fails, the transaction will become FAILED. */
      PENDING = "PENDING",
      /** Transaction is completed */
      COMPLETED = "COMPLETED",
      /** Transaction is failed */
      FAILED = "FAILED"
  }
  interface TransactionDetails {
      /**
       * The item for which the balance was changed, if applicable
       * @readonly
       */
      item?: Item;
      /** Item count, if applicable */
      itemCount?: number | null;
      /**
       * Represents the time the business performed the transaction
       * @readonly
       */
      effectiveDate?: Date;
      /**
       * Free format string
       * @readonly
       */
      reason?: string | null;
  }
  interface Item {
      /**
       * The item id
       * @readonly
       */
      _id?: string | null;
      /**
       * External item identifier
       * @readonly
       */
      externalId?: string | null;
      /**
       * Item category. Discriminates between different types of items. E.g. posts, groups etc.
       * @readonly
       */
      category?: string | null;
      /**
       * Key of the set that this item is part of
       * @readonly
       */
      itemSetId?: string | null;
      /**
       * Display name of the item
       * @readonly
       */
      displayName?: string | null;
  }
  interface CreateTransactionRequest {
      /** The transaction to create */
      transaction: Transaction;
  }
  interface CreateTransactionResponse {
      /** The created transaction */
      transaction?: Transaction;
  }
  interface UpdateTransactionRequest {
      /** The transaction to update */
      transaction: Transaction;
      /**
       * The field mask to apply
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateTransactionResponse {
      /** The updated transaction */
      transaction?: Transaction;
  }
  interface GetTransactionRequest {
      /** Id of the transaction to retrieve */
      transactionId: string;
  }
  interface GetTransactionResponse {
      /** The retrieved transaction */
      transaction?: Transaction;
  }
  interface QueryTransactionsRequest {
      /** WQL expression */
      query: CursorQuery;
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
  interface QueryTransactionsResponse {
      /** The retrieved transactions */
      transactions?: Transaction[];
      /** Paging information */
      metadata?: CursorPagingMetadata;
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
      identity?: WebhooksIdentificationData;
      /** Stringify payload. */
      data?: string;
  }
  interface WebhooksIdentificationData extends WebhooksIdentificationDataIdOneOf {
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
  interface WebhooksIdentificationDataIdOneOf {
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
   * Creates a transaction
   * @param transaction - The transaction to create
   * @internal
   * @documentationMaturity preview
   * @requiredField transaction
   * @requiredField transaction.amount
   * @requiredField transaction.beneficiary
   * @requiredField transaction.idempotencyKey
   * @requiredField transaction.pool
   * @requiredField transaction.pool._id
   * @requiredField transaction.source
   * @requiredField transaction.status
   * @requiredField transaction.target
   * @adminMethod
   * @returns The created transaction
   */
  function createTransaction(transaction: Transaction): Promise<Transaction>;
  /**
   * Updates a transaction
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField transaction
   * @requiredField transaction.revision
   * @adminMethod
   * @returns The updated transaction
   */
  function updateTransaction(_id: string | null, transaction: UpdateTransaction, options?: UpdateTransactionOptions): Promise<Transaction>;
  interface UpdateTransaction {
      /** @readonly */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time the transaction was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time the transaction was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * The pool from which the balance was changed
       * @readonly
       */
      pool?: PoolInfo;
      /**
       * Absolute amount to adjust the balance with. The balance change depends on the source and target balances
       * @readonly
       */
      amount?: string;
      /**
       * The source balance
       * @readonly
       */
      source?: BalanceType;
      /**
       * The target balance
       * @readonly
       */
      target?: BalanceType;
      /**
       * Generated idempotency key from the client when making a change to the balance.
       * @readonly
       */
      idempotencyKey?: string;
      /**
       * Related transaction id. For example - for a reservation cancellation transaction, the related transaction is the redemption itself.
       * @readonly
       */
      relatedTransactionId?: string | null;
      /**
       * The identity that owns this transaction
       * @readonly
       */
      beneficiary?: IdentificationData;
      /**
       * The identity that created this transaction
       * @readonly
       */
      instructingParty?: IdentificationData;
      /** status of the transaction */
      status?: TransactionStatus;
      /**
       * Additional details about the transaction
       * @readonly
       */
      details?: TransactionDetails;
  }
  interface UpdateTransactionOptions {
      /**
       * The field mask to apply
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Get a transaction by id
   * @param transactionId - Id of the transaction to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField transactionId
   * @adminMethod
   * @returns The retrieved transaction
   */
  function getTransaction(transactionId: string): Promise<Transaction>;
  /**
   * Query transactions using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryTransactions(): TransactionsQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface TransactionsQueryResult extends QueryCursorResult {
      items: Transaction[];
      query: TransactionsQueryBuilder;
      next: () => Promise<TransactionsQueryResult>;
      prev: () => Promise<TransactionsQueryResult>;
  }
  interface TransactionsQueryBuilder {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => TransactionsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => TransactionsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<TransactionsQueryResult>;
  }
  
  type benefitProgramsV1Transaction_universal_d_Transaction = Transaction;
  type benefitProgramsV1Transaction_universal_d_PoolInfo = PoolInfo;
  type benefitProgramsV1Transaction_universal_d_BalanceType = BalanceType;
  const benefitProgramsV1Transaction_universal_d_BalanceType: typeof BalanceType;
  type benefitProgramsV1Transaction_universal_d_IdentificationData = IdentificationData;
  type benefitProgramsV1Transaction_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type benefitProgramsV1Transaction_universal_d_IdentityType = IdentityType;
  const benefitProgramsV1Transaction_universal_d_IdentityType: typeof IdentityType;
  type benefitProgramsV1Transaction_universal_d_TransactionStatus = TransactionStatus;
  const benefitProgramsV1Transaction_universal_d_TransactionStatus: typeof TransactionStatus;
  type benefitProgramsV1Transaction_universal_d_TransactionDetails = TransactionDetails;
  type benefitProgramsV1Transaction_universal_d_Item = Item;
  type benefitProgramsV1Transaction_universal_d_CreateTransactionRequest = CreateTransactionRequest;
  type benefitProgramsV1Transaction_universal_d_CreateTransactionResponse = CreateTransactionResponse;
  type benefitProgramsV1Transaction_universal_d_UpdateTransactionRequest = UpdateTransactionRequest;
  type benefitProgramsV1Transaction_universal_d_UpdateTransactionResponse = UpdateTransactionResponse;
  type benefitProgramsV1Transaction_universal_d_GetTransactionRequest = GetTransactionRequest;
  type benefitProgramsV1Transaction_universal_d_GetTransactionResponse = GetTransactionResponse;
  type benefitProgramsV1Transaction_universal_d_QueryTransactionsRequest = QueryTransactionsRequest;
  type benefitProgramsV1Transaction_universal_d_CursorQuery = CursorQuery;
  type benefitProgramsV1Transaction_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type benefitProgramsV1Transaction_universal_d_Sorting = Sorting;
  type benefitProgramsV1Transaction_universal_d_SortOrder = SortOrder;
  const benefitProgramsV1Transaction_universal_d_SortOrder: typeof SortOrder;
  type benefitProgramsV1Transaction_universal_d_CursorPaging = CursorPaging;
  type benefitProgramsV1Transaction_universal_d_QueryTransactionsResponse = QueryTransactionsResponse;
  type benefitProgramsV1Transaction_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type benefitProgramsV1Transaction_universal_d_Cursors = Cursors;
  type benefitProgramsV1Transaction_universal_d_DomainEvent = DomainEvent;
  type benefitProgramsV1Transaction_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type benefitProgramsV1Transaction_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type benefitProgramsV1Transaction_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type benefitProgramsV1Transaction_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type benefitProgramsV1Transaction_universal_d_ActionEvent = ActionEvent;
  type benefitProgramsV1Transaction_universal_d_MessageEnvelope = MessageEnvelope;
  type benefitProgramsV1Transaction_universal_d_WebhooksIdentificationData = WebhooksIdentificationData;
  type benefitProgramsV1Transaction_universal_d_WebhooksIdentificationDataIdOneOf = WebhooksIdentificationDataIdOneOf;
  type benefitProgramsV1Transaction_universal_d_WebhookIdentityType = WebhookIdentityType;
  const benefitProgramsV1Transaction_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const benefitProgramsV1Transaction_universal_d_createTransaction: typeof createTransaction;
  const benefitProgramsV1Transaction_universal_d_updateTransaction: typeof updateTransaction;
  type benefitProgramsV1Transaction_universal_d_UpdateTransaction = UpdateTransaction;
  type benefitProgramsV1Transaction_universal_d_UpdateTransactionOptions = UpdateTransactionOptions;
  const benefitProgramsV1Transaction_universal_d_getTransaction: typeof getTransaction;
  const benefitProgramsV1Transaction_universal_d_queryTransactions: typeof queryTransactions;
  type benefitProgramsV1Transaction_universal_d_TransactionsQueryResult = TransactionsQueryResult;
  type benefitProgramsV1Transaction_universal_d_TransactionsQueryBuilder = TransactionsQueryBuilder;
  namespace benefitProgramsV1Transaction_universal_d {
    export {
      benefitProgramsV1Transaction_universal_d_Transaction as Transaction,
      benefitProgramsV1Transaction_universal_d_PoolInfo as PoolInfo,
      benefitProgramsV1Transaction_universal_d_BalanceType as BalanceType,
      benefitProgramsV1Transaction_universal_d_IdentificationData as IdentificationData,
      benefitProgramsV1Transaction_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      benefitProgramsV1Transaction_universal_d_IdentityType as IdentityType,
      benefitProgramsV1Transaction_universal_d_TransactionStatus as TransactionStatus,
      benefitProgramsV1Transaction_universal_d_TransactionDetails as TransactionDetails,
      benefitProgramsV1Transaction_universal_d_Item as Item,
      benefitProgramsV1Transaction_universal_d_CreateTransactionRequest as CreateTransactionRequest,
      benefitProgramsV1Transaction_universal_d_CreateTransactionResponse as CreateTransactionResponse,
      benefitProgramsV1Transaction_universal_d_UpdateTransactionRequest as UpdateTransactionRequest,
      benefitProgramsV1Transaction_universal_d_UpdateTransactionResponse as UpdateTransactionResponse,
      benefitProgramsV1Transaction_universal_d_GetTransactionRequest as GetTransactionRequest,
      benefitProgramsV1Transaction_universal_d_GetTransactionResponse as GetTransactionResponse,
      benefitProgramsV1Transaction_universal_d_QueryTransactionsRequest as QueryTransactionsRequest,
      benefitProgramsV1Transaction_universal_d_CursorQuery as CursorQuery,
      benefitProgramsV1Transaction_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      benefitProgramsV1Transaction_universal_d_Sorting as Sorting,
      benefitProgramsV1Transaction_universal_d_SortOrder as SortOrder,
      benefitProgramsV1Transaction_universal_d_CursorPaging as CursorPaging,
      benefitProgramsV1Transaction_universal_d_QueryTransactionsResponse as QueryTransactionsResponse,
      benefitProgramsV1Transaction_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      benefitProgramsV1Transaction_universal_d_Cursors as Cursors,
      benefitProgramsV1Transaction_universal_d_DomainEvent as DomainEvent,
      benefitProgramsV1Transaction_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      benefitProgramsV1Transaction_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      benefitProgramsV1Transaction_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      benefitProgramsV1Transaction_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      benefitProgramsV1Transaction_universal_d_ActionEvent as ActionEvent,
      benefitProgramsV1Transaction_universal_d_MessageEnvelope as MessageEnvelope,
      benefitProgramsV1Transaction_universal_d_WebhooksIdentificationData as WebhooksIdentificationData,
      benefitProgramsV1Transaction_universal_d_WebhooksIdentificationDataIdOneOf as WebhooksIdentificationDataIdOneOf,
      benefitProgramsV1Transaction_universal_d_WebhookIdentityType as WebhookIdentityType,
      benefitProgramsV1Transaction_universal_d_createTransaction as createTransaction,
      benefitProgramsV1Transaction_universal_d_updateTransaction as updateTransaction,
      benefitProgramsV1Transaction_universal_d_UpdateTransaction as UpdateTransaction,
      benefitProgramsV1Transaction_universal_d_UpdateTransactionOptions as UpdateTransactionOptions,
      benefitProgramsV1Transaction_universal_d_getTransaction as getTransaction,
      benefitProgramsV1Transaction_universal_d_queryTransactions as queryTransactions,
      benefitProgramsV1Transaction_universal_d_TransactionsQueryResult as TransactionsQueryResult,
      benefitProgramsV1Transaction_universal_d_TransactionsQueryBuilder as TransactionsQueryBuilder,
    };
  }
  
  export { benefitProgramsV1Balance_universal_d as balance, benefitProgramsV1Item_universal_d as item, benefitProgramsV1Pool_universal_d as pool, benefitProgramsV1PoolDefinition_universal_d as poolDefinition, benefitProgramsV1PoolDefinitionItem_universal_d as poolDefinitionItem, benefitProgramsV1Transaction_universal_d as transaction };
}
