declare module "wix-app-management.v2" {
  /**
   * An `appPlans` object describes how you charge users for using your app.
   * You can set up multiple plans for a single app, with different plans giving access to
   * different tiers of functionality. For example, you can offer a free plan and
   * 3 paid plans with an increasing number of benefits. Learn more about
   * [setting up your app pricing](https://dev.wix.com/docs/build-apps/build-your-app/pricing-plans/set-up-your-app-pricing).
   */
  interface AppPlans {
      /** App ID, as defined in the [Wix Dev Center](https://dev.wix.com/). */
      _id?: string;
      /**
       * List of the app's pricing plans.
       *
       * Min: `0` plans
       * Max: `50` plans
       */
      plans?: Plan[];
  }
  interface Cycle {
      /**
       * Type of the billing cycle.
       *
       * + `"UNKNOWN_UNIT"`:  There is no information about the billing cycle.
       * + `"ONE_TIME"`:  The customer pays for unlimited usage of the app with a single payment.
       * + `"RECURRING"`: The customer pays for a subscription to the app on a recurring schedule.
       */
      cycleType?: CycleType;
      /** Duration of the billing cycle. Available only for `{"cycleType": "RECURRING"}`. */
      cycleDuration?: Duration;
  }
  enum DurationUnit {
      /** unknown interval unit */
      UNKNOWN_UNIT = "UNKNOWN_UNIT",
      /** month */
      MONTH = "MONTH",
      /** year */
      YEAR = "YEAR"
  }
  enum CycleType {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      ONE_TIME = "ONE_TIME",
      RECURRING = "RECURRING"
  }
  interface Duration {
      /** Unit of the billing cycle. */
      unit?: DurationUnit;
      /** Count of units that make up the billing cycle. */
      count?: number;
  }
  interface UsageBasedDetails {
      /**
       * Smallest possible amount that your app charges customers in usage-based
       * pricing. For example, the price of a single SMS message if your
       * app charges customers for sending text messages. Always in
       * [USD](https://en.wikipedia.org/wiki/United_States_dollar).
       *
       * Min: `0.00`
       * Max: 1024 characters
       */
      minimumChargeIncrement?: string | null;
      /**
       * Recurring, monthly base fee in usaged-based pricing that your app
       * charges customers regardless of how much they use your app.
       *
       * Min: `0.00`
       * Max: 1024 characters
       */
      monthlyBaseFee?: string | null;
      /**
       * Description of the usaged-based pricing plan, as defined in the
       * [Dev Center](https://dev.wix.com/).
       *
       * Max: 1024 characters
       */
      customChargeDescription?: string | null;
  }
  interface Price {
      /**
       * Price without taxes. For yearly plans, Wix calculates and returns the
       * average price per month. You can get thefull price by multiplying the
       * returned price with 12.
       *
       * Min: `0.00`
       * Max: 1024 characters
       */
      priceBeforeTax?: string;
      /**
       * Total price including taxes.
       *
       * Min: `0.00`
       * Max: 1024 characters
       */
      totalPrice?: string;
      /** Information about the plan's recurring billing cycle or single payment. */
      billingCycle?: Cycle;
      /**
       * Details about the plan's usage-based pricing.
       * Available only for plans with
       * [usage-based pricing](https://dev.wix.com/docs/build-apps/build-your-app/pricing-plans/usage-based-pricing).
       */
      usageBaseOptions?: UsageBasedDetails;
  }
  interface Plan {
      /**
       * ID of the app plan.
       * @readonly
       */
      _id?: string;
      /**
       * ID of your app's pricing plan, as displayed in the [Dev Center](https://dev.wix.com/).
       * Identical to `vendorProductId` in the
       * [Paid Plan Purchased webhook](https://dev.wix.com/docs/rest/api-reference/app-management/apps/app-instance/paid-plan-purchased).
       */
      vendorId?: string;
      /** Name of your app's pricing plan, as defined by you in the [Dev Center](https://dev.wix.com/). */
      name?: string;
      /**
       * List of your plan's benefits, as defined by you in the [Dev Center](https://dev.wix.com/).
       * Currently, the benefits are available only in English.
       *
       * Min: `0` benefits
       * Max: `4` benefits
       * Max per benefit: 1024 characters
       */
      benefits?: string[];
      /**
       * List of the plan's prices. Available only when the plan's prices are managed
       * by Wix and not externally.
       *
       * Min: `0` prices
       * Max: `10` prices
       */
      prices?: Price[];
  }
  interface ListAppPlansByAppIdRequest {
      /**
       * List of app IDs to retrieve plans for.
       *
       * Min: 1 app ID
       * Max: 100 app IDs
       */
      appIds: string[];
  }
  interface ListAppPlansByAppIdResponse {
      /**
       * Tax settings. Wix calculates the tax settings based on the country code that
       * you pass in the call's header. If you don't pass a country code in the header,
       * Wix calculates the tax settings based on the caller's IP address. Note that the
       * tax settings may not resolve properly if you call through a VPN.
       */
      taxSettings?: TaxSettings;
      /**
       * 3-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)
       * format. Wix calculates the currency based on the country code that
       * you pass in the call's header. If you don't pass a country code in the header,
       * Wix calculates the currency based on the caller's IP address. Note that the
       * currency may not resolve properly if you call through a VPN.
       */
      currency?: string;
      /**
       * Currency symbol in decimal HTML entity format. For example, `&#36;` for $
       * (United States Dollar). Wix calculates the currency symbol based on the
       * country code that you pass in the call's header. If you don't pass a country
       * code in the header, Wix calculates the tax settings based on the caller's IP
       * address. Note that the currency symbol may not resolve properly if you call
       * through a VPN.
       */
      currencySymbol?: string;
      /**
       * Retrieved app plans.
       *
       * Min: 0 plans
       * Max: 50 plans
       */
      appPlans?: AppPlans[];
  }
  interface TaxSettings {
      /**
       * Whether you must display the total price including taxes in the given
       * country.
       */
      showPriceWithTax?: boolean;
      /**
       * Tax rate for the given country as percentage. Returned as `0` when
       * `{"showPriceWithTax": false}`.
       */
      percentage?: string | null;
      /**
       * Type of tax required in the given country.
       *
       * + `"NOT_APPLICABLE"`: The country doesn't require that you display the total price including taxes, or Wix failed to calculate the country based on the call's IP address.
       * + `"VAT"`: The given country requires that you display the total price including [value-added tax (VAT)](https://en.wikipedia.org/wiki/Value-added_tax).
       * + `"GST"`: The given country requires that you display the total price including [generation-skipping transfer tax (GST)](https://en.wikipedia.org/wiki/Generation-skipping_transfer_tax).
       */
      taxType?: TaxType;
  }
  enum TaxType {
      NOT_APPLICABLE = "NOT_APPLICABLE",
      VAT = "VAT",
      GST = "GST"
  }
  /**
   * Retrieves plans for the given apps.
   *
   *
   * Also returns tax settings and currency details. Wix calculates this information
   * based on the 2-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
   * format that you pass in the call's header. If you don't pass a country code in
   * the header, Wix calculates the tax settings and currency details based on the
   * call's IP address. Note that the tax settings and currency details may not resolve
   * properly if you call through a VPN.
   *
   * Prices for plans that are managed outside of Wix aren't returned.
   *
   * Consumers must pay for yearly and multi-yearly plans of your app every month.
   * For these plans this endpoint returns the price that the consumer must pay every
   * month and not the total price for the entire year.
   *
   * <blockquote class="important">
   *
   * __Important:__
   * The App Plans API doesn't follow any tenancy model. You don't need any
   * permissions to call `List App Plans by App ID`.
   *
   * </blockquote>
   * @param appIds - List of app IDs to retrieve plans for.
   *
   * Min: 1 app ID
   * Max: 100 app IDs
   * @public
   * @documentationMaturity preview
   * @requiredField appIds
   * @adminMethod
   */
  function listAppPlansByAppId(appIds: string[]): Promise<ListAppPlansByAppIdResponse>;
  
