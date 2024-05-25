declare module "interfaces-notification-v1-notification-preferences-filter-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface FilterPreferencesRequest extends FilterPreferencesRequestRecipientIdOneOf {
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of a Contact. */
      contactId?: string;
      /** the type of the recipient */
      recipientType?: RecipientType;
  }
  /** @oneof */
  interface FilterPreferencesRequestRecipientIdOneOf {
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of a Contact. */
      contactId?: string;
  }
  enum RecipientType {
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      WIX_USER = "WIX_USER",
      CONTACT = "CONTACT"
  }
  interface FilterPreferencesResponse {
      channelsPerTopic?: Record<string, Channels>;
  }
  interface Channels {
      channels?: Channel[];
  }
  enum Channel {
      UNKNOWN_CHANNEL = "UNKNOWN_CHANNEL",
      ALL = "ALL",
      MOBILE = "MOBILE",
      EMAIL = "EMAIL",
      SMS = "SMS",
      VOICE = "VOICE",
      BROWSER = "BROWSER",
      WEB_FEED = "WEB_FEED"
  }
  interface NotificationPreferencesFilterProviderConfig {
      /** notification preference filter SPI configuration */
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
  interface FilterPreferencesOptions extends FilterPreferencesRequestRecipientIdOneOf {
      /** the type of the recipient */
      recipientType?: RecipientType;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of a Contact. */
      contactId?: string;
  }
  
  export { AlternativeUri, BusinessError, Channel, Channels, Context, FilterPreferencesOptions, FilterPreferencesRequest, FilterPreferencesRequestRecipientIdOneOf, FilterPreferencesResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, NotificationPreferencesFilterProviderConfig, RecipientType, SpiBaseUri };
}
