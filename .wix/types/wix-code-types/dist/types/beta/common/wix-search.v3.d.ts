declare module "wix-search.v3" {
  interface SiteDocument {
      /** @readonly */
      _id?: string;
      /** the document payload */
      document?: Record<string, any> | null;
  }
  interface SearchRequest {
      /** Search query */
      search: Search;
      /** Document type of documents to search for. All document types are searched if not provided. */
      documentType: DocumentType;
      /** Language to search in. */
      language?: string | null;
  }
  interface Search extends SearchPagingMethodOneOf {
      /** Pointer to page of results using offset. Can not be used together with 'cursor_paging' */
      paging?: Paging;
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter?: Record<string, any> | null;
      /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
      sort?: Sorting[];
      /** Aggregations | Faceted search: refers to a way to explore large amounts of data by displaying summaries about various partitions of the data and later allowing to narrow the navigation to a specific partition. */
      aggregations?: Aggregation[];
      /** Free text to match in searchable fields */
      search?: SearchDetails;
  }
  /** @oneof */
  interface SearchPagingMethodOneOf {
      /** Pointer to page of results using offset. Can not be used together with 'cursor_paging' */
      paging?: Paging;
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
  interface Aggregation extends AggregationKindOneOf {
      /** Value aggregation */
      value?: ValueAggregation;
      /** Scalar aggregation */
      scalar?: ScalarAggregation;
      /** Nested aggregation */
      nested?: NestedAggregation;
      /** User-defined name of aggregation, should be unique, will appear in aggregation results */
      name?: string | null;
      /** Type of aggregation, client must provide matching aggregation field below */
      type?: AggregationType;
      /** Field to aggregate by, use dot notation to specify json path */
      fieldPath?: string;
  }
  /** @oneof */
  interface AggregationKindOneOf {
      /** Value aggregation */
      value?: ValueAggregation;
      /** Scalar aggregation */
      scalar?: ScalarAggregation;
      /** Nested aggregation */
      nested?: NestedAggregation;
  }
  enum ScalarType {
      UNKNOWN_SCALAR_TYPE = "UNKNOWN_SCALAR_TYPE",
      /** Minimum value */
      MIN = "MIN",
      /** Maximum value */
      MAX = "MAX",
      /** Sum of values */
      SUM = "SUM"
  }
  enum NestedAggregationType {
      UNKNOWN_AGGREGATION_TYPE = "UNKNOWN_AGGREGATION_TYPE",
      /** An aggregation where result buckets are dynamically built - one per unique value */
      VALUE = "VALUE",
      /** A single-value metric aggregation - e.g. min, max, sum, avg */
      SCALAR = "SCALAR"
  }
  interface ValueAggregation {
      /** How many aggregations would you like to return? Can be between 1 and 250. 10 is the default. */
      limit?: number | null;
  }
  interface ScalarAggregation {
      /** Define the operator for the scalar aggregation */
      type?: ScalarType;
  }
  interface NestedAggregationItem extends NestedAggregationItemKindOneOf {
      /** Value aggregation */
      value?: ValueAggregation;
      /** Scalar aggregation */
      scalar?: ScalarAggregation;
      /** User-defined name of aggregation, should be unique, will appear in aggregation results */
      name?: string | null;
      /** Type of aggregation, client must provide matching aggregation field below */
      type?: NestedAggregationType;
      /** Field to aggregate by, use dont notation to specify json path */
      fieldPath?: string;
  }
  /** @oneof */
  interface NestedAggregationItemKindOneOf {
      /** Value aggregation */
      value?: ValueAggregation;
      /** Scalar aggregation */
      scalar?: ScalarAggregation;
  }
  enum AggregationType {
      UNKNOWN_AGGREGATION_TYPE = "UNKNOWN_AGGREGATION_TYPE",
      /** An aggregation where result buckets are dynamically built - one per unique value */
      VALUE = "VALUE",
      /** A single-value metric aggregation - e.g. min, max, sum, avg */
      SCALAR = "SCALAR",
      /** Multi-level aggregation, where each next aggregation is nested within previous one */
      NESTED = "NESTED"
  }
  /** Nested aggregation expressed through a list of aggregation where each next aggregation is nested within previous one */
  interface NestedAggregation {
      /** Flattened list of aggregations, where each next aggregation is nested within previous one */
      nestedAggregations?: NestedAggregationItem[];
  }
  interface SearchDetails {
      /** Search term or expression */
      expression?: string | null;
      /** Fields to search in. If empty - will search in all searchable fields. Use dot notation to specify json path */
      fields?: string[];
      /** Flag if should use auto fuzzy search (allowing typos by a managed proximity algorithm) */
      fuzzy?: boolean;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  enum DocumentType {
      UNSPECIFIED = "UNSPECIFIED",
      BLOG_POSTS = "BLOG_POSTS",
      BOOKING_SERVICES = "BOOKING_SERVICES",
      EVENTS = "EVENTS",
      FORUM_CONTENT = "FORUM_CONTENT",
      ONLINE_PROGRAMS = "ONLINE_PROGRAMS",
      PROGALLERY_ITEM = "PROGALLERY_ITEM",
      STORES_PRODUCTS = "STORES_PRODUCTS"
  }
  interface SearchResponse extends SearchResponsePagingOneOf {
      /** Paging metadata for the next page of results. */
      pagingOffsetMetadata?: PagingMetadata;
      /** Documents matching filter and query. */
      siteDocuments?: SiteDocument[];
      /** Response aggregation data */
      aggregationData?: AggregationData;
  }
  /** @oneof */
  interface SearchResponsePagingOneOf {
      /** Paging metadata for the next page of results. */
      pagingOffsetMetadata?: PagingMetadata;
  }
  interface AggregationData {
      /** key = aggregation name (as derived from search request) */
      results?: AggregationResults[];
  }
  interface ValueAggregationResult {
      /** Value of the field */
      value?: string;
      count?: number;
  }
  interface ValueResults {
      /** List of value aggregations */
      results?: ValueAggregationResult[];
  }
  interface AggregationResultsScalarResult {
      /** Type of scalar aggregation */
      type?: ScalarType;
      /** Value of the scalar aggregation */
      value?: number;
  }
  interface ValueResult {
      /** Value of the field */
      value?: string;
      /** Count of entities with this value */
      count?: number | null;
  }
  interface ScalarResult {
      /** Value of the scalar aggregation */
      value?: number;
  }
  interface NestedResultValue extends NestedResultValueResultOneOf {
      /** Value aggregation result */
      value?: ValueResult;
      /** Scalar aggregation result */
      scalar?: ScalarResult;
  }
  /** @oneof */
  interface NestedResultValueResultOneOf {
      /** Value aggregation result */
      value?: ValueResult;
      /** Scalar aggregation result */
      scalar?: ScalarResult;
  }
  interface Results {
      /** List of nested aggregations */
      results?: Record<string, NestedResultValue>;
  }
  /**
   * Results of `NESTED` aggregation type in a flattened form
   * aggregations in resulting array are keyed by requested aggregation `name`.
   */
  interface NestedResults {
      /** List of nested aggregations */
      results?: Results[];
  }
  interface AggregationResults extends AggregationResultsResultOneOf {
      /** Value aggregation results */
      values?: ValueResults;
      /** Scalar aggregation results */
      scalar?: AggregationResultsScalarResult;
      /** Nested aggregation results */
      nested?: NestedResults;
      /** User-defined name of aggregation as derived from search request */
      name?: string;
      /** Type of aggregation that must match provided kind as derived from search request */
      type?: AggregationType;
      /** Field to aggregate by as derived from search request */
      fieldPath?: string;
  }
  /** @oneof */
  interface AggregationResultsResultOneOf {
      /** Value aggregation results */
      values?: ValueResults;
      /** Scalar aggregation results */
      scalar?: AggregationResultsScalarResult;
      /** Nested aggregation results */
      nested?: NestedResults;
  }
  interface PagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  /**
   * Search for documents
   * @param search - Search query
   * @public
   * @documentationMaturity preview
   * @requiredField options.documentType
   * @requiredField search
   */
  function search(search: Search, options?: SearchOptions): Promise<SearchResponse>;
  interface SearchOptions {
      /** Document type of documents to search for. All document types are searched if not provided. */
      documentType: DocumentType;
      /** Language to search in. */
      language?: string | null;
  }
  
  type searchPlatformizedV1Sitedocument_universal_d_SiteDocument = SiteDocument;
  type searchPlatformizedV1Sitedocument_universal_d_SearchRequest = SearchRequest;
  type searchPlatformizedV1Sitedocument_universal_d_Search = Search;
  type searchPlatformizedV1Sitedocument_universal_d_SearchPagingMethodOneOf = SearchPagingMethodOneOf;
  type searchPlatformizedV1Sitedocument_universal_d_Sorting = Sorting;
  type searchPlatformizedV1Sitedocument_universal_d_SortOrder = SortOrder;
  const searchPlatformizedV1Sitedocument_universal_d_SortOrder: typeof SortOrder;
  type searchPlatformizedV1Sitedocument_universal_d_Aggregation = Aggregation;
  type searchPlatformizedV1Sitedocument_universal_d_AggregationKindOneOf = AggregationKindOneOf;
  type searchPlatformizedV1Sitedocument_universal_d_ScalarType = ScalarType;
  const searchPlatformizedV1Sitedocument_universal_d_ScalarType: typeof ScalarType;
  type searchPlatformizedV1Sitedocument_universal_d_NestedAggregationType = NestedAggregationType;
  const searchPlatformizedV1Sitedocument_universal_d_NestedAggregationType: typeof NestedAggregationType;
  type searchPlatformizedV1Sitedocument_universal_d_ValueAggregation = ValueAggregation;
  type searchPlatformizedV1Sitedocument_universal_d_ScalarAggregation = ScalarAggregation;
  type searchPlatformizedV1Sitedocument_universal_d_NestedAggregationItem = NestedAggregationItem;
  type searchPlatformizedV1Sitedocument_universal_d_NestedAggregationItemKindOneOf = NestedAggregationItemKindOneOf;
  type searchPlatformizedV1Sitedocument_universal_d_AggregationType = AggregationType;
  const searchPlatformizedV1Sitedocument_universal_d_AggregationType: typeof AggregationType;
  type searchPlatformizedV1Sitedocument_universal_d_NestedAggregation = NestedAggregation;
  type searchPlatformizedV1Sitedocument_universal_d_SearchDetails = SearchDetails;
  type searchPlatformizedV1Sitedocument_universal_d_Paging = Paging;
  type searchPlatformizedV1Sitedocument_universal_d_DocumentType = DocumentType;
  const searchPlatformizedV1Sitedocument_universal_d_DocumentType: typeof DocumentType;
  type searchPlatformizedV1Sitedocument_universal_d_SearchResponse = SearchResponse;
  type searchPlatformizedV1Sitedocument_universal_d_SearchResponsePagingOneOf = SearchResponsePagingOneOf;
  type searchPlatformizedV1Sitedocument_universal_d_AggregationData = AggregationData;
  type searchPlatformizedV1Sitedocument_universal_d_ValueAggregationResult = ValueAggregationResult;
  type searchPlatformizedV1Sitedocument_universal_d_ValueResults = ValueResults;
  type searchPlatformizedV1Sitedocument_universal_d_AggregationResultsScalarResult = AggregationResultsScalarResult;
  type searchPlatformizedV1Sitedocument_universal_d_ValueResult = ValueResult;
  type searchPlatformizedV1Sitedocument_universal_d_ScalarResult = ScalarResult;
  type searchPlatformizedV1Sitedocument_universal_d_NestedResultValue = NestedResultValue;
  type searchPlatformizedV1Sitedocument_universal_d_NestedResultValueResultOneOf = NestedResultValueResultOneOf;
  type searchPlatformizedV1Sitedocument_universal_d_Results = Results;
  type searchPlatformizedV1Sitedocument_universal_d_NestedResults = NestedResults;
  type searchPlatformizedV1Sitedocument_universal_d_AggregationResults = AggregationResults;
  type searchPlatformizedV1Sitedocument_universal_d_AggregationResultsResultOneOf = AggregationResultsResultOneOf;
  type searchPlatformizedV1Sitedocument_universal_d_PagingMetadata = PagingMetadata;
  const searchPlatformizedV1Sitedocument_universal_d_search: typeof search;
  type searchPlatformizedV1Sitedocument_universal_d_SearchOptions = SearchOptions;
  namespace searchPlatformizedV1Sitedocument_universal_d {
    export {
      searchPlatformizedV1Sitedocument_universal_d_SiteDocument as SiteDocument,
      searchPlatformizedV1Sitedocument_universal_d_SearchRequest as SearchRequest,
      searchPlatformizedV1Sitedocument_universal_d_Search as Search,
      searchPlatformizedV1Sitedocument_universal_d_SearchPagingMethodOneOf as SearchPagingMethodOneOf,
      searchPlatformizedV1Sitedocument_universal_d_Sorting as Sorting,
      searchPlatformizedV1Sitedocument_universal_d_SortOrder as SortOrder,
      searchPlatformizedV1Sitedocument_universal_d_Aggregation as Aggregation,
      searchPlatformizedV1Sitedocument_universal_d_AggregationKindOneOf as AggregationKindOneOf,
      searchPlatformizedV1Sitedocument_universal_d_ScalarType as ScalarType,
      searchPlatformizedV1Sitedocument_universal_d_NestedAggregationType as NestedAggregationType,
      searchPlatformizedV1Sitedocument_universal_d_ValueAggregation as ValueAggregation,
      searchPlatformizedV1Sitedocument_universal_d_ScalarAggregation as ScalarAggregation,
      searchPlatformizedV1Sitedocument_universal_d_NestedAggregationItem as NestedAggregationItem,
      searchPlatformizedV1Sitedocument_universal_d_NestedAggregationItemKindOneOf as NestedAggregationItemKindOneOf,
      searchPlatformizedV1Sitedocument_universal_d_AggregationType as AggregationType,
      searchPlatformizedV1Sitedocument_universal_d_NestedAggregation as NestedAggregation,
      searchPlatformizedV1Sitedocument_universal_d_SearchDetails as SearchDetails,
      searchPlatformizedV1Sitedocument_universal_d_Paging as Paging,
      searchPlatformizedV1Sitedocument_universal_d_DocumentType as DocumentType,
      searchPlatformizedV1Sitedocument_universal_d_SearchResponse as SearchResponse,
      searchPlatformizedV1Sitedocument_universal_d_SearchResponsePagingOneOf as SearchResponsePagingOneOf,
      searchPlatformizedV1Sitedocument_universal_d_AggregationData as AggregationData,
      searchPlatformizedV1Sitedocument_universal_d_ValueAggregationResult as ValueAggregationResult,
      searchPlatformizedV1Sitedocument_universal_d_ValueResults as ValueResults,
      searchPlatformizedV1Sitedocument_universal_d_AggregationResultsScalarResult as AggregationResultsScalarResult,
      searchPlatformizedV1Sitedocument_universal_d_ValueResult as ValueResult,
      searchPlatformizedV1Sitedocument_universal_d_ScalarResult as ScalarResult,
      searchPlatformizedV1Sitedocument_universal_d_NestedResultValue as NestedResultValue,
      searchPlatformizedV1Sitedocument_universal_d_NestedResultValueResultOneOf as NestedResultValueResultOneOf,
      searchPlatformizedV1Sitedocument_universal_d_Results as Results,
      searchPlatformizedV1Sitedocument_universal_d_NestedResults as NestedResults,
      searchPlatformizedV1Sitedocument_universal_d_AggregationResults as AggregationResults,
      searchPlatformizedV1Sitedocument_universal_d_AggregationResultsResultOneOf as AggregationResultsResultOneOf,
      searchPlatformizedV1Sitedocument_universal_d_PagingMetadata as PagingMetadata,
      searchPlatformizedV1Sitedocument_universal_d_search as search,
      searchPlatformizedV1Sitedocument_universal_d_SearchOptions as SearchOptions,
    };
  }
  
  export { searchPlatformizedV1Sitedocument_universal_d as wixSiteSearch };
}
