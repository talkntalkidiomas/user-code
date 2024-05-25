declare module "wix-stores-backend-poc.v2" {
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Collection {
      /**
       * Collection ID (generated automatically by the catalog)
       * @readonly
       */
      _id?: string | null;
      /** Collection name */
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
      /** Collection description. The description length without HTML must not exceed 2000 characters (10K includes HTML) */
      description?: string | null;
      /** Collection slug */
      slug?: string | null;
      /** Collection visibility. Only impacts dynamic pages, no impact on static pages */
      visible?: boolean | null;
  }
  interface Media$1 {
      /** Primary media (image, video etc) associated with this product. */
      mainMedia?: MediaItem$1;
      /** Media (images, videos etc) associated with this product. */
      items?: MediaItem$1[];
  }
  interface MediaItem$1 extends MediaItemItemOneOf$1 {
      /** Media item thumbnail details. */
      thumbnail?: MediaItemUrlAndSize$1;
      /** Media item type (image, video, etc.). */
      mediaType?: MediaItemType$1;
      /** Media item title. */
      title?: string;
      /** Media ID (for example, `"nsplsh_306d666a123a4a74306459~mv2_d_4517_2992_s_4_2.jpg"`). */
      _id?: string;
      /** Image data (URL, size). */
      image?: MediaItemUrlAndSize$1;
      /** Video data (URL, size). */
      video?: MediaItemVideo$1;
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
  enum MediaItemType$1 {
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
  interface GetCollectionRequest {
      /** Requested collection ID. */
      collectionId: string;
      /**
       * Whether to return the `collection.numberOfProducts` field in the response.
       * Defaults to false, in which case the value of `collection.numberOfProducts` will be 0.
       */
      includeNumberOfProducts?: boolean;
      /** Include description in response. When False, description will be null */
      includeDescription?: boolean;
  }
  interface GetCollectionResponse {
      collection?: Collection;
  }
  interface QueryCollectionsRequest {
      query?: PlatformQuery$1;
      /** Whether number of products should be included in the response. */
      includeNumberOfProducts?: boolean;
      /** Include description in response. When False, description will be null */
      includeDescription?: boolean;
  }
  interface PlatformQuery$1 extends PlatformQueryPagingMethodOneOf$1 {
      /** Filter object. */
      filter?: Record<string, any> | null;
      /** Sorting options. For example, `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]`. */
      sort?: Sorting$1[];
      /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
      paging?: PlatformPaging$1;
  }
  /** @oneof */
  interface PlatformQueryPagingMethodOneOf$1 {
      /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
      paging?: PlatformPaging$1;
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
  interface QueryCollectionsResponse {
      collections?: Collection[];
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
  /** @param collectionId - Requested collection ID.
   * @public
   * @requiredField collectionId
   */
  function getCollection(collectionId: string, options?: GetCollectionOptions): Promise<Collection>;
  interface GetCollectionOptions {
      /**
       * Whether to return the `collection.numberOfProducts` field in the response.
       * Defaults to false, in which case the value of `collection.numberOfProducts` will be 0.
       */
      includeNumberOfProducts?: boolean;
      /** Include description in response. When False, description will be null */
      includeDescription?: boolean;
  }
  /** @public */
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
      items: Collection[];
      query: CollectionsQueryBuilder;
      next: () => Promise<CollectionsQueryResult>;
      prev: () => Promise<CollectionsQueryResult>;
  }
  interface CollectionsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: string, value: any) => CollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: string, value: any) => CollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       */
      startsWith: (propertyName: string, value: string) => CollectionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       */
      hasSome: (propertyName: string, value: any[]) => CollectionsQueryBuilder;
      in: (propertyName: string, value: any) => CollectionsQueryBuilder;
      exists: (propertyName: string, value: boolean) => CollectionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: string[]) => CollectionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: string[]) => CollectionsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => CollectionsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results. */
      skip: (skip: number) => CollectionsQueryBuilder;
      find: () => Promise<CollectionsQueryResult>;
  }
  
  type storesPocV1Collection_universal_d_Collection = Collection;
  type storesPocV1Collection_universal_d_GetCollectionRequest = GetCollectionRequest;
  type storesPocV1Collection_universal_d_GetCollectionResponse = GetCollectionResponse;
  type storesPocV1Collection_universal_d_QueryCollectionsRequest = QueryCollectionsRequest;
  type storesPocV1Collection_universal_d_QueryCollectionsResponse = QueryCollectionsResponse;
  const storesPocV1Collection_universal_d_getCollection: typeof getCollection;
  type storesPocV1Collection_universal_d_GetCollectionOptions = GetCollectionOptions;
  const storesPocV1Collection_universal_d_queryCollections: typeof queryCollections;
  type storesPocV1Collection_universal_d_CollectionsQueryResult = CollectionsQueryResult;
  type storesPocV1Collection_universal_d_CollectionsQueryBuilder = CollectionsQueryBuilder;
  namespace storesPocV1Collection_universal_d {
    export {
      __debug$1 as __debug,
      storesPocV1Collection_universal_d_Collection as Collection,
      Media$1 as Media,
      MediaItem$1 as MediaItem,
      MediaItemItemOneOf$1 as MediaItemItemOneOf,
      MediaItemUrlAndSize$1 as MediaItemUrlAndSize,
      MediaItemType$1 as MediaItemType,
      MediaItemVideo$1 as MediaItemVideo,
      storesPocV1Collection_universal_d_GetCollectionRequest as GetCollectionRequest,
      storesPocV1Collection_universal_d_GetCollectionResponse as GetCollectionResponse,
      storesPocV1Collection_universal_d_QueryCollectionsRequest as QueryCollectionsRequest,
      PlatformQuery$1 as PlatformQuery,
      PlatformQueryPagingMethodOneOf$1 as PlatformQueryPagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      PlatformPaging$1 as PlatformPaging,
      storesPocV1Collection_universal_d_QueryCollectionsResponse as QueryCollectionsResponse,
      PlatformPagingMetadata$1 as PlatformPagingMetadata,
      Cursors$1 as Cursors,
      storesPocV1Collection_universal_d_getCollection as getCollection,
      storesPocV1Collection_universal_d_GetCollectionOptions as GetCollectionOptions,
      storesPocV1Collection_universal_d_queryCollections as queryCollections,
      storesPocV1Collection_universal_d_CollectionsQueryResult as CollectionsQueryResult,
      storesPocV1Collection_universal_d_CollectionsQueryBuilder as CollectionsQueryBuilder,
    };
  }
  
  const __debug: {
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
      /** Product name. */
      name?: string | null;
      /** A friendly URL name (generated automatically by the catalog when a product is created), can be updated. */
      slug?: string;
      /** Whether the product is visible to site visitors. */
      visible?: boolean | null;
      /** Currently, only creating physical products ( `"productType": "physical"` ) is supported via the API. */
      productType?: ProductType;
      /** Product description. Accepts [rich text](https://dev.wix.com/api/rest/wix-stores/rich-text). */
      description?: string | null;
      /** Stock keeping unit (if variant management is enabled, SKUs will be set per variant, and this field will be empty). */
      sku?: string | null;
      /** Product weight (if variant management is enabled, weight will be set per variant, and this field will be empty). */
      weight?: number | null;
      /**
       * Product weight range. The minimum and maximum weights of all the variants.
       * com.wix.ecommerce.catalog_spi.api.v1.NumericPropertyRange weight_range = 32 [(wix.api.readOnly) = true];
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
       * com.wix.ecommerce.catalog_spi.api.v1.NumericPropertyRange price_range = 31 [(wix.api.readOnly) = true];
       * Cost and profit data.
       */
      costAndProfitData?: CostAndProfitData;
      /**
       * Product cost range. The minimum and maximum costs of all the variants.
       * com.wix.ecommerce.catalog_spi.api.v1.NumericPropertyRange cost_range = 33 [(wix.api.readOnly) = true];
       * Price per unit data.
       */
      pricePerUnitData?: PricePerUnitData;
      /**
       * Additional text that the store owner can assign to the product (e.g. shipping details, refund policy, etc.). Currently writable only from the UI.
       * @readonly
       */
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
      /** Whether variants are being managed for this product - enables unique SKU, price and weight per variant. Also affects inventory data. */
      manageVariants?: boolean | null;
      /** Options (color, size, etc) for this product. */
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
      discount?: Discount;
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
       * google.protobuf.Timestamp last_updated = 24 [(wix.api.readOnly) = true];
       * Date and time the product was created.
       * google.protobuf.Timestamp created_date = 34 [(wix.api.readOnly) = true];
       * Custom SEO data for the product.
       * com.wixpress.advanced.seo.SeoSchema seo_data = 27;
       * Product ribbon. Used to highlight relevant information about a product. For example, "Sale", "New Arrival", "Sold Out".
       */
      ribbon?: string | null;
      /** Product brand. Including a brand name can help improve site and product [visibility on search engines](https://support.wix.com/en/article/adding-brand-names-to-boost-product-page-seo-in-wix-stores). */
      brand?: string | null;
      /**
       * tax group id
       * @internal
       * @readonly
       */
      taxGroupId?: string | null;
      /**
       * internal field used by import/export to know how to link products in csv file to product ids
       * @internal
       * @readonly
       */
      exportProductId?: string;
  }
  enum ProductType {
      unspecified_product_type = "unspecified_product_type",
      physical = "physical",
      digital = "digital"
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
      mainMedia?: MediaItem;
      /** Media (images, videos etc) associated with this product. */
      items?: MediaItem[];
  }
  interface MediaItem extends MediaItemItemOneOf {
      /** Media item thumbnail details. */
      thumbnail?: MediaItemUrlAndSize;
      /** Media item type (image, video, etc.). */
      mediaType?: MediaItemType;
      /** Media item title. */
      title?: string;
      /** Media ID (for example, `"nsplsh_306d666a123a4a74306459~mv2_d_4517_2992_s_4_2.jpg"`). */
      _id?: string;
      /** Image data (URL, size). */
      image?: MediaItemUrlAndSize;
      /** Video data (URL, size). */
      video?: MediaItemVideo;
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
  enum MediaItemType {
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
      /** Option name (e.g., color, size) */
      name?: string;
      /** Choices available for this option */
      choices?: Choice[];
  }
  enum OptionType {
      unspecified_option_type = "unspecified_option_type",
      drop_down = "drop_down",
      color = "color"
  }
  interface Choice {
      /** Color hex value or choice name */
      value?: string;
      /** Choice name */
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
  interface Discount {
      /** Discount type: amount / percent */
      type?: DiscountType;
      /** Discount value */
      value?: number;
  }
  enum DiscountType {
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
  interface GetProductRequest {
      /** Requested product ID. */
      productId: string;
      /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
      includeMerchantSpecificData?: boolean;
  }
  interface GetProductResponse {
      /** Requested product data. */
      product?: Product;
  }
  interface QueryProductsRequest {
      query?: PlatformQuery;
      /** Whether variants should be included in the response. */
      includeVariants?: boolean;
      /** Whether hidden products should be included in the response. Requires permissions to manage products. */
      includeHiddenProducts?: boolean;
      /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
      includeMerchantSpecificData?: boolean;
  }
  interface PlatformQuery extends PlatformQueryPagingMethodOneOf {
      /** Filter object. */
      filter?: Record<string, any> | null;
      /** Sorting options. For example, `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]`. */
      sort?: Sorting[];
      /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
      paging?: PlatformPaging;
  }
  /** @oneof */
  interface PlatformQueryPagingMethodOneOf {
      /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
      paging?: PlatformPaging;
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
  interface QueryProductsResponse {
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
  /** @param productId - Requested product ID.
   * @public
   * @requiredField productId
   * @returns Requested product data.
   */
  function getProduct(productId: string, options?: GetProductOptions): Promise<Product>;
  interface GetProductOptions {
      /** Whether merchant specific data should be included in the response. Requires permissions to manage products. */
      includeMerchantSpecificData?: boolean;
  }
  /** @public */
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
       */
      eq: (propertyName: string, value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: string, value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ge: (propertyName: string, value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      gt: (propertyName: string, value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      le: (propertyName: string, value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      lt: (propertyName: string, value: any) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       */
      startsWith: (propertyName: string, value: string) => ProductsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       */
      hasSome: (propertyName: string, value: any[]) => ProductsQueryBuilder;
      in: (propertyName: string, value: any) => ProductsQueryBuilder;
      exists: (propertyName: string, value: boolean) => ProductsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: string[]) => ProductsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: string[]) => ProductsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => ProductsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results. */
      skip: (skip: number) => ProductsQueryBuilder;
      find: () => Promise<ProductsQueryResult>;
  }
  
  const storesPocV1Product_universal_d___debug: typeof __debug;
  type storesPocV1Product_universal_d_Product = Product;
  type storesPocV1Product_universal_d_ProductType = ProductType;
  const storesPocV1Product_universal_d_ProductType: typeof ProductType;
  type storesPocV1Product_universal_d_Stock = Stock;
  type storesPocV1Product_universal_d_InventoryStatus = InventoryStatus;
  const storesPocV1Product_universal_d_InventoryStatus: typeof InventoryStatus;
  type storesPocV1Product_universal_d_PriceData = PriceData;
  type storesPocV1Product_universal_d_FormattedPrice = FormattedPrice;
  type storesPocV1Product_universal_d_CostAndProfitData = CostAndProfitData;
  type storesPocV1Product_universal_d_PricePerUnitData = PricePerUnitData;
  type storesPocV1Product_universal_d_MeasurementUnit = MeasurementUnit;
  const storesPocV1Product_universal_d_MeasurementUnit: typeof MeasurementUnit;
  type storesPocV1Product_universal_d_AdditionalInfoSection = AdditionalInfoSection;
  type storesPocV1Product_universal_d_Ribbon = Ribbon;
  type storesPocV1Product_universal_d_Media = Media;
  type storesPocV1Product_universal_d_MediaItem = MediaItem;
  type storesPocV1Product_universal_d_MediaItemItemOneOf = MediaItemItemOneOf;
  type storesPocV1Product_universal_d_MediaItemUrlAndSize = MediaItemUrlAndSize;
  type storesPocV1Product_universal_d_MediaItemType = MediaItemType;
  const storesPocV1Product_universal_d_MediaItemType: typeof MediaItemType;
  type storesPocV1Product_universal_d_MediaItemVideo = MediaItemVideo;
  type storesPocV1Product_universal_d_CustomTextField = CustomTextField;
  type storesPocV1Product_universal_d_ProductOption = ProductOption;
  type storesPocV1Product_universal_d_OptionType = OptionType;
  const storesPocV1Product_universal_d_OptionType: typeof OptionType;
  type storesPocV1Product_universal_d_Choice = Choice;
  type storesPocV1Product_universal_d_PageUrl = PageUrl;
  type storesPocV1Product_universal_d_Discount = Discount;
  type storesPocV1Product_universal_d_DiscountType = DiscountType;
  const storesPocV1Product_universal_d_DiscountType: typeof DiscountType;
  type storesPocV1Product_universal_d_Variant = Variant;
  type storesPocV1Product_universal_d_VariantDataWithNoStock = VariantDataWithNoStock;
  type storesPocV1Product_universal_d_VariantStock = VariantStock;
  type storesPocV1Product_universal_d_GetProductRequest = GetProductRequest;
  type storesPocV1Product_universal_d_GetProductResponse = GetProductResponse;
  type storesPocV1Product_universal_d_QueryProductsRequest = QueryProductsRequest;
  type storesPocV1Product_universal_d_PlatformQuery = PlatformQuery;
  type storesPocV1Product_universal_d_PlatformQueryPagingMethodOneOf = PlatformQueryPagingMethodOneOf;
  type storesPocV1Product_universal_d_Sorting = Sorting;
  type storesPocV1Product_universal_d_SortOrder = SortOrder;
  const storesPocV1Product_universal_d_SortOrder: typeof SortOrder;
  type storesPocV1Product_universal_d_PlatformPaging = PlatformPaging;
  type storesPocV1Product_universal_d_QueryProductsResponse = QueryProductsResponse;
  type storesPocV1Product_universal_d_PlatformPagingMetadata = PlatformPagingMetadata;
  type storesPocV1Product_universal_d_Cursors = Cursors;
  const storesPocV1Product_universal_d_getProduct: typeof getProduct;
  type storesPocV1Product_universal_d_GetProductOptions = GetProductOptions;
  const storesPocV1Product_universal_d_queryProducts: typeof queryProducts;
  type storesPocV1Product_universal_d_ProductsQueryResult = ProductsQueryResult;
  type storesPocV1Product_universal_d_ProductsQueryBuilder = ProductsQueryBuilder;
  namespace storesPocV1Product_universal_d {
    export {
      storesPocV1Product_universal_d___debug as __debug,
      storesPocV1Product_universal_d_Product as Product,
      storesPocV1Product_universal_d_ProductType as ProductType,
      storesPocV1Product_universal_d_Stock as Stock,
      storesPocV1Product_universal_d_InventoryStatus as InventoryStatus,
      storesPocV1Product_universal_d_PriceData as PriceData,
      storesPocV1Product_universal_d_FormattedPrice as FormattedPrice,
      storesPocV1Product_universal_d_CostAndProfitData as CostAndProfitData,
      storesPocV1Product_universal_d_PricePerUnitData as PricePerUnitData,
      storesPocV1Product_universal_d_MeasurementUnit as MeasurementUnit,
      storesPocV1Product_universal_d_AdditionalInfoSection as AdditionalInfoSection,
      storesPocV1Product_universal_d_Ribbon as Ribbon,
      storesPocV1Product_universal_d_Media as Media,
      storesPocV1Product_universal_d_MediaItem as MediaItem,
      storesPocV1Product_universal_d_MediaItemItemOneOf as MediaItemItemOneOf,
      storesPocV1Product_universal_d_MediaItemUrlAndSize as MediaItemUrlAndSize,
      storesPocV1Product_universal_d_MediaItemType as MediaItemType,
      storesPocV1Product_universal_d_MediaItemVideo as MediaItemVideo,
      storesPocV1Product_universal_d_CustomTextField as CustomTextField,
      storesPocV1Product_universal_d_ProductOption as ProductOption,
      storesPocV1Product_universal_d_OptionType as OptionType,
      storesPocV1Product_universal_d_Choice as Choice,
      storesPocV1Product_universal_d_PageUrl as PageUrl,
      storesPocV1Product_universal_d_Discount as Discount,
      storesPocV1Product_universal_d_DiscountType as DiscountType,
      storesPocV1Product_universal_d_Variant as Variant,
      storesPocV1Product_universal_d_VariantDataWithNoStock as VariantDataWithNoStock,
      storesPocV1Product_universal_d_VariantStock as VariantStock,
      storesPocV1Product_universal_d_GetProductRequest as GetProductRequest,
      storesPocV1Product_universal_d_GetProductResponse as GetProductResponse,
      storesPocV1Product_universal_d_QueryProductsRequest as QueryProductsRequest,
      storesPocV1Product_universal_d_PlatformQuery as PlatformQuery,
      storesPocV1Product_universal_d_PlatformQueryPagingMethodOneOf as PlatformQueryPagingMethodOneOf,
      storesPocV1Product_universal_d_Sorting as Sorting,
      storesPocV1Product_universal_d_SortOrder as SortOrder,
      storesPocV1Product_universal_d_PlatformPaging as PlatformPaging,
      storesPocV1Product_universal_d_QueryProductsResponse as QueryProductsResponse,
      storesPocV1Product_universal_d_PlatformPagingMetadata as PlatformPagingMetadata,
      storesPocV1Product_universal_d_Cursors as Cursors,
      storesPocV1Product_universal_d_getProduct as getProduct,
      storesPocV1Product_universal_d_GetProductOptions as GetProductOptions,
      storesPocV1Product_universal_d_queryProducts as queryProducts,
      storesPocV1Product_universal_d_ProductsQueryResult as ProductsQueryResult,
      storesPocV1Product_universal_d_ProductsQueryBuilder as ProductsQueryBuilder,
    };
  }
  
  export { storesPocV1Collection_universal_d as collections, storesPocV1Product_universal_d as products };
}
