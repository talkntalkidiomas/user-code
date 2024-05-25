declare module "portfolio-syncedprojects-v1-project" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface Project {
      /** External Project ID */
      externalId?: string;
      /** Project name */
      title?: string | null;
      /** Project description */
      description?: string | null;
      /** Project addition key-value data */
      additionalPublicInfo?: Record<string, string>;
      /** Project media count */
      mediaCount?: number;
      /** project image url */
      coverImage?: string | null;
      /** project url in external */
      link?: string | null;
      /** Project source description as appear in Dashboard project page */
      sourceDescription?: string | null;
      /** cover photo's file name in the provider */
      coverImageFileName?: string | null;
      /** project's cover image id */
      externalCoverImageId?: string | null;
  }
  interface GetProjectsRequest {
      /** Filter Designs by pages. Designs are sorted */
      paging?: CursorPaging;
  }
  interface CursorPaging {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface GetProjectsResponse {
      /** Projects */
      projects?: Project[];
      /** projects paging metadata */
      metadata?: PagingMetadataV2;
  }
  interface PagingMetadataV2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface UserUnauthorizedError {
      /** provider appDefId */
      appDefId?: string;
  }
  interface DataNotReady {
      /** provider appDefId */
      appDefId?: string;
  }
  interface RateLimitExceeded {
      /** provider appDefId */
      appDefId?: string;
  }
  interface SyncProjectRequest {
      /** External Project ID */
      externalId: string;
      /** if need to get the next items page that just asked for sync */
      itemsPaging?: CursorPaging;
  }
  interface SyncProjectResponse {
      /** project */
      project?: Project;
      items?: Item[];
      /** items paging metadata */
      metadata?: PagingMetadataV2;
  }
  interface Item {
      /** External media ID */
      externalId?: string;
      /** External Project ID */
      externalProjectId?: string;
      /** Item name */
      title?: string | null;
      /** Item description */
      description?: string | null;
      /** image or video */
      type?: MediaType;
      /** Item image url */
      mediaUrl?: string | null;
      /** Item tags */
      tags?: string[];
      /** Media's file name in the provider */
      fileName?: string | null;
  }
  enum MediaType {
      IMAGE = "IMAGE",
      VIDEO = "VIDEO"
  }
  interface StopSyncRequest {
      /** External Project ID */
      externalId: string;
  }
  interface StopSyncResponse {
      /** External Project ID */
      externalId?: string;
  }
  interface GetLoginRedirectableUrlRequest {
  }
  interface GetLoginRedirectableUrlResponse {
      url?: string;
  }
  interface SyncedProjectsProviderConfig {
      /** The Provider Name */
      providerName?: string;
      /** which project's fields are fully synced by the provider, and therefore will not be editable through Wix Portfolio project page. */
      projectSyncedFields?: string[];
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
  interface GetProjectsOptions {
      /** Filter Designs by pages. Designs are sorted */
      paging?: CursorPaging;
  }
  interface SyncProjectOptions {
      /** if need to get the next items page that just asked for sync */
      itemsPaging?: CursorPaging;
  }
  
  function unauthenticated$2(data: UserUnauthorizedError): BusinessError<UserUnauthorizedError>;
  function dataNotReady$1(data: DataNotReady): BusinessError<DataNotReady>;
  function rateLimitExceeded$2(data: RateLimitExceeded): BusinessError<RateLimitExceeded>;
  
  namespace getProjectsSpiErrors_d {
    export {
      unauthenticated$2 as unauthenticated,
      dataNotReady$1 as dataNotReady,
      rateLimitExceeded$2 as rateLimitExceeded,
    };
  }
  
  function unauthenticated$1(data: UserUnauthorizedError): BusinessError<UserUnauthorizedError>;
  function dataNotReady(data: DataNotReady): BusinessError<DataNotReady>;
  function rateLimitExceeded$1(data: RateLimitExceeded): BusinessError<RateLimitExceeded>;
  
  const syncProjectSpiErrors_d_dataNotReady: typeof dataNotReady;
  namespace syncProjectSpiErrors_d {
    export {
      unauthenticated$1 as unauthenticated,
      syncProjectSpiErrors_d_dataNotReady as dataNotReady,
      rateLimitExceeded$1 as rateLimitExceeded,
    };
  }
  
  function unauthenticated(data: UserUnauthorizedError): BusinessError<UserUnauthorizedError>;
  function rateLimitExceeded(data: RateLimitExceeded): BusinessError<RateLimitExceeded>;
  
  const stopSyncSpiErrors_d_unauthenticated: typeof unauthenticated;
  const stopSyncSpiErrors_d_rateLimitExceeded: typeof rateLimitExceeded;
  namespace stopSyncSpiErrors_d {
    export {
      stopSyncSpiErrors_d_unauthenticated as unauthenticated,
      stopSyncSpiErrors_d_rateLimitExceeded as rateLimitExceeded,
    };
  }
  
  namespace spiErrorHelpers_d {
    export {
      getProjectsSpiErrors_d as getProjects,
      syncProjectSpiErrors_d as syncProject,
      stopSyncSpiErrors_d as stopSync,
    };
  }
  
  export { BusinessError, Context, CursorPaging, Cursors, DataNotReady, GetLoginRedirectableUrlRequest, GetLoginRedirectableUrlResponse, GetProjectsOptions, GetProjectsRequest, GetProjectsResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, Item, MediaType, PagingMetadataV2, Project, RateLimitExceeded, StopSyncRequest, StopSyncResponse, SyncProjectOptions, SyncProjectRequest, SyncProjectResponse, SyncedProjectsProviderConfig, UserUnauthorizedError, spiErrorHelpers_d as errorHelpers };
}
