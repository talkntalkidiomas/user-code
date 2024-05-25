declare module "interfaces-psp-v1-payment-service-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface PaymentServiceProviderEntity {
  }
  interface ConnectAccountRequest {
      /** Free format of the fields that describes merchant credentials for a PSP account. */
      credentials: Record<string, string>;
      /** The country in which the merchant will provide their services, in [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
      country?: string | null;
      /** Code for the merchant's preferred [currency](https://en.wikipedia.org/wiki/ISO_4217). */
      currency?: string | null;
      /** Wix merchant ID. */
      wixMerchantId: string;
  }
  interface ConnectAccountResponse {
      /**
       * Merchant credentials that will be used by Wix to make a payment on behalf of the merchant.
       * The format must be specified in provider configuration.
       */
      credentials?: Record<string, string>;
      /** Merchant account ID. This must not be changed over the lifetime of their account. */
      accountId?: string;
      /** Merchant account name. */
      accountName?: string | null;
      /** Reason code predefined by Wix that indicates call result. */
      reasonCode?: number | null;
      /** Error code specific for a Payment Service Provider. */
      errorCode?: string | null;
      /** Error description specific for a Payment Service Provider. */
      errorMessage?: string | null;
  }
  interface CreateTransactionRequest {
      /** Wix transaction ID. */
      wixTransactionId: string;
      /**
       * Payment method supported by the payment service provider.
       * These values will be displayed to the end-user upon checkout and will be passed to the payment service provider
       * to understand what payment method a user selected on the Wix side.
       */
      paymentMethod?: string;
      /** Payment Service Provider own credentials that were connected during the onboarding process. */
      merchantCredentials: Record<string, string>;
      /** Order information. */
      order: Order;
      /** Wix merchant ID. */
      wixMerchantId?: string | null;
      /** Information in case of fraud. */
      fraudInformation?: FraudInformation;
  }
  interface Order {
      /** Merchant order ID. Can be used by a merchant to correlate payment on Wix and on provider side. */
      _id?: string | null;
      description?: OrderDescription;
      returnUrls?: OrderReturnUrls;
  }
  interface OrderDescription {
      /**
       * Total amount to pay in a currency’s smallest unit. In example it's a $10.00 payment.
       * The amount includes all extra charges that are described in the order object like shipping, taxes, etc.
       */
      totalAmount?: string;
      /** Code for the merchant's preferred [currency](https://en.wikipedia.org/wiki/ISO_4217). */
      currency?: string;
      items?: OrderItem[];
      charges?: AdditionalCharges;
      billingAddress?: Address;
      shippingAddress?: Address;
      buyerInfo?: BuyerInfo;
  }
  interface OrderItem {
      /** Item ID. */
      _id?: string | null;
      /** Item name provided by the merchant. */
      name?: string | null;
      /** Item quantity. */
      quantity?: number | null;
      /** Item price. */
      price?: string | null;
      /** Item description provided by the merchant. */
      description?: string | null;
      /** Item weight in KG provided by the merchant. */
      weightInKg?: number | null;
      category?: OrderItemCategory;
  }
  enum OrderItemCategory {
      undefined = "undefined",
      physical = "physical",
      digital = "digital"
  }
  interface AdditionalCharges {
      /** Calculated taxes applied for the full order. */
      tax?: string | null;
      /** Order shipping cost. */
      shipping?: string | null;
      /** Discount amount applied to order. */
      discount?: string | null;
  }
  interface Address {
      /** Buyer's first name. */
      firstName?: string | null;
      /** Buyer's last name. */
      lastName?: string | null;
      /** Buyer's company name. */
      company?: string | null;
      /**
       * Billing or delivery address line.
       * This field represents a street and house number concatenation.
       */
      address?: string | null;
      /** Street name. */
      street?: string | null;
      /** House number. */
      houseNumber?: string | null;
      /** City. */
      city?: string | null;
      /** State. */
      state?: string | null;
      /** Zip code. */
      zipCode?: string | null;
      /** Country of a buyer. */
      countryCode?: string | null;
      /** Phone of a buyer. */
      phone?: string | null;
      /** Fax of a buyer in free form format. */
      fax?: string | null;
      /** Email of a buyer. */
      email?: string | null;
      taxIdentifier?: TaxIdentifier;
  }
  interface TaxIdentifier {
      /** Specific Tax id for merchant country. */
      _id?: string;
      /** Specific Tax type for merchant country. */
      type?: string | null;
  }
  interface BuyerInfo {
      /** Free format unique buyer identifier assigned by Wix. */
      buyerId?: string | null;
      /** Buyer language in [locale](https://en.wikipedia.org/wiki/Locale_(computer_software)) format. */
      buyerLanguage?: string | null;
  }
  interface OrderReturnUrls {
      /** URL destination to merchants site in case of successful payment. */
      successUrl?: string;
      /** URL destination to merchants site in case of failed payment. */
      errorUrl?: string;
      /** URL destination to merchants site in case of payment cancellation. */
      cancelUrl?: string | null;
      /** URL destination to merchants site in case of pending payment. */
      pendingUrl?: string | null;
  }
  interface FraudInformation {
      /** Customer (buyer) IP address. */
      remoteIp?: string;
  }
  interface CreateTransactionResponse {
      /** Transaction identifier on the side of a Payment Service Provider. */
      pluginTransactionId?: string | null;
      /** Reason code predefined by Wix that indicates call result. */
      reasonCode?: number;
      /** Error code specific for a Payment Service Provider. */
      errorCode?: string | null;
      /** Error description specific for a Payment Service Provider. */
      errorMessage?: string | null;
      /** Web page URL where a buyer can proceed with a payment. */
      redirectUrl?: string | null;
  }
  interface CreateRefundRequest {
      /** Wix transaction ID. */
      wixTransactionId: string;
      /** Refund ID. */
      wixRefundId: string;
      /** Provider transaction ID. */
      pluginTransactionId: string;
      /** Payment Service Provider own credentials that were connected during the onboarding process. */
      merchantCredentials: Record<string, string>;
      /**
       * Total amount to pay in a currency’s smallest unit. In the example it's a $10.00 payment.
       * The amount includes all extra charges that are described in the order object like shipping, taxes, etc.
       */
      refundAmount?: string;
      /** Reason for refund. Defined by the merchant. */
      reason?: RefundReason;
  }
  enum RefundReason {
      UNKNOWN = "UNKNOWN",
      DUPLICATE = "DUPLICATE",
      FRAUDULENT = "FRAUDULENT",
      REQUESTED_BY_CUSTOMER = "REQUESTED_BY_CUSTOMER"
  }
  interface CreateRefundResponse {
      /** Refund identifier on the side of a *Payment Service Provider*. */
      pluginRefundId?: string | null;
      /** Reason code predefined by Wix that indicates call result. */
      reasonCode?: number;
      /** Error code specific for a Payment Service Provider. */
      errorCode?: string | null;
      /** Error description specific for a Payment Service Provider. */
      errorMessage?: string | null;
  }
  /** Configuration for the payment service SPI implementor */
  interface PaymentServiceProviderConfig {
      /** Payment service provider to display on Accept payments tab in Business manager */
      title?: string;
      /** Available payment methods */
      paymentMethods?: PaymentMethod[];
      /** Provider authentication methods */
      credentialsFields?: PaymentServiceProviderCredentialsField[];
  }
  interface PaymentMethod extends PaymentMethodMethodOneOf {
      /** Information about hosted page payment method */
      hostedPage?: HostedPage;
  }
  /** @oneof */
  interface PaymentMethodMethodOneOf {
      /** Information about hosted page payment method */
      hostedPage?: HostedPage;
  }
  interface HostedPage {
      /** The payment method title to be will be displayed on accept payments tab in business manager as well as on the checkout */
      title?: string;
      /** Url to images in different formats and colors */
      logos?: Logos;
      /** Billing address fields that buyer needs to fill in order to process payment with the specified payment method */
      billingAddressMandatoryFields?: MandatoryField[];
  }
  interface Logos {
      /** white theme logos */
      white?: Color;
      /** colored theme logos */
      colored?: Color;
  }
  interface Color {
      /** URL to SVG image */
      svg?: string;
      /** URL to PNG image */
      png?: string;
  }
  enum MandatoryField {
      ZIPCODE = "ZIPCODE",
      CITY = "CITY",
      STATE = "STATE",
      ADDRESS = "ADDRESS",
      COUNTRY_CODE = "COUNTRY_CODE",
      EMAIL = "EMAIL",
      PHONE = "PHONE",
      FIRST_NAME = "FIRST_NAME",
      LAST_NAME = "LAST_NAME",
      STREET = "STREET",
      HOUSE_NUMBER = "HOUSE_NUMBER",
      TAX_IDENTIFIER = "TAX_IDENTIFIER"
  }
  interface PaymentServiceProviderCredentialsField extends PaymentServiceProviderCredentialsFieldFieldOneOf {
      /** text field */
      simpleField?: SimpleField;
      /** checkbox field */
      checkboxField?: CheckboxField;
      /** dropdown field */
      dropdownField?: DropdownField;
  }
  /** @oneof */
  interface PaymentServiceProviderCredentialsFieldFieldOneOf {
      /** text field */
      simpleField?: SimpleField;
      /** checkbox field */
      checkboxField?: CheckboxField;
      /** dropdown field */
      dropdownField?: DropdownField;
  }
  interface SimpleField {
      /** field name */
      name?: string;
      /** field label */
      label?: string;
  }
  interface CheckboxField {
      /** field name */
      name?: string;
      /** field label */
      label?: string;
      /** field tooltip */
      tooltip?: string | null;
  }
  interface DropdownField {
      /** field name */
      name?: string;
      /** field label */
      label?: string;
      /** specific options */
      options?: DropdownFieldOption[];
  }
  interface DropdownFieldOption {
      /** option key */
      key?: string;
      /** option value */
      value?: string;
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
  interface ConnectAccountOptions {
      /** Free format of the fields that describes merchant credentials for a PSP account. */
      credentials: Record<string, string>;
      /** The country in which the merchant will provide their services, in [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
      country?: string | null;
      /** Code for the merchant's preferred [currency](https://en.wikipedia.org/wiki/ISO_4217). */
      currency?: string | null;
      /** Wix merchant ID. */
      wixMerchantId: string;
  }
  interface CreateTransactionOptions {
      /** Wix transaction ID. */
      wixTransactionId: string;
      /**
       * Payment method supported by the payment service provider.
       * These values will be displayed to the end-user upon checkout and will be passed to the payment service provider
       * to understand what payment method a user selected on the Wix side.
       */
      paymentMethod?: string;
      /** Payment Service Provider own credentials that were connected during the onboarding process. */
      merchantCredentials: Record<string, string>;
      /** Order information. */
      order: Order;
      /** Wix merchant ID. */
      wixMerchantId?: string | null;
      /** Information in case of fraud. */
      fraudInformation?: FraudInformation;
  }
  interface RefundTransactionOptions {
      /** Wix transaction ID. */
      wixTransactionId: string;
      /** Refund ID. */
      wixRefundId: string;
      /** Provider transaction ID. */
      pluginTransactionId: string;
      /** Payment Service Provider own credentials that were connected during the onboarding process. */
      merchantCredentials: Record<string, string>;
      /**
       * Total amount to pay in a currency’s smallest unit. In the example it's a $10.00 payment.
       * The amount includes all extra charges that are described in the order object like shipping, taxes, etc.
       */
      refundAmount?: string;
      /** Reason for refund. Defined by the merchant. */
      reason?: RefundReason;
  }
  
  export { AdditionalCharges, Address, BusinessError, BuyerInfo, CheckboxField, Color, ConnectAccountOptions, ConnectAccountRequest, ConnectAccountResponse, Context, CreateRefundRequest, CreateRefundResponse, CreateTransactionOptions, CreateTransactionRequest, CreateTransactionResponse, DropdownField, DropdownFieldOption, FraudInformation, HostedPage, IdentificationData, IdentificationDataIdOneOf, IdentityType, Logos, MandatoryField, Order, OrderDescription, OrderItem, OrderItemCategory, OrderReturnUrls, PaymentMethod, PaymentMethodMethodOneOf, PaymentServiceProviderConfig, PaymentServiceProviderCredentialsField, PaymentServiceProviderCredentialsFieldFieldOneOf, PaymentServiceProviderEntity, RefundReason, RefundTransactionOptions, SimpleField, TaxIdentifier };
}
