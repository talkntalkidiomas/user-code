declare module "wix-search.v2" {
  /** API is not yet fully migrated to FQDN entity */
  interface SiteDocument {
      /** the document payload */
      document?: Record<string, any> | null;
  }
  interface UpdateInternalDocumentsEvent extends UpdateInternalDocumentsEventOperationOneOf {
      /** insert/update documents */
      update?: InternalDocumentUpdateOperation;
      /** delete by document ids */
      deleteByIds?: DeleteByIdsOperation;
      /** delete documents matching filter */
      deleteByFilter?: DeleteByFilterOperation;
      /** update internal documents matching filter */
      updateByFilter?: InternalDocumentUpdateByFilterOperation;
      /** update only existing documents */
      updateExisting?: InternalUpdateExistingOperation;
      /** insert/update documents with versioning */
      versionedUpdate?: VersionedDocumentUpdateOperation;
      /** delete by document ids with versioning */
      versionedDeleteByIds?: VersionedDeleteByIdsOperation;
      /** type of the documents */
      documentType?: string;
      /** language of the documents (mandatory) */
      language?: string | null;
      /** one or more search documents */
      addDocuments?: InternalDocument[];
      /** one or more ids of indexed documents to be removed. Removal will happen before addition (if both provided) */
      removeDocumentIds?: string[];
      /** id to pass to processing notification */
      correlationId?: string | null;
  }
  /** @oneof */
  interface UpdateInternalDocumentsEventOperationOneOf {
      /** insert/update documents */
      update?: InternalDocumentUpdateOperation;
      /** delete by document ids */
      deleteByIds?: DeleteByIdsOperation;
      /** delete documents matching filter */
      deleteByFilter?: DeleteByFilterOperation;
      /** update internal documents matching filter */
      updateByFilter?: InternalDocumentUpdateByFilterOperation;
      /** update only existing documents */
      updateExisting?: InternalUpdateExistingOperation;
      /** insert/update documents with versioning */
      versionedUpdate?: VersionedDocumentUpdateOperation;
      /** delete by document ids with versioning */
      versionedDeleteByIds?: VersionedDeleteByIdsOperation;
  }
  interface InternalDocument {
      /** document with mandatory fields (id) and with fields specific to the type of the document */
      document?: Record<string, any> | null;
  }
  interface InternalDocumentUpdateOperation {
      /** documents to index or update */
      documents?: InternalDocument[];
  }
  interface DeleteByIdsOperation {
      /** ids of the documents to delete */
      documentIds?: string[];
  }
  interface DeleteByFilterOperation {
      /** documents matching this filter wil be deleted. only filterable documents defined in document_type can be used for filtering */
      filter?: Record<string, any> | null;
  }
  interface InternalDocumentUpdateByFilterOperation {
      /** documents matching this filter will be updated */
      filter?: Record<string, any> | null;
      /** partial document to apply */
      document?: InternalDocument;
  }
  interface InternalUpdateExistingOperation {
      /** documents to update */
      documents?: InternalDocument[];
  }
  interface VersionedDocumentUpdateOperation {
      /** documents to create or overwrite */
      documents?: InternalDocument[];
      /** versioning mode to use instead of default */
      versioningMode?: VersioningMode;
  }
  enum VersioningMode {
      /** use default versioning mode agreed with search team */
      DEFAULT = "DEFAULT",
      /** execute only if version is greater than existing */
      GREATER_THAN = "GREATER_THAN",
      /** execute only if version is greater or equal to existing */
      GREATER_OR_EQUAL = "GREATER_OR_EQUAL"
  }
  interface VersionedDeleteByIdsOperation {
      /** ids with version of the documents to delete */
      documentIds?: VersionedDocumentId[];
  }
  interface VersionedDocumentId {
      /** document id */
      documentId?: string;
      /** document version */
      version?: string;
      /** versioning mode to use instead of default */
      versioningMode?: VersioningMode;
  }
  interface UpdateDocumentsEvent extends UpdateDocumentsEventOperationOneOf {
      /** insert/update documents */
      update?: DocumentUpdateOperation;
      /** delete by document ids */
      deleteByIds?: V1DeleteByIdsOperation;
      /** delete documents matching filter */
      deleteByFilter?: V1DeleteByFilterOperation;
      /** update documents matching filter */
      updateByFilter?: UpdateByFilterOperation;
      /** update only existing documents */
      updateExisting?: UpdateExistingOperation;
      /** application which owns documents */
      appDefId?: string | null;
      /** type of the documents */
      documentType?: string | null;
      /** language of the documents */
      language?: string | null;
      /** site documents belong to */
      msId?: string | null;
  }
  /** @oneof */
  interface UpdateDocumentsEventOperationOneOf {
      /** insert/update documents */
      update?: DocumentUpdateOperation;
      /** delete by document ids */
      deleteByIds?: V1DeleteByIdsOperation;
      /** delete documents matching filter */
      deleteByFilter?: V1DeleteByFilterOperation;
      /** update documents matching filter */
      updateByFilter?: UpdateByFilterOperation;
      /** update only existing documents */
      updateExisting?: UpdateExistingOperation;
  }
  interface DocumentUpdateOperation {
      /** documents to index or update */
      documents?: IndexDocument[];
  }
  interface IndexDocument {
      /** data bag with non-searchable fields (url, image) */
      payload?: DocumentPayload;
      /** what type of users should documents be visible to */
      exposure?: Enum;
      /** document with mandatory fields (id, title, description) and with fields specific to the type of the document */
      document?: Record<string, any> | null;
      /** what member groups is the document exposed to. Used only with GROUP_PROTECTED exposure */
      permittedMemberGroups?: string[];
      /** if true SEO is disabled for this document */
      seoHidden?: boolean | null;
      /** if true the page is a lightbox popup */
      isPopup?: boolean | null;
  }
  interface DocumentPayload {
      /** url of the page representing the document */
      url?: string | null;
      /** image which represents the document */
      documentImage?: DocumentImage;
  }
  interface DocumentImage {
      /** the name of the image */
      name?: string;
      /** the width of the image */
      width?: number;
      /** the height of the image */
      height?: number;
  }
  enum Enum {
      /** Default value. Means that permission not set */
      UNKNOWN = "UNKNOWN",
      /** Protected exposure. Exposed to members and owners */
      PROTECTED = "PROTECTED",
      /** Private exposure. Exposed to owners */
      PRIVATE = "PRIVATE",
      /** Public exposure. Visible to everyone */
      PUBLIC = "PUBLIC",
      /** Used for partial updates, to state that exposure is not changing */
      UNCHANGED = "UNCHANGED",
      /** Protected to members of permitted groups and owners */
      GROUP_PROTECTED = "GROUP_PROTECTED"
  }
  interface V1DeleteByIdsOperation {
      /** ids of the documents to delete */
      documentIds?: string[];
  }
  interface V1DeleteByFilterOperation {
      /** documents matching this filter wil be deleted. only filterable documents defined in document_type can be used for filtering */
      filter?: Record<string, any> | null;
  }
  interface UpdateByFilterOperation {
      /** documents matching this filter will be updated */
      filter?: Record<string, any> | null;
      /** partial document to apply */
      document?: IndexDocument;
  }
  interface UpdateExistingOperation {
      /** documents to update */
      documents?: IndexDocument[];
  }
  interface Empty {
  }
  interface SearchRequest {
      /** Text to search for. All searchable fields will be searched. */
      query?: string | null;
      /** Document type of documents to search for. All document types are searched if not provided. */
      documentType?: string | null;
      /** Fields to order by. */
      ordering?: OrderingClauses;
      /** Paging parameters. */
      paging?: SearchPaging;
      /** Language to search in. */
      language?: string | null;
      /** Filter in platformized query language (for example {'field': {'$eq': 'value'}}) */
      filter?: Record<string, any> | null;
      /** The facets to retrieve. */
      facets?: FacetClauses;
      /** Enable fuzzy search (eg. query 'kalvin clein' will match document with 'calvin klein' in title). */
      fuzzy?: boolean | null;
      /** Highlight texts matching the query. Highlighted text will be wrapped with <mark/> tag. Defaults to true if not provided. */
      highlight?: boolean | null;
      /** Searchable fields to search in. If not provided, search is executed on all searchable fields in schema */
      searchFields?: string[];
      /** A list of fields to include in the result set. If not provided, all fields of schema will be included. */
      fields?: string[];
      /** The properties/overrides/experiments to enable for this request. Currently supported: `scoring_profile`. */
      properties?: SearchProperty[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  interface OrderingClauses {
      ordering?: OrderingClause[];
  }
  interface OrderingClause {
      fieldName?: string | null;
      direction?: Direction;
  }
  enum Direction {
      UninitializedDirection = "UninitializedDirection",
      ASC = "ASC",
      DESC = "DESC"
  }
  interface SearchPaging {
      /** Number of items to skip in the result set. */
      skip?: number;
      /** Number of items to fetch (effectively page size). */
      limit?: number;
      /** Number of items to skip in the result set. */
      offset?: number;
  }
  interface FacetClauses {
      /** Each entry represents a single facet with parameters. */
      clauses?: FacetClause[];
  }
  interface FacetClause extends FacetClauseClauseOneOf {
      term?: TermFacet;
      aggregation?: AggregationFacet;
      hierarchical?: HierarchicalFacet;
  }
  /** @oneof */
  interface FacetClauseClauseOneOf {
      term?: TermFacet;
      aggregation?: AggregationFacet;
      hierarchical?: HierarchicalFacet;
  }
  enum Aggregation {
      MIN = "MIN",
      MAX = "MAX",
      SUM = "SUM"
  }
  interface HierarchicalFacet extends HierarchicalFacetClauseOneOf {
      term?: TermFacet;
      aggregation?: AggregationFacet;
      nestedAggregation?: HierarchicalFacet;
  }
  /** @oneof */
  interface HierarchicalFacetClauseOneOf {
      term?: TermFacet;
      aggregation?: AggregationFacet;
  }
  interface TermFacet {
      /** The name of the faceted attribute. */
      name?: string;
      /** Limit the number of facet values returned. Default is 10. */
      limit?: number | null;
  }
  interface AggregationFacet {
      /** The name of the faceted attribute. */
      name?: string;
      /** Aggregation type. */
      aggregation?: Aggregation;
  }
  interface SearchProperty {
      name?: string;
      value?: any;
  }
  interface SearchResponse {
      /** Documents matching filter and query. */
      documents?: Record<string, any>[] | null;
      nextPage?: NextPageResponse;
      /**
       * Facets provide "counts in categories" view. For example searching for "Nike" would return
       * (Shoes, 5), (Socks, 2) indicating numbers for matching by each faceted field.
       */
      facets?: FacetsResponse[];
  }
  interface NextPageResponse {
      /** Total number of items across all pages */
      total?: number;
      /** The number of items to skip */
      skip?: number;
      /** The number of items to retrieve in one page */
      limit?: number;
  }
  interface FacetsResponse extends FacetsResponseResponseOneOf {
      terms?: TermAggregationResponse;
      minAggregation?: MinAggregationResponse;
      maxAggregation?: MaxAggregationResponse;
      minMaxAggregation?: MinMaxAggregationResponse;
      hierarchicalAggregation?: HierarchicalAggregationResponse;
      sumAggregation?: SumAggregationResponse;
  }
  /** @oneof */
  interface FacetsResponseResponseOneOf {
      terms?: TermAggregationResponse;
      minAggregation?: MinAggregationResponse;
      maxAggregation?: MaxAggregationResponse;
      minMaxAggregation?: MinMaxAggregationResponse;
      hierarchicalAggregation?: HierarchicalAggregationResponse;
      sumAggregation?: SumAggregationResponse;
  }
  interface FacetCountResponse {
      /** Facet field value (for example "Shoes", "Socks") */
      facetValue?: string;
      /** Document count within the group */
      count?: number;
  }
  interface Value {
      value?: string;
      facets?: FacetsResponse;
  }
  interface TermAggregationResponse {
      /** Facet field (for example productCategory) */
      facet?: string;
      /** Facet values and document counts */
      facets?: FacetCountResponse[];
  }
  interface MinAggregationResponse {
      /** Facet field (for example productPrice) */
      facet?: string;
      /** The minimum value across all documents */
      minValue?: number | null;
  }
  interface MaxAggregationResponse {
      /** Facet field (for example productPrice) */
      facet?: string;
      /** The maximum value across all documents */
      maxValue?: number | null;
  }
  interface MinMaxAggregationResponse {
      /** Facet field (for example productPrice) */
      facet?: string;
      /** The minimum value across all documents */
      minValue?: number | null;
      /** The maximum value across all documents */
      maxValue?: number | null;
  }
  interface HierarchicalAggregationResponse {
      facet?: string;
      values?: Value[];
  }
  interface SumAggregationResponse {
      /** Facet field (for example productPrice) */
      facet?: string;
      /** The sum value across all documents */
      value?: number | null;
  }
  interface FederatedSearchRequest {
      /** Query phrase to use. */
      query?: string | null;
      /** Language to search in. */
      language?: string | null;
      /** Limit of documents to return per document type. */
      limit?: number | null;
      /** Enable fuzzy search (for example query 'kalvin clein' will match document with 'calvin klein' in title). */
      fuzzy?: boolean | null;
      /** Highlight texts matching the query. Highlighted text will be wrapped with <mark/> tag. Defaults to true if not provided. */
      highlight?: boolean | null;
      /** Searchable fields to search in. If not provided, search is executed on all searchable fields in schemas */
      searchFields?: string[];
      /** Document types to search in. If not provided, search is executed on all document types enabled for the site */
      documentTypes?: string[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  interface FederatedSearchResponse {
      /** Search results from multiple indexes. */
      results?: FederatedSearchDocuments[];
  }
  interface FederatedSearchDocuments {
      /** Document type of documents */
      documentType?: string | null;
      /** Documents of document type */
      documents?: Record<string, any>[] | null;
      /** Total count of matching documents for document type */
      total?: number;
  }
  interface SuggestRequest {
      /** Text to search for. Fields configured in suggester configuration will be searched. */
      query?: string | null;
      /** Document type of documents to search for. All document types are searched if not provided. */
      documentType?: string | null;
      /** Fields to order by. */
      ordering?: OrderingClauses;
      /** Number of suggested document to return. */
      limit?: number;
      /** Language to search in. */
      language?: string | null;
      /** Filter in platformized query language (for example {'field': {'$eq': 'value'}}) */
      filter?: Record<string, any> | null;
      /** Searchable fields to search in. If not provided, search is executed on all suggestable fields in schema */
      searchFields?: string[];
      /** A list of fields to include in the result set. If not provided, all fields of schema will be included. */
      fields?: string[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
      /** The properties/overrides/experiments to enable for this request. Currently supported: `scoring_profile`. */
      properties?: SearchProperty[];
  }
  interface SuggestResponse {
      /** Suggested documents. */
      documents?: Record<string, any>[] | null;
  }
  interface FederatedSuggestRequest {
      /** Text to search for. Fields configured in suggester configuration will be searched. */
      query?: string | null;
      /** Language to search in. */
      language?: string | null;
      /** Number of suggested document to return per document type. */
      limit?: number;
      /** Searchable fields to search in. If not provided, search is executed on all suggestable fields in schemas */
      searchFields?: string[];
      /** Document types to search in. If not provided, search is executed on all document types enabled for the site */
      documentTypes?: string[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  interface FederatedSuggestResponse {
      /** Suggest results from multiple indexes. */
      results?: FederatedSuggestDocuments[];
  }
  interface FederatedSuggestDocuments {
      /** Document type of documents */
      documentType?: string | null;
      /** Documents of document type */
      documents?: Record<string, any>[] | null;
  }
  interface RelatedRequest {
      /** ID of the document to fetch related documents for. */
      documentId?: string | null;
      /** Document type of the document. */
      documentType?: string | null;
      /** Fields to order by. */
      ordering?: OrderingClauses;
      /** Language to search in. */
      language?: string | null;
      /** Filter in platformized query language (for example {'field': {'$eq': 'value'}}). */
      filter?: Record<string, any> | null;
      /** Searchable fields to compare documents by. If not provided, all searchable fields in schema are used */
      searchFields?: string[];
      /** A list of fields to include in the result set. If not provided, all fields of schema will be included. */
      fields?: string[];
      /** Number of related documents to return */
      limit?: number;
      /** The properties/overrides/experiments to enable for this request. Currently supported: `scoring_profile`. */
      properties?: SearchProperty[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  interface RelatedResponse {
      /** Documents matching filter and query. */
      documents?: Record<string, any>[] | null;
  }
  interface AutocompleteRequest {
      /** Query phrase to fetch completions for. */
      query?: string | null;
      /** Document type to use to search for phrases. */
      documentType?: string | null;
      /** Limit of phrases to fetch. */
      limit?: number;
      /** Language to search in. */
      language?: string | null;
      /** Filter in platfromized query language (for example {'field': {'$eq': 'value'}}) */
      filter?: Record<string, any> | null;
      /** Searchable fields to use for query completion. If not provided, all searchable fields in schema are used */
      searchFields?: string[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  interface AutocompleteResponse {
      /** Suggested phrases. */
      values?: AutocompleteResponseValue[];
  }
  interface AutocompleteResponseValue {
      /** Suggested phrase. */
      query?: string;
  }
  interface FederatedAutocompleteRequest {
      /** Query phrase to fetch completions for. */
      query?: string | null;
      /** Language to search in. */
      language?: string | null;
      /** Number of queries to return per document type. */
      limit?: number;
      /** Searchable fields to search in. If not provided, search is executed on all autocompletable fields in schemas */
      searchFields?: string[];
      /** Document types to autocomplete in. If not provided, autocomplete is executed on all document types enabled for the site */
      documentTypes?: string[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  interface FederatedAutocompleteResponse {
      /** Suggested phrases from multiple indexes */
      results?: FederatedAutocompleteResults[];
  }
  interface FederatedAutocompleteResults {
      /** Document type of queries */
      documentType?: string | null;
      /** Suggested phrases */
      values?: AutocompleteResponseValue[];
  }
  interface TrendingRequest {
      documentTypes?: string[];
      language?: string | null;
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  interface TrendingResponse {
      results?: TrendingItems[];
  }
  interface TrendingItems {
      documentType?: string;
      documents?: Record<string, any>[] | null;
  }
  /**
   * Executes a regular search query.
   * If you are unsure, this is likely the search method you want to used.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function search(options?: SearchOptions): Promise<SearchResponse>;
  interface SearchOptions {
      /** Text to search for. All searchable fields will be searched. */
      query?: string | null;
      /** Document type of documents to search for. All document types are searched if not provided. */
      documentType?: string | null;
      /** Fields to order by. */
      ordering?: OrderingClauses;
      /** Paging parameters. */
      paging?: SearchPaging;
      /** Language to search in. */
      language?: string | null;
      /** Filter in platformized query language (for example {'field': {'$eq': 'value'}}) */
      filter?: Record<string, any> | null;
      /** The facets to retrieve. */
      facets?: FacetClauses;
      /** Enable fuzzy search (eg. query 'kalvin clein' will match document with 'calvin klein' in title). */
      fuzzy?: boolean | null;
      /** Highlight texts matching the query. Highlighted text will be wrapped with <mark/> tag. Defaults to true if not provided. */
      highlight?: boolean | null;
      /** Searchable fields to search in. If not provided, search is executed on all searchable fields in schema */
      searchFields?: string[];
      /** A list of fields to include in the result set. If not provided, all fields of schema will be included. */
      fields?: string[];
      /** The properties/overrides/experiments to enable for this request. Currently supported: `scoring_profile`. */
      properties?: SearchProperty[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  /**
   * Searches in multiple document types at once.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function federatedSearch(options?: FederatedSearchOptions): Promise<FederatedSearchResponse>;
  interface FederatedSearchOptions {
      /** Query phrase to use. */
      query?: string | null;
      /** Language to search in. */
      language?: string | null;
      /** Limit of documents to return per document type. */
      limit?: number | null;
      /** Enable fuzzy search (for example query 'kalvin clein' will match document with 'calvin klein' in title). */
      fuzzy?: boolean | null;
      /** Highlight texts matching the query. Highlighted text will be wrapped with <mark/> tag. Defaults to true if not provided. */
      highlight?: boolean | null;
      /** Searchable fields to search in. If not provided, search is executed on all searchable fields in schemas */
      searchFields?: string[];
      /** Document types to search in. If not provided, search is executed on all document types enabled for the site */
      documentTypes?: string[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  /**
   * Executes search query to fetch suggested items. Unlike search query suggest will match
   * partial phrases (for example "blu" will match documents containing "blue", "blues" and "blunt").
   * Phrase needs to be at least 3 symbols long. Suggestions can also perform optimisations in search
   * results and generally do not guarantee the same level of quality as regular Search endpoint.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function suggest(options?: SuggestOptions): Promise<SuggestResponse>;
  interface SuggestOptions {
      /** Text to search for. Fields configured in suggester configuration will be searched. */
      query?: string | null;
      /** Document type of documents to search for. All document types are searched if not provided. */
      documentType?: string | null;
      /** Fields to order by. */
      ordering?: OrderingClauses;
      /** Number of suggested document to return. */
      limit?: number;
      /** Language to search in. */
      language?: string | null;
      /** Filter in platformized query language (for example {'field': {'$eq': 'value'}}) */
      filter?: Record<string, any> | null;
      /** Searchable fields to search in. If not provided, search is executed on all suggestable fields in schema */
      searchFields?: string[];
      /** A list of fields to include in the result set. If not provided, all fields of schema will be included. */
      fields?: string[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
      /** The properties/overrides/experiments to enable for this request. Currently supported: `scoring_profile`. */
      properties?: SearchProperty[];
  }
  /**
   * Searches for suggestions in multiple document types at once.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function federatedSuggest(options?: FederatedSuggestOptions): Promise<FederatedSuggestResponse>;
  interface FederatedSuggestOptions {
      /** Text to search for. Fields configured in suggester configuration will be searched. */
      query?: string | null;
      /** Language to search in. */
      language?: string | null;
      /** Number of suggested document to return per document type. */
      limit?: number;
      /** Searchable fields to search in. If not provided, search is executed on all suggestable fields in schemas */
      searchFields?: string[];
      /** Document types to search in. If not provided, search is executed on all document types enabled for the site */
      documentTypes?: string[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  /**
   * Fetches documents similar to one single document.
   * This is typically used to implement "related to" scenarios (for example to fetch related store products when
   * consumer is already viewing one).
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function related(options?: RelatedOptions): Promise<RelatedResponse>;
  interface RelatedOptions {
      /** ID of the document to fetch related documents for. */
      documentId?: string | null;
      /** Document type of the document. */
      documentType?: string | null;
      /** Fields to order by. */
      ordering?: OrderingClauses;
      /** Language to search in. */
      language?: string | null;
      /** Filter in platformized query language (for example {'field': {'$eq': 'value'}}). */
      filter?: Record<string, any> | null;
      /** Searchable fields to compare documents by. If not provided, all searchable fields in schema are used */
      searchFields?: string[];
      /** A list of fields to include in the result set. If not provided, all fields of schema will be included. */
      fields?: string[];
      /** Number of related documents to return */
      limit?: number;
      /** The properties/overrides/experiments to enable for this request. Currently supported: `scoring_profile`. */
      properties?: SearchProperty[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  /**
   * Provides phrase completion. For example "blu" could return "blue", "blues" and "blunt" as candidate phrases. This operation is resource heavy at index time and is reserved for special use cases.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function autocomplete(options?: AutocompleteOptions): Promise<AutocompleteResponse>;
  interface AutocompleteOptions {
      /** Query phrase to fetch completions for. */
      query?: string | null;
      /** Document type to use to search for phrases. */
      documentType?: string | null;
      /** Limit of phrases to fetch. */
      limit?: number;
      /** Language to search in. */
      language?: string | null;
      /** Filter in platfromized query language (for example {'field': {'$eq': 'value'}}) */
      filter?: Record<string, any> | null;
      /** Searchable fields to use for query completion. If not provided, all searchable fields in schema are used */
      searchFields?: string[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  /**
   * Provides phrase completion from multiple document types at once
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function federatedAutocomplete(options?: FederatedAutocompleteOptions): Promise<FederatedAutocompleteResponse>;
  interface FederatedAutocompleteOptions {
      /** Query phrase to fetch completions for. */
      query?: string | null;
      /** Language to search in. */
      language?: string | null;
      /** Number of queries to return per document type. */
      limit?: number;
      /** Searchable fields to search in. If not provided, search is executed on all autocompletable fields in schemas */
      searchFields?: string[];
      /** Document types to autocomplete in. If not provided, autocomplete is executed on all document types enabled for the site */
      documentTypes?: string[];
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  /**
   * Returns trending documents for given document types
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function trending(options?: TrendingOptions): Promise<TrendingResponse>;
  interface TrendingOptions {
      documentTypes?: string[];
      language?: string | null;
      /** Include seo hidden documents. Defaults to false if not provided. */
      includeSeoHidden?: boolean | null;
  }
  
  type searchV1Sitedocument_universal_d_SiteDocument = SiteDocument;
  type searchV1Sitedocument_universal_d_UpdateInternalDocumentsEvent = UpdateInternalDocumentsEvent;
  type searchV1Sitedocument_universal_d_UpdateInternalDocumentsEventOperationOneOf = UpdateInternalDocumentsEventOperationOneOf;
  type searchV1Sitedocument_universal_d_InternalDocument = InternalDocument;
  type searchV1Sitedocument_universal_d_InternalDocumentUpdateOperation = InternalDocumentUpdateOperation;
  type searchV1Sitedocument_universal_d_DeleteByIdsOperation = DeleteByIdsOperation;
  type searchV1Sitedocument_universal_d_DeleteByFilterOperation = DeleteByFilterOperation;
  type searchV1Sitedocument_universal_d_InternalDocumentUpdateByFilterOperation = InternalDocumentUpdateByFilterOperation;
  type searchV1Sitedocument_universal_d_InternalUpdateExistingOperation = InternalUpdateExistingOperation;
  type searchV1Sitedocument_universal_d_VersionedDocumentUpdateOperation = VersionedDocumentUpdateOperation;
  type searchV1Sitedocument_universal_d_VersioningMode = VersioningMode;
  const searchV1Sitedocument_universal_d_VersioningMode: typeof VersioningMode;
  type searchV1Sitedocument_universal_d_VersionedDeleteByIdsOperation = VersionedDeleteByIdsOperation;
  type searchV1Sitedocument_universal_d_VersionedDocumentId = VersionedDocumentId;
  type searchV1Sitedocument_universal_d_UpdateDocumentsEvent = UpdateDocumentsEvent;
  type searchV1Sitedocument_universal_d_UpdateDocumentsEventOperationOneOf = UpdateDocumentsEventOperationOneOf;
  type searchV1Sitedocument_universal_d_DocumentUpdateOperation = DocumentUpdateOperation;
  type searchV1Sitedocument_universal_d_IndexDocument = IndexDocument;
  type searchV1Sitedocument_universal_d_DocumentPayload = DocumentPayload;
  type searchV1Sitedocument_universal_d_DocumentImage = DocumentImage;
  type searchV1Sitedocument_universal_d_Enum = Enum;
  const searchV1Sitedocument_universal_d_Enum: typeof Enum;
  type searchV1Sitedocument_universal_d_V1DeleteByIdsOperation = V1DeleteByIdsOperation;
  type searchV1Sitedocument_universal_d_V1DeleteByFilterOperation = V1DeleteByFilterOperation;
  type searchV1Sitedocument_universal_d_UpdateByFilterOperation = UpdateByFilterOperation;
  type searchV1Sitedocument_universal_d_UpdateExistingOperation = UpdateExistingOperation;
  type searchV1Sitedocument_universal_d_Empty = Empty;
  type searchV1Sitedocument_universal_d_SearchRequest = SearchRequest;
  type searchV1Sitedocument_universal_d_OrderingClauses = OrderingClauses;
  type searchV1Sitedocument_universal_d_OrderingClause = OrderingClause;
  type searchV1Sitedocument_universal_d_Direction = Direction;
  const searchV1Sitedocument_universal_d_Direction: typeof Direction;
  type searchV1Sitedocument_universal_d_SearchPaging = SearchPaging;
  type searchV1Sitedocument_universal_d_FacetClauses = FacetClauses;
  type searchV1Sitedocument_universal_d_FacetClause = FacetClause;
  type searchV1Sitedocument_universal_d_FacetClauseClauseOneOf = FacetClauseClauseOneOf;
  type searchV1Sitedocument_universal_d_Aggregation = Aggregation;
  const searchV1Sitedocument_universal_d_Aggregation: typeof Aggregation;
  type searchV1Sitedocument_universal_d_HierarchicalFacet = HierarchicalFacet;
  type searchV1Sitedocument_universal_d_HierarchicalFacetClauseOneOf = HierarchicalFacetClauseOneOf;
  type searchV1Sitedocument_universal_d_TermFacet = TermFacet;
  type searchV1Sitedocument_universal_d_AggregationFacet = AggregationFacet;
  type searchV1Sitedocument_universal_d_SearchProperty = SearchProperty;
  type searchV1Sitedocument_universal_d_SearchResponse = SearchResponse;
  type searchV1Sitedocument_universal_d_NextPageResponse = NextPageResponse;
  type searchV1Sitedocument_universal_d_FacetsResponse = FacetsResponse;
  type searchV1Sitedocument_universal_d_FacetsResponseResponseOneOf = FacetsResponseResponseOneOf;
  type searchV1Sitedocument_universal_d_FacetCountResponse = FacetCountResponse;
  type searchV1Sitedocument_universal_d_Value = Value;
  type searchV1Sitedocument_universal_d_TermAggregationResponse = TermAggregationResponse;
  type searchV1Sitedocument_universal_d_MinAggregationResponse = MinAggregationResponse;
  type searchV1Sitedocument_universal_d_MaxAggregationResponse = MaxAggregationResponse;
  type searchV1Sitedocument_universal_d_MinMaxAggregationResponse = MinMaxAggregationResponse;
  type searchV1Sitedocument_universal_d_HierarchicalAggregationResponse = HierarchicalAggregationResponse;
  type searchV1Sitedocument_universal_d_SumAggregationResponse = SumAggregationResponse;
  type searchV1Sitedocument_universal_d_FederatedSearchRequest = FederatedSearchRequest;
  type searchV1Sitedocument_universal_d_FederatedSearchResponse = FederatedSearchResponse;
  type searchV1Sitedocument_universal_d_FederatedSearchDocuments = FederatedSearchDocuments;
  type searchV1Sitedocument_universal_d_SuggestRequest = SuggestRequest;
  type searchV1Sitedocument_universal_d_SuggestResponse = SuggestResponse;
  type searchV1Sitedocument_universal_d_FederatedSuggestRequest = FederatedSuggestRequest;
  type searchV1Sitedocument_universal_d_FederatedSuggestResponse = FederatedSuggestResponse;
  type searchV1Sitedocument_universal_d_FederatedSuggestDocuments = FederatedSuggestDocuments;
  type searchV1Sitedocument_universal_d_RelatedRequest = RelatedRequest;
  type searchV1Sitedocument_universal_d_RelatedResponse = RelatedResponse;
  type searchV1Sitedocument_universal_d_AutocompleteRequest = AutocompleteRequest;
  type searchV1Sitedocument_universal_d_AutocompleteResponse = AutocompleteResponse;
  type searchV1Sitedocument_universal_d_AutocompleteResponseValue = AutocompleteResponseValue;
  type searchV1Sitedocument_universal_d_FederatedAutocompleteRequest = FederatedAutocompleteRequest;
  type searchV1Sitedocument_universal_d_FederatedAutocompleteResponse = FederatedAutocompleteResponse;
  type searchV1Sitedocument_universal_d_FederatedAutocompleteResults = FederatedAutocompleteResults;
  type searchV1Sitedocument_universal_d_TrendingRequest = TrendingRequest;
  type searchV1Sitedocument_universal_d_TrendingResponse = TrendingResponse;
  type searchV1Sitedocument_universal_d_TrendingItems = TrendingItems;
  const searchV1Sitedocument_universal_d_search: typeof search;
  type searchV1Sitedocument_universal_d_SearchOptions = SearchOptions;
  const searchV1Sitedocument_universal_d_federatedSearch: typeof federatedSearch;
  type searchV1Sitedocument_universal_d_FederatedSearchOptions = FederatedSearchOptions;
  const searchV1Sitedocument_universal_d_suggest: typeof suggest;
  type searchV1Sitedocument_universal_d_SuggestOptions = SuggestOptions;
  const searchV1Sitedocument_universal_d_federatedSuggest: typeof federatedSuggest;
  type searchV1Sitedocument_universal_d_FederatedSuggestOptions = FederatedSuggestOptions;
  const searchV1Sitedocument_universal_d_related: typeof related;
  type searchV1Sitedocument_universal_d_RelatedOptions = RelatedOptions;
  const searchV1Sitedocument_universal_d_autocomplete: typeof autocomplete;
  type searchV1Sitedocument_universal_d_AutocompleteOptions = AutocompleteOptions;
  const searchV1Sitedocument_universal_d_federatedAutocomplete: typeof federatedAutocomplete;
  type searchV1Sitedocument_universal_d_FederatedAutocompleteOptions = FederatedAutocompleteOptions;
  const searchV1Sitedocument_universal_d_trending: typeof trending;
  type searchV1Sitedocument_universal_d_TrendingOptions = TrendingOptions;
  namespace searchV1Sitedocument_universal_d {
    export {
      searchV1Sitedocument_universal_d_SiteDocument as SiteDocument,
      searchV1Sitedocument_universal_d_UpdateInternalDocumentsEvent as UpdateInternalDocumentsEvent,
      searchV1Sitedocument_universal_d_UpdateInternalDocumentsEventOperationOneOf as UpdateInternalDocumentsEventOperationOneOf,
      searchV1Sitedocument_universal_d_InternalDocument as InternalDocument,
      searchV1Sitedocument_universal_d_InternalDocumentUpdateOperation as InternalDocumentUpdateOperation,
      searchV1Sitedocument_universal_d_DeleteByIdsOperation as DeleteByIdsOperation,
      searchV1Sitedocument_universal_d_DeleteByFilterOperation as DeleteByFilterOperation,
      searchV1Sitedocument_universal_d_InternalDocumentUpdateByFilterOperation as InternalDocumentUpdateByFilterOperation,
      searchV1Sitedocument_universal_d_InternalUpdateExistingOperation as InternalUpdateExistingOperation,
      searchV1Sitedocument_universal_d_VersionedDocumentUpdateOperation as VersionedDocumentUpdateOperation,
      searchV1Sitedocument_universal_d_VersioningMode as VersioningMode,
      searchV1Sitedocument_universal_d_VersionedDeleteByIdsOperation as VersionedDeleteByIdsOperation,
      searchV1Sitedocument_universal_d_VersionedDocumentId as VersionedDocumentId,
      searchV1Sitedocument_universal_d_UpdateDocumentsEvent as UpdateDocumentsEvent,
      searchV1Sitedocument_universal_d_UpdateDocumentsEventOperationOneOf as UpdateDocumentsEventOperationOneOf,
      searchV1Sitedocument_universal_d_DocumentUpdateOperation as DocumentUpdateOperation,
      searchV1Sitedocument_universal_d_IndexDocument as IndexDocument,
      searchV1Sitedocument_universal_d_DocumentPayload as DocumentPayload,
      searchV1Sitedocument_universal_d_DocumentImage as DocumentImage,
      searchV1Sitedocument_universal_d_Enum as Enum,
      searchV1Sitedocument_universal_d_V1DeleteByIdsOperation as V1DeleteByIdsOperation,
      searchV1Sitedocument_universal_d_V1DeleteByFilterOperation as V1DeleteByFilterOperation,
      searchV1Sitedocument_universal_d_UpdateByFilterOperation as UpdateByFilterOperation,
      searchV1Sitedocument_universal_d_UpdateExistingOperation as UpdateExistingOperation,
      searchV1Sitedocument_universal_d_Empty as Empty,
      searchV1Sitedocument_universal_d_SearchRequest as SearchRequest,
      searchV1Sitedocument_universal_d_OrderingClauses as OrderingClauses,
      searchV1Sitedocument_universal_d_OrderingClause as OrderingClause,
      searchV1Sitedocument_universal_d_Direction as Direction,
      searchV1Sitedocument_universal_d_SearchPaging as SearchPaging,
      searchV1Sitedocument_universal_d_FacetClauses as FacetClauses,
      searchV1Sitedocument_universal_d_FacetClause as FacetClause,
      searchV1Sitedocument_universal_d_FacetClauseClauseOneOf as FacetClauseClauseOneOf,
      searchV1Sitedocument_universal_d_Aggregation as Aggregation,
      searchV1Sitedocument_universal_d_HierarchicalFacet as HierarchicalFacet,
      searchV1Sitedocument_universal_d_HierarchicalFacetClauseOneOf as HierarchicalFacetClauseOneOf,
      searchV1Sitedocument_universal_d_TermFacet as TermFacet,
      searchV1Sitedocument_universal_d_AggregationFacet as AggregationFacet,
      searchV1Sitedocument_universal_d_SearchProperty as SearchProperty,
      searchV1Sitedocument_universal_d_SearchResponse as SearchResponse,
      searchV1Sitedocument_universal_d_NextPageResponse as NextPageResponse,
      searchV1Sitedocument_universal_d_FacetsResponse as FacetsResponse,
      searchV1Sitedocument_universal_d_FacetsResponseResponseOneOf as FacetsResponseResponseOneOf,
      searchV1Sitedocument_universal_d_FacetCountResponse as FacetCountResponse,
      searchV1Sitedocument_universal_d_Value as Value,
      searchV1Sitedocument_universal_d_TermAggregationResponse as TermAggregationResponse,
      searchV1Sitedocument_universal_d_MinAggregationResponse as MinAggregationResponse,
      searchV1Sitedocument_universal_d_MaxAggregationResponse as MaxAggregationResponse,
      searchV1Sitedocument_universal_d_MinMaxAggregationResponse as MinMaxAggregationResponse,
      searchV1Sitedocument_universal_d_HierarchicalAggregationResponse as HierarchicalAggregationResponse,
      searchV1Sitedocument_universal_d_SumAggregationResponse as SumAggregationResponse,
      searchV1Sitedocument_universal_d_FederatedSearchRequest as FederatedSearchRequest,
      searchV1Sitedocument_universal_d_FederatedSearchResponse as FederatedSearchResponse,
      searchV1Sitedocument_universal_d_FederatedSearchDocuments as FederatedSearchDocuments,
      searchV1Sitedocument_universal_d_SuggestRequest as SuggestRequest,
      searchV1Sitedocument_universal_d_SuggestResponse as SuggestResponse,
      searchV1Sitedocument_universal_d_FederatedSuggestRequest as FederatedSuggestRequest,
      searchV1Sitedocument_universal_d_FederatedSuggestResponse as FederatedSuggestResponse,
      searchV1Sitedocument_universal_d_FederatedSuggestDocuments as FederatedSuggestDocuments,
      searchV1Sitedocument_universal_d_RelatedRequest as RelatedRequest,
      searchV1Sitedocument_universal_d_RelatedResponse as RelatedResponse,
      searchV1Sitedocument_universal_d_AutocompleteRequest as AutocompleteRequest,
      searchV1Sitedocument_universal_d_AutocompleteResponse as AutocompleteResponse,
      searchV1Sitedocument_universal_d_AutocompleteResponseValue as AutocompleteResponseValue,
      searchV1Sitedocument_universal_d_FederatedAutocompleteRequest as FederatedAutocompleteRequest,
      searchV1Sitedocument_universal_d_FederatedAutocompleteResponse as FederatedAutocompleteResponse,
      searchV1Sitedocument_universal_d_FederatedAutocompleteResults as FederatedAutocompleteResults,
      searchV1Sitedocument_universal_d_TrendingRequest as TrendingRequest,
      searchV1Sitedocument_universal_d_TrendingResponse as TrendingResponse,
      searchV1Sitedocument_universal_d_TrendingItems as TrendingItems,
      searchV1Sitedocument_universal_d_search as search,
      searchV1Sitedocument_universal_d_SearchOptions as SearchOptions,
      searchV1Sitedocument_universal_d_federatedSearch as federatedSearch,
      searchV1Sitedocument_universal_d_FederatedSearchOptions as FederatedSearchOptions,
      searchV1Sitedocument_universal_d_suggest as suggest,
      searchV1Sitedocument_universal_d_SuggestOptions as SuggestOptions,
      searchV1Sitedocument_universal_d_federatedSuggest as federatedSuggest,
      searchV1Sitedocument_universal_d_FederatedSuggestOptions as FederatedSuggestOptions,
      searchV1Sitedocument_universal_d_related as related,
      searchV1Sitedocument_universal_d_RelatedOptions as RelatedOptions,
      searchV1Sitedocument_universal_d_autocomplete as autocomplete,
      searchV1Sitedocument_universal_d_AutocompleteOptions as AutocompleteOptions,
      searchV1Sitedocument_universal_d_federatedAutocomplete as federatedAutocomplete,
      searchV1Sitedocument_universal_d_FederatedAutocompleteOptions as FederatedAutocompleteOptions,
      searchV1Sitedocument_universal_d_trending as trending,
      searchV1Sitedocument_universal_d_TrendingOptions as TrendingOptions,
    };
  }
  
  export { searchV1Sitedocument_universal_d as siteSearch };
}
