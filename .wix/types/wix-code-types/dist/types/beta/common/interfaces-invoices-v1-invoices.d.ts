declare module "interfaces-invoices-v1-invoices" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface CreateInvoiceRequest {
      invoice?: Invoice;
      /** unique key that help avoid duplications. */
      idempotencyKey?: string | null;
  }
  interface Invoice {
      /**
       * Invoice Id
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the invoice is updated.
       * To prevent conflicting changes,
       * the existing `revision` must be used when updating an invoice.
       */
      revision?: string | null;
      /** Invoice document number. */
      documentNumber?: string | null;
      /** The title of the invoice */
      title?: string | null;
      /**
       * Date and time the invoice was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the invoice was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Details about the app that created the invoice. Will be empty in case the invoice was not created by an application. */
      origin?: Origin;
      /** The customer for which this invoice was issued */
      customer?: Customer;
      /** The details of the business which issues the document, as defined in the site properties */
      businessDetails?: BusinessDetails;
      /** The line items on the invoice, containing products or services and their quantities and prices */
      lineItems?: LineItem[];
      /** Labels can be used to tag documents, for example: important, archived etc. */
      labels?: Labels;
      /** Additional invoice custom fields. */
      customFields?: CustomFields;
      /** Discounts applying to the overall invoice */
      discounts?: Discounts;
      /** Invoice installments plan. */
      installments?: Installments;
      /** Invoice recurring policy. */
      recurringPolicy?: RecurringPolicy;
      /** Recurrence metadata */
      recurrence?: Recurrence;
      /** Summaries of totals including tax, discount and fees */
      totals?: Totals;
      /** Attachments to the document */
      attachments?: Attachments;
      /** regional properties pertaining to the template or financial document. The defaults are from the site properties */
      regionalProperties?: RegionalProperties;
      /**
       * Invoice status
       * @readonly
       */
      status?: InvoiceStatus;
      /**
       * Date and time the invoice was last seen.
       * @readonly
       */
      lastSeenDate?: Date;
      /**
       * Date and time the invoice was sent.
       * @readonly
       */
      lastSentDate?: Date;
      /**
       * Date the invoice was issued, formatted as `"YYYY-MM-DD"`
       *
       * Example: `"2021-03-15"` for March 15, 2021.
       * If not provided upon creation, will be set for create time.
       */
      issueDate?: string | null;
      /**
       * Due date the of the invoice, formatted as `"YYYY-MM-DD"`
       * Must be greater or equal to the issueDate parameter.
       * Example: `"2021-03-15"` for March 15, 2021.
       * If not provided upon creation, will be set according to settings policy
       */
      dueDate?: string | null;
      /** Currency code in [ISO-4217 alphabetic](https://www.iso.org/iso-4217-currency-codes.html) format. */
      currency?: string | null;
      /** Template Id, optional identifier of the template associated to this invoice. */
      templateId?: string | null;
      /** Tax definitions used in this invoice */
      taxDefinitions?: TaxDefinitions;
      /** Fee definitions used in this invoice */
      feeDefinitions?: FeeDefinitions;
      /** Line item options */
      lineItemsSettings?: LineItemsSettings;
      /** Totals display options */
      totalsSettings?: TotalsSettings;
      /** Generated documents for this invoice */
      generatedDocuments?: GeneratedDocuments;
      /** Permitted actions for this invoice */
      permittedActions?: Action[];
      /** Payment provider order id */
      paymentOrderId?: string | null;
      /** Invoice layout settings */
      layout?: InvoiceLayout;
  }
  interface Origin {
      /**
       * App ID, if the invoice was created by an app.
       * @readonly
       */
      appId?: string | null;
      /**
       * Indicates if this invoice can be updated via /updateInvoice endpoint
       * Only caller with the same wixAppId as the current invoice can change this value
       * Default is set to 'True'
       */
      allowEditByOthers?: boolean | null;
      /** External reference for this invoice. For example, an order id if the invoice created for some order. */
      externalId?: string | null;
      additionalInfo?: Record<string, string>;
  }
  interface Customer {
      /** Contact Id. */
      contactId?: string;
      /** Contact's email. */
      email?: string | null;
      /**
       * todo: should we have formatted
       * Contact's first name.
       */
      firstName?: string | null;
      /** Contact's last name. */
      lastName?: string | null;
      /** Contact's title. e.g. Mr. Miss, Dr., San etc' */
      title?: string | null;
      /** Contact's phone */
      phone?: string | null;
      /** Government id for personal/corporate (Vat ID) */
      vatId?: string | null;
      /** Contact's company name. */
      companyName?: string | null;
      /** Contact's billing address. */
      billingAddress?: Address;
  }
  /** Physical address */
  interface Address extends AddressStreetOneOf {
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
      /** Country code. */
      country?: string | null;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Zip/postal code. */
      postalCode?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
      addressLine2?: string | null;
      /**
       * A string containing the full address of this location.
       * @internal
       */
      formatted?: string | null;
      /**
       * Coordinates of the physical address.
       * @internal
       */
      location?: AddressLocation;
  }
  /** @oneof */
  interface AddressStreetOneOf {
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
  }
  interface StreetAddress {
      /** Street number. */
      number?: string;
      /** Street name. */
      name?: string;
      /**
       * Apartment number.
       * @internal
       */
      apt?: string;
      /**
       * Optional address line 1
       * @internal
       */
      formattedAddressLine?: string | null;
  }
  interface AddressLocation {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Subdivision {
      /** Short subdivision code. */
      code?: string;
      /** Subdivision full name. */
      name?: string;
      /**
       * Subdivision level
       * @internal
       */
      type?: SubdivisionType;
      /**
       * Free text description of subdivision type.
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType {
      UNKNOWN_SUBDIVISION_TYPE = "UNKNOWN_SUBDIVISION_TYPE",
      /** State */
      ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
      /** County */
      ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
      /** City/town */
      ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3",
      /** Neighborhood/quarter */
      ADMINISTRATIVE_AREA_LEVEL_4 = "ADMINISTRATIVE_AREA_LEVEL_4",
      /** Street/block */
      ADMINISTRATIVE_AREA_LEVEL_5 = "ADMINISTRATIVE_AREA_LEVEL_5",
      /** ADMINISTRATIVE_AREA_LEVEL_0. Indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
      COUNTRY = "COUNTRY"
  }
  interface BusinessDetails {
      /** The business email */
      email?: string | null;
      /** The business phone */
      phone?: string | null;
      /** The business fax */
      fax?: string | null;
      /** The business logo */
      logo?: string;
      /** The business name */
      companyName?: string | null;
      /** The business address */
      address?: Address;
  }
  interface LineItem {
      /** Line item id */
      _id?: string | null;
      /** Line item name */
      name?: string;
      /** Line item description */
      description?: string | null;
      /** Picture of line item */
      picture?: string;
      /** Quantity */
      quantity?: Quantity;
      /** Line item price before taxes */
      price?: string | null;
      /** Line item taxes */
      taxes?: TaxItems;
      /** The source of the line item */
      appId?: string | null;
      /** The line-item level metadata. */
      metadata?: LineItemMetadata;
      /** external reference Id for this line item */
      externalId?: string | null;
      /**
       * Total price of this line items, price * quantity.
       * @readonly
       */
      total?: string | null;
      /** Discounts applying to this line item */
      discounts?: Discounts;
      /** Additional fees for this line item */
      additionalFees?: Fees;
  }
  interface Quantity {
      /** Quantity unit */
      unit?: string | null;
      /**
       * TODO: make decision about range, according to price
       * Quantity amount
       */
      amount?: string | null;
  }
  interface TaxItems {
      /** Tax items */
      items?: TaxItem[];
      /**
       * Total amount of the calculated taxes
       * @readonly
       */
      taxTotalAmount?: string | null;
  }
  interface TaxItem {
      /** Tax code */
      code?: string;
      /** The amount on which tax is calculated. If not provided, the system will calculate it */
      calculatedAmount?: string | null;
  }
  interface LineItemMetadata {
      metadata?: Record<string, string>;
  }
  interface Discounts {
      /** List of discounts. */
      items?: Discount[];
  }
  interface Discount extends DiscountValueOneOf {
      fixedAmount?: string;
      percentage?: string;
      /** Discount name */
      name?: string | null;
  }
  /** @oneof */
  interface DiscountValueOneOf {
      fixedAmount?: string;
      percentage?: string;
  }
  interface Fees {
      /** Fee items */
      items?: Fee[];
  }
  interface Fee {
      /** Fee name */
      code?: string;
      /** Fee amount */
      amount?: string | null;
      /** Taxes on additional fees */
      taxes?: TaxItems;
  }
  interface Labels {
      /** List of labels. */
      items?: string[];
  }
  interface CustomFields {
      /**
       * Invoice's custom fields, where each key is the field key.
       * This includes fields managed by Wix, by third party apps, and by the site.
       */
      fields?: CustomFieldMetadata;
      /**
       * Values that are applied to the custom fields. The path to the field consists of `field_name` or `namespace.field_name`
       * for a non-default namespace.
       */
      values?: Record<string, any> | null;
  }
  interface CustomFieldMetadata {
      fields?: CustomFieldInfo[];
  }
  interface CustomFieldInfo {
      /**
       * Human-readable name.
       * Shown in the Wix UI and on quotes and invoices.
       */
      displayName?: string | null;
      /** Field namespace. Field keys must be unique within a given namespace. */
      namespace?: string | null;
      /** Field placement or logical grouping in the quote or invoice. */
      placement?: CustomFieldPlacement;
      /** Type of data the field holds. */
      fieldType?: CustomFieldType;
      /** Type of data the field holds. */
      sensitivity?: ValueSensitivity;
  }
  enum Location {
      UNKNOWN_CUSTOM_FIELD_PLACEMENT = "UNKNOWN_CUSTOM_FIELD_PLACEMENT",
      BUSINESS_DETAILS = "BUSINESS_DETAILS",
      CUSTOMER_DETAILS = "CUSTOMER_DETAILS",
      DOCUMENT = "DOCUMENT",
      FOOTER = "FOOTER",
      OTHER = "OTHER"
  }
  /** Placement values for the custom field. */
  interface CustomFieldPlacement {
      location?: Location;
  }
  enum CustomFieldType {
      UNKNOWN_CUSTOM_FIELD_TYPE = "UNKNOWN_CUSTOM_FIELD_TYPE",
      STRING = "STRING",
      DATE = "DATE",
      BOOLEAN = "BOOLEAN",
      NUMBER = "NUMBER",
      RICH_CONTENT = "RICH_CONTENT"
  }
  enum ValueSensitivity {
      UNKNOWN = "UNKNOWN",
      PII = "PII"
  }
  interface Installments {
      /** Installments plan. */
      plan?: Installment[];
      /** Indicate if the first installment is a deposit. */
      deposit?: boolean | null;
  }
  interface Installment extends InstallmentValueOneOf {
      fixAmount?: string;
      percentage?: string;
      /** Installment id, used mainly by the line item to indicate which installments are applicable to it */
      _id?: string | null;
      /** Index of the installment. */
      index?: number;
      /** Name of the installment, for example: "deposit" */
      name?: string | null;
      /**
       * Due date the of the installment, formatted as `"YYYY-MM-DD"`
       *
       * Example: `"2021-03-15"` for March 15, 2021.
       */
      dueDate?: string | null;
      /** List of line items ids this installment applied to. */
      lineItemIds?: string[];
      /** Total amount of the installments. */
      totalAmount?: string | null;
  }
  /** @oneof */
  interface InstallmentValueOneOf {
      fixAmount?: string;
      percentage?: string;
  }
  interface RecurringPolicy {
      period?: Period;
      repeatLimit?: number;
  }
  enum TimeUnit {
      UNDEFINED = "UNDEFINED",
      DAY = "DAY",
      WEEK = "WEEK",
      MONTH = "MONTH",
      YEAR = "YEAR"
  }
  interface Period {
      repeatsEvery?: number;
      unit?: TimeUnit;
  }
  interface Recurrence {
      /** Invoice Id that defines the recurring policy. */
      originInvoiceId?: string;
      /** Sequence in the recurring series */
      recurrenceSequence?: number;
  }
  interface Totals {
      /** Sum of all line items before taxes, fees, and discounts */
      subtotal?: string | null;
      /**
       * The type of totals. Default is COMPUTED
       * @readonly
       */
      type?: TotalType;
      /** Discounted totals */
      discounts?: DiscountedTotals;
      /** Sum total of all discount_total in the discounts array */
      discountTotal?: string | null;
      /** Taxed totals */
      taxes?: TaxedTotals;
      /**
       * subtotal of all the items on the invoice that receive this tax.
       * taxes are equal if all fields are equal. (name, code, rate and taxableAmount)
       */
      totalTax?: string | null;
      /** Additional fees */
      additionalFees?: FeesTotals;
      /** Sum total of all additional fees */
      additionalFeesTotal?: string | null;
      /** Subtotal, minus discounts, plus taxes */
      grandTotal?: string | null;
      /**
       * Invoice balance, calculated as invoice total minus gift card minus amount paid
       * @readonly
       */
      balance?: string | null;
  }
  /** default value when not provided is COMPUTED */
  enum TotalType {
      UNKNOWN_TOTAL_TYPE = "UNKNOWN_TOTAL_TYPE",
      COMPUTED = "COMPUTED",
      MANUAL = "MANUAL"
  }
  interface DiscountedTotals {
      /** Array of each unique discount and its amounts */
      items?: DiscountedTotal[];
  }
  interface DiscountedTotal {
      /** Discount */
      discount?: Discount;
      /** Calculated total discount that got applied to the applied_to_amount according to this discount type (fixed|percentage). */
      appliedDiscount?: string | null;
  }
  interface TaxedTotals {
      /** Array of each unique deposit and its amounts */
      items?: TaxedTotal[];
  }
  interface TaxedTotal {
      /** Tax item */
      tax?: TaxItem;
      /** Calculated total tax that got applied to the applied_to_amount */
      appliedTax?: string | null;
      /** subtotal of all the items on the invoice that receive this tax */
      appliedToAmount?: string | null;
  }
  interface FeesTotals {
      /** Array of each fee and its amounts */
      items?: FeesTotal[];
  }
  interface FeesTotal {
      /** Fee */
      fee?: Fee;
      /** Calculated total fee according to this fee. */
      appliedFee?: string | null;
  }
  interface Attachments {
      /** List of attached items */
      items?: MediaItem[];
  }
  interface MediaItem extends MediaItemMediaOneOf {
      image?: string;
      document?: string;
  }
  /** @oneof */
  interface MediaItemMediaOneOf {
      image?: string;
      document?: string;
  }
  /** Defaults are taken from site-properties */
  interface RegionalProperties {
      /** The default language of the site. */
      languageCode?: string | null;
      /** The locale determines the default format of numbers, dates and times */
      locale?: Locale;
      /** The time zone determines the default format of dates and times */
      timeZone?: string | null;
  }
  interface Locale {
      languageCode?: string;
      country?: string;
  }
  enum InvoiceStatus {
      UNKNOWN_INVOICE_STATUS = "UNKNOWN_INVOICE_STATUS",
      DRAFT = "DRAFT",
      PUBLISHED = "PUBLISHED",
      OVERDUE = "OVERDUE",
      IN_PROGRESS = "IN_PROGRESS",
      PARTIALLY_PAID = "PARTIALLY_PAID",
      PAID = "PAID",
      VOIDED = "VOIDED",
      REFUNDED = "REFUNDED"
  }
  interface TaxDefinitions {
      /** Tax items */
      definitions?: TaxDefinition[];
  }
  interface TaxDefinition {
      /** Tax name */
      name?: string | null;
      /** Tax code */
      code?: string | null;
      /**
       * The rate is divided by 100 to get the percentage value.
       * For example: 15.25% is be represented by the rate value 1525.
       */
      rate?: string | null;
  }
  interface FeeDefinitions {
      /** Fee items */
      definitions?: FeeDefinition[];
  }
  interface FeeDefinition {
      /** Fee name */
      code?: string;
      /** Fee name */
      name?: string;
      /** Optional fixed amount */
      fixedRate?: string | null;
  }
  interface LineItemsSettings {
      lineItemsOptions?: LineItemsOption[];
  }
  enum LineItemsOption {
      UNDEFINED_LINE_ITEMS_OPTION = "UNDEFINED_LINE_ITEMS_OPTION",
      SHOW_TAX = "SHOW_TAX"
  }
  interface TotalsSettings {
      totalsOptions?: TotalsOption[];
  }
  enum TotalsOption {
      UNDEFINED_TOTALS_OPTION = "UNDEFINED_TOTALS_OPTION",
      BREAKDOWN_SUBTOTALS_PER_TAX = "BREAKDOWN_SUBTOTALS_PER_TAX"
  }
  interface GeneratedDocuments {
      /** Default document */
      defaultDocument?: GeneratedDocument;
      /** Document in other formats */
      otherFormatDocuments?: GeneratedDocument[];
  }
  interface GeneratedDocument {
      /** Reference to the generated document */
      document?: string;
      /** Optional name of the generator */
      generatorName?: string | null;
  }
  enum Action {
      UNKNOWN_ACTION = "UNKNOWN_ACTION",
      VIEW = "VIEW",
      UPDATE = "UPDATE",
      DELETE = "DELETE",
      PUBLISH = "PUBLISH",
      RECORD_PAYMENT = "RECORD_PAYMENT",
      CANCEL_PAYMENT = "CANCEL_PAYMENT",
      VOID = "VOID",
      REFUND = "REFUND",
      CREATE_ORDER = "CREATE_ORDER"
  }
  interface InvoiceLayout {
      /** Address placement hint */
      addressHintPlacement?: AddressHintPlacement;
  }
  enum AddressHintPlacement {
      UNKNOWN_PLACEMENT = "UNKNOWN_PLACEMENT",
      REPLACE = "REPLACE",
      BEFORE = "BEFORE",
      AFTER = "AFTER"
  }
  interface CreateInvoiceResponse {
      invoiceId?: string;
      revision?: string | null;
  }
  interface UpdateInvoiceRequest {
  }
  interface UpdateInvoiceResponse {
  }
  interface DeleteInvoiceRequest {
  }
  interface DeleteInvoiceResponse {
  }
  interface GenerateInvoiceRequest {
  }
  interface GenerateInvoiceResponse {
  }
  interface InvoicesConfig {
  }
  /**
   * this message is not directly used by any service,
   * it exists to describe the expected parameters that SHOULD be provided to invoked Velo methods as part of open-platform.
   * e.g. SPIs, event-handlers, etc..
   * NOTE: this context object MUST be provided as the last argument in each Velo method signature.
   *
   * Example:
   * ```typescript
   * export function wixStores_onOrderCanceled(event: OrderCanceledEvent, context: Context) {
   * ...
   * }
   * ```
   */
  interface Context {
      /** A unique identifier for each request. Can be used for logging / troubleshooting */
      requestId?: string | null;
      /** 3 capital letters string representing a currency according to ISO-4217 */
      currency?: string | null;
      /** The identification type and identity data */
      identity?: IdentificationData;
      /** A string representing a language and region in the format of "xx-XX". First 2 letters represent the language code according to ISO 639-1. This is followed by a dash "-", and then a by 2 capital letters representing the region according to ISO 3166-2 */
      languages?: string[];
      /** App instance ID of SPI in context */
      instanceId?: string | null;
  }
  enum IdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface IdentificationData extends IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: IdentityType;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  interface CreateInvoiceOptions {
      invoice?: Invoice;
      /** unique key that help avoid duplications. */
      idempotencyKey?: string | null;
  }
  
  export { Action, Address, AddressHintPlacement, AddressLocation, AddressStreetOneOf, Attachments, BusinessDetails, BusinessError, Context, CreateInvoiceOptions, CreateInvoiceRequest, CreateInvoiceResponse, CustomFieldInfo, CustomFieldMetadata, CustomFieldPlacement, CustomFieldType, CustomFields, Customer, DeleteInvoiceRequest, DeleteInvoiceResponse, Discount, DiscountValueOneOf, DiscountedTotal, DiscountedTotals, Discounts, Fee, FeeDefinition, FeeDefinitions, Fees, FeesTotal, FeesTotals, GenerateInvoiceRequest, GenerateInvoiceResponse, GeneratedDocument, GeneratedDocuments, IdentificationData, IdentificationDataIdOneOf, IdentityType, Installment, InstallmentValueOneOf, Installments, Invoice, InvoiceLayout, InvoiceStatus, InvoicesConfig, Labels, LineItem, LineItemMetadata, LineItemsOption, LineItemsSettings, Locale, Location, MediaItem, MediaItemMediaOneOf, Origin, Period, Quantity, Recurrence, RecurringPolicy, RegionalProperties, StreetAddress, Subdivision, SubdivisionType, TaxDefinition, TaxDefinitions, TaxItem, TaxItems, TaxedTotal, TaxedTotals, TimeUnit, TotalType, Totals, TotalsOption, TotalsSettings, UpdateInvoiceRequest, UpdateInvoiceResponse, ValueSensitivity };
}
