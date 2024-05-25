declare module "wix-authentication-management" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** OAuthApp is the main entity of OAuthAppService */
  interface OAuthApp {
      /**
       * OAuthApp ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the time this OAuthApp was created
       * @readonly
       */
      _createdDate?: Date;
      /** OAuthApp name */
      name?: string | null;
      /** OAuthApp description */
      description?: string | null;
      /**
       * App Secret;
       * @readonly
       */
      secret?: string | null;
      /** list of valid domains for callback URLs from wix pages */
      allowedDomains?: string[];
      /** login url to automatically redirect users to from wix pages */
      loginUrl?: string | null;
  }
  interface CreateOAuthAppRequest {
      /** OAuthApp to be created */
      oAuthApp: OAuthApp;
  }
  interface CreateOAuthAppResponse {
      /** The created OAuthApp */
      oAuthApp?: OAuthApp;
  }
  interface GetOAuthAppRequest {
      /** Id of the OAuthApp to retrieve */
      oAuthAppId: string;
  }
  interface GetOAuthAppResponse {
      /** The retrieved OAuthApp */
      oAuthApp?: OAuthApp;
  }
  interface UpdateOAuthAppRequest {
      /** OAuthApp to be updated, may be partial */
      oAuthApp: OAuthApp;
      /** Explicit list of fields to update */
      mask: string[];
  }
  interface UpdateOAuthAppResponse {
      /** The updated OAuthApp */
      oAuthApp?: OAuthApp;
  }
  interface DeleteOAuthAppRequest {
      /** Id of the OAuthApp to delete */
      oAuthAppId: string;
      /** The revision of the OAuthApp */
      revision?: string;
  }
  interface DeleteOAuthAppResponse {
  }
  interface QueryOAuthAppRequest {
      /** WQL expression */
      query: QueryV2;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
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
  interface QueryOAuthAppResponse {
      /** The retrieved OAuthApps */
      oAuthApps?: OAuthApp[];
      /** Paging metadata */
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
  /**
   * Creates a new OAuthApp
   * @param oAuthApp - OAuthApp to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField oAuthApp
   * @requiredField oAuthApp.name
   * @returns The created OAuthApp
   */
  function createOAuthApp(oAuthApp: OAuthApp): Promise<OAuthApp>;
  /**
   * Get a OAuthApp by id
   * @param oAuthAppId - Id of the OAuthApp to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField oAuthAppId
   * @returns The retrieved OAuthApp
   */
  function getOAuthApp(oAuthAppId: string): Promise<OAuthApp>;
  /**
   * Update a OAuthApp, supports partial update.
   * Updatable fields:
   * name
   * description
   * allowed_domain
   * login_url
   * @param _id - OAuthApp ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField oAuthApp
   * @requiredField options
   * @requiredField options.mask
   * @returns The updated OAuthApp
   */
  function updateOAuthApp(_id: string | null, oAuthApp: UpdateOAuthApp, options: UpdateOAuthAppOptions): Promise<OAuthApp>;
  interface UpdateOAuthApp {
      /**
       * OAuthApp ID
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the time this OAuthApp was created
       * @readonly
       */
      _createdDate?: Date;
      /** OAuthApp name */
      name?: string | null;
      /** OAuthApp description */
      description?: string | null;
      /**
       * App Secret;
       * @readonly
       */
      secret?: string | null;
      /** list of valid domains for callback URLs from wix pages */
      allowedDomains?: string[];
      /** login url to automatically redirect users to from wix pages */
      loginUrl?: string | null;
  }
  interface UpdateOAuthAppOptions {
      /** Explicit list of fields to update */
      mask: string[];
  }
  /**
   * Delete a OAuthApp
   * @param oAuthAppId - Id of the OAuthApp to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField oAuthAppId
   */
  function deleteOAuthApp(oAuthAppId: string, options?: DeleteOAuthAppOptions): Promise<void>;
  interface DeleteOAuthAppOptions {
      /** The revision of the OAuthApp */
      revision?: string;
  }
  /**
   * Query OAuthApps using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   */
  function queryOAuthApp(): OAuthAppsQueryBuilder;
  interface QueryOffsetResult {
      currentPage: number;
      totalPages: number;
      totalCount: number;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface OAuthAppsQueryResult extends QueryOffsetResult {
      items: OAuthApp[];
      query: OAuthAppsQueryBuilder;
      next: () => Promise<OAuthAppsQueryResult>;
      prev: () => Promise<OAuthAppsQueryResult>;
  }
  interface OAuthAppsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: string, value: any) => OAuthAppsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: string[]) => OAuthAppsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: string[]) => OAuthAppsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => OAuthAppsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => OAuthAppsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<OAuthAppsQueryResult>;
  }
  
  const headlessV1OAuthApp_universal_d___debug: typeof __debug;
  type headlessV1OAuthApp_universal_d_OAuthApp = OAuthApp;
  type headlessV1OAuthApp_universal_d_CreateOAuthAppRequest = CreateOAuthAppRequest;
  type headlessV1OAuthApp_universal_d_CreateOAuthAppResponse = CreateOAuthAppResponse;
  type headlessV1OAuthApp_universal_d_GetOAuthAppRequest = GetOAuthAppRequest;
  type headlessV1OAuthApp_universal_d_GetOAuthAppResponse = GetOAuthAppResponse;
  type headlessV1OAuthApp_universal_d_UpdateOAuthAppRequest = UpdateOAuthAppRequest;
  type headlessV1OAuthApp_universal_d_UpdateOAuthAppResponse = UpdateOAuthAppResponse;
  type headlessV1OAuthApp_universal_d_DeleteOAuthAppRequest = DeleteOAuthAppRequest;
  type headlessV1OAuthApp_universal_d_DeleteOAuthAppResponse = DeleteOAuthAppResponse;
  type headlessV1OAuthApp_universal_d_QueryOAuthAppRequest = QueryOAuthAppRequest;
  type headlessV1OAuthApp_universal_d_QueryV2 = QueryV2;
  type headlessV1OAuthApp_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type headlessV1OAuthApp_universal_d_Sorting = Sorting;
  type headlessV1OAuthApp_universal_d_SortOrder = SortOrder;
  const headlessV1OAuthApp_universal_d_SortOrder: typeof SortOrder;
  type headlessV1OAuthApp_universal_d_Paging = Paging;
  type headlessV1OAuthApp_universal_d_CursorPaging = CursorPaging;
  type headlessV1OAuthApp_universal_d_QueryOAuthAppResponse = QueryOAuthAppResponse;
  type headlessV1OAuthApp_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type headlessV1OAuthApp_universal_d_Cursors = Cursors;
  const headlessV1OAuthApp_universal_d_createOAuthApp: typeof createOAuthApp;
  const headlessV1OAuthApp_universal_d_getOAuthApp: typeof getOAuthApp;
  const headlessV1OAuthApp_universal_d_updateOAuthApp: typeof updateOAuthApp;
  type headlessV1OAuthApp_universal_d_UpdateOAuthApp = UpdateOAuthApp;
  type headlessV1OAuthApp_universal_d_UpdateOAuthAppOptions = UpdateOAuthAppOptions;
  const headlessV1OAuthApp_universal_d_deleteOAuthApp: typeof deleteOAuthApp;
  type headlessV1OAuthApp_universal_d_DeleteOAuthAppOptions = DeleteOAuthAppOptions;
  const headlessV1OAuthApp_universal_d_queryOAuthApp: typeof queryOAuthApp;
  type headlessV1OAuthApp_universal_d_OAuthAppsQueryResult = OAuthAppsQueryResult;
  type headlessV1OAuthApp_universal_d_OAuthAppsQueryBuilder = OAuthAppsQueryBuilder;
  namespace headlessV1OAuthApp_universal_d {
    export {
      headlessV1OAuthApp_universal_d___debug as __debug,
      headlessV1OAuthApp_universal_d_OAuthApp as OAuthApp,
      headlessV1OAuthApp_universal_d_CreateOAuthAppRequest as CreateOAuthAppRequest,
      headlessV1OAuthApp_universal_d_CreateOAuthAppResponse as CreateOAuthAppResponse,
      headlessV1OAuthApp_universal_d_GetOAuthAppRequest as GetOAuthAppRequest,
      headlessV1OAuthApp_universal_d_GetOAuthAppResponse as GetOAuthAppResponse,
      headlessV1OAuthApp_universal_d_UpdateOAuthAppRequest as UpdateOAuthAppRequest,
      headlessV1OAuthApp_universal_d_UpdateOAuthAppResponse as UpdateOAuthAppResponse,
      headlessV1OAuthApp_universal_d_DeleteOAuthAppRequest as DeleteOAuthAppRequest,
      headlessV1OAuthApp_universal_d_DeleteOAuthAppResponse as DeleteOAuthAppResponse,
      headlessV1OAuthApp_universal_d_QueryOAuthAppRequest as QueryOAuthAppRequest,
      headlessV1OAuthApp_universal_d_QueryV2 as QueryV2,
      headlessV1OAuthApp_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      headlessV1OAuthApp_universal_d_Sorting as Sorting,
      headlessV1OAuthApp_universal_d_SortOrder as SortOrder,
      headlessV1OAuthApp_universal_d_Paging as Paging,
      headlessV1OAuthApp_universal_d_CursorPaging as CursorPaging,
      headlessV1OAuthApp_universal_d_QueryOAuthAppResponse as QueryOAuthAppResponse,
      headlessV1OAuthApp_universal_d_PagingMetadataV2 as PagingMetadataV2,
      headlessV1OAuthApp_universal_d_Cursors as Cursors,
      headlessV1OAuthApp_universal_d_createOAuthApp as createOAuthApp,
      headlessV1OAuthApp_universal_d_getOAuthApp as getOAuthApp,
      headlessV1OAuthApp_universal_d_updateOAuthApp as updateOAuthApp,
      headlessV1OAuthApp_universal_d_UpdateOAuthApp as UpdateOAuthApp,
      headlessV1OAuthApp_universal_d_UpdateOAuthAppOptions as UpdateOAuthAppOptions,
      headlessV1OAuthApp_universal_d_deleteOAuthApp as deleteOAuthApp,
      headlessV1OAuthApp_universal_d_DeleteOAuthAppOptions as DeleteOAuthAppOptions,
      headlessV1OAuthApp_universal_d_queryOAuthApp as queryOAuthApp,
      headlessV1OAuthApp_universal_d_OAuthAppsQueryResult as OAuthAppsQueryResult,
      headlessV1OAuthApp_universal_d_OAuthAppsQueryBuilder as OAuthAppsQueryBuilder,
    };
  }
  
  export { headlessV1OAuthApp_universal_d as oAuthApps };
}
