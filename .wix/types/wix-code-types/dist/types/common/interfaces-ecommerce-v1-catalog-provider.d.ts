declare module "interfaces-ecommerce-v1-catalog-provider" {
    interface CatalogProvider {
    }
    interface GetCatalogItemsRequest {
        /** Catalog and items references and quantities. */
        catalogReferences?: CatalogReferenceAndQuantity[];
        /** Weight measurement unit. Defaults to site weight unit. */
        weightUnit?: WeightUnit;
        /** Currency code the items' prices will be presented in. For example, `"USD"` or `"EUR"`. Defaults to site currency. */
        currency?: string;
        /** Instance ID. Set only when calling HTTP providers. */
        instanceId?: string | null;
    }
    interface CatalogReferenceAndQuantity {
        /** Catalog and item reference info. */
        catalogReference?: CatalogReference;
        /** Item quantity. */
        quantity?: number;
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
    enum WeightUnit {
        /** Weight unit can't be classified, due to an error */
        UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
        /** Kilograms */
        KG = "KG",
        /** Pounds */
        LB = "LB"
    }
    interface GetCatalogItemsResponse {
        /** Catalog info and item data. */
        catalogItems?: Item[];
    }
    interface Item {
        /** Catalog and item reference info. */
        catalogReference?: CatalogReference;
        /** Item data. */
        data?: ItemData;
    }
    interface ItemData {
        /**
         * *Required** - Item name.
         * + Stores - `product.name`
         * + Bookings - `service.info.name`
         * + Events - `ticket.name`
         */
        productName?: ProductName;
        /**
         * Optional - URL to the item's page on the site. When not provided, the link back from the cart page to the relevant product page will not work.
         * The URL is optional and if not provided, the site URL will be used.
         */
        url?: string;
        /** *Required** - Item type. Either a preset type or custom. */
        itemType?: ItemType;
        /** *Required** - Item price **after** catalog-defined discount. */
        price?: string;
        /** Optional - Item price **before** catalog-defined discount. Defaults to `price` when not provided. */
        fullPrice?: string | null;
        /**
         * Optional - Line item description lines. Line item description lines. Used for displaying the cart, checkout and order.
         * For example, if you want `Size: Large` to appear under the item name, create a description line with `{"name": {"original": "Size"}}` and  `{"plainText": {"original": "Large"}}`.
         */
        descriptionLines?: DescriptionLine[];
        /**
         * Optional - Line item image.
         * + Pass at least media ID, width, and height. You should be able to get these values when you upload an image to Wix media manager.
         * + Given a full image URL of https://static.wixstatic.com/media/5cc69183e7954e2c9760fa2383870992.jpg, `media.id` would be "5cc69183e7954e2c9760fa2383870992.jpg".
         * + We only support images coming from Wix media manager, if you want to use an image from another source you must first upload it to Wix media manager.
         * + We are working on removing `altText` as it is not being used by our systems.
         */
        media?: string;
        /**
         * Optional - Item quantity available for purchase. Only return this if inventory is managed.
         * Not returning this field means that the buyer can "infinitely" tick up the number of items in the cart.
         */
        quantityAvailable?: number | null;
        /** Optional - Physical properties of the item. When relevant, contains information such as SKU and item weight. */
        physicalProperties?: PhysicalProperties;
        /**
         * Optional - Type of selected payment option for current item. Defaults to `FULL_PAYMENT_ONLINE`.
         * + `FULL_PAYMENT_ONLINE` - Entire payment for this item happens as part of the checkout.
         * + `FULL_PAYMENT_OFFLINE` - Entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
         * + `MEMBERSHIP` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is 0.
         * + `DEPOSIT_ONLINE` -  Partial payment for the given item to be paid upfront during the checkout. Amount to be paid is defined by deposit_amount field.
         */
        paymentOption?: PaymentOptionType;
        /**
         * Optional - Service properties. When relevant, this contains information such as date and number of participants.
         * Used, among other things, when checking for valid memberships.
         */
        serviceProperties?: ServiceProperties;
        /**
         * Optional - In cases where `catalogReference.catalogItemId` is NOT the actual catalog item ID, this field will return the true item's ID.
         * + For example, for Wix Bookings, `catalogReference.catalogItemId` is the booking ID. Therefore this value is set to the service ID.
         * + in most cases, this field is the name as `catalogReference.catalogItemId`.
         * + Used in membership validation.
         */
        rootCatalogItemId?: string | null;
        /** Optional - Additional description for the price. For example, when passing `"price": "0"` but additional details about the actual price are needed - "Starts at $67". */
        priceDescription?: PriceDescription;
        /**
         * Optional - partial payment for the given item to be paid upfront during the checkout.
         * Eligible for catalog items with type `DEPOSIT_ONLINE`.
         * If omitted - item's price will not be split and is expected to be paid in single installment
         */
        depositAmount?: string | null;
    }
    interface ProductName {
        /** *Required** - Original item name (in site's default language). */
        original?: string;
        /** Optional - Translated item name according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
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
    interface DescriptionLine extends DescriptionLineValueOneOf, DescriptionLineDescriptionLineValueOneOf {
        /** Description line name. */
        name?: DescriptionLineName;
        /** Description line plain text value. */
        plainText?: PlainTextValue;
        /** Description line color value. */
        colorInfo?: Color;
    }
    /** @oneof */
    interface DescriptionLineValueOneOf {
        /** Description line plain text value. */
        plainText?: PlainTextValue;
        /** Description line color value. */
        colorInfo?: Color;
    }
    /** @oneof */
    interface DescriptionLineDescriptionLineValueOneOf {
    }
    interface DescriptionLineName {
        /** Optional - Description line name in site's default language. */
        original?: string;
        /** Optional - Translated description line item according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface PlainTextValue {
        /** Optional - Description line plain text value in site's default language. */
        original?: string;
        /** Optional - Translated description line plain text value according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface Color {
        /** Optional - Description line color name in site's default language. */
        original?: string;
        /** Optional - Translated description line color name according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
        /** Optional - HEX or RGB color code for display. */
        code?: string | null;
    }
    enum DescriptionLineType {
        UNRECOGNISED = "UNRECOGNISED",
        PLAIN_TEXT = "PLAIN_TEXT",
        COLOR = "COLOR"
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
    interface SecuredMedia {
        /** Media ID in media manager. */
        _id?: string;
        /** Original file name. */
        fileName?: string;
        /** File type. */
        fileType?: FileType;
    }
    enum FileType {
        UNSPECIFIED = "UNSPECIFIED",
        SECURE_PICTURE = "SECURE_PICTURE",
        SECURE_VIDEO = "SECURE_VIDEO",
        SECURE_DOCUMENT = "SECURE_DOCUMENT",
        SECURE_MUSIC = "SECURE_MUSIC",
        SECURE_ARCHIVE = "SECURE_ARCHIVE"
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
    interface PriceDescription {
        /** *Required** - Original price description (in site's default language). */
        original?: string;
        /** Optional - Translated product name according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface QueryCatalogItemsRequest {
        /** A list of itemIDs to filter by. If exists, the result will only include the items with the IDs passed. */
        catalogItemIds?: string[] | null;
        /** An item name to filter by. If exists, the result will only include items with name that starts with this string. */
        catalogItemName?: string | null;
        /** Paging options to limit and skip a number of items. */
        paging?: Paging;
    }
    interface Paging {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface QueryCatalogItemsResponse {
        /** Catalog info and item data. */
        catalogItems?: BasicItem[];
        /** Paging metadata. */
        metadata?: PagingMetadata;
    }
    interface BasicItem {
        /** The ID of the the item. */
        _id?: string;
        /** The name of the item. */
        name?: string;
        /** Item Media items. */
        image?: string[];
        /** The current status of the inventory */
        inStock?: boolean;
    }
    interface NumericPropertyRange {
        /** Minimum value. */
        minValue?: number;
        /** Maximum value. */
        maxValue?: number;
    }
    interface PagingMetadata {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Offset that was requested. */
        offset?: number | null;
        /** Total number of items that match the query. */
        total?: number | null;
        /** Flag that indicates the server failed to calculate the `total` field. */
        tooManyToCount?: boolean | null;
    }
    interface CatalogSPIConfig {
        /** The enablement and UI configuration for discount of all items in the catalog */
        allItemsDiscount?: DiscountConfig;
        /** The enablement and UI configuration for discount of specific items in the catalog */
        specificItemsDiscount?: DiscountConfig;
    }
    /** Configuration for discount functionality on the catalog */
    interface DiscountConfig {
        /** Signifies if the discount is  enabled  in the service */
        enabled?: boolean;
        /** The translation key to get the text to display to the user */
        translationKey?: string;
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
    interface GetCatalogItemsOptions {
        /** Catalog and items references and quantities. */
        catalogReferences?: CatalogReferenceAndQuantity[];
        /** Weight measurement unit. Defaults to site weight unit. */
        weightUnit?: WeightUnit;
        /** Currency code the items' prices will be presented in. For example, `"USD"` or `"EUR"`. Defaults to site currency. */
        currency?: string;
        /** Instance ID. Set only when calling HTTP providers. */
        instanceId?: string | null;
    }
    interface QueryCatalogItemsOptions {
        /** A list of itemIDs to filter by. If exists, the result will only include the items with the IDs passed. */
        catalogItemIds?: string[] | null;
        /** An item name to filter by. If exists, the result will only include items with name that starts with this string. */
        catalogItemName?: string | null;
        /** Paging options to limit and skip a number of items. */
        paging?: Paging;
    }
    export { BasicItem, CatalogProvider, CatalogReference, CatalogReferenceAndQuantity, CatalogSPIConfig, Color, Context, Description, DescriptionLine, DescriptionLineDescriptionLineValueOneOf, DescriptionLineName, DescriptionLineType, DescriptionLineValueOneOf, DiscountConfig, FileType, GetCatalogItemsOptions, GetCatalogItemsRequest, GetCatalogItemsResponse, Group, IdentificationData, IdentificationDataIdOneOf, IdentityType, Item, ItemData, ItemType, ItemTypeItemType, ItemTypeItemTypeDataOneOf, NumericPropertyRange, Paging, PagingMetadata, PaymentOptionType, PhysicalProperties, PlainTextValue, PriceDescription, ProductName, QueryCatalogItemsOptions, QueryCatalogItemsRequest, QueryCatalogItemsResponse, Scope, SecuredMedia, ServiceProperties, SubscriptionFrequency, SubscriptionOptionInfo, SubscriptionSettings, Title, WeightUnit };
}
