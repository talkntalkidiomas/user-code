declare module "wix-stores.v2" {
    const __debug$6: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface WishlistData {
        /** GUID unique to this list for this site */
        _id?: string | null;
        /** Member id the list belongs to */
        ownerId?: string;
        /** List of items in the list. Not necessarily the full list (can depends on request data) */
        items?: WishlistItem[];
        /** Total count of items in the list */
        totalCount?: number;
    }
    interface WishlistItem {
        /** Unique identifier for an item of this type and origin */
        _id?: string;
        /**
         * The data the item was save to the list
         * @readonly
         */
        dateAdded?: Date;
        /** The type of the item. For example "product" */
        type?: string;
        /** The origin of the item. Should be the scope the item type is related to. For example "wixstores" */
        origin?: string;
    }
    interface ItemsAddedToWishlist {
        /** GUID unique to this list for its site */
        _id?: string | null;
        /** Member id the list belongs to */
        ownerId?: string;
        /** List of items that were added to wishlist */
        items?: WishlistItem[];
    }
    interface ItemsRemovedFromWishlist {
        /** GUID unique to this list for its site */
        _id?: string | null;
        /** Member id the list belongs to */
        ownerId?: string;
        /** List of items that were removed from wishlist */
        items?: WishlistItem[];
    }
    interface GetWishlistRequest {
        /** List length limit. Default is 100 */
        limit?: number | null;
        /** List starting index offset. Default is 0 */
        offset?: number | null;
        /** Filter requested list by specific kinds of items */
        kind?: WishlistItemKind[];
    }
    interface WishlistItemKind {
        /** The type of the item. For example "product" */
        type?: string;
        /** The origin of the item. Should be the scope the item type is related to. For example "wixstores" */
        origin?: string;
    }
    interface GetWishlistResponse {
        /** Object containing requested list data */
        wishlist?: WishlistData;
    }
    interface AddToWishlistRequest {
        /** List of items to add to list */
        items?: WishlistItem[];
    }
    interface AddToWishlistResponse {
    }
    interface RemoveFromWishlistRequest {
        /** List of items to remove from list */
        items?: WishlistItem[];
    }
    interface RemoveFromWishlistResponse {
    }
    interface GetWishlistByIdRequest {
        /** Unique identifier representing requested list */
        _id: string;
        /** List length limit. Default is 100 */
        limit?: number | null;
        /** List starting index offset. Default is 0 */
        offset?: number | null;
        /** Filter requested list by specific kinds of items */
        kind?: WishlistItemKind[];
    }
    interface GetWishlistByIdResponse {
        /** Object containing requested list data */
        wishlist?: WishlistData;
    }
    interface GetWishlistsRequest {
        /** List length limit. Default is 100 */
        limit?: number | null;
        /** List starting index offset. Default is 0 */
        offset?: number | null;
    }
    interface GetWishlistsResponse {
        /** List result of requested wishlists */
        wishlists?: WishlistData[];
    }
    interface GetWishlistOptions {
        /** List length limit. Default is 100 */
        limit?: number | null;
        /** List starting index offset. Default is 0 */
        offset?: number | null;
        /** Filter requested list by specific kinds of items */
        kind?: WishlistItemKind[];
    }
    interface AddToWishlistOptions {
        /** List of items to add to list */
        items?: WishlistItem[];
    }
    interface RemoveFromWishlistOptions {
        /** List of items to remove from list */
        items?: WishlistItem[];
    }
    /**
     * Get wishlist by id
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Unique identifier representing requested list
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @adminMethod
     * @returns Object containing requested list data
     */
    function getWishlistById(_id: string, options?: GetWishlistByIdOptions): Promise<WishlistData>;
    interface GetWishlistByIdOptions {
        /** List length limit. Default is 100 */
        limit?: number | null;
        /** List starting index offset. Default is 0 */
        offset?: number | null;
        /** Filter requested list by specific kinds of items */
        kind?: WishlistItemKind[];
    }
    interface GetWishlistsOptions {
        /** List length limit. Default is 100 */
        limit?: number | null;
        /** List starting index offset. Default is 0 */
        offset?: number | null;
    }
    type platformV1Wishlist_universal_d_WishlistData = WishlistData;
    type platformV1Wishlist_universal_d_WishlistItem = WishlistItem;
    type platformV1Wishlist_universal_d_ItemsAddedToWishlist = ItemsAddedToWishlist;
    type platformV1Wishlist_universal_d_ItemsRemovedFromWishlist = ItemsRemovedFromWishlist;
    type platformV1Wishlist_universal_d_GetWishlistRequest = GetWishlistRequest;
    type platformV1Wishlist_universal_d_WishlistItemKind = WishlistItemKind;
    type platformV1Wishlist_universal_d_GetWishlistResponse = GetWishlistResponse;
    type platformV1Wishlist_universal_d_AddToWishlistRequest = AddToWishlistRequest;
    type platformV1Wishlist_universal_d_AddToWishlistResponse = AddToWishlistResponse;
    type platformV1Wishlist_universal_d_RemoveFromWishlistRequest = RemoveFromWishlistRequest;
    type platformV1Wishlist_universal_d_RemoveFromWishlistResponse = RemoveFromWishlistResponse;
    type platformV1Wishlist_universal_d_GetWishlistByIdRequest = GetWishlistByIdRequest;
    type platformV1Wishlist_universal_d_GetWishlistByIdResponse = GetWishlistByIdResponse;
    type platformV1Wishlist_universal_d_GetWishlistsRequest = GetWishlistsRequest;
    type platformV1Wishlist_universal_d_GetWishlistsResponse = GetWishlistsResponse;
    type platformV1Wishlist_universal_d_GetWishlistOptions = GetWishlistOptions;
    type platformV1Wishlist_universal_d_AddToWishlistOptions = AddToWishlistOptions;
    type platformV1Wishlist_universal_d_RemoveFromWishlistOptions = RemoveFromWishlistOptions;
    const platformV1Wishlist_universal_d_getWishlistById: typeof getWishlistById;
    type platformV1Wishlist_universal_d_GetWishlistByIdOptions = GetWishlistByIdOptions;
    type platformV1Wishlist_universal_d_GetWishlistsOptions = GetWishlistsOptions;
    namespace platformV1Wishlist_universal_d {
        export { __debug$6 as __debug, platformV1Wishlist_universal_d_WishlistData as WishlistData, platformV1Wishlist_universal_d_WishlistItem as WishlistItem, platformV1Wishlist_universal_d_ItemsAddedToWishlist as ItemsAddedToWishlist, platformV1Wishlist_universal_d_ItemsRemovedFromWishlist as ItemsRemovedFromWishlist, platformV1Wishlist_universal_d_GetWishlistRequest as GetWishlistRequest, platformV1Wishlist_universal_d_WishlistItemKind as WishlistItemKind, platformV1Wishlist_universal_d_GetWishlistResponse as GetWishlistResponse, platformV1Wishlist_universal_d_AddToWishlistRequest as AddToWishlistRequest, platformV1Wishlist_universal_d_AddToWishlistResponse as AddToWishlistResponse, platformV1Wishlist_universal_d_RemoveFromWishlistRequest as RemoveFromWishlistRequest, platformV1Wishlist_universal_d_RemoveFromWishlistResponse as RemoveFromWishlistResponse, platformV1Wishlist_universal_d_GetWishlistByIdRequest as GetWishlistByIdRequest, platformV1Wishlist_universal_d_GetWishlistByIdResponse as GetWishlistByIdResponse, platformV1Wishlist_universal_d_GetWishlistsRequest as GetWishlistsRequest, platformV1Wishlist_universal_d_GetWishlistsResponse as GetWishlistsResponse, platformV1Wishlist_universal_d_GetWishlistOptions as GetWishlistOptions, platformV1Wishlist_universal_d_AddToWishlistOptions as AddToWishlistOptions, platformV1Wishlist_universal_d_RemoveFromWishlistOptions as RemoveFromWishlistOptions, platformV1Wishlist_universal_d_getWishlistById as getWishlistById, platformV1Wishlist_universal_d_GetWishlistByIdOptions as GetWishlistByIdOptions, platformV1Wishlist_universal_d_GetWishlistsOptions as GetWishlistsOptions, };
    }
    const __debug$5: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Collection$1 {
        /**
         * Collection ID (generated automatically by the catalog).
         * @readonly
         */
        _id?: string | null;
        /** Collection name. */
        name?: string | null;
        /**
         * Media items (images, videos etc) associated with this collection. Read only.
         * @readonly
         */
        media?: Media$1;
        /**
         * Number of products in the collection. Read only.
         * @readonly
         */
        numberOfProducts?: number;
        /** Collection description. */
        description?: string | null;
        /** Collection slug. */
        slug?: string | null;
        /** Collection visibility. Only impacts dynamic pages, no impact on static pages. Default: `true`. */
        visible?: boolean | null;
    }
    interface Media$1 {
        /** Primary media (image, video etc) associated with this product. */
        mainMedia?: MediaItem$2;
        /** Media (images, videos etc) associated with this product. */
        items?: MediaItem$2[];
    }
    interface MediaItem$2 extends MediaItemItemOneOf$1 {
        /** Image data (URL, size). */
        image?: MediaItemUrlAndSize$1;
        /** Video data (URL, size). */
        video?: MediaItemVideo$1;
        /** Media item thumbnail details. */
        thumbnail?: MediaItemUrlAndSize$1;
        /** Media item type (image, video, etc.). */
        mediaType?: MediaItemType$2;
        /** Media item title. */
        title?: string;
        /** Media ID (for example, `"nsplsh_306d666a123a4a74306459~mv2_d_4517_2992_s_4_2.jpg"`). */
        _id?: string;
    }
    /** @oneof */
    interface MediaItemItemOneOf$1 {
        /** Image data (URL, size). */
        image?: MediaItemUrlAndSize$1;
        /** Video data (URL, size). */
        video?: MediaItemVideo$1;
    }
    interface MediaItemUrlAndSize$1 {
        /** Media item URL. */
        url?: string;
        /** Media item width. */
        width?: number;
        /** Media item height. */
        height?: number;
        /** Media format (mp4, png, etc.). */
        format?: string | null;
        /** Alt text. This text will be shown in case the image is not available. */
        altText?: string | null;
    }
    enum MediaItemType$2 {
        unspecified_media_item_type = "unspecified_media_item_type",
        image = "image",
        video = "video",
        audio = "audio",
        document = "document",
        zip = "zip"
    }
    interface MediaItemVideo$1 {
        /** Data (URL, size) about each resolution for which this video is available. */
        files?: MediaItemUrlAndSize$1[];
        /** ID of an image taken from the video. Used primarily for Wix Search indexing. For example, `"nsplsh_306d666a123a4a74306459~mv2_d_4517_2992_s_4_2.jpg"`. */
        stillFrameMediaId?: string;
    }
    /**
     * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
     * The search engines use this information for ranking purposes, or to display snippets in the search results.
     * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
     */
    interface SeoSchema$1 {
        /** SEO tag information. */
        tags?: Tag$1[];
        /** SEO general settings. */
        settings?: Settings$1;
    }
    interface Keyword$1 {
        /** Keyword value. */
        term?: string;
        /** Whether the keyword is the main focus keyword. */
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
         * A `{'key':'value'}` pair object where each SEO tag property (`'name'`, `'content'`, `'rel'`, `'href'`) contains a value.
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
         * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
         *
         *
         * Default: `false` (Auto Redirect is enabled.)
         */
        preventAutoRedirect?: boolean;
        /** User-selected keyword terms for a specific page. */
        keywords?: Keyword$1[];
    }
    interface QueryCollectionsRequest$1 {
        query?: PlatformQuery$1;
    }
    interface PlatformQuery$1 extends PlatformQueryPagingMethodOneOf$1 {
        /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
        paging?: PlatformPaging$1;
        /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
        cursorPaging?: CursorPaging$1;
        /** Filter object. */
        filter?: Record<string, any> | null;
        /** Sorting options. For example, `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]`. */
        sort?: Sorting$1[];
    }
    /** @oneof */
    interface PlatformQueryPagingMethodOneOf$1 {
        /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
        paging?: PlatformPaging$1;
        /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
        cursorPaging?: CursorPaging$1;
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
    interface PlatformPaging$1 {
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
    interface QueryCollectionsResponse$1 {
        collections?: Collection$1[];
        metadata?: PlatformPagingMetadata$1;
    }
    interface PlatformPagingMetadata$1 {
        /** The number of items returned in this response. */
        count?: number | null;
        /** The offset which was requested. Returned if offset paging was used. */
        offset?: number | null;
        /** The total number of items that match the query. Returned if offset paging was used. */
        total?: number | null;
        /** Cursors to navigate through result pages. Returned if cursor paging was used. */
        cursors?: Cursors$1;
    }
    interface Cursors$1 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface GetCollectionRequest$1 {
        /** Requested collection ID. */
        _id: string;
    }
    interface GetCollectionResponse$1 {
        collection?: Collection$1;
    }
    interface GetCollectionBySlugRequest$1 {
        /** Slug of the collection to retrieve. */
        slug: string;
    }
    interface GetCollectionBySlugResponse$1 {
        /** The requested collection. */
        collection?: Collection$1;
    }
    /**
     * Retrieves a list of up to 100 collections, given the provided paging, sorting and filtering.
     * See [Stores Pagination](https://dev.wix.com/api/rest/wix-stores/pagination) for more information.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @adminMethod
     */
    function queryCollections(): CollectionsQueryBuilder;
    interface QueryOffsetResult$1 {
        currentPage: number;
        totalPages: number;
        totalCount: number;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface CollectionsQueryResult extends QueryOffsetResult$1 {
        items: Collection$1[];
        query: CollectionsQueryBuilder;
        next: () => Promise<CollectionsQueryResult>;
        prev: () => Promise<CollectionsQueryResult>;
    }
    interface CollectionsQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "_id" | "name", value: any) => CollectionsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "name", value: any) => CollectionsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: "_id" | "name", value: string) => CollectionsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasSome: (propertyName: "_id" | "name", value: any[]) => CollectionsQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "_id" | "name", value: any) => CollectionsQueryBuilder;
        /** @documentationMaturity preview */
        exists: (propertyName: "_id" | "name", value: boolean) => CollectionsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"_id" | "name">) => CollectionsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"_id" | "name">) => CollectionsQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => CollectionsQueryBuilder;
        /** @param skip - Number of items to skip in the query results before returning the results.
         * @documentationMaturity preview
         */
        skip: (skip: number) => CollectionsQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<CollectionsQueryResult>;
    }
    /**
     * Retrieves a collection with the provided ID.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Requested collection ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @adminMethod
     */
    function getCollection(_id: string): Promise<Collection$1>;
    /**
     * Retrieves a collection with the provided slug.
     *
     * This function is not a universal function and runs only on the backend.
     * @param slug - Slug of the collection to retrieve.
     * @public
     * @documentationMaturity preview
     * @requiredField slug
     * @adminMethod
     */
    function getCollectionBySlug$1(slug: string): Promise<GetCollectionBySlugResponse$1>;
    const storesCatalogV1Collection_universal_d_queryCollections: typeof queryCollections;
    type storesCatalogV1Collection_universal_d_CollectionsQueryResult = CollectionsQueryResult;
    type storesCatalogV1Collection_universal_d_CollectionsQueryBuilder = CollectionsQueryBuilder;
    const storesCatalogV1Collection_universal_d_getCollection: typeof getCollection;
    namespace storesCatalogV1Collection_universal_d {
        export { __debug$5 as __debug, Collection$1 as Collection, Media$1 as Media, MediaItem$2 as MediaItem, MediaItemItemOneOf$1 as MediaItemItemOneOf, MediaItemUrlAndSize$1 as MediaItemUrlAndSize, MediaItemType$2 as MediaItemType, MediaItemVideo$1 as MediaItemVideo, SeoSchema$1 as SeoSchema, Keyword$1 as Keyword, Tag$1 as Tag, Settings$1 as Settings, QueryCollectionsRequest$1 as QueryCollectionsRequest, PlatformQuery$1 as PlatformQuery, PlatformQueryPagingMethodOneOf$1 as PlatformQueryPagingMethodOneOf, Sorting$1 as Sorting, SortOrder$1 as SortOrder, PlatformPaging$1 as PlatformPaging, CursorPaging$1 as CursorPaging, QueryCollectionsResponse$1 as QueryCollectionsResponse, PlatformPagingMetadata$1 as PlatformPagingMetadata, Cursors$1 as Cursors, GetCollectionRequest$1 as GetCollectionRequest, GetCollectionResponse$1 as GetCollectionResponse, GetCollectionBySlugRequest$1 as GetCollectionBySlugRequest, GetCollectionBySlugResponse$1 as GetCollectionBySlugResponse, storesCatalogV1Collection_universal_d_queryCollections as queryCollections, storesCatalogV1Collection_universal_d_CollectionsQueryResult as CollectionsQueryResult, storesCatalogV1Collection_universal_d_CollectionsQueryBuilder as CollectionsQueryBuilder, storesCatalogV1Collection_universal_d_getCollection as getCollection, getCollectionBySlug$1 as getCollectionBySlug, };
    }
    const __debug$4: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Product {
        /**
         * Product ID (generated automatically by the catalog).
         * @readonly
         */
        _id?: string;
        /**
         * Product name.
         *
         * Min: 1 character
         * Max: 80 characters
         */
        name?: string | null;
        /** A friendly URL name (generated automatically by the catalog when a product is created), can be updated. */
        slug?: string;
        /** Whether the product is visible to site visitors. */
        visible?: boolean | null;
        /** Currently, only creating physical products ( `"productType": "physical"` ) is supported via the API. */
        productType?: ProductType;
        /** Product description. */
        description?: string | null;
        /** Stock keeping unit. If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, SKUs will be set per variant, and this field will be empty. */
        sku?: string | null;
        /** Product weight. If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, weight will be set per variant, and this field will be empty. */
        weight?: number | null;
        /**
         * Product weight range. The minimum and maximum weights of all the variants.
         * @readonly
         */
        weightRange?: NumericPropertyRange;
        /**
         * Product inventory status (in future this will be writable via Inventory API).
         * @readonly
         */
        stock?: Stock;
        /**
         * Deprecated (use `priceData` instead).
         * @readonly
         */
        price?: PriceData;
        /** Price data. */
        priceData?: PriceData;
        /**
         * Price data, converted to the currency specified in request header.
         * @readonly
         */
        convertedPriceData?: PriceData;
        /**
         * Product price range. The minimum and maximum prices of all the variants.
         * @readonly
         */
        priceRange?: NumericPropertyRange;
        /** Cost and profit data. */
        costAndProfitData?: CostAndProfitData;
        /**
         * Product cost range. The minimum and maximum costs of all the variants.
         * @readonly
         */
        costRange?: NumericPropertyRange;
        /** Price per unit data. */
        pricePerUnitData?: PricePerUnitData;
        /** Additional text that the store owner can assign to the product (e.g. shipping details, refund policy, etc.). */
        additionalInfoSections?: AdditionalInfoSection[];
        /**
         * Deprecated (use `ribbon` instead).
         * @readonly
         */
        ribbons?: Ribbon[];
        /**
         * Media items (images, videos etc) associated with this product (writable via [Add Product Media](https://dev.wix.com/api/rest/wix-stores/catalog/products/add-product-media) endpoint).
         * @readonly
         */
        media?: Media;
        /**
         * Text box for the customer to add a message to their order (e.g., customization request). Currently writable only from the UI.
         * @readonly
         */
        customTextFields?: CustomTextField[];
        /** Whether variants are being managed for this product - enables unique SKU, price and weight per variant. Also affects inventory data. Once set to `true`, can be reset to `false` only if no variants exist. You cannot set `manageVariants` to `true` if more than 300 variants are defined. */
        manageVariants?: boolean | null;
        /** Options for this product. */
        productOptions?: ProductOption[];
        /**
         * Product page URL for this product (generated automatically by the server).
         * @readonly
         */
        productPageUrl?: PageUrl;
        /**
         * Product’s unique numeric ID (assigned in ascending order).
         * Primarily used for sorting and filtering when crawling all products.
         * @readonly
         */
        numericId?: string;
        /**
         * Inventory item ID - ID referencing the inventory system.
         * @readonly
         */
        inventoryItemId?: string;
        /** Discount deducted from the product's original price. */
        discount?: Discount$2;
        /**
         * A list of all collection IDs that this product is included in (writable via the Catalog > Collection APIs).
         * @readonly
         */
        collectionIds?: string[];
        /**
         * Product variants, will be provided if the the request was sent with the includeVariants flag.
         * @readonly
         */
        variants?: Variant[];
        /**
         * Date and time the product was last updated.
         * @readonly
         */
        lastUpdated?: Date;
        /**
         * Date and time the product was created.
         * @readonly
         */
        _createdDate?: Date;
        /** Custom SEO data for the product. */
        seoData?: SeoSchema;
        /** Product ribbon. Used to highlight relevant information about a product. For example, "Sale", "New Arrival", "Sold Out". */
        ribbon?: string | null;
        /** Product brand. Including a brand name can help improve site and product [visibility on search engines](https://support.wix.com/en/article/adding-brand-names-to-boost-product-page-seo-in-wix-stores). */
        brand?: string | null;
    }
    enum ProductType {
        unspecified_product_type = "unspecified_product_type",
        physical = "physical",
        digital = "digital"
    }
    interface NumericPropertyRange {
        /** Minimum value. */
        minValue?: number;
        /** Maximum value. */
        maxValue?: number;
    }
    interface Stock {
        /** Whether inventory is being tracked */
        trackInventory?: boolean;
        /** Quantity currently left in inventory */
        quantity?: number | null;
        /**
         * Whether the product is currently in stock (relevant only when tracking manually)
         * Deprecated (use `inventoryStatus` instead)
         */
        inStock?: boolean;
        /**
         * The current status of the inventory
         * + `IN_STOCK` - In stock
         * + `OUT_OF_STOCK` - Not in stock
         * + `PARTIALLY_OUT_OF_STOCK` - Some of the variants are not in stock
         */
        inventoryStatus?: InventoryStatus;
    }
    enum InventoryStatus {
        IN_STOCK = "IN_STOCK",
        OUT_OF_STOCK = "OUT_OF_STOCK",
        PARTIALLY_OUT_OF_STOCK = "PARTIALLY_OUT_OF_STOCK"
    }
    interface PriceData {
        /**
         * Product price currency
         * @readonly
         */
        currency?: string;
        /** Product price */
        price?: number | null;
        /**
         * Discounted product price (if no discounted price is set, the product price is returned)
         * @readonly
         */
        discountedPrice?: number;
        /**
         * The product price and discounted price, formatted with the currency
         * @readonly
         */
        formatted?: FormattedPrice;
        /**
         * Price per unit
         * @readonly
         */
        pricePerUnit?: number | null;
    }
    interface FormattedPrice {
        /** Product price formatted with the currency */
        price?: string;
        /** Discounted product price formatted with the currency (if no discounted price is set, the product formatted price is returned) */
        discountedPrice?: string;
        /**
         * Price per unit
         * @readonly
         */
        pricePerUnit?: string | null;
    }
    interface CostAndProfitData {
        /** Item cost. */
        itemCost?: number | null;
        /**
         * Item cost formatted with currency symbol.
         * @readonly
         */
        formattedItemCost?: string;
        /**
         * Profit. Calculated by reducing `cost` from `discounted_price`.
         * @readonly
         */
        profit?: number;
        /**
         * Profit formatted with currency symbol.
         * @readonly
         */
        formattedProfit?: string;
        /**
         * Profit Margin. Calculated by dividing `profit` by `discounted_price`.
         * The result is rounded to 4 decimal places.
         * @readonly
         */
        profitMargin?: number;
    }
    interface PricePerUnitData {
        /** Total quantity */
        totalQuantity?: number;
        /** Total measurement unit */
        totalMeasurementUnit?: MeasurementUnit;
        /** Base quantity */
        baseQuantity?: number;
        /** Base measurement unit */
        baseMeasurementUnit?: MeasurementUnit;
    }
    enum MeasurementUnit {
        UNSPECIFIED = "UNSPECIFIED",
        ML = "ML",
        CL = "CL",
        L = "L",
        CBM = "CBM",
        MG = "MG",
        G = "G",
        KG = "KG",
        MM = "MM",
        CM = "CM",
        M = "M",
        SQM = "SQM",
        OZ = "OZ",
        LB = "LB",
        FLOZ = "FLOZ",
        PT = "PT",
        QT = "QT",
        GAL = "GAL",
        IN = "IN",
        FT = "FT",
        YD = "YD",
        SQFT = "SQFT"
    }
    interface AdditionalInfoSection {
        /** Product info section title */
        title?: string;
        /** Product info section description */
        description?: string;
    }
    interface Ribbon {
        /** Ribbon text */
        text?: string;
    }
    interface Media {
        /** Primary media (image, video etc) associated with this product. */
        mainMedia?: MediaItem$1;
        /** Media (images, videos etc) associated with this product. */
        items?: MediaItem$1[];
    }
    interface MediaItem$1 extends MediaItemItemOneOf {
        /** Image data (URL, size). */
        image?: MediaItemUrlAndSize;
        /** Video data (URL, size). */
        video?: MediaItemVideo;
        /** Media item thumbnail details. */
        thumbnail?: MediaItemUrlAndSize;
        /** Media item type (image, video, etc.). */
        mediaType?: MediaItemType$1;
        /** Media item title. */
        title?: string;
        /** Media ID (for example, `"nsplsh_306d666a123a4a74306459~mv2_d_4517_2992_s_4_2.jpg"`). */
        _id?: string;
    }
    /** @oneof */
    interface MediaItemItemOneOf {
        /** Image data (URL, size). */
        image?: MediaItemUrlAndSize;
        /** Video data (URL, size). */
        video?: MediaItemVideo;
    }
    interface MediaItemUrlAndSize {
        /** Media item URL. */
        url?: string;
        /** Media item width. */
        width?: number;
        /** Media item height. */
        height?: number;
        /** Media format (mp4, png, etc.). */
        format?: string | null;
        /** Alt text. This text will be shown in case the image is not available. */
        altText?: string | null;
    }
    enum MediaItemType$1 {
        unspecified_media_item_type = "unspecified_media_item_type",
        image = "image",
        video = "video",
        audio = "audio",
        document = "document",
        zip = "zip"
    }
    interface MediaItemVideo {
        /** Data (URL, size) about each resolution for which this video is available. */
        files?: MediaItemUrlAndSize[];
        /** ID of an image taken from the video. Used primarily for Wix Search indexing. For example, `"nsplsh_306d666a123a4a74306459~mv2_d_4517_2992_s_4_2.jpg"`. */
        stillFrameMediaId?: string;
    }
    interface CustomTextField {
        /** Text box title */
        title?: string;
        /** Text box input max length */
        maxLength?: number;
        /** Whether this text box is mandatory */
        mandatory?: boolean;
    }
    interface ProductOption {
        /**
         * Option type - color or other(drop down)
         * @readonly
         */
        optionType?: OptionType;
        /** Option name. */
        name?: string;
        /** Choices available for this option. */
        choices?: Choice[];
    }
    enum OptionType {
        unspecified_option_type = "unspecified_option_type",
        drop_down = "drop_down",
        color = "color"
    }
    interface Choice {
        /** Choice value. */
        value?: string;
        /** Choice description. */
        description?: string;
        /**
         * Media items (images, videos) associated with this choice
         * @readonly
         */
        media?: Media;
        /**
         * Based on the customer’s choices, which (if any) variants that include the selected choices are in stock
         * @readonly
         */
        inStock?: boolean;
        /**
         * Based on the customer’s choices, which (if any) variants that include the selected choices are visible
         * @readonly
         */
        visible?: boolean;
    }
    interface PageUrl {
        /** Base URL. For premium sites, this is the domain. For free sites, this is the site URL (e.g mysite.wixsite.com/mysite). */
        base?: string;
        /** Path to the product page - e.g /product-page/a-product. */
        path?: string;
    }
    interface Discount$2 {
        /**
         * Discount type:
         * + `"AMOUNT"`
         * + `"PERCENT"`
         */
        type?: DiscountType$1;
        /** Discount value */
        value?: number;
    }
    enum DiscountType$1 {
        UNDEFINED = "UNDEFINED",
        /** No discount */
        NONE = "NONE",
        AMOUNT = "AMOUNT",
        PERCENT = "PERCENT"
    }
    interface Variant {
        /** Requested Variant ID */
        _id?: string;
        /** Specific choices within a selection, as option-choice key-value pairs */
        choices?: Record<string, string>;
        variant?: VariantDataWithNoStock;
        /**
         * Variant inventory status.
         * @readonly
         */
        stock?: VariantStock;
    }
    interface VariantDataWithNoStock {
        /** Variant price. */
        priceData?: PriceData;
        /**
         * Variant price data, converted to currency requested in header.
         * @readonly
         */
        convertedPriceData?: PriceData;
        /** Cost and profit data. */
        costAndProfitData?: CostAndProfitData;
        /** Variant weight. */
        weight?: number;
        /** Variant SKU (stock keeping unit). */
        sku?: string;
        /** Whether the variant is visible to customers. */
        visible?: boolean;
    }
    interface VariantStock {
        /** Whether inventory is being tracked. */
        trackQuantity?: boolean;
        /** Quantity currently left in inventory. */
        quantity?: number | null;
        /** Whether the product is currently in stock (relevant only when tracking manually). */
        inStock?: boolean;
    }
    /**
     * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
     * The search engines use this information for ranking purposes, or to display snippets in the search results.
     * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
     */
    interface SeoSchema {
        /** SEO tag information. */
        tags?: Tag[];
        /** SEO general settings. */
        settings?: Settings;
    }
    interface Keyword {
        /** Keyword value. */
        term?: string;
        /** Whether the keyword is the main focus keyword. */
        isMain?: boolean;
    }
    interface Tag {
        /**
         * SEO tag type.
         *
         *
         * Supported values: `title`, `meta`, `script`, `link`.
         */
        type?: string;
        /**
         * A `{'key':'value'}` pair object where each SEO tag property (`'name'`, `'content'`, `'rel'`, `'href'`) contains a value.
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
         * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
         *
         *
         * Default: `false` (Auto Redirect is enabled.)
         */
        preventAutoRedirect?: boolean;
        /** User-selected keyword terms for a specific page. */
        keywords?: Keyword[];
    }
    interface CreateProductRequest {
        /** Product information. */
        product?: Product;
    }
    interface CreateProductResponse {
        product?: Product;
    }
    interface CreateProductPlatformizedRequest {
        /** Product information. */
        product?: Product;
    }
    interface CreateProductPlatformizedResponse {
        product?: Product;
    }
    interface UpdateProductRequest {
        product: Product;
    }
    interface UpdateProductResponse {
        product?: Product;
    }
    interface UpdateProductPlatformizedRequest {
        product: Product;
    }
    interface UpdateProductPlatformizedResponse {
        product?: Product;
    }
    interface DeleteProductRequest {
        /** ID of the product to delete. */
        _id: string;
    }
    interface DeleteProductResponse {
    }
    interface DeleteProductPlatformizedRequest {
        /** ID of the product to delete. */
        _id: string;
    }
    interface DeleteProductPlatformizedResponse {
    }
    interface BulkDeleteProductsRequest {
        /** IDs of the products to be deleted. */
        ids: string[];
    }
    interface BulkDeleteProductsResponse {
    }
    interface UpdateVariantsRequest {
        /** ID of the product with managed variants. */
        _id: string;
        /** Variant info to update. */
        variants?: VariantOverride[];
    }
    interface VariantOverride {
        /** The specific choices available or chosen from within a selection (e.g., choosing the red Selection triggers the red Choice). You may specify all the relevant choices for a specific variant, or only some of the options, which will return all corresponding variants (Not relevant when passing variant IDs) */
        choices?: Record<string, string>;
        /**
         * List of variant IDs
         * (Not relevant when passing choices)
         */
        variantIds?: string[];
        /** Variant price */
        price?: number | null;
        /** Variant cost of goods */
        cost?: number | null;
        /** Variant weight */
        weight?: number | null;
        /** Variant SKU (stock keeping unit) */
        sku?: string | null;
        /** Whether the variant is visible to  customers */
        visible?: boolean | null;
    }
    interface UpdateVariantsResponse {
        /** List of the product's variants. */
        variants?: Variant[];
    }
    interface ResetAllVariantDataRequest {
        /** Product ID. */
        _id: string;
    }
    interface ResetAllVariantDataResponse {
    }
    interface AddProductsToCollectionRequest {
        /** Collection ID. */
        _id: string;
        /** IDs of the products to add to the collection, separated by commas. */
        productIds?: string[];
    }
    interface AddProductsToCollectionResponse {
    }
    interface RemoveProductsFromCollectionRequest {
        /** ID of the collection from which to remove products. */
        _id: string;
        /** IDs of the products to remove from the collection. */
        productIds: string[];
    }
    interface RemoveProductsFromCollectionResponse {
    }
    interface AddProductMediaRequest {
        /** Product ID. */
        _id: string;
        /** Sources of media items already uploaded to the Wix site. */
        media?: MediaDataForWrite[];
    }
    interface MediaDataForWrite extends MediaDataForWriteMediaSourceOneOf {
        /** Media ID. */
        mediaId?: string;
        /** Media external URL (for new media items). */
        url?: string;
        /** Assign this media item to a specific product choice. Note that you may set media items for choices under only one option (e.g., if Colors blue, green, and red have media items, Sizes S, M, and L can't have media items assigned to them). You may clear existing media from choices with the [Remove Product Media From Choices](#removeproductmediafromchoices). */
        choice?: OptionAndChoice;
    }
    /** @oneof */
    interface MediaDataForWriteMediaSourceOneOf {
        /** Media ID. */
        mediaId?: string;
        /** Media external URL (for new media items). */
        url?: string;
    }
    interface OptionAndChoice {
        /** Option to add the media to. */
        option?: string;
        /** Choice to add the media to. */
        choice?: string;
    }
    interface AddProductMediaResponse {
    }
    interface RemoveProductMediaRequest {
        /** Product ID. */
        _id: string;
        /** List of media IDs to remove. Pass an empty array to delete all media items for the product. */
        mediaIds?: string[];
    }
    interface RemoveProductMediaResponse {
    }
    interface AddProductMediaToChoicesRequest {
        /** Product ID. */
        _id: string;
        /** Product media items and the choices to add the media to. */
        media?: MediaAssignmentToChoice[];
    }
    interface MediaAssignmentToChoice {
        /** Option name. */
        option?: string;
        /** Choice name. */
        choice?: string;
        /** Media IDs (available via the Query Product endpoint). */
        mediaIds?: string[];
    }
    interface AddProductMediaToChoicesResponse {
    }
    interface RemoveProductMediaFromChoicesRequest {
        /** Product ID from whose choices to remove media items. */
        _id: string;
        /** Media to remove from choices. If an empty array is passed, all media will be removed from all choices for the given product. */
        media?: MediaAssignmentToChoice[];
    }
    interface RemoveProductMediaFromChoicesResponse {
    }
    interface DeleteProductOptionsRequest {
        /** ID of the product with options to delete. */
        _id: string;
    }
    interface DeleteProductOptionsResponse {
    }
    interface SetCustomFieldsRequest {
        /** Product ID. */
        _id: string;
        /** Custom field that will be added, if a custom field with the same name already exists, the value of the custom field will be overridden. */
        customFields?: Record<string, any>;
    }
    interface SetCustomFieldsResponse {
    }
    interface RemoveCustomFieldsRequest {
        /** Product ID. */
        _id: string;
        /** Custom fields to be removed (by name). */
        names?: string[];
    }
    interface RemoveCustomFieldsResponse {
    }
    interface RemoveProductBrandRequest {
        /** Product ID. */
        _id: string;
    }
    interface RemoveProductBrandResponse {
    }
    interface BulkSetCustomFieldsRequest {
        /** Filter string. */
        filter?: string | null;
        /** Custom field that will be added, if a custom field with same name already exists, the value of the custom field will be overridden. */
        customFields?: Record<string, any>;
    }
    interface BulkSetCustomFieldsResponse {
    }
    interface BulkRemoveCustomFieldsRequest {
        /** Filter string. */
        filter?: string | null;
        /** Custom fields names. */
        names?: string[];
    }
    interface BulkRemoveCustomFieldsResponse {
    }
    interface CreateCollectionRequest {
        /** Collection info. */
        collection: Collection;
    }
    interface Collection {
        /**
         * Collection ID (generated automatically by the catalog).
         * @readonly
         */
        _id?: string | null;
        /** Collection name. */
        name?: string | null;
        /**
         * Media items (images, videos etc) associated with this collection. Read only.
         * @readonly
         */
        media?: Media;
        /**
         * Number of products in the collection. Read only.
         * @readonly
         */
        numberOfProducts?: number;
        /** Collection description. */
        description?: string | null;
        /** Collection slug. */
        slug?: string | null;
        /** Collection visibility. Only impacts dynamic pages, no impact on static pages. Default: `true`. */
        visible?: boolean | null;
    }
    interface CreateCollectionResponse {
        /** Collection. */
        collection?: Collection;
    }
    interface UpdateCollectionRequest {
        /** Collection info. */
        collection: Collection;
    }
    interface UpdateCollectionResponse {
        /** Updated collection. */
        collection?: Collection;
    }
    interface DeleteCollectionRequest {
        /** ID of the collection to delete. */
        _id: string;
    }
    interface DeleteCollectionResponse {
    }
    interface RemoveProductRibbonRequest {
        /** Product ID. */
        _id: string;
    }
    interface RemoveProductRibbonResponse {
    }
    interface BulkUpdateProductsRequest {
        /** Product IDs. */
        ids: string[];
        /** Field to update. */
        set?: SetValue;
    }
    interface SetValue extends SetValueValueOneOf {
        /**
         * Set product price.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
         * variant prices will be calculated according to the set product price.
         * If variant price is negative after setting new price, the update will fail.
         */
        price?: number;
        /**
         * Set product cost of goods.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
         * cost of goods will be set per variant.
         */
        cost?: number;
        /**
         * Set product weight.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
         * weight will be set per variant.
         */
        weight?: number;
        /** Set product ribbon. Pass empty string to remove existing ribbon. */
        ribbon?: string;
        /** Set product brand. Pass empty string to remove existing brand. */
        brand?: string;
    }
    /** @oneof */
    interface SetValueValueOneOf {
        /**
         * Set product price.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
         * variant prices will be calculated according to the set product price.
         * If variant price is negative after setting new price, the update will fail.
         */
        price?: number;
        /**
         * Set product cost of goods.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
         * cost of goods will be set per variant.
         */
        cost?: number;
        /**
         * Set product weight.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
         * weight will be set per variant.
         */
        weight?: number;
        /** Set product ribbon. Pass empty string to remove existing ribbon. */
        ribbon?: string;
        /** Set product brand. Pass empty string to remove existing brand. */
        brand?: string;
    }
    interface BulkUpdateProductsResponse {
        /** Bulk action results. */
        results?: BulkProductResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface BulkProductResult {
        /** Item metadata. */
        itemMetadata?: ItemMetadata;
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
    interface BulkUpdateProductsByFilterSyncRequest {
        /** Filter object. Learn more about supported filters [here](https://bo.wix.com/wix-docs/rest/stores/stores-catalog/filter-and-sort). */
        filter: Record<string, any> | null;
        /** The field to update. */
        set?: SetValue;
    }
    interface BulkUpdateProductsByFilterSyncResponse {
        /** Items updated by bulk action. */
        results?: BulkProductResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface AllowedProductsCountLimitExceededErrorData {
        /** Total number of products */
        totalCount?: number;
    }
    interface BulkAdjustProductPropertiesRequest {
        /** Product IDs. */
        ids: string[];
        /** Numerical property to adjust. */
        adjust?: AdjustValue;
    }
    interface AdjustValue extends AdjustValueValueOneOf {
        /**
         * Adjust product price.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
         * variants prices will be calculated according to the adjusted price.
         * If variant price is negative after the adjustment, the update will fail.
         */
        price?: PropertyAdjustmentData;
        /**
         * Adjust product cost of goods.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
         * cost of goods will be adjusted per variant.
         */
        cost?: PropertyAdjustmentData;
        /**
         * Adjust product weight.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
         * weight will be adjusted per variant.
         */
        weight?: PropertyAdjustmentData;
    }
    /** @oneof */
    interface AdjustValueValueOneOf {
        /**
         * Adjust product price.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
         * variants prices will be calculated according to the adjusted price.
         * If variant price is negative after the adjustment, the update will fail.
         */
        price?: PropertyAdjustmentData;
        /**
         * Adjust product cost of goods.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
         * cost of goods will be adjusted per variant.
         */
        cost?: PropertyAdjustmentData;
        /**
         * Adjust product weight.
         * If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled,
         * weight will be adjusted per variant.
         */
        weight?: PropertyAdjustmentData;
    }
    interface PropertyAdjustmentData extends PropertyAdjustmentDataByOneOf {
        /** Adjust by percentage. */
        percentage?: PercentageData;
        /** Adjust by amount. */
        amount?: number;
    }
    /** @oneof */
    interface PropertyAdjustmentDataByOneOf {
        /** Adjust by percentage. */
        percentage?: PercentageData;
        /** Adjust by amount. */
        amount?: number;
    }
    interface PercentageData {
        /**
         * If `true`, result will be rounded to the nearest whole number.
         * If `false`, result will be rounded to 2 places after the decimal point.
         */
        roundToInt?: boolean;
        /**
         * Percentage value, as a whole number (integer) between `-100` and `1000`.
         *
         * For example:
         * + Pass `100` to increase value by 100% (multiply original value by 2).
         * + Pass `1000` to increase value by 1000% (multiply original value by 10).
         * + Pass `-50` to decrease value by 50% (original value is halved).
         */
        rate?: number;
    }
    interface BulkAdjustProductPropertiesResponse {
        /** Bulk action results. */
        results?: BulkProductResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface BulkAdjustProductPropertiesByFilterSyncRequest {
        /** Filter object. Learn more about supported filters [here](https://bo.wix.com/wix-docs/rest/stores/stores-catalog/filter-and-sort). */
        filter: Record<string, any> | null;
        /** Numerical property to adjust. */
        adjust?: AdjustValue;
    }
    interface BulkAdjustProductPropertiesByFilterSyncResponse {
        /** Items updated by bulk action. */
        results?: BulkProductResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface ProductCreated {
        /** Product ID (generated automatically by the catalog). */
        productId?: string;
        /** Product name. */
        name?: string;
        /** Product price. */
        price?: PriceData;
        /** Whether the product is visible to customers. */
        visible?: boolean;
        /** Media items (images, videos, etc.) associated with this product. */
        media?: Media;
        /** Product stock keeping unit (SKU). If variants are being managed, this will be empty. */
        sku?: string;
        /** Product page URL for this product (generated automatically by the server). */
        productPageUrl?: PageUrl;
        /** Product brand. */
        brand?: string | null;
        /** Cost and profit data */
        costAndProfitData?: CostAndProfitData;
    }
    interface ProductChanged {
        /** Product ID. */
        productId?: string;
        /** List of product fields that were changed. */
        changedFields?: string[];
    }
    interface ProductDeleted {
        /** ID of the product that was deleted. */
        productId?: string;
    }
    interface CollectionCreated {
        /** Collection ID (generated automatically by the catalog). */
        collection_Id?: string;
        /** Collection name. */
        name?: string;
        /** Media items (images, videos, etc.) associated with this collection. */
        media?: Media;
        /** Collection slug */
        slug?: string;
        /** Collection visible status */
        visible?: boolean;
    }
    interface CollectionChanged {
        /** Collection ID (generated automatically by the catalog). */
        collection_Id?: string;
        /** List of collection fields that were changed. */
        changedFields?: string[];
    }
    interface CollectionDeleted {
        /** ID of the collection that was deleted. */
        collection_Id?: string;
    }
    interface VariantsChanged {
        /** Product ID. */
        productId?: string;
        /** List of variants that were changed. */
        variants?: VariantChanged[];
    }
    interface VariantChanged {
        /** Variant ID. */
        variantId?: string;
        choices?: Record<string, string>;
        /** List of variant fields that were changed. */
        changedFields?: string[];
    }
    interface QueryProductsRequest {
        query?: Query$3;
        /** Whether variants should be included in the response. */
        includeVariants?: boolean;
        /** Whether hidden products should be included in the response. Requires permissions to manage products. */
        includeHiddenProducts?: boolean;
        /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
        includeMerchantSpecificData?: boolean;
    }
    interface Query$3 {
        paging?: Paging$4;
        /** Filter string */
        filter?: string | null;
        /** Sort string */
        sort?: string | null;
    }
    interface Paging$4 {
        /** Amount of items to load per page */
        limit?: number | null;
        /** Number of items to skip in the display (relevant for all pages after the first) */
        offset?: number | null;
    }
    interface QueryProductsResponse {
        products?: Product[];
        metadata?: PagingMetadata$3;
        totalResults?: number;
    }
    interface PagingMetadata$3 {
        /** Amount of items to load per page */
        items?: number;
        /** Number of items to skip in the display (relevant for all pages after the first) */
        offset?: number;
    }
    interface QueryProductsPlatformizedRequest {
        query?: PlatformQuery;
    }
    interface PlatformQuery extends PlatformQueryPagingMethodOneOf {
        /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
        paging?: PlatformPaging;
        /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
        cursorPaging?: CursorPaging;
        /** Filter object. */
        filter?: Record<string, any> | null;
        /** Sorting options. For example, `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]`. */
        sort?: Sorting[];
    }
    /** @oneof */
    interface PlatformQueryPagingMethodOneOf {
        /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
        paging?: PlatformPaging;
        /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
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
    interface PlatformPaging {
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
    interface QueryProductsPlatformizedResponse {
        products?: Product[];
        metadata?: PlatformPagingMetadata;
    }
    interface PlatformPagingMetadata {
        /** The number of items returned in this response. */
        count?: number | null;
        /** The offset which was requested. Returned if offset paging was used. */
        offset?: number | null;
        /** The total number of items that match the query. Returned if offset paging was used. */
        total?: number | null;
        /** Cursors to navigate through result pages. Returned if cursor paging was used. */
        cursors?: Cursors;
    }
    interface Cursors {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface QueryProductsWithBigPageLimitRequest {
        query?: QueryWithBigPageLimit;
        /** Whether variants should be included in the response. */
        includeVariants?: boolean;
        /** Whether hidden products should be included in the response. Requires permissions to manage products. */
        includeHiddenProducts?: boolean;
        /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
        includeMerchantSpecificData?: boolean;
    }
    interface QueryWithBigPageLimit {
        paging?: PagingWithBigLimit;
        /** Filter string */
        filter?: string | null;
        /** Sort string */
        sort?: string | null;
    }
    interface PagingWithBigLimit {
        /** Amount of items to load per page */
        limit?: number | null;
        /** Number of items to skip in the display (relevant for all pages after the first) */
        offset?: number | null;
    }
    interface GetProductsRequest {
        /** Requested product IDs. */
        ids?: string[];
    }
    interface GetProductsResponse {
        products?: Product[];
    }
    interface GetProductRequest {
        /** Requested product ID. */
        _id: string;
        /** Whether merchant specific data, such as cost and profit data, should be included in the response. Requires permissions to manage products. */
        includeMerchantSpecificData?: boolean;
    }
    interface GetProductResponse {
        /** Requested product data. */
        product?: Product;
    }
    interface GetProductPlatformizedRequest {
        /** Requested product ID. */
        _id: string;
        /** Whether merchant specific data, such as cost and profit data, should be included in the response. Requires permissions to manage products. */
        includeMerchantSpecificData?: boolean;
    }
    interface GetProductPlatformizedResponse {
        /** Requested product data. */
        product?: Product;
    }
    interface QueryCollectionsRequest {
        /** Query options. */
        query?: Query$3;
        /** Whether number of products should be included in the response. */
        includeNumberOfProducts?: boolean;
        /** Wether to include collection description in the response. When `false` is passed, `collection.description` will return null. */
        includeDescription?: boolean;
    }
    interface QueryCollectionsResponse {
        /** List of collections. */
        collections?: Collection[];
        /** Details on the paged set of results returned. */
        metadata?: PagingMetadata$3;
        /** Total number of results returned. */
        totalResults?: number;
    }
    interface QueryCollectionsPlatformizedRequest {
        query?: PlatformQuery;
    }
    interface QueryCollectionsPlatformizedResponse {
        collections?: Collection[];
        metadata?: PlatformPagingMetadata;
    }
    interface GetCollectionRequest {
        /** Requested collection ID. */
        _id: string;
        /**
         * Whether to return the `collection.numberOfProducts` field in the response.
         * Defaults to `false`, in which case the value of `collection.numberOfProducts` will be `0`.
         */
        includeNumberOfProducts?: boolean;
    }
    interface GetCollectionResponse {
        /** The requested collection. */
        collection?: Collection;
    }
    interface GetCollectionBySlugRequest {
        /** Slug of the collection to retrieve. */
        slug: string;
    }
    interface GetCollectionBySlugResponse {
        /** The requested collection. */
        collection?: Collection;
    }
    interface ProductOptionsAvailabilityRequest {
        /** Requested product ID. */
        _id: string;
        /** Array containing the selected options. For example, `["color": "Blue", "size": "Large"]`. */
        options?: Record<string, string>;
    }
    interface ProductOptionsAvailabilityResponse {
        /** Variant information, given that all the choices were provided. */
        selectedVariant?: VariantData;
        /** Information about media items (images, videos, etc.) associated with this choice. */
        media?: Media;
        /** Options information (color, size, etc.) for this product, with the inventory and visibility fields updated based on the provided choices. */
        productOptions?: ProductOption[];
        /** Whether all the selected choices result in a visible, in-stock variant. */
        availableForPurchase?: boolean;
    }
    interface VariantData {
        /** Variant price. */
        price?: PriceData;
        /**
         * Variant price data converted to currency provided in header.
         * @readonly
         */
        convertedPriceData?: PriceData;
        /** Variant weight. */
        weight?: number | null;
        /** Variant SKU (stock keeping unit). */
        sku?: string;
        /** Quantity currently in inventory (relevant only when tracking by inventory). */
        quantity?: number | null;
        /** Whether the product is currently in stock (relevant only when tracking manually). */
        inStock?: boolean;
        /** Whether the variant is visible to customers. */
        visible?: boolean;
    }
    interface QueryProductVariantsRequest {
        /** Requested product ID. */
        _id: string;
        /**
         * The specific choices available or chosen from within a selection (e.g., choosing the red Selection triggers the red Choice).
         * You may specify all the relevant choices for a specific variant, or only some of the options, which will return all corresponding variants (not relevant when passing variant IDs).
         */
        choices?: Record<string, string>;
        /** List of variant IDs (not relevant when passing choices). */
        variantIds?: string[];
        paging?: Paging$4;
        /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
        includeMerchantSpecificData?: boolean;
    }
    interface QueryProductVariantsResponse {
        /** List of variants based on the specified filters and sorting. */
        variants?: Variant[];
        metadata?: PagingMetadata$3;
        totalResults?: number;
    }
    interface QueryStoreVariantsRequest {
        /** Query options. */
        query?: PlatformQuery;
    }
    interface QueryStoreVariantsResponse {
        /** List of variants based on the specified filters and sorting. */
        variants?: StoreVariant[];
        /** Details on the paged set of results returned. */
        metadata?: PlatformPagingMetadata;
    }
    interface StoreVariant {
        /** Store variant ID. Comprised of the `productId` and the `variantId`, separated by a hyphen: {productId}.{variantId}. */
        _id?: string;
        /** Variant ID. */
        variantId?: string;
        /** Product ID. */
        productId?: string;
        /** Variant name. */
        variantName?: string;
        /** Product name. */
        productName?: string;
        /** Whether the variant is managed or represents a product. */
        managedVariant?: boolean;
        /** Variant SKU (stock keeping unit). */
        sku?: string;
        /** Variant inventory status. */
        stock?: VariantStock;
        /** The selected options of this variant. For example, `{"Color": "Blue", "Size": "Large"}`. */
        choices?: Record<string, string>;
        /** Collections that include this variant. */
        collectionIds?: string[];
        /**
         * Media items (images, videos) associated with this variant.
         * @readonly
         */
        media?: PlatformMedia;
        /** Preorder information. */
        preorderInfo?: PreorderInfo$1;
    }
    interface PlatformMedia extends PlatformMediaMediaOneOf {
        image?: string;
        video?: string;
    }
    /** @oneof */
    interface PlatformMediaMediaOneOf {
        image?: string;
        video?: string;
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
    interface PreorderInfo$1 {
        /** Whether the item is available for preorder. */
        enabled?: boolean;
        /** A message the buyer will see when the item is out of stock and preorder is enabled. */
        message?: string | null;
        /** Number of products that can be preordered after stock reaches zero. */
        limit?: number | null;
    }
    interface QueryStoreVariantsWithBigLimitRequest {
        /** Query options. */
        query?: UnlimitedPlatformQuery;
    }
    /**
     * Don't use it unless you have to and know what you do. Prefer PlatformQuery other than this.
     * It doesn't have max validation for limit but we still MUST have it so implement required validation in your code.
     */
    interface UnlimitedPlatformQuery extends UnlimitedPlatformQueryPagingMethodOneOf {
        /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
        paging?: UnlimitedPlatformPaging;
        /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
        cursorPaging?: UnlimitedPlatformCursorPaging;
        /** Filter object. */
        filter?: Record<string, any> | null;
        /** Sorting options. For example, `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]`. */
        sort?: Sorting[];
    }
    /** @oneof */
    interface UnlimitedPlatformQueryPagingMethodOneOf {
        /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
        paging?: UnlimitedPlatformPaging;
        /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
        cursorPaging?: UnlimitedPlatformCursorPaging;
    }
    /**
     * Don't use it unless you have to and know what you do. Prefer PlatformPaging or wix.common.Paging other than this.
     * It doesn't have max validation for limit but we still MUST have it so implement required validation in your code.
     */
    interface UnlimitedPlatformPaging {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    /**
     * Don't use it unless you have to and know what you do. Prefer PlatformCursorPaging or wix.common.CursorPaging other than this.
     * It doesn't have max validation for limit but we still MUST have it so implement required validation in your code.
     */
    interface UnlimitedPlatformCursorPaging {
        /**
         * The number of items to load.
         * Cursor token returned in the query response. To be used on the next query request, but not the first query request.
         */
        limit?: number | null;
        /** Cursor returned in last query response. Should not be provided on first page request */
        cursor?: string | null;
    }
    interface GetStoreVariantRequest {
        /** Store variant ID. Comprised of the `productId` and the `variantId`, separated by a hyphen. For example, `{productId}-{variantId}`. */
        _id: string;
    }
    interface GetStoreVariantResponse {
        /** The requested store variant. */
        variant?: StoreVariant;
    }
    interface QueryCustomFieldsRequest {
        /** Requested product ID. */
        _id?: string;
        /** Requested field names. */
        names?: string[];
    }
    interface QueryCustomFieldsResponse {
        customFields?: Record<string, any>;
    }
    interface BulkQueryCustomFieldsRequest {
        /** Filter string. */
        query?: Query$3;
        /** Requested field names. */
        names?: string[];
    }
    interface BulkQueryCustomFieldsResponse {
        /** ProductId to Custom Fields Map packed in container. */
        productIdToCustomFields?: Record<string, CustomFieldsContainer>;
        metadata?: PagingMetadata$3;
        totalResults?: number;
    }
    interface CustomFieldsContainer {
        customFields?: Record<string, any>;
    }
    interface AggregateProductsRequest {
        /** Filter applied to original data */
        filter?: Record<string, any> | null;
        /** This is an object defining aggregation itself */
        aggregation: Record<string, any> | null;
        /** Whether hidden products should be considered. Requires permissions to manage products. */
        includeHiddenProducts?: boolean;
        /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
        includeMerchantSpecificData?: boolean;
    }
    interface AggregateProductsResponse {
        aggregates?: Record<string, any> | null;
    }
    /**
     * Creates a new product.
     *
     * This function is not a universal function and runs only on the backend.
     * @param product - Product information.
     * @public
     * @documentationMaturity preview
     * @requiredField product
     * @requiredField product.costAndProfitData.itemCost
     * @requiredField product.name
     * @requiredField product.priceData
     * @requiredField product.priceData.price
     * @adminMethod
     */
    function createProduct(product: Product): Promise<CreateProductResponse>;
    /**
     * Creates a new product.
     *
     * This function is not a universal function and runs only on the backend.
     * @param product - Product information.
     * @public
     * @documentationMaturity preview
     * @requiredField product
     * @requiredField product.costAndProfitData.itemCost
     * @requiredField product.name
     * @requiredField product.priceData
     * @requiredField product.priceData.price
     * @adminMethod
     */
    function createProductPlatformized(product: Product): Promise<Product>;
    /**
     * Updates specified fields in a product.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Product ID (generated automatically by the catalog).
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField product
     * @param product - Product info to update.
     * @adminMethod
     */
    function updateProduct(_id: string, product: UpdateProduct): Promise<UpdateProductResponse>;
    interface UpdateProduct {
        /**
         * Product ID (generated automatically by the catalog).
         * @readonly
         */
        _id?: string;
        /**
         * Product name.
         *
         * Min: 1 character
         * Max: 80 characters
         */
        name?: string | null;
        /** A friendly URL name (generated automatically by the catalog when a product is created), can be updated. */
        slug?: string;
        /** Whether the product is visible to site visitors. */
        visible?: boolean | null;
        /** Currently, only creating physical products ( `"productType": "physical"` ) is supported via the API. */
        productType?: ProductType;
        /** Product description. */
        description?: string | null;
        /** Stock keeping unit. If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, SKUs will be set per variant, and this field will be empty. */
        sku?: string | null;
        /** Product weight. If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, weight will be set per variant, and this field will be empty. */
        weight?: number | null;
        /**
         * Product weight range. The minimum and maximum weights of all the variants.
         * @readonly
         */
        weightRange?: NumericPropertyRange;
        /**
         * Product inventory status (in future this will be writable via Inventory API).
         * @readonly
         */
        stock?: Stock;
        /**
         * Deprecated (use `priceData` instead).
         * @readonly
         */
        price?: PriceData;
        /** Price data. */
        priceData?: PriceData;
        /**
         * Price data, converted to the currency specified in request header.
         * @readonly
         */
        convertedPriceData?: PriceData;
        /**
         * Product price range. The minimum and maximum prices of all the variants.
         * @readonly
         */
        priceRange?: NumericPropertyRange;
        /** Cost and profit data. */
        costAndProfitData?: CostAndProfitData;
        /**
         * Product cost range. The minimum and maximum costs of all the variants.
         * @readonly
         */
        costRange?: NumericPropertyRange;
        /** Price per unit data. */
        pricePerUnitData?: PricePerUnitData;
        /** Additional text that the store owner can assign to the product (e.g. shipping details, refund policy, etc.). */
        additionalInfoSections?: AdditionalInfoSection[];
        /**
         * Deprecated (use `ribbon` instead).
         * @readonly
         */
        ribbons?: Ribbon[];
        /**
         * Media items (images, videos etc) associated with this product (writable via [Add Product Media](https://dev.wix.com/api/rest/wix-stores/catalog/products/add-product-media) endpoint).
         * @readonly
         */
        media?: Media;
        /**
         * Text box for the customer to add a message to their order (e.g., customization request). Currently writable only from the UI.
         * @readonly
         */
        customTextFields?: CustomTextField[];
        /** Whether variants are being managed for this product - enables unique SKU, price and weight per variant. Also affects inventory data. Once set to `true`, can be reset to `false` only if no variants exist. You cannot set `manageVariants` to `true` if more than 300 variants are defined. */
        manageVariants?: boolean | null;
        /** Options for this product. */
        productOptions?: ProductOption[];
        /**
         * Product page URL for this product (generated automatically by the server).
         * @readonly
         */
        productPageUrl?: PageUrl;
        /**
         * Product’s unique numeric ID (assigned in ascending order).
         * Primarily used for sorting and filtering when crawling all products.
         * @readonly
         */
        numericId?: string;
        /**
         * Inventory item ID - ID referencing the inventory system.
         * @readonly
         */
        inventoryItemId?: string;
        /** Discount deducted from the product's original price. */
        discount?: Discount$2;
        /**
         * A list of all collection IDs that this product is included in (writable via the Catalog > Collection APIs).
         * @readonly
         */
        collectionIds?: string[];
        /**
         * Product variants, will be provided if the the request was sent with the includeVariants flag.
         * @readonly
         */
        variants?: Variant[];
        /**
         * Date and time the product was last updated.
         * @readonly
         */
        lastUpdated?: Date;
        /**
         * Date and time the product was created.
         * @readonly
         */
        _createdDate?: Date;
        /** Custom SEO data for the product. */
        seoData?: SeoSchema;
        /** Product ribbon. Used to highlight relevant information about a product. For example, "Sale", "New Arrival", "Sold Out". */
        ribbon?: string | null;
        /** Product brand. Including a brand name can help improve site and product [visibility on search engines](https://support.wix.com/en/article/adding-brand-names-to-boost-product-page-seo-in-wix-stores). */
        brand?: string | null;
    }
    /**
     * Updates specified fields in a product.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Product ID (generated automatically by the catalog).
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField product
     * @adminMethod
     */
    function updateProductPlatformized(_id: string, product: UpdateProductPlatformizedProduct): Promise<Product>;
    interface UpdateProductPlatformizedProduct {
        /**
         * Product ID (generated automatically by the catalog).
         * @readonly
         */
        _id?: string;
        /**
         * Product name.
         *
         * Min: 1 character
         * Max: 80 characters
         */
        name?: string | null;
        /** A friendly URL name (generated automatically by the catalog when a product is created), can be updated. */
        slug?: string;
        /** Whether the product is visible to site visitors. */
        visible?: boolean | null;
        /** Currently, only creating physical products ( `"productType": "physical"` ) is supported via the API. */
        productType?: ProductType;
        /** Product description. */
        description?: string | null;
        /** Stock keeping unit. If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, SKUs will be set per variant, and this field will be empty. */
        sku?: string | null;
        /** Product weight. If [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is enabled, weight will be set per variant, and this field will be empty. */
        weight?: number | null;
        /**
         * Product weight range. The minimum and maximum weights of all the variants.
         * @readonly
         */
        weightRange?: NumericPropertyRange;
        /**
         * Product inventory status (in future this will be writable via Inventory API).
         * @readonly
         */
        stock?: Stock;
        /**
         * Deprecated (use `priceData` instead).
         * @readonly
         */
        price?: PriceData;
        /** Price data. */
        priceData?: PriceData;
        /**
         * Price data, converted to the currency specified in request header.
         * @readonly
         */
        convertedPriceData?: PriceData;
        /**
         * Product price range. The minimum and maximum prices of all the variants.
         * @readonly
         */
        priceRange?: NumericPropertyRange;
        /** Cost and profit data. */
        costAndProfitData?: CostAndProfitData;
        /**
         * Product cost range. The minimum and maximum costs of all the variants.
         * @readonly
         */
        costRange?: NumericPropertyRange;
        /** Price per unit data. */
        pricePerUnitData?: PricePerUnitData;
        /** Additional text that the store owner can assign to the product (e.g. shipping details, refund policy, etc.). */
        additionalInfoSections?: AdditionalInfoSection[];
        /**
         * Deprecated (use `ribbon` instead).
         * @readonly
         */
        ribbons?: Ribbon[];
        /**
         * Media items (images, videos etc) associated with this product (writable via [Add Product Media](https://dev.wix.com/api/rest/wix-stores/catalog/products/add-product-media) endpoint).
         * @readonly
         */
        media?: Media;
        /**
         * Text box for the customer to add a message to their order (e.g., customization request). Currently writable only from the UI.
         * @readonly
         */
        customTextFields?: CustomTextField[];
        /** Whether variants are being managed for this product - enables unique SKU, price and weight per variant. Also affects inventory data. Once set to `true`, can be reset to `false` only if no variants exist. You cannot set `manageVariants` to `true` if more than 300 variants are defined. */
        manageVariants?: boolean | null;
        /** Options for this product. */
        productOptions?: ProductOption[];
        /**
         * Product page URL for this product (generated automatically by the server).
         * @readonly
         */
        productPageUrl?: PageUrl;
        /**
         * Product’s unique numeric ID (assigned in ascending order).
         * Primarily used for sorting and filtering when crawling all products.
         * @readonly
         */
        numericId?: string;
        /**
         * Inventory item ID - ID referencing the inventory system.
         * @readonly
         */
        inventoryItemId?: string;
        /** Discount deducted from the product's original price. */
        discount?: Discount$2;
        /**
         * A list of all collection IDs that this product is included in (writable via the Catalog > Collection APIs).
         * @readonly
         */
        collectionIds?: string[];
        /**
         * Product variants, will be provided if the the request was sent with the includeVariants flag.
         * @readonly
         */
        variants?: Variant[];
        /**
         * Date and time the product was last updated.
         * @readonly
         */
        lastUpdated?: Date;
        /**
         * Date and time the product was created.
         * @readonly
         */
        _createdDate?: Date;
        /** Custom SEO data for the product. */
        seoData?: SeoSchema;
        /** Product ribbon. Used to highlight relevant information about a product. For example, "Sale", "New Arrival", "Sold Out". */
        ribbon?: string | null;
        /** Product brand. Including a brand name can help improve site and product [visibility on search engines](https://support.wix.com/en/article/adding-brand-names-to-boost-product-page-seo-in-wix-stores). */
        brand?: string | null;
    }
    /**
     * Deletes a product.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the product to delete.
     * @public
     * @requiredField _id
     * @adminMethod
     */
    function deleteProduct(_id: string): Promise<void>;
    /**
     * Deletes a product.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the product to delete.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @adminMethod
     */
    function deleteProductPlatformized(_id: string): Promise<void>;
    /**
     * Updates variants of a specified product.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the product with managed variants.
     * @param variants - Variant info to update.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField variants
     * @adminMethod
     */
    function updateProductVariants(_id: string, variants: VariantOverride[]): Promise<UpdateVariantsResponse>;
    /**
     * Resets the data (such as the price and the weight) of all variants for a given product to their default values.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Product ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @adminMethod
     */
    function resetAllProductVariantData(_id: string): Promise<void>;
    /**
     * Adds products to a specified collection.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Collection ID.
     * @param productIds - IDs of the products to add to the collection, separated by commas.
     * @public
     * @requiredField _id
     * @requiredField productIds
     * @adminMethod
     */
    function addProductsToCollection(_id: string, productIds: string[]): Promise<void>;
    /**
     * Deletes products from a specified collection.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the collection from which to remove products.
     * @param productIds - IDs of the products to remove from the collection.
     * @public
     * @requiredField _id
     * @requiredField productIds
     * @adminMethod
     */
    function removeProductsFromCollection(_id: string, productIds: string[]): Promise<void>;
    /**
     * Adds media items to a specified product, either via URL or existing media ID.
     *
     * > **NOTE:** The URL is not validated and no event is triggered to indicate if the media was added successfully.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Product ID.
     * @param media - Sources of media items already uploaded to the Wix site.
     * @public
     * @requiredField _id
     * @requiredField media
     * @adminMethod
     */
    function addProductMedia(_id: string, media: MediaDataForWrite[]): Promise<void>;
    /**
     * Removes specified media items from a product.
     * Pass an empty array to remove all media items.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Product ID.
     * @param mediaIds - List of media IDs to remove. Pass an empty array to delete all media items for the product.
     * @public
     * @requiredField _id
     * @requiredField mediaIds
     * @adminMethod
     */
    function removeProductMedia(_id: string, mediaIds: string[]): Promise<void>;
    /**
     * Links media items that are already associated with a specific product to a choice within the same product.
     *
     * Media items can only be set for choices within one option at a time - e.g., if you set media items for some or all of the choices within the Colors option (blue, green, and red), you won't be able to also assign media items to choices within the Size option (S, M, and L).
     *
     * To remove all existing media items, call the [Remove Product Media From Choices](https://dev.wix.com/api/rest/wix-stores/catalog/products/remove-product-media-from-choices) endpoint.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Product ID.
     * @param media - Product media items and the choices to add the media to.
     * @public
     * @requiredField _id
     * @requiredField media
     * @requiredField media.choice
     * @requiredField media.option
     * @adminMethod
     */
    function addProductMediaToChoices(_id: string, media: MediaAssignmentToChoice[]): Promise<void>;
    /**
     * Removes media items from all or some of a product's choices.
     * (Media items can only be set for choices within one option at a time - e.g., if you set media items for some or all of the choices within the Colors option (blue, green, and red), you won't be able to also assign media items to choices within the Size option (S, M, and L).)
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Product ID from whose choices to remove media items.
     * @param media - Media to remove from choices. If an empty array is passed, all media will be removed from all choices for the given product.
     * @public
     * @requiredField _id
     * @requiredField media
     * @adminMethod
     */
    function removeProductMediaFromChoices(_id: string, media: MediaAssignmentToChoice[]): Promise<void>;
    /**
     * Delete all options from a specific product. Only available when [variant management](https://support.wix.com/en/article/wix-stores-adding-and-customizing-product-options#setting-different-prices-for-variants) is disabled.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the product with options to delete.
     * @public
     * @requiredField _id
     * @adminMethod
     */
    function deleteProductOptions(_id: string): Promise<void>;
    interface SetCustomFieldsOptions {
        /** Custom field that will be added, if a custom field with the same name already exists, the value of the custom field will be overridden. */
        customFields?: Record<string, any>;
    }
    interface RemoveCustomFieldsOptions {
        /** Custom fields to be removed (by name). */
        names?: string[];
    }
    /**
     * Deletes a product's brand.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Product ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @adminMethod
     */
    function removeBrand(_id: string): Promise<void>;
    interface BulkSetCustomFieldsOptions {
        /** Filter string. */
        filter?: string | null;
        /** Custom field that will be added, if a custom field with same name already exists, the value of the custom field will be overridden. */
        customFields?: Record<string, any>;
    }
    interface BulkRemoveCustomFieldsOptions {
        /** Filter string. */
        filter?: string | null;
        /** Custom fields names. */
        names?: string[];
    }
    /**
     * Creates a new collection.
     *
     * This function is not a universal function and runs only on the backend.
     * @param collection - Collection info.
     * @public
     * @documentationMaturity preview
     * @requiredField collection
     * @requiredField collection.name
     * @adminMethod
     */
    function createCollection(collection: Collection): Promise<CreateCollectionResponse>;
    /**
     * Updates specified properties of a collection. To add products to a collection, call the [addProductsToCollection](#addproductstocollection) function.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Collection ID (generated automatically by the catalog).
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField collection
     * @param collection - Collection info to update.
     * @adminMethod
     */
    function updateCollection(_id: string | null, collection: UpdateCollection): Promise<UpdateCollectionResponse>;
    interface UpdateCollection {
        /**
         * Collection ID (generated automatically by the catalog).
         * @readonly
         */
        _id?: string | null;
        /** Collection name. */
        name?: string | null;
        /**
         * Media items (images, videos etc) associated with this collection. Read only.
         * @readonly
         */
        media?: Media;
        /**
         * Number of products in the collection. Read only.
         * @readonly
         */
        numberOfProducts?: number;
        /** Collection description. */
        description?: string | null;
        /** Collection slug. */
        slug?: string | null;
        /** Collection visibility. Only impacts dynamic pages, no impact on static pages. Default: `true`. */
        visible?: boolean | null;
    }
    /**
     * Deletes a collection.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @param _id - ID of the collection to delete.
     * @adminMethod
     */
    function deleteCollection(_id: string): Promise<void>;
    /**
     * Deletes a product's ribbon.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Product ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @adminMethod
     */
    function removeRibbon(_id: string): Promise<void>;
    /**
     * Updates a specified property for up to 100 products at a time.
     *
     * This function is not a universal function and runs only on the backend.
     * @param ids - Product IDs.
     * @param set - Field to update.
     * @public
     * @documentationMaturity preview
     * @requiredField ids
     * @requiredField set
     * @adminMethod
     */
    function bulkUpdateProductsProperty(ids: string[], set: SetValue): Promise<BulkUpdateProductsResponse>;
    interface BulkUpdateProductsByFilterSyncOptions {
        /** The field to update. */
        set?: SetValue;
    }
    /**
     * Adjusts a specified numerical property for up to 100 products at a time.
     * The property can be increased or decreased either by percentage or amount.
     *
     * This function is not a universal function and runs only on the backend.
     * @param adjust - Numerical property to adjust.
     * @param ids - Product IDs.
     * @public
     * @documentationMaturity preview
     * @requiredField adjust
     * @requiredField ids
     * @adminMethod
     */
    function bulkAdjustProductProperty(adjust: AdjustValue, ids: string[]): Promise<BulkAdjustProductPropertiesResponse>;
    interface BulkAdjustProductPropertiesByFilterSyncOptions {
        /** Numerical property to adjust. */
        adjust?: AdjustValue;
    }
    interface QueryProductsNonPlatformizedOptions {
        query?: Query$3;
        /** Whether variants should be included in the response. */
        includeVariants?: boolean;
        /** Whether hidden products should be included in the response. Requires permissions to manage products. */
        includeHiddenProducts?: boolean;
        /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
        includeMerchantSpecificData?: boolean;
    }
    /**
     * Returns a list of up to 100 products, given the provided paging, sorting and filtering.
     * @public
     * @documentationMaturity preview
     */
    function queryProducts(): ProductsQueryBuilder;
    interface QueryOffsetResult {
        currentPage: number;
        totalPages: number;
        totalCount: number;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface ProductsQueryResult extends QueryOffsetResult {
        items: Product[];
        query: ProductsQueryBuilder;
        next: () => Promise<ProductsQueryResult>;
        prev: () => Promise<ProductsQueryResult>;
    }
    interface ProductsQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "_id" | "name" | "slug" | "productType" | "description" | "sku" | "price" | "priceData.price" | "numericId" | "collectionIds" | "lastUpdated" | "_createdDate", value: any) => ProductsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "name" | "slug" | "productType" | "description" | "sku" | "price" | "priceData.price" | "numericId" | "collectionIds" | "lastUpdated" | "_createdDate", value: any) => ProductsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ge: (propertyName: "priceData.price" | "numericId", value: any) => ProductsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "priceData.price" | "numericId" | "lastUpdated" | "_createdDate", value: any) => ProductsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: "priceData.price" | "numericId", value: any) => ProductsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "priceData.price" | "numericId" | "lastUpdated" | "_createdDate", value: any) => ProductsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: "_id" | "name" | "slug" | "description" | "sku", value: string) => ProductsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasSome: (propertyName: "_id" | "name" | "slug" | "productType" | "description" | "sku" | "price" | "priceData.price" | "numericId" | "collectionIds" | "lastUpdated" | "_createdDate", value: any[]) => ProductsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasAll: (propertyName: "collectionIds", value: any[]) => ProductsQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "_id" | "name" | "slug" | "productType" | "description" | "sku" | "price" | "priceData.price" | "numericId" | "collectionIds" | "lastUpdated" | "_createdDate", value: any) => ProductsQueryBuilder;
        /** @documentationMaturity preview */
        exists: (propertyName: "_id" | "name" | "slug" | "productType" | "description" | "sku" | "price" | "priceData.price" | "numericId" | "collectionIds" | "lastUpdated" | "_createdDate", value: boolean) => ProductsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"_id" | "name" | "slug" | "productType" | "sku" | "price" | "priceData.price" | "numericId" | "lastUpdated">) => ProductsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"_id" | "name" | "slug" | "productType" | "sku" | "price" | "priceData.price" | "numericId" | "lastUpdated">) => ProductsQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => ProductsQueryBuilder;
        /** @param skip - Number of items to skip in the query results before returning the results.
         * @documentationMaturity preview
         */
        skip: (skip: number) => ProductsQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<ProductsQueryResult>;
    }
    interface QueryProductsWithBigPageLimitOptions {
        query?: QueryWithBigPageLimit;
        /** Whether variants should be included in the response. */
        includeVariants?: boolean;
        /** Whether hidden products should be included in the response. Requires permissions to manage products. */
        includeHiddenProducts?: boolean;
        /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
        includeMerchantSpecificData?: boolean;
    }
    /**
     * Retrieves a product with the provided ID.
     * @param _id - Requested product ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     */
    function getProduct(_id: string, options?: GetProductOptions): Promise<GetProductResponse>;
    interface GetProductOptions {
        /** Whether merchant specific data, such as cost and profit data, should be included in the response. Requires permissions to manage products. */
        includeMerchantSpecificData?: boolean;
    }
    /**
     * Retrieves a product with the provided ID.
     * @param _id - Requested product ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @returns Requested product data.
     */
    function getProductPlatformized(_id: string, options?: GetProductPlatformizedOptions): Promise<Product>;
    interface GetProductPlatformizedOptions {
        /** Whether merchant specific data, such as cost and profit data, should be included in the response. Requires permissions to manage products. */
        includeMerchantSpecificData?: boolean;
    }
    interface QueryCollectionsOptions {
        /** Query options. */
        query?: Query$3;
        /** Whether number of products should be included in the response. */
        includeNumberOfProducts?: boolean;
        /** Wether to include collection description in the response. When `false` is passed, `collection.description` will return null. */
        includeDescription?: boolean;
    }
    interface GetCollectionOptions {
        /**
         * Whether to return the `collection.numberOfProducts` field in the response.
         * Defaults to `false`, in which case the value of `collection.numberOfProducts` will be `0`.
         */
        includeNumberOfProducts?: boolean;
    }
    /**
     * Retrieves a collection with the provided slug.
     * @param slug - Slug of the collection to retrieve.
     * @public
     * @requiredField slug
     */
    function getCollectionBySlug(slug: string): Promise<GetCollectionBySlugResponse>;
    /**
     * Gets the availability of relevant product variants based on the product ID and selections provided. See [Use Cases](https://dev.wix.com/api/rest/wix-stores/catalog/use-cases) for an example.
     * @param _id - Requested product ID.
     * @param options - Array containing the selected options. For example, `["color": "Blue", "size": "Large"]`.
     * @public
     * @requiredField _id
     * @requiredField options
     */
    function getProductOptionsAvailability(_id: string, options: Record<string, string>): Promise<ProductOptionsAvailabilityResponse>;
    /**
     * Retrieves product variants, based on either choices (option-choice key-value pairs) or variant IDs.
     * See [Stores Pagination](https://dev.wix.com/api/rest/wix-stores/pagination) for more information.
     * @param _id - Requested product ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     */
    function queryProductVariants(_id: string, options?: QueryProductVariantsOptions): Promise<QueryProductVariantsResponse>;
    interface QueryProductVariantsOptions {
        /**
         * The specific choices available or chosen from within a selection (e.g., choosing the red Selection triggers the red Choice).
         * You may specify all the relevant choices for a specific variant, or only some of the options, which will return all corresponding variants (not relevant when passing variant IDs).
         */
        choices?: Record<string, string>;
        /** List of variant IDs (not relevant when passing choices). */
        variantIds?: string[];
        paging?: Paging$4;
        /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
        includeMerchantSpecificData?: boolean;
    }
    /**
     * Retrieves up to 100 store variants, given the provided paging, filtering, and sorting.
     * @param query - Query options.
     * @public
     * @documentationMaturity preview
     * @requiredField query
     */
    function queryStoreVariants(query: PlatformQuery, options?: QueryStoreVariantsOptions): Promise<QueryStoreVariantsResponse>;
    interface QueryStoreVariantsOptions {
    }
    interface QueryStoreVariantsWithBigLimitOptions {
        /** Query options. */
        query?: UnlimitedPlatformQuery;
    }
    /**
     * Retrieves a store variant with the provided ID.
     * @param _id - Store variant ID. Comprised of the `productId` and the `variantId`, separated by a hyphen. For example, `{productId}-{variantId}`.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     */
    function getStoreVariant(_id: string): Promise<GetStoreVariantResponse>;
    interface AggregateProductsOptions {
        /** Filter applied to original data */
        filter?: Record<string, any> | null;
        /** This is an object defining aggregation itself */
        aggregation: Record<string, any> | null;
        /** Whether hidden products should be considered. Requires permissions to manage products. */
        includeHiddenProducts?: boolean;
        /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
        includeMerchantSpecificData?: boolean;
    }
    type storesCatalogV1Product_universal_d_Product = Product;
    type storesCatalogV1Product_universal_d_ProductType = ProductType;
    const storesCatalogV1Product_universal_d_ProductType: typeof ProductType;
    type storesCatalogV1Product_universal_d_NumericPropertyRange = NumericPropertyRange;
    type storesCatalogV1Product_universal_d_Stock = Stock;
    type storesCatalogV1Product_universal_d_InventoryStatus = InventoryStatus;
    const storesCatalogV1Product_universal_d_InventoryStatus: typeof InventoryStatus;
    type storesCatalogV1Product_universal_d_PriceData = PriceData;
    type storesCatalogV1Product_universal_d_FormattedPrice = FormattedPrice;
    type storesCatalogV1Product_universal_d_CostAndProfitData = CostAndProfitData;
    type storesCatalogV1Product_universal_d_PricePerUnitData = PricePerUnitData;
    type storesCatalogV1Product_universal_d_MeasurementUnit = MeasurementUnit;
    const storesCatalogV1Product_universal_d_MeasurementUnit: typeof MeasurementUnit;
    type storesCatalogV1Product_universal_d_AdditionalInfoSection = AdditionalInfoSection;
    type storesCatalogV1Product_universal_d_Ribbon = Ribbon;
    type storesCatalogV1Product_universal_d_Media = Media;
    type storesCatalogV1Product_universal_d_MediaItemItemOneOf = MediaItemItemOneOf;
    type storesCatalogV1Product_universal_d_MediaItemUrlAndSize = MediaItemUrlAndSize;
    type storesCatalogV1Product_universal_d_MediaItemVideo = MediaItemVideo;
    type storesCatalogV1Product_universal_d_CustomTextField = CustomTextField;
    type storesCatalogV1Product_universal_d_ProductOption = ProductOption;
    type storesCatalogV1Product_universal_d_OptionType = OptionType;
    const storesCatalogV1Product_universal_d_OptionType: typeof OptionType;
    type storesCatalogV1Product_universal_d_Choice = Choice;
    type storesCatalogV1Product_universal_d_PageUrl = PageUrl;
    type storesCatalogV1Product_universal_d_Variant = Variant;
    type storesCatalogV1Product_universal_d_VariantDataWithNoStock = VariantDataWithNoStock;
    type storesCatalogV1Product_universal_d_VariantStock = VariantStock;
    type storesCatalogV1Product_universal_d_SeoSchema = SeoSchema;
    type storesCatalogV1Product_universal_d_Keyword = Keyword;
    type storesCatalogV1Product_universal_d_Tag = Tag;
    type storesCatalogV1Product_universal_d_Settings = Settings;
    type storesCatalogV1Product_universal_d_CreateProductRequest = CreateProductRequest;
    type storesCatalogV1Product_universal_d_CreateProductResponse = CreateProductResponse;
    type storesCatalogV1Product_universal_d_CreateProductPlatformizedRequest = CreateProductPlatformizedRequest;
    type storesCatalogV1Product_universal_d_CreateProductPlatformizedResponse = CreateProductPlatformizedResponse;
    type storesCatalogV1Product_universal_d_UpdateProductRequest = UpdateProductRequest;
    type storesCatalogV1Product_universal_d_UpdateProductResponse = UpdateProductResponse;
    type storesCatalogV1Product_universal_d_UpdateProductPlatformizedRequest = UpdateProductPlatformizedRequest;
    type storesCatalogV1Product_universal_d_UpdateProductPlatformizedResponse = UpdateProductPlatformizedResponse;
    type storesCatalogV1Product_universal_d_DeleteProductRequest = DeleteProductRequest;
    type storesCatalogV1Product_universal_d_DeleteProductResponse = DeleteProductResponse;
    type storesCatalogV1Product_universal_d_DeleteProductPlatformizedRequest = DeleteProductPlatformizedRequest;
    type storesCatalogV1Product_universal_d_DeleteProductPlatformizedResponse = DeleteProductPlatformizedResponse;
    type storesCatalogV1Product_universal_d_BulkDeleteProductsRequest = BulkDeleteProductsRequest;
    type storesCatalogV1Product_universal_d_BulkDeleteProductsResponse = BulkDeleteProductsResponse;
    type storesCatalogV1Product_universal_d_UpdateVariantsRequest = UpdateVariantsRequest;
    type storesCatalogV1Product_universal_d_VariantOverride = VariantOverride;
    type storesCatalogV1Product_universal_d_UpdateVariantsResponse = UpdateVariantsResponse;
    type storesCatalogV1Product_universal_d_ResetAllVariantDataRequest = ResetAllVariantDataRequest;
    type storesCatalogV1Product_universal_d_ResetAllVariantDataResponse = ResetAllVariantDataResponse;
    type storesCatalogV1Product_universal_d_AddProductsToCollectionRequest = AddProductsToCollectionRequest;
    type storesCatalogV1Product_universal_d_AddProductsToCollectionResponse = AddProductsToCollectionResponse;
    type storesCatalogV1Product_universal_d_RemoveProductsFromCollectionRequest = RemoveProductsFromCollectionRequest;
    type storesCatalogV1Product_universal_d_RemoveProductsFromCollectionResponse = RemoveProductsFromCollectionResponse;
    type storesCatalogV1Product_universal_d_AddProductMediaRequest = AddProductMediaRequest;
    type storesCatalogV1Product_universal_d_MediaDataForWrite = MediaDataForWrite;
    type storesCatalogV1Product_universal_d_MediaDataForWriteMediaSourceOneOf = MediaDataForWriteMediaSourceOneOf;
    type storesCatalogV1Product_universal_d_OptionAndChoice = OptionAndChoice;
    type storesCatalogV1Product_universal_d_AddProductMediaResponse = AddProductMediaResponse;
    type storesCatalogV1Product_universal_d_RemoveProductMediaRequest = RemoveProductMediaRequest;
    type storesCatalogV1Product_universal_d_RemoveProductMediaResponse = RemoveProductMediaResponse;
    type storesCatalogV1Product_universal_d_AddProductMediaToChoicesRequest = AddProductMediaToChoicesRequest;
    type storesCatalogV1Product_universal_d_MediaAssignmentToChoice = MediaAssignmentToChoice;
    type storesCatalogV1Product_universal_d_AddProductMediaToChoicesResponse = AddProductMediaToChoicesResponse;
    type storesCatalogV1Product_universal_d_RemoveProductMediaFromChoicesRequest = RemoveProductMediaFromChoicesRequest;
    type storesCatalogV1Product_universal_d_RemoveProductMediaFromChoicesResponse = RemoveProductMediaFromChoicesResponse;
    type storesCatalogV1Product_universal_d_DeleteProductOptionsRequest = DeleteProductOptionsRequest;
    type storesCatalogV1Product_universal_d_DeleteProductOptionsResponse = DeleteProductOptionsResponse;
    type storesCatalogV1Product_universal_d_SetCustomFieldsRequest = SetCustomFieldsRequest;
    type storesCatalogV1Product_universal_d_SetCustomFieldsResponse = SetCustomFieldsResponse;
    type storesCatalogV1Product_universal_d_RemoveCustomFieldsRequest = RemoveCustomFieldsRequest;
    type storesCatalogV1Product_universal_d_RemoveCustomFieldsResponse = RemoveCustomFieldsResponse;
    type storesCatalogV1Product_universal_d_RemoveProductBrandRequest = RemoveProductBrandRequest;
    type storesCatalogV1Product_universal_d_RemoveProductBrandResponse = RemoveProductBrandResponse;
    type storesCatalogV1Product_universal_d_BulkSetCustomFieldsRequest = BulkSetCustomFieldsRequest;
    type storesCatalogV1Product_universal_d_BulkSetCustomFieldsResponse = BulkSetCustomFieldsResponse;
    type storesCatalogV1Product_universal_d_BulkRemoveCustomFieldsRequest = BulkRemoveCustomFieldsRequest;
    type storesCatalogV1Product_universal_d_BulkRemoveCustomFieldsResponse = BulkRemoveCustomFieldsResponse;
    type storesCatalogV1Product_universal_d_CreateCollectionRequest = CreateCollectionRequest;
    type storesCatalogV1Product_universal_d_Collection = Collection;
    type storesCatalogV1Product_universal_d_CreateCollectionResponse = CreateCollectionResponse;
    type storesCatalogV1Product_universal_d_UpdateCollectionRequest = UpdateCollectionRequest;
    type storesCatalogV1Product_universal_d_UpdateCollectionResponse = UpdateCollectionResponse;
    type storesCatalogV1Product_universal_d_DeleteCollectionRequest = DeleteCollectionRequest;
    type storesCatalogV1Product_universal_d_DeleteCollectionResponse = DeleteCollectionResponse;
    type storesCatalogV1Product_universal_d_RemoveProductRibbonRequest = RemoveProductRibbonRequest;
    type storesCatalogV1Product_universal_d_RemoveProductRibbonResponse = RemoveProductRibbonResponse;
    type storesCatalogV1Product_universal_d_BulkUpdateProductsRequest = BulkUpdateProductsRequest;
    type storesCatalogV1Product_universal_d_SetValue = SetValue;
    type storesCatalogV1Product_universal_d_SetValueValueOneOf = SetValueValueOneOf;
    type storesCatalogV1Product_universal_d_BulkUpdateProductsResponse = BulkUpdateProductsResponse;
    type storesCatalogV1Product_universal_d_BulkProductResult = BulkProductResult;
    type storesCatalogV1Product_universal_d_ItemMetadata = ItemMetadata;
    type storesCatalogV1Product_universal_d_ApplicationError = ApplicationError;
    type storesCatalogV1Product_universal_d_BulkActionMetadata = BulkActionMetadata;
    type storesCatalogV1Product_universal_d_BulkUpdateProductsByFilterSyncRequest = BulkUpdateProductsByFilterSyncRequest;
    type storesCatalogV1Product_universal_d_BulkUpdateProductsByFilterSyncResponse = BulkUpdateProductsByFilterSyncResponse;
    type storesCatalogV1Product_universal_d_AllowedProductsCountLimitExceededErrorData = AllowedProductsCountLimitExceededErrorData;
    type storesCatalogV1Product_universal_d_BulkAdjustProductPropertiesRequest = BulkAdjustProductPropertiesRequest;
    type storesCatalogV1Product_universal_d_AdjustValue = AdjustValue;
    type storesCatalogV1Product_universal_d_AdjustValueValueOneOf = AdjustValueValueOneOf;
    type storesCatalogV1Product_universal_d_PropertyAdjustmentData = PropertyAdjustmentData;
    type storesCatalogV1Product_universal_d_PropertyAdjustmentDataByOneOf = PropertyAdjustmentDataByOneOf;
    type storesCatalogV1Product_universal_d_PercentageData = PercentageData;
    type storesCatalogV1Product_universal_d_BulkAdjustProductPropertiesResponse = BulkAdjustProductPropertiesResponse;
    type storesCatalogV1Product_universal_d_BulkAdjustProductPropertiesByFilterSyncRequest = BulkAdjustProductPropertiesByFilterSyncRequest;
    type storesCatalogV1Product_universal_d_BulkAdjustProductPropertiesByFilterSyncResponse = BulkAdjustProductPropertiesByFilterSyncResponse;
    type storesCatalogV1Product_universal_d_ProductCreated = ProductCreated;
    type storesCatalogV1Product_universal_d_ProductChanged = ProductChanged;
    type storesCatalogV1Product_universal_d_ProductDeleted = ProductDeleted;
    type storesCatalogV1Product_universal_d_CollectionCreated = CollectionCreated;
    type storesCatalogV1Product_universal_d_CollectionChanged = CollectionChanged;
    type storesCatalogV1Product_universal_d_CollectionDeleted = CollectionDeleted;
    type storesCatalogV1Product_universal_d_VariantsChanged = VariantsChanged;
    type storesCatalogV1Product_universal_d_VariantChanged = VariantChanged;
    type storesCatalogV1Product_universal_d_QueryProductsRequest = QueryProductsRequest;
    type storesCatalogV1Product_universal_d_QueryProductsResponse = QueryProductsResponse;
    type storesCatalogV1Product_universal_d_QueryProductsPlatformizedRequest = QueryProductsPlatformizedRequest;
    type storesCatalogV1Product_universal_d_PlatformQuery = PlatformQuery;
    type storesCatalogV1Product_universal_d_PlatformQueryPagingMethodOneOf = PlatformQueryPagingMethodOneOf;
    type storesCatalogV1Product_universal_d_Sorting = Sorting;
    type storesCatalogV1Product_universal_d_SortOrder = SortOrder;
    const storesCatalogV1Product_universal_d_SortOrder: typeof SortOrder;
    type storesCatalogV1Product_universal_d_PlatformPaging = PlatformPaging;
    type storesCatalogV1Product_universal_d_CursorPaging = CursorPaging;
    type storesCatalogV1Product_universal_d_QueryProductsPlatformizedResponse = QueryProductsPlatformizedResponse;
    type storesCatalogV1Product_universal_d_PlatformPagingMetadata = PlatformPagingMetadata;
    type storesCatalogV1Product_universal_d_Cursors = Cursors;
    type storesCatalogV1Product_universal_d_QueryProductsWithBigPageLimitRequest = QueryProductsWithBigPageLimitRequest;
    type storesCatalogV1Product_universal_d_QueryWithBigPageLimit = QueryWithBigPageLimit;
    type storesCatalogV1Product_universal_d_PagingWithBigLimit = PagingWithBigLimit;
    type storesCatalogV1Product_universal_d_GetProductsRequest = GetProductsRequest;
    type storesCatalogV1Product_universal_d_GetProductsResponse = GetProductsResponse;
    type storesCatalogV1Product_universal_d_GetProductRequest = GetProductRequest;
    type storesCatalogV1Product_universal_d_GetProductResponse = GetProductResponse;
    type storesCatalogV1Product_universal_d_GetProductPlatformizedRequest = GetProductPlatformizedRequest;
    type storesCatalogV1Product_universal_d_GetProductPlatformizedResponse = GetProductPlatformizedResponse;
    type storesCatalogV1Product_universal_d_QueryCollectionsRequest = QueryCollectionsRequest;
    type storesCatalogV1Product_universal_d_QueryCollectionsResponse = QueryCollectionsResponse;
    type storesCatalogV1Product_universal_d_QueryCollectionsPlatformizedRequest = QueryCollectionsPlatformizedRequest;
    type storesCatalogV1Product_universal_d_QueryCollectionsPlatformizedResponse = QueryCollectionsPlatformizedResponse;
    type storesCatalogV1Product_universal_d_GetCollectionRequest = GetCollectionRequest;
    type storesCatalogV1Product_universal_d_GetCollectionResponse = GetCollectionResponse;
    type storesCatalogV1Product_universal_d_GetCollectionBySlugRequest = GetCollectionBySlugRequest;
    type storesCatalogV1Product_universal_d_GetCollectionBySlugResponse = GetCollectionBySlugResponse;
    type storesCatalogV1Product_universal_d_ProductOptionsAvailabilityRequest = ProductOptionsAvailabilityRequest;
    type storesCatalogV1Product_universal_d_ProductOptionsAvailabilityResponse = ProductOptionsAvailabilityResponse;
    type storesCatalogV1Product_universal_d_VariantData = VariantData;
    type storesCatalogV1Product_universal_d_QueryProductVariantsRequest = QueryProductVariantsRequest;
    type storesCatalogV1Product_universal_d_QueryProductVariantsResponse = QueryProductVariantsResponse;
    type storesCatalogV1Product_universal_d_QueryStoreVariantsRequest = QueryStoreVariantsRequest;
    type storesCatalogV1Product_universal_d_QueryStoreVariantsResponse = QueryStoreVariantsResponse;
    type storesCatalogV1Product_universal_d_StoreVariant = StoreVariant;
    type storesCatalogV1Product_universal_d_PlatformMedia = PlatformMedia;
    type storesCatalogV1Product_universal_d_PlatformMediaMediaOneOf = PlatformMediaMediaOneOf;
    type storesCatalogV1Product_universal_d_VideoResolution = VideoResolution;
    type storesCatalogV1Product_universal_d_QueryStoreVariantsWithBigLimitRequest = QueryStoreVariantsWithBigLimitRequest;
    type storesCatalogV1Product_universal_d_UnlimitedPlatformQuery = UnlimitedPlatformQuery;
    type storesCatalogV1Product_universal_d_UnlimitedPlatformQueryPagingMethodOneOf = UnlimitedPlatformQueryPagingMethodOneOf;
    type storesCatalogV1Product_universal_d_UnlimitedPlatformPaging = UnlimitedPlatformPaging;
    type storesCatalogV1Product_universal_d_UnlimitedPlatformCursorPaging = UnlimitedPlatformCursorPaging;
    type storesCatalogV1Product_universal_d_GetStoreVariantRequest = GetStoreVariantRequest;
    type storesCatalogV1Product_universal_d_GetStoreVariantResponse = GetStoreVariantResponse;
    type storesCatalogV1Product_universal_d_QueryCustomFieldsRequest = QueryCustomFieldsRequest;
    type storesCatalogV1Product_universal_d_QueryCustomFieldsResponse = QueryCustomFieldsResponse;
    type storesCatalogV1Product_universal_d_BulkQueryCustomFieldsRequest = BulkQueryCustomFieldsRequest;
    type storesCatalogV1Product_universal_d_BulkQueryCustomFieldsResponse = BulkQueryCustomFieldsResponse;
    type storesCatalogV1Product_universal_d_CustomFieldsContainer = CustomFieldsContainer;
    type storesCatalogV1Product_universal_d_AggregateProductsRequest = AggregateProductsRequest;
    type storesCatalogV1Product_universal_d_AggregateProductsResponse = AggregateProductsResponse;
    const storesCatalogV1Product_universal_d_createProduct: typeof createProduct;
    const storesCatalogV1Product_universal_d_createProductPlatformized: typeof createProductPlatformized;
    const storesCatalogV1Product_universal_d_updateProduct: typeof updateProduct;
    type storesCatalogV1Product_universal_d_UpdateProduct = UpdateProduct;
    const storesCatalogV1Product_universal_d_updateProductPlatformized: typeof updateProductPlatformized;
    type storesCatalogV1Product_universal_d_UpdateProductPlatformizedProduct = UpdateProductPlatformizedProduct;
    const storesCatalogV1Product_universal_d_deleteProduct: typeof deleteProduct;
    const storesCatalogV1Product_universal_d_deleteProductPlatformized: typeof deleteProductPlatformized;
    const storesCatalogV1Product_universal_d_updateProductVariants: typeof updateProductVariants;
    const storesCatalogV1Product_universal_d_resetAllProductVariantData: typeof resetAllProductVariantData;
    const storesCatalogV1Product_universal_d_addProductsToCollection: typeof addProductsToCollection;
    const storesCatalogV1Product_universal_d_removeProductsFromCollection: typeof removeProductsFromCollection;
    const storesCatalogV1Product_universal_d_addProductMedia: typeof addProductMedia;
    const storesCatalogV1Product_universal_d_removeProductMedia: typeof removeProductMedia;
    const storesCatalogV1Product_universal_d_addProductMediaToChoices: typeof addProductMediaToChoices;
    const storesCatalogV1Product_universal_d_removeProductMediaFromChoices: typeof removeProductMediaFromChoices;
    const storesCatalogV1Product_universal_d_deleteProductOptions: typeof deleteProductOptions;
    type storesCatalogV1Product_universal_d_SetCustomFieldsOptions = SetCustomFieldsOptions;
    type storesCatalogV1Product_universal_d_RemoveCustomFieldsOptions = RemoveCustomFieldsOptions;
    const storesCatalogV1Product_universal_d_removeBrand: typeof removeBrand;
    type storesCatalogV1Product_universal_d_BulkSetCustomFieldsOptions = BulkSetCustomFieldsOptions;
    type storesCatalogV1Product_universal_d_BulkRemoveCustomFieldsOptions = BulkRemoveCustomFieldsOptions;
    const storesCatalogV1Product_universal_d_createCollection: typeof createCollection;
    const storesCatalogV1Product_universal_d_updateCollection: typeof updateCollection;
    type storesCatalogV1Product_universal_d_UpdateCollection = UpdateCollection;
    const storesCatalogV1Product_universal_d_deleteCollection: typeof deleteCollection;
    const storesCatalogV1Product_universal_d_removeRibbon: typeof removeRibbon;
    const storesCatalogV1Product_universal_d_bulkUpdateProductsProperty: typeof bulkUpdateProductsProperty;
    type storesCatalogV1Product_universal_d_BulkUpdateProductsByFilterSyncOptions = BulkUpdateProductsByFilterSyncOptions;
    const storesCatalogV1Product_universal_d_bulkAdjustProductProperty: typeof bulkAdjustProductProperty;
    type storesCatalogV1Product_universal_d_BulkAdjustProductPropertiesByFilterSyncOptions = BulkAdjustProductPropertiesByFilterSyncOptions;
    type storesCatalogV1Product_universal_d_QueryProductsNonPlatformizedOptions = QueryProductsNonPlatformizedOptions;
    const storesCatalogV1Product_universal_d_queryProducts: typeof queryProducts;
    type storesCatalogV1Product_universal_d_ProductsQueryResult = ProductsQueryResult;
    type storesCatalogV1Product_universal_d_ProductsQueryBuilder = ProductsQueryBuilder;
    type storesCatalogV1Product_universal_d_QueryProductsWithBigPageLimitOptions = QueryProductsWithBigPageLimitOptions;
    const storesCatalogV1Product_universal_d_getProduct: typeof getProduct;
    type storesCatalogV1Product_universal_d_GetProductOptions = GetProductOptions;
    const storesCatalogV1Product_universal_d_getProductPlatformized: typeof getProductPlatformized;
    type storesCatalogV1Product_universal_d_GetProductPlatformizedOptions = GetProductPlatformizedOptions;
    type storesCatalogV1Product_universal_d_QueryCollectionsOptions = QueryCollectionsOptions;
    type storesCatalogV1Product_universal_d_GetCollectionOptions = GetCollectionOptions;
    const storesCatalogV1Product_universal_d_getCollectionBySlug: typeof getCollectionBySlug;
    const storesCatalogV1Product_universal_d_getProductOptionsAvailability: typeof getProductOptionsAvailability;
    const storesCatalogV1Product_universal_d_queryProductVariants: typeof queryProductVariants;
    type storesCatalogV1Product_universal_d_QueryProductVariantsOptions = QueryProductVariantsOptions;
    const storesCatalogV1Product_universal_d_queryStoreVariants: typeof queryStoreVariants;
    type storesCatalogV1Product_universal_d_QueryStoreVariantsOptions = QueryStoreVariantsOptions;
    type storesCatalogV1Product_universal_d_QueryStoreVariantsWithBigLimitOptions = QueryStoreVariantsWithBigLimitOptions;
    const storesCatalogV1Product_universal_d_getStoreVariant: typeof getStoreVariant;
    type storesCatalogV1Product_universal_d_AggregateProductsOptions = AggregateProductsOptions;
    namespace storesCatalogV1Product_universal_d {
        export { __debug$4 as __debug, storesCatalogV1Product_universal_d_Product as Product, storesCatalogV1Product_universal_d_ProductType as ProductType, storesCatalogV1Product_universal_d_NumericPropertyRange as NumericPropertyRange, storesCatalogV1Product_universal_d_Stock as Stock, storesCatalogV1Product_universal_d_InventoryStatus as InventoryStatus, storesCatalogV1Product_universal_d_PriceData as PriceData, storesCatalogV1Product_universal_d_FormattedPrice as FormattedPrice, storesCatalogV1Product_universal_d_CostAndProfitData as CostAndProfitData, storesCatalogV1Product_universal_d_PricePerUnitData as PricePerUnitData, storesCatalogV1Product_universal_d_MeasurementUnit as MeasurementUnit, storesCatalogV1Product_universal_d_AdditionalInfoSection as AdditionalInfoSection, storesCatalogV1Product_universal_d_Ribbon as Ribbon, storesCatalogV1Product_universal_d_Media as Media, MediaItem$1 as MediaItem, storesCatalogV1Product_universal_d_MediaItemItemOneOf as MediaItemItemOneOf, storesCatalogV1Product_universal_d_MediaItemUrlAndSize as MediaItemUrlAndSize, MediaItemType$1 as MediaItemType, storesCatalogV1Product_universal_d_MediaItemVideo as MediaItemVideo, storesCatalogV1Product_universal_d_CustomTextField as CustomTextField, storesCatalogV1Product_universal_d_ProductOption as ProductOption, storesCatalogV1Product_universal_d_OptionType as OptionType, storesCatalogV1Product_universal_d_Choice as Choice, storesCatalogV1Product_universal_d_PageUrl as PageUrl, Discount$2 as Discount, DiscountType$1 as DiscountType, storesCatalogV1Product_universal_d_Variant as Variant, storesCatalogV1Product_universal_d_VariantDataWithNoStock as VariantDataWithNoStock, storesCatalogV1Product_universal_d_VariantStock as VariantStock, storesCatalogV1Product_universal_d_SeoSchema as SeoSchema, storesCatalogV1Product_universal_d_Keyword as Keyword, storesCatalogV1Product_universal_d_Tag as Tag, storesCatalogV1Product_universal_d_Settings as Settings, storesCatalogV1Product_universal_d_CreateProductRequest as CreateProductRequest, storesCatalogV1Product_universal_d_CreateProductResponse as CreateProductResponse, storesCatalogV1Product_universal_d_CreateProductPlatformizedRequest as CreateProductPlatformizedRequest, storesCatalogV1Product_universal_d_CreateProductPlatformizedResponse as CreateProductPlatformizedResponse, storesCatalogV1Product_universal_d_UpdateProductRequest as UpdateProductRequest, storesCatalogV1Product_universal_d_UpdateProductResponse as UpdateProductResponse, storesCatalogV1Product_universal_d_UpdateProductPlatformizedRequest as UpdateProductPlatformizedRequest, storesCatalogV1Product_universal_d_UpdateProductPlatformizedResponse as UpdateProductPlatformizedResponse, storesCatalogV1Product_universal_d_DeleteProductRequest as DeleteProductRequest, storesCatalogV1Product_universal_d_DeleteProductResponse as DeleteProductResponse, storesCatalogV1Product_universal_d_DeleteProductPlatformizedRequest as DeleteProductPlatformizedRequest, storesCatalogV1Product_universal_d_DeleteProductPlatformizedResponse as DeleteProductPlatformizedResponse, storesCatalogV1Product_universal_d_BulkDeleteProductsRequest as BulkDeleteProductsRequest, storesCatalogV1Product_universal_d_BulkDeleteProductsResponse as BulkDeleteProductsResponse, storesCatalogV1Product_universal_d_UpdateVariantsRequest as UpdateVariantsRequest, storesCatalogV1Product_universal_d_VariantOverride as VariantOverride, storesCatalogV1Product_universal_d_UpdateVariantsResponse as UpdateVariantsResponse, storesCatalogV1Product_universal_d_ResetAllVariantDataRequest as ResetAllVariantDataRequest, storesCatalogV1Product_universal_d_ResetAllVariantDataResponse as ResetAllVariantDataResponse, storesCatalogV1Product_universal_d_AddProductsToCollectionRequest as AddProductsToCollectionRequest, storesCatalogV1Product_universal_d_AddProductsToCollectionResponse as AddProductsToCollectionResponse, storesCatalogV1Product_universal_d_RemoveProductsFromCollectionRequest as RemoveProductsFromCollectionRequest, storesCatalogV1Product_universal_d_RemoveProductsFromCollectionResponse as RemoveProductsFromCollectionResponse, storesCatalogV1Product_universal_d_AddProductMediaRequest as AddProductMediaRequest, storesCatalogV1Product_universal_d_MediaDataForWrite as MediaDataForWrite, storesCatalogV1Product_universal_d_MediaDataForWriteMediaSourceOneOf as MediaDataForWriteMediaSourceOneOf, storesCatalogV1Product_universal_d_OptionAndChoice as OptionAndChoice, storesCatalogV1Product_universal_d_AddProductMediaResponse as AddProductMediaResponse, storesCatalogV1Product_universal_d_RemoveProductMediaRequest as RemoveProductMediaRequest, storesCatalogV1Product_universal_d_RemoveProductMediaResponse as RemoveProductMediaResponse, storesCatalogV1Product_universal_d_AddProductMediaToChoicesRequest as AddProductMediaToChoicesRequest, storesCatalogV1Product_universal_d_MediaAssignmentToChoice as MediaAssignmentToChoice, storesCatalogV1Product_universal_d_AddProductMediaToChoicesResponse as AddProductMediaToChoicesResponse, storesCatalogV1Product_universal_d_RemoveProductMediaFromChoicesRequest as RemoveProductMediaFromChoicesRequest, storesCatalogV1Product_universal_d_RemoveProductMediaFromChoicesResponse as RemoveProductMediaFromChoicesResponse, storesCatalogV1Product_universal_d_DeleteProductOptionsRequest as DeleteProductOptionsRequest, storesCatalogV1Product_universal_d_DeleteProductOptionsResponse as DeleteProductOptionsResponse, storesCatalogV1Product_universal_d_SetCustomFieldsRequest as SetCustomFieldsRequest, storesCatalogV1Product_universal_d_SetCustomFieldsResponse as SetCustomFieldsResponse, storesCatalogV1Product_universal_d_RemoveCustomFieldsRequest as RemoveCustomFieldsRequest, storesCatalogV1Product_universal_d_RemoveCustomFieldsResponse as RemoveCustomFieldsResponse, storesCatalogV1Product_universal_d_RemoveProductBrandRequest as RemoveProductBrandRequest, storesCatalogV1Product_universal_d_RemoveProductBrandResponse as RemoveProductBrandResponse, storesCatalogV1Product_universal_d_BulkSetCustomFieldsRequest as BulkSetCustomFieldsRequest, storesCatalogV1Product_universal_d_BulkSetCustomFieldsResponse as BulkSetCustomFieldsResponse, storesCatalogV1Product_universal_d_BulkRemoveCustomFieldsRequest as BulkRemoveCustomFieldsRequest, storesCatalogV1Product_universal_d_BulkRemoveCustomFieldsResponse as BulkRemoveCustomFieldsResponse, storesCatalogV1Product_universal_d_CreateCollectionRequest as CreateCollectionRequest, storesCatalogV1Product_universal_d_Collection as Collection, storesCatalogV1Product_universal_d_CreateCollectionResponse as CreateCollectionResponse, storesCatalogV1Product_universal_d_UpdateCollectionRequest as UpdateCollectionRequest, storesCatalogV1Product_universal_d_UpdateCollectionResponse as UpdateCollectionResponse, storesCatalogV1Product_universal_d_DeleteCollectionRequest as DeleteCollectionRequest, storesCatalogV1Product_universal_d_DeleteCollectionResponse as DeleteCollectionResponse, storesCatalogV1Product_universal_d_RemoveProductRibbonRequest as RemoveProductRibbonRequest, storesCatalogV1Product_universal_d_RemoveProductRibbonResponse as RemoveProductRibbonResponse, storesCatalogV1Product_universal_d_BulkUpdateProductsRequest as BulkUpdateProductsRequest, storesCatalogV1Product_universal_d_SetValue as SetValue, storesCatalogV1Product_universal_d_SetValueValueOneOf as SetValueValueOneOf, storesCatalogV1Product_universal_d_BulkUpdateProductsResponse as BulkUpdateProductsResponse, storesCatalogV1Product_universal_d_BulkProductResult as BulkProductResult, storesCatalogV1Product_universal_d_ItemMetadata as ItemMetadata, storesCatalogV1Product_universal_d_ApplicationError as ApplicationError, storesCatalogV1Product_universal_d_BulkActionMetadata as BulkActionMetadata, storesCatalogV1Product_universal_d_BulkUpdateProductsByFilterSyncRequest as BulkUpdateProductsByFilterSyncRequest, storesCatalogV1Product_universal_d_BulkUpdateProductsByFilterSyncResponse as BulkUpdateProductsByFilterSyncResponse, storesCatalogV1Product_universal_d_AllowedProductsCountLimitExceededErrorData as AllowedProductsCountLimitExceededErrorData, storesCatalogV1Product_universal_d_BulkAdjustProductPropertiesRequest as BulkAdjustProductPropertiesRequest, storesCatalogV1Product_universal_d_AdjustValue as AdjustValue, storesCatalogV1Product_universal_d_AdjustValueValueOneOf as AdjustValueValueOneOf, storesCatalogV1Product_universal_d_PropertyAdjustmentData as PropertyAdjustmentData, storesCatalogV1Product_universal_d_PropertyAdjustmentDataByOneOf as PropertyAdjustmentDataByOneOf, storesCatalogV1Product_universal_d_PercentageData as PercentageData, storesCatalogV1Product_universal_d_BulkAdjustProductPropertiesResponse as BulkAdjustProductPropertiesResponse, storesCatalogV1Product_universal_d_BulkAdjustProductPropertiesByFilterSyncRequest as BulkAdjustProductPropertiesByFilterSyncRequest, storesCatalogV1Product_universal_d_BulkAdjustProductPropertiesByFilterSyncResponse as BulkAdjustProductPropertiesByFilterSyncResponse, storesCatalogV1Product_universal_d_ProductCreated as ProductCreated, storesCatalogV1Product_universal_d_ProductChanged as ProductChanged, storesCatalogV1Product_universal_d_ProductDeleted as ProductDeleted, storesCatalogV1Product_universal_d_CollectionCreated as CollectionCreated, storesCatalogV1Product_universal_d_CollectionChanged as CollectionChanged, storesCatalogV1Product_universal_d_CollectionDeleted as CollectionDeleted, storesCatalogV1Product_universal_d_VariantsChanged as VariantsChanged, storesCatalogV1Product_universal_d_VariantChanged as VariantChanged, storesCatalogV1Product_universal_d_QueryProductsRequest as QueryProductsRequest, Query$3 as Query, Paging$4 as Paging, storesCatalogV1Product_universal_d_QueryProductsResponse as QueryProductsResponse, PagingMetadata$3 as PagingMetadata, storesCatalogV1Product_universal_d_QueryProductsPlatformizedRequest as QueryProductsPlatformizedRequest, storesCatalogV1Product_universal_d_PlatformQuery as PlatformQuery, storesCatalogV1Product_universal_d_PlatformQueryPagingMethodOneOf as PlatformQueryPagingMethodOneOf, storesCatalogV1Product_universal_d_Sorting as Sorting, storesCatalogV1Product_universal_d_SortOrder as SortOrder, storesCatalogV1Product_universal_d_PlatformPaging as PlatformPaging, storesCatalogV1Product_universal_d_CursorPaging as CursorPaging, storesCatalogV1Product_universal_d_QueryProductsPlatformizedResponse as QueryProductsPlatformizedResponse, storesCatalogV1Product_universal_d_PlatformPagingMetadata as PlatformPagingMetadata, storesCatalogV1Product_universal_d_Cursors as Cursors, storesCatalogV1Product_universal_d_QueryProductsWithBigPageLimitRequest as QueryProductsWithBigPageLimitRequest, storesCatalogV1Product_universal_d_QueryWithBigPageLimit as QueryWithBigPageLimit, storesCatalogV1Product_universal_d_PagingWithBigLimit as PagingWithBigLimit, storesCatalogV1Product_universal_d_GetProductsRequest as GetProductsRequest, storesCatalogV1Product_universal_d_GetProductsResponse as GetProductsResponse, storesCatalogV1Product_universal_d_GetProductRequest as GetProductRequest, storesCatalogV1Product_universal_d_GetProductResponse as GetProductResponse, storesCatalogV1Product_universal_d_GetProductPlatformizedRequest as GetProductPlatformizedRequest, storesCatalogV1Product_universal_d_GetProductPlatformizedResponse as GetProductPlatformizedResponse, storesCatalogV1Product_universal_d_QueryCollectionsRequest as QueryCollectionsRequest, storesCatalogV1Product_universal_d_QueryCollectionsResponse as QueryCollectionsResponse, storesCatalogV1Product_universal_d_QueryCollectionsPlatformizedRequest as QueryCollectionsPlatformizedRequest, storesCatalogV1Product_universal_d_QueryCollectionsPlatformizedResponse as QueryCollectionsPlatformizedResponse, storesCatalogV1Product_universal_d_GetCollectionRequest as GetCollectionRequest, storesCatalogV1Product_universal_d_GetCollectionResponse as GetCollectionResponse, storesCatalogV1Product_universal_d_GetCollectionBySlugRequest as GetCollectionBySlugRequest, storesCatalogV1Product_universal_d_GetCollectionBySlugResponse as GetCollectionBySlugResponse, storesCatalogV1Product_universal_d_ProductOptionsAvailabilityRequest as ProductOptionsAvailabilityRequest, storesCatalogV1Product_universal_d_ProductOptionsAvailabilityResponse as ProductOptionsAvailabilityResponse, storesCatalogV1Product_universal_d_VariantData as VariantData, storesCatalogV1Product_universal_d_QueryProductVariantsRequest as QueryProductVariantsRequest, storesCatalogV1Product_universal_d_QueryProductVariantsResponse as QueryProductVariantsResponse, storesCatalogV1Product_universal_d_QueryStoreVariantsRequest as QueryStoreVariantsRequest, storesCatalogV1Product_universal_d_QueryStoreVariantsResponse as QueryStoreVariantsResponse, storesCatalogV1Product_universal_d_StoreVariant as StoreVariant, storesCatalogV1Product_universal_d_PlatformMedia as PlatformMedia, storesCatalogV1Product_universal_d_PlatformMediaMediaOneOf as PlatformMediaMediaOneOf, storesCatalogV1Product_universal_d_VideoResolution as VideoResolution, PreorderInfo$1 as PreorderInfo, storesCatalogV1Product_universal_d_QueryStoreVariantsWithBigLimitRequest as QueryStoreVariantsWithBigLimitRequest, storesCatalogV1Product_universal_d_UnlimitedPlatformQuery as UnlimitedPlatformQuery, storesCatalogV1Product_universal_d_UnlimitedPlatformQueryPagingMethodOneOf as UnlimitedPlatformQueryPagingMethodOneOf, storesCatalogV1Product_universal_d_UnlimitedPlatformPaging as UnlimitedPlatformPaging, storesCatalogV1Product_universal_d_UnlimitedPlatformCursorPaging as UnlimitedPlatformCursorPaging, storesCatalogV1Product_universal_d_GetStoreVariantRequest as GetStoreVariantRequest, storesCatalogV1Product_universal_d_GetStoreVariantResponse as GetStoreVariantResponse, storesCatalogV1Product_universal_d_QueryCustomFieldsRequest as QueryCustomFieldsRequest, storesCatalogV1Product_universal_d_QueryCustomFieldsResponse as QueryCustomFieldsResponse, storesCatalogV1Product_universal_d_BulkQueryCustomFieldsRequest as BulkQueryCustomFieldsRequest, storesCatalogV1Product_universal_d_BulkQueryCustomFieldsResponse as BulkQueryCustomFieldsResponse, storesCatalogV1Product_universal_d_CustomFieldsContainer as CustomFieldsContainer, storesCatalogV1Product_universal_d_AggregateProductsRequest as AggregateProductsRequest, storesCatalogV1Product_universal_d_AggregateProductsResponse as AggregateProductsResponse, storesCatalogV1Product_universal_d_createProduct as createProduct, storesCatalogV1Product_universal_d_createProductPlatformized as createProductPlatformized, storesCatalogV1Product_universal_d_updateProduct as updateProduct, storesCatalogV1Product_universal_d_UpdateProduct as UpdateProduct, storesCatalogV1Product_universal_d_updateProductPlatformized as updateProductPlatformized, storesCatalogV1Product_universal_d_UpdateProductPlatformizedProduct as UpdateProductPlatformizedProduct, storesCatalogV1Product_universal_d_deleteProduct as deleteProduct, storesCatalogV1Product_universal_d_deleteProductPlatformized as deleteProductPlatformized, storesCatalogV1Product_universal_d_updateProductVariants as updateProductVariants, storesCatalogV1Product_universal_d_resetAllProductVariantData as resetAllProductVariantData, storesCatalogV1Product_universal_d_addProductsToCollection as addProductsToCollection, storesCatalogV1Product_universal_d_removeProductsFromCollection as removeProductsFromCollection, storesCatalogV1Product_universal_d_addProductMedia as addProductMedia, storesCatalogV1Product_universal_d_removeProductMedia as removeProductMedia, storesCatalogV1Product_universal_d_addProductMediaToChoices as addProductMediaToChoices, storesCatalogV1Product_universal_d_removeProductMediaFromChoices as removeProductMediaFromChoices, storesCatalogV1Product_universal_d_deleteProductOptions as deleteProductOptions, storesCatalogV1Product_universal_d_SetCustomFieldsOptions as SetCustomFieldsOptions, storesCatalogV1Product_universal_d_RemoveCustomFieldsOptions as RemoveCustomFieldsOptions, storesCatalogV1Product_universal_d_removeBrand as removeBrand, storesCatalogV1Product_universal_d_BulkSetCustomFieldsOptions as BulkSetCustomFieldsOptions, storesCatalogV1Product_universal_d_BulkRemoveCustomFieldsOptions as BulkRemoveCustomFieldsOptions, storesCatalogV1Product_universal_d_createCollection as createCollection, storesCatalogV1Product_universal_d_updateCollection as updateCollection, storesCatalogV1Product_universal_d_UpdateCollection as UpdateCollection, storesCatalogV1Product_universal_d_deleteCollection as deleteCollection, storesCatalogV1Product_universal_d_removeRibbon as removeRibbon, storesCatalogV1Product_universal_d_bulkUpdateProductsProperty as bulkUpdateProductsProperty, storesCatalogV1Product_universal_d_BulkUpdateProductsByFilterSyncOptions as BulkUpdateProductsByFilterSyncOptions, storesCatalogV1Product_universal_d_bulkAdjustProductProperty as bulkAdjustProductProperty, storesCatalogV1Product_universal_d_BulkAdjustProductPropertiesByFilterSyncOptions as BulkAdjustProductPropertiesByFilterSyncOptions, storesCatalogV1Product_universal_d_QueryProductsNonPlatformizedOptions as QueryProductsNonPlatformizedOptions, storesCatalogV1Product_universal_d_queryProducts as queryProducts, storesCatalogV1Product_universal_d_ProductsQueryResult as ProductsQueryResult, storesCatalogV1Product_universal_d_ProductsQueryBuilder as ProductsQueryBuilder, storesCatalogV1Product_universal_d_QueryProductsWithBigPageLimitOptions as QueryProductsWithBigPageLimitOptions, storesCatalogV1Product_universal_d_getProduct as getProduct, storesCatalogV1Product_universal_d_GetProductOptions as GetProductOptions, storesCatalogV1Product_universal_d_getProductPlatformized as getProductPlatformized, storesCatalogV1Product_universal_d_GetProductPlatformizedOptions as GetProductPlatformizedOptions, storesCatalogV1Product_universal_d_QueryCollectionsOptions as QueryCollectionsOptions, storesCatalogV1Product_universal_d_GetCollectionOptions as GetCollectionOptions, storesCatalogV1Product_universal_d_getCollectionBySlug as getCollectionBySlug, storesCatalogV1Product_universal_d_getProductOptionsAvailability as getProductOptionsAvailability, storesCatalogV1Product_universal_d_queryProductVariants as queryProductVariants, storesCatalogV1Product_universal_d_QueryProductVariantsOptions as QueryProductVariantsOptions, storesCatalogV1Product_universal_d_queryStoreVariants as queryStoreVariants, storesCatalogV1Product_universal_d_QueryStoreVariantsOptions as QueryStoreVariantsOptions, storesCatalogV1Product_universal_d_QueryStoreVariantsWithBigLimitOptions as QueryStoreVariantsWithBigLimitOptions, storesCatalogV1Product_universal_d_getStoreVariant as getStoreVariant, storesCatalogV1Product_universal_d_AggregateProductsOptions as AggregateProductsOptions, };
    }
    const __debug$3: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface AbandonedCart {
        /** Original cart ID */
        _id?: string;
        /** Cart status */
        status?: Status;
        /**
         * Time the cart was abandoned
         * @readonly
         */
        abandonTime?: Date;
        /** Buyer information */
        buyerInfo?: BuyerInfo$1;
        /** Cart total including currency symbol */
        total?: string | null;
        /**
         * History activities
         * @readonly
         */
        activities?: Activity$1[];
    }
    enum Status {
        ABANDONED = "ABANDONED",
        RECOVERED = "RECOVERED"
    }
    interface BuyerInfo$1 {
        /** Wix customer ID */
        _id?: string;
        /** Customer information */
        identityType?: Identity;
        /** Customer's email address */
        email?: string | null;
        /** Customer's phone number */
        phone?: string | null;
        /** Customer's first name */
        firstName?: string | null;
        /** Customer's last name */
        lastName?: string | null;
    }
    enum Identity {
        /** Customer is the site owner */
        ADMIN = "ADMIN",
        /** Customer is logged in */
        MEMBER = "MEMBER",
        /** Customer is not logged in */
        VISITOR = "VISITOR",
        /** Contact was created for the customer */
        CONTACT = "CONTACT"
    }
    interface Activity$1 {
        /**
         * Log item type
         * @readonly
         */
        activityType?: ActivityType$1;
        /**
         * Comment added to Log item
         * @readonly
         */
        message?: string | null;
        /**
         * Log item occurrence timestamp
         * @readonly
         */
        timestamp?: Date;
        /** Custom data for un-typed activities */
        customData?: CustomData;
    }
    enum ActivityType$1 {
        UNRECOGNIZED_TYPE = "UNRECOGNIZED_TYPE",
        SCHEDULED = "SCHEDULED",
        EMAIL_SENT = "EMAIL_SENT",
        EMAIL_NOT_SENT = "EMAIL_NOT_SENT",
        NOTIFICATION_SENT = "NOTIFICATION_SENT",
        TASK_CREATED = "TASK_CREATED",
        CUSTOM_ACTIVITY = "CUSTOM_ACTIVITY"
    }
    interface CustomData {
        /** Activity unique namespace */
        namespace?: string | null;
        /** Custom json field for any desired data */
        customValue?: Record<string, any> | null;
    }
    interface CartAbandonedEvent {
        cartId?: string;
        /**
         * Time the cart was created
         * @readonly
         */
        creationTime?: Date;
        /**
         * Time the cart was abandoned
         * @readonly
         */
        abandonTime?: Date;
        /** Buyer information */
        buyerInfo?: BuyerInfo$1;
        /** Amount of items in cart */
        itemsCount?: number;
        /** Coupon ID (if relevant) */
        couponId?: string;
        /** Subtotal of all line items in cart, not before shipping and taxes */
        totals?: Totals$1;
        /** Checkout URL - checkout with the abandoned cart details */
        checkoutUrl?: string;
    }
    interface Totals$1 {
        /** Subtotal of all line items in cart, without shipping and taxes */
        subtotal?: number | null;
        /** Total cart price */
        total?: number | null;
        /** Formatted total cart price includes currency symbol */
        formattedTotal?: string;
    }
    interface CartRecoveredEvent {
        cartId?: string;
        /**
         * Time the cart was recovered
         * @readonly
         */
        recoveredTime?: Date;
        /**
         * Time the cart was created
         * @readonly
         */
        creationTime?: Date;
        /**
         * Time the cart was abandoned
         * @readonly
         */
        abandonedTime?: Date;
    }
    interface CartDeletedEvent {
        instanceId?: string;
        cartId?: string;
    }
    interface GetAbandonedCartRequest {
        /** Cart ID */
        _id: string;
    }
    interface GetAbandonedCartResponse {
        /** Cart details */
        abandonedCart?: AbandonedCart;
    }
    interface QueryAbandonedCartsRequest {
        /** Query details */
        query?: Query$2;
    }
    interface Query$2 {
        paging?: Paging$3;
        /** A filter string, for more information see the intro section */
        filter?: string | null;
        /** Sort string, for more information see the intro section */
        sort?: string | null;
    }
    interface Paging$3 {
        /** The number of items to load */
        limit?: number | null;
        /** The offset since the beginning of the collection */
        offset?: number | null;
    }
    interface QueryAbandonedCartsResponse {
        /** Abandoned carts list */
        abandonedCarts?: AbandonedCart[];
        /** Total number of carts */
        totalResults?: number;
    }
    interface DeleteCartRequest {
        /** Cart ID */
        _id: string;
    }
    interface DeleteCartResponse {
    }
    interface RedirectToCheckoutRequest {
        /** abandoned cart id */
        _id: string;
        /** Identifier of the metaSite this cart uses */
        metaSiteId?: string;
        /** The currency code to create the redirection link with */
        currency?: string | null;
    }
    interface RawHttpResponse {
        body?: Uint8Array;
        statusCode?: number | null;
        headers?: HeadersEntry[];
    }
    interface HeadersEntry {
        key?: string;
        value?: string;
    }
    /**
     * Returns abandoned carts based on the cart ID
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Cart ID
     * @public
     * @requiredField _id
     * @adminMethod
     * @returns Cart details
     */
    function getAbandonedCart(_id: string): Promise<AbandonedCart>;
    /**
     * Returns abandoned carts based on the requested query parameters
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @adminMethod
     */
    function queryAbandonedCarts(options?: QueryAbandonedCartsOptions): Promise<QueryAbandonedCartsResponse>;
    interface QueryAbandonedCartsOptions {
        /** Query details */
        query?: Query$2;
    }
    interface RedirectToCheckoutOptions {
        /** Identifier of the metaSite this cart uses */
        metaSiteId?: string;
        /** The currency code to create the redirection link with */
        currency?: string | null;
    }
    type storesV1AbandonedCart_universal_d_AbandonedCart = AbandonedCart;
    type storesV1AbandonedCart_universal_d_Status = Status;
    const storesV1AbandonedCart_universal_d_Status: typeof Status;
    type storesV1AbandonedCart_universal_d_Identity = Identity;
    const storesV1AbandonedCart_universal_d_Identity: typeof Identity;
    type storesV1AbandonedCart_universal_d_CustomData = CustomData;
    type storesV1AbandonedCart_universal_d_CartAbandonedEvent = CartAbandonedEvent;
    type storesV1AbandonedCart_universal_d_CartRecoveredEvent = CartRecoveredEvent;
    type storesV1AbandonedCart_universal_d_CartDeletedEvent = CartDeletedEvent;
    type storesV1AbandonedCart_universal_d_GetAbandonedCartRequest = GetAbandonedCartRequest;
    type storesV1AbandonedCart_universal_d_GetAbandonedCartResponse = GetAbandonedCartResponse;
    type storesV1AbandonedCart_universal_d_QueryAbandonedCartsRequest = QueryAbandonedCartsRequest;
    type storesV1AbandonedCart_universal_d_QueryAbandonedCartsResponse = QueryAbandonedCartsResponse;
    type storesV1AbandonedCart_universal_d_DeleteCartRequest = DeleteCartRequest;
    type storesV1AbandonedCart_universal_d_DeleteCartResponse = DeleteCartResponse;
    type storesV1AbandonedCart_universal_d_RedirectToCheckoutRequest = RedirectToCheckoutRequest;
    type storesV1AbandonedCart_universal_d_RawHttpResponse = RawHttpResponse;
    type storesV1AbandonedCart_universal_d_HeadersEntry = HeadersEntry;
    const storesV1AbandonedCart_universal_d_getAbandonedCart: typeof getAbandonedCart;
    const storesV1AbandonedCart_universal_d_queryAbandonedCarts: typeof queryAbandonedCarts;
    type storesV1AbandonedCart_universal_d_QueryAbandonedCartsOptions = QueryAbandonedCartsOptions;
    type storesV1AbandonedCart_universal_d_RedirectToCheckoutOptions = RedirectToCheckoutOptions;
    namespace storesV1AbandonedCart_universal_d {
        export { __debug$3 as __debug, storesV1AbandonedCart_universal_d_AbandonedCart as AbandonedCart, storesV1AbandonedCart_universal_d_Status as Status, BuyerInfo$1 as BuyerInfo, storesV1AbandonedCart_universal_d_Identity as Identity, Activity$1 as Activity, ActivityType$1 as ActivityType, storesV1AbandonedCart_universal_d_CustomData as CustomData, storesV1AbandonedCart_universal_d_CartAbandonedEvent as CartAbandonedEvent, Totals$1 as Totals, storesV1AbandonedCart_universal_d_CartRecoveredEvent as CartRecoveredEvent, storesV1AbandonedCart_universal_d_CartDeletedEvent as CartDeletedEvent, storesV1AbandonedCart_universal_d_GetAbandonedCartRequest as GetAbandonedCartRequest, storesV1AbandonedCart_universal_d_GetAbandonedCartResponse as GetAbandonedCartResponse, storesV1AbandonedCart_universal_d_QueryAbandonedCartsRequest as QueryAbandonedCartsRequest, Query$2 as Query, Paging$3 as Paging, storesV1AbandonedCart_universal_d_QueryAbandonedCartsResponse as QueryAbandonedCartsResponse, storesV1AbandonedCart_universal_d_DeleteCartRequest as DeleteCartRequest, storesV1AbandonedCart_universal_d_DeleteCartResponse as DeleteCartResponse, storesV1AbandonedCart_universal_d_RedirectToCheckoutRequest as RedirectToCheckoutRequest, storesV1AbandonedCart_universal_d_RawHttpResponse as RawHttpResponse, storesV1AbandonedCart_universal_d_HeadersEntry as HeadersEntry, storesV1AbandonedCart_universal_d_getAbandonedCart as getAbandonedCart, storesV1AbandonedCart_universal_d_queryAbandonedCarts as queryAbandonedCarts, storesV1AbandonedCart_universal_d_QueryAbandonedCartsOptions as QueryAbandonedCartsOptions, storesV1AbandonedCart_universal_d_RedirectToCheckoutOptions as RedirectToCheckoutOptions, };
    }
    const __debug$2: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface SubscriptionOption {
        /** Subscription option ID (auto-generated upon subscription option creation). */
        _id?: string | null;
        /** Subscription option title. */
        title?: string | null;
        /** Subscription option description (optional). */
        description?: string | null;
        /** Subscription charge times. For example, if `frequency: MONTH` and `billingCycles: 6`; payment will be made monthly for 6 months. */
        subscriptionSettings?: SubscriptionSettings$1;
        /**
         * Discount info (optional).
         * For example, a $20 discount would be `value: 20`, `type: AMOUNT`.
         */
        discount?: Discount$1;
    }
    interface SubscriptionSettings$1 {
        /** Frequency of recurring payment. */
        frequency?: SubscriptionFrequency$1;
        /** Whether subscription is renewed automatically at the end of each period. */
        autoRenewal?: boolean;
        /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
        billingCycles?: number | null;
    }
    /** Frequency unit of recurring payment */
    enum SubscriptionFrequency$1 {
        UNDEFINED = "UNDEFINED",
        DAY = "DAY",
        WEEK = "WEEK",
        MONTH = "MONTH",
        YEAR = "YEAR"
    }
    interface Discount$1 {
        /** Discount type. */
        type?: DiscountType;
        /** Discount value. */
        value?: number;
    }
    enum DiscountType {
        UNDEFINED = "UNDEFINED",
        /** No discount */
        AMOUNT = "AMOUNT",
        PERCENT = "PERCENT"
    }
    interface SubscriptionOptionCreated {
        /** Newly created subscription option. */
        subscriptionOption?: SubscriptionOption;
    }
    interface SubscriptionOptionChanged {
        /** Changed subscription option. */
        subscriptionOption?: SubscriptionOption;
    }
    interface SubscriptionOptionDeleted {
        /** Deleted subscription option's ID. */
        _id?: string;
    }
    interface SubscriptionOptionsAssignmentChangedForProduct {
        /** Product ID. */
        productId?: string;
        /** Subscription options assigned to the product. */
        assignedSubscriptionOptions?: SubscriptionOptionWithVisibility[];
    }
    interface SubscriptionOptionWithVisibility {
        /** Subscription option ID. */
        _id?: string;
        /** Whether the subscription option is hidden for the product (the default is false). */
        hidden?: boolean;
    }
    interface OneTimePurchasesChanged {
        /** Product ID. */
        productId?: string;
        /** Whether the product is available for one-time purchase. */
        allowed?: boolean;
    }
    interface CreateSubscriptionOptionRequest {
        /** Subscription option info. */
        subscriptionOption: SubscriptionOption;
    }
    interface CreateSubscriptionOptionResponse {
        /** Newly created subscription option. */
        subscriptionOption?: SubscriptionOption;
    }
    interface UpdateSubscriptionOptionRequest {
        /** Subscription option info. Only the passed parameters will be updated. */
        subscriptionOption: SubscriptionOption;
    }
    interface UpdateSubscriptionOptionResponse {
        /** Updated subscription option. */
        subscriptionOption?: SubscriptionOption;
    }
    interface DeleteSubscriptionOptionRequest {
        /** ID of the subscription option to delete. */
        _id: string;
    }
    interface DeleteSubscriptionOptionResponse {
    }
    interface BulkCreateSubscriptionOptionsRequest {
        /** Subscription options info. */
        subscriptionOptions: SubscriptionOption[];
    }
    interface BulkCreateSubscriptionOptionsResponse {
        /** Newly created subscription options. */
        subscriptionOptions?: SubscriptionOption[];
    }
    interface BulkUpdateSubscriptionOptionsRequest {
        /** Subscription options info. Only the passed parameters in each subscription option will be updated. */
        subscriptionOptions: SubscriptionOption[];
    }
    interface BulkUpdateSubscriptionOptionsResponse {
        /** Updated subscription options. */
        subscriptionOptions?: SubscriptionOption[];
    }
    interface BulkDeleteSubscriptionOptionsRequest {
        /** IDs of the subscription options to delete. */
        ids: string[];
    }
    interface BulkDeleteSubscriptionOptionsResponse {
    }
    interface AssignSubscriptionOptionsToProductRequest {
        /** Product ID. */
        productId: string;
        /** Ordered array of subscription options that will be assigned to the product. Pass an empty array to remove all subscription options from the product. */
        assignedSubscriptionOptions?: SubscriptionOptionInProduct[];
    }
    interface SubscriptionOptionInProduct {
        /** Subscription option ID. */
        _id?: string;
        /** Whether the subscription option is hidden for the product (the default is false). */
        hidden?: boolean;
        /**
         * Subscription option title.
         * @readonly
         */
        title?: string | null;
        /**
         * Subscription option description (optional).
         * @readonly
         */
        description?: string | null;
        /**
         * Subscription payment settings. For example, if `frequency: MONTH` and `billingCycles: 6`; payment will be made monthly for 6 months.
         * @readonly
         */
        subscriptionSettings?: SubscriptionSettings$1;
        /**
         * Discount info (optional).
         * @readonly
         */
        discount?: Discount$1;
    }
    interface AssignSubscriptionOptionsToProductResponse {
    }
    interface AllowOneTimePurchasesRequest {
        /** Product ID. */
        productId: string;
        /** Pass `true` to offer product by subscription and as one-time purchase. Pass `false` to offer product as subscription only. */
        allowed: boolean | null;
    }
    interface AllowOneTimePurchasesResponse {
    }
    interface GetSubscriptionOptionRequest {
        /** Subscription option ID. */
        _id: string;
    }
    interface GetSubscriptionOptionResponse {
        /** Subscription option. */
        subscriptionOption?: SubscriptionOption;
    }
    interface GetSubscriptionOptionsForProductRequest {
        /** Product ID. */
        productId: string;
        /** Whether to include hidden subscription options in the results. */
        includeHiddenSubscriptionOptions?: boolean;
    }
    interface GetSubscriptionOptionsForProductResponse {
        /** Subscription options. */
        subscriptionOptions?: SubscriptionOptionInProduct[];
    }
    interface ListSubscriptionOptionsRequest {
        /** Subscription option IDs. */
        ids: string[];
    }
    interface ListSubscriptionOptionsResponse {
        /** Subscription options. */
        subscriptionOptions?: SubscriptionOption[];
    }
    interface CalculatePricesRequest {
        /** original price to which subscription options discount will be applied */
        price?: number;
        /** ids of subscription options which will be applied to original price */
        ids: string[];
    }
    interface CalculatePricesResponse {
        /** array of calculated prices */
        prices?: SubscriptionOptionPrices[];
        /** price to which subscription options discount applied */
        originalPrice?: number;
    }
    interface SubscriptionOptionPrices {
        /** Subscription option id */
        _id?: string;
        /** Price data calculated for subscription option */
        priceData?: SubscriptionOptionPriceData;
        /** Price data calculated for subscription option, converted to the currency requested in request header */
        convertedPriceData?: SubscriptionOptionPriceData;
    }
    interface SubscriptionOptionPriceData {
        /** Subscription option price currency */
        currency?: string;
        /** Price calculated after subscription option discount applied */
        discountedPrice?: number;
        /** Price calculated after subscription option discount applied, formatted with the currency */
        formattedDiscountedPrice?: string;
    }
    interface BulkCalculatePricesRequest {
        /**
         * Original prices to which subscription options discount will be applied.
         * Key is identifier unique per price that can be used to match calculated prices with original price
         */
        prices: Record<string, number>;
        /** ids of subscription options which will be applied to original price */
        ids: string[];
    }
    interface BulkCalculatePricesResponse {
        /**
         * Key is identifier unique per price that can be used to match calculated prices with original price
         * Value is response with calculated prices for each subscription option
         */
        calculatedPrices?: Record<string, CalculatePricesResponse>;
    }
    interface BulkCalculatePricesRequestV2 {
        /** Original prices to be calculated for each corresponding product id with related subscription plan ids */
        items: BulkCalculatePricesRequestItem[];
    }
    interface BulkCalculatePricesRequestItem {
        /** Calculation id (product id) */
        _id?: string;
        /**
         * Original prices to which subscription options discount will be applied.
         * Key is identifier unique per price that can be used to match calculated prices with original price
         */
        prices?: Record<string, number>;
        /** ids of subscription options which will be applied to original price. */
        subscriptionOptionIds?: string[];
    }
    interface BulkCalculatePricesResponseV2 {
        /**
         * Key is identifier unique per price that can be used to match calculated prices with original price
         * Value is response with calculated prices for each subscription option for each product
         */
        calculatedPricesPerProduct?: BulkCalculatePricesResponseItem[];
    }
    interface BulkCalculatePricesResponseItem {
        /** Calculation id (product id) */
        _id?: string;
        /**
         * Key is identifier unique per price that can be used to match calculated prices with original price
         * Value is response with calculated prices for each subscription option
         */
        calculatedPrices?: Record<string, CalculatePricesResponse>;
    }
    interface GetProductIdsForSubscriptionOptionRequest {
        /** Subscription option ID. */
        _id: string;
        /** Whether to include hidden products in the returned results. */
        includeHiddenProducts?: boolean;
        /** Optional pagination parameters */
        paging?: Paging$2;
    }
    interface Paging$2 {
        /** Amount of items to load per page. */
        limit?: number | null;
        /** Number of items to skip in the display (relevant for all pages after the first). */
        offset?: number | null;
    }
    interface GetProductIdsForSubscriptionOptionResponse {
        /** IDs of products associated with the specified subscription option. */
        productIds?: string[];
        /** Paging metadata. */
        metadata?: PagingMetadata$2;
        /** Number of total results. */
        totalResults?: number;
    }
    interface PagingMetadata$2 {
        /** Amount of items to load per page. */
        items?: number;
        /** Number of items to skip in the display (relevant for all pages after the first). */
        offset?: number;
    }
    interface GetOneTimePurchasesStatusRequest {
        /** Product ID. */
        productId: string;
    }
    interface GetOneTimePurchasesStatusResponse {
        /** Whether the specified product is available for one-time purchase */
        allowed?: boolean;
    }
    /**
     * Creates a subscription option.
     * To assign to a product, call [`assignSubscriptionOptionsToProduct()`](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/assign-subscription-options-to-product).
     * Subscription options that are not assigned to a product will not be visible in the Wix business manager.
     *
     * This function is not a universal function and runs only on the backend.
     * @param subscriptionOption - Subscription option info.
     * @public
     * @documentationMaturity preview
     * @requiredField subscriptionOption
     * @requiredField subscriptionOption.subscriptionSettings
     * @requiredField subscriptionOption.title
     * @adminMethod
     * @returns Newly created subscription option.
     */
    function createSubscriptionOption(subscriptionOption: SubscriptionOption): Promise<SubscriptionOption>;
    /**
     * Updates a subscription option.
     * Only parameters passed will be updated.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Subscription option ID (auto-generated upon subscription option creation).
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField subscriptionOption
     * @param subscriptionOption - Subscription option update options.
     * @adminMethod
     * @returns Updated subscription option.
     */
    function updateSubscriptionOption(_id: string | null, subscriptionOption: UpdateSubscriptionOption): Promise<SubscriptionOption>;
    interface UpdateSubscriptionOption {
        /** Subscription option ID (auto-generated upon subscription option creation). */
        _id?: string | null;
        /** Subscription option title. */
        title?: string | null;
        /** Subscription option description (optional). */
        description?: string | null;
        /** Subscription charge times. For example, if `frequency: MONTH` and `billingCycles: 6`; payment will be made monthly for 6 months. */
        subscriptionSettings?: SubscriptionSettings$1;
        /**
         * Discount info (optional).
         * For example, a $20 discount would be `value: 20`, `type: AMOUNT`.
         */
        discount?: Discount$1;
    }
    /**
     * Deletes a subscription option.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - ID of the subscription option to delete.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @adminMethod
     */
    function deleteSubscriptionOption(_id: string): Promise<void>;
    /**
     * Creates multiple subscription options (up to 100).
     * To assign to a product, call [`assignSubscriptionOptionsToProduct()`](https://www.wix.com/velo/reference/wix-stores-v2/subscriptionoptions/assign-subscription-options-to-product).
     * Subscription options that are not assigned to a product will not be visible in the Wix business manager.
     *
     * This function is not a universal function and runs only on the backend.
     * @param subscriptionOptions - Subscription options info.
     * @public
     * @documentationMaturity preview
     * @requiredField subscriptionOptions
     * @requiredField subscriptionOptions.subscriptionSettings
     * @requiredField subscriptionOptions.title
     * @adminMethod
     */
    function bulkCreateSubscriptionOptions(subscriptionOptions: SubscriptionOption[]): Promise<BulkCreateSubscriptionOptionsResponse>;
    /**
     * Updates multiple subscription options.
     * Only parameters passed will be updated.
     *
     * This function is not a universal function and runs only on the backend.
     * @param subscriptionOptions - Subscription options info. Only the passed parameters in each subscription option will be updated.
     * @public
     * @documentationMaturity preview
     * @requiredField subscriptionOptions
     * @requiredField subscriptionOptions._id
     * @adminMethod
     */
    function bulkUpdateSubscriptionOptions(subscriptionOptions: SubscriptionOption[]): Promise<BulkUpdateSubscriptionOptionsResponse>;
    /**
     * Deletes multiple subscription options.
     *
     * This function is not a universal function and runs only on the backend.
     * @param ids - IDs of the subscription options to delete.
     * @public
     * @documentationMaturity preview
     * @requiredField ids
     * @adminMethod
     */
    function bulkDeleteSubscriptionOptions(ids: string[]): Promise<void>;
    /**
     * Assign up to 6 subscription options to a specified product.
     * Pass an empty array to remove all subscription options assigned to a product.
     *
     * This function is not a universal function and runs only on the backend.
     * @param productId - Product ID.
     * @public
     * @documentationMaturity preview
     * @requiredField productId
     * @param options - Subscription option assignment options.
     * @adminMethod
     */
    function assignSubscriptionOptionsToProduct(productId: string, options?: AssignSubscriptionOptionsToProductOptions): Promise<void>;
    interface AssignSubscriptionOptionsToProductOptions {
        /** Ordered array of subscription options that will be assigned to the product. Pass an empty array to remove all subscription options from the product. */
        assignedSubscriptionOptions?: SubscriptionOptionInProduct[];
    }
    /**
     * Allow for one-time purchase of a product.
     * By default, product can be sold only as part of a subscription, not as a one-time purchase.
     *
     * This function is not a universal function and runs only on the backend.
     * @param productId - Product ID.
     * @param allowed - Pass `true` to offer product by subscription and as one-time purchase. Pass `false` to offer product as subscription only.
     * @public
     * @documentationMaturity preview
     * @requiredField allowed
     * @requiredField productId
     * @adminMethod
     */
    function allowOneTimePurchases(productId: string, allowed: boolean | null): Promise<void>;
    /**
     * Retrieves a subscription option by ID.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Subscription option ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @adminMethod
     * @returns Subscription option.
     */
    function getSubscriptionOption(_id: string): Promise<SubscriptionOption>;
    /**
     * Retrieves all subscription options assigned to a specified product.
     * By default, hidden subscription options are not returned. To retrieve all subscription options you must pass `includeHiddenSubscriptionOptions = true`.
     *
     * This function is not a universal function and runs only on the backend.
     * @param productId - Product ID.
     * @public
     * @documentationMaturity preview
     * @requiredField productId
     * @param options - Options.
     * @adminMethod
     */
    function getSubscriptionOptionsForProduct(productId: string, options?: GetSubscriptionOptionsForProductOptions): Promise<GetSubscriptionOptionsForProductResponse>;
    interface GetSubscriptionOptionsForProductOptions {
        /** Whether to include hidden subscription options in the results. */
        includeHiddenSubscriptionOptions?: boolean;
    }
    interface CalculatePricesOptions {
        /** original price to which subscription options discount will be applied */
        price?: number;
        /** ids of subscription options which will be applied to original price */
        ids: string[];
    }
    interface BulkCalculatePricesOptions {
        /** ids of subscription options which will be applied to original price */
        ids: string[];
    }
    /**
     * Retrieves the IDs of products associated with a specified subscription option.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Subscription option ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @param options - Paging and other options.
     * @adminMethod
     */
    function getProductIdsForSubscriptionOption(_id: string, options?: GetProductIdsForSubscriptionOptionOptions): Promise<GetProductIdsForSubscriptionOptionResponse>;
    interface GetProductIdsForSubscriptionOptionOptions {
        /** Whether to include hidden products in the returned results. */
        includeHiddenProducts?: boolean;
        /** Optional pagination parameters */
        paging?: Paging$2;
    }
    /**
     * Checks whether a specified product (associated with subscription options) is available for one-time purchase.
     *
     * This function is not a universal function and runs only on the backend.
     * @param productId - Product ID.
     * @public
     * @documentationMaturity preview
     * @requiredField productId
     * @adminMethod
     */
    function getOneTimePurchasesStatus(productId: string): Promise<GetOneTimePurchasesStatusResponse>;
    type storesV1SubscriptionOption_universal_d_SubscriptionOption = SubscriptionOption;
    type storesV1SubscriptionOption_universal_d_DiscountType = DiscountType;
    const storesV1SubscriptionOption_universal_d_DiscountType: typeof DiscountType;
    type storesV1SubscriptionOption_universal_d_SubscriptionOptionCreated = SubscriptionOptionCreated;
    type storesV1SubscriptionOption_universal_d_SubscriptionOptionChanged = SubscriptionOptionChanged;
    type storesV1SubscriptionOption_universal_d_SubscriptionOptionDeleted = SubscriptionOptionDeleted;
    type storesV1SubscriptionOption_universal_d_SubscriptionOptionsAssignmentChangedForProduct = SubscriptionOptionsAssignmentChangedForProduct;
    type storesV1SubscriptionOption_universal_d_SubscriptionOptionWithVisibility = SubscriptionOptionWithVisibility;
    type storesV1SubscriptionOption_universal_d_OneTimePurchasesChanged = OneTimePurchasesChanged;
    type storesV1SubscriptionOption_universal_d_CreateSubscriptionOptionRequest = CreateSubscriptionOptionRequest;
    type storesV1SubscriptionOption_universal_d_CreateSubscriptionOptionResponse = CreateSubscriptionOptionResponse;
    type storesV1SubscriptionOption_universal_d_UpdateSubscriptionOptionRequest = UpdateSubscriptionOptionRequest;
    type storesV1SubscriptionOption_universal_d_UpdateSubscriptionOptionResponse = UpdateSubscriptionOptionResponse;
    type storesV1SubscriptionOption_universal_d_DeleteSubscriptionOptionRequest = DeleteSubscriptionOptionRequest;
    type storesV1SubscriptionOption_universal_d_DeleteSubscriptionOptionResponse = DeleteSubscriptionOptionResponse;
    type storesV1SubscriptionOption_universal_d_BulkCreateSubscriptionOptionsRequest = BulkCreateSubscriptionOptionsRequest;
    type storesV1SubscriptionOption_universal_d_BulkCreateSubscriptionOptionsResponse = BulkCreateSubscriptionOptionsResponse;
    type storesV1SubscriptionOption_universal_d_BulkUpdateSubscriptionOptionsRequest = BulkUpdateSubscriptionOptionsRequest;
    type storesV1SubscriptionOption_universal_d_BulkUpdateSubscriptionOptionsResponse = BulkUpdateSubscriptionOptionsResponse;
    type storesV1SubscriptionOption_universal_d_BulkDeleteSubscriptionOptionsRequest = BulkDeleteSubscriptionOptionsRequest;
    type storesV1SubscriptionOption_universal_d_BulkDeleteSubscriptionOptionsResponse = BulkDeleteSubscriptionOptionsResponse;
    type storesV1SubscriptionOption_universal_d_AssignSubscriptionOptionsToProductRequest = AssignSubscriptionOptionsToProductRequest;
    type storesV1SubscriptionOption_universal_d_SubscriptionOptionInProduct = SubscriptionOptionInProduct;
    type storesV1SubscriptionOption_universal_d_AssignSubscriptionOptionsToProductResponse = AssignSubscriptionOptionsToProductResponse;
    type storesV1SubscriptionOption_universal_d_AllowOneTimePurchasesRequest = AllowOneTimePurchasesRequest;
    type storesV1SubscriptionOption_universal_d_AllowOneTimePurchasesResponse = AllowOneTimePurchasesResponse;
    type storesV1SubscriptionOption_universal_d_GetSubscriptionOptionRequest = GetSubscriptionOptionRequest;
    type storesV1SubscriptionOption_universal_d_GetSubscriptionOptionResponse = GetSubscriptionOptionResponse;
    type storesV1SubscriptionOption_universal_d_GetSubscriptionOptionsForProductRequest = GetSubscriptionOptionsForProductRequest;
    type storesV1SubscriptionOption_universal_d_GetSubscriptionOptionsForProductResponse = GetSubscriptionOptionsForProductResponse;
    type storesV1SubscriptionOption_universal_d_ListSubscriptionOptionsRequest = ListSubscriptionOptionsRequest;
    type storesV1SubscriptionOption_universal_d_ListSubscriptionOptionsResponse = ListSubscriptionOptionsResponse;
    type storesV1SubscriptionOption_universal_d_CalculatePricesRequest = CalculatePricesRequest;
    type storesV1SubscriptionOption_universal_d_CalculatePricesResponse = CalculatePricesResponse;
    type storesV1SubscriptionOption_universal_d_SubscriptionOptionPrices = SubscriptionOptionPrices;
    type storesV1SubscriptionOption_universal_d_SubscriptionOptionPriceData = SubscriptionOptionPriceData;
    type storesV1SubscriptionOption_universal_d_BulkCalculatePricesRequest = BulkCalculatePricesRequest;
    type storesV1SubscriptionOption_universal_d_BulkCalculatePricesResponse = BulkCalculatePricesResponse;
    type storesV1SubscriptionOption_universal_d_BulkCalculatePricesRequestV2 = BulkCalculatePricesRequestV2;
    type storesV1SubscriptionOption_universal_d_BulkCalculatePricesRequestItem = BulkCalculatePricesRequestItem;
    type storesV1SubscriptionOption_universal_d_BulkCalculatePricesResponseV2 = BulkCalculatePricesResponseV2;
    type storesV1SubscriptionOption_universal_d_BulkCalculatePricesResponseItem = BulkCalculatePricesResponseItem;
    type storesV1SubscriptionOption_universal_d_GetProductIdsForSubscriptionOptionRequest = GetProductIdsForSubscriptionOptionRequest;
    type storesV1SubscriptionOption_universal_d_GetProductIdsForSubscriptionOptionResponse = GetProductIdsForSubscriptionOptionResponse;
    type storesV1SubscriptionOption_universal_d_GetOneTimePurchasesStatusRequest = GetOneTimePurchasesStatusRequest;
    type storesV1SubscriptionOption_universal_d_GetOneTimePurchasesStatusResponse = GetOneTimePurchasesStatusResponse;
    const storesV1SubscriptionOption_universal_d_createSubscriptionOption: typeof createSubscriptionOption;
    const storesV1SubscriptionOption_universal_d_updateSubscriptionOption: typeof updateSubscriptionOption;
    type storesV1SubscriptionOption_universal_d_UpdateSubscriptionOption = UpdateSubscriptionOption;
    const storesV1SubscriptionOption_universal_d_deleteSubscriptionOption: typeof deleteSubscriptionOption;
    const storesV1SubscriptionOption_universal_d_bulkCreateSubscriptionOptions: typeof bulkCreateSubscriptionOptions;
    const storesV1SubscriptionOption_universal_d_bulkUpdateSubscriptionOptions: typeof bulkUpdateSubscriptionOptions;
    const storesV1SubscriptionOption_universal_d_bulkDeleteSubscriptionOptions: typeof bulkDeleteSubscriptionOptions;
    const storesV1SubscriptionOption_universal_d_assignSubscriptionOptionsToProduct: typeof assignSubscriptionOptionsToProduct;
    type storesV1SubscriptionOption_universal_d_AssignSubscriptionOptionsToProductOptions = AssignSubscriptionOptionsToProductOptions;
    const storesV1SubscriptionOption_universal_d_allowOneTimePurchases: typeof allowOneTimePurchases;
    const storesV1SubscriptionOption_universal_d_getSubscriptionOption: typeof getSubscriptionOption;
    const storesV1SubscriptionOption_universal_d_getSubscriptionOptionsForProduct: typeof getSubscriptionOptionsForProduct;
    type storesV1SubscriptionOption_universal_d_GetSubscriptionOptionsForProductOptions = GetSubscriptionOptionsForProductOptions;
    type storesV1SubscriptionOption_universal_d_CalculatePricesOptions = CalculatePricesOptions;
    type storesV1SubscriptionOption_universal_d_BulkCalculatePricesOptions = BulkCalculatePricesOptions;
    const storesV1SubscriptionOption_universal_d_getProductIdsForSubscriptionOption: typeof getProductIdsForSubscriptionOption;
    type storesV1SubscriptionOption_universal_d_GetProductIdsForSubscriptionOptionOptions = GetProductIdsForSubscriptionOptionOptions;
    const storesV1SubscriptionOption_universal_d_getOneTimePurchasesStatus: typeof getOneTimePurchasesStatus;
    namespace storesV1SubscriptionOption_universal_d {
        export { __debug$2 as __debug, storesV1SubscriptionOption_universal_d_SubscriptionOption as SubscriptionOption, SubscriptionSettings$1 as SubscriptionSettings, SubscriptionFrequency$1 as SubscriptionFrequency, Discount$1 as Discount, storesV1SubscriptionOption_universal_d_DiscountType as DiscountType, storesV1SubscriptionOption_universal_d_SubscriptionOptionCreated as SubscriptionOptionCreated, storesV1SubscriptionOption_universal_d_SubscriptionOptionChanged as SubscriptionOptionChanged, storesV1SubscriptionOption_universal_d_SubscriptionOptionDeleted as SubscriptionOptionDeleted, storesV1SubscriptionOption_universal_d_SubscriptionOptionsAssignmentChangedForProduct as SubscriptionOptionsAssignmentChangedForProduct, storesV1SubscriptionOption_universal_d_SubscriptionOptionWithVisibility as SubscriptionOptionWithVisibility, storesV1SubscriptionOption_universal_d_OneTimePurchasesChanged as OneTimePurchasesChanged, storesV1SubscriptionOption_universal_d_CreateSubscriptionOptionRequest as CreateSubscriptionOptionRequest, storesV1SubscriptionOption_universal_d_CreateSubscriptionOptionResponse as CreateSubscriptionOptionResponse, storesV1SubscriptionOption_universal_d_UpdateSubscriptionOptionRequest as UpdateSubscriptionOptionRequest, storesV1SubscriptionOption_universal_d_UpdateSubscriptionOptionResponse as UpdateSubscriptionOptionResponse, storesV1SubscriptionOption_universal_d_DeleteSubscriptionOptionRequest as DeleteSubscriptionOptionRequest, storesV1SubscriptionOption_universal_d_DeleteSubscriptionOptionResponse as DeleteSubscriptionOptionResponse, storesV1SubscriptionOption_universal_d_BulkCreateSubscriptionOptionsRequest as BulkCreateSubscriptionOptionsRequest, storesV1SubscriptionOption_universal_d_BulkCreateSubscriptionOptionsResponse as BulkCreateSubscriptionOptionsResponse, storesV1SubscriptionOption_universal_d_BulkUpdateSubscriptionOptionsRequest as BulkUpdateSubscriptionOptionsRequest, storesV1SubscriptionOption_universal_d_BulkUpdateSubscriptionOptionsResponse as BulkUpdateSubscriptionOptionsResponse, storesV1SubscriptionOption_universal_d_BulkDeleteSubscriptionOptionsRequest as BulkDeleteSubscriptionOptionsRequest, storesV1SubscriptionOption_universal_d_BulkDeleteSubscriptionOptionsResponse as BulkDeleteSubscriptionOptionsResponse, storesV1SubscriptionOption_universal_d_AssignSubscriptionOptionsToProductRequest as AssignSubscriptionOptionsToProductRequest, storesV1SubscriptionOption_universal_d_SubscriptionOptionInProduct as SubscriptionOptionInProduct, storesV1SubscriptionOption_universal_d_AssignSubscriptionOptionsToProductResponse as AssignSubscriptionOptionsToProductResponse, storesV1SubscriptionOption_universal_d_AllowOneTimePurchasesRequest as AllowOneTimePurchasesRequest, storesV1SubscriptionOption_universal_d_AllowOneTimePurchasesResponse as AllowOneTimePurchasesResponse, storesV1SubscriptionOption_universal_d_GetSubscriptionOptionRequest as GetSubscriptionOptionRequest, storesV1SubscriptionOption_universal_d_GetSubscriptionOptionResponse as GetSubscriptionOptionResponse, storesV1SubscriptionOption_universal_d_GetSubscriptionOptionsForProductRequest as GetSubscriptionOptionsForProductRequest, storesV1SubscriptionOption_universal_d_GetSubscriptionOptionsForProductResponse as GetSubscriptionOptionsForProductResponse, storesV1SubscriptionOption_universal_d_ListSubscriptionOptionsRequest as ListSubscriptionOptionsRequest, storesV1SubscriptionOption_universal_d_ListSubscriptionOptionsResponse as ListSubscriptionOptionsResponse, storesV1SubscriptionOption_universal_d_CalculatePricesRequest as CalculatePricesRequest, storesV1SubscriptionOption_universal_d_CalculatePricesResponse as CalculatePricesResponse, storesV1SubscriptionOption_universal_d_SubscriptionOptionPrices as SubscriptionOptionPrices, storesV1SubscriptionOption_universal_d_SubscriptionOptionPriceData as SubscriptionOptionPriceData, storesV1SubscriptionOption_universal_d_BulkCalculatePricesRequest as BulkCalculatePricesRequest, storesV1SubscriptionOption_universal_d_BulkCalculatePricesResponse as BulkCalculatePricesResponse, storesV1SubscriptionOption_universal_d_BulkCalculatePricesRequestV2 as BulkCalculatePricesRequestV2, storesV1SubscriptionOption_universal_d_BulkCalculatePricesRequestItem as BulkCalculatePricesRequestItem, storesV1SubscriptionOption_universal_d_BulkCalculatePricesResponseV2 as BulkCalculatePricesResponseV2, storesV1SubscriptionOption_universal_d_BulkCalculatePricesResponseItem as BulkCalculatePricesResponseItem, storesV1SubscriptionOption_universal_d_GetProductIdsForSubscriptionOptionRequest as GetProductIdsForSubscriptionOptionRequest, Paging$2 as Paging, storesV1SubscriptionOption_universal_d_GetProductIdsForSubscriptionOptionResponse as GetProductIdsForSubscriptionOptionResponse, PagingMetadata$2 as PagingMetadata, storesV1SubscriptionOption_universal_d_GetOneTimePurchasesStatusRequest as GetOneTimePurchasesStatusRequest, storesV1SubscriptionOption_universal_d_GetOneTimePurchasesStatusResponse as GetOneTimePurchasesStatusResponse, storesV1SubscriptionOption_universal_d_createSubscriptionOption as createSubscriptionOption, storesV1SubscriptionOption_universal_d_updateSubscriptionOption as updateSubscriptionOption, storesV1SubscriptionOption_universal_d_UpdateSubscriptionOption as UpdateSubscriptionOption, storesV1SubscriptionOption_universal_d_deleteSubscriptionOption as deleteSubscriptionOption, storesV1SubscriptionOption_universal_d_bulkCreateSubscriptionOptions as bulkCreateSubscriptionOptions, storesV1SubscriptionOption_universal_d_bulkUpdateSubscriptionOptions as bulkUpdateSubscriptionOptions, storesV1SubscriptionOption_universal_d_bulkDeleteSubscriptionOptions as bulkDeleteSubscriptionOptions, storesV1SubscriptionOption_universal_d_assignSubscriptionOptionsToProduct as assignSubscriptionOptionsToProduct, storesV1SubscriptionOption_universal_d_AssignSubscriptionOptionsToProductOptions as AssignSubscriptionOptionsToProductOptions, storesV1SubscriptionOption_universal_d_allowOneTimePurchases as allowOneTimePurchases, storesV1SubscriptionOption_universal_d_getSubscriptionOption as getSubscriptionOption, storesV1SubscriptionOption_universal_d_getSubscriptionOptionsForProduct as getSubscriptionOptionsForProduct, storesV1SubscriptionOption_universal_d_GetSubscriptionOptionsForProductOptions as GetSubscriptionOptionsForProductOptions, storesV1SubscriptionOption_universal_d_CalculatePricesOptions as CalculatePricesOptions, storesV1SubscriptionOption_universal_d_BulkCalculatePricesOptions as BulkCalculatePricesOptions, storesV1SubscriptionOption_universal_d_getProductIdsForSubscriptionOption as getProductIdsForSubscriptionOption, storesV1SubscriptionOption_universal_d_GetProductIdsForSubscriptionOptionOptions as GetProductIdsForSubscriptionOptionOptions, storesV1SubscriptionOption_universal_d_getOneTimePurchasesStatus as getOneTimePurchasesStatus, };
    }
    const __debug$1: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface InventoryItemV2 {
        /** Inventory item ID. */
        _id?: string | null;
        /**
         * Product ID.
         * @readonly
         */
        productId?: string | null;
        /** Whether quantity is being tracked. */
        trackQuantity?: boolean | null;
        /** Variants associated with this inventory item. */
        variants?: InventoryVariantV2[];
        /**
         * Last updated timestamp.
         * @readonly
         */
        lastUpdated?: Date;
        /**
         * Inventory’s unique numeric ID (assigned in ascending order).
         * Primarily for sorting and filtering when crawling all inventories.
         * @readonly
         */
        numericId?: string;
        /** Preorder information. */
        preorderInfo?: PreorderInfo;
    }
    interface InventoryVariantV2 {
        /** Variant ID. */
        variantId?: string;
        /** Whether the product is listed as in stock. */
        inStock?: boolean | null;
        /** Quantity currently left in inventory. */
        quantity?: number | null;
        /**
         * Whether the variant is available for preorder. When `true`, the variant is out of stock and preorder is enabled on inventory level.
         * @readonly
         */
        availableForPreorder?: boolean;
    }
    interface PreorderInfo {
        /** Whether the item is available for preorder. */
        enabled?: boolean;
        /** A message the buyer will see when the item is out of stock and preorder is enabled. */
        message?: string | null;
        /** Number of products that can be preordered after stock reaches zero. */
        limit?: number | null;
    }
    interface InventoryItemChanged {
        /** Inventory item ID. */
        inventoryItemId?: string;
        /** Product ID. */
        productId?: string;
        /** Whether inventory is being tracked. */
        trackInventory?: boolean;
        /** Preorder information. */
        preorderInfo?: PreorderInfo;
        /** Field mask of updated fields. */
        fieldMask?: string[];
    }
    interface InventoryVariantsChanged {
        /** Inventory item ID. */
        inventoryItemId?: string;
        /** Product ID. */
        productId?: string;
        /** Information about changed variants. */
        variants?: ChangedInventoryVariant[];
    }
    interface ChangedInventoryVariant {
        /** Variant ID. */
        _id?: string;
        /** Previous inventory variant data. */
        oldValue?: ChangedInventoryVariantData;
        /** Current inventory variant data. */
        newValue?: ChangedInventoryVariantData;
    }
    interface ChangedInventoryVariantData {
        /** Inventory variant quantity. */
        quantity?: number | null;
        /** Whether the product variant is in stock. */
        inStock?: boolean;
        /** Whether the variant is available for preorder. When `true`, the variant is out of stock and preorder is enabled on inventory level. */
        availableForPreorder?: boolean;
    }
    enum ReasonType {
        UNKNOWN = "UNKNOWN",
        ORDER = "ORDER",
        MANUAL = "MANUAL",
        REVERT_INVENTORY_CHANGE = "REVERT_INVENTORY_CHANGE"
    }
    interface GetInventoryVariantsRequest extends GetInventoryVariantsRequestIdOneOf {
        /** Inventory item ID. */
        inventoryId: string;
        /** Product ID. */
        productId?: string;
        /** Variant IDs to query for this inventory item (optional). */
        variantIds?: string[];
    }
    /** @oneof */
    interface GetInventoryVariantsRequestIdOneOf {
        /** Inventory item ID. */
        inventoryId?: string;
        /** Product ID. */
        productId?: string;
    }
    interface GetInventoryVariantsResponse {
        /** Inventory item. */
        inventoryItem?: InventoryItemV2;
    }
    interface GetInventoryItemsRequest {
        /** Product IDs */
        productIds?: string[];
    }
    interface GetInventoryItemsResponse {
        /** Inventory items. */
        inventoryItems?: InventoryItemV2[];
    }
    interface QueryInventoryRequest {
        /** Information about paging, filters, sorting. */
        query?: Query$1;
    }
    interface Query$1 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$1;
        /** Filter string */
        filter?: string | null;
        /** Sort string */
        sort?: string | null;
    }
    interface Paging$1 {
        /** Amount of items to load per page */
        limit?: number | null;
        /** Number of items to skip in the display (relevant for all pages after the first) */
        offset?: number | null;
    }
    interface QueryInventoryResponse {
        /** Inventory items. */
        inventoryItems?: InventoryItemV2[];
        /** Display metadata. */
        metadata?: PagingMetadata$1;
        /** Number of total results. */
        totalResults?: number;
    }
    interface PagingMetadata$1 {
        /** Amount of items to load per page */
        items?: number;
        /** Number of items to skip in the display (relevant for all pages after the first) */
        offset?: number;
    }
    interface UpdateInventoryVariantsRequest {
        /** Inventory item. */
        inventoryItem: InventoryItemV2;
    }
    interface UpdateInventoryVariantsResponse {
    }
    interface BulkUpdateInventoryVariantsRequest extends BulkUpdateInventoryVariantsRequestActionOneOf {
        /** Change availability. */
        setInStock?: boolean | null;
        /** Set new quantity. */
        setQuantity?: number | null;
        /** Number to increment inventory by. */
        incrementBy?: number | null;
        /** Number to decrement inventory by. */
        decrementBy?: number | null;
        /** Variants filter. See documentation [here](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
        filter: Record<string, any> | null;
    }
    /** @oneof */
    interface BulkUpdateInventoryVariantsRequestActionOneOf {
        /** Change availability. */
        setInStock?: boolean | null;
        /** Set new quantity. */
        setQuantity?: number | null;
        /** Number to increment inventory by. */
        incrementBy?: number | null;
        /** Number to decrement inventory by. */
        decrementBy?: number | null;
    }
    interface BulkUpdateInventoryVariantsResponse {
    }
    interface BulkUpdateInventoryItemsRequest {
        /** Variants filter */
        variantsFilter: Record<string, any> | null;
        /** Whether inventory is being tracked. */
        trackInventory: boolean | null;
    }
    interface BulkUpdateInventoryItemsResponse {
    }
    interface DecrementInventoryRequest {
        /** Item or product to decrement. */
        decrementData?: DecrementData[];
    }
    interface DecrementData extends DecrementDataIdOneOf {
        /** Inventory item ID. */
        inventoryId?: string;
        /** Product ID. */
        productId?: string;
        /** Variant ID. */
        variantId?: string;
        /** Number to decrement inventory by. */
        decrementBy?: number;
        /**
         * Whether the request to decrement the item's inventory was made as part of a purchase that includes preorder items.
         * If true and the item is available for preorder, we allow negative inventory.
         * If false and the item is not available for preorder, we allow regular buy flow (no negative inventory).
         */
        preorderRequest?: boolean;
    }
    /** @oneof */
    interface DecrementDataIdOneOf {
        /** Inventory item ID. */
        inventoryId?: string;
        /** Product ID. */
        productId?: string;
    }
    interface DecrementInventoryResponse {
    }
    interface IncrementInventoryRequest {
        /** Item or product to increment. */
        incrementData?: IncrementData[];
    }
    interface IncrementData extends IncrementDataIdOneOf {
        /** Inventory item ID. */
        inventoryId?: string;
        /** Product ID. */
        productId?: string;
        /** Variant ID. */
        variantId?: string;
        /** Number to increment inventory by. */
        incrementBy?: number;
    }
    /** @oneof */
    interface IncrementDataIdOneOf {
        /** Inventory item ID. */
        inventoryId?: string;
        /** Product ID. */
        productId?: string;
    }
    interface IncrementInventoryResponse {
    }
    /**
     * Gets inventory variant information based on the specified option choices.
     *
     *
     * The `getInventoryVariants()` function returns a Promise that resolves to the specified inventory variant information.
     *
     * This function is not a universal function and runs only on the backend.
     * @param inventoryId - Inventory item ID.
     * @public
     * @documentationMaturity preview
     * @requiredField inventoryId
     * @adminMethod
     */
    function getInventoryVariants(inventoryId: string, options?: GetInventoryVariantsOptions): Promise<GetInventoryVariantsResponse>;
    interface GetInventoryVariantsOptions extends GetInventoryVariantsRequestIdOneOf {
        /** Product ID. */
        productId?: string;
        /** Variant IDs to query for this inventory item (optional). */
        variantIds?: string[];
    }
    /**
     * Returns a list of inventory items, given the provided paging, sorting and filtering.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @adminMethod
     */
    function queryInventory(options?: QueryInventoryOptions): Promise<QueryInventoryResponse>;
    interface QueryInventoryOptions {
        /** Information about paging, filters, sorting. */
        query?: Query$1;
    }
    /**
     * Updates product inventory, including total quantity, whether the product is in stock, and whether the product inventory is tracked.
     *
     *
     * The `updateInventoryVariants()` function is a Promise that resolves to the updated inventory variant data.
     *
     * This function is not a universal function and runs only on the backend.
     * @param productId - Product ID.
     * @public
     * @documentationMaturity preview
     * @requiredField inventoryItem
     * @requiredField productId
     * @param inventoryItem - Inventory item to update.
     * @adminMethod
     */
    function updateInventoryVariants(productId: string | null, inventoryItem: UpdateInventoryVariantsInventoryItem, options?: UpdateInventoryVariantsOptions): Promise<void>;
    interface UpdateInventoryVariantsInventoryItem {
        /** Inventory item ID. */
        _id?: string | null;
        /** Whether quantity is being tracked. */
        trackQuantity?: boolean | null;
        /** Variants associated with this inventory item. */
        variants?: InventoryVariantV2[];
        /**
         * Last updated timestamp.
         * @readonly
         */
        lastUpdated?: Date;
        /**
         * Inventory’s unique numeric ID (assigned in ascending order).
         * Primarily for sorting and filtering when crawling all inventories.
         * @readonly
         */
        numericId?: string;
        /** Preorder information. */
        preorderInfo?: PreorderInfo;
    }
    interface UpdateInventoryVariantsOptions {
    }
    interface BulkUpdateInventoryVariantsOptions extends BulkUpdateInventoryVariantsRequestActionOneOf {
        /** Change availability. */
        setInStock?: boolean | null;
        /** Set new quantity. */
        setQuantity?: number | null;
        /** Number to increment inventory by. */
        incrementBy?: number | null;
        /** Number to decrement inventory by. */
        decrementBy?: number | null;
    }
    interface BulkUpdateInventoryItemsOptions {
        /** Whether inventory is being tracked. */
        trackInventory: boolean | null;
    }
    /**
     * Subtracts a set number of items from inventory.
     *
     *
     * The `decrementInventory()` function returns a Promise that is resolved when the specified item's quantity has been updated in the inventory.
     *
     * This function is not a universal function and runs only on the backend.
     * @param decrementData - Item or product to decrement.
     * @public
     * @requiredField decrementData
     * @adminMethod
     */
    function decrementInventory(decrementData: DecrementData[], options?: DecrementInventoryOptions): Promise<void>;
    interface DecrementInventoryOptions {
    }
    /**
     * Adds a set number of items to inventory.
     *
     *
     * The `incrementInventory()` function returns a Promise that is resolved when the specified item's quantity has been updated in the inventory.
     *
     * This function is not a universal function and runs only on the backend.
     * @param incrementData - Item or product to increment.
     * @public
     * @requiredField incrementData
     * @adminMethod
     */
    function incrementInventory(incrementData: IncrementData[], options?: IncrementInventoryOptions): Promise<void>;
    interface IncrementInventoryOptions {
    }
    type storesV2Inventory_universal_d_InventoryItemV2 = InventoryItemV2;
    type storesV2Inventory_universal_d_InventoryVariantV2 = InventoryVariantV2;
    type storesV2Inventory_universal_d_PreorderInfo = PreorderInfo;
    type storesV2Inventory_universal_d_InventoryItemChanged = InventoryItemChanged;
    type storesV2Inventory_universal_d_InventoryVariantsChanged = InventoryVariantsChanged;
    type storesV2Inventory_universal_d_ChangedInventoryVariant = ChangedInventoryVariant;
    type storesV2Inventory_universal_d_ChangedInventoryVariantData = ChangedInventoryVariantData;
    type storesV2Inventory_universal_d_ReasonType = ReasonType;
    const storesV2Inventory_universal_d_ReasonType: typeof ReasonType;
    type storesV2Inventory_universal_d_GetInventoryVariantsRequest = GetInventoryVariantsRequest;
    type storesV2Inventory_universal_d_GetInventoryVariantsRequestIdOneOf = GetInventoryVariantsRequestIdOneOf;
    type storesV2Inventory_universal_d_GetInventoryVariantsResponse = GetInventoryVariantsResponse;
    type storesV2Inventory_universal_d_GetInventoryItemsRequest = GetInventoryItemsRequest;
    type storesV2Inventory_universal_d_GetInventoryItemsResponse = GetInventoryItemsResponse;
    type storesV2Inventory_universal_d_QueryInventoryRequest = QueryInventoryRequest;
    type storesV2Inventory_universal_d_QueryInventoryResponse = QueryInventoryResponse;
    type storesV2Inventory_universal_d_UpdateInventoryVariantsRequest = UpdateInventoryVariantsRequest;
    type storesV2Inventory_universal_d_UpdateInventoryVariantsResponse = UpdateInventoryVariantsResponse;
    type storesV2Inventory_universal_d_BulkUpdateInventoryVariantsRequest = BulkUpdateInventoryVariantsRequest;
    type storesV2Inventory_universal_d_BulkUpdateInventoryVariantsRequestActionOneOf = BulkUpdateInventoryVariantsRequestActionOneOf;
    type storesV2Inventory_universal_d_BulkUpdateInventoryVariantsResponse = BulkUpdateInventoryVariantsResponse;
    type storesV2Inventory_universal_d_BulkUpdateInventoryItemsRequest = BulkUpdateInventoryItemsRequest;
    type storesV2Inventory_universal_d_BulkUpdateInventoryItemsResponse = BulkUpdateInventoryItemsResponse;
    type storesV2Inventory_universal_d_DecrementInventoryRequest = DecrementInventoryRequest;
    type storesV2Inventory_universal_d_DecrementData = DecrementData;
    type storesV2Inventory_universal_d_DecrementDataIdOneOf = DecrementDataIdOneOf;
    type storesV2Inventory_universal_d_DecrementInventoryResponse = DecrementInventoryResponse;
    type storesV2Inventory_universal_d_IncrementInventoryRequest = IncrementInventoryRequest;
    type storesV2Inventory_universal_d_IncrementData = IncrementData;
    type storesV2Inventory_universal_d_IncrementDataIdOneOf = IncrementDataIdOneOf;
    type storesV2Inventory_universal_d_IncrementInventoryResponse = IncrementInventoryResponse;
    const storesV2Inventory_universal_d_getInventoryVariants: typeof getInventoryVariants;
    type storesV2Inventory_universal_d_GetInventoryVariantsOptions = GetInventoryVariantsOptions;
    const storesV2Inventory_universal_d_queryInventory: typeof queryInventory;
    type storesV2Inventory_universal_d_QueryInventoryOptions = QueryInventoryOptions;
    const storesV2Inventory_universal_d_updateInventoryVariants: typeof updateInventoryVariants;
    type storesV2Inventory_universal_d_UpdateInventoryVariantsInventoryItem = UpdateInventoryVariantsInventoryItem;
    type storesV2Inventory_universal_d_UpdateInventoryVariantsOptions = UpdateInventoryVariantsOptions;
    type storesV2Inventory_universal_d_BulkUpdateInventoryVariantsOptions = BulkUpdateInventoryVariantsOptions;
    type storesV2Inventory_universal_d_BulkUpdateInventoryItemsOptions = BulkUpdateInventoryItemsOptions;
    const storesV2Inventory_universal_d_decrementInventory: typeof decrementInventory;
    type storesV2Inventory_universal_d_DecrementInventoryOptions = DecrementInventoryOptions;
    const storesV2Inventory_universal_d_incrementInventory: typeof incrementInventory;
    type storesV2Inventory_universal_d_IncrementInventoryOptions = IncrementInventoryOptions;
    namespace storesV2Inventory_universal_d {
        export { __debug$1 as __debug, storesV2Inventory_universal_d_InventoryItemV2 as InventoryItemV2, storesV2Inventory_universal_d_InventoryVariantV2 as InventoryVariantV2, storesV2Inventory_universal_d_PreorderInfo as PreorderInfo, storesV2Inventory_universal_d_InventoryItemChanged as InventoryItemChanged, storesV2Inventory_universal_d_InventoryVariantsChanged as InventoryVariantsChanged, storesV2Inventory_universal_d_ChangedInventoryVariant as ChangedInventoryVariant, storesV2Inventory_universal_d_ChangedInventoryVariantData as ChangedInventoryVariantData, storesV2Inventory_universal_d_ReasonType as ReasonType, storesV2Inventory_universal_d_GetInventoryVariantsRequest as GetInventoryVariantsRequest, storesV2Inventory_universal_d_GetInventoryVariantsRequestIdOneOf as GetInventoryVariantsRequestIdOneOf, storesV2Inventory_universal_d_GetInventoryVariantsResponse as GetInventoryVariantsResponse, storesV2Inventory_universal_d_GetInventoryItemsRequest as GetInventoryItemsRequest, storesV2Inventory_universal_d_GetInventoryItemsResponse as GetInventoryItemsResponse, storesV2Inventory_universal_d_QueryInventoryRequest as QueryInventoryRequest, Query$1 as Query, Paging$1 as Paging, storesV2Inventory_universal_d_QueryInventoryResponse as QueryInventoryResponse, PagingMetadata$1 as PagingMetadata, storesV2Inventory_universal_d_UpdateInventoryVariantsRequest as UpdateInventoryVariantsRequest, storesV2Inventory_universal_d_UpdateInventoryVariantsResponse as UpdateInventoryVariantsResponse, storesV2Inventory_universal_d_BulkUpdateInventoryVariantsRequest as BulkUpdateInventoryVariantsRequest, storesV2Inventory_universal_d_BulkUpdateInventoryVariantsRequestActionOneOf as BulkUpdateInventoryVariantsRequestActionOneOf, storesV2Inventory_universal_d_BulkUpdateInventoryVariantsResponse as BulkUpdateInventoryVariantsResponse, storesV2Inventory_universal_d_BulkUpdateInventoryItemsRequest as BulkUpdateInventoryItemsRequest, storesV2Inventory_universal_d_BulkUpdateInventoryItemsResponse as BulkUpdateInventoryItemsResponse, storesV2Inventory_universal_d_DecrementInventoryRequest as DecrementInventoryRequest, storesV2Inventory_universal_d_DecrementData as DecrementData, storesV2Inventory_universal_d_DecrementDataIdOneOf as DecrementDataIdOneOf, storesV2Inventory_universal_d_DecrementInventoryResponse as DecrementInventoryResponse, storesV2Inventory_universal_d_IncrementInventoryRequest as IncrementInventoryRequest, storesV2Inventory_universal_d_IncrementData as IncrementData, storesV2Inventory_universal_d_IncrementDataIdOneOf as IncrementDataIdOneOf, storesV2Inventory_universal_d_IncrementInventoryResponse as IncrementInventoryResponse, storesV2Inventory_universal_d_getInventoryVariants as getInventoryVariants, storesV2Inventory_universal_d_GetInventoryVariantsOptions as GetInventoryVariantsOptions, storesV2Inventory_universal_d_queryInventory as queryInventory, storesV2Inventory_universal_d_QueryInventoryOptions as QueryInventoryOptions, storesV2Inventory_universal_d_updateInventoryVariants as updateInventoryVariants, storesV2Inventory_universal_d_UpdateInventoryVariantsInventoryItem as UpdateInventoryVariantsInventoryItem, storesV2Inventory_universal_d_UpdateInventoryVariantsOptions as UpdateInventoryVariantsOptions, storesV2Inventory_universal_d_BulkUpdateInventoryVariantsOptions as BulkUpdateInventoryVariantsOptions, storesV2Inventory_universal_d_BulkUpdateInventoryItemsOptions as BulkUpdateInventoryItemsOptions, storesV2Inventory_universal_d_decrementInventory as decrementInventory, storesV2Inventory_universal_d_DecrementInventoryOptions as DecrementInventoryOptions, storesV2Inventory_universal_d_incrementInventory as incrementInventory, storesV2Inventory_universal_d_IncrementInventoryOptions as IncrementInventoryOptions, };
    }
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Order {
        /**
         * Order ID (auto-generated upon order creation).
         * @readonly
         */
        _id?: string | null;
        /**
         * Order number displayed in the owner's store (auto-generated).
         * @readonly
         */
        number?: number;
        /**
         * Order creation date and time.
         * @readonly
         */
        dateCreated?: Date;
        /** Buyer information. */
        buyerInfo?: BuyerInfo;
        /** Currency used for the pricing of this order in [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes) format. */
        currency?: string | null;
        /** Weight unit used in this store. */
        weightUnit?: WeightUnit;
        /** Totals for order's line items. */
        totals?: Totals;
        /** Billing information. */
        billingInfo?: BillingInfo;
        /** Shipping information. */
        shippingInfo?: ShippingInfo;
        /** A note added by the buyer. */
        buyerNote?: string | null;
        /**
         * Deprecated.
         * @readonly
         */
        read?: boolean;
        /**
         * Whether or not the order was archived.
         * @readonly
         */
        archived?: boolean;
        /** Current status of the payment. */
        paymentStatus?: PaymentStatus;
        /**
         * Order's current fulfillment status (whether the order received a tracking number or was delivered/picked up).
         * @readonly
         */
        fulfillmentStatus?: FulfillmentStatus;
        /** Line items ordered. */
        lineItems?: LineItem[];
        /**
         * Log of updates related to the order.
         * @readonly
         */
        activities?: Activity[];
        /** Invoice information. */
        invoiceInfo?: InvoiceInfo;
        /**
         * Order fulfillment information.
         * @readonly
         */
        fulfillments?: Fulfillment[];
        /** Discount information. */
        discount?: Discount;
        /** Custom field information. */
        customField?: CustomField;
        /** Shopping cart ID. */
        cartId?: string | null;
        /**
         * Language for communication with the buyer. Defaults to the site language.
         * For a site that supports multiple languages, this is the language the buyer selected.
         */
        buyerLanguage?: string | null;
        /** Information about the sales channel that submitted this order. */
        channelInfo?: ChannelInfo;
        /**
         * Identity of the order's initiator.
         * @readonly
         */
        enteredBy?: EnteredBy;
        /**
         * Date and time of latest update.
         * @readonly
         */
        lastUpdated?: Date;
        /** Subscription information. */
        subscriptionInfo?: SubscriptionInfo;
        /**
         * Order’s unique numeric ID.
         * Primarily used for sorting and filtering when crawling all orders.
         * @readonly
         */
        numericId?: string;
        /**
         * Refund information.
         * @readonly
         */
        refunds?: Refund[];
    }
    /** Buyer Info */
    interface BuyerInfo {
        /** Wix customer ID */
        _id?: string | null;
        /**
         * Deprecated (use identityType instead)
         * @readonly
         */
        type?: IdentityType;
        /** Customer type */
        identityType?: IdentityType;
        /**
         * Customer's first name
         * @readonly
         */
        firstName?: string;
        /**
         * Customer's last name
         * @readonly
         */
        lastName?: string;
        /**
         * Customer's phone number
         * @readonly
         */
        phone?: string | null;
        /**
         * Customer's email address
         * @readonly
         */
        email?: string;
    }
    enum IdentityType {
        UNSPECIFIED_IDENTITY_TYPE = "UNSPECIFIED_IDENTITY_TYPE",
        /** Site member */
        MEMBER = "MEMBER",
        /** Contact */
        CONTACT = "CONTACT"
    }
    enum WeightUnit {
        /** Weight unit can't be classified, due to an error */
        UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
        /** Kilograms */
        KG = "KG",
        /** Pounds */
        LB = "LB"
    }
    interface Totals {
        /** Subtotal of all the line items, before tax. */
        subtotal?: string;
        /** Total shipping price, before tax. */
        shipping?: string | null;
        /** Total tax. */
        tax?: string | null;
        /** Total calculated discount value. */
        discount?: string | null;
        /** Total price charged. */
        total?: string;
        /**
         * Total items weight.
         * @readonly
         */
        weight?: string;
        /**
         * Total number of line items.
         * @readonly
         */
        quantity?: number;
        /**
         * Total refund.
         * @readonly
         */
        refund?: string | null;
        /** Total calculated gift card value. */
        giftCard?: string | null;
    }
    interface BillingInfo {
        /** Payment method used for this order */
        paymentMethod?: string | null;
        /**
         * Deprecated (use paymentProviderTransactionId instead)
         * @readonly
         */
        externalTransactionId?: string | null;
        /** Transaction ID from payment provider (e.g., PayPal, Square, Stripe) transaction ID */
        paymentProviderTransactionId?: string | null;
        /** Transaction ID from payment gateway (e.g., Wix Payments) */
        paymentGatewayTransactionId?: string | null;
        /** Full billing address */
        address?: Address;
        /**
         * Payment date
         * @readonly
         */
        paidDate?: Date;
        /** Whether order can be refunded by payment provider (manually or automatic) */
        refundableByPaymentProvider?: boolean | null;
    }
    interface Address extends AddressAddressLine1OptionsOneOf {
        /** Address line 1 (free text) */
        addressLine1?: string;
        /** Address line 1 (street) */
        street?: Street;
        /** Addressee name */
        fullName?: FullName;
        /** Country code (2 letters) */
        country?: string | null;
        /** State or district */
        subdivision?: string | null;
        /** City name */
        city?: string | null;
        /** ZIP/postal code */
        zipCode?: string | null;
        /** Phone number */
        phone?: string | null;
        /** Company name */
        company?: string | null;
        /** Email address */
        email?: string | null;
        /** address line */
        addressLine2?: string | null;
        /** Tax information (for Brazil only) */
        vatId?: VatId;
    }
    /** @oneof */
    interface AddressAddressLine1OptionsOneOf {
        /** Address line 1 (free text) */
        addressLine1?: string;
        /** Address line 1 (street) */
        street?: Street;
    }
    interface FullName {
        /** Customer's first name */
        firstName?: string;
        /** Customer's last name */
        lastName?: string;
    }
    interface Street {
        /** Street number */
        number?: string;
        /** Street name */
        name?: string;
    }
    interface VatId {
        /** Customer's tax ID. */
        number?: string;
        /**
         * Tax type.
         * + `CPF`: For individual tax payers.
         * + `CNPJ`: For corporations.
         */
        type?: VatType;
    }
    /** Brazilian tax info types */
    enum VatType {
        /** When the tax info type can't be classified, due to an error */
        UNSPECIFIED_TAX_TYPE = "UNSPECIFIED_TAX_TYPE",
        /** CPF - for individual tax payers */
        CPF = "CPF",
        /** CNPJ - for corporations */
        CNPJ = "CNPJ"
    }
    interface ShippingInfo extends ShippingInfoDetailsOneOf {
        /** Shipment details (when this object describes shipment). */
        shipmentDetails?: ShipmentDetails;
        /** Pickup details (when this object describes pickup). */
        pickupDetails?: PickupDetails;
        /** Shipping option name. */
        deliveryOption?: string;
        /** Shipping option delivery time. */
        estimatedDeliveryTime?: string | null;
        /** Deprecated - Latest expected delivery date. */
        deliverByDate?: Date;
        /** Shipping region. */
        shippingRegion?: string | null;
        /**
         * Unique code of provided shipping option. For example, `"usps_std_overnight"`.
         * @readonly
         */
        code?: string | null;
    }
    /** @oneof */
    interface ShippingInfoDetailsOneOf {
        /** Shipment details (when this object describes shipment). */
        shipmentDetails?: ShipmentDetails;
        /** Pickup details (when this object describes pickup). */
        pickupDetails?: PickupDetails;
    }
    interface ShipmentDetails {
        /** Shipping destination address. */
        address?: Address;
        /**
         * Deprecated (use fulfillments instead).
         * @readonly
         */
        trackingInfo?: TrackingInfo;
        /** Discount applied for shipping. */
        discount?: string | null;
        /** Tax applied for shipping. */
        tax?: string | null;
        /** Price data. */
        priceData?: ShippingPriceData;
    }
    interface TrackingInfo {
        /**
         * Tracking number
         * @readonly
         */
        trackingNumber?: string | null;
        /**
         * Shipping provider
         * @readonly
         */
        shippingProvider?: string | null;
        /**
         * Tracking link
         * @readonly
         */
        trackingLink?: string | null;
    }
    interface ShippingPriceData {
        /** Whether tax is included in the price. */
        taxIncludedInPrice?: boolean;
        /** Shipping price. */
        price?: string | null;
    }
    interface PickupDetails {
        /** Pickup address. */
        pickupAddress?: PickupAddress;
        /**
         * Deprecated (use billingInfo instead).
         * @readonly
         */
        buyerDetails?: BuyerDetails;
        /** Store owner's pickup instructions. */
        pickupInstructions?: string | null;
    }
    interface PickupAddress {
        /** Country code (3 letters) */
        country?: string;
        /** State/District */
        subdivision?: string | null;
        /** Address */
        addressLine1?: string;
        /** City */
        city?: string;
        /** ZIP/postal code */
        zipCode?: string;
    }
    interface BuyerDetails {
        /** Addressee name */
        fullName?: FullName;
        /** Email address */
        email?: string;
        /** Phone number */
        phone?: string;
    }
    /** This might be extended in the future with pending orders statuses */
    enum PaymentStatus {
        /** Payment status can't be classified, due to an error */
        UNSPECIFIED_PAYMENT_STATUS = "UNSPECIFIED_PAYMENT_STATUS",
        /** Order is pending response from the payment provider */
        PENDING = "PENDING",
        /** Order is marked as not paid, and can be marked as paid later on. This is relevant for POS and offline orders */
        NOT_PAID = "NOT_PAID",
        /** The order is marked as paid */
        PAID = "PAID",
        /** Order was refunded, refund amount less than order total price */
        PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
        /** Full order total price was refunded */
        FULLY_REFUNDED = "FULLY_REFUNDED",
        /** At least one payment was received and approved, covering less than total price amount */
        PARTIALLY_PAID = "PARTIALLY_PAID"
    }
    enum FulfillmentStatus {
        /** None of the order items are fulfilled */
        NOT_FULFILLED = "NOT_FULFILLED",
        /**
         * All of the order items are fulfilled
         * Orders without shipping info are fulfilled automatically
         */
        FULFILLED = "FULFILLED",
        /** Order is canceled */
        CANCELED = "CANCELED",
        /** Some, but not all of the order items are fulfilled */
        PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED"
    }
    interface LineItem {
        /**
         * Line item ID (auto-generated, stable within this order only)
         * @readonly
         */
        index?: number | null;
        /** Line item quantity */
        quantity?: number;
        /**
         * Deprecated (use priceData instead)
         * @readonly
         */
        price?: string | null;
        /** Line item name */
        name?: string | null;
        /** Product name, translated into the customer's language */
        translatedName?: string | null;
        /** Line item product ID (optional for POS orders) */
        productId?: string | null;
        /**
         * Deprecated (use priceData instead)
         * @readonly
         */
        totalPrice?: string | null;
        /** Line item type (may be extended) */
        lineItemType?: LineItemType;
        /** Line item options ordered */
        options?: OptionSelection[];
        /** Line item custom text field entry */
        customTextFields?: CustomTextFieldSelection[];
        /** Line item weight */
        weight?: string | null;
        /** Primary media for preview of the line item */
        mediaItem?: MediaItem;
        /** Line item SKU */
        sku?: string | null;
        /** Line item notes */
        notes?: string | null;
        /** Line item variantId (from Stores Catalog) */
        variantId?: string | null;
        /** Line item fulfillerId from stores fulfillers. No value equals self fulfilled */
        fulfillerId?: string | null;
        /** Discount applied for this line item */
        discount?: string | null;
        /** Tax applied for this line item */
        tax?: string | null;
        /**
         * Deprecated (use priceData instead)
         * @readonly
         */
        taxIncludedInPrice?: boolean;
        /** Tax group ID */
        taxGroupId?: string | null;
        /** Price data */
        priceData?: LineItemPriceData;
    }
    enum LineItemType {
        /** Line item type can't be classified, due to an error */
        UNSPECIFIED_LINE_ITEM_TYPE = "UNSPECIFIED_LINE_ITEM_TYPE",
        /** Physical item type */
        PHYSICAL = "PHYSICAL",
        /** Digital item type */
        DIGITAL = "DIGITAL",
        /** Custom item price */
        CUSTOM_AMOUNT_ITEM = "CUSTOM_AMOUNT_ITEM"
    }
    interface OptionSelection {
        /** Option name */
        option?: string;
        /** Selected choice for this option */
        selection?: string;
    }
    interface CustomTextFieldSelection {
        /** Custom text field name */
        title?: string;
        /** Custom text field value */
        value?: string;
    }
    interface MediaItem {
        /**
         * Media type
         * @readonly
         */
        mediaType?: MediaItemType;
        /**
         * Media URL
         * @readonly
         */
        url?: string;
        /**
         * Media item width
         * @readonly
         */
        width?: number;
        /**
         * Media item height
         * @readonly
         */
        height?: number;
        /** Deprecated */
        mediaId?: string | null;
        /** Media ID (for media items previously saved in Wix Media) */
        _id?: string | null;
        /** Media external URL */
        externalImageUrl?: string | null;
        /** Alternative text for presentation when media cannot be displayed */
        altText?: string | null;
    }
    enum MediaItemType {
        /** Media item type can't be classified, due to an error */
        UNSPECIFIED_MEDIA_TYPE_ITEM = "UNSPECIFIED_MEDIA_TYPE_ITEM",
        /** Image item type */
        IMAGE = "IMAGE"
    }
    interface LineItemPriceData {
        /** Whether tax is included in the price set for this line item */
        taxIncludedInPrice?: boolean;
        /** Line item price */
        price?: string;
        /**
         * Total price charged to the customer (per line item) after computation of quantity and discount
         * @readonly
         */
        totalPrice?: string | null;
    }
    interface DigitalFile {
        /** id of the secure file in media */
        fileId?: string;
    }
    interface Activity {
        /**
         * Activity item type
         * @readonly
         */
        type?: ActivityType;
        /**
         * Activity item author
         * @readonly
         */
        author?: string | null;
        /**
         * Comment added to activity item
         * @readonly
         */
        message?: string | null;
        /**
         * Activity item timestamp
         * @readonly
         */
        timestamp?: Date;
    }
    enum ActivityType {
        /** Activity item type can't be classified, due to an error */
        UNSPECIFIED_ORDER_HISTORY_ITEM_TYPE = "UNSPECIFIED_ORDER_HISTORY_ITEM_TYPE",
        /** Store owner added a comment */
        MERCHANT_COMMENT = "MERCHANT_COMMENT",
        /** Order placed */
        ORDER_PLACED = "ORDER_PLACED",
        /** Order marked as paid, either by the store owner (for offline orders), or when an online transaction was confirmed */
        ORDER_PAID = "ORDER_PAID",
        /** Order shipping status set as fulfilled */
        ORDER_FULFILLED = "ORDER_FULFILLED",
        /** Order shipping status set as not fulfilled */
        ORDER_NOT_FULFILLED = "ORDER_NOT_FULFILLED",
        /** A download link was sent (relevant for orders with digital line items) */
        DOWNLOAD_LINK_SENT = "DOWNLOAD_LINK_SENT",
        /** An email notification for pickup was sent */
        PICKUP_READY_EMAIL_SENT = "PICKUP_READY_EMAIL_SENT",
        /** Shipping tracking number was set */
        TRACKING_NUMBER_ADDED = "TRACKING_NUMBER_ADDED",
        /** Shipping tracking number was edited */
        TRACKING_NUMBER_EDITED = "TRACKING_NUMBER_EDITED",
        /** Shipping tracking link was set */
        TRACKING_LINK_WAS_SET = "TRACKING_LINK_WAS_SET",
        /** An email confirmation of order shipment was sent */
        SHIPPING_CONFIRMATION_EMAIL_SENT = "SHIPPING_CONFIRMATION_EMAIL_SENT",
        /** Invoice was set in the order */
        INVOICE_WAS_SET = "INVOICE_WAS_SET",
        /** Invoice was removed from the order */
        INVOICE_WAS_REMOVED = "INVOICE_WAS_REMOVED",
        /** Invoice was sent to customer via email */
        INVOICE_WAS_SENT = "INVOICE_WAS_SENT",
        /** Email was sent to fulfiller */
        FULFILLER_EMAIL_SENT = "FULFILLER_EMAIL_SENT",
        /** Shipping address was updated */
        SHIPPING_ADDRESS_EDITED = "SHIPPING_ADDRESS_EDITED",
        /** Order email was updated */
        EMAIL_EDITED = "EMAIL_EDITED",
        /** Order partially paid. During the checkout for orders with deposit items. */
        ORDER_PARTIALLY_PAID = "ORDER_PARTIALLY_PAID"
    }
    interface InvoiceInfo {
        /** Invoice ID */
        _id?: string;
        /** Invoice source */
        source?: InvoiceSource;
    }
    enum InvoiceSource {
        /** Invoice source can't be classified, due to an error */
        UNSPECIFIED_INVOICE_SOURCE = "UNSPECIFIED_INVOICE_SOURCE",
        /** Invoice created using the Invoices API */
        WIX = "WIX"
    }
    interface Fulfillment {
        /**
         * Fulfillment ID (auto generated upon fulfillment creation).
         * @readonly
         */
        _id?: string | null;
        /**
         * Fulfillment creation date and time.
         * @readonly
         */
        dateCreated?: Date;
        /** Information about the line items in the fulfilled order. */
        lineItems?: FulfillmentLineItem[];
        /** Tracking information. */
        trackingInfo?: FulfillmentTrackingInfo;
    }
    interface FulfillmentLineItem {
        /** Line item ID (mirrors the line item index of the order). */
        index?: number;
        /**
         * Line item quantity.
         * On creation, if this parameter isn't passed, the new fulfillment will automatically include all items of this line item that have not already been linked to a fulfillment.
         * If the order does not have the requested quantity of line items available to add to this fulfillment, the fulfillment will not be created and an error will be returned.
         * This property will always have a value when returned.
         */
        quantity?: number | null;
    }
    interface FulfillmentTrackingInfo {
        /** Tracking number. */
        trackingNumber?: string;
        /**
         * Shipping provider. Using the following shipping providers will allow for autofilling the tracking link:
         * * `fedex`
         * * `ups`
         * * `usps`
         * * `dhl`
         * * `canadaPost`
         */
        shippingProvider?: string;
        /** Tracking link - autofilled if using a predefined shipping provider, otherwise provided on creation. */
        trackingLink?: string | null;
    }
    interface Discount {
        /**
         * Deprecated (use Totals.discount instead)
         * @readonly
         */
        value?: string;
        /** Applied coupon */
        appliedCoupon?: AppliedCoupon;
    }
    interface AppliedCoupon {
        /** Coupon ID */
        couponId?: string;
        /** Coupon name */
        name?: string;
        /** Coupon code */
        code?: string;
    }
    /** Custom field */
    interface CustomField {
        /** Free text that the customer entered in the custom field during the checkout process */
        value?: string;
        /** Title for the custom field */
        title?: string;
        /** The title translated according to the buyer language */
        translatedTitle?: string;
    }
    interface ChannelInfo {
        /** Sales channel that submitted the order */
        type?: ChannelType;
        /** Reference to an order ID from an external system, as defined in channelInfo (e.g., eBay or Amazon) */
        externalOrderId?: string | null;
        /** URL to the order in the external system, as defined in channelInfo (e.g., eBay or Amazon) */
        externalOrderUrl?: string | null;
    }
    enum ChannelType {
        UNSPECIFIED = "UNSPECIFIED",
        WEB = "WEB",
        POS = "POS",
        EBAY = "EBAY",
        AMAZON = "AMAZON",
        OTHER_PLATFORM = "OTHER_PLATFORM",
        WIX_APP_STORE = "WIX_APP_STORE",
        WIX_INVOICES = "WIX_INVOICES",
        BACKOFFICE_MERCHANT = "BACKOFFICE_MERCHANT",
        WISH = "WISH",
        CLASS_PASS = "CLASS_PASS",
        GLOBAL_E = "GLOBAL_E"
    }
    interface EnteredBy {
        _id?: string;
        identityType?: EnteredByIdentityType;
    }
    enum EnteredByIdentityType {
        USER = "USER",
        MEMBER = "MEMBER",
        CONTACT = "CONTACT",
        APP = "APP"
    }
    interface SubscriptionInfo {
        /** Subscription ID. */
        _id?: string | null;
        /** Current cycle number. For example, if the subscription is in the 3rd month of a 4-month subscription, the value will be `3`. */
        cycleNumber?: number;
        /** Subscription settings. */
        subscriptionSettings?: SubscriptionSettings;
        /** Subscription options info. */
        subscriptionOptionInfo?: SubscriptionOptionInfo;
    }
    interface SubscriptionSettings {
        /** Frequency of recurring payment. */
        frequency?: SubscriptionFrequency;
        /** Whether subscription is renewed automatically at the end of each period. */
        autoRenewal?: boolean;
        /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
        billingCycles?: number | null;
    }
    /** Frequency unit of recurring payment */
    enum SubscriptionFrequency {
        UNDEFINED = "UNDEFINED",
        DAY = "DAY",
        WEEK = "WEEK",
        MONTH = "MONTH",
        YEAR = "YEAR"
    }
    interface SubscriptionOptionInfo {
        /** Subscription option title. */
        title?: string;
        /** Subscription option description. */
        description?: string | null;
    }
    interface Refund {
        /** Refund created timestamp. */
        dateCreated?: Date;
        /** Refund amount. */
        amount?: string;
        /** Reason for refund, given by user (optional). */
        reason?: string | null;
        /** Payment provider transaction ID. Used to find refund transaction info on the payment provider's side. */
        paymentProviderTransactionId?: string | null;
        /** Refund ID. */
        _id?: string;
        /** Whether refund was made externally (on the payment provider's side). */
        externalRefund?: boolean;
    }
    interface GiftCard {
        transactionId?: string;
        /** giftcard internal ID */
        _id?: string;
        /** giftcard provider appid */
        providerId?: string;
        /** giftcard amount */
        amount?: string;
    }
    interface PlaceOrderRequest {
        order: Order;
        paymentToken: string;
    }
    interface PlaceOrderResponse {
        order?: Order;
        cardReaderToken?: string | null;
    }
    interface PlaceUnpaidOrderRequest {
        order: Order;
    }
    interface PlaceUnpaidOrderResponse {
        order?: Order;
        paymentGatewayOrderId?: string;
    }
    interface OrderAddressUpdated {
        /**
         * Updated order data.
         * @readonly
         */
        order?: Order;
    }
    interface CreateOrderRequest {
        order: Order;
    }
    interface AdditionalOrderSettings {
        /** ID of the line item this setting applies to */
        lineItemId?: string | null;
        /** Whether this line item purchase was made as part of a purchase that includes preorder items. */
        preorderRequest?: boolean;
    }
    interface CreateOrderResponse {
        order?: Order;
    }
    interface BulkFulfillOrdersRequest {
        filter: Record<string, any> | null;
        /** when true shipping confirmation email will be sent to the buyer for all orders with shipment delivery */
        sendShippingConfirmationEmail?: boolean;
        /** when true pickup ready email will be sent to the buyer for all orders with pickup delivery */
        sendPickupReadyEmail?: boolean;
    }
    interface BulkFulfillOrdersResponse {
    }
    interface BulkMarkOrdersAsPaidRequest {
        filter: Record<string, any> | null;
    }
    interface BulkMarkOrdersAsPaidResponse {
    }
    interface BulkArchiveOrdersRequest {
        filter: Record<string, any> | null;
    }
    interface BulkArchiveOrdersResponse {
    }
    interface BulkUnarchiveOrdersRequest {
        filter: Record<string, any> | null;
    }
    interface BulkUnarchiveOrdersResponse {
    }
    interface AddFulfillerEmailWasSentActivityRequest {
        orderId: string;
    }
    interface AddFulfillerEmailWasSentActivityResponse {
    }
    interface DeclineOrderRequest {
        orderId: string;
        eventTime?: Date;
        reason?: string | null;
    }
    interface DeclineOrderResponse {
    }
    interface UpdateOrderEmailRequest {
        /**
         * Order ID.
         * @readonly
         */
        orderId: string;
        /** New email address for billing and shipping info. */
        email?: string;
    }
    interface UpdateOrderEmailResponse {
        /** Updated order data. */
        order?: Order;
    }
    interface UpdateOrderShippingAddressRequest {
        /**
         * Order ID.
         * @readonly
         */
        orderId: string;
        /** New order shipping address. */
        shippingAddress?: Address;
    }
    interface UpdateOrderShippingAddressResponse {
        /** Updated order data. */
        order?: Order;
    }
    interface DiffmatokyPayload {
        left?: string;
        right?: string;
        compareChannel?: string;
        entityId?: string;
        errorInformation?: ErrorInformation;
        tags?: string[];
    }
    interface ErrorInformation {
        stackTrace?: string;
    }
    interface OrderCreated {
        /** Order ID (auto generated upon order creation) */
        orderId?: string;
        /** ID displayed in the owner's store (auto generated) */
        number?: string;
        /** Order creation date */
        dateCreated?: Date;
        /** Customer information */
        buyerInfo?: BuyerInfo;
        /** Currency used for pricing in this store */
        currency?: string;
        /** Weight unit used in this store */
        weightUnit?: WeightUnit;
        /** Totals for order's line items */
        totals?: Totals;
        /** Whether the order was read by the store owner */
        read?: boolean;
        /** Order archive status */
        archived?: boolean;
        /** Order payment status */
        paymentStatus?: PaymentStatus;
        /** Order fulfillment status */
        fulfillmentStatus?: FulfillmentStatus;
    }
    interface OrdersExperiments {
        epCommitTax?: boolean;
        moveMerchantEmailToEp?: boolean;
        moveBuyerOrderConfirmationEmailToEp?: boolean;
        producedByEpBridge?: boolean;
        enableRewrittenSideEffects?: boolean;
    }
    interface OrderPaid {
        /** Paid order data. */
        order?: Order;
    }
    interface OrderCancelRefundEvent {
        /** @readonly */
        isCancel?: boolean;
        /**
         * date when cancel/refund was issued
         * @readonly
         */
        issueDate?: Date;
        /** will be defined if order was refunded */
        refund?: Refund;
        orderData?: OrderData;
    }
    interface OrderData {
        /**
         * Order ID (auto generated upon order creation)
         * @readonly
         */
        orderId?: string;
        /**
         * means that order paid with cash, such orders might be not paid
         * @readonly
         */
        isOffline?: boolean;
        /**
         * Order payment status
         * @readonly
         */
        paymentStatus?: PaymentStatus;
        /** Total price charged when order placed, this value isn't affected by refunds */
        originalTotal?: string;
        /**
         * Order creation date
         * @readonly
         */
        dateCreated?: Date;
    }
    interface OrderCanceled {
        /**
         * Canceled order data.
         * @readonly
         */
        order?: Order;
    }
    interface OrderRefunded {
        /**
         * Refund ID.
         * @readonly
         */
        refundId?: string;
        /**
         * Refunded order data.
         * @readonly
         */
        order?: Order;
    }
    interface FulfillmentCreated {
        /** Order ID (auto generated upon order creation). */
        orderId?: string;
        /** ID of the newly created fulfillment. */
        fulfillmentId?: string;
        /** Fulfillment creation date and time. */
        dateCreated?: Date;
        /** Buyer information. */
        buyerInfo?: BuyerInfo;
        /** Order fulfillment status. */
        fulfillmentStatus?: FulfillmentStatus;
        /** Fulfillment tracking information. */
        trackingInfo?: FulfillmentTrackingInfo;
    }
    interface FulfillmentUpdated {
        /** Order ID (auto generated upon order creation). */
        orderId?: string;
        /** ID of the updated fulfillment. */
        fulfillmentId?: string;
        /** Fulfillment tracking information. */
        trackingInfo?: FulfillmentTrackingInfo;
    }
    interface FulfillmentDeleted {
        /** Order ID (auto generated upon order creation). */
        orderId?: string;
        /** ID of the deleted fulfillment. */
        fulfillmentId?: string;
        /** Order fulfillment status. */
        fulfillmentStatus?: FulfillmentStatus;
    }
    interface OrderDeclined {
        order?: Order;
    }
    interface GetOrderRequestV2 {
        /** Requested order ID */
        _id: string;
    }
    interface GetOrderResponseV2 {
        /** Order data */
        order?: Order;
    }
    interface QueryOrdersRequestV2 {
        /** Query */
        query?: Query;
    }
    interface Query {
        paging?: Paging;
        /** A filter string */
        filter?: string | null;
        /** A sort string */
        sort?: string | null;
    }
    interface Paging {
        /** Number of items to load */
        limit?: number | null;
        /** The offset since the beginning of the collection */
        offset?: number | null;
    }
    interface QueryOrdersResponseV2 {
        /** Order data */
        orders?: Order[];
        /** Paging metadata */
        metadata?: PagingMetadata;
        /** Total results */
        totalResults?: number;
    }
    interface PagingMetadata {
        /** Requested number of items to load */
        items?: number;
        /** Requested offset since the beginning of the collection */
        offset?: number;
    }
    interface CreateFulfillmentRequest {
        /** Order ID (to which the fulfillment will be related). */
        orderId: string;
        /** Fulfillment info. */
        fulfillment: Fulfillment;
    }
    interface CreateFulfillmentResponse {
        /** Fulfillment ID. */
        _id?: string;
        /** Updated order data. */
        order?: Order;
    }
    interface UpdateFulfillmentRequest {
        /** Order ID. */
        orderId: string;
        /** Fulfillment ID */
        fulfillmentId: string;
        /** Updated tracking info. */
        fulfillmentTrackingInfo?: FulfillmentTrackingInfo;
    }
    interface UpdateFulfillmentResponse {
        /** Updated order data. */
        order?: Order;
    }
    interface DeleteFulfillmentRequest {
        /** Order ID. */
        orderId: string;
        /** Fulfillment ID. */
        fulfillmentId: string;
    }
    interface DeleteFulfillmentResponse {
        /** Updated order data. */
        order?: Order;
    }
    interface MarkAsPaidRequest {
        /** The order id */
        _id: string;
        /** The payment info */
        paymentInfo: RequestPaymentInfo;
    }
    interface RequestPaymentInfo {
        /** Payment method used for this order */
        paymentMethod?: string;
        /** External transaction ID */
        externalTransactionId?: string;
    }
    interface MarkAsPaidResponse {
    }
    interface SetShippingFulfillmentRequest {
        /** The order id */
        _id: string;
        /** Shipment fulfillment status */
        status?: ShipmentFulfillmentStatus;
    }
    /** This may be expanded in the future to include partial fulfillments */
    enum ShipmentFulfillmentStatus {
        /** Shipment fulfillment status can't be classified, due to an error */
        UNSPECIFIED_SHIPMENT_FULFILLMENT_STATUS = "UNSPECIFIED_SHIPMENT_FULFILLMENT_STATUS",
        /** Entire order's shipment is not fulfilled */
        SHIPMENT_NOT_FULFILLED = "SHIPMENT_NOT_FULFILLED",
        /** Entire order's shipment is fulfilled */
        SHIPMENT_FULFILLED = "SHIPMENT_FULFILLED"
    }
    interface SetShippingFulfillmentResponse {
    }
    interface SendFulfillmentConfirmationRequest {
        /** The order id */
        _id: string;
    }
    interface SendFulfillmentConfirmationResponse {
    }
    interface MarkAsReadRequest {
        /** The order id */
        _id: string;
    }
    interface MarkAsReadResponse {
    }
    interface SetArchiveStatusRequest {
        /** The order id */
        _id: string;
        /** New archive status */
        archived?: boolean;
    }
    interface SetArchiveStatusResponse {
    }
    interface PlaceOrderOptions {
        paymentToken: string;
    }
    interface CreateOrderOptions {
    }
    interface BulkFulfillOrdersOptions {
        /** when true shipping confirmation email will be sent to the buyer for all orders with shipment delivery */
        sendShippingConfirmationEmail?: boolean;
        /** when true pickup ready email will be sent to the buyer for all orders with pickup delivery */
        sendPickupReadyEmail?: boolean;
    }
    interface DeclineOrderOptions {
        eventTime?: Date;
        reason?: string | null;
    }
    interface UpdateOrderEmailOptions {
        /** New email address for billing and shipping info. */
        email?: string;
    }
    interface UpdateOrderShippingAddressOptions {
        /** New order shipping address. */
        shippingAddress?: Address;
    }
    interface QueryOrdersOptions {
        /** Query */
        query?: Query;
    }
    interface QueryOrdersEventuallyConsistentOptions {
        /** Query */
        query?: Query;
    }
    interface UpdateFulfillmentIdentifiers {
        /** Order ID. */
        orderId: string;
        /** Fulfillment ID */
        fulfillmentId: string;
    }
    interface UpdateFulfillmentOptions {
        /** Updated tracking info. */
        fulfillmentTrackingInfo?: FulfillmentTrackingInfo;
    }
    interface DeleteFulfillmentIdentifiers {
        /** Order ID. */
        orderId: string;
        /** Fulfillment ID. */
        fulfillmentId: string;
    }
    interface SetShippingFulfillmentOptions {
        /** Shipment fulfillment status */
        status?: ShipmentFulfillmentStatus;
    }
    interface SetArchiveStatusOptions {
        /** New archive status */
        archived?: boolean;
    }
    const storesV2Orders_universal_d___debug: typeof __debug;
    type storesV2Orders_universal_d_Order = Order;
    type storesV2Orders_universal_d_BuyerInfo = BuyerInfo;
    type storesV2Orders_universal_d_IdentityType = IdentityType;
    const storesV2Orders_universal_d_IdentityType: typeof IdentityType;
    type storesV2Orders_universal_d_WeightUnit = WeightUnit;
    const storesV2Orders_universal_d_WeightUnit: typeof WeightUnit;
    type storesV2Orders_universal_d_Totals = Totals;
    type storesV2Orders_universal_d_BillingInfo = BillingInfo;
    type storesV2Orders_universal_d_Address = Address;
    type storesV2Orders_universal_d_AddressAddressLine1OptionsOneOf = AddressAddressLine1OptionsOneOf;
    type storesV2Orders_universal_d_FullName = FullName;
    type storesV2Orders_universal_d_Street = Street;
    type storesV2Orders_universal_d_VatId = VatId;
    type storesV2Orders_universal_d_VatType = VatType;
    const storesV2Orders_universal_d_VatType: typeof VatType;
    type storesV2Orders_universal_d_ShippingInfo = ShippingInfo;
    type storesV2Orders_universal_d_ShippingInfoDetailsOneOf = ShippingInfoDetailsOneOf;
    type storesV2Orders_universal_d_ShipmentDetails = ShipmentDetails;
    type storesV2Orders_universal_d_TrackingInfo = TrackingInfo;
    type storesV2Orders_universal_d_ShippingPriceData = ShippingPriceData;
    type storesV2Orders_universal_d_PickupDetails = PickupDetails;
    type storesV2Orders_universal_d_PickupAddress = PickupAddress;
    type storesV2Orders_universal_d_BuyerDetails = BuyerDetails;
    type storesV2Orders_universal_d_PaymentStatus = PaymentStatus;
    const storesV2Orders_universal_d_PaymentStatus: typeof PaymentStatus;
    type storesV2Orders_universal_d_FulfillmentStatus = FulfillmentStatus;
    const storesV2Orders_universal_d_FulfillmentStatus: typeof FulfillmentStatus;
    type storesV2Orders_universal_d_LineItem = LineItem;
    type storesV2Orders_universal_d_LineItemType = LineItemType;
    const storesV2Orders_universal_d_LineItemType: typeof LineItemType;
    type storesV2Orders_universal_d_OptionSelection = OptionSelection;
    type storesV2Orders_universal_d_CustomTextFieldSelection = CustomTextFieldSelection;
    type storesV2Orders_universal_d_MediaItem = MediaItem;
    type storesV2Orders_universal_d_MediaItemType = MediaItemType;
    const storesV2Orders_universal_d_MediaItemType: typeof MediaItemType;
    type storesV2Orders_universal_d_LineItemPriceData = LineItemPriceData;
    type storesV2Orders_universal_d_DigitalFile = DigitalFile;
    type storesV2Orders_universal_d_Activity = Activity;
    type storesV2Orders_universal_d_ActivityType = ActivityType;
    const storesV2Orders_universal_d_ActivityType: typeof ActivityType;
    type storesV2Orders_universal_d_InvoiceInfo = InvoiceInfo;
    type storesV2Orders_universal_d_InvoiceSource = InvoiceSource;
    const storesV2Orders_universal_d_InvoiceSource: typeof InvoiceSource;
    type storesV2Orders_universal_d_Fulfillment = Fulfillment;
    type storesV2Orders_universal_d_FulfillmentLineItem = FulfillmentLineItem;
    type storesV2Orders_universal_d_FulfillmentTrackingInfo = FulfillmentTrackingInfo;
    type storesV2Orders_universal_d_Discount = Discount;
    type storesV2Orders_universal_d_AppliedCoupon = AppliedCoupon;
    type storesV2Orders_universal_d_CustomField = CustomField;
    type storesV2Orders_universal_d_ChannelInfo = ChannelInfo;
    type storesV2Orders_universal_d_ChannelType = ChannelType;
    const storesV2Orders_universal_d_ChannelType: typeof ChannelType;
    type storesV2Orders_universal_d_EnteredBy = EnteredBy;
    type storesV2Orders_universal_d_EnteredByIdentityType = EnteredByIdentityType;
    const storesV2Orders_universal_d_EnteredByIdentityType: typeof EnteredByIdentityType;
    type storesV2Orders_universal_d_SubscriptionInfo = SubscriptionInfo;
    type storesV2Orders_universal_d_SubscriptionSettings = SubscriptionSettings;
    type storesV2Orders_universal_d_SubscriptionFrequency = SubscriptionFrequency;
    const storesV2Orders_universal_d_SubscriptionFrequency: typeof SubscriptionFrequency;
    type storesV2Orders_universal_d_SubscriptionOptionInfo = SubscriptionOptionInfo;
    type storesV2Orders_universal_d_Refund = Refund;
    type storesV2Orders_universal_d_GiftCard = GiftCard;
    type storesV2Orders_universal_d_PlaceOrderRequest = PlaceOrderRequest;
    type storesV2Orders_universal_d_PlaceOrderResponse = PlaceOrderResponse;
    type storesV2Orders_universal_d_PlaceUnpaidOrderRequest = PlaceUnpaidOrderRequest;
    type storesV2Orders_universal_d_PlaceUnpaidOrderResponse = PlaceUnpaidOrderResponse;
    type storesV2Orders_universal_d_OrderAddressUpdated = OrderAddressUpdated;
    type storesV2Orders_universal_d_CreateOrderRequest = CreateOrderRequest;
    type storesV2Orders_universal_d_AdditionalOrderSettings = AdditionalOrderSettings;
    type storesV2Orders_universal_d_CreateOrderResponse = CreateOrderResponse;
    type storesV2Orders_universal_d_BulkFulfillOrdersRequest = BulkFulfillOrdersRequest;
    type storesV2Orders_universal_d_BulkFulfillOrdersResponse = BulkFulfillOrdersResponse;
    type storesV2Orders_universal_d_BulkMarkOrdersAsPaidRequest = BulkMarkOrdersAsPaidRequest;
    type storesV2Orders_universal_d_BulkMarkOrdersAsPaidResponse = BulkMarkOrdersAsPaidResponse;
    type storesV2Orders_universal_d_BulkArchiveOrdersRequest = BulkArchiveOrdersRequest;
    type storesV2Orders_universal_d_BulkArchiveOrdersResponse = BulkArchiveOrdersResponse;
    type storesV2Orders_universal_d_BulkUnarchiveOrdersRequest = BulkUnarchiveOrdersRequest;
    type storesV2Orders_universal_d_BulkUnarchiveOrdersResponse = BulkUnarchiveOrdersResponse;
    type storesV2Orders_universal_d_AddFulfillerEmailWasSentActivityRequest = AddFulfillerEmailWasSentActivityRequest;
    type storesV2Orders_universal_d_AddFulfillerEmailWasSentActivityResponse = AddFulfillerEmailWasSentActivityResponse;
    type storesV2Orders_universal_d_DeclineOrderRequest = DeclineOrderRequest;
    type storesV2Orders_universal_d_DeclineOrderResponse = DeclineOrderResponse;
    type storesV2Orders_universal_d_UpdateOrderEmailRequest = UpdateOrderEmailRequest;
    type storesV2Orders_universal_d_UpdateOrderEmailResponse = UpdateOrderEmailResponse;
    type storesV2Orders_universal_d_UpdateOrderShippingAddressRequest = UpdateOrderShippingAddressRequest;
    type storesV2Orders_universal_d_UpdateOrderShippingAddressResponse = UpdateOrderShippingAddressResponse;
    type storesV2Orders_universal_d_DiffmatokyPayload = DiffmatokyPayload;
    type storesV2Orders_universal_d_ErrorInformation = ErrorInformation;
    type storesV2Orders_universal_d_OrderCreated = OrderCreated;
    type storesV2Orders_universal_d_OrdersExperiments = OrdersExperiments;
    type storesV2Orders_universal_d_OrderPaid = OrderPaid;
    type storesV2Orders_universal_d_OrderCancelRefundEvent = OrderCancelRefundEvent;
    type storesV2Orders_universal_d_OrderData = OrderData;
    type storesV2Orders_universal_d_OrderCanceled = OrderCanceled;
    type storesV2Orders_universal_d_OrderRefunded = OrderRefunded;
    type storesV2Orders_universal_d_FulfillmentCreated = FulfillmentCreated;
    type storesV2Orders_universal_d_FulfillmentUpdated = FulfillmentUpdated;
    type storesV2Orders_universal_d_FulfillmentDeleted = FulfillmentDeleted;
    type storesV2Orders_universal_d_OrderDeclined = OrderDeclined;
    type storesV2Orders_universal_d_GetOrderRequestV2 = GetOrderRequestV2;
    type storesV2Orders_universal_d_GetOrderResponseV2 = GetOrderResponseV2;
    type storesV2Orders_universal_d_QueryOrdersRequestV2 = QueryOrdersRequestV2;
    type storesV2Orders_universal_d_Query = Query;
    type storesV2Orders_universal_d_Paging = Paging;
    type storesV2Orders_universal_d_QueryOrdersResponseV2 = QueryOrdersResponseV2;
    type storesV2Orders_universal_d_PagingMetadata = PagingMetadata;
    type storesV2Orders_universal_d_CreateFulfillmentRequest = CreateFulfillmentRequest;
    type storesV2Orders_universal_d_CreateFulfillmentResponse = CreateFulfillmentResponse;
    type storesV2Orders_universal_d_UpdateFulfillmentRequest = UpdateFulfillmentRequest;
    type storesV2Orders_universal_d_UpdateFulfillmentResponse = UpdateFulfillmentResponse;
    type storesV2Orders_universal_d_DeleteFulfillmentRequest = DeleteFulfillmentRequest;
    type storesV2Orders_universal_d_DeleteFulfillmentResponse = DeleteFulfillmentResponse;
    type storesV2Orders_universal_d_MarkAsPaidRequest = MarkAsPaidRequest;
    type storesV2Orders_universal_d_RequestPaymentInfo = RequestPaymentInfo;
    type storesV2Orders_universal_d_MarkAsPaidResponse = MarkAsPaidResponse;
    type storesV2Orders_universal_d_SetShippingFulfillmentRequest = SetShippingFulfillmentRequest;
    type storesV2Orders_universal_d_ShipmentFulfillmentStatus = ShipmentFulfillmentStatus;
    const storesV2Orders_universal_d_ShipmentFulfillmentStatus: typeof ShipmentFulfillmentStatus;
    type storesV2Orders_universal_d_SetShippingFulfillmentResponse = SetShippingFulfillmentResponse;
    type storesV2Orders_universal_d_SendFulfillmentConfirmationRequest = SendFulfillmentConfirmationRequest;
    type storesV2Orders_universal_d_SendFulfillmentConfirmationResponse = SendFulfillmentConfirmationResponse;
    type storesV2Orders_universal_d_MarkAsReadRequest = MarkAsReadRequest;
    type storesV2Orders_universal_d_MarkAsReadResponse = MarkAsReadResponse;
    type storesV2Orders_universal_d_SetArchiveStatusRequest = SetArchiveStatusRequest;
    type storesV2Orders_universal_d_SetArchiveStatusResponse = SetArchiveStatusResponse;
    type storesV2Orders_universal_d_PlaceOrderOptions = PlaceOrderOptions;
    type storesV2Orders_universal_d_CreateOrderOptions = CreateOrderOptions;
    type storesV2Orders_universal_d_BulkFulfillOrdersOptions = BulkFulfillOrdersOptions;
    type storesV2Orders_universal_d_DeclineOrderOptions = DeclineOrderOptions;
    type storesV2Orders_universal_d_UpdateOrderEmailOptions = UpdateOrderEmailOptions;
    type storesV2Orders_universal_d_UpdateOrderShippingAddressOptions = UpdateOrderShippingAddressOptions;
    type storesV2Orders_universal_d_QueryOrdersOptions = QueryOrdersOptions;
    type storesV2Orders_universal_d_QueryOrdersEventuallyConsistentOptions = QueryOrdersEventuallyConsistentOptions;
    type storesV2Orders_universal_d_UpdateFulfillmentIdentifiers = UpdateFulfillmentIdentifiers;
    type storesV2Orders_universal_d_UpdateFulfillmentOptions = UpdateFulfillmentOptions;
    type storesV2Orders_universal_d_DeleteFulfillmentIdentifiers = DeleteFulfillmentIdentifiers;
    type storesV2Orders_universal_d_SetShippingFulfillmentOptions = SetShippingFulfillmentOptions;
    type storesV2Orders_universal_d_SetArchiveStatusOptions = SetArchiveStatusOptions;
    namespace storesV2Orders_universal_d {
        export { storesV2Orders_universal_d___debug as __debug, storesV2Orders_universal_d_Order as Order, storesV2Orders_universal_d_BuyerInfo as BuyerInfo, storesV2Orders_universal_d_IdentityType as IdentityType, storesV2Orders_universal_d_WeightUnit as WeightUnit, storesV2Orders_universal_d_Totals as Totals, storesV2Orders_universal_d_BillingInfo as BillingInfo, storesV2Orders_universal_d_Address as Address, storesV2Orders_universal_d_AddressAddressLine1OptionsOneOf as AddressAddressLine1OptionsOneOf, storesV2Orders_universal_d_FullName as FullName, storesV2Orders_universal_d_Street as Street, storesV2Orders_universal_d_VatId as VatId, storesV2Orders_universal_d_VatType as VatType, storesV2Orders_universal_d_ShippingInfo as ShippingInfo, storesV2Orders_universal_d_ShippingInfoDetailsOneOf as ShippingInfoDetailsOneOf, storesV2Orders_universal_d_ShipmentDetails as ShipmentDetails, storesV2Orders_universal_d_TrackingInfo as TrackingInfo, storesV2Orders_universal_d_ShippingPriceData as ShippingPriceData, storesV2Orders_universal_d_PickupDetails as PickupDetails, storesV2Orders_universal_d_PickupAddress as PickupAddress, storesV2Orders_universal_d_BuyerDetails as BuyerDetails, storesV2Orders_universal_d_PaymentStatus as PaymentStatus, storesV2Orders_universal_d_FulfillmentStatus as FulfillmentStatus, storesV2Orders_universal_d_LineItem as LineItem, storesV2Orders_universal_d_LineItemType as LineItemType, storesV2Orders_universal_d_OptionSelection as OptionSelection, storesV2Orders_universal_d_CustomTextFieldSelection as CustomTextFieldSelection, storesV2Orders_universal_d_MediaItem as MediaItem, storesV2Orders_universal_d_MediaItemType as MediaItemType, storesV2Orders_universal_d_LineItemPriceData as LineItemPriceData, storesV2Orders_universal_d_DigitalFile as DigitalFile, storesV2Orders_universal_d_Activity as Activity, storesV2Orders_universal_d_ActivityType as ActivityType, storesV2Orders_universal_d_InvoiceInfo as InvoiceInfo, storesV2Orders_universal_d_InvoiceSource as InvoiceSource, storesV2Orders_universal_d_Fulfillment as Fulfillment, storesV2Orders_universal_d_FulfillmentLineItem as FulfillmentLineItem, storesV2Orders_universal_d_FulfillmentTrackingInfo as FulfillmentTrackingInfo, storesV2Orders_universal_d_Discount as Discount, storesV2Orders_universal_d_AppliedCoupon as AppliedCoupon, storesV2Orders_universal_d_CustomField as CustomField, storesV2Orders_universal_d_ChannelInfo as ChannelInfo, storesV2Orders_universal_d_ChannelType as ChannelType, storesV2Orders_universal_d_EnteredBy as EnteredBy, storesV2Orders_universal_d_EnteredByIdentityType as EnteredByIdentityType, storesV2Orders_universal_d_SubscriptionInfo as SubscriptionInfo, storesV2Orders_universal_d_SubscriptionSettings as SubscriptionSettings, storesV2Orders_universal_d_SubscriptionFrequency as SubscriptionFrequency, storesV2Orders_universal_d_SubscriptionOptionInfo as SubscriptionOptionInfo, storesV2Orders_universal_d_Refund as Refund, storesV2Orders_universal_d_GiftCard as GiftCard, storesV2Orders_universal_d_PlaceOrderRequest as PlaceOrderRequest, storesV2Orders_universal_d_PlaceOrderResponse as PlaceOrderResponse, storesV2Orders_universal_d_PlaceUnpaidOrderRequest as PlaceUnpaidOrderRequest, storesV2Orders_universal_d_PlaceUnpaidOrderResponse as PlaceUnpaidOrderResponse, storesV2Orders_universal_d_OrderAddressUpdated as OrderAddressUpdated, storesV2Orders_universal_d_CreateOrderRequest as CreateOrderRequest, storesV2Orders_universal_d_AdditionalOrderSettings as AdditionalOrderSettings, storesV2Orders_universal_d_CreateOrderResponse as CreateOrderResponse, storesV2Orders_universal_d_BulkFulfillOrdersRequest as BulkFulfillOrdersRequest, storesV2Orders_universal_d_BulkFulfillOrdersResponse as BulkFulfillOrdersResponse, storesV2Orders_universal_d_BulkMarkOrdersAsPaidRequest as BulkMarkOrdersAsPaidRequest, storesV2Orders_universal_d_BulkMarkOrdersAsPaidResponse as BulkMarkOrdersAsPaidResponse, storesV2Orders_universal_d_BulkArchiveOrdersRequest as BulkArchiveOrdersRequest, storesV2Orders_universal_d_BulkArchiveOrdersResponse as BulkArchiveOrdersResponse, storesV2Orders_universal_d_BulkUnarchiveOrdersRequest as BulkUnarchiveOrdersRequest, storesV2Orders_universal_d_BulkUnarchiveOrdersResponse as BulkUnarchiveOrdersResponse, storesV2Orders_universal_d_AddFulfillerEmailWasSentActivityRequest as AddFulfillerEmailWasSentActivityRequest, storesV2Orders_universal_d_AddFulfillerEmailWasSentActivityResponse as AddFulfillerEmailWasSentActivityResponse, storesV2Orders_universal_d_DeclineOrderRequest as DeclineOrderRequest, storesV2Orders_universal_d_DeclineOrderResponse as DeclineOrderResponse, storesV2Orders_universal_d_UpdateOrderEmailRequest as UpdateOrderEmailRequest, storesV2Orders_universal_d_UpdateOrderEmailResponse as UpdateOrderEmailResponse, storesV2Orders_universal_d_UpdateOrderShippingAddressRequest as UpdateOrderShippingAddressRequest, storesV2Orders_universal_d_UpdateOrderShippingAddressResponse as UpdateOrderShippingAddressResponse, storesV2Orders_universal_d_DiffmatokyPayload as DiffmatokyPayload, storesV2Orders_universal_d_ErrorInformation as ErrorInformation, storesV2Orders_universal_d_OrderCreated as OrderCreated, storesV2Orders_universal_d_OrdersExperiments as OrdersExperiments, storesV2Orders_universal_d_OrderPaid as OrderPaid, storesV2Orders_universal_d_OrderCancelRefundEvent as OrderCancelRefundEvent, storesV2Orders_universal_d_OrderData as OrderData, storesV2Orders_universal_d_OrderCanceled as OrderCanceled, storesV2Orders_universal_d_OrderRefunded as OrderRefunded, storesV2Orders_universal_d_FulfillmentCreated as FulfillmentCreated, storesV2Orders_universal_d_FulfillmentUpdated as FulfillmentUpdated, storesV2Orders_universal_d_FulfillmentDeleted as FulfillmentDeleted, storesV2Orders_universal_d_OrderDeclined as OrderDeclined, storesV2Orders_universal_d_GetOrderRequestV2 as GetOrderRequestV2, storesV2Orders_universal_d_GetOrderResponseV2 as GetOrderResponseV2, storesV2Orders_universal_d_QueryOrdersRequestV2 as QueryOrdersRequestV2, storesV2Orders_universal_d_Query as Query, storesV2Orders_universal_d_Paging as Paging, storesV2Orders_universal_d_QueryOrdersResponseV2 as QueryOrdersResponseV2, storesV2Orders_universal_d_PagingMetadata as PagingMetadata, storesV2Orders_universal_d_CreateFulfillmentRequest as CreateFulfillmentRequest, storesV2Orders_universal_d_CreateFulfillmentResponse as CreateFulfillmentResponse, storesV2Orders_universal_d_UpdateFulfillmentRequest as UpdateFulfillmentRequest, storesV2Orders_universal_d_UpdateFulfillmentResponse as UpdateFulfillmentResponse, storesV2Orders_universal_d_DeleteFulfillmentRequest as DeleteFulfillmentRequest, storesV2Orders_universal_d_DeleteFulfillmentResponse as DeleteFulfillmentResponse, storesV2Orders_universal_d_MarkAsPaidRequest as MarkAsPaidRequest, storesV2Orders_universal_d_RequestPaymentInfo as RequestPaymentInfo, storesV2Orders_universal_d_MarkAsPaidResponse as MarkAsPaidResponse, storesV2Orders_universal_d_SetShippingFulfillmentRequest as SetShippingFulfillmentRequest, storesV2Orders_universal_d_ShipmentFulfillmentStatus as ShipmentFulfillmentStatus, storesV2Orders_universal_d_SetShippingFulfillmentResponse as SetShippingFulfillmentResponse, storesV2Orders_universal_d_SendFulfillmentConfirmationRequest as SendFulfillmentConfirmationRequest, storesV2Orders_universal_d_SendFulfillmentConfirmationResponse as SendFulfillmentConfirmationResponse, storesV2Orders_universal_d_MarkAsReadRequest as MarkAsReadRequest, storesV2Orders_universal_d_MarkAsReadResponse as MarkAsReadResponse, storesV2Orders_universal_d_SetArchiveStatusRequest as SetArchiveStatusRequest, storesV2Orders_universal_d_SetArchiveStatusResponse as SetArchiveStatusResponse, storesV2Orders_universal_d_PlaceOrderOptions as PlaceOrderOptions, storesV2Orders_universal_d_CreateOrderOptions as CreateOrderOptions, storesV2Orders_universal_d_BulkFulfillOrdersOptions as BulkFulfillOrdersOptions, storesV2Orders_universal_d_DeclineOrderOptions as DeclineOrderOptions, storesV2Orders_universal_d_UpdateOrderEmailOptions as UpdateOrderEmailOptions, storesV2Orders_universal_d_UpdateOrderShippingAddressOptions as UpdateOrderShippingAddressOptions, storesV2Orders_universal_d_QueryOrdersOptions as QueryOrdersOptions, storesV2Orders_universal_d_QueryOrdersEventuallyConsistentOptions as QueryOrdersEventuallyConsistentOptions, storesV2Orders_universal_d_UpdateFulfillmentIdentifiers as UpdateFulfillmentIdentifiers, storesV2Orders_universal_d_UpdateFulfillmentOptions as UpdateFulfillmentOptions, storesV2Orders_universal_d_DeleteFulfillmentIdentifiers as DeleteFulfillmentIdentifiers, storesV2Orders_universal_d_SetShippingFulfillmentOptions as SetShippingFulfillmentOptions, storesV2Orders_universal_d_SetArchiveStatusOptions as SetArchiveStatusOptions, };
    }
    export { storesV1AbandonedCart_universal_d as abandonedCarts, storesCatalogV1Collection_universal_d as collections, storesV2Inventory_universal_d as inventory, storesV2Orders_universal_d as orders, storesCatalogV1Product_universal_d as products, storesV1SubscriptionOption_universal_d as subscriptionOptions, platformV1Wishlist_universal_d as wishlist };
}
