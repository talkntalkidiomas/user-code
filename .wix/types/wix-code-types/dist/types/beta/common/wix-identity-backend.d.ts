declare module "wix-identity-backend" {
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface AccountInvite {
      /** @readonly */
      _id?: string;
      /** @readonly */
      accountId?: string;
      email?: string;
      role?: string;
      /** @readonly */
      inviterId?: string;
      status?: InviteStatus;
      acceptLink?: string;
      /** @readonly */
      inviterAccountId?: string;
      /** @readonly */
      acceptedByAccountId?: string | null;
      dateCreated?: Date;
      policyIds?: string[];
      dateUpdated?: Date;
      assignments?: InviteResourceAssignment[];
      brandDomain?: string | null;
      /** Invite expiration date */
      expirationDate?: Date;
  }
  /** Invite status stating whether the invite was accepted, waiting to be accepted, deleted etc.. */
  enum InviteStatus {
      Pending = "Pending",
      Used = "Used",
      Deleted = "Deleted",
      Declined = "Declined",
      Expired = "Expired"
  }
  interface InviteResourceAssignment {
      policyId?: string;
      assignments?: InviteAssignment[];
  }
  interface InviteAssignment {
      /** The resource of the invite assignment */
      fullNameResource?: FullNameResource;
      /** A condition that will be applied on the assignment */
      condition?: PolicyCondition;
  }
  interface FullNameResource extends FullNameResourceResourceContextOneOf {
      /** A specific resource. We will determine the resource type based on the action. */
      resource?: Resource;
      /** A specific site (we will retrieve the account that the site belongs to) */
      siteContext?: SiteResourceContext;
      /** A specific account */
      accountContext?: AccountResourceContext;
      /** A specific organization */
      organizationContext?: OrganizationResourceContext;
  }
  /** @oneof */
  interface FullNameResourceResourceContextOneOf {
      /** A specific site (we will retrieve the account that the site belongs to) */
      siteContext?: SiteResourceContext;
      /** A specific account */
      accountContext?: AccountResourceContext;
      /** A specific organization */
      organizationContext?: OrganizationResourceContext;
  }
  /** Site resource context. It indicates that the resource is under a site (can be the site itself or some asset of a site, like a blog post) */
  interface SiteResourceContext {
      metasiteId?: string;
  }
  /** Account resource contexts. It indicates that the resource is under the account (can be the account itself or some asset of an account, like a logo or a domain) */
  interface AccountResourceContext {
      accountId?: string;
  }
  interface OrganizationResourceContext {
  }
  /**
   * A custom resource. Is used to represent some asset that is not a direct resource context (site or account), but something custom.
   * For example: payment method, blog post, domain, logo.
   */
  interface Resource {
      /** The resource id. */
      _id?: string | null;
      /** The resource type */
      type?: string | null;
  }
  interface PolicyCondition {
      /** The type of the condition */
      condition?: ConditionType;
  }
  interface ConditionType extends ConditionTypeOfOneOf {
      simpleCondition?: SimpleCondition;
      /** A logic combination between several conditions, with an operator between them */
      joinedConditions?: JoinedCondition;
      environmentCondition?: EnvironmentCondition;
      /** A single condition */
      condition?: Condition;
  }
  /** @oneof */
  interface ConditionTypeOfOneOf {
      simpleCondition?: SimpleCondition;
      /** A logic combination between several conditions, with an operator between them */
      joinedConditions?: JoinedCondition;
      environmentCondition?: EnvironmentCondition;
      /** A single condition */
      condition?: Condition;
  }
  interface SimpleCondition {
      attrName?: string;
      value?: SimpleConditionValue;
      op?: SimpleConditionOperator;
      conditionModelId?: string;
  }
  interface SimpleConditionValue extends SimpleConditionValueValueOneOf {
      attrName?: string;
      stringValue?: string;
      boolValue?: boolean;
  }
  /** @oneof */
  interface SimpleConditionValueValueOneOf {
      attrName?: string;
      stringValue?: string;
      boolValue?: boolean;
  }
  enum SimpleConditionOperator {
      UNKNOWN_SIMPLE_OP = "UNKNOWN_SIMPLE_OP",
      EQUAL = "EQUAL"
  }
  interface JoinedCondition {
      /** The operator that should be used when evaluating the condition */
      op?: JoinedConditionOperator;
      /** The conditions that should be evaluated, and then joined using the operator provided */
      conditions?: ConditionType[];
  }
  enum JoinedConditionOperator {
      UNKNOWN_JOIN_OP = "UNKNOWN_JOIN_OP",
      OR = "OR",
      AND = "AND"
  }
  interface EnvironmentCondition extends EnvironmentConditionConditionOneOf {
      experimentCondition?: ExperimentCondition;
  }
  /** @oneof */
  interface EnvironmentConditionConditionOneOf {
      experimentCondition?: ExperimentCondition;
  }
  interface ExperimentCondition {
      spec?: string;
      fallbackValue?: string;
      expectedValue?: string;
  }
  interface Condition {
      /** The unique identifier of the condition model. Indicates which actions the condition is working on */
      conditionModelId?: string;
      /** The operator that should be evaluated */
      operator?: ConditionOperator;
  }
  interface ConditionOperator extends ConditionOperatorOperatorsOneOf {
      /** Comparison of equality - will be evaluated to true if the given parties are equal */
      equals?: EqualOperator;
      /** Regex operator - will be evaluated to true if the given value matches the provided regex */
      like?: LikeOperator;
      /** Petri experiment - will be evaluated using petri. */
      experiment?: ExperimentOperator;
      /** Operator that indicates a dependency on another subject being allowed to perform something. */
      dependOn?: DependOnOperator;
  }
  /** @oneof */
  interface ConditionOperatorOperatorsOneOf {
      /** Comparison of equality - will be evaluated to true if the given parties are equal */
      equals?: EqualOperator;
      /** Regex operator - will be evaluated to true if the given value matches the provided regex */
      like?: LikeOperator;
      /** Petri experiment - will be evaluated using petri. */
      experiment?: ExperimentOperator;
      /** Operator that indicates a dependency on another subject being allowed to perform something. */
      dependOn?: DependOnOperator;
  }
  interface EqualOperator {
      /** The attribute which should be compared. The attribute will be first evaluated to a value, and then compared the other side (attribute/value) */
      attrName?: string;
      /** The value to compare to. If the two parties are equal - we will return true. */
      value?: ConditionValue;
  }
  interface ConditionValue extends ConditionValueValueOneOf {
      /** an attribute. We'll first retrieve the value of the attribute (from the request or from pre-indexed values), and then compare to what it needs to be compared with. */
      attrName?: string;
      /** a value with a string type. Will be compared to the attribute provided, and be true only if they match the operator. */
      stringValue?: string;
      /** a value with a boolean type. Will be compared to the attribute provided, and be true only if they match the operator. */
      boolValue?: boolean;
  }
  /** @oneof */
  interface ConditionValueValueOneOf {
      /** an attribute. We'll first retrieve the value of the attribute (from the request or from pre-indexed values), and then compare to what it needs to be compared with. */
      attrName?: string;
      /** a value with a string type. Will be compared to the attribute provided, and be true only if they match the operator. */
      stringValue?: string;
      /** a value with a boolean type. Will be compared to the attribute provided, and be true only if they match the operator. */
      boolValue?: boolean;
  }
  interface LikeOperator {
      /** The attribute which should be compared. The attribute will be first evaluated to a value, and then compared the regex values provided. */
      attrName?: string;
      /** The regex values which the attribute value should be evaluated on. If the attribute value matches at least one of the regular expressions provided - we will return true */
      values?: string[];
  }
  interface ExperimentOperator {
      /** The spec to conduct the experiment on. */
      spec?: string;
      /** The value to use if the experiment could not be conducted */
      fallbackValue?: string;
      /** The expected value of the experiment conduction. If it matches the actual value - true will be returned. Otherwise - false. */
      expectedValue?: string;
  }
  /** Implies that the policy takes affect only if the depend on subject is permitted as well. */
  interface DependOnOperator {
      /** The subject on which the current entry depends on. If the subject is allowed to perform what the query was about - the condition will be evaluated to true. Otherwise - false */
      dependOnSubject?: Subject;
  }
  interface Subject {
      _id?: string;
      subjectType?: SubjectType;
      /** The context of the subject. For example - the context of a user subject is his account. */
      context?: SubjectContext;
  }
  enum SubjectType {
      UNKNOWN = "UNKNOWN",
      ACCOUNT = "ACCOUNT",
      USER = "USER",
      USER_GROUP = "USER_GROUP",
      MEMBER_GROUP = "MEMBER_GROUP",
      VISITOR_GROUP = "VISITOR_GROUP",
      EXTERNAL_APP = "EXTERNAL_APP",
      ACCOUNT_GROUP = "ACCOUNT_GROUP"
  }
  interface SubjectContext {
      _id?: string;
      contextType?: SubjectContextType;
  }
  enum SubjectContextType {
      UNKNOWN_CTX = "UNKNOWN_CTX",
      ORG_CTX = "ORG_CTX",
      ACCOUNT_CTX = "ACCOUNT_CTX"
  }
  interface GetAccountInvitesRequest {
  }
  interface GetAccountInvitesResponse {
      invites?: AccountInvite[];
  }
  interface GetAccountInviteRequest {
      _id: string;
  }
  interface GetAccountInviteResponse {
      invite?: AccountInvite;
  }
  interface AccountInviteRequest {
      role?: string;
      email?: string;
      policyIds?: string[];
  }
  interface AccountInviteResponse {
      invite?: AccountInvite;
  }
  interface CreateInviteRequest {
      /** An array of new team members' email addresses and their corresponding new assignments to be assigned to it when their invite is accepted. */
      subjectsAssignments: SubjectInviteAssignments[];
      /**
       * An indicator for suppressing (not sending) emails to the assignees.
       * @internal
       */
      suppressEmail?: boolean;
      /** The language of emails that will be used only for recipients that don't have a user, in case this parameter is unspecified, the sender's language will be used instead */
      defaultEmailLanguage?: string | null;
  }
  interface SubjectInviteAssignments {
      /** invitee email. */
      subjectEmail?: string;
      /** an array of assignments to be assigned when the invitee accepts the invite. */
      assignments?: InviteResourceAssignment[];
  }
  interface CreateInviteResponse {
      successfulInvites?: AccountInvite[];
      failedInvites?: InviteFailure[];
  }
  interface InviteFailure {
      subjectEmail?: string;
      errorMessage?: string;
  }
  interface BulkAccountInviteRequest {
      role?: string;
      emails?: string[];
      policyIds?: string[];
  }
  interface BulkAccountInviteResponse {
      invites?: AccountInvite[];
      failedEmails?: string[];
  }
  interface ResendAccountInviteRequest {
      inviteId: string;
      /** The language of emails that will be used only for recipients that don't have a user, in case this parameter is unspecified, the sender's language will be used instead */
      defaultEmailLanguage?: string | null;
  }
  interface AcceptAccountInviteRequest {
      inviteToken?: string;
  }
  interface AcceptAccountInviteResponse {
  }
  interface RevokeAccountInviteRequest {
      inviteId: string;
  }
  interface RevokeAccountInviteResponse {
  }
  interface UpdateAccountInviteRequest {
      inviteId: string;
      role?: string;
      policyIds?: string[];
  }
  interface UpdateAccountInviteResponse {
  }
  interface UpdateAccountInviteAssignmentsRequest {
      inviteId: string;
      assignments?: InviteResourceAssignment[];
  }
  interface UpdateAccountInviteAssignmentsResponse {
  }
  interface ParseAccountInviteTokenRequest {
      inviteToken?: string;
  }
  interface ParseAccountInviteTokenResponse {
      inviteId?: string;
      accountId?: string;
      status?: InviteStatus;
  }
  /** @documentationMaturity preview */
  function getInvites(): Promise<GetAccountInvitesResponse>;
  /** @documentationMaturity preview
   * @requiredField _id
   */
  function getInvite(_id: string): Promise<GetAccountInviteResponse>;
  /**
   * Deprecated: please use CreateInvite
   * @documentationMaturity preview */
  function invite(options?: InviteOptions): Promise<AccountInviteResponse>;
  interface InviteOptions {
      role?: string;
      email?: string;
      policyIds?: string[];
  }
  /**
   * Create and send an invite to an array of potential users via email to become team members on this account.
   * The invite may be limited to a specific resource.
   * The caller identity must have sufficient permissions to send invites to the account and to any additional site
   * contexts.
   * Maximum amount of new users per invite is 50.
   * @param subjectsAssignments - An array of new team members' email addresses and their corresponding new assignments to be assigned to it when their invite is accepted.
   * @documentationMaturity preview
   * @requiredField subjectsAssignments
   */
  function createInvite(subjectsAssignments: SubjectInviteAssignments[], options?: CreateInviteOptions): Promise<CreateInviteResponse>;
  interface CreateInviteOptions {
      /**
       * An indicator for suppressing (not sending) emails to the assignees.
       * @internal
       */
      suppressEmail?: boolean;
      /** The language of emails that will be used only for recipients that don't have a user, in case this parameter is unspecified, the sender's language will be used instead */
      defaultEmailLanguage?: string | null;
  }
  /**
   * Deprecated: please use CreateInvite
   * @documentationMaturity preview */
  function bulkInvite(options?: BulkInviteOptions): Promise<BulkAccountInviteResponse>;
  interface BulkInviteOptions {
      role?: string;
      emails?: string[];
      policyIds?: string[];
  }
  /** @documentationMaturity preview
   * @requiredField inviteId
   */
  function resendInvite(inviteId: string, options?: ResendInviteOptions): Promise<AccountInviteResponse>;
  interface ResendInviteOptions {
      /** The language of emails that will be used only for recipients that don't have a user, in case this parameter is unspecified, the sender's language will be used instead */
      defaultEmailLanguage?: string | null;
  }
  /** @documentationMaturity preview */
  function acceptInvite(options?: AcceptInviteOptions): Promise<void>;
  interface AcceptInviteOptions {
      inviteToken?: string;
  }
  /** @documentationMaturity preview
   * @requiredField inviteId
   */
  function revokeInvite(inviteId: string): Promise<void>;
  /**
   * Deprecated: please use UpdateInviteAssignments
   * @documentationMaturity preview
   * @requiredField inviteId
   */
  function updateInvite(inviteId: string, options?: UpdateInviteOptions): Promise<void>;
  interface UpdateInviteOptions {
      role?: string;
      policyIds?: string[];
  }
  /** @documentationMaturity preview
   * @requiredField inviteId
   */
  function updateInviteAssignments(inviteId: string, options?: UpdateInviteAssignmentsOptions): Promise<void>;
  interface UpdateInviteAssignmentsOptions {
      assignments?: InviteResourceAssignment[];
  }
  
  type identityInvitesV1AccountInvite_universal_d_AccountInvite = AccountInvite;
  type identityInvitesV1AccountInvite_universal_d_InviteStatus = InviteStatus;
  const identityInvitesV1AccountInvite_universal_d_InviteStatus: typeof InviteStatus;
  type identityInvitesV1AccountInvite_universal_d_InviteResourceAssignment = InviteResourceAssignment;
  type identityInvitesV1AccountInvite_universal_d_InviteAssignment = InviteAssignment;
  type identityInvitesV1AccountInvite_universal_d_FullNameResource = FullNameResource;
  type identityInvitesV1AccountInvite_universal_d_FullNameResourceResourceContextOneOf = FullNameResourceResourceContextOneOf;
  type identityInvitesV1AccountInvite_universal_d_SiteResourceContext = SiteResourceContext;
  type identityInvitesV1AccountInvite_universal_d_AccountResourceContext = AccountResourceContext;
  type identityInvitesV1AccountInvite_universal_d_OrganizationResourceContext = OrganizationResourceContext;
  type identityInvitesV1AccountInvite_universal_d_Resource = Resource;
  type identityInvitesV1AccountInvite_universal_d_PolicyCondition = PolicyCondition;
  type identityInvitesV1AccountInvite_universal_d_ConditionType = ConditionType;
  type identityInvitesV1AccountInvite_universal_d_ConditionTypeOfOneOf = ConditionTypeOfOneOf;
  type identityInvitesV1AccountInvite_universal_d_SimpleCondition = SimpleCondition;
  type identityInvitesV1AccountInvite_universal_d_SimpleConditionValue = SimpleConditionValue;
  type identityInvitesV1AccountInvite_universal_d_SimpleConditionValueValueOneOf = SimpleConditionValueValueOneOf;
  type identityInvitesV1AccountInvite_universal_d_SimpleConditionOperator = SimpleConditionOperator;
  const identityInvitesV1AccountInvite_universal_d_SimpleConditionOperator: typeof SimpleConditionOperator;
  type identityInvitesV1AccountInvite_universal_d_JoinedCondition = JoinedCondition;
  type identityInvitesV1AccountInvite_universal_d_JoinedConditionOperator = JoinedConditionOperator;
  const identityInvitesV1AccountInvite_universal_d_JoinedConditionOperator: typeof JoinedConditionOperator;
  type identityInvitesV1AccountInvite_universal_d_EnvironmentCondition = EnvironmentCondition;
  type identityInvitesV1AccountInvite_universal_d_EnvironmentConditionConditionOneOf = EnvironmentConditionConditionOneOf;
  type identityInvitesV1AccountInvite_universal_d_ExperimentCondition = ExperimentCondition;
  type identityInvitesV1AccountInvite_universal_d_Condition = Condition;
  type identityInvitesV1AccountInvite_universal_d_ConditionOperator = ConditionOperator;
  type identityInvitesV1AccountInvite_universal_d_ConditionOperatorOperatorsOneOf = ConditionOperatorOperatorsOneOf;
  type identityInvitesV1AccountInvite_universal_d_EqualOperator = EqualOperator;
  type identityInvitesV1AccountInvite_universal_d_ConditionValue = ConditionValue;
  type identityInvitesV1AccountInvite_universal_d_ConditionValueValueOneOf = ConditionValueValueOneOf;
  type identityInvitesV1AccountInvite_universal_d_LikeOperator = LikeOperator;
  type identityInvitesV1AccountInvite_universal_d_ExperimentOperator = ExperimentOperator;
  type identityInvitesV1AccountInvite_universal_d_DependOnOperator = DependOnOperator;
  type identityInvitesV1AccountInvite_universal_d_Subject = Subject;
  type identityInvitesV1AccountInvite_universal_d_SubjectType = SubjectType;
  const identityInvitesV1AccountInvite_universal_d_SubjectType: typeof SubjectType;
  type identityInvitesV1AccountInvite_universal_d_SubjectContext = SubjectContext;
  type identityInvitesV1AccountInvite_universal_d_SubjectContextType = SubjectContextType;
  const identityInvitesV1AccountInvite_universal_d_SubjectContextType: typeof SubjectContextType;
  type identityInvitesV1AccountInvite_universal_d_GetAccountInvitesRequest = GetAccountInvitesRequest;
  type identityInvitesV1AccountInvite_universal_d_GetAccountInvitesResponse = GetAccountInvitesResponse;
  type identityInvitesV1AccountInvite_universal_d_GetAccountInviteRequest = GetAccountInviteRequest;
  type identityInvitesV1AccountInvite_universal_d_GetAccountInviteResponse = GetAccountInviteResponse;
  type identityInvitesV1AccountInvite_universal_d_AccountInviteRequest = AccountInviteRequest;
  type identityInvitesV1AccountInvite_universal_d_AccountInviteResponse = AccountInviteResponse;
  type identityInvitesV1AccountInvite_universal_d_CreateInviteRequest = CreateInviteRequest;
  type identityInvitesV1AccountInvite_universal_d_SubjectInviteAssignments = SubjectInviteAssignments;
  type identityInvitesV1AccountInvite_universal_d_CreateInviteResponse = CreateInviteResponse;
  type identityInvitesV1AccountInvite_universal_d_InviteFailure = InviteFailure;
  type identityInvitesV1AccountInvite_universal_d_BulkAccountInviteRequest = BulkAccountInviteRequest;
  type identityInvitesV1AccountInvite_universal_d_BulkAccountInviteResponse = BulkAccountInviteResponse;
  type identityInvitesV1AccountInvite_universal_d_ResendAccountInviteRequest = ResendAccountInviteRequest;
  type identityInvitesV1AccountInvite_universal_d_AcceptAccountInviteRequest = AcceptAccountInviteRequest;
  type identityInvitesV1AccountInvite_universal_d_AcceptAccountInviteResponse = AcceptAccountInviteResponse;
  type identityInvitesV1AccountInvite_universal_d_RevokeAccountInviteRequest = RevokeAccountInviteRequest;
  type identityInvitesV1AccountInvite_universal_d_RevokeAccountInviteResponse = RevokeAccountInviteResponse;
  type identityInvitesV1AccountInvite_universal_d_UpdateAccountInviteRequest = UpdateAccountInviteRequest;
  type identityInvitesV1AccountInvite_universal_d_UpdateAccountInviteResponse = UpdateAccountInviteResponse;
  type identityInvitesV1AccountInvite_universal_d_UpdateAccountInviteAssignmentsRequest = UpdateAccountInviteAssignmentsRequest;
  type identityInvitesV1AccountInvite_universal_d_UpdateAccountInviteAssignmentsResponse = UpdateAccountInviteAssignmentsResponse;
  type identityInvitesV1AccountInvite_universal_d_ParseAccountInviteTokenRequest = ParseAccountInviteTokenRequest;
  type identityInvitesV1AccountInvite_universal_d_ParseAccountInviteTokenResponse = ParseAccountInviteTokenResponse;
  const identityInvitesV1AccountInvite_universal_d_getInvites: typeof getInvites;
  const identityInvitesV1AccountInvite_universal_d_getInvite: typeof getInvite;
  const identityInvitesV1AccountInvite_universal_d_invite: typeof invite;
  type identityInvitesV1AccountInvite_universal_d_InviteOptions = InviteOptions;
  const identityInvitesV1AccountInvite_universal_d_createInvite: typeof createInvite;
  type identityInvitesV1AccountInvite_universal_d_CreateInviteOptions = CreateInviteOptions;
  const identityInvitesV1AccountInvite_universal_d_bulkInvite: typeof bulkInvite;
  type identityInvitesV1AccountInvite_universal_d_BulkInviteOptions = BulkInviteOptions;
  const identityInvitesV1AccountInvite_universal_d_resendInvite: typeof resendInvite;
  type identityInvitesV1AccountInvite_universal_d_ResendInviteOptions = ResendInviteOptions;
  const identityInvitesV1AccountInvite_universal_d_acceptInvite: typeof acceptInvite;
  type identityInvitesV1AccountInvite_universal_d_AcceptInviteOptions = AcceptInviteOptions;
  const identityInvitesV1AccountInvite_universal_d_revokeInvite: typeof revokeInvite;
  const identityInvitesV1AccountInvite_universal_d_updateInvite: typeof updateInvite;
  type identityInvitesV1AccountInvite_universal_d_UpdateInviteOptions = UpdateInviteOptions;
  const identityInvitesV1AccountInvite_universal_d_updateInviteAssignments: typeof updateInviteAssignments;
  type identityInvitesV1AccountInvite_universal_d_UpdateInviteAssignmentsOptions = UpdateInviteAssignmentsOptions;
  namespace identityInvitesV1AccountInvite_universal_d {
    export {
      __debug$1 as __debug,
      identityInvitesV1AccountInvite_universal_d_AccountInvite as AccountInvite,
      identityInvitesV1AccountInvite_universal_d_InviteStatus as InviteStatus,
      identityInvitesV1AccountInvite_universal_d_InviteResourceAssignment as InviteResourceAssignment,
      identityInvitesV1AccountInvite_universal_d_InviteAssignment as InviteAssignment,
      identityInvitesV1AccountInvite_universal_d_FullNameResource as FullNameResource,
      identityInvitesV1AccountInvite_universal_d_FullNameResourceResourceContextOneOf as FullNameResourceResourceContextOneOf,
      identityInvitesV1AccountInvite_universal_d_SiteResourceContext as SiteResourceContext,
      identityInvitesV1AccountInvite_universal_d_AccountResourceContext as AccountResourceContext,
      identityInvitesV1AccountInvite_universal_d_OrganizationResourceContext as OrganizationResourceContext,
      identityInvitesV1AccountInvite_universal_d_Resource as Resource,
      identityInvitesV1AccountInvite_universal_d_PolicyCondition as PolicyCondition,
      identityInvitesV1AccountInvite_universal_d_ConditionType as ConditionType,
      identityInvitesV1AccountInvite_universal_d_ConditionTypeOfOneOf as ConditionTypeOfOneOf,
      identityInvitesV1AccountInvite_universal_d_SimpleCondition as SimpleCondition,
      identityInvitesV1AccountInvite_universal_d_SimpleConditionValue as SimpleConditionValue,
      identityInvitesV1AccountInvite_universal_d_SimpleConditionValueValueOneOf as SimpleConditionValueValueOneOf,
      identityInvitesV1AccountInvite_universal_d_SimpleConditionOperator as SimpleConditionOperator,
      identityInvitesV1AccountInvite_universal_d_JoinedCondition as JoinedCondition,
      identityInvitesV1AccountInvite_universal_d_JoinedConditionOperator as JoinedConditionOperator,
      identityInvitesV1AccountInvite_universal_d_EnvironmentCondition as EnvironmentCondition,
      identityInvitesV1AccountInvite_universal_d_EnvironmentConditionConditionOneOf as EnvironmentConditionConditionOneOf,
      identityInvitesV1AccountInvite_universal_d_ExperimentCondition as ExperimentCondition,
      identityInvitesV1AccountInvite_universal_d_Condition as Condition,
      identityInvitesV1AccountInvite_universal_d_ConditionOperator as ConditionOperator,
      identityInvitesV1AccountInvite_universal_d_ConditionOperatorOperatorsOneOf as ConditionOperatorOperatorsOneOf,
      identityInvitesV1AccountInvite_universal_d_EqualOperator as EqualOperator,
      identityInvitesV1AccountInvite_universal_d_ConditionValue as ConditionValue,
      identityInvitesV1AccountInvite_universal_d_ConditionValueValueOneOf as ConditionValueValueOneOf,
      identityInvitesV1AccountInvite_universal_d_LikeOperator as LikeOperator,
      identityInvitesV1AccountInvite_universal_d_ExperimentOperator as ExperimentOperator,
      identityInvitesV1AccountInvite_universal_d_DependOnOperator as DependOnOperator,
      identityInvitesV1AccountInvite_universal_d_Subject as Subject,
      identityInvitesV1AccountInvite_universal_d_SubjectType as SubjectType,
      identityInvitesV1AccountInvite_universal_d_SubjectContext as SubjectContext,
      identityInvitesV1AccountInvite_universal_d_SubjectContextType as SubjectContextType,
      identityInvitesV1AccountInvite_universal_d_GetAccountInvitesRequest as GetAccountInvitesRequest,
      identityInvitesV1AccountInvite_universal_d_GetAccountInvitesResponse as GetAccountInvitesResponse,
      identityInvitesV1AccountInvite_universal_d_GetAccountInviteRequest as GetAccountInviteRequest,
      identityInvitesV1AccountInvite_universal_d_GetAccountInviteResponse as GetAccountInviteResponse,
      identityInvitesV1AccountInvite_universal_d_AccountInviteRequest as AccountInviteRequest,
      identityInvitesV1AccountInvite_universal_d_AccountInviteResponse as AccountInviteResponse,
      identityInvitesV1AccountInvite_universal_d_CreateInviteRequest as CreateInviteRequest,
      identityInvitesV1AccountInvite_universal_d_SubjectInviteAssignments as SubjectInviteAssignments,
      identityInvitesV1AccountInvite_universal_d_CreateInviteResponse as CreateInviteResponse,
      identityInvitesV1AccountInvite_universal_d_InviteFailure as InviteFailure,
      identityInvitesV1AccountInvite_universal_d_BulkAccountInviteRequest as BulkAccountInviteRequest,
      identityInvitesV1AccountInvite_universal_d_BulkAccountInviteResponse as BulkAccountInviteResponse,
      identityInvitesV1AccountInvite_universal_d_ResendAccountInviteRequest as ResendAccountInviteRequest,
      identityInvitesV1AccountInvite_universal_d_AcceptAccountInviteRequest as AcceptAccountInviteRequest,
      identityInvitesV1AccountInvite_universal_d_AcceptAccountInviteResponse as AcceptAccountInviteResponse,
      identityInvitesV1AccountInvite_universal_d_RevokeAccountInviteRequest as RevokeAccountInviteRequest,
      identityInvitesV1AccountInvite_universal_d_RevokeAccountInviteResponse as RevokeAccountInviteResponse,
      identityInvitesV1AccountInvite_universal_d_UpdateAccountInviteRequest as UpdateAccountInviteRequest,
      identityInvitesV1AccountInvite_universal_d_UpdateAccountInviteResponse as UpdateAccountInviteResponse,
      identityInvitesV1AccountInvite_universal_d_UpdateAccountInviteAssignmentsRequest as UpdateAccountInviteAssignmentsRequest,
      identityInvitesV1AccountInvite_universal_d_UpdateAccountInviteAssignmentsResponse as UpdateAccountInviteAssignmentsResponse,
      identityInvitesV1AccountInvite_universal_d_ParseAccountInviteTokenRequest as ParseAccountInviteTokenRequest,
      identityInvitesV1AccountInvite_universal_d_ParseAccountInviteTokenResponse as ParseAccountInviteTokenResponse,
      identityInvitesV1AccountInvite_universal_d_getInvites as getInvites,
      identityInvitesV1AccountInvite_universal_d_getInvite as getInvite,
      identityInvitesV1AccountInvite_universal_d_invite as invite,
      identityInvitesV1AccountInvite_universal_d_InviteOptions as InviteOptions,
      identityInvitesV1AccountInvite_universal_d_createInvite as createInvite,
      identityInvitesV1AccountInvite_universal_d_CreateInviteOptions as CreateInviteOptions,
      identityInvitesV1AccountInvite_universal_d_bulkInvite as bulkInvite,
      identityInvitesV1AccountInvite_universal_d_BulkInviteOptions as BulkInviteOptions,
      identityInvitesV1AccountInvite_universal_d_resendInvite as resendInvite,
      identityInvitesV1AccountInvite_universal_d_ResendInviteOptions as ResendInviteOptions,
      identityInvitesV1AccountInvite_universal_d_acceptInvite as acceptInvite,
      identityInvitesV1AccountInvite_universal_d_AcceptInviteOptions as AcceptInviteOptions,
      identityInvitesV1AccountInvite_universal_d_revokeInvite as revokeInvite,
      identityInvitesV1AccountInvite_universal_d_updateInvite as updateInvite,
      identityInvitesV1AccountInvite_universal_d_UpdateInviteOptions as UpdateInviteOptions,
      identityInvitesV1AccountInvite_universal_d_updateInviteAssignments as updateInviteAssignments,
      identityInvitesV1AccountInvite_universal_d_UpdateInviteAssignmentsOptions as UpdateInviteAssignmentsOptions,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface RefreshToken {
      token?: string;
  }
  interface AuthorizeRequest {
      /** Tells the authorization server which grant to execute. */
      responseType?: string;
      /** The ID of the application that asks for authorization. */
      clientId?: string;
      /** Holds a URL. A successful response from this endpoint results in a redirect to this URL. */
      redirectUri?: string | null;
      /** A list of scopes that the application requires. */
      scope?: Scope;
      /** An opaque value, used for security purposes. If this request parameter is set in the request, then it is returned to the application as part of the redirect_uri. */
      state?: string;
      /** (Optional) How the result of the authorization request is formatted */
      responseMode?: string | null;
      /** PKCE hashed code */
      codeChallenge?: string | null;
      /** PKCE hashing method */
      codeChallengeMethod?: string | null;
      /** Current client session */
      sessionToken?: string | null;
  }
  interface Scope {
      /** A list of permissions that the application requires. Empty list means the default list of scopes. */
      ids?: string[];
  }
  interface RawHttpResponse {
      body?: Uint8Array;
      statusCode?: number | null;
      headers?: HeadersEntry[];
  }
  interface HeadersEntry {
      key?: string;
      value?: string;
  }
  interface TokenRequest extends TokenRequestGrantTypeOneOf {
      /** Authorization code given at the authorize endpoint. */
      authorizationCode?: AuthorizationCode;
      /** Authorization code given at the authorize endpoint with the PKCE extention. */
      pkce?: PKCE;
      /** Device code given at the device code endpoint. */
      deviceCode?: DeviceCode;
      /** Refresh Token that was issued by this service beforehand. */
      refreshToken?: RefreshToken;
      /** Client credentials for authenticating a client */
      clientCredentials?: ClientCredentials;
      /** Granting a pre authenticated token for basic access. */
      preAuthenticated?: PreAuthenticated;
  }
  /** @oneof */
  interface TokenRequestGrantTypeOneOf {
      /** Authorization code given at the authorize endpoint. */
      authorizationCode?: AuthorizationCode;
      /** Authorization code given at the authorize endpoint with the PKCE extention. */
      pkce?: PKCE;
      /** Device code given at the device code endpoint. */
      deviceCode?: DeviceCode;
      /** Refresh Token that was issued by this service beforehand. */
      refreshToken?: RefreshToken;
      /** Client credentials for authenticating a client */
      clientCredentials?: ClientCredentials;
      /** Granting a pre authenticated token for basic access. */
      preAuthenticated?: PreAuthenticated;
  }
  interface AuthorizationCode {
      code?: string;
  }
  interface PKCE {
      authorizationCode?: AuthorizationCode;
      /** PKCE code */
      code?: string | null;
  }
  interface DeviceCode {
      deviceCode?: string;
  }
  interface ClientCredentials {
  }
  interface PreAuthenticated {
      clientId?: string;
  }
  interface TokenResponse {
      accessToken?: AccessToken;
      refreshToken?: RefreshToken;
  }
  interface AccessToken {
      /** The access token string as issued by the authorization server. */
      token?: string;
  }
  interface DeviceCodeRequest {
      /** The ID of the application that asks for authorization. */
      clientId?: string;
      /** A list of permissions that the application requires. Empty list means the default list of scopes. */
      scope?: Scope;
  }
  interface DeviceCodeResponse {
      /** is the unique code for the device. When the user goes to the verification_uri in their browser-based device, this code will be bound to their session. */
      deviceCode?: string;
      /** contains the code that should be input at the verification_uri to authorize the device. */
      userCode?: string;
      /** contains the URL the user should visit to authorize the device. */
      verificationUri?: string;
      /** indicates the lifetime (in seconds) of the device_code and user_code. */
      expiresIn?: number;
      /** indicates the interval (in seconds) at which the app should poll the token URL to request a token. clients MUST use 5 as the default */
      interval?: number | null;
  }
  interface DeviceVerifyRequest {
      /** User code representing a currently authorizing device. */
      userCode?: string;
  }
  interface DeviceVerifyResponse {
  }
  /** @public
   * @documentationMaturity preview
   */
  function authorize(options?: AuthorizeOptions): Promise<RawHttpResponse>;
  interface AuthorizeOptions {
      /** Tells the authorization server which grant to execute. */
      responseType?: string;
      /** The ID of the application that asks for authorization. */
      clientId?: string;
      /** Holds a URL. A successful response from this endpoint results in a redirect to this URL. */
      redirectUri?: string | null;
      /** A list of scopes that the application requires. */
      scope?: Scope;
      /** An opaque value, used for security purposes. If this request parameter is set in the request, then it is returned to the application as part of the redirect_uri. */
      state?: string;
      /** (Optional) How the result of the authorization request is formatted */
      responseMode?: string | null;
      /** PKCE hashed code */
      codeChallenge?: string | null;
      /** PKCE hashing method */
      codeChallengeMethod?: string | null;
      /** Current client session */
      sessionToken?: string | null;
  }
  /** @public
   * @documentationMaturity preview
   */
  function token(options?: TokenOptions): Promise<TokenResponse>;
  interface TokenOptions {
      /** Authorization code given at the authorize endpoint. */
      authorizationCode?: AuthorizationCode;
      /** Authorization code given at the authorize endpoint with the PKCE extention. */
      pkce?: PKCE;
      /** Device code given at the device code endpoint. */
      deviceCode?: DeviceCode;
      /** Refresh Token that was issued by this service beforehand. */
      refreshToken?: RefreshToken;
      /** Client credentials for authenticating a client */
      clientCredentials?: ClientCredentials;
      /** Granting a pre authenticated token for basic access. */
      preAuthenticated?: PreAuthenticated;
  }
  /**
   * this endpoint serves the Device Authorization Flow as described in https://www.rfc-editor.org/rfc/pdfrfc/rfc8628.txt.pdf
   * @public
   * @documentationMaturity preview
   */
  function deviceCode(options?: DeviceCodeOptions): Promise<DeviceCodeResponse>;
  interface DeviceCodeOptions {
      /** The ID of the application that asks for authorization. */
      clientId?: string;
      /** A list of permissions that the application requires. Empty list means the default list of scopes. */
      scope?: Scope;
  }
  /**
   * this endpoint serves the Device Authorization Flow as described in https://www.rfc-editor.org/rfc/pdfrfc/rfc8628.txt.pdf
   * @public
   * @documentationMaturity preview
   */
  function deviceVerify(options?: DeviceVerifyOptions): Promise<void>;
  interface DeviceVerifyOptions {
      /** User code representing a currently authorizing device. */
      userCode?: string;
  }
  
  const identityOauthV1RefreshToken_universal_d___debug: typeof __debug;
  type identityOauthV1RefreshToken_universal_d_RefreshToken = RefreshToken;
  type identityOauthV1RefreshToken_universal_d_AuthorizeRequest = AuthorizeRequest;
  type identityOauthV1RefreshToken_universal_d_Scope = Scope;
  type identityOauthV1RefreshToken_universal_d_RawHttpResponse = RawHttpResponse;
  type identityOauthV1RefreshToken_universal_d_HeadersEntry = HeadersEntry;
  type identityOauthV1RefreshToken_universal_d_TokenRequest = TokenRequest;
  type identityOauthV1RefreshToken_universal_d_TokenRequestGrantTypeOneOf = TokenRequestGrantTypeOneOf;
  type identityOauthV1RefreshToken_universal_d_AuthorizationCode = AuthorizationCode;
  type identityOauthV1RefreshToken_universal_d_PKCE = PKCE;
  type identityOauthV1RefreshToken_universal_d_DeviceCode = DeviceCode;
  type identityOauthV1RefreshToken_universal_d_ClientCredentials = ClientCredentials;
  type identityOauthV1RefreshToken_universal_d_PreAuthenticated = PreAuthenticated;
  type identityOauthV1RefreshToken_universal_d_TokenResponse = TokenResponse;
  type identityOauthV1RefreshToken_universal_d_AccessToken = AccessToken;
  type identityOauthV1RefreshToken_universal_d_DeviceCodeRequest = DeviceCodeRequest;
  type identityOauthV1RefreshToken_universal_d_DeviceCodeResponse = DeviceCodeResponse;
  type identityOauthV1RefreshToken_universal_d_DeviceVerifyRequest = DeviceVerifyRequest;
  type identityOauthV1RefreshToken_universal_d_DeviceVerifyResponse = DeviceVerifyResponse;
  const identityOauthV1RefreshToken_universal_d_authorize: typeof authorize;
  type identityOauthV1RefreshToken_universal_d_AuthorizeOptions = AuthorizeOptions;
  const identityOauthV1RefreshToken_universal_d_token: typeof token;
  type identityOauthV1RefreshToken_universal_d_TokenOptions = TokenOptions;
  const identityOauthV1RefreshToken_universal_d_deviceCode: typeof deviceCode;
  type identityOauthV1RefreshToken_universal_d_DeviceCodeOptions = DeviceCodeOptions;
  const identityOauthV1RefreshToken_universal_d_deviceVerify: typeof deviceVerify;
  type identityOauthV1RefreshToken_universal_d_DeviceVerifyOptions = DeviceVerifyOptions;
  namespace identityOauthV1RefreshToken_universal_d {
    export {
      identityOauthV1RefreshToken_universal_d___debug as __debug,
      identityOauthV1RefreshToken_universal_d_RefreshToken as RefreshToken,
      identityOauthV1RefreshToken_universal_d_AuthorizeRequest as AuthorizeRequest,
      identityOauthV1RefreshToken_universal_d_Scope as Scope,
      identityOauthV1RefreshToken_universal_d_RawHttpResponse as RawHttpResponse,
      identityOauthV1RefreshToken_universal_d_HeadersEntry as HeadersEntry,
      identityOauthV1RefreshToken_universal_d_TokenRequest as TokenRequest,
      identityOauthV1RefreshToken_universal_d_TokenRequestGrantTypeOneOf as TokenRequestGrantTypeOneOf,
      identityOauthV1RefreshToken_universal_d_AuthorizationCode as AuthorizationCode,
      identityOauthV1RefreshToken_universal_d_PKCE as PKCE,
      identityOauthV1RefreshToken_universal_d_DeviceCode as DeviceCode,
      identityOauthV1RefreshToken_universal_d_ClientCredentials as ClientCredentials,
      identityOauthV1RefreshToken_universal_d_PreAuthenticated as PreAuthenticated,
      identityOauthV1RefreshToken_universal_d_TokenResponse as TokenResponse,
      identityOauthV1RefreshToken_universal_d_AccessToken as AccessToken,
      identityOauthV1RefreshToken_universal_d_DeviceCodeRequest as DeviceCodeRequest,
      identityOauthV1RefreshToken_universal_d_DeviceCodeResponse as DeviceCodeResponse,
      identityOauthV1RefreshToken_universal_d_DeviceVerifyRequest as DeviceVerifyRequest,
      identityOauthV1RefreshToken_universal_d_DeviceVerifyResponse as DeviceVerifyResponse,
      identityOauthV1RefreshToken_universal_d_authorize as authorize,
      identityOauthV1RefreshToken_universal_d_AuthorizeOptions as AuthorizeOptions,
      identityOauthV1RefreshToken_universal_d_token as token,
      identityOauthV1RefreshToken_universal_d_TokenOptions as TokenOptions,
      identityOauthV1RefreshToken_universal_d_deviceCode as deviceCode,
      identityOauthV1RefreshToken_universal_d_DeviceCodeOptions as DeviceCodeOptions,
      identityOauthV1RefreshToken_universal_d_deviceVerify as deviceVerify,
      identityOauthV1RefreshToken_universal_d_DeviceVerifyOptions as DeviceVerifyOptions,
    };
  }
  
  export { identityInvitesV1AccountInvite_universal_d as invitesService, identityOauthV1RefreshToken_universal_d as oauth };
}
