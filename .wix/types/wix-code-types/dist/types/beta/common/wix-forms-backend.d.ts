declare module "wix-forms-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface FormSubmission {
      /**
       * Submission id.
       * @readonly
       */
      _id?: string | null;
      /** Id of a form to which submission belongs. */
      formId?: string;
      /**
       * Form namespace to which submissions belong.
       * @readonly
       */
      namespace?: string;
      /** Status of the submission. */
      status?: SubmissionStatus;
      /** Submission values where key is a target of a form field and value is a submissions for the given field. */
      submissions?: Record<string, any>;
      /**
       * Date of creation.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date of last update.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Renamed to submitter
       * @internal
       * @readonly
       */
      owner?: Owner;
      /**
       * Identification of submission creator
       * @readonly
       */
      submitter?: Submitter;
      /** Flag identifying if submission was read by user */
      seen?: boolean;
  }
  enum SubmissionStatus {
      UNDEFINED = "UNDEFINED",
      PENDING = "PENDING",
      CONFIRMED = "CONFIRMED"
  }
  interface Owner extends OwnerOwnerOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Service ID. */
      serviceId?: string | null;
      /** User ID. */
      userId?: string | null;
      /** External app id */
      externalAppId?: string | null;
  }
  /** @oneof */
  interface OwnerOwnerOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Service ID. */
      serviceId?: string | null;
      /** User ID. */
      userId?: string | null;
      /** External app id */
      externalAppId?: string | null;
  }
  interface Submitter extends SubmitterSubmitterOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Service ID. */
      serviceId?: string | null;
      /** User ID. */
      userId?: string | null;
      /** External app id */
      externalAppId?: string | null;
  }
  /** @oneof */
  interface SubmitterSubmitterOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Service ID. */
      serviceId?: string | null;
      /** User ID. */
      userId?: string | null;
      /** External app id */
      externalAppId?: string | null;
  }
  interface DomainEvent$1 extends DomainEventBodyOneOf$1 {
      createdEvent?: EntityCreatedEvent$1;
      updatedEvent?: EntityUpdatedEvent$1;
      deletedEvent?: EntityDeletedEvent$1;
      actionEvent?: ActionEvent$1;
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
      /** random GUID so clients can tell if event was already handled */
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
      /**
       * Assuming that all messages including Actions have id
       * Example: The id of the specific order, the id of a specific campaign
       */
      entityId?: string;
      /** The time of the event. Useful if there was a delay in dispatching */
      eventTime?: Date;
      /**
       * A field that should be set if this event was triggered by an anonymize request.
       * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
       * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
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
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
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
      entityUpdates?: Record<string, any>;
  }
  interface EntityDeletedEvent$1 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
  }
  interface ActionEvent$1 {
      bodyAsJson?: string;
  }
  interface ExtendedFieldsUpdatedEvent {
      currentEntityAsJson?: string;
  }
  interface Empty$1 {
  }
  interface UpsertContactFromSubmissionRequest {
      /** Submission from which contact needs to be upserted. */
      submissionId: string;
      /** Optional contact id to which submission should be mapped. */
      contactId?: string | null;
      /** Indicates contact has verified primary email. */
      emailVerified?: boolean;
  }
  interface UpsertContactFromSubmissionResponse {
      /** Submit contact response. */
      submitContactResponse?: SubmitContactResponse;
  }
  interface SubmitContactResponse {
      /** ID of the contact that was found or created. */
      contactId?: string;
      /**
       * Identity type of the returned contact.
       *
       * - `CONTACT`: The returned contact ID belongs to a new or existing contact.
       * - `MEMBER`: The returned contact ID belongs to the currently logged-in site member.
       * - `NOT_AUTHENTICATED_MEMBER`: The returned contact ID belongs to a site member who is not currently logged in.
       */
      identityType?: IdentityType;
      /**
       * Indicates whether the contact was just created or already existed.
       *
       * If the contact was just created, returns `true`.
       * If it already existed, returns `false`.
       */
      newContact?: boolean;
  }
  enum IdentityType {
      UNKNOWN = "UNKNOWN",
      /** Existing or new contact */
      CONTACT = "CONTACT",
      /** Member is logged in, matching logic skipped */
      MEMBER = "MEMBER",
      /** Matching contact is a member, Merge logic won't be applied */
      NOT_AUTHENTICATED_MEMBER = "NOT_AUTHENTICATED_MEMBER"
  }
  interface SubmissionContactMapped {
      /**
       * Mapped upserted contact ID.
       * @readonly
       */
      contactId?: string;
      /**
       * Mapped contact emails.
       * @readonly
       */
      emails?: string[];
      /** Identifies the namespace that the submission's form belongs to. */
      namespace?: string;
  }
  interface CreateSubmissionRequest {
      /** Submission to be created. */
      submission: FormSubmission;
      /** Captcha token */
      captchaToken?: string | null;
  }
  interface CreateSubmissionResponse {
      /** The created submission. */
      submission?: FormSubmission;
  }
  interface CreateSubmissionByOwnerRequest {
      /** Submission to be created. */
      submission: FormSubmission;
  }
  interface CreateSubmissionByOwnerResponse {
      /** The created submission. */
      submission?: FormSubmission;
  }
  interface CreateSubmissionBySubmitterRequest {
      /** Submission to be created. */
      submission: FormSubmission;
  }
  interface CreateSubmissionBySubmitterResponse {
      /** The created submission. */
      submission?: FormSubmission;
  }
  interface GetSubmissionRequest {
      /** Id of the submission to retrieve. */
      submissionId: string;
  }
  interface GetSubmissionResponse {
      /** The retrieved submission. */
      submission?: FormSubmission;
  }
  interface UpdateSubmissionRequest {
      /** Submission to be updated, may be partial. */
      submission: FormSubmission;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateSubmissionResponse {
      /** The updated submission. */
      submission?: FormSubmission;
  }
  interface ConfirmSubmissionRequest {
      /** Submission id. */
      submissionId: string;
  }
  interface ConfirmSubmissionResponse {
      /** Confirmed submission. */
      submission?: FormSubmission;
  }
  interface DeleteSubmissionRequest {
      /** Id of the submission to delete. */
      submissionId: string;
  }
  interface DeleteSubmissionResponse {
  }
  interface QuerySubmissionRequest {
      /** WQL expression. */
      query: CursorQuery$1;
      /**
       * Renamed to only_your_own;
       * @internal
       */
      onlyOwn?: boolean;
      /** Return only own submissions. */
      onlyYourOwn?: boolean;
  }
  interface CursorQuery$1 extends CursorQueryPagingMethodOneOf$1 {
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
      sort?: Sorting$1[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$1 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
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
  interface QuerySubmissionResponse {
      /** The retrieved Submissions. */
      submissions?: FormSubmission[];
      /** Paging metadata. */
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
  interface CountSubmissionsRequest {
      /** Form IDs. */
      formIds: string[];
      /** Identifies the namespace that the forms belong to. */
      namespace: string;
  }
  interface CountSubmissionsResponse {
      /** Forms submissions count. */
      formsSubmissionsCount?: FormSubmissionsCount[];
  }
  interface FormSubmissionsCount {
      /** Form ID. */
      formId?: string;
      /** Total form submissions count. */
      totalCount?: number;
      /** Unseen form submissions count. */
      unseenCount?: number;
  }
  interface GetMediaUploadURLRequest {
      /** Form id. */
      formId: string;
      /** Name of file to upload. */
      filename: string;
      /** Mime type of file to upload. */
      mimeType: string;
  }
  interface GetMediaUploadURLResponse {
      /** Url to upload file. */
      uploadUrl?: string;
  }
  interface BulkMarkSubmissionsAsSeenRequest {
      /** Submission ids to mark as seen. */
      ids: string[];
      /** Submissions form id. */
      formId: string;
  }
  interface BulkMarkSubmissionsAsSeenResponse {
  }
  interface Task {
      key?: TaskKey;
      executeAt?: Date;
      payload?: string | null;
  }
  interface TaskKey {
      appId?: string;
      instanceId?: string;
      subjectId?: string | null;
  }
  interface TaskAction extends TaskActionActionOneOf {
      complete?: Complete;
      cancel?: Cancel;
      reschedule?: Reschedule;
  }
  /** @oneof */
  interface TaskActionActionOneOf {
      complete?: Complete;
      cancel?: Cancel;
      reschedule?: Reschedule;
  }
  interface Complete {
  }
  interface Cancel {
  }
  interface Reschedule {
      executeAt?: Date;
      payload?: string | null;
  }
  /**
   * Upserts contact from submission.
   * @param submissionId - Submission from which contact needs to be upserted.
   * @internal
   * @documentationMaturity preview
   * @requiredField submissionId
   */
  function upsertContactFromSubmission(submissionId: string, options?: UpsertContactFromSubmissionOptions): Promise<UpsertContactFromSubmissionResponse>;
  interface UpsertContactFromSubmissionOptions {
      /** Optional contact id to which submission should be mapped. */
      contactId?: string | null;
      /** Indicates contact has verified primary email. */
      emailVerified?: boolean;
  }
  /**
   * Creates a new submission.
   * @param submission - Submission to be created.
   * @public
   * @documentationMaturity preview
   * @requiredField submission
   * @requiredField submission.formId
   */
  function createSubmission(submission: FormSubmission, options?: CreateSubmissionOptions): Promise<CreateSubmissionResponse>;
  interface CreateSubmissionOptions {
      /** Captcha token */
      captchaToken?: string | null;
  }
  /**
   * Creates a new submission with specified submitter.
   * Internal, migration only.
   * @param submission - Submission to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField submission
   * @requiredField submission.formId
   * @requiredField submission.submitter
   * @returns The created submission.
   */
  function createSubmissionBySubmitter(submission: FormSubmission): Promise<FormSubmission>;
  /**
   * Gets a submission by id.
   * @param submissionId - Id of the submission to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField submissionId
   * @returns The retrieved submission.
   */
  function getSubmission(submissionId: string): Promise<FormSubmission>;
  /**
   * Updates a submission, supports partial update.
   * You need to pass the latest 'revision' for a successful update.
   * @param _id - Submission id.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField submission
   * @requiredField submission.formId
   * @requiredField submission.revision
   * @returns The updated submission.
   */
  function updateSubmission(_id: string | null, submission: UpdateSubmission, options?: UpdateSubmissionOptions): Promise<FormSubmission>;
  interface UpdateSubmission {
      /**
       * Submission id.
       * @readonly
       */
      _id?: string | null;
      /** Id of a form to which submission belongs. */
      formId?: string;
      /**
       * Form namespace to which submissions belong.
       * @readonly
       */
      namespace?: string;
      /** Status of the submission. */
      status?: SubmissionStatus;
      /** Submission values where key is a target of a form field and value is a submissions for the given field. */
      submissions?: Record<string, any>;
      /**
       * Date of creation.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date of last update.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Renamed to submitter
       * @internal
       * @readonly
       */
      owner?: Owner;
      /**
       * Identification of submission creator
       * @readonly
       */
      submitter?: Submitter;
      /** Flag identifying if submission was read by user */
      seen?: boolean;
  }
  interface UpdateSubmissionOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Change submission status to 'CONFIRMED'
   * @param submissionId - Submission id.
   * @public
   * @documentationMaturity preview
   * @requiredField submissionId
   */
  function confirmSubmission(submissionId: string): Promise<ConfirmSubmissionResponse>;
  /**
   * Deletes a submission.
   * @param submissionId - Id of the submission to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField submissionId
   */
  function deleteSubmission(submissionId: string): Promise<void>;
  /**
   * Query submissions using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * @public
   * @documentationMaturity preview
   */
  function querySubmission(options?: QuerySubmissionOptions): SubmissionsQueryBuilder;
  interface QuerySubmissionOptions {
      /**
       * Renamed to only_your_own;
       * @internal
       */
      onlyOwn?: boolean | undefined;
      /** Return only own submissions. */
      onlyYourOwn?: boolean | undefined;
  }
  interface QueryCursorResult$1 {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface SubmissionsQueryResult extends QueryCursorResult$1 {
      items: FormSubmission[];
      query: SubmissionsQueryBuilder;
      next: () => Promise<SubmissionsQueryResult>;
      prev: () => Promise<SubmissionsQueryResult>;
  }
  interface SubmissionsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'formId' | 'namespace' | 'status' | '_createdDate' | '_updatedDate', value: any) => SubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'formId' | 'namespace' | 'status' | '_createdDate' | '_updatedDate', value: any) => SubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => SubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => SubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => SubmissionsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'formId' | 'namespace' | 'status' | '_createdDate' | '_updatedDate', value: any) => SubmissionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'formId' | 'namespace' | 'status' | '_createdDate' | '_updatedDate'>) => SubmissionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'formId' | 'namespace' | 'status' | '_createdDate' | '_updatedDate'>) => SubmissionsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => SubmissionsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => SubmissionsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<SubmissionsQueryResult>;
  }
  /**
   * Counts forms submissions.
   * @param formIds - Form IDs.
   * @public
   * @documentationMaturity preview
   * @requiredField formIds
   * @requiredField options
   * @requiredField options.namespace
   */
  function countSubmissions(formIds: string[], options: CountSubmissionsOptions): Promise<CountSubmissionsResponse>;
  interface CountSubmissionsOptions {
      /** Identifies the namespace that the forms belong to. */
      namespace: string;
  }
  /**
   * Returns url to upload media file.
   * @param formId - Form id.
   * @public
   * @documentationMaturity preview
   * @requiredField formId
   * @requiredField options
   * @requiredField options.filename
   * @requiredField options.mimeType
   */
  function getMediaUploadUrl(formId: string, options: GetMediaUploadUrlOptions): Promise<GetMediaUploadURLResponse>;
  interface GetMediaUploadUrlOptions {
      /** Name of file to upload. */
      filename: string;
      /** Mime type of file to upload. */
      mimeType: string;
  }
  /**
   * Marks submissions as seen.
   * @param ids - Submission ids to mark as seen.
   * @public
   * @documentationMaturity preview
   * @requiredField ids
   * @requiredField options
   * @requiredField options.formId
   */
  function bulkMarkSubmissionsAsSeen(ids: string[], options: BulkMarkSubmissionsAsSeenOptions): Promise<void>;
  interface BulkMarkSubmissionsAsSeenOptions {
      /** Submissions form id. */
      formId: string;
  }
  
  const formsV4Submission_universal_d___debug: typeof __debug;
  type formsV4Submission_universal_d_FormSubmission = FormSubmission;
  type formsV4Submission_universal_d_SubmissionStatus = SubmissionStatus;
  const formsV4Submission_universal_d_SubmissionStatus: typeof SubmissionStatus;
  type formsV4Submission_universal_d_Owner = Owner;
  type formsV4Submission_universal_d_OwnerOwnerOneOf = OwnerOwnerOneOf;
  type formsV4Submission_universal_d_Submitter = Submitter;
  type formsV4Submission_universal_d_SubmitterSubmitterOneOf = SubmitterSubmitterOneOf;
  type formsV4Submission_universal_d_ExtendedFieldsUpdatedEvent = ExtendedFieldsUpdatedEvent;
  type formsV4Submission_universal_d_UpsertContactFromSubmissionRequest = UpsertContactFromSubmissionRequest;
  type formsV4Submission_universal_d_UpsertContactFromSubmissionResponse = UpsertContactFromSubmissionResponse;
  type formsV4Submission_universal_d_SubmitContactResponse = SubmitContactResponse;
  type formsV4Submission_universal_d_IdentityType = IdentityType;
  const formsV4Submission_universal_d_IdentityType: typeof IdentityType;
  type formsV4Submission_universal_d_SubmissionContactMapped = SubmissionContactMapped;
  type formsV4Submission_universal_d_CreateSubmissionRequest = CreateSubmissionRequest;
  type formsV4Submission_universal_d_CreateSubmissionResponse = CreateSubmissionResponse;
  type formsV4Submission_universal_d_CreateSubmissionByOwnerRequest = CreateSubmissionByOwnerRequest;
  type formsV4Submission_universal_d_CreateSubmissionByOwnerResponse = CreateSubmissionByOwnerResponse;
  type formsV4Submission_universal_d_CreateSubmissionBySubmitterRequest = CreateSubmissionBySubmitterRequest;
  type formsV4Submission_universal_d_CreateSubmissionBySubmitterResponse = CreateSubmissionBySubmitterResponse;
  type formsV4Submission_universal_d_GetSubmissionRequest = GetSubmissionRequest;
  type formsV4Submission_universal_d_GetSubmissionResponse = GetSubmissionResponse;
  type formsV4Submission_universal_d_UpdateSubmissionRequest = UpdateSubmissionRequest;
  type formsV4Submission_universal_d_UpdateSubmissionResponse = UpdateSubmissionResponse;
  type formsV4Submission_universal_d_ConfirmSubmissionRequest = ConfirmSubmissionRequest;
  type formsV4Submission_universal_d_ConfirmSubmissionResponse = ConfirmSubmissionResponse;
  type formsV4Submission_universal_d_DeleteSubmissionRequest = DeleteSubmissionRequest;
  type formsV4Submission_universal_d_DeleteSubmissionResponse = DeleteSubmissionResponse;
  type formsV4Submission_universal_d_QuerySubmissionRequest = QuerySubmissionRequest;
  type formsV4Submission_universal_d_CursorPaging = CursorPaging;
  type formsV4Submission_universal_d_QuerySubmissionResponse = QuerySubmissionResponse;
  type formsV4Submission_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type formsV4Submission_universal_d_Cursors = Cursors;
  type formsV4Submission_universal_d_CountSubmissionsRequest = CountSubmissionsRequest;
  type formsV4Submission_universal_d_CountSubmissionsResponse = CountSubmissionsResponse;
  type formsV4Submission_universal_d_FormSubmissionsCount = FormSubmissionsCount;
  type formsV4Submission_universal_d_GetMediaUploadURLRequest = GetMediaUploadURLRequest;
  type formsV4Submission_universal_d_GetMediaUploadURLResponse = GetMediaUploadURLResponse;
  type formsV4Submission_universal_d_BulkMarkSubmissionsAsSeenRequest = BulkMarkSubmissionsAsSeenRequest;
  type formsV4Submission_universal_d_BulkMarkSubmissionsAsSeenResponse = BulkMarkSubmissionsAsSeenResponse;
  type formsV4Submission_universal_d_Task = Task;
  type formsV4Submission_universal_d_TaskKey = TaskKey;
  type formsV4Submission_universal_d_TaskAction = TaskAction;
  type formsV4Submission_universal_d_TaskActionActionOneOf = TaskActionActionOneOf;
  type formsV4Submission_universal_d_Complete = Complete;
  type formsV4Submission_universal_d_Cancel = Cancel;
  type formsV4Submission_universal_d_Reschedule = Reschedule;
  const formsV4Submission_universal_d_upsertContactFromSubmission: typeof upsertContactFromSubmission;
  type formsV4Submission_universal_d_UpsertContactFromSubmissionOptions = UpsertContactFromSubmissionOptions;
  const formsV4Submission_universal_d_createSubmission: typeof createSubmission;
  type formsV4Submission_universal_d_CreateSubmissionOptions = CreateSubmissionOptions;
  const formsV4Submission_universal_d_createSubmissionBySubmitter: typeof createSubmissionBySubmitter;
  const formsV4Submission_universal_d_getSubmission: typeof getSubmission;
  const formsV4Submission_universal_d_updateSubmission: typeof updateSubmission;
  type formsV4Submission_universal_d_UpdateSubmission = UpdateSubmission;
  type formsV4Submission_universal_d_UpdateSubmissionOptions = UpdateSubmissionOptions;
  const formsV4Submission_universal_d_confirmSubmission: typeof confirmSubmission;
  const formsV4Submission_universal_d_deleteSubmission: typeof deleteSubmission;
  const formsV4Submission_universal_d_querySubmission: typeof querySubmission;
  type formsV4Submission_universal_d_QuerySubmissionOptions = QuerySubmissionOptions;
  type formsV4Submission_universal_d_SubmissionsQueryResult = SubmissionsQueryResult;
  type formsV4Submission_universal_d_SubmissionsQueryBuilder = SubmissionsQueryBuilder;
  const formsV4Submission_universal_d_countSubmissions: typeof countSubmissions;
  type formsV4Submission_universal_d_CountSubmissionsOptions = CountSubmissionsOptions;
  const formsV4Submission_universal_d_getMediaUploadUrl: typeof getMediaUploadUrl;
  type formsV4Submission_universal_d_GetMediaUploadUrlOptions = GetMediaUploadUrlOptions;
  const formsV4Submission_universal_d_bulkMarkSubmissionsAsSeen: typeof bulkMarkSubmissionsAsSeen;
  type formsV4Submission_universal_d_BulkMarkSubmissionsAsSeenOptions = BulkMarkSubmissionsAsSeenOptions;
  namespace formsV4Submission_universal_d {
    export {
      formsV4Submission_universal_d___debug as __debug,
      formsV4Submission_universal_d_FormSubmission as FormSubmission,
      formsV4Submission_universal_d_SubmissionStatus as SubmissionStatus,
      formsV4Submission_universal_d_Owner as Owner,
      formsV4Submission_universal_d_OwnerOwnerOneOf as OwnerOwnerOneOf,
      formsV4Submission_universal_d_Submitter as Submitter,
      formsV4Submission_universal_d_SubmitterSubmitterOneOf as SubmitterSubmitterOneOf,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      formsV4Submission_universal_d_ExtendedFieldsUpdatedEvent as ExtendedFieldsUpdatedEvent,
      Empty$1 as Empty,
      formsV4Submission_universal_d_UpsertContactFromSubmissionRequest as UpsertContactFromSubmissionRequest,
      formsV4Submission_universal_d_UpsertContactFromSubmissionResponse as UpsertContactFromSubmissionResponse,
      formsV4Submission_universal_d_SubmitContactResponse as SubmitContactResponse,
      formsV4Submission_universal_d_IdentityType as IdentityType,
      formsV4Submission_universal_d_SubmissionContactMapped as SubmissionContactMapped,
      formsV4Submission_universal_d_CreateSubmissionRequest as CreateSubmissionRequest,
      formsV4Submission_universal_d_CreateSubmissionResponse as CreateSubmissionResponse,
      formsV4Submission_universal_d_CreateSubmissionByOwnerRequest as CreateSubmissionByOwnerRequest,
      formsV4Submission_universal_d_CreateSubmissionByOwnerResponse as CreateSubmissionByOwnerResponse,
      formsV4Submission_universal_d_CreateSubmissionBySubmitterRequest as CreateSubmissionBySubmitterRequest,
      formsV4Submission_universal_d_CreateSubmissionBySubmitterResponse as CreateSubmissionBySubmitterResponse,
      formsV4Submission_universal_d_GetSubmissionRequest as GetSubmissionRequest,
      formsV4Submission_universal_d_GetSubmissionResponse as GetSubmissionResponse,
      formsV4Submission_universal_d_UpdateSubmissionRequest as UpdateSubmissionRequest,
      formsV4Submission_universal_d_UpdateSubmissionResponse as UpdateSubmissionResponse,
      formsV4Submission_universal_d_ConfirmSubmissionRequest as ConfirmSubmissionRequest,
      formsV4Submission_universal_d_ConfirmSubmissionResponse as ConfirmSubmissionResponse,
      formsV4Submission_universal_d_DeleteSubmissionRequest as DeleteSubmissionRequest,
      formsV4Submission_universal_d_DeleteSubmissionResponse as DeleteSubmissionResponse,
      formsV4Submission_universal_d_QuerySubmissionRequest as QuerySubmissionRequest,
      CursorQuery$1 as CursorQuery,
      CursorQueryPagingMethodOneOf$1 as CursorQueryPagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      formsV4Submission_universal_d_CursorPaging as CursorPaging,
      formsV4Submission_universal_d_QuerySubmissionResponse as QuerySubmissionResponse,
      formsV4Submission_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      formsV4Submission_universal_d_Cursors as Cursors,
      formsV4Submission_universal_d_CountSubmissionsRequest as CountSubmissionsRequest,
      formsV4Submission_universal_d_CountSubmissionsResponse as CountSubmissionsResponse,
      formsV4Submission_universal_d_FormSubmissionsCount as FormSubmissionsCount,
      formsV4Submission_universal_d_GetMediaUploadURLRequest as GetMediaUploadURLRequest,
      formsV4Submission_universal_d_GetMediaUploadURLResponse as GetMediaUploadURLResponse,
      formsV4Submission_universal_d_BulkMarkSubmissionsAsSeenRequest as BulkMarkSubmissionsAsSeenRequest,
      formsV4Submission_universal_d_BulkMarkSubmissionsAsSeenResponse as BulkMarkSubmissionsAsSeenResponse,
      formsV4Submission_universal_d_Task as Task,
      formsV4Submission_universal_d_TaskKey as TaskKey,
      formsV4Submission_universal_d_TaskAction as TaskAction,
      formsV4Submission_universal_d_TaskActionActionOneOf as TaskActionActionOneOf,
      formsV4Submission_universal_d_Complete as Complete,
      formsV4Submission_universal_d_Cancel as Cancel,
      formsV4Submission_universal_d_Reschedule as Reschedule,
      formsV4Submission_universal_d_upsertContactFromSubmission as upsertContactFromSubmission,
      formsV4Submission_universal_d_UpsertContactFromSubmissionOptions as UpsertContactFromSubmissionOptions,
      formsV4Submission_universal_d_createSubmission as createSubmission,
      formsV4Submission_universal_d_CreateSubmissionOptions as CreateSubmissionOptions,
      formsV4Submission_universal_d_createSubmissionBySubmitter as createSubmissionBySubmitter,
      formsV4Submission_universal_d_getSubmission as getSubmission,
      formsV4Submission_universal_d_updateSubmission as updateSubmission,
      formsV4Submission_universal_d_UpdateSubmission as UpdateSubmission,
      formsV4Submission_universal_d_UpdateSubmissionOptions as UpdateSubmissionOptions,
      formsV4Submission_universal_d_confirmSubmission as confirmSubmission,
      formsV4Submission_universal_d_deleteSubmission as deleteSubmission,
      formsV4Submission_universal_d_querySubmission as querySubmission,
      formsV4Submission_universal_d_QuerySubmissionOptions as QuerySubmissionOptions,
      formsV4Submission_universal_d_SubmissionsQueryResult as SubmissionsQueryResult,
      formsV4Submission_universal_d_SubmissionsQueryBuilder as SubmissionsQueryBuilder,
      formsV4Submission_universal_d_countSubmissions as countSubmissions,
      formsV4Submission_universal_d_CountSubmissionsOptions as CountSubmissionsOptions,
      formsV4Submission_universal_d_getMediaUploadUrl as getMediaUploadUrl,
      formsV4Submission_universal_d_GetMediaUploadUrlOptions as GetMediaUploadUrlOptions,
      formsV4Submission_universal_d_bulkMarkSubmissionsAsSeen as bulkMarkSubmissionsAsSeen,
      formsV4Submission_universal_d_BulkMarkSubmissionsAsSeenOptions as BulkMarkSubmissionsAsSeenOptions,
    };
  }
  
  interface Form {
      /**
       * Form ID.
       * @readonly
       */
      _id?: string | null;
      /** List of form fields that represent input elements. */
      fields?: FormField[];
      /**
       * List of form fields that represent input elements.
       * @readonly
       */
      fieldsV2?: FormFieldV2[];
      /** Defines the layout for form fields in each submission step. */
      steps?: Step[];
      /** Form rules, can be applied to layout and items properties. */
      rules?: FormRule[];
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. For an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date of creation.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date of last update.
       * @readonly
       */
      _updatedDate?: Date;
      /** Properties of the form. */
      properties?: FormProperties;
      /**
       * Fields which were soft deleted.
       * @readonly
       */
      deletedFields?: FormField[];
      /**
       * List of form fields that represent input elements.
       * @readonly
       */
      deletedFieldsV2?: FormFieldV2[];
      /**
       * Regular forms can be freely modified.
       * Extensions are copied from templates and might have restrictions.
       * @readonly
       */
      kind?: Kind;
      /**
       * Defines triggers that will be executed after the submission, for the submissions based on this schema.
       * Forms provide a set of predefined triggers that allow it to assign specific business cases to created forms.
       */
      postSubmissionTriggers?: PostSubmissionTriggers;
      /** Data extensions ExtendedFields. */
      extendedFields?: ExtendedFields;
      /** Identifies the namespace that the form belongs to. */
      namespace?: string;
      /**
       * Nested forms.
       * @internal
       * @readonly
       */
      nestedForms?: NestedForm[];
      /**
       * Media folder ID.
       * @readonly
       */
      mediaFolderId?: string | null;
      /** Rules that limit submissions on this form. */
      limitationRule?: LimitationRule;
      /**
       * Spam filter protection level.
       * Default: ADVANCED.
       */
      spamFilterProtectionLevel?: SpamFilterProtectionLevel;
      /** Required indicator properties. */
      requiredIndicatorProperties?: RequiredIndicatorProperties;
  }
  enum RequiredIndicator {
      UNKNOWN_INDICATOR = "UNKNOWN_INDICATOR",
      /** Asterisk (*). */
      ASTERISK = "ASTERISK",
      /** Text (default: "Required"). */
      TEXT = "TEXT",
      /** None. */
      NONE = "NONE"
  }
  enum RequiredIndicatorPlacement {
      UNKNOWN_PLACEMENT = "UNKNOWN_PLACEMENT",
      /** After field title. */
      AFTER_FIELD_TITLE = "AFTER_FIELD_TITLE",
      /** Before field title. */
      BEFORE_FIELD_TITLE = "BEFORE_FIELD_TITLE"
  }
  interface FormField {
      /** Item ID. */
      _id?: string;
      /** Definition of a target where the value of field belongs. */
      target?: string | null;
      /** Validation of field output value. */
      validation?: Validation;
      /** Mark the field as containing personal information. This will encrypt user data when storing it. */
      pii?: boolean;
      /** Whether the field is hidden. */
      hidden?: boolean;
      /** Field view properties. */
      view?: Record<string, any> | null;
      /** Details identifying field, which is extension of other entity */
      dataExtensionsDetails?: DataExtensionsDetails;
      /**
       * Nested form ID.
       * @internal
       */
      nestedFormId?: string | null;
      /**
       * Nested form overrides.
       * @internal
       */
      nestedFormOverrides?: NestedFormOverrides;
  }
  interface StringType extends StringTypeFormatOptionsOneOf {
      /** DATE format options */
      dateOptions?: DateTimeConstraints;
      /** DATE_TIME format options */
      dateTimeOptions?: DateTimeConstraints;
      /** TIME format options */
      timeOptions?: DateTimeConstraints;
      /** DATE_OPTIONAL_TIME format options */
      dateOptionalTimeOptions?: DateTimeConstraints;
      /** Minimum length. */
      minLength?: number | null;
      /** Maximum length. */
      maxLength?: number | null;
      /** Pattern for a regular expression match. */
      pattern?: string | null;
      /** Format of a string. */
      format?: Format;
      /** Custom error messages when validation fails. */
      errorMessages?: StringErrorMessages;
      /** List of allowed values. */
      enum?: string[] | null;
  }
  /** @oneof */
  interface StringTypeFormatOptionsOneOf {
      /** DATE format options */
      dateOptions?: DateTimeConstraints;
      /** DATE_TIME format options */
      dateTimeOptions?: DateTimeConstraints;
      /** TIME format options */
      timeOptions?: DateTimeConstraints;
      /** DATE_OPTIONAL_TIME format options */
      dateOptionalTimeOptions?: DateTimeConstraints;
  }
  enum Format {
      UNDEFINED = "UNDEFINED",
      DATE = "DATE",
      TIME = "TIME",
      DATE_TIME = "DATE_TIME",
      EMAIL = "EMAIL",
      URL = "URL",
      UUID = "UUID",
      PHONE = "PHONE",
      URI = "URI",
      HOSTNAME = "HOSTNAME",
      COLOR_HEX = "COLOR_HEX",
      CURRENCY = "CURRENCY",
      LANGUAGE = "LANGUAGE",
      DATE_OPTIONAL_TIME = "DATE_OPTIONAL_TIME"
  }
  interface StringErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface DateTimeConstraints {
      /**
       * Support static constrains defined as ISO date/time format, as well as
       * dynamic calculations can be performed using special keywords such as "$now" to represent the current date and time.
       * The dynamic calculation supports expressions like "$now+2d" (2 days in the future), "$now-1h" (1 hour in the past), etc.
       * The regex pattern for dynamic calculations is: \$now([+-]\d{1,2})([yMdmh])
       */
      minimum?: string | null;
      /**
       * Support static constrains defined as ISO date/time format, as well as
       * dynamic calculations can be performed using special keywords such as "$now" to represent the current date and time.
       * The dynamic calculation supports expressions like "$now+2d" (2 days in the future), "$now-1h" (1 hour in the past), etc.
       * The regex pattern for dynamic calculations is: \$now([+-]\d{1,2})([yMdmh])
       */
      maximum?: string | null;
  }
  interface NumberType {
      /** Inclusive maximum value. */
      maximum?: number | null;
      /** Inclusive minimum value. */
      minimum?: number | null;
      /** Multiple of value. */
      multipleOf?: number | null;
      /** Custom error message when validation fails. */
      errorMessages?: NumberErrorMessages;
      /** List of allowed values. */
      enum?: number[] | null;
  }
  interface NumberErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface IntegerType {
      /** Minimum value. */
      maximum?: number | null;
      /** Maximum value. */
      minimum?: number | null;
      /** Multiple of value. */
      multipleOf?: number | null;
      /** Custom error message when validation fails. */
      errorMessages?: NumberErrorMessages;
      /** List of allowed values. */
      enum?: number[] | null;
  }
  interface BooleanType {
      /** Custom error message when validation fails. */
      errorMessages?: BooleanErrorMessages;
      /** List of allowed values. */
      enum?: boolean[];
  }
  interface BooleanErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface ArrayType {
      /** Maximum amount of array elements. */
      maxItems?: number | null;
      /** Minimum amount of array elements. */
      minItems?: number | null;
      /** Type of items allowed in array. */
      items?: ArrayItems;
      /** Custom error message when validation fails. */
      errorMessages?: ArrayErrorMessages;
  }
  interface ObjectType {
      /** Description of object properties. */
      properties?: Record<string, PropertiesType>;
      /** Custom error message when validation fails. */
      errorMessages?: ObjectErrorMessages;
  }
  interface PropertiesType extends PropertiesTypePropertiesTypeOneOf {
      /** String type validation for property. */
      string?: StringType;
      /** Number type validation for property. */
      number?: NumberType;
      /** Boolean type validation for property. */
      boolean?: BooleanType;
      /** Integer type validation for property. */
      integer?: IntegerType;
      /** Array type validation for property. */
      array?: ArrayType;
      /** Whether the property is required. */
      required?: boolean;
  }
  /** @oneof */
  interface PropertiesTypePropertiesTypeOneOf {
      /** String type validation for property. */
      string?: StringType;
      /** Number type validation for property. */
      number?: NumberType;
      /** Boolean type validation for property. */
      boolean?: BooleanType;
      /** Integer type validation for property. */
      integer?: IntegerType;
      /** Array type validation for property. */
      array?: ArrayType;
  }
  interface ObjectErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface ArrayItems extends ArrayItemsItemsOneOf {
      /** String type validation for items. */
      string?: StringType;
      /** Number type validation for items. */
      number?: NumberType;
      /** Boolean type validation for items. */
      boolean?: BooleanType;
      /** Integer type validation for items. */
      integer?: IntegerType;
      /** Object type validation for items */
      object?: ObjectType;
  }
  /** @oneof */
  interface ArrayItemsItemsOneOf {
      /** String type validation for items. */
      string?: StringType;
      /** Number type validation for items. */
      number?: NumberType;
      /** Boolean type validation for items. */
      boolean?: BooleanType;
      /** Integer type validation for items. */
      integer?: IntegerType;
      /** Object type validation for items */
      object?: ObjectType;
  }
  interface ArrayErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface PredefinedValidation extends PredefinedValidationFormatOptionsOneOf {
      /** Payment input field. */
      paymentOptions?: PaymentType;
      /** Format of predefined validation. */
      format?: ValidationFormat;
  }
  /** @oneof */
  interface PredefinedValidationFormatOptionsOneOf {
      /** Payment input field. */
      paymentOptions?: PaymentType;
  }
  enum ValidationFormat {
      UNDEFINED = "UNDEFINED",
      /** File upload validation. */
      WIX_FILE = "WIX_FILE",
      /** Payment validation. */
      PAYMENT = "PAYMENT"
  }
  interface PaymentType {
      /** Field mapped to products. */
      products?: Product[];
      /** Minimum amount of different products. */
      minItems?: number | null;
      /** Maximum amount of different products. */
      maxItems?: number | null;
  }
  enum ProductType {
      UNKNOWN = "UNKNOWN",
      /** Shippable (physical). */
      SHIPPABLE = "SHIPPABLE",
      /** Digital. */
      DIGITAL = "DIGITAL"
  }
  enum PriceType {
      UNKNOWN = "UNKNOWN",
      /** Fixed price. */
      FIXED_PRICE = "FIXED_PRICE",
      /** Dynamic price from price range. */
      DYNAMIC_PRICE = "DYNAMIC_PRICE"
  }
  interface QuantityLimit {
      /** Minimum quantity. */
      minimum?: number | null;
      /** Maximum quantity. */
      maximum?: number | null;
  }
  interface FixedPriceOptions {
      /** Fixed price monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). */
      price?: string;
  }
  interface DynamicPriceOptions {
      /** Minimal price monetary amount. */
      minPrice?: string;
      /** Maximal price monetary amount. */
      maxPrice?: string | null;
  }
  interface Product extends ProductPriceOptionsOneOf {
      /** Fixed price options. */
      fixedPriceOptions?: FixedPriceOptions;
      /** Dynamic price options. */
      dynamicPriceOptions?: DynamicPriceOptions;
      /**
       * Product ID.
       * @readonly
       */
      _id?: string;
      /** Product type. */
      productType?: ProductType;
      /** Price type. */
      priceType?: PriceType;
      /** Quantity limit. */
      quantityLimit?: QuantityLimit;
  }
  /** @oneof */
  interface ProductPriceOptionsOneOf {
      /** Fixed price options. */
      fixedPriceOptions?: FixedPriceOptions;
      /** Dynamic price options. */
      dynamicPriceOptions?: DynamicPriceOptions;
  }
  interface NestedFormFieldOverrides {
      /** Whether the field is required. Leave blank for no override. */
      required?: boolean | null;
      /** Whether the field is hidden. Leave blank for no override. */
      hidden?: boolean | null;
  }
  interface Validation extends ValidationValidationOneOf {
      /** Validation of string type. */
      string?: StringType;
      /** Validation of number type. */
      number?: NumberType;
      /** Validation of integer type. */
      integer?: IntegerType;
      /** Validation of boolean type. */
      boolean?: BooleanType;
      /** Validation of array type. */
      array?: ArrayType;
      /** Validation of object type. */
      object?: ObjectType;
      /** Predefined validation of specific format */
      predefined?: PredefinedValidation;
      /** Whether the field is required. */
      required?: boolean;
  }
  /** @oneof */
  interface ValidationValidationOneOf {
      /** Validation of string type. */
      string?: StringType;
      /** Validation of number type. */
      number?: NumberType;
      /** Validation of integer type. */
      integer?: IntegerType;
      /** Validation of boolean type. */
      boolean?: BooleanType;
      /** Validation of array type. */
      array?: ArrayType;
      /** Validation of object type. */
      object?: ObjectType;
      /** Predefined validation of specific format */
      predefined?: PredefinedValidation;
  }
  interface DataExtensionsDetails {
      /** FQDNS which can be extended with this field */
      fqdns?: string[];
  }
  interface NestedFormOverrides {
      /** Field overrides by field ID */
      fieldOverrides?: Record<string, NestedFormFieldOverrides>;
  }
  interface FormFieldV2 extends FormFieldV2FieldTypeOptionsOneOf {
      /** Field accept input of data */
      inputOptions?: InputField;
      /** Field for displaying information such as header or text paragraph */
      displayOptions?: DisplayField;
      /** Submit button of the form */
      submitOptions?: SubmitButton;
      /** Field id. */
      _id?: string;
      /**
       * Whether the field is hidden.
       * Default: false
       */
      hidden?: boolean;
      /** Custom identification of field, can be used to specify exceptional behaviour of client for specific field */
      identifier?: string | null;
      /**
       * Type of the field
       * @readonly
       */
      fieldType?: FieldType;
  }
  /** @oneof */
  interface FormFieldV2FieldTypeOptionsOneOf {
      /** Field accept input of data */
      inputOptions?: InputField;
      /** Field for displaying information such as header or text paragraph */
      displayOptions?: DisplayField;
      /** Submit button of the form */
      submitOptions?: SubmitButton;
  }
  interface InputFieldStringType {
      /** Minimum length. */
      minLength?: number | null;
      /** Maximum length. */
      maxLength?: number | null;
      /** Pattern for a regular expression match. */
      pattern?: string | null;
      /** Format of a string. */
      format?: FormatEnumFormat;
      /** Custom error messages when validation fails. */
      errorMessages?: InputFieldStringErrorMessages;
      /** List of allowed values. */
      enum?: string[] | null;
  }
  enum FormatEnumFormat {
      UNDEFINED = "UNDEFINED",
      DATE = "DATE",
      TIME = "TIME",
      DATE_TIME = "DATE_TIME",
      EMAIL = "EMAIL",
      URL = "URL",
      UUID = "UUID",
      PHONE = "PHONE",
      URI = "URI",
      HOSTNAME = "HOSTNAME",
      COLOR_HEX = "COLOR_HEX",
      CURRENCY = "CURRENCY",
      LANGUAGE = "LANGUAGE",
      DATE_OPTIONAL_TIME = "DATE_OPTIONAL_TIME"
  }
  interface InputFieldStringErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  enum StringComponentType {
      UNKNOWN = "UNKNOWN",
      TEXT_INPUT = "TEXT_INPUT",
      RADIO_GROUP = "RADIO_GROUP",
      DROPDOWN = "DROPDOWN",
      DATE_TIME = "DATE_TIME"
  }
  interface TextInput {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent;
      /** Placeholder for the value input */
      placeholder?: string | null;
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
  }
  interface RichContent {
      /** Node objects representing a rich content document. */
      nodes?: Node[];
      /** Object metadata. */
      metadata?: Metadata;
      /** Global styling for header, paragraph, block quote, and code block nodes in the object. */
      documentStyle?: DocumentStyle;
  }
  interface Node extends NodeDataOneOf {
      /** Data for a button node. */
      buttonData?: ButtonData;
      /** Data for a code block node. */
      codeBlockData?: CodeBlockData;
      /** Data for a divider node. */
      dividerData?: DividerData;
      /** Data for a file node. */
      fileData?: FileData;
      /** Data for a gallery node. */
      galleryData?: GalleryData;
      /** Data for a GIF node. */
      gifData?: GIFData;
      /** Data for a heading node. */
      headingData?: HeadingData;
      /** Data for an embedded HTML node. */
      htmlData?: HTMLData;
      /** Data for an image node. */
      imageData?: ImageData;
      /** Data for a link preview node. */
      linkPreviewData?: LinkPreviewData;
      /** Data for a map node. */
      mapData?: MapData;
      /** Data for a paragraph node. */
      paragraphData?: ParagraphData;
      /** Data for a poll node. */
      pollData?: PollData;
      /** Data for a text node. Used to apply decorations to text. */
      textData?: TextData;
      /** Data for an app embed node. */
      appEmbedData?: AppEmbedData;
      /** Data for a video node. */
      videoData?: VideoData;
      /** Data for an oEmbed node. */
      embedData?: EmbedData;
      /** Data for a collapsible list node. */
      collapsibleListData?: CollapsibleListData;
      /** Data for a table node. */
      tableData?: TableData;
      /** Data for a table cell node. */
      tableCellData?: TableCellData;
      /** Data for a custon external node. */
      externalData?: Record<string, any> | null;
      /** Data for an audio node. */
      audioData?: AudioData;
      /** Data for an ordered list node. */
      orderedListData?: OrderedListData;
      /** Data for a bulleted list node. */
      bulletedListData?: BulletedListData;
      /** Data for a block quote node. */
      blockquoteData?: BlockquoteData;
      /** Node type. Use `APP_EMBED` for nodes that embed content from other Wix apps. Use `EMBED` to embed content in [oEmbed](https://oembed.com/) format. */
      type?: NodeType;
      /** Node ID. */
      _id?: string;
      /** A list of child nodes. */
      nodes?: Node[];
      /** Padding and background color styling for the node. */
      style?: NodeStyle;
  }
  /** @oneof */
  interface NodeDataOneOf {
      /** Data for a button node. */
      buttonData?: ButtonData;
      /** Data for a code block node. */
      codeBlockData?: CodeBlockData;
      /** Data for a divider node. */
      dividerData?: DividerData;
      /** Data for a file node. */
      fileData?: FileData;
      /** Data for a gallery node. */
      galleryData?: GalleryData;
      /** Data for a GIF node. */
      gifData?: GIFData;
      /** Data for a heading node. */
      headingData?: HeadingData;
      /** Data for an embedded HTML node. */
      htmlData?: HTMLData;
      /** Data for an image node. */
      imageData?: ImageData;
      /** Data for a link preview node. */
      linkPreviewData?: LinkPreviewData;
      /** Data for a map node. */
      mapData?: MapData;
      /** Data for a paragraph node. */
      paragraphData?: ParagraphData;
      /** Data for a poll node. */
      pollData?: PollData;
      /** Data for a text node. Used to apply decorations to text. */
      textData?: TextData;
      /** Data for an app embed node. */
      appEmbedData?: AppEmbedData;
      /** Data for a video node. */
      videoData?: VideoData;
      /** Data for an oEmbed node. */
      embedData?: EmbedData;
      /** Data for a collapsible list node. */
      collapsibleListData?: CollapsibleListData;
      /** Data for a table node. */
      tableData?: TableData;
      /** Data for a table cell node. */
      tableCellData?: TableCellData;
      /** Data for a custon external node. */
      externalData?: Record<string, any> | null;
      /** Data for an audio node. */
      audioData?: AudioData;
      /** Data for an ordered list node. */
      orderedListData?: OrderedListData;
      /** Data for a bulleted list node. */
      bulletedListData?: BulletedListData;
      /** Data for a block quote node. */
      blockquoteData?: BlockquoteData;
  }
  enum NodeType {
      PARAGRAPH = "PARAGRAPH",
      TEXT = "TEXT",
      HEADING = "HEADING",
      BULLETED_LIST = "BULLETED_LIST",
      ORDERED_LIST = "ORDERED_LIST",
      LIST_ITEM = "LIST_ITEM",
      BLOCKQUOTE = "BLOCKQUOTE",
      CODE_BLOCK = "CODE_BLOCK",
      VIDEO = "VIDEO",
      DIVIDER = "DIVIDER",
      FILE = "FILE",
      GALLERY = "GALLERY",
      GIF = "GIF",
      HTML = "HTML",
      IMAGE = "IMAGE",
      LINK_PREVIEW = "LINK_PREVIEW",
      MAP = "MAP",
      POLL = "POLL",
      APP_EMBED = "APP_EMBED",
      BUTTON = "BUTTON",
      COLLAPSIBLE_LIST = "COLLAPSIBLE_LIST",
      TABLE = "TABLE",
      EMBED = "EMBED",
      COLLAPSIBLE_ITEM = "COLLAPSIBLE_ITEM",
      COLLAPSIBLE_ITEM_TITLE = "COLLAPSIBLE_ITEM_TITLE",
      COLLAPSIBLE_ITEM_BODY = "COLLAPSIBLE_ITEM_BODY",
      TABLE_CELL = "TABLE_CELL",
      TABLE_ROW = "TABLE_ROW",
      EXTERNAL = "EXTERNAL",
      AUDIO = "AUDIO"
  }
  interface NodeStyle {
      /** The top padding value in pixels. */
      paddingTop?: string | null;
      /** The bottom padding value in pixels. */
      paddingBottom?: string | null;
      /** The background color as a hexadecimal value. */
      backgroundColor?: string | null;
  }
  interface ButtonData {
      /** Styling for the button's container. */
      containerData?: PluginContainerData;
      /** The button type. */
      type?: Type;
      /** Styling for the button. */
      styles?: Styles;
      /** The text to display on the button. */
      text?: string | null;
      /** Button link details. */
      link?: Link;
  }
  interface Border {
      /** Border width in pixels. */
      width?: number | null;
      /** Border radius in pixels. */
      radius?: number | null;
  }
  interface Colors {
      /** The text color as a hexadecimal value. */
      text?: string | null;
      /** The border color as a hexadecimal value. */
      border?: string | null;
      /** The background color as a hexadecimal value. */
      background?: string | null;
  }
  interface PluginContainerData {
      /** The width of the node when it's displayed. */
      width?: PluginContainerDataWidth;
      /** The node's alignment within its container. */
      alignment?: PluginContainerDataAlignment;
      /** Spoiler cover settings for the node. */
      spoiler?: Spoiler;
      /** The height of the node when it's displayed. */
      height?: Height;
      /** Sets whether text should wrap around this node when it's displayed. If `textWrap` is `false`, the node takes up the width of its container. */
      textWrap?: boolean | null;
  }
  enum WidthType {
      /** Width matches the content width */
      CONTENT = "CONTENT",
      /** Small Width */
      SMALL = "SMALL",
      /** Width will match the original asset width */
      ORIGINAL = "ORIGINAL",
      /** coast-to-coast display */
      FULL_WIDTH = "FULL_WIDTH"
  }
  interface PluginContainerDataWidth extends PluginContainerDataWidthDataOneOf {
      /**
       * One of the following predefined width options:
       * `CONTENT`: The width of the container matches the content width.
       * `SMALL`: Small width.
       * `ORIGINAL`: The width of the container matches the original asset width.
       * `FULL_WIDTH`: Full width.
       */
      size?: WidthType;
      /** A custom width value in pixels. */
      custom?: string | null;
  }
  /** @oneof */
  interface PluginContainerDataWidthDataOneOf {
      /**
       * One of the following predefined width options:
       * `CONTENT`: The width of the container matches the content width.
       * `SMALL`: Small width.
       * `ORIGINAL`: The width of the container matches the original asset width.
       * `FULL_WIDTH`: Full width.
       */
      size?: WidthType;
      /** A custom width value in pixels. */
      custom?: string | null;
  }
  enum PluginContainerDataAlignment {
      /** Center Alignment */
      CENTER = "CENTER",
      /** Left Alignment */
      LEFT = "LEFT",
      /** Right Alignment */
      RIGHT = "RIGHT"
  }
  interface Spoiler {
      /** Sets whether the spoiler cover is enabled for this node. */
      enabled?: boolean | null;
      /** The description displayed on top of the spoiler cover. */
      description?: string | null;
      /** The text for the button used to remove the spoiler cover. */
      buttonText?: string | null;
  }
  interface Height {
      /** A custom height value in pixels. */
      custom?: string | null;
  }
  enum Type {
      /** Regular link button */
      LINK = "LINK",
      /** Triggers custom action that is defined in plugin configuration by the consumer */
      ACTION = "ACTION"
  }
  interface Styles {
      /** Border attributes. */
      border?: Border;
      /** Color attributes. */
      colors?: Colors;
  }
  interface Link extends LinkDataOneOf {
      /** The absolute URL for the linked document. */
      url?: string;
      /** The target node's ID. Used for linking to another node in this object. */
      anchor?: string;
      /**
       * he HTML `target` attribute value for the link. This property defines where the linked document opens as follows:
       * `SELF` - Default. Opens the linked document in the same frame as the link.
       * `BLANK` - Opens the linked document in a new browser tab or window.
       * `PARENT` - Opens the linked document in the link's parent frame.
       * `TOP` - Opens the linked document in the full body of the link's browser tab or window.
       */
      target?: LinkTarget;
      /** The HTML `rel` attribute value for the link. This object specifies the relationship between the current document and the linked document. */
      rel?: Rel;
      /** A serialized object used for a custom or external link panel. */
      customData?: string | null;
  }
  /** @oneof */
  interface LinkDataOneOf {
      /** The absolute URL for the linked document. */
      url?: string;
      /** The target node's ID. Used for linking to another node in this object. */
      anchor?: string;
  }
  enum LinkTarget {
      /** Opens the linked document in the same frame as it was clicked (this is default) */
      SELF = "SELF",
      /** Opens the linked document in a new window or tab */
      BLANK = "BLANK",
      /** Opens the linked document in the parent frame */
      PARENT = "PARENT",
      /** Opens the linked document in the full body of the window */
      TOP = "TOP"
  }
  interface Rel {
      /** Indicates to search engine crawlers not to follow the link. */
      nofollow?: boolean | null;
      /** Indicates to search engine crawlers that the link is a paid placement such as sponsored content or an advertisement. */
      sponsored?: boolean | null;
      /** Indicates that this link is user-generated content and isn't necessarily trusted or endorsed by the page’s author. For example, a link in a fourm post. */
      ugc?: boolean | null;
      /** Indicates that this link protect referral information from being passed to the target website. */
      noreferrer?: boolean | null;
  }
  interface CodeBlockData {
      /** Styling for the code block's text. */
      textStyle?: TextStyle;
  }
  interface TextStyle {
      /** Text alignment. Defaults to `AUTO`. */
      textAlignment?: TextAlignment;
      /** A CSS `line-height` value for the text as a unitless ratio. */
      lineHeight?: string | null;
  }
  enum TextAlignment {
      /** browser default, eqivalent to `initial` */
      AUTO = "AUTO",
      /** Left align */
      LEFT = "LEFT",
      /** Right align */
      RIGHT = "RIGHT",
      /** Center align */
      CENTER = "CENTER",
      /** Text is spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. */
      JUSTIFY = "JUSTIFY"
  }
  interface DividerData {
      /** Styling for the divider's container. */
      containerData?: PluginContainerData;
      /** Divider line style. */
      lineStyle?: LineStyle;
      /** Divider width. */
      width?: Width;
      /** Divider alignment. */
      alignment?: Alignment;
  }
  enum LineStyle {
      /** Single Line */
      SINGLE = "SINGLE",
      /** Double Line */
      DOUBLE = "DOUBLE",
      /** Dashed Line */
      DASHED = "DASHED",
      /** Dotted Line */
      DOTTED = "DOTTED"
  }
  enum Width {
      /** Large line */
      LARGE = "LARGE",
      /** Medium line */
      MEDIUM = "MEDIUM",
      /** Small line */
      SMALL = "SMALL"
  }
  enum Alignment {
      /** Center alignment */
      CENTER = "CENTER",
      /** Left alignment */
      LEFT = "LEFT",
      /** Right alignment */
      RIGHT = "RIGHT"
  }
  interface FileData {
      /** Styling for the file's container. */
      containerData?: PluginContainerData;
      /** The source for the file's data. */
      src?: FileSource;
      /** File name. */
      name?: string | null;
      /** File type. */
      type?: string | null;
      /** File size in KB. */
      size?: number | null;
      /** Settings for PDF files. */
      pdfSettings?: PDFSettings;
      /** File MIME type. */
      mimeType?: string | null;
      /** File path. */
      path?: string | null;
  }
  enum ViewMode {
      /** No PDF view */
      NONE = "NONE",
      /** Full PDF view */
      FULL = "FULL",
      /** Mini PDF view */
      MINI = "MINI"
  }
  interface FileSource extends FileSourceDataOneOf {
      /** The absolute URL for the file's source. */
      url?: string | null;
      /** Custom ID. Use `id` instead. */
      custom?: string | null;
      /** An ID that's resolved to a URL by a resolver function. */
      _id?: string | null;
      /** Indicates whether the file's source is private. */
      private?: boolean | null;
  }
  /** @oneof */
  interface FileSourceDataOneOf {
      /** The absolute URL for the file's source. */
      url?: string | null;
      /** Custom ID. Use `id` instead. */
      custom?: string | null;
      /** An ID that's resolved to a URL by a resolver function. */
      _id?: string | null;
  }
  interface PDFSettings {
      /**
       * PDF view mode. One of the following:
       * `NONE` : The PDF isn't displayed.
       * `FULL` : A full page view of the PDF is displayed.
       * `MINI` : A mini view of the PDF is displayed.
       */
      viewMode?: ViewMode;
      /** Sets whether the PDF download button is disabled. */
      disableDownload?: boolean | null;
      /** Sets whether the PDF print button is disabled. */
      disablePrint?: boolean | null;
  }
  interface GalleryData {
      /** Styling for the gallery's container. */
      containerData?: PluginContainerData;
      /** The items in the gallery. */
      items?: Item[];
      /** Options for defining the gallery's appearance. */
      options?: GalleryOptions;
      /** Sets whether the gallery's expand button is disabled. */
      disableExpand?: boolean | null;
      /** Sets whether the gallery's download button is disabled. */
      disableDownload?: boolean | null;
  }
  interface Media {
      /** The source for the media's data. */
      src?: FileSource;
      /** Media width in pixels. */
      width?: number | null;
      /** Media height in pixels. */
      height?: number | null;
      /** Media duration in seconds. Only relevant for audio and video files. */
      duration?: number | null;
  }
  interface Image {
      /** Image file details. */
      media?: Media;
      /** Link details for images that are links. */
      link?: Link;
  }
  interface Video {
      /** Video file details. */
      media?: Media;
      /** Video thumbnail file details. */
      thumbnail?: Media;
  }
  interface Item extends ItemDataOneOf {
      /** An image item. */
      image?: Image;
      /** A video item. */
      video?: Video;
      /** Item title. */
      title?: string | null;
      /** Item's alternative text. */
      altText?: string | null;
  }
  /** @oneof */
  interface ItemDataOneOf {
      /** An image item. */
      image?: Image;
      /** A video item. */
      video?: Video;
  }
  interface GalleryOptions {
      /** Gallery layout. */
      layout?: Layout;
      /** Styling for gallery items. */
      item?: ItemStyle;
      /** Styling for gallery thumbnail images. */
      thumbnails?: Thumbnails;
  }
  enum LayoutType {
      /** Collage type */
      COLLAGE = "COLLAGE",
      /** Masonry type */
      MASONRY = "MASONRY",
      /** Grid type */
      GRID = "GRID",
      /** Thumbnail type */
      THUMBNAIL = "THUMBNAIL",
      /** Slider type */
      SLIDER = "SLIDER",
      /** Slideshow type */
      SLIDESHOW = "SLIDESHOW",
      /** Panorama type */
      PANORAMA = "PANORAMA",
      /** Column type */
      COLUMN = "COLUMN",
      /** Magic type */
      MAGIC = "MAGIC",
      /** Fullsize images type */
      FULLSIZE = "FULLSIZE"
  }
  enum Orientation {
      /** Rows Orientation */
      ROWS = "ROWS",
      /** Columns Orientation */
      COLUMNS = "COLUMNS"
  }
  enum Crop {
      /** Crop to fill */
      FILL = "FILL",
      /** Crop to fit */
      FIT = "FIT"
  }
  enum ThumbnailsAlignment {
      /** Top alignment */
      TOP = "TOP",
      /** Right alignment */
      RIGHT = "RIGHT",
      /** Bottom alignment */
      BOTTOM = "BOTTOM",
      /** Left alignment */
      LEFT = "LEFT",
      /** No thumbnail */
      NONE = "NONE"
  }
  interface Layout {
      /** Gallery layout type. */
      type?: LayoutType;
      /** Sets whether horizontal scroll is enabled. */
      horizontalScroll?: boolean | null;
      /** Gallery orientation. */
      orientation?: Orientation;
      /** The number of columns to display on full size screens. */
      numberOfColumns?: number | null;
      /** The number of columns to display on mobile screens. */
      mobileNumberOfColumns?: number | null;
  }
  interface ItemStyle {
      /** Desirable dimension for each item in pixels (behvaior changes according to gallery type) */
      targetSize?: number | null;
      /** Item ratio */
      ratio?: number | null;
      /** Sets how item images are cropped. */
      crop?: Crop;
      /** The spacing between items in pixels. */
      spacing?: number | null;
  }
  interface Thumbnails {
      /** Thumbnail alignment. */
      placement?: ThumbnailsAlignment;
      /** Spacing between thumbnails in pixels. */
      spacing?: number | null;
  }
  interface GIFData {
      /** Styling for the GIF's container. */
      containerData?: PluginContainerData;
      /** The source of the full size GIF. */
      original?: GIF;
      /** The source of the downsized GIF. */
      downsized?: GIF;
      /** Height in pixels. */
      height?: number;
      /** Width in pixels. */
      width?: number;
  }
  interface GIF {
      /** GIF format URL. */
      gif?: string | null;
      /** MP4 format URL. */
      mp4?: string | null;
      /** Thumbnail URL. */
      still?: string | null;
  }
  interface HeadingData {
      /** Heading level from 1-6. */
      level?: number;
      /** Styling for the heading text. */
      textStyle?: TextStyle;
      /** Indentation level from 1-6. */
      indentation?: number | null;
  }
  interface HTMLData extends HTMLDataDataOneOf {
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
      /** Styling for the HTML node's container. */
      containerData?: PluginContainerData;
      /** The type of HTML code. */
      source?: Source;
  }
  /** @oneof */
  interface HTMLDataDataOneOf {
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
  }
  enum Source {
      HTML = "HTML",
      ADSENSE = "ADSENSE"
  }
  interface ImageData {
      /** Styling for the image's container. */
      containerData?: PluginContainerData;
      /** Image file details. */
      image?: Media;
      /** Link details for images that are links. */
      link?: Link;
      /** Sets whether the image expands to full screen when clicked. */
      disableExpand?: boolean | null;
      /** Image's alternative text. */
      altText?: string | null;
      /** Image caption. */
      caption?: string | null;
      /** Sets whether the image's download button is disabled. */
      disableDownload?: boolean | null;
  }
  interface LinkPreviewData {
      /** Styling for the link preview's container. */
      containerData?: PluginContainerData;
      /** Link details. */
      link?: Link;
      /** Preview title. */
      title?: string | null;
      /** Preview thumbnail URL. */
      thumbnailUrl?: string | null;
      /** Preview description. */
      description?: string | null;
      /** The preview content as HTML. */
      html?: string | null;
  }
  interface MapData {
      /** Styling for the map's container. */
      containerData?: PluginContainerData;
      /** Map settings. */
      mapSettings?: MapSettings;
  }
  interface MapSettings {
      /** The address to display on the map. */
      address?: string | null;
      /** Sets whether the map is draggable. */
      draggable?: boolean | null;
      /** Sets whether the location marker is visible. */
      marker?: boolean | null;
      /** Sets whether street view control is enabled. */
      streetViewControl?: boolean | null;
      /** Sets whether zoom control is enabled. */
      zoomControl?: boolean | null;
      /** Location latitude. */
      lat?: number | null;
      /** Location longitude. */
      lng?: number | null;
      /** Location name. */
      locationName?: string | null;
      /** Sets whether view mode control is enabled. */
      viewModeControl?: boolean | null;
      /** Initial zoom value. */
      initialZoom?: number | null;
      /** Map type. `HYBRID` is a combination of the `ROADMAP` and `SATELLITE` map types. */
      mapType?: MapType;
  }
  enum MapType {
      /** Roadmap map type */
      ROADMAP = "ROADMAP",
      /** Satellite map type */
      SATELITE = "SATELITE",
      /** Hybrid map type */
      HYBRID = "HYBRID",
      /** Terrain map type */
      TERRAIN = "TERRAIN"
  }
  interface ParagraphData {
      /** Styling for the paragraph text. */
      textStyle?: TextStyle;
      /** Indentation level from 1-6. */
      indentation?: number | null;
  }
  interface PollData {
      /** Styling for the poll's container. */
      containerData?: PluginContainerData;
      /** Poll data. */
      poll?: Poll;
      /** Layout settings for the poll and voting options. */
      layout?: PollDataLayout;
      /** Styling for the poll and voting options. */
      design?: Design;
  }
  enum ViewRole {
      /** Only Poll creator can view the results */
      CREATOR = "CREATOR",
      /** Anyone who voted can see the results */
      VOTERS = "VOTERS",
      /** Anyone can see the results, even if one didn't vote */
      EVERYONE = "EVERYONE"
  }
  enum VoteRole {
      /** Logged in member */
      SITE_MEMBERS = "SITE_MEMBERS",
      /** Anyone */
      ALL = "ALL"
  }
  interface Permissions {
      /** Sets who can view the poll results. */
      view?: ViewRole;
      /** Sets who can vote. */
      vote?: VoteRole;
      /** Sets whether one voter can vote multiple times. */
      allowMultipleVotes?: boolean | null;
  }
  interface PollOption {
      /** Option ID. */
      _id?: string | null;
      /** Option title. */
      title?: string | null;
      /** The image displayed with the option. */
      image?: Media;
  }
  interface Settings {
      /** Permissions settings for voting. */
      permissions?: Permissions;
      /** Sets whether voters are displayed in the vote results. */
      showVoters?: boolean | null;
      /** Sets whether the vote count is displayed. */
      showVotesCount?: boolean | null;
  }
  enum PollLayoutType {
      /** List */
      LIST = "LIST",
      /** Grid */
      GRID = "GRID"
  }
  enum PollLayoutDirection {
      /** Left-to-right */
      LTR = "LTR",
      /** Right-to-left */
      RTL = "RTL"
  }
  interface PollLayout {
      /** The layout for displaying the voting options. */
      type?: PollLayoutType;
      /** The direction of the text displayed in the voting options. Text can be displayed either right-to-left or left-to-right. */
      direction?: PollLayoutDirection;
      /** Sets whether to display the main poll image. */
      enableImage?: boolean | null;
  }
  interface OptionLayout {
      /** Sets whether to display option images. */
      enableImage?: boolean | null;
  }
  enum BackgroundType {
      /** Color background type */
      COLOR = "COLOR",
      /** Image background type */
      IMAGE = "IMAGE",
      /** Gradiant background type */
      GRADIENT = "GRADIENT"
  }
  interface Gradient {
      /** The gradient angle in degrees. */
      angle?: number | null;
      /** The start color as a hexademical value. */
      startColor?: string | null;
      /** The end color as a hexademical value. */
      lastColor?: string | null;
  }
  interface Background extends BackgroundBackgroundOneOf {
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: Media;
      /** Details for a gradient background. */
      gradient?: Gradient;
      /** Background type. For each option, include the relevant details. */
      type?: BackgroundType;
  }
  /** @oneof */
  interface BackgroundBackgroundOneOf {
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: Media;
      /** Details for a gradient background. */
      gradient?: Gradient;
  }
  interface PollDesign {
      /** Background styling. */
      background?: Background;
      /** Border radius in pixels. */
      borderRadius?: number | null;
  }
  interface OptionDesign {
      /** Border radius in pixels. */
      borderRadius?: number | null;
  }
  interface Poll {
      /** Poll ID. */
      _id?: string | null;
      /** Poll title. */
      title?: string | null;
      /** Poll creator ID. */
      creatorId?: string | null;
      /** Main poll image. */
      image?: Media;
      /** Voting options. */
      options?: PollOption[];
      /** The poll's permissions and display settings. */
      settings?: Settings;
  }
  interface PollDataLayout {
      /** Poll layout settings. */
      poll?: PollLayout;
      /** Voting otpions layout settings. */
      options?: OptionLayout;
  }
  interface Design {
      /** Styling for the poll. */
      poll?: PollDesign;
      /** Styling for voting options. */
      options?: OptionDesign;
  }
  interface TextData {
      /** The text to apply decorations to. */
      text?: string;
      /** The decorations to apply. */
      decorations?: Decoration[];
  }
  /** Adds appearence changes to text */
  interface Decoration extends DecorationDataOneOf {
      /** Data for an anchor link decoration. */
      anchorData?: AnchorData;
      /** Data for a color decoration. */
      colorData?: ColorData;
      /** Data for an external link decoration. */
      linkData?: LinkData;
      /** Data for a mention decoration. */
      mentionData?: MentionData;
      /** Data for a font size decoration. */
      fontSizeData?: FontSizeData;
      /** Font weight for a bold decoration. */
      fontWeightValue?: number | null;
      /** Data for an italic decoration. */
      italicData?: boolean | null;
      /** Data for an underline decoration. */
      underlineData?: boolean | null;
      /** The type of decoration to apply. */
      type?: DecorationType;
  }
  /** @oneof */
  interface DecorationDataOneOf {
      /** Data for an anchor link decoration. */
      anchorData?: AnchorData;
      /** Data for a color decoration. */
      colorData?: ColorData;
      /** Data for an external link decoration. */
      linkData?: LinkData;
      /** Data for a mention decoration. */
      mentionData?: MentionData;
      /** Data for a font size decoration. */
      fontSizeData?: FontSizeData;
      /** Font weight for a bold decoration. */
      fontWeightValue?: number | null;
      /** Data for an italic decoration. */
      italicData?: boolean | null;
      /** Data for an underline decoration. */
      underlineData?: boolean | null;
  }
  enum DecorationType {
      BOLD = "BOLD",
      ITALIC = "ITALIC",
      UNDERLINE = "UNDERLINE",
      SPOILER = "SPOILER",
      ANCHOR = "ANCHOR",
      MENTION = "MENTION",
      LINK = "LINK",
      COLOR = "COLOR",
      FONT_SIZE = "FONT_SIZE",
      EXTERNAL = "EXTERNAL"
  }
  interface AnchorData {
      /** The target node's ID. */
      anchor?: string;
  }
  interface ColorData {
      /** The text's background color as a hexadecimal value. */
      background?: string | null;
      /** The text's foreground color as a hexadecimal value. */
      foreground?: string | null;
  }
  interface LinkData {
      /** Link details. */
      link?: Link;
  }
  interface MentionData {
      /** The mentioned user's name. */
      name?: string;
      /** The version of the user's name that appears after the `@` character in the mention. */
      slug?: string;
      /** Mentioned user's ID. */
      _id?: string | null;
  }
  interface FontSizeData {
      /** The units used for the font size. */
      unit?: FontType;
      /** Font size value. */
      value?: number | null;
  }
  enum FontType {
      PX = "PX",
      EM = "EM"
  }
  interface AppEmbedData extends AppEmbedDataAppDataOneOf {
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData;
      /** Data for embedded Wix Events content. */
      eventData?: EventData;
      /** The type of Wix App content being embedded. */
      type?: AppType;
      /** The ID of the embedded content. */
      itemId?: string | null;
      /** The name of the embedded content. */
      name?: string | null;
      /** Deprecated: Use `image` instead. */
      imageSrc?: string | null;
      /** The URL for the embedded content. */
      url?: string | null;
      /** An image for the embedded content. */
      image?: Media;
  }
  /** @oneof */
  interface AppEmbedDataAppDataOneOf {
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData;
      /** Data for embedded Wix Events content. */
      eventData?: EventData;
  }
  enum AppType {
      PRODUCT = "PRODUCT",
      EVENT = "EVENT",
      BOOKING = "BOOKING"
  }
  interface BookingData {
      /** Booking duration in minutes. */
      durations?: string | null;
  }
  interface EventData {
      /** Event schedule. */
      scheduling?: string | null;
      /** Event location. */
      location?: string | null;
  }
  interface VideoData {
      /** Styling for the video's container. */
      containerData?: PluginContainerData;
      /** Video details. */
      video?: Media;
      /** Video thumbnail details. */
      thumbnail?: Media;
      /** Sets whether the video's download button is disabled. */
      disableDownload?: boolean | null;
      /** Video title. */
      title?: string | null;
      /** Video options. */
      options?: PlaybackOptions;
  }
  interface PlaybackOptions {
      /** Sets whether the media will automatically start playing. */
      autoPlay?: boolean | null;
      /** Sets whether media's will be looped. */
      playInLoop?: boolean | null;
      /** Sets whether media's controls will be shown. */
      showControls?: boolean | null;
  }
  interface EmbedData {
      /** Styling for the oEmbed node's container. */
      containerData?: PluginContainerData;
      /** An [oEmbed](https://www.oembed.com) object. */
      oembed?: Oembed;
      /** Origin asset source. */
      src?: string | null;
  }
  interface Oembed {
      /** The resource type. */
      type?: string | null;
      /** The width of the resource specified in the `url` property in pixels. */
      width?: number | null;
      /** The height of the resource specified in the `url` property in pixels. */
      height?: number | null;
      /** Resource title. */
      title?: string | null;
      /** The source URL for the resource. */
      url?: string | null;
      /** HTML for embedding a video player. The HTML should have no padding or margins. */
      html?: string | null;
      /** The name of the author or owner of the resource. */
      authorName?: string | null;
      /** The URL for the author or owner of the resource. */
      authorUrl?: string | null;
      /** The name of the resource provider. */
      providerName?: string | null;
      /** The URL for the resource provider. */
      providerUrl?: string | null;
      /** The URL for a thumbnail image for the resource. If this property is defined, `thumbnailWidth` and `thumbnailHeight` must also be defined. */
      thumbnailUrl?: string | null;
      /** The width of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailHeight` must also be defined. */
      thumbnailWidth?: string | null;
      /** The height of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailWidth`must also be defined. */
      thumbnailHeight?: string | null;
      /** The URL for an embedded viedo. */
      videoUrl?: string | null;
      /** The oEmbed version number.  This value must be `1.0`. */
      version?: string | null;
  }
  interface CollapsibleListData {
      /** Styling for the collapsible list's container. */
      containerData?: PluginContainerData;
      /** If `true`, only one item can be expanded at a time. */
      expandOnlyOne?: boolean | null;
      /** Sets which items are expanded when the page loads. */
      initialExpandedItems?: InitialExpandedItems;
      /** The direction of the text in the list. Either left-to-right or right-to-left. */
      direction?: Direction;
      /** If `true`, The collapsible item will appear in search results as an FAQ. */
      isQapageData?: boolean | null;
  }
  enum InitialExpandedItems {
      /** First item will be expended initally */
      FIRST = "FIRST",
      /** All items will expended initally */
      ALL = "ALL",
      /** All items collapsed initally */
      NONE = "NONE"
  }
  enum Direction {
      /** Left-to-right */
      LTR = "LTR",
      /** Right-to-left */
      RTL = "RTL"
  }
  interface TableData {
      /** Styling for the table's container. */
      containerData?: PluginContainerData;
      /** The table's dimensions. */
      dimensions?: Dimensions;
      /** Deprecated: Use `rowHeader` and `columnHeader` instead. */
      header?: boolean | null;
      /** Sets whether the table's first row is a header. */
      rowHeader?: boolean | null;
      /** Sets whether the table's first column is a header. */
      columnHeader?: boolean | null;
  }
  interface Dimensions {
      /** An array representing relative width of each column in relation to the other columns. */
      colsWidthRatio?: number[];
      /** An array representing the height of each row in pixels. */
      rowsHeight?: number[];
      /** An array representing the minimum width of each column in pixels. */
      colsMinWidth?: number[];
  }
  interface TableCellData {
      /** Styling for the cell's background color and text alignment. */
      cellStyle?: CellStyle;
      /** The cell's border colors. */
      borderColors?: BorderColors;
  }
  enum VerticalAlignment {
      /** Top alignment */
      TOP = "TOP",
      /** Middle alignment */
      MIDDLE = "MIDDLE",
      /** Bottom alignment */
      BOTTOM = "BOTTOM"
  }
  interface CellStyle {
      /** Vertical alignment for the cell's text. */
      verticalAlignment?: VerticalAlignment;
      /** Cell background color as a hexadecimal value. */
      backgroundColor?: string | null;
  }
  interface BorderColors {
      /** Left border color as a hexadecimal value. */
      left?: string | null;
      /** Right border color as a hexadecimal value. */
      right?: string | null;
      /** Top border color as a hexadecimal value. */
      top?: string | null;
      /** Bottom border color as a hexadecimal value. */
      bottom?: string | null;
  }
  /**
   * `NullValue` is a singleton enumeration to represent the null value for the
   * `Value` type union.
   *
   * The JSON representation for `NullValue` is JSON `null`.
   */
  enum NullValue {
      /** Null value. */
      NULL_VALUE = "NULL_VALUE"
  }
  /**
   * `ListValue` is a wrapper around a repeated field of values.
   *
   * The JSON representation for `ListValue` is JSON array.
   */
  interface ListValue {
      /** Repeated field of dynamically typed values. */
      values?: any[];
  }
  interface AudioData {
      /** Styling for the audio node's container. */
      containerData?: PluginContainerData;
      /** Audio file details. */
      audio?: Media;
      /** Sets whether the audio node's download button is disabled. */
      disableDownload?: boolean | null;
      /** Cover image. */
      coverImage?: Media;
      /** Track name. */
      name?: string | null;
      /** Author name. */
      authorName?: string | null;
      /** An HTML version of the audio node. */
      html?: string | null;
  }
  interface OrderedListData {
      /** Indentation level. */
      indentation?: number;
  }
  interface BulletedListData {
      /** Indentation level. */
      indentation?: number;
  }
  interface BlockquoteData {
      /** Indentation level. */
      indentation?: number;
  }
  interface Metadata {
      /** Schema version. */
      version?: number;
      /**
       * When the object was created.
       * @readonly
       */
      createdTimestamp?: Date;
      /** When the object was most recently updated. */
      updatedTimestamp?: Date;
      /** Object ID. */
      _id?: string | null;
  }
  interface DocumentStyle {
      /** Styling for H1 nodes. */
      headerOne?: TextNodeStyle;
      /** Styling for H2 nodes. */
      headerTwo?: TextNodeStyle;
      /** Styling for H3 nodes. */
      headerThree?: TextNodeStyle;
      /** Styling for H4 nodes. */
      headerFour?: TextNodeStyle;
      /** Styling for H5 nodes. */
      headerFive?: TextNodeStyle;
      /** Styling for H6 nodes. */
      headerSix?: TextNodeStyle;
      /** Styling for paragraph nodes. */
      paragraph?: TextNodeStyle;
      /** Styling for block quote nodes. */
      blockquote?: TextNodeStyle;
      /** Styling for code block nodes. */
      codeBlock?: TextNodeStyle;
  }
  interface TextNodeStyle {
      /** The decorations to apply to the node. */
      decorations?: Decoration[];
      /** Padding and background color for the node. */
      nodeStyle?: NodeStyle;
      /** Line height for text in the node. */
      lineHeight?: string | null;
  }
  interface RadioGroup {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent;
      /**
       * Flag identifying to show option allowing input custom value
       * List of options to select from
       */
      options?: RadioGroupOption[];
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
      /** Option which can be specified by UoU, enabled when this object is specified. */
      customOption?: RadioGroupCustomOption;
  }
  interface RadioGroupOption {
      /** Selectable option label */
      label?: string | null;
      /** Selectable option value, which is saved to DB. */
      value?: string | null;
      /** Flag identifying that option should be selected by default */
      default?: boolean;
      /** Option id. Used as binding for translations */
      _id?: string;
  }
  interface RadioGroupCustomOption {
      /** Label of custom option input */
      label?: string | null;
      /** Placeholder of custom option input */
      placeholder?: string | null;
  }
  interface Dropdown {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent;
      /** List of options to select from */
      options?: DropdownOption[];
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
      /** Option which can be specified by UoU, enabled when this object is specified. */
      customOption?: DropdownCustomOption;
      /** Placeholder of dropdown input */
      placeholder?: string | null;
  }
  interface DropdownOption {
      /** Selectable option label */
      label?: string | null;
      /** Selectable option value, which is saved to DB. */
      value?: string | null;
      /** Flag identifying that option should be selected by default */
      default?: boolean;
      /** Option id. Used as binding for translations */
      _id?: string;
  }
  interface DropdownCustomOption {
      /** Label of custom option input */
      label?: string | null;
      /** Placeholder of custom option input */
      placeholder?: string | null;
  }
  interface DateTimeInput extends DateTimeInputDateTimeInputTypeOptionsOneOf {
      /** Options specific to the combined Date and Time input type. */
      dateTimeOptions?: DateTimeOptions;
      /** Options specific to the Date-only input type. */
      dateOptions?: DateOptions;
      /** Options specific to the Time-only input type. */
      timeOptions?: TimeOptions;
      /** Options specific to date picker type. */
      datePickerOptions?: DatePickerOptions;
      /** Label of the field. Displayed text for the date/time input. */
      label?: string | null;
      /** Description of the field. Additional information about the date/time input. */
      description?: RichContent;
      /**
       * Flag identifying whether to show or hide the label.
       * Default: true
       */
      showLabel?: boolean | null;
      /**
       * Flag identifying whether to show or hide the placeholder.
       * Default: true
       */
      showPlaceholder?: boolean | null;
      /**
       * Date and/or time input component type
       * @readonly
       */
      dateTimeInputType?: DateTimeInputType;
  }
  /** @oneof */
  interface DateTimeInputDateTimeInputTypeOptionsOneOf {
      /** Options specific to the combined Date and Time input type. */
      dateTimeOptions?: DateTimeOptions;
      /** Options specific to the Date-only input type. */
      dateOptions?: DateOptions;
      /** Options specific to the Time-only input type. */
      timeOptions?: TimeOptions;
      /** Options specific to date picker type. */
      datePickerOptions?: DatePickerOptions;
  }
  enum DateFormatPart {
      YEAR = "YEAR",
      MONTH = "MONTH",
      DAY = "DAY"
  }
  enum FirstDayOfWeek {
      MONDAY = "MONDAY",
      SUNDAY = "SUNDAY"
  }
  enum DateTimeInputType {
      UNKNOWN = "UNKNOWN",
      /** Show date and time input */
      DATE_TIME = "DATE_TIME",
      /** Show only date input */
      DATE = "DATE",
      /** Show only time input */
      TIME = "TIME",
      /** Show date picker input */
      DATE_PICKER = "DATE_PICKER"
  }
  interface DateTimeOptions {
      /** Order of date picking component parts (e.g., YEAR, MONTH, DAY). */
      dateFormatParts?: DateFormatPart[];
      /**
       * Flag indicating whether to use the 24-hour time format.
       * Default: false.
       */
      use24HourFormat?: boolean;
  }
  interface DateOptions {
      /** Order of date picking component parts (e.g., YEAR, MONTH, DAY). */
      dateFormatParts?: DateFormatPart[];
  }
  interface TimeOptions {
      /**
       * Flag indicating whether to use the 24-hour time format.
       * Default: false.
       */
      use24HourFormat?: boolean;
  }
  interface DatePickerOptions {
      /** First day of the week displayed on date picker. */
      firstDayOfWeek?: FirstDayOfWeek;
  }
  interface InputFieldNumberType {
      /** Inclusive maximum value. */
      maximum?: number | null;
      /** Inclusive minimum value. */
      minimum?: number | null;
      /** Multiple of value. */
      multipleOf?: number | null;
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldNumberErrorMessages;
      /** List of allowed values. */
      enum?: number[] | null;
  }
  interface InputFieldNumberErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  enum NumberComponentType {
      UNKNOWN = "UNKNOWN",
      NUMBER_INPUT = "NUMBER_INPUT"
  }
  interface NumberInput {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent;
      /** Placeholder for the value input */
      placeholder?: string | null;
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
  }
  interface InputFieldBooleanType {
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldBooleanErrorMessages;
      /** List of allowed values. */
      enum?: boolean[];
  }
  interface InputFieldBooleanErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  enum BooleanComponentType {
      UNKNOWN = "UNKNOWN",
      CHECKBOX = "CHECKBOX"
  }
  interface Checkbox {
      /** Label of the field */
      label?: RichContent;
  }
  interface InputFieldArrayType {
      /** Maximum amount of array elements. */
      maxItems?: number | null;
      /** Minimum amount of array elements. */
      minItems?: number | null;
      /** Type of items allowed in array. */
      items?: ArrayTypeArrayItems;
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldArrayErrorMessages;
  }
  enum ItemType {
      UNKNOWN = "UNKNOWN",
      STRING = "STRING",
      NUMBER = "NUMBER",
      BOOLEAN = "BOOLEAN",
      INTEGER = "INTEGER",
      OBJECT = "OBJECT"
  }
  interface InputFieldIntegerType {
      /** Maximum value. */
      maximum?: number | null;
      /** Minimum value. */
      minimum?: number | null;
      /** Multiple of value. */
      multipleOf?: number | null;
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldNumberErrorMessages;
      /** List of allowed values. */
      enum?: number[] | null;
  }
  interface InputFieldObjectType {
      /** Description of object properties. */
      properties?: Record<string, ObjectTypePropertiesType>;
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldObjectErrorMessages;
  }
  enum PropertiesTypePropertiesType {
      UNKNOWN = "UNKNOWN",
      STRING = "STRING",
      NUMBER = "NUMBER",
      BOOLEAN = "BOOLEAN",
      INTEGER = "INTEGER",
      ARRAY = "ARRAY"
  }
  interface ObjectTypePropertiesType extends ObjectTypePropertiesTypePropertiesTypeOptionsOneOf {
      /** String type validation for property. */
      stringOptions?: InputFieldStringType;
      /** Number type validation for property. */
      numberOptions?: InputFieldNumberType;
      /** Boolean type validation for property. */
      booleanOptions?: InputFieldBooleanType;
      /** Integer type validation for property. */
      integerOptions?: InputFieldIntegerType;
      /** Array type validation for property. */
      arrayOptions?: InputFieldArrayType;
      /**
       * Type of object properties
       * @readonly
       */
      propertiesType?: PropertiesTypePropertiesType;
      /** Whether the property is required. */
      required?: boolean;
  }
  /** @oneof */
  interface ObjectTypePropertiesTypePropertiesTypeOptionsOneOf {
      /** String type validation for property. */
      stringOptions?: InputFieldStringType;
      /** Number type validation for property. */
      numberOptions?: InputFieldNumberType;
      /** Boolean type validation for property. */
      booleanOptions?: InputFieldBooleanType;
      /** Integer type validation for property. */
      integerOptions?: InputFieldIntegerType;
      /** Array type validation for property. */
      arrayOptions?: InputFieldArrayType;
  }
  interface InputFieldObjectErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface ArrayTypeArrayItems extends ArrayTypeArrayItemsItemTypeOptionsOneOf {
      /** String type validation for items. */
      stringOptions?: InputFieldStringType;
      /** Number type validation for items. */
      numberOptions?: InputFieldNumberType;
      /** Boolean type validation for items. */
      booleanOptions?: InputFieldBooleanType;
      /** Integer type validation for items. */
      integerOptions?: InputFieldIntegerType;
      /** Object type validation for items */
      objectOptions?: InputFieldObjectType;
      /**
       * Type of array items
       * @readonly
       */
      itemType?: ItemType;
  }
  /** @oneof */
  interface ArrayTypeArrayItemsItemTypeOptionsOneOf {
      /** String type validation for items. */
      stringOptions?: InputFieldStringType;
      /** Number type validation for items. */
      numberOptions?: InputFieldNumberType;
      /** Boolean type validation for items. */
      booleanOptions?: InputFieldBooleanType;
      /** Integer type validation for items. */
      integerOptions?: InputFieldIntegerType;
      /** Object type validation for items */
      objectOptions?: InputFieldObjectType;
  }
  interface InputFieldArrayErrorMessages {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  enum ComponentType {
      UNKNOWN = "UNKNOWN",
      CHECKBOX_GROUP = "CHECKBOX_GROUP"
  }
  interface CheckboxGroup {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent;
      /** List of options to select from */
      options?: Option[];
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
      /** Option which can be specified by UoU, enabled when this object is specified. */
      customOption?: CustomOption;
  }
  interface MediaItem extends MediaItemMediaOneOf {
      /** WixMedia image. */
      image?: string;
  }
  /** @oneof */
  interface MediaItemMediaOneOf {
      /** WixMedia image. */
      image?: string;
  }
  interface Option {
      /** Selectable option label */
      label?: string | null;
      /** Selectable option value, which is saved to DB. */
      value?: any;
      /** Flag identifying that option should be selected by default */
      default?: boolean;
      /** Option id. Used as binding for translations */
      _id?: string;
      /** Media item. Media, associated with option, like image. */
      media?: MediaItem;
  }
  interface CustomOption {
      /** Label of custom option input */
      label?: string | null;
      /** Placeholder of custom option input */
      placeholder?: string | null;
  }
  enum WixFileComponentType {
      UNKNOWN = "UNKNOWN",
      FILE_UPLOAD = "FILE_UPLOAD",
      SIGNATURE = "SIGNATURE"
  }
  interface FileUpload {
      /** Selectable option label */
      label?: string | null;
      /** Description of the field */
      description?: RichContent;
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
      /** Text on upload button */
      buttonText?: string | null;
      /** Amount of files allowed to upload */
      fileLimit?: number;
      /** Supported file formats for upload */
      uploadFileFormats?: UploadFileFormat[];
      /** Custom text which appears when file is uploaded, if missing file name will be shown */
      explanationText?: string | null;
  }
  enum UploadFileFormat {
      UNDEFINED = "UNDEFINED",
      /** Video files */
      VIDEO = "VIDEO",
      /** Image files */
      IMAGE = "IMAGE",
      /** Audio files */
      AUDIO = "AUDIO",
      /** Document files */
      DOCUMENT = "DOCUMENT"
  }
  interface Signature {
      /** Selectable option label */
      label?: string | null;
      /**
       * Flag identifying to hide label or not
       * Default: true
       */
      showLabel?: boolean | null;
      /** Description of the field */
      description?: RichContent;
      /** Is image upload enabled */
      imageUploadEnabled?: boolean;
  }
  enum PaymentComponentType {
      UNKNOWN = "UNKNOWN",
      CHECKBOX_GROUP = "CHECKBOX_GROUP",
      DONATION_INPUT = "DONATION_INPUT"
  }
  interface ProductCheckboxGroup {
      /** Label of the field. */
      label?: string | null;
      /** Description of the field. */
      description?: RichContent;
      /** List of options to select from. */
      options?: ProductCheckboxGroupOption[];
  }
  interface ProductCheckboxGroupOption {
      /** Selectable option label. */
      label?: string | null;
      /** Selectable option value, which is saved to DB. Corresponds to product id, found in field's products list. */
      value?: any;
      /** Option id. Used as binding for translations. */
      _id?: string;
      /** Media item. Media, associated with option, like image. */
      media?: MediaItem;
  }
  interface DonationInput {
      /** Label of the field. */
      label?: string | null;
      /** Description of the field. */
      description?: RichContent;
      /** List of options to select from. */
      options?: DonationInputOption[];
      /** Option which can be specified by UoU, enabled when this object is specified. */
      customOption?: CommonCustomOption;
      /**
       * Specifies the number of columns used to display the selections within the component.
       * Default: ONE
       */
      numberOfColumns?: NumberOfColumns;
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
  }
  interface DonationInputOption {
      /** Selectable option value, which is saved to DB. Corresponds to product id, found in field's products list. */
      value?: string;
      /** Flag identifying that option should be selected by default */
      default?: boolean;
  }
  interface CommonCustomOption {
      /** Label of custom option input */
      label?: string | null;
      /** Placeholder of custom option input */
      placeholder?: string | null;
  }
  enum NumberOfColumns {
      UNKNOWN = "UNKNOWN",
      ONE = "ONE",
      TWO = "TWO",
      THREE = "THREE"
  }
  enum InputType {
      UNKNOWN = "UNKNOWN",
      STRING = "STRING",
      NUMBER = "NUMBER",
      BOOLEAN = "BOOLEAN",
      ARRAY = "ARRAY",
      OBJECT = "OBJECT",
      WIX_FILE = "WIX_FILE",
      PAYMENT = "PAYMENT"
  }
  interface _String extends _StringComponentTypeOptionsOneOf {
      /** Text input field */
      textInputOptions?: TextInput;
      /** Selection field as radio group */
      radioGroupOptions?: RadioGroup;
      /** Selection field as drop down */
      dropdownOptions?: Dropdown;
      /** Field for selecting date and/or time */
      dateTimeOptions?: DateTimeInput;
      /** Validation of field output value. */
      validation?: InputFieldStringType;
      /**
       * Component type of the string input field
       * @readonly
       */
      componentType?: StringComponentType;
  }
  /** @oneof */
  interface _StringComponentTypeOptionsOneOf {
      /** Text input field */
      textInputOptions?: TextInput;
      /** Selection field as radio group */
      radioGroupOptions?: RadioGroup;
      /** Selection field as drop down */
      dropdownOptions?: Dropdown;
      /** Field for selecting date and/or time */
      dateTimeOptions?: DateTimeInput;
  }
  interface _Number extends _NumberComponentTypeOptionsOneOf {
      /** Number value input field */
      numberInputOptions?: NumberInput;
      /** Validation of field output value. */
      validation?: InputFieldNumberType;
      /**
       * Component type of the number input field
       * @readonly
       */
      componentType?: NumberComponentType;
  }
  /** @oneof */
  interface _NumberComponentTypeOptionsOneOf {
      /** Number value input field */
      numberInputOptions?: NumberInput;
  }
  interface _Boolean extends _BooleanComponentTypeOptionsOneOf {
      /** Checkbox input field */
      checkboxOptions?: Checkbox;
      /** Validation of field output value. */
      validation?: InputFieldBooleanType;
      /**
       * Component type of the boolean input field
       * @readonly
       */
      componentType?: BooleanComponentType;
  }
  /** @oneof */
  interface _BooleanComponentTypeOptionsOneOf {
      /** Checkbox input field */
      checkboxOptions?: Checkbox;
  }
  interface _Array extends _ArrayComponentTypeOptionsOneOf {
      /** Checkbox group input field */
      checkboxGroupOptions?: CheckboxGroup;
      /** Validation of array type. */
      validation?: InputFieldArrayType;
      /**
       * Component type of the array input field
       * @readonly
       */
      componentType?: ComponentType;
  }
  /** @oneof */
  interface _ArrayComponentTypeOptionsOneOf {
      /** Checkbox group input field */
      checkboxGroupOptions?: CheckboxGroup;
  }
  interface _Object extends _ObjectValidationOneOf {
      /** Validation of object type. */
      object?: InputFieldObjectType;
      /**
       * Nested form ID.
       * @internal
       */
      nestedFormId?: string | null;
  }
  /** @oneof */
  interface _ObjectValidationOneOf {
      /** Validation of object type. */
      object?: InputFieldObjectType;
      /**
       * Nested form ID.
       * @internal
       */
      nestedFormId?: string | null;
  }
  interface WixFile extends WixFileComponentTypeOptionsOneOf {
      /** File upload input field */
      fileUploadOptions?: FileUpload;
      /** Signature input field */
      signatureOptions?: Signature;
      /**
       * Component type of the array input field
       * @readonly
       */
      componentType?: WixFileComponentType;
  }
  /** @oneof */
  interface WixFileComponentTypeOptionsOneOf {
      /** File upload input field */
      fileUploadOptions?: FileUpload;
      /** Signature input field */
      signatureOptions?: Signature;
  }
  interface Payment extends PaymentComponentTypeOptionsOneOf {
      /** Checkbox group input field. */
      checkboxGroupOptions?: ProductCheckboxGroup;
      /** Donation input field. */
      donationInputOptions?: DonationInput;
      /**
       * Component type of the payment input field.
       * @readonly
       */
      componentType?: PaymentComponentType;
      /** Validation of payment type. */
      validation?: PaymentType;
  }
  /** @oneof */
  interface PaymentComponentTypeOptionsOneOf {
      /** Checkbox group input field. */
      checkboxGroupOptions?: ProductCheckboxGroup;
      /** Donation input field. */
      donationInputOptions?: DonationInput;
  }
  interface Header {
      /** Content of the header */
      content?: RichContent;
  }
  interface RichText {
      /** Content of the rich text field */
      content?: RichContent;
  }
  enum Target {
      UNDEFINED = "UNDEFINED",
      /** Opened in same browser tab */
      SELF = "SELF",
      /** Url open in new tab */
      BLANK = "BLANK"
  }
  interface ThankYouMessage {
      /** Message show after form submission */
      text?: RichContent;
      /**
       * Duration after how much second it should disappear. If 0, will stay forever.
       * Default: false
       */
      duration?: number | null;
  }
  interface Redirect {
      /** Url to which UoU should be redirected after successful submit of form */
      url?: string | null;
      /** How should url be opened */
      target?: Target;
  }
  enum FieldType {
      UNKNOWN = "UNKNOWN",
      INPUT = "INPUT",
      DISPLAY = "DISPLAY",
      SUBMIT = "SUBMIT"
  }
  interface InputField extends InputFieldInputTypeOptionsOneOf {
      /** Input return string as value */
      stringOptions?: _String;
      /** Input return number as value */
      numberOptions?: _Number;
      /** Input return boolean as value */
      booleanOptions?: _Boolean;
      /** Input return array as value */
      arrayOptions?: _Array;
      /** Input return object as value */
      objectOptions?: _Object;
      /** Input return "Wix file" as value */
      wixFileOptions?: WixFile;
      /** Input returns selected products as value. */
      paymentOptions?: Payment;
      /** Definition of a target where the value of field belongs. */
      target?: string | null;
      /**
       * Mark the field as containing personal information. This will encrypt user data when storing it.
       * Default: false
       */
      pii?: boolean;
      /**
       * Whether the field is required.
       * Default: false
       */
      required?: boolean;
      /**
       * Type of the input field
       * @readonly
       */
      inputType?: InputType;
  }
  /** @oneof */
  interface InputFieldInputTypeOptionsOneOf {
      /** Input return string as value */
      stringOptions?: _String;
      /** Input return number as value */
      numberOptions?: _Number;
      /** Input return boolean as value */
      booleanOptions?: _Boolean;
      /** Input return array as value */
      arrayOptions?: _Array;
      /** Input return object as value */
      objectOptions?: _Object;
      /** Input return "Wix file" as value */
      wixFileOptions?: WixFile;
      /** Input returns selected products as value. */
      paymentOptions?: Payment;
  }
  interface DisplayField extends DisplayFieldComponentTypeOneOf {
      /** Header field */
      header?: Header;
      /** Rich text field */
      richText?: RichText;
  }
  /** @oneof */
  interface DisplayFieldComponentTypeOneOf {
      /** Header field */
      header?: Header;
      /** Rich text field */
      richText?: RichText;
  }
  interface SubmitButton extends SubmitButtonSubmitActionOneOf {
      /** Submit action effect is to show message */
      thankYouMessage?: ThankYouMessage;
      /** Submit action effect is to redirect to */
      redirect?: Redirect;
      /** When button is not on last page it behaves as switch between pages page, text of label to go to next page. */
      nextText?: string | null;
      /** When button is not on last page it behaves as switch between pages page, text of label to go to previous page. */
      previousText?: string | null;
      /** Text on the button when button is submitting a form */
      submitText?: string | null;
  }
  /** @oneof */
  interface SubmitButtonSubmitActionOneOf {
      /** Submit action effect is to show message */
      thankYouMessage?: ThankYouMessage;
      /** Submit action effect is to redirect to */
      redirect?: Redirect;
  }
  interface Step {
      /** Step ID. */
      _id?: string;
      /** Name of the step. */
      name?: string | null;
      /** Is step hidden */
      hidden?: boolean;
      /** Form step properties */
      layout?: FormLayout;
  }
  interface FormLayout {
      /** Layout for large break point. */
      large?: BreakPoint;
      /** Layout for medium break point. */
      medium?: BreakPoint;
      /** Layout for small break point. */
      small?: BreakPoint;
  }
  interface BreakPoint {
      /** Description of layouts for items. */
      items?: ItemLayout[];
      /** Amount of columns of layout grid. */
      columns?: number | null;
      /** Row height of layout grid. */
      rowHeight?: number | null;
      /** Description of elements margins. */
      margin?: Margin;
      /** Description of elements paddings. */
      padding?: Margin;
      /** Sections of the layout, which allow manage fields */
      sections?: Section[];
  }
  interface ItemLayout {
      /** Form field reference id. */
      fieldId?: string;
      /** Horizontal coordinate in the grid. */
      row?: number | null;
      /** Vertical coordinate in the grid. */
      column?: number | null;
      /** Height. */
      width?: number | null;
      /** Width. */
      height?: number | null;
  }
  interface Margin {
      /** Horizontal value. */
      horizontal?: number | null;
      /** Vertical value. */
      vertical?: number | null;
  }
  interface Section {
      /** Id of the section */
      _id?: string;
      /** Horizontal coordinate in the grid. */
      row?: number | null;
      /**
       * A list of field identifiers that are permitted to be placed within a section.
       * The section will only accept fields with IDs specified in this list.
       * If the section encounters the $new key within the list,
       * it allows the inclusion of fields not explicitly listed,
       * enabling dynamic addition of new fields.
       */
      allowedFieldIds?: string[];
  }
  interface FormRule {
      /** Id of the rule */
      _id?: string;
      /** Rule on which item properties or layouts will be changed. */
      condition?: Record<string, any> | null;
      /**
       * Form items with defined properties that will be
       * changed when given condition is resolved to true.
       */
      overrides?: FormOverride[];
      /** Name of the rule */
      name?: string | null;
  }
  enum OverrideEntityType {
      UNKNOWN = "UNKNOWN",
      FIELD = "FIELD",
      FORM = "FORM",
      NESTED_FORM_FIELD = "NESTED_FORM_FIELD"
  }
  interface FormOverride {
      /** Override entity type. */
      entityType?: OverrideEntityType;
      /** Overridden entity id. Either fieldId, or "{fieldIdWithNestedForm}/{nestedFormFieldId}" */
      entityId?: string | null;
      /** Form entity properties path with new value, that will be changed on condition. */
      valueChanges?: Record<string, any>;
  }
  interface FormProperties {
      /** Form name. */
      name?: string | null;
      /** Identifies if the form is disabled. */
      disabled?: boolean;
  }
  enum Kind {
      REGULAR = "REGULAR",
      EXTENSION = "EXTENSION"
  }
  interface PostSubmissionTriggers {
      /** Upserts a contact from the submission data. */
      upsertContact?: UpsertContact;
  }
  interface UpsertContact {
      /** Fields mapping (target field mapped to corresponding contact field). */
      fieldsMapping?: Record<string, FormFieldContactInfo>;
      /**
       * List of contact label keys.
       * [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
       * help categorize contacts.
       */
      labels?: string[];
  }
  interface FormFieldContactInfo extends FormFieldContactInfoAdditionalInfoOneOf {
      /** Email info. */
      emailInfo?: EmailInfo;
      /** Phone info. */
      phoneInfo?: PhoneInfo;
      /** Address info. */
      addressInfo?: AddressInfo;
      /** Custom field info. */
      customFieldInfo?: CustomFieldInfo;
      /** Subscription info */
      subscriptionInfo?: SubscriptionInfo;
      /** Field mapped to contacts. */
      contactField?: ContactField;
  }
  /** @oneof */
  interface FormFieldContactInfoAdditionalInfoOneOf {
      /** Email info. */
      emailInfo?: EmailInfo;
      /** Phone info. */
      phoneInfo?: PhoneInfo;
      /** Address info. */
      addressInfo?: AddressInfo;
      /** Custom field info. */
      customFieldInfo?: CustomFieldInfo;
      /** Subscription info */
      subscriptionInfo?: SubscriptionInfo;
  }
  enum EmailInfoTag {
      UNTAGGED = "UNTAGGED",
      MAIN = "MAIN"
  }
  enum PhoneInfoTag {
      UNTAGGED = "UNTAGGED",
      MAIN = "MAIN"
  }
  enum Tag {
      UNTAGGED = "UNTAGGED",
      HOME = "HOME"
  }
  enum OptInLevel {
      UNKNOWN = "UNKNOWN",
      SINGLE_CONFIRMATION = "SINGLE_CONFIRMATION",
      DOUBLE_CONFIRMATION = "DOUBLE_CONFIRMATION"
  }
  enum ContactField {
      UNDEFINED = "UNDEFINED",
      FIRST_NAME = "FIRST_NAME",
      LAST_NAME = "LAST_NAME",
      COMPANY = "COMPANY",
      POSITION = "POSITION",
      EMAIL = "EMAIL",
      PHONE = "PHONE",
      ADDRESS = "ADDRESS",
      BIRTHDATE = "BIRTHDATE",
      CUSTOM_FIELD = "CUSTOM_FIELD",
      SUBSCRIPTION = "SUBSCRIPTION",
      VAT_ID = "VAT_ID"
  }
  interface EmailInfo {
      /** Email tag. */
      tag?: EmailInfoTag;
  }
  interface PhoneInfo {
      /** Phone tag. */
      tag?: PhoneInfoTag;
  }
  interface AddressInfo {
      /** Address tag. */
      tag?: Tag;
  }
  interface CustomFieldInfo {
      /** Custom field key. */
      key?: string;
  }
  interface SubscriptionInfo {
      /**
       * Subscription consent opt in level, either single or double confirmation.
       * Default: SINGLE_CONFIRMATION
       */
      optInLevel?: OptInLevel;
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
  interface NestedForm {
      /** Targets which have this form. */
      targets?: string[];
      /** Nested form. */
      form?: Form;
  }
  interface LimitationRule {
      /** Limitation by submission count, disables form when a set amount of submissions is reached. */
      maxAllowedSubmissions?: number | null;
      /** Limitation by submission date, disables form when a set date and time is reached. */
      dateTimeDeadline?: Date;
  }
  enum SpamFilterProtectionLevel {
      UNKNOWN = "UNKNOWN",
      /** Spam filter is not used. Form is open for spam submissions. */
      NONE = "NONE",
      /** Spam filter operates in basic mode. Form is open to high risk of spam submissions. */
      BASIC = "BASIC",
      /** Spam filter operates in advanced mode. Form is open to low risk of spam submissions. */
      ADVANCED = "ADVANCED"
  }
  interface RequiredIndicatorProperties {
      /** Required indicator. */
      requiredIndicator?: RequiredIndicator;
      /** Required indicator placement. */
      requiredIndicatorPlacement?: RequiredIndicatorPlacement;
  }
  interface CreateFormRequest {
      /** Form to be created. */
      form: Form;
  }
  interface CreateFormResponse {
      /** The created form. */
      form?: Form;
  }
  interface BulkCreateFormRequest {
      /** Forms to be created. */
      forms?: Form[];
      /** When set, items will be returned on successful create */
      returnEntity?: boolean;
  }
  interface BulkCreateFormResponse {
      /** Created forms with metadata */
      results?: BulkFormResult[];
      /** Metadata of request */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkFormResult {
      /** Created form metadata */
      itemMetadata?: ItemMetadata;
      /** Created form */
      item?: Form;
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
  interface CloneFormRequest {
      /** Id of the form to clone. */
      formId: string;
  }
  interface CloneFormResponse {
      /** The cloned form. */
      form?: Form;
  }
  interface GetFormRequest {
      /** Id of the form to retrieve. */
      formId: string;
      /**
       * List of additional form fields to include in the response. For example, use the `NESTED_FORMS` fieldset to retrieve the nested forms field in
       * the response in addition to the form’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the form’s base fields are returned.
       */
      fieldsets?: Fieldset[];
  }
  enum Fieldset {
      UNKNOWN = "UNKNOWN",
      /** Includes nested forms when present. */
      NESTED_FORMS = "NESTED_FORMS"
  }
  interface GetFormResponse {
      /** The retrieved form. */
      form?: Form;
  }
  interface UpdateFormRequest {
      /** Form to be updated, may be partial. */
      form: Form;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateFormResponse {
      /** The updated form. */
      form?: Form;
  }
  interface PiiFieldsUpdated {
      /** Collection of fields which are marked as PII */
      piiFields?: string[];
      /** Collection of fields which are non PII */
      nonPiiFields?: string[];
  }
  interface FormChanged {
      /** Form namespace */
      namespace?: string;
      /** Form after update */
      form?: Form;
      /** Form before update */
      formBeforeUpdate?: Form;
  }
  interface RemoveFormFromTrashBinRequest {
      /** Id of the form to delete. */
      formId: string;
  }
  interface RemoveFormFromTrashBinResponse {
  }
  interface DeleteFormRequest {
      /** Id of the form to delete. */
      formId: string;
      /** The revision of the form. */
      revision?: string;
  }
  interface DeleteFormResponse {
  }
  interface FormDeleted {
      /** Form namespace */
      namespace?: string;
      /** Form state on delete moment */
      form?: Form;
  }
  interface RestoreFromTrashBinRequest {
      /** Id of the form to restore. */
      formId: string;
  }
  interface RestoreFromTrashBinResponse {
      /** The restored form. */
      form?: Form;
  }
  interface QueryFormsRequest {
      /** WQL expression, namespace equality filter is required. */
      query: CursorQuery;
      /**
       * Kind of queried forms.
       * REGULAR - will return forms specific to tenant, excluding template based forms.
       * EXTENSION - will return forms based on common templates, with applied user overrides if there are such.
       * @internal
       */
      kind?: Kind;
      /**
       * List of additional form fields to include in the response. For example, use the `NESTED_FORMS` fieldset to retrieve the nested forms field in
       * the response in addition to the form’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the form’s base fields are returned.
       */
      fieldsets?: Fieldset[];
  }
  interface CursorQuery extends CursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CommonCursorPaging;
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
      cursorPaging?: CommonCursorPaging;
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
  interface CommonCursorPaging {
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
  interface QueryFormsResponse {
      /** The retrieved forms */
      forms?: Form[];
      /** Details on the paged set of results returned. */
      metadata?: CommonCursorPagingMetadata;
  }
  interface CommonCursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: CommonCursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface CommonCursors {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface CountFormsRequest {
      /** Namespace name. */
      namespace: string;
      /** Fieldsets. */
      fieldsets?: CountFormsFieldset[];
  }
  enum CountFormsFieldset {
      UNKNOWN = "UNKNOWN",
      /** Include deleted forms count. */
      DELETED = "DELETED"
  }
  interface CountFormsResponse {
      /** Active forms count. */
      activeCount?: number;
      /** Deleted forms count. */
      deletedCount?: number | null;
  }
  interface ListFormsRequest {
      /** Namespace name. */
      namespace: string;
      /** Identifies if the form is disabled. */
      disabled?: boolean | null;
      /**
       * Kind of forms.
       * @internal
       */
      kind?: Kind;
      /**
       * Ordering options.
       *
       * - `UPDATED_DATE_DESC`: Ordered by `updatedDate` in descending order.
       * - `UPDATED_DATE_ASC`: Ordered by `updatedDate` in ascending order.
       * - `CREATED_DATE_ASC`: Ordered by `createdDate` in ascending order.
       * - `CREATED_DATE_DESC`: Ordered by `createdDate` in descending order.
       * - `NAME_ASC`: Ordered by `properties.name` in ascending order.
       * - `NAME_DESC`: Ordered by `properties.name` in descending order.
       *
       * Default: `UPDATED_DATE_DESC`
       */
      order?: ListFormsOrder;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not filter or `order`. */
      paging?: CommonCursorPaging;
      /**
       * List of additional form fields to include in the response. For example, use the `NESTED_FORMS` fieldset to retrieve the nested forms field in
       * the response in addition to the form’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the form’s base fields are returned.
       */
      fieldsets?: Fieldset[];
      /** Form ids. */
      formIds?: string[];
  }
  enum ListFormsOrder {
      /** Sorting by updated date descending. The default value. */
      UPDATED_DATE_DESC = "UPDATED_DATE_DESC",
      /** Sorting by updated date ascending. */
      UPDATED_DATE_ASC = "UPDATED_DATE_ASC",
      /** Sorting by created date ascending. */
      CREATED_DATE_ASC = "CREATED_DATE_ASC",
      /** Sorting by created date descending. */
      CREATED_DATE_DESC = "CREATED_DATE_DESC",
      /** Sorting by name ascending. */
      NAME_ASC = "NAME_ASC",
      /** Sorting by name descending. */
      NAME_DESC = "NAME_DESC"
  }
  interface ListFormsResponse {
      /** The retrieved forms. */
      forms?: Form[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: CommonCursorPagingMetadata;
  }
  interface GetDeletedFormRequest {
      /** Id of the Form to retrieve */
      formId: string;
  }
  interface GetDeletedFormResponse {
      /** The retrieved Form */
      form?: Form;
  }
  interface QueryDeletedFormsRequest {
      /** WQL expression, namespace equality filter is required. */
      query: CursorQuery;
  }
  interface QueryDeletedFormsResponse {
      /** The retrieved Forms */
      forms?: Form[];
      /** Details on the paged set of results returned. */
      metadata?: CommonCursorPagingMetadata;
  }
  interface ListDeletedFormsRequest {
      /** Namespace name. */
      namespace: string;
      /** Identifies if the form is disabled. */
      disabled?: boolean | null;
      /**
       * Kind of forms.
       * @internal
       */
      kind?: Kind;
      /** Form ids. */
      formIds?: string[];
      /**
       * Ordering options.
       *
       * - `UPDATED_DATE_ASC`: Ordered by `updatedDate` in ascending order.
       * - `UPDATED_DATE_DESC`: Ordered by `updatedDate` in descending order.
       * - `NAME_ASC`: Ordered by `properties.name` in ascending order.
       * - `NAME_DESC`: Ordered by `properties.name` in descending order.
       *
       * Default: `UPDATED_DATE_DESC`
       */
      order?: ListDeletedFormsOrder;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not filter or `order`. */
      paging?: CommonCursorPaging;
  }
  enum ListDeletedFormsOrder {
      /** Sorting by updated date descending. The default value. */
      UPDATED_DATE_DESC = "UPDATED_DATE_DESC",
      /** Sorting by updated date ascending. */
      UPDATED_DATE_ASC = "UPDATED_DATE_ASC",
      /** Sorting by name ascending. */
      NAME_ASC = "NAME_ASC",
      /** Sorting by name descending. */
      NAME_DESC = "NAME_DESC"
  }
  interface ListDeletedFormsResponse {
      /** The retrieved forms. */
      forms?: Form[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: CommonCursorPagingMetadata;
  }
  interface BulkRemoveDeletedFieldRequest {
      /** Id of the form to delete. */
      formId: string;
      /** Ids of the deleted fields to remove. */
      fieldsIds?: string[];
  }
  interface BulkRemoveDeletedFieldResponse {
      /** Form with the deleted fields. */
      form?: Form;
  }
  interface SubmissionKeysPermanentlyDeleted {
      /** Keys which should be deleted */
      keys?: string[] | null;
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
      /** namespace that was updated */
      namespace?: string;
      /** only data from UpdateExtendedFieldsRequest namespace_data */
      namespaceData?: Record<string, any> | null;
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
   * Creates a new form.
   * @param form - Form to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField form
   * @requiredField form.fields._id
   * @requiredField form.namespace
   * @requiredField form.rules._id
   * @requiredField form.steps._id
   * @adminMethod
   * @returns The created form.
   */
  function createForm(form: Form): Promise<Form>;
  /**
   * Creates multiple new forms.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.forms.fields._id
   * @requiredField options.forms.namespace
   * @requiredField options.forms.rules._id
   * @requiredField options.forms.steps._id
   * @adminMethod
   */
  function bulkCreateForm(options?: BulkCreateFormOptions): Promise<BulkCreateFormResponse>;
  interface BulkCreateFormOptions {
      /** Forms to be created. */
      forms?: Form[];
      /** When set, items will be returned on successful create */
      returnEntity?: boolean;
  }
  /**
   * Clones an existing form.
   * @param formId - Id of the form to clone.
   * @internal
   * @documentationMaturity preview
   * @requiredField formId
   * @adminMethod
   */
  function cloneForm(formId: string): Promise<CloneFormResponse>;
  /**
   * Gets a form by id.
   * @param formId - Id of the form to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField formId
   * @returns The retrieved form.
   */
  function getForm(formId: string, options?: GetFormOptions): Promise<Form>;
  interface GetFormOptions {
      /**
       * List of additional form fields to include in the response. For example, use the `NESTED_FORMS` fieldset to retrieve the nested forms field in
       * the response in addition to the form’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the form’s base fields are returned.
       */
      fieldsets?: Fieldset[];
  }
  /**
   * Updates a form, supports partial update.
   * Pass the latest `revision` for a successful update.
   * @param _id - Form ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField form
   * @requiredField form.fields._id
   * @requiredField form.revision
   * @requiredField form.rules._id
   * @requiredField form.steps._id
   * @adminMethod
   * @returns The updated form.
   */
  function updateForm(_id: string | null, form: UpdateForm, options?: UpdateFormOptions): Promise<Form>;
  interface UpdateForm {
      /**
       * Form ID.
       * @readonly
       */
      _id?: string | null;
      /** List of form fields that represent input elements. */
      fields?: FormField[];
      /**
       * List of form fields that represent input elements.
       * @readonly
       */
      fieldsV2?: FormFieldV2[];
      /** Defines the layout for form fields in each submission step. */
      steps?: Step[];
      /** Form rules, can be applied to layout and items properties. */
      rules?: FormRule[];
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. For an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date of creation.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date of last update.
       * @readonly
       */
      _updatedDate?: Date;
      /** Properties of the form. */
      properties?: FormProperties;
      /**
       * Fields which were soft deleted.
       * @readonly
       */
      deletedFields?: FormField[];
      /**
       * List of form fields that represent input elements.
       * @readonly
       */
      deletedFieldsV2?: FormFieldV2[];
      /**
       * Regular forms can be freely modified.
       * Extensions are copied from templates and might have restrictions.
       * @readonly
       */
      kind?: Kind;
      /**
       * Defines triggers that will be executed after the submission, for the submissions based on this schema.
       * Forms provide a set of predefined triggers that allow it to assign specific business cases to created forms.
       */
      postSubmissionTriggers?: PostSubmissionTriggers;
      /** Data extensions ExtendedFields. */
      extendedFields?: ExtendedFields;
      /** Identifies the namespace that the form belongs to. */
      namespace?: string;
      /**
       * Nested forms.
       * @internal
       * @readonly
       */
      nestedForms?: NestedForm[];
      /**
       * Media folder ID.
       * @readonly
       */
      mediaFolderId?: string | null;
      /** Rules that limit submissions on this form. */
      limitationRule?: LimitationRule;
      /**
       * Spam filter protection level.
       * Default: ADVANCED.
       */
      spamFilterProtectionLevel?: SpamFilterProtectionLevel;
      /** Required indicator properties. */
      requiredIndicatorProperties?: RequiredIndicatorProperties;
  }
  interface UpdateFormOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Deletes a form. It is stored in trash for 90 days.
   * On form permanent deletion, all submissions are also deleted.
   * @param formId - Id of the form to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField formId
   * @adminMethod
   */
  function removeFormFromTrashBin(formId: string): Promise<void>;
  /**
   * Deletes a form. It is stored in trash for 90 days.
   * On form permanent deletion, all submissions are also deleted.
   * @param formId - Id of the form to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField formId
   * @adminMethod
   */
  function deleteForm(formId: string, options?: DeleteFormOptions): Promise<void>;
  interface DeleteFormOptions {
      /** The revision of the form. */
      revision?: string;
  }
  /**
   * Restores a form from trash.
   * @param formId - Id of the form to restore.
   * @internal
   * @documentationMaturity preview
   * @requiredField formId
   * @adminMethod
   */
  function restoreFromTrashBin(formId: string): Promise<RestoreFromTrashBinResponse>;
  /**
   * Query forms using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * @internal
   * @documentationMaturity preview
   */
  function queryForms(options?: QueryFormsOptions): FormsQueryBuilder;
  interface QueryFormsOptions {
      /**
       * Kind of queried forms.
       * REGULAR - will return forms specific to tenant, excluding template based forms.
       * EXTENSION - will return forms based on common templates, with applied user overrides if there are such.
       * @internal
       */
      kind?: Kind | undefined;
      /**
       * List of additional form fields to include in the response. For example, use the `NESTED_FORMS` fieldset to retrieve the nested forms field in
       * the response in addition to the form’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the form’s base fields are returned.
       */
      fieldsets?: Fieldset[] | undefined;
  }
  interface QueryCursorResult {
      cursors: CommonCursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface FormsQueryResult extends QueryCursorResult {
      items: Form[];
      query: FormsQueryBuilder;
      next: () => Promise<FormsQueryResult>;
      prev: () => Promise<FormsQueryResult>;
  }
  interface FormsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'properties.name' | 'properties.disabled' | 'namespace', value: any) => FormsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'properties.name' | 'properties.disabled', value: any) => FormsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => FormsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => FormsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => FormsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => FormsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: 'properties.name', value: string) => FormsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | '_createdDate' | '_updatedDate' | 'properties.name', value: any) => FormsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | '_createdDate' | '_updatedDate' | 'properties.name' | 'properties.disabled' | 'namespace'>) => FormsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | '_createdDate' | '_updatedDate' | 'properties.name' | 'properties.disabled' | 'namespace'>) => FormsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => FormsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => FormsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<FormsQueryResult>;
  }
  /**
   * Counts forms.
   * @param namespace - Namespace name.
   * @internal
   * @documentationMaturity preview
   * @requiredField namespace
   */
  function countForms(namespace: string, options?: CountFormsOptions): Promise<CountFormsResponse>;
  interface CountFormsOptions {
      /** Fieldsets. */
      fieldsets?: CountFormsFieldset[];
  }
  /**
   * Lists forms, filtered by namespace and its disabled status. If specified, sorts forms in the desired order.
   * Provides a subset of QueryForms supported capabilities.
   * @param namespace - Namespace name.
   * @internal
   * @documentationMaturity preview
   * @requiredField namespace
   */
  function listForms(namespace: string, options?: ListFormsOptions): Promise<ListFormsResponse>;
  interface ListFormsOptions {
      /** Identifies if the form is disabled. */
      disabled?: boolean | null;
      /**
       * Kind of forms.
       * @internal
       */
      kind?: Kind;
      /**
       * Ordering options.
       *
       * - `UPDATED_DATE_DESC`: Ordered by `updatedDate` in descending order.
       * - `UPDATED_DATE_ASC`: Ordered by `updatedDate` in ascending order.
       * - `CREATED_DATE_ASC`: Ordered by `createdDate` in ascending order.
       * - `CREATED_DATE_DESC`: Ordered by `createdDate` in descending order.
       * - `NAME_ASC`: Ordered by `properties.name` in ascending order.
       * - `NAME_DESC`: Ordered by `properties.name` in descending order.
       *
       * Default: `UPDATED_DATE_DESC`
       */
      order?: ListFormsOrder;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not filter or `order`. */
      paging?: CommonCursorPaging;
      /**
       * List of additional form fields to include in the response. For example, use the `NESTED_FORMS` fieldset to retrieve the nested forms field in
       * the response in addition to the form’s base fields. Base fields don’t include any of the supported fieldset values. By default
       * only the form’s base fields are returned.
       */
      fieldsets?: Fieldset[];
      /** Form ids. */
      formIds?: string[];
  }
  /**
   * Get a deleted Form by id
   * @param formId - Id of the Form to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField formId
   */
  function getDeletedForm(formId: string): Promise<GetDeletedFormResponse>;
  /**
   * Query deleted Forms using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @param query - WQL expression, namespace equality filter is required.
   * @internal
   * @documentationMaturity preview
   * @requiredField query
   */
  function queryDeletedForms(query: CursorQuery): Promise<QueryDeletedFormsResponse>;
  /**
   * List deleted Forms
   * @param namespace - Namespace name.
   * @internal
   * @documentationMaturity preview
   * @requiredField namespace
   */
  function listDeletedForms(namespace: string, options?: ListDeletedFormsOptions): Promise<ListDeletedFormsResponse>;
  interface ListDeletedFormsOptions {
      /** Identifies if the form is disabled. */
      disabled?: boolean | null;
      /**
       * Kind of forms.
       * @internal
       */
      kind?: Kind;
      /** Form ids. */
      formIds?: string[];
      /**
       * Ordering options.
       *
       * - `UPDATED_DATE_ASC`: Ordered by `updatedDate` in ascending order.
       * - `UPDATED_DATE_DESC`: Ordered by `updatedDate` in descending order.
       * - `NAME_ASC`: Ordered by `properties.name` in ascending order.
       * - `NAME_DESC`: Ordered by `properties.name` in descending order.
       *
       * Default: `UPDATED_DATE_DESC`
       */
      order?: ListDeletedFormsOrder;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not filter or `order`. */
      paging?: CommonCursorPaging;
  }
  /**
   * Remove delete field by its target
   * @param formId - Id of the form to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField formId
   * @adminMethod
   */
  function bulkRemoveDeletedField(formId: string, options?: BulkRemoveDeletedFieldOptions): Promise<BulkRemoveDeletedFieldResponse>;
  interface BulkRemoveDeletedFieldOptions {
      /** Ids of the deleted fields to remove. */
      fieldsIds?: string[];
  }
  /**
   * Update Extended Fields of the Form
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
  
  type formsV4Form_universal_d_Form = Form;
  type formsV4Form_universal_d_RequiredIndicator = RequiredIndicator;
  const formsV4Form_universal_d_RequiredIndicator: typeof RequiredIndicator;
  type formsV4Form_universal_d_RequiredIndicatorPlacement = RequiredIndicatorPlacement;
  const formsV4Form_universal_d_RequiredIndicatorPlacement: typeof RequiredIndicatorPlacement;
  type formsV4Form_universal_d_FormField = FormField;
  type formsV4Form_universal_d_StringType = StringType;
  type formsV4Form_universal_d_StringTypeFormatOptionsOneOf = StringTypeFormatOptionsOneOf;
  type formsV4Form_universal_d_Format = Format;
  const formsV4Form_universal_d_Format: typeof Format;
  type formsV4Form_universal_d_StringErrorMessages = StringErrorMessages;
  type formsV4Form_universal_d_DateTimeConstraints = DateTimeConstraints;
  type formsV4Form_universal_d_NumberType = NumberType;
  type formsV4Form_universal_d_NumberErrorMessages = NumberErrorMessages;
  type formsV4Form_universal_d_IntegerType = IntegerType;
  type formsV4Form_universal_d_BooleanType = BooleanType;
  type formsV4Form_universal_d_BooleanErrorMessages = BooleanErrorMessages;
  type formsV4Form_universal_d_ArrayType = ArrayType;
  type formsV4Form_universal_d_ObjectType = ObjectType;
  type formsV4Form_universal_d_PropertiesType = PropertiesType;
  type formsV4Form_universal_d_PropertiesTypePropertiesTypeOneOf = PropertiesTypePropertiesTypeOneOf;
  type formsV4Form_universal_d_ObjectErrorMessages = ObjectErrorMessages;
  type formsV4Form_universal_d_ArrayItems = ArrayItems;
  type formsV4Form_universal_d_ArrayItemsItemsOneOf = ArrayItemsItemsOneOf;
  type formsV4Form_universal_d_ArrayErrorMessages = ArrayErrorMessages;
  type formsV4Form_universal_d_PredefinedValidation = PredefinedValidation;
  type formsV4Form_universal_d_PredefinedValidationFormatOptionsOneOf = PredefinedValidationFormatOptionsOneOf;
  type formsV4Form_universal_d_ValidationFormat = ValidationFormat;
  const formsV4Form_universal_d_ValidationFormat: typeof ValidationFormat;
  type formsV4Form_universal_d_PaymentType = PaymentType;
  type formsV4Form_universal_d_ProductType = ProductType;
  const formsV4Form_universal_d_ProductType: typeof ProductType;
  type formsV4Form_universal_d_PriceType = PriceType;
  const formsV4Form_universal_d_PriceType: typeof PriceType;
  type formsV4Form_universal_d_QuantityLimit = QuantityLimit;
  type formsV4Form_universal_d_FixedPriceOptions = FixedPriceOptions;
  type formsV4Form_universal_d_DynamicPriceOptions = DynamicPriceOptions;
  type formsV4Form_universal_d_Product = Product;
  type formsV4Form_universal_d_ProductPriceOptionsOneOf = ProductPriceOptionsOneOf;
  type formsV4Form_universal_d_NestedFormFieldOverrides = NestedFormFieldOverrides;
  type formsV4Form_universal_d_Validation = Validation;
  type formsV4Form_universal_d_ValidationValidationOneOf = ValidationValidationOneOf;
  type formsV4Form_universal_d_DataExtensionsDetails = DataExtensionsDetails;
  type formsV4Form_universal_d_NestedFormOverrides = NestedFormOverrides;
  type formsV4Form_universal_d_FormFieldV2 = FormFieldV2;
  type formsV4Form_universal_d_FormFieldV2FieldTypeOptionsOneOf = FormFieldV2FieldTypeOptionsOneOf;
  type formsV4Form_universal_d_InputFieldStringType = InputFieldStringType;
  type formsV4Form_universal_d_FormatEnumFormat = FormatEnumFormat;
  const formsV4Form_universal_d_FormatEnumFormat: typeof FormatEnumFormat;
  type formsV4Form_universal_d_InputFieldStringErrorMessages = InputFieldStringErrorMessages;
  type formsV4Form_universal_d_StringComponentType = StringComponentType;
  const formsV4Form_universal_d_StringComponentType: typeof StringComponentType;
  type formsV4Form_universal_d_TextInput = TextInput;
  type formsV4Form_universal_d_RichContent = RichContent;
  type formsV4Form_universal_d_Node = Node;
  type formsV4Form_universal_d_NodeDataOneOf = NodeDataOneOf;
  type formsV4Form_universal_d_NodeType = NodeType;
  const formsV4Form_universal_d_NodeType: typeof NodeType;
  type formsV4Form_universal_d_NodeStyle = NodeStyle;
  type formsV4Form_universal_d_ButtonData = ButtonData;
  type formsV4Form_universal_d_Border = Border;
  type formsV4Form_universal_d_Colors = Colors;
  type formsV4Form_universal_d_PluginContainerData = PluginContainerData;
  type formsV4Form_universal_d_WidthType = WidthType;
  const formsV4Form_universal_d_WidthType: typeof WidthType;
  type formsV4Form_universal_d_PluginContainerDataWidth = PluginContainerDataWidth;
  type formsV4Form_universal_d_PluginContainerDataWidthDataOneOf = PluginContainerDataWidthDataOneOf;
  type formsV4Form_universal_d_PluginContainerDataAlignment = PluginContainerDataAlignment;
  const formsV4Form_universal_d_PluginContainerDataAlignment: typeof PluginContainerDataAlignment;
  type formsV4Form_universal_d_Spoiler = Spoiler;
  type formsV4Form_universal_d_Height = Height;
  type formsV4Form_universal_d_Type = Type;
  const formsV4Form_universal_d_Type: typeof Type;
  type formsV4Form_universal_d_Styles = Styles;
  type formsV4Form_universal_d_Link = Link;
  type formsV4Form_universal_d_LinkDataOneOf = LinkDataOneOf;
  type formsV4Form_universal_d_LinkTarget = LinkTarget;
  const formsV4Form_universal_d_LinkTarget: typeof LinkTarget;
  type formsV4Form_universal_d_Rel = Rel;
  type formsV4Form_universal_d_CodeBlockData = CodeBlockData;
  type formsV4Form_universal_d_TextStyle = TextStyle;
  type formsV4Form_universal_d_TextAlignment = TextAlignment;
  const formsV4Form_universal_d_TextAlignment: typeof TextAlignment;
  type formsV4Form_universal_d_DividerData = DividerData;
  type formsV4Form_universal_d_LineStyle = LineStyle;
  const formsV4Form_universal_d_LineStyle: typeof LineStyle;
  type formsV4Form_universal_d_Width = Width;
  const formsV4Form_universal_d_Width: typeof Width;
  type formsV4Form_universal_d_Alignment = Alignment;
  const formsV4Form_universal_d_Alignment: typeof Alignment;
  type formsV4Form_universal_d_FileData = FileData;
  type formsV4Form_universal_d_ViewMode = ViewMode;
  const formsV4Form_universal_d_ViewMode: typeof ViewMode;
  type formsV4Form_universal_d_FileSource = FileSource;
  type formsV4Form_universal_d_FileSourceDataOneOf = FileSourceDataOneOf;
  type formsV4Form_universal_d_PDFSettings = PDFSettings;
  type formsV4Form_universal_d_GalleryData = GalleryData;
  type formsV4Form_universal_d_Media = Media;
  type formsV4Form_universal_d_Image = Image;
  type formsV4Form_universal_d_Video = Video;
  type formsV4Form_universal_d_Item = Item;
  type formsV4Form_universal_d_ItemDataOneOf = ItemDataOneOf;
  type formsV4Form_universal_d_GalleryOptions = GalleryOptions;
  type formsV4Form_universal_d_LayoutType = LayoutType;
  const formsV4Form_universal_d_LayoutType: typeof LayoutType;
  type formsV4Form_universal_d_Orientation = Orientation;
  const formsV4Form_universal_d_Orientation: typeof Orientation;
  type formsV4Form_universal_d_Crop = Crop;
  const formsV4Form_universal_d_Crop: typeof Crop;
  type formsV4Form_universal_d_ThumbnailsAlignment = ThumbnailsAlignment;
  const formsV4Form_universal_d_ThumbnailsAlignment: typeof ThumbnailsAlignment;
  type formsV4Form_universal_d_Layout = Layout;
  type formsV4Form_universal_d_ItemStyle = ItemStyle;
  type formsV4Form_universal_d_Thumbnails = Thumbnails;
  type formsV4Form_universal_d_GIFData = GIFData;
  type formsV4Form_universal_d_GIF = GIF;
  type formsV4Form_universal_d_HeadingData = HeadingData;
  type formsV4Form_universal_d_HTMLData = HTMLData;
  type formsV4Form_universal_d_HTMLDataDataOneOf = HTMLDataDataOneOf;
  type formsV4Form_universal_d_Source = Source;
  const formsV4Form_universal_d_Source: typeof Source;
  type formsV4Form_universal_d_ImageData = ImageData;
  type formsV4Form_universal_d_LinkPreviewData = LinkPreviewData;
  type formsV4Form_universal_d_MapData = MapData;
  type formsV4Form_universal_d_MapSettings = MapSettings;
  type formsV4Form_universal_d_MapType = MapType;
  const formsV4Form_universal_d_MapType: typeof MapType;
  type formsV4Form_universal_d_ParagraphData = ParagraphData;
  type formsV4Form_universal_d_PollData = PollData;
  type formsV4Form_universal_d_ViewRole = ViewRole;
  const formsV4Form_universal_d_ViewRole: typeof ViewRole;
  type formsV4Form_universal_d_VoteRole = VoteRole;
  const formsV4Form_universal_d_VoteRole: typeof VoteRole;
  type formsV4Form_universal_d_Permissions = Permissions;
  type formsV4Form_universal_d_PollOption = PollOption;
  type formsV4Form_universal_d_Settings = Settings;
  type formsV4Form_universal_d_PollLayoutType = PollLayoutType;
  const formsV4Form_universal_d_PollLayoutType: typeof PollLayoutType;
  type formsV4Form_universal_d_PollLayoutDirection = PollLayoutDirection;
  const formsV4Form_universal_d_PollLayoutDirection: typeof PollLayoutDirection;
  type formsV4Form_universal_d_PollLayout = PollLayout;
  type formsV4Form_universal_d_OptionLayout = OptionLayout;
  type formsV4Form_universal_d_BackgroundType = BackgroundType;
  const formsV4Form_universal_d_BackgroundType: typeof BackgroundType;
  type formsV4Form_universal_d_Gradient = Gradient;
  type formsV4Form_universal_d_Background = Background;
  type formsV4Form_universal_d_BackgroundBackgroundOneOf = BackgroundBackgroundOneOf;
  type formsV4Form_universal_d_PollDesign = PollDesign;
  type formsV4Form_universal_d_OptionDesign = OptionDesign;
  type formsV4Form_universal_d_Poll = Poll;
  type formsV4Form_universal_d_PollDataLayout = PollDataLayout;
  type formsV4Form_universal_d_Design = Design;
  type formsV4Form_universal_d_TextData = TextData;
  type formsV4Form_universal_d_Decoration = Decoration;
  type formsV4Form_universal_d_DecorationDataOneOf = DecorationDataOneOf;
  type formsV4Form_universal_d_DecorationType = DecorationType;
  const formsV4Form_universal_d_DecorationType: typeof DecorationType;
  type formsV4Form_universal_d_AnchorData = AnchorData;
  type formsV4Form_universal_d_ColorData = ColorData;
  type formsV4Form_universal_d_LinkData = LinkData;
  type formsV4Form_universal_d_MentionData = MentionData;
  type formsV4Form_universal_d_FontSizeData = FontSizeData;
  type formsV4Form_universal_d_FontType = FontType;
  const formsV4Form_universal_d_FontType: typeof FontType;
  type formsV4Form_universal_d_AppEmbedData = AppEmbedData;
  type formsV4Form_universal_d_AppEmbedDataAppDataOneOf = AppEmbedDataAppDataOneOf;
  type formsV4Form_universal_d_AppType = AppType;
  const formsV4Form_universal_d_AppType: typeof AppType;
  type formsV4Form_universal_d_BookingData = BookingData;
  type formsV4Form_universal_d_EventData = EventData;
  type formsV4Form_universal_d_VideoData = VideoData;
  type formsV4Form_universal_d_PlaybackOptions = PlaybackOptions;
  type formsV4Form_universal_d_EmbedData = EmbedData;
  type formsV4Form_universal_d_Oembed = Oembed;
  type formsV4Form_universal_d_CollapsibleListData = CollapsibleListData;
  type formsV4Form_universal_d_InitialExpandedItems = InitialExpandedItems;
  const formsV4Form_universal_d_InitialExpandedItems: typeof InitialExpandedItems;
  type formsV4Form_universal_d_Direction = Direction;
  const formsV4Form_universal_d_Direction: typeof Direction;
  type formsV4Form_universal_d_TableData = TableData;
  type formsV4Form_universal_d_Dimensions = Dimensions;
  type formsV4Form_universal_d_TableCellData = TableCellData;
  type formsV4Form_universal_d_VerticalAlignment = VerticalAlignment;
  const formsV4Form_universal_d_VerticalAlignment: typeof VerticalAlignment;
  type formsV4Form_universal_d_CellStyle = CellStyle;
  type formsV4Form_universal_d_BorderColors = BorderColors;
  type formsV4Form_universal_d_NullValue = NullValue;
  const formsV4Form_universal_d_NullValue: typeof NullValue;
  type formsV4Form_universal_d_ListValue = ListValue;
  type formsV4Form_universal_d_AudioData = AudioData;
  type formsV4Form_universal_d_OrderedListData = OrderedListData;
  type formsV4Form_universal_d_BulletedListData = BulletedListData;
  type formsV4Form_universal_d_BlockquoteData = BlockquoteData;
  type formsV4Form_universal_d_Metadata = Metadata;
  type formsV4Form_universal_d_DocumentStyle = DocumentStyle;
  type formsV4Form_universal_d_TextNodeStyle = TextNodeStyle;
  type formsV4Form_universal_d_RadioGroup = RadioGroup;
  type formsV4Form_universal_d_RadioGroupOption = RadioGroupOption;
  type formsV4Form_universal_d_RadioGroupCustomOption = RadioGroupCustomOption;
  type formsV4Form_universal_d_Dropdown = Dropdown;
  type formsV4Form_universal_d_DropdownOption = DropdownOption;
  type formsV4Form_universal_d_DropdownCustomOption = DropdownCustomOption;
  type formsV4Form_universal_d_DateTimeInput = DateTimeInput;
  type formsV4Form_universal_d_DateTimeInputDateTimeInputTypeOptionsOneOf = DateTimeInputDateTimeInputTypeOptionsOneOf;
  type formsV4Form_universal_d_DateFormatPart = DateFormatPart;
  const formsV4Form_universal_d_DateFormatPart: typeof DateFormatPart;
  type formsV4Form_universal_d_FirstDayOfWeek = FirstDayOfWeek;
  const formsV4Form_universal_d_FirstDayOfWeek: typeof FirstDayOfWeek;
  type formsV4Form_universal_d_DateTimeInputType = DateTimeInputType;
  const formsV4Form_universal_d_DateTimeInputType: typeof DateTimeInputType;
  type formsV4Form_universal_d_DateTimeOptions = DateTimeOptions;
  type formsV4Form_universal_d_DateOptions = DateOptions;
  type formsV4Form_universal_d_TimeOptions = TimeOptions;
  type formsV4Form_universal_d_DatePickerOptions = DatePickerOptions;
  type formsV4Form_universal_d_InputFieldNumberType = InputFieldNumberType;
  type formsV4Form_universal_d_InputFieldNumberErrorMessages = InputFieldNumberErrorMessages;
  type formsV4Form_universal_d_NumberComponentType = NumberComponentType;
  const formsV4Form_universal_d_NumberComponentType: typeof NumberComponentType;
  type formsV4Form_universal_d_NumberInput = NumberInput;
  type formsV4Form_universal_d_InputFieldBooleanType = InputFieldBooleanType;
  type formsV4Form_universal_d_InputFieldBooleanErrorMessages = InputFieldBooleanErrorMessages;
  type formsV4Form_universal_d_BooleanComponentType = BooleanComponentType;
  const formsV4Form_universal_d_BooleanComponentType: typeof BooleanComponentType;
  type formsV4Form_universal_d_Checkbox = Checkbox;
  type formsV4Form_universal_d_InputFieldArrayType = InputFieldArrayType;
  type formsV4Form_universal_d_ItemType = ItemType;
  const formsV4Form_universal_d_ItemType: typeof ItemType;
  type formsV4Form_universal_d_InputFieldIntegerType = InputFieldIntegerType;
  type formsV4Form_universal_d_InputFieldObjectType = InputFieldObjectType;
  type formsV4Form_universal_d_PropertiesTypePropertiesType = PropertiesTypePropertiesType;
  const formsV4Form_universal_d_PropertiesTypePropertiesType: typeof PropertiesTypePropertiesType;
  type formsV4Form_universal_d_ObjectTypePropertiesType = ObjectTypePropertiesType;
  type formsV4Form_universal_d_ObjectTypePropertiesTypePropertiesTypeOptionsOneOf = ObjectTypePropertiesTypePropertiesTypeOptionsOneOf;
  type formsV4Form_universal_d_InputFieldObjectErrorMessages = InputFieldObjectErrorMessages;
  type formsV4Form_universal_d_ArrayTypeArrayItems = ArrayTypeArrayItems;
  type formsV4Form_universal_d_ArrayTypeArrayItemsItemTypeOptionsOneOf = ArrayTypeArrayItemsItemTypeOptionsOneOf;
  type formsV4Form_universal_d_InputFieldArrayErrorMessages = InputFieldArrayErrorMessages;
  type formsV4Form_universal_d_ComponentType = ComponentType;
  const formsV4Form_universal_d_ComponentType: typeof ComponentType;
  type formsV4Form_universal_d_CheckboxGroup = CheckboxGroup;
  type formsV4Form_universal_d_MediaItem = MediaItem;
  type formsV4Form_universal_d_MediaItemMediaOneOf = MediaItemMediaOneOf;
  type formsV4Form_universal_d_Option = Option;
  type formsV4Form_universal_d_CustomOption = CustomOption;
  type formsV4Form_universal_d_WixFileComponentType = WixFileComponentType;
  const formsV4Form_universal_d_WixFileComponentType: typeof WixFileComponentType;
  type formsV4Form_universal_d_FileUpload = FileUpload;
  type formsV4Form_universal_d_UploadFileFormat = UploadFileFormat;
  const formsV4Form_universal_d_UploadFileFormat: typeof UploadFileFormat;
  type formsV4Form_universal_d_Signature = Signature;
  type formsV4Form_universal_d_PaymentComponentType = PaymentComponentType;
  const formsV4Form_universal_d_PaymentComponentType: typeof PaymentComponentType;
  type formsV4Form_universal_d_ProductCheckboxGroup = ProductCheckboxGroup;
  type formsV4Form_universal_d_ProductCheckboxGroupOption = ProductCheckboxGroupOption;
  type formsV4Form_universal_d_DonationInput = DonationInput;
  type formsV4Form_universal_d_DonationInputOption = DonationInputOption;
  type formsV4Form_universal_d_CommonCustomOption = CommonCustomOption;
  type formsV4Form_universal_d_NumberOfColumns = NumberOfColumns;
  const formsV4Form_universal_d_NumberOfColumns: typeof NumberOfColumns;
  type formsV4Form_universal_d_InputType = InputType;
  const formsV4Form_universal_d_InputType: typeof InputType;
  type formsV4Form_universal_d__String = _String;
  type formsV4Form_universal_d__StringComponentTypeOptionsOneOf = _StringComponentTypeOptionsOneOf;
  type formsV4Form_universal_d__Number = _Number;
  type formsV4Form_universal_d__NumberComponentTypeOptionsOneOf = _NumberComponentTypeOptionsOneOf;
  type formsV4Form_universal_d__Boolean = _Boolean;
  type formsV4Form_universal_d__BooleanComponentTypeOptionsOneOf = _BooleanComponentTypeOptionsOneOf;
  type formsV4Form_universal_d__Array = _Array;
  type formsV4Form_universal_d__ArrayComponentTypeOptionsOneOf = _ArrayComponentTypeOptionsOneOf;
  type formsV4Form_universal_d__Object = _Object;
  type formsV4Form_universal_d__ObjectValidationOneOf = _ObjectValidationOneOf;
  type formsV4Form_universal_d_WixFile = WixFile;
  type formsV4Form_universal_d_WixFileComponentTypeOptionsOneOf = WixFileComponentTypeOptionsOneOf;
  type formsV4Form_universal_d_Payment = Payment;
  type formsV4Form_universal_d_PaymentComponentTypeOptionsOneOf = PaymentComponentTypeOptionsOneOf;
  type formsV4Form_universal_d_Header = Header;
  type formsV4Form_universal_d_RichText = RichText;
  type formsV4Form_universal_d_Target = Target;
  const formsV4Form_universal_d_Target: typeof Target;
  type formsV4Form_universal_d_ThankYouMessage = ThankYouMessage;
  type formsV4Form_universal_d_Redirect = Redirect;
  type formsV4Form_universal_d_FieldType = FieldType;
  const formsV4Form_universal_d_FieldType: typeof FieldType;
  type formsV4Form_universal_d_InputField = InputField;
  type formsV4Form_universal_d_InputFieldInputTypeOptionsOneOf = InputFieldInputTypeOptionsOneOf;
  type formsV4Form_universal_d_DisplayField = DisplayField;
  type formsV4Form_universal_d_DisplayFieldComponentTypeOneOf = DisplayFieldComponentTypeOneOf;
  type formsV4Form_universal_d_SubmitButton = SubmitButton;
  type formsV4Form_universal_d_SubmitButtonSubmitActionOneOf = SubmitButtonSubmitActionOneOf;
  type formsV4Form_universal_d_Step = Step;
  type formsV4Form_universal_d_FormLayout = FormLayout;
  type formsV4Form_universal_d_BreakPoint = BreakPoint;
  type formsV4Form_universal_d_ItemLayout = ItemLayout;
  type formsV4Form_universal_d_Margin = Margin;
  type formsV4Form_universal_d_Section = Section;
  type formsV4Form_universal_d_FormRule = FormRule;
  type formsV4Form_universal_d_OverrideEntityType = OverrideEntityType;
  const formsV4Form_universal_d_OverrideEntityType: typeof OverrideEntityType;
  type formsV4Form_universal_d_FormOverride = FormOverride;
  type formsV4Form_universal_d_FormProperties = FormProperties;
  type formsV4Form_universal_d_Kind = Kind;
  const formsV4Form_universal_d_Kind: typeof Kind;
  type formsV4Form_universal_d_PostSubmissionTriggers = PostSubmissionTriggers;
  type formsV4Form_universal_d_UpsertContact = UpsertContact;
  type formsV4Form_universal_d_FormFieldContactInfo = FormFieldContactInfo;
  type formsV4Form_universal_d_FormFieldContactInfoAdditionalInfoOneOf = FormFieldContactInfoAdditionalInfoOneOf;
  type formsV4Form_universal_d_EmailInfoTag = EmailInfoTag;
  const formsV4Form_universal_d_EmailInfoTag: typeof EmailInfoTag;
  type formsV4Form_universal_d_PhoneInfoTag = PhoneInfoTag;
  const formsV4Form_universal_d_PhoneInfoTag: typeof PhoneInfoTag;
  type formsV4Form_universal_d_Tag = Tag;
  const formsV4Form_universal_d_Tag: typeof Tag;
  type formsV4Form_universal_d_OptInLevel = OptInLevel;
  const formsV4Form_universal_d_OptInLevel: typeof OptInLevel;
  type formsV4Form_universal_d_ContactField = ContactField;
  const formsV4Form_universal_d_ContactField: typeof ContactField;
  type formsV4Form_universal_d_EmailInfo = EmailInfo;
  type formsV4Form_universal_d_PhoneInfo = PhoneInfo;
  type formsV4Form_universal_d_AddressInfo = AddressInfo;
  type formsV4Form_universal_d_CustomFieldInfo = CustomFieldInfo;
  type formsV4Form_universal_d_SubscriptionInfo = SubscriptionInfo;
  type formsV4Form_universal_d_ExtendedFields = ExtendedFields;
  type formsV4Form_universal_d_NestedForm = NestedForm;
  type formsV4Form_universal_d_LimitationRule = LimitationRule;
  type formsV4Form_universal_d_SpamFilterProtectionLevel = SpamFilterProtectionLevel;
  const formsV4Form_universal_d_SpamFilterProtectionLevel: typeof SpamFilterProtectionLevel;
  type formsV4Form_universal_d_RequiredIndicatorProperties = RequiredIndicatorProperties;
  type formsV4Form_universal_d_CreateFormRequest = CreateFormRequest;
  type formsV4Form_universal_d_CreateFormResponse = CreateFormResponse;
  type formsV4Form_universal_d_BulkCreateFormRequest = BulkCreateFormRequest;
  type formsV4Form_universal_d_BulkCreateFormResponse = BulkCreateFormResponse;
  type formsV4Form_universal_d_BulkFormResult = BulkFormResult;
  type formsV4Form_universal_d_ItemMetadata = ItemMetadata;
  type formsV4Form_universal_d_ApplicationError = ApplicationError;
  type formsV4Form_universal_d_BulkActionMetadata = BulkActionMetadata;
  type formsV4Form_universal_d_CloneFormRequest = CloneFormRequest;
  type formsV4Form_universal_d_CloneFormResponse = CloneFormResponse;
  type formsV4Form_universal_d_GetFormRequest = GetFormRequest;
  type formsV4Form_universal_d_Fieldset = Fieldset;
  const formsV4Form_universal_d_Fieldset: typeof Fieldset;
  type formsV4Form_universal_d_GetFormResponse = GetFormResponse;
  type formsV4Form_universal_d_UpdateFormRequest = UpdateFormRequest;
  type formsV4Form_universal_d_UpdateFormResponse = UpdateFormResponse;
  type formsV4Form_universal_d_PiiFieldsUpdated = PiiFieldsUpdated;
  type formsV4Form_universal_d_FormChanged = FormChanged;
  type formsV4Form_universal_d_RemoveFormFromTrashBinRequest = RemoveFormFromTrashBinRequest;
  type formsV4Form_universal_d_RemoveFormFromTrashBinResponse = RemoveFormFromTrashBinResponse;
  type formsV4Form_universal_d_DeleteFormRequest = DeleteFormRequest;
  type formsV4Form_universal_d_DeleteFormResponse = DeleteFormResponse;
  type formsV4Form_universal_d_FormDeleted = FormDeleted;
  type formsV4Form_universal_d_RestoreFromTrashBinRequest = RestoreFromTrashBinRequest;
  type formsV4Form_universal_d_RestoreFromTrashBinResponse = RestoreFromTrashBinResponse;
  type formsV4Form_universal_d_QueryFormsRequest = QueryFormsRequest;
  type formsV4Form_universal_d_CursorQuery = CursorQuery;
  type formsV4Form_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type formsV4Form_universal_d_Sorting = Sorting;
  type formsV4Form_universal_d_SortOrder = SortOrder;
  const formsV4Form_universal_d_SortOrder: typeof SortOrder;
  type formsV4Form_universal_d_CommonCursorPaging = CommonCursorPaging;
  type formsV4Form_universal_d_QueryFormsResponse = QueryFormsResponse;
  type formsV4Form_universal_d_CommonCursorPagingMetadata = CommonCursorPagingMetadata;
  type formsV4Form_universal_d_CommonCursors = CommonCursors;
  type formsV4Form_universal_d_CountFormsRequest = CountFormsRequest;
  type formsV4Form_universal_d_CountFormsFieldset = CountFormsFieldset;
  const formsV4Form_universal_d_CountFormsFieldset: typeof CountFormsFieldset;
  type formsV4Form_universal_d_CountFormsResponse = CountFormsResponse;
  type formsV4Form_universal_d_ListFormsRequest = ListFormsRequest;
  type formsV4Form_universal_d_ListFormsOrder = ListFormsOrder;
  const formsV4Form_universal_d_ListFormsOrder: typeof ListFormsOrder;
  type formsV4Form_universal_d_ListFormsResponse = ListFormsResponse;
  type formsV4Form_universal_d_GetDeletedFormRequest = GetDeletedFormRequest;
  type formsV4Form_universal_d_GetDeletedFormResponse = GetDeletedFormResponse;
  type formsV4Form_universal_d_QueryDeletedFormsRequest = QueryDeletedFormsRequest;
  type formsV4Form_universal_d_QueryDeletedFormsResponse = QueryDeletedFormsResponse;
  type formsV4Form_universal_d_ListDeletedFormsRequest = ListDeletedFormsRequest;
  type formsV4Form_universal_d_ListDeletedFormsOrder = ListDeletedFormsOrder;
  const formsV4Form_universal_d_ListDeletedFormsOrder: typeof ListDeletedFormsOrder;
  type formsV4Form_universal_d_ListDeletedFormsResponse = ListDeletedFormsResponse;
  type formsV4Form_universal_d_BulkRemoveDeletedFieldRequest = BulkRemoveDeletedFieldRequest;
  type formsV4Form_universal_d_BulkRemoveDeletedFieldResponse = BulkRemoveDeletedFieldResponse;
  type formsV4Form_universal_d_SubmissionKeysPermanentlyDeleted = SubmissionKeysPermanentlyDeleted;
  type formsV4Form_universal_d_UpdateExtendedFieldsRequest = UpdateExtendedFieldsRequest;
  type formsV4Form_universal_d_UpdateExtendedFieldsResponse = UpdateExtendedFieldsResponse;
  type formsV4Form_universal_d_DomainEvent = DomainEvent;
  type formsV4Form_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type formsV4Form_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type formsV4Form_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type formsV4Form_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type formsV4Form_universal_d_ActionEvent = ActionEvent;
  type formsV4Form_universal_d_Empty = Empty;
  type formsV4Form_universal_d_MessageEnvelope = MessageEnvelope;
  type formsV4Form_universal_d_IdentificationData = IdentificationData;
  type formsV4Form_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type formsV4Form_universal_d_WebhookIdentityType = WebhookIdentityType;
  const formsV4Form_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const formsV4Form_universal_d_createForm: typeof createForm;
  const formsV4Form_universal_d_bulkCreateForm: typeof bulkCreateForm;
  type formsV4Form_universal_d_BulkCreateFormOptions = BulkCreateFormOptions;
  const formsV4Form_universal_d_cloneForm: typeof cloneForm;
  const formsV4Form_universal_d_getForm: typeof getForm;
  type formsV4Form_universal_d_GetFormOptions = GetFormOptions;
  const formsV4Form_universal_d_updateForm: typeof updateForm;
  type formsV4Form_universal_d_UpdateForm = UpdateForm;
  type formsV4Form_universal_d_UpdateFormOptions = UpdateFormOptions;
  const formsV4Form_universal_d_removeFormFromTrashBin: typeof removeFormFromTrashBin;
  const formsV4Form_universal_d_deleteForm: typeof deleteForm;
  type formsV4Form_universal_d_DeleteFormOptions = DeleteFormOptions;
  const formsV4Form_universal_d_restoreFromTrashBin: typeof restoreFromTrashBin;
  const formsV4Form_universal_d_queryForms: typeof queryForms;
  type formsV4Form_universal_d_QueryFormsOptions = QueryFormsOptions;
  type formsV4Form_universal_d_FormsQueryResult = FormsQueryResult;
  type formsV4Form_universal_d_FormsQueryBuilder = FormsQueryBuilder;
  const formsV4Form_universal_d_countForms: typeof countForms;
  type formsV4Form_universal_d_CountFormsOptions = CountFormsOptions;
  const formsV4Form_universal_d_listForms: typeof listForms;
  type formsV4Form_universal_d_ListFormsOptions = ListFormsOptions;
  const formsV4Form_universal_d_getDeletedForm: typeof getDeletedForm;
  const formsV4Form_universal_d_queryDeletedForms: typeof queryDeletedForms;
  const formsV4Form_universal_d_listDeletedForms: typeof listDeletedForms;
  type formsV4Form_universal_d_ListDeletedFormsOptions = ListDeletedFormsOptions;
  const formsV4Form_universal_d_bulkRemoveDeletedField: typeof bulkRemoveDeletedField;
  type formsV4Form_universal_d_BulkRemoveDeletedFieldOptions = BulkRemoveDeletedFieldOptions;
  const formsV4Form_universal_d_updateExtendedFields: typeof updateExtendedFields;
  type formsV4Form_universal_d_UpdateExtendedFieldsOptions = UpdateExtendedFieldsOptions;
  namespace formsV4Form_universal_d {
    export {
      formsV4Form_universal_d_Form as Form,
      formsV4Form_universal_d_RequiredIndicator as RequiredIndicator,
      formsV4Form_universal_d_RequiredIndicatorPlacement as RequiredIndicatorPlacement,
      formsV4Form_universal_d_FormField as FormField,
      formsV4Form_universal_d_StringType as StringType,
      formsV4Form_universal_d_StringTypeFormatOptionsOneOf as StringTypeFormatOptionsOneOf,
      formsV4Form_universal_d_Format as Format,
      formsV4Form_universal_d_StringErrorMessages as StringErrorMessages,
      formsV4Form_universal_d_DateTimeConstraints as DateTimeConstraints,
      formsV4Form_universal_d_NumberType as NumberType,
      formsV4Form_universal_d_NumberErrorMessages as NumberErrorMessages,
      formsV4Form_universal_d_IntegerType as IntegerType,
      formsV4Form_universal_d_BooleanType as BooleanType,
      formsV4Form_universal_d_BooleanErrorMessages as BooleanErrorMessages,
      formsV4Form_universal_d_ArrayType as ArrayType,
      formsV4Form_universal_d_ObjectType as ObjectType,
      formsV4Form_universal_d_PropertiesType as PropertiesType,
      formsV4Form_universal_d_PropertiesTypePropertiesTypeOneOf as PropertiesTypePropertiesTypeOneOf,
      formsV4Form_universal_d_ObjectErrorMessages as ObjectErrorMessages,
      formsV4Form_universal_d_ArrayItems as ArrayItems,
      formsV4Form_universal_d_ArrayItemsItemsOneOf as ArrayItemsItemsOneOf,
      formsV4Form_universal_d_ArrayErrorMessages as ArrayErrorMessages,
      formsV4Form_universal_d_PredefinedValidation as PredefinedValidation,
      formsV4Form_universal_d_PredefinedValidationFormatOptionsOneOf as PredefinedValidationFormatOptionsOneOf,
      formsV4Form_universal_d_ValidationFormat as ValidationFormat,
      formsV4Form_universal_d_PaymentType as PaymentType,
      formsV4Form_universal_d_ProductType as ProductType,
      formsV4Form_universal_d_PriceType as PriceType,
      formsV4Form_universal_d_QuantityLimit as QuantityLimit,
      formsV4Form_universal_d_FixedPriceOptions as FixedPriceOptions,
      formsV4Form_universal_d_DynamicPriceOptions as DynamicPriceOptions,
      formsV4Form_universal_d_Product as Product,
      formsV4Form_universal_d_ProductPriceOptionsOneOf as ProductPriceOptionsOneOf,
      formsV4Form_universal_d_NestedFormFieldOverrides as NestedFormFieldOverrides,
      formsV4Form_universal_d_Validation as Validation,
      formsV4Form_universal_d_ValidationValidationOneOf as ValidationValidationOneOf,
      formsV4Form_universal_d_DataExtensionsDetails as DataExtensionsDetails,
      formsV4Form_universal_d_NestedFormOverrides as NestedFormOverrides,
      formsV4Form_universal_d_FormFieldV2 as FormFieldV2,
      formsV4Form_universal_d_FormFieldV2FieldTypeOptionsOneOf as FormFieldV2FieldTypeOptionsOneOf,
      formsV4Form_universal_d_InputFieldStringType as InputFieldStringType,
      formsV4Form_universal_d_FormatEnumFormat as FormatEnumFormat,
      formsV4Form_universal_d_InputFieldStringErrorMessages as InputFieldStringErrorMessages,
      formsV4Form_universal_d_StringComponentType as StringComponentType,
      formsV4Form_universal_d_TextInput as TextInput,
      formsV4Form_universal_d_RichContent as RichContent,
      formsV4Form_universal_d_Node as Node,
      formsV4Form_universal_d_NodeDataOneOf as NodeDataOneOf,
      formsV4Form_universal_d_NodeType as NodeType,
      formsV4Form_universal_d_NodeStyle as NodeStyle,
      formsV4Form_universal_d_ButtonData as ButtonData,
      formsV4Form_universal_d_Border as Border,
      formsV4Form_universal_d_Colors as Colors,
      formsV4Form_universal_d_PluginContainerData as PluginContainerData,
      formsV4Form_universal_d_WidthType as WidthType,
      formsV4Form_universal_d_PluginContainerDataWidth as PluginContainerDataWidth,
      formsV4Form_universal_d_PluginContainerDataWidthDataOneOf as PluginContainerDataWidthDataOneOf,
      formsV4Form_universal_d_PluginContainerDataAlignment as PluginContainerDataAlignment,
      formsV4Form_universal_d_Spoiler as Spoiler,
      formsV4Form_universal_d_Height as Height,
      formsV4Form_universal_d_Type as Type,
      formsV4Form_universal_d_Styles as Styles,
      formsV4Form_universal_d_Link as Link,
      formsV4Form_universal_d_LinkDataOneOf as LinkDataOneOf,
      formsV4Form_universal_d_LinkTarget as LinkTarget,
      formsV4Form_universal_d_Rel as Rel,
      formsV4Form_universal_d_CodeBlockData as CodeBlockData,
      formsV4Form_universal_d_TextStyle as TextStyle,
      formsV4Form_universal_d_TextAlignment as TextAlignment,
      formsV4Form_universal_d_DividerData as DividerData,
      formsV4Form_universal_d_LineStyle as LineStyle,
      formsV4Form_universal_d_Width as Width,
      formsV4Form_universal_d_Alignment as Alignment,
      formsV4Form_universal_d_FileData as FileData,
      formsV4Form_universal_d_ViewMode as ViewMode,
      formsV4Form_universal_d_FileSource as FileSource,
      formsV4Form_universal_d_FileSourceDataOneOf as FileSourceDataOneOf,
      formsV4Form_universal_d_PDFSettings as PDFSettings,
      formsV4Form_universal_d_GalleryData as GalleryData,
      formsV4Form_universal_d_Media as Media,
      formsV4Form_universal_d_Image as Image,
      formsV4Form_universal_d_Video as Video,
      formsV4Form_universal_d_Item as Item,
      formsV4Form_universal_d_ItemDataOneOf as ItemDataOneOf,
      formsV4Form_universal_d_GalleryOptions as GalleryOptions,
      formsV4Form_universal_d_LayoutType as LayoutType,
      formsV4Form_universal_d_Orientation as Orientation,
      formsV4Form_universal_d_Crop as Crop,
      formsV4Form_universal_d_ThumbnailsAlignment as ThumbnailsAlignment,
      formsV4Form_universal_d_Layout as Layout,
      formsV4Form_universal_d_ItemStyle as ItemStyle,
      formsV4Form_universal_d_Thumbnails as Thumbnails,
      formsV4Form_universal_d_GIFData as GIFData,
      formsV4Form_universal_d_GIF as GIF,
      formsV4Form_universal_d_HeadingData as HeadingData,
      formsV4Form_universal_d_HTMLData as HTMLData,
      formsV4Form_universal_d_HTMLDataDataOneOf as HTMLDataDataOneOf,
      formsV4Form_universal_d_Source as Source,
      formsV4Form_universal_d_ImageData as ImageData,
      formsV4Form_universal_d_LinkPreviewData as LinkPreviewData,
      formsV4Form_universal_d_MapData as MapData,
      formsV4Form_universal_d_MapSettings as MapSettings,
      formsV4Form_universal_d_MapType as MapType,
      formsV4Form_universal_d_ParagraphData as ParagraphData,
      formsV4Form_universal_d_PollData as PollData,
      formsV4Form_universal_d_ViewRole as ViewRole,
      formsV4Form_universal_d_VoteRole as VoteRole,
      formsV4Form_universal_d_Permissions as Permissions,
      formsV4Form_universal_d_PollOption as PollOption,
      formsV4Form_universal_d_Settings as Settings,
      formsV4Form_universal_d_PollLayoutType as PollLayoutType,
      formsV4Form_universal_d_PollLayoutDirection as PollLayoutDirection,
      formsV4Form_universal_d_PollLayout as PollLayout,
      formsV4Form_universal_d_OptionLayout as OptionLayout,
      formsV4Form_universal_d_BackgroundType as BackgroundType,
      formsV4Form_universal_d_Gradient as Gradient,
      formsV4Form_universal_d_Background as Background,
      formsV4Form_universal_d_BackgroundBackgroundOneOf as BackgroundBackgroundOneOf,
      formsV4Form_universal_d_PollDesign as PollDesign,
      formsV4Form_universal_d_OptionDesign as OptionDesign,
      formsV4Form_universal_d_Poll as Poll,
      formsV4Form_universal_d_PollDataLayout as PollDataLayout,
      formsV4Form_universal_d_Design as Design,
      formsV4Form_universal_d_TextData as TextData,
      formsV4Form_universal_d_Decoration as Decoration,
      formsV4Form_universal_d_DecorationDataOneOf as DecorationDataOneOf,
      formsV4Form_universal_d_DecorationType as DecorationType,
      formsV4Form_universal_d_AnchorData as AnchorData,
      formsV4Form_universal_d_ColorData as ColorData,
      formsV4Form_universal_d_LinkData as LinkData,
      formsV4Form_universal_d_MentionData as MentionData,
      formsV4Form_universal_d_FontSizeData as FontSizeData,
      formsV4Form_universal_d_FontType as FontType,
      formsV4Form_universal_d_AppEmbedData as AppEmbedData,
      formsV4Form_universal_d_AppEmbedDataAppDataOneOf as AppEmbedDataAppDataOneOf,
      formsV4Form_universal_d_AppType as AppType,
      formsV4Form_universal_d_BookingData as BookingData,
      formsV4Form_universal_d_EventData as EventData,
      formsV4Form_universal_d_VideoData as VideoData,
      formsV4Form_universal_d_PlaybackOptions as PlaybackOptions,
      formsV4Form_universal_d_EmbedData as EmbedData,
      formsV4Form_universal_d_Oembed as Oembed,
      formsV4Form_universal_d_CollapsibleListData as CollapsibleListData,
      formsV4Form_universal_d_InitialExpandedItems as InitialExpandedItems,
      formsV4Form_universal_d_Direction as Direction,
      formsV4Form_universal_d_TableData as TableData,
      formsV4Form_universal_d_Dimensions as Dimensions,
      formsV4Form_universal_d_TableCellData as TableCellData,
      formsV4Form_universal_d_VerticalAlignment as VerticalAlignment,
      formsV4Form_universal_d_CellStyle as CellStyle,
      formsV4Form_universal_d_BorderColors as BorderColors,
      formsV4Form_universal_d_NullValue as NullValue,
      formsV4Form_universal_d_ListValue as ListValue,
      formsV4Form_universal_d_AudioData as AudioData,
      formsV4Form_universal_d_OrderedListData as OrderedListData,
      formsV4Form_universal_d_BulletedListData as BulletedListData,
      formsV4Form_universal_d_BlockquoteData as BlockquoteData,
      formsV4Form_universal_d_Metadata as Metadata,
      formsV4Form_universal_d_DocumentStyle as DocumentStyle,
      formsV4Form_universal_d_TextNodeStyle as TextNodeStyle,
      formsV4Form_universal_d_RadioGroup as RadioGroup,
      formsV4Form_universal_d_RadioGroupOption as RadioGroupOption,
      formsV4Form_universal_d_RadioGroupCustomOption as RadioGroupCustomOption,
      formsV4Form_universal_d_Dropdown as Dropdown,
      formsV4Form_universal_d_DropdownOption as DropdownOption,
      formsV4Form_universal_d_DropdownCustomOption as DropdownCustomOption,
      formsV4Form_universal_d_DateTimeInput as DateTimeInput,
      formsV4Form_universal_d_DateTimeInputDateTimeInputTypeOptionsOneOf as DateTimeInputDateTimeInputTypeOptionsOneOf,
      formsV4Form_universal_d_DateFormatPart as DateFormatPart,
      formsV4Form_universal_d_FirstDayOfWeek as FirstDayOfWeek,
      formsV4Form_universal_d_DateTimeInputType as DateTimeInputType,
      formsV4Form_universal_d_DateTimeOptions as DateTimeOptions,
      formsV4Form_universal_d_DateOptions as DateOptions,
      formsV4Form_universal_d_TimeOptions as TimeOptions,
      formsV4Form_universal_d_DatePickerOptions as DatePickerOptions,
      formsV4Form_universal_d_InputFieldNumberType as InputFieldNumberType,
      formsV4Form_universal_d_InputFieldNumberErrorMessages as InputFieldNumberErrorMessages,
      formsV4Form_universal_d_NumberComponentType as NumberComponentType,
      formsV4Form_universal_d_NumberInput as NumberInput,
      formsV4Form_universal_d_InputFieldBooleanType as InputFieldBooleanType,
      formsV4Form_universal_d_InputFieldBooleanErrorMessages as InputFieldBooleanErrorMessages,
      formsV4Form_universal_d_BooleanComponentType as BooleanComponentType,
      formsV4Form_universal_d_Checkbox as Checkbox,
      formsV4Form_universal_d_InputFieldArrayType as InputFieldArrayType,
      formsV4Form_universal_d_ItemType as ItemType,
      formsV4Form_universal_d_InputFieldIntegerType as InputFieldIntegerType,
      formsV4Form_universal_d_InputFieldObjectType as InputFieldObjectType,
      formsV4Form_universal_d_PropertiesTypePropertiesType as PropertiesTypePropertiesType,
      formsV4Form_universal_d_ObjectTypePropertiesType as ObjectTypePropertiesType,
      formsV4Form_universal_d_ObjectTypePropertiesTypePropertiesTypeOptionsOneOf as ObjectTypePropertiesTypePropertiesTypeOptionsOneOf,
      formsV4Form_universal_d_InputFieldObjectErrorMessages as InputFieldObjectErrorMessages,
      formsV4Form_universal_d_ArrayTypeArrayItems as ArrayTypeArrayItems,
      formsV4Form_universal_d_ArrayTypeArrayItemsItemTypeOptionsOneOf as ArrayTypeArrayItemsItemTypeOptionsOneOf,
      formsV4Form_universal_d_InputFieldArrayErrorMessages as InputFieldArrayErrorMessages,
      formsV4Form_universal_d_ComponentType as ComponentType,
      formsV4Form_universal_d_CheckboxGroup as CheckboxGroup,
      formsV4Form_universal_d_MediaItem as MediaItem,
      formsV4Form_universal_d_MediaItemMediaOneOf as MediaItemMediaOneOf,
      formsV4Form_universal_d_Option as Option,
      formsV4Form_universal_d_CustomOption as CustomOption,
      formsV4Form_universal_d_WixFileComponentType as WixFileComponentType,
      formsV4Form_universal_d_FileUpload as FileUpload,
      formsV4Form_universal_d_UploadFileFormat as UploadFileFormat,
      formsV4Form_universal_d_Signature as Signature,
      formsV4Form_universal_d_PaymentComponentType as PaymentComponentType,
      formsV4Form_universal_d_ProductCheckboxGroup as ProductCheckboxGroup,
      formsV4Form_universal_d_ProductCheckboxGroupOption as ProductCheckboxGroupOption,
      formsV4Form_universal_d_DonationInput as DonationInput,
      formsV4Form_universal_d_DonationInputOption as DonationInputOption,
      formsV4Form_universal_d_CommonCustomOption as CommonCustomOption,
      formsV4Form_universal_d_NumberOfColumns as NumberOfColumns,
      formsV4Form_universal_d_InputType as InputType,
      formsV4Form_universal_d__String as _String,
      formsV4Form_universal_d__StringComponentTypeOptionsOneOf as _StringComponentTypeOptionsOneOf,
      formsV4Form_universal_d__Number as _Number,
      formsV4Form_universal_d__NumberComponentTypeOptionsOneOf as _NumberComponentTypeOptionsOneOf,
      formsV4Form_universal_d__Boolean as _Boolean,
      formsV4Form_universal_d__BooleanComponentTypeOptionsOneOf as _BooleanComponentTypeOptionsOneOf,
      formsV4Form_universal_d__Array as _Array,
      formsV4Form_universal_d__ArrayComponentTypeOptionsOneOf as _ArrayComponentTypeOptionsOneOf,
      formsV4Form_universal_d__Object as _Object,
      formsV4Form_universal_d__ObjectValidationOneOf as _ObjectValidationOneOf,
      formsV4Form_universal_d_WixFile as WixFile,
      formsV4Form_universal_d_WixFileComponentTypeOptionsOneOf as WixFileComponentTypeOptionsOneOf,
      formsV4Form_universal_d_Payment as Payment,
      formsV4Form_universal_d_PaymentComponentTypeOptionsOneOf as PaymentComponentTypeOptionsOneOf,
      formsV4Form_universal_d_Header as Header,
      formsV4Form_universal_d_RichText as RichText,
      formsV4Form_universal_d_Target as Target,
      formsV4Form_universal_d_ThankYouMessage as ThankYouMessage,
      formsV4Form_universal_d_Redirect as Redirect,
      formsV4Form_universal_d_FieldType as FieldType,
      formsV4Form_universal_d_InputField as InputField,
      formsV4Form_universal_d_InputFieldInputTypeOptionsOneOf as InputFieldInputTypeOptionsOneOf,
      formsV4Form_universal_d_DisplayField as DisplayField,
      formsV4Form_universal_d_DisplayFieldComponentTypeOneOf as DisplayFieldComponentTypeOneOf,
      formsV4Form_universal_d_SubmitButton as SubmitButton,
      formsV4Form_universal_d_SubmitButtonSubmitActionOneOf as SubmitButtonSubmitActionOneOf,
      formsV4Form_universal_d_Step as Step,
      formsV4Form_universal_d_FormLayout as FormLayout,
      formsV4Form_universal_d_BreakPoint as BreakPoint,
      formsV4Form_universal_d_ItemLayout as ItemLayout,
      formsV4Form_universal_d_Margin as Margin,
      formsV4Form_universal_d_Section as Section,
      formsV4Form_universal_d_FormRule as FormRule,
      formsV4Form_universal_d_OverrideEntityType as OverrideEntityType,
      formsV4Form_universal_d_FormOverride as FormOverride,
      formsV4Form_universal_d_FormProperties as FormProperties,
      formsV4Form_universal_d_Kind as Kind,
      formsV4Form_universal_d_PostSubmissionTriggers as PostSubmissionTriggers,
      formsV4Form_universal_d_UpsertContact as UpsertContact,
      formsV4Form_universal_d_FormFieldContactInfo as FormFieldContactInfo,
      formsV4Form_universal_d_FormFieldContactInfoAdditionalInfoOneOf as FormFieldContactInfoAdditionalInfoOneOf,
      formsV4Form_universal_d_EmailInfoTag as EmailInfoTag,
      formsV4Form_universal_d_PhoneInfoTag as PhoneInfoTag,
      formsV4Form_universal_d_Tag as Tag,
      formsV4Form_universal_d_OptInLevel as OptInLevel,
      formsV4Form_universal_d_ContactField as ContactField,
      formsV4Form_universal_d_EmailInfo as EmailInfo,
      formsV4Form_universal_d_PhoneInfo as PhoneInfo,
      formsV4Form_universal_d_AddressInfo as AddressInfo,
      formsV4Form_universal_d_CustomFieldInfo as CustomFieldInfo,
      formsV4Form_universal_d_SubscriptionInfo as SubscriptionInfo,
      formsV4Form_universal_d_ExtendedFields as ExtendedFields,
      formsV4Form_universal_d_NestedForm as NestedForm,
      formsV4Form_universal_d_LimitationRule as LimitationRule,
      formsV4Form_universal_d_SpamFilterProtectionLevel as SpamFilterProtectionLevel,
      formsV4Form_universal_d_RequiredIndicatorProperties as RequiredIndicatorProperties,
      formsV4Form_universal_d_CreateFormRequest as CreateFormRequest,
      formsV4Form_universal_d_CreateFormResponse as CreateFormResponse,
      formsV4Form_universal_d_BulkCreateFormRequest as BulkCreateFormRequest,
      formsV4Form_universal_d_BulkCreateFormResponse as BulkCreateFormResponse,
      formsV4Form_universal_d_BulkFormResult as BulkFormResult,
      formsV4Form_universal_d_ItemMetadata as ItemMetadata,
      formsV4Form_universal_d_ApplicationError as ApplicationError,
      formsV4Form_universal_d_BulkActionMetadata as BulkActionMetadata,
      formsV4Form_universal_d_CloneFormRequest as CloneFormRequest,
      formsV4Form_universal_d_CloneFormResponse as CloneFormResponse,
      formsV4Form_universal_d_GetFormRequest as GetFormRequest,
      formsV4Form_universal_d_Fieldset as Fieldset,
      formsV4Form_universal_d_GetFormResponse as GetFormResponse,
      formsV4Form_universal_d_UpdateFormRequest as UpdateFormRequest,
      formsV4Form_universal_d_UpdateFormResponse as UpdateFormResponse,
      formsV4Form_universal_d_PiiFieldsUpdated as PiiFieldsUpdated,
      formsV4Form_universal_d_FormChanged as FormChanged,
      formsV4Form_universal_d_RemoveFormFromTrashBinRequest as RemoveFormFromTrashBinRequest,
      formsV4Form_universal_d_RemoveFormFromTrashBinResponse as RemoveFormFromTrashBinResponse,
      formsV4Form_universal_d_DeleteFormRequest as DeleteFormRequest,
      formsV4Form_universal_d_DeleteFormResponse as DeleteFormResponse,
      formsV4Form_universal_d_FormDeleted as FormDeleted,
      formsV4Form_universal_d_RestoreFromTrashBinRequest as RestoreFromTrashBinRequest,
      formsV4Form_universal_d_RestoreFromTrashBinResponse as RestoreFromTrashBinResponse,
      formsV4Form_universal_d_QueryFormsRequest as QueryFormsRequest,
      formsV4Form_universal_d_CursorQuery as CursorQuery,
      formsV4Form_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      formsV4Form_universal_d_Sorting as Sorting,
      formsV4Form_universal_d_SortOrder as SortOrder,
      formsV4Form_universal_d_CommonCursorPaging as CommonCursorPaging,
      formsV4Form_universal_d_QueryFormsResponse as QueryFormsResponse,
      formsV4Form_universal_d_CommonCursorPagingMetadata as CommonCursorPagingMetadata,
      formsV4Form_universal_d_CommonCursors as CommonCursors,
      formsV4Form_universal_d_CountFormsRequest as CountFormsRequest,
      formsV4Form_universal_d_CountFormsFieldset as CountFormsFieldset,
      formsV4Form_universal_d_CountFormsResponse as CountFormsResponse,
      formsV4Form_universal_d_ListFormsRequest as ListFormsRequest,
      formsV4Form_universal_d_ListFormsOrder as ListFormsOrder,
      formsV4Form_universal_d_ListFormsResponse as ListFormsResponse,
      formsV4Form_universal_d_GetDeletedFormRequest as GetDeletedFormRequest,
      formsV4Form_universal_d_GetDeletedFormResponse as GetDeletedFormResponse,
      formsV4Form_universal_d_QueryDeletedFormsRequest as QueryDeletedFormsRequest,
      formsV4Form_universal_d_QueryDeletedFormsResponse as QueryDeletedFormsResponse,
      formsV4Form_universal_d_ListDeletedFormsRequest as ListDeletedFormsRequest,
      formsV4Form_universal_d_ListDeletedFormsOrder as ListDeletedFormsOrder,
      formsV4Form_universal_d_ListDeletedFormsResponse as ListDeletedFormsResponse,
      formsV4Form_universal_d_BulkRemoveDeletedFieldRequest as BulkRemoveDeletedFieldRequest,
      formsV4Form_universal_d_BulkRemoveDeletedFieldResponse as BulkRemoveDeletedFieldResponse,
      formsV4Form_universal_d_SubmissionKeysPermanentlyDeleted as SubmissionKeysPermanentlyDeleted,
      formsV4Form_universal_d_UpdateExtendedFieldsRequest as UpdateExtendedFieldsRequest,
      formsV4Form_universal_d_UpdateExtendedFieldsResponse as UpdateExtendedFieldsResponse,
      formsV4Form_universal_d_DomainEvent as DomainEvent,
      formsV4Form_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      formsV4Form_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      formsV4Form_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      formsV4Form_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      formsV4Form_universal_d_ActionEvent as ActionEvent,
      formsV4Form_universal_d_Empty as Empty,
      formsV4Form_universal_d_MessageEnvelope as MessageEnvelope,
      formsV4Form_universal_d_IdentificationData as IdentificationData,
      formsV4Form_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      formsV4Form_universal_d_WebhookIdentityType as WebhookIdentityType,
      formsV4Form_universal_d_createForm as createForm,
      formsV4Form_universal_d_bulkCreateForm as bulkCreateForm,
      formsV4Form_universal_d_BulkCreateFormOptions as BulkCreateFormOptions,
      formsV4Form_universal_d_cloneForm as cloneForm,
      formsV4Form_universal_d_getForm as getForm,
      formsV4Form_universal_d_GetFormOptions as GetFormOptions,
      formsV4Form_universal_d_updateForm as updateForm,
      formsV4Form_universal_d_UpdateForm as UpdateForm,
      formsV4Form_universal_d_UpdateFormOptions as UpdateFormOptions,
      formsV4Form_universal_d_removeFormFromTrashBin as removeFormFromTrashBin,
      formsV4Form_universal_d_deleteForm as deleteForm,
      formsV4Form_universal_d_DeleteFormOptions as DeleteFormOptions,
      formsV4Form_universal_d_restoreFromTrashBin as restoreFromTrashBin,
      formsV4Form_universal_d_queryForms as queryForms,
      formsV4Form_universal_d_QueryFormsOptions as QueryFormsOptions,
      formsV4Form_universal_d_FormsQueryResult as FormsQueryResult,
      formsV4Form_universal_d_FormsQueryBuilder as FormsQueryBuilder,
      formsV4Form_universal_d_countForms as countForms,
      formsV4Form_universal_d_CountFormsOptions as CountFormsOptions,
      formsV4Form_universal_d_listForms as listForms,
      formsV4Form_universal_d_ListFormsOptions as ListFormsOptions,
      formsV4Form_universal_d_getDeletedForm as getDeletedForm,
      formsV4Form_universal_d_queryDeletedForms as queryDeletedForms,
      formsV4Form_universal_d_listDeletedForms as listDeletedForms,
      formsV4Form_universal_d_ListDeletedFormsOptions as ListDeletedFormsOptions,
      formsV4Form_universal_d_bulkRemoveDeletedField as bulkRemoveDeletedField,
      formsV4Form_universal_d_BulkRemoveDeletedFieldOptions as BulkRemoveDeletedFieldOptions,
      formsV4Form_universal_d_updateExtendedFields as updateExtendedFields,
      formsV4Form_universal_d_UpdateExtendedFieldsOptions as UpdateExtendedFieldsOptions,
    };
  }
  
  export { formsV4Form_universal_d as forms, formsV4Submission_universal_d as submissions };
}
