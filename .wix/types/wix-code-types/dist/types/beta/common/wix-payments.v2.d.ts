declare module "wix-payments.v2" {
  /**
   * A refund a record of an attempt of
   * returning funds for a charge from a merchant to a customer to who has made a purchase.
   * Read more about refunds in this [article](<https://dev.wix.com/docs/rest/business-management/payments/refunds/introduction>).
   */
  interface Refund {
      /**
       * Refund ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the refund is updated.
       *
       * Ignored when creating a refund.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time the refund was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the refund was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Data Extensions */
      extendedFields?: ExtendedFields;
      /** ID of charge for which the funds are returned by this refund. */
      chargeId?: string | null;
      /** Currency of refund, should be the same as currency of charge. */
      currency?: string | null;
      /**
       * Amount of refund in base units, what's returned to the customer.
       * E.g. "12.95".
       */
      amount?: string | null;
      /**
       * Application fee returned to merchant from Wix.
       * In base units, e.g. "12.95".
       * Not present when no application fee was returned.
       * @readonly
       */
      returnedApplicationFee?: string | null;
      /**
       * Processing fee returned to merchant from provider.
       * In base units, e.g. "12.95".
       * Applicable only to Wix Payments provider.
       * Not present when no processing fee was returned.
       * @readonly
       */
      returnedProcessingFee?: string | null;
      /**
       * True when refund returns all funds for a charge.
       * @readonly
       */
      full?: boolean | null;
      /**
       * Status of the refund.
       * Read more about statuses in this [article](<https://dev.wix.com/docs/rest/business-management/payments/refunds/introduction#lifecycle-of-a-refund>).
       * @readonly
       */
      status?: Status;
      /**
       * ID of the refund on the PSP side.
       * @readonly
       */
      providerRefundId?: string | null;
      /**
       * _INTERNAL_
       * Who initiated this refund.
       * @internal
       */
      initiator?: Initiator;
      /** Reason why this refund was issued. */
      reason?: string | null;
      /**
       * Details about refund status.
       * Mostly used with statuses `FAILED` and `REVERSED`.
       * @readonly
       */
      statusInfo?: StatusInfo;
      /**
       * Acquirer Reference Number.
       * @readonly
       */
      acquirerReferenceNumber?: string | null;
      /** Optional free-text note about this refund. */
      note?: string | null;
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
  enum Status {
      UNKNOWN_STATUS = "UNKNOWN_STATUS",
      /**
       * Initial status for all refunds.
       * Provisional, refund should be in this status for less than a minute.
       */
      STARTING = "STARTING",
      /** Status right after STARTED for asynchronous refunds. */
      PENDING = "PENDING",
      /**
       * Refund was successful.
       * Can transition to REVERSED in corner cases.
       */
      SUCCEEDED = "SUCCEEDED",
      /** Regular error, terminal status. */
      FAILED = "FAILED",
      /**
       * Either refund reversal
       * or any other error that comes after success, terminal status.
       */
      REVERSED = "REVERSED"
  }
  enum Initiator {
      UNKNOWN_INITIATOR = "UNKNOWN_INITIATOR",
      WIX = "WIX",
      API = "API",
      PROVIDER = "PROVIDER"
  }
  interface StatusInfo {
      /**
       * Reason code.
       * [Read more about reason codes.](https://dev.wix.com/docs/rest/api-reference/payment-provider-spi/reason-codes)
       */
      code?: string;
      /** Free-text description. */
      description?: string | null;
  }
  interface CreateRefundRequest {
      /** Refund to be created. */
      refund: Refund;
      /**
       * _INTERNAL_
       * True means processing fee for the refunded charge should be returned to the merchant.
       * Applies only to Wix Payments charges.
       * `PAYMENTS.REFUND_RETURN_PROCESSING_FEE` permission is required.
       * @internal
       */
      returnProcessingFee?: boolean | null;
      /**
       * Optional parameter used to prevent unintended refunds.
       * Used to check previously refunded amount according to the client
       * against the amount from server perspective.
       * If they don't match, error with code `PREVIOUSLY_REFUNDED_AMOUNT_MISMATCH` is returned.
       *
       * Read more about preventing unintended refunds in this
       * [article](<https://dev.wix.com/docs/rest/business-management/payments/refunds/introduction#preventing-unintended-refunds>).
       */
      previouslyRefundedAmount?: string | null;
  }
  interface CreateRefundResponse {
      /** The created refund. */
      refund?: Refund;
  }
  interface GetRefundRequest {
      /** ID of the refund to retrieve. */
      refundId: string;
  }
  interface GetRefundResponse {
      /** The requested refund. */
      refund?: Refund;
  }
  interface QueryRefundsRequest {
      /** WQL expression. */
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
  interface QueryRefundsResponse {
      /** List of refunds. */
      refunds?: Refund[];
      /** Paging metadata */
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
  interface UpdateExtendedFieldsRequest {
      /** ID of the entity to update. */
      _id: string;
      /** Identifier for the app whose extended fields are being updated. */
      namespace: string;
      /** Data to update. Structured according to the [schema](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields#json-schema-for-extended-fields) defined when the extended fields were configured. */
      namespaceData: Record<string, any> | null;
  }
  interface UpdateExtendedFieldsResponse {
      /** Updated refund. */
      refund?: Refund;
  }
  interface GetRefundabilityRequest {
      /** ID of the charge for which refundability will be calculated. */
      chargeId: string;
  }
  interface GetRefundabilityResponse {
      /** Refundability for the charge. */
      refundability?: Refundability;
  }
  /**
   * Internal notes:
   *
   * Instead of separate Refundability and PartialRefundability, we provide min and max refund amount.
   * If only full refund is possible, min_refund_amount = max_refund_amount = charge amount.
   */
  interface Refundability extends RefundabilityDetailsOneOf {
      /** When charge is refundable, specifies what amounts are allowed for refund. */
      refundOptions?: RefundOptions;
      /** When charge is not refundable, specifies why refund is not allowed. */
      rejection?: Rejection;
      /** Whether the caller is allowed to refund the charge. */
      refundable?: boolean;
      /** Currency of the charge. */
      currency?: string | null;
      /**
       * Sum of amounts of `SUCCEEDED` refunds for this charge in base units, e.g. "6.47".
       * Used to prevent unintended refunds, read more in this
       * [article](<https://dev.wix.com/docs/rest/business-management/payments/refunds/introduction#preventing-unintended-refunds>).
       */
      previouslyRefundedAmount?: string | null;
  }
  /** @oneof */
  interface RefundabilityDetailsOneOf {
      /** When charge is refundable, specifies what amounts are allowed for refund. */
      refundOptions?: RefundOptions;
      /** When charge is not refundable, specifies why refund is not allowed. */
      rejection?: Rejection;
  }
  interface RefundOptions {
      /** Minimum amount allowed to be refunded in base units, e.g. "0.50". */
      minRefundAmount?: string | null;
      /** Maximum amount allowed to be refunded in base units, e.g. "12.95". */
      maxRefundAmount?: string | null;
  }
  interface Rejection {
      /**
       * Following reasons are possible:
       * - `CHARGE_REFUNDED` — charge is already fully refunded.
       * - `CHARGE_REFUND_IN_PROGRESS` — another refund was initiated for this charge
       * and is waiting for confirmation from the provider.
       * - `CHARGE_DISPUTED` — charge was disputed.
       * - `CHARGE_REFUND_PERIOD_ENDED` — charge is too old to be refunded.
       * - `CHARGE_UNPAID` — charge is unpaid.
       * - `PROVIDER_DOWN` — PSP is temporarily down.
       * - `PROVIDER_NOT_SUPPORTED` — provider doesn't support refunds at the moment,
       * charge is in the wrong state,
       * or we don't have required information for this transaction.
       * - `PAYMENT_METHOD_NOT_SUPPORTED` — payment method of a charge doesn't support refunds.
       * - `MERCHANT_ACCOUNT_NOT_SUPPORTED` — merchant account doesn't support refunds at the moment.
       * - `MERCHANT_BALANCE_INSUFFICIENT` — merchant doesn't have enough balance to issue a refund for this charge.
       * - `NOT_AUTHORIZED` — logged in merchant has no permission to refund this charge.
       */
      reason?: RejectionReason;
  }
  enum RejectionReason {
      UNKNOWN_REJECTION_REASON = "UNKNOWN_REJECTION_REASON",
      /** Charge is already fully refunded. */
      CHARGE_REFUNDED = "CHARGE_REFUNDED",
      /** Another refund was initiated for this charge and is waiting for confirmation from the provider. */
      CHARGE_REFUND_IN_PROGRESS = "CHARGE_REFUND_IN_PROGRESS",
      /** Charge was disputed. */
      CHARGE_DISPUTED = "CHARGE_DISPUTED",
      /** Charge is too old to be refunded. */
      CHARGE_REFUND_PERIOD_ENDED = "CHARGE_REFUND_PERIOD_ENDED",
      /** Charge is unpaid. */
      CHARGE_UNPAID = "CHARGE_UNPAID",
      /** PSP is temporarily down. */
      PROVIDER_DOWN = "PROVIDER_DOWN",
      /**
       * Provider doesn't support refunds at the moment, transaction in a wrong state or we don't
       * have required information for this transaction.
       */
      PROVIDER_NOT_SUPPORTED = "PROVIDER_NOT_SUPPORTED",
      /** Payment method of a charge doesn't support refunds. */
      PAYMENT_METHOD_NOT_SUPPORTED = "PAYMENT_METHOD_NOT_SUPPORTED",
      /** Merchant account doesn't support refunds at the moment. */
      MERCHANT_ACCOUNT_NOT_SUPPORTED = "MERCHANT_ACCOUNT_NOT_SUPPORTED",
      /** Merchant doesn't have enough balance to issue a refund for this charge. */
      MERCHANT_BALANCE_INSUFFICIENT = "MERCHANT_BALANCE_INSUFFICIENT",
      /** Logged in merchant has no permission to refund this charge. */
      NOT_AUTHORIZED = "NOT_AUTHORIZED"
  }
  interface SyncRefundRequest {
      /** Refund received from PSP. */
      refund?: Refund;
      /**
       * Application fee returned to merchant from Wix.
       * Having this as a separate field since Refund.returned_application_fee is readOnly.
       */
      returnedApplicationFee?: string | null;
  }
  interface SyncRefundResponse {
      /** Created/updated refund. */
      refund?: Refund;
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
   * Creates a refund.
   * Refunding process starts immediately after refund entity is created.
   *
   * If amount and currency are not specified,
   * refund is created for full charge amount.
   * If amount is specified, you also need to specify currency,
   * and it should be the same as charge currency.
   *
   * The call blocks until refund status transitions from `STARTING`.
   * Read more about refund statuses in this
   * [article](<https://dev.wix.com/docs/rest/business-management/payments/refunds/introduction#lifecycle-of-a-refund>).
   * @param refund - Refund to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField refund
   * @requiredField refund.chargeId
   * @adminMethod
   * @returns The created refund.
   */
  function createRefund(refund: Refund, options?: CreateRefundOptions): Promise<Refund>;
  interface CreateRefundOptions {
      /**
       * _INTERNAL_
       * True means processing fee for the refunded charge should be returned to the merchant.
       * Applies only to Wix Payments charges.
       * `PAYMENTS.REFUND_RETURN_PROCESSING_FEE` permission is required.
       * @internal
       */
      returnProcessingFee?: boolean | null;
      /**
       * Optional parameter used to prevent unintended refunds.
       * Used to check previously refunded amount according to the client
       * against the amount from server perspective.
       * If they don't match, error with code `PREVIOUSLY_REFUNDED_AMOUNT_MISMATCH` is returned.
       *
       * Read more about preventing unintended refunds in this
       * [article](<https://dev.wix.com/docs/rest/business-management/payments/refunds/introduction#preventing-unintended-refunds>).
       */
      previouslyRefundedAmount?: string | null;
  }
  /**
   * Retrieves a refund.
   * @param refundId - ID of the refund to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField refundId
   * @adminMethod
   * @returns The requested refund.
   */
  function getRefund(refundId: string): Promise<Refund>;
  /**
   * Retrieves a list of refunds, given the provided [paging, filtering, and sorting][1].
   *
   * Up to 1,000 Refunds can be returned per request.
   *
   * To learn how to query refunds, see [API Query Language][2].
   *
   * [1]: https://dev.wix.com/api/rest/getting-started/sorting-and-paging
   * [2]: https://dev.wix.com/api/rest/getting-started/api-query-language
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryRefunds(): RefundsQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface RefundsQueryResult extends QueryCursorResult {
      items: Refund[];
      query: RefundsQueryBuilder;
      next: () => Promise<RefundsQueryResult>;
      prev: () => Promise<RefundsQueryResult>;
  }
  interface RefundsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: 'chargeId', value: any) => RefundsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => RefundsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => RefundsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<RefundsQueryResult>;
  }
  /**
   * Updates extended fields of a refund without incrementing revision.
   * @param _id - ID of the entity to update.
   * @param namespace - Identifier for the app whose extended fields are being updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField namespace
   * @requiredField options
   * @requiredField options.namespaceData
   * @adminMethod
   */
  function updateExtendedFields(_id: string, namespace: string, options: UpdateExtendedFieldsOptions): Promise<UpdateExtendedFieldsResponse>;
  interface UpdateExtendedFieldsOptions {
      /** Data to update. Structured according to the [schema](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields#json-schema-for-extended-fields) defined when the extended fields were configured. */
      namespaceData: Record<string, any> | null;
  }
  /**
   * Calculates refundability for a charge.
   *
   * Read more about refundability in this
   * [article](<https://dev.wix.com/docs/rest/business-management/payments/refunds/introduction#refundability>).
   * @param chargeId - ID of the charge for which refundability will be calculated.
   * @internal
   * @documentationMaturity preview
   * @requiredField chargeId
   * @adminMethod
   */
  function getRefundability(chargeId: string): Promise<GetRefundabilityResponse>;
  
  type paymentsRefundsV1Refund_universal_d_Refund = Refund;
  type paymentsRefundsV1Refund_universal_d_ExtendedFields = ExtendedFields;
  type paymentsRefundsV1Refund_universal_d_Status = Status;
  const paymentsRefundsV1Refund_universal_d_Status: typeof Status;
  type paymentsRefundsV1Refund_universal_d_Initiator = Initiator;
  const paymentsRefundsV1Refund_universal_d_Initiator: typeof Initiator;
  type paymentsRefundsV1Refund_universal_d_StatusInfo = StatusInfo;
  type paymentsRefundsV1Refund_universal_d_CreateRefundRequest = CreateRefundRequest;
  type paymentsRefundsV1Refund_universal_d_CreateRefundResponse = CreateRefundResponse;
  type paymentsRefundsV1Refund_universal_d_GetRefundRequest = GetRefundRequest;
  type paymentsRefundsV1Refund_universal_d_GetRefundResponse = GetRefundResponse;
  type paymentsRefundsV1Refund_universal_d_QueryRefundsRequest = QueryRefundsRequest;
  type paymentsRefundsV1Refund_universal_d_CursorQuery = CursorQuery;
  type paymentsRefundsV1Refund_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type paymentsRefundsV1Refund_universal_d_Sorting = Sorting;
  type paymentsRefundsV1Refund_universal_d_SortOrder = SortOrder;
  const paymentsRefundsV1Refund_universal_d_SortOrder: typeof SortOrder;
  type paymentsRefundsV1Refund_universal_d_CursorPaging = CursorPaging;
  type paymentsRefundsV1Refund_universal_d_QueryRefundsResponse = QueryRefundsResponse;
  type paymentsRefundsV1Refund_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type paymentsRefundsV1Refund_universal_d_Cursors = Cursors;
  type paymentsRefundsV1Refund_universal_d_UpdateExtendedFieldsRequest = UpdateExtendedFieldsRequest;
  type paymentsRefundsV1Refund_universal_d_UpdateExtendedFieldsResponse = UpdateExtendedFieldsResponse;
  type paymentsRefundsV1Refund_universal_d_GetRefundabilityRequest = GetRefundabilityRequest;
  type paymentsRefundsV1Refund_universal_d_GetRefundabilityResponse = GetRefundabilityResponse;
  type paymentsRefundsV1Refund_universal_d_Refundability = Refundability;
  type paymentsRefundsV1Refund_universal_d_RefundabilityDetailsOneOf = RefundabilityDetailsOneOf;
  type paymentsRefundsV1Refund_universal_d_RefundOptions = RefundOptions;
  type paymentsRefundsV1Refund_universal_d_Rejection = Rejection;
  type paymentsRefundsV1Refund_universal_d_RejectionReason = RejectionReason;
  const paymentsRefundsV1Refund_universal_d_RejectionReason: typeof RejectionReason;
  type paymentsRefundsV1Refund_universal_d_SyncRefundRequest = SyncRefundRequest;
  type paymentsRefundsV1Refund_universal_d_SyncRefundResponse = SyncRefundResponse;
  type paymentsRefundsV1Refund_universal_d_DomainEvent = DomainEvent;
  type paymentsRefundsV1Refund_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type paymentsRefundsV1Refund_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type paymentsRefundsV1Refund_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type paymentsRefundsV1Refund_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type paymentsRefundsV1Refund_universal_d_ActionEvent = ActionEvent;
  type paymentsRefundsV1Refund_universal_d_MessageEnvelope = MessageEnvelope;
  type paymentsRefundsV1Refund_universal_d_IdentificationData = IdentificationData;
  type paymentsRefundsV1Refund_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type paymentsRefundsV1Refund_universal_d_WebhookIdentityType = WebhookIdentityType;
  const paymentsRefundsV1Refund_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const paymentsRefundsV1Refund_universal_d_createRefund: typeof createRefund;
  type paymentsRefundsV1Refund_universal_d_CreateRefundOptions = CreateRefundOptions;
  const paymentsRefundsV1Refund_universal_d_getRefund: typeof getRefund;
  const paymentsRefundsV1Refund_universal_d_queryRefunds: typeof queryRefunds;
  type paymentsRefundsV1Refund_universal_d_RefundsQueryResult = RefundsQueryResult;
  type paymentsRefundsV1Refund_universal_d_RefundsQueryBuilder = RefundsQueryBuilder;
  const paymentsRefundsV1Refund_universal_d_updateExtendedFields: typeof updateExtendedFields;
  type paymentsRefundsV1Refund_universal_d_UpdateExtendedFieldsOptions = UpdateExtendedFieldsOptions;
  const paymentsRefundsV1Refund_universal_d_getRefundability: typeof getRefundability;
  namespace paymentsRefundsV1Refund_universal_d {
    export {
      paymentsRefundsV1Refund_universal_d_Refund as Refund,
      paymentsRefundsV1Refund_universal_d_ExtendedFields as ExtendedFields,
      paymentsRefundsV1Refund_universal_d_Status as Status,
      paymentsRefundsV1Refund_universal_d_Initiator as Initiator,
      paymentsRefundsV1Refund_universal_d_StatusInfo as StatusInfo,
      paymentsRefundsV1Refund_universal_d_CreateRefundRequest as CreateRefundRequest,
      paymentsRefundsV1Refund_universal_d_CreateRefundResponse as CreateRefundResponse,
      paymentsRefundsV1Refund_universal_d_GetRefundRequest as GetRefundRequest,
      paymentsRefundsV1Refund_universal_d_GetRefundResponse as GetRefundResponse,
      paymentsRefundsV1Refund_universal_d_QueryRefundsRequest as QueryRefundsRequest,
      paymentsRefundsV1Refund_universal_d_CursorQuery as CursorQuery,
      paymentsRefundsV1Refund_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      paymentsRefundsV1Refund_universal_d_Sorting as Sorting,
      paymentsRefundsV1Refund_universal_d_SortOrder as SortOrder,
      paymentsRefundsV1Refund_universal_d_CursorPaging as CursorPaging,
      paymentsRefundsV1Refund_universal_d_QueryRefundsResponse as QueryRefundsResponse,
      paymentsRefundsV1Refund_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      paymentsRefundsV1Refund_universal_d_Cursors as Cursors,
      paymentsRefundsV1Refund_universal_d_UpdateExtendedFieldsRequest as UpdateExtendedFieldsRequest,
      paymentsRefundsV1Refund_universal_d_UpdateExtendedFieldsResponse as UpdateExtendedFieldsResponse,
      paymentsRefundsV1Refund_universal_d_GetRefundabilityRequest as GetRefundabilityRequest,
      paymentsRefundsV1Refund_universal_d_GetRefundabilityResponse as GetRefundabilityResponse,
      paymentsRefundsV1Refund_universal_d_Refundability as Refundability,
      paymentsRefundsV1Refund_universal_d_RefundabilityDetailsOneOf as RefundabilityDetailsOneOf,
      paymentsRefundsV1Refund_universal_d_RefundOptions as RefundOptions,
      paymentsRefundsV1Refund_universal_d_Rejection as Rejection,
      paymentsRefundsV1Refund_universal_d_RejectionReason as RejectionReason,
      paymentsRefundsV1Refund_universal_d_SyncRefundRequest as SyncRefundRequest,
      paymentsRefundsV1Refund_universal_d_SyncRefundResponse as SyncRefundResponse,
      paymentsRefundsV1Refund_universal_d_DomainEvent as DomainEvent,
      paymentsRefundsV1Refund_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      paymentsRefundsV1Refund_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      paymentsRefundsV1Refund_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      paymentsRefundsV1Refund_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      paymentsRefundsV1Refund_universal_d_ActionEvent as ActionEvent,
      paymentsRefundsV1Refund_universal_d_MessageEnvelope as MessageEnvelope,
      paymentsRefundsV1Refund_universal_d_IdentificationData as IdentificationData,
      paymentsRefundsV1Refund_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      paymentsRefundsV1Refund_universal_d_WebhookIdentityType as WebhookIdentityType,
      paymentsRefundsV1Refund_universal_d_createRefund as createRefund,
      paymentsRefundsV1Refund_universal_d_CreateRefundOptions as CreateRefundOptions,
      paymentsRefundsV1Refund_universal_d_getRefund as getRefund,
      paymentsRefundsV1Refund_universal_d_queryRefunds as queryRefunds,
      paymentsRefundsV1Refund_universal_d_RefundsQueryResult as RefundsQueryResult,
      paymentsRefundsV1Refund_universal_d_RefundsQueryBuilder as RefundsQueryBuilder,
      paymentsRefundsV1Refund_universal_d_updateExtendedFields as updateExtendedFields,
      paymentsRefundsV1Refund_universal_d_UpdateExtendedFieldsOptions as UpdateExtendedFieldsOptions,
      paymentsRefundsV1Refund_universal_d_getRefundability as getRefundability,
    };
  }
  
  export { paymentsRefundsV1Refund_universal_d as refunds };
}
