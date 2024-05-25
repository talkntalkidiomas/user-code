declare module "wix-sender-emails-backend" {
  interface SenderEmail {
      /**
       * Unique identifier of the sender email item.
       * @readonly
       */
      _id?: string | null;
      /**
       * The time this sender email was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * The time this sender email was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Email address. */
      emailAddress?: string;
      /**
       * Is this sender email verified or not.
       * @readonly
       */
      verified?: boolean;
      /**
       * Verification code (returned only if asked explicitly on request AND when caller has "PROMOTE.SENDER_EMAILS_READ_VERIFICATION_CODE" permission).
       * @internal
       * @readonly
       */
      verificationCode?: string | null;
      /** Data Extensions */
      extendedFields?: ExtendedFields;
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
  interface GetSenderEmailRequest {
      /** ID of the sender email to retrieve. */
      senderEmailId: string;
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  enum RequestedFields {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      VERIFICATION_CODE = "VERIFICATION_CODE"
  }
  interface GetSenderEmailResponse {
      /** The requested sender email. */
      senderEmail?: SenderEmail;
  }
  interface ListSenderEmailsRequest {
      /** Paging parameters. */
      paging?: CursorPaging;
      /** Email address filter. */
      emailAddress?: string | null;
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  interface CursorPaging {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       * You can get the relevant cursor token from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface ListSenderEmailsResponse {
      /** Paging metadata. */
      pagingMetadata?: CursorPagingMetadata;
      /** List of sender emails. */
      senderEmails?: SenderEmail[];
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
  interface GetOrCreateSenderEmailRequest {
      /** Requested sender email. */
      emailAddress: string;
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  interface GetOrCreateSenderEmailResponse {
      /** The returned sender email. */
      senderEmail?: SenderEmail;
  }
  interface CreateSenderEmailRequest {
      /** Sender email to be created. */
      senderEmail: SenderEmail;
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  interface CreateSenderEmailResponse {
      /** The created sender email. */
      senderEmail?: SenderEmail;
  }
  interface DeleteSenderEmailRequest {
      /** ID of the sender email to delete. */
      senderEmailId: string;
  }
  interface DeleteSenderEmailResponse {
  }
  interface SendVerificationCodeRequest {
      /** ID of the sender email to send the code for. */
      senderEmailId: string;
  }
  interface SendVerificationCodeResponse {
  }
  interface VerifySenderEmailRequest {
      /** ID of the sender email to verify. */
      senderEmailId: string;
      /** Verification code from received email message. */
      verificationCode: string;
  }
  interface VerifySenderEmailResponse {
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
   * Get sender email by id.
   * @param senderEmailId - ID of the sender email to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField senderEmailId
   * @adminMethod
   * @returns The requested sender email.
   */
  function getSenderEmail(senderEmailId: string, options?: GetSenderEmailOptions): Promise<SenderEmail>;
  interface GetSenderEmailOptions {
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  /**
   * List sender emails.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listSenderEmails(options?: ListSenderEmailsOptions): Promise<ListSenderEmailsResponse>;
  interface ListSenderEmailsOptions {
      /** Paging parameters. */
      paging?: CursorPaging;
      /** Email address filter. */
      emailAddress?: string | null;
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  /**
   * Retrieve existing sender email by email address or create a new one.
   * @param emailAddress - Requested sender email.
   * @internal
   * @documentationMaturity preview
   * @requiredField emailAddress
   * @adminMethod
   */
  function getOrCreateSenderEmail(emailAddress: string, options?: GetOrCreateSenderEmailOptions): Promise<GetOrCreateSenderEmailResponse>;
  interface GetOrCreateSenderEmailOptions {
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  /**
   * Create new sender email.
   * @param senderEmail - Sender email to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField senderEmail
   * @requiredField senderEmail.emailAddress
   * @adminMethod
   * @returns The created sender email.
   */
  function createSenderEmail(senderEmail: SenderEmail, options?: CreateSenderEmailOptions): Promise<SenderEmail>;
  interface CreateSenderEmailOptions {
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  /**
   * Delete existing sender email.
   * @param senderEmailId - ID of the sender email to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField senderEmailId
   * @adminMethod
   */
  function deleteSenderEmail(senderEmailId: string): Promise<void>;
  /**
   * Send the verification code via email.
   * @param senderEmailId - ID of the sender email to send the code for.
   * @internal
   * @documentationMaturity preview
   * @requiredField senderEmailId
   * @adminMethod
   */
  function sendVerificationCode(senderEmailId: string): Promise<void>;
  /**
   * Verify sender email.
   * @param senderEmailId - ID of the sender email to verify.
   * @param verificationCode - Verification code from received email message.
   * @internal
   * @documentationMaturity preview
   * @requiredField senderEmailId
   * @requiredField verificationCode
   * @adminMethod
   */
  function verifySenderEmail(senderEmailId: string, verificationCode: string): Promise<void>;
  
  type promoteV1SenderEmail_universal_d_SenderEmail = SenderEmail;
  type promoteV1SenderEmail_universal_d_ExtendedFields = ExtendedFields;
  type promoteV1SenderEmail_universal_d_GetSenderEmailRequest = GetSenderEmailRequest;
  type promoteV1SenderEmail_universal_d_RequestedFields = RequestedFields;
  const promoteV1SenderEmail_universal_d_RequestedFields: typeof RequestedFields;
  type promoteV1SenderEmail_universal_d_GetSenderEmailResponse = GetSenderEmailResponse;
  type promoteV1SenderEmail_universal_d_ListSenderEmailsRequest = ListSenderEmailsRequest;
  type promoteV1SenderEmail_universal_d_CursorPaging = CursorPaging;
  type promoteV1SenderEmail_universal_d_ListSenderEmailsResponse = ListSenderEmailsResponse;
  type promoteV1SenderEmail_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type promoteV1SenderEmail_universal_d_Cursors = Cursors;
  type promoteV1SenderEmail_universal_d_GetOrCreateSenderEmailRequest = GetOrCreateSenderEmailRequest;
  type promoteV1SenderEmail_universal_d_GetOrCreateSenderEmailResponse = GetOrCreateSenderEmailResponse;
  type promoteV1SenderEmail_universal_d_CreateSenderEmailRequest = CreateSenderEmailRequest;
  type promoteV1SenderEmail_universal_d_CreateSenderEmailResponse = CreateSenderEmailResponse;
  type promoteV1SenderEmail_universal_d_DeleteSenderEmailRequest = DeleteSenderEmailRequest;
  type promoteV1SenderEmail_universal_d_DeleteSenderEmailResponse = DeleteSenderEmailResponse;
  type promoteV1SenderEmail_universal_d_SendVerificationCodeRequest = SendVerificationCodeRequest;
  type promoteV1SenderEmail_universal_d_SendVerificationCodeResponse = SendVerificationCodeResponse;
  type promoteV1SenderEmail_universal_d_VerifySenderEmailRequest = VerifySenderEmailRequest;
  type promoteV1SenderEmail_universal_d_VerifySenderEmailResponse = VerifySenderEmailResponse;
  type promoteV1SenderEmail_universal_d_DomainEvent = DomainEvent;
  type promoteV1SenderEmail_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type promoteV1SenderEmail_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type promoteV1SenderEmail_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type promoteV1SenderEmail_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type promoteV1SenderEmail_universal_d_ActionEvent = ActionEvent;
  const promoteV1SenderEmail_universal_d_getSenderEmail: typeof getSenderEmail;
  type promoteV1SenderEmail_universal_d_GetSenderEmailOptions = GetSenderEmailOptions;
  const promoteV1SenderEmail_universal_d_listSenderEmails: typeof listSenderEmails;
  type promoteV1SenderEmail_universal_d_ListSenderEmailsOptions = ListSenderEmailsOptions;
  const promoteV1SenderEmail_universal_d_getOrCreateSenderEmail: typeof getOrCreateSenderEmail;
  type promoteV1SenderEmail_universal_d_GetOrCreateSenderEmailOptions = GetOrCreateSenderEmailOptions;
  const promoteV1SenderEmail_universal_d_createSenderEmail: typeof createSenderEmail;
  type promoteV1SenderEmail_universal_d_CreateSenderEmailOptions = CreateSenderEmailOptions;
  const promoteV1SenderEmail_universal_d_deleteSenderEmail: typeof deleteSenderEmail;
  const promoteV1SenderEmail_universal_d_sendVerificationCode: typeof sendVerificationCode;
  const promoteV1SenderEmail_universal_d_verifySenderEmail: typeof verifySenderEmail;
  namespace promoteV1SenderEmail_universal_d {
    export {
      promoteV1SenderEmail_universal_d_SenderEmail as SenderEmail,
      promoteV1SenderEmail_universal_d_ExtendedFields as ExtendedFields,
      promoteV1SenderEmail_universal_d_GetSenderEmailRequest as GetSenderEmailRequest,
      promoteV1SenderEmail_universal_d_RequestedFields as RequestedFields,
      promoteV1SenderEmail_universal_d_GetSenderEmailResponse as GetSenderEmailResponse,
      promoteV1SenderEmail_universal_d_ListSenderEmailsRequest as ListSenderEmailsRequest,
      promoteV1SenderEmail_universal_d_CursorPaging as CursorPaging,
      promoteV1SenderEmail_universal_d_ListSenderEmailsResponse as ListSenderEmailsResponse,
      promoteV1SenderEmail_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      promoteV1SenderEmail_universal_d_Cursors as Cursors,
      promoteV1SenderEmail_universal_d_GetOrCreateSenderEmailRequest as GetOrCreateSenderEmailRequest,
      promoteV1SenderEmail_universal_d_GetOrCreateSenderEmailResponse as GetOrCreateSenderEmailResponse,
      promoteV1SenderEmail_universal_d_CreateSenderEmailRequest as CreateSenderEmailRequest,
      promoteV1SenderEmail_universal_d_CreateSenderEmailResponse as CreateSenderEmailResponse,
      promoteV1SenderEmail_universal_d_DeleteSenderEmailRequest as DeleteSenderEmailRequest,
      promoteV1SenderEmail_universal_d_DeleteSenderEmailResponse as DeleteSenderEmailResponse,
      promoteV1SenderEmail_universal_d_SendVerificationCodeRequest as SendVerificationCodeRequest,
      promoteV1SenderEmail_universal_d_SendVerificationCodeResponse as SendVerificationCodeResponse,
      promoteV1SenderEmail_universal_d_VerifySenderEmailRequest as VerifySenderEmailRequest,
      promoteV1SenderEmail_universal_d_VerifySenderEmailResponse as VerifySenderEmailResponse,
      promoteV1SenderEmail_universal_d_DomainEvent as DomainEvent,
      promoteV1SenderEmail_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      promoteV1SenderEmail_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      promoteV1SenderEmail_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      promoteV1SenderEmail_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      promoteV1SenderEmail_universal_d_ActionEvent as ActionEvent,
      promoteV1SenderEmail_universal_d_getSenderEmail as getSenderEmail,
      promoteV1SenderEmail_universal_d_GetSenderEmailOptions as GetSenderEmailOptions,
      promoteV1SenderEmail_universal_d_listSenderEmails as listSenderEmails,
      promoteV1SenderEmail_universal_d_ListSenderEmailsOptions as ListSenderEmailsOptions,
      promoteV1SenderEmail_universal_d_getOrCreateSenderEmail as getOrCreateSenderEmail,
      promoteV1SenderEmail_universal_d_GetOrCreateSenderEmailOptions as GetOrCreateSenderEmailOptions,
      promoteV1SenderEmail_universal_d_createSenderEmail as createSenderEmail,
      promoteV1SenderEmail_universal_d_CreateSenderEmailOptions as CreateSenderEmailOptions,
      promoteV1SenderEmail_universal_d_deleteSenderEmail as deleteSenderEmail,
      promoteV1SenderEmail_universal_d_sendVerificationCode as sendVerificationCode,
      promoteV1SenderEmail_universal_d_verifySenderEmail as verifySenderEmail,
    };
  }
  
  export { promoteV1SenderEmail_universal_d as senderEmails };
}
