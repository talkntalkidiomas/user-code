declare module "wix-rise.v2" {
  /** GiftCard is the main entity of GiftCardService that matches between code and credit balance */
  interface GiftCard$1 {
      /**
       * Gift Card unique id
       * @readonly
       */
      _id?: string | null;
      /** Gift Card code */
      code?: string | null;
      /** Gift Card initial value */
      initialValue?: string;
      /**
       * Gift Card balance
       * @readonly
       */
      balance?: string | null;
      /** Gift card source info */
      sourceInfo?: GiftCardSourceInfo$1;
      /**
       * Gift Card revision
       * @readonly
       */
      revision?: string | null;
      /** Gift Card currency */
      currency?: string | null;
      /** Gift Card expiration date */
      expirationDate?: Date;
      /**
       * Gift Card creation date
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Gift Card last update date
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Last Transaction id
       * @readonly
       */
      lastTransactionId?: string | null;
      /**
       * Gift Card disable date
       * @readonly
       */
      disableDate?: Date;
  }
  interface GiftCardSourceInfo$1 extends GiftCardSourceInfoGiftCardOptionsOneOf$1 {
      /** Gift Card purchase */
      orderOptions?: OrderOptions$1;
      /** Bulk Options (deprecated) */
      campaignOptions?: CampaignOptions$1;
      /** Migration Options (migrating from another gift card) */
      migrationOptions?: MigrationOptions$1;
      /** Store Credit Options */
      storeCreditOptions?: StoreCreditOptions$1;
      /** Workflow Options */
      workflowOptions?: WorkflowOptions$1;
      /** Bulk Options */
      bulkOptions?: BulkOptions$1;
      type?: GiftCardType$1;
      /** The Tenant ID that is associated with the gift card creation */
      sourceTenantId?: string | null;
      /** The Channel ID that is associated with the gift card creation */
      sourceChannelId?: string | null;
      /** The location ID that is associated with the action (supports POS cases) */
      sourceLocationId?: string | null;
      /** Details of the API client creating this Transaction */
      initiator?: ActionInitiator$2;
  }
  /** @oneof */
  interface GiftCardSourceInfoGiftCardOptionsOneOf$1 {
      /** Gift Card purchase */
      orderOptions?: OrderOptions$1;
      /** Bulk Options (deprecated) */
      campaignOptions?: CampaignOptions$1;
      /** Migration Options (migrating from another gift card) */
      migrationOptions?: MigrationOptions$1;
      /** Store Credit Options */
      storeCreditOptions?: StoreCreditOptions$1;
      /** Workflow Options */
      workflowOptions?: WorkflowOptions$1;
      /** Bulk Options */
      bulkOptions?: BulkOptions$1;
  }
  enum GiftCardType$1 {
      UNKNOWN_GIFT_CARD_TYPE = "UNKNOWN_GIFT_CARD_TYPE",
      ORDER = "ORDER",
      CAMPAIGN = "CAMPAIGN",
      MIGRATION = "MIGRATION",
      STORE_CREDIT = "STORE_CREDIT",
      MANUAL = "MANUAL",
      WORKFLOW = "WORKFLOW",
      BULK = "BULK"
  }
  interface OrderOptions$1 {
      orderId?: string;
      liability?: boolean | null;
  }
  interface CampaignOptions$1 {
      campaignId?: string;
      liability?: boolean | null;
  }
  interface MigrationOptions$1 {
      previousId?: string | null;
      liability?: boolean | null;
      note?: string | null;
  }
  interface StoreCreditOptions$1 {
      walletId?: string;
  }
  interface WorkflowOptions$1 {
      workflowId?: string;
  }
  interface BulkOptions$1 {
      bulkId?: string;
      liability?: boolean | null;
  }
  interface ActionInitiator$2 {
      type?: InitiatorType$2;
      _id?: string | null;
  }
  enum InitiatorType$2 {
      UNKNOWN_INITIATOR = "UNKNOWN_INITIATOR",
      APP = "APP",
      USER = "USER"
  }
  interface CreateGiftCardRequest {
      giftCard?: GiftCard$1;
  }
  interface CreateGiftCardResponse {
      giftCard?: GiftCard$1;
  }
  interface GiftCardInitialized {
      giftCard?: GiftCard$1;
  }
  interface GetGiftCardRequest {
      giftCardId: string;
  }
  interface GetGiftCardResponse {
      giftCard?: GiftCard$1;
  }
  interface GiftCardNotFoundDetails {
      /** Gift Card Id */
      giftCardId?: string;
  }
  interface GiftCardDisabledDetails {
      /** Gift Card Id */
      giftCardId?: string;
  }
  interface GiftCardExpiredDetails {
      /** Gift Card Id */
      giftCardId?: string;
  }
  interface UpdateGiftCardRequest {
      giftCardId: string;
      giftCard: GiftCard$1;
      /** @internal */
      fieldMask?: string[];
  }
  interface UpdateGiftCardResponse {
      giftCard?: GiftCard$1;
  }
  interface DisableGiftCardRequest {
      giftCardId: string;
  }
  interface DisableGiftCardResponse {
      giftCard?: GiftCard$1;
  }
  interface IncreaseBalanceRequest {
      transaction: Transaction;
  }
  /** Transaction is the secondary entity of GiftCardService that indicate an action over a Gift Card's balance */
  interface Transaction extends TransactionTransactionOptionsOneOf {
      /** Gift card Usage Options */
      redeemOptions?: RedeemOptions;
      /** Void transaction Options */
      voidOptions?: VoidOptions;
      /** Reward Options */
      rewardOptions?: RewardOptions;
      /** Wallet Action End Options */
      walletActionEndOptions?: WalletActionEndOptions;
      /** Bulk Options */
      campaignOptions?: CampaignOptions$1;
      /** Store credit refund Options */
      storeCreditRefundOptions?: StoreCreditRefundOptions;
      /** Migration Options */
      migrationOptions?: MigrationOptions$1;
      /** Payment method refund Options */
      paymentMethodRefundOptions?: PaymentMethodRefundOptions;
      /** Initial Gift Card Transaction Options */
      initialOptions?: InitialOptions;
      /** Wallet Action start Options */
      walletActionStartOptions?: WalletActionStartOptions;
      /** Bulk Options */
      bulkOptions?: BulkOptions$1;
      /**
       * Transaction unique id
       * @readonly
       */
      _id?: string | null;
      /**
       * Transaction creation date
       * @readonly
       */
      _createdDate?: Date;
      /** Transaction external Options */
      type?: TransactionType;
      /** Linked Gift Card unique id */
      giftCardId?: string;
      /** Transaction amount */
      amount?: string;
      /**
       * Indicates whether the transaction adds / subtracts from the GiftCard balance
       * @readonly
       */
      operationType?: OperationType;
      /** Idempotency key */
      idempotencyKey?: string | null;
      /**
       * Gift card Balance after this transaction operation
       * @readonly
       */
      updatedBalance?: string | null;
      /** The location ID that is associated with the action (supports POS cases) */
      sourceInfo?: TransactionSourceInfo;
      /** Indicates an external event that lead to the transaction */
      externalEvent?: ExternalEvent$1;
  }
  /** @oneof */
  interface TransactionTransactionOptionsOneOf {
      /** Gift card Usage Options */
      redeemOptions?: RedeemOptions;
      /** Void transaction Options */
      voidOptions?: VoidOptions;
      /** Reward Options */
      rewardOptions?: RewardOptions;
      /** Wallet Action End Options */
      walletActionEndOptions?: WalletActionEndOptions;
      /** Bulk Options */
      campaignOptions?: CampaignOptions$1;
      /** Store credit refund Options */
      storeCreditRefundOptions?: StoreCreditRefundOptions;
      /** Migration Options */
      migrationOptions?: MigrationOptions$1;
      /** Payment method refund Options */
      paymentMethodRefundOptions?: PaymentMethodRefundOptions;
      /** Initial Gift Card Transaction Options */
      initialOptions?: InitialOptions;
      /** Wallet Action start Options */
      walletActionStartOptions?: WalletActionStartOptions;
      /** Bulk Options */
      bulkOptions?: BulkOptions$1;
  }
  enum TransactionType {
      UNKNOWN_TRANSACTION_TYPE = "UNKNOWN_TRANSACTION_TYPE",
      REDEEM = "REDEEM",
      VOID = "VOID",
      REWARD = "REWARD",
      WALLET_ACTION_END = "WALLET_ACTION_END",
      MANUAL = "MANUAL",
      CAMPAIGN = "CAMPAIGN",
      STORE_CREDIT_REFUND = "STORE_CREDIT_REFUND",
      MIGRATION = "MIGRATION",
      INITIAL = "INITIAL",
      PAYMENT_METHOD_REFUND = "PAYMENT_METHOD_REFUND",
      WALLET_ACTION_START = "WALLET_ACTION_START",
      BULK = "BULK"
  }
  interface RedeemOptions {
      orderId?: string;
      liability?: boolean | null;
  }
  interface VoidOptions {
      transactionId?: string;
  }
  interface RewardOptions {
      walletActionId?: string;
      liability?: boolean | null;
  }
  interface WalletActionEndOptions {
      walletActionId?: string;
      transactionId?: string;
      liability?: boolean | null;
      reason?: WalletActionEndReason;
  }
  enum WalletActionEndReason {
      UNKNOWN_REASON = "UNKNOWN_REASON",
      CANCEL = "CANCEL",
      EXPIRATION = "EXPIRATION"
  }
  interface StoreCreditRefundOptions {
      walletActionId?: string;
      liability?: boolean | null;
  }
  interface PaymentMethodRefundOptions {
      orderId?: string;
      liability?: boolean | null;
  }
  interface InitialOptions {
      giftCardType?: GiftCardType$1;
  }
  interface WalletActionStartOptions {
      walletActionId?: string;
      liability?: boolean | null;
      context?: StoreCreditContext$1;
  }
  interface StoreCreditContext$1 {
      issuer?: StoreCreditIssuerType$1;
      /** Indicates a specific instance of the issuer (relevant for workflow/bulk) */
      issuerId?: string | null;
      note?: string | null;
  }
  enum StoreCreditIssuerType$1 {
      UNKNOWN_ISSUER = "UNKNOWN_ISSUER",
      WORKFLOW = "WORKFLOW",
      BULK = "BULK",
      MANUAL = "MANUAL",
      OTHER = "OTHER"
  }
  enum OperationType {
      ADD = "ADD",
      SUBTRACT = "SUBTRACT"
  }
  interface TransactionSourceInfo {
      /** Details of the API client creating this Transaction */
      initiator?: ActionInitiator$2;
      /** The Tenant ID that is associated with the action */
      sourceTenantId?: string | null;
      /** The Channel ID that is associated with the action */
      sourceChannelId?: string | null;
      /** The location ID that is associated with the action (supports POS cases) */
      sourceLocationId?: string | null;
  }
  interface ExternalEvent$1 {
      /** Event type indicator */
      name?: ExternalEventType$1;
      /** Short description or identifier of the event */
      description?: string | null;
  }
  enum ExternalEventType$1 {
      UNKNOWN_EVENT_TYPE = "UNKNOWN_EVENT_TYPE",
      ORDER = "ORDER",
      REFUND = "REFUND",
      REFERRAL = "REFERRAL",
      SIGN_UP = "SIGN_UP",
      MEMBERSHIP = "MEMBERSHIP",
      COMPENSATION = "COMPENSATION",
      OTHER = "OTHER"
  }
  interface IncreaseBalanceResponse {
      transaction?: Transaction;
      /** Gift card balance after transaction */
      balance?: string;
      /** Gift card Currency */
      currency?: string | null;
  }
  interface TransactionAdded {
      transaction?: Transaction;
  }
  interface IdempotencyKeyDetails {
      /** Gift Card Id */
      giftCardId?: string;
      /** Idempotency Key */
      idempotencyKey?: string;
  }
  interface DecreaseBalanceRequest {
      transaction: Transaction;
  }
  interface DecreaseBalanceResponse {
      transaction?: Transaction;
      /** Gift card balance after transaction */
      balance?: string;
      /** Gift card Currency */
      currency?: string | null;
  }
  interface InsufficientFundsDetails {
      /** Gift Card Id */
      giftCardId?: string;
      /** Gift Card Balance */
      balance?: string;
      /** Transaction amount */
      amount?: string;
  }
  interface VoidTransactionRequest {
      transactionId: string;
      sourceTenantId?: string | null;
      sourceChannelId?: string | null;
  }
  interface VoidTransactionResponse {
      transaction?: Transaction;
      /** Gift card balance after transaction */
      balance?: string;
      /** Gift card Currency */
      currency?: string | null;
  }
  interface VoidFailedDetails {
      /** Gift Card Id */
      transactionId?: string;
  }
  interface QueryGiftCardsRequest {
      /** WQL expression */
      query: QueryV2$2;
  }
  interface QueryV2$2 extends QueryV2PagingMethodOneOf$2 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$2;
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
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$2 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$2;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
  }
  interface Sorting$2 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$2;
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
  enum SortOrder$2 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging$2 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface CursorPaging$2 {
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
  interface QueryGiftCardsResponse {
      /** The retrieved GiftCards */
      giftCards?: GiftCard$1[];
      pagingMetadata?: PagingMetadataV2$2;
  }
  interface PagingMetadataV2$2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$2;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$2 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface BulkDeleteGiftCardsByFilterRequest {
      /** WQL expression */
      query?: QueryV2$2;
      /** MSID from which to delete the gift cards */
      metaSiteId?: string;
      /** Expected gift card amount to delete */
      expectedAmount?: number;
  }
  interface BulkDeleteGiftCardsByFilterResponse {
      jobId?: string;
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
  interface Empty$2 {
  }
  interface CreateMigrationGiftCardRequest {
      /** The gift card to create. */
      giftCard?: GiftCard$1;
  }
  interface CreateMigrationGiftCardResponse {
      /** The created gift card. */
      giftCard?: GiftCard$1;
  }
  interface CreateMigrationTransactionRequest {
      /** The transaction to create. */
      transaction?: Transaction;
  }
  interface CreateMigrationTransactionResponse {
      /** The created transaction. */
      transaction?: Transaction;
  }
  interface CountGiftCardsRequest {
      filter?: Record<string, any> | null;
  }
  interface CountGiftCardsResponse {
      count?: number;
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
   * Creates a new GiftCard
   * @public
   * @documentationMaturity preview
   * @requiredField options.giftCard.initialValue
   * @requiredField options.giftCard.sourceInfo.sourceChannelId
   * @requiredField options.giftCard.sourceInfo.sourceTenantId
   * @requiredField options.giftCard.sourceInfo.type
   * @adminMethod
   */
  function createGiftCard(options?: CreateGiftCardOptions): Promise<CreateGiftCardResponse>;
  interface CreateGiftCardOptions {
      giftCard?: GiftCard$1;
  }
  /**
   * Get a GiftCard by id
   * @public
   * @documentationMaturity preview
   * @requiredField giftCardId
   * @adminMethod
   */
  function getGiftCard(giftCardId: string): Promise<GiftCard$1>;
  /**
   * Update a GiftCard, supports partial update
   * Pass the latest `revision` for a successful update
   * @public
   * @documentationMaturity preview
   * @requiredField giftCard
   * @requiredField giftCard.revision
   * @requiredField giftCardId
   * @adminMethod
   */
  function updateGiftCard(giftCardId: string, giftCard: GiftCard$1, options?: UpdateGiftCardOptions): Promise<GiftCard$1>;
  interface UpdateGiftCardOptions {
      /** @internal */
      fieldMask?: string[];
  }
  /**
   * Disable a GiftCard
   * @public
   * @documentationMaturity preview
   * @requiredField giftCardId
   * @adminMethod
   */
  function disableGiftCard(giftCardId: string): Promise<DisableGiftCardResponse>;
  /**
   * Adds to the GiftCard balance and creates a balance Transaction.
   * @param giftCardId - Linked Gift Card unique id
   * @public
   * @documentationMaturity preview
   * @requiredField giftCardId
   * @requiredField transaction
   * @requiredField transaction.amount
   * @requiredField transaction.type
   * @adminMethod
   */
  function increaseBalance(giftCardId: string, transaction: IncreaseBalanceTransaction): Promise<IncreaseBalanceResponse>;
  interface IncreaseBalanceTransaction {
      /** Gift card Usage Options */
      redeemOptions?: RedeemOptions;
      /** Void transaction Options */
      voidOptions?: VoidOptions;
      /** Reward Options */
      rewardOptions?: RewardOptions;
      /** Wallet Action End Options */
      walletActionEndOptions?: WalletActionEndOptions;
      /** Bulk Options */
      campaignOptions?: CampaignOptions$1;
      /** Store credit refund Options */
      storeCreditRefundOptions?: StoreCreditRefundOptions;
      /** Migration Options */
      migrationOptions?: MigrationOptions$1;
      /** Payment method refund Options */
      paymentMethodRefundOptions?: PaymentMethodRefundOptions;
      /** Initial Gift Card Transaction Options */
      initialOptions?: InitialOptions;
      /** Wallet Action start Options */
      walletActionStartOptions?: WalletActionStartOptions;
      /** Bulk Options */
      bulkOptions?: BulkOptions$1;
      /**
       * Transaction unique id
       * @readonly
       */
      _id?: string | null;
      /**
       * Transaction creation date
       * @readonly
       */
      _createdDate?: Date;
      /** Transaction external Options */
      type?: TransactionType;
      /** Transaction amount */
      amount?: string;
      /**
       * Indicates whether the transaction adds / subtracts from the GiftCard balance
       * @readonly
       */
      operationType?: OperationType;
      /** Idempotency key */
      idempotencyKey?: string | null;
      /**
       * Gift card Balance after this transaction operation
       * @readonly
       */
      updatedBalance?: string | null;
      /** The location ID that is associated with the action (supports POS cases) */
      sourceInfo?: TransactionSourceInfo;
      /** Indicates an external event that lead to the transaction */
      externalEvent?: ExternalEvent$1;
  }
  /**
   * Subtracts from the GiftCard balance and creates a balance Transaction.
   * @param giftCardId - Linked Gift Card unique id
   * @public
   * @documentationMaturity preview
   * @requiredField giftCardId
   * @requiredField transaction
   * @requiredField transaction.amount
   * @requiredField transaction.type
   * @adminMethod
   */
  function decreaseBalance(giftCardId: string, transaction: DecreaseBalanceTransaction): Promise<DecreaseBalanceResponse>;
  interface DecreaseBalanceTransaction {
      /** Gift card Usage Options */
      redeemOptions?: RedeemOptions;
      /** Void transaction Options */
      voidOptions?: VoidOptions;
      /** Reward Options */
      rewardOptions?: RewardOptions;
      /** Wallet Action End Options */
      walletActionEndOptions?: WalletActionEndOptions;
      /** Bulk Options */
      campaignOptions?: CampaignOptions$1;
      /** Store credit refund Options */
      storeCreditRefundOptions?: StoreCreditRefundOptions;
      /** Migration Options */
      migrationOptions?: MigrationOptions$1;
      /** Payment method refund Options */
      paymentMethodRefundOptions?: PaymentMethodRefundOptions;
      /** Initial Gift Card Transaction Options */
      initialOptions?: InitialOptions;
      /** Wallet Action start Options */
      walletActionStartOptions?: WalletActionStartOptions;
      /** Bulk Options */
      bulkOptions?: BulkOptions$1;
      /**
       * Transaction unique id
       * @readonly
       */
      _id?: string | null;
      /**
       * Transaction creation date
       * @readonly
       */
      _createdDate?: Date;
      /** Transaction external Options */
      type?: TransactionType;
      /** Transaction amount */
      amount?: string;
      /**
       * Indicates whether the transaction adds / subtracts from the GiftCard balance
       * @readonly
       */
      operationType?: OperationType;
      /** Idempotency key */
      idempotencyKey?: string | null;
      /**
       * Gift card Balance after this transaction operation
       * @readonly
       */
      updatedBalance?: string | null;
      /** The location ID that is associated with the action (supports POS cases) */
      sourceInfo?: TransactionSourceInfo;
      /** Indicates an external event that lead to the transaction */
      externalEvent?: ExternalEvent$1;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField transactionId
   * @adminMethod
   */
  function voidTransaction(transactionId: string, options?: VoidTransactionOptions): Promise<VoidTransactionResponse>;
  interface VoidTransactionOptions {
      sourceTenantId?: string | null;
      sourceChannelId?: string | null;
  }
  /**
   * Query GiftCards using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryGiftCards(): GiftCardsQueryBuilder;
  interface QueryOffsetResult$2 {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface GiftCardsQueryResult extends QueryOffsetResult$2 {
      items: GiftCard$1[];
      query: GiftCardsQueryBuilder;
      next: () => Promise<GiftCardsQueryResult>;
      prev: () => Promise<GiftCardsQueryResult>;
  }
  interface GiftCardsQueryBuilder {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => GiftCardsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => GiftCardsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<GiftCardsQueryResult>;
  }
  /** @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function countGiftCards(options?: CountGiftCardsOptions): Promise<CountGiftCardsResponse>;
  interface CountGiftCardsOptions {
      filter?: Record<string, any> | null;
  }
  
  type riseV1GiftCard_universal_d_CreateGiftCardRequest = CreateGiftCardRequest;
  type riseV1GiftCard_universal_d_CreateGiftCardResponse = CreateGiftCardResponse;
  type riseV1GiftCard_universal_d_GiftCardInitialized = GiftCardInitialized;
  type riseV1GiftCard_universal_d_GetGiftCardRequest = GetGiftCardRequest;
  type riseV1GiftCard_universal_d_GetGiftCardResponse = GetGiftCardResponse;
  type riseV1GiftCard_universal_d_GiftCardNotFoundDetails = GiftCardNotFoundDetails;
  type riseV1GiftCard_universal_d_GiftCardDisabledDetails = GiftCardDisabledDetails;
  type riseV1GiftCard_universal_d_GiftCardExpiredDetails = GiftCardExpiredDetails;
  type riseV1GiftCard_universal_d_UpdateGiftCardRequest = UpdateGiftCardRequest;
  type riseV1GiftCard_universal_d_UpdateGiftCardResponse = UpdateGiftCardResponse;
  type riseV1GiftCard_universal_d_DisableGiftCardRequest = DisableGiftCardRequest;
  type riseV1GiftCard_universal_d_DisableGiftCardResponse = DisableGiftCardResponse;
  type riseV1GiftCard_universal_d_IncreaseBalanceRequest = IncreaseBalanceRequest;
  type riseV1GiftCard_universal_d_Transaction = Transaction;
  type riseV1GiftCard_universal_d_TransactionTransactionOptionsOneOf = TransactionTransactionOptionsOneOf;
  type riseV1GiftCard_universal_d_TransactionType = TransactionType;
  const riseV1GiftCard_universal_d_TransactionType: typeof TransactionType;
  type riseV1GiftCard_universal_d_RedeemOptions = RedeemOptions;
  type riseV1GiftCard_universal_d_VoidOptions = VoidOptions;
  type riseV1GiftCard_universal_d_RewardOptions = RewardOptions;
  type riseV1GiftCard_universal_d_WalletActionEndOptions = WalletActionEndOptions;
  type riseV1GiftCard_universal_d_WalletActionEndReason = WalletActionEndReason;
  const riseV1GiftCard_universal_d_WalletActionEndReason: typeof WalletActionEndReason;
  type riseV1GiftCard_universal_d_StoreCreditRefundOptions = StoreCreditRefundOptions;
  type riseV1GiftCard_universal_d_PaymentMethodRefundOptions = PaymentMethodRefundOptions;
  type riseV1GiftCard_universal_d_InitialOptions = InitialOptions;
  type riseV1GiftCard_universal_d_WalletActionStartOptions = WalletActionStartOptions;
  type riseV1GiftCard_universal_d_OperationType = OperationType;
  const riseV1GiftCard_universal_d_OperationType: typeof OperationType;
  type riseV1GiftCard_universal_d_TransactionSourceInfo = TransactionSourceInfo;
  type riseV1GiftCard_universal_d_IncreaseBalanceResponse = IncreaseBalanceResponse;
  type riseV1GiftCard_universal_d_TransactionAdded = TransactionAdded;
  type riseV1GiftCard_universal_d_IdempotencyKeyDetails = IdempotencyKeyDetails;
  type riseV1GiftCard_universal_d_DecreaseBalanceRequest = DecreaseBalanceRequest;
  type riseV1GiftCard_universal_d_DecreaseBalanceResponse = DecreaseBalanceResponse;
  type riseV1GiftCard_universal_d_InsufficientFundsDetails = InsufficientFundsDetails;
  type riseV1GiftCard_universal_d_VoidTransactionRequest = VoidTransactionRequest;
  type riseV1GiftCard_universal_d_VoidTransactionResponse = VoidTransactionResponse;
  type riseV1GiftCard_universal_d_VoidFailedDetails = VoidFailedDetails;
  type riseV1GiftCard_universal_d_QueryGiftCardsRequest = QueryGiftCardsRequest;
  type riseV1GiftCard_universal_d_QueryGiftCardsResponse = QueryGiftCardsResponse;
  type riseV1GiftCard_universal_d_BulkDeleteGiftCardsByFilterRequest = BulkDeleteGiftCardsByFilterRequest;
  type riseV1GiftCard_universal_d_BulkDeleteGiftCardsByFilterResponse = BulkDeleteGiftCardsByFilterResponse;
  type riseV1GiftCard_universal_d_CreateMigrationGiftCardRequest = CreateMigrationGiftCardRequest;
  type riseV1GiftCard_universal_d_CreateMigrationGiftCardResponse = CreateMigrationGiftCardResponse;
  type riseV1GiftCard_universal_d_CreateMigrationTransactionRequest = CreateMigrationTransactionRequest;
  type riseV1GiftCard_universal_d_CreateMigrationTransactionResponse = CreateMigrationTransactionResponse;
  type riseV1GiftCard_universal_d_CountGiftCardsRequest = CountGiftCardsRequest;
  type riseV1GiftCard_universal_d_CountGiftCardsResponse = CountGiftCardsResponse;
  const riseV1GiftCard_universal_d_createGiftCard: typeof createGiftCard;
  type riseV1GiftCard_universal_d_CreateGiftCardOptions = CreateGiftCardOptions;
  const riseV1GiftCard_universal_d_getGiftCard: typeof getGiftCard;
  const riseV1GiftCard_universal_d_updateGiftCard: typeof updateGiftCard;
  type riseV1GiftCard_universal_d_UpdateGiftCardOptions = UpdateGiftCardOptions;
  const riseV1GiftCard_universal_d_disableGiftCard: typeof disableGiftCard;
  const riseV1GiftCard_universal_d_increaseBalance: typeof increaseBalance;
  type riseV1GiftCard_universal_d_IncreaseBalanceTransaction = IncreaseBalanceTransaction;
  const riseV1GiftCard_universal_d_decreaseBalance: typeof decreaseBalance;
  type riseV1GiftCard_universal_d_DecreaseBalanceTransaction = DecreaseBalanceTransaction;
  const riseV1GiftCard_universal_d_voidTransaction: typeof voidTransaction;
  type riseV1GiftCard_universal_d_VoidTransactionOptions = VoidTransactionOptions;
  const riseV1GiftCard_universal_d_queryGiftCards: typeof queryGiftCards;
  type riseV1GiftCard_universal_d_GiftCardsQueryResult = GiftCardsQueryResult;
  type riseV1GiftCard_universal_d_GiftCardsQueryBuilder = GiftCardsQueryBuilder;
  const riseV1GiftCard_universal_d_countGiftCards: typeof countGiftCards;
  type riseV1GiftCard_universal_d_CountGiftCardsOptions = CountGiftCardsOptions;
  namespace riseV1GiftCard_universal_d {
    export {
      GiftCard$1 as GiftCard,
      GiftCardSourceInfo$1 as GiftCardSourceInfo,
      GiftCardSourceInfoGiftCardOptionsOneOf$1 as GiftCardSourceInfoGiftCardOptionsOneOf,
      GiftCardType$1 as GiftCardType,
      OrderOptions$1 as OrderOptions,
      CampaignOptions$1 as CampaignOptions,
      MigrationOptions$1 as MigrationOptions,
      StoreCreditOptions$1 as StoreCreditOptions,
      WorkflowOptions$1 as WorkflowOptions,
      BulkOptions$1 as BulkOptions,
      ActionInitiator$2 as ActionInitiator,
      InitiatorType$2 as InitiatorType,
      riseV1GiftCard_universal_d_CreateGiftCardRequest as CreateGiftCardRequest,
      riseV1GiftCard_universal_d_CreateGiftCardResponse as CreateGiftCardResponse,
      riseV1GiftCard_universal_d_GiftCardInitialized as GiftCardInitialized,
      riseV1GiftCard_universal_d_GetGiftCardRequest as GetGiftCardRequest,
      riseV1GiftCard_universal_d_GetGiftCardResponse as GetGiftCardResponse,
      riseV1GiftCard_universal_d_GiftCardNotFoundDetails as GiftCardNotFoundDetails,
      riseV1GiftCard_universal_d_GiftCardDisabledDetails as GiftCardDisabledDetails,
      riseV1GiftCard_universal_d_GiftCardExpiredDetails as GiftCardExpiredDetails,
      riseV1GiftCard_universal_d_UpdateGiftCardRequest as UpdateGiftCardRequest,
      riseV1GiftCard_universal_d_UpdateGiftCardResponse as UpdateGiftCardResponse,
      riseV1GiftCard_universal_d_DisableGiftCardRequest as DisableGiftCardRequest,
      riseV1GiftCard_universal_d_DisableGiftCardResponse as DisableGiftCardResponse,
      riseV1GiftCard_universal_d_IncreaseBalanceRequest as IncreaseBalanceRequest,
      riseV1GiftCard_universal_d_Transaction as Transaction,
      riseV1GiftCard_universal_d_TransactionTransactionOptionsOneOf as TransactionTransactionOptionsOneOf,
      riseV1GiftCard_universal_d_TransactionType as TransactionType,
      riseV1GiftCard_universal_d_RedeemOptions as RedeemOptions,
      riseV1GiftCard_universal_d_VoidOptions as VoidOptions,
      riseV1GiftCard_universal_d_RewardOptions as RewardOptions,
      riseV1GiftCard_universal_d_WalletActionEndOptions as WalletActionEndOptions,
      riseV1GiftCard_universal_d_WalletActionEndReason as WalletActionEndReason,
      riseV1GiftCard_universal_d_StoreCreditRefundOptions as StoreCreditRefundOptions,
      riseV1GiftCard_universal_d_PaymentMethodRefundOptions as PaymentMethodRefundOptions,
      riseV1GiftCard_universal_d_InitialOptions as InitialOptions,
      riseV1GiftCard_universal_d_WalletActionStartOptions as WalletActionStartOptions,
      StoreCreditContext$1 as StoreCreditContext,
      StoreCreditIssuerType$1 as StoreCreditIssuerType,
      riseV1GiftCard_universal_d_OperationType as OperationType,
      riseV1GiftCard_universal_d_TransactionSourceInfo as TransactionSourceInfo,
      ExternalEvent$1 as ExternalEvent,
      ExternalEventType$1 as ExternalEventType,
      riseV1GiftCard_universal_d_IncreaseBalanceResponse as IncreaseBalanceResponse,
      riseV1GiftCard_universal_d_TransactionAdded as TransactionAdded,
      riseV1GiftCard_universal_d_IdempotencyKeyDetails as IdempotencyKeyDetails,
      riseV1GiftCard_universal_d_DecreaseBalanceRequest as DecreaseBalanceRequest,
      riseV1GiftCard_universal_d_DecreaseBalanceResponse as DecreaseBalanceResponse,
      riseV1GiftCard_universal_d_InsufficientFundsDetails as InsufficientFundsDetails,
      riseV1GiftCard_universal_d_VoidTransactionRequest as VoidTransactionRequest,
      riseV1GiftCard_universal_d_VoidTransactionResponse as VoidTransactionResponse,
      riseV1GiftCard_universal_d_VoidFailedDetails as VoidFailedDetails,
      riseV1GiftCard_universal_d_QueryGiftCardsRequest as QueryGiftCardsRequest,
      QueryV2$2 as QueryV2,
      QueryV2PagingMethodOneOf$2 as QueryV2PagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      Paging$2 as Paging,
      CursorPaging$2 as CursorPaging,
      riseV1GiftCard_universal_d_QueryGiftCardsResponse as QueryGiftCardsResponse,
      PagingMetadataV2$2 as PagingMetadataV2,
      Cursors$2 as Cursors,
      riseV1GiftCard_universal_d_BulkDeleteGiftCardsByFilterRequest as BulkDeleteGiftCardsByFilterRequest,
      riseV1GiftCard_universal_d_BulkDeleteGiftCardsByFilterResponse as BulkDeleteGiftCardsByFilterResponse,
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      Empty$2 as Empty,
      riseV1GiftCard_universal_d_CreateMigrationGiftCardRequest as CreateMigrationGiftCardRequest,
      riseV1GiftCard_universal_d_CreateMigrationGiftCardResponse as CreateMigrationGiftCardResponse,
      riseV1GiftCard_universal_d_CreateMigrationTransactionRequest as CreateMigrationTransactionRequest,
      riseV1GiftCard_universal_d_CreateMigrationTransactionResponse as CreateMigrationTransactionResponse,
      riseV1GiftCard_universal_d_CountGiftCardsRequest as CountGiftCardsRequest,
      riseV1GiftCard_universal_d_CountGiftCardsResponse as CountGiftCardsResponse,
      MessageEnvelope$2 as MessageEnvelope,
      IdentificationData$2 as IdentificationData,
      IdentificationDataIdOneOf$2 as IdentificationDataIdOneOf,
      WebhookIdentityType$2 as WebhookIdentityType,
      riseV1GiftCard_universal_d_createGiftCard as createGiftCard,
      riseV1GiftCard_universal_d_CreateGiftCardOptions as CreateGiftCardOptions,
      riseV1GiftCard_universal_d_getGiftCard as getGiftCard,
      riseV1GiftCard_universal_d_updateGiftCard as updateGiftCard,
      riseV1GiftCard_universal_d_UpdateGiftCardOptions as UpdateGiftCardOptions,
      riseV1GiftCard_universal_d_disableGiftCard as disableGiftCard,
      riseV1GiftCard_universal_d_increaseBalance as increaseBalance,
      riseV1GiftCard_universal_d_IncreaseBalanceTransaction as IncreaseBalanceTransaction,
      riseV1GiftCard_universal_d_decreaseBalance as decreaseBalance,
      riseV1GiftCard_universal_d_DecreaseBalanceTransaction as DecreaseBalanceTransaction,
      riseV1GiftCard_universal_d_voidTransaction as voidTransaction,
      riseV1GiftCard_universal_d_VoidTransactionOptions as VoidTransactionOptions,
      riseV1GiftCard_universal_d_queryGiftCards as queryGiftCards,
      riseV1GiftCard_universal_d_GiftCardsQueryResult as GiftCardsQueryResult,
      riseV1GiftCard_universal_d_GiftCardsQueryBuilder as GiftCardsQueryBuilder,
      riseV1GiftCard_universal_d_countGiftCards as countGiftCards,
      riseV1GiftCard_universal_d_CountGiftCardsOptions as CountGiftCardsOptions,
    };
  }
  
  /** Wallet is the main entity of WalletService that contains GiftCard and customer references */
  interface Wallet {
      /**
       * Wallet ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the Gift Card associated with this Wallet
       * @readonly
       */
      giftCardId?: string;
      /**
       * Customer references
       * @readonly
       */
      customerReferences?: CustomerReference[];
      /**
       * Represents the time this Wallet was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Wallet was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Gift Card info
       * @readonly
       */
      giftCardInfo?: GiftCardInfo;
      /**
       * ID of primary customer reference
       * @internal
       * @readonly
       */
      primaryCustomerReferenceId?: string;
  }
  interface CustomerReference {
      /** Source channel, i.e. Shopify */
      sourceChannelId?: string;
      /** Tenant ID in Source, i.e. shop ID */
      sourceTenantId?: string;
      /** Customer ID in Source */
      sourceCustomerId?: string;
      /** First name */
      firstName?: string | null;
      /** Last name */
      lastName?: string | null;
      /** Phone */
      phone?: string | null;
      /** Email */
      email?: string;
      /**
       * Internal id
       * @internal
       * @readonly
       */
      _id?: string | null;
  }
  interface GiftCardInfo {
      /**
       * Gift Card Code
       * @readonly
       */
      code?: string;
      /**
       * Current Gift Card Balance
       * @readonly
       */
      balance?: string;
      /**
       * Gift Card Currency
       * @readonly
       */
      currency?: string | null;
  }
  interface CreateWalletRequest {
      /** Customer reference */
      customerReference: CustomerReference;
      /** Initial amount */
      initialValue?: string | null;
      /** Currency */
      currency?: string | null;
  }
  interface CreateWalletResponse {
      /** wallet */
      wallet?: Wallet;
      /** walletAction */
      walletActionId?: string | null;
  }
  interface CreateCustomerReferenceRequest {
      /** Customer reference */
      customerReference: CustomerReference;
  }
  interface CreateCustomerReferenceResponse {
      /** Customer reference */
      customerReference?: CustomerReference;
  }
  interface GetCustomerReferenceRequest {
      /** Query */
      query: CustomerReferenceQuery;
  }
  interface CustomerReferenceQuery {
      /** CustomerReference source */
      customerReferenceSource?: Source;
  }
  interface Source {
      /** Source channel, i.e. Shopify */
      sourceChannelId?: string;
      /** Tenant ID in Source, i.e. shop ID */
      sourceTenantId?: string;
      /** Customer ID in Source */
      sourceCustomerId?: string;
  }
  interface GetCustomerReferenceResponse {
      /** Customer reference */
      customerReference?: CustomerReference;
  }
  interface UpdateCustomerReferenceRequest {
      /** PII information of CustomerReference will be updated. CustomerReference is identified by ID or source. */
      customerReference: CustomerReference;
  }
  interface UpdateCustomerReferenceResponse {
      /** Customer reference */
      customerReference?: CustomerReference;
  }
  interface DeleteCustomerReferenceRequest {
      /** Query */
      query: CustomerReferenceQuery;
  }
  interface DeleteCustomerReferenceResponse {
  }
  interface GetWalletRequest {
      /** Query */
      query: WalletQuery;
  }
  interface WalletQuery extends WalletQueryByOneOf {
      /** Wallet id */
      walletId?: string;
      /** Email */
      email?: string;
      /** CustomerReference source */
      customerReferenceSource?: Source;
  }
  /** @oneof */
  interface WalletQueryByOneOf {
      /** Wallet id */
      walletId?: string;
      /** Email */
      email?: string;
      /** CustomerReference source */
      customerReferenceSource?: Source;
  }
  interface GetWalletResponse {
      /** The retrieved Wallet */
      wallet?: Wallet;
  }
  interface GetWalletGiftCardRequest {
      /** ID of the Wallet for which to retrieve the associated Gift Card */
      query: WalletQuery;
  }
  interface GetWalletGiftCardResponse {
      /** The retrieved Gift Card */
      giftCard?: GiftCard;
  }
  /** GiftCard is the main entity of GiftCardService that matches between code and credit balance */
  interface GiftCard {
      /**
       * Gift Card unique id
       * @readonly
       */
      _id?: string | null;
      /** Gift Card code */
      code?: string | null;
      /** Gift Card initial value */
      initialValue?: string;
      /**
       * Gift Card balance
       * @readonly
       */
      balance?: string | null;
      /** Gift card source info */
      sourceInfo?: GiftCardSourceInfo;
      /**
       * Gift Card revision
       * @readonly
       */
      revision?: string | null;
      /** Gift Card currency */
      currency?: string | null;
      /** Gift Card expiration date */
      expirationDate?: Date;
      /**
       * Gift Card creation date
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Gift Card last update date
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Last Transaction id
       * @readonly
       */
      lastTransactionId?: string | null;
      /**
       * Gift Card disable date
       * @readonly
       */
      disableDate?: Date;
  }
  interface GiftCardSourceInfo extends GiftCardSourceInfoGiftCardOptionsOneOf {
      /** Gift Card purchase */
      orderOptions?: OrderOptions;
      /** Bulk Options (deprecated) */
      campaignOptions?: CampaignOptions;
      /** Migration Options (migrating from another gift card) */
      migrationOptions?: MigrationOptions;
      /** Store Credit Options */
      storeCreditOptions?: StoreCreditOptions;
      /** Workflow Options */
      workflowOptions?: WorkflowOptions;
      /** Bulk Options */
      bulkOptions?: BulkOptions;
      type?: GiftCardType;
      /** The Tenant ID that is associated with the gift card creation */
      sourceTenantId?: string | null;
      /** The Channel ID that is associated with the gift card creation */
      sourceChannelId?: string | null;
      /** The location ID that is associated with the action (supports POS cases) */
      sourceLocationId?: string | null;
      /** Details of the API client creating this Transaction */
      initiator?: ActionInitiator$1;
  }
  /** @oneof */
  interface GiftCardSourceInfoGiftCardOptionsOneOf {
      /** Gift Card purchase */
      orderOptions?: OrderOptions;
      /** Bulk Options (deprecated) */
      campaignOptions?: CampaignOptions;
      /** Migration Options (migrating from another gift card) */
      migrationOptions?: MigrationOptions;
      /** Store Credit Options */
      storeCreditOptions?: StoreCreditOptions;
      /** Workflow Options */
      workflowOptions?: WorkflowOptions;
      /** Bulk Options */
      bulkOptions?: BulkOptions;
  }
  enum GiftCardType {
      UNKNOWN_GIFT_CARD_TYPE = "UNKNOWN_GIFT_CARD_TYPE",
      ORDER = "ORDER",
      CAMPAIGN = "CAMPAIGN",
      MIGRATION = "MIGRATION",
      STORE_CREDIT = "STORE_CREDIT",
      MANUAL = "MANUAL",
      WORKFLOW = "WORKFLOW",
      BULK = "BULK"
  }
  interface OrderOptions {
      orderId?: string;
      liability?: boolean | null;
  }
  interface CampaignOptions {
      campaignId?: string;
      liability?: boolean | null;
  }
  interface MigrationOptions {
      previousId?: string | null;
      liability?: boolean | null;
      note?: string | null;
  }
  interface StoreCreditOptions {
      walletId?: string;
  }
  interface WorkflowOptions {
      workflowId?: string;
  }
  interface BulkOptions {
      bulkId?: string;
      liability?: boolean | null;
  }
  interface ActionInitiator$1 {
      type?: InitiatorType$1;
      _id?: string | null;
  }
  enum InitiatorType$1 {
      UNKNOWN_INITIATOR = "UNKNOWN_INITIATOR",
      APP = "APP",
      USER = "USER"
  }
  interface QueryWalletsRequest {
      /** WQL expression */
      query: QueryV2$1;
  }
  interface QueryV2$1 extends QueryV2PagingMethodOneOf$1 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
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
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$1 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
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
  interface Paging$1 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
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
  interface QueryWalletsResponse {
      /**
       * list of wallets with gift card info
       * @readonly
       */
      wallets?: Wallet[];
      pagingMetadata?: PagingMetadataV2$1;
  }
  interface PagingMetadataV2$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$1;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
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
  interface Empty$1 {
  }
  interface MigrateWalletRequest {
      /** Customer reference */
      customerReference?: CustomerReference;
      /** gift card id */
      giftCard?: GiftCard;
      /** tenant id */
      tenantId?: string;
      /** channel id */
      channelId?: string;
  }
  interface MigrateWalletResponse {
      /** wallet */
      wallet?: Wallet;
      /** giftCard */
      giftCard?: GiftCard;
  }
  interface CountWalletsRequest {
      filter?: Record<string, any> | null;
  }
  interface CountWalletsResponse {
      count?: number;
  }
  interface QueryWalletsByContactRequest {
      query: QueryByContact;
  }
  interface QueryByContact {
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
      /** Limit for the number of wallets returned */
      limit?: number | null;
  }
  interface QueryWalletsByContactResponse {
      /**
       * list of wallets with gift card info
       * @readonly
       */
      wallets?: Wallet[];
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
   * Creates a new Customer reference
   * @param customerReference - Customer reference
   * @public
   * @documentationMaturity preview
   * @requiredField customerReference
   * @requiredField customerReference.email
   * @requiredField customerReference.sourceChannelId
   * @requiredField customerReference.sourceCustomerId
   * @requiredField customerReference.sourceTenantId
   * @adminMethod
   */
  function createWallet(customerReference: CustomerReference, options?: CreateWalletOptions): Promise<CreateWalletResponse>;
  interface CreateWalletOptions {
      /** Initial amount */
      initialValue?: string | null;
      /** Currency */
      currency?: string | null;
  }
  /** @param customerReference - Customer reference
   * @internal
   * @documentationMaturity preview
   * @requiredField customerReference
   * @requiredField customerReference.email
   * @requiredField customerReference.sourceChannelId
   * @requiredField customerReference.sourceCustomerId
   * @requiredField customerReference.sourceTenantId
   * @adminMethod
   */
  function createCustomerReference(customerReference: CustomerReference): Promise<CreateCustomerReferenceResponse>;
  /**
   * Get a CustomerReference
   * @param query - Query
   * @public
   * @documentationMaturity preview
   * @requiredField query
   * @adminMethod
   */
  function getCustomerReference(query: CustomerReferenceQuery): Promise<GetCustomerReferenceResponse>;
  /**
   * Update CustomerReference
   * @param customerReference - PII information of CustomerReference will be updated. CustomerReference is identified by ID or source.
   * @internal
   * @documentationMaturity preview
   * @requiredField customerReference
   * @adminMethod
   */
  function updateCustomerReference(customerReference: CustomerReference): Promise<UpdateCustomerReferenceResponse>;
  /**
   * Delete a CustomerReference
   * @param query - Query
   * @internal
   * @documentationMaturity preview
   * @requiredField query
   * @adminMethod
   */
  function deleteCustomerReference(query: CustomerReferenceQuery): Promise<void>;
  /**
   * Get a Wallet by ID
   * @param query - Query
   * @public
   * @documentationMaturity preview
   * @requiredField query
   * @adminMethod
   */
  function getWallet(query: WalletQuery): Promise<GetWalletResponse>;
  /**
   * Get a Wallet's Gift Card
   * @param query - ID of the Wallet for which to retrieve the associated Gift Card
   * @internal
   * @documentationMaturity preview
   * @requiredField query
   * @adminMethod
   */
  function getWalletGiftCard(query: WalletQuery): Promise<GetWalletGiftCardResponse>;
  /**
   * Query wallets enriched with gift card and contact information
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryWallets(): WalletsQueryBuilder;
  interface QueryOffsetResult$1 {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface WalletsQueryResult extends QueryOffsetResult$1 {
      items: Wallet[];
      query: WalletsQueryBuilder;
      next: () => Promise<WalletsQueryResult>;
      prev: () => Promise<WalletsQueryResult>;
  }
  interface WalletsQueryBuilder {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => WalletsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => WalletsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<WalletsQueryResult>;
  }
  /** @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function countWallets(options?: CountWalletsOptions): Promise<CountWalletsResponse>;
  interface CountWalletsOptions {
      filter?: Record<string, any> | null;
  }
  /** @public
   * @documentationMaturity preview
   * @requiredField query
   * @adminMethod
   */
  function queryWalletsByContact(query: QueryByContact): Promise<QueryWalletsByContactResponse>;
  
  type riseV1Wallet_universal_d_Wallet = Wallet;
  type riseV1Wallet_universal_d_CustomerReference = CustomerReference;
  type riseV1Wallet_universal_d_GiftCardInfo = GiftCardInfo;
  type riseV1Wallet_universal_d_CreateWalletRequest = CreateWalletRequest;
  type riseV1Wallet_universal_d_CreateWalletResponse = CreateWalletResponse;
  type riseV1Wallet_universal_d_CreateCustomerReferenceRequest = CreateCustomerReferenceRequest;
  type riseV1Wallet_universal_d_CreateCustomerReferenceResponse = CreateCustomerReferenceResponse;
  type riseV1Wallet_universal_d_GetCustomerReferenceRequest = GetCustomerReferenceRequest;
  type riseV1Wallet_universal_d_CustomerReferenceQuery = CustomerReferenceQuery;
  type riseV1Wallet_universal_d_Source = Source;
  type riseV1Wallet_universal_d_GetCustomerReferenceResponse = GetCustomerReferenceResponse;
  type riseV1Wallet_universal_d_UpdateCustomerReferenceRequest = UpdateCustomerReferenceRequest;
  type riseV1Wallet_universal_d_UpdateCustomerReferenceResponse = UpdateCustomerReferenceResponse;
  type riseV1Wallet_universal_d_DeleteCustomerReferenceRequest = DeleteCustomerReferenceRequest;
  type riseV1Wallet_universal_d_DeleteCustomerReferenceResponse = DeleteCustomerReferenceResponse;
  type riseV1Wallet_universal_d_GetWalletRequest = GetWalletRequest;
  type riseV1Wallet_universal_d_WalletQuery = WalletQuery;
  type riseV1Wallet_universal_d_WalletQueryByOneOf = WalletQueryByOneOf;
  type riseV1Wallet_universal_d_GetWalletResponse = GetWalletResponse;
  type riseV1Wallet_universal_d_GetWalletGiftCardRequest = GetWalletGiftCardRequest;
  type riseV1Wallet_universal_d_GetWalletGiftCardResponse = GetWalletGiftCardResponse;
  type riseV1Wallet_universal_d_GiftCard = GiftCard;
  type riseV1Wallet_universal_d_GiftCardSourceInfo = GiftCardSourceInfo;
  type riseV1Wallet_universal_d_GiftCardSourceInfoGiftCardOptionsOneOf = GiftCardSourceInfoGiftCardOptionsOneOf;
  type riseV1Wallet_universal_d_GiftCardType = GiftCardType;
  const riseV1Wallet_universal_d_GiftCardType: typeof GiftCardType;
  type riseV1Wallet_universal_d_OrderOptions = OrderOptions;
  type riseV1Wallet_universal_d_CampaignOptions = CampaignOptions;
  type riseV1Wallet_universal_d_MigrationOptions = MigrationOptions;
  type riseV1Wallet_universal_d_StoreCreditOptions = StoreCreditOptions;
  type riseV1Wallet_universal_d_WorkflowOptions = WorkflowOptions;
  type riseV1Wallet_universal_d_BulkOptions = BulkOptions;
  type riseV1Wallet_universal_d_QueryWalletsRequest = QueryWalletsRequest;
  type riseV1Wallet_universal_d_QueryWalletsResponse = QueryWalletsResponse;
  type riseV1Wallet_universal_d_MigrateWalletRequest = MigrateWalletRequest;
  type riseV1Wallet_universal_d_MigrateWalletResponse = MigrateWalletResponse;
  type riseV1Wallet_universal_d_CountWalletsRequest = CountWalletsRequest;
  type riseV1Wallet_universal_d_CountWalletsResponse = CountWalletsResponse;
  type riseV1Wallet_universal_d_QueryWalletsByContactRequest = QueryWalletsByContactRequest;
  type riseV1Wallet_universal_d_QueryByContact = QueryByContact;
  type riseV1Wallet_universal_d_QueryWalletsByContactResponse = QueryWalletsByContactResponse;
  const riseV1Wallet_universal_d_createWallet: typeof createWallet;
  type riseV1Wallet_universal_d_CreateWalletOptions = CreateWalletOptions;
  const riseV1Wallet_universal_d_createCustomerReference: typeof createCustomerReference;
  const riseV1Wallet_universal_d_getCustomerReference: typeof getCustomerReference;
  const riseV1Wallet_universal_d_updateCustomerReference: typeof updateCustomerReference;
  const riseV1Wallet_universal_d_deleteCustomerReference: typeof deleteCustomerReference;
  const riseV1Wallet_universal_d_getWallet: typeof getWallet;
  const riseV1Wallet_universal_d_getWalletGiftCard: typeof getWalletGiftCard;
  const riseV1Wallet_universal_d_queryWallets: typeof queryWallets;
  type riseV1Wallet_universal_d_WalletsQueryResult = WalletsQueryResult;
  type riseV1Wallet_universal_d_WalletsQueryBuilder = WalletsQueryBuilder;
  const riseV1Wallet_universal_d_countWallets: typeof countWallets;
  type riseV1Wallet_universal_d_CountWalletsOptions = CountWalletsOptions;
  const riseV1Wallet_universal_d_queryWalletsByContact: typeof queryWalletsByContact;
  namespace riseV1Wallet_universal_d {
    export {
      riseV1Wallet_universal_d_Wallet as Wallet,
      riseV1Wallet_universal_d_CustomerReference as CustomerReference,
      riseV1Wallet_universal_d_GiftCardInfo as GiftCardInfo,
      riseV1Wallet_universal_d_CreateWalletRequest as CreateWalletRequest,
      riseV1Wallet_universal_d_CreateWalletResponse as CreateWalletResponse,
      riseV1Wallet_universal_d_CreateCustomerReferenceRequest as CreateCustomerReferenceRequest,
      riseV1Wallet_universal_d_CreateCustomerReferenceResponse as CreateCustomerReferenceResponse,
      riseV1Wallet_universal_d_GetCustomerReferenceRequest as GetCustomerReferenceRequest,
      riseV1Wallet_universal_d_CustomerReferenceQuery as CustomerReferenceQuery,
      riseV1Wallet_universal_d_Source as Source,
      riseV1Wallet_universal_d_GetCustomerReferenceResponse as GetCustomerReferenceResponse,
      riseV1Wallet_universal_d_UpdateCustomerReferenceRequest as UpdateCustomerReferenceRequest,
      riseV1Wallet_universal_d_UpdateCustomerReferenceResponse as UpdateCustomerReferenceResponse,
      riseV1Wallet_universal_d_DeleteCustomerReferenceRequest as DeleteCustomerReferenceRequest,
      riseV1Wallet_universal_d_DeleteCustomerReferenceResponse as DeleteCustomerReferenceResponse,
      riseV1Wallet_universal_d_GetWalletRequest as GetWalletRequest,
      riseV1Wallet_universal_d_WalletQuery as WalletQuery,
      riseV1Wallet_universal_d_WalletQueryByOneOf as WalletQueryByOneOf,
      riseV1Wallet_universal_d_GetWalletResponse as GetWalletResponse,
      riseV1Wallet_universal_d_GetWalletGiftCardRequest as GetWalletGiftCardRequest,
      riseV1Wallet_universal_d_GetWalletGiftCardResponse as GetWalletGiftCardResponse,
      riseV1Wallet_universal_d_GiftCard as GiftCard,
      riseV1Wallet_universal_d_GiftCardSourceInfo as GiftCardSourceInfo,
      riseV1Wallet_universal_d_GiftCardSourceInfoGiftCardOptionsOneOf as GiftCardSourceInfoGiftCardOptionsOneOf,
      riseV1Wallet_universal_d_GiftCardType as GiftCardType,
      riseV1Wallet_universal_d_OrderOptions as OrderOptions,
      riseV1Wallet_universal_d_CampaignOptions as CampaignOptions,
      riseV1Wallet_universal_d_MigrationOptions as MigrationOptions,
      riseV1Wallet_universal_d_StoreCreditOptions as StoreCreditOptions,
      riseV1Wallet_universal_d_WorkflowOptions as WorkflowOptions,
      riseV1Wallet_universal_d_BulkOptions as BulkOptions,
      ActionInitiator$1 as ActionInitiator,
      InitiatorType$1 as InitiatorType,
      riseV1Wallet_universal_d_QueryWalletsRequest as QueryWalletsRequest,
      QueryV2$1 as QueryV2,
      QueryV2PagingMethodOneOf$1 as QueryV2PagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      Paging$1 as Paging,
      CursorPaging$1 as CursorPaging,
      riseV1Wallet_universal_d_QueryWalletsResponse as QueryWalletsResponse,
      PagingMetadataV2$1 as PagingMetadataV2,
      Cursors$1 as Cursors,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      Empty$1 as Empty,
      riseV1Wallet_universal_d_MigrateWalletRequest as MigrateWalletRequest,
      riseV1Wallet_universal_d_MigrateWalletResponse as MigrateWalletResponse,
      riseV1Wallet_universal_d_CountWalletsRequest as CountWalletsRequest,
      riseV1Wallet_universal_d_CountWalletsResponse as CountWalletsResponse,
      riseV1Wallet_universal_d_QueryWalletsByContactRequest as QueryWalletsByContactRequest,
      riseV1Wallet_universal_d_QueryByContact as QueryByContact,
      riseV1Wallet_universal_d_QueryWalletsByContactResponse as QueryWalletsByContactResponse,
      MessageEnvelope$1 as MessageEnvelope,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
      riseV1Wallet_universal_d_createWallet as createWallet,
      riseV1Wallet_universal_d_CreateWalletOptions as CreateWalletOptions,
      riseV1Wallet_universal_d_createCustomerReference as createCustomerReference,
      riseV1Wallet_universal_d_getCustomerReference as getCustomerReference,
      riseV1Wallet_universal_d_updateCustomerReference as updateCustomerReference,
      riseV1Wallet_universal_d_deleteCustomerReference as deleteCustomerReference,
      riseV1Wallet_universal_d_getWallet as getWallet,
      riseV1Wallet_universal_d_getWalletGiftCard as getWalletGiftCard,
      riseV1Wallet_universal_d_queryWallets as queryWallets,
      riseV1Wallet_universal_d_WalletsQueryResult as WalletsQueryResult,
      riseV1Wallet_universal_d_WalletsQueryBuilder as WalletsQueryBuilder,
      riseV1Wallet_universal_d_countWallets as countWallets,
      riseV1Wallet_universal_d_CountWalletsOptions as CountWalletsOptions,
      riseV1Wallet_universal_d_queryWalletsByContact as queryWalletsByContact,
    };
  }
  
  /** WalletAction is the main entity of WalletActionService that can be used for lorem ipsum dolor */
  interface WalletAction {
      /**
       * WalletAction ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. For an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this WalletAction was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this WalletAction was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Wallet ID */
      walletId?: string;
      /** Represents the time when the walletAction's amount will be added to the account */
      startDate?: Date;
      /** Represents the time when the unused balance will be deducted from the account */
      expirationDate?: Date;
      /**
       * Represents the time when the walletAction was manually disabled
       * @readonly
       */
      disableDate?: Date;
      /** The amount to be added to the Wallet */
      amount?: string;
      /** Free text comment regarding the WalletAction context */
      note?: string | null;
      /** Indicates the kind of the specific walletAction */
      type?: WalletActionType;
      /** @readonly */
      walletActionStarted?: WalletActionExecutionDetails;
      /** @readonly */
      walletActionEnded?: WalletActionExecutionDetails;
      /** @readonly */
      status?: WalletActionStatus;
      /** @readonly */
      source?: ActionInitiator;
      notifications?: Notifications;
      liability?: boolean | null;
      storeCreditContext?: StoreCreditContext;
      externalEvent?: ExternalEvent;
  }
  interface EmailParams {
      skipEmailDispatch?: boolean | null;
      overrideTemplateId?: string | null;
  }
  enum WalletActionType {
      UNKNOWN = "UNKNOWN",
      REWARD = "REWARD",
      REFUND = "REFUND"
  }
  interface WalletActionExecutionDetails {
      /** @readonly */
      transactionId?: string | null;
      /** @readonly */
      executionDate?: Date;
  }
  enum WalletActionStatus {
      PENDING = "PENDING",
      ACTIVE = "ACTIVE",
      DISABLED = "DISABLED",
      EXPIRED = "EXPIRED"
  }
  interface ActionInitiator {
      type?: InitiatorType;
      _id?: string | null;
  }
  enum InitiatorType {
      UNKNOWN_INITIATOR = "UNKNOWN_INITIATOR",
      APP = "APP",
      USER = "USER"
  }
  interface Notifications {
      emailParams?: EmailParams;
  }
  interface StoreCreditContext {
      issuer?: StoreCreditIssuerType;
      /** Indicates a specific instance of the issuer (relevant for workflow/bulk) */
      issuerId?: string | null;
      note?: string | null;
  }
  enum StoreCreditIssuerType {
      UNKNOWN_ISSUER = "UNKNOWN_ISSUER",
      WORKFLOW = "WORKFLOW",
      BULK = "BULK",
      MANUAL = "MANUAL",
      OTHER = "OTHER"
  }
  interface ExternalEvent {
      /** Event type indicator */
      name?: ExternalEventType;
      /** Short description or identifier of the event */
      description?: string | null;
  }
  enum ExternalEventType {
      UNKNOWN_EVENT_TYPE = "UNKNOWN_EVENT_TYPE",
      ORDER = "ORDER",
      REFUND = "REFUND",
      REFERRAL = "REFERRAL",
      SIGN_UP = "SIGN_UP",
      MEMBERSHIP = "MEMBERSHIP",
      COMPENSATION = "COMPENSATION",
      OTHER = "OTHER"
  }
  interface CreateWalletActionRequest {
      /** WalletAction to be created */
      walletAction: WalletAction;
  }
  interface CreateWalletActionResponse {
      /** The created WalletAction */
      walletAction?: WalletAction;
  }
  interface WalletActionCreationExpirationDateInThePastDetails {
      /** The date when the walletAction expires. */
      expirationDate?: Date;
      /** The date when the walletAction was tried to be created. */
      currentDate?: Date;
  }
  interface WalletActionCreationStartLaterThanExpirationDetails {
      /** The start date of the walletAction. */
      startDate?: Date;
      /** The date when the walletAction expires. */
      expirationDate?: Date;
  }
  interface WalletActionCreationDisabledAtDateSetDetails {
      /** Represents the time when the walletAction was disabled. */
      disableDate?: Date;
  }
  interface GetWalletActionRequest {
      /** ID of the WalletAction to retrieve */
      walletActionId: string;
  }
  interface GetWalletActionResponse {
      /** The retrieved WalletAction */
      walletAction?: WalletAction;
  }
  interface UpdateWalletActionRequest {
      /** WalletAction to be updated, may be partial */
      walletAction: WalletAction;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface UpdateWalletActionResponse {
      /** The updated WalletAction */
      walletAction?: WalletAction;
  }
  interface InvalidWalletActionDetails {
      /** WalletAction ID. */
      walletActionId?: string;
  }
  interface WalletActionUpdateStartDateInThePastDetails {
      /** WalletAction ID. */
      walletActionId?: string;
      /** The date when the walletAction expires. */
      newStartDate?: Date;
      /** The date when the walletAction was tried to be updated. */
      currentDate?: Date;
  }
  interface WalletActionUpdateExpirationDateInThePastDetails {
      /** WalletAction ID. */
      walletActionId?: string;
      /** The date when the walletAction expires. */
      newExpirationDate?: Date;
      /** The date when the walletAction was tried to be updated. */
      currentDate?: Date;
  }
  interface WalletActionUpdateStartLaterThanExpirationDetails {
      /** WalletAction ID. */
      walletActionId?: string;
      /** The start date of the walletAction. */
      startDate?: Date;
      /** The date when the walletAction expires. */
      expirationDate?: Date;
  }
  interface DisableWalletActionRequest {
      /** ID of the WalletAction to delete */
      walletActionId: string;
      /** The revision of the WalletAction */
      revision: string;
  }
  interface DisableWalletActionResponse {
      /** The expired WalletAction */
      walletAction?: WalletAction;
  }
  interface WalletActionDisabled {
      walletAction?: WalletAction;
  }
  interface DeleteWalletActionRequest {
      /** ID of the WalletAction to delete */
      walletActionId: string;
      /** The revision of the WalletAction */
      revision?: string;
  }
  interface DeleteWalletActionResponse {
  }
  interface QueryWalletActionRequest {
      /** WQL expression */
      query: QueryV2;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
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
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
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
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
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
  interface QueryWalletActionResponse {
      /** The retrieved WalletActions */
      walletActions?: WalletAction[];
      pagingMetadata?: PagingMetadataV2;
  }
  interface PagingMetadataV2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
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
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryWalletActionBalancesRequest {
      /** WQL expression */
      query: QueryV2;
  }
  interface QueryWalletActionBalancesResponse {
      /** The retrieved WalletActions with their balance */
      walletActions?: WalletActionWithBalance[];
      pagingMetadata?: PagingMetadataV2;
  }
  interface WalletActionWithBalance {
      /** WalletAction */
      walletAction?: WalletAction;
      /** WalletAction balance */
      balance?: string | null;
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
  interface CreateMigrationWalletActionRequest {
      /** WalletAction to be created */
      walletAction?: WalletAction;
  }
  interface CreateMigrationWalletActionResponse {
      /** The created WalletAction */
      walletAction?: WalletAction;
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
   * Creates a new WalletAction
   * @param walletAction - WalletAction to be created
   * @public
   * @documentationMaturity preview
   * @requiredField walletAction
   * @requiredField walletAction.amount
   * @requiredField walletAction.type
   * @requiredField walletAction.walletId
   * @adminMethod
   */
  function createWalletAction(walletAction: WalletAction): Promise<CreateWalletActionResponse>;
  /**
   * Get an WalletAction by ID
   * @param walletActionId - ID of the WalletAction to retrieve
   * @public
   * @documentationMaturity preview
   * @requiredField walletActionId
   * @adminMethod
   * @returns The retrieved WalletAction
   */
  function getWalletAction(walletActionId: string): Promise<WalletAction>;
  /**
   * Update an WalletAction, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - WalletAction ID
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField walletAction
   * @requiredField walletAction.revision
   * @adminMethod
   * @returns The updated WalletAction
   */
  function updateWalletAction(_id: string | null, walletAction: UpdateWalletAction, options?: UpdateWalletActionOptions): Promise<WalletAction>;
  interface UpdateWalletAction {
      /**
       * WalletAction ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. For an update operation to succeed, you MUST pass the latest revision
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this WalletAction was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this WalletAction was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** Wallet ID */
      walletId?: string;
      /** Represents the time when the walletAction's amount will be added to the account */
      startDate?: Date;
      /** Represents the time when the unused balance will be deducted from the account */
      expirationDate?: Date;
      /**
       * Represents the time when the walletAction was manually disabled
       * @readonly
       */
      disableDate?: Date;
      /** The amount to be added to the Wallet */
      amount?: string;
      /** Free text comment regarding the WalletAction context */
      note?: string | null;
      /** Indicates the kind of the specific walletAction */
      type?: WalletActionType;
      /** @readonly */
      walletActionStarted?: WalletActionExecutionDetails;
      /** @readonly */
      walletActionEnded?: WalletActionExecutionDetails;
      /** @readonly */
      status?: WalletActionStatus;
      /** @readonly */
      source?: ActionInitiator;
      notifications?: Notifications;
      liability?: boolean | null;
      storeCreditContext?: StoreCreditContext;
      externalEvent?: ExternalEvent;
  }
  interface UpdateWalletActionOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  /**
   * Expire an WalletAction immediately and deducting the remaining balance from the gift card
   * @param walletActionId - ID of the WalletAction to delete
   * @param revision - The revision of the WalletAction
   * @public
   * @documentationMaturity preview
   * @requiredField revision
   * @requiredField walletActionId
   * @adminMethod
   */
  function disableWalletAction(walletActionId: string, revision: string): Promise<DisableWalletActionResponse>;
  /**
   * Delete an WalletAction, only available for wallet_actions which haven't started
   * @param walletActionId - ID of the WalletAction to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField walletActionId
   * @adminMethod
   */
  function deleteWalletAction(walletActionId: string, options?: DeleteWalletActionOptions): Promise<void>;
  interface DeleteWalletActionOptions {
      /** The revision of the WalletAction */
      revision?: string;
  }
  /**
   * Query WalletActions using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryWalletActions(): WalletActionsQueryBuilder;
  interface QueryOffsetResult {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface WalletActionsQueryResult extends QueryOffsetResult {
      items: WalletAction[];
      query: WalletActionsQueryBuilder;
      next: () => Promise<WalletActionsQueryResult>;
      prev: () => Promise<WalletActionsQueryResult>;
  }
  interface WalletActionsQueryBuilder {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => WalletActionsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => WalletActionsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<WalletActionsQueryResult>;
  }
  /**
   * Query WalletActions using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * Results will be enriched with calculated balances
   * @param query - WQL expression
   * @public
   * @documentationMaturity preview
   * @requiredField query
   * @adminMethod
   */
  function queryWalletActionsBalances(query: QueryV2): Promise<QueryWalletActionBalancesResponse>;
  
  type riseV1WalletAction_universal_d_WalletAction = WalletAction;
  type riseV1WalletAction_universal_d_EmailParams = EmailParams;
  type riseV1WalletAction_universal_d_WalletActionType = WalletActionType;
  const riseV1WalletAction_universal_d_WalletActionType: typeof WalletActionType;
  type riseV1WalletAction_universal_d_WalletActionExecutionDetails = WalletActionExecutionDetails;
  type riseV1WalletAction_universal_d_WalletActionStatus = WalletActionStatus;
  const riseV1WalletAction_universal_d_WalletActionStatus: typeof WalletActionStatus;
  type riseV1WalletAction_universal_d_ActionInitiator = ActionInitiator;
  type riseV1WalletAction_universal_d_InitiatorType = InitiatorType;
  const riseV1WalletAction_universal_d_InitiatorType: typeof InitiatorType;
  type riseV1WalletAction_universal_d_Notifications = Notifications;
  type riseV1WalletAction_universal_d_StoreCreditContext = StoreCreditContext;
  type riseV1WalletAction_universal_d_StoreCreditIssuerType = StoreCreditIssuerType;
  const riseV1WalletAction_universal_d_StoreCreditIssuerType: typeof StoreCreditIssuerType;
  type riseV1WalletAction_universal_d_ExternalEvent = ExternalEvent;
  type riseV1WalletAction_universal_d_ExternalEventType = ExternalEventType;
  const riseV1WalletAction_universal_d_ExternalEventType: typeof ExternalEventType;
  type riseV1WalletAction_universal_d_CreateWalletActionRequest = CreateWalletActionRequest;
  type riseV1WalletAction_universal_d_CreateWalletActionResponse = CreateWalletActionResponse;
  type riseV1WalletAction_universal_d_WalletActionCreationExpirationDateInThePastDetails = WalletActionCreationExpirationDateInThePastDetails;
  type riseV1WalletAction_universal_d_WalletActionCreationStartLaterThanExpirationDetails = WalletActionCreationStartLaterThanExpirationDetails;
  type riseV1WalletAction_universal_d_WalletActionCreationDisabledAtDateSetDetails = WalletActionCreationDisabledAtDateSetDetails;
  type riseV1WalletAction_universal_d_GetWalletActionRequest = GetWalletActionRequest;
  type riseV1WalletAction_universal_d_GetWalletActionResponse = GetWalletActionResponse;
  type riseV1WalletAction_universal_d_UpdateWalletActionRequest = UpdateWalletActionRequest;
  type riseV1WalletAction_universal_d_UpdateWalletActionResponse = UpdateWalletActionResponse;
  type riseV1WalletAction_universal_d_InvalidWalletActionDetails = InvalidWalletActionDetails;
  type riseV1WalletAction_universal_d_WalletActionUpdateStartDateInThePastDetails = WalletActionUpdateStartDateInThePastDetails;
  type riseV1WalletAction_universal_d_WalletActionUpdateExpirationDateInThePastDetails = WalletActionUpdateExpirationDateInThePastDetails;
  type riseV1WalletAction_universal_d_WalletActionUpdateStartLaterThanExpirationDetails = WalletActionUpdateStartLaterThanExpirationDetails;
  type riseV1WalletAction_universal_d_DisableWalletActionRequest = DisableWalletActionRequest;
  type riseV1WalletAction_universal_d_DisableWalletActionResponse = DisableWalletActionResponse;
  type riseV1WalletAction_universal_d_WalletActionDisabled = WalletActionDisabled;
  type riseV1WalletAction_universal_d_DeleteWalletActionRequest = DeleteWalletActionRequest;
  type riseV1WalletAction_universal_d_DeleteWalletActionResponse = DeleteWalletActionResponse;
  type riseV1WalletAction_universal_d_QueryWalletActionRequest = QueryWalletActionRequest;
  type riseV1WalletAction_universal_d_QueryV2 = QueryV2;
  type riseV1WalletAction_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type riseV1WalletAction_universal_d_Sorting = Sorting;
  type riseV1WalletAction_universal_d_SortOrder = SortOrder;
  const riseV1WalletAction_universal_d_SortOrder: typeof SortOrder;
  type riseV1WalletAction_universal_d_Paging = Paging;
  type riseV1WalletAction_universal_d_CursorPaging = CursorPaging;
  type riseV1WalletAction_universal_d_QueryWalletActionResponse = QueryWalletActionResponse;
  type riseV1WalletAction_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type riseV1WalletAction_universal_d_Cursors = Cursors;
  type riseV1WalletAction_universal_d_QueryWalletActionBalancesRequest = QueryWalletActionBalancesRequest;
  type riseV1WalletAction_universal_d_QueryWalletActionBalancesResponse = QueryWalletActionBalancesResponse;
  type riseV1WalletAction_universal_d_WalletActionWithBalance = WalletActionWithBalance;
  type riseV1WalletAction_universal_d_DomainEvent = DomainEvent;
  type riseV1WalletAction_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type riseV1WalletAction_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type riseV1WalletAction_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type riseV1WalletAction_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type riseV1WalletAction_universal_d_ActionEvent = ActionEvent;
  type riseV1WalletAction_universal_d_Empty = Empty;
  type riseV1WalletAction_universal_d_CreateMigrationWalletActionRequest = CreateMigrationWalletActionRequest;
  type riseV1WalletAction_universal_d_CreateMigrationWalletActionResponse = CreateMigrationWalletActionResponse;
  type riseV1WalletAction_universal_d_MessageEnvelope = MessageEnvelope;
  type riseV1WalletAction_universal_d_IdentificationData = IdentificationData;
  type riseV1WalletAction_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type riseV1WalletAction_universal_d_WebhookIdentityType = WebhookIdentityType;
  const riseV1WalletAction_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const riseV1WalletAction_universal_d_createWalletAction: typeof createWalletAction;
  const riseV1WalletAction_universal_d_getWalletAction: typeof getWalletAction;
  const riseV1WalletAction_universal_d_updateWalletAction: typeof updateWalletAction;
  type riseV1WalletAction_universal_d_UpdateWalletAction = UpdateWalletAction;
  type riseV1WalletAction_universal_d_UpdateWalletActionOptions = UpdateWalletActionOptions;
  const riseV1WalletAction_universal_d_disableWalletAction: typeof disableWalletAction;
  const riseV1WalletAction_universal_d_deleteWalletAction: typeof deleteWalletAction;
  type riseV1WalletAction_universal_d_DeleteWalletActionOptions = DeleteWalletActionOptions;
  const riseV1WalletAction_universal_d_queryWalletActions: typeof queryWalletActions;
  type riseV1WalletAction_universal_d_WalletActionsQueryResult = WalletActionsQueryResult;
  type riseV1WalletAction_universal_d_WalletActionsQueryBuilder = WalletActionsQueryBuilder;
  const riseV1WalletAction_universal_d_queryWalletActionsBalances: typeof queryWalletActionsBalances;
  namespace riseV1WalletAction_universal_d {
    export {
      riseV1WalletAction_universal_d_WalletAction as WalletAction,
      riseV1WalletAction_universal_d_EmailParams as EmailParams,
      riseV1WalletAction_universal_d_WalletActionType as WalletActionType,
      riseV1WalletAction_universal_d_WalletActionExecutionDetails as WalletActionExecutionDetails,
      riseV1WalletAction_universal_d_WalletActionStatus as WalletActionStatus,
      riseV1WalletAction_universal_d_ActionInitiator as ActionInitiator,
      riseV1WalletAction_universal_d_InitiatorType as InitiatorType,
      riseV1WalletAction_universal_d_Notifications as Notifications,
      riseV1WalletAction_universal_d_StoreCreditContext as StoreCreditContext,
      riseV1WalletAction_universal_d_StoreCreditIssuerType as StoreCreditIssuerType,
      riseV1WalletAction_universal_d_ExternalEvent as ExternalEvent,
      riseV1WalletAction_universal_d_ExternalEventType as ExternalEventType,
      riseV1WalletAction_universal_d_CreateWalletActionRequest as CreateWalletActionRequest,
      riseV1WalletAction_universal_d_CreateWalletActionResponse as CreateWalletActionResponse,
      riseV1WalletAction_universal_d_WalletActionCreationExpirationDateInThePastDetails as WalletActionCreationExpirationDateInThePastDetails,
      riseV1WalletAction_universal_d_WalletActionCreationStartLaterThanExpirationDetails as WalletActionCreationStartLaterThanExpirationDetails,
      riseV1WalletAction_universal_d_WalletActionCreationDisabledAtDateSetDetails as WalletActionCreationDisabledAtDateSetDetails,
      riseV1WalletAction_universal_d_GetWalletActionRequest as GetWalletActionRequest,
      riseV1WalletAction_universal_d_GetWalletActionResponse as GetWalletActionResponse,
      riseV1WalletAction_universal_d_UpdateWalletActionRequest as UpdateWalletActionRequest,
      riseV1WalletAction_universal_d_UpdateWalletActionResponse as UpdateWalletActionResponse,
      riseV1WalletAction_universal_d_InvalidWalletActionDetails as InvalidWalletActionDetails,
      riseV1WalletAction_universal_d_WalletActionUpdateStartDateInThePastDetails as WalletActionUpdateStartDateInThePastDetails,
      riseV1WalletAction_universal_d_WalletActionUpdateExpirationDateInThePastDetails as WalletActionUpdateExpirationDateInThePastDetails,
      riseV1WalletAction_universal_d_WalletActionUpdateStartLaterThanExpirationDetails as WalletActionUpdateStartLaterThanExpirationDetails,
      riseV1WalletAction_universal_d_DisableWalletActionRequest as DisableWalletActionRequest,
      riseV1WalletAction_universal_d_DisableWalletActionResponse as DisableWalletActionResponse,
      riseV1WalletAction_universal_d_WalletActionDisabled as WalletActionDisabled,
      riseV1WalletAction_universal_d_DeleteWalletActionRequest as DeleteWalletActionRequest,
      riseV1WalletAction_universal_d_DeleteWalletActionResponse as DeleteWalletActionResponse,
      riseV1WalletAction_universal_d_QueryWalletActionRequest as QueryWalletActionRequest,
      riseV1WalletAction_universal_d_QueryV2 as QueryV2,
      riseV1WalletAction_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      riseV1WalletAction_universal_d_Sorting as Sorting,
      riseV1WalletAction_universal_d_SortOrder as SortOrder,
      riseV1WalletAction_universal_d_Paging as Paging,
      riseV1WalletAction_universal_d_CursorPaging as CursorPaging,
      riseV1WalletAction_universal_d_QueryWalletActionResponse as QueryWalletActionResponse,
      riseV1WalletAction_universal_d_PagingMetadataV2 as PagingMetadataV2,
      riseV1WalletAction_universal_d_Cursors as Cursors,
      riseV1WalletAction_universal_d_QueryWalletActionBalancesRequest as QueryWalletActionBalancesRequest,
      riseV1WalletAction_universal_d_QueryWalletActionBalancesResponse as QueryWalletActionBalancesResponse,
      riseV1WalletAction_universal_d_WalletActionWithBalance as WalletActionWithBalance,
      riseV1WalletAction_universal_d_DomainEvent as DomainEvent,
      riseV1WalletAction_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      riseV1WalletAction_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      riseV1WalletAction_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      riseV1WalletAction_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      riseV1WalletAction_universal_d_ActionEvent as ActionEvent,
      riseV1WalletAction_universal_d_Empty as Empty,
      riseV1WalletAction_universal_d_CreateMigrationWalletActionRequest as CreateMigrationWalletActionRequest,
      riseV1WalletAction_universal_d_CreateMigrationWalletActionResponse as CreateMigrationWalletActionResponse,
      riseV1WalletAction_universal_d_MessageEnvelope as MessageEnvelope,
      riseV1WalletAction_universal_d_IdentificationData as IdentificationData,
      riseV1WalletAction_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      riseV1WalletAction_universal_d_WebhookIdentityType as WebhookIdentityType,
      riseV1WalletAction_universal_d_createWalletAction as createWalletAction,
      riseV1WalletAction_universal_d_getWalletAction as getWalletAction,
      riseV1WalletAction_universal_d_updateWalletAction as updateWalletAction,
      riseV1WalletAction_universal_d_UpdateWalletAction as UpdateWalletAction,
      riseV1WalletAction_universal_d_UpdateWalletActionOptions as UpdateWalletActionOptions,
      riseV1WalletAction_universal_d_disableWalletAction as disableWalletAction,
      riseV1WalletAction_universal_d_deleteWalletAction as deleteWalletAction,
      riseV1WalletAction_universal_d_DeleteWalletActionOptions as DeleteWalletActionOptions,
      riseV1WalletAction_universal_d_queryWalletActions as queryWalletActions,
      riseV1WalletAction_universal_d_WalletActionsQueryResult as WalletActionsQueryResult,
      riseV1WalletAction_universal_d_WalletActionsQueryBuilder as WalletActionsQueryBuilder,
      riseV1WalletAction_universal_d_queryWalletActionsBalances as queryWalletActionsBalances,
    };
  }
  
  export { riseV1GiftCard_universal_d as giftCard, riseV1Wallet_universal_d as wallet, riseV1WalletAction_universal_d as walletAction };
}
