declare module "interfaces-ecom-v1-shipping-rates-provider" {
    interface ShippingRatesProvider {
    }
    interface GetShippingRatesRequest {
        /** All items included to be sent */
        lineItems?: ProductItem[];
        /** Destination of the items */
        shippingDestination?: Address;
        /**
         * Where the items are sent from - this may be needed for some carriers.
         * For now it will simply be the business location of the store.
         */
        shippingOrigin?: Address;
        /** Contact details */
        buyerContactDetails?: FullAddressContactDetails;
        /** Measure unit */
        weightUnit?: WeightUnit;
        /** If tax should be added to price */
        taxIncludedInPrices?: boolean;
    }
    interface ProductItem {
        /** product's name */
        name?: string;
        /** The amount of items for that specific product */
        quantity?: number;
        /** Fully qualified identifier of the product */
        catalogReference?: CatalogReference;
        /** Physical properties of the product, e.g weight */
        physicalProperties?: PhysicalProperties;
        /** final price after all discounts (catalog discount + merchant discount + coupon discounts) what the user actually will pay */
        price?: string;
        /** price for all the quantity in the line item before coupons and before auto discounts. */
        totalPriceBeforeDiscount?: string | null;
        /** price for a single item before platform discounts (as above) */
        priceBeforeDiscount?: string | null;
        /** final price after discounts for the whole quantity of the line item */
        totalPrice?: string | null;
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
    interface PhysicalProperties {
        /** Line item weight. Measurement unit (KG or LB) is taken from `order.weightUnit`. */
        weight?: number | null;
        /** Stock-keeping unit. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
        sku?: string | null;
        /** Whether this line item is shippable. */
        shippable?: boolean;
    }
    /** Physical address */
    interface Address extends AddressStreetOneOf {
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
        /** Street name and number. */
        streetAddress?: StreetAddress;
        /** Main address line, usually street and number as free text. */
        addressLine1?: string | null;
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
        /** Contact first name */
        firstName?: string | null;
        /** Contact last name */
        lastName?: string | null;
        /** Contact phone number */
        phone?: string | null;
        /** Contact's company */
        company?: string | null;
        /** Email associated with the address */
        email?: string | null;
        /** tax info (Currently usable only in Brazil) */
        vatId?: VatId;
    }
    interface VatId {
        /** Customer's tax ID */
        _id?: string;
        /** tax type */
        type?: VatType;
    }
    /** tax info types */
    enum VatType {
        UNSPECIFIED = "UNSPECIFIED",
        /** CPF - for individual tax payers */
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
    interface GetShippingRatesResponse {
        /** Shipping rates this carrier gives */
        shippingRates?: ShippingOption[];
    }
    interface ShippingOption {
        /**
         * Unique code of provided shipping option like "usps_std_overnight".
         * For legacy calculators this would be the UUID of the option.
         */
        code?: string;
        /**
         * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale)
         * e.g "Standard" or "First-Class Package International" (in legacy its called "option title")
         */
        title?: string;
        /** Logistics of how delivery will be */
        logistics?: DeliveryLogistics;
        /** Cost information for the rates option */
        cost?: ShippingPrice;
    }
    interface DeliveryLogistics {
        /** When the item is expected to be delivered in free text, e.g "3-5 business days" */
        deliveryTime?: string | null;
        /** Instructions for caller, e.g for pickup: "Ensure to come during Opening Hours, and please don't park in disabled-spot" */
        instructions?: string | null;
        /** Additional pickup details if it's a pickup */
        pickupDetails?: PickupDetails;
    }
    interface PickupDetails {
        /** Pickup address */
        address?: Address;
        /** Pickup method */
        pickupMethod?: PickupMethod;
    }
    enum PickupMethod {
        UNKNOWN_METHOD = "UNKNOWN_METHOD",
        STORE_PICKUP = "STORE_PICKUP",
        PICKUP_POINT = "PICKUP_POINT"
    }
    interface ShippingPrice {
        /** Amount charged for actual shipping rate */
        price?: string;
        /** Currency of the price - can differ from each Carrier, e.g US Carrier gives price in USD but London Carrier in EUR. */
        currency?: string;
        /** Additional costs such as insurance, handling & packaging for fragile items etc. */
        additionalCharges?: AdditionalCharge[];
    }
    interface AdditionalCharge {
        /** The reason for the additional cost */
        type?: ChargeType;
        /** Details of the charge, such as 'Full Coverage Insurance of up to 80% of value of shipment' */
        details?: string | null;
        /** Cost of the charge */
        price?: string;
    }
    enum ChargeType {
        HANDLING_FEE = "HANDLING_FEE"
    }
    interface MissingPostalCodeError {
        error?: ApplicationError;
    }
    interface ApplicationError {
        code?: string;
        description?: string;
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
        REQUIRED_FIELD = "REQUIRED_FIELD"
    }
    interface GenericShippingRatesError {
        errors?: ApplicationError[];
    }
    interface ShippingRatesConfig {
        /** Short name */
        name?: string;
        /** Carrier description */
        description?: string | null;
        /** Carrier learn more url */
        learnMoreUrl?: string | null;
        /** Dashboard URL for Carrier */
        dashboardUrl?: string | null;
        /** Require site owner to define fallback rate. Turn it on if you do not provide rate as part of the integration */
        fallbackDefinitionMandatory?: boolean;
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
        /** @readonly */
        identityType?: IdentityType;
        /** ID of a site visitor that has not logged in to the site. */
        anonymousVisitorId?: string;
        /** ID of a site visitor that has logged in to the site. */
        memberId?: string;
        /** ID of a Wix user (site owner, contributor, etc.). */
        wixUserId?: string;
        /** ID of an app. */
        appId?: string;
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
        /** All items included to be sent */
        lineItems?: ProductItem[];
        /** Destination of the items */
        shippingDestination?: Address;
        /**
         * Where the items are sent from - this may be needed for some carriers.
         * For now it will simply be the business location of the store.
         */
        shippingOrigin?: Address;
        /** Contact details */
        buyerContactDetails?: FullAddressContactDetails;
        /** Measure unit */
        weightUnit?: WeightUnit;
        /** If tax should be added to price */
        taxIncludedInPrices?: boolean;
    }
    export { AdditionalCharge, Address, AddressLocation, AddressStreetOneOf, ApplicationError, CatalogReference, ChargeType, Context, DeliveryLogistics, FieldViolation, FullAddressContactDetails, GenericShippingRatesError, GetShippingRatesOptions, GetShippingRatesRequest, GetShippingRatesResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, InvalidAddressError, InvalidPostalCodeError, MissingPostalCodeError, PhysicalProperties, PickupDetails, PickupMethod, ProductItem, RuleType, ShippingOption, ShippingPrice, ShippingRatesConfig, ShippingRatesProvider, StreetAddress, Subdivision, SubdivisionType, VatId, VatType, WeightUnit };
}
