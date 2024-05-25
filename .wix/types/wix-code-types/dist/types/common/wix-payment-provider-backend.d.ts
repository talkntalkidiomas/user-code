/**
 * The wix-payment-provider-backend module contains functionality for reporting transaction and refund events processed by third-party payment providers.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-payment-provider-backend.html#)
 */
declare module 'wix-payment-provider-backend' {
    /**
     * Updates the status of a transaction or refund.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-payment-provider-backend.html#submitEvent)
     */
    function submitEvent(submitEventRequest: SubmitEventRequest): Promise<void>;
    type Event = {
        /**
         * Updated details of a transaction.
         */
        transaction?: TransactionDetails;
        /**
         * Updated details of a refund.
         */
        refund?: RefundDetails;
    };
    type RefundDetails = {
        /**
         * Wix transaction ID.
         */
        wixTransactionId?: string;
        /**
         * Payment provider refund ID.
         */
        pluginRefundId?: string;
        /**
         * Wix [reason code](/payment-provider-spi/reason-codes).
         */
        reasonCode?: number;
        /**
         * Refunded amount.
         */
        amount?: string;
        /**
         * Wix refund ID for refunds created through a site's dashboard.
         */
        wixRefundId?: string;
        /**
         * Payment provider error code.
         */
        errorCode?: string;
        /**
         * Detailed payment provider error description.
         */
        errorMessage?: string;
    };
    type SubmitEventRequest = {
        /**
         * The updated information about the transaction or refund.
         */
        event: Event;
    };
    /**
     * Transaction event type.
     */
    type TransactionDetails = {
        /**
         * Wix transaction ID.
         */
        wixTransactionId?: string;
        /**
         * Payment Provider transaction ID.
         */
        pluginTransactionId?: string;
        /**
         * Wix [reason code](/payment-provider-spi/reason-codes).
         */
        reasonCode?: number;
        /**
         * Payment provider error code.
         */
        errorCode?: string;
        /**
         * Detailed payment provider error description.
         */
        errorMessage?: string;
    };
}
