/**
 * The wix-stores-backend module contains functionality for working with your
 *  site's store from backend code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#)
 */
declare module 'wix-stores-backend' {
    /**
     * Adds media items by ID to a product.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#addProductMedia)
     */
    function addProductMedia(productId: string, media: Media[]): Promise<void>;
    /**
     * Adds media items by ID to product options.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#addProductMediaToChoices)
     */
    function addProductMediaToChoices(productId: string, mediaChoices: MediaChoice[]): Promise<void>;
    /**
     * Adds products by ID to a product collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#addProductsToCollection)
     */
    function addProductsToCollection(collectionId: string, productIds: string[]): Promise<void>;
    /**
     * Adjusts a numeric property for up to 100 products at a time.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#bulkAdjustProductProperty)
     */
    function bulkAdjustProductProperty(ids: string[], adjust: BulkAdjustProperties): Promise<BulkUpdateResponse>;
    /**
     * Updates a property for up to 100 products at a time.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#bulkUpdateProductProperty)
     */
    function bulkUpdateProductProperty(ids: string[], set: BulkUpdateProperties): Promise<BulkUpdateResponse>;
    /**
     * **Deprecated.**
     * This function will continue to work until September 4, 2024, but a newer version is available at
     * [`wix-ecom-backend.OrderFulfillments.createFulfillment()`](https://www.wix.com/velo/reference/wix-ecom-backend/orderfulfillments/createfulfillment).
     *
     * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#createFulfillment)
     */
    function createFulfillment(orderId: string, fulfillment: FulfillmentInfo): Promise<NewFulfillmentAndOrder>;
    /**
     * **Deprecated.**
     * This function will continue to work until September 4, 2024, but a newer version is available at
     * [`wix-ecom-backend.Orders.createOrder()`](https://www.wix.com/velo/reference/wix-ecom-backend/orders/createorder).
     *
     * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#createOrder)
     */
    function createOrder(orderInfo: OrderInfo): Promise<Order>;
    /**
     * Creates a new product.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#createProduct)
     */
    function createProduct(productInfo: ProductInfo): Promise<Product>;
    /**
     * Subtracts a set number of items from inventory.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#decrementInventory)
     */
    function decrementInventory(items: DecrementInfo[]): Promise<void>;
    /**
     * **Deprecated.**
     * This function will continue to work until September 4, 2024, but a newer version is available at
     * [`wix-ecom-backend.OrderFulfillments.deleteFulfillment()`](https://www.wix.com/velo/reference/wix-ecom-backend/orderfulfillments/deletefulfillment).
     *
     * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#deleteFulfillment)
     */
    function deleteFulfillment(orderId: string, fulfillmentId: string): Promise<Order>;
    /**
     * Deletes an existing product.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#deleteProduct)
     */
    function deleteProduct(productId: string): Promise<void>;
    /**
     * Deletes all options for an existing product.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#deleteProductOptions)
     */
    function deleteProductOptions(productId: string): Promise<void>;
    /**
     * Gets the specified abandoned shopping cart.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#getAbandonedCart)
     */
    function getAbandonedCart(cartId: string): Promise<AbandonedCart>;
    /**
     * **Deprecated.**
     * This function will continue to work until September 4, 2024, but a newer version is available at
     * [`wix-ecom-backend.CurrentCart.getCurrentCart()`](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/getcurrentcart).
     *
     * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#getCurrentCart)
     */
    function getCurrentCart(): Promise<Cart>;
    /**
     * Generates a link to a PDF file containing information about one or more specified orders, up to 1000 orders.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#getOrdersLink)
     */
    function getOrdersLink(orderIds: string[]): Promise<LinkToPdf>;
    /**
     * Generates a link to a PDF file containing an order's packing slip.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#getPackingSlipLink)
     */
    function getPackingSlipLink(orderId: string): Promise<LinkToPdf>;
    /**
     * Gets the availability of a product based on the specified option choices.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#getProductOptionsAvailability)
     */
    function getProductOptionsAvailability(productId: string, choices: ProductChoices): Promise<ProductOptionsAvailability>;
    /**
     * Gets a product's available variants based on the specified product ID and either option choices or variant IDs.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#getProductVariants)
     */
    function getProductVariants(productId: string, options?: ProductVariantOptions): Promise<VariantItem[]>;
    /**
     * Adds a set number of items from inventory.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#incrementInventory)
     */
    function incrementInventory(items: IncrementInfo[]): Promise<void>;
    /**
     * Removes media items by ID from a product.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#removeProductMedia)
     */
    function removeProductMedia(productId: string, media: Media[]): Promise<void>;
    /**
     * Removes media items by ID from a product's options.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#removeProductMediaFromChoices)
     */
    function removeProductMediaFromChoices(productId: string, mediaChoices: MediaChoice[]): Promise<void>;
    /**
     * Removes products by ID from a collection.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#removeProductsFromCollection)
     */
    function removeProductsFromCollection(collectionId: string, productIds: string[]): Promise<void>;
    /**
     * Resets the data (such as the price and the weight) of all variants for a given product to their default values.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#resetVariantData)
     */
    function resetVariantData(productId: string): Promise<void>;
    /**
     * Sends a fulfillment email to a specified custom fulfiller of a line item in a given order.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#sendFulfillmentEmail)
     */
    function sendFulfillmentEmail(orderId: string, fulfillerId: string): Promise<void>;
    /**
     * **Deprecated.**
     * This function will continue to work until September 4, 2024, but a newer version is available at
     * [`wix-ecom-backend.OrderFulfillments.updateFulfillment()`](https://www.wix.com/velo/reference/wix-ecom-backend/orderfulfillments/updatefulfillment).
     *
     * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#updateFulfillment)
     */
    function updateFulfillment(orderId: string, fulfillmentId: string, trackingInfo: TrackingInfo): Promise<Order>;
    /**
     * Updates an existing inventory item's variants by inventory ID.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#updateInventoryVariantFields)
     */
    function updateInventoryVariantFields(inventoryId: string, inventoryInfo: InventoryItemVariantInfo): Promise<void>;
    /**
     * Updates an existing inventory item's variants by product ID.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#updateInventoryVariantFieldsByProductId)
     */
    function updateInventoryVariantFieldsByProductId(productId: string, inventoryInfo: InventoryItemVariantInfo): Promise<void>;
    /**
     * Updates an existing product by ID.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#updateProductFields)
     */
    function updateProductFields(productId: string, productInfo: UpdateProductInfo): Promise<Product>;
    /**
     * Updates the data (such as the price and the weight) of an existing product variant in the store.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.html#updateVariantData)
     */
    function updateVariantData(productId: string, variantInfo: VariantInfo[]): Promise<VariantItem>;
    /**
     * An object representing an abandoned shopping cart.
     */
    type AbandonedCart = {
        /**
         * Unique identifier of the shopping cart.
         */
        _id: string;
        /**
         * Date and time the shopping cart was abandoned.
         */
        abandonTime: string;
        /**
         * Total price of all items in the cart.
         */
        total: string;
        /**
         * The buyer's information.
         */
        buyerInfo: BuyerInfo;
        /**
         * Log of updates related to the cart.
         */
        activities: Activity;
        /**
         * Status of the abandoned cart. Either `"ABANDONED"` or `"RECOVERED"`.
         */
        status: string;
    };
    /**
     * An array of objects representing a log of updates related to the order.
     */
    type Activities = {
        /**
         * Activity type.
         * One of:
         *
         *
         *  - `"MERCHANT_COMMENT"`
         *  - `"ORDER_PLACED"`
         *  - `"ORDER_PAID"`
         *  - `"ORDER_FULFILLED"`
         *  - `"ORDER_NOT_FULFILLED"`
         *  - `"DOWNLOAD_LINK_SENT"`
         *  - `"PICKUP_READY_EMAIL_SENT"`
         *  - `"TRACKING_NUMBER_ADDED"`
         *  - `"TRACKING_NUMBER_EDITED"`
         *  - `"TRACKING_LINK_WAS_SET"`
         *  - `"SHIPPING_CONFIRMATION_EMAIL_SENT"`
         *  - `"INVOICE_WAS_SET"`
         *  - `"INVOICE_WAS_REMOVED"`
         *  - `"INVOICE_WAS_SENT"`
         */
        type: string;
        /**
         * Who made the update (activity) to the order item.
         */
        author: string;
        /**
         * Comment added to the activity.
         */
        message: string;
        /**
         * The time the update (activity) occurred.
         */
        timestamp: string;
    };
    /**
     * An object representing a shopping cart activity.
     */
    type Activity = {
        /**
         * One of:
         *
         *  + `"CUSTOM_ACTIVITY"`
         *  + `"EMAIL_NOT_SENT"`
         *  + `"EMAIL_SENT"`
         *  + `"NOTIFICATION_SENT"`
         *  + `"SCHEDULED"`
         *  + `"TASK_CREATED"`
         *  + `"UNRECOGNIZED_TYPE"`
         */
        activityType: string;
        /**
         * Activity message.
         */
        message: string;
        /**
         * Time activity occurred.
         */
        timestamp: string;
        /**
         * Custom activity data.
         */
        customData: CustomData;
    };
    /**
     * An object representing address information.
     */
    type Address = {
        /**
         * Address in readable format.
         */
        formatted?: string;
        /**
         * City.
         */
        city: string;
        /**
         * Country.
         */
        country: string;
        /**
         * Main address information.
         */
        addressLine: string;
        /**
         * Additional address information (apt, floor, etc.), if used.
         */
        addressLine2?: string;
        /**
         * Alternative property for street name and number.
         */
        streetAddress?: StreetAddress;
        /**
         * Postal/zip code.
         */
        postalCode: string;
        /**
         * Subdivision of a country, such as a state or province.
         */
        subdivision: string;
    };
    type AdjustBy = {
        /**
         * Adjust by percentage.
         */
        percentage?: PercentageAdjustment;
        /**
         * Adjust by amount.
         */
        amount?: number;
    };
    /**
     * An object representing a coupon applied to the order.
     */
    type AppliedCoupon = {
        /**
         * Coupon ID.
         */
        couponId: string;
        /**
         * Coupon name.
         */
        name: string;
        /**
         * Coupon code (used by a buyer to apply the coupon).
         */
        code: string;
    };
    /**
     * An object representing an order's billing info.
     */
    type BillingInfo = {
        /**
         * Billing address.
         */
        address?: Address;
        /**
         * Last name.
         */
        lastName?: string;
        /**
         * First name.
         */
        firstName?: string;
        /**
         * Email address.
         */
        email?: string;
        /**
         * Phone number.
         */
        phone?: string;
        /**
         * Company name.
         */
        company?: string;
        /**
         * VAT information.
         */
        vatId?: VatId;
        /**
         * Deprecated: replaced with paymentProviderTransactionId.
         */
        externalTransactionId?: string;
        /**
         * Date and time the payment was made.
         */
        paidDate?: string;
        /**
         * Payment method.
         */
        paymentMethod?: string;
        /**
         * Unique transaction ID for the payment gateway.
         */
        paymentGatewayTransactionId?: string;
        /**
         * Unique ID for the payment provider.
         */
        paymentProviderTransactionId?: string;
    };
    type BulkActionMetadata = {
        /**
         * Number of items that were successfully processed.
         */
        totalSuccesses: number;
        /**
         * Number of items that couldn't be processed.
         */
        totalFailures: number;
        /**
         * Number of failures without details because detailed failure threshold was exceeded.
         */
        undetailedFailures: number;
    };
    type BulkAdjustProperties = {
        /**
         * Adjust product price.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, variants prices are calculated according to the adjusted price.
         * If the variant price is negative after the adjustment, the update fails.
         */
        price?: AdjustBy;
        /**
         * Adjust the product's cost of goods.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, cost of goods is adjusted per variant.
         */
        cost?: AdjustBy;
        /**
         * Adjust product weight. If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, weight is adjusted per variant.
         */
        weight?: AdjustBy;
    };
    type BulkResults = {
        /**
         * Item metadata.
         */
        itemMetadata: ItemMetadata;
    };
    type BulkUpdateProperties = {
        /**
         * Set product price.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, variants prices are calculated according to the set product price.
         * If the variant price is negative after setting the new price, the update fails.
         */
        price?: number;
        /**
         * Set the product's cost of goods.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, cost of goods is set per variant.
         */
        cost?: number;
        /**
         * Set product weight.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, weight is set per variant.
         */
        weight?: number;
        /**
         * Set product ribbon. Pass an empty string to remove the existing ribbon.
         */
        ribbon?: string;
        /**
         * Set product brand. Pass an empty string to remove the existing brand.
         */
        brand?: string;
    };
    type BulkUpdateResponse = {
        /**
         * Bulk action results.
         */
        results: BulkResults[];
        /**
         * Bulk action metadata.
         */
        bulkActionMetadata: BulkActionMetadata;
    };
    /**
     * An object representing information about the buyer.
     */
    type BuyerInfo = {
        /**
         * Unique buyer's ID.
         */
        id: string;
        /**
         * Buyer's email address.
         */
        email: string;
        /**
         * Buyer's first name.
         */
        firstName: string;
        /**
         * Buyer's last name.
         */
        lastName: string;
        /**
         * Buyer's identity.
         * One of:
         *
         *  + `"MEMBER"`: A logged-in site member.
         *  + `"CONTACT"`: A Wix contact.
         *  + `"ADMIN"`: Buyer is the site owner.
         *  + `"VISITOR"`: Buyer is not logged in.
         */
        identityType: string;
        /**
         * Buyer's phone number.
         */
        phone?: string;
    };
    /**
     * An object representing a shopping cart.
     */
    type Cart = {
        /**
         * Unique identifier of the shopping cart.
         */
        _id: string;
        /**
         * Coupon applied in the shopping cart.
         */
        appliedCoupon: CartAppliedCoupon;
        /**
         * Cart billing address.
         */
        billingAddress: CartAddress;
        /**
         * The buyer's information.
         */
        buyerInfo: CartBuyerInfo;
        /**
         * Cart status. Either `"INCOMPLETE"` or `"COMPLETE"`.
         */
        status: string;
        /**
         * Currency of the shopping cart.
         */
        currency: Currency;
        /**
         * The shopping cart's shipping information.
         */
        shippingInfo: CartShippingInfo;
        /**
         * Items in the shopping cart.
         */
        lineItems: CartLineItem[];
        /**
         * The shopping cart's totals.
         */
        totals: OrderTotals;
        /**
         * The order's units of weight. One of: `"KG"`, `"LB"`, or `"UNSPECIFIED_WEIGHT_UNIT"`.
         */
        weightUnit: string;
    };
    /**
     * An object representing an address.
     */
    type CartAddress = {
        /**
         * First name.
         */
        firstName: string;
        /**
         * Last name.
         */
        lastName: string;
        /**
         * Email address.
         */
        email: string;
        /**
         * Phone number.
         */
        phone: string;
        /**
         * Address.
         */
        address: string;
    };
    /**
     * An object representing a coupon applied in a shopping cart.
     */
    type CartAppliedCoupon = {
        /**
         * Coupon code.
         */
        code: string;
        /**
         * Coupon unique identifier.
         */
        couponId: string;
        /**
         * Coupon name.
         */
        name: string;
        /**
         * Type of coupon.
         *  One of:
         *
         *  + `"BuyXGetY"`
         *  + `"FixedPriceAmount"`
         *  + `"FreeShipping"`
         *  + `"MoneyOffAmount"`
         *  + `"PercentOffRate"`
         */
        couponType: string;
        /**
         * Value of the coupon discount.
         */
        discountValue: string;
    };
    /**
     * An object representing a visitor who abandoned a shopping cart.
     */
    type CartBuyerInfo = {
        /**
         * Buyer's unique ID.
         */
        id: string;
        /**
         * Buyer's email address.
         */
        email: string;
        /**
         * Buyer's first name.
         */
        firstName: string;
        /**
         * Buyer's last name.
         */
        lastName: string;
        /**
         * Buyer's identity.
         *  One of:
         *
         *  + `"ADMIN"`: Buyer is the site owner.
         *  + `"MEMBER"`: Buyer is a logged-in site member.
         *  + `"VISITOR"`: Buyer is not logged in.
         *  + `"CONTACT"`: A contact has been created for the buyer.
         */
        identityType: string;
        /**
         * Buyer's phone number.
         */
        phone: string;
    };
    /**
     * An object representing a custom text field.
     */
    type CartCustomTextField = {
        /**
         * Field title.
         */
        title: string;
        /**
         * Field value.
         */
        value: string;
    };
    /**
     * An object representing a line item in a shopping cart.
     */
    type CartLineItem = {
        /**
         * Name of the line item.
         */
        name: string;
        /**
         * Notes about the line item.
         */
        notes: string;
        /**
         * Line item price.
         */
        price: string;
        /**
         * Line item product ID.
         */
        productId: string;
        /**
         * Line item quantity.
         */
        quantity: number;
        /**
         * Line item stock keeping unit.
         */
        sku: string;
        /**
         * Total price charged to the customer for all line items after any applicable discounts.
         */
        totalPrice: string;
        /**
         * Line item weight.
         */
        weight: string;
        /**
         * Type of the line item.
         *  One of:
         *
         *  + `"DIGITAL"`: Digital item.
         *  + `"PHYSICAL"`: Physical item.
         *  + `"CUSTOM_AMOUNT_ITEM"`: Item with a custom price.
         *  + `"UNSPECIFIED"`: Type can't be classified due to an error.
         */
        lineItemType: string;
        /**
         * Line item options.
         */
        options: Option[];
        /**
         * Media item.
         */
        mediaItem: CartMediaItem;
        /**
         * Custom text.
         */
        customTextFields: CartCustomTextField[];
        /**
         * Cart line item ID.
         */
        id: number;
    };
    /**
     * An object representing a line item's primary media.
     */
    type CartMediaItem = {
        /**
         * Media item source for media uploaded to Wix (wix:image, wix:video or external URL).
         */
        src: string;
        /**
         * Media item type. Currently only `"IMAGE"` type supported.
         */
        type: string;
    };
    /**
     * An object representing shipping information.
     */
    type CartShippingInfo = {
        /**
         * Shipment address.
         */
        shippingAddress?: CartAddress;
        /**
         * Pickup address.
         */
        pickupInfo?: CartAddress;
    };
    /**
     * An object representing information about the sales channel that submitted this order.
     */
    type ChannelInfo = {
        /**
         * Order ID from an external system (such as eBay or Amazon).
         */
        externalOrderId?: string;
        /**
         * URL to the order in the external system (such as eBay or Amazon).
         */
        externalOrderUrl?: string;
        /**
         * Sales channel that submitted the order.
         * One of:
         *
         *
         *  + `"WEB"`: Wix online store.
         *  + `"POS"`: Point of sale.
         *  + `"EBAY"`: eBay.
         *  + `"OTHER_PLATFORM"`: Order imported from another system (such as Cart2Cart).
         *  + `"WIX_APP_STORE"`: Order created via the Wix mobile app.
         */
        type: string;
    };
    /**
     * An object representing the choice for a product variant.
     */
    type Choice = {
        /**
         * Product options to use when creating or updating the
         *  product. The object contains key:value pairs where the key is the
         *  option name and the value is the chosen option value.
         */
        choices: any;
    };
    /**
     * An object representing the choice for a product variant.
     */
    type Choices = {
        /**
         * Option name.
         */
        option: string;
        /**
         * Choice name.
         */
        choice: string;
    };
    /**
     * An object representing billing information for creating an order.
     */
    type CreateOrderBillingInfo = {
        /**
         * Billing address.
         */
        address: Address;
        /**
         * Last name.
         */
        lastName?: string;
        /**
         * First name.
         */
        firstName?: string;
        /**
         * Email address.
         */
        email?: string;
        /**
         * Phone number.
         */
        phone?: string;
        /**
         * Company name.
         */
        company?: string;
        /**
         * VAT information.
         */
        vatId?: VatId;
        /**
         * Payment method.
         */
        paymentMethod?: string;
        /**
         * Unique transaction ID for the payment gateway.
         */
        paymentGatewayTransactionId?: string;
        /**
         * Unique ID for the payment provider.
         */
        paymentProviderTransactionId?: string;
    };
    /**
     * An object representing buyer information for creating an order.
     */
    type CreateOrderBuyerInfo = {
        /**
         * Unique buyer's ID.
         */
        id: string;
        /**
         * Buyer's identity.
         * One of:
         *
         *  + `"MEMBER"`: A logged-in site member.
         *  + `"CONTACT"`: A Wix contact.
         */
        identityType: string;
    };
    /**
     * An object representing a line item for creating an order.
     */
    type CreateOrderLineItem = {
        /**
         * Custom text.
         */
        customTextFields?: CustomTextField[];
        /**
         * Line item product ID.
         */
        productId?: string;
        /**
         * Type of line item.
         *  One of:
         *
         *
         *  - `"DIGITAL"`: Digital item.
         *  - `"PHYSICAL"`: Physical item.
         *  - `"CUSTOM_AMOUNT_ITEM"`: Item with a custom price.
         */
        lineItemType?: string;
        /**
         * Line item's primary media item.
         */
        mediaItem?: CreateOrderMediaItem;
        /**
         * Name of the line item.
         */
        name: string;
        /**
         * Notes about the line item.
         */
        notes?: string;
        /**
         * Line item options.
         */
        options?: Option[];
        /**
         * Line item quantity.
         */
        quantity: number;
        /**
         * Line item stock keeping unit.
         */
        sku?: string;
        /**
         * Line item weight.
         */
        weight?: number;
        /**
         * Line item's name, translated into the customer's language.
         */
        translatedName?: string;
        /**
         * Line item's discount amount.
         */
        discount?: number;
        /**
         * Line item's total amount of tax applied.
         */
        tax?: number;
        /**
         * Price information.
         */
        priceData: CreateOrderLineItemPriceData;
        /**
         * Tax group ID.
         */
        taxGroupId?: string;
        /**
         * Line item's fulfiller ID.
         */
        fulfillerId?: string;
        /**
         * Line item's variant ID.
         */
        variantId?: string;
    };
    /**
     * An object representing an line item's price information for creating an order.
     */
    type CreateOrderLineItemPriceData = {
        /**
         * Price of the item.
         */
        price: number;
        /**
         * Whether the price includes tax.
         */
        taxIncludedInPrice?: boolean;
    };
    /**
     * An object representing a line item's primary media item for creating an order.
     */
    type CreateOrderMediaItem = {
        /**
         * Image description for accessibility purposes.
         */
        altText?: string;
        /**
         * Media item source (wix:image or external URL).
         */
        src?: string;
    };
    /**
     * An object representing an order's totals for creating an order.
     */
    type CreateOrderTotals = {
        /**
         * Total calculated discount amount.
         */
        discount?: number;
        /**
         * Total shipping price, including tax.
         */
        shipping?: number;
        /**
         * Subtotal of all the order's line items, excluding tax.
         */
        subtotal: number;
        /**
         * Total amount of tax.
         */
        tax?: number;
        /**
         * Total price.
         */
        total: number;
    };
    /**
     * An object representing a currency.
     */
    type Currency = {
        /**
         * The currency code.
         */
        currency: string;
        /**
         * The currency symbol.
         */
        symbol: string;
    };
    /**
     * An object representing custom activity data.
     */
    type CustomData = {
        /**
         * Activity namespace.
         */
        namespace: string;
        /**
         * JSON object containing custom data.
         */
        customValue: any;
    };
    /**
     * An object representing a custom field added by the customer during the checkout process.
     */
    type CustomField = {
        /**
         * Custom field's title.
         */
        title: string;
        /**
         * Title translated into the buyer's language.
         */
        translatedTitle: string;
        /**
         * Custom field's text.
         */
        value: string;
    };
    /**
     * An object representing a custom text field.
     */
    type CustomTextField = {
        /**
         * Field title.
         */
        title: string;
        /**
         * Field value.
         */
        value: string;
    };
    type DecrementInfo = {
        /**
         * Variant ID.
         */
        variantId: string;
        /**
         * Number to decrement inventory by.
         */
        decrementBy: number;
        /**
         * Product ID.
         */
        productId?: string;
        /**
         * Inventory item ID. This is the `_id` field in the ["InventoryItems" Collection](https://www.wix.com/velo/reference/wix-stores-backend/%22inventoryitems%22-collection-fields).
         */
        inventoryId?: string;
    };
    /**
     * An object representing a discount applied to the order.
     */
    type Discount = {
        /**
         * Information about an applied coupon.
         */
        appliedCoupon: AppliedCoupon;
    };
    /**
     * An object representing information about the identity of the order initiator.
     * Occasionally, the person that completes the order isn't the buyer. For example, this occurs when an order is created using a point of sale terminal.
     */
    type EnteredBy = {
        /**
         * ID of the order initiator.
         */
        id: string;
        /**
         * Order was created by one of the following:
         *
         *
         *   + `"USER"`: Wix user who performed a POS transaction on behalf of the buyer.
         *   + `"MEMBER"`: Logged-in site member.
         *   + `"CONTACT"`: A Wix contact.
         */
        identityType: string;
    };
    /**
     * An object representing order fulfillment details.
     */
    type Fulfillment = {
        /**
         * Unique ID automatically generated upon fulfillment.
         */
        id: string;
        /**
         * Date and time of fulfillment.
         */
        dateCreated: string;
        /**
         * Information about the line items in the fulfilled order.
         */
        lineItems: FulfillmentLineItem[];
        /**
         * Tracking information for a fulfilled order.
         */
        trackingInfo?: TrackingInfo;
    };
    /**
     * An object representing new fulfillment details.
     */
    type FulfillmentInfo = {
        /**
         * Information about the line items in the fulfilled order.
         */
        lineItems: FulfillmentLineItem[];
        /**
         * Tracking information for a fulfilled order.
         */
        trackingInfo?: TrackingInfo;
    };
    /**
     * An object representing information about a fulfillment's line items.
     */
    type FulfillmentLineItem = {
        /**
         * Line item's position in the list of line items.
         */
        index: number;
        /**
         * Number of units of this line item. On creation, if this field is left empty, the new fulfillment will automatically include all items of this line item that have not already been linked to a fulfillment.
         *
         * If the order does not have the requested quantity of line items available to add to this fulfillment, the fulfillment will not be created and an error will be returned. This property will always have a value when returned.
         */
        quantity?: number;
    };
    type IncrementInfo = {
        /**
         * Variant ID.
         */
        variantId: string;
        /**
         * Number to increment inventory by.
         */
        incrementBy: number;
        /**
         * Product ID.
         */
        productId?: string;
        /**
         * Inventory item ID. This is the `_id` field in the ["InventoryItems" Collection](https://www.wix.com/velo/reference/wix-stores-backend/%22inventoryitems%22-collection-fields).
         */
        inventoryId?: string;
    };
    /**
     * An object representing an inventory item for a product variant in a store.
     */
    type InventoryItem = {
        /**
         * Unique identifier for the inventory item.
         */
        _id: string;
        /**
         * Deprecated: use productId.
         */
        externalId: string;
        /**
         * Product ID.
         */
        productId: string;
        /**
         * Indicates whether the on-hand inventory quantity is tracked for the inventory item's variants. If true, you can update the actual number of variants available. If false, you can indicate if a variant is in stock.
         */
        trackQuantity: boolean;
        /**
         * Inventory item's variants.
         */
        variants: InventoryItemVariantItem[];
        /**
         * Date the inventory item was last updated.
         */
        _updatedDate: string;
    };
    type InventoryItemVariantInfo = {
        /**
         * Indicates whether the on-hand inventory quantity is tracked for the inventory item's variants. If true, you can update the actual number of variants available. If false, you can indicate if a variant is in stock.
         */
        trackQuantity: boolean;
        /**
         * Inventory item variants.
         */
        variants: InventoryItemVariantItem[];
    };
    /**
     * An object representing an inventory item's variant.
     */
    type InventoryItemVariantItem = {
        /**
         * Unique inventory item's variant ID.
         */
        variantId: string;
        /**
         * Whether the variant is in stock at the store. Used when `trackQuantity` is false. If `trackQuantity` is true, `inStock` is based on the actual tracked `quantity`.
         */
        inStock: boolean;
        /**
         * In-stock quantity at the store. Used when `trackQuantity` is true. If `trackQuantity` is false, undefined.
         */
        quantity: number;
    };
    type ItemMetadata = {
        /**
         * Item ID. Item Id. Omitted in certain cases, such as when failing to create an item.
         */
        id: string;
        /**
         * Index of the item within the update array.
         */
        originalIndex: number;
        /**
         * Whether the requested action succeeded for this item.
         * When `false`, the `error` property is populated.
         */
        success: boolean;
        /**
         * Details about the error in case of failure, as a key:value pair.
         */
        error: ItemMetadataError;
    };
    type ItemMetadataError = {
        /**
         * Error code.
         */
        code: string;
        /**
         * Error description.
         */
        description: string;
        /**
         * Error data.
         */
        data: object;
    };
    /**
     * An object representing an line item's price information.
     */
    type LineItemPriceData = {
        /**
         * Price of the item.
         */
        price: number;
        /**
         * Total price charged to the customer (per line item) after calculation of quantity and discount.
         */
        totalPrice: number;
        /**
         * Whether the price includes tax.
         */
        taxIncludedInPrice: boolean;
    };
    /**
     * An object with the link to a PDF file.
     */
    type LinkToPdf = {
        /**
         * URL to a PDF file.
         */
        link: string;
    };
    /**
     * An object representing the media item for a product.
     */
    type Media = {
        /**
         * Deprecated.
         */
        mediaId: string;
        /**
         * Deprecated.
         */
        url: string;
        /**
         * Media item source for media uploaded to Wix (wix:image, wix:video or external URL).
         */
        src: string;
        /**
         * A choice of the product variant.
         */
        choice: Choice;
    };
    /**
     * An object representing the media item for a product's choices.
     */
    type MediaChoice = {
        /**
         * Deprecated. See `mediaSources`.
         */
        mediaIds: string[];
        /**
         * Media item source for media uploaded to Wix (wix:image or wix:video).
         */
        mediaSources: string[];
        /**
         * Option name.
         */
        option: string;
        /**
         * Choice name.
         */
        choice: string;
    };
    /**
     * An object representing a media item.
     */
    type MediaItem = {
        /**
         * Media item title.
         */
        title: string;
        /**
         * Media item description.
         */
        description: string;
        /**
         * Media items type. Currently only `IMAGE` type supported.
         */
        type: string;
        /**
         * Media item source for media uploaded to Wix (wix:image, wix:video or external URL).
         */
        src: string;
        /**
         * Thumbnail URL for videos only.
         */
        thumbnail?: string;
    };
    /**
     * An object representing order fulfillment details.
     */
    type NewFulfillmentAndOrder = {
        /**
         * ID for the newly created fulfillment.
         */
        id: string;
        /**
         * Updated order.
         */
        order: Order;
    };
    /**
     * An object representing a line item option.
     */
    type Option = {
        /**
         * Name of the product option.
         */
        option: string;
        /**
         * Selected option.
         */
        selection: string;
    };
    /**
     * An object representing an order.
     */
    type Order = {
        /**
         * Unique order ID.
         */
        _id: string;
        /**
         * Date and time the order was updated.
         */
        _updatedDate: string;
        /**
         * The site's displayed language.
         */
        buyerLanguage: string;
        /**
         * Shopping cart ID.
         */
        cartId?: string;
        /**
         * Channel information.
         */
        channelInfo: ChannelInfo;
        /**
         * Identity of the order's initiator.
         */
        enteredBy: EnteredBy;
        /**
         * Billing information.
         */
        billingInfo?: BillingInfo;
        /**
         * Buyer information.
         */
        buyerInfo: BuyerInfo;
        /**
         * A note added by the buyer.
         */
        buyerNote?: string;
        /**
         * Date and time the order was created.
         */
        _dateCreated: string;
        /**
         * Order currency.
         */
        currency: string;
        /**
         * The order's current fulfillment status (whether the order received a tracking number or was delivered/picked up).
         * One of:
         *
         *  + `"NOT_FULFILLED"`: Order is not yet fulfilled.
         *  + `"FULFILLED"`: Order was fulfilled successfully.
         *  + `"CANCELED"`: Order was canceled.
         *  + `"PARTIALLY_FULFILLED"`: Order was partially fulfilled. For example, when only some of the order's items were fulfilled.
         */
        fulfillmentStatus: string;
        /**
         * Whether or not the order was archived.
         */
        archived: boolean;
        /**
         * Log of updates related to the order.
         */
        activities: Activities[];
        /**
         * Running order number.
         */
        number: number;
        /**
         * Current status of the payment.
         * One of:
         *
         *  + `"NOT_PAID"`: Payment was not made.
         *  + `"PAID"`: Order was successfully paid for.
         *  + `"PARTIALLY_REFUNDED"`: Order was partially refunded.
         *  + `"FULLY_REFUNDED"`: Order was refunded in full.
         */
        paymentStatus: string;
        /**
         * Shipping information.
         */
        shippingInfo?: OrderShippingInfo;
        /**
         * Order items.
         */
        lineItems: OrderLineItem[];
        /**
         * Order totals.
         */
        totals: Totals;
        /**
         * The unit in which the order's weight is measured. Either `"KG"` or `"LB"`. If not provided, the site's default weight unit is used.
         */
        weightUnit?: string;
        /**
         * Custom field information.
         */
        customField?: CustomField;
        /**
         * Order fulfillment information.
         */
        fulfillments: Fulfillment[];
        /**
         * Discount information.
         */
        discount?: Discount;
        /**
         * Refund information.
         */
        refunds?: Refund[];
        /**
         * Subscription information. Omitted unless the order is a subscription.
         * Learn more about [selling product subscriptions](https://support.wix.com/en/article/wix-stores-selling-product-subscriptions).
         */
        subscriptionInfo?: SubscriptionInfo;
    };
    /**
     * An object representing information for creating an order.
     */
    type OrderInfo = {
        /**
         * Shopping cart ID.
         */
        cartId?: string;
        /**
         * The language displayed to the buyer. If not provided, the site's default language is used.
         */
        buyerLanguage?: string;
        /**
         * Channel information.
         */
        channelInfo: ChannelInfo;
        /**
         * Billing information.
         */
        billingInfo: CreateOrderBillingInfo;
        /**
         * Buyer information. Only pass these fields if you want to override the buyer identity e.g. when creating an order on behalf of a contact or member.
         */
        buyerInfo?: CreateOrderBuyerInfo;
        /**
         * A note added by the buyer.
         */
        buyerNote?: string;
        /**
         * Order currency. If not provided, the site's default currency is used.
         */
        currency?: string;
        /**
         * Current status of the payment.
         * One of:
         *
         *  + `"NOT_PAID"`: Payment was not made.
         *  + `"PAID"`: Order was successfully paid for.
         */
        paymentStatus: string;
        /**
         * Shipping information.
         */
        shippingInfo: OrderShippingInfo;
        /**
         * Order items.
         */
        lineItems: CreateOrderLineItem[];
        /**
         * Order totals.
         */
        totals: CreateOrderTotals;
        /**
         * The unit in which the order's weight is measured. Either `"KG"` or `"LB"`. If not provided, the site's default weight unit is used.
         */
        weightUnit?: string;
        /**
         * Information about a custom field.
         */
        customField?: CustomField;
        /**
         * Discount information.
         */
        discount?: Discount;
    };
    /**
     * An object representing a line item in an order.
     */
    type OrderLineItem = {
        /**
         * Custom text.
         */
        customTextFields?: CustomTextField[];
        /**
         * Line item product ID.
         */
        productId?: string;
        /**
         * Type of line item.
         *  One of:
         *
         *
         *  - `"DIGITAL"`: Digital item.
         *  - `"PHYSICAL"`: Physical item.
         *  - `"CUSTOM_AMOUNT_ITEM"`: Item with a custom price.
         */
        lineItemType?: string;
        /**
         * Information about the line item's primary media item.
         */
        mediaItem: OrderMediaItem;
        /**
         * Name of the line item.
         */
        name: string;
        /**
         * Notes about the line item.
         */
        notes?: string;
        /**
         * Line item options.
         */
        options?: Option[];
        /**
         * Deprecated: see priceData.
         */
        price: number;
        /**
         * Line item quantity.
         */
        quantity: number;
        /**
         * Line item stock keeping unit.
         */
        sku?: string;
        /**
         * Deprecated: see priceData.
         */
        totalPrice: number;
        /**
         * Line item weight.
         */
        weight?: number;
        /**
         * Line item index.
         */
        index?: number;
        /**
         * Line item's name, translated into the customer's language.
         */
        translatedName?: string;
        /**
         * Line item's discount amount.
         */
        discount?: number;
        /**
         * Line item's total amount of tax applied.
         */
        tax?: number;
        /**
         * Price information.
         */
        priceData: LineItemPriceData;
        /**
         * Tax group ID.
         */
        taxGroupId?: string;
        /**
         * Line item's fulfiller ID.
         */
        fulfillerId?: string;
        /**
         * Line item's variant ID.
         */
        variantId?: string;
    };
    /**
     * An object representing a line item's primary media item.
     */
    type OrderMediaItem = {
        /**
         * Image description for accessibility purposes.
         */
        altText?: string;
        /**
         * Media item source (wix:image or external URL).
         */
        src: string;
        /**
         * Media item type. Currently only `IMAGE` type supported.
         */
        type: string;
    };
    /**
     * An object representing an order's shipping information.
     */
    type OrderShippingInfo = {
        /**
         * Expected date of delivery.
         */
        deliverByDate?: string;
        /**
         * Delivery option name.
         */
        deliveryOption?: string;
        /**
         * Estimated time until delivery.
         */
        estimatedDeliveryTime?: string;
        /**
         * Shipment details (empty if order was designated for pickup).
         */
        shipmentDetails: ShipmentDetails;
        /**
         * Pickup details (empty if order was designated for delivery).
         */
        pickupDetails?: PickupDetails;
        /**
         * Shipping region.
         */
        shippingRegion?: string;
    };
    /**
     * An object representing an order's totals.
     */
    type OrderTotals = {
        /**
         * The subtotal of all the order's line items, excluding tax.
         */
        subtotal: number;
        /**
         * The total shipping price, including tax.
         */
        shipping: number;
        /**
         * The total amount of tax.
         */
        tax: string;
        /**
         * The total calculated discount amount.
         */
        discount: number;
        /**
         * The total price.
         */
        total: number;
        /**
         * The total weight of the order's items.
         */
        weight: number;
        /**
         * The total quantity of the the order's line items.
         */
        quantity: number;
    };
    /**
     * An object representing paging options.
     */
    type PagingOptions = {
        /**
         * Maximum number of variants to retrieve. Defaults to 300.
         */
        limit: number;
        /**
         * Number of variants to skip before the retrieved variants. Defaults to 0.
         */
        skip: number;
    };
    type PercentageAdjustment = {
        /**
         * When `true`, result is rounded to the nearest whole number (integer).
         * When `false`, result is rounded to 2 places after the decimal point.
         */
        roundToInt: string;
        /**
         * Percentage value, as a whole number (integer) between `-100` and `1000`.
         * For example, pass `100` to increase value by 100% (multiply original value by 2).
         */
        rate: number;
    };
    /**
     * An object representing an order's pickup details.
     */
    type PickupDetails = {
        /**
         * Pickup instructions.
         */
        pickupInstructions?: string;
        /**
         * Pickup address.
         */
        pickupAddress?: Address;
        /**
         * First name.
         */
        firstName?: string;
        /**
         * Last name.
         */
        lastName?: string;
        /**
         * Email address.
         */
        email?: string;
        /**
         * Phone number.
         */
        phone?: string;
    };
    /**
     * An object representing a product in a store.
     */
    type Product = {
        /**
         * Product ID.
         */
        _id: string;
        /**
         * Date product was last updated.
         */
        _updatedDate: string;
        /**
         * Product name.
         */
        name: string;
        /**
         * Product description.
         */
        description: string;
        /**
         * Main product media item URL (wix:image or https).
         */
        mainMedia: string;
        /**
         * List of product media items.
         */
        mediaItems: MediaItem[];
        /**
         * Product stock keeping unit value. Must be unique.
         */
        sku: string;
        /**
         * Deprecated. Use `ribbon` instead.
         */
        ribbons: ProductRibbon[];
        /**
         * Product currency.
         */
        currency: string;
        /**
         * Product price.
         *  The price must be greater than its discount.
         *  The product price is propagated to the product's newly-created variants. Product variants whose prices have been updated directly are not affected by changes to the product price.
         */
        price: number;
        /**
         * Discounted product price.
         */
        discountedPrice: number;
        /**
         * Product price formatted with the currency.
         */
        formattedPrice: string;
        /**
         * Discounted product price formatted with currency symbol.
         */
        formattedDiscountedPrice: string;
        /**
         * ID for the inventory item.
         */
        inventoryItemId: string;
        /**
         * Product discount.
         */
        discount: ProductDiscount;
        /**
         * Indicates whether inventory is tracked for the product.
         */
        trackInventory: boolean;
        /**
         * Indicates whether the product is in stock.
         */
        inStock: boolean;
        /**
         * Number of units currently in stock.
         */
        quantityInStock: number;
        /**
         * Additional product information sections.
         */
        additionalInfoSections: ProductAdditionalInfoSection[];
        /**
         * All the available options for a store product.
         */
        productOptions: ProductOptions;
        /**
         * Product page relative URL.
         */
        productPageUrl: string;
        /**
         * Indicates whether product variants are managed. Can be set to true only if the product has options. Once set to true, can be reset to false only if no variants exist. Use [`getProductVariants()`](wix-stores.html#getProductVariants) to check if variants exist. You cannot set `manageVariants` to true if more than 300 variants are defined.
         */
        manageVariants: boolean;
        /**
         * List of product customization fields.
         */
        customTextFields: ProductCustomTextFields[];
        /**
         * Product type.
         */
        productType: string;
        /**
         * Product slug.
         */
        slug: string;
        /**
         * Product weight.
         */
        weight: string;
        /**
         * Whether the product is visible to site visitors and appears in Content Manager collections.
         */
        visible: boolean;
        /**
         * Product variants.
         */
        variants: VariantItem[];
        /**
         * Custom SEO data for the product. Learn more [about SEO](https://support.wix.com/en/search?term=seo).
         */
        seoData: SeoData;
        /**
         * Details of the product's price per unit.
         */
        pricePerUnitData: pricePerUnitData;
        /**
         * Price per unit.
         */
        pricePerUnit: number;
        /**
         * Price per unit formatted with currency symbol.
         */
        formattedPricePerUnit: string;
        /**
         * Product ribbon. Used to highlight relevant information about a product. For example, `"Sale"`, `"New Arrival"`, `"Sold Out"`.
         */
        ribbon: string;
        /**
         * Product brand. Including a brand name can help improve your site’s [visibility on search engines](https://support.wix.com/en/article/adding-brand-names-to-boost-product-page-seo-in-wix-stores).
         */
        brand: string;
    };
    /**
     * An object representing an additional info section for a store product.
     */
    type ProductAdditionalInfoSection = {
        /**
         * Section title.
         */
        title: string;
        /**
         * Section description.
         */
        description: string;
    };
    /**
     * An object representing a product variant's option choices.
     */
    type ProductChoices = {
        /**
         * Value of the choice. This key name is dependent on the product option. For example, if a product has a size option, this
         *  key value will be something like `"Size"` and its value will be something like
         *  `"Large"`.
         *
         *  `optionKey` is not case-sensitive. Therefore the values for the option keys `"Size"`, `"SIZE"`, and `"size"` are combined.
         */
        optionKey: string;
    };
    /**
     * An object representing a custom text field for a store product.
     */
    type ProductCustomTextFields = {
        /**
         * Product customization field title.
         */
        title: string;
        /**
         * Maximum length of product customization field in characters.
         */
        maxLength: string;
    };
    /**
     * An object representing a product discount.
     */
    type ProductDiscount = {
        /**
         * Discount type. Required.
         *
         *
         *
         *  One of:
         *
         *
         *
         *  - `"AMOUNT"`
         *
         *  - `"PERCENT"`
         *
         *  - `"NONE"`
         */
        type: string;
        /**
         * Discount value. The discount value cannot be greater than the price of the product or the variant.
         */
        value: string;
    };
    /**
     * An object representing information for creating or updating a product in a store.
     */
    type ProductInfo = {
        /**
         * Product name. Limited to 80 characters.
         */
        name: string;
        /**
         * Product description.
         */
        description?: string;
        /**
         * Product stock keeping unit value. Must be unique.
         */
        sku?: string;
        /**
         * Product price.
         *  The price must be greater than its discount.
         *  The product price is propagated to the product's newly-created variants. Product variants whose prices have been updated directly are not affected by changes to the product price.
         */
        price: number;
        /**
         * An object representing a product discount.
         */
        discount?: ProductDiscount;
        /**
         * An object representing all the available options for a store product.
         */
        productOptions?: ProductOptionsInfo;
        /**
         * Indicates whether product variants can be managed. Can be set to true only if the product has options. Once set to true, can be reset to false only if no variants exist. Use [`getProductVariants()`](wix-stores.html#getProductVariants) to check if variants exist.  You cannot set `manageVariants` to true if more than 300 variants are defined.
         */
        manageVariants?: boolean;
        /**
         * Product type. Currently, only creating physical products (`"productType": "physical"`) is supported via the API.
         */
        productType?: string;
        /**
         * Product weight.
         */
        weight?: number;
        /**
         * Whether the product is visible to site visitors. Setting this to false removes the product from Content Manager collections.
         */
        visible?: boolean;
        /**
         * Custom SEO data for the product. Learn more [about SEO](https://support.wix.com/en/search?term=seo).
         */
        seoData?: SeoData;
        /**
         * Details for the product's price per unit. If one of the `pricePerUnitData` fields is provided, all must be provided.
         */
        pricePerUnitData?: pricePerUnitData;
        /**
         * Product ribbon. Used to highlight relevant information about a product.
         * For example, `"Sale"`, `"New Arrival"`, `"Sold Out"`. Limited to 30 characters.
         */
        ribbon?: string;
        /**
         * Product brand.
         * Including a brand name can help improve your site’s [visibility on search engines](https://support.wix.com/en/article/adding-brand-names-to-boost-product-page-seo-in-wix-stores).
         * Limited to 50 characters.
         */
        brand?: string;
    };
    /**
     * An object representing an option for a store product.
     */
    type ProductOption = {
        /**
         * Option type. Either `"color"` or `"drop_down"`.
         */
        optionType: string;
        /**
         * Option name.
         */
        name: string;
        /**
         * Option choices.
         *  Each option can contain between one and thirty choices.
         */
        choices: ProductOptionsChoice[];
    };
    /**
     * An object representing an option for a store product.
     */
    type ProductOptionInfo = {
        /**
         * Option name.
         */
        name: string;
        /**
         * Option choices.
         *  Each option can contain between one and thirty choices.
         */
        choices: ProductOptionsChoiceInfo[];
    };
    /**
     * An object representing all the available options for a store product, such as "Size" or "Color."
     */
    type ProductOptions = {
        /**
         * Name of the option. This key name
         *  is dependent on the options added to the product. For example, if a product has a size
         *  option, this key will be something like `"Size"`.
         *
         *  `optionKey` is not case-sensitive. Therefore the values for the option keys `"Size"`, `"SIZE"`,
         *  and `"size"` are combined.
         *
         *  An option cannot be changed if it has choices and variants. To change an option, reset its variants
         *  with [`resetVariantData()`](wix-stores-backend.html#resetVariantData).
         *  For each option, you can define a maximum of six choices.
         */
        optionKey: ProductOption;
    };
    /**
     * An object returned by the `getProductOptionsAvailability()` function representing the availability of a product.
     */
    type ProductOptionsAvailability = {
        /**
         * Whether the product with the specified option choices is available for purchase.
         */
        availableForPurchase: boolean;
        /**
         * An object representing all the available options for a store product.
         */
        productOptions: ProductOptions;
        /**
         * Main product media item (image or video) URL.
         */
        mainMedia: string;
        /**
         * List of product media items.
         */
        mediaItems: MediaItem[];
        /**
         * The variant of the product selected using the specified option choices if there is one.
         */
        selectedVariant: ProductOptionsAvailabilitySelectedVariant;
    };
    /**
     * An object representing the product variant selected using the `getProductOptionsAvailability()` function.
     */
    type ProductOptionsAvailabilitySelectedVariant = {
        /**
         * Product variant stock keeping unit value.
         */
        sku: string;
        /**
         * Product variant currency.
         */
        currency: string;
        /**
         * Product variant price. The variant price must be greater than its discount.
         */
        price: number;
        /**
         * Discounted product variant price.
         */
        discountedPrice: number;
        /**
         * Product variant price formatted with the currency.
         */
        formattedPrice: string;
        /**
         * Discounted product variant price formatted with the currency.
         */
        formattedDiscountedPrice: string;
        /**
         * Whether the product variant is visible to site visitors and appears in Content Manager collections.
         */
        visible: boolean;
        /**
         * Whether the product variant is in stock.
         */
        inStock: boolean;
        /**
         * Product variant weight.
         */
        weight: number;
    };
    /**
     * An object representing an options choice for a store product, such as choice "Small" for the option "Size."
     */
    type ProductOptionsChoice = {
        /**
         * Choice value.
         */
        value: number;
        /**
         * Choice description.
         */
        description: number;
        /**
         * Whether the product with this choice is in stock.
         */
        inStock: boolean;
        /**
         * Whether the product with this option is visible.
         */
        visible: boolean;
    };
    type ProductOptionsChoiceInfo = {
        /**
         * Choice value.
         */
        value: number;
        /**
         * Choice description.
         */
        description: number;
    };
    /**
     * An object representing all the available options for a store product.
     */
    type ProductOptionsInfo = {
        /**
         * Name of the option. This key name is dependent on the options added to the product. For example, if a product has a color or size option, this key will be something like `"Color"` or `"Size"`.
         *
         *  `optionKey` is not case-sensitive. Therefore the values for the option keys `"Size"`, `"SIZE"`, and `"size"` are combined.
         */
        optionKey: ProductOptionInfo;
    };
    /**
     * An object representing a ribbon for a store product.
     */
    type ProductRibbon = {
        /**
         * Ribbon text.
         */
        text: string;
    };
    /**
     * An object representing the selection of specific variants of a product. Use only one of
     *  `choices` or `variantIds`.
     */
    type ProductVariantOptions = {
        /**
         * The choices the retrieved variants will have, in `key:value` pairs.
         */
        choices?: any;
        /**
         * IDs of variants to retrieve.
         */
        variantIds?: string[];
    };
    /**
     * An object representing order refund information.
     */
    type Refund = {
        /**
         * Refund ID.
         */
        id: string;
        /**
         * Date and time the refund was issued.
         */
        dateCreated: string;
        /**
         * Refund amount.
         */
        amount: string;
        /**
         * Reason for refund.
         */
        reason?: string;
        /**
         * Whether the refund was made externally.
         * An external refund refers to refunds processed by the payment provider and reported to the Wix orders system.
         * When the value is false, the refund was reported to the Wix orders system, but was not processed by the payment provider.
         */
        externalRefund: boolean;
        /**
         * Payment provider transaction ID.
         */
        paymentProviderTransactionId?: string;
    };
    /**
     * An object representing custom SEO data for the product.
     */
    type SeoData = {
        /**
         * SEO tag details.
         */
        tags: SeoTag[];
    };
    /**
     * An object representing the product's custom SEO tags.
     */
    type SeoTag = {
        /**
         * SEO tag type.
         * Supported values:
         *
         *  + `"title"`
         *  + `"meta"`
         *  + `"script"`
         *  + `"link"`
         */
        type: string;
        /**
         * The props property holds an object of `{"key": "value"}` pairs where the key is one of the SEO tag's properties (name, content, rel, href, etc.)
         * and the value is the value for that property. `{"name": "description", "content": "The description itself."}`.
         */
        props: object;
        /**
         * Tag metadata. For example, `{"height": 300, "width": 240}`.
         */
        meta: object;
        /**
         * Tag inner content. For example, ` inner content `.
         */
        children: string;
        /**
         * Whether the tag is a custom tag.
         */
        custom: boolean;
        /**
         * Whether the tag is disabled.
         */
        disabled: boolean;
    };
    /**
     * An object representing an order's shipping details.
     */
    type ShipmentDetails = {
        /**
         * Shipping address.
         */
        address?: Address;
        /**
         * Last name.
         */
        lastName?: string;
        /**
         * First name.
         */
        firstName?: string;
        /**
         * Email address.
         */
        email?: string;
        /**
         * Phone number.
         */
        phone?: string;
        /**
         * Company name.
         */
        company?: string;
        /**
         * VAT information.
         */
        vatId?: VatId;
        /**
         * Deprecated: see priceData.
         */
        tax?: number;
        /**
         * Deprecated: see priceData.
         */
        discount?: number;
        /**
         * Shipment price information.
         */
        priceData?: ShipmentPriceData;
    };
    /**
     * An object representing shipment price information.
     */
    type ShipmentPriceData = {
        /**
         * Price of the item.
         */
        price: number;
        /**
         * Whether the price includes tax.
         */
        taxIncludedInPrice: boolean;
    };
    /**
     * An object representing information about the street name and street number of an address.
     */
    type StreetAddress = {
        /**
         * Address street name.
         */
        name: string;
        /**
         * Address street number.
         */
        number: string;
    };
    type SubscriptionInfo = {
        /**
         * ID of the current subscription's cycle.
         */
        id: string;
        /**
         * Current billing cycle number. For example, if the subscription is in the 3rd month of a 4-month subscription, the value is   `3`.
         */
        cycleNumber: number;
        /**
         * Subscription settings.
         */
        subscriptionSettings: SubscriptionSettings;
        /**
         * Subscription option information.
         */
        subscriptionOptionInfo: SubscriptionOptionInfo;
    };
    type SubscriptionOptionInfo = {
        /**
         * Subscription option ID.
         */
        id: string;
        /**
         * Subscription option title. For example, "Coffee of the week".
         */
        title: string;
        /**
         * Subscription option description. For example, "Subscribe and get 15% off".
         */
        description: string;
    };
    type SubscriptionSettings = {
        /**
         * Frequency of recurring payment.
         * Supported values:
         *
         *  + `"DAY"`
         *  + `"WEEK"`
         *  + `"MONTH"`
         *  + `"YEAR"`
         */
        frequency: string;
        /**
         * Whether subscription is renewed automatically at the end of each period.
         * If the value is `true`, then `billingCycles` is ignored.
         */
        autoRenewal: boolean;
        /**
         * Number of billing cycles before subscription ends. Ignored if `autoRenewal: false`.
         */
        billingCycles: number;
    };
    /**
     * An object representing an order's totals.
     */
    type Totals = {
        /**
         * Total calculated discount amount.
         */
        discount?: number;
        /**
         * Total quantity of the the order's line items.
         */
        quantity: number;
        /**
         * Total shipping price, including tax.
         */
        shipping?: number;
        /**
         * Subtotal of all the order's line items, excluding tax.
         */
        subtotal: number;
        /**
         * Total amount of tax.
         */
        tax?: number;
        /**
         * Total price.
         */
        total: number;
        /**
         * Total weight of the order's items.
         */
        weight: number;
    };
    /**
     * An object representing tracking information for a fulfilled order.
     */
    type TrackingInfo = {
        /**
         * Tracking number.
         */
        trackingNumber: string;
        /**
         * Shipping provider.
         */
        shippingProvider: string;
        /**
         * Link to the tracking summary of the fulfilled order.
         */
        trackingLink: string;
    };
    /**
     * An object representing information for creating or updating a product in a store.
     */
    type UpdateProductInfo = {
        /**
         * Product name. Limited to 80 characters.
         */
        name?: string;
        /**
         * Product description.
         */
        description?: string;
        /**
         * Product stock keeping unit value. Must be unique.
         */
        sku?: string;
        /**
         * Product price.
         *  The price must be greater than its discount.
         *  The product price is propagated to the product's newly-created variants. Product variants whose prices have been updated directly are not affected by changes to the product price.
         */
        price?: number;
        /**
         * Details for the product's price per unit. If one of the `pricePerUnitData` fields is provided, all must be provided.
         */
        pricePerUnitData?: pricePerUnitData;
        /**
         * An object representing a product discount.
         */
        discount?: ProductDiscount;
        /**
         * An object representing all the available options for a store product.
         */
        productOptions?: ProductOptionsInfo;
        /**
         * Indicates whether product variants can be managed. Can be set to true only if the product has options. Once set to true, can be reset to false only if no variants exist. Use [`getProductVariants()`](wix-stores.html#getProductVariants) to check if variants exist.  You cannot set `manageVariants` to true if more than 300 variants are defined.
         */
        manageVariants?: boolean;
        /**
         * Product type.
         */
        productType?: string;
        /**
         * Product weight.
         */
        weight?: number;
        /**
         * Whether the product is visible to site visitors. Setting this to false removes the product from Content Manager collections.
         */
        visible?: boolean;
        /**
         * Custom SEO data for the product. Learn more [about SEO](https://support.wix.com/en/search?term=seo).
         */
        seoData?: SeoData;
        /**
         * Product ribbon. Used to highlight relevant information about a product.
         * For example, `"Sale"`, `"New Arrival"`, `"Sold Out"`. Limited to 30 characters.
         */
        ribbon?: string;
        /**
         * Product brand.
         * Including a brand name can help improve your site’s [visibility on search engines](https://support.wix.com/en/article/adding-brand-names-to-boost-product-page-seo-in-wix-stores).
         * Limited to 50 characters.
         */
        brand?: string;
    };
    /**
     * An object containing variant information.
     */
    type VariantData = {
        /**
         * Variant currency.
         */
        currency: string;
        /**
         * Variant price. The variant price must be greater than its discount.
         */
        price: number;
        /**
         * Discounted variant price.
         */
        discountedPrice: number;
        /**
         * Price per unit.
         */
        pricePerUnit: number;
        /**
         * Price per unit formatted with currency symbol.
         */
        formattedPricePerUnit: string;
        /**
         * Variant weight.
         */
        weight: number;
        /**
         * Variant stock keeping unit value.
         */
        sku: string;
        /**
         * Whether the variant is visible to site visitors and appears in Content Manager collections.
         */
        visible: boolean;
    };
    /**
     * An object containing variant information for update.
     */
    type VariantInfo = {
        /**
         * Variant currency.
         */
        currency: string;
        /**
         * Variant price. The variant price must be greater than its discount.
         */
        price: number;
        /**
         * Discounted variant price.
         */
        discountedPrice: number;
        /**
         * Variant weight.
         */
        weight: number;
        /**
         * Variant stock keeping unit value.
         */
        sku: string;
        /**
         * Whether the variant is visible to site visitors and appears in Content Manager collections.
         */
        visible: boolean;
        /**
         * Specific product options to update.
         *  The `choices` object contains key:value pairs where the key is the
         *  option name and the value is the chosen option value.
         *  For example, to update the blue t-shirt in size large, you would pass something like this: `{"Color": "Blue", "Size": "Large"}`.
         */
        choices: any;
    };
    /**
     * An object representing a product variant item.
     */
    type VariantItem = {
        /**
         * Unique variant ID.
         */
        _id: string;
        /**
         * The choices of the retrieved variant.
         */
        choices: ProductChoices;
        /**
         * Variant information.
         */
        variant: VariantData;
    };
    /**
     * An object representing product variants.
     */
    type Variants = {
        /**
         * List of variant items that match the specified choices or variant IDs.
         */
        items: VariantItem[];
        /**
         * Number of items in the current results page.
         */
        length: number;
        /**
         * Total number of variants with the specified choices.
         */
        totalCount: number;
    };
    /**
     * An object representing value added tax (VAT) information.
     */
    type VatId = {
        /**
         * VAT number.
         */
        number: string;
        /**
         * VAT type. Either `"CPF"` or `"CNPJ"`.
         */
        type: string;
    };
    /**
     * An object used by the Gallery properties `items` and `currentItem` to represent a single gallery video.
     */
    type VideoItem = {
        /**
         * Item type. Value is `"video"`.
         */
        type: string;
        /**
         * Video source URL.
         */
        src: string;
        /**
         * Item slug.
         */
        slug?: string;
        /**
         * Video title.
         */
        title?: string;
        /**
         * Video description. Descriptions over 100 characters are truncated.
         */
        description?: string;
        /**
         * URL of the video's clickable link. See [here]($w.LinkableMixin.html#link) for more information about links.
         */
        link?: string;
        /**
         * Video thumbnail URL.
         */
        thumbnail?: string;
    };
    /**
     * An object representing a product's price per unit data.
     */
    type pricePerUnitData = {
        /**
         * Product’s total weight, volume, or area. For example, if your product weighs 1 kilogram, the `totalQuantity` is `1`.
         */
        totalQuantity: number;
        /**
         * Total measurement unit of weight, volume, or area. For example, if your product weighs 1 kilogram, the `totalMeasurementUnit` is `"KG"`.
         *
         * Make sure the measurement system (metric or imperial) matches the one in your site's [Regional Settings](https://support.wix.com/en/article/changing-your-sites-regional-settings).
         *
         * Supported metric values:
         * `"ML"`, `"CL"`, `"L"`, `"CBM"`, `"MG"`, `"G"`, `"KG"`, `"MM"`, `"CM"`, `"M"`, `"SQM"`.
         *
         * Supported imperial values:
         * `"OZ"`, `"LB"`, `"FLOZ"`, `"PT"`, `"QT"`, `"GAL"`, `"IN"`, `"FT"`, `"YD"`, `"SQFT"`.
         */
        totalMeasurementUnit: string;
        /**
         * Product’s base weight, volume, or area. For example, for a product weighing 1 kilogram, the `baseQuantity` could be `100` (grams).
         */
        baseQuantity: number;
        /**
         * Base measurement unit of weight, volume, or area. For example, if your product weighs 1 kilogram, and the `baseQuantity` is `100` grams, `baseMeasurementUnit` is `"G"`.
         *
         * Make sure the measurement system (metric or imperial) matches the one in your site's [Regional Settings](https://support.wix.com/en/article/changing-your-sites-regional-settings).
         *
         * Supported metric values:
         * `"ML"`, `"CL"`, `"L"`, `"CBM"`, `"MG"`, `"G"`, `"KG"`, `"MM"`, `"CM"`, `"M"`, `"SQM"`.
         *
         * Supported imperial values:
         * `"OZ"`, `"LB"`, `"FLOZ"`, `"PT"`, `"QT"`, `"GAL"`, `"IN"`, `"FT"`, `"YD"`, `"SQFT"`.
         */
        baseMeasurementUnit: string;
    };
    /**
     * Events that are fired from a Wix Store.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#)
     */
    interface Events {
        /**
         * **Deprecated.**
         * This event will continue to work until September 4, 2024, but a newer version is available at
         * [`wix-ecom-backend.Events.onAbandonedCheckoutCreated()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onabandonedcheckoutcreated).
         *
         * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onCartAbandoned)
         */
        onCartAbandoned(event: Events.CartAbandonedEvent): void;
        /**
         * **Deprecated.**
         * This event will continue to work until September 4, 2024, but a newer version is available at
         * [`wix-ecom-backend.Events.onCheckoutCompleted()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/oncheckoutcompleted).
         *
         * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onCartCompleted)
         */
        onCartCompleted(event: Events.CartCompletedEvent): void;
        /**
         * **Deprecated.**
         * This event will continue to work until September 4, 2024, but a newer version is available at
         * [`wix-ecom-backend.Events.onCartCreated()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/oncartcreated).
         *
         * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
         *
         * For more info about the differences between the Stores Cart and eCommerce Cart, refer to the [cart conversion table](https://www.wix.com/velo/reference/wix-ecom-backend/cart/stores-to-ecommerce-cart-conversion-table).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onCartCreated)
         */
        onCartCreated(event: Events.CartCreatedEvent): void;
        /**
         * **Deprecated.**
         * This event will continue to work until September 4, 2024, but a newer version is available at
         * [`wix-ecom-backend.Events.onAbandonedCheckoutRecovered()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onabandonedcheckoutrecovered).
         *
         * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onCartRecovered)
         */
        onCartRecovered(event: Events.CartRecoveredEvent): void;
        /**
         * An event that fires when a product collection is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onCollectionCreated)
         */
        onCollectionCreated(event: Events.CollectionCreatedEvent): void;
        /**
         * An event that fires when a product collection is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onCollectionDeleted)
         */
        onCollectionDeleted(event: Events.CollectionDeletedEvent): void;
        /**
         * An event that fires when a product collection is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onCollectionUpdated)
         */
        onCollectionUpdated(event: Events.CollectionUpdatedEvent): void;
        /**
         * **Deprecated.**
         * This event will continue to work until September 4, 2024, but a newer version is available at
         * [`wix-ecom-backend.Events.onFulfillmentsUpdated()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onfulfillmentsupdated).
         *
         * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onFulfillmentCreated)
         */
        onFulfillmentCreated(event: Events.FulfillmentCreatedEvent): void;
        /**
         * **Deprecated.**
         * This event will continue to work until September 4, 2024, but a newer version is available at
         * [`wix-ecom-backend.Events.onFulfillmentsUpdated()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onfulfillmentsupdated).
         *
         * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onFulfillmentDeleted)
         */
        onFulfillmentDeleted(event: Events.FulfillmentDeletedEvent): void;
        /**
         * **Deprecated.**
         * This event will continue to work until September 4, 2024, but a newer version is available at
         * [`wix-ecom-backend.Events.onFulfillmentsUpdated()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onfulfillmentsupdated).
         *
         * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onFulfillmentUpdated)
         */
        onFulfillmentUpdated(event: Events.FulfillmentUpdatedEvent): void;
        /**
         * An event that fires when an inventory item's information is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onInventoryItemUpdated)
         */
        onInventoryItemUpdated(event: Events.InventoryItemUpdatedEvent): void;
        /**
         * An event that fires when the inventory information of a product variant is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onInventoryVariantUpdated)
         */
        onInventoryVariantUpdated(event: Events.InventoryVariantUpdatedEvent): void;
        /**
         * **Deprecated.**
         * This event will continue to work until September 4, 2024, but a newer version is available at
         * [`wix-ecom-backend.Events.onOrderApproved()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onorderapproved).
         *
         * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onNewOrder)
         */
        onNewOrder(event: Events.NewOrderEvent): void;
        /**
         * **Deprecated.**
         * This event will continue to work until September 4, 2024, but a newer version is available at
         * [`wix-ecom-backend.Events.onOrderCanceled()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onordercanceled).
         *
         * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onOrderCanceled)
         */
        onOrderCanceled(event: Events.OrderCanceledEvent): void;
        /**
         * **Deprecated.**
         * This event will continue to work until September 4, 2024, but a newer version is available at
         * [`wix-ecom-backend.Events.onOrderPaymentStatusUpdated()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onorderpaymentstatusupdated).
         *
         * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onOrderPaid)
         */
        onOrderPaid(event: Order): void;
        /**
         * **Deprecated.**
         * This event will continue to work until September 4, 2024, but a newer version is available at
         * [`wix-ecom-backend.Events.onOrderTransactionsUpdated()`](https://www.wix.com/velo/reference/wix-ecom-backend/events/onordertransactionsupdated).
         *
         * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onOrderRefunded)
         */
        onOrderRefunded(event: Events.OrderRefundedEvent): void;
        /**
         * An event that fires when a product is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onProductCreated)
         */
        onProductCreated(event: Events.ProductCreatedEvent): void;
        /**
         * An event that fires when a product is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onProductDeleted)
         */
        onProductDeleted(event: Events.ProductDeletedEvent): void;
        /**
         * An event that fires when a product is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onProductUpdated)
         */
        onProductUpdated(event: Events.ProductUpdatedEvent): void;
        /**
         * An event that fires when variant information for a product is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#onVariantsUpdated)
         */
        onVariantsUpdated(event: Events.VariantsUpdatedEvent): void;
    }
    /**
     * Events that are fired from a Wix Store.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-backend.Events.html#)
     */
    namespace Events {
        /**
         * An object representing a shopping cart that was abandoned.
         */
        type CartAbandonedEvent = {
            /**
             * Time the abandoned cart was abandoned.
             */
            abandonTime: string;
            /**
             * Information about the visitor who abandoned the shopping cart.
             */
            buyerInfo: BuyerInfo;
            /**
             * ID of the shopping cart that was abandoned.
             */
            cartId: string;
            /**
             * URL of the abandoned cart's checkout page.
             */
            checkoutUrl: string;
            /**
             * ID of coupon used in the abandoned cart.
             */
            couponId: string;
            /**
             * Time the abandoned cart was created.
             */
            creationTime: string;
            /**
             * Number of items in the abandoned cart.
             */
            itemsCount: number;
            /**
             * Abandoned cart totals.
             */
            totals: Events.CartTotals;
        };
        /**
         * An object representing a shopping cart that was completed.
         */
        type CartCompletedEvent = {
            /**
             * ID of the shopping cart that was completed.
             */
            cartId: string;
            /**
             * Time the shopping cart was completed.
             */
            completedTime: string;
            /**
             * The buyer's information.
             */
            buyerInfo: BuyerInfo;
            /**
             * Message from the buyer.
             */
            buyerNote: string;
            /**
             * Coupon applied in the shopping cart.
             */
            appliedCoupon: CartAppliedCoupon;
            /**
             * Billing address.
             */
            billingAddress: Address;
            /**
             * Currency of the shopping cart.
             */
            currency: Currency;
            /**
             * The order's units of weight. One of: `"KG"`, `"LB"`, or `"UNSPECIFIED_WEIGHT_UNIT"`.
             */
            weightUnit: string;
            /**
             * The shopping cart's totals.
             */
            totals: OrderTotals;
            /**
             * The shopping cart's shipping information.
             */
            shippingInfo: CartShippingInfo;
        };
        /**
         * An object representing a shopping cart that was created.
         */
        type CartCreatedEvent = {
            /**
             * ID of the shopping cart that was created.
             */
            cartId: string;
            /**
             * Time the shopping cart was created.
             */
            creationTime: string;
            /**
             * The buyer's information.
             */
            buyerInfo: BuyerInfo;
            /**
             * The order's units of weight. One of: `"KG"`, `"LB"`, or `"UNSPECIFIED_WEIGHT_UNIT"`.
             */
            weightUnit: string;
            /**
             * Currency of the shopping cart.
             */
            currency: Currency;
            /**
             * The shopping cart's totals.
             */
            totals: OrderTotals;
        };
        /**
         * An object representing a shopping cart that was recovered.
         */
        type CartRecoveredEvent = {
            /**
             * Time the recovered cart was abandoned.
             */
            abandonedTime: string;
            /**
             * ID of the shopping cart that was abandoned.
             */
            cartId: string;
            /**
             * Time the recovered cart was originally created.
             */
            creationTime: string;
            /**
             * Time the cart was recovered.
             */
            recoveredTime: string;
        };
        /**
         * An object representing the totals of a shopping cart.
         */
        type CartTotals = {
            /**
             * Subtotal of all the line items in the abandoned cart, not including shipping and tax.
             */
            subtotal: number;
            /**
             * Total of all the line items in the abandoned cart, including shipping and tax.
             */
            total: number;
            /**
             * Total formatted with currency symbol.
             */
            formattedTotal: string;
        };
        /**
         * An object representing a product collection that was created.
         */
        type CollectionCreatedEvent = {
            /**
             * ID of the created collection.
             */
            _id: string;
            /**
             * Collection name.
             */
            name: string;
            /**
             * Main product media item (image) URL.
             */
            mainMedia: string;
        };
        /**
         * An object representing a product collection that was deleted.
         */
        type CollectionDeletedEvent = {
            /**
             * ID of the delete collection.
             */
            collectionId: string;
        };
        /**
         * An object representing a product collection that was updated.
         */
        type CollectionUpdatedEvent = {
            /**
             * ID of the updated collection.
             */
            collectionId: string;
            /**
             * Names of the collection fields that were updated.
             */
            updatedFields: string[];
        };
        /**
         * An object representing fulfillment information that was created.
         */
        type FulfillmentCreatedEvent = {
            /**
             * ID of the order the fulfillment was created for.
             */
            orderId: string;
            /**
             * ID of the fulfillment that was created.
             */
            fulfillmentId: string;
            /**
             * Date and time the fulfillment was created.
             */
            dateCreated: string;
            /**
             * Information about the order's buyer.
             */
            buyerInfo: BuyerInfo;
            /**
             * Tracking information.
             */
            trackingInfo: TrackingInfo;
            /**
             * The order's current fulfillment status.
             * One of:
             *
             *  + `"NOT_FULFILLED"`: Order is not yet fulfilled.
             *  + `"FULFILLED"`: Order was fulfilled successfully.
             *  + `"CANCELED"`: Order was canceled.
             *  + `"PARTIALLY_FULFILLED"`: Order was partially fulfilled. For example, when only some of the order's items were fulfilled.
             */
            fulfillmentStatus: string;
        };
        /**
         * An object representing fulfillment information that was deleted.
         */
        type FulfillmentDeletedEvent = {
            /**
             * ID of the order the fulfillment was deleted from.
             */
            orderId: string;
            /**
             * ID of the fulfillment that was deleted.
             */
            fulfillmentId: string;
            /**
             * The order's current fulfillment status.
             * One of:
             *
             *  + `"NOT_FULFILLED"`: Order is not yet fulfilled.
             *  + `"FULFILLED"`: Order was fulfilled successfully.
             *  + `"CANCELED"`: Order was canceled.
             *  + `"PARTIALLY_FULFILLED"`: Order was partially fulfilled. For example, when only some of the order's items were fulfilled.
             */
            fulfillmentStatus: string;
        };
        /**
         * An object representing fulfillment information that was updated.
         */
        type FulfillmentUpdatedEvent = {
            /**
             * ID of the order the fulfillment was updated for.
             */
            orderId: string;
            /**
             * ID of the fulfillment that was updated.
             */
            fulfillmentId: string;
            /**
             * Tracking information.
             */
            trackingInfo: TrackingInfo;
        };
        /**
         * An object representing an inventory item that was updated.
         */
        type InventoryItemUpdatedEvent = {
            /**
             * ID of the inventory item.
             */
            inventoryItemId: string;
            /**
             * External ID of the inventory item. For example, the product ID for inventory items which are store products.
             */
            externalId: string;
            /**
             * Whether the item's inventory is tracked.
             */
            trackInventory: boolean;
        };
        /**
         * An object representing product variant information that was updated.
         */
        type InventoryVariantUpdatedEvent = {
            /**
             * ID of the inventory item.
             */
            inventoryItemId: string;
            /**
             * External ID of the inventory item. For example, the product ID for inventory items which are store products.
             */
            externalId: string;
            /**
             * List of variants that were updated.
             */
            variants: Events.UpdatedVariantInventory[];
        };
        /**
         * An object representing a new order from a store.
         */
        type NewOrderEvent = {
            /**
             * The ID of the order, auto-generated when an order is created an unique within all Wix Stores.
             */
            orderId: string;
            /**
             * Running order number unique to the current store.
             */
            number: string;
            /**
             * The date the order was created.
             */
            dateCreated: string;
            /**
             * The buyer's information.
             */
            buyerInfo: BuyerInfo;
            /**
             * The currency code for all of the order's prices.
             */
            currency: string;
            /**
             * The order's units of weight. One of: `"KG"`, `"LB"`, or `"UNSPECIFIED_WEIGHT_UNIT"`.
             */
            weightUnit: string;
            /**
             * The order's totals.
             */
            totals: OrderTotals;
            /**
             * The order's payment status. One of: `"PAID"` or `"NOT_PAID"`.
             */
            paymentStatus: string;
            /**
             * The order's fulfillment status. One of: `"FULFILLED"` or `"NOT_FULFILLED"`.
             */
            fulfillmentStatus: string;
            /**
             * Subscription information. Omitted unless the order is a subscription.
             * Learn more about [selling product subscriptions](https://support.wix.com/en/article/wix-stores-selling-product-subscriptions).
             */
            subscriptionInfo?: SubscriptionInfo;
            /**
             * Billing information.
             */
            billingInfo: BillingInfo;
        };
        /**
         * An object representing information about a canceled order.
         */
        type OrderCanceledEvent = {
            /**
             * Information about the canceled order.
             */
            order: Order;
        };
        /**
         * An object representing information about a refunded order.
         */
        type OrderRefundedEvent = {
            /**
             * Order refund ID.
             */
            refundId: string;
            /**
             * Information about the refunded order.
             */
            order: Order;
        };
        /**
         * An object representing the specific choices from the product's options.
         */
        type ProductChoices = {
            /**
             * Value of the option. This key name is
             *  dependent on the option changed in the product. For example, if a product
             *  has a size option, this key value will be something like "Size" and its value
             *  will be something like "Large".
             *
             *  `optionKey` is not case-sensitive. Therefore the values for the option keys `"Size"` `"SIZE"` and `"size"` are combined.
             */
            optionKey: string;
        };
        /**
         * An object representing a product that was created.
         */
        type ProductCreatedEvent = {
            /**
             * Product ID.
             */
            _id: string;
            /**
             * Product name.
             */
            name: string;
            /**
             * Product stock keeping unit.
             */
            sku: string;
            /**
             * Discounted product price formatted with the currency.
             */
            formattedDiscountedPrice: string;
            /**
             * Whether the product is shown in the store.
             */
            visible: boolean;
            /**
             * Main product media item (image or video) URL.
             */
            mainMedia: string;
            /**
             * Discounted product price.
             */
            discountedPrice: number;
            /**
             * Product price formatted with the currency.
             */
            formattedPrice: string;
            /**
             * Product price.
             */
            price: number;
            /**
             * Product media items.
             */
            mediaItems: MediaItem[] | VideoItem[];
            /**
             * Product currency.
             */
            currency: string;
            /**
             * URL to the product's page.
             */
            productPageUrl: string;
            /**
             * Price per unit.
             */
            pricePerUnit: number;
            /**
             * Price per unit formatted with currency symbol.
             */
            formattedPricePerUnit: string;
        };
        /**
         * An object representing a product that was deleted.
         */
        type ProductDeletedEvent = {
            /**
             * ID of the deleted product.
             */
            productId: string;
        };
        /**
         * An object representing a product that was updated.
         */
        type ProductUpdatedEvent = {
            /**
             * ID of the updated product.
             */
            productId: string;
            /**
             * Names of the product fields that were updated.
             */
            updatedFields: string[];
        };
        /**
         * An object representing a product variants that was updated.
         */
        type UpdatedVariant = {
            /**
             * ID of the variant that was updated.
             */
            variantId: string;
            /**
             * Names of the product variant fields that were updated.
             */
            updatedFields: string[];
            /**
             * Placeholder text.
             */
            choices: Events.ProductChoices;
        };
        /**
         * An object representing product variant that was updated.
         */
        type UpdatedVariantInventory = {
            /**
             * ID of the productVariant that was updated.
             */
            id: string;
            /**
             * Old variant value.
             */
            oldValue: Events.VariantInventoryValue;
            /**
             * Updated variant value.
             */
            newValue: Events.VariantInventoryValue;
        };
        /**
         * An object representing a product variant value.
         */
        type VariantInventoryValue = {
            /**
             * Whether the variant is in stock.
             */
            inStock: boolean;
            /**
             * Number of items in stock.
             */
            quantity: number;
        };
        /**
         * An object representing product variants that were updated.
         */
        type VariantsUpdatedEvent = {
            /**
             * ID of the product in which variants were updated.
             */
            productId: string;
            /**
             * Variants that were updated.
             */
            variants: Events.UpdatedVariant[];
        };
    }
}
