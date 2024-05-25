declare module "wix-email-marketing.v2" {
    const __debug$2: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    /**
     * An account can be active or in some state of suspension (warned/suspended/banned).
     * If a user is in a state of suspension they must visit their email marketing account in the Wix business manager and follow the instructions.
     */
    interface AccountDetails {
        /**
         * Account status. One of:
         * + `'ACTIVE'`
         * + `'WARNED'`
         * + `'SUSPENDED'`
         * + `'BANNED'`
         */
        status?: Enum$1;
        /** Current premium package information. */
        package?: Package;
        /** Quota period and usage. */
        quotaPeriod?: QuotaPeriod;
    }
    enum Enum$1 {
        UNKNOWN = "UNKNOWN",
        /** Able to use email marketing normally. */
        ACTIVE = "ACTIVE",
        /** Must explicitly agree to terms of use to activate account. */
        WARNED = "WARNED",
        /** Must fill out compliance questionnaire, unable to use email marketing. */
        SUSPENDED = "SUSPENDED",
        /** Able to open a support ticket, unable to use email marketing. */
        BANNED = "BANNED"
    }
    interface Package {
        /** Package ID. */
        _id?: string;
        /** Package group. */
        group?: string;
        /** Allocated quota per month. */
        monthlyQuotaAllocation?: Quota;
    }
    interface Quota {
        /** Number of allocated marketing campaigns per month (-1 means unlimited). */
        campaigns?: number;
        /** Number of allocated individual emails per month. */
        emails?: number;
    }
    interface QuotaPeriod {
        /** Current quota period start date. */
        dateFrom?: Date;
        /** Current quota period end date - after which quota will roll over. */
        dateTo?: Date;
        /** Information about allocated quota already used in this period. */
        quotaUsage?: Quota;
    }
    interface GetAccountDetailsRequest {
    }
    interface GetAccountDetailsResponse {
        /** Current account details. */
        accountDetails?: AccountDetails;
    }
    /**
     * Retrieves email marketing account details.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @adminMethod
     */
    function getAccountDetails(): Promise<GetAccountDetailsResponse>;
    type emailMarketingV1AccountDetails_universal_d_AccountDetails = AccountDetails;
    type emailMarketingV1AccountDetails_universal_d_Package = Package;
    type emailMarketingV1AccountDetails_universal_d_Quota = Quota;
    type emailMarketingV1AccountDetails_universal_d_QuotaPeriod = QuotaPeriod;
    type emailMarketingV1AccountDetails_universal_d_GetAccountDetailsRequest = GetAccountDetailsRequest;
    type emailMarketingV1AccountDetails_universal_d_GetAccountDetailsResponse = GetAccountDetailsResponse;
    const emailMarketingV1AccountDetails_universal_d_getAccountDetails: typeof getAccountDetails;
    namespace emailMarketingV1AccountDetails_universal_d {
        export { __debug$2 as __debug, emailMarketingV1AccountDetails_universal_d_AccountDetails as AccountDetails, Enum$1 as Enum, emailMarketingV1AccountDetails_universal_d_Package as Package, emailMarketingV1AccountDetails_universal_d_Quota as Quota, emailMarketingV1AccountDetails_universal_d_QuotaPeriod as QuotaPeriod, emailMarketingV1AccountDetails_universal_d_GetAccountDetailsRequest as GetAccountDetailsRequest, emailMarketingV1AccountDetails_universal_d_GetAccountDetailsResponse as GetAccountDetailsResponse, emailMarketingV1AccountDetails_universal_d_getAccountDetails as getAccountDetails, };
    }
    const __debug$1: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Campaign {
        /** Campaign ID. */
        campaignId?: string;
        /**
         * Marketing campaign title. For sent campaigns this will match the email subject if subject was not explicitly provided on sending.
         * For published campaigns - the title will be the first line of text.
         */
        title?: string | null;
        /** URL of first image after the logo. */
        firstImageUrl?: string | null;
        /** URL of the landing page snapshot. */
        snapshotImageUrl?: string | null;
        /**
         * Editor type. Either web app, or mobile app. One of:
         * + `'WEB'`
         * + `'MOBILE'`
         */
        editorType?: CampaignEditorTypeEnum;
        /**
         * Campaign status. One of:
         * + `'ACTIVE'`
         * + `'ARCHIVED'`
         * + `'DELETED'`
         */
        status?: CampaignStatusEnum;
        /**
         * Campaign visibility status. One of:
         * + `'DRAFT'`
         * + `'PUBLISHED'`
         * + `'TEMPLATE'`
         */
        visibilityStatus?: CampaignVisibilityStatusEnum;
        /**
         * Campaign distribution status. One of:
         * + `'NOT_STARTED'`
         * + `'SCHEDULED'`
         * + `'IN_DETECTION'`
         * + `'IN_MODERATION'`
         * + `'SAMPLING'`
         * + `'SENDING'`
         * + `'REJECTED'`
         * + `'TERMINATED'`
         * + `'DISTRIBUTED'`
         * + `'PAUSED'`
         */
        distributionStatus?: Enum;
        /** Publishing data (present only if campaign is published). */
        publishingData?: PublishingData;
        /** Campaign creation date. */
        dateCreated?: Date;
        /** Campaign last update date. */
        dateUpdated?: Date;
    }
    enum CampaignEditorTypeEnum {
        UNKNOWN = "UNKNOWN",
        WEB = "WEB",
        MOBILE = "MOBILE"
    }
    enum CampaignStatusEnum {
        UNKNOWN = "UNKNOWN",
        /** Campaign is active. */
        ACTIVE = "ACTIVE",
        /** Campaign is archived. */
        ARCHIVED = "ARCHIVED",
        /** Campaign is deleted. */
        DELETED = "DELETED"
    }
    enum CampaignVisibilityStatusEnum {
        UNKNOWN = "UNKNOWN",
        /** Campaign not yet published. */
        DRAFT = "DRAFT",
        /** Campaign published. */
        PUBLISHED = "PUBLISHED",
        /** Campaign is a template. */
        TEMPLATE = "TEMPLATE"
    }
    enum Enum {
        UNKNOWN = "UNKNOWN",
        /** Campaign not yet distributed via emails. */
        NOT_STARTED = "NOT_STARTED",
        /** Campaign scheduled for distribution. */
        SCHEDULED = "SCHEDULED",
        /** Campaign is being automatically screened for malicious content. */
        IN_DETECTION = "IN_DETECTION",
        /** Campaign is being manually reviewed by moderators. */
        IN_MODERATION = "IN_MODERATION",
        /** A fraction of recipients is selected as a sample and its performance will be assessed to determine further action. */
        SAMPLING = "SAMPLING",
        /** Campaign is being distributed to all recipients. */
        SENDING = "SENDING",
        /** Campaign was rejected. */
        REJECTED = "REJECTED",
        /** Campaign was terminated after unsuccessful sampling. */
        TERMINATED = "TERMINATED",
        /** Campaign fully distributed to recipients. */
        DISTRIBUTED = "DISTRIBUTED",
        /** Scheduled campaign has been paused. */
        PAUSED = "PAUSED"
    }
    interface PublishingData {
        /** Landing page URL. */
        landingPageUrl?: string;
        /** Marketing campaign statistics. */
        statistics?: CampaignStatistics;
        /** Marketing campaign publish date. */
        datePublished?: Date;
    }
    interface CampaignStatistics {
        /** Marketing campaign's landing page statistics. */
        landingPage?: LandingPageStatistics;
        /** Marketing campaign's email distribution statistics. */
        emailCampaign?: DistributionStatistics;
        /** Combined landing page and email distribution statistics. */
        total?: TotalStatistics;
    }
    interface LandingPageStatistics {
        /** Number of times landing page was loaded or viewed. */
        opened?: number;
        /** Number of times a link was clicked in landing page. */
        clicked?: number;
    }
    interface DistributionStatistics {
        /** Number of emails delivered. */
        delivered?: number;
        /**
         * Number of recipients who opened an email.
         *
         * If a single recipient opens an email twice, it is counted as one unique open.
         */
        opened?: number;
        /**
         * Number of recipients who clicked a link in the email.
         *
         * If a single recipient clicks a link in an email twice, it is counted as one unique click.
         * If a single recipient clicks different links in an email, it is counted as one unique click.
         */
        clicked?: number;
        /** Number of emails that bounced. */
        bounced?: number;
        /** Number of recipients who reported email as spam. */
        complained?: number;
        /** Number of emails not sent because the campaign was terminated. */
        notSent?: number;
    }
    interface TotalStatistics {
        /** Total number of emails sent. */
        mailsSent?: number;
        /** Number of landing page views + emails opened. */
        opened?: number;
        /** Number of landing page link clicks + email link clicks. */
        clicked?: number;
    }
    interface RejectionData {
        rejectionReasons?: RejectionReasonEnum[];
    }
    enum RejectionReasonEnum {
        UNKNOWN = "UNKNOWN",
        LOW_ENGAGEMENT = "LOW_ENGAGEMENT",
        SENDER_DETAILS = "SENDER_DETAILS",
        SPAM_TRAPS = "SPAM_TRAPS",
        OTHER = "OTHER",
        ADULT_SEXUAL_CONTENT = "ADULT_SEXUAL_CONTENT",
        AFFILIATE_MARKETING = "AFFILIATE_MARKETING",
        BETTING_OR_GAMBLING = "BETTING_OR_GAMBLING",
        CREDIT_REPAIR_OR_DEBT_RELIEF = "CREDIT_REPAIR_OR_DEBT_RELIEF",
        GET_RICH_QUICK_SCHEME = "GET_RICH_QUICK_SCHEME",
        ILLEGAL_SUBSTANCES_OR_WEAPONS = "ILLEGAL_SUBSTANCES_OR_WEAPONS",
        MISLEADING_SUBJECT_LINE = "MISLEADING_SUBJECT_LINE",
        TRADING_OR_CRYPTOCURRENCIES = "TRADING_OR_CRYPTOCURRENCIES",
        UNSOLICITED_CONTENT = "UNSOLICITED_CONTENT"
    }
    enum CampaignSendingStateEnum {
        /** Campaign not yet published. */
        DRAFT = "DRAFT",
        /** Campaign is being reviewed. */
        REVIEW = "REVIEW",
        /** Campaign was rejected. */
        REJECTED = "REJECTED",
        /** Campaign is scheduled. */
        SCHEDULED = "SCHEDULED",
        /** Scheduled campaign was paused. */
        PAUSED = "PAUSED",
        /** Campaign is published. */
        PUBLISHED = "PUBLISHED",
        /** Campaign is being send. */
        SENDING = "SENDING",
        /**
         * Campaign was partially sent.
         * Happens when too many recipients bounce.
         */
        PARTIALLY_SENT = "PARTIALLY_SENT",
        /** Campaign was sent. */
        SENT = "SENT"
    }
    enum CampaignTypeEnum {
        UNKNOWN = "UNKNOWN",
        /** Regular email marketing campaign. */
        EMAIL_MARKETING = "EMAIL_MARKETING",
        /** mobile place invitation email */
        INVITATION = "INVITATION",
        /** automation */
        AUTOMATION = "AUTOMATION",
        /** triggered email */
        TRIGGERED = "TRIGGERED"
    }
    interface ListStatisticsRequest {
        /**
         * IDs of the campaigns to retrieve.
         *
         * Max: 100 campaigns
         */
        campaignIds: string[];
    }
    interface ListStatisticsResponse {
        /** List of statistics. */
        statistics?: CampaignStatisticsContainer[];
    }
    interface CampaignStatisticsContainer {
        /** Campaign ID. */
        campaignId?: string;
        /** Landing page statistics. */
        landingPage?: LandingPageStatistics;
        /** Email campaign statistics. */
        email?: DistributionStatistics;
    }
    interface ListRecipientsRequest {
        /** Campaign ID. */
        campaignId: string;
        /**
         * __Required.__ Email activity to filter for. One of:
         * + `'DELIVERED'`
         * + `'OPENED'`
         * + `'CLICKED'`
         * + `'BOUNCED'`
         * + `'NOT_SENT'`
         */
        activity: RecipientsActivityEnum;
        /** Pagination options. */
        paging?: CursorPaging;
    }
    enum RecipientsActivityEnum {
        UNKNOWN = "UNKNOWN",
        DELIVERED = "DELIVERED",
        OPENED = "OPENED",
        CLICKED = "CLICKED",
        BOUNCED = "BOUNCED",
        NOT_SENT = "NOT_SENT"
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
    interface ListRecipientsResponse {
        /** List of recipients. */
        recipients?: CampaignRecipientDetails[];
        /** Details on the paged set of returned results. */
        pagingMetadata?: PagingMetadataV2;
    }
    interface CampaignRecipientDetails {
        /** Contact ID. */
        contactId?: string;
        /** Date and time of the last activity. */
        lastActivityDate?: Date;
    }
    interface PagingMetadataV2 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Offset that was requested. */
        offset?: number | null;
        /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
        total?: number | null;
        /** Flag that indicates the server failed to calculate the `total` field. */
        tooManyToCount?: boolean | null;
        /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
        cursors?: Cursors;
    }
    interface Cursors {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface GetCampaignMappingRequest {
        /** rule ID in automations */
        automationRuleId: string;
        /** template ID configured for the automation */
        templateId: string;
    }
    interface GetCampaignMappingResponse {
        campaignId?: string;
    }
    interface GetPingCampaignMappingRequest {
        /** ping stream ID. */
        streamId: string;
        /** template ID configured for the ping automation. */
        templateId: string;
        /** ID of the initiating vertical. */
        appDefId: string;
        /** Ping template ID. */
        pingTemplateId?: string | null;
        /** Preferred language (optional). */
        language: string;
        /** rule ID in automations */
        automationRuleId: string;
    }
    interface GetPingCampaignMappingResponse {
        campaignId?: string;
    }
    interface QueryAutomationTemplatesRequest {
        /** https://github.com/wix-private/p13n/blob/master/protos/query/src/main/proto/wix/common/query.proto */
        query?: Query;
    }
    interface Query {
        /**
         * Filter object in the following format:
         * `"filter" : {
         * "fieldName1": "value1",
         * "fieldName2":{"$operator":"value2"}
         * }`
         * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
         */
        filter?: any;
        /**
         * Sort object in the following format:
         * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
         */
        sort?: Sorting[];
        /** Paging options to limit and skip the number of items. */
        paging?: Paging;
        /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
        fields?: string[];
        /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
        fieldsets?: string[];
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
    interface Paging {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface QueryAutomationTemplatesResponse {
        entries?: AutomationTemplateContainer[];
        metaData?: QueryMetadata;
        total?: number;
    }
    interface AutomationTemplateContainer {
        automationTemplate?: AutomationTemplate;
        enrichmentData?: AutomationTemplateEnrichmentData;
    }
    interface AutomationTemplate {
        /**
         * Automation template ID (unique)
         * @readonly
         */
        _id?: string | null;
        /**
         * Automation template current revision
         * @readonly
         */
        revision?: number | null;
        /** Automation template name */
        name?: string | null;
        /** Automation template description */
        description?: string | null;
        /** Automation template rule configuration */
        rule?: RuleConfiguration;
        /** Automation template correlation id - TODO: rename */
        correlationId?: string | null;
        /** Automation template type */
        templateType?: TemplateType;
        /** Automation template preconditions */
        preconditions?: Precondition[];
        /** used to determine which users will see the Automation template while in internal state */
        groupIds?: string[];
        /**
         * Automation template state
         * @readonly
         */
        templateState?: TemplateState;
        /**
         * Automation template created date
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Automation template updated date
         * @readonly
         */
        _updatedDate?: Date;
        /** @readonly */
        translation?: Translation;
        /**
         * key -> english value, we will include those keys in the translator json and send them for translations.
         * in the "search rules" api they will be resolved with their translation
         */
        additionalTranslations?: Record<string, string>;
    }
    interface RuleConfiguration {
        /** Rule configuration name */
        name?: string;
        /** Rule configuration description */
        description?: string;
        /** Trigger configuration */
        trigger?: TriggerConfiguration;
        /** Actions configuration */
        actions?: ActionConfiguration[];
        /** Rule status */
        ruleStatus?: RuleStatus;
        /** Activation cycle */
        activationCycle?: ActivationCycle;
        metadata?: RuleMetadata;
    }
    interface ConditionConfiguration {
        /** Condition schema key */
        schemaKey?: string;
        /** Condition operator */
        operator?: Operator;
        /** Condition values */
        values?: string[];
    }
    enum Operator {
        UNDEFINED = "UNDEFINED",
        IN = "IN"
    }
    interface TriggerConfiguration {
        /** Trigger source app def id */
        appDefId?: string;
        /** Trigger name */
        triggerName?: string;
        /** Trigger schema */
        triggerSchema?: string;
        /** Condition configuration */
        conditions?: ConditionConfiguration[];
        /** TODO - might need to replace the entire object */
        triggerConfigurationId?: string | null;
        /** Trigger Reengagement delay internal in sec */
        reengagementDelaySec?: number | null;
    }
    interface ActionConfiguration {
        _id?: string | null;
        /** Action source app def id */
        appDefId?: string;
        /** Action name */
        actionName?: string;
        /** Action configuration */
        configuration?: string;
        /** Delay interval in seconds */
        delayIntervalSec?: number;
    }
    enum RuleStatus {
        UnknownStatus = "UnknownStatus",
        Active = "Active",
        Suspended = "Suspended"
    }
    interface ActivationCycle {
        /** set a time frame in minutes for the once_per_user attribute, use 0 for infinite */
        timeFrame?: number;
        /** number of activations allowed in the given time_frame */
        activations?: number;
        rateLimitingJsonata?: string | null;
    }
    interface RuleMetadata {
        /** default value is 'true', when this is set to 'false' user wont be able to toggle off the rule */
        canBeSuspended?: boolean | null;
        /** additional notes to describe the rule */
        notes?: string | null;
        /** will be used to indicate to user how urgent is this change during "version" changes */
        versionType?: VersionType;
    }
    enum VersionType {
        UNKNOWN_VERSION_TYPE = "UNKNOWN_VERSION_TYPE",
        MINOR = "MINOR",
        MAJOR = "MAJOR"
    }
    /** Type */
    enum TemplateType {
        UNKNOWN_TEMPLATE_TYPE = "UNKNOWN_TEMPLATE_TYPE",
        PREINSTALLED = "PREINSTALLED",
        RECIPE = "RECIPE"
    }
    /**
     * {
     * State message examples:
     * precondition_type: PreconditionType.Petri,
     * key: ‘specs.crm.InvoicesSendViaAutomationsABC’,
     * value: ‘C’
     * },
     * {
     * precondition_type: PreconditionType.STATE,
     * key: ‘<froms_app_def_id>:double_opt_in’,
     * value: ‘true’
     * },
     * {
     * precondition_type: PreconditionType.APP_DEPENDENCY,
     * key: ‘<paid_plans_app_def_id>’,
     * value: ‘true’
     * }
     */
    interface Precondition {
        /** Precondition type */
        preconditionType?: PreconditionType;
        /** Precondition unique key */
        key?: string;
        /** Precondition value */
        value?: string;
    }
    enum PreconditionType {
        UNKNOWN_PRECONDITION_TYPE = "UNKNOWN_PRECONDITION_TYPE",
        PETRI = "PETRI",
        STATE = "STATE",
        APP_DEPENDENCY = "APP_DEPENDENCY",
        DEALER_OFFERING = "DEALER_OFFERING"
    }
    enum TemplateState {
        UNKNOWN_TEMPLATE_STATUS = "UNKNOWN_TEMPLATE_STATUS",
        INTERNAL = "INTERNAL",
        PUBLIC = "PUBLIC",
        ARCHIVED = "ARCHIVED",
        LIVE = "LIVE"
    }
    interface Translation {
        state?: TranslationState;
    }
    enum TranslationState {
        UNKNOWN_TRANSLATION_STATE = "UNKNOWN_TRANSLATION_STATE",
        NOT_REQUESTED = "NOT_REQUESTED",
        PENDING = "PENDING",
        PARTIAL = "PARTIAL",
        TRANSLATED = "TRANSLATED"
    }
    interface AutomationTemplateEnrichmentData {
        campaignId?: string;
        metaSiteId?: string;
    }
    interface QueryMetadata {
        /** Number of returned items */
        items?: number;
        /** Offset that was applied to the request */
        offset?: number;
    }
    interface QueryAppTemplatesRequest {
        queryType?: TemplateQueryType;
    }
    enum TemplateQueryType {
        TRIGGERED_EMAILS = "TRIGGERED_EMAILS",
        PING = "PING"
    }
    interface QueryAppTemplatesResponse {
        template?: TemplateData[];
    }
    interface TemplateData {
        templateName?: string;
        templateId?: string;
    }
    interface CampaignLookupRequest {
        campaignId: string;
    }
    interface CampaignLookupResponse {
        campaignId?: string;
        instanceId?: string;
        metasiteId?: string;
    }
    interface CampaignLookupBatchRequest {
        campaignIds?: string[];
    }
    interface CampaignLookupBatchResponse {
        responses?: CampaignLookupResponse[];
    }
    interface GetCampaignRequest {
        /** Campaign ID. */
        campaignId: string;
        /**
         * Whether a returned campaign object should include `publishingData.statistics`.
         *
         * Default: `false`
         */
        optionIncludeStatistics?: boolean;
    }
    interface GetCampaignResponse {
        /** Campaign information. */
        campaign?: Campaign;
    }
    interface ListCampaignsRequest {
        /** Paging parameters. */
        paging?: Paging;
        /**
         * Whether to include `publishingData.statistics` in the returned campaign object.
         *
         * Default: `false`
         */
        optionIncludeStatistics?: boolean;
        /**
         * Include campaigns with the following statuses (no filtering by default). One of:
         * + `'ACTIVE'`
         * + `'ARCHIVED'`
         * + `'DELETED'`
         */
        statuses?: CampaignStatusEnum[];
        /**
         * Include campaigns with the following visibility statuses (no filtering by default). One of:
         * + `'DRAFT'`
         * + `'PUBLISHED'`
         * + `'TEMPLATE'`
         */
        visibilityStatuses?: CampaignVisibilityStatusEnum[];
        /**
         * Filter by the following campaign types. One of:
         * + `'EMAIL_MARKETING'`
         * + `INVITATION'`
         * + `'AUTOMATION'`
         * + `'TRIGGERED'`
         */
        campaignType?: CampaignTypeEnum;
    }
    interface ListCampaignsResponse {
        /** Paging parameters. */
        paging?: Paging;
        /** List of campaigns. */
        campaigns?: Campaign[];
    }
    interface CreateFromTemplateRequest {
        /** ID of the template to fork. */
        templateId: string;
        /** Values to replace template placeholders with (unique for each template). */
        variables?: Record<string, string>;
        /** Campaign type. */
        campaignType?: CampaignTypeEnum;
        /** Campaign editor type. Either web app or mobile app. */
        campaignEditorType?: CampaignEditorTypeEnum;
    }
    interface CreateFromTemplateResponse {
        /** Campaign information. */
        campaign?: Campaign;
    }
    interface PublishCampaignRequest {
        /** Campaign ID */
        campaignId: string;
        /** Email distribution options - provided only if marketing campaign is intended to be distributed via email. */
        emailDistributionOptions?: EmailDistributionOptions;
    }
    interface EmailDistributionOptions {
        /** Subject of an email sent to recipient. */
        emailSubject?: string | null;
        /** Label IDs to send campaign to. */
        labelIds?: string[];
        /** Contact IDs to send campaign to. */
        contactIds?: string[];
        /** Filter ids to send campaign to. */
        filterIds?: string[];
        /** For scheduling (at least one hour in the future, for premium users only). */
        sendAt?: Date;
    }
    interface PublishCampaignResponse {
        /** `publishingData.statistics` will be empty. */
        publishingData?: PublishingData;
    }
    interface CampaignRejectedEvent {
        /** ID of the campaign that was rejected. */
        campaignId?: string;
    }
    interface CampaignPublishedEvent {
        /** ID of the campaign that was published. */
        campaignId?: string;
        /** Campaign landing page URL. */
        landingPageUrl?: string;
        /** Estimation of recipient list size (optional). */
        mailingListSizeEstimate?: number | null;
    }
    interface CampaignTerminatedEvent {
        /** ID of the campaign that was terminated. */
        campaignId?: string;
    }
    interface CampaignDistributedEvent {
        /** ID of the campaign that was distributed. */
        campaignId?: string;
    }
    interface EmailActivityUpdated extends EmailActivityUpdatedEventTypeOneOf {
        click?: Click;
        /** Recipient opened an email. */
        open?: Open;
        /**
         * Email soft bounced when sent to a recipient.
         *
         * Indicates a temporary issue sending your email. For example, the email server receiving the email is under a heavy load.
         * For soft bounces, you should wait and try again at a later time.
         */
        softBounce?: SoftBounce;
        /**
         * Email hard bounced when sent to a recipient.
         *
         * Indicates a permanent error sending your email. For example, the email address does not exist.
         */
        hardBounce?: HardBounce;
        /** Campaign ID. */
        campaignId?: string;
        /** [Contact ID](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/contact-object) of recipient. */
        contactId?: string;
        /** Email address of recipient. */
        recipientEmailAddress?: string;
        /** Date and time of the event. */
        timestamp?: Date;
        activityType?: ActivityType;
    }
    /** @oneof */
    interface EmailActivityUpdatedEventTypeOneOf {
        click?: Click;
        /** Recipient opened an email. */
        open?: Open;
        /**
         * Email soft bounced when sent to a recipient.
         *
         * Indicates a temporary issue sending your email. For example, the email server receiving the email is under a heavy load.
         * For soft bounces, you should wait and try again at a later time.
         */
        softBounce?: SoftBounce;
        /**
         * Email hard bounced when sent to a recipient.
         *
         * Indicates a permanent error sending your email. For example, the email address does not exist.
         */
        hardBounce?: HardBounce;
    }
    /** The type of email activity that triggered the webhook. */
    enum ActivityType {
        /** Triggered when email is delivered to the recipient. */
        DELIVERY = "DELIVERY",
        /** Triggered when the recipient clicks on an url inside of the email. */
        CLICK = "CLICK",
        /** Triggered when the email is opened by the recipient. */
        OPEN = "OPEN",
        /** Triggered when the email is bounced softly. */
        SOFT_BOUNCE = "SOFT_BOUNCE",
        /** Triggered when the email bounces. */
        HARD_BOUNCED = "HARD_BOUNCED"
    }
    interface Click {
        /** URL that was clicked. */
        url?: string;
        /** Browser user agent of the recipient. */
        userAgent?: string;
    }
    interface Open {
        /** Browser user agent of the recipient. */
        userAgent?: string;
    }
    interface SoftBounce {
        /** Reason the email soft bounced. */
        reason?: string;
    }
    interface HardBounce {
        /** Reason the email hard bounced. */
        reason?: string;
    }
    interface CampaignScheduledEvent {
        /** ID of the campaign that was scheduled. */
        campaignId?: string;
        /** The timestamp campaign is scheduled for. */
        sendAt?: Date;
    }
    interface SendTestRequest {
        /** Campaign ID. */
        campaignId: string;
        /** Subject of an email sent to recipient. */
        emailSubject?: string | null;
        /** Recipient's email address. */
        toEmailAddress: string;
    }
    interface PlaceholderContent extends PlaceholderContentValueOneOf {
        text?: PlainText;
        html?: Html;
        money?: Money;
        dateTime?: DateTime;
        map?: Map;
        array?: Array;
        enum?: PlaceholderContentEnum;
        attachment?: Attachment;
    }
    /** @oneof */
    interface PlaceholderContentValueOneOf {
        text?: PlainText;
        html?: Html;
        money?: Money;
        dateTime?: DateTime;
        map?: Map;
        array?: Array;
        enum?: PlaceholderContentEnum;
        attachment?: Attachment;
    }
    interface PlainText {
        text?: string;
    }
    interface Html {
        html?: string;
    }
    /**
     * Money.
     * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
     */
    interface Money {
        /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
        value?: string;
        /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
        currency?: string;
        /** Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative. */
        formattedValue?: string | null;
    }
    interface DateTime {
        timestamp?: Date;
        /** optional time zone is the full name. example: "Asia/Jerusalem" */
        timeZone?: string | null;
    }
    interface Map {
        variables?: Record<string, PlaceholderContent>;
    }
    interface Array {
        items?: PlaceholderContent[];
    }
    interface PlaceholderContentEnum {
        value?: string;
        translation?: string;
    }
    interface Attachment {
        fileName?: string;
        downloadUrl?: string;
    }
    interface SendTestResponse {
    }
    interface PauseSchedulingRequest {
        /** Campaign ID. */
        campaignId: string;
    }
    interface PauseSchedulingResponse {
    }
    interface CampaignPausedEvent {
        /** ID of the campaign that was paused. */
        campaignId?: string;
    }
    interface ArchiveCampaignRequest {
        /** ID of the campaign to archive. */
        campaignId: string;
    }
    interface ArchiveCampaignResponse {
    }
    /** Sent when status of the campaign is changed from "Active" to "Archived" */
    interface CampaignArchivedEvent {
        /** ID of the campaign that was archived. */
        campaignId?: string;
    }
    interface UnarchiveCampaignRequest {
        /** ID of the campaign to unarchive. */
        campaignId: string;
    }
    interface UnarchiveCampaignResponse {
    }
    /** Sent when status of the campaign is changed from "Archived" to "Active" */
    interface CampaignUnarchivedEvent {
        /** ID of the campaign whose status was changed to active. */
        campaignId?: string;
    }
    interface UpdateTitleRequest {
        /** ID of the campaign to change title of. */
        campaignId: string;
        title: string;
    }
    interface UpdateTitleResponse {
    }
    interface DeleteCampaignRequest {
        /** Campaign ID. */
        campaignId: string;
    }
    interface DeleteCampaignResponse {
    }
    interface ReuseCampaignRequest {
        /** ID of the message to be duplicated. */
        campaignId: string;
    }
    interface ReuseCampaignResponse {
        /** Campaign information. */
        campaign?: Campaign;
    }
    interface PreviewCampaignRequest {
        /** ID of the campaign to preview. */
        campaignId: string;
        /** Preferred language for campaign content (optional). */
        language?: string | null;
        /** Values to replace campaign placeholders with (unique for each campaign). */
        placeholders?: Record<string, PlaceholderContent>;
    }
    interface PreviewCampaignResponse {
        /** Preview HTML. */
        html?: string;
    }
    interface GetComposerRequest {
        /** Campaign ID. */
        campaignId: string;
        /** Preferred language for campaign content (optional). */
        language?: string | null;
    }
    interface GetComposerResponse {
        /** composer */
        composer?: Composer;
    }
    /** INTERNAL */
    interface Composer {
        /** internal data structure for editor/viewer to render the campaign */
        composerDataJson?: string;
    }
    interface CreateCampaignRequest {
        /** Campaign composer. */
        composer: Composer;
    }
    interface CreateCampaignResponse {
        /** Campaign information. */
        campaign?: Campaign;
    }
    interface ResendToNonOpenersRequest {
        /** ID of the campaign to resend. */
        campaignId: string;
        /** Subject line to use with the resent copy of campaign. */
        emailSubject?: string | null;
    }
    interface ResendToNonOpenersResponse {
        /** ID of the newly created and resent campaign */
        campaignId?: string;
    }
    /**
     * Retrieves a list of statistics for up to 100 selected campaigns.
     *
     * For each campaign, you receive the total activity count for the campaign's landing page and email. For example, the total
     * amount of times the landing page was opened, or the total amount of email recipients that clicked a link in an email.
     *
     * Use [List Campaigns](#listcampaigns) to retrieve additional information for your campaigns.
     * Use [List Recipients](#listrecipients) to retrieve a list of recipients and their activities related to a selected campaign.
     *
     * This function is not a universal function and runs only on the backend.
     * @param campaignIds - IDs of the campaigns to retrieve.
     *
     * Max: 100 campaigns
     * @public
     * @documentationMaturity preview
     * @requiredField campaignIds
     * @adminMethod
     */
    function listStatistics(campaignIds: string[]): Promise<ListStatisticsResponse>;
    /**
     * Retrieves a list of recipients for a selected campaign based on a specific recipient activity.
     *
     * Pages are returned with a maximum of 1,000 recipients per page and defaults to 40 recipients per page.
     *
     * Use [List Statistics](#liststatistics) to retrieve a list of activity for selected campaigns.
     * Use [List Campaigns](#listcampaigns) to retrieve additional information for your campaigns.
     *
     * If no `activity` is included, this endpoint returns an error.
     *
     *
     * This function is not a universal function and runs only on the backend.
     * @param campaignId - Campaign ID.
     * @param activity - __Required.__ Email activity to filter for. One of:
     * + `'DELIVERED'`
     * + `'OPENED'`
     * + `'CLICKED'`
     * + `'BOUNCED'`
     * + `'NOT_SENT'`
     * @public
     * @documentationMaturity preview
     * @requiredField activity
     * @requiredField campaignId
     * @param options - Options to use when getting the list of recipients.
     * @adminMethod
     */
    function listRecipients(campaignId: string, activity: RecipientsActivityEnum, options?: ListRecipientsOptions): Promise<ListRecipientsResponse>;
    interface ListRecipientsOptions {
        /** Pagination options. */
        paging?: CursorPaging;
    }
    interface GetCampaignMappingIdentifiers {
        /** rule ID in automations */
        automationRuleId: string;
        /** template ID configured for the automation */
        templateId: string;
    }
    interface GetPingCampaignMappingIdentifiers {
        /** rule ID in automations */
        automationRuleId: string;
        /** template ID configured for the ping automation. */
        templateId: string;
    }
    interface GetPingCampaignMappingOptions {
        /** ID of the initiating vertical. */
        appDefId: string;
        /** Ping template ID. */
        pingTemplateId?: string | null;
        /** Preferred language (optional). */
        language: string;
    }
    interface QueryAutomationTemplatesOptions {
        /** https://github.com/wix-private/p13n/blob/master/protos/query/src/main/proto/wix/common/query.proto */
        query?: Query;
    }
    interface QueryAppTemplatesOptions {
        queryType?: TemplateQueryType;
    }
    interface CampaignLookupBatchOptions {
        campaignIds?: string[];
    }
    /**
     * Retrieves information about an email campaign by the specified ID.
     *
     * This function is not a universal function and runs only on the backend.
     * @param campaignId - Campaign ID.
     * @public
     * @documentationMaturity preview
     * @requiredField campaignId
     * @param options - Options to use when getting a campaign.
     * @adminMethod
     */
    function getCampaign(campaignId: string, options?: GetCampaignOptions): Promise<GetCampaignResponse>;
    interface GetCampaignOptions {
        /**
         * Whether a returned campaign object should include `publishingData.statistics`.
         *
         * Default: `false`
         */
        optionIncludeStatistics?: boolean;
    }
    /**
     * Returns a list of email campaigns.
     *
     * Default sort by `date_updated` in `desc` order.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @param options - Options to use when getting the list of campaigns.
     * @adminMethod
     */
    function listCampaigns(options?: ListCampaignsOptions): Promise<ListCampaignsResponse>;
    interface ListCampaignsOptions {
        /** Paging parameters. */
        paging?: Paging;
        /**
         * Whether to include `publishingData.statistics` in the returned campaign object.
         *
         * Default: `false`
         */
        optionIncludeStatistics?: boolean;
        /**
         * Include campaigns with the following statuses (no filtering by default). One of:
         * + `'ACTIVE'`
         * + `'ARCHIVED'`
         * + `'DELETED'`
         */
        statuses?: CampaignStatusEnum[];
        /**
         * Include campaigns with the following visibility statuses (no filtering by default). One of:
         * + `'ACTIVE'`
         * + `'ARCHIVED'`
         * + `'DELETED'`
         */
        visibilityStatuses?: CampaignVisibilityStatusEnum[];
        /**
         * Filter by the following campaign types. One of:
         * + `'EMAIL_MARKETING'`
         * + `INVITATION'`
         * + `'AUTOMATION'`
         * + `'TRIGGERED'`
         */
        campaignType?: CampaignTypeEnum;
    }
    interface CreateFromTemplateOptions {
        /** Values to replace template placeholders with (unique for each template). */
        variables?: Record<string, string>;
        /** Campaign type. */
        campaignType?: CampaignTypeEnum;
        /** Campaign editor type. Either web app or mobile app. */
        campaignEditorType?: CampaignEditorTypeEnum;
    }
    /**
     * Publishes/sends a specified campaign.
     *
     * If no `emailDistributionOptions` parameters are specified, the campaign is only published as a landing page.
     *
     * This function is not a universal function and runs only on the backend.
     * @param campaignId - Campaign ID
     * @public
     * @documentationMaturity preview
     * @requiredField campaignId
     * @param options - Options to use when publishing a campaign.
     * @adminMethod
     */
    function publishCampaign(campaignId: string, options?: PublishCampaignOptions): Promise<PublishCampaignResponse>;
    interface PublishCampaignOptions {
        /** Email distribution options - provided only if marketing campaign is intended to be distributed via email. */
        emailDistributionOptions?: EmailDistributionOptions;
    }
    /**
     * Sends a test email for preview purposes.
     *
     * It is heavily throttled, so don't use this for regular campaign sending.
     *
     *
     * This function is not a universal function and runs only on the backend.
     * @param campaignId - Campaign ID.
     * @public
     * @documentationMaturity preview
     * @requiredField campaignId
     * @requiredField options.toEmailAddress
     * @param options - Options for sending a test email.
     * @adminMethod
     */
    function sendTest(campaignId: string, options?: SendTestOptions): Promise<void>;
    interface SendTestOptions {
        /** Subject of an email sent to recipient. */
        emailSubject?: string | null;
        /** Recipient's email address. */
        toEmailAddress: string;
    }
    /**
     * Pauses a scheduled campaign.
     *
     * Learn more about [market campaign scheduling](https://support.wix.com/en/article/managing-your-scheduled-email-marketing-campaign).
     *
     * This function is not a universal function and runs only on the backend.
     * @param campaignId - Campaign ID.
     * @public
     * @documentationMaturity preview
     * @requiredField campaignId
     * @adminMethod
     */
    function pauseScheduling(campaignId: string): Promise<void>;
    /**
     * Permanently deletes a campaign.
     *
     * This function is not a universal function and runs only on the backend.
     * @param campaignId - Campaign ID.
     * @public
     * @documentationMaturity preview
     * @requiredField campaignId
     * @adminMethod
     */
    function deleteCampaign(campaignId: string): Promise<void>;
    /**
     * Creates a (draft) copy of an existing campaign.
     *
     *
     * This function is not a universal function and runs only on the backend.
     * @param campaignId - ID of the message to be duplicated.
     * @public
     * @documentationMaturity preview
     * @requiredField campaignId
     * @adminMethod
     */
    function reuseCampaign(campaignId: string): Promise<ReuseCampaignResponse>;
    interface PreviewOptions {
        /** Preferred language for campaign content (optional). */
        language?: string | null;
        /** Values to replace campaign placeholders with (unique for each campaign). */
        placeholders?: Record<string, PlaceholderContent>;
    }
    interface GetComposerOptions {
        /** Preferred language for campaign content (optional). */
        language?: string | null;
    }
    interface ResendToNonOpenersOptions {
        /** Subject line to use with the resent copy of campaign. */
        emailSubject?: string | null;
    }
    type emailMarketingV1Campaign_universal_d_Campaign = Campaign;
    type emailMarketingV1Campaign_universal_d_CampaignEditorTypeEnum = CampaignEditorTypeEnum;
    const emailMarketingV1Campaign_universal_d_CampaignEditorTypeEnum: typeof CampaignEditorTypeEnum;
    type emailMarketingV1Campaign_universal_d_CampaignStatusEnum = CampaignStatusEnum;
    const emailMarketingV1Campaign_universal_d_CampaignStatusEnum: typeof CampaignStatusEnum;
    type emailMarketingV1Campaign_universal_d_CampaignVisibilityStatusEnum = CampaignVisibilityStatusEnum;
    const emailMarketingV1Campaign_universal_d_CampaignVisibilityStatusEnum: typeof CampaignVisibilityStatusEnum;
    type emailMarketingV1Campaign_universal_d_Enum = Enum;
    const emailMarketingV1Campaign_universal_d_Enum: typeof Enum;
    type emailMarketingV1Campaign_universal_d_PublishingData = PublishingData;
    type emailMarketingV1Campaign_universal_d_CampaignStatistics = CampaignStatistics;
    type emailMarketingV1Campaign_universal_d_LandingPageStatistics = LandingPageStatistics;
    type emailMarketingV1Campaign_universal_d_DistributionStatistics = DistributionStatistics;
    type emailMarketingV1Campaign_universal_d_TotalStatistics = TotalStatistics;
    type emailMarketingV1Campaign_universal_d_RejectionData = RejectionData;
    type emailMarketingV1Campaign_universal_d_RejectionReasonEnum = RejectionReasonEnum;
    const emailMarketingV1Campaign_universal_d_RejectionReasonEnum: typeof RejectionReasonEnum;
    type emailMarketingV1Campaign_universal_d_CampaignSendingStateEnum = CampaignSendingStateEnum;
    const emailMarketingV1Campaign_universal_d_CampaignSendingStateEnum: typeof CampaignSendingStateEnum;
    type emailMarketingV1Campaign_universal_d_CampaignTypeEnum = CampaignTypeEnum;
    const emailMarketingV1Campaign_universal_d_CampaignTypeEnum: typeof CampaignTypeEnum;
    type emailMarketingV1Campaign_universal_d_ListStatisticsRequest = ListStatisticsRequest;
    type emailMarketingV1Campaign_universal_d_ListStatisticsResponse = ListStatisticsResponse;
    type emailMarketingV1Campaign_universal_d_CampaignStatisticsContainer = CampaignStatisticsContainer;
    type emailMarketingV1Campaign_universal_d_ListRecipientsRequest = ListRecipientsRequest;
    type emailMarketingV1Campaign_universal_d_RecipientsActivityEnum = RecipientsActivityEnum;
    const emailMarketingV1Campaign_universal_d_RecipientsActivityEnum: typeof RecipientsActivityEnum;
    type emailMarketingV1Campaign_universal_d_CursorPaging = CursorPaging;
    type emailMarketingV1Campaign_universal_d_ListRecipientsResponse = ListRecipientsResponse;
    type emailMarketingV1Campaign_universal_d_CampaignRecipientDetails = CampaignRecipientDetails;
    type emailMarketingV1Campaign_universal_d_PagingMetadataV2 = PagingMetadataV2;
    type emailMarketingV1Campaign_universal_d_Cursors = Cursors;
    type emailMarketingV1Campaign_universal_d_GetCampaignMappingRequest = GetCampaignMappingRequest;
    type emailMarketingV1Campaign_universal_d_GetCampaignMappingResponse = GetCampaignMappingResponse;
    type emailMarketingV1Campaign_universal_d_GetPingCampaignMappingRequest = GetPingCampaignMappingRequest;
    type emailMarketingV1Campaign_universal_d_GetPingCampaignMappingResponse = GetPingCampaignMappingResponse;
    type emailMarketingV1Campaign_universal_d_QueryAutomationTemplatesRequest = QueryAutomationTemplatesRequest;
    type emailMarketingV1Campaign_universal_d_Query = Query;
    type emailMarketingV1Campaign_universal_d_Sorting = Sorting;
    type emailMarketingV1Campaign_universal_d_SortOrder = SortOrder;
    const emailMarketingV1Campaign_universal_d_SortOrder: typeof SortOrder;
    type emailMarketingV1Campaign_universal_d_Paging = Paging;
    type emailMarketingV1Campaign_universal_d_QueryAutomationTemplatesResponse = QueryAutomationTemplatesResponse;
    type emailMarketingV1Campaign_universal_d_AutomationTemplateContainer = AutomationTemplateContainer;
    type emailMarketingV1Campaign_universal_d_AutomationTemplate = AutomationTemplate;
    type emailMarketingV1Campaign_universal_d_RuleConfiguration = RuleConfiguration;
    type emailMarketingV1Campaign_universal_d_ConditionConfiguration = ConditionConfiguration;
    type emailMarketingV1Campaign_universal_d_Operator = Operator;
    const emailMarketingV1Campaign_universal_d_Operator: typeof Operator;
    type emailMarketingV1Campaign_universal_d_TriggerConfiguration = TriggerConfiguration;
    type emailMarketingV1Campaign_universal_d_ActionConfiguration = ActionConfiguration;
    type emailMarketingV1Campaign_universal_d_RuleStatus = RuleStatus;
    const emailMarketingV1Campaign_universal_d_RuleStatus: typeof RuleStatus;
    type emailMarketingV1Campaign_universal_d_ActivationCycle = ActivationCycle;
    type emailMarketingV1Campaign_universal_d_RuleMetadata = RuleMetadata;
    type emailMarketingV1Campaign_universal_d_VersionType = VersionType;
    const emailMarketingV1Campaign_universal_d_VersionType: typeof VersionType;
    type emailMarketingV1Campaign_universal_d_TemplateType = TemplateType;
    const emailMarketingV1Campaign_universal_d_TemplateType: typeof TemplateType;
    type emailMarketingV1Campaign_universal_d_Precondition = Precondition;
    type emailMarketingV1Campaign_universal_d_PreconditionType = PreconditionType;
    const emailMarketingV1Campaign_universal_d_PreconditionType: typeof PreconditionType;
    type emailMarketingV1Campaign_universal_d_TemplateState = TemplateState;
    const emailMarketingV1Campaign_universal_d_TemplateState: typeof TemplateState;
    type emailMarketingV1Campaign_universal_d_Translation = Translation;
    type emailMarketingV1Campaign_universal_d_TranslationState = TranslationState;
    const emailMarketingV1Campaign_universal_d_TranslationState: typeof TranslationState;
    type emailMarketingV1Campaign_universal_d_AutomationTemplateEnrichmentData = AutomationTemplateEnrichmentData;
    type emailMarketingV1Campaign_universal_d_QueryMetadata = QueryMetadata;
    type emailMarketingV1Campaign_universal_d_QueryAppTemplatesRequest = QueryAppTemplatesRequest;
    type emailMarketingV1Campaign_universal_d_TemplateQueryType = TemplateQueryType;
    const emailMarketingV1Campaign_universal_d_TemplateQueryType: typeof TemplateQueryType;
    type emailMarketingV1Campaign_universal_d_QueryAppTemplatesResponse = QueryAppTemplatesResponse;
    type emailMarketingV1Campaign_universal_d_TemplateData = TemplateData;
    type emailMarketingV1Campaign_universal_d_CampaignLookupRequest = CampaignLookupRequest;
    type emailMarketingV1Campaign_universal_d_CampaignLookupResponse = CampaignLookupResponse;
    type emailMarketingV1Campaign_universal_d_CampaignLookupBatchRequest = CampaignLookupBatchRequest;
    type emailMarketingV1Campaign_universal_d_CampaignLookupBatchResponse = CampaignLookupBatchResponse;
    type emailMarketingV1Campaign_universal_d_GetCampaignRequest = GetCampaignRequest;
    type emailMarketingV1Campaign_universal_d_GetCampaignResponse = GetCampaignResponse;
    type emailMarketingV1Campaign_universal_d_ListCampaignsRequest = ListCampaignsRequest;
    type emailMarketingV1Campaign_universal_d_ListCampaignsResponse = ListCampaignsResponse;
    type emailMarketingV1Campaign_universal_d_CreateFromTemplateRequest = CreateFromTemplateRequest;
    type emailMarketingV1Campaign_universal_d_CreateFromTemplateResponse = CreateFromTemplateResponse;
    type emailMarketingV1Campaign_universal_d_PublishCampaignRequest = PublishCampaignRequest;
    type emailMarketingV1Campaign_universal_d_EmailDistributionOptions = EmailDistributionOptions;
    type emailMarketingV1Campaign_universal_d_PublishCampaignResponse = PublishCampaignResponse;
    type emailMarketingV1Campaign_universal_d_CampaignRejectedEvent = CampaignRejectedEvent;
    type emailMarketingV1Campaign_universal_d_CampaignPublishedEvent = CampaignPublishedEvent;
    type emailMarketingV1Campaign_universal_d_CampaignTerminatedEvent = CampaignTerminatedEvent;
    type emailMarketingV1Campaign_universal_d_CampaignDistributedEvent = CampaignDistributedEvent;
    type emailMarketingV1Campaign_universal_d_EmailActivityUpdated = EmailActivityUpdated;
    type emailMarketingV1Campaign_universal_d_EmailActivityUpdatedEventTypeOneOf = EmailActivityUpdatedEventTypeOneOf;
    type emailMarketingV1Campaign_universal_d_ActivityType = ActivityType;
    const emailMarketingV1Campaign_universal_d_ActivityType: typeof ActivityType;
    type emailMarketingV1Campaign_universal_d_Click = Click;
    type emailMarketingV1Campaign_universal_d_Open = Open;
    type emailMarketingV1Campaign_universal_d_SoftBounce = SoftBounce;
    type emailMarketingV1Campaign_universal_d_HardBounce = HardBounce;
    type emailMarketingV1Campaign_universal_d_CampaignScheduledEvent = CampaignScheduledEvent;
    type emailMarketingV1Campaign_universal_d_SendTestRequest = SendTestRequest;
    type emailMarketingV1Campaign_universal_d_PlaceholderContent = PlaceholderContent;
    type emailMarketingV1Campaign_universal_d_PlaceholderContentValueOneOf = PlaceholderContentValueOneOf;
    type emailMarketingV1Campaign_universal_d_PlainText = PlainText;
    type emailMarketingV1Campaign_universal_d_Html = Html;
    type emailMarketingV1Campaign_universal_d_Money = Money;
    type emailMarketingV1Campaign_universal_d_DateTime = DateTime;
    type emailMarketingV1Campaign_universal_d_Map = Map;
    type emailMarketingV1Campaign_universal_d_Array = Array;
    type emailMarketingV1Campaign_universal_d_PlaceholderContentEnum = PlaceholderContentEnum;
    type emailMarketingV1Campaign_universal_d_Attachment = Attachment;
    type emailMarketingV1Campaign_universal_d_SendTestResponse = SendTestResponse;
    type emailMarketingV1Campaign_universal_d_PauseSchedulingRequest = PauseSchedulingRequest;
    type emailMarketingV1Campaign_universal_d_PauseSchedulingResponse = PauseSchedulingResponse;
    type emailMarketingV1Campaign_universal_d_CampaignPausedEvent = CampaignPausedEvent;
    type emailMarketingV1Campaign_universal_d_ArchiveCampaignRequest = ArchiveCampaignRequest;
    type emailMarketingV1Campaign_universal_d_ArchiveCampaignResponse = ArchiveCampaignResponse;
    type emailMarketingV1Campaign_universal_d_CampaignArchivedEvent = CampaignArchivedEvent;
    type emailMarketingV1Campaign_universal_d_UnarchiveCampaignRequest = UnarchiveCampaignRequest;
    type emailMarketingV1Campaign_universal_d_UnarchiveCampaignResponse = UnarchiveCampaignResponse;
    type emailMarketingV1Campaign_universal_d_CampaignUnarchivedEvent = CampaignUnarchivedEvent;
    type emailMarketingV1Campaign_universal_d_UpdateTitleRequest = UpdateTitleRequest;
    type emailMarketingV1Campaign_universal_d_UpdateTitleResponse = UpdateTitleResponse;
    type emailMarketingV1Campaign_universal_d_DeleteCampaignRequest = DeleteCampaignRequest;
    type emailMarketingV1Campaign_universal_d_DeleteCampaignResponse = DeleteCampaignResponse;
    type emailMarketingV1Campaign_universal_d_ReuseCampaignRequest = ReuseCampaignRequest;
    type emailMarketingV1Campaign_universal_d_ReuseCampaignResponse = ReuseCampaignResponse;
    type emailMarketingV1Campaign_universal_d_PreviewCampaignRequest = PreviewCampaignRequest;
    type emailMarketingV1Campaign_universal_d_PreviewCampaignResponse = PreviewCampaignResponse;
    type emailMarketingV1Campaign_universal_d_GetComposerRequest = GetComposerRequest;
    type emailMarketingV1Campaign_universal_d_GetComposerResponse = GetComposerResponse;
    type emailMarketingV1Campaign_universal_d_Composer = Composer;
    type emailMarketingV1Campaign_universal_d_CreateCampaignRequest = CreateCampaignRequest;
    type emailMarketingV1Campaign_universal_d_CreateCampaignResponse = CreateCampaignResponse;
    type emailMarketingV1Campaign_universal_d_ResendToNonOpenersRequest = ResendToNonOpenersRequest;
    type emailMarketingV1Campaign_universal_d_ResendToNonOpenersResponse = ResendToNonOpenersResponse;
    const emailMarketingV1Campaign_universal_d_listStatistics: typeof listStatistics;
    const emailMarketingV1Campaign_universal_d_listRecipients: typeof listRecipients;
    type emailMarketingV1Campaign_universal_d_ListRecipientsOptions = ListRecipientsOptions;
    type emailMarketingV1Campaign_universal_d_GetCampaignMappingIdentifiers = GetCampaignMappingIdentifiers;
    type emailMarketingV1Campaign_universal_d_GetPingCampaignMappingIdentifiers = GetPingCampaignMappingIdentifiers;
    type emailMarketingV1Campaign_universal_d_GetPingCampaignMappingOptions = GetPingCampaignMappingOptions;
    type emailMarketingV1Campaign_universal_d_QueryAutomationTemplatesOptions = QueryAutomationTemplatesOptions;
    type emailMarketingV1Campaign_universal_d_QueryAppTemplatesOptions = QueryAppTemplatesOptions;
    type emailMarketingV1Campaign_universal_d_CampaignLookupBatchOptions = CampaignLookupBatchOptions;
    const emailMarketingV1Campaign_universal_d_getCampaign: typeof getCampaign;
    type emailMarketingV1Campaign_universal_d_GetCampaignOptions = GetCampaignOptions;
    const emailMarketingV1Campaign_universal_d_listCampaigns: typeof listCampaigns;
    type emailMarketingV1Campaign_universal_d_ListCampaignsOptions = ListCampaignsOptions;
    type emailMarketingV1Campaign_universal_d_CreateFromTemplateOptions = CreateFromTemplateOptions;
    const emailMarketingV1Campaign_universal_d_publishCampaign: typeof publishCampaign;
    type emailMarketingV1Campaign_universal_d_PublishCampaignOptions = PublishCampaignOptions;
    const emailMarketingV1Campaign_universal_d_sendTest: typeof sendTest;
    type emailMarketingV1Campaign_universal_d_SendTestOptions = SendTestOptions;
    const emailMarketingV1Campaign_universal_d_pauseScheduling: typeof pauseScheduling;
    const emailMarketingV1Campaign_universal_d_deleteCampaign: typeof deleteCampaign;
    const emailMarketingV1Campaign_universal_d_reuseCampaign: typeof reuseCampaign;
    type emailMarketingV1Campaign_universal_d_PreviewOptions = PreviewOptions;
    type emailMarketingV1Campaign_universal_d_GetComposerOptions = GetComposerOptions;
    type emailMarketingV1Campaign_universal_d_ResendToNonOpenersOptions = ResendToNonOpenersOptions;
    namespace emailMarketingV1Campaign_universal_d {
        export { __debug$1 as __debug, emailMarketingV1Campaign_universal_d_Campaign as Campaign, emailMarketingV1Campaign_universal_d_CampaignEditorTypeEnum as CampaignEditorTypeEnum, emailMarketingV1Campaign_universal_d_CampaignStatusEnum as CampaignStatusEnum, emailMarketingV1Campaign_universal_d_CampaignVisibilityStatusEnum as CampaignVisibilityStatusEnum, emailMarketingV1Campaign_universal_d_Enum as Enum, emailMarketingV1Campaign_universal_d_PublishingData as PublishingData, emailMarketingV1Campaign_universal_d_CampaignStatistics as CampaignStatistics, emailMarketingV1Campaign_universal_d_LandingPageStatistics as LandingPageStatistics, emailMarketingV1Campaign_universal_d_DistributionStatistics as DistributionStatistics, emailMarketingV1Campaign_universal_d_TotalStatistics as TotalStatistics, emailMarketingV1Campaign_universal_d_RejectionData as RejectionData, emailMarketingV1Campaign_universal_d_RejectionReasonEnum as RejectionReasonEnum, emailMarketingV1Campaign_universal_d_CampaignSendingStateEnum as CampaignSendingStateEnum, emailMarketingV1Campaign_universal_d_CampaignTypeEnum as CampaignTypeEnum, emailMarketingV1Campaign_universal_d_ListStatisticsRequest as ListStatisticsRequest, emailMarketingV1Campaign_universal_d_ListStatisticsResponse as ListStatisticsResponse, emailMarketingV1Campaign_universal_d_CampaignStatisticsContainer as CampaignStatisticsContainer, emailMarketingV1Campaign_universal_d_ListRecipientsRequest as ListRecipientsRequest, emailMarketingV1Campaign_universal_d_RecipientsActivityEnum as RecipientsActivityEnum, emailMarketingV1Campaign_universal_d_CursorPaging as CursorPaging, emailMarketingV1Campaign_universal_d_ListRecipientsResponse as ListRecipientsResponse, emailMarketingV1Campaign_universal_d_CampaignRecipientDetails as CampaignRecipientDetails, emailMarketingV1Campaign_universal_d_PagingMetadataV2 as PagingMetadataV2, emailMarketingV1Campaign_universal_d_Cursors as Cursors, emailMarketingV1Campaign_universal_d_GetCampaignMappingRequest as GetCampaignMappingRequest, emailMarketingV1Campaign_universal_d_GetCampaignMappingResponse as GetCampaignMappingResponse, emailMarketingV1Campaign_universal_d_GetPingCampaignMappingRequest as GetPingCampaignMappingRequest, emailMarketingV1Campaign_universal_d_GetPingCampaignMappingResponse as GetPingCampaignMappingResponse, emailMarketingV1Campaign_universal_d_QueryAutomationTemplatesRequest as QueryAutomationTemplatesRequest, emailMarketingV1Campaign_universal_d_Query as Query, emailMarketingV1Campaign_universal_d_Sorting as Sorting, emailMarketingV1Campaign_universal_d_SortOrder as SortOrder, emailMarketingV1Campaign_universal_d_Paging as Paging, emailMarketingV1Campaign_universal_d_QueryAutomationTemplatesResponse as QueryAutomationTemplatesResponse, emailMarketingV1Campaign_universal_d_AutomationTemplateContainer as AutomationTemplateContainer, emailMarketingV1Campaign_universal_d_AutomationTemplate as AutomationTemplate, emailMarketingV1Campaign_universal_d_RuleConfiguration as RuleConfiguration, emailMarketingV1Campaign_universal_d_ConditionConfiguration as ConditionConfiguration, emailMarketingV1Campaign_universal_d_Operator as Operator, emailMarketingV1Campaign_universal_d_TriggerConfiguration as TriggerConfiguration, emailMarketingV1Campaign_universal_d_ActionConfiguration as ActionConfiguration, emailMarketingV1Campaign_universal_d_RuleStatus as RuleStatus, emailMarketingV1Campaign_universal_d_ActivationCycle as ActivationCycle, emailMarketingV1Campaign_universal_d_RuleMetadata as RuleMetadata, emailMarketingV1Campaign_universal_d_VersionType as VersionType, emailMarketingV1Campaign_universal_d_TemplateType as TemplateType, emailMarketingV1Campaign_universal_d_Precondition as Precondition, emailMarketingV1Campaign_universal_d_PreconditionType as PreconditionType, emailMarketingV1Campaign_universal_d_TemplateState as TemplateState, emailMarketingV1Campaign_universal_d_Translation as Translation, emailMarketingV1Campaign_universal_d_TranslationState as TranslationState, emailMarketingV1Campaign_universal_d_AutomationTemplateEnrichmentData as AutomationTemplateEnrichmentData, emailMarketingV1Campaign_universal_d_QueryMetadata as QueryMetadata, emailMarketingV1Campaign_universal_d_QueryAppTemplatesRequest as QueryAppTemplatesRequest, emailMarketingV1Campaign_universal_d_TemplateQueryType as TemplateQueryType, emailMarketingV1Campaign_universal_d_QueryAppTemplatesResponse as QueryAppTemplatesResponse, emailMarketingV1Campaign_universal_d_TemplateData as TemplateData, emailMarketingV1Campaign_universal_d_CampaignLookupRequest as CampaignLookupRequest, emailMarketingV1Campaign_universal_d_CampaignLookupResponse as CampaignLookupResponse, emailMarketingV1Campaign_universal_d_CampaignLookupBatchRequest as CampaignLookupBatchRequest, emailMarketingV1Campaign_universal_d_CampaignLookupBatchResponse as CampaignLookupBatchResponse, emailMarketingV1Campaign_universal_d_GetCampaignRequest as GetCampaignRequest, emailMarketingV1Campaign_universal_d_GetCampaignResponse as GetCampaignResponse, emailMarketingV1Campaign_universal_d_ListCampaignsRequest as ListCampaignsRequest, emailMarketingV1Campaign_universal_d_ListCampaignsResponse as ListCampaignsResponse, emailMarketingV1Campaign_universal_d_CreateFromTemplateRequest as CreateFromTemplateRequest, emailMarketingV1Campaign_universal_d_CreateFromTemplateResponse as CreateFromTemplateResponse, emailMarketingV1Campaign_universal_d_PublishCampaignRequest as PublishCampaignRequest, emailMarketingV1Campaign_universal_d_EmailDistributionOptions as EmailDistributionOptions, emailMarketingV1Campaign_universal_d_PublishCampaignResponse as PublishCampaignResponse, emailMarketingV1Campaign_universal_d_CampaignRejectedEvent as CampaignRejectedEvent, emailMarketingV1Campaign_universal_d_CampaignPublishedEvent as CampaignPublishedEvent, emailMarketingV1Campaign_universal_d_CampaignTerminatedEvent as CampaignTerminatedEvent, emailMarketingV1Campaign_universal_d_CampaignDistributedEvent as CampaignDistributedEvent, emailMarketingV1Campaign_universal_d_EmailActivityUpdated as EmailActivityUpdated, emailMarketingV1Campaign_universal_d_EmailActivityUpdatedEventTypeOneOf as EmailActivityUpdatedEventTypeOneOf, emailMarketingV1Campaign_universal_d_ActivityType as ActivityType, emailMarketingV1Campaign_universal_d_Click as Click, emailMarketingV1Campaign_universal_d_Open as Open, emailMarketingV1Campaign_universal_d_SoftBounce as SoftBounce, emailMarketingV1Campaign_universal_d_HardBounce as HardBounce, emailMarketingV1Campaign_universal_d_CampaignScheduledEvent as CampaignScheduledEvent, emailMarketingV1Campaign_universal_d_SendTestRequest as SendTestRequest, emailMarketingV1Campaign_universal_d_PlaceholderContent as PlaceholderContent, emailMarketingV1Campaign_universal_d_PlaceholderContentValueOneOf as PlaceholderContentValueOneOf, emailMarketingV1Campaign_universal_d_PlainText as PlainText, emailMarketingV1Campaign_universal_d_Html as Html, emailMarketingV1Campaign_universal_d_Money as Money, emailMarketingV1Campaign_universal_d_DateTime as DateTime, emailMarketingV1Campaign_universal_d_Map as Map, emailMarketingV1Campaign_universal_d_Array as Array, emailMarketingV1Campaign_universal_d_PlaceholderContentEnum as PlaceholderContentEnum, emailMarketingV1Campaign_universal_d_Attachment as Attachment, emailMarketingV1Campaign_universal_d_SendTestResponse as SendTestResponse, emailMarketingV1Campaign_universal_d_PauseSchedulingRequest as PauseSchedulingRequest, emailMarketingV1Campaign_universal_d_PauseSchedulingResponse as PauseSchedulingResponse, emailMarketingV1Campaign_universal_d_CampaignPausedEvent as CampaignPausedEvent, emailMarketingV1Campaign_universal_d_ArchiveCampaignRequest as ArchiveCampaignRequest, emailMarketingV1Campaign_universal_d_ArchiveCampaignResponse as ArchiveCampaignResponse, emailMarketingV1Campaign_universal_d_CampaignArchivedEvent as CampaignArchivedEvent, emailMarketingV1Campaign_universal_d_UnarchiveCampaignRequest as UnarchiveCampaignRequest, emailMarketingV1Campaign_universal_d_UnarchiveCampaignResponse as UnarchiveCampaignResponse, emailMarketingV1Campaign_universal_d_CampaignUnarchivedEvent as CampaignUnarchivedEvent, emailMarketingV1Campaign_universal_d_UpdateTitleRequest as UpdateTitleRequest, emailMarketingV1Campaign_universal_d_UpdateTitleResponse as UpdateTitleResponse, emailMarketingV1Campaign_universal_d_DeleteCampaignRequest as DeleteCampaignRequest, emailMarketingV1Campaign_universal_d_DeleteCampaignResponse as DeleteCampaignResponse, emailMarketingV1Campaign_universal_d_ReuseCampaignRequest as ReuseCampaignRequest, emailMarketingV1Campaign_universal_d_ReuseCampaignResponse as ReuseCampaignResponse, emailMarketingV1Campaign_universal_d_PreviewCampaignRequest as PreviewCampaignRequest, emailMarketingV1Campaign_universal_d_PreviewCampaignResponse as PreviewCampaignResponse, emailMarketingV1Campaign_universal_d_GetComposerRequest as GetComposerRequest, emailMarketingV1Campaign_universal_d_GetComposerResponse as GetComposerResponse, emailMarketingV1Campaign_universal_d_Composer as Composer, emailMarketingV1Campaign_universal_d_CreateCampaignRequest as CreateCampaignRequest, emailMarketingV1Campaign_universal_d_CreateCampaignResponse as CreateCampaignResponse, emailMarketingV1Campaign_universal_d_ResendToNonOpenersRequest as ResendToNonOpenersRequest, emailMarketingV1Campaign_universal_d_ResendToNonOpenersResponse as ResendToNonOpenersResponse, emailMarketingV1Campaign_universal_d_listStatistics as listStatistics, emailMarketingV1Campaign_universal_d_listRecipients as listRecipients, emailMarketingV1Campaign_universal_d_ListRecipientsOptions as ListRecipientsOptions, emailMarketingV1Campaign_universal_d_GetCampaignMappingIdentifiers as GetCampaignMappingIdentifiers, emailMarketingV1Campaign_universal_d_GetPingCampaignMappingIdentifiers as GetPingCampaignMappingIdentifiers, emailMarketingV1Campaign_universal_d_GetPingCampaignMappingOptions as GetPingCampaignMappingOptions, emailMarketingV1Campaign_universal_d_QueryAutomationTemplatesOptions as QueryAutomationTemplatesOptions, emailMarketingV1Campaign_universal_d_QueryAppTemplatesOptions as QueryAppTemplatesOptions, emailMarketingV1Campaign_universal_d_CampaignLookupBatchOptions as CampaignLookupBatchOptions, emailMarketingV1Campaign_universal_d_getCampaign as getCampaign, emailMarketingV1Campaign_universal_d_GetCampaignOptions as GetCampaignOptions, emailMarketingV1Campaign_universal_d_listCampaigns as listCampaigns, emailMarketingV1Campaign_universal_d_ListCampaignsOptions as ListCampaignsOptions, emailMarketingV1Campaign_universal_d_CreateFromTemplateOptions as CreateFromTemplateOptions, emailMarketingV1Campaign_universal_d_publishCampaign as publishCampaign, emailMarketingV1Campaign_universal_d_PublishCampaignOptions as PublishCampaignOptions, emailMarketingV1Campaign_universal_d_sendTest as sendTest, emailMarketingV1Campaign_universal_d_SendTestOptions as SendTestOptions, emailMarketingV1Campaign_universal_d_pauseScheduling as pauseScheduling, emailMarketingV1Campaign_universal_d_deleteCampaign as deleteCampaign, emailMarketingV1Campaign_universal_d_reuseCampaign as reuseCampaign, emailMarketingV1Campaign_universal_d_PreviewOptions as PreviewOptions, emailMarketingV1Campaign_universal_d_GetComposerOptions as GetComposerOptions, emailMarketingV1Campaign_universal_d_ResendToNonOpenersOptions as ResendToNonOpenersOptions, };
    }
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    /**
     * A sender details object contains the information that is displayed as the email sender's name and email address.
     * If sending email campaigns with a public email domain (e.g. @gmail.com or @yahoo.com), the email address will not
     * be displayed in the 'from' header. Instead, the email address is replaced with @wixemails.com (or @wixsitemail.com for free users),
     * and the sender's email is placed in the 'reply-to' header.
     *
     * If sending email campaigns with an email from a Wix managed domain, that email will be displayed in the 'from' header.
     * If sending with an email from a custom domain that is not managed by Wix, a line will be inserted that states that the
     * email was sent via wixemails.com.
     */
    interface SenderDetails {
        /** Display name of sender. */
        fromName?: string;
        /** Email address of sender. */
        fromEmail?: string;
        /**
         * Date and time the sender's email address was verified.
         * @readonly
         */
        dateVerified?: Date;
    }
    interface GetSenderDetailsRequest {
    }
    interface GetSenderDetailsResponse {
        /** Current sender details. */
        senderDetails?: SenderDetails;
    }
    interface UpdateSenderDetailsRequest {
        /** New sender details. */
        senderDetails: SenderDetails;
    }
    interface UpdateSenderDetailsResponse {
        /** Whether email address needs verification. */
        verificationNeeded?: boolean;
    }
    interface VerifySenderEmailRequest {
        /** Verification code. */
        verificationCode: string;
    }
    interface VerifySenderEmailResponse {
    }
    interface ResolveActualFromAddressRequest {
        /** User's provided address from which to send email marketing campaign. */
        fromAddress: string;
    }
    interface ResolveActualFromAddressResponse {
        /** Actual from-address that will be used for email distribution. */
        actualFromAddress?: string;
    }
    /**
     * Retrieves sender details.
     *
     * The sender details include the information displayed as the email sender's name and email address.
     *
     * + If you send an email campaign with a public email domain (e.g. @gmail.com or @yahoo.com), the email address will not be displayed in the 'from' header. Instead, the email address is replaced with @wixemails.com (or @wixsitemail.com for free users), and the sender's email is placed in the 'reply-to' header.
     *
     * + If you send an email campaign with an email from a Wix managed domain, that email will be displayed in the 'from' header.
     *
     * + If you send an email from a custom domain that is not managed by Wix, a line will be inserted that states that the email was sent via wixemails.com.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @adminMethod
     */
    function getSenderDetails(): Promise<GetSenderDetailsResponse>;
    /**
     * Updates sender details.
     *
     * If the `fromEmail` is changed, a verification code will be sent to the new email address.
     *
     * If verification is needed, a verification email will be sent to the user, and the returned `verificationNeeded` value will be `true`.
     *
     *
     * This function is not a universal function and runs only on the backend.
     * @param senderDetails - New sender details.
     * @public
     * @documentationMaturity preview
     * @requiredField senderDetails
     * @adminMethod
     */
    function updateSenderDetails(senderDetails: SenderDetails): Promise<UpdateSenderDetailsResponse>;
    /**
     * Verifies the sender's email using a verification code sent to the user's email address upon update.
     *
     * This function is not a universal function and runs only on the backend.
     * @param verificationCode - Verification code.
     * @public
     * @documentationMaturity preview
     * @requiredField verificationCode
     * @adminMethod
     */
    function verifyEmail(verificationCode: string): Promise<void>;
    /**
     * Checks if the sender's email address will be used as from-address or replaced (not related to current sender details).
     *
     * This function is not a universal function and runs only on the backend.
     * @param fromAddress - User's provided address from which to send email marketing campaign.
     * @public
     * @documentationMaturity preview
     * @requiredField fromAddress
     * @adminMethod
     */
    function resolveActualFromAddress(fromAddress: string): Promise<ResolveActualFromAddressResponse>;
    const emailMarketingV1SenderDetails_universal_d___debug: typeof __debug;
    type emailMarketingV1SenderDetails_universal_d_SenderDetails = SenderDetails;
    type emailMarketingV1SenderDetails_universal_d_GetSenderDetailsRequest = GetSenderDetailsRequest;
    type emailMarketingV1SenderDetails_universal_d_GetSenderDetailsResponse = GetSenderDetailsResponse;
    type emailMarketingV1SenderDetails_universal_d_UpdateSenderDetailsRequest = UpdateSenderDetailsRequest;
    type emailMarketingV1SenderDetails_universal_d_UpdateSenderDetailsResponse = UpdateSenderDetailsResponse;
    type emailMarketingV1SenderDetails_universal_d_VerifySenderEmailRequest = VerifySenderEmailRequest;
    type emailMarketingV1SenderDetails_universal_d_VerifySenderEmailResponse = VerifySenderEmailResponse;
    type emailMarketingV1SenderDetails_universal_d_ResolveActualFromAddressRequest = ResolveActualFromAddressRequest;
    type emailMarketingV1SenderDetails_universal_d_ResolveActualFromAddressResponse = ResolveActualFromAddressResponse;
    const emailMarketingV1SenderDetails_universal_d_getSenderDetails: typeof getSenderDetails;
    const emailMarketingV1SenderDetails_universal_d_updateSenderDetails: typeof updateSenderDetails;
    const emailMarketingV1SenderDetails_universal_d_verifyEmail: typeof verifyEmail;
    const emailMarketingV1SenderDetails_universal_d_resolveActualFromAddress: typeof resolveActualFromAddress;
    namespace emailMarketingV1SenderDetails_universal_d {
        export { emailMarketingV1SenderDetails_universal_d___debug as __debug, emailMarketingV1SenderDetails_universal_d_SenderDetails as SenderDetails, emailMarketingV1SenderDetails_universal_d_GetSenderDetailsRequest as GetSenderDetailsRequest, emailMarketingV1SenderDetails_universal_d_GetSenderDetailsResponse as GetSenderDetailsResponse, emailMarketingV1SenderDetails_universal_d_UpdateSenderDetailsRequest as UpdateSenderDetailsRequest, emailMarketingV1SenderDetails_universal_d_UpdateSenderDetailsResponse as UpdateSenderDetailsResponse, emailMarketingV1SenderDetails_universal_d_VerifySenderEmailRequest as VerifySenderEmailRequest, emailMarketingV1SenderDetails_universal_d_VerifySenderEmailResponse as VerifySenderEmailResponse, emailMarketingV1SenderDetails_universal_d_ResolveActualFromAddressRequest as ResolveActualFromAddressRequest, emailMarketingV1SenderDetails_universal_d_ResolveActualFromAddressResponse as ResolveActualFromAddressResponse, emailMarketingV1SenderDetails_universal_d_getSenderDetails as getSenderDetails, emailMarketingV1SenderDetails_universal_d_updateSenderDetails as updateSenderDetails, emailMarketingV1SenderDetails_universal_d_verifyEmail as verifyEmail, emailMarketingV1SenderDetails_universal_d_resolveActualFromAddress as resolveActualFromAddress, };
    }
    export { emailMarketingV1AccountDetails_universal_d as accountDetails, emailMarketingV1Campaign_universal_d as campaigns, emailMarketingV1SenderDetails_universal_d as senderDetails };
}
