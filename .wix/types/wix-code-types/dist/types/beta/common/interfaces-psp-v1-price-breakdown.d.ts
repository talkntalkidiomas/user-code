declare module "interfaces-psp-v1-price-breakdown" {
  interface PriceBreakdown {
      /** Available price breakdown options */
      priceBreakdownOptions?: PriceBreakdownOption[];
      /** URL of page with Price Breakdown details */
      moreInfoPageUrl?: string | null;
      /**
       * Promo message for Buyer in HTML format; used only by Affirm
       * @internal
       */
      promoMessage?: string | null;
      /** Promo message for Buyer */
      message?: string | null;
      /** impression URL to notify when provider Price Breakdown is shown to UoU */
      impressionUrl?: string | null;
  }
  interface PriceBreakdownOption {
      /** number of installments */
      installmentCount?: number;
      /** amount of each installment */
      installmentAmount?: string;
      /** total amount with interest */
      totalAmount?: string;
      /** provider commission amount */
      interestAmount?: string;
  }
  interface FindPriceBreakdownRequest {
      /** Payment Service Provider own credentials that were connected during the onboarding process. */
      merchantCredentials?: Record<string, string>;
      /** Amount to breakdown on installments */
      amount?: string;
      /** Buyer locale country */
      country?: string | null;
      /** Buyer locale language */
      language?: string | null;
      /** Amount currency */
      currency?: string;
      /** Connection mode. Identifies whether an account is live or for testing purposes. */
      mode?: Mode;
  }
  enum Mode {
      UNDEFINED = "UNDEFINED",
      LIVE = "LIVE",
      SANDBOX = "SANDBOX"
  }
  interface FindPriceBreakdownResponse {
      priceBreakdown?: PriceBreakdown;
  }
  /** todo */
  interface PriceBreakdownConfig {
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
  interface FindPriceBreakdownOptions {
      /** Payment Service Provider own credentials that were connected during the onboarding process. */
      merchantCredentials?: Record<string, string>;
      /** Amount to breakdown on installments */
      amount?: string;
      /** Buyer locale country */
      country?: string | null;
      /** Buyer locale language */
      language?: string | null;
      /** Amount currency */
      currency?: string;
      /** Connection mode. Identifies whether an account is live or for testing purposes. */
      mode?: Mode;
  }
  
  export { Context, FindPriceBreakdownOptions, FindPriceBreakdownRequest, FindPriceBreakdownResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, Mode, PriceBreakdown, PriceBreakdownConfig, PriceBreakdownOption };
}
