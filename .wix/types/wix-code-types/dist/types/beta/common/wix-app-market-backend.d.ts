declare module "wix-app-market-backend" {
  interface SendBIEventResponse {
  }
  interface SendBIEventRequest {
      /**
       * Name of the event that's triggered in your app.
       *
       * + `"APP_DASHBOARD_LOADED"`: A site onwer or contributor loads your app's dashboard.
       * + `"APP_FINISHED_CONFIGURATION"`: The site owner completes all required configurations for your app in the Wix Developers Center.
       * + `"APP_UPGRADED"`: The site owner upgrades your app's paid plan. An upgrade means that they have finished the checkout flow on the app's side but not necessarily on Wix's side.
       * + `"PRIMARY_ACTION_PERFORMED"`: A site owner, contributor, or visitor triggers your app's primary action. For example, a site visitor writes a product review using your product review app.
       * + `"CHARGE"`: You charge money from the site owner. For example, when the site owner purchases or renews a subscription for your app. Make sure to also send `eventData` and a key of `sum`.
       * + `"FUNDS_RETURNED"`: Trigger this event when you send money back to a site owner (for example, refunds or chargebacks). Make sure to also send the charge amount inside `eventData`. For example, `{"eventData": {"sum": "5.99"}}`.
       * + `"CUSTOM"`: Any event that's not listed here. Make sure to also send `customEventName`.
       * + `"APP_DEPLOYED"`: Your app’s internal code implementation is changed and might affect user flows or cause a regression.
       * + `"APP_FINISH_BUSINESS_SETUP"`: __Deprecation Notice:__ This enum value will be removed on March 30, 2023. Use `"APP_SETUP_FINISHED"` instead.
       * + `"APP_SETUP_FINISHED"`: The site owner completes your app's required business setup.
       */
      eventName?: EventName;
      /**
       * Name of your app's custom event that was triggered. Required when `{"eventName": "CUSTOM"}`.
       *
       * Min: 2 characters
       */
      customEventName?: string | null;
      /**
       * Supported values include: `"cycle_name"`, `"currency"`, `"sum"`, `"reason"`, `"app_plan_id"`.
       * You may also submit data with keys that aren't listed here.
       *
       * Additional data about your app's event.
       *
       * + `"cycle_name"`: Supported values: `"monthly"`, `"yearly"`, `"2 years"`, `"one time"`.
       * + `"currency"`: 3-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       * + `"sum"`: Amount of money. Required for `{"eventName": "CHARGE"}` and `{"eventName": "FUNDS_RETURNED"}`.
       * + `"reason"`: Information about why the event was triggered in your app.
       * + `"app_plan_id"`: ID of the your app's plan as displayed in the Developers Center. Note that it's the same value as `vendorProductId` in the [Paid Plan Purchased webhook](https://dev.wix.com/docs/rest/api-reference/app-management/apps/app-instance/paid-plan-purchased).
       */
      eventData?: Record<string, string>;
  }
  enum EventName {
      UNKNOWN = "UNKNOWN",
      APP_DASHBOARD_LOADED = "APP_DASHBOARD_LOADED",
      APP_FINISHED_CONFIGURATION = "APP_FINISHED_CONFIGURATION",
      APP_UPGRADED = "APP_UPGRADED",
      PRIMARY_ACTION_PERFORMED = "PRIMARY_ACTION_PERFORMED",
      CUSTOM = "CUSTOM",
      CHARGE = "CHARGE",
      FUNDS_RETURNED = "FUNDS_RETURNED",
      APP_FINISH_BUSINESS_SETUP = "APP_FINISH_BUSINESS_SETUP",
      APP_DEPLOYED = "APP_DEPLOYED",
      APP_SETUP_FINISHED = "APP_SETUP_FINISHED"
  }
  /**
   * Submit a BI event to Wix.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function sendBiEvent(options?: SendBiEventOptions): Promise<void>;
  interface SendBiEventOptions {
      /**
       * Name of the event that's triggered in your app.
       *
       * + `"APP_DASHBOARD_LOADED"`: A site onwer or contributor loads your app's dashboard.
       * + `"APP_FINISHED_CONFIGURATION"`: The site owner completes all required configurations for your app in the Wix Developers Center.
       * + `"APP_UPGRADED"`: The site owner upgrades your app's paid plan. An upgrade means that they have finished the checkout flow on the app's side but not necessarily on Wix's side.
       * + `"PRIMARY_ACTION_PERFORMED"`: A site owner, contributor, or visitor triggers your app's primary action. For example, a site visitor writes a product review using your product review app.
       * + `"CHARGE"`: You charge money from the site owner. For example, when the site owner purchases or renews a subscription for your app. Make sure to also send `eventData` and a key of `sum`.
       * + `"FUNDS_RETURNED"`: Trigger this event when you send money back to a site owner (for example, refunds or chargebacks). Make sure to also send the charge amount inside `eventData`. For example, `{"eventData": {"sum": "5.99"}}`.
       * + `"CUSTOM"`: Any event that's not listed here. Make sure to also send `customEventName`.
       * + `"APP_DEPLOYED"`: Your app’s internal code implementation is changed and might affect user flows or cause a regression.
       * + `"APP_FINISH_BUSINESS_SETUP"`: __Deprecation Notice:__ This enum value will be removed on March 30, 2023. Use `"APP_SETUP_FINISHED"` instead.
       * + `"APP_SETUP_FINISHED"`: The site owner completes your app's required business setup.
       */
      eventName?: EventName;
      /**
       * Name of your app's custom event that was triggered. Required when `{"eventName": "CUSTOM"}`.
       *
       * Min: 2 characters
       */
      customEventName?: string | null;
      /**
       * Supported values include: `"cycle_name"`, `"currency"`, `"sum"`, `"reason"`, `"app_plan_id"`.
       * You may also submit data with keys that aren't listed here.
       *
       * Additional data about your app's event.
       *
       * + `"cycle_name"`: Supported values: `"monthly"`, `"yearly"`, `"2 years"`, `"one time"`.
       * + `"currency"`: 3-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       * + `"sum"`: Amount of money. Required for `{"eventName": "CHARGE"}` and `{"eventName": "FUNDS_RETURNED"}`.
       * + `"reason"`: Information about why the event was triggered in your app.
       * + `"app_plan_id"`: ID of the your app's plan as displayed in the Developers Center. Note that it's the same value as `vendorProductId` in the [Paid Plan Purchased webhook](https://dev.wix.com/docs/rest/api-reference/app-management/apps/app-instance/paid-plan-purchased).
       */
      eventData?: Record<string, string>;
  }
  
  type devcenterBiEventsV1SendBiEventResponse_universal_d_SendBIEventResponse = SendBIEventResponse;
  type devcenterBiEventsV1SendBiEventResponse_universal_d_SendBIEventRequest = SendBIEventRequest;
  type devcenterBiEventsV1SendBiEventResponse_universal_d_EventName = EventName;
  const devcenterBiEventsV1SendBiEventResponse_universal_d_EventName: typeof EventName;
  const devcenterBiEventsV1SendBiEventResponse_universal_d_sendBiEvent: typeof sendBiEvent;
  type devcenterBiEventsV1SendBiEventResponse_universal_d_SendBiEventOptions = SendBiEventOptions;
  namespace devcenterBiEventsV1SendBiEventResponse_universal_d {
    export {
      devcenterBiEventsV1SendBiEventResponse_universal_d_SendBIEventResponse as SendBIEventResponse,
      devcenterBiEventsV1SendBiEventResponse_universal_d_SendBIEventRequest as SendBIEventRequest,
      devcenterBiEventsV1SendBiEventResponse_universal_d_EventName as EventName,
      devcenterBiEventsV1SendBiEventResponse_universal_d_sendBiEvent as sendBiEvent,
      devcenterBiEventsV1SendBiEventResponse_universal_d_SendBiEventOptions as SendBiEventOptions,
    };
  }
  
  interface PurchasedItem {
      /** ID of your app's paid plan. */
      productId?: string;
      /** Price of your app's paid plan. For example, `9.95`. */
      price?: string;
      /**
       * 3-letter currency code in
       * [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       */
      currency?: string;
      /** Information about the billing cycle for your app's paid plan. */
      billingCycle?: PaymentCycle;
      /**
       * Date and time the site onwers have purchased your app's paid plan in
       * `YYYY-MM-DDThh:mm:ss.sssZ` format.
       */
      dateCreated?: Date;
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
  interface InvoiceStatusUpdate {
      /** Invoice payment status. */
      status?: InvoiceStatus;
      /** Wix Premium invoice ID. */
      invoiceId?: string;
      /** App instance ID - a unique ID assigned to each app in each site. */
      instanceId?: string | null;
      /** Whether the invoice is for a single payment or for multiple, recurring payments. */
      recurring?: boolean;
  }
  enum InvoiceStatus {
      UNKNOWN_INVOICE_STATUS = "UNKNOWN_INVOICE_STATUS",
      PAYMENT_FAILED = "PAYMENT_FAILED",
      PAID = "PAID",
      REFUNDED = "REFUNDED",
      VOIDED = "VOIDED",
      CHARGEDBACK = "CHARGEDBACK"
  }
  interface GetUrlRequest {
      /**
       * ID of your app's paid plan to retrieve the Wix checkout URL for. Check the
       * Wix Developers Center for a list of your app's supported product IDs.
       */
      productId: string;
      /**
       * URL for the Wix checkout page. Redirect site owners to this URL after
       * they've successfully purchased a paid plan for your app.
       */
      successUrl?: string | null;
      /**
       * Whether the checkout is for testing purposes only. Testing is mainly
       * relevant for in-app purchase flows. When `true`, Wix charges the site
       * owners an amount of `0.00`.
       */
      testCheckout?: boolean;
      /** Information about the paid plan's billing cycle. */
      billingCycle?: PaymentCycle;
      /**
       * 2-letter country code in
       * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
       * format.
       *
       * Default: `"US"`
       */
      countryCode?: string | null;
      /**
       * 2-letter language code in
       * [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       *
       * Default: `"EN"`
       */
      languageCode?: string | null;
      /**
       * Price and currency Wix uses to charge the site owners. Overrides the
       * default values you've set in the app's pricing plan in the Wix Developers
       * Center. Only supported in combination with `{"billingCycle": "ONE_TIME"}`.
       * Otherwise the call fails with a validation error.
       * @internal
       */
      chargeOverride?: ChargeOverride;
      /** Coupon code for the paid plan. Available only in case there is a discount. */
      couponCode?: string | null;
  }
  interface ChargeOverride {
      /**
       * Override price. In case you omit the override price, Wix charges site
       * owners the app's default price that's configured in the Wix Developers
       * Center.
       */
      price?: number;
      /**
       * Override 3-letter currency code in
       * [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       */
      currency?: string;
  }
  interface GetUrlResponse {
      /** URL for the Wix checkout page. */
      checkoutUrl?: string;
      /**
       * Token for the Wix checkout page. The token holds all data about the order
       * you're creating a checkout for.  It is [signed](),
       * so you can verify that it comes from Wix.
       */
      token?: string | null;
  }
  interface GetPurchaseHistoryRequest {
  }
  interface GetPurchaseHistoryResponse {
      /** Retrieved purchases the site owners have completed for you app. */
      purchases?: PurchasedItem[];
  }
  interface GetSitePaymentMethodsStatusRequest {
  }
  interface GetSitePaymentMethodsStatusResponse {
      /**
       * Whether the site owners have enabled at least a single online payment method.
       * Online payment methods include Wix Payments, Stripe, PayPal, and credit
       * cards.
       */
      onlineProviderEnabled?: boolean;
      /** Whether the site owners accept offline payments. */
      offlineProviderEnabled?: boolean;
      /**
       * Whether the site owners have enabled the
       * [Wix Point of Sale](https://www.wix.com/pos).
       * This allows their customers to make electronic payments in person.
       */
      wixPosProviderEnabled?: boolean;
      /**
       * Whether the site owners have enabled at least one 3rd-party point-of-sale
       * provider. This allows their customers to make electronic payments in person.
       */
      thirdPartyPosProviderEnabled?: boolean;
  }
  interface GetMeteredBillingChargesRequest {
      /**
       * 3-letter currency code in
       * [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       */
      currency?: string | null;
      /**
       * Start of the period you want to retrieve the custom charges for in
       * `YYYY-MM-DDThh:mm:ss.sssZ` format.
       */
      startDate?: Date;
      /**
       * End of the period you want to retrieve the custom charges for in
       * `YYYY-MM-DDThh:mm:ss.sssZ` format.
       */
      endDate?: Date;
  }
  interface GetMeteredBillingChargesResponse {
      /** List of retrieved custom charges. */
      charges?: Charge[];
  }
  interface Charge {
      /** ID of the custom charge. The ID consists of 64 characters. */
      _id?: string | null;
      /** Description of the custom charge. */
      description?: string;
      /**
       * Charge amount.
       *
       * Min: `0.50`
       */
      amount?: string;
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
   * Retrieves the URL for a Wix checkout page for the specified paid plan of your app.
   *
   *
   * This call succeeds only in case you have previously
   * [set up an external pricing page in the Wix Developers Center](https://dev.wix.com/docs/build-apps/build-your-app/pricing-plans/set-up-an-external-pricing-page).
   *
   * The returned checkout URL is valid for 48 hours.
   *
   * This API allows your app to manage your pricing page outside of Wix while
   * still using the standard Wix checkout flow.
   * @param productId - ID of your app's paid plan to retrieve the Wix checkout URL for. Check the
   * Wix Developers Center for a list of your app's supported product IDs.
   * @public
   * @documentationMaturity preview
   * @requiredField productId
   * @adminMethod
   */
  function getUrl(productId: string, options?: GetUrlOptions): Promise<GetUrlResponse>;
  interface GetUrlOptions {
      /**
       * URL for the Wix checkout page. Redirect site owners to this URL after
       * they've successfully purchased a paid plan for your app.
       */
      successUrl?: string | null;
      /**
       * Whether the checkout is for testing purposes only. Testing is mainly
       * relevant for in-app purchase flows. When `true`, Wix charges the site
       * owners an amount of `0.00`.
       */
      testCheckout?: boolean;
      /** Information about the paid plan's billing cycle. */
      billingCycle?: PaymentCycle;
      /**
       * 2-letter country code in
       * [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
       * format.
       *
       * Default: `"US"`
       */
      countryCode?: string | null;
      /**
       * 2-letter language code in
       * [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       *
       * Default: `"EN"`
       */
      languageCode?: string | null;
      /**
       * Price and currency Wix uses to charge the site owners. Overrides the
       * default values you've set in the app's pricing plan in the Wix Developers
       * Center. Only supported in combination with `{"billingCycle": "ONE_TIME"}`.
       * Otherwise the call fails with a validation error.
       * @internal
       */
      chargeOverride?: ChargeOverride;
      /** Coupon code for the paid plan. Available only in case there is a discount. */
      couponCode?: string | null;
  }
  /**
   * Retrieves a list of the site owner's past purchases for your app.
   *
   *
   * You don't have to explicitly pass an identifier for the Wix site as part of
   * the request, since this information is taken automatically from the context.
   *
   * The response doesn't include any details about cancellations.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function getPurchaseHistory(): Promise<GetPurchaseHistoryResponse>;
  /**
   * Retrieves information about the site's enabled payment methods.
   *
   *
   * Checks whether online, offline, Wix POS, and external POS payments are
   * enabled.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getSitePaymentMethodsStatus(): Promise<GetSitePaymentMethodsStatusResponse>;
  /**
   * Triggers Wix to call the
   * [List Custom Charges SPI](https://dev.wix.com/docs/rest/internal-only/premium/custom-charges-spi/custom-charges-provider-v1/list-charges).
   *
   *
   * Wix doesn't use the response from _List Charges_ SPI to actually create an
   * invoice that's sent to the customer. Instead, calling _Get Metered Billing Charges_
   * allows you confirm that your integration with the Custom Charges SPI is
   * working as intended.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getMeteredBillingCharges(options?: GetMeteredBillingChargesOptions): Promise<GetMeteredBillingChargesResponse>;
  interface GetMeteredBillingChargesOptions {
      /**
       * 3-letter currency code in
       * [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       */
      currency?: string | null;
      /**
       * Start of the period you want to retrieve the custom charges for in
       * `YYYY-MM-DDThh:mm:ss.sssZ` format.
       */
      startDate?: Date;
      /**
       * End of the period you want to retrieve the custom charges for in
       * `YYYY-MM-DDThh:mm:ss.sssZ` format.
       */
      endDate?: Date;
  }
  
  type devcenterCheckoutV1PurchasedItem_universal_d_PurchasedItem = PurchasedItem;
  type devcenterCheckoutV1PurchasedItem_universal_d_PaymentCycle = PaymentCycle;
  const devcenterCheckoutV1PurchasedItem_universal_d_PaymentCycle: typeof PaymentCycle;
  type devcenterCheckoutV1PurchasedItem_universal_d_InvoiceStatusUpdate = InvoiceStatusUpdate;
  type devcenterCheckoutV1PurchasedItem_universal_d_InvoiceStatus = InvoiceStatus;
  const devcenterCheckoutV1PurchasedItem_universal_d_InvoiceStatus: typeof InvoiceStatus;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetUrlRequest = GetUrlRequest;
  type devcenterCheckoutV1PurchasedItem_universal_d_ChargeOverride = ChargeOverride;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetUrlResponse = GetUrlResponse;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetPurchaseHistoryRequest = GetPurchaseHistoryRequest;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetPurchaseHistoryResponse = GetPurchaseHistoryResponse;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetSitePaymentMethodsStatusRequest = GetSitePaymentMethodsStatusRequest;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetSitePaymentMethodsStatusResponse = GetSitePaymentMethodsStatusResponse;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetMeteredBillingChargesRequest = GetMeteredBillingChargesRequest;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetMeteredBillingChargesResponse = GetMeteredBillingChargesResponse;
  type devcenterCheckoutV1PurchasedItem_universal_d_Charge = Charge;
  type devcenterCheckoutV1PurchasedItem_universal_d_MessageEnvelope = MessageEnvelope;
  type devcenterCheckoutV1PurchasedItem_universal_d_IdentificationData = IdentificationData;
  type devcenterCheckoutV1PurchasedItem_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type devcenterCheckoutV1PurchasedItem_universal_d_WebhookIdentityType = WebhookIdentityType;
  const devcenterCheckoutV1PurchasedItem_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const devcenterCheckoutV1PurchasedItem_universal_d_getUrl: typeof getUrl;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetUrlOptions = GetUrlOptions;
  const devcenterCheckoutV1PurchasedItem_universal_d_getPurchaseHistory: typeof getPurchaseHistory;
  const devcenterCheckoutV1PurchasedItem_universal_d_getSitePaymentMethodsStatus: typeof getSitePaymentMethodsStatus;
  const devcenterCheckoutV1PurchasedItem_universal_d_getMeteredBillingCharges: typeof getMeteredBillingCharges;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetMeteredBillingChargesOptions = GetMeteredBillingChargesOptions;
  namespace devcenterCheckoutV1PurchasedItem_universal_d {
    export {
      devcenterCheckoutV1PurchasedItem_universal_d_PurchasedItem as PurchasedItem,
      devcenterCheckoutV1PurchasedItem_universal_d_PaymentCycle as PaymentCycle,
      devcenterCheckoutV1PurchasedItem_universal_d_InvoiceStatusUpdate as InvoiceStatusUpdate,
      devcenterCheckoutV1PurchasedItem_universal_d_InvoiceStatus as InvoiceStatus,
      devcenterCheckoutV1PurchasedItem_universal_d_GetUrlRequest as GetUrlRequest,
      devcenterCheckoutV1PurchasedItem_universal_d_ChargeOverride as ChargeOverride,
      devcenterCheckoutV1PurchasedItem_universal_d_GetUrlResponse as GetUrlResponse,
      devcenterCheckoutV1PurchasedItem_universal_d_GetPurchaseHistoryRequest as GetPurchaseHistoryRequest,
      devcenterCheckoutV1PurchasedItem_universal_d_GetPurchaseHistoryResponse as GetPurchaseHistoryResponse,
      devcenterCheckoutV1PurchasedItem_universal_d_GetSitePaymentMethodsStatusRequest as GetSitePaymentMethodsStatusRequest,
      devcenterCheckoutV1PurchasedItem_universal_d_GetSitePaymentMethodsStatusResponse as GetSitePaymentMethodsStatusResponse,
      devcenterCheckoutV1PurchasedItem_universal_d_GetMeteredBillingChargesRequest as GetMeteredBillingChargesRequest,
      devcenterCheckoutV1PurchasedItem_universal_d_GetMeteredBillingChargesResponse as GetMeteredBillingChargesResponse,
      devcenterCheckoutV1PurchasedItem_universal_d_Charge as Charge,
      devcenterCheckoutV1PurchasedItem_universal_d_MessageEnvelope as MessageEnvelope,
      devcenterCheckoutV1PurchasedItem_universal_d_IdentificationData as IdentificationData,
      devcenterCheckoutV1PurchasedItem_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      devcenterCheckoutV1PurchasedItem_universal_d_WebhookIdentityType as WebhookIdentityType,
      devcenterCheckoutV1PurchasedItem_universal_d_getUrl as getUrl,
      devcenterCheckoutV1PurchasedItem_universal_d_GetUrlOptions as GetUrlOptions,
      devcenterCheckoutV1PurchasedItem_universal_d_getPurchaseHistory as getPurchaseHistory,
      devcenterCheckoutV1PurchasedItem_universal_d_getSitePaymentMethodsStatus as getSitePaymentMethodsStatus,
      devcenterCheckoutV1PurchasedItem_universal_d_getMeteredBillingCharges as getMeteredBillingCharges,
      devcenterCheckoutV1PurchasedItem_universal_d_GetMeteredBillingChargesOptions as GetMeteredBillingChargesOptions,
    };
  }
  
  /** Embedded script data */
  interface ScriptProperties {
      /** Script parameters */
      parameters?: Record<string, string>;
      /** Whether script is disabled or not, defaults to false (not disabled) */
      disabled?: boolean;
  }
  interface EmbedScriptRequest {
      /** Details of the script to embed. */
      properties: ScriptProperties;
      /** ID of the corresponding embedded script component. */
      componentId?: string | null;
  }
  interface EmbedScriptResponse {
      /** Details of the embedded script. */
      properties?: ScriptProperties;
  }
  interface GetEmbeddedScriptRequest {
      /** Component ID of the embedded script to retrieve. */
      componentId?: string | null;
  }
  interface GetEmbeddedScriptResponse {
      /** Details of the retrieved embedded script. */
      properties?: ScriptProperties;
  }
  interface EmbedScriptByInstanceIdRequest {
      instanceId: string;
      /** Parameters to embed */
      properties: ScriptProperties;
      componentId?: string | null;
  }
  interface GetEmbeddedScriptByInstanceIdRequest {
      instanceId: string;
      componentId?: string | null;
  }
  /**
   * Inserts custom script tags into a site.
   *
   *
   * Your app must have an existing
   * [embedded script component](https://dev.wix.com/docs/build-apps/developer-tools/extensions/embedded-scripts),
   * with exactly matching parameter names.
   * @param properties - Details of the script to embed.
   * @public
   * @documentationMaturity preview
   * @requiredField properties
   * @adminMethod
   */
  function embedScript(properties: ScriptProperties, options?: EmbedScriptOptions): Promise<EmbedScriptResponse>;
  interface EmbedScriptOptions {
      /** ID of the corresponding embedded script component. */
      componentId?: string | null;
  }
  /**
   * Retrieves information about your app's existing embedded script.
   *
   *
   * The call fails with `404` error in case your app doesn't include an
   * embedded script on the site.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   * @returns Details of the retrieved embedded script.
   */
  function getEmbeddedScript(options?: GetEmbeddedScriptOptions): Promise<ScriptProperties>;
  interface GetEmbeddedScriptOptions {
      /** Component ID of the embedded script to retrieve. */
      componentId?: string | null;
  }
  /** @param properties - Parameters to embed
   * @internal
   * @documentationMaturity preview
   * @requiredField instanceId
   * @requiredField properties
   * @adminMethod
   */
  function embedScriptByInstanceId(instanceId: string, properties: ScriptProperties, options?: EmbedScriptByInstanceIdOptions): Promise<EmbedScriptResponse>;
  interface EmbedScriptByInstanceIdOptions {
      componentId?: string | null;
  }
  /**
   * Retrieves this app's existing embedded script parameters
   * @internal
   * @documentationMaturity preview
   * @requiredField instanceId
   * @adminMethod
   */
  function getEmbeddedScriptByInstanceId(instanceId: string, options?: GetEmbeddedScriptByInstanceIdOptions): Promise<GetEmbeddedScriptResponse>;
  interface GetEmbeddedScriptByInstanceIdOptions {
      componentId?: string | null;
  }
  
  type devcenterScriptsV1ScriptProperties_universal_d_ScriptProperties = ScriptProperties;
  type devcenterScriptsV1ScriptProperties_universal_d_EmbedScriptRequest = EmbedScriptRequest;
  type devcenterScriptsV1ScriptProperties_universal_d_EmbedScriptResponse = EmbedScriptResponse;
  type devcenterScriptsV1ScriptProperties_universal_d_GetEmbeddedScriptRequest = GetEmbeddedScriptRequest;
  type devcenterScriptsV1ScriptProperties_universal_d_GetEmbeddedScriptResponse = GetEmbeddedScriptResponse;
  type devcenterScriptsV1ScriptProperties_universal_d_EmbedScriptByInstanceIdRequest = EmbedScriptByInstanceIdRequest;
  type devcenterScriptsV1ScriptProperties_universal_d_GetEmbeddedScriptByInstanceIdRequest = GetEmbeddedScriptByInstanceIdRequest;
  const devcenterScriptsV1ScriptProperties_universal_d_embedScript: typeof embedScript;
  type devcenterScriptsV1ScriptProperties_universal_d_EmbedScriptOptions = EmbedScriptOptions;
  const devcenterScriptsV1ScriptProperties_universal_d_getEmbeddedScript: typeof getEmbeddedScript;
  type devcenterScriptsV1ScriptProperties_universal_d_GetEmbeddedScriptOptions = GetEmbeddedScriptOptions;
  const devcenterScriptsV1ScriptProperties_universal_d_embedScriptByInstanceId: typeof embedScriptByInstanceId;
  type devcenterScriptsV1ScriptProperties_universal_d_EmbedScriptByInstanceIdOptions = EmbedScriptByInstanceIdOptions;
  const devcenterScriptsV1ScriptProperties_universal_d_getEmbeddedScriptByInstanceId: typeof getEmbeddedScriptByInstanceId;
  type devcenterScriptsV1ScriptProperties_universal_d_GetEmbeddedScriptByInstanceIdOptions = GetEmbeddedScriptByInstanceIdOptions;
  namespace devcenterScriptsV1ScriptProperties_universal_d {
    export {
      devcenterScriptsV1ScriptProperties_universal_d_ScriptProperties as ScriptProperties,
      devcenterScriptsV1ScriptProperties_universal_d_EmbedScriptRequest as EmbedScriptRequest,
      devcenterScriptsV1ScriptProperties_universal_d_EmbedScriptResponse as EmbedScriptResponse,
      devcenterScriptsV1ScriptProperties_universal_d_GetEmbeddedScriptRequest as GetEmbeddedScriptRequest,
      devcenterScriptsV1ScriptProperties_universal_d_GetEmbeddedScriptResponse as GetEmbeddedScriptResponse,
      devcenterScriptsV1ScriptProperties_universal_d_EmbedScriptByInstanceIdRequest as EmbedScriptByInstanceIdRequest,
      devcenterScriptsV1ScriptProperties_universal_d_GetEmbeddedScriptByInstanceIdRequest as GetEmbeddedScriptByInstanceIdRequest,
      devcenterScriptsV1ScriptProperties_universal_d_embedScript as embedScript,
      devcenterScriptsV1ScriptProperties_universal_d_EmbedScriptOptions as EmbedScriptOptions,
      devcenterScriptsV1ScriptProperties_universal_d_getEmbeddedScript as getEmbeddedScript,
      devcenterScriptsV1ScriptProperties_universal_d_GetEmbeddedScriptOptions as GetEmbeddedScriptOptions,
      devcenterScriptsV1ScriptProperties_universal_d_embedScriptByInstanceId as embedScriptByInstanceId,
      devcenterScriptsV1ScriptProperties_universal_d_EmbedScriptByInstanceIdOptions as EmbedScriptByInstanceIdOptions,
      devcenterScriptsV1ScriptProperties_universal_d_getEmbeddedScriptByInstanceId as getEmbeddedScriptByInstanceId,
      devcenterScriptsV1ScriptProperties_universal_d_GetEmbeddedScriptByInstanceIdOptions as GetEmbeddedScriptByInstanceIdOptions,
    };
  }
  
  export { devcenterBiEventsV1SendBiEventResponse_universal_d as biEvents, devcenterCheckoutV1PurchasedItem_universal_d as checkout, devcenterScriptsV1ScriptProperties_universal_d as embeddedScripts };
}
