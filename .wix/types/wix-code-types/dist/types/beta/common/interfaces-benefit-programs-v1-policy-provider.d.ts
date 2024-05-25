declare module "interfaces-benefit-programs-v1-policy-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface EvaluatePolicyRequest {
      /** List of evaluation requests */
      evaluationRequests?: EvaluationRequest[];
  }
  interface EvaluationRequest {
      /** Key used to uniquely identify this evaluation request. This key will be used to match the response to the request */
      evaluationKey?: string;
      /** Policy configuration */
      policies?: CustomPolicy[];
      /** Evaluation context */
      evaluationContext?: EvaluationContext;
  }
  /** Custom policy as implemented by the Pool Policy Provider */
  interface CustomPolicy {
      /** References a specific custom policy on the provider's system */
      _id?: string;
      /** Custom policy provider id */
      appId?: string | null;
      /** Additional info data on this policy when it was created. It's going to be passed to the policy provider during eligibility checks */
      additionalData?: Record<string, any> | null;
  }
  interface EvaluationContext {
      /** Pool which should be evaluated whether it passes the policy or not */
      pool?: Pool;
      /** Id of the item that is being redeemed */
      itemReference?: ItemReference;
      /** The selected benefit key, if any */
      benefitKey?: string;
      /** Number of of items to redeem */
      count?: number;
      /** Beneficiary of the entitlement. If not provided, will use the identity in the context */
      beneficiaries?: IdentificationData[];
      /** Structured data filled in during the eligibility check or redemption request */
      requestData?: Record<string, any> | null;
      /**
       * Date at which the item will be used. Target date does not necessarily equal the redemption date. Credits are redeemed immediately.
       * This date is only used for validations that may be performed by policy providers
       */
      targetDate?: Date;
  }
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
      beneficiary?: IdentificationData;
      /** Items and policies how the entitlement works */
      details?: Details;
      /**
       * Name of the entitlement template that this Pool was provisioned from
       * @readonly
       */
      displayName?: string;
      /** Used to determine the source of the pool that is copied from the pool definition. Default is "unknown". */
      namespace?: string;
  }
  enum PoolStatus {
      UNDEFINED = "UNDEFINED",
      ACTIVE = "ACTIVE",
      PAUSED = "PAUSED",
      ENDED = "ENDED",
      PROVISIONING = "PROVISIONING"
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
      customOptions?: TypesCustomPolicy;
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
      customOptions?: TypesCustomPolicy;
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
  interface TypesCustomPolicy {
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
  interface ItemReference {
      /** External Id of the item */
      externalId?: string;
      /** Item category */
      category?: string | null;
      /** Item provider app Id */
      providerAppId?: string;
  }
  interface EvaluatePolicyResponse {
      /** Evaluation result */
      results?: EvaluationResult[];
  }
  interface EvaluationResult {
      /** Key used to uniquely identify this evaluation request. This key will be used to match the response to the request */
      evaluationKey?: string;
      /** References a specific custom policy on the provider's system */
      policyResults?: PolicyEvaluationResult[];
  }
  interface PolicyEvaluationResult {
      /** References a specific custom policy on the provider's system */
      policyId?: string | null;
      /** Whether the entitlement passes the policy or not */
      success?: boolean;
      /** Details indicating the type of failure and any additional error data that may be forwarded to the client */
      details?: FailureDetails;
  }
  interface FailureDetails {
      /** Error code */
      errorCode?: string;
      /** Additional data that will be stored in the entitlement */
      errorData?: Record<string, any> | null;
  }
  interface PolicyConfig {
      /** URI where the SPI Implementer is deployed */
      uriConfig?: SpiBaseUri;
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
      identity?: ContextIdentificationData;
      /** A string representing a language and region in the format of "xx-XX". First 2 letters represent the language code according to ISO 639-1. This is followed by a dash "-", and then a by 2 capital letters representing the region according to ISO 3166-2 */
      languages?: string[];
      /** App instance ID of SPI in context */
      instanceId?: string | null;
  }
  enum IdentificationDataIdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface ContextIdentificationData extends ContextIdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: IdentificationDataIdentityType;
  }
  /** @oneof */
  interface ContextIdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  interface EvaluatePolicyOptions {
      /** List of evaluation requests */
      evaluationRequests?: EvaluationRequest[];
  }
  
  export { AlternativeUri, Benefit, BusinessError, Context, ContextIdentificationData, ContextIdentificationDataIdOneOf, CreditConfiguration, CustomPolicy, Details, EvaluatePolicyOptions, EvaluatePolicyRequest, EvaluatePolicyResponse, EvaluationContext, EvaluationRequest, EvaluationResult, FailureDetails, FixedIntervalPolicy, IdentificationData, IdentificationDataIdOneOf, IdentificationDataIdentityType, IdentityType, ItemReference, Policy, PolicyConfig, PolicyEvaluationResult, PolicyExpression, PolicyExpressionAnd, PolicyExpressionExpressionOneOf, PolicyExpressionNot, PolicyExpressionOr, PolicyExpressionType, PolicyPolicyOneOf, Pool, PoolStatus, RateLimitedPolicy, RateLimitedPolicyPeriodOneOf, RateLimitedPolicyType, RolloverConfiguration, SpiBaseUri, Type, TypesCustomPolicy, WeekDay };
}
