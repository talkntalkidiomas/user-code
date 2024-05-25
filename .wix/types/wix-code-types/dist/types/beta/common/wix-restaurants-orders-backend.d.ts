declare module "wix-restaurants-orders-backend" {
  interface Order {
      /**
       * Order ID.
       * @readonly
       */
      _id?: string;
      /**
       * Legacy restaurant ID, use only for legacy API
       * @internal
       * @readonly
       */
      restaurantId?: string;
      /**
       * ID of the restaurant’s location.
       * @readonly
       */
      locationId?: string | null;
      /**
       * Order creation date and time in `yyyy-mm-ddThh:mm:sssZ` format.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time of order's latest update in `yyyy-mm-ddThh:mm:sssZ` format.
       * @readonly
       */
      _updatedDate?: Date;
      /** Additional note to the order added by the customer. */
      comment?: string | null;
      /** Currency of the order. */
      currency?: string | null;
      /** Current order status. */
      status?: Status;
      /** Dishes and options included in the order. */
      lineItems?: LineItem[];
      /** Discounts associated with the order. */
      discounts?: Discount[];
      /** Coupon applied to the order. */
      coupon?: Coupon;
      /** Order payment information. */
      payments?: Payment[];
      /** Order fulfillment information. */
      fulfillment?: Fulfillment;
      /** Customer information. */
      customer?: Customer;
      /** Order totals. */
      totals?: Totals;
      /**
       * Log of order updates.
       * @readonly
       */
      activities?: Activity[];
      /** Information about the sales channel that submitted the order. */
      channelInfo?: ChannelInfo;
      /** Information about the order’s loyalty points. */
      loyaltyInfo?: LoyaltyInfo;
      /**
       * Information about the POS.
       * @internal
       */
      posInfo?: PosInfo;
  }
  /** This might be extended in the future with pending orders statuses */
  enum Status {
      /** Order status can't be classified, due to an error */
      UNSPECIFIED_ORDER_STATUS = "UNSPECIFIED_ORDER_STATUS",
      /** Order is pending response from the payment provider - IF THIS WILL REMAIN PAYMENT PROVIDER SPECIFIC, THIS SHOULD BE CLEAR FROM THE NAME - E.G. PENDING_PAYMENT_PROVIDER. */
      PENDING = "PENDING",
      /** The order is marked as new - wait for state machine */
      NEW = "NEW",
      /** Order was accepted */
      ACCEPTED = "ACCEPTED",
      /** Order is canceled */
      CANCELED = "CANCELED",
      /** Order is fulfilled */
      FULFILLED = "FULFILLED"
  }
  interface LineItem {
      /** Line item quantity. */
      quantity?: number;
      /** Line item price. */
      price?: string;
      /** Comment about the line item added by the customer. */
      comment?: string | null;
      /** List of all dish options available for the line item. */
      dishOptions?: LineItemOption[];
      /** References to the line item’s origin catalog. */
      catalogReference?: CatalogReference;
  }
  interface LineItemOption {
      /** Line item option name. */
      name?: string | null;
      /** List of all dish options selected by the customer. */
      selectedChoices?: LineItem[];
      /** Minimum number of dish options the customer is required to choose. */
      minChoices?: number | null;
      /** Maximum number of dish options the customer is allowed to choose. */
      maxChoices?: number | null;
      /** Dish option type. */
      type?: DisplayType;
      /** List of all available choices for the dish option. */
      availableChoices?: LineItemOptionItem[];
      /** List of dish option IDs selected by default. */
      defaultChoices?: string[] | null;
  }
  enum DisplayType {
      /** DisplayType, due to an error */
      UNSPECIFIED_DISPLAY_TYPE = "UNSPECIFIED_DISPLAY_TYPE",
      /** Single choice selection */
      SELECTION = "SELECTION",
      /** Multiple choices selection */
      EXTRAS = "EXTRAS",
      /** Allow choices removal */
      DESELECTION = "DESELECTION"
  }
  interface LineItemOptionItem {
      /** Line item ID as defined in the catalog. */
      itemId?: string | null;
      /** Line item price. */
      price?: string | null;
  }
  interface CatalogReference {
      /** Line item ID as defined in the catalog. */
      catalogItemId?: string;
      /**
       * Line item name as defined in the catalog.
       * @readonly
       */
      catalogItemName?: string | null;
      /**
       * Item description as defined in the catalog.
       * @readonly
       */
      catalogItemDescription?: string | null;
      /**
       * Item media url as defined in the catalog.
       * @readonly
       */
      catalogItemMedia?: string | null;
  }
  interface Discount {
      /** Discount ID as defined in the catalog. */
      catalogDiscountId?: string;
      /** Amount saved. */
      appliedAmount?: string;
      /** Discount type. */
      catalogDiscountType?: DiscountType;
      /** Discount name as defined in the catalog. */
      catalogDiscountName?: string;
  }
  enum DiscountType {
      UNSPECIFIED_TYPE = "UNSPECIFIED_TYPE",
      OFF_ITEM = "OFF_ITEM",
      OFF_ORDER = "OFF_ORDER",
      OFF_ORDER_MANAGER_DISCOUNT = "OFF_ORDER_MANAGER_DISCOUNT"
  }
  interface Coupon {
      /** Coupon code. */
      code?: string;
      /** Coupon ID. */
      _id?: string;
  }
  interface Payment {
      /** Payment type. */
      type?: PaymentType;
      /** Amount paid using this payment type. Only differs from total amount paid in case of split payments. */
      amount?: string | null;
      /** Payment method. */
      method?: string | null;
      /**
       * Transaction ID.
       * See [Cashier API](https://dev.wix.com/api/rest/wix-cashier/payments/transaction) for more details.
       */
      providerTransactionId?: string | null;
  }
  enum PaymentType {
      /** PaymentType, due to an error */
      UNSPECIFIED_PAYMENT_TYPE = "UNSPECIFIED_PAYMENT_TYPE",
      /** Cash */
      CASH = "CASH",
      /** credit */
      CREDIT = "CREDIT",
      /** Delivery club */
      DELIVERY_CLUB = "DELIVERY_CLUB",
      /** Delivery com */
      DELIVERY_COM = "DELIVERY_COM",
      /** Bitpay */
      BITPAY = "BITPAY",
      /** Cellarix */
      CELLARIX = "CELLARIX",
      /** Bits of gold */
      BITSOFGOLD = "BITSOFGOLD",
      /** Multi pass */
      MULTIPASS = "MULTIPASS",
      /** Tenbis */
      TENBIS = "TENBIS",
      /** Paypal */
      PAYPAL = "PAYPAL",
      /** Mysodexo */
      MYSODEXO = "MYSODEXO",
      /** Wix Payments */
      WIX_PAYMENTS = "WIX_PAYMENTS"
  }
  interface Fulfillment {
      /** Fulfillment type. */
      type?: FulfillmentType;
      /** Latest delivery time promised by the restaurant. */
      promisedTime?: Date;
      /** Whether the order should be fulfilled as soon as possible. Defaults to `true`. */
      asap?: boolean | null;
      /**
       * The time it takes to prepare and deliver the order in minutes
       * @internal
       */
      preparationTime?: number | null;
      /** Delivery details. */
      deliveryDetails?: DeliveryDetails;
      /** Pickup details. */
      pickupDetails?: PickupDetails;
      /** Dine-in details */
      dineInDetails?: DineInDetails;
  }
  enum FulfillmentType {
      /** Missing type due to an error */
      UNSPECIFIED_FULFILLMENT_TYPE = "UNSPECIFIED_FULFILLMENT_TYPE",
      /** Pickup */
      PICKUP = "PICKUP",
      /** Delivery */
      DELIVERY = "DELIVERY",
      /** Dine-in */
      DINE_IN = "DINE_IN"
  }
  interface DeliveryDetails {
      /** Delivery address. */
      address?: DeliveryAddress;
      /** Information about the delivery pickup. */
      pickupInfo?: PickupInfo;
      /**
       * Information about the delivery drop-off.
       * @internal
       */
      dropOffInfo?: DropOffInfo;
      /** Delivery through the restaurant. */
      restaurant?: Restaurant;
      /** Delivery through an external provider. */
      externalProvider?: ExternalProvider;
  }
  interface DeliveryAddress {
      /** Formatted delivery address. */
      formatted?: string | null;
      /** Country. */
      country?: string | null;
      /** City name. */
      city?: string | null;
      /** Street name. */
      street?: string | null;
      /** Street number. */
      streetNumber?: string | null;
      /** Apartment number. */
      apt?: string | null;
      /** Floor. */
      floor?: string | null;
      /** Entrance. */
      entrance?: string | null;
      /** ZIP/postal code. */
      zipCode?: string | null;
      /** Country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
      countryCode?: string | null;
      /** Special delivery instructions upon arrival to the address. */
      onArrival?: OnArrival;
      /** Whether an approximate address is used. Defaults to `false`. In case of `false` a house number is required. */
      approximate?: boolean | null;
      /** Delivery Instructions added by the customer. */
      comment?: string | null;
      /** Geo coordinates of the address. */
      location?: DeliveryAddressLocation;
      /** Address Line 2. */
      addressLine2?: string | null;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
  }
  enum OnArrival {
      /** Missing type due to an error */
      UNSPECIFIED_ON_ARRIVAL_TYPE = "UNSPECIFIED_ON_ARRIVAL_TYPE",
      /** Buzz the door */
      BUZZ_DOOR = "BUZZ_DOOR",
      /** Phone me */
      CALL_ME = "CALL_ME"
  }
  interface DeliveryAddressLocation {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Restaurant {
      /** Delivery fee. */
      fee?: string | null;
  }
  interface ExternalProvider {
      /** ID of the external delivery provider. */
      _id?: string;
      /**
       * Name of the external delivery provider.
       * @readonly
       */
      name?: string;
      /**
       * Delivery ID.
       * @internal
       */
      deliveryId?: string | null;
      /**
       * Estimate ID.
       * @internal
       */
      estimateId?: string | null;
      /** Delivery fee charged to the customer. */
      customerFee?: string | null;
      /**
       * Fee paid by the restaurant to the external delivery provider.
       * @readonly
       */
      commission?: string | null;
      /** Order pickup time. */
      pickupTime?: Date;
      /** Order drop off time. */
      dropOffTime?: Date;
      /**
       * Icon of the external delivery provider.
       * @internal
       */
      iconUrl?: string | null;
  }
  interface PickupInfo {
      /** When a delivery is ready to be picked up. This is the start time of the pickup window. */
      windowStartTime?: Date;
      /** When a delivery must be picked up by. This is the end time of the pickup window. */
      windowEndTime?: Date;
  }
  interface DropOffInfo {
      /** Whether the order is delivered contactless. */
      contactless?: boolean;
  }
  interface PickupDetails {
      /** Pickup fee charged to the customer. */
      fee?: string | null;
      /** Curbside pickup method */
      curbside?: Curbside;
  }
  interface Curbside {
      /** Additional information for curbside pickup. */
      info?: string;
  }
  interface DineInDetails {
      /** Label of dine-in information added by the restaurant, e.g. `table` or `booth`. */
      label?: string;
      /** Value of dine-in information added by the restaurant, e.g. `#6`. */
      value?: string;
  }
  /** Customer information. */
  interface Customer {
      /** First name. */
      firstName?: string;
      /** Last name. */
      lastName?: string;
      /** Phone number. */
      phone?: string | null;
      /** Email address. */
      email?: string;
      /**
       * Customer's contact ID.
       * See [Contacts API](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4) for more details.
       */
      contactId?: string | null;
      /** Member ID. */
      memberId?: string | null;
      /** Visitor ID. */
      visitorId?: string | null;
  }
  interface Totals {
      /** Order subtotal. Calculated by substracting delivery fee, tax and discount from order total. */
      subtotal?: string;
      /** Total order price. */
      total?: string;
      /** Total delivery fees charged to the customer. */
      delivery?: string | null;
      /** Total tax. */
      tax?: string | null;
      /** Total discount amount. */
      discount?: string | null;
      /** Total amount saved through the Wix Loyalty program. */
      loyaltySavings?: string | null;
      /**
       * Total number of line items.
       * @readonly
       */
      quantity?: number;
      /** Total tip. */
      tip?: string | null;
  }
  interface Activity {
      /**
       * Activity timestamp.
       * @readonly
       */
      timestamp?: Date;
      /**
       * Optional message added during order activity.
       * @readonly
       */
      message?: string | null;
  }
  interface ChannelInfo {
      type?: Type;
  }
  enum Type {
      UNSPECIFIED_CHANNEL_TYPE = "UNSPECIFIED_CHANNEL_TYPE",
      /** Web */
      WEB = "WEB",
      /** mobileWeb */
      MOBILE_WEB = "MOBILE_WEB",
      /** mobile */
      MOBILE = "MOBILE",
      /** callCenter */
      CALL_CENTER = "CALL_CENTER",
      /** facebook */
      FACEBOOK = "FACEBOOK",
      /** TPA */
      TPA = "TPA"
  }
  interface LoyaltyInfo {
      /** Associated Wix Loyalty reward ID. */
      rewardId?: string | null;
      /** Amount saved redeeming Wix Loyalty reward. */
      appliedAmount?: string | null;
      /**
       * Wix Loyalty points redeemed.
       * @readonly
       */
      redeemedPoints?: number | null;
      /**
       * Associated Wix Loyalty transaction ID.
       * @readonly
       */
      transactionId?: string | null;
  }
  interface PosInfo {
      externalProvider?: PosInfoExternalProvider;
  }
  interface PosInfoExternalProvider {
      /** ID of the external provider. */
      _id?: string;
      /** ID of the order in the external provider. */
      orderId?: string;
  }
  interface GetTotalActiveOrdersResponse {
      /** list of locationId's mapped to the total number of orders. */
      totals?: LocationToAmount[];
  }
  interface LocationToAmount {
      locationId?: string;
      locationName?: string | null;
      totalNew?: number;
      totalInProgress?: number;
  }
  interface GetOrderResponse {
      /** Retrieved order. */
      order?: Order;
  }
  interface Sort {
      /** Field to sort by. */
      fieldName?: FieldName;
      /** Sort order. */
      order?: SortOrder;
  }
  enum FieldName {
      CREATED_DATE = "CREATED_DATE",
      UPDATED_DATE = "UPDATED_DATE",
      PROMISED_TIME = "PROMISED_TIME"
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
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
  interface ListOrdersResponse {
      /** List of retrieved orders. */
      orders?: Order[];
      /**
       * Details on the paged set of results returned.
       * @internal
       */
      pagingMetadata?: PagingMetadataV2;
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
  interface AcceptOrderResponse {
      /** Accepted order. */
      order?: Order;
  }
  interface CancelOrderResponse {
      /** Canceled order. */
      order?: Order;
  }
  interface FulfillOrderResponse {
      /** Fulfilled order. */
      order?: Order;
  }
  enum EventType {
      /** Order event can't be classified, due to an error/unhandled event */
      UNKNOWN = "UNKNOWN",
      /** Order Created. */
      CREATED = "CREATED",
      /** Order accepted */
      ACCEPTED = "ACCEPTED",
      /** Order Canceled */
      CANCELED = "CANCELED",
      /** Order Fulfilled */
      FULFILLED = "FULFILLED"
  }
  interface GetOrderByMsidResponse {
      /** Order data. */
      order?: Order;
  }
  interface ListOrdersByMsidResponse {
      /** Order data. */
      orders?: Order[];
  }
  interface NotifyOrderEventResponse {
  }
  interface GetTotalActiveOrdersOptions {
      locationId?: string | null;
      organizationId?: string | null;
  }
  interface GetOrderOptions {
      fieldMask?: string[];
  }
  interface ListOrdersOptions {
      fieldMask?: string[];
      status?: Status;
      _createdDate?: string | null;
      delivered?: boolean | null;
      locationIds?: string[];
      sort?: Sort;
      limit?: number | null;
      cursorPaging?: CursorPaging;
      phone?: string | null;
      asap?: boolean | null;
      promisedTime?: string | null;
  }
  interface AcceptOrderOptions {
      message?: string | null;
      pickupTime?: Date;
      dropOffTime?: Date;
  }
  interface CancelOrderOptions {
      message?: string | null;
  }
  interface GetOrderByMsidOptions {
      fieldMask?: string[];
  }
  interface ListOrdersByMsidOptions {
      fieldMask?: string[];
      status?: Status;
      _createdDate?: string | null;
      delivered?: boolean | null;
      sort?: Sort;
      limit?: number | null;
      msid: string;
  }
  interface NotifyOrderEventOptions {
      msid?: string;
      eventType?: EventType;
  }
  
  function getTotalActiveOrders(options: GetTotalActiveOrdersOptions): Promise<GetTotalActiveOrdersResponse>;
  function getOrder(_id: string, options: GetOrderOptions): Promise<GetOrderResponse>;
  function listOrders(options: ListOrdersOptions): Promise<ListOrdersResponse>;
  function acceptOrder(_id: string, options: AcceptOrderOptions): Promise<AcceptOrderResponse>;
  function cancelOrder(_id: string, options: CancelOrderOptions): Promise<CancelOrderResponse>;
  function fulfillOrder(_id: string): Promise<FulfillOrderResponse>;
  function getOrderByMsid(_id: string, msid: string, options: GetOrderByMsidOptions): Promise<GetOrderByMsidResponse>;
  function listOrdersByMsid(options: ListOrdersByMsidOptions): Promise<ListOrdersByMsidResponse>;
  function notifyOrderEvent(_id: string, options: NotifyOrderEventOptions): Promise<NotifyOrderEventResponse>;
  
  export { acceptOrder, cancelOrder, fulfillOrder, getOrder, getOrderByMsid, getTotalActiveOrders, listOrders, listOrdersByMsid, notifyOrderEvent };
}
