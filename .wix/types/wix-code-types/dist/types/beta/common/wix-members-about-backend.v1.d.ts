declare module "wix-members-about-backend.v1" {
  interface About {
      /** Member ID. */
      memberId?: string;
      /** About content. */
      content?: string;
  }
  interface SaveAboutDraftRequest {
      /** Member ID. */
      memberId: string;
      /** About content. */
      content: string;
  }
  interface SaveAboutDraftResponse {
      /** About content. */
      content?: string;
      /** State of the about. */
      state?: State;
  }
  enum State {
      /** Published version, visible to other members. */
      PUBLIC = "PUBLIC",
      /** Not published version, visible only to oneself. */
      DRAFT = "DRAFT"
  }
  interface SaveMyAboutDraftRequest {
      /** About content. */
      content: string;
  }
  interface SaveMyAboutDraftResponse {
      /** About content. */
      content?: string;
      /** State of the about. */
      state?: State;
  }
  interface TooManyLinksInAboutContent {
  }
  interface TextTooLongInAboutContent {
  }
  interface PublishAboutRequest {
      /** Member ID. */
      memberId: string;
  }
  interface PublishAboutResponse {
      /** About content. */
      content?: string;
      /** State of the about. */
      state?: State;
  }
  interface PublishMyAboutRequest {
  }
  interface PublishMyAboutResponse {
      /** About content. */
      content?: string;
      /** State of the about. */
      state?: State;
  }
  interface GetAboutRequest {
      /** Member ID. */
      memberId: string;
      /**
       * State of the about.
       * Defaults to `PUBLIC` state when not provided.
       */
      state: State;
  }
  interface GetAboutResponse {
      /** About content. */
      content?: string;
      /** State of the about. */
      state?: State;
  }
  interface QueryAboutsRequest {
      /** Query options. */
      query?: QueryV2;
  }
  interface QueryV2 {
      /** A filter object. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
      filter?: Record<string, any> | null;
      /** Sort the results. */
      sorting?: Sorting[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder;
      /**
       * When `field_name` is a property of repeated field that is marked as `MATCH_ITEMS` and sort should be done by
       * a specific element from a collection, filter can/should be provided to ensure correct sort value is picked.
       *
       * If multiple filters are provided, they are combined with AND operator.
       *
       * Example:
       * Given we have document like {"id": "1", "nestedField": [{"price": 10, "region": "EU"}, {"price": 20, "region": "US"}]}
       * and `nestedField` is marked as `MATCH_ITEMS`, to ensure that sorting is done by correct region, filter should be
       * { fieldName: "nestedField.price", "select_items_by": [{"nestedField.region": "US"}] }
       * @internal
       */
      selectItemsBy?: Record<string, any>[] | null;
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
  interface QueryAboutsResponse {
      /**
       * List of about entities.
       * Only the *public* entities are included.
       */
      abouts?: About[];
      /** Metadata for the paginated results. */
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
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface DiscardMyChangesRequest {
  }
  interface DiscardMyChangesResponse {
  }
  /**
   * Saves member's about as draft.
   * @param memberId - Member ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField memberId
   * @requiredField options
   * @requiredField options.content
   * @adminMethod
   */
  function saveAboutDraft(memberId: string, options: SaveAboutDraftOptions): Promise<SaveAboutDraftResponse>;
  interface SaveAboutDraftOptions {
      /** About content. */
      content: string;
  }
  /**
   * Saves currently logged in member's about as draft.
   * @param content - About content.
   * @internal
   * @documentationMaturity preview
   * @requiredField content
   * @adminMethod
   */
  function saveMyAboutDraft(content: string): Promise<SaveMyAboutDraftResponse>;
  /**
   * Makes member's about draft public.
   * @param memberId - Member ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField memberId
   * @adminMethod
   */
  function publishAbout(memberId: string): Promise<PublishAboutResponse>;
  /**
   * Makes currently logged in member's about draft public.
   * @internal
   * @documentationMaturity preview
   */
  function publishMyAbout(): Promise<PublishMyAboutResponse>;
  /**
   * Retrieves member's about.
   * @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.memberId
   * @requiredField identifiers.state
   */
  function getAbout(identifiers: GetAboutIdentifiers): Promise<GetAboutResponse>;
  interface GetAboutIdentifiers {
      /** Member ID. */
      memberId: string;
      /**
       * State of the about.
       * Defaults to `PUBLIC` state when not provided.
       */
      state: State;
  }
  /**
   * Retrieves about entities.
   * Only the *public* entities are included.
   *
   * Supported fields for filtering:
   * - `memberId`
   *
   * Supported fields for sorting:
   * - `memberId`
   * @internal
   * @documentationMaturity preview
   */
  function queryAbouts(options?: QueryAboutsOptions): Promise<QueryAboutsResponse>;
  interface QueryAboutsOptions {
      /** Query options. */
      query?: QueryV2;
  }
  /**
   * Discard currently logged in member's unpublished changes.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function discardMyChanges(): Promise<void>;
  
  export { About, Cursors, DiscardMyChangesRequest, DiscardMyChangesResponse, GetAboutIdentifiers, GetAboutRequest, GetAboutResponse, Paging, PagingMetadataV2, PublishAboutRequest, PublishAboutResponse, PublishMyAboutRequest, PublishMyAboutResponse, QueryAboutsOptions, QueryAboutsRequest, QueryAboutsResponse, QueryV2, SaveAboutDraftOptions, SaveAboutDraftRequest, SaveAboutDraftResponse, SaveMyAboutDraftRequest, SaveMyAboutDraftResponse, SortOrder, Sorting, State, TextTooLongInAboutContent, TooManyLinksInAboutContent, discardMyChanges, getAbout, publishAbout, publishMyAbout, queryAbouts, saveAboutDraft, saveMyAboutDraft };
}
