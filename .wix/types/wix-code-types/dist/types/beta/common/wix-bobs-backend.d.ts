declare module "wix-bobs-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Wishlist is the main entity of WishlistService that can be used for lorem ipsum dolor */
  interface Wishlist {
      /** Wishlist ID */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this Wishlist was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Wishlist was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** An uppercase lorem ipsum dolor for your convenience */
      loremUppercase?: string;
      /** Just an ipsum, may be null */
      ipsum?: string | null;
      /** Business address */
      businessAddress?: string;
  }
  interface CreateWishlistRequest {
      /** Wishlist to be created */
      wishlist: Wishlist;
  }
  interface CreateWishlistResponse {
      /** The created Wishlist */
      wishlist?: Wishlist;
  }
  interface GetWishlistRequest {
      /** Id of the Wishlist to retrieve */
      wishlistId: string;
  }
  interface GetWishlistResponse {
      /** The retrieved Wishlist */
      wishlist?: Wishlist;
  }
  interface UpdateWishlistRequest {
      /** Wishlist to be updated, may be partial */
      wishlist: Wishlist;
      /** Explicit list of fields to update */
      mask?: string[];
  }
  interface UpdateWishlistResponse {
      /** The updated Wishlist */
      wishlist?: Wishlist;
  }
  interface DeleteWishlistRequest {
      /** Id of the Wishlist to delete */
      wishlistId: string;
      /** The revision of the Wishlist */
      revision?: string;
  }
  interface DeleteWishlistResponse {
  }
  interface QueryWishlistRequest {
      /** WQL expression */
      query: QueryV2;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
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
  interface QueryWishlistResponse {
      /** The retrieved Wishlists */
      wishlists?: Wishlist[];
  }
  /**
   * Creates a new Wishlist
   *
   * This function is not a universal function and runs only on the backend.
   * @param wishlist - Wishlist to be created
   * @public
   * @documentationMaturity preview
   * @requiredField wishlist
   * @adminMethod
   */
  function createWishlist(wishlist: Wishlist): Promise<CreateWishlistResponse>;
  /**
   * Get a Wishlist by id
   *
   * This function is not a universal function and runs only on the backend.
   * @param wishlistId - Id of the Wishlist to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField wishlistId
   * @adminMethod
   */
  function getWishlist(wishlistId: string): Promise<GetWishlistResponse>;
  /**
   * Update a Wishlist, supports partial update
   * Pass the latest `revision` for a successful update
   *
   * This function is not a universal function and runs only on the backend.
   * @param _id - Wishlist ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField wishlist
   * @requiredField wishlist.revision
   * @adminMethod
   */
  function updateWishlist(_id: string | null, wishlist: UpdateWishlist, options?: UpdateWishlistOptions): Promise<UpdateWishlistResponse>;
  interface UpdateWishlist {
      /** Wishlist ID */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      /**
       * Represents the time this Wishlist was created
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Wishlist was last updated
       * @readonly
       */
      _updatedDate?: Date;
      /** An uppercase lorem ipsum dolor for your convenience */
      loremUppercase?: string;
      /** Just an ipsum, may be null */
      ipsum?: string | null;
      /** Business address */
      businessAddress?: string;
  }
  interface UpdateWishlistOptions {
      /** Explicit list of fields to update */
      mask?: string[];
  }
  /**
   * Delete a Wishlist
   *
   * This function is not a universal function and runs only on the backend.
   * @param wishlistId - Id of the Wishlist to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField wishlistId
   * @adminMethod
   */
  function deleteWishlist(wishlistId: string, options?: DeleteWishlistOptions): Promise<void>;
  interface DeleteWishlistOptions {
      /** The revision of the Wishlist */
      revision?: string;
  }
  /**
   * Query Wishlists using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   *
   * This function is not a universal function and runs only on the backend.
   * @param query - WQL expression
   * @internal
   * @documentationMaturity preview
   * @requiredField query
   * @adminMethod
   */
  function queryWishlist(query: QueryV2): Promise<QueryWishlistResponse>;
  
  export { CreateWishlistRequest, CreateWishlistResponse, CursorPaging, DeleteWishlistOptions, DeleteWishlistRequest, DeleteWishlistResponse, GetWishlistRequest, GetWishlistResponse, Paging, QueryV2, QueryV2PagingMethodOneOf, QueryWishlistRequest, QueryWishlistResponse, SortOrder, Sorting, UpdateWishlist, UpdateWishlistOptions, UpdateWishlistRequest, UpdateWishlistResponse, Wishlist, __debug, createWishlist, deleteWishlist, getWishlist, queryWishlist, updateWishlist };
}
