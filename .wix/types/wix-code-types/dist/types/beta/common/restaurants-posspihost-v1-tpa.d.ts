declare module "restaurants-posspihost-v1-tpa" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface Tpa {
  }
  interface ListAccountIdsRequest {
  }
  interface ListAccountIdsResponse {
      /** Account IDs with the POS system. */
      accountIds?: string[];
  }
  interface GetConfigurationStatusRequest {
      /** Merchant's account ID with the POS system. */
      accountId: string;
      /** Unique identifier of the merchant's Wix location configuration. */
      configurationId: string;
  }
  interface GetConfigurationStatusResponse {
      /**
       * Status of the configuration.
       * + `NOT_STARTED` - This is the initial status for the configuration. The status is set to `NOT_STARTED` after installing the 3rd party integration app and before the integration app is authenticated.
       * + `PENDING` - The status is set to `PENDING` after authentication but before completing the app's integration for this configuration.
       * + `READY` - Integration for this configuration is completed and the business is ready to activate the integration.
       * + `ERROR` - The integration for this configuration did not complete. An error occurred.
       */
      status?: ConfigurationStatus;
  }
  enum ConfigurationStatus {
      UNKNOWN = "UNKNOWN",
      NOT_STARTED = "NOT_STARTED",
      PENDING = "PENDING",
      READY = "READY",
      ERROR = "ERROR"
  }
  interface SyncCatalogRequest {
      /** Merchant's account ID with the POS system. */
      accountId: string;
      /** Unique identifier of the merchant's Wix location configuration. */
      configurationId: string;
  }
  interface SyncCatalogResponse {
  }
  interface CatalogSyncFailureData {
      errors?: CatalogSyncError[];
  }
  interface CatalogSyncError {
      /**
       * Error code.
       * + `NONE` - No error code available.
       * + `OTHER` - Error doesn't resemble the existing synchronization errors.
       * + `SYSTEM_ERROR` - A system error occurred during synchronization.
       * + `ACCOUNT_NOT_FOUND` - Synchronization failed because the corresponding account with the POS system could not be found.
       * + `ACCOUNT_NOT_AUTHORIZED` - Synchronization failed because the corresponding account with the POS system could was not authorized.
       * + `LOCATION_NOT_FOUND` - Synchronization failed because the corresponding location with the POS system could not be found.
       * + `ACCOUNT_NOT_CONNECTED` - Synchronization failed because the corresponding account with the POS system was not connected successfully.
       * + `ACCOUNT_CONFIGURATION` - Synchronization failed because of a configuration error.
       * + `OVERLOADED_MENU` - Synchronization failed because storage limit was reached.
       */
      code?: Code;
      /** Error message. */
      message?: string;
      /** Error parameters. */
      params?: Record<string, string>;
  }
  enum Code {
      NONE = "NONE",
      OTHER = "OTHER",
      SYSTEM_ERROR = "SYSTEM_ERROR",
      ACCOUNT_NOT_FOUND = "ACCOUNT_NOT_FOUND",
      ACCOUNT_NOT_AUTHORIZED = "ACCOUNT_NOT_AUTHORIZED",
      LOCATION_NOT_FOUND = "LOCATION_NOT_FOUND",
      ACCOUNT_NOT_CONNECTED = "ACCOUNT_NOT_CONNECTED",
      ACCOUNT_CONFIGURATION = "ACCOUNT_CONFIGURATION",
      OVERLOADED_MENU = "OVERLOADED_MENU"
  }
  interface GetCatalogSyncStatusRequest {
      /** Merchant's account ID with the POS system. */
      accountId: string;
      /** Unique identifier of the merchant's Wix location configuration. */
      configurationId: string;
  }
  interface GetCatalogSyncStatusResponse extends GetCatalogSyncStatusResponseStatusModeOneOf {
      /** Additional information available if the catalog (menu) synchronization is in progress. */
      inProgress?: SyncInProgress;
      /** Additional information available if the catalog (menu) synchronization has completed successfully. */
      synced?: SyncSynced;
      /** Additional information available if the catalog (menu) synchronization ended with failure. */
      failed?: SyncFailed;
      /**
       * Status of the catalog (menu) synchronization.
       * + `PENDING` - Synchronization did not yet start.
       * + `IN_PROGRESS` - Synchronization has started.
       * + `SYNCED` - Synchronization completed successfully.
       * + `ERROR` - Synchronization ended with failure.
       */
      status?: Status;
  }
  /** @oneof */
  interface GetCatalogSyncStatusResponseStatusModeOneOf {
      /** Additional information available if the catalog (menu) synchronization is in progress. */
      inProgress?: SyncInProgress;
      /** Additional information available if the catalog (menu) synchronization has completed successfully. */
      synced?: SyncSynced;
      /** Additional information available if the catalog (menu) synchronization ended with failure. */
      failed?: SyncFailed;
  }
  enum Status {
      /** UNKNOWN STATUS. */
      UNKNOWN = "UNKNOWN",
      /** Sync didn't started yet. */
      PENDING = "PENDING",
      /** Sync is in progress. */
      IN_PROGRESS = "IN_PROGRESS",
      /** Sync completed successfully. */
      SYNCED = "SYNCED",
      /** Sync completed with failure. */
      FAILED = "FAILED"
  }
  interface SyncInProgress {
      /** Number of seconds that have elapsed since the catalog (menu) synchronization process started. */
      elapsedSeconds?: number | null;
  }
  interface SyncSynced {
      /** Date and time of the latest catalog (menu) synchronization process. */
      lastSyncDate?: Date;
  }
  interface SyncFailed {
      /** Date and time of the latest sync process. */
      lastSyncDate?: Date;
      /** Date and time of the latest successfully sync process. */
      lastSuccessfullySyncDate?: Date;
      /** Failure reason. */
      reason?: string;
      /**
       * Error code.
       * + `NONE` - No error code available.
       * + `OTHER` - Error doesn't resemble the existing synchronization errors.
       * + `SYSTEM_ERROR` - A system error occurred during synchronization.
       * + `ACCOUNT_NOT_FOUND` - Synchronization failed because the corresponding account with the POS system could not be found.
       * + `ACCOUNT_NOT_AUTHORIZED` - Synchronization failed because the corresponding account with the POS system could was not authorized.
       * + `LOCATION_NOT_FOUND` - Synchronization failed because the corresponding location with the POS system could not be found.
       * + `ACCOUNT_NOT_CONNECTED` - Synchronization failed because the corresponding account with the POS system was not connected successfully.
       * + `ACCOUNT_CONFIGURATION` - Synchronization failed because of a configuration error.
       */
      code?: SyncFailedCode;
      /** Error parameters. */
      params?: Record<string, string>;
  }
  enum SyncFailedCode {
      NONE = "NONE",
      OTHER = "OTHER",
      SYSTEM_ERROR = "SYSTEM_ERROR",
      ACCOUNT_NOT_FOUND = "ACCOUNT_NOT_FOUND",
      ACCOUNT_NOT_AUTHORIZED = "ACCOUNT_NOT_AUTHORIZED",
      LOCATION_NOT_FOUND = "LOCATION_NOT_FOUND",
      ACCOUNT_NOT_CONNECTED = "ACCOUNT_NOT_CONNECTED",
      ACCOUNT_CONFIGURATION = "ACCOUNT_CONFIGURATION",
      OVERLOADED_MENU = "OVERLOADED_MENU"
  }
  interface GetCatalogSyncStatusFailureData {
      errors?: CatalogSyncStatusError[];
  }
  interface CatalogSyncStatusError {
      /**
       * Error code.
       * + `NONE` - No error code available.
       * + `OTHER` - Error doesn't resemble the existing synchronization errors.
       * + `SYSTEM_ERROR` - A system error occurred during synchronization.
       * + `ACCOUNT_NOT_FOUND` - Synchronization failed because the corresponding account with the POS system could not be found.
       * + `ACCOUNT_NOT_AUTHORIZED` - Synchronization failed because the corresponding account with the POS system could was not authorized.
       * + `LOCATION_NOT_FOUND` - Synchronization failed because the corresponding location with the POS system could not be found.
       * + `ACCOUNT_NOT_CONNECTED` - Synchronization failed because the corresponding account with the POS system was not connected successfully.
       * + `ACCOUNT_CONFIGURATION` - Synchronization failed because of a configuration error.
       * + `OVERLOADED_MENU` - Synchronization failed because storage limit was reached.
       */
      code?: CatalogSyncStatusErrorCode;
      /** Error message. */
      message?: string;
      /** Error parameters. */
      params?: Record<string, string>;
  }
  enum CatalogSyncStatusErrorCode {
      NONE = "NONE",
      OTHER = "OTHER",
      SYSTEM_ERROR = "SYSTEM_ERROR",
      ACCOUNT_NOT_FOUND = "ACCOUNT_NOT_FOUND",
      ACCOUNT_NOT_AUTHORIZED = "ACCOUNT_NOT_AUTHORIZED",
      LOCATION_NOT_FOUND = "LOCATION_NOT_FOUND",
      ACCOUNT_NOT_CONNECTED = "ACCOUNT_NOT_CONNECTED",
      ACCOUNT_CONFIGURATION = "ACCOUNT_CONFIGURATION",
      OVERLOADED_MENU = "OVERLOADED_MENU"
  }
  interface CreateOrderRequest {
      /** Merchant's account ID with the POS system. */
      accountId: string;
      /** Unique identifier of the merchant's Wix location configuration. */
      configurationId: string;
      /** Details of the order being created on the Wix site. */
      order?: WixOrder;
      /** Whether the order is being paid by the same payment gateway as the POS. */
      paidByPosGateway?: boolean;
  }
  /** Details of the order being created on the Wix site. */
  interface WixOrder {
      /**
       * Order ID.
       * @readonly
       */
      _id?: string;
      /** Currency of the order. */
      currency?: string | null;
      /** Dishes and options included in the order. */
      lineItems?: LineItem[];
      /** Discounts associated with the order. */
      discounts?: Discount[];
      /** Order fulfillment information. */
      fulfillment?: Fulfillment;
      /** Order payment information. */
      payments?: Payment[];
      /** Customer information. */
      customer?: Customer;
      /** Order totals. */
      totals?: Totals;
      /** Order comment. */
      comment?: string | null;
      /** Amount saved by redeeming a Wix Loyalty reward. */
      loyaltyInfo?: LoyaltyInfo;
  }
  interface LineItem {
      /** Line item quantity. */
      quantity?: number;
      /** Line item price. */
      price?: string;
      /** Comment about the line item added by the customer. */
      comment?: string | null;
      /** List of all dish options available for the line item. */
      dishOptions?: LineItemOption[];
      /** References to the line item’s origin catalog. */
      catalogReference?: CatalogReference;
  }
  interface LineItemOption {
      /** Line item option name. */
      name?: string | null;
      /** List of all dish options selected by the customer. */
      selectedChoices?: LineItem[];
      /** Minimum number of dish options the customer is required to choose. */
      minChoices?: number | null;
      /** Maximum number of dish options the customer is allowed to choose. */
      maxChoices?: number | null;
      /** Dish option type. */
      type?: DisplayType;
      /** List of all available choices for the dish option. */
      availableChoices?: LineItemOptionItem[];
      /** List of dish option IDs selected by default. */
      defaultChoices?: string[] | null;
  }
  enum DisplayType {
      /** DisplayType, due to an error */
      UNSPECIFIED_DISPLAY_TYPE = "UNSPECIFIED_DISPLAY_TYPE",
      /** Single choice selection */
      SELECTION = "SELECTION",
      /** Multiple choices selection */
      EXTRAS = "EXTRAS",
      /** Allow choices removal */
      DESELECTION = "DESELECTION"
  }
  interface LineItemOptionItem {
      /** Line item ID as defined in the catalog. */
      itemId?: string | null;
      /** Line item price. */
      price?: string | null;
      /** Line item name. */
      name?: string | null;
  }
  interface CatalogReference {
      /** Line item ID as defined in the catalog. */
      catalogItemId?: string;
      /**
       * Line item name as defined in the catalog.
       * @readonly
       */
      catalogItemName?: string | null;
      /**
       * Item description as defined in the catalog.
       * @readonly
       */
      catalogItemDescription?: string | null;
      /**
       * Item media url as defined in the catalog.
       * @readonly
       */
      catalogItemMedia?: string | null;
  }
  interface Discount {
      /** Discount ID as defined in the catalog. */
      catalogDiscountId?: string;
      /** Amount saved. */
      appliedAmount?: string;
      /** Discount type. */
      catalogDiscountType?: DiscountType;
      /** Discount name as defined in the catalog. */
      catalogDiscountName?: string;
      /**
       * Discount description as defined in the catalog.
       *
       * Max: 1,000 characters
       * @readonly
       */
      catalogDiscountDescription?: string;
  }
  enum DiscountType {
      UNSPECIFIED_TYPE = "UNSPECIFIED_TYPE",
      OFF_ITEM = "OFF_ITEM",
      OFF_ORDER = "OFF_ORDER",
      OFF_ORDER_MANAGER_DISCOUNT = "OFF_ORDER_MANAGER_DISCOUNT"
  }
  interface Fulfillment extends FulfillmentDetailsOneOf {
      /** Delivery details. */
      deliveryDetails?: DeliveryDetails;
      /** Pickup details. */
      pickupDetails?: PickupDetails;
      /** Dine-in details */
      dineInDetails?: DineInDetails;
      /** Fulfillment type. */
      type?: Type;
      /** Latest delivery time promised by the restaurant. */
      promisedTime?: Date;
      /** Whether the order should be fulfilled as soon as possible. Defaults to `true`. */
      asap?: boolean | null;
      /**
       * The time it takes to prepare and deliver the order in minutes
       * @internal
       */
      preparationTime?: number | null;
  }
  /** @oneof */
  interface FulfillmentDetailsOneOf {
      /** Delivery details. */
      deliveryDetails?: DeliveryDetails;
      /** Pickup details. */
      pickupDetails?: PickupDetails;
      /** Dine-in details */
      dineInDetails?: DineInDetails;
  }
  enum Type {
      /** Missing type due to an error */
      UNSPECIFIED_FULFILLMENT_TYPE = "UNSPECIFIED_FULFILLMENT_TYPE",
      /** Pickup */
      PICKUP = "PICKUP",
      /** Delivery */
      DELIVERY = "DELIVERY",
      /** Dine-in */
      DINE_IN = "DINE_IN"
  }
  interface DeliveryDetails extends DeliveryDetailsProviderOneOf {
      /** Delivery through the restaurant. */
      restaurant?: Restaurant;
      /** Delivery through an external provider. */
      externalProvider?: ExternalProvider;
      /** Delivery address. */
      address?: DeliveryAddress;
      /** Information about the delivery pickup. */
      pickupInfo?: PickupInfo;
      /**
       * Information about the delivery drop-off.
       * @internal
       */
      dropOffInfo?: DropOffInfo;
  }
  /** @oneof */
  interface DeliveryDetailsProviderOneOf {
      /** Delivery through the restaurant. */
      restaurant?: Restaurant;
      /** Delivery through an external provider. */
      externalProvider?: ExternalProvider;
  }
  interface DeliveryAddress {
      /** Formatted delivery address. */
      formatted?: string | null;
      /** Country. */
      country?: string | null;
      /** City name. */
      city?: string | null;
      /** Street name. */
      street?: string | null;
      /** Street number. */
      streetNumber?: string | null;
      /** Apartment number. */
      apt?: string | null;
      /** Floor. */
      floor?: string | null;
      /** Entrance. */
      entrance?: string | null;
      /** ZIP/postal code. */
      zipCode?: string | null;
      /** Country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
      countryCode?: string | null;
      /** Special delivery instructions upon arrival to the address. */
      onArrival?: OnArrival;
      /** Whether an approximate address is used. Defaults to `false`. In case of `false` a house number is required. */
      approximate?: boolean | null;
      /** Delivery Instructions added by the customer. */
      comment?: string | null;
      /** Geo coordinates of the address. */
      location?: DeliveryAddressLocation;
      /** Address Line 2. */
      addressLine2?: string | null;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
  }
  enum OnArrival {
      /** Missing type due to an error */
      UNSPECIFIED_ON_ARRIVAL_TYPE = "UNSPECIFIED_ON_ARRIVAL_TYPE",
      /** Buzz the door */
      BUZZ_DOOR = "BUZZ_DOOR",
      /** Phone me */
      CALL_ME = "CALL_ME"
  }
  interface DeliveryAddressLocation {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Restaurant {
      /** Delivery fee. */
      fee?: string | null;
  }
  interface ExternalProvider {
      /** ID of the external delivery provider. */
      _id?: string;
      /**
       * Name of the external delivery provider.
       * @readonly
       */
      name?: string;
      /**
       * Delivery ID.
       * @internal
       */
      deliveryId?: string | null;
      /**
       * Estimate ID.
       * @internal
       */
      estimateId?: string | null;
      /** Delivery fee charged to the customer. */
      customerFee?: string | null;
      /**
       * Fee paid by the restaurant to the external delivery provider.
       * @readonly
       */
      commission?: string | null;
      /** Order pickup time. */
      pickupTime?: Date;
      /** Order drop off time. */
      dropOffTime?: Date;
      /**
       * Icon of the external delivery provider.
       * @internal
       */
      iconUrl?: string | null;
  }
  interface PickupInfo {
      /** When a delivery is ready to be picked up. This is the start time of the pickup window. */
      windowStartTime?: Date;
      /** When a delivery must be picked up by. This is the end time of the pickup window. */
      windowEndTime?: Date;
  }
  interface DropOffInfo {
      /** Whether the order is delivered contactless. */
      contactless?: boolean;
      /**
       * When a delivery will be drop off. This is the start time of the drop off window.
       * @internal
       */
      windowStartTime?: Date;
      /**
       * When a delivery will be drop off. This is the end time of the drop off window.
       * @internal
       */
      windowEndTime?: Date;
  }
  interface PickupDetails {
      /** Pickup fee charged to the customer. */
      fee?: string | null;
      /** Curbside pickup method */
      curbside?: Curbside;
  }
  interface Curbside {
      /** Additional information for curbside pickup. */
      info?: string;
  }
  interface DineInDetails {
      /** Label of dine-in information added by the restaurant, e.g. `table` or `booth`. */
      label?: string;
      /** Value of dine-in information added by the restaurant, e.g. `#6`. */
      value?: string;
  }
  interface Payment {
      /** Payment type. */
      type?: PaymentType;
      /** Amount paid using this payment type. Only differs from total amount paid in case of split payments. */
      amount?: string | null;
      /** Payment method. */
      method?: string | null;
      /**
       * Transaction ID.
       * See [Cashier API](https://dev.wix.com/api/rest/wix-cashier/payments/transaction) for more details.
       */
      providerTransactionId?: string | null;
  }
  enum PaymentType {
      /** PaymentType, due to an error */
      UNSPECIFIED_PAYMENT_TYPE = "UNSPECIFIED_PAYMENT_TYPE",
      /** Cash */
      CASH = "CASH",
      /** credit */
      CREDIT = "CREDIT",
      /** Delivery club */
      DELIVERY_CLUB = "DELIVERY_CLUB",
      /** Delivery com */
      DELIVERY_COM = "DELIVERY_COM",
      /** Bitpay */
      BITPAY = "BITPAY",
      /** Cellarix */
      CELLARIX = "CELLARIX",
      /** Bits of gold */
      BITSOFGOLD = "BITSOFGOLD",
      /** Multi pass */
      MULTIPASS = "MULTIPASS",
      /** Tenbis */
      TENBIS = "TENBIS",
      /** Paypal */
      PAYPAL = "PAYPAL",
      /** Mysodexo */
      MYSODEXO = "MYSODEXO",
      /** Wix Payments */
      WIX_PAYMENTS = "WIX_PAYMENTS"
  }
  /** Customer information. */
  interface Customer extends CustomerIdOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
      /** First name. */
      firstName?: string;
      /** Last name. */
      lastName?: string;
      /** Phone number. */
      phone?: string | null;
      /** Email address. */
      email?: string;
      /**
       * Customer's contact ID.
       * See [Contacts API](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4) for more details.
       */
      contactId?: string | null;
  }
  /** @oneof */
  interface CustomerIdOneOf {
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
  }
  interface Totals {
      /** Order subtotal. Calculated by substracting delivery fee, tax and discount from order total. */
      subtotal?: string;
      /** Total order price. */
      total?: string;
      /** Total delivery fees charged to the customer. */
      delivery?: string | null;
      /** Total tax. */
      tax?: string | null;
      /** Total discount amount. */
      discount?: string | null;
      /** Total amount saved through the Wix Loyalty program. */
      loyaltySavings?: string | null;
      /**
       * Total number of line items.
       * @readonly
       */
      quantity?: number;
      /** Total tip. */
      tip?: string | null;
      /**
       * Information about the order's service fees.
       * @internal
       */
      serviceFees?: ServiceFee[];
  }
  interface ServiceFee {
      /** The service fee's unique id. */
      ruleId?: string;
      /**
       * The service fee's name.
       * @readonly
       */
      name?: string;
      /** The service fee's fee as Money. */
      fee?: Money;
      /** The service fee's tax as Money. */
      tax?: Money;
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
  interface LoyaltyInfo {
      /** Amount saved by redeeming a Wix Loyalty reward. */
      appliedAmount?: string | null;
  }
  interface CreateOrderResponse {
      /** Unique identifier of the order with the POS system. */
      posOrderId?: string;
      /** Unique identifier of the location for the order in the POS system. */
      posLocationId?: string;
  }
  interface CreateOrderFailureData {
      /** Error codes. */
      errors?: OrderError[];
  }
  interface OrderError {
      /**
       * Error code.
       * + `NONE` - No error code available.
       * + `OTHER` - Error doesn't resemble the existing synchronization errors.
       * + `SYSTEM_ERROR` - A system error occurred during synchronization.
       * + `ACCOUNT_NOT_FOUND` - Synchronization failed because the corresponding account with the POS system could not be found.
       * + `ACCOUNT_NOT_AUTHORIZED` - Synchronization failed because the corresponding account with the POS system could was not authorized.
       * + `LOCATION_NOT_FOUND` - Synchronization failed because the corresponding location with the POS system could not be found.
       * + `ACCOUNT_NOT_CONNECTED` - Synchronization failed because the corresponding account with the POS system was not connected successfully.
       * + `ACCOUNT_CONFIGURATION` - Synchronization failed because of a configuration error.
       * + `OVERLOADED_MENU` - Synchronization failed because storage limit was reached.
       */
      code?: OrderErrorCode;
      /** Error message. */
      message?: string;
      /** Error parameters. */
      params?: Record<string, string>;
  }
  enum OrderErrorCode {
      NONE = "NONE",
      OTHER = "OTHER",
      SYSTEM_ERROR = "SYSTEM_ERROR",
      ACCOUNT_NOT_FOUND = "ACCOUNT_NOT_FOUND",
      ACCOUNT_NOT_AUTHORIZED = "ACCOUNT_NOT_AUTHORIZED",
      LOCATION_NOT_FOUND = "LOCATION_NOT_FOUND",
      ACCOUNT_NOT_CONNECTED = "ACCOUNT_NOT_CONNECTED",
      ACCOUNT_CONFIGURATION = "ACCOUNT_CONFIGURATION",
      PROMO_NOT_RECOGNIZED = "PROMO_NOT_RECOGNIZED",
      PROMO_USER_INELIGIBLE = "PROMO_USER_INELIGIBLE",
      PROMO_ALREADY_USED = "PROMO_ALREADY_USED",
      PROMO_EXPIRED = "PROMO_EXPIRED",
      DISCOUNT = "DISCOUNT",
      LOYALTY = "LOYALTY",
      OUT_OF_SERVICE_AREA = "OUT_OF_SERVICE_AREA",
      AVAILABILITY_CHANGED = "AVAILABILITY_CHANGED",
      PRICE_CHANGED = "PRICE_CHANGED",
      NO_CAPACITY = "NO_CAPACITY",
      CLOSED = "CLOSED",
      REQUIREMENTS_NOT_MET = "REQUIREMENTS_NOT_MET",
      ORDER_TOTAL = "ORDER_TOTAL",
      ORDER_ITEM = "ORDER_ITEM",
      ORDER_REJECTED = "ORDER_REJECTED",
      PAYMENT_FAILED = "PAYMENT_FAILED",
      CUSTOMER_PHONE_MISSING = "CUSTOMER_PHONE_MISSING",
      CUSTOMER_EMAIL_MISSING = "CUSTOMER_EMAIL_MISSING",
      CUSTOMER_BLOCKED = "CUSTOMER_BLOCKED"
  }
  interface ValidateOrderRequest {
      /** Merchant's account ID with the POS system. */
      accountId: string;
      /** Unique identifier of the merchant's Wix location configuration. */
      configurationId: string;
      /** Details of the order created on the Wix site. */
      order?: WixOrder;
  }
  interface ValidateOrderResponse {
      /** Status of the order in the POS system. */
      posOrderStatus?: string;
  }
  /** Restaurants POS component */
  interface RestaurantsPOSComponentData {
      /**
       * URL for the Restaurants POS registration web page.
       * The App Instance and Account Id query parameters are attached to the registration URL
       * so you can identify your account when accessing the vendor API. [Learn more...](https://devforum.wix.com/en/article/app-instance)
       */
      registrationUrl?: string;
      /** Configuration parameters defining the behavior of catalog (menu) synchronization. */
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
  interface GetConfigurationStatusOptions {
      /** Merchant's account ID with the POS system. */
      accountId: string;
      /** Unique identifier of the merchant's Wix location configuration. */
      configurationId: string;
  }
  interface SyncCatalogOptions {
      /** Merchant's account ID with the POS system. */
      accountId: string;
      /** Unique identifier of the merchant's Wix location configuration. */
      configurationId: string;
  }
  interface GetCatalogSyncStatusOptions {
      /** Merchant's account ID with the POS system. */
      accountId: string;
      /** Unique identifier of the merchant's Wix location configuration. */
      configurationId: string;
  }
  interface CreateOrderOptions {
      /** Merchant's account ID with the POS system. */
      accountId: string;
      /** Unique identifier of the merchant's Wix location configuration. */
      configurationId: string;
      /** Details of the order being created on the Wix site. */
      order?: WixOrder;
      /** Whether the order is being paid by the same payment gateway as the POS. */
      paidByPosGateway?: boolean;
  }
  interface ValidateOrderOptions {
      /** Merchant's account ID with the POS system. */
      accountId: string;
      /** Unique identifier of the merchant's Wix location configuration. */
      configurationId: string;
      /** Details of the order created on the Wix site. */
      order?: WixOrder;
  }
  
  function catalogSyncFailure(data: CatalogSyncFailureData): BusinessError<CatalogSyncFailureData>;
  
  const syncCatalogSpiErrors_d_catalogSyncFailure: typeof catalogSyncFailure;
  namespace syncCatalogSpiErrors_d {
    export {
      syncCatalogSpiErrors_d_catalogSyncFailure as catalogSyncFailure,
    };
  }
  
  function getCatalogSyncStatusFailure(data: GetCatalogSyncStatusFailureData): BusinessError<GetCatalogSyncStatusFailureData>;
  
  const getCatalogSyncStatusSpiErrors_d_getCatalogSyncStatusFailure: typeof getCatalogSyncStatusFailure;
  namespace getCatalogSyncStatusSpiErrors_d {
    export {
      getCatalogSyncStatusSpiErrors_d_getCatalogSyncStatusFailure as getCatalogSyncStatusFailure,
    };
  }
  
  function createOrderFailure(data: CreateOrderFailureData): BusinessError<CreateOrderFailureData>;
  
  const createOrderSpiErrors_d_createOrderFailure: typeof createOrderFailure;
  namespace createOrderSpiErrors_d {
    export {
      createOrderSpiErrors_d_createOrderFailure as createOrderFailure,
    };
  }
  
  function validateOrderFailure(data: CreateOrderFailureData): BusinessError<CreateOrderFailureData>;
  
  const validateOrderSpiErrors_d_validateOrderFailure: typeof validateOrderFailure;
  namespace validateOrderSpiErrors_d {
    export {
      validateOrderSpiErrors_d_validateOrderFailure as validateOrderFailure,
    };
  }
  
  namespace spiErrorHelpers_d {
    export {
      syncCatalogSpiErrors_d as syncCatalog,
      getCatalogSyncStatusSpiErrors_d as getCatalogSyncStatus,
      createOrderSpiErrors_d as createOrder,
      validateOrderSpiErrors_d as validateOrder,
    };
  }
  
  export { BusinessError, CatalogReference, CatalogSyncConfiguration, CatalogSyncError, CatalogSyncFailureData, CatalogSyncStatusError, CatalogSyncStatusErrorCode, Code, ConfigurationStatus, Context, CreateOrderFailureData, CreateOrderOptions, CreateOrderRequest, CreateOrderResponse, Curbside, Customer, CustomerIdOneOf, Default, DeliveryAddress, DeliveryAddressLocation, DeliveryDetails, DeliveryDetailsProviderOneOf, DineInDetails, Discount, DiscountType, DisplayType, DropOffInfo, ExternalProvider, Fulfillment, FulfillmentDetailsOneOf, GetCatalogSyncStatusFailureData, GetCatalogSyncStatusOptions, GetCatalogSyncStatusRequest, GetCatalogSyncStatusResponse, GetCatalogSyncStatusResponseStatusModeOneOf, GetConfigurationStatusOptions, GetConfigurationStatusRequest, GetConfigurationStatusResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, LineItem, LineItemOption, LineItemOptionItem, ListAccountIdsRequest, ListAccountIdsResponse, LoyaltyInfo, Money, OnArrival, OrderError, OrderErrorCode, Payment, PaymentType, PickupDetails, PickupInfo, Restaurant, RestaurantsPOSComponentData, ServiceFee, Status, SyncCatalogOptions, SyncCatalogRequest, SyncCatalogResponse, SyncFailed, SyncFailedCode, SyncInProgress, SyncSynced, Totals, Tpa, Type, ValidateOrderOptions, ValidateOrderRequest, ValidateOrderResponse, WixOrder, spiErrorHelpers_d as errorHelpers };
}
