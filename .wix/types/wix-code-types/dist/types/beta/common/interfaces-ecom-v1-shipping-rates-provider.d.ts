declare module "interfaces-ecom-v1-shipping-rates-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface GetShippingRatesRequest {
      /** The line items to be shipped. */
      lineItems?: ProductItem[];
      /** Address to ship to. */
      shippingDestination?: Address;
      /** Address item is shipped from. This is the site owner's business address. */
      shippingOrigin?: Address;
      /** Buyer's contact details. */
      buyerContactDetails?: FullAddressContactDetails;
      /**
       * Weight measurement unit used for all items in the shipment.
       *
       * Supported values:
       * + `"KG"`: kilograms
       * + `"LB"`: pounds
       */
      weightUnit?: WeightUnit;
      /** Whether tax is included in the items' prices. */
      taxIncludedInPrices?: boolean;
      /** list of delivery preferences, for example preferred delivery code (shippingOptionId) */
      deliveryPreferences?: DeliveryPreferences;
      /**
       * __Deprecated.__ Use `purchaseFlowId` instead.
       * @internal
       */
      ecomId?: string | null;
      /** Persistent ID that correlates between the various eCommerce elements: cart, checkout, and order. */
      purchaseFlowId?: string | null;
  }
  interface ProductItem {
      /** Item name. */
      name?: string;
      /** The number of items ordered. */
      quantity?: number;
      /** Reference to the item's origin catalog. */
      catalogReference?: CatalogReference;
      /** Physical properties of the item. */
      physicalProperties?: PhysicalProperties;
      /** Price of a single item after discounts. */
      price?: string;
      /**
       * For shipping rates by product group
       * @internal
       */
      shippingGroupId?: string | null;
      /** Total line item price before discounts. */
      totalPriceBeforeDiscount?: string | null;
      /** Price of a single item before discounts. */
      priceBeforeDiscount?: string | null;
      /** Total line item price after discounts. This is equal to `price` multiplied by `quantity`. */
      totalPrice?: string | null;
      /**
       * For delivery rates by delivery profile id
       * @internal
       */
      deliveryProfileId?: string | null;
      /** item delivery destination index in the shipping addresses list */
      deliveryDestinationIndex?: number | null;
      /** where the item is delivered from index in the from addresses list */
      deliveryOriginIndex?: number | null;
      /** whether tax is included in line item price */
      taxIncludedInPrice?: boolean | null;
      /**
       * The ID of the line item.
       * @internal
       */
      lineItemId?: string | null;
      /**
       * For delivery rates by delivery rule id (multiple delivery rules per delivery profile)
       * @internal
       */
      deliveryRuleId?: string | null;
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
       * For products and variants from a Wix Stores catalog, learn more about [eCommerce integration](https://dev.wix.com/docs/rest/business-solutions/stores/catalog/e-commerce-integration).
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
  interface Address extends AddressStreetOneOf {
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
      /** Country code. */
      country?: string | null;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Zip/postal code. */
      postalCode?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
      addressLine2?: string | null;
      /**
       * A string containing the full address of this location.
       * @internal
       */
      formatted?: string | null;
      /**
       * Coordinates of the physical address.
       * @internal
       */
      location?: AddressLocation;
  }
  /** @oneof */
  interface AddressStreetOneOf {
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
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
  interface Subdivision {
      /** Short subdivision code. */
      code?: string;
      /** Subdivision full name. */
      name?: string;
      /**
       * Subdivision level
       * @internal
       */
      type?: SubdivisionType;
      /**
       * Free text description of subdivision type.
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType {
      UNKNOWN_SUBDIVISION_TYPE = "UNKNOWN_SUBDIVISION_TYPE",
      /** State */
      ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
      /** County */
      ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
      /** City/town */
      ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3",
      /** Neighborhood/quarter */
      ADMINISTRATIVE_AREA_LEVEL_4 = "ADMINISTRATIVE_AREA_LEVEL_4",
      /** Street/block */
      ADMINISTRATIVE_AREA_LEVEL_5 = "ADMINISTRATIVE_AREA_LEVEL_5",
      /** ADMINISTRATIVE_AREA_LEVEL_0. Indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
      COUNTRY = "COUNTRY"
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
  enum WeightUnit {
      /** Weight unit can't be classified, due to an error */
      UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
      /** Kilograms */
      KG = "KG",
      /** Pounds */
      LB = "LB"
  }
  /**
   * delivery preferences, for example preferred delivery "code" (shippingOptionId).
   * enrich the delivery providers with more data about the delivery
   */
  interface DeliveryPreferences {
      preferredCode?: string | null;
  }
  interface GetShippingRatesResponse {
      /** Available shipping rates. These define the shipping rate options that are displayed to site visitors on the cart and checkout pages. */
      shippingRates?: ShippingOption[];
  }
  interface ShippingOption {
      /** Unique code that acts as an ID for a shipping rate. For example, `"usps_std_overnight"`. */
      code?: string;
      /** Shipping rate title. For example, `"USPS Standard Overnight Delivery"`, `"Standard"`, or `"First-Class Package International"`. */
      title?: string;
      /** Shipping logistics. */
      logistics?: DeliveryLogistics;
      /** Shipping cost. */
      cost?: ShippingPrice;
      /**
       * If the option is a partial and doesn't apply to all line_items, this field will be populated.
       * @internal
       */
      partial?: PartialOption;
  }
  interface DeliveryLogistics {
      /** When the item is expected to be delivered in free text. For example, `"3-5 business days"`. */
      deliveryTime?: string | null;
      /** Instructions for delivery. For example, for pickup: `"Ensure to come during business hours, and please don't park in the disabled spot"`. */
      instructions?: string | null;
      /** Pickup details. Should be returned only if order is for pickup. */
      pickupDetails?: PickupDetails;
      /**
       * Date and Time of the delivery option
       * @internal
       */
      deliveryTimeSlot?: DeliveryTimeSlot;
  }
  interface PickupDetails {
      /** Pickup address. */
      address?: Address;
      /**
       * Pickup method.
       *
       * Supported values:
       * + `"STORE_PICKUP"`: When pickup is from the merchant's brick and mortar store.
       * + `"PICKUP_POINT"`: When item is shipped to a specified pickup point.
       */
      pickupMethod?: PickupMethod;
  }
  enum PickupMethod {
      UNKNOWN_METHOD = "UNKNOWN_METHOD",
      STORE_PICKUP = "STORE_PICKUP",
      PICKUP_POINT = "PICKUP_POINT"
  }
  interface DeliveryTimeSlot {
      /** starting time of the delivery time slot */
      from?: Date;
      /** ending time of the delivery time slot */
      to?: Date;
  }
  interface ShippingPrice {
      /** The shipping rate's price. Must align with the [currency's decimal separator](https://en.wikipedia.org/wiki/ISO_4217#Active_codes). */
      price?: string;
      /** Currency of the shipping rate price as a 3-letter [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217). Must align with the `currency` passed to the function under the `metadata` field. */
      currency?: string;
      /** Additional costs. For example, a handling fee for packaging fragile items. */
      additionalCharges?: AdditionalCharge[];
  }
  interface AdditionalCharge {
      /** Additional charge type. */
      type?: ChargeType;
      /** Details of the additional charge. For example, `"Handling fee of $5 applied for gift wrapping"`. */
      details?: string | null;
      /** Cost of additional charge. For example, `12.5`. */
      price?: string;
  }
  enum ChargeType {
      HANDLING_FEE = "HANDLING_FEE"
  }
  interface PartialOption {
      /** Items that the delivery option is for. If empty, the delivery option is for all items. */
      lineItemIds?: string[];
  }
  interface MissingPostalCodeError {
      error?: ApplicationError;
  }
  interface ApplicationError {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface InvalidPostalCodeError {
      error?: ApplicationError;
  }
  interface InvalidAddressError {
      fields?: FieldViolation[];
  }
  interface FieldViolation {
      field?: string;
      description?: string;
      violatedRule?: RuleType;
      /** applicable when violated_rule=OTHER */
      ruleName?: string | null;
      data?: Record<string, any> | null;
  }
  enum RuleType {
      VALIDATION = "VALIDATION",
      OTHER = "OTHER",
      MAX = "MAX",
      MIN = "MIN",
      MAX_LENGTH = "MAX_LENGTH",
      MIN_LENGTH = "MIN_LENGTH",
      MAX_SIZE = "MAX_SIZE",
      MIN_SIZE = "MIN_SIZE",
      FORMAT = "FORMAT",
      DECIMAL_LTE = "DECIMAL_LTE",
      DECIMAL_GTE = "DECIMAL_GTE",
      DECIMAL_LT = "DECIMAL_LT",
      DECIMAL_GT = "DECIMAL_GT",
      DECIMAL_MAX_SCALE = "DECIMAL_MAX_SCALE",
      INVALID_ENUM_VALUE = "INVALID_ENUM_VALUE",
      REQUIRED_FIELD = "REQUIRED_FIELD",
      FIELD_NOT_ALLOWED = "FIELD_NOT_ALLOWED",
      ONE_OF_ALIGNMENT = "ONE_OF_ALIGNMENT"
  }
  interface GenericShippingRatesError {
      errors?: ApplicationError[];
  }
  interface GetDashboardTablesRequest {
      /** Delivery profile id. */
      deliveryProfileId?: string;
      /** Delivery region ids to get settings for. */
      deliveryRegionId?: string[];
  }
  interface GetDashboardTablesResponse {
      /** The list of settings for the given requests. */
      dashboardTableResults?: RegionDashboardTables[];
  }
  interface RegionDashboardTables {
      /** The delivery rule id. */
      deliveryRegionId?: string;
      /** The shipping table values that are associated with the delivery rule. Can be multiple if the provider is an aggregator of multiple carriers. */
      dashboardTables?: DashboardTable[];
  }
  interface DashboardTable {
      /** The title of the delivery settings that will be displayed in the UI. */
      title?: string;
      /** The columns of the delivery settings that will be displayed in the UI. */
      columns?: Column[];
      /** The content of the delivery settings. Each row is a map of column name to value. */
      rows?: Row[];
  }
  interface Column {
      /** The name of the column. This is used to get the data from the row. */
      key?: string;
      /** The title of the column that will be displayed in the UI. */
      name?: string;
  }
  interface Row {
      /** The external key of the data presented in a row. This is used to identify the row in the UI for editing. */
      key?: string;
      /**
       * The data presented in the row. The key is the column `name` and the value is the data in the specific row and column.
       * Data will be in JSON format.
       */
      data?: Record<string, any> | null;
  }
  interface ShippingRatesConfig {
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
      /**
       * feature toggle initialized with default value = false. should be true if implemented by spi provider
       * @internal
       */
      toggleGetDashboardTableEnabled?: boolean;
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
  interface GetShippingRatesOptions {
      /** The line items to be shipped. */
      lineItems?: ProductItem[];
      /** Address to ship to. */
      shippingDestination?: Address;
      /** Address item is shipped from. This is the site owner's business address. */
      shippingOrigin?: Address;
      /** Buyer's contact details. */
      buyerContactDetails?: FullAddressContactDetails;
      /**
       * Weight measurement unit used for all items in the shipment.
       *
       * Supported values:
       * + `"KG"`: kilograms
       * + `"LB"`: pounds
       */
      weightUnit?: WeightUnit;
      /** Whether tax is included in the items' prices. */
      taxIncludedInPrices?: boolean;
      /** list of delivery preferences, for example preferred delivery code (shippingOptionId) */
      deliveryPreferences?: DeliveryPreferences;
      /**
       * __Deprecated.__ Use `purchaseFlowId` instead.
       * @internal
       */
      ecomId?: string | null;
      /** Persistent ID that correlates between the various eCommerce elements: cart, checkout, and order. */
      purchaseFlowId?: string | null;
  }
  
  function missingPostalCode(data: MissingPostalCodeError): BusinessError<MissingPostalCodeError>;
  function invalidPostalCode(data: InvalidPostalCodeError): BusinessError<InvalidPostalCodeError>;
  function invalidAddress(data: InvalidAddressError): BusinessError<InvalidAddressError>;
  function genericShippingRatesError(data: GenericShippingRatesError): BusinessError<GenericShippingRatesError>;
  
  const getShippingRatesSpiErrors_d_missingPostalCode: typeof missingPostalCode;
  const getShippingRatesSpiErrors_d_invalidPostalCode: typeof invalidPostalCode;
  const getShippingRatesSpiErrors_d_invalidAddress: typeof invalidAddress;
  const getShippingRatesSpiErrors_d_genericShippingRatesError: typeof genericShippingRatesError;
  namespace getShippingRatesSpiErrors_d {
    export {
      getShippingRatesSpiErrors_d_missingPostalCode as missingPostalCode,
      getShippingRatesSpiErrors_d_invalidPostalCode as invalidPostalCode,
      getShippingRatesSpiErrors_d_invalidAddress as invalidAddress,
      getShippingRatesSpiErrors_d_genericShippingRatesError as genericShippingRatesError,
    };
  }
  
  namespace spiErrorHelpers_d {
    export {
      getShippingRatesSpiErrors_d as getShippingRates,
    };
  }
  
  export { AdditionalCharge, Address, AddressLocation, AddressStreetOneOf, ApplicationError, BusinessError, CatalogReference, ChargeType, Column, Context, DashboardTable, DeliveryLogistics, DeliveryPreferences, DeliveryTimeSlot, FieldViolation, FullAddressContactDetails, GenericShippingRatesError, GetDashboardTablesRequest, GetDashboardTablesResponse, GetShippingRatesOptions, GetShippingRatesRequest, GetShippingRatesResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, InvalidAddressError, InvalidPostalCodeError, MissingPostalCodeError, PartialOption, PhysicalProperties, PickupDetails, PickupMethod, ProductItem, RegionDashboardTables, Row, RuleType, ShippingOption, ShippingPrice, ShippingRatesConfig, StreetAddress, Subdivision, SubdivisionType, VatId, VatType, WeightUnit, spiErrorHelpers_d as errorHelpers };
}
