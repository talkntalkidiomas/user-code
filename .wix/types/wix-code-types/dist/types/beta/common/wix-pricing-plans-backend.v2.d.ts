declare module "wix-pricing-plans-backend.v2" {
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * An order object includes all of the details related to the purchase of a Pricing Plan.
   * You can manage existing orders, create offline orders, and preview orders not yet purchased.
   *
   * Orders are based on pricing models based on the payment and duration cycles for each plan. See here to
   * [learn more about pricing models](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/introduction#wix-pricing-plans_pricing-plans_introduction_pricing-models).
   */
  interface Order {
      /**
       * Order ID.
       * @readonly
       */
      _id?: string;
      /**
       * ID of the plan purchased with the order. See [Plans for more information about pricing plans](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans/introduction).
       * @readonly
       */
      planId?: string;
      /**
       * ID of the related Wix subscription.
       *
       * Every pricing plan order corresponds to a Wix subscription, including orders for single payment plans. See here
       * for a [Pricing Plans overview](https://support.wix.com/en/article/pricing-plans-an-overview#create-plans-to-suit-your-business).
       * @readonly
       */
      subscriptionId?: string;
      /**
       * Wix Pay order ID.
       *
       * Provided by Wix whether the order is created online or offline. The field is omitted when the order is free.
       * @readonly
       */
      wixPayOrderId?: string | null;
      /**
       * The buyer's IDs. Includes `memberId` and `contactId`.
       *
       * Currently, Pricing Plan purchases are limited to members only. `contactId` is returned,
       * but a buyer will not be able to purchase a plan without a `memberId`.
       * @readonly
       */
      buyer?: Buyer;
      /**
       * __Deprecated.__ Use `pricing` instead. This property will be removed on September 30, 2022.
       * @readonly
       */
      priceDetails?: PriceDetails;
      /**
       * Order pricing model, price, and payment schedule.
       *
       * [Learn more about pricing models](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/introduction#wix-pricing-plans_pricing-plans_introduction_pricing-models).
       * @readonly
       */
      pricing?: PricingDetails;
      /**
       * How the order was processed. One of:
       * + `ONLINE`: The buyer purchased the plan using the site.
       * + `OFFLINE`: The buyer made a manual, offline purchase without using the site.
       * @readonly
       */
      type?: OrderType;
      /**
       * Method by which checkout was initiated on buyer's behalf.
       * @internal
       * @readonly
       */
      orderMethod?: OrderMethod;
      /**
       * Status of the order. One of:
       * + `DRAFT`: Order has been initiated but payment hasn't been processed yet. The plan isn't yet available for use to the buyer.
       * + `PENDING`: Order has been purchased and its start date is set in the future.
       * + `ACTIVE`: Order has been processed. The plan is available for use.
       * + `PAUSED`: Order, and use of the plan, is [paused](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/pause-order). The order, and use of the plan, can be [resumed](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/resume-order).
       * + `ENDED`: Order has completed its duration and is no longer available for use.
       * + `CANCELED`: Order has been [canceled](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/cancel-order).
       * @readonly
       */
      status?: OrderStatus;
      /**
       * Whether the order will be canceled at the next payment date.
       *
       * If `true`, the order status will be `CANCELED` and the next payment won't be charged. Omitted for single payment orders.
       * @readonly
       */
      autoRenewCanceled?: boolean | null;
      /**
       * Details about the cancellation of an order.
       *
       * Only present if the status is `CANCELED`.
       * @readonly
       */
      cancellation?: Cancellation;
      /**
       * Status of the last payment for the order.
       * Updated automatically for online orders. Updated manually by the site owner for offline orders. One of:
       * + `PAID`: The last payment was paid.
       * + `REFUNDED`: The last payment was refunded.
       * + `FAILED`: The last payment transaction didn't complete.
       * + `UNPAID`: The last payment wasn't paid.
       * + `PENDING`: Awaiting payment.
       * + `NOT_APPLICABLE`: No payment was necessary. For example, for free plans or free trials.
       * @readonly
       */
      lastPaymentStatus?: PaymentStatus;
      /**
       * Start date and time for the ordered plan.
       * @readonly
       */
      startDate?: Date;
      /**
       * Current end date and time for the ordered plan.
       *
       * `endDate` may be updated over the course of an order. If the order is [paused](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/pause-order),
       * it will have a later `endDate` once it [resumes](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/resume-order). `endDate` may also be [postponed](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/postpone-end-date).
       *
       * Omitted if the order is valid until canceled and still `ACTIVE`.
       * @readonly
       */
      endDate?: Date;
      /**
       * List of periods during which the order is paused.
       * @readonly
       */
      pausePeriods?: PausePeriod[];
      /**
       * Free trial period for the order, in days.
       *
       * Only available for recurring plans.
       * @readonly
       */
      freeTrialDays?: number | null;
      /**
       * Earliest end date and time that the plan for the order can expire.
       *
       * Calculated by using the original end date plus any pause periods. Omitted if the order is active until canceled. Reserved for future use.
       * @readonly
       */
      earliestEndDate?: Date;
      /**
       * Current payment cycle for the order.
       *
       * `currentCycle` will be omitted if the order's status is `CANCELED` or `ENDED`, or if the `startDate` hasn't passed yet.
       * @readonly
       */
      currentCycle?: CurrentCycle;
      /**
       * Past and current cycles for the order.
       * @internal
       * @readonly
       */
      cycles?: OrderCycle[];
      /**
       * Plan name at the time of purchase.
       * @readonly
       */
      planName?: string;
      /**
       * Plan description at the time of purchase
       * @readonly
       */
      planDescription?: string;
      /**
       * Plan price as it was at the moment of order creation.
       * @readonly
       */
      planPrice?: string;
      /**
       * Date and time the order was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the order was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Reference to the form and its submission that was used in checkout.
       * @internal
       * @readonly
       */
      formData?: FormData;
      /**
       * TODO PPL-1357: Remove when migration to new status is completed
       * @internal
       */
      statusNew?: OrderStatus;
  }
  interface Buyer {
      /**
       * Member ID for a Wix site member. See [Members to learn more about a site's members](https://dev.wix.com/api/rest/members/members).
       * @readonly
       */
      memberId?: string;
      /**
       * Contact ID for a Wix site contact. See [Contacts to learn more about a site's contacts](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4/contact-object).
       * @readonly
       */
      contactId?: string;
  }
  interface PriceDetails extends PriceDetailsPricingModelOneOf {
      /** Price of the order excluding tax, specified as a monetary amount. for example, `"9.99"`. */
      subtotal?: string;
      /** Total discount applied. */
      discount?: string;
      /** Tax applied. */
      tax?: Tax;
      /**
       * Price after tax and discount is applied, specified as a monetary amount. For example, `"13.98"`.
       *
       * If no tax is applied, the amount is the same as `subtotal`.
       */
      total?: string;
      /** Plan price as it was at the moment of order creation. */
      planPrice?: string;
      /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
      currency?: string;
      /** Free trial period for the order in days. Only available for recurring plans. */
      freeTrialDays?: number | null;
      /** Coupon applied to the order. Empty means no coupon was applied. */
      coupon?: Coupon;
      /** Order has recurring payments. */
      subscription?: Recurrence$1;
      /** One-time payment. Order is valid for a specified duration. */
      singlePaymentForDuration?: Duration$1;
      /** One-time payment. Order is valid until it is canceled. */
      singlePaymentUnlimited?: boolean | null;
  }
  /** @oneof */
  interface PriceDetailsPricingModelOneOf {
      /** Order has recurring payments. */
      subscription?: Recurrence$1;
      /** One-time payment. Order is valid for a specified duration. */
      singlePaymentForDuration?: Duration$1;
      /** One-time payment. Order is valid until it is canceled. */
      singlePaymentUnlimited?: boolean | null;
  }
  interface Tax {
      /** Name of the tax. For example, VAT. */
      name?: string;
      /** Whether tax is included in the original price. When `false`, tax is added at checkout. */
      includedInPrice?: boolean;
      /** Tax rate percentage, as a number between 0 and 100. For example, a 7% tax rate is `"7.00"`. */
      rate?: string;
      /** Total tax, specified as a monetary amount. For example, `"3.99"`. */
      amount?: string;
  }
  /** An object specifying how often and for how long payments recur (may be forever). */
  interface Recurrence$1 {
      /** Length of one payment cycle. */
      cycleDuration?: Duration$1;
      /**
       * Amount of payment cycles this subscription is valid for.
       *
       * `0` for unlimited or until-canceled.
       */
      cycleCount?: number | null;
  }
  /** A duration expressed in number of time units. */
  interface Duration$1 {
      /**
       * The amount of a duration `unit` in a single payment cycle.
       *
       * Currently limited to support only `1`.
       */
      count?: number | null;
      /** Unit of time for the cycle duration. */
      unit?: PeriodUnit$1;
  }
  enum PeriodUnit$1 {
      UNDEFINED = "UNDEFINED",
      DAY = "DAY",
      WEEK = "WEEK",
      MONTH = "MONTH",
      YEAR = "YEAR"
  }
  interface Coupon {
      /** Code of the applied coupon. */
      code?: string;
      /** Total discount of the coupon, as a monetary amount. */
      amount?: string;
      /**
       * Coupon ID.
       * @readonly
       */
      _id?: string;
  }
  interface PricingDetails extends PricingDetailsPricingModelOneOf {
      /**
       * Pricing details for all pricing models.
       * @readonly
       */
      prices?: SpannedPrice[];
      /** Pricing model for an order with recurring payment cycles. */
      subscription?: Recurrence$1;
      /** Pricing model for an order with a one-time payment and the order is valid for a specific amount of time. */
      singlePaymentForDuration?: Duration$1;
      /** Pricing model for an order with a one-time payment and the order is valid until canceled. */
      singlePaymentUnlimited?: boolean | null;
  }
  /** @oneof */
  interface PricingDetailsPricingModelOneOf {
      /** Pricing model for an order with recurring payment cycles. */
      subscription?: Recurrence$1;
      /** Pricing model for an order with a one-time payment and the order is valid for a specific amount of time. */
      singlePaymentForDuration?: Duration$1;
      /** Pricing model for an order with a one-time payment and the order is valid until canceled. */
      singlePaymentUnlimited?: boolean | null;
  }
  interface SpannedPrice {
      /**
       * Cycle duration to apply `price` for.
       *
       * Use with all pricing models.
       * Can apply the same price to multiple payment cycles.
       */
      duration?: PriceDuration;
      /** Order price. */
      price?: Price;
  }
  interface PriceDuration {
      /**
       * Price starts to apply with this cycle.
       *
       * `1` is the first payment cycle for all pricing models.
       */
      cycleFrom?: number;
      /**
       * Amount of cycles to apply price for.
       *
       * For `subscription` pricing models with a finite number of cycles, the `numberOfCycles` is the same as `pricing.subscription.cycleCount`.
       *
       * For `subscription` pricing models that are unlimited or until-canceled, the `numberOfCycles` is not returned.
       *
       * For `singlePaymentForDuration` and `singlePaymentUnlimited` pricing models, the `numberOfCycles` is `1`.
       */
      numberOfCycles?: number | null;
  }
  interface Price {
      /** Price of the order excluding tax, specified as a monetary amount. For example, `"9.99"`. */
      subtotal?: string;
      /**
       * Coupon applied to the order.
       *
       * See Coupons [to learn more about coupons](https://dev.wix.com/api/rest/coupons).
       */
      coupon?: Coupon;
      /** Total discount applied to the order. */
      discount?: string;
      /**
       * Tax applied to the order.
       *
       * Tax is only applied if the site [has it configured](https://support.wix.com/en/article/pricing-plans-setting-up-tax-collection).
       */
      tax?: Tax;
      /**
       * Price after tax and discount is applied. Specified as a monetary amount, for example, `"13.98"`.
       *
       * If no tax is applied, the amount is the same as `subtotal`.
       */
      total?: string;
      /**
       * Three-letter currency code in
       * [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       */
      currency?: string;
  }
  enum OrderType {
      UNDEFINED = "UNDEFINED",
      /** Payments made by the buyer */
      ONLINE = "ONLINE",
      /** Payments managed manually by the site owner */
      OFFLINE = "OFFLINE"
  }
  enum OrderMethod {
      UNKNOWN = "UNKNOWN",
      /** Mail Order / Telephone Order transaction */
      MOTO = "MOTO",
      /** Point of Sale transaction */
      POS = "POS"
  }
  enum OrderStatus {
      /** Order status undefined */
      UNDEFINED = "UNDEFINED",
      /** Order created, but hasn't been paid for yet. Filtered out in ListOrders response by default. */
      DRAFT = "DRAFT",
      /** Order has been paid for, but the start date is in the future */
      PENDING = "PENDING",
      /** Order is active */
      ACTIVE = "ACTIVE",
      /** Order is paused until site owner resumes it */
      PAUSED = "PAUSED",
      /** Order has ended */
      ENDED = "ENDED",
      /** Order has been canceled */
      CANCELED = "CANCELED"
  }
  interface Cancellation {
      /** Date and time the cancellation was requested. */
      requestedDate?: Date;
      /**
       * Reason for the cancellation. One of:
       * + `OWNER_ACTION`: Site owner canceled the order.
       * + `MEMBER_ACTION`: Buyer initiated the cancellation.
       * + `PAYMENT_FAILURE`: Payment transaction failed.
       * + `PAYMENT_SETUP_FAILURE`: Buyer's payment details weren't set up correctly.
       * + `UNKNOWN`: Reason for the cancellation is unknown.
       */
      cause?: CancellationCause;
      /**
       * When the cancellation takes effect. Set when cancelling the order. One of:
       * + `IMMEDIATELY`: Cancellation occurs immediately and the buyer can no longer use the plan.
       * + `NEXT_PAYMENT_DATE`: Cancellation occurs at the next payment date and time. Buyer can continue to use the plan until that date and time.
       */
      effectiveAt?: CancellationEffectiveAt;
  }
  enum CancellationCause {
      /** Cancellation initiator undefined */
      UNDEFINED = "UNDEFINED",
      /** Order was canceled by site owner (default if canceled by user or service identity) */
      OWNER_ACTION = "OWNER_ACTION",
      /** Order was canceled by member (default if canceled by member identity) */
      MEMBER_ACTION = "MEMBER_ACTION",
      /** Order was canceled because of payment failure */
      PAYMENT_FAILURE = "PAYMENT_FAILURE",
      /** Order was canceled because of payment setup failure */
      PAYMENT_SETUP_FAILURE = "PAYMENT_SETUP_FAILURE",
      /** Order was cancelled because of an unknown reason. It's not possible to know with certain payment providers (e.g. paypal) */
      UNKNOWN = "UNKNOWN"
  }
  enum CancellationEffectiveAt {
      /** Cancellation time undefined */
      UNDEFINED = "UNDEFINED",
      /** Will cancel the order now, i.e. update validUntil to the current date */
      IMMEDIATELY = "IMMEDIATELY",
      /** Will cancel the order at the date when next payment should have been made */
      NEXT_PAYMENT_DATE = "NEXT_PAYMENT_DATE"
  }
  enum PaymentStatus {
      /** Payment status undefined */
      UNDEFINED = "UNDEFINED",
      /** Payment has been paid */
      PAID = "PAID",
      /** Payment has been refunded */
      REFUNDED = "REFUNDED",
      /** Recurring payment has failed */
      FAILED = "FAILED",
      /** Payment has not been paid */
      UNPAID = "UNPAID",
      /** Billing has been initialized, but actual charge is yet to be made. Can happen for free trial and PayPal */
      PENDING = "PENDING",
      /** Used in cases where the plan is free */
      NOT_APPLICABLE = "NOT_APPLICABLE"
  }
  interface PausePeriod {
      /**
       * Status of the pause period. One of:
       *
       * + `ACTIVE`: Status while the order is [paused](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/pause-order).
       * + `ENDED`: Status when the order is [resumed](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/resume-order).
       */
      status?: Status;
      /** Start date and time of the pause period. */
      pauseDate?: Date;
      /**
       * End date and time of the pause period.
       *
       * Omitted while the pause period remains `ACTIVE`.
       */
      resumeDate?: Date;
  }
  enum Status {
      UNDEFINED = "UNDEFINED",
      /** Order suspension is active */
      ACTIVE = "ACTIVE",
      /** Order suspension has ended */
      ENDED = "ENDED"
  }
  /**
   * Current cycle will be empty when order is cancelled, expired or order start date is in the future
   * Current cycle start and end dates take into account free trial days and suspensions
   */
  interface CurrentCycle {
      /**
       * Index of the current payment cycle in the order.
       *
       * `0` when order is in a free trial period. In all other cases, the index starts with `1`.
       */
      index?: number;
      /** Start date and time for the current payment cycle. */
      startedDate?: Date;
      /** End date and time for the current payment cycle. */
      endedDate?: Date;
  }
  /** Order cycle start and end dates take into account free trial days and suspensions */
  interface OrderCycle {
      /**
       * Index of this cycle in the order.
       *
       * `0` when order is in a free trial period. In all other cases, the index starts with `1`.
       */
      index?: number;
      /** Start date and time for this order cycle. */
      startedDate?: Date;
      /** End date and time for this order cycle. */
      endedDate?: Date;
  }
  interface FormData {
      /** Reference to the form which was used to gather additional data in checkout. */
      formId?: string | null;
      /** Reference to the submission of the form. */
      submissionId?: string | null;
      /**
       * Data submitted to the form at checkout.
       * This field is only returned when `FieldSet.FULL` is specified when fetching the data
       * @readonly
       */
      submissionData?: Record<string, any>;
  }
  interface MemberGetOrderRequest {
      /** Order ID. */
      _id: string;
      fieldSet?: Set;
  }
  enum Set {
      /** Same behavior as BASIC */
      UNKNOWN_SET = "UNKNOWN_SET",
      /**
       * Returns fields of the entity that are available in the database.
       * By default a field is available in the database unless explicitly specified in the documentation
       */
      BASIC = "BASIC",
      /**
       * Returns all fields in the entity.
       * This might make additional calls to gather the full entity
       */
      FULL = "FULL"
  }
  interface MemberGetOrderResponse {
      /** Requested order. */
      order?: Order;
  }
  interface MemberListOrdersRequest {
      /** Filter by plan IDs. */
      planIds?: string[];
      /** Filter for orders where auto renewal was canceled. */
      autoRenewCanceled?: boolean | null;
      /** Filter by order status. */
      orderStatuses?: OrderStatus[];
      /** Filter by payment status. */
      paymentStatuses?: PaymentStatus[];
      /** Limit the number of pricing plans returned. Default limit is 50. */
      limit?: number | null;
      /** Number of entries to offset. */
      offset?: number | null;
      /** Sorting direction (defaults to ASC) and field to sort by. [See available fields here](https://dev.wix.com/api/rest/pricing-plans/pricing-plans/order-v2/filter-and-sort). */
      sorting?: Sorting$1;
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
  interface MemberListOrdersResponse {
      orders?: Order[];
      /** Object containing paging-related data (number of orders returned, offset). */
      pagingMetadata?: PagingMetadataV2$1;
  }
  interface PagingMetadataV2$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$1;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  /**
   * TODO: Write orders filter and sort docs page
   * Retrieves a list of up to 1,000 orders, based on the provided paging, [sorting, and filtering](https://dev.wix.com/api/rest/pricing-plans/pricing-plans/order-v2/filter-and-sort).
   */
  interface QueryOrdersRequest {
      query?: QueryV2$1;
  }
  interface QueryV2$1 extends QueryV2PagingMethodOneOf {
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
      sort?: Sorting$1[];
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface Paging$1 {
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
  interface QueryOrdersResponse {
      /** Order data. */
      plans?: Order[];
      /** Paging-related data (number of orders returned, offset). */
      pagingMetadata?: PagingMetadataV2$1;
  }
  interface RequestCancellationRequest {
      /** Order ID. */
      _id: string;
      /** Required. Whether to cancel the order effective immediately or at the next payment date. One-time orders can only be canceled immediately. */
      effectiveAt?: CancellationEffectiveAt;
  }
  interface RequestCancellationResponse {
  }
  /**
   * Emitted when an order is canceled immediately or when cycle ends for an order with canceled auto renewal
   *
   * To determine the specific reason of the cancellation check `order.cancellation.cause` field.
   */
  interface OrderCanceled {
      /** Canceled order. */
      order?: Order;
  }
  interface CreateOnlineOrderRequest {
      /** Plan ID. */
      planId: string;
      /**
       * Start date for the ordered plan.
       *
       * Default: Current date
       */
      startDate?: Date;
      /** Coupon code to apply. */
      couponCode?: string | null;
      /** Provided if checkout is initiated on buyer's behalf. */
      onBehalf?: OnBehalf;
      /** Form submission id that was submitted together with the order */
      submissionId?: string | null;
  }
  interface OnBehalf {
      /** Member ID. */
      memberId?: string;
      /** Method by which checkout is initiated on buyer's behalf */
      orderMethod?: OrderMethod;
  }
  interface CreateOnlineOrderResponse {
      /** Order. */
      order?: Order;
  }
  interface CouponsError {
      couponCode?: string;
      planId?: string;
  }
  interface CreateGuestOnlineOrderRequest {
      /** Plan ID. */
      planId: string;
      /**
       * Start date for the ordered plan.
       *
       * Default: Current date
       */
      startDate?: Date;
      /** Coupon code to apply. */
      couponCode?: string | null;
      /** Captcha data to prove you are not a robot */
      captcha: Captcha;
      /** Visitor info */
      guest: Guest;
      /** Form submission id that was submitted together with the order */
      submissionId?: string | null;
  }
  interface Captcha {
      /** Token from captcha */
      token?: string;
  }
  interface Guest {
      /** Email for checkout */
      email?: string;
  }
  interface CreateGuestOnlineOrderResponse {
      /** Order. */
      order?: Order;
  }
  interface CreateOfflineOrderRequest {
      /** ID of the plan being ordered. See [Plans for more information about plan IDs](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans). */
      planId: string;
      /** ID of the member ordering the plan. See [Members for more information about member IDs](https://dev.wix.com/api/rest/members/members). */
      memberId: string;
      /**
       * Start date and time for the ordered plan.
       *
       * Default: Current date and time
       */
      startDate?: Date;
      /**
       * Whether the order is paid.
       *
       * Default: `false`
       */
      paid?: boolean | null;
      /**
       * Coupon code to apply.
       *
       * See [Coupons to learn more](https://dev.wix.com/api/rest/coupons).
       */
      couponCode?: string | null;
      /** Form submission id that was submitted together with the order */
      submissionId?: string | null;
  }
  interface CreateOfflineOrderResponse {
      /** Order. */
      order?: Order;
  }
  interface GetOnlineOrderPreviewRequest {
      /** Plan ID. */
      planId: string;
      /**
       * Start date for the ordered plan.
       *
       * Default: Current date
       */
      startDate?: Date;
      /** Coupon code to apply. */
      couponCode?: string | null;
  }
  interface GetOnlineOrderPreviewResponse {
      /** Will be missing if limit is exceeded */
      order?: Order;
      /**
       * Whether the purchase limit has already been reached for this plan by this member.
       * Always false for plans without purchase limits.
       */
      purchaseLimitExceeded?: boolean;
  }
  interface GetGuestOnlineOrderPreviewRequest {
      /** Plan ID. */
      planId: string;
      /**
       * Start date for the ordered plan.
       *
       * Default: Current date
       */
      startDate?: Date;
      /** Coupon code to apply. */
      couponCode?: string | null;
      email: string;
  }
  interface GetGuestOnlineOrderPreviewResponse {
      /** Will be missing if limit is exceeded */
      order?: Order;
      /**
       * Whether the purchase limit has already been reached for this plan by this email.
       * Always false for plans without purchase limits.
       */
      purchaseLimitExceeded?: boolean;
  }
  interface GetOfflineOrderPreviewRequest {
      /** ID of the plan of the previewed order. See [Plans for more information about plan IDs](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans). */
      planId: string;
      /** Member ID of the buyer the previewed order is for. See [Members for more information about member IDs](https://dev.wix.com/api/rest/members/members). */
      memberId: string;
      /**
       * Start date and time for plan of the previewed order.
       *
       * Default: Current date and time
       */
      startDate?: Date;
      /** Coupon code to apply. See [Coupons to learn more](https://dev.wix.com/api/rest/coupons). */
      couponCode?: string | null;
  }
  interface GetOfflineOrderPreviewResponse {
      /** The previewed order, as if the plan had been ordered. */
      order?: Order;
      /**
       * Whether this previewed order would exceed the permitted amount of purchases available
       * for this plan for this buyer.
       *
       * Always `false` for plans that do not have purchase limits.
       */
      purchaseLimitExceeded?: boolean;
  }
  interface GetPricePreviewRequest {
      /** ID of plan to preview. */
      planId: string;
      /**
       * Coupon code to apply.
       *
       * See Coupons [to learn more](https://dev.wix.com/api/rest/coupons).
       */
      couponCode?: string | null;
  }
  interface GetPricePreviewResponse {
      /** __Deprecated.__ Use `prices` instead. This property will be removed on September 30, 2022. */
      price?: PriceDetails;
      /** Pricing details. */
      prices?: SpannedPrice[];
  }
  interface ChangeStartDateRequest {
      /** Draft order ID. */
      orderId: string;
      /** New valid from date (timestamp). */
      startDate: Date;
  }
  interface ChangeStartDateResponse {
      /** Updated draft order. */
      order?: Order;
  }
  interface OrderStartDateChanged {
      /** Order whose `startDate` changed. */
      order?: Order;
  }
  interface ApplyCouponRequest {
      /** Draft order ID. */
      orderId: string;
      /** Coupon code to apply. */
      couponCode: string;
  }
  interface ApplyCouponResponse {
      /** Order with applied coupon and recalculated tax. */
      order?: Order;
  }
  interface SetSubmissionRequest {
      orderId: string;
      submissionId: string;
  }
  interface SetSubmissionResponse {
      /** Order with submission id */
      order?: Order;
  }
  interface OrderPurchased {
      /** Order that was paid for. If a free or an offline order, the order that was created. */
      order?: Order;
  }
  interface OrderStarted {
      /** Order that reached its `startDate`. */
      order?: Order;
  }
  /**
   * Triggered at the start of a new payment cycle for an existing order.
   *
   * This webhook does not trigger at the initial start of an offline order.
   */
  interface OrderCycleStarted {
      /** Order whose new cycle started. */
      order?: Order;
      /** Number of the payment cycle will be 0 when the order is in the free trial period. In other cases, the cycle number starts from 1. */
      cycleNumber?: number;
  }
  /** Emitted when a recurring order is canceled for the next payment cycle */
  interface OrderAutoRenewCanceled {
      /** Order that is canceled, effective at the end of the current payment cycle. */
      order?: Order;
  }
  interface OrderEnded {
      /** Order that ended. */
      order?: Order;
  }
  interface GetOrderRequest {
      /** Order ID. */
      _id: string;
      fieldSet?: Set;
  }
  interface GetOrderResponse {
      /** Order. */
      order?: Order;
  }
  interface ListOrdersRequest {
      /** Filter by a buyer's member ID. See [Members to learn more about a site's members](https://dev.wix.com/api/rest/members/members). */
      buyerIds?: string[];
      /** Filter by plan IDs. See [Plans to learn more about pricing plans](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans). */
      planIds?: string[];
      /** Filter by whether or not the auto-renewal of recurring orders was canceled. */
      autoRenewCanceled?: boolean | null;
      /** Filter by order status. */
      orderStatuses?: OrderStatus[];
      /** Filter by payment status. */
      paymentStatuses?: PaymentStatus[];
      /**
       * Number of orders to return. See [Pagination](https://dev.wix.com/api/rest/getting-started/sorting-and-paging#getting-started_sorting-and-paging_paging) for more information.
       *
       * Max: `50`
       */
      limit?: number | null;
      /** Number of orders to skip in the current sort order. */
      offset?: number | null;
      /**
       * Sort order.
       *
       * Use `ASC` for ascending order or `DESC` for descending order.
       *
       * Default: `DESC`
       */
      sorting?: Sorting$1;
  }
  interface ListOrdersResponse {
      /** List of orders. */
      orders?: Order[];
      /** Object containing paging-related data (number of orders returned, offset). */
      pagingMetadata?: PagingMetadataV2$1;
  }
  interface OrdersQueryOrdersRequest {
      /** [See available fields here](https://dev.wix.com/api/rest/pricing-plans/pricing-plans/order-v2/filter-and-sort). */
      query?: QueryV2$1;
  }
  interface OrdersQueryOrdersResponse {
      /** Retrieved orders. */
      plans?: Order[];
      /** Paging-related data (number of orders returned, offset). */
      pagingMetadata?: PagingMetadataV2$1;
  }
  interface GetOrdersStatsRequest {
  }
  interface GetOrdersStatsResponse {
      /** Total number of orders. */
      totalOrderCount?: number;
      /** Number of active orders. */
      activeOrderCount?: number;
  }
  interface GetAvailableOrderActionsRequest {
      /** Order ID. */
      _id: string;
  }
  interface GetAvailableOrderActionsResponse {
      /** Whether the order can be suspended. */
      suspendable?: boolean;
      /** If the order cannot be suspended, a reason is returned here. */
      notSuspendableReason?: ReasonNotSuspendable;
      /** Whether the order can be canceled by the buyer. */
      cancelableByBuyer?: boolean;
  }
  enum ReasonNotSuspendable {
      /** Reason unknown */
      UNDEFINED = "UNDEFINED",
      /** Saved in the database but is awaiting payment. Non-active orders cannot be suspended */
      PENDING = "PENDING",
      /** Trial orders cannot be suspended */
      TRIAL = "TRIAL",
      /** Canceled orders cannot be suspended */
      CANCELED = "CANCELED",
      /** Ended orders cannot be suspended */
      ENDED = "ENDED",
      /** Paid for orders with future start dates cannot be suspended */
      NOT_STARTED = "NOT_STARTED",
      /** Order is already suspended */
      ALREADY_SUSPENDED = "ALREADY_SUSPENDED",
      /** Orders based on recurring payments using older Stripe versions cannot be suspended */
      OLD_STRIPE = "OLD_STRIPE"
  }
  interface PostponeEndDateRequest {
      /** Order ID. */
      _id: string;
      /**
       * New end date and time.
       *
       * Must be later than the current end date and time.
       */
      endDate?: Date;
  }
  interface PostponeEndDateResponse {
  }
  interface OrderEndDatePostponed {
      /** Order whose `endDate` was postponed. */
      order?: Order;
  }
  interface CancelOrderRequest {
      /** Order ID. */
      _id: string;
      /** __Required.__ When the order will be canceled. One-time orders can only be canceled `IMMEDIATELY`. */
      effectiveAt?: CancellationEffectiveAt;
  }
  interface CancelOrderResponse {
  }
  interface MarkAsPaidRequest {
      /** Order ID. */
      _id: string;
  }
  interface MarkAsPaidResponse {
  }
  interface OrderMarkedAsPaid {
      /** Order that was marked as paid. */
      order?: Order;
  }
  interface PauseOrderRequest {
      /** Order ID. */
      _id: string;
  }
  interface PauseOrderResponse {
  }
  interface OrderPaused {
      /** Paused order. */
      order?: Order;
  }
  interface BulkPauseOrderRequest {
      /** List of Order IDs. */
      ids: string[];
      /** Set to true to return Order entity in response. */
      returnFullEntity?: boolean;
  }
  interface BulkPauseOrderResponse {
      results?: BulkOrderResult[];
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkOrderResult {
      itemMetadata?: ItemMetadata$1;
      order?: Order;
  }
  interface ItemMetadata$1 {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError$1;
  }
  interface ApplicationError$1 {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface BulkActionMetadata$1 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface ResumeOrderRequest {
      /** Order ID. */
      _id: string;
  }
  interface ResumeOrderResponse {
  }
  interface OrderResumed {
      /** Resumed order. */
      order?: Order;
  }
  interface BulkResumeOrderRequest {
      /** List of Order IDs. */
      ids: string[];
      /** Set to true to return Order entity in response. */
      returnFullEntity?: boolean;
  }
  interface BulkResumeOrderResponse {
      results?: BulkOrderResult[];
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  /**
   * Retrieves an order by ID.
   * @param _id - Order ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function memberGetOrder(_id: string, options?: MemberGetOrderOptions): Promise<MemberGetOrderResponse>;
  interface MemberGetOrderOptions {
      fieldSet?: Set;
  }
  /**
   * Returns orders for currently logged in member.
   * @public
   * @documentationMaturity preview
   */
  function memberListOrders(options?: MemberListOrdersOptions): Promise<MemberListOrdersResponse>;
  interface MemberListOrdersOptions {
      /** Filter by plan IDs. */
      planIds?: string[];
      /** Filter for orders where auto renewal was canceled. */
      autoRenewCanceled?: boolean | null;
      /** Filter by order status. */
      orderStatuses?: OrderStatus[];
      /** Filter by payment status. */
      paymentStatuses?: PaymentStatus[];
      /** Limit the number of pricing plans returned. Default limit is 50. */
      limit?: number | null;
      /** Number of entries to offset. */
      offset?: number | null;
      /** Sorting direction (defaults to ASC) and field to sort by. [See available fields here](https://dev.wix.com/api/rest/pricing-plans/pricing-plans/order-v2/filter-and-sort). */
      sorting?: Sorting$1;
  }
  /**
   * Returns orders for currently logged in member based on provided query
   * @internal
   * @documentationMaturity preview
   */
  function memberQueryOrders(options?: MemberQueryOrdersOptions): Promise<QueryOrdersResponse>;
  interface MemberQueryOrdersOptions {
      query?: QueryV2$1;
  }
  /**
   * Cancels an order. Recurring orders can be canceled either immediately or at the next payment date.
   * One time orders can only be canceled immediately.
   * @param _id - Order ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function requestCancellation(_id: string, options?: RequestCancellationOptions): Promise<void>;
  interface RequestCancellationOptions {
      /** Required. Whether to cancel the order effective immediately or at the next payment date. One-time orders can only be canceled immediately. */
      effectiveAt?: CancellationEffectiveAt;
  }
  /**
   * Creates an order and initiates payment for currently logged in member.
   * Will not be exposed to 3rd parties until Wix Payments are exposed.
   * @param planId - Plan ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.onBehalf.memberId
   * @requiredField planId
   */
  function createOnlineOrder(planId: string, options?: CreateOnlineOrderOptions): Promise<CreateOnlineOrderResponse>;
  interface CreateOnlineOrderOptions {
      /**
       * Start date for the ordered plan.
       *
       * Default: Current date
       */
      startDate?: Date;
      /** Coupon code to apply. */
      couponCode?: string | null;
      /** Provided if checkout is initiated on buyer's behalf. */
      onBehalf?: OnBehalf;
      /** Form submission id that was submitted together with the order */
      submissionId?: string | null;
  }
  /**
   * Creates an order and initiates payment for currently logged in member.
   * Will not be exposed to 3rd parties until Wix Payments are exposed.
   * @param planId - Plan ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.captcha
   * @requiredField options.captcha.token
   * @requiredField options.guest
   * @requiredField options.guest.email
   * @requiredField planId
   */
  function createGuestOnlineOrder(planId: string, options?: CreateGuestOnlineOrderOptions): Promise<CreateGuestOnlineOrderResponse>;
  interface CreateGuestOnlineOrderOptions {
      /**
       * Start date for the ordered plan.
       *
       * Default: Current date
       */
      startDate?: Date;
      /** Coupon code to apply. */
      couponCode?: string | null;
      /** Captcha data to prove you are not a robot */
      captcha: Captcha;
      /** Visitor info */
      guest: Guest;
      /** Form submission id that was submitted together with the order */
      submissionId?: string | null;
  }
  /**
   * Creates an order for a buyer who purchased the plan with an offline transaction.
   *
   * An offline order is handled off of the Wix site and is marked as `offline` in `type`. If a pricing plan
   * has a limit on the amount of purchases per buyer, that limit is ignored for offline orders.
   * Tax is only applied if the site [has it configured](https://support.wix.com/en/article/pricing-plans-setting-up-tax-collection).
   *
   * Handle payment for an offline order in 1 of 2 ways:
   * + When creating the order, select `true` in the `paid` request parameter.
   * + After creation, use [Mark As Paid to mark the order as paid](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/mark-as-paid).
   * @param planId - ID of the plan being ordered. See [Plans for more information about plan IDs](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans).
   * @public
   * @documentationMaturity preview
   * @requiredField options.memberId
   * @requiredField planId
   */
  function createOfflineOrder(planId: string, options?: CreateOfflineOrderOptions): Promise<CreateOfflineOrderResponse>;
  interface CreateOfflineOrderOptions {
      /** ID of the member ordering the plan. See [Members for more information about member IDs](https://dev.wix.com/api/rest/members/members). */
      memberId: string;
      /**
       * Start date and time for the ordered plan.
       *
       * Default: Current date and time
       */
      startDate?: Date;
      /**
       * Whether the order is paid.
       *
       * Default: `false`
       */
      paid?: boolean | null;
      /**
       * Coupon code to apply.
       *
       * See [Coupons to learn more](https://dev.wix.com/api/rest/coupons).
       */
      couponCode?: string | null;
      /** Form submission id that was submitted together with the order */
      submissionId?: string | null;
  }
  /**
   * Forms an order preview using same logic as purchasing, except that it is not persisted anywhere.
   * Checks for purchase limitations, intended to be called with member identity.
   * [More information on tax here](https://support.wix.com/en/article/pricing-plans-setting-up-tax-collection).
   * Will not be exposed until CreateOnlineOrder is exposed.
   * @param planId - Plan ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField planId
   */
  function getOnlineOrderPreview(planId: string, options?: GetOnlineOrderPreviewOptions): Promise<GetOnlineOrderPreviewResponse>;
  interface GetOnlineOrderPreviewOptions {
      /**
       * Start date for the ordered plan.
       *
       * Default: Current date
       */
      startDate?: Date;
      /** Coupon code to apply. */
      couponCode?: string | null;
  }
  /**
   * Forms an order preview using same logic as purchasing, except that it is not persisted anywhere.
   * Checks for purchase limitations
   * [More information on tax here](https://support.wix.com/en/article/pricing-plans-setting-up-tax-collection).
   * Will not be exposed until CreateGuestOnlineOrder is exposed.
   * @param planId - Plan ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.email
   * @requiredField planId
   */
  function getGuestOnlineOrderPreview(planId: string, options?: GetGuestOnlineOrderPreviewOptions): Promise<GetGuestOnlineOrderPreviewResponse>;
  interface GetGuestOnlineOrderPreviewOptions {
      /**
       * Start date for the ordered plan.
       *
       * Default: Current date
       */
      startDate?: Date;
      /** Coupon code to apply. */
      couponCode?: string | null;
      email: string;
  }
  /**
   * Performs a dry run of a purchase and provides an order preview.
   *
   * The preview uses the same logic as purchasing a plan, but the preview is not saved. Because an order is not actually
   * created, the preview order's `orderId` and `subscriptionId` are displayed as a string of multiple zero characters
   * (`000000-0000`). Tax is only calculated if the site [has it configured](https://support.wix.com/en/article/pricing-plans-setting-up-tax-collection).
   * <br>
   * If a pricing plan has a limit on the amount of purchases per buyer, that limit is not considered for generating the preview.
   * But, if that limit has been reached and this order would then exceed the amount of purchases permitted for this buyer, then
   * `purchaseLimitExceeded` will return as `true`.
   *
   * To get a general price preview for a plan that's not buyer-specific, use [Get Price Preview](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/get-price-preview).
   * @param planId - ID of the plan of the previewed order. See [Plans for more information about plan IDs](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans).
   * @public
   * @documentationMaturity preview
   * @requiredField options.memberId
   * @requiredField planId
   */
  function getOfflineOrderPreview(planId: string, options?: GetOfflineOrderPreviewOptions): Promise<GetOfflineOrderPreviewResponse>;
  interface GetOfflineOrderPreviewOptions {
      /** Member ID of the buyer the previewed order is for. See [Members for more information about member IDs](https://dev.wix.com/api/rest/members/members). */
      memberId: string;
      /**
       * Start date and time for plan of the previewed order.
       *
       * Default: Current date and time
       */
      startDate?: Date;
      /** Coupon code to apply. See [Coupons to learn more](https://dev.wix.com/api/rest/coupons). */
      couponCode?: string | null;
  }
  /**
   * Retrieves a plan's pricing.
   *
   * The price preview uses the same logic as purchasing a plan, but the preview is not saved. Tax is only applied if
   * the site [has it configured](https://support.wix.com/en/article/pricing-plans-setting-up-tax-collection). The price is returned
   * in the [pricing model](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/introduction#wix-pricing-plans_pricing-plans_introduction_pricing-models) format used for orders.
   *
   * Buyers do not have to be logged in to preview the price, as such, the details returned are not buyer-specific. To
   * generate a preview of a purchase for a specific buyer, use [Get Offline Order Preview](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/get-offline-order-preview).
   * @param planId - ID of plan to preview.
   * @public
   * @documentationMaturity preview
   * @requiredField planId
   */
  function getPricePreview(planId: string, options?: GetPricePreviewOptions): Promise<GetPricePreviewResponse>;
  interface GetPricePreviewOptions {
      /**
       * Coupon code to apply.
       *
       * See Coupons [to learn more](https://dev.wix.com/api/rest/coupons).
       */
      couponCode?: string | null;
  }
  /**
   * Changes the start date of a draft order.
   * @param orderId - Draft order ID.
   * @param startDate - New valid from date (timestamp).
   * @internal
   * @documentationMaturity preview
   * @requiredField orderId
   * @requiredField startDate
   */
  function changeStartDate(orderId: string, startDate: Date): Promise<ChangeStartDateResponse>;
  /**
   * Applies a coupon to an order and recalculates tax if needed. Should be called at the last moment before the payment.
   * If you don't want to make change to an order and only want to see the plan price with applied coupon
   * you can use GetPricePreview, GetOnlineOrderPreview or GetOfflineOrderPreview endpoints with coupon code.
   * @param orderId - Draft order ID.
   * @param couponCode - Coupon code to apply.
   * @internal
   * @documentationMaturity preview
   * @requiredField couponCode
   * @requiredField orderId
   */
  function applyCoupon(orderId: string, couponCode: string): Promise<ApplyCouponResponse>;
  /**
   * Adds to a draft order reference to a submission. Member can only revise orders what were created by them.
   * @internal
   * @documentationMaturity preview
   * @requiredField orderId
   * @requiredField submissionId
   */
  function setSubmission(orderId: string, submissionId: string): Promise<SetSubmissionResponse>;
  /**
   * Retrieves an order by ID.
   * @param _id - Order ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function managementGetOrder(_id: string, options?: ManagementGetOrderOptions): Promise<GetOrderResponse>;
  interface ManagementGetOrderOptions {
      fieldSet?: Set;
  }
  /**
   * Retrieves a list of orders and details, given the provided sorting and filtering.
   *
   * By default, this endpoint will retrieve all orders and return them sorted by `createdDate` in `DESC`, descending order.
   * `sort.fieldName` supports `endDate` and `createdDate` fields and defaults to `ASC`, ascending order.
   * @public
   * @documentationMaturity preview
   */
  function managementListOrders(options?: ManagementListOrdersOptions): Promise<ListOrdersResponse>;
  interface ManagementListOrdersOptions {
      /** Filter by a buyer's member ID. See [Members to learn more about a site's members](https://dev.wix.com/api/rest/members/members). */
      buyerIds?: string[];
      /** Filter by plan IDs. See [Plans to learn more about pricing plans](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans). */
      planIds?: string[];
      /** Filter by whether or not the auto-renewal of recurring orders was canceled. */
      autoRenewCanceled?: boolean | null;
      /** Filter by order status. */
      orderStatuses?: OrderStatus[];
      /** Filter by payment status. */
      paymentStatuses?: PaymentStatus[];
      /**
       * Number of orders to return. See [Pagination](https://dev.wix.com/api/rest/getting-started/sorting-and-paging#getting-started_sorting-and-paging_paging) for more information.
       *
       * Max: `50`
       */
      limit?: number | null;
      /** Number of orders to skip in the current sort order. */
      offset?: number | null;
      /**
       * Sort order.
       *
       * Use `ASC` for ascending order or `DESC` for descending order.
       *
       * Default: `DESC`
       */
      sorting?: Sorting$1;
  }
  /**
   * TODO: Write orders filter and sort docs page
   * Retrieves a list of up to 1,000 orders, based on the provided [paging, sorting, and filtering](https://dev.wix.com/api/rest/pricing-plans/pricing-plans/order-v2/filter-and-sort).
   * @internal
   * @documentationMaturity preview
   */
  function managementQueryOrders(options?: ManagementQueryOrdersOptions): Promise<OrdersQueryOrdersResponse>;
  interface ManagementQueryOrdersOptions {
      /** [See available fields here](https://dev.wix.com/api/rest/pricing-plans/pricing-plans/order-v2/filter-and-sort). */
      query?: QueryV2$1;
  }
  /**
   * Retrieves statistics about the pricing plans orders. Currently providing the total number of orders and active orders.
   * @internal
   * @documentationMaturity preview
   */
  function getOrdersStats(): Promise<GetOrdersStatsResponse>;
  /** @param _id - Order ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   */
  function getAvailableOrderActions(_id: string): Promise<GetAvailableOrderActionsResponse>;
  /**
   * Extends the duration of a pricing plan order by postponing the order's `endDate`.
   *
   * New `endDate` must be later than the order's current `endDate`. Can't postpone orders that are unlimited.
   * Can't postpone an order while it is [`PAUSED`](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/pause-order).
   * @param _id - Order ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function postponeEndDate(_id: string, options?: PostponeEndDateOptions): Promise<void>;
  interface PostponeEndDateOptions {
      /**
       * New end date and time.
       *
       * Must be later than the current end date and time.
       */
      endDate?: Date;
  }
  /**
   * Cancels an existing order.
   *
   * For orders with recurring payments, a cancellation can be set to occur either `IMMEDIATELY` or at the `NEXT_PAYMENT_DATE`.
   * For orders with one-time payments, a cancellation can only be set for `IMMEDIATELY`.
   *
   * #### Canceling during the free trial period.
   *
   * When a buyer cancels their order during the free trial period, the buyer's subscription expires at the end
   * of the free trial period and they will not be billed. The buyer may continue using the benefits until the end
   * of the free trial period.
   *
   * When a site owner cancels an ordered plan during the free trial period, they choose to apply the cancellation
   * `IMMEDIATELY` or at the `NEXT_PAYMENT_DATE`. Canceling `IMMEDIATELY` will end the subscription for the buyer
   * immediately, even during the free trial period and the buyer won't be billed. Canceling at the
   * `NEXT_PAYMENT_DATE` allows the buyer to continue using the benefits of the subscription until the end of the free trial period.
   * Then, the subscription ends and the buyer is not billed.
   * @param _id - Order ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function cancelOrder(_id: string, options?: CancelOrderOptions): Promise<void>;
  interface CancelOrderOptions {
      /** __Required.__ When the order will be canceled. One-time orders can only be canceled `IMMEDIATELY`. */
      effectiveAt?: CancellationEffectiveAt;
  }
  /**
   * Marks an offline order as paid.
   * > __Note__: Marking separate payment cycles as paid is not yet supported. The entire order will be marked as paid.
   * @param _id - Order ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function markAsPaid(_id: string): Promise<void>;
  /**
   * Pauses an order.
   *
   * For orders with recurring payments, it also pauses the payment schedule. Buyers are not charged when an order is paused.
   * Pausing an order affects the end date of the order by adding the time the order is paused to the `endDate`. Can only pause orders with an `ACTIVE` status.
   *
   * Use [Resume Order to resume a paused order](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/resume-order/).
   * @param _id - Order ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function pauseOrder(_id: string): Promise<void>;
  /**
   * Pauses multiple orders.
   * @param ids - List of Order IDs.
   * @internal
   * @documentationMaturity preview
   * @requiredField ids
   */
  function bulkPauseOrder(ids: string[], options?: BulkPauseOrderOptions): Promise<BulkPauseOrderResponse>;
  interface BulkPauseOrderOptions {
      /** Set to true to return Order entity in response. */
      returnFullEntity?: boolean;
  }
  /**
   * Resumes a paused order.
   *
   * Updates `endDate` by adding the time the plan was paused.
   * For orders with recurring payments, it also restarts the payment schedule.
   * Use [Pause Order to pause an order](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/orders/pause-order/).
   * @param _id - Order ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function resumeOrder(_id: string): Promise<void>;
  /**
   * Resumes multiple paused orders.
   * @param ids - List of Order IDs.
   * @internal
   * @documentationMaturity preview
   * @requiredField ids
   */
  function bulkResumeOrder(ids: string[], options?: BulkResumeOrderOptions): Promise<BulkResumeOrderResponse>;
  interface BulkResumeOrderOptions {
      /** Set to true to return Order entity in response. */
      returnFullEntity?: boolean;
  }
  
  type pricingPlansV2Order_universal_d_Order = Order;
  type pricingPlansV2Order_universal_d_Buyer = Buyer;
  type pricingPlansV2Order_universal_d_PriceDetails = PriceDetails;
  type pricingPlansV2Order_universal_d_PriceDetailsPricingModelOneOf = PriceDetailsPricingModelOneOf;
  type pricingPlansV2Order_universal_d_Tax = Tax;
  type pricingPlansV2Order_universal_d_Coupon = Coupon;
  type pricingPlansV2Order_universal_d_PricingDetails = PricingDetails;
  type pricingPlansV2Order_universal_d_PricingDetailsPricingModelOneOf = PricingDetailsPricingModelOneOf;
  type pricingPlansV2Order_universal_d_SpannedPrice = SpannedPrice;
  type pricingPlansV2Order_universal_d_PriceDuration = PriceDuration;
  type pricingPlansV2Order_universal_d_Price = Price;
  type pricingPlansV2Order_universal_d_OrderType = OrderType;
  const pricingPlansV2Order_universal_d_OrderType: typeof OrderType;
  type pricingPlansV2Order_universal_d_OrderMethod = OrderMethod;
  const pricingPlansV2Order_universal_d_OrderMethod: typeof OrderMethod;
  type pricingPlansV2Order_universal_d_OrderStatus = OrderStatus;
  const pricingPlansV2Order_universal_d_OrderStatus: typeof OrderStatus;
  type pricingPlansV2Order_universal_d_Cancellation = Cancellation;
  type pricingPlansV2Order_universal_d_CancellationCause = CancellationCause;
  const pricingPlansV2Order_universal_d_CancellationCause: typeof CancellationCause;
  type pricingPlansV2Order_universal_d_CancellationEffectiveAt = CancellationEffectiveAt;
  const pricingPlansV2Order_universal_d_CancellationEffectiveAt: typeof CancellationEffectiveAt;
  type pricingPlansV2Order_universal_d_PaymentStatus = PaymentStatus;
  const pricingPlansV2Order_universal_d_PaymentStatus: typeof PaymentStatus;
  type pricingPlansV2Order_universal_d_PausePeriod = PausePeriod;
  type pricingPlansV2Order_universal_d_Status = Status;
  const pricingPlansV2Order_universal_d_Status: typeof Status;
  type pricingPlansV2Order_universal_d_CurrentCycle = CurrentCycle;
  type pricingPlansV2Order_universal_d_OrderCycle = OrderCycle;
  type pricingPlansV2Order_universal_d_FormData = FormData;
  type pricingPlansV2Order_universal_d_MemberGetOrderRequest = MemberGetOrderRequest;
  type pricingPlansV2Order_universal_d_Set = Set;
  const pricingPlansV2Order_universal_d_Set: typeof Set;
  type pricingPlansV2Order_universal_d_MemberGetOrderResponse = MemberGetOrderResponse;
  type pricingPlansV2Order_universal_d_MemberListOrdersRequest = MemberListOrdersRequest;
  type pricingPlansV2Order_universal_d_MemberListOrdersResponse = MemberListOrdersResponse;
  type pricingPlansV2Order_universal_d_QueryOrdersRequest = QueryOrdersRequest;
  type pricingPlansV2Order_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type pricingPlansV2Order_universal_d_CursorPaging = CursorPaging;
  type pricingPlansV2Order_universal_d_QueryOrdersResponse = QueryOrdersResponse;
  type pricingPlansV2Order_universal_d_RequestCancellationRequest = RequestCancellationRequest;
  type pricingPlansV2Order_universal_d_RequestCancellationResponse = RequestCancellationResponse;
  type pricingPlansV2Order_universal_d_OrderCanceled = OrderCanceled;
  type pricingPlansV2Order_universal_d_CreateOnlineOrderRequest = CreateOnlineOrderRequest;
  type pricingPlansV2Order_universal_d_OnBehalf = OnBehalf;
  type pricingPlansV2Order_universal_d_CreateOnlineOrderResponse = CreateOnlineOrderResponse;
  type pricingPlansV2Order_universal_d_CouponsError = CouponsError;
  type pricingPlansV2Order_universal_d_CreateGuestOnlineOrderRequest = CreateGuestOnlineOrderRequest;
  type pricingPlansV2Order_universal_d_Captcha = Captcha;
  type pricingPlansV2Order_universal_d_Guest = Guest;
  type pricingPlansV2Order_universal_d_CreateGuestOnlineOrderResponse = CreateGuestOnlineOrderResponse;
  type pricingPlansV2Order_universal_d_CreateOfflineOrderRequest = CreateOfflineOrderRequest;
  type pricingPlansV2Order_universal_d_CreateOfflineOrderResponse = CreateOfflineOrderResponse;
  type pricingPlansV2Order_universal_d_GetOnlineOrderPreviewRequest = GetOnlineOrderPreviewRequest;
  type pricingPlansV2Order_universal_d_GetOnlineOrderPreviewResponse = GetOnlineOrderPreviewResponse;
  type pricingPlansV2Order_universal_d_GetGuestOnlineOrderPreviewRequest = GetGuestOnlineOrderPreviewRequest;
  type pricingPlansV2Order_universal_d_GetGuestOnlineOrderPreviewResponse = GetGuestOnlineOrderPreviewResponse;
  type pricingPlansV2Order_universal_d_GetOfflineOrderPreviewRequest = GetOfflineOrderPreviewRequest;
  type pricingPlansV2Order_universal_d_GetOfflineOrderPreviewResponse = GetOfflineOrderPreviewResponse;
  type pricingPlansV2Order_universal_d_GetPricePreviewRequest = GetPricePreviewRequest;
  type pricingPlansV2Order_universal_d_GetPricePreviewResponse = GetPricePreviewResponse;
  type pricingPlansV2Order_universal_d_ChangeStartDateRequest = ChangeStartDateRequest;
  type pricingPlansV2Order_universal_d_ChangeStartDateResponse = ChangeStartDateResponse;
  type pricingPlansV2Order_universal_d_OrderStartDateChanged = OrderStartDateChanged;
  type pricingPlansV2Order_universal_d_ApplyCouponRequest = ApplyCouponRequest;
  type pricingPlansV2Order_universal_d_ApplyCouponResponse = ApplyCouponResponse;
  type pricingPlansV2Order_universal_d_SetSubmissionRequest = SetSubmissionRequest;
  type pricingPlansV2Order_universal_d_SetSubmissionResponse = SetSubmissionResponse;
  type pricingPlansV2Order_universal_d_OrderPurchased = OrderPurchased;
  type pricingPlansV2Order_universal_d_OrderStarted = OrderStarted;
  type pricingPlansV2Order_universal_d_OrderCycleStarted = OrderCycleStarted;
  type pricingPlansV2Order_universal_d_OrderAutoRenewCanceled = OrderAutoRenewCanceled;
  type pricingPlansV2Order_universal_d_OrderEnded = OrderEnded;
  type pricingPlansV2Order_universal_d_GetOrderRequest = GetOrderRequest;
  type pricingPlansV2Order_universal_d_GetOrderResponse = GetOrderResponse;
  type pricingPlansV2Order_universal_d_ListOrdersRequest = ListOrdersRequest;
  type pricingPlansV2Order_universal_d_ListOrdersResponse = ListOrdersResponse;
  type pricingPlansV2Order_universal_d_OrdersQueryOrdersRequest = OrdersQueryOrdersRequest;
  type pricingPlansV2Order_universal_d_OrdersQueryOrdersResponse = OrdersQueryOrdersResponse;
  type pricingPlansV2Order_universal_d_GetOrdersStatsRequest = GetOrdersStatsRequest;
  type pricingPlansV2Order_universal_d_GetOrdersStatsResponse = GetOrdersStatsResponse;
  type pricingPlansV2Order_universal_d_GetAvailableOrderActionsRequest = GetAvailableOrderActionsRequest;
  type pricingPlansV2Order_universal_d_GetAvailableOrderActionsResponse = GetAvailableOrderActionsResponse;
  type pricingPlansV2Order_universal_d_ReasonNotSuspendable = ReasonNotSuspendable;
  const pricingPlansV2Order_universal_d_ReasonNotSuspendable: typeof ReasonNotSuspendable;
  type pricingPlansV2Order_universal_d_PostponeEndDateRequest = PostponeEndDateRequest;
  type pricingPlansV2Order_universal_d_PostponeEndDateResponse = PostponeEndDateResponse;
  type pricingPlansV2Order_universal_d_OrderEndDatePostponed = OrderEndDatePostponed;
  type pricingPlansV2Order_universal_d_CancelOrderRequest = CancelOrderRequest;
  type pricingPlansV2Order_universal_d_CancelOrderResponse = CancelOrderResponse;
  type pricingPlansV2Order_universal_d_MarkAsPaidRequest = MarkAsPaidRequest;
  type pricingPlansV2Order_universal_d_MarkAsPaidResponse = MarkAsPaidResponse;
  type pricingPlansV2Order_universal_d_OrderMarkedAsPaid = OrderMarkedAsPaid;
  type pricingPlansV2Order_universal_d_PauseOrderRequest = PauseOrderRequest;
  type pricingPlansV2Order_universal_d_PauseOrderResponse = PauseOrderResponse;
  type pricingPlansV2Order_universal_d_OrderPaused = OrderPaused;
  type pricingPlansV2Order_universal_d_BulkPauseOrderRequest = BulkPauseOrderRequest;
  type pricingPlansV2Order_universal_d_BulkPauseOrderResponse = BulkPauseOrderResponse;
  type pricingPlansV2Order_universal_d_BulkOrderResult = BulkOrderResult;
  type pricingPlansV2Order_universal_d_ResumeOrderRequest = ResumeOrderRequest;
  type pricingPlansV2Order_universal_d_ResumeOrderResponse = ResumeOrderResponse;
  type pricingPlansV2Order_universal_d_OrderResumed = OrderResumed;
  type pricingPlansV2Order_universal_d_BulkResumeOrderRequest = BulkResumeOrderRequest;
  type pricingPlansV2Order_universal_d_BulkResumeOrderResponse = BulkResumeOrderResponse;
  const pricingPlansV2Order_universal_d_memberGetOrder: typeof memberGetOrder;
  type pricingPlansV2Order_universal_d_MemberGetOrderOptions = MemberGetOrderOptions;
  const pricingPlansV2Order_universal_d_memberListOrders: typeof memberListOrders;
  type pricingPlansV2Order_universal_d_MemberListOrdersOptions = MemberListOrdersOptions;
  const pricingPlansV2Order_universal_d_memberQueryOrders: typeof memberQueryOrders;
  type pricingPlansV2Order_universal_d_MemberQueryOrdersOptions = MemberQueryOrdersOptions;
  const pricingPlansV2Order_universal_d_requestCancellation: typeof requestCancellation;
  type pricingPlansV2Order_universal_d_RequestCancellationOptions = RequestCancellationOptions;
  const pricingPlansV2Order_universal_d_createOnlineOrder: typeof createOnlineOrder;
  type pricingPlansV2Order_universal_d_CreateOnlineOrderOptions = CreateOnlineOrderOptions;
  const pricingPlansV2Order_universal_d_createGuestOnlineOrder: typeof createGuestOnlineOrder;
  type pricingPlansV2Order_universal_d_CreateGuestOnlineOrderOptions = CreateGuestOnlineOrderOptions;
  const pricingPlansV2Order_universal_d_createOfflineOrder: typeof createOfflineOrder;
  type pricingPlansV2Order_universal_d_CreateOfflineOrderOptions = CreateOfflineOrderOptions;
  const pricingPlansV2Order_universal_d_getOnlineOrderPreview: typeof getOnlineOrderPreview;
  type pricingPlansV2Order_universal_d_GetOnlineOrderPreviewOptions = GetOnlineOrderPreviewOptions;
  const pricingPlansV2Order_universal_d_getGuestOnlineOrderPreview: typeof getGuestOnlineOrderPreview;
  type pricingPlansV2Order_universal_d_GetGuestOnlineOrderPreviewOptions = GetGuestOnlineOrderPreviewOptions;
  const pricingPlansV2Order_universal_d_getOfflineOrderPreview: typeof getOfflineOrderPreview;
  type pricingPlansV2Order_universal_d_GetOfflineOrderPreviewOptions = GetOfflineOrderPreviewOptions;
  const pricingPlansV2Order_universal_d_getPricePreview: typeof getPricePreview;
  type pricingPlansV2Order_universal_d_GetPricePreviewOptions = GetPricePreviewOptions;
  const pricingPlansV2Order_universal_d_changeStartDate: typeof changeStartDate;
  const pricingPlansV2Order_universal_d_applyCoupon: typeof applyCoupon;
  const pricingPlansV2Order_universal_d_setSubmission: typeof setSubmission;
  const pricingPlansV2Order_universal_d_managementGetOrder: typeof managementGetOrder;
  type pricingPlansV2Order_universal_d_ManagementGetOrderOptions = ManagementGetOrderOptions;
  const pricingPlansV2Order_universal_d_managementListOrders: typeof managementListOrders;
  type pricingPlansV2Order_universal_d_ManagementListOrdersOptions = ManagementListOrdersOptions;
  const pricingPlansV2Order_universal_d_managementQueryOrders: typeof managementQueryOrders;
  type pricingPlansV2Order_universal_d_ManagementQueryOrdersOptions = ManagementQueryOrdersOptions;
  const pricingPlansV2Order_universal_d_getOrdersStats: typeof getOrdersStats;
  const pricingPlansV2Order_universal_d_getAvailableOrderActions: typeof getAvailableOrderActions;
  const pricingPlansV2Order_universal_d_postponeEndDate: typeof postponeEndDate;
  type pricingPlansV2Order_universal_d_PostponeEndDateOptions = PostponeEndDateOptions;
  const pricingPlansV2Order_universal_d_cancelOrder: typeof cancelOrder;
  type pricingPlansV2Order_universal_d_CancelOrderOptions = CancelOrderOptions;
  const pricingPlansV2Order_universal_d_markAsPaid: typeof markAsPaid;
  const pricingPlansV2Order_universal_d_pauseOrder: typeof pauseOrder;
  const pricingPlansV2Order_universal_d_bulkPauseOrder: typeof bulkPauseOrder;
  type pricingPlansV2Order_universal_d_BulkPauseOrderOptions = BulkPauseOrderOptions;
  const pricingPlansV2Order_universal_d_resumeOrder: typeof resumeOrder;
  const pricingPlansV2Order_universal_d_bulkResumeOrder: typeof bulkResumeOrder;
  type pricingPlansV2Order_universal_d_BulkResumeOrderOptions = BulkResumeOrderOptions;
  namespace pricingPlansV2Order_universal_d {
    export {
      __debug$1 as __debug,
      pricingPlansV2Order_universal_d_Order as Order,
      pricingPlansV2Order_universal_d_Buyer as Buyer,
      pricingPlansV2Order_universal_d_PriceDetails as PriceDetails,
      pricingPlansV2Order_universal_d_PriceDetailsPricingModelOneOf as PriceDetailsPricingModelOneOf,
      pricingPlansV2Order_universal_d_Tax as Tax,
      Recurrence$1 as Recurrence,
      Duration$1 as Duration,
      PeriodUnit$1 as PeriodUnit,
      pricingPlansV2Order_universal_d_Coupon as Coupon,
      pricingPlansV2Order_universal_d_PricingDetails as PricingDetails,
      pricingPlansV2Order_universal_d_PricingDetailsPricingModelOneOf as PricingDetailsPricingModelOneOf,
      pricingPlansV2Order_universal_d_SpannedPrice as SpannedPrice,
      pricingPlansV2Order_universal_d_PriceDuration as PriceDuration,
      pricingPlansV2Order_universal_d_Price as Price,
      pricingPlansV2Order_universal_d_OrderType as OrderType,
      pricingPlansV2Order_universal_d_OrderMethod as OrderMethod,
      pricingPlansV2Order_universal_d_OrderStatus as OrderStatus,
      pricingPlansV2Order_universal_d_Cancellation as Cancellation,
      pricingPlansV2Order_universal_d_CancellationCause as CancellationCause,
      pricingPlansV2Order_universal_d_CancellationEffectiveAt as CancellationEffectiveAt,
      pricingPlansV2Order_universal_d_PaymentStatus as PaymentStatus,
      pricingPlansV2Order_universal_d_PausePeriod as PausePeriod,
      pricingPlansV2Order_universal_d_Status as Status,
      pricingPlansV2Order_universal_d_CurrentCycle as CurrentCycle,
      pricingPlansV2Order_universal_d_OrderCycle as OrderCycle,
      pricingPlansV2Order_universal_d_FormData as FormData,
      pricingPlansV2Order_universal_d_MemberGetOrderRequest as MemberGetOrderRequest,
      pricingPlansV2Order_universal_d_Set as Set,
      pricingPlansV2Order_universal_d_MemberGetOrderResponse as MemberGetOrderResponse,
      pricingPlansV2Order_universal_d_MemberListOrdersRequest as MemberListOrdersRequest,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      pricingPlansV2Order_universal_d_MemberListOrdersResponse as MemberListOrdersResponse,
      PagingMetadataV2$1 as PagingMetadataV2,
      Cursors$1 as Cursors,
      pricingPlansV2Order_universal_d_QueryOrdersRequest as QueryOrdersRequest,
      QueryV2$1 as QueryV2,
      pricingPlansV2Order_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      Paging$1 as Paging,
      pricingPlansV2Order_universal_d_CursorPaging as CursorPaging,
      pricingPlansV2Order_universal_d_QueryOrdersResponse as QueryOrdersResponse,
      pricingPlansV2Order_universal_d_RequestCancellationRequest as RequestCancellationRequest,
      pricingPlansV2Order_universal_d_RequestCancellationResponse as RequestCancellationResponse,
      pricingPlansV2Order_universal_d_OrderCanceled as OrderCanceled,
      pricingPlansV2Order_universal_d_CreateOnlineOrderRequest as CreateOnlineOrderRequest,
      pricingPlansV2Order_universal_d_OnBehalf as OnBehalf,
      pricingPlansV2Order_universal_d_CreateOnlineOrderResponse as CreateOnlineOrderResponse,
      pricingPlansV2Order_universal_d_CouponsError as CouponsError,
      pricingPlansV2Order_universal_d_CreateGuestOnlineOrderRequest as CreateGuestOnlineOrderRequest,
      pricingPlansV2Order_universal_d_Captcha as Captcha,
      pricingPlansV2Order_universal_d_Guest as Guest,
      pricingPlansV2Order_universal_d_CreateGuestOnlineOrderResponse as CreateGuestOnlineOrderResponse,
      pricingPlansV2Order_universal_d_CreateOfflineOrderRequest as CreateOfflineOrderRequest,
      pricingPlansV2Order_universal_d_CreateOfflineOrderResponse as CreateOfflineOrderResponse,
      pricingPlansV2Order_universal_d_GetOnlineOrderPreviewRequest as GetOnlineOrderPreviewRequest,
      pricingPlansV2Order_universal_d_GetOnlineOrderPreviewResponse as GetOnlineOrderPreviewResponse,
      pricingPlansV2Order_universal_d_GetGuestOnlineOrderPreviewRequest as GetGuestOnlineOrderPreviewRequest,
      pricingPlansV2Order_universal_d_GetGuestOnlineOrderPreviewResponse as GetGuestOnlineOrderPreviewResponse,
      pricingPlansV2Order_universal_d_GetOfflineOrderPreviewRequest as GetOfflineOrderPreviewRequest,
      pricingPlansV2Order_universal_d_GetOfflineOrderPreviewResponse as GetOfflineOrderPreviewResponse,
      pricingPlansV2Order_universal_d_GetPricePreviewRequest as GetPricePreviewRequest,
      pricingPlansV2Order_universal_d_GetPricePreviewResponse as GetPricePreviewResponse,
      pricingPlansV2Order_universal_d_ChangeStartDateRequest as ChangeStartDateRequest,
      pricingPlansV2Order_universal_d_ChangeStartDateResponse as ChangeStartDateResponse,
      pricingPlansV2Order_universal_d_OrderStartDateChanged as OrderStartDateChanged,
      pricingPlansV2Order_universal_d_ApplyCouponRequest as ApplyCouponRequest,
      pricingPlansV2Order_universal_d_ApplyCouponResponse as ApplyCouponResponse,
      pricingPlansV2Order_universal_d_SetSubmissionRequest as SetSubmissionRequest,
      pricingPlansV2Order_universal_d_SetSubmissionResponse as SetSubmissionResponse,
      pricingPlansV2Order_universal_d_OrderPurchased as OrderPurchased,
      pricingPlansV2Order_universal_d_OrderStarted as OrderStarted,
      pricingPlansV2Order_universal_d_OrderCycleStarted as OrderCycleStarted,
      pricingPlansV2Order_universal_d_OrderAutoRenewCanceled as OrderAutoRenewCanceled,
      pricingPlansV2Order_universal_d_OrderEnded as OrderEnded,
      pricingPlansV2Order_universal_d_GetOrderRequest as GetOrderRequest,
      pricingPlansV2Order_universal_d_GetOrderResponse as GetOrderResponse,
      pricingPlansV2Order_universal_d_ListOrdersRequest as ListOrdersRequest,
      pricingPlansV2Order_universal_d_ListOrdersResponse as ListOrdersResponse,
      pricingPlansV2Order_universal_d_OrdersQueryOrdersRequest as OrdersQueryOrdersRequest,
      pricingPlansV2Order_universal_d_OrdersQueryOrdersResponse as OrdersQueryOrdersResponse,
      pricingPlansV2Order_universal_d_GetOrdersStatsRequest as GetOrdersStatsRequest,
      pricingPlansV2Order_universal_d_GetOrdersStatsResponse as GetOrdersStatsResponse,
      pricingPlansV2Order_universal_d_GetAvailableOrderActionsRequest as GetAvailableOrderActionsRequest,
      pricingPlansV2Order_universal_d_GetAvailableOrderActionsResponse as GetAvailableOrderActionsResponse,
      pricingPlansV2Order_universal_d_ReasonNotSuspendable as ReasonNotSuspendable,
      pricingPlansV2Order_universal_d_PostponeEndDateRequest as PostponeEndDateRequest,
      pricingPlansV2Order_universal_d_PostponeEndDateResponse as PostponeEndDateResponse,
      pricingPlansV2Order_universal_d_OrderEndDatePostponed as OrderEndDatePostponed,
      pricingPlansV2Order_universal_d_CancelOrderRequest as CancelOrderRequest,
      pricingPlansV2Order_universal_d_CancelOrderResponse as CancelOrderResponse,
      pricingPlansV2Order_universal_d_MarkAsPaidRequest as MarkAsPaidRequest,
      pricingPlansV2Order_universal_d_MarkAsPaidResponse as MarkAsPaidResponse,
      pricingPlansV2Order_universal_d_OrderMarkedAsPaid as OrderMarkedAsPaid,
      pricingPlansV2Order_universal_d_PauseOrderRequest as PauseOrderRequest,
      pricingPlansV2Order_universal_d_PauseOrderResponse as PauseOrderResponse,
      pricingPlansV2Order_universal_d_OrderPaused as OrderPaused,
      pricingPlansV2Order_universal_d_BulkPauseOrderRequest as BulkPauseOrderRequest,
      pricingPlansV2Order_universal_d_BulkPauseOrderResponse as BulkPauseOrderResponse,
      pricingPlansV2Order_universal_d_BulkOrderResult as BulkOrderResult,
      ItemMetadata$1 as ItemMetadata,
      ApplicationError$1 as ApplicationError,
      BulkActionMetadata$1 as BulkActionMetadata,
      pricingPlansV2Order_universal_d_ResumeOrderRequest as ResumeOrderRequest,
      pricingPlansV2Order_universal_d_ResumeOrderResponse as ResumeOrderResponse,
      pricingPlansV2Order_universal_d_OrderResumed as OrderResumed,
      pricingPlansV2Order_universal_d_BulkResumeOrderRequest as BulkResumeOrderRequest,
      pricingPlansV2Order_universal_d_BulkResumeOrderResponse as BulkResumeOrderResponse,
      pricingPlansV2Order_universal_d_memberGetOrder as memberGetOrder,
      pricingPlansV2Order_universal_d_MemberGetOrderOptions as MemberGetOrderOptions,
      pricingPlansV2Order_universal_d_memberListOrders as memberListOrders,
      pricingPlansV2Order_universal_d_MemberListOrdersOptions as MemberListOrdersOptions,
      pricingPlansV2Order_universal_d_memberQueryOrders as memberQueryOrders,
      pricingPlansV2Order_universal_d_MemberQueryOrdersOptions as MemberQueryOrdersOptions,
      pricingPlansV2Order_universal_d_requestCancellation as requestCancellation,
      pricingPlansV2Order_universal_d_RequestCancellationOptions as RequestCancellationOptions,
      pricingPlansV2Order_universal_d_createOnlineOrder as createOnlineOrder,
      pricingPlansV2Order_universal_d_CreateOnlineOrderOptions as CreateOnlineOrderOptions,
      pricingPlansV2Order_universal_d_createGuestOnlineOrder as createGuestOnlineOrder,
      pricingPlansV2Order_universal_d_CreateGuestOnlineOrderOptions as CreateGuestOnlineOrderOptions,
      pricingPlansV2Order_universal_d_createOfflineOrder as createOfflineOrder,
      pricingPlansV2Order_universal_d_CreateOfflineOrderOptions as CreateOfflineOrderOptions,
      pricingPlansV2Order_universal_d_getOnlineOrderPreview as getOnlineOrderPreview,
      pricingPlansV2Order_universal_d_GetOnlineOrderPreviewOptions as GetOnlineOrderPreviewOptions,
      pricingPlansV2Order_universal_d_getGuestOnlineOrderPreview as getGuestOnlineOrderPreview,
      pricingPlansV2Order_universal_d_GetGuestOnlineOrderPreviewOptions as GetGuestOnlineOrderPreviewOptions,
      pricingPlansV2Order_universal_d_getOfflineOrderPreview as getOfflineOrderPreview,
      pricingPlansV2Order_universal_d_GetOfflineOrderPreviewOptions as GetOfflineOrderPreviewOptions,
      pricingPlansV2Order_universal_d_getPricePreview as getPricePreview,
      pricingPlansV2Order_universal_d_GetPricePreviewOptions as GetPricePreviewOptions,
      pricingPlansV2Order_universal_d_changeStartDate as changeStartDate,
      pricingPlansV2Order_universal_d_applyCoupon as applyCoupon,
      pricingPlansV2Order_universal_d_setSubmission as setSubmission,
      pricingPlansV2Order_universal_d_managementGetOrder as managementGetOrder,
      pricingPlansV2Order_universal_d_ManagementGetOrderOptions as ManagementGetOrderOptions,
      pricingPlansV2Order_universal_d_managementListOrders as managementListOrders,
      pricingPlansV2Order_universal_d_ManagementListOrdersOptions as ManagementListOrdersOptions,
      pricingPlansV2Order_universal_d_managementQueryOrders as managementQueryOrders,
      pricingPlansV2Order_universal_d_ManagementQueryOrdersOptions as ManagementQueryOrdersOptions,
      pricingPlansV2Order_universal_d_getOrdersStats as getOrdersStats,
      pricingPlansV2Order_universal_d_getAvailableOrderActions as getAvailableOrderActions,
      pricingPlansV2Order_universal_d_postponeEndDate as postponeEndDate,
      pricingPlansV2Order_universal_d_PostponeEndDateOptions as PostponeEndDateOptions,
      pricingPlansV2Order_universal_d_cancelOrder as cancelOrder,
      pricingPlansV2Order_universal_d_CancelOrderOptions as CancelOrderOptions,
      pricingPlansV2Order_universal_d_markAsPaid as markAsPaid,
      pricingPlansV2Order_universal_d_pauseOrder as pauseOrder,
      pricingPlansV2Order_universal_d_bulkPauseOrder as bulkPauseOrder,
      pricingPlansV2Order_universal_d_BulkPauseOrderOptions as BulkPauseOrderOptions,
      pricingPlansV2Order_universal_d_resumeOrder as resumeOrder,
      pricingPlansV2Order_universal_d_bulkResumeOrder as bulkResumeOrder,
      pricingPlansV2Order_universal_d_BulkResumeOrderOptions as BulkResumeOrderOptions,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Information about the pricing plan. */
  interface Plan {
      /**
       * Plan ID.
       * @readonly
       */
      _id?: string;
      /** Plan name. */
      name?: string | null;
      /** Plan description. */
      description?: string | null;
      /** What is included with this plan (e.g., 1 weekly entrance to a specific class). */
      perks?: StringList;
      /** Plan price, payment schedule, and expiration. */
      pricing?: Pricing;
      /** Whether the plan is public (visible to site visitors and members). */
      public?: boolean | null;
      /**
       * Whether the plan is archived. Archived plans are not visible and can't be purchased anymore, but existing purchases remain in effect.
       * @readonly
       */
      archived?: boolean;
      /**
       * Whether the plan is marked as primary.
       * @readonly
       */
      primary?: boolean;
      /**
       * Whether the plan has any orders (including pending and unpaid orders).
       * @readonly
       */
      hasOrders?: boolean;
      /**
       * Date plan was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date plan was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * URL-friendly version of plan name. Unique across all plans in the same site.
       * @readonly
       */
      slug?: string | null;
      /**
       * Number of times the same buyer can purchase the plan. Currently limited to support:
       * - Empty value or a value of `0`, meaning no limitation.
       * - Value of `1`, meaning limited to one purchase per buyer.
       */
      maxPurchasesPerBuyer?: number | null;
      /** Whether the buyer can start the plan at a later date. Defaults to false. */
      allowFutureStartDate?: boolean | null;
      /** Whether the buyer is allowed to cancel their plan. Defaults to false. */
      buyerCanCancel?: boolean | null;
      /** Any terms and conditions that apply to the plan. This information will be displayed during checkout. */
      termsAndConditions?: string | null;
      clientData?: Record<string, string>;
      /** Reference to a form which is shown in checkout to gather additional data */
      formId?: string | null;
  }
  /** This wrapper type exist in order to distinguish an empty string list from no list at all in update requests. */
  interface StringList {
      /** List of strings */
      values?: string[];
  }
  /** Plan pricing information. Includes the price of the plan and payment details. */
  interface Pricing extends PricingPricingModelOneOf {
      /** Amount for a single payment (or the whole subscription if it's not a recurring plan) */
      price?: Money;
      /** Free trial period for the plan in days. It’s available only for recurring plans. Set to 0 to remove free trial. */
      freeTrialDays?: number | null;
      /** Plan has recurring payments. */
      subscription?: Recurrence;
      /** One time payment, plan is valid for the specified duration. */
      singlePaymentForDuration?: Duration;
      /** One time payment, plan is valid until it is canceled. */
      singlePaymentUnlimited?: boolean | null;
  }
  /** @oneof */
  interface PricingPricingModelOneOf {
      /** Plan has recurring payments. */
      subscription?: Recurrence;
      /** One time payment, plan is valid for the specified duration. */
      singlePaymentForDuration?: Duration;
      /** One time payment, plan is valid until it is canceled. */
      singlePaymentUnlimited?: boolean | null;
  }
  /** An object specifying how often and for how long payments recur (may be forever). */
  interface Recurrence {
      /** Length of one payment cycle. */
      cycleDuration?: Duration;
      /**
       * Amount of payment cycles this subscription is valid for.
       *
       * `0` for unlimited or until-canceled.
       */
      cycleCount?: number | null;
  }
  /** A duration expressed in number of time units. */
  interface Duration {
      /**
       * The amount of a duration `unit` in a single payment cycle.
       *
       * Currently limited to support only `1`.
       */
      count?: number | null;
      /** Unit of time for the cycle duration. */
      unit?: PeriodUnit;
  }
  enum PeriodUnit {
      UNDEFINED = "UNDEFINED",
      DAY = "DAY",
      WEEK = "WEEK",
      MONTH = "MONTH",
      YEAR = "YEAR"
  }
  interface Money {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). */
      value?: string;
      /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
      currency?: string;
  }
  interface BuyerCanCancelUpdated {
      plan?: Plan;
  }
  interface ListPublicPlansRequest {
      /** Number of items to list. Defaults to 75. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number | null;
      /** Number of items to skip. Defaults to 0. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number | null;
      /** IDs of plans to list. Non-existent IDs will be ignored and won't cause errors. You can pass a maximum of 100 IDs. */
      planIds?: string[];
  }
  interface ListPublicPlansResponse {
      /** List of public pricing plans. */
      plans?: PublicPlan[];
      /** Object containing paging-related data (number of plans returned, offset). */
      pagingMetadata?: PagingMetadataV2;
  }
  /** Public plan entity containing information about the pricing plan. Can be read by any site member or visitor. */
  interface PublicPlan {
      /** Plan ID. */
      _id?: string;
      /** Plan name. */
      name?: string | null;
      /** Plan description. */
      description?: string | null;
      /** What is included with this plan (e.g., 1 weekly entrance to a specific class). */
      perks?: StringList;
      /** Plan price, payment schedule, and expiration. */
      pricing?: Pricing;
      /** Whether the plan is marked as primary. */
      primary?: boolean;
      /** Date plan was created. */
      _createdDate?: Date;
      /** Date plan was last updated. */
      _updatedDate?: Date;
      /** URL-friendly version of plan name. Unique across all plans in the same site. */
      slug?: string | null;
      /** Number of times the same buyer can purchase the plan. An empty value or a value of zero means no limitation. */
      maxPurchasesPerBuyer?: number | null;
      /** Whether the buyer can start the plan at a later date. Defaults to false. */
      allowFutureStartDate?: boolean | null;
      /** Whether the buyer is allowed to cancel their plan. Defaults to false. */
      buyerCanCancel?: boolean | null;
      /** Any terms and conditions that apply to the plan. This information will be displayed during checkout. */
      termsAndConditions?: string | null;
      clientData?: Record<string, string>;
      /** Reference to a form which is shown in checkout to gather additional data */
      formId?: string | null;
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
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryPublicPlansRequest {
      query?: QueryV2;
  }
  interface QueryV2 {
      /** A filter object. See [supported fields and operators](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans/filter-and-sort#wix-pricing-plans_pricing-plans_plans_filter-and-sort_query-public-plans) */
      filter?: Record<string, any> | null;
      /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
      sort?: Sorting[];
      /** Pointer to page of results using offset. Can not be used together with 'cursorPaging' */
      paging?: Paging;
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
  interface QueryPublicPlansResponse {
      /** List of public pricing plans that match the specified query. */
      plans?: PublicPlan[];
      /** Object containing paging-related data (number of plans returned, offset). */
      pagingMetadata?: PagingMetadataV2;
  }
  interface GetPlanRequest {
      /** Plan ID. */
      _id: string;
  }
  interface GetPlanResponse {
      /** Pricing plan. */
      plan?: Plan;
  }
  interface ListPlansRequest {
      /** Archived filter. Defaults to ACTIVE (not archived) only. */
      archived?: ArchivedFilter;
      /** Visibility filter. Defaults to PUBLIC_AND_HIDDEN (meaning, both are listed). */
      public?: PublicFilter;
      /** Number of pricing plans to list. Defaults to 75. */
      limit?: number | null;
      /** Number of pricing plans to skip. Defaults to 0. */
      offset?: number | null;
      /** Plan ID filter. Non-existent IDs are ignored, and won't cause errors. You can pass a maximum of 100 IDs. */
      planIds?: string[];
  }
  enum ArchivedFilter {
      /** Returns all plans that are active. */
      ACTIVE = "ACTIVE",
      /** Returns all plans that are archived. */
      ARCHIVED = "ARCHIVED",
      /** Returns all plans that are active and archived. */
      ARCHIVED_AND_ACTIVE = "ARCHIVED_AND_ACTIVE"
  }
  enum PublicFilter {
      /** Returns all public and hidden plans. */
      PUBLIC_AND_HIDDEN = "PUBLIC_AND_HIDDEN",
      /** Returns only public plans. */
      PUBLIC = "PUBLIC",
      /** Returns only hidden plans. */
      HIDDEN = "HIDDEN"
  }
  interface ListPlansResponse {
      /** List of all public and hidden pricing plans. */
      plans?: Plan[];
      /** Object containing paging-related data (number of plans returned, offset). */
      pagingMetadata?: PagingMetadataV2;
  }
  interface GetPlanStatsRequest {
  }
  interface GetPlanStatsResponse {
      /** Total number of plans created, including active plans (both public and hidden) and archived plans. */
      totalPlans?: number;
  }
  interface CreatePlanRequest {
      plan: Plan;
  }
  interface CreatePlanResponse {
      plan?: Plan;
  }
  interface UpdatePlanRequest {
      plan?: Plan;
      fieldMask?: string[];
  }
  interface UpdatePlanResponse {
      plan?: Plan;
  }
  interface SetPlanVisibilityRequest {
      _id: string;
      visible?: boolean;
  }
  interface SetPlanVisibilityResponse {
      plan?: Plan;
  }
  interface MakePlanPrimaryRequest {
      _id: string;
  }
  interface MakePlanPrimaryResponse {
      plan?: Plan;
  }
  interface ClearPrimaryRequest {
  }
  interface ClearPrimaryResponse {
  }
  interface ArchivePlanRequest {
      _id: string;
  }
  interface ArchivePlanResponse {
      plan?: Plan;
  }
  interface PlanArchived {
      plan?: Plan;
  }
  interface BulkArchivePlanRequest {
      /** List of Plan IDs. */
      ids: string[];
      /** Set to true to return Plan entity in response. */
      returnFullEntity?: boolean;
  }
  interface BulkArchivePlanResponse {
      results?: BulkPlanResult[];
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkPlanResult {
      itemMetadata?: ItemMetadata;
      plan?: Plan;
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
  interface ArrangePlansRequest {
      ids?: string[];
  }
  interface ArrangePlansResponse {
  }
  /**
   * Retrieves a list of up to 100 public pricing plans.
   * @public
   * @documentationMaturity preview
   */
  function listPublicPlans(options?: ListPublicPlansOptions): Promise<ListPublicPlansResponse>;
  interface ListPublicPlansOptions {
      /** Number of items to list. Defaults to 75. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number | null;
      /** Number of items to skip. Defaults to 0. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number | null;
      /** IDs of plans to list. Non-existent IDs will be ignored and won't cause errors. You can pass a maximum of 100 IDs. */
      planIds?: string[];
  }
  /**
   * Retrieves a list of up to 1,000 public pricing plans, given the provided pagination, [sorting, and filtering](https://dev.wix.com/api/rest/wix-pricing-plans/pricing-plans/plans/filter-and-sort).
   * @public
   * @documentationMaturity preview
   */
  function queryPublicPlans(options?: QueryPublicPlansOptions): Promise<QueryPublicPlansResponse>;
  interface QueryPublicPlansOptions {
      query?: QueryV2;
  }
  /**
   * Retrieves a pricing plan by ID.
   * @param _id - Plan ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function getPlan(_id: string): Promise<GetPlanResponse>;
  /**
   * Retrieves a list of up to 100 pricing plans (including public, hidden, and archived plans).
   * @public
   * @documentationMaturity preview
   */
  function listPlans(options?: ListPlansOptions): Promise<ListPlansResponse>;
  interface ListPlansOptions {
      /** Archived filter. Defaults to ACTIVE (not archived) only. */
      archived?: ArchivedFilter;
      /** Visibility filter. Defaults to PUBLIC_AND_HIDDEN (meaning, both are listed). */
      public?: PublicFilter;
      /** Number of pricing plans to list. Defaults to 75. */
      limit?: number | null;
      /** Number of pricing plans to skip. Defaults to 0. */
      offset?: number | null;
      /** Plan ID filter. Non-existent IDs are ignored, and won't cause errors. You can pass a maximum of 100 IDs. */
      planIds?: string[];
  }
  /**
   * Gets statistics about the pricing plans. Currently providing only the total number of pricing plans.
   * @public
   * @documentationMaturity preview
   */
  function getPlanStats(): Promise<GetPlanStatsResponse>;
  /**
   * Creates a pricing plan.
   * @public
   * @documentationMaturity preview
   * @requiredField plan
   * @requiredField plan.name
   * @requiredField plan.pricing
   * @requiredField plan.pricing.singlePaymentForDuration.count
   * @requiredField plan.pricing.subscription.cycleCount
   * @requiredField plan.pricing.subscription.cycleDuration
   * @requiredField plan.pricing.subscription.cycleDuration.count
   */
  function createPlan(plan: Plan): Promise<CreatePlanResponse>;
  /**
   * Updates a pricing plan.
   * Updating a plan does not impact existing orders made for the plan. All orders keep the details of the original plan that was active at the time of purchase.
   * @param _id - Plan ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function updatePlan(_id: string, options?: UpdatePlanOptions): Promise<UpdatePlanResponse>;
  interface UpdatePlanOptions {
      plan: {
          /**
           * Plan ID.
           * @readonly
           */
          _id?: string;
          /** Plan name. */
          name?: string | null;
          /** Plan description. */
          description?: string | null;
          /** What is included with this plan (e.g., 1 weekly entrance to a specific class). */
          perks?: StringList;
          /** Plan price, payment schedule, and expiration. */
          pricing?: Pricing;
          /** Whether the plan is public (visible to site visitors and members). */
          public?: boolean | null;
          /**
           * Whether the plan is archived. Archived plans are not visible and can't be purchased anymore, but existing purchases remain in effect.
           * @readonly
           */
          archived?: boolean;
          /**
           * Whether the plan is marked as primary.
           * @readonly
           */
          primary?: boolean;
          /**
           * Whether the plan has any orders (including pending and unpaid orders).
           * @readonly
           */
          hasOrders?: boolean;
          /**
           * Date plan was created.
           * @readonly
           */
          _createdDate?: Date;
          /**
           * Date plan was last updated.
           * @readonly
           */
          _updatedDate?: Date;
          /**
           * URL-friendly version of plan name. Unique across all plans in the same site.
           * @readonly
           */
          slug?: string | null;
          /**
           * Number of times the same buyer can purchase the plan. Currently limited to support:
           * - Empty value or a value of `0`, meaning no limitation.
           * - Value of `1`, meaning limited to one purchase per buyer.
           */
          maxPurchasesPerBuyer?: number | null;
          /** Whether the buyer can start the plan at a later date. Defaults to false. */
          allowFutureStartDate?: boolean | null;
          /** Whether the buyer is allowed to cancel their plan. Defaults to false. */
          buyerCanCancel?: boolean | null;
          /** Any terms and conditions that apply to the plan. This information will be displayed during checkout. */
          termsAndConditions?: string | null;
          clientData?: Record<string, string>;
          /** Reference to a form which is shown in checkout to gather additional data */
          formId?: string | null;
      };
      fieldMask?: string[];
  }
  /**
   * Sets visibility for pricing plans. Visible plans are considered public plans.
   * By default, pricing plans are public, meaning they are visible. Plans can be hidden so that site members and visitors cannot choose them.
   * As opposed to archiving, setting visibility can be reversed. This means that a public plan can be hidden, and a hidden plan can be made public (visible). (An archived plan always remains archived and cannot be made active again.)
   * Changing a plan’s visibility does not impact existing orders for the plan. All orders for hidden plans are still active and keep their perks.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function setPlanVisibility(_id: string, options?: SetPlanVisibilityOptions): Promise<SetPlanVisibilityResponse>;
  interface SetPlanVisibilityOptions {
      visible?: boolean;
  }
  /**
   * Marks a pricing plan as the primary pricing plan. When viewing pricing plans on the site, the primary plan is highlighted with a customizable ribbon.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function makePlanPrimary(_id: string): Promise<MakePlanPrimaryResponse>;
  /**
   * Sets all pricing plans as not primary. When viewing pricing plans on the site, no plan is highlighted with a customizable ribbon.
   * @public
   * @documentationMaturity preview
   */
  function clearPrimary(): Promise<void>;
  /**
   * Archives a single plan.
   * When a plan is archived, it is no longer visible as a public plan that can be chosen by site members or visitors. Archived plans cannot be purchased.
   * An archived plan cannot be made active again.
   * Plan archiving does not impact existing orders made for the plan. All orders for the plan are still active and keep their perks.
   * Site owners can see archived plans in the Dashboard under Pricing Plans -> Archived Plans.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   */
  function archivePlan(_id: string): Promise<ArchivePlanResponse>;
  /**
   * Archives multiple plans.
   * See "Archives a single plan" for more information.
   * @param ids - List of Plan IDs.
   * @internal
   * @documentationMaturity preview
   * @requiredField ids
   */
  function bulkArchivePlan(ids: string[], options?: BulkArchivePlanOptions): Promise<BulkArchivePlanResponse>;
  interface BulkArchivePlanOptions {
      /** Set to true to return Plan entity in response. */
      returnFullEntity?: boolean;
  }
  /**
   * Changes the display order of the plans on the site. To rearrange the order of the plans, provide a list of plan IDs in the desired order.
   * Include all public and hidden plans in the list you provide.
   * Make sure to provide all non-archived plan IDs to avoid unpredictable results
   * @public
   * @documentationMaturity preview
   */
  function arrangePlans(options?: ArrangePlansOptions): Promise<void>;
  interface ArrangePlansOptions {
      ids?: string[];
  }
  
  const pricingPlansV2Plan_universal_d___debug: typeof __debug;
  type pricingPlansV2Plan_universal_d_Plan = Plan;
  type pricingPlansV2Plan_universal_d_StringList = StringList;
  type pricingPlansV2Plan_universal_d_Pricing = Pricing;
  type pricingPlansV2Plan_universal_d_PricingPricingModelOneOf = PricingPricingModelOneOf;
  type pricingPlansV2Plan_universal_d_Recurrence = Recurrence;
  type pricingPlansV2Plan_universal_d_Duration = Duration;
  type pricingPlansV2Plan_universal_d_PeriodUnit = PeriodUnit;
  const pricingPlansV2Plan_universal_d_PeriodUnit: typeof PeriodUnit;
  type pricingPlansV2Plan_universal_d_Money = Money;
  type pricingPlansV2Plan_universal_d_BuyerCanCancelUpdated = BuyerCanCancelUpdated;
  type pricingPlansV2Plan_universal_d_ListPublicPlansRequest = ListPublicPlansRequest;
  type pricingPlansV2Plan_universal_d_ListPublicPlansResponse = ListPublicPlansResponse;
  type pricingPlansV2Plan_universal_d_PublicPlan = PublicPlan;
  type pricingPlansV2Plan_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type pricingPlansV2Plan_universal_d_Cursors = Cursors;
  type pricingPlansV2Plan_universal_d_QueryPublicPlansRequest = QueryPublicPlansRequest;
  type pricingPlansV2Plan_universal_d_QueryV2 = QueryV2;
  type pricingPlansV2Plan_universal_d_Sorting = Sorting;
  type pricingPlansV2Plan_universal_d_SortOrder = SortOrder;
  const pricingPlansV2Plan_universal_d_SortOrder: typeof SortOrder;
  type pricingPlansV2Plan_universal_d_Paging = Paging;
  type pricingPlansV2Plan_universal_d_QueryPublicPlansResponse = QueryPublicPlansResponse;
  type pricingPlansV2Plan_universal_d_GetPlanRequest = GetPlanRequest;
  type pricingPlansV2Plan_universal_d_GetPlanResponse = GetPlanResponse;
  type pricingPlansV2Plan_universal_d_ListPlansRequest = ListPlansRequest;
  type pricingPlansV2Plan_universal_d_ArchivedFilter = ArchivedFilter;
  const pricingPlansV2Plan_universal_d_ArchivedFilter: typeof ArchivedFilter;
  type pricingPlansV2Plan_universal_d_PublicFilter = PublicFilter;
  const pricingPlansV2Plan_universal_d_PublicFilter: typeof PublicFilter;
  type pricingPlansV2Plan_universal_d_ListPlansResponse = ListPlansResponse;
  type pricingPlansV2Plan_universal_d_GetPlanStatsRequest = GetPlanStatsRequest;
  type pricingPlansV2Plan_universal_d_GetPlanStatsResponse = GetPlanStatsResponse;
  type pricingPlansV2Plan_universal_d_CreatePlanRequest = CreatePlanRequest;
  type pricingPlansV2Plan_universal_d_CreatePlanResponse = CreatePlanResponse;
  type pricingPlansV2Plan_universal_d_UpdatePlanRequest = UpdatePlanRequest;
  type pricingPlansV2Plan_universal_d_UpdatePlanResponse = UpdatePlanResponse;
  type pricingPlansV2Plan_universal_d_SetPlanVisibilityRequest = SetPlanVisibilityRequest;
  type pricingPlansV2Plan_universal_d_SetPlanVisibilityResponse = SetPlanVisibilityResponse;
  type pricingPlansV2Plan_universal_d_MakePlanPrimaryRequest = MakePlanPrimaryRequest;
  type pricingPlansV2Plan_universal_d_MakePlanPrimaryResponse = MakePlanPrimaryResponse;
  type pricingPlansV2Plan_universal_d_ClearPrimaryRequest = ClearPrimaryRequest;
  type pricingPlansV2Plan_universal_d_ClearPrimaryResponse = ClearPrimaryResponse;
  type pricingPlansV2Plan_universal_d_ArchivePlanRequest = ArchivePlanRequest;
  type pricingPlansV2Plan_universal_d_ArchivePlanResponse = ArchivePlanResponse;
  type pricingPlansV2Plan_universal_d_PlanArchived = PlanArchived;
  type pricingPlansV2Plan_universal_d_BulkArchivePlanRequest = BulkArchivePlanRequest;
  type pricingPlansV2Plan_universal_d_BulkArchivePlanResponse = BulkArchivePlanResponse;
  type pricingPlansV2Plan_universal_d_BulkPlanResult = BulkPlanResult;
  type pricingPlansV2Plan_universal_d_ItemMetadata = ItemMetadata;
  type pricingPlansV2Plan_universal_d_ApplicationError = ApplicationError;
  type pricingPlansV2Plan_universal_d_BulkActionMetadata = BulkActionMetadata;
  type pricingPlansV2Plan_universal_d_ArrangePlansRequest = ArrangePlansRequest;
  type pricingPlansV2Plan_universal_d_ArrangePlansResponse = ArrangePlansResponse;
  const pricingPlansV2Plan_universal_d_listPublicPlans: typeof listPublicPlans;
  type pricingPlansV2Plan_universal_d_ListPublicPlansOptions = ListPublicPlansOptions;
  const pricingPlansV2Plan_universal_d_queryPublicPlans: typeof queryPublicPlans;
  type pricingPlansV2Plan_universal_d_QueryPublicPlansOptions = QueryPublicPlansOptions;
  const pricingPlansV2Plan_universal_d_getPlan: typeof getPlan;
  const pricingPlansV2Plan_universal_d_listPlans: typeof listPlans;
  type pricingPlansV2Plan_universal_d_ListPlansOptions = ListPlansOptions;
  const pricingPlansV2Plan_universal_d_getPlanStats: typeof getPlanStats;
  const pricingPlansV2Plan_universal_d_createPlan: typeof createPlan;
  const pricingPlansV2Plan_universal_d_updatePlan: typeof updatePlan;
  type pricingPlansV2Plan_universal_d_UpdatePlanOptions = UpdatePlanOptions;
  const pricingPlansV2Plan_universal_d_setPlanVisibility: typeof setPlanVisibility;
  type pricingPlansV2Plan_universal_d_SetPlanVisibilityOptions = SetPlanVisibilityOptions;
  const pricingPlansV2Plan_universal_d_makePlanPrimary: typeof makePlanPrimary;
  const pricingPlansV2Plan_universal_d_clearPrimary: typeof clearPrimary;
  const pricingPlansV2Plan_universal_d_archivePlan: typeof archivePlan;
  const pricingPlansV2Plan_universal_d_bulkArchivePlan: typeof bulkArchivePlan;
  type pricingPlansV2Plan_universal_d_BulkArchivePlanOptions = BulkArchivePlanOptions;
  const pricingPlansV2Plan_universal_d_arrangePlans: typeof arrangePlans;
  type pricingPlansV2Plan_universal_d_ArrangePlansOptions = ArrangePlansOptions;
  namespace pricingPlansV2Plan_universal_d {
    export {
      pricingPlansV2Plan_universal_d___debug as __debug,
      pricingPlansV2Plan_universal_d_Plan as Plan,
      pricingPlansV2Plan_universal_d_StringList as StringList,
      pricingPlansV2Plan_universal_d_Pricing as Pricing,
      pricingPlansV2Plan_universal_d_PricingPricingModelOneOf as PricingPricingModelOneOf,
      pricingPlansV2Plan_universal_d_Recurrence as Recurrence,
      pricingPlansV2Plan_universal_d_Duration as Duration,
      pricingPlansV2Plan_universal_d_PeriodUnit as PeriodUnit,
      pricingPlansV2Plan_universal_d_Money as Money,
      pricingPlansV2Plan_universal_d_BuyerCanCancelUpdated as BuyerCanCancelUpdated,
      pricingPlansV2Plan_universal_d_ListPublicPlansRequest as ListPublicPlansRequest,
      pricingPlansV2Plan_universal_d_ListPublicPlansResponse as ListPublicPlansResponse,
      pricingPlansV2Plan_universal_d_PublicPlan as PublicPlan,
      pricingPlansV2Plan_universal_d_PagingMetadataV2 as PagingMetadataV2,
      pricingPlansV2Plan_universal_d_Cursors as Cursors,
      pricingPlansV2Plan_universal_d_QueryPublicPlansRequest as QueryPublicPlansRequest,
      pricingPlansV2Plan_universal_d_QueryV2 as QueryV2,
      pricingPlansV2Plan_universal_d_Sorting as Sorting,
      pricingPlansV2Plan_universal_d_SortOrder as SortOrder,
      pricingPlansV2Plan_universal_d_Paging as Paging,
      pricingPlansV2Plan_universal_d_QueryPublicPlansResponse as QueryPublicPlansResponse,
      pricingPlansV2Plan_universal_d_GetPlanRequest as GetPlanRequest,
      pricingPlansV2Plan_universal_d_GetPlanResponse as GetPlanResponse,
      pricingPlansV2Plan_universal_d_ListPlansRequest as ListPlansRequest,
      pricingPlansV2Plan_universal_d_ArchivedFilter as ArchivedFilter,
      pricingPlansV2Plan_universal_d_PublicFilter as PublicFilter,
      pricingPlansV2Plan_universal_d_ListPlansResponse as ListPlansResponse,
      pricingPlansV2Plan_universal_d_GetPlanStatsRequest as GetPlanStatsRequest,
      pricingPlansV2Plan_universal_d_GetPlanStatsResponse as GetPlanStatsResponse,
      pricingPlansV2Plan_universal_d_CreatePlanRequest as CreatePlanRequest,
      pricingPlansV2Plan_universal_d_CreatePlanResponse as CreatePlanResponse,
      pricingPlansV2Plan_universal_d_UpdatePlanRequest as UpdatePlanRequest,
      pricingPlansV2Plan_universal_d_UpdatePlanResponse as UpdatePlanResponse,
      pricingPlansV2Plan_universal_d_SetPlanVisibilityRequest as SetPlanVisibilityRequest,
      pricingPlansV2Plan_universal_d_SetPlanVisibilityResponse as SetPlanVisibilityResponse,
      pricingPlansV2Plan_universal_d_MakePlanPrimaryRequest as MakePlanPrimaryRequest,
      pricingPlansV2Plan_universal_d_MakePlanPrimaryResponse as MakePlanPrimaryResponse,
      pricingPlansV2Plan_universal_d_ClearPrimaryRequest as ClearPrimaryRequest,
      pricingPlansV2Plan_universal_d_ClearPrimaryResponse as ClearPrimaryResponse,
      pricingPlansV2Plan_universal_d_ArchivePlanRequest as ArchivePlanRequest,
      pricingPlansV2Plan_universal_d_ArchivePlanResponse as ArchivePlanResponse,
      pricingPlansV2Plan_universal_d_PlanArchived as PlanArchived,
      pricingPlansV2Plan_universal_d_BulkArchivePlanRequest as BulkArchivePlanRequest,
      pricingPlansV2Plan_universal_d_BulkArchivePlanResponse as BulkArchivePlanResponse,
      pricingPlansV2Plan_universal_d_BulkPlanResult as BulkPlanResult,
      pricingPlansV2Plan_universal_d_ItemMetadata as ItemMetadata,
      pricingPlansV2Plan_universal_d_ApplicationError as ApplicationError,
      pricingPlansV2Plan_universal_d_BulkActionMetadata as BulkActionMetadata,
      pricingPlansV2Plan_universal_d_ArrangePlansRequest as ArrangePlansRequest,
      pricingPlansV2Plan_universal_d_ArrangePlansResponse as ArrangePlansResponse,
      pricingPlansV2Plan_universal_d_listPublicPlans as listPublicPlans,
      pricingPlansV2Plan_universal_d_ListPublicPlansOptions as ListPublicPlansOptions,
      pricingPlansV2Plan_universal_d_queryPublicPlans as queryPublicPlans,
      pricingPlansV2Plan_universal_d_QueryPublicPlansOptions as QueryPublicPlansOptions,
      pricingPlansV2Plan_universal_d_getPlan as getPlan,
      pricingPlansV2Plan_universal_d_listPlans as listPlans,
      pricingPlansV2Plan_universal_d_ListPlansOptions as ListPlansOptions,
      pricingPlansV2Plan_universal_d_getPlanStats as getPlanStats,
      pricingPlansV2Plan_universal_d_createPlan as createPlan,
      pricingPlansV2Plan_universal_d_updatePlan as updatePlan,
      pricingPlansV2Plan_universal_d_UpdatePlanOptions as UpdatePlanOptions,
      pricingPlansV2Plan_universal_d_setPlanVisibility as setPlanVisibility,
      pricingPlansV2Plan_universal_d_SetPlanVisibilityOptions as SetPlanVisibilityOptions,
      pricingPlansV2Plan_universal_d_makePlanPrimary as makePlanPrimary,
      pricingPlansV2Plan_universal_d_clearPrimary as clearPrimary,
      pricingPlansV2Plan_universal_d_archivePlan as archivePlan,
      pricingPlansV2Plan_universal_d_bulkArchivePlan as bulkArchivePlan,
      pricingPlansV2Plan_universal_d_BulkArchivePlanOptions as BulkArchivePlanOptions,
      pricingPlansV2Plan_universal_d_arrangePlans as arrangePlans,
      pricingPlansV2Plan_universal_d_ArrangePlansOptions as ArrangePlansOptions,
    };
  }
  
  export { pricingPlansV2Order_universal_d as orders, pricingPlansV2Plan_universal_d as plans };
}