  type appmarketV1AppPlans_universal_d_AppPlans = AppPlans;
  type appmarketV1AppPlans_universal_d_Cycle = Cycle;
  type appmarketV1AppPlans_universal_d_DurationUnit = DurationUnit;
  const appmarketV1AppPlans_universal_d_DurationUnit: typeof DurationUnit;
  type appmarketV1AppPlans_universal_d_CycleType = CycleType;
  const appmarketV1AppPlans_universal_d_CycleType: typeof CycleType;
  type appmarketV1AppPlans_universal_d_Duration = Duration;
  type appmarketV1AppPlans_universal_d_UsageBasedDetails = UsageBasedDetails;
  type appmarketV1AppPlans_universal_d_Price = Price;
  type appmarketV1AppPlans_universal_d_Plan = Plan;
  type appmarketV1AppPlans_universal_d_ListAppPlansByAppIdRequest = ListAppPlansByAppIdRequest;
  type appmarketV1AppPlans_universal_d_ListAppPlansByAppIdResponse = ListAppPlansByAppIdResponse;
  type appmarketV1AppPlans_universal_d_TaxSettings = TaxSettings;
  type appmarketV1AppPlans_universal_d_TaxType = TaxType;
  const appmarketV1AppPlans_universal_d_TaxType: typeof TaxType;
  const appmarketV1AppPlans_universal_d_listAppPlansByAppId: typeof listAppPlansByAppId;
  namespace appmarketV1AppPlans_universal_d {
    export {
      appmarketV1AppPlans_universal_d_AppPlans as AppPlans,
      appmarketV1AppPlans_universal_d_Cycle as Cycle,
      appmarketV1AppPlans_universal_d_DurationUnit as DurationUnit,
      appmarketV1AppPlans_universal_d_CycleType as CycleType,
      appmarketV1AppPlans_universal_d_Duration as Duration,
      appmarketV1AppPlans_universal_d_UsageBasedDetails as UsageBasedDetails,
      appmarketV1AppPlans_universal_d_Price as Price,
      appmarketV1AppPlans_universal_d_Plan as Plan,
      appmarketV1AppPlans_universal_d_ListAppPlansByAppIdRequest as ListAppPlansByAppIdRequest,
      appmarketV1AppPlans_universal_d_ListAppPlansByAppIdResponse as ListAppPlansByAppIdResponse,
      appmarketV1AppPlans_universal_d_TaxSettings as TaxSettings,
      appmarketV1AppPlans_universal_d_TaxType as TaxType,
      appmarketV1AppPlans_universal_d_listAppPlansByAppId as listAppPlansByAppId,
    };
  }
  
