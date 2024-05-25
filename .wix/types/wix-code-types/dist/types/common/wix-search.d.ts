/**
 * The wix-search module contains functionality for searching a site.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-search.html#)
 */
declare module 'wix-search' {
    /**
     * Creates a filter builder for building search filters.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-search.html#filter)
     */
    function filter(): WixSearchFilterBuilder;
    /**
     * Creates a search builder.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-search.html#search)
     */
    function search(phrase?: string): WixSearchBuilder;
    /**
     * Contains functionality for filtering a site search.
     */
    type WixSearchFilter = {
        /**
         * An object containing the filter definition.
         */
        filterDefinition: any;
    };
    /**
     * Contains functionality for refining a site search.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#)
     */
    interface WixSearchBuilder {
        /**
         * Refines a search to match documents that meet the conditions of all of the specified filters.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#and)
         */
        and(...filters: WixSearchFilter[]): WixSearchBuilder;
        /**
         * Adds a sort to a search, sorting by the specified fields in ascending order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#ascending)
         */
        ascending(...field: string[]): WixSearchBuilder;
        /**
         * Adds a sort to a search, sorting by the specified fields in descending order.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#descending)
         */
        descending(...field: string[]): WixSearchBuilder;
        /**
         * Refines a search builder to only search for documents of the specified document type.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#documentType)
         */
        documentType(type: string): WixSearchBuilder;
        /**
         * Refines a search to match documents whose specified field value equals the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#eq)
         */
        eq(field: string, value: any): WixSearchBuilder;
        /**
         * Categorizes search results according to the specified facets.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#facets)
         */
        facets(...facets: string[]): WixSearchBuilder;
        /**
         * Returns the documents that match the search.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#find)
         */
        find(): Promise<WixSearchResult>;
        /**
         * Sets whether to search for exact matches or approximate matches of the search phrase.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#fuzzy)
         */
        fuzzy(fuzzy: boolean): WixSearchBuilder;
        /**
         * Refines a search to match documents whose specified field value is greater than or equal to the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#ge)
         */
        ge(field: string, value: string | number | Date): WixSearchBuilder;
        /**
         * Refines a search to match documents whose specified field value is greater than the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#gt)
         */
        gt(field: string, value: string | number | Date): WixSearchBuilder;
        /**
         * Refines a search to match documents whose specified field value contains all of the specified values.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#hasAll)
         */
        hasAll(field: string, values: string[]): WixSearchBuilder;
        /**
         * Refines a search to match documents whose specified field contains any of the specified values.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#hasSome)
         */
        hasSome(field: string, values: string[]): WixSearchBuilder;
        /**
         * Refines a search to match documents whose specified field value equals any of the specified values.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#in)
         */
        in(field: string, values: string[] | number[]): WixSearchBuilder;
        /**
         * Refines a search builder to search in the specified language.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#language)
         */
        language(language: string): WixSearchBuilder;
        /**
         * Refines a search or filter to match documents whose specified field value is less than or equal to the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#le)
         */
        le(field: string, value: string | number | Date): WixSearchBuilder;
        /**
         * Limits the number of documents the search returns.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#limit)
         */
        limit(limit: number): WixSearchBuilder;
        /**
         * Refines a search or filter to match documents whose specified field value is less than the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#lt)
         */
        lt(field: string, value: string | number | Date): WixSearchBuilder;
        /**
         * Refines a search to match documents whose specified field value does not equal the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#ne)
         */
        ne(field: string, value: any): WixSearchBuilder;
        /**
         * Refines a search to match documents that do not meet the conditions of all of the specified filters.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#not)
         */
        not(...filters: WixSearchFilter[]): WixSearchBuilder;
        /**
         * Refines a search to match documents that meet the condition of any of the specified filters.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#or)
         */
        or(...filters: WixSearchFilter[]): WixSearchBuilder;
        /**
         * Sets the search phrase to search for.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#query)
         */
        query(phrase: string): WixSearchBuilder;
        /**
         * Refines a search to include only certain fields.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#searchFields)
         */
        searchFields(fields: string[]): WixSearchBuilder;
        /**
         * Sets the number of documents to skip before returning search results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchBuilder.html#skip)
         */
        skip(skip: number): WixSearchBuilder;
    }
    /**
     * Contains functionality for creating filters to use in a site search.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#)
     */
    interface WixSearchFilterBuilder {
        /**
         * Creates a search filter for matching documents that meet the conditions of all of the specified filters.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#and)
         */
        and(...filters: WixSearchFilter[]): WixSearchFilter;
        /**
         * Creates a search filter for matching documents whose specified field value equals the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#eq)
         */
        eq(field: string, value: any): WixSearchFilter;
        /**
         * Creates a search filter for matching documents whose specified field value is greater than or equal to the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#ge)
         */
        ge(field: string, value: string | number | Date): WixSearchFilter;
        /**
         * Creates a search filter for matching documents whose specified field value is greater than the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#gt)
         */
        gt(field: string, value: string | number | Date): WixSearchFilter;
        /**
         * Creates a search filter for matching documents whose specified field value contains all of the specified values.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#hasAll)
         */
        hasAll(field: string, values: string[]): WixSearchFilter;
        /**
         * Creates a search filter for matching documents whose specified field contains any of the specified values.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#hasSome)
         */
        hasSome(field: string, values: string[]): WixSearchFilter;
        /**
         * Creates a search filter for matching documents whose specified field value equals any of the specified values.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#in)
         */
        in(field: string, values: string[] | number[]): WixSearchFilter;
        /**
         * Creates a search filter for matching documents whose specified field value is less than or equal to the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#le)
         */
        le(field: string, value: string | number | Date): WixSearchFilter;
        /**
         * Creates a search filter for matching documents whose specified field value is less than the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#lt)
         */
        lt(field: string, value: string | number | Date): WixSearchFilter;
        /**
         * Creates a search filter for matching documents whose specified field value does not equal the specified value.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#ne)
         */
        ne(field: string, value: any): WixSearchFilter;
        /**
         * Creates a search filter for matching documents that do not meet the conditions of all of the specified filters.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#not)
         */
        not(...filters: WixSearchFilter[]): WixSearchFilter;
        /**
         * Creates a filter for matching documents that meet the condition of any of the specified filters.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchFilterBuilder.html#or)
         */
        or(...filters: WixSearchFilter[]): WixSearchFilter;
    }
    /**
     * The results of a site search, containing the retrieved documents.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#)
     */
    interface WixSearchResult {
        /**
         * Returns the index of the current results page number.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#currentPage)
         */
        readonly currentPage: number;
        /**
         * Returns the documents that match the search.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#documents)
         */
        readonly documents: WixSearchResult.Document[];
        /**
         * Returns the facet results retrieved by the search.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#facets)
         */
        readonly facets: WixSearchResult.FacetResult[];
        /**
         * Returns the number of documents in the current results page.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#length)
         */
        readonly length: number;
        /**
         * Returns the search page size.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#pageSize)
         */
        readonly pageSize: number;
        /**
         * Returns the total number of documents that match the search.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#totalCount)
         */
        readonly totalCount: number;
        /**
         * Returns the total number of pages the search produced.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#totalPages)
         */
        readonly totalPages: number;
        /**
         * Indicates if the search has another page of results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#hasNext)
         */
        hasNext(): boolean;
        /**
         * Indicates if the search has a previous page of results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#hasPrev)
         */
        hasPrev(): boolean;
        /**
         * Retrieves the next page of search results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#next)
         */
        next(): Promise<WixSearchResult>;
        /**
         * Retrieves the previous page of search results.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#prev)
         */
        prev(): Promise<WixSearchResult>;
    }
    /**
     * The results of a site search, containing the retrieved documents.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-search.WixSearchResult.html#)
     */
    namespace WixSearchResult {
        /**
         * A document returned by a site search. The following are the default properties included in every search result document. For app-specific properties, check the supported schema for each [`documentType`](wix-search.WixSearchBuilder.html#documentType).
         */
        type Document = {
            /**
             * Unique document identifier.
             */
            _id: string;
            /**
             * Document image in the following format: `wix:image://v1//#originWidth=&originHeight=[&watermark=]`
             */
            image: string;
            /**
             * Document type.
             *  One of the following:
             *
             *  + `Site/Pages`
             *  + `Blog/Posts`
             *  + `Bookings/Services`
             *  + `Forum/Content`
             *  + `Stores/Products`
             */
            documentType: string;
            /**
             * The relative page URL. For regular site pages, the URL defined in [SEO settings](https://support.wix.com/en/article/changing-your-page-url). Note that the `url` for the home page is an empty string. For Wix app pages, the URL stored in the database collection.
             */
            url: string;
            /**
             * For regular site pages, all text on the page. For Wix app pages, the description or content stored in the database collection.
             */
            description: string;
            /**
             * For regular site pages, the [SEO page title](https://support.wix.com/en/article/adding-seo-page-titles-and-descriptions-meta-tags#page-titles). For Wix app pages, the title or name stored in the database collection.
             */
            title: string;
        };
        /**
         * Facet value information.
         */
        type Facet = {
            /**
             * Facet value.
             */
            facetValue: string;
            /**
             * Number of returned documents that match the facet value.
             */
            count: number;
        };
        /**
         * Facet information for a single facet specified for the search. Includes the name of the specified facet and the results for each facet value.
         */
        type FacetGroup = {
            /**
             * Name of the facet specified for the search.
             */
            facet: string;
            /**
             * Information about the facet values for the specified facet.
             */
            facets: WixSearchResult.Facet[];
        };
        /**
         * A facet result returned by a site search. A facet result is returned for each parameter specified in the [`facets()`](wix-search.WixSearchBuilder.html#facets) function.
         */
        type FacetResult = {
            /**
             * A facet group with facet information. Includes the name of the specified facet and the results for each facet value.
             */
            facets: WixSearchResult.FacetGroup[];
        };
    }
}
