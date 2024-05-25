/**
 * The wix-pay-frontend module contains functionality for working with
 *  payments from client-side code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.html#)
 */
declare module 'wix-pay-frontend' {
    /**
     * Contains functionality for displaying prices in your store in different currencies, getting exchange rates, and converting between currencies.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.html#currencies)
     */
    const currencies: Currencies;
    /**
     * Starts a payment.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.html#startPayment)
     */
    function startPayment(paymentId: string, options?: PaymentOptions): Promise<PaymentResult>;
    /**
     * An object representing a payment.
     */
    type Payment = {
        /**
         * Payment transaction ID.
         */
        id: string;
        /**
         * Payment total amount.
         */
        amount: number;
        /**
         * Payment currency. A three-letter
         *  [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
         */
        currency: string;
        /**
         * Payment items.
         */
        items: PaymentItem[];
    };
    /**
     * An object representing a payment item.
     */
    type PaymentItem = {
        /**
         * Payment item name.
         */
        name: string;
        /**
         * Payment item price.
         */
        price: number;
        /**
         * Payment item quantity.
         */
        quantity: number;
    };
    /**
     * An object representing the options of a payment.
     */
    type PaymentOptions = {
        /**
         * Absolute URL of a terms and conditions
         *  page. If a link is present, an agreement checkbox will be presented alongside the link.
         */
        termsAndConditionsLink?: string;
        /**
         * Whether to show your site's [Thank You page](https://www.wix.com/velo/reference/$w/thankyoupage). Does not apply to Thank You pages for in-app browsers. Defaults to `true`.
         */
        showThankYouPage?: boolean;
        /**
         * Whether to skip the user info page. Defaults to `false`.
         *  The page will be skipped only if user info was passed to [`createPayment()`](wix-pay-backend.html#createPayment) as
         *  a part of the `PaymentInfo` object.
         */
        skipUserInfoPage?: boolean;
        /**
         * An object representing information about the user. It will be used to prefill
         *  user info form during payment process.
         *
         *  Deprecation note: Pass user information to [`createPayment( )`](wix-pay-backend.html#createPayment) instead.
         */
        userInfo?: PaymentUserInfo;
    };
    /**
     * An object representing a payment result.
     */
    type PaymentResult = {
        /**
         * The payment.
         */
        payment: Payment;
        /**
         * Payment status. One of:
         *
         *  + "`Successful`": Payment was successfully received.
         *  + "`Pending`": Payment is pending payment provider approval.
         *  + "`Failed`": Payment has failed.
         *  + "`Chargeback`": Payment is chargeback.
         *  + "`Refunded`": Payment was fully refunded.
         *  + "`Offline`": Payment will be executed offline.
         *  + "`PartiallyRefunded`": Payment was partially refunded.
         *  + "`Cancelled`": Payment was cancelled and was not processed.
         *  + "`Undefined`": Payment status is pending payment provider input.
         */
        status: string;
        /**
         * ID of the payment transaction.
         */
        transactionId: string;
        /**
         * An object representing information about the user.
         */
        userInfo: PaymentUserInfo;
    };
    /**
     * An object representing information about the user.
     */
    type PaymentUserInfo = {
        /**
         * User's first name. Value is `null` if
         *  there is no first name information.
         */
        firstName: string;
        /**
         * User's last name. Value is `null` if
         *  there is no last name information.
         */
        lastName: string;
        /**
         * User's country code. A three-letter
         *  [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) country code. Value
         *  is `null` if there is no country information.
         */
        country: string;
        /**
         * User's phone number. Value is `null` if
         *  there is no phone number information.
         */
        phone: string;
        /**
         * User's email address. Value is `null` if
         *  there is no email address information.
         */
        email: string;
    };
    /**
     * The Currencies API contains functionality for displaying prices in your store in different currencies, getting exchange rates, and converting between currencies.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.Currencies.html#)
     */
    interface Currencies {
        /**
         * Gets conversion rates and converts amounts.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.Currencies.html#currencyConverter)
         */
        readonly currencyConverter: Currencies.CurrencyConverter;
        /**
         * Gets currencies that you set for your site.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.Currencies.html#siteSettings)
         */
        readonly siteSettings: Currencies.SiteSettings;
        /**
         * Gets the list of all currencies for which Wix supports conversion.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.Currencies.html#getAllCurrencies)
         */
        getAllCurrencies(): Promise<Currencies.Currency[]>;
    }
    /**
     * The Currencies API contains functionality for displaying prices in your store in different currencies, getting exchange rates, and converting between currencies.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.Currencies.html#)
     */
    namespace Currencies {
        /**
         * An object representing a currency.
         */
        type Currency = {
            /**
             * A 3-letter
             *  [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
             */
            code: string;
            /**
             * A currency symbol.
             */
            symbol: string;
        };
        /**
         * An object for retrieving conversion rates and converting amounts.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.Currencies.CurrencyConverter.html#)
         */
        interface CurrencyConverter {
            /**
             * Converts an array of amounts from one currency to another.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.Currencies.CurrencyConverter.html#convertAmounts)
             */
            convertAmounts(options: CurrencyConverter.ConvertAmountsOptions): Promise<CurrencyConverter.ConvertedAmounts>;
            /**
             * Gets a currency conversion rate.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.Currencies.CurrencyConverter.html#getConversionRate)
             */
            getConversionRate(sourceCurrency: string, targetCurrency: string): Promise<CurrencyConverter.ConversionRate>;
        }
        /**
         * Site-related currency settings.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.Currencies.SiteSettings.html#)
         */
        interface SiteSettings {
            /**
             * Gets the list of supported currencies that you set for your site.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.Currencies.SiteSettings.html#getCurrencies)
             */
            getCurrencies(): Promise<SiteSettings.CurrencyCode[]>;
        }
        /**
         * An object for retrieving conversion rates and converting amounts.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.Currencies.CurrencyConverter.html#)
         */
        namespace CurrencyConverter {
            /**
             * An object representing a currency conversion rate.
             */
            type ConversionRate = {
                /**
                 * The conversion rate between the source and target currencies.
                 */
                rate: number;
                /**
                 * The date and time when the rate was set.
                 */
                timestamp: Date;
            };
            /**
             * An object representing the currencies and amounts to be converted.
             */
            type ConvertAmountsOptions = {
                /**
                 * Amounts to convert.
                 */
                amounts: number[];
                /**
                 * Currency to convert from.  The `from` currency code used must exist in the array returned by the [`getAllCurrencies()`](wix-pay-frontend.Currencies.html#getAllCurrencies) function.
                 */
                from: string;
                /**
                 * Currency to convert to. The `to` currency code used must exist in the array returned by the [`getAllCurrencies()`](wix-pay-frontend.Currencies.html#getAllCurrencies) function.
                 * > **Note:**
                 * The `from` and `to` currency codes used must exist in the array returned by the
                 * [`getAllCurrencies()`](wix-pay-frontend.Currencies.html#getAllCurrencies) function.
                 */
                to: string;
            };
            /**
             * An object representing the results of a currency conversion.
             */
            type ConvertedAmounts = {
                /**
                 * Array of converted amounts.
                 */
                amounts: number[];
                /**
                 * The date and time when the currency exchange rate was set.
                 */
                timestamp: Date;
            };
        }
        /**
         * Site-related currency settings.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-frontend.Currencies.SiteSettings.html#)
         */
        namespace SiteSettings {
            /**
             * An object representing an ISO currency code.
             */
            type CurrencyCode = {
                /**
                 * A 3-letter
                 *  [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
                 */
                code: string;
            };
        }
    }
}
