declare module "interfaces-promote-v1-social-marketing-designs-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface ListDesignsRequest {
  }
  interface ListDesignsResponse {
      /** The retrieved designs. */
      designs?: Design[];
  }
  /** Design is the main entity of SocialMarketingDesignSPI */
  interface Design {
      /**
       * External design ID.
       * @readonly
       */
      _id?: string;
      /** Provider ID. */
      providerId?: string;
      /** Thumbnail of the design. deprecarted */
      thumbnail?: string;
      /** Media url of the design. deprecarted */
      mediaUrl?: string;
      /** Format of the design. deprecarted */
      format?: Format;
      /**
       * The date and time the design was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * The date and time the design was last edited.
       * @readonly
       */
      _updatedDate?: Date;
      /** Media type of the design. deprecarted */
      mediaType?: MediaType;
      /** Host metadata. */
      hostMetadata?: HostMetadata;
      /** Thumbnail url of the design. */
      thumbnailUrl?: string;
      /** Media of the design */
      media?: Media[];
  }
  enum Format {
      UNKNOWN = "UNKNOWN",
      SQUARE = "SQUARE",
      PORTRAIT = "PORTRAIT",
      LANDSCAPE = "LANDSCAPE"
  }
  enum MediaType {
      UNKNOWN = "UNKNOWN",
      IMAGE = "IMAGE",
      VIDEO = "VIDEO",
      GIF = "GIF"
  }
  interface HostMetadata {
      /**
       * Internal database ID of the design.
       * @readonly
       */
      internalId?: string;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes. For an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
  }
  interface Media {
      /** Url of the media item. */
      url?: string;
      /** Type of the media item. */
      type?: MediaType;
      /** Format of the media item. */
      format?: Format;
  }
  interface DeleteDesignRequest {
      /** ID of the design to delete. */
      designId: string;
  }
  interface DeleteDesignResponse {
      /** Whether the design was successfully deleted. */
      success?: boolean;
  }
  interface SocialMarketingDesignsProviderConfig {
      /** Required. Human-readable name of the design provider app. */
      name?: string;
      /** Required. Component ID of the dashboard component. */
      editorComponentId?: string;
      /** The icon URL of the app that will be displayed in the . The icon will be displayed in the UI of the social media marketing dashboard page. */
      iconUrl?: string;
      /** Required. How the composer should be opened. One of: `"MODAL"`, `"NAVIGATE"` */
      navigationType?: NavigationType;
      /** Whether the designs can be deleted from a site owner's dashboard. When `false`, designs can only be deleted from the provider's database. */
      deleteDesignEnabled?: boolean;
      /** Whether the designs are managed by the provider. When `false`, designs are managed by Wix. */
      manageDesigns?: boolean;
  }
  enum NavigationType {
      NAVIGATE = "NAVIGATE",
      MODAL = "MODAL"
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
  
  export { BusinessError, Context, DeleteDesignRequest, DeleteDesignResponse, Design, Format, HostMetadata, IdentificationData, IdentificationDataIdOneOf, IdentityType, ListDesignsRequest, ListDesignsResponse, Media, MediaType, NavigationType, SocialMarketingDesignsProviderConfig };
}
