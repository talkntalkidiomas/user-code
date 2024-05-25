/**
 * **Deprecated.**
 *  The wix-paid-plans-backend module will continue to work, but a newer version is available at [wix-pricing-plans-backend](https://www.wix.com/velo/reference/wix-pricing-plans-backend).
 * 	[Read more](https://www.wix.com/corvid/reference/wix-paid-plans-backend.html#)
 */
declare module 'wix-paid-plans-backend' {
    /**
     * **Deprecated.**
     *  The Wix paid plan events will continue to work, but a newer version is available at [wix-pricing-plans-backend](https://www.wix.com/velo/reference/wix-pricing-plans-backend/events).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-paid-plans-backend.Events.html#)
     */
    interface Events {
        /**
         * **Deprecated.**
         *  This event will continue to work, but a newer version is available at [`wix-pricing-plans-backend.events.onPlanPurchased()`](wix-pricing-plans-backend/events/onplanpurchased).
         * 	[Read more](https://www.wix.com/corvid/reference/wix-paid-plans-backend.Events.html#onPlanPurchased)
         */
        onPlanPurchased(event: Events.PlanPurchasedEvent): void;
    }
    /**
     * **Deprecated.**
     *  The Wix paid plan events will continue to work, but a newer version is available at [wix-pricing-plans-backend](https://www.wix.com/velo/reference/wix-pricing-plans-backend/events).
     * 	[Read more](https://www.wix.com/corvid/reference/wix-paid-plans-backend.Events.html#)
     */
    namespace Events {
        /**
         * An object representing a new pricing plan order (subscription).
         */
        type Order = {
            /**
             * Order ID of the purchase of the plan, auto-generated when an order is created.
             */
            id: string;
            /**
             * Status of the payment for the plan. Can be `PAID`, `REFUNDED`, `FAILED`, `UNPAID`, and `PAYMENT_STATUS_UNDEFINED`.
             */
            paymentStatus: string;
            /**
             * Date and time until which the plan is valid.
             */
            validUntil: Date;
            /**
             * Object containing the price of the plan.
             */
            price: Events.Price;
            /**
             * If the plan is cancelled, the reason why. One of:
             *
             *  + `OWNER_CANCELED`: The owner cancelled.
             *  + `PAYMENT_PROVIDER_CANCELED`: The payment provider cancelled.
             *  + `PAYMENT_FAILED`: The payment failed.
             *  + `UOU_CANCELED`: The site member cancelled.
             *  + `CANCELLATION_REASON_UNDEFINED`: The reason is undefined.
             */
            cancellationReason: string;
            /**
             * If the plan is cancelled, the cause of the cancellation. One of:
             *
             *  + `"UNDEFINED"`: Cancellation initiator undefined.
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
             * How the plan was purchased, either `ONLINE` pr `OFFLINE`.
             */
            orderType: string;
            /**
             * ID of the plan.
             */
            planId: string;
            /**
             * Object containing properties about how long the plan is valid.
             */
            validFor: Events.ValidFor;
            /**
             * How many trial days were given to the subscriber of the plan. Available only for orders whose plans are recurring, meaning plans whose pricing model is `subscription`.
             */
            freeTrialDays?: number;
            /**
             * Role assigned after purchasing the plan.
             */
            roleId: string;
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
         * An object representing a new pricing plan purchase.
         */
        type PlanPurchasedEvent = {
            /**
             * Object containing the details about the plan's order.
             */
            order: Events.Order;
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
            period: Events.Period;
        };
    }
}
