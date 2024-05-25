/**
 * The wix-pay-backend module contains functionality for working with
 *  payments from backend code.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.html#)
 */
declare module 'wix-pay-backend' {
    /**
     * Contains functionality for displaying prices in your store in different currencies, getting exchange rates, and converting between currencies.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.html#currencies)
     */
    const currencies: Currencies;
    /**
     * Creates a new payment.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.html#createPayment)
     */
    function createPayment(paymentInfo: PaymentInfo): Promise<Payment>;
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
        /**
         * An object representing information about the user.
         */
        userInfo: PaymentUserInfo;
    };
    /**
     * An object representing information for creating a payment.
     */
    type PaymentInfo = {
        /**
         * Total payment amount. Must equal
         *  the sum of the `price` properties in the `items` list while taking the
         *  `quantity` into account.
         */
        amount: number;
        /**
         * Payment currency. A three-letter
         *  [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code. Defaults to
         *  the currency defined by the site's [Regional Settings](https://support.wix.com/en/article/changing-your-sites-regional-settings).
         */
        currency?: string;
        /**
         * List of payment items.
         */
        items: PaymentItem[];
        /**
         * An object representing information about the user. It will be used to prefill
         *  the user info form during the payment process.
         */
        userInfo?: PaymentUserInfo;
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
        quantity?: number;
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
         * User's phone number. Value is `null` if
         *  there is no phone number information.
         */
        phone: string;
        /**
         * User's email address. Value is `null` if
         *  there is no email address information.
         */
        email: string;
        /**
         * User's country code. A three-letter
         *  [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) country code. Value
         *  is `null` if there is no country information.
         */
        countryCode: string;
    };
    /**
     * The Currencies API contains functionality for displaying prices in your store in different currencies, getting exchange rates, and converting between currencies.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.html#)
     */
    interface Currencies {
        /**
         * Gets conversion rates and converts amounts.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.html#currencyConverter)
         */
        readonly currencyConverter: Currencies.CurrencyConverter;
        /**
         * Gets and sets currencies that you want to support on your site.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.html#siteSettings)
         */
        readonly siteSettings: Currencies.SiteSettings;
        /**
         * Gets the list of all currencies for which Wix supports conversion.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.html#getAllCurrencies)
         */
        getAllCurrencies(): Promise<Currencies.Currency[]>;
    }
    /**
     * Events fired by payments created using the Pay API.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Events.html#)
     */
    interface Events {
        /**
         * An event that fires when a payment's transaction status is changed.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Events.html#onPaymentUpdate)
         */
        onPaymentUpdate(event: Events.PaymentUpdateEvent): void;
    }
    /**
     * The Currencies API contains functionality for displaying prices in your store in different currencies, getting exchange rates, and converting between currencies.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.html#)
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
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.CurrencyConverter.html#)
         */
        interface CurrencyConverter {
            /**
             * Converts an array of one or more amounts from one currency to another.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.CurrencyConverter.html#convertAmounts)
             */
            convertAmounts(options: CurrencyConverter.ConvertAmountsOptions): Promise<CurrencyConverter.ConvertedAmounts>;
            /**
             * Gets a currency conversion rate.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.CurrencyConverter.html#getConversionRate)
             */
            getConversionRate(sourceCurrency: string, targetCurrency: string): Promise<CurrencyConverter.ConversionRate>;
        }
        /**
         * Site-related currency settings.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.SiteSettings.html#)
         */
        interface SiteSettings {
            /**
             * Gets the list of supported currencies that you set for your site.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.SiteSettings.html#getCurrencies)
             */
            getCurrencies(): Promise<SiteSettings.CurrencyCode[]>;
            /**
             * Sets the list of currencies that the site will support.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.SiteSettings.html#setCurrencies)
             */
            setCurrencies(options: SiteSettings.CurrencyCode[]): Promise<void>;
        }
        /**
         * An object for retrieving conversion rates and converting amounts.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.CurrencyConverter.html#)
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
                 * Currency to convert from.  The `from` currency code used must exist in the array returned by the [`getAllCurrencies()`](wix-pay-backend.Currencies.html#getAllCurrencies) function.
                 */
                from: string;
                /**
                 * Currency to convert to. The `to` currency code used must exist in the array returned by the [`getAllCurrencies()`](wix-pay-backend.Currencies.html#getAllCurrencies) function.
                 *
                 * > **Note:** The `from` and `to` currency codes used must exist in the array returned by the [`getAllCurrencies()`](wix-pay-backend.Currencies.html#getAllCurrencies) function.
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
         * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Currencies.SiteSettings.html#)
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
    /**
     * Events fired by payments created using the Pay API.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-pay-backend.Events.html#)
     */
    namespace Events {
        /**
         * An object representing a payment update.
         */
        type PaymentUpdateEvent = {
            /**
             * The payment's information.
             */
            payment: Payment;
            /**
             * Payment status.
             *  One of:
             *
             *  + `"Successful"`
             *  + `"Pending"`
             *  + `"Failed"`
             *  + `"Chargeback"`
             *  + `"Refunded"`
             *  + `"Offline"`
             *  + `"PartiallyRefunded"`
             *  + `"Cancelled"`
             *  + `"Undefined"`
             */
            status: string;
            /**
             * ID of the payment transaction.
             */
            transactionId: string;
            /**
             * User information.
             */
            userInfo: PaymentUserInfo;
        };
    }
}
