declare module "wix-marketing-backend.v2" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * The `Coupon` object represents all information available for a coupon
   * including its basic definition and runtime information.
   */
  interface Coupon {
      /** Coupon ID (should not be passed on creation). */
      _id?: string;
      /** Basic coupon metadata. */
      specification?: Specification;
      /** Time the coupon was created (UNIX Epoch time in milliseconds). */
      dateCreated?: string;
      /** Whether the coupon is expired. */
      expired?: boolean;
      /** How many times this coupon has been used. */
      numberOfUsages?: number;
      /** Coupon display information. */
      displayData?: DisplayData;
      /**
       * ID of the app that created the coupon. Empty if created by the site owner.
       * @readonly
       */
      appId?: string | null;
  }
  interface MediaItem {
      /** Media item URL. */
      url?: string;
      /** Media item width. */
      width?: number;
      /** Media item height. */
      height?: number;
  }
  interface Specification extends SpecificationScopeOrMinSubtotalOneOf, SpecificationBehaviorOneOf {
      /** Friendly name for display (up to 80 characters). */
      name?: string | null;
      /** Unique code entered to apply the coupon (up to 20 characters). */
      code?: string | null;
      /** Coupon valid from, in milliseconds (required). */
      startTime?: string | null;
      /** Coupon expiration time, in milliseconds (optional). */
      expirationTime?: string | null;
      /** Maximum number of times the coupon can be used (optional). */
      usageLimit?: number | null;
      /** Maximum number of times the coupon can be used **per customer** (optional). */
      limitPerCustomer?: number | null;
      /** Whether the coupon is limited to one item. */
      limitedToOneItem?: boolean | null;
      /** Whether the coupon applies to subscription products. */
      appliesToSubscriptions?: boolean | null;
      /**
       * Specifies the amount of discounted cycles for subscription item.
       * Can only be set when applies_to_subscriptions is true and scope namespace is 'pricingPlans'
       * Valid range is from 1 to 999, inclusive. Empty field specifies that the coupon applies to all available cycles.
       */
      discountedCycleCount?: number | null;
      /** Whether the coupon is currently active (if not passed - the default is active). */
      active?: boolean | null;
      /** Coupon type. Read-only. */
      type?: string;
      /** Specifies the type of line items this coupon will apply to. See [valid scope values](https://dev.wix.com/api/rest/coupons/coupons/valid-scope-values). */
      scope?: Scope;
      /** Limit the coupon to carts with a subtotal above this number. */
      minimumSubtotal?: number | null;
      /** Discount as a fixed amount. */
      moneyOffAmount?: number;
      /** Discount as a percentage. */
      percentOffRate?: number;
      /** Free shipping. */
      freeShipping?: boolean;
      /** Fixed sale price. */
      fixedPriceAmount?: number;
      /** For example: buy 3, get 1. */
      buyXGetY?: BuyXGetY;
  }
  /** @oneof */
  interface SpecificationScopeOrMinSubtotalOneOf {
      /** Specifies the type of line items this coupon will apply to. See [valid scope values](https://dev.wix.com/api/rest/coupons/coupons/valid-scope-values). */
      scope?: Scope;
      /** Limit the coupon to carts with a subtotal above this number. */
      minimumSubtotal?: number | null;
  }
  /** @oneof */
  interface SpecificationBehaviorOneOf {
      /** Discount as a fixed amount. */
      moneyOffAmount?: number;
      /** Discount as a percentage. */
      percentOffRate?: number;
      /** Free shipping. */
      freeShipping?: boolean;
      /** Fixed sale price. */
      fixedPriceAmount?: number;
      /** For example: buy 3, get 1. */
      buyXGetY?: BuyXGetY;
  }
  interface Scope {
      /** Scope namespace (Wix Stores, Wix Bookings, Wix Events) */
      namespace?: string;
      /** Coupon scope's applied group (e.g., event or ticket in Wix Events) */
      group?: Group;
  }
  interface Group {
      /** Coupon scope's group (e.g., product or collection in Wix Stores). See [valid scope values](https://dev.wix.com/api/rest/coupons/coupons/valid-scope-values). */
      name?: string;
      /** Item ID (when the coupon scope is limited to just one item). */
      entityId?: string | null;
  }
  /** Coupon type and information */
  interface BuyXGetY {
      /** Coupon type and information */
      x?: number;
      /** Coupon type and information */
      y?: number;
  }
  interface DisplayData {
      /** Coupon name to be displayed. */
      name?: string;
      /** Displayed media item information. */
      mediaItem?: MediaItem;
      /** Formatted price for display. */
      formattedPrice?: string | null;
  }
  interface CreateCouponRequest {
      /** Coupon metadata. ID is ignored and created by the server. */
      specification?: Specification;
  }
  interface CreateCouponResponse {
      /** ID of the newly created coupon. */
      _id?: string;
  }
  interface UpdateCouponRequest {
      /** Coupon ID. */
      _id: string;
      /** Field mask of fields to update (required - passing an empty `fieldMask` will return an error). Valid field masks are any of those in the `specification` field. */
      fieldMask?: string[];
      /** Coupon metadata to change. Changing the type is not allowed. */
      specification?: Specification;
  }
  interface UpdateCouponResponse {
  }
  interface GetCouponRequest {
      /** Coupon ID. */
      _id: string;
  }
  interface GetCouponResponse {
      /** Requested coupon. */
      coupon?: Coupon;
  }
  interface DeleteCouponRequest {
      /** Coupon ID. */
      _id: string;
  }
  interface DeleteCouponResponse {
  }
  interface QueryCouponsRequest {
      query?: Query;
  }
  interface Query {
      /** Optional pagination parameters */
      paging?: Paging;
      /** Filter string (e.g., when {"expired":"true"}, expired coupons will be returned). */
      filter?: string | null;
      /** Sort string. */
      sort?: string | null;
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Offset since the beginning of the collection. */
      offset?: number | null;
  }
  interface QueryCouponsResponse {
      /** Returned coupons. */
      coupons?: Coupon[];
      /** Total results. */
      totalResults?: number | null;
  }
  interface CalculateRequest extends CalculateRequestCalculateByOneOf {
      /** Cart to which the coupon will be applied. */
      cart?: Cart;
      /** Currency symbol for error message and applied coupon. */
      currencySymbol?: string;
      /** Round the result to <precision> places after the decimal dot. Defaults to 2 if not provided. */
      precision?: number | null;
      /** Unique identifier of a buyer that applied the coupon. Used to limit coupon use per customer. */
      uniqueUserIdentifier?: string | null;
      /** For calculating by coupon ID (usually for cart calculate phase). */
      _id?: string;
      /** For calculating by coupon code (usually for apply coupon phase - for validation). */
      code: string;
      /** Type of in-memory discount that can be applied when coupon doesn't exist. */
      discount?: Specification;
  }
  /** @oneof */
  interface CalculateRequestCalculateByOneOf {
      /** For calculating by coupon ID (usually for cart calculate phase). */
      _id?: string;
      /** For calculating by coupon code (usually for apply coupon phase - for validation). */
      code?: string;
      /** Type of in-memory discount that can be applied when coupon doesn't exist. */
      discount?: Specification;
  }
  /**
   * Cart is passed to coupon service's apply function in order to
   * apply the coupons calculation on it
   */
  interface Cart {
      /** Array of cart line items. */
      lineItems?: LineItem[];
      /** Cart shipping information. */
      shipping?: Shipping;
      /** Summary of cart totals. */
      totals?: Totals;
  }
  interface AppliedDiscount {
      /** Discount amount, in case discount is applied per line. */
      discountAmount?: number;
      /** Line item price after applied discount. */
      afterDiscountAmount?: number;
  }
  /** represents a single line in the cart */
  interface LineItem {
      /** Cart line item ID - represents index position (required). */
      lineId?: string;
      /** Item ID in the external system - will usually be a product ID. */
      externalId?: string;
      /** Line item amount (while quantity = 1). */
      amount?: number;
      /** Line item quantity. Must be greater than 0. */
      quantity?: number;
      /** Coupon scopes this line item applies to. */
      scopes?: Scope[];
      /** Applied discount on line item after calculation. */
      appliedDiscount?: AppliedDiscount;
      /** Whether the line item is of type subscription. */
      subscription?: boolean;
  }
  /**
   * represents the shipping line in the cart
   * the coupons need to know about it because of the free shipping coupon
   */
  interface Shipping {
      /** Shipping price before applying the coupon. */
      amount?: number;
      /** Discount on shipping price. */
      appliedDiscount?: AppliedDiscount;
  }
  interface Totals {
      /** Cart subtotal. */
      subTotal?: number;
      /** Sum of all discounts. */
      discount?: number;
      total?: number;
  }
  interface CalculateResponse {
      /** Cart after applying the coupon. */
      cart?: Cart;
      /** Applied coupon information. */
      appliedCoupon?: AppliedCoupon;
      /** Errors, in case call failed. */
      error?: Error[];
  }
  interface AppliedCoupon {
      /** Name of the coupon applied. */
      name?: string;
      /** Coupon ID. */
      _id?: string;
      /** Coupon code. */
      code?: string;
      /** Whether the coupon type entitles free shipping. */
      isFreeShipping?: boolean;
      /** Coupon type (e.g., moneyOffAmount, buyXGetY, percentOffRate). */
      couponType?: string;
      /** Discount value (e.g., $10, 10%). */
      discountValue?: string;
      /** Amount of discounted cycles for subscription item. None specifies for all cycles. */
      discountedCycleCount?: number | null;
  }
  interface Error {
      /** error code */
      code?: string;
      /** descriptive error message */
      message?: string;
  }
  interface IncreaseUsageRequest {
      /** Coupon ID. */
      _id: string;
      /** Unique ID of the entity that the coupon was applied to (e.g., orderId). */
      usedBy?: string | null;
      /** Unique identifier of a buyer that applied the coupon. Used to limit coupon use per customer. */
      uniqueUserIdentifier?: string | null;
      /** ID of app that applied the coupon (e.g. bookings appDefId). */
      wixAppId?: string | null;
  }
  interface IncreaseUsageResponse {
      /** Errors, in case call failed. */
      error?: Error[];
  }
  interface CouponApplied {
      /** Applied coupon information. */
      coupon?: Coupon;
      /**
       * ID of Wix app that applied the coupon. Supported values:
       * + Wix Stores - `1380b703-ce81-ff05-f115-39571d94dfcd`
       * + Wix Bookings - `13d21c63-b5ec-5912-8397-c3a5ddb27a97`
       * + Wix Events - `140603ad-af8d-84a5-2c80-a0f60cb47351`
       */
      wixAppId?: string;
      /** ID of the entity that the coupon was applied to (orderId, bookingId, etc.). */
      wixAppOrderId?: string;
  }
  interface HasCouponsRequest {
  }
  interface HasCouponsResponse {
      /** True if site has ever had a coupon. */
      hasCoupons?: boolean;
  }
  interface BulkDeleteCouponsRequest {
      /** List of coupon IDs to delete. */
      ids?: string[];
  }
  interface BulkDeleteCouponsResponse {
      /** Item metadata. */
      results?: ItemMetadata[];
      /** Bulk action metadata. */
      deleteMetadata?: BulkActionMetadata;
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
      code?: string;
      description?: string;
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
  interface BulkCreateCouponsRequest {
      /** List of coupon specifications to be created. */
      specifications?: Specification[];
      /** Whether to return full coupon entity in the response. Defaults to `false`. */
      returnFullEntity?: boolean;
  }
  interface BulkCreateCouponsResponse {
      /** Items created by bulk action. */
      results?: BulkCreateCouponResult[];
      /** Bulk action metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkCreateCouponResult {
      /** Item metadata. */
      itemMetadata?: ItemMetadata;
      /** New coupon. */
      coupon?: Coupon;
  }
  /**
   * Creates a new coupon.
   * @public
   * @documentationMaturity preview
   */
  function create(options?: CreateOptions): Promise<CreateCouponResponse>;
  interface CreateOptions {
      /** Coupon metadata. ID is ignored and created by the server. */
      specification?: Specification;
  }
  /**
   * Updates a coupon (coupon type can't be changed).
   * @param _id - Coupon ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function update(_id: string, options?: UpdateOptions): Promise<void>;
  interface UpdateOptions {
      /** Field mask of fields to update (required - passing an empty `fieldMask` will return an error). Valid field masks are any of those in the `specification` field. */
      fieldMask?: string[];
      /** Coupon metadata to change. Changing the type is not allowed. */
      specification?: Specification;
  }
  /**
   * Retrieves a coupon by ID.
   * @param _id - Coupon ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @returns Requested coupon.
   */
  function get(_id: string): Promise<Coupon>;
  /**
   * Deletes a coupon by ID.
   * @param _id - Coupon ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function _delete(_id: string): Promise<void>;
  /**
   * Retrieves a list of coupons with pagination and filters.
   * A maximum of 100 coupons will be returned per request.
   * @public
   * @documentationMaturity preview
   */
  function query(options?: QueryOptions): Promise<QueryCouponsResponse>;
  interface QueryOptions {
      query?: Query;
  }
  /**
   * Calculate a cart's total price after applying a coupon.
   * Pass the Cart with line items and shipping, and the cart will be returned
   * along with its coupon's calculations applied.
   * @param code - For calculating by coupon code (usually for apply coupon phase - for validation).
   * @internal
   * @documentationMaturity preview
   * @requiredField code
   */
  function calculateCart(code: string, options?: CalculateCartOptions): Promise<CalculateResponse>;
  interface CalculateCartOptions {
      /** For calculating by coupon ID (usually for cart calculate phase). */
      _id?: string;
      /** Type of in-memory discount that can be applied when coupon doesn't exist. */
      discount?: Specification;
      /** Cart to which the coupon will be applied. */
      cart?: Cart;
      /** Currency symbol for error message and applied coupon. */
      currencySymbol?: string;
      /** Round the result to <precision> places after the decimal dot. Defaults to 2 if not provided. */
      precision?: number | null;
      /** Unique identifier of a buyer that applied the coupon. Used to limit coupon use per customer. */
      uniqueUserIdentifier?: string | null;
  }
  /**
   * It is the responsibility of the payment process to call this endpoint after
   * the coupon was used.
   * @param _id - Coupon ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   */
  function increaseUsage(_id: string, options?: IncreaseUsageOptions): Promise<IncreaseUsageResponse>;
  interface IncreaseUsageOptions {
      /** Unique ID of the entity that the coupon was applied to (e.g., orderId). */
      usedBy?: string | null;
      /** Unique identifier of a buyer that applied the coupon. Used to limit coupon use per customer. */
      uniqueUserIdentifier?: string | null;
      /** ID of app that applied the coupon (e.g. bookings appDefId). */
      wixAppId?: string | null;
  }
  /**
   * Returns true if the site has ever had any coupons (even if they have all been deleted or deactivated).
   * @internal
   * @documentationMaturity preview
   */
  function hasCoupons(): Promise<HasCouponsResponse>;
  /**
   * Deletes multiple coupons.
   * @public
   * @documentationMaturity preview
   */
  function bulkDeleteCoupons(options?: BulkDeleteCouponsOptions): Promise<BulkDeleteCouponsResponse>;
  interface BulkDeleteCouponsOptions {
      /** List of coupon IDs to delete. */
      ids?: string[];
  }
  /**
   * Creates multiple new coupons.
   * @public
   * @documentationMaturity preview
   */
  function bulkCreateCoupons(options?: BulkCreateCouponsOptions): Promise<BulkCreateCouponsResponse>;
  interface BulkCreateCouponsOptions {
      /** List of coupon specifications to be created. */
      specifications?: Specification[];
      /** Whether to return full coupon entity in the response. Defaults to `false`. */
      returnFullEntity?: boolean;
  }
  
  const ecommerceCouponsV2Coupon_universal_d___debug: typeof __debug;
  type ecommerceCouponsV2Coupon_universal_d_Coupon = Coupon;
  type ecommerceCouponsV2Coupon_universal_d_MediaItem = MediaItem;
  type ecommerceCouponsV2Coupon_universal_d_Specification = Specification;
  type ecommerceCouponsV2Coupon_universal_d_SpecificationScopeOrMinSubtotalOneOf = SpecificationScopeOrMinSubtotalOneOf;
  type ecommerceCouponsV2Coupon_universal_d_SpecificationBehaviorOneOf = SpecificationBehaviorOneOf;
  type ecommerceCouponsV2Coupon_universal_d_Scope = Scope;
  type ecommerceCouponsV2Coupon_universal_d_Group = Group;
  type ecommerceCouponsV2Coupon_universal_d_BuyXGetY = BuyXGetY;
  type ecommerceCouponsV2Coupon_universal_d_DisplayData = DisplayData;
  type ecommerceCouponsV2Coupon_universal_d_CreateCouponRequest = CreateCouponRequest;
  type ecommerceCouponsV2Coupon_universal_d_CreateCouponResponse = CreateCouponResponse;
  type ecommerceCouponsV2Coupon_universal_d_UpdateCouponRequest = UpdateCouponRequest;
  type ecommerceCouponsV2Coupon_universal_d_UpdateCouponResponse = UpdateCouponResponse;
  type ecommerceCouponsV2Coupon_universal_d_GetCouponRequest = GetCouponRequest;
  type ecommerceCouponsV2Coupon_universal_d_GetCouponResponse = GetCouponResponse;
  type ecommerceCouponsV2Coupon_universal_d_DeleteCouponRequest = DeleteCouponRequest;
  type ecommerceCouponsV2Coupon_universal_d_DeleteCouponResponse = DeleteCouponResponse;
  type ecommerceCouponsV2Coupon_universal_d_QueryCouponsRequest = QueryCouponsRequest;
  type ecommerceCouponsV2Coupon_universal_d_Query = Query;
  type ecommerceCouponsV2Coupon_universal_d_Paging = Paging;
  type ecommerceCouponsV2Coupon_universal_d_QueryCouponsResponse = QueryCouponsResponse;
  type ecommerceCouponsV2Coupon_universal_d_CalculateRequest = CalculateRequest;
  type ecommerceCouponsV2Coupon_universal_d_CalculateRequestCalculateByOneOf = CalculateRequestCalculateByOneOf;
  type ecommerceCouponsV2Coupon_universal_d_Cart = Cart;
  type ecommerceCouponsV2Coupon_universal_d_AppliedDiscount = AppliedDiscount;
  type ecommerceCouponsV2Coupon_universal_d_LineItem = LineItem;
  type ecommerceCouponsV2Coupon_universal_d_Shipping = Shipping;
  type ecommerceCouponsV2Coupon_universal_d_Totals = Totals;
  type ecommerceCouponsV2Coupon_universal_d_CalculateResponse = CalculateResponse;
  type ecommerceCouponsV2Coupon_universal_d_AppliedCoupon = AppliedCoupon;
  type ecommerceCouponsV2Coupon_universal_d_Error = Error;
  type ecommerceCouponsV2Coupon_universal_d_IncreaseUsageRequest = IncreaseUsageRequest;
  type ecommerceCouponsV2Coupon_universal_d_IncreaseUsageResponse = IncreaseUsageResponse;
  type ecommerceCouponsV2Coupon_universal_d_CouponApplied = CouponApplied;
  type ecommerceCouponsV2Coupon_universal_d_HasCouponsRequest = HasCouponsRequest;
  type ecommerceCouponsV2Coupon_universal_d_HasCouponsResponse = HasCouponsResponse;
  type ecommerceCouponsV2Coupon_universal_d_BulkDeleteCouponsRequest = BulkDeleteCouponsRequest;
  type ecommerceCouponsV2Coupon_universal_d_BulkDeleteCouponsResponse = BulkDeleteCouponsResponse;
  type ecommerceCouponsV2Coupon_universal_d_ItemMetadata = ItemMetadata;
  type ecommerceCouponsV2Coupon_universal_d_ApplicationError = ApplicationError;
  type ecommerceCouponsV2Coupon_universal_d_BulkActionMetadata = BulkActionMetadata;
  type ecommerceCouponsV2Coupon_universal_d_BulkCreateCouponsRequest = BulkCreateCouponsRequest;
  type ecommerceCouponsV2Coupon_universal_d_BulkCreateCouponsResponse = BulkCreateCouponsResponse;
  type ecommerceCouponsV2Coupon_universal_d_BulkCreateCouponResult = BulkCreateCouponResult;
  const ecommerceCouponsV2Coupon_universal_d_create: typeof create;
  type ecommerceCouponsV2Coupon_universal_d_CreateOptions = CreateOptions;
  const ecommerceCouponsV2Coupon_universal_d_update: typeof update;
  type ecommerceCouponsV2Coupon_universal_d_UpdateOptions = UpdateOptions;
  const ecommerceCouponsV2Coupon_universal_d_get: typeof get;
  const ecommerceCouponsV2Coupon_universal_d__delete: typeof _delete;
  const ecommerceCouponsV2Coupon_universal_d_query: typeof query;
  type ecommerceCouponsV2Coupon_universal_d_QueryOptions = QueryOptions;
  const ecommerceCouponsV2Coupon_universal_d_calculateCart: typeof calculateCart;
  type ecommerceCouponsV2Coupon_universal_d_CalculateCartOptions = CalculateCartOptions;
  const ecommerceCouponsV2Coupon_universal_d_increaseUsage: typeof increaseUsage;
  type ecommerceCouponsV2Coupon_universal_d_IncreaseUsageOptions = IncreaseUsageOptions;
  const ecommerceCouponsV2Coupon_universal_d_hasCoupons: typeof hasCoupons;
  const ecommerceCouponsV2Coupon_universal_d_bulkDeleteCoupons: typeof bulkDeleteCoupons;
  type ecommerceCouponsV2Coupon_universal_d_BulkDeleteCouponsOptions = BulkDeleteCouponsOptions;
  const ecommerceCouponsV2Coupon_universal_d_bulkCreateCoupons: typeof bulkCreateCoupons;
  type ecommerceCouponsV2Coupon_universal_d_BulkCreateCouponsOptions = BulkCreateCouponsOptions;
  namespace ecommerceCouponsV2Coupon_universal_d {
    export {
      ecommerceCouponsV2Coupon_universal_d___debug as __debug,
      ecommerceCouponsV2Coupon_universal_d_Coupon as Coupon,
      ecommerceCouponsV2Coupon_universal_d_MediaItem as MediaItem,
      ecommerceCouponsV2Coupon_universal_d_Specification as Specification,
      ecommerceCouponsV2Coupon_universal_d_SpecificationScopeOrMinSubtotalOneOf as SpecificationScopeOrMinSubtotalOneOf,
      ecommerceCouponsV2Coupon_universal_d_SpecificationBehaviorOneOf as SpecificationBehaviorOneOf,
      ecommerceCouponsV2Coupon_universal_d_Scope as Scope,
      ecommerceCouponsV2Coupon_universal_d_Group as Group,
      ecommerceCouponsV2Coupon_universal_d_BuyXGetY as BuyXGetY,
      ecommerceCouponsV2Coupon_universal_d_DisplayData as DisplayData,
      ecommerceCouponsV2Coupon_universal_d_CreateCouponRequest as CreateCouponRequest,
      ecommerceCouponsV2Coupon_universal_d_CreateCouponResponse as CreateCouponResponse,
      ecommerceCouponsV2Coupon_universal_d_UpdateCouponRequest as UpdateCouponRequest,
      ecommerceCouponsV2Coupon_universal_d_UpdateCouponResponse as UpdateCouponResponse,
      ecommerceCouponsV2Coupon_universal_d_GetCouponRequest as GetCouponRequest,
      ecommerceCouponsV2Coupon_universal_d_GetCouponResponse as GetCouponResponse,
      ecommerceCouponsV2Coupon_universal_d_DeleteCouponRequest as DeleteCouponRequest,
      ecommerceCouponsV2Coupon_universal_d_DeleteCouponResponse as DeleteCouponResponse,
      ecommerceCouponsV2Coupon_universal_d_QueryCouponsRequest as QueryCouponsRequest,
      ecommerceCouponsV2Coupon_universal_d_Query as Query,
      ecommerceCouponsV2Coupon_universal_d_Paging as Paging,
      ecommerceCouponsV2Coupon_universal_d_QueryCouponsResponse as QueryCouponsResponse,
      ecommerceCouponsV2Coupon_universal_d_CalculateRequest as CalculateRequest,
      ecommerceCouponsV2Coupon_universal_d_CalculateRequestCalculateByOneOf as CalculateRequestCalculateByOneOf,
      ecommerceCouponsV2Coupon_universal_d_Cart as Cart,
      ecommerceCouponsV2Coupon_universal_d_AppliedDiscount as AppliedDiscount,
      ecommerceCouponsV2Coupon_universal_d_LineItem as LineItem,
      ecommerceCouponsV2Coupon_universal_d_Shipping as Shipping,
      ecommerceCouponsV2Coupon_universal_d_Totals as Totals,
      ecommerceCouponsV2Coupon_universal_d_CalculateResponse as CalculateResponse,
      ecommerceCouponsV2Coupon_universal_d_AppliedCoupon as AppliedCoupon,
      ecommerceCouponsV2Coupon_universal_d_Error as Error,
      ecommerceCouponsV2Coupon_universal_d_IncreaseUsageRequest as IncreaseUsageRequest,
      ecommerceCouponsV2Coupon_universal_d_IncreaseUsageResponse as IncreaseUsageResponse,
      ecommerceCouponsV2Coupon_universal_d_CouponApplied as CouponApplied,
      ecommerceCouponsV2Coupon_universal_d_HasCouponsRequest as HasCouponsRequest,
      ecommerceCouponsV2Coupon_universal_d_HasCouponsResponse as HasCouponsResponse,
      ecommerceCouponsV2Coupon_universal_d_BulkDeleteCouponsRequest as BulkDeleteCouponsRequest,
      ecommerceCouponsV2Coupon_universal_d_BulkDeleteCouponsResponse as BulkDeleteCouponsResponse,
      ecommerceCouponsV2Coupon_universal_d_ItemMetadata as ItemMetadata,
      ecommerceCouponsV2Coupon_universal_d_ApplicationError as ApplicationError,
      ecommerceCouponsV2Coupon_universal_d_BulkActionMetadata as BulkActionMetadata,
      ecommerceCouponsV2Coupon_universal_d_BulkCreateCouponsRequest as BulkCreateCouponsRequest,
      ecommerceCouponsV2Coupon_universal_d_BulkCreateCouponsResponse as BulkCreateCouponsResponse,
      ecommerceCouponsV2Coupon_universal_d_BulkCreateCouponResult as BulkCreateCouponResult,
      ecommerceCouponsV2Coupon_universal_d_create as create,
      ecommerceCouponsV2Coupon_universal_d_CreateOptions as CreateOptions,
      ecommerceCouponsV2Coupon_universal_d_update as update,
      ecommerceCouponsV2Coupon_universal_d_UpdateOptions as UpdateOptions,
      ecommerceCouponsV2Coupon_universal_d_get as get,
      ecommerceCouponsV2Coupon_universal_d__delete as _delete,
      ecommerceCouponsV2Coupon_universal_d_query as query,
      ecommerceCouponsV2Coupon_universal_d_QueryOptions as QueryOptions,
      ecommerceCouponsV2Coupon_universal_d_calculateCart as calculateCart,
      ecommerceCouponsV2Coupon_universal_d_CalculateCartOptions as CalculateCartOptions,
      ecommerceCouponsV2Coupon_universal_d_increaseUsage as increaseUsage,
      ecommerceCouponsV2Coupon_universal_d_IncreaseUsageOptions as IncreaseUsageOptions,
      ecommerceCouponsV2Coupon_universal_d_hasCoupons as hasCoupons,
      ecommerceCouponsV2Coupon_universal_d_bulkDeleteCoupons as bulkDeleteCoupons,
      ecommerceCouponsV2Coupon_universal_d_BulkDeleteCouponsOptions as BulkDeleteCouponsOptions,
      ecommerceCouponsV2Coupon_universal_d_bulkCreateCoupons as bulkCreateCoupons,
      ecommerceCouponsV2Coupon_universal_d_BulkCreateCouponsOptions as BulkCreateCouponsOptions,
    };
  }
  
  export { ecommerceCouponsV2Coupon_universal_d as coupons };
}
