declare module "ecom-v1-validations-data" {
  /** ValidationsData is the main entity of ValidationsSPI, which contains all the data required for validations */
  interface ValidationsData {
      /** Buyer details. */
      buyerDetails?: BuyerDetails;
      /** Line items. */
      lineItems?: LineItem[];
      /**
       * Applied gift card details.
       *
       * >**Note:** Gift cards are supported through the Wix UI, though the SPI is not currently available. Learn more about [Wix Gift Cards](https://support.wix.com/en/article/wix-stores-setting-up-wix-gift-cards).
       * @readonly
       */
      giftCard?: GiftCard;
      /** Weight measurement unit */
      weightUnit?: WeightUnit;
      /** Price summary. */
      priceSummary?: PriceSummary;
      /** Billing information. */
      billingInfo?: AddressWithContact;
      /** Shipping address and contact details. */
      shippingAddress?: AddressWithContact;
      /** Shipping information. */
      shippingInfo?: ShippingInfo;
      /** Custom fields. */
      customFields?: CustomFields;
  }
  interface BuyerDetails {
      /** Buyer email address. */
      email?: string | null;
      /** Buyer info. */
      buyerInfo?: BuyerInfo;
  }
  /** ids are unrelated to the buyer - they are related to those who performed the command, i.e. Identity field */
  interface BuyerInfo extends BuyerInfoIdOneOf {
      /** Visitor ID - if the buyer is **not** a site member. */
      visitorId?: string;
      /** Member ID - if the buyer is a site member. */
      memberId?: string;
      /** User ID - if the buyer is a Wix user. */
      userId?: string;
      /** App ID - when the order was created by an external application or Wix service. */
      appId?: string;
      /** Contact ID - if the buyer is saved as a contact for the site. */
      contactId?: string | null;
  }
  /** @oneof */
  interface BuyerInfoIdOneOf {
      /** Visitor ID - if the buyer is **not** a site member. */
      visitorId?: string;
      /** Member ID - if the buyer is a site member. */
      memberId?: string;
      /** User ID - if the buyer is a Wix user. */
      userId?: string;
      /** App ID - when the order was created by an external application or Wix service. */
      appId?: string;
  }
  interface LineItem {
      /** Line item ID. */
      _id?: string | null;
      /** Item quantity. */
      quantity?: number;
      /** Catalog and item reference. Includes IDs for the item and the catalog it came from, as well as further optional info. */
      catalogReference?: CatalogReference;
      /**
       * Product name.
       * + Stores - `product.name`
       * + Bookings - `service.info.name`
       * + Events - `ticket.name`
       * Can be used for free text message ("Cannot purchase more than 5 cups")
       */
      productName?: ProductName;
      /**
       * Item price **after** catalog-defined discount and line item discounts.
       * Formatted prices can be used for free text message (applies to all MultiCurrencyPrice fields)
       */
      price?: MultiCurrencyPrice;
      /** Physical properties of the item. When relevant, contains information such as SKU, item weight, and shippability. */
      physicalProperties?: PhysicalProperties;
      /** Item type. Either a preset type or custom. */
      itemType?: ItemType;
      /** Subscription option information. */
      subscriptionOptionInfo?: SubscriptionOptionInfo;
  }
  /** Used for grouping line items and is sent on add to cart */
  interface CatalogReference {
      /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores or `eventId` for Wix Events. */
      catalogItemId?: string;
      /** ID of the catalog app. For example, the Wix Stores `appId`, or the 3rd-party `appId`. */
      appId?: string;
      /** Additional info in key:value form. For example, `{"options":{"Size": "M", "Color": "Red"}}` or `{"variantId": "<VARIANT_ID>"}`. */
      options?: Record<string, any> | null;
  }
  interface ProductName {
      /**
       * __Required.__ Original item name in site's default language.
       * Min: 1 character
       * Max: 80 characters
       */
      original?: string;
      /**
       * Optional. Translated item name according to buyer language. Defaults to `original` when not provided.
       * Min: 1 character
       * Max: 200 characters
       */
      translated?: string | null;
  }
  interface MultiCurrencyPrice {
      /** Amount. */
      amount?: string;
      /**
       * Converted amount.
       * @readonly
       */
      convertedAmount?: string;
      /**
       * Amount formatted with currency symbol.
       * @readonly
       */
      formattedAmount?: string;
      /**
       * Converted amount formatted with currency symbol.
       * @readonly
       */
      formattedConvertedAmount?: string;
  }
  interface PhysicalProperties {
      /** Line item weight. Measurement unit (KG or LB) is taken from `order.weightUnit`. */
      weight?: number | null;
      /** Stock-keeping unit. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
      sku?: string | null;
      /** Whether this line item is shippable. */
      shippable?: boolean;
  }
  interface ItemType extends ItemTypeItemTypeDataOneOf {
      /** Preset item type. */
      preset?: ItemTypeItemType;
      /** Custom item type. */
      custom?: string;
  }
  /** @oneof */
  interface ItemTypeItemTypeDataOneOf {
      /** Preset item type. */
      preset?: ItemTypeItemType;
      /** Custom item type. */
      custom?: string;
  }
  enum ItemTypeItemType {
      UNRECOGNISED = "UNRECOGNISED",
      PHYSICAL = "PHYSICAL",
      DIGITAL = "DIGITAL",
      GIFT_CARD = "GIFT_CARD",
      SERVICE = "SERVICE"
  }
  interface SubscriptionOptionInfo {
      /** Subscription option settings. */
      subscriptionSettings?: SubscriptionSettings;
      /** Subscription option title. */
      title?: Title;
      /** Subscription option description. */
      description?: Description;
  }
  interface SubscriptionSettings {
      /** Frequency of recurring payment. */
      frequency?: SubscriptionFrequency;
      /**
       * Interval of recurring payment (optional: default value 1 will be used if not provided)
       * @internal
       */
      interval?: number | null;
      /** Whether subscription is renewed automatically at the end of each period. */
      autoRenewal?: boolean;
      /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
      billingCycles?: number | null;
  }
  /** Frequency unit of recurring payment */
  enum SubscriptionFrequency {
      UNDEFINED = "UNDEFINED",
      DAY = "DAY",
      WEEK = "WEEK",
      MONTH = "MONTH",
      YEAR = "YEAR"
  }
  interface Title {
      /** Subscription option name. */
      original?: string;
      /** Translated subscription option name. */
      translated?: string | null;
  }
  interface Description {
      /** Subscription option description. */
      original?: string;
      /** Translated subscription option name. */
      translated?: string | null;
  }
  interface GiftCard {
      /** Gift Card ID. */
      _id?: string;
      /** Gift card obfuscated code. */
      obfuscatedCode?: string;
      /** Gift card value. */
      amount?: MultiCurrencyPrice;
      /** App ID of the gift card provider. */
      appId?: string;
  }
  enum WeightUnit {
      /** Weight unit can't be classified, due to an error */
      UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
      /** Kilograms */
      KG = "KG",
      /** Pounds */
      LB = "LB"
  }
  interface PriceSummary {
      /** Subtotal of all line items, before discounts and before tax. */
      subtotal?: MultiCurrencyPrice;
      /** Total shipping price, before discounts and before tax. */
      shipping?: MultiCurrencyPrice;
      /** Total tax. */
      tax?: MultiCurrencyPrice;
      /** Total calculated discount value. */
      discount?: MultiCurrencyPrice;
      /** Total price after discounts, gift cards, and tax. */
      total?: MultiCurrencyPrice;
      /** Total additional fees price before tax. */
      additionalFees?: MultiCurrencyPrice;
  }
  /** Billing Info and shipping details */
  interface AddressWithContact {
      /** Address. */
      address?: Address;
      /** Contact details. */
      contactDetails?: FullAddressContactDetails;
  }
  /** Physical address */
  interface Address {
      /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
      country?: string | null;
      /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Postal or zip code. */
      postalCode?: string | null;
      /** Street address. */
      streetAddress?: StreetAddress;
      /** Main address line (usually street name and number). */
      addressLine1?: string | null;
      /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
      addressLine2?: string | null;
  }
  interface StreetAddress {
      /** Street number. */
      number?: string;
      /** Street name. */
      name?: string;
      /**
       * Apartment number.
       * @internal
       */
      apt?: string;
      /**
       * Optional address line 1
       * @internal
       */
      formattedAddressLine?: string | null;
  }
  /** Full contact details for an address */
  interface FullAddressContactDetails {
      /** First name. */
      firstName?: string | null;
      /** Last name. */
      lastName?: string | null;
      /** Phone number. */
      phone?: string | null;
      /** Company name. */
      company?: string | null;
      /** Tax information (for Brazil only). If ID is provided, `vatId.type` must also be set, `UNSPECIFIED` is not allowed. */
      vatId?: VatId;
  }
  interface VatId {
      /** Customer's tax ID. */
      _id?: string;
      /**
       * Tax type.
       *
       * Supported values:
       * + `CPF`: for individual tax payers
       * + `CNPJ`: for corporations
       */
      type?: VatType;
  }
  /** tax info types */
  enum VatType {
      UNSPECIFIED = "UNSPECIFIED",
      /** CPF - for individual tax payers. */
      CPF = "CPF",
      /** CNPJ - for corporations */
      CNPJ = "CNPJ"
  }
  interface ShippingInfo {
      /** Selected option out of the options allowed for the `region`. */
      selectedCarrierServiceOption?: SelectedCarrierServiceOption;
  }
  interface SelectedCarrierServiceOption {
      /** Unique identifier of selected option. For example, "usps_std_overnight". */
      code?: string;
      /**
       * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
       * For example, "Standard" or "First-Class Package International".
       */
      title?: string;
      /** Delivery logistics. */
      logistics?: DeliveryLogistics;
      /** This carrier's unique ID */
      carrierId?: string | null;
  }
  interface DeliveryLogistics {
      /** Expected delivery time, in free text. For example, "3-5 business days". */
      deliveryTime?: string | null;
      /** Instructions for caller, e.g for pickup: "Please deliver during opening hours, and please don't park in disabled parking spot". */
      instructions?: string | null;
      /** Pickup details. */
      pickupDetails?: PickupDetails;
  }
  interface PickupDetails {
      /** Pickup address. */
      address?: Address;
      /** Pickup method */
      pickupMethod?: PickupMethod;
  }
  enum PickupMethod {
      UNKNOWN_METHOD = "UNKNOWN_METHOD",
      STORE_PICKUP = "STORE_PICKUP",
      PICKUP_POINT = "PICKUP_POINT"
  }
  interface CustomFields {
      /** List of custom fields */
      values?: CustomField[];
  }
  interface CustomField {
      /** Custom field value. */
      value?: any;
      /** Custom field title. */
      title?: string;
      /** Translated custom field title. */
      translatedTitle?: string | null;
  }
  interface ValidateRequest {
      /** Caller context - where the call came from + entity ids */
      callerContext: CallerContext;
      /** Data provided for validations by implementers. */
      validationsData?: ValidationsData;
  }
  interface CallerContext {
      /** Where did the call come from? */
      source?: Source;
      /** Cart ID, Checkout ID, Ecom ID */
      entityContext?: EntityContext;
  }
  enum Source {
      /** Context cannot be recognized */
      OTHER = "OTHER",
      /** Called from Ecom's Cart service */
      CART = "CART",
      /** Called from Ecom's Checkout service */
      CHECKOUT = "CHECKOUT"
  }
  interface EntityContext {
      /** Cart ID */
      cartId?: string | null;
      /** Checkout ID */
      checkoutId?: string | null;
      /** Ecom ID - correlation between corresponding cart & checkout entities */
      ecomId?: string | null;
  }
  interface ValidateResponse {
      /** Violations risen by all implementers. */
      violations?: Violation[];
  }
  interface Violation {
      /** Severity - whether the UoU should be allowed to continue or not */
      severity?: Severity;
      /** Violation path - for instance, cart.lineItem[2].quantity */
      violationPath?: string | null;
      /** Description for the constraint. */
      violationDescription?: string;
  }
  interface Severity {
  }
  interface ValidationsSPIConfig {
      /**
       * Base URI which Wix eCommerce will call to retrieve the validation violations.
       * For example, `https://my-additional-fees.com/v1/calculate-additional-fees`.
       */
      uriConfig?: SpiBaseUri;
      /** Whether validations should be performed in cart page or not. */
      optInCart?: boolean;
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
  interface ValidateOptions {
      /** Caller context - where the call came from + entity ids */
      callerContext: CallerContext;
      /** Data provided for validations by implementers. */
      validationsData?: ValidationsData;
  }
  
  export { Address, AddressWithContact, AlternativeUri, BuyerDetails, BuyerInfo, BuyerInfoIdOneOf, CallerContext, CatalogReference, Context, CustomField, CustomFields, DeliveryLogistics, Description, EntityContext, FullAddressContactDetails, GiftCard, IdentificationData, IdentificationDataIdOneOf, IdentityType, ItemType, ItemTypeItemType, ItemTypeItemTypeDataOneOf, LineItem, MultiCurrencyPrice, PhysicalProperties, PickupDetails, PickupMethod, PriceSummary, ProductName, SelectedCarrierServiceOption, Severity, ShippingInfo, Source, SpiBaseUri, StreetAddress, SubscriptionFrequency, SubscriptionOptionInfo, SubscriptionSettings, Title, ValidateOptions, ValidateRequest, ValidateResponse, ValidationsData, ValidationsSPIConfig, VatId, VatType, Violation, WeightUnit };
}
