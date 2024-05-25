declare module "interfaces-promote-v1-gbp-feature" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface GetFeedDataRequest extends GetFeedDataRequestGbpFeatureRequestDataOneOf {
      /** Reserve with google request data */
      reserveWithGoogleData?: ReserveWithGoogleRequestData;
  }
  /** @oneof */
  interface GetFeedDataRequestGbpFeatureRequestDataOneOf {
      /** Reserve with google request data */
      reserveWithGoogleData?: ReserveWithGoogleRequestData;
  }
  interface ReserveWithGoogleRequestData {
      /** List of service ids to get the details for */
      serviceIds?: string[];
  }
  interface GetFeedDataResponse extends GetFeedDataResponseGbpFeatureResponseDataOneOf {
      /** Services data for reserve with google feature */
      reserveWithGoogleData?: ReserveWithGoogleResponseData;
  }
  /** @oneof */
  interface GetFeedDataResponseGbpFeatureResponseDataOneOf {
      /** Services data for reserve with google feature */
      reserveWithGoogleData?: ReserveWithGoogleResponseData;
  }
  interface ReserveWithGoogleResponseData {
      /** The main reserve link, when the UoU clicks "Book Now" on google, he will be directed to this link */
      reserveUrl?: string;
      /** The list of offered services which will appear on google */
      services?: ReserveWithGoogleService[];
  }
  interface ReserveWithGoogleService {
      /** A unique service ID */
      _id?: string;
      /** The service name */
      name?: string;
      /** The service category */
      category?: string;
      /** The service description */
      description?: string;
      /** The service price */
      price?: Price;
      /** The service duration in seconds */
      duration?: string;
      /** The service reserve url */
      reserveUrl?: string;
  }
  interface Price {
      /** The currency of the price that is defined in ISO 4217 */
      currency?: string;
      /** Price Value */
      value?: number;
  }
  interface GbpFeatureConfig {
      /** The URL of the SPI implementation */
      baseUri?: SpiBaseUri;
  }
  interface SpiBaseUri {
      /** URI that will be used by the host to call the implementer. The path-suffix defined on the method will be appended to it */
      baseUri?: string;
      /** override method mappings per method */
      alternativeUris?: AlternativeUri[];
  }
  interface AlternativeUri {
      /** name of the method as it appears in the proto */
      methodName?: string;
      /** absolute uri that will be used by the host to call that method. The path-suffix mapped from the method http option will NOT be appended to this URI. For TPAs. it must be https */
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
  interface GetFeedDataOptions extends GetFeedDataRequestGbpFeatureRequestDataOneOf {
      /** Reserve with google request data */
      reserveWithGoogleData?: ReserveWithGoogleRequestData;
  }
  
  export { AlternativeUri, BusinessError, Context, GbpFeatureConfig, GetFeedDataOptions, GetFeedDataRequest, GetFeedDataRequestGbpFeatureRequestDataOneOf, GetFeedDataResponse, GetFeedDataResponseGbpFeatureResponseDataOneOf, IdentificationData, IdentificationDataIdOneOf, IdentityType, Price, ReserveWithGoogleRequestData, ReserveWithGoogleResponseData, ReserveWithGoogleService, SpiBaseUri };
}
