declare module "interfaces-components-translation-v1-translations-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface GetAdditionalKeysRequest {
      /** components that have been created or have been modified */
      component?: Component;
  }
  /** Component is the main entity of ComponentsService */
  interface Component {
      /** Component Id */
      _id?: string | null;
      /**
       * The version of the component: None (the mutable instance) or Long (versioned immutable). Domain Entity has 0 instead of None for proper indexing
       * @readonly
       */
      version?: string | null;
      /** The app id of the application which this component belongs to */
      appId?: string;
      /** The name of the component */
      name?: string | null;
      /**
       * the type of the component
       * @readonly
       */
      type?: ComponentType;
      /** the data of the component */
      data?: ComponentData;
      /**
       * revision of draft component
       * @readonly
       */
      revision?: string | null;
      externalId?: string | null;
      createdBy?: CreatedBy;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
  }
  /** Component type */
  enum ComponentType {
      NONE = "NONE",
      STUDIO = "STUDIO",
      PLATFORM = "PLATFORM",
      WORKER = "WORKER",
      DASHBOARD = "DASHBOARD",
      WIDGET = "WIDGET",
      PAGE = "PAGE",
      DASHBOARD_PLATFORM = "DASHBOARD_PLATFORM",
      STUDIO_WIDGET = "STUDIO_WIDGET",
      EMBEDDED_SCRIPT = "EMBEDDED_SCRIPT",
      EXTENSION = "EXTENSION",
      SNIPPET_SOLUTION = "SNIPPET_SOLUTION",
      DATA_COMPONENT = "DATA_COMPONENT",
      WEB = "WEB",
      DC_CONFIG = "DC_CONFIG",
      WIDGET_OUT_OF_IFRAME = "WIDGET_OUT_OF_IFRAME",
      PAGE_OUT_OF_IFRAME = "PAGE_OUT_OF_IFRAME",
      STATIC_FILE = "STATIC_FILE",
      APP_CONFIG = "APP_CONFIG",
      MULTIPLE_DASHBOARDS = "MULTIPLE_DASHBOARDS",
      PAYMENTS_GATEWAY = "PAYMENTS_GATEWAY",
      CODE_PACKAGE = "CODE_PACKAGE",
      AUTOMATION_TRIGGER = "AUTOMATION_TRIGGER",
      INVOICES_ACTIONS = "INVOICES_ACTIONS",
      DASHBOARD_APPLICATION = "DASHBOARD_APPLICATION",
      CONTACT_LABELS = "CONTACT_LABELS",
      WIDGET_PLUGIN = "WIDGET_PLUGIN",
      CROSS_SELL = "CROSS_SELL",
      LOCAL_DELIVERY = "LOCAL_DELIVERY",
      PAYMENT_PROVIDER = "PAYMENT_PROVIDER",
      ECOM_MEMBERSHIPS = "ECOM_MEMBERSHIPS",
      ECOM_LINE_ITEMS_ENRICHER = "ECOM_LINE_ITEMS_ENRICHER",
      ECOM_SHIPPING_RATES = "ECOM_SHIPPING_RATES",
      SHIPPING_LABEL_CARRIER = "SHIPPING_LABEL_CARRIER",
      RESTAURANTS_POS = "RESTAURANTS_POS",
      FICTIONAL_SHIPPING_PROVIDER = "FICTIONAL_SHIPPING_PROVIDER",
      ALERT_ENRICHER = "ALERT_ENRICHER",
      DATA_EXTENSIONS = "DATA_EXTENSIONS",
      GENERIC_HOOKS = "GENERIC_HOOKS",
      AUTOMATIONS_ACTION_PROVIDER = "AUTOMATIONS_ACTION_PROVIDER",
      ECOM_CATALOG = "ECOM_CATALOG",
      BACK_OFFICE_EXTENSION_CONTAINER = "BACK_OFFICE_EXTENSION_CONTAINER",
      BACK_OFFICE_EXTENSION = "BACK_OFFICE_EXTENSION",
      AUTOMATIONS_TRIGGER_PROVIDER = "AUTOMATIONS_TRIGGER_PROVIDER",
      IDENTITY_PRE_REGISTRATION = "IDENTITY_PRE_REGISTRATION",
      PREMIUM_PRODUCTS_PATHS = "PREMIUM_PRODUCTS_PATHS",
      ECOM_CUSTOM_SCOPE = "ECOM_CUSTOM_SCOPE",
      GIFT_CARDS_PROVIDER = "GIFT_CARDS_PROVIDER",
      DEALER_EXTERNAL_FILTER_PROVIDER = "DEALER_EXTERNAL_FILTER_PROVIDER",
      ECOM_DROPSHIPPING_PROVIDER = "ECOM_DROPSHIPPING_PROVIDER",
      INVOICES_PROVIDER = "INVOICES_PROVIDER",
      SEO_KEYWORDS_SUGGESTIONS = "SEO_KEYWORDS_SUGGESTIONS",
      ECOM_DISCOUNTS_TRIGGER = "ECOM_DISCOUNTS_TRIGGER",
      MULTILINGUAL_CONTENT_PROVIDER = "MULTILINGUAL_CONTENT_PROVIDER",
      APPLICATION_AUTOMATION = "APPLICATION_AUTOMATION",
      BACK_OFFICE_SIDEBAR_CATEGORY = "BACK_OFFICE_SIDEBAR_CATEGORY",
      BACK_OFFICE_PAGE = "BACK_OFFICE_PAGE",
      ECOM_ADDITIONAL_FEES = "ECOM_ADDITIONAL_FEES",
      PING_USER_NOTIFICATION = "PING_USER_NOTIFICATION",
      ECOM_RECOMMENDATIONS_PROVIDER = "ECOM_RECOMMENDATIONS_PROVIDER",
      BOOKINGS_PRICING_PROVIDER = "BOOKINGS_PRICING_PROVIDER",
      IDENTITY_AUTHENTICATOR = "IDENTITY_AUTHENTICATOR",
      IDENTITY_IDP_CONNECTOR = "IDENTITY_IDP_CONNECTOR",
      ITEMS_SELECTION_PROVIDER = "ITEMS_SELECTION_PROVIDER",
      PORTFOLIO_SYNCED_PROJECTS_PROVIDER = "PORTFOLIO_SYNCED_PROJECTS_PROVIDER",
      COMMUNICATION_CHANNEL = "COMMUNICATION_CHANNEL",
      IDENTITY_POST_LOGIN = "IDENTITY_POST_LOGIN",
      BACK_OFFICE_WIDGET = "BACK_OFFICE_WIDGET",
      SOCIAL_MARKETING_DESIGN = "SOCIAL_MARKETING_DESIGN",
      FORMS_SUBMISSIONS_PROVIDER = "FORMS_SUBMISSIONS_PROVIDER",
      WIX_OFFERING = "WIX_OFFERING",
      DEV_CENTER_TESTING_COMPONENT = "DEV_CENTER_TESTING_COMPONENT",
      COMPONENTS_VALIDATOR_PROVIDER = "COMPONENTS_VALIDATOR_PROVIDER",
      COMPONENTS_TRANSLATIONS_ADDITIONAL_FIELDS_PROVIDER = "COMPONENTS_TRANSLATIONS_ADDITIONAL_FIELDS_PROVIDER",
      FORMS_SCHEMA_PROVIDER = "FORMS_SCHEMA_PROVIDER",
      BOOKINGS_EXTERNAL_CALENDAR_PROVIDER = "BOOKINGS_EXTERNAL_CALENDAR_PROVIDER",
      ECOM_DEFAULT_TAXATION_CATEGORY = "ECOM_DEFAULT_TAXATION_CATEGORY",
      VIEWER_DYNAMIC_SITE_STRUCTURE_PROVIDER = "VIEWER_DYNAMIC_SITE_STRUCTURE_PROVIDER",
      PING_UOU_NOTIFICATION = "PING_UOU_NOTIFICATION",
      HEADLESS_OAUTH = "HEADLESS_OAUTH",
      ECOM_TAX_CALCULATOR_SPI = "ECOM_TAX_CALCULATOR_SPI",
      COMMENTS_MODERATION_PROVIDER = "COMMENTS_MODERATION_PROVIDER",
      GRID_APP_FILES_TRANSFORMER = "GRID_APP_FILES_TRANSFORMER",
      BENEFIT_PROGRAMS_POLICY_PROVIDER = "BENEFIT_PROGRAMS_POLICY_PROVIDER",
      PREMIUM_CUSTOM_CHARGES = "PREMIUM_CUSTOM_CHARGES",
      ECOM_VALIDATIONS = "ECOM_VALIDATIONS",
      COMPONENT_REFERENCE_DATA_PROVIDER = "COMPONENT_REFERENCE_DATA_PROVIDER",
      WIX_REVIEWS_PRODUCT_CATALOG = "WIX_REVIEWS_PRODUCT_CATALOG",
      SOCIAL_MARKETING_DESIGNS_PROVIDER = "SOCIAL_MARKETING_DESIGNS_PROVIDER",
      GOOGLE_BUSINESS_PROFILE_FEATURE_PROVIDER = "GOOGLE_BUSINESS_PROFILE_FEATURE_PROVIDER",
      COMMENTS_FILTER_PROVIDER = "COMMENTS_FILTER_PROVIDER",
      BILLING_TAX_ID_VALIDATOR = "BILLING_TAX_ID_VALIDATOR",
      PING_SETTINGS_GROUP = "PING_SETTINGS_GROUP",
      FORMS_SPAM_SUBMISSIONS_PROVIDER = "FORMS_SPAM_SUBMISSIONS_PROVIDER",
      EDITOR_ADDON = "EDITOR_ADDON",
      EXTERNAL_DATABASE_PROVIDER = "EXTERNAL_DATABASE_PROVIDER",
      ECOM_PAYMENT_SETTINGS = "ECOM_PAYMENT_SETTINGS",
      NOTIFICATION_TOPIC = "NOTIFICATION_TOPIC",
      NOTIFICATION_PREFERENCES_FILTER_PROVIDER = "NOTIFICATION_PREFERENCES_FILTER_PROVIDER",
      BOOKINGS_RESOURCE_TYPES_PROVIDER = "BOOKINGS_RESOURCE_TYPES_PROVIDER",
      PRICING_PLANS_FORM_CONFIGURATION = "PRICING_PLANS_FORM_CONFIGURATION",
      USER_NOTIFICATION = "USER_NOTIFICATION",
      CONTACT_NOTIFICATION = "CONTACT_NOTIFICATION",
      UNIFIED_PAGE = "UNIFIED_PAGE",
      AVAILABILITY_TIME_SLOTS_CONFIGURATION_PROVIDER = "AVAILABILITY_TIME_SLOTS_CONFIGURATION_PROVIDER",
      PROPOSAL_EDITOR_PROVIDER = "PROPOSAL_EDITOR_PROVIDER",
      CUSTOM_TABLE_RESERVATIONS_PROVIDER = "CUSTOM_TABLE_RESERVATIONS_PROVIDER",
      COMMENTS_CONTEXT_PROVIDER = "COMMENTS_CONTEXT_PROVIDER",
      FORMS_SPAM_SUBMISSION_REPORTS_PROVIDER = "FORMS_SPAM_SUBMISSION_REPORTS_PROVIDER",
      AUTOMATIONS_VELO_ACTION_PROVIDER = "AUTOMATIONS_VELO_ACTION_PROVIDER",
      CALENDAR_EVENT_TYPE_PROVIDER = "CALENDAR_EVENT_TYPE_PROVIDER",
      /** Reserved - previously was `SERVICE_AVAILABILITY_POLICY_PROVIDER` */
      RESERVED = "RESERVED",
      SMS_ACTION_MESSAGE = "SMS_ACTION_MESSAGE",
      BOOKING_POLICY_PROVIDER = "BOOKING_POLICY_PROVIDER",
      MULTI_SERVICE_BOOKING_POLICY_PROVIDER = "MULTI_SERVICE_BOOKING_POLICY_PROVIDER",
      AI_ASSISTANT = "AI_ASSISTANT",
      FORMS_SUBMISSIONS_EXTENSION_PROVIDER = "FORMS_SUBMISSIONS_EXTENSION_PROVIDER",
      MULTILINGUAL_TRANSLATION_SCHEMA = "MULTILINGUAL_TRANSLATION_SCHEMA",
      TAX_CALCULATION_PROVIDER = "TAX_CALCULATION_PROVIDER",
      TAX_GROUPS_PROVIDER = "TAX_GROUPS_PROVIDER",
      BACK_OFFICE_MODAL = "BACK_OFFICE_MODAL",
      DEPLOYMENT_PIPELINE_PROVIDER = "DEPLOYMENT_PIPELINE_PROVIDER",
      CUSTOM_ELEMENT_WIDGET = "CUSTOM_ELEMENT_WIDGET",
      BACK_OFFICE_EXTENSION_WIDGET = "BACK_OFFICE_EXTENSION_WIDGET",
      BACK_OFFICE_EXTENSION_MENU_ITEM = "BACK_OFFICE_EXTENSION_MENU_ITEM",
      FORM_TEMPLATE = "FORM_TEMPLATE",
      NOTIFICATION_CONTENT = "NOTIFICATION_CONTENT",
      BROADCAST_LIST = "BROADCAST_LIST",
      PARTNERS_PAYOUTS = "PARTNERS_PAYOUTS",
      WIX_REVIEWS_ENTITY_CATALOG = "WIX_REVIEWS_ENTITY_CATALOG",
      VELO_PUBLISH_PIPELINE_TASK_PROVIDER = "VELO_PUBLISH_PIPELINE_TASK_PROVIDER",
      FUNCTIONS_SHOP_PRICE_PROVIDER = "FUNCTIONS_SHOP_PRICE_PROVIDER",
      FUNCTION = "FUNCTION"
  }
  /** Component data */
  interface ComponentData extends ComponentDataDataOneOf {
      /**
       * Create a widget iframe that users can display on their site. We recommend submitting a proposal before using iframes in your app.
       * Learn More: https://devforum.wix.com/en/article/widget-components
       */
      widgetComponentData?: WidgetComponentData;
      /**
       * Display an iframe as a page on a user's site.
       * Learn More: https://dev.wix.com/docs/build-apps/developer-tools/extensions/iframes/guide-to-page-extensions
       */
      pageComponentData?: PageComponentData;
      /**
       * Load a WOOI directly in the Editor DOM.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/editor-widget-out-of-iframe/widget-out-of-iframe-component-data-object
       * @internal
       */
      widgetOutOfIframeData?: WidgetOutOfIframeComponentData;
      /**
       * Load a POOI directly in the Editor DOM.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/editor-page-out-of-iframe/page-out-of-iframe-component-data-object
       * @internal
       */
      pageOutOfIframeData?: PageOutOfIframeComponentData;
      /**
       * Load a collection of native Editor components directly in the Editor DOM.
       * Learn More: https://bo.wix.com/wix-docs/fe-guild/editor-platform
       * @internal
       */
      platformComponentData?: PlatfromComponentData;
      /**
       * Open an iframe in the Dashboard, or add a link to a page on your platform.
       * Learn More: https://devforum.wix.com/en/article/create-a-dashboard-page-component
       */
      dashboardComponentData?: DashboardComponentData;
      /**
       * Use an invisible iframe to track activity. It’s added to every page on the site (max. 1).
       * Learn More: https://devforum.wix.com/en/article/worker-components
       */
      workerComponentData?: WorkerComponentData;
      /**
       * Use Wix Blocks to create a widget component. Wix Blocks will open in a new tab.
       * Learn More: https://bo.wix.com/wix-docs/rest/drafts/wix-blocks-server---app-builder
       * @internal
       */
      studioComponentData?: StudioComponentData;
      /**
       * A widget component in the Wix Blocks.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/wix-blocks
       * @internal
       */
      studioWidgetComponentData?: StudioWidgetComponentData;
      /**
       * A component that indicates the existence of an importable code package in a Wix Blocks application.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/wix-blocks-code-package
       * @internal
       */
      codePackageComponentData?: CodePackageComponentData;
      /**
       * Load a collection of native components directly in the Business Manager.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/dashboard-platfrom/dashboard-platfrom-component-data-object
       * @internal
       */
      dashboardPlatformComponentData?: DashboardPlatfromComponentData;
      /**
       * Inject a script into a site’s HTML code.
       * Learn More: https://devforum.wix.com/en/article/about-embedded-script-components
       */
      embeddedScriptComponentData?: EmbeddedScriptComponentData;
      /**
       * Display a draggable component in the Editor using an HTML custom element.
       * Learn More: https://devforum.wix.com/kb/en/article/create-a-custom-element
       */
      webComponentData?: WebComponentData;
      /**
       * Extend app with internal Wix extension.
       * @internal
       */
      extensionData?: ExtensionData;
      /** @internal */
      snippetSolutionsData?: SnippetSolutionData;
      /** @internal */
      dataComponent?: DataComponent;
      /** @internal */
      dcConfigData?: DCConfigData;
      /**
       * Serve a file from the user’s site domain.
       * Learn More: https://devforum.wix.com/en/article/serving-staic-files-from-the-installed-sites-domain
       * @internal
       */
      staticFileComponentData?: StaticFileComponentData;
      /** @internal */
      appConfig?: AppConfig;
      /**
       * Create a multi-page dashboard in the Business Manager.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/multiple-dashboards
       * @internal
       */
      multipleDashboardsComponentData?: MultipleDashboardsComponentData;
      /**
       * Payments gateway extension description
       * @internal
       */
      paymentsGateway?: PaymentsGatewayComponentData;
      /**
       * Extend an app with automation capabilities using CRM Automations
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/automation-trigger
       * @internal
       */
      automationTrigger?: AutomationTrigger;
      /**
       * Any restrictions on invoices actions
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/invoices-actions
       * @internal
       */
      invoicesActionsComponentData?: InvoicesActionsComponentData;
      /**
       * Experimental-WIP: Business manager app_config, configures a module and its page components in business manager.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/dashboard-application
       * @internal
       */
      dashboardApplicationData?: DashboardApplicationData;
      /**
       * Contact Labels Components
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/contact-labels
       * @internal
       */
      contactLabels?: ContactLabelsComponentData;
      /**
       * Display a widget that fits into a predefined slot in a Wix app.
       * Learn More: https://dev.wix.com/docs/build-apps/developer-tools/extensions/plugins/about-plugins
       */
      widgetPlugin?: WidgetPluginComponentData;
      /**
       * Cross Sell Integration
       * @internal
       */
      crossSell?: CrossSellConfig;
      /**
       * Experimental-WIP: Local Delivery extension description.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/local-delivery
       * @internal
       */
      localDelivery?: LocalDeliveryComponentData;
      /**
       * WIP: Velo payment provider SPI
       * @internal
       */
      paymentProvider?: PaymentServiceProviderConfig;
      /**
       * Memberships SPI for ECOM platform
       * @internal
       */
      ecomMemberships?: MembershipsSPIConfig;
      /**
       * Line Items Enricher SPI for ECOM platform
       * @internal
       */
      ecomLineItemsEnricher?: LineItemsEnricherConfig;
      /**
       * Displays the options from your Shipping Rates SPI in a site's cart and checkout.
       * Learn More: https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/shipping-rates-integration-spi/introduction
       */
      ecomShippingRates?: ShippingRatesConfig;
      /**
       * Shipping Label Carrier SPI
       * @internal
       */
      shippingLabelCarrier?: ShippingLabelCarrierSpiConfig;
      /**
       * Restaurants POS SPI
       * @internal
       */
      restaurantsPos?: RestaurantsPOSComponentData;
      /**
       * A fictional Shipping SPI that is used by developers to complete SPI training
       * https://github.com/wix-academy/spi-in-scala-path
       * @internal
       */
      fictionalShippingProvider?: ShippingProviderConfig;
      /**
       * Alert Enricher Integration
       * @internal
       */
      alertEnricher?: AlertEnricherSpiConfiguration;
      /** Extend a Wix entity with custom fields for your app */
      dataExtensions?: DataExtensionsComponentData;
      /**
       * A common component type for all Generic Hooks
       * @internal
       */
      genericHooks?: GenericHooksConfig;
      /**
       * WIP: automations action provider
       * @internal
       */
      automationsActionProvider?: ActionProviderSPIConfig;
      /**
       * Catalog SPI for ECOM platform
       * @internal
       */
      ecomCatalog?: CatalogSPIConfig;
      /**
       * Add a space to a Wix Dashboard page that can be extended with a widget or menu item.
       * @internal
       */
      backOfficeExtensionContainer?: BackOfficeExtensionContainer;
      /**
       * Create a widget or menu item that will be rendered within a Wix Dashboard page.
       * Learn More: https://devforum.wix.com/kb/en/article/create-a-wix-dashboard-extension
       * @internal
       */
      backOfficeExtension?: BackOfficeExtension;
      /**
       * WIP: automations trigger provider
       * @internal
       */
      automationsTriggerProvider?: TriggerProviderSPIConfig;
      /**
       * WIP - SPI for execution before identity creation in the new IAM platform
       * @internal
       */
      identityPreRegistration?: PreRegisterConfig;
      /**
       * Premium products upgrades/downgrades
       * @internal
       */
      premiumProductsPaths?: ProductsPathsConfig;
      /**
       * ECOM custom scopes provider - define scopes of catalog items based custom attributes
       * @internal
       */
      ecomCustomScope?: CustomScopeConfig;
      /**
       * Gift Card SPI for Ecom Platform
       * @internal
       */
      giftCardsProvider?: GiftCardProviderConfig;
      /**
       * Dealer External Filter SPI
       * @internal
       */
      dealerExternalFilterProvider?: ExternalFilterProviderConfig;
      /**
       * Recommendations provider SPI
       * @internal
       */
      ecomRecommendationsProvider?: RecommendationsProviderConfig;
      /**
       * Dropshipping Provider SPI for Ecom Platform
       * @internal
       */
      ecomDropshippingProvider?: DropshippingProviderSPIConfig;
      /**
       * Invoices SPI
       * @internal
       */
      invoicesProvider?: InvoicesConfig;
      /**
       * Provide SEO keyword suggestions to site collaborators, report quota usage, and provide a page where users can upgrade their plan.
       * Learn More: https://dev.wix.com/docs/rest/api-reference/marketing/seo-keywords-suggestions-v-1/introduction
       */
      seoKeywordsSuggestions?: SeoKeywordsSuggestionsSPIConfig;
      /**
       * Ecom custom discount trigger SPI provider - define custom triggers to apply discount rules
       * Learn More: https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/custom-discount-triggers-integration-spi/introduction
       * @internal
       */
      ecomDiscountsTrigger?: CustomTriggerConfig;
      /**
       * Multilingual content provider for site translator to read and update translations
       * @internal
       */
      multilingualContentProvider?: ContentProviderConfig;
      /**
       * Application Automation
       * @internal
       */
      applicationAutomation?: ApplicationAutomationComponent;
      /**
       * Experimental-WIP: A back office page category
       * @internal
       */
      backOfficeSidebarCategory?: BackOfficeSidebarCategory;
      /**
       * Configure a page for your app that will be embedded in the Wix Dashboard.
       * Learn More: https://devforum.wix.com/kb/en/article/create-a-dashboard-page-component
       */
      backOfficePage?: BackOfficePage;
      /**
       * Displays the fees from your Additional Fees SPI in a site's cart and checkout.
       * Learn More: https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/additional-fees-integration-spi/introduction
       */
      ecomAdditionalFees?: AdditionalFeesSPIConfig;
      /**
       * Send notifications to your app users
       * @internal
       */
      pingUserNotification?: PingNotificationComponentData;
      /**
       * Bookings Pricing Provider SPI
       * @internal
       */
      bookingsPricingProvider?: BookingsPricingProviderConfig;
      /**
       * Authenticator SPI
       * @internal
       */
      identityAuthenticator?: AuthenticatorConfig;
      /**
       * WIP - SPI for authenticating via external IDP in the new IAM platform
       * @internal
       */
      identityIdpConnector?: IDPConnectionConfig;
      /**
       * Items Selection
       * @internal
       */
      itemsSelectionProvider?: ItemsSelectionProviderConfig;
      /**
       * Portfolio synced projects provider
       * @internal
       */
      portfolioSyncedProjectsProvider?: SyncedProjectsProviderConfig;
      /**
       * Communication Channel
       * @internal
       */
      communicationChannel?: CommunicationChannelConfiguration;
      /**
       * WIP - SPI to run after the login process
       * @internal
       */
      identityPostLogin?: PostLoginConfig;
      /**
       * Create a component that can be easily placed in or opened from a Wix app page.
       * @internal
       */
      backOfficeWidget?: BackOfficeWidget;
      /**
       * Social Marketing Design SPI
       * @internal
       */
      socialMarketingDesign?: SocialMarketingDesignSPIConfig;
      /**
       * Forms Submissions SPI
       * @internal
       */
      formsSubmissionsProvider?: FormSubmissionSpiConfig;
      /**
       * Wix Offering
       * @internal
       */
      wixOffering?: WixOfferingComponentData;
      /**
       * Components translation test component
       * @internal
       */
      devCenterTestingComponent?: DevCenterTestingComponentData;
      /**
       * Components Validator SPI
       * @internal
       */
      componentsValidatorProvider?: ComponentsValidatorConfig;
      /**
       * Components Translations additional fields config
       * @internal
       */
      componentsTranslationsAdditionalFieldsProvider?: ComponentTranslationAdditionalFieldsConfig;
      /**
       * Forms Schema SPI
       * @internal
       */
      formsSchemaProvider?: FormSchemaSpiConfig;
      /**
       * Bookings External Calendar Provider
       * @internal
       */
      bookingsExternalCalendarProvider?: ProviderConfig;
      /**
       * Default Tax Category Config
       * Learn More: https://bo.wix.com/wix-docs/rest/drafts/platform-tax
       * @internal
       */
      ecomDefaultTaxationCategory?: DefaultTaxGroupProviderConfig;
      /**
       * Viewer Dynamic Site Structure Config
       * @internal
       */
      viewerDynamicSiteStructureProvider?: DynamicSiteStructureProviderConfig;
      /**
       * Send notifications to your app users of users
       * @internal
       */
      pingUouNotification?: PingNotificationComponentData;
      /**
       * Holds data for authenticating Headless Applications
       * @internal
       */
      headlessOauth?: HeadlessOAuth;
      /**
       * Tax Calculator Structure Config
       * Learn More: https://bo.wix.com/wix-docs/rest/drafts/platform-tax
       * @internal
       */
      ecomTaxCalculatorSpi?: TaxCalculatorSpiConfig;
      /**
       * Comments Moderation Provider Config
       * @internal
       */
      commentsModerationProvider?: CommentModerationProviderConfig;
      /**
       * GridApp files transformer config
       * @internal
       */
      gridAppFilesTransformer?: GridAppFilesTransformerConfig;
      /**
       * Holds benefit programs policy provider configuration
       * @internal
       */
      benefitProgramsPolicyProvider?: PolicyConfig;
      /**
       * Premium Custom Charges Config
       * Learn More: https://dev.wix.com/docs/rest/api-reference/app-management/apps/custom-charges-spi/introduction
       */
      premiumCustomCharges?: CustomChargesConfig;
      /**
       * Performs Validations for a site's cart and checkout.
       * Learn More: https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/validations-integration-spi/introduction
       */
      ecomValidations?: ValidationsSPIConfig;
      /**
       * Component Reference Data SPI
       * @internal
       */
      componentReferenceDataProvider?: ComponentReferenceDataConfig;
      /**
       * Wix Reviews SPI
       * @internal
       */
      wixReviewsProductCatalog?: ReviewsProductCatalogProviderConfig;
      /**
       * Promote Social Marketing Designs Provider Configuration
       * @internal
       */
      socialMarketingDesignsProvider?: SocialMarketingDesignsProviderConfig;
      /**
       * Promote Google Business Profile Provider Configuration
       * @internal
       */
      googleBusinessProfileFeatureProvider?: GbpFeatureConfig;
      /**
       * Comments Filter Provider Config
       * @internal
       */
      commentsFilterProvider?: CommentFilterProviderConfig;
      /**
       * Tax ID Validator SPI Config
       * @internal
       */
      billingTaxIdValidator?: TaxIdValidatorConfig;
      /**
       * Ping Settings Group Data
       * @internal
       */
      pingSettingsGroup?: PingSettingsGroupComponentData;
      /**
       * Forms Spam Submissions SPI
       * @internal
       */
      formsSpamSubmissionsProvider?: FormSpamSubmissionSpiConfig;
      /**
       * Editor Addon component
       * @internal
       */
      editorAddon?: EditorAddon;
      /**
       * External Database component
       * @internal
       */
      externalDatabaseProvider?: ExternalDatabaseSpiConfig;
      /**
       * Ecom Payment Settings SPI Config
       * Learn More: https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/payment-settings-integration-spi/introduction
       */
      ecomPaymentSettings?: PaymentSettingsSPIConfig;
      /**
       * Group multiple notifications into one preference toggle.
       * Learn More: https://dev.wix.com/docs/build-apps/build-your-app/user-notifications/add-notification-topics
       * @internal
       */
      notificationTopic?: NotificationTopic;
      /**
       * Notification Preference SPI
       * @internal
       */
      notificationPreferencesFilterProvider?: NotificationPreferencesFilterConfig;
      /**
       * Bookings Resource Types provider SPI config
       * @internal
       */
      bookingsResourceTypesProvider?: BookingsResourceTypesProviderConfig;
      /**
       * Pricing Plans form configuration
       * @internal
       */
      pricingPlansFormConfiguration?: PricingPlansFormConfiguration;
      /**
       * Create a notification to alert your app users about important updates and events.
       * Learn More: https://dev.wix.com/docs/build-apps/build-your-app/user-notifications/app-notifications
       * @internal
       */
      userNotification?: UserNotification;
      /**
       * Contact Notification
       * @internal
       */
      contactNotification?: ContactNotification;
      /**
       * Add a site page that displays selected widgets.
       * Learn More: https://dev.wix.com/docs/build-apps/developer-tools/extensions/create-a-site-page
       * @internal
       */
      unifiedPage?: UnifiedPage;
      /**
       * Availability Time Slots Configuration Provider SPI
       * @internal
       */
      availabilityTimeSlotsConfigurationProvider?: AvailabilityTimeSlotsProviderConfig;
      /**
       * Proposal Editor Provider SPI config
       * @internal
       */
      proposalEditorProvider?: ProposalEditorProviderConfig;
      /**
       * Custom Table Reservations Provider SPI config
       * @internal
       */
      customTableReservationsProvider?: CustomReservationsApprovalConfig;
      /**
       * Comments Context provider
       * @internal
       */
      commentsContextProvider?: CommentsContextProviderConfig;
      /**
       * Forms Spam Submission Reports SPI
       * @internal
       */
      formsSpamSubmissionReportsProvider?: FormSpamSubmissionReportSpiConfig;
      /**
       * Automation Velo Action Spi Provider
       * @internal
       */
      automationsVeloActionProvider?: VeloActionConfig;
      /**
       * Calendar Event Type Provider
       * @internal
       */
      calendarEventTypeProvider?: EventTypeProviderConfig;
      /**
       * Reserved - previously was `service_availability_policy_provider`
       * @internal
       */
      reserved?: ServiceAvailabilityPolicyProviderConfig;
      /**
       * Create an SMS message for a pre-installed automation, in order to translate it.
       * @internal
       */
      smsActionMessage?: SmsActionMessage;
      /**
       * Booking Policy Provider SPI
       * @internal
       */
      bookingPolicyProvider?: BookingPolicyProviderConfig;
      /**
       * Multi Service Booking Policy Provider SPI
       * @internal
       */
      multiServiceBookingPolicyProvider?: MultiServiceBookingPolicyProviderConfig;
      /**
       * Forms Submissions Extension SPI
       * @internal
       */
      formsSubmissionsExtensionProvider?: FormSubmissionSpiExtensionConfig;
      /**
       * AI Assistant SPI
       * @internal
       */
      aiAssistant?: AssistantSpiConfig;
      /**
       * Multilingual translation schema
       * @internal
       */
      multilingualTranslationSchema?: MultilingualTranslationSchema;
      /**
       * Tax Groups Provider SPI
       * @internal
       */
      taxGroupsProvider?: TaxGroupsProviderConfig;
      /**
       * Tax Calculation Provider SPI
       * @internal
       */
      taxCalculationProvider?: TaxCalculationConfig;
      /** Create a reusable modal that can be utilized across multiple pages within your app and in other applications. */
      backOfficeModal?: BackOfficeModal;
      /**
       * Deployment Pipeline Provider SPI
       * @internal
       */
      deploymentPipelineProvider?: DeploymentPipelineProviderConfig;
      /**
       * Display a draggable widget on a site using a self-hosted custom element.
       * Learn More: https://dev.wix.com/docs/build-apps/developer-tools/extensions/build-a-site-widget-using-a-self-hosted-custom-element
       * @internal
       */
      customElementWidget?: CustomElementWidget;
      /**
       * Create a widget that will be rendered within a Wix Dashboard page.
       * Learn More: https://devforum.wix.com/kb/en/article/create-a-wix-dashboard-extension
       * @internal
       */
      backOfficeExtensionWidget?: BackOfficeExtensionWidget;
      /**
       * Create a menu item that will be rendered within a Wix Dashboard page.
       * Learn More: https://devforum.wix.com/kb/en/article/create-a-wix-dashboard-extension
       * @internal
       */
      backOfficeExtensionMenuItem?: BackOfficeExtensionMenuItem;
      /**
       * Form Template
       * @internal
       */
      formTemplate?: FormTemplate;
      /**
       * Notification Content
       * @internal
       */
      notificationContent?: NotificationContent;
      /**
       * Broadcast List
       * @internal
       */
      broadcastList?: BroadcastList;
      /**
       * Partners Payouts
       * @internal
       */
      partnersPayouts?: PayoutsProviderConfig;
      /**
       * Wix Reviews Entity Catalog Provider SPI
       * @internal
       */
      wixReviewsEntityCatalog?: ReviewsEntityCatalogProviderConfig;
      /**
       * Velo Publish Pipeline Task Provider SPI
       * @internal
       */
      veloPublishPipelineTaskProvider?: VeloPublishPipelineTaskProviderConfig;
      /**
       * Function shop POC SPI
       * @internal
       */
      functionsShopPriceProvider?: FunctionsShopPriceSpiConfig;
      /**
       * Function
       * @internal
       */
      function?: Function;
  }
  /** @oneof */
  interface ComponentDataDataOneOf {
      /**
       * Create a widget iframe that users can display on their site. We recommend submitting a proposal before using iframes in your app.
       * Learn More: https://devforum.wix.com/en/article/widget-components
       */
      widgetComponentData?: WidgetComponentData;
      /**
       * Display an iframe as a page on a user's site.
       * Learn More: https://dev.wix.com/docs/build-apps/developer-tools/extensions/iframes/guide-to-page-extensions
       */
      pageComponentData?: PageComponentData;
      /**
       * Load a WOOI directly in the Editor DOM.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/editor-widget-out-of-iframe/widget-out-of-iframe-component-data-object
       * @internal
       */
      widgetOutOfIframeData?: WidgetOutOfIframeComponentData;
      /**
       * Load a POOI directly in the Editor DOM.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/editor-page-out-of-iframe/page-out-of-iframe-component-data-object
       * @internal
       */
      pageOutOfIframeData?: PageOutOfIframeComponentData;
      /**
       * Load a collection of native Editor components directly in the Editor DOM.
       * Learn More: https://bo.wix.com/wix-docs/fe-guild/editor-platform
       * @internal
       */
      platformComponentData?: PlatfromComponentData;
      /**
       * Open an iframe in the Dashboard, or add a link to a page on your platform.
       * Learn More: https://devforum.wix.com/en/article/create-a-dashboard-page-component
       */
      dashboardComponentData?: DashboardComponentData;
      /**
       * Use an invisible iframe to track activity. It’s added to every page on the site (max. 1).
       * Learn More: https://devforum.wix.com/en/article/worker-components
       */
      workerComponentData?: WorkerComponentData;
      /**
       * Use Wix Blocks to create a widget component. Wix Blocks will open in a new tab.
       * Learn More: https://bo.wix.com/wix-docs/rest/drafts/wix-blocks-server---app-builder
       * @internal
       */
      studioComponentData?: StudioComponentData;
      /**
       * A widget component in the Wix Blocks.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/wix-blocks
       * @internal
       */
      studioWidgetComponentData?: StudioWidgetComponentData;
      /**
       * A component that indicates the existence of an importable code package in a Wix Blocks application.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/wix-blocks-code-package
       * @internal
       */
      codePackageComponentData?: CodePackageComponentData;
      /**
       * Load a collection of native components directly in the Business Manager.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/dashboard-platfrom/dashboard-platfrom-component-data-object
       * @internal
       */
      dashboardPlatformComponentData?: DashboardPlatfromComponentData;
      /**
       * Inject a script into a site’s HTML code.
       * Learn More: https://devforum.wix.com/en/article/about-embedded-script-components
       */
      embeddedScriptComponentData?: EmbeddedScriptComponentData;
      /**
       * Display a draggable component in the Editor using an HTML custom element.
       * Learn More: https://devforum.wix.com/kb/en/article/create-a-custom-element
       */
      webComponentData?: WebComponentData;
      /**
       * Extend app with internal Wix extension.
       * @internal
       */
      extensionData?: ExtensionData;
      /** @internal */
      snippetSolutionsData?: SnippetSolutionData;
      /** @internal */
      dataComponent?: DataComponent;
      /** @internal */
      dcConfigData?: DCConfigData;
      /**
       * Serve a file from the user’s site domain.
       * Learn More: https://devforum.wix.com/en/article/serving-staic-files-from-the-installed-sites-domain
       * @internal
       */
      staticFileComponentData?: StaticFileComponentData;
      /** @internal */
      appConfig?: AppConfig;
      /**
       * Create a multi-page dashboard in the Business Manager.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/multiple-dashboards
       * @internal
       */
      multipleDashboardsComponentData?: MultipleDashboardsComponentData;
      /**
       * Payments gateway extension description
       * @internal
       */
      paymentsGateway?: PaymentsGatewayComponentData;
      /**
       * Extend an app with automation capabilities using CRM Automations
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/automation-trigger
       * @internal
       */
      automationTrigger?: AutomationTrigger;
      /**
       * Any restrictions on invoices actions
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/invoices-actions
       * @internal
       */
      invoicesActionsComponentData?: InvoicesActionsComponentData;
      /**
       * Experimental-WIP: Business manager app_config, configures a module and its page components in business manager.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/dashboard-application
       * @internal
       */
      dashboardApplicationData?: DashboardApplicationData;
      /**
       * Contact Labels Components
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/contact-labels
       * @internal
       */
      contactLabels?: ContactLabelsComponentData;
      /**
       * Display a widget that fits into a predefined slot in a Wix app.
       * Learn More: https://dev.wix.com/docs/build-apps/developer-tools/extensions/plugins/about-plugins
       */
      widgetPlugin?: WidgetPluginComponentData;
      /**
       * Cross Sell Integration
       * @internal
       */
      crossSell?: CrossSellConfig;
      /**
       * Experimental-WIP: Local Delivery extension description.
       * Learn More: https://bo.wix.com/wix-docs/rnd/dev-center/components-catalog/local-delivery
       * @internal
       */
      localDelivery?: LocalDeliveryComponentData;
      /**
       * WIP: Velo payment provider SPI
       * @internal
       */
      paymentProvider?: PaymentServiceProviderConfig;
      /**
       * Memberships SPI for ECOM platform
       * @internal
       */
      ecomMemberships?: MembershipsSPIConfig;
      /**
       * Line Items Enricher SPI for ECOM platform
       * @internal
       */
      ecomLineItemsEnricher?: LineItemsEnricherConfig;
      /**
       * Displays the options from your Shipping Rates SPI in a site's cart and checkout.
       * Learn More: https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/shipping-rates-integration-spi/introduction
       */
      ecomShippingRates?: ShippingRatesConfig;
      /**
       * Shipping Label Carrier SPI
       * @internal
       */
      shippingLabelCarrier?: ShippingLabelCarrierSpiConfig;
      /**
       * Restaurants POS SPI
       * @internal
       */
      restaurantsPos?: RestaurantsPOSComponentData;
      /**
       * A fictional Shipping SPI that is used by developers to complete SPI training
       * https://github.com/wix-academy/spi-in-scala-path
       * @internal
       */
      fictionalShippingProvider?: ShippingProviderConfig;
      /**
       * Alert Enricher Integration
       * @internal
       */
      alertEnricher?: AlertEnricherSpiConfiguration;
      /** Extend a Wix entity with custom fields for your app */
      dataExtensions?: DataExtensionsComponentData;
      /**
       * A common component type for all Generic Hooks
       * @internal
       */
      genericHooks?: GenericHooksConfig;
      /**
       * WIP: automations action provider
       * @internal
       */
      automationsActionProvider?: ActionProviderSPIConfig;
      /**
       * Catalog SPI for ECOM platform
       * @internal
       */
      ecomCatalog?: CatalogSPIConfig;
      /**
       * Add a space to a Wix Dashboard page that can be extended with a widget or menu item.
       * @internal
       */
      backOfficeExtensionContainer?: BackOfficeExtensionContainer;
      /**
       * Create a widget or menu item that will be rendered within a Wix Dashboard page.
       * Learn More: https://devforum.wix.com/kb/en/article/create-a-wix-dashboard-extension
       * @internal
       */
      backOfficeExtension?: BackOfficeExtension;
      /**
       * WIP: automations trigger provider
       * @internal
       */
      automationsTriggerProvider?: TriggerProviderSPIConfig;
      /**
       * WIP - SPI for execution before identity creation in the new IAM platform
       * @internal
       */
      identityPreRegistration?: PreRegisterConfig;
      /**
       * Premium products upgrades/downgrades
       * @internal
       */
      premiumProductsPaths?: ProductsPathsConfig;
      /**
       * ECOM custom scopes provider - define scopes of catalog items based custom attributes
       * @internal
       */
      ecomCustomScope?: CustomScopeConfig;
      /**
       * Gift Card SPI for Ecom Platform
       * @internal
       */
      giftCardsProvider?: GiftCardProviderConfig;
      /**
       * Dealer External Filter SPI
       * @internal
       */
      dealerExternalFilterProvider?: ExternalFilterProviderConfig;
      /**
       * Recommendations provider SPI
       * @internal
       */
      ecomRecommendationsProvider?: RecommendationsProviderConfig;
      /**
       * Dropshipping Provider SPI for Ecom Platform
       * @internal
       */
      ecomDropshippingProvider?: DropshippingProviderSPIConfig;
      /**
       * Invoices SPI
       * @internal
       */
      invoicesProvider?: InvoicesConfig;
      /**
       * Provide SEO keyword suggestions to site collaborators, report quota usage, and provide a page where users can upgrade their plan.
       * Learn More: https://dev.wix.com/docs/rest/api-reference/marketing/seo-keywords-suggestions-v-1/introduction
       */
      seoKeywordsSuggestions?: SeoKeywordsSuggestionsSPIConfig;
      /**
       * Ecom custom discount trigger SPI provider - define custom triggers to apply discount rules
       * Learn More: https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/custom-discount-triggers-integration-spi/introduction
       * @internal
       */
      ecomDiscountsTrigger?: CustomTriggerConfig;
      /**
       * Multilingual content provider for site translator to read and update translations
       * @internal
       */
      multilingualContentProvider?: ContentProviderConfig;
      /**
       * Application Automation
       * @internal
       */
      applicationAutomation?: ApplicationAutomationComponent;
      /**
       * Experimental-WIP: A back office page category
       * @internal
       */
      backOfficeSidebarCategory?: BackOfficeSidebarCategory;
      /**
       * Configure a page for your app that will be embedded in the Wix Dashboard.
       * Learn More: https://devforum.wix.com/kb/en/article/create-a-dashboard-page-component
       */
      backOfficePage?: BackOfficePage;
      /**
       * Displays the fees from your Additional Fees SPI in a site's cart and checkout.
       * Learn More: https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/additional-fees-integration-spi/introduction
       */
      ecomAdditionalFees?: AdditionalFeesSPIConfig;
      /**
       * Send notifications to your app users
       * @internal
       */
      pingUserNotification?: PingNotificationComponentData;
      /**
       * Bookings Pricing Provider SPI
       * @internal
       */
      bookingsPricingProvider?: BookingsPricingProviderConfig;
      /**
       * Authenticator SPI
       * @internal
       */
      identityAuthenticator?: AuthenticatorConfig;
      /**
       * WIP - SPI for authenticating via external IDP in the new IAM platform
       * @internal
       */
      identityIdpConnector?: IDPConnectionConfig;
      /**
       * Items Selection
       * @internal
       */
      itemsSelectionProvider?: ItemsSelectionProviderConfig;
      /**
       * Portfolio synced projects provider
       * @internal
       */
      portfolioSyncedProjectsProvider?: SyncedProjectsProviderConfig;
      /**
       * Communication Channel
       * @internal
       */
      communicationChannel?: CommunicationChannelConfiguration;
      /**
       * WIP - SPI to run after the login process
       * @internal
       */
      identityPostLogin?: PostLoginConfig;
      /**
       * Create a component that can be easily placed in or opened from a Wix app page.
       * @internal
       */
      backOfficeWidget?: BackOfficeWidget;
      /**
       * Social Marketing Design SPI
       * @internal
       */
      socialMarketingDesign?: SocialMarketingDesignSPIConfig;
      /**
       * Forms Submissions SPI
       * @internal
       */
      formsSubmissionsProvider?: FormSubmissionSpiConfig;
      /**
       * Wix Offering
       * @internal
       */
      wixOffering?: WixOfferingComponentData;
      /**
       * Components translation test component
       * @internal
       */
      devCenterTestingComponent?: DevCenterTestingComponentData;
      /**
       * Components Validator SPI
       * @internal
       */
      componentsValidatorProvider?: ComponentsValidatorConfig;
      /**
       * Components Translations additional fields config
       * @internal
       */
      componentsTranslationsAdditionalFieldsProvider?: ComponentTranslationAdditionalFieldsConfig;
      /**
       * Forms Schema SPI
       * @internal
       */
      formsSchemaProvider?: FormSchemaSpiConfig;
      /**
       * Bookings External Calendar Provider
       * @internal
       */
      bookingsExternalCalendarProvider?: ProviderConfig;
      /**
       * Default Tax Category Config
       * Learn More: https://bo.wix.com/wix-docs/rest/drafts/platform-tax
       * @internal
       */
      ecomDefaultTaxationCategory?: DefaultTaxGroupProviderConfig;
      /**
       * Viewer Dynamic Site Structure Config
       * @internal
       */
      viewerDynamicSiteStructureProvider?: DynamicSiteStructureProviderConfig;
      /**
       * Send notifications to your app users of users
       * @internal
       */
      pingUouNotification?: PingNotificationComponentData;
      /**
       * Holds data for authenticating Headless Applications
       * @internal
       */
      headlessOauth?: HeadlessOAuth;
      /**
       * Tax Calculator Structure Config
       * Learn More: https://bo.wix.com/wix-docs/rest/drafts/platform-tax
       * @internal
       */
      ecomTaxCalculatorSpi?: TaxCalculatorSpiConfig;
      /**
       * Comments Moderation Provider Config
       * @internal
       */
      commentsModerationProvider?: CommentModerationProviderConfig;
      /**
       * GridApp files transformer config
       * @internal
       */
      gridAppFilesTransformer?: GridAppFilesTransformerConfig;
      /**
       * Holds benefit programs policy provider configuration
       * @internal
       */
      benefitProgramsPolicyProvider?: PolicyConfig;
      /**
       * Premium Custom Charges Config
       * Learn More: https://dev.wix.com/docs/rest/api-reference/app-management/apps/custom-charges-spi/introduction
       */
      premiumCustomCharges?: CustomChargesConfig;
      /**
       * Performs Validations for a site's cart and checkout.
       * Learn More: https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/validations-integration-spi/introduction
       */
      ecomValidations?: ValidationsSPIConfig;
      /**
       * Component Reference Data SPI
       * @internal
       */
      componentReferenceDataProvider?: ComponentReferenceDataConfig;
      /**
       * Wix Reviews SPI
       * @internal
       */
      wixReviewsProductCatalog?: ReviewsProductCatalogProviderConfig;
      /**
       * Promote Social Marketing Designs Provider Configuration
       * @internal
       */
      socialMarketingDesignsProvider?: SocialMarketingDesignsProviderConfig;
      /**
       * Promote Google Business Profile Provider Configuration
       * @internal
       */
      googleBusinessProfileFeatureProvider?: GbpFeatureConfig;
      /**
       * Comments Filter Provider Config
       * @internal
       */
      commentsFilterProvider?: CommentFilterProviderConfig;
      /**
       * Tax ID Validator SPI Config
       * @internal
       */
      billingTaxIdValidator?: TaxIdValidatorConfig;
      /**
       * Ping Settings Group Data
       * @internal
       */
      pingSettingsGroup?: PingSettingsGroupComponentData;
      /**
       * Forms Spam Submissions SPI
       * @internal
       */
      formsSpamSubmissionsProvider?: FormSpamSubmissionSpiConfig;
      /**
       * Editor Addon component
       * @internal
       */
      editorAddon?: EditorAddon;
      /**
       * External Database component
       * @internal
       */
      externalDatabaseProvider?: ExternalDatabaseSpiConfig;
      /**
       * Ecom Payment Settings SPI Config
       * Learn More: https://dev.wix.com/docs/rest/api-reference/wix-e-commerce/payment-settings-integration-spi/introduction
       */
      ecomPaymentSettings?: PaymentSettingsSPIConfig;
      /**
       * Group multiple notifications into one preference toggle.
       * Learn More: https://dev.wix.com/docs/build-apps/build-your-app/user-notifications/add-notification-topics
       * @internal
       */
      notificationTopic?: NotificationTopic;
      /**
       * Notification Preference SPI
       * @internal
       */
      notificationPreferencesFilterProvider?: NotificationPreferencesFilterConfig;
      /**
       * Bookings Resource Types provider SPI config
       * @internal
       */
      bookingsResourceTypesProvider?: BookingsResourceTypesProviderConfig;
      /**
       * Pricing Plans form configuration
       * @internal
       */
      pricingPlansFormConfiguration?: PricingPlansFormConfiguration;
      /**
       * Create a notification to alert your app users about important updates and events.
       * Learn More: https://dev.wix.com/docs/build-apps/build-your-app/user-notifications/app-notifications
       * @internal
       */
      userNotification?: UserNotification;
      /**
       * Contact Notification
       * @internal
       */
      contactNotification?: ContactNotification;
      /**
       * Add a site page that displays selected widgets.
       * Learn More: https://dev.wix.com/docs/build-apps/developer-tools/extensions/create-a-site-page
       * @internal
       */
      unifiedPage?: UnifiedPage;
      /**
       * Availability Time Slots Configuration Provider SPI
       * @internal
       */
      availabilityTimeSlotsConfigurationProvider?: AvailabilityTimeSlotsProviderConfig;
      /**
       * Proposal Editor Provider SPI config
       * @internal
       */
      proposalEditorProvider?: ProposalEditorProviderConfig;
      /**
       * Custom Table Reservations Provider SPI config
       * @internal
       */
      customTableReservationsProvider?: CustomReservationsApprovalConfig;
      /**
       * Comments Context provider
       * @internal
       */
      commentsContextProvider?: CommentsContextProviderConfig;
      /**
       * Forms Spam Submission Reports SPI
       * @internal
       */
      formsSpamSubmissionReportsProvider?: FormSpamSubmissionReportSpiConfig;
      /**
       * Automation Velo Action Spi Provider
       * @internal
       */
      automationsVeloActionProvider?: VeloActionConfig;
      /**
       * Calendar Event Type Provider
       * @internal
       */
      calendarEventTypeProvider?: EventTypeProviderConfig;
      /**
       * Reserved - previously was `service_availability_policy_provider`
       * @internal
       */
      reserved?: ServiceAvailabilityPolicyProviderConfig;
      /**
       * Create an SMS message for a pre-installed automation, in order to translate it.
       * @internal
       */
      smsActionMessage?: SmsActionMessage;
      /**
       * Booking Policy Provider SPI
       * @internal
       */
      bookingPolicyProvider?: BookingPolicyProviderConfig;
      /**
       * Multi Service Booking Policy Provider SPI
       * @internal
       */
      multiServiceBookingPolicyProvider?: MultiServiceBookingPolicyProviderConfig;
      /**
       * Forms Submissions Extension SPI
       * @internal
       */
      formsSubmissionsExtensionProvider?: FormSubmissionSpiExtensionConfig;
      /**
       * AI Assistant SPI
       * @internal
       */
      aiAssistant?: AssistantSpiConfig;
      /**
       * Multilingual translation schema
       * @internal
       */
      multilingualTranslationSchema?: MultilingualTranslationSchema;
      /**
       * Tax Groups Provider SPI
       * @internal
       */
      taxGroupsProvider?: TaxGroupsProviderConfig;
      /**
       * Tax Calculation Provider SPI
       * @internal
       */
      taxCalculationProvider?: TaxCalculationConfig;
      /** Create a reusable modal that can be utilized across multiple pages within your app and in other applications. */
      backOfficeModal?: BackOfficeModal;
      /**
       * Deployment Pipeline Provider SPI
       * @internal
       */
      deploymentPipelineProvider?: DeploymentPipelineProviderConfig;
      /**
       * Display a draggable widget on a site using a self-hosted custom element.
       * Learn More: https://dev.wix.com/docs/build-apps/developer-tools/extensions/build-a-site-widget-using-a-self-hosted-custom-element
       * @internal
       */
      customElementWidget?: CustomElementWidget;
      /**
       * Create a widget that will be rendered within a Wix Dashboard page.
       * Learn More: https://devforum.wix.com/kb/en/article/create-a-wix-dashboard-extension
       * @internal
       */
      backOfficeExtensionWidget?: BackOfficeExtensionWidget;
      /**
       * Create a menu item that will be rendered within a Wix Dashboard page.
       * Learn More: https://devforum.wix.com/kb/en/article/create-a-wix-dashboard-extension
       * @internal
       */
      backOfficeExtensionMenuItem?: BackOfficeExtensionMenuItem;
      /**
       * Form Template
       * @internal
       */
      formTemplate?: FormTemplate;
      /**
       * Notification Content
       * @internal
       */
      notificationContent?: NotificationContent;
      /**
       * Broadcast List
       * @internal
       */
      broadcastList?: BroadcastList;
      /**
       * Partners Payouts
       * @internal
       */
      partnersPayouts?: PayoutsProviderConfig;
      /**
       * Wix Reviews Entity Catalog Provider SPI
       * @internal
       */
      wixReviewsEntityCatalog?: ReviewsEntityCatalogProviderConfig;
      /**
       * Velo Publish Pipeline Task Provider SPI
       * @internal
       */
      veloPublishPipelineTaskProvider?: VeloPublishPipelineTaskProviderConfig;
      /**
       * Function shop POC SPI
       * @internal
       */
      functionsShopPriceProvider?: FunctionsShopPriceSpiConfig;
      /**
       * Function
       * @internal
       */
      function?: Function;
  }
  /** An iframe to be displayed on the user’s site */
  interface WidgetComponentData {
      /** Allow users to resize and move the widget, or pin it to a specific position on all pages of the site. */
      fixedPositionOption?: FixedPositionOptions;
      /** Widget will automatically be stretched to this width after installing it */
      widgetWidthType?: WidgetWidthType;
      /** Widget width size */
      width?: number | null;
      /** Widget width height */
      height?: number | null;
      /** A public link to the widget endpoint */
      widgetEndpointUrl?: string | null;
      /** A public link to the mobile endpoint */
      widgetMobileEndpointUrl?: string | null;
      /** A public link to the settings endpoint */
      settingsEndpointUrl?: string | null;
      /** A public link to the SEO endpoint */
      seoEndpointUrl?: string | null;
      /** Product display data for this component */
      widgetDisplay?: WidgetDisplay;
      /** When true, this is the default component */
      default?: boolean;
      /** When this is turned on, this page will be added to the site when installing the app, regardless of whether it's the default component or not */
      essential?: boolean;
      /** Published state for this widget */
      published?: boolean;
      /** When true, allow this widget to be added only once */
      addOnlyOnce?: boolean;
      /**
       * This ID is used to identify your widget endpoint in a Wix site. You can use this ID when using methods of the Wix SDK
       * @readonly
       */
      tpaWidgetId?: string;
      /** Where this should be rendered */
      position?: Position;
      /** Article id in settings panel */
      helpId?: string | null;
      /** Default Mobile Height */
      defaultMobileHeight?: number | null;
      /** Min Mobile Height */
      minMobileHeight?: number | null;
      /** Mobile Settings Enabled */
      mobileSettingsEnabled?: boolean;
      /** Mobile article id in settings panel */
      mobileHelpId?: string | null;
      /** Editor setting version. optional values: 1 (old - deprecated) or 2 (new). default value is 2 */
      settingsVersion?: number | null;
      /** If setting version is 1, this will be the public link to the settings endpoint */
      settingsEndpointUrlV1?: string | null;
      /** A public link to the settings endpoint on ADI editor */
      onBoardingSettingsEndpointUrl?: string | null;
      /** The sub pages list for this component to be rendered in */
      subPages?: SubPage[];
      /** If this component should be stretched in relation to a form factor (desktop, tablet, mobile) */
      isStretched?: IsStretched;
      /** Any margins this page should have in relation to a form factor (desktop, tablet, mobile) */
      margins?: Margins;
      /** Any docking this page (horizontal / vertical) should have in relation to a form factor (desktop, tablet, mobile) */
      docking?: Docking;
      /** The height of this page in relation to a form factor (desktop, tablet, mobile) */
      heightBreakPoints?: Height;
      /** The width of this page in relation to a form factor (desktop, tablet, mobile) */
      widthBreakPoints?: ApiWidth;
      /** Keep default and let users stretch widget to full width (GFPP) */
      addStretchButton?: boolean;
      /** toggle to mark whether the editor should revoke an app that contains this component. */
      excludeFromAutoRevoke?: boolean;
      /** should be <%=serviceUrl('your_artifact_id', '<resource-path>')%>, this field will later be used to trasform the settings url field in both the component and the **derived widget** */
      settingsEndpointUrlTemplate?: string | null;
      /** should be <%=serviceUrl('your_artifact_id', '<resource-path>')%>, this field will later be used to trasform the settings url field in both the component and the **derived widget** */
      settingsEndpointUrlV1Template?: string | null;
  }
  /** Allow users to resize and move the widget, or pin it to a specific position on all pages of the site. */
  interface FixedPositionOptions {
      /** Vertical widget position in the browser window */
      widgetVertical?: WidgetVertical;
      /** Horizontal widget position in the browser window */
      widgetHorizontal?: WidgetHorizontal;
  }
  /** Vertical widget position in the browser window */
  enum WidgetVertical {
      NONE_VERTICAL = "NONE_VERTICAL",
      TOP = "TOP",
      CENTER_VERTICAL = "CENTER_VERTICAL",
      BOTTOM = "BOTTOM"
  }
  /** Horizontal widget position in the browser window */
  enum WidgetHorizontal {
      NONE_HORIZONTAL = "NONE_HORIZONTAL",
      LEFT = "LEFT",
      CENTER_HORIZONTAL = "CENTER_HORIZONTAL",
      RIGHT = "RIGHT"
  }
  /** Widget will automatically be stretched to this width after installing it */
  enum WidgetWidthType {
      NONE_TYPE = "NONE_TYPE",
      /** A custom width for the widget */
      CUSTOM = "CUSTOM",
      /** Full width of the browser window */
      FULL = "FULL"
  }
  interface WidgetDisplay {
      name?: string;
      /** short description about the widget */
      shortDescription?: string | null;
      /** images showing off how the widget looks */
      images?: string[];
      /** optional, if no order exist for all components, will be decided by order in array (non-deterministic) */
      order?: number | null;
      price?: number | null;
      variationId?: string | null;
  }
  interface Position {
      region?: Region;
  }
  enum Region {
      no_region = "no_region",
      header = "header",
      pageContainer = "pageContainer",
      footer = "footer"
  }
  interface SubPage {
      /** The path of the subpage */
      key?: string;
      /** If it's sub entities are enumerable for querying (for example, a search endpoint is not enumerable) */
      enumerable?: boolean;
      /** Should hide inner routes of this sub page from floating dynamic pages navigation bar */
      hideFromFloatingNavBar?: boolean;
      /** Should hide this sub page from selections in link panel */
      hideFromLinkPanel?: boolean;
  }
  interface IsStretched {
      desktop?: boolean | null;
      tablet?: boolean | null;
      mobile?: boolean | null;
  }
  interface Margins {
      desktop?: DisplayProperties;
      tablet?: DisplayProperties;
      mobile?: DisplayProperties;
  }
  interface DisplayProperties {
      top?: DisplayValue;
      right?: DisplayValue;
      bottom?: DisplayValue;
      left?: DisplayValue;
  }
  interface DisplayValue {
      type?: UnitType;
      value?: number | null;
  }
  enum UnitType {
      NO_UNIT = "NO_UNIT",
      AUTO = "AUTO",
      PX = "PX",
      VH = "VH",
      VW = "VW",
      PERCENTAGE = "PERCENTAGE"
  }
  interface Docking {
      desktop?: DockingProperties;
      tablet?: DockingProperties;
      mobile?: DockingProperties;
  }
  interface DockingProperties {
      horizontal?: HorizontalDocking;
      vertical?: VerticalDocking;
  }
  enum HorizontalDocking {
      NO_HDOCKING = "NO_HDOCKING",
      LEFT_DOCKING = "LEFT_DOCKING",
      HCENTER = "HCENTER",
      RIGHT_DOCKING = "RIGHT_DOCKING"
  }
  enum VerticalDocking {
      NO_VDOCKING = "NO_VDOCKING",
      TOP_DOCKING = "TOP_DOCKING",
      VCENTER = "VCENTER",
      BOTTOM_DOCKING = "BOTTOM_DOCKING"
  }
  interface Height {
      desktop?: DisplayValue;
      tablet?: DisplayValue;
      mobile?: DisplayValue;
  }
  interface ApiWidth {
      desktop?: DisplayValue;
      tablet?: DisplayValue;
      mobile?: DisplayValue;
  }
  /** An iframe to be displayed as a full page on the user’s site */
  interface PageComponentData {
      /** Hide this page from the user’s site menu */
      isHidden?: boolean;
      /** Show in pages menu */
      showInPanel?: boolean | null;
      /** Set page to full width */
      isFullWidth?: boolean;
      /** Keep default and let users stretch page to full width (GFPP) */
      addStrechButton?: boolean;
      /** A public link to the page endpoint */
      pageEndpointUrl?: string | null;
      /** A public link to the mobile endpoint */
      pageMobileEndpointUrl?: string | null;
      /** A public link to the settings endpoint */
      settingsEndpointUrl?: string | null;
      /** A public link to the SEO endpoint */
      seoEndpointUrl?: string | null;
      /**
       * When true, this is the default component
       * Main visual component. One components must be default (no more than 1 component)
       */
      default?: boolean;
      /**
       * Second visual component
       * When this is turned on, this page will be added to the site when installing the app, regardless of whether it's the default component or not
       */
      essential?: boolean;
      /** Published state for this page */
      published?: boolean;
      /**
       * This ID is used to identify your page endpoint in a Wix site. You can use this ID when using methods of the Wix SDK
       * @readonly
       */
      tpaWidgetId?: string;
      /** Article id in settings panel */
      helpId?: string | null;
      /** Default Mobile Height */
      defaultMobileHeight?: number | null;
      /** Min Mobile Height */
      minMobileHeight?: number | null;
      /** Mobile Settings Enabled */
      mobileSettingsEnabled?: boolean;
      /** Mobile article id in settings panel */
      mobileHelpId?: string | null;
      /** Editor setting version. optional values: 1 (old - deprecated) or 2 (new). default value is 2 */
      settingsVersion?: number | null;
      /** If setting version is 1, this will be the public link to the settings endpoint */
      settingsEndpointUrlV1?: string | null;
      /** A public link to the settings endpoint on ADI editor */
      onBoardingSettingsEndpointUrl?: string | null;
      /** The padding to use in different views */
      padding?: Padding;
      /** The sub pages list for this component to be rendered in */
      subPages?: SubPage[];
      /** toggle to mark whether the editor should revoke an app that contains this component. */
      excludeFromAutoRevoke?: boolean;
      /** Options to mark whether this page is replacing other page or is replaced by other page. */
      pageReplaceOptions?: PageReplaceOptions;
      /** Elements in the editor can be linked to this page (a button for example) */
      linkable?: boolean | null;
      /** Should add the page to site menu. defaults to true (will add the page to site menu) */
      addToSiteMenu?: boolean | null;
  }
  interface Padding {
      desktop?: DisplayProperties;
      tablet?: DisplayProperties;
      mobile?: DisplayProperties;
  }
  interface PageReplaceOptions extends PageReplaceOptionsOptionsOneOf {
      replacingOptions?: ReplacingOptions;
      replaceableOptions?: ReplaceableOptions;
      type?: ReplacementType;
  }
  /** @oneof */
  interface PageReplaceOptionsOptionsOneOf {
      replacingOptions?: ReplacingOptions;
      replaceableOptions?: ReplaceableOptions;
  }
  interface PageReplace {
      /** The app id of the page the app can replace */
      appId?: string;
      /** The page id the app can replace */
      pageId?: string;
  }
  enum ReplacementType {
      UNKNOWN_REPLACEMENT = "UNKNOWN_REPLACEMENT",
      REPLACING = "REPLACING",
      REPLACEABLE = "REPLACEABLE"
  }
  interface ReplacingOptions {
      /** describe the page and application id that this page will replace. */
      pageReplace?: PageReplace;
  }
  interface ReplaceableOptions {
      /** toggle to mark whether this page can be replaced by other page or app. */
      isReplaceable?: boolean;
  }
  /** A widget out of iframe component that loads directly in the Editor DOM */
  interface WidgetOutOfIframeComponentData {
      /** A link to the out of iframe component */
      componentUrl?: string;
      /** A link to the out of iframe controller */
      controllerUrl?: string | null;
      /** This is that widget's data. */
      widgetData?: WidgetComponentData;
      /** A link to the out of iframe SSR */
      ssrComponentUrl?: string | null;
      /** should be <%=serviceUrl('your_artifact_id', 'component_url_bundle_file')%> */
      componentUrlTemplate?: string | null;
      /** should be <%=serviceUrl('your_artifact_id', 'controller_url_bundle_file')%> */
      controllerUrlTemplate?: string | null;
      /** Additional info on this OOI widget */
      outOfIframeData?: OutOfIframeData;
      /** should be <%=serviceUrl('your_artifact_id', 'no_css_component_url_bundle_file')%> */
      noCssComponentUrlTemplate?: string | null;
      /** A link to the out of iframe no css component url */
      noCssComponentUrl?: string | null;
      /** Enable support for different style param values for different breakpoint (Css Per Breakpoint) */
      cssPerBreakpoint?: boolean | null;
  }
  /** Out Of Iframes additional info */
  interface OutOfIframeData {
      /** The setting URLs for the app */
      settingsUrls?: SettingsUrl[];
      /** Automatically installed on app installation */
      autoInstall?: boolean;
      /** The info about how to report errors for the App */
      errorReporting?: ErrorReporting;
      /** The list of slots available */
      slots?: Slot[];
      /** if true, ssr will not cache pages that contain this widget */
      ssrCacheExcluded?: boolean;
      /** Should use loadable-components */
      isLoadable?: boolean;
  }
  /** An editor settings configuration */
  interface SettingsUrl {
      /** The URL for the setting panel */
      url?: string;
      /** What type of editor this is */
      editorType?: string;
      /** How this view is rendered (mobile, tablet, etc) */
      viewType?: string;
      /** should be <%=serviceUrl('your_artifact_id', '<resource-path>')%>, this field will later be used to trasform the settings url field in both the component and the **derived widget** */
      urlTemplate?: string | null;
  }
  /** Error reporting configuration for the App */
  interface ErrorReporting {
      /** An error reporting URL to be used by our infra (Example: A sentry DSN url) */
      url?: string;
      /** Optional: Data about the artifact that reports the error. */
      artifact?: ErrorReportingArtifact;
  }
  /** Data of the artifact that reports an error. */
  interface ErrorReportingArtifact {
      /** The full artifact id of the project which errors are associated with (Example: com.wixpress.my-artifact) */
      fullArtifactId?: string;
      /** The project version which errors are associated with (Example: Falcon fingerprint) */
      version?: string;
  }
  /** Definition of slot */
  interface Slot {
      /** Role of the slot component (uniquely identifies slot within parent comp; used by Velo) - former "slotName" */
      slotRole?: string;
      /** The list of interfaces that should be implemented by a plugin in order to fit the slot */
      pluginInterfaces?: PluginInterface[];
      /** Id of the slot component (a.k.a. Velo role) */
      slotId?: string;
  }
  /** The types of public APIs exposed by the Plugin */
  enum PluginInterface {
      /** No public APIs exposed */
      NONE_INTERFACE = "NONE_INTERFACE",
      /** The slot requires the REVIEWS interface to be implemented by the plugin. The plugin specifies the implementation of the REVIEWS interface */
      REVIEWS = "REVIEWS",
      /** The slot requires the RATINGS_SUMMARY interface to be implemented by the plugin. The plugin specifies the implementation of the RATINGS_SUMMARY interface */
      RATINGS_SUMMARY = "RATINGS_SUMMARY",
      /** The slot requires the RATINGS_SUMMARY_OOI_LIST interface to be implemented by the plugin. The plugin specifies the implementation of the RATINGS_SUMMARY_OOI_LIST interface */
      RATINGS_SUMMARY_OOI_LIST = "RATINGS_SUMMARY_OOI_LIST",
      /** The slot requires the BOOKINGS_SERVICE interface to be implemented by the plugin. The plugin specifies the implementation of the BOOKINGS_SERVICE interface */
      BOOKINGS_SERVICE = "BOOKINGS_SERVICE",
      /** The slot requires the BOOKINGS_FORM interface to be implemented by the plugin. The plugin specifies the implementation of the BOOKINGS_FORM interface */
      BOOKINGS_FORM = "BOOKINGS_FORM",
      /** The slot requires the BASE interface to be implemented by the plugin. The plugin specifies the implementation of the BASE interface */
      BASE = "BASE",
      /** The slot requires the EVENT interface to be implemented by the plugin. The plugin specifies the implementation of the EVENT interface */
      EVENT = "EVENT",
      /** The slot requires the PRODUCT interface to be implemented by the plugin. The plugin specifies the implementation of the PRODUCT interface */
      PRODUCT = "PRODUCT",
      /** The slot requires the CHECKOUT interface to be implemented by the plugin. The plugin specifies the implementation of the CHECKOUT interface */
      CHECKOUT = "CHECKOUT",
      /** The slot requires the CATEGORY interface to be implemented by the plugin. The plugin specifies the implementation of the CATEGORY interface */
      CATEGORY = "CATEGORY"
  }
  /** A page out of iframe component that loads directly in the Editor DOM */
  interface PageOutOfIframeComponentData {
      /** A link to the out of iframe component */
      componentUrl?: string;
      /** A link to the out of iframe controller */
      controllerUrl?: string | null;
      /** This is that page's data */
      pageData?: PageComponentData;
      /** A link to the out of iframe SSR */
      ssrComponentUrl?: string | null;
      /** should be <%=serviceUrl('your_artifact_id', 'component_url_bundle_file')%> */
      componentUrlTemplate?: string | null;
      /** should be <%=serviceUrl('your_artifact_id', 'controller_url_bundle_file')%> */
      controllerUrlTemplate?: string | null;
      /** Additional info on this OOI page */
      outOfIframeData?: OutOfIframeData;
      /** should be <%=serviceUrl('your_artifact_id', '<resource-path>')%>, this field will later be used to trasform the settings url field in both the component and the **derived widget** */
      settingsEndpointUrlTemplate?: string | null;
      /** should be <%=serviceUrl('your_artifact_id', '<resource-path>')%>, this field will later be used to trasform the settings url field in both the component and the **derived widget** */
      settingsEndpointUrlV1Template?: string | null;
      /** should be <%=serviceUrl('your_artifact_id', 'no_css_component_url_bundle_file')%> */
      noCssComponentUrlTemplate?: string | null;
      /** A link to the out of iframe no css component url */
      noCssComponentUrl?: string | null;
      /** Enable support for different style param values for different breakpoint (Css Per Breakpoint) */
      cssPerBreakpoint?: boolean | null;
  }
  /** Create a collection of native Editor components that loads directly in the Editor DOM */
  interface PlatfromComponentData {
      /** Path to a Javascript file that Editor runs on app install */
      editorScriptUrl?: string | null;
      /** Path to a Javascript file that viewer runs for page components / widgets and applicative business logic */
      viewerScriptUrl?: string | null;
      /** If true, components of the app wont be added to the editor (only run editor scripts) */
      platformOnly?: boolean;
      /** If the viewer script should run in the Editor */
      enableInEditor?: boolean;
      /** URL to get complex routing decisions at runtime from a platform app. Some spec can be seen here: https://docs.google.com/document/d/1t_3bl9vVMoPVm_I9Sx59LsVUPXi07gihGIg3-F7z8Q0/edit?ts=595512f6#heading=h.9ca9859ng5d */
      routerServiceUrl?: string | null;
      /** Path to a Javascript file that viewer runs for page components / widgets and applicative business logic. Includes verbose logs for Wix runtime. */
      viewerVerboseScriptUrl?: string | null;
      /** A map of string descriptor the app understands to a versioned URL topology value, can be an API or statics data. Example: `storesCartAPI: https://stores.com/api/v2/cart/ */
      baseUrls?: Record<string, string>;
      /** Used by DAC (gradual roll-out). A map of string descriptor the app understands to a template versioned URL topology value, Example: `storeCSSStuff: https://static.pararstorage.com/services/stores-css-stuff/<%=serviceVersion('your_artifact_id')%>/main.css */
      baseUrlsTemplate?: Record<string, string>;
      /** should be <%=serviceUrl('your_artifact_id', 'viewer_script_url_bundle_file')%> */
      viewerScriptUrlTemplate?: string | null;
      /** If this component should be stretched in relation to a form factor (desktop, tablet, mobile) */
      isStretched?: IsStretched;
      /** Any margins this page should have in relation to a form factor (desktop, tablet, mobile) */
      margins?: Margins;
      /** Any docking this page (horizontal / vertical) should have in relation to a form factor (desktop, tablet, mobile) */
      docking?: Docking;
      /** The height of this page in relation to a form factor (desktop, tablet, mobile) */
      height?: Height;
      /** The width of this page in relation to a form factor (desktop, tablet, mobile) */
      width?: ApiWidth;
      /**
       * Support adding application pages with preset data
       * Vertical endpoint that clones the data
       * https://docs.google.com/document/d/1pUp-d9vVMCTjDdQffBuwh1mBvQacQZy0n6nm2amCMV4/edit
       */
      cloneAppDataUrl?: string | null;
      /**
       * False by default
       * If false, data is cloned per app
       * If true, the data is cloned per add component on component addition
       */
      shouldCloneDataPerComponent?: boolean;
      /**
       * Error reporting URL used to report errors at platform level,
       * and as fallback for pageOOI and widgetOOI error reporting
       */
      errorReporting?: ErrorReporting;
      /** A concrete versioned URL of the translation template, contains `{language}` parameter in the path */
      editorTranslationUrl?: string | null;
      /** A version templated URL of the translation template, contains a <%=serviceVersion('your_artifact_id')%> template and a `{language}` template */
      editorTranslationUrlTemplate?: string | null;
      excludeFromAutoRevoke?: boolean;
      /**
       * Should be <%=serviceUrl('your_artifact_id', 'editor_script_url_bundle_file')%>, this will later be resolved to the right version in the context of the request, meaning, URL/Cookie overrides, Rollout version, Employee Preview version and override the version of editor_script_url.
       * @internal
       */
      editorScriptUrlTemplate?: string | null;
  }
  /**
   * An iframe that opens in the user’s Wix Dashboard,
   * or add a link to open the page directly in your platform.
   */
  interface DashboardComponentData {
      /** The dashboard url. */
      url?: string;
      /**
       * External or Internal dashboard.
       * The user’s Wix Dashboard (recommended) or your platform or site
       */
      embedded?: boolean;
      /** A settings page for users to customize your dashboard */
      settingsPageUrl?: string | null;
      /** todo: WEB_URL */
      checkStatusUrl?: string | null;
      published?: boolean | null;
      hideWixSideMenu?: boolean | null;
  }
  /** An invisible iframe to track site activity. It’ll be added to every page on the user’s site */
  interface WorkerComponentData {
      /** A public link to the worker endpoint */
      workerEndpointUrl?: string;
  }
  /**
   * An extension to platform used by Wix Blocks UI
   * The main component in the Wix Blocks.
   * no manual adding. auto-created only from Wix Blocks
   */
  interface StudioComponentData {
      /** Path to a Javascript file that Editor runs on app install */
      editorScriptUrl?: string;
      /** Path to a Javascript file that viewer runs for page components / widgets and applicative business logic */
      viewerScriptUrl?: string;
      /** If true, components of the app wont be added to the editor (only run editor scripts) */
      platformOnly?: boolean;
      /** If the viewer script should run in the Editor */
      enableInEditor?: boolean;
      /** URL to get complex routing decisions at runtime from a platform app. Some spec can be seen here: https://docs.google.com/document/d/1t_3bl9vVMoPVm_I9Sx59LsVUPXi07gihGIg3-F7z8Q0/edit?ts=595512f6#heading=h.9ca9859ng5d */
      routerServiceUrl?: string;
      /** Path to a Javascript file that viewer runs for page components / widgets and applicative business logic. Includes verbose logs for Wix runtime. */
      viewerVerboseScriptUrl?: string;
      /** Instance id of wixCode in the original dev site. used in order to access the widgets code */
      wixCodeInstanceId?: string;
      /** Id of the grid in wixCode FS where the widgets code is located. used in order to access the widgets code */
      wixCodeGridId?: string;
      /** Path to a json which contains metaData of the devSite */
      siteHeaderUrl?: string;
      /** A map of string descriptor the app understands to a versioned URL topology value, can be an API or statics data. This may have some values which are NOT URL since Studio computes some values on the fly. */
      baseUrls?: Record<string, string>;
      /** If true, not shown in add panel and apps panel when it is installed */
      hideInAddPanel?: boolean;
      /** if true, this studio component enforce permissions */
      permissionsEnforced?: boolean;
  }
  /** A widget component in the Wix Blocks. */
  interface StudioWidgetComponentData {
      /** Id of the widget */
      studioWidgetId?: string;
      /** Path to a json which contains the widget data and structure */
      pageJsonFilename?: string;
      /** variationId -> widget variation data */
      variations?: Record<string, StudioWidgetVariation>;
      /** Product display data for this component */
      widgetDisplay?: WidgetDisplay;
      /** If it is required to be installed as part of the app */
      essential?: boolean;
      /** The version of blocks used to build this widget */
      blocksVersion?: string;
      /** If this component should be stretched in relation to a form factor (desktop, tablet, mobile) */
      isStretched?: IsStretched;
      /** Any margins this page should have in relation to a form factor (desktop, tablet, mobile) */
      margins?: Margins;
      /** Any docking this page (horizontal / vertical) should have in relation to a form factor (desktop, tablet, mobile) */
      docking?: Docking;
      /** The height of this page in relation to a form factor (desktop, tablet, mobile) */
      height?: Height;
      /** The width of this page in relation to a form factor (desktop, tablet, mobile) */
      width?: ApiWidth;
      /**
       * Optional, static artifact short name, used for BoB application to indicate the relation between the widget and its static artifact
       * @internal
       */
      relatedArtifact?: string | null;
      /** Properties of installed custom elements */
      customElement?: CustomElement;
      /** ids of nested widgets in this widget */
      nestedWidgets?: NestedWidgets;
      /** Properties of widget's presets */
      presetsInfo?: PresetInfo[];
      /** Widget properties that affect the way it behaves during installation in a site. */
      installationSettings?: InstallationSettings;
      /** Properties that affect the widget's presence in the editor. */
      editorPresence?: EditorPresence;
      /** Base info of component by shared logic of unified components */
      base?: BaseInfo;
      /** Unified widget installation settings */
      installation?: WidgetInstallationSettings;
      /**
       * if true, ssr will not cache pages that contain this widget
       * @internal
       */
      ssrCacheExcluded?: boolean;
      /**
       * The builder component model by shared logic of unified components. Required in oder to create a builder component
       * @internal
       */
      componentModel?: ComponentModel;
  }
  /** A variation of a blocks widget */
  interface StudioWidgetVariation {
      /** Id of the widget variation */
      _id?: string;
      /** Display name of the variation */
      name?: string;
      /** Path to a json which contains the widget variation data and structure */
      pageJsonFilename?: string;
  }
  interface CustomElement extends CustomElementConsentCategoryOneOf {
      essential?: boolean;
      /** Related to performance and other functional measurements. */
      functional?: boolean;
      /** Related to analytics about how the site is used in order to improve it. */
      analytics?: boolean;
      /** Related to allowing better customization of the experience to a current visitor. */
      advertising?: boolean;
      /** Boolean to make custom element in this widget be available for free sites */
      allowedForFreeSite?: boolean;
      /** CCPA compliance flag. */
      dataToThirdParty?: boolean;
  }
  /** @oneof */
  interface CustomElementConsentCategoryOneOf {
      essential?: boolean;
      /** Related to performance and other functional measurements. */
      functional?: boolean;
      /** Related to analytics about how the site is used in order to improve it. */
      analytics?: boolean;
      /** Related to allowing better customization of the experience to a current visitor. */
      advertising?: boolean;
  }
  /** Nested widgets */
  interface NestedWidgets {
      /** ids of all recursively nested widgets from the same Blocks app */
      internal?: string[];
  }
  /** Preset Info */
  interface PresetInfo {
      /** Id of the widget's preset */
      presetId?: string;
      /** Display name of the widget's preset */
      presetName?: string;
      /** The default size used when the preset is added to the stage */
      defaultSize?: PresetSize;
  }
  /** Preset Size */
  interface PresetSize {
      /** The width of the preset when it's added to the stage */
      width?: DisplayValue;
      /** The height of the preset when it's added to the stage */
      height?: DisplayValue;
  }
  /** Settings to control the behavour of widgets when installed in a wix site. */
  interface InstallationSettings extends InstallationSettingsOptionsOneOf {
      /** Extra options needed when `install_page` is set to `PAGE`. */
      pageOptions?: PageOptions;
      /** Extra options needed when `install_page` is set to `LIGHTBOX`. */
      lightboxOptions?: LightboxOptions;
      /** How to add the widget automatically to the site. Options could be `NO_PAGE`, `CURRENT`, `PAGE` or `LIGHTBOX`. */
      installPage?: InstallPage;
      /** Controls whether to show or hide the widget in the add panel. */
      showInAddPanel?: boolean | null;
      /** Defines the main preset per breakpoint for the widget. */
      mainPresets?: MainPresets;
  }
  /** @oneof */
  interface InstallationSettingsOptionsOneOf {
      /** Extra options needed when `install_page` is set to `PAGE`. */
      pageOptions?: PageOptions;
      /** Extra options needed when `install_page` is set to `LIGHTBOX`. */
      lightboxOptions?: LightboxOptions;
  }
  /** The page to which a new widget can be added */
  enum InstallPage {
      /** Don't add widget to a page */
      NO_PAGE = "NO_PAGE",
      /** Add widget to the current page in the editor */
      CURRENT = "CURRENT",
      /** Add widget to a new page in the editor */
      PAGE = "PAGE",
      /** Add widget to a new lightbox in the editor */
      LIGHTBOX = "LIGHTBOX"
  }
  /** Defines the main preset per breakpoint for the widget. */
  interface MainPresets {
      /** The main desktop preset. */
      desktopPresetId?: string;
      /** The main tablet preset. */
      tabletPresetId?: string;
      /** The main mobile preset. */
      mobilePresetId?: string;
  }
  /** Options for widgets that are added as a page during installation */
  interface PageOptions {
      /** Display name of the page that will be shown in the page menu. */
      pageName?: string;
      /** The page ID used for navigation purposes. Once set cannot be changed. */
      pageId?: string;
  }
  interface LightboxOptions {
      /** Display name of the lightbox that will be shown in the lightbox menu. */
      lightboxName?: string;
      /** The lightbox ID used for navigation purposes. Once set cannot be changed. */
      lightboxId?: string;
  }
  interface EditorPresence {
      /** Properties that describe the presence of each of the widget's presets */
      presetsEditorPresence?: PresetEditorPresence[];
  }
  interface PresetEditorPresence {
      /** Id of the widget's preset */
      presetId?: string;
      /** Controls whether to show or hide the preset in the Add Panel */
      showInAddPanel?: boolean;
      /** Controls whether to show or hide the preset in the Presets Panel */
      showInPresetsPanel?: boolean;
      /** Optional image to show as the preset's thumbnail in the editor, if left empty an automatic snapshot of the preset will be used */
      wixMediaThumbnail?: string;
      /** Another preset id that is a mobile variation of this preset */
      mobilePresetId?: string;
  }
  interface BaseInfo {
      /** The name of the component */
      name?: string;
      /** The internal id of the component by the own app */
      _id?: string;
  }
  interface WidgetInstallationSettings {
      /** Shared installation settings for unified components */
      base?: BaseInstallation;
      /** Widget installation settings for unified components */
      widget?: WidgetInstallation;
  }
  interface BaseInstallation {
      /** Auto add component to stage */
      autoAdd?: boolean;
      /** Mark component as essential for the existence of the app (force to delete the whole app) */
      essential?: boolean;
      /** Max instances of the component that can be on site */
      maxInstances?: number | null;
  }
  interface WidgetInstallation {
      /** Preset should be selected defaultly with installation */
      defaultPreset?: MainPresets;
      /** Region of widget */
      region?: RegionType;
  }
  enum RegionType {
      HEADER = "HEADER",
      BODY = "BODY",
      FOOTER = "FOOTER"
  }
  interface ComponentModel {
      /** The component type of the builder component. */
      componentType?: string;
      /** The component URL of the builder component */
      componentUrl?: string;
  }
  /** A component that indicates the existence of an importable code package in a Wix Blocks application. */
  interface CodePackageComponentData {
      /** The GUID to access the package code in the Velo/Wix Code system */
      gridId?: string;
      /** Name of the package for display */
      displayName?: string;
      /** Name of the package for import */
      importName?: string;
      /** An optional description of this package and what it does */
      description?: string | null;
  }
  /** A collection of native components that load directly in the Business Manager */
  interface DashboardPlatfromComponentData {
      /** Path to a Javascript file that Dashboard runs on app install */
      scriptUrl?: string;
  }
  /** Inject third party scripts into the user’s site */
  interface EmbeddedScriptComponentData {
      /** The script */
      template?: string;
      /** A name that’s unique to this component. Names can include letters and the hyphen (-) character only */
      name?: string;
      /** What category of pages this will be embedded on (single, many, none) */
      pages?: EmbeddedScriptPages;
      /** Where in the HTML this should be embedded */
      placement?: EmbeddedScriptPlacement;
      /** An article explaining how to activate the script */
      connectArticleUrl?: string;
      /** Type of script you are injecting. This will be used for GDPR and cookie consent purposes */
      embedCategory?: EmbedCategory;
      /**
       * if the script should be loaded once - default and only supported value is true
       * @readonly
       */
      loadOnce?: boolean;
      /** allow developers to decide if their app script can be install on free sites */
      allowedForFreeSite?: boolean;
      /** The runtime dependencies array to declare the widget packages. */
      dependencies?: WixDependency[];
  }
  /** Category of pages this will be embedded on (single, many, none) */
  enum EmbeddedScriptPages {
      /** It will not be embedded */
      NONE_PAGES = "NONE_PAGES",
      /** It will be embedded once */
      ONCE = "ONCE",
      /** It will be embedded multiple times on specific pages */
      SPECIFIC_PAGES = "SPECIFIC_PAGES"
  }
  /** Where that embed will be rendered */
  enum EmbeddedScriptPlacement {
      /** It will not be rendered */
      NONE_PLACEMENT = "NONE_PLACEMENT",
      /** In the document head */
      HEAD = "HEAD",
      /** Prepended before all children already rendered in the body tag */
      BODY_START = "BODY_START",
      /** Appended after the last child already rendered in the body tag */
      BODY_END = "BODY_END"
  }
  /** Embed category defined for Privacy regulation compliance in EU and CCPA in the US */
  enum EmbedCategory {
      /** Not categorized yet */
      UNKNOWN = "UNKNOWN",
      /** Must load regardless of policy */
      ESSENTIAL = "ESSENTIAL",
      /** Adds optional functionality to the site */
      FUNCTIONAL = "FUNCTIONAL",
      /** Adds analytics abilities to the site */
      ANALYTICS = "ANALYTICS",
      /** Adds advertising content or advertising tracking to the site */
      ADVERTISING = "ADVERTISING"
  }
  interface WixDependency {
      /** The fully qualified package name from npm, example: @wix/frontend-location */
      packageName?: string;
      /** The major version of the package (this may be a detail included in the package name, but is conventional in NPM with semver semantics */
      version?: number;
  }
  /** A draggable custom element. Add your custom script and generate ui directly in the viewer */
  interface WebComponentData {
      /** A link to a preview image we can render in the editor in place of your component */
      imagePreview?: string;
      /** Web component size */
      size?: Size;
      /** This script url should render temp empty state */
      scriptTag?: string;
      /** Unique tag name to use in order to connect your JS script to your web component */
      tagName?: string;
      /** The settings panel URL for this component */
      settingsUrl?: string | null;
      /** The editor modal that the user will see */
      modalTitle?: string;
      /** Settings CTA label */
      connectLabel?: string;
      /** Dynamic settings(Graphic Floating Properties Panel settings) */
      gfppSettings?: Settings;
      /** Custom element type PAGE / WIDGET */
      type?: ElementType;
      /** Boolean to make this component be available for free sites */
      allowedForFreeSite?: boolean;
      /** A public link to the SEO endpoint */
      seoUrl?: string | null;
      /** For case that the widget will be used as page */
      slug?: string | null;
      /** For case that the widget will be used as page */
      showPageInMenu?: boolean;
      /** The details of the selected widget to add */
      widget?: WidgetDetails;
      /** Give the option to change the script type */
      scriptType?: ScriptType;
      /** Web component default mobile height */
      defaultMobileHeight?: number | null;
      /** Prevent the deletion of the widget when set to true. */
      essential?: boolean;
      /** Toggle to mark whether the editor should revoke an app that contains this component. */
      excludeFromAutoRevoke?: boolean;
      /** defines the widget's behaviour in editor page */
      widgetBehavior?: WidgetBehavior;
  }
  /** Web component size */
  interface Size {
      /** Height in pixels */
      height?: number;
      /** Width in pixels */
      width?: number;
  }
  /** Graphic Floating Properties Panel settings */
  interface Settings {
      activeTab?: string;
      fetchInitialData?: string | null;
      tabs?: Tab[];
  }
  /** Setting tab definition */
  interface Tab {
      label?: string;
      items?: Container[];
      /** hidden tab will not be visible in editor and dev center preview */
      hidden?: boolean;
  }
  /** UI Container in page */
  interface Container extends ContainerDataOneOf {
      /** containers */
      main?: Main;
      section?: Section;
      drillInListItem?: DrillInListItem;
      /** items */
      thumbnails?: Thumbnails;
      sliderLabeled?: SliderLabeled;
      dropDownLabeled?: DropDownLabeled;
      toggleLabeled?: ToggleLabeled;
      barAlignment?: BarAlignment;
      textInputLabeled?: TextInputLabeled;
      resetButton?: ResetButton;
      fontFamilyWithColorPicker?: FontFamilyWithColorPicker;
      radioButtonLabeled?: RadioButtonLabeled;
      colorSelectLabeled?: ColorSelectLabeled;
      textStyle?: TextStyle;
  }
  /** @oneof */
  interface ContainerDataOneOf {
      /** containers */
      main?: Main;
      section?: Section;
      drillInListItem?: DrillInListItem;
      /** items */
      thumbnails?: Thumbnails;
      sliderLabeled?: SliderLabeled;
      dropDownLabeled?: DropDownLabeled;
      toggleLabeled?: ToggleLabeled;
      barAlignment?: BarAlignment;
      textInputLabeled?: TextInputLabeled;
      resetButton?: ResetButton;
      fontFamilyWithColorPicker?: FontFamilyWithColorPicker;
      radioButtonLabeled?: RadioButtonLabeled;
      colorSelectLabeled?: ColorSelectLabeled;
      textStyle?: TextStyle;
  }
  /** Main 1 */
  interface Main {
      items?: MainPropsData[];
  }
  /** MainPropsData */
  interface MainPropsData {
      dashboardButton?: DashboardButton;
      richTextWithIllustrationVertical?: RichTextWithIllustrationVertical;
  }
  /** DashboardButton main 2 */
  interface DashboardButton {
      title?: string;
      label?: string;
  }
  /** RichTextWithIllustrationVertical main 1 */
  interface RichTextWithIllustrationVertical {
      key?: string;
      label?: string;
      text?: string;
  }
  /** Section 2 */
  interface Section {
      label?: string;
  }
  /** DrillInListItem 3 */
  interface DrillInListItem {
      items?: DrillItem[];
      label?: string;
  }
  /** DrillItem */
  interface DrillItem extends DrillItemDataOneOf {
      /** containers */
      section?: Section;
      /** items */
      radioButtonLabeled?: RadioButtonLabeled;
      colorSelectLabeled?: ColorSelectLabeled;
      thumbnails?: Thumbnails;
      sliderLabeled?: SliderLabeled;
      dropDownLabeled?: DropDownLabeled;
      toggleLabeled?: ToggleLabeled;
      barAlignment?: BarAlignment;
      textInputLabeled?: TextInputLabeled;
      fontFamilyWithColorPicker?: FontFamilyWithColorPicker;
      textStyle?: TextStyle;
  }
  /** @oneof */
  interface DrillItemDataOneOf {
      /** containers */
      section?: Section;
      /** items */
      radioButtonLabeled?: RadioButtonLabeled;
      colorSelectLabeled?: ColorSelectLabeled;
      thumbnails?: Thumbnails;
      sliderLabeled?: SliderLabeled;
      dropDownLabeled?: DropDownLabeled;
      toggleLabeled?: ToggleLabeled;
      barAlignment?: BarAlignment;
      textInputLabeled?: TextInputLabeled;
      fontFamilyWithColorPicker?: FontFamilyWithColorPicker;
      textStyle?: TextStyle;
  }
  /** RadioButtonLabeled 12 */
  interface RadioButtonLabeled {
      key?: string;
      title?: string;
      value?: string;
      options?: string[];
      description?: string;
      conditions?: Condition[];
  }
  interface Condition {
      value?: string;
      state?: SingleKeyCondition[];
  }
  interface SingleKeyCondition {
      key?: string;
      value?: string;
      visible?: boolean;
  }
  /** ColorSelectLabeled 13 */
  interface ColorSelectLabeled extends ColorSelectLabeledDataOneOf {
      customColor?: ColorDefinition;
      templateColor?: TemplateDefaultColor;
      title?: string;
      key?: string;
      color?: string;
      defaultData?: ColorDefinition;
      description?: string;
  }
  /** @oneof */
  interface ColorSelectLabeledDataOneOf {
      customColor?: ColorDefinition;
      templateColor?: TemplateDefaultColor;
  }
  interface ColorDefinition {
      value?: string;
      opacity?: string;
  }
  enum TemplateDefaultColor {
      BACKGROUND = "BACKGROUND",
      SECONDARY_TEXTS = "SECONDARY_TEXTS",
      MAIN_TEXT_AND_ICONS = "MAIN_TEXT_AND_ICONS",
      BORDERS_AND_DIVIDERS = "BORDERS_AND_DIVIDERS",
      BUTTONS_AND_LINKS = "BUTTONS_AND_LINKS"
  }
  /** Thumbnails 4 */
  interface Thumbnails {
      key?: string;
      title?: string;
      value?: string;
      options?: ThumbnailData[];
      size?: ThumbnailsSize;
      description?: string;
      conditions?: Condition[];
  }
  /** Structure for thumbnail */
  interface ThumbnailData {
      value?: string;
      src?: string | null;
      selectedSrc?: string | null;
      onHoverSrc?: string | null;
      label?: string;
  }
  enum ThumbnailsSize {
      SMALL = "SMALL",
      MEDIUM = "MEDIUM",
      LARGE = "LARGE",
      XLARGE = "XLARGE"
  }
  /** SliderLabeled 5 */
  interface SliderLabeled {
      key?: string;
      title?: string;
      size?: string;
      placeholder?: string;
      description?: string;
      minSize?: number;
      maxSize?: number;
  }
  /** DropDownLabeled 6 */
  interface DropDownLabeled {
      key?: string;
      title?: string;
      value?: string;
      options?: string[];
      description?: string;
      conditions?: Condition[];
  }
  /** ToggleLabeled 7 */
  interface ToggleLabeled {
      key?: string;
      title?: string;
      value?: boolean;
      description?: string;
      conditions?: Condition[];
  }
  /**
   * Elements =========
   * BarAlignment 8
   */
  interface BarAlignment {
      selected?: BarAlignmentSelected;
      key?: string;
      title?: string;
      description?: string;
      value?: BarAlignmentSelected;
      conditions?: Condition[];
  }
  /** Bar alignment selected value */
  enum BarAlignmentSelected {
      ALIGN_LEFT = "ALIGN_LEFT",
      ALIGN_CENTER = "ALIGN_CENTER",
      ALIGN_RIGHT = "ALIGN_RIGHT"
  }
  /** TextInputLabeled 9 */
  interface TextInputLabeled {
      key?: string;
      title?: string;
      placeholder?: string;
      value?: string;
      description?: string;
  }
  /** 11 */
  interface FontFamilyWithColorPicker {
      key?: string;
      title?: string;
      description?: string;
      value?: FontDefinition;
      defaultValue?: FontDefinition;
  }
  /** defintion and enums */
  interface FontDefinition {
      font?: string;
      color?: ColorDefinition;
  }
  /** TextStyle 14 */
  interface TextStyle extends TextStyleDefaultColorOneOf {
      customColor?: ColorDefinition;
      templateColor?: TemplateDefaultColor;
      key?: string;
      title?: string;
      description?: string;
      defaultTextStyle?: DefaultTextStyle;
  }
  /** @oneof */
  interface TextStyleDefaultColorOneOf {
      customColor?: ColorDefinition;
      templateColor?: TemplateDefaultColor;
  }
  enum DefaultTextStyle {
      TITLE = "TITLE",
      PARAGRAPH = "PARAGRAPH",
      LOWER_HIERARCHY_TEXTS = "LOWER_HIERARCHY_TEXTS"
  }
  /** 10 */
  interface ResetButton {
      label?: string;
  }
  enum ElementType {
      WIDGET = "WIDGET",
      PAGE = "PAGE"
  }
  interface WidgetDetails {
      name?: string | null;
      icon?: string | null;
      description?: string | null;
  }
  enum ScriptType {
      NO_SCRIPT_TYPE = "NO_SCRIPT_TYPE",
      MODULE = "MODULE"
  }
  interface WidgetBehavior {
      /** Toggle whether the widget is removable from the page. */
      removable?: boolean;
      /** Toggle whether the widget is duplicatable from the page. */
      duplicatable?: boolean;
  }
  interface ExtensionData {
      data?: string;
      extensionType?: ExtensionType;
  }
  enum ExtensionType {
      NONE_EXTENSION = "NONE_EXTENSION",
      PAYMENTS_GATEWAY_EXTENSION = "PAYMENTS_GATEWAY_EXTENSION",
      COUPONS_EXTENSION = "COUPONS_EXTENSION",
      DROPSHIPPING_EXTENSION = "DROPSHIPPING_EXTENSION",
      FULFILMENT_EXTENSION = "FULFILMENT_EXTENSION",
      DROPSHIPPING_SUPPLIER_EXTENSION = "DROPSHIPPING_SUPPLIER_EXTENSION",
      FULFILLMENT_CENTER_EXTENSION = "FULFILLMENT_CENTER_EXTENSION",
      RESTAURANTS_POS_EXTENSION = "RESTAURANTS_POS_EXTENSION",
      ART_STORE_EXTENSION = "ART_STORE_EXTENSION",
      ASCEND_AUTOMATION_EXTENSION = "ASCEND_AUTOMATION_EXTENSION",
      CONTACT_LABELS_EXTENSION = "CONTACT_LABELS_EXTENSION"
  }
  interface SnippetSolutionData {
      code?: string;
      instructions?: string;
  }
  /** A component which represents collections that will be installed as part of the app */
  interface DataComponent {
      /**
       * Token used used by blocks to allow installing collections when the app is installed
       * @internal
       */
      collectionsToken?: string | null;
  }
  interface DCConfigData {
      isVisualApp?: boolean;
  }
  interface StaticFileComponentData {
      url?: string;
  }
  interface AppConfig {
      siteConfig?: SiteConfig;
      namespace?: string;
  }
  interface SiteConfig {
      /** todo: WEB_URL */
      siteStructureApi?: string | null;
  }
  /**
   * Business Manager sidebar category that contains sidebar links.
   * each link in the category opens in the business manager in an iframe.
   */
  interface MultipleDashboardsComponentData {
      /** items inside the category */
      items?: DashboardItem[];
  }
  /**
   * a single dashboard page,
   * represented in Business Manager as sidebar link that opens in an iframe
   */
  interface DashboardItem {
      /** name of the sidebar link of the page */
      label?: string;
      /** data about the current page */
      dashboardData?: DashboardComponentData;
      /** permission to check for this page. */
      permissionId?: string | null;
  }
  /** Test component extension */
  interface PaymentsGatewayComponentData {
      /** The shop url */
      shopUrl?: string;
  }
  interface AutomationTrigger {
      /** The name that will be passed with trigger report event to activate an Automation. */
      name?: string;
      /** The name displayed to the user. */
      displayName?: string;
      /** The schema of the payload that will be passed with trigger when activating an Automation. */
      schemaConfig?: SchemaConfig;
      /**
       * Email template to be shown when user choose this trigger and email action.
       * @internal
       */
      emailTemplateName?: string | null;
      deploymentUri?: string;
      revision?: number;
  }
  interface SchemaConfig {
      /** The fields of the payload as sent in the report event */
      fields?: SchemaField[];
      /**
       * Dynamic schema service URL.
       * Dynamic schema is used when user needs to choose specific entities from site to activate the Automation.
       * For example form name, purchased product, etc.
       */
      dynamicSchemaUrl?: string | null;
  }
  interface SchemaField {
      /** The key as it appears on the report event payload. */
      key?: string;
      /** The name displayed to the user. */
      displayName?: string;
      /** The field type */
      fieldType?: SchemaFieldType;
      /** Sample values, values that could show up in the payload of a trigger. */
      sampleValues?: string[];
      /** The field exposure */
      exposure?: Exposure;
  }
  enum PrimitiveType {
      UNKNOWN_PRIMITIVE_TYPE = "UNKNOWN_PRIMITIVE_TYPE",
      TEXT = "TEXT",
      BOOLEAN = "BOOLEAN",
      NUMBER = "NUMBER"
  }
  enum SimpleType {
      UNKNOWN_SIMPLE_TYPE = "UNKNOWN_SIMPLE_TYPE",
      MONEY = "MONEY",
      LINK = "LINK",
      BACKOFFICE_LINK = "BACKOFFICE_LINK",
      LIVESITE_LINK = "LIVESITE_LINK",
      MULTILINGUAL = "MULTILINGUAL",
      IMAGE_LINK = "IMAGE_LINK",
      GUID = "GUID",
      EMAIL = "EMAIL",
      PHONE = "PHONE",
      CONTACT_ID = "CONTACT_ID"
  }
  interface Primitive {
      primitiveType?: PrimitiveType;
  }
  interface Simple {
      simpleType?: SimpleType;
  }
  interface _Date {
      /** Default: false, set this to true if the date is normally a future date, like: Invoice expiration date, Membership renewal date */
      allowNegativeOffset?: boolean | null;
  }
  interface SchemaFieldType extends SchemaFieldTypeFieldTypeOneOf {
      primitive?: Primitive;
      simple?: Simple;
      /**
       * The field value must conform to the following JSON structure { "timestamp": string, "timeZone": string }, where the timestamp is ISO format UTC, and the time zone is the full name
       * Example: { "timestamp": "2021-03-22T11:41:47.992Z", timeZone: "Asia/Jerusalem" }
       */
      date?: _Date;
  }
  /** @oneof */
  interface SchemaFieldTypeFieldTypeOneOf {
      primitive?: Primitive;
      simple?: Simple;
      /**
       * The field value must conform to the following JSON structure { "timestamp": string, "timeZone": string }, where the timestamp is ISO format UTC, and the time zone is the full name
       * Example: { "timestamp": "2021-03-22T11:41:47.992Z", timeZone: "Asia/Jerusalem" }
       */
      date?: _Date;
  }
  enum Exposure {
      UNKNOWN_EXPOSURE = "UNKNOWN_EXPOSURE",
      /** Not sent to the action provider */
      SETUP = "SETUP",
      /** Sent to the action provider and usually hidden from user */
      HIDDEN = "HIDDEN",
      /** Sent to the action provider and usually shown to user */
      EXPOSED = "EXPOSED"
  }
  /** represents Invoices integration policies */
  interface InvoicesActionsComponentData {
      /** partial payment restriction on invoice */
      partialPayment?: PartialPaymentRestriction;
  }
  /** Possible Partial Payment Policy Values */
  enum PartialPaymentRestriction {
      UNDEFINED = "UNDEFINED",
      /** Allow Partial Payment */
      ALLOW = "ALLOW",
      /** Disallow Partial Payment */
      DISALLOW = "DISALLOW"
  }
  /** Experimental-WIP: Specifies the app module configuration of business manager module */
  interface DashboardApplicationData {
      /** List of bundles to be loaded for your module */
      bundles?: Bundle[];
      /** Your module id as defined in business-manager-api */
      _id?: string | null;
      /** List of available page components that your module is registering */
      pageComponents?: PageDashboardApplicationComponent[];
      /** The default component to load when another app navigates to your module */
      defaultPageComponentId?: string | null;
      /** Config section that will be provided to your lazy component and component along with all other properties from business-manager, if your config object will contain topology parameter, you'll be able to benefit from statics override machanism */
      config?: AppConfiguration;
      /** Allows an application to declare that when it's opened inside the business-manager without a deeplink the business-manager home should be shown. It currently only affects opening the app from Editor/ADI */
      useHomeAsLandingPage?: boolean | null;
      /** If there are some experiments that define if this page should be enabled, list of experiment lists with OR relationship between them, experiments should be in business manager scope */
      enabledByExperiments?: ExperimentGroupWrapper[];
      /** If this module should load in absence of any pages, by default this won't run */
      loadWithoutPages?: boolean | null;
      /** List of hosted component of the application */
      components?: HostedComponent[];
  }
  /** Specifes business manager module file bundle */
  interface Bundle {
      /** The JavaScript file to load */
      file?: string;
      /** If there are some experiments that define if this page should be enabled, list of experiment lists with OR relationship between them, experiments should be in business manager scope */
      enabledByExperiments?: ExperimentGroupWrapper[];
      /** A alternative debug file for debugging issues */
      debugFile?: string | null;
  }
  /** Specifies a list of experiments that have AND relationship between them, and OR relationship between each list */
  interface ExperimentGroupWrapper {
      /** list of experiments with AND relationship between them, for false value use ! before experiment spec */
      experimentsGroup?: string[];
  }
  /** Specifies page components for a business manager module */
  interface PageDashboardApplicationComponent {
      /** The id of the page */
      _id?: string;
      /** The route of the page, the part of the url after /dashboard/{msid}/ (must be unique in the specific application) */
      route?: string;
      /** The name you used to register this component to the ModuleRegistry (must be unique across apps) */
      name?: string;
      /** If there are some experiments that define if this page should be enabled, list of experiment lists with OR relationship between them, experiments should be in business manager scope. */
      enabledByExperiments?: ExperimentGroupWrapper[];
      /** Additional routes to the page */
      routeAliases?: string[];
  }
  /** Specifies config for topology and config data */
  interface AppConfiguration {
      /** A map of topology key to template url */
      topology?: Record<string, string>;
      /** Config section that will be provided to your lazy component and component along with all other properties from business-manager, if your config object will contain topology parameter */
      configData?: Record<string, string>;
  }
  /** Specifes business hosted component configuration */
  interface HostedComponent {
      /** A unique id for the component, maps between the host and name */
      _id?: string;
      /** The component name used in registerComponentWithModuleParams components can be shared by using the same name but a unique id */
      name?: string;
      /** Permissions required for the component, this is not strictly enforced */
      requiredPermission?: string;
      /** Represents the collection of components where the component will be hosted, get this value from the host provider. */
      hostContainerId?: HostContainerId;
      /** If there are some experiments that define if this page should be enabled, list of experiment lists with OR relationship between them, experiments should be in business manager scope */
      enabledByExperiments?: ExperimentGroupWrapper[];
      /** A URI used to send component error events */
      errorReporting?: ErrorReporting;
  }
  enum HostContainerId {
      BUSINESS_MANAGER = "BUSINESS_MANAGER",
      BUSINESS_DASHBOARD_HOST = "BUSINESS_DASHBOARD_HOST",
      SIDEBAR_FOOTER = "SIDEBAR_FOOTER"
  }
  /** Contact Labels Extensions */
  interface ContactLabelsComponentData {
      /** Allow app-defined labels (Check this box to allow apps to create labels in this namespace.) */
      allowAppDefinedLabels?: boolean | null;
      /**
       * Required permissions to manage app-defined labels
       * Only apps with this permission will be able to create labels in this namespace.
       * relevant if allow_app_defined_labels is true
       * (e.g. EMAIL_MARKETING.MANAGE_LABELS)
       */
      permission?: string | null;
      /**
       * Predefined labels
       * These labels exist on all sites that install the app.
       */
      predefinedLabels?: PredefinedLabel[];
  }
  interface PredefinedLabel {
      /**
       * Label key
       * Can contain letters, dashes, or underscores.
       * (e.g. my-label)
       */
      key?: string;
      /**
       * Display Name
       * Human-readable name to be shown on the UI.
       * (e.g. My Label)
       */
      displayName?: string;
  }
  /** A component to be rendered within Widget Slots */
  interface WidgetPluginComponentData {
      /** The ID of the actual widget used that is the Plugin component */
      referenceComponentId?: string;
      /** The APIs implemented by the Plugin's widget */
      pluginInterfaces?: PluginInterface[];
      /** Marketing information about the plugin */
      marketData?: PluginMarketData;
      /** The list of placements where the plugin is allowed to be installed */
      placements?: PluginPlacement[];
      /** Widget plugin installation settings */
      installation?: PluginInstallationSettings;
  }
  /** Marketing information about the plugin */
  interface PluginMarketData {
      /** The name of the Plugin */
      name?: string;
      /** The short description of the Plugin */
      description?: string;
      /** The logo of the Plugin, should be a square image 35 x 35 px in `JPG` or `PNG` format */
      logoUrl?: string | null;
  }
  /** Combination of IDs that uniquely identify a slot in the app component */
  interface PluginPlacement {
      /** Slot app definition ID */
      appDefinitionId?: string;
      /** Slot app component ID */
      widgetId?: string;
      /** Slot ID (a.k.a. Velo role) */
      slotId?: string;
  }
  interface PluginInstallationSettings {
      /** Shared installation settings for unified components */
      base?: BaseInstallation;
  }
  interface CrossSellConfig {
      /** uri for call implementor, could be one of `grpc://<artifact-name>`, `velo://`, `https://` */
      baseUri?: string;
  }
  /** Local Delivery component */
  interface LocalDeliveryComponentData {
      /**
       * URL for the Delivery provider registration web page.
       * The App Instance and Account Id query parameters are attached to the registration URL
       * so that you can identify your account when accessing the vendor api. [learn more](https://devforum.wix.com/en/article/app-instance)
       */
      registrationUrl?: string;
      /**
       * The base URL for all the local delivery api calls.
       * Description of end points and schema can be find in the local delivery documentation.
       */
      apiBaseUri?: string;
  }
  /** Configuration for the payment service SPI implementor */
  interface PaymentServiceProviderConfig {
      /** Payment service provider to display on Accept payments tab in Business manager */
      title?: string;
      /** SPI base url */
      baseUrl?: string;
      /** Available payment methods */
      paymentMethods?: PaymentMethod[];
      /** Provider authentication methods */
      credentialsFields?: PaymentServiceProviderCredentialsField[];
  }
  interface PaymentMethod extends PaymentMethodMethodOneOf {
      /** Information about hosted page payment method */
      hostedPage?: HostedPage;
  }
  /** @oneof */
  interface PaymentMethodMethodOneOf {
      /** Information about hosted page payment method */
      hostedPage?: HostedPage;
  }
  interface HostedPage {
      /** The payment method title to be will be displayed on accept payments tab in business manager as well as on the checkout */
      title?: string;
      /** Url to images in different formats and colors */
      logos?: Logos;
      /** Billing address fields that buyer needs to fill in order to process payment with the specified payment method */
      billingAddressMandatoryFields?: MandatoryField[];
  }
  interface Logos {
      /** white theme logos */
      white?: Color;
      /** colored theme logos */
      colored?: Color;
  }
  interface Color {
      /** URL to SVG image */
      svg?: string;
      /** URL to PNG image */
      png?: string;
  }
  enum MandatoryField {
      ZIPCODE = "ZIPCODE",
      CITY = "CITY",
      STATE = "STATE",
      ADDRESS = "ADDRESS",
      COUNTRY_CODE = "COUNTRY_CODE",
      EMAIL = "EMAIL",
      PHONE = "PHONE",
      FIRST_NAME = "FIRST_NAME",
      LAST_NAME = "LAST_NAME",
      STREET = "STREET",
      HOUSE_NUMBER = "HOUSE_NUMBER",
      TAX_IDENTIFIER = "TAX_IDENTIFIER"
  }
  interface PaymentServiceProviderCredentialsField extends PaymentServiceProviderCredentialsFieldFieldOneOf {
      /** text field */
      simpleField?: SimpleField;
      /** checkbox field */
      checkboxField?: CheckboxField;
      /** dropdown field */
      dropdownField?: DropdownField;
  }
  /** @oneof */
  interface PaymentServiceProviderCredentialsFieldFieldOneOf {
      /** text field */
      simpleField?: SimpleField;
      /** checkbox field */
      checkboxField?: CheckboxField;
      /** dropdown field */
      dropdownField?: DropdownField;
  }
  interface SimpleField {
      /** field name */
      name?: string;
      /** field label */
      label?: string;
  }
  interface CheckboxField {
      /** field name */
      name?: string;
      /** field label */
      label?: string;
      /** field tooltip */
      tooltip?: string | null;
  }
  interface DropdownField {
      /** field name */
      name?: string;
      /** field label */
      label?: string;
      /** specific options */
      options?: DropdownFieldOption[];
  }
  interface DropdownFieldOption {
      /** option key */
      key?: string;
      /** option value */
      value?: string;
  }
  interface MembershipsSPIConfig {
      /** The URL of the SPI implementation */
      deploymentUri?: string;
      catalogAppDefIds?: string[];
  }
  interface LineItemsEnricherConfig {
      /** the base URI where all the methods are deployed. */
      baseUri?: string;
  }
  interface ShippingRatesConfig {
      /**
       * Base URI where the endpoints are called.
       * Wix eCommerce appends the endpoint path to the base URI.
       * For example, to call the Get Shipping Rates endpoint at `https://my-shipping-provider.com/v1/getRates`,
       * the base URI you provide here is `https://my-shipping-provider.com/`.
       */
      deploymentUri?: string;
      /** Human-readable name of the shipping provider. */
      name?: string;
      /** Description of the shipping provider. */
      description?: string | null;
      /** URL to more info about the shipping provider. */
      learnMoreUrl?: string | null;
      /** URL to reach the shipping provider app's dashboard. */
      dashboardUrl?: string | null;
      /** Whether to require the site owner to define a fallback/default rate. Set to `true` if you do not provide rates as part of the integration. */
      fallbackDefinitionMandatory?: boolean;
      /**
       * Thumbnail image of the shipping rates provider. Displayed in the shipping settings section in the Dashboard.
       * The URL must be of an image uploaded to the [Wix Media Manager](https://support.wix.com/en/article/wix-media-uploading-media-to-the-media-manager).
       */
      thumbnailUrl?: string | null;
  }
  interface ShippingLabelCarrierSpiConfig {
      /** the base URI where all the methods are deployed */
      baseUri?: string;
      /** the countries supported to send from */
      originCountries?: string[];
      /** the countries supported to send to */
      destinationCountries?: string[];
      /** the currency of the labels */
      currency?: string;
      /** the measurement system of he labels (Metric or Imperial) */
      measurementSystem?: MeasurementSystem;
      /** does carrier support insurance */
      isInsuranceSupported?: boolean;
      /** preset carrier packages */
      packageTypes?: PackageType[];
  }
  enum MeasurementSystem {
      Metric = "Metric",
      Imperial = "Imperial"
  }
  interface PackageType {
      /** carrier id that can be used to get quotes and purchase */
      _id?: string;
      /** display name of the package (translated) */
      name?: string;
      /** description (translated) */
      description?: string;
      /** the dimensions of the package */
      dimension?: PackageDimension;
      /** image of the package (Optional) */
      image?: Image;
  }
  interface PackageDimension {
      /** width of the package */
      width?: number;
      /** length of the package */
      length?: number;
      /** height of the package (Optional) */
      height?: number | null;
  }
  interface Image {
      /** WixMedia image ID. */
      _id?: string;
      /** Image URL. */
      url?: string;
      /**
       * Original image height.
       * @readonly
       */
      height?: number;
      /**
       * Original image width.
       * @readonly
       */
      width?: number;
      /** Image alt text. Optional. */
      altText?: string | null;
      /**
       * Image URL expiration date (when relevant). Optional
       * @internal
       */
      urlExpirationDate?: Date;
      /** Image filename. Optional. */
      filename?: string | null;
      /**
       * Image size in bytes. Optional.
       * @internal
       */
      sizeInBytes?: string | null;
  }
  /** Restaurants POS component */
  interface RestaurantsPOSComponentData {
      /**
       * URL for the Restaurants POS registration web page.
       * The App Instance and Account Id query parameters are attached to the registration URL
       * so that you can identify your account when accessing the vendor api. [learn more](https://devforum.wix.com/en/article/app-instance)
       */
      registrationUrl?: string;
      /**
       * The base URL for all the Restaurants POS api calls.
       * Description of end points and schema can be find in the Restaurants POS documentation.
       */
      apiBaseUri?: string;
      /** Configuration parameters defining the behavoiur of the catalog sync. */
      catalogSyncConfiguration?: CatalogSyncConfiguration;
  }
  interface CatalogSyncConfiguration {
      /** Whether Menu/Section/Dish availability will be updated on the POS side or on Wix Menus. */
      entityAvailabilityUpdated?: Default;
      /** Whether fulfillment method will be defined on the POS side or on Wix menus. */
      fulfillmentMethodsDefinition?: Default;
      /** Whether Dish images will be updated on the POS side or on Wix Menus. */
      dishImagesUpdated?: Default;
      /** Whether sorting (Menu/Category/Dish/Options) will be done on the POS side (API order) or on Wix Menus. */
      entitySortingControl?: Default;
      /** Whether Labels will be updated on the POS side or on Wix Menus. */
      dishLabelsUpdated?: Default;
      /** whether min/max amount of choices to be set on the POS side or on Wix Menus. */
      dishOptionsMinMaxUpdated?: Default;
      /** Whether Dish in/out of stock will be updated on Wix Menus or retrieved from POS. */
      dishInStockUpdated?: Default;
  }
  enum Default {
      WIX = "WIX",
      POS = "POS"
  }
  interface ShippingProviderConfig {
      /** URI configuration of the deployment */
      deploymentUri?: SpiBaseUri;
      /** User-friendly name of the shipping provider */
      shippingCompanyName?: string;
      /** Cost of making a shipment */
      shippingPrice?: number;
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
  interface AlertEnricherSpiConfiguration {
      deploymentUri?: string;
  }
  /** A component holding schema of Data Extensions */
  interface DataExtensionsComponentData {
      /**
       * Deprecated, use fqdn and schema instead.
       * @internal
       */
      schemas?: Record<string, string>;
      /** FQDN of the entity that the application extends */
      fqdn?: string;
      /** Schema of the extended fields in JSON Schema compatible format */
      schema?: Record<string, any> | null;
  }
  interface GenericHooksConfig {
      /** Hook definitions */
      hooks?: GenericHookConfig[];
  }
  enum HookType {
      UNDEFINED = "UNDEFINED",
      BEFORE_BLOCKING = "BEFORE_BLOCKING",
      BEFORE = "BEFORE",
      AFTER = "AFTER"
  }
  interface GenericHookConfig {
      /** FQN of proto service */
      serviceFqn?: string;
      /** Name of RPC inside given proto service */
      methodName?: string;
      /** An URI, which uniquely identifies the hook for invocation */
      uri?: string;
      /** Type of hook */
      hookType?: HookType;
  }
  interface ActionProviderSPIConfig {
      /** URL to action provider service for this action */
      baseUri?: string;
      /** action SPI configuration */
      actionConfig?: ActionSPIConfig;
  }
  interface ActionSPIConfig {
      /** identifier for this action - human readable action key - unique per app def id */
      actionKey?: string;
      /**
       * The action expects the following input
       * The schema is described according to JSON Schema standard: https://json-schema.org/
       *
       * Example - Add Label to Contact Action input schema:
       * {
       * "$schema": "https://json-schema.org/draft/2020-12/schema",
       * "type": "object",
       * "title": "Add label to contact input schema",
       * "description": "The schema of the json that is sent when invoking this add label to contact action",
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
       * "description": "The Id of the contact to apply the label to",
       * "default": "",
       * "identityType": "contact" // can be contact/visitor/user, limited to 1 type per identity.
       * },
       * "labelId": {
       * "$id": "#/properties/labelId",
       * "type": "string",
       * "format": "uuid",
       * "title": "Label Id",
       * "description": "The Id of label to apply",
       * "default": "",
       * }
       * }
       * }
       */
      inputSchema?: Record<string, any> | null;
      /**
       * The output of the action which will be added to the payload after execution
       * The schema is described according to JSON Schema standard: https://json-schema.org/
       *
       * Example - Output of create task action
       * {
       * "$schema": "https://json-schema.org/draft/2020-12/schema",
       * "type": "object",
       * "title": "Create task action schema",
       * "description": "The schema of the json that is sent when invoking this create task action",
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
       * "description": "The Id of the task created",
       * "default": "",
       * }
       * }
       * }
       */
      outputSchema?: Record<string, any> | null;
      /** actions display name - human readable field. ex. - "Send SMS" */
      displayName?: string | null;
      description?: string | null;
      /** specifies which optional methods were implemented */
      implementedMethods?: ImplementedMethods;
      /**
       * Lets us know if we should wait for the action to complete before executing the next actions or finish and
       * expect a call back in actionCompleted method
       */
      executionType?: ExecutionType;
      metadata?: Metadata;
      /** chosen ui interface for action */
      interfaceConfiguration?: InterfaceConfiguration;
      /** icon representing the action in UI */
      icon?: string;
  }
  enum InterfaceConfigurationType {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      WIDGET_COMPONENT = "WIDGET_COMPONENT",
      GENERIC = "GENERIC"
  }
  interface WidgetComponentOptions {
      /** name of provided component */
      componentName?: string;
  }
  interface GenericOptions {
      /** ui schema */
      uiSchema?: Record<string, any> | null;
  }
  interface ImplementedMethods {
      /** implements ValidateConfiguration */
      validateConfiguration?: boolean;
      /** implements DuplicateInputMapping */
      duplicateInputMapping?: boolean;
      /** implements GenerateApplicationAutomationInputMapping */
      generateApplicationAutomationInputMapping?: boolean;
      /** implements GetQuotaInfo */
      getQuotaInfo?: boolean;
      /** implements OnBeforeSave */
      onBeforeSave?: boolean;
      /** implements OnReset */
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
      /** if the action is hidden from Users in the UI (Wizard) */
      hidden?: boolean;
  }
  interface InterfaceConfiguration extends InterfaceConfigurationOptionsOneOf {
      widgetComponentOptions?: WidgetComponentOptions;
      genericOptions?: GenericOptions;
      /** type of chosen interface */
      type?: InterfaceConfigurationType;
  }
  /** @oneof */
  interface InterfaceConfigurationOptionsOneOf {
      widgetComponentOptions?: WidgetComponentOptions;
      genericOptions?: GenericOptions;
  }
  interface CatalogSPIConfig {
      /** The URL of the SPI implementation */
      deploymentUri?: string;
      /** The enablement and UI configuration for discount of all items in the catalog */
      allItemsDiscount?: DiscountConfig;
      /** The enablement and UI configuration for discount of specific items in the catalog */
      specificItemsDiscount?: DiscountConfig;
  }
  interface DiscountConfig {
      /** Signifies if the discount is  enabled  in the service */
      enabled?: boolean;
      /** The translation key to get the text to display to the user */
      translationKey?: string;
  }
  /** A container (slot) that can be extended by other applications (e.g. widget slot or context menu slot) */
  interface BackOfficeExtensionContainer {
      /** The properties that define this container */
      extendable?: Extendable;
      /**
       * The platform this page is hosted on (e.g. Wix Dashboard)
       * @internal
       */
      hostingPlatform?: BackOfficeHostingPlatforms;
  }
  /** Extensibility properties used by containers (slots) */
  interface Extendable {
      /** Component type allowed in this extendable (enum) */
      extendedBy?: ExtendingComponentType;
  }
  /** Which component types can be extended in containers */
  enum ExtendingComponentType {
      INVALID = "INVALID",
      BACK_OFFICE_MENU_ITEM = "BACK_OFFICE_MENU_ITEM",
      BACK_OFFICE_EXTENSION_WIDGET = "BACK_OFFICE_EXTENSION_WIDGET"
  }
  /** List of back-office hosting platforms */
  enum BackOfficeHostingPlatforms {
      NO_HOSTING_PLATFORM = "NO_HOSTING_PLATFORM",
      /** Site Dashboard (The Wix Dashboard) */
      BUSINESS_MANAGER = "BUSINESS_MANAGER",
      /** User Account Dashboard */
      ACCOUNT_MANAGER = "ACCOUNT_MANAGER",
      /** Internal: Dev center */
      DEV_CENTER = "DEV_CENTER",
      /** Enterprise dashboard (available to enterprise accounts only) */
      ENTERPRISE = "ENTERPRISE",
      /** Partners dashboard (available to partners accounts only) */
      PARTNERS_DASHBOARD = "PARTNERS_DASHBOARD",
      /** Employee only financial support dashboard */
      FINANCIALS_INTERNAL_BO = "FINANCIALS_INTERNAL_BO",
      /** FED Guild POC dashboard */
      FED_GUILD_POC = "FED_GUILD_POC",
      /** Studio dashboard */
      STUDIO_DASHBOARD = "STUDIO_DASHBOARD",
      /** Channels dashboard (available to channels accounts only) */
      CHANNELS = "CHANNELS",
      /** Wix internal dashboard for data tools */
      DATA_TOOLS = "DATA_TOOLS",
      /** Internal back-office for payment service provider management */
      PSP_BACKOFFICE = "PSP_BACKOFFICE",
      /** Rise.ai account dashboard */
      RISE_PLATFORM_ACCOUNT_DASHBOARD = "RISE_PLATFORM_ACCOUNT_DASHBOARD",
      /** Enterprise demo dashboard (available to possible enterprise accounts for demo purposes) */
      DEMO_DASHBOARD_ENTERPRISE = "DEMO_DASHBOARD_ENTERPRISE"
  }
  /**
   * A component that enables extending Wix Dashboard Functionality, as defined by ExtendingComponentType.
   * Currently this supports extending menus and extending widget slots (for Wix apps that expose such menus and slots)
   */
  interface BackOfficeExtension extends BackOfficeExtensionExtensionOneOf {
      /** Data for the widget extension type */
      widget?: LegacyBackOfficeExtensionWidget;
      /** Data for the menu item extension type */
      menuItem?: LegacyBackOfficeMenuItem;
      /** The Identifier of the container that this extension applies to (e.g. Widget slot or menu slot) */
      extends?: string;
      /** The title of the extension, as displayed in Dev Center */
      title?: string;
      /** The description of the extension, as displayed in Dev Center */
      description?: string | null;
      /** The type of this extension (e.g. Widget extension) */
      extensionType?: ExtendingComponentType;
      /** The platform this page is hosted on (e.g. The Wix Dashboard, or Enterprise Dashboard) */
      hostingPlatform?: BackOfficeHostingPlatforms;
      /**
       * Required permission to view the extension.
       * @internal
       */
      requiredPermission?: string;
      /**
       * Sentry error reporting DSN (internal)
       * @internal
       */
      errorReporting?: ErrorReporting;
  }
  /** @oneof */
  interface BackOfficeExtensionExtensionOneOf {
      /** Data for the widget extension type */
      widget?: LegacyBackOfficeExtensionWidget;
      /** Data for the menu item extension type */
      menuItem?: LegacyBackOfficeMenuItem;
  }
  /** The schema of a widget extending a slot exposed in a page in the Wix Dashboard */
  interface LegacyBackOfficeExtensionWidget extends LegacyBackOfficeExtensionWidgetAssetOneOf {
      /** Url of the iframe to render in the widget */
      iframeUrl?: string;
      /**
       * Wix script asset to use in this widget
       * @internal
       */
      scriptAsset?: BackOfficeScriptAsset;
      /** Initial widget width size in pixels while loading, width may be adjusted dynamicaly according to content and/or limited by the container */
      width?: number | null;
      /** Initial widget height size in pixels while loading, height may be adjusted dynamicaly according to content and/or limited by the container */
      height?: number | null;
  }
  /** @oneof */
  interface LegacyBackOfficeExtensionWidgetAssetOneOf {
      /** Url of the iframe to render in the widget */
      iframeUrl?: string;
      /**
       * Wix script asset to use in this widget
       * @internal
       */
      scriptAsset?: BackOfficeScriptAsset;
  }
  /** Internal: Specifications for loading an asset via JS in the back office */
  interface BackOfficeScriptAsset {
      /** The JavaScript file to load */
      url?: string;
      /** Namespacing of the component in the Webpack Module Federation registry */
      containerId?: string;
      /** Key name for the retrieval of the component */
      exportedName?: string;
      /** Optional: What type should by used on <script> tag. */
      scriptType?: BackOfficeScriptAssetType;
  }
  /** Type attribute for the script tag */
  enum BackOfficeScriptAssetType {
      /** Script will be loaded without a type attribute */
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      /** Use "module" as the script type */
      MODULE = "MODULE"
  }
  /** The schema of a menu extension of a slot exposed in a page in the Wix Dashboard */
  interface LegacyBackOfficeMenuItem {
      /**
       * WSR icon identifier. To see the full list: https://www.wix-style-react.com/storybook/?path=/story/foundations-icons--icons
       * Please use the full size key - the icon will be rendered in a small/normal size
       */
      iconKey?: string | null;
      /** The action that will be invoked when clicking on the menu entry */
      action?: Action;
      /** The SubTitle of the menu item */
      subtitle?: string | null;
  }
  /** View modes for how to open a component */
  enum ViewMode {
      /** Opens a page in place of the current page */
      PAGE = "PAGE",
      /** Opens as a Modal over the current page */
      MODAL = "MODAL"
  }
  /** the schema of the data needed to open a component from menu extensions */
  interface OpenComponent {
      /** The component ID that should be opened */
      componentId?: string;
      /** Determines how to open the component in runtime */
      viewMode?: ViewMode;
      /** Query/Search static params for navigation to page or props for modal */
      componentParams?: Record<string, string>;
  }
  /** The schema of an action that is onvoked from menu extensions */
  interface Action {
      /** The configuration and data of the component that is opened upon invocation of this action */
      openComponent?: OpenComponent;
  }
  interface TriggerProviderSPIConfig {
      /**
       * The trigger configuration
       *
       * example of a trigger:
       *
       * {
       * appId: "56cc7843-fdfc-417f-a660-d4af9a2eafe3",
       * triggerKey: "form_submit",
       * displayName: "Visitor submits a form",
       * payloadDataSchema: {
       * "$schema": "http://json-schema.org/draft-07/schema",
       * "type": "object",
       * "title": "Visitor submits a form Payload Schema",
       * "description": "The schema of the payload that is part of the triggered event",
       * "default": {},
       * "examples": [
       * {
       * "formId": "60d2cd50-1047-4164-884d-8c24fbda84bb",
       * "formName": "My Cool Form
       * }
       * ],
       * "properties": {
       * "formId": {
       * "$id": "#/properties/formId",
       * "type": "string",
       * "format": "uuid",
       * "title": "Form ID",
       * "description": "The form identifier",
       * "default": "",
       * "examples": [
       * "60d2cd50-1047-4164-884d-8c24fbda84bb"
       * ]
       * },
       * "formName": {
       * "$id": "#/properties/formName",
       * "type": "string",
       * "title": "Form Name",
       * "description": "The form display name",
       * "default": "",
       * "examples": [
       * "My Form"
       * ]
       * },
       * "contactId": {
       * "$id": "#/properties/contactId",
       * "type": "string",
       * "format": "uuid",
       * "title": "Contact Id",
       * "description": "The Id of the contact which submitted the form",
       * "default": "",
       * "identityType": "contact", // can be contact, visitor, user limited to 1 type per identity,
       * "name": "contact" // friendly name to be used later on, in order to user that person's data "contact.firstName"
       * }
       * },
       * "required": [
       * "formId",
       * "formName",
       * "contactId"
       * ],
       * "additionalProperties": false
       * }
       * }
       */
      triggerConfig?: Record<string, any> | null;
      /** URL to the trigger provider service */
      baseUri?: string;
  }
  interface PreRegisterConfig {
      /** the base URI where all the methods are deployed. */
      baseUri?: string;
  }
  interface ProductsPathsConfig {
      /** implementer's deployment uri */
      deploymentUri?: string;
  }
  interface CustomScopeConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: string;
  }
  interface GiftCardProviderConfig {
      /** The URL of the SPI implementation */
      deploymentUri?: string;
  }
  interface ExternalFilterProviderConfig {
      /** the base URI where all the methods are deployed. E.g */
      baseUri?: string;
  }
  interface RecommendationsProviderConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: string;
      /** app ids of catalogs for which related items can be found */
      catalogAppIds?: string[];
      /** supported algorithms */
      supportedAlgorithms?: AlgorithmConfig[];
  }
  interface AlgorithmConfig {
      /** Algorithm id which will be sent in requests. It must be unique per provider. */
      _id?: string;
      /** Name which will be shown to user in list of algorithms available for site. For example "Best sellers", "Frequently watched together". This value is not translatable. */
      name?: string;
      /** Description of algorithm which will be shown to user in list of algorithms available for site. This value is not translatable. It should describe how algorithm works, if it has any limitations regarding site content, number of items, site traffic and so on. */
      description?: string;
      /** This field can be used when `description ` field is not enough to describe algorithm and you want to have separate section with additional info. It can be used to not overload user with too much information on main page. Depending on frontend implementation it can be displayed as tooltip or as additional section which is collapsed by default. */
      additionalInfo?: string | null;
      /**
       * `RELATED_ITEMS` - algorithm provides recommendations based on some other items interested for user/user of user. For example once one item added to cart algorithm can suggest other items frequently bought together with given one.
       * `GLOBAL` - algorithm provides generic recommendations for given site. For example, best sellers items or new arrivals
       */
      algorithmType?: AlgorithmType;
  }
  enum AlgorithmType {
      UNSPECIFIED = "UNSPECIFIED",
      RELATED_ITEMS = "RELATED_ITEMS",
      GLOBAL = "GLOBAL"
  }
  interface DropshippingProviderSPIConfig {
      /** name of the dropshipping provider was it appears in relevant screens/mails in eComm Platform */
      name?: string;
      /** The URL of the SPI implementation - not needed in this case */
      deploymentUri?: string;
      /** URI for the thumbnail page */
      thumbnailUri?: string;
      /** URI of the dashboard page */
      dashboardUri?: string;
      /** if duplication operation for product is locked */
      duplicateProduct?: LockableOperation;
      /** whether there is a warning or not when price is changed */
      changePrice?: RestrictedOperation;
      /** whether the chagne inventory operations are locked */
      changeInventory?: LockableOperation;
      /** where there is a warning of not when changing options */
      manageOptions?: RestrictedOperation;
  }
  enum LockableOperation {
      /** When operation lockability is not specified */
      UNSPECIFIED_LOCKABLE = "UNSPECIFIED_LOCKABLE",
      /** Operation is locked */
      LOCKED = "LOCKED",
      /** Operation is unlocked */
      UNLOCKED = "UNLOCKED"
  }
  enum RestrictedOperation {
      UNSPECIFIED_RESTRICTED = "UNSPECIFIED_RESTRICTED",
      ALLOW = "ALLOW",
      WARN = "WARN"
  }
  interface InvoicesConfig {
      /** Base URI of spi provider */
      baseUri?: string;
  }
  interface SeoKeywordsSuggestionsSPIConfig {
      /** Base URL of your SEO implementation. Wix sends API requests to endpoints implemented using this URL. */
      baseUri?: string;
      /** URL of the page where users can purchase a paid plan. Wix offers a link to this page when you respond with a value of `false` in quota's `paidPlan` property. */
      upgradeUrl?: string | null;
      /**
       * List of countries you support for SEO analysis.
       * 2-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
       * format.
       */
      supportedCountryCodes?: string[];
      /** Whether there is a quota limit in the service. When set to true, include the quota object in responses. */
      quotaEnabled?: boolean | null;
      /** Your website's landing page. */
      landingPageUrl?: string;
  }
  interface CustomTriggerConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: string;
  }
  interface ContentProviderConfig {
      /** base uri for each implementer */
      deploymentUri?: string;
      /** a human readable name of the provider */
      providerName?: string;
      /** the maximum items allowed to read and update in a single request */
      maximumReadingBulkSize?: number | null;
  }
  /** Automation Component data that is stored in dev center */
  interface ApplicationAutomationComponent {
      /** A rule that contains a trigger & some actions */
      rule?: Rule;
      /** Automation name */
      name?: string | null;
      /** Automation description */
      description?: string | null;
      /** Automation metadata */
      metadata?: AutomationMetadata;
      /** Automation status */
      status?: Status;
  }
  interface Rule {
      /** an event triggered by visitors on a site, or by a site manager (owner & team). */
      trigger?: Trigger;
      /** the actions responding to the trigger happening */
      actions?: ServiceAction[];
  }
  interface Trigger {
      /** the id of the app defining the trigger */
      appId?: string;
      /** Identifier for this trigger - human readable action key */
      triggerKey?: string;
      /** optional list of filters on schema fields */
      filters?: Filter[];
      /**
       * optional - allows to define a trigger whose following actions will be executed only if the same event for the same resource has not in the last X seconds.
       * for example, if the trigger is "session booked", the resource is a contact and the timeframe is 3600 seconds (contact hasn't booked another session in the last hour),
       * then the actions will be executed only if the same event (session booked for that contact) has not happened in the last hour.
       * resource id is sent in runtime via the externalEntityId parameter, ReportEvent method.
       */
      debounce?: Debounce;
  }
  interface Filter {
      /** the filter identifier */
      _id?: string | null;
      /** the field key from the schema, for example "formId" */
      fieldKey?: string;
      /** filter expression that evaluates to a boolean, for example - {{ contains(["guid1","guid2"];formId) }} */
      filterExpression?: string;
  }
  interface Debounce {
      /**
       * Amount of time in seconds to wait for any additional events to occur before triggering the actions.
       * If no additional events occur within the specified time, the actions will be triggered.
       * If additional events occur within the specified time, the timer will be reset.
       */
      timeFrameInSeconds?: number;
      /**
       * The field key in the event payload, which indicates the identifier of the entity/event to debounce on
       * For example: if the trigger is "user logged in", the resource is a contact and the resource key is "contactId",
       * Another example: if the trigger is "visitor logged in", the resource is a visitor and the resource key is "visitorId".
       */
      fieldKey?: string;
  }
  interface ServiceAction {
      /**
       * the id of the action for delayed events
       * @readonly
       */
      _id?: string | null;
      /** the id of the app defining the action */
      appId?: string;
      /** Identifier for this action - human readable action key - unique per app def id */
      actionKey?: string;
      /**
       * input mapping expression for the action inputs
       * for example:
       * `{  "subject": "Thanks for reaching out!"
       * "message": "Hi {{contact.name.first}}, thanks for contacting our business"
       * }`
       * where the value for "contact.name.first" comes from the trigger's payload
       */
      actionConfig?: string;
      /**
       * output mapping expression for the action output
       * for example in get-contact action:
       * `{ "author": "{{$}}" }`
       * This will map the entire entity of contact under `author` namespace
       */
      outputActionConfig?: string | null;
      /** Optional delay configuration for the action */
      delay?: Delay;
      /** allows you define an activation policy - like number of activations in a time frame, or limit by some identifier, like contact (e.g. send email to user only at first login) */
      rateLimit?: RateLimit;
      /** allows the user to define a condition for the action to be executed, if the condition fails the action (and following actions) will not be executed */
      condition?: ActionCondition;
      conditions?: Conditions;
      /** allows the user to define a namespace for the action output */
      namespace?: string | null;
  }
  enum BlockType {
      UNKNOWN = "UNKNOWN",
      OR = "OR",
      AND = "AND"
  }
  interface ConditionBlock {
      type?: BlockType;
      lineExpressions?: string[];
  }
  interface Offset extends OffsetValueOneOf {
      /** A delay in seconds */
      seconds?: number;
      /** The key of the field in the trigger payload which contains a delay, in seconds. */
      delayFieldKey?: string;
  }
  /** @oneof */
  interface OffsetValueOneOf {
      /** A delay in seconds */
      seconds?: number;
      /** The key of the field in the trigger payload which contains a delay, in seconds. */
      delayFieldKey?: string;
  }
  /** calculated as date + delay */
  interface Until {
      /** The key of the field in the trigger payload which contains the date to delay until */
      dateFieldKey?: string;
      /** Optional: a delay to add together with the date described in the payload */
      offset?: Offset;
  }
  interface Delay extends DelayTypeOneOf {
      /** A delay which is calculated based on the immediate time when the action is triggered. */
      for?: Offset;
      /** A delay which is calculated based on a date field in the trigger payload. May also be used together with an Offset delay. */
      until?: Until;
  }
  /** @oneof */
  interface DelayTypeOneOf {
      /** A delay which is calculated based on the immediate time when the action is triggered. */
      for?: Offset;
      /** A delay which is calculated based on a date field in the trigger payload. May also be used together with an Offset delay. */
      until?: Until;
  }
  interface RateLimit {
      /** time frame in minutes */
      timeFrame?: number | null;
      /** number of activations allowed in the given time frame */
      activations?: number;
      /** limit the activation by an entity, for example activate once per contact. example: {{contact.id}} */
      uniqueIdentifierExpression?: string | null;
  }
  interface ActionCondition {
      /**
       * entity object is deprecated due to the new approach to conditions
       * the condition expression, for example - {{and(gt(price;10);lt(price;100))}}
       */
      conditionExpression?: string;
  }
  interface Conditions {
      /** condition evaluates to `true` if either of the blocks evaluate to `true` (aka OR between all) */
      conditionBlocks?: ConditionBlock[];
  }
  interface AutomationMetadata {
      /** Is this Automation hidden on a site? */
      hidden?: boolean;
      /** Can this Automation be deactivated on a site? */
      alwaysActive?: boolean;
      /** Is this Automation's scheduling modification is disabled on a site? */
      schedulingModificationDisabled?: boolean;
      /** Is the removal of this Automation's actions disabled? */
      actionRemovalDisabled?: boolean;
      /** Is conditions editing for this Automation allowed on a site? */
      actionConditionsEditingDisabled?: boolean;
  }
  enum Status {
      ACTIVE = "ACTIVE",
      INACTIVE = "INACTIVE"
  }
  /** Back-office sidebar categories */
  interface BackOfficeSidebarCategory {
      /**
       * The hosting platform of the category
       * @internal
       */
      hostingPlatform?: BackOfficeHostingPlatforms;
      /** Category title, used as sidebar entry label */
      title?: string;
      /** Sidebar order within the app */
      priority?: number;
  }
  /** A page in one of the back-office platforms */
  interface BackOfficePage extends BackOfficePageAssetOneOf {
      iframeUrl?: string;
      /** @internal */
      scriptAsset?: BackOfficeScriptAsset;
      /**
       * The platform this page is hosted on
       * @internal
       */
      hostingPlatform?: BackOfficeHostingPlatforms;
      /** The route of the page, must be a valid URL path, relative to the app namespace or app id */
      routePath?: string;
      /** Routes that redirect to this page, these paths should include the original path including the namespace or app id */
      previousRoutePaths?: string[];
      /** Page title, also used as sidebar entry label */
      title?: string;
      /** False by default, if true, sidebar will be hidden when loading the page */
      fullPage?: boolean;
      /**
       * Required permission to view page. if subject is missing this permission, the page link will be hidden from the sidebar and a "no-permission-page" will be displayed when visiting the route
       * @internal
       */
      requiredPermission?: string;
      /** Optional: category this page belongs to */
      pageCategoryId?: string | null;
      /** Should the page be shown or hidden in the sidebar, by default a link to the page will be shown */
      hideInSidebar?: boolean;
      /** Sidebar order within the category and app, lower priority means the page is earlier, by default priority is 0, meaning newer pages will appear first */
      priority?: number;
      /** Which page is active in sidebar when this page is loaded */
      activeSidebarPageId?: string | null;
      /**
       * Sentry error reporting DSN
       * @internal
       */
      errorReporting?: ErrorReporting;
  }
  /** @oneof */
  interface BackOfficePageAssetOneOf {
      iframeUrl?: string;
      /** @internal */
      scriptAsset?: BackOfficeScriptAsset;
  }
  interface AdditionalFeesSPIConfig {
      /**
       * Base URI where the endpoints are called.
       * Wix eCommerce appends the endpoint path to the base URI.
       * For example, to call the Calculate Additional Fees endpoint at `https://my-additional-fees.com/v1/calculateAdditionalFees`,
       * the base URI you provide here is `https://my-additional-fees.com/`.
       */
      deploymentUri?: string;
      /**
       * If not specified, the cache layer will apply for 5 minutes. Set to "false" to prevent caching, but be aware that this may affect performance. Default: true
       * @internal
       */
      cacheable?: boolean | null;
  }
  /** Describes a notification that can be sent to users */
  interface PingNotificationComponentData {
      /**
       * The ID of a specific version of the notification template.
       * @internal
       */
      templateId?: string;
  }
  interface BookingsPricingProviderConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: string;
      /** User-friendly name of the pricing provider */
      pricingProviderName?: string;
  }
  interface AuthenticatorConfig {
      /** the base URI where all the methods are deployed. */
      baseUri?: string;
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
       * @internal
       */
      requiredSettings?: string[];
      /**
       * Settings that the admin may override.
       * This must be a valid FieldMask with respect to TextFieldSettings as the root object.
       * @internal
       */
      adminConfigurableSettings?: string[];
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
  interface IDPConnectionConfig {
      /** the base URI where all the methods are deployed. */
      baseUri?: string;
      /** Information required from the admin when he will install the app; */
      requiredConfig?: Record<string, string>;
  }
  interface ItemsSelectionProviderConfig {
      /** Base URI which Wix calls to retrieve the selected items. For example, `"deploymentUri": "https://my-items.com"`. */
      deploymentUri?: string;
      /** A unique identifier for the provider. */
      key?: string;
      /** Supported search parameters. */
      searchParams?: SearchParams;
      /** Display data such as provider name and icon. */
      contentData?: ContentData;
      /**
       * Optional additional step taken after the initial item selection.
       * @internal
       */
      additionalStepInfo?: AdditionalStepInfo;
      /** An array of strings representing the Wix UI pages supported by your SPI implementation. If no tags are listed, Wix assumes that the implementation supports all eligible pages. */
      supportedTags?: Tag[];
      /**
       * Optional create new item option, to define a widget that will be opened to create a new item
       * @internal
       */
      createNewItemInfo?: CreateNewItemInfo;
  }
  interface LearnMore {
      /** The url of the learn more link. If you want a dynamic url according to the user locale, you can add {{locale}} variable within the string. */
      url?: string;
      /** Optional link label. */
      label?: string | null;
  }
  interface SearchField {
      /** Supported searchable fields. */
      key?: string;
      /** Item description. */
      description?: string;
  }
  interface FilterInfo extends FilterInfoOptionsOneOf {
      /** Static hardcoded options */
      staticOptions?: StaticFilterOptions;
      /** Key of the filter */
      key?: string;
      /** Optional filter will be shown only for consumers with this tag. Only one filter is allowed per tag. */
      tag?: Tag;
      /** The filter selection type. For now only single selection is available */
      selectionType?: FilterSelectionType;
      /** Filter options type. For now only static options are supported */
      optionsType?: FilterOptionsType;
  }
  /** @oneof */
  interface FilterInfoOptionsOneOf {
      /** Static hardcoded options */
      staticOptions?: StaticFilterOptions;
  }
  enum Tag {
      UNKNOWN_TAG = "UNKNOWN_TAG",
      EMBEDDABLE = "EMBEDDABLE",
      ECOM_EDIT_ORDER = "ECOM_EDIT_ORDER",
      ECOM_CREATE_ORDER = "ECOM_CREATE_ORDER",
      INBOX = "INBOX"
  }
  enum FilterSelectionType {
      UNKNOWN_SELECTION = "UNKNOWN_SELECTION",
      /** Allow to select only a single item */
      SINGLE_SELECTION = "SINGLE_SELECTION"
  }
  enum FilterOptionsType {
      UNKNOWN_FILTER_OPTIONS = "UNKNOWN_FILTER_OPTIONS",
      /** Static hardcoded options */
      STATIC = "STATIC"
  }
  interface StaticFilterOptions {
      /** List of hardcoded options for a filter */
      data?: StaticFilterOption[];
  }
  interface StaticFilterOption {
      /** Title of a filter option */
      label?: string;
      /** Value of a filter option */
      value?: string;
  }
  interface SearchParams {
      /** Supported search parameters. */
      fields?: SearchField[];
      /** Filter for viewing only part of the items. */
      filter?: FilterInfo;
  }
  interface ContentData {
      /** Provider icon. Choose an icon name from the [Wix Design System](https://www.wixdesignsystem.com/). */
      iconKey?: string | null;
      /** Provider name. */
      providerName?: string;
      /** Item title. */
      title?: string;
      /** Button label. */
      button?: string;
      /** Item description. */
      subtitle?: string | null;
      /** Learn more link. */
      learnMore?: LearnMore;
  }
  interface AdditionalStepInfo {
      /** ID of the widget associated with the step. */
      widgetId?: string;
      /** Title of the additional step. */
      title?: string;
      /** Subtitle of the additional step. */
      subtitle?: string | null;
      /** Hide item note if exists when showing selected item on additional step header, default: false. */
      hideItemNote?: boolean | null;
  }
  interface CreateNewItemInfo {
      /** ID of the widget associated with the new item modal. */
      widgetId?: string;
      /**
       * one app (mobile) component id that will be opened to create a new item
       * @internal
       */
      mobileComponentId?: string | null;
      /** Button label for creating a new item */
      buttonText?: string | null;
  }
  interface SyncedProjectsProviderConfig {
      /** URI where the SPI Implementer is deployed */
      baseUri?: string;
      /** The Provider Name */
      providerName?: string;
      /** which project's fields are synced by the provider, and therefore will not be editable through wix portfolio project page. */
      projectSyncedFields?: string[];
  }
  interface CommunicationChannelConfiguration {
      deploymentUri?: string;
      config?: ChannelConfiguration;
  }
  interface ChannelConfiguration extends ChannelConfigurationMessagingConfigOneOf {
      directMessageConfig?: DirectMessageConfig;
      emailMessageConfig?: EmailMessageConfig;
      smsMessageConfig?: SmsMessageConfig;
      /** The type of the communication channel */
      type?: ChannelType;
      /** Specific provider branding parameters for the channel */
      branding?: ChannelBranding;
      /** Conversation initiation definition */
      conversationLimitations?: ConversationLimitations;
  }
  /** @oneof */
  interface ChannelConfigurationMessagingConfigOneOf {
      directMessageConfig?: DirectMessageConfig;
      emailMessageConfig?: EmailMessageConfig;
      smsMessageConfig?: SmsMessageConfig;
  }
  /** The type of the communication channel */
  enum ChannelType {
      UNKNOWN_CHANNEL_TYPE = "UNKNOWN_CHANNEL_TYPE",
      DIRECT_MESSAGING = "DIRECT_MESSAGING",
      EMAIL = "EMAIL",
      SMS = "SMS"
  }
  interface DirectMessageConfig {
      /** When marked as true, there's no need to list the supported types explicitly */
      acceptAllMessageTypes?: boolean;
      /**
       * Direct message types accepted by the provider. only those types will be sent from Wix
       * If all are excepted this field can be left empty and there's no need to explicitly state types
       */
      acceptedMessageTypes?: AcceptedDirectMessageType[];
      /** Elaborates what media types (mime types) and sizes are supported */
      mediaCapabilities?: MediaCapabilities;
  }
  enum AcceptedDirectMessageType {
      TEXT = "TEXT",
      MEDIA = "MEDIA",
      CARD = "CARD",
      ANNOUNCEMENT = "ANNOUNCEMENT",
      FORM = "FORM"
  }
  interface MediaCapabilities {
      /** When marked as true, there's no need to list the supported types explicitly */
      allMediaTypes?: boolean;
      /**
       * List for supported media types
       * If all are excepted this field can be left empty and there's no need to explicitly state types
       */
      supportedMediaTypes?: MediaMimeType[];
      /** Maximum file size in bytes of a single file in a message */
      maxFileSizeInBytes?: number | null;
  }
  /** Mime type for relevant media entities in channels */
  enum MediaMimeType {
      UNKNOWN_MIME_TYPE = "UNKNOWN_MIME_TYPE",
      IMAGE_JPEG = "IMAGE_JPEG",
      IMAGE_PNG = "IMAGE_PNG",
      IMAGE_WEBP = "IMAGE_WEBP",
      VIDEO_MPEG = "VIDEO_MPEG",
      VIDEO_MP4 = "VIDEO_MP4",
      VIDEO_3GP = "VIDEO_3GP",
      AUDIO_AAC = "AUDIO_AAC",
      AUDIO_MP4 = "AUDIO_MP4",
      AUDIO_MPEG = "AUDIO_MPEG",
      AUDIO_OGG = "AUDIO_OGG",
      AUDIO_OPUS = "AUDIO_OPUS",
      APPLICATION_PDF = "APPLICATION_PDF",
      APPLICATION_OCTET_STREAM = "APPLICATION_OCTET_STREAM"
  }
  interface EmailMessageConfig {
      /** Media (Attachment) types accepted by the provider */
      mediaCapabilities?: MediaCapabilities;
      /** Maximum size in bytes of total media items in a message. */
      maxTotalFilesSizeInBytes?: number | null;
  }
  interface SmsMessageConfig {
      /** When marked as true, there's no need to list the supported types explicitly */
      acceptAllMessageTypes?: boolean;
      /** SMS message types accepted by the provider. only those types will be sent from Wix */
      acceptedMessageTypes?: AcceptedSmsMessageType[];
      /** Elaborates what media types (mime types) and sizes are supported */
      mediaCapabilities?: MediaCapabilities;
  }
  enum AcceptedSmsMessageType {
      SMS = "SMS",
      MMS = "MMS"
  }
  interface ChannelBranding {
      /** The name of the channel, e.g. `Facebook` / `SMS` */
      displayName?: string;
      /** Name of the channel provider (Wix, Meta, Google) */
      providerName?: string | null;
      /** Relevant brand icons, used when the channel is integrated */
      brandIcons?: BrandIcons;
  }
  /**
   * Brand icons required for correct channel integration
   * todo: 1. which ones are required ?
   * todo: 2. we may need to specify Icons specs (i.e. format and sizes)
   */
  interface BrandIcons {
      default?: ChannelIcon;
      vector?: ChannelIcon;
      bwOutlineVector?: ChannelIcon;
  }
  interface ChannelIcon {
      /** Specific Icon url */
      url?: string | null;
  }
  interface ConversationLimitations {
      /**
       * Defines who can initiate conversation in this channel.
       * If, `CUSTOMER` is selected, this means that only inbound
       * messages can start a conversation (aka business can only reply and not initiate the first communication).
       */
      initDirection?: InitDirection;
  }
  enum InitDirection {
      UNKNOWN_INIT_DIRECTION = "UNKNOWN_INIT_DIRECTION",
      BUSINESS = "BUSINESS",
      CUSTOMER = "CUSTOMER",
      BOTH = "BOTH"
  }
  interface PostLoginConfig {
      /** the base URI where all the methods are deployed. */
      baseUri?: string;
  }
  /** A general widget in one of the back-office platforms */
  interface BackOfficeWidget extends BackOfficeWidgetContentOneOf {
      iframeUrl?: string;
      /** @internal */
      scriptAsset?: BackOfficeScriptAsset;
      /**
       * The platform this widget might be used in
       * @internal
       */
      hostingPlatform?: BackOfficeHostingPlatforms;
      /** Widget title */
      title?: string;
      /**
       * Required permission to view this widget
       * @internal
       */
      requiredPermission?: string;
      /**
       * Sentry error reporting DSN
       * @internal
       */
      errorReporting?: ErrorReporting;
      /** Initial widget width size in pixels while loading, width may be adjusted dynamicaly according to content and/or limited by the container */
      width?: number | null;
      /** Initial widget height size in pixels while loading, height may be adjusted dynamicaly according to content and/or limited by the container */
      height?: number | null;
  }
  /** @oneof */
  interface BackOfficeWidgetContentOneOf {
      iframeUrl?: string;
      /** @internal */
      scriptAsset?: BackOfficeScriptAsset;
  }
  interface SocialMarketingDesignSPIConfig {
      /** The URL of the SPI implementation */
      baseUri?: string;
      /** ID of the provider */
      _id?: string;
      /** Name of the provider */
      name?: string;
      /** URL of the editor */
      editorUrl?: string;
      /** URL of the templates page */
      templatesPageUrl?: string;
      /** Provider's icon, to be displayed in UI */
      iconUrl?: string;
  }
  interface FormSubmissionSpiConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: string;
      /** Configuration of namespaces known by implementer */
      namespaceConfigs?: FormsSubmissionsNamespaceConfig[];
  }
  interface FormsSubmissionsNamespaceConfig {
      /** Namespace name. */
      namespace?: string;
      /** Permissions associated with this namespace. */
      permissions?: FormsPermissions;
      /** Mark new submission as pending by default. */
      pendingByDefault?: boolean;
      /**
       * Allows to disable automatic contact insert/update on contact mapping provided.
       * On manual contact mapping enabled, the implementer is responsible for mapping the submission to a contact.
       * Out of the box GDPR support is not available for unmapped submissions with contact PII fields.
       */
      manualContactMapping?: boolean;
      /** Delete a PENDING submission after X days. */
      deletePendingAfterDays?: number | null;
      /** Enable indexing of submissions for search. */
      indexForSearch?: boolean;
  }
  interface FormsPermissions {
      /** Create permission name */
      create?: string;
      /** Delete permission name */
      delete?: string;
      /** Update permission name */
      update?: string;
      /** Read permission name */
      read?: string;
  }
  /** Redirects to either a page component in the Business Manager or to a wix answers article */
  interface WixOfferingComponentData extends WixOfferingComponentDataOfferingOneOf {
      /** Redirect to a page in the Business Manager */
      businessManagerPage?: BusinessManagerPage;
      /** Redirect to an article with this ID */
      articleGuid?: string;
  }
  /** @oneof */
  interface WixOfferingComponentDataOfferingOneOf {
      /** Redirect to a page in the Business Manager */
      businessManagerPage?: BusinessManagerPage;
      /** Redirect to an article with this ID */
      articleGuid?: string;
  }
  interface BusinessManagerPage {
      /** The ID of the page component to redirect to */
      componentId?: string;
      /** Redirect to this app state */
      appState?: string | null;
      /** Whether to show the regular app page in the App Market instead of redirect to the Business Manager page */
      showRegularAppPage?: boolean;
  }
  /** A component used for testing dev center functionality */
  interface DevCenterTestingComponentData extends DevCenterTestingComponentDataTranslatableOneOfOneOf {
      translatableString?: string;
      translatableOptionalString?: string | null;
      translatableMessageInOneOf?: MessageContainingTranslatables;
      /** Non translatable field */
      nonTranslatable?: string;
      name?: string;
      description?: string | null;
      translationsMap?: Record<string, string>;
      translatableMessage?: MessageContainingTranslatables;
      mapOfTranslatableMessages?: Record<string, MessageContainingTranslatables>;
      baseUri?: string;
      referenceId?: string | null;
      referenceData?: CustomRefData;
      priceMultiplier?: number;
      responsePrefix?: string;
      translatedMessagesWithUniqueField?: TranslatedMessageWithUniqueFieldRepeated[];
      translatedMessagesWithIdField?: TranslatedMessageWithIdRepeated[];
  }
  /** @oneof */
  interface DevCenterTestingComponentDataTranslatableOneOfOneOf {
      translatableString?: string;
      translatableOptionalString?: string | null;
      translatableMessageInOneOf?: MessageContainingTranslatables;
  }
  interface MessageContainingTranslatables {
      messageName?: string;
      messageDescription?: string | null;
      messageTranslationsMap?: Record<string, string>;
  }
  interface CustomRefData {
      title?: string;
      anotherTitle?: string;
  }
  interface TranslatedMessageWithUniqueFieldRepeated {
      uniqueField?: string;
      message?: string;
  }
  interface TranslatedMessageWithIdRepeated {
      _id?: string;
      message?: string;
  }
  /** SPI config - defines the relation between implementer URL and which types it is validates */
  interface ComponentsValidatorConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: string;
      /** Component types that will be validated */
      componentValidationTypes?: ComponentType[];
      /** Indicates whether the validation should affect real production */
      testMode?: boolean;
  }
  interface ComponentTranslationAdditionalFieldsConfig {
      deploymentUri?: string;
  }
  interface FormSchemaSpiConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: string;
      /** Configuration of namespaces known by implementer */
      namespaceConfigs?: FormsSchemaNamespaceConfig[];
  }
  interface FormsSchemaNamespaceConfig {
      /** Namespace name. */
      namespace?: string;
      /** Permissions associated with this namespace. */
      permissions?: FormsPermissions;
      /** Enable client specific form validation for the namespace, more info in ValidateFormSchema. */
      schemaValidationEnabled?: boolean;
      /** Restrictions associated with this namespace. */
      restrictions?: Restrictions;
      /** Enable translations with multilingual */
      multilingualEnabled?: boolean;
  }
  interface Restrictions {
      /** Maximum amount of forms allowed per namespace. */
      maxFormsAmount?: number;
      /** Maximum amount of fields allowed per form. */
      maxFieldsAmount?: number;
  }
  interface ProviderConfig {
      /** The name of the calendar provider. */
      name?: string;
      /** The base URI in which all methods are deployed. */
      baseUri?: string;
      /** The provided calendar type. */
      calendarType?: CalendarType;
      /** Connect methods used to connect to the calendar. */
      connectMethods?: ConnectMethod[];
      /** Whether the sync configuration can be updated. */
      canUpdateSyncConfig?: boolean;
      /** Whether events can be listed from the external calendar to the Wix calendar. */
      listEventFromCalendars?: ListEventFromCalendars;
      /** Whether Wix calendar sessions can be synced to the external calendar. */
      syncToCalendar?: SyncToCalendar;
  }
  enum CalendarType {
      UNDEFINED = "UNDEFINED",
      GOOGLE = "GOOGLE",
      I_CAL = "I_CAL",
      MICROSOFT = "MICROSOFT",
      OTHER = "OTHER"
  }
  enum ConnectMethod {
      OAUTH = "OAUTH",
      CREDENTIALS = "CREDENTIALS"
  }
  enum ListEventFromCalendars {
      /** Listing events from the external calendar is not supported. */
      LIST_NOT_SUPPORTED = "LIST_NOT_SUPPORTED",
      /** Listing events from the primary external calendar only. */
      LIST_FROM_PRIMARY_CALENDAR_ONLY = "LIST_FROM_PRIMARY_CALENDAR_ONLY",
      /**
       * Listing events from specific external calendars.
       * The external calendars can be listed using the `ExternalCalendarProvider.ListCalendars` API.
       */
      LIST_FROM_SPECIFIC_CALENDARS = "LIST_FROM_SPECIFIC_CALENDARS"
  }
  enum SyncToCalendar {
      /** Syncing Wix calendar sessions to the external calendar is not supported. */
      SYNC_NOT_SUPPORTED = "SYNC_NOT_SUPPORTED",
      /** Syncing Wix calendar sessions to the primary external calendar only. */
      SYNC_TO_PRIMARY_CALENDAR_ONLY = "SYNC_TO_PRIMARY_CALENDAR_ONLY",
      /** Syncing Wix calendar sessions to a new external calendar. */
      SYNC_TO_DEDICATED_CALENDAR = "SYNC_TO_DEDICATED_CALENDAR"
  }
  interface DefaultTaxGroupProviderConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: string;
      /** User-friendly name of the tax category */
      taxationCategory?: string;
      additionalCategories?: Record<string, TaxationCategoryProvider>;
  }
  interface TaxationCategoryProvider {
      taxationCategory?: string;
      /** must be a unique GUID for the category */
      taxationCategoryUuid?: string;
  }
  interface DynamicSiteStructureProviderConfig {
      /** URL to dynamic site structure provider service */
      deploymentUri?: string;
  }
  interface HeadlessOAuth {
      /** The Id of the site that uses the component. */
      siteId?: string;
      /** List of domains that will be allowed to be redirected to after a login. */
      allowedDomains?: string[];
      /** Component description. */
      description?: string | null;
      /** login url to automatically redirect users to from wix pages. */
      loginUrl?: string | null;
      /** List of uris that will be allowed to be redirected to after oAuth2 authorization. */
      allowedRedirectUris?: string[];
      /** A flag that indicates whether a user can resolve the app secret. */
      blockSecretGeneration?: boolean;
      /** logout url to automatically invoke when users logout from wix pages. */
      logoutUrl?: string | null;
  }
  interface TaxCalculatorSpiConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: string;
      /** User-friendly name of the tax calculator */
      calculatorDisplayName?: string;
      /** list of countries and boolean represents if its a white list or black list (supported or unsupported countries) */
      taxCountriesConfig?: TaxCountriesConfig;
  }
  interface TaxCountriesConfig {
      /** list of countries */
      countries?: string[];
      /** represents if the calculator supports tax in those countries or not */
      isSupported?: boolean;
  }
  interface CommentModerationProviderConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: string;
      /** List of app ids which moderation implementation supports */
      supportedAppIds?: string[];
  }
  interface GridAppFilesTransformerConfig {
      /** URI where the SPI Implementer is deployed */
      uriConfig?: SpiBaseUri;
      /**
       * Transformation layout which should match to value from
       * [GridAppLayout](https://github.com/wix-private/wix-code/blob/master/editor/wix-code-ide-server-ng/proto/wix/velo/ide/v1/grid_app_layout.proto) enum.
       * The new values should be added via PR.
       */
      layout?: string;
      /** List of paths which requires content transformation to GridApp format */
      filesContentToTransformToGridApp?: string[];
      /** List of paths which requires content transformation to Layout format */
      filesContentToTransformToLayout?: string[];
  }
  interface PolicyConfig {
      /** URI where the SPI Implementer is deployed */
      uriConfig?: SpiBaseUri;
  }
  interface CustomChargesConfig {
      /** implementer's base uri */
      baseUri?: SpiBaseUri;
  }
  interface ValidationsSPIConfig {
      /** Whether to validate the cart page in addition to the checkout page. Default: `false` */
      validateInCart?: boolean;
      /** Base URI which Wix eCommerce will call to retrieve the validation violations. For example, `"deploymentUri": "https://my-validations.com"`. */
      deploymentUri?: string;
  }
  /** SPI config - defines the relation between implementer URL and which types it saves */
  interface ComponentReferenceDataConfig {
      /** URI where the SPI Implementer is deployed */
      baseUri?: SpiBaseUri;
      /** Component types that contains external (reference) data that is NOT saved in DevCenter. */
      supportedComponentTypes?: ComponentType[];
  }
  /** Configuration for ReviewsProductCatalogProvider */
  interface ReviewsProductCatalogProviderConfig {
      /** URI where the SPI Implementer is deployed */
      uriConfig?: SpiBaseUri;
      /** Namespace of catalog provider */
      namespace?: string;
      /** Flag that indicates if verified reviews are enabled */
      isVerifiedReviewsEnabled?: boolean;
  }
  interface SocialMarketingDesignsProviderConfig {
      /** The URL of the SPI implementation */
      baseUri?: string;
      /** Name of the provider */
      name?: string;
      /** Component id (from dev center) of the editor */
      editorComponentId?: string;
      /** Provider's icon, to be displayed in UI */
      iconUrl?: string;
      /** How the Prover should be opened */
      navigationType?: NavigationType;
      /** Is delete design implemented by the provider */
      deleteDesignEnabled?: boolean;
      /** If the provider manages designs */
      manageDesigns?: boolean;
  }
  enum NavigationType {
      NAVIGATE = "NAVIGATE",
      MODAL = "MODAL"
  }
  interface GbpFeatureConfig {
      baseUri?: SpiBaseUri;
  }
  interface CommentFilterProviderConfig {
      /** URI where the SPI Implementer is deployed */
      baseUri?: SpiBaseUri;
      /** List of app ids for which FilterComment should be invoked */
      supportedAppIds?: string[];
  }
  interface TaxIdValidatorConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: SpiBaseUri;
      /** User-friendly name of the tax id validator */
      validationProvider?: string;
      /** Configuration of supported tax types */
      taxTypesConfig?: TaxTypesConfig;
  }
  interface TaxTypesConfig {
      /** List of supported tax types, as provided in ValidateTaxIdRequest and persisted in TaxIdValidationService */
      supportedTaxTypes?: string[];
  }
  /** Describes a setting group of a notification */
  interface PingSettingsGroupComponentData {
      title?: string;
      /** the description of the setting group */
      description?: string | null;
      /** the default state of the setting group */
      state?: PingSettingsGroupComponentDataState;
  }
  enum PingSettingsGroupComponentDataState {
      UNKNOWN_STATE = "UNKNOWN_STATE",
      DEFAULT_ON = "DEFAULT_ON",
      DEFAULT_OFF = "DEFAULT_OFF",
      ALWAYS_ON = "ALWAYS_ON"
  }
  interface FormSpamSubmissionSpiConfig {
      /** URI where the SPI Implementer is deployed */
      baseUri?: SpiBaseUri;
      /** Configuration of namespaces known by implementer */
      namespaceConfigs?: FormsSpamSubmissionsNamespaceConfig[];
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
  /** Editor Addon component */
  interface EditorAddon {
      /** Path to a Javascript file that Editor runs on Addon install */
      editorScriptUrl?: string;
      /** Tool panel configuration */
      toolPanelConfig?: ToolPanelConfig;
      /** Information to display in Addons Market */
      marketData?: AddonMarketData;
  }
  interface InitialPosition {
      /** Offset from left */
      x?: string;
      /** Offset from top */
      y?: string;
  }
  interface ToolPanelConfig {
      /** Iframe URL for the Addon tool panel */
      url?: string;
      /** Addon tool panel width */
      width?: string;
      /** Addon tool panel height */
      height?: string;
      /** Initial position of the opened panel (offset from top left corner) */
      initialPosition?: InitialPosition;
  }
  interface AddonMarketData {
      /** The name of the Addon */
      name?: string;
      /** The short description of the Addon */
      description?: string;
      /** The icon of the Addon, should be a square image 36x36 px in `JPG` or `PNG` format */
      iconUrl?: string | null;
      /** Author's name */
      author?: string;
  }
  interface ExternalDatabaseSpiConfig {
      /** The URI where the service provider is deployed. */
      uriConfig?: SpiBaseUri;
      /** The namespace of the external database. This can be used to access collections within the database, for example `namespace/collectionId`. */
      namespace?: string;
      /**
       * Indicates if database is managed by WIX.
       * @internal
       */
      databaseManagedByWix?: boolean | null;
  }
  interface PaymentSettingsSPIConfig {
      /** Required. Base URI which Wix eCommerce will call to retrieve the payment settings. For example, `"deploymentUri": "https://my-payment-settings.com"`. */
      deploymentUri?: string;
      /** The fallback value which will be used for 'requires_3d_secure' in case of a failure of the SPI call. Default: `false` */
      fallbackValueForRequires3dSecure?: boolean;
  }
  /** Describes topic of a notification */
  interface NotificationTopic {
      /** the description of the topic */
      description?: string | null;
      /** the default state of the topic */
      state?: State;
      /** the type of the topic */
      type?: NotificationTopicType;
  }
  enum State {
      UNKNOWN_STATE = "UNKNOWN_STATE",
      DEFAULT_ON = "DEFAULT_ON",
      DEFAULT_OFF = "DEFAULT_OFF",
      ALWAYS_ON = "ALWAYS_ON"
  }
  enum NotificationTopicType {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      PROMOTIONAL = "PROMOTIONAL",
      TRANSACTIONAL = "TRANSACTIONAL"
  }
  interface NotificationPreferencesFilterConfig {
      /** the base URI where all the methods are deployed. E.g. "https://golden-coupons.com/wix-provider" */
      baseUri?: SpiBaseUri;
  }
  /** This config provides details of the resource types that are managed by an app implementing this component SPI. */
  interface BookingsResourceTypesProviderConfig {
      /** References of the resource types that are managed by the app that implements this component SPI. */
      bookingsResourceTypes?: BookingsResourceType[];
  }
  interface BookingsResourceType {
      /** The ID of the resource type. Must be a GUID that is unique within the app. */
      _id?: string | null;
      /** The name of the resource type. This can be any string, such as 'staff' or 'table'. */
      name?: string | null;
  }
  interface PricingPlansFormConfiguration {
      /** "Plan preview" section configuration. */
      planPreview?: PlanFormPreviewSection;
      /** "Plan info" section configuration */
      infoSection?: PlanFormInfoSection;
      /** "Settings" section configuration */
      settingsSection?: PlanFormPlanSettingsSection;
      /** "Benefits" section configuration */
      benefitsSection?: PlanFormBenefitsSection;
      /** "Pricing options" section configuration */
      pricingAndDurationSection?: PlanFormPricingAndDurationSection;
      /** Custom sections to render inside the form */
      customSections?: PlanFormCustomSection[];
      /**
       * Order, in which sections will be rendered. Can include default section ids or custom section component ids.
       * Visible sections that don't exist in this array will be displayed below others, in default oder.
       */
      sectionOrder?: PlanFormSection[];
      /** Information about custom plan form */
      metadata?: PlanFormTypeMetadata;
      /** "Page permissions" section configuration */
      pagePermissions?: PlanFormPagePermissionsSection;
      /** Initial plan data to prefill in the form */
      initialPlanValue?: PlanFormInitialValue;
      /** Custom form name (e.g., 'bookings-membership'). Should be unique within the app */
      formName?: string;
  }
  interface TextWithTooltip {
      /** Displayed text */
      text?: string;
      /** Tooltip to show next to text */
      tooltip?: TooltipSuffix;
  }
  interface TooltipSuffix {
      /** Tooltip content */
      text?: string;
  }
  interface TextWithSuffix extends TextWithSuffixSuffixOneOf {
      /** Tooltip to show next to the text */
      suffixTooltip?: TooltipSuffix;
      /** Link to show next to the text */
      suffixLink?: LinkSuffix;
      /** Hide element. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Displayed text */
      text?: string;
  }
  /** @oneof */
  interface TextWithSuffixSuffixOneOf {
      /** Tooltip to show next to the text */
      suffixTooltip?: TooltipSuffix;
      /** Link to show next to the text */
      suffixLink?: LinkSuffix;
  }
  interface LinkSuffix {
      /** Hide element. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Link text */
      text?: string;
      /** External url to open on link click */
      url?: string;
      /** Text, passed to click BI event as referral_info field */
      referralInfo?: string;
  }
  interface PreviewCardPlaceholders {
      /** Placeholder plan name for preview, e.g. "Untitled Package" */
      name?: string;
  }
  interface InputWithPlaceholder {
      /** Input label */
      label?: TextWithTooltip;
      /** Input placeholder */
      placeholder?: string;
  }
  interface CoverImageConfiguration {
      /** Hide cover image input. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Cover image input label */
      label?: TextWithTooltip;
  }
  interface PerksConfiguration {
      /** Hide Perks subsection. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Perks subsection title */
      title?: TextWithTooltip;
      /** Perks input placeholder */
      placeholder?: string;
  }
  interface CheckboxConfiguration {
      /** "Policy agreement checkbox" input label */
      label?: string;
      /** "Policy checkbox" toggle configuration */
      acceptRequiredToggle?: TextWithTooltip;
      /** "Checked by default" toggle configuration */
      acceptedByDefaultToggle?: TextWithTooltip;
  }
  interface PreviewConfiguration {
      /** Preview card title */
      title?: string;
      /** Preview card subtitle */
      subtitle?: string;
      /** Label for checkbox in preview */
      checkboxLabel?: string;
      /** Text for "Buy now" in preview */
      buttonText?: string;
  }
  interface TermsModalConfiguration {
      /** Modal title */
      title?: string;
      /** Modal subtitle */
      subtitle?: string;
      /** "Save" button text */
      primaryButtonText?: string;
      /** "Cancel" button text */
      secondaryButtonText?: string;
      /** "Terms and conditions" input configuration */
      input?: InputWithPlaceholder;
      /** "Policy agreement checkbox" input configuratino */
      checkbox?: CheckboxConfiguration;
      /** Terms and conditions preview configuration */
      preview?: PreviewConfiguration;
      /** Modal footer text */
      footer?: string;
  }
  interface ThankYouPageInputConfig {
      /** Hide input. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Label config */
      label?: TextWithTooltip;
  }
  interface ThankYouPageRedirectsConfiguration {
      /** Hide "Redirects". If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** "Redirects" field label */
      label?: TextWithTooltip;
      /** "Homde Page" option label */
      homePageOption?: string;
      /** "Other Page" option label */
      redirectUrlOption?: string;
  }
  interface ThankYouPagePreviewConfiguration {
      /** Preview card title */
      title?: string;
      /** Preview card subtitle */
      subtitle?: string;
  }
  interface ThankYouPageModalConfiguration {
      /** Modal title */
      title?: string;
      /** Modal subtitle */
      subtitle?: TextWithSuffix;
      /** "Save" button text */
      primaryButtonText?: string;
      /** "Cancel" button text */
      secondaryButtonText?: string;
      /** "Reset to default" button text */
      resetButtonText?: string;
      /** Thank you page title input configuration */
      titleInput?: ThankYouPageInputConfig;
      /** Thank you page content input configuration */
      messageInput?: ThankYouPageInputConfig;
      /** Thank you page button text input configuration */
      buttonTextInput?: ThankYouPageInputConfig;
      /** Thank you page button action field configuration */
      redirects?: ThankYouPageRedirectsConfiguration;
      /** Thank you page preview configuration */
      preview?: ThankYouPagePreviewConfiguration;
  }
  interface PlanSettingsRowConfiguration {
      /** Hide row. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Row title */
      title?: TextWithTooltip;
      /** Row subtitle */
      subtitle?: TextWithTooltip;
  }
  interface TermsAndConditionsConfiguration {
      /** Hide row. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Row title */
      title?: TextWithTooltip;
      /** Row subtitle */
      subtitle?: TextWithTooltip;
      /** "Plan policies" modal configuration */
      modal?: TermsModalConfiguration;
  }
  interface ThankYouPageConfiguration {
      /** Hide row. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Row title */
      title?: TextWithTooltip;
      /** Row subtitle */
      subtitle?: TextWithTooltip;
      /** "Thank you page" modal configuration */
      modal?: ThankYouPageModalConfiguration;
  }
  interface DurationInputConfiguration {
      /** Duration dropdown label */
      label?: TextWithTooltip;
      /** Duration dropdown placeholder */
      placeholder?: string;
      /** Labels for duration dropdown options */
      renameOptions?: DurationRenameOptions;
  }
  interface DurationRenameOptions {
      /** Text for "Forever" duration option */
      forever?: string;
      /** Text for "Custom" duration option */
      custom?: string;
  }
  interface InputConfiguration {
      /** Input label */
      label?: TextWithTooltip;
  }
  interface SetupFeeConfiguration {
      /** Hide "Setup fee" toggle. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Setup fee toggle label */
      label?: TextWithTooltip;
      /** Setup fee amount input configuration */
      amount?: InputWithPlaceholder;
      /** Setup fee name input configuration */
      name?: InputWithPlaceholder;
  }
  interface FreeTrialConfiguration {
      /** Hide "Free trial" toggle. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Free trial toggle label */
      label?: TextWithTooltip;
      /** Free trial duration dropdown configuration */
      duration?: InputConfiguration;
  }
  interface FreeOptionConfiguration {
      /** Hide free option. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Option title */
      title?: string;
      /** Option subtitle */
      subtitle?: string;
      /** Plan duration dropdown configuration */
      duration?: DurationInputConfiguration;
      /** Custom duration period dropdown configuration */
      customDurationPeriod?: InputConfiguration;
      /** Custom  duration input configuration */
      customDurationInput?: InputConfiguration;
  }
  interface OneTimeOptionConfiguration {
      /** Hide "One-time payment" option. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Option title */
      title?: string;
      /** Option subtitle */
      subtitle?: string;
      /** Plan duration dropdown configuration */
      duration?: DurationInputConfiguration;
      /** Custom duration period dropdown configuration */
      customDurationPeriod?: InputConfiguration;
      /** Custom  duration input configuration */
      customDurationInput?: InputConfiguration;
      /** Price input configuration */
      price?: InputWithPlaceholder;
      /** Setup fee field configuration */
      setupFee?: SetupFeeConfiguration;
  }
  interface RecurringOptionConfiguration {
      /** hide "recurring" option. if set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Option title */
      title?: string;
      /** Option subtitle */
      subtitle?: string;
      /** Plan duration dropdown configuration */
      duration?: DurationInputConfiguration;
      /** Price input configuration */
      price?: InputWithPlaceholder;
      /** Setup fee field configuration */
      setupFee?: SetupFeeConfiguration;
      /** Free trial field configuration */
      freeTrial?: FreeTrialConfiguration;
      /** Frequency dropdown configuration */
      frequency?: InputConfiguration;
      /** Custom frequency input configuration */
      customFrequency?: InputConfiguration;
  }
  enum PlanFormPricingOption {
      UNKNOWN_OPTION = "UNKNOWN_OPTION",
      FREE = "FREE",
      ONE_TIME = "ONE_TIME",
      RECURRING = "RECURRING"
  }
  enum PlanFormDefaultSection {
      UNKNWON_PLAN_FORM_SECTION = "UNKNWON_PLAN_FORM_SECTION",
      INFO = "INFO",
      BENEFITS = "BENEFITS",
      PAGE_PERMISSIONS = "PAGE_PERMISSIONS",
      PRICING_AND_DURATION = "PRICING_AND_DURATION",
      ADVANCED_SETTINGS = "ADVANCED_SETTINGS"
  }
  interface Illustration extends IllustrationIllustrationOneOf {
      /** Custom exported component id to be rendered as illustration */
      componentId?: string;
      /** 96x96 image used in type choice modal */
      src?: string;
  }
  /** @oneof */
  interface IllustrationIllustrationOneOf {
      /** Custom exported component id to be rendered as illustration */
      componentId?: string;
      /** 96x96 image used in type choice modal */
      src?: string;
  }
  interface PlanDuration {
      /** The amount of a duration `unit` in a single payment cycle. */
      count?: number;
      /** Unit of time for the cycle duration. */
      unit?: PlanPeriodUnit;
  }
  /** A predefined basic time unit. */
  enum PlanPeriodUnit {
      UNDEFINED = "UNDEFINED",
      DAY = "DAY",
      WEEK = "WEEK",
      MONTH = "MONTH",
      YEAR = "YEAR"
  }
  interface PlanPriceData {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99) */
      value?: string;
      /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
      currency?: string;
  }
  interface PricingRecurring {
      /** Length of one payment cycle. */
      cycleDuration?: PlanDuration;
      /**
       * Amount of payment cycles this subscription is valid for.
       * `0` for unlimited or until-canceled.
       */
      cycleCount?: number;
  }
  interface PerkValues {
      /** List of perks */
      values?: string[];
  }
  interface PlanPricing extends PlanPricingPricingModelOneOf {
      /** Plan has recurring payments. */
      subscription?: PricingRecurring;
      /** One time payment, plan is valid for the specified duration. */
      singlePaymentForDuration?: PlanDuration;
      /** One time payment, plan is valid until it is canceled. */
      singlePaymentUnlimited?: boolean;
      /** Amount for a single payment (or the whole subscription if it's not a recurring plan) */
      price?: PlanPriceData;
  }
  /** @oneof */
  interface PlanPricingPricingModelOneOf {
      /** Plan has recurring payments. */
      subscription?: PricingRecurring;
      /** One time payment, plan is valid for the specified duration. */
      singlePaymentForDuration?: PlanDuration;
      /** One time payment, plan is valid until it is canceled. */
      singlePaymentUnlimited?: boolean;
  }
  interface PlanFormPreviewSection {
      /** Hide Preview section. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Preview card title */
      title?: TextWithTooltip;
      /** Preview card subtitle */
      subtitle?: TextWithSuffix;
      /** Placeholder overrides for previewed plan */
      placeholders?: PreviewCardPlaceholders;
      /** Stick Preview section to the right while scrolling. Makes rest of the sections narrower. */
      isSticky?: boolean | null;
  }
  interface PlanFormInfoSection {
      /** Hide Info section. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Tooltip title */
      title?: TextWithTooltip;
      /** Tooltip subtitle */
      subtitle?: TextWithSuffix;
      /** Plan name input configuration */
      name?: InputWithPlaceholder;
      /** Plan tagline input configuration */
      tagline?: InputWithPlaceholder;
      /** Plan cover image input configuration */
      coverImage?: CoverImageConfiguration;
      /** Plan perks subsection configuration */
      perks?: PerksConfiguration;
  }
  interface PlanFormPlanSettingsSection {
      /** Hide "Advanced settings" section. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Section title configuration */
      title?: TextWithTooltip;
      /** Section subtitle configuration */
      subtitle?: TextWithSuffix;
      /** Configuration for "Limit to 1 purchase per person" plan setting */
      singlePurchase?: PlanSettingsRowConfiguration;
      /** Configuration for "Allow plan cancellation" plan setting */
      allowCancellation?: PlanSettingsRowConfiguration;
      /** Configuration for "Let people set start date" plan setting */
      customStartDate?: PlanSettingsRowConfiguration;
      /** Configuration for "Add a policy" plan setting */
      termsAndConditions?: TermsAndConditionsConfiguration;
      /** Configuration for "Collect additional info" plan setting */
      customForms?: PlanSettingsRowConfiguration;
      /** Configuration for "Customize a Thank You page" plan setting */
      thankYouPage?: ThankYouPageConfiguration;
  }
  interface PlanFormBenefitsSection {
      /** Hide Benefits section. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Benefits section title */
      title?: TextWithTooltip;
      /** Benefits section subtitle */
      subtitle?: TextWithSuffix;
      /** Suffix link configuration. Rendered at the right side of section header */
      suffix?: LinkSuffix;
      /** Hide specific benefits from section */
      hiddenBenefits?: string[];
  }
  interface PlanFormPricingAndDurationSection {
      /** Hide Pricing and Duration section. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
      /** Section title */
      title?: TextWithTooltip;
      /** Section subtitle */
      subtitle?: TextWithSuffix;
      /** "Free" pricing option configuration */
      freePricingOption?: FreeOptionConfiguration;
      /** "One-time payment" pricing option configuration */
      oneTimeOption?: OneTimeOptionConfiguration;
      /** "Recurring" pricing option configuration */
      recurringOption?: RecurringOptionConfiguration;
      /** Order, in which pricing options should be displayed */
      pricingOptionOrder?: PlanFormPricingOption[];
  }
  interface PlanFormCustomSection {
      /**
       * Id of dashboard extension component.
       * Extensions should have containerId `fb869315-532f-4057-9049-e316f94e192f`
       */
      componentId?: string;
  }
  interface PlanFormSection extends PlanFormSectionSectionOneOf {
      /** Extension component id */
      componentId?: string;
      /** Default section name */
      sectionName?: PlanFormDefaultSection;
  }
  /** @oneof */
  interface PlanFormSectionSectionOneOf {
      /** Extension component id */
      componentId?: string;
      /** Default section name */
      sectionName?: PlanFormDefaultSection;
  }
  interface PlanFormTypeMetadata {
      /** Name of configuration (i.e. plan type). Used in various places. Should be short, but clear */
      title?: string;
      /** Plan type subtitle. Used in type choice modal */
      subtitle?: string;
      /** Longer description of plan type. Used in type choice modal */
      description?: string;
      /** Plan type illustration. Used in type choice modal */
      illustration?: Illustration;
      /** Your business manager module id */
      moduleId?: string;
  }
  interface PlanFormPagePermissionsSection {
      /** Hide "Page permissions" section. If set to `true`, remaining fields will be ignored */
      hide?: boolean;
  }
  interface PlanFormInitialValue {
      /** Plan name */
      name?: string | null;
      /** Plan description */
      description?: string | null;
      /** What is included with this plan (e.g., 1 weekly entrance to a specific class). */
      perks?: PerkValues;
      /** Plan price, payment schedule, and expiration */
      pricing?: PlanPricing;
      /** Whether the plan is public (visible to site visitors and members) */
      public?: boolean | null;
      /**
       * Number of times the same buyer can purchase the plan. Currently limited to support:
       * - Empty value or a value of `0`, meaning no limitation.
       * - Value of `1`, meaning limited to one purchase per buyer.
       */
      maxPurchasesPerBuyer?: number | null;
      /** Whether the buyer can start the plan at a later date */
      allowFutureStartDate?: boolean | null;
      /** Whether the buyer is allowed to cancel their plan */
      buyerCanCancel?: boolean | null;
      /** Any terms and conditions that apply to the plan. This information will be displayed during checkout */
      termsAndConditions?: string | null;
      /** Additional plan data, related to it's display in the client */
      clientData?: Record<string, string>;
  }
  /** Describes user notifications */
  interface UserNotification {
      /** @internal */
      referenceId?: string | null;
      referenceData?: UserNotificationData;
  }
  interface UserNotificationData {
      /**
       * name
       * @internal
       */
      name?: string | null;
      /** description */
      description?: string | null;
      /** topic id */
      topicId?: string | null;
      /** channels */
      channels?: NotificationChannels;
      /** icon */
      icon?: Icon;
      /** intent */
      intent?: Intent;
      /** limiter field */
      limiterField?: LimiterField;
      /** recipient filter */
      recipientFilter?: UserNotificationDataRecipientFilter;
      /** initiator */
      initiator?: UserNotificationDataInitiator;
      /** single deeplink */
      singleDeeplink?: UserNotificationDataDeeplink;
      /** grouped deeplink */
      groupedDeeplink?: UserNotificationDataDeeplink;
      /** context */
      context?: UserNotificationDataContext;
  }
  interface TypedDynamicParam {
      /** name */
      name?: string;
      /** dynamic param type */
      dynamicParamType?: TypedDynamicParamType;
  }
  enum TypedDynamicParamType {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      STRING = "STRING",
      ARRAY = "ARRAY"
  }
  enum UserNotificationDataRecipientFilterType {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      WIX_USERS = "WIX_USERS",
      SITE_CONTRIBUTORS = "SITE_CONTRIBUTORS"
  }
  interface WixUsersData {
      /** id */
      _id?: TypedDynamicParam;
  }
  interface SiteContributorsData {
      permissions?: string[];
  }
  enum InitiatorType {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      WIX_USER = "WIX_USER",
      WIX_APP = "WIX_APP"
  }
  interface WixUserData {
      /** dynamic param name */
      dynamicParamName?: string;
  }
  interface ConstOrDynamicParam extends ConstOrDynamicParamValueOneOf {
      /** dynamic param name */
      dynamicParamName?: string;
      /** constant */
      constant?: string;
  }
  /** @oneof */
  interface ConstOrDynamicParamValueOneOf {
      /** dynamic param name */
      dynamicParamName?: string;
      /** constant */
      constant?: string;
  }
  interface Url {
      constOrDynamicParam?: ConstOrDynamicParam;
  }
  interface BackofficeActionDeeplink {
      /** app ID */
      appId?: string;
      /** params */
      params?: Record<string, ConstOrDynamicParam>;
  }
  enum Level {
      UNKNOWN_LEVEL = "UNKNOWN_LEVEL",
      ACCOUNT = "ACCOUNT",
      USER = "USER",
      SITE = "SITE"
  }
  interface OrderValue {
      /** can be const/dynamicParamName */
      value?: ConstOrDynamicParam;
      /** order */
      order?: number;
  }
  interface NotificationChannels {
      /** email */
      email?: EmailChannel;
      /** feed */
      feed?: FeedChannels;
      /** mobile push */
      mobilePush?: MobilePushChannel;
      /** voice */
      voice?: VoiceChannel;
      /** sms */
      sms?: SmsChannel;
      /** browser push */
      browserPush?: BrowserPushChannel;
      contentMap?: Record<string, string>;
  }
  interface ResponsysEmail {
      /** responsys email */
      responsysTemplate?: string;
  }
  interface VelocityEmail {
      /** velocity module name */
      velocityModuleName?: string;
      /** template file */
      templateFile?: string;
  }
  interface ShoutoutEmail {
      /** template ID */
      templateId?: string;
      /** stream by */
      streamBy?: string;
      /** template msid */
      templateMsid?: string;
  }
  interface EmailTemplateConfig extends EmailTemplateConfigProviderOneOf {
      /** responsys email */
      responsysEmail?: ResponsysEmail;
      /**
       * velocity email
       * @internal
       */
      velocityEmail?: VelocityEmail;
      /**
       * shoutout email
       * @internal
       */
      shoutoutEmail?: ShoutoutEmail;
  }
  /** @oneof */
  interface EmailTemplateConfigProviderOneOf {
      /** responsys email */
      responsysEmail?: ResponsysEmail;
      /**
       * velocity email
       * @internal
       */
      velocityEmail?: VelocityEmail;
      /**
       * shoutout email
       * @internal
       */
      shoutoutEmail?: ShoutoutEmail;
  }
  interface WebFeedContentKeys {
      /** title */
      title?: string | null;
      /** message */
      message?: string | null;
      /** action */
      action?: string | null;
      /** group of two message */
      groupOfTwoMessage?: string | null;
      /** group of many message */
      groupOfManyMessage?: string | null;
      /** group of many action */
      groupOfManyAction?: string | null;
  }
  interface MobileFeedContentKeys {
      /** title */
      title?: string | null;
      /** message */
      message?: string | null;
      /** action */
      action?: string | null;
      /** group of two message */
      groupOfTwoMessage?: string | null;
      /** group of many message */
      groupOfManyMessage?: string | null;
      /** group of many action */
      groupOfManyAction?: string | null;
  }
  interface FeedAggregation {
      /** group key */
      groupKey?: string;
      /** window */
      window?: string;
      /** icon */
      icon?: Icon;
  }
  interface Icon extends IconDataOneOf {
      /** url data */
      urlData?: UrlData;
      /** icon type */
      type?: IconType;
  }
  /** @oneof */
  interface IconDataOneOf {
      /** url data */
      urlData?: UrlData;
  }
  enum IconType {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      URL = "URL",
      SPOUT = "SPOUT",
      INITIATOR = "INITIATOR"
  }
  interface UrlData {
      /** actual url */
      url?: string;
  }
  interface WebFeedChannel {
      /** content_keys */
      contentKeys?: WebFeedContentKeys;
  }
  interface MobileFeedChannel {
      /** content keys */
      contentKeys?: MobileFeedContentKeys;
  }
  interface FeedChannelsConfig {
      /** aggregation */
      aggregation?: FeedAggregation;
  }
  interface SharedPlatformMobilePushConfig {
      /** sound */
      sound?: string;
      /** group key */
      groupKey?: string | null;
      /** ttl */
      ttl?: number | null;
      /** target application */
      targetApplication?: MobileApplication;
  }
  enum MobileApplication {
      UNKNOWN_MOBILE_APPLICATION = "UNKNOWN_MOBILE_APPLICATION",
      OWNER = "OWNER",
      SPACES = "SPACES",
      DINE = "DINE",
      FITNESS = "FITNESS",
      WIX_LIFE = "WIX_LIFE",
      WIX_PARTNERS = "WIX_PARTNERS",
      BRANDED = "BRANDED",
      WIX_STUDIO = "WIX_STUDIO",
      NO_SPECIFIC_TARGET_APP = "NO_SPECIFIC_TARGET_APP"
  }
  interface AndroidMobilePushConfig {
      /** sub group key */
      subGroupKey?: string | null;
      /** style */
      style?: AndroidStyle;
      /** grouped deeplink pattern */
      groupedDeeplinkPattern?: string | null;
      /**
       * os settings category
       * @internal
       */
      osSettingsCategory?: string | null;
  }
  enum AndroidStyle {
      UNKNOWN_ANDROID_STYLE = "UNKNOWN_ANDROID_STYLE",
      BIG_TEXT = "BIG_TEXT",
      MESSAGING = "MESSAGING",
      INBOX = "INBOX"
  }
  interface MobilePushChannelConfig {
      /** shared */
      shared?: SharedPlatformMobilePushConfig;
      /** android */
      android?: AndroidMobilePushConfig;
  }
  interface MobilePushContentKeys {
      /** title */
      title?: string | null;
      /** message */
      message?: string | null;
      /** group of many title */
      groupOfManyTitle?: string | null;
      /** group of many message */
      groupOfManyMessage?: string | null;
      /** master group name override */
      masterGroupNameOverride?: string | null;
  }
  interface ExposureRule extends ExposureRuleRuleOneOf {
      /** boolean experiment exposure rule */
      booleanExperimentExposureRule?: BooleanExperimentExposureRule;
      /** custom experiment exposure rule */
      customExperimentExposureRule?: CustomExperimentExposureRule;
      /** type */
      type?: ExposureRuleType;
  }
  /** @oneof */
  interface ExposureRuleRuleOneOf {
      /** boolean experiment exposure rule */
      booleanExperimentExposureRule?: BooleanExperimentExposureRule;
      /** custom experiment exposure rule */
      customExperimentExposureRule?: CustomExperimentExposureRule;
  }
  enum ExposureRuleType {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      OPEN_TO_ALL = "OPEN_TO_ALL",
      OPEN_TO_NONE = "OPEN_TO_NONE",
      BOOLEAN_EXPERIMENT = "BOOLEAN_EXPERIMENT",
      CUSTOM_EXPERIMENT = "CUSTOM_EXPERIMENT"
  }
  interface BooleanExperimentExposureRule {
      /** spec */
      spec?: string;
  }
  interface CustomExperimentExposureRule {
      /** spec */
      spec?: string;
      /** default value */
      defaultValue?: string;
      /** expected value */
      expectedValue?: string;
  }
  interface VoiceContentKeys {
      /** message */
      message?: string | null;
  }
  interface SmsContentKeys {
      /** message */
      message?: string | null;
  }
  interface BrowserPushContentKeys {
      /** title */
      title?: string | null;
      /** message */
      message?: string | null;
  }
  interface EmailChannel {
      /** config */
      config?: EmailTemplateConfig;
  }
  interface FeedChannels {
      /** web feed */
      webFeed?: WebFeedChannel;
      /** mobile feed */
      mobileFeed?: MobileFeedChannel;
      /** config */
      config?: FeedChannelsConfig;
  }
  interface MobilePushChannel {
      /** config */
      config?: MobilePushChannelConfig;
      /** content_keys */
      contentKeys?: MobilePushContentKeys;
      /**
       * exposure rule
       * @internal
       */
      exposure?: ExposureRule;
  }
  interface VoiceChannel {
      /** content keys */
      contentKeys?: VoiceContentKeys;
  }
  interface SmsChannel {
      /** content_keys */
      contentKeys?: SmsContentKeys;
  }
  interface BrowserPushChannel {
      /** content_keys */
      contentKeys?: BrowserPushContentKeys;
  }
  enum Intent {
      UNKNOWN_INTENT = "UNKNOWN_INTENT",
      MARKETING = "MARKETING",
      TRANSACTIONAL = "TRANSACTIONAL"
  }
  interface LimiterField {
      /** dynamic param name */
      dynamicParamName?: string;
  }
  interface UserNotificationDataRecipientFilter extends UserNotificationDataRecipientFilterDataOneOf {
      /** wix users data */
      wixUsersData?: WixUsersData;
      /** site contributors data */
      siteContributorsData?: SiteContributorsData;
      /** recipient filter type */
      type?: UserNotificationDataRecipientFilterType;
  }
  /** @oneof */
  interface UserNotificationDataRecipientFilterDataOneOf {
      /** wix users data */
      wixUsersData?: WixUsersData;
      /** site contributors data */
      siteContributorsData?: SiteContributorsData;
  }
  interface UserNotificationDataInitiator extends UserNotificationDataInitiatorDataOneOf {
      /** wix user data */
      wixUserData?: WixUserData;
      /** initiator type */
      type?: InitiatorType;
  }
  /** @oneof */
  interface UserNotificationDataInitiatorDataOneOf {
      /** wix user data */
      wixUserData?: WixUserData;
  }
  interface UserNotificationDataDeeplink extends UserNotificationDataDeeplinkOfOneOf {
      /** url */
      url?: Url;
      /**
       * backoffice
       * @internal
       */
      backoffice?: BackofficeActionDeeplink;
      /**
       * account id parameter name
       * @internal
       */
      accountIdParamName?: string | null;
  }
  /** @oneof */
  interface UserNotificationDataDeeplinkOfOneOf {
      /** url */
      url?: Url;
      /**
       * backoffice
       * @internal
       */
      backoffice?: BackofficeActionDeeplink;
  }
  interface UserNotificationDataContext {
      level?: Level;
      /** params */
      params?: Record<string, OrderValue>;
  }
  /** Describes contact notifications */
  interface ContactNotification {
      referenceId?: string | null;
      referenceData?: ContactsNotificationData;
  }
  interface ContactsNotificationData {
      /** name */
      name?: string | null;
      /** description */
      description?: string | null;
      /** topic id */
      topicId?: string | null;
      /** channels */
      channels?: NotificationChannels;
      /** icon */
      icon?: Icon;
      /**
       * intent
       * @internal
       */
      intent?: Intent;
      /** limiter field */
      limiterField?: LimiterField;
      /** recipient filter */
      recipientFilter?: RecipientFilter;
      /** initiator */
      initiator?: Initiator;
      /** single deeplink */
      singleDeeplink?: Deeplink;
      /** grouped deeplink */
      groupedDeeplink?: Deeplink;
      /** context */
      context?: Context;
  }
  enum RecipientFilterType {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      CONTACTS = "CONTACTS"
  }
  interface ContactsData {
      /** id */
      _id?: TypedDynamicParam;
  }
  enum Type {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      CONTACT = "CONTACT",
      SITE_MEMBER = "SITE_MEMBER"
  }
  interface ContactData {
      /** dynamic param name */
      dynamicParamName?: string;
  }
  interface SiteMemberData {
      /** dynamic param name */
      dynamicParamName?: string;
  }
  interface LiveSiteActionDeeplink {
      /** app page ID */
      appPageId?: string | null;
      /** path */
      path?: string | null;
      /** language */
      language?: ConstOrDynamicParam;
      /** hash fragment */
      hashFragment?: ConstOrDynamicParam;
      /** query params */
      queryParams?: Record<string, ConstOrDynamicParam>;
  }
  interface RecipientFilter extends RecipientFilterDataOneOf {
      /** contacts data */
      contactsData?: ContactsData;
      /** recipient filter type */
      type?: RecipientFilterType;
  }
  /** @oneof */
  interface RecipientFilterDataOneOf {
      /** contacts data */
      contactsData?: ContactsData;
  }
  interface Initiator extends InitiatorDataOneOf {
      /** contact data */
      contactData?: ContactData;
      /** site member data */
      siteMemberData?: SiteMemberData;
      /** initiator type */
      type?: Type;
  }
  /** @oneof */
  interface InitiatorDataOneOf {
      /** contact data */
      contactData?: ContactData;
      /** site member data */
      siteMemberData?: SiteMemberData;
  }
  interface Deeplink extends DeeplinkOfOneOf {
      /** url */
      url?: Url;
      /**
       * live site
       * @internal
       */
      liveSite?: LiveSiteActionDeeplink;
  }
  /** @oneof */
  interface DeeplinkOfOneOf {
      /** url */
      url?: Url;
      /**
       * live site
       * @internal
       */
      liveSite?: LiveSiteActionDeeplink;
  }
  interface Context {
      /** params */
      params?: Record<string, OrderValue>;
  }
  interface UnifiedPage {
      /** Base info of component by shared logic of unified components */
      base?: BaseInfo;
      /** Page installation settings; */
      installation?: PageInstallationSettings;
      /** Page replacing options (replacer \ replacing \ none) */
      pageReplace?: PageReplaceOptions;
      /** Content of page */
      content?: PageContent;
  }
  interface PageInstallationSettings {
      /** Shared installation settings for unified components */
      base?: BaseInstallation;
      /** Page installation settings for unified components */
      page?: PageInstallation;
  }
  interface PageInstallation {
      /** slug of the page (last part of url that point to the page) */
      slug?: string;
      /** Should add page to site menu */
      addToSiteMenu?: boolean;
      /** Can page be linked through link panel */
      linkable?: boolean;
  }
  interface PageContent {
      /** Widgets to add as content in page */
      widgets?: WidgetAsContent[];
  }
  interface WidgetAsContent {
      /** GUID of widget to use as content of page */
      widgetGuid?: string;
      /** The preset should be used */
      preset?: MainPresets;
  }
  interface AvailabilityTimeSlotsProviderConfig {
      /** URI where the SPI Implementer is deployed. */
      deploymentUri?: SpiBaseUri;
      /** User-friendly name of the provider. */
      providerName?: string | null;
  }
  interface ProposalEditorProviderConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: SpiBaseUri;
      /** User-friendly name of ProposalEditor provider */
      providerName?: string;
  }
  interface CustomReservationsApprovalConfig {
      /** URI where the SPI Implementer is deployed */
      uriConfig?: SpiBaseUri;
      name?: string;
  }
  interface CommentsContextProviderConfig {
      /** URI where the SPI Implementer is deployed */
      baseUri?: SpiBaseUri;
      /** Comments Environment */
      environment?: Environment;
      /** Feature toggle to indicate if method GetCommentContextResources is implemented */
      toggleResourceProviderEnabled?: boolean;
  }
  enum Environment {
      LIVE_SITE = "LIVE_SITE",
      BUSINESS_MANAGER = "BUSINESS_MANAGER"
  }
  interface FormSpamSubmissionReportSpiConfig {
      /** URI where the SPI Implementer is deployed */
      baseUri?: SpiBaseUri;
      /** Configuration of namespaces known by implementer */
      namespaceConfigs?: FormSpamSubmissionReportsNamespaceConfig[];
  }
  interface FormSpamSubmissionReportsNamespaceConfig {
      /** Namespace name. */
      namespace?: string;
      /** Permissions associated with this namespace. */
      permissions?: FormSpamSubmissionReportPermissions;
  }
  interface FormSpamSubmissionReportPermissions {
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
      /** Report as not spam permission name */
      checkForSpam?: string;
  }
  interface VeloActionConfig {
      baseUri?: SpiBaseUri;
  }
  interface EventTypeProviderConfig {
      /**
       * Reserved.
       * @internal
       */
      baseUri?: SpiBaseUri;
      /**
       * The name of the event type.
       * Must be globally unique.
       */
      eventTypeName?: string;
      /**
       * Whether the events of this type should be hidden from query results if no type filter is provided.
       * Default is false.
       */
      eventTypeHiddenFromQuery?: boolean;
  }
  interface ServiceAvailabilityPolicyProviderConfig {
      /** URI where the SPI Implementer is deployed. */
      deploymentUri?: SpiBaseUri;
      /** User-friendly name of the provider. */
      providerName?: string | null;
  }
  /** a translated sms text sent to UOU */
  interface SmsActionMessage {
      /** sms text */
      body?: string;
  }
  interface BookingPolicyProviderConfig {
      /** URI where the SPI Implementer is deployed. */
      deploymentUri?: SpiBaseUri;
      /** User-friendly name of the provider. */
      providerName?: string | null;
  }
  interface MultiServiceBookingPolicyProviderConfig {
      /** URI where the SPI Implementer is deployed. */
      deploymentUri?: SpiBaseUri;
      /** User-friendly name of the provider. */
      providerName?: string | null;
  }
  interface FormSubmissionSpiExtensionConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: SpiBaseUri;
      /** Namespace names. */
      namespaceConfigs?: FormsSubmissionsExtensionNamespaceConfig[];
  }
  interface FormsSubmissionsExtensionNamespaceConfig {
      /** Targeted namespace, with what submissions should trigger defined methods. */
      namespace?: string;
      /** Enable submission validation. */
      submissionValidationEnabled?: boolean;
  }
  interface AssistantSpiConfig {
      /** The deployment uri of the assistant */
      deploymentUri?: string;
      /** The name of the assistant */
      assistantName?: string;
      /** The expose_benchmark_tests of the assistant */
      exposeBenchmarkTests?: boolean;
      /** The expose_dynamic_knowledge of the assistant */
      exposeDynamicKnowledge?: boolean;
  }
  interface MultilingualTranslationSchema {
      /** @internal */
      referenceId?: string | null;
      /** @internal */
      referenceData?: Schema;
  }
  interface Schema {
      /**
       * Schema ID.
       * @readonly
       */
      _id?: string | null;
      /** (compound key) Schema key. */
      key?: SchemaKey;
      /** A list of unique fields on the entity in the specific language */
      fields?: Record<string, V1SchemaField>;
      /** Fields that will be displayed in content previews (e.g., product name for products). */
      previewFields?: PreviewFields;
      /** Whether the schema is hidden from the site. */
      hidden?: boolean | null;
      /** The name of the schema */
      displayName?: string | null;
      /** Higher level schema, group_by_name will point to an entity of this schema. */
      parentId?: string | null;
      /** @readonly */
      revision?: string | null;
      /** @readonly */
      _createdDate?: Date;
      /** @readonly */
      _updatedDate?: Date;
      /** indicate if the content should be duplicated when the site is cloned */
      duplicateContent?: boolean | null;
  }
  interface SchemaKey {
      /**
       * ID of app that created the schema.
       * @readonly
       */
      appId?: string;
      /** Unique name defined by the creator app, used to distinguish between different entities in the the app domain. */
      entityType?: string;
      /** Scope schema is defined in (Global/Site) */
      scope?: SchemaScope;
  }
  enum SchemaScope {
      UNKNOWN_SCOPE = "UNKNOWN_SCOPE",
      /** Global schema, relevant to all sites */
      GLOBAL = "GLOBAL",
      /** Site schema, relevant to specific site only */
      SITE = "SITE"
  }
  interface V1SchemaField {
      /**
       * Field ID.
       * @readonly
       */
      _id?: string;
      /** Field type. */
      type?: FieldType;
      /** Field descriptive name. */
      displayName?: string | null;
      /** Field semantic grouping */
      groupName?: string | null;
      /** Field minimum length (in case of text field) */
      minLength?: number | null;
      /** Field maximum length (in case text field) */
      maxLength?: number | null;
      /** Field format. If set - must be one of the values of wix.api.format as string (case insensitive) */
      format?: string | null;
      /** Whether the field is hidden from the site. Hidden field constraints (type, min/max length) are still active! */
      hidden?: boolean;
      /** Whether the field is for display only and should not allowed to be translated */
      displayOnly?: boolean;
      /** In cases where the order of the fields holds meaning, use this index */
      index?: number | null;
  }
  enum FieldType {
      /** Undefined field type */
      UNDEFINED_TYPE = "UNDEFINED_TYPE",
      /** Short text TEXT */
      SHORT_TEXT = "SHORT_TEXT",
      /** Long Plain Text TEXT */
      LONG_TEXT = "LONG_TEXT",
      /** Long text including styles, images, links and more... HTML */
      HTML = "HTML",
      /** Wix Rich-Content format RICO */
      RICH_CONTENT = "RICH_CONTENT",
      /** Wix Image media item */
      IMAGE = "IMAGE",
      /** Image URL without metadata */
      IMAGE_LINK = "IMAGE_LINK",
      /** contain an XML representation of an entity or part of it */
      JSON = "JSON",
      /** Wix Video media item */
      VIDEO = "VIDEO",
      /** Wix Document media item */
      DOCUMENT = "DOCUMENT"
  }
  interface PreviewFields {
      /** ID of field representing the schema's title. */
      titleFieldId?: string | null;
      /** ID of field representing the schema's image. */
      imageFieldId?: string | null;
  }
  interface TaxGroupsProviderConfig {
      /** URI where the SPI Implementer is deployed. */
      deploymentUri?: SpiBaseUri;
      /** User-friendly name of the default tax group of this app. (this tax group id is the app's ID) */
      defaultTaxGroup?: string;
      /**
       * Additional tax groups to be added by default when the app is installed, in addition to the primary one.
       * Here you can choose the ID for each group.
       */
      additionalTaxGroups?: Record<string, AdditionalTaxGroup>;
  }
  interface AdditionalTaxGroup {
      /** the name of the additional taxation category */
      name?: string;
      /** must be a unique GUID for the default tax group */
      _id?: string;
  }
  interface TaxCalculationConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: SpiBaseUri;
      /** User-friendly name of the tax calculator */
      calculatorDisplayName?: string;
      /** List of countries that are not supported by this tax calculator. Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
      unsupportedCountries?: string[];
  }
  /** A modal in one of the back-office platforms */
  interface BackOfficeModal extends BackOfficeModalContentOneOf {
      iframeUrl?: string;
      /** @internal */
      scriptAsset?: BackOfficeScriptAsset;
      /** The platform this modal might be used in */
      hostingPlatform?: BackOfficeHostingPlatforms;
      /** Modal title */
      title?: string;
      /**
       * Required permission to view this modal
       * @internal
       */
      requiredPermission?: string;
      /**
       * Sentry error reporting DSN
       * @internal
       */
      errorReporting?: ErrorReporting;
      /** Initial modal width size in pixels while loading, width may be adjusted dynamicaly according to content and/or limited by the container */
      width?: number | null;
      /** Initial modal height size in pixels while loading, height may be adjusted dynamicaly according to content and/or limited by the container */
      height?: number | null;
  }
  /** @oneof */
  interface BackOfficeModalContentOneOf {
      iframeUrl?: string;
      /** @internal */
      scriptAsset?: BackOfficeScriptAsset;
  }
  interface DeploymentPipelineProviderConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentPipelineUri?: SpiBaseUri;
      /** The deployment pipeline implementer id */
      deploymentPipelineId?: string;
  }
  interface CustomElementWidget {
      /** Base info of component by shared logic of unified components */
      base?: BaseInfo;
      /** Unified widget installation settings */
      installation?: WidgetInstallationSettings;
      /** The extension data for this component */
      widgetData?: WidgetData;
      /** The widget's editor behaviors */
      behaviors?: EditorBehaviors;
      /** The size of the widget */
      size?: WidgetSize;
      /** The runtime dependencies array to declare the widget packages. */
      dependencies?: WixDependency[];
  }
  interface WidgetData {
      /** The script url that should render on the widget */
      scriptUrl?: string;
      /** Unique tag name to use in order to connect your JS script to your web component */
      tagName?: string;
      /** Type of JavaScript modularization approach used in the custom element */
      scriptType?: CustomElementScriptType;
  }
  enum CustomElementScriptType {
      NONE = "NONE",
      /** CommonJS modularization approach */
      COMMON_JS = "COMMON_JS",
      /** ES Module modularization approach */
      ES_MODULE = "ES_MODULE"
  }
  interface EditorBehaviors {
      /** The settings behavior definition for the widget */
      settings?: SettingsPanel;
      /** The dashboard behavior definition for the widget */
      dashboard?: Dashboard;
  }
  interface SettingsPanel {
      /** The settings panel URL for this component */
      settingsUrl?: string | null;
  }
  interface Dashboard {
      /** The dashboard page guid for the widget manage of the widget */
      dashboardPageComponentId?: string;
  }
  interface WidgetSize {
      /** define the size of the widget's height */
      height?: WidgetSizeHeight;
      /** define the size of the widget's width */
      width?: Width;
  }
  enum HeightMode {
      UNKNOWN = "UNKNOWN",
      /** Height is calculated by content */
      AUTO = "AUTO",
      /** Height is fixed require size in px */
      FIXED = "FIXED"
  }
  interface WidgetSizeHeight {
      /** Height calculation mode */
      heightMode?: HeightMode;
      /** Default height in pixels */
      defaultHeight?: number;
  }
  interface Width {
      /** Boolean to set stretch, will place the widget stretched to the full width of the container */
      allowStretch?: boolean;
      /** Default width in pixels */
      defaultWidth?: number;
      /** Boolean to set stretch by default on installation, if true will place the widget stretched to the full width of the container */
      stretchByDefault?: boolean;
  }
  /** A component that enables extending Wix dashboard functionality. */
  interface BackOfficeExtensionWidget extends BackOfficeExtensionWidgetAssetOneOf {
      /** Url of the iframe to render in the widget */
      iframeUrl?: string;
      /**
       * Wix script asset to use in this widget
       * @internal
       */
      scriptAsset?: BackOfficeScriptAsset;
      /** The platform this extension is hosted on (e.g. The Wix Dashboard, or Enterprise Dashboard) */
      hostingPlatform?: BackOfficeHostingPlatforms;
      /** The Identifier of the container that this extension applies to */
      extends?: string;
      /** The description of the extension, as displayed in Dev Center */
      description?: string | null;
      /** The title of the extension, as displayed in Dev Center */
      title?: string;
      /**
       * Required permission to view the extension.
       * @internal
       */
      requiredPermission?: string;
      /**
       * Sentry error reporting DSN (internal)
       * @internal
       */
      errorReporting?: ErrorReporting;
      /** Initial widget width size in pixels while loading, width may be adjusted dynamicaly according to content and/or limited by the container */
      width?: number | null;
      /** Initial widget height size in pixels while loading, height may be adjusted dynamicaly according to content and/or limited by the container */
      height?: number | null;
  }
  /** @oneof */
  interface BackOfficeExtensionWidgetAssetOneOf {
      /** Url of the iframe to render in the widget */
      iframeUrl?: string;
      /**
       * Wix script asset to use in this widget
       * @internal
       */
      scriptAsset?: BackOfficeScriptAsset;
  }
  /** A component that enables extending a Wix dashboard menu. */
  interface BackOfficeExtensionMenuItem {
      /** The platform this page is hosted on (e.g. The Wix Dashboard, or Enterprise Dashboard) */
      hostingPlatform?: BackOfficeHostingPlatforms;
      /** The Identifier of the container that this extension applies to */
      extends?: string;
      /** The description of the extension, as displayed in Dev Center */
      description?: string | null;
      /** The title of the extension, as displayed in Dev Center */
      title?: string;
      /** The sub title of the menu item */
      subtitle?: string | null;
      /**
       * WSR icon identifier. To see the full list: https://www.wix-style-react.com/storybook/?path=/story/foundations-icons--icons
       * Please use the full size key - the icon will be rendered in a small/normal size
       */
      iconKey?: string | null;
      /**
       * Required permission to view the extension.
       * @internal
       */
      requiredPermission?: string;
      /**
       * Sentry error reporting DSN (internal)
       * @internal
       */
      errorReporting?: ErrorReporting;
      /** The action that will be invoked when clicking on the menu entry */
      action?: MenuAction;
  }
  interface NavigateToPageAction {
      /** The component ID for the required page */
      pageId?: string;
      /** Relative URL string to append to the base page URL. May include path sements, search params and hash. */
      relativeUrl?: string | null;
  }
  interface OpenModalAction {
      /** The component ID that should be opened */
      componentId?: string;
      /** Parameters for the modal */
      componentParams?: Record<string, string>;
  }
  interface MenuAction extends MenuActionActionOneOf {
      navigateToPage?: NavigateToPageAction;
      openModal?: OpenModalAction;
  }
  /** @oneof */
  interface MenuActionActionOneOf {
      navigateToPage?: NavigateToPageAction;
      openModal?: OpenModalAction;
  }
  /** A component to manage Form composer features and templates */
  interface FormTemplate {
      /** Form template id */
      _id?: string;
      /** Form template version id (guid) */
      versionId?: string;
  }
  /** Describes a setting group of a notification */
  interface NotificationContent {
      single?: SingleContent;
      grouped?: GroupedContent;
  }
  /** notification content */
  interface SingleContent {
      /** title */
      title?: string | null;
      /** message */
      message?: string;
      /** action */
      action?: string | null;
  }
  /** notification content */
  interface GroupedContent {
      /** title */
      title?: string | null;
      /** message */
      message?: string;
      /** action */
      action?: string | null;
  }
  /** Describes topic of a notification */
  interface BroadcastList {
      params?: Param[];
  }
  interface Param {
      _id?: string;
      displayName?: string;
  }
  interface PayoutsProviderConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: SpiBaseUri;
  }
  /** Configuration for ReviewsEntityCatalogProvider */
  interface ReviewsEntityCatalogProviderConfig {
      /** URI where the SPI Implementer is deployed */
      uriConfig?: SpiBaseUri;
      /** Namespace of catalog provider */
      namespace?: string;
      /** Flag that indicates if verified reviews are enabled */
      verifiedReviewsEnabled?: boolean;
  }
  interface VeloPublishPipelineTaskProviderConfig {
      /** URI where the SPI Implementer is deployed */
      baseUri?: SpiBaseUri;
      /** The Velo Task name */
      implementerTaskName?: WixCodePublishTaskName;
  }
  enum WixCodePublishTaskName {
      /** unknown */
      UNKNOWN = "UNKNOWN",
      /** user code bundle */
      USER_CODE_BUNDLE = "USER_CODE_BUNDLE",
      /** exported functions analysis */
      EXPORTED_FUNCTIONS_ANALYSIS = "EXPORTED_FUNCTIONS_ANALYSIS",
      /** imported namespaces analysis */
      IMPORTED_NAMESPACES_ANALYSIS = "IMPORTED_NAMESPACES_ANALYSIS",
      /** page details analysis */
      PAGE_DETAILS_ANALYSIS = "PAGE_DETAILS_ANALYSIS"
  }
  interface FunctionsShopPriceSpiConfig {
      uriConfig?: SpiBaseUri;
  }
  /** A component that describes a Function */
  interface Function {
  }
  enum CreatedBy {
      UNKNOWN = "UNKNOWN",
      BLOCKS = "BLOCKS",
      CLI = "CLI"
  }
  interface GetAdditionalKeysResponse {
      /** The additional keys for the component translation */
      additionalKeys?: Record<string, TranslationData>;
  }
  interface TranslationData {
      /** value of the field in the original component */
      englishValue?: string;
      /** name to be displayed in DevCenter UI */
      displayName?: string;
      /** translation text box type - Short or Long only */
      textType?: TranslatableType;
      /** translation max size */
      textMaxSize?: number | null;
  }
  enum TranslatableType {
      UNDEFINED_TYPE = "UNDEFINED_TYPE",
      SHORT_TEXT = "SHORT_TEXT",
      LONG_TEXT = "LONG_TEXT",
      RICH_TEXT = "RICH_TEXT",
      RICH_CONTENT_EDITOR = "RICH_CONTENT_EDITOR",
      SELECTION = "SELECTION",
      MULTI_SELECTION = "MULTI_SELECTION",
      DOCUMENT = "DOCUMENT",
      IMAGE = "IMAGE",
      VIDEO = "VIDEO",
      IMAGE_LINK = "IMAGE_LINK"
  }
  interface SpiComponentTranslationAdditionalFieldsConfig {
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
  interface SpiContext {
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
  interface GetAdditionalKeysOptions {
      /** components that have been created or have been modified */
      component?: Component;
  }
  
  export { AcceptedDirectMessageType, AcceptedSmsMessageType, Action, ActionCondition, ActionProviderSPIConfig, ActionSPIConfig, AdditionalFeesSPIConfig, AdditionalStepInfo, AdditionalTaxGroup, AddonMarketData, AdminConfigurableTextInput, AlertEnricherSpiConfiguration, AlgorithmConfig, AlgorithmType, AlternativeUri, AndroidMobilePushConfig, AndroidStyle, ApiWidth, AppConfig, AppConfiguration, ApplicationAutomationComponent, AssistantSpiConfig, AuthenticatorConfig, AutomationMetadata, AutomationTrigger, AvailabilityTimeSlotsProviderConfig, BackOfficeExtension, BackOfficeExtensionContainer, BackOfficeExtensionExtensionOneOf, BackOfficeExtensionMenuItem, BackOfficeExtensionWidget, BackOfficeExtensionWidgetAssetOneOf, BackOfficeHostingPlatforms, BackOfficeModal, BackOfficeModalContentOneOf, BackOfficePage, BackOfficePageAssetOneOf, BackOfficeScriptAsset, BackOfficeScriptAssetType, BackOfficeSidebarCategory, BackOfficeWidget, BackOfficeWidgetContentOneOf, BackofficeActionDeeplink, BarAlignment, BarAlignmentSelected, BaseInfo, BaseInstallation, BlockType, BookingPolicyProviderConfig, BookingsPricingProviderConfig, BookingsResourceType, BookingsResourceTypesProviderConfig, BooleanExperimentExposureRule, BrandIcons, BroadcastList, BrowserPushChannel, BrowserPushContentKeys, Bundle, BusinessError, BusinessManagerPage, CalendarType, CatalogSPIConfig, CatalogSyncConfiguration, ChannelBranding, ChannelConfiguration, ChannelConfigurationMessagingConfigOneOf, ChannelIcon, ChannelType, CheckboxConfiguration, CheckboxField, CodePackageComponentData, Color, ColorDefinition, ColorSelectLabeled, ColorSelectLabeledDataOneOf, CommentFilterProviderConfig, CommentModerationProviderConfig, CommentsContextProviderConfig, CommunicationChannelConfiguration, Component, ComponentData, ComponentDataDataOneOf, ComponentModel, ComponentReferenceDataConfig, ComponentTranslationAdditionalFieldsConfig, ComponentType, ComponentsValidatorConfig, Condition, ConditionBlock, Conditions, ConnectMethod, ConstOrDynamicParam, ConstOrDynamicParamValueOneOf, ContactData, ContactLabelsComponentData, ContactNotification, ContactsData, ContactsNotificationData, Container, ContainerDataOneOf, ContentData, ContentProviderConfig, Context, ConversationLimitations, CoverImageConfiguration, CreateNewItemInfo, CreatedBy, CrossSellConfig, CustomChargesConfig, CustomElement, CustomElementConsentCategoryOneOf, CustomElementScriptType, CustomElementWidget, CustomExperimentExposureRule, CustomRefData, CustomReservationsApprovalConfig, CustomScopeConfig, CustomTriggerConfig, DCConfigData, Dashboard, DashboardApplicationData, DashboardButton, DashboardComponentData, DashboardItem, DashboardPlatfromComponentData, DataComponent, DataExtensionsComponentData, Debounce, Deeplink, DeeplinkOfOneOf, Default, DefaultTaxGroupProviderConfig, DefaultTextStyle, Delay, DelayTypeOneOf, DeploymentPipelineProviderConfig, DevCenterTestingComponentData, DevCenterTestingComponentDataTranslatableOneOfOneOf, DirectMessageConfig, DiscountConfig, DisplayProperties, DisplayValue, Docking, DockingProperties, DrillInListItem, DrillItem, DrillItemDataOneOf, DropDownLabeled, DropdownField, DropdownFieldOption, DropshippingProviderSPIConfig, DurationInputConfiguration, DurationRenameOptions, DynamicSiteStructureProviderConfig, EditorAddon, EditorBehaviors, EditorPresence, ElementType, EmailChannel, EmailMessageConfig, EmailTemplateConfig, EmailTemplateConfigProviderOneOf, EmbedCategory, EmbeddedScriptComponentData, EmbeddedScriptPages, EmbeddedScriptPlacement, Environment, ErrorReporting, ErrorReportingArtifact, EventTypeProviderConfig, ExecutionType, ExpectedInputs, ExperimentGroupWrapper, Exposure, ExposureRule, ExposureRuleRuleOneOf, ExposureRuleType, Extendable, ExtendingComponentType, ExtensionData, ExtensionType, ExternalDatabaseSpiConfig, ExternalFilterProviderConfig, FeedAggregation, FeedChannels, FeedChannelsConfig, FieldType, Filter, FilterInfo, FilterInfoOptionsOneOf, FilterOptionsType, FilterSelectionType, FixedPositionOptions, FontDefinition, FontFamilyWithColorPicker, FormSchemaSpiConfig, FormSpamSubmissionReportPermissions, FormSpamSubmissionReportSpiConfig, FormSpamSubmissionReportsNamespaceConfig, FormSpamSubmissionSpiConfig, FormSubmissionSpiConfig, FormSubmissionSpiExtensionConfig, FormTemplate, FormsPermissions, FormsSchemaNamespaceConfig, FormsSpamSubmissionsNamespaceConfig, FormsSubmissionsExtensionNamespaceConfig, FormsSubmissionsNamespaceConfig, FreeOptionConfiguration, FreeTrialConfiguration, Function, FunctionsShopPriceSpiConfig, GbpFeatureConfig, GenericHookConfig, GenericHooksConfig, GenericOptions, GetAdditionalKeysOptions, GetAdditionalKeysRequest, GetAdditionalKeysResponse, GiftCardProviderConfig, GridAppFilesTransformerConfig, GroupedContent, HeadlessOAuth, Height, HeightMode, HookType, HorizontalDocking, HostContainerId, HostedComponent, HostedPage, IDPConnectionConfig, Icon, IconDataOneOf, IconType, IdentificationData, IdentificationDataIdOneOf, IdentityType, Illustration, IllustrationIllustrationOneOf, Image, ImplementedMethods, InitDirection, InitialPosition, Initiator, InitiatorDataOneOf, InitiatorType, InputConfiguration, InputWithPlaceholder, InstallPage, InstallationSettings, InstallationSettingsOptionsOneOf, Intent, InterfaceConfiguration, InterfaceConfigurationOptionsOneOf, InterfaceConfigurationType, InvoicesActionsComponentData, InvoicesConfig, IsStretched, ItemsSelectionProviderConfig, LearnMore, LegacyBackOfficeExtensionWidget, LegacyBackOfficeExtensionWidgetAssetOneOf, LegacyBackOfficeMenuItem, Level, LightboxOptions, LimiterField, LineItemsEnricherConfig, LinkSuffix, ListEventFromCalendars, LiveSiteActionDeeplink, LocalDeliveryComponentData, LockableOperation, Logos, Main, MainPresets, MainPropsData, MandatoryField, Margins, MeasurementSystem, MediaCapabilities, MediaMimeType, MembershipsSPIConfig, MenuAction, MenuActionActionOneOf, MessageContainingTranslatables, Metadata, MobileApplication, MobileFeedChannel, MobileFeedContentKeys, MobilePushChannel, MobilePushChannelConfig, MobilePushContentKeys, MultiServiceBookingPolicyProviderConfig, MultilingualTranslationSchema, MultipleDashboardsComponentData, NavigateToPageAction, NavigationType, NestedWidgets, NotificationChannels, NotificationContent, NotificationPreferencesFilterConfig, NotificationTopic, NotificationTopicType, Offset, OffsetValueOneOf, OneTimeOptionConfiguration, OpenComponent, OpenModalAction, OrderValue, OutOfIframeData, PackageDimension, PackageType, Padding, PageComponentData, PageContent, PageDashboardApplicationComponent, PageInstallation, PageInstallationSettings, PageOptions, PageOutOfIframeComponentData, PageReplace, PageReplaceOptions, PageReplaceOptionsOptionsOneOf, Param, PartialPaymentRestriction, PaymentMethod, PaymentMethodMethodOneOf, PaymentServiceProviderConfig, PaymentServiceProviderCredentialsField, PaymentServiceProviderCredentialsFieldFieldOneOf, PaymentSettingsSPIConfig, PaymentsGatewayComponentData, PayoutsProviderConfig, PerkValues, PerksConfiguration, PingNotificationComponentData, PingSettingsGroupComponentData, PingSettingsGroupComponentDataState, PlanDuration, PlanFormBenefitsSection, PlanFormCustomSection, PlanFormDefaultSection, PlanFormInfoSection, PlanFormInitialValue, PlanFormPagePermissionsSection, PlanFormPlanSettingsSection, PlanFormPreviewSection, PlanFormPricingAndDurationSection, PlanFormPricingOption, PlanFormSection, PlanFormSectionSectionOneOf, PlanFormTypeMetadata, PlanPeriodUnit, PlanPriceData, PlanPricing, PlanPricingPricingModelOneOf, PlanSettingsRowConfiguration, PlatfromComponentData, PluginInstallationSettings, PluginInterface, PluginMarketData, PluginPlacement, PolicyConfig, Position, PostLoginConfig, PreRegisterConfig, PredefinedExpectedInput, PredefinedExpectedInputConfiguration, PredefinedExpectedInputConfigurationTypeOneOf, PredefinedLabel, PresetEditorPresence, PresetInfo, PresetSize, PreviewCardPlaceholders, PreviewConfiguration, PreviewFields, PricingPlansFormConfiguration, PricingRecurring, Primitive, PrimitiveType, ProductsPathsConfig, ProposalEditorProviderConfig, ProviderConfig, RadioButtonLabeled, RateLimit, RecipientFilter, RecipientFilterDataOneOf, RecipientFilterType, RecommendationsProviderConfig, RecurringOptionConfiguration, Region, RegionType, ReplaceableOptions, ReplacementType, ReplacingOptions, ResetButton, ResponsysEmail, RestaurantsPOSComponentData, RestrictedOperation, Restrictions, ReviewsEntityCatalogProviderConfig, ReviewsProductCatalogProviderConfig, RichTextWithIllustrationVertical, Rule, Schema, SchemaConfig, SchemaField, SchemaFieldType, SchemaFieldTypeFieldTypeOneOf, SchemaKey, SchemaScope, ScriptType, SearchField, SearchParams, Section, SeoKeywordsSuggestionsSPIConfig, ServiceAction, ServiceAvailabilityPolicyProviderConfig, Settings, SettingsPanel, SettingsUrl, SetupFeeConfiguration, SharedPlatformMobilePushConfig, ShippingLabelCarrierSpiConfig, ShippingProviderConfig, ShippingRatesConfig, ShoutoutEmail, Simple, SimpleField, SimpleType, SingleContent, SingleKeyCondition, SiteConfig, SiteContributorsData, SiteMemberData, Size, SliderLabeled, Slot, SmsActionMessage, SmsChannel, SmsContentKeys, SmsMessageConfig, SnippetSolutionData, SocialMarketingDesignSPIConfig, SocialMarketingDesignsProviderConfig, SpamSubmissionPermissions, SpiBaseUri, SpiComponentTranslationAdditionalFieldsConfig, SpiContext, State, StaticFileComponentData, StaticFilterOption, StaticFilterOptions, Status, StudioComponentData, StudioWidgetComponentData, StudioWidgetVariation, SubPage, SyncToCalendar, SyncedProjectsProviderConfig, Tab, Tag, TaxCalculationConfig, TaxCalculatorSpiConfig, TaxCountriesConfig, TaxGroupsProviderConfig, TaxIdValidatorConfig, TaxTypesConfig, TaxationCategoryProvider, TemplateDefaultColor, TermsAndConditionsConfiguration, TermsModalConfiguration, TextInputDisplayType, TextInputLabeled, TextInputSettings, TextStyle, TextStyleDefaultColorOneOf, TextWithSuffix, TextWithSuffixSuffixOneOf, TextWithTooltip, ThankYouPageConfiguration, ThankYouPageInputConfig, ThankYouPageModalConfiguration, ThankYouPagePreviewConfiguration, ThankYouPageRedirectsConfiguration, ThumbnailData, Thumbnails, ThumbnailsSize, ToggleLabeled, ToolPanelConfig, TooltipSuffix, TranslatableType, TranslatedMessageWithIdRepeated, TranslatedMessageWithUniqueFieldRepeated, TranslationData, Trigger, TriggerProviderSPIConfig, Type, TypedDynamicParam, TypedDynamicParamType, UnifiedPage, UnitType, Until, Url, UrlData, UserNotification, UserNotificationData, UserNotificationDataContext, UserNotificationDataDeeplink, UserNotificationDataDeeplinkOfOneOf, UserNotificationDataInitiator, UserNotificationDataInitiatorDataOneOf, UserNotificationDataRecipientFilter, UserNotificationDataRecipientFilterDataOneOf, UserNotificationDataRecipientFilterType, V1SchemaField, ValidationsSPIConfig, VeloActionConfig, VeloPublishPipelineTaskProviderConfig, VelocityEmail, VerticalDocking, ViewMode, VoiceChannel, VoiceContentKeys, WebComponentData, WebFeedChannel, WebFeedContentKeys, WidgetAsContent, WidgetBehavior, WidgetComponentData, WidgetComponentOptions, WidgetData, WidgetDetails, WidgetDisplay, WidgetHorizontal, WidgetInstallation, WidgetInstallationSettings, WidgetOutOfIframeComponentData, WidgetPluginComponentData, WidgetSize, WidgetSizeHeight, WidgetVertical, WidgetWidthType, Width, WixCodePublishTaskName, WixDependency, WixOfferingComponentData, WixOfferingComponentDataOfferingOneOf, WixUserData, WixUsersData, WorkerComponentData, _Date };
}
