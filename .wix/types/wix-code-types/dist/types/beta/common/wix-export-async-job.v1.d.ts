declare module "wix-export-async-job.v1" {
  interface ExportAsyncJob {
      /** @readonly */
      _id?: string;
      data?: ExportAsyncJobData;
      status?: Status;
      /** @readonly */
      createDate?: Date;
      /** @readonly */
      updateDate?: Date;
  }
  interface ExportAsyncJobData {
      /** original request data for the export */
      query?: ExportQueryV2;
      /** translated CSV headers */
      fields?: FieldDescriptor[];
      arrayFieldDelimiter?: ArrayFieldDelimiter;
      /** The target method to query data from */
      methodMetadata?: MethodMetadata;
      /** Custom spec for the target method's request/response */
      methodSpec?: MethodSpec;
      userId?: string;
      subDir?: string | null;
      format?: string;
      uploadId?: string;
      saveAs?: string | null;
      /** the progress of fetching all data update during the process multiple times */
      pagingMetadata?: PagingMetadataV2;
      iterationsCount?: number;
      processedItemsCount?: number;
      completionStep?: string | null;
      /** how many times the export was reset */
      resetCount?: number;
      /** at final step update the signed_url to download the result from */
      signedUrl?: string;
      /** when failed during the process update the error details */
      error?: Details;
      testParams?: Record<string, any> | null;
  }
  interface ExportQueryV2 extends ExportQueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: ExportCursorPaging;
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
  interface ExportQueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: ExportCursorPaging;
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
  interface ExportCursorPaging {
      limit?: number | null;
      cursor?: string | null;
  }
  interface FieldDescriptor {
      /** the path to the field out of the query response items */
      _id?: string;
      /** how to present the filed in the CSV headers (translated) */
      header?: string;
  }
  enum ArrayFieldDelimiter {
      SEMICOLON = "SEMICOLON",
      SEMICOLON_AND_SPACE = "SEMICOLON_AND_SPACE"
  }
  interface MethodMetadata {
      artifact?: string;
      service?: string;
      method?: string;
  }
  interface MethodSpec {
      requestQueryFieldNumber?: QueryFieldNumber;
      responseRepeatedFieldName?: string | null;
      responsePagingMetadataFieldName?: string | null;
  }
  enum QueryFieldNumber {
      /** message QuerySomethingRequest { .wix.common.QueryV2 query = 1; } */
      DEFAULT = "DEFAULT",
      FIELD_2 = "FIELD_2",
      FIELD_3 = "FIELD_3",
      FIELD_4 = "FIELD_4",
      FIELD_5 = "FIELD_5",
      FIELD_6 = "FIELD_6",
      FIELD_7 = "FIELD_7",
      /** message QuerySomethingRequest { .wix.common.QueryV2 query = 8; } */
      FIELD_8 = "FIELD_8",
      FIELD_9 = "FIELD_9"
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
  interface Details extends DetailsKindOneOf {
      applicationError?: ApplicationError;
      validationError?: ValidationError;
      systemError?: SystemError;
      /** deprecated in API's - to enable migration from rendering arbitrary tracing to rest response */
      tracing?: Record<string, string>;
  }
  /** @oneof */
  interface DetailsKindOneOf {
      applicationError?: ApplicationError;
      validationError?: ValidationError;
      systemError?: SystemError;
  }
  interface ApplicationError {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  /**
   * example result:
   * {
   * "fieldViolations": [
   * {
   * "field": "fieldA",
   * "description": "invalid music note. supported notes: [do,re,mi,fa,sol,la,ti]",
   * "violatedRule": "OTHER",
   * "ruleName": "INVALID_NOTE",
   * "data": {
   * "value": "FI"
   * }
   * },
   * {
   * "field": "fieldB",
   * "description": "field value out of range. supported range: [0-20]",
   * "violatedRule": "MAX",
   * "data": {
   * "threshold": 20
   * }
   * },
   * {
   * "field": "fieldC",
   * "description": "invalid phone number. provide a valid phone number of size: [7-12], supported characters: [0-9, +, -, (, )]",
   * "violatedRule": "FORMAT",
   * "data": {
   * "type": "PHONE"
   * }
   * }
   * ]
   * }
   */
  interface ValidationError {
      fieldViolations?: FieldViolation[];
  }
  enum RuleType {
      VALIDATION = "VALIDATION",
      OTHER = "OTHER",
      MAX = "MAX",
      MIN = "MIN",
      MAX_LENGTH = "MAX_LENGTH",
      MIN_LENGTH = "MIN_LENGTH",
      MAX_SIZE = "MAX_SIZE",
      MIN_SIZE = "MIN_SIZE",
      FORMAT = "FORMAT",
      DECIMAL_LTE = "DECIMAL_LTE",
      DECIMAL_GTE = "DECIMAL_GTE",
      DECIMAL_LT = "DECIMAL_LT",
      DECIMAL_GT = "DECIMAL_GT",
      DECIMAL_MAX_SCALE = "DECIMAL_MAX_SCALE",
      INVALID_ENUM_VALUE = "INVALID_ENUM_VALUE",
      REQUIRED_FIELD = "REQUIRED_FIELD",
      FIELD_NOT_ALLOWED = "FIELD_NOT_ALLOWED",
      ONE_OF_ALIGNMENT = "ONE_OF_ALIGNMENT"
  }
  interface FieldViolation {
      field?: string;
      description?: string;
      violatedRule?: RuleType;
      /** applicable when violated_rule=OTHER */
      ruleName?: string | null;
      data?: Record<string, any> | null;
  }
  interface SystemError {
      /** Error code. */
      errorCode?: string | null;
  }
  enum Status {
      UNKNOWN = "UNKNOWN",
      /** Job was created, but not started yet. */
      INITIALIZED = "INITIALIZED",
      /** Job has started and is in progress. */
      PROCESSING = "PROCESSING",
      /** Job is finished. */
      FINISHED = "FINISHED",
      /** Job is failed */
      FAILED = "FAILED"
  }
  interface CreateExportAsyncJobRequest {
      /** WQL expression */
      query: ExportQueryV2;
      /** translated CSV headers */
      fields: FieldDescriptor[];
      arrayFieldDelimiter?: ArrayFieldDelimiter;
      /** The target method to query data from */
      methodMetadata: MethodMetadata;
      /** The target method to query data from */
      methodSpec?: MethodSpec;
      saveAs?: string | null;
      /** Test params */
      testParams?: Record<string, any> | null;
  }
  interface CreateExportAsyncJobResponse {
      /** The retrieved Exports */
      job?: ExportAsyncJob;
  }
  interface GetExportAsyncJobRequest {
      /** Id of the Export to retrieve */
      jobId: string;
  }
  interface GetExportAsyncJobResponse {
      /** The retrieved ExportAsyncJob */
      job?: ExportAsyncJob;
  }
  interface CancelExportAsyncJobRequest {
      /** Id of the Export to retrieve */
      jobId: string;
  }
  interface CancelExportAsyncJobResponse {
      /** The retrieved ExportAsyncJob */
      job?: ExportAsyncJob;
  }
  interface GenerateExportAsyncJobDownloadUrlRequest {
      /** Id of the Export to retrieve */
      jobId: string;
  }
  interface GenerateExportAsyncJobDownloadUrlResponse {
      /** The retrieved ExportAsyncJob */
      job?: ExportAsyncJob;
  }
  interface QueryRequestLoose {
      /** WQL expression */
      query?: ExportQueryV2;
  }
  interface QueryVariantsExportSpiResponse {
      items?: ProductOrVariant[];
      pagingMetadata?: PagingMetadataV2;
  }
  interface ProductOrVariant {
      kind?: string;
      product?: Product;
      variant?: StoreVariant;
  }
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
      /** Product description. Accepts [rich text](https://dev.wix.com/api/rest/wix-stores/rich-text). */
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
      /** Whether variants are being managed for this product - enables unique SKU, price and weight per variant. Also affects inventory data. */
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
      /**
       * tax group id
       * @internal
       */
      taxGroupId?: string | null;
      /**
       * internal field used by import/export to know how to link products in csv file to product ids
       * @internal
       * @readonly
       */
      exportProductId?: string;
      /**
       * Digital file which will be downloaded by buyer after successful purchase.
       * @internal
       * @readonly
       */
      digitalFile?: SecuredMedia;
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
      mainMedia?: MediaItem;
      /** Media (images, videos etc) associated with this product. */
      items?: MediaItem[];
  }
  interface MediaItem extends MediaItemItemOneOf {
      /** Image data (URL, size). */
      image?: MediaItemUrlAndSize;
      /** Video data (URL, size). */
      video?: MediaItemVideo;
      /** Media item thumbnail details. */
      thumbnail?: MediaItemUrlAndSize;
      /** Media item type (image, video, etc.). */
      mediaType?: MediaItemType;
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
  interface Discount {
      /**
       * Discount type:
       * + `"AMOUNT"`
       * + `"PERCENT"`
       */
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
  interface SecuredMedia {
      /** Media ID in Wix Media Manager. */
      _id?: string;
      /** Original filename. */
      fileName?: string;
      /** File type. */
      fileType?: FileType;
  }
  enum FileType {
      UNSPECIFIED = "UNSPECIFIED",
      SECURE_PICTURE = "SECURE_PICTURE",
      SECURE_VIDEO = "SECURE_VIDEO",
      SECURE_DOCUMENT = "SECURE_DOCUMENT",
      SECURE_MUSIC = "SECURE_MUSIC",
      SECURE_ARCHIVE = "SECURE_ARCHIVE"
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
      /** @internal */
      customFields?: Record<string, any>;
      /** Preorder information. */
      preorderInfo?: PreorderInfo;
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
  interface PreorderInfo {
      /** Whether the item is available for preorder. */
      enabled?: boolean;
      /** A message the buyer will see when the item is out of stock and preorder is enabled. */
      message?: string | null;
      /** Number of products that can be preordered after stock reaches zero. */
      limit?: number | null;
  }
  interface QueryProductsExportSpiResponse {
      items?: ProductOrVariantV2[];
      pagingMetadata?: PagingMetadataV2;
  }
  interface ProductOrVariantV2 {
      kind?: string;
      product?: Product;
      variant?: Variant;
  }
  /**
   * Creates a new Export
   * @param query - WQL expression
   * @internal
   * @documentationMaturity preview
   * @requiredField options.fields
   * @requiredField options.methodMetadata
   * @requiredField query
   * @adminMethod
   */
  function createExportAsyncJob(query: ExportQueryV2, options?: CreateExportAsyncJobOptions): Promise<CreateExportAsyncJobResponse>;
  interface CreateExportAsyncJobOptions {
      /** translated CSV headers */
      fields: FieldDescriptor[];
      arrayFieldDelimiter?: ArrayFieldDelimiter;
      /** The target method to query data from */
      methodMetadata: MethodMetadata;
      /** The target method to query data from */
      methodSpec?: MethodSpec;
      saveAs?: string | null;
      /** Test params */
      testParams?: Record<string, any> | null;
  }
  /**
   * Get a Export by id
   * @param jobId - Id of the Export to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField jobId
   * @adminMethod
   */
  function getExportAsyncJob(jobId: string): Promise<GetExportAsyncJobResponse>;
  /** @param jobId - Id of the Export to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField jobId
   * @adminMethod
   */
  function cancelExportAsyncJob(jobId: string): Promise<CancelExportAsyncJobResponse>;
  /** @param jobId - Id of the Export to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField jobId
   * @adminMethod
   */
  function generateExportAsyncJobDownloadUrl(jobId: string): Promise<GenerateExportAsyncJobDownloadUrlResponse>;
  
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_ExportAsyncJob = ExportAsyncJob;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_ExportAsyncJobData = ExportAsyncJobData;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_ExportQueryV2 = ExportQueryV2;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_ExportQueryV2PagingMethodOneOf = ExportQueryV2PagingMethodOneOf;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Sorting = Sorting;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_SortOrder = SortOrder;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_SortOrder: typeof SortOrder;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Paging = Paging;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_ExportCursorPaging = ExportCursorPaging;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_FieldDescriptor = FieldDescriptor;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_ArrayFieldDelimiter = ArrayFieldDelimiter;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_ArrayFieldDelimiter: typeof ArrayFieldDelimiter;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_MethodMetadata = MethodMetadata;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_MethodSpec = MethodSpec;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_QueryFieldNumber = QueryFieldNumber;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_QueryFieldNumber: typeof QueryFieldNumber;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Cursors = Cursors;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Details = Details;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_DetailsKindOneOf = DetailsKindOneOf;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_ApplicationError = ApplicationError;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_ValidationError = ValidationError;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_RuleType = RuleType;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_RuleType: typeof RuleType;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_FieldViolation = FieldViolation;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_SystemError = SystemError;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Status = Status;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_Status: typeof Status;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_CreateExportAsyncJobRequest = CreateExportAsyncJobRequest;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_CreateExportAsyncJobResponse = CreateExportAsyncJobResponse;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_GetExportAsyncJobRequest = GetExportAsyncJobRequest;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_GetExportAsyncJobResponse = GetExportAsyncJobResponse;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_CancelExportAsyncJobRequest = CancelExportAsyncJobRequest;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_CancelExportAsyncJobResponse = CancelExportAsyncJobResponse;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_GenerateExportAsyncJobDownloadUrlRequest = GenerateExportAsyncJobDownloadUrlRequest;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_GenerateExportAsyncJobDownloadUrlResponse = GenerateExportAsyncJobDownloadUrlResponse;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_QueryRequestLoose = QueryRequestLoose;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_QueryVariantsExportSpiResponse = QueryVariantsExportSpiResponse;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_ProductOrVariant = ProductOrVariant;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Product = Product;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_ProductType = ProductType;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_ProductType: typeof ProductType;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_NumericPropertyRange = NumericPropertyRange;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Stock = Stock;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_InventoryStatus = InventoryStatus;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_InventoryStatus: typeof InventoryStatus;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_PriceData = PriceData;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_FormattedPrice = FormattedPrice;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_CostAndProfitData = CostAndProfitData;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_PricePerUnitData = PricePerUnitData;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_MeasurementUnit = MeasurementUnit;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_MeasurementUnit: typeof MeasurementUnit;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_AdditionalInfoSection = AdditionalInfoSection;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Ribbon = Ribbon;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Media = Media;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_MediaItem = MediaItem;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_MediaItemItemOneOf = MediaItemItemOneOf;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_MediaItemUrlAndSize = MediaItemUrlAndSize;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_MediaItemType = MediaItemType;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_MediaItemType: typeof MediaItemType;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_MediaItemVideo = MediaItemVideo;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_CustomTextField = CustomTextField;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_ProductOption = ProductOption;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_OptionType = OptionType;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_OptionType: typeof OptionType;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Choice = Choice;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_PageUrl = PageUrl;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Discount = Discount;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_DiscountType = DiscountType;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_DiscountType: typeof DiscountType;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Variant = Variant;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_VariantDataWithNoStock = VariantDataWithNoStock;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_VariantStock = VariantStock;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_SeoSchema = SeoSchema;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Keyword = Keyword;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Tag = Tag;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_Settings = Settings;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_SecuredMedia = SecuredMedia;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_FileType = FileType;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_FileType: typeof FileType;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_StoreVariant = StoreVariant;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_PlatformMedia = PlatformMedia;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_PlatformMediaMediaOneOf = PlatformMediaMediaOneOf;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_VideoResolution = VideoResolution;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_PreorderInfo = PreorderInfo;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_QueryProductsExportSpiResponse = QueryProductsExportSpiResponse;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_ProductOrVariantV2 = ProductOrVariantV2;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_createExportAsyncJob: typeof createExportAsyncJob;
  type fedinfraExportserviceV1ExportAsyncJob_universal_d_CreateExportAsyncJobOptions = CreateExportAsyncJobOptions;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_getExportAsyncJob: typeof getExportAsyncJob;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_cancelExportAsyncJob: typeof cancelExportAsyncJob;
  const fedinfraExportserviceV1ExportAsyncJob_universal_d_generateExportAsyncJobDownloadUrl: typeof generateExportAsyncJobDownloadUrl;
  namespace fedinfraExportserviceV1ExportAsyncJob_universal_d {
    export {
      fedinfraExportserviceV1ExportAsyncJob_universal_d_ExportAsyncJob as ExportAsyncJob,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_ExportAsyncJobData as ExportAsyncJobData,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_ExportQueryV2 as ExportQueryV2,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_ExportQueryV2PagingMethodOneOf as ExportQueryV2PagingMethodOneOf,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Sorting as Sorting,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_SortOrder as SortOrder,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Paging as Paging,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_ExportCursorPaging as ExportCursorPaging,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_FieldDescriptor as FieldDescriptor,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_ArrayFieldDelimiter as ArrayFieldDelimiter,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_MethodMetadata as MethodMetadata,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_MethodSpec as MethodSpec,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_QueryFieldNumber as QueryFieldNumber,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_PagingMetadataV2 as PagingMetadataV2,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Cursors as Cursors,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Details as Details,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_DetailsKindOneOf as DetailsKindOneOf,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_ApplicationError as ApplicationError,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_ValidationError as ValidationError,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_RuleType as RuleType,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_FieldViolation as FieldViolation,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_SystemError as SystemError,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Status as Status,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_CreateExportAsyncJobRequest as CreateExportAsyncJobRequest,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_CreateExportAsyncJobResponse as CreateExportAsyncJobResponse,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_GetExportAsyncJobRequest as GetExportAsyncJobRequest,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_GetExportAsyncJobResponse as GetExportAsyncJobResponse,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_CancelExportAsyncJobRequest as CancelExportAsyncJobRequest,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_CancelExportAsyncJobResponse as CancelExportAsyncJobResponse,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_GenerateExportAsyncJobDownloadUrlRequest as GenerateExportAsyncJobDownloadUrlRequest,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_GenerateExportAsyncJobDownloadUrlResponse as GenerateExportAsyncJobDownloadUrlResponse,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_QueryRequestLoose as QueryRequestLoose,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_QueryVariantsExportSpiResponse as QueryVariantsExportSpiResponse,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_ProductOrVariant as ProductOrVariant,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Product as Product,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_ProductType as ProductType,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_NumericPropertyRange as NumericPropertyRange,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Stock as Stock,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_InventoryStatus as InventoryStatus,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_PriceData as PriceData,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_FormattedPrice as FormattedPrice,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_CostAndProfitData as CostAndProfitData,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_PricePerUnitData as PricePerUnitData,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_MeasurementUnit as MeasurementUnit,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_AdditionalInfoSection as AdditionalInfoSection,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Ribbon as Ribbon,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Media as Media,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_MediaItem as MediaItem,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_MediaItemItemOneOf as MediaItemItemOneOf,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_MediaItemUrlAndSize as MediaItemUrlAndSize,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_MediaItemType as MediaItemType,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_MediaItemVideo as MediaItemVideo,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_CustomTextField as CustomTextField,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_ProductOption as ProductOption,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_OptionType as OptionType,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Choice as Choice,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_PageUrl as PageUrl,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Discount as Discount,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_DiscountType as DiscountType,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Variant as Variant,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_VariantDataWithNoStock as VariantDataWithNoStock,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_VariantStock as VariantStock,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_SeoSchema as SeoSchema,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Keyword as Keyword,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Tag as Tag,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_Settings as Settings,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_SecuredMedia as SecuredMedia,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_FileType as FileType,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_StoreVariant as StoreVariant,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_PlatformMedia as PlatformMedia,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_PlatformMediaMediaOneOf as PlatformMediaMediaOneOf,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_VideoResolution as VideoResolution,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_PreorderInfo as PreorderInfo,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_QueryProductsExportSpiResponse as QueryProductsExportSpiResponse,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_ProductOrVariantV2 as ProductOrVariantV2,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_createExportAsyncJob as createExportAsyncJob,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_CreateExportAsyncJobOptions as CreateExportAsyncJobOptions,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_getExportAsyncJob as getExportAsyncJob,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_cancelExportAsyncJob as cancelExportAsyncJob,
      fedinfraExportserviceV1ExportAsyncJob_universal_d_generateExportAsyncJobDownloadUrl as generateExportAsyncJobDownloadUrl,
    };
  }
  
  export { fedinfraExportserviceV1ExportAsyncJob_universal_d as exportAsyncJob };
}