  /**
   * An app instance is a specific occurrence of your app on a particular Wix site.
   * When a site owner installs your app, a unique instance is generated for that
   * specific site. Use the `instanceId` to keep track of the individual data
   * associated with each app instance.
   */
  interface AppInstance {
      /**
       * ID of the app instance. You can use it to keep track of the individual
       * data that's associated with the specific occurence of your app that's
       * installed on a Wix site.
       */
      instanceId?: string;
      /**
       * App name, as set by you in the Wix Developers Center during the app creation
       * process.
       */
      appName?: string;
      /**
       * Version of your app that's installed on the Wix site, as set by you in the
       * Wix Developers Center during the app creation process.
       */
      appVersion?: string | null;
      /**
       * Whether the site owners have installed a free or paid version of your app
       * on their site.
       */
      isFree?: boolean;
      /**
       * Billing information for the app instance. Available only in case
       * `{"isFree": false}`.
       */
      billing?: BillingInfo;
      /**
       * List of [permissions](https://dev.wix.com/docs/build-apps/developer-tools/developers-center/example-app-walkthrough/build-an-app#4-add-permissions)
       * that the site owners have granted your app. You set the list of permissions that
       * your app requires from the site owners in the Wix Developers Center during the
       * app creation process.
       */
      permissions?: string[];
      /** Plans available to this app instance. */
      availablePlans?: AvailablePlan[];
      /**
       * ID of the Wix site from which the instance of your app has been cloned.
       * Available only in case `{"copiedFromTemplate": true}`.
       * All visual settings of the Wix site and app data are duplicated during the
       * cloning process. Wix also notifies you in case there is any additional
       * external functionality for the original site.
       */
      originInstanceId?: string | null;
      /**
       * __Deprecated__. This parameter will be removed on March 30, 2023. Use
       * `copiedFromTemplate` instead.
       */
      isOriginSiteTemplate?: boolean;
      /** Whether the app instance was created when another Wix site was cloned. */
      copiedFromTemplate?: boolean;
  }
  interface BillingInfo {
      /** Name of the package that the site owner has paid for. */
      packageName?: string;
      /**
       * Interval of the billing cycle. `"ONE_TIME"` means that site owners have
       * purchased unlimited access to the app with a single, upfront payment.
       */
      billingCycle?: PaymentCycle;
      /**
       * Date and time the site owners have purchased the app's paid plan in
       * `YYYY-MM-DDThh:mm:ss.sssZ` format.
       */
      timeStamp?: string;
      /**
       * Date and time the app's current billing cycle ends in
       * `YYYY-MM-DDThh:mm:ss.sssZ` format. Available only for yearly and
       * multi-yearly plans.
       */
      expirationDate?: string | null;
      /**
       * Whether the app's subscription automatically renews at the end of the
       * current billing cycle.
       */
      autoRenewing?: boolean | null;
      /** ID of the invoice for the current billing cycle. */
      invoiceId?: string | null;
      /**
       * Information about any discounts applied to the app instance's current billing cycle.
       * If the site owners applied a developer coupon or Wix Voucher
       * when installing the paid version of your app, this field holds the coupon's
       * name or `“Wix discount coupon”`. Site owners may receive a Wix Voucher when
       * upgrading their Wix subscription. If there is no discount for the
       * current billing cycle, the field is an empty string.
       */
      source?: string | null;
      /** Information about the free trial applied, if relevant. */
      freeTrialInfo?: FreeTrialInfo;
  }
  enum PaymentCycle {
      NO_CYCLE = "NO_CYCLE",
      MONTHLY = "MONTHLY",
      YEARLY = "YEARLY",
      ONE_TIME = "ONE_TIME",
      TWO_YEARS = "TWO_YEARS",
      THREE_YEARS = "THREE_YEARS",
      FOUR_YEARS = "FOUR_YEARS",
      FIVE_YEARS = "FIVE_YEARS"
  }
  interface FreeTrialInfo {
      /**
       * Current free trial status.
       *
       * Supported values:
       *
       * - `IN_PROGRESS`: The free trial is currently in progress.
       * - `ENDED`: The free trial has ended.
       * - `NOT_AVAILABLE`: No free trial was applied, as none was available.
       * @readonly
       */
      status?: FreeTrialStatus;
      /**
       * When the free trial has ended. Populated only once the free trial is over.
       * @readonly
       */
      endDate?: Date;
  }
  enum FreeTrialStatus {
      UNKNOWN_STATUS = "UNKNOWN_STATUS",
      IN_PROGRESS = "IN_PROGRESS",
      ENDED = "ENDED",
      NOT_AVAILABLE = "NOT_AVAILABLE"
  }
  interface AvailablePlan {
      /** Package name of the available plan. */
      packageName?: string;
      /** Source of the available plan. Can be a bundle or 3rd-party app. */
      source?: string;
  }
  interface AppInstalled {
      /** Unique identifier of the app within the website. */
      appId?: string;
      /** Instance ID of the app in the original website (relevant only when this site was [duplicated from another site](https://support.wix.com/en/article/duplicating-your-site-1472847)). */
      originInstanceId?: string | null;
  }
  interface AppRemoved {
      /** Unique identifier of the app within the website. */
      appId?: string;
  }
  interface PaidPlanPurchased {
      /** Date and time of purchase. */
      operationTimeStamp?: Date;
      /** Purchased app plan. */
      vendorProductId?: string;
      /** Selected payment cycle. */
      cycle?: PaymentCycle;
      /** Plan expiration date. */
      expiresOn?: Date;
      /** Coupon applied to purchase (if relevant). */
      couponName?: string | null;
      /** Invoice ID. */
      invoiceId?: string | null;
  }
  interface PaidPlanChanged {
      /** Date and time of change. */
      operationTimeStamp?: Date;
      /** Newly purchased app plan. */
      vendorProductId?: string;
      /** Newly selected payment cycle. */
      cycle?: PaymentCycle;
      /** Previous app plan. */
      previousVendorProductId?: string | null;
      /** Previous payment cycle. */
      previousCycle?: PaymentCycle;
      /** Coupon applied to purchase (if relevant). */
      couponName?: string | null;
      /** Invoice ID. */
      invoiceId?: string | null;
  }
  interface PaidPlanAutoRenewalCancelled {
      /** Date and time of auto-renewal cancellation. */
      operationTimeStamp?: Date;
      /** Current app plan. */
      vendorProductId?: string;
      /** Current payment cycle. */
      cycle?: PaymentCycle;
      /** Supported values: `UNKNOWN_CANCELLATION_TYPE_ERROR_STATE`, `USER_CANCEL`, `FAILED_PAYMENT`, `TRANSFER_CANCELLATION_REASON`. Reason provided by app for cancellation (if relevant). */
      cancelReason?: string | null;
      /** Reason provided by site owner for cancellation (if relevant). */
      userReason?: string | null;
      /** Cancellation type. */
      subscriptionCancellationType?: string | null;
  }
  interface GetAppInstanceRequest {
  }
  interface GetAppInstanceResponse {
      /** Retrieved app instance. */
      instance?: AppInstance;
      /** Information about the corresponding Wix site. */
      site?: SiteInfo;
  }
  interface SiteInfo {
      /** Display name of the site. */
      siteDisplayName?: string | null;
      /**
       * 2-letter language code of the site's locale in
       * [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      locale?: string;
      /**
       * 3-letter currency code for the site's billing in
       * [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       */
      paymentCurrency?: string;
      /** Information about the site's supported languages. */
      multilingual?: Multilingual;
      /** URL of the site. Available only in case the site has been published. */
      url?: string | null;
      /** Description of the site. */
      description?: string | null;
      /** Wix apps that are installed on the site. */
      installedWixApps?: string[];
      /** > **Deprecation Notice:** This parameter will be removed on June 30, 2022. Use `ownerInfo` instead. */
      ownerEmail?: string | null;
      /**
       * Information about the site owner. Available only when calling
       * _Get App Instance_ with the __Read Site Owner Email__ permission scope.
       */
      ownerInfo?: OwnerInfo;
      /** Site ID. */
      siteId?: string;
  }
  interface Multilingual {
      /** Whether the site supports more than a single language. */
      isMultiLingual?: boolean;
      /** List of supported languages. Returned only when `{"isMultiLingual": true}`. */
      supportedLanguages?: SupportedLanguage[];
  }
  interface SupportedLanguage {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Locale. */
      locale?: Locale;
      /** Whether the supported language is the primary language for the site. */
      isPrimary?: boolean;
      /** Language icon. */
      countryCode?: string;
      /** How the language will be resolved. For internal use. */
      resolutionMethod?: ResolutionMethod;
  }
  interface Locale {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Two-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string;
  }
  enum ResolutionMethod {
      QUERY_PARAM = "QUERY_PARAM",
      SUBDOMAIN = "SUBDOMAIN",
      SUBDIRECTORY = "SUBDIRECTORY"
  }
  interface OwnerInfo {
      /** Site owner's email address. Identical to the site owner's login email. */
      email?: string;
      /**
       * Supported values: `VERIFIED_OPT_IN`, `VERIFIED_OPT_OUT`,
       * `NOT_VERIFIED_OPT_IN`, `NOT_VERIFIED_OPT_OUT`.
       *
       * Whether the site owner has verified their email and whether they have chosen
       * to receive email notifications from Wix.
       */
      emailStatus?: string;
  }
  interface GetAppInstanceByInstanceIdRequest {
      /** ID of the app instance to retrieve. */
      instanceId: string;
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
   * Retrieves data about the instance of your app that's installed on the Wix
   * site and the site itself.
   *
   *
   * You don't have to explicitly pass an identifier for the Wix site as part of
   * the request, since this information is taken automatically from the context.
   *
   * In case you want `site.ownerInfo` to be included in the response, you must
   * have the __Read Site Owner Email__ permission scope in addition to
   * __WIX_DEVELOPERS.MANAGE_APP_INSTANCE__.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function getAppInstance(): Promise<GetAppInstanceResponse>;
  /** @param instanceId - ID of the app instance to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField instanceId
   * @adminMethod
   */
  function getAppInstanceByInstanceId(instanceId: string): Promise<GetAppInstanceResponse>;
  
