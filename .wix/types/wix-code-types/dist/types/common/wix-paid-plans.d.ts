/**
 * **Deprecated.**
 *  The wix-paid-plans module will continue to work, but a newer version is available at [wix-pricing-plans](https://www.wix.com/velo/reference/wix-pricing-plans).
 * 	[Read more](https://www.wix.com/corvid/reference/wix-paid-plans.html#)
 */
declare module 'wix-paid-plans' {
    /**
     * **Deprecated.**
     *  This function will continue to work, but a newer version is available at [`wix-pricing-plans.orders.requestCurrentMemberOrderCancellation()`](https://www.wix.com/velo/reference/wix-pricing-plans/orders/requestcurrentmemberordercancellation) and [`wix-pricing-plans-backend.orders.cancelOrder()`](wix-pricing-plans-backend/orders/cancelorder).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-paid-plans.html#cancelOrder)
     */
    function cancelOrder(orderId: string): Promise<void>;
    /**
     * **Deprecated.**
     *  This function will continue to work, but a newer version is available at [`wix-pricing-plans.orders.listCurrentMemberOrders()`](https://www.wix.com/velo/reference/wix-pricing-plans/orders/listcurrentmemberorders).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-paid-plans.html#getCurrentMemberOrders)
     */
    function getCurrentMemberOrders(limit?: number, offset?: number): Promise<Order[]>;
    /**
     * **Deprecated**.
     *  This function will continue to work, but newer versions are available
     *  at [`wix-pricing-plans.checkout.createOnlineOrder()`](https://www.wix.com/velo/reference/wix-pricing-plans/checkout/createonlineorder)
     *  and
     *  at [`wix-pricing-plans-backend.checkout.createOfflineOrder()`](https://www.wix.com/velo/reference/wix-pricing-plans-backend/checkout/createofflineorder).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-paid-plans.html#orderPlan)
     */
    function orderPlan(planId: string): Promise<OrderResult>;
    /**
     * **Deprecated.**
     *  This function will continue to work, but a newer version is available
     *  at [`wix-pricing-plans.startOnlinePurchase()`](https://www.wix.com/velo/reference/wix-pricing-plans/checkout/startonlinepurchase).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-paid-plans.html#purchasePlan)
     */
    function purchasePlan(planId: string): Promise<PurchaseResult>;
    /**
     * An object representing a pricing plan order (subscription).
     */
    type Order = {
        /**
         * Order ID of the purchase of the plan, auto-generated when an order is created.
         */
        id: string;
        /**
         * Status of the payment for the plan. Can be `PAID`, `FAILED`, `UNPAID`, and `PAYMENT_STATUS_UNDEFINED`.
         */
        paymentStatus: string;
        /**
         * Date and time until which the plan is valid.
         */
        validUntil: Date;
        /**
         * Object containing the price of the plan.
         */
        price: Price;
        /**
         * If the plan is cancelled, the cause of the cancellation. One of:
         *
         *  + `"UNDEFINED"`: Cancellation initiator unknown.
         *  + `"OWNER"`: Order (subscription) was canceled by site owner.
         *  + `"MEMBER"`: Order (subscription) was canceled by member.
         *  + `"PAYMENT_FAILURE"`: Subscription was canceled because of payment failure.
         *  + `"SETUP_FAILURE"`: Subscription was canceled because of payment setup failure.
         */
        cancellationInitiator: string;
        /**
         * Date and time from which the plan is valid.
         */
        validFrom: Date;
        /**
         * Name of the plan.
         */
        planName: string;
        /**
         * ID of the plan for Wix Pay. If plan is free, this ID is blank.
         */
        wixPayOrderId: string;
        /**
         * If the plan is recurring. If true, the price is deducted weekly, monthly, or yearly.
         */
        recurring: boolean;
        /**
         * Date and time the order was created.
         */
        dateCreated: Date;
        /**
         * Status of the order. Can be `ACTIVE`, `PENDING`, `CANCELED`, `EXPIRED`, `PENDING_CANCELLATION`, and `ORDER_STATUS_UNDEFINED`.
         */
        status: string;
        /**
         * Description of the plan.
         */
        planDescription: string;
        /**
         * ID for the member who purchased the plan.
         */
        memberId: string;
        /**
         * How the plan was purchased, either `ONLINE` or `OFFLINE`.
         */
        orderType: string;
        /**
         * ID of the plan.
         */
        planId: string;
        /**
         * Object containing properties about how long the plan is valid.
         */
        validFor: ValidFor;
        /**
         * How many trial days were given to the subscriber of the plan.  Available only for orders whose plans are recurring, meaning plans whose pricing model is `subscription`.
         */
        freeTrialDays?: number;
        /**
         * Role assigned after purchasing the plan.
         */
        roleId: string;
    };
    /**
     * An object representing an order result.
     */
    type OrderResult = {
        /**
         * ID of the order.
         */
        orderId: string;
        /**
         * Wix Pay ID of the order being purchased.
         */
        wixPayOrderId: string;
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
         * Time period for billing the plan, such as `MONTH`.
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
     * An object representing a purchase result for a non-free plan.
     */
    type PurchaseResult = {
        /**
         * ID of the order being purchased.
         */
        orderId: string;
        /**
         * Payment status in Wix Pay. One of:
         *
         *  + "`Successful`": Payment was successfully received.
         *  + "`Pending`": Payment is pending payment provider approval.
         *  + "`Failed`": Payment has failed.
         *  + "`Chargeback`": Payment is a chargeback.
         *  + "`Refunded`": Payment was fully refunded.
         *  + "`Offline`": Payment will be executed offline.
         *  + "`PartiallyRefunded`": Payment was partially refunded.
         *  + "`Cancelled`": Payment was cancelled and was not processed.
         *  + "`Undefined`": Payment status is pending payment provider input.
         */
        wixPayStatus: string;
        /**
         * Wix Pay ID of the order being purchased. Returned for non-free plans.
         */
        wixPayOrderId: string;
    };
    /**
     * An object representing a purchase result for a free plan.
     */
    type PurchaseResultFree = {
        /**
         * ID of the order being purchased.
         */
        orderId: string;
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
        period: Period;
    };
}
