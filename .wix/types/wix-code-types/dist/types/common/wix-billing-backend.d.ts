/**
 * The wix-billing-backend module contains functionality for working with
 *  billing features, such as [price quotes](https://support.wix.com/en/article/wix-price-quotes-creating-and-sending-price-quotes-to-clients) and
 * [invoices](https://support.wix.com/en/article/about-wix-invoices).
 * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.html#)
 */
declare module 'wix-billing-backend' {
    /**
     * The wix-billing-backend module contains functionality for working with
     *  [your site's invoices](https://support.wix.com/en/article/about-wix-invoices)
     *  from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.html#invoices)
     */
    const invoices: Invoices;
    /**
     * The wix-billing-backend module contains functionality for working with
     *  your site's [price quotes](https://support.wix.com/en/article/wix-price-quotes-creating-and-sending-price-quotes-to-clients)
     *  from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.html#priceQuotes)
     */
    const priceQuotes: PriceQuotes;
    /**
     * Events that are fired by actions relating to billing.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Events.html#)
     */
    interface Events {
        /**
         * An event that fires when an invoice is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Events.html#onInvoiceCreated)
         */
        onInvoiceCreated(event: Invoices.Invoice): void;
        /**
         * An event that fires when an invoice is overdue.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Events.html#onInvoiceOverdue)
         */
        onInvoiceOverdue(event: Invoices.Invoice): void;
        /**
         * An event that fires when an invoice is paid.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Events.html#onInvoicePaid)
         */
        onInvoicePaid(event: Invoices.Invoice): void;
        /**
         * An event that fires when an invoice is sent.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Events.html#onInvoiceSent)
         */
        onInvoiceSent(event: Invoices.Invoice): void;
        /**
         * An event that fires when a price quote is accepted.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Events.html#onPriceQuoteAccepted)
         */
        onPriceQuoteAccepted(event: PriceQuotes.PriceQuote): void;
        /**
         * An event that fires when a price quote is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Events.html#onPriceQuoteCreated)
         */
        onPriceQuoteCreated(event: PriceQuotes.PriceQuote): void;
        /**
         * An event that fires when a price quote has expired.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Events.html#onPriceQuoteExpired)
         */
        onPriceQuoteExpired(event: PriceQuotes.PriceQuote): void;
        /**
         * An event that fires when a price quote is sent.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Events.html#onPriceQuoteSent)
         */
        onPriceQuoteSent(event: PriceQuotes.PriceQuote): void;
    }
    /**
     * The wix-billing-backend module contains functionality for working with
     *  [your site's invoices](https://support.wix.com/en/article/about-wix-invoices)
     *  from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Invoices.html#)
     */
    interface Invoices {
        /**
         * Adds a payment to the invoice and reports the payment to the payment provider.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Invoices.html#addPayment)
         */
        addPayment(id: Invoices.IdAndVersion, payment: Invoices.Payment): Promise<Invoices.Response>;
        /**
         * Creates a new invoice.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Invoices.html#createInvoice)
         */
        createInvoice(invoiceFields: Invoices.InvoiceFields): Promise<Invoices.Response>;
        /**
         * Creates a link that can be used by a customer to preview the invoice.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Invoices.html#createInvoicePreviewUrl)
         */
        createInvoicePreviewUrl(id: Invoices.IdAndVersion, options?: Invoices.AuthOptions): Promise<string>;
        /**
         * Deletes an invoice by ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Invoices.html#deleteInvoice)
         */
        deleteInvoice(id: string): Promise<void>;
        /**
         * Gets an existing invoice by ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Invoices.html#getInvoice)
         */
        getInvoice(id: string): Promise<Invoices.Invoice>;
        /**
         * Sends an invoice preview link to a customer via email.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Invoices.html#sendInvoice)
         */
        sendInvoice(id: Invoices.IdAndVersion, emailInfo: Invoices.EmailInfo): Promise<void>;
        /**
         * Update an existing invoice.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Invoices.html#updateInvoice)
         */
        updateInvoice(id: Invoices.IdAndVersion, invoiceFields: Invoices.InvoiceFields, fieldMask?: string[]): Promise<Invoices.Response>;
        /**
         * Voids an invoice.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Invoices.html#voidInvoice)
         */
        voidInvoice(id: Invoices.IdAndVersion): Promise<void>;
    }
    /**
     * The wix-billing-backend module contains functionality for working with
     *  your site's [price quotes](https://support.wix.com/en/article/wix-price-quotes-creating-and-sending-price-quotes-to-clients)
     *  from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.PriceQuotes.html#)
     */
    interface PriceQuotes {
        /**
         * Creates a new price quote.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.PriceQuotes.html#createPriceQuote)
         */
        createPriceQuote(priceQuoteInfo: PriceQuotes.PriceQuoteInfo): Promise<PriceQuotes.Response>;
        /**
         * Deletes a price quote by ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.PriceQuotes.html#deletePriceQuote)
         */
        deletePriceQuote(id: string): Promise<void>;
        /**
         * Gets an existing price quote by ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.PriceQuotes.html#getPriceQuote)
         */
        getPriceQuote(id: string): Promise<PriceQuotes.PriceQuote>;
        /**
         * Sends a price quote preview link to a customer via email.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.PriceQuotes.html#sendPriceQuote)
         */
        sendPriceQuote(id: PriceQuotes.IdAndVersion, emailInfo: PriceQuotes.EmailInfo): Promise<void>;
        /**
         * Updates an existing price quote.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.PriceQuotes.html#updatePriceQuote)
         */
        updatePriceQuote(id: PriceQuotes.IdAndVersion, priceQuoteInfo: PriceQuotes.PriceQuoteInfo, fieldMask?: string[]): Promise<PriceQuotes.Response>;
    }
    /**
     * The wix-billing-backend module contains functionality for working with
     *  [your site's invoices](https://support.wix.com/en/article/about-wix-invoices)
     *  from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.Invoices.html#)
     */
    namespace Invoices {
        /**
         * An object that contains address information.
         */
        type Address = {
            /**
             * Address line.
             */
            addressLine?: string;
            /**
             * Secondary address line.
             */
            addressLine2?: string;
            /**
             * Address subdivision.
             */
            subdivision?: string;
            /**
             * Address city.
             */
            city?: string;
            /**
             * Address postal code.
             */
            postalCode?: string;
            /**
             * Address street address.
             */
            streetAddress?: Invoices.StreetAddress;
            /**
             * Address country.
             */
            country?: string;
            /**
             * Address in human readable format.
             */
            formatted?: string;
        };
        type AuthOptions = {
            /**
             * Prevents permission checks from running for the operation. Defaults to `false`.
             */
            suppressAuth: boolean;
        };
        /**
         * An object that contains calculated tax information.
         */
        type CalculatedTax = {
            /**
             * Tax name.
             */
            name: string;
            /**
             * Tax rate.
             */
            rate: number;
            /**
             * Total value of taxable goods.
             */
            taxable: number;
            /**
             * Total amount of tax applied.
             */
            taxed: number;
            /**
             * Tax code.
             */
            code: string;
        };
        /**
         * An object that contains customer information.
         */
        type Customer = {
            /**
             * Contact ID.
             */
            contactId: string;
            /**
             * Email address.
             */
            email: string;
            /**
             * Physical address.
             */
            address?: Invoices.Address;
            /**
             * Physical billing address.
             */
            billingAddress?: Invoices.Address;
            /**
             * Physical shipping address.
             */
            shippingAddress?: Invoices.Address;
            /**
             * Phone number.
             */
            phone?: string;
            /**
             * Company name.
             */
            company?: string;
            /**
             * Company ID. Can be used to store company VAT ID.
             */
            companyId?: string;
            /**
             * Full name.
             */
            fullName?: string;
            /**
             * First name.
             */
            firstName?: string;
            /**
             * Last name.
             */
            lastName?: string;
        };
        /**
         * An object that contains discount information.
         */
        type Discount = {
            /**
             * Discount amount.
             */
            value: number;
            /**
             * Discount type.
             *
             * Either:
             *
             * + `"Fixed"`: A fixed amount is deducted.
             * + `"Percentage"`: A percentage of the total amount is deducted.
             */
            type: string;
        };
        /**
         * An object that contains information used to send an invoice to a customer.
         */
        type EmailInfo = {
            /**
             * Email subject.
             */
            subject: string;
            /**
             * Email body. Limited formatting in the email body can be
             * achieved using standard JavaScript string formatting.
             */
            body: string;
        };
        /**
         * An object that contains ID and version information.
         */
        type IdAndVersion = {
            /**
             * Invoice ID.
             */
            id: string;
            /**
             * Invoice version.
             */
            version: number;
        };
        /**
         * An object that represents an invoice.
         */
        type Invoice = {
            /**
             * ID and version of the invoice.
             */
            id: Invoices.IdAndVersion;
            /**
             * Status of the invoice.
             *  One of:
             *
             *  + `"Draft"`
             *  + `"Sent"`
             *  + `"Processing"`
             *  + `"Paid"`
             *  + `"Overdue"`
             *  + `"Void"`
             *  + `"Deleted"`
             *  + `"PartiallyPaid"`
             *  + `"PartialAndOverdue"`
             */
            status: string;
            /**
             * Number of the invoice, unique within your site.
             */
            number: string;
            /**
             * Title of the invoice.
             */
            title: string;
            /**
             * Currency code.
             */
            currency: string;
            /**
             * Locale information.
             */
            locale: Invoices.Locale;
            /**
             * Customer listed on the invoice.
             */
            customer: Invoices.Customer;
            /**
             * Line items listed on the invoice.
             */
            lineItems: Invoices.LineItem[];
            /**
             * Discount included in the invoice.
             */
            discount: Invoices.Discount;
            /**
             * List of payments already received from the customer.
             */
            payments: Invoices.Payment[];
            /**
             * List of taxes calculated based on the line items.
             */
            taxes: Invoices.CalculatedTax[];
            /**
             * Total values.
             */
            totals: Invoices.TotalPrice;
            /**
             * Invoice dynamic totals.
             */
            dynamicTotals: Invoices.InvoiceDynamicTotals;
            /**
             * Additional metadata included in the invoice.
             */
            metadata: Invoices.MetaData;
            /**
             * Invoice company ID.
             */
            companyId: string;
            /**
             * Whether the invoice was sent to the customer.
             */
            wasSent: boolean;
            /**
             * Dates associated with the invoice.
             */
            dates: Invoices.InvoiceDates;
        };
        /**
         * An object that contains date information for an invoice.
         */
        type InvoiceDates = {
            /**
             * Invoice issue date.
             */
            issueDate: Date;
            /**
             * Invoice due date.
             */
            dueDate: Date;
        };
        /**
         * An object that contains information about invoice totals that change when payments are received.
         */
        type InvoiceDynamicTotals = {
            /**
             * Amount paid.
             */
            paidAmount: number;
            /**
             * Balance amount.
             */
            balance: number;
        };
        /**
         * An object that contains information used when creating or updating an invoice.
         */
        type InvoiceFields = {
            /**
             * Invoice ID, as a UUID.
             */
            id?: string;
            /**
             * Title of the invoice.
             */
            title: string;
            /**
             * Customer listed on the invoice.
             */
            customer: Invoices.Customer;
            /**
             * Currency code.
             */
            currency: string;
            /**
             * Line items listed on the invoice.
             */
            lineItems: Invoices.LineItem[];
            /**
             * Discount included in the invoice.
             */
            discount?: Invoices.Discount;
            /**
             * Invoice payments.
             */
            payments: Invoices.Payment[];
            /**
             * Invoice metadata.
             */
            metadata?: Invoices.MetaData;
            /**
             * Dates associated with the invoice.
             */
            dates: Invoices.InvoiceDates;
            /**
             * Language displayed on the invoice.
             */
            locale?: Invoices.Locale;
        };
        /**
         * An object that contains itemized fee information.
         */
        type ItemizedFee = {
            /**
             * Item fee name.
             */
            name: string;
            /**
             * Item fee price.
             */
            price: number;
        };
        /**
         * An object that contains line item information.
         */
        type LineItem = {
            /**
             * Line item ID.
             */
            id: string;
            /**
             * Line item name.
             */
            name: string;
            /**
             * Line item description.
             */
            description: string;
            /**
             * Line item price.
             */
            price: number;
            /**
             * Line item quantity.
             */
            quantity: number;
            /**
             * Line item taxes.
             */
            taxes?: Invoices.LineItemTax[];
        };
        /**
         * An object that contains tax information for a line item.
         */
        type LineItemTax = {
            /**
             * Line item tax name.
             */
            name: string;
            /**
             * Line item tax rate.
             */
            rate: number;
            /**
             * Line item tax code.
             */
            code: string;
        };
        /**
         * An object that contains locale information.
         */
        type Locale = {
            /**
             * An [IETF language subtag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).
             * Some common language subtags include:
             *
             * + `"en"`: English
             * + `"es"`: Spanish
             * + `"de"`: German
             * + `"ja"`: Japanese
             * + `"fr"`: French
             * + `"it"`: Italian
             */
            language: string;
        };
        /**
         * An object that contains metadata information.
         */
        type MetaData = {
            /**
             * Invoice notes.
             */
            notes?: string;
            /**
             * Legal terms.
             */
            legalTerms?: string;
            /**
             * URL to legal terms.
             */
            sourceUrl?: string;
            /**
             * Source that triggered the action. For example, `"stores"`.
             */
            source?: string;
            /**
             * ID of the trigger source. For example, an order ID.
             */
            sourceRefId?: string;
        };
        /**
         * An object that contains information about an invoice payment.
         */
        type Payment = {
            /**
             * Payment id.
             */
            id: string;
            /**
             * Payment type, describing how the payment was made.
             */
            type: string;
            /**
             * Payment amount.
             */
            amount: number;
            /**
             * Payment date.
             */
            date: Date;
        };
        /**
         * An object that contains response information.
         */
        type Response = {
            /**
             * ID and version information.
             */
            id: Invoices.IdAndVersion;
        };
        /**
         * An object that contains street address information.
         */
        type StreetAddress = {
            /**
             * Street address information.
             */
            value: string;
            /**
             * Street address type. Either `"Number"` or `"Name"`.
             */
            type: string;
        };
        /**
         * An object that contains price totals.
         */
        type TotalPrice = {
            /**
             * Discount amount.
             */
            discountAmount: number;
            /**
             * List of itemized fees.
             */
            fees: Invoices.ItemizedFee[];
            /**
             * Sum of line item tax amounts.
             */
            taxedAmount: number;
            /**
             * Subtotal of the line items without the tax included.
             */
            subtotal: number;
            /**
             * Total price of the itemized fees and taxes.
             */
            total: number;
        };
    }
    /**
     * The wix-billing-backend module contains functionality for working with
     *  your site's [price quotes](https://support.wix.com/en/article/wix-price-quotes-creating-and-sending-price-quotes-to-clients)
     *  from backend code.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-billing-backend.PriceQuotes.html#)
     */
    namespace PriceQuotes {
        /**
         * An object that contains address information.
         */
        type Address = {
            /**
             * Address line.
             */
            addressLine?: string;
            /**
             * Secondary address line.
             */
            addressLine2?: string;
            /**
             * Address subdivision.
             */
            subdivision?: string;
            /**
             * Address city.
             */
            city?: string;
            /**
             * Address postal code.
             */
            postalCode?: string;
            /**
             * Address street address.
             */
            streetAddress?: PriceQuotes.StreetAddress;
            /**
             * Address country.
             */
            country?: string;
            /**
             * Address in human readable format.
             */
            formatted?: string;
        };
        /**
         * An object that contains calculated tax information.
         */
        type CalculatedTax = {
            /**
             * Tax name.
             */
            name: string;
            /**
             * Tax rate.
             */
            rate: number;
            /**
             * Total value of taxable goods.
             */
            taxable: number;
            /**
             * Total amount of tax applied.
             */
            taxed: number;
            /**
             * Tax code.
             */
            code: string;
        };
        /**
         * An object that contains customer information.
         */
        type Customer = {
            /**
             * Contact ID.
             */
            contactId: string;
            /**
             * Email address.
             */
            email: string;
            /**
             * Physical address.
             */
            address?: PriceQuotes.Address;
            /**
             * Physical billing address.
             */
            billingAddress?: PriceQuotes.Address;
            /**
             * Physical shipping address.
             */
            shippingAddress?: PriceQuotes.Address;
            /**
             * Phone number.
             */
            phone?: string;
            /**
             * Company name.
             */
            company?: string;
            /**
             * Company ID. Can be used to store company VAT ID.
             */
            companyId?: string;
            /**
             * Full name.
             */
            fullName?: string;
            /**
             * First name.
             */
            firstName?: string;
            /**
             * Last name.
             */
            lastName?: string;
        };
        /**
         * An object that contains discount information.
         */
        type Discount = {
            /**
             * Discount amount.
             */
            value: number;
            /**
             * Discount type.
             *
             * Either:
             *
             * + `"Fixed"`: A fixed amount is deducted.
             * + `"Percentage"`: A percentage of the total amount is deducted.
             */
            type: string;
        };
        /**
         * An object that contains information used to send a price quote to a customer.
         */
        type EmailInfo = {
            /**
             * Email subject.
             */
            subject: string;
            /**
             * Email body. Limited formatting in the email body can be
             * achieved using standard JavaScript string formatting.
             */
            body: string;
        };
        /**
         * An object that contains ID and version information.
         */
        type IdAndVersion = {
            /**
             * Price quote ID.
             */
            id: string;
            /**
             * Price quote version.
             */
            version: number;
        };
        /**
         * An object that contains itemized fee information.
         */
        type ItemizedFee = {
            /**
             * Item fee name.
             */
            name: string;
            /**
             * Item fee price.
             */
            price: number;
        };
        /**
         * An object that contains line item information.
         */
        type LineItem = {
            /**
             * Line item ID.
             */
            id: string;
            /**
             * Line item name.
             */
            name: string;
            /**
             * Line item description.
             */
            description: string;
            /**
             * Line item price.
             */
            price: number;
            /**
             * Line item quantity.
             */
            quantity: number;
            /**
             * Line item taxes.
             */
            taxes?: PriceQuotes.LineItemTax[];
        };
        /**
         * An object that contains tax information for a line item.
         */
        type LineItemTax = {
            /**
             * Line item tax name.
             */
            name: string;
            /**
             * Line item tax rate.
             */
            rate: number;
            /**
             * Line item tax code.
             */
            code: string;
        };
        /**
         * An object that contains locale information.
         */
        type Locale = {
            /**
             * An IETF language tag.
             * Some common language tags include:
             *
             * + `"en-US"`: English, United States
             * + `"en-GB"`: English, British
             * + `"es-ES"`: Spanish, Spain
             * + `"de-DE"`: German, Germany
             * + `"ja-JP"`: Japanese, Japan
             * + `"fr-CH"`: French, Switzerland
             * + `"it-IT"`: Italian, Italy
             */
            language: string;
        };
        /**
         * An object that contains metadata information.
         */
        type MetaData = {
            /**
             * Price quote notes.
             */
            notes?: string;
            /**
             * Legal terms.
             */
            legalTerms?: string;
            /**
             * URL to legal terms.
             */
            sourceUrl?: string;
            /**
             * Source that triggered the action. For example, `"stores"`.
             */
            source?: string;
            /**
             * ID of the trigger source. For example, an order ID.
             */
            sourceRefId?: string;
        };
        /**
         * An object that contains information about price quote payment terms.
         */
        type PaymentTerms = {
            /**
             * Price quote term type.
             *  One of:
             *
             *  + `"DueOnReceipt"`
             *  + `"NetPlus"`
             *  + `"TimeStamp"`
             *  + `"Other"`
             */
            termType: string;
            /**
             * Term data. When `termType` is `"NetPlus"`,
             *  `termData` contains a positive integer indicating how many days after the charge
             *  payment is due.
             */
            termData?: string;
        };
        /**
         * An object that represents a price quote.
         */
        type PriceQuote = {
            /**
             * ID and version of the price quote.
             */
            id: PriceQuotes.IdAndVersion;
            /**
             * Status of the price quote.
             *  One of:
             *
             *  + `"Draft"`
             *  + `"Sent"`
             *  + `"Processing"`
             *  + `"Accepted"`
             *  + `"Rejected"`
             *  + `"Expired"`
             *  + `"Void"`
             *  + `"Deleted"`
             *  + `"Invoiced"`
             */
            status: string;
            /**
             * Number of the price quote, unique within your site.
             */
            number: string;
            /**
             * Title of the price quote.
             */
            title: string;
            /**
             * Currency code.
             */
            currency: string;
            /**
             * Locale information.
             */
            locale: PriceQuotes.Locale;
            /**
             * Customer listed on the price quote.
             */
            customer: PriceQuotes.Customer;
            /**
             * Line items listed on the price quote.
             */
            lineItems: PriceQuotes.LineItem[];
            /**
             * Discount included in the price quote.
             */
            discount: PriceQuotes.Discount;
            /**
             * Payment terms.
             */
            paymentTerms: PriceQuotes.PaymentTerms;
            /**
             * List of taxes calculated based on the line items.
             */
            taxes: PriceQuotes.CalculatedTax[];
            /**
             * Total values.
             */
            totals: PriceQuotes.TotalPrice;
            /**
             * Additional metadata included in the price quote.
             */
            metadata: PriceQuotes.MetaData;
            /**
             * Price quote company ID.
             */
            companyId: string;
            /**
             * Price quote invoice ID, when converting price quote to invoice.
             */
            invoiceId: string;
            /**
             * Dates associated with the price quote.
             */
            dates: PriceQuotes.PriceQuoteDates;
        };
        /**
         * An object that contains date information for a price quote.
         */
        type PriceQuoteDates = {
            /**
             * Date the price quote was issued.
             */
            issueDate: Date;
            /**
             * Date that the price quote is valid until.
             */
            validThroughDate: Date;
            /**
             * Date the price quote was accepted.
             */
            acceptanceDate?: Date;
            /**
             * Date the price quote was last seen.
             */
            lastSeenDate?: Date;
        };
        /**
         * An object that contains information used when creating or updating a price quote.
         */
        type PriceQuoteInfo = {
            /**
             * Price quote ID, as a UUID.
             */
            id?: string;
            /**
             * Title of the price quote.
             */
            title: string;
            /**
             * Customer listed on the price quote.
             */
            customer: PriceQuotes.Customer;
            /**
             * Currency code.
             */
            currency: string;
            /**
             * Line items listed on the price quote.
             */
            lineItems: PriceQuotes.LineItem[];
            /**
             * Discount included in the price quote.
             */
            discount?: PriceQuotes.Discount;
            /**
             * Payment terms.
             */
            paymentTerms: PriceQuotes.PaymentTerms;
            /**
             * Price quote metadata.
             */
            metadata?: PriceQuotes.MetaData;
            /**
             * Dates associated with the price quote.
             */
            dates: PriceQuotes.PriceQuoteDates;
        };
        /**
         * An object that contains response information.
         */
        type Response = {
            /**
             * ID and version information.
             */
            id: PriceQuotes.IdAndVersion;
        };
        /**
         * An object that contains street address information.
         */
        type StreetAddress = {
            /**
             * Street address information.
             */
            value: string;
            /**
             * Street address type. Either `"Number"` or `"Name"`.
             */
            type: string;
        };
        /**
         * An object that contains price totals.
         */
        type TotalPrice = {
            /**
             * Discount amount.
             */
            discountAmount: number;
            /**
             * List of itemized fees.
             */
            fees: PriceQuotes.ItemizedFee[];
            /**
             * Sum of line item tax amounts.
             */
            taxedAmount: number;
            /**
             * Subtotal of the line items without the tax included.
             */
            subtotal: number;
            /**
             * Total price of the itemized fees and taxes.
             */
            total: number;
        };
    }
}
