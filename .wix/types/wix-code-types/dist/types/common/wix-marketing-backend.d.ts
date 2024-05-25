/**
 * The wix-marketing-backend module contains functionality for working with your
 *  site's marketing tools from backend code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.html#)
 */
declare module 'wix-marketing-backend' {
    /**
     * The Coupons API is used to manage your site's coupons.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.html#coupons)
     */
    const coupons: Coupons;
    /**
     * The Coupons API is used to manage your site's coupons.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.Coupons.html#)
     */
    interface Coupons {
        /**
         * Creates a new coupon.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.Coupons.html#createCoupon)
         */
        createCoupon(couponInfo: Coupons.CouponInfo): Promise<Coupons.CouponId>;
        /**
         * Deletes an existing coupon.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.Coupons.html#deleteCoupon)
         */
        deleteCoupon(couponId: string): Promise<void>;
        /**
         * Updates the specified fields of an existing coupon.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.Coupons.html#updateCouponFields)
         */
        updateCouponFields(couponId: string, couponInfo: Coupons.CouponInfo): Promise<void>;
    }
    /**
     * Events that are triggered by actions related to Wix Marketing.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.Events.html#)
     */
    interface Events {
        /**
         * An event that is triggered when a coupon is used.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.Events.html#onCouponApplied)
         */
        onCouponApplied(event: Events.CouponAppliedEvent): void;
        /**
         * An event that is triggered when a coupon is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.Events.html#onCouponCreated)
         */
        onCouponCreated(event: Events.CouponEvent): void;
        /**
         * An event that is triggered when a coupon is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.Events.html#onCouponDeleted)
         */
        onCouponDeleted(event: Events.CouponDeletedEvent): void;
        /**
         * An event that is triggered when a coupon is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.Events.html#onCouponUpdated)
         */
        onCouponUpdated(event: Events.CouponEvent): void;
    }
    /**
     * The Coupons API is used to manage your site's coupons.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.Coupons.html#)
     */
    namespace Coupons {
        /**
         * An object representing coupon information.
         */
        type Coupon = {
            /**
             * Coupon ID.
             */
            _id: string;
            /**
             * Name of coupon.
             */
            name: string;
            /**
             * Coupon code. Must be unique for all coupons in your site. Maximum 20 characters.
             */
            code: string;
            /**
             * Coupon valid from this date and time.
             */
            startTime: Date;
            /**
             * Coupon expires at this date and time.
             */
            expirationTime?: Date;
            /**
             * Maximum number of times a coupon can be used. Note that multiple purchases by the same customer or purchases by different customers are both counted toward usage limit.
             */
            usageLimit?: number;
            /**
             * Indicates whether the coupon is currently [active](https://support.wix.com/en/article/activating-and-deactivating-coupons-in-wix-stores).
             */
            active?: boolean;
            /**
             * Scope of the coupon. When no scope is defined, the coupon applies to all items in all `namespaces` in the site.
             */
            scope?: Coupons.CouponScope;
            /**
             * Coupon creation date.
             */
            _dateCreated: string;
            /**
             * Whether the coupon is expired.
             */
            expired?: boolean;
            /**
             * Coupon display data in the dashboard. Returned if the coupon is only valid for a specific product/booking/event.
             */
            displayData?: Coupons.DisplayData;
            /**
             * Coupon type. For example, "PercentOff", "FreeShipping", etc.
             */
            type: string;
            /**
             * Maximum number of times the coupon can be used **per customer**. Not supported by Wix Bookings.
             */
            limitPerCustomer?: number;
            /**
             * Indicates whether the coupon is limited to 1 discount per order. If true and a customer pays for multiple items the coupon applies to, only the lowest priced item is discounted. Coupons with a `bookings` `namespace` are always limited to one item.
             */
            limitedToOneItem?: boolean;
            /**
             * The coupon is only applicable when the order subtotal is over this amount.
             */
            minimumSubtotal?: number;
            /**
             * Coupon type: Fixed price discount.
             */
            moneyOffAmount?: number;
            /**
             * Coupon type: Discount as a percentage.
             */
            percentOffRate?: number;
            /**
             * Coupon type: Specific sale price. Currently only supported for coupons with a `stores` `namespace`.
             */
            fixedPriceAmount?: number;
            /**
             * Coupon type: Free products when making a purchase. `buyXGetY` is an object that specifies `x` and `y` in the following scenario: if a visitor purchases x number of products, they receive y number of products for free. Currently only supported for coupons with a `stores` `namespace`.
             */
            buyXGetY?: Coupons.CouponTypeBuyXGetY;
            /**
             * Coupon type: Free shipping. If true, the coupon applies to all items in all `namespaces` in the site.
             */
            freeShipping?: boolean;
            /**
             * ID of the app that created the coupon. Empty if created by the site owner.
             */
            appId?: string;
            /**
             * How many times the coupon was used.
             */
            numberOfUsages: number;
        };
        type CouponId = {
            /**
             * ID of the new coupon.
             */
            id: string;
        };
        /**
         * An object representing information for creating or updating a coupon.
         */
        type CouponInfo = {
            /**
             * Name of coupon.
             */
            name: string;
            /**
             * Coupon code. Must be unique for all coupons in your site. Maximum 20 characters.
             */
            code: string;
            /**
             * Coupon valid from this date and time.
             */
            startTime: Date;
            /**
             * Coupon expires at this date and time.
             */
            expirationTime?: Date;
            /**
             * Maximum number of times a coupon can be used. Note that multiple purchases by the same customer or purchases by different customers are both counted toward usage limit.
             */
            usageLimit?: number;
            /**
             * Indicates whether the coupon is limited to 1 discount per order. If true and a customer pays for multiple items the coupon applies to, only the lowest priced item is discounted. Coupons with a `bookings` `namespace` are always limited to one item.
             */
            limitedToOneItem?: boolean;
            /**
             * Indicates whether the coupon is currently [active](https://support.wix.com/en/article/activating-and-deactivating-coupons-in-wix-stores).
             */
            active?: boolean;
            /**
             * The coupon is only applicable when the order subtotal is over this amount.
             */
            minimumSubtotal?: number;
            /**
             * Scope of the coupon. When no scope is defined, the coupon applies to all items in all `namespaces` in the site.
             */
            scope?: Coupons.CouponScope;
            /**
             * Coupon type: Fixed price discount.
             */
            moneyOffAmount?: number;
            /**
             * Coupon type: Discount as a percentage.
             */
            percentOffRate?: number;
            /**
             * Coupon type: Specific sale price. Currently only supported for coupons with a `stores` `namespace`.
             */
            fixedPriceAmount?: number;
            /**
             * Coupon type: Free products when making a purchase. `buyXGetY` is an object that specifies `x` and `y` in the following scenario: if a visitor purchases x number of products, they receive y number of products for free. Currently only supported for coupons with a `stores` `namespace`.
             */
            buyXGetY?: Coupons.CouponTypeBuyXGetY;
            /**
             * Coupon type: Free shipping. If true, the coupon applies to all items in all `namespaces` in the site.
             */
            freeShipping?: boolean;
            /**
             * Maximum number of times the coupon can be used **per customer**. Not supported by Wix Bookings.
             */
            limitPerCustomer?: number;
            /**
             * Whether the coupon applies to subscription products.
             *
             * If set to `true`, the discount will apply to all billing cycles.
             */
            appliesToSubscriptions?: boolean;
        };
        /**
         * An object containing the scope of a coupon.
         */
        type CouponScope = {
            /**
             * Wix application for which the coupon is applicable.
             * One of the following:
             *
             *  + `"stores"`
             *  + `"bookings"`
             *  + `"events"`
             *  + `"pricingPlans"`
             */
            namespace: string;
            /**
             * Group within a `namespace` for which the coupon is applicable. If no group is specified, the coupon applies to all items in the namespace. `group` is required in some cases. See the table in [`createCoupon()`](#createCoupon) for a list of currently supported groups for each namespace.
             */
            group?: Coupons.ScopeGroup;
        };
        /**
         * An object defining the number of purchases required and the number of free items received for a "Buy X Get Y" coupon type.
         */
        type CouponTypeBuyXGetY = {
            /**
             * Number of purchased items required to receive free items.
             */
            x: number;
            /**
             * Number of items received for free if required number of items were purchased.
             */
            y: number;
        };
        /**
         * An object representing display data for the product associated with the coupon.
         */
        type DisplayData = {
            /**
             * Display name.
             */
            name: string;
            /**
             * Formatted price for display.
             */
            formattedPrice: string;
            /**
             * Media ID for the product associated with the coupon.
             */
            mediaItem: string;
        };
        /**
         * An object specifying the group within a `CouponScope`
         * `namespace` for which the coupon is applicable.
         */
        type ScopeGroup = {
            /**
             * Name of the group.
             */
            name: string;
            /**
             * ID of the specific item in the group for which the coupon is applicable. If no `entityId` is specified, the coupon applies to all items in the group. In some cases when a group is specified, an `entityId` is required. See the table in [`createCoupon()`](#createCoupon) for a list of currently supported entities for each namespace and group.
             */
            entityId?: string;
        };
    }
    /**
     * Events that are triggered by actions related to Wix Marketing.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-backend.Events.html#)
     */
    namespace Events {
        /**
         * An object representing a custom coupon event.
         */
        type CouponAppliedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.Metadata;
            /**
             * Event data.
             */
            data: Events.Data;
        };
        /**
         * An object representing a custom coupon event.
         */
        type CouponDeletedEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.Metadata;
        };
        /**
         * An object representing a coupon event.
         */
        type CouponEvent = {
            /**
             * Event metadata.
             */
            metadata: Events.Metadata;
            /**
             * Coupon information.
             */
            entity: Coupons.Coupon;
        };
        /**
         * An object representing a custom event's data.
         */
        type Data = {
            /**
             * Applied coupon information.
             */
            coupon: Coupons.Coupon;
            /**
             * ID of the entity that the coupon was applied to (orderId, bookingId, etc.).
             */
            wixAppOrderId: string;
            /**
             * ID of the Wix app that applied the coupon.
             *  + Wix Stores: `1380b703-ce81-ff05-f115-39571d94dfcd`
             *  + Wix Bookings: `13d21c63-b5ec-5912-8397-c3a5ddb27a97`
             *  + Wix Events: `140603ad-af8d-84a5-2c80-a0f60cb47351`
             */
            wixAppId: string;
        };
        /**
         * An object representing a coupon.
         */
        type Metadata = {
            /**
             * Event ID.
             */
            id: string;
            /**
             * Coupon ID associated with this event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Whether this event was triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest: boolean;
        };
    }
}