  type devcenterAppInstanceV1AppInstance_universal_d_AppInstance = AppInstance;
  type devcenterAppInstanceV1AppInstance_universal_d_BillingInfo = BillingInfo;
  type devcenterAppInstanceV1AppInstance_universal_d_PaymentCycle = PaymentCycle;
  const devcenterAppInstanceV1AppInstance_universal_d_PaymentCycle: typeof PaymentCycle;
  type devcenterAppInstanceV1AppInstance_universal_d_FreeTrialInfo = FreeTrialInfo;
  type devcenterAppInstanceV1AppInstance_universal_d_FreeTrialStatus = FreeTrialStatus;
  const devcenterAppInstanceV1AppInstance_universal_d_FreeTrialStatus: typeof FreeTrialStatus;
  type devcenterAppInstanceV1AppInstance_universal_d_AvailablePlan = AvailablePlan;
  type devcenterAppInstanceV1AppInstance_universal_d_AppInstalled = AppInstalled;
  type devcenterAppInstanceV1AppInstance_universal_d_AppRemoved = AppRemoved;
  type devcenterAppInstanceV1AppInstance_universal_d_PaidPlanPurchased = PaidPlanPurchased;
  type devcenterAppInstanceV1AppInstance_universal_d_PaidPlanChanged = PaidPlanChanged;
  type devcenterAppInstanceV1AppInstance_universal_d_PaidPlanAutoRenewalCancelled = PaidPlanAutoRenewalCancelled;
  type devcenterAppInstanceV1AppInstance_universal_d_GetAppInstanceRequest = GetAppInstanceRequest;
  type devcenterAppInstanceV1AppInstance_universal_d_GetAppInstanceResponse = GetAppInstanceResponse;
  type devcenterAppInstanceV1AppInstance_universal_d_SiteInfo = SiteInfo;
  type devcenterAppInstanceV1AppInstance_universal_d_Multilingual = Multilingual;
  type devcenterAppInstanceV1AppInstance_universal_d_SupportedLanguage = SupportedLanguage;
  type devcenterAppInstanceV1AppInstance_universal_d_Locale = Locale;
  type devcenterAppInstanceV1AppInstance_universal_d_ResolutionMethod = ResolutionMethod;
  const devcenterAppInstanceV1AppInstance_universal_d_ResolutionMethod: typeof ResolutionMethod;
  type devcenterAppInstanceV1AppInstance_universal_d_OwnerInfo = OwnerInfo;
  type devcenterAppInstanceV1AppInstance_universal_d_GetAppInstanceByInstanceIdRequest = GetAppInstanceByInstanceIdRequest;
  type devcenterAppInstanceV1AppInstance_universal_d_MessageEnvelope = MessageEnvelope;
  type devcenterAppInstanceV1AppInstance_universal_d_IdentificationData = IdentificationData;
  type devcenterAppInstanceV1AppInstance_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type devcenterAppInstanceV1AppInstance_universal_d_WebhookIdentityType = WebhookIdentityType;
  const devcenterAppInstanceV1AppInstance_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const devcenterAppInstanceV1AppInstance_universal_d_getAppInstance: typeof getAppInstance;
  const devcenterAppInstanceV1AppInstance_universal_d_getAppInstanceByInstanceId: typeof getAppInstanceByInstanceId;
  namespace devcenterAppInstanceV1AppInstance_universal_d {
    export {
      devcenterAppInstanceV1AppInstance_universal_d_AppInstance as AppInstance,
      devcenterAppInstanceV1AppInstance_universal_d_BillingInfo as BillingInfo,
      devcenterAppInstanceV1AppInstance_universal_d_PaymentCycle as PaymentCycle,
      devcenterAppInstanceV1AppInstance_universal_d_FreeTrialInfo as FreeTrialInfo,
      devcenterAppInstanceV1AppInstance_universal_d_FreeTrialStatus as FreeTrialStatus,
      devcenterAppInstanceV1AppInstance_universal_d_AvailablePlan as AvailablePlan,
      devcenterAppInstanceV1AppInstance_universal_d_AppInstalled as AppInstalled,
      devcenterAppInstanceV1AppInstance_universal_d_AppRemoved as AppRemoved,
      devcenterAppInstanceV1AppInstance_universal_d_PaidPlanPurchased as PaidPlanPurchased,
      devcenterAppInstanceV1AppInstance_universal_d_PaidPlanChanged as PaidPlanChanged,
      devcenterAppInstanceV1AppInstance_universal_d_PaidPlanAutoRenewalCancelled as PaidPlanAutoRenewalCancelled,
      devcenterAppInstanceV1AppInstance_universal_d_GetAppInstanceRequest as GetAppInstanceRequest,
      devcenterAppInstanceV1AppInstance_universal_d_GetAppInstanceResponse as GetAppInstanceResponse,
      devcenterAppInstanceV1AppInstance_universal_d_SiteInfo as SiteInfo,
      devcenterAppInstanceV1AppInstance_universal_d_Multilingual as Multilingual,
      devcenterAppInstanceV1AppInstance_universal_d_SupportedLanguage as SupportedLanguage,
      devcenterAppInstanceV1AppInstance_universal_d_Locale as Locale,
      devcenterAppInstanceV1AppInstance_universal_d_ResolutionMethod as ResolutionMethod,
      devcenterAppInstanceV1AppInstance_universal_d_OwnerInfo as OwnerInfo,
      devcenterAppInstanceV1AppInstance_universal_d_GetAppInstanceByInstanceIdRequest as GetAppInstanceByInstanceIdRequest,
      devcenterAppInstanceV1AppInstance_universal_d_MessageEnvelope as MessageEnvelope,
      devcenterAppInstanceV1AppInstance_universal_d_IdentificationData as IdentificationData,
      devcenterAppInstanceV1AppInstance_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      devcenterAppInstanceV1AppInstance_universal_d_WebhookIdentityType as WebhookIdentityType,
      devcenterAppInstanceV1AppInstance_universal_d_getAppInstance as getAppInstance,
      devcenterAppInstanceV1AppInstance_universal_d_getAppInstanceByInstanceId as getAppInstanceByInstanceId,
    };
  }
  
  export { devcenterAppInstanceV1AppInstance_universal_d as appInstances, appmarketV1AppPlans_universal_d as appPlans };
}
