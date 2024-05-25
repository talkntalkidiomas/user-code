declare module "interfaces-v1-shipping-label-carrier-quote" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface ShippingLabelCarrierQuote {
      /** service unique id */
      serviceId?: string;
      /** service display name (translated) */
      serviceName?: string;
      /** total value */
      total?: string;
      /** total breakdown details */
      details?: ShippingLabelQuoteDetail[];
  }
  interface ShippingLabelQuoteDetail {
      /** display name (translated) */
      title?: string;
      /** value */
      value?: string;
  }
  interface GetQuotesRequest {
      /** address and contact details of sender */
      originAddressWithContact?: AddressWithContact;
      /** address and contact details of receiver */
      destinationAddressWithContact?: AddressWithContact;
      /** carrier specific key for preset package types (Optional) */
      packageTypeId?: string | null;
      /** package dimension */
      packageDimension?: PackageDimension;
      /** weight of the package */
      weight?: number;
      /** require signature from receiver */
      requireSignature?: boolean | null;
      /** value for insurance */
      insuranceValue?: string | null;
      /** international customs information */
      internationalCustomsInfo?: InternationalCustomsInfo;
  }
  /** Billing Info and shipping details */
  interface AddressWithContact {
      /** Address. */
      address?: Address;
      /** Contact details. */
      contactDetails?: FullAddressContactDetails;
  }
  /** Physical address */
  interface Address {
      /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
      country?: string | null;
      /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Postal or zip code. */
      postalCode?: string | null;
      /** Street address. */
      streetAddress?: StreetAddress;
      /** Main address line (usually street name and number). */
      addressLine1?: string | null;
      /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
      addressLine2?: string | null;
      /** @internal */
      location?: AddressLocation;
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
  /** Full contact details for an address */
  interface FullAddressContactDetails {
      /** First name. */
      firstName?: string | null;
      /** Last name. */
      lastName?: string | null;
      /** Phone number. */
      phone?: string | null;
      /** Company name. */
      company?: string | null;
      /** Tax information (for Brazil only). If ID is provided, `vatId.type` must also be set, `UNSPECIFIED` is not allowed. */
      vatId?: VatId;
  }
  interface VatId {
      /** Customer's tax ID. */
      _id?: string;
      /**
       * Tax type.
       *
       * Supported values:
       * + `CPF`: for individual tax payers
       * + `CNPJ`: for corporations
       */
      type?: VatType;
  }
  /** tax info types */
  enum VatType {
      UNSPECIFIED = "UNSPECIFIED",
      /** CPF - for individual tax payers. */
      CPF = "CPF",
      /** CNPJ - for corporations */
      CNPJ = "CNPJ"
  }
  interface PackageDimension {
      /** width of the package */
      width?: number;
      /** length of the package */
      length?: number;
      /** height of the package (Optional) */
      height?: number | null;
  }
  interface InternationalCustomsInfo {
      /** package content type for customs */
      packageContentType?: PackageContentType;
      /** description (Optional when package_content_type is not OTHER) */
      contentDescription?: string | null;
      /** item details for customs */
      itemsDetails?: ItemDetails[];
  }
  enum PackageContentType {
      GIFT = "GIFT",
      MERCHANDISE = "MERCHANDISE",
      OTHER = "OTHER"
  }
  interface ItemDetails {
      /** item unique id */
      _id?: string;
      /** quantity of item */
      quantity?: number;
      /** description */
      description?: string;
      /** weight of single item */
      weight?: number;
      /** value of single item */
      value?: string;
  }
  interface GetQuotesResponse {
      /** list of quotes */
      quotes?: ShippingLabelCarrierQuote[];
  }
  interface ShippingLabelCarrierSpiConfig {
      /** the countries supported to send from */
      originCountries?: string[];
      /** the countries supported to send to */
      destinationCountries?: string[];
      /** the currency of the labels */
      currency?: string;
      /** the measurement system of he labels (Metric or Imperial) */
      measurementSystem?: MeasurementSystem;
      /** does carrier support insurance */
      isInsuranceSupported?: boolean;
      /** preset carrier packages */
      packageTypes?: PackageType[];
  }
  enum MeasurementSystem {
      Metric = "Metric",
      Imperial = "Imperial"
  }
  interface PackageType {
      /** carrier id that can be used to get quotes and purchase */
      _id?: string;
      /** display name of the package (translated) */
      name?: string;
      /** description (translated) */
      description?: string;
      /** the dimensions of the package */
      dimension?: PackageDimension;
      /** image of the package (Optional) */
      image?: Image;
  }
  interface Image {
      /** WixMedia image ID. */
      _id?: string;
      /** Image URL. */
      url?: string;
      /**
       * Original image height.
       * @readonly
       */
      height?: number;
      /**
       * Original image width.
       * @readonly
       */
      width?: number;
      /** Image alt text. Optional. */
      altText?: string | null;
      /**
       * Optional - Image URL expiry date (when relevant).
       * @internal
       */
      urlExpirationDate?: Date;
      /** Optional - Image filename. */
      filename?: string | null;
      /**
       * Optional - Image size in bytes.
       * @internal
       */
      sizeInBytes?: string | null;
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
  interface GetQuotesOptions {
      /** address and contact details of sender */
      originAddressWithContact?: AddressWithContact;
      /** address and contact details of receiver */
      destinationAddressWithContact?: AddressWithContact;
      /** carrier specific key for preset package types (Optional) */
      packageTypeId?: string | null;
      /** package dimension */
      packageDimension?: PackageDimension;
      /** weight of the package */
      weight?: number;
      /** require signature from receiver */
      requireSignature?: boolean | null;
      /** value for insurance */
      insuranceValue?: string | null;
      /** international customs information */
      internationalCustomsInfo?: InternationalCustomsInfo;
  }
  
  export { Address, AddressLocation, AddressWithContact, BusinessError, Context, FullAddressContactDetails, GetQuotesOptions, GetQuotesRequest, GetQuotesResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, Image, InternationalCustomsInfo, ItemDetails, MeasurementSystem, PackageContentType, PackageDimension, PackageType, ShippingLabelCarrierQuote, ShippingLabelCarrierSpiConfig, ShippingLabelQuoteDetail, StreetAddress, VatId, VatType };
}
