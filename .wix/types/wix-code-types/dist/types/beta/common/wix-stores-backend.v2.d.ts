declare module "wix-stores-backend.v2" {
  const __debug$2: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
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
      /**
       * Custom SEO data for the collection.
       * @internal
       */
      seoSchema?: SeoSchema;
  }
  interface Media {
      /** Primary media (image, video etc) associated with this product. */
      mainMedia?: MediaItem$1;
      /** Media (images, videos etc) associated with this product. */
      items?: MediaItem$1[];
  }
  interface MediaItem$1 extends MediaItemItemOneOf {
      /** Media item thumbnail details. */
      thumbnail?: MediaItemUrlAndSize;
      /** Media item type (image, video, etc.). */
      mediaType?: MediaItemType$1;
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
  /**
   * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
   * The search engines use this information for ranking purposes, or to display snippets in the search results.
   * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
   */
  interface SeoSchema {
      /** SEO tags information. */
      tags?: Tag[];
      /** SEO general settings. */
      settings?: Settings;
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
       * A `{'key':'value'} pair object where each SEO tag property (`'name'`, `'content'`, `'rel'`, `'href'`) contains a value.
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
       * Whether the auto redirects feature creating `301 redirects` on a slug change is enabled.
       *
       *
       * Default: enabled
       */
      preventAutoRedirect?: boolean;
  }
  interface QueryCollectionsRequest {
      query?: PlatformQuery;
  }
  interface PlatformQuery extends PlatformQueryPagingMethodOneOf {
      /** Filter object. */
      filter?: Record<string, any> | null;
      /** Sorting options. For example, `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]`. */
      sort?: Sorting[];
      /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
      paging?: PlatformPaging;
      /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
      cursorPaging?: CursorPaging;
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
  interface QueryCollectionsResponse {
      collections?: Collection[];
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
  interface GetCollectionRequest {
      /** Requested collection ID. */
      _id: string;
  }
  interface GetCollectionResponse {
      collection?: Collection;
  }
  /**
   * Retrieves a list of up to 100 collections, given the provided paging, sorting and filtering.
   * See [Stores Pagination](https://dev.wix.com/api/rest/wix-stores/pagination) for more information.
   * @public */
  function queryCollections(): CollectionsQueryBuilder;
  interface QueryOffsetResult {
      currentPage: number;
      totalPages: number;
      totalCount: number;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface CollectionsQueryResult extends QueryOffsetResult {
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
  /**
   * Retrieves a collection with the provided ID.
   * @param _id - Requested collection ID.
   * @public
   * @requiredField _id
   */
  function getCollection(_id: string): Promise<Collection>;
  
  type storesCatalogV1Collection_universal_d_Collection = Collection;
  type storesCatalogV1Collection_universal_d_Media = Media;
  type storesCatalogV1Collection_universal_d_MediaItemItemOneOf = MediaItemItemOneOf;
  type storesCatalogV1Collection_universal_d_MediaItemUrlAndSize = MediaItemUrlAndSize;
  type storesCatalogV1Collection_universal_d_MediaItemVideo = MediaItemVideo;
  type storesCatalogV1Collection_universal_d_SeoSchema = SeoSchema;
  type storesCatalogV1Collection_universal_d_Tag = Tag;
  type storesCatalogV1Collection_universal_d_Settings = Settings;
  type storesCatalogV1Collection_universal_d_QueryCollectionsRequest = QueryCollectionsRequest;
  type storesCatalogV1Collection_universal_d_PlatformQuery = PlatformQuery;
  type storesCatalogV1Collection_universal_d_PlatformQueryPagingMethodOneOf = PlatformQueryPagingMethodOneOf;
  type storesCatalogV1Collection_universal_d_Sorting = Sorting;
  type storesCatalogV1Collection_universal_d_SortOrder = SortOrder;
  const storesCatalogV1Collection_universal_d_SortOrder: typeof SortOrder;
  type storesCatalogV1Collection_universal_d_PlatformPaging = PlatformPaging;
  type storesCatalogV1Collection_universal_d_CursorPaging = CursorPaging;
  type storesCatalogV1Collection_universal_d_QueryCollectionsResponse = QueryCollectionsResponse;
  type storesCatalogV1Collection_universal_d_PlatformPagingMetadata = PlatformPagingMetadata;
  type storesCatalogV1Collection_universal_d_Cursors = Cursors;
  type storesCatalogV1Collection_universal_d_GetCollectionRequest = GetCollectionRequest;
  type storesCatalogV1Collection_universal_d_GetCollectionResponse = GetCollectionResponse;
  const storesCatalogV1Collection_universal_d_queryCollections: typeof queryCollections;
  type storesCatalogV1Collection_universal_d_CollectionsQueryResult = CollectionsQueryResult;
  type storesCatalogV1Collection_universal_d_CollectionsQueryBuilder = CollectionsQueryBuilder;
  const storesCatalogV1Collection_universal_d_getCollection: typeof getCollection;
  namespace storesCatalogV1Collection_universal_d {
    export {
      __debug$2 as __debug,
      storesCatalogV1Collection_universal_d_Collection as Collection,
      storesCatalogV1Collection_universal_d_Media as Media,
      MediaItem$1 as MediaItem,
      storesCatalogV1Collection_universal_d_MediaItemItemOneOf as MediaItemItemOneOf,
      storesCatalogV1Collection_universal_d_MediaItemUrlAndSize as MediaItemUrlAndSize,
      MediaItemType$1 as MediaItemType,
      storesCatalogV1Collection_universal_d_MediaItemVideo as MediaItemVideo,
      storesCatalogV1Collection_universal_d_SeoSchema as SeoSchema,
      storesCatalogV1Collection_universal_d_Tag as Tag,
      storesCatalogV1Collection_universal_d_Settings as Settings,
      storesCatalogV1Collection_universal_d_QueryCollectionsRequest as QueryCollectionsRequest,
      storesCatalogV1Collection_universal_d_PlatformQuery as PlatformQuery,
      storesCatalogV1Collection_universal_d_PlatformQueryPagingMethodOneOf as PlatformQueryPagingMethodOneOf,
      storesCatalogV1Collection_universal_d_Sorting as Sorting,
      storesCatalogV1Collection_universal_d_SortOrder as SortOrder,
      storesCatalogV1Collection_universal_d_PlatformPaging as PlatformPaging,
      storesCatalogV1Collection_universal_d_CursorPaging as CursorPaging,
      storesCatalogV1Collection_universal_d_QueryCollectionsResponse as QueryCollectionsResponse,
      storesCatalogV1Collection_universal_d_PlatformPagingMetadata as PlatformPagingMetadata,
      storesCatalogV1Collection_universal_d_Cursors as Cursors,
      storesCatalogV1Collection_universal_d_GetCollectionRequest as GetCollectionRequest,
      storesCatalogV1Collection_universal_d_GetCollectionResponse as GetCollectionResponse,
      storesCatalogV1Collection_universal_d_queryCollections as queryCollections,
      storesCatalogV1Collection_universal_d_CollectionsQueryResult as CollectionsQueryResult,
      storesCatalogV1Collection_universal_d_CollectionsQueryBuilder as CollectionsQueryBuilder,
      storesCatalogV1Collection_universal_d_getCollection as getCollection,
    };
  }
  
  const __debug$1: {
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
      /**
       * Gift card information.
       * @internal
       */
      giftCard?: GiftCard;
      /**
       * ID of the checkout associated with this order.
       * @internal
       */
      checkoutId?: string | null;
      /**
       * Private API flag that allows using read-only "id" during order creation
       * @internal
       */
      isInternalOrderCreate?: boolean;
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
      /**
       * Contact Id. needed for cases where the user is the buyer and so it doesn't exist on the buyer info
       * @internal
       * @readonly
       */
      contactId?: string | null;
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
      /** Address line 1 (free text) */
      addressLine1?: string;
      /** Address line 1 (street) */
      street?: Street;
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
      /** Customer's tax ID */
      number?: string;
      /** tax type */
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
      /** Shipping option name. */
      deliveryOption?: string;
      /** Shipping option delivery time. */
      estimatedDeliveryTime?: string | null;
      /** Latest expected delivery date. */
      deliverByDate?: Date;
      /** Shipping region. */
      shippingRegion?: string | null;
      /**
       * Unique code of provided shipping option. For example, `"usps_std_overnight"`.
       * @readonly
       */
      code?: string | null;
      /** Shipment details (when this object describes shipment). */
      shipmentDetails?: ShipmentDetails;
      /** Pickup details (when this object describes pickup). */
      pickupDetails?: PickupDetails;
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
      /**
       * Line item refundedQuantity (from refund). No value means not refunded. Shows the number of line items that were refunded
       * @internal
       * @readonly
       */
      refundedQuantity?: number | null;
      /**
       * Digital file identifier, relevant only for items with type DIGITAL
       * @internal
       */
      digitalFile?: DigitalFile;
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
      WISH = "WISH"
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
      /**
       * Interval of recurring payment (optional: default value 1 will be used if not provided)
       * @internal
       */
      interval?: number | null;
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
      /**
       * Subscription option ID.
       * @internal
       */
      _id?: string | null;
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
      /**
       * Deprecated. Use externalRefund.
       * @internal
       */
      isManual?: boolean;
      /**
       * Deprecated. Use payment_provider_transaction_id.
       * @internal
       */
      providerTransactionId?: string | null;
      /**
       * Deprecated. Use id.
       * @internal
       */
      refundId?: string;
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
  interface OrderAddressUpdated {
      /**
       * Updated order data.
       * @readonly
       */
      order?: Order;
  }
  interface CreateOrderRequest {
      order: Order;
      /**
       * Additional order settings.
       * @internal
       */
      additionalOrderSettings?: AdditionalOrderSettings[];
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
      /** @internal */
      ordersExperiments?: OrdersExperiments;
      /**
       * Checkout id
       * @internal
       */
      checkoutId?: string | null;
      /**
       * Applied coupon
       * @internal
       */
      appliedCoupon?: AppliedCoupon;
      /**
       * Subscription information
       * @internal
       */
      subscriptionInfo?: SubscriptionInfo;
      /** @internal */
      cartId?: string | null;
      /**
       * Billing information.
       * @internal
       */
      billingInfo?: BillingInfo;
  }
  interface OrdersExperiments {
      epCommitTax?: boolean;
      moveMerchantEmailToEp?: boolean;
      moveBuyerOrderConfirmationEmailToEp?: boolean;
      producedByEpBridge?: boolean;
  }
  interface OrderPaid {
      /** Paid order data. */
      order?: Order;
      /** @internal */
      ordersExperiments?: OrdersExperiments;
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
  /**
   * Creates a new order.
   *
   * > **Notes:**
   * > + Only orders with the `paymentStatus` parameter set as `"PAID"` or `"NOT_PAID"` will show up in the site owner's Stores Orders tab in their dashboard.
   * > + The `billingInfo.paymentProviderTransactionId` and `billingInfo.paymentMethod` parameters can only be passed when paymentStatus is PAID.
   * > + The `billingInfo`.address parameter is required unless `channelInfo.type: "POS"`.
   * > + The `shippingInfo.shipmentDetails.address` parameter is required unless one of the following is true:
   * >   + The `shippingInfo.pickupDetails` is passed instead
   * >   + `channelInfo.type: "POS"`
   * >   + All order items are of type digital - `lineItems.lineItemType: "DIGITAL"`.
   * > + When passing `lineItems.variantId`, `lineItems.options` is required.
   * > + When passing `lineItems.productId`, `lineItem.lineItemType` is limited to `"PHYSICAL"`.
   * > + When not passing `lineItems.productId`, `lineItem.lineItemType` is limited to `"CUSTOM_AMOUNT_ITEM"`.
   * @public
   * @requiredField order
   * @requiredField order.totals
   */
  function createOrder(order: Order, options?: CreateOrderOptions): Promise<CreateOrderResponse>;
  interface CreateOrderOptions {
      /**
       * Additional order settings.
       * @internal
       */
      additionalOrderSettings?: AdditionalOrderSettings[];
  }
  /** @requiredField filter */
  function bulkFulfillOrders(filter: Record<string, any> | null, options?: BulkFulfillOrdersOptions): Promise<void>;
  interface BulkFulfillOrdersOptions {
      /** when true shipping confirmation email will be sent to the buyer for all orders with shipment delivery */
      sendShippingConfirmationEmail?: boolean;
      /** when true pickup ready email will be sent to the buyer for all orders with pickup delivery */
      sendPickupReadyEmail?: boolean;
  }
  /** @requiredField filter */
  function bulkMarkOrdersAsPaid(filter: Record<string, any> | null): Promise<void>;
  /** @requiredField filter */
  function bulkArchiveOrders(filter: Record<string, any> | null): Promise<void>;
  /** @requiredField filter */
  function bulkUnarchiveOrders(filter: Record<string, any> | null): Promise<void>;
  /** @requiredField orderId */
  function addFulfillerEmailWasSentActivity(orderId: string): Promise<void>;
  /** @requiredField orderId */
  function declineOrder(orderId: string, options?: DeclineOrderOptions): Promise<void>;
  interface DeclineOrderOptions {
      eventTime?: Date;
      reason?: string | null;
  }
  /**
   * Updates the email address of a specified order's billing info.
   * If shipping was selected as the delivery method, shipping info email will also be updated.
   * @param orderId - Order ID.
   * @public
   * @requiredField orderId
   */
  function updateOrderEmail(orderId: string, options?: UpdateOrderEmailOptions): Promise<UpdateOrderEmailResponse>;
  interface UpdateOrderEmailOptions {
      /** New email address for billing and shipping info. */
      email?: string;
  }
  /**
   * Updates the shipping address of a specified order.
   * @param orderId - Order ID.
   * @public
   * @requiredField orderId
   */
  function updateOrderShippingAddress(orderId: string, options?: UpdateOrderShippingAddressOptions): Promise<UpdateOrderShippingAddressResponse>;
  interface UpdateOrderShippingAddressOptions {
      /** New order shipping address. */
      shippingAddress?: Address;
  }
  /**
   * Returns an order with the provided ID
   * @param _id - Requested order ID
   * @public
   * @requiredField _id
   */
  function getOrder(_id: string): Promise<GetOrderResponseV2>;
  /**
   * Returns a list of up to 100 orders, given the provided paging, sorting and filters.
   * See [Stores Pagination](https://dev.wix.com/api/rest/wix-stores/pagination) for more information.
   * Hidden orders are not returned
   * @public */
  function queryOrders(options?: QueryOrdersOptions): Promise<QueryOrdersResponseV2>;
  interface QueryOrdersOptions {
      /** Query */
      query?: Query;
  }
  /** Temp method for analytics migration */
  function queryOrdersEventuallyConsistent(options?: QueryOrdersEventuallyConsistentOptions): Promise<QueryOrdersResponseV2>;
  interface QueryOrdersEventuallyConsistentOptions {
      /** Query */
      query?: Query;
  }
  /**
   * Creates a fulfillment (a subset of an order, with line items that are being shipped together) based on the body parameters passed with the request.
   * If the site owner has requested it, calling this request will trigger an email to the customer (based on the Wix store settings)
   * @param orderId - Order ID (to which the fulfillment will be related).
   * @param fulfillment - Fulfillment info.
   * @public
   * @requiredField fulfillment
   * @requiredField orderId
   */
  function createFulfillment(orderId: string, fulfillment: Fulfillment): Promise<CreateFulfillmentResponse>;
  /**
   * Updates an existing fulfillment
   * @public
   * @requiredField identifiers
   * @requiredField identifiers.fulfillmentId
   * @requiredField identifiers.orderId
   */
  function updateFulfillment(identifiers: UpdateFulfillmentIdentifiers, options?: UpdateFulfillmentOptions): Promise<UpdateFulfillmentResponse>;
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
  /**
   * Deletes an existing fulfillment
   * @public
   * @requiredField identifiers
   * @requiredField identifiers.fulfillmentId
   * @requiredField identifiers.orderId
   */
  function deleteFulfillment(identifiers: DeleteFulfillmentIdentifiers): Promise<DeleteFulfillmentResponse>;
  interface DeleteFulfillmentIdentifiers {
      /** Order ID. */
      orderId: string;
      /** Fulfillment ID. */
      fulfillmentId: string;
  }
  /**
   * Add payment data for an order
   * @param _id - The order id
   * @param paymentInfo - The payment info
   * @requiredField _id
   * @requiredField paymentInfo
   */
  function markAsPaid(_id: string, paymentInfo: RequestPaymentInfo): Promise<void>;
  /**
   * Set order's shipping's fulfillment status
   * @param _id - The order id
   * @requiredField _id
   */
  function setShippingFulfillment(_id: string, options?: SetShippingFulfillmentOptions): Promise<void>;
  interface SetShippingFulfillmentOptions {
      /** Shipment fulfillment status */
      status?: ShipmentFulfillmentStatus;
  }
  /**
   * Send confirmation mail for either pickup/shipment fulfillment
   * @param _id - The order id
   * @requiredField _id
   */
  function sendFulfillmentConfirmation(_id: string): Promise<void>;
  /**
   * Mark order as read
   * @param _id - The order id
   * @requiredField _id
   */
  function markAsRead(_id: string): Promise<void>;
  /**
   * Set order's archive status
   * @param _id - The order id
   * @requiredField _id
   */
  function setArchiveStatus(_id: string, options?: SetArchiveStatusOptions): Promise<void>;
  interface SetArchiveStatusOptions {
      /** New archive status */
      archived?: boolean;
  }
  
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
  const storesV2Orders_universal_d_createOrder: typeof createOrder;
  type storesV2Orders_universal_d_CreateOrderOptions = CreateOrderOptions;
  const storesV2Orders_universal_d_bulkFulfillOrders: typeof bulkFulfillOrders;
  type storesV2Orders_universal_d_BulkFulfillOrdersOptions = BulkFulfillOrdersOptions;
  const storesV2Orders_universal_d_bulkMarkOrdersAsPaid: typeof bulkMarkOrdersAsPaid;
  const storesV2Orders_universal_d_bulkArchiveOrders: typeof bulkArchiveOrders;
  const storesV2Orders_universal_d_bulkUnarchiveOrders: typeof bulkUnarchiveOrders;
  const storesV2Orders_universal_d_addFulfillerEmailWasSentActivity: typeof addFulfillerEmailWasSentActivity;
  const storesV2Orders_universal_d_declineOrder: typeof declineOrder;
  type storesV2Orders_universal_d_DeclineOrderOptions = DeclineOrderOptions;
  const storesV2Orders_universal_d_updateOrderEmail: typeof updateOrderEmail;
  type storesV2Orders_universal_d_UpdateOrderEmailOptions = UpdateOrderEmailOptions;
  const storesV2Orders_universal_d_updateOrderShippingAddress: typeof updateOrderShippingAddress;
  type storesV2Orders_universal_d_UpdateOrderShippingAddressOptions = UpdateOrderShippingAddressOptions;
  const storesV2Orders_universal_d_getOrder: typeof getOrder;
  const storesV2Orders_universal_d_queryOrders: typeof queryOrders;
  type storesV2Orders_universal_d_QueryOrdersOptions = QueryOrdersOptions;
  const storesV2Orders_universal_d_queryOrdersEventuallyConsistent: typeof queryOrdersEventuallyConsistent;
  type storesV2Orders_universal_d_QueryOrdersEventuallyConsistentOptions = QueryOrdersEventuallyConsistentOptions;
  const storesV2Orders_universal_d_createFulfillment: typeof createFulfillment;
  const storesV2Orders_universal_d_updateFulfillment: typeof updateFulfillment;
  type storesV2Orders_universal_d_UpdateFulfillmentIdentifiers = UpdateFulfillmentIdentifiers;
  type storesV2Orders_universal_d_UpdateFulfillmentOptions = UpdateFulfillmentOptions;
  const storesV2Orders_universal_d_deleteFulfillment: typeof deleteFulfillment;
  type storesV2Orders_universal_d_DeleteFulfillmentIdentifiers = DeleteFulfillmentIdentifiers;
  const storesV2Orders_universal_d_markAsPaid: typeof markAsPaid;
  const storesV2Orders_universal_d_setShippingFulfillment: typeof setShippingFulfillment;
  type storesV2Orders_universal_d_SetShippingFulfillmentOptions = SetShippingFulfillmentOptions;
  const storesV2Orders_universal_d_sendFulfillmentConfirmation: typeof sendFulfillmentConfirmation;
  const storesV2Orders_universal_d_markAsRead: typeof markAsRead;
  const storesV2Orders_universal_d_setArchiveStatus: typeof setArchiveStatus;
  type storesV2Orders_universal_d_SetArchiveStatusOptions = SetArchiveStatusOptions;
  namespace storesV2Orders_universal_d {
    export {
      __debug$1 as __debug,
      storesV2Orders_universal_d_Order as Order,
      storesV2Orders_universal_d_BuyerInfo as BuyerInfo,
      storesV2Orders_universal_d_IdentityType as IdentityType,
      storesV2Orders_universal_d_WeightUnit as WeightUnit,
      storesV2Orders_universal_d_Totals as Totals,
      storesV2Orders_universal_d_BillingInfo as BillingInfo,
      storesV2Orders_universal_d_Address as Address,
      storesV2Orders_universal_d_AddressAddressLine1OptionsOneOf as AddressAddressLine1OptionsOneOf,
      storesV2Orders_universal_d_FullName as FullName,
      storesV2Orders_universal_d_Street as Street,
      storesV2Orders_universal_d_VatId as VatId,
      storesV2Orders_universal_d_VatType as VatType,
      storesV2Orders_universal_d_ShippingInfo as ShippingInfo,
      storesV2Orders_universal_d_ShippingInfoDetailsOneOf as ShippingInfoDetailsOneOf,
      storesV2Orders_universal_d_ShipmentDetails as ShipmentDetails,
      storesV2Orders_universal_d_TrackingInfo as TrackingInfo,
      storesV2Orders_universal_d_ShippingPriceData as ShippingPriceData,
      storesV2Orders_universal_d_PickupDetails as PickupDetails,
      storesV2Orders_universal_d_PickupAddress as PickupAddress,
      storesV2Orders_universal_d_BuyerDetails as BuyerDetails,
      storesV2Orders_universal_d_PaymentStatus as PaymentStatus,
      storesV2Orders_universal_d_FulfillmentStatus as FulfillmentStatus,
      storesV2Orders_universal_d_LineItem as LineItem,
      storesV2Orders_universal_d_LineItemType as LineItemType,
      storesV2Orders_universal_d_OptionSelection as OptionSelection,
      storesV2Orders_universal_d_CustomTextFieldSelection as CustomTextFieldSelection,
      storesV2Orders_universal_d_MediaItem as MediaItem,
      storesV2Orders_universal_d_MediaItemType as MediaItemType,
      storesV2Orders_universal_d_LineItemPriceData as LineItemPriceData,
      storesV2Orders_universal_d_DigitalFile as DigitalFile,
      storesV2Orders_universal_d_Activity as Activity,
      storesV2Orders_universal_d_ActivityType as ActivityType,
      storesV2Orders_universal_d_InvoiceInfo as InvoiceInfo,
      storesV2Orders_universal_d_InvoiceSource as InvoiceSource,
      storesV2Orders_universal_d_Fulfillment as Fulfillment,
      storesV2Orders_universal_d_FulfillmentLineItem as FulfillmentLineItem,
      storesV2Orders_universal_d_FulfillmentTrackingInfo as FulfillmentTrackingInfo,
      storesV2Orders_universal_d_Discount as Discount,
      storesV2Orders_universal_d_AppliedCoupon as AppliedCoupon,
      storesV2Orders_universal_d_CustomField as CustomField,
      storesV2Orders_universal_d_ChannelInfo as ChannelInfo,
      storesV2Orders_universal_d_ChannelType as ChannelType,
      storesV2Orders_universal_d_EnteredBy as EnteredBy,
      storesV2Orders_universal_d_EnteredByIdentityType as EnteredByIdentityType,
      storesV2Orders_universal_d_SubscriptionInfo as SubscriptionInfo,
      storesV2Orders_universal_d_SubscriptionSettings as SubscriptionSettings,
      storesV2Orders_universal_d_SubscriptionFrequency as SubscriptionFrequency,
      storesV2Orders_universal_d_SubscriptionOptionInfo as SubscriptionOptionInfo,
      storesV2Orders_universal_d_Refund as Refund,
      storesV2Orders_universal_d_GiftCard as GiftCard,
      storesV2Orders_universal_d_OrderAddressUpdated as OrderAddressUpdated,
      storesV2Orders_universal_d_CreateOrderRequest as CreateOrderRequest,
      storesV2Orders_universal_d_AdditionalOrderSettings as AdditionalOrderSettings,
      storesV2Orders_universal_d_CreateOrderResponse as CreateOrderResponse,
      storesV2Orders_universal_d_BulkFulfillOrdersRequest as BulkFulfillOrdersRequest,
      storesV2Orders_universal_d_BulkFulfillOrdersResponse as BulkFulfillOrdersResponse,
      storesV2Orders_universal_d_BulkMarkOrdersAsPaidRequest as BulkMarkOrdersAsPaidRequest,
      storesV2Orders_universal_d_BulkMarkOrdersAsPaidResponse as BulkMarkOrdersAsPaidResponse,
      storesV2Orders_universal_d_BulkArchiveOrdersRequest as BulkArchiveOrdersRequest,
      storesV2Orders_universal_d_BulkArchiveOrdersResponse as BulkArchiveOrdersResponse,
      storesV2Orders_universal_d_BulkUnarchiveOrdersRequest as BulkUnarchiveOrdersRequest,
      storesV2Orders_universal_d_BulkUnarchiveOrdersResponse as BulkUnarchiveOrdersResponse,
      storesV2Orders_universal_d_AddFulfillerEmailWasSentActivityRequest as AddFulfillerEmailWasSentActivityRequest,
      storesV2Orders_universal_d_AddFulfillerEmailWasSentActivityResponse as AddFulfillerEmailWasSentActivityResponse,
      storesV2Orders_universal_d_DeclineOrderRequest as DeclineOrderRequest,
      storesV2Orders_universal_d_DeclineOrderResponse as DeclineOrderResponse,
      storesV2Orders_universal_d_UpdateOrderEmailRequest as UpdateOrderEmailRequest,
      storesV2Orders_universal_d_UpdateOrderEmailResponse as UpdateOrderEmailResponse,
      storesV2Orders_universal_d_UpdateOrderShippingAddressRequest as UpdateOrderShippingAddressRequest,
      storesV2Orders_universal_d_UpdateOrderShippingAddressResponse as UpdateOrderShippingAddressResponse,
      storesV2Orders_universal_d_DiffmatokyPayload as DiffmatokyPayload,
      storesV2Orders_universal_d_ErrorInformation as ErrorInformation,
      storesV2Orders_universal_d_OrderCreated as OrderCreated,
      storesV2Orders_universal_d_OrdersExperiments as OrdersExperiments,
      storesV2Orders_universal_d_OrderPaid as OrderPaid,
      storesV2Orders_universal_d_OrderCancelRefundEvent as OrderCancelRefundEvent,
      storesV2Orders_universal_d_OrderData as OrderData,
      storesV2Orders_universal_d_OrderCanceled as OrderCanceled,
      storesV2Orders_universal_d_OrderRefunded as OrderRefunded,
      storesV2Orders_universal_d_FulfillmentCreated as FulfillmentCreated,
      storesV2Orders_universal_d_FulfillmentUpdated as FulfillmentUpdated,
      storesV2Orders_universal_d_FulfillmentDeleted as FulfillmentDeleted,
      storesV2Orders_universal_d_OrderDeclined as OrderDeclined,
      storesV2Orders_universal_d_GetOrderRequestV2 as GetOrderRequestV2,
      storesV2Orders_universal_d_GetOrderResponseV2 as GetOrderResponseV2,
      storesV2Orders_universal_d_QueryOrdersRequestV2 as QueryOrdersRequestV2,
      storesV2Orders_universal_d_Query as Query,
      storesV2Orders_universal_d_Paging as Paging,
      storesV2Orders_universal_d_QueryOrdersResponseV2 as QueryOrdersResponseV2,
      storesV2Orders_universal_d_PagingMetadata as PagingMetadata,
      storesV2Orders_universal_d_CreateFulfillmentRequest as CreateFulfillmentRequest,
      storesV2Orders_universal_d_CreateFulfillmentResponse as CreateFulfillmentResponse,
      storesV2Orders_universal_d_UpdateFulfillmentRequest as UpdateFulfillmentRequest,
      storesV2Orders_universal_d_UpdateFulfillmentResponse as UpdateFulfillmentResponse,
      storesV2Orders_universal_d_DeleteFulfillmentRequest as DeleteFulfillmentRequest,
      storesV2Orders_universal_d_DeleteFulfillmentResponse as DeleteFulfillmentResponse,
      storesV2Orders_universal_d_MarkAsPaidRequest as MarkAsPaidRequest,
      storesV2Orders_universal_d_RequestPaymentInfo as RequestPaymentInfo,
      storesV2Orders_universal_d_MarkAsPaidResponse as MarkAsPaidResponse,
      storesV2Orders_universal_d_SetShippingFulfillmentRequest as SetShippingFulfillmentRequest,
      storesV2Orders_universal_d_ShipmentFulfillmentStatus as ShipmentFulfillmentStatus,
      storesV2Orders_universal_d_SetShippingFulfillmentResponse as SetShippingFulfillmentResponse,
      storesV2Orders_universal_d_SendFulfillmentConfirmationRequest as SendFulfillmentConfirmationRequest,
      storesV2Orders_universal_d_SendFulfillmentConfirmationResponse as SendFulfillmentConfirmationResponse,
      storesV2Orders_universal_d_MarkAsReadRequest as MarkAsReadRequest,
      storesV2Orders_universal_d_MarkAsReadResponse as MarkAsReadResponse,
      storesV2Orders_universal_d_SetArchiveStatusRequest as SetArchiveStatusRequest,
      storesV2Orders_universal_d_SetArchiveStatusResponse as SetArchiveStatusResponse,
      storesV2Orders_universal_d_createOrder as createOrder,
      storesV2Orders_universal_d_CreateOrderOptions as CreateOrderOptions,
      storesV2Orders_universal_d_bulkFulfillOrders as bulkFulfillOrders,
      storesV2Orders_universal_d_BulkFulfillOrdersOptions as BulkFulfillOrdersOptions,
      storesV2Orders_universal_d_bulkMarkOrdersAsPaid as bulkMarkOrdersAsPaid,
      storesV2Orders_universal_d_bulkArchiveOrders as bulkArchiveOrders,
      storesV2Orders_universal_d_bulkUnarchiveOrders as bulkUnarchiveOrders,
      storesV2Orders_universal_d_addFulfillerEmailWasSentActivity as addFulfillerEmailWasSentActivity,
      storesV2Orders_universal_d_declineOrder as declineOrder,
      storesV2Orders_universal_d_DeclineOrderOptions as DeclineOrderOptions,
      storesV2Orders_universal_d_updateOrderEmail as updateOrderEmail,
      storesV2Orders_universal_d_UpdateOrderEmailOptions as UpdateOrderEmailOptions,
      storesV2Orders_universal_d_updateOrderShippingAddress as updateOrderShippingAddress,
      storesV2Orders_universal_d_UpdateOrderShippingAddressOptions as UpdateOrderShippingAddressOptions,
      storesV2Orders_universal_d_getOrder as getOrder,
      storesV2Orders_universal_d_queryOrders as queryOrders,
      storesV2Orders_universal_d_QueryOrdersOptions as QueryOrdersOptions,
      storesV2Orders_universal_d_queryOrdersEventuallyConsistent as queryOrdersEventuallyConsistent,
      storesV2Orders_universal_d_QueryOrdersEventuallyConsistentOptions as QueryOrdersEventuallyConsistentOptions,
      storesV2Orders_universal_d_createFulfillment as createFulfillment,
      storesV2Orders_universal_d_updateFulfillment as updateFulfillment,
      storesV2Orders_universal_d_UpdateFulfillmentIdentifiers as UpdateFulfillmentIdentifiers,
      storesV2Orders_universal_d_UpdateFulfillmentOptions as UpdateFulfillmentOptions,
      storesV2Orders_universal_d_deleteFulfillment as deleteFulfillment,
      storesV2Orders_universal_d_DeleteFulfillmentIdentifiers as DeleteFulfillmentIdentifiers,
      storesV2Orders_universal_d_markAsPaid as markAsPaid,
      storesV2Orders_universal_d_setShippingFulfillment as setShippingFulfillment,
      storesV2Orders_universal_d_SetShippingFulfillmentOptions as SetShippingFulfillmentOptions,
      storesV2Orders_universal_d_sendFulfillmentConfirmation as sendFulfillmentConfirmation,
      storesV2Orders_universal_d_markAsRead as markAsRead,
      storesV2Orders_universal_d_setArchiveStatus as setArchiveStatus,
      storesV2Orders_universal_d_SetArchiveStatusOptions as SetArchiveStatusOptions,
    };
  }
  
  const __debug: {
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
  /**
   * Get default wishlist by context's member and site
   * @internal
   * @documentationMaturity preview
   */
  function getWishlist(options?: GetWishlistOptions): Promise<GetWishlistResponse>;
  interface GetWishlistOptions {
      /** List length limit. Default is 100 */
      limit?: number | null;
      /** List starting index offset. Default is 0 */
      offset?: number | null;
      /** Filter requested list by specific kinds of items */
      kind?: WishlistItemKind[];
  }
  /**
   * Add items to default wishlist by context's member and site
   * @internal
   * @documentationMaturity preview
   * @requiredField options.items._id
   * @requiredField options.items.origin
   * @requiredField options.items.type
   */
  function addToWishlist(options?: AddToWishlistOptions): Promise<void>;
  interface AddToWishlistOptions {
      /** List of items to add to list */
      items?: WishlistItem[];
  }
  /**
   * Remove items to default wishlist by context's member and site
   * @internal
   * @documentationMaturity preview
   * @requiredField options.items._id
   * @requiredField options.items.origin
   * @requiredField options.items.type
   */
  function removeFromWishlist(options?: RemoveFromWishlistOptions): Promise<void>;
  interface RemoveFromWishlistOptions {
      /** List of items to remove from list */
      items?: WishlistItem[];
  }
  /**
   * Get wishlist by id
   * @param _id - Unique identifier representing requested list
   * @public
   * @documentationMaturity preview
   * @requiredField _id
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
  /**
   * Get wishlists of site
   * @internal
   * @documentationMaturity preview
   */
  function getWishlists(options?: GetWishlistsOptions): Promise<GetWishlistsResponse>;
  interface GetWishlistsOptions {
      /** List length limit. Default is 100 */
      limit?: number | null;
      /** List starting index offset. Default is 0 */
      offset?: number | null;
  }
  
  const platformV1Wishlist_universal_d___debug: typeof __debug;
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
  const platformV1Wishlist_universal_d_getWishlist: typeof getWishlist;
  type platformV1Wishlist_universal_d_GetWishlistOptions = GetWishlistOptions;
  const platformV1Wishlist_universal_d_addToWishlist: typeof addToWishlist;
  type platformV1Wishlist_universal_d_AddToWishlistOptions = AddToWishlistOptions;
  const platformV1Wishlist_universal_d_removeFromWishlist: typeof removeFromWishlist;
  type platformV1Wishlist_universal_d_RemoveFromWishlistOptions = RemoveFromWishlistOptions;
  const platformV1Wishlist_universal_d_getWishlistById: typeof getWishlistById;
  type platformV1Wishlist_universal_d_GetWishlistByIdOptions = GetWishlistByIdOptions;
  const platformV1Wishlist_universal_d_getWishlists: typeof getWishlists;
  type platformV1Wishlist_universal_d_GetWishlistsOptions = GetWishlistsOptions;
  namespace platformV1Wishlist_universal_d {
    export {
      platformV1Wishlist_universal_d___debug as __debug,
      platformV1Wishlist_universal_d_WishlistData as WishlistData,
      platformV1Wishlist_universal_d_WishlistItem as WishlistItem,
      platformV1Wishlist_universal_d_ItemsAddedToWishlist as ItemsAddedToWishlist,
      platformV1Wishlist_universal_d_ItemsRemovedFromWishlist as ItemsRemovedFromWishlist,
      platformV1Wishlist_universal_d_GetWishlistRequest as GetWishlistRequest,
      platformV1Wishlist_universal_d_WishlistItemKind as WishlistItemKind,
      platformV1Wishlist_universal_d_GetWishlistResponse as GetWishlistResponse,
      platformV1Wishlist_universal_d_AddToWishlistRequest as AddToWishlistRequest,
      platformV1Wishlist_universal_d_AddToWishlistResponse as AddToWishlistResponse,
      platformV1Wishlist_universal_d_RemoveFromWishlistRequest as RemoveFromWishlistRequest,
      platformV1Wishlist_universal_d_RemoveFromWishlistResponse as RemoveFromWishlistResponse,
      platformV1Wishlist_universal_d_GetWishlistByIdRequest as GetWishlistByIdRequest,
      platformV1Wishlist_universal_d_GetWishlistByIdResponse as GetWishlistByIdResponse,
      platformV1Wishlist_universal_d_GetWishlistsRequest as GetWishlistsRequest,
      platformV1Wishlist_universal_d_GetWishlistsResponse as GetWishlistsResponse,
      platformV1Wishlist_universal_d_getWishlist as getWishlist,
      platformV1Wishlist_universal_d_GetWishlistOptions as GetWishlistOptions,
      platformV1Wishlist_universal_d_addToWishlist as addToWishlist,
      platformV1Wishlist_universal_d_AddToWishlistOptions as AddToWishlistOptions,
      platformV1Wishlist_universal_d_removeFromWishlist as removeFromWishlist,
      platformV1Wishlist_universal_d_RemoveFromWishlistOptions as RemoveFromWishlistOptions,
      platformV1Wishlist_universal_d_getWishlistById as getWishlistById,
      platformV1Wishlist_universal_d_GetWishlistByIdOptions as GetWishlistByIdOptions,
      platformV1Wishlist_universal_d_getWishlists as getWishlists,
      platformV1Wishlist_universal_d_GetWishlistsOptions as GetWishlistsOptions,
    };
  }
  
  export { storesCatalogV1Collection_universal_d as collections, storesV2Orders_universal_d as orders, platformV1Wishlist_universal_d as wishlist };
}
