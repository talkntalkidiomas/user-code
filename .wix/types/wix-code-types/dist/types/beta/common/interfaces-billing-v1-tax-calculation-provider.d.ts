declare module "interfaces-billing-v1-tax-calculation-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  /** Items and information to calculate tax for. */
  interface CalculateTaxRequest {
      /** 3-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
      currency?: string;
      /** Array of addresses. Each line item can individually reference the address to apply with `lineItems.addressIndex`. */
      addresses?: Address[];
      /** Line items to calculate tax for. */
      lineItems?: LineItem[];
  }
  /** Wix common address format for physical address to use if you plan to store addresses in your service. */
  interface Address {
      /** 2-letter country code in [ISO-3166 alpha-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string | null;
      /** Subdivision (such as state, prefecture, or province) in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Postal or zip code. */
      postalCode?: string | null;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
      /** Free text providing more detailed address information, such as apartment, suite, or floor. */
      addressLine2?: string | null;
  }
  /** Line items to calculate tax for. */
  interface LineItem {
      /** Line item ID. */
      _id?: string;
      /** Line item name to display. */
      itemName?: string | null;
      /** Line item quantity. */
      quantity?: number;
      /** Line item price. */
      price?: string;
      /** Stock keeping unit for this line item. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
      itemCode?: string | null;
      /** Tax group ID for this line item. If not provided, the default tax group applies. */
      taxGroupId?: string | null;
      /** Whether tax is included in the price. */
      taxIncludedInPrice?: boolean;
      /** Index of the address from `addresses` to use to calculate tax for this specific line item. The index is zero-based. */
      addressIndex?: AddressIndex;
      /** Tax region ID for this line item. */
      taxRegionId?: string | null;
  }
  /** Index of the address from `addresses` to use to calculate tax for this specific line item. The index is zero-based. */
  interface AddressIndex extends AddressIndexAddressIndexOptionsOneOf {
      /** Single address to use for a sale location when only one address is required for tax calculations. The index is zero-based. */
      singleAddress?: number;
      /**
       * Multiple addresses to use for a sale. For example, some tax calculations may require both the address where an item is shipped from,
       * as well as the address the item is shipped to.
       */
      multipleAddresses?: MultipleAddresses;
  }
  /** @oneof */
  interface AddressIndexAddressIndexOptionsOneOf {
      /** Single address to use for a sale location when only one address is required for tax calculations. The index is zero-based. */
      singleAddress?: number;
      /**
       * Multiple addresses to use for a sale. For example, some tax calculations may require both the address where an item is shipped from,
       * as well as the address the item is shipped to.
       */
      multipleAddresses?: MultipleAddresses;
  }
  /**
   * MultipleAddresses are used for example for tax calculation of items shipped from store warehouse to a shipping address.
   * In this case origin is the warehouse address and destination is the shipping address.
   */
  interface MultipleAddresses {
      /** Index of the origin address. */
      origin?: number;
      /** Index of the destination address. */
      destination?: number;
  }
  /** Calculated tax. */
  interface CalculateTaxResponse {
      /**
       * 3-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       * If this code doesn't match the `currency` passed in the request, then the response is invalid.
       */
      currency?: string;
      /** Summary of the tax calculated. */
      taxSummary?: TaxSummary;
      /** Details of each tax applied to each line item. */
      lineItemTaxDetails?: LineItemTaxDetails[];
  }
  interface TaxSummary {
      /** Total price for all line items. */
      totalAmount?: string;
      /**
       * Total amount of tax calculated for all line items.
       * Note that due to rounding, `totalTax` may not equal the sum of `lineItemTaxDetails.taxSummary.taxAmount`.
       */
      totalTax?: string;
      /** Total taxable amount for all line items. */
      totalTaxableAmount?: string;
      /** Total amount of `totalTax` that is included in price. Applies to line items with `taxIncludedInPrice` set to `true`. */
      totalTaxIncludedInPrice?: string | null;
  }
  /** Tax details for a specific line item. */
  interface LineItemTaxDetails {
      /** Line item ID. */
      _id?: string;
      /** Line item name to display. */
      itemName?: string | null;
      /** Line item quantity. */
      quantity?: number;
      /** Array of each tax applied, grouped by `jurisdiction`, `jurisdictionType`, `taxName`, `taxRate`, and `taxType`. */
      taxBreakdown?: TaxBreakdown[];
      /** Summary of this line item's total price and tax. */
      taxSummary?: LineItemTaxSummary;
  }
  /** A detailed description of all the tax authorities applied on this item. */
  interface TaxBreakdown {
      /** Jurisdiction that taxes were calculated for. */
      jurisdiction?: string | null;
      /** Non-taxable amount of the price. */
      nonTaxableAmount?: string | null;
      /** Tax rate used for this jurisdiction, as a decimal. For example, 10% tax is `"0.1000"` and 200% tax is `"2.0000"`. */
      rate?: string | null;
      /** Amount of this tax calculated for this jurisdiction. */
      taxAmount?: string | null;
      /** Taxable amount of the price. */
      taxableAmount?: string | null;
      /** Type of tax that was calculated. For example, `"Sales Tax"`, `"Income Tax"`, `"Value Added Tax"`, etc. */
      taxType?: string | null;
      /** Name of the tax that was calculated. For example, `"NY State Sales Tax"`, `"Quebec GST"`, etc. */
      taxName?: string | null;
      /** Type of jurisdiction that taxes were calculated for. For example, `"State"`, `"Çounty"`, `"City"`, `"Special"`, etc. */
      jurisdictionType?: JurisdictionType;
  }
  /** Type of jurisdiction that taxes were calculated for. For example, `"State"`, `"Çounty"`, `"City"`, `"Special"`, etc. */
  enum JurisdictionType {
      UNDEFINED = "UNDEFINED",
      COUNTRY = "COUNTRY",
      STATE = "STATE",
      COUNTY = "COUNTY",
      CITY = "CITY",
      SPECIAL = "SPECIAL"
  }
  interface LineItemTaxSummary {
      /**
       * Total price for this line item.
       * To determine the price for each individual unit of this line item, divide by `quantity`.
       */
      fullPrice?: string | null;
      /** The total amount of tax calculated for this line item. */
      taxAmount?: string;
      /** Total taxable amount for this line item. */
      taxableAmount?: string;
  }
  interface TaxCalculationConfig {
      /**
       * *Required.** Base URI where the endpoints are called. Wix appends the endpoint path to the base URI.
       *
       * For example, to call the Calculate Tax endpoint at https://my-tax-calc.com/v1/calculateTax, the base URI you provide here is `"https://my-tax-calc.com/"`.
       */
      deploymentUri?: SpiBaseUri;
      /** Display name of the tax calculator. */
      calculatorDisplayName?: string;
      /** List of countries, in [ISO-3166 alpha-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format, that the calculator does not support. */
      unsupportedCountries?: string[];
  }
  interface SpiBaseUri {
      /** URI that the host uses to call the implementer. The path-suffix defined on the method will be appended to it. */
      baseUri?: string;
      /** List of methods and their override URIs. */
      alternativeUris?: AlternativeUri[];
  }
  interface AlternativeUri {
      /** Unique method name. */
      methodName?: string;
      /**
       * URI that the host uses to call the method.
       * The path-suffix defined on the method won't be appended to it. <br>
       *
       * For third-party apps, the URI must use the HTTPS protocol.
       */
      absoluteUri?: string;
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
      /** 3-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
      currency?: string;
      /** Array of addresses. Each line item can individually reference the address to apply with `lineItems.addressIndex`. */
      addresses?: Address[];
      /** Line items to calculate tax for. */
      lineItems?: LineItem[];
  }
  
  export { Address, AddressIndex, AddressIndexAddressIndexOptionsOneOf, AlternativeUri, BusinessError, CalculateTaxOptions, CalculateTaxRequest, CalculateTaxResponse, Context, IdentificationData, IdentificationDataIdOneOf, IdentityType, JurisdictionType, LineItem, LineItemTaxDetails, LineItemTaxSummary, MultipleAddresses, SpiBaseUri, TaxBreakdown, TaxCalculationConfig, TaxSummary };
}
