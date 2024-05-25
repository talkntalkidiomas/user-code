declare module "wix-forms.v2" {
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    /** Form submission that was created or retrieved. */
    interface FormSubmission {
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
         * - `CONFIRMED`: When a submission is recorded in the submissions table of the forms dashboard.
         */
        status?: SubmissionStatus;
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
         * ID of the creator of the form submission.
         * @readonly
         */
        submitter?: Submitter;
        /** Whether the submission was read by a site collaborator with permissions to manage submissions. */
        seen?: boolean;
        /**
         * ID of the order related to submission (applicable if form has payments added).
         * @readonly
         */
        orderId?: string | null;
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
        /** App ID. */
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
        /** App ID. */
        externalAppId?: string | null;
    }
    interface DomainEvent extends DomainEventBodyOneOf {
        createdEvent?: EntityCreatedEvent;
        updatedEvent?: EntityUpdatedEvent;
        deletedEvent?: EntityDeletedEvent;
        actionEvent?: ActionEvent;
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
    interface DomainEventBodyOneOf {
        createdEvent?: EntityCreatedEvent;
        updatedEvent?: EntityUpdatedEvent;
        deletedEvent?: EntityDeletedEvent;
        actionEvent?: ActionEvent;
    }
    interface EntityCreatedEvent {
        entityAsJson?: string;
    }
    interface EntityUpdatedEvent {
        /**
         * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
         * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
         * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
         */
        currentEntityAsJson?: string;
    }
    interface EntityDeletedEvent {
    }
    interface ActionEvent {
        bodyAsJson?: string;
    }
    interface Empty {
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
        /** Submission to create. */
        submission: FormSubmission;
        /** Captcha token. */
        captchaToken?: string | null;
    }
    interface CreateSubmissionResponse {
        /** The created submission. */
        submission?: FormSubmission;
        /** Checkout ID (applicable for form involving payments). */
        checkoutId?: string | null;
    }
    interface CreateSubmissionBySubmitterRequest {
        /** Submission to create. */
        submission: FormSubmission;
        /** When set, spam validation will be enabled. */
        spamValidationEnabled?: boolean;
    }
    interface CreateSubmissionBySubmitterResponse {
        /** The created submission. */
        submission?: FormSubmission;
    }
    interface BulkCreateSubmissionBySubmitterRequest {
        /** Form id. Restricts submissions creation for a single form. */
        formId: string;
        /** Submissions to create. */
        submissions?: FormSubmission[];
        /** When set, items will be returned on successful create. */
        returnEntity?: boolean;
        /** When set, spam validation will be enabled. */
        spamValidationEnabled?: boolean;
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
        item?: FormSubmission;
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
        submission?: FormSubmission;
    }
    interface UpdateSubmissionRequest {
        /** Submission to update. */
        submission: FormSubmission;
    }
    interface UpdateSubmissionResponse {
        /** The updated submission. */
        submission?: FormSubmission;
    }
    interface ConfirmSubmissionRequest {
        /** Submission ID to confirm. */
        submissionId: string;
    }
    interface ConfirmSubmissionResponse {
        /** The confirmed submission. */
        submission?: FormSubmission;
    }
    interface DeleteSubmissionRequest {
        /** ID of the submission to delete. */
        submissionId: string;
    }
    interface DeleteSubmissionResponse {
    }
    interface QuerySubmissionRequest {
        /** Query options. */
        query: CursorQuery;
        /** Whether to return only your own submissions. If `false`, returns all submissions based on query filters. */
        onlyYourOwn?: boolean;
    }
    interface CursorQuery extends CursorQueryPagingMethodOneOf {
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging;
        /**
         * Filter object.
         *
         * See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more information.
         */
        filter?: Record<string, any> | null;
        /** Sort object. */
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
    interface QuerySubmissionResponse {
        /** The retrieved submissions. */
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
    interface QuerySubmissionsByNamespaceRequest {
        /** Query options. */
        query: CursorQuery;
        /** Whether to return only your own submissions. If `false`, returns all submissions based on query filters. */
        onlyYourOwn?: boolean;
    }
    interface QuerySubmissionsByNamespaceResponse {
        /** The retrieved Submissions. */
        submissions?: FormSubmission[];
        /** Paging metadata. */
        metadata?: CursorPagingMetadata;
    }
    interface CountSubmissionsRequest {
        /** Form IDs. */
        formIds: string[];
        /** Identifies the app which the form submissions belong to. For example, the namespace for the Wix Forms App is `"wix.form_app.form"`. The namespace of a submission can be retrieved using the Get Submission endpoint. */
        namespace: string;
    }
    interface CountSubmissionsResponse {
        /** Forms submission count. */
        formsSubmissionsCount?: FormSubmissionsCount[];
    }
    interface FormSubmissionsCount {
        /** Form ID. */
        formId?: string;
        /** Total number of submissions. */
        totalCount?: number;
        /** Number of submissions that haven't yet been seen by site collaborators with manage submission permissions. */
        unseenCount?: number;
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
    }
    interface BulkMarkSubmissionsAsSeenRequest {
        /** Submission IDs to mark as seen. */
        ids: string[];
        /** ID of the form which the submissions belongs to. */
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
    interface UpsertContactFromSubmissionOptions {
        /** Optional contact id to which submission should be mapped. */
        contactId?: string | null;
        /** Indicates contact has verified primary email. */
        emailVerified?: boolean;
    }
    /**
     * Creates a new submission.
     * @param submission - Submission to create.
     * @public
     * @documentationMaturity preview
     * @requiredField submission
     * @requiredField submission.formId
     */
    function createSubmission(submission: FormSubmission, options?: CreateSubmissionOptions): Promise<CreateSubmissionResponse>;
    interface CreateSubmissionOptions {
        /** Captcha token. */
        captchaToken?: string | null;
    }
    interface CreateSubmissionBySubmitterOptions {
        /** When set, spam validation will be enabled. */
        spamValidationEnabled?: boolean;
    }
    interface BulkCreateSubmissionBySubmitterOptions {
        /** Submissions to create. */
        submissions?: FormSubmission[];
        /** When set, items will be returned on successful create. */
        returnEntity?: boolean;
        /** When set, spam validation will be enabled. */
        spamValidationEnabled?: boolean;
    }
    /**
     * Retrieves a submission by ID.
     *
     * This function is not a universal function and runs only on the backend.
     * @param submissionId - ID of the submission to retrieve.
     * @public
     * @documentationMaturity preview
     * @requiredField submissionId
     * @adminMethod
     * @returns The retrieved submission.
     */
    function getSubmission(submissionId: string): Promise<FormSubmission>;
    /**
     * Updates a submission.
     *
     * Each time the submission is updated, `revision` increments by 1. The existing `revision` must be included when updating the submission. This ensures you're working with the latest submission information, and prevents unintended overwrites.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Submission ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField submission
     * @requiredField submission.formId
     * @requiredField submission.revision
     * @param submission - Submission to update.
     * @adminMethod
     * @returns The updated submission.
     */
    function updateSubmission(_id: string | null, submission: UpdateSubmission, options?: UpdateSubmissionOptions): Promise<FormSubmission>;
    interface UpdateSubmission {
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
         * - `CONFIRMED`: When a submission is recorded in the submissions table of the forms dashboard.
         */
        status?: SubmissionStatus;
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
         * ID of the creator of the form submission.
         * @readonly
         */
        submitter?: Submitter;
        /** Whether the submission was read by a site collaborator with permissions to manage submissions. */
        seen?: boolean;
        /**
         * ID of the order related to submission (applicable if form has payments added).
         * @readonly
         */
        orderId?: string | null;
    }
    interface UpdateSubmissionOptions {
    }
    /**
     * Confirms a submission.
     *
     *
     * You can only confirm a submission that has a `PENDING` status. The default status when a submission is created is `CONFIRMED`. You can change the default status for individual submissions using the [`createSubmission()`](#createsubmission) or [`updateSubmission()`](#updatesubmission) methods.
     *
     * This function is not a universal function and runs only on the backend.
     * @param submissionId - Submission ID to confirm.
     * @public
     * @documentationMaturity preview
     * @requiredField submissionId
     * @adminMethod
     */
    function confirmSubmission(submissionId: string): Promise<ConfirmSubmissionResponse>;
    /**
     * Deletes a submission by ID.
     *
     * This function is not a universal function and runs only on the backend.
     * @param submissionId - ID of the submission to delete.
     * @public
     * @documentationMaturity preview
     * @requiredField submissionId
     * @adminMethod
     */
    function deleteSubmission(submissionId: string): Promise<void>;
    interface QuerySubmissionOptions {
        /** Whether to return only your own submissions. If `false`, returns all submissions based on query filters. */
        onlyYourOwn?: boolean;
    }
    /**
     * Creates a query to retrieve a list of submissions.
     *
     * The `querySubmissionsByNamespace()` method builds a query to retrieve a list of submissions from the specified namespace and returns a [`SubmissionsQueryBuilder`](#submissionsquerybuilder) object.
     * >**Note:** You can only query submissions from a specified namespace. Use the query filter on the `namespace` field, otherwise you will receive an error.
     *
     * The returned object contains the query definition, which is typically used to run the query using the [`find()`](#submissionsquerybuilder/find) method.
     *
     * You can refine the query by chaining `SubmissionsQueryBuilder` methods onto the query. `SubmissionsQueryBuilder` methods enable you to sort, filter, and control the results that `querySubmissionsByNamespace()` returns.
     *
     * The following `SubmissionsQueryBuilder` methods are supported for `querySubmissionsByNamespace()`. For a full description of the Submissions object, see the object returned for the [`items`](#submissionsqueryresult/items) property in [`SubmissionsQueryResult`](#submissionsqueryresult).
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @param options - Query options.
     * @adminMethod
     */
    function querySubmissionsByNamespace(options?: QuerySubmissionsByNamespaceOptions): SubmissionsQueryBuilder;
    interface QuerySubmissionsByNamespaceOptions {
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
        eq: (propertyName: "_id" | "formId" | "namespace" | "status" | "_createdDate" | "_updatedDate", value: any) => SubmissionsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "formId" | "namespace" | "status" | "_createdDate" | "_updatedDate", value: any) => SubmissionsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "_createdDate" | "_updatedDate", value: any) => SubmissionsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: "_createdDate" | "_updatedDate", value: any) => SubmissionsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "_createdDate" | "_updatedDate", value: any) => SubmissionsQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "_id" | "formId" | "namespace" | "status" | "_createdDate" | "_updatedDate", value: any) => SubmissionsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"_id" | "formId" | "namespace" | "status" | "_createdDate" | "_updatedDate">) => SubmissionsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"_id" | "formId" | "namespace" | "status" | "_createdDate" | "_updatedDate">) => SubmissionsQueryBuilder;
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
     * Counts the number of submissions belonging to the specified forms.
     *
     * This function is not a universal function and runs only on the backend.
     * @param formIds - Form IDs.
     * @param namespace - Identifies the app which the form submissions belong to. For example, the namespace for the Wix Forms App is `"wix.form_app.form"`. The namespace of a submission can be retrieved using the Get Submission endpoint.
     * @public
     * @documentationMaturity preview
     * @requiredField formIds
     * @requiredField namespace
     * @adminMethod
     */
    function countSubmissions(formIds: string[], namespace: string): Promise<CountSubmissionsResponse>;
    /**
     * Retrieves a URL, generated by Media Manager, to use when creating a submission with a field for uploading files.
     *
     * @param formId - Form ID.
     * @param filename - Name of file to upload.
     * @param mimeType - [Mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#) of file to upload.
     *
     * For example, `'image/png'`
     * @public
     * @documentationMaturity preview
     * @requiredField filename
     * @requiredField formId
     * @requiredField mimeType
     */
    function getMediaUploadUrl(formId: string, filename: string, mimeType: string): Promise<GetMediaUploadURLResponse>;
    /**
     * Marks form submissions as seen by site collaborators with manage submission permissions.
     *
     * This function is not a universal function and runs only on the backend.
     * @param ids - Submission IDs to mark as seen.
     * @param formId - ID of the form which the submissions belongs to.
     * @public
     * @documentationMaturity preview
     * @requiredField formId
     * @requiredField ids
     * @adminMethod
     */
    function bulkMarkSubmissionsAsSeen(ids: string[], formId: string): Promise<void>;
    const formsV4Submission_universal_d___debug: typeof __debug;
    type formsV4Submission_universal_d_FormSubmission = FormSubmission;
    type formsV4Submission_universal_d_SubmissionStatus = SubmissionStatus;
    const formsV4Submission_universal_d_SubmissionStatus: typeof SubmissionStatus;
    type formsV4Submission_universal_d_Owner = Owner;
    type formsV4Submission_universal_d_OwnerOwnerOneOf = OwnerOwnerOneOf;
    type formsV4Submission_universal_d_Submitter = Submitter;
    type formsV4Submission_universal_d_SubmitterSubmitterOneOf = SubmitterSubmitterOneOf;
    type formsV4Submission_universal_d_DomainEvent = DomainEvent;
    type formsV4Submission_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
    type formsV4Submission_universal_d_EntityCreatedEvent = EntityCreatedEvent;
    type formsV4Submission_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
    type formsV4Submission_universal_d_EntityDeletedEvent = EntityDeletedEvent;
    type formsV4Submission_universal_d_ActionEvent = ActionEvent;
    type formsV4Submission_universal_d_Empty = Empty;
    type formsV4Submission_universal_d_UpsertContactFromSubmissionRequest = UpsertContactFromSubmissionRequest;
    type formsV4Submission_universal_d_UpsertContactFromSubmissionResponse = UpsertContactFromSubmissionResponse;
    type formsV4Submission_universal_d_SubmitContactResponse = SubmitContactResponse;
    type formsV4Submission_universal_d_IdentityType = IdentityType;
    const formsV4Submission_universal_d_IdentityType: typeof IdentityType;
    type formsV4Submission_universal_d_SubmissionContactMapped = SubmissionContactMapped;
    type formsV4Submission_universal_d_CreateSubmissionRequest = CreateSubmissionRequest;
    type formsV4Submission_universal_d_CreateSubmissionResponse = CreateSubmissionResponse;
    type formsV4Submission_universal_d_CreateSubmissionBySubmitterRequest = CreateSubmissionBySubmitterRequest;
    type formsV4Submission_universal_d_CreateSubmissionBySubmitterResponse = CreateSubmissionBySubmitterResponse;
    type formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterRequest = BulkCreateSubmissionBySubmitterRequest;
    type formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterResponse = BulkCreateSubmissionBySubmitterResponse;
    type formsV4Submission_universal_d_BulkSubmissionResult = BulkSubmissionResult;
    type formsV4Submission_universal_d_ItemMetadata = ItemMetadata;
    type formsV4Submission_universal_d_ApplicationError = ApplicationError;
    type formsV4Submission_universal_d_BulkActionMetadata = BulkActionMetadata;
    type formsV4Submission_universal_d_GetSubmissionRequest = GetSubmissionRequest;
    type formsV4Submission_universal_d_GetSubmissionResponse = GetSubmissionResponse;
    type formsV4Submission_universal_d_UpdateSubmissionRequest = UpdateSubmissionRequest;
    type formsV4Submission_universal_d_UpdateSubmissionResponse = UpdateSubmissionResponse;
    type formsV4Submission_universal_d_ConfirmSubmissionRequest = ConfirmSubmissionRequest;
    type formsV4Submission_universal_d_ConfirmSubmissionResponse = ConfirmSubmissionResponse;
    type formsV4Submission_universal_d_DeleteSubmissionRequest = DeleteSubmissionRequest;
    type formsV4Submission_universal_d_DeleteSubmissionResponse = DeleteSubmissionResponse;
    type formsV4Submission_universal_d_QuerySubmissionRequest = QuerySubmissionRequest;
    type formsV4Submission_universal_d_CursorQuery = CursorQuery;
    type formsV4Submission_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
    type formsV4Submission_universal_d_Sorting = Sorting;
    type formsV4Submission_universal_d_SortOrder = SortOrder;
    const formsV4Submission_universal_d_SortOrder: typeof SortOrder;
    type formsV4Submission_universal_d_CursorPaging = CursorPaging;
    type formsV4Submission_universal_d_QuerySubmissionResponse = QuerySubmissionResponse;
    type formsV4Submission_universal_d_CursorPagingMetadata = CursorPagingMetadata;
    type formsV4Submission_universal_d_Cursors = Cursors;
    type formsV4Submission_universal_d_QuerySubmissionsByNamespaceRequest = QuerySubmissionsByNamespaceRequest;
    type formsV4Submission_universal_d_QuerySubmissionsByNamespaceResponse = QuerySubmissionsByNamespaceResponse;
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
    type formsV4Submission_universal_d_UpsertContactFromSubmissionOptions = UpsertContactFromSubmissionOptions;
    const formsV4Submission_universal_d_createSubmission: typeof createSubmission;
    type formsV4Submission_universal_d_CreateSubmissionOptions = CreateSubmissionOptions;
    type formsV4Submission_universal_d_CreateSubmissionBySubmitterOptions = CreateSubmissionBySubmitterOptions;
    type formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterOptions = BulkCreateSubmissionBySubmitterOptions;
    const formsV4Submission_universal_d_getSubmission: typeof getSubmission;
    const formsV4Submission_universal_d_updateSubmission: typeof updateSubmission;
    type formsV4Submission_universal_d_UpdateSubmission = UpdateSubmission;
    type formsV4Submission_universal_d_UpdateSubmissionOptions = UpdateSubmissionOptions;
    const formsV4Submission_universal_d_confirmSubmission: typeof confirmSubmission;
    const formsV4Submission_universal_d_deleteSubmission: typeof deleteSubmission;
    type formsV4Submission_universal_d_QuerySubmissionOptions = QuerySubmissionOptions;
    const formsV4Submission_universal_d_querySubmissionsByNamespace: typeof querySubmissionsByNamespace;
    type formsV4Submission_universal_d_QuerySubmissionsByNamespaceOptions = QuerySubmissionsByNamespaceOptions;
    type formsV4Submission_universal_d_SubmissionsQueryResult = SubmissionsQueryResult;
    type formsV4Submission_universal_d_SubmissionsQueryBuilder = SubmissionsQueryBuilder;
    const formsV4Submission_universal_d_countSubmissions: typeof countSubmissions;
    const formsV4Submission_universal_d_getMediaUploadUrl: typeof getMediaUploadUrl;
    const formsV4Submission_universal_d_bulkMarkSubmissionsAsSeen: typeof bulkMarkSubmissionsAsSeen;
    namespace formsV4Submission_universal_d {
        export { formsV4Submission_universal_d___debug as __debug, formsV4Submission_universal_d_FormSubmission as FormSubmission, formsV4Submission_universal_d_SubmissionStatus as SubmissionStatus, formsV4Submission_universal_d_Owner as Owner, formsV4Submission_universal_d_OwnerOwnerOneOf as OwnerOwnerOneOf, formsV4Submission_universal_d_Submitter as Submitter, formsV4Submission_universal_d_SubmitterSubmitterOneOf as SubmitterSubmitterOneOf, formsV4Submission_universal_d_DomainEvent as DomainEvent, formsV4Submission_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf, formsV4Submission_universal_d_EntityCreatedEvent as EntityCreatedEvent, formsV4Submission_universal_d_EntityUpdatedEvent as EntityUpdatedEvent, formsV4Submission_universal_d_EntityDeletedEvent as EntityDeletedEvent, formsV4Submission_universal_d_ActionEvent as ActionEvent, formsV4Submission_universal_d_Empty as Empty, formsV4Submission_universal_d_UpsertContactFromSubmissionRequest as UpsertContactFromSubmissionRequest, formsV4Submission_universal_d_UpsertContactFromSubmissionResponse as UpsertContactFromSubmissionResponse, formsV4Submission_universal_d_SubmitContactResponse as SubmitContactResponse, formsV4Submission_universal_d_IdentityType as IdentityType, formsV4Submission_universal_d_SubmissionContactMapped as SubmissionContactMapped, formsV4Submission_universal_d_CreateSubmissionRequest as CreateSubmissionRequest, formsV4Submission_universal_d_CreateSubmissionResponse as CreateSubmissionResponse, formsV4Submission_universal_d_CreateSubmissionBySubmitterRequest as CreateSubmissionBySubmitterRequest, formsV4Submission_universal_d_CreateSubmissionBySubmitterResponse as CreateSubmissionBySubmitterResponse, formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterRequest as BulkCreateSubmissionBySubmitterRequest, formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterResponse as BulkCreateSubmissionBySubmitterResponse, formsV4Submission_universal_d_BulkSubmissionResult as BulkSubmissionResult, formsV4Submission_universal_d_ItemMetadata as ItemMetadata, formsV4Submission_universal_d_ApplicationError as ApplicationError, formsV4Submission_universal_d_BulkActionMetadata as BulkActionMetadata, formsV4Submission_universal_d_GetSubmissionRequest as GetSubmissionRequest, formsV4Submission_universal_d_GetSubmissionResponse as GetSubmissionResponse, formsV4Submission_universal_d_UpdateSubmissionRequest as UpdateSubmissionRequest, formsV4Submission_universal_d_UpdateSubmissionResponse as UpdateSubmissionResponse, formsV4Submission_universal_d_ConfirmSubmissionRequest as ConfirmSubmissionRequest, formsV4Submission_universal_d_ConfirmSubmissionResponse as ConfirmSubmissionResponse, formsV4Submission_universal_d_DeleteSubmissionRequest as DeleteSubmissionRequest, formsV4Submission_universal_d_DeleteSubmissionResponse as DeleteSubmissionResponse, formsV4Submission_universal_d_QuerySubmissionRequest as QuerySubmissionRequest, formsV4Submission_universal_d_CursorQuery as CursorQuery, formsV4Submission_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf, formsV4Submission_universal_d_Sorting as Sorting, formsV4Submission_universal_d_SortOrder as SortOrder, formsV4Submission_universal_d_CursorPaging as CursorPaging, formsV4Submission_universal_d_QuerySubmissionResponse as QuerySubmissionResponse, formsV4Submission_universal_d_CursorPagingMetadata as CursorPagingMetadata, formsV4Submission_universal_d_Cursors as Cursors, formsV4Submission_universal_d_QuerySubmissionsByNamespaceRequest as QuerySubmissionsByNamespaceRequest, formsV4Submission_universal_d_QuerySubmissionsByNamespaceResponse as QuerySubmissionsByNamespaceResponse, formsV4Submission_universal_d_CountSubmissionsRequest as CountSubmissionsRequest, formsV4Submission_universal_d_CountSubmissionsResponse as CountSubmissionsResponse, formsV4Submission_universal_d_FormSubmissionsCount as FormSubmissionsCount, formsV4Submission_universal_d_GetMediaUploadURLRequest as GetMediaUploadURLRequest, formsV4Submission_universal_d_GetMediaUploadURLResponse as GetMediaUploadURLResponse, formsV4Submission_universal_d_BulkMarkSubmissionsAsSeenRequest as BulkMarkSubmissionsAsSeenRequest, formsV4Submission_universal_d_BulkMarkSubmissionsAsSeenResponse as BulkMarkSubmissionsAsSeenResponse, formsV4Submission_universal_d_Task as Task, formsV4Submission_universal_d_TaskKey as TaskKey, formsV4Submission_universal_d_TaskAction as TaskAction, formsV4Submission_universal_d_TaskActionActionOneOf as TaskActionActionOneOf, formsV4Submission_universal_d_Complete as Complete, formsV4Submission_universal_d_Cancel as Cancel, formsV4Submission_universal_d_Reschedule as Reschedule, formsV4Submission_universal_d_UpsertContactFromSubmissionOptions as UpsertContactFromSubmissionOptions, formsV4Submission_universal_d_createSubmission as createSubmission, formsV4Submission_universal_d_CreateSubmissionOptions as CreateSubmissionOptions, formsV4Submission_universal_d_CreateSubmissionBySubmitterOptions as CreateSubmissionBySubmitterOptions, formsV4Submission_universal_d_BulkCreateSubmissionBySubmitterOptions as BulkCreateSubmissionBySubmitterOptions, formsV4Submission_universal_d_getSubmission as getSubmission, formsV4Submission_universal_d_updateSubmission as updateSubmission, formsV4Submission_universal_d_UpdateSubmission as UpdateSubmission, formsV4Submission_universal_d_UpdateSubmissionOptions as UpdateSubmissionOptions, formsV4Submission_universal_d_confirmSubmission as confirmSubmission, formsV4Submission_universal_d_deleteSubmission as deleteSubmission, formsV4Submission_universal_d_QuerySubmissionOptions as QuerySubmissionOptions, formsV4Submission_universal_d_querySubmissionsByNamespace as querySubmissionsByNamespace, formsV4Submission_universal_d_QuerySubmissionsByNamespaceOptions as QuerySubmissionsByNamespaceOptions, formsV4Submission_universal_d_SubmissionsQueryResult as SubmissionsQueryResult, formsV4Submission_universal_d_SubmissionsQueryBuilder as SubmissionsQueryBuilder, formsV4Submission_universal_d_countSubmissions as countSubmissions, formsV4Submission_universal_d_getMediaUploadUrl as getMediaUploadUrl, formsV4Submission_universal_d_bulkMarkSubmissionsAsSeen as bulkMarkSubmissionsAsSeen, };
    }
    export { formsV4Submission_universal_d as submissions };
}
