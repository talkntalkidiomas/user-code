declare module "wix-forms.v2" {
  /**
   * FormSpamSubmissionReportReport stores a form submission spam report.
   * It contains submission details as well as report reason.
   */
  interface FormSpamSubmissionReport {
      /**
       * Form spam submission report id.
       * @readonly
       */
      _id?: string | null;
      /** Id of a form to which the form spam submission report belongs. */
      formId?: string;
      /**
       * Form namespace to which the form spam submission report belongs.
       * @readonly
       */
      namespace?: string;
      /** Form submission submitter id. */
      submitter?: Submitter$3;
      /** Submission values where key is a target of a form field and value is a submissions for the given field. */
      submissions?: Record<string, any>;
      /** Identifies the reason why the submission was reported as spam. */
      reportReason?: ReportReason$1;
      /** Date of submission creation. If a submission was created in the past, pass the original submission creation date. */
      _createdDate?: Date;
      /**
       * Date of form spam submission report creation.
       * @readonly
       */
      reportedDate?: Date;
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
      /** Data extensions ExtendedFields. */
      extendedFields?: ExtendedFields$3;
      /** Last status of the submission at the time of the report */
      submissionStatusAtReport?: SubmissionStatus$3;
      /** Order details. */
      orderDetails?: FormSpamSubmissionReportOrderDetails;
  }
  interface Submitter$3 extends SubmitterSubmitterOneOf$3 {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Application ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
  }
  /** @oneof */
  interface SubmitterSubmitterOneOf$3 {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Application ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
  }
  enum ReportReason$1 {
      UNKNOWN_REASON = "UNKNOWN_REASON",
      /** An email quota is reached. There were too many submissions in a short time period with the same email. */
      EMAIL_QUOTA_REACHED = "EMAIL_QUOTA_REACHED",
      /** An IP address is is blocklisted. */
      IP_BLOCKLISTED = "IP_BLOCKLISTED",
      /** An email is is blocklisted. */
      EMAIL_BLOCKLISTED = "EMAIL_BLOCKLISTED",
      /** Reported spam by the AI spam detection model. It uses submission text as an input. */
      AI_REPORTED = "AI_REPORTED",
      /** Reported as spam by a submission manager. */
      MANUALLY_REPORTED = "MANUALLY_REPORTED"
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
  enum SubmissionStatus$3 {
      UNDEFINED = "UNDEFINED",
      PENDING = "PENDING",
      CONFIRMED = "CONFIRMED",
      PAYMENT_WAITING = "PAYMENT_WAITING",
      PAYMENT_CANCELED = "PAYMENT_CANCELED"
  }
  interface FormSpamSubmissionReportOrderDetails {
      /**
       * ID of the checkout related to submission (applicable if form has payments added).
       * @readonly
       */
      checkoutId?: string;
  }
  interface CheckForSpamRequest {
      /** Form submission. */
      submission: FormSubmission$3;
  }
  /** Form submission that was created or retrieved. */
  interface FormSubmission$3 {
      /**
       * Submission ID.
       * @readonly
       */
      _id?: string | null;
      /** ID of the form which the submission belongs to. */
      formId?: string;
      /**
       * The app which the form submissions belong to. For example, the namespace for the Wix Forms app is `wix.form_app.form`. Call `Get Submission` to retrieve the namespace.
       * @readonly
       */
      namespace?: string;
      /**
       * Status of the submission.
       * - `PENDING`: A submission is created, but has not yet been recorded in the Wix Forms collection.
       * - `PAYMENT_WAITING`: A form submission requiring payment is created.
       * - `PAYMENT_CANCELED`: An order of a form submission is canceled.
       * - `CONFIRMED`: A submission is recorded in the Wix Forms collection.
       */
      status?: SubmissionStatus$3;
      /** Submission values where `key` is the form field and `value` is the data submitted for the given field. */
      submissions?: Record<string, any>;
      /**
       * Date and time the form submission was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the form submission was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Revision number, which increments by 1 each time the form submission is updated. To prevent conflicting changes, the existing revision must be used when updating a form submission.
       * @readonly
       */
      revision?: string | null;
      /**
       * ID of the visitor that submitted the form.
       * @readonly
       */
      submitter?: Submitter$3;
      /** Whether a site owner marked a submission as "seen". */
      seen?: boolean;
      /** Data extension object that holds users' and apps' fields. */
      extendedFields?: ExtendedFields$3;
      /**
       * Order details. <br>
       * <b>Note</b>: This object is only applicable when submittng a form in the Wix Payments app.
       */
      orderDetails?: OrderDetails$3;
  }
  interface OrderDetails$3 {
      /**
       * ID of the order related to submission (only applicable if a form has payments).
       * @readonly
       */
      orderId?: string | null;
      /**
       * Order number.
       * @readonly
       */
      number?: string | null;
      /**
       * Currency.
       * @readonly
       */
      currency?: string | null;
      /**
       * Item subtotal.
       * @readonly
       */
      itemSubtotal?: string;
      /**
       * ID of the checkout related to submission (only applicable if a form has payments).
       * @readonly
       */
      checkoutId?: string;
  }
  interface CheckForSpamResponse {
      /** Is the submission a spam. */
      spam?: boolean;
      /** Spam report details. Filled when spam == true */
      spamReport?: SpamReport;
  }
  interface SpamReport {
      /** Identifies the reason why the submission was reported as spam. */
      reportReason?: ReportReason$1;
  }
  interface CreateFormSpamSubmissionReportRequest {
      /** Form spam submission report to be created. */
      formSpamSubmissionReport: FormSpamSubmissionReport;
  }
  interface CreateFormSpamSubmissionReportResponse {
      /** The created form spam submission report. */
      formSpamSubmissionReport?: FormSpamSubmissionReport;
  }
  interface GetFormSpamSubmissionReportRequest {
      /** Id of the form spam submission report to retrieve. */
      formSpamSubmissionReportId: string;
  }
  interface GetFormSpamSubmissionReportResponse {
      /** The retrieved form spam submission report. */
      formSpamSubmissionReport?: FormSpamSubmissionReport;
  }
  interface DeleteFormSpamSubmissionReportRequest {
      /** Id of the form spam submission report to delete. */
      formSpamSubmissionReportId: string;
  }
  interface DeleteFormSpamSubmissionReportResponse {
  }
  interface BulkDeleteFormSpamSubmissionReportRequest {
      /** Form ID. */
      formId: string;
      /** Ids of the form spam submission reports to delete. */
      formSpamSubmissionReportIds?: string[];
  }
  interface BulkDeleteFormSpamSubmissionReportResponse {
      /** Results of bulk report delete */
      results?: BulkDeleteFormSpamSubmissionReportResult[];
      /** Metadata of request */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkDeleteFormSpamSubmissionReportResult {
      /** Deleted item metadata */
      itemMetadata?: ItemMetadata$1;
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
  interface BulkDeleteFormSpamSubmissionReportByFilterRequest {
      /**
       * Filter object.
       *
       * See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more information.
       */
      filter: Record<string, any> | null;
  }
  interface BulkDeleteFormSpamSubmissionReportByFilterResponse {
      /** Job id of bulk delete form submission report by filter job */
      jobId?: string;
  }
  interface ReportNotSpamSubmissionRequest$1 {
      /** Id of the form spam submission report to report as not spam. */
      formSpamSubmissionReportId: string;
  }
  interface ReportNotSpamSubmissionResponse$1 {
      /** Created form submission. */
      submission?: FormSubmission$3;
  }
  interface BulkReportNotSpamSubmissionRequest {
      /** Id of the form to which belong reports */
      formId: string;
      /** Ids of the form spam submission reports to report as not spam. */
      formSpamSubmissionReportIds?: string[];
  }
  interface BulkReportNotSpamSubmissionResponse {
      /** Info whatever report of specific items was successful */
      results?: BulkReportNotSpamSubmissionResult[];
      /** Metadata of request */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkReportNotSpamSubmissionResult {
      /** Metadata of submission, marked as not spam */
      itemMetadata?: ItemMetadata$1;
      /** Id of related report, which was reported as not spam */
      formSpamSubmissionReportId?: string;
  }
  interface ReportSpamSubmissionRequest$1 {
      /** Id of the submission to report as spam. */
      submissionId: string;
      /** Identifies the reason why the submission was reported as spam. */
      reportReason: ReportReason$1;
  }
  interface ReportSpamSubmissionResponse$1 {
      /** Created form spam submission report. */
      formSpamSubmissionReport?: FormSpamSubmissionReport;
  }
  interface BulkReportSpamSubmissionRequest {
      /** Id of the form to which belong submissions to report as spam. */
      formId: string;
      /** Ids of the submissions to report as spam. */
      submissionIds: string[];
      /** Identifies the reason why the submission was reported as spam. */
      reportReason: ReportReason$1;
      /** When set, items will be returned on successful report */
      returnEntity?: boolean;
  }
  interface BulkReportSpamSubmissionResponse {
      /** Created reports with metadata */
      results?: BulkReportSpamSubmissionResult[];
      /** Metadata of request */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkReportSpamSubmissionResult {
      /** Created report metadata */
      itemMetadata?: ItemMetadata$1;
      /** Created report, exists if `returnEntity` was set to `true` in the request */
      item?: FormSpamSubmissionReport;
  }
  interface QueryFormSpamSubmissionReportsByNamespaceRequest {
      /** WQL expression. */
      query: CursorQuery$2;
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
  interface QueryFormSpamSubmissionReportsByNamespaceResponse {
      /** The retrieved FormSpamSubmissionReports. */
      formSpamSubmissionReports?: FormSpamSubmissionReport[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: CursorPagingMetadata$2;
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
  interface CountFormSpamSubmissionReportsRequest {
      /** Form IDs. */
      formIds: string[];
      /** Identifies the app which the form submissions belong to. For example, the namespace for the Wix Forms App is `"wix.form_app.form"`. The namespace of a submission can be retrieved using the Get Submission endpoint. */
      namespace: string;
  }
  interface CountFormSpamSubmissionReportsResponse {
      /** Forms submission count. */
      formsSpamSubmissionReportsCount?: FormSpamSubmissionReportsCount[];
  }
  interface FormSpamSubmissionReportsCount {
      /** Form ID. */
      formId?: string;
      /** Total number of submissions. */
      totalCount?: number;
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
  interface MessageEnvelope$1 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$3;
      /** Stringify payload. */
      data?: string;
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
      /** @readonly */
      identityType?: WebhookIdentityType$1;
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
  enum WebhookIdentityType$1 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Checks if submission is a spam.
   * @param submission - Form submission.
   * @internal
   * @documentationMaturity preview
   * @requiredField submission
   * @requiredField submission.formId
   */
  function checkForSpam(submission: FormSubmission$3): Promise<CheckForSpamResponse>;
  /**
   * Creates a new spam submission.
   * To upload submission media, use the FormSubmissionService.getMediaUploadUrl endpoint.
   * @param formSpamSubmissionReport - Form spam submission report to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField formSpamSubmissionReport
   * @requiredField formSpamSubmissionReport.formId
   * @requiredField formSpamSubmissionReport.reportReason
   * @requiredField formSpamSubmissionReport.submissions
   * @requiredField formSpamSubmissionReport.submitter
   * @adminMethod
   * @returns The created form spam submission report.
   */
  function createFormSpamSubmissionReport(formSpamSubmissionReport: FormSpamSubmissionReport): Promise<FormSpamSubmissionReport>;
  /**
   * Get a spam submission by id.
   * @param formSpamSubmissionReportId - Id of the form spam submission report to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField formSpamSubmissionReportId
   * @adminMethod
   * @returns The retrieved form spam submission report.
   */
  function getFormSpamSubmissionReport(formSpamSubmissionReportId: string): Promise<FormSpamSubmissionReport>;
  /**
   * Delete a spam submission report.
   * @param formSpamSubmissionReportId - Id of the form spam submission report to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField formSpamSubmissionReportId
   * @adminMethod
   */
  function deleteFormSpamSubmissionReport(formSpamSubmissionReportId: string): Promise<void>;
  /**
   * Deletes report by IDS or all for specific form.
   * @param formId - Form ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField formId
   * @adminMethod
   */
  function bulkDeleteFormSpamSubmissionReport(formId: string, options?: BulkDeleteFormSpamSubmissionReportOptions): Promise<BulkDeleteFormSpamSubmissionReportResponse>;
  interface BulkDeleteFormSpamSubmissionReportOptions {
      /** Ids of the form spam submission reports to delete. */
      formSpamSubmissionReportIds?: string[];
  }
  /**
   * Deletes reports by filter for specific form.
   * @param filter - Filter object.
   *
   * See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more information.
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @adminMethod
   */
  function bulkDeleteFormSpamSubmissionReportByFilter(filter: Record<string, any> | null): Promise<BulkDeleteFormSpamSubmissionReportByFilterResponse>;
  /**
   * Report a spam submission as not spam. The submission is created, and the spam report is deleted.
   * Submission automations are triggered the same way as in standard submission creation flow.
   * @param formSpamSubmissionReportId - Id of the form spam submission report to report as not spam.
   * @internal
   * @documentationMaturity preview
   * @requiredField formSpamSubmissionReportId
   * @adminMethod
   */
  function reportNotSpamSubmission$1(formSpamSubmissionReportId: string): Promise<ReportNotSpamSubmissionResponse$1>;
  /**
   * Report a spam submissions as not spam. The submissions is created, and the spam reports is deleted.
   * Submissions automations are triggered the same way as in standard submission creation flow.
   * @param formId - Id of the form to which belong reports
   * @internal
   * @documentationMaturity preview
   * @requiredField formId
   * @adminMethod
   */
  function bulkReportNotSpamSubmission(formId: string, options?: BulkReportNotSpamSubmissionOptions): Promise<BulkReportNotSpamSubmissionResponse>;
  interface BulkReportNotSpamSubmissionOptions {
      /** Ids of the form spam submission reports to report as not spam. */
      formSpamSubmissionReportIds?: string[];
  }
  /**
   * Report a submission as spam. The spam submission report is created, and the submission is deleted.
   * @param submissionId - Id of the submission to report as spam.
   * @param reportReason - Identifies the reason why the submission was reported as spam.
   * @internal
   * @documentationMaturity preview
   * @requiredField reportReason
   * @requiredField submissionId
   * @adminMethod
   */
  function reportSpamSubmission$1(submissionId: string, reportReason: ReportReason$1): Promise<ReportSpamSubmissionResponse$1>;
  /**
   * Report multiple submissions as spam. The spam submission reports is created, and the submissions is deleted.
   * @param formId - Id of the form to which belong submissions to report as spam.
   * @internal
   * @documentationMaturity preview
   * @requiredField formId
   * @requiredField options.reportReason
   * @requiredField options.submissionIds
   * @adminMethod
   */
  function bulkReportSpamSubmission(formId: string, options?: BulkReportSpamSubmissionOptions): Promise<BulkReportSpamSubmissionResponse>;
  interface BulkReportSpamSubmissionOptions {
      /** Ids of the submissions to report as spam. */
      submissionIds: string[];
      /** Identifies the reason why the submission was reported as spam. */
      reportReason: ReportReason$1;
      /** When set, items will be returned on successful report */
      returnEntity?: boolean;
  }
  /**
   * Query form spam submission reports using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryFormSpamSubmissionReportsByNamespace(): FormSpamSubmissionReportsQueryBuilder;
  interface QueryCursorResult$2 {
      cursors: Cursors$2;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface FormSpamSubmissionReportsQueryResult extends QueryCursorResult$2 {
      items: FormSpamSubmissionReport[];
      query: FormSpamSubmissionReportsQueryBuilder;
      next: () => Promise<FormSpamSubmissionReportsQueryResult>;
      prev: () => Promise<FormSpamSubmissionReportsQueryResult>;
  }
  interface FormSpamSubmissionReportsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'formId' | 'namespace' | 'reportReason' | '_createdDate' | 'reportedDate', value: any) => FormSpamSubmissionReportsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'formId' | 'reportReason' | '_createdDate' | 'reportedDate', value: any) => FormSpamSubmissionReportsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | 'reportedDate', value: any) => FormSpamSubmissionReportsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | 'reportedDate', value: any) => FormSpamSubmissionReportsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | 'reportedDate', value: any) => FormSpamSubmissionReportsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | 'reportedDate', value: any) => FormSpamSubmissionReportsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'formId' | 'reportReason' | '_createdDate' | 'reportedDate', value: any) => FormSpamSubmissionReportsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'formId' | 'reportReason' | '_createdDate' | 'reportedDate'>) => FormSpamSubmissionReportsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'formId' | 'reportReason' | '_createdDate' | 'reportedDate'>) => FormSpamSubmissionReportsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => FormSpamSubmissionReportsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => FormSpamSubmissionReportsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<FormSpamSubmissionReportsQueryResult>;
  }
  /**
   * Counts the number of spam submission reports belonging to the specified forms.
   * @param formIds - Form IDs.
   * @param namespace - Identifies the app which the form submissions belong to. For example, the namespace for the Wix Forms App is `"wix.form_app.form"`. The namespace of a submission can be retrieved using the Get Submission endpoint.
   * @internal
   * @documentationMaturity preview
   * @requiredField formIds
   * @requiredField namespace
   * @adminMethod
   */
  function countFormSpamSubmissionReports(formIds: string[], namespace: string): Promise<CountFormSpamSubmissionReportsResponse>;
  
  type formsV4FormSpamSubmissionReport_universal_d_FormSpamSubmissionReport = FormSpamSubmissionReport;
  type formsV4FormSpamSubmissionReport_universal_d_FormSpamSubmissionReportOrderDetails = FormSpamSubmissionReportOrderDetails;
  type formsV4FormSpamSubmissionReport_universal_d_CheckForSpamRequest = CheckForSpamRequest;
  type formsV4FormSpamSubmissionReport_universal_d_CheckForSpamResponse = CheckForSpamResponse;
  type formsV4FormSpamSubmissionReport_universal_d_SpamReport = SpamReport;
  type formsV4FormSpamSubmissionReport_universal_d_CreateFormSpamSubmissionReportRequest = CreateFormSpamSubmissionReportRequest;
  type formsV4FormSpamSubmissionReport_universal_d_CreateFormSpamSubmissionReportResponse = CreateFormSpamSubmissionReportResponse;
  type formsV4FormSpamSubmissionReport_universal_d_GetFormSpamSubmissionReportRequest = GetFormSpamSubmissionReportRequest;
  type formsV4FormSpamSubmissionReport_universal_d_GetFormSpamSubmissionReportResponse = GetFormSpamSubmissionReportResponse;
  type formsV4FormSpamSubmissionReport_universal_d_DeleteFormSpamSubmissionReportRequest = DeleteFormSpamSubmissionReportRequest;
  type formsV4FormSpamSubmissionReport_universal_d_DeleteFormSpamSubmissionReportResponse = DeleteFormSpamSubmissionReportResponse;
  type formsV4FormSpamSubmissionReport_universal_d_BulkDeleteFormSpamSubmissionReportRequest = BulkDeleteFormSpamSubmissionReportRequest;
  type formsV4FormSpamSubmissionReport_universal_d_BulkDeleteFormSpamSubmissionReportResponse = BulkDeleteFormSpamSubmissionReportResponse;
  type formsV4FormSpamSubmissionReport_universal_d_BulkDeleteFormSpamSubmissionReportResult = BulkDeleteFormSpamSubmissionReportResult;
  type formsV4FormSpamSubmissionReport_universal_d_BulkDeleteFormSpamSubmissionReportByFilterRequest = BulkDeleteFormSpamSubmissionReportByFilterRequest;
  type formsV4FormSpamSubmissionReport_universal_d_BulkDeleteFormSpamSubmissionReportByFilterResponse = BulkDeleteFormSpamSubmissionReportByFilterResponse;
  type formsV4FormSpamSubmissionReport_universal_d_BulkReportNotSpamSubmissionRequest = BulkReportNotSpamSubmissionRequest;
  type formsV4FormSpamSubmissionReport_universal_d_BulkReportNotSpamSubmissionResponse = BulkReportNotSpamSubmissionResponse;
  type formsV4FormSpamSubmissionReport_universal_d_BulkReportNotSpamSubmissionResult = BulkReportNotSpamSubmissionResult;
  type formsV4FormSpamSubmissionReport_universal_d_BulkReportSpamSubmissionRequest = BulkReportSpamSubmissionRequest;
  type formsV4FormSpamSubmissionReport_universal_d_BulkReportSpamSubmissionResponse = BulkReportSpamSubmissionResponse;
  type formsV4FormSpamSubmissionReport_universal_d_BulkReportSpamSubmissionResult = BulkReportSpamSubmissionResult;
  type formsV4FormSpamSubmissionReport_universal_d_QueryFormSpamSubmissionReportsByNamespaceRequest = QueryFormSpamSubmissionReportsByNamespaceRequest;
  type formsV4FormSpamSubmissionReport_universal_d_QueryFormSpamSubmissionReportsByNamespaceResponse = QueryFormSpamSubmissionReportsByNamespaceResponse;
  type formsV4FormSpamSubmissionReport_universal_d_CountFormSpamSubmissionReportsRequest = CountFormSpamSubmissionReportsRequest;
  type formsV4FormSpamSubmissionReport_universal_d_CountFormSpamSubmissionReportsResponse = CountFormSpamSubmissionReportsResponse;
  type formsV4FormSpamSubmissionReport_universal_d_FormSpamSubmissionReportsCount = FormSpamSubmissionReportsCount;
  const formsV4FormSpamSubmissionReport_universal_d_checkForSpam: typeof checkForSpam;
  const formsV4FormSpamSubmissionReport_universal_d_createFormSpamSubmissionReport: typeof createFormSpamSubmissionReport;
  const formsV4FormSpamSubmissionReport_universal_d_getFormSpamSubmissionReport: typeof getFormSpamSubmissionReport;
  const formsV4FormSpamSubmissionReport_universal_d_deleteFormSpamSubmissionReport: typeof deleteFormSpamSubmissionReport;
  const formsV4FormSpamSubmissionReport_universal_d_bulkDeleteFormSpamSubmissionReport: typeof bulkDeleteFormSpamSubmissionReport;
  type formsV4FormSpamSubmissionReport_universal_d_BulkDeleteFormSpamSubmissionReportOptions = BulkDeleteFormSpamSubmissionReportOptions;
  const formsV4FormSpamSubmissionReport_universal_d_bulkDeleteFormSpamSubmissionReportByFilter: typeof bulkDeleteFormSpamSubmissionReportByFilter;
  const formsV4FormSpamSubmissionReport_universal_d_bulkReportNotSpamSubmission: typeof bulkReportNotSpamSubmission;
  type formsV4FormSpamSubmissionReport_universal_d_BulkReportNotSpamSubmissionOptions = BulkReportNotSpamSubmissionOptions;
  const formsV4FormSpamSubmissionReport_universal_d_bulkReportSpamSubmission: typeof bulkReportSpamSubmission;
  type formsV4FormSpamSubmissionReport_universal_d_BulkReportSpamSubmissionOptions = BulkReportSpamSubmissionOptions;
  const formsV4FormSpamSubmissionReport_universal_d_queryFormSpamSubmissionReportsByNamespace: typeof queryFormSpamSubmissionReportsByNamespace;
  type formsV4FormSpamSubmissionReport_universal_d_FormSpamSubmissionReportsQueryResult = FormSpamSubmissionReportsQueryResult;
  type formsV4FormSpamSubmissionReport_universal_d_FormSpamSubmissionReportsQueryBuilder = FormSpamSubmissionReportsQueryBuilder;
  const formsV4FormSpamSubmissionReport_universal_d_countFormSpamSubmissionReports: typeof countFormSpamSubmissionReports;
  namespace formsV4FormSpamSubmissionReport_universal_d {
    export {
      formsV4FormSpamSubmissionReport_universal_d_FormSpamSubmissionReport as FormSpamSubmissionReport,
      Submitter$3 as Submitter,
      SubmitterSubmitterOneOf$3 as SubmitterSubmitterOneOf,
      ReportReason$1 as ReportReason,
      ExtendedFields$3 as ExtendedFields,
      SubmissionStatus$3 as SubmissionStatus,
      formsV4FormSpamSubmissionReport_universal_d_FormSpamSubmissionReportOrderDetails as FormSpamSubmissionReportOrderDetails,
      formsV4FormSpamSubmissionReport_universal_d_CheckForSpamRequest as CheckForSpamRequest,
      FormSubmission$3 as FormSubmission,
      OrderDetails$3 as OrderDetails,
      formsV4FormSpamSubmissionReport_universal_d_CheckForSpamResponse as CheckForSpamResponse,
      formsV4FormSpamSubmissionReport_universal_d_SpamReport as SpamReport,
      formsV4FormSpamSubmissionReport_universal_d_CreateFormSpamSubmissionReportRequest as CreateFormSpamSubmissionReportRequest,
      formsV4FormSpamSubmissionReport_universal_d_CreateFormSpamSubmissionReportResponse as CreateFormSpamSubmissionReportResponse,
      formsV4FormSpamSubmissionReport_universal_d_GetFormSpamSubmissionReportRequest as GetFormSpamSubmissionReportRequest,
      formsV4FormSpamSubmissionReport_universal_d_GetFormSpamSubmissionReportResponse as GetFormSpamSubmissionReportResponse,
      formsV4FormSpamSubmissionReport_universal_d_DeleteFormSpamSubmissionReportRequest as DeleteFormSpamSubmissionReportRequest,
      formsV4FormSpamSubmissionReport_universal_d_DeleteFormSpamSubmissionReportResponse as DeleteFormSpamSubmissionReportResponse,
      formsV4FormSpamSubmissionReport_universal_d_BulkDeleteFormSpamSubmissionReportRequest as BulkDeleteFormSpamSubmissionReportRequest,
      formsV4FormSpamSubmissionReport_universal_d_BulkDeleteFormSpamSubmissionReportResponse as BulkDeleteFormSpamSubmissionReportResponse,
      formsV4FormSpamSubmissionReport_universal_d_BulkDeleteFormSpamSubmissionReportResult as BulkDeleteFormSpamSubmissionReportResult,
      ItemMetadata$1 as ItemMetadata,
      ApplicationError$1 as ApplicationError,
      BulkActionMetadata$1 as BulkActionMetadata,
      formsV4FormSpamSubmissionReport_universal_d_BulkDeleteFormSpamSubmissionReportByFilterRequest as BulkDeleteFormSpamSubmissionReportByFilterRequest,
      formsV4FormSpamSubmissionReport_universal_d_BulkDeleteFormSpamSubmissionReportByFilterResponse as BulkDeleteFormSpamSubmissionReportByFilterResponse,
      ReportNotSpamSubmissionRequest$1 as ReportNotSpamSubmissionRequest,
      ReportNotSpamSubmissionResponse$1 as ReportNotSpamSubmissionResponse,
      formsV4FormSpamSubmissionReport_universal_d_BulkReportNotSpamSubmissionRequest as BulkReportNotSpamSubmissionRequest,
      formsV4FormSpamSubmissionReport_universal_d_BulkReportNotSpamSubmissionResponse as BulkReportNotSpamSubmissionResponse,
      formsV4FormSpamSubmissionReport_universal_d_BulkReportNotSpamSubmissionResult as BulkReportNotSpamSubmissionResult,
      ReportSpamSubmissionRequest$1 as ReportSpamSubmissionRequest,
      ReportSpamSubmissionResponse$1 as ReportSpamSubmissionResponse,
      formsV4FormSpamSubmissionReport_universal_d_BulkReportSpamSubmissionRequest as BulkReportSpamSubmissionRequest,
      formsV4FormSpamSubmissionReport_universal_d_BulkReportSpamSubmissionResponse as BulkReportSpamSubmissionResponse,
      formsV4FormSpamSubmissionReport_universal_d_BulkReportSpamSubmissionResult as BulkReportSpamSubmissionResult,
      formsV4FormSpamSubmissionReport_universal_d_QueryFormSpamSubmissionReportsByNamespaceRequest as QueryFormSpamSubmissionReportsByNamespaceRequest,
      CursorQuery$2 as CursorQuery,
      CursorQueryPagingMethodOneOf$2 as CursorQueryPagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      CursorPaging$2 as CursorPaging,
      formsV4FormSpamSubmissionReport_universal_d_QueryFormSpamSubmissionReportsByNamespaceResponse as QueryFormSpamSubmissionReportsByNamespaceResponse,
      CursorPagingMetadata$2 as CursorPagingMetadata,
      Cursors$2 as Cursors,
      formsV4FormSpamSubmissionReport_universal_d_CountFormSpamSubmissionReportsRequest as CountFormSpamSubmissionReportsRequest,
      formsV4FormSpamSubmissionReport_universal_d_CountFormSpamSubmissionReportsResponse as CountFormSpamSubmissionReportsResponse,
      formsV4FormSpamSubmissionReport_universal_d_FormSpamSubmissionReportsCount as FormSpamSubmissionReportsCount,
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      Empty$2 as Empty,
      MessageEnvelope$1 as MessageEnvelope,
      IdentificationData$3 as IdentificationData,
      IdentificationDataIdOneOf$3 as IdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
      formsV4FormSpamSubmissionReport_universal_d_checkForSpam as checkForSpam,
      formsV4FormSpamSubmissionReport_universal_d_createFormSpamSubmissionReport as createFormSpamSubmissionReport,
      formsV4FormSpamSubmissionReport_universal_d_getFormSpamSubmissionReport as getFormSpamSubmissionReport,
      formsV4FormSpamSubmissionReport_universal_d_deleteFormSpamSubmissionReport as deleteFormSpamSubmissionReport,
      formsV4FormSpamSubmissionReport_universal_d_bulkDeleteFormSpamSubmissionReport as bulkDeleteFormSpamSubmissionReport,
      formsV4FormSpamSubmissionReport_universal_d_BulkDeleteFormSpamSubmissionReportOptions as BulkDeleteFormSpamSubmissionReportOptions,
      formsV4FormSpamSubmissionReport_universal_d_bulkDeleteFormSpamSubmissionReportByFilter as bulkDeleteFormSpamSubmissionReportByFilter,
      reportNotSpamSubmission$1 as reportNotSpamSubmission,
      formsV4FormSpamSubmissionReport_universal_d_bulkReportNotSpamSubmission as bulkReportNotSpamSubmission,
      formsV4FormSpamSubmissionReport_universal_d_BulkReportNotSpamSubmissionOptions as BulkReportNotSpamSubmissionOptions,
      reportSpamSubmission$1 as reportSpamSubmission,
      formsV4FormSpamSubmissionReport_universal_d_bulkReportSpamSubmission as bulkReportSpamSubmission,
      formsV4FormSpamSubmissionReport_universal_d_BulkReportSpamSubmissionOptions as BulkReportSpamSubmissionOptions,
      formsV4FormSpamSubmissionReport_universal_d_queryFormSpamSubmissionReportsByNamespace as queryFormSpamSubmissionReportsByNamespace,
      formsV4FormSpamSubmissionReport_universal_d_FormSpamSubmissionReportsQueryResult as FormSpamSubmissionReportsQueryResult,
      formsV4FormSpamSubmissionReport_universal_d_FormSpamSubmissionReportsQueryBuilder as FormSpamSubmissionReportsQueryBuilder,
      formsV4FormSpamSubmissionReport_universal_d_countFormSpamSubmissionReports as countFormSpamSubmissionReports,
    };
  }
  
  interface FormSpamSubmissionSpiConfig {
      /** URI where the SPI Implementer is deployed */
      baseUri?: SpiBaseUri$1;
      /** Configuration of namespaces known by implementer */
      namespaceConfigs?: FormsSpamSubmissionsNamespaceConfig[];
  }
  interface SpiBaseUri$1 {
      /** URI that will be used by the host to call the implementer. The path-suffix defined on the method will be appended to it */
      baseUri?: string;
      /** override method mappings per method */
      alternativeUris?: AlternativeUri$1[];
  }
  interface AlternativeUri$1 {
      /** name of the method as it appears in the proto */
      methodName?: string;
      /** absolute uri that will be used by the host to call that method. The path-suffix mapped from the method http option will NOT be appended to this URI. For TPAs. it must be https */
      absoluteUri?: string;
  }
  interface FormsSpamSubmissionsNamespaceConfig {
      /** Namespace name. */
      namespace?: string;
      /** Permissions associated with this namespace. */
      permissions?: SpamSubmissionPermissions;
      /**
       * Disables Wix spam submissions filter.
       * Spam submissions are persisted in spam submissions storage to support marking submissions as not spam.
       */
      wixSpamFilterDisabled?: boolean;
  }
  interface SpamSubmissionPermissions {
      /** Create permission name */
      create?: string;
      /** Delete permission name */
      delete?: string;
      /** Update permission name */
      update?: string;
      /** Read permission name */
      read?: string;
      /** Report as not spam permission name */
      reportNotSpam?: string;
  }
  /**
   * this message is not directly used by any service,
   * it exists to describe the expected parameters that SHOULD be provided to invoked Velo methods as part of open-platform.
   * e.g. SPIs, event-handlers, etc..
   * NOTE: this context object MUST be provided as the last argument in each Velo method signature.
   *
   * Example:
   * ```typescript
   * export function wixStores_onOrderCanceled(event: OrderCanceledEvent, context: Context) {
   * ...
   * }
   * ```
   */
  interface Context$1 {
      /** A unique identifier for each request. Can be used for logging / troubleshooting */
      requestId?: string | null;
      /** 3 capital letters string representing a currency according to ISO-4217 */
      currency?: string | null;
      /** The identification type and identity data */
      identity?: IdentificationData$2;
      /** A string representing a language and region in the format of "xx-XX". First 2 letters represent the language code according to ISO 639-1. This is followed by a dash "-", and then a by 2 capital letters representing the region according to ISO 3166-2 */
      languages?: string[];
      /** App instance ID of SPI in context */
      instanceId?: string | null;
  }
  enum IdentityType$2 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
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
      identityType?: IdentityType$2;
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
  /** SpamSubmissionReport stores a submission, which was marked as spam. */
  interface SpamSubmission {
      /**
       * Spam submission id.
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
      /**
       * Submission submitter ID.
       * @readonly
       */
      submitter?: Submitter$2;
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
      /** Identifies the reason why the submission was reported as spam. */
      reportReason?: ReportReason;
      /** Data extensions ExtendedFields. */
      extendedFields?: ExtendedFields$2;
  }
  interface Submitter$2 extends SubmitterSubmitterOneOf$2 {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Application ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
  }
  /** @oneof */
  interface SubmitterSubmitterOneOf$2 {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Application ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
  }
  enum ReportReason {
      UNKNOWN_REASON = "UNKNOWN_REASON",
      /** An email quota is reached. There were too many submissions in a short time period with the same email. */
      EMAIL_QUOTA_REACHED = "EMAIL_QUOTA_REACHED",
      /** An IP address is is blocklisted. */
      IP_BLOCKLISTED = "IP_BLOCKLISTED",
      /** An email is is blocklisted. */
      EMAIL_BLOCKLISTED = "EMAIL_BLOCKLISTED",
      /** Reported spam by the AI spam detection model. It uses submission text as an input. */
      AI_REPORTED = "AI_REPORTED",
      /** Reported as spam by a submission manager. */
      MANUALLY_REPORTED = "MANUALLY_REPORTED"
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
  interface ValidateSpamRequest {
      /** Submission. */
      submission: FormSubmission$2;
      /** Form. */
      form: Form$1;
  }
  /** Form submission that was created or retrieved. */
  interface FormSubmission$2 {
      /**
       * Submission ID.
       * @readonly
       */
      _id?: string | null;
      /** ID of the form which submission belongs to. */
      formId?: string;
      /**
       * The app which the form submissions belong to. For example, the namespace for the Wix Forms App is `"wix.form_app.form"`. The namespace of a submission can be retrieved using the Get Submission endpoint.
       * @readonly
       */
      namespace?: string;
      /**
       * Status of the submission.
       * - `PENDING`: When a submission has been created, but has not yet been recorded in the submission table of the forms dashboard.
       * - `PAYMENT_WAITING`: When a submission of form, requiring payment, has been created.
       * - `PAYMENT_CANCELED`: When a submission's of form, requiring payment, order has been canceled.
       * - `CONFIRMED`: When a submission is recorded in the submissions table of the forms dashboard.
       */
      status?: SubmissionStatus$2;
      /** Submission values where key is the form field and value is the data submitted for the given field. */
      submissions?: Record<string, any>;
      /**
       * Date and time the form submission was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the form submission was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Revision number, which increments by 1 each time the form submission is updated. To prevent conflicting changes, the existing revision must be used when updating a form submission.
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
       * ID of the creator of the form submission.
       * @readonly
       */
      submitter?: Submitter$2;
      /** Whether the submission was read by a site Extension with permissions to manage submissions. */
      seen?: boolean;
      /** Data extensions ExtendedFields. */
      extendedFields?: ExtendedFields$2;
      /** Order details. */
      orderDetails?: OrderDetails$2;
  }
  enum SubmissionStatus$2 {
      UNDEFINED = "UNDEFINED",
      PENDING = "PENDING",
      CONFIRMED = "CONFIRMED",
      PAYMENT_WAITING = "PAYMENT_WAITING",
      PAYMENT_CANCELED = "PAYMENT_CANCELED"
  }
  interface Owner extends OwnerOwnerOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Service ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
  }
  /** @oneof */
  interface OwnerOwnerOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Service ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
  }
  interface OrderDetails$2 {
      /**
       * ID of the order related to submission (applicable if form has payments added).
       * @readonly
       */
      _id?: string;
      /**
       * Order number.
       * @readonly
       */
      number?: string | null;
      /**
       * Currency.
       * @readonly
       */
      currency?: string;
      /**
       * Item subtotal.
       * @readonly
       */
      itemSubtotal?: string;
  }
  interface Form$1 {
      /**
       * Form ID.
       * @readonly
       */
      _id?: string | null;
      /** List of form fields that represent input elements. */
      fields?: FormField$1[];
      /**
       * List of form fields that represent input elements.
       * @readonly
       */
      fieldsV2?: FormFieldV2$1[];
      /** Defines the layout for form fields in each submission step. */
      steps?: Step$1[];
      /** Form rules, can be applied to layout and items properties. */
      rules?: FormRule$1[];
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
      properties?: FormProperties$1;
      /**
       * Fields which were soft deleted.
       * @readonly
       */
      deletedFields?: FormField$1[];
      /**
       * List of form fields that represent input elements.
       * @readonly
       */
      deletedFieldsV2?: FormFieldV2$1[];
      /**
       * Regular forms can be freely modified.
       * Extensions are copied from templates and might have restrictions.
       * @readonly
       */
      kind?: Kind$1;
      /**
       * Defines triggers that will be executed after the submission, for the submissions based on this schema.
       * Forms provide a set of predefined triggers that allow it to assign specific business cases to created forms.
       */
      postSubmissionTriggers?: PostSubmissionTriggers$1;
      /** Data extensions ExtendedFields. */
      extendedFields?: ExtendedFields$2;
      /** Identifies the namespace that the form belongs to. */
      namespace?: string;
      /**
       * Nested forms.
       * @internal
       * @readonly
       */
      nestedForms?: NestedForm$1[];
      /**
       * Media folder ID.
       * @readonly
       */
      mediaFolderId?: string | null;
  }
  interface FormField$1 {
      /** Item ID. */
      _id?: string;
      /** Definition of a target where the value of field belongs. */
      target?: string | null;
      /** Validation of field output value. */
      validation?: Validation$1;
      /** Mark the field as containing personal information. This will encrypt user data when storing it. */
      pii?: boolean;
      /** Whether the field is hidden. */
      hidden?: boolean;
      /** Field view properties. */
      view?: Record<string, any> | null;
      /** Details identifying field, which is extension of other entity */
      dataExtensionsDetails?: DataExtensionsDetails$1;
      /**
       * Nested form ID.
       * @internal
       */
      nestedFormId?: string | null;
      /**
       * Nested form overrides.
       * @internal
       */
      nestedFormOverrides?: NestedFormOverrides$1;
  }
  interface StringType$1 extends StringTypeFormatOptionsOneOf$1 {
      /** DATE format options */
      dateOptions?: DateTimeConstraints$1;
      /** DATE_TIME format options */
      dateTimeOptions?: DateTimeConstraints$1;
      /** TIME format options */
      timeOptions?: DateTimeConstraints$1;
      /** DATE_OPTIONAL_TIME format options */
      dateOptionalTimeOptions?: DateTimeConstraints$1;
      /** Minimum length. */
      minLength?: number | null;
      /** Maximum length. */
      maxLength?: number | null;
      /** Pattern for a regular expression match. */
      pattern?: string | null;
      /** Format of a string. */
      format?: Format$1;
      /** Custom error messages when validation fails. */
      errorMessages?: StringErrorMessages$1;
      /** List of allowed values. */
      enum?: string[] | null;
  }
  /** @oneof */
  interface StringTypeFormatOptionsOneOf$1 {
      /** DATE format options */
      dateOptions?: DateTimeConstraints$1;
      /** DATE_TIME format options */
      dateTimeOptions?: DateTimeConstraints$1;
      /** TIME format options */
      timeOptions?: DateTimeConstraints$1;
      /** DATE_OPTIONAL_TIME format options */
      dateOptionalTimeOptions?: DateTimeConstraints$1;
  }
  enum Format$1 {
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
  interface StringErrorMessages$1 {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface DateTimeConstraints$1 {
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
  interface NumberType$1 {
      /** Inclusive maximum value. */
      maximum?: number | null;
      /** Inclusive minimum value. */
      minimum?: number | null;
      /** Multiple of value. */
      multipleOf?: number | null;
      /** Custom error message when validation fails. */
      errorMessages?: NumberErrorMessages$1;
      /** List of allowed values. */
      enum?: number[] | null;
  }
  interface NumberErrorMessages$1 {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface IntegerType$1 {
      /** Minimum value. */
      maximum?: number | null;
      /** Maximum value. */
      minimum?: number | null;
      /** Multiple of value. */
      multipleOf?: number | null;
      /** Custom error message when validation fails. */
      errorMessages?: NumberErrorMessages$1;
      /** List of allowed values. */
      enum?: number[] | null;
  }
  interface BooleanType$1 {
      /** Custom error message when validation fails. */
      errorMessages?: BooleanErrorMessages$1;
      /** List of allowed values. */
      enum?: boolean[];
  }
  interface BooleanErrorMessages$1 {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface ArrayType$1 {
      /** Maximum amount of array elements. */
      maxItems?: number | null;
      /** Minimum amount of array elements. */
      minItems?: number | null;
      /** Type of items allowed in array. */
      items?: ArrayItems$1;
      /** Custom error message when validation fails. */
      errorMessages?: ArrayErrorMessages$1;
  }
  interface ObjectType$1 {
      /** Description of object properties. */
      properties?: Record<string, PropertiesType$1>;
      /** Custom error message when validation fails. */
      errorMessages?: ObjectErrorMessages$1;
  }
  interface PropertiesType$1 extends PropertiesTypePropertiesTypeOneOf$1 {
      /** String type validation for property. */
      string?: StringType$1;
      /** Number type validation for property. */
      number?: NumberType$1;
      /** Boolean type validation for property. */
      boolean?: BooleanType$1;
      /** Integer type validation for property. */
      integer?: IntegerType$1;
      /** Array type validation for property. */
      array?: ArrayType$1;
      /** Whether the property is required. */
      required?: boolean;
  }
  /** @oneof */
  interface PropertiesTypePropertiesTypeOneOf$1 {
      /** String type validation for property. */
      string?: StringType$1;
      /** Number type validation for property. */
      number?: NumberType$1;
      /** Boolean type validation for property. */
      boolean?: BooleanType$1;
      /** Integer type validation for property. */
      integer?: IntegerType$1;
      /** Array type validation for property. */
      array?: ArrayType$1;
  }
  interface ObjectErrorMessages$1 {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface ArrayItems$1 extends ArrayItemsItemsOneOf$1 {
      /** String type validation for items. */
      string?: StringType$1;
      /** Number type validation for items. */
      number?: NumberType$1;
      /** Boolean type validation for items. */
      boolean?: BooleanType$1;
      /** Integer type validation for items. */
      integer?: IntegerType$1;
      /** Object type validation for items */
      object?: ObjectType$1;
  }
  /** @oneof */
  interface ArrayItemsItemsOneOf$1 {
      /** String type validation for items. */
      string?: StringType$1;
      /** Number type validation for items. */
      number?: NumberType$1;
      /** Boolean type validation for items. */
      boolean?: BooleanType$1;
      /** Integer type validation for items. */
      integer?: IntegerType$1;
      /** Object type validation for items */
      object?: ObjectType$1;
  }
  interface ArrayErrorMessages$1 {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface PredefinedValidation$1 extends PredefinedValidationFormatOptionsOneOf$1 {
      /** Payment input field. */
      paymentOptions?: PaymentType$1;
      /** Format of predefined validation. */
      format?: ValidationFormat$1;
  }
  /** @oneof */
  interface PredefinedValidationFormatOptionsOneOf$1 {
      /** Payment input field. */
      paymentOptions?: PaymentType$1;
  }
  enum ValidationFormat$1 {
      UNDEFINED = "UNDEFINED",
      /** File upload validation. */
      WIX_FILE = "WIX_FILE",
      /** Payment validation. */
      PAYMENT = "PAYMENT"
  }
  interface PaymentType$1 {
      /** Field mapped to products. */
      products?: Product$1[];
      /** Minimum amount of different products. */
      minItems?: number | null;
      /** Maximum amount of different products. */
      maxItems?: number | null;
  }
  enum ProductType$1 {
      UNKNOWN = "UNKNOWN",
      /** Shippable (physical). */
      SHIPPABLE = "SHIPPABLE",
      /** Digital. */
      DIGITAL = "DIGITAL"
  }
  enum PriceType$1 {
      UNKNOWN = "UNKNOWN",
      /** Fixed price. */
      FIXED_PRICE = "FIXED_PRICE",
      /** Dynamic price from price range. */
      DYNAMIC_PRICE = "DYNAMIC_PRICE"
  }
  interface QuantityLimit$1 {
      /** Minimum quantity. */
      minimum?: number | null;
      /** Maximum quantity. */
      maximum?: number | null;
  }
  interface FixedPriceOptions$1 {
      /** Fixed price monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). */
      price?: string;
  }
  interface DynamicPriceOptions$1 {
      /** Minimal price monetary amount. */
      minPrice?: string;
      /** Maximal price monetary amount. */
      maxPrice?: string | null;
  }
  interface Product$1 extends ProductPriceOptionsOneOf$1 {
      /** Fixed price options. */
      fixedPriceOptions?: FixedPriceOptions$1;
      /** Dynamic price options. */
      dynamicPriceOptions?: DynamicPriceOptions$1;
      /**
       * Product ID.
       * @readonly
       */
      _id?: string;
      /** Product type. */
      productType?: ProductType$1;
      /** Price type. */
      priceType?: PriceType$1;
      /** Quantity limit. */
      quantityLimit?: QuantityLimit$1;
  }
  /** @oneof */
  interface ProductPriceOptionsOneOf$1 {
      /** Fixed price options. */
      fixedPriceOptions?: FixedPriceOptions$1;
      /** Dynamic price options. */
      dynamicPriceOptions?: DynamicPriceOptions$1;
  }
  interface NestedFormFieldOverrides$1 {
      /** Whether the field is required. Leave blank for no override. */
      required?: boolean | null;
      /** Whether the field is hidden. Leave blank for no override. */
      hidden?: boolean | null;
  }
  interface Validation$1 extends ValidationValidationOneOf$1 {
      /** Validation of string type. */
      string?: StringType$1;
      /** Validation of number type. */
      number?: NumberType$1;
      /** Validation of integer type. */
      integer?: IntegerType$1;
      /** Validation of boolean type. */
      boolean?: BooleanType$1;
      /** Validation of array type. */
      array?: ArrayType$1;
      /** Validation of object type. */
      object?: ObjectType$1;
      /** Predefined validation of specific format */
      predefined?: PredefinedValidation$1;
      /** Whether the field is required. */
      required?: boolean;
  }
  /** @oneof */
  interface ValidationValidationOneOf$1 {
      /** Validation of string type. */
      string?: StringType$1;
      /** Validation of number type. */
      number?: NumberType$1;
      /** Validation of integer type. */
      integer?: IntegerType$1;
      /** Validation of boolean type. */
      boolean?: BooleanType$1;
      /** Validation of array type. */
      array?: ArrayType$1;
      /** Validation of object type. */
      object?: ObjectType$1;
      /** Predefined validation of specific format */
      predefined?: PredefinedValidation$1;
  }
  interface DataExtensionsDetails$1 {
      /** FQDNS which can be extended with this field */
      fqdns?: string[];
  }
  interface NestedFormOverrides$1 {
      /** Field overrides by field ID */
      fieldOverrides?: Record<string, NestedFormFieldOverrides$1>;
  }
  interface FormFieldV2$1 extends FormFieldV2FieldTypeOptionsOneOf$1 {
      /** Field accept input of data */
      inputOptions?: InputField$1;
      /** Field for displaying information */
      displayOptions?: DisplayField$1;
      /** Submit button of the form */
      submitOptions?: SubmitButton$1;
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
      fieldType?: FieldType$1;
  }
  /** @oneof */
  interface FormFieldV2FieldTypeOptionsOneOf$1 {
      /** Field accept input of data */
      inputOptions?: InputField$1;
      /** Field for displaying information */
      displayOptions?: DisplayField$1;
      /** Submit button of the form */
      submitOptions?: SubmitButton$1;
  }
  interface InputFieldStringType$1 {
      /** Minimum length. */
      minLength?: number | null;
      /** Maximum length. */
      maxLength?: number | null;
      /** Pattern for a regular expression match. */
      pattern?: string | null;
      /** Format of a string. */
      format?: FormatEnumFormat$1;
      /** Custom error messages when validation fails. */
      errorMessages?: InputFieldStringErrorMessages$1;
      /** List of allowed values. */
      enum?: string[] | null;
  }
  enum FormatEnumFormat$1 {
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
  interface InputFieldStringErrorMessages$1 {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  enum StringComponentType$1 {
      UNKNOWN = "UNKNOWN",
      TEXT_INPUT = "TEXT_INPUT",
      RADIO_GROUP = "RADIO_GROUP",
      DROPDOWN = "DROPDOWN",
      DATE_TIME = "DATE_TIME"
  }
  interface TextInput$1 {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent$1;
      /** Placeholder for the value input */
      placeholder?: string | null;
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
  }
  interface RichContent$1 {
      /** Node objects representing a rich content document. */
      nodes?: Node$1[];
      /** Object metadata. */
      metadata?: Metadata$1;
      /** Global styling for header, paragraph, block quote, and code block nodes in the object. */
      documentStyle?: DocumentStyle$1;
  }
  interface Node$1 extends NodeDataOneOf$1 {
      /** Data for a button node. */
      buttonData?: ButtonData$1;
      /** Data for a code block node. */
      codeBlockData?: CodeBlockData$1;
      /** Data for a divider node. */
      dividerData?: DividerData$1;
      /** Data for a file node. */
      fileData?: FileData$1;
      /** Data for a gallery node. */
      galleryData?: GalleryData$1;
      /** Data for a GIF node. */
      gifData?: GIFData$1;
      /** Data for a heading node. */
      headingData?: HeadingData$1;
      /** Data for an embedded HTML node. */
      htmlData?: HTMLData$1;
      /** Data for an image node. */
      imageData?: ImageData$1;
      /** Data for a link preview node. */
      linkPreviewData?: LinkPreviewData$1;
      /** Data for a map node. */
      mapData?: MapData$1;
      /** Data for a paragraph node. */
      paragraphData?: ParagraphData$1;
      /** Data for a poll node. */
      pollData?: PollData$1;
      /** Data for a text node. Used to apply decorations to text. */
      textData?: TextData$1;
      /** Data for an app embed node. */
      appEmbedData?: AppEmbedData$1;
      /** Data for a video node. */
      videoData?: VideoData$1;
      /** Data for an oEmbed node. */
      embedData?: EmbedData$1;
      /** Data for a collapsible list node. */
      collapsibleListData?: CollapsibleListData$1;
      /** Data for a table node. */
      tableData?: TableData$1;
      /** Data for a table cell node. */
      tableCellData?: TableCellData$1;
      /** Data for a custon external node. */
      externalData?: Record<string, any> | null;
      /** Data for an audio node. */
      audioData?: AudioData$1;
      /** Data for an ordered list node. */
      orderedListData?: OrderedListData$1;
      /** Data for a bulleted list node. */
      bulletedListData?: BulletedListData$1;
      /** Data for a block quote node. */
      blockquoteData?: BlockquoteData$1;
      /** Node type. Use `APP_EMBED` for nodes that embed content from other Wix apps. Use `EMBED` to embed content in [oEmbed](https://oembed.com/) format. */
      type?: NodeType$1;
      /** Node ID. */
      _id?: string;
      /** A list of child nodes. */
      nodes?: Node$1[];
      /** Padding and background color styling for the node. */
      style?: NodeStyle$1;
  }
  /** @oneof */
  interface NodeDataOneOf$1 {
      /** Data for a button node. */
      buttonData?: ButtonData$1;
      /** Data for a code block node. */
      codeBlockData?: CodeBlockData$1;
      /** Data for a divider node. */
      dividerData?: DividerData$1;
      /** Data for a file node. */
      fileData?: FileData$1;
      /** Data for a gallery node. */
      galleryData?: GalleryData$1;
      /** Data for a GIF node. */
      gifData?: GIFData$1;
      /** Data for a heading node. */
      headingData?: HeadingData$1;
      /** Data for an embedded HTML node. */
      htmlData?: HTMLData$1;
      /** Data for an image node. */
      imageData?: ImageData$1;
      /** Data for a link preview node. */
      linkPreviewData?: LinkPreviewData$1;
      /** Data for a map node. */
      mapData?: MapData$1;
      /** Data for a paragraph node. */
      paragraphData?: ParagraphData$1;
      /** Data for a poll node. */
      pollData?: PollData$1;
      /** Data for a text node. Used to apply decorations to text. */
      textData?: TextData$1;
      /** Data for an app embed node. */
      appEmbedData?: AppEmbedData$1;
      /** Data for a video node. */
      videoData?: VideoData$1;
      /** Data for an oEmbed node. */
      embedData?: EmbedData$1;
      /** Data for a collapsible list node. */
      collapsibleListData?: CollapsibleListData$1;
      /** Data for a table node. */
      tableData?: TableData$1;
      /** Data for a table cell node. */
      tableCellData?: TableCellData$1;
      /** Data for a custon external node. */
      externalData?: Record<string, any> | null;
      /** Data for an audio node. */
      audioData?: AudioData$1;
      /** Data for an ordered list node. */
      orderedListData?: OrderedListData$1;
      /** Data for a bulleted list node. */
      bulletedListData?: BulletedListData$1;
      /** Data for a block quote node. */
      blockquoteData?: BlockquoteData$1;
  }
  enum NodeType$1 {
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
  interface NodeStyle$1 {
      /** The top padding value in pixels. */
      paddingTop?: string | null;
      /** The bottom padding value in pixels. */
      paddingBottom?: string | null;
      /** The background color as a hexadecimal value. */
      backgroundColor?: string | null;
  }
  interface ButtonData$1 {
      /** Styling for the button's container. */
      containerData?: PluginContainerData$1;
      /** The button type. */
      type?: Type$1;
      /** Styling for the button. */
      styles?: Styles$1;
      /** The text to display on the button. */
      text?: string | null;
      /** Button link details. */
      link?: Link$1;
  }
  interface Border$1 {
      /** Border width in pixels. */
      width?: number | null;
      /** Border radius in pixels. */
      radius?: number | null;
  }
  interface Colors$1 {
      /** The text color as a hexadecimal value. */
      text?: string | null;
      /** The border color as a hexadecimal value. */
      border?: string | null;
      /** The background color as a hexadecimal value. */
      background?: string | null;
  }
  interface PluginContainerData$1 {
      /** The width of the node when it's displayed. */
      width?: PluginContainerDataWidth$1;
      /** The node's alignment within its container. */
      alignment?: PluginContainerDataAlignment$1;
      /** Spoiler cover settings for the node. */
      spoiler?: Spoiler$1;
      /** The height of the node when it's displayed. */
      height?: Height$1;
      /** Sets whether text should wrap around this node when it's displayed. If `textWrap` is `false`, the node takes up the width of its container. */
      textWrap?: boolean | null;
  }
  enum WidthType$1 {
      /** Width matches the content width */
      CONTENT = "CONTENT",
      /** Small Width */
      SMALL = "SMALL",
      /** Width will match the original asset width */
      ORIGINAL = "ORIGINAL",
      /** coast-to-coast display */
      FULL_WIDTH = "FULL_WIDTH"
  }
  interface PluginContainerDataWidth$1 extends PluginContainerDataWidthDataOneOf$1 {
      /**
       * One of the following predefined width options:
       * `CONTENT`: The width of the container matches the content width.
       * `SMALL`: Small width.
       * `ORIGINAL`: The width of the container matches the original asset width.
       * `FULL_WIDTH`: Full width.
       */
      size?: WidthType$1;
      /** A custom width value in pixels. */
      custom?: string | null;
  }
  /** @oneof */
  interface PluginContainerDataWidthDataOneOf$1 {
      /**
       * One of the following predefined width options:
       * `CONTENT`: The width of the container matches the content width.
       * `SMALL`: Small width.
       * `ORIGINAL`: The width of the container matches the original asset width.
       * `FULL_WIDTH`: Full width.
       */
      size?: WidthType$1;
      /** A custom width value in pixels. */
      custom?: string | null;
  }
  enum PluginContainerDataAlignment$1 {
      /** Center Alignment */
      CENTER = "CENTER",
      /** Left Alignment */
      LEFT = "LEFT",
      /** Right Alignment */
      RIGHT = "RIGHT"
  }
  interface Spoiler$1 {
      /** Sets whether the spoiler cover is enabled for this node. */
      enabled?: boolean | null;
      /** The description displayed on top of the spoiler cover. */
      description?: string | null;
      /** The text for the button used to remove the spoiler cover. */
      buttonText?: string | null;
  }
  interface Height$1 {
      /** A custom height value in pixels. */
      custom?: string | null;
  }
  enum Type$1 {
      /** Regular link button */
      LINK = "LINK",
      /** Triggers custom action that is defined in plugin configuration by the consumer */
      ACTION = "ACTION"
  }
  interface Styles$1 {
      /** Border attributes. */
      border?: Border$1;
      /** Color attributes. */
      colors?: Colors$1;
  }
  interface Link$1 extends LinkDataOneOf$1 {
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
      target?: LinkTarget$1;
      /** The HTML `rel` attribute value for the link. This object specifies the relationship between the current document and the linked document. */
      rel?: Rel$1;
      /** A serialized object used for a custom or external link panel. */
      customData?: string | null;
  }
  /** @oneof */
  interface LinkDataOneOf$1 {
      /** The absolute URL for the linked document. */
      url?: string;
      /** The target node's ID. Used for linking to another node in this object. */
      anchor?: string;
  }
  enum LinkTarget$1 {
      /** Opens the linked document in the same frame as it was clicked (this is default) */
      SELF = "SELF",
      /** Opens the linked document in a new window or tab */
      BLANK = "BLANK",
      /** Opens the linked document in the parent frame */
      PARENT = "PARENT",
      /** Opens the linked document in the full body of the window */
      TOP = "TOP"
  }
  interface Rel$1 {
      /** Indicates to search engine crawlers not to follow the link. */
      nofollow?: boolean | null;
      /** Indicates to search engine crawlers that the link is a paid placement such as sponsored content or an advertisement. */
      sponsored?: boolean | null;
      /** Indicates that this link is user-generated content and isn't necessarily trusted or endorsed by the page’s author. For example, a link in a fourm post. */
      ugc?: boolean | null;
      /** Indicates that this link protect referral information from being passed to the target website. */
      noreferrer?: boolean | null;
  }
  interface CodeBlockData$1 {
      /** Styling for the code block's text. */
      textStyle?: TextStyle$1;
  }
  interface TextStyle$1 {
      /** Text alignment. Defaults to `AUTO`. */
      textAlignment?: TextAlignment$1;
      /** A CSS `line-height` value for the text as a unitless ratio. */
      lineHeight?: string | null;
  }
  enum TextAlignment$1 {
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
  interface DividerData$1 {
      /** Styling for the divider's container. */
      containerData?: PluginContainerData$1;
      /** Divider line style. */
      lineStyle?: LineStyle$1;
      /** Divider width. */
      width?: Width$1;
      /** Divider alignment. */
      alignment?: Alignment$1;
  }
  enum LineStyle$1 {
      /** Single Line */
      SINGLE = "SINGLE",
      /** Double Line */
      DOUBLE = "DOUBLE",
      /** Dashed Line */
      DASHED = "DASHED",
      /** Dotted Line */
      DOTTED = "DOTTED"
  }
  enum Width$1 {
      /** Large line */
      LARGE = "LARGE",
      /** Medium line */
      MEDIUM = "MEDIUM",
      /** Small line */
      SMALL = "SMALL"
  }
  enum Alignment$1 {
      /** Center alignment */
      CENTER = "CENTER",
      /** Left alignment */
      LEFT = "LEFT",
      /** Right alignment */
      RIGHT = "RIGHT"
  }
  interface FileData$1 {
      /** Styling for the file's container. */
      containerData?: PluginContainerData$1;
      /** The source for the file's data. */
      src?: FileSource$1;
      /** File name. */
      name?: string | null;
      /** File type. */
      type?: string | null;
      /** File size in KB. */
      size?: number | null;
      /** Settings for PDF files. */
      pdfSettings?: PDFSettings$1;
      /** File MIME type. */
      mimeType?: string | null;
      /** File path. */
      path?: string | null;
  }
  enum ViewMode$1 {
      /** No PDF view */
      NONE = "NONE",
      /** Full PDF view */
      FULL = "FULL",
      /** Mini PDF view */
      MINI = "MINI"
  }
  interface FileSource$1 extends FileSourceDataOneOf$1 {
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
  interface FileSourceDataOneOf$1 {
      /** The absolute URL for the file's source. */
      url?: string | null;
      /** Custom ID. Use `id` instead. */
      custom?: string | null;
      /** An ID that's resolved to a URL by a resolver function. */
      _id?: string | null;
  }
  interface PDFSettings$1 {
      /**
       * PDF view mode. One of the following:
       * `NONE` : The PDF isn't displayed.
       * `FULL` : A full page view of the PDF is displayed.
       * `MINI` : A mini view of the PDF is displayed.
       */
      viewMode?: ViewMode$1;
      /** Sets whether the PDF download button is disabled. */
      disableDownload?: boolean | null;
      /** Sets whether the PDF print button is disabled. */
      disablePrint?: boolean | null;
  }
  interface GalleryData$1 {
      /** Styling for the gallery's container. */
      containerData?: PluginContainerData$1;
      /** The items in the gallery. */
      items?: Item$1[];
      /** Options for defining the gallery's appearance. */
      options?: GalleryOptions$1;
      /** Sets whether the gallery's expand button is disabled. */
      disableExpand?: boolean | null;
      /** Sets whether the gallery's download button is disabled. */
      disableDownload?: boolean | null;
  }
  interface Media$1 {
      /** The source for the media's data. */
      src?: FileSource$1;
      /** Media width in pixels. */
      width?: number | null;
      /** Media height in pixels. */
      height?: number | null;
      /** Media duration in seconds. Only relevant for audio and video files. */
      duration?: number | null;
  }
  interface Image$1 {
      /** Image file details. */
      media?: Media$1;
      /** Link details for images that are links. */
      link?: Link$1;
  }
  interface Video$1 {
      /** Video file details. */
      media?: Media$1;
      /** Video thumbnail file details. */
      thumbnail?: Media$1;
  }
  interface Item$1 extends ItemDataOneOf$1 {
      /** An image item. */
      image?: Image$1;
      /** A video item. */
      video?: Video$1;
      /** Item title. */
      title?: string | null;
      /** Item's alternative text. */
      altText?: string | null;
  }
  /** @oneof */
  interface ItemDataOneOf$1 {
      /** An image item. */
      image?: Image$1;
      /** A video item. */
      video?: Video$1;
  }
  interface GalleryOptions$1 {
      /** Gallery layout. */
      layout?: Layout$1;
      /** Styling for gallery items. */
      item?: ItemStyle$1;
      /** Styling for gallery thumbnail images. */
      thumbnails?: Thumbnails$1;
  }
  enum LayoutType$1 {
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
  enum Orientation$1 {
      /** Rows Orientation */
      ROWS = "ROWS",
      /** Columns Orientation */
      COLUMNS = "COLUMNS"
  }
  enum Crop$1 {
      /** Crop to fill */
      FILL = "FILL",
      /** Crop to fit */
      FIT = "FIT"
  }
  enum ThumbnailsAlignment$1 {
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
  interface Layout$1 {
      /** Gallery layout type. */
      type?: LayoutType$1;
      /** Sets whether horizontal scroll is enabled. */
      horizontalScroll?: boolean | null;
      /** Gallery orientation. */
      orientation?: Orientation$1;
      /** The number of columns to display on full size screens. */
      numberOfColumns?: number | null;
      /** The number of columns to display on mobile screens. */
      mobileNumberOfColumns?: number | null;
  }
  interface ItemStyle$1 {
      /** Desirable dimension for each item in pixels (behvaior changes according to gallery type) */
      targetSize?: number | null;
      /** Item ratio */
      ratio?: number | null;
      /** Sets how item images are cropped. */
      crop?: Crop$1;
      /** The spacing between items in pixels. */
      spacing?: number | null;
  }
  interface Thumbnails$1 {
      /** Thumbnail alignment. */
      placement?: ThumbnailsAlignment$1;
      /** Spacing between thumbnails in pixels. */
      spacing?: number | null;
  }
  interface GIFData$1 {
      /** Styling for the GIF's container. */
      containerData?: PluginContainerData$1;
      /** The source of the full size GIF. */
      original?: GIF$1;
      /** The source of the downsized GIF. */
      downsized?: GIF$1;
      /** Height in pixels. */
      height?: number;
      /** Width in pixels. */
      width?: number;
  }
  interface GIF$1 {
      /** GIF format URL. */
      gif?: string | null;
      /** MP4 format URL. */
      mp4?: string | null;
      /** Thumbnail URL. */
      still?: string | null;
  }
  interface HeadingData$1 {
      /** Heading level from 1-6. */
      level?: number;
      /** Styling for the heading text. */
      textStyle?: TextStyle$1;
      /** Indentation level from 1-6. */
      indentation?: number | null;
  }
  interface HTMLData$1 extends HTMLDataDataOneOf$1 {
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
      /** Styling for the HTML node's container. */
      containerData?: PluginContainerData$1;
      /** The type of HTML code. */
      source?: Source$1;
  }
  /** @oneof */
  interface HTMLDataDataOneOf$1 {
      /** The URL for the HTML code for the node. */
      url?: string;
      /** The HTML code for the node. */
      html?: string;
      /** Whether this is an AdSense element. Use `source` instead. */
      isAdsense?: boolean | null;
  }
  enum Source$1 {
      HTML = "HTML",
      ADSENSE = "ADSENSE"
  }
  interface ImageData$1 {
      /** Styling for the image's container. */
      containerData?: PluginContainerData$1;
      /** Image file details. */
      image?: Media$1;
      /** Link details for images that are links. */
      link?: Link$1;
      /** Sets whether the image expands to full screen when clicked. */
      disableExpand?: boolean | null;
      /** Image's alternative text. */
      altText?: string | null;
      /** Image caption. */
      caption?: string | null;
      /** Sets whether the image's download button is disabled. */
      disableDownload?: boolean | null;
  }
  interface LinkPreviewData$1 {
      /** Styling for the link preview's container. */
      containerData?: PluginContainerData$1;
      /** Link details. */
      link?: Link$1;
      /** Preview title. */
      title?: string | null;
      /** Preview thumbnail URL. */
      thumbnailUrl?: string | null;
      /** Preview description. */
      description?: string | null;
      /** The preview content as HTML. */
      html?: string | null;
  }
  interface MapData$1 {
      /** Styling for the map's container. */
      containerData?: PluginContainerData$1;
      /** Map settings. */
      mapSettings?: MapSettings$1;
  }
  interface MapSettings$1 {
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
      mapType?: MapType$1;
  }
  enum MapType$1 {
      /** Roadmap map type */
      ROADMAP = "ROADMAP",
      /** Satellite map type */
      SATELITE = "SATELITE",
      /** Hybrid map type */
      HYBRID = "HYBRID",
      /** Terrain map type */
      TERRAIN = "TERRAIN"
  }
  interface ParagraphData$1 {
      /** Styling for the paragraph text. */
      textStyle?: TextStyle$1;
      /** Indentation level from 1-6. */
      indentation?: number | null;
  }
  interface PollData$1 {
      /** Styling for the poll's container. */
      containerData?: PluginContainerData$1;
      /** Poll data. */
      poll?: Poll$1;
      /** Layout settings for the poll and voting options. */
      layout?: PollDataLayout$1;
      /** Styling for the poll and voting options. */
      design?: Design$1;
  }
  enum ViewRole$1 {
      /** Only Poll creator can view the results */
      CREATOR = "CREATOR",
      /** Anyone who voted can see the results */
      VOTERS = "VOTERS",
      /** Anyone can see the results, even if one didn't vote */
      EVERYONE = "EVERYONE"
  }
  enum VoteRole$1 {
      /** Logged in member */
      SITE_MEMBERS = "SITE_MEMBERS",
      /** Anyone */
      ALL = "ALL"
  }
  interface Permissions$1 {
      /** Sets who can view the poll results. */
      view?: ViewRole$1;
      /** Sets who can vote. */
      vote?: VoteRole$1;
      /** Sets whether one voter can vote multiple times. */
      allowMultipleVotes?: boolean | null;
  }
  interface PollOption$1 {
      /** Option ID. */
      _id?: string | null;
      /** Option title. */
      title?: string | null;
      /** The image displayed with the option. */
      image?: Media$1;
  }
  interface Settings$1 {
      /** Permissions settings for voting. */
      permissions?: Permissions$1;
      /** Sets whether voters are displayed in the vote results. */
      showVoters?: boolean | null;
      /** Sets whether the vote count is displayed. */
      showVotesCount?: boolean | null;
  }
  enum PollLayoutType$1 {
      /** List */
      LIST = "LIST",
      /** Grid */
      GRID = "GRID"
  }
  enum PollLayoutDirection$1 {
      /** Left-to-right */
      LTR = "LTR",
      /** Right-to-left */
      RTL = "RTL"
  }
  interface PollLayout$1 {
      /** The layout for displaying the voting options. */
      type?: PollLayoutType$1;
      /** The direction of the text displayed in the voting options. Text can be displayed either right-to-left or left-to-right. */
      direction?: PollLayoutDirection$1;
      /** Sets whether to display the main poll image. */
      enableImage?: boolean | null;
  }
  interface OptionLayout$1 {
      /** Sets whether to display option images. */
      enableImage?: boolean | null;
  }
  enum BackgroundType$1 {
      /** Color background type */
      COLOR = "COLOR",
      /** Image background type */
      IMAGE = "IMAGE",
      /** Gradiant background type */
      GRADIENT = "GRADIENT"
  }
  interface Gradient$1 {
      /** The gradient angle in degrees. */
      angle?: number | null;
      /** The start color as a hexademical value. */
      startColor?: string | null;
      /** The end color as a hexademical value. */
      lastColor?: string | null;
  }
  interface Background$1 extends BackgroundBackgroundOneOf$1 {
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: Media$1;
      /** Details for a gradient background. */
      gradient?: Gradient$1;
      /** Background type. For each option, include the relevant details. */
      type?: BackgroundType$1;
  }
  /** @oneof */
  interface BackgroundBackgroundOneOf$1 {
      /** The background color as a hexademical value. */
      color?: string | null;
      /** An image to use for the background. */
      image?: Media$1;
      /** Details for a gradient background. */
      gradient?: Gradient$1;
  }
  interface PollDesign$1 {
      /** Background styling. */
      background?: Background$1;
      /** Border radius in pixels. */
      borderRadius?: number | null;
  }
  interface OptionDesign$1 {
      /** Border radius in pixels. */
      borderRadius?: number | null;
  }
  interface Poll$1 {
      /** Poll ID. */
      _id?: string | null;
      /** Poll title. */
      title?: string | null;
      /** Poll creator ID. */
      creatorId?: string | null;
      /** Main poll image. */
      image?: Media$1;
      /** Voting options. */
      options?: PollOption$1[];
      /** The poll's permissions and display settings. */
      settings?: Settings$1;
  }
  interface PollDataLayout$1 {
      /** Poll layout settings. */
      poll?: PollLayout$1;
      /** Voting otpions layout settings. */
      options?: OptionLayout$1;
  }
  interface Design$1 {
      /** Styling for the poll. */
      poll?: PollDesign$1;
      /** Styling for voting options. */
      options?: OptionDesign$1;
  }
  interface TextData$1 {
      /** The text to apply decorations to. */
      text?: string;
      /** The decorations to apply. */
      decorations?: Decoration$1[];
  }
  /** Adds appearence changes to text */
  interface Decoration$1 extends DecorationDataOneOf$1 {
      /** Data for an anchor link decoration. */
      anchorData?: AnchorData$1;
      /** Data for a color decoration. */
      colorData?: ColorData$1;
      /** Data for an external link decoration. */
      linkData?: LinkData$1;
      /** Data for a mention decoration. */
      mentionData?: MentionData$1;
      /** Data for a font size decoration. */
      fontSizeData?: FontSizeData$1;
      /** Font weight for a bold decoration. */
      fontWeightValue?: number | null;
      /** Data for an italic decoration. */
      italicData?: boolean | null;
      /** Data for an underline decoration. */
      underlineData?: boolean | null;
      /** The type of decoration to apply. */
      type?: DecorationType$1;
  }
  /** @oneof */
  interface DecorationDataOneOf$1 {
      /** Data for an anchor link decoration. */
      anchorData?: AnchorData$1;
      /** Data for a color decoration. */
      colorData?: ColorData$1;
      /** Data for an external link decoration. */
      linkData?: LinkData$1;
      /** Data for a mention decoration. */
      mentionData?: MentionData$1;
      /** Data for a font size decoration. */
      fontSizeData?: FontSizeData$1;
      /** Font weight for a bold decoration. */
      fontWeightValue?: number | null;
      /** Data for an italic decoration. */
      italicData?: boolean | null;
      /** Data for an underline decoration. */
      underlineData?: boolean | null;
  }
  enum DecorationType$1 {
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
  interface AnchorData$1 {
      /** The target node's ID. */
      anchor?: string;
  }
  interface ColorData$1 {
      /** The text's background color as a hexadecimal value. */
      background?: string | null;
      /** The text's foreground color as a hexadecimal value. */
      foreground?: string | null;
  }
  interface LinkData$1 {
      /** Link details. */
      link?: Link$1;
  }
  interface MentionData$1 {
      /** The mentioned user's name. */
      name?: string;
      /** The version of the user's name that appears after the `@` character in the mention. */
      slug?: string;
      /** Mentioned user's ID. */
      _id?: string | null;
  }
  interface FontSizeData$1 {
      /** The units used for the font size. */
      unit?: FontType$1;
      /** Font size value. */
      value?: number | null;
  }
  enum FontType$1 {
      PX = "PX",
      EM = "EM"
  }
  interface AppEmbedData$1 extends AppEmbedDataAppDataOneOf$1 {
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData$1;
      /** Data for embedded Wix Events content. */
      eventData?: EventData$1;
      /** The type of Wix App content being embedded. */
      type?: AppType$1;
      /** The ID of the embedded content. */
      itemId?: string | null;
      /** The name of the embedded content. */
      name?: string | null;
      /** Deprecated: Use `image` instead. */
      imageSrc?: string | null;
      /** The URL for the embedded content. */
      url?: string | null;
      /** An image for the embedded content. */
      image?: Media$1;
  }
  /** @oneof */
  interface AppEmbedDataAppDataOneOf$1 {
      /** Data for embedded Wix Bookings content. */
      bookingData?: BookingData$1;
      /** Data for embedded Wix Events content. */
      eventData?: EventData$1;
  }
  enum AppType$1 {
      PRODUCT = "PRODUCT",
      EVENT = "EVENT",
      BOOKING = "BOOKING"
  }
  interface BookingData$1 {
      /** Booking duration in minutes. */
      durations?: string | null;
  }
  interface EventData$1 {
      /** Event schedule. */
      scheduling?: string | null;
      /** Event location. */
      location?: string | null;
  }
  interface VideoData$1 {
      /** Styling for the video's container. */
      containerData?: PluginContainerData$1;
      /** Video details. */
      video?: Media$1;
      /** Video thumbnail details. */
      thumbnail?: Media$1;
      /** Sets whether the video's download button is disabled. */
      disableDownload?: boolean | null;
      /** Video title. */
      title?: string | null;
      /** Video options. */
      options?: PlaybackOptions$1;
  }
  interface PlaybackOptions$1 {
      /** Sets whether the media will automatically start playing. */
      autoPlay?: boolean | null;
      /** Sets whether media's will be looped. */
      playInLoop?: boolean | null;
      /** Sets whether media's controls will be shown. */
      showControls?: boolean | null;
  }
  interface EmbedData$1 {
      /** Styling for the oEmbed node's container. */
      containerData?: PluginContainerData$1;
      /** An [oEmbed](https://www.oembed.com) object. */
      oembed?: Oembed$1;
      /** Origin asset source. */
      src?: string | null;
  }
  interface Oembed$1 {
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
  interface CollapsibleListData$1 {
      /** Styling for the collapsible list's container. */
      containerData?: PluginContainerData$1;
      /** If `true`, only one item can be expanded at a time. */
      expandOnlyOne?: boolean | null;
      /** Sets which items are expanded when the page loads. */
      initialExpandedItems?: InitialExpandedItems$1;
      /** The direction of the text in the list. Either left-to-right or right-to-left. */
      direction?: Direction$1;
      /** If `true`, The collapsible item will appear in search results as an FAQ. */
      isQapageData?: boolean | null;
  }
  enum InitialExpandedItems$1 {
      /** First item will be expended initally */
      FIRST = "FIRST",
      /** All items will expended initally */
      ALL = "ALL",
      /** All items collapsed initally */
      NONE = "NONE"
  }
  enum Direction$1 {
      /** Left-to-right */
      LTR = "LTR",
      /** Right-to-left */
      RTL = "RTL"
  }
  interface TableData$1 {
      /** Styling for the table's container. */
      containerData?: PluginContainerData$1;
      /** The table's dimensions. */
      dimensions?: Dimensions$1;
      /** Deprecated: Use `rowHeader` and `columnHeader` instead. */
      header?: boolean | null;
      /** Sets whether the table's first row is a header. */
      rowHeader?: boolean | null;
      /** Sets whether the table's first column is a header. */
      columnHeader?: boolean | null;
  }
  interface Dimensions$1 {
      /** An array representing relative width of each column in relation to the other columns. */
      colsWidthRatio?: number[];
      /** An array representing the height of each row in pixels. */
      rowsHeight?: number[];
      /** An array representing the minimum width of each column in pixels. */
      colsMinWidth?: number[];
  }
  interface TableCellData$1 {
      /** Styling for the cell's background color and text alignment. */
      cellStyle?: CellStyle$1;
      /** The cell's border colors. */
      borderColors?: BorderColors$1;
  }
  enum VerticalAlignment$1 {
      /** Top alignment */
      TOP = "TOP",
      /** Middle alignment */
      MIDDLE = "MIDDLE",
      /** Bottom alignment */
      BOTTOM = "BOTTOM"
  }
  interface CellStyle$1 {
      /** Vertical alignment for the cell's text. */
      verticalAlignment?: VerticalAlignment$1;
      /** Cell background color as a hexadecimal value. */
      backgroundColor?: string | null;
  }
  interface BorderColors$1 {
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
  enum NullValue$1 {
      /** Null value. */
      NULL_VALUE = "NULL_VALUE"
  }
  /**
   * `ListValue` is a wrapper around a repeated field of values.
   *
   * The JSON representation for `ListValue` is JSON array.
   */
  interface ListValue$1 {
      /** Repeated field of dynamically typed values. */
      values?: any[];
  }
  interface AudioData$1 {
      /** Styling for the audio node's container. */
      containerData?: PluginContainerData$1;
      /** Audio file details. */
      audio?: Media$1;
      /** Sets whether the audio node's download button is disabled. */
      disableDownload?: boolean | null;
      /** Cover image. */
      coverImage?: Media$1;
      /** Track name. */
      name?: string | null;
      /** Author name. */
      authorName?: string | null;
      /** An HTML version of the audio node. */
      html?: string | null;
  }
  interface OrderedListData$1 {
      /** Indentation level. */
      indentation?: number;
  }
  interface BulletedListData$1 {
      /** Indentation level. */
      indentation?: number;
  }
  interface BlockquoteData$1 {
      /** Indentation level. */
      indentation?: number;
  }
  interface Metadata$1 {
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
  interface DocumentStyle$1 {
      /** Styling for H1 nodes. */
      headerOne?: TextNodeStyle$1;
      /** Styling for H2 nodes. */
      headerTwo?: TextNodeStyle$1;
      /** Styling for H3 nodes. */
      headerThree?: TextNodeStyle$1;
      /** Styling for H4 nodes. */
      headerFour?: TextNodeStyle$1;
      /** Styling for H5 nodes. */
      headerFive?: TextNodeStyle$1;
      /** Styling for H6 nodes. */
      headerSix?: TextNodeStyle$1;
      /** Styling for paragraph nodes. */
      paragraph?: TextNodeStyle$1;
      /** Styling for block quote nodes. */
      blockquote?: TextNodeStyle$1;
      /** Styling for code block nodes. */
      codeBlock?: TextNodeStyle$1;
  }
  interface TextNodeStyle$1 {
      /** The decorations to apply to the node. */
      decorations?: Decoration$1[];
      /** Padding and background color for the node. */
      nodeStyle?: NodeStyle$1;
      /** Line height for text in the node. */
      lineHeight?: string | null;
  }
  interface RadioGroup$1 {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent$1;
      /**
       * Flag identifying to show option allowing input custom value
       * List of options to select from
       */
      options?: RadioGroupOption$1[];
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
      /** Option which can be specified by UoU, enabled when this object is specified. */
      customOption?: RadioGroupCustomOption$1;
  }
  interface RadioGroupOption$1 {
      /** Selectable option label */
      label?: string | null;
      /** Selectable option value, which is saved to DB. */
      value?: string | null;
      /** Flag identifying that option should be selected by default */
      default?: boolean;
      /** Option id. Used as binding for translations */
      _id?: string;
  }
  interface RadioGroupCustomOption$1 {
      /** Label of custom option input */
      label?: string | null;
      /** Placeholder of custom option input */
      placeholder?: string | null;
  }
  interface Dropdown$1 {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent$1;
      /** List of options to select from */
      options?: DropdownOption$1[];
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
      /** Option which can be specified by UoU, enabled when this object is specified. */
      customOption?: DropdownCustomOption$1;
      /** Placeholder of dropdown input */
      placeholder?: string | null;
  }
  interface DropdownOption$1 {
      /** Selectable option label */
      label?: string | null;
      /** Selectable option value, which is saved to DB. */
      value?: string | null;
      /** Flag identifying that option should be selected by default */
      default?: boolean;
      /** Option id. Used as binding for translations */
      _id?: string;
  }
  interface DropdownCustomOption$1 {
      /** Label of custom option input */
      label?: string | null;
      /** Placeholder of custom option input */
      placeholder?: string | null;
  }
  interface DateTimeInput$1 extends DateTimeInputDateTimeInputTypeOptionsOneOf$1 {
      /** Options specific to the combined Date and Time input type. */
      dateTimeOptions?: DateTimeOptions$1;
      /** Options specific to the Date-only input type. */
      dateOptions?: DateOptions$1;
      /** Options specific to the Time-only input type. */
      timeOptions?: TimeOptions$1;
      /** Label of the field. Displayed text for the date/time input. */
      label?: string | null;
      /** Description of the field. Additional information about the date/time input. */
      description?: RichContent$1;
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
      dateTimeInputType?: DateTimeInputType$1;
  }
  /** @oneof */
  interface DateTimeInputDateTimeInputTypeOptionsOneOf$1 {
      /** Options specific to the combined Date and Time input type. */
      dateTimeOptions?: DateTimeOptions$1;
      /** Options specific to the Date-only input type. */
      dateOptions?: DateOptions$1;
      /** Options specific to the Time-only input type. */
      timeOptions?: TimeOptions$1;
  }
  enum DateFormatPart$1 {
      YEAR = "YEAR",
      MONTH = "MONTH",
      DAY = "DAY"
  }
  enum DateTimeInputType$1 {
      UNKNOWN = "UNKNOWN",
      /** Show date and time input */
      DATE_TIME = "DATE_TIME",
      /** Show only date input */
      DATE = "DATE",
      /** Show only time input */
      TIME = "TIME"
  }
  interface DateTimeOptions$1 {
      /** Order of date picking component parts (e.g., YEAR, MONTH, DAY). */
      dateFormatParts?: DateFormatPart$1[];
      /**
       * Flag indicating whether to use the 24-hour time format.
       * Default: false.
       */
      use24HourFormat?: boolean;
  }
  interface DateOptions$1 {
      /** Order of date picking component parts (e.g., YEAR, MONTH, DAY). */
      dateFormatParts?: DateFormatPart$1[];
  }
  interface TimeOptions$1 {
      /**
       * Flag indicating whether to use the 24-hour time format.
       * Default: false.
       */
      use24HourFormat?: boolean;
  }
  interface InputFieldNumberType$1 {
      /** Inclusive maximum value. */
      maximum?: number | null;
      /** Inclusive minimum value. */
      minimum?: number | null;
      /** Multiple of value. */
      multipleOf?: number | null;
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldNumberErrorMessages$1;
      /** List of allowed values. */
      enum?: number[] | null;
  }
  interface InputFieldNumberErrorMessages$1 {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  enum NumberComponentType$1 {
      UNKNOWN = "UNKNOWN",
      NUMBER_INPUT = "NUMBER_INPUT"
  }
  interface NumberInput$1 {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent$1;
      /** Placeholder for the value input */
      placeholder?: string | null;
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
  }
  interface InputFieldBooleanType$1 {
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldBooleanErrorMessages$1;
      /** List of allowed values. */
      enum?: boolean[];
  }
  interface InputFieldBooleanErrorMessages$1 {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  enum BooleanComponentType$1 {
      UNKNOWN = "UNKNOWN",
      CHECKBOX = "CHECKBOX"
  }
  interface Checkbox$1 {
      /** Label of the field */
      label?: RichContent$1;
  }
  interface InputFieldArrayType$1 {
      /** Maximum amount of array elements. */
      maxItems?: number | null;
      /** Minimum amount of array elements. */
      minItems?: number | null;
      /** Type of items allowed in array. */
      items?: ArrayTypeArrayItems$1;
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldArrayErrorMessages$1;
  }
  enum ItemType$1 {
      UNKNOWN = "UNKNOWN",
      STRING = "STRING",
      NUMBER = "NUMBER",
      BOOLEAN = "BOOLEAN",
      INTEGER = "INTEGER",
      OBJECT = "OBJECT"
  }
  interface InputFieldIntegerType$1 {
      /** Maximum value. */
      maximum?: number | null;
      /** Minimum value. */
      minimum?: number | null;
      /** Multiple of value. */
      multipleOf?: number | null;
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldNumberErrorMessages$1;
      /** List of allowed values. */
      enum?: number[] | null;
  }
  interface InputFieldObjectType$1 {
      /** Description of object properties. */
      properties?: Record<string, ObjectTypePropertiesType$1>;
      /** Custom error message when validation fails. */
      errorMessages?: InputFieldObjectErrorMessages$1;
  }
  enum PropertiesTypePropertiesType$1 {
      UNKNOWN = "UNKNOWN",
      STRING = "STRING",
      NUMBER = "NUMBER",
      BOOLEAN = "BOOLEAN",
      INTEGER = "INTEGER",
      ARRAY = "ARRAY"
  }
  interface ObjectTypePropertiesType$1 extends ObjectTypePropertiesTypePropertiesTypeOptionsOneOf$1 {
      /** String type validation for property. */
      stringOptions?: InputFieldStringType$1;
      /** Number type validation for property. */
      numberOptions?: InputFieldNumberType$1;
      /** Boolean type validation for property. */
      booleanOptions?: InputFieldBooleanType$1;
      /** Integer type validation for property. */
      integerOptions?: InputFieldIntegerType$1;
      /** Array type validation for property. */
      arrayOptions?: InputFieldArrayType$1;
      /**
       * Type of object properties
       * @readonly
       */
      propertiesType?: PropertiesTypePropertiesType$1;
      /** Whether the property is required. */
      required?: boolean;
  }
  /** @oneof */
  interface ObjectTypePropertiesTypePropertiesTypeOptionsOneOf$1 {
      /** String type validation for property. */
      stringOptions?: InputFieldStringType$1;
      /** Number type validation for property. */
      numberOptions?: InputFieldNumberType$1;
      /** Boolean type validation for property. */
      booleanOptions?: InputFieldBooleanType$1;
      /** Integer type validation for property. */
      integerOptions?: InputFieldIntegerType$1;
      /** Array type validation for property. */
      arrayOptions?: InputFieldArrayType$1;
  }
  interface InputFieldObjectErrorMessages$1 {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  interface ArrayTypeArrayItems$1 extends ArrayTypeArrayItemsItemTypeOptionsOneOf$1 {
      /** String type validation for items. */
      stringOptions?: InputFieldStringType$1;
      /** Number type validation for items. */
      numberOptions?: InputFieldNumberType$1;
      /** Boolean type validation for items. */
      booleanOptions?: InputFieldBooleanType$1;
      /** Integer type validation for items. */
      integerOptions?: InputFieldIntegerType$1;
      /** Object type validation for items */
      objectOptions?: InputFieldObjectType$1;
      /**
       * Type of array items
       * @readonly
       */
      itemType?: ItemType$1;
  }
  /** @oneof */
  interface ArrayTypeArrayItemsItemTypeOptionsOneOf$1 {
      /** String type validation for items. */
      stringOptions?: InputFieldStringType$1;
      /** Number type validation for items. */
      numberOptions?: InputFieldNumberType$1;
      /** Boolean type validation for items. */
      booleanOptions?: InputFieldBooleanType$1;
      /** Integer type validation for items. */
      integerOptions?: InputFieldIntegerType$1;
      /** Object type validation for items */
      objectOptions?: InputFieldObjectType$1;
  }
  interface InputFieldArrayErrorMessages$1 {
      /** Default error message on invalid validation. */
      default?: string | null;
  }
  enum ComponentType$1 {
      UNKNOWN = "UNKNOWN",
      CHECKBOX_GROUP = "CHECKBOX_GROUP"
  }
  interface CheckboxGroup$1 {
      /** Label of the field */
      label?: string | null;
      /** Description of the field */
      description?: RichContent$1;
      /** List of options to select from */
      options?: Option$1[];
      /**
       * Flag identifying to hide or not label
       * Default: true
       */
      showLabel?: boolean | null;
      /** Option which can be specified by UoU, enabled when this object is specified. */
      customOption?: CustomOption$1;
  }
  interface MediaItem$1 extends MediaItemMediaOneOf$1 {
      /** WixMedia image. */
      image?: string;
  }
  /** @oneof */
  interface MediaItemMediaOneOf$1 {
      /** WixMedia image. */
      image?: string;
  }
  interface Option$1 {
      /** Selectable option label */
      label?: string | null;
      /** Selectable option value, which is saved to DB. */
      value?: any;
      /** Flag identifying that option should be selected by default */
      default?: boolean;
      /** Option id. Used as binding for translations */
      _id?: string;
      /** Media item. Media, associated with option, like image. */
      media?: MediaItem$1;
  }
  interface CustomOption$1 {
      /** Label of custom option input */
      label?: string | null;
      /** Placeholder of custom option input */
      placeholder?: string | null;
  }
  enum WixFileComponentType$1 {
      UNKNOWN = "UNKNOWN",
      FILE_UPLOAD = "FILE_UPLOAD"
  }
  interface FileUpload$1 {
      /** Selectable option label */
      label?: string | null;
      /** Description of the field */
      description?: RichContent$1;
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
      uploadFileFormats?: UploadFileFormat$1[];
      /** Custom text which appears when file is uploaded, if missing file name will be shown */
      explanationText?: string | null;
  }
  enum UploadFileFormat$1 {
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
  enum PaymentComponentType$1 {
      UNKNOWN = "UNKNOWN",
      CHECKBOX_GROUP = "CHECKBOX_GROUP"
  }
  interface ProductCheckboxGroup$1 {
      /** Label of the field. */
      label?: string | null;
      /** Description of the field. */
      description?: RichContent$1;
      /** List of options to select from. */
      options?: ProductCheckboxGroupOption$1[];
  }
  interface ProductCheckboxGroupOption$1 {
      /** Selectable option label. */
      label?: string | null;
      /** Selectable option value, which is saved to DB. Corresponds to product id, found in field's products list. */
      value?: any;
      /** Option id. Used as binding for translations. */
      _id?: string;
      /** Media item. Media, associated with option, like image. */
      media?: MediaItem$1;
  }
  enum InputType$1 {
      UNKNOWN = "UNKNOWN",
      STRING = "STRING",
      NUMBER = "NUMBER",
      BOOLEAN = "BOOLEAN",
      ARRAY = "ARRAY",
      OBJECT = "OBJECT",
      WIX_FILE = "WIX_FILE",
      PAYMENT = "PAYMENT"
  }
  interface _String$1 extends _StringComponentTypeOptionsOneOf$1 {
      /** Text input field */
      textInputOptions?: TextInput$1;
      /** Selection field as radio group */
      radioGroupOptions?: RadioGroup$1;
      /** Selection field as drop down */
      dropdownOptions?: Dropdown$1;
      /** Field for selecting date and/or time */
      dateTimeOptions?: DateTimeInput$1;
      /** Validation of field output value. */
      validation?: InputFieldStringType$1;
      /**
       * Component type of the string input field
       * @readonly
       */
      componentType?: StringComponentType$1;
  }
  /** @oneof */
  interface _StringComponentTypeOptionsOneOf$1 {
      /** Text input field */
      textInputOptions?: TextInput$1;
      /** Selection field as radio group */
      radioGroupOptions?: RadioGroup$1;
      /** Selection field as drop down */
      dropdownOptions?: Dropdown$1;
      /** Field for selecting date and/or time */
      dateTimeOptions?: DateTimeInput$1;
  }
  interface _Number$1 extends _NumberComponentTypeOptionsOneOf$1 {
      /** Number value input field */
      numberInputOptions?: NumberInput$1;
      /** Validation of field output value. */
      validation?: InputFieldNumberType$1;
      /**
       * Component type of the number input field
       * @readonly
       */
      componentType?: NumberComponentType$1;
  }
  /** @oneof */
  interface _NumberComponentTypeOptionsOneOf$1 {
      /** Number value input field */
      numberInputOptions?: NumberInput$1;
  }
  interface _Boolean$1 extends _BooleanComponentTypeOptionsOneOf$1 {
      /** Checkbox input field */
      checkboxOptions?: Checkbox$1;
      /** Validation of field output value. */
      validation?: InputFieldBooleanType$1;
      /**
       * Component type of the boolean input field
       * @readonly
       */
      componentType?: BooleanComponentType$1;
  }
  /** @oneof */
  interface _BooleanComponentTypeOptionsOneOf$1 {
      /** Checkbox input field */
      checkboxOptions?: Checkbox$1;
  }
  interface _Array$1 extends _ArrayComponentTypeOptionsOneOf$1 {
      /** Checkbox group input field */
      checkboxGroupOptions?: CheckboxGroup$1;
      /** Validation of array type. */
      validation?: InputFieldArrayType$1;
      /**
       * Component type of the array input field
       * @readonly
       */
      componentType?: ComponentType$1;
  }
  /** @oneof */
  interface _ArrayComponentTypeOptionsOneOf$1 {
      /** Checkbox group input field */
      checkboxGroupOptions?: CheckboxGroup$1;
  }
  interface _Object$1 extends _ObjectValidationOneOf$1 {
      /** Validation of object type. */
      object?: InputFieldObjectType$1;
      /**
       * Nested form ID.
       * @internal
       */
      nestedFormId?: string | null;
  }
  /** @oneof */
  interface _ObjectValidationOneOf$1 {
      /** Validation of object type. */
      object?: InputFieldObjectType$1;
      /**
       * Nested form ID.
       * @internal
       */
      nestedFormId?: string | null;
  }
  interface WixFile$1 extends WixFileComponentTypeOptionsOneOf$1 {
      /** File upload input field */
      fileUploadOptions?: FileUpload$1;
      /**
       * Component type of the array input field
       * @readonly
       */
      componentType?: WixFileComponentType$1;
  }
  /** @oneof */
  interface WixFileComponentTypeOptionsOneOf$1 {
      /** File upload input field */
      fileUploadOptions?: FileUpload$1;
  }
  interface Payment$1 extends PaymentComponentTypeOptionsOneOf$1 {
      /** Checkbox group input field. */
      checkboxGroupOptions?: ProductCheckboxGroup$1;
      /**
       * Component type of the payment input field.
       * @readonly
       */
      componentType?: PaymentComponentType$1;
      /** Validation of payment type. */
      validation?: PaymentType$1;
  }
  /** @oneof */
  interface PaymentComponentTypeOptionsOneOf$1 {
      /** Checkbox group input field. */
      checkboxGroupOptions?: ProductCheckboxGroup$1;
  }
  interface Header$1 {
      /** Content of the header */
      content?: RichContent$1;
  }
  interface RichText$1 {
      /** Content of the rich text field */
      content?: RichContent$1;
  }
  enum Target$1 {
      UNDEFINED = "UNDEFINED",
      /** Opened in same browser tab */
      SELF = "SELF",
      /** Url open in new tab */
      BLANK = "BLANK"
  }
  interface ThankYouMessage$1 {
      /** Message show after form submission */
      text?: RichContent$1;
      /**
       * Duration after how much second it should disappear. If 0, will stay forever.
       * Default: false
       */
      duration?: number | null;
  }
  interface Redirect$1 {
      /** Url to which UoU should be redirected after successful submit of form */
      url?: string | null;
      /** How should url be opened */
      target?: Target$1;
  }
  enum FieldType$1 {
      UNKNOWN = "UNKNOWN",
      INPUT = "INPUT",
      DISPLAY = "DISPLAY",
      SUBMIT = "SUBMIT"
  }
  interface InputField$1 extends InputFieldInputTypeOptionsOneOf$1 {
      /** Input return string as value */
      stringOptions?: _String$1;
      /** Input return number as value */
      numberOptions?: _Number$1;
      /** Input return boolean as value */
      booleanOptions?: _Boolean$1;
      /** Input return array as value */
      arrayOptions?: _Array$1;
      /** Input return object as value */
      objectOptions?: _Object$1;
      /** Input return "Wix file" as value */
      wixFileOptions?: WixFile$1;
      /** Input returns selected products as value. */
      paymentOptions?: Payment$1;
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
      inputType?: InputType$1;
  }
  /** @oneof */
  interface InputFieldInputTypeOptionsOneOf$1 {
      /** Input return string as value */
      stringOptions?: _String$1;
      /** Input return number as value */
      numberOptions?: _Number$1;
      /** Input return boolean as value */
      booleanOptions?: _Boolean$1;
      /** Input return array as value */
      arrayOptions?: _Array$1;
      /** Input return object as value */
      objectOptions?: _Object$1;
      /** Input return "Wix file" as value */
      wixFileOptions?: WixFile$1;
      /** Input returns selected products as value. */
      paymentOptions?: Payment$1;
  }
  interface DisplayField$1 extends DisplayFieldComponentTypeOneOf$1 {
      /** Header field */
      header?: Header$1;
      /** Rich text field */
      richText?: RichText$1;
  }
  /** @oneof */
  interface DisplayFieldComponentTypeOneOf$1 {
      /** Header field */
      header?: Header$1;
      /** Rich text field */
      richText?: RichText$1;
  }
  interface SubmitButton$1 extends SubmitButtonSubmitActionOneOf$1 {
      /** Submit action effect is to show message */
      thankYouMessage?: ThankYouMessage$1;
      /** Submit action effect is to redirect to */
      redirect?: Redirect$1;
      /** When button is not on last page it behaves as switch between pages page, text of label to go to next page. */
      nextText?: string | null;
      /** When button is not on last page it behaves as switch between pages page, text of label to go to previous page. */
      previousText?: string | null;
      /** Text on the button when button is submitting a form */
      submitText?: string | null;
  }
  /** @oneof */
  interface SubmitButtonSubmitActionOneOf$1 {
      /** Submit action effect is to show message */
      thankYouMessage?: ThankYouMessage$1;
      /** Submit action effect is to redirect to */
      redirect?: Redirect$1;
  }
  interface Step$1 {
      /** Step ID. */
      _id?: string;
      /** Name of the step. */
      name?: string | null;
      /** Is step hidden */
      hidden?: boolean;
      /** Form step properties */
      layout?: FormLayout$1;
  }
  interface FormLayout$1 {
      /** Layout for large break point. */
      large?: BreakPoint$1;
      /** Layout for medium break point. */
      medium?: BreakPoint$1;
      /** Layout for small break point. */
      small?: BreakPoint$1;
  }
  interface BreakPoint$1 {
      /** Description of layouts for items. */
      items?: ItemLayout$1[];
      /** Amount of columns of layout grid. */
      columns?: number | null;
      /** Row height of layout grid. */
      rowHeight?: number | null;
      /** Description of elements margins. */
      margin?: Margin$1;
      /** Description of elements paddings. */
      padding?: Margin$1;
      /** Sections of the layout, which allow manage fields */
      sections?: Section$1[];
  }
  interface ItemLayout$1 {
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
  interface Margin$1 {
      /** Horizontal value. */
      horizontal?: number | null;
      /** Vertical value. */
      vertical?: number | null;
  }
  interface Section$1 {
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
  interface FormRule$1 {
      /** Id of the rule */
      _id?: string;
      /** Rule on which item properties or layouts will be changed. */
      condition?: Record<string, any> | null;
      /**
       * Form items with defined properties that will be
       * changed when given condition is resolved to true.
       */
      overrides?: FormOverride$1[];
      /** Name of the rule */
      name?: string | null;
  }
  enum OverrideEntityType$1 {
      UNKNOWN = "UNKNOWN",
      FIELD = "FIELD",
      FORM = "FORM",
      NESTED_FORM_FIELD = "NESTED_FORM_FIELD"
  }
  interface FormOverride$1 {
      /** Override entity type. */
      entityType?: OverrideEntityType$1;
      /** Overridden entity id. Either fieldId, or "{fieldIdWithNestedForm}/{nestedFormFieldId}" */
      entityId?: string | null;
      /** Form entity properties path with new value, that will be changed on condition. */
      valueChanges?: Record<string, any>;
  }
  interface FormProperties$1 {
      /** Form name. */
      name?: string | null;
      /** Identifies if the form is disabled. */
      disabled?: boolean;
  }
  enum Kind$1 {
      REGULAR = "REGULAR",
      EXTENSION = "EXTENSION"
  }
  interface PostSubmissionTriggers$1 {
      /** Upserts a contact from the submission data. */
      upsertContact?: UpsertContact$1;
  }
  interface UpsertContact$1 {
      /** Fields mapping (target field mapped to corresponding contact field). */
      fieldsMapping?: Record<string, FormFieldContactInfo$1>;
      /**
       * List of contact label keys.
       * [Contact labels](https://support.wix.com/en/article/adding-labels-to-contacts-in-your-contact-list)
       * help categorize contacts.
       */
      labels?: string[];
  }
  interface FormFieldContactInfo$1 extends FormFieldContactInfoAdditionalInfoOneOf$1 {
      /** Email info. */
      emailInfo?: EmailInfo$1;
      /** Phone info. */
      phoneInfo?: PhoneInfo$1;
      /** Address info. */
      addressInfo?: AddressInfo$1;
      /** Custom field info. */
      customFieldInfo?: CustomFieldInfo$1;
      /** Field mapped to contacts. */
      contactField?: ContactField$1;
  }
  /** @oneof */
  interface FormFieldContactInfoAdditionalInfoOneOf$1 {
      /** Email info. */
      emailInfo?: EmailInfo$1;
      /** Phone info. */
      phoneInfo?: PhoneInfo$1;
      /** Address info. */
      addressInfo?: AddressInfo$1;
      /** Custom field info. */
      customFieldInfo?: CustomFieldInfo$1;
  }
  enum EmailInfoTag$1 {
      UNTAGGED = "UNTAGGED",
      MAIN = "MAIN"
  }
  enum PhoneInfoTag$1 {
      UNTAGGED = "UNTAGGED",
      MAIN = "MAIN"
  }
  enum Tag$1 {
      UNTAGGED = "UNTAGGED",
      HOME = "HOME"
  }
  enum ContactField$1 {
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
  interface EmailInfo$1 {
      /** Email tag. */
      tag?: EmailInfoTag$1;
  }
  interface PhoneInfo$1 {
      /** Phone tag. */
      tag?: PhoneInfoTag$1;
  }
  interface AddressInfo$1 {
      /** Address tag. */
      tag?: Tag$1;
  }
  interface CustomFieldInfo$1 {
      /** Custom field key. */
      key?: string;
  }
  interface NestedForm$1 {
      /** Targets which have this form. */
      targets?: string[];
      /** Nested form. */
      form?: Form$1;
  }
  interface ValidateSpamResponse {
      /** The created SpamSubmission. */
      spamSubmission?: SpamSubmission;
      /** Is the submission a spam. */
      spam?: boolean;
  }
  interface CreateSpamSubmissionRequest {
      /** Spam submission to be created. */
      spamSubmission: SpamSubmission;
  }
  interface CreateSpamSubmissionResponse {
      /** The created spam submission. */
      spamSubmission?: SpamSubmission;
  }
  interface GetSpamSubmissionRequest {
      /** Id of the spam submission to retrieve. */
      spamSubmissionId: string;
  }
  interface GetSpamSubmissionResponse {
      /** The retrieved spam submission. */
      spamSubmission?: SpamSubmission;
  }
  interface DeleteSpamSubmissionRequest {
      /** Id of the spam submission to delete. */
      spamSubmissionId: string;
  }
  interface DeleteSpamSubmissionResponse {
  }
  interface ReportNotSpamSubmissionRequest {
      /** Id of the spam submission to report as not spam. */
      spamSubmissionId: string;
  }
  interface ReportNotSpamSubmissionResponse {
      /** Created submission */
      submission?: FormSubmission$2;
  }
  interface ReportSpamSubmissionRequest {
      /** Id of the submission to report as spam. */
      submissionId: string;
  }
  interface ReportSpamSubmissionResponse {
      /** Created spam submission */
      spamSubmission?: SpamSubmission;
  }
  interface QuerySpamSubmissionsRequest {
      /** WQL expression. */
      query: CursorQuery$1;
  }
  interface CursorQuery$1 extends CursorQueryPagingMethodOneOf$1 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
      /**
       * Filter object.
       *
       * See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more information.
       */
      filter?: Record<string, any> | null;
      /** Sort object. */
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
  interface QuerySpamSubmissionsResponse {
      /** The retrieved SpamSubmissions. */
      spamSubmissions?: SpamSubmission[];
      /** Details on the paged set of results returned. */
      pagingMetadata?: CursorPagingMetadata$1;
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
  interface UpdateSpamSubmissionRequest {
      /** Spam submission to be updated, may be partial. */
      spamSubmission: SpamSubmission;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateSpamSubmissionResponse {
      /** Updated spam submission. */
      spamSubmission?: SpamSubmission;
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
  /**
   * Checks if submission is a spam. For spam, persists a spam submission.
   * @param submission - Submission.
   * @internal
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.form
   * @requiredField options.form._id
   * @requiredField options.form.fields
   * @requiredField submission
   * @requiredField submission.formId
   */
  function validateSpam(submission: FormSubmission$2, options: ValidateSpamOptions): Promise<ValidateSpamResponse>;
  interface ValidateSpamOptions {
      /** Form. */
      form: Form$1;
  }
  /**
   * Creates a new spam submission.
   * To upload submission media, use the FormSubmissionService.getMediaUploadUrl endpoint
   * @param spamSubmission - Spam submission to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField spamSubmission
   * @requiredField spamSubmission.formId
   * @requiredField spamSubmission.reportReason
   * @requiredField spamSubmission.submissions
   * @requiredField spamSubmission.submitter
   * @adminMethod
   * @returns The created spam submission.
   */
  function createSpamSubmission(spamSubmission: SpamSubmission): Promise<SpamSubmission>;
  /**
   * Get a spam submission by id.
   * @param spamSubmissionId - Id of the spam submission to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField spamSubmissionId
   * @adminMethod
   * @returns The retrieved spam submission.
   */
  function getSpamSubmission(spamSubmissionId: string): Promise<SpamSubmission>;
  /**
   * Delete a spam submission.
   * @param spamSubmissionId - Id of the spam submission to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField spamSubmissionId
   * @adminMethod
   */
  function deleteSpamSubmission(spamSubmissionId: string): Promise<void>;
  /**
   * Report a spam submission as not spam. The submission is created, and the spam one is deleted.
   * Submission automations are triggered the same way as in standard submission creation flow.
   * @param spamSubmissionId - Id of the spam submission to report as not spam.
   * @internal
   * @documentationMaturity preview
   * @requiredField spamSubmissionId
   * @adminMethod
   */
  function reportNotSpamSubmission(spamSubmissionId: string): Promise<ReportNotSpamSubmissionResponse>;
  /**
   * Report a submission as spam. The spam submission is created, and the submission is deleted.
   * @param submissionId - Id of the submission to report as spam.
   * @internal
   * @documentationMaturity preview
   * @requiredField submissionId
   * @adminMethod
   */
  function reportSpamSubmission(submissionId: string): Promise<ReportSpamSubmissionResponse>;
  /**
   * Query spam submissions using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function querySpamSubmissions(): SpamSubmissionsQueryBuilder;
  interface QueryCursorResult$1 {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface SpamSubmissionsQueryResult extends QueryCursorResult$1 {
      items: SpamSubmission[];
      query: SpamSubmissionsQueryBuilder;
      next: () => Promise<SpamSubmissionsQueryResult>;
      prev: () => Promise<SpamSubmissionsQueryResult>;
  }
  interface SpamSubmissionsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'formId' | 'namespace' | '_createdDate' | 'reportReason', value: any) => SpamSubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'formId' | '_createdDate' | 'reportReason', value: any) => SpamSubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate', value: any) => SpamSubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate', value: any) => SpamSubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate', value: any) => SpamSubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate', value: any) => SpamSubmissionsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'formId' | '_createdDate' | 'reportReason', value: any) => SpamSubmissionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'formId' | '_createdDate' | 'reportReason'>) => SpamSubmissionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'formId' | '_createdDate' | 'reportReason'>) => SpamSubmissionsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => SpamSubmissionsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => SpamSubmissionsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<SpamSubmissionsQueryResult>;
  }
  /**
   * Updates a spam submission, supports partial update.
   * You need to pass the latest 'revision' for a successful update.
   * @param _id - Spam submission id.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField spamSubmission
   * @requiredField spamSubmission.formId
   * @requiredField spamSubmission.revision
   * @adminMethod
   * @returns Updated spam submission.
   */
  function updateSpamSubmission(_id: string | null, spamSubmission: UpdateSpamSubmission, options?: UpdateSpamSubmissionOptions): Promise<SpamSubmission>;
  interface UpdateSpamSubmission {
      /**
       * Spam submission id.
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
      /**
       * Submission submitter ID.
       * @readonly
       */
      submitter?: Submitter$2;
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
      /** Identifies the reason why the submission was reported as spam. */
      reportReason?: ReportReason;
      /** Data extensions ExtendedFields. */
      extendedFields?: ExtendedFields$2;
  }
  interface UpdateSpamSubmissionOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  
  type formsV4SpamSubmission_universal_d_FormSpamSubmissionSpiConfig = FormSpamSubmissionSpiConfig;
  type formsV4SpamSubmission_universal_d_FormsSpamSubmissionsNamespaceConfig = FormsSpamSubmissionsNamespaceConfig;
  type formsV4SpamSubmission_universal_d_SpamSubmissionPermissions = SpamSubmissionPermissions;
  type formsV4SpamSubmission_universal_d_SpamSubmission = SpamSubmission;
  type formsV4SpamSubmission_universal_d_ReportReason = ReportReason;
  const formsV4SpamSubmission_universal_d_ReportReason: typeof ReportReason;
  type formsV4SpamSubmission_universal_d_ValidateSpamRequest = ValidateSpamRequest;
  type formsV4SpamSubmission_universal_d_Owner = Owner;
  type formsV4SpamSubmission_universal_d_OwnerOwnerOneOf = OwnerOwnerOneOf;
  type formsV4SpamSubmission_universal_d_ValidateSpamResponse = ValidateSpamResponse;
  type formsV4SpamSubmission_universal_d_CreateSpamSubmissionRequest = CreateSpamSubmissionRequest;
  type formsV4SpamSubmission_universal_d_CreateSpamSubmissionResponse = CreateSpamSubmissionResponse;
  type formsV4SpamSubmission_universal_d_GetSpamSubmissionRequest = GetSpamSubmissionRequest;
  type formsV4SpamSubmission_universal_d_GetSpamSubmissionResponse = GetSpamSubmissionResponse;
  type formsV4SpamSubmission_universal_d_DeleteSpamSubmissionRequest = DeleteSpamSubmissionRequest;
  type formsV4SpamSubmission_universal_d_DeleteSpamSubmissionResponse = DeleteSpamSubmissionResponse;
  type formsV4SpamSubmission_universal_d_ReportNotSpamSubmissionRequest = ReportNotSpamSubmissionRequest;
  type formsV4SpamSubmission_universal_d_ReportNotSpamSubmissionResponse = ReportNotSpamSubmissionResponse;
  type formsV4SpamSubmission_universal_d_ReportSpamSubmissionRequest = ReportSpamSubmissionRequest;
  type formsV4SpamSubmission_universal_d_ReportSpamSubmissionResponse = ReportSpamSubmissionResponse;
  type formsV4SpamSubmission_universal_d_QuerySpamSubmissionsRequest = QuerySpamSubmissionsRequest;
  type formsV4SpamSubmission_universal_d_QuerySpamSubmissionsResponse = QuerySpamSubmissionsResponse;
  type formsV4SpamSubmission_universal_d_UpdateSpamSubmissionRequest = UpdateSpamSubmissionRequest;
  type formsV4SpamSubmission_universal_d_UpdateSpamSubmissionResponse = UpdateSpamSubmissionResponse;
  const formsV4SpamSubmission_universal_d_validateSpam: typeof validateSpam;
  type formsV4SpamSubmission_universal_d_ValidateSpamOptions = ValidateSpamOptions;
  const formsV4SpamSubmission_universal_d_createSpamSubmission: typeof createSpamSubmission;
  const formsV4SpamSubmission_universal_d_getSpamSubmission: typeof getSpamSubmission;
  const formsV4SpamSubmission_universal_d_deleteSpamSubmission: typeof deleteSpamSubmission;
  const formsV4SpamSubmission_universal_d_reportNotSpamSubmission: typeof reportNotSpamSubmission;
  const formsV4SpamSubmission_universal_d_reportSpamSubmission: typeof reportSpamSubmission;
  const formsV4SpamSubmission_universal_d_querySpamSubmissions: typeof querySpamSubmissions;
  type formsV4SpamSubmission_universal_d_SpamSubmissionsQueryResult = SpamSubmissionsQueryResult;
  type formsV4SpamSubmission_universal_d_SpamSubmissionsQueryBuilder = SpamSubmissionsQueryBuilder;
  const formsV4SpamSubmission_universal_d_updateSpamSubmission: typeof updateSpamSubmission;
  type formsV4SpamSubmission_universal_d_UpdateSpamSubmission = UpdateSpamSubmission;
  type formsV4SpamSubmission_universal_d_UpdateSpamSubmissionOptions = UpdateSpamSubmissionOptions;
  namespace formsV4SpamSubmission_universal_d {
    export {
      formsV4SpamSubmission_universal_d_FormSpamSubmissionSpiConfig as FormSpamSubmissionSpiConfig,
      SpiBaseUri$1 as SpiBaseUri,
      AlternativeUri$1 as AlternativeUri,
      formsV4SpamSubmission_universal_d_FormsSpamSubmissionsNamespaceConfig as FormsSpamSubmissionsNamespaceConfig,
      formsV4SpamSubmission_universal_d_SpamSubmissionPermissions as SpamSubmissionPermissions,
      Context$1 as Context,
      IdentityType$2 as IdentityType,
      IdentificationData$2 as IdentificationData,
      IdentificationDataIdOneOf$2 as IdentificationDataIdOneOf,
      formsV4SpamSubmission_universal_d_SpamSubmission as SpamSubmission,
      Submitter$2 as Submitter,
      SubmitterSubmitterOneOf$2 as SubmitterSubmitterOneOf,
      formsV4SpamSubmission_universal_d_ReportReason as ReportReason,
      ExtendedFields$2 as ExtendedFields,
      formsV4SpamSubmission_universal_d_ValidateSpamRequest as ValidateSpamRequest,
      FormSubmission$2 as FormSubmission,
      SubmissionStatus$2 as SubmissionStatus,
      formsV4SpamSubmission_universal_d_Owner as Owner,
      formsV4SpamSubmission_universal_d_OwnerOwnerOneOf as OwnerOwnerOneOf,
      OrderDetails$2 as OrderDetails,
      Form$1 as Form,
      FormField$1 as FormField,
      StringType$1 as StringType,
      StringTypeFormatOptionsOneOf$1 as StringTypeFormatOptionsOneOf,
      Format$1 as Format,
      StringErrorMessages$1 as StringErrorMessages,
      DateTimeConstraints$1 as DateTimeConstraints,
      NumberType$1 as NumberType,
      NumberErrorMessages$1 as NumberErrorMessages,
      IntegerType$1 as IntegerType,
      BooleanType$1 as BooleanType,
      BooleanErrorMessages$1 as BooleanErrorMessages,
      ArrayType$1 as ArrayType,
      ObjectType$1 as ObjectType,
      PropertiesType$1 as PropertiesType,
      PropertiesTypePropertiesTypeOneOf$1 as PropertiesTypePropertiesTypeOneOf,
      ObjectErrorMessages$1 as ObjectErrorMessages,
      ArrayItems$1 as ArrayItems,
      ArrayItemsItemsOneOf$1 as ArrayItemsItemsOneOf,
      ArrayErrorMessages$1 as ArrayErrorMessages,
      PredefinedValidation$1 as PredefinedValidation,
      PredefinedValidationFormatOptionsOneOf$1 as PredefinedValidationFormatOptionsOneOf,
      ValidationFormat$1 as ValidationFormat,
      PaymentType$1 as PaymentType,
      ProductType$1 as ProductType,
      PriceType$1 as PriceType,
      QuantityLimit$1 as QuantityLimit,
      FixedPriceOptions$1 as FixedPriceOptions,
      DynamicPriceOptions$1 as DynamicPriceOptions,
      Product$1 as Product,
      ProductPriceOptionsOneOf$1 as ProductPriceOptionsOneOf,
      NestedFormFieldOverrides$1 as NestedFormFieldOverrides,
      Validation$1 as Validation,
      ValidationValidationOneOf$1 as ValidationValidationOneOf,
      DataExtensionsDetails$1 as DataExtensionsDetails,
      NestedFormOverrides$1 as NestedFormOverrides,
      FormFieldV2$1 as FormFieldV2,
      FormFieldV2FieldTypeOptionsOneOf$1 as FormFieldV2FieldTypeOptionsOneOf,
      InputFieldStringType$1 as InputFieldStringType,
      FormatEnumFormat$1 as FormatEnumFormat,
      InputFieldStringErrorMessages$1 as InputFieldStringErrorMessages,
      StringComponentType$1 as StringComponentType,
      TextInput$1 as TextInput,
      RichContent$1 as RichContent,
      Node$1 as Node,
      NodeDataOneOf$1 as NodeDataOneOf,
      NodeType$1 as NodeType,
      NodeStyle$1 as NodeStyle,
      ButtonData$1 as ButtonData,
      Border$1 as Border,
      Colors$1 as Colors,
      PluginContainerData$1 as PluginContainerData,
      WidthType$1 as WidthType,
      PluginContainerDataWidth$1 as PluginContainerDataWidth,
      PluginContainerDataWidthDataOneOf$1 as PluginContainerDataWidthDataOneOf,
      PluginContainerDataAlignment$1 as PluginContainerDataAlignment,
      Spoiler$1 as Spoiler,
      Height$1 as Height,
      Type$1 as Type,
      Styles$1 as Styles,
      Link$1 as Link,
      LinkDataOneOf$1 as LinkDataOneOf,
      LinkTarget$1 as LinkTarget,
      Rel$1 as Rel,
      CodeBlockData$1 as CodeBlockData,
      TextStyle$1 as TextStyle,
      TextAlignment$1 as TextAlignment,
      DividerData$1 as DividerData,
      LineStyle$1 as LineStyle,
      Width$1 as Width,
      Alignment$1 as Alignment,
      FileData$1 as FileData,
      ViewMode$1 as ViewMode,
      FileSource$1 as FileSource,
      FileSourceDataOneOf$1 as FileSourceDataOneOf,
      PDFSettings$1 as PDFSettings,
      GalleryData$1 as GalleryData,
      Media$1 as Media,
      Image$1 as Image,
      Video$1 as Video,
      Item$1 as Item,
      ItemDataOneOf$1 as ItemDataOneOf,
      GalleryOptions$1 as GalleryOptions,
      LayoutType$1 as LayoutType,
      Orientation$1 as Orientation,
      Crop$1 as Crop,
      ThumbnailsAlignment$1 as ThumbnailsAlignment,
      Layout$1 as Layout,
      ItemStyle$1 as ItemStyle,
      Thumbnails$1 as Thumbnails,
      GIFData$1 as GIFData,
      GIF$1 as GIF,
      HeadingData$1 as HeadingData,
      HTMLData$1 as HTMLData,
      HTMLDataDataOneOf$1 as HTMLDataDataOneOf,
      Source$1 as Source,
      ImageData$1 as ImageData,
      LinkPreviewData$1 as LinkPreviewData,
      MapData$1 as MapData,
      MapSettings$1 as MapSettings,
      MapType$1 as MapType,
      ParagraphData$1 as ParagraphData,
      PollData$1 as PollData,
      ViewRole$1 as ViewRole,
      VoteRole$1 as VoteRole,
      Permissions$1 as Permissions,
      PollOption$1 as PollOption,
      Settings$1 as Settings,
      PollLayoutType$1 as PollLayoutType,
      PollLayoutDirection$1 as PollLayoutDirection,
      PollLayout$1 as PollLayout,
      OptionLayout$1 as OptionLayout,
      BackgroundType$1 as BackgroundType,
      Gradient$1 as Gradient,
      Background$1 as Background,
      BackgroundBackgroundOneOf$1 as BackgroundBackgroundOneOf,
      PollDesign$1 as PollDesign,
      OptionDesign$1 as OptionDesign,
      Poll$1 as Poll,
      PollDataLayout$1 as PollDataLayout,
      Design$1 as Design,
      TextData$1 as TextData,
      Decoration$1 as Decoration,
      DecorationDataOneOf$1 as DecorationDataOneOf,
      DecorationType$1 as DecorationType,
      AnchorData$1 as AnchorData,
      ColorData$1 as ColorData,
      LinkData$1 as LinkData,
      MentionData$1 as MentionData,
      FontSizeData$1 as FontSizeData,
      FontType$1 as FontType,
      AppEmbedData$1 as AppEmbedData,
      AppEmbedDataAppDataOneOf$1 as AppEmbedDataAppDataOneOf,
      AppType$1 as AppType,
      BookingData$1 as BookingData,
      EventData$1 as EventData,
      VideoData$1 as VideoData,
      PlaybackOptions$1 as PlaybackOptions,
      EmbedData$1 as EmbedData,
      Oembed$1 as Oembed,
      CollapsibleListData$1 as CollapsibleListData,
      InitialExpandedItems$1 as InitialExpandedItems,
      Direction$1 as Direction,
      TableData$1 as TableData,
      Dimensions$1 as Dimensions,
      TableCellData$1 as TableCellData,
      VerticalAlignment$1 as VerticalAlignment,
      CellStyle$1 as CellStyle,
      BorderColors$1 as BorderColors,
      NullValue$1 as NullValue,
      ListValue$1 as ListValue,
      AudioData$1 as AudioData,
      OrderedListData$1 as OrderedListData,
      BulletedListData$1 as BulletedListData,
      BlockquoteData$1 as BlockquoteData,
      Metadata$1 as Metadata,
      DocumentStyle$1 as DocumentStyle,
      TextNodeStyle$1 as TextNodeStyle,
      RadioGroup$1 as RadioGroup,
      RadioGroupOption$1 as RadioGroupOption,
      RadioGroupCustomOption$1 as RadioGroupCustomOption,
      Dropdown$1 as Dropdown,
      DropdownOption$1 as DropdownOption,
      DropdownCustomOption$1 as DropdownCustomOption,
      DateTimeInput$1 as DateTimeInput,
      DateTimeInputDateTimeInputTypeOptionsOneOf$1 as DateTimeInputDateTimeInputTypeOptionsOneOf,
      DateFormatPart$1 as DateFormatPart,
      DateTimeInputType$1 as DateTimeInputType,
      DateTimeOptions$1 as DateTimeOptions,
      DateOptions$1 as DateOptions,
      TimeOptions$1 as TimeOptions,
      InputFieldNumberType$1 as InputFieldNumberType,
      InputFieldNumberErrorMessages$1 as InputFieldNumberErrorMessages,
      NumberComponentType$1 as NumberComponentType,
      NumberInput$1 as NumberInput,
      InputFieldBooleanType$1 as InputFieldBooleanType,
      InputFieldBooleanErrorMessages$1 as InputFieldBooleanErrorMessages,
      BooleanComponentType$1 as BooleanComponentType,
      Checkbox$1 as Checkbox,
      InputFieldArrayType$1 as InputFieldArrayType,
      ItemType$1 as ItemType,
      InputFieldIntegerType$1 as InputFieldIntegerType,
      InputFieldObjectType$1 as InputFieldObjectType,
      PropertiesTypePropertiesType$1 as PropertiesTypePropertiesType,
      ObjectTypePropertiesType$1 as ObjectTypePropertiesType,
      ObjectTypePropertiesTypePropertiesTypeOptionsOneOf$1 as ObjectTypePropertiesTypePropertiesTypeOptionsOneOf,
      InputFieldObjectErrorMessages$1 as InputFieldObjectErrorMessages,
      ArrayTypeArrayItems$1 as ArrayTypeArrayItems,
      ArrayTypeArrayItemsItemTypeOptionsOneOf$1 as ArrayTypeArrayItemsItemTypeOptionsOneOf,
      InputFieldArrayErrorMessages$1 as InputFieldArrayErrorMessages,
      ComponentType$1 as ComponentType,
      CheckboxGroup$1 as CheckboxGroup,
      MediaItem$1 as MediaItem,
      MediaItemMediaOneOf$1 as MediaItemMediaOneOf,
      Option$1 as Option,
      CustomOption$1 as CustomOption,
      WixFileComponentType$1 as WixFileComponentType,
      FileUpload$1 as FileUpload,
      UploadFileFormat$1 as UploadFileFormat,
      PaymentComponentType$1 as PaymentComponentType,
      ProductCheckboxGroup$1 as ProductCheckboxGroup,
      ProductCheckboxGroupOption$1 as ProductCheckboxGroupOption,
      InputType$1 as InputType,
      _String$1 as _String,
      _StringComponentTypeOptionsOneOf$1 as _StringComponentTypeOptionsOneOf,
      _Number$1 as _Number,
      _NumberComponentTypeOptionsOneOf$1 as _NumberComponentTypeOptionsOneOf,
      _Boolean$1 as _Boolean,
      _BooleanComponentTypeOptionsOneOf$1 as _BooleanComponentTypeOptionsOneOf,
      _Array$1 as _Array,
      _ArrayComponentTypeOptionsOneOf$1 as _ArrayComponentTypeOptionsOneOf,
      _Object$1 as _Object,
      _ObjectValidationOneOf$1 as _ObjectValidationOneOf,
      WixFile$1 as WixFile,
      WixFileComponentTypeOptionsOneOf$1 as WixFileComponentTypeOptionsOneOf,
      Payment$1 as Payment,
      PaymentComponentTypeOptionsOneOf$1 as PaymentComponentTypeOptionsOneOf,
      Header$1 as Header,
      RichText$1 as RichText,
      Target$1 as Target,
      ThankYouMessage$1 as ThankYouMessage,
      Redirect$1 as Redirect,
      FieldType$1 as FieldType,
      InputField$1 as InputField,
      InputFieldInputTypeOptionsOneOf$1 as InputFieldInputTypeOptionsOneOf,
      DisplayField$1 as DisplayField,
      DisplayFieldComponentTypeOneOf$1 as DisplayFieldComponentTypeOneOf,
      SubmitButton$1 as SubmitButton,
      SubmitButtonSubmitActionOneOf$1 as SubmitButtonSubmitActionOneOf,
      Step$1 as Step,
      FormLayout$1 as FormLayout,
      BreakPoint$1 as BreakPoint,
      ItemLayout$1 as ItemLayout,
      Margin$1 as Margin,
      Section$1 as Section,
      FormRule$1 as FormRule,
      OverrideEntityType$1 as OverrideEntityType,
      FormOverride$1 as FormOverride,
      FormProperties$1 as FormProperties,
      Kind$1 as Kind,
      PostSubmissionTriggers$1 as PostSubmissionTriggers,
      UpsertContact$1 as UpsertContact,
      FormFieldContactInfo$1 as FormFieldContactInfo,
      FormFieldContactInfoAdditionalInfoOneOf$1 as FormFieldContactInfoAdditionalInfoOneOf,
      EmailInfoTag$1 as EmailInfoTag,
      PhoneInfoTag$1 as PhoneInfoTag,
      Tag$1 as Tag,
      ContactField$1 as ContactField,
      EmailInfo$1 as EmailInfo,
      PhoneInfo$1 as PhoneInfo,
      AddressInfo$1 as AddressInfo,
      CustomFieldInfo$1 as CustomFieldInfo,
      NestedForm$1 as NestedForm,
      formsV4SpamSubmission_universal_d_ValidateSpamResponse as ValidateSpamResponse,
      formsV4SpamSubmission_universal_d_CreateSpamSubmissionRequest as CreateSpamSubmissionRequest,
      formsV4SpamSubmission_universal_d_CreateSpamSubmissionResponse as CreateSpamSubmissionResponse,
      formsV4SpamSubmission_universal_d_GetSpamSubmissionRequest as GetSpamSubmissionRequest,
      formsV4SpamSubmission_universal_d_GetSpamSubmissionResponse as GetSpamSubmissionResponse,
      formsV4SpamSubmission_universal_d_DeleteSpamSubmissionRequest as DeleteSpamSubmissionRequest,
      formsV4SpamSubmission_universal_d_DeleteSpamSubmissionResponse as DeleteSpamSubmissionResponse,
      formsV4SpamSubmission_universal_d_ReportNotSpamSubmissionRequest as ReportNotSpamSubmissionRequest,
      formsV4SpamSubmission_universal_d_ReportNotSpamSubmissionResponse as ReportNotSpamSubmissionResponse,
      formsV4SpamSubmission_universal_d_ReportSpamSubmissionRequest as ReportSpamSubmissionRequest,
      formsV4SpamSubmission_universal_d_ReportSpamSubmissionResponse as ReportSpamSubmissionResponse,
      formsV4SpamSubmission_universal_d_QuerySpamSubmissionsRequest as QuerySpamSubmissionsRequest,
      CursorQuery$1 as CursorQuery,
      CursorQueryPagingMethodOneOf$1 as CursorQueryPagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      CursorPaging$1 as CursorPaging,
      formsV4SpamSubmission_universal_d_QuerySpamSubmissionsResponse as QuerySpamSubmissionsResponse,
      CursorPagingMetadata$1 as CursorPagingMetadata,
      Cursors$1 as Cursors,
      formsV4SpamSubmission_universal_d_UpdateSpamSubmissionRequest as UpdateSpamSubmissionRequest,
      formsV4SpamSubmission_universal_d_UpdateSpamSubmissionResponse as UpdateSpamSubmissionResponse,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      Empty$1 as Empty,
      formsV4SpamSubmission_universal_d_validateSpam as validateSpam,
      formsV4SpamSubmission_universal_d_ValidateSpamOptions as ValidateSpamOptions,
      formsV4SpamSubmission_universal_d_createSpamSubmission as createSpamSubmission,
      formsV4SpamSubmission_universal_d_getSpamSubmission as getSpamSubmission,
      formsV4SpamSubmission_universal_d_deleteSpamSubmission as deleteSpamSubmission,
      formsV4SpamSubmission_universal_d_reportNotSpamSubmission as reportNotSpamSubmission,
      formsV4SpamSubmission_universal_d_reportSpamSubmission as reportSpamSubmission,
      formsV4SpamSubmission_universal_d_querySpamSubmissions as querySpamSubmissions,
      formsV4SpamSubmission_universal_d_SpamSubmissionsQueryResult as SpamSubmissionsQueryResult,
      formsV4SpamSubmission_universal_d_SpamSubmissionsQueryBuilder as SpamSubmissionsQueryBuilder,
      formsV4SpamSubmission_universal_d_updateSpamSubmission as updateSpamSubmission,
      formsV4SpamSubmission_universal_d_UpdateSpamSubmission as UpdateSpamSubmission,
      formsV4SpamSubmission_universal_d_UpdateSpamSubmissionOptions as UpdateSpamSubmissionOptions,
    };
  }
  
  /** Form submission that was created or retrieved. */
  interface FormSubmission$1 {
      /**
       * Submission ID.
       * @readonly
       */
      _id?: string | null;
      /** ID of the form which the submission belongs to. */
      formId?: string;
      /**
       * The app which the form submissions belong to. For example, the namespace for the Wix Forms app is `wix.form_app.form`. Call `Get Submission` to retrieve the namespace.
       * @readonly
       */
      namespace?: string;
      /**
       * Status of the submission.
       * - `PENDING`: A submission is created, but has not yet been recorded in the Wix Forms collection.
       * - `PAYMENT_WAITING`: A form submission requiring payment is created.
       * - `PAYMENT_CANCELED`: An order of a form submission is canceled.
       * - `CONFIRMED`: A submission is recorded in the Wix Forms collection.
       */
      status?: SubmissionStatus$1;
      /** Submission values where `key` is the form field and `value` is the data submitted for the given field. */
      submissions?: Record<string, any>;
      /**
       * Date and time the form submission was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the form submission was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Revision number, which increments by 1 each time the form submission is updated. To prevent conflicting changes, the existing revision must be used when updating a form submission.
       * @readonly
       */
      revision?: string | null;
      /**
       * ID of the visitor that submitted the form.
       * @readonly
       */
      submitter?: Submitter$1;
      /** Whether a site owner marked a submission as "seen". */
      seen?: boolean;
      /** Data extension object that holds users' and apps' fields. */
      extendedFields?: ExtendedFields$1;
      /**
       * Order details. <br>
       * <b>Note</b>: This object is only applicable when submittng a form in the Wix Payments app.
       */
      orderDetails?: OrderDetails$1;
  }
  enum SubmissionStatus$1 {
      UNDEFINED = "UNDEFINED",
      PENDING = "PENDING",
      CONFIRMED = "CONFIRMED",
      PAYMENT_WAITING = "PAYMENT_WAITING",
      PAYMENT_CANCELED = "PAYMENT_CANCELED"
  }
  interface Submitter$1 extends SubmitterSubmitterOneOf$1 {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Application ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
  }
  /** @oneof */
  interface SubmitterSubmitterOneOf$1 {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Application ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
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
  interface OrderDetails$1 {
      /**
       * ID of the order related to submission (only applicable if a form has payments).
       * @readonly
       */
      orderId?: string | null;
      /**
       * Order number.
       * @readonly
       */
      number?: string | null;
      /**
       * Currency.
       * @readonly
       */
      currency?: string | null;
      /**
       * Item subtotal.
       * @readonly
       */
      itemSubtotal?: string;
      /**
       * ID of the checkout related to submission (only applicable if a form has payments).
       * @readonly
       */
      checkoutId?: string;
  }
  interface UpdateInternalDocumentsEvent extends UpdateInternalDocumentsEventOperationOneOf {
      /** insert/update documents */
      update?: InternalDocumentUpdateOperation;
      /** delete by document ids */
      deleteByIds?: DeleteByIdsOperation;
      /** delete documents matching filter */
      deleteByFilter?: DeleteByFilterOperation;
      /** update internal documents matching filter */
      updateByFilter?: InternalDocumentUpdateByFilterOperation;
      /** update only existing documents */
      updateExisting?: InternalUpdateExistingOperation;
      /** insert/update documents with versioning */
      versionedUpdate?: VersionedDocumentUpdateOperation;
      /** delete by document ids with versioning */
      versionedDeleteByIds?: VersionedDeleteByIdsOperation;
      /** type of the documents */
      documentType?: string;
      /** language of the documents (mandatory) */
      language?: string | null;
      /** one or more search documents */
      addDocuments?: InternalDocument[];
      /** one or more ids of indexed documents to be removed. Removal will happen before addition (if both provided) */
      removeDocumentIds?: string[];
      /** id to pass to processing notification */
      correlationId?: string | null;
  }
  /** @oneof */
  interface UpdateInternalDocumentsEventOperationOneOf {
      /** insert/update documents */
      update?: InternalDocumentUpdateOperation;
      /** delete by document ids */
      deleteByIds?: DeleteByIdsOperation;
      /** delete documents matching filter */
      deleteByFilter?: DeleteByFilterOperation;
      /** update internal documents matching filter */
      updateByFilter?: InternalDocumentUpdateByFilterOperation;
      /** update only existing documents */
      updateExisting?: InternalUpdateExistingOperation;
      /** insert/update documents with versioning */
      versionedUpdate?: VersionedDocumentUpdateOperation;
      /** delete by document ids with versioning */
      versionedDeleteByIds?: VersionedDeleteByIdsOperation;
  }
  interface InternalDocument {
      /** document with mandatory fields (id) and with fields specific to the type of the document */
      document?: Record<string, any> | null;
  }
  interface InternalDocumentUpdateOperation {
      /** documents to index or update */
      documents?: InternalDocument[];
  }
  interface DeleteByIdsOperation {
      /** ids of the documents to delete */
      documentIds?: string[];
  }
  interface DeleteByFilterOperation {
      /** documents matching this filter wil be deleted. only filterable documents defined in document_type can be used for filtering */
      filter?: Record<string, any> | null;
  }
  interface InternalDocumentUpdateByFilterOperation {
      /** documents matching this filter will be updated */
      filter?: Record<string, any> | null;
      /** partial document to apply */
      document?: InternalDocument;
  }
  interface InternalUpdateExistingOperation {
      /** documents to update */
      documents?: InternalDocument[];
  }
  interface VersionedDocumentUpdateOperation {
      /** documents to create or overwrite */
      documents?: InternalDocument[];
      /** versioning mode to use instead of default */
      versioningMode?: VersioningMode;
  }
  enum VersioningMode {
      /** use default versioning mode agreed with search team */
      DEFAULT = "DEFAULT",
      /** execute only if version is greater than existing */
      GREATER_THAN = "GREATER_THAN",
      /** execute only if version is greater or equal to existing */
      GREATER_OR_EQUAL = "GREATER_OR_EQUAL"
  }
  interface VersionedDeleteByIdsOperation {
      /** ids with version of the documents to delete */
      documentIds?: VersionedDocumentId[];
  }
  interface VersionedDocumentId {
      /** document id */
      documentId?: string;
      /** document version */
      version?: string;
      /** versioning mode to use instead of default */
      versioningMode?: VersioningMode;
  }
  interface ReindexSubmissionsForSearchRequest extends ReindexSubmissionsForSearchRequestOptionsOneOf {
      /** Forms reindexing options. */
      formsOptions?: FormsOptions;
      /** Submissions reindexing options. */
      submissionsOptions?: SubmissionsOptions;
      /** Namespace. */
      namespace?: string;
      /** Reindex type. */
      type?: ReindexType;
  }
  /** @oneof */
  interface ReindexSubmissionsForSearchRequestOptionsOneOf {
      /** Forms reindexing options. */
      formsOptions?: FormsOptions;
      /** Submissions reindexing options. */
      submissionsOptions?: SubmissionsOptions;
  }
  enum ReindexType {
      SITE = "SITE",
      FORMS = "FORMS",
      SUBMISSIONS = "SUBMISSIONS"
  }
  interface FormsOptions {
      /** Form IDs. */
      formIds?: string[];
  }
  interface SubmissionsOptions {
      /** Submission IDs. */
      submissionIds?: string[];
  }
  interface ReindexSubmissionsForSearchResponse {
      /** Job id. */
      jobId?: string;
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
      identityType?: WebhookIdentityType;
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
  enum WebhookIdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface CreateCheckoutFromSubmissionRequest extends CreateCheckoutFromSubmissionRequestFormSchemaIdentifierOneOf {
      /** Submission's form. */
      form?: Form;
      /** Submission to create checkout from. */
      submission?: FormSubmission$1;
  }
  /** @oneof */
  interface CreateCheckoutFromSubmissionRequestFormSchemaIdentifierOneOf {
      /** Submission's form. */
      form?: Form;
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
      extendedFields?: ExtendedFields$1;
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
      /** Multiline address validation. */
      multilineAddressOptions?: MultilineAddressValidation;
      /** Format of predefined validation. */
      format?: ValidationFormat;
  }
  /** @oneof */
  interface PredefinedValidationFormatOptionsOneOf {
      /** Payment input field. */
      paymentOptions?: PaymentType;
      /** Multiline address validation. */
      multilineAddressOptions?: MultilineAddressValidation;
  }
  enum ValidationFormat {
      UNDEFINED = "UNDEFINED",
      /** File upload validation. */
      WIX_FILE = "WIX_FILE",
      /** Payment validation. */
      PAYMENT = "PAYMENT",
      /** Multiline address. */
      MULTILINE_ADDRESS = "MULTILINE_ADDRESS"
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
  interface MultilineAddressValidation {
      /** Allowed countries. No countries treated as all. */
      allowedCountries?: string[];
      /** Fields overrides. */
      fields?: FieldsOverrides;
  }
  interface FieldOverrides {
      /** Whether the field is required. */
      required?: boolean;
  }
  interface FieldsOverrides {
      /** Country. */
      country?: FieldOverrides;
      /** Subdivision. */
      subdivision?: FieldOverrides;
      /** City. */
      city?: FieldOverrides;
      /** Postal code. */
      postalCode?: FieldOverrides;
      /** Street name. */
      streetName?: FieldOverrides;
      /** Street number. */
      streetNumber?: FieldOverrides;
      /** Address line. */
      addressLine?: FieldOverrides;
      /** Address line 2. */
      addressLine2?: FieldOverrides;
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
  enum MultilineAddressComponentType {
      UNKNOWN = "UNKNOWN",
      MULTILINE_ADDRESS = "MULTILINE_ADDRESS"
  }
  interface MultilineAddress {
      /** Label of the field. */
      label?: string | null;
      /** Description of the field. */
      description?: RichContent;
      /** Show country flags. */
      showCountryFlags?: boolean;
      /** Default country configuration. */
      defaultCountry?: DefaultCountryConfig;
      /** Fields settings. */
      fields?: FieldsSettings;
  }
  enum DefaultCountryConfigType {
      UNKNOWN_DEFAULT_COUNTRY = "UNKNOWN_DEFAULT_COUNTRY",
      /** Country will be determined by customer's IP address. */
      BY_IP = "BY_IP",
      /** Pre-selected default country. */
      COUNTRY = "COUNTRY"
  }
  interface AddressLine {
      /** Autocomplete enabled for address line field. */
      autocompleteEnabled?: boolean;
  }
  interface AddressLine2 {
      /** Show address line 2 field. */
      show?: boolean;
  }
  interface DefaultCountryConfig extends DefaultCountryConfigOptionsOneOf {
      /** Country. */
      countryOptions?: string;
      /** Default country type. */
      type?: DefaultCountryConfigType;
  }
  /** @oneof */
  interface DefaultCountryConfigOptionsOneOf {
      /** Country. */
      countryOptions?: string;
  }
  interface FieldsSettings {
      /** Address line. */
      addressLine?: AddressLine;
      /** Address line 2. */
      addressLine2?: AddressLine2;
  }
  enum InputType {
      UNKNOWN = "UNKNOWN",
      STRING = "STRING",
      NUMBER = "NUMBER",
      BOOLEAN = "BOOLEAN",
      ARRAY = "ARRAY",
      OBJECT = "OBJECT",
      WIX_FILE = "WIX_FILE",
      PAYMENT = "PAYMENT",
      MULTILINE_ADDRESS = "MULTILINE_ADDRESS"
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
  interface InputFieldMultilineAddress extends InputFieldMultilineAddressComponentTypeOptionsOneOf {
      /** Multiline address input field. */
      multilineAddressOptions?: MultilineAddress;
      /**
       * Component type of the multiline address field.
       * @readonly
       */
      componentType?: MultilineAddressComponentType;
      /** Validation of multiline address field output value. */
      validation?: MultilineAddressValidation;
  }
  /** @oneof */
  interface InputFieldMultilineAddressComponentTypeOptionsOneOf {
      /** Multiline address input field. */
      multilineAddressOptions?: MultilineAddress;
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
      /** Input returns multiline address as value. */
      multilineAddressOptions?: InputFieldMultilineAddress;
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
      /** Input returns multiline address as value. */
      multilineAddressOptions?: InputFieldMultilineAddress;
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
  interface CreateCheckoutFromSubmissionResponse {
      /** Checkout ID (applicable for form involving payments). */
      checkoutId?: string | null;
      /** Checkout (applicable for form involving payments). */
      checkout?: Checkout;
  }
  interface Checkout {
      /** Checkout ID. */
      _id?: string;
      /**
       * The currency used when submitting the order.
       * @readonly
       */
      currency?: string;
  }
  interface IsFormSubmittableRequest {
  }
  interface IsFormSubmittableResponse {
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
      identityType?: IdentityType$1;
      /**
       * Indicates whether the contact was just created or already existed.
       *
       * If the contact was just created, returns `true`.
       * If it already existed, returns `false`.
       */
      newContact?: boolean;
  }
  enum IdentityType$1 {
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
      /** Identifies the namespace that the submission's form belongs to. */
      namespace?: string;
      /** Marketing subscription details */
      marketingSubscriptionDetails?: MarketingSubscriptionDetails;
  }
  interface MarketingSubscriptionDetails {
      /** Form id which was submitted */
      formId?: string;
      /** Mapped contact emails. */
      emails?: string[];
      /**
       * Date and time the form submission was created.
       * @readonly
       */
      submittedDate?: Date;
      /**
       * Subscription consent opt in level, either single or double confirmation.
       * Default: SINGLE_CONFIRMATION
       */
      optInLevel?: MarketingSubscriptionDetailsOptInLevel;
  }
  enum MarketingSubscriptionDetailsOptInLevel {
      SINGLE_CONFIRMATION = "SINGLE_CONFIRMATION",
      DOUBLE_CONFIRMATION = "DOUBLE_CONFIRMATION"
  }
  interface SubmissionContactMappingSkipped {
      /** Form Id. */
      formId?: string;
      /** Identifies the namespace that the submission's form belongs to. */
      namespace?: string;
  }
  interface CreateSubmissionRequest {
      /** Submission to create. */
      submission: FormSubmission$1;
      /** Captcha token. */
      captchaToken?: string | null;
  }
  interface CreateSubmissionResponse {
      /** The created submission. */
      submission?: FormSubmission$1;
  }
  interface CreateSubmissionBySubmitterRequest {
      /** Submission to create. */
      submission: FormSubmission$1;
      /** A flag indicating whether this operation is a repeated creation, such as restoring a previously manually reported as spam entity. */
      repeatedCreation?: boolean;
      /** Validation will be mode is more forgiving, for example "required" won't be validated. */
      lenientValidation?: boolean;
  }
  interface CreateSubmissionBySubmitterResponse {
      /** The created submission. */
      submission?: FormSubmission$1;
  }
  interface BulkCreateSubmissionBySubmitterRequest {
      /** Form id. Restricts submissions creation for a single form. */
      formId: string;
      /**
       * Submissions to create.
       * Deprecated
       */
      submissions?: FormSubmission$1[];
      /** When set, items will be returned on successful create. */
      returnEntity?: boolean;
      /** Submissions data to create. */
      submissionsV2?: BulkCreateSubmissionBySubmitterData[];
      /** Validation will be mode is more forgiving, for example "required" won't be validated. */
      lenientValidation?: boolean;
  }
  interface BulkCreateSubmissionBySubmitterData {
      /** Submissions to create. */
      submission?: FormSubmission$1;
      /** A flag indicating whether this operation is a repeated creation, such as restoring a previously manually reported as spam entity. */
      repeatedCreation?: boolean;
  }
  interface BulkCreateSubmissionBySubmitterResponse {
      /** Created submissions with metadata */
      results?: BulkSubmissionResult[];
      /** Metadata of request */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkSubmissionResult {
      /** Created submission metadata */
      itemMetadata?: ItemMetadata;
      /** The created submission. */
      item?: FormSubmission$1;
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
  interface GetSubmissionRequest {
      /** ID of the submission to retrieve. */
      submissionId: string;
  }
  interface GetSubmissionResponse {
      /** The retrieved submission. */
      submission?: FormSubmission$1;
  }
  interface GetSubmissionByCheckoutIdRequest {
      /** Checkout ID of the submission to retrieve. */
      checkoutId: string;
  }
  interface GetSubmissionByCheckoutIdResponse {
      /** The retrieved submission. */
      submission?: FormSubmission$1;
  }
  interface UpdateSubmissionRequest {
      /** Submission to update. */
      submission: FormSubmission$1;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateSubmissionResponse {
      /** The updated submission. */
      submission?: FormSubmission$1;
  }
  interface ConfirmSubmissionRequest {
      /** Submission ID to confirm. */
      submissionId: string;
  }
  interface ConfirmSubmissionResponse {
      /** The confirmed submission. */
      submission?: FormSubmission$1;
  }
  interface FormSubmissionStatusUpdatedEvent {
      /** Updated submission. */
      submission?: FormSubmission$1;
      /** Previous status of the submission. */
      previousStatus?: SubmissionStatus$1;
  }
  interface DeleteSubmissionRequest {
      /** ID of the submission to delete. */
      submissionId: string;
      /**
       * Delete the submission, bypassing the trash bin. This means that the submission is permanently deleted and cannot be restored.
       *
       *
       * Default: `false`
       */
      permanent?: boolean;
      /** Preserve files. */
      preserveFiles?: boolean;
  }
  interface DeleteSubmissionResponse {
  }
  interface BulkDeleteSubmissionRequest {
      /** Form ID. */
      formId: string;
      /** Submission ids. */
      submissionIds?: string[];
      /**
       * Delete submission bypassing trash-bin
       * Default: false
       */
      permanent?: boolean;
      /** Preserve files. */
      preserveFiles?: boolean;
  }
  interface BulkDeleteSubmissionResponse {
      /** Results of bulk submission delete */
      results?: BulkDeleteSubmissionResult[];
      /** Metadata of request */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDeleteSubmissionResult {
      /** Deleted item metadata */
      itemMetadata?: ItemMetadata;
  }
  interface RestoreSubmissionFromTrashBinRequest {
      /** ID of the submission to restore. */
      submissionId: string;
  }
  interface RestoreSubmissionFromTrashBinResponse {
      /** The restored submission. */
      submission?: FormSubmission$1;
  }
  interface RemoveSubmissionFromTrashBinRequest {
      /** ID of the submission to restore. */
      submissionId: string;
  }
  interface RemoveSubmissionFromTrashBinResponse {
  }
  interface RemovedSubmissionFromTrash {
      /** Removed submission. */
      submission?: FormSubmission$1;
  }
  interface BulkRemoveSubmissionFromTrashBinRequest {
      /** Form ID. */
      formId: string;
      /** Submission ids. */
      submissionIds?: string[];
  }
  interface BulkRemoveSubmissionFromTrashBinResponse {
      /** Results of bulk submission removal from trash */
      results?: BulkRemoveSubmissionFromTrashBinResult[];
      /** Metadata of request */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkRemoveSubmissionFromTrashBinResult {
      /** Deleted item metadata */
      itemMetadata?: ItemMetadata;
  }
  interface ListDeletedSubmissionsRequest {
      /** Form ID. */
      formId: string;
      /** Submission ids. */
      submissionIds?: string[];
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not filter or `order`. */
      paging?: CursorPaging;
      /**
       * List of statuses of submissions which should be returned
       * Default: CONFIRMED
       */
      statuses?: SubmissionStatus$1[];
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
  interface ListDeletedSubmissionsResponse {
      /** The retrieved Submissions. */
      submissions?: FormSubmission$1[];
      /** Paging metadata. */
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
  interface GetDeletedSubmissionRequest {
      /** Submission id. */
      submissionId: string;
  }
  interface GetDeletedSubmissionResponse {
      /** The retrieved Submission. */
      submission?: FormSubmission$1;
  }
  interface QuerySubmissionRequest {
      /** Query options. */
      query: CursorQuery;
      /**
       * Renamed to only_your_own;
       * @internal
       */
      onlyOwn?: boolean;
      /** Whether to return only your own submissions. If `false`, returns all submissions based on query filters. */
      onlyYourOwn?: boolean;
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
  interface QuerySubmissionResponse {
      /** The retrieved submissions. */
      submissions?: FormSubmission$1[];
      /** Paging metadata. */
      metadata?: CursorPagingMetadata;
  }
  interface SearchSubmissionsByNamespaceRequest {
      /** Query options. */
      search: CursorSearch;
  }
  interface CursorSearch extends CursorSearchPagingMethodOneOf {
      /**
       * Cursor pointing to page of results.
       * When requesting 'cursor_paging.cursor', no `filter`, `sort` or `search` can be provided.
       */
      cursorPaging?: CursorPaging;
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter?: Record<string, any> | null;
      /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
      sort?: Sorting[];
      /** Free text to match in searchable fields */
      search?: SearchDetails;
  }
  /** @oneof */
  interface CursorSearchPagingMethodOneOf {
      /**
       * Cursor pointing to page of results.
       * When requesting 'cursor_paging.cursor', no `filter`, `sort` or `search` can be provided.
       */
      cursorPaging?: CursorPaging;
  }
  interface SearchDetails {
      /** Defines how separate search terms in `expression` are combined */
      mode?: Mode;
      /** Search term or expression */
      expression?: string | null;
      /** Flag if should use auto fuzzy search (allowing typos by a managed proximity algorithm) */
      fuzzy?: boolean;
  }
  enum Mode {
      /** Any of the search terms must be present */
      OR = "OR",
      /** All search terms must be present */
      AND = "AND"
  }
  interface SearchSubmissionsByNamespaceResponse {
      /** The retrieved Submissions. */
      submissions?: FormSubmission$1[];
      /** Paging metadata. */
      metadata?: CursorPagingMetadata;
  }
  interface SearchSubmissionsByNamespaceForExportRequest {
      /** Query options. */
      query: CursorSearch;
  }
  interface SearchSubmissionsByNamespaceForExportResponse {
      /** The retrieved Submissions. */
      submissions?: FormSubmission$1[];
      /** Paging metadata. */
      metadata?: CursorPagingMetadata;
  }
  interface QuerySubmissionsByNamespaceRequest {
      /** Query options. */
      query: CursorQuery;
      /**
       * Renamed to only_your_own;
       * @internal
       */
      onlyOwn?: boolean;
      /** Whether to return only your own submissions. If `false`, returns all submissions based on query filters. */
      onlyYourOwn?: boolean;
  }
  interface QuerySubmissionsByNamespaceResponse {
      /** The retrieved Submissions. */
      submissions?: FormSubmission$1[];
      /** Paging metadata. */
      metadata?: CursorPagingMetadata;
  }
  interface QuerySubmissionsByNamespaceForExportRequest {
      /** Query options. */
      query: CursorQuery;
  }
  interface QuerySubmissionsByNamespaceForExportResponse {
      /** The retrieved Submissions. */
      submissions?: FormSubmission$1[];
      /** Paging metadata. */
      metadata?: CursorPagingMetadata;
  }
  interface CountSubmissionsByFilterRequest {
      /** A filter object. Must filter by namespace. */
      filter: Record<string, any> | null;
      /** Free text to match in searchable fields. */
      search?: SearchDetails;
  }
  interface CountSubmissionsByFilterResponse {
      /** Forms submission count. */
      formsSubmissionsCount?: FormSubmissionsCount[];
  }
  interface FormSubmissionsCount {
      /** Form ID. */
      formId?: string;
      /** Total number of submissions. */
      totalCount?: number;
      /** Number of submissions that the site owner hasn't seen yet. */
      unseenCount?: number;
  }
  interface CountSubmissionsRequest {
      /** Form IDs which submissions should be counted. */
      formIds: string[];
      /** The app which the form submissions belong to. For example, the namespace for the Wix Forms app is `wix.form_app.form`. Call `getSubmission()` to retrieve the namespace. */
      namespace: string;
      /**
       * Status of the submission.
       * - `PENDING`: A submission is created, but has not yet been recorded in the Wix Forms collection.
       * - `PAYMENT_WAITING`: A form submission requiring payment is created.
       * - `PAYMENT_CANCELED`: An order of a form submission is canceled.
       * - `CONFIRMED`: A submission is recorded in the Wix Forms collection.
       */
      statuses?: SubmissionStatus$1[];
  }
  interface CountSubmissionsResponse {
      /** Forms submission count. */
      formsSubmissionsCount?: FormSubmissionsCount[];
  }
  interface CountDeletedSubmissionsRequest {
      /** Form IDs. */
      formIds: string[];
      /** Identifies the app which the form submissions belong to. For example, the namespace for the Wix Forms App is `"wix.form_app.form"`. The namespace of a submission can be retrieved using the Get Submission endpoint. */
      namespace: string;
      /**
       * List of statuses of submissions which should be taken into count
       * Default: CONFIRMED, PAYMENT_WAITING, PAYMENT_CANCELED
       */
      statuses?: SubmissionStatus$1[];
  }
  interface CountDeletedSubmissionsResponse {
      /** Forms submission count. */
      formsDeletedSubmissionsCount?: FormDeletedSubmissionsCount[];
  }
  interface FormDeletedSubmissionsCount {
      /** Form ID. */
      formId?: string;
      /** Total number of submissions. */
      totalCount?: number;
  }
  interface GetMediaUploadURLRequest {
      /** Form ID. */
      formId: string;
      /** Name of file to upload. */
      filename: string;
      /**
       * [Mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#) of file to upload.
       *
       * For example, `'image/png'`
       */
      mimeType: string;
  }
  interface GetMediaUploadURLResponse {
      /** Url to upload file. */
      uploadUrl?: string;
      /**
       * Flag identifying is url generated by media platform, rather than media manager
       * @internal
       */
      generatedByMediaPlatform?: boolean;
  }
  interface BulkMarkSubmissionsAsSeenRequest {
      /** Submission IDs to mark as seen. */
      ids: string[];
      /** ID of the form which the submissions belong to. */
      formId: string;
  }
  interface BulkMarkSubmissionsAsSeenResponse {
  }
  /**
   * Create checkout from submission.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.submission.submissions
   * @adminMethod
   */
  function createCheckoutFromSubmission(options?: CreateCheckoutFromSubmissionOptions): Promise<CreateCheckoutFromSubmissionResponse>;
  interface CreateCheckoutFromSubmissionOptions extends CreateCheckoutFromSubmissionRequestFormSchemaIdentifierOneOf {
      /** Submission to create checkout from. */
      submission?: FormSubmission$1;
      /** Submission's form. */
      form?: Form;
  }
  /**
   * Is payment form submittable (ecom platform is installed and site is published).
   * @internal
   * @documentationMaturity preview
   */
  function isFormSubmittable(): Promise<void>;
  /**
   * Upserts contact from submission.
   * @param submissionId - Submission from which contact needs to be upserted.
   * @internal
   * @documentationMaturity preview
   * @requiredField submissionId
   * @adminMethod
   */
  function upsertContactFromSubmission(submissionId: string, options?: UpsertContactFromSubmissionOptions): Promise<UpsertContactFromSubmissionResponse>;
  interface UpsertContactFromSubmissionOptions {
      /** Optional contact id to which submission should be mapped. */
      contactId?: string | null;
      /** Indicates contact has verified primary email. */
      emailVerified?: boolean;
  }
  /**
   * Creates a submission.
   * > **Note**:
   * > The Submissions API is only available in Wix Studio and Editor X.
   *
   *
   * The `createSubmission()` function is an alternative way to the [`WixFormsV2`](https://www.wix.com/velo/reference/$w/wixformsv2/submit) element for submitting a form. In this case, clicking the submit button is unnecessary, the submission is automatically created when calling this function.
   * @param submission - Submission to create.
   * @public
   * @requiredField submission
   * @requiredField submission.formId
   * @param options - Optional fields.
   */
  function createSubmission(submission: FormSubmission$1, options?: CreateSubmissionOptions): Promise<CreateSubmissionResponse>;
  interface CreateSubmissionOptions {
      /** Captcha token. */
      captchaToken?: string | null;
  }
  /**
   * Creates a new submission with specified submitter for a given form.
   * Internal, migration only.
   * @param submission - Submission to create.
   * @internal
   * @documentationMaturity preview
   * @requiredField submission
   * @requiredField submission.formId
   * @requiredField submission.submitter
   * @adminMethod
   * @returns The created submission.
   */
  function createSubmissionBySubmitter(submission: FormSubmission$1, options?: CreateSubmissionBySubmitterOptions): Promise<FormSubmission$1>;
  interface CreateSubmissionBySubmitterOptions {
      /** A flag indicating whether this operation is a repeated creation, such as restoring a previously manually reported as spam entity. */
      repeatedCreation?: boolean;
      /** Validation will be mode is more forgiving, for example "required" won't be validated. */
      lenientValidation?: boolean;
  }
  /**
   * Creates multiple submissions with specified submitters.
   * Internal, migration only.
   * @param formId - Form id. Restricts submissions creation for a single form.
   * @internal
   * @documentationMaturity preview
   * @requiredField formId
   * @requiredField options.submissions.submissions
   * @requiredField options.submissions.submitter
   * @adminMethod
   */
  function bulkCreateSubmissionBySubmitter(formId: string, options?: BulkCreateSubmissionBySubmitterOptions): Promise<BulkCreateSubmissionBySubmitterResponse>;
  interface BulkCreateSubmissionBySubmitterOptions {
      /**
       * Submissions to create.
       * Deprecated
       */
      submissions?: FormSubmission$1[];
      /** When set, items will be returned on successful create. */
      returnEntity?: boolean;
      /** Submissions data to create. */
      submissionsV2?: BulkCreateSubmissionBySubmitterData[];
      /** Validation will be mode is more forgiving, for example "required" won't be validated. */
      lenientValidation?: boolean;
  }
  /**
   * Retrieves a submission by ID.
   * > **Note:**
   * > The Submissions API is only available in the Wix Studio editor and Editor X.
   * @param submissionId - ID of the submission to retrieve.
   * @public
   * @requiredField submissionId
   * @adminMethod
   */
  function getSubmission(submissionId: string): Promise<GetSubmissionResponse>;
  /**
   * Retrieves a submission by checkout ID.
   * @param checkoutId - Checkout ID of the submission to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField checkoutId
   * @adminMethod
   * @returns The retrieved submission.
   */
  function getSubmissionByCheckoutId(checkoutId: string): Promise<FormSubmission$1>;
  /**
   * Updates a submission.
   * > **Note**:
   * > The Submissions API is only available in Wix Studio and Editor X.
   *
   *
   * Each time the submission is updated, `revision` increments by 1. The existing `revision` must be included when updating the submission. This ensures you're working with the latest submission information, and prevents unintended overwrites.
   * @param _id - Submission ID.
   * @public
   * @requiredField _id
   * @requiredField submission
   * @requiredField submission.formId
   * @requiredField submission.revision
   * @param submission - Submission to update.
   * @adminMethod
   * @returns The updated submission.
   */
  function updateSubmission(_id: string | null, submission: UpdateSubmission, options?: UpdateSubmissionOptions): Promise<FormSubmission$1>;
  interface UpdateSubmission {
      /**
       * Submission ID.
       * @readonly
       */
      _id?: string | null;
      /** ID of the form which the submission belongs to. */
      formId?: string;
      /**
       * The app which the form submissions belong to. For example, the namespace for the Wix Forms app is `wix.form_app.form`. Call `Get Submission` to retrieve the namespace.
       * @readonly
       */
      namespace?: string;
      /**
       * Status of the submission.
       * - `PENDING`: A submission is created, but has not yet been recorded in the Wix Forms collection.
       * - `PAYMENT_WAITING`: A form submission requiring payment is created.
       * - `PAYMENT_CANCELED`: An order of a form submission is canceled.
       * - `CONFIRMED`: A submission is recorded in the Wix Forms collection.
       */
      status?: SubmissionStatus$1;
      /** Submission values where `key` is the form field and `value` is the data submitted for the given field. */
      submissions?: Record<string, any>;
      /**
       * Date and time the form submission was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the form submission was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Revision number, which increments by 1 each time the form submission is updated. To prevent conflicting changes, the existing revision must be used when updating a form submission.
       * @readonly
       */
      revision?: string | null;
      /**
       * ID of the visitor that submitted the form.
       * @readonly
       */
      submitter?: Submitter$1;
      /** Whether a site owner marked a submission as "seen". */
      seen?: boolean;
      /** Data extension object that holds users' and apps' fields. */
      extendedFields?: ExtendedFields$1;
      /**
       * Order details. <br>
       * <b>Note</b>: This object is only applicable when submittng a form in the Wix Payments app.
       */
      orderDetails?: OrderDetails$1;
  }
  interface UpdateSubmissionOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Confirms a submission.
   * > **Note**:
   * > The Submissions API is only available in Wix Studio and Editor X.
   *
   *
   * You can only confirm a submission that has a `PENDING` status.
   * When using forms from the [Wix Pricing Plans](https://www.wix.com/app-market/paid-plans?referral=collection&appIndex=42&referralTag=made-by-wix&referralSectionName=made-by-wix) app, the default submission status is `PENDING`.
   * When using forms from the [Wix Forms]() app, the default form submission status is `CONFIRMED`. You can change the default status for individual submissions using the `updateSubmission()` method.
   * @param submissionId - Submission ID to confirm.
   * @public
   * @requiredField submissionId
   * @adminMethod
   */
  function confirmSubmission(submissionId: string): Promise<ConfirmSubmissionResponse>;
  /**
   * Deletes a submission.
   * > **Note:**
   * > The Submissions API is only available in Wix Studio and Editor X.
   *
   *
   * This function moves the form submission into the trash bin. To delete the submission permanently, change the default `permanent` field value to `true.`
   * @param submissionId - ID of the submission to delete.
   * @public
   * @requiredField submissionId
   * @param options - Optional fields.
   * @adminMethod
   */
  function deleteSubmission(submissionId: string, options?: DeleteSubmissionOptions): Promise<void>;
  interface DeleteSubmissionOptions {
      /**
       * Delete the submission, bypassing the trash bin. This means that the submission is permanently delete and cannot be restored.
       *
       *
       * Default: `false`
       */
      permanent?: boolean;
      /** Preserve files. */
      preserveFiles?: boolean;
  }
  /**
   * Deletes submissions by IDS for specific form.
   * @param formId - Form ID.
   * @public
   * @documentationMaturity preview
   * @requiredField formId
   * @adminMethod
   */
  function bulkDeleteSubmission(formId: string, options?: BulkDeleteSubmissionOptions): Promise<BulkDeleteSubmissionResponse>;
  interface BulkDeleteSubmissionOptions {
      /** Submission ids. */
      submissionIds?: string[];
      /**
       * Delete submission bypassing trash-bin
       * Default: false
       */
      permanent?: boolean;
      /** Preserve files. */
      preserveFiles?: boolean;
  }
  /**
   * Restores deleted submission
   * @param submissionId - ID of the submission to restore.
   * @public
   * @documentationMaturity preview
   * @requiredField submissionId
   * @adminMethod
   */
  function restoreSubmissionFromTrashBin(submissionId: string): Promise<RestoreSubmissionFromTrashBinResponse>;
  /**
   * Remove deleted submission
   * @param submissionId - ID of the submission to restore.
   * @public
   * @documentationMaturity preview
   * @requiredField submissionId
   * @adminMethod
   */
  function removeSubmissionFromTrashBin(submissionId: string): Promise<void>;
  /**
   * Remove multiple deleted submissions
   * @param formId - Form ID.
   * @public
   * @documentationMaturity preview
   * @requiredField formId
   * @adminMethod
   */
  function bulkRemoveSubmissionFromTrashBin(formId: string, options?: BulkRemoveSubmissionFromTrashBinOptions): Promise<BulkRemoveSubmissionFromTrashBinResponse>;
  interface BulkRemoveSubmissionFromTrashBinOptions {
      /** Submission ids. */
      submissionIds?: string[];
  }
  /**
   * List deleted submissions
   * @param formId - Form ID.
   * @public
   * @documentationMaturity preview
   * @requiredField formId
   * @adminMethod
   */
  function listDeletedSubmissions(formId: string, options?: ListDeletedSubmissionsOptions): Promise<ListDeletedSubmissionsResponse>;
  interface ListDeletedSubmissionsOptions {
      /** Submission ids. */
      submissionIds?: string[];
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not filter or `order`. */
      paging?: CursorPaging;
      /**
       * List of statuses of submissions which should be returned
       * Default: CONFIRMED
       */
      statuses?: SubmissionStatus$1[];
  }
  /**
   * Get deleted submission
   * @param submissionId - Submission id.
   * @public
   * @documentationMaturity preview
   * @requiredField submissionId
   * @adminMethod
   */
  function getDeletedSubmission(submissionId: string): Promise<GetDeletedSubmissionResponse>;
  /**
   * Deprecated on '2023-08-08'. Use QuerySubmissionsByNamespace.
   * @param query - Query options.
   * @internal
   * @documentationMaturity preview
   * @requiredField query
   * @adminMethod
   */
  function querySubmission(query: CursorQuery, options?: QuerySubmissionOptions): Promise<QuerySubmissionResponse>;
  interface QuerySubmissionOptions {
      /**
       * Renamed to only_your_own;
       * @internal
       */
      onlyOwn?: boolean;
      /** Whether to return only your own submissions. If `false`, returns all submissions based on query filters. */
      onlyYourOwn?: boolean;
  }
  /**
   * > **Notes:** <br>
   * > - The Form Submission API is only available in Wix Studio and Editor X.
   * > - The Form Submission API only works with the Wix Forms app. Call [GetAppInstance](https://dev.wix.com/docs/rest/api-reference/app-management/apps/app-instance/get-app-instance) to confirm that the app named `wix_forms` is installed on the site.
   * <br>
   *
   * Returns a list of up to 100 submissions, given the provided paging, filtering, and sorting.
   *
   * You can only query submissions from a specified namespace. Use the query filter on the `namespace` field, otherwise you will receive an error.
   *
   * For field support for filters and sorting, see [Form Submissions: Supported Filters and Sorting](https://dev.wix.com/docs/rest/api-reference/wix-forms/form-submissions/sort-and-filter).option
   *
   * To learn about working with _Query_ endpoints, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language), [Sorting and Paging](https://dev.wix.com/api/rest/getting-started/pagination), and [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   * @param search - Query options.
   * @internal
   * @documentationMaturity preview
   * @requiredField search
   * @adminMethod
   */
  function searchSubmissionsByNamespace(search: CursorSearch): Promise<SearchSubmissionsByNamespaceResponse>;
  /**
   * > **Notes:** <br>
   * > - The Form Submission API is only available in Wix Studio and Editor X.
   * > - The Form Submission API only works with the Wix Forms app. Call [GetAppInstance](https://dev.wix.com/docs/rest/api-reference/app-management/apps/app-instance/get-app-instance) to confirm that the app named `wix_forms` is installed on the site.
   * <br>
   *
   * Returns a list of up to 100 submissions, given the provided paging, filtering, and sorting.
   *
   * You can only query submissions from a specified namespace. Use the query filter on the `namespace` field, otherwise you will receive an error.
   *
   * For field support for filters and sorting, see [Form Submissions: Supported Filters and Sorting](https://dev.wix.com/docs/rest/api-reference/wix-forms/form-submissions/sort-and-filter).option
   *
   * To learn about working with _Query_ endpoints, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language), [Sorting and Paging](https://dev.wix.com/api/rest/getting-started/pagination), and [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   * @param query - Query options.
   * @internal
   * @documentationMaturity preview
   * @requiredField query
   * @adminMethod
   */
  function searchSubmissionsByNamespaceForExport(query: CursorSearch): Promise<SearchSubmissionsByNamespaceForExportResponse>;
  /**
   * Creates a query to retrieve a list of submissions.
   * > **Note:**
   * > The Submissions API is only available in Wix Studio and Editor X.
   *
   *
   * The `querySubmissionsByNamespace()` method builds a query to retrieve a list of submissions from the specified namespace and returns a [`SubmissionsQueryBuilder`](#submissionsquerybuilder) object.
   * >**Note:** You can only query submissions from a specified namespace. Use the query filter on the `namespace` field, otherwise you will receive an error.
   *
   * The returned object contains the query definition, which is typically used to run the query using the [`find()`](#submissionsquerybuilder/find) method.
   *
   * You can refine the query by chaining `SubmissionsQueryBuilder` methods onto the query. `SubmissionsQueryBuilder` methods enable you to sort, filter, and control the results that `querySubmissionsByNamespace()` returns.
   *
   * The following `SubmissionsQueryBuilder` methods are supported for `querySubmissionsByNamespace()`. For a full description of the Submissions object, see the object returned for the [`items`](#submissionsqueryresult/items) property in [`SubmissionsQueryResult`](#submissionsqueryresult).
   * @public
   * @param options - Query options.
   * @adminMethod
   */
  function querySubmissionsByNamespace(options?: QuerySubmissionsByNamespaceOptions): SubmissionsQueryBuilder;
  interface QuerySubmissionsByNamespaceOptions {
      /**
       * Renamed to only_your_own;
       * @internal
       */
      onlyOwn?: boolean | undefined;
      /** Whether to return only your own submissions. If `false`, returns all submissions based on query filters. */
      onlyYourOwn?: boolean | undefined;
  }
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface SubmissionsQueryResult extends QueryCursorResult {
      items: FormSubmission$1[];
      query: SubmissionsQueryBuilder;
      next: () => Promise<SubmissionsQueryResult>;
      prev: () => Promise<SubmissionsQueryResult>;
  }
  interface SubmissionsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: '_id' | 'formId' | 'namespace' | 'status' | '_createdDate' | '_updatedDate' | 'seen', value: any) => SubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: '_id' | 'formId' | 'status' | '_createdDate' | '_updatedDate' | 'seen', value: any) => SubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => SubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => SubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => SubmissionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => SubmissionsQueryBuilder;
      in: (propertyName: '_id' | 'formId' | 'status' | '_createdDate' | '_updatedDate', value: any) => SubmissionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'_id' | 'formId' | 'status' | '_createdDate' | '_updatedDate' | 'seen'>) => SubmissionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'_id' | 'formId' | 'status' | '_createdDate' | '_updatedDate' | 'seen'>) => SubmissionsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => SubmissionsQueryBuilder;
      /** @param cursor - A pointer to specific record */
      skipTo: (cursor: string) => SubmissionsQueryBuilder;
      find: () => Promise<SubmissionsQueryResult>;
  }
  /**
   * Returns a list of up to 100 submissions, given the provided paging, filtering, and sorting.
   *
   * You can only query submissions for export from a specified namespace. Use the query filter on the `namespace` field, otherwise you will receive an error.
   *
   * For field support for filters and sorting, see [Form Submissions: Supported Filters and Sorting](https://dev.wix.com/docs/rest/api-reference/wix-forms/form-submissions/sort-and-filter).option
   *
   * To learn about working with _Query_ endpoints, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language), [Sorting and Paging](https://dev.wix.com/api/rest/getting-started/pagination), and [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   * @param query - Query options.
   * @internal
   * @documentationMaturity preview
   * @requiredField query
   * @adminMethod
   */
  function querySubmissionsByNamespaceForExport(query: CursorQuery): Promise<QuerySubmissionsByNamespaceForExportResponse>;
  /**
   * > **Notes:** <br>
   * > - The Form Submission API is only available in Wix Studio and Editor X.
   * > - The Form Submission API only works with the Wix Forms app. Call [GetAppInstance](https://dev.wix.com/docs/rest/api-reference/app-management/apps/app-instance/get-app-instance) to confirm that the app named `wix_forms` is installed on the site.
   * <br>
   * Counts the number of submissions belonging to forms that were filtered and contain a provided expression.
   * @param filter - A filter object. Must filter by namespace.
   * @internal
   * @documentationMaturity preview
   * @requiredField filter
   * @adminMethod
   */
  function countSubmissionsByFilter(filter: Record<string, any> | null, options?: CountSubmissionsByFilterOptions): Promise<CountSubmissionsByFilterResponse>;
  interface CountSubmissionsByFilterOptions {
      /** Free text to match in searchable fields. */
      search?: SearchDetails;
  }
  /**
   * Counts the number of submissions belonging to the specified forms.
   * > **Note**:
   * > The Submissions API is only available in Wix Studio and Editor X.
   *
   *
   * The `countSubmissions()` function is useful for analytics and tracking purposes. For example, if you have a contact form on your website, you can use this function to track how many submissions it receives daily, weekly, or monthly.
   * @public
   * @requiredField formIds
   * @requiredField namespace
   * @param namespace - The app which the form submissions belong to. For example, the namespace for the Wix Forms app is `wix.form_app.form`. Call `getSubmission()` to retrieve the namespace.
   * @param formIds - Form IDs which submissions should be counted.
   * @adminMethod
   */
  function countSubmissions(formIds: string[], namespace: string, options?: CountSubmissionsOptions): Promise<CountSubmissionsResponse>;
  interface CountSubmissionsOptions {
      /**
       * Status of the submission.
       * - `PENDING`: A submission is created, but has not yet been recorded in the Wix Forms collection.
       * - `PAYMENT_WAITING`: A form submission requiring payment is created.
       * - `PAYMENT_CANCELED`: An order of a form submission is canceled.
       * - `CONFIRMED`: A submission is recorded in the Wix Forms collection.
       */
      statuses?: SubmissionStatus$1[];
  }
  /**
   * > **Note:**
   * > The Submissions API is only available in the Wix Studio editor.
   *
   * Counts the number of submissions belonging to the specified forms.
   * @param formIds - Form IDs.
   * @param namespace - Identifies the app which the form submissions belong to. For example, the namespace for the Wix Forms App is `"wix.form_app.form"`. The namespace of a submission can be retrieved using the Get Submission endpoint.
   * @public
   * @documentationMaturity preview
   * @requiredField formIds
   * @requiredField namespace
   * @adminMethod
   */
  function countDeletedSubmissions(formIds: string[], namespace: string, options?: CountDeletedSubmissionsOptions): Promise<CountDeletedSubmissionsResponse>;
  interface CountDeletedSubmissionsOptions {
      /**
       * List of statuses of submissions which should be taken into count
       * Default: CONFIRMED, PAYMENT_WAITING, PAYMENT_CANCELED
       */
      statuses?: SubmissionStatus$1[];
  }
  /**
   * Retrieves a URL generated by the [Media Manager](https://www.wix.com/velo/reference/wix-media-v2/files/generatefileuploadurl) to use when creating a submission that includes a field for uploading files.
   * > **Notes:**
   * > - The Submissions API is only available in Wix Studio and Editor X.
   * > - You need at least a [Standard Premium](https://support.wix.com/en/article/choosing-a-premium-plan) plan for your site to upload files.
   *
   *
   * To learn how external clients can use the generated upload URL to upload a file to the Media Manager, see [Upload API](https://www.wix.com/velo/reference/wix-media-v2/files/upload-api).
   * @param formId - Form ID.
   * @param filename - Name of file to upload.
   * @param mimeType - [Mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#) of file to upload.
   *
   * For example, `'image/png'`
   * @public
   * @requiredField filename
   * @requiredField formId
   * @requiredField mimeType
   */
  function getMediaUploadUrl(formId: string, filename: string, mimeType: string): Promise<GetMediaUploadURLResponse>;
  /**
   * Marks form submissions as "seen".
   * > **Note**:
   * > The Submissions API is only available in Wix Studio and Editor X.
   *
   *
   * This function marks the submissions as if they were seen by the site owner. Only site collaborators with the **[Manage Submission](https://support.wix.com/en/article/roles-permissions-accessing-roles-permissions)** permissions can mark submissions.
   * @public
   * @requiredField formId
   * @requiredField ids
   * @param ids - IDs of submissions to mark as seen.
   * @param formId - ID of the form which the submissions belong to.
   * @adminMethod
   */
  function bulkMarkSubmissionsAsSeen(ids: string[], formId: string): Promise<void>;
  
  type formsV4Submission_universal_d_UpdateInternalDocumentsEvent = UpdateInternalDocumentsEvent;
  type formsV4Submission_universal_d_UpdateInternalDocumentsEventOperationOneOf = UpdateInternalDocumentsEventOperationOneOf;
  type formsV4Submission_universal_d_InternalDocument = InternalDocument;
  type formsV4Submission_universal_d_InternalDocumentUpdateOperation = InternalDocumentUpdateOperation;
  type formsV4Submission_universal_d_DeleteByIdsOperation = DeleteByIdsOperation;
  type formsV4Submission_universal_d_DeleteByFilterOperation = DeleteByFilterOperation;
  type formsV4Submission_universal_d_InternalDocumentUpdateByFilterOperation = InternalDocumentUpdateByFilterOperation;
  type formsV4Submission_universal_d_InternalUpdateExistingOperation = InternalUpdateExistingOperation;
  type formsV4Submission_universal_d_VersionedDocumentUpdateOperation = VersionedDocumentUpdateOperation;
  type formsV4Submission_universal_d_VersioningMode = VersioningMode;
  const formsV4Submission_universal_d_VersioningMode: typeof VersioningMode;
  type formsV4Submission_universal_d_VersionedDeleteByIdsOperation = VersionedDeleteByIdsOperation;
  type formsV4Submission_universal_d_VersionedDocumentId = VersionedDocumentId;
  type formsV4Submission_universal_d_ReindexSubmissionsForSearchRequest = ReindexSubmissionsForSearchRequest;
  type formsV4Submission_universal_d_ReindexSubmissionsForSearchRequestOptionsOneOf = ReindexSubmissionsForSearchRequestOptionsOneOf;
  type formsV4Submission_universal_d_ReindexType = ReindexType;
  const formsV4Submission_universal_d_ReindexType: typeof ReindexType;
  type formsV4Submission_universal_d_FormsOptions = FormsOptions;
  type formsV4Submission_universal_d_SubmissionsOptions = SubmissionsOptions;
  type formsV4Submission_universal_d_ReindexSubmissionsForSearchResponse = ReindexSubmissionsForSearchResponse;
  type formsV4Submission_universal_d_DomainEvent = DomainEvent;
  type formsV4Submission_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type formsV4Submission_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type formsV4Submission_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type formsV4Submission_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type formsV4Submission_universal_d_ActionEvent = ActionEvent;
  type formsV4Submission_universal_d_Empty = Empty;
  type formsV4Submission_universal_d_MessageEnvelope = MessageEnvelope;
  type formsV4Submission_universal_d_WebhookIdentityType = WebhookIdentityType;
  const formsV4Submission_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  type formsV4Submission_universal_d_CreateCheckoutFromSubmissionRequest = CreateCheckoutFromSubmissionRequest;
  type formsV4Submission_universal_d_CreateCheckoutFromSubmissionRequestFormSchemaIdentifierOneOf = CreateCheckoutFromSubmissionRequestFormSchemaIdentifierOneOf;
  type formsV4Submission_universal_d_Form = Form;
  type formsV4Submission_universal_d_RequiredIndicator = RequiredIndicator;
  const formsV4Submission_universal_d_RequiredIndicator: typeof RequiredIndicator;
  type formsV4Submission_universal_d_RequiredIndicatorPlacement = RequiredIndicatorPlacement;
  const formsV4Submission_universal_d_RequiredIndicatorPlacement: typeof RequiredIndicatorPlacement;
  type formsV4Submission_universal_d_FormField = FormField;
  type formsV4Submission_universal_d_StringType = StringType;
  type formsV4Submission_universal_d_StringTypeFormatOptionsOneOf = StringTypeFormatOptionsOneOf;
  type formsV4Submission_universal_d_Format = Format;
  const formsV4Submission_universal_d_Format: typeof Format;
  type formsV4Submission_universal_d_StringErrorMessages = StringErrorMessages;
  type formsV4Submission_universal_d_DateTimeConstraints = DateTimeConstraints;
  type formsV4Submission_universal_d_NumberType = NumberType;
  type formsV4Submission_universal_d_NumberErrorMessages = NumberErrorMessages;
  type formsV4Submission_universal_d_IntegerType = IntegerType;
  type formsV4Submission_universal_d_BooleanType = BooleanType;
  type formsV4Submission_universal_d_BooleanErrorMessages = BooleanErrorMessages;
  type formsV4Submission_universal_d_ArrayType = ArrayType;
  type formsV4Submission_universal_d_ObjectType = ObjectType;
  type formsV4Submission_universal_d_PropertiesType = PropertiesType;
  type formsV4Submission_universal_d_PropertiesTypePropertiesTypeOneOf = PropertiesTypePropertiesTypeOneOf;
  type formsV4Submission_universal_d_ObjectErrorMessages = ObjectErrorMessages;
  type formsV4Submission_universal_d_ArrayItems = ArrayItems;
  type formsV4Submission_universal_d_ArrayItemsItemsOneOf = ArrayItemsItemsOneOf;
  type formsV4Submission_universal_d_ArrayErrorMessages = ArrayErrorMessages;
  type formsV4Submission_universal_d_PredefinedValidation = PredefinedValidation;
  type formsV4Submission_universal_d_PredefinedValidationFormatOptionsOneOf = PredefinedValidationFormatOptionsOneOf;
  type formsV4Submission_universal_d_ValidationFormat = ValidationFormat;
  const formsV4Submission_universal_d_ValidationFormat: typeof ValidationFormat;
  type formsV4Submission_universal_d_PaymentType = PaymentType;
  type formsV4Submission_universal_d_ProductType = ProductType;
  const formsV4Submission_universal_d_ProductType: typeof ProductType;
  type formsV4Submission_universal_d_PriceType = PriceType;
  const formsV4Submission_universal_d_PriceType: typeof PriceType;
  type formsV4Submission_universal_d_QuantityLimit = QuantityLimit;
  type formsV4Submission_universal_d_FixedPriceOptions = FixedPriceOptions;
  type formsV4Submission_universal_d_DynamicPriceOptions = DynamicPriceOptions;
  type formsV4Submission_universal_d_Product = Product;
  type formsV4Submission_universal_d_ProductPriceOptionsOneOf = ProductPriceOptionsOneOf;
  type formsV4Submission_universal_d_MultilineAddressValidation = MultilineAddressValidation;
  type formsV4Submission_universal_d_FieldOverrides = FieldOverrides;
  type formsV4Submission_universal_d_FieldsOverrides = FieldsOverrides;
  type formsV4Submission_universal_d_NestedFormFieldOverrides = NestedFormFieldOverrides;
  type formsV4Submission_universal_d_Validation = Validation;
  type formsV4Submission_universal_d_ValidationValidationOneOf = ValidationValidationOneOf;
  type formsV4Submission_universal_d_DataExtensionsDetails = DataExtensionsDetails;
  type formsV4Submission_universal_d_NestedFormOverrides = NestedFormOverrides;
  type formsV4Submission_universal_d_FormFieldV2 = FormFieldV2;
  type formsV4Submission_universal_d_FormFieldV2FieldTypeOptionsOneOf = FormFieldV2FieldTypeOptionsOneOf;
  type formsV4Submission_universal_d_InputFieldStringType = InputFieldStringType;
  type formsV4Submission_universal_d_FormatEnumFormat = FormatEnumFormat;
  const formsV4Submission_universal_d_FormatEnumFormat: typeof FormatEnumFormat;
  type formsV4Submission_universal_d_InputFieldStringErrorMessages = InputFieldStringErrorMessages;
  type formsV4Submission_universal_d_StringComponentType = StringComponentType;
  const formsV4Submission_universal_d_StringComponentType: typeof StringComponentType;
  type formsV4Submission_universal_d_TextInput = TextInput;
  type formsV4Submission_universal_d_RichContent = RichContent;
  type formsV4Submission_universal_d_Node = Node;
  type formsV4Submission_universal_d_NodeDataOneOf = NodeDataOneOf;
  type formsV4Submission_universal_d_NodeType = NodeType;
  const formsV4Submission_universal_d_NodeType: typeof NodeType;
  type formsV4Submission_universal_d_NodeStyle = NodeStyle;
  type formsV4Submission_universal_d_ButtonData = ButtonData;
  type formsV4Submission_universal_d_Border = Border;
  type formsV4Submission_universal_d_Colors = Colors;
  type formsV4Submission_universal_d_PluginContainerData = PluginContainerData;
  type formsV4Submission_universal_d_WidthType = WidthType;
  const formsV4Submission_universal_d_WidthType: typeof WidthType;
  type formsV4Submission_universal_d_PluginContainerDataWidth = PluginContainerDataWidth;
  type formsV4Submission_universal_d_PluginContainerDataWidthDataOneOf = PluginContainerDataWidthDataOneOf;
  type formsV4Submission_universal_d_PluginContainerDataAlignment = PluginContainerDataAlignment;
  const formsV4Submission_universal_d_PluginContainerDataAlignment: typeof PluginContainerDataAlignment;
  type formsV4Submission_universal_d_Spoiler = Spoiler;
  type formsV4Submission_universal_d_Height = Height;
  type formsV4Submission_universal_d_Type = Type;
  const formsV4Submission_universal_d_Type: typeof Type;
  type formsV4Submission_universal_d_Styles = Styles;
  type formsV4Submission_universal_d_Link = Link;
  type formsV4Submission_universal_d_LinkDataOneOf = LinkDataOneOf;
  type formsV4Submission_universal_d_LinkTarget = LinkTarget;
  const formsV4Submission_universal_d_LinkTarget: typeof LinkTarget;
  type formsV4Submission_universal_d_Rel = Rel;
  type formsV4Submission_universal_d_CodeBlockData = CodeBlockData;
  type formsV4Submission_universal_d_TextStyle = TextStyle;
  type formsV4Submission_universal_d_TextAlignment = TextAlignment;
  const formsV4Submission_universal_d_TextAlignment: typeof TextAlignment;
  type formsV4Submission_universal_d_DividerData = DividerData;
  type formsV4Submission_universal_d_LineStyle = LineStyle;
  const formsV4Submission_universal_d_LineStyle: typeof LineStyle;
  type formsV4Submission_universal_d_Width = Width;
  const formsV4Submission_universal_d_Width: typeof Width;
  type formsV4Submission_universal_d_Alignment = Alignment;
  const formsV4Submission_universal_d_Alignment: typeof Alignment;
  type formsV4Submission_universal_d_FileData = FileData;
  type formsV4Submission_universal_d_ViewMode = ViewMode;
  const formsV4Submission_universal_d_ViewMode: typeof ViewMode;
  type formsV4Submission_universal_d_FileSource = FileSource;
  type formsV4Submission_universal_d_FileSourceDataOneOf = FileSourceDataOneOf;
  type formsV4Submission_universal_d_PDFSettings = PDFSettings;
  type formsV4Submission_universal_d_GalleryData = GalleryData;
  type formsV4Submission_universal_d_Media = Media;
  type formsV4Submission_universal_d_Image = Image;
  type formsV4Submission_universal_d_Video = Video;
  type formsV4Submission_universal_d_Item = Item;
  type formsV4Submission_universal_d_ItemDataOneOf = ItemDataOneOf;
  type formsV4Submission_universal_d_GalleryOptions = GalleryOptions;
  type formsV4Submission_universal_d_LayoutType = LayoutType;
  const formsV4Submission_universal_d_LayoutType: typeof LayoutType;
  type formsV4Submission_universal_d_Orientation = Orientation;
  const formsV4Submission_universal_d_Orientation: typeof Orientation;
  type formsV4Submission_universal_d_Crop = Crop;
  const formsV4Submission_universal_d_Crop: typeof Crop;
  type formsV4Submission_universal_d_ThumbnailsAlignment = ThumbnailsAlignment;
  const formsV4Submission_universal_d_ThumbnailsAlignment: typeof ThumbnailsAlignment;
  type formsV4Submission_universal_d_Layout = Layout;
  type formsV4Submission_universal_d_ItemStyle = ItemStyle;
  type formsV4Submission_universal_d_Thumbnails = Thumbnails;
  type formsV4Submission_universal_d_GIFData = GIFData;
  type formsV4Submission_universal_d_GIF = GIF;
  type formsV4Submission_universal_d_HeadingData = HeadingData;
  type formsV4Submission_universal_d_HTMLData = HTMLData;
  type formsV4Submission_universal_d_HTMLDataDataOneOf = HTMLDataDataOneOf;
  type formsV4Submission_universal_d_Source = Source;
  const formsV4Submission_universal_d_Source: typeof Source;
  type formsV4Submission_universal_d_ImageData = ImageData;
  type formsV4Submission_universal_d_LinkPreviewData = LinkPreviewData;
  type formsV4Submission_universal_d_MapData = MapData;
  type formsV4Submission_universal_d_MapSettings = MapSettings;
  type formsV4Submission_universal_d_MapType = MapType;
  const formsV4Submission_universal_d_MapType: typeof MapType;
  type formsV4Submission_universal_d_ParagraphData = ParagraphData;
  type formsV4Submission_universal_d_PollData = PollData;
  type formsV4Submission_universal_d_ViewRole = ViewRole;
  const formsV4Submission_universal_d_ViewRole: typeof ViewRole;
  type formsV4Submission_universal_d_VoteRole = VoteRole;
  const formsV4Submission_universal_d_VoteRole: typeof VoteRole;
  type formsV4Submission_universal_d_Permissions = Permissions;
  type formsV4Submission_universal_d_PollOption = PollOption;
  type formsV4Submission_universal_d_Settings = Settings;
  type formsV4Submission_universal_d_PollLayoutType = PollLayoutType;
  const formsV4Submission_universal_d_PollLayoutType: typeof PollLayoutType;
  type formsV4Submission_universal_d_PollLayoutDirection = PollLayoutDirection;
  const formsV4Submission_universal_d_PollLayoutDirection: typeof PollLayoutDirection;
  type formsV4Submission_universal_d_PollLayout = PollLayout;
  type formsV4Submission_universal_d_OptionLayout = OptionLayout;
  type formsV4Submission_universal_d_BackgroundType = BackgroundType;
  const formsV4Submission_universal_d_BackgroundType: typeof BackgroundType;
  type formsV4Submission_universal_d_Gradient = Gradient;
  type formsV4Submission_universal_d_Background = Background;
  type formsV4Submission_universal_d_BackgroundBackgroundOneOf = BackgroundBackgroundOneOf;
  type formsV4Submission_universal_d_PollDesign = PollDesign;
  type formsV4Submission_universal_d_OptionDesign = OptionDesign;
  type formsV4Submission_universal_d_Poll = Poll;
  type formsV4Submission_universal_d_PollDataLayout = PollDataLayout;
  type formsV4Submission_universal_d_Design = Design;
  type formsV4Submission_universal_d_TextData = TextData;
  type formsV4Submission_universal_d_Decoration = Decoration;
  type formsV4Submission_universal_d_DecorationDataOneOf = DecorationDataOneOf;
  type formsV4Submission_universal_d_DecorationType = DecorationType;
  const formsV4Submission_universal_d_DecorationType: typeof DecorationType;
  type formsV4Submission_universal_d_AnchorData = AnchorData;
  type formsV4Submission_universal_d_ColorData = ColorData;
  type formsV4Submission_universal_d_LinkData = LinkData;
  type formsV4Submission_universal_d_MentionData = MentionData;
  type formsV4Submission_universal_d_FontSizeData = FontSizeData;
  type formsV4Submission_universal_d_FontType = FontType;
  const formsV4Submission_universal_d_FontType: typeof FontType;
  type formsV4Submission_universal_d_AppEmbedData = AppEmbedData;
  type formsV4Submission_universal_d_AppEmbedDataAppDataOneOf = AppEmbedDataAppDataOneOf;
  type formsV4Submission_universal_d_AppType = AppType;
  const formsV4Submission_universal_d_AppType: typeof AppType;
  type formsV4Submission_universal_d_BookingData = BookingData;
  type formsV4Submission_universal_d_EventData = EventData;
  type formsV4Submission_universal_d_VideoData = VideoData;
  type formsV4Submission_universal_d_PlaybackOptions = PlaybackOptions;
  type formsV4Submission_universal_d_EmbedData = EmbedData;
  type formsV4Submission_universal_d_Oembed = Oembed;
  type formsV4Submission_universal_d_CollapsibleListData = CollapsibleListData;
  type formsV4Submission_universal_d_InitialExpandedItems = InitialExpandedItems;
  const formsV4Submission_universal_d_InitialExpandedItems: typeof InitialExpandedItems;
  type formsV4Submission_universal_d_Direction = Direction;
  const formsV4Submission_universal_d_Direction: typeof Direction;
  type formsV4Submission_universal_d_TableData = TableData;
  type formsV4Submission_universal_d_Dimensions = Dimensions;
  type formsV4Submission_universal_d_TableCellData = TableCellData;
  type formsV4Submission_universal_d_VerticalAlignment = VerticalAlignment;
  const formsV4Submission_universal_d_VerticalAlignment: typeof VerticalAlignment;
  type formsV4Submission_universal_d_CellStyle = CellStyle;
  type formsV4Submission_universal_d_BorderColors = BorderColors;
  type formsV4Submission_universal_d_NullValue = NullValue;
  const formsV4Submission_universal_d_NullValue: typeof NullValue;
  type formsV4Submission_universal_d_ListValue = ListValue;
  type formsV4Submission_universal_d_AudioData = AudioData;
  type formsV4Submission_universal_d_OrderedListData = OrderedListData;
  type formsV4Submission_universal_d_BulletedListData = BulletedListData;
  type formsV4Submission_universal_d_BlockquoteData = BlockquoteData;
  type formsV4Submission_universal_d_Metadata = Metadata;
  type formsV4Submission_universal_d_DocumentStyle = DocumentStyle;
  type formsV4Submission_universal_d_TextNodeStyle = TextNodeStyle;
  type formsV4Submission_universal_d_RadioGroup = RadioGroup;
  type formsV4Submission_universal_d_RadioGroupOption = RadioGroupOption;
  type formsV4Submission_universal_d_RadioGroupCustomOption = RadioGroupCustomOption;
  type formsV4Submission_universal_d_Dropdown = Dropdown;
  type formsV4Submission_universal_d_DropdownOption = DropdownOption;
  type formsV4Submission_universal_d_DropdownCustomOption = DropdownCustomOption;
  type formsV4Submission_universal_d_DateTimeInput = DateTimeInput;
  type formsV4Submission_universal_d_DateTimeInputDateTimeInputTypeOptionsOneOf = DateTimeInputDateTimeInputTypeOptionsOneOf;
  type formsV4Submission_universal_d_DateFormatPart = DateFormatPart;
  const formsV4Submission_universal_d_DateFormatPart: typeof DateFormatPart;
  type formsV4Submission_universal_d_FirstDayOfWeek = FirstDayOfWeek;
  const formsV4Submission_universal_d_FirstDayOfWeek: typeof FirstDayOfWeek;
  type formsV4Submission_universal_d_DateTimeInputType = DateTimeInputType;
  const formsV4Submission_universal_d_DateTimeInputType: typeof DateTimeInputType;
  type formsV4Submission_universal_d_DateTimeOptions = DateTimeOptions;
  type formsV4Submission_universal_d_DateOptions = DateOptions;
  type formsV4Submission_universal_d_TimeOptions = TimeOptions;
  type formsV4Submission_universal_d_DatePickerOptions = DatePickerOptions;
  type formsV4Submission_universal_d_InputFieldNumberType = InputFieldNumberType;
  type formsV4Submission_universal_d_InputFieldNumberErrorMessages = InputFieldNumberErrorMessages;
  type formsV4Submission_universal_d_NumberComponentType = NumberComponentType;
  const formsV4Submission_universal_d_NumberComponentType: typeof NumberComponentType;
  type formsV4Submission_universal_d_NumberInput = NumberInput;
  type formsV4Submission_universal_d_InputFieldBooleanType = InputFieldBooleanType;
  type formsV4Submission_universal_d_InputFieldBooleanErrorMessages = InputFieldBooleanErrorMessages;
  type formsV4Submission_universal_d_BooleanComponentType = BooleanComponentType;
  const formsV4Submission_universal_d_BooleanComponentType: typeof BooleanComponentType;
  type formsV4Submission_universal_d_Checkbox = Checkbox;
  type formsV4Submission_universal_d_InputFieldArrayType = InputFieldArrayType;
  type formsV4Submission_universal_d_ItemType = ItemType;
  const formsV4Submission_universal_d_ItemType: typeof ItemType;
  type formsV4Submission_universal_d_InputFieldIntegerType = InputFieldIntegerType;
  type formsV4Submission_universal_d_InputFieldObjectType = InputFieldObjectType;
  type formsV4Submission_universal_d_PropertiesTypePropertiesType = PropertiesTypePropertiesType;
  const formsV4Submission_universal_d_PropertiesTypePropertiesType: typeof PropertiesTypePropertiesType;
  type formsV4Submission_universal_d_ObjectTypePropertiesType = ObjectTypePropertiesType;
  type formsV4Submission_universal_d_ObjectTypePropertiesTypePropertiesTypeOptionsOneOf = ObjectTypePropertiesTypePropertiesTypeOptionsOneOf;
  type formsV4Submission_universal_d_InputFieldObjectErrorMessages = InputFieldObjectErrorMessages;
  type formsV4Submission_universal_d_ArrayTypeArrayItems = ArrayTypeArrayItems;
  type formsV4Submission_universal_d_ArrayTypeArrayItemsItemTypeOptionsOneOf = ArrayTypeArrayItemsItemTypeOptionsOneOf;
  type formsV4Submission_universal_d_InputFieldArrayErrorMessages = InputFieldArrayErrorMessages;
  type formsV4Submission_universal_d_ComponentType = ComponentType;
  const formsV4Submission_universal_d_ComponentType: typeof ComponentType;
  type formsV4Submission_universal_d_CheckboxGroup = CheckboxGroup;
  type formsV4Submission_universal_d_MediaItem = MediaItem;
  type formsV4Submission_universal_d_MediaItemMediaOneOf = MediaItemMediaOneOf;
  type formsV4Submission_universal_d_Option = Option;
  type formsV4Submission_universal_d_CustomOption = CustomOption;
  type formsV4Submission_universal_d_WixFileComponentType = WixFileComponentType;
  const formsV4Submission_universal_d_WixFileComponentType: typeof WixFileComponentType;
  type formsV4Submission_universal_d_FileUpload = FileUpload;
  type formsV4Submission_universal_d_UploadFileFormat = UploadFileFormat;
  const formsV4Submission_universal_d_UploadFileFormat: typeof UploadFileFormat;
  type formsV4Submission_universal_d_Signature = Signature;
  type formsV4Submission_universal_d_PaymentComponentType = PaymentComponentType;
  const formsV4Submission_universal_d_PaymentComponentType: typeof PaymentComponentType;
  type formsV4Submission_universal_d_ProductCheckboxGroup = ProductCheckboxGroup;
  type formsV4Submission_universal_d_ProductCheckboxGroupOption = ProductCheckboxGroupOption;
  type formsV4Submission_universal_d_DonationInput = DonationInput;
  type formsV4Submission_universal_d_DonationInputOption = DonationInputOption;
  type formsV4Submission_universal_d_CommonCustomOption = CommonCustomOption;
  type formsV4Submission_universal_d_NumberOfColumns = NumberOfColumns;
  const formsV4Submission_universal_d_NumberOfColumns: typeof NumberOfColumns;
  type formsV4Submission_universal_d_MultilineAddressComponentType = MultilineAddressComponentType;
  const formsV4Submission_universal_d_MultilineAddressComponentType: typeof MultilineAddressComponentType;
  type formsV4Submission_universal_d_MultilineAddress = MultilineAddress;
  type formsV4Submission_universal_d_DefaultCountryConfigType = DefaultCountryConfigType;
  const formsV4Submission_universal_d_DefaultCountryConfigType: typeof DefaultCountryConfigType;
  type formsV4Submission_universal_d_AddressLine = AddressLine;
  type formsV4Submission_universal_d_AddressLine2 = AddressLine2;
  type formsV4Submission_universal_d_DefaultCountryConfig = DefaultCountryConfig;
  type formsV4Submission_universal_d_DefaultCountryConfigOptionsOneOf = DefaultCountryConfigOptionsOneOf;
  type formsV4Submission_universal_d_FieldsSettings = FieldsSettings;
  type formsV4Submission_universal_d_InputType = InputType;
  const formsV4Submission_universal_d_InputType: typeof InputType;
  type formsV4Submission_universal_d__String = _String;
  type formsV4Submission_universal_d__StringComponentTypeOptionsOneOf = _StringComponentTypeOptionsOneOf;
  type formsV4Submission_universal_d__Number = _Number;
  type formsV4Submission_universal_d__NumberComponentTypeOptionsOneOf = _NumberComponentTypeOptionsOneOf;
  type formsV4Submission_universal_d__Boolean = _Boolean;
  type formsV4Submission_universal_d__BooleanComponentTypeOptionsOneOf = _BooleanComponentTypeOptionsOneOf;
  type formsV4Submission_universal_d__Array = _Array;
  type formsV4Submission_universal_d__ArrayComponentTypeOptionsOneOf = _ArrayComponentTypeOptionsOneOf;
  type formsV4Submission_universal_d__Object = _Object;
  type formsV4Submission_universal_d__ObjectValidationOneOf = _ObjectValidationOneOf;
  type formsV4Submission_universal_d_WixFile = WixFile;
  type formsV4Submission_universal_d_WixFileComponentTypeOptionsOneOf = WixFileComponentTypeOptionsOneOf;
  type formsV4Submission_universal_d_Payment = Payment;
  type formsV4Submission_universal_d_PaymentComponentTypeOptionsOneOf = PaymentComponentTypeOptionsOneOf;
  type formsV4Submission_universal_d_InputFieldMultilineAddress = InputFieldMultilineAddress;
  type formsV4Submission_universal_d_InputFieldMultilineAddressComponentTypeOptionsOneOf = InputFieldMultilineAddressComponentTypeOptionsOneOf;
  type formsV4Submission_universal_d_Header = Header;
  type formsV4Submission_universal_d_RichText = RichText;
  type formsV4Submission_universal_d_Target = Target;
  const formsV4Submission_universal_d_Target: typeof Target;
  type formsV4Submission_universal_d_ThankYouMessage = ThankYouMessage;
  type formsV4Submission_universal_d_Redirect = Redirect;
  type formsV4Submission_universal_d_FieldType = FieldType;
  const formsV4Submission_universal_d_FieldType: typeof FieldType;
  type formsV4Submission_universal_d_InputField = InputField;
  type formsV4Submission_universal_d_InputFieldInputTypeOptionsOneOf = InputFieldInputTypeOptionsOneOf;
  type formsV4Submission_universal_d_DisplayField = DisplayField;
  type formsV4Submission_universal_d_DisplayFieldComponentTypeOneOf = DisplayFieldComponentTypeOneOf;
  type formsV4Submission_universal_d_SubmitButton = SubmitButton;
  type formsV4Submission_universal_d_SubmitButtonSubmitActionOneOf = SubmitButtonSubmitActionOneOf;
  type formsV4Submission_universal_d_Step = Step;
  type formsV4Submission_universal_d_FormLayout = FormLayout;
  type formsV4Submission_universal_d_BreakPoint = BreakPoint;
  type formsV4Submission_universal_d_ItemLayout = ItemLayout;
  type formsV4Submission_universal_d_Margin = Margin;
  type formsV4Submission_universal_d_Section = Section;
  type formsV4Submission_universal_d_FormRule = FormRule;
  type formsV4Submission_universal_d_OverrideEntityType = OverrideEntityType;
  const formsV4Submission_universal_d_OverrideEntityType: typeof OverrideEntityType;
  type formsV4Submission_universal_d_FormOverride = FormOverride;
  type formsV4Submission_universal_d_FormProperties = FormProperties;
  type formsV4Submission_universal_d_Kind = Kind;
  const formsV4Submission_universal_d_Kind: typeof Kind;
  type formsV4Submission_universal_d_PostSubmissionTriggers = PostSubmissionTriggers;
  type formsV4Submission_universal_d_UpsertContact = UpsertContact;
  type formsV4Submission_universal_d_FormFieldContactInfo = FormFieldContactInfo;
  type formsV4Submission_universal_d_FormFieldContactInfoAdditionalInfoOneOf = FormFieldContactInfoAdditionalInfoOneOf;
  type formsV4Submission_universal_d_EmailInfoTag = EmailInfoTag;
  const formsV4Submission_universal_d_EmailInfoTag: typeof EmailInfoTag;
  type formsV4Submission_universal_d_PhoneInfoTag = PhoneInfoTag;
  const formsV4Submission_universal_d_PhoneInfoTag: typeof PhoneInfoTag;
  type formsV4Submission_universal_d_Tag = Tag;
  const formsV4Submission_universal_d_Tag: typeof Tag;
  type formsV4Submission_universal_d_OptInLevel = OptInLevel;
  const formsV4Submission_universal_d_OptInLevel: typeof OptInLevel;
  type formsV4Submission_universal_d_ContactField = ContactField;
  const formsV4Submission_universal_d_ContactField: typeof ContactField;
  type formsV4Submission_universal_d_EmailInfo = EmailInfo;
  type formsV4Submission_universal_d_PhoneInfo = PhoneInfo;
  type formsV4Submission_universal_d_AddressInfo = AddressInfo;
  type formsV4Submission_universal_d_CustomFieldInfo = CustomFieldInfo;
  type formsV4Submission_universal_d_SubscriptionInfo = SubscriptionInfo;
  type formsV4Submission_universal_d_NestedForm = NestedForm;
  type formsV4Submission_universal_d_LimitationRule = LimitationRule;
  type formsV4Submission_universal_d_SpamFilterProtectionLevel = SpamFilterProtectionLevel;
  const formsV4Submission_universal_d_SpamFilterProtectionLevel: typeof SpamFilterProtectionLevel;
  type formsV4Submission_universal_d_RequiredIndicatorProperties = RequiredIndicatorProperties;
  type formsV4Submission_universal_d_CreateCheckoutFromSubmissionResponse = CreateCheckoutFromSubmissionResponse;
  type formsV4Submission_universal_d_Checkout = Checkout;
  type formsV4Submission_universal_d_IsFormSubmittableRequest = IsFormSubmittableRequest;
  type formsV4Submission_universal_d_IsFormSubmittableResponse = IsFormSubmittableResponse;
  type formsV4Submission_universal_d_UpsertContactFromSubmissionRequest = UpsertContactFromSubmissionRequest;
  type formsV4Submission_universal_d_UpsertContactFromSubmissionResponse = UpsertContactFromSubmissionResponse;
  type formsV4Submission_universal_d_SubmitContactResponse = SubmitContactResponse;
  type formsV4Submission_universal_d_SubmissionContactMapped = SubmissionContactMapped;
  type formsV4Submission_universal_d_MarketingSubscriptionDetails = MarketingSubscriptionDetails;
  type formsV4Submission_universal_d_MarketingSubscriptionDetailsOptInLevel = MarketingSubscriptionDetailsOptInLevel;
  const formsV4Submission_universal_d_MarketingSubscriptionDetailsOptInLevel: typeof MarketingSubscriptionDetailsOptInLevel;
  type formsV4Submission_universal_d_SubmissionContactMappingSkipped = SubmissionContactMappingSkipped;
  type formsV4Submission_universal_d_CreateSubmissionRequest = CreateSubmissionRequest;
  type formsV4Submission_universal_d_CreateSubmissionResponse = CreateSubmissionResponse;
  type formsV4Submission_universal_d_CreateSubmissionBySubmitterRequest = CreateSubmissionBySubmitterRequest;
  type formsV4Submission_universal_d_CreateSubmissionBySubmitterResponse = CreateSubmissionBySubmitterResponse;
  type formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterRequest = BulkCreateSubmissionBySubmitterRequest;
  type formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterData = BulkCreateSubmissionBySubmitterData;
  type formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterResponse = BulkCreateSubmissionBySubmitterResponse;
  type formsV4Submission_universal_d_BulkSubmissionResult = BulkSubmissionResult;
  type formsV4Submission_universal_d_ItemMetadata = ItemMetadata;
  type formsV4Submission_universal_d_ApplicationError = ApplicationError;
  type formsV4Submission_universal_d_BulkActionMetadata = BulkActionMetadata;
  type formsV4Submission_universal_d_GetSubmissionRequest = GetSubmissionRequest;
  type formsV4Submission_universal_d_GetSubmissionResponse = GetSubmissionResponse;
  type formsV4Submission_universal_d_GetSubmissionByCheckoutIdRequest = GetSubmissionByCheckoutIdRequest;
  type formsV4Submission_universal_d_GetSubmissionByCheckoutIdResponse = GetSubmissionByCheckoutIdResponse;
  type formsV4Submission_universal_d_UpdateSubmissionRequest = UpdateSubmissionRequest;
  type formsV4Submission_universal_d_UpdateSubmissionResponse = UpdateSubmissionResponse;
  type formsV4Submission_universal_d_ConfirmSubmissionRequest = ConfirmSubmissionRequest;
  type formsV4Submission_universal_d_ConfirmSubmissionResponse = ConfirmSubmissionResponse;
  type formsV4Submission_universal_d_FormSubmissionStatusUpdatedEvent = FormSubmissionStatusUpdatedEvent;
  type formsV4Submission_universal_d_DeleteSubmissionRequest = DeleteSubmissionRequest;
  type formsV4Submission_universal_d_DeleteSubmissionResponse = DeleteSubmissionResponse;
  type formsV4Submission_universal_d_BulkDeleteSubmissionRequest = BulkDeleteSubmissionRequest;
  type formsV4Submission_universal_d_BulkDeleteSubmissionResponse = BulkDeleteSubmissionResponse;
  type formsV4Submission_universal_d_BulkDeleteSubmissionResult = BulkDeleteSubmissionResult;
  type formsV4Submission_universal_d_RestoreSubmissionFromTrashBinRequest = RestoreSubmissionFromTrashBinRequest;
  type formsV4Submission_universal_d_RestoreSubmissionFromTrashBinResponse = RestoreSubmissionFromTrashBinResponse;
  type formsV4Submission_universal_d_RemoveSubmissionFromTrashBinRequest = RemoveSubmissionFromTrashBinRequest;
  type formsV4Submission_universal_d_RemoveSubmissionFromTrashBinResponse = RemoveSubmissionFromTrashBinResponse;
  type formsV4Submission_universal_d_RemovedSubmissionFromTrash = RemovedSubmissionFromTrash;
  type formsV4Submission_universal_d_BulkRemoveSubmissionFromTrashBinRequest = BulkRemoveSubmissionFromTrashBinRequest;
  type formsV4Submission_universal_d_BulkRemoveSubmissionFromTrashBinResponse = BulkRemoveSubmissionFromTrashBinResponse;
  type formsV4Submission_universal_d_BulkRemoveSubmissionFromTrashBinResult = BulkRemoveSubmissionFromTrashBinResult;
  type formsV4Submission_universal_d_ListDeletedSubmissionsRequest = ListDeletedSubmissionsRequest;
  type formsV4Submission_universal_d_CursorPaging = CursorPaging;
  type formsV4Submission_universal_d_ListDeletedSubmissionsResponse = ListDeletedSubmissionsResponse;
  type formsV4Submission_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type formsV4Submission_universal_d_Cursors = Cursors;
  type formsV4Submission_universal_d_GetDeletedSubmissionRequest = GetDeletedSubmissionRequest;
  type formsV4Submission_universal_d_GetDeletedSubmissionResponse = GetDeletedSubmissionResponse;
  type formsV4Submission_universal_d_QuerySubmissionRequest = QuerySubmissionRequest;
  type formsV4Submission_universal_d_CursorQuery = CursorQuery;
  type formsV4Submission_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type formsV4Submission_universal_d_Sorting = Sorting;
  type formsV4Submission_universal_d_SortOrder = SortOrder;
  const formsV4Submission_universal_d_SortOrder: typeof SortOrder;
  type formsV4Submission_universal_d_QuerySubmissionResponse = QuerySubmissionResponse;
  type formsV4Submission_universal_d_SearchSubmissionsByNamespaceRequest = SearchSubmissionsByNamespaceRequest;
  type formsV4Submission_universal_d_CursorSearch = CursorSearch;
  type formsV4Submission_universal_d_CursorSearchPagingMethodOneOf = CursorSearchPagingMethodOneOf;
  type formsV4Submission_universal_d_SearchDetails = SearchDetails;
  type formsV4Submission_universal_d_Mode = Mode;
  const formsV4Submission_universal_d_Mode: typeof Mode;
  type formsV4Submission_universal_d_SearchSubmissionsByNamespaceResponse = SearchSubmissionsByNamespaceResponse;
  type formsV4Submission_universal_d_SearchSubmissionsByNamespaceForExportRequest = SearchSubmissionsByNamespaceForExportRequest;
  type formsV4Submission_universal_d_SearchSubmissionsByNamespaceForExportResponse = SearchSubmissionsByNamespaceForExportResponse;
  type formsV4Submission_universal_d_QuerySubmissionsByNamespaceRequest = QuerySubmissionsByNamespaceRequest;
  type formsV4Submission_universal_d_QuerySubmissionsByNamespaceResponse = QuerySubmissionsByNamespaceResponse;
  type formsV4Submission_universal_d_QuerySubmissionsByNamespaceForExportRequest = QuerySubmissionsByNamespaceForExportRequest;
  type formsV4Submission_universal_d_QuerySubmissionsByNamespaceForExportResponse = QuerySubmissionsByNamespaceForExportResponse;
  type formsV4Submission_universal_d_CountSubmissionsByFilterRequest = CountSubmissionsByFilterRequest;
  type formsV4Submission_universal_d_CountSubmissionsByFilterResponse = CountSubmissionsByFilterResponse;
  type formsV4Submission_universal_d_FormSubmissionsCount = FormSubmissionsCount;
  type formsV4Submission_universal_d_CountSubmissionsRequest = CountSubmissionsRequest;
  type formsV4Submission_universal_d_CountSubmissionsResponse = CountSubmissionsResponse;
  type formsV4Submission_universal_d_CountDeletedSubmissionsRequest = CountDeletedSubmissionsRequest;
  type formsV4Submission_universal_d_CountDeletedSubmissionsResponse = CountDeletedSubmissionsResponse;
  type formsV4Submission_universal_d_FormDeletedSubmissionsCount = FormDeletedSubmissionsCount;
  type formsV4Submission_universal_d_GetMediaUploadURLRequest = GetMediaUploadURLRequest;
  type formsV4Submission_universal_d_GetMediaUploadURLResponse = GetMediaUploadURLResponse;
  type formsV4Submission_universal_d_BulkMarkSubmissionsAsSeenRequest = BulkMarkSubmissionsAsSeenRequest;
  type formsV4Submission_universal_d_BulkMarkSubmissionsAsSeenResponse = BulkMarkSubmissionsAsSeenResponse;
  const formsV4Submission_universal_d_createCheckoutFromSubmission: typeof createCheckoutFromSubmission;
  type formsV4Submission_universal_d_CreateCheckoutFromSubmissionOptions = CreateCheckoutFromSubmissionOptions;
  const formsV4Submission_universal_d_isFormSubmittable: typeof isFormSubmittable;
  const formsV4Submission_universal_d_upsertContactFromSubmission: typeof upsertContactFromSubmission;
  type formsV4Submission_universal_d_UpsertContactFromSubmissionOptions = UpsertContactFromSubmissionOptions;
  const formsV4Submission_universal_d_createSubmission: typeof createSubmission;
  type formsV4Submission_universal_d_CreateSubmissionOptions = CreateSubmissionOptions;
  const formsV4Submission_universal_d_createSubmissionBySubmitter: typeof createSubmissionBySubmitter;
  type formsV4Submission_universal_d_CreateSubmissionBySubmitterOptions = CreateSubmissionBySubmitterOptions;
  const formsV4Submission_universal_d_bulkCreateSubmissionBySubmitter: typeof bulkCreateSubmissionBySubmitter;
  type formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterOptions = BulkCreateSubmissionBySubmitterOptions;
  const formsV4Submission_universal_d_getSubmission: typeof getSubmission;
  const formsV4Submission_universal_d_getSubmissionByCheckoutId: typeof getSubmissionByCheckoutId;
  const formsV4Submission_universal_d_updateSubmission: typeof updateSubmission;
  type formsV4Submission_universal_d_UpdateSubmission = UpdateSubmission;
  type formsV4Submission_universal_d_UpdateSubmissionOptions = UpdateSubmissionOptions;
  const formsV4Submission_universal_d_confirmSubmission: typeof confirmSubmission;
  const formsV4Submission_universal_d_deleteSubmission: typeof deleteSubmission;
  type formsV4Submission_universal_d_DeleteSubmissionOptions = DeleteSubmissionOptions;
  const formsV4Submission_universal_d_bulkDeleteSubmission: typeof bulkDeleteSubmission;
  type formsV4Submission_universal_d_BulkDeleteSubmissionOptions = BulkDeleteSubmissionOptions;
  const formsV4Submission_universal_d_restoreSubmissionFromTrashBin: typeof restoreSubmissionFromTrashBin;
  const formsV4Submission_universal_d_removeSubmissionFromTrashBin: typeof removeSubmissionFromTrashBin;
  const formsV4Submission_universal_d_bulkRemoveSubmissionFromTrashBin: typeof bulkRemoveSubmissionFromTrashBin;
  type formsV4Submission_universal_d_BulkRemoveSubmissionFromTrashBinOptions = BulkRemoveSubmissionFromTrashBinOptions;
  const formsV4Submission_universal_d_listDeletedSubmissions: typeof listDeletedSubmissions;
  type formsV4Submission_universal_d_ListDeletedSubmissionsOptions = ListDeletedSubmissionsOptions;
  const formsV4Submission_universal_d_getDeletedSubmission: typeof getDeletedSubmission;
  const formsV4Submission_universal_d_querySubmission: typeof querySubmission;
  type formsV4Submission_universal_d_QuerySubmissionOptions = QuerySubmissionOptions;
  const formsV4Submission_universal_d_searchSubmissionsByNamespace: typeof searchSubmissionsByNamespace;
  const formsV4Submission_universal_d_searchSubmissionsByNamespaceForExport: typeof searchSubmissionsByNamespaceForExport;
  const formsV4Submission_universal_d_querySubmissionsByNamespace: typeof querySubmissionsByNamespace;
  type formsV4Submission_universal_d_QuerySubmissionsByNamespaceOptions = QuerySubmissionsByNamespaceOptions;
  type formsV4Submission_universal_d_SubmissionsQueryResult = SubmissionsQueryResult;
  type formsV4Submission_universal_d_SubmissionsQueryBuilder = SubmissionsQueryBuilder;
  const formsV4Submission_universal_d_querySubmissionsByNamespaceForExport: typeof querySubmissionsByNamespaceForExport;
  const formsV4Submission_universal_d_countSubmissionsByFilter: typeof countSubmissionsByFilter;
  type formsV4Submission_universal_d_CountSubmissionsByFilterOptions = CountSubmissionsByFilterOptions;
  const formsV4Submission_universal_d_countSubmissions: typeof countSubmissions;
  type formsV4Submission_universal_d_CountSubmissionsOptions = CountSubmissionsOptions;
  const formsV4Submission_universal_d_countDeletedSubmissions: typeof countDeletedSubmissions;
  type formsV4Submission_universal_d_CountDeletedSubmissionsOptions = CountDeletedSubmissionsOptions;
  const formsV4Submission_universal_d_getMediaUploadUrl: typeof getMediaUploadUrl;
  const formsV4Submission_universal_d_bulkMarkSubmissionsAsSeen: typeof bulkMarkSubmissionsAsSeen;
  namespace formsV4Submission_universal_d {
    export {
      FormSubmission$1 as FormSubmission,
      SubmissionStatus$1 as SubmissionStatus,
      Submitter$1 as Submitter,
      SubmitterSubmitterOneOf$1 as SubmitterSubmitterOneOf,
      ExtendedFields$1 as ExtendedFields,
      OrderDetails$1 as OrderDetails,
      formsV4Submission_universal_d_UpdateInternalDocumentsEvent as UpdateInternalDocumentsEvent,
      formsV4Submission_universal_d_UpdateInternalDocumentsEventOperationOneOf as UpdateInternalDocumentsEventOperationOneOf,
      formsV4Submission_universal_d_InternalDocument as InternalDocument,
      formsV4Submission_universal_d_InternalDocumentUpdateOperation as InternalDocumentUpdateOperation,
      formsV4Submission_universal_d_DeleteByIdsOperation as DeleteByIdsOperation,
      formsV4Submission_universal_d_DeleteByFilterOperation as DeleteByFilterOperation,
      formsV4Submission_universal_d_InternalDocumentUpdateByFilterOperation as InternalDocumentUpdateByFilterOperation,
      formsV4Submission_universal_d_InternalUpdateExistingOperation as InternalUpdateExistingOperation,
      formsV4Submission_universal_d_VersionedDocumentUpdateOperation as VersionedDocumentUpdateOperation,
      formsV4Submission_universal_d_VersioningMode as VersioningMode,
      formsV4Submission_universal_d_VersionedDeleteByIdsOperation as VersionedDeleteByIdsOperation,
      formsV4Submission_universal_d_VersionedDocumentId as VersionedDocumentId,
      formsV4Submission_universal_d_ReindexSubmissionsForSearchRequest as ReindexSubmissionsForSearchRequest,
      formsV4Submission_universal_d_ReindexSubmissionsForSearchRequestOptionsOneOf as ReindexSubmissionsForSearchRequestOptionsOneOf,
      formsV4Submission_universal_d_ReindexType as ReindexType,
      formsV4Submission_universal_d_FormsOptions as FormsOptions,
      formsV4Submission_universal_d_SubmissionsOptions as SubmissionsOptions,
      formsV4Submission_universal_d_ReindexSubmissionsForSearchResponse as ReindexSubmissionsForSearchResponse,
      formsV4Submission_universal_d_DomainEvent as DomainEvent,
      formsV4Submission_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      formsV4Submission_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      formsV4Submission_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      formsV4Submission_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      formsV4Submission_universal_d_ActionEvent as ActionEvent,
      formsV4Submission_universal_d_Empty as Empty,
      formsV4Submission_universal_d_MessageEnvelope as MessageEnvelope,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      formsV4Submission_universal_d_WebhookIdentityType as WebhookIdentityType,
      formsV4Submission_universal_d_CreateCheckoutFromSubmissionRequest as CreateCheckoutFromSubmissionRequest,
      formsV4Submission_universal_d_CreateCheckoutFromSubmissionRequestFormSchemaIdentifierOneOf as CreateCheckoutFromSubmissionRequestFormSchemaIdentifierOneOf,
      formsV4Submission_universal_d_Form as Form,
      formsV4Submission_universal_d_RequiredIndicator as RequiredIndicator,
      formsV4Submission_universal_d_RequiredIndicatorPlacement as RequiredIndicatorPlacement,
      formsV4Submission_universal_d_FormField as FormField,
      formsV4Submission_universal_d_StringType as StringType,
      formsV4Submission_universal_d_StringTypeFormatOptionsOneOf as StringTypeFormatOptionsOneOf,
      formsV4Submission_universal_d_Format as Format,
      formsV4Submission_universal_d_StringErrorMessages as StringErrorMessages,
      formsV4Submission_universal_d_DateTimeConstraints as DateTimeConstraints,
      formsV4Submission_universal_d_NumberType as NumberType,
      formsV4Submission_universal_d_NumberErrorMessages as NumberErrorMessages,
      formsV4Submission_universal_d_IntegerType as IntegerType,
      formsV4Submission_universal_d_BooleanType as BooleanType,
      formsV4Submission_universal_d_BooleanErrorMessages as BooleanErrorMessages,
      formsV4Submission_universal_d_ArrayType as ArrayType,
      formsV4Submission_universal_d_ObjectType as ObjectType,
      formsV4Submission_universal_d_PropertiesType as PropertiesType,
      formsV4Submission_universal_d_PropertiesTypePropertiesTypeOneOf as PropertiesTypePropertiesTypeOneOf,
      formsV4Submission_universal_d_ObjectErrorMessages as ObjectErrorMessages,
      formsV4Submission_universal_d_ArrayItems as ArrayItems,
      formsV4Submission_universal_d_ArrayItemsItemsOneOf as ArrayItemsItemsOneOf,
      formsV4Submission_universal_d_ArrayErrorMessages as ArrayErrorMessages,
      formsV4Submission_universal_d_PredefinedValidation as PredefinedValidation,
      formsV4Submission_universal_d_PredefinedValidationFormatOptionsOneOf as PredefinedValidationFormatOptionsOneOf,
      formsV4Submission_universal_d_ValidationFormat as ValidationFormat,
      formsV4Submission_universal_d_PaymentType as PaymentType,
      formsV4Submission_universal_d_ProductType as ProductType,
      formsV4Submission_universal_d_PriceType as PriceType,
      formsV4Submission_universal_d_QuantityLimit as QuantityLimit,
      formsV4Submission_universal_d_FixedPriceOptions as FixedPriceOptions,
      formsV4Submission_universal_d_DynamicPriceOptions as DynamicPriceOptions,
      formsV4Submission_universal_d_Product as Product,
      formsV4Submission_universal_d_ProductPriceOptionsOneOf as ProductPriceOptionsOneOf,
      formsV4Submission_universal_d_MultilineAddressValidation as MultilineAddressValidation,
      formsV4Submission_universal_d_FieldOverrides as FieldOverrides,
      formsV4Submission_universal_d_FieldsOverrides as FieldsOverrides,
      formsV4Submission_universal_d_NestedFormFieldOverrides as NestedFormFieldOverrides,
      formsV4Submission_universal_d_Validation as Validation,
      formsV4Submission_universal_d_ValidationValidationOneOf as ValidationValidationOneOf,
      formsV4Submission_universal_d_DataExtensionsDetails as DataExtensionsDetails,
      formsV4Submission_universal_d_NestedFormOverrides as NestedFormOverrides,
      formsV4Submission_universal_d_FormFieldV2 as FormFieldV2,
      formsV4Submission_universal_d_FormFieldV2FieldTypeOptionsOneOf as FormFieldV2FieldTypeOptionsOneOf,
      formsV4Submission_universal_d_InputFieldStringType as InputFieldStringType,
      formsV4Submission_universal_d_FormatEnumFormat as FormatEnumFormat,
      formsV4Submission_universal_d_InputFieldStringErrorMessages as InputFieldStringErrorMessages,
      formsV4Submission_universal_d_StringComponentType as StringComponentType,
      formsV4Submission_universal_d_TextInput as TextInput,
      formsV4Submission_universal_d_RichContent as RichContent,
      formsV4Submission_universal_d_Node as Node,
      formsV4Submission_universal_d_NodeDataOneOf as NodeDataOneOf,
      formsV4Submission_universal_d_NodeType as NodeType,
      formsV4Submission_universal_d_NodeStyle as NodeStyle,
      formsV4Submission_universal_d_ButtonData as ButtonData,
      formsV4Submission_universal_d_Border as Border,
      formsV4Submission_universal_d_Colors as Colors,
      formsV4Submission_universal_d_PluginContainerData as PluginContainerData,
      formsV4Submission_universal_d_WidthType as WidthType,
      formsV4Submission_universal_d_PluginContainerDataWidth as PluginContainerDataWidth,
      formsV4Submission_universal_d_PluginContainerDataWidthDataOneOf as PluginContainerDataWidthDataOneOf,
      formsV4Submission_universal_d_PluginContainerDataAlignment as PluginContainerDataAlignment,
      formsV4Submission_universal_d_Spoiler as Spoiler,
      formsV4Submission_universal_d_Height as Height,
      formsV4Submission_universal_d_Type as Type,
      formsV4Submission_universal_d_Styles as Styles,
      formsV4Submission_universal_d_Link as Link,
      formsV4Submission_universal_d_LinkDataOneOf as LinkDataOneOf,
      formsV4Submission_universal_d_LinkTarget as LinkTarget,
      formsV4Submission_universal_d_Rel as Rel,
      formsV4Submission_universal_d_CodeBlockData as CodeBlockData,
      formsV4Submission_universal_d_TextStyle as TextStyle,
      formsV4Submission_universal_d_TextAlignment as TextAlignment,
      formsV4Submission_universal_d_DividerData as DividerData,
      formsV4Submission_universal_d_LineStyle as LineStyle,
      formsV4Submission_universal_d_Width as Width,
      formsV4Submission_universal_d_Alignment as Alignment,
      formsV4Submission_universal_d_FileData as FileData,
      formsV4Submission_universal_d_ViewMode as ViewMode,
      formsV4Submission_universal_d_FileSource as FileSource,
      formsV4Submission_universal_d_FileSourceDataOneOf as FileSourceDataOneOf,
      formsV4Submission_universal_d_PDFSettings as PDFSettings,
      formsV4Submission_universal_d_GalleryData as GalleryData,
      formsV4Submission_universal_d_Media as Media,
      formsV4Submission_universal_d_Image as Image,
      formsV4Submission_universal_d_Video as Video,
      formsV4Submission_universal_d_Item as Item,
      formsV4Submission_universal_d_ItemDataOneOf as ItemDataOneOf,
      formsV4Submission_universal_d_GalleryOptions as GalleryOptions,
      formsV4Submission_universal_d_LayoutType as LayoutType,
      formsV4Submission_universal_d_Orientation as Orientation,
      formsV4Submission_universal_d_Crop as Crop,
      formsV4Submission_universal_d_ThumbnailsAlignment as ThumbnailsAlignment,
      formsV4Submission_universal_d_Layout as Layout,
      formsV4Submission_universal_d_ItemStyle as ItemStyle,
      formsV4Submission_universal_d_Thumbnails as Thumbnails,
      formsV4Submission_universal_d_GIFData as GIFData,
      formsV4Submission_universal_d_GIF as GIF,
      formsV4Submission_universal_d_HeadingData as HeadingData,
      formsV4Submission_universal_d_HTMLData as HTMLData,
      formsV4Submission_universal_d_HTMLDataDataOneOf as HTMLDataDataOneOf,
      formsV4Submission_universal_d_Source as Source,
      formsV4Submission_universal_d_ImageData as ImageData,
      formsV4Submission_universal_d_LinkPreviewData as LinkPreviewData,
      formsV4Submission_universal_d_MapData as MapData,
      formsV4Submission_universal_d_MapSettings as MapSettings,
      formsV4Submission_universal_d_MapType as MapType,
      formsV4Submission_universal_d_ParagraphData as ParagraphData,
      formsV4Submission_universal_d_PollData as PollData,
      formsV4Submission_universal_d_ViewRole as ViewRole,
      formsV4Submission_universal_d_VoteRole as VoteRole,
      formsV4Submission_universal_d_Permissions as Permissions,
      formsV4Submission_universal_d_PollOption as PollOption,
      formsV4Submission_universal_d_Settings as Settings,
      formsV4Submission_universal_d_PollLayoutType as PollLayoutType,
      formsV4Submission_universal_d_PollLayoutDirection as PollLayoutDirection,
      formsV4Submission_universal_d_PollLayout as PollLayout,
      formsV4Submission_universal_d_OptionLayout as OptionLayout,
      formsV4Submission_universal_d_BackgroundType as BackgroundType,
      formsV4Submission_universal_d_Gradient as Gradient,
      formsV4Submission_universal_d_Background as Background,
      formsV4Submission_universal_d_BackgroundBackgroundOneOf as BackgroundBackgroundOneOf,
      formsV4Submission_universal_d_PollDesign as PollDesign,
      formsV4Submission_universal_d_OptionDesign as OptionDesign,
      formsV4Submission_universal_d_Poll as Poll,
      formsV4Submission_universal_d_PollDataLayout as PollDataLayout,
      formsV4Submission_universal_d_Design as Design,
      formsV4Submission_universal_d_TextData as TextData,
      formsV4Submission_universal_d_Decoration as Decoration,
      formsV4Submission_universal_d_DecorationDataOneOf as DecorationDataOneOf,
      formsV4Submission_universal_d_DecorationType as DecorationType,
      formsV4Submission_universal_d_AnchorData as AnchorData,
      formsV4Submission_universal_d_ColorData as ColorData,
      formsV4Submission_universal_d_LinkData as LinkData,
      formsV4Submission_universal_d_MentionData as MentionData,
      formsV4Submission_universal_d_FontSizeData as FontSizeData,
      formsV4Submission_universal_d_FontType as FontType,
      formsV4Submission_universal_d_AppEmbedData as AppEmbedData,
      formsV4Submission_universal_d_AppEmbedDataAppDataOneOf as AppEmbedDataAppDataOneOf,
      formsV4Submission_universal_d_AppType as AppType,
      formsV4Submission_universal_d_BookingData as BookingData,
      formsV4Submission_universal_d_EventData as EventData,
      formsV4Submission_universal_d_VideoData as VideoData,
      formsV4Submission_universal_d_PlaybackOptions as PlaybackOptions,
      formsV4Submission_universal_d_EmbedData as EmbedData,
      formsV4Submission_universal_d_Oembed as Oembed,
      formsV4Submission_universal_d_CollapsibleListData as CollapsibleListData,
      formsV4Submission_universal_d_InitialExpandedItems as InitialExpandedItems,
      formsV4Submission_universal_d_Direction as Direction,
      formsV4Submission_universal_d_TableData as TableData,
      formsV4Submission_universal_d_Dimensions as Dimensions,
      formsV4Submission_universal_d_TableCellData as TableCellData,
      formsV4Submission_universal_d_VerticalAlignment as VerticalAlignment,
      formsV4Submission_universal_d_CellStyle as CellStyle,
      formsV4Submission_universal_d_BorderColors as BorderColors,
      formsV4Submission_universal_d_NullValue as NullValue,
      formsV4Submission_universal_d_ListValue as ListValue,
      formsV4Submission_universal_d_AudioData as AudioData,
      formsV4Submission_universal_d_OrderedListData as OrderedListData,
      formsV4Submission_universal_d_BulletedListData as BulletedListData,
      formsV4Submission_universal_d_BlockquoteData as BlockquoteData,
      formsV4Submission_universal_d_Metadata as Metadata,
      formsV4Submission_universal_d_DocumentStyle as DocumentStyle,
      formsV4Submission_universal_d_TextNodeStyle as TextNodeStyle,
      formsV4Submission_universal_d_RadioGroup as RadioGroup,
      formsV4Submission_universal_d_RadioGroupOption as RadioGroupOption,
      formsV4Submission_universal_d_RadioGroupCustomOption as RadioGroupCustomOption,
      formsV4Submission_universal_d_Dropdown as Dropdown,
      formsV4Submission_universal_d_DropdownOption as DropdownOption,
      formsV4Submission_universal_d_DropdownCustomOption as DropdownCustomOption,
      formsV4Submission_universal_d_DateTimeInput as DateTimeInput,
      formsV4Submission_universal_d_DateTimeInputDateTimeInputTypeOptionsOneOf as DateTimeInputDateTimeInputTypeOptionsOneOf,
      formsV4Submission_universal_d_DateFormatPart as DateFormatPart,
      formsV4Submission_universal_d_FirstDayOfWeek as FirstDayOfWeek,
      formsV4Submission_universal_d_DateTimeInputType as DateTimeInputType,
      formsV4Submission_universal_d_DateTimeOptions as DateTimeOptions,
      formsV4Submission_universal_d_DateOptions as DateOptions,
      formsV4Submission_universal_d_TimeOptions as TimeOptions,
      formsV4Submission_universal_d_DatePickerOptions as DatePickerOptions,
      formsV4Submission_universal_d_InputFieldNumberType as InputFieldNumberType,
      formsV4Submission_universal_d_InputFieldNumberErrorMessages as InputFieldNumberErrorMessages,
      formsV4Submission_universal_d_NumberComponentType as NumberComponentType,
      formsV4Submission_universal_d_NumberInput as NumberInput,
      formsV4Submission_universal_d_InputFieldBooleanType as InputFieldBooleanType,
      formsV4Submission_universal_d_InputFieldBooleanErrorMessages as InputFieldBooleanErrorMessages,
      formsV4Submission_universal_d_BooleanComponentType as BooleanComponentType,
      formsV4Submission_universal_d_Checkbox as Checkbox,
      formsV4Submission_universal_d_InputFieldArrayType as InputFieldArrayType,
      formsV4Submission_universal_d_ItemType as ItemType,
      formsV4Submission_universal_d_InputFieldIntegerType as InputFieldIntegerType,
      formsV4Submission_universal_d_InputFieldObjectType as InputFieldObjectType,
      formsV4Submission_universal_d_PropertiesTypePropertiesType as PropertiesTypePropertiesType,
      formsV4Submission_universal_d_ObjectTypePropertiesType as ObjectTypePropertiesType,
      formsV4Submission_universal_d_ObjectTypePropertiesTypePropertiesTypeOptionsOneOf as ObjectTypePropertiesTypePropertiesTypeOptionsOneOf,
      formsV4Submission_universal_d_InputFieldObjectErrorMessages as InputFieldObjectErrorMessages,
      formsV4Submission_universal_d_ArrayTypeArrayItems as ArrayTypeArrayItems,
      formsV4Submission_universal_d_ArrayTypeArrayItemsItemTypeOptionsOneOf as ArrayTypeArrayItemsItemTypeOptionsOneOf,
      formsV4Submission_universal_d_InputFieldArrayErrorMessages as InputFieldArrayErrorMessages,
      formsV4Submission_universal_d_ComponentType as ComponentType,
      formsV4Submission_universal_d_CheckboxGroup as CheckboxGroup,
      formsV4Submission_universal_d_MediaItem as MediaItem,
      formsV4Submission_universal_d_MediaItemMediaOneOf as MediaItemMediaOneOf,
      formsV4Submission_universal_d_Option as Option,
      formsV4Submission_universal_d_CustomOption as CustomOption,
      formsV4Submission_universal_d_WixFileComponentType as WixFileComponentType,
      formsV4Submission_universal_d_FileUpload as FileUpload,
      formsV4Submission_universal_d_UploadFileFormat as UploadFileFormat,
      formsV4Submission_universal_d_Signature as Signature,
      formsV4Submission_universal_d_PaymentComponentType as PaymentComponentType,
      formsV4Submission_universal_d_ProductCheckboxGroup as ProductCheckboxGroup,
      formsV4Submission_universal_d_ProductCheckboxGroupOption as ProductCheckboxGroupOption,
      formsV4Submission_universal_d_DonationInput as DonationInput,
      formsV4Submission_universal_d_DonationInputOption as DonationInputOption,
      formsV4Submission_universal_d_CommonCustomOption as CommonCustomOption,
      formsV4Submission_universal_d_NumberOfColumns as NumberOfColumns,
      formsV4Submission_universal_d_MultilineAddressComponentType as MultilineAddressComponentType,
      formsV4Submission_universal_d_MultilineAddress as MultilineAddress,
      formsV4Submission_universal_d_DefaultCountryConfigType as DefaultCountryConfigType,
      formsV4Submission_universal_d_AddressLine as AddressLine,
      formsV4Submission_universal_d_AddressLine2 as AddressLine2,
      formsV4Submission_universal_d_DefaultCountryConfig as DefaultCountryConfig,
      formsV4Submission_universal_d_DefaultCountryConfigOptionsOneOf as DefaultCountryConfigOptionsOneOf,
      formsV4Submission_universal_d_FieldsSettings as FieldsSettings,
      formsV4Submission_universal_d_InputType as InputType,
      formsV4Submission_universal_d__String as _String,
      formsV4Submission_universal_d__StringComponentTypeOptionsOneOf as _StringComponentTypeOptionsOneOf,
      formsV4Submission_universal_d__Number as _Number,
      formsV4Submission_universal_d__NumberComponentTypeOptionsOneOf as _NumberComponentTypeOptionsOneOf,
      formsV4Submission_universal_d__Boolean as _Boolean,
      formsV4Submission_universal_d__BooleanComponentTypeOptionsOneOf as _BooleanComponentTypeOptionsOneOf,
      formsV4Submission_universal_d__Array as _Array,
      formsV4Submission_universal_d__ArrayComponentTypeOptionsOneOf as _ArrayComponentTypeOptionsOneOf,
      formsV4Submission_universal_d__Object as _Object,
      formsV4Submission_universal_d__ObjectValidationOneOf as _ObjectValidationOneOf,
      formsV4Submission_universal_d_WixFile as WixFile,
      formsV4Submission_universal_d_WixFileComponentTypeOptionsOneOf as WixFileComponentTypeOptionsOneOf,
      formsV4Submission_universal_d_Payment as Payment,
      formsV4Submission_universal_d_PaymentComponentTypeOptionsOneOf as PaymentComponentTypeOptionsOneOf,
      formsV4Submission_universal_d_InputFieldMultilineAddress as InputFieldMultilineAddress,
      formsV4Submission_universal_d_InputFieldMultilineAddressComponentTypeOptionsOneOf as InputFieldMultilineAddressComponentTypeOptionsOneOf,
      formsV4Submission_universal_d_Header as Header,
      formsV4Submission_universal_d_RichText as RichText,
      formsV4Submission_universal_d_Target as Target,
      formsV4Submission_universal_d_ThankYouMessage as ThankYouMessage,
      formsV4Submission_universal_d_Redirect as Redirect,
      formsV4Submission_universal_d_FieldType as FieldType,
      formsV4Submission_universal_d_InputField as InputField,
      formsV4Submission_universal_d_InputFieldInputTypeOptionsOneOf as InputFieldInputTypeOptionsOneOf,
      formsV4Submission_universal_d_DisplayField as DisplayField,
      formsV4Submission_universal_d_DisplayFieldComponentTypeOneOf as DisplayFieldComponentTypeOneOf,
      formsV4Submission_universal_d_SubmitButton as SubmitButton,
      formsV4Submission_universal_d_SubmitButtonSubmitActionOneOf as SubmitButtonSubmitActionOneOf,
      formsV4Submission_universal_d_Step as Step,
      formsV4Submission_universal_d_FormLayout as FormLayout,
      formsV4Submission_universal_d_BreakPoint as BreakPoint,
      formsV4Submission_universal_d_ItemLayout as ItemLayout,
      formsV4Submission_universal_d_Margin as Margin,
      formsV4Submission_universal_d_Section as Section,
      formsV4Submission_universal_d_FormRule as FormRule,
      formsV4Submission_universal_d_OverrideEntityType as OverrideEntityType,
      formsV4Submission_universal_d_FormOverride as FormOverride,
      formsV4Submission_universal_d_FormProperties as FormProperties,
      formsV4Submission_universal_d_Kind as Kind,
      formsV4Submission_universal_d_PostSubmissionTriggers as PostSubmissionTriggers,
      formsV4Submission_universal_d_UpsertContact as UpsertContact,
      formsV4Submission_universal_d_FormFieldContactInfo as FormFieldContactInfo,
      formsV4Submission_universal_d_FormFieldContactInfoAdditionalInfoOneOf as FormFieldContactInfoAdditionalInfoOneOf,
      formsV4Submission_universal_d_EmailInfoTag as EmailInfoTag,
      formsV4Submission_universal_d_PhoneInfoTag as PhoneInfoTag,
      formsV4Submission_universal_d_Tag as Tag,
      formsV4Submission_universal_d_OptInLevel as OptInLevel,
      formsV4Submission_universal_d_ContactField as ContactField,
      formsV4Submission_universal_d_EmailInfo as EmailInfo,
      formsV4Submission_universal_d_PhoneInfo as PhoneInfo,
      formsV4Submission_universal_d_AddressInfo as AddressInfo,
      formsV4Submission_universal_d_CustomFieldInfo as CustomFieldInfo,
      formsV4Submission_universal_d_SubscriptionInfo as SubscriptionInfo,
      formsV4Submission_universal_d_NestedForm as NestedForm,
      formsV4Submission_universal_d_LimitationRule as LimitationRule,
      formsV4Submission_universal_d_SpamFilterProtectionLevel as SpamFilterProtectionLevel,
      formsV4Submission_universal_d_RequiredIndicatorProperties as RequiredIndicatorProperties,
      formsV4Submission_universal_d_CreateCheckoutFromSubmissionResponse as CreateCheckoutFromSubmissionResponse,
      formsV4Submission_universal_d_Checkout as Checkout,
      formsV4Submission_universal_d_IsFormSubmittableRequest as IsFormSubmittableRequest,
      formsV4Submission_universal_d_IsFormSubmittableResponse as IsFormSubmittableResponse,
      formsV4Submission_universal_d_UpsertContactFromSubmissionRequest as UpsertContactFromSubmissionRequest,
      formsV4Submission_universal_d_UpsertContactFromSubmissionResponse as UpsertContactFromSubmissionResponse,
      formsV4Submission_universal_d_SubmitContactResponse as SubmitContactResponse,
      IdentityType$1 as IdentityType,
      formsV4Submission_universal_d_SubmissionContactMapped as SubmissionContactMapped,
      formsV4Submission_universal_d_MarketingSubscriptionDetails as MarketingSubscriptionDetails,
      formsV4Submission_universal_d_MarketingSubscriptionDetailsOptInLevel as MarketingSubscriptionDetailsOptInLevel,
      formsV4Submission_universal_d_SubmissionContactMappingSkipped as SubmissionContactMappingSkipped,
      formsV4Submission_universal_d_CreateSubmissionRequest as CreateSubmissionRequest,
      formsV4Submission_universal_d_CreateSubmissionResponse as CreateSubmissionResponse,
      formsV4Submission_universal_d_CreateSubmissionBySubmitterRequest as CreateSubmissionBySubmitterRequest,
      formsV4Submission_universal_d_CreateSubmissionBySubmitterResponse as CreateSubmissionBySubmitterResponse,
      formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterRequest as BulkCreateSubmissionBySubmitterRequest,
      formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterData as BulkCreateSubmissionBySubmitterData,
      formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterResponse as BulkCreateSubmissionBySubmitterResponse,
      formsV4Submission_universal_d_BulkSubmissionResult as BulkSubmissionResult,
      formsV4Submission_universal_d_ItemMetadata as ItemMetadata,
      formsV4Submission_universal_d_ApplicationError as ApplicationError,
      formsV4Submission_universal_d_BulkActionMetadata as BulkActionMetadata,
      formsV4Submission_universal_d_GetSubmissionRequest as GetSubmissionRequest,
      formsV4Submission_universal_d_GetSubmissionResponse as GetSubmissionResponse,
      formsV4Submission_universal_d_GetSubmissionByCheckoutIdRequest as GetSubmissionByCheckoutIdRequest,
      formsV4Submission_universal_d_GetSubmissionByCheckoutIdResponse as GetSubmissionByCheckoutIdResponse,
      formsV4Submission_universal_d_UpdateSubmissionRequest as UpdateSubmissionRequest,
      formsV4Submission_universal_d_UpdateSubmissionResponse as UpdateSubmissionResponse,
      formsV4Submission_universal_d_ConfirmSubmissionRequest as ConfirmSubmissionRequest,
      formsV4Submission_universal_d_ConfirmSubmissionResponse as ConfirmSubmissionResponse,
      formsV4Submission_universal_d_FormSubmissionStatusUpdatedEvent as FormSubmissionStatusUpdatedEvent,
      formsV4Submission_universal_d_DeleteSubmissionRequest as DeleteSubmissionRequest,
      formsV4Submission_universal_d_DeleteSubmissionResponse as DeleteSubmissionResponse,
      formsV4Submission_universal_d_BulkDeleteSubmissionRequest as BulkDeleteSubmissionRequest,
      formsV4Submission_universal_d_BulkDeleteSubmissionResponse as BulkDeleteSubmissionResponse,
      formsV4Submission_universal_d_BulkDeleteSubmissionResult as BulkDeleteSubmissionResult,
      formsV4Submission_universal_d_RestoreSubmissionFromTrashBinRequest as RestoreSubmissionFromTrashBinRequest,
      formsV4Submission_universal_d_RestoreSubmissionFromTrashBinResponse as RestoreSubmissionFromTrashBinResponse,
      formsV4Submission_universal_d_RemoveSubmissionFromTrashBinRequest as RemoveSubmissionFromTrashBinRequest,
      formsV4Submission_universal_d_RemoveSubmissionFromTrashBinResponse as RemoveSubmissionFromTrashBinResponse,
      formsV4Submission_universal_d_RemovedSubmissionFromTrash as RemovedSubmissionFromTrash,
      formsV4Submission_universal_d_BulkRemoveSubmissionFromTrashBinRequest as BulkRemoveSubmissionFromTrashBinRequest,
      formsV4Submission_universal_d_BulkRemoveSubmissionFromTrashBinResponse as BulkRemoveSubmissionFromTrashBinResponse,
      formsV4Submission_universal_d_BulkRemoveSubmissionFromTrashBinResult as BulkRemoveSubmissionFromTrashBinResult,
      formsV4Submission_universal_d_ListDeletedSubmissionsRequest as ListDeletedSubmissionsRequest,
      formsV4Submission_universal_d_CursorPaging as CursorPaging,
      formsV4Submission_universal_d_ListDeletedSubmissionsResponse as ListDeletedSubmissionsResponse,
      formsV4Submission_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      formsV4Submission_universal_d_Cursors as Cursors,
      formsV4Submission_universal_d_GetDeletedSubmissionRequest as GetDeletedSubmissionRequest,
      formsV4Submission_universal_d_GetDeletedSubmissionResponse as GetDeletedSubmissionResponse,
      formsV4Submission_universal_d_QuerySubmissionRequest as QuerySubmissionRequest,
      formsV4Submission_universal_d_CursorQuery as CursorQuery,
      formsV4Submission_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      formsV4Submission_universal_d_Sorting as Sorting,
      formsV4Submission_universal_d_SortOrder as SortOrder,
      formsV4Submission_universal_d_QuerySubmissionResponse as QuerySubmissionResponse,
      formsV4Submission_universal_d_SearchSubmissionsByNamespaceRequest as SearchSubmissionsByNamespaceRequest,
      formsV4Submission_universal_d_CursorSearch as CursorSearch,
      formsV4Submission_universal_d_CursorSearchPagingMethodOneOf as CursorSearchPagingMethodOneOf,
      formsV4Submission_universal_d_SearchDetails as SearchDetails,
      formsV4Submission_universal_d_Mode as Mode,
      formsV4Submission_universal_d_SearchSubmissionsByNamespaceResponse as SearchSubmissionsByNamespaceResponse,
      formsV4Submission_universal_d_SearchSubmissionsByNamespaceForExportRequest as SearchSubmissionsByNamespaceForExportRequest,
      formsV4Submission_universal_d_SearchSubmissionsByNamespaceForExportResponse as SearchSubmissionsByNamespaceForExportResponse,
      formsV4Submission_universal_d_QuerySubmissionsByNamespaceRequest as QuerySubmissionsByNamespaceRequest,
      formsV4Submission_universal_d_QuerySubmissionsByNamespaceResponse as QuerySubmissionsByNamespaceResponse,
      formsV4Submission_universal_d_QuerySubmissionsByNamespaceForExportRequest as QuerySubmissionsByNamespaceForExportRequest,
      formsV4Submission_universal_d_QuerySubmissionsByNamespaceForExportResponse as QuerySubmissionsByNamespaceForExportResponse,
      formsV4Submission_universal_d_CountSubmissionsByFilterRequest as CountSubmissionsByFilterRequest,
      formsV4Submission_universal_d_CountSubmissionsByFilterResponse as CountSubmissionsByFilterResponse,
      formsV4Submission_universal_d_FormSubmissionsCount as FormSubmissionsCount,
      formsV4Submission_universal_d_CountSubmissionsRequest as CountSubmissionsRequest,
      formsV4Submission_universal_d_CountSubmissionsResponse as CountSubmissionsResponse,
      formsV4Submission_universal_d_CountDeletedSubmissionsRequest as CountDeletedSubmissionsRequest,
      formsV4Submission_universal_d_CountDeletedSubmissionsResponse as CountDeletedSubmissionsResponse,
      formsV4Submission_universal_d_FormDeletedSubmissionsCount as FormDeletedSubmissionsCount,
      formsV4Submission_universal_d_GetMediaUploadURLRequest as GetMediaUploadURLRequest,
      formsV4Submission_universal_d_GetMediaUploadURLResponse as GetMediaUploadURLResponse,
      formsV4Submission_universal_d_BulkMarkSubmissionsAsSeenRequest as BulkMarkSubmissionsAsSeenRequest,
      formsV4Submission_universal_d_BulkMarkSubmissionsAsSeenResponse as BulkMarkSubmissionsAsSeenResponse,
      formsV4Submission_universal_d_createCheckoutFromSubmission as createCheckoutFromSubmission,
      formsV4Submission_universal_d_CreateCheckoutFromSubmissionOptions as CreateCheckoutFromSubmissionOptions,
      formsV4Submission_universal_d_isFormSubmittable as isFormSubmittable,
      formsV4Submission_universal_d_upsertContactFromSubmission as upsertContactFromSubmission,
      formsV4Submission_universal_d_UpsertContactFromSubmissionOptions as UpsertContactFromSubmissionOptions,
      formsV4Submission_universal_d_createSubmission as createSubmission,
      formsV4Submission_universal_d_CreateSubmissionOptions as CreateSubmissionOptions,
      formsV4Submission_universal_d_createSubmissionBySubmitter as createSubmissionBySubmitter,
      formsV4Submission_universal_d_CreateSubmissionBySubmitterOptions as CreateSubmissionBySubmitterOptions,
      formsV4Submission_universal_d_bulkCreateSubmissionBySubmitter as bulkCreateSubmissionBySubmitter,
      formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterOptions as BulkCreateSubmissionBySubmitterOptions,
      formsV4Submission_universal_d_getSubmission as getSubmission,
      formsV4Submission_universal_d_getSubmissionByCheckoutId as getSubmissionByCheckoutId,
      formsV4Submission_universal_d_updateSubmission as updateSubmission,
      formsV4Submission_universal_d_UpdateSubmission as UpdateSubmission,
      formsV4Submission_universal_d_UpdateSubmissionOptions as UpdateSubmissionOptions,
      formsV4Submission_universal_d_confirmSubmission as confirmSubmission,
      formsV4Submission_universal_d_deleteSubmission as deleteSubmission,
      formsV4Submission_universal_d_DeleteSubmissionOptions as DeleteSubmissionOptions,
      formsV4Submission_universal_d_bulkDeleteSubmission as bulkDeleteSubmission,
      formsV4Submission_universal_d_BulkDeleteSubmissionOptions as BulkDeleteSubmissionOptions,
      formsV4Submission_universal_d_restoreSubmissionFromTrashBin as restoreSubmissionFromTrashBin,
      formsV4Submission_universal_d_removeSubmissionFromTrashBin as removeSubmissionFromTrashBin,
      formsV4Submission_universal_d_bulkRemoveSubmissionFromTrashBin as bulkRemoveSubmissionFromTrashBin,
      formsV4Submission_universal_d_BulkRemoveSubmissionFromTrashBinOptions as BulkRemoveSubmissionFromTrashBinOptions,
      formsV4Submission_universal_d_listDeletedSubmissions as listDeletedSubmissions,
      formsV4Submission_universal_d_ListDeletedSubmissionsOptions as ListDeletedSubmissionsOptions,
      formsV4Submission_universal_d_getDeletedSubmission as getDeletedSubmission,
      formsV4Submission_universal_d_querySubmission as querySubmission,
      formsV4Submission_universal_d_QuerySubmissionOptions as QuerySubmissionOptions,
      formsV4Submission_universal_d_searchSubmissionsByNamespace as searchSubmissionsByNamespace,
      formsV4Submission_universal_d_searchSubmissionsByNamespaceForExport as searchSubmissionsByNamespaceForExport,
      formsV4Submission_universal_d_querySubmissionsByNamespace as querySubmissionsByNamespace,
      formsV4Submission_universal_d_QuerySubmissionsByNamespaceOptions as QuerySubmissionsByNamespaceOptions,
      formsV4Submission_universal_d_SubmissionsQueryResult as SubmissionsQueryResult,
      formsV4Submission_universal_d_SubmissionsQueryBuilder as SubmissionsQueryBuilder,
      formsV4Submission_universal_d_querySubmissionsByNamespaceForExport as querySubmissionsByNamespaceForExport,
      formsV4Submission_universal_d_countSubmissionsByFilter as countSubmissionsByFilter,
      formsV4Submission_universal_d_CountSubmissionsByFilterOptions as CountSubmissionsByFilterOptions,
      formsV4Submission_universal_d_countSubmissions as countSubmissions,
      formsV4Submission_universal_d_CountSubmissionsOptions as CountSubmissionsOptions,
      formsV4Submission_universal_d_countDeletedSubmissions as countDeletedSubmissions,
      formsV4Submission_universal_d_CountDeletedSubmissionsOptions as CountDeletedSubmissionsOptions,
      formsV4Submission_universal_d_getMediaUploadUrl as getMediaUploadUrl,
      formsV4Submission_universal_d_bulkMarkSubmissionsAsSeen as bulkMarkSubmissionsAsSeen,
    };
  }
  
  interface ValidateSubmissionRequest extends ValidateSubmissionRequestActionsOneOf {
      /** Data for updating an existing submission. */
      updateOptions?: UpdateOptions;
      /** Submission to validate. */
      submission: FormSubmission;
      /** Whether to create or update the submission. */
      actionType: ActionType;
  }
  /** @oneof */
  interface ValidateSubmissionRequestActionsOneOf {
      /** Data for updating an existing submission. */
      updateOptions?: UpdateOptions;
  }
  /** Form submission that was created or retrieved. */
  interface FormSubmission {
      /**
       * Submission ID.
       * @readonly
       */
      _id?: string | null;
      /** ID of the form which the submission belongs to. */
      formId?: string;
      /**
       * The app which the form submissions belong to. For example, the namespace for the Wix Forms app is `wix.form_app.form`. Call `Get Submission` to retrieve the namespace.
       * @readonly
       */
      namespace?: string;
      /**
       * Status of the submission.
       * - `PENDING`: A submission is created, but has not yet been recorded in the Wix Forms collection.
       * - `PAYMENT_WAITING`: A form submission requiring payment is created.
       * - `PAYMENT_CANCELED`: An order of a form submission is canceled.
       * - `CONFIRMED`: A submission is recorded in the Wix Forms collection.
       */
      status?: SubmissionStatus;
      /** Submission values where `key` is the form field and `value` is the data submitted for the given field. */
      submissions?: Record<string, any>;
      /**
       * Date and time the form submission was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the form submission was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Revision number, which increments by 1 each time the form submission is updated. To prevent conflicting changes, the existing revision must be used when updating a form submission.
       * @readonly
       */
      revision?: string | null;
      /**
       * ID of the visitor that submitted the form.
       * @readonly
       */
      submitter?: Submitter;
      /** Whether a site owner marked a submission as "seen". */
      seen?: boolean;
      /** Data extension object that holds users' and apps' fields. */
      extendedFields?: ExtendedFields;
      /**
       * Order details. <br>
       * <b>Note</b>: This object is only applicable when submittng a form in the Wix Payments app.
       */
      orderDetails?: OrderDetails;
  }
  enum SubmissionStatus {
      UNDEFINED = "UNDEFINED",
      PENDING = "PENDING",
      CONFIRMED = "CONFIRMED",
      PAYMENT_WAITING = "PAYMENT_WAITING",
      PAYMENT_CANCELED = "PAYMENT_CANCELED"
  }
  interface Submitter extends SubmitterSubmitterOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Application ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
  }
  /** @oneof */
  interface SubmitterSubmitterOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** Application ID. */
      applicationId?: string | null;
      /** User ID. */
      userId?: string | null;
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
  interface OrderDetails {
      /**
       * ID of the order related to submission (only applicable if a form has payments).
       * @readonly
       */
      orderId?: string | null;
      /**
       * Order number.
       * @readonly
       */
      number?: string | null;
      /**
       * Currency.
       * @readonly
       */
      currency?: string | null;
      /**
       * Item subtotal.
       * @readonly
       */
      itemSubtotal?: string;
      /**
       * ID of the checkout related to submission (only applicable if a form has payments).
       * @readonly
       */
      checkoutId?: string;
  }
  enum ActionType {
      UNKNOWN_ACTION = "UNKNOWN_ACTION",
      UPDATE = "UPDATE",
      CREATE = "CREATE"
  }
  interface UpdateOptions {
      /** Submission to update. */
      currentSubmission?: FormSubmission;
  }
  interface ValidateSubmissionResponse {
      /**
       * List of validation errors. <br>
       * If there are no validation errors, returns an empty array.
       */
      errors?: SubmissionValidationError[];
  }
  interface SubmissionValidationError extends SubmissionValidationErrorErrorMessageOneOf {
      /** Predefined error type. */
      errorType?: SubmissionErrorType;
      /** Custom error message. The message is displayed instead of an error type. */
      customErrorMessage?: string;
      /** Path indicating the source of the error, such as `form.fields.target`. */
      errorPath?: string;
      /** Additional error parameters. */
      params?: Record<string, any> | null;
  }
  /** @oneof */
  interface SubmissionValidationErrorErrorMessageOneOf {
      /** Predefined error type. */
      errorType?: SubmissionErrorType;
      /** Custom error message. The message is displayed instead of an error type. */
      customErrorMessage?: string;
  }
  enum SubmissionErrorType {
      /** Error is unknown or not suitable for any of options bellow */
      UNKNOWN_ERROR = "UNKNOWN_ERROR",
      /** Type of submitted value is incorrect */
      TYPE_ERROR = "TYPE_ERROR",
      /** Value is required to be provided */
      REQUIRED_VALUE_ERROR = "REQUIRED_VALUE_ERROR",
      /** Value contains additional properties not expected in schema */
      UNKNOWN_VALUE_ERROR = "UNKNOWN_VALUE_ERROR",
      /** Text value exceeds max length */
      MAX_LENGTH_ERROR = "MAX_LENGTH_ERROR",
      /** Text value not reaches min length */
      MIN_LENGTH_ERROR = "MIN_LENGTH_ERROR",
      /** Text value not applicable for expected pattern */
      PATTERN_ERROR = "PATTERN_ERROR",
      /** Text value not applicable for expected format */
      FORMAT_ERROR = "FORMAT_ERROR",
      /** Number value is too big */
      MAX_VALUE_ERROR = "MAX_VALUE_ERROR",
      /** Number value is too small */
      MIN_VALUE_ERROR = "MIN_VALUE_ERROR",
      /** Number value is not multiple of expected number */
      MULTIPLE_OF_VALUE_ERROR = "MULTIPLE_OF_VALUE_ERROR",
      /** Array value has too much items */
      MIN_ITEMS_ERROR = "MIN_ITEMS_ERROR",
      /** Array value has not enough items */
      MAX_ITEMS_ERROR = "MAX_ITEMS_ERROR",
      /** Value is not in list of allowed values */
      NOT_ALLOWED_VALUE_ERROR = "NOT_ALLOWED_VALUE_ERROR",
      /** Submitted form is disabled */
      DISABLED_FORM_ERROR = "DISABLED_FORM_ERROR"
  }
  interface FormSubmissionSpiExtensionConfig {
      /** URI where the service plugin Implementer is deployed */
      deploymentUri?: SpiBaseUri;
      /** Namespace names. */
      namespaceConfigs?: FormsSubmissionsExtensionNamespaceConfig[];
  }
  interface SpiBaseUri {
      /** URI that will be used by the host to call the implementer. The path-suffix defined on the method will be appended to it */
      baseUri?: string;
      /** override method mappings per method */
      alternativeUris?: AlternativeUri[];
  }
  interface AlternativeUri {
      /** name of the method as it appears in the proto */
      methodName?: string;
      /** absolute uri that will be used by the host to call that method. The path-suffix mapped from the method http option will NOT be appended to this URI. For TPAs. it must be https */
      absoluteUri?: string;
  }
  interface FormsSubmissionsExtensionNamespaceConfig {
      /** Targeted namespace, with what submissions should trigger defined methods. */
      namespace?: string;
      /** Enable submission validation. */
      submissionValidationEnabled?: boolean;
  }
  /**
   * this message is not directly used by any service,
   * it exists to describe the expected parameters that SHOULD be provided to invoked Velo methods as part of open-platform.
   * e.g. SPIs, event-handlers, etc..
   * NOTE: this context object MUST be provided as the last argument in each Velo method signature.
   *
   * Example:
   * ```typescript
   * export function wixStores_onOrderCanceled(event: OrderCanceledEvent, context: Context) {
   * ...
   * }
   * ```
   */
  interface Context {
      /** A unique identifier for each request. Can be used for logging / troubleshooting */
      requestId?: string | null;
      /** 3 capital letters string representing a currency according to ISO-4217 */
      currency?: string | null;
      /** The identification type and identity data */
      identity?: IdentificationData;
      /** A string representing a language and region in the format of "xx-XX". First 2 letters represent the language code according to ISO 639-1. This is followed by a dash "-", and then a by 2 capital letters representing the region according to ISO 3166-2 */
      languages?: string[];
      /** App instance ID of SPI in context */
      instanceId?: string | null;
  }
  enum IdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
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
  /**
   * > **Notes:** <br>
   * > - The Form Submission service plugin is only available in Wix Studio and Editor X.
   * > - The Form Submission service plugin only works with the Wix Forms app. Call [GetAppInstance](https://dev.wix.com/docs/rest/api-reference/app-management/apps/app-instance/get-app-instance) to confirm that the app named `wix_forms` is installed on the site.
   * <br>
   * Validates a submission. <br>
   * Validates a site visitor's form submission and returns any validation violations. <br>
   * Site visitors can see the validation violations on their forms. For example, invalid fields are highlighted in red.
   * @public
   * @documentationMaturity preview
   * @requiredField options.actionType
   * @requiredField options.submission
   */
  function validateSubmission(options?: ValidateSubmissionOptions): Promise<ValidateSubmissionResponse>;
  interface ValidateSubmissionOptions extends ValidateSubmissionRequestActionsOneOf {
      /** Submission to validate. */
      submission: FormSubmission;
      /** Whether to create or update the submission. */
      actionType: ActionType;
      /** Data for updating an existing submission. */
      updateOptions?: UpdateOptions;
  }
  
  type interfacesFormsV4SubmissionExtension_universal_d_ValidateSubmissionRequest = ValidateSubmissionRequest;
  type interfacesFormsV4SubmissionExtension_universal_d_ValidateSubmissionRequestActionsOneOf = ValidateSubmissionRequestActionsOneOf;
  type interfacesFormsV4SubmissionExtension_universal_d_FormSubmission = FormSubmission;
  type interfacesFormsV4SubmissionExtension_universal_d_SubmissionStatus = SubmissionStatus;
  const interfacesFormsV4SubmissionExtension_universal_d_SubmissionStatus: typeof SubmissionStatus;
  type interfacesFormsV4SubmissionExtension_universal_d_Submitter = Submitter;
  type interfacesFormsV4SubmissionExtension_universal_d_SubmitterSubmitterOneOf = SubmitterSubmitterOneOf;
  type interfacesFormsV4SubmissionExtension_universal_d_ExtendedFields = ExtendedFields;
  type interfacesFormsV4SubmissionExtension_universal_d_OrderDetails = OrderDetails;
  type interfacesFormsV4SubmissionExtension_universal_d_ActionType = ActionType;
  const interfacesFormsV4SubmissionExtension_universal_d_ActionType: typeof ActionType;
  type interfacesFormsV4SubmissionExtension_universal_d_UpdateOptions = UpdateOptions;
  type interfacesFormsV4SubmissionExtension_universal_d_ValidateSubmissionResponse = ValidateSubmissionResponse;
  type interfacesFormsV4SubmissionExtension_universal_d_SubmissionValidationError = SubmissionValidationError;
  type interfacesFormsV4SubmissionExtension_universal_d_SubmissionValidationErrorErrorMessageOneOf = SubmissionValidationErrorErrorMessageOneOf;
  type interfacesFormsV4SubmissionExtension_universal_d_SubmissionErrorType = SubmissionErrorType;
  const interfacesFormsV4SubmissionExtension_universal_d_SubmissionErrorType: typeof SubmissionErrorType;
  type interfacesFormsV4SubmissionExtension_universal_d_FormSubmissionSpiExtensionConfig = FormSubmissionSpiExtensionConfig;
  type interfacesFormsV4SubmissionExtension_universal_d_SpiBaseUri = SpiBaseUri;
  type interfacesFormsV4SubmissionExtension_universal_d_AlternativeUri = AlternativeUri;
  type interfacesFormsV4SubmissionExtension_universal_d_FormsSubmissionsExtensionNamespaceConfig = FormsSubmissionsExtensionNamespaceConfig;
  type interfacesFormsV4SubmissionExtension_universal_d_Context = Context;
  type interfacesFormsV4SubmissionExtension_universal_d_IdentityType = IdentityType;
  const interfacesFormsV4SubmissionExtension_universal_d_IdentityType: typeof IdentityType;
  type interfacesFormsV4SubmissionExtension_universal_d_IdentificationData = IdentificationData;
  type interfacesFormsV4SubmissionExtension_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  const interfacesFormsV4SubmissionExtension_universal_d_validateSubmission: typeof validateSubmission;
  type interfacesFormsV4SubmissionExtension_universal_d_ValidateSubmissionOptions = ValidateSubmissionOptions;
  namespace interfacesFormsV4SubmissionExtension_universal_d {
    export {
      interfacesFormsV4SubmissionExtension_universal_d_ValidateSubmissionRequest as ValidateSubmissionRequest,
      interfacesFormsV4SubmissionExtension_universal_d_ValidateSubmissionRequestActionsOneOf as ValidateSubmissionRequestActionsOneOf,
      interfacesFormsV4SubmissionExtension_universal_d_FormSubmission as FormSubmission,
      interfacesFormsV4SubmissionExtension_universal_d_SubmissionStatus as SubmissionStatus,
      interfacesFormsV4SubmissionExtension_universal_d_Submitter as Submitter,
      interfacesFormsV4SubmissionExtension_universal_d_SubmitterSubmitterOneOf as SubmitterSubmitterOneOf,
      interfacesFormsV4SubmissionExtension_universal_d_ExtendedFields as ExtendedFields,
      interfacesFormsV4SubmissionExtension_universal_d_OrderDetails as OrderDetails,
      interfacesFormsV4SubmissionExtension_universal_d_ActionType as ActionType,
      interfacesFormsV4SubmissionExtension_universal_d_UpdateOptions as UpdateOptions,
      interfacesFormsV4SubmissionExtension_universal_d_ValidateSubmissionResponse as ValidateSubmissionResponse,
      interfacesFormsV4SubmissionExtension_universal_d_SubmissionValidationError as SubmissionValidationError,
      interfacesFormsV4SubmissionExtension_universal_d_SubmissionValidationErrorErrorMessageOneOf as SubmissionValidationErrorErrorMessageOneOf,
      interfacesFormsV4SubmissionExtension_universal_d_SubmissionErrorType as SubmissionErrorType,
      interfacesFormsV4SubmissionExtension_universal_d_FormSubmissionSpiExtensionConfig as FormSubmissionSpiExtensionConfig,
      interfacesFormsV4SubmissionExtension_universal_d_SpiBaseUri as SpiBaseUri,
      interfacesFormsV4SubmissionExtension_universal_d_AlternativeUri as AlternativeUri,
      interfacesFormsV4SubmissionExtension_universal_d_FormsSubmissionsExtensionNamespaceConfig as FormsSubmissionsExtensionNamespaceConfig,
      interfacesFormsV4SubmissionExtension_universal_d_Context as Context,
      interfacesFormsV4SubmissionExtension_universal_d_IdentityType as IdentityType,
      interfacesFormsV4SubmissionExtension_universal_d_IdentificationData as IdentificationData,
      interfacesFormsV4SubmissionExtension_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      interfacesFormsV4SubmissionExtension_universal_d_validateSubmission as validateSubmission,
      interfacesFormsV4SubmissionExtension_universal_d_ValidateSubmissionOptions as ValidateSubmissionOptions,
    };
  }
  
  export { formsV4FormSpamSubmissionReport_universal_d as formSpamSubmissionReports, formsV4SpamSubmission_universal_d as spamSubmissions, formsV4Submission_universal_d as submissions, interfacesFormsV4SubmissionExtension_universal_d as submissionsExtensionSpi };
}
