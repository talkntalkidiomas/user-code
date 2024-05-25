/**
 * The wix-stores-frontend module contains functionality for working with your
 *  site's store from client-side code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.html#)
 */
declare module 'wix-stores-frontend' {
    /**
     * The wix-stores-frontend.cart module provides functionality for working with your site's cart from client-side code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.html#cart)
     */
    const cart: Cart;
    /**
     * The wix-stores-frontend.navigate module provides functionality for navigating your store from client-side code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.html#navigate)
     */
    const navigate: Navigate;
    /**
     * The wix-stores-frontend.product module provides functionality for working with your store's products from client-side code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.html#product)
     */
    const product: Product;
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
         * Cart line item ID.
         */
        id: number;
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
    };
    /**
     * An object representing a line item's primary media.
     */
    type CartMediaItem = {
        /**
         * Media item type. Currently only `"IMAGE"` type supported.
         */
        type: string;
        /**
         * Media item source for media uploaded to Wix (wix:image, wix:video or external URL).
         */
        src: string;
    };
    /**
     * An object representing a shopping cart.
     */
    type CartObj = {
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
     * An object representing a currency.
     */
    type Currency = {
        /**
         * The currency code.
         */
        currency: string;
    };
    /**
     * An object representing a media item.
     */
    type MediaItem = {
        /**
         * Media item ID.
         */
        id: string;
        /**
         * Media item title.
         */
        title: string;
        /**
         * Media item description.
         */
        description: string;
        /**
         * Media items type. Can be "image" or "video."
         */
        type: string;
        /**
         * Media item URL.
         */
        src: string;
        /**
         * Thumbnail URL for videos only.
         */
        thumbnail?: string;
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
        limit?: number;
        /**
         * Number of variants to skip before the retrieved variants. Defaults to 0.
         */
        skip?: number;
    };
    /**
     * An object representing a product variant's option choices.
     */
    type ProductChoices = {
        /**
         * Value of the choice. This key name is
         *  dependent on the product option. For example, if a product
         *  has a size option, this key value will be something like "Size" and its value
         *  will be something like "Large".
         *
         *  `optionKey` is not case-sensitive. Therefore the values for the option keys "`Size`", "`SIZE`", and "`size`" are combined.
         */
        optionKey: string;
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
         */
        choices: ProductOptionsChoice[];
    };
    /**
     * An object representing all the available options for a store product, such as "Size" or "Color".
     */
    type ProductOptions = {
        /**
         * Name of the option. This key name
         *  is dependent on the options added to the product. For example, if a product has a size
         *  option, this key will be something like `"Size"`.
         *
         *  `optionKey` is not case-sensitive. Therefore the values for the option keys "`Size`", "`SIZE`", and "`size`" are combined.
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
        mediaItems: MediaItem;
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
         * Whether the product variant is shown in the store.
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
         * Choice media.
         */
        media: ProductOptionsChoiceMedia;
        /**
         * Whether the product with this choice is in stock.
         */
        inStock: boolean;
        /**
         * Whether the product with this option is visible.
         */
        visible: boolean;
    };
    /**
     * An object representing the choice media.
     */
    type ProductOptionsChoiceMedia = {
        /**
         * Main choice media item (image or video thumbnail) URL.
         */
        mainMedia: string;
        /**
         * List of choice media items.
         */
        mediaItems: MediaItem;
    };
    /**
     * An object representing the selection of specific variants of a product. Use only one of
     *  `choices` or `variantIds`.
     */
    type ProductVariantOptions = {
        /**
         * Choices of the retrieved variants.
         */
        choices?: any;
        /**
         * IDs of the variants to retrieve.
         */
        variantIds?: string[];
    };
    type QuickViewOptions = {
        /**
         * Product quantity to be displayed in the Quick View. Defaults to 1.
         */
        quantity: number;
    };
    /**
     * An object containing variant information to use when creating or updating variants.
     */
    type VariantInfo = {
        /**
         * Variant currency.
         */
        currency: string;
        /**
         * Variant price. The variant price must be greater than its discount. If the variant price has been updated, changes to the product price do not affect the variant price.
         */
        price: number;
        /**
         * Discounted variant price.
         */
        discountedPrice: number;
        /**
         * Variant price formatted with the currency.
         */
        formattedPrice: string;
        /**
         * Discounted variant price formatted with the currency.
         */
        formattedDiscountedPrice: string;
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
         * Whether the variant is visible in the store.
         */
        visible: boolean;
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
         * Choices of the retrieved variant in the form of an object containing a key:value pair for each variant choice. For example, if a variant has a size option, this key value will be something like "Size" and its value will be something like "Large".
         */
        choices: any;
        /**
         * Variant information.
         */
        variant: VariantInfo;
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
     * Function that runs when a cart changes.
     */
    type CartChangedHandler = (cart: CartObj) => void;
    /**
     * The wix-stores-frontend.Cart module contains functionality for working with your
     *  site's cart from client-side code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Cart.html#)
     */
    interface Cart {
        /**
         * Adds one or more products to the cart.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Cart.html#addProducts)
         */
        addProducts(products: Cart.AddToCartItem[]): Promise<CartObj>;
        /**
         * Adds and applies a coupon to the cart.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Cart.html#applyCoupon)
         */
        applyCoupon(couponCode: string): Promise<CartObj>;
        /**
         * **Deprecated.**
         * This function will continue to work, but a newer version is available at
         * [`wix-ecom-backend.CurrentCart.getCurrentCart()`](https://www.wix.com/velo/reference/wix-ecom-backend/currentcart/getcurrentcart).
         *
         * We recommend you migrate to the new [Wix eCommerce APIs](https://www.wix.com/velo/reference/wix-ecom-backend/introduction) as soon as possible.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Cart.html#getCurrentCart)
         */
        getCurrentCart(): Promise<CartObj>;
        /**
         * Hides the Mini Cart.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Cart.html#hideMiniCart)
         */
        hideMiniCart(): void;
        /**
         * An event handler that is triggered when items are added or removed from a cart.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Cart.html#onChange)
         */
        onChange(handler: CartChangedHandler): void;
        /**
         * Removes the coupon currently applied to the cart.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Cart.html#removeCoupon)
         */
        removeCoupon(): Promise<CartObj>;
        /**
         * Removes a specified product from the cart.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Cart.html#removeProduct)
         */
        removeProduct(cartLineItemId: number): Promise<CartObj>;
        /**
         * Shows the Mini Cart.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Cart.html#showMiniCart)
         */
        showMiniCart(): void;
        /**
         * Updates the quantity of a specified line item in the cart.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Cart.html#updateLineItemQuantity)
         */
        updateLineItemQuantity(cartLineItemId: number, quantity: number): Promise<CartObj>;
    }
    /**
     * The wix-stores-frontend.Navigate module contains functionality for navigating to
     * store-related pages from client-side code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Navigate.html#)
     */
    interface Navigate {
        /**
         * Directs the browser to navigate to the site visitor's cart page.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Navigate.html#toCart)
         */
        toCart(): Promise<void>;
    }
    /**
     * The wix-stores-frontend.product module contains functionality for working with your
     *  store's products from client-side code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Product.html#)
     */
    interface Product {
        /**
         * Gets the availability of a product based on the specified option choices.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Product.html#getOptionsAvailability)
         */
        getOptionsAvailability(productId: string, choices: any): Promise<ProductOptionsAvailability>;
        /**
         * Gets a product's available variants based on the specified product ID and either option choices or variant IDs.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Product.html#getVariants)
         */
        getVariants(productId: string, options?: ProductVariantOptions): Promise<VariantItem[]>;
        /**
         * Opens the [Quick View](https://support.wix.com/en/article/wix-stores-customizing-the-quick-view-in-the-product-gallery) modal of a specified product.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Product.html#openQuickView)
         */
        openQuickView(productId: string, options?: QuickViewOptions): Promise<void>;
    }
    /**
     * The wix-stores-frontend.Cart module contains functionality for working with your
     *  site's cart from client-side code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-stores-frontend.Cart.html#)
     */
    namespace Cart {
        /**
         * An object used when adding one or more products to the cart.
         */
        type AddToCartItem = {
            /**
             * ID of the product to add to the cart.
             */
            productId: string;
            /**
             * Number of product units to add to the cart.
             */
            quantity: number;
            /**
             * Specific product options to add to the cart.
             *  If the product you're adding has options, you must specify which options to add.
             */
            options?: Cart.AddToCartOptions;
        };
        /**
         * An object used when adding a product to the cart with options.
         */
        type AddToCartOptions = {
            /**
             * Product options to use when adding the
             *  product to the cart. The object contains key:value pairs where the key is the option name and the value is the chosen option value.
             */
            choices?: any;
            /**
             * Custom text fields to use when adding the product to the cart.
             */
            customTextFields?: Cart.CustomTextField[];
        };
        /**
         * An object used to pass a custom text field when adding a product to
         *  the cart with options.
         */
        type CustomTextField = {
            /**
             * Custom text field title.
             */
            title: string;
            /**
             * Custom text field value.
             */
            value: string;
        };
    }
}
