declare module "wix-jackal-backend" {
  /** Wishlist is the main entity of WishlistService that can be used for lorem ipsum dolor */
  interface Wishlist {
      /** Wishlist ID */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      email?: string | null;
      vip?: boolean;
      items?: WishlistItem[];
  }
  interface WishlistItem {
      _id?: string;
      type?: string;
  }
  interface CreateWishlistResponse {
      /** The created Wishlist */
      wishlist?: Wishlist;
  }
  interface GetWishlistResponse {
      /** The retrieved Wishlist */
      wishlist?: Wishlist;
  }
  interface UpdateWishlistResponse {
      /** The updated Wishlist */
      wishlist?: Wishlist;
  }
  interface DeleteWishlistResponse {
  }
  interface QueryV2 {
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
  interface UpdateWishlistWishlist {
      /** Wishlist ID */
      _id?: string | null;
      /** Represents the current state of an item. Each time the item is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision */
      revision?: string | null;
      email?: string | null;
      vip?: boolean;
      items?: WishlistItem[];
  }
  interface UpdateWishlistOptions {
      mask?: string[];
  }
  
  function createWishlist(wishlist: Wishlist): Promise<CreateWishlistResponse>;
  function getWishlist(wishlistId: string): Promise<GetWishlistResponse>;
  function updateWishlist(_id: string | null, wishlist: UpdateWishlistWishlist, options: UpdateWishlistOptions): Promise<UpdateWishlistResponse>;
  function deleteWishlist(wishlistId: string, revision: string): Promise<DeleteWishlistResponse>;
  function queryWishlist(query: QueryV2): Promise<QueryWishlistResponse>;
  
  export { createWishlist, deleteWishlist, getWishlist, queryWishlist, updateWishlist };
}
