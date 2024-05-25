declare module "wix-authentication-management.v2" {
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    /** An intermediary application that authorizes and authenticates an external client to access data on a Wix project or site. */
    interface OAuthApp {
        /**
         * ID of the OAuth app.
         * @readonly
         */
        _id?: string | null;
        /**
         * Date and time the OAuth app was created, in ISO 8601 format.
         * @readonly
         */
        _createdDate?: Date;
        /** Display name of the OAuth app, as it appears in the dashboard. */
        name?: string | null;
        /** Description of the OAuth app, as it appears in the dashboard. */
        description?: string | null;
        /**
         * Client secret for the OAuth app. **Note:** This is returned only when the OAuth app is created. It can't be retrieved later.
         * @readonly
         */
        secret?: string | null;
        /** External login URL to which users are redirected automatically to authenticate. If no login URL is specified, the user is redirected to Wix to authenticate. */
        loginUrl?: string | null;
        /**
         * List of URIs to which redirection from Wix is allowed after authentication.
         *
         * When a client redirects a user to Wix for authentication, the client provides a URI to redirect the user back to after the user has been authenticated.
         * Wix only redirects the user if the exact URI is contained in this array.
         */
        allowedRedirectUris?: string[];
        /**
         * List of domains to which redirection from Wix is allowed after processes other than authentication.
         *
         * When a client redirects a user to a Wix page (for example, for checkout), the client provides a URL to redirect the user back to.
         * Wix only redirects the user if the URL is in one of the specified domains.
         */
        allowedRedirectDomains?: string[];
    }
    interface CreateOAuthAppRequest {
        /** OAuth app to create. */
        oAuthApp: OAuthApp;
    }
    interface CreateOAuthAppResponse {
        /** Created OAuth app info. */
        oAuthApp?: OAuthApp;
    }
    interface GetOAuthAppRequest {
        /** ID of the OAuth app to retrieve. */
        oAuthAppId: string;
    }
    interface GetOAuthAppResponse {
        /** Retrieved OAuth app info. */
        oAuthApp?: OAuthApp;
    }
    interface UpdateOAuthAppRequest {
        /** Updated OAuth app details. May include some or all fields. */
        oAuthApp: OAuthApp;
        /** Explicit list of fields to update. Only fields listed are updated. */
        mask: string[];
    }
    interface UpdateOAuthAppResponse {
        /** Updated OAuth app info. */
        oAuthApp?: OAuthApp;
    }
    interface DeleteOAuthAppRequest {
        /** ID of the OAuth app to delete. */
        oAuthAppId: string;
    }
    interface DeleteOAuthAppResponse {
    }
    interface QueryOAuthAppsRequest {
        /** Query options. */
        query?: PlatformQuery;
    }
    interface PlatformQuery extends PlatformQueryPagingMethodOneOf {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging;
        /**
         * Filter object in the following format:
         * `"filter" : {
         * "fieldName1": "value1",
         * "fieldName2":{"$operator":"value2"}
         * }`
         * Example of operators: `$eq`
         */
        filter?: Record<string, any> | null;
        /**
         * Sort object in the following format:
         * `[{"fieldName":"name","order":"ASC"},{"fieldName":"created_date","order":"DESC"}]`
         */
        sort?: Sorting[];
    }
    /** @oneof */
    interface PlatformQueryPagingMethodOneOf {
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
    interface QueryOAuthAppsResponse {
        /** List of OAuth apps matching the query. */
        oAuthApps?: OAuthApp[];
        /** Paging metadata. */
        pagingMetadata?: PagingMetadataV2;
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
    }
    interface Cursors {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    /**
     * Creates a new OAuth app for a Wix Headless client.
     *
     *
     * An OAuth app authorizes an external client app or site, on any platform, to authenticate with a Wix site or project and manage its data.
     *
     * > **Note:** The OAuth app secret is returned only when creating the OAuth app, and can't be retrieved later. Store the secret in a secure location.
     * @param oAuthApp - OAuth app to create.
     * @public
     * @documentationMaturity preview
     * @requiredField oAuthApp
     * @requiredField oAuthApp.name
     * @returns Created OAuth app info.
     */
    function createOAuthApp(oAuthApp: OAuthApp): Promise<OAuthApp>;
    /**
     * Retrieves an OAuth app by ID.
     * @param oAuthAppId - ID of the OAuth app to retrieve.
     * @public
     * @documentationMaturity preview
     * @requiredField oAuthAppId
     * @returns Retrieved OAuth app info.
     */
    function getOAuthApp(oAuthAppId: string): Promise<OAuthApp>;
    /**
     * Updates an OAuth app.
     *
     *
     * Only fields provided in `mask` are updated.
     *
     * You can update the following fields:
     * + `name`
     * + `description`
     * + `allowedDomain`
     * + `loginUrl`
     * @param _id - ID of the OAuth app.
     * @param mask - Explicit list of fields to update. Only fields listed are updated.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField mask
     * @requiredField oAuthApp
     * @returns Updated OAuth app info.
     */
    function updateOAuthApp(_id: string | null, oAuthApp: UpdateOAuthApp, mask: string[]): Promise<OAuthApp>;
    interface UpdateOAuthApp {
        /**
         * ID of the OAuth app.
         * @readonly
         */
        _id?: string | null;
        /**
         * Date and time the OAuth app was created, in ISO 8601 format.
         * @readonly
         */
        _createdDate?: Date;
        /** Display name of the OAuth app, as it appears in the dashboard. */
        name?: string | null;
        /** Description of the OAuth app, as it appears in the dashboard. */
        description?: string | null;
        /**
         * Client secret for the OAuth app. **Note:** This is returned only when the OAuth app is created. It can't be retrieved later.
         * @readonly
         */
        secret?: string | null;
        /** External login URL to which users are redirected automatically to authenticate. If no login URL is specified, the user is redirected to Wix to authenticate. */
        loginUrl?: string | null;
        /**
         * List of URIs to which redirection from Wix is allowed after authentication.
         *
         * When a client redirects a user to Wix for authentication, the client provides a URI to redirect the user back to after the user has been authenticated.
         * Wix only redirects the user if the exact URI is contained in this array.
         */
        allowedRedirectUris?: string[];
        /**
         * List of domains to which redirection from Wix is allowed after processes other than authentication.
         *
         * When a client redirects a user to a Wix page (for example, for checkout), the client provides a URL to redirect the user back to.
         * Wix only redirects the user if the URL is in one of the specified domains.
         */
        allowedRedirectDomains?: string[];
    }
    /**
     * Retrieves a list of OAuth apps, given the provided paging, filtering, and sorting.
     *
     *
     * Query OAuth Apps runs with these defaults, which you can override:
     * + Results are sorted by `id` in descending order.
     * + `paging.offset` is `0`.
     * @public
     * @documentationMaturity preview
     */
    function queryOAuthApps(): OAuthAppsQueryBuilder;
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
        eq: (propertyName: "_id", value: any) => OAuthAppsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"_createdDate" | "name">) => OAuthAppsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"_createdDate" | "name">) => OAuthAppsQueryBuilder;
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
    type headlessV1OAuthApp_universal_d_QueryOAuthAppsRequest = QueryOAuthAppsRequest;
    type headlessV1OAuthApp_universal_d_PlatformQuery = PlatformQuery;
    type headlessV1OAuthApp_universal_d_PlatformQueryPagingMethodOneOf = PlatformQueryPagingMethodOneOf;
    type headlessV1OAuthApp_universal_d_Sorting = Sorting;
    type headlessV1OAuthApp_universal_d_SortOrder = SortOrder;
    const headlessV1OAuthApp_universal_d_SortOrder: typeof SortOrder;
    type headlessV1OAuthApp_universal_d_Paging = Paging;
    type headlessV1OAuthApp_universal_d_CursorPaging = CursorPaging;
    type headlessV1OAuthApp_universal_d_QueryOAuthAppsResponse = QueryOAuthAppsResponse;
    type headlessV1OAuthApp_universal_d_PagingMetadataV2 = PagingMetadataV2;
    type headlessV1OAuthApp_universal_d_Cursors = Cursors;
    const headlessV1OAuthApp_universal_d_createOAuthApp: typeof createOAuthApp;
    const headlessV1OAuthApp_universal_d_getOAuthApp: typeof getOAuthApp;
    const headlessV1OAuthApp_universal_d_updateOAuthApp: typeof updateOAuthApp;
    type headlessV1OAuthApp_universal_d_UpdateOAuthApp = UpdateOAuthApp;
    const headlessV1OAuthApp_universal_d_queryOAuthApps: typeof queryOAuthApps;
    type headlessV1OAuthApp_universal_d_OAuthAppsQueryResult = OAuthAppsQueryResult;
    type headlessV1OAuthApp_universal_d_OAuthAppsQueryBuilder = OAuthAppsQueryBuilder;
    namespace headlessV1OAuthApp_universal_d {
        export { headlessV1OAuthApp_universal_d___debug as __debug, headlessV1OAuthApp_universal_d_OAuthApp as OAuthApp, headlessV1OAuthApp_universal_d_CreateOAuthAppRequest as CreateOAuthAppRequest, headlessV1OAuthApp_universal_d_CreateOAuthAppResponse as CreateOAuthAppResponse, headlessV1OAuthApp_universal_d_GetOAuthAppRequest as GetOAuthAppRequest, headlessV1OAuthApp_universal_d_GetOAuthAppResponse as GetOAuthAppResponse, headlessV1OAuthApp_universal_d_UpdateOAuthAppRequest as UpdateOAuthAppRequest, headlessV1OAuthApp_universal_d_UpdateOAuthAppResponse as UpdateOAuthAppResponse, headlessV1OAuthApp_universal_d_DeleteOAuthAppRequest as DeleteOAuthAppRequest, headlessV1OAuthApp_universal_d_DeleteOAuthAppResponse as DeleteOAuthAppResponse, headlessV1OAuthApp_universal_d_QueryOAuthAppsRequest as QueryOAuthAppsRequest, headlessV1OAuthApp_universal_d_PlatformQuery as PlatformQuery, headlessV1OAuthApp_universal_d_PlatformQueryPagingMethodOneOf as PlatformQueryPagingMethodOneOf, headlessV1OAuthApp_universal_d_Sorting as Sorting, headlessV1OAuthApp_universal_d_SortOrder as SortOrder, headlessV1OAuthApp_universal_d_Paging as Paging, headlessV1OAuthApp_universal_d_CursorPaging as CursorPaging, headlessV1OAuthApp_universal_d_QueryOAuthAppsResponse as QueryOAuthAppsResponse, headlessV1OAuthApp_universal_d_PagingMetadataV2 as PagingMetadataV2, headlessV1OAuthApp_universal_d_Cursors as Cursors, headlessV1OAuthApp_universal_d_createOAuthApp as createOAuthApp, headlessV1OAuthApp_universal_d_getOAuthApp as getOAuthApp, headlessV1OAuthApp_universal_d_updateOAuthApp as updateOAuthApp, headlessV1OAuthApp_universal_d_UpdateOAuthApp as UpdateOAuthApp, headlessV1OAuthApp_universal_d_queryOAuthApps as queryOAuthApps, headlessV1OAuthApp_universal_d_OAuthAppsQueryResult as OAuthAppsQueryResult, headlessV1OAuthApp_universal_d_OAuthAppsQueryBuilder as OAuthAppsQueryBuilder, };
    }
    export { headlessV1OAuthApp_universal_d as oAuthApps };
}
