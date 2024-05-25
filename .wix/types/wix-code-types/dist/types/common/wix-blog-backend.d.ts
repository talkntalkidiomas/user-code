declare module "wix-blog-backend" {
    const __debug$2: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Category$1 {
        /**
         * Category ID.
         * @readonly
         */
        _id?: string;
        /** Category label. Displayed in the Category Menu. */
        label?: string;
        /**
         * Number of posts in the category.
         * @readonly
         */
        postCount?: number;
        /**
         * Category URL.
         *
         *
         * The `url` directs you to a page that lists every post with the specified category.
         *
         * @readonly
         */
        url?: string;
        /** Category description. */
        description?: string | null;
        /** Category title. */
        title?: string;
        /** Reserved for internal use. */
        coverMedia?: CoverMedia$1;
        /**
         * Reserved for internal use.
         * @readonly
         */
        oldRank?: number;
        /** Reserved for internal use. */
        rank?: number | null;
        /** Position of the category in the [Category Menu](https://support.wix.com/en/article/wix-blog-adding-and-customizing-a-category-menu). Categories with lower display position are displayed first. */
        displayPosition?: number | null;
        /**
         * ID of the category's translations when [Wix Multilingual](https://support.wix.com/en/article/wix-multilingual-translating-your-blog) is installed on a site. All translations of a single category will share the same `translationId`.
         * @readonly
         */
        translationId?: string | null;
        /**
         * Category Language.
         *
         * 2-letter language code in [ISO 639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
         */
        language?: string;
        /**
         * Part of a category's URL that refers to a specific category.
         *
         *
         * For example, `'https:/example.com/blog/category/{my-category-slug}'`.
         */
        slug?: string;
        /**
         * Reserved for internal use.
         * @readonly
         */
        internalId?: string | null;
        /** SEO data. */
        seoData?: SeoSchema$2;
        /** Category cover image. */
        coverImage?: string;
    }
    interface CoverMedia$1 extends CoverMediaMediaOneOf$1 {
        /**
         * Is cover media enabled.
         * Selected by user whether to display cover media on the feed
         */
        enabled?: boolean;
        /** Whether cover media is displayed. */
        displayed?: boolean;
        /** If `false`, the cover image is the first media item appearing in the content. */
        custom?: boolean;
        /** Image url. */
        image?: string;
        /** Video url. */
        video?: string;
    }
    /** @oneof */
    interface CoverMediaMediaOneOf$1 {
        /** Image url. */
        image?: string;
        /** Video url. */
        video?: string;
    }
    /**
     * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
     * The search engines use this information for ranking purposes, or to display snippets in the search results.
     * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
     */
    interface SeoSchema$2 {
        /** SEO tag information. */
        tags?: Tag$2[];
        /** SEO general settings. */
        settings?: Settings$2;
    }
    interface Keyword$2 {
        /** Keyword value */
        term?: string;
        /** Whether the keyword is the main focused */
        isMain?: boolean;
    }
    interface Tag$2 {
        /**
         * SEO tag type.
         *
         *
         * Supported values: `title`, `meta`, `script`, `link`.
         */
        type?: string;
        /**
         * A `{'key':'value'} pair object where each SEO tag property (`'name'`, `'content'`, `'rel'`, `'href'`) contains a value.
         * For example: `{'name': 'description', 'content': 'the description itself'}`.
         */
        props?: Record<string, any> | null;
        /** SEO tag meta data. For example, `{height: 300, width: 240}`. */
        meta?: Record<string, any> | null;
        /** SEO tag inner content. For example, `<title> inner content </title>`. */
        children?: string;
        /** Whether the tag is a custom tag. */
        custom?: boolean;
        /** Whether the tag is disabled. */
        disabled?: boolean;
    }
    interface Settings$2 {
        /**
         * Whether the auto redirects feature creating `301 redirects` on a slug change is enabled.
         *
         *
         * Default: enabled
         */
        preventAutoRedirect?: boolean;
        /** User-selected keyword terms for a specific page */
        keywords?: Keyword$2[];
    }
    interface InitialCategoriesCopied {
        /** Number of categories copied. */
        count?: number;
    }
    interface CreateCategoryRequest {
        /** Category info. */
        category: Category$1;
        /**
         * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the category’s base fields are returned.
         */
        fieldsets?: Field$2[];
    }
    enum Field$2 {
        UNKNOWN = "UNKNOWN",
        /** Includes Category url. */
        URL = "URL",
        /**
         * Includes internal id field.
         * Reserved for internal use
         */
        INTERNAL_ID = "INTERNAL_ID",
        /** Includes SEO data. */
        SEO = "SEO"
    }
    interface CreateCategoryResponse {
        /** Category info. */
        category?: Category$1;
    }
    interface BulkCreateCategoriesRequest {
        /** Categories to create. */
        categories: Category$1[];
        /** Whether to return the full created category entities in the response. */
        returnFullEntity?: boolean;
        /**
         * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the category’s base fields are returned.
         */
        fieldsets?: Field$2[];
    }
    interface BulkCreateCategoriesResponse {
        /** Categories created by bulk action. */
        results?: BulkCategoryResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface BulkCategoryResult {
        /** Bulk actions metadata for category. */
        itemMetadata?: ItemMetadata$1;
        /** Optional created category. */
        item?: Category$1;
    }
    interface ItemMetadata$1 {
        /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
        _id?: string | null;
        /** Index of the item within the request array. Allows for correlation between request and response items. */
        originalIndex?: number;
        /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
        success?: boolean;
        /** Details about the error in case of failure. */
        error?: ApplicationError$1;
    }
    interface ApplicationError$1 {
        /** Error code. */
        code?: string;
        /** Description of the error. */
        description?: string;
        /** Data related to the error. */
        data?: Record<string, any> | null;
    }
    interface BulkActionMetadata$1 {
        /** Number of items that were successfully processed. */
        totalSuccesses?: number;
        /** Number of items that couldn't be processed. */
        totalFailures?: number;
        /** Number of failures without details because detailed failure threshold was exceeded. */
        undetailedFailures?: number;
    }
    interface BulkUpdateCategoriesRequest {
        /** Categories to update. */
        categories?: MaskedCategory[];
        /** Whether to return the full created category entities in the response. */
        returnFullEntity?: boolean;
        /**
         * List of category fields to be included in the response if the entities are present.
         * Base default fieldset returns all core category properties (all properties that are not a supported fieldset value).
         * For example, when `URL` fieldset is selected, returned category will include the set of base properties and the category's preview url.
         */
        fieldsets?: Field$2[];
    }
    interface MaskedCategory {
        /** Category */
        category?: Category$1;
        /** Field mask of fields to update. */
        fieldMask?: string[];
    }
    interface BulkUpdateCategoriesResponse {
        /** Categories updated by bulk action. */
        results?: BulkCategoryResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface UpdateCategoryRequest {
        /** Category info. */
        category: Category$1;
        /** Field mask of fields to update. */
        fieldMask?: string[];
        /**
         * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the category’s base fields are returned.
         */
        fieldsets?: Field$2[];
    }
    interface UpdateCategoryResponse {
        /** Category info. */
        category?: Category$1;
    }
    interface GetCategoryRequest {
        /** Category ID. */
        categoryId: string;
        /**
         * __Deprecated.__ Use `fieldsets` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * List of category fields to be included in the response.
         */
        fieldsToInclude?: Field$2[];
        /**
         * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the category’s base fields are returned.
         */
        fieldsets?: Field$2[];
    }
    interface GetCategoryResponse {
        /** Category info. */
        category?: Category$1;
    }
    interface GetCategoryBySlugRequest {
        /** Slug of the category to retrieve. */
        slug: string;
        /**
         * __Deprecated.__ Use `fieldsets` instead.
         *
         * This parameter will be removed on June 30, 2023.
         * List of category fields to be included in the response.
         */
        fieldsToInclude?: Field$2[];
        /**
         * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the category’s base fields are returned.
         */
        fieldsets?: Field$2[];
    }
    interface GetCategoryBySlugResponse {
        /** Category info. */
        category?: Category$1;
    }
    interface ListCategoriesRequest {
        /** Pagination options. */
        paging?: BlogPaging$1;
        /**
         * __Deprecated.__ Use `fieldsets` instead.
         *
         * This parameter will be removed on June 30, 2023.
         *
         * List of category fields to be included in the response.
         */
        fieldsToInclude?: Field$2[];
        /**
         * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the category’s base fields are returned.
         */
        fieldsets?: Field$2[];
    }
    interface BlogPaging$1 {
        /** Number of categories to skip in the list. */
        offset?: number;
        /**
         * Number of items to return.
         *
         * Default: `50`
         *
         * Max: `100`
         */
        limit?: number;
        /** Pointer to the next or previous page in the list of results. */
        cursor?: string | null;
    }
    interface ListCategoriesResponse {
        /** List of categories. */
        categories?: Category$1[];
        /** Details on the paged set of results returned. */
        metaData?: MetaData$2;
    }
    interface MetaData$2 {
        /** Number of items returned in this response. */
        count?: number;
        /** Number of items skipped. */
        offset?: number;
        /** Total number of items that match the query. */
        total?: number;
        /** Pointer to the next or previous page in the list of results. */
        cursor?: string | null;
    }
    interface QueryCategoriesRequest {
        /**
         * __Deprecated.__ Use `query` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * Pagination options.
         */
        paging?: BlogPaging$1;
        /**
         * __Deprecated.__ Use `query` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * Filter object.
         */
        filter?: Record<string, any> | null;
        /**
         * __Deprecated.__ Use `query` instead.
         * This parameter will be removed on June 3, 2023.
         *
         * Sorting options.
         */
        sort?: Sorting$2[];
        /**
         * __Deprecated.__ Use `fieldsets` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * List of category fields to be included in the response.
         */
        fieldsToInclude?: Field$2[];
        /** Query options. */
        query?: PlatformQuery$2;
        /**
         * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the category’s base fields are returned.
         */
        fieldsets?: Field$2[];
    }
    interface Sorting$2 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$2;
    }
    enum SortOrder$2 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface PlatformQuery$2 extends PlatformQueryPagingMethodOneOf$2 {
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
        sort?: Sorting$2[];
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$2;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$2;
    }
    /** @oneof */
    interface PlatformQueryPagingMethodOneOf$2 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$2;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$2;
    }
    interface Paging$2 {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface CursorPaging$2 {
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
    interface QueryCategoriesResponse {
        /** List of categories. */
        categories?: Category$1[];
        /**
         * __Deprecated.__ Use `pagingMetadata` instead.
         * This property will be removed on June 30, 2023.
         *
         * Details on the paged set of results returned.
         */
        metaData?: MetaData$2;
        /** Details on the paged set of results returned. */
        pagingMetadata?: PagingMetadataV2$2;
    }
    interface PagingMetadataV2$2 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Offset that was requested. */
        offset?: number | null;
        /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
        total?: number | null;
        /** Flag that indicates the server failed to calculate the `total` field. */
        tooManyToCount?: boolean | null;
        /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
        cursors?: Cursors$2;
    }
    interface Cursors$2 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface DeleteCategoryRequest {
        /** Category ID. */
        categoryId: string;
    }
    interface DeleteCategoryResponse {
    }
    interface CreateCategoryOptions {
        /**
         * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the category’s base fields are returned.
         */
        fieldsets?: Field$2[];
    }
    interface BulkCreateCategoriesOptions {
        /** Whether to return the full created category entities in the response. */
        returnFullEntity?: boolean;
        /**
         * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the category’s base fields are returned.
         */
        fieldsets?: Field$2[];
    }
    interface BulkUpdateCategoriesOptions {
        /** Categories to update. */
        categories?: MaskedCategory[];
        /** Whether to return the full created category entities in the response. */
        returnFullEntity?: boolean;
        /**
         * List of category fields to be included in the response if the entities are present.
         * Base default fieldset returns all core category properties (all properties that are not a supported fieldset value).
         * For example, when `URL` fieldset is selected, returned category will include the set of base properties and the category's preview url.
         */
        fieldsets?: Field$2[];
    }
    interface UpdateCategory {
        /**
         * Category ID.
         * @readonly
         */
        _id?: string;
        /** Category label. Displayed in the Category Menu. */
        label?: string;
        /**
         * Number of posts in the category.
         * @readonly
         */
        postCount?: number;
        /**
         * Category URL.
         *
         *
         * The `url` directs you to a page that lists every post with the specified category.
         *
         * @readonly
         */
        url?: string;
        /** Category description. */
        description?: string | null;
        /** Category title. */
        title?: string;
        /** Reserved for internal use. */
        coverMedia?: CoverMedia$1;
        /**
         * Reserved for internal use.
         * @readonly
         */
        oldRank?: number;
        /** Reserved for internal use. */
        rank?: number | null;
        /** Position of the category in the [Category Menu](https://support.wix.com/en/article/wix-blog-adding-and-customizing-a-category-menu). Categories with lower display position are displayed first. */
        displayPosition?: number | null;
        /**
         * ID of the category's translations when [Wix Multilingual](https://support.wix.com/en/article/wix-multilingual-translating-your-blog) is installed on a site. All translations of a single category will share the same `translationId`.
         * @readonly
         */
        translationId?: string | null;
        /**
         * Category Language.
         *
         * 2-letter language code in [ISO 639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
         */
        language?: string;
        /**
         * Part of a category's URL that refers to a specific category.
         *
         *
         * For example, `'https:/example.com/blog/category/{my-category-slug}'`.
         */
        slug?: string;
        /**
         * Reserved for internal use.
         * @readonly
         */
        internalId?: string | null;
        /** SEO data. */
        seoData?: SeoSchema$2;
        /** Category cover image. */
        coverImage?: string;
    }
    interface UpdateCategoryOptions {
        /** Field mask of fields to update. */
        fieldMask?: string[];
        /**
         * List of additional category fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the category’s base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the category’s base fields are returned.
         */
        fieldsets?: Field$2[];
    }
    /**
     * Gets a category by the specified ID.
     *
     *
     * The `getCategory()` function returns a Promise that resolves to a category whose ID matches the specified ID.
     *
     * @param categoryId - Category ID.
     * @public
     * @documentationMaturity preview
     * @requiredField categoryId
     * @param options - Options specifying which fields to return.
     */
    function getCategory(categoryId: string, options?: GetCategoryOptions): Promise<GetCategoryResponse>;
    interface GetCategoryOptions {
        /**
         * List of category fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         * `"SEO"` and `"URL"`.
         */
        fieldsets?: Field$2[];
    }
    /**
     * Gets a category by the specified slug.
     *
     *
     * The `getCategoryBySlug()` function returns a Promise that resolves to a category whose slug matches the specified slug.
     *
     * The `slug` is the end of a category's URL that refers to a specific category. For example, if a category's URL is `https://example.com/blog/category/{my-category-slug}`, the slug is `my-post-slug`. The slug is case-sensitive string that is generally derived from the category's `label`, unless specified otherwise.
     *
     * @public
     * @documentationMaturity preview
     * @requiredField GetCategoryBySlugRequest
     * @requiredField slug
     * @param slug - Slug of the category to retrieve.
     *
     * The end of a category's URL. For example, `'https:/example.com/blog/category/{my-category-slug}'`. Case sensitive and generally based on the category `label` if not specified.
     * @param options - Options specifying which fields to return.
     */
    function getCategoryBySlug(slug: string, options?: GetCategoryBySlugOptions): Promise<GetCategoryBySlugResponse>;
    interface GetCategoryBySlugOptions {
        /**
         * List of category fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         * `"SEO"` and `"URL"`.
         */
        fieldsets?: Field$2[];
    }
    /**
     * Retrieves a list of categories.
     *
     *
     * The `listCategories()` function returns a Promise that resolves to a list of up to 100 categories per language in order of their `displayPosition` starting with `0`. The `displayPosition` is the position in which the categories are displayed in the Category Menu page. By default, categories get added to the bottom of the Category Menu with a `displayPosition` of `-1`.
     * @public
     * @documentationMaturity preview
     * @param options - Filter and paging options.
     */
    function listCategories(options?: ListCategoriesOptions): Promise<ListCategoriesResponse>;
    interface ListCategoriesOptions {
        /** Pagination options. */
        paging?: BlogPaging$1;
        /**
         * List of category fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         * `"SEO"` and `"URL"`.
         */
        fieldsets?: Field$2[];
    }
    /**
     * Creates a query to retrieve a list of categories.
     *
     *
     * The `queryCategories()` function builds a query to retrieve a list of up to 100 categories per language, and returns a [`CategoriesQueryBuilder`](https://www.wix.com/velo/reference/wix-blog-backend/categories/categoriesquerybuilder) object.
     *
     * The returned object contains the query definition, which is typically used to run the query using the [`find()`](https://www.wix.com/velo/reference/wix-blog-backend/categories/categoriesquerybuilder/find) function.
     *
     * You can refine the query by chaining `CategoriesQueryBuilder` functions to the query. `CategoriesQueryBuilder` functions enable you to sort, filter, and control the results that `queryCategories` returns. Any functions chained to the `queryCategories()` function are applied in the order that they are called.
     *
     * `queryCategories()` runs with these `CategoriesQueryBuilder` defaults, which you can override.
     * - [`limit(100)`](https://www.wix.com/velo/reference/wix-blog-backend/categories/categoriesquerybuilder/limit)
     * - [`ascending(displayPosition)`](https://www.wix.com/velo/reference/wix-blog-backend/categories/categoriesquerybuilder/ascending)
     *
     * The following `CategoriesQueryBuilder` functions are supported for `queryCategories()`. For a full description of the `Categories` object, see the object returned for the [`items`](https://www.wix.com/velo/reference/wix-blog-backend/categories/categoriesqueryresult/items) property in [`CategoriesQueryResult`](https://www.wix.com/velo/reference/wix-blog-backend/categories/categoriesqueryresult).
     * @public
     * @documentationMaturity preview
     * @param options - Options specifying which fields to return.
     */
    function queryCategories(options?: QueryCategoriesOptions): CategoriesQueryBuilder;
    interface QueryCategoriesOptions {
        /**
         * List of category fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         * `"SEO"` and `"URL"`.
         */
        fieldsets?: Field$2[] | undefined;
    }
    interface QueryOffsetResult$2 {
        currentPage: number;
        totalPages: number;
        totalCount: number;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface CategoriesQueryResult extends QueryOffsetResult$2 {
        items: Category$1[];
        query: CategoriesQueryBuilder;
        next: () => Promise<CategoriesQueryResult>;
        prev: () => Promise<CategoriesQueryResult>;
    }
    interface CategoriesQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: string, value: any) => CategoriesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: string, value: any) => CategoriesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ge: (propertyName: string, value: any) => CategoriesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: string, value: any) => CategoriesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: string, value: any) => CategoriesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: string, value: any) => CategoriesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: string, value: string) => CategoriesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasSome: (propertyName: string, value: any[]) => CategoriesQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: string[]) => CategoriesQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: string[]) => CategoriesQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => CategoriesQueryBuilder;
        /** @param skip - Number of items to skip in the query results before returning the results.
         * @documentationMaturity preview
         */
        skip: (skip: number) => CategoriesQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<CategoriesQueryResult>;
    }
    type blogV3Category_universal_d_InitialCategoriesCopied = InitialCategoriesCopied;
    type blogV3Category_universal_d_CreateCategoryRequest = CreateCategoryRequest;
    type blogV3Category_universal_d_CreateCategoryResponse = CreateCategoryResponse;
    type blogV3Category_universal_d_BulkCreateCategoriesRequest = BulkCreateCategoriesRequest;
    type blogV3Category_universal_d_BulkCreateCategoriesResponse = BulkCreateCategoriesResponse;
    type blogV3Category_universal_d_BulkCategoryResult = BulkCategoryResult;
    type blogV3Category_universal_d_BulkUpdateCategoriesRequest = BulkUpdateCategoriesRequest;
    type blogV3Category_universal_d_MaskedCategory = MaskedCategory;
    type blogV3Category_universal_d_BulkUpdateCategoriesResponse = BulkUpdateCategoriesResponse;
    type blogV3Category_universal_d_UpdateCategoryRequest = UpdateCategoryRequest;
    type blogV3Category_universal_d_UpdateCategoryResponse = UpdateCategoryResponse;
    type blogV3Category_universal_d_GetCategoryRequest = GetCategoryRequest;
    type blogV3Category_universal_d_GetCategoryResponse = GetCategoryResponse;
    type blogV3Category_universal_d_GetCategoryBySlugRequest = GetCategoryBySlugRequest;
    type blogV3Category_universal_d_GetCategoryBySlugResponse = GetCategoryBySlugResponse;
    type blogV3Category_universal_d_ListCategoriesRequest = ListCategoriesRequest;
    type blogV3Category_universal_d_ListCategoriesResponse = ListCategoriesResponse;
    type blogV3Category_universal_d_QueryCategoriesRequest = QueryCategoriesRequest;
    type blogV3Category_universal_d_QueryCategoriesResponse = QueryCategoriesResponse;
    type blogV3Category_universal_d_DeleteCategoryRequest = DeleteCategoryRequest;
    type blogV3Category_universal_d_DeleteCategoryResponse = DeleteCategoryResponse;
    type blogV3Category_universal_d_CreateCategoryOptions = CreateCategoryOptions;
    type blogV3Category_universal_d_BulkCreateCategoriesOptions = BulkCreateCategoriesOptions;
    type blogV3Category_universal_d_BulkUpdateCategoriesOptions = BulkUpdateCategoriesOptions;
    type blogV3Category_universal_d_UpdateCategory = UpdateCategory;
    type blogV3Category_universal_d_UpdateCategoryOptions = UpdateCategoryOptions;
    const blogV3Category_universal_d_getCategory: typeof getCategory;
    type blogV3Category_universal_d_GetCategoryOptions = GetCategoryOptions;
    const blogV3Category_universal_d_getCategoryBySlug: typeof getCategoryBySlug;
    type blogV3Category_universal_d_GetCategoryBySlugOptions = GetCategoryBySlugOptions;
    const blogV3Category_universal_d_listCategories: typeof listCategories;
    type blogV3Category_universal_d_ListCategoriesOptions = ListCategoriesOptions;
    const blogV3Category_universal_d_queryCategories: typeof queryCategories;
    type blogV3Category_universal_d_QueryCategoriesOptions = QueryCategoriesOptions;
    type blogV3Category_universal_d_CategoriesQueryResult = CategoriesQueryResult;
    type blogV3Category_universal_d_CategoriesQueryBuilder = CategoriesQueryBuilder;
    namespace blogV3Category_universal_d {
        export { __debug$2 as __debug, Category$1 as Category, CoverMedia$1 as CoverMedia, CoverMediaMediaOneOf$1 as CoverMediaMediaOneOf, SeoSchema$2 as SeoSchema, Keyword$2 as Keyword, Tag$2 as Tag, Settings$2 as Settings, blogV3Category_universal_d_InitialCategoriesCopied as InitialCategoriesCopied, blogV3Category_universal_d_CreateCategoryRequest as CreateCategoryRequest, Field$2 as Field, blogV3Category_universal_d_CreateCategoryResponse as CreateCategoryResponse, blogV3Category_universal_d_BulkCreateCategoriesRequest as BulkCreateCategoriesRequest, blogV3Category_universal_d_BulkCreateCategoriesResponse as BulkCreateCategoriesResponse, blogV3Category_universal_d_BulkCategoryResult as BulkCategoryResult, ItemMetadata$1 as ItemMetadata, ApplicationError$1 as ApplicationError, BulkActionMetadata$1 as BulkActionMetadata, blogV3Category_universal_d_BulkUpdateCategoriesRequest as BulkUpdateCategoriesRequest, blogV3Category_universal_d_MaskedCategory as MaskedCategory, blogV3Category_universal_d_BulkUpdateCategoriesResponse as BulkUpdateCategoriesResponse, blogV3Category_universal_d_UpdateCategoryRequest as UpdateCategoryRequest, blogV3Category_universal_d_UpdateCategoryResponse as UpdateCategoryResponse, blogV3Category_universal_d_GetCategoryRequest as GetCategoryRequest, blogV3Category_universal_d_GetCategoryResponse as GetCategoryResponse, blogV3Category_universal_d_GetCategoryBySlugRequest as GetCategoryBySlugRequest, blogV3Category_universal_d_GetCategoryBySlugResponse as GetCategoryBySlugResponse, blogV3Category_universal_d_ListCategoriesRequest as ListCategoriesRequest, BlogPaging$1 as BlogPaging, blogV3Category_universal_d_ListCategoriesResponse as ListCategoriesResponse, MetaData$2 as MetaData, blogV3Category_universal_d_QueryCategoriesRequest as QueryCategoriesRequest, Sorting$2 as Sorting, SortOrder$2 as SortOrder, PlatformQuery$2 as PlatformQuery, PlatformQueryPagingMethodOneOf$2 as PlatformQueryPagingMethodOneOf, Paging$2 as Paging, CursorPaging$2 as CursorPaging, blogV3Category_universal_d_QueryCategoriesResponse as QueryCategoriesResponse, PagingMetadataV2$2 as PagingMetadataV2, Cursors$2 as Cursors, blogV3Category_universal_d_DeleteCategoryRequest as DeleteCategoryRequest, blogV3Category_universal_d_DeleteCategoryResponse as DeleteCategoryResponse, blogV3Category_universal_d_CreateCategoryOptions as CreateCategoryOptions, blogV3Category_universal_d_BulkCreateCategoriesOptions as BulkCreateCategoriesOptions, blogV3Category_universal_d_BulkUpdateCategoriesOptions as BulkUpdateCategoriesOptions, blogV3Category_universal_d_UpdateCategory as UpdateCategory, blogV3Category_universal_d_UpdateCategoryOptions as UpdateCategoryOptions, blogV3Category_universal_d_getCategory as getCategory, blogV3Category_universal_d_GetCategoryOptions as GetCategoryOptions, blogV3Category_universal_d_getCategoryBySlug as getCategoryBySlug, blogV3Category_universal_d_GetCategoryBySlugOptions as GetCategoryBySlugOptions, blogV3Category_universal_d_listCategories as listCategories, blogV3Category_universal_d_ListCategoriesOptions as ListCategoriesOptions, blogV3Category_universal_d_queryCategories as queryCategories, blogV3Category_universal_d_QueryCategoriesOptions as QueryCategoriesOptions, blogV3Category_universal_d_CategoriesQueryResult as CategoriesQueryResult, blogV3Category_universal_d_CategoriesQueryBuilder as CategoriesQueryBuilder, };
    }
    const __debug$1: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Post {
        /**
         * Post ID.
         * @readonly
         */
        _id?: string;
        /** Post title. */
        title?: string;
        /**
         * Post excerpt.
         * Can be selected by a site contributor. By default, it is extracted from the content text's first characters.
         *
         * Max: 140 characters
         */
        excerpt?: string;
        /**
         * The post's content in plain text.
         * @readonly
         */
        contentText?: string | null;
        /** Date the post was first published. */
        firstPublishedDate?: Date;
        /**
         * Date the post was last published.
         * @readonly
         */
        lastPublishedDate?: Date;
        /** Post URL. */
        url?: string;
        /**
         * Part of a post's URL that refers to a specific post.
         *
         *
         * For example, `'https:/example.com/posts/my-post-slug'`.
         *
         */
        slug?: string;
        /** Whether the post is marked as featured. */
        featured?: boolean;
        /** Whether the post is pinned. If `true`, the post is placed at the top of the post list. */
        pinned?: boolean;
        /**
         * [Category IDs](https://www.wix.com/velo/reference/wix-blog-backend/categories) of the post.
         *
         */
        categoryIds?: string[];
        /** Reserved for internal use. */
        coverMedia?: CoverMedia;
        /**
         * Post owner's [member ID](https://www.wix.com/velo/reference/wix-members-backend).
         *
         */
        memberId?: string;
        /**
         * Hashtags in the post.
         * @readonly
         */
        hashtags?: string[];
        /** Whether commenting on the post is enabled. */
        commentingEnabled?: boolean;
        /** Estimated reading time. */
        minutesToRead?: number;
        /** Image placed at the top of the blog page. Only displays on mobile devices.  */
        heroImage?: string;
        /**
         * IDs of [tags](https://www.wix.com/velo/reference/wix-blog-backend/tags) the post is tagged with.
         *
         * @readonly
         */
        tagIds?: string[];
        /**
         * IDs of posts related to the post.
         * @readonly
         */
        relatedPostIds?: string[];
        /**
         * Pricing plan IDs.
         *
         *
         * If a post is assigned to a specific pricing plan.
         * @readonly
         */
        pricingPlanIds?: string[];
        /** ID of the post's translations when [Wix Multilingual](https://support.wix.com/en/article/wix-multilingual-translating-your-blog) is installed on a site. All translations of a single post will share the same `translationId`. */
        translationId?: string | null;
        /**
         * Language the post is written in.
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string | null;
        /** SEO data. */
        seoData?: SeoSchema$1;
        /**
         * Reserved for internal use.
         * @readonly
         */
        content?: string | null;
        /**
         * Post owner's [contact ID](https://www.wix.com/velo/reference/wix-crm-backend/contacts).
         *
         */
        contactId?: string | null;
        /**
         * Post rich content
         * @readonly
         */
        richContent?: RichContent;
        /** Reserved for internal use. */
        contentId?: string | null;
        /**
         * Reserved for internal use.
         * @readonly
         */
        mostRecentContributorId?: string | null;
        /**
         * Post moderation details.
         *
         *
         * Only relevant to posts submitted by [guest writers](https://support.wix.com/en/article/wix-blog-moderating-blog-posts-from-your-guest-writers). Guest writers have the ability to write posts but not publish them. These posts can be rejected or approved for publishing by a blog editor or site owner.
         * @readonly
         */
        moderationDetails?: ModerationDetails;
        /** Post cover media. */
        media?: BlogMedia;
        /**
         * Reserved for internal use.
         * @readonly
         */
        internalId?: string | null;
        /**
         * Reserved for internal use.
         * @readonly
         */
        internalCategoryIds?: string[];
        /**
         * Reserved for internal use.
         * @readonly
         */
        internalRelatedPostIds?: string[];
    }
    interface CoverMedia extends CoverMediaMediaOneOf {
        /**
         * Is cover media enabled.
         * Selected by user whether to display cover media on the feed
         */
        enabled?: boolean;
        /** Whether cover media is displayed. */
        displayed?: boolean;
        /**
         * Whether the cover media is custom.
         *
         * `false` if the cover media is the first image or video in the post. `true` if set to some other image or video.
         */
        custom?: boolean;
        /** Image url. */
        image?: string;
        /** Video url. */
        video?: string;
    }
    /** @oneof */
    interface CoverMediaMediaOneOf {
        /** Image url. */
        image?: string;
        /** Video url. */
        video?: string;
    }
    interface PostCountInfo {
        /**
         * Total number of post comments
         * @readonly
         */
        comments?: number;
        /**
         * Total number of post likes
         * @readonly
         */
        likes?: number;
        /**
         * Total number of post views
         * @readonly
         */
        views?: number;
    }
    interface Metrics {
        /**
         * Total number of post comments.
         * @readonly
         */
        comments?: number;
        /**
         * Total number of post likes.
         * @readonly
         */
        likes?: number;
        /**
         * Total number of post views.
         * @readonly
         */
        views?: number;
    }
    /**
     * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
     * The search engines use this information for ranking purposes, or to display snippets in the search results.
     * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
     */
    interface SeoSchema$1 {
        /** SEO tags information. */
        tags?: Tag$1[];
        /** SEO general settings. */
        settings?: Settings$1;
    }
    interface Keyword$1 {
        /** Keyword value */
        term?: string;
        /** Whether the keyword is the main focused */
        isMain?: boolean;
    }
    interface Tag$1 {
        /**
         * SEO tag type.
         *
         *
         * Supported values: `title`, `meta`, `script`, `link`.
         */
        type?: string;
        /**
         * A `{'key':'value'} pair object where each SEO tag property (`'name'`, `'content'`, `'rel'`, `'href'`) contains a value.
         * For example: `{'name': 'description', 'content': 'the description itself'}`.
         */
        props?: Record<string, any> | null;
        /** SEO tag meta data. For example, `{height: 300, width: 240}`. */
        meta?: Record<string, any> | null;
        /** SEO tag inner content. For example, `<title> inner content </title>`. */
        children?: string;
        /** Whether the tag is a custom tag. */
        custom?: boolean;
        /** Whether the tag is disabled. */
        disabled?: boolean;
    }
    interface Settings$1 {
        /**
         * Whether the auto redirects feature creating `301 redirects` on a slug change is enabled.
         *
         *
         * Default: enabled
         */
        preventAutoRedirect?: boolean;
        /** User-selected keyword terms for a specific page */
        keywords?: Keyword$1[];
    }
    interface RichContent {
        /** Node objects representing a rich content document. */
        nodes?: Node[];
        /** Object metadata. */
        metadata?: Metadata;
        /** Global styling for header, paragraph, block quote, and code block nodes in the object. */
        documentStyle?: DocumentStyle;
    }
    interface Node extends NodeDataOneOf {
        /** Node type. Use `APP_EMBED` for nodes that embed content from other Wix apps. Use `EMBED` to embed content in [oEmbed](https://oembed.com/) format. */
        type?: NodeType;
        /** Node ID. */
        _id?: string;
        /** A list of child nodes. */
        nodes?: Node[];
        /** Padding and background color styling for the node. */
        style?: NodeStyle;
        /** Data for a button node. */
        buttonData?: ButtonData;
        /** Data for a code block node. */
        codeBlockData?: CodeBlockData;
        /** Data for a divider node. */
        dividerData?: DividerData;
        /** Data for a file node. */
        fileData?: FileData;
        /** Data for a gallery node. */
        galleryData?: GalleryData;
        /** Data for a GIF node. */
        gifData?: GIFData;
        /** Data for a heading node. */
        headingData?: HeadingData;
        /** Data for an embedded HTML node. */
        htmlData?: HTMLData;
        /** Data for an image node. */
        imageData?: ImageData;
        /** Data for a link preview node. */
        linkPreviewData?: LinkPreviewData;
        /** Data for a map node. */
        mapData?: MapData;
        /** Data for a paragraph node. */
        paragraphData?: ParagraphData;
        /** Data for a poll node. */
        pollData?: PollData;
        /** Data for a text node. Used to apply decorations to text. */
        textData?: TextData;
        /** Data for an app embed node. */
        appEmbedData?: AppEmbedData;
        /** Data for a video node. */
        videoData?: VideoData;
        /** Data for an oEmbed node. */
        embedData?: EmbedData;
        /** Data for a collapsible list node. */
        collapsibleListData?: CollapsibleListData;
        /** Data for a table node. */
        tableData?: TableData;
        /** Data for a table cell node. */
        tableCellData?: TableCellData;
        /** Data for a custon external node. */
        externalData?: Record<string, any> | null;
        /** Data for an audio node. */
        audioData?: AudioData;
        /** Data for an ordered list node. */
        orderedListData?: OrderedListData;
        /** Data for a bulleted list node. */
        bulletedListData?: BulletedListData;
        /** Data for a block quote node. */
        blockquoteData?: BlockquoteData;
    }
    /** @oneof */
    interface NodeDataOneOf {
        /** Data for a button node. */
        buttonData?: ButtonData;
        /** Data for a code block node. */
        codeBlockData?: CodeBlockData;
        /** Data for a divider node. */
        dividerData?: DividerData;
        /** Data for a file node. */
        fileData?: FileData;
        /** Data for a gallery node. */
        galleryData?: GalleryData;
        /** Data for a GIF node. */
        gifData?: GIFData;
        /** Data for a heading node. */
        headingData?: HeadingData;
        /** Data for an embedded HTML node. */
        htmlData?: HTMLData;
        /** Data for an image node. */
        imageData?: ImageData;
        /** Data for a link preview node. */
        linkPreviewData?: LinkPreviewData;
        /** Data for a map node. */
        mapData?: MapData;
        /** Data for a paragraph node. */
        paragraphData?: ParagraphData;
        /** Data for a poll node. */
        pollData?: PollData;
        /** Data for a text node. Used to apply decorations to text. */
        textData?: TextData;
        /** Data for an app embed node. */
        appEmbedData?: AppEmbedData;
        /** Data for a video node. */
        videoData?: VideoData;
        /** Data for an oEmbed node. */
        embedData?: EmbedData;
        /** Data for a collapsible list node. */
        collapsibleListData?: CollapsibleListData;
        /** Data for a table node. */
        tableData?: TableData;
        /** Data for a table cell node. */
        tableCellData?: TableCellData;
        /** Data for a custon external node. */
        externalData?: Record<string, any> | null;
        /** Data for an audio node. */
        audioData?: AudioData;
        /** Data for an ordered list node. */
        orderedListData?: OrderedListData;
        /** Data for a bulleted list node. */
        bulletedListData?: BulletedListData;
        /** Data for a block quote node. */
        blockquoteData?: BlockquoteData;
    }
    enum NodeType {
        PARAGRAPH = "PARAGRAPH",
        TEXT = "TEXT",
        HEADING = "HEADING",
        BULLETED_LIST = "BULLETED_LIST",
        ORDERED_LIST = "ORDERED_LIST",
        LIST_ITEM = "LIST_ITEM",
        BLOCKQUOTE = "BLOCKQUOTE",
        CODE_BLOCK = "CODE_BLOCK",
        VIDEO = "VIDEO",
        DIVIDER = "DIVIDER",
        FILE = "FILE",
        GALLERY = "GALLERY",
        GIF = "GIF",
        HTML = "HTML",
        IMAGE = "IMAGE",
        LINK_PREVIEW = "LINK_PREVIEW",
        MAP = "MAP",
        POLL = "POLL",
        APP_EMBED = "APP_EMBED",
        BUTTON = "BUTTON",
        COLLAPSIBLE_LIST = "COLLAPSIBLE_LIST",
        TABLE = "TABLE",
        EMBED = "EMBED",
        COLLAPSIBLE_ITEM = "COLLAPSIBLE_ITEM",
        COLLAPSIBLE_ITEM_TITLE = "COLLAPSIBLE_ITEM_TITLE",
        COLLAPSIBLE_ITEM_BODY = "COLLAPSIBLE_ITEM_BODY",
        TABLE_CELL = "TABLE_CELL",
        TABLE_ROW = "TABLE_ROW",
        EXTERNAL = "EXTERNAL",
        AUDIO = "AUDIO"
    }
    interface NodeStyle {
        /** The top padding value in pixels. */
        paddingTop?: string | null;
        /** The bottom padding value in pixels. */
        paddingBottom?: string | null;
        /** The background color as a hexadecimal value. */
        backgroundColor?: string | null;
    }
    interface ButtonData {
        /** Styling for the button's container. */
        containerData?: PluginContainerData;
        /** The button type. */
        type?: Type;
        /** Styling for the button. */
        styles?: Styles;
        /** The text to display on the button. */
        text?: string | null;
        /** Button link details. */
        link?: Link;
    }
    interface Border {
        /** Border width in pixels. */
        width?: number | null;
        /** Border radius in pixels. */
        radius?: number | null;
    }
    interface Colors {
        /** The text color as a hexadecimal value. */
        text?: string | null;
        /** The border color as a hexadecimal value. */
        border?: string | null;
        /** The background color as a hexadecimal value. */
        background?: string | null;
    }
    interface PluginContainerData {
        /** The width of the node when it's displayed. */
        width?: PluginContainerDataWidth;
        /** The node's alignment within its container. */
        alignment?: PluginContainerDataAlignment;
        /** Spoiler cover settings for the node. */
        spoiler?: Spoiler;
        /** The height of the node when it's displayed. */
        height?: Height;
        /** Sets whether text should wrap around this node when it's displayed. If `textWrap` is `false`, the node takes up the width of its container. */
        textWrap?: boolean | null;
    }
    enum WidthType {
        /** Width matches the content width */
        CONTENT = "CONTENT",
        /** Small Width */
        SMALL = "SMALL",
        /** Width will match the original asset width */
        ORIGINAL = "ORIGINAL",
        /** coast-to-coast display */
        FULL_WIDTH = "FULL_WIDTH"
    }
    interface PluginContainerDataWidth extends PluginContainerDataWidthDataOneOf {
        /**
         * One of the following predefined width options:
         * `CONTENT`: The width of the container matches the content width.
         * `SMALL`: Small width.
         * `ORIGINAL`: The width of the container matches the original asset width.
         * `FULL_WIDTH`: Full width.
         */
        size?: WidthType;
        /** A custom width value in pixels. */
        custom?: string | null;
    }
    /** @oneof */
    interface PluginContainerDataWidthDataOneOf {
        /**
         * One of the following predefined width options:
         * `CONTENT`: The width of the container matches the content width.
         * `SMALL`: Small width.
         * `ORIGINAL`: The width of the container matches the original asset width.
         * `FULL_WIDTH`: Full width.
         */
        size?: WidthType;
        /** A custom width value in pixels. */
        custom?: string | null;
    }
    enum PluginContainerDataAlignment {
        /** Center Alignment */
        CENTER = "CENTER",
        /** Left Alignment */
        LEFT = "LEFT",
        /** Right Alignment */
        RIGHT = "RIGHT"
    }
    interface Spoiler {
        /** Sets whether the spoiler cover is enabled for this node. */
        enabled?: boolean | null;
        /** The description displayed on top of the spoiler cover. */
        description?: string | null;
        /** The text for the button used to remove the spoiler cover. */
        buttonText?: string | null;
    }
    interface Height {
        /** A custom height value in pixels. */
        custom?: string | null;
    }
    enum Type {
        /** Regular link button */
        LINK = "LINK",
        /** Triggers custom action that is defined in plugin configuration by the consumer */
        ACTION = "ACTION"
    }
    interface Styles {
        /** Border attributes. */
        border?: Border;
        /** Color attributes. */
        colors?: Colors;
    }
    interface Link extends LinkDataOneOf {
        /**
         * he HTML `target` attribute value for the link. This property defines where the linked document opens as follows:
         * `SELF` - Default. Opens the linked document in the same frame as the link.
         * `BLANK` - Opens the linked document in a new browser tab or window.
         * `PARENT` - Opens the linked document in the link's parent frame.
         * `TOP` - Opens the linked document in the full body of the link's browser tab or window.
         */
        target?: Target;
        /** The HTML `rel` attribute value for the link. This object specifies the relationship between the current document and the linked document. */
        rel?: Rel;
        /** A serialized object used for a custom or external link panel. */
        customData?: string | null;
        /** The absolute URL for the linked document. */
        url?: string;
        /** The target node's ID. Used for linking to another node in this object. */
        anchor?: string;
    }
    /** @oneof */
    interface LinkDataOneOf {
        /** The absolute URL for the linked document. */
        url?: string;
        /** The target node's ID. Used for linking to another node in this object. */
        anchor?: string;
    }
    enum Target {
        /** Opens the linked document in the same frame as it was clicked (this is default) */
        SELF = "SELF",
        /** Opens the linked document in a new window or tab */
        BLANK = "BLANK",
        /** Opens the linked document in the parent frame */
        PARENT = "PARENT",
        /** Opens the linked document in the full body of the window */
        TOP = "TOP"
    }
    interface Rel {
        /** Indicates to search engine crawlers not to follow the link. */
        nofollow?: boolean | null;
        /** Indicates to search engine crawlers that the link is a paid placement such as sponsored content or an advertisement. */
        sponsored?: boolean | null;
        /** Indicates that this link is user-generated content and isn't necessarily trusted or endorsed by the page’s author. For example, a link in a fourm post. */
        ugc?: boolean | null;
        /** Indicates that this link protect referral information from being passed to the target website. */
        noreferrer?: boolean | null;
    }
    interface CodeBlockData {
        /** Styling for the code block's text. */
        textStyle?: TextStyle;
    }
    interface TextStyle {
        /** Text alignment. Defaults to `AUTO`. */
        textAlignment?: TextAlignment;
        /** A CSS `line-height` value for the text as a unitless ratio. */
        lineHeight?: string | null;
    }
    enum TextAlignment {
        /** browser default, eqivalent to `initial` */
        AUTO = "AUTO",
        /** Left align */
        LEFT = "LEFT",
        /** Right align */
        RIGHT = "RIGHT",
        /** Center align */
        CENTER = "CENTER",
        /** Text is spaced to line up its left and right edges to the left and right edges of the line box, except for the last line */
        JUSTIFY = "JUSTIFY"
    }
    interface DividerData {
        /** Styling for the divider's container. */
        containerData?: PluginContainerData;
        /** Divider line style. */
        lineStyle?: LineStyle;
        /** Divider width. */
        width?: Width;
        /** Divider alignment. */
        alignment?: Alignment;
    }
    enum LineStyle {
        /** Single Line */
        SINGLE = "SINGLE",
        /** Double Line */
        DOUBLE = "DOUBLE",
        /** Dashed Line */
        DASHED = "DASHED",
        /** Dotted Line */
        DOTTED = "DOTTED"
    }
    enum Width {
        /** Large line */
        LARGE = "LARGE",
        /** Medium line */
        MEDIUM = "MEDIUM",
        /** Small line */
        SMALL = "SMALL"
    }
    enum Alignment {
        /** Center alignment */
        CENTER = "CENTER",
        /** Left alignment */
        LEFT = "LEFT",
        /** Right alignment */
        RIGHT = "RIGHT"
    }
    interface FileData {
        /** Styling for the file's container. */
        containerData?: PluginContainerData;
        /** The source for the file's data. */
        src?: FileSource;
        /** File name. */
        name?: string | null;
        /** File type. */
        type?: string | null;
        /** File size in KB. */
        size?: number | null;
        /** Settings for PDF files. */
        pdfSettings?: PDFSettings;
        /** File MIME type. */
        mimeType?: string | null;
        /** File path. */
        path?: string | null;
    }
    enum ViewMode {
        /** No PDF view */
        NONE = "NONE",
        /** Full PDF view */
        FULL = "FULL",
        /** Mini PDF view */
        MINI = "MINI"
    }
    interface FileSource extends FileSourceDataOneOf {
        /** Indicates whether the file's source is private. */
        private?: boolean | null;
        /** The absolute URL for the file's source. */
        url?: string | null;
        /** Custom ID. Use `id` instead. */
        custom?: string | null;
        /** An ID that's resolved to a URL by a resolver function. */
        _id?: string | null;
    }
    /** @oneof */
    interface FileSourceDataOneOf {
        /** The absolute URL for the file's source. */
        url?: string | null;
        /** Custom ID. Use `id` instead. */
        custom?: string | null;
        /** An ID that's resolved to a URL by a resolver function. */
        _id?: string | null;
    }
    interface PDFSettings {
        /**
         * PDF view mode. One of the following:
         * `NONE` : The PDF isn't displayed.
         * `FULL` : A full page view of the PDF is displayed.
         * `MINI` : A mini view of the PDF is displayed.
         */
        viewMode?: ViewMode;
        /** Sets whether the PDF download button is disabled. */
        disableDownload?: boolean | null;
        /** Sets whether the PDF print button is disabled. */
        disablePrint?: boolean | null;
    }
    interface GalleryData {
        /** Styling for the gallery's container. */
        containerData?: PluginContainerData;
        /** The items in the gallery. */
        items?: Item[];
        /** Options for defining the gallery's appearance. */
        options?: GalleryOptions;
        /** Sets whether the gallery's expand button is disabled. */
        disableExpand?: boolean | null;
        /** Sets whether the gallery's download button is disabled. */
        disableDownload?: boolean | null;
    }
    interface Media {
        /** The source for the media's data. */
        src?: FileSource;
        /** Media width in pixels. */
        width?: number | null;
        /** Media height in pixels. */
        height?: number | null;
        /** Media duration in seconds. Only relevant for audio and video files. */
        duration?: number | null;
    }
    interface Image {
        /** Image file details. */
        media?: Media;
        /** Link details for images that are links. */
        link?: Link;
    }
    interface Video {
        /** Video file details. */
        media?: Media;
        /** Video thumbnail file details. */
        thumbnail?: Media;
    }
    interface Item extends ItemDataOneOf {
        /** Item title. */
        title?: string | null;
        /** Item's alternative text. */
        altText?: string | null;
        /** An image item. */
        image?: Image;
        /** A video item. */
        video?: Video;
    }
    /** @oneof */
    interface ItemDataOneOf {
        /** An image item. */
        image?: Image;
        /** A video item. */
        video?: Video;
    }
    interface GalleryOptions {
        /** Gallery layout. */
        layout?: Layout;
        /** Styling for gallery items. */
        item?: ItemStyle;
        /** Styling for gallery thumbnail images. */
        thumbnails?: Thumbnails;
    }
    enum LayoutType {
        /** Collage type */
        COLLAGE = "COLLAGE",
        /** Masonry type */
        MASONRY = "MASONRY",
        /** Grid type */
        GRID = "GRID",
        /** Thumbnail type */
        THUMBNAIL = "THUMBNAIL",
        /** Slider type */
        SLIDER = "SLIDER",
        /** Slideshow type */
        SLIDESHOW = "SLIDESHOW",
        /** Panorama type */
        PANORAMA = "PANORAMA",
        /** Column type */
        COLUMN = "COLUMN",
        /** Magic type */
        MAGIC = "MAGIC",
        /** Fullsize images type */
        FULLSIZE = "FULLSIZE"
    }
    enum Orientation {
        /** Rows Orientation */
        ROWS = "ROWS",
        /** Columns Orientation */
        COLUMNS = "COLUMNS"
    }
    enum Crop {
        /** Crop to fill */
        FILL = "FILL",
        /** Crop to fit */
        FIT = "FIT"
    }
    enum ThumbnailsAlignment {
        /** Top alignment */
        TOP = "TOP",
        /** Right alignment */
        RIGHT = "RIGHT",
        /** Bottom alignment */
        BOTTOM = "BOTTOM",
        /** Left alignment */
        LEFT = "LEFT",
        /** No thumbnail */
        NONE = "NONE"
    }
    interface Layout {
        /** Gallery layout type. */
        type?: LayoutType;
        /** Sets whether horizontal scroll is enabled. */
        horizontalScroll?: boolean | null;
        /** Gallery orientation. */
        orientation?: Orientation;
        /** The number of columns to display on full size screens. */
        numberOfColumns?: number | null;
        /** The number of columns to display on mobile screens. */
        mobileNumberOfColumns?: number | null;
    }
    interface ItemStyle {
        /** Desirable dimension for each item in pixels (behvaior changes according to gallery type) */
        targetSize?: number | null;
        /** Item ratio */
        ratio?: number | null;
        /** Sets how item images are cropped. */
        crop?: Crop;
        /** The spacing between items in pixels. */
        spacing?: number | null;
    }
    interface Thumbnails {
        /** Thumbnail alignment. */
        placement?: ThumbnailsAlignment;
        /** Spacing between thumbnails in pixels. */
        spacing?: number | null;
    }
    interface GIFData {
        /** Styling for the GIF's container. */
        containerData?: PluginContainerData;
        /** The source of the full size GIF. */
        original?: GIF;
        /** The source of the downsized GIF. */
        downsized?: GIF;
        /** Height in pixels. */
        height?: number;
        /** Width in pixels. */
        width?: number;
    }
    interface GIF {
        /** GIF format URL. */
        gif?: string | null;
        /** MP4 format URL. */
        mp4?: string | null;
        /** Thumbnail URL. */
        still?: string | null;
    }
    interface HeadingData {
        /** Heading level from 1-6. */
        level?: number;
        /** Styling for the heading text. */
        textStyle?: TextStyle;
        /** Indentation level from 1-6. */
        indentation?: number | null;
    }
    interface HTMLData extends HTMLDataDataOneOf {
        /** Styling for the HTML node's container. */
        containerData?: PluginContainerData;
        /** The type of HTML code. */
        source?: Source;
        /** The URL for the HTML code for the node. */
        url?: string;
        /** The HTML code for the node. */
        html?: string;
        /** Whether this is an AdSense element. Use `source` instead. */
        isAdsense?: boolean | null;
    }
    /** @oneof */
    interface HTMLDataDataOneOf {
        /** The URL for the HTML code for the node. */
        url?: string;
        /** The HTML code for the node. */
        html?: string;
        /** Whether this is an AdSense element. Use `source` instead. */
        isAdsense?: boolean | null;
    }
    enum Source {
        HTML = "HTML",
        ADSENSE = "ADSENSE"
    }
    interface ImageData {
        /** Styling for the image's container. */
        containerData?: PluginContainerData;
        /** Image file details. */
        image?: Media;
        /** Link details for images that are links. */
        link?: Link;
        /** Sets whether the image expands to full screen when clicked. */
        disableExpand?: boolean | null;
        /** Image's alternative text. */
        altText?: string | null;
        /** Image caption. */
        caption?: string | null;
        /** Sets whether the image's download button is disabled. */
        disableDownload?: boolean | null;
    }
    interface LinkPreviewData {
        /** Styling for the link preview's container. */
        containerData?: PluginContainerData;
        /** Link details. */
        link?: Link;
        /** Preview title. */
        title?: string | null;
        /** Preview thumbnail URL. */
        thumbnailUrl?: string | null;
        /** Preview description. */
        description?: string | null;
        /** The preview content as HTML. */
        html?: string | null;
    }
    interface MapData {
        /** Styling for the map's container. */
        containerData?: PluginContainerData;
        /** Map settings. */
        mapSettings?: MapSettings;
    }
    interface MapSettings {
        /** The address to display on the map. */
        address?: string | null;
        /** Sets whether the map is draggable. */
        draggable?: boolean | null;
        /** Sets whether the location marker is visible. */
        marker?: boolean | null;
        /** Sets whether street view control is enabled. */
        streetViewControl?: boolean | null;
        /** Sets whether zoom control is enabled. */
        zoomControl?: boolean | null;
        /** Location latitude. */
        lat?: number | null;
        /** Location longitude. */
        lng?: number | null;
        /** Location name. */
        locationName?: string | null;
        /** Sets whether view mode control is enabled. */
        viewModeControl?: boolean | null;
        /** Initial zoom value. */
        initialZoom?: number | null;
        /** Map type. `HYBRID` is a combination of the `ROADMAP` and `SATELLITE` map types. */
        mapType?: MapType;
    }
    enum MapType {
        /** Roadmap map type */
        ROADMAP = "ROADMAP",
        /** Satellite map type */
        SATELITE = "SATELITE",
        /** Hybrid map type */
        HYBRID = "HYBRID",
        /** Terrain map type */
        TERRAIN = "TERRAIN"
    }
    interface ParagraphData {
        /** Styling for the paragraph text. */
        textStyle?: TextStyle;
        /** Indentation level from 1-6. */
        indentation?: number | null;
    }
    interface PollData {
        /** Styling for the poll's container. */
        containerData?: PluginContainerData;
        /** Poll data. */
        poll?: Poll;
        /** Layout settings for the poll and voting options. */
        layout?: PollDataLayout;
        /** Styling for the poll and voting options. */
        design?: Design;
    }
    enum ViewRole {
        /** Only Poll creator can view the results */
        CREATOR = "CREATOR",
        /** Anyone who voted can see the results */
        VOTERS = "VOTERS",
        /** Anyone can see the results, even if one didn't vote */
        EVERYONE = "EVERYONE"
    }
    enum VoteRole {
        /** Logged in member */
        SITE_MEMBERS = "SITE_MEMBERS",
        /** Anyone */
        ALL = "ALL"
    }
    interface Permissions {
        /** Sets who can view the poll results. */
        view?: ViewRole;
        /** Sets who can vote. */
        vote?: VoteRole;
        /** Sets whether one voter can vote multiple times. */
        allowMultipleVotes?: boolean | null;
    }
    interface Option {
        /** Option ID. */
        _id?: string | null;
        /** Option title. */
        title?: string | null;
        /** The image displayed with the option. */
        image?: Media;
    }
    interface PollSettings {
        /** Permissions settings for voting. */
        permissions?: Permissions;
        /** Sets whether voters are displayed in the vote results. */
        showVoters?: boolean | null;
        /** Sets whether the vote count is displayed. */
        showVotesCount?: boolean | null;
    }
    enum PollLayoutType {
        /** List */
        LIST = "LIST",
        /** Grid */
        GRID = "GRID"
    }
    enum PollLayoutDirection {
        /** Left-to-right */
        LTR = "LTR",
        /** Right-to-left */
        RTL = "RTL"
    }
    interface PollLayout {
        /** The layout for displaying the voting options. */
        type?: PollLayoutType;
        /** The direction of the text displayed in the voting options. Text can be displayed either right-to-left or left-to-right. */
        direction?: PollLayoutDirection;
        /** Sets whether to display the main poll image. */
        enableImage?: boolean | null;
    }
    interface OptionLayout {
        /** Sets whether to display option images. */
        enableImage?: boolean | null;
    }
    enum BackgroundType {
        /** Color background type */
        COLOR = "COLOR",
        /** Image background type */
        IMAGE = "IMAGE",
        /** Gradiant background type */
        GRADIENT = "GRADIENT"
    }
    interface Gradient {
        /** The gradient angle in degrees. */
        angle?: number | null;
        /** The start color as a hexademical value. */
        startColor?: string | null;
        /** The end color as a hexademical value. */
        lastColor?: string | null;
    }
    interface Background extends BackgroundBackgroundOneOf {
        /** Background type. For each option, include the relevant details. */
        type?: BackgroundType;
        /** The background color as a hexademical value. */
        color?: string | null;
        /** An image to use for the background. */
        image?: Media;
        /** Details for a gradient background. */
        gradient?: Gradient;
    }
    /** @oneof */
    interface BackgroundBackgroundOneOf {
        /** The background color as a hexademical value. */
        color?: string | null;
        /** An image to use for the background. */
        image?: Media;
        /** Details for a gradient background. */
        gradient?: Gradient;
    }
    interface PollDesign {
        /** Background styling. */
        background?: Background;
        /** Border radius in pixels. */
        borderRadius?: number | null;
    }
    interface OptionDesign {
        /** Border radius in pixels. */
        borderRadius?: number | null;
    }
    interface Poll {
        /** Poll ID. */
        _id?: string | null;
        /** Poll title. */
        title?: string | null;
        /** Poll creator ID. */
        creatorId?: string | null;
        /** Main poll image. */
        image?: Media;
        /** Voting options. */
        options?: Option[];
        /** The poll's permissions and display settings. */
        settings?: PollSettings;
    }
    interface PollDataLayout {
        /** Poll layout settings. */
        poll?: PollLayout;
        /** Voting otpions layout settings. */
        options?: OptionLayout;
    }
    interface Design {
        /** Styling for the poll. */
        poll?: PollDesign;
        /** Styling for voting options. */
        options?: OptionDesign;
    }
    interface TextData {
        /** The text to apply decorations to. */
        text?: string;
        /** The decorations to apply. */
        decorations?: Decoration[];
    }
    /** Adds appearence changes to text */
    interface Decoration extends DecorationDataOneOf {
        /** The type of decoration to apply. */
        type?: DecorationType;
        /** Data for an anchor link decoration. */
        anchorData?: AnchorData;
        /** Data for a color decoration. */
        colorData?: ColorData;
        /** Data for an external link decoration. */
        linkData?: LinkData;
        /** Data for a mention decoration. */
        mentionData?: MentionData;
        /** Data for a font size decoration. */
        fontSizeData?: FontSizeData;
        /** Font weight for a bold decoration. */
        fontWeightValue?: number | null;
        /** Data for an italic decoration. */
        italicData?: boolean | null;
        /** Data for an underline decoration. */
        underlineData?: boolean | null;
    }
    /** @oneof */
    interface DecorationDataOneOf {
        /** Data for an anchor link decoration. */
        anchorData?: AnchorData;
        /** Data for a color decoration. */
        colorData?: ColorData;
        /** Data for an external link decoration. */
        linkData?: LinkData;
        /** Data for a mention decoration. */
        mentionData?: MentionData;
        /** Data for a font size decoration. */
        fontSizeData?: FontSizeData;
        /** Font weight for a bold decoration. */
        fontWeightValue?: number | null;
        /** Data for an italic decoration. */
        italicData?: boolean | null;
        /** Data for an underline decoration. */
        underlineData?: boolean | null;
    }
    enum DecorationType {
        BOLD = "BOLD",
        ITALIC = "ITALIC",
        UNDERLINE = "UNDERLINE",
        SPOILER = "SPOILER",
        ANCHOR = "ANCHOR",
        MENTION = "MENTION",
        LINK = "LINK",
        COLOR = "COLOR",
        FONT_SIZE = "FONT_SIZE",
        EXTERNAL = "EXTERNAL"
    }
    interface AnchorData {
        /** The target node's ID. */
        anchor?: string;
    }
    interface ColorData {
        /** The text's background color as a hexadecimal value. */
        background?: string | null;
        /** The text's foreground color as a hexadecimal value. */
        foreground?: string | null;
    }
    interface LinkData {
        /** Link details. */
        link?: Link;
    }
    interface MentionData {
        /** The mentioned user's name. */
        name?: string;
        /** The version of the user's name that appears after the `@` character in the mention. */
        slug?: string;
        /** Mentioned user's ID. */
        _id?: string | null;
    }
    interface FontSizeData {
        /** The units used for the font size. */
        unit?: FontType;
        /** Font size value. */
        value?: number | null;
    }
    enum FontType {
        PX = "PX",
        EM = "EM"
    }
    interface AppEmbedData extends AppEmbedDataAppDataOneOf {
        /** The type of Wix App content being embedded. */
        type?: AppType;
        /** The ID of the embedded content. */
        itemId?: string | null;
        /** The name of the embedded content. */
        name?: string | null;
        /** Deprecated: Use `image` instead. */
        imageSrc?: string | null;
        /** The URL for the embedded content. */
        url?: string | null;
        /** An image for the embedded content. */
        image?: Media;
        /** Data for embedded Wix Bookings content. */
        bookingData?: BookingData;
        /** Data for embedded Wix Events content. */
        eventData?: EventData;
    }
    /** @oneof */
    interface AppEmbedDataAppDataOneOf {
        /** Data for embedded Wix Bookings content. */
        bookingData?: BookingData;
        /** Data for embedded Wix Events content. */
        eventData?: EventData;
    }
    enum AppType {
        PRODUCT = "PRODUCT",
        EVENT = "EVENT",
        BOOKING = "BOOKING"
    }
    interface BookingData {
        /** Booking duration in minutes. */
        durations?: string | null;
    }
    interface EventData {
        /** Event schedule. */
        scheduling?: string | null;
        /** Event location. */
        location?: string | null;
    }
    interface VideoData {
        /** Styling for the video's container. */
        containerData?: PluginContainerData;
        /** Video details. */
        video?: Media;
        /** Video thumbnail details. */
        thumbnail?: Media;
        /** Sets whether the video's download button is disabled. */
        disableDownload?: boolean | null;
        /** Video title. */
        title?: string | null;
        /** Video options. */
        options?: PlaybackOptions;
    }
    interface PlaybackOptions {
        /** Sets whether the media will automatically start playing. */
        autoPlay?: boolean | null;
        /** Sets whether media's will be looped. */
        playInLoop?: boolean | null;
        /** Sets whether media's controls will be shown. */
        showControls?: boolean | null;
    }
    interface EmbedData {
        /** Styling for the oEmbed node's container. */
        containerData?: PluginContainerData;
        /** An [oEmbed](https://www.oembed.com) object. */
        oembed?: Oembed;
        /** Origin asset source. */
        src?: string | null;
    }
    interface Oembed {
        /** The resource type. */
        type?: string | null;
        /** The width of the resource specified in the `url` property in pixels. */
        width?: number | null;
        /** The height of the resource specified in the `url` property in pixels. */
        height?: number | null;
        /** Resource title. */
        title?: string | null;
        /** The source URL for the resource. */
        url?: string | null;
        /** HTML for embedding a video player. The HTML should have no padding or margins. */
        html?: string | null;
        /** The name of the author or owner of the resource. */
        authorName?: string | null;
        /** The URL for the author or owner of the resource. */
        authorUrl?: string | null;
        /** The name of the resource provider. */
        providerName?: string | null;
        /** The URL for the resource provider. */
        providerUrl?: string | null;
        /** The URL for a thumbnail image for the resource. If this property is defined, `thumbnailWidth` and `thumbnailHeight` must also be defined. */
        thumbnailUrl?: string | null;
        /** The width of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailHeight` must also be defined. */
        thumbnailWidth?: string | null;
        /** The height of the resource's thumbnail image. If this property is defined, `thumbnailUrl` and `thumbnailWidth`must also be defined. */
        thumbnailHeight?: string | null;
        /** The URL for an embedded viedo. */
        videoUrl?: string | null;
        /** The oEmbed version number.  This value must be `1.0`. */
        version?: string | null;
    }
    interface CollapsibleListData {
        /** Styling for the collapsible list's container. */
        containerData?: PluginContainerData;
        /** If `true`, only one item can be expanded at a time. */
        expandOnlyOne?: boolean | null;
        /** Sets which items are expanded when the page loads. */
        initialExpandedItems?: InitialExpandedItems;
        /** The direction of the text in the list. Either left-to-right or right-to-left. */
        direction?: Direction;
        /** If `true`, The collapsible item will appear in search results as an FAQ. */
        isQapageData?: boolean | null;
    }
    enum InitialExpandedItems {
        /** First item will be expended initally */
        FIRST = "FIRST",
        /** All items will expended initally */
        ALL = "ALL",
        /** All items collapsed initally */
        NONE = "NONE"
    }
    enum Direction {
        /** Left-to-right */
        LTR = "LTR",
        /** Right-to-left */
        RTL = "RTL"
    }
    interface TableData {
        /** Styling for the table's container. */
        containerData?: PluginContainerData;
        /** The table's dimensions. */
        dimensions?: Dimensions;
        /** Deprecated: Use `rowHeader` and `columnHeader` instead. */
        header?: boolean | null;
        /** Sets whether the table's first row is a header. */
        rowHeader?: boolean | null;
        /** Sets whether the table's first column is a header. */
        columnHeader?: boolean | null;
    }
    interface Dimensions {
        /** An array representing relative width of each column in relation to the other columns. */
        colsWidthRatio?: number[];
        /** An array representing the height of each row in pixels. */
        rowsHeight?: number[];
        /** An array representing the minimum width of each column in pixels. */
        colsMinWidth?: number[];
    }
    interface TableCellData {
        /** Styling for the cell's background color and text alignment. */
        cellStyle?: CellStyle;
        /** The cell's border colors. */
        borderColors?: BorderColors;
    }
    enum VerticalAlignment {
        /** Top alignment */
        TOP = "TOP",
        /** Middle alignment */
        MIDDLE = "MIDDLE",
        /** Bottom alignment */
        BOTTOM = "BOTTOM"
    }
    interface CellStyle {
        /** Vertical alignment for the cell's text. */
        verticalAlignment?: VerticalAlignment;
        /** Cell background color as a hexadecimal value. */
        backgroundColor?: string | null;
    }
    interface BorderColors {
        /** Left border color as a hexadecimal value. */
        left?: string | null;
        /** Right border color as a hexadecimal value. */
        right?: string | null;
        /** Top border color as a hexadecimal value. */
        top?: string | null;
        /** Bottom border color as a hexadecimal value. */
        bottom?: string | null;
    }
    /**
     * `NullValue` is a singleton enumeration to represent the null value for the
     * `Value` type union.
     *
     * The JSON representation for `NullValue` is JSON `null`.
     */
    enum NullValue {
        /** Null value. */
        NULL_VALUE = "NULL_VALUE"
    }
    /**
     * `ListValue` is a wrapper around a repeated field of values.
     *
     * The JSON representation for `ListValue` is JSON array.
     */
    interface ListValue {
        /** Repeated field of dynamically typed values. */
        values?: any[];
    }
    interface AudioData {
        /** Styling for the audio node's container. */
        containerData?: PluginContainerData;
        /** Audio file details. */
        audio?: Media;
        /** Sets whether the audio node's download button is disabled. */
        disableDownload?: boolean | null;
        /** Cover image. */
        coverImage?: Media;
        /** Track name. */
        name?: string | null;
        /** Author name. */
        authorName?: string | null;
        /** An HTML version of the audio node. */
        html?: string | null;
    }
    interface OrderedListData {
        /** Indentation level. */
        indentation?: number;
    }
    interface BulletedListData {
        /** Indentation level. */
        indentation?: number;
    }
    interface BlockquoteData {
        /** Indentation level. */
        indentation?: number;
    }
    interface Metadata {
        /** Schema version. */
        version?: number;
        /**
         * When the object was created.
         * @readonly
         */
        createdTimestamp?: Date;
        /** When the object was most recently updated. */
        updatedTimestamp?: Date;
        /** Object ID. */
        _id?: string | null;
    }
    interface DocumentStyle {
        /** Styling for H1 nodes. */
        headerOne?: TextNodeStyle;
        /** Styling for H2 nodes. */
        headerTwo?: TextNodeStyle;
        /** Styling for H3 nodes. */
        headerThree?: TextNodeStyle;
        /** Styling for H4 nodes. */
        headerFour?: TextNodeStyle;
        /** Styling for H5 nodes. */
        headerFive?: TextNodeStyle;
        /** Styling for H6 nodes. */
        headerSix?: TextNodeStyle;
        /** Styling for paragraph nodes. */
        paragraph?: TextNodeStyle;
        /** Styling for block quote nodes. */
        blockquote?: TextNodeStyle;
        /** Styling for code block nodes. */
        codeBlock?: TextNodeStyle;
    }
    interface TextNodeStyle {
        /** The decorations to apply to the node. */
        decorations?: Decoration[];
        /** Padding and background color for the node. */
        nodeStyle?: NodeStyle;
        /** Line height for text in the node. */
        lineHeight?: string | null;
    }
    interface ModerationDetails {
        /** Member ID of the person who submitted the post. */
        submittedBy?: string;
        /** Date and time the post was submitted for moderation. */
        submittedDate?: Date;
        /**
         * Status indicating whether the submission was approved or rejected by the moderator.
         *
         * Supported values: `'APPROVED'`, `'REJECTED'`, `'PENDING'`.
         */
        status?: ModerationStatusStatus;
        /** Member ID of the person who approved or rejected the post. */
        moderatedBy?: string | null;
        /** Date and time the post was approved or rejected by a moderator. */
        moderationDate?: Date;
    }
    enum ModerationStatusStatus {
        UNKNOWN = "UNKNOWN",
        APPROVED = "APPROVED",
        REJECTED = "REJECTED"
    }
    interface BlogMedia extends BlogMediaMediaOneOf {
        /** Whether cover media is displayed. */
        displayed?: boolean;
        /**
         * Whether the media is custom.
         *
         *
         * `false` if the media is the first image or video in the post. `true` if set to some other image or video.",
         */
        custom?: boolean;
        /** Wix Media details. */
        wixMedia?: WixMedia;
        /** Embed media details. */
        embedMedia?: EmbedMedia;
    }
    /** @oneof */
    interface BlogMediaMediaOneOf {
        /** Wix Media details. */
        wixMedia?: WixMedia;
        /** Embed media details. */
        embedMedia?: EmbedMedia;
    }
    interface WixMedia {
        /** Thumbnail or image details. */
        image?: string;
        /** Video details. Optional */
        videoV2?: string;
    }
    interface VideoResolution {
        /** Video URL. */
        url?: string;
        /** Video height. */
        height?: number;
        /** Video width. */
        width?: number;
        /** Video format for example, mp4, hls. */
        format?: string;
    }
    interface EmbedMedia {
        /** Thumbnail details. */
        thumbnail?: EmbedThumbnail;
        /** Video details. */
        video?: EmbedVideo;
    }
    interface EmbedThumbnail {
        /** Thumbnail url. */
        url?: string;
        /** Thumbnail width. */
        width?: number;
        /** Thumbnail height. */
        height?: number;
    }
    interface EmbedVideo {
        /** Video url. */
        url?: string;
        /** Video width. */
        width?: number;
        /** Video height. */
        height?: number;
    }
    interface ListTemplatesRequest {
        /** Filter post templates by given template category ids */
        categoryIds?: string[];
        /** Filter post templates by provided language */
        language?: string | null;
        /** Returns post template categories when set to TRUE */
        listTemplateCategories?: boolean;
        /** Sort order by ascending/descending publish date. Default is ascending publish date sort */
        sort?: GetPostTemplatesSort;
        /** Pagination options. */
        paging?: BlogPaging;
    }
    enum GetPostTemplatesSort {
        /** Sorting by publishing date ascending */
        PUBLISHED_DATE_ASC = "PUBLISHED_DATE_ASC",
        /** Sorting by publishing date descending */
        PUBLISHED_DATE_DESC = "PUBLISHED_DATE_DESC"
    }
    interface BlogPaging {
        /**
         * Number of items to skip in the current sort order.
         *
         *
         * Default: `0`
         */
        offset?: number;
        /**
         * Number of items to return.
         *
         *
         * Default:`50`
         */
        limit?: number;
        /** Pointer to the next or previous page in the list of results. */
        cursor?: string | null;
    }
    interface ListTemplatesResponse {
        /** Available post templates */
        postTemplates?: Post[];
        /** Details on the paged set of posts templates returned. */
        postTemplatesMetaData?: MetaData$1;
        /** Post template categories. This value is returned empty unless asked explicitly */
        templateCategories?: Category[];
    }
    interface MetaData$1 {
        /** Number of items returned in this response. */
        count?: number;
        /**
         * Number of items skipped in the current sort order.
         *
         *
         */
        offset?: number;
        /** Total number of items that match the query. */
        total?: number;
        /** Pointer to the next or previous page in the list of results. */
        cursor?: string | null;
    }
    interface Category {
        /**
         * Category ID.
         * @readonly
         */
        _id?: string;
        /** Category label. Displayed in the Category Menu. */
        label?: string;
        /**
         * Number of posts in the category.
         * @readonly
         */
        postCount?: number;
        /**
         * Category URL.
         * @readonly
         */
        url?: string;
        /** Category description. */
        description?: string | null;
        /** Category title. */
        title?: string;
        /**
         * __Deprecated.__ Use `coverImage` instead.
         * This property will be removed on June 30, 2023.
         *
         * Category cover image or video.
         */
        coverMedia?: CoverMedia;
        /**
         * Reserved for internal use.
         * @readonly
         */
        oldRank?: number;
        /**
         * __Deprecated.__ Use `displayPosition` instead.
         * This property will be removed on June 30, 2023.
         *
         * Category position in sequence.
         */
        rank?: number | null;
        /**
         * Category position in sequence. Categories with a lower display position are displayed first. Categories with a position of `-1` appear at the end of the sequence.
         *
         * Default: `-1`
         */
        displayPosition?: number | null;
        /**
         * ID of the category's translations. All translations of a single category share the same `translationId`.
         * @readonly
         */
        translationId?: string | null;
        /**
         * Category language.
         *
         * Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string;
        /** Category slug. For example, `'category-slug'`. */
        slug?: string;
        /**
         * Reserved for internal use.
         * @readonly
         */
        internalId?: string | null;
        /** SEO data. */
        seoData?: SeoSchema$1;
        /** Category cover image. */
        coverImage?: string;
    }
    interface GetTemplateRequest {
        /** Post template id */
        postTemplateId: string;
    }
    interface GetTemplateResponse {
        /** Post template */
        postTemplate?: Post;
    }
    interface CreateDraftPostFromTemplateRequest {
        /** Post template id */
        postTemplateId: string;
    }
    interface CreateDraftPostFromTemplateResponse {
        /** Created draft post */
        draftPost?: DraftPost;
    }
    interface DraftPost {
        /**
         * Draft post ID.
         * @readonly
         */
        _id?: string;
        /** Draft post title. */
        title?: string;
        /**
         * Draft post excerpt.
         *
         * If no excerpt has been manually set, an excerpt is automatically generated from the post's text.
         * This can be retrieved using the `GENERATED_EXCERPT` fieldset.
         */
        excerpt?: string | null;
        /** Whether the draft post is marked as featured. */
        featured?: boolean | null;
        /** Category IDs of the draft post. */
        categoryIds?: string[];
        /** Draft post owner's member ID. */
        memberId?: string | null;
        /** Hashtags in the post. */
        hashtags?: string[];
        /** Whether commenting on the draft post is enabled. */
        commentingEnabled?: boolean | null;
        /**
         * Estimated reading time of the draft post (calculated automatically).
         * @readonly
         */
        minutesToRead?: number;
        /** Image placed at the top of the blog page. */
        heroImage?: string;
        /** Tag IDs the draft post is tagged with. */
        tagIds?: string[];
        /** IDs of posts related to this draft post. */
        relatedPostIds?: string[];
        /** [Pricing plan IDs](https://dev.wix.com/api/rest/wix-pricing-plans). Only relevant if a post is assigned to a specific pricing plan. */
        pricingPlanIds?: string[];
        /**
         * ID of the draft post's translations.
         *
         * All translations of a single post share the same `translationId`.
         */
        translationId?: string | null;
        /**
         * Language the draft post is written in.
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string | null;
        /**
         * Reserved for internal use.
         * @readonly
         */
        changeOrigin?: Origin;
        /**
         * Reserved for internal use.
         * @readonly
         */
        contentId?: string | null;
        /** Reserved for internal use. */
        editingSessionId?: string | null;
        /** Draft Post rich content. */
        richContent?: RichContent;
        /**
         * Status of the draft post.
         * @readonly
         */
        status?: Status;
        /** Details of the draft post in review. Only relevant to posts submitted by guest writers. */
        moderationDetails?: ModerationDetails;
        /**
         * Reserved for internal use.
         * @readonly
         */
        mostRecentContributorId?: string | null;
        /**
         * Indicates if there are changes made to the draft post that have not yet been published.
         * @readonly
         */
        hasUnpublishedChanges?: boolean;
        /**
         * Date the draft post was last edited.
         * @readonly
         */
        editedDate?: Date;
        /**
         * Date the draft post is scheduled to be published.
         * @readonly
         */
        scheduledPublishDate?: Date;
        /** Reserved for internal use. */
        content?: Record<string, any> | null;
        /** Date the post was first published. */
        firstPublishedDate?: Date;
        /** SEO data. */
        seoData?: SeoSchema$1;
        /** Reserved for internal use. */
        paidContentParagraph?: number | null;
        /**
         * Reserved for internal use.
         * @readonly
         */
        slugs?: string[];
        /**
         * Draft post URL preview. What the URL will look like once the post is published.
         * @readonly
         */
        url?: string;
        /**
         * Date the draft post was first created.
         * @readonly
         */
        _createdDate?: Date;
        /** SEO slug. */
        seoSlug?: string | null;
        /** Post cover media. */
        media?: BlogMedia;
        /** Number of paragraphs to display in a paid content preview for non-paying users. */
        previewTextParagraph?: number | null;
        /**
         * Reserved for internal use.
         * @readonly
         */
        internalId?: string | null;
    }
    enum Origin {
        UNKNOWN = "UNKNOWN",
        /** Changed by admin */
        ADMIN = "ADMIN",
        /** Categories were changed */
        ADD_CATEGORIES = "ADD_CATEGORIES",
        /** Saved automatically */
        AUTO_SAVE = "AUTO_SAVE",
        /** Copied from template */
        COPY_TEMPLATE = "COPY_TEMPLATE",
        /** Imported */
        IMPORT = "IMPORT",
        /** Imported in bulk */
        IMPORT_BULK = "IMPORT_BULK",
        /** Imported with html import */
        IMPORT_HTML = "IMPORT_HTML",
        /** Patch import */
        IMPORT_PATCH = "IMPORT_PATCH",
        /** Changed language */
        LANGUAGE_CHANGE = "LANGUAGE_CHANGE",
        /** Saved manually */
        MANUAL_SAVE = "MANUAL_SAVE",
        /** Affected by migration */
        MIGRATION = "MIGRATION",
        /** Affected by moderation */
        MODERATION = "MODERATION",
        /** Moved to trash */
        MOVE_TO_TRASH = "MOVE_TO_TRASH",
        /** Pricing plans were changed */
        PRICING_PLANS_CHANGE = "PRICING_PLANS_CHANGE",
        /** Was provisioned */
        PROVISION = "PROVISION",
        /** Was published */
        PUBLISH = "PUBLISH",
        /** Owner was reassigned */
        REASSIGN_OWNER = "REASSIGN_OWNER",
        /** Was reblogged */
        REBLOG = "REBLOG",
        /** Was restored */
        RESTORE = "RESTORE",
        /** Reverted to draft */
        REVERT_TO_DRAFT = "REVERT_TO_DRAFT",
        /** Was translated */
        TRANSLATION = "TRANSLATION",
        /** Was unpublished */
        UNPUBLISH = "UNPUBLISH",
        /** Was unscheduled */
        UNSCHEDULE = "UNSCHEDULE",
        /** New edit session started which updated editing_session_id id */
        NEW_EDIT_SESSION = "NEW_EDIT_SESSION",
        /** Was scheduled by Later */
        SCHEDULING_SERVICE_SCHEDULE = "SCHEDULING_SERVICE_SCHEDULE",
        /** Was unscheduled by Later */
        SCHEDULING_SERVICE_UNSCHEDULE = "SCHEDULING_SERVICE_UNSCHEDULE",
        /** Was published by Later */
        SCHEDULING_SERVICE_PUBLISH = "SCHEDULING_SERVICE_PUBLISH",
        /** Was scheduled */
        SCHEDULE = "SCHEDULE",
        /** Was removed from moderation */
        REMOVE_FROM_MODERATION = "REMOVE_FROM_MODERATION",
        /** Was rejected from moderation */
        REJECT_FROM_MODERATION = "REJECT_FROM_MODERATION",
        /** Was approved in moderation */
        APPROVE_IN_MODERATION = "APPROVE_IN_MODERATION",
        /** Tag was deleted */
        DELETE_TAG = "DELETE_TAG"
    }
    enum Status {
        UNKNOWN = "UNKNOWN",
        /** Status indicating the draft post is published. */
        PUBLISHED = "PUBLISHED",
        /** Status indicating the draft post is unpublished. */
        UNPUBLISHED = "UNPUBLISHED",
        /** Status indicating the draft post is scheduled for publication. */
        SCHEDULED = "SCHEDULED",
        /** Status indicating the draft post is deleted. */
        DELETED = "DELETED",
        /**
         * Deprecated. Use `IN_REVIEW` instead. Status indicating the draft post is in review.
         * Target removal date 2023-06-30
         * Reserved for internal use.
         */
        IN_MODERATION = "IN_MODERATION",
        /** Status indicating the draft post is in review. */
        IN_REVIEW = "IN_REVIEW"
    }
    interface DraftPostTranslation {
        /** Post ID. */
        _id?: string;
        /** Post status. */
        status?: Status;
        /** Language the post is written in. */
        language?: string | null;
        /** Post slug. For example, 'post-slug'. */
        slug?: string | null;
        /** SEO data. */
        seoData?: SeoSchema$1;
        /** Post URL. */
        url?: string;
    }
    interface GetTotalLikesPerMemberRequest {
        /** Member ID. */
        memberId: string;
    }
    interface GetTotalLikesPerMemberResponse {
        /** The total number of likes of the member. */
        total?: number;
    }
    interface PostLiked extends PostLikedInitiatorOneOf {
        /** ID of the liked post. */
        postId?: string;
        /** Member ID of person who liked the post (only returned when the member was logged in when liking the post). */
        memberId?: string | null;
        /** Visitor ID of person who liked the post when they are not logged in. */
        anonymousVisitorId?: string | null;
    }
    /** @oneof */
    interface PostLikedInitiatorOneOf {
        /** Member ID of person who liked the post (only returned when the member was logged in when liking the post). */
        memberId?: string | null;
        /** Visitor ID of person who liked the post when they are not logged in. */
        anonymousVisitorId?: string | null;
    }
    interface PostUnliked extends PostUnlikedInitiatorOneOf {
        /** ID of the unliked post. */
        postId?: string;
        /** Member ID of person who unliked the post (returned when the member was logged in when unliking the post). */
        memberId?: string | null;
        /** Visitor ID of person who unliked the post when they are not logged in. */
        anonymousVisitorId?: string | null;
    }
    /** @oneof */
    interface PostUnlikedInitiatorOneOf {
        /** Member ID of person who unliked the post (returned when the member was logged in when unliking the post). */
        memberId?: string | null;
        /** Visitor ID of person who unliked the post when they are not logged in. */
        anonymousVisitorId?: string | null;
    }
    interface PostCountersUpdated extends PostCountersUpdatedInitiatorOneOf {
        /** ID of the post which counters were updated. */
        postId?: string;
        /** Field of the updated counter. */
        updatedCounterField?: Field$1;
        /** New counter value. */
        counter?: number;
        /** Member ID of person who triggered the counter update */
        memberId?: string | null;
        /** Visitor ID if person that liked the post is not logged in */
        anonymousVisitorId?: string | null;
    }
    /** @oneof */
    interface PostCountersUpdatedInitiatorOneOf {
        /** Member ID of person who triggered the counter update */
        memberId?: string | null;
        /** Visitor ID if person that liked the post is not logged in */
        anonymousVisitorId?: string | null;
    }
    enum Field$1 {
        UNKNOWN = "UNKNOWN",
        /** Total comments field. */
        TOTAL_COMMENTS = "TOTAL_COMMENTS",
        /** Like count field. */
        LIKE_COUNT = "LIKE_COUNT",
        /** View count field. */
        VIEW_COUNT = "VIEW_COUNT",
        /** Rating count field */
        RATING_COUNT = "RATING_COUNT"
    }
    interface PostOwnerChanged {
    }
    interface InitialPostsCopied {
        /** Number of posts copied. */
        count?: number;
    }
    interface GetPostRequest {
        /** Post ID. */
        postId: string;
        /** Reserved for internal use. */
        fieldsToInclude?: PostFieldField[];
        /**
         * List of post fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
         */
        fieldsets?: PostFieldField[];
    }
    enum PostFieldField {
        UNKNOWN = "UNKNOWN",
        /** Deprecated use `METRICS` instead */
        COUNTERS = "COUNTERS",
        /** Includes Post url when present */
        URL = "URL",
        /** Includes Post content text string when present */
        CONTENT_TEXT = "CONTENT_TEXT",
        /** Includes Post metrics when present */
        METRICS = "METRICS",
        /** Includes SEO data */
        SEO = "SEO",
        /**
         * Includes Post content as a stringified DraftJS document
         * Reserved for internal use
         */
        CONTENT = "CONTENT",
        /**
         * Includes internal id field
         * Reserved for internal use
         */
        INTERNAL_ID = "INTERNAL_ID",
        /** Includes post owners Contact Id */
        CONTACT_ID = "CONTACT_ID",
        /** Includes post rich content */
        RICH_CONTENT = "RICH_CONTENT"
    }
    interface GetPostResponse {
        /** Post info. */
        post?: Post;
    }
    interface GetPostBySlugRequest {
        /** Slug of the post to retrieve. */
        slug: string;
        /** Reserved for internal use. */
        fieldsToInclude?: PostFieldField[];
        /**
         * List of post fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
         */
        fieldsets?: PostFieldField[];
    }
    interface GetPostBySlugResponse {
        /** Post info. */
        post?: Post;
    }
    interface ListPostsRequest {
        /**
         * Whether to return only featured posts.
         *
         * Default: `false`
         */
        featured?: boolean;
        /**
         * Hashtag filter.
         *
         * Pass an array of hashtags to return only posts containing any of the provided hashtags.
         * If omitted, all posts with or without hashtags are returned.
         */
        hashtags?: string[];
        /**
         * Category filter.
         *
         * Pass an array of category IDs to return only posts with any of the provided categories.
         * If omitted, all posts with or without associated categories are returned.
         */
        categoryIds?: string[];
        /**
         * Tag filter.
         *
         * Pass an array of tag IDs to return only posts with any of the provided tags.
         * If omitted, all posts with or without tags are returned.
         */
        tagIds?: string[];
        /** Sort order by descending view count, ascending or descending publish date, or default to descending by publish date with pinned posts first. */
        sort?: GetPostsSort;
        /** Pagination options. */
        paging?: BlogPaging;
        /** Reserved for internal use. */
        fieldsToInclude?: PostFieldField[];
        /**
         * Language filter.
         *
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string | null;
        /** Post owner's member ID. */
        memberId?: string | null;
        /**
         * List of post fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
         */
        fieldsets?: PostFieldField[];
    }
    enum GetPostsSort {
        /** Sorting by publishing date descending with pinned posts first. The default value */
        FEED = "FEED",
        /** Sorting by publishing date ascending */
        PUBLISHED_DATE_ASC = "PUBLISHED_DATE_ASC",
        /** Sorting by publishing date descending */
        PUBLISHED_DATE_DESC = "PUBLISHED_DATE_DESC",
        /** Sorting by view count descending */
        VIEW_COUNT = "VIEW_COUNT",
        /** Sorting by like count descending */
        LIKE_COUNT = "LIKE_COUNT",
        /** Sorting by title ascending */
        TITLE_ASC = "TITLE_ASC",
        /** Sorting by title descending */
        TITLE_DESC = "TITLE_DESC",
        /** Sorting by post rating descending. */
        RATING = "RATING"
    }
    interface ListPostsResponse {
        /** List of posts. */
        posts?: Post[];
        /** Details on the paged set of results returned. */
        metaData?: MetaData$1;
    }
    interface QueryPostsRequest {
        /**
         * __Deprecated.__ Use `query` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * Pagination options.
         */
        paging?: BlogPaging;
        /**
         * __Deprecated.__ Use `query` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * Filter object.
         */
        filter?: Record<string, any> | null;
        /**
         * __Deprecated.__ Use `query` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * Sorting options. For a list of sortable fields, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/wix-blog/blog/filter-and-sort).
         */
        sort?: Sorting$1[];
        /** Reserved for internal use. */
        fieldsToInclude?: PostFieldField[];
        /** Query options. */
        query?: PlatformQuery$1;
        /**
         * List of post fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
         */
        fieldsets?: PostFieldField[];
    }
    interface Sorting$1 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$1;
    }
    enum SortOrder$1 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface PlatformQuery$1 extends PlatformQueryPagingMethodOneOf$1 {
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
        sort?: Sorting$1[];
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$1;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$1;
    }
    /** @oneof */
    interface PlatformQueryPagingMethodOneOf$1 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$1;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$1;
    }
    interface Paging$1 {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface CursorPaging$1 {
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
    interface QueryPostsResponse {
        /** List of posts. */
        posts?: Post[];
        /**
         * __Deprecated.__ Use `pagingMetadata` instead.
         * This property will be removed on June 30, 2023.
         *
         * Details on the paged set of results returned.
         */
        metaData?: MetaData$1;
        /** Details on the paged set of results returned. */
        pagingMetadata?: PagingMetadataV2$1;
    }
    interface PagingMetadataV2$1 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Offset that was requested. */
        offset?: number | null;
        /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
        total?: number | null;
        /** Flag that indicates the server failed to calculate the `total` field. */
        tooManyToCount?: boolean | null;
        /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
        cursors?: Cursors$1;
    }
    interface Cursors$1 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface GetPostMetricsRequest {
        /** Post ID. */
        postId: string;
    }
    interface GetPostMetricsResponse {
        /** Post metrics. */
        metrics?: Metrics;
    }
    interface BulkGetPostMetricsRequest {
        /** Post IDs. */
        postIds: string[];
    }
    interface BulkGetPostMetricsResponse {
        /** Map of post.id to metrics */
        metrics?: Record<string, Metrics>;
    }
    interface BulkGetPostReactionsRequest {
        /** Post IDs. */
        postIds: string[];
    }
    interface BulkGetPostReactionsResponse {
        /** Map of post.id to reactions */
        reactionsMap?: Record<string, Reactions>;
    }
    interface Reactions {
        /**
         * Is post liked by the current user
         * @readonly
         */
        liked?: boolean;
    }
    interface ListDemoPostsRequest {
        /**
         * Whether to return only featured posts.
         *
         * Default: `false`
         */
        featured?: boolean;
        /**
         * Hashtag filter.
         *
         * Pass an array of hashtags to return only posts containing any of the provided hashtags.
         * If omitted, all posts with or without hashtags are returned.
         */
        hashtags?: string[];
        /**
         * Category filter.
         *
         * Pass an array of category IDs to return only posts with any of the provided categories.
         * If omitted, all posts with or without associated categories are returned.
         */
        categoryIds?: string[];
        /**
         * Tag filter.
         *
         * Pass an array of tag IDs to return only posts with any of the provided tags.
         * If omitted, all posts with or without tags are returned.
         */
        tagIds?: string[];
        /**
         * Sorting options.
         *
         * - `FEED`: Ordered by `firstPublishedDate` in descending order with pinned posts first.
         * - `VIEW_COUNT`: Ordered by total number of views in descending order.
         * - `LIKE_COUNT`: Ordered by total number of likes in descending order.
         * - `PUBLISHED_DATE_ASC`: Ordered by `firstPublishedDate` in ascending order.
         * - `PUBLISHED_DATE_DESC`: Ordered by `firstPublishedDate` in descending order.
         * - `TITLE_ASC`: Ordered by `title` in ascening order.
         * - `TITLE_DESC`: Ordered by `title` in descending order.
         * - `RATING`: reserved for internal use.
         *
         * Default: `FEED`
         */
        sort?: GetPostsSort;
        /** Pagination options. */
        paging?: BlogPaging;
        /**
         * __Deprecated.__ Use `fieldsets` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * List of post fields to be included in the response.
         */
        fieldsToInclude?: PostFieldField[];
        /**
         * Language filter.
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         * Pass a language to only receive posts that are in that language.
         * If omitted, posts in all languages are returned.
         */
        language?: string | null;
        /** Post owner's member ID. */
        memberId?: string | null;
        /**
         * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the post’s base fields are returned.
         */
        fieldsets?: PostFieldField[];
    }
    interface ListDemoPostsResponse {
        /** List of posts. */
        posts?: Post[];
        /** Details on the paged set of results returned. */
        metaData?: MetaData$1;
    }
    interface OldBlogMigratedEvent {
        /** Instance id of new version of blog */
        newBlogInstanceId?: string;
        /** Instance id of old version of blog */
        oldBlogInstanceId?: string;
    }
    interface ListMigratedPostsRequest {
        /** New blog version instance id */
        instanceId: string;
        /** Cursor pointing to page of results */
        paging?: BlogCursorPaging;
    }
    interface BlogCursorPaging {
        /** Number of items to load. */
        limit?: number | null;
        /** Pointer to the next or previous page in the list of results. */
        cursor?: string | null;
    }
    interface ListMigratedPostsResponse {
        /** List of posts */
        posts?: Post[];
        /** Data of post in old blog by post id */
        postsMigrationMeta?: Record<string, PostMigrationMetaData>;
        /** Pagination */
        pagingMetaData?: CursorMetaData;
    }
    interface PostMigrationMetaData {
        /** Old blog instance id */
        instanceId?: string;
        /** Post id in old blog */
        postId?: string;
        /** Post author in old blog */
        author?: string | null;
        /** Post slug in old blog */
        slug?: string | null;
    }
    interface CursorMetaData {
        /** Cursor pointing to next result page. */
        next?: string | null;
    }
    /** Get Blog Publications Count Stats request */
    interface QueryPublicationsCountStatsRequest {
        /** Start of time range to return, in ISO 8601 date and time format. */
        rangeStart?: Date;
        /** Non-inclusive end of time range to return, in ISO 8601 date and time format. */
        rangeEnd?: Date;
        /** Order of the returned results. */
        order?: QueryPublicationsCountStatsRequestOrder;
        /** Number of months to include in the response. */
        months?: number;
        /**
         * Language filter
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string | null;
        /** Timezone of the client. */
        timeZone?: string | null;
    }
    enum QueryPublicationsCountStatsRequestOrder {
        UNKNOWN = "UNKNOWN",
        OLDEST = "OLDEST",
        NEWEST = "NEWEST"
    }
    /** Get Blog Publications Count Stats response */
    interface QueryPublicationsCountStatsResponse {
        /** Chronologically ordered list of publications. */
        stats?: PeriodPublicationsCount[];
    }
    /** Publications count for a specific time period */
    interface PeriodPublicationsCount {
        /** Start of time range in ISO 8601 date and time format. */
        periodStart?: Date;
        /** Number of posts published during this month. */
        publicationsCount?: number;
    }
    /** Get Blog Post Count Stats request */
    interface QueryPostCountStatsRequest {
        /** Start of time range to return, in ISO 8601 date and time format. */
        rangeStart?: Date;
        /**
         * __Deprecated.__ Use `months` instead.
         * This property will be removed on June 30, 2023.
         *
         * Non-inclusive end of time range to return, in ISO 8601 date and time format.
         */
        rangeEnd?: Date;
        /**
         * Order of returned results.
         *
         * - `OLDEST`: posts by date in ascending order.
         * - `NEWEST`: posts by date in descending order.
         *
         * Default: `OLDEST`
         */
        order?: Order;
        /** Number of months to include in response. */
        months?: number;
        /**
         * Language filter.
         *
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string | null;
        /**
         * Time zone to use when calculating the start of the month.
         *
         * [UTC timezone offset](https://en.wikipedia.org/wiki/List_of_UTC_offsets) format. For example, New York time zone is `-05`.
         */
        timeZone?: string | null;
    }
    enum Order {
        UNKNOWN = "UNKNOWN",
        OLDEST = "OLDEST",
        NEWEST = "NEWEST"
    }
    /** Get Blog Post Count Stats response */
    interface QueryPostCountStatsResponse {
        /** List of posts in specified order. */
        stats?: PeriodPostCount[];
    }
    /** Post count for a specific time period */
    interface PeriodPostCount {
        /** Start of time range in ISO 8601 date and time format. */
        periodStart?: Date;
        /** Number of posts published during this month. */
        postCount?: number;
    }
    interface GetTotalPublicationsRequest {
        /** Language filter */
        language?: string | null;
    }
    interface GetTotalPublicationsResponse {
        /** Total amount of publications. */
        total?: number;
    }
    interface GetTotalPostsRequest {
        /**
         * Language filter.
         *
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string | null;
    }
    interface GetTotalPostsResponse {
        /** Total amount of published posts. */
        total?: number;
    }
    interface SendActionEventRequest extends SendActionEventRequestActionOneOf {
        entityId?: string;
        postLikedAction?: PostLiked;
        postCountersUpdated?: PostCountersUpdated;
    }
    /** @oneof */
    interface SendActionEventRequestActionOneOf {
        postLikedAction?: PostLiked;
        postCountersUpdated?: PostCountersUpdated;
    }
    interface SendActionEventResponse {
    }
    interface ListTemplatesOptions {
        /** Filter post templates by given template category ids */
        categoryIds?: string[];
        /** Filter post templates by provided language */
        language?: string | null;
        /** Returns post template categories when set to TRUE */
        listTemplateCategories?: boolean;
        /** Sort order by ascending/descending publish date. Default is ascending publish date sort */
        sort?: GetPostTemplatesSort;
        /** Pagination options. */
        paging?: BlogPaging;
    }
    /**
     * Gets a post by the specified ID.
     *
     *
     * The `getPost()` function returns a Promise that resolves to a post whose ID matches the given ID.
     *
     * @param postId - Post ID.
     * @public
     * @documentationMaturity preview
     * @requiredField postId
     * @param options - Options specifying which fields to return.
     * @returns Fulfilled - The requested post.
     */
    function getPost(postId: string, options?: GetPostOptions): Promise<GetPostResponse>;
    interface GetPostOptions {
        /**
         * List of post fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
         */
        fieldsets?: PostFieldField[];
    }
    /**
     * Gets a post by the provided slug.
     *
     *
     * The `getPostBySlug()` function returns a Promise that resolves to a post whose slug matches the given slug.
     *
     * The `slug` is the end of a post's URL that refers to a specific post. For example, if a post's URL is `https:/example.com/blog/post/my-post-slug`, the slug is `my-post-slug`. The slug is case-sensitive, and is generally derived from the post title, unless specified otherwise.
     * @public
     * @documentationMaturity preview
     * @requiredField GetPostBySlugRequest
     * @requiredField slug
     * @param options - Options specifying which fields to return.
     * @param slug - Slug of the post to retrieve.
     *
     * The end of a post's URL, for example, `https:/example.com/blog/post/my-post-slug`. Case sensitive and generally based on the post title if not specified.
     * @returns Fulfilled - The requested post.
     */
    function getPostBySlug(slug: string, options?: GetPostBySlugOptions): Promise<GetPostBySlugResponse>;
    interface GetPostBySlugOptions {
        /**
         * List of post fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
         */
        fieldsets?: PostFieldField[];
    }
    /**
     * Retrieves a list of published posts.
     *
     *
     * The `listPosts()` function returns a Promise that resolves to a list of up to 100 published posts.
     *
     * Using the `options` parameter, you can filter your list of posts, set the amount of posts to be returned, and sort your list in a specified order.
     *
     * By default, the list is sorted by `firstPublishedDate` in descending order, and the amount of posts returned is 50.
     * @public
     * @documentationMaturity preview
     * @param options - Sort, filter, and paging options.
     * @returns Fulfilled - List of retrieved posts.
     */
    function listPosts(options?: ListPostsOptions): Promise<ListPostsResponse>;
    interface ListPostsOptions {
        /** Featured filter. Whether to return only featured posts. */
        featured?: boolean;
        /**
         * List of hashtags to filter for.
         *
         *
         * Default: All hashtags
         */
        hashtags?: string[];
        /**
         * List of category IDs to filter for.
         *
         *
         * Default: All categories
         */
        categoryIds?: string[];
        /**
         * List of [tag IDs](https://www.wix.com/velo/reference/wix-blog-backend/tags) to filter for.
         *
         *
         * Default: All tags
         */
        tagIds?: string[];
        /**
         * Sort order.
         *
         * Sort by one of the following:
         *  - `'VIEW_COUNT'` descending view count
         *  - `'LIKE_COUNT'` descending like count
         *  - `'PUBLISHED_DATE_ASC'` ascending published date
         *  - `'PUBLISHED_DATE_DESC'` descending published date
         *  - `'TITLE_ASC'` ascending title
         *  - `'TITLE_DESC'` descending title
         *
         *  Default: `'PUBLISHED_DATE_DESC'`
         */
        sort?: GetPostsSort;
        /** Pagination options. */
        paging?: BlogPaging;
        /**
         * Language filter.
         *
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string | null;
        /**
         * Member ID to filter for.
         *
         *
         * Default: All members
         */
        memberId?: string | null;
        /**
         * List of post fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
         */
        fieldsets?: PostFieldField[];
    }
    /**
     * Creates a query to retrieve a list of posts.
     *
     *
     * The `queryPosts()` function builds a query to retrieve a list of up to 100 posts, and returns a [`PostsQueryBuilder`](https://www.wix.com/velo/reference/wix-blog-backend/posts/postsquerybuilder) object.
     *
     * The returned object contains the query definition which is typically used to run the query using the [`find()`](https://www.wix.com/velo/reference/wix-blog-backend/posts/postsquerybuilder/find) function.
     *
     * You can refine the query by chaining `PostsQueryBuilder` functions onto the query. `PostsQueryBuilder` functions enable you to sort, filter, and control the results that `queryPosts()` returns.
     *
     * `queryPosts()` runs with these `PostsQueryBuilder` defaults that can be overridden:
     * + [`limit(50)`](https://www.wix.com/velo/reference/wix-blog-backend/posts/postsquerybuilder/limit)
     * + [`descending('firstPublishedDate')`](https://www.wix.com/velo/reference/wix-blog-backend/posts/postsquerybuilder/descending)
     *
     * Note that the default limit is `'50'`, but the max limit is `'100'`.
     *
     * To learn how to query posts, refer to the table below.
     *
     * The following `PostsQueryBuilder` functions are supported for the `queryPosts()` function. For a full description of the Posts object, see the object returned for the [`items`](https://www.wix.com/velo/reference/wix-blog-backend/posts/postsqueryresult/items) property in [`PostsQueryResult`](https://www.wix.com/velo/reference/wix-blog-backend/posts/postsqueryresult).
     * @public
     * @documentationMaturity preview
     * @param options - Options specifying which fields to return.
     */
    function queryPosts(options?: QueryPostsOptions): PostsQueryBuilder;
    interface QueryPostsOptions {
        /**
         * List of post fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         * `"CONTACT_ID"`, `"CONTENT_TEXT"`, `"METRICS"`, `"SEO"`, and `"URL"`.
         */
        fieldsets?: PostFieldField[] | undefined;
    }
    interface QueryOffsetResult$1 {
        currentPage: number;
        totalPages: number;
        totalCount: number;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface PostsQueryResult extends QueryOffsetResult$1 {
        items: Post[];
        query: PostsQueryBuilder;
        next: () => Promise<PostsQueryResult>;
        prev: () => Promise<PostsQueryResult>;
    }
    interface PostsQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: string, value: any) => PostsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: string, value: any) => PostsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ge: (propertyName: string, value: any) => PostsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: string, value: any) => PostsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: string, value: any) => PostsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: string, value: any) => PostsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: string, value: string) => PostsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasSome: (propertyName: string, value: any[]) => PostsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasAll: (propertyName: string, value: any[]) => PostsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: string[]) => PostsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: string[]) => PostsQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => PostsQueryBuilder;
        /** @param skip - Number of items to skip in the query results before returning the results.
         * @documentationMaturity preview
         */
        skip: (skip: number) => PostsQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<PostsQueryResult>;
    }
    /**
     * Gets a specified post's metrics.
     *
     *
     * The `getPostMetrics()` function returns a Promise that resolves to the specified post's metrics.
     *
     * A post's metrics include the comments, likes, and views the post receives.
     * @param postId - Post ID.
     * @public
     * @documentationMaturity preview
     * @requiredField postId
     * @returns Fulfilled - Post metrics.
     */
    function getPostMetrics(postId: string): Promise<GetPostMetricsResponse>;
    interface ListDemoPostsOptions {
        /**
         * Whether to return only featured posts.
         *
         * Default: `false`
         */
        featured?: boolean;
        /**
         * Hashtag filter.
         *
         * Pass an array of hashtags to return only posts containing any of the provided hashtags.
         * If omitted, all posts with or without hashtags are returned.
         */
        hashtags?: string[];
        /**
         * Category filter.
         *
         * Pass an array of category IDs to return only posts with any of the provided categories.
         * If omitted, all posts with or without associated categories are returned.
         */
        categoryIds?: string[];
        /**
         * Tag filter.
         *
         * Pass an array of tag IDs to return only posts with any of the provided tags.
         * If omitted, all posts with or without tags are returned.
         */
        tagIds?: string[];
        /**
         * Sorting options.
         *
         * - `FEED`: Ordered by `firstPublishedDate` in descending order with pinned posts first.
         * - `VIEW_COUNT`: Ordered by total number of views in descending order.
         * - `LIKE_COUNT`: Ordered by total number of likes in descending order.
         * - `PUBLISHED_DATE_ASC`: Ordered by `firstPublishedDate` in ascending order.
         * - `PUBLISHED_DATE_DESC`: Ordered by `firstPublishedDate` in descending order.
         * - `TITLE_ASC`: Ordered by `title` in ascening order.
         * - `TITLE_DESC`: Ordered by `title` in descending order.
         * - `RATING`: reserved for internal use.
         *
         * Default: `FEED`
         */
        sort?: GetPostsSort;
        /** Pagination options. */
        paging?: BlogPaging;
        /**
         * __Deprecated.__ Use `fieldsets` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * List of post fields to be included in the response.
         */
        fieldsToInclude?: PostFieldField[];
        /**
         * Language filter.
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         * Pass a language to only receive posts that are in that language.
         * If omitted, posts in all languages are returned.
         */
        language?: string | null;
        /** Post owner's member ID. */
        memberId?: string | null;
        /**
         * List of additional post fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the post’s base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the post’s base fields are returned.
         */
        fieldsets?: PostFieldField[];
    }
    interface ListMigratedPostsOptions {
        /** Cursor pointing to page of results */
        paging?: BlogCursorPaging;
    }
    interface QueryPublicationsCountStatsOptions {
        /** Start of time range to return, in ISO 8601 date and time format. */
        rangeStart?: Date;
        /** Non-inclusive end of time range to return, in ISO 8601 date and time format. */
        rangeEnd?: Date;
        /** Order of the returned results. */
        order?: QueryPublicationsCountStatsRequestOrder;
        /** Number of months to include in the response. */
        months?: number;
        /**
         * Language filter
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string | null;
        /** Timezone of the client. */
        timeZone?: string | null;
    }
    /**
     * Retrieves the number of published posts per month within a specified time range.
     *
     *
     * The `queryPostCountStats()` function returns a Promise that resolves to the number of posts per month within the specified time range.
     *
     * You can set the time range using the `rangeStart` and `months` properties. The time range always starts on the 1st day of the month set in `rangeStart` and includes the number of `months` following `rangeStart`. For example, if `rangeStart` is set to `'2022-03-13'` and `months` is set to `4`, the time range will be from `'2022-03-01'` until `'2022-06-30'`. The time range ends on the last day of the month.
     *
     * >**Note:** If there are no published posts in a specific month, that month is not included in the response. For example, let's say a blog has `0` posts dated in February 2022. If `rangeStart` is set to `'2022-01-01'` and `months` is set to `3`, the response includes `postCount` values for January and March, but not February.
     * @public
     * @documentationMaturity preview
     * @param options - Options specifying time frame, sort, and filter.
     * @returns Fulfilled - Post count stats.
     */
    function queryPostCountStats(options?: QueryPostCountStatsOptions): Promise<QueryPostCountStatsResponse>;
    interface QueryPostCountStatsOptions {
        /** Start of time range to return, in ISO 8601 date and time format. */
        rangeStart?: Date;
        /** Reserved for internal use. */
        rangeEnd?: Date;
        /**
         * Sort order.
         * Use `'ASC'` for ascending order or `'DESC'` for descending order.
         *
         * Default: `ASC`
         */
        order?: Order;
        /** Number of months to include in response. */
        months?: number;
        /**
         * Language filter.
         *
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string | null;
        /**
         * Time zone to use when calculating the start of the month.
         *
         * [UTC timezone offset](https://en.wikipedia.org/wiki/List_of_UTC_offsets) format. For example, New York time zone is `-05`.
         */
        timeZone?: string | null;
    }
    interface GetTotalPublicationsOptions {
        /** Language filter */
        language?: string | null;
    }
    /**
     * Gets the total amount of published posts on the blog.
     *
     *
     * The `getTotalPosts()` function returns a Promise that resolves to the total amount of published posts on your blog's site.
     *
     *
     * You can use the `language` option to filter posts for a specified language.
     * @public
     * @documentationMaturity preview
     * @param options - Language Options.
     * @returns Fulfilled - Total number of posts.
     */
    function getTotalPosts(options?: GetTotalPostsOptions): Promise<GetTotalPostsResponse>;
    interface GetTotalPostsOptions {
        /**
         * Language filter.
         *
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string | null;
    }
    interface SendActionEventOptions {
        entityId?: string;
        postLikedAction?: PostLiked;
        postCountersUpdated?: PostCountersUpdated;
    }
    type blogV3Post_universal_d_Post = Post;
    type blogV3Post_universal_d_CoverMedia = CoverMedia;
    type blogV3Post_universal_d_CoverMediaMediaOneOf = CoverMediaMediaOneOf;
    type blogV3Post_universal_d_PostCountInfo = PostCountInfo;
    type blogV3Post_universal_d_Metrics = Metrics;
    type blogV3Post_universal_d_RichContent = RichContent;
    type blogV3Post_universal_d_Node = Node;
    type blogV3Post_universal_d_NodeDataOneOf = NodeDataOneOf;
    type blogV3Post_universal_d_NodeType = NodeType;
    const blogV3Post_universal_d_NodeType: typeof NodeType;
    type blogV3Post_universal_d_NodeStyle = NodeStyle;
    type blogV3Post_universal_d_ButtonData = ButtonData;
    type blogV3Post_universal_d_Border = Border;
    type blogV3Post_universal_d_Colors = Colors;
    type blogV3Post_universal_d_PluginContainerData = PluginContainerData;
    type blogV3Post_universal_d_WidthType = WidthType;
    const blogV3Post_universal_d_WidthType: typeof WidthType;
    type blogV3Post_universal_d_PluginContainerDataWidth = PluginContainerDataWidth;
    type blogV3Post_universal_d_PluginContainerDataWidthDataOneOf = PluginContainerDataWidthDataOneOf;
    type blogV3Post_universal_d_PluginContainerDataAlignment = PluginContainerDataAlignment;
    const blogV3Post_universal_d_PluginContainerDataAlignment: typeof PluginContainerDataAlignment;
    type blogV3Post_universal_d_Spoiler = Spoiler;
    type blogV3Post_universal_d_Height = Height;
    type blogV3Post_universal_d_Type = Type;
    const blogV3Post_universal_d_Type: typeof Type;
    type blogV3Post_universal_d_Styles = Styles;
    type blogV3Post_universal_d_Link = Link;
    type blogV3Post_universal_d_LinkDataOneOf = LinkDataOneOf;
    type blogV3Post_universal_d_Target = Target;
    const blogV3Post_universal_d_Target: typeof Target;
    type blogV3Post_universal_d_Rel = Rel;
    type blogV3Post_universal_d_CodeBlockData = CodeBlockData;
    type blogV3Post_universal_d_TextStyle = TextStyle;
    type blogV3Post_universal_d_TextAlignment = TextAlignment;
    const blogV3Post_universal_d_TextAlignment: typeof TextAlignment;
    type blogV3Post_universal_d_DividerData = DividerData;
    type blogV3Post_universal_d_LineStyle = LineStyle;
    const blogV3Post_universal_d_LineStyle: typeof LineStyle;
    type blogV3Post_universal_d_Width = Width;
    const blogV3Post_universal_d_Width: typeof Width;
    type blogV3Post_universal_d_Alignment = Alignment;
    const blogV3Post_universal_d_Alignment: typeof Alignment;
    type blogV3Post_universal_d_FileData = FileData;
    type blogV3Post_universal_d_ViewMode = ViewMode;
    const blogV3Post_universal_d_ViewMode: typeof ViewMode;
    type blogV3Post_universal_d_FileSource = FileSource;
    type blogV3Post_universal_d_FileSourceDataOneOf = FileSourceDataOneOf;
    type blogV3Post_universal_d_PDFSettings = PDFSettings;
    type blogV3Post_universal_d_GalleryData = GalleryData;
    type blogV3Post_universal_d_Media = Media;
    type blogV3Post_universal_d_Image = Image;
    type blogV3Post_universal_d_Video = Video;
    type blogV3Post_universal_d_Item = Item;
    type blogV3Post_universal_d_ItemDataOneOf = ItemDataOneOf;
    type blogV3Post_universal_d_GalleryOptions = GalleryOptions;
    type blogV3Post_universal_d_LayoutType = LayoutType;
    const blogV3Post_universal_d_LayoutType: typeof LayoutType;
    type blogV3Post_universal_d_Orientation = Orientation;
    const blogV3Post_universal_d_Orientation: typeof Orientation;
    type blogV3Post_universal_d_Crop = Crop;
    const blogV3Post_universal_d_Crop: typeof Crop;
    type blogV3Post_universal_d_ThumbnailsAlignment = ThumbnailsAlignment;
    const blogV3Post_universal_d_ThumbnailsAlignment: typeof ThumbnailsAlignment;
    type blogV3Post_universal_d_Layout = Layout;
    type blogV3Post_universal_d_ItemStyle = ItemStyle;
    type blogV3Post_universal_d_Thumbnails = Thumbnails;
    type blogV3Post_universal_d_GIFData = GIFData;
    type blogV3Post_universal_d_GIF = GIF;
    type blogV3Post_universal_d_HeadingData = HeadingData;
    type blogV3Post_universal_d_HTMLData = HTMLData;
    type blogV3Post_universal_d_HTMLDataDataOneOf = HTMLDataDataOneOf;
    type blogV3Post_universal_d_Source = Source;
    const blogV3Post_universal_d_Source: typeof Source;
    type blogV3Post_universal_d_ImageData = ImageData;
    type blogV3Post_universal_d_LinkPreviewData = LinkPreviewData;
    type blogV3Post_universal_d_MapData = MapData;
    type blogV3Post_universal_d_MapSettings = MapSettings;
    type blogV3Post_universal_d_MapType = MapType;
    const blogV3Post_universal_d_MapType: typeof MapType;
    type blogV3Post_universal_d_ParagraphData = ParagraphData;
    type blogV3Post_universal_d_PollData = PollData;
    type blogV3Post_universal_d_ViewRole = ViewRole;
    const blogV3Post_universal_d_ViewRole: typeof ViewRole;
    type blogV3Post_universal_d_VoteRole = VoteRole;
    const blogV3Post_universal_d_VoteRole: typeof VoteRole;
    type blogV3Post_universal_d_Permissions = Permissions;
    type blogV3Post_universal_d_Option = Option;
    type blogV3Post_universal_d_PollSettings = PollSettings;
    type blogV3Post_universal_d_PollLayoutType = PollLayoutType;
    const blogV3Post_universal_d_PollLayoutType: typeof PollLayoutType;
    type blogV3Post_universal_d_PollLayoutDirection = PollLayoutDirection;
    const blogV3Post_universal_d_PollLayoutDirection: typeof PollLayoutDirection;
    type blogV3Post_universal_d_PollLayout = PollLayout;
    type blogV3Post_universal_d_OptionLayout = OptionLayout;
    type blogV3Post_universal_d_BackgroundType = BackgroundType;
    const blogV3Post_universal_d_BackgroundType: typeof BackgroundType;
    type blogV3Post_universal_d_Gradient = Gradient;
    type blogV3Post_universal_d_Background = Background;
    type blogV3Post_universal_d_BackgroundBackgroundOneOf = BackgroundBackgroundOneOf;
    type blogV3Post_universal_d_PollDesign = PollDesign;
    type blogV3Post_universal_d_OptionDesign = OptionDesign;
    type blogV3Post_universal_d_Poll = Poll;
    type blogV3Post_universal_d_PollDataLayout = PollDataLayout;
    type blogV3Post_universal_d_Design = Design;
    type blogV3Post_universal_d_TextData = TextData;
    type blogV3Post_universal_d_Decoration = Decoration;
    type blogV3Post_universal_d_DecorationDataOneOf = DecorationDataOneOf;
    type blogV3Post_universal_d_DecorationType = DecorationType;
    const blogV3Post_universal_d_DecorationType: typeof DecorationType;
    type blogV3Post_universal_d_AnchorData = AnchorData;
    type blogV3Post_universal_d_ColorData = ColorData;
    type blogV3Post_universal_d_LinkData = LinkData;
    type blogV3Post_universal_d_MentionData = MentionData;
    type blogV3Post_universal_d_FontSizeData = FontSizeData;
    type blogV3Post_universal_d_FontType = FontType;
    const blogV3Post_universal_d_FontType: typeof FontType;
    type blogV3Post_universal_d_AppEmbedData = AppEmbedData;
    type blogV3Post_universal_d_AppEmbedDataAppDataOneOf = AppEmbedDataAppDataOneOf;
    type blogV3Post_universal_d_AppType = AppType;
    const blogV3Post_universal_d_AppType: typeof AppType;
    type blogV3Post_universal_d_BookingData = BookingData;
    type blogV3Post_universal_d_EventData = EventData;
    type blogV3Post_universal_d_VideoData = VideoData;
    type blogV3Post_universal_d_PlaybackOptions = PlaybackOptions;
    type blogV3Post_universal_d_EmbedData = EmbedData;
    type blogV3Post_universal_d_Oembed = Oembed;
    type blogV3Post_universal_d_CollapsibleListData = CollapsibleListData;
    type blogV3Post_universal_d_InitialExpandedItems = InitialExpandedItems;
    const blogV3Post_universal_d_InitialExpandedItems: typeof InitialExpandedItems;
    type blogV3Post_universal_d_Direction = Direction;
    const blogV3Post_universal_d_Direction: typeof Direction;
    type blogV3Post_universal_d_TableData = TableData;
    type blogV3Post_universal_d_Dimensions = Dimensions;
    type blogV3Post_universal_d_TableCellData = TableCellData;
    type blogV3Post_universal_d_VerticalAlignment = VerticalAlignment;
    const blogV3Post_universal_d_VerticalAlignment: typeof VerticalAlignment;
    type blogV3Post_universal_d_CellStyle = CellStyle;
    type blogV3Post_universal_d_BorderColors = BorderColors;
    type blogV3Post_universal_d_NullValue = NullValue;
    const blogV3Post_universal_d_NullValue: typeof NullValue;
    type blogV3Post_universal_d_ListValue = ListValue;
    type blogV3Post_universal_d_AudioData = AudioData;
    type blogV3Post_universal_d_OrderedListData = OrderedListData;
    type blogV3Post_universal_d_BulletedListData = BulletedListData;
    type blogV3Post_universal_d_BlockquoteData = BlockquoteData;
    type blogV3Post_universal_d_Metadata = Metadata;
    type blogV3Post_universal_d_DocumentStyle = DocumentStyle;
    type blogV3Post_universal_d_TextNodeStyle = TextNodeStyle;
    type blogV3Post_universal_d_ModerationDetails = ModerationDetails;
    type blogV3Post_universal_d_ModerationStatusStatus = ModerationStatusStatus;
    const blogV3Post_universal_d_ModerationStatusStatus: typeof ModerationStatusStatus;
    type blogV3Post_universal_d_BlogMedia = BlogMedia;
    type blogV3Post_universal_d_BlogMediaMediaOneOf = BlogMediaMediaOneOf;
    type blogV3Post_universal_d_WixMedia = WixMedia;
    type blogV3Post_universal_d_VideoResolution = VideoResolution;
    type blogV3Post_universal_d_EmbedMedia = EmbedMedia;
    type blogV3Post_universal_d_EmbedThumbnail = EmbedThumbnail;
    type blogV3Post_universal_d_EmbedVideo = EmbedVideo;
    type blogV3Post_universal_d_ListTemplatesRequest = ListTemplatesRequest;
    type blogV3Post_universal_d_GetPostTemplatesSort = GetPostTemplatesSort;
    const blogV3Post_universal_d_GetPostTemplatesSort: typeof GetPostTemplatesSort;
    type blogV3Post_universal_d_BlogPaging = BlogPaging;
    type blogV3Post_universal_d_ListTemplatesResponse = ListTemplatesResponse;
    type blogV3Post_universal_d_Category = Category;
    type blogV3Post_universal_d_GetTemplateRequest = GetTemplateRequest;
    type blogV3Post_universal_d_GetTemplateResponse = GetTemplateResponse;
    type blogV3Post_universal_d_CreateDraftPostFromTemplateRequest = CreateDraftPostFromTemplateRequest;
    type blogV3Post_universal_d_CreateDraftPostFromTemplateResponse = CreateDraftPostFromTemplateResponse;
    type blogV3Post_universal_d_DraftPost = DraftPost;
    type blogV3Post_universal_d_Origin = Origin;
    const blogV3Post_universal_d_Origin: typeof Origin;
    type blogV3Post_universal_d_Status = Status;
    const blogV3Post_universal_d_Status: typeof Status;
    type blogV3Post_universal_d_DraftPostTranslation = DraftPostTranslation;
    type blogV3Post_universal_d_GetTotalLikesPerMemberRequest = GetTotalLikesPerMemberRequest;
    type blogV3Post_universal_d_GetTotalLikesPerMemberResponse = GetTotalLikesPerMemberResponse;
    type blogV3Post_universal_d_PostLiked = PostLiked;
    type blogV3Post_universal_d_PostLikedInitiatorOneOf = PostLikedInitiatorOneOf;
    type blogV3Post_universal_d_PostUnliked = PostUnliked;
    type blogV3Post_universal_d_PostUnlikedInitiatorOneOf = PostUnlikedInitiatorOneOf;
    type blogV3Post_universal_d_PostCountersUpdated = PostCountersUpdated;
    type blogV3Post_universal_d_PostCountersUpdatedInitiatorOneOf = PostCountersUpdatedInitiatorOneOf;
    type blogV3Post_universal_d_PostOwnerChanged = PostOwnerChanged;
    type blogV3Post_universal_d_InitialPostsCopied = InitialPostsCopied;
    type blogV3Post_universal_d_GetPostRequest = GetPostRequest;
    type blogV3Post_universal_d_PostFieldField = PostFieldField;
    const blogV3Post_universal_d_PostFieldField: typeof PostFieldField;
    type blogV3Post_universal_d_GetPostResponse = GetPostResponse;
    type blogV3Post_universal_d_GetPostBySlugRequest = GetPostBySlugRequest;
    type blogV3Post_universal_d_GetPostBySlugResponse = GetPostBySlugResponse;
    type blogV3Post_universal_d_ListPostsRequest = ListPostsRequest;
    type blogV3Post_universal_d_GetPostsSort = GetPostsSort;
    const blogV3Post_universal_d_GetPostsSort: typeof GetPostsSort;
    type blogV3Post_universal_d_ListPostsResponse = ListPostsResponse;
    type blogV3Post_universal_d_QueryPostsRequest = QueryPostsRequest;
    type blogV3Post_universal_d_QueryPostsResponse = QueryPostsResponse;
    type blogV3Post_universal_d_GetPostMetricsRequest = GetPostMetricsRequest;
    type blogV3Post_universal_d_GetPostMetricsResponse = GetPostMetricsResponse;
    type blogV3Post_universal_d_BulkGetPostMetricsRequest = BulkGetPostMetricsRequest;
    type blogV3Post_universal_d_BulkGetPostMetricsResponse = BulkGetPostMetricsResponse;
    type blogV3Post_universal_d_BulkGetPostReactionsRequest = BulkGetPostReactionsRequest;
    type blogV3Post_universal_d_BulkGetPostReactionsResponse = BulkGetPostReactionsResponse;
    type blogV3Post_universal_d_Reactions = Reactions;
    type blogV3Post_universal_d_ListDemoPostsRequest = ListDemoPostsRequest;
    type blogV3Post_universal_d_ListDemoPostsResponse = ListDemoPostsResponse;
    type blogV3Post_universal_d_OldBlogMigratedEvent = OldBlogMigratedEvent;
    type blogV3Post_universal_d_ListMigratedPostsRequest = ListMigratedPostsRequest;
    type blogV3Post_universal_d_BlogCursorPaging = BlogCursorPaging;
    type blogV3Post_universal_d_ListMigratedPostsResponse = ListMigratedPostsResponse;
    type blogV3Post_universal_d_PostMigrationMetaData = PostMigrationMetaData;
    type blogV3Post_universal_d_CursorMetaData = CursorMetaData;
    type blogV3Post_universal_d_QueryPublicationsCountStatsRequest = QueryPublicationsCountStatsRequest;
    type blogV3Post_universal_d_QueryPublicationsCountStatsRequestOrder = QueryPublicationsCountStatsRequestOrder;
    const blogV3Post_universal_d_QueryPublicationsCountStatsRequestOrder: typeof QueryPublicationsCountStatsRequestOrder;
    type blogV3Post_universal_d_QueryPublicationsCountStatsResponse = QueryPublicationsCountStatsResponse;
    type blogV3Post_universal_d_PeriodPublicationsCount = PeriodPublicationsCount;
    type blogV3Post_universal_d_QueryPostCountStatsRequest = QueryPostCountStatsRequest;
    type blogV3Post_universal_d_Order = Order;
    const blogV3Post_universal_d_Order: typeof Order;
    type blogV3Post_universal_d_QueryPostCountStatsResponse = QueryPostCountStatsResponse;
    type blogV3Post_universal_d_PeriodPostCount = PeriodPostCount;
    type blogV3Post_universal_d_GetTotalPublicationsRequest = GetTotalPublicationsRequest;
    type blogV3Post_universal_d_GetTotalPublicationsResponse = GetTotalPublicationsResponse;
    type blogV3Post_universal_d_GetTotalPostsRequest = GetTotalPostsRequest;
    type blogV3Post_universal_d_GetTotalPostsResponse = GetTotalPostsResponse;
    type blogV3Post_universal_d_SendActionEventRequest = SendActionEventRequest;
    type blogV3Post_universal_d_SendActionEventRequestActionOneOf = SendActionEventRequestActionOneOf;
    type blogV3Post_universal_d_SendActionEventResponse = SendActionEventResponse;
    type blogV3Post_universal_d_ListTemplatesOptions = ListTemplatesOptions;
    const blogV3Post_universal_d_getPost: typeof getPost;
    type blogV3Post_universal_d_GetPostOptions = GetPostOptions;
    const blogV3Post_universal_d_getPostBySlug: typeof getPostBySlug;
    type blogV3Post_universal_d_GetPostBySlugOptions = GetPostBySlugOptions;
    const blogV3Post_universal_d_listPosts: typeof listPosts;
    type blogV3Post_universal_d_ListPostsOptions = ListPostsOptions;
    const blogV3Post_universal_d_queryPosts: typeof queryPosts;
    type blogV3Post_universal_d_QueryPostsOptions = QueryPostsOptions;
    type blogV3Post_universal_d_PostsQueryResult = PostsQueryResult;
    type blogV3Post_universal_d_PostsQueryBuilder = PostsQueryBuilder;
    const blogV3Post_universal_d_getPostMetrics: typeof getPostMetrics;
    type blogV3Post_universal_d_ListDemoPostsOptions = ListDemoPostsOptions;
    type blogV3Post_universal_d_ListMigratedPostsOptions = ListMigratedPostsOptions;
    type blogV3Post_universal_d_QueryPublicationsCountStatsOptions = QueryPublicationsCountStatsOptions;
    const blogV3Post_universal_d_queryPostCountStats: typeof queryPostCountStats;
    type blogV3Post_universal_d_QueryPostCountStatsOptions = QueryPostCountStatsOptions;
    type blogV3Post_universal_d_GetTotalPublicationsOptions = GetTotalPublicationsOptions;
    const blogV3Post_universal_d_getTotalPosts: typeof getTotalPosts;
    type blogV3Post_universal_d_GetTotalPostsOptions = GetTotalPostsOptions;
    type blogV3Post_universal_d_SendActionEventOptions = SendActionEventOptions;
    namespace blogV3Post_universal_d {
        export { __debug$1 as __debug, blogV3Post_universal_d_Post as Post, blogV3Post_universal_d_CoverMedia as CoverMedia, blogV3Post_universal_d_CoverMediaMediaOneOf as CoverMediaMediaOneOf, blogV3Post_universal_d_PostCountInfo as PostCountInfo, blogV3Post_universal_d_Metrics as Metrics, SeoSchema$1 as SeoSchema, Keyword$1 as Keyword, Tag$1 as Tag, Settings$1 as Settings, blogV3Post_universal_d_RichContent as RichContent, blogV3Post_universal_d_Node as Node, blogV3Post_universal_d_NodeDataOneOf as NodeDataOneOf, blogV3Post_universal_d_NodeType as NodeType, blogV3Post_universal_d_NodeStyle as NodeStyle, blogV3Post_universal_d_ButtonData as ButtonData, blogV3Post_universal_d_Border as Border, blogV3Post_universal_d_Colors as Colors, blogV3Post_universal_d_PluginContainerData as PluginContainerData, blogV3Post_universal_d_WidthType as WidthType, blogV3Post_universal_d_PluginContainerDataWidth as PluginContainerDataWidth, blogV3Post_universal_d_PluginContainerDataWidthDataOneOf as PluginContainerDataWidthDataOneOf, blogV3Post_universal_d_PluginContainerDataAlignment as PluginContainerDataAlignment, blogV3Post_universal_d_Spoiler as Spoiler, blogV3Post_universal_d_Height as Height, blogV3Post_universal_d_Type as Type, blogV3Post_universal_d_Styles as Styles, blogV3Post_universal_d_Link as Link, blogV3Post_universal_d_LinkDataOneOf as LinkDataOneOf, blogV3Post_universal_d_Target as Target, blogV3Post_universal_d_Rel as Rel, blogV3Post_universal_d_CodeBlockData as CodeBlockData, blogV3Post_universal_d_TextStyle as TextStyle, blogV3Post_universal_d_TextAlignment as TextAlignment, blogV3Post_universal_d_DividerData as DividerData, blogV3Post_universal_d_LineStyle as LineStyle, blogV3Post_universal_d_Width as Width, blogV3Post_universal_d_Alignment as Alignment, blogV3Post_universal_d_FileData as FileData, blogV3Post_universal_d_ViewMode as ViewMode, blogV3Post_universal_d_FileSource as FileSource, blogV3Post_universal_d_FileSourceDataOneOf as FileSourceDataOneOf, blogV3Post_universal_d_PDFSettings as PDFSettings, blogV3Post_universal_d_GalleryData as GalleryData, blogV3Post_universal_d_Media as Media, blogV3Post_universal_d_Image as Image, blogV3Post_universal_d_Video as Video, blogV3Post_universal_d_Item as Item, blogV3Post_universal_d_ItemDataOneOf as ItemDataOneOf, blogV3Post_universal_d_GalleryOptions as GalleryOptions, blogV3Post_universal_d_LayoutType as LayoutType, blogV3Post_universal_d_Orientation as Orientation, blogV3Post_universal_d_Crop as Crop, blogV3Post_universal_d_ThumbnailsAlignment as ThumbnailsAlignment, blogV3Post_universal_d_Layout as Layout, blogV3Post_universal_d_ItemStyle as ItemStyle, blogV3Post_universal_d_Thumbnails as Thumbnails, blogV3Post_universal_d_GIFData as GIFData, blogV3Post_universal_d_GIF as GIF, blogV3Post_universal_d_HeadingData as HeadingData, blogV3Post_universal_d_HTMLData as HTMLData, blogV3Post_universal_d_HTMLDataDataOneOf as HTMLDataDataOneOf, blogV3Post_universal_d_Source as Source, blogV3Post_universal_d_ImageData as ImageData, blogV3Post_universal_d_LinkPreviewData as LinkPreviewData, blogV3Post_universal_d_MapData as MapData, blogV3Post_universal_d_MapSettings as MapSettings, blogV3Post_universal_d_MapType as MapType, blogV3Post_universal_d_ParagraphData as ParagraphData, blogV3Post_universal_d_PollData as PollData, blogV3Post_universal_d_ViewRole as ViewRole, blogV3Post_universal_d_VoteRole as VoteRole, blogV3Post_universal_d_Permissions as Permissions, blogV3Post_universal_d_Option as Option, blogV3Post_universal_d_PollSettings as PollSettings, blogV3Post_universal_d_PollLayoutType as PollLayoutType, blogV3Post_universal_d_PollLayoutDirection as PollLayoutDirection, blogV3Post_universal_d_PollLayout as PollLayout, blogV3Post_universal_d_OptionLayout as OptionLayout, blogV3Post_universal_d_BackgroundType as BackgroundType, blogV3Post_universal_d_Gradient as Gradient, blogV3Post_universal_d_Background as Background, blogV3Post_universal_d_BackgroundBackgroundOneOf as BackgroundBackgroundOneOf, blogV3Post_universal_d_PollDesign as PollDesign, blogV3Post_universal_d_OptionDesign as OptionDesign, blogV3Post_universal_d_Poll as Poll, blogV3Post_universal_d_PollDataLayout as PollDataLayout, blogV3Post_universal_d_Design as Design, blogV3Post_universal_d_TextData as TextData, blogV3Post_universal_d_Decoration as Decoration, blogV3Post_universal_d_DecorationDataOneOf as DecorationDataOneOf, blogV3Post_universal_d_DecorationType as DecorationType, blogV3Post_universal_d_AnchorData as AnchorData, blogV3Post_universal_d_ColorData as ColorData, blogV3Post_universal_d_LinkData as LinkData, blogV3Post_universal_d_MentionData as MentionData, blogV3Post_universal_d_FontSizeData as FontSizeData, blogV3Post_universal_d_FontType as FontType, blogV3Post_universal_d_AppEmbedData as AppEmbedData, blogV3Post_universal_d_AppEmbedDataAppDataOneOf as AppEmbedDataAppDataOneOf, blogV3Post_universal_d_AppType as AppType, blogV3Post_universal_d_BookingData as BookingData, blogV3Post_universal_d_EventData as EventData, blogV3Post_universal_d_VideoData as VideoData, blogV3Post_universal_d_PlaybackOptions as PlaybackOptions, blogV3Post_universal_d_EmbedData as EmbedData, blogV3Post_universal_d_Oembed as Oembed, blogV3Post_universal_d_CollapsibleListData as CollapsibleListData, blogV3Post_universal_d_InitialExpandedItems as InitialExpandedItems, blogV3Post_universal_d_Direction as Direction, blogV3Post_universal_d_TableData as TableData, blogV3Post_universal_d_Dimensions as Dimensions, blogV3Post_universal_d_TableCellData as TableCellData, blogV3Post_universal_d_VerticalAlignment as VerticalAlignment, blogV3Post_universal_d_CellStyle as CellStyle, blogV3Post_universal_d_BorderColors as BorderColors, blogV3Post_universal_d_NullValue as NullValue, blogV3Post_universal_d_ListValue as ListValue, blogV3Post_universal_d_AudioData as AudioData, blogV3Post_universal_d_OrderedListData as OrderedListData, blogV3Post_universal_d_BulletedListData as BulletedListData, blogV3Post_universal_d_BlockquoteData as BlockquoteData, blogV3Post_universal_d_Metadata as Metadata, blogV3Post_universal_d_DocumentStyle as DocumentStyle, blogV3Post_universal_d_TextNodeStyle as TextNodeStyle, blogV3Post_universal_d_ModerationDetails as ModerationDetails, blogV3Post_universal_d_ModerationStatusStatus as ModerationStatusStatus, blogV3Post_universal_d_BlogMedia as BlogMedia, blogV3Post_universal_d_BlogMediaMediaOneOf as BlogMediaMediaOneOf, blogV3Post_universal_d_WixMedia as WixMedia, blogV3Post_universal_d_VideoResolution as VideoResolution, blogV3Post_universal_d_EmbedMedia as EmbedMedia, blogV3Post_universal_d_EmbedThumbnail as EmbedThumbnail, blogV3Post_universal_d_EmbedVideo as EmbedVideo, blogV3Post_universal_d_ListTemplatesRequest as ListTemplatesRequest, blogV3Post_universal_d_GetPostTemplatesSort as GetPostTemplatesSort, blogV3Post_universal_d_BlogPaging as BlogPaging, blogV3Post_universal_d_ListTemplatesResponse as ListTemplatesResponse, MetaData$1 as MetaData, blogV3Post_universal_d_Category as Category, blogV3Post_universal_d_GetTemplateRequest as GetTemplateRequest, blogV3Post_universal_d_GetTemplateResponse as GetTemplateResponse, blogV3Post_universal_d_CreateDraftPostFromTemplateRequest as CreateDraftPostFromTemplateRequest, blogV3Post_universal_d_CreateDraftPostFromTemplateResponse as CreateDraftPostFromTemplateResponse, blogV3Post_universal_d_DraftPost as DraftPost, blogV3Post_universal_d_Origin as Origin, blogV3Post_universal_d_Status as Status, blogV3Post_universal_d_DraftPostTranslation as DraftPostTranslation, blogV3Post_universal_d_GetTotalLikesPerMemberRequest as GetTotalLikesPerMemberRequest, blogV3Post_universal_d_GetTotalLikesPerMemberResponse as GetTotalLikesPerMemberResponse, blogV3Post_universal_d_PostLiked as PostLiked, blogV3Post_universal_d_PostLikedInitiatorOneOf as PostLikedInitiatorOneOf, blogV3Post_universal_d_PostUnliked as PostUnliked, blogV3Post_universal_d_PostUnlikedInitiatorOneOf as PostUnlikedInitiatorOneOf, blogV3Post_universal_d_PostCountersUpdated as PostCountersUpdated, blogV3Post_universal_d_PostCountersUpdatedInitiatorOneOf as PostCountersUpdatedInitiatorOneOf, Field$1 as Field, blogV3Post_universal_d_PostOwnerChanged as PostOwnerChanged, blogV3Post_universal_d_InitialPostsCopied as InitialPostsCopied, blogV3Post_universal_d_GetPostRequest as GetPostRequest, blogV3Post_universal_d_PostFieldField as PostFieldField, blogV3Post_universal_d_GetPostResponse as GetPostResponse, blogV3Post_universal_d_GetPostBySlugRequest as GetPostBySlugRequest, blogV3Post_universal_d_GetPostBySlugResponse as GetPostBySlugResponse, blogV3Post_universal_d_ListPostsRequest as ListPostsRequest, blogV3Post_universal_d_GetPostsSort as GetPostsSort, blogV3Post_universal_d_ListPostsResponse as ListPostsResponse, blogV3Post_universal_d_QueryPostsRequest as QueryPostsRequest, Sorting$1 as Sorting, SortOrder$1 as SortOrder, PlatformQuery$1 as PlatformQuery, PlatformQueryPagingMethodOneOf$1 as PlatformQueryPagingMethodOneOf, Paging$1 as Paging, CursorPaging$1 as CursorPaging, blogV3Post_universal_d_QueryPostsResponse as QueryPostsResponse, PagingMetadataV2$1 as PagingMetadataV2, Cursors$1 as Cursors, blogV3Post_universal_d_GetPostMetricsRequest as GetPostMetricsRequest, blogV3Post_universal_d_GetPostMetricsResponse as GetPostMetricsResponse, blogV3Post_universal_d_BulkGetPostMetricsRequest as BulkGetPostMetricsRequest, blogV3Post_universal_d_BulkGetPostMetricsResponse as BulkGetPostMetricsResponse, blogV3Post_universal_d_BulkGetPostReactionsRequest as BulkGetPostReactionsRequest, blogV3Post_universal_d_BulkGetPostReactionsResponse as BulkGetPostReactionsResponse, blogV3Post_universal_d_Reactions as Reactions, blogV3Post_universal_d_ListDemoPostsRequest as ListDemoPostsRequest, blogV3Post_universal_d_ListDemoPostsResponse as ListDemoPostsResponse, blogV3Post_universal_d_OldBlogMigratedEvent as OldBlogMigratedEvent, blogV3Post_universal_d_ListMigratedPostsRequest as ListMigratedPostsRequest, blogV3Post_universal_d_BlogCursorPaging as BlogCursorPaging, blogV3Post_universal_d_ListMigratedPostsResponse as ListMigratedPostsResponse, blogV3Post_universal_d_PostMigrationMetaData as PostMigrationMetaData, blogV3Post_universal_d_CursorMetaData as CursorMetaData, blogV3Post_universal_d_QueryPublicationsCountStatsRequest as QueryPublicationsCountStatsRequest, blogV3Post_universal_d_QueryPublicationsCountStatsRequestOrder as QueryPublicationsCountStatsRequestOrder, blogV3Post_universal_d_QueryPublicationsCountStatsResponse as QueryPublicationsCountStatsResponse, blogV3Post_universal_d_PeriodPublicationsCount as PeriodPublicationsCount, blogV3Post_universal_d_QueryPostCountStatsRequest as QueryPostCountStatsRequest, blogV3Post_universal_d_Order as Order, blogV3Post_universal_d_QueryPostCountStatsResponse as QueryPostCountStatsResponse, blogV3Post_universal_d_PeriodPostCount as PeriodPostCount, blogV3Post_universal_d_GetTotalPublicationsRequest as GetTotalPublicationsRequest, blogV3Post_universal_d_GetTotalPublicationsResponse as GetTotalPublicationsResponse, blogV3Post_universal_d_GetTotalPostsRequest as GetTotalPostsRequest, blogV3Post_universal_d_GetTotalPostsResponse as GetTotalPostsResponse, blogV3Post_universal_d_SendActionEventRequest as SendActionEventRequest, blogV3Post_universal_d_SendActionEventRequestActionOneOf as SendActionEventRequestActionOneOf, blogV3Post_universal_d_SendActionEventResponse as SendActionEventResponse, blogV3Post_universal_d_ListTemplatesOptions as ListTemplatesOptions, blogV3Post_universal_d_getPost as getPost, blogV3Post_universal_d_GetPostOptions as GetPostOptions, blogV3Post_universal_d_getPostBySlug as getPostBySlug, blogV3Post_universal_d_GetPostBySlugOptions as GetPostBySlugOptions, blogV3Post_universal_d_listPosts as listPosts, blogV3Post_universal_d_ListPostsOptions as ListPostsOptions, blogV3Post_universal_d_queryPosts as queryPosts, blogV3Post_universal_d_QueryPostsOptions as QueryPostsOptions, blogV3Post_universal_d_PostsQueryResult as PostsQueryResult, blogV3Post_universal_d_PostsQueryBuilder as PostsQueryBuilder, blogV3Post_universal_d_getPostMetrics as getPostMetrics, blogV3Post_universal_d_ListDemoPostsOptions as ListDemoPostsOptions, blogV3Post_universal_d_ListMigratedPostsOptions as ListMigratedPostsOptions, blogV3Post_universal_d_QueryPublicationsCountStatsOptions as QueryPublicationsCountStatsOptions, blogV3Post_universal_d_queryPostCountStats as queryPostCountStats, blogV3Post_universal_d_QueryPostCountStatsOptions as QueryPostCountStatsOptions, blogV3Post_universal_d_GetTotalPublicationsOptions as GetTotalPublicationsOptions, blogV3Post_universal_d_getTotalPosts as getTotalPosts, blogV3Post_universal_d_GetTotalPostsOptions as GetTotalPostsOptions, blogV3Post_universal_d_SendActionEventOptions as SendActionEventOptions, };
    }
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Tag {
        /**
         * Tag ID.
         * @readonly
         */
        _id?: string;
        /**
         * Tag label.
         *
         * A blog can't have two tags with the same label.
         */
        label?: string;
        /**
         * Part of a tag's URL that refers to a specific tag.
         *
         *
         * For example, `'https:/example.com/tags/{my-tag-slug}'`.
         */
        slug?: string;
        /**
         * Date the tag was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date the tag was last updated.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * Reserved for internal use.
         * @readonly
         */
        publicationCount?: number;
        /**
         * Number of posts with this tag, including unpublished draft posts.
         * @readonly
         */
        postCount?: number;
        /**
         * Tag URL.
         *
         *
         * The `url` directs you to a page that lists every post with the specified tag.
         * @readonly
         */
        url?: string;
        /**
         * Number of published posts with this tag.
         * @readonly
         */
        publishedPostCount?: number;
        /**
         * ID of the tag's translations when [Wix Multilingual](https://support.wix.com/en/article/wix-multilingual-translating-your-blog) is installed on a site. All translations of a single tag will share the same `translationId`.
         * @readonly
         */
        translationId?: string | null;
        /**
         * Tag language.
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string | null;
    }
    /**
     * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
     * The search engines use this information for ranking purposes, or to display snippets in the search results.
     * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
     */
    interface SeoSchema {
        /** SEO tags information. */
        tags?: SeoSchemaTag[];
        /** SEO general settings. */
        settings?: Settings;
    }
    interface Keyword {
        /** Keyword value */
        term?: string;
        /** Whether the keyword is the main focused */
        isMain?: boolean;
    }
    interface SeoSchemaTag {
        /**
         * SEO tag type.
         *
         *
         * Supported values: `title`, `meta`, `script`, `link`.
         */
        type?: string;
        /**
         * A `{'key':'value'} pair object where each SEO tag property (`'name'`, `'content'`, `'rel'`, `'href'`) contains a value.
         * For example: `{'name': 'description', 'content': 'the description itself'}`.
         */
        props?: Record<string, any> | null;
        /** SEO tag meta data. For example, `{height: 300, width: 240}`. */
        meta?: Record<string, any> | null;
        /** SEO tag inner content. For example, `<title> inner content </title>`. */
        children?: string;
        /** Whether the tag is a custom tag. */
        custom?: boolean;
        /** Whether the tag is disabled. */
        disabled?: boolean;
    }
    interface Settings {
        /**
         * Whether the auto redirects feature creating `301 redirects` on a slug change is enabled.
         *
         *
         * Default: enabled
         */
        preventAutoRedirect?: boolean;
        /** User-selected keyword terms for a specific page */
        keywords?: Keyword[];
    }
    interface InitialTagsCopied {
        /** Number of tags copied. */
        count?: number;
    }
    interface GetOrCreateTagRequest {
        /** Tag name. Unique per blog. */
        label: string;
        /** Tag language. */
        language?: string;
        /**
         * List of tag fields to be included if entities are present in the response.
         * Base fieldset, which is default, will return all core tag properties.
         * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
         */
        fieldsets?: Field[];
    }
    enum Field {
        UNKNOWN = "UNKNOWN",
        /** Includes Tag URL when present. */
        URL = "URL",
        /** Includes SEO data. */
        SEO = "SEO"
    }
    interface GetOrCreateTagResponse {
        /** Tag info. */
        tag?: Tag;
    }
    interface CreateTagRequest {
        /** Tag label. The label for each tag in a blog must be unique. */
        label: string;
        /**
         * Tag language.
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string;
        /** Preferred tag slug. For example, `'tag-slug'`. */
        slug?: string | null;
        /**
         * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the tag's base fields are returned.
         */
        fieldsets?: Field[];
    }
    interface CreateTagResponse {
        /** Tag info. */
        tag?: Tag;
    }
    interface UpdateTagRequest {
        /** Tag info. */
        tag?: Tag;
        /** Field mask of fields to update. */
        fieldMask?: string[];
        /**
         * List of tag fields to be included if entities are present in the response.
         * Base fieldset, which is default, will return all core tag properties.
         * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
         */
        fieldsets?: Field[];
    }
    interface UpdateTagResponse {
        /** Tag info. */
        tag?: Tag;
    }
    interface BulkCreateTagsRequest {
        /** Tags to create. */
        tags: Tag[];
        /** Whether to return the full created tag entities in the response. */
        returnFullEntity?: boolean;
        /**
         * List of tag fields to be included if entities are present in the response.
         * Base fieldset, which is default, will return all core tag properties.
         * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
         */
        fieldsets?: Field[];
    }
    interface BulkCreateTagsResponse {
        /** Tags created by bulk action. */
        results?: BulkTagResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface BulkTagResult {
        /** Bulk actions metadata for tag. */
        itemMetadata?: ItemMetadata;
        /** Optional created tag. */
        item?: Tag;
    }
    interface ItemMetadata {
        /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
        _id?: string | null;
        /** Index of the item within the request array. Allows for correlation between request and response items. */
        originalIndex?: number;
        /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
        success?: boolean;
        /** Details about the error in case of failure. */
        error?: ApplicationError;
    }
    interface ApplicationError {
        /** Error code. */
        code?: string;
        /** Description of the error. */
        description?: string;
        /** Data related to the error. */
        data?: Record<string, any> | null;
    }
    interface BulkActionMetadata {
        /** Number of items that were successfully processed. */
        totalSuccesses?: number;
        /** Number of items that couldn't be processed. */
        totalFailures?: number;
        /** Number of failures without details because detailed failure threshold was exceeded. */
        undetailedFailures?: number;
    }
    interface GetTagByLabelRequest {
        /** Tag label. */
        label: string;
        /**
         * Tag language.
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         * If omitted, tags in all languages are returned.
         */
        language?: string | null;
        /**
         * __Deprecated.__ Use `fieldsets` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * List of tag fields to be included in the response.
         */
        fieldsToInclude?: Field[];
        /**
         * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the tag's base fields are returned.
         */
        fieldsets?: Field[];
    }
    interface GetTagByLabelResponse {
        /** Tag info. */
        tag?: Tag;
    }
    interface GetTagRequest {
        /** Tag ID. */
        tagId: string;
        /**
         * __Deprecated.__ Use `fieldsets` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * List of tag fields to be included in the response.
         */
        fieldsToInclude?: Field[];
        /**
         * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the tag's base fields are returned.
         */
        fieldsets?: Field[];
    }
    interface GetTagResponse {
        /** Tag info. */
        tag?: Tag;
    }
    interface GetTagBySlugRequest {
        /** Slug of the tag to retrieve. */
        slug: string;
        /**
         * __Deprecated.__ Use `fieldsets` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * List of tag fields to be included in the response.
         */
        fieldsToInclude?: Field[];
        /**
         * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the tag's base fields are returned.
         */
        fieldsets?: Field[];
    }
    interface GetTagBySlugResponse {
        /** Tag info. */
        tag?: Tag;
    }
    interface QueryTagsRequest {
        /**
         * __Deprecated.__ Use `query` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * Filter object.
         * For a detailed list of supported filters, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/community/blog/filter-and-sort).
         */
        filter?: Record<string, any> | null;
        /**
         * __Deprecated.__ Use `query` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * Sorting options. For a list of sortable fields, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/community/blog/filter-and-sort).
         */
        sort?: Sorting[];
        /**
         * __Deprecated.__ Use `query` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * Pagination options.
         */
        paging?: Paging;
        /**
         * __Deprecated.__ Use `fieldsets` instead.
         * This parameter will be removed on June 30, 2023.
         *
         * List of tag fields to be included in the response.
         */
        fieldsToInclude?: Field[];
        /** Query options. */
        query?: PlatformQuery;
        /**
         * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the tag's base fields are returned.
         */
        fieldsets?: Field[];
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
    interface TagsFieldSet {
        /** Includes tag URL when TRUE. Defaults to FALSE. */
        includeUrl?: boolean;
    }
    interface PlatformQuery extends PlatformQueryPagingMethodOneOf {
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
        /** Paging options to limit and skip the number of items. */
        paging?: Paging;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging;
    }
    /** @oneof */
    interface PlatformQueryPagingMethodOneOf {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging;
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
    interface QueryTagsResponse {
        /** List of tags. */
        tags?: Tag[];
        /**
         * __Deprecated.__ Use `pagingMetadata` instead.
         * This property will be removed on June 30, 2023.
         *
         * Details on the paged set of results returned.
         */
        metaData?: MetaData;
        /** Details on the paged set of results returned. */
        pagingMetadata?: PagingMetadataV2;
    }
    interface MetaData {
        /** Number of items returned in this response. */
        count?: number;
        /** Requested offset. */
        offset?: number;
        /** Total number of items that match the query. */
        total?: number;
        /** Pointer to the next or previous page in the list of results. */
        cursor?: string | null;
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
    interface ListTagsRequest extends ListTagsRequestPagingMethodOneOf {
        /** Sorting options. For a list of sortable fields, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/community/blog/filter-and-sort). */
        sort?: Sorting[];
        /**
         * List of tag fields to be included if entities are present in the response.
         * Base fieldset, which is default, will return all core tag properties.
         * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
         */
        fieldsets?: Field[];
        /** Paging options to limit and skip the number of items. */
        paging?: Paging;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `sort`. */
        cursorPaging?: CursorPaging;
    }
    /** @oneof */
    interface ListTagsRequestPagingMethodOneOf {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `sort`. */
        cursorPaging?: CursorPaging;
    }
    interface ListTagsResponse {
        /** List of tags. */
        tags?: Tag[];
        /** Details on the paged set of results returned. */
        metaData?: MetaData;
    }
    interface DeleteTagRequest {
        /** Tag ID. */
        tagId: string;
    }
    interface DeleteTagResponse {
    }
    interface GetOrCreateTagOptions {
        /** Tag language. */
        language?: string;
        /**
         * List of tag fields to be included if entities are present in the response.
         * Base fieldset, which is default, will return all core tag properties.
         * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
         */
        fieldsets?: Field[];
    }
    interface CreateTagOptions {
        /**
         * Tag language.
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         */
        language?: string;
        /** Preferred tag slug. For example, `'tag-slug'`. */
        slug?: string | null;
        /**
         * List of additional tag fields to include in the response. For example, use the `URL` fieldset to retrieve the url field in
         * the response in addition to the tag's base fields. Base fields don’t include any of the supported fieldset values. By default
         * only the tag's base fields are returned.
         */
        fieldsets?: Field[];
    }
    interface UpdateTagOptions {
        tag: {
            /**
             * Tag ID.
             * @readonly
             */
            _id?: string;
            /**
             * Tag label.
             *
             * A blog can't have two tags with the same label.
             */
            label?: string;
            /**
             * Part of a tag's URL that refers to a specific tag.
             *
             *
             * For example, `'https:/example.com/tags/{my-tag-slug}'`.
             */
            slug?: string;
            /**
             * Date the tag was created.
             * @readonly
             */
            _createdDate?: Date;
            /**
             * Date the tag was last updated.
             * @readonly
             */
            _updatedDate?: Date;
            /**
             * Reserved for internal use.
             * @readonly
             */
            publicationCount?: number;
            /**
             * Number of posts with this tag, including unpublished draft posts.
             * @readonly
             */
            postCount?: number;
            /**
             * Tag URL.
             *
             *
             * The `url` directs you to a page that lists every post with the specified tag.
             * @readonly
             */
            url?: string;
            /**
             * Number of published posts with this tag.
             * @readonly
             */
            publishedPostCount?: number;
            /**
             * ID of the tag's translations when [Wix Multilingual](https://support.wix.com/en/article/wix-multilingual-translating-your-blog) is installed on a site. All translations of a single tag will share the same `translationId`.
             * @readonly
             */
            translationId?: string | null;
            /**
             * Tag language.
             *
             * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
             */
            language?: string | null;
        };
        /** Field mask of fields to update. */
        fieldMask?: string[];
        /**
         * List of tag fields to be included if entities are present in the response.
         * Base fieldset, which is default, will return all core tag properties.
         * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
         */
        fieldsets?: Field[];
    }
    interface BulkCreateTagsOptions {
        /** Whether to return the full created tag entities in the response. */
        returnFullEntity?: boolean;
        /**
         * List of tag fields to be included if entities are present in the response.
         * Base fieldset, which is default, will return all core tag properties.
         * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
         */
        fieldsets?: Field[];
    }
    /**
     * Gets a tag by the specified label.
     *
     * The `getTagByLabel()` function returns a Promise that resolves to a tag whose label matches the specified label.
     * @param label - Tag label.
     * @public
     * @requiredField GetTagByLabelRequest
     * @requiredField label
     * @param options - Options specifying which additional fields to return.
     */
    function getTagByLabel(label: string, options?: GetTagByLabelOptions): Promise<GetTagByLabelResponse>;
    interface GetTagByLabelOptions {
        /**
         * Tag language.
         *
         * 2-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
         * If omitted, tags in all languages are returned.
         */
        language?: string | null;
        /**
         * List of additional tag fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         *  `"URL"`
         */
        fieldsets?: Field[];
    }
    /**
     * Gets a tag by the specified ID.
     *
     *
     * The `getTag()` function returns a Promise that resolves to a tag whose ID matches the specified ID.
     * @param tagId - Tag ID.
     * @public
     * @requiredField tagId
     * @param options - Options specifying which additional fields to return.
     */
    function getTag(tagId: string, options?: GetTagOptions): Promise<GetTagResponse>;
    interface GetTagOptions {
        /**
         * List of additional tag fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         *  `"URL"`
         */
        fieldsets?: Field[];
    }
    /**
     * Gets a tag by the specified slug.
     *
     *
     * The `getTagBySlug()` function returns a Promise that resolves to a tag whose slug matches the specified slug.
     *
     * The `slug` is the end of a tag's URL that refers to a specific tag. For example, if a tag's URL is `https://example.com/blog/tag/{my-tag-slug}`, the slug is `my-tag-slug`. The slug is case-sensitive and derived from the tag's `label`.
     * @param slug - Slug of the tag to retrieve.
     * @public
     * @requiredField slug
     * @param options - Options specifying which additional fields to return.
     */
    function getTagBySlug(slug: string, options?: GetTagBySlugOptions): Promise<GetTagBySlugResponse>;
    interface GetTagBySlugOptions {
        /**
         * List of additional tag fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         *  `"URL"`
         */
        fieldsets?: Field[];
    }
    /**
     * Creates a query to retrieve a list of tags.
     *
     *
     * The `queryTags()` function builds a query to retrieve a list of up to 4,000 tags per language, and returns a [`TagsQueryBuilder`](https://www.wix.com/velo/reference/wix-blog-backend/tags/tagsquerybuilder) object.
     *
     * The returned object contains the query definition, which is typically used to run the query using the [`find()`](https://www.wix.com/velo/reference/wix-blog-backend/tags/tagsquerybuilder/find) function.
     *
     * You can refine the query by chaining `TagsQueryBuilder` functions onto the query. `TagsQueryBuilder` functions enable you to sort, filter, and control the results that `queryTags()` returns.
     *
     * `queryTags()` runs with these `TagsQueryBuilder` defaults that can be overridden:
     * - [`limit(50)`](https://www.wix.com/velo/reference/wix-blog-backend/tags/tagsquerybuilder/limit)
     * - [`ascending('_id')`](https://www.wix.com/velo/reference/wix-blog-backend/tags/tagsquerybuilder/ascending)
     *
     * The following `TagQueryBuilder` functions are supported for `queryTags()`. For a full description of the Tags object, see the object returned for the [`items`](https://www.wix.com/velo/reference/wix-blog-backend/tags/tagsqueryresult/items) property in [`TagsQueryResult`](https://www.wix.com/velo/reference/wix-blog-backend/tags/tagsqueryresult).
     * @public
     * @param options - Options specifying which fields to return.
     */
    function queryTags(options?: QueryTagsOptions): TagsQueryBuilder;
    interface QueryTagsOptions {
        /**
         * List of additional tag fields to be included in the response. By default, any fields not passed are not returned.
         *
         * Supported Values:
         *  `"URL"`
         */
        fieldsets?: Field[] | undefined;
    }
    interface QueryOffsetResult {
        currentPage: number;
        totalPages: number;
        totalCount: number;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface TagsQueryResult extends QueryOffsetResult {
        items: Tag[];
        query: TagsQueryBuilder;
        next: () => Promise<TagsQueryResult>;
        prev: () => Promise<TagsQueryResult>;
    }
    interface TagsQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         */
        eq: (propertyName: string, value: any) => TagsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         */
        ne: (propertyName: string, value: any) => TagsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         */
        ge: (propertyName: string, value: any) => TagsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         */
        gt: (propertyName: string, value: any) => TagsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         */
        le: (propertyName: string, value: any) => TagsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         */
        lt: (propertyName: string, value: any) => TagsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         */
        startsWith: (propertyName: string, value: string) => TagsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         */
        hasSome: (propertyName: string, value: any[]) => TagsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
        ascending: (...propertyNames: string[]) => TagsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
        descending: (...propertyNames: string[]) => TagsQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
        limit: (limit: number) => TagsQueryBuilder;
        /** @param skip - Number of items to skip in the query results before returning the results. */
        skip: (skip: number) => TagsQueryBuilder;
        find: () => Promise<TagsQueryResult>;
    }
    interface ListTagsOptions {
        /** Sorting options. For a list of sortable fields, see [Field Support for Filtering and Sorting](https://dev.wix.com/api/rest/community/blog/filter-and-sort). */
        sort?: Sorting[];
        /** Paging options to limit and skip the number of items. */
        paging?: Paging;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `sort`. */
        cursorPaging?: CursorPaging;
        /**
         * List of tag fields to be included if entities are present in the response.
         * Base fieldset, which is default, will return all core tag properties.
         * Example: When URL fieldset is selected, returned tag will have a set of base properties and tag url.
         */
        fieldsets?: Field[];
    }
    const blogV3Tag_universal_d___debug: typeof __debug;
    type blogV3Tag_universal_d_Tag = Tag;
    type blogV3Tag_universal_d_SeoSchema = SeoSchema;
    type blogV3Tag_universal_d_Keyword = Keyword;
    type blogV3Tag_universal_d_SeoSchemaTag = SeoSchemaTag;
    type blogV3Tag_universal_d_Settings = Settings;
    type blogV3Tag_universal_d_InitialTagsCopied = InitialTagsCopied;
    type blogV3Tag_universal_d_GetOrCreateTagRequest = GetOrCreateTagRequest;
    type blogV3Tag_universal_d_Field = Field;
    const blogV3Tag_universal_d_Field: typeof Field;
    type blogV3Tag_universal_d_GetOrCreateTagResponse = GetOrCreateTagResponse;
    type blogV3Tag_universal_d_CreateTagRequest = CreateTagRequest;
    type blogV3Tag_universal_d_CreateTagResponse = CreateTagResponse;
    type blogV3Tag_universal_d_UpdateTagRequest = UpdateTagRequest;
    type blogV3Tag_universal_d_UpdateTagResponse = UpdateTagResponse;
    type blogV3Tag_universal_d_BulkCreateTagsRequest = BulkCreateTagsRequest;
    type blogV3Tag_universal_d_BulkCreateTagsResponse = BulkCreateTagsResponse;
    type blogV3Tag_universal_d_BulkTagResult = BulkTagResult;
    type blogV3Tag_universal_d_ItemMetadata = ItemMetadata;
    type blogV3Tag_universal_d_ApplicationError = ApplicationError;
    type blogV3Tag_universal_d_BulkActionMetadata = BulkActionMetadata;
    type blogV3Tag_universal_d_GetTagByLabelRequest = GetTagByLabelRequest;
    type blogV3Tag_universal_d_GetTagByLabelResponse = GetTagByLabelResponse;
    type blogV3Tag_universal_d_GetTagRequest = GetTagRequest;
    type blogV3Tag_universal_d_GetTagResponse = GetTagResponse;
    type blogV3Tag_universal_d_GetTagBySlugRequest = GetTagBySlugRequest;
    type blogV3Tag_universal_d_GetTagBySlugResponse = GetTagBySlugResponse;
    type blogV3Tag_universal_d_QueryTagsRequest = QueryTagsRequest;
    type blogV3Tag_universal_d_Sorting = Sorting;
    type blogV3Tag_universal_d_SortOrder = SortOrder;
    const blogV3Tag_universal_d_SortOrder: typeof SortOrder;
    type blogV3Tag_universal_d_Paging = Paging;
    type blogV3Tag_universal_d_TagsFieldSet = TagsFieldSet;
    type blogV3Tag_universal_d_PlatformQuery = PlatformQuery;
    type blogV3Tag_universal_d_PlatformQueryPagingMethodOneOf = PlatformQueryPagingMethodOneOf;
    type blogV3Tag_universal_d_CursorPaging = CursorPaging;
    type blogV3Tag_universal_d_QueryTagsResponse = QueryTagsResponse;
    type blogV3Tag_universal_d_MetaData = MetaData;
    type blogV3Tag_universal_d_PagingMetadataV2 = PagingMetadataV2;
    type blogV3Tag_universal_d_Cursors = Cursors;
    type blogV3Tag_universal_d_ListTagsRequest = ListTagsRequest;
    type blogV3Tag_universal_d_ListTagsRequestPagingMethodOneOf = ListTagsRequestPagingMethodOneOf;
    type blogV3Tag_universal_d_ListTagsResponse = ListTagsResponse;
    type blogV3Tag_universal_d_DeleteTagRequest = DeleteTagRequest;
    type blogV3Tag_universal_d_DeleteTagResponse = DeleteTagResponse;
    type blogV3Tag_universal_d_GetOrCreateTagOptions = GetOrCreateTagOptions;
    type blogV3Tag_universal_d_CreateTagOptions = CreateTagOptions;
    type blogV3Tag_universal_d_UpdateTagOptions = UpdateTagOptions;
    type blogV3Tag_universal_d_BulkCreateTagsOptions = BulkCreateTagsOptions;
    const blogV3Tag_universal_d_getTagByLabel: typeof getTagByLabel;
    type blogV3Tag_universal_d_GetTagByLabelOptions = GetTagByLabelOptions;
    const blogV3Tag_universal_d_getTag: typeof getTag;
    type blogV3Tag_universal_d_GetTagOptions = GetTagOptions;
    const blogV3Tag_universal_d_getTagBySlug: typeof getTagBySlug;
    type blogV3Tag_universal_d_GetTagBySlugOptions = GetTagBySlugOptions;
    const blogV3Tag_universal_d_queryTags: typeof queryTags;
    type blogV3Tag_universal_d_QueryTagsOptions = QueryTagsOptions;
    type blogV3Tag_universal_d_TagsQueryResult = TagsQueryResult;
    type blogV3Tag_universal_d_TagsQueryBuilder = TagsQueryBuilder;
    type blogV3Tag_universal_d_ListTagsOptions = ListTagsOptions;
    namespace blogV3Tag_universal_d {
        export { blogV3Tag_universal_d___debug as __debug, blogV3Tag_universal_d_Tag as Tag, blogV3Tag_universal_d_SeoSchema as SeoSchema, blogV3Tag_universal_d_Keyword as Keyword, blogV3Tag_universal_d_SeoSchemaTag as SeoSchemaTag, blogV3Tag_universal_d_Settings as Settings, blogV3Tag_universal_d_InitialTagsCopied as InitialTagsCopied, blogV3Tag_universal_d_GetOrCreateTagRequest as GetOrCreateTagRequest, blogV3Tag_universal_d_Field as Field, blogV3Tag_universal_d_GetOrCreateTagResponse as GetOrCreateTagResponse, blogV3Tag_universal_d_CreateTagRequest as CreateTagRequest, blogV3Tag_universal_d_CreateTagResponse as CreateTagResponse, blogV3Tag_universal_d_UpdateTagRequest as UpdateTagRequest, blogV3Tag_universal_d_UpdateTagResponse as UpdateTagResponse, blogV3Tag_universal_d_BulkCreateTagsRequest as BulkCreateTagsRequest, blogV3Tag_universal_d_BulkCreateTagsResponse as BulkCreateTagsResponse, blogV3Tag_universal_d_BulkTagResult as BulkTagResult, blogV3Tag_universal_d_ItemMetadata as ItemMetadata, blogV3Tag_universal_d_ApplicationError as ApplicationError, blogV3Tag_universal_d_BulkActionMetadata as BulkActionMetadata, blogV3Tag_universal_d_GetTagByLabelRequest as GetTagByLabelRequest, blogV3Tag_universal_d_GetTagByLabelResponse as GetTagByLabelResponse, blogV3Tag_universal_d_GetTagRequest as GetTagRequest, blogV3Tag_universal_d_GetTagResponse as GetTagResponse, blogV3Tag_universal_d_GetTagBySlugRequest as GetTagBySlugRequest, blogV3Tag_universal_d_GetTagBySlugResponse as GetTagBySlugResponse, blogV3Tag_universal_d_QueryTagsRequest as QueryTagsRequest, blogV3Tag_universal_d_Sorting as Sorting, blogV3Tag_universal_d_SortOrder as SortOrder, blogV3Tag_universal_d_Paging as Paging, blogV3Tag_universal_d_TagsFieldSet as TagsFieldSet, blogV3Tag_universal_d_PlatformQuery as PlatformQuery, blogV3Tag_universal_d_PlatformQueryPagingMethodOneOf as PlatformQueryPagingMethodOneOf, blogV3Tag_universal_d_CursorPaging as CursorPaging, blogV3Tag_universal_d_QueryTagsResponse as QueryTagsResponse, blogV3Tag_universal_d_MetaData as MetaData, blogV3Tag_universal_d_PagingMetadataV2 as PagingMetadataV2, blogV3Tag_universal_d_Cursors as Cursors, blogV3Tag_universal_d_ListTagsRequest as ListTagsRequest, blogV3Tag_universal_d_ListTagsRequestPagingMethodOneOf as ListTagsRequestPagingMethodOneOf, blogV3Tag_universal_d_ListTagsResponse as ListTagsResponse, blogV3Tag_universal_d_DeleteTagRequest as DeleteTagRequest, blogV3Tag_universal_d_DeleteTagResponse as DeleteTagResponse, blogV3Tag_universal_d_GetOrCreateTagOptions as GetOrCreateTagOptions, blogV3Tag_universal_d_CreateTagOptions as CreateTagOptions, blogV3Tag_universal_d_UpdateTagOptions as UpdateTagOptions, blogV3Tag_universal_d_BulkCreateTagsOptions as BulkCreateTagsOptions, blogV3Tag_universal_d_getTagByLabel as getTagByLabel, blogV3Tag_universal_d_GetTagByLabelOptions as GetTagByLabelOptions, blogV3Tag_universal_d_getTag as getTag, blogV3Tag_universal_d_GetTagOptions as GetTagOptions, blogV3Tag_universal_d_getTagBySlug as getTagBySlug, blogV3Tag_universal_d_GetTagBySlugOptions as GetTagBySlugOptions, blogV3Tag_universal_d_queryTags as queryTags, blogV3Tag_universal_d_QueryTagsOptions as QueryTagsOptions, blogV3Tag_universal_d_TagsQueryResult as TagsQueryResult, blogV3Tag_universal_d_TagsQueryBuilder as TagsQueryBuilder, blogV3Tag_universal_d_ListTagsOptions as ListTagsOptions, };
    }
    export { blogV3Category_universal_d as categories, blogV3Post_universal_d as posts, blogV3Tag_universal_d as tags };
}
