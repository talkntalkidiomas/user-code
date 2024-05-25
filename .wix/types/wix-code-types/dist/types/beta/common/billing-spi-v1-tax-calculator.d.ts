declare module "billing-spi-v1-tax-calculator" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface TaxCalculator {
      /** Identifier of this tax calculator */
      _id?: string | null;
  }
  interface CalculateTaxRequest {
      /** The Estimate Tax request details - elaborated in the EstimateTaxRequestDetails message. */
      estimateTaxRequestDetails?: EstimateTaxRequestDetails;
  }
  /** TaxEstimateRequestDetails represents the details required to calculate tax for a transaction. */
  interface EstimateTaxRequestDetails {
      /** An optional identifier of the entity that you are calculating tax for. For example, cart ID or checkout ID. */
      externalId?: string | null;
      /** The time when the tax estimation was calculated. */
      taxDate?: Date;
      /** A list of tax exemptions to be applied. */
      exemptions?: Exemptions;
      /** The tax estimation three-character ISO 4217 currency code that was used for payment for this transaction. */
      currencyCode?: string;
      /** All the relevant addresses for this estimation should be listed here. Line items will hold only reference to them. */
      addressesInfo?: Address[];
      /** A list of line items to be taxed. */
      lineItems?: LineItem[];
      /**
       * The desired currency fraction size. Optional, default is 2.
       * This will affect the way we will format the tax amount, but not affect the rate value that is always 4 as its 0.0000 to 1.0000 value.
       * e.g. when using USD the required fraction size is 2 - so for 25.544$ we will show 25.55$. (round up)
       */
      currencyFractionSize?: number | null;
      /** External estimateTax Id */
      estimationId?: string | null;
  }
  interface Exemptions {
      /** A list of tax exemptions to be applied. see ExemptionModel. */
      exemptions?: ExemptionModel[];
  }
  /** Exemption allows the user to specify what tax is exempt (no need to pay) by giving the vatId && taxType that this vat id refers to. */
  interface ExemptionModel {
      /** The vat id of the buyer. */
      vatId?: string;
      /** The tax type this vat id exempt from. */
      taxType?: string | null;
  }
  /** Wix common address format for physical address to use if you plan to store addresses in your service. */
  interface Address {
      /** Country code - 2 letters ISO-3166-1. */
      country?: string | null;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Zip/postal code. */
      postalCode?: string | null;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
      addressLine2?: string | null;
  }
  /** LineItem represents information about a line item. */
  interface LineItem {
      /** The ID of the line item. */
      lineNumber?: string;
      /** The number of items in this line (must be between 0 and 1,000,000). */
      quantity?: number;
      /** The price of the line item (Decimal value). */
      price?: string;
      /** The tax group ID this item is related to. */
      taxGroupId?: string | null;
      /** the default tax group ID of this item - will be used in case we did not find mapping for the taxGroupId */
      defaultTaxGroupId?: string | null;
      /** The known SKU (item code) for this line item. */
      itemCode?: string | null;
      /** Indicates whether the price already includes tax. If not provided, the default from the relevant tax region is used. */
      taxIncluded?: boolean;
      /** Free text description for this line item. (Optional) */
      description?: string | null;
      /** The address of this line, which can be either from and to locations, or a single location. */
      addressIndices?: AddressesModel;
      /** The tax region ID representing this item address model */
      taxRegionId?: string | null;
  }
  /** AddressesModel represents the address of a specific line item, which can be either from and to locations, or a single location. */
  interface AddressesModel extends AddressesModelAddressInfoOneOf {
      /**
       * Tax should be calculated by a single location. e.g. a store location.
       * Index refers to the address in the TaxEstimate addresses_info list.
       */
      singleLocationAddressIndex?: number;
      /** Tax should be calculated by a "from" and "to" locations. e.g. a shipping address. */
      fromToLocationsIndices?: FromToAddressesIndices;
  }
  /** @oneof */
  interface AddressesModelAddressInfoOneOf {
      /**
       * Tax should be calculated by a single location. e.g. a store location.
       * Index refers to the address in the TaxEstimate addresses_info list.
       */
      singleLocationAddressIndex?: number;
      /** Tax should be calculated by a "from" and "to" locations. e.g. a shipping address. */
      fromToLocationsIndices?: FromToAddressesIndices;
  }
  interface FromToAddressesIndices {
      /** The index of the "from" address in the TaxEstimate addresses_info list. */
      fromAddressIndex?: number;
      /** The index of the "to" address in the TaxEstimate addresses_info list. */
      toAddressIndex?: number;
  }
  interface CalculateTaxResponse {
      /** The tax estimation result - elaborated in the TaxEstimate message. */
      taxEstimate?: TaxEstimate;
  }
  interface TaxEstimate {
      /** Tax Estimation ID. */
      _id?: string | null;
      /** An optional identifier of the entity that you are calculating tax for. For example, cart ID or checkout ID. */
      externalId?: string | null;
      /** The time when the tax estimation was calculated. */
      taxDate?: Date;
      /** The tax estimation three-character ISO 4217 currency code that was used for payment for this transaction. */
      currencyCode?: string;
      /** The total amount of this estimate (the actual amount of money that exchanged hands). */
      totalAmount?: string;
      /** The amount of this estimate that was exempt (for all lines). */
      totalExempt?: string | null;
      /** The total amount of tax calculated for all lines in this estimate. */
      totalTax?: string;
      /** The portion of the total amount of this estimate that was taxable. */
      totalTaxable?: string;
      /** Total tax divided by total taxable. */
      averageTaxRate?: string;
      /** All the relevant addresses for this estimation should be listed here. Line items will hold only reference to them. */
      addressesInfo?: Address[];
      /** Optional tax exemptions. */
      exemptions?: Exemptions;
      /** The calculated tax for each line. */
      lineItemsTax?: LineItemTaxModel[];
      /** The errors that occurred during the tax calculation. */
      errors?: ApplicationError[];
      /** The sum of all the tax that is already included in the price. */
      totalTaxIncludedInPrice?: string | null;
  }
  /** LineItemTaxModel represents tax information for a line item. */
  interface LineItemTaxModel {
      /** The ID of the line item. */
      lineNumber?: string;
      /** Line description. */
      description?: string | null;
      /** The index of the "destination" address in the TaxEstimate addresses_info. */
      destinationAddressIndex?: number;
      /** The index of the "origin" address in the TaxEstimate addresses_info. */
      originAddressIndex?: number;
      /** The amount of this line item that was exempt. (Decimal value) */
      exemptAmount?: string | null;
      /** IDs of the used exemptions from the TaxEstimate exemptions array. */
      exemptionIds?: number[];
      /** True for items we have a tax applied on them. */
      isItemTaxable?: boolean | null;
      /** The number of items (must be between 0 and 1,000,000). */
      quantity?: number;
      /**
       * The total amount of the line, including both taxable and exempt.
       * This is the total price for all items. To determine the individual item price,
       * divide this by quantity. (Decimal value)
       */
      lineAmount?: string | null;
      /** The tax for this line in this estimation. (Decimal value) */
      tax?: string;
      /** The taxable amount of this line. (Decimal value) */
      taxableAmount?: string;
      /** True if the lineAmount includes tax in it. */
      taxIncluded?: boolean | null;
      /** A detailed description of all the tax authorities applied on this item and exemptions. */
      taxDetails?: LineItemDetailTaxModel[];
      /** The calculator that calculated this line tax. */
      calculatorName?: string | null;
      /** True if the seller has a tax region defined for this line item taxable address. */
      taxAddressHasTaxRegion?: boolean | null;
      /**
       * The rate at which this line item tax was calculated, a number between 0.0 to 1.0.
       * (This is the average of the tax applied from all the LineItemDetailTaxModel)
       */
      averageTaxRate?: string | null;
  }
  /**
   * LineItemDetailTaxModel represents tax information for a line item.
   * It will hold the tax amount and the tax rate for each tax authority that apply on the line item.
   */
  interface LineItemDetailTaxModel {
      /** The id of the line item */
      lineNumber?: string;
      /** The name of the jurisdiction in which this tax detail applies. */
      jurisdictionName?: string | null;
      /** The amount of this line item that was exempt from this authority. (Decimal value) */
      exemptAmount?: string | null;
      /** IDs of the used exemptions from the TaxEstimate exemptions array. */
      exemptionIds?: number[];
      /** The amount of this line item price that was considered nontaxable. (Decimal value) */
      nonTaxableAmount?: string | null;
      /** The rate at which this tax detail was calculated, a number between 0.0000 to 1.0000. */
      rate?: string | null;
      /** The amount of tax estimated for this line item. (Decimal value) */
      tax?: string | null;
      /** The taxable amount of this line item. (Decimal value) */
      taxableAmount?: string | null;
      /** The type of tax that was calculated. Depends on the company's nexus settings as well as the jurisdiction's tax laws. */
      taxType?: string | null;
      /** The name of the tax against which this tax amount was calculated. */
      taxName?: string | null;
      /** The Taxes/Fee component. True if the fee is applied. */
      isFee?: boolean | null;
      /** The type of the jurisdiction in which this tax detail applies (e.g. Country,State,County,City,Special). */
      jurisdictionType?: JurisdictionType;
  }
  /** JurisdictionType represents the type of the jurisdiction in which this tax detail applies (e.g. Country,State,County,City,Special). */
  enum JurisdictionType {
      UNDEFINED = "UNDEFINED",
      COUNTRY = "COUNTRY",
      STATE = "STATE",
      COUNTY = "COUNTY",
      CITY = "CITY",
      SPECIAL = "SPECIAL"
  }
  interface ApplicationError {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface TaxCalculatorSpiConfig {
      /** User-friendly name of the tax calculator */
      calculatorDisplayName?: string;
      /** list of countries and boolean represents if its a white list or black list (supported or unsupported countries) */
      taxCountriesConfig?: TaxCountriesConfig;
  }
  interface TaxCountriesConfig {
      /** list of countries */
      countries?: string[];
      /** represents if the calculator supports tax in those countries or not */
      isSupported?: boolean;
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
  interface CalculateTaxOptions {
      /** The Estimate Tax request details - elaborated in the EstimateTaxRequestDetails message. */
      estimateTaxRequestDetails?: EstimateTaxRequestDetails;
  }
  
  export { Address, AddressesModel, AddressesModelAddressInfoOneOf, ApplicationError, BusinessError, CalculateTaxOptions, CalculateTaxRequest, CalculateTaxResponse, Context, EstimateTaxRequestDetails, ExemptionModel, Exemptions, FromToAddressesIndices, IdentificationData, IdentificationDataIdOneOf, IdentityType, JurisdictionType, LineItem, LineItemDetailTaxModel, LineItemTaxModel, TaxCalculator, TaxCalculatorSpiConfig, TaxCountriesConfig, TaxEstimate };
}
