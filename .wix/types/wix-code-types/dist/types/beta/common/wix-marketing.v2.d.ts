declare module "wix-marketing.v2" {
  /**
   * The `Coupon` object represents all information available for a coupon
   * including its basic definition and runtime information.
   */
  interface Coupon {
      /** Coupon ID. */
      _id?: string;
      /** Basic coupon info. */
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
  /** Coupon information */
  interface Specification extends SpecificationScopeOrMinSubtotalOneOf, SpecificationBehaviorOneOf {
      /** Specifies the type of line items this coupon will apply to. See the [introduction](#introduction) for a table of currently supported coupon scopes. */
      scope?: Scope;
      /** The coupon is only applicable when the order subtotal is over this amount. */
      minimumSubtotal?: number | null;
      /** Discount as a fixed amount. */
      moneyOffAmount?: number;
      /** Discount as a percentage. */
      percentOffRate?: number;
      /**
       * Free shipping.
       *
       * If `true`, the coupon applies to all items in all `namespaces`.
       */
      freeShipping?: boolean;
      /** Fixed sale price. */
      fixedPriceAmount?: number;
      /**
       * Receive free products when making a purchase.
       *
       * For example, purchase `x` number of products and receive `y` number of products for free.
       */
      buyXGetY?: BuyXGetY;
      /** Name of coupon. */
      name?: string | null;
      /**
       * Coupon code. Must be unique for all coupons on your site.
       *
       * Max: 20 characters
       */
      code?: string | null;
      /** Coupon valid from this date and time. */
      startTime?: string | null;
      /** Coupon expires at this date and time. */
      expirationTime?: string | null;
      /**
       * Maximum number of times the coupon can be used.
       *
       * >**Note:** Multiple purchases by the same customer or purchases by different customers are both counted toward `usageLimit`.
       */
      usageLimit?: number | null;
      /** Maximum number of times the coupon can be used per customer. */
      limitPerCustomer?: number | null;
      /**
       * Whether the coupon is limited to one item.
       *
       * If `true` and a customer pays for multiple items, the discount applies to only the lowest priced item.
       * Coupons with a `bookings` `scope.namespace` are always limited to one item.
       */
      limitedToOneItem?: boolean | null;
      /**
       * Whether the coupon applies to subscription products.
       *
       * If set to `true`, the discount will apply to all billing cycles.
       */
      appliesToSubscriptions?: boolean | null;
      /** Reserved for internal use. */
      discountedCycleCount?: number | null;
      /**
       * Whether the coupon is currently [active](https://support.wix.com/en/article/wix-stores-activating-and-deactivating-coupons).
       *
       * Default: `true`
       */
      active?: boolean | null;
      /** Coupon type. Read-only. */
      type?: string;
  }
  /** @oneof */
  interface SpecificationScopeOrMinSubtotalOneOf {
      /** Specifies the type of line items this coupon will apply to. See the [introduction](#introduction) for a table of currently supported coupon scopes. */
      scope?: Scope;
      /** The coupon is only applicable when the order subtotal is over this amount. */
      minimumSubtotal?: number | null;
  }
  /** @oneof */
  interface SpecificationBehaviorOneOf {
      /** Discount as a fixed amount. */
      moneyOffAmount?: number;
      /** Discount as a percentage. */
      percentOffRate?: number;
      /**
       * Free shipping.
       *
       * If `true`, the coupon applies to all items in all `namespaces`.
       */
      freeShipping?: boolean;
      /** Fixed sale price. */
      fixedPriceAmount?: number;
      /**
       * Receive free products when making a purchase.
       *
       * For example, purchase `x` number of products and receive `y` number of products for free.
       */
      buyXGetY?: BuyXGetY;
  }
  interface Scope {
      /** Scope namespace (Wix Stores, Wix Bookings, Wix Events, Wix Pricing Plans) */
      namespace?: string;
      /** Group within a `namespace` for which the coupon is applicable. If no group is specified, the coupon applies to all items in the namespace. `group` is required in some cases. See the table in the [introduction](#introduction) for a list of currently supported groups for each namespace. */
      group?: Group;
  }
  interface Group {
      /** Name of coupon scope's group (e.g., product or collection in Wix Stores). See the [introduction](#introduction) for a table of currently supported coupon scopes. */
      name?: string;
      /** ID of the specific item in the group for which the coupon is applicable. If no `entityId` is specified, the coupon applies to all items in the group. In some cases when a group is specified, an `entityId` is required. See the [introduction](#introduction) for a list of currently supported entities for each namespace and group. */
      entityId?: string | null;
  }
  /** Coupon type. */
  interface BuyXGetY {
      /** Number of purchased items required to receive free items. */
      x?: number;
      /** Number of items received for free if required number of items were purchased. */
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
      /** Coupon to create. */
      specification?: Specification;
  }
  interface CreateCouponResponse {
      /** ID of the newly created coupon. */
      _id?: string;
  }
  interface UpdateCouponRequest {
      /** ID of the coupon to update. */
      _id: string;
      /**
       * Field mask of fields to update (required - passing an empty `fieldMask` will return an error). Valid field masks are any of those in the `specification` field.
       * @internal
       */
      fieldMask?: string[];
      /** Coupon information to update. */
      specification?: Specification;
  }
  interface UpdateCouponResponse {
  }
  interface GetCouponRequest {
      /** ID of the coupon to retrieve. */
      _id: string;
  }
  interface GetCouponResponse {
      /** Retrieved coupon. */
      coupon?: Coupon;
  }
  interface DeleteCouponRequest {
      /** ID of the coupon to delete. */
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
      /** For calculating by coupon ID (usually for cart calculate phase). */
      _id?: string;
      /** For calculating by coupon code (usually for apply coupon phase - for validation). */
      code: string;
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
      /** Reserved for internal use. */
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
      /** IDs of coupons to delete. */
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
  interface BulkCreateCouponsRequest {
      /** List of coupon specifications to be created. */
      specifications?: Specification[];
      /**
       * Whether to return full coupon entity in the response.
       *
       * Default: `false`
       */
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
      /** New coupons. */
      coupon?: Coupon;
  }
  interface DomainEvent extends DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
      _id?: string;
      /**
       * Assumes actions are also always typed to an entity_type
       * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
       */
      entityFqdn?: string;
      /**
       * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
       * This is although the created/updated/deleted notion is duplication of the oneof types
       * Example: created/updated/deleted/started/completed/email_opened
       */
      slug?: string;
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
       */
      triggeredByAnonymizeRequest?: boolean | null;
      /** If present, indicates the action that triggered the event. */
      originatedFrom?: string | null;
      /**
       * A sequence number defining the order of updates to the underlying entity.
       * For example, given that some entity was updated at 16:00 and than again at 16:01,
       * it is guaranteed that the sequence number of the second update is strictly higher than the first.
       * As the consumer, you can use this value to ensure that you handle messages in the correct order.
       * To do so, you will need to persist this number on your end, and compare the sequence number from the
       * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
       */
      entityEventSequence?: string | null;
  }
  /** @oneof */
  interface DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
  }
  interface EntityCreatedEvent {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent {
      /**
       * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
       * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
       * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
       */
      currentEntityAsJson?: string;
      /**
       * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
       * wont populate it / have any reference to it in the API.
       * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
       * the developer should send only the new (current) entity.
       * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
       * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
       * @internal
       */
      previousEntityAsJson?: string | null;
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  /**
   * Creates a new coupon.
   *
   * The `createCoupon()` function returns a Promise that resolves to the new coupon when it is created.
   *
   * When creating a coupon, the `specification` object must contain values for `name`, `code`, `startTime`, and either `scope` or `minimumSubtotal`. The exception is for a `freeShipping` coupon type, for which you cannot apply a `scope` and `minimumSubtotal` is optional.
   *
   * The coupon `scope` defines the items a coupon applies to. A coupon can apply to all items in a specific Wix application, a group within the application, or a single item within a group. See the [introduction](#introduction) for a table of currently supported coupon scopes.
   *
   * The `specification` object must also contain a value for exactly 1 of the following coupon properties. This defines the coupon type.
   *
   * + `"moneyOffAmount"`
   * + `"percentOffRate"`
   * + `"freeShipping"`
   * + `"fixedPriceAmount"`
   * + `"buyXGetY"`
   * @param specification - Coupon to create.
   * @public
   * @requiredField specification
   * @adminMethod
   */
  function createCoupon(specification: Specification): Promise<CreateCouponResponse>;
  /**
   * Updates a coupon.
   *
   * The `updateCoupon()` function returns a Promise that resolves when the coupon is updated.
   *
   * Only the properties passed in the `specification` object will be updated. All other properties will remain the same.
   *
   * To remove a value from the coupon, pass its corresponding property with a value of `null`.
   *
   * When updating a coupon, you cannot change the coupon's `type`. For example, if the coupon's `type` is `moneyOffAmount`, you cannot change it to `fixedPriceAmount`. You can update the coupon type's value. For example, you can change the value of `moneyOffAmount` from `5` to `10`.
   *
   * The coupon `scope` defines the items a coupon applies to. A coupon can apply to all items in a specific Wix application, a group within the application, or a single item within a group.
   * See the [introduction](#introduction) for a table of currently supported coupon scopes.
   * @param _id - ID of the coupon to update.
   * @param specification - Coupon information to update.
   * @param fieldMask - Field mask of fields to update (required - passing an empty `fieldMask` will return an error). Valid field masks are any of those in the `specification` field.
   * @public
   * @requiredField _id
   * @requiredField fieldMask
   * @requiredField specification
   * @adminMethod
   */
  function updateCoupon(_id: string, specification: Specification, fieldMask: string[]): Promise<void>;
  /**
   * Retrieves a coupon by ID.
   *
   * The `getCoupon()` function returns a Promise that resolves when the specified coupon is retrieved.
   * @param _id - ID of the coupon to retrieve.
   * @public
   * @requiredField _id
   * @adminMethod
   * @returns Retrieved coupon.
   */
  function getCoupon(_id: string): Promise<Coupon>;
  /**
   * Deletes a coupon.
   *
   * The `deleteCoupon()` function returns a Promise that resolves when the specified coupon is deleted.
   * @param _id - ID of the coupon to delete.
   * @public
   * @requiredField _id
   * @adminMethod
   */
  function deleteCoupon(_id: string): Promise<void>;
  /**
   * Retrieves a list of up to 100 coupons with pagination and filters.
   *
   * The `queryCoupons()` function returns a Promise that resolves when the coupons are retrieved.
   * @public
   * @requiredField query
   * @adminMethod
   */
  function queryCoupons(query: Query): Promise<QueryCouponsResponse>;
  /**
   * Calculate a cart's total price after applying a coupon.
   * Pass the Cart with line items and shipping, and the cart will be returned
   * along with its coupon's calculations applied.
   * @param code - For calculating by coupon code (usually for apply coupon phase - for validation).
   * @internal
   * @documentationMaturity preview
   * @requiredField code
   * @adminMethod
   */
  function calculateCart(code: string, options?: CalculateCartOptions): Promise<CalculateResponse>;
  interface CalculateCartOptions extends CalculateRequestCalculateByOneOf {
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
   * @adminMethod
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
   * @adminMethod
   */
  function hasCoupons(): Promise<HasCouponsResponse>;
  /**
   * Deletes the specified coupons.
   *
   * The `bulkDeleteCoupons()` function returns a Promise that resolves when the coupons are deleted.
   * @param ids - IDs of coupons to delete.
   * @public
   * @requiredField ids
   * @adminMethod
   */
  function bulkDeleteCoupons(ids: string[]): Promise<BulkDeleteCouponsResponse>;
  /**
   * Creates multiple coupons.
   *
   * The `bulkCreateCoupons()` function returns a Promise that resolves when the coupons are created.
   * @param specifications - List of coupon specifications to be created.
   * @public
   * @requiredField specifications
   * @adminMethod
   */
  function bulkCreateCoupons(specifications: Specification[], options?: BulkCreateCouponsOptions): Promise<BulkCreateCouponsResponse>;
  interface BulkCreateCouponsOptions {
      /**
       * Whether to return full coupon entity in the response.
       *
       * Default: `false`
       */
      returnFullEntity?: boolean;
  }
  
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
  type ecommerceCouponsV2Coupon_universal_d_DomainEvent = DomainEvent;
  type ecommerceCouponsV2Coupon_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type ecommerceCouponsV2Coupon_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type ecommerceCouponsV2Coupon_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type ecommerceCouponsV2Coupon_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type ecommerceCouponsV2Coupon_universal_d_ActionEvent = ActionEvent;
  const ecommerceCouponsV2Coupon_universal_d_createCoupon: typeof createCoupon;
  const ecommerceCouponsV2Coupon_universal_d_updateCoupon: typeof updateCoupon;
  const ecommerceCouponsV2Coupon_universal_d_getCoupon: typeof getCoupon;
  const ecommerceCouponsV2Coupon_universal_d_deleteCoupon: typeof deleteCoupon;
  const ecommerceCouponsV2Coupon_universal_d_queryCoupons: typeof queryCoupons;
  const ecommerceCouponsV2Coupon_universal_d_calculateCart: typeof calculateCart;
  type ecommerceCouponsV2Coupon_universal_d_CalculateCartOptions = CalculateCartOptions;
  const ecommerceCouponsV2Coupon_universal_d_increaseUsage: typeof increaseUsage;
  type ecommerceCouponsV2Coupon_universal_d_IncreaseUsageOptions = IncreaseUsageOptions;
  const ecommerceCouponsV2Coupon_universal_d_hasCoupons: typeof hasCoupons;
  const ecommerceCouponsV2Coupon_universal_d_bulkDeleteCoupons: typeof bulkDeleteCoupons;
  const ecommerceCouponsV2Coupon_universal_d_bulkCreateCoupons: typeof bulkCreateCoupons;
  type ecommerceCouponsV2Coupon_universal_d_BulkCreateCouponsOptions = BulkCreateCouponsOptions;
  namespace ecommerceCouponsV2Coupon_universal_d {
    export {
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
      ecommerceCouponsV2Coupon_universal_d_DomainEvent as DomainEvent,
      ecommerceCouponsV2Coupon_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      ecommerceCouponsV2Coupon_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      ecommerceCouponsV2Coupon_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      ecommerceCouponsV2Coupon_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      ecommerceCouponsV2Coupon_universal_d_ActionEvent as ActionEvent,
      ecommerceCouponsV2Coupon_universal_d_createCoupon as createCoupon,
      ecommerceCouponsV2Coupon_universal_d_updateCoupon as updateCoupon,
      ecommerceCouponsV2Coupon_universal_d_getCoupon as getCoupon,
      ecommerceCouponsV2Coupon_universal_d_deleteCoupon as deleteCoupon,
      ecommerceCouponsV2Coupon_universal_d_queryCoupons as queryCoupons,
      ecommerceCouponsV2Coupon_universal_d_calculateCart as calculateCart,
      ecommerceCouponsV2Coupon_universal_d_CalculateCartOptions as CalculateCartOptions,
      ecommerceCouponsV2Coupon_universal_d_increaseUsage as increaseUsage,
      ecommerceCouponsV2Coupon_universal_d_IncreaseUsageOptions as IncreaseUsageOptions,
      ecommerceCouponsV2Coupon_universal_d_hasCoupons as hasCoupons,
      ecommerceCouponsV2Coupon_universal_d_bulkDeleteCoupons as bulkDeleteCoupons,
      ecommerceCouponsV2Coupon_universal_d_bulkCreateCoupons as bulkCreateCoupons,
      ecommerceCouponsV2Coupon_universal_d_BulkCreateCouponsOptions as BulkCreateCouponsOptions,
    };
  }
  
  export { ecommerceCouponsV2Coupon_universal_d as coupons };
}
