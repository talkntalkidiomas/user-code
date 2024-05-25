declare module "interfaces-ecommerce-v1-additional-fees-provider" {
    interface AdditionalFeesProvider {
        /** GUID unique to this list for this site */
        _id?: string | null;
    }
    interface CalculateAdditionalFeesRequest {
        /** LineItems */
        lineItems?: LineItem[];
        /** Selected shipping option */
        shippingInfo?: ShippingInformation;
        /** Applied discounts */
        appliedDiscounts?: AppliedDiscount[];
    }
    interface LineItem {
        /** Line item ID. */
        _id?: string;
        /** Quantity. */
        quantity?: number | null;
        /** Catalog reference */
        catalogReference?: CatalogReference;
        /** Product/booking/event name. */
        productName?: string | null;
        /** Price. */
        price?: string;
        /** Physical properties (if applicable). */
        physicalProperties?: PhysicalProperties;
        /** Subscription settings. */
        subscriptionSettings?: SubscriptionSettings;
        /**
         * Type of selected payment option for current item. Defaults to `FULL_PAYMENT_ONLINE`.
         * + `FULL_PAYMENT_ONLINE` - The entire payment for this item happens as part of the checkout.
         * + `FULL_PAYMENT_OFFLINE` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
         * + `MEMBERSHIP` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is 0.
         * + `DEPOSIT_ONLINE` -  Partial payment for the given item to be paid upfront during the checkout. Amount to be paid is defined by deposit_amount field.
         */
        paymentOption?: PaymentOptionType;
        /** Service properties. When relevant, this contains information such as date and number of participants. */
        serviceProperties?: ServiceProperties;
        /**
         * In cases where `catalogReference.catalogItemId` is NOT the actual catalog item ID, this field will return the true item's ID.
         * + For example, for Wix Bookings, `catalogReference.catalogItemId` is the booking ID. Therefore this value is set to the service ID.
         * + In most cases, this field has the same value as `catalogReference.catalogItemId`.
         * + Used in membership validation.
         */
        rootCatalogItemId?: string | null;
        /**
         * Optional - partial amount of item's price to be paid now for checkout cases with DEPOSIT_ONLINE payment option
         * If omitted - item's price will not be split and is expected to be paid in single installment
         */
        depositAmount?: string | null;
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
    interface Scope {
        /** Scope namespace (Wix Stores, Wix Bookings, Wix Events) */
        namespace?: string;
        /** Coupon scope's applied group (e.g., event or ticket in Wix Events) */
        group?: Group;
    }
    interface Group {
        /** Coupon scope's group (e.g., product or collection in Wix Stores). See [valid scope values](https://dev.wix.com/api/rest/coupons/coupons/valid-scope-values). */
        name?: string;
        /** Item ID (when the coupon scope is limited to just one item). */
        entityId?: string | null;
    }
    interface SubscriptionSettings {
        /** Frequency of recurring payment. Every day/week/month/year. */
        frequency?: SubscriptionFrequency;
    }
    /** Frequency unit of recurring payment */
    enum SubscriptionFrequency {
        UNDEFINED = "UNDEFINED",
        DAY = "DAY",
        WEEK = "WEEK",
        MONTH = "MONTH",
        YEAR = "YEAR"
    }
    /** Type of selected payment option for catalog item */
    enum PaymentOptionType {
        /** The entire payment for given item will happen as part of the checkout. */
        FULL_PAYMENT_ONLINE = "FULL_PAYMENT_ONLINE",
        /** The entire payment for given item will happen after the checkout. */
        FULL_PAYMENT_OFFLINE = "FULL_PAYMENT_OFFLINE",
        /** Given item cannot be paid via monetary payment options, only via membership. When this option is used, price will always be 0. */
        MEMBERSHIP = "MEMBERSHIP",
        /**
         * Partial payment for the given item to be paid upfront during the checkout.
         * Amount to be paid is defined by `deposit_amount` field on per-item basis.
         */
        DEPOSIT_ONLINE = "DEPOSIT_ONLINE"
    }
    interface ServiceProperties {
        /** Optional - The date and time for which the service is supposed to be provided. For example, the time of the class. */
        scheduledDate?: Date;
        /** Optional - The number of people participating in this service. For example, the number of people attending the class or the number of people per hotel room. */
        numberOfParticipants?: number | null;
    }
    interface ShippingInformation {
        /** Shipping region. */
        region?: ShippingRegion;
        /** Selected shipping option. */
        selectedCarrierServiceOption?: SelectedCarrierServiceOption;
        /** All shipping options. */
        carrierServiceOptions?: CarrierServiceOption[];
    }
    interface ShippingRegion {
        /**
         * Shipping region ID.
         * @readonly
         */
        _id?: string;
        /** Shipping region name. */
        name?: string;
    }
    interface SelectedCarrierServiceOption {
        /** Unique identifier of selected option. For example, "usps_std_overnight". */
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
        /**
         * Were we able to find the requested shipping option, or otherwise we fallback to the default one (the first)
         * @readonly
         */
        requestedShippingOption?: boolean;
        /** Other charges */
        otherCharges?: SelectedCarrierServiceOptionOtherCharge[];
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
        /** Whether the pickup address is that of a business - this may effect tax calculation. */
        businessLocation?: boolean;
        /** Pickup method */
        pickupMethod?: PickupMethod;
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
        /** Street address object, with number, name, and apartment number in separate fields. */
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
    }
    enum PickupMethod {
        UNKNOWN_METHOD = "UNKNOWN_METHOD",
        STORE_PICKUP = "STORE_PICKUP",
        PICKUP_POINT = "PICKUP_POINT"
    }
    interface SelectedCarrierServiceOptionPrices {
        /** Total shipping price, after discount and after tax. */
        totalPriceAfterTax?: MultiCurrencyPrice;
        /** Tax details. */
        taxDetails?: ItemTaxFullDetails;
        /** Shipping discount before tax. */
        totalDiscount?: MultiCurrencyPrice;
        /** Shipping price before discount and before tax. */
        price?: MultiCurrencyPrice;
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
    interface ItemTaxFullDetails {
        /** Amount for which tax is calculated. */
        taxableAmount?: MultiCurrencyPrice;
        /** Tax rate %, as a decimal point between 0 and 1. */
        taxRate?: string;
        /** Calculated tax, based on `taxable_amount` and `tax_rate`. */
        totalTax?: MultiCurrencyPrice;
        /**
         * If breakdown exists, the sum of rates in the breakdown must equal `tax_rate`.
         * @readonly
         */
        rateBreakdown?: TaxRateBreakdown[];
    }
    interface TaxRateBreakdown {
        /** Type of tax against which the calculation was performed. */
        name?: string;
        /** Rate at which this tax detail was calculated. */
        rate?: string;
        /** Amount of tax for this tax detail. */
        tax?: MultiCurrencyPrice;
    }
    interface SelectedCarrierServiceOptionOtherCharge {
        /** Type of additional cost. */
        type?: ChargeType;
        /** Details of the charge, such as 'Full Coverage Insurance of up to 80% of value of shipment'. */
        details?: string | null;
        /** Price of added charge. */
        cost?: SelectedCarrierServiceOptionPrices;
    }
    enum ChargeType {
        HANDLING_FEE = "HANDLING_FEE",
        INSURANCE = "INSURANCE"
    }
    interface CarrierServiceOption {
        /** Carrier ID. */
        carrierId?: string;
        /** Shipping options offered by this carrier for this request. */
        shippingOptions?: ShippingOption[];
    }
    interface ShippingOption {
        /**
         * Unique code of provided shipping option like "usps_std_overnight".
         * For legacy calculators this would be the UUID of the option.
         */
        code?: string;
        /**
         * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
         * For example, "Standard" or "First-Class Package International".
         */
        title?: string;
        /** Delivery logistics. */
        logistics?: DeliveryLogistics;
        /** Sipping price information. */
        cost?: ShippingPrice;
    }
    interface ShippingPrice {
        /** Shipping price. */
        price?: MultiCurrencyPrice;
        /** Other costs such as insurance, handling & packaging for fragile items, etc. */
        otherCharges?: OtherCharge[];
    }
    interface OtherCharge {
        /** Type of additional cost. */
        type?: ChargeType;
        /** Price of added cost. */
        price?: MultiCurrencyPrice;
    }
    interface AppliedDiscount extends AppliedDiscountDiscountSourceOneOf {
        /** Discount type. */
        discountType?: DiscountType;
        /** IDs of line items the discount applies to. */
        lineItemIds?: string[];
        /** Coupon details. */
        coupon?: Coupon;
        /** Merchant discount. */
        merchantDiscount?: MerchantDiscount;
        /** Discount rule */
        discountRule?: DiscountRule;
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
        /** Coupon value. */
        amount?: MultiCurrencyPrice;
        /** Coupon name. */
        name?: string;
    }
    interface MerchantDiscount {
        /** Discount value. */
        amount?: MultiCurrencyPrice;
    }
    interface DiscountRule {
        /** Discount rule ID */
        _id?: string;
        /** Discount rule name */
        name?: DiscountRuleName;
        /** Discount value. */
        amount?: MultiCurrencyPrice;
    }
    interface DiscountRuleName {
        /** Original discount rule name (in site's default language). */
        original?: string;
        /** Translated discount rule name according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface CalculateAdditionalFeesResponse {
        /** Returned additional fees */
        additionalFees?: AdditionalFee[];
        /** Currency */
        currency?: string;
    }
    interface AdditionalFee {
        /** Additional fee's unique code (or ID) for future processing */
        code?: string | null;
        /** Translated additional fee's name */
        name?: string;
        /** Additional fee's price */
        price?: string;
        /** Tax details */
        taxDetails?: TaxDetails;
    }
    interface TaxDetails {
        /** Indication if additional fee is taxable or not */
        taxable?: boolean;
    }
    interface AdditionalFeesSPIConfig {
    }
    interface CalculateAdditionalFeesOptions {
        /** LineItems */
        lineItems?: LineItem[];
        /** Selected shipping option */
        shippingInfo?: ShippingInformation;
        /** Applied discounts */
        appliedDiscounts?: AppliedDiscount[];
    }
    export { AdditionalFee, AdditionalFeesProvider, AdditionalFeesSPIConfig, Address, AppliedDiscount, AppliedDiscountDiscountSourceOneOf, CalculateAdditionalFeesOptions, CalculateAdditionalFeesRequest, CalculateAdditionalFeesResponse, CarrierServiceOption, CatalogReference, ChargeType, Coupon, DeliveryLogistics, DiscountRule, DiscountRuleName, DiscountType, Group, ItemTaxFullDetails, LineItem, MerchantDiscount, MultiCurrencyPrice, OtherCharge, PaymentOptionType, PhysicalProperties, PickupDetails, PickupMethod, Scope, SelectedCarrierServiceOption, SelectedCarrierServiceOptionOtherCharge, SelectedCarrierServiceOptionPrices, ServiceProperties, ShippingInformation, ShippingOption, ShippingPrice, ShippingRegion, StreetAddress, SubscriptionFrequency, SubscriptionSettings, TaxDetails, TaxRateBreakdown };
}
