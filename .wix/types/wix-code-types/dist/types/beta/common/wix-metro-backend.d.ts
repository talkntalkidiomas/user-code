declare module "wix-metro-backend" {
  /** Physical address */
  interface Address extends AddressStreetOneOf {
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
      /** Country code. */
      country?: string | null;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Zip/postal code. */
      postalCode?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
      addressLine2?: string | null;
      /**
       * A string containing the full address of this location.
       * @internal
       */
      formatted?: string | null;
      /**
       * Coordinates of the physical address.
       * @internal
       */
      location?: AddressLocation;
  }
  /** @oneof */
  interface AddressStreetOneOf {
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
  }
  interface StreetAddress {
      /** Street number. */
      number?: string;
      /** Street name. */
      name?: string;
      /**
       * Apartment number.
       * @internal
       */
      apt?: string;
      /**
       * Optional address line 1
       * @internal
       */
      formattedAddressLine?: string | null;
  }
  interface AddressLocation {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Subdivision {
      /** Short subdivision code. */
      code?: string;
      /** Subdivision full name. */
      name?: string;
      /**
       * Subdivision level
       * @internal
       */
      type?: SubdivisionType;
      /**
       * Free text description of subdivision type.
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType {
      UNKNOWN_SUBDIVISION_TYPE = "UNKNOWN_SUBDIVISION_TYPE",
      /** State */
      ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
      /** County */
      ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
      /** City/town */
      ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3",
      /** Neighborhood/quarter */
      ADMINISTRATIVE_AREA_LEVEL_4 = "ADMINISTRATIVE_AREA_LEVEL_4",
      /** Street/block */
      ADMINISTRATIVE_AREA_LEVEL_5 = "ADMINISTRATIVE_AREA_LEVEL_5",
      /** ADMINISTRATIVE_AREA_LEVEL_0. Indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
      COUNTRY = "COUNTRY"
  }
  interface VideoResolution {
      /** Video URL. */
      url?: string;
      /** Video height. */
      height?: number;
      /** Video width. */
      width?: number;
      /**
       * Deprecated. Use the `posters` property in the parent entity instead.
       * @internal
       */
      poster?: string;
      /** Video format for example, mp4, hls. */
      format?: string;
      /**
       * Deprecated. Use the `urlExpirationDate` property in the parent entity instead.
       * @internal
       */
      urlExpirationDate?: Date;
      /**
       * Deprecated. Use the `sizeInBytes` property in the parent entity instead. Size cannot be provided per resolution.
       * @internal
       */
      sizeInBytes?: string | null;
      /**
       * Video quality. For example: 480p, 720p.
       * @internal
       */
      quality?: string | null;
      /**
       * Video filename.
       * @internal
       */
      filename?: string | null;
      /**
       * Video duration in seconds.
       * @internal
       * @readonly
       */
      durationInSeconds?: number | null;
      /**
       * Video duration in milliseconds.
       * @internal
       * @readonly
       */
      durationInMilliseconds?: number | null;
      /**
       * When true, this is a protected asset, and calling the URL will return a 403 error.
       * In order to access private assets, make a request to:
       * `GenerateFileDownloadUrl` with the WixMedia id and specify the asset_key in the request
       * @internal
       * @readonly
       */
      private?: boolean | null;
      /**
       * Key to identify the video resolution's relationship to the original media in WixMedia.
       * Can be used to request a download for the specific video resolution.
       * For example: 480p.mp4, 720p.mp4, 1080p.mp4, trailer-720p.mp4, clip-720p.mp4
       * @internal
       * @readonly
       */
      assetKey?: string | null;
  }
  interface PageLink {
      /** The page id we want from the site */
      pageId?: string;
      /** Where this link should open, supports _self and _blank or any name the user chooses. _self means same page, _blank means new page. */
      target?: string | null;
      /** rel of link */
      rel?: LinkRel[];
  }
  /**
   * The 'rel' attribute of the link. The rel attribute defines the relationship between a linked resource and the current document.
   * Further reading (also about different possible rel types): https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel
   * Following are the accepted 'rel' types by Wix applications.
   */
  enum LinkRel {
      /** default (not implemented) */
      unknown_link_rel = "unknown_link_rel",
      /** Indicates that the current document's original author or publisher does not endorse the referenced document. */
      nofollow = "nofollow",
      /** Instructs the browser to navigate to the target resource without granting the new browsing context access to the document that opened it. */
      noopener = "noopener",
      /** No Referer header will be included. Additionally, has the same effect as noopener. */
      noreferrer = "noreferrer",
      /** Indicates a link that resulted from advertisements or paid placements. */
      sponsored = "sponsored"
  }
  interface Variant {
      name?: string;
      value?: string;
      image?: string;
  }
  interface MyAddress {
      country?: string | null;
      subdivision?: string | null;
      city?: string | null;
      postalCode?: string | null;
      streetAddress?: StreetAddress;
      /** @internal */
      formatted?: string | null;
  }
  interface CreateProductRequest {
      product?: Product;
  }
  interface CreateProductResponse {
      product?: Product;
  }
  interface DeleteProductRequest {
      productId: string;
  }
  interface DeleteProductResponse {
  }
  interface UpdateProductRequest {
      productId: string;
      product?: Product;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateProductResponse {
      product?: Product;
  }
  interface GetProductRequest {
      productId: string;
  }
  interface GetProductResponse {
      product?: Product;
  }
  interface GetProductsStartWithRequest {
      title: string;
      addressLine2?: string | null;
  }
  interface GetProductsStartWithResponse {
      products?: Product[];
  }
  interface QueryProductsRequest {
      query?: QueryV2;
      /** Whether variants should be included in the response. */
      includeVariants?: boolean;
      /** Whether hidden products should be included in the response. Requires permissions to manage products. */
      includeHiddenProducts?: boolean;
      /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
      includeMerchantSpecificData?: boolean;
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
  interface CursorPaging {
      /** Maximum number of items to return in the results. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * Pass the relevant cursor token from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryProductsResponse {
      products?: Product[];
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
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface BulkCreateProductsRequest {
      products: Product[];
      /** set to `true` if you wish to receive back the created products in the response */
      returnEntity?: boolean;
  }
  interface BulkCreateProductsResponse {
      results?: BulkProductResult[];
      bulkActionMetadata?: BulkActionMetadata;
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
  interface BulkProductResult {
      /** Defined in wix.commons */
      itemMetadata?: ItemMetadata;
      /** Only exists if `returnEntity` was set to true in the request */
      item?: Product;
  }
  interface BulkActionMetadata {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface BulkUpdateProductsRequest {
      products: MaskedProduct[];
      /** set to `true` if you wish to receive back the updated products in the response */
      returnEntity?: boolean;
  }
  interface MaskedProduct {
      /** Product to be updated, may be partial */
      product?: Product;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface BulkUpdateProductsResponse {
      results?: BulkUpdateProductsResponseBulkProductResult[];
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkUpdateProductsResponseBulkProductResult {
      itemMetadata?: ItemMetadata;
      /** Only exists if `returnEntity` was set to true in the request */
      item?: Product;
  }
  interface BulkDeleteProductsRequest {
      productIds: string[];
  }
  interface BulkDeleteProductsResponse {
      results?: BulkDeleteProductsResponseBulkProductResult[];
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDeleteProductsResponseBulkProductResult {
      itemMetadata?: ItemMetadata;
  }
  interface ResetProductsDbRequest {
  }
  interface ResetProductsDbResponse {
  }
  interface Product {
      _id: string;
      name: string | null;
      collectionId: string;
      _createdDate: Date;
      modifiedDate: Date;
      image: string;
      address: Address;
      document: string;
      video: string;
      pageLink: PageLink;
      audio: string;
      color: string | null;
      localDate: string | null;
      localTime: string | null;
      localDateTime: string | null;
      variants: Variant[];
      mainVariant: Variant;
      customAddress: MyAddress;
      guid: string;
  }
  /**
   * Creating a product
   * @public
   * @documentationMaturity preview
   * @requiredField options.product.title
   * @adminMethod
   */
  function createProduct(options?: CreateProductOptions): Promise<Product>;
  interface CreateProductOptions {
      product?: Product;
  }
  /** @public
   * @documentationMaturity preview
   * @requiredField productId
   * @adminMethod
   */
  function deleteProduct(productId: string): Promise<void>;
  /** @public
   * @documentationMaturity preview
   * @requiredField options.product._id
   * @requiredField productId
   * @adminMethod
   */
  function updateProduct(productId: string, options?: UpdateProductOptions): Promise<Product>;
  interface UpdateProductOptions {
      product?: Product;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * override description
   * @public
   * @documentationMaturity preview
   * @requiredField productId
   * @param arg1 - ## new override param 1
   * @adminMethod
   * @returns ## override return
   */
  function getProduct(productId: string): Promise<Product>;
  /** @public
   * @documentationMaturity preview
   * @requiredField title
   * @adminMethod
   */
  function getProductsStartWith(title: string, options?: GetProductsStartWithOptions): Promise<GetProductsStartWithResponse>;
  interface GetProductsStartWithOptions {
      addressLine2?: string | null;
  }
  /** @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryProducts(options?: QueryProductsOptions): ProductsQueryBuilder;
  interface QueryProductsOptions {
      /** Whether variants should be included in the response. */
      includeVariants?: boolean | undefined;
      /** Whether hidden products should be included in the response. Requires permissions to manage products. */
      includeHiddenProducts?: boolean | undefined;
      /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
      includeMerchantSpecificData?: boolean | undefined;
  }
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ProductsQueryResult extends QueryCursorResult {
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
      eq: (propertyName: 'title' | 'collectionId' | 'guid', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: 'title' | 'guid', value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: 'title' | 'guid', value: string) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: 'title' | 'guid', value: any[]) => ProductsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: 'title' | 'guid', value: any) => ProductsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: 'title' | 'guid', value: boolean) => ProductsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'title' | 'collectionId' | 'guid'>) => ProductsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'title' | 'collectionId' | 'guid'>) => ProductsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ProductsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ProductsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ProductsQueryResult>;
  }
  /**
   * create multiple products in a single request. Works synchronously
   * @public
   * @documentationMaturity preview
   * @requiredField products
   * @adminMethod
   */
  function bulkCreateProducts(products: Product[], options?: BulkCreateProductsOptions): Promise<BulkCreateProductsResponse>;
  interface BulkCreateProductsOptions {
      /** set to `true` if you wish to receive back the created products in the response */
      returnEntity?: boolean;
  }
  /**
   * update multiple products in a single request. Works synchronously.
   * @public
   * @documentationMaturity preview
   * @requiredField products
   * @adminMethod
   */
  function bulkUpdateProducts(products: MaskedProduct[], options?: BulkUpdateProductsOptions): Promise<BulkUpdateProductsResponse>;
  interface BulkUpdateProductsOptions {
      /** set to `true` if you wish to receive back the updated products in the response */
      returnEntity?: boolean;
  }
  /**
   * deletes multiple products in a single request. Works synchronously.
   * @public
   * @documentationMaturity preview
   * @requiredField productIds
   * @adminMethod
   */
  function bulkDeleteProducts(productIds: string[]): Promise<BulkDeleteProductsResponse>;
  /** @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function resetProductsDb(): Promise<void>;
  
  type metroinspectorV1Product_universal_d_Address = Address;
  type metroinspectorV1Product_universal_d_AddressStreetOneOf = AddressStreetOneOf;
  type metroinspectorV1Product_universal_d_StreetAddress = StreetAddress;
  type metroinspectorV1Product_universal_d_AddressLocation = AddressLocation;
  type metroinspectorV1Product_universal_d_Subdivision = Subdivision;
  type metroinspectorV1Product_universal_d_SubdivisionType = SubdivisionType;
  const metroinspectorV1Product_universal_d_SubdivisionType: typeof SubdivisionType;
  type metroinspectorV1Product_universal_d_VideoResolution = VideoResolution;
  type metroinspectorV1Product_universal_d_PageLink = PageLink;
  type metroinspectorV1Product_universal_d_LinkRel = LinkRel;
  const metroinspectorV1Product_universal_d_LinkRel: typeof LinkRel;
  type metroinspectorV1Product_universal_d_Variant = Variant;
  type metroinspectorV1Product_universal_d_MyAddress = MyAddress;
  type metroinspectorV1Product_universal_d_CreateProductRequest = CreateProductRequest;
  type metroinspectorV1Product_universal_d_CreateProductResponse = CreateProductResponse;
  type metroinspectorV1Product_universal_d_DeleteProductRequest = DeleteProductRequest;
  type metroinspectorV1Product_universal_d_DeleteProductResponse = DeleteProductResponse;
  type metroinspectorV1Product_universal_d_UpdateProductRequest = UpdateProductRequest;
  type metroinspectorV1Product_universal_d_UpdateProductResponse = UpdateProductResponse;
  type metroinspectorV1Product_universal_d_GetProductRequest = GetProductRequest;
  type metroinspectorV1Product_universal_d_GetProductResponse = GetProductResponse;
  type metroinspectorV1Product_universal_d_GetProductsStartWithRequest = GetProductsStartWithRequest;
  type metroinspectorV1Product_universal_d_GetProductsStartWithResponse = GetProductsStartWithResponse;
  type metroinspectorV1Product_universal_d_QueryProductsRequest = QueryProductsRequest;
  type metroinspectorV1Product_universal_d_QueryV2 = QueryV2;
  type metroinspectorV1Product_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type metroinspectorV1Product_universal_d_Sorting = Sorting;
  type metroinspectorV1Product_universal_d_SortOrder = SortOrder;
  const metroinspectorV1Product_universal_d_SortOrder: typeof SortOrder;
  type metroinspectorV1Product_universal_d_Paging = Paging;
  type metroinspectorV1Product_universal_d_CursorPaging = CursorPaging;
  type metroinspectorV1Product_universal_d_QueryProductsResponse = QueryProductsResponse;
  type metroinspectorV1Product_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type metroinspectorV1Product_universal_d_Cursors = Cursors;
  type metroinspectorV1Product_universal_d_BulkCreateProductsRequest = BulkCreateProductsRequest;
  type metroinspectorV1Product_universal_d_BulkCreateProductsResponse = BulkCreateProductsResponse;
  type metroinspectorV1Product_universal_d_ItemMetadata = ItemMetadata;
  type metroinspectorV1Product_universal_d_ApplicationError = ApplicationError;
  type metroinspectorV1Product_universal_d_BulkProductResult = BulkProductResult;
  type metroinspectorV1Product_universal_d_BulkActionMetadata = BulkActionMetadata;
  type metroinspectorV1Product_universal_d_BulkUpdateProductsRequest = BulkUpdateProductsRequest;
  type metroinspectorV1Product_universal_d_MaskedProduct = MaskedProduct;
  type metroinspectorV1Product_universal_d_BulkUpdateProductsResponse = BulkUpdateProductsResponse;
  type metroinspectorV1Product_universal_d_BulkUpdateProductsResponseBulkProductResult = BulkUpdateProductsResponseBulkProductResult;
  type metroinspectorV1Product_universal_d_BulkDeleteProductsRequest = BulkDeleteProductsRequest;
  type metroinspectorV1Product_universal_d_BulkDeleteProductsResponse = BulkDeleteProductsResponse;
  type metroinspectorV1Product_universal_d_BulkDeleteProductsResponseBulkProductResult = BulkDeleteProductsResponseBulkProductResult;
  type metroinspectorV1Product_universal_d_ResetProductsDbRequest = ResetProductsDbRequest;
  type metroinspectorV1Product_universal_d_ResetProductsDbResponse = ResetProductsDbResponse;
  type metroinspectorV1Product_universal_d_Product = Product;
  const metroinspectorV1Product_universal_d_createProduct: typeof createProduct;
  type metroinspectorV1Product_universal_d_CreateProductOptions = CreateProductOptions;
  const metroinspectorV1Product_universal_d_deleteProduct: typeof deleteProduct;
  const metroinspectorV1Product_universal_d_updateProduct: typeof updateProduct;
  type metroinspectorV1Product_universal_d_UpdateProductOptions = UpdateProductOptions;
  const metroinspectorV1Product_universal_d_getProduct: typeof getProduct;
  const metroinspectorV1Product_universal_d_getProductsStartWith: typeof getProductsStartWith;
  type metroinspectorV1Product_universal_d_GetProductsStartWithOptions = GetProductsStartWithOptions;
  const metroinspectorV1Product_universal_d_queryProducts: typeof queryProducts;
  type metroinspectorV1Product_universal_d_QueryProductsOptions = QueryProductsOptions;
  type metroinspectorV1Product_universal_d_ProductsQueryResult = ProductsQueryResult;
  type metroinspectorV1Product_universal_d_ProductsQueryBuilder = ProductsQueryBuilder;
  const metroinspectorV1Product_universal_d_bulkCreateProducts: typeof bulkCreateProducts;
  type metroinspectorV1Product_universal_d_BulkCreateProductsOptions = BulkCreateProductsOptions;
  const metroinspectorV1Product_universal_d_bulkUpdateProducts: typeof bulkUpdateProducts;
  type metroinspectorV1Product_universal_d_BulkUpdateProductsOptions = BulkUpdateProductsOptions;
  const metroinspectorV1Product_universal_d_bulkDeleteProducts: typeof bulkDeleteProducts;
  const metroinspectorV1Product_universal_d_resetProductsDb: typeof resetProductsDb;
  namespace metroinspectorV1Product_universal_d {
    export {
      metroinspectorV1Product_universal_d_Address as Address,
      metroinspectorV1Product_universal_d_AddressStreetOneOf as AddressStreetOneOf,
      metroinspectorV1Product_universal_d_StreetAddress as StreetAddress,
      metroinspectorV1Product_universal_d_AddressLocation as AddressLocation,
      metroinspectorV1Product_universal_d_Subdivision as Subdivision,
      metroinspectorV1Product_universal_d_SubdivisionType as SubdivisionType,
      metroinspectorV1Product_universal_d_VideoResolution as VideoResolution,
      metroinspectorV1Product_universal_d_PageLink as PageLink,
      metroinspectorV1Product_universal_d_LinkRel as LinkRel,
      metroinspectorV1Product_universal_d_Variant as Variant,
      metroinspectorV1Product_universal_d_MyAddress as MyAddress,
      metroinspectorV1Product_universal_d_CreateProductRequest as CreateProductRequest,
      metroinspectorV1Product_universal_d_CreateProductResponse as CreateProductResponse,
      metroinspectorV1Product_universal_d_DeleteProductRequest as DeleteProductRequest,
      metroinspectorV1Product_universal_d_DeleteProductResponse as DeleteProductResponse,
      metroinspectorV1Product_universal_d_UpdateProductRequest as UpdateProductRequest,
      metroinspectorV1Product_universal_d_UpdateProductResponse as UpdateProductResponse,
      metroinspectorV1Product_universal_d_GetProductRequest as GetProductRequest,
      metroinspectorV1Product_universal_d_GetProductResponse as GetProductResponse,
      metroinspectorV1Product_universal_d_GetProductsStartWithRequest as GetProductsStartWithRequest,
      metroinspectorV1Product_universal_d_GetProductsStartWithResponse as GetProductsStartWithResponse,
      metroinspectorV1Product_universal_d_QueryProductsRequest as QueryProductsRequest,
      metroinspectorV1Product_universal_d_QueryV2 as QueryV2,
      metroinspectorV1Product_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      metroinspectorV1Product_universal_d_Sorting as Sorting,
      metroinspectorV1Product_universal_d_SortOrder as SortOrder,
      metroinspectorV1Product_universal_d_Paging as Paging,
      metroinspectorV1Product_universal_d_CursorPaging as CursorPaging,
      metroinspectorV1Product_universal_d_QueryProductsResponse as QueryProductsResponse,
      metroinspectorV1Product_universal_d_PagingMetadataV2 as PagingMetadataV2,
      metroinspectorV1Product_universal_d_Cursors as Cursors,
      metroinspectorV1Product_universal_d_BulkCreateProductsRequest as BulkCreateProductsRequest,
      metroinspectorV1Product_universal_d_BulkCreateProductsResponse as BulkCreateProductsResponse,
      metroinspectorV1Product_universal_d_ItemMetadata as ItemMetadata,
      metroinspectorV1Product_universal_d_ApplicationError as ApplicationError,
      metroinspectorV1Product_universal_d_BulkProductResult as BulkProductResult,
      metroinspectorV1Product_universal_d_BulkActionMetadata as BulkActionMetadata,
      metroinspectorV1Product_universal_d_BulkUpdateProductsRequest as BulkUpdateProductsRequest,
      metroinspectorV1Product_universal_d_MaskedProduct as MaskedProduct,
      metroinspectorV1Product_universal_d_BulkUpdateProductsResponse as BulkUpdateProductsResponse,
      metroinspectorV1Product_universal_d_BulkUpdateProductsResponseBulkProductResult as BulkUpdateProductsResponseBulkProductResult,
      metroinspectorV1Product_universal_d_BulkDeleteProductsRequest as BulkDeleteProductsRequest,
      metroinspectorV1Product_universal_d_BulkDeleteProductsResponse as BulkDeleteProductsResponse,
      metroinspectorV1Product_universal_d_BulkDeleteProductsResponseBulkProductResult as BulkDeleteProductsResponseBulkProductResult,
      metroinspectorV1Product_universal_d_ResetProductsDbRequest as ResetProductsDbRequest,
      metroinspectorV1Product_universal_d_ResetProductsDbResponse as ResetProductsDbResponse,
      metroinspectorV1Product_universal_d_Product as Product,
      metroinspectorV1Product_universal_d_createProduct as createProduct,
      metroinspectorV1Product_universal_d_CreateProductOptions as CreateProductOptions,
      metroinspectorV1Product_universal_d_deleteProduct as deleteProduct,
      metroinspectorV1Product_universal_d_updateProduct as updateProduct,
      metroinspectorV1Product_universal_d_UpdateProductOptions as UpdateProductOptions,
      metroinspectorV1Product_universal_d_getProduct as getProduct,
      metroinspectorV1Product_universal_d_getProductsStartWith as getProductsStartWith,
      metroinspectorV1Product_universal_d_GetProductsStartWithOptions as GetProductsStartWithOptions,
      metroinspectorV1Product_universal_d_queryProducts as queryProducts,
      metroinspectorV1Product_universal_d_QueryProductsOptions as QueryProductsOptions,
      metroinspectorV1Product_universal_d_ProductsQueryResult as ProductsQueryResult,
      metroinspectorV1Product_universal_d_ProductsQueryBuilder as ProductsQueryBuilder,
      metroinspectorV1Product_universal_d_bulkCreateProducts as bulkCreateProducts,
      metroinspectorV1Product_universal_d_BulkCreateProductsOptions as BulkCreateProductsOptions,
      metroinspectorV1Product_universal_d_bulkUpdateProducts as bulkUpdateProducts,
      metroinspectorV1Product_universal_d_BulkUpdateProductsOptions as BulkUpdateProductsOptions,
      metroinspectorV1Product_universal_d_bulkDeleteProducts as bulkDeleteProducts,
      metroinspectorV1Product_universal_d_resetProductsDb as resetProductsDb,
    };
  }
  
  export { metroinspectorV1Product_universal_d as products };
}
