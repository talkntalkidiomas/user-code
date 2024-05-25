declare module "interfaces-automations-v1-action-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface ValidateConfigurationRequest {
      /**
       * Action key as defined in your app's action configuration in the Wix Developers Center.
       * For example, `send-email` or `generate-invoice`.
       */
      actionKey: string;
      /**
       * Stringified object representing the mapping a site contributor made between keys in the input schema and their expected
       * values when running the automation. A field can be a static value mapping, or an expression that will be evaluated
       * dynamically on each activation.
       */
      inputMapping: string;
  }
  interface ValidateConfigurationResponse {
      /** Whether the action configuration is valid. */
      valid?: boolean;
      /** Error details for an invalid action configuration. These are the errors displayed to the user. */
      configurationErrors?: ProviderConfigurationError[];
  }
  interface ProviderConfigurationError {
      /** Key corresponding to the field in the schema. */
      fieldKey?: string | null;
      /** Error message. */
      message?: string;
      /** Label for a call-to-action button that's displayed with the error. Translated according to the SPI language context. */
      ctaLabel?: string | null;
      /** URL to redirect to when the call-to-action button is clicked. */
      ctaUrl?: string | null;
      /** Title for the error. */
      title?: string;
  }
  interface DuplicateInputMappingRequest {
      /** Identifier for this action - human-readable action key - unique per app def ID */
      actionKey: string;
      /** Action input mapping to duplicate */
      inputMapping: string;
  }
  interface DuplicateInputMappingResponse {
      /** Duplicated action input mapping */
      inputMapping?: string;
  }
  interface GenerateApplicationAutomationInputMappingRequest {
      /** Identifier for this action - human-readable action key - unique per app def ID */
      actionKey: string;
      /** Action input mapping to generate from */
      inputMapping: string;
  }
  interface GenerateApplicationAutomationInputMappingResponse {
      /** Generated action input mapping */
      inputMapping?: string;
  }
  interface GetQuotaInfoRequest {
      /**
       * Action key as defined in your app's action configuration in the Wix Developers Center.
       * For example, `send-email` or `generate-invoice`.
       */
      actionKey: string;
  }
  interface GetQuotaInfoResponse {
      /** Details about the quotas for your action. */
      actionQuotaInfo?: ActionQuotaInfo;
  }
  interface ActionQuotaInfo {
      /**
       * Whether the quotas for your action are enforced. If you mark this as `true` in the response body,
       * Wix displays the information in the quota object on the site dashboard. If you mark this as `false` for
       * a user, Wix does not display any quota info on the site dashboard for your service.
       */
      enforced?: boolean;
      /**
       * The plans your service provides, together with the quotas enforced by each plan. A site may be enrolled
       * in multiple plans. Plans and quotas can be related as follows:
       *
       * + A single plan has a single quota.
       * + A single plan has multiple quotas.
       * + Multiple plans are associated with multiple quotas.
       *
       * Plans and quotas that are related should be grouped together in a single `quotaInfo`
       * object.
       */
      quotaInfo?: QuotaInfo[];
  }
  interface QuotaInfo {
      /** List of plans associated with the site making the request. */
      plans?: Plan[];
      /** List of quotas associated with the plans the site is enrolled in. */
      quotas?: Quota[];
      /**
       * Details for an upgrade call-to-action button.
       * Displayed in the site contributor’s dashboard together with the quota details.
       */
      upgradeCta?: UpgradeCTA;
  }
  interface Plan {
      /** Plan ID defined by the action provider. */
      _id?: string;
      /** Plan name to display in the site contributor’s dashboard. */
      name?: string;
      /**
       * optional - the plan group id
       * @internal
       */
      groupId?: string | null;
  }
  interface Quota {
      /** Name of the feature the quota is related to. For example, "Messages sent". */
      featureName?: string;
      /**
       * Quota renewal date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
       * For example, 10 July 2020 at 15:00 is written as `2020-07-10 15:00:00.000`.
       */
      renewalDate?: Date;
      /** The user's current quota usage. */
      currentUsage?: string;
      /** Quota limit data. */
      limit?: string | null;
      /** Additional information about the quota. Displayed as a tooltip in the site contributor’s dashboard. */
      additionalInfo?: AdditionalInfo;
  }
  interface CTA {
      /** Call-to-action redirect URL. */
      url?: string;
      /** Call-to-action label. */
      label?: string;
  }
  interface AdditionalInfo {
      /** Tooltip content. */
      description?: string;
      /** Details for an options call-to-action link that appears in the tooltip. */
      cta?: CTA;
  }
  interface UpgradeCTA {
      /** CTA button redirect URL. */
      url?: string;
      /** CTA button label. */
      label?: string;
      /**
       * optional - id of the related plan
       * @internal
       */
      planId?: string | null;
  }
  interface GetDynamicInputSchemaRequest {
      /**
       * Action key as defined in your app's action configuration in the Wix Developers Center.
       * For example, `send-email` or `generate-invoice`.
       */
      actionKey: string;
      /**
       * Object representing the mapping a site contributor made between keys in the [input schema](https://dev.wix.com/docs/rest/api-reference/wix-automations/action-spi/about-the-action-spi-input-schema) and their expected
       * values when running the automation. A field can be a static value mapping, or an expression that will be evaluated
       * dynamically on each activation.
       */
      inputMapping: Record<string, any> | null;
  }
  interface GetDynamicInputSchemaResponse {
      /** A [JSON schema](https://json-schema.org/) containing the action's added dynamic fields and its static fields. */
      inputSchema?: Record<string, any> | null;
      /** A [UI schema](https://bo.wix.com/pages/automations-ui-lib/?path=/story/getting-started--about) is a JSON Schema that describes the UI of the static and dynamic fields. */
      uiSchema?: Record<string, any> | null;
  }
  interface InvokeRequest {
      /**
       * Data for executing your action.
       * Structured according to the [input schema](https://dev.wix.com/docs/rest/api-reference/wix-automations/action-provider-v1/about-the-action-spi-input-schema)
       * you provided when configuring the action in the Wix Developer’s Center.
       */
      actionParams: Record<string, any> | null;
      /**
       * Identifier == activationId#actionId
       * @internal
       */
      executionIdentifier: string;
      /**
       * Action key as defined in your app's action configuration in the Wix Developers Center.
       * For example, `send-email` or `generate-invoice`.
       */
      actionKey: string;
      /**
       * Activation Context
       * @internal
       */
      activationContext?: ActivationContext;
  }
  interface ActivationContext {
      activationId?: string | null;
      esbConfigurationId?: string | null;
      triggerKey?: string | null;
      triggerAppId?: string | null;
      actionId?: string | null;
      payload?: Record<string, any> | null;
  }
  interface InvokeResponse {
      /**
       * If the action has no output schema, return an empty object.
       * If the action defines an output schema, return a JSON object that correlates to the output schema.
       */
      result?: Record<string, any> | null;
  }
  interface ResetActionRequest {
      /** Identifier for this action - human-readable action key - unique per app def ID */
      actionKey: string;
      /** Action input mapping to reset */
      inputMapping: string;
  }
  interface ResetActionResponse {
  }
  interface OnRemoveActionRequest {
      /** Identifier for this action - human-readable action key - unique per app def ID */
      actionKey: string;
      /** Action input mappings to remove */
      inputMappings: Record<string, any>[] | null;
  }
  interface OnRemoveActionResponse {
  }
  interface OnBeforeSaveRequest {
      /** Identifier for this action - human readable action key - unique per app def id */
      actionKey: string;
      /** list of action input mappings */
      inputMappings: string[];
  }
  interface OnBeforeSaveResponse {
  }
  interface GenerateActionInputMappingFromTemplateRequest {
      /** action input mapping template the action spi provider will generate input mapping from */
      actionInputMappingTemplate: Record<string, any> | null;
  }
  interface GenerateActionInputMappingFromTemplateResponse {
      /** generated action input mapping spi provider returns */
      generatedActionInputMapping?: Record<string, any> | null;
  }
  interface ActionProviderSPIConfig {
      /** Action service plugin configuration */
      actionConfig?: ActionSPIConfig;
  }
  interface ActionSPIConfig {
      /** Identifier for this action - human-readable action key - unique per app def ID */
      actionKey?: string;
      /**
       * The action expects the following input
       * The schema is described according to the JSON Schema standard: https://json-schema.org/
       *
       * Example - Add Label to Contact Action input schema:
       * {
       * "$schema": "https://json-schema.org/draft/2020-12/schema",
       * "type": "object",
       * "title": "Add label to contact input schema",
       * "description": "The schema of the JSON that is sent when invoking this add label to contact action",
       * "default": {},
       * "examples": [
       * {
       * "contactId": "a647eb32-c5f4-11ec-9d64-0242ac120002",
       * "labelId": "1e8b5e5e-dba2-11ec-9d64-0242ac120002"
       * }
       * ],
       * "required": [
       * "contactId",
       * "labelId"
       * ],
       * "properties": {
       * "contactId": {
       * "$id": "#/properties/contactId",
       * "type": "string",
       * "format": "uuid",
       * "title": "Contact Id",
       * "description": "The ID of the contact to apply the label to",
       * "default": "",
       * "identityType": "contact" // can be contact/visitor/user, limited to 1 type per identity.
       * },
       * "labelId": {
       * "$id": "#/properties/labelId",
       * "type": "string",
       * "format": "uuid",
       * "title": "Label Id",
       * "description": "The ID of the label to apply",
       * "default": "",
       * }
       * }
       * }
       */
      inputSchema?: Record<string, any> | null;
      /**
       * The output of the action, which will be added to the payload after execution.
       * The schema is described according to the JSON Schema standard: https://json-schema.org/
       *
       * Example - Output of create task action
       * {
       * "$schema": "https://json-schema.org/draft/2020-12/schema",
       * "type": "object",
       * "title": "Create task action schema",
       * "description": "The schema of the JSON that is sent when invoking this create task action",
       * "default": {},
       * "examples": [
       * {
       * "taskId": "a647eb32-c5f4-11ec-9d64-0242ac120002",
       * }
       * ],
       * "required": [
       * "taskId"
       * ],
       * "properties": {
       * "taskId": {
       * "$id": "#/properties/taskId",
       * "type": "string",
       * "format": "uuid",
       * "title": "Contact Id",
       * "description": "The ID of the task created",
       * "default": "",
       * }
       * }
       * }
       */
      outputSchema?: Record<string, any> | null;
      /** Actions display name - human-readable field. Ex. - "Send SMS" */
      displayName?: string | null;
      description?: string | null;
      /** Specifies which optional methods were implemented */
      implementedMethods?: ImplementedMethods;
      /**
       * Indicates whether we should wait for the action to complete before executing the next actions or finish and
       * expect a callback in the actionCompleted method
       */
      executionType?: ExecutionType;
      /** @internal */
      metadata?: Metadata;
      /** Chosen interface for action */
      interfaceConfiguration?: InterfaceConfiguration;
      /** Icon representing the action in the UI */
      icon?: string;
  }
  enum Type {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      WIDGET_COMPONENT = "WIDGET_COMPONENT",
      GENERIC = "GENERIC"
  }
  interface WidgetComponentOptions {
      /** Name of provided component */
      componentName?: string;
  }
  interface GenericOptions {
      /** UI schema */
      uiSchema?: Record<string, any> | null;
  }
  interface ImplementedMethods {
      /** Implements ValidateConfiguration */
      validateConfiguration?: boolean;
      /** Implements DuplicateInputMapping */
      duplicateInputMapping?: boolean;
      /** Implements GenerateApplicationAutomationInputMapping */
      generateApplicationAutomationInputMapping?: boolean;
      /** Implements GetQuotaInfo */
      getQuotaInfo?: boolean;
      /** Implements OnBeforeSave */
      onBeforeSave?: boolean;
      /** Implements OnReset */
      onReset?: boolean;
      /** implements generateActionInputMappingFromTemplate */
      generateActionInputMappingFromTemplate?: boolean;
      /** implements OnRemove */
      onRemove?: boolean;
      /** Implements GetDynamicInputSchema */
      getDynamicInputSchema?: boolean;
  }
  enum ExecutionType {
      UNKNOWN_EXECUTION_TYPE = "UNKNOWN_EXECUTION_TYPE",
      SYNC = "SYNC",
      ASYNC = "ASYNC"
  }
  interface Metadata {
      /** Show action only to advanced mode users (Wix staff) */
      hidden?: boolean;
  }
  interface InterfaceConfiguration extends InterfaceConfigurationOptionsOneOf {
      widgetComponentOptions?: WidgetComponentOptions;
      genericOptions?: GenericOptions;
      /** Type of chosen interface */
      type?: Type;
  }
  /** @oneof */
  interface InterfaceConfigurationOptionsOneOf {
      widgetComponentOptions?: WidgetComponentOptions;
      genericOptions?: GenericOptions;
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
  interface ValidateConfigurationOptions {
      /**
       * Action key as defined in your app's action configuration in the Wix Developers Center.
       * For example, `send-email` or `generate-invoice`.
       */
      actionKey: string;
      /**
       * Stringified object representing the mapping a site contributor made between keys in the input schema and their expected
       * values when running the automation. A field can be a static value mapping, or an expression that will be evaluated
       * dynamically on each activation.
       */
      inputMapping: string;
  }
  interface GetQuotaInfoOptions {
      /**
       * Action key as defined in your app's action configuration in the Wix Developers Center.
       * For example, `send-email` or `generate-invoice`.
       */
      actionKey: string;
  }
  interface InvokeOptions {
      /**
       * Data for executing your action.
       * Structured according to the [input schema](https://dev.wix.com/docs/rest/api-reference/wix-automations/action-provider-v1/about-the-action-spi-input-schema)
       * you provided when configuring the action in the Wix Developer’s Center.
       */
      actionParams: Record<string, any> | null;
      /**
       * Identifier == activationId#actionId
       * @internal
       */
      executionIdentifier: string;
      /**
       * Action key as defined in your app's action configuration in the Wix Developers Center.
       * For example, `send-email` or `generate-invoice`.
       */
      actionKey: string;
      /**
       * Activation Context
       * @internal
       */
      activationContext?: ActivationContext;
  }
  
  export { ActionProviderSPIConfig, ActionQuotaInfo, ActionSPIConfig, ActivationContext, AdditionalInfo, BusinessError, CTA, Context, DuplicateInputMappingRequest, DuplicateInputMappingResponse, ExecutionType, GenerateActionInputMappingFromTemplateRequest, GenerateActionInputMappingFromTemplateResponse, GenerateApplicationAutomationInputMappingRequest, GenerateApplicationAutomationInputMappingResponse, GenericOptions, GetDynamicInputSchemaRequest, GetDynamicInputSchemaResponse, GetQuotaInfoOptions, GetQuotaInfoRequest, GetQuotaInfoResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, ImplementedMethods, InterfaceConfiguration, InterfaceConfigurationOptionsOneOf, InvokeOptions, InvokeRequest, InvokeResponse, Metadata, OnBeforeSaveRequest, OnBeforeSaveResponse, OnRemoveActionRequest, OnRemoveActionResponse, Plan, ProviderConfigurationError, Quota, QuotaInfo, ResetActionRequest, ResetActionResponse, Type, UpgradeCTA, ValidateConfigurationOptions, ValidateConfigurationRequest, ValidateConfigurationResponse, WidgetComponentOptions };
}
