declare module "interfaces-promote-v1-social-marketing-design" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface GetDesignRequest {
      /** Id of the Design to retrieve */
      designId: string;
  }
  interface GetDesignResponse {
      /** The retrieved Design */
      design?: Design;
  }
  /** Design is the main entity of SocialMarketingDesignSPI */
  interface Design {
      /**
       * Design ID
       * @readonly
       */
      _id?: string;
      /**
       * Provider ID
       * @readonly
       */
      providerId?: string;
      /** Thumbnail of the design */
      thumbnail?: string;
      /** Main media of the design */
      media?: string;
      /** Format of the design */
      format?: Format;
      /** The date the design was last edited */
      lastEditedDate?: Date;
  }
  enum Format {
      UNKNOWN = "UNKNOWN",
      SQUARE = "SQUARE",
      PORTRAIT = "PORTRAIT",
      LANDSCAPE = "LANDSCAPE"
  }
  interface ListDesignsRequest {
  }
  interface ListDesignsResponse {
      /** The retrieved Designs */
      designs?: Design[];
  }
  interface DuplicateDesignRequest {
      /** Id of the Design to duplicate */
      designId: string;
  }
  interface DuplicateDesignResponse {
      /** The new created Design */
      design?: Design;
  }
  interface DeleteDesignRequest {
      /** Id of the Design to delete */
      designId: string;
  }
  interface DeleteDesignResponse {
  }
  interface SocialMarketingDesignSPIConfig {
      /** ID of the provider */
      _id?: string;
      /** Name of the provider */
      name?: string;
      /** URL of the editor */
      editorUrl?: string;
      /** URL of the templates page */
      templatesPageUrl?: string;
      /** Provider's icon, to be displayed in UI */
      iconUrl?: string;
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
  
  export { BusinessError, Context, DeleteDesignRequest, DeleteDesignResponse, Design, DuplicateDesignRequest, DuplicateDesignResponse, Format, GetDesignRequest, GetDesignResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, ListDesignsRequest, ListDesignsResponse, SocialMarketingDesignSPIConfig };
}
