/**
 * The wix-pricing-plans module contains functionality for working with
 *  pricing plans from client-side code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans.html#)
 */
declare module 'wix-pricing-plans' {
    /**
     * The Pricing Plans Checkout API contains functionality for ordering, checking out, and purchasing
     *  your site's pricing plan [orders](https://support.wix.com/en/article/pricing-plans-an-overview).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans.html#checkout)
     */
    const checkout: Checkout;
    /**
     * The Pricing Plan Orders API provides functionality for managing pricing plan orders created in the Wix Pricing Plans app or using the Wix Pricing Plans API.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans.html#orders)
     */
    const orders: Orders;
    /**
     * Contains functionality for ordering your site's pricing plans.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans.Checkout.html#)
     */
    interface Checkout {
        /**
         * Orders a pricing plan.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans.Checkout.html#createOnlineOrder)
         */
        createOnlineOrder(planId: string, options?: Checkout.CreateOnlineOrderOptions): Promise<Orders.Order>;
        /**
         * Orders and purchases a pricing plan.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans.Checkout.html#startOnlinePurchase)
         */
        startOnlinePurchase(planId: string, options?: Checkout.StartOnlinePurchaseOptions): Promise<Checkout.Purchase>;
    }
    /**
     * The Pricing Plans Orders API contains functionality for managing
     *  your site's pricing plan [orders](https://support.wix.com/en/article/pricing-plans-an-overview).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans.Orders.html#)
     */
    interface Orders {
        /**
         * Lists the orders for the currently logged-in member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans.Orders.html#listCurrentMemberOrders)
         */
        listCurrentMemberOrders(filters?: Orders.CurrentMemberFilterOptions, sorting?: Orders.SortingOptions, paging?: Orders.PaginationOptions): Promise<Orders.Order[]>;
        /**
         * Requests the cancellation of a specific order of a plan for the currently logged-in member.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans.Orders.html#requestCurrentMemberOrderCancellation)
         */
        requestCurrentMemberOrderCancellation(orderId: string, effectiveAt: string): Promise<void>;
    }
    /**
     * Contains functionality for ordering your site's pricing plans.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans.Checkout.html#)
     */
    namespace Checkout {
        type CreateOnlineOrderOptions = {
            /**
             * Start date and time for the ordered plan.
             *
             * Default: Current date and time
             */
            startDate?: Date;
            /**
             * Coupon code to apply.
             *
             * To learn more about coupons, see [applyCoupon()](wix-pricing-plans-backend/checkout/applycoupon).
             */
            couponCode?: string;
        };
        /**
         * An object representing the period for which a plan is valid.
         */
        type Period = {
            /**
             * The number of units until the plan expires.
             */
            amount: number;
            /**
             * Time period for billing the plan, such as `"MONTH"`.
             */
            unit: string;
        };
        /**
         * An object representing the price of a purchased plan.
         */
        type Price = {
            /**
             * Payment currency. A three-letter
             *  [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
             */
            currency: string;
            /**
             * The cost of the plan.
             */
            amount: number;
        };
        /**
         * An object representing a purchase for a non-free plan.
         */
        type Purchase = {
            /**
             * The order being purchased.
             */
            order: Orders.Order;
            /**
             * Payment status in [Wix Pay](https://www.wix.com/velo/reference/wix-pay). Omitted for free plans.
             *  One of:
             *  + `"Successful"`: Payment was successfully received.
             *  + `"Pending"`: Payment is pending payment provider approval.
             *  + `"Failed"`: Payment has failed.
             *  + `"Chargeback"`: Payment is chargeback.
             *  + `"Refunded"`: Payment was fully refunded.
             *  + `"Offline"`: Payment will be executed offline.
             *  + `"PartiallyRefunded"`: Payment was partially refunded.
             *  + `"Cancelled"`: Payment was cancelled and was not processed.
             *  + `"Undefined"`: Payment status is pending payment provider input.
             */
            wixPayStatus?: string;
        };
        type StartOnlinePurchaseOptions = {
            /**
             * Start date and time for the ordered plan.
             *
             * Default: Current date and time
             */
            startDate?: Date;
            /**
             * Coupon code to apply.
             *
             * To learn more about coupons, see [applyCoupon()](wix-pricing-plans-backend/checkout/applycoupon).
             */
            couponCode?: string;
        };
        /**
         * An object representing how long a plan is valid.
         */
        type ValidFor = {
            /**
             * If true, the plan does not expire.
             */
            forever: boolean;
            /**
             * Object containing the period for which the plan is valid.
             */
            period: Checkout.Period;
        };
    }
    /**
     * The Pricing Plans Orders API contains functionality for managing
     *  your site's pricing plan [orders](https://support.wix.com/en/article/pricing-plans-an-overview).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pricing-plans.Orders.html#)
     */
    namespace Orders {
        /**
         * Buyer details.
         */
        type Buyer = {
            /**
             * Member ID for the buyer. See [`wix-members-backend`](wix-members-backend/introduction) to learn more about a site's members.
             */
            memberId: string;
            /**
             * Contact ID for the buyer. See [Contacts in `wix-crm-backend`](wix-crm-backend/contacts/introduction) to learn more about a site's contacts.
             */
            contactId: string;
        };
        /**
         * Details about the cancellation of an order. Only present if the order `status` is `"CANCELED"`.
         */
        type Cancellation = {
            /**
             * Date and time when the cancellation was requested.
             */
            requestedDate: Date;
            /**
             * The reason for the cancellation.
             * Supported values:
             *  + `"OWNER_ACTION"`. The site owner canceled the order.
             *  + `"MEMBER_ACTION"`. The buyer initiated the cancellation.
             *  + `"PAYMENT_FAILURE"`. A payment transaction failed.
             *  + `"PAYMENT_SETUP_FAILURE"`. The buyer's payment details weren't set up correctly.
             */
            cause: string;
            /**
             * When the cancellation takes effect. This is set when cancelling the order.
             * Supported values:
             *  + `"IMMEDIATELY"`. The cancellation occurs immediately and the buyer can no longer use the plan at this point.
             *  + `"NEXT_PAYMENT_DATE"`. The cancellation occurs at the next payment date and time. The buyer can continue to use the plan until that date and time.
             */
            effectiveAt: string;
        };
        /**
         * Coupon applied to the order.
         *
         * To learn more about coupons, see [applyCoupon()](wix-pricing-plans-backend/checkout/applycoupon).
         */
        type Coupon = {
            /**
             * Code of the applied coupon.
             */
            code: string;
            /**
             * Total discount of the coupon, as a monetary amount.
             */
            amount: string;
            /**
             * Coupon ID.
             */
            id: string;
        };
        /**
         * Current payment cycle for the order.
         *
         * `currentCycle` will be omitted if the order's `status` is `CANCELED` or `ENDED`, or if the `startDate` hasn't been reached yet.
         */
        type CurrentCycle = {
            /**
             * Index of the current payment cycle in the order.
             *
             * `0` when the order is in a free trial period. In all other cases, the index starts with `1`.
             */
            index: number;
            /**
             * Start date and time for the current payment cycle.
             */
            startedDate: Date;
            /**
             * End date and time for the current payment cycle.
             */
            endedDate: Date;
        };
        /**
         * Fields to filter by when listing orders for the current member.
         */
        type CurrentMemberFilterOptions = {
            /**
             * Specific IDs of plans that were ordered by the current member.
             */
            planIds?: string[];
            /**
             * Whether the auto-renewal of the current member's recurring orders was canceled.
             */
            autoRenewCanceled?: boolean;
            /**
             * Specific statuses for the current member's orders.
             *  + `"DRAFT"`. The order has been initiated but payment has not been processed yet. The plan is not yet available for use.
             *  + `"PENDING"`. Payment is being processed.  The plan is not yet available for use.
             *  + `"ACTIVE"`. The order has been processed and paid for.  The plan is available for use.
             *  + `"PAUSED"`. Use of the plan has been [paused](wix-pricing-plans-backend/orders/pauseorder), for example, if the buyer is away. The plan can be [resumed](wix-pricing-plans-backend/orders/resumeorder).
             *  + `"ENDED"`. The order has completed its duration and is no longer available for use.
             *  + `"CANCELED"`. The order has been [canceled](wix-pricing-plans-backend/orders/cancelorder).
             */
            orderStatuses?: string[];
            /**
             * Specific payment statuses for the current member's orders.
             *  + `"PAID"`. The last payment was paid.
             *  + `"REFUNDED"`. The last payment was refunded.
             *  + `"FAILED"`. The last payment transaction did not complete.
             *  + `"UNPAID"`. The last payment was not paid.
             *  + `"PENDING"`. Awaiting payment.
             *  + `"NOT_APPLICABLE"`. No payment was necessary, such as for free plans or free trials.
             */
            paymentStatuses?: string[];
        };
        /**
         * Length of one payment cycle. For example, `1` `MONTH` for monthly payments.
         */
        type Duration = {
            /**
             * The amount of a duration `unit` in a single payment cycle.
             *
             * Currently limited to support only value of `1`.
             */
            count: number;
            /**
             * Unit of time for the cycle duration.
             *
             * Supported values: `"UNDEFINED"`, `"DAY"`, `"WEEK"`, `"MONTH"`, `"YEAR"`
             */
            unit: string;
        };
        type Order = {
            /**
             * Order ID.
             */
            _id: string;
            /**
             * ID of the plan that was ordered.
             */
            planId: string;
            /**
             * ID of the related Wix subscription.
             *
             * Every pricing plan order corresponds to a Wix subscription, including orders for single payment plans. You can see all orders from your site's [Subscriptions](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsubscriptions%3FreferralInfo%3Dvelo-docs) page in the Dashboard.
             */
            subscriptionId: string;
            /**
             * ID of the associated Wix Pay order.
             *
             * Created by the [`createOnlineOrder()`](wix-pricing-plans-backend/checkout/createonlineorder) or [`createfflineOrder()`](wix-pricing-plans-backend/checkout/createofflineorder) function. For online orders, send this value as a parameter to the Wix Pay [`startPayment()`](wix-pay/startPayment) function to enable your buyer to pay for the order. `wixPayOrderId` is omitted if the order is free.
             */
            wixPayOrderId?: string;
            /**
             * The buyer's IDs. Includes `memberId` and `contactId`.
             *
             * Currently, Pricing Plan orders are limited to members only. `contactId` is returned, but a buyer will not be able to order a plan without a `memberId`.
             */
            buyer: Orders.Buyer;
            /**
             * **Deprecated.** Use `pricing` instead.
             */
            priceDetails: Orders.PriceDetails;
            /**
             * Order [pricing model](wix-pricing-plans-backend/introduction#pricing-models), price, and payment schedule.
             */
            pricing?: Orders.Pricing;
            /**
             * How the order was processed.
             * Supported values:
             *  + `"ONLINE"`. The buyer ordered the plan using the site.
             *  + `"OFFLINE"`. The buyer made a manual, offline order without using the site.
             */
            type: string;
            /**
             * Status of the order.
             * Supported values:
             *  + `"DRAFT"`. The order has been initiated but payment hasn't been processed yet. The plan isn't yet available for use.
             *  + `"PENDING"`. The order has been processed and its start date is set in the future. The plan isn't yet available for use.
             *  + `"ACTIVE"`. The order has been processed. The plan is available for use.
             *  + `"PAUSED"`. The order, and use of the plan, is [paused](wix-pricing-plans-backend/orders/pauseorder). For example, if the buyer is away. The order, and use of the plan, can be [resumed](wix-pricing-plans-backend/orders/resumeorder).
             *  + `"ENDED"`. The order has completed its duration and is no longer available for use.
             *  + `"CANCELED"`. The order has been [canceled](wix-pricing-plans-backend/orders/cancelorder).
             */
            status: string;
            /**
             * Whether the order will be canceled at the next payment date.
             *
             * If `true`, the order `status` will be `CANCELED` and the next payment won't be charged. Omitted for single payment orders.
             */
            autoRenewCanceled?: boolean;
            /**
             * Details about the cancellation of an order. Only present if the `status` is `"CANCELED"`.
             */
            cancellation?: Orders.Cancellation;
            /**
             * Status of the last payment for the order. This is updated automatically for online orders. The site owner updates this manually for offline orders.
             * Supported values:
             *  + `"PAID"`. The last payment was paid.
             *  + `"REFUNDED"`. The last payment was refunded.
             *  + `"FAILED"`. The last payment transaction didn't complete.
             *  + `"UNPAID"`. The last payment wasn't paid.
             *  + `"PENDING"`. Awaiting payment.
             *  + `"NOT_APPLICABLE"`. No payment was necessary. For example, for free plans or free trials.
             */
            lastPaymentStatus: string;
            /**
             * Start date and time for the ordered plan.
             */
            startDate: Date;
            /**
             * Current date and time the ordered plan will expire.
             *
             * `endDate` may be updated over the course of an order. If the order is [paused](wix-pricing-plans-backend/orders/pauseorder), it will have a later `endDate` once it [resumes](wix-pricing-plans-backend/orders/resumeorder). `endDate` may also be [postponed](wix-pricing-plans-backend/orders/postponeenddate).
             *
             * Omitted if the order is valid until canceled and still `"ACTIVE"`.
             */
            endDate?: Date;
            /**
             * List of periods during which this order is paused.
             */
            pausePeriods: Orders.PausePeriod[];
            /**
             * Free trial period, in days. Only available for recurring plans.
             */
            freeTrialDays?: string;
            /**
             * Earliest end date and time that the plan for this order can expire.
             *
             * This is calculated by adding all pause periods to the original end date. Omitted if the order is active until canceled. Reserved for future use.
             */
            earliestEndDate?: Date;
            /**
             * Current payment cycle for the order.
             *
             * `currentCycle` will be omitted if the order's status is `CANCELED` or `ENDED`, or if the `startDate` hasn't passed yet.
             */
            currentCycle: Orders.CurrentCycle;
            /**
             * Name of the plan at the time of the order.
             */
            planName: string;
            /**
             * Description of the plan at the time of the order.
             */
            planDescription: string;
            /**
             * Plan price as it was at the moment of order creation.
             */
            planPrice: string;
            /**
             * Date and time the order was created.
             */
            _createdDate: Date;
            /**
             * Date and time the order was last updated. For example, the date and time an order was paused, resumed, or canceled.
             */
            _updatedDate: Date;
        };
        /**
         * The order has recurring payments.
         */
        type OrderRecurrence = {
            /**
             * Length of one payment cycle. For example, `1` `MONTH` for monthly payments.
             */
            cycleDuration: Orders.Duration;
            /**
             * Amount of payment cycles this subscription is valid for.
             *
             * `0` for orders of plans that are unlimited or until-canceled.
             */
            cycleCount: number;
        };
        type PaginationOptions = {
            /**
             * Limit the number of orders returned.
             *
             * Default: `50`
             */
            limit?: number;
            /**
             * Number of entries to skip.
             */
            skip?: number;
        };
        /**
         * Period during which the order of a plan is suspended.
         */
        type PausePeriod = {
            /**
             * Status of the pause period.
             * Supported values:
             *  + `"ACTIVE"`. Status while the order is [paused](wix-pricing-plans-backend/orders/pauseorder).
             *  + `"ENDED"`. Status while the order is [resumed](wix-pricing-plans-backend/orders/resumeorder).
             */
            status: string;
            /**
             * Start date and time of the pause period.
             */
            pauseDate: Date;
            /**
             * End date and time of the pause period.
             *
             * Omitted while the pause period remains `"ACTIVE"`.
             */
            resumeDate: Date;
        };
        /**
         * Order price details.
         */
        type Price = {
            /**
             * Price of the order excluding tax, specified as a monetary amount. For example, `"9.99"`.
             */
            subtotal: string;
            /**
             * Coupon applied to the order.
             *
             * To learn more about coupons, see [applyCoupon()](wix-pricing-plans-backend/checkout/applycoupon).
             */
            coupon: Orders.Coupon;
            /**
             * Total discount applied to the order.
             */
            discount: string;
            /**
             * Tax applied to the order.
             */
            tax?: Orders.Tax;
            /**
             * Price after tax and discount is applied, specified as a monetary amount. For example, `"13.98"`.
             *
             * If no tax is applied, this amount is the same as `subtotal`.
             */
            total: string;
            /**
             * Three-letter currency code in [ISO 4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
             */
            currency: string;
        };
        /**
         * **Deprecated.** Use `pricing` instead.
         */
        type PriceDetails = {
            /**
             * Price of the order, excluding tax. Specified as a monetary amount, such as `"3.99"`.
             */
            subtotal: string;
            /**
             * Tax applied for the plan. Omitted if no tax was applied.
             */
            tax?: Orders.Tax;
            /**
             * Price after tax is applied. Specified as a monetary amount, such as `"4.98"`. If no tax was applied, this amount is the same as `subtotal`.
             */
            total: string;
            /**
             * Price of the plan when the order was created. This price is the amount for a single payment. For subscriptions, this is the amount to pay for each single payment cycle and the `planPrice` is required. Otherwise, the payment is for the entire plan.
             */
            planPrice: string;
            /**
             * Currency code. Must be a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code (for example, `"USD"`).
             */
            currency: string;
            /**
             * Pricing model indicating that the order has recurring payments. This type of subscription isn't a "Wix subscription," which encompasses various types of subscriptions, such as Wix Stores subscriptions, Wix invoice subscriptions, and *all* pricing plan models.
             */
            subscription?: Orders.OrderRecurrence;
            /**
             * Pricing model indicating that the order is paid with a single payment per cycle and what the length of the cycle is. The cycle is the duration of the order's plan, not a payment cycle.
             */
            singlePaymentForDuration?: Orders.Duration;
            /**
             * Pricing model indicating that the order of the plan is paid in one single payment and that the order is active until canceled.
             */
            singlePaymentUnlimited?: boolean;
            /**
             * Free trial period for the order in days. Available only for orders whose plans are recurring, meaning plans whose pricing model is `subscription`.
             */
            freeTrialDays?: number;
        };
        /**
         * Cycle duration to apply `price` for.
         */
        type PriceDuration = {
            /**
             * Price starts to apply with this cycle.
             *
             * `1` is the first payment cycle for all pricing models.
             */
            cycleFrom: number;
            /**
             * Amount of cycles to apply price for.
             *
             * For `subscription` pricing models with a finite number of cycles, the `numberOfCycles` is the same as `pricing.subscription.cycleCount`.
             *
             * For `subscription` pricing models that are unlimited or until-canceled, the `numberOfCycles` is not returned.
             *
             * For `singlePaymentForDuration` and `singlePaymentUnlimited` pricing models, the `numberOfCycles` is `1`.
             */
            numberOfCycles: number;
        };
        /**
         * Pricing details for all pricing models.
         */
        type Prices = {
            /**
             * Cycle duration to apply `price` for.
             *
             * Use with all pricing models. Can apply the same price to multiple payment cycles.
             */
            duration: Orders.PriceDuration;
            /**
             * Order price.
             */
            price: Orders.Price;
        };
        /**
         * Order pricing model, price, and payment schedule.
         */
        type Pricing = {
            /**
             * Pricing model for an order with recurring payment cycles.
             */
            subscription?: Orders.OrderRecurrence;
            /**
             * Pricing model for an order with a one-time payment and the order is valid for a specific amount of time.
             */
            singlePaymentForDuration?: Orders.Duration;
            /**
             * Pricing model for an order with a one-time payment and the order is valid until canceled.
             */
            singlePaymentUnlimited?: boolean;
            /**
             * Pricing details for all pricing models.
             */
            prices: Orders.Prices;
        };
        /**
         * Sorting details.
         */
        type SortingOptions = {
            /**
             * Name of the property to sort by.
             *
             * Supported values: `_createdDate`, `endDate`
             *
             * Default: `_createdDate`
             */
            fieldName?: string;
            /**
             * Sort order.
             *
             * Supported values:
             * + `"ASC"`: Ascending
             * + `"DESC"`: Descending
             *
             * Default: `"ASC"`
             */
            order?: string;
        };
        /**
         * Tax applied to the order. If empty, no tax was applied.
         */
        type Tax = {
            /**
             * Name of the tax. For example, VAT.
             */
            name: string;
            /**
             * Whether tax is included in the original price. When `false`, tax is added at checkout.
             */
            includedInPrice: boolean;
            /**
             * Tax rate percentage, as a number between 0 and 100. For example, a 7% tax rate is `"7.00"`.
             */
            rate: string;
            /**
             * Total tax, specified as a monetary amount. For example, `"3.99"`.
             */
            amount: string;
        };
    }
}
