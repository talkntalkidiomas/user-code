declare module "interfaces-iam-v1-authenticator-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface EnrollRequest {
      /** Id of the user enrolling */
      identityId?: string;
      /** Id of the browser session. This is guaranteed to be consistent across multiple calls originating from the same browser session */
      sessionId?: string;
      /** Inputs filled in by the user */
      inputs?: Inputs;
      /** metadata on the identity */
      identityMetadata?: Metadata;
  }
  interface Inputs {
      /**
       * The resolved inputs presented to the user before the enroll/authentication stage.
       * This will have all admin configurable settings filled with their final, concrete values
       */
      expectedStartInputs?: ConcreteExpectedInput[];
      /**
       * The resolved inputs that may be presented to the user during the verify stage.
       * This will have all admin configurable settings filled with their final, concrete values
       */
      expectedVerifyInputs?: ConcreteExpectedInput[];
      /** The values provided by the user. Corresponds to the inputs specified in `expected_user_start_inputs` */
      userStartInputs?: Record<string, string>;
      /** The values provided by the user in response to a VerifyState */
      userVerifyInputs?: Record<string, string>;
  }
  interface ConcreteExpectedInput {
      name?: string;
      type?: ConcreteExpectedInputConfiguration;
  }
  interface ConcreteExpectedInputConfiguration extends ConcreteExpectedInputConfigurationTypeOneOf {
      text?: TextInputSettings;
  }
  /** @oneof */
  interface ConcreteExpectedInputConfigurationTypeOneOf {
      text?: TextInputSettings;
  }
  interface TextInputSettings {
      /** The minimum length required for the user to enter */
      minLength?: number | null;
      /** The maximum length allowed for the user to enter */
      maxLength?: number | null;
      /** A regex that the text entered by the user must match */
      regex?: string | null;
      /** How should the field be displayed to the end user */
      displayType?: TextInputDisplayType;
  }
  enum TextInputDisplayType {
      /** A regular text field */
      TEXT = "TEXT",
      /** A password field (where the text is hidden visually) */
      PASSWORD = "PASSWORD",
      /** A field optimized for one time codes */
      CODE = "CODE"
  }
  interface Metadata {
      /**
       * represents general tags such as "isOwner", "isContributor"
       * @readonly
       */
      tags?: string[];
  }
  interface EnrollResponse {
      state?: State;
  }
  interface State extends StateStatusOneOf {
      /** Indicates the enrollment/authentication was successful */
      success?: SuccessState;
      /** Indicates that further action is required from the user to complete enrollment/authentication */
      verify?: VerifyState;
  }
  /** @oneof */
  interface StateStatusOneOf {
      /** Indicates the enrollment/authentication was successful */
      success?: SuccessState;
      /** Indicates that further action is required from the user to complete enrollment/authentication */
      verify?: VerifyState;
  }
  /** In case of Success - may include additional data about the authentication process in the future */
  interface SuccessState {
  }
  /** In case of verify - what is missing to complete the enrollment or authentication */
  interface VerifyState {
      /** Override the default behavior of requiring all fields configured in expected_verify_inputs */
      custom?: CustomVerifyExpectations;
  }
  interface CustomVerifyExpectations {
  }
  interface AuthenticateRequest {
      /** Id of the user authenticating */
      identityId?: string;
      /** Id of the browser session. This is guaranteed to be consistent across multiple authenticate calls from the same browser session */
      sessionId?: string;
      /** Inputs filled in by the user */
      inputs?: Inputs;
      /** metadata on the identity */
      identityMetadata?: Metadata;
  }
  interface AuthenticateResponse {
      state?: State;
  }
  interface AuthenticatorConfig {
      /** Is the enrolment step required (eg. for saving the password, public key, etc.) */
      requireUserEnroll?: boolean;
      /** Information required during the enrollment and authentication processes */
      expectedInputs?: ExpectedInputs;
  }
  interface ExpectedInputs {
      /** Inputs that will be expected from the user at the start of the process of trying to enroll or authenticate */
      expectedStartInputs?: PredefinedExpectedInput[];
      /** Inputs that may be required during a second step of enroll/authenticate, specified at runtime by sending a Verify response */
      expectedVerifyInputs?: PredefinedExpectedInput[];
  }
  /**
   * Specifies an expected input that can be fully configured by the SPI implementor, perhaps with overrides by the admin, _before_ runtime.
   * Notably, this does not include WebAuthn, as that input requires a unique, random challenge to be generated and persisted per request (ie at runtime)
   * in order to be implemented correctly.
   */
  interface PredefinedExpectedInput {
      /** The key used to identify the value entered into the input in the user_start_inputs or user_verify_inputs map */
      key?: string;
      /** The name of the input as it should be indicated to the user */
      displayName?: string;
      /** The configuration for the input */
      configuration?: PredefinedExpectedInputConfiguration;
  }
  interface PredefinedExpectedInputConfiguration extends PredefinedExpectedInputConfigurationTypeOneOf {
      textInput?: AdminConfigurableTextInput;
  }
  /** @oneof */
  interface PredefinedExpectedInputConfigurationTypeOneOf {
      textInput?: AdminConfigurableTextInput;
  }
  interface AdminConfigurableTextInput {
      /** The default settings for the text input */
      defaultSettings?: TextInputSettings;
      /**
       * Settings that must be have non-null values.
       * This must be a subset of admin_configurable_settings.
       */
      requiredSettings?: string[];
      /**
       * Settings that the admin may override.
       * This must be a valid FieldMask with respect to TextFieldSettings as the root object.
       */
      adminConfigurableSettings?: string[];
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
  interface EnrollOptions {
      /** Id of the user enrolling */
      identityId?: string;
      /** Id of the browser session. This is guaranteed to be consistent across multiple calls originating from the same browser session */
      sessionId?: string;
      /** Inputs filled in by the user */
      inputs?: Inputs;
      /** metadata on the identity */
      identityMetadata?: Metadata;
  }
  interface AuthenticateOptions {
      /** Id of the user authenticating */
      identityId?: string;
      /** Id of the browser session. This is guaranteed to be consistent across multiple authenticate calls from the same browser session */
      sessionId?: string;
      /** Inputs filled in by the user */
      inputs?: Inputs;
      /** metadata on the identity */
      identityMetadata?: Metadata;
  }
  
  export { AdminConfigurableTextInput, AuthenticateOptions, AuthenticateRequest, AuthenticateResponse, AuthenticatorConfig, BusinessError, ConcreteExpectedInput, ConcreteExpectedInputConfiguration, ConcreteExpectedInputConfigurationTypeOneOf, Context, CustomVerifyExpectations, EnrollOptions, EnrollRequest, EnrollResponse, ExpectedInputs, IdentificationData, IdentificationDataIdOneOf, IdentityType, Inputs, Metadata, PredefinedExpectedInput, PredefinedExpectedInputConfiguration, PredefinedExpectedInputConfigurationTypeOneOf, State, StateStatusOneOf, SuccessState, TextInputDisplayType, TextInputSettings, VerifyState };
}
