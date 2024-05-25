declare module "interfaces-velo-ide-v1-gridapp-files-transformer" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface TransformPathsToLayoutRequest {
      /** Page files paths */
      pagePaths?: string[];
      /** Public files paths */
      publicPaths?: string[];
      /** Backend files paths */
      backendPaths?: string[];
      /** Styles files paths */
      stylesPaths?: string[];
      /** Optional. Editor site revision to compare pages to, defaults to latest state in editor transactions */
      revision?: string | null;
      /** Optional. The branch ID of the editor site revision, if applicable */
      branchId?: string | null;
  }
  interface TransformPathsToLayoutResponse {
      /** List of mappings between GridApp and layout formats */
      appPathMappings?: AppPathMappings;
  }
  interface AppPathMappings {
      /** Page files paths mappings */
      pagePathMappings?: Mapping[];
      /** Public files paths mappings */
      publicPathMappings?: Mapping[];
      /** Backend files paths mappings */
      backendPathMappings?: Mapping[];
      /** Style files paths mappings */
      stylePathMappings?: Mapping[];
  }
  interface Mapping {
      /** Path of the file in GridAppFormat */
      gridAppPath?: string;
      /** Path of the file in the desired transformed format */
      layoutPath?: string;
  }
  interface TransformPathsToGridAppRequest {
      /** List of the public/backend/pages/styles paths in layout format which require transformation to GridApp format */
      paths?: string[];
  }
  interface TransformPathsToGridAppResponse {
      /** List of mappings between GridApp and layout formats */
      appPathMappings?: AppPathMappings;
  }
  interface TransformContentToLayoutRequest {
      /** List of app files in GridApp format where content require transformation to layout format */
      appFiles?: AppFile[];
  }
  interface AppFile {
      /** Full path of the file (e.g.: "public/helper-functions.js") */
      path?: string;
      /** File content as text */
      content?: string;
  }
  interface TransformContentToLayoutResponse {
      /** List of app files in layout format */
      appFiles?: AppFile[];
  }
  interface TransformContentToGridAppRequest {
      /** List of app files in layout format where content require transformation to GridApp format */
      appFiles?: AppFile[];
  }
  interface TransformContentToGridAppResponse {
      /** List of app files in GridApp format */
      appFiles?: AppFile[];
  }
  interface GridAppFilesTransformerConfig {
      /** URI where the SPI Implementer is deployed */
      uriConfig?: SpiBaseUri;
      /**
       * Transformation layout which should match to value from
       * [GridAppLayout](https://github.com/wix-private/wix-code/blob/master/editor/wix-code-ide-server-ng/proto/wix/velo/ide/v1/grid_app_layout.proto) enum.
       * The new values should be added via PR.
       */
      layout?: string;
      /** List of paths which requires content transformation to GridApp format */
      filesContentToTransformToGridApp?: string[];
      /** List of paths which requires content transformation to Layout format */
      filesContentToTransformToLayout?: string[];
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
  interface TransformPathsToLayoutOptions {
      /** Page files paths */
      pagePaths?: string[];
      /** Public files paths */
      publicPaths?: string[];
      /** Backend files paths */
      backendPaths?: string[];
      /** Styles files paths */
      stylesPaths?: string[];
      /** Optional. Editor site revision to compare pages to, defaults to latest state in editor transactions */
      revision?: string | null;
      /** Optional. The branch ID of the editor site revision, if applicable */
      branchId?: string | null;
  }
  interface TransformPathsToGridAppOptions {
      /** List of the public/backend/pages/styles paths in layout format which require transformation to GridApp format */
      paths?: string[];
  }
  interface TransformContentToLayoutOptions {
      /** List of app files in GridApp format where content require transformation to layout format */
      appFiles?: AppFile[];
  }
  interface TransformContentToGridAppOptions {
      /** List of app files in layout format where content require transformation to GridApp format */
      appFiles?: AppFile[];
  }
  
  export { AlternativeUri, AppFile, AppPathMappings, BusinessError, Context, GridAppFilesTransformerConfig, IdentificationData, IdentificationDataIdOneOf, IdentityType, Mapping, SpiBaseUri, TransformContentToGridAppOptions, TransformContentToGridAppRequest, TransformContentToGridAppResponse, TransformContentToLayoutOptions, TransformContentToLayoutRequest, TransformContentToLayoutResponse, TransformPathsToGridAppOptions, TransformPathsToGridAppRequest, TransformPathsToGridAppResponse, TransformPathsToLayoutOptions, TransformPathsToLayoutRequest, TransformPathsToLayoutResponse };
}
