declare module "interfaces-ecommerce-v1-additional-fees-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface CalculateAdditionalFeesRequest {
      /**
       * Line items to calculate additional fees for.
       *
       * Max: 300 items
       */
      lineItems?: LineItem[];
      /** Shipping address. */
      shippingAddress?: Address;
      /** Information about the buyer, such as contact details. */
      buyerDetails?: BuyerDetails;
      /** Applied discounts. */
      appliedDiscounts?: AppliedDiscount[];
      /** Shipping information. */
      shippingInfo?: ShippingInformation;
      /** __Deprecated.__ Use `purchaseFlowId` instead. */
      ecomId?: string | null;
      /** Persistent ID that correlates between the various eCommerce elements: cart, checkout, and order. */
      purchaseFlowId?: string | null;
  }
  interface LineItem {
      /** Line item ID. */
      _id?: string;
      /**
       * Quantity of item.
       *
       * Min: `1`
       * Max: `100000`
       */
      quantity?: number | null;
      /** Catalog and item reference. Includes IDs for the item and the catalog it came from, as well as further optional info. */
      catalogReference?: CatalogReference;
      /** Item name. */
      productName?: string | null;
      /** Price for a single item. */
      price?: string;
      /** Physical properties of the item. When relevant, contains information such as SKU, item weight, and shippability. */
      physicalProperties?: PhysicalProperties;
      /**
       * Partial payment to be paid upfront during the checkout.
       * Only eligible for catalog items with `lineItem.paymentOption` type of `DEPOSIT_ONLINE`.
       */
      depositAmount?: string | null;
  }
  /** Used for grouping line items. Sent when an item is added to a cart, checkout, or order. */
  interface CatalogReference {
      /** ID of the item within the catalog it belongs to. */
      catalogItemId?: string;
      /**
       * ID of the app providing the catalog.
       *
       * You can get your app's ID from its page in the [Wix Dev Center](https://dev.wix.com/apps).
       *
       * For items from Wix catalogs, the following values always apply:
       * + Wix Stores: `"215238eb-22a5-4c36-9e7b-e7c08025e04e"`
       * + Wix Bookings: `"13d21c63-b5ec-5912-8397-c3a5ddb27a97"`
       * + Wix Restaurants: `"9a5d83fd-8570-482e-81ab-cfa88942ee60"`
       */
      appId?: string;
      /**
       * Additional item details in key:value pairs. Use this optional field to provide more specificity with item selection. The `options` field values differ depending on which catalog is providing the items.
       *
       * For products and variants from your Wix Stores catalog, learn more about [eCommerce integration](https://dev.wix.com/docs/rest/business-solutions/stores/catalog/e-commerce-integration).
       */
      options?: Record<string, any> | null;
  }
  interface PhysicalProperties {
      /** Line item weight. Measurement unit matches the weight unit specified in `weightUnit` in the request. */
      weight?: number | null;
      /** Stock-keeping unit. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
      sku?: string | null;
      /** Whether this line item is shippable. */
      shippable?: boolean;
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
      /** @internal */
      location?: AddressLocation;
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
  interface AddressLocation {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface BuyerDetails {
      /** Contact details. */
      contactDetails?: FullAddressContactDetails;
  }
  /** Full contact details for an address */
  interface FullAddressContactDetails {
      /** Contact's first name. */
      firstName?: string | null;
      /** Contact's last name. */
      lastName?: string | null;
      /**
       * Contact's full name.
       * @internal
       */
      fullName?: string | null;
      /** Contact's phone number. */
      phone?: string | null;
      /** Contact's company name. */
      company?: string | null;
      /** Email associated with the address. */
      email?: string | null;
      /** Tax info. Currently usable only in Brazil. */
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
  interface AppliedDiscount extends AppliedDiscountDiscountSourceOneOf {
      /** Coupon details. */
      coupon?: Coupon;
      /** Merchant discount. */
      merchantDiscount?: MerchantDiscount;
      /** Discount rule */
      discountRule?: DiscountRule;
      /** Discount type. */
      discountType?: DiscountType;
      /** IDs of line items the discount applies to. */
      lineItemIds?: string[];
  }
  /** @oneof */
  interface AppliedDiscountDiscountSourceOneOf {
      /** Coupon details. */
      coupon?: Coupon;
      /** Merchant discount. */
      merchantDiscount?: MerchantDiscount;
      /** Discount rule */
      discountRule?: DiscountRule;
  }
  enum DiscountType {
      GLOBAL = "GLOBAL",
      SPECIFIC_ITEMS = "SPECIFIC_ITEMS",
      SHIPPING = "SHIPPING"
  }
  /** Coupon */
  interface Coupon {
      /** Coupon ID. */
      _id?: string;
      /** Coupon code. */
      code?: string;
      /** Coupon name. */
      name?: string;
      amount?: string;
  }
  interface MerchantDiscount {
      amount?: string;
  }
  interface DiscountRule {
      /** Discount rule ID */
      _id?: string;
      /** Discount rule name */
      name?: DiscountRuleName;
      amount?: string;
  }
  interface DiscountRuleName {
      /** Original discount rule name (in site's default language). */
      original?: string;
      /** Translated discount rule name according to buyer language. Defaults to `original` when not provided. */
      translated?: string | null;
  }
  interface ShippingInformation {
      /** Selected carrier shipping option. */
      selectedCarrierServiceOption?: SelectedCarrierServiceOption;
  }
  interface SelectedCarrierServiceOption {
      /** Unique identifier of selected option. For example, `"usps_std_overnight"`. */
      code?: string;
      /**
       * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
       * For example, "Standard" or "First-Class Package International".
       * @readonly
       */
      title?: string;
      /**
       * Delivery logistics.
       * @readonly
       */
      logistics?: DeliveryLogistics;
      /**
       * Shipping costs.
       * @readonly
       */
      cost?: SelectedCarrierServiceOptionPrices;
      /** Other charges. */
      otherCharges?: SelectedCarrierServiceOptionOtherCharge[];
  }
  interface DeliveryLogistics {
      /** Expected delivery time. For example, "3-5 business days". */
      deliveryTime?: string | null;
      /** Instructions for deliver. For example, "Please deliver during open hours and please don't park in disabled parking spot". */
      instructions?: string | null;
      /** Pickup details. */
      pickupDetails?: PickupDetails;
  }
  interface PickupDetails {
      /** Pickup address. */
      address?: Address;
      /** Whether the pickup address is a business. This may affect tax calculation. */
      businessLocation?: boolean;
      /** Pickup method. */
      pickupMethod?: PickupMethod;
  }
  enum PickupMethod {
      UNKNOWN_METHOD = "UNKNOWN_METHOD",
      STORE_PICKUP = "STORE_PICKUP",
      PICKUP_POINT = "PICKUP_POINT"
  }
  interface SelectedCarrierServiceOptionPrices {
      /** Price. */
      price?: string;
      /** Total shipping discount. */
      totalDiscount?: string | null;
  }
  interface SelectedCarrierServiceOptionOtherCharge {
      /** Type of charge. */
      type?: ChargeType;
      /**
       * Details of the charge.
       *
       * Max: 200 characters
       */
      details?: string | null;
      /**
       * Cost.
       *
       * `cost` is `price` minus `totalDiscount`.
       */
      cost?: SelectedCarrierServiceOptionPrices;
  }
  enum ChargeType {
      HANDLING_FEE = "HANDLING_FEE",
      INSURANCE = "INSURANCE"
  }
  interface CalculateAdditionalFeesResponse {
      /** Additional fees calculated. */
      additionalFees?: AdditionalFee[];
      /**
       * Currency of additional fees calculated. In three-letter currency code
       * [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       *
       * The currency returned in the response object must match the wix site's currency or those fees will
       * be filtered out and not returned. Extract the `currency` from the
       * [request envelope](https://dev.wix.com/api/rest/getting-started/service-provider-interface#getting-started_service-provider-interface_request-envelope)
       * to ensure the correct currency is used in your calculation.
       */
      currency?: string;
  }
  /** Additional fees calculated. */
  interface AdditionalFee {
      /** Additional fee's unique code or ID. */
      code?: string | null;
      /**
       * Additional fee's name.
       *
       * Max: 50 characters
       */
      name?: string;
      /** Total additional fees. This `price` does not include any taxes that may apply to these additional fees. */
      price?: string;
      /**
       * Tax details.
       *
       * > **Note:** Tax is not calculated in the returned `price` even when `taxDetails.taxable` is `true`.
       */
      taxDetails?: TaxDetails;
      /**
       * Optional - Line items associated with this additional fee.
       * If no `lineItemIds` are provided, the fee will be associated with the whole cart/checkout/order.
       */
      lineItemIds?: string[];
  }
  /** Tax details. */
  interface TaxDetails {
      /** Whether additional fee is taxable. */
      taxable?: boolean;
      /** Reserved for internal use. */
      taxGroupId?: string | null;
  }
  interface AdditionalFeesSPIConfig {
      /**
       * Whether to allow caching of the response for up to 5 minutes. Passing `false` will prevent caching, but this may affect performance.
       *
       * Default: `true`
       * @internal
       */
      cacheable?: boolean | null;
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
  interface CalculateAdditionalFeesOptions {
      /**
       * Line items to calculate additional fees for.
       *
       * Max: 300 items
       */
      lineItems?: LineItem[];
      /** Shipping address. */
      shippingAddress?: Address;
      /** Information about the buyer, such as contact details. */
      buyerDetails?: BuyerDetails;
      /** Applied discounts. */
      appliedDiscounts?: AppliedDiscount[];
      /** Shipping information. */
      shippingInfo?: ShippingInformation;
      /** __Deprecated.__ Use `purchaseFlowId` instead. */
      ecomId?: string | null;
      /** Persistent ID that correlates between the various eCommerce elements: cart, checkout, and order. */
      purchaseFlowId?: string | null;
  }
  
  export { AdditionalFee, AdditionalFeesSPIConfig, Address, AddressLocation, AppliedDiscount, AppliedDiscountDiscountSourceOneOf, BusinessError, BuyerDetails, CalculateAdditionalFeesOptions, CalculateAdditionalFeesRequest, CalculateAdditionalFeesResponse, CatalogReference, ChargeType, Context, Coupon, DeliveryLogistics, DiscountRule, DiscountRuleName, DiscountType, FullAddressContactDetails, IdentificationData, IdentificationDataIdOneOf, IdentityType, LineItem, MerchantDiscount, PhysicalProperties, PickupDetails, PickupMethod, SelectedCarrierServiceOption, SelectedCarrierServiceOptionOtherCharge, SelectedCarrierServiceOptionPrices, ShippingInformation, StreetAddress, TaxDetails, VatId, VatType };
}
