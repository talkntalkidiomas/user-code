/**
 * [Read more](https://www.wix.com/corvid/reference/wix-marketing.v2.html#)
 */
declare module 'wix-marketing.v2' {
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.html#coupons)
     */
    const coupons: Coupons;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Coupons.html#)
     */
    interface Coupons {
        /**
         * Creates multiple coupons.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Coupons.html#bulkCreateCoupons)
         */
        bulkCreateCoupons(specifications: Array<Coupons.Specification>, options: Coupons.BulkCreateCouponsOptions): Promise<Coupons.BulkCreateCouponsResponse>;
        /**
         * Deletes the specified coupons.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Coupons.html#bulkDeleteCoupons)
         */
        bulkDeleteCoupons(ids: Array<string>): Promise<Coupons.BulkDeleteCouponsResponse>;
        /**
         * Creates a new coupon.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Coupons.html#createCoupon)
         */
        createCoupon(specification: Coupons.Specification): Promise<Coupons.CreateCouponResponse>;
        /**
         * Deletes a coupon.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Coupons.html#deleteCoupon)
         */
        deleteCoupon(_id: string): Promise<void>;
        /**
         * Retrieves a coupon by ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Coupons.html#getCoupon)
         */
        getCoupon(_id: string): Promise<Coupons.Coupon>;
        /**
         * Retrieves a list of up to 100 coupons with pagination and filters.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Coupons.html#queryCoupons)
         */
        queryCoupons(query: Coupons.Query): Promise<Coupons.QueryCouponsResponse>;
        /**
         * Updates a coupon.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Coupons.html#updateCoupon)
         */
        updateCoupon(_id: string, specification: Coupons.Specification, fieldMask: Array<string>): Promise<void>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Events.html#)
     */
    interface Events {
        /**
         * Triggered when a coupon is applied.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Events.html#onCouponApplied)
         */
        onCouponApplied(event: Events.wixVeloEventsCouponAppliedEvent): void;
        /**
         * Triggered when a coupon is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Events.html#onCouponCreated)
         */
        onCouponCreated(event: Events.wixVeloEventsCouponCreated): void;
        /**
         * Triggered when a coupon is deleted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Events.html#onCouponDeleted)
         */
        onCouponDeleted(event: Events.wixVeloEventsCouponDeleted): void;
        /**
         * Triggered when a coupon specification is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Events.html#onCouponUpdated)
         */
        onCouponUpdated(event: Events.wixVeloEventsCouponUpdated): void;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Coupons.html#)
     */
    namespace Coupons {
        type ActionEvent = {
            bodyAsJson?: string;
        };
        type ApplicationError = {
            /**
             * Error code.
             */
            code?: string;
            /**
             * Data related to the error.
             */
            data?: Object;
            /**
             * Description of the error.
             */
            description?: string;
        };
        type AppliedCoupon = {
            /**
             * Coupon ID.
             */
            _id?: string;
            /**
             * Coupon code.
             */
            code?: string;
            /**
             * Coupon type (e.g., moneyOffAmount, buyXGetY, percentOffRate).
             */
            couponType?: string;
            /**
             * Discount value (e.g., $10, 10%).
             */
            discountValue?: string;
            /**
             * Reserved for internal use.
             */
            discountedCycleCount?: number;
            /**
             * Whether the coupon type entitles free shipping.
             */
            isFreeShipping?: boolean;
            /**
             * Name of the coupon applied.
             */
            name?: string;
        };
        type AppliedDiscount = {
            /**
             * Line item price after applied discount.
             */
            afterDiscountAmount?: number;
            /**
             * Discount amount, in case discount is applied per line.
             */
            discountAmount?: number;
        };
        type BulkActionMetadata = {
            /**
             * Number of items that couldn't be processed.
             */
            totalFailures?: number;
            /**
             * Number of items that were successfully processed.
             */
            totalSuccesses?: number;
            /**
             * Number of failures without details because detailed failure threshold was exceeded.
             */
            undetailedFailures?: number;
        };
        type BulkCreateCouponResult = {
            /**
             * New coupons.
             */
            coupon?: Coupons.Coupon;
            /**
             * Item metadata.
             */
            itemMetadata?: Coupons.ItemMetadata;
        };
        type BulkCreateCouponsOptions = {
            /**
             * Whether to return full coupon entity in the response.
             *
             * Default: `false`
             */
            returnFullEntity?: boolean;
        };
        type BulkCreateCouponsRequest = {
            /**
             * Whether to return full coupon entity in the response.
             *
             * Default: `false`
             */
            returnFullEntity?: boolean;
            /**
             * List of coupon specifications to be created.
             */
            specifications?: Array<Coupons.Specification>;
        };
        type BulkCreateCouponsResponse = {
            /**
             * Bulk action metadata.
             */
            bulkActionMetadata?: Coupons.BulkActionMetadata;
            /**
             * Items created by bulk action.
             */
            results?: Array<Coupons.BulkCreateCouponResult>;
        };
        type BulkDeleteCouponsRequest = {
            /**
             * IDs of coupons to delete.
             */
            ids?: Array<string>;
        };
        type BulkDeleteCouponsResponse = {
            /**
             * Bulk action metadata.
             */
            deleteMetadata?: Coupons.BulkActionMetadata;
            /**
             * Item metadata.
             */
            results?: Array<Coupons.ItemMetadata>;
        };
        type BuyXGetY = {
            /**
             * Number of purchased items required to receive free items.
             */
            x?: number;
            /**
             * Number of items received for free if required number of items were purchased.
             */
            y?: number;
        };
        type CalculateCartOptions = {
            /**
             * For calculating by coupon ID (usually for cart calculate phase).
             */
            _id?: string;
            /**
             * Cart to which the coupon will be applied.
             */
            cart?: Coupons.Cart;
            /**
             * For calculating by coupon code (usually for apply coupon phase - for validation).
             */
            code?: string;
            /**
             * Currency symbol for error message and applied coupon.
             */
            currencySymbol?: string;
            /**
             * Type of in-memory discount that can be applied when coupon doesn't exist.
             */
            discount?: Coupons.Specification;
            /**
             * Round the result to  places after the decimal dot. Defaults to 2 if not provided.
             */
            precision?: number;
            /**
             * Unique identifier of a buyer that applied the coupon. Used to limit coupon use per customer.
             */
            uniqueUserIdentifier?: string;
        };
        type CalculateRequest = {
            /**
             * For calculating by coupon ID (usually for cart calculate phase).
             */
            _id?: string;
            /**
             * Cart to which the coupon will be applied.
             */
            cart?: Coupons.Cart;
            /**
             * For calculating by coupon code (usually for apply coupon phase - for validation).
             */
            code: string;
            /**
             * Currency symbol for error message and applied coupon.
             */
            currencySymbol?: string;
            /**
             * Type of in-memory discount that can be applied when coupon doesn't exist.
             */
            discount?: Coupons.Specification;
            /**
             * Round the result to  places after the decimal dot. Defaults to 2 if not provided.
             */
            precision?: number;
            /**
             * Unique identifier of a buyer that applied the coupon. Used to limit coupon use per customer.
             */
            uniqueUserIdentifier?: string;
        };
        type CalculateRequestCalculateByOneOf = {
            /**
             * For calculating by coupon ID (usually for cart calculate phase).
             */
            _id?: string;
            /**
             * For calculating by coupon code (usually for apply coupon phase - for validation).
             */
            code?: string;
            /**
             * Type of in-memory discount that can be applied when coupon doesn't exist.
             */
            discount?: Coupons.Specification;
        };
        type CalculateResponse = {
            /**
             * Applied coupon information.
             */
            appliedCoupon?: Coupons.AppliedCoupon;
            /**
             * Cart after applying the coupon.
             */
            cart?: Coupons.Cart;
            /**
             * Errors, in case call failed.
             */
            error?: Array<Coupons.Error>;
        };
        type Cart = {
            /**
             * Array of cart line items.
             */
            lineItems?: Array<Coupons.LineItem>;
            /**
             * Cart shipping information.
             */
            shipping?: Coupons.Shipping;
            /**
             * Summary of cart totals.
             */
            totals?: Coupons.Totals;
        };
        type Coupon = {
            /**
             * Coupon ID.
             */
            _id?: string;
            /**
             * ID of the app that created the coupon. Empty if created by the site owner.
             */
            appId?: string;
            /**
             * Time the coupon was created (UNIX Epoch time in milliseconds).
             */
            dateCreated?: string;
            /**
             * Coupon display information.
             */
            displayData?: Coupons.DisplayData;
            /**
             * Whether the coupon is expired.
             */
            expired?: boolean;
            /**
             * How many times this coupon has been used.
             */
            numberOfUsages?: number;
            /**
             * Basic coupon info.
             */
            specification?: Coupons.Specification;
        };
        type CouponApplied = {
            /**
             * Applied coupon information.
             */
            coupon?: Coupons.Coupon;
            /**
             * ID of Wix app that applied the coupon. Supported values:
             * + Wix Stores - `1380b703-ce81-ff05-f115-39571d94dfcd`
             * + Wix Bookings - `13d21c63-b5ec-5912-8397-c3a5ddb27a97`
             * + Wix Events - `140603ad-af8d-84a5-2c80-a0f60cb47351`
             */
            wixAppId?: string;
            /**
             * ID of the entity that the coupon was applied to (orderId, bookingId, etc.).
             */
            wixAppOrderId?: string;
        };
        type CreateCouponRequest = {
            /**
             * Coupon to create.
             */
            specification?: Coupons.Specification;
        };
        type CreateCouponResponse = {
            /**
             * ID of the newly created coupon.
             */
            _id?: string;
        };
        type DeleteCouponRequest = {
            /**
             * ID of the coupon to delete.
             */
            _id: string;
        };
        type DeleteCouponResponse = {};
        type DisplayData = {
            /**
             * Formatted price for display.
             */
            formattedPrice?: string;
            /**
             * Displayed media item information.
             */
            mediaItem?: Coupons.MediaItem;
            /**
             * Coupon name to be displayed.
             */
            name?: string;
        };
        type DomainEvent = {
            /**
             * Unique event ID.
             * Allows clients to ignore duplicate webhooks.
             */
            _id?: string;
            actionEvent?: Coupons.ActionEvent;
            createdEvent?: Coupons.EntityCreatedEvent;
            deletedEvent?: Coupons.EntityDeletedEvent;
            /**
             * A sequence number defining the order of updates to the underlying entity.
             * For example, given that some entity was updated at 16:00 and than again at 16:01,
             * it is guaranteed that the sequence number of the second update is strictly higher than the first.
             * As the consumer, you can use this value to ensure that you handle messages in the correct order.
             * To do so, you will need to persist this number on your end, and compare the sequence number from the
             * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
             */
            entityEventSequence?: string;
            /**
             * Assumes actions are also always typed to an entity_type
             * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
             */
            entityFqdn?: string;
            /**
             * ID of the entity associated with the event.
             */
            entityId?: string;
            /**
             * Event timestamp.
             */
            eventTime?: Date;
            /**
             * If present, indicates the action that triggered the event.
             */
            originatedFrom?: string;
            /**
             * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
             * This is although the created/updated/deleted notion is duplication of the oneof types
             * Example: created/updated/deleted/started/completed/email_opened
             */
            slug?: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application
             * (for example, GDPR).
             */
            triggeredByAnonymizeRequest?: boolean;
            updatedEvent?: Coupons.EntityUpdatedEvent;
        };
        type DomainEventBodyOneOf = {
            actionEvent?: Coupons.ActionEvent;
            createdEvent?: Coupons.EntityCreatedEvent;
            deletedEvent?: Coupons.EntityDeletedEvent;
            updatedEvent?: Coupons.EntityUpdatedEvent;
        };
        type EntityCreatedEvent = {
            entityAsJson?: string;
        };
        type EntityDeletedEvent = {
            /**
             * Entity that was deleted
             */
            deletedEntityAsJson?: string;
        };
        type EntityUpdatedEvent = {
            /**
             * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
             * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
             * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
             */
            currentEntityAsJson?: string;
        };
        type Error = {
            /**
             * error code
             */
            code?: string;
            /**
             * descriptive error message
             */
            message?: string;
        };
        type GetCouponRequest = {
            /**
             * ID of the coupon to retrieve.
             */
            _id: string;
        };
        type GetCouponResponse = {
            /**
             * Retrieved coupon.
             */
            coupon?: Coupons.Coupon;
        };
        type Group = {
            /**
             * ID of the specific item in the group for which the coupon is applicable. If no `entityId` is specified, the coupon applies to all items in the group. In some cases when a group is specified, an `entityId` is required. See the [introduction](#introduction) for a list of currently supported entities for each namespace and group.
             */
            entityId?: string;
            /**
             * Name of coupon scope's group (e.g., product or collection in Wix Stores). See the [introduction](#introduction) for a table of currently supported coupon scopes.
             */
            name?: string;
        };
        type HasCouponsRequest = {};
        type HasCouponsResponse = {
            /**
             * True if site has ever had a coupon.
             */
            hasCoupons?: boolean;
        };
        type IncreaseUsageOptions = {
            /**
             * Unique identifier of a buyer that applied the coupon. Used to limit coupon use per customer.
             */
            uniqueUserIdentifier?: string;
            /**
             * Unique ID of the entity that the coupon was applied to (e.g., orderId).
             */
            usedBy?: string;
            /**
             * ID of app that applied the coupon (e.g. bookings appDefId).
             */
            wixAppId?: string;
        };
        type IncreaseUsageRequest = {
            /**
             * Coupon ID.
             */
            _id: string;
            /**
             * Unique identifier of a buyer that applied the coupon. Used to limit coupon use per customer.
             */
            uniqueUserIdentifier?: string;
            /**
             * Unique ID of the entity that the coupon was applied to (e.g., orderId).
             */
            usedBy?: string;
            /**
             * ID of app that applied the coupon (e.g. bookings appDefId).
             */
            wixAppId?: string;
        };
        type IncreaseUsageResponse = {
            /**
             * Errors, in case call failed.
             */
            error?: Array<Coupons.Error>;
        };
        type ItemMetadata = {
            /**
             * Item ID. Should always be available, unless it's impossible (for example, when failing to create an item).
             */
            _id?: string;
            /**
             * Details about the error in case of failure.
             */
            error?: Coupons.ApplicationError;
            /**
             * Index of the item within the request array. Allows for correlation between request and response items.
             */
            originalIndex?: number;
            /**
             * Whether the requested action was successful for this item. When `false`, the `error` field is populated.
             */
            success?: boolean;
        };
        type LineItem = {
            /**
             * Line item amount (while quantity = 1).
             */
            amount?: number;
            /**
             * Applied discount on line item after calculation.
             */
            appliedDiscount?: Coupons.AppliedDiscount;
            /**
             * Item ID in the external system - will usually be a product ID.
             */
            externalId?: string;
            /**
             * Cart line item ID - represents index position (required).
             */
            lineId?: string;
            /**
             * Line item quantity. Must be greater than 0.
             */
            quantity?: number;
            /**
             * Coupon scopes this line item applies to.
             */
            scopes?: Array<Coupons.Scope>;
            /**
             * Whether the line item is of type subscription.
             */
            subscription?: boolean;
        };
        type MediaItem = {
            /**
             * Media item height.
             */
            height?: number;
            /**
             * Media item URL.
             */
            url?: string;
            /**
             * Media item width.
             */
            width?: number;
        };
        type Paging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Offset since the beginning of the collection.
             */
            offset?: number;
        };
        type Query = {
            /**
             * Filter string (e.g., when {"expired":"true"}, expired coupons will be returned).
             */
            filter?: string;
            /**
             * Optional pagination parameters
             */
            paging?: Coupons.Paging;
            /**
             * Sort string.
             */
            sort?: string;
        };
        type QueryCouponsRequest = {
            query?: Coupons.Query;
        };
        type QueryCouponsResponse = {
            /**
             * Returned coupons.
             */
            coupons?: Array<Coupons.Coupon>;
            /**
             * Total results.
             */
            totalResults?: number;
        };
        type Scope = {
            /**
             * Group within a `namespace` for which the coupon is applicable. If no group is specified, the coupon applies to all items in the namespace. `group` is required in some cases. See the table in the [introduction](#introduction) for a list of currently supported groups for each namespace.
             */
            group?: Coupons.Group;
            /**
             * Scope namespace (Wix Stores, Wix Bookings, Wix Events, Wix Pricing Plans)
             */
            namespace?: string;
        };
        type Shipping = {
            /**
             * Shipping price before applying the coupon.
             */
            amount?: number;
            /**
             * Discount on shipping price.
             */
            appliedDiscount?: Coupons.AppliedDiscount;
        };
        type Specification = {
            /**
             * Whether the coupon is currently [active](https://support.wix.com/en/article/wix-stores-activating-and-deactivating-coupons).
             *
             * Default: `true`
             */
            active?: boolean;
            /**
             * Whether the coupon applies to subscription products.
             *
             * If set to `true`, the discount will apply to all billing cycles.
             */
            appliesToSubscriptions?: boolean;
            /**
             * Receive free products when making a purchase.
             *
             * For example, purchase `x` number of products and receive `y` number of products for free.
             */
            buyXGetY?: Coupons.BuyXGetY;
            /**
             * Coupon code. Must be unique for all coupons on your site.
             *
             * Max: 20 characters
             */
            code?: string;
            /**
             * Reserved for internal use.
             */
            discountedCycleCount?: number;
            /**
             * Coupon expires at this date and time.
             */
            expirationTime?: string;
            /**
             * Fixed sale price.
             */
            fixedPriceAmount?: number;
            /**
             * Free shipping.
             *
             * If `true`, the coupon applies to all items in all `namespaces`.
             */
            freeShipping?: boolean;
            /**
             * Maximum number of times the coupon can be used per customer.
             */
            limitPerCustomer?: number;
            /**
             * Whether the coupon is limited to one item.
             *
             * If `true` and a customer pays for multiple items, the discount applies to only the lowest priced item.
             * Coupons with a `bookings` `scope.namespace` are always limited to one item.
             */
            limitedToOneItem?: boolean;
            /**
             * The coupon is only applicable when the order subtotal is over this amount.
             */
            minimumSubtotal?: number;
            /**
             * Discount as a fixed amount.
             */
            moneyOffAmount?: number;
            /**
             * Name of coupon.
             */
            name?: string;
            /**
             * Discount as a percentage.
             */
            percentOffRate?: number;
            /**
             * Specifies the type of line items this coupon will apply to. See the [introduction](#introduction) for a table of currently supported coupon scopes.
             */
            scope?: Coupons.Scope;
            /**
             * Coupon valid from this date and time.
             */
            startTime?: string;
            /**
             * Coupon type. Read-only.
             */
            type?: string;
            /**
             * Maximum number of times the coupon can be used.
             *
             * >**Note:** Multiple purchases by the same customer or purchases by different customers are both counted toward `usageLimit`.
             */
            usageLimit?: number;
        };
        type SpecificationBehaviorOneOf = {
            /**
             * Receive free products when making a purchase.
             *
             * For example, purchase `x` number of products and receive `y` number of products for free.
             */
            buyXGetY?: Coupons.BuyXGetY;
            /**
             * Fixed sale price.
             */
            fixedPriceAmount?: number;
            /**
             * Free shipping.
             *
             * If `true`, the coupon applies to all items in all `namespaces`.
             */
            freeShipping?: boolean;
            /**
             * Discount as a fixed amount.
             */
            moneyOffAmount?: number;
            /**
             * Discount as a percentage.
             */
            percentOffRate?: number;
        };
        type SpecificationScopeOrMinSubtotalOneOf = {
            /**
             * The coupon is only applicable when the order subtotal is over this amount.
             */
            minimumSubtotal?: number;
            /**
             * Specifies the type of line items this coupon will apply to. See the [introduction](#introduction) for a table of currently supported coupon scopes.
             */
            scope?: Coupons.Scope;
        };
        type Totals = {
            /**
             * Sum of all discounts.
             */
            discount?: number;
            /**
             * Cart subtotal.
             */
            subTotal?: number;
            total?: number;
        };
        type UpdateCouponRequest = {
            /**
             * ID of the coupon to update.
             */
            _id: string;
            /**
             * Coupon information to update.
             */
            specification?: Coupons.Specification;
        };
        type UpdateCouponResponse = {};
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-marketing-v2.Events.html#)
     */
    namespace Events {
        type wixVeloEventsActionEvent = {
            bodyAsJson?: string;
        };
        type wixVeloEventsApplicationError = {
            /**
             * Error code.
             */
            code?: string;
            /**
             * Data related to the error.
             */
            data?: Object;
            /**
             * Description of the error.
             */
            description?: string;
        };
        type wixVeloEventsAppliedCoupon = {
            /**
             * Coupon ID.
             */
            _id?: string;
            /**
             * Coupon code.
             */
            code?: string;
            /**
             * Coupon type (e.g., moneyOffAmount, buyXGetY, percentOffRate).
             */
            couponType?: string;
            /**
             * Discount value (e.g., $10, 10%).
             */
            discountValue?: string;
            /**
             * Amount of discounted cycles for subscription item. None specifies for all cycles.
             */
            discountedCycleCount?: number;
            /**
             * Whether the coupon type entitles free shipping.
             */
            isFreeShipping?: boolean;
            /**
             * Name of the coupon applied.
             */
            name?: string;
        };
        type wixVeloEventsAppliedDiscount = {
            /**
             * Line item price after applied discount.
             */
            afterDiscountAmount?: number;
            /**
             * Discount amount, in case discount is applied per line.
             */
            discountAmount?: number;
        };
        type wixVeloEventsBackendEventMetadata = {
            /**
             * ID of the entity associated with the event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Event ID.
             */
            id: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest: boolean;
        };
        type wixVeloEventsBulkActionMetadata = {
            /**
             * Number of items that couldn't be processed.
             */
            totalFailures?: number;
            /**
             * Number of items that were successfully processed.
             */
            totalSuccesses?: number;
            /**
             * Number of failures without details because detailed failure threshold was exceeded.
             */
            undetailedFailures?: number;
        };
        type wixVeloEventsBulkCreateCouponResult = {
            /**
             * New coupons.
             */
            coupon?: Events.wixVeloEventsCoupon;
            /**
             * Item metadata.
             */
            itemMetadata?: Events.wixVeloEventsItemMetadata;
        };
        type wixVeloEventsBulkCreateCouponsRequest = {
            /**
             * Whether to return full coupon entity in the response.
             *
             * Default: `false`
             */
            returnFullEntity?: boolean;
            /**
             * List of coupon specifications to be created.
             */
            specifications?: Array<Events.wixVeloEventsSpecification>;
        };
        type wixVeloEventsBulkCreateCouponsResponse = {
            /**
             * Bulk action metadata.
             */
            bulkActionMetadata?: Events.wixVeloEventsBulkActionMetadata;
            /**
             * Items created by bulk action.
             */
            results?: Array<Events.wixVeloEventsBulkCreateCouponResult>;
        };
        type wixVeloEventsBulkDeleteCouponsRequest = {
            /**
             * IDs of coupons to delete.
             */
            ids?: Array<string>;
        };
        type wixVeloEventsBulkDeleteCouponsResponse = {
            /**
             * Bulk action metadata.
             */
            deleteMetadata?: Events.wixVeloEventsBulkActionMetadata;
            /**
             * Item metadata.
             */
            results?: Array<Events.wixVeloEventsItemMetadata>;
        };
        type wixVeloEventsBuyXGetY = {
            /**
             * Number of purchased items required to receive free items.
             */
            x?: number;
            /**
             * Number of items received for free if required number of items were purchased.
             */
            y?: number;
        };
        type wixVeloEventsCalculateRequest = {
            /**
             * For calculating by coupon ID (usually for cart calculate phase).
             */
            _id?: string;
            /**
             * Cart to which the coupon will be applied.
             */
            cart?: Events.wixVeloEventsCart;
            /**
             * For calculating by coupon code (usually for apply coupon phase - for validation).
             */
            code: string;
            /**
             * Currency symbol for error message and applied coupon.
             */
            currencySymbol?: string;
            /**
             * Type of in-memory discount that can be applied when coupon doesn't exist.
             */
            discount?: Events.wixVeloEventsSpecification;
            /**
             * Round the result to  places after the decimal dot. Defaults to 2 if not provided.
             */
            precision?: number;
            /**
             * Unique identifier of a buyer that applied the coupon. Used to limit coupon use per customer.
             */
            uniqueUserIdentifier?: string;
        };
        type wixVeloEventsCalculateRequestCalculateByOneOf = {
            /**
             * For calculating by coupon ID (usually for cart calculate phase).
             */
            _id?: string;
            /**
             * For calculating by coupon code (usually for apply coupon phase - for validation).
             */
            code?: string;
            /**
             * Type of in-memory discount that can be applied when coupon doesn't exist.
             */
            discount?: Events.wixVeloEventsSpecification;
        };
        type wixVeloEventsCalculateResponse = {
            /**
             * Applied coupon information.
             */
            appliedCoupon?: Events.wixVeloEventsAppliedCoupon;
            /**
             * Cart after applying the coupon.
             */
            cart?: Events.wixVeloEventsCart;
            /**
             * Errors, in case call failed.
             */
            error?: Array<Events.wixVeloEventsError>;
        };
        type wixVeloEventsCart = {
            /**
             * Array of cart line items.
             */
            lineItems?: Array<Events.wixVeloEventsLineItem>;
            /**
             * Cart shipping information.
             */
            shipping?: Events.wixVeloEventsShipping;
            /**
             * Summary of cart totals.
             */
            totals?: Events.wixVeloEventsTotals;
        };
        type wixVeloEventsCoupon = {
            /**
             * Coupon ID.
             */
            _id?: string;
            /**
             * ID of the app that created the coupon. Empty if created by the site owner.
             */
            appId?: string;
            /**
             * Time the coupon was created (UNIX Epoch time in milliseconds).
             */
            dateCreated?: string;
            /**
             * Coupon display information.
             */
            displayData?: Events.wixVeloEventsDisplayData;
            /**
             * Whether the coupon is expired.
             */
            expired?: boolean;
            /**
             * How many times this coupon has been used.
             */
            numberOfUsages?: number;
            /**
             * Basic coupon info.
             */
            specification?: Events.wixVeloEventsSpecification;
        };
        type wixVeloEventsCouponApplied = {
            /**
             * Applied coupon information.
             */
            coupon?: Events.wixVeloEventsCoupon;
            /**
             * ID of Wix app that applied the coupon. Supported values:
             * + Wix Stores - `1380b703-ce81-ff05-f115-39571d94dfcd`
             * + Wix Bookings - `13d21c63-b5ec-5912-8397-c3a5ddb27a97`
             * + Wix Events - `140603ad-af8d-84a5-2c80-a0f60cb47351`
             */
            wixAppId?: string;
            /**
             * ID of the entity that the coupon was applied to (orderId, bookingId, etc.).
             */
            wixAppOrderId?: string;
        };
        type wixVeloEventsCouponAppliedEvent = {
            /**
             * Event data.
             */
            data: Events.wixVeloEventsCouponApplied;
            /**
             * Event metadata.
             */
            metadata: Events.wixVeloEventsBackendEventMetadata;
        };
        type wixVeloEventsCouponCreated = {
            /**
             * Created coupon.
             */
            entity: Events.wixVeloEventsCoupon;
            /**
             * Event metadata.
             */
            metadata: Events.wixVeloEventsBackendEventMetadata;
        };
        type wixVeloEventsCouponDeleted = {
            /**
             * Event metadata.
             */
            metadata: Events.wixVeloEventsBackendEventMetadata;
        };
        type wixVeloEventsCouponUpdated = {
            /**
             * Updated coupon.
             */
            entity: Events.wixVeloEventsCoupon;
            /**
             * Event metadata.
             */
            metadata: Events.wixVeloEventsBackendEventMetadata;
        };
        type wixVeloEventsCreateCouponRequest = {
            /**
             * Coupon to create.
             */
            specification?: Events.wixVeloEventsSpecification;
        };
        type wixVeloEventsCreateCouponResponse = {
            /**
             * ID of the newly created coupon.
             */
            _id?: string;
        };
        type wixVeloEventsDeleteCouponRequest = {
            /**
             * ID of the coupon to delete.
             */
            _id: string;
        };
        type wixVeloEventsDeleteCouponResponse = {};
        type wixVeloEventsDisplayData = {
            /**
             * Formatted price for display.
             */
            formattedPrice?: string;
            /**
             * Displayed media item information.
             */
            mediaItem?: Events.wixVeloEventsMediaItem;
            /**
             * Coupon name to be displayed.
             */
            name?: string;
        };
        type wixVeloEventsDomainEvent = {
            /**
             * Unique event ID.
             * Allows clients to ignore duplicate webhooks.
             */
            _id?: string;
            actionEvent?: Events.wixVeloEventsActionEvent;
            createdEvent?: Events.wixVeloEventsEntityCreatedEvent;
            deletedEvent?: Events.wixVeloEventsEntityDeletedEvent;
            /**
             * A sequence number defining the order of updates to the underlying entity.
             * For example, given that some entity was updated at 16:00 and than again at 16:01,
             * it is guaranteed that the sequence number of the second update is strictly higher than the first.
             * As the consumer, you can use this value to ensure that you handle messages in the correct order.
             * To do so, you will need to persist this number on your end, and compare the sequence number from the
             * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
             */
            entityEventSequence?: string;
            /**
             * Assumes actions are also always typed to an entity_type
             * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
             */
            entityFqdn?: string;
            /**
             * ID of the entity associated with the event.
             */
            entityId?: string;
            /**
             * Event timestamp.
             */
            eventTime?: Date;
            /**
             * If present, indicates the action that triggered the event.
             */
            originatedFrom?: string;
            /**
             * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
             * This is although the created/updated/deleted notion is duplication of the oneof types
             * Example: created/updated/deleted/started/completed/email_opened
             */
            slug?: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application
             * (for example, GDPR).
             */
            triggeredByAnonymizeRequest?: boolean;
            updatedEvent?: Events.wixVeloEventsEntityUpdatedEvent;
        };
        type wixVeloEventsDomainEventBodyOneOf = {
            actionEvent?: Events.wixVeloEventsActionEvent;
            createdEvent?: Events.wixVeloEventsEntityCreatedEvent;
            deletedEvent?: Events.wixVeloEventsEntityDeletedEvent;
            updatedEvent?: Events.wixVeloEventsEntityUpdatedEvent;
        };
        type wixVeloEventsEntityCreatedEvent = {
            entityAsJson?: string;
        };
        type wixVeloEventsEntityDeletedEvent = {
            /**
             * Entity that was deleted
             */
            deletedEntityAsJson?: string;
        };
        type wixVeloEventsEntityUpdatedEvent = {
            /**
             * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
             * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
             * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
             */
            currentEntityAsJson?: string;
        };
        type wixVeloEventsError = {
            /**
             * error code
             */
            code?: string;
            /**
             * descriptive error message
             */
            message?: string;
        };
        type wixVeloEventsGetCouponRequest = {
            /**
             * ID of the coupon to retrieve.
             */
            _id: string;
        };
        type wixVeloEventsGetCouponResponse = {
            /**
             * Retrieved coupon.
             */
            coupon?: Events.wixVeloEventsCoupon;
        };
        type wixVeloEventsGroup = {
            /**
             * Item ID (when the coupon scope is limited to just one item).
             */
            entityId?: string;
            /**
             * Coupon scope's group (e.g., product or collection in Wix Stores). See [valid scope values](https://dev.wix.com/api/rest/coupons/coupons/valid-scope-values).
             */
            name?: string;
        };
        type wixVeloEventsHasCouponsRequest = {};
        type wixVeloEventsHasCouponsResponse = {
            /**
             * True if site has ever had a coupon.
             */
            hasCoupons?: boolean;
        };
        type wixVeloEventsIncreaseUsageRequest = {
            /**
             * Coupon ID.
             */
            _id: string;
            /**
             * Unique identifier of a buyer that applied the coupon. Used to limit coupon use per customer.
             */
            uniqueUserIdentifier?: string;
            /**
             * Unique ID of the entity that the coupon was applied to (e.g., orderId).
             */
            usedBy?: string;
            /**
             * ID of app that applied the coupon (e.g. bookings appDefId).
             */
            wixAppId?: string;
        };
        type wixVeloEventsIncreaseUsageResponse = {
            /**
             * Errors, in case call failed.
             */
            error?: Array<Events.wixVeloEventsError>;
        };
        type wixVeloEventsItemMetadata = {
            /**
             * Item ID. Should always be available, unless it's impossible (for example, when failing to create an item).
             */
            _id?: string;
            /**
             * Details about the error in case of failure.
             */
            error?: Events.wixVeloEventsApplicationError;
            /**
             * Index of the item within the request array. Allows for correlation between request and response items.
             */
            originalIndex?: number;
            /**
             * Whether the requested action was successful for this item. When `false`, the `error` field is populated.
             */
            success?: boolean;
        };
        type wixVeloEventsLineItem = {
            /**
             * Line item amount (while quantity = 1).
             */
            amount?: number;
            /**
             * Applied discount on line item after calculation.
             */
            appliedDiscount?: Events.wixVeloEventsAppliedDiscount;
            /**
             * Item ID in the external system - will usually be a product ID.
             */
            externalId?: string;
            /**
             * Cart line item ID - represents index position (required).
             */
            lineId?: string;
            /**
             * Line item quantity. Must be greater than 0.
             */
            quantity?: number;
            /**
             * Coupon scopes this line item applies to.
             */
            scopes?: Array<Events.wixVeloEventsScope>;
            /**
             * Whether the line item is of type subscription.
             */
            subscription?: boolean;
        };
        type wixVeloEventsMediaItem = {
            /**
             * Media item height.
             */
            height?: number;
            /**
             * Media item URL.
             */
            url?: string;
            /**
             * Media item width.
             */
            width?: number;
        };
        type wixVeloEventsPaging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Offset since the beginning of the collection.
             */
            offset?: number;
        };
        type wixVeloEventsQuery = {
            /**
             * Filter string (e.g., when {"expired":"true"}, expired coupons will be returned).
             */
            filter?: string;
            /**
             * Optional pagination parameters
             */
            paging?: Events.wixVeloEventsPaging;
            /**
             * Sort string.
             */
            sort?: string;
        };
        type wixVeloEventsQueryCouponsRequest = {
            query?: Events.wixVeloEventsQuery;
        };
        type wixVeloEventsQueryCouponsResponse = {
            /**
             * Returned coupons.
             */
            coupons?: Array<Events.wixVeloEventsCoupon>;
            /**
             * Total results.
             */
            totalResults?: number;
        };
        type wixVeloEventsScope = {
            /**
             * Coupon scope's applied group (e.g., event or ticket in Wix Events)
             */
            group?: Events.wixVeloEventsGroup;
            /**
             * Scope namespace (Wix Stores, Wix Bookings, Wix Events, Wix Pricing Plans)
             */
            namespace?: string;
        };
        type wixVeloEventsShipping = {
            /**
             * Shipping price before applying the coupon.
             */
            amount?: number;
            /**
             * Discount on shipping price.
             */
            appliedDiscount?: Events.wixVeloEventsAppliedDiscount;
        };
        type wixVeloEventsSpecification = {
            /**
             * Whether the coupon is currently [active](https://support.wix.com/en/article/wix-stores-activating-and-deactivating-coupons).
             *
             * Default: `true`
             */
            active?: boolean;
            /**
             * Whether the coupon applies to subscription products.
             */
            appliesToSubscriptions?: boolean;
            /**
             * Receive free products when making a purchase.
             *
             * For example, purchase `x` number of products and receive `y` number of products for free.
             */
            buyXGetY?: Events.wixVeloEventsBuyXGetY;
            /**
             * Coupon code. Must be unique for all coupons on your site.
             *
             * Max: 20 characters
             */
            code?: string;
            /**
             * Specifies the amount of discounted cycles for a subscription item.
             *
             * Can only be set when `appliesToSubscriptions` is `true` and `scope.namespace` is `pricingPlans`.
             * If `discountedCycleCount` is empty, the coupon applies to all available cycles.
             *
             * Min: `1`
             * Max: `999`
             */
            discountedCycleCount?: number;
            /**
             * Coupon expires at this date and time.
             */
            expirationTime?: string;
            /**
             * Fixed sale price.
             */
            fixedPriceAmount?: number;
            /**
             * Free shipping.
             *
             * If `true`, the coupon applies to all items in all `namespaces`.
             */
            freeShipping?: boolean;
            /**
             * Maximum number of times the coupon can be used per customer.
             */
            limitPerCustomer?: number;
            /**
             * Whether the coupon is limited to one item.
             *
             * If `true` and a customer pays for multiple items, the discount applies to only the lowest priced item.
             * Coupons with a `bookings` `scope.namespace` are always limited to one item.
             */
            limitedToOneItem?: boolean;
            /**
             * Limit the coupon to carts with a subtotal above this number.
             */
            minimumSubtotal?: number;
            /**
             * Discount as a fixed amount.
             */
            moneyOffAmount?: number;
            /**
             * Name of coupon.
             */
            name?: string;
            /**
             * Discount as a percentage.
             */
            percentOffRate?: number;
            /**
             * Specifies the type of line items this coupon will apply to. See [valid scope values](https://dev.wix.com/api/rest/coupons/coupons/valid-scope-values).
             */
            scope?: Events.wixVeloEventsScope;
            /**
             * Coupon valid from this date and time.
             */
            startTime?: string;
            /**
             * Coupon type. Read-only.
             */
            type?: string;
            /**
             * Maximum number of times the coupon can be used.
             *
             * >**Note:** Multiple purchases by the same customer or purchases by different customers are both counted toward `usageLimit`.
             */
            usageLimit?: number;
        };
        type wixVeloEventsSpecificationBehaviorOneOf = {
            /**
             * Receive free products when making a purchase.
             *
             * For example, purchase `x` number of products and receive `y` number of products for free.
             */
            buyXGetY?: Events.wixVeloEventsBuyXGetY;
            /**
             * Fixed sale price.
             */
            fixedPriceAmount?: number;
            /**
             * Free shipping.
             *
             * If `true`, the coupon applies to all items in all `namespaces`.
             */
            freeShipping?: boolean;
            /**
             * Discount as a fixed amount.
             */
            moneyOffAmount?: number;
            /**
             * Discount as a percentage.
             */
            percentOffRate?: number;
        };
        type wixVeloEventsSpecificationScopeOrMinSubtotalOneOf = {
            /**
             * Limit the coupon to carts with a subtotal above this number.
             */
            minimumSubtotal?: number;
            /**
             * Specifies the type of line items this coupon will apply to. See [valid scope values](https://dev.wix.com/api/rest/coupons/coupons/valid-scope-values).
             */
            scope?: Events.wixVeloEventsScope;
        };
        type wixVeloEventsTotals = {
            /**
             * Sum of all discounts.
             */
            discount?: number;
            /**
             * Cart subtotal.
             */
            subTotal?: number;
            total?: number;
        };
        type wixVeloEventsUpdateCouponRequest = {
            /**
             * ID of the coupon to update.
             */
            _id: string;
            /**
             * Coupon information to update.
             */
            specification?: Events.wixVeloEventsSpecification;
        };
        type wixVeloEventsUpdateCouponResponse = {};
    }
}
