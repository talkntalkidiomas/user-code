declare module "interfaces-forms-v4-submission-extension" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
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
  interface ValidateSubmissionOptions extends ValidateSubmissionRequestActionsOneOf {
      /** Submission to validate. */
      submission: FormSubmission;
      /** Whether to create or update the submission. */
      actionType: ActionType;
      /** Data for updating an existing submission. */
      updateOptions?: UpdateOptions;
  }
  
  export { ActionType, AlternativeUri, BusinessError, Context, ExtendedFields, FormSubmission, FormSubmissionSpiExtensionConfig, FormsSubmissionsExtensionNamespaceConfig, IdentificationData, IdentificationDataIdOneOf, IdentityType, OrderDetails, SpiBaseUri, SubmissionErrorType, SubmissionStatus, SubmissionValidationError, SubmissionValidationErrorErrorMessageOneOf, Submitter, SubmitterSubmitterOneOf, UpdateOptions, ValidateSubmissionOptions, ValidateSubmissionRequest, ValidateSubmissionRequestActionsOneOf, ValidateSubmissionResponse };
}
