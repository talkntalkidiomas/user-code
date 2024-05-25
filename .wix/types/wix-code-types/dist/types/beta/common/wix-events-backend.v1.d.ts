declare module "wix-events-backend.v1" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Order {
      /** Unique order number. */
      orderNumber?: string;
      /** Reservation ID. */
      reservationId?: string;
      /**
       * Payment snapshot ID.
       * Empty for FREE order.
       * @readonly
       */
      snapshotId?: string;
      /** Event ID. */
      eventId?: string;
      /** Contact ID of buyer (resolved using email address). */
      contactId?: string;
      /** Member ID of buyer (if relevant). */
      memberId?: string;
      /**
       * RSVP created timestamp.
       * @readonly
       */
      created?: Date;
      /** Guest first name. */
      firstName?: string;
      /** Guest last name. */
      lastName?: string;
      /** Guest email. */
      email?: string;
      /** Checkout form response. When each purchased ticket is assigned to a guest, guest forms are returned for each ticket, and buyer info is returned. */
      checkoutForm?: FormResponse;
      /** Whether the order is confirmed (triggered once payment gateway processes the payment and funds reach the merchant's account). */
      confirmed?: boolean;
      /** Order status. */
      status?: OrderStatus;
      /** Payment method used for purchase, e.g., "payPal", "creditCard", etc. */
      method?: string;
      /** Tickets ordered. */
      ticketsQuantity?: number;
      /** Total order price. */
      totalPrice?: Money;
      /** URL to ticket PDF. */
      ticketsPdf?: string;
      /** Tickets (generated after payment). */
      tickets?: TicketingTicket[];
      /** Whether the order is archived. */
      archived?: boolean;
      /** Whether the order is anonymized by GDPR delete. */
      anonymized?: boolean;
      /** Guest full name. */
      fullName?: string;
      /** Order invoice. */
      invoice?: Invoice;
      /** Whether all tickets in order are checked-in. */
      fullyCheckedIn?: boolean;
      /**
       * Deprecated. Use `payment_details.transaction.transaction_id`.
       * @internal
       * @readonly
       */
      transactionId?: string;
      /** Internal order payment details */
      paymentDetails?: PaymentDetails;
      /** Checkout channel type */
      channel?: ChannelType;
      /**
       * Language in which Order was created.
       * @internal
       * @readonly
       */
      language?: string | null;
  }
  interface FormResponse {
      /** Input values entered upon ticket order. */
      inputValues?: InputValue[];
  }
  interface InputValue {
      /** Unique input name. */
      inputName?: string;
      /** Text value representation. */
      value?: string;
      /** Text value vector. */
      values?: string[];
      /**
       * Int or floating point number value.
       * @internal
       */
      number?: number | null;
      /**
       * Date/time value.
       * @internal
       */
      dateTime?: Date;
      /**
       * Address type value.
       * @internal
       */
      address?: FormattedAddress;
  }
  interface FormattedAddress {
      /** One line address representation. */
      formatted?: string;
      /** Address components (optional). */
      address?: Address;
  }
  /** Physical address */
  interface Address extends AddressStreetOneOf {
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
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
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
  enum OrderStatus {
      /** Order status not available for this request fieldset */
      NA_ORDER_STATUS = "NA_ORDER_STATUS",
      /** Order is confirmed, no payment required */
      FREE = "FREE",
      /** Order was paid but payment gateway suspended the payment. Eventually changes to PAID */
      PENDING = "PENDING",
      /** Order paid via payment gateway */
      PAID = "PAID",
      /** Order confirmed but has to be paid via offline payment and status manually updated to PAID */
      OFFLINE_PENDING = "OFFLINE_PENDING",
      /** Order is awaiting for payment in Cashier */
      INITIATED = "INITIATED",
      /** Order was canceled */
      CANCELED = "CANCELED",
      /** Order payment was declined */
      DECLINED = "DECLINED"
  }
  interface Money {
      /** Decimal amount representation. Deprecated, use `value` instead. */
      amount?: string;
      /** ISO 4217 format of the currency i.e. `USD`. */
      currency?: string;
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string | null;
  }
  interface TicketingTicket {
      /** Unique ticket number (issued automatically). */
      ticketNumber?: string;
      /** Associated order number. */
      orderNumber?: string;
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
      /** Ticket name. */
      name?: string;
      /** Ticket price. */
      price?: Money;
      /**
       * Whether ticket requires payment.
       * @readonly
       */
      free?: boolean;
      /** Ticket policy (as displayed in PDF). */
      policy?: string;
      /** Deprecated, use `check_in_url`. */
      qrCode?: string;
      /** Ticket check-in. */
      checkIn?: CheckIn;
      /** Associated order status. */
      orderStatus?: OrderStatus;
      /** Whether order and ticket are visible in order list. */
      orderArchived?: boolean;
      /** Buyer full name. */
      orderFullName?: string;
      /** Guest full name. */
      guestFullName?: string | null;
      /** Guest personal details. */
      guestDetails?: GuestDetails;
      /** Whether ticket is visible in guest list. */
      archived?: boolean;
      /** Deprecated, use `ticket_pdf_url`. */
      ticketPdf?: string;
      /** Ticket owner member ID. */
      memberId?: string | null;
      /**
       * Whether ticket was anonymized by GDPR delete.
       * Anonymized tickets no longer contain personally identifiable information (PII).
       */
      anonymized?: boolean;
      /**
       * Ticket check-in URL.
       * Shown as QR code image in PDF.
       * Format: `https://www.wixevents.com/check-in/{ticket number},{event id}`
       * Example: `https://www.wixevents.com/check-in/AAAA-AAAA-BB021,00000000-0000-0000-0000-000000000000`
       */
      checkInUrl?: string;
      /** URL for ticket PDF download. */
      ticketPdfUrl?: string;
      /** Associated order checkout channel type */
      channel?: ChannelType;
      /**
       * URL to download ticket in .pkpass format for Apple Wallet
       * @readonly
       */
      walletPassUrl?: string;
      /**
       * Additional ticket details.
       * @internal
       * @readonly
       */
      ticketDetails?: TicketDetails;
  }
  interface CheckIn {
      /** Time of check-in */
      created?: Date;
  }
  interface GuestDetails {
      /** Whether ticket belongs to assigned guest. */
      guestAssigned?: boolean;
      /** Guest first name. */
      firstName?: string | null;
      /** Guest last name. */
      lastName?: string | null;
      /** Guest email. */
      email?: string | null;
      /** Full form response. */
      form?: FormResponse;
      /** Contact ID associated with this guest. */
      contactId?: string | null;
  }
  enum ChannelType {
      /** Buyer created order via one of the online channels (website, mobile app, etc.) */
      ONLINE = "ONLINE",
      /** Order created and money collected by the sales person */
      OFFLINE_POS = "OFFLINE_POS"
  }
  interface TicketDetails {
      /** Unique seat id in the event venue. */
      seatId?: string | null;
      /**
       * Optional sector name.
       * @internal
       * @readonly
       */
      sectorName?: string | null;
      /**
       * Area name.
       * @internal
       * @readonly
       */
      areaName?: string | null;
      /**
       * Table name.
       * @internal
       * @readonly
       */
      tableName?: string | null;
      /**
       * Row label.
       * @internal
       * @readonly
       */
      rowNumber?: string | null;
      /**
       * Seat label in a row or table.
       * @internal
       * @readonly
       */
      seatNumber?: string | null;
      /**
       * Optional sector label.
       * @readonly
       */
      sectionLabel?: string | null;
      /**
       * Area label.
       * @readonly
       */
      areaLabel?: string | null;
      /**
       * Table label.
       * @readonly
       */
      tableLabel?: string | null;
      /**
       * Row label.
       * @readonly
       */
      rowLabel?: string | null;
      /**
       * Seat label in a row or table.
       * @readonly
       */
      seatLabel?: string | null;
      /** Number of places in the spot. If not provided - defaults to 1. */
      capacity?: number | null;
      /** Custom pricing of ticket. */
      priceOverride?: string | null;
      /** Pricing option id. */
      pricingOptionId?: string | null;
      /**
       * Pricing option name.
       * @internal
       * @readonly
       */
      pricingOptionName?: string | null;
  }
  interface Invoice {
      items?: Item[];
      /** Total cart amount. */
      total?: Money;
      /** Discount applied to cart. */
      discount?: Discount;
      /** Tax applied to cart. */
      tax?: Tax;
      /** Total cart amount before discount, tax, and fees. */
      subTotal?: Money;
      /**
       * Total amount of cart after discount, tax, and fees.
       * Grand total is calculated in the following order:
       * 1. Total prices of all items in the cart are calculated.
       * 2. Discount is subtracted from the cart (if applicable).
       * 3. Tax is added (if applicable).
       * 4. Wix service fee is added.
       */
      grandTotal?: Money;
      /**
       * Fees applied to the cart.
       * @readonly
       */
      fees?: Fee[];
      /** Total revenue, excluding fees. (Taxes and payment provider fees are not deducted). */
      revenue?: Money;
      /** URL to invoice preview. Returned only if order is paid. */
      previewUrl?: string | null;
  }
  interface Item {
      /** Unique line item ID. */
      _id?: string;
      /** Line item quantity. */
      quantity?: number;
      /** Line item mame. */
      name?: string;
      /** Line item price. */
      price?: Money;
      /** Total price for line items. Always equal to price * quantity. */
      total?: Money;
      /** Discount applied to the line item. */
      discount?: Discount;
      /** Tax applied to the item. */
      tax?: Tax;
      /**
       * Fees applied to the item.
       * @readonly
       */
      fees?: Fee[];
  }
  interface Discount {
      /** Total discount amount. */
      amount?: Money;
      /** Total charge after applied discount. */
      afterDiscount?: Money;
      /** Discount coupon code. */
      code?: string;
      /** Discount coupon name. */
      name?: string;
      /** Discount coupon ID. */
      couponId?: string;
      /** Discount items. */
      discounts?: DiscountItem[];
  }
  interface DiscountItem extends DiscountItemDiscountOneOf {
      /** Total discount amount. */
      amount?: Money;
      /** Coupon discount. */
      coupon?: CouponDiscount;
      /** Pricing plan discount. */
      paidPlan?: PaidPlanDiscount;
  }
  /** @oneof */
  interface DiscountItemDiscountOneOf {
      /** Coupon discount. */
      coupon?: CouponDiscount;
      /** Pricing plan discount. */
      paidPlan?: PaidPlanDiscount;
  }
  interface CouponDiscount {
      /** Discount coupon name. */
      name?: string;
      /** Discount coupon code. */
      code?: string;
      /** Discount coupon ID. */
      couponId?: string;
  }
  interface PaidPlanDiscount extends PaidPlanDiscountDiscountOneOf {
      /** Name of pricing plan. */
      name?: string;
      /** Discount by percentage applied to tickets. */
      percentDiscount?: PercentDiscount;
  }
  /** @oneof */
  interface PaidPlanDiscountDiscountOneOf {
      /** Discount by percentage applied to tickets. */
      percentDiscount?: PercentDiscount;
  }
  interface PercentDiscount {
      /** Percent rate. */
      rate?: string;
      /** Number of discounted tickets. */
      quantityDiscounted?: number;
  }
  interface Tax {
      /** Tax type. */
      type?: TaxType;
      /**
       * Tax name.
       * @readonly
       */
      name?: string;
      /** Tax rate. */
      rate?: string;
      /** Taxable amount. */
      taxable?: Money;
      /** Total tax amount. */
      amount?: Money;
  }
  enum TaxType {
      /** Tax is included in the ticket price */
      INCLUDED = "INCLUDED",
      /** Tax is added to the order at the checkout */
      ADDED = "ADDED",
      /** Tax is added to the final total at the checkout */
      ADDED_AT_CHECKOUT = "ADDED_AT_CHECKOUT"
  }
  interface Fee {
      /** Fee identifier. */
      name?: FeeName;
      /** How fee is calculated. */
      type?: FeeType;
      /**
       * Fee rate.
       * @readonly
       */
      rate?: string;
      /** Total amount of fee charges. */
      amount?: Money;
  }
  enum FeeName {
      /** Wix service fee charges applied to the line item. */
      WIX_FEE = "WIX_FEE"
  }
  enum FeeType {
      /** Fee is added to the ticket price at checkout */
      FEE_ADDED = "FEE_ADDED",
      /** Seller absorbs the fee. It is deducted from the ticket price */
      FEE_INCLUDED = "FEE_INCLUDED",
      /** Fee is added to the ticket price at checkout */
      FEE_ADDED_AT_CHECKOUT = "FEE_ADDED_AT_CHECKOUT"
  }
  interface PaymentDetails {
      /** Wix Payments transaction */
      transaction?: PaymentTransaction;
  }
  interface PaymentTransaction {
      /**
       * Wix Payments transaction id
       * @readonly
       */
      transactionId?: string;
      /**
       * Transaction Payment method e.g., "payPal", "creditCard", etc.
       * @readonly
       */
      method?: string;
  }
  interface OrderDeleted {
      /** Order deleted timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Unique order number. */
      orderNumber?: string;
      /** Contact ID associated with this order */
      contactId?: string;
      /** Member ID associated with this order. */
      memberId?: string | null;
      /** Whether order was anonymized by GDPR delete. */
      anonymized?: boolean;
      /** Order type. */
      orderType?: OrderType;
      /** Whether event was triggered by GDPR delete request. */
      triggeredByAnonymizeRequest?: boolean;
      /** Tickets generated after payment. */
      tickets?: Ticket[];
  }
  enum OrderType {
      /** Buyer form is used for all tickets */
      UNASSIGNED_TICKETS = "UNASSIGNED_TICKETS",
      /** Each order ticket has its own form */
      ASSIGNED_TICKETS = "ASSIGNED_TICKETS"
  }
  interface Ticket {
      /** Unique issued ticket number. */
      ticketNumber?: string;
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
      /** Ticket check-in. */
      checkIn?: CheckIn;
      /** Ticket price. */
      price?: Money;
      /** Whether ticket is archived. */
      archived?: boolean;
      /** Guest first name. */
      firstName?: string | null;
      /** Guest last name. */
      lastName?: string | null;
      /** Guest email. */
      email?: string | null;
      /** Contact ID associated with this ticket. */
      contactId?: string | null;
      /** Whether ticket is confirmed */
      confirmed?: boolean;
      /** Member ID associated with this ticket. */
      memberId?: string | null;
      /** Ticket form response (only assigned tickets contain separate forms). */
      form?: FormResponse;
      /** Anonymized tickets no longer contain personally identifiable information (PII). */
      anonymized?: boolean;
  }
  interface ListOrdersRequest {
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** Controls which data is returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_order-fieldset). */
      fieldset?: OrderFieldset[];
      /** Status. */
      status?: OrderStatus[];
      /**
       * Deprecated: use tag = CONFIRMED
       * @internal
       */
      confirmed?: boolean | null;
      /** Event ID. */
      eventId?: string[];
      /** Order number. */
      orderNumber?: string[];
      /** Site member ID. */
      memberId?: string[];
      /**
       * Deprecated: use tag = MEMBER
       * @internal
       */
      membersOnly?: boolean;
      /**
       * Field facets.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-orders).
       */
      facet?: string[];
      /**
       * Deprecated: use tag = ARCHIVED / NON_ARCHIVED
       * @internal
       */
      archived?: boolean | null;
      /** Textual search filter - search is performed on "full_name", "email" and "order_number". */
      searchPhrase?: string;
      /** Event creator ID. */
      eventCreatorId?: string[];
      /**
       * Deprecated: use tag = FULLY_CHECKED_IN / NOT_FULLY_CHECKED_IN
       * @internal
       */
      fullyCheckedIn?: boolean | null;
      /**
       * Sort order. Defaults to "created:asc".
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-orders).
       */
      sort?: string;
      /** Order tag. */
      tag?: OrderTag[];
  }
  enum OrderFieldset {
      /** Include tickets in response */
      TICKETS = "TICKETS",
      /** Include order details: status, first_name, last_name, email, created, etc. */
      DETAILS = "DETAILS",
      /** Include checkout_form */
      FORM = "FORM",
      /** Include invoice */
      INVOICE = "INVOICE"
  }
  enum OrderTag {
      /** Return only confirmed orders */
      CONFIRMED = "CONFIRMED",
      /** Return only unconfirmed orders */
      UNCONFIRMED = "UNCONFIRMED",
      /** Return only member orders */
      MEMBER = "MEMBER",
      /** Return only archived orders */
      ARCHIVED = "ARCHIVED",
      /** Return only non archived orders */
      NON_ARCHIVED = "NON_ARCHIVED",
      /** Return only orders with all guests checked-in */
      FULLY_CHECKED_IN = "FULLY_CHECKED_IN",
      /** Return only orders with no guests checked-in */
      NOT_FULLY_CHECKED_IN = "NOT_FULLY_CHECKED_IN"
  }
  interface ListOrdersResponse {
      /** Total orders matching the given filters. */
      total?: number;
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** Orders. */
      orders?: Order[];
      /** Filter facets. */
      facets?: Record<string, FacetCounts>;
      /** Meta data of search results. */
      searchMetaData?: SearchMetaData;
      /** Order data enriched facets. */
      orderFacets?: OrderFacets;
  }
  interface FacetCounts {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface SearchMetaData {
      /** Search results */
      results?: Result[];
  }
  interface Result {
      /** Entity ID */
      _id?: string;
      /**
       * Entity score.
       * Higher is more relevant to search phrase.
       */
      score?: string;
  }
  interface OrderFacets {
      /** Filter facets. */
      facets?: Record<string, OrderFacetCounts>;
  }
  interface OrderFacetCounts {
      /** Facet counts aggregated per value */
      counts?: Record<string, Counts>;
  }
  interface Counts {
      /** Number or orders */
      count?: number;
      /** Number of tickets within orders */
      tickets?: number;
      /** Number of tickets with check-in */
      ticketsCheckIn?: number;
  }
  interface GetOrderRequest {
      /** Event ID. */
      eventId: string;
      /** Unique order number. */
      orderNumber: string;
      /** Controls which data is returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_order-fieldset). */
      fieldset?: OrderFieldset[];
  }
  interface GetOrderResponse {
      /** Requested order. */
      order?: Order;
      /** "Add to calendar" links. */
      calendarLinks?: CalendarLinks;
  }
  interface CalendarLinks {
      /** "Add to Google calendar" URL. */
      google?: string;
      /** "Download ICS calendar file" URL. */
      ics?: string;
  }
  interface UpdateOrderRequest {
      /** Event ID. */
      eventId: string;
      /** Unique order number. */
      orderNumber: string;
      /** Set of field paths to update. */
      fields: string[];
      /** Checkout form. */
      checkoutForm?: FormResponse;
      /** Whether order is archived. */
      archived?: boolean;
  }
  interface UpdateOrderResponse {
      /** Updated order. */
      order?: Order;
  }
  interface OrderUpdated {
      /** Order updated timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when Order initiated */
      language?: string | null;
      /** Event ID. */
      eventId?: string;
      /** Unique order number. */
      orderNumber?: string;
      /** Contact ID associated with this order. */
      contactId?: string;
      /** Member ID associated with this order. */
      memberId?: string | null;
      /**
       * Order created timestamp.
       * @readonly
       */
      created?: Date;
      /** Buyer first name. */
      firstName?: string;
      /** Buyer last name. */
      lastName?: string;
      /** Buyer email. */
      email?: string;
      /** Checkout form response. */
      checkoutForm?: FormResponse;
      /** Whether order is confirmed - occurs once payment gateway processes the payment and funds reach merchant's account. */
      confirmed?: boolean;
      /** Order status. */
      status?: OrderStatus;
      /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
      method?: string | null;
      /** Tickets generated after payment. */
      tickets?: Ticket[];
      /** Whether order was archived and excluded from results. */
      archived?: boolean;
      /** Whether event was triggered by GDPR delete request. */
      triggeredByAnonymizeRequest?: boolean;
  }
  interface BulkUpdateOrdersRequest {
      /** Event ID. */
      eventId: string;
      orderNumber?: string[];
      /** Set of fields to update. */
      fields?: string[];
      /** Whether to archive the order. */
      archived?: boolean;
  }
  interface BulkUpdateOrdersResponse {
      /** Updated orders. */
      orders?: Order[];
  }
  interface ConfirmOrderRequest {
      /** Event ID. */
      eventId: string;
      /** Order numbers. */
      orderNumber?: string[];
  }
  interface ConfirmOrderResponse {
      /** Confirmed orders. */
      orders?: Order[];
  }
  interface GetSummaryRequest {
      /** Event ID. */
      eventId?: string | null;
  }
  interface GetSummaryResponse {
      /** Ticket sales grouped by currency. */
      sales?: TicketSales[];
  }
  interface TicketSales {
      /** Total balance of confirmed transactions. */
      total?: Money;
      /** Total number of confirmed orders. */
      totalOrders?: number;
      /** Total number of tickets purchased. */
      totalTickets?: number;
      /** Total revenue, excluding fees (taxes and payment provider fees are not deducted). */
      revenue?: Money;
  }
  interface GetInvoicePreviewRequest {
      /** Event ID. */
      eventId: string;
      /** Order number. */
      orderNumber: string;
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
  interface GetPaymentInfoRequest {
      /** Event ID. */
      eventId?: string;
      /** Order number. */
      orderNumber?: string;
  }
  interface GetPaymentInfoResponse {
      transactions?: PaymentTransactionSummary[];
      status?: string | null;
      /** @readonly */
      transactionId?: string | null;
  }
  interface PaymentTransactionSummary {
      /**
       * Wix Payments transaction id
       * @readonly
       */
      transactionId?: string;
      /**
       * Final transaction status
       * @readonly
       */
      finalTransactionStatus?: string;
      /** Transaction events */
      events?: PaymentTransactionEvent[];
  }
  interface PaymentTransactionEvent {
      /**
       * Order snapshot id
       * @readonly
       */
      snapshotId?: string;
      /**
       * Transaction status
       * @readonly
       */
      transactionStatus?: string;
      /**
       * Transaction Payment method e.g., "payPal", "creditCard", etc.
       * @readonly
       */
      paymentMethod?: string;
      /**
       * Transaction payment amount
       * @readonly
       */
      paymentAmount?: Money;
      /**
       * Crated date
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Reason code
       * @readonly
       */
      reasonCode?: string | null;
      /**
       * Refunded amount
       * @readonly
       */
      refundedAmount?: Money;
  }
  interface OrderConfirmed {
      /** Order confirmation timestamp in ISO UTC. */
      timestamp?: Date;
      /** Site language when Order initiated */
      language?: string | null;
      /** Notifications silenced for this domain event. */
      silent?: boolean | null;
      /** Event ID. */
      eventId?: string;
      /** Unique order number. */
      orderNumber?: string;
      /** Contact ID associated with this order. */
      contactId?: string;
      /** Member ID associated with this order. */
      memberId?: string | null;
      /**
       * Order created timestamp
       * @readonly
       */
      created?: Date;
      /** Buyer first name. */
      firstName?: string;
      /** Buyer last name. */
      lastName?: string;
      /** Buyer email address. */
      email?: string;
      /** Checkout form response. */
      checkoutForm?: FormResponse;
      /** Order status. */
      status?: OrderStatus;
      /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
      method?: string | null;
      /** Tickets (generated after payment). */
      tickets?: Ticket[];
      /** Invoice. */
      invoice?: Invoice;
      /** Reservation ID associated with this order. */
      reservationId?: string;
  }
  interface OrderPaid {
      /** Order paid timestamp in ISO UTC. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Unique order number. */
      orderNumber?: string;
      /** Reservation ID associated with this order. */
      reservationId?: string;
  }
  interface ReservationCreated {
      /** Reservation created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /**
       * Reservation ID.
       * Can be used to retrieve a reservation invoice.
       */
      reservationId?: string;
      /** Reservation expiration timestamp. */
      expires?: Date;
      /** Reservation status. */
      status?: ReservationStatus;
  }
  enum ReservationStatus {
      /**
       * Reservation is pending confirmation.
       * The reservation will expire after the expiration due time.
       */
      RESERVATION_PENDING = "RESERVATION_PENDING",
      /** The reservation was confirmed and will not expire. */
      RESERVATION_CONFIRMED = "RESERVATION_CONFIRMED",
      /** The reservation was canceled because of non payment. */
      RESERVATION_CANCELED = "RESERVATION_CANCELED",
      /** The reservation was canceled manually by the buyer. */
      RESERVATION_CANCELED_MANUALLY = "RESERVATION_CANCELED_MANUALLY",
      /** The reservation has expired. */
      RESERVATION_EXPIRED = "RESERVATION_EXPIRED"
  }
  interface ReservationUpdated {
      /** Reservation updated timestamp. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /**
       * Reservation ID.
       * Can be used to retrieve a reservation invoice.
       */
      reservationId?: string;
      /** Reservation status. */
      status?: ReservationStatus;
      /** Reservation expiration timestamp. */
      expires?: Date;
  }
  interface GetCheckoutOptionsRequest {
  }
  interface GetCheckoutOptionsResponse {
      /** Whether any payment method is configured and available for payment. */
      paymentMethodConfigured?: boolean;
      /** Whether coupons are accepted at checkout. */
      acceptCoupons?: boolean;
      /** Whether premium services are enabled. Enabled for free if site does not sell any paid tickets. Selling tickets for a fee requires a premium feature "events_sell_tickets". */
      premiumServices?: boolean;
      /** Whether there are any paid tickets available for sale. */
      paidTickets?: boolean;
  }
  interface ListAvailableTicketsRequest {
      /** Event ID. If not provided, available tickets for all events in the site will be returned. */
      eventId?: string;
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /**
       * Sort order, defaults to "created:asc".
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-available-tickets).
       */
      sort?: string;
      /**
       * Only used in tests.
       * @internal
       */
      overrideRequestTime?: Date;
      state?: State[];
  }
  enum State {
      INCLUDE_HIDDEN_NOT_ON_SALE = "INCLUDE_HIDDEN_NOT_ON_SALE"
  }
  interface ListAvailableTicketsResponse {
      /** Ticket definitions meta data. */
      metaData?: ResponseMetaData;
      /** Ticket definitions. */
      definitions?: TicketDefinition[];
  }
  interface ResponseMetaData {
      /** Number of items in the response. */
      count?: number;
      /** Offset of items. */
      offset?: number;
      /** Total number of matching items. */
      total?: number;
  }
  interface TicketDefinition {
      /** Ticket definition ID. */
      _id?: string;
      /** Ticket price. */
      price?: Money;
      /** Whether the ticket is free (read only). */
      free?: boolean;
      /** Ticket name. */
      name?: string;
      /** Ticket description. */
      description?: string;
      /**
       * Limit of tickets that can be purchased per checkout.
       * Set to 20 for unlimited ticket definition.
       */
      limitPerCheckout?: number;
      /** Custom sort index. */
      orderIndex?: number;
      /** Policy information plain text block, as printed on the ticket. */
      policy?: string;
      /** Sensitive dashboard data. */
      dashboard?: Dashboard;
      /** Event ID associated with the ticket. */
      eventId?: string;
      /**
       * Whether the fixed-rate service fee is applied at checkout to each ticket sold.
       * @readonly
       */
      wixFeeConfig?: WixFeeConfig;
      /** Ticket sale period. */
      salePeriod?: TicketSalePeriod;
      /**
       * Ticket sale status.
       * @readonly
       */
      saleStatus?: TicketSaleStatus;
      /** Ticket state. */
      state?: State[];
      /**
       * Ticket pricing.
       * @internal
       */
      pricing?: TicketPricing;
  }
  interface Dashboard {
      /** Whether ticket is hidden and cannot be sold. */
      hidden?: boolean;
      /** Number of tickets sold and reserved. */
      sold?: number;
      /** Whether the ticket has limited quantity. */
      limited?: boolean;
      /** Ticket limit (NULL for unlimited ticket definition). */
      quantity?: number | null;
      /** Number of unsold tickets (NULL for unlimited ticket definition). */
      unsold?: number | null;
      /** Number of tickets sold. */
      ticketsSold?: number;
      /** Number of tickets reserved. */
      ticketsReserved?: number;
  }
  interface WixFeeConfig {
      /** Fee calculation method. */
      type?: FeeType;
  }
  interface TicketSalePeriod {
      /** Ticket sale start timestamp. */
      startDate?: Date;
      /** Ticket sale end timestamp. */
      endDate?: Date;
      /** Whether to hide this ticket if it's not on sale */
      hideNotOnSale?: boolean;
  }
  enum TicketSaleStatus {
      /** Ticket sale is scheduled to start */
      SALE_SCHEDULED = "SALE_SCHEDULED",
      /** Ticket sale has started */
      SALE_STARTED = "SALE_STARTED",
      /** Ticket sale has ended */
      SALE_ENDED = "SALE_ENDED"
  }
  interface TicketPricing extends TicketPricingPriceOneOf {
      /**
       * Ticket pricing type.
       * @internal
       * @readonly
       */
      pricingType?: Type;
      /** Ticket price which is read only. */
      fixedPrice?: Money;
      /** Min price per ticket, customizable. */
      minPrice?: Money;
      /** Ticket pricing options. */
      pricingOptions?: PricingOptions;
  }
  /** @oneof */
  interface TicketPricingPriceOneOf {
      /** Ticket price which is read only. */
      fixedPrice?: Money;
      /** Min price per ticket, customizable. */
      minPrice?: Money;
      /** Ticket pricing options. */
      pricingOptions?: PricingOptions;
  }
  interface PricingOptions {
      /** Multiple ticket pricing options. */
      options?: PricingOption[];
  }
  interface PricingOption {
      /** Ticket pricing option ID. */
      _id?: string | null;
      /** Ticket pricing option name. */
      name?: string | null;
      /** Ticket pricing option price. */
      price?: Money;
  }
  enum Type {
      STANDARD = "STANDARD",
      DONATION = "DONATION"
  }
  interface QueryAvailableTicketsRequest {
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /**
       * Ticket definition.
       * See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-available-tickets).
       */
      filter?: Record<string, any> | null;
      fieldset?: TicketDefinitionFieldset[];
      /**
       * Sort order, defaults to "created:asc".
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-available-tickets).
       */
      sort?: string;
  }
  enum TicketDefinitionFieldset {
      /** Include policy in the response. */
      POLICY = "POLICY",
      /** Include dashboard in the response. */
      DASHBOARD = "DASHBOARD"
  }
  interface QueryAvailableTicketsResponse {
      /** Ticket definitions meta data. */
      metaData?: ResponseMetaData;
      /** Ticket definitions. */
      definitions?: TicketDefinition[];
  }
  interface CreateReservationRequest {
      /** Event ID. */
      eventId: string;
      /** Tickets to reserve. */
      ticketQuantities?: TicketReservationQuantity[];
      /** Whether to ignore the available ticket limits upon reservation. */
      ignoreLimits?: boolean;
      /**
       * Only used in tests.
       * @internal
       */
      overrideRequestTime?: Date;
      /** Whether to allow reservation for hidden tickets. */
      allowHiddenTickets?: boolean;
      /**
       * Whether to exclude Wix fee.
       * @internal
       */
      excludeFee?: boolean;
  }
  interface TicketReservationQuantity {
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
      /** Quantity of tickets to reserve. */
      quantity?: number;
      /** Ticket price to charge - overriding the ticket price. */
      priceOverride?: string | null;
      /**
       * Optional ticket details
       * @internal
       */
      ticketDetails?: TicketDetails[];
  }
  interface CreateReservationResponse {
      /** Reservation ID. */
      _id?: string;
      /** Reservation expiration timestamp. */
      expires?: Date;
      /** Ticket reservations. */
      reservations?: TicketReservation[];
      /** Reservation invoice. */
      invoice?: Invoice;
  }
  interface TicketReservation {
      /** Quantity of reserved tickets. */
      quantity?: number;
      ticket?: TicketDefinition;
      /**
       * Optional ticket details.
       * @internal
       */
      ticketDetails?: TicketDetails[];
  }
  interface CancelReservationRequest {
      /** Event ID. */
      eventId: string;
      /** Reservation ID. */
      _id: string;
  }
  interface CancelReservationResponse {
  }
  interface GetInvoiceRequest {
      /** Event ID. */
      eventId: string;
      /** Reservation ID. */
      reservationId: string;
      /** Optional discount to be applied on the returned invoice. */
      withDiscount?: DiscountRequest;
      /** Optional benefit granted by the pricing plan to be applied on the returned invoice. */
      paidPlanBenefit?: PaidPlanBenefit;
  }
  interface DiscountRequest {
      /** Discount coupon code. */
      couponCode?: string;
  }
  interface PaidPlanBenefit {
      /** Pricing plan ID. */
      planOrderId?: string;
      /** Pricing plan benefit ID. */
      benefitId?: string;
  }
  interface GetInvoiceResponse {
      /** Invoice with applied discount. */
      invoice?: Invoice;
      /** Discount errors, if relevant. */
      discountErrors?: DiscountErrors;
      /** Time when the reservation expires. */
      expires?: Date;
      /** Reservation status. */
      reservationStatus?: ReservationStatus;
      /** Whether this reservation is already used in checkout. */
      reservationOccupied?: boolean;
      /** Ticket reservations. */
      reservations?: TicketReservation[];
  }
  interface DiscountErrors {
      /** Error. */
      error?: Error[];
  }
  interface Error {
      code?: string;
  }
  interface CheckoutRequest {
      /** Event ID. */
      eventId: string;
      /** Ticket reservation ID. */
      reservationId?: string;
      /** Member ID (if empty - no site member is associated to this order). */
      memberId?: string;
      /** Discount to apply on the invoice. */
      discount?: DiscountRequest;
      /**
       * Deprecated.
       * @internal
       */
      silent?: boolean;
      /**
       * Deprecated.
       * @internal
       */
      payInPerson?: boolean;
      /** Buyer details. */
      buyer?: Buyer;
      /** Guest details. */
      guests?: Guest[];
      /** Benefit granted by the pricing plan. */
      paidPlanBenefit?: PaidPlanBenefit;
      /** Options controlling the checkout process. */
      options?: CheckoutOptions;
      /**
       * Only used in tests.
       * @internal
       */
      overrideRequestTime?: Date;
  }
  interface Buyer {
      /** Buyer first name. */
      firstName?: string;
      /** Buyer last name. */
      lastName?: string;
      /** Buyer email. */
      email?: string;
  }
  interface Guest {
      /** Specific guest info. */
      form?: FormResponse;
  }
  interface CheckoutResponse {
      /** Created order. */
      order?: Order;
      /** Time when the order expires, applies to orders with status = INITIATED. */
      expires?: Date;
      /** Ticket reservations. */
      reservations?: TicketReservation[];
  }
  interface OrderInitiated {
      /** Order initiated timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when Order initiated */
      language?: string | null;
      /** Event ID. */
      eventId?: string;
      /** Unique order number. */
      orderNumber?: string;
      /** Contact ID associated with this order. */
      contactId?: string;
      /** Member ID associated with this order. */
      memberId?: string | null;
      /** Guest first name. */
      firstName?: string;
      /** Guest last name. */
      lastName?: string;
      /** Guest email address. */
      email?: string;
      /** Checkout form response. */
      checkoutForm?: FormResponse;
      /** Order status. */
      status?: OrderStatus;
      /** Invoice. */
      invoice?: Invoice;
      /** Reservation ID associated with this order. */
      reservationId?: string;
  }
  interface UpdateCheckoutRequest {
      /** Event ID. */
      eventId: string;
      /** Unique order number. */
      orderNumber: string;
      /** Buyer details. */
      buyer?: Buyer;
      /** Guest details. */
      guests?: Guest[];
      /** Member ID (if empty - no site member is associated to this order). */
      memberId?: string | null;
      /** Discount to apply on the invoice. */
      discount?: DiscountRequest;
      /** Benefit granted by the pricing plan. */
      paidPlanBenefit?: PaidPlanBenefit;
  }
  interface UpdateCheckoutResponse {
      /** Updated order. */
      order?: Order;
  }
  interface PosCheckoutRequest {
      /** Event ID. */
      eventId: string;
      /** Ticket reservation ID. */
      reservationId: string;
      /**
       * Payment details ID.
       * Not required if reservation total is 0. In this case the order will be created with status Free and no payment.
       */
      paymentDetailsId?: string | null;
  }
  interface PosCheckoutResponse {
      /** Created order. */
      order?: Order;
      /** Time when the order expires, applies to orders with status = INITIATED. */
      expires?: Date;
      /** Ticket reservations. */
      reservations?: TicketReservation[];
  }
  /**
   * Retrieves a list of orders, including ticket data, with basic filter support.
   * @public */
  function listOrders(options?: ListOrdersOptions): Promise<ListOrdersResponse>;
  interface ListOrdersOptions {
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** Controls which data is returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_order-fieldset). */
      fieldset?: OrderFieldset[];
      /** Status. */
      status?: OrderStatus[];
      /**
       * Deprecated: use tag = CONFIRMED
       * @internal
       */
      confirmed?: boolean | null;
      /** Event ID. */
      eventId?: string[];
      /** Order number. */
      orderNumber?: string[];
      /** Site member ID. */
      memberId?: string[];
      /**
       * Deprecated: use tag = MEMBER
       * @internal
       */
      membersOnly?: boolean;
      /**
       * Field facets.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-orders).
       */
      facet?: string[];
      /**
       * Deprecated: use tag = ARCHIVED / NON_ARCHIVED
       * @internal
       */
      archived?: boolean | null;
      /** Textual search filter - search is performed on "full_name", "email" and "order_number". */
      searchPhrase?: string;
      /** Event creator ID. */
      eventCreatorId?: string[];
      /**
       * Deprecated: use tag = FULLY_CHECKED_IN / NOT_FULLY_CHECKED_IN
       * @internal
       */
      fullyCheckedIn?: boolean | null;
      /**
       * Sort order. Defaults to "created:asc".
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-orders).
       */
      sort?: string;
      /** Order tag. */
      tag?: OrderTag[];
  }
  /**
   * Retrieves an order, including ticket data.
   * @public
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.orderNumber
   */
  function getOrder(identifiers: GetOrderIdentifiers, options?: GetOrderOptions): Promise<GetOrderResponse>;
  interface GetOrderIdentifiers {
      /** Event ID. */
      eventId: string;
      /** Unique order number. */
      orderNumber: string;
  }
  interface GetOrderOptions {
      /** Controls which data is returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_order-fieldset). */
      fieldset?: OrderFieldset[];
  }
  /**
   * Updates an order's `checkoutForm` and/or `archived` status.
   * @param fields - Set of field paths to update.
   * @public
   * @requiredField fields
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.orderNumber
   */
  function updateOrder(identifiers: UpdateOrderIdentifiers, fields: string[], options?: UpdateOrderOptions): Promise<UpdateOrderResponse>;
  interface UpdateOrderIdentifiers {
      /** Event ID. */
      eventId: string;
      /** Unique order number. */
      orderNumber: string;
  }
  interface UpdateOrderOptions {
      /** Checkout form. */
      checkoutForm?: FormResponse;
      /** Whether order is archived. */
      archived?: boolean;
  }
  /**
   * Updates multiple orders' `archived` status.
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   */
  function bulkUpdateOrders(eventId: string, options?: BulkUpdateOrdersOptions): Promise<BulkUpdateOrdersResponse>;
  interface BulkUpdateOrdersOptions {
      orderNumber?: string[];
      /** Set of fields to update. */
      fields?: string[];
      /** Whether to archive the order. */
      archived?: boolean;
  }
  /**
   * Changes order status to "CONFIRMED" - from "INITIATED, "PENDING", "OFFLINE_PENDING" to "PAID".
   * Previously confirmed orders (with status "PAID" or "FREE") are not changed.
   * Confirming previously "INITIATED" or "PENDING" orders triggers an email with the tickets to the buyer (and to additional guests, if relevant and provided).
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   */
  function confirmOrder(eventId: string, options?: ConfirmOrderOptions): Promise<ConfirmOrderResponse>;
  interface ConfirmOrderOptions {
      /** Order numbers. */
      orderNumber?: string[];
  }
  /**
   * Retrieves a summary of total ticket sales.
   * @public */
  function getSummary(options?: GetSummaryOptions): Promise<GetSummaryResponse>;
  interface GetSummaryOptions {
      /** Event ID. */
      eventId?: string | null;
  }
  /**
   * Returns invoice preview. Works only for PAID orders.
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.orderNumber
   */
  function getInvoicePreview(identifiers: GetInvoicePreviewIdentifiers): Promise<RawHttpResponse>;
  interface GetInvoicePreviewIdentifiers {
      /** Event ID. */
      eventId: string;
      /** Order number. */
      orderNumber: string;
  }
  /**
   * Returns checkout meta data used in checkout UX.
   * @public */
  function getCheckoutOptions(): Promise<GetCheckoutOptionsResponse>;
  /**
   * Returns tickets available to reserve.
   * @public */
  function listAvailableTickets(options?: ListAvailableTicketsOptions): Promise<ListAvailableTicketsResponse>;
  interface ListAvailableTicketsOptions {
      /** Event ID. If not provided, available tickets for all events in the site will be returned. */
      eventId?: string;
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /**
       * Sort order, defaults to "created:asc".
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-available-tickets).
       */
      sort?: string;
      /**
       * Only used in tests.
       * @internal
       */
      overrideRequestTime?: Date;
      state?: State[];
  }
  /**
   * Returns tickets available to reserve.
   * @public */
  function queryAvailableTickets(options?: QueryAvailableTicketsOptions): Promise<QueryAvailableTicketsResponse>;
  interface QueryAvailableTicketsOptions {
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /**
       * Ticket definition.
       * See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-available-tickets).
       */
      filter?: Record<string, any> | null;
      fieldset?: TicketDefinitionFieldset[];
      /**
       * Sort order, defaults to "created:asc".
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-available-tickets).
       */
      sort?: string;
  }
  /**
   * Reserves tickets for 20 minutes.
   * Reserved tickets are deducted from tickets stock and cannot be bought by another party.
   * When the reservation expires, the tickets are added back in the stock.
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   */
  function createReservation(eventId: string, options?: CreateReservationOptions): Promise<CreateReservationResponse>;
  interface CreateReservationOptions {
      /** Tickets to reserve. */
      ticketQuantities?: TicketReservationQuantity[];
      /** Whether to ignore the available ticket limits upon reservation. */
      ignoreLimits?: boolean;
      /**
       * Only used in tests.
       * @internal
       */
      overrideRequestTime?: Date;
      /** Whether to allow reservation for hidden tickets. */
      allowHiddenTickets?: boolean;
      /**
       * Whether to exclude Wix fee.
       * @internal
       */
      excludeFee?: boolean;
  }
  /**
   * Cancels ticket reservation and returns tickets to stock.
   * @public
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.id
   */
  function cancelReservation(identifiers: CancelReservationIdentifiers): Promise<void>;
  interface CancelReservationIdentifiers {
      /** Event ID. */
      eventId: string;
      /** Reservation ID. */
      _id: string;
  }
  /**
   * Generates a preview of a reservation invoice, including the given coupon or pricing plan.
   * @public
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.reservationId
   */
  function getInvoice(identifiers: GetInvoiceIdentifiers, options?: GetInvoiceOptions): Promise<GetInvoiceResponse>;
  interface GetInvoiceIdentifiers {
      /** Event ID. */
      eventId: string;
      /** Reservation ID. */
      reservationId: string;
  }
  interface GetInvoiceOptions {
      /** Optional discount to be applied on the returned invoice. */
      withDiscount?: DiscountRequest;
      /** Optional benefit granted by the pricing plan to be applied on the returned invoice. */
      paidPlanBenefit?: PaidPlanBenefit;
  }
  /**
   * Checkout reserved tickets.
   * Creates order and associates it with a site contact.
   * Guest details must be sent according to Registration Form input fields.
   * (To change an existing "INITIATED, "PENDING", or "OFFLINE_PENDING" order, call the [Update Checkout](https://dev.wix.com/api/rest/wix-events/wix-events/checkout/update-checkout) endpoint).
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   * @requiredField options.guests.form
   */
  function checkout(eventId: string, options?: CheckoutOptions): Promise<CheckoutResponse>;
  interface CheckoutOptions {
      /** Whether to ignore settings to notify contacts or users. */
      /**
       * Deprecated.
       * @internal
       */
      silent?: boolean;
      /** Whether the payment is to be done in person between the buyer and the merchant. When true, the completed order is created with status OFFLINE_PENDING and inPerson payment method. */
      /**
       * Deprecated.
       * @internal
       */
      payInPerson?: boolean;
      /** Whether to ignore form validation. */
      ignoreFormValidation?: boolean;
      /** Member ID (if empty - no site member is associated to this order). */
      memberId?: string;
      /** Discount to apply on the invoice. */
      discount?: DiscountRequest;
      /** Buyer details. */
      buyer?: Buyer;
      /** Guest details. */
      guests?: Guest[];
      /** Benefit granted by the pricing plan. */
      paidPlanBenefit?: PaidPlanBenefit;
      /** Options controlling the checkout process. */
      options?: CheckoutOptions;
      /**
       * Only used in tests.
       * @internal
       */
      overrideRequestTime?: Date;
  }
  interface CheckoutOptions {
      /** Ticket reservation ID. */
      reservationId?: string;
  }
  /**
   * Updates order and tickets (supported only for unconfirmed orders).
   * Guest details must be sent according to Registration Form input fields.
   * @public
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.orderNumber
   */
  function updateCheckout(identifiers: UpdateCheckoutIdentifiers, options?: UpdateCheckoutOptions): Promise<UpdateCheckoutResponse>;
  interface UpdateCheckoutIdentifiers {
      /** Event ID. */
      eventId: string;
      /** Unique order number. */
      orderNumber: string;
  }
  interface UpdateCheckoutOptions {
      /** Buyer details. */
      buyer?: Buyer;
      /** Guest details. */
      guests?: Guest[];
      /** Member ID (if empty - no site member is associated to this order). */
      memberId?: string | null;
      /** Discount to apply on the invoice. */
      discount?: DiscountRequest;
      /** Benefit granted by the pricing plan. */
      paidPlanBenefit?: PaidPlanBenefit;
  }
  /**
   * Creates order with payment details already initiated via Cashier Pay API.
   * @param eventId - Event ID.
   * @param reservationId - Ticket reservation ID.
   * @requiredField eventId
   * @requiredField reservationId
   */
  function posCheckout(eventId: string, reservationId: string, options?: PosCheckoutOptions): Promise<PosCheckoutResponse>;
  interface PosCheckoutOptions {
      /**
       * Payment details ID.
       * Not required if reservation total is 0. In this case the order will be created with status Free and no payment.
       */
      paymentDetailsId?: string | null;
  }
  
  const eventsV1Order_universal_d___debug: typeof __debug;
  type eventsV1Order_universal_d_Order = Order;
  type eventsV1Order_universal_d_FormResponse = FormResponse;
  type eventsV1Order_universal_d_InputValue = InputValue;
  type eventsV1Order_universal_d_FormattedAddress = FormattedAddress;
  type eventsV1Order_universal_d_Address = Address;
  type eventsV1Order_universal_d_AddressStreetOneOf = AddressStreetOneOf;
  type eventsV1Order_universal_d_StreetAddress = StreetAddress;
  type eventsV1Order_universal_d_AddressLocation = AddressLocation;
  type eventsV1Order_universal_d_Subdivision = Subdivision;
  type eventsV1Order_universal_d_SubdivisionType = SubdivisionType;
  const eventsV1Order_universal_d_SubdivisionType: typeof SubdivisionType;
  type eventsV1Order_universal_d_OrderStatus = OrderStatus;
  const eventsV1Order_universal_d_OrderStatus: typeof OrderStatus;
  type eventsV1Order_universal_d_Money = Money;
  type eventsV1Order_universal_d_TicketingTicket = TicketingTicket;
  type eventsV1Order_universal_d_CheckIn = CheckIn;
  type eventsV1Order_universal_d_GuestDetails = GuestDetails;
  type eventsV1Order_universal_d_ChannelType = ChannelType;
  const eventsV1Order_universal_d_ChannelType: typeof ChannelType;
  type eventsV1Order_universal_d_TicketDetails = TicketDetails;
  type eventsV1Order_universal_d_Invoice = Invoice;
  type eventsV1Order_universal_d_Item = Item;
  type eventsV1Order_universal_d_Discount = Discount;
  type eventsV1Order_universal_d_DiscountItem = DiscountItem;
  type eventsV1Order_universal_d_DiscountItemDiscountOneOf = DiscountItemDiscountOneOf;
  type eventsV1Order_universal_d_CouponDiscount = CouponDiscount;
  type eventsV1Order_universal_d_PaidPlanDiscount = PaidPlanDiscount;
  type eventsV1Order_universal_d_PaidPlanDiscountDiscountOneOf = PaidPlanDiscountDiscountOneOf;
  type eventsV1Order_universal_d_PercentDiscount = PercentDiscount;
  type eventsV1Order_universal_d_Tax = Tax;
  type eventsV1Order_universal_d_TaxType = TaxType;
  const eventsV1Order_universal_d_TaxType: typeof TaxType;
  type eventsV1Order_universal_d_Fee = Fee;
  type eventsV1Order_universal_d_FeeName = FeeName;
  const eventsV1Order_universal_d_FeeName: typeof FeeName;
  type eventsV1Order_universal_d_FeeType = FeeType;
  const eventsV1Order_universal_d_FeeType: typeof FeeType;
  type eventsV1Order_universal_d_PaymentDetails = PaymentDetails;
  type eventsV1Order_universal_d_PaymentTransaction = PaymentTransaction;
  type eventsV1Order_universal_d_OrderDeleted = OrderDeleted;
  type eventsV1Order_universal_d_OrderType = OrderType;
  const eventsV1Order_universal_d_OrderType: typeof OrderType;
  type eventsV1Order_universal_d_Ticket = Ticket;
  type eventsV1Order_universal_d_ListOrdersRequest = ListOrdersRequest;
  type eventsV1Order_universal_d_OrderFieldset = OrderFieldset;
  const eventsV1Order_universal_d_OrderFieldset: typeof OrderFieldset;
  type eventsV1Order_universal_d_OrderTag = OrderTag;
  const eventsV1Order_universal_d_OrderTag: typeof OrderTag;
  type eventsV1Order_universal_d_ListOrdersResponse = ListOrdersResponse;
  type eventsV1Order_universal_d_FacetCounts = FacetCounts;
  type eventsV1Order_universal_d_SearchMetaData = SearchMetaData;
  type eventsV1Order_universal_d_Result = Result;
  type eventsV1Order_universal_d_OrderFacets = OrderFacets;
  type eventsV1Order_universal_d_OrderFacetCounts = OrderFacetCounts;
  type eventsV1Order_universal_d_Counts = Counts;
  type eventsV1Order_universal_d_GetOrderRequest = GetOrderRequest;
  type eventsV1Order_universal_d_GetOrderResponse = GetOrderResponse;
  type eventsV1Order_universal_d_CalendarLinks = CalendarLinks;
  type eventsV1Order_universal_d_UpdateOrderRequest = UpdateOrderRequest;
  type eventsV1Order_universal_d_UpdateOrderResponse = UpdateOrderResponse;
  type eventsV1Order_universal_d_OrderUpdated = OrderUpdated;
  type eventsV1Order_universal_d_BulkUpdateOrdersRequest = BulkUpdateOrdersRequest;
  type eventsV1Order_universal_d_BulkUpdateOrdersResponse = BulkUpdateOrdersResponse;
  type eventsV1Order_universal_d_ConfirmOrderRequest = ConfirmOrderRequest;
  type eventsV1Order_universal_d_ConfirmOrderResponse = ConfirmOrderResponse;
  type eventsV1Order_universal_d_GetSummaryRequest = GetSummaryRequest;
  type eventsV1Order_universal_d_GetSummaryResponse = GetSummaryResponse;
  type eventsV1Order_universal_d_TicketSales = TicketSales;
  type eventsV1Order_universal_d_GetInvoicePreviewRequest = GetInvoicePreviewRequest;
  type eventsV1Order_universal_d_RawHttpResponse = RawHttpResponse;
  type eventsV1Order_universal_d_HeadersEntry = HeadersEntry;
  type eventsV1Order_universal_d_GetPaymentInfoRequest = GetPaymentInfoRequest;
  type eventsV1Order_universal_d_GetPaymentInfoResponse = GetPaymentInfoResponse;
  type eventsV1Order_universal_d_PaymentTransactionSummary = PaymentTransactionSummary;
  type eventsV1Order_universal_d_PaymentTransactionEvent = PaymentTransactionEvent;
  type eventsV1Order_universal_d_OrderConfirmed = OrderConfirmed;
  type eventsV1Order_universal_d_OrderPaid = OrderPaid;
  type eventsV1Order_universal_d_ReservationCreated = ReservationCreated;
  type eventsV1Order_universal_d_ReservationStatus = ReservationStatus;
  const eventsV1Order_universal_d_ReservationStatus: typeof ReservationStatus;
  type eventsV1Order_universal_d_ReservationUpdated = ReservationUpdated;
  type eventsV1Order_universal_d_GetCheckoutOptionsRequest = GetCheckoutOptionsRequest;
  type eventsV1Order_universal_d_GetCheckoutOptionsResponse = GetCheckoutOptionsResponse;
  type eventsV1Order_universal_d_ListAvailableTicketsRequest = ListAvailableTicketsRequest;
  type eventsV1Order_universal_d_State = State;
  const eventsV1Order_universal_d_State: typeof State;
  type eventsV1Order_universal_d_ListAvailableTicketsResponse = ListAvailableTicketsResponse;
  type eventsV1Order_universal_d_ResponseMetaData = ResponseMetaData;
  type eventsV1Order_universal_d_TicketDefinition = TicketDefinition;
  type eventsV1Order_universal_d_Dashboard = Dashboard;
  type eventsV1Order_universal_d_WixFeeConfig = WixFeeConfig;
  type eventsV1Order_universal_d_TicketSalePeriod = TicketSalePeriod;
  type eventsV1Order_universal_d_TicketSaleStatus = TicketSaleStatus;
  const eventsV1Order_universal_d_TicketSaleStatus: typeof TicketSaleStatus;
  type eventsV1Order_universal_d_TicketPricing = TicketPricing;
  type eventsV1Order_universal_d_TicketPricingPriceOneOf = TicketPricingPriceOneOf;
  type eventsV1Order_universal_d_PricingOptions = PricingOptions;
  type eventsV1Order_universal_d_PricingOption = PricingOption;
  type eventsV1Order_universal_d_Type = Type;
  const eventsV1Order_universal_d_Type: typeof Type;
  type eventsV1Order_universal_d_QueryAvailableTicketsRequest = QueryAvailableTicketsRequest;
  type eventsV1Order_universal_d_TicketDefinitionFieldset = TicketDefinitionFieldset;
  const eventsV1Order_universal_d_TicketDefinitionFieldset: typeof TicketDefinitionFieldset;
  type eventsV1Order_universal_d_QueryAvailableTicketsResponse = QueryAvailableTicketsResponse;
  type eventsV1Order_universal_d_CreateReservationRequest = CreateReservationRequest;
  type eventsV1Order_universal_d_TicketReservationQuantity = TicketReservationQuantity;
  type eventsV1Order_universal_d_CreateReservationResponse = CreateReservationResponse;
  type eventsV1Order_universal_d_TicketReservation = TicketReservation;
  type eventsV1Order_universal_d_CancelReservationRequest = CancelReservationRequest;
  type eventsV1Order_universal_d_CancelReservationResponse = CancelReservationResponse;
  type eventsV1Order_universal_d_GetInvoiceRequest = GetInvoiceRequest;
  type eventsV1Order_universal_d_DiscountRequest = DiscountRequest;
  type eventsV1Order_universal_d_PaidPlanBenefit = PaidPlanBenefit;
  type eventsV1Order_universal_d_GetInvoiceResponse = GetInvoiceResponse;
  type eventsV1Order_universal_d_DiscountErrors = DiscountErrors;
  type eventsV1Order_universal_d_Error = Error;
  type eventsV1Order_universal_d_CheckoutRequest = CheckoutRequest;
  type eventsV1Order_universal_d_Buyer = Buyer;
  type eventsV1Order_universal_d_Guest = Guest;
  type eventsV1Order_universal_d_CheckoutOptions = CheckoutOptions;
  type eventsV1Order_universal_d_CheckoutResponse = CheckoutResponse;
  type eventsV1Order_universal_d_OrderInitiated = OrderInitiated;
  type eventsV1Order_universal_d_UpdateCheckoutRequest = UpdateCheckoutRequest;
  type eventsV1Order_universal_d_UpdateCheckoutResponse = UpdateCheckoutResponse;
  type eventsV1Order_universal_d_PosCheckoutRequest = PosCheckoutRequest;
  type eventsV1Order_universal_d_PosCheckoutResponse = PosCheckoutResponse;
  const eventsV1Order_universal_d_listOrders: typeof listOrders;
  type eventsV1Order_universal_d_ListOrdersOptions = ListOrdersOptions;
  const eventsV1Order_universal_d_getOrder: typeof getOrder;
  type eventsV1Order_universal_d_GetOrderIdentifiers = GetOrderIdentifiers;
  type eventsV1Order_universal_d_GetOrderOptions = GetOrderOptions;
  const eventsV1Order_universal_d_updateOrder: typeof updateOrder;
  type eventsV1Order_universal_d_UpdateOrderIdentifiers = UpdateOrderIdentifiers;
  type eventsV1Order_universal_d_UpdateOrderOptions = UpdateOrderOptions;
  const eventsV1Order_universal_d_bulkUpdateOrders: typeof bulkUpdateOrders;
  type eventsV1Order_universal_d_BulkUpdateOrdersOptions = BulkUpdateOrdersOptions;
  const eventsV1Order_universal_d_confirmOrder: typeof confirmOrder;
  type eventsV1Order_universal_d_ConfirmOrderOptions = ConfirmOrderOptions;
  const eventsV1Order_universal_d_getSummary: typeof getSummary;
  type eventsV1Order_universal_d_GetSummaryOptions = GetSummaryOptions;
  const eventsV1Order_universal_d_getInvoicePreview: typeof getInvoicePreview;
  type eventsV1Order_universal_d_GetInvoicePreviewIdentifiers = GetInvoicePreviewIdentifiers;
  const eventsV1Order_universal_d_getCheckoutOptions: typeof getCheckoutOptions;
  const eventsV1Order_universal_d_listAvailableTickets: typeof listAvailableTickets;
  type eventsV1Order_universal_d_ListAvailableTicketsOptions = ListAvailableTicketsOptions;
  const eventsV1Order_universal_d_queryAvailableTickets: typeof queryAvailableTickets;
  type eventsV1Order_universal_d_QueryAvailableTicketsOptions = QueryAvailableTicketsOptions;
  const eventsV1Order_universal_d_createReservation: typeof createReservation;
  type eventsV1Order_universal_d_CreateReservationOptions = CreateReservationOptions;
  const eventsV1Order_universal_d_cancelReservation: typeof cancelReservation;
  type eventsV1Order_universal_d_CancelReservationIdentifiers = CancelReservationIdentifiers;
  const eventsV1Order_universal_d_getInvoice: typeof getInvoice;
  type eventsV1Order_universal_d_GetInvoiceIdentifiers = GetInvoiceIdentifiers;
  type eventsV1Order_universal_d_GetInvoiceOptions = GetInvoiceOptions;
  const eventsV1Order_universal_d_checkout: typeof checkout;
  const eventsV1Order_universal_d_updateCheckout: typeof updateCheckout;
  type eventsV1Order_universal_d_UpdateCheckoutIdentifiers = UpdateCheckoutIdentifiers;
  type eventsV1Order_universal_d_UpdateCheckoutOptions = UpdateCheckoutOptions;
  const eventsV1Order_universal_d_posCheckout: typeof posCheckout;
  type eventsV1Order_universal_d_PosCheckoutOptions = PosCheckoutOptions;
  namespace eventsV1Order_universal_d {
    export {
      eventsV1Order_universal_d___debug as __debug,
      eventsV1Order_universal_d_Order as Order,
      eventsV1Order_universal_d_FormResponse as FormResponse,
      eventsV1Order_universal_d_InputValue as InputValue,
      eventsV1Order_universal_d_FormattedAddress as FormattedAddress,
      eventsV1Order_universal_d_Address as Address,
      eventsV1Order_universal_d_AddressStreetOneOf as AddressStreetOneOf,
      eventsV1Order_universal_d_StreetAddress as StreetAddress,
      eventsV1Order_universal_d_AddressLocation as AddressLocation,
      eventsV1Order_universal_d_Subdivision as Subdivision,
      eventsV1Order_universal_d_SubdivisionType as SubdivisionType,
      eventsV1Order_universal_d_OrderStatus as OrderStatus,
      eventsV1Order_universal_d_Money as Money,
      eventsV1Order_universal_d_TicketingTicket as TicketingTicket,
      eventsV1Order_universal_d_CheckIn as CheckIn,
      eventsV1Order_universal_d_GuestDetails as GuestDetails,
      eventsV1Order_universal_d_ChannelType as ChannelType,
      eventsV1Order_universal_d_TicketDetails as TicketDetails,
      eventsV1Order_universal_d_Invoice as Invoice,
      eventsV1Order_universal_d_Item as Item,
      eventsV1Order_universal_d_Discount as Discount,
      eventsV1Order_universal_d_DiscountItem as DiscountItem,
      eventsV1Order_universal_d_DiscountItemDiscountOneOf as DiscountItemDiscountOneOf,
      eventsV1Order_universal_d_CouponDiscount as CouponDiscount,
      eventsV1Order_universal_d_PaidPlanDiscount as PaidPlanDiscount,
      eventsV1Order_universal_d_PaidPlanDiscountDiscountOneOf as PaidPlanDiscountDiscountOneOf,
      eventsV1Order_universal_d_PercentDiscount as PercentDiscount,
      eventsV1Order_universal_d_Tax as Tax,
      eventsV1Order_universal_d_TaxType as TaxType,
      eventsV1Order_universal_d_Fee as Fee,
      eventsV1Order_universal_d_FeeName as FeeName,
      eventsV1Order_universal_d_FeeType as FeeType,
      eventsV1Order_universal_d_PaymentDetails as PaymentDetails,
      eventsV1Order_universal_d_PaymentTransaction as PaymentTransaction,
      eventsV1Order_universal_d_OrderDeleted as OrderDeleted,
      eventsV1Order_universal_d_OrderType as OrderType,
      eventsV1Order_universal_d_Ticket as Ticket,
      eventsV1Order_universal_d_ListOrdersRequest as ListOrdersRequest,
      eventsV1Order_universal_d_OrderFieldset as OrderFieldset,
      eventsV1Order_universal_d_OrderTag as OrderTag,
      eventsV1Order_universal_d_ListOrdersResponse as ListOrdersResponse,
      eventsV1Order_universal_d_FacetCounts as FacetCounts,
      eventsV1Order_universal_d_SearchMetaData as SearchMetaData,
      eventsV1Order_universal_d_Result as Result,
      eventsV1Order_universal_d_OrderFacets as OrderFacets,
      eventsV1Order_universal_d_OrderFacetCounts as OrderFacetCounts,
      eventsV1Order_universal_d_Counts as Counts,
      eventsV1Order_universal_d_GetOrderRequest as GetOrderRequest,
      eventsV1Order_universal_d_GetOrderResponse as GetOrderResponse,
      eventsV1Order_universal_d_CalendarLinks as CalendarLinks,
      eventsV1Order_universal_d_UpdateOrderRequest as UpdateOrderRequest,
      eventsV1Order_universal_d_UpdateOrderResponse as UpdateOrderResponse,
      eventsV1Order_universal_d_OrderUpdated as OrderUpdated,
      eventsV1Order_universal_d_BulkUpdateOrdersRequest as BulkUpdateOrdersRequest,
      eventsV1Order_universal_d_BulkUpdateOrdersResponse as BulkUpdateOrdersResponse,
      eventsV1Order_universal_d_ConfirmOrderRequest as ConfirmOrderRequest,
      eventsV1Order_universal_d_ConfirmOrderResponse as ConfirmOrderResponse,
      eventsV1Order_universal_d_GetSummaryRequest as GetSummaryRequest,
      eventsV1Order_universal_d_GetSummaryResponse as GetSummaryResponse,
      eventsV1Order_universal_d_TicketSales as TicketSales,
      eventsV1Order_universal_d_GetInvoicePreviewRequest as GetInvoicePreviewRequest,
      eventsV1Order_universal_d_RawHttpResponse as RawHttpResponse,
      eventsV1Order_universal_d_HeadersEntry as HeadersEntry,
      eventsV1Order_universal_d_GetPaymentInfoRequest as GetPaymentInfoRequest,
      eventsV1Order_universal_d_GetPaymentInfoResponse as GetPaymentInfoResponse,
      eventsV1Order_universal_d_PaymentTransactionSummary as PaymentTransactionSummary,
      eventsV1Order_universal_d_PaymentTransactionEvent as PaymentTransactionEvent,
      eventsV1Order_universal_d_OrderConfirmed as OrderConfirmed,
      eventsV1Order_universal_d_OrderPaid as OrderPaid,
      eventsV1Order_universal_d_ReservationCreated as ReservationCreated,
      eventsV1Order_universal_d_ReservationStatus as ReservationStatus,
      eventsV1Order_universal_d_ReservationUpdated as ReservationUpdated,
      eventsV1Order_universal_d_GetCheckoutOptionsRequest as GetCheckoutOptionsRequest,
      eventsV1Order_universal_d_GetCheckoutOptionsResponse as GetCheckoutOptionsResponse,
      eventsV1Order_universal_d_ListAvailableTicketsRequest as ListAvailableTicketsRequest,
      eventsV1Order_universal_d_State as State,
      eventsV1Order_universal_d_ListAvailableTicketsResponse as ListAvailableTicketsResponse,
      eventsV1Order_universal_d_ResponseMetaData as ResponseMetaData,
      eventsV1Order_universal_d_TicketDefinition as TicketDefinition,
      eventsV1Order_universal_d_Dashboard as Dashboard,
      eventsV1Order_universal_d_WixFeeConfig as WixFeeConfig,
      eventsV1Order_universal_d_TicketSalePeriod as TicketSalePeriod,
      eventsV1Order_universal_d_TicketSaleStatus as TicketSaleStatus,
      eventsV1Order_universal_d_TicketPricing as TicketPricing,
      eventsV1Order_universal_d_TicketPricingPriceOneOf as TicketPricingPriceOneOf,
      eventsV1Order_universal_d_PricingOptions as PricingOptions,
      eventsV1Order_universal_d_PricingOption as PricingOption,
      eventsV1Order_universal_d_Type as Type,
      eventsV1Order_universal_d_QueryAvailableTicketsRequest as QueryAvailableTicketsRequest,
      eventsV1Order_universal_d_TicketDefinitionFieldset as TicketDefinitionFieldset,
      eventsV1Order_universal_d_QueryAvailableTicketsResponse as QueryAvailableTicketsResponse,
      eventsV1Order_universal_d_CreateReservationRequest as CreateReservationRequest,
      eventsV1Order_universal_d_TicketReservationQuantity as TicketReservationQuantity,
      eventsV1Order_universal_d_CreateReservationResponse as CreateReservationResponse,
      eventsV1Order_universal_d_TicketReservation as TicketReservation,
      eventsV1Order_universal_d_CancelReservationRequest as CancelReservationRequest,
      eventsV1Order_universal_d_CancelReservationResponse as CancelReservationResponse,
      eventsV1Order_universal_d_GetInvoiceRequest as GetInvoiceRequest,
      eventsV1Order_universal_d_DiscountRequest as DiscountRequest,
      eventsV1Order_universal_d_PaidPlanBenefit as PaidPlanBenefit,
      eventsV1Order_universal_d_GetInvoiceResponse as GetInvoiceResponse,
      eventsV1Order_universal_d_DiscountErrors as DiscountErrors,
      eventsV1Order_universal_d_Error as Error,
      eventsV1Order_universal_d_CheckoutRequest as CheckoutRequest,
      eventsV1Order_universal_d_Buyer as Buyer,
      eventsV1Order_universal_d_Guest as Guest,
      eventsV1Order_universal_d_CheckoutOptions as CheckoutOptions,
      eventsV1Order_universal_d_CheckoutResponse as CheckoutResponse,
      eventsV1Order_universal_d_OrderInitiated as OrderInitiated,
      eventsV1Order_universal_d_UpdateCheckoutRequest as UpdateCheckoutRequest,
      eventsV1Order_universal_d_UpdateCheckoutResponse as UpdateCheckoutResponse,
      eventsV1Order_universal_d_PosCheckoutRequest as PosCheckoutRequest,
      eventsV1Order_universal_d_PosCheckoutResponse as PosCheckoutResponse,
      eventsV1Order_universal_d_listOrders as listOrders,
      eventsV1Order_universal_d_ListOrdersOptions as ListOrdersOptions,
      eventsV1Order_universal_d_getOrder as getOrder,
      eventsV1Order_universal_d_GetOrderIdentifiers as GetOrderIdentifiers,
      eventsV1Order_universal_d_GetOrderOptions as GetOrderOptions,
      eventsV1Order_universal_d_updateOrder as updateOrder,
      eventsV1Order_universal_d_UpdateOrderIdentifiers as UpdateOrderIdentifiers,
      eventsV1Order_universal_d_UpdateOrderOptions as UpdateOrderOptions,
      eventsV1Order_universal_d_bulkUpdateOrders as bulkUpdateOrders,
      eventsV1Order_universal_d_BulkUpdateOrdersOptions as BulkUpdateOrdersOptions,
      eventsV1Order_universal_d_confirmOrder as confirmOrder,
      eventsV1Order_universal_d_ConfirmOrderOptions as ConfirmOrderOptions,
      eventsV1Order_universal_d_getSummary as getSummary,
      eventsV1Order_universal_d_GetSummaryOptions as GetSummaryOptions,
      eventsV1Order_universal_d_getInvoicePreview as getInvoicePreview,
      eventsV1Order_universal_d_GetInvoicePreviewIdentifiers as GetInvoicePreviewIdentifiers,
      eventsV1Order_universal_d_getCheckoutOptions as getCheckoutOptions,
      eventsV1Order_universal_d_listAvailableTickets as listAvailableTickets,
      eventsV1Order_universal_d_ListAvailableTicketsOptions as ListAvailableTicketsOptions,
      eventsV1Order_universal_d_queryAvailableTickets as queryAvailableTickets,
      eventsV1Order_universal_d_QueryAvailableTicketsOptions as QueryAvailableTicketsOptions,
      eventsV1Order_universal_d_createReservation as createReservation,
      eventsV1Order_universal_d_CreateReservationOptions as CreateReservationOptions,
      eventsV1Order_universal_d_cancelReservation as cancelReservation,
      eventsV1Order_universal_d_CancelReservationIdentifiers as CancelReservationIdentifiers,
      eventsV1Order_universal_d_getInvoice as getInvoice,
      eventsV1Order_universal_d_GetInvoiceIdentifiers as GetInvoiceIdentifiers,
      eventsV1Order_universal_d_GetInvoiceOptions as GetInvoiceOptions,
      eventsV1Order_universal_d_checkout as checkout,
      eventsV1Order_universal_d_updateCheckout as updateCheckout,
      eventsV1Order_universal_d_UpdateCheckoutIdentifiers as UpdateCheckoutIdentifiers,
      eventsV1Order_universal_d_UpdateCheckoutOptions as UpdateCheckoutOptions,
      eventsV1Order_universal_d_posCheckout as posCheckout,
      eventsV1Order_universal_d_PosCheckoutOptions as PosCheckoutOptions,
    };
  }
  
  export { eventsV1Order_universal_d as order };
}
