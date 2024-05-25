declare module "wix-events.v2" {
  interface EventGuest {
      /** Guest ID. */
      _id?: string | null;
      /** Event ID. */
      eventId?: string | null;
      /** RSVP ID. <br/> <br/> **Note:** Only applicable when `guestType` is `RSVP`. */
      rsvpId?: string | null;
      /** Order number. <br/> <br/> **Note:** Only applicable when `guestType` is `BUYER` or `TICKET_HOLDER`. */
      orderNumber?: string | null;
      /** Ticket number. <br/> <br/> **Note:** Only applicable when `guestType` is `TICKET_HOLDER`. */
      ticketNumber?: string | null;
      /** List of names, numbers, and definition IDs for each ticket. */
      tickets?: TicketDetails$2[];
      /** Guest's contact ID. See [Contacts API](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4) for more details. */
      contactId?: string | null;
      /** Guest details. <br/> <br/> Returned only when the `guestDetails` fieldset is sent in the request. */
      guestDetails?: GuestDetails$2;
      /** Attendance status. <br/> <br/> **Note:** For `guestType` `BUYER` or `TICKET_HOLDER` the `IN_WAITLIST` value is not applicable. */
      attendanceStatus?: AttendanceStatus;
      /** Secondary language code in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. Used when the event ticket should be translated into another language. */
      secondaryLanguageCode?: string | null;
      /** Date and time the guest was created in `yyyy-mm-ddThh:mm:sssZ` format. */
      _createdDate?: Date;
      /** Date and time the guest was updated in `yyyy-mm-ddThh:mm:sssZ` format. */
      _updatedDate?: Date;
      /** Date and time of guest's latest attendance status update. */
      attendanceStatusUpdatedDate?: Date;
      /** Site member ID. */
      memberId?: string | null;
      /** Guest type: <br/> <br/> `RSVP`: An invited guest, no ticket necessary. <br/> <br/> `BUYER`: The guest who bought the tickets. <br/> <br/> `TICKET_HOLDER`: The guest for whom the ticket was bought. */
      guestType?: GuestType;
      /** Locale in [IETF BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) format. Used when the event date and time on a ticket should be formatted into another locale. */
      locale?: string | null;
      /**
       * Number of current guest plus additional guests
       * @readonly
       */
      totalGuests?: number | null;
      /**
       * Guest revision
       * @readonly
       */
      revision?: string | null;
  }
  interface TicketDetails$2 {
      /** Ticket number. */
      number?: string;
      /** Ticket definition ID. */
      definitionId?: string | null;
      /** Ticket name. */
      name?: string | null;
      /**
       * Ticket guest details.
       * @internal
       */
      guestDetails?: TicketGuestDetails;
  }
  interface TicketGuestDetails {
      /** The login details for the guest to access the online conference event. */
      onlineConferencingLogin?: OnlineConferencingLogin$3;
      /** First name. */
      firstName?: string | null;
      /** Last name. */
      lastName?: string | null;
  }
  interface OnlineConferencingLogin$3 {
      /**
       * Link URL to the online conference.
       * @readonly
       */
      link?: string;
      /**
       * Password for the online conference.
       * @readonly
       */
      password?: string | null;
  }
  interface GuestDetails$2 {
      /** Email. */
      email?: string | null;
      /** First name. */
      firstName?: string | null;
      /** Last name. */
      lastName?: string | null;
      /** Form response. */
      formResponse?: FormResponse$3;
      /** Whether the guest has checked into the event. */
      checkedIn?: boolean;
      /** The login details for the guest to access the online conference event. */
      onlineConferencingLogin?: OnlineConferencingLogin$3;
  }
  interface FormResponse$3 {
      inputValues?: InputValue$3[];
  }
  interface InputValue$3 {
      inputName?: string;
      value?: string;
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
      address?: FormattedAddress$3;
  }
  interface FormattedAddress$3 {
      /** One line address representation. */
      formatted?: string;
      /** Address components (optional). */
      address?: Address$7;
  }
  /** Physical address */
  interface Address$7 extends AddressStreetOneOf$7 {
      /** Street name and number. */
      streetAddress?: StreetAddress$7;
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
      location?: AddressLocation$7;
  }
  /** @oneof */
  interface AddressStreetOneOf$7 {
      /** Street name and number. */
      streetAddress?: StreetAddress$7;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
  }
  interface StreetAddress$7 {
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
  interface AddressLocation$7 {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Subdivision$7 {
      /** Short subdivision code. */
      code?: string;
      /** Subdivision full name. */
      name?: string;
      /**
       * Subdivision level
       * @internal
       */
      type?: SubdivisionType$7;
      /**
       * Free text description of subdivision type.
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType$7 {
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
  enum AttendanceStatus {
      /** Not attending. */
      NOT_ATTENDING = "NOT_ATTENDING",
      /** Attending. */
      ATTENDING = "ATTENDING",
      /** In a waiting list. */
      IN_WAITLIST = "IN_WAITLIST"
  }
  enum GuestType {
      /** Rsvp guest. */
      RSVP = "RSVP",
      /** Buyer guest. */
      BUYER = "BUYER",
      /** Ticket holder guest. */
      TICKET_HOLDER = "TICKET_HOLDER"
  }
  interface GuestCountUpdated {
      guest?: EventGuest;
      guestCountUpdates?: GuestCountUpdate[];
  }
  interface GuestCountUpdate {
      attendanceStatus?: AttendanceStatus;
      totalGuestsDelta?: number;
      countDelta?: number;
  }
  interface QueryEventGuestsRequest {
      /** Query options. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
      query: QueryV2$7;
      /**
       * Predefined sets of fields to return.
       * - `GUEST_DETAILS`: Returns `guestDetails` and `tickets`.
       */
      fields?: RequestedFieldsEnumRequestedFields[];
  }
  interface QueryV2$7 extends QueryV2PagingMethodOneOf$7 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$7;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$4;
      /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1", "fieldName2":{"$operator":"value2"} }`. <br/> <br/> **Example:** <br/> `"filter" : { "eventId": "sd3f-jhds-4fs77", "ticketNumber": {"$startsWith":"478"} }` <br/> <br/> See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort) for more information. */
      filter?: Record<string, any> | null;
      /** Sort object in the following format: <br/> `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]` <br/> <br/> **Example:** <br/> `[{"fieldName":"createdDate","direction":"DESC"}]` <br/> <br/> See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort) for more information. */
      sort?: Sorting$7[];
      /** Currently the only supported fieldset is `guestDetails`. The `WIX_EVENTS.READ_GUESTS_DETAILS` permission is required to access the guest details. <br/> <br/> See [field projection](https://dev.wix.com/api/rest/getting-started/field-projection) for more information. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$7 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$7;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$4;
  }
  interface Sorting$7 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order (ASC/DESC). Defaults to ASC */
      order?: SortOrder$7;
  }
  enum SortOrder$7 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging$7 {
      /** Number of items to load per page. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface CursorPaging$4 {
      /** Number of items to load per page. */
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
  enum RequestedFieldsEnumRequestedFields {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      /** Select fields: `guestDetails` and `tickets`. */
      GUEST_DETAILS = "GUEST_DETAILS"
  }
  interface QueryEventGuestsResponse {
      /** List of guests. */
      guests?: EventGuest[];
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadataV2$7;
  }
  interface PagingMetadataV2$7 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$7;
  }
  interface Cursors$7 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface StreamEventGuestsRequest {
      /** Filter. */
      filter?: Record<string, any> | null;
      /** Task context. */
      taskContext?: TaskContext;
  }
  interface TaskContext {
      /** Task id. */
      _id?: string | null;
      /** Notify action type */
      type?: NotifyActionType;
  }
  enum NotifyActionType {
      UNKNOWN = "UNKNOWN",
      EMAIL = "EMAIL",
      AUTOMATION_TRIGGER = "AUTOMATION_TRIGGER",
      PUSH = "PUSH"
  }
  interface Empty$3 {
  }
  interface NotifyGuestAction {
      /** Event guest. */
      guest?: EventGuest;
      /** Task context. */
      taskContext?: TaskContext;
  }
  interface SecondaryLanguagesRequest {
      /** Guest event id. */
      eventId?: string;
  }
  interface SecondaryLanguagesResponse {
      /** Aggregated guests languages. */
      secondaryLanguages?: string[];
      languages?: Language[];
  }
  interface Language {
      /** Guest language. */
      language?: string | null;
      /** Guest locale. */
      locale?: string | null;
  }
  interface RsvpCreated$1 {
      /** RSVP created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when RSVP created */
      language?: string | null;
      /** Notifications silenced for this domain event. */
      silent?: boolean | null;
      /**
       * Locale in which Rsvp was created.
       * @internal
       */
      locale?: string | null;
      /** Event ID. */
      eventId?: string;
      /** RSVP ID. */
      rsvpId?: string;
      /** Contact ID associated with this RSVP. */
      contactId?: string;
      /** Member ID associated with this RSVP. */
      memberId?: string | null;
      /** Guest first name. */
      firstName?: string;
      /** Guest last name. */
      lastName?: string;
      /** Guest email. */
      email?: string;
      /** RSVP form response. */
      rsvpForm?: FormResponse$3;
      /** RSVP response status. */
      status?: RsvpStatus$1;
      /** List of all guests. */
      guests?: Guest$2[];
      /** URL and password to online conference */
      onlineConferencingLogin?: OnlineConferencingLogin$3;
  }
  enum RsvpStatus$1 {
      YES = "YES",
      NO = "NO",
      WAITING = "WAITING"
  }
  interface Guest$2 {
      /** Index in the RSVP guest list. */
      index?: number;
      /** Guest full name. */
      fullName?: string;
      /** Guest check-in. */
      checkIn?: CheckIn$3;
      /** Unique guest ID per RSVP. */
      _id?: number;
  }
  interface CheckIn$3 {
      /** Time of check-in */
      created?: Date;
  }
  interface RsvpUpdated$1 {
      /** RSVP updated timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when RSVP created */
      language?: string | null;
      /** Locale in which Rsvp was created. */
      locale?: string | null;
      /** Event ID. */
      eventId?: string;
      /** RSVP ID. */
      rsvpId?: string;
      /** Contact ID associated with this RSVP. */
      contactId?: string;
      /** Member ID associated with this RSVP. */
      memberId?: string | null;
      /** RSVP created timestamp. */
      created?: Date;
      /** Guest first name. */
      firstName?: string;
      /** Guest last name. */
      lastName?: string;
      /** Guest email. */
      email?: string;
      /** RSVP form response. */
      rsvpForm?: FormResponse$3;
      /** RSVP response status. */
      status?: RsvpStatus$1;
      /** List of the guests. */
      guests?: Guest$2[];
      /** URL and password to online conference */
      onlineConferencingLogin?: OnlineConferencingLogin$3;
      /** Notifications silenced for this domain event. */
      silent?: boolean | null;
  }
  interface RsvpDeleted$1 {
      /** RSVP deleted timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** RSVP ID. */
      rsvpId?: string;
      /** Contact ID associated with this RSVP. */
      contactId?: string;
      /** Member ID associated with this RSVP. */
      memberId?: string | null;
      /** Whether RSVP was anonymized by GDPR delete. */
      anonymized?: boolean;
  }
  interface OrderConfirmed$1 {
      /** Order confirmation timestamp in ISO UTC. */
      timestamp?: Date;
      /** Site language when Order initiated */
      language?: string | null;
      /** Notifications silenced for this domain event. */
      silent?: boolean | null;
      /** Locale in which Order was created. */
      locale?: string | null;
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
      checkoutForm?: FormResponse$3;
      /** Order status. */
      status?: OrderStatus$2;
      /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
      method?: string | null;
      /** Tickets (generated after payment). */
      tickets?: Ticket$2[];
      /** Invoice. */
      invoice?: Invoice$1;
      /** Reservation ID associated with this order. */
      reservationId?: string;
  }
  enum OrderStatus$2 {
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
  interface Ticket$2 {
      /** Unique issued ticket number. */
      ticketNumber?: string;
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
      /** Ticket check-in. */
      checkIn?: CheckIn$3;
      /** Ticket price. */
      price?: Money$6;
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
      form?: FormResponse$3;
      /** Ticket name. */
      ticketName?: string;
      /** Anonymized tickets no longer contain personally identifiable information (PII). */
      anonymized?: boolean;
      /** URL and password to online conference */
      onlineConferencingLogin?: OnlineConferencingLogin$3;
  }
  interface Money$6 {
      /** *Deprecated:** Use `value` instead. */
      amount?: string;
      /** ISO 4217 format of the currency i.e. `USD`. */
      currency?: string;
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string | null;
  }
  interface Invoice$1 {
      items?: Item$1[];
      /** Total cart amount. */
      total?: Money$6;
      /** Discount applied to cart. */
      discount?: Discount$1;
      /** Tax applied to cart. */
      tax?: Tax$1;
      /** Total cart amount before discount, tax, and fees. */
      subTotal?: Money$6;
      /**
       * Total amount of cart after discount, tax, and fees.
       * Grand total is calculated in the following order:
       * 1. Total prices of all items in the cart are calculated.
       * 2. Discount is subtracted from the cart (if applicable).
       * 3. Tax is added (if applicable).
       * 4. Wix service fee is added.
       */
      grandTotal?: Money$6;
      /**
       * Fees applied to the cart.
       * @readonly
       */
      fees?: Fee$1[];
      /** Total revenue, excluding fees. (Taxes and payment provider fees are not deducted). */
      revenue?: Money$6;
      /** URL to invoice preview. Returned only if order is paid. */
      previewUrl?: string | null;
  }
  interface Item$1 {
      /** Unique line item ID. */
      _id?: string;
      /** Line item quantity. */
      quantity?: number;
      /** Line item mame. */
      name?: string;
      /** Line item price. */
      price?: Money$6;
      /** Total price for line items. Always equal to price * quantity. */
      total?: Money$6;
      /** Discount applied to the line item. */
      discount?: Discount$1;
      /** Tax applied to the item. */
      tax?: Tax$1;
      /**
       * Fees applied to the item.
       * @readonly
       */
      fees?: Fee$1[];
  }
  interface Discount$1 {
      /** Total discount amount. */
      amount?: Money$6;
      /** Total charge after applied discount. */
      afterDiscount?: Money$6;
      /** Discount coupon code. */
      code?: string;
      /** Discount coupon name. */
      name?: string;
      /** Discount coupon ID. */
      couponId?: string;
      /** Discount items. */
      discounts?: DiscountItem$1[];
  }
  interface DiscountItem$1 extends DiscountItemDiscountOneOf$1 {
      /** Coupon discount. */
      coupon?: CouponDiscount$1;
      /** Pricing plan discount. */
      paidPlan?: PaidPlanDiscount$1;
      /** Total discount amount. */
      amount?: Money$6;
  }
  /** @oneof */
  interface DiscountItemDiscountOneOf$1 {
      /** Coupon discount. */
      coupon?: CouponDiscount$1;
      /** Pricing plan discount. */
      paidPlan?: PaidPlanDiscount$1;
  }
  interface CouponDiscount$1 {
      /** Discount coupon name. */
      name?: string;
      /** Discount coupon code. */
      code?: string;
      /** Discount coupon ID. */
      couponId?: string;
  }
  interface PaidPlanDiscount$1 extends PaidPlanDiscountDiscountOneOf$1 {
      /** Discount by percentage applied to tickets. */
      percentDiscount?: PercentDiscount$1;
      /** Name of pricing plan. */
      name?: string;
  }
  /** @oneof */
  interface PaidPlanDiscountDiscountOneOf$1 {
      /** Discount by percentage applied to tickets. */
      percentDiscount?: PercentDiscount$1;
  }
  interface PercentDiscount$1 {
      /** Percent rate. */
      rate?: string;
      /** Number of discounted tickets. */
      quantityDiscounted?: number;
  }
  interface Tax$1 {
      /** Tax type. */
      type?: TaxType$4;
      /**
       * Tax name.
       * @readonly
       */
      name?: string;
      /** Tax rate. */
      rate?: string;
      /** Taxable amount. */
      taxable?: Money$6;
      /** Total tax amount. */
      amount?: Money$6;
  }
  enum TaxType$4 {
      /** Tax is included in the ticket price */
      INCLUDED = "INCLUDED",
      /** Tax is added to the order at the checkout */
      ADDED = "ADDED",
      /** Tax is added to the final total at the checkout */
      ADDED_AT_CHECKOUT = "ADDED_AT_CHECKOUT"
  }
  interface Fee$1 {
      /** Fee identifier. */
      name?: FeeName$1;
      /** How fee is calculated. */
      type?: FeeType$2;
      /**
       * Fee rate.
       * @readonly
       */
      rate?: string;
      /** Total amount of fee charges. */
      amount?: Money$6;
  }
  enum FeeName$1 {
      /** Wix service fee charges applied to the line item. */
      WIX_FEE = "WIX_FEE"
  }
  enum FeeType$2 {
      /** Fee is added to the ticket price at checkout */
      FEE_ADDED = "FEE_ADDED",
      /** Seller absorbs the fee. It is deducted from the ticket price */
      FEE_INCLUDED = "FEE_INCLUDED",
      /** Fee is added to the ticket price at checkout */
      FEE_ADDED_AT_CHECKOUT = "FEE_ADDED_AT_CHECKOUT"
  }
  interface OrderUpdated$2 {
      /** Order updated timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when Order initiated */
      language?: string | null;
      /** Locale in which Order was created. */
      locale?: string | null;
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
      /**
       * Order updated timestamp.
       * @readonly
       */
      updated?: Date;
      /** Buyer first name. */
      firstName?: string;
      /** Buyer last name. */
      lastName?: string;
      /** Buyer email. */
      email?: string;
      /** Checkout form response. */
      checkoutForm?: FormResponse$3;
      /** Whether order is confirmed - occurs once payment gateway processes the payment and funds reach merchant's account. */
      confirmed?: boolean;
      /** Order status. */
      status?: OrderStatus$2;
      /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
      method?: string | null;
      /** Tickets generated after payment. */
      tickets?: Ticket$2[];
      /** Whether order was archived and excluded from results. */
      archived?: boolean;
      /** Whether event was triggered by GDPR delete request. */
      triggeredByAnonymizeRequest?: boolean;
  }
  interface OrderDeleted$1 {
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
      /**
       * Order created timestamp.
       * @readonly
       */
      created?: Date;
      /**
       * Order updated timestamp.
       * @readonly
       */
      updated?: Date;
      /** Whether order was anonymized by GDPR delete. */
      anonymized?: boolean;
      /** Order type. */
      orderType?: OrderType$1;
      /** Whether event was triggered by GDPR delete request. */
      triggeredByAnonymizeRequest?: boolean;
      /** Tickets generated after payment. */
      tickets?: Ticket$2[];
  }
  enum OrderType$1 {
      /** Buyer form is used for all tickets */
      UNASSIGNED_TICKETS = "UNASSIGNED_TICKETS",
      /** Each order ticket has its own form */
      ASSIGNED_TICKETS = "ASSIGNED_TICKETS"
  }
  interface EventDeleted$2 {
      /** Event deleted timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event title. */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
      /**
       * Event categories.
       * @internal
       */
      categories?: string[];
  }
  interface Task {
      key?: TaskKey;
      executeAt?: Date;
      payload?: string | null;
  }
  interface TaskKey {
      appId?: string;
      instanceId?: string;
      subjectId?: string | null;
  }
  interface DeleteTicketGuestRequest {
      /** Guest id. */
      eventId?: string;
      /** Order number. */
      orderNumber?: string;
      /** Ticket number. */
      ticketNumber?: string;
  }
  interface ListGuestListPreviewsRequest {
      eventIds: string[];
      cursorPaging?: CursorPaging$4;
      fields?: RequestedFields$2[];
  }
  enum RequestedFields$2 {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      MEMBER_GUESTS = "MEMBER_GUESTS",
      WAITLIST_COUNT = "WAITLIST_COUNT"
  }
  interface ListGuestListPreviewsResponse {
      /** List of guests. */
      previews?: GuestListPreview[];
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadataV2$7;
  }
  interface GuestListPreview {
      eventId?: string;
      latestAttendingMembers?: EventGuests;
      attending?: GuestCount;
      inWaitlist?: GuestCount;
      notAttending?: GuestCount;
  }
  interface EventGuests {
      guests?: EventGuest[];
  }
  interface GuestCount {
      /** Total guest count. For Rsvp Event every RSVP guest and additional guest count, for Ticketed Event count of TICKET_HOLDER */
      totalEventGuests?: number;
      /** EventGuest count (RSVP, TICKET_HOLDER, BUYER); */
      count?: number;
  }
  interface UpdateGuestRequest {
      /** Updated guest */
      guest?: EventGuest;
      /** Guest revision */
      revision?: string | null;
  }
  interface DomainEvent$4 extends DomainEventBodyOneOf$4 {
      createdEvent?: EntityCreatedEvent$4;
      updatedEvent?: EntityUpdatedEvent$4;
      deletedEvent?: EntityDeletedEvent$4;
      actionEvent?: ActionEvent$4;
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
  interface DomainEventBodyOneOf$4 {
      createdEvent?: EntityCreatedEvent$4;
      updatedEvent?: EntityUpdatedEvent$4;
      deletedEvent?: EntityDeletedEvent$4;
      actionEvent?: ActionEvent$4;
  }
  interface EntityCreatedEvent$4 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$4 {
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
  interface EntityDeletedEvent$4 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$4 {
      bodyAsJson?: string;
  }
  interface MessageEnvelope$8 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$8;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$8 extends IdentificationDataIdOneOf$8 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$8;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$8 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$8 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Creates a query to retrieve a list of guests.
   *
   *
   * The `queryGuests()` function builds a query to retrieve a list of guests and returns a [GuestsQueryBuilder](https://www.wix.com/velo/reference/wix-events-v2/guests/guestsquerybuilder) object.
   *
   * The returned object contains the query definition which is typically used to run the query using the `find()` function.
   *
   * You can refine the query by chaining `GuestsQueryBuilder` functions onto the query. `GuestsQueryBuilder` functions enable you to sort, filter, and control the results that `queryGuests.find()` returns.
   *
   * The query runs with the following `GuestsQueryBuilder` defaults that you can override:
   *
   * - [`skip(0)`](https://www.wix.com/velo/reference/wix-events-v2/guests/guestsquerybuilder/skipto)
   * - [`limit(50)`](https://www.wix.com/velo/reference/wix-events-v2/guests/guestsquerybuilder/limit)
   * - [`descending("_createdDate")`](https://www.wix.com/velo/reference/wix-events-v2/guests/guestsquerybuilder/descending)
   *
   * The functions that are chained to `queryGuests()` are applied in the order they are called. For example, if you apply `ascending ('_createdDate')` and then `descending ('_updatedDate')`, the results are sorted first by the created date and then, if there are multiple results with the same date, the items are sorted by the updated date.
   *
   * The table below shows which `GuestsQueryBuilder` functions are supported for `queryGuests()`. You can only use one filter function for each property. Only the first filter will work if a property is used in more than one filter.
   * @public
   * @adminMethod
   */
  function queryGuests(options?: QueryEventGuestsOptions): GuestsQueryBuilder;
  interface QueryEventGuestsOptions {
      /**
       * Predefined sets of fields to return.
       * - `GUEST_DETAILS`: Returns `guestDetails` and `tickets`.
       */
      fields?: RequestedFieldsEnumRequestedFields[] | undefined;
  }
  interface QueryCursorResult$4 {
      cursors: Cursors$7;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface GuestsQueryResult extends QueryCursorResult$4 {
      items: EventGuest[];
      query: GuestsQueryBuilder;
      next: () => Promise<GuestsQueryResult>;
      prev: () => Promise<GuestsQueryResult>;
  }
  interface GuestsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: '_id' | 'eventId' | 'rsvpId' | 'orderNumber' | 'ticketNumber' | 'contactId' | 'guestDetails.checkedIn' | 'attendanceStatus' | 'secondaryLanguageCode' | '_createdDate' | '_updatedDate' | 'attendanceStatusUpdatedDate' | 'memberId' | 'guestType', value: any) => GuestsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: '_id' | 'eventId' | 'rsvpId' | 'orderNumber' | 'ticketNumber' | 'contactId' | 'guestDetails.checkedIn' | 'attendanceStatus' | 'secondaryLanguageCode' | '_createdDate' | '_updatedDate' | 'attendanceStatusUpdatedDate' | 'memberId' | 'guestType', value: any) => GuestsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ge: (propertyName: '_createdDate' | '_updatedDate' | 'attendanceStatusUpdatedDate', value: any) => GuestsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      gt: (propertyName: '_createdDate' | '_updatedDate' | 'attendanceStatusUpdatedDate', value: any) => GuestsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      le: (propertyName: '_createdDate' | '_updatedDate' | 'attendanceStatusUpdatedDate', value: any) => GuestsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      lt: (propertyName: '_createdDate' | '_updatedDate' | 'attendanceStatusUpdatedDate', value: any) => GuestsQueryBuilder;
      in: (propertyName: '_id' | 'eventId' | 'rsvpId' | 'orderNumber' | 'ticketNumber' | 'contactId' | 'attendanceStatus' | 'secondaryLanguageCode' | '_createdDate' | '_updatedDate' | 'attendanceStatusUpdatedDate' | 'memberId' | 'guestType', value: any) => GuestsQueryBuilder;
      exists: (propertyName: '_id' | 'eventId' | 'rsvpId' | 'orderNumber' | 'ticketNumber' | 'tickets' | 'contactId' | 'guestDetails.checkedIn' | 'secondaryLanguageCode' | '_createdDate' | '_updatedDate' | 'attendanceStatusUpdatedDate' | 'memberId', value: boolean) => GuestsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'_createdDate' | '_updatedDate' | 'attendanceStatusUpdatedDate'>) => GuestsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'_createdDate' | '_updatedDate' | 'attendanceStatusUpdatedDate'>) => GuestsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => GuestsQueryBuilder;
      /** @param cursor - A pointer to specific record */
      skipTo: (cursor: string) => GuestsQueryBuilder;
      find: () => Promise<GuestsQueryResult>;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField eventIds
   * @adminMethod
   */
  function listGuestListPreviews(eventIds: string[], options?: ListGuestListPreviewsOptions): Promise<ListGuestListPreviewsResponse>;
  interface ListGuestListPreviewsOptions {
      cursorPaging?: CursorPaging$4;
      fields?: RequestedFields$2[];
  }
  
  type eventsGuestsV1Guest_universal_d_EventGuest = EventGuest;
  type eventsGuestsV1Guest_universal_d_TicketGuestDetails = TicketGuestDetails;
  type eventsGuestsV1Guest_universal_d_AttendanceStatus = AttendanceStatus;
  const eventsGuestsV1Guest_universal_d_AttendanceStatus: typeof AttendanceStatus;
  type eventsGuestsV1Guest_universal_d_GuestType = GuestType;
  const eventsGuestsV1Guest_universal_d_GuestType: typeof GuestType;
  type eventsGuestsV1Guest_universal_d_GuestCountUpdated = GuestCountUpdated;
  type eventsGuestsV1Guest_universal_d_GuestCountUpdate = GuestCountUpdate;
  type eventsGuestsV1Guest_universal_d_QueryEventGuestsRequest = QueryEventGuestsRequest;
  type eventsGuestsV1Guest_universal_d_RequestedFieldsEnumRequestedFields = RequestedFieldsEnumRequestedFields;
  const eventsGuestsV1Guest_universal_d_RequestedFieldsEnumRequestedFields: typeof RequestedFieldsEnumRequestedFields;
  type eventsGuestsV1Guest_universal_d_QueryEventGuestsResponse = QueryEventGuestsResponse;
  type eventsGuestsV1Guest_universal_d_StreamEventGuestsRequest = StreamEventGuestsRequest;
  type eventsGuestsV1Guest_universal_d_TaskContext = TaskContext;
  type eventsGuestsV1Guest_universal_d_NotifyActionType = NotifyActionType;
  const eventsGuestsV1Guest_universal_d_NotifyActionType: typeof NotifyActionType;
  type eventsGuestsV1Guest_universal_d_NotifyGuestAction = NotifyGuestAction;
  type eventsGuestsV1Guest_universal_d_SecondaryLanguagesRequest = SecondaryLanguagesRequest;
  type eventsGuestsV1Guest_universal_d_SecondaryLanguagesResponse = SecondaryLanguagesResponse;
  type eventsGuestsV1Guest_universal_d_Language = Language;
  type eventsGuestsV1Guest_universal_d_Task = Task;
  type eventsGuestsV1Guest_universal_d_TaskKey = TaskKey;
  type eventsGuestsV1Guest_universal_d_DeleteTicketGuestRequest = DeleteTicketGuestRequest;
  type eventsGuestsV1Guest_universal_d_ListGuestListPreviewsRequest = ListGuestListPreviewsRequest;
  type eventsGuestsV1Guest_universal_d_ListGuestListPreviewsResponse = ListGuestListPreviewsResponse;
  type eventsGuestsV1Guest_universal_d_GuestListPreview = GuestListPreview;
  type eventsGuestsV1Guest_universal_d_EventGuests = EventGuests;
  type eventsGuestsV1Guest_universal_d_GuestCount = GuestCount;
  type eventsGuestsV1Guest_universal_d_UpdateGuestRequest = UpdateGuestRequest;
  const eventsGuestsV1Guest_universal_d_queryGuests: typeof queryGuests;
  type eventsGuestsV1Guest_universal_d_QueryEventGuestsOptions = QueryEventGuestsOptions;
  type eventsGuestsV1Guest_universal_d_GuestsQueryResult = GuestsQueryResult;
  type eventsGuestsV1Guest_universal_d_GuestsQueryBuilder = GuestsQueryBuilder;
  const eventsGuestsV1Guest_universal_d_listGuestListPreviews: typeof listGuestListPreviews;
  type eventsGuestsV1Guest_universal_d_ListGuestListPreviewsOptions = ListGuestListPreviewsOptions;
  namespace eventsGuestsV1Guest_universal_d {
    export {
      eventsGuestsV1Guest_universal_d_EventGuest as EventGuest,
      TicketDetails$2 as TicketDetails,
      eventsGuestsV1Guest_universal_d_TicketGuestDetails as TicketGuestDetails,
      OnlineConferencingLogin$3 as OnlineConferencingLogin,
      GuestDetails$2 as GuestDetails,
      FormResponse$3 as FormResponse,
      InputValue$3 as InputValue,
      FormattedAddress$3 as FormattedAddress,
      Address$7 as Address,
      AddressStreetOneOf$7 as AddressStreetOneOf,
      StreetAddress$7 as StreetAddress,
      AddressLocation$7 as AddressLocation,
      Subdivision$7 as Subdivision,
      SubdivisionType$7 as SubdivisionType,
      eventsGuestsV1Guest_universal_d_AttendanceStatus as AttendanceStatus,
      eventsGuestsV1Guest_universal_d_GuestType as GuestType,
      eventsGuestsV1Guest_universal_d_GuestCountUpdated as GuestCountUpdated,
      eventsGuestsV1Guest_universal_d_GuestCountUpdate as GuestCountUpdate,
      eventsGuestsV1Guest_universal_d_QueryEventGuestsRequest as QueryEventGuestsRequest,
      QueryV2$7 as QueryV2,
      QueryV2PagingMethodOneOf$7 as QueryV2PagingMethodOneOf,
      Sorting$7 as Sorting,
      SortOrder$7 as SortOrder,
      Paging$7 as Paging,
      CursorPaging$4 as CursorPaging,
      eventsGuestsV1Guest_universal_d_RequestedFieldsEnumRequestedFields as RequestedFieldsEnumRequestedFields,
      eventsGuestsV1Guest_universal_d_QueryEventGuestsResponse as QueryEventGuestsResponse,
      PagingMetadataV2$7 as PagingMetadataV2,
      Cursors$7 as Cursors,
      eventsGuestsV1Guest_universal_d_StreamEventGuestsRequest as StreamEventGuestsRequest,
      eventsGuestsV1Guest_universal_d_TaskContext as TaskContext,
      eventsGuestsV1Guest_universal_d_NotifyActionType as NotifyActionType,
      Empty$3 as Empty,
      eventsGuestsV1Guest_universal_d_NotifyGuestAction as NotifyGuestAction,
      eventsGuestsV1Guest_universal_d_SecondaryLanguagesRequest as SecondaryLanguagesRequest,
      eventsGuestsV1Guest_universal_d_SecondaryLanguagesResponse as SecondaryLanguagesResponse,
      eventsGuestsV1Guest_universal_d_Language as Language,
      RsvpCreated$1 as RsvpCreated,
      RsvpStatus$1 as RsvpStatus,
      Guest$2 as Guest,
      CheckIn$3 as CheckIn,
      RsvpUpdated$1 as RsvpUpdated,
      RsvpDeleted$1 as RsvpDeleted,
      OrderConfirmed$1 as OrderConfirmed,
      OrderStatus$2 as OrderStatus,
      Ticket$2 as Ticket,
      Money$6 as Money,
      Invoice$1 as Invoice,
      Item$1 as Item,
      Discount$1 as Discount,
      DiscountItem$1 as DiscountItem,
      DiscountItemDiscountOneOf$1 as DiscountItemDiscountOneOf,
      CouponDiscount$1 as CouponDiscount,
      PaidPlanDiscount$1 as PaidPlanDiscount,
      PaidPlanDiscountDiscountOneOf$1 as PaidPlanDiscountDiscountOneOf,
      PercentDiscount$1 as PercentDiscount,
      Tax$1 as Tax,
      TaxType$4 as TaxType,
      Fee$1 as Fee,
      FeeName$1 as FeeName,
      FeeType$2 as FeeType,
      OrderUpdated$2 as OrderUpdated,
      OrderDeleted$1 as OrderDeleted,
      OrderType$1 as OrderType,
      EventDeleted$2 as EventDeleted,
      eventsGuestsV1Guest_universal_d_Task as Task,
      eventsGuestsV1Guest_universal_d_TaskKey as TaskKey,
      eventsGuestsV1Guest_universal_d_DeleteTicketGuestRequest as DeleteTicketGuestRequest,
      eventsGuestsV1Guest_universal_d_ListGuestListPreviewsRequest as ListGuestListPreviewsRequest,
      RequestedFields$2 as RequestedFields,
      eventsGuestsV1Guest_universal_d_ListGuestListPreviewsResponse as ListGuestListPreviewsResponse,
      eventsGuestsV1Guest_universal_d_GuestListPreview as GuestListPreview,
      eventsGuestsV1Guest_universal_d_EventGuests as EventGuests,
      eventsGuestsV1Guest_universal_d_GuestCount as GuestCount,
      eventsGuestsV1Guest_universal_d_UpdateGuestRequest as UpdateGuestRequest,
      DomainEvent$4 as DomainEvent,
      DomainEventBodyOneOf$4 as DomainEventBodyOneOf,
      EntityCreatedEvent$4 as EntityCreatedEvent,
      EntityUpdatedEvent$4 as EntityUpdatedEvent,
      EntityDeletedEvent$4 as EntityDeletedEvent,
      ActionEvent$4 as ActionEvent,
      MessageEnvelope$8 as MessageEnvelope,
      IdentificationData$8 as IdentificationData,
      IdentificationDataIdOneOf$8 as IdentificationDataIdOneOf,
      WebhookIdentityType$8 as WebhookIdentityType,
      eventsGuestsV1Guest_universal_d_queryGuests as queryGuests,
      eventsGuestsV1Guest_universal_d_QueryEventGuestsOptions as QueryEventGuestsOptions,
      eventsGuestsV1Guest_universal_d_GuestsQueryResult as GuestsQueryResult,
      eventsGuestsV1Guest_universal_d_GuestsQueryBuilder as GuestsQueryBuilder,
      eventsGuestsV1Guest_universal_d_listGuestListPreviews as listGuestListPreviews,
      eventsGuestsV1Guest_universal_d_ListGuestListPreviewsOptions as ListGuestListPreviewsOptions,
    };
  }
  
  /** Schedule item describes the schedule within an event. Each event may contain multiple schedule items. */
  interface ScheduleItem$1 {
      /**
       * Schedule item ID.
       * @readonly
       */
      _id?: string;
      /** Whether a schedule item is hidden from guests. */
      hidden?: boolean;
      /** Schedule item name. */
      name?: string;
      /** Time slot of a schedule item. */
      timeSlot?: TimeInterval$1;
      /** Rich text schedule item description. */
      description?: string;
      /** Stage or room name in which the session takes place. */
      stageName?: string;
      /** Schedule item tags. They're used to organize the items to a theme. */
      tags?: string[];
      /**
       * Schedule item status. Possible values:
       * - `SCHEDULED`: An item is scheduled.
       * - `CANCELED`: An item is canceled.
       */
      status?: ScheduleStatus$1;
      /**
       * Date and time when the schedule item was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time when the schedule item was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Event ID to which the schedule belongs.
       * @readonly
       */
      eventId?: string;
      /**
       * Whether the schedule item is draft.
       * @readonly
       */
      draft?: boolean;
  }
  /** Time interval on the timeline between two points in time. */
  interface TimeInterval$1 {
      /** Start of the interval. Inclusive. */
      start?: Date;
      /** End of the interval. Non-inclusive. */
      end?: Date;
      /**
       * Time zone ID in the [TZ database](https://www.iana.org/time-zones) format. For example, `EST`, `America/Los_Angeles`.
       * Default: `Etc/UTC`.
       */
      timeZoneId?: string | null;
  }
  enum ScheduleStatus$1 {
      /** Item is scheduled for a future date */
      SCHEDULED = "SCHEDULED",
      /** Item was canceled */
      CANCELED = "CANCELED"
  }
  interface ListScheduleItemsRequest$1 {
      /** Event ID to which the schedule belongs. */
      eventId?: string[];
      /**
       * Schedule item state filter. Possible values:
       * - `PUBLISHED`: The schedule item is published.
       * - `DRAFT`: The schedule item is in the draft. You need the "WIX_EVENTS.MANAGE_AGENDA" permissions to change this state.
       * - `VISIBLE`: The schedule item is visible to guests.
       * - `HIDDEN`: The schedule item is hidden from guests. You need the "WIX_EVENTS.MANAGE_AGENDA" permissions to change this state.
       * Default: Filters by the `PUBLISHED` and `VISIBLE` states.
       */
      state?: StateFilter$1[];
      /** Filters schedule items starting on or after specified point in time. Inclusive. */
      startingFrom?: Date;
      /** Filters schedule items starting before specified point in time. Non-inclusive. */
      startingBefore?: Date;
      /**
       * Deprecated, use `paging`.
       * Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      offset?: number;
      /**
       * Deprecated, use `paging`.
       * Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      limit?: number;
      /**
       * Filter facets.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
       */
      facet?: string[];
      /** Schedule item ID. */
      itemId?: string[];
      /** Schedule item tags. They're used to organize the items to a theme. */
      tag?: string[];
      /** Stage or room name in which the session takes place. */
      stageName?: string[];
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$6;
  }
  enum StateFilter$1 {
      /** Schedule item is published. */
      PUBLISHED = "PUBLISHED",
      /** Opposite of `PUBLISHED`. Requires `WIX_EVENTS.MANAGE_AGENDA` permission. */
      DRAFT = "DRAFT",
      /** Schedule item is visible to the public. */
      VISIBLE = "VISIBLE",
      /** Opposite of `VISIBLE`. Requires `WIX_EVENTS.MANAGE_AGENDA` permission. */
      HIDDEN = "HIDDEN"
  }
  interface Paging$6 {
      /** Number of items to load per page. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListScheduleItemsResponse$1 {
      /**
       * Deprecated, use `paging_metadata.total`.
       * Total schedule items matching the given filters.
       * @readonly
       */
      total?: number;
      /**
       * Deprecated.
       * Limit.
       */
      limit?: number;
      /**
       * Deprecated, use `paging_metadata.offset`.
       * Offset.
       */
      offset?: number;
      /** Schedule items. */
      items?: ScheduleItem$1[];
      /**
       * Facets.
       * @readonly
       */
      facets?: Record<string, FacetCounts$7>;
      /**
       * Whether there are draft changes which have not been published yet.
       * Returned only when filtering by single `event_id` with `WIX_EVENTS.MANAGE_AGENDA` permission.
       * @readonly
       */
      draftNotPublished?: boolean | null;
      /** Paging metadata. */
      pagingMetadata?: PagingMetadataV2$6;
  }
  interface FacetCounts$7 {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface PagingMetadataV2$6 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$6;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$6 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryScheduleItemsRequest$1 {
      query?: QueryV2$6;
  }
  interface QueryV2$6 extends QueryV2PagingMethodOneOf$6 {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$6;
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: Sorting$6[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$6 {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$6;
  }
  interface Sorting$6 {
      /** Name of the field to sort by */
      fieldName?: string;
      /** Sort order (ASC/DESC). Defaults to ASC */
      order?: SortOrder$6;
  }
  enum SortOrder$6 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryScheduleItemsResponse$1 {
      pagingMetadata?: PagingMetadataV2$6;
      /** Schedule items. */
      items?: ScheduleItem$1[];
  }
  interface GetScheduleItemRequest$1 {
      /** Event ID to which the schedule belongs. */
      eventId?: string;
      /** Schedule item ID. */
      itemId: string;
      /** Whether to include draft schedules in the response. */
      includeDraft?: boolean;
  }
  interface GetScheduleItemResponse$1 {
      /** Schedule item. */
      item?: ScheduleItem$1;
      /** Draft of the Schedule item. */
      draft?: ScheduleItem$1;
  }
  interface AddScheduleItemRequest$1 {
      /** Event ID to which the schedule belongs. */
      eventId: string;
      /** Schedule item. */
      item?: ScheduleItemData$1;
  }
  /** Schedule item describes the schedule within an event. Each event may contain multiple schedule items. */
  interface ScheduleItemData$1 {
      /** Whether a schedule item is hidden from guests. */
      hidden?: boolean;
      /** Schedule item name. */
      name?: string;
      /** Time slot of a schedule item. */
      timeSlot?: TimeInterval$1;
      /** Rich text schedule item description. */
      description?: string;
      /** Stage or room name in which the session takes place. */
      stageName?: string;
      /** Schedule item tags. They're used to organize the items to a theme. */
      tags?: string[];
      /**
       * Schedule item status. Possible values:
       * - `SCHEDULED`: An item is scheduled.
       * - `CANCELED`: An item is canceled.
       */
      status?: ScheduleStatus$1;
  }
  interface AddScheduleItemResponse$1 {
      /** Schedule item. */
      item?: ScheduleItem$1;
  }
  interface UpdateScheduleItemRequest$1 {
      /** Event ID to which the schedule belongs. */
      eventId: string;
      /** Schedule item ID. */
      itemId: string;
      /** Schedule item. */
      item?: ScheduleItemData$1;
      /**
       * Set of field paths to update.
       * When fields are empty, request is interpreted as full update.
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
  }
  interface UpdateScheduleItemResponse$1 {
      /** Schedule item. */
      item?: ScheduleItem$1;
  }
  interface DeleteScheduleItemRequest$1 {
      /** Event ID to which the schedule belongs. */
      eventId: string;
      /** Schedule items to delete. */
      itemIds?: string[];
  }
  interface DeleteScheduleItemResponse$1 {
  }
  interface DiscardDraftRequest$2 {
      /** Event ID to which the schedule belongs. */
      eventId: string;
  }
  interface DiscardDraftResponse$2 {
  }
  interface PublishDraftRequest$2 {
      /** Event ID to which the schedule belongs. */
      eventId: string;
  }
  interface PublishDraftResponse$2 {
  }
  interface RescheduleDraftRequest$1 {
      /** Event ID to which the schedule belongs. */
      eventId: string;
      /**
       * Time zone ID in the [TZ database](https://www.iana.org/time-zones) format. For example, `EST`, `America/Los_Angeles`.
       * Default: `Etc/UTC`.
       */
      timeZoneId: string;
      /** Offset added or subtracted from the start and end times of schedule items. */
      timeSlotOffset?: GoogleProtoDuration$1;
  }
  interface RescheduleDraftResponse$1 {
  }
  interface ListBookmarksRequest$1 {
      /** Event ID to which the schedule belongs. */
      eventId: string;
  }
  interface ListBookmarksResponse$1 {
      /** Schedule items. */
      items?: ScheduleItem$1[];
  }
  interface CreateBookmarkRequest$1 {
      /** Event ID to which the schedule belongs. */
      eventId: string;
      /** Schedule item ID. */
      itemId: string;
  }
  interface CreateBookmarkResponse$1 {
  }
  interface DeleteBookmarkRequest$1 {
      /** Event ID to which the schedule belongs. */
      eventId: string;
      /** Schedule item ID. */
      itemId: string;
  }
  interface DeleteBookmarkResponse$1 {
  }
  type GoogleProtoDuration$1 = any;
  /**
   * Retrieves a list of bookmarked schedule items for a currently logged-in member.
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which the schedule belongs.
   */
  function listBookmarks(eventId: string): Promise<ListBookmarksResponse$1>;
  /**
   * Bookmarks a schedule item for a currently logged-in member.
   * @param itemId - Schedule item ID.
   * @public
   * @requiredField eventId
   * @requiredField itemId
   * @param eventId - Event ID to which the schedule belongs.
   */
  function createBookmark(itemId: string, eventId: string): Promise<void>;
  /**
   * Removes a schedule item bookmark for a currently logged-in member.
   * @param itemId - Schedule item ID.
   * @public
   * @requiredField eventId
   * @requiredField itemId
   * @param eventId - Event ID to which the schedule belongs.
   */
  function deleteBookmark(itemId: string, eventId: string): Promise<void>;
  
  const eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_listBookmarks: typeof listBookmarks;
  const eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_createBookmark: typeof createBookmark;
  const eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_deleteBookmark: typeof deleteBookmark;
  namespace eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d {
    export {
      ScheduleItem$1 as ScheduleItem,
      TimeInterval$1 as TimeInterval,
      ScheduleStatus$1 as ScheduleStatus,
      ListScheduleItemsRequest$1 as ListScheduleItemsRequest,
      StateFilter$1 as StateFilter,
      Paging$6 as Paging,
      ListScheduleItemsResponse$1 as ListScheduleItemsResponse,
      FacetCounts$7 as FacetCounts,
      PagingMetadataV2$6 as PagingMetadataV2,
      Cursors$6 as Cursors,
      QueryScheduleItemsRequest$1 as QueryScheduleItemsRequest,
      QueryV2$6 as QueryV2,
      QueryV2PagingMethodOneOf$6 as QueryV2PagingMethodOneOf,
      Sorting$6 as Sorting,
      SortOrder$6 as SortOrder,
      QueryScheduleItemsResponse$1 as QueryScheduleItemsResponse,
      GetScheduleItemRequest$1 as GetScheduleItemRequest,
      GetScheduleItemResponse$1 as GetScheduleItemResponse,
      AddScheduleItemRequest$1 as AddScheduleItemRequest,
      ScheduleItemData$1 as ScheduleItemData,
      AddScheduleItemResponse$1 as AddScheduleItemResponse,
      UpdateScheduleItemRequest$1 as UpdateScheduleItemRequest,
      UpdateScheduleItemResponse$1 as UpdateScheduleItemResponse,
      DeleteScheduleItemRequest$1 as DeleteScheduleItemRequest,
      DeleteScheduleItemResponse$1 as DeleteScheduleItemResponse,
      DiscardDraftRequest$2 as DiscardDraftRequest,
      DiscardDraftResponse$2 as DiscardDraftResponse,
      PublishDraftRequest$2 as PublishDraftRequest,
      PublishDraftResponse$2 as PublishDraftResponse,
      RescheduleDraftRequest$1 as RescheduleDraftRequest,
      RescheduleDraftResponse$1 as RescheduleDraftResponse,
      ListBookmarksRequest$1 as ListBookmarksRequest,
      ListBookmarksResponse$1 as ListBookmarksResponse,
      CreateBookmarkRequest$1 as CreateBookmarkRequest,
      CreateBookmarkResponse$1 as CreateBookmarkResponse,
      DeleteBookmarkRequest$1 as DeleteBookmarkRequest,
      DeleteBookmarkResponse$1 as DeleteBookmarkResponse,
      eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_listBookmarks as listBookmarks,
      eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_createBookmark as createBookmark,
      eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_deleteBookmark as deleteBookmark,
    };
  }
  
  /** Schedule item describes the schedule within an event. Each event may contain multiple schedule items. */
  interface ScheduleItem {
      /**
       * Schedule item ID.
       * @readonly
       */
      _id?: string;
      /** Whether a schedule item is hidden from guests. */
      hidden?: boolean;
      /** Schedule item name. */
      name?: string;
      /** Time slot of a schedule item. */
      timeSlot?: TimeInterval;
      /** Rich text schedule item description. */
      description?: string;
      /** Stage or room name in which the session takes place. */
      stageName?: string;
      /** Schedule item tags. They're used to organize the items to a theme. */
      tags?: string[];
      /**
       * Schedule item status. Possible values:
       * - `SCHEDULED`: An item is scheduled.
       * - `CANCELED`: An item is canceled.
       */
      status?: ScheduleStatus;
      /**
       * Date and time when the schedule item was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time when the schedule item was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Event ID to which the schedule belongs.
       * @readonly
       */
      eventId?: string;
      /**
       * Whether the schedule item is draft.
       * @readonly
       */
      draft?: boolean;
  }
  /** Time interval on the timeline between two points in time. */
  interface TimeInterval {
      /** Start of the interval. Inclusive. */
      start?: Date;
      /** End of the interval. Non-inclusive. */
      end?: Date;
      /**
       * Time zone ID in the [TZ database](https://www.iana.org/time-zones) format. For example, `EST`, `America/Los_Angeles`.
       * Default: `Etc/UTC`.
       */
      timeZoneId?: string | null;
  }
  enum ScheduleStatus {
      /** Item is scheduled for a future date */
      SCHEDULED = "SCHEDULED",
      /** Item was canceled */
      CANCELED = "CANCELED"
  }
  interface ListScheduleItemsRequest {
      /** Event ID to which the schedule belongs. */
      eventId?: string[];
      /**
       * Schedule item state filter. Possible values:
       * - `PUBLISHED`: The schedule item is published.
       * - `DRAFT`: The schedule item is in the draft. You need the "WIX_EVENTS.MANAGE_AGENDA" permissions to change this state.
       * - `VISIBLE`: The schedule item is visible to guests.
       * - `HIDDEN`: The schedule item is hidden from guests. You need the "WIX_EVENTS.MANAGE_AGENDA" permissions to change this state.
       * Default: Filters by the `PUBLISHED` and `VISIBLE` states.
       */
      state?: StateFilter[];
      /** Filters schedule items starting on or after specified point in time. Inclusive. */
      startingFrom?: Date;
      /** Filters schedule items starting before specified point in time. Non-inclusive. */
      startingBefore?: Date;
      /**
       * Deprecated, use `paging`.
       * Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      offset?: number;
      /**
       * Deprecated, use `paging`.
       * Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      limit?: number;
      /**
       * Filter facets.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
       */
      facet?: string[];
      /** Schedule item ID. */
      itemId?: string[];
      /** Schedule item tags. They're used to organize the items to a theme. */
      tag?: string[];
      /** Stage or room name in which the session takes place. */
      stageName?: string[];
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$5;
  }
  enum StateFilter {
      /** Schedule item is published. */
      PUBLISHED = "PUBLISHED",
      /** Opposite of `PUBLISHED`. Requires `WIX_EVENTS.MANAGE_AGENDA` permission. */
      DRAFT = "DRAFT",
      /** Schedule item is visible to the public. */
      VISIBLE = "VISIBLE",
      /** Opposite of `VISIBLE`. Requires `WIX_EVENTS.MANAGE_AGENDA` permission. */
      HIDDEN = "HIDDEN"
  }
  interface Paging$5 {
      /** Number of items to load per page. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListScheduleItemsResponse {
      /**
       * Deprecated, use `paging_metadata.total`.
       * Total schedule items matching the given filters.
       * @readonly
       */
      total?: number;
      /**
       * Deprecated.
       * Limit.
       */
      limit?: number;
      /**
       * Deprecated, use `paging_metadata.offset`.
       * Offset.
       */
      offset?: number;
      /** Schedule items. */
      items?: ScheduleItem[];
      /**
       * Facets.
       * @readonly
       */
      facets?: Record<string, FacetCounts$6>;
      /**
       * Whether there are draft changes which have not been published yet.
       * Returned only when filtering by single `event_id` with `WIX_EVENTS.MANAGE_AGENDA` permission.
       * @readonly
       */
      draftNotPublished?: boolean | null;
      /** Paging metadata. */
      pagingMetadata?: PagingMetadataV2$5;
  }
  interface FacetCounts$6 {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface PagingMetadataV2$5 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$5;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$5 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryScheduleItemsRequest {
      query?: QueryV2$5;
  }
  interface QueryV2$5 extends QueryV2PagingMethodOneOf$5 {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$5;
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: Sorting$5[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$5 {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$5;
  }
  interface Sorting$5 {
      /** Name of the field to sort by */
      fieldName?: string;
      /** Sort order (ASC/DESC). Defaults to ASC */
      order?: SortOrder$5;
  }
  enum SortOrder$5 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryScheduleItemsResponse {
      pagingMetadata?: PagingMetadataV2$5;
      /** Schedule items. */
      items?: ScheduleItem[];
  }
  interface GetScheduleItemRequest {
      /** Event ID to which the schedule belongs. */
      eventId?: string;
      /** Schedule item ID. */
      itemId: string;
      /** Whether to include draft schedules in the response. */
      includeDraft?: boolean;
  }
  interface GetScheduleItemResponse {
      /** Schedule item. */
      item?: ScheduleItem;
      /** Draft of the Schedule item. */
      draft?: ScheduleItem;
  }
  interface AddScheduleItemRequest {
      /** Event ID to which the schedule belongs. */
      eventId: string;
      /** Schedule item. */
      item?: ScheduleItemData;
  }
  /** Schedule item describes the schedule within an event. Each event may contain multiple schedule items. */
  interface ScheduleItemData {
      /** Whether a schedule item is hidden from guests. */
      hidden?: boolean;
      /** Schedule item name. */
      name?: string;
      /** Time slot of a schedule item. */
      timeSlot?: TimeInterval;
      /** Rich text schedule item description. */
      description?: string;
      /** Stage or room name in which the session takes place. */
      stageName?: string;
      /** Schedule item tags. They're used to organize the items to a theme. */
      tags?: string[];
      /**
       * Schedule item status. Possible values:
       * - `SCHEDULED`: An item is scheduled.
       * - `CANCELED`: An item is canceled.
       */
      status?: ScheduleStatus;
  }
  interface AddScheduleItemResponse {
      /** Schedule item. */
      item?: ScheduleItem;
  }
  interface UpdateScheduleItemRequest {
      /** Event ID to which the schedule belongs. */
      eventId: string;
      /** Schedule item ID. */
      itemId: string;
      /** Schedule item. */
      item?: ScheduleItemData;
      /**
       * Set of field paths to update.
       * When fields are empty, request is interpreted as full update.
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
  }
  interface UpdateScheduleItemResponse {
      /** Schedule item. */
      item?: ScheduleItem;
  }
  interface DeleteScheduleItemRequest {
      /** Event ID to which the schedule belongs. */
      eventId: string;
      /** Schedule items to delete. */
      itemIds?: string[];
  }
  interface DeleteScheduleItemResponse {
  }
  interface DiscardDraftRequest$1 {
      /** Event ID to which the schedule belongs. */
      eventId: string;
  }
  interface DiscardDraftResponse$1 {
  }
  interface PublishDraftRequest$1 {
      /** Event ID to which the schedule belongs. */
      eventId: string;
  }
  interface PublishDraftResponse$1 {
  }
  interface RescheduleDraftRequest {
      /** Event ID to which the schedule belongs. */
      eventId: string;
      /**
       * Time zone ID in the [TZ database](https://www.iana.org/time-zones) format. For example, `EST`, `America/Los_Angeles`.
       * Default: `Etc/UTC`.
       */
      timeZoneId: string;
      /** Offset added or subtracted from the start and end times of schedule items. */
      timeSlotOffset?: GoogleProtoDuration;
  }
  interface RescheduleDraftResponse {
  }
  interface ListBookmarksRequest {
      /** Event ID to which the schedule belongs. */
      eventId: string;
  }
  interface ListBookmarksResponse {
      /** Schedule items. */
      items?: ScheduleItem[];
  }
  interface CreateBookmarkRequest {
      /** Event ID to which the schedule belongs. */
      eventId: string;
      /** Schedule item ID. */
      itemId: string;
  }
  interface CreateBookmarkResponse {
  }
  interface DeleteBookmarkRequest {
      /** Event ID to which the schedule belongs. */
      eventId: string;
      /** Schedule item ID. */
      itemId: string;
  }
  interface DeleteBookmarkResponse {
  }
  type GoogleProtoDuration = any;
  /**
   * Retrieves a list of up to 100 schedule items
   * @public
   * @param options - Optional fields.
   */
  function listScheduleItems(options?: ListScheduleItemsOptions): Promise<ListScheduleItemsResponse>;
  interface ListScheduleItemsOptions {
      /** Event ID to which the schedule belongs. */
      eventId?: string[];
      /**
       * Schedule item state filter. Possible values:
       * - `PUBLISHED`: The schedule item is published.
       * - `DRAFT`: The schedule item is in the draft. You need the "WIX_EVENTS.MANAGE_AGENDA" permissions to change this state.
       * - `VISIBLE`: The schedule item is visible to guests.
       * - `HIDDEN`: The schedule item is hidden from guests. You need the "WIX_EVENTS.MANAGE_AGENDA" permissions to change this state.
       * Default: Filters by the `PUBLISHED` and `VISIBLE` states.
       */
      state?: StateFilter[];
      /** Filters schedule items starting on or after specified point in time. Inclusive. */
      startingFrom?: Date;
      /** Filters schedule items starting before specified point in time. Non-inclusive. */
      startingBefore?: Date;
      /**
       * Deprecated, use `paging`.
       * Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      offset?: number;
      /**
       * Deprecated, use `paging`.
       * Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      limit?: number;
      /**
       * Filter facets.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
       */
      facet?: string[];
      /** Schedule item ID. */
      itemId?: string[];
      /** Schedule item tags. They're used to organize the items to a theme. */
      tag?: string[];
      /** Stage or room name in which the session takes place. */
      stageName?: string[];
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$5;
  }
  /**
   * Creates a query to retrieve a list of schedule items.
   *
   * The `queryScheduleItems( )` function builds a query to retrieve a list of schedule items and returns a [`ItemsQueryBuilder`](https://www.wix.com/velo/reference/wix-events-v2/schedule/itemsquerybuilder) object.
   *
   * The returned object contains the query definition, which is typically used to run the query using the [`find()`](https://www.wix.com/velo/reference/wix-events-v2/schedule/itemsquerybuilder/find) function.
   *
   * You can refine the query by chaining `ItemsQueryBuilder` functions onto the query. `ItemsQueryBuilder` functions enable you to sort, filter, and control the results `queryScheduleItems( )` returns.
   *
   * `queryScheduleItems( )` runs with these `ItemsQueryBuilder` defaults, which you can override:
   *
   *  - [`limit(50)`](https://www.wix.com/velo/reference/wix-events-v2/schedule/itemsquerybuilder/limit)
   *  - [`descending("_createdDate")`](https://www.wix.com/velo/reference/wix-events-v2/schedule/itemsquerybuilder/descending)
   *
   * The functions that are chained to `queryScheduleItems( )` are applied in the order they're called. For example, if you apply `ascending('name')` and then `descending('stageName')`, the results are sorted first by the `name`, and then, if there are multiple results with the same `name`, the items are sorted by `stageName`.
   * @public */
  function queryScheduleItems(): ItemsQueryBuilder;
  interface QueryCursorResult$3 {
      cursors: Cursors$5;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ItemsQueryResult extends QueryCursorResult$3 {
      items: ScheduleItem[];
      query: ItemsQueryBuilder;
      next: () => Promise<ItemsQueryResult>;
      prev: () => Promise<ItemsQueryResult>;
  }
  interface ItemsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: '_id' | 'name' | 'description' | 'stageName' | '_createdDate' | '_updatedDate' | 'eventId', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: '_id' | 'name' | 'description' | 'stageName' | '_createdDate' | '_updatedDate' | 'eventId', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ItemsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'_id' | 'name' | 'description' | 'stageName' | '_createdDate' | '_updatedDate' | 'eventId'>) => ItemsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'_id' | 'name' | 'description' | 'stageName' | '_createdDate' | '_updatedDate' | 'eventId'>) => ItemsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => ItemsQueryBuilder;
      /** @param cursor - A pointer to specific record */
      skipTo: (cursor: string) => ItemsQueryBuilder;
      find: () => Promise<ItemsQueryResult>;
  }
  /**
   * Retrieves schedule item by ID.
   * @param itemId - Schedule item ID.
   * @public
   * @requiredField itemId
   * @param options - Optional fields.
   * @returns Schedule item.
   */
  function getScheduleItem(itemId: string, options?: GetScheduleItemOptions): Promise<ScheduleItem>;
  interface GetScheduleItemOptions {
      /** Event ID to which the schedule belongs. */
      eventId?: string;
      /** Whether to include draft schedules in the response. */
      includeDraft?: boolean;
  }
  /**
   * Adds a schedule item to the draft schedule.
   * @public
   * @requiredField eventId
   * @requiredField options.item.name
   * @requiredField options.item.timeSlot
   * @requiredField options.item.timeSlot.end
   * @requiredField options.item.timeSlot.start
   * @param eventId - Event ID to which the schedule belongs.
   * @param options - Optional fields.
   * @adminMethod
   */
  function addScheduleItem(eventId: string, options?: AddScheduleItemOptions): Promise<AddScheduleItemResponse>;
  interface AddScheduleItemOptions {
      /** Schedule item. */
      item?: ScheduleItemData;
  }
  /**
   * Updates a schedule item in a draft schedule.
   * @param itemId - Schedule item ID.
   * @public
   * @requiredField eventId
   * @requiredField itemId
   * @param eventId - Event ID to which the schedule belongs.
   * @param options - Optional fields.
   * @adminMethod
   */
  function updateScheduleItem(itemId: string, eventId: string, options?: UpdateScheduleItemOptions): Promise<UpdateScheduleItemResponse>;
  interface UpdateScheduleItemOptions {
      /** Schedule item. */
      item?: ScheduleItemData;
      /**
       * Set of field paths to update.
       * When fields are empty, request is interpreted as full update.
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
  }
  /**
   * Deletes schedule items from the draft schedule.
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which the schedule belongs.
   * @param options - Optional fields.
   * @adminMethod
   */
  function deleteScheduleItem(eventId: string, options?: DeleteScheduleItemOptions): Promise<void>;
  interface DeleteScheduleItemOptions {
      /** Schedule items to delete. */
      itemIds?: string[];
  }
  /**
   * Clears all changes to the draft schedule.
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which the schedule belongs.
   * @adminMethod
   */
  function discardDraft$1(eventId: string): Promise<void>;
  /**
   * Publishes the draft schedule.
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which the schedule belongs.
   * @adminMethod
   */
  function publishDraft$1(eventId: string): Promise<void>;
  /**
   * Adjusts the time of all draft schedule items at once per event.
   * @public
   * @requiredField eventId
   * @requiredField options.timeZoneId
   * @param eventId - Event ID to which the schedule belongs.
   * @param options - Optional fields.
   * @adminMethod
   */
  function rescheduleDraft(eventId: string, options?: RescheduleDraftOptions): Promise<void>;
  interface RescheduleDraftOptions {
      /**
       * Time zone ID in the [TZ database](https://www.iana.org/time-zones) format. For example, `EST`, `America/Los_Angeles`.
       * Default: `Etc/UTC`.
       */
      timeZoneId: string;
      /** Offset added or subtracted from the start and end times of schedule items. */
      timeSlotOffset?: GoogleProtoDuration;
  }
  
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleItem = ScheduleItem;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_TimeInterval = TimeInterval;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleStatus = ScheduleStatus;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleStatus: typeof ScheduleStatus;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsRequest = ListScheduleItemsRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_StateFilter = StateFilter;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_StateFilter: typeof StateFilter;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsResponse = ListScheduleItemsResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_QueryScheduleItemsRequest = QueryScheduleItemsRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_QueryScheduleItemsResponse = QueryScheduleItemsResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemRequest = GetScheduleItemRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemResponse = GetScheduleItemResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemRequest = AddScheduleItemRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleItemData = ScheduleItemData;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemResponse = AddScheduleItemResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemRequest = UpdateScheduleItemRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemResponse = UpdateScheduleItemResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemRequest = DeleteScheduleItemRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemResponse = DeleteScheduleItemResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftRequest = RescheduleDraftRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftResponse = RescheduleDraftResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ListBookmarksRequest = ListBookmarksRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ListBookmarksResponse = ListBookmarksResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_CreateBookmarkRequest = CreateBookmarkRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_CreateBookmarkResponse = CreateBookmarkResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteBookmarkRequest = DeleteBookmarkRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteBookmarkResponse = DeleteBookmarkResponse;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_listScheduleItems: typeof listScheduleItems;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsOptions = ListScheduleItemsOptions;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_queryScheduleItems: typeof queryScheduleItems;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ItemsQueryResult = ItemsQueryResult;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ItemsQueryBuilder = ItemsQueryBuilder;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_getScheduleItem: typeof getScheduleItem;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemOptions = GetScheduleItemOptions;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_addScheduleItem: typeof addScheduleItem;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemOptions = AddScheduleItemOptions;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_updateScheduleItem: typeof updateScheduleItem;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemOptions = UpdateScheduleItemOptions;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_deleteScheduleItem: typeof deleteScheduleItem;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemOptions = DeleteScheduleItemOptions;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_rescheduleDraft: typeof rescheduleDraft;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftOptions = RescheduleDraftOptions;
  namespace eventsScheduleV1ScheduleItemSchedule_universal_d {
    export {
      eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleItem as ScheduleItem,
      eventsScheduleV1ScheduleItemSchedule_universal_d_TimeInterval as TimeInterval,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleStatus as ScheduleStatus,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsRequest as ListScheduleItemsRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_StateFilter as StateFilter,
      Paging$5 as Paging,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsResponse as ListScheduleItemsResponse,
      FacetCounts$6 as FacetCounts,
      PagingMetadataV2$5 as PagingMetadataV2,
      Cursors$5 as Cursors,
      eventsScheduleV1ScheduleItemSchedule_universal_d_QueryScheduleItemsRequest as QueryScheduleItemsRequest,
      QueryV2$5 as QueryV2,
      QueryV2PagingMethodOneOf$5 as QueryV2PagingMethodOneOf,
      Sorting$5 as Sorting,
      SortOrder$5 as SortOrder,
      eventsScheduleV1ScheduleItemSchedule_universal_d_QueryScheduleItemsResponse as QueryScheduleItemsResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemRequest as GetScheduleItemRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemResponse as GetScheduleItemResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemRequest as AddScheduleItemRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleItemData as ScheduleItemData,
      eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemResponse as AddScheduleItemResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemRequest as UpdateScheduleItemRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemResponse as UpdateScheduleItemResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemRequest as DeleteScheduleItemRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemResponse as DeleteScheduleItemResponse,
      DiscardDraftRequest$1 as DiscardDraftRequest,
      DiscardDraftResponse$1 as DiscardDraftResponse,
      PublishDraftRequest$1 as PublishDraftRequest,
      PublishDraftResponse$1 as PublishDraftResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftRequest as RescheduleDraftRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftResponse as RescheduleDraftResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ListBookmarksRequest as ListBookmarksRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ListBookmarksResponse as ListBookmarksResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_CreateBookmarkRequest as CreateBookmarkRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_CreateBookmarkResponse as CreateBookmarkResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteBookmarkRequest as DeleteBookmarkRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteBookmarkResponse as DeleteBookmarkResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_listScheduleItems as listScheduleItems,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsOptions as ListScheduleItemsOptions,
      eventsScheduleV1ScheduleItemSchedule_universal_d_queryScheduleItems as queryScheduleItems,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ItemsQueryResult as ItemsQueryResult,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ItemsQueryBuilder as ItemsQueryBuilder,
      eventsScheduleV1ScheduleItemSchedule_universal_d_getScheduleItem as getScheduleItem,
      eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemOptions as GetScheduleItemOptions,
      eventsScheduleV1ScheduleItemSchedule_universal_d_addScheduleItem as addScheduleItem,
      eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemOptions as AddScheduleItemOptions,
      eventsScheduleV1ScheduleItemSchedule_universal_d_updateScheduleItem as updateScheduleItem,
      eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemOptions as UpdateScheduleItemOptions,
      eventsScheduleV1ScheduleItemSchedule_universal_d_deleteScheduleItem as deleteScheduleItem,
      eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemOptions as DeleteScheduleItemOptions,
      discardDraft$1 as discardDraft,
      publishDraft$1 as publishDraft,
      eventsScheduleV1ScheduleItemSchedule_universal_d_rescheduleDraft as rescheduleDraft,
      eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftOptions as RescheduleDraftOptions,
    };
  }
  
  interface Category$3 {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category name. */
      name?: string;
      /**
       * Category creation timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Total number of published events assigned to the category. Deleted events are excluded.
       * @internal
       * @readonly
       */
      assignedEventsCount?: number | null;
      /**
       * The total number of draft and published events assigned to the category.
       * @readonly
       */
      counts?: CategoryCounts$3;
      /**
       * Category state. Possible values:
       * - `MANUAL`: Category is created manually by the user.
       * - `AUTO`: Category is created automatically.
       * - `RECURRING_EVENT`: Category is created automatically when publishing recurring events.
       * - `HIDDEN`: Category can't be seen.
       *
       * Default: `MANUAL`.
       *
       * **Note:** The WIX_EVENTS.MANAGE_AUTO_CATEGORIES permission is required to use states other than `MANUAL`.
       */
      states?: State$6[];
      /**
       * Optionally client defined external ID.
       * @internal
       */
      externalId?: string | null;
  }
  interface CategoryCounts$3 {
      /** Total number of published events assigned to the category. Deleted events are excluded. */
      assignedEventsCount?: number | null;
      /** Total number of draft events assigned to the category. */
      assignedDraftEventsCount?: number | null;
  }
  enum State$6 {
      /** Created manually by the user. */
      MANUAL = "MANUAL",
      /** Created automatically. */
      AUTO = "AUTO",
      /** Created when publishing recurring events. */
      RECURRING_EVENT = "RECURRING_EVENT",
      /** Category is hidden. */
      HIDDEN = "HIDDEN",
      /** Category is used to store component events. */
      COMPONENT = "COMPONENT"
  }
  interface CreateCategoryRequest {
      /** Category to create. */
      category: Category$3;
  }
  interface CreateCategoryResponse {
      /** Created category. */
      category?: Category$3;
  }
  interface BulkCreateCategoryRequest {
      /** Categories to create. */
      categories: Category$3[];
  }
  interface BulkCreateCategoryResponse {
      /** Bulk create results. */
      results?: BulkCategoryResult[];
      /** Metadata of results. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkCategoryResult {
      /** Metadata. */
      itemMetadata?: ItemMetadata;
      /** Created categories. */
      item?: Category$3;
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
      /** Number of failures without details due to exceeding the threshold for detailed failures. */
      undetailedFailures?: number;
  }
  interface UpdateCategoryRequest {
      /** Category update. */
      category: Category$3;
  }
  interface UpdateCategoryResponse {
      /** Updated category. */
      category?: Category$3;
  }
  interface DeleteCategoryRequest {
      /** ID of category to be deleted. */
      categoryId: string;
  }
  interface DeleteCategoryResponse {
  }
  interface QueryCategoriesRequest {
      /** Query options. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
      query: QueryV2$4;
      /**
       * Predefined sets of fields to return.
       * - `COUNTS`: Returns `assignedEventsCount`.
       */
      fieldset?: CategoryFieldset[];
  }
  interface QueryV2$4 extends QueryV2PagingMethodOneOf$4 {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$4;
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: Sorting$4[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$4 {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$4;
  }
  interface Sorting$4 {
      /** Name of the field to sort by */
      fieldName?: string;
      /** Sort order (ASC/DESC). Defaults to ASC */
      order?: SortOrder$4;
  }
  enum SortOrder$4 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging$4 {
      /** Number of items to load per page. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  enum CategoryFieldset {
      /** Include `assignedEventsCount` in the response. */
      COUNTS = "COUNTS"
  }
  interface QueryCategoriesResponse {
      /** List of categories. */
      categories?: Category$3[];
      /** Metadata for the paginated results. */
      metaData?: PagingMetadataV2$4;
  }
  interface PagingMetadataV2$4 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$4;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$4 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface AssignEventsRequest {
      /** ID of category to which events should be assigned. */
      categoryId: string;
      /** A list of events IDs. */
      eventId: string[];
  }
  interface AssignEventsResponse {
  }
  interface BulkAssignEventsRequest {
      /** A list of category IDs to which events should be assigned. */
      categoryId: string[];
      /** A list of events IDs. */
      eventId: string[];
  }
  interface BulkAssignEventsResponse {
      /** Results. */
      results?: BulkCategoryResult[];
      /** Metadata of results. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkAssignEventsAsyncRequest {
      /** Category IDs. */
      categoryId: string[];
      /**
       * Criteria that must be met for an event to be considered for the bulk assign. Supported filters for this API:
       * - `_id`: [`eq()`](https://www.wix.com/velo/reference/wix-events-v2/categories/categoriesquerybuilder/eq)
       * - `name`: [`eq()`](https://www.wix.com/velo/reference/wix-events-v2/categories/categoriesquerybuilder/eq)
       */
      filter: Record<string, any> | null;
  }
  interface BulkAssignEventsAsyncResponse {
  }
  interface UnassignEventsRequest {
      /** Category ID. */
      categoryId: string;
      /** A list of events IDs. */
      eventId: string[];
  }
  interface UnassignEventsResponse {
  }
  interface BulkUnassignEventsRequest {
      /** A list of category IDs. */
      categoryId: string[];
      /** A list of events IDs. */
      eventId?: string[];
  }
  interface BulkUnassignEventsResponse {
      /** Results. */
      results?: BulkCategoryResult[];
      /** Metadata of results. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkUnassignEventsAsyncRequest {
      /** Category ID. */
      categoryId: string[];
      /**
       * Criteria that must be met for an event to be considered for the bulk assign. Supported filters for this API:
       * - `_id`: [`eq()`](https://www.wix.com/velo/reference/wix-events-v2/categories/categoriesquerybuilder/eq)
       * - `name`: [`eq()`](https://www.wix.com/velo/reference/wix-events-v2/categories/categoriesquerybuilder/eq)
       */
      filter: Record<string, any> | null;
  }
  interface BulkUnassignEventsAsyncResponse {
  }
  interface ListEventCategoriesRequest {
      /** Event ID. */
      eventId: string;
  }
  interface ListEventCategoriesResponse {
      /** A list of categories. */
      categories?: Category$3[];
  }
  interface ReorderCategoryEventsRequest extends ReorderCategoryEventsRequestReferenceEventOneOf {
      /** Move the event before defined `eventId`. */
      beforeEventId?: string;
      /** Move the event after defined `eventId`. */
      afterEventId?: string;
      /** Category ID */
      categoryId: string;
      /** Event ID */
      eventId?: string;
  }
  /** @oneof */
  interface ReorderCategoryEventsRequestReferenceEventOneOf {
      /** Move the event before defined `eventId`. */
      beforeEventId?: string;
      /** Move the event after defined `eventId`. */
      afterEventId?: string;
  }
  interface ReorderCategoryEventsResponse {
  }
  /**
   * Creates a category.
   * @public
   * @requiredField category
   * @param category - Category to create.
   * @adminMethod
   * @returns Created category.
   */
  function createCategory(category: Category$3): Promise<Category$3>;
  /**
   * Creates new categories.
   * @param categories - Categories to create.
   * @public
   * @requiredField categories
   * @adminMethod
   */
  function bulkCreateCategory(categories: Category$3[]): Promise<BulkCreateCategoryResponse>;
  /**
   * Updates an existing category.
   * @param _id - Category ID.
   * @public
   * @requiredField _id
   * @requiredField category
   * @adminMethod
   * @returns Updated category.
   */
  function updateCategory(_id: string, category: UpdateCategory): Promise<Category$3>;
  interface UpdateCategory {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category name. */
      name?: string;
      /**
       * Category creation timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Total number of published events assigned to the category. Deleted events are excluded.
       * @internal
       * @readonly
       */
      assignedEventsCount?: number | null;
      /**
       * The total number of draft and published events assigned to the category.
       * @readonly
       */
      counts?: CategoryCounts$3;
      /**
       * Category state. Possible values:
       * - `MANUAL`: Category is created manually by the user.
       * - `AUTO`: Category is created automatically.
       * - `RECURRING_EVENT`: Category is created automatically when publishing recurring events.
       * - `HIDDEN`: Category can't be seen.
       *
       * Default: `MANUAL`.
       *
       * **Note:** The WIX_EVENTS.MANAGE_AUTO_CATEGORIES permission is required to use states other than `MANUAL`.
       */
      states?: State$6[];
      /**
       * Optionally client defined external ID.
       * @internal
       */
      externalId?: string | null;
  }
  /**
   * Deletes a category.
   * @param categoryId - ID of category to be deleted.
   * @public
   * @requiredField categoryId
   * @adminMethod
   */
  function deleteCategory(categoryId: string): Promise<void>;
  /**
   * Creates a query to retrieve a list of categories.
   *
   *
   * The `queryCategories()` function builds a query to retrieve a list of categories and returns a [`CategoriesQueryBuilder`](https://www.wix.com/velo/reference/wix-events-v2/categories/categoriesquerybuilder) object.
   *
   * The returned object contains the query definition, which is typically used to run the query using the [`find()`](https://www.wix.com/velo/reference/wix-events-v2/categories/categoriesquerybuilder/find) function.
   *
   * You can refine the query by chaining `CategoriesQueryBuilder` functions onto the query. `CategoriesQueryBuilder` functions enable you to sort, filter, and control the results `queryCategories()` returns.
   *
   * `queryCategories()` runs with these `CategoriesQueryBuilder` defaults, which you can override:
   *
   *  - [`limit(50)`](https://www.wix.com/velo/reference/wix-events-v2/categories/categoriesquerybuilder/limit)
   * @public
   * @param options - Options to use when querying categories.
   */
  function queryCategories(options?: QueryCategoriesOptions): CategoriesQueryBuilder;
  interface QueryCategoriesOptions {
      /**
       * Predefined sets of fields to return.
       * - `COUNTS`: Returns `assignedEventsCount`.
       */
      fieldset?: CategoryFieldset[] | undefined;
  }
  interface QueryOffsetResult$1 {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface CategoriesQueryResult extends QueryOffsetResult$1 {
      items: Category$3[];
      query: CategoriesQueryBuilder;
      next: () => Promise<CategoriesQueryResult>;
      prev: () => Promise<CategoriesQueryResult>;
  }
  interface CategoriesQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: '_id' | 'name', value: any) => CategoriesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'_createdDate'>) => CategoriesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'_createdDate'>) => CategoriesQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => CategoriesQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results. */
      skip: (skip: number) => CategoriesQueryBuilder;
      find: () => Promise<CategoriesQueryResult>;
  }
  /**
   * Assigns events to a single category.
   * @param categoryId - ID of category to which events should be assigned.
   * @param eventId - A list of events IDs.
   * @public
   * @requiredField categoryId
   * @requiredField eventId
   * @adminMethod
   */
  function assignEvents(categoryId: string, eventId: string[]): Promise<void>;
  /**
   * Assigns events to multiple categories.
   * @param categoryId - A list of category IDs to which events should be assigned.
   * @public
   * @requiredField categoryId
   * @requiredField options
   * @requiredField options.eventId
   * @param options - Options to use when assigning events to multiple categories.
   * @adminMethod
   */
  function bulkAssignEvents(categoryId: string[], options: BulkAssignEventsOptions): Promise<BulkAssignEventsResponse>;
  interface BulkAssignEventsOptions {
      /** A list of events IDs. */
      eventId: string[];
  }
  /**
   * Assigns events that match a given filter criteria to multiple categories. With this function, the events will be assigned to the category not instantly (like in `[bulkAssignEvents](https://www.wix.com/velo/reference/wix-events-v2/categories/bulkassignevents)`, but only after some time.
   * @param categoryId - Category IDs.
   * @public
   * @requiredField categoryId
   * @requiredField options
   * @requiredField options.filter
   * @param options - Options to use when assigning events to multiple categories.
   * @adminMethod
   */
  function bulkAssignEventsAsync(categoryId: string[], options: BulkAssignEventsAsyncOptions): Promise<void>;
  interface BulkAssignEventsAsyncOptions {
      /**
       * Criteria that must be met for an event to be considered for the bulk assign. Supported filters for this API:
       * - `_id`: [`eq()`](https://www.wix.com/velo/reference/wix-events-v2/categories/categoriesquerybuilder/eq)
       * - `name`: [`eq()`](https://www.wix.com/velo/reference/wix-events-v2/categories/categoriesquerybuilder/eq)
       */
      filter: Record<string, any> | null;
  }
  /**
   * Unassigns events from a category.
   * @param categoryId - Category ID.
   * @param eventId - A list of events IDs.
   * @public
   * @requiredField categoryId
   * @requiredField eventId
   * @adminMethod
   */
  function unassignEvents(categoryId: string, eventId: string[]): Promise<void>;
  /**
   * Unassigns events from multiple categories.
   * @param categoryId - A list of category IDs.
   * @public
   * @requiredField categoryId
   * @param options - Options to use when removing events from multiple categories.
   * @adminMethod
   */
  function bulkUnassignEvents(categoryId: string[], options?: BulkUnassignEventsOptions): Promise<BulkUnassignEventsResponse>;
  interface BulkUnassignEventsOptions {
      /** A list of events IDs. */
      eventId?: string[];
  }
  /**
   * Unassigns filtered events from multiple categories.
   * @param categoryId - Category ID.
   * @public
   * @requiredField categoryId
   * @requiredField options
   * @requiredField options.filter
   * @param options - Options to use when removing events from multiple categories.
   * @adminMethod
   */
  function bulkUnassignEventsAsync(categoryId: string[], options: BulkUnassignEventsAsyncOptions): Promise<void>;
  interface BulkUnassignEventsAsyncOptions {
      /**
       * Criteria that must be met for an event to be considered for the bulk assign. Supported filters for this API:
       * - `_id`: [`eq()`](https://www.wix.com/velo/reference/wix-events-v2/categories/categoriesquerybuilder/eq)
       * - `name`: [`eq()`](https://www.wix.com/velo/reference/wix-events-v2/categories/categoriesquerybuilder/eq)
       */
      filter: Record<string, any> | null;
  }
  /**
   * Retrieves a list of categories that are not in the `HIDDEN` state.
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   */
  function listEventCategories(eventId: string): Promise<ListEventCategoriesResponse>;
  /**
   * Change the order of events that are assigned to the same category on the Events Widget.
   *
   *
   * For more information see [this article](https://support.wix.com/en/article/creating-and-displaying-event-categories)
   * @param categoryId - Category ID
   * @public
   * @requiredField categoryId
   * @param options - Options to use when reordering events.
   * @adminMethod
   */
  function reorderCategoryEvents(categoryId: string, options?: ReorderCategoryEventsOptions): Promise<void>;
  interface ReorderCategoryEventsOptions extends ReorderCategoryEventsRequestReferenceEventOneOf {
      /** Event ID */
      eventId?: string;
      /** Move the event before defined `eventId`. */
      beforeEventId?: string;
      /** Move the event after defined `eventId`. */
      afterEventId?: string;
  }
  
  type eventsV1Category_universal_d_CreateCategoryRequest = CreateCategoryRequest;
  type eventsV1Category_universal_d_CreateCategoryResponse = CreateCategoryResponse;
  type eventsV1Category_universal_d_BulkCreateCategoryRequest = BulkCreateCategoryRequest;
  type eventsV1Category_universal_d_BulkCreateCategoryResponse = BulkCreateCategoryResponse;
  type eventsV1Category_universal_d_BulkCategoryResult = BulkCategoryResult;
  type eventsV1Category_universal_d_ItemMetadata = ItemMetadata;
  type eventsV1Category_universal_d_ApplicationError = ApplicationError;
  type eventsV1Category_universal_d_BulkActionMetadata = BulkActionMetadata;
  type eventsV1Category_universal_d_UpdateCategoryRequest = UpdateCategoryRequest;
  type eventsV1Category_universal_d_UpdateCategoryResponse = UpdateCategoryResponse;
  type eventsV1Category_universal_d_DeleteCategoryRequest = DeleteCategoryRequest;
  type eventsV1Category_universal_d_DeleteCategoryResponse = DeleteCategoryResponse;
  type eventsV1Category_universal_d_QueryCategoriesRequest = QueryCategoriesRequest;
  type eventsV1Category_universal_d_CategoryFieldset = CategoryFieldset;
  const eventsV1Category_universal_d_CategoryFieldset: typeof CategoryFieldset;
  type eventsV1Category_universal_d_QueryCategoriesResponse = QueryCategoriesResponse;
  type eventsV1Category_universal_d_AssignEventsRequest = AssignEventsRequest;
  type eventsV1Category_universal_d_AssignEventsResponse = AssignEventsResponse;
  type eventsV1Category_universal_d_BulkAssignEventsRequest = BulkAssignEventsRequest;
  type eventsV1Category_universal_d_BulkAssignEventsResponse = BulkAssignEventsResponse;
  type eventsV1Category_universal_d_BulkAssignEventsAsyncRequest = BulkAssignEventsAsyncRequest;
  type eventsV1Category_universal_d_BulkAssignEventsAsyncResponse = BulkAssignEventsAsyncResponse;
  type eventsV1Category_universal_d_UnassignEventsRequest = UnassignEventsRequest;
  type eventsV1Category_universal_d_UnassignEventsResponse = UnassignEventsResponse;
  type eventsV1Category_universal_d_BulkUnassignEventsRequest = BulkUnassignEventsRequest;
  type eventsV1Category_universal_d_BulkUnassignEventsResponse = BulkUnassignEventsResponse;
  type eventsV1Category_universal_d_BulkUnassignEventsAsyncRequest = BulkUnassignEventsAsyncRequest;
  type eventsV1Category_universal_d_BulkUnassignEventsAsyncResponse = BulkUnassignEventsAsyncResponse;
  type eventsV1Category_universal_d_ListEventCategoriesRequest = ListEventCategoriesRequest;
  type eventsV1Category_universal_d_ListEventCategoriesResponse = ListEventCategoriesResponse;
  type eventsV1Category_universal_d_ReorderCategoryEventsRequest = ReorderCategoryEventsRequest;
  type eventsV1Category_universal_d_ReorderCategoryEventsRequestReferenceEventOneOf = ReorderCategoryEventsRequestReferenceEventOneOf;
  type eventsV1Category_universal_d_ReorderCategoryEventsResponse = ReorderCategoryEventsResponse;
  const eventsV1Category_universal_d_createCategory: typeof createCategory;
  const eventsV1Category_universal_d_bulkCreateCategory: typeof bulkCreateCategory;
  const eventsV1Category_universal_d_updateCategory: typeof updateCategory;
  type eventsV1Category_universal_d_UpdateCategory = UpdateCategory;
  const eventsV1Category_universal_d_deleteCategory: typeof deleteCategory;
  const eventsV1Category_universal_d_queryCategories: typeof queryCategories;
  type eventsV1Category_universal_d_QueryCategoriesOptions = QueryCategoriesOptions;
  type eventsV1Category_universal_d_CategoriesQueryResult = CategoriesQueryResult;
  type eventsV1Category_universal_d_CategoriesQueryBuilder = CategoriesQueryBuilder;
  const eventsV1Category_universal_d_assignEvents: typeof assignEvents;
  const eventsV1Category_universal_d_bulkAssignEvents: typeof bulkAssignEvents;
  type eventsV1Category_universal_d_BulkAssignEventsOptions = BulkAssignEventsOptions;
  const eventsV1Category_universal_d_bulkAssignEventsAsync: typeof bulkAssignEventsAsync;
  type eventsV1Category_universal_d_BulkAssignEventsAsyncOptions = BulkAssignEventsAsyncOptions;
  const eventsV1Category_universal_d_unassignEvents: typeof unassignEvents;
  const eventsV1Category_universal_d_bulkUnassignEvents: typeof bulkUnassignEvents;
  type eventsV1Category_universal_d_BulkUnassignEventsOptions = BulkUnassignEventsOptions;
  const eventsV1Category_universal_d_bulkUnassignEventsAsync: typeof bulkUnassignEventsAsync;
  type eventsV1Category_universal_d_BulkUnassignEventsAsyncOptions = BulkUnassignEventsAsyncOptions;
  const eventsV1Category_universal_d_listEventCategories: typeof listEventCategories;
  const eventsV1Category_universal_d_reorderCategoryEvents: typeof reorderCategoryEvents;
  type eventsV1Category_universal_d_ReorderCategoryEventsOptions = ReorderCategoryEventsOptions;
  namespace eventsV1Category_universal_d {
    export {
      Category$3 as Category,
      CategoryCounts$3 as CategoryCounts,
      State$6 as State,
      eventsV1Category_universal_d_CreateCategoryRequest as CreateCategoryRequest,
      eventsV1Category_universal_d_CreateCategoryResponse as CreateCategoryResponse,
      eventsV1Category_universal_d_BulkCreateCategoryRequest as BulkCreateCategoryRequest,
      eventsV1Category_universal_d_BulkCreateCategoryResponse as BulkCreateCategoryResponse,
      eventsV1Category_universal_d_BulkCategoryResult as BulkCategoryResult,
      eventsV1Category_universal_d_ItemMetadata as ItemMetadata,
      eventsV1Category_universal_d_ApplicationError as ApplicationError,
      eventsV1Category_universal_d_BulkActionMetadata as BulkActionMetadata,
      eventsV1Category_universal_d_UpdateCategoryRequest as UpdateCategoryRequest,
      eventsV1Category_universal_d_UpdateCategoryResponse as UpdateCategoryResponse,
      eventsV1Category_universal_d_DeleteCategoryRequest as DeleteCategoryRequest,
      eventsV1Category_universal_d_DeleteCategoryResponse as DeleteCategoryResponse,
      eventsV1Category_universal_d_QueryCategoriesRequest as QueryCategoriesRequest,
      QueryV2$4 as QueryV2,
      QueryV2PagingMethodOneOf$4 as QueryV2PagingMethodOneOf,
      Sorting$4 as Sorting,
      SortOrder$4 as SortOrder,
      Paging$4 as Paging,
      eventsV1Category_universal_d_CategoryFieldset as CategoryFieldset,
      eventsV1Category_universal_d_QueryCategoriesResponse as QueryCategoriesResponse,
      PagingMetadataV2$4 as PagingMetadataV2,
      Cursors$4 as Cursors,
      eventsV1Category_universal_d_AssignEventsRequest as AssignEventsRequest,
      eventsV1Category_universal_d_AssignEventsResponse as AssignEventsResponse,
      eventsV1Category_universal_d_BulkAssignEventsRequest as BulkAssignEventsRequest,
      eventsV1Category_universal_d_BulkAssignEventsResponse as BulkAssignEventsResponse,
      eventsV1Category_universal_d_BulkAssignEventsAsyncRequest as BulkAssignEventsAsyncRequest,
      eventsV1Category_universal_d_BulkAssignEventsAsyncResponse as BulkAssignEventsAsyncResponse,
      eventsV1Category_universal_d_UnassignEventsRequest as UnassignEventsRequest,
      eventsV1Category_universal_d_UnassignEventsResponse as UnassignEventsResponse,
      eventsV1Category_universal_d_BulkUnassignEventsRequest as BulkUnassignEventsRequest,
      eventsV1Category_universal_d_BulkUnassignEventsResponse as BulkUnassignEventsResponse,
      eventsV1Category_universal_d_BulkUnassignEventsAsyncRequest as BulkUnassignEventsAsyncRequest,
      eventsV1Category_universal_d_BulkUnassignEventsAsyncResponse as BulkUnassignEventsAsyncResponse,
      eventsV1Category_universal_d_ListEventCategoriesRequest as ListEventCategoriesRequest,
      eventsV1Category_universal_d_ListEventCategoriesResponse as ListEventCategoriesResponse,
      eventsV1Category_universal_d_ReorderCategoryEventsRequest as ReorderCategoryEventsRequest,
      eventsV1Category_universal_d_ReorderCategoryEventsRequestReferenceEventOneOf as ReorderCategoryEventsRequestReferenceEventOneOf,
      eventsV1Category_universal_d_ReorderCategoryEventsResponse as ReorderCategoryEventsResponse,
      eventsV1Category_universal_d_createCategory as createCategory,
      eventsV1Category_universal_d_bulkCreateCategory as bulkCreateCategory,
      eventsV1Category_universal_d_updateCategory as updateCategory,
      eventsV1Category_universal_d_UpdateCategory as UpdateCategory,
      eventsV1Category_universal_d_deleteCategory as deleteCategory,
      eventsV1Category_universal_d_queryCategories as queryCategories,
      eventsV1Category_universal_d_QueryCategoriesOptions as QueryCategoriesOptions,
      eventsV1Category_universal_d_CategoriesQueryResult as CategoriesQueryResult,
      eventsV1Category_universal_d_CategoriesQueryBuilder as CategoriesQueryBuilder,
      eventsV1Category_universal_d_assignEvents as assignEvents,
      eventsV1Category_universal_d_bulkAssignEvents as bulkAssignEvents,
      eventsV1Category_universal_d_BulkAssignEventsOptions as BulkAssignEventsOptions,
      eventsV1Category_universal_d_bulkAssignEventsAsync as bulkAssignEventsAsync,
      eventsV1Category_universal_d_BulkAssignEventsAsyncOptions as BulkAssignEventsAsyncOptions,
      eventsV1Category_universal_d_unassignEvents as unassignEvents,
      eventsV1Category_universal_d_bulkUnassignEvents as bulkUnassignEvents,
      eventsV1Category_universal_d_BulkUnassignEventsOptions as BulkUnassignEventsOptions,
      eventsV1Category_universal_d_bulkUnassignEventsAsync as bulkUnassignEventsAsync,
      eventsV1Category_universal_d_BulkUnassignEventsAsyncOptions as BulkUnassignEventsAsyncOptions,
      eventsV1Category_universal_d_listEventCategories as listEventCategories,
      eventsV1Category_universal_d_reorderCategoryEvents as reorderCategoryEvents,
      eventsV1Category_universal_d_ReorderCategoryEventsOptions as ReorderCategoryEventsOptions,
    };
  }
  
  /**
   * The form defines which elements are rendered in the Wix UI during the registration process (RSVP or checkout).
   * It also contains customizable messages and labels.
   *
   *
   * A form is an ordered list of controls (blocks), which accept guest information into a field input.
   *
   * Each control contains one or more nested inputs. For example, `Name` control has two inputs:
   * - First Name
   * - Last Name
   *
   * By default, name and email controls are always required and are pinned to the top of the form.
   */
  interface Form$2 {
      /** Nested fields as an ordered list. */
      controls?: InputControl$2[];
      /** Set of configured form messages. */
      messages?: FormMessages$2;
  }
  /**
   * A block of nested fields.
   * Used to aggregate similar inputs like First Name and Last Name.
   */
  interface InputControl$2 {
      /**
       * Field control type. Possible values:
       * - `INPUT`: Single text value field.
       * - `TEXTAREA`: Single text value field with multiple lines.
       * - `DROPDOWN`: Single-choice field with predefined values.
       * - `RADIO`: Single-choice field with predefined values.
       * - `CHECKBOX`: Multiple-choice field with predefined values.
       * - `NAME`: Fields for entering first and last names.
       * - `GUEST_CONTROL`: Fields for additional guests and their respective names.
       * - `ADDRESS_SHORT`: Single-line address field.
       * - `ADDRESS_FULL`: Full address field with multiple lines.
       * - `DATE`: Fields for entering year, month, and day.
       */
      type?: InputControlType$2;
      /**
       * Whether the control is mandatory (such as `name` & `email`).
       * When `true`, only the label can be changed.
       */
      system?: boolean;
      /** Deprecated: Use `id`. */
      name?: string;
      /** Child inputs. */
      inputs?: Input$2[];
      /** Deprecated: use `inputs.label`. */
      label?: string;
      /** Field controls are sorted by this value in ascending order. */
      orderIndex?: number;
      /** Unique control ID. */
      _id?: string;
      /**
       * Whether input control is deleted.
       * @readonly
       */
      deleted?: boolean | null;
  }
  enum InputControlType$2 {
      /** Single text value field. */
      INPUT = "INPUT",
      /** Single text value field. */
      TEXTAREA = "TEXTAREA",
      /** Single-choice field of predefined values. */
      DROPDOWN = "DROPDOWN",
      /** Single-choice field of predefined values. */
      RADIO = "RADIO",
      /** Multiple-choice field of predefined values. */
      CHECKBOX = "CHECKBOX",
      /** First and last name fields. */
      NAME = "NAME",
      /** Additional guests and respective guest names fields. */
      GUEST_CONTROL = "GUEST_CONTROL",
      /** Single-line address field. */
      ADDRESS_SHORT = "ADDRESS_SHORT",
      /** Full address field. */
      ADDRESS_FULL = "ADDRESS_FULL",
      /** Year, month and day fields. */
      DATE = "DATE"
  }
  /** An input of one or multiple text values */
  interface Input$2 {
      /** Field name. */
      name?: string;
      /** Deprecated: use `ValueType.TEXT_ARRAY`. */
      array?: boolean;
      /** Main field label */
      label?: string;
      /** Additional labels for multi-valued fields such as address. */
      additionalLabels?: Record<string, string>;
      /** Predefined choice options for fields, such as dropdown. */
      options?: string[];
      /** Whether field is mandatory. */
      mandatory?: boolean;
      /** Maximum number of accepted characters (relevant for text fields). */
      maxLength?: number;
      /**
       * Type which determines field format.
       * Used to validate submitted response.
       */
      type?: ValueType$2;
      /**
       * The maximum number of accepted values for array input.
       * **Note:** Only applicable for `TEXT_ARRAY` input fields.
       */
      maxSize?: number | null;
      /**
       * Preselected option.
       * Currently only applicable for dropdown.
       */
      defaultOptionSelection?: OptionSelection$2;
      /**
       * Additional labels for multi-valued fields such as address.
       * @readonly
       */
      labels?: Label$2[];
  }
  enum ValueType$2 {
      TEXT = "TEXT",
      NUMBER = "NUMBER",
      TEXT_ARRAY = "TEXT_ARRAY",
      DATE_TIME = "DATE_TIME",
      ADDRESS = "ADDRESS"
  }
  /**
   * Describes initially selected option when an input has multiple choices.
   * Defaults to first (0th) option if not configured.
   */
  interface OptionSelection$2 extends OptionSelectionSelectedOptionOneOf$2 {
      /** 0-based index from predefined `input.options` which is selected initially. */
      optionIndex?: number;
      /**
       * Placeholder hint describing expected choices (such as "Please select").
       * Considered an empty choice.
       */
      placeholderText?: string;
  }
  /** @oneof */
  interface OptionSelectionSelectedOptionOneOf$2 {
      /** 0-based index from predefined `input.options` which is selected initially. */
      optionIndex?: number;
      /**
       * Placeholder hint describing expected choices (such as "Please select").
       * Considered an empty choice.
       */
      placeholderText?: string;
  }
  interface Label$2 {
      /** Field name. */
      name?: string;
      /** Field label. */
      label?: string;
  }
  /**
   * Defines form messages shown in UI before, during, and after registration flow.
   * It enables configuration of form titles, response labels, "thank you" messages, and call-to-action texts.
   */
  interface FormMessages$2 {
      /** RSVP form messages. */
      rsvp?: RsvpFormMessages$2;
      /** Checkout form messages. */
      checkout?: CheckoutFormMessages$2;
      /** Messages shown when event registration is closed. */
      registrationClosed?: RegistrationClosedMessages$2;
      /** Messages shown when event tickets are unavailable. */
      ticketsUnavailable?: TicketsUnavailableMessages$2;
  }
  interface RsvpFormMessages$2 {
      /** Label text indicating RSVP `YES` response. */
      rsvpYesOption?: string;
      /** Label text indicating RSVP `NO` response. */
      rsvpNoOption?: string;
      /** Messages shown for RSVP = `YES`. */
      positiveMessages?: Positive$2;
      /** Messages shown for RSVP = `WAITING` (when event is full and waitlist is available). */
      waitlistMessages?: Positive$2;
      /** Messages shown for RSVP = `NO`. */
      negativeMessages?: Negative$2;
      /** "Submit form" call-to-action label text. */
      submitActionLabel?: string;
  }
  /** Confirmation messages shown after registration. */
  interface PositiveResponseConfirmation$2 {
      /** Confirmation message title. */
      title?: string;
      /** Confirmation message text. */
      message?: string;
      /** "Add to calendar" call-to-action label text. */
      addToCalendarActionLabel?: string;
      /** "Share event" call-to-action label text. */
      shareActionLabel?: string;
  }
  /** Confirmation messages shown after registration. */
  interface NegativeResponseConfirmation$2 {
      /** Confirmation message title. */
      title?: string;
      /** "Share event" call-to-action label text. */
      shareActionLabel?: string;
  }
  /** Set of messages shown during registration when RSVP response is positive. */
  interface Positive$2 {
      /** Main form title for positive response. */
      title?: string;
      /** Confirmation messages shown after registration. */
      confirmation?: PositiveResponseConfirmation$2;
  }
  /** A set of messages shown during registration with negative response */
  interface Negative$2 {
      /** Main form title for negative response. */
      title?: string;
      /** Confirmation messages shown after registration. */
      confirmation?: NegativeResponseConfirmation$2;
  }
  interface CheckoutFormMessages$2 {
      /** Main form title for response. */
      title?: string;
      /** Submit form call-to-action label text. */
      submitActionLabel?: string;
      /** Confirmation messages shown after checkout. */
      confirmation?: ResponseConfirmation$2;
  }
  /** Confirmation messages shown after checkout. */
  interface ResponseConfirmation$2 {
      /** Confirmation message title. */
      title?: string;
      /** Confirmation message text. */
      message?: string;
      /** "Download tickets" call-to-action label text. */
      downloadTicketsLabel?: string;
      /** "Add to calendar" call-to-action label text. */
      addToCalendarLabel?: string;
      /** "Share event" call-to-action label text. */
      shareEventLabel?: string;
  }
  interface RegistrationClosedMessages$2 {
      /** Message shown when event registration is closed. */
      message?: string;
      /** "Explore other events" call-to-action label text. */
      exploreEventsActionLabel?: string;
  }
  interface TicketsUnavailableMessages$2 {
      /** Message shown when event tickets are unavailable. */
      message?: string;
      /** "Explore other events" call-to-action label text. */
      exploreEventsActionLabel?: string;
  }
  interface FormInputControlAdded {
      /** Event ID to which the form belongs. */
      eventId?: string;
      /** Input control. */
      inputControl?: InputControl$2;
  }
  interface FormInputControlUpdated {
      /** Event ID to which the form belongs. */
      eventId?: string;
      /** Input control. */
      updatedInputControl?: InputControl$2;
  }
  interface FormInputControlDeleted {
      /** Event ID to which the form belongs. */
      eventId?: string;
      /** Input control. */
      deletedInputControl?: InputControl$2;
  }
  interface GetFormRequest {
      /** Event ID to which the form belongs. */
      eventId: string;
      /**
       * Whether to return additional data with the response.
       * @internal
       */
      fields?: RequestedFields$1[];
  }
  enum RequestedFields$1 {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      /** Include soft deleted input controls in the response. */
      DELETED = "DELETED"
  }
  interface GetFormResponse {
      /**
       * Currently published event form.
       * Published form is visible to site visitors.
       */
      form?: Form$2;
      /**
       * Draft event form.
       * Not available to visitors unless published.
       */
      draftForm?: Form$2;
  }
  interface AddControlRequest extends AddControlRequestControlOneOf {
      /** Phone number input control. */
      phone?: PhoneControl;
      /** Single-line or full address input control. */
      address?: AddressControl;
      /** Day, month, year date input control. */
      date?: DateControl;
      /** Additional guests input control. */
      additionalGuests?: AdditionalGuestsControl;
      /** Single-choice dropdown style input control. */
      dropdown?: DropdownControl;
      /**
       * Deprecated. Use radioButton.
       * @internal
       */
      radio?: RadioButtonControl;
      /** Multiple-choice checkbox style input control. */
      checkbox?: CheckboxControl;
      /** Free-form text input control. */
      text?: TextControl;
      /** Single-choice radio button style input control. */
      radioButton?: RadioButtonControl;
      /** Event ID to which the form belongs. */
      eventId: string;
  }
  /** @oneof */
  interface AddControlRequestControlOneOf {
      /** Phone number input control. */
      phone?: PhoneControl;
      /** Single-line or full address input control. */
      address?: AddressControl;
      /** Day, month, year date input control. */
      date?: DateControl;
      /** Additional guests input control. */
      additionalGuests?: AdditionalGuestsControl;
      /** Single-choice dropdown style input control. */
      dropdown?: DropdownControl;
      /**
       * Deprecated. Use radioButton.
       * @internal
       */
      radio?: RadioButtonControl;
      /** Multiple-choice checkbox style input control. */
      checkbox?: CheckboxControl;
      /** Free-form text input control. */
      text?: TextControl;
      /** Single-choice radio button style input control. */
      radioButton?: RadioButtonControl;
  }
  interface PhoneControl {
      /** Phone input label. */
      label?: string;
      /** Whether phone input is required. */
      mandatory?: boolean;
  }
  interface AddressControl {
      /** Address control labels for each input. */
      labels?: AddressControlLabels;
      /** Whether address is multi-line (consisting of multiple fields such as country, city, postal code). When false, address is single-line. */
      full?: boolean;
      /** Whether address input is required. */
      mandatory?: boolean;
  }
  interface AddressControlLabels {
      /** Single-line address input label. */
      addressLine?: string;
      /** Country input label. */
      country?: string;
      /** Subdivision input label. */
      subdivision?: string;
      /** City input label. */
      city?: string;
      /** Postal code input label. */
      postalCode?: string;
      /** Street address input label. */
      streetAddress?: string;
  }
  interface DateControl {
      /** Input control label. */
      label?: string;
      /** Whether date input is required */
      mandatory?: boolean;
  }
  interface AdditionalGuestsControl {
      /** Additional guests control labels for each input. */
      labels?: Labels;
      /** Whether individual guest names are required. */
      namesMandatory?: boolean;
      /** Maximum number of additional guests. */
      maxGuests?: number;
  }
  interface Labels {
      /** Input label for a single guest. */
      single?: string;
      /** Input label for multiple guests. */
      multiple?: string;
  }
  interface DropdownControl {
      /** Input control label. */
      label?: string;
      /** Predefined options guests can choose from. */
      options?: string[];
      /** Whether choice is required. */
      mandatory?: boolean;
      /** Preselected option. */
      defaultOptionSelection?: OptionSelection$2;
  }
  interface RadioButtonControl {
      /** Input control label. */
      label?: string;
      /** Predefined options guests can choose from. */
      options?: string[];
  }
  interface CheckboxControl {
      /** Input control label. */
      label?: string;
      /** Whether at least one checkbox is required. */
      mandatory?: boolean;
      /** Predefined options guests can choose from. */
      options?: string[];
  }
  interface TextControl {
      /** Input control label. */
      label?: string;
      /** Whether text input is required. */
      mandatory?: boolean;
      /** Maximum number of characters allowed. */
      maxLength?: number;
      /** Whether input control should allow multiple lines in text. */
      multiLine?: boolean;
      /** Whether input control should be displayed as a comment. */
      comment?: boolean;
  }
  interface AddControlResponse {
      /** Generated unique input control ID. */
      _id?: string;
      /** Modified draft event form. */
      form?: Form$2;
  }
  interface UpdateControlRequest extends UpdateControlRequestControlOneOf {
      /** Phone number input control. */
      phone?: PhoneControl;
      /** Single-line or full address input control. */
      address?: AddressControl;
      /** Day, month, year date input control. */
      date?: DateControl;
      /** Additional guests input control. */
      additionalGuests?: AdditionalGuestsControl;
      /** Single-choice dropdown style input control. */
      dropdown?: DropdownControl;
      /**
       * Single-choice radio style input control.
       * @internal
       */
      radio?: RadioButtonControl;
      /** Multiple-choice checkbox style input control. */
      checkbox?: CheckboxControl;
      /** Free-form text input control. */
      text?: TextControl;
      /** Main guest name input control. */
      name?: NameControl;
      /** Main guest email input control. */
      email?: EmailControl;
      /** Single-choice radio style input control. */
      radioButton?: RadioButtonControl;
      /** Event ID to which the form belongs. */
      eventId: string;
      /** Unique input control ID. */
      _id: string;
      /** Index used to sort input controls in ascending order. */
      orderIndex?: number;
  }
  /** @oneof */
  interface UpdateControlRequestControlOneOf {
      /** Phone number input control. */
      phone?: PhoneControl;
      /** Single-line or full address input control. */
      address?: AddressControl;
      /** Day, month, year date input control. */
      date?: DateControl;
      /** Additional guests input control. */
      additionalGuests?: AdditionalGuestsControl;
      /** Single-choice dropdown style input control. */
      dropdown?: DropdownControl;
      /**
       * Single-choice radio style input control.
       * @internal
       */
      radio?: RadioButtonControl;
      /** Multiple-choice checkbox style input control. */
      checkbox?: CheckboxControl;
      /** Free-form text input control. */
      text?: TextControl;
      /** Main guest name input control. */
      name?: NameControl;
      /** Main guest email input control. */
      email?: EmailControl;
      /** Single-choice radio style input control. */
      radioButton?: RadioButtonControl;
  }
  interface NameControl {
      /** Name control labels of each input */
      labels?: NameControlLabels;
  }
  interface NameControlLabels {
      /** First name input label */
      firstName?: string;
      /** Last name input label */
      lastName?: string;
  }
  interface EmailControl {
      /** Email input label. */
      label?: string;
  }
  interface UpdateControlResponse {
      /** Modified draft event form. */
      form?: Form$2;
  }
  interface DeleteControlRequest {
      /** Event ID to which the form belongs. */
      eventId: string;
      /** Unique input control ID. */
      _id: string;
  }
  interface DeleteControlResponse {
      /** Modified draft event form. */
      form?: Form$2;
  }
  interface UpdateMessagesRequest {
      /** Event ID to which the form belongs. */
      eventId: string;
      /**
       * Set of field paths, specifying which parts of this resource to update.
       * When fields are empty, request is interpreted as full update.
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
      /** Set of configured form messages. */
      messages?: FormMessages$2;
  }
  interface UpdateMessagesResponse {
      /** Modified draft event form. */
      form?: Form$2;
  }
  interface PublishDraftRequest {
      /** Event ID to which the form belongs. */
      eventId: string;
  }
  interface PublishDraftResponse {
      /** Published event form. */
      form?: Form$2;
  }
  interface EventUpdated$2 {
      /** Event update timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: Location$3;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig$3;
      /** Event title. */
      title?: string;
      /** Whether schedule configuration was updated. */
      scheduleConfigUpdated?: boolean;
      /**
       * The set of properties which were updated. For example 'title' or 'location'
       * @internal
       */
      fields?: string[];
      /**
       * Whether event has opened new spots with this update.
       * @internal
       */
      newSpotsOpened?: boolean | null;
      /** Updated event */
      event?: Event$2;
  }
  interface Location$3 {
      /** Location name. */
      name?: string | null;
      /** Location map coordinates. */
      coordinates?: MapCoordinates$3;
      /** Single line address representation. */
      address?: string | null;
      /** Location type. */
      type?: LocationType$3;
      /**
       * Full address derived from formatted single line `address`.
       * When `full_address` is used to create or update the event, deprecated `address` and `coordinates` are ignored.
       * If provided `full_address` has empty `formatted_address` or `coordinates`, it will be auto-completed using Atlas service.
       *
       * Migration notes:
       * - `full_address.formatted_address` is equivalent to `address`.
       * - `full_address.geocode` is equivalent to `coordinates`.
       */
      fullAddress?: Address$6;
      /**
       * Defines event location as TBD (To Be Determined).
       * When event location is not yet defined, `name` is displayed instead of location address.
       * `coordinates`, `address`, `type` and `full_address` are not required when location is TBD.
       */
      tbd?: boolean | null;
  }
  interface MapCoordinates$3 {
      /** Latitude. */
      lat?: number;
      /** Longitude. */
      lng?: number;
  }
  enum LocationType$3 {
      VENUE = "VENUE",
      ONLINE = "ONLINE"
  }
  /** Physical address */
  interface Address$6 extends AddressStreetOneOf$6 {
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress$6;
      /** Main address line (usually street and number) as free text */
      addressLine1?: string | null;
      /** country code */
      country?: string | null;
      /** subdivision (usually state or region) code according to ISO 3166-2 */
      subdivision?: string | null;
      /** city name */
      city?: string | null;
      /** zip/postal code */
      postalCode?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, Floor */
      addressLine2?: string | null;
      /** A string containing the human-readable address of this location */
      formatted?: string | null;
      /** coordinates of the physical address */
      location?: AddressLocation$6;
  }
  /** @oneof */
  interface AddressStreetOneOf$6 {
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress$6;
      /** Main address line (usually street and number) as free text */
      addressLine?: string | null;
  }
  interface StreetAddress$6 {
      /** street number */
      number?: string;
      /** street name */
      name?: string;
      /**
       * apartment number
       * @internal
       */
      apt?: string;
  }
  interface AddressLocation$6 {
      /** address latitude coordinates */
      latitude?: number | null;
      /** address longitude coordinates */
      longitude?: number | null;
  }
  interface Subdivision$6 {
      /** subdivision short code */
      code?: string;
      /** subdivision full-name */
      name?: string;
      /**
       * subdivision level
       * @internal
       */
      type?: SubdivisionType$6;
      /**
       * free text description of subdivision type
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType$6 {
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
  interface ScheduleConfig$3 {
      /**
       * Defines event as TBD (To Be Determined) schedule.
       * When event time is not yet defined, TBD message is displayed instead of event start and end times.
       * `startDate`, `endDate` and `timeZoneId` are not required when schedule is TBD.
       */
      scheduleTbd?: boolean;
      /** TBD message. */
      scheduleTbdMessage?: string | null;
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      /** Whether end date is hidden in the formatted schedule. */
      endDateHidden?: boolean;
      /** Whether time zone is displayed in formatted schedule. */
      showTimeZone?: boolean;
      /** Event recurrences. */
      recurrences?: Recurrences$3;
  }
  interface Recurrences$3 {
      /** Event occurrences. */
      occurrences?: Occurrence$3[];
      /**
       * Recurring event category ID.
       * @readonly
       */
      categoryId?: string | null;
      /**
       * Recurrence status.
       * @readonly
       */
      status?: Status$3;
  }
  interface Occurrence$3 {
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      /** Whether time zone is displayed in formatted schedule. */
      showTimeZone?: boolean;
  }
  enum Status$3 {
      /** Event occurs only once. */
      ONE_TIME = "ONE_TIME",
      /** Event is recurring. */
      RECURRING = "RECURRING",
      /** Marks the next upcoming occurrence of the recurring event. */
      RECURRING_NEXT = "RECURRING_NEXT",
      /** Marks the most recent ended occurrence of the recurring event. */
      RECURRING_LAST_ENDED = "RECURRING_LAST_ENDED",
      /** Marks the most recent canceled occurrence of the recurring event. */
      RECURRING_LAST_CANCELED = "RECURRING_LAST_CANCELED"
  }
  interface Event$2 {
      /**
       * Event ID.
       * @readonly
       */
      _id?: string;
      /** Event location. */
      location?: Location$3;
      /** Event scheduling. */
      scheduling?: Scheduling$2;
      /** Event title. */
      title?: string;
      /** Event description. */
      description?: string;
      /** Rich-text content displayed in Wix UI - "About Event" section (HTML). */
      about?: string;
      /** Main event image. */
      mainImage?: string;
      /** Event slug URL (generated from event title). */
      slug?: string;
      /** ISO 639-1 language code of the event (used in content translations). */
      language?: string;
      /** Event creation timestamp. */
      created?: Date;
      /** Event modified timestamp. */
      modified?: Date;
      /** Event status. */
      status?: EventStatus$3;
      /** RSVP or ticketing registration details. */
      registration?: Registration$2;
      /** "Add to calendar" URLs. */
      calendarLinks?: CalendarLinks$4;
      /** Event page URL components. */
      eventPageUrl?: SiteUrl$2;
      /** Event registration form. */
      form?: Form$2;
      /** Event dashboard summary of RSVP / ticket sales. */
      dashboard?: Dashboard$4;
      /** Instance ID of the site where event is hosted. */
      instanceId?: string;
      /** Guest list configuration. */
      guestListConfig?: GuestListConfig$2;
      /** Event creator user ID. */
      userId?: string;
      /** Event discussion feed. For internal use. */
      feed?: Feed$2;
      /** Online conferencing details. */
      onlineConferencing?: OnlineConferencing$2;
      /** SEO settings. */
      seoSettings?: SeoSettings$2;
      /** Assigned contacts label key. */
      assignedContactsLabel?: string | null;
      /** Agenda details. */
      agenda?: Agenda$2;
      /** Categories this event is assigned to. */
      categories?: Category$2[];
      /** Visual settings for event. */
      eventDisplaySettings?: EventDisplaySettings$2;
      /**
       * @internal
       * @readonly
       */
      customizableTickets?: boolean | null;
      /**
       * Labelling related data.
       * @internal
       */
      labellingSettings?: LabellingSettings$2;
  }
  interface Scheduling$2 {
      /** Schedule configuration. */
      config?: ScheduleConfig$3;
      /** Formatted schedule representation. */
      formatted?: string;
      /** Formatted start date of the event (empty for TBD schedules). */
      startDateFormatted?: string;
      /** Formatted start time of the event (empty for TBD schedules). */
      startTimeFormatted?: string;
      /** Formatted end date of the event (empty for TBD schedules or when end date is hidden). */
      endDateFormatted?: string;
      /** Formatted end time of the event (empty for TBD schedules or when end date is hidden). */
      endTimeFormatted?: string;
  }
  enum EventStatus$3 {
      /** Event is public and scheduled to start */
      SCHEDULED = "SCHEDULED",
      /** Event has started */
      STARTED = "STARTED",
      /** Event has ended */
      ENDED = "ENDED",
      /** Event was canceled */
      CANCELED = "CANCELED",
      /** Event is not public and needs to be published */
      DRAFT = "DRAFT"
  }
  interface Registration$2 {
      /** Event type. */
      type?: EventType$2;
      /** Event registration status. */
      status?: RegistrationStatus$2;
      /** RSVP collection details. */
      rsvpCollection?: RsvpCollection$2;
      /** Ticketing details. */
      ticketing?: Ticketing$2;
      /** External registration details. */
      external?: ExternalEvent$2;
      /** Types of users allowed to register. */
      restrictedTo?: VisitorType$2;
      /** Initial event type which was set when creating an event. */
      initialType?: EventType$2;
  }
  enum EventType$2 {
      /** Type not available for this request fieldset */
      NA_EVENT_TYPE = "NA_EVENT_TYPE",
      /** Registration via RSVP */
      RSVP = "RSVP",
      /** Registration via ticket purchase */
      TICKETS = "TICKETS",
      /** External registration */
      EXTERNAL = "EXTERNAL",
      /** Registration not available */
      NO_REGISTRATION = "NO_REGISTRATION"
  }
  enum RegistrationStatus$2 {
      /** Registration status is not applicable */
      NA_REGISTRATION_STATUS = "NA_REGISTRATION_STATUS",
      /** Registration to event is closed */
      CLOSED = "CLOSED",
      /** Registration to event is closed manually */
      CLOSED_MANUALLY = "CLOSED_MANUALLY",
      /** Registration is open via RSVP */
      OPEN_RSVP = "OPEN_RSVP",
      /** Registration to event waitlist is open via RSVP */
      OPEN_RSVP_WAITLIST = "OPEN_RSVP_WAITLIST",
      /** Registration is open via ticket purchase */
      OPEN_TICKETS = "OPEN_TICKETS",
      /** Registration is open via external URL */
      OPEN_EXTERNAL = "OPEN_EXTERNAL",
      /** Registration will be open via RSVP */
      SCHEDULED_RSVP = "SCHEDULED_RSVP"
  }
  interface RsvpCollection$2 {
      /** RSVP collection configuration. */
      config?: RsvpCollectionConfig$2;
  }
  interface RsvpCollectionConfig$2 {
      /** Defines the supported RSVP statuses. */
      rsvpStatusOptions?: RsvpStatusOptions$2;
      /**
       * Total guest limit available to register to the event.
       * Additional guests per RSVP are counted towards total guests.
       */
      limit?: number | null;
      /** Whether a waitlist is opened when total guest limit is reached, allowing guests to create RSVP with WAITING RSVP status. */
      waitlist?: boolean;
      /** Registration start timestamp. */
      startDate?: Date;
      /** Registration end timestamp. */
      endDate?: Date;
  }
  enum RsvpStatusOptions$2 {
      /** Only YES RSVP status is available for RSVP registration */
      YES_ONLY = "YES_ONLY",
      /** YES and NO RSVP status options are available for the registration */
      YES_AND_NO = "YES_AND_NO"
  }
  interface Ticketing$2 {
      /** Deprecated. */
      lowestPrice?: string | null;
      /** Deprecated. */
      highestPrice?: string | null;
      /** Currency used in event transactions. */
      currency?: string | null;
      /** Ticketing configuration. */
      config?: TicketingConfig$2;
      /**
       * Price of lowest priced ticket.
       * @readonly
       */
      lowestTicketPrice?: Money$5;
      /**
       * Price of highest priced ticket.
       * @readonly
       */
      highestTicketPrice?: Money$5;
      /**
       * Formatted price of lowest priced ticket.
       * @readonly
       */
      lowestTicketPriceFormatted?: string | null;
      /**
       * Formatted price of highest priced ticket.
       * @readonly
       */
      highestTicketPriceFormatted?: string | null;
      /**
       * Whether all tickets are sold for this event.
       * @readonly
       */
      soldOut?: boolean | null;
  }
  interface TicketingConfig$2 {
      /** Whether the form must be filled out separately for each ticket. */
      guestAssignedTickets?: boolean;
      /** Tax configuration. */
      taxConfig?: TaxConfig$2;
      /** Limit of tickets that can be purchased per order, default 20. */
      ticketLimitPerOrder?: number;
      /**
       * App Id for external ticket stock management.
       * By default tickets stock is defined in TicketDefinition object.
       * If defined then limitation from TicketDefinition is ignored.
       * @internal
       */
      stockManagerAppId?: string | null;
      /** Duration for which the tickets being bought are reserved. */
      reservationDurationInMinutes?: number | null;
  }
  interface TaxConfig$2 {
      /** Tax application settings. */
      type?: TaxType$3;
      /** Tax name. */
      name?: string | null;
      /** Tax rate (e.g.,`21.55`). */
      rate?: string | null;
      /** Applies taxes for donations, default true. */
      appliesToDonations?: boolean | null;
  }
  enum TaxType$3 {
      /** Tax is included in the ticket price */
      INCLUDED = "INCLUDED",
      /** Tax is added to the order at the checkout */
      ADDED = "ADDED",
      /** Tax is added to the final total at the checkout */
      ADDED_AT_CHECKOUT = "ADDED_AT_CHECKOUT"
  }
  interface Money$5 {
      /** *Deprecated:** Use `value` instead. */
      amount?: string;
      /** ISO 4217 format of the currency i.e. `USD`. */
      currency?: string;
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string | null;
  }
  interface ExternalEvent$2 {
      /** External event registration URL. */
      registration?: string;
  }
  enum VisitorType$2 {
      /** Site visitor (including member) */
      VISITOR = "VISITOR",
      /** Site member */
      MEMBER = "MEMBER",
      /** Site visitor or member */
      VISITOR_OR_MEMBER = "VISITOR_OR_MEMBER"
  }
  interface CalendarLinks$4 {
      /** "Add to Google calendar" URL. */
      google?: string;
      /** "Download ICS calendar file" URL. */
      ics?: string;
  }
  /** Site URL components */
  interface SiteUrl$2 {
      /**
       * Base URL. For premium sites, this will be the domain.
       * For free sites, this would be site URL (e.g `mysite.wixsite.com/mysite`)
       */
      base?: string;
      /** The path to that page - e.g `/my-events/weekly-meetup-2` */
      path?: string;
  }
  interface Dashboard$4 {
      /** Guest RSVP summary. */
      rsvpSummary?: RsvpSummary$2;
      /**
       * Summary of revenue and tickets sold.
       * (Archived orders are not included).
       */
      ticketingSummary?: TicketingSummary$2;
  }
  interface RsvpSummary$2 {
      /** Total number of RSVPs. */
      total?: number;
      /** Number of RSVPs with status `YES`. */
      yes?: number;
      /** Number of RSVPs with status `NO`. */
      no?: number;
      /** Number of RSVPs in waitlist. */
      waitlist?: number;
  }
  interface TicketingSummary$2 {
      /** Number of tickets sold. */
      tickets?: number;
      /**
       * Total revenue, excluding fees.
       * (taxes and payment provider fees are not deducted.)
       */
      revenue?: Money$5;
      /** Whether currency is locked and cannot be changed (generally occurs after the first order in the specified currency has been created). */
      currencyLocked?: boolean;
      /** Number of orders placed. */
      orders?: number;
      /** Total balance of confirmed transactions. */
      totalSales?: Money$5;
  }
  interface GuestListConfig$2 {
      /** Whether members can see other members attending the event (defaults to true). */
      publicGuestList?: boolean;
  }
  interface Feed$2 {
      /** Event discussion feed token. */
      token?: string;
  }
  interface OnlineConferencing$2 {
      config?: OnlineConferencingConfig$2;
      session?: OnlineConferencingSession$2;
      /**
       * Configured conferencing provider name.
       * @internal
       * @readonly
       */
      providerName?: string;
  }
  interface OnlineConferencingConfig$2 {
      /**
       * Whether online conferencing is enabled (not supported for TBD schedules).
       * When enabled, links to join conferencing are generated and provided to guests.
       */
      enabled?: boolean;
      /** Conferencing provider ID. */
      providerId?: string | null;
      /** Conference type */
      conferenceType?: ConferenceType$2;
  }
  enum ConferenceType$2 {
      /** Everyone in the meeting can publish and subscribe video and audio. */
      MEETING = "MEETING",
      /** Guests can only subscribe to video and audio. */
      WEBINAR = "WEBINAR"
  }
  interface OnlineConferencingSession$2 {
      /**
       * Link for event host to start the online conference session.
       * @readonly
       */
      hostLink?: string;
      /**
       * Link for guests to join the online conference session.
       * @readonly
       */
      guestLink?: string;
      /**
       * The password required to join online conferencing session (when relevant).
       * @readonly
       */
      password?: string | null;
      /**
       * Indicates that session was created successfully on providers side.
       * @readonly
       */
      sessionCreated?: boolean | null;
      /**
       * Unique session id
       * @readonly
       */
      sessionId?: string | null;
  }
  interface SeoSettings$2 {
      /** URL slug */
      slug?: string;
      /** Advanced SEO data */
      advancedSeoData?: SeoSchema$2;
      /**
       * Hidden from SEO Site Map
       * @readonly
       */
      hidden?: boolean | null;
  }
  /**
   * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
   * The search engines use this information for ranking purposes, or to display snippets in the search results.
   * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
   */
  interface SeoSchema$2 {
      /** SEO tag information. */
      tags?: Tag$2[];
      /** SEO general settings. */
      settings?: Settings$2;
  }
  interface Keyword$2 {
      /** Keyword value. */
      term?: string;
      /** Whether the keyword is the main focus keyword. */
      isMain?: boolean;
  }
  interface Tag$2 {
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
  interface Settings$2 {
      /**
       * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
       *
       *
       * Default: `false` (Auto Redirect is enabled.)
       */
      preventAutoRedirect?: boolean;
      /** User-selected keyword terms for a specific page. */
      keywords?: Keyword$2[];
  }
  interface Agenda$2 {
      /** Whether the schedule is enabled for the event. */
      enabled?: boolean;
      /**
       * Agenda page URL.
       * @readonly
       */
      pageUrl?: SiteUrl$2;
  }
  interface Category$2 {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category name. */
      name?: string;
      /**
       * Category creation timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Assigned events count. Deleted events are excluded.
       * @internal
       * @readonly
       */
      assignedEventsCount?: number | null;
      /**
       * Assigned and assigned draft event counts.
       * @readonly
       */
      counts?: CategoryCounts$2;
      /**
       * Category state. Default - MANUAL.
       * WIX_EVENTS.MANAGE_AUTO_CATEGORIES permission is required to use other states.
       * Field will be ignored on update requests.
       */
      states?: State$5[];
      /**
       * Optionally client defined external ID.
       * @internal
       */
      externalId?: string | null;
  }
  interface CategoryCounts$2 {
      /** Assigned events count. Deleted events are excluded. */
      assignedEventsCount?: number | null;
      /** Assigned draft events count. */
      assignedDraftEventsCount?: number | null;
  }
  enum State$5 {
      /** Created manually by the user. */
      MANUAL = "MANUAL",
      /** Created automatically. */
      AUTO = "AUTO",
      /** Created when publishing recurring events. */
      RECURRING_EVENT = "RECURRING_EVENT",
      /** Category is hidden. */
      HIDDEN = "HIDDEN",
      /** Category is used to store component events. */
      COMPONENT = "COMPONENT"
  }
  interface EventDisplaySettings$2 {
      /** Whether event details button is hidden. Only available for events with no registration. */
      hideEventDetailsButton?: boolean | null;
  }
  interface LabellingSettings$2 {
      /**
       * @internal
       * @readonly
       */
      assignedContactsLegacyLabelId?: string | null;
      /**
       * @internal
       * @readonly
       */
      assignedContactsLabelDeleted?: boolean | null;
  }
  interface DiscardDraftRequest {
      /** Event ID to which the form belongs. */
      eventId: string;
  }
  interface DiscardDraftResponse {
  }
  interface DomainEvent$3 extends DomainEventBodyOneOf$3 {
      createdEvent?: EntityCreatedEvent$3;
      updatedEvent?: EntityUpdatedEvent$3;
      deletedEvent?: EntityDeletedEvent$3;
      actionEvent?: ActionEvent$3;
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
  interface DomainEventBodyOneOf$3 {
      createdEvent?: EntityCreatedEvent$3;
      updatedEvent?: EntityUpdatedEvent$3;
      deletedEvent?: EntityDeletedEvent$3;
      actionEvent?: ActionEvent$3;
  }
  interface EntityCreatedEvent$3 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$3 {
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
  interface EntityDeletedEvent$3 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$3 {
      bodyAsJson?: string;
  }
  interface MessageEnvelope$7 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$7;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$7 extends IdentificationDataIdOneOf$7 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$7;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$7 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$7 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Retrieves an event registration form (both the draft and published versions).
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which the form belongs.
   * @param options - Optional fields.
   * @returns Currently published event form.
   * Published form is visible to site visitors.
   */
  function getForm(eventId: string, options?: GetFormOptions): Promise<Form$2>;
  interface GetFormOptions {
      /**
       * Whether to return additional data with the response.
       * @internal
       */
      fields?: RequestedFields$1[];
  }
  /**
   * Adds an input control to the draft form.
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which the form belongs.
   * @param options - Optional fields.
   * @adminMethod
   */
  function addControl(eventId: string, options?: AddControlOptions): Promise<AddControlResponse>;
  interface AddControlOptions extends AddControlRequestControlOneOf {
      /** Phone number input control. */
      phone?: PhoneControl;
      /** Single-line or full address input control. */
      address?: AddressControl;
      /** Day, month, year date input control. */
      date?: DateControl;
      /** Additional guests input control. */
      additionalGuests?: AdditionalGuestsControl;
      /** Single-choice dropdown style input control. */
      dropdown?: DropdownControl;
      /**
       * Deprecated. Use radioButton.
       * @internal
       */
      radio?: RadioButtonControl;
      /** Multiple-choice checkbox style input control. */
      checkbox?: CheckboxControl;
      /** Free-form text input control. */
      text?: TextControl;
      /** Single-choice radio button style input control. */
      radioButton?: RadioButtonControl;
  }
  /**
   * Updates an existing input control in the draft form.
   * @public
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.id
   * @param options - Optional fields.
   * @param identifiers - Identifies what form to update.
   * @adminMethod
   */
  function updateControl(identifiers: UpdateControlIdentifiers, options?: UpdateControlOptions): Promise<UpdateControlResponse>;
  interface UpdateControlIdentifiers extends UpdateControlRequestControlOneOf {
      /** Event ID to which the form belongs. */
      eventId: string;
      /** Unique input control ID. */
      _id: string;
  }
  interface UpdateControlOptions extends UpdateControlRequestControlOneOf {
      /** Index used to sort input controls in ascending order. */
      orderIndex?: number;
      /** Phone number input control. */
      phone?: PhoneControl;
      /** Single-line or full address input control. */
      address?: AddressControl;
      /** Day, month, year date input control. */
      date?: DateControl;
      /** Additional guests input control. */
      additionalGuests?: AdditionalGuestsControl;
      /** Single-choice dropdown style input control. */
      dropdown?: DropdownControl;
      /**
       * Single-choice radio style input control.
       * @internal
       */
      radio?: RadioButtonControl;
      /** Multiple-choice checkbox style input control. */
      checkbox?: CheckboxControl;
      /** Free-form text input control. */
      text?: TextControl;
      /** Main guest name input control. */
      name?: NameControl;
      /** Main guest email input control. */
      email?: EmailControl;
      /** Single-choice radio style input control. */
      radioButton?: RadioButtonControl;
  }
  /**
   * Deletes an input control from the draft form.
   * @public
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.id
   * @param identifiers - Identifies what form to delete.
   * @adminMethod
   */
  function deleteControl(identifiers: DeleteControlIdentifiers): Promise<DeleteControlResponse>;
  interface DeleteControlIdentifiers {
      /** Event ID to which the form belongs. */
      eventId: string;
      /** Unique input control ID. */
      _id: string;
  }
  /**
   * Updates draft form messages, as displayed in the Wix UI before, during, and after the registration flow.
   * Configurable messages include form titles, response labels, "thank you" messages, and call-to-action texts.
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which the form belongs.
   * @param options - Optional fields.
   * @adminMethod
   */
  function updateMessages(eventId: string, options?: UpdateMessagesOptions): Promise<UpdateMessagesResponse>;
  interface UpdateMessagesOptions {
      /**
       * Set of field paths, specifying which parts of this resource to update.
       * When fields are empty, request is interpreted as full update.
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
      /** Set of configured form messages. */
      messages?: FormMessages$2;
  }
  /**
   * Publishes the draft form.
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which the form belongs.
   * @adminMethod
   */
  function publishDraft(eventId: string): Promise<PublishDraftResponse>;
  /**
   * Clears all changes to the draft form.
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which the form belongs.
   * @adminMethod
   */
  function discardDraft(eventId: string): Promise<void>;
  
  type eventsV1Form_universal_d_FormInputControlAdded = FormInputControlAdded;
  type eventsV1Form_universal_d_FormInputControlUpdated = FormInputControlUpdated;
  type eventsV1Form_universal_d_FormInputControlDeleted = FormInputControlDeleted;
  type eventsV1Form_universal_d_GetFormRequest = GetFormRequest;
  type eventsV1Form_universal_d_GetFormResponse = GetFormResponse;
  type eventsV1Form_universal_d_AddControlRequest = AddControlRequest;
  type eventsV1Form_universal_d_AddControlRequestControlOneOf = AddControlRequestControlOneOf;
  type eventsV1Form_universal_d_PhoneControl = PhoneControl;
  type eventsV1Form_universal_d_AddressControl = AddressControl;
  type eventsV1Form_universal_d_AddressControlLabels = AddressControlLabels;
  type eventsV1Form_universal_d_DateControl = DateControl;
  type eventsV1Form_universal_d_AdditionalGuestsControl = AdditionalGuestsControl;
  type eventsV1Form_universal_d_Labels = Labels;
  type eventsV1Form_universal_d_DropdownControl = DropdownControl;
  type eventsV1Form_universal_d_RadioButtonControl = RadioButtonControl;
  type eventsV1Form_universal_d_CheckboxControl = CheckboxControl;
  type eventsV1Form_universal_d_TextControl = TextControl;
  type eventsV1Form_universal_d_AddControlResponse = AddControlResponse;
  type eventsV1Form_universal_d_UpdateControlRequest = UpdateControlRequest;
  type eventsV1Form_universal_d_UpdateControlRequestControlOneOf = UpdateControlRequestControlOneOf;
  type eventsV1Form_universal_d_NameControl = NameControl;
  type eventsV1Form_universal_d_NameControlLabels = NameControlLabels;
  type eventsV1Form_universal_d_EmailControl = EmailControl;
  type eventsV1Form_universal_d_UpdateControlResponse = UpdateControlResponse;
  type eventsV1Form_universal_d_DeleteControlRequest = DeleteControlRequest;
  type eventsV1Form_universal_d_DeleteControlResponse = DeleteControlResponse;
  type eventsV1Form_universal_d_UpdateMessagesRequest = UpdateMessagesRequest;
  type eventsV1Form_universal_d_UpdateMessagesResponse = UpdateMessagesResponse;
  type eventsV1Form_universal_d_PublishDraftRequest = PublishDraftRequest;
  type eventsV1Form_universal_d_PublishDraftResponse = PublishDraftResponse;
  type eventsV1Form_universal_d_DiscardDraftRequest = DiscardDraftRequest;
  type eventsV1Form_universal_d_DiscardDraftResponse = DiscardDraftResponse;
  const eventsV1Form_universal_d_getForm: typeof getForm;
  type eventsV1Form_universal_d_GetFormOptions = GetFormOptions;
  const eventsV1Form_universal_d_addControl: typeof addControl;
  type eventsV1Form_universal_d_AddControlOptions = AddControlOptions;
  const eventsV1Form_universal_d_updateControl: typeof updateControl;
  type eventsV1Form_universal_d_UpdateControlIdentifiers = UpdateControlIdentifiers;
  type eventsV1Form_universal_d_UpdateControlOptions = UpdateControlOptions;
  const eventsV1Form_universal_d_deleteControl: typeof deleteControl;
  type eventsV1Form_universal_d_DeleteControlIdentifiers = DeleteControlIdentifiers;
  const eventsV1Form_universal_d_updateMessages: typeof updateMessages;
  type eventsV1Form_universal_d_UpdateMessagesOptions = UpdateMessagesOptions;
  const eventsV1Form_universal_d_publishDraft: typeof publishDraft;
  const eventsV1Form_universal_d_discardDraft: typeof discardDraft;
  namespace eventsV1Form_universal_d {
    export {
      Form$2 as Form,
      InputControl$2 as InputControl,
      InputControlType$2 as InputControlType,
      Input$2 as Input,
      ValueType$2 as ValueType,
      OptionSelection$2 as OptionSelection,
      OptionSelectionSelectedOptionOneOf$2 as OptionSelectionSelectedOptionOneOf,
      Label$2 as Label,
      FormMessages$2 as FormMessages,
      RsvpFormMessages$2 as RsvpFormMessages,
      PositiveResponseConfirmation$2 as PositiveResponseConfirmation,
      NegativeResponseConfirmation$2 as NegativeResponseConfirmation,
      Positive$2 as Positive,
      Negative$2 as Negative,
      CheckoutFormMessages$2 as CheckoutFormMessages,
      ResponseConfirmation$2 as ResponseConfirmation,
      RegistrationClosedMessages$2 as RegistrationClosedMessages,
      TicketsUnavailableMessages$2 as TicketsUnavailableMessages,
      eventsV1Form_universal_d_FormInputControlAdded as FormInputControlAdded,
      eventsV1Form_universal_d_FormInputControlUpdated as FormInputControlUpdated,
      eventsV1Form_universal_d_FormInputControlDeleted as FormInputControlDeleted,
      eventsV1Form_universal_d_GetFormRequest as GetFormRequest,
      RequestedFields$1 as RequestedFields,
      eventsV1Form_universal_d_GetFormResponse as GetFormResponse,
      eventsV1Form_universal_d_AddControlRequest as AddControlRequest,
      eventsV1Form_universal_d_AddControlRequestControlOneOf as AddControlRequestControlOneOf,
      eventsV1Form_universal_d_PhoneControl as PhoneControl,
      eventsV1Form_universal_d_AddressControl as AddressControl,
      eventsV1Form_universal_d_AddressControlLabels as AddressControlLabels,
      eventsV1Form_universal_d_DateControl as DateControl,
      eventsV1Form_universal_d_AdditionalGuestsControl as AdditionalGuestsControl,
      eventsV1Form_universal_d_Labels as Labels,
      eventsV1Form_universal_d_DropdownControl as DropdownControl,
      eventsV1Form_universal_d_RadioButtonControl as RadioButtonControl,
      eventsV1Form_universal_d_CheckboxControl as CheckboxControl,
      eventsV1Form_universal_d_TextControl as TextControl,
      eventsV1Form_universal_d_AddControlResponse as AddControlResponse,
      eventsV1Form_universal_d_UpdateControlRequest as UpdateControlRequest,
      eventsV1Form_universal_d_UpdateControlRequestControlOneOf as UpdateControlRequestControlOneOf,
      eventsV1Form_universal_d_NameControl as NameControl,
      eventsV1Form_universal_d_NameControlLabels as NameControlLabels,
      eventsV1Form_universal_d_EmailControl as EmailControl,
      eventsV1Form_universal_d_UpdateControlResponse as UpdateControlResponse,
      eventsV1Form_universal_d_DeleteControlRequest as DeleteControlRequest,
      eventsV1Form_universal_d_DeleteControlResponse as DeleteControlResponse,
      eventsV1Form_universal_d_UpdateMessagesRequest as UpdateMessagesRequest,
      eventsV1Form_universal_d_UpdateMessagesResponse as UpdateMessagesResponse,
      eventsV1Form_universal_d_PublishDraftRequest as PublishDraftRequest,
      eventsV1Form_universal_d_PublishDraftResponse as PublishDraftResponse,
      EventUpdated$2 as EventUpdated,
      Location$3 as Location,
      MapCoordinates$3 as MapCoordinates,
      LocationType$3 as LocationType,
      Address$6 as Address,
      AddressStreetOneOf$6 as AddressStreetOneOf,
      StreetAddress$6 as StreetAddress,
      AddressLocation$6 as AddressLocation,
      Subdivision$6 as Subdivision,
      SubdivisionType$6 as SubdivisionType,
      ScheduleConfig$3 as ScheduleConfig,
      Recurrences$3 as Recurrences,
      Occurrence$3 as Occurrence,
      Status$3 as Status,
      Event$2 as Event,
      Scheduling$2 as Scheduling,
      EventStatus$3 as EventStatus,
      Registration$2 as Registration,
      EventType$2 as EventType,
      RegistrationStatus$2 as RegistrationStatus,
      RsvpCollection$2 as RsvpCollection,
      RsvpCollectionConfig$2 as RsvpCollectionConfig,
      RsvpStatusOptions$2 as RsvpStatusOptions,
      Ticketing$2 as Ticketing,
      TicketingConfig$2 as TicketingConfig,
      TaxConfig$2 as TaxConfig,
      TaxType$3 as TaxType,
      Money$5 as Money,
      ExternalEvent$2 as ExternalEvent,
      VisitorType$2 as VisitorType,
      CalendarLinks$4 as CalendarLinks,
      SiteUrl$2 as SiteUrl,
      Dashboard$4 as Dashboard,
      RsvpSummary$2 as RsvpSummary,
      TicketingSummary$2 as TicketingSummary,
      GuestListConfig$2 as GuestListConfig,
      Feed$2 as Feed,
      OnlineConferencing$2 as OnlineConferencing,
      OnlineConferencingConfig$2 as OnlineConferencingConfig,
      ConferenceType$2 as ConferenceType,
      OnlineConferencingSession$2 as OnlineConferencingSession,
      SeoSettings$2 as SeoSettings,
      SeoSchema$2 as SeoSchema,
      Keyword$2 as Keyword,
      Tag$2 as Tag,
      Settings$2 as Settings,
      Agenda$2 as Agenda,
      Category$2 as Category,
      CategoryCounts$2 as CategoryCounts,
      State$5 as State,
      EventDisplaySettings$2 as EventDisplaySettings,
      LabellingSettings$2 as LabellingSettings,
      eventsV1Form_universal_d_DiscardDraftRequest as DiscardDraftRequest,
      eventsV1Form_universal_d_DiscardDraftResponse as DiscardDraftResponse,
      DomainEvent$3 as DomainEvent,
      DomainEventBodyOneOf$3 as DomainEventBodyOneOf,
      EntityCreatedEvent$3 as EntityCreatedEvent,
      EntityUpdatedEvent$3 as EntityUpdatedEvent,
      EntityDeletedEvent$3 as EntityDeletedEvent,
      ActionEvent$3 as ActionEvent,
      MessageEnvelope$7 as MessageEnvelope,
      IdentificationData$7 as IdentificationData,
      IdentificationDataIdOneOf$7 as IdentificationDataIdOneOf,
      WebhookIdentityType$7 as WebhookIdentityType,
      eventsV1Form_universal_d_getForm as getForm,
      eventsV1Form_universal_d_GetFormOptions as GetFormOptions,
      eventsV1Form_universal_d_addControl as addControl,
      eventsV1Form_universal_d_AddControlOptions as AddControlOptions,
      eventsV1Form_universal_d_updateControl as updateControl,
      eventsV1Form_universal_d_UpdateControlIdentifiers as UpdateControlIdentifiers,
      eventsV1Form_universal_d_UpdateControlOptions as UpdateControlOptions,
      eventsV1Form_universal_d_deleteControl as deleteControl,
      eventsV1Form_universal_d_DeleteControlIdentifiers as DeleteControlIdentifiers,
      eventsV1Form_universal_d_updateMessages as updateMessages,
      eventsV1Form_universal_d_UpdateMessagesOptions as UpdateMessagesOptions,
      eventsV1Form_universal_d_publishDraft as publishDraft,
      eventsV1Form_universal_d_discardDraft as discardDraft,
    };
  }
  
  interface Order {
      /** Unique order number. */
      orderNumber?: string;
      /** Reservation ID. */
      reservationId?: string;
      /**
       * Payment snapshot ID. Empty for the `FREE` order.
       * @readonly
       */
      snapshotId?: string;
      /** Event ID to which the order belongs. */
      eventId?: string;
      /** Contact ID of buyer (resolved using email address). */
      contactId?: string;
      /** Buyer member ID, if applicable. */
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
      checkoutForm?: FormResponse$2;
      /** Whether the order is confirmed (triggered once payment gateway processes the payment and funds reach the merchant's account). */
      confirmed?: boolean;
      /**
       * Order status. Possible values:
       * - `FREE`: The order is confirmed, no payment is required.
       * - `PENDING`: The order was paid, but the payment gateway suspended the payment.
       * - `PAID`: The order is paid.
       * - `OFFLINE_PENDING`: The order is confirmed but has to be paid in cash and the status is manually updated to `PAID`.
       * - `INITIATED`: The order is awaiting for payment.
       * - `CANCELED`: The order is canceled.
       * - `DECLINED`: The order is payment is declined.
       */
      status?: OrderStatus$1;
      /** Payment method used for purchase, e.g., "payPal", "creditCard", etc. */
      method?: string;
      /** Quantity of ordered tickets. */
      ticketsQuantity?: number;
      /** Total order price. */
      totalPrice?: Money$4;
      /** Ticket PDF URL. */
      ticketsPdf?: string;
      /** Tickets (generated after payment). */
      tickets?: TicketingTicket$1[];
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
      channel?: ChannelType$1;
      /**
       * Language in which Order was created.
       * @internal
       */
      language?: string | null;
      /**
       * Locale in which Order was created.
       * @internal
       */
      locale?: string | null;
      /**
       * Order updated timestamp.
       * @readonly
       */
      updated?: Date;
  }
  interface FormResponse$2 {
      /** Input fields for a checkout form. */
      inputValues?: InputValue$2[];
  }
  interface InputValue$2 {
      /** Input field name. */
      inputName?: string;
      /** Input field value. */
      value?: string;
      /** Multiple input field values. */
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
      address?: FormattedAddress$2;
  }
  interface FormattedAddress$2 {
      /** One line address representation. */
      formatted?: string;
      /** Address components (optional). */
      address?: Address$5;
  }
  /** Physical address */
  interface Address$5 extends AddressStreetOneOf$5 {
      /** Street name and number. */
      streetAddress?: StreetAddress$5;
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
      location?: AddressLocation$5;
  }
  /** @oneof */
  interface AddressStreetOneOf$5 {
      /** Street name and number. */
      streetAddress?: StreetAddress$5;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
  }
  interface StreetAddress$5 {
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
  interface AddressLocation$5 {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Subdivision$5 {
      /** Short subdivision code. */
      code?: string;
      /** Subdivision full name. */
      name?: string;
      /**
       * Subdivision level
       * @internal
       */
      type?: SubdivisionType$5;
      /**
       * Free text description of subdivision type.
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType$5 {
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
  enum OrderStatus$1 {
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
  interface Money$4 {
      /** *Deprecated:** Use `value` instead. */
      amount?: string;
      /** Currency code. Must be a valid [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code (e.g., USD). */
      currency?: string;
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string | null;
  }
  interface TicketingTicket$1 {
      /** Unique ticket number (issued automatically). */
      ticketNumber?: string;
      /** Associated order number. */
      orderNumber?: string;
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
      /** Ticket name. */
      name?: string;
      /** Ticket price. */
      price?: Money$4;
      /**
       * Whether the ticket requires payment.
       * @readonly
       */
      free?: boolean;
      /** Event and ticket policies. */
      policy?: string;
      /** Deprecated, use `check_in_url`. */
      qrCode?: string;
      /** Ticket check-in. */
      checkIn?: CheckIn$2;
      /** Associated order status. */
      orderStatus?: OrderStatus$1;
      /** Whether order and ticket are visible in order list. */
      orderArchived?: boolean;
      /** Buyer full name. */
      orderFullName?: string;
      /** Guest full name. */
      guestFullName?: string | null;
      /** Guest personal details. */
      guestDetails?: GuestDetails$1;
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
       * Shown as a QR code image in PDF.
       * Format: `https://www.wixevents.com/check-in/{ticket number},{event id}`.
       * Example: `https://www.wixevents.com/check-in/AAAA-AAAA-BB021,00000000-0000-0000-0000-000000000000`
       */
      checkInUrl?: string;
      /** URL for ticket PDF download. */
      ticketPdfUrl?: string;
      /** Associated order checkout channel type */
      channel?: ChannelType$1;
      /**
       * URL to download ticket in the `.pkpass` format for Apple Wallet
       * @readonly
       */
      walletPassUrl?: string;
      /**
       * Additional ticket details.
       * @internal
       * @readonly
       */
      ticketDetails?: TicketDetails$1;
  }
  interface CheckIn$2 {
      /** Time of check-in */
      created?: Date;
  }
  interface GuestDetails$1 {
      /** Whether ticket belongs to assigned guest. */
      guestAssigned?: boolean;
      /** Guest first name. */
      firstName?: string | null;
      /** Guest last name. */
      lastName?: string | null;
      /** Guest email. */
      email?: string | null;
      /** Full form response. */
      form?: FormResponse$2;
      /** Contact ID associated with this guest. */
      contactId?: string | null;
  }
  enum ChannelType$1 {
      /** Buyer created order via one of the online channels (website, mobile app, etc.) */
      ONLINE = "ONLINE",
      /** Order created and money collected by the sales person */
      OFFLINE_POS = "OFFLINE_POS"
  }
  interface TicketDetails$1 {
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
       * @readonly
       */
      pricingOptionName?: string | null;
  }
  interface Invoice {
      /** Items listed in the invoice. */
      items?: Item[];
      /** Total cart amount. */
      total?: Money$4;
      /** Discount applied to a cart. */
      discount?: Discount;
      /** Tax applied to cart. */
      tax?: Tax;
      /** Total cart amount before discount, tax, and fees. */
      subTotal?: Money$4;
      /**
       * Total amount of cart after discount, tax, and fees.
       * Grand total is calculated in the following order:
       * 1. Total prices of all items in the cart are calculated.
       * 2. Discount is subtracted from the cart (if applicable).
       * 3. Tax is added (if applicable).
       * 4. Wix service fee is added.
       */
      grandTotal?: Money$4;
      /**
       * Fees applied to the cart.
       * @readonly
       */
      fees?: Fee[];
      /** Total revenue, excluding fees. (Taxes and payment provider fees are not deducted). */
      revenue?: Money$4;
      /** Invoice preview URL. This value is only returned when the order is paid. */
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
      price?: Money$4;
      /** Total price for line items. It's calculated by multiplying price and item quantity. */
      total?: Money$4;
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
      amount?: Money$4;
      /** Total sum after the discount. */
      afterDiscount?: Money$4;
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
      /** Coupon discount. */
      coupon?: CouponDiscount;
      /** Pricing plan discount. */
      paidPlan?: PaidPlanDiscount;
      /** Total discount amount. */
      amount?: Money$4;
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
      /** Discount by percentage applied to tickets. */
      percentDiscount?: PercentDiscount;
      /** Name of pricing plan. */
      name?: string;
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
      type?: TaxType$2;
      /**
       * Tax name.
       * @readonly
       */
      name?: string;
      /** Tax rate. */
      rate?: string;
      /** Taxable amount. */
      taxable?: Money$4;
      /** Total tax amount. */
      amount?: Money$4;
  }
  enum TaxType$2 {
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
      type?: FeeType$1;
      /**
       * Fee rate.
       * @readonly
       */
      rate?: string;
      /** Total amount of fee charges. */
      amount?: Money$4;
  }
  enum FeeName {
      /** Wix service fee charges applied to the line item. */
      WIX_FEE = "WIX_FEE"
  }
  enum FeeType$1 {
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
      /** Event ID to which the order belongs. */
      eventId?: string;
      /** Unique order number. */
      orderNumber?: string;
      /** Contact ID associated with this order */
      contactId?: string;
      /** Member ID associated with this order. */
      memberId?: string | null;
      /**
       * Order created timestamp.
       * @readonly
       */
      created?: Date;
      /**
       * Order updated timestamp.
       * @readonly
       */
      updated?: Date;
      /** Whether order was anonymized by GDPR delete. */
      anonymized?: boolean;
      /** Order type. */
      orderType?: OrderType;
      /** Whether event was triggered by GDPR delete request. */
      triggeredByAnonymizeRequest?: boolean;
      /** Tickets generated after payment. */
      tickets?: Ticket$1[];
  }
  enum OrderType {
      /** Buyer form is used for all tickets */
      UNASSIGNED_TICKETS = "UNASSIGNED_TICKETS",
      /** Each order ticket has its own form */
      ASSIGNED_TICKETS = "ASSIGNED_TICKETS"
  }
  interface Ticket$1 {
      /** Unique issued ticket number. */
      ticketNumber?: string;
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
      /** Ticket check-in. */
      checkIn?: CheckIn$2;
      /** Ticket price. */
      price?: Money$4;
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
      form?: FormResponse$2;
      /** Ticket name. */
      ticketName?: string;
      /** Anonymized tickets no longer contain personally identifiable information (PII). */
      anonymized?: boolean;
      /** URL and password to online conference */
      onlineConferencingLogin?: OnlineConferencingLogin$2;
  }
  interface OnlineConferencingLogin$2 {
      /**
       * Link URL to the online conference.
       * @readonly
       */
      link?: string;
      /**
       * Password for the online conference.
       * @readonly
       */
      password?: string | null;
  }
  interface ListOrdersRequest {
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /**
       * Predefined sets of fields to return.
       * - `TICKETS`: Returns `tickets`.
       * - `DETAILS`: Returns `reservationId`, `snapshotId`, `created`, `firstName`, `lastName`, `confirmed`, `status`, `method`, `ticketsQuantity`, `totalPrice`, `ticketsPdf`, `archived`, `fullName`.
       * - `FORM` : Returns `checkoutForm`.
       * - `INVOICE`: Returns `invoice`.
       *
       * Default: If `fieldset` is not included in the request,  `orderNumber`, `eventId`, `contactId`, `memberId`, `anonymized`, `fullyCheckedIn` are returned.
       *
       */
      fieldset?: OrderFieldset[];
      /**
       * Order status. Possible values:
       * - `FREE`: The order is confirmed, no payment is required.
       * - `PENDING`: The order was paid, but the payment gateway suspended the payment.
       * - `PAID`: The order is paid.
       * - `OFFLINE_PENDING`: The order is confirmed but has to be paid in cash and the status is manually updated to `PAID`.
       * - `INITIATED`: The order is awaiting for payment.
       * - `CANCELED`: The order is canceled.
       * - `DECLINED`: The order is payment is declined.
       */
      status?: OrderStatus$1[];
      /**
       * Deprecated: use tag = CONFIRMED
       * @internal
       */
      confirmed?: boolean | null;
      /** Event ID to which the order belongs. */
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
      /** Field facets, */
      facet?: string[];
      /**
       * Deprecated: use tag = ARCHIVED / NON_ARCHIVED
       * @internal
       */
      archived?: boolean | null;
      /** Search filter. You can search `fullName`, `email` and `orderNumber`. */
      searchPhrase?: string;
      /** Event creator ID. */
      eventCreatorId?: string[];
      /**
       * Deprecated: use tag = FULLY_CHECKED_IN / NOT_FULLY_CHECKED_IN
       * @internal
       */
      fullyCheckedIn?: boolean | null;
      /**
       * Sort order.
       * Default: `created:asc`.
       */
      sort?: string;
      /** Order tag. */
      tag?: OrderTag[];
      /** Guest contact IDs. */
      contactId?: string[];
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
      facets?: Record<string, FacetCounts$5>;
      /** Order data enriched facets. */
      orderFacets?: OrderFacets;
  }
  interface FacetCounts$5 {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface OrderFacets {
      /** Filter facets. */
      facets?: Record<string, OrderFacetCounts>;
  }
  interface OrderFacetCounts {
      /** Facet counts aggregated per value */
      counts?: Record<string, Counts$2>;
  }
  interface Counts$2 {
      /** Number or orders */
      count?: number;
      /** Number of tickets within orders */
      tickets?: number;
      /** Number of tickets with check-in */
      ticketsCheckIn?: number;
  }
  interface GetOrderRequest {
      /** Event ID to which the order belongs. */
      eventId: string;
      /** Unique order number. */
      orderNumber: string;
      /**
       * Predefined sets of fields to return.
       * - `TICKETS`: Returns `tickets`.
       * - `DETAILS`: Returns `reservationId`, `snapshotId`, `created`, `firstName`, `lastName`, `confirmed`, `status`, `method`, `ticketsQuantity`, `totalPrice`, `ticketsPdf`, `archived`, `fullName`.
       * - `FORM` : Returns `checkoutForm`.
       * - `INVOICE`: Returns `invoice`.
       *
       * Default: If `fieldset` is not included in the request,  `orderNumber`, `eventId`, `contactId`, `memberId`, `anonymized`, `fullyCheckedIn` are returned.
       *
       */
      fieldset?: OrderFieldset[];
  }
  interface GetOrderResponse {
      /** Requested order. */
      order?: Order;
      /** "Add to calendar" links. */
      calendarLinks?: CalendarLinks$3;
  }
  interface CalendarLinks$3 {
      /** "Add to Google calendar" URL. */
      google?: string;
      /** "Download ICS calendar file" URL. */
      ics?: string;
  }
  interface UpdateOrderRequest {
      /** Event ID to which the order belongs. */
      eventId: string;
      /** Unique order number. */
      orderNumber: string;
      /**
       * Set of field paths to update.
       * @internal
       */
      fields?: string[];
      /** Checkout form. */
      checkoutForm?: FormResponse$2;
      /** Whether order is archived. */
      archived?: boolean;
      /**
       * Only used in tests.
       * @internal
       */
      expires?: Date;
  }
  interface UpdateOrderResponse {
      /** Updated order. */
      order?: Order;
  }
  interface OrderUpdated$1 {
      /** Order updated timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when Order initiated */
      language?: string | null;
      /** Locale in which Order was created. */
      locale?: string | null;
      /** Event ID to which the order belongs. */
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
      /**
       * Order updated timestamp.
       * @readonly
       */
      updated?: Date;
      /** Buyer first name. */
      firstName?: string;
      /** Buyer last name. */
      lastName?: string;
      /** Buyer email. */
      email?: string;
      /** Checkout form response. */
      checkoutForm?: FormResponse$2;
      /** Whether order is confirmed - occurs once payment gateway processes the payment and funds reach merchant's account. */
      confirmed?: boolean;
      /**
       * Order status. Possible values:
       * - `FREE`: The order is confirmed, no payment is required.
       * - `PENDING`: The order was paid, but the payment gateway suspended the payment.
       * - `PAID`: The order is paid.
       * - `OFFLINE_PENDING`: The order is confirmed but has to be paid in cash and the status is manually updated to `PAID`.
       * - `INITIATED`: The order is awaiting for payment.
       * - `CANCELED`: The order is canceled.
       * - `DECLINED`: The order is payment is declined.
       */
      status?: OrderStatus$1;
      /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
      method?: string | null;
      /** Tickets generated after payment. */
      tickets?: Ticket$1[];
      /** Whether order was archived and excluded from results. */
      archived?: boolean;
      /** Whether event was triggered by GDPR delete request. */
      triggeredByAnonymizeRequest?: boolean;
  }
  interface BulkUpdateOrdersRequest {
      /** Event ID to which the order belongs. */
      eventId: string;
      orderNumber?: string[];
      /**
       * Set of fields to update.
       * @internal
       */
      fields?: string[];
      /** Whether to archive the order. */
      archived?: boolean;
  }
  interface BulkUpdateOrdersResponse {
      /** Updated orders. */
      orders?: Order[];
  }
  interface ConfirmOrderRequest {
      /** Event ID to which the order belongs. */
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
      total?: Money$4;
      /** Total number of confirmed orders. */
      totalOrders?: number;
      /** Total number of tickets purchased. */
      totalTickets?: number;
      /** Total revenue, excluding fees (taxes and payment provider fees are not deducted). */
      revenue?: Money$4;
  }
  interface GetInvoicePreviewRequest {
      /** Event ID to which the invoice belongs. */
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
      paymentAmount?: Money$4;
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
      refundedAmount?: Money$4;
  }
  interface MessageEnvelope$6 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$6;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$6 extends IdentificationDataIdOneOf$6 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$6;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$6 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$6 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface OrderConfirmed {
      /** Order confirmation timestamp in ISO UTC. */
      timestamp?: Date;
      /** Site language when Order initiated */
      language?: string | null;
      /** Notifications silenced for this domain event. */
      silent?: boolean | null;
      /** Locale in which Order was created. */
      locale?: string | null;
      /** Event ID to which the order belongs. */
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
      checkoutForm?: FormResponse$2;
      /**
       * Order status. Possible values:
       * - `FREE`: The order is confirmed, no payment is required.
       * - `PENDING`: The order was paid, but the payment gateway suspended the payment.
       * - `PAID`: The order is paid.
       * - `OFFLINE_PENDING`: The order is confirmed but has to be paid in cash and the status is manually updated to `PAID`.
       * - `INITIATED`: The order is awaiting for payment.
       * - `CANCELED`: The order is canceled.
       * - `DECLINED`: The order is payment is declined.
       */
      status?: OrderStatus$1;
      /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
      method?: string | null;
      /** Tickets (generated after payment). */
      tickets?: Ticket$1[];
      /** Invoice. */
      invoice?: Invoice;
      /** Reservation ID associated with this order. */
      reservationId?: string;
  }
  interface OrderPaid {
      /** Order paid timestamp in ISO UTC. */
      timestamp?: Date;
      /** Site language when Order initiated */
      language?: string | null;
      /** Notifications silenced for this domain event. */
      silent?: boolean | null;
      /** Locale in which Order was created. */
      locale?: string | null;
      /** Event ID to which the order belongs. */
      eventId?: string;
      /** Unique order number. */
      orderNumber?: string;
      /** Reservation ID associated with this order. */
      reservationId?: string;
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
      checkoutForm?: FormResponse$2;
      /** Order status. */
      status?: OrderStatus$1;
      /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
      method?: string | null;
      /** Tickets (generated after payment). */
      tickets?: Ticket$1[];
      /** Invoice. */
      invoice?: Invoice;
  }
  interface ReservationCreated$1 {
      /** Reservation created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID to which the reservation belongs. */
      eventId?: string;
      /**
       * Reservation ID.
       * Can be used to retrieve a reservation invoice.
       */
      reservationId?: string;
      /** Reservation expiration timestamp. */
      expires?: Date;
      /** Reservation status. */
      status?: ReservationStatus$1;
      /** Reservation ticket quantities. */
      quantities?: TicketQuantity$1[];
      /** Reservation update timestamp. */
      _updatedDate?: Date;
      /** Reservation counts. */
      counts?: ReservationCount$1[];
  }
  enum ReservationStatus$1 {
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
  interface TicketQuantity$1 {
      /** Ticket definition ID. */
      ticketDefinitionId?: string | null;
      /** Quantity. */
      quantity?: number | null;
      /** Quantity update timestamp. */
      _updatedDate?: Date;
  }
  interface ReservationCount$1 {
      /** Reservation Count snapshot timestamp. */
      timestamp?: Date;
      /** Ticket Definition ID. */
      ticketDefinitionId?: string;
      /** Confirmed reservation count. */
      confirmedCount?: number;
      /** Pending reservation count. */
      pendingCount?: number;
      /** True if paid ticket reservation exist. */
      paidExists?: boolean;
  }
  interface ReservationUpdated$1 {
      /** Reservation updated timestamp. */
      timestamp?: Date;
      /** Event ID to which the reservation belongs. */
      eventId?: string;
      /**
       * Reservation ID.
       * Can be used to retrieve a reservation invoice.
       */
      reservationId?: string;
      /** Reservation status. */
      status?: ReservationStatus$1;
      /** Reservation expiration timestamp. */
      expires?: Date;
      /** Reservation ticket quantities. */
      quantities?: TicketQuantity$1[];
      /** Reservation update timestamp. */
      _updatedDate?: Date;
      /** Reservation counts. */
      counts?: ReservationCount$1[];
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
       * Sort order.
       * Default: `created:asc`.
       */
      sort?: string;
      /**
       * Only used in tests.
       * @internal
       */
      overrideRequestTime?: Date;
      state?: State$4[];
  }
  enum State$4 {
      INCLUDE_HIDDEN_NOT_ON_SALE = "INCLUDE_HIDDEN_NOT_ON_SALE"
  }
  interface ListAvailableTicketsResponse {
      /** Ticket definitions meta data. */
      metaData?: ResponseMetaData$1;
      /** Ticket definitions. */
      definitions?: TicketDefinition$2[];
  }
  interface ResponseMetaData$1 {
      /** Number of items in the response. */
      count?: number;
      /** Offset of items. */
      offset?: number;
      /** Total number of matching items. */
      total?: number;
  }
  interface TicketDefinition$2 {
      /** Ticket definition ID. */
      _id?: string;
      /** Ticket price. */
      price?: Money$4;
      /** Whether the ticket is free (read only). */
      free?: boolean;
      /** Ticket name. */
      name?: string;
      /** Ticket description. */
      description?: string;
      /** Limit of tickets that can be purchased per checkout. If tickets are unlimited in the definition, the limit per checkout is 20 tickets. */
      limitPerCheckout?: number;
      /** Custom sort index. */
      orderIndex?: number;
      /** Event and ticket policies. */
      policy?: string;
      /** Sensitive dashboard data. */
      dashboard?: Dashboard$3;
      /** Event ID associated with the ticket. */
      eventId?: string;
      /**
       * Configuration of the fixed-rate Wix service fee that is applied at checkout to each ticket sold.
       * @readonly
       */
      wixFeeConfig?: WixFeeConfig$1;
      /** Ticket sale period. */
      salePeriod?: TicketSalePeriod$1;
      /**
       * Ticket sale status.
       * @readonly
       */
      saleStatus?: TicketSaleStatus$1;
      /** Ticket state. */
      state?: State$4[];
      /** Ticket pricing. */
      pricing?: TicketPricing$1;
  }
  interface Dashboard$3 {
      /** Whether ticket is hidden and cannot be sold. */
      hidden?: boolean;
      /** Number of tickets sold and reserved. */
      sold?: number;
      /** Whether the ticket has limited quantity. */
      limited?: boolean;
      /** Ticket limit. `NULL` if the tickets are unlimited. */
      quantity?: number | null;
      /** Number of unsold tickets. `NULL` if the tickets are unlimited. */
      unsold?: number | null;
      /** Number of tickets sold. */
      ticketsSold?: number;
      /** Number of tickets reserved. */
      ticketsReserved?: number;
  }
  interface WixFeeConfig$1 {
      /** Fee calculation method. */
      type?: FeeType$1;
  }
  interface TicketSalePeriod$1 {
      /** Ticket sale start timestamp. */
      startDate?: Date;
      /** Ticket sale end timestamp. */
      endDate?: Date;
      /** Whether to hide this ticket if it's not on sale */
      hideNotOnSale?: boolean;
  }
  enum TicketSaleStatus$1 {
      /** Ticket sale is scheduled to start */
      SALE_SCHEDULED = "SALE_SCHEDULED",
      /** Ticket sale has started */
      SALE_STARTED = "SALE_STARTED",
      /** Ticket sale has ended */
      SALE_ENDED = "SALE_ENDED"
  }
  interface TicketPricing$1 extends TicketPricingPriceOneOf$1 {
      /** Ticket price which is read only. */
      fixedPrice?: Money$4;
      /** Min price per ticket, customizable. */
      minPrice?: Money$4;
      /** Ticket pricing options. */
      pricingOptions?: PricingOptions$2;
      /**
       * Ticket pricing type.
       * @readonly
       */
      pricingType?: Type$3;
  }
  /** @oneof */
  interface TicketPricingPriceOneOf$1 {
      /** Ticket price which is read only. */
      fixedPrice?: Money$4;
      /** Min price per ticket, customizable. */
      minPrice?: Money$4;
      /** Ticket pricing options. */
      pricingOptions?: PricingOptions$2;
  }
  interface PricingOptions$2 {
      /** Multiple ticket pricing options. */
      options?: PricingOption$1[];
  }
  interface PricingOption$1 {
      /** Ticket pricing option ID. */
      _id?: string | null;
      /** Ticket pricing option name. */
      name?: string | null;
      /** Ticket pricing option price. */
      price?: Money$4;
  }
  enum Type$3 {
      STANDARD = "STANDARD",
      DONATION = "DONATION"
  }
  interface QueryAvailableTicketsRequest {
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** Ticket definition. */
      filter?: Record<string, any> | null;
      fieldset?: TicketDefinitionFieldset$1[];
      /**
       * Sort order.
       * Default: `created:asc`.
       */
      sort?: string;
  }
  enum TicketDefinitionFieldset$1 {
      /** Include policy in the response. */
      POLICY = "POLICY",
      /** Include dashboard in the response. */
      DASHBOARD = "DASHBOARD"
  }
  interface QueryAvailableTicketsResponse {
      /** Ticket definitions meta data. */
      metaData?: ResponseMetaData$1;
      /** Ticket definitions. */
      definitions?: TicketDefinition$2[];
  }
  interface CreateReservationRequest {
      /** Event ID to which the reservation belongs. */
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
      /** Override the predefined ticket price. */
      priceOverride?: string | null;
      /** Optional ticket details */
      ticketDetails?: TicketDetails$1[];
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
      /** An object containing ticket information. */
      ticket?: TicketDefinition$2;
      /** Optional ticket details. */
      ticketDetails?: TicketDetails$1[];
  }
  interface CancelReservationRequest {
      /** Event ID to which the reservation belongs. */
      eventId: string;
      /** Reservation ID. */
      _id: string;
  }
  interface CancelReservationResponse {
  }
  interface GetInvoiceRequest {
      /** Event ID to which the invoice belongs. */
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
      /** Reservation expiration time. */
      expires?: Date;
      /**
       * Reservation status. Possible values:
       * - `RESERVATION_PENDING`: The reservation is pending confirmation. It will expire after a certain amount of time.
       * - `RESERVATION_CONFIRMED`: The reservation is confirmed and will not expire.
       * - `RESERVATION_CANCELED`: The reservation is canceled because it's not paid.
       * - `RESERVATION_CANCELED_MANUALLY`: The reservation is canceled manually by the buyer.
       * - `RESERVATION_EXPIRED`: The reservation has expired.
       */
      reservationStatus?: ReservationStatus$1;
      /** Whether this reservation is already used in checkout. */
      reservationOccupied?: boolean;
      /** Ticket reservations. */
      reservations?: TicketReservation[];
  }
  interface DiscountErrors {
      /** Object containing error information. */
      error?: Error[];
  }
  interface Error {
      /** A code identifying the error type. */
      code?: string;
  }
  interface CheckoutRequest {
      /** Event ID to which the checkout belongs. */
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
      guests?: Guest$1[];
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
  interface Guest$1 {
      /** Specific guest info. */
      form?: FormResponse$2;
  }
  interface CheckoutOptions {
      /** Whether to ignore settings to notify contacts or users. */
      silent?: boolean;
      /** Whether the payment is to be done in person between the buyer and the merchant. When true, the completed order is created with status OFFLINE_PENDING and inPerson payment method. */
      payInPerson?: boolean;
      /** Whether to ignore form validation. */
      ignoreFormValidation?: boolean;
      /**
       * URL which overrides default payment redirect URL.
       * @internal
       */
      paymentRedirectUrl?: string | null;
      /** Marks payment as already paid */
      markAsPaid?: boolean | null;
  }
  interface CheckoutResponse {
      /** Created order. */
      order?: Order;
      /**
       * Order expiration time.
       * **Note:** Only applicable to orders with the `INITIATED` status.
       */
      expires?: Date;
      /** Ticket reservations. */
      reservations?: TicketReservation[];
      /** Order page URL. */
      orderPageUrl?: string | null;
  }
  interface OrderInitiated {
      /** Order initiated timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when Order initiated */
      language?: string | null;
      /** Locale in which Order was created. */
      locale?: string | null;
      /** Event ID to which the order belongs. */
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
      /**
       * Order updated timestamp.
       * @readonly
       */
      updated?: Date;
      /** Guest first name. */
      firstName?: string;
      /** Guest last name. */
      lastName?: string;
      /** Guest email address. */
      email?: string;
      /** Checkout form response. */
      checkoutForm?: FormResponse$2;
      /**
       * Order status. Possible values:
       * - `FREE`: The order is confirmed, no payment is required.
       * - `PENDING`: The order was paid, but the payment gateway suspended the payment.
       * - `PAID`: The order is paid.
       * - `OFFLINE_PENDING`: The order is confirmed but has to be paid in cash and the status is manually updated to `PAID`.
       * - `INITIATED`: The order is awaiting for payment.
       * - `CANCELED`: The order is canceled.
       * - `DECLINED`: The order is payment is declined.
       */
      status?: OrderStatus$1;
      /** Invoice. */
      invoice?: Invoice;
      /** Reservation ID associated with this order. */
      reservationId?: string;
      /** Order was marked as paid. */
      markedAsPaid?: boolean | null;
  }
  interface UpdateCheckoutRequest {
      /** Event ID to which the checkout belongs. */
      eventId: string;
      /** Unique order number. */
      orderNumber: string;
      /** Buyer details. */
      buyer?: Buyer;
      /** Guest details. */
      guests?: Guest$1[];
      /** Member ID (if empty - no site member is associated to this order). */
      memberId?: string | null;
      /** Discount to apply on the invoice. */
      discount?: DiscountRequest;
      /** Benefit granted by the pricing plan. */
      paidPlanBenefit?: PaidPlanBenefit;
      /**
       * Payment details id
       * @internal
       */
      paymentDetailsId?: string | null;
  }
  interface UpdateCheckoutResponse {
      /** Updated order. */
      order?: Order;
      /** Order page URL. */
      orderPageUrl?: string | null;
      /**
       * Payment response token.
       * @internal
       */
      chargeToken?: string | null;
      /**
       * Order page URL.
       * @internal
       */
      orderPageUrls?: OrderPageUrls;
  }
  interface OrderPageUrls {
      /** Success order page URL. */
      success?: string | null;
      /** Pending order page URL. */
      pending?: string | null;
      /** Canceled order page URL. */
      canceled?: string | null;
      /** Error order page URL. */
      error?: string | null;
  }
  interface PosCheckoutRequest {
      /** Event ID to which the checkout belongs. */
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
   * Retrieves a list of orders, including ticket data.
   * @public
   * @param options - An object representing the available options for retrieving a list of orders.
   * @adminMethod
   */
  function listOrders(options?: ListOrdersOptions): Promise<ListOrdersResponse>;
  interface ListOrdersOptions {
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /**
       * Predefined sets of fields to return.
       * - `TICKETS`: Returns `tickets`.
       * - `DETAILS`: Returns `reservationId`, `snapshotId`, `created`, `firstName`, `lastName`, `confirmed`, `status`, `method`, `ticketsQuantity`, `totalPrice`, `ticketsPdf`, `archived`, `fullName`.
       * - `FORM` : Returns `checkoutForm`.
       * - `INVOICE`: Returns `invoice`.
       *
       * Default: If `fieldset` is not included in the request,  `orderNumber`, `eventId`, `contactId`, `memberId`, `anonymized`, `fullyCheckedIn` are returned.
       */
      fieldset?: OrderFieldset[];
      /**
       * Order status. Possible values:
       * - `FREE`: The order is confirmed, no payment is required.
       * - `PENDING`: The order was paid, but the payment gateway suspended the payment.
       * - `PAID`: The order is paid.
       * - `OFFLINE_PENDING`: The order is confirmed but has to be paid in cash and the status is manually updated to `PAID`.
       * - `INITIATED`: The order is awaiting for payment.
       * - `CANCELED`: The order is canceled.
       * - `DECLINED`: The order is payment is declined.
       */
      status?: OrderStatus$1[];
      /**
       * Deprecated: use tag = CONFIRMED
       * @internal
       */
      confirmed?: boolean | null;
      /** Event ID to which the order belongs. */
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
      /** Field facets. */
      facet?: string[];
      /**
       * Deprecated: use tag = ARCHIVED / NON_ARCHIVED
       * @internal
       */
      archived?: boolean | null;
      /** Search filter. You can search `fullName`, `email` and `orderNumber`. */
      searchPhrase?: string;
      /** Event creator ID. */
      eventCreatorId?: string[];
      /**
       * Deprecated: use tag = FULLY_CHECKED_IN / NOT_FULLY_CHECKED_IN
       * @internal
       */
      fullyCheckedIn?: boolean | null;
      /**
       * Sort order.
       * Default: `created:asc`.
       */
      sort?: string;
      /** Order tag. */
      tag?: OrderTag[];
      /** Guest contact IDs. */
      contactId?: string[];
  }
  /**
   * Retrieves an order, including ticket data.
   * <!--
   * >The fieldsets in this function are restricted and only run if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * -->
   * @public
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.orderNumber
   * @param options - An object representing the available options for getting an order.
   * @param identifiers - An object containing identifiers for the order to be retrieved.
   * @adminMethod
   * @returns Requested order.
   */
  function getOrder(identifiers: GetOrderIdentifiers, options?: GetOrderOptions): Promise<Order>;
  interface GetOrderIdentifiers {
      /** Event ID to which the order belongs. */
      eventId: string;
      /** Unique order number. */
      orderNumber: string;
  }
  interface GetOrderOptions {
      /**
       * Predefined sets of fields to return.
       * - `TICKETS`: Returns `tickets`.
       * - `DETAILS`: Returns `reservationId`, `snapshotId`, `created`, `firstName`, `lastName`, `confirmed`, `status`, `method`, `ticketsQuantity`, `totalPrice`, `ticketsPdf`, `archived`, `fullName`.
       * - `FORM` : Returns `checkoutForm`.
       * - `INVOICE`: Returns `invoice`.
       *
       * Default: If `fieldset` is not included in the request,  `orderNumber`, `eventId`, `contactId`, `memberId`, `anonymized`, `fullyCheckedIn` are returned.
       */
      fieldset?: OrderFieldset[];
  }
  /**
   * Updates an order.
   * @public
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.orderNumber
   * @param options - An object representing the available options for updating an order.
   * @param identifiers - An object containing identifiers for the order to be updated.
   * @adminMethod
   */
  function updateOrder(identifiers: UpdateOrderIdentifiers, options?: UpdateOrderOptions): Promise<UpdateOrderResponse>;
  interface UpdateOrderIdentifiers {
      /** Event ID to which the order belongs. */
      eventId: string;
      /** Unique order number. */
      orderNumber: string;
  }
  interface UpdateOrderOptions {
      /**
       * Set of field paths to update.
       * @internal
       */
      fields?: string[];
      /** Checkout form. */
      checkoutForm?: FormResponse$2;
      /** Whether order is archived. */
      archived?: boolean;
      /**
       * Only used in tests.
       * @internal
       */
      expires?: Date;
  }
  /**
   * Archives multiple orders.
   * @public
   * @requiredField eventId
   * @param options - An object representing the available options for confirming an order.
   * @param eventId - Event ID to which the order belongs.
   * @adminMethod
   */
  function bulkUpdateOrders(eventId: string, options?: BulkUpdateOrdersOptions): Promise<BulkUpdateOrdersResponse>;
  interface BulkUpdateOrdersOptions {
      /** Unique order number. */
      orderNumber?: string[];
      /**
       * Set of fields to update.
       * @internal
       */
      fields?: string[];
      /** Whether to archive the order. */
      archived?: boolean;
  }
  /**
   * Confirms an order.
   *
   *
   * This function changes order status from `INITIATED`, `PENDING`, `OFFLINE_PENDING` to `PAID`.
   * Confirming orders with `INITIATED` or `PENDING` status triggers an email with the tickets to the buyer (and to additional guests, if provided).
   * @public
   * @requiredField eventId
   * @param options - An object representing the available options for confirming an order.
   * @param eventId - Event ID to which the order belongs.
   * @adminMethod
   */
  function confirmOrder(eventId: string, options?: ConfirmOrderOptions): Promise<ConfirmOrderResponse>;
  interface ConfirmOrderOptions {
      /** Order numbers. */
      orderNumber?: string[];
  }
  /**
   * Retrieves a summary of total ticket sales.
   * <!--
   * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * -->
   * @public
   * @param options - An object representing the available options for retrieving a summary of total ticket sales.
   * @adminMethod
   */
  function getSummary(options?: GetSummaryOptions): Promise<GetSummaryResponse>;
  interface GetSummaryOptions {
      /** Event ID. */
      eventId?: string | null;
  }
  /**
   * Returns invoice preview. Works only for PAID orders.
   * @internal
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.orderNumber
   * @adminMethod
   */
  function getInvoicePreview(identifiers: GetInvoicePreviewIdentifiers): Promise<RawHttpResponse>;
  interface GetInvoicePreviewIdentifiers {
      /** Event ID to which the invoice belongs. */
      eventId: string;
      /** Order number. */
      orderNumber: string;
  }
  /**
   * Retrieves checkout details.
   * @public */
  function getCheckoutOptions(): Promise<GetCheckoutOptionsResponse>;
  /**
   * Returns tickets available to reserve.
   * <!--
   * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * -->
   * @public
   * @param options - An object representing the available options for retrieving a list of tickets available for reservation.
   */
  function listAvailableTickets(options?: ListAvailableTicketsOptions): Promise<ListAvailableTicketsResponse>;
  interface ListAvailableTicketsOptions {
      /** Event ID. If not provided, available tickets for all events in the site will be returned. */
      eventId?: string;
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /**
       * Sort order.
       * Default: `created:asc`.
       */
      sort?: string;
      /**
       * Only used in tests.
       * @internal
       */
      overrideRequestTime?: Date;
      state?: State$4[];
  }
  /**
   * Returns tickets available to reserve.
   * <!--
   * > Note: The fieldsets in this function are restricted and only run if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * -->
   * @public
   * @param options - An object representing the available options for retrieving a list of tickets available for reservation.
   */
  function queryAvailableTickets(options?: QueryAvailableTicketsOptions): Promise<QueryAvailableTicketsResponse>;
  interface QueryAvailableTicketsOptions {
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** Ticket definition. */
      filter?: Record<string, any> | null;
      fieldset?: TicketDefinitionFieldset$1[];
      /**
       * Sort order.
       * Default: `created:asc`.
       */
      sort?: string;
  }
  /**
   * Reserves tickets for 20 minutes.
   *
   *
   * Reserved tickets are deducted from ticket stock and cannot be bought by another site visitor.
   * When the reservation expires, the tickets are added back to the stock.
   * @public
   * @requiredField eventId
   * @param options - An object representing the available options for creating a reservation.
   * @param eventId - Event ID to which the reservation belongs.
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
   * <!--
   * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * -->
   * @param _id - Reservation ID.
   * @public
   * @requiredField _id
   * @requiredField eventId
   * @param identifiers - An object containing identifiers for the reservation to be cancelled.
   * @param eventId - Event ID to which the reservation belongs.
   */
  function cancelReservation(_id: string, eventId: string): Promise<void>;
  /**
   * Generates a preview of an invoice, including the given coupon or pricing plan.
   * @param reservationId - Reservation ID.
   * @public
   * @requiredField eventId
   * @requiredField reservationId
   * @param options - An object representing the available options for generating a preview of a reservation invoice.
   * @param identifiers - An object containing identifiers for the reservation invoice preview to be generated.
   * @param eventId - Event ID to which the invoice belongs.
   */
  function getInvoice(reservationId: string, eventId: string, options?: GetInvoiceOptions): Promise<GetInvoiceResponse>;
  interface GetInvoiceOptions {
      /** Optional discount to be applied on the returned invoice. */
      withDiscount?: DiscountRequest;
      /** Optional benefit granted by the pricing plan to be applied on the returned invoice. */
      paidPlanBenefit?: PaidPlanBenefit;
  }
  /**
   * Checkouts the reserved tickets.
   *
   *
   * Creates an order and associates it with a site visitor contact.
   * Guest details are received from the [Registration Form](https://www.wix.com/velo/reference/wix-events-v2/forms/introduction) input fields.
   *
   * There is a possibility to use a separate ready-made Wix checkout form where the user will be redirected from your non-Wix site or a custom ticket picker created with Velo.
   * To build the checkout form path, get your event base URL by using the [`getEvent()`](https://www.wix.com/velo/reference/wix-events-backend/wixevents/getevent) function and add the following path:
   * `/{{EVENT_PAGE_SLUG}}/{{SLUG}}/ticket-form?reservationId={{YOUR_RESERVATION_ID}}`
   *
   * Example:  `https://johndoe.wixsite.com/weddings/event-details/doe-wedding/ticket-form?reservationId=2be6d34a-2a1e-459f-897b-b4a66e73f69a`
   * @public
   * @requiredField eventId
   * @requiredField options.guests.form
   * @param options - An object representing the available options for checking out a reserved ticket.
   * @param eventId - Event ID to which the checkout belongs.
   */
  function checkout(eventId: string, options?: CheckoutOptionsForRequest): Promise<CheckoutResponse>;
  interface CheckoutOptionsForRequest {
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
      guests?: Guest$1[];
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
  /**
   * Updates order and tickets.
   *
   *
   * Only applicable for orders with `INITIATED`, `PENDING`, `OFFLINE_PENDING` statuses.
   * @param orderNumber - Unique order number.
   * @public
   * @requiredField eventId
   * @requiredField orderNumber
   * @param options - An object representing the available options for updating an order and tickets.
   * @param identifiers - An object containing identifiers for the order and tickets to be updated.
   * @param eventId - Event ID to which the checkout belongs.
   */
  function updateCheckout(orderNumber: string, eventId: string, options?: UpdateCheckoutOptions): Promise<UpdateCheckoutResponse>;
  interface UpdateCheckoutOptions {
      /** Buyer details. */
      buyer?: Buyer;
      /** Guest details. */
      guests?: Guest$1[];
      /** Member ID (if empty - no site member is associated to this order). */
      memberId?: string | null;
      /** Discount to apply on the invoice. */
      discount?: DiscountRequest;
      /** Benefit granted by the pricing plan. */
      paidPlanBenefit?: PaidPlanBenefit;
      /**
       * Payment details id
       * @internal
       */
      paymentDetailsId?: string | null;
  }
  /**
   * Creates order with payment details already initiated via Cashier Pay API.
   * @internal
   * @requiredField eventId
   * @requiredField options.reservationId
   * @param eventId - Event ID to which the checkout belongs.
   * @adminMethod
   */
  function posCheckout(eventId: string, options?: PosCheckoutOptions): Promise<PosCheckoutResponse>;
  interface PosCheckoutOptions {
      /** Ticket reservation ID. */
      reservationId: string;
      /**
       * Payment details ID.
       * Not required if reservation total is 0. In this case the order will be created with status Free and no payment.
       */
      paymentDetailsId?: string | null;
  }
  
  type eventsV1Order_universal_d_Order = Order;
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
  type eventsV1Order_universal_d_Fee = Fee;
  type eventsV1Order_universal_d_FeeName = FeeName;
  const eventsV1Order_universal_d_FeeName: typeof FeeName;
  type eventsV1Order_universal_d_PaymentDetails = PaymentDetails;
  type eventsV1Order_universal_d_PaymentTransaction = PaymentTransaction;
  type eventsV1Order_universal_d_OrderDeleted = OrderDeleted;
  type eventsV1Order_universal_d_OrderType = OrderType;
  const eventsV1Order_universal_d_OrderType: typeof OrderType;
  type eventsV1Order_universal_d_ListOrdersRequest = ListOrdersRequest;
  type eventsV1Order_universal_d_OrderFieldset = OrderFieldset;
  const eventsV1Order_universal_d_OrderFieldset: typeof OrderFieldset;
  type eventsV1Order_universal_d_OrderTag = OrderTag;
  const eventsV1Order_universal_d_OrderTag: typeof OrderTag;
  type eventsV1Order_universal_d_ListOrdersResponse = ListOrdersResponse;
  type eventsV1Order_universal_d_OrderFacets = OrderFacets;
  type eventsV1Order_universal_d_OrderFacetCounts = OrderFacetCounts;
  type eventsV1Order_universal_d_GetOrderRequest = GetOrderRequest;
  type eventsV1Order_universal_d_GetOrderResponse = GetOrderResponse;
  type eventsV1Order_universal_d_UpdateOrderRequest = UpdateOrderRequest;
  type eventsV1Order_universal_d_UpdateOrderResponse = UpdateOrderResponse;
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
  type eventsV1Order_universal_d_GetCheckoutOptionsRequest = GetCheckoutOptionsRequest;
  type eventsV1Order_universal_d_GetCheckoutOptionsResponse = GetCheckoutOptionsResponse;
  type eventsV1Order_universal_d_ListAvailableTicketsRequest = ListAvailableTicketsRequest;
  type eventsV1Order_universal_d_ListAvailableTicketsResponse = ListAvailableTicketsResponse;
  type eventsV1Order_universal_d_QueryAvailableTicketsRequest = QueryAvailableTicketsRequest;
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
  type eventsV1Order_universal_d_CheckoutOptions = CheckoutOptions;
  type eventsV1Order_universal_d_CheckoutResponse = CheckoutResponse;
  type eventsV1Order_universal_d_OrderInitiated = OrderInitiated;
  type eventsV1Order_universal_d_UpdateCheckoutRequest = UpdateCheckoutRequest;
  type eventsV1Order_universal_d_UpdateCheckoutResponse = UpdateCheckoutResponse;
  type eventsV1Order_universal_d_OrderPageUrls = OrderPageUrls;
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
  const eventsV1Order_universal_d_getInvoice: typeof getInvoice;
  type eventsV1Order_universal_d_GetInvoiceOptions = GetInvoiceOptions;
  const eventsV1Order_universal_d_checkout: typeof checkout;
  type eventsV1Order_universal_d_CheckoutOptionsForRequest = CheckoutOptionsForRequest;
  const eventsV1Order_universal_d_updateCheckout: typeof updateCheckout;
  type eventsV1Order_universal_d_UpdateCheckoutOptions = UpdateCheckoutOptions;
  const eventsV1Order_universal_d_posCheckout: typeof posCheckout;
  type eventsV1Order_universal_d_PosCheckoutOptions = PosCheckoutOptions;
  namespace eventsV1Order_universal_d {
    export {
      eventsV1Order_universal_d_Order as Order,
      FormResponse$2 as FormResponse,
      InputValue$2 as InputValue,
      FormattedAddress$2 as FormattedAddress,
      Address$5 as Address,
      AddressStreetOneOf$5 as AddressStreetOneOf,
      StreetAddress$5 as StreetAddress,
      AddressLocation$5 as AddressLocation,
      Subdivision$5 as Subdivision,
      SubdivisionType$5 as SubdivisionType,
      OrderStatus$1 as OrderStatus,
      Money$4 as Money,
      TicketingTicket$1 as TicketingTicket,
      CheckIn$2 as CheckIn,
      GuestDetails$1 as GuestDetails,
      ChannelType$1 as ChannelType,
      TicketDetails$1 as TicketDetails,
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
      TaxType$2 as TaxType,
      eventsV1Order_universal_d_Fee as Fee,
      eventsV1Order_universal_d_FeeName as FeeName,
      FeeType$1 as FeeType,
      eventsV1Order_universal_d_PaymentDetails as PaymentDetails,
      eventsV1Order_universal_d_PaymentTransaction as PaymentTransaction,
      eventsV1Order_universal_d_OrderDeleted as OrderDeleted,
      eventsV1Order_universal_d_OrderType as OrderType,
      Ticket$1 as Ticket,
      OnlineConferencingLogin$2 as OnlineConferencingLogin,
      eventsV1Order_universal_d_ListOrdersRequest as ListOrdersRequest,
      eventsV1Order_universal_d_OrderFieldset as OrderFieldset,
      eventsV1Order_universal_d_OrderTag as OrderTag,
      eventsV1Order_universal_d_ListOrdersResponse as ListOrdersResponse,
      FacetCounts$5 as FacetCounts,
      eventsV1Order_universal_d_OrderFacets as OrderFacets,
      eventsV1Order_universal_d_OrderFacetCounts as OrderFacetCounts,
      Counts$2 as Counts,
      eventsV1Order_universal_d_GetOrderRequest as GetOrderRequest,
      eventsV1Order_universal_d_GetOrderResponse as GetOrderResponse,
      CalendarLinks$3 as CalendarLinks,
      eventsV1Order_universal_d_UpdateOrderRequest as UpdateOrderRequest,
      eventsV1Order_universal_d_UpdateOrderResponse as UpdateOrderResponse,
      OrderUpdated$1 as OrderUpdated,
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
      MessageEnvelope$6 as MessageEnvelope,
      IdentificationData$6 as IdentificationData,
      IdentificationDataIdOneOf$6 as IdentificationDataIdOneOf,
      WebhookIdentityType$6 as WebhookIdentityType,
      eventsV1Order_universal_d_OrderConfirmed as OrderConfirmed,
      eventsV1Order_universal_d_OrderPaid as OrderPaid,
      ReservationCreated$1 as ReservationCreated,
      ReservationStatus$1 as ReservationStatus,
      TicketQuantity$1 as TicketQuantity,
      ReservationCount$1 as ReservationCount,
      ReservationUpdated$1 as ReservationUpdated,
      eventsV1Order_universal_d_GetCheckoutOptionsRequest as GetCheckoutOptionsRequest,
      eventsV1Order_universal_d_GetCheckoutOptionsResponse as GetCheckoutOptionsResponse,
      eventsV1Order_universal_d_ListAvailableTicketsRequest as ListAvailableTicketsRequest,
      State$4 as State,
      eventsV1Order_universal_d_ListAvailableTicketsResponse as ListAvailableTicketsResponse,
      ResponseMetaData$1 as ResponseMetaData,
      TicketDefinition$2 as TicketDefinition,
      Dashboard$3 as Dashboard,
      WixFeeConfig$1 as WixFeeConfig,
      TicketSalePeriod$1 as TicketSalePeriod,
      TicketSaleStatus$1 as TicketSaleStatus,
      TicketPricing$1 as TicketPricing,
      TicketPricingPriceOneOf$1 as TicketPricingPriceOneOf,
      PricingOptions$2 as PricingOptions,
      PricingOption$1 as PricingOption,
      Type$3 as Type,
      eventsV1Order_universal_d_QueryAvailableTicketsRequest as QueryAvailableTicketsRequest,
      TicketDefinitionFieldset$1 as TicketDefinitionFieldset,
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
      Guest$1 as Guest,
      eventsV1Order_universal_d_CheckoutOptions as CheckoutOptions,
      eventsV1Order_universal_d_CheckoutResponse as CheckoutResponse,
      eventsV1Order_universal_d_OrderInitiated as OrderInitiated,
      eventsV1Order_universal_d_UpdateCheckoutRequest as UpdateCheckoutRequest,
      eventsV1Order_universal_d_UpdateCheckoutResponse as UpdateCheckoutResponse,
      eventsV1Order_universal_d_OrderPageUrls as OrderPageUrls,
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
      eventsV1Order_universal_d_getInvoice as getInvoice,
      eventsV1Order_universal_d_GetInvoiceOptions as GetInvoiceOptions,
      eventsV1Order_universal_d_checkout as checkout,
      eventsV1Order_universal_d_CheckoutOptionsForRequest as CheckoutOptionsForRequest,
      eventsV1Order_universal_d_updateCheckout as updateCheckout,
      eventsV1Order_universal_d_UpdateCheckoutOptions as UpdateCheckoutOptions,
      eventsV1Order_universal_d_posCheckout as posCheckout,
      eventsV1Order_universal_d_PosCheckoutOptions as PosCheckoutOptions,
    };
  }
  
  interface Rsvp {
      /** RSVP ID. */
      _id?: string;
      /** Event ID to which RSVP belongs. */
      eventId?: string;
      /** Contact ID associated with this RSVP. */
      contactId?: string;
      /** Member ID associated with this RSVP. */
      memberId?: string;
      /** RSVP created timestamp. */
      created?: Date;
      /** RSVP modified timestamp. */
      modified?: Date;
      /** First name. */
      firstName?: string;
      /** Last name. */
      lastName?: string;
      /** Guest email. */
      email?: string;
      /** RSVP form response. */
      rsvpForm?: FormResponse$1;
      /**
       * RSVP response status. Possible values:
       * - `Yes`
       * - `No`
       * - `Waiting`: a guest is in the waitlist.
       */
      status?: RsvpStatus;
      /** Total number of attendees. */
      totalGuests?: number;
      /** List of guests. */
      guests?: Guest[];
      /** Whether RSVP is anonymized by GDPR delete. */
      anonymized?: boolean;
      /**
       * Language in which Rsvp was created.
       * @internal
       * @readonly
       */
      language?: string | null;
      /**
       * Locale in which Rsvp was created.
       * @internal
       * @readonly
       */
      locale?: string | null;
  }
  interface FormResponse$1 {
      /** Input form fields. */
      inputValues?: InputValue$1[];
  }
  interface InputValue$1 {
      /** Form field name. */
      inputName?: string;
      /** Form field value. */
      value?: string;
      /** Multiple form field values. */
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
      address?: FormattedAddress$1;
  }
  interface FormattedAddress$1 {
      /** One line address representation. */
      formatted?: string;
      /** Address components (optional). */
      address?: Address$4;
  }
  /** Physical address */
  interface Address$4 extends AddressStreetOneOf$4 {
      /** Street name and number. */
      streetAddress?: StreetAddress$4;
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
      location?: AddressLocation$4;
  }
  /** @oneof */
  interface AddressStreetOneOf$4 {
      /** Street name and number. */
      streetAddress?: StreetAddress$4;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
  }
  interface StreetAddress$4 {
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
  interface AddressLocation$4 {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Subdivision$4 {
      /** Short subdivision code. */
      code?: string;
      /** Subdivision full name. */
      name?: string;
      /**
       * Subdivision level
       * @internal
       */
      type?: SubdivisionType$4;
      /**
       * Free text description of subdivision type.
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType$4 {
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
  enum RsvpStatus {
      YES = "YES",
      NO = "NO",
      WAITING = "WAITING"
  }
  interface Guest {
      /** Index in the RSVP guest list. */
      index?: number;
      /** Guest full name. */
      fullName?: string;
      /** Guest check-in. */
      checkIn?: CheckIn$1;
      /** Unique guest ID per RSVP. */
      _id?: number;
  }
  interface CheckIn$1 {
      /** Time of check-in */
      created?: Date;
  }
  interface ListRsvpRequest {
      /** Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Number of items to load. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /**
       * Set of fields to return. Possible values:
       * - `DETAILS`: Returns `created`, `modified`, `firstName`, `lastName` fields.
       * - `FORM`: Returns `rsvpForm` field.
       * - `CONTACT_DETAILS`: Returns `email` field.
       */
      fieldset?: RsvpFieldset[];
      /** Event ID to which RSVP belongs. */
      eventId?: string[];
      /** RSVP ID. */
      rsvpId?: string[];
      /**
       * RSVP response status. Possible values:
       * - `Yes`
       * - `No`
       * - `Waiting`: a guest is in the waitlist.
       */
      status?: RsvpStatus[];
      /** Site member ID. */
      memberId?: string[];
      /**
       * Deprecated: use tag = MEMBER
       * @internal
       */
      membersOnly?: boolean;
      /**
       * Facet counts to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      facet?: string[];
      /** Textual search filter - search is performed on "full_name" and "email". */
      searchPhrase?: string;
      /** Event creator id filter, by default any. */
      eventCreatorId?: string[];
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      sort?: string;
      /** Contact ID. */
      contactId?: string[];
      /** RSVP tag */
      tag?: RsvpTag[];
  }
  enum RsvpFieldset {
      /** Include RSVP details: created, modified, first_name, last_name, etc. */
      DETAILS = "DETAILS",
      /** Include rsvp_form. */
      FORM = "FORM",
      /** Include RSVP email. */
      CONTACT_DETAILS = "CONTACT_DETAILS"
  }
  enum RsvpTag {
      /** Return only rsvps with all guests checked-in */
      FULLY_CHECKED_IN = "FULLY_CHECKED_IN",
      /** Return only rsvps with not all guests checked-in */
      NOT_FULLY_CHECKED_IN = "NOT_FULLY_CHECKED_IN",
      /** Return only member rsvp */
      MEMBER = "MEMBER"
  }
  interface ListRsvpResponse {
      /** Total RSVPs matching the given filters. */
      total?: number;
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** RSVP list. */
      rsvps?: Rsvp[];
      /** Facet query result. */
      facets?: Record<string, FacetCounts$4>;
      /** Rsvp data enriched facets. */
      rsvpFacets?: RsvpFacets;
  }
  interface FacetCounts$4 {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface RsvpFacets {
      /** Filter facets. */
      facets?: Record<string, RsvpFacetCounts>;
  }
  interface RsvpFacetCounts {
      /** Facet totals, aggregated per filter. */
      counts?: Record<string, Counts$1>;
  }
  interface Counts$1 {
      /** Number of RSVPs. */
      count?: number;
      /** Number of guests within RSVPs. */
      guests?: number;
      /** Number of guests who have checked-in. */
      guestsCheckIn?: number;
  }
  interface QueryRsvpRequest {
      /** Offset. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Limit. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /**
       * Set of fields to return. Possible values:
       * - `DETAILS`: Returns `created`, `modified`, `firstName`, `lastName` fields.
       * - `FORM`: Returns `rsvpForm` field.
       * - `CONTACT_DETAILS`: Returns `email` field.
       */
      fieldset?: RsvpFieldset[];
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps). */
      filter?: Record<string, any> | null;
      /** Site member ID. */
      memberId?: string[];
      /**
       * Deprecated: use tag = MEMBER
       * @internal
       */
      membersOnly?: boolean;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      facet?: string[];
      /** Textual search filter - search is performed on "guests.full_name". */
      searchPhrase?: string;
      /** Event creator ID. */
      eventCreatorId?: string[];
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      sort?: string;
      /** Contact ID. */
      contactId?: string[];
      /** RSVP tag */
      tag?: RsvpTag[];
  }
  interface QueryRsvpResponse {
      /** Total RSVPs matching the given filters. */
      total?: number;
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** RSVP list. */
      rsvps?: Rsvp[];
      /** Facet query result. */
      facets?: Record<string, FacetCounts$4>;
      /** Rsvp data enriched facets. */
      rsvpFacets?: RsvpFacets;
  }
  interface GetRsvpRequest {
      /** Event ID to which RSVP belongs. */
      eventId?: string;
      /** RSVP ID. */
      rsvpId: string;
      /**
       * Set of fields to return. Possible values:
       * - `DETAILS`: Returns `created`, `modified`, `firstName`, `lastName` fields.
       * - `FORM`: Returns `rsvpForm` field.
       * - `CONTACT_DETAILS`: Returns `email` field.
       */
      fieldset?: RsvpFieldset[];
  }
  interface GetRsvpResponse {
      /** RSVP. */
      rsvp?: Rsvp;
  }
  interface CreateRsvpRequest {
      /** Event ID to which RSVP belongs. */
      eventId?: string;
      /** RSVP form response. */
      form?: FormResponse$1;
      /**
       * RSVP response status. Possible values:
       * - `Yes`
       * - `No`
       * - `Waiting`: a guest is in the waitlist.
       */
      status?: RsvpStatus;
      /** Member ID of the RSVP. */
      memberId?: string | null;
      /**
       * Add RSVP options.
       * **Note:** WIX_EVENTS.MANAGE_RSVP permission is required.
       */
      options?: ModificationOptions;
  }
  interface ModificationOptions {
      /** Whether to ignore notification settings (when hen true, no notifications to contact or user are sent). */
      silent?: boolean;
      /** Whether to create/update regardless of event guest limit. */
      ignoreLimits?: boolean;
      /** Whether to ignore the form validation. */
      ignoreFormValidation?: boolean;
  }
  interface CreateRsvpResponse {
      /** Created RSVP. */
      rsvp?: Rsvp;
      /** "Add to calendar" links. */
      calendarLinks?: CalendarLinks$2;
  }
  interface CalendarLinks$2 {
      /** "Add to Google calendar" URL. */
      google?: string;
      /** "Download ICS calendar file" URL. */
      ics?: string;
  }
  interface RsvpCreated {
      /** RSVP created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when RSVP created */
      language?: string | null;
      /** Notifications silenced for this domain event. */
      silent?: boolean | null;
      /**
       * Locale in which Rsvp was created.
       * @internal
       */
      locale?: string | null;
      /** Event ID to which RSVP belongs. */
      eventId?: string;
      /** RSVP ID. */
      rsvpId?: string;
      /** Contact ID associated with this RSVP. */
      contactId?: string;
      /** Member ID associated with this RSVP. */
      memberId?: string | null;
      /** Guest first name. */
      firstName?: string;
      /** Guest last name. */
      lastName?: string;
      /** Guest email. */
      email?: string;
      /** RSVP form response. */
      rsvpForm?: FormResponse$1;
      /**
       * RSVP response status. Possible values:
       * - `Yes`
       * - `No`
       * - `Waiting`: a guest is in the waitlist.
       */
      status?: RsvpStatus;
      /** List of all guests. */
      guests?: Guest[];
      /** URL and password to online conference */
      onlineConferencingLogin?: OnlineConferencingLogin$1;
  }
  interface OnlineConferencingLogin$1 {
      /**
       * Link URL to the online conference.
       * @readonly
       */
      link?: string;
      /**
       * Password for the online conference.
       * @readonly
       */
      password?: string | null;
  }
  interface UpdateRsvpRequest {
      /** Event ID to which RSVP belongs. */
      eventId: string;
      /** RSVP ID. */
      rsvpId: string;
      /**
       * Set of field paths, specifying which parts of RSVP to update.
       * @internal
       */
      fields: string[];
      /** RSVP form response. */
      rsvpForm?: FormResponse$1;
      /**
       * RSVP response status. Possible values:
       * - `Yes`
       * - `No`
       * - `Waiting`: a guest is in the waitlist.
       */
      status?: RsvpStatus;
      /**
       * Update RSVP options.
       * WIX_EVENTS.MANAGE_RSVP permission is required.
       */
      options?: ModificationOptions;
  }
  interface UpdateRsvpResponse {
      /** Updated RSVP. */
      rsvp?: Rsvp;
  }
  interface RsvpUpdated {
      /** RSVP updated timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when RSVP created */
      language?: string | null;
      /** Locale in which Rsvp was created. */
      locale?: string | null;
      /** Event ID to which RSVP belongs. */
      eventId?: string;
      /** RSVP ID. */
      rsvpId?: string;
      /** Contact ID associated with this RSVP. */
      contactId?: string;
      /** Member ID associated with this RSVP. */
      memberId?: string | null;
      /** RSVP created timestamp. */
      created?: Date;
      /** Guest first name. */
      firstName?: string;
      /** Guest last name. */
      lastName?: string;
      /** Guest email. */
      email?: string;
      /** RSVP form response. */
      rsvpForm?: FormResponse$1;
      /**
       * RSVP response status. Possible values:
       * - `Yes`
       * - `No`
       * - `Waiting`: a guest is in the waitlist.
       */
      status?: RsvpStatus;
      /** List of the guests. */
      guests?: Guest[];
      /** URL and password to online conference */
      onlineConferencingLogin?: OnlineConferencingLogin$1;
      /** Notifications silenced for this domain event. */
      silent?: boolean | null;
  }
  interface BulkUpdateRsvpRequest {
      /** Event ID to which RSVP belongs. */
      eventId: string;
      /** RSVPs to update. */
      rsvpId?: string[];
      /**
       * Set of fields to update.
       * @internal
       */
      fields?: string[];
      /**
       * New RSVP response status. Possible values:
       * - `Yes`
       * - `No`
       * - `Waiting`: a guest is in the waitlist.
       */
      status?: RsvpStatus;
  }
  interface BulkUpdateRsvpResponse {
      /** Updated RSVPs. */
      rsvps?: Rsvp[];
  }
  interface DeleteRsvpRequest {
      /** Event ID to which RSVP belongs. */
      eventId: string;
      /** RSVPs to delete. When not returned, all RSVPs associated with this event are deleted. */
      rsvps?: string[];
  }
  interface DeleteRsvpResponse {
  }
  interface RsvpDeleted {
      /** RSVP deleted timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID to which RSVP belongs. */
      eventId?: string;
      /** RSVP ID. */
      rsvpId?: string;
      /** Contact ID associated with this RSVP. */
      contactId?: string;
      /** Member ID associated with this RSVP. */
      memberId?: string | null;
      /** Whether RSVP was anonymized by GDPR delete. */
      anonymized?: boolean;
  }
  interface CheckInRsvpRequest {
      /** Event ID to which RSVP belongs. */
      eventId: string;
      /** RSVP ID to check-in. */
      rsvpId: string;
      /** Guest IDs to check-in. */
      guestId?: number[];
  }
  interface CheckInRsvpResponse {
      /** Updated RSVP. */
      rsvp?: Rsvp;
  }
  interface DeleteRsvpCheckInRequest {
      /** Event ID to which RSVP belongs. */
      eventId: string;
      /** RSVP ID to delete check-in. */
      rsvpId: string;
      /** Guest IDs to delete check-in. */
      guestId?: number[];
  }
  interface DeleteRsvpCheckInResponse {
      /** Updated RSVP. */
      rsvp?: Rsvp;
  }
  interface MessageEnvelope$5 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$5;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$5 extends IdentificationDataIdOneOf$5 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$5;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$5 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$5 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Retrieves a list of up to 100 RSVPs.
   * @public
   * @param options - Optional fields.
   * @adminMethod
   */
  function listRsvp(options?: ListRsvpOptions): Promise<ListRsvpResponse>;
  interface ListRsvpOptions {
      /** Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Number of items to load. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /**
       * Set of fields to return. Possible values:
       * - `DETAILS`: Returns `created`, `modified`, `firstName`, `lastName` fields.
       * - `FORM`: Returns `rsvpForm` field.
       * - `CONTACT_DETAILS`: Returns `email` field.
       */
      fieldset?: RsvpFieldset[];
      /** Event ID to which RSVP belongs. */
      eventId?: string[];
      /** RSVP ID. */
      rsvpId?: string[];
      /**
       * RSVP response status. Possible values:
       * - `Yes`
       * - `No`
       * - `Waiting`: a guest is in the waitlist.
       */
      status?: RsvpStatus[];
      /** Site member ID. */
      memberId?: string[];
      /**
       * Deprecated: use tag = MEMBER
       * @internal
       */
      membersOnly?: boolean;
      /**
       * Facet counts to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      facet?: string[];
      /** Textual search filter - search is performed on "full_name" and "email". */
      searchPhrase?: string;
      /** Event creator id filter, by default any. */
      eventCreatorId?: string[];
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      sort?: string;
      /** Contact ID. */
      contactId?: string[];
      /** RSVP tag */
      tag?: RsvpTag[];
  }
  /**
   * Retrieves a list of up to 100 RSVPs.
   * @public
   * @param options - Optional fields.
   * @adminMethod
   */
  function queryRsvp(options?: QueryRsvpOptions): Promise<QueryRsvpResponse>;
  interface QueryRsvpOptions {
      /** Offset. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Limit. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /**
       * Set of fields to return. Possible values:
       * - `DETAILS`: Returns `created`, `modified`, `firstName`, `lastName` fields.
       * - `FORM`: Returns `rsvpForm` field.
       * - `CONTACT_DETAILS`: Returns `email` field.
       */
      fieldset?: RsvpFieldset[];
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps). */
      filter?: Record<string, any> | null;
      /** Site member ID. */
      memberId?: string[];
      /**
       * Deprecated: use tag = MEMBER
       * @internal
       */
      membersOnly?: boolean;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      facet?: string[];
      /** Textual search filter - search is performed on "guests.full_name". */
      searchPhrase?: string;
      /** Event creator ID. */
      eventCreatorId?: string[];
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      sort?: string;
      /** Contact ID. */
      contactId?: string[];
      /** RSVP tag */
      tag?: RsvpTag[];
  }
  /**
   * Retrieves an RSVP.
   * @param rsvpId - RSVP ID.
   * @public
   * @requiredField rsvpId
   * @param options - Optional fields.
   * @adminMethod
   * @returns RSVP.
   */
  function getRsvp(rsvpId: string, options?: GetRsvpOptions): Promise<Rsvp>;
  interface GetRsvpOptions {
      /** Event ID to which RSVP belongs. */
      eventId?: string;
      /**
       * Set of fields to return. Possible values:
       * - `DETAILS`: Returns `created`, `modified`, `firstName`, `lastName` fields.
       * - `FORM`: Returns `rsvpForm` field.
       * - `CONTACT_DETAILS`: Returns `email` field.
       */
      fieldset?: RsvpFieldset[];
  }
  /**
   * Creates an RSVP, associated with a contact of the site.
   * @public
   * @param options - Optional fields.
   */
  function createRsvp(options?: CreateRsvpOptions): Promise<CreateRsvpResponse>;
  interface CreateRsvpOptions {
      /** Event ID to which RSVP belongs. */
      eventId?: string;
      /** RSVP form response. */
      form?: FormResponse$1;
      /**
       * RSVP response status. Possible values:
       * - `Yes`
       * - `No`
       * - `Waiting`: a guest is in the waitlist.
       */
      status?: RsvpStatus;
      /** Member ID of the RSVP. */
      memberId?: string | null;
      /**
       * Add RSVP options.
       * **Note:** WIX_EVENTS.MANAGE_RSVP permission is required.
       */
      options?: ModificationOptions;
  }
  /**
   * Updates an RSVP.
   * @param rsvpId - RSVP ID.
   * @public
   * @requiredField eventId
   * @requiredField rsvpId
   * @param eventId - Event ID to which RSVP belongs.
   * @param options - Optional fields.
   * @adminMethod
   */
  function updateRsvp(rsvpId: string, eventId: string, options?: UpdateRsvpOptions): Promise<UpdateRsvpResponse>;
  interface UpdateRsvpOptions {
      /**
       * Set of field paths, specifying which parts of RSVP to update.
       * @internal
       */
      fields: string[];
      /** RSVP form response. */
      rsvpForm?: FormResponse$1;
      /**
       * RSVP response status. Possible values:
       * - `Yes`
       * - `No`
       * - `Waiting`: a guest is in the waitlist.
       */
      status?: RsvpStatus;
      /**
       * Update RSVP options.
       * WIX_EVENTS.MANAGE_RSVP permission is required.
       */
      options?: ModificationOptions;
  }
  /**
   * Updates statuses of multiple RSVPs.
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which RSVP belongs.
   * @param options - Optional fields.
   * @adminMethod
   */
  function bulkUpdateRsvp(eventId: string, options?: BulkUpdateRsvpOptions): Promise<BulkUpdateRsvpResponse>;
  interface BulkUpdateRsvpOptions {
      /** RSVPs to update. */
      rsvpId?: string[];
      /**
       * Set of fields to update.
       * @internal
       */
      fields?: string[];
      /**
       * New RSVP response status. Possible values:
       * - `Yes`
       * - `No`
       * - `Waiting`: a guest is in the waitlist.
       */
      status?: RsvpStatus;
  }
  /**
   * Deletes an RSVP.
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which RSVP belongs.
   * @param options - Optional fields.
   * @adminMethod
   */
  function deleteRsvp(eventId: string, options?: DeleteRsvpOptions): Promise<void>;
  interface DeleteRsvpOptions {
      /** RSVPs to delete. When not defined, all RSVPs associated with this event are deleted. */
      rsvps?: string[];
  }
  /**
   * Checks-in an RSVP.
   * @public
   * @requiredField eventId
   * @requiredField options.rsvpId
   * @param eventId - Event ID to which RSVP belongs.
   * @param options - Optional fields.
   * @adminMethod
   */
  function checkInRsvp(eventId: string, options?: CheckInRsvpOptions): Promise<CheckInRsvpResponse>;
  interface CheckInRsvpOptions {
      /** RSVP ID to check-in. */
      rsvpId: string;
      /** Guest IDs to check-in. */
      guestId?: number[];
  }
  /**
   * Deletes an RSVP check-in.
   * @public
   * @requiredField eventId
   * @requiredField options.rsvpId
   * @param eventId - Event ID to which RSVP belongs.
   * @param options - Optional fields.
   * @adminMethod
   */
  function deleteRsvpCheckIn(eventId: string, options?: DeleteRsvpCheckInOptions): Promise<DeleteRsvpCheckInResponse>;
  interface DeleteRsvpCheckInOptions {
      /** RSVP ID to delete check-in. */
      rsvpId: string;
      /** Guest IDs to delete check-in. */
      guestId?: number[];
  }
  
  type eventsV1Rsvp_universal_d_Rsvp = Rsvp;
  type eventsV1Rsvp_universal_d_RsvpStatus = RsvpStatus;
  const eventsV1Rsvp_universal_d_RsvpStatus: typeof RsvpStatus;
  type eventsV1Rsvp_universal_d_Guest = Guest;
  type eventsV1Rsvp_universal_d_ListRsvpRequest = ListRsvpRequest;
  type eventsV1Rsvp_universal_d_RsvpFieldset = RsvpFieldset;
  const eventsV1Rsvp_universal_d_RsvpFieldset: typeof RsvpFieldset;
  type eventsV1Rsvp_universal_d_RsvpTag = RsvpTag;
  const eventsV1Rsvp_universal_d_RsvpTag: typeof RsvpTag;
  type eventsV1Rsvp_universal_d_ListRsvpResponse = ListRsvpResponse;
  type eventsV1Rsvp_universal_d_RsvpFacets = RsvpFacets;
  type eventsV1Rsvp_universal_d_RsvpFacetCounts = RsvpFacetCounts;
  type eventsV1Rsvp_universal_d_QueryRsvpRequest = QueryRsvpRequest;
  type eventsV1Rsvp_universal_d_QueryRsvpResponse = QueryRsvpResponse;
  type eventsV1Rsvp_universal_d_GetRsvpRequest = GetRsvpRequest;
  type eventsV1Rsvp_universal_d_GetRsvpResponse = GetRsvpResponse;
  type eventsV1Rsvp_universal_d_CreateRsvpRequest = CreateRsvpRequest;
  type eventsV1Rsvp_universal_d_ModificationOptions = ModificationOptions;
  type eventsV1Rsvp_universal_d_CreateRsvpResponse = CreateRsvpResponse;
  type eventsV1Rsvp_universal_d_RsvpCreated = RsvpCreated;
  type eventsV1Rsvp_universal_d_UpdateRsvpRequest = UpdateRsvpRequest;
  type eventsV1Rsvp_universal_d_UpdateRsvpResponse = UpdateRsvpResponse;
  type eventsV1Rsvp_universal_d_RsvpUpdated = RsvpUpdated;
  type eventsV1Rsvp_universal_d_BulkUpdateRsvpRequest = BulkUpdateRsvpRequest;
  type eventsV1Rsvp_universal_d_BulkUpdateRsvpResponse = BulkUpdateRsvpResponse;
  type eventsV1Rsvp_universal_d_DeleteRsvpRequest = DeleteRsvpRequest;
  type eventsV1Rsvp_universal_d_DeleteRsvpResponse = DeleteRsvpResponse;
  type eventsV1Rsvp_universal_d_RsvpDeleted = RsvpDeleted;
  type eventsV1Rsvp_universal_d_CheckInRsvpRequest = CheckInRsvpRequest;
  type eventsV1Rsvp_universal_d_CheckInRsvpResponse = CheckInRsvpResponse;
  type eventsV1Rsvp_universal_d_DeleteRsvpCheckInRequest = DeleteRsvpCheckInRequest;
  type eventsV1Rsvp_universal_d_DeleteRsvpCheckInResponse = DeleteRsvpCheckInResponse;
  const eventsV1Rsvp_universal_d_listRsvp: typeof listRsvp;
  type eventsV1Rsvp_universal_d_ListRsvpOptions = ListRsvpOptions;
  const eventsV1Rsvp_universal_d_queryRsvp: typeof queryRsvp;
  type eventsV1Rsvp_universal_d_QueryRsvpOptions = QueryRsvpOptions;
  const eventsV1Rsvp_universal_d_getRsvp: typeof getRsvp;
  type eventsV1Rsvp_universal_d_GetRsvpOptions = GetRsvpOptions;
  const eventsV1Rsvp_universal_d_createRsvp: typeof createRsvp;
  type eventsV1Rsvp_universal_d_CreateRsvpOptions = CreateRsvpOptions;
  const eventsV1Rsvp_universal_d_updateRsvp: typeof updateRsvp;
  type eventsV1Rsvp_universal_d_UpdateRsvpOptions = UpdateRsvpOptions;
  const eventsV1Rsvp_universal_d_bulkUpdateRsvp: typeof bulkUpdateRsvp;
  type eventsV1Rsvp_universal_d_BulkUpdateRsvpOptions = BulkUpdateRsvpOptions;
  const eventsV1Rsvp_universal_d_deleteRsvp: typeof deleteRsvp;
  type eventsV1Rsvp_universal_d_DeleteRsvpOptions = DeleteRsvpOptions;
  const eventsV1Rsvp_universal_d_checkInRsvp: typeof checkInRsvp;
  type eventsV1Rsvp_universal_d_CheckInRsvpOptions = CheckInRsvpOptions;
  const eventsV1Rsvp_universal_d_deleteRsvpCheckIn: typeof deleteRsvpCheckIn;
  type eventsV1Rsvp_universal_d_DeleteRsvpCheckInOptions = DeleteRsvpCheckInOptions;
  namespace eventsV1Rsvp_universal_d {
    export {
      eventsV1Rsvp_universal_d_Rsvp as Rsvp,
      FormResponse$1 as FormResponse,
      InputValue$1 as InputValue,
      FormattedAddress$1 as FormattedAddress,
      Address$4 as Address,
      AddressStreetOneOf$4 as AddressStreetOneOf,
      StreetAddress$4 as StreetAddress,
      AddressLocation$4 as AddressLocation,
      Subdivision$4 as Subdivision,
      SubdivisionType$4 as SubdivisionType,
      eventsV1Rsvp_universal_d_RsvpStatus as RsvpStatus,
      eventsV1Rsvp_universal_d_Guest as Guest,
      CheckIn$1 as CheckIn,
      eventsV1Rsvp_universal_d_ListRsvpRequest as ListRsvpRequest,
      eventsV1Rsvp_universal_d_RsvpFieldset as RsvpFieldset,
      eventsV1Rsvp_universal_d_RsvpTag as RsvpTag,
      eventsV1Rsvp_universal_d_ListRsvpResponse as ListRsvpResponse,
      FacetCounts$4 as FacetCounts,
      eventsV1Rsvp_universal_d_RsvpFacets as RsvpFacets,
      eventsV1Rsvp_universal_d_RsvpFacetCounts as RsvpFacetCounts,
      Counts$1 as Counts,
      eventsV1Rsvp_universal_d_QueryRsvpRequest as QueryRsvpRequest,
      eventsV1Rsvp_universal_d_QueryRsvpResponse as QueryRsvpResponse,
      eventsV1Rsvp_universal_d_GetRsvpRequest as GetRsvpRequest,
      eventsV1Rsvp_universal_d_GetRsvpResponse as GetRsvpResponse,
      eventsV1Rsvp_universal_d_CreateRsvpRequest as CreateRsvpRequest,
      eventsV1Rsvp_universal_d_ModificationOptions as ModificationOptions,
      eventsV1Rsvp_universal_d_CreateRsvpResponse as CreateRsvpResponse,
      CalendarLinks$2 as CalendarLinks,
      eventsV1Rsvp_universal_d_RsvpCreated as RsvpCreated,
      OnlineConferencingLogin$1 as OnlineConferencingLogin,
      eventsV1Rsvp_universal_d_UpdateRsvpRequest as UpdateRsvpRequest,
      eventsV1Rsvp_universal_d_UpdateRsvpResponse as UpdateRsvpResponse,
      eventsV1Rsvp_universal_d_RsvpUpdated as RsvpUpdated,
      eventsV1Rsvp_universal_d_BulkUpdateRsvpRequest as BulkUpdateRsvpRequest,
      eventsV1Rsvp_universal_d_BulkUpdateRsvpResponse as BulkUpdateRsvpResponse,
      eventsV1Rsvp_universal_d_DeleteRsvpRequest as DeleteRsvpRequest,
      eventsV1Rsvp_universal_d_DeleteRsvpResponse as DeleteRsvpResponse,
      eventsV1Rsvp_universal_d_RsvpDeleted as RsvpDeleted,
      eventsV1Rsvp_universal_d_CheckInRsvpRequest as CheckInRsvpRequest,
      eventsV1Rsvp_universal_d_CheckInRsvpResponse as CheckInRsvpResponse,
      eventsV1Rsvp_universal_d_DeleteRsvpCheckInRequest as DeleteRsvpCheckInRequest,
      eventsV1Rsvp_universal_d_DeleteRsvpCheckInResponse as DeleteRsvpCheckInResponse,
      MessageEnvelope$5 as MessageEnvelope,
      IdentificationData$5 as IdentificationData,
      IdentificationDataIdOneOf$5 as IdentificationDataIdOneOf,
      WebhookIdentityType$5 as WebhookIdentityType,
      eventsV1Rsvp_universal_d_listRsvp as listRsvp,
      eventsV1Rsvp_universal_d_ListRsvpOptions as ListRsvpOptions,
      eventsV1Rsvp_universal_d_queryRsvp as queryRsvp,
      eventsV1Rsvp_universal_d_QueryRsvpOptions as QueryRsvpOptions,
      eventsV1Rsvp_universal_d_getRsvp as getRsvp,
      eventsV1Rsvp_universal_d_GetRsvpOptions as GetRsvpOptions,
      eventsV1Rsvp_universal_d_createRsvp as createRsvp,
      eventsV1Rsvp_universal_d_CreateRsvpOptions as CreateRsvpOptions,
      eventsV1Rsvp_universal_d_updateRsvp as updateRsvp,
      eventsV1Rsvp_universal_d_UpdateRsvpOptions as UpdateRsvpOptions,
      eventsV1Rsvp_universal_d_bulkUpdateRsvp as bulkUpdateRsvp,
      eventsV1Rsvp_universal_d_BulkUpdateRsvpOptions as BulkUpdateRsvpOptions,
      eventsV1Rsvp_universal_d_deleteRsvp as deleteRsvp,
      eventsV1Rsvp_universal_d_DeleteRsvpOptions as DeleteRsvpOptions,
      eventsV1Rsvp_universal_d_checkInRsvp as checkInRsvp,
      eventsV1Rsvp_universal_d_CheckInRsvpOptions as CheckInRsvpOptions,
      eventsV1Rsvp_universal_d_deleteRsvpCheckIn as deleteRsvpCheckIn,
      eventsV1Rsvp_universal_d_DeleteRsvpCheckInOptions as DeleteRsvpCheckInOptions,
    };
  }
  
  interface TicketingTicket {
      /** A unique ticket number which is assigned automatically when creating a ticket. */
      ticketNumber?: string;
      /** Associated order number. */
      orderNumber?: string;
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
      /** Ticket name. */
      name?: string;
      /** Ticket price. */
      price?: Money$3;
      /**
       * Whether ticket requires payment.
       * @readonly
       */
      free?: boolean;
      /** Ticket and event policies. */
      policy?: string;
      /**
       * @internal
       * @internal */
      qrCode?: string;
      /** Ticket check-in. */
      checkIn?: CheckIn;
      /**
       * Associated order status. Possible values:
       * - `FREE`: The order is confirmed, no payment is required.
       * - `PENDING`: The order was paid, but the payment gateway suspended the payment.
       * - `PAID`: The order is paid.
       * - `OFFLINE_PENDING`: The order is confirmed but has to be paid in cash and the status is manually updated to `PAID`.
       * - `INITIATED`: The order is awaiting for payment.
       * - `CANCELED`: The order is canceled.
       * - `DECLINED`: The order is declined.
       */
      orderStatus?: OrderStatus;
      /** Whether order and ticket are visible in order list. */
      orderArchived?: boolean;
      /** Buyer full name. */
      orderFullName?: string;
      /** Guest full name. */
      guestFullName?: string | null;
      /** Guest personal details. */
      guestDetails?: GuestDetails;
      /** Whether the ticket is visible in an order. */
      archived?: boolean;
      /**
       * @internal
       * @internal */
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
       *
       * Format: `https://www.wixevents.com/check-in/{ticket number},{event id}`
       *
       * Example: `https://www.wixevents.com/check-in/AAAA-AAAA-BB021,00000000-0000-0000-0000-000000000000`
       */
      checkInUrl?: string;
      /** URL for ticket PDF download. */
      ticketPdfUrl?: string;
      /** Associated order checkout channel type. */
      channel?: ChannelType;
      /**
       * An URL to download a ticket in the `.pkpass` format for Apple Wallet.
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
  interface Money$3 {
      /** *Deprecated:** Use `value` instead. */
      amount?: string;
      /** Currency in the [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) format. For example, `USD`. */
      currency?: string;
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string | null;
  }
  interface CheckIn {
      /** Time of a ticket check-in. */
      created?: Date;
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
  interface FormResponse {
      /** Form field inputs. */
      inputValues?: InputValue[];
  }
  interface InputValue {
      /** Form field input name. */
      inputName?: string;
      /** Form field value. */
      value?: string;
      /** Form field values. */
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
      address?: Address$3;
  }
  /** Physical address */
  interface Address$3 extends AddressStreetOneOf$3 {
      /** Street name and number. */
      streetAddress?: StreetAddress$3;
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
      location?: AddressLocation$3;
  }
  /** @oneof */
  interface AddressStreetOneOf$3 {
      /** Street name and number. */
      streetAddress?: StreetAddress$3;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
  }
  interface StreetAddress$3 {
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
  interface AddressLocation$3 {
      /** Address latitude. */
      latitude?: number | null;
      /** Address longitude. */
      longitude?: number | null;
  }
  interface Subdivision$3 {
      /** Short subdivision code. */
      code?: string;
      /** Subdivision full name. */
      name?: string;
      /**
       * Subdivision level
       * @internal
       */
      type?: SubdivisionType$3;
      /**
       * Free text description of subdivision type.
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType$3 {
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
       * @readonly
       */
      pricingOptionName?: string | null;
  }
  interface ListTicketsRequest {
      /** Event IDs. */
      eventId: string[];
      /** Offset. See [Pagination](/wix-events-v2/pagination). */
      offset?: number;
      /** Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /**
       * Deprecated, use `sort` instead.
       * Sort order. Defaults to "ticket_number:asc".
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-tickets).
       * @internal
       */
      order?: string;
      /** Order numbers. */
      orderNumber?: string[];
      /** Ticket numbers. */
      ticketNumber?: string[];
      /** Searches in the `orderFullName`, `guestFullName`, and `ticketNumber` fields. */
      searchPhrase?: string;
      /** Order statuses. */
      orderStatus?: OrderStatus[];
      /**
       * Deprecated, use `ORDER_ARCHIVED` / `ORDER_ACTIVE` state filter instead.
       * @internal
       */
      orderArchived?: boolean | null;
      /**
       * Deprecated, use `CHECKED_IN` / `NON_CHECKED_IN` state filter instead.
       * @internal
       */
      checkedIn?: boolean | null;
      /**
       * Predefined sets of fields to return.
       * - `TICKET_DETAILS`: Returns `ticketNumber`, `orderNumber`, `ticketDefinitionId`, `name`, `price`, `free`, `policy`, `qrCode`, `checkIn`, `orderStatus`, `orderArchived`, `archived`, `orderFullName`, `ticketPdf`, `checkInUrl` and `ticketPdfUrl`.
       * - `GUEST_DETAILS`: Returns `guestDetails`.
       * - `GUEST_FORM`: Returns `guestDetails.form`.
       *
       * Default: If a fieldset is not included in the request, returns only the `memberId` and `anonymized` fields.
       */
      fieldset?: TicketFieldset[];
      /**
       * Ticket states. Possible values:
       * - `ORDER_ARCHIVED`: Returns tickets of the archived orders.
       * - `ORDER_ACTIVE`: Returns tickets of the non-archived orders.
       * - `TICKET_ARCHIVED`: Returns archived tickets.
       * - `TICKET_ACTIVE`: Returns non-archived tickets.
       * - `CHECKED_IN`: Returns checked-in tickets.
       * - `NON_CHECKED_IN`: Returns tickets that are not checked in.
       * - `FREE`: Returns free tickets.
       * - `PAID`: Return paid tickets.
       * - `MEMBER`: Return members' tickets.
       */
      state?: State$3[];
      /** Site member IDs. */
      memberId?: string[];
      /** Filter facets. */
      facet?: string[];
      /** Sort order. Defaults to "ticket_number:asc". */
      sort?: string;
      /** Guest contact IDs. */
      contactId?: string[];
      /** Ticket definition IDs. */
      ticketDefinitionId?: string[];
  }
  enum TicketFieldset {
      /** Include guest details in ticket response */
      GUEST_DETAILS = "GUEST_DETAILS",
      /** Include ticket details in ticket response */
      TICKET_DETAILS = "TICKET_DETAILS",
      /** Include individual guest form in ticket response */
      GUEST_FORM = "GUEST_FORM"
  }
  enum State$3 {
      /** Returns only archived orders' tickets */
      ORDER_ARCHIVED = "ORDER_ARCHIVED",
      /** Returns only non-archived orders' tickets */
      ORDER_ACTIVE = "ORDER_ACTIVE",
      /** Returns only archived tickets */
      TICKET_ARCHIVED = "TICKET_ARCHIVED",
      /** Returns only non-archived tickets */
      TICKET_ACTIVE = "TICKET_ACTIVE",
      /** Returns only checked-in tickets */
      CHECKED_IN = "CHECKED_IN",
      /** Returns only non-checked-in tickets */
      NON_CHECKED_IN = "NON_CHECKED_IN",
      /** Returns only free tickets */
      FREE = "FREE",
      /** Returns only paid tickets */
      PAID = "PAID",
      /** Returns only member tickets */
      MEMBER = "MEMBER"
  }
  interface ListTicketsResponse {
      /** Total tickets matching the given filters. */
      total?: number;
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** Tickets. */
      tickets?: TicketingTicket[];
      /** Facets. */
      facets?: Record<string, FacetCounts$3>;
      /**
       * Ticket data enriched facets.
       * @internal
       */
      ticketFacets?: TicketFacets;
  }
  interface FacetCounts$3 {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface TicketFacets {
      /** Filter facets. */
      facets?: Record<string, TicketFacetCounts>;
  }
  interface TicketFacetCounts {
      /** Facet totals, aggregated per filter. */
      counts?: Record<string, Counts>;
  }
  interface Counts {
      /** Number of tickets. */
      count?: number;
      /** Number of checked in tickets. */
      checkedIn?: number;
  }
  interface GetTicketRequest {
      /** Event ID to which the ticket belongs. */
      eventId: string;
      /** A unique ticket number which is assigned automatically when creating a ticket. */
      ticketNumber: string;
      /**
       * Predefined sets of fields to return.
       * - `TICKET_DETAILS`: Returns `ticketNumber`, `orderNumber`, `ticketDefinitionId`, `name`, `price`, `free`, `policy`, `qrCode`, `checkIn`, `orderStatus`, `orderArchived`, `archived`, `orderFullName`, `ticketPdf`, `checkInUrl` and `ticketPdfUrl`.
       * - `GUEST_DETAILS`: Returns `guestDetails`.
       * - `GUEST_FORM`: Returns `guestDetails.form`.
       *
       * Default: If a fieldset is not included in the request, returns only the `memberId` and `anonymized` fields.
       */
      fieldset?: TicketFieldset[];
  }
  interface GetTicketResponse {
      /** Ticket. */
      ticket?: TicketingTicket;
  }
  interface CheckInTicketRequest {
      /** Event ID to which the ticket belongs. */
      eventId: string;
      /**
       * Deprecated, use individual ticket numbers.
       * @internal
       */
      orderNumber?: string;
      /** Tickets to check-in. */
      ticketNumber?: string[];
  }
  interface CheckInTicketResponse {
      /** Updated tickets. */
      tickets?: TicketingTicket[];
  }
  interface OrderUpdated {
      /** Order updated timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when Order initiated */
      language?: string | null;
      /** Locale in which Order was created. */
      locale?: string | null;
      /** Event ID to which the ticket belongs. */
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
      /**
       * Order updated timestamp.
       * @readonly
       */
      updated?: Date;
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
  interface Ticket {
      /** Unique issued ticket number. */
      ticketNumber?: string;
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
      /** Ticket check-in. */
      checkIn?: CheckIn;
      /** Ticket price. */
      price?: Money$3;
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
      /** Ticket name. */
      ticketName?: string;
      /** Anonymized tickets no longer contain personally identifiable information (PII). */
      anonymized?: boolean;
      /** URL and password to online conference */
      onlineConferencingLogin?: OnlineConferencingLogin;
  }
  interface OnlineConferencingLogin {
      /**
       * Link URL to the online conference.
       * @readonly
       */
      link?: string;
      /**
       * Password for the online conference.
       * @readonly
       */
      password?: string | null;
  }
  interface DeleteTicketCheckInRequest {
      /** Event ID to which the ticket belongs. */
      eventId: string;
      /**
       * Deprecated, use individual ticket numbers.
       * @internal
       */
      orderNumber?: string;
      /** Ticket numbers which check-ins to delete. */
      ticketNumber?: string[];
  }
  interface DeleteTicketCheckInResponse {
      /** Updated tickets. */
      tickets?: TicketingTicket[];
  }
  interface UpdateTicketRequest {
      /** Event ID to which the ticket belongs. */
      eventId: string;
      /** A unique ticket number which is assigned automatically when creating a ticket. */
      ticketNumber: string;
      /**
       * Set of field paths, specifying which parts of this resource to update.
       * When `fields` is empty, the request is interpreted as a full update.
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
      /**
       * Deprecated. Use `guestDetails.form`
       * @internal
       */
      checkoutForm?: FormResponse;
      /** Whether to archive the tickets. */
      archived?: boolean;
      /** Assigned guest details. */
      guestDetails?: GuestDetailsUpdate;
  }
  interface GuestDetailsUpdate {
      /** Form of a guest assigned to a ticket. */
      form?: FormResponse;
  }
  interface UpdateTicketResponse {
      /** Updated ticket. */
      ticket?: TicketingTicket;
  }
  interface BulkUpdateTicketsRequest {
      /** Event ID to which the ticket belongs. */
      eventId: string;
      /** A unique ticket number which is assigned automatically when creating a ticket. */
      ticketNumber?: string[];
      /** Whether tickets are archived. */
      archived?: boolean;
  }
  interface BulkUpdateTicketsResponse {
      /** Updated tickets. */
      tickets?: TicketingTicket[];
  }
  interface GetDemoTicketRequest {
      /** Ticket definition ID. */
      definitionId?: string;
  }
  interface GetDemoTicketResponse {
      /** Ticket. */
      ticket?: TicketingTicket;
  }
  interface MessageEnvelope$4 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$4;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$4 extends IdentificationDataIdOneOf$4 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$4;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$4 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$4 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Retrieves a list of up to 100 tickets.
   *
   * <!--
   * >**Note:** This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * -->
   * @param eventId - Event IDs.
   * @public
   * @requiredField eventId
   * @param options - Options for defining the returned list of tickets.
   * @adminMethod
   */
  function listTickets(eventId: string[], options?: ListTicketsOptions): Promise<ListTicketsResponse>;
  interface ListTicketsOptions {
      /**
       *
       * Offset. See [Pagination](/wix-events-v2/pagination).
       */
      offset?: number;
      /** Number of items to load per page. See [Pagination](/wix-events-v2/pagination).   */
      limit?: number;
      /**
       * Deprecated, use `sort` instead.
       * Sort order. Defaults to "ticket_number:asc".
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-tickets).
       * @internal
       */
      order?: string;
      /** Order numbers. */
      orderNumber?: string[];
      /** Ticket numbers. */
      ticketNumber?: string[];
      /** Textual search filter - search is performed on `"orderFullName"`, `"guestFullName"`, and `"ticketNumber"`. */
      searchPhrase?: string;
      /** Order statuses. */
      orderStatus?: OrderStatus[];
      /**
       * Deprecated, use `ORDER_ARCHIVED` / `ORDER_ACTIVE` state filter instead.
       * @internal
       */
      orderArchived?: boolean | null;
      /**
       * Deprecated, use `CHECKED_IN` / `NON_CHECKED_IN` state filter instead.
       * @internal
       */
      checkedIn?: boolean | null;
      /**
       * Predefined sets of fields to return.
       * - `TICKET_DETAILS`: Returns `ticketNumber`, `orderNumber`, `ticketDefinitionId`, `name`, `price`, `free`, `policy`, `qrCode`, `checkIn`, `orderStatus`, `orderArchived`, `archived`, `orderFullName`, `ticketPdf`, `checkInUrl` and `ticketPdfUrl`.
       * - `GUEST_DETAILS`: Returns `guestDetails`.
       * - `GUEST_FORM`: Returns `guestDetails.form`.
       *
       * Default: If a fieldset is not included in the request, returns only the `memberId` and `anonymized` fields.
       */
      fieldset?: TicketFieldset[];
      /**
       * Ticket states. Possible values:
       * - `ORDER_ARCHIVED`: Returns tickets of the archived orders.
       * - `ORDER_ACTIVE`: Returns tickets of the non-archived orders.
       * - `TICKET_ARCHIVED`: Returns archived tickets.
       * - `TICKET_ACTIVE`: Returns non-archived tickets.
       * - `CHECKED_IN`: Returns checked-in tickets.
       * - `NON_CHECKED_IN`: Returns tickets that are not checked in.
       * - `FREE`: Returns free tickets.
       * - `PAID`: Return paid tickets.
       * - `MEMBER`: Return members' tickets.
       */
      state?: State$3[];
      /** Site member IDs. */
      memberId?: string[];
      /** Filter facets. */
      facet?: string[];
      /**
       * Sort order.
       *
       * Default: `"ticketNumber"`:`"asc"`.
       */
      sort?: string;
      /** Guest contact IDs. */
      contactId?: string[];
      /** Ticket definition IDs. */
      ticketDefinitionId?: string[];
  }
  /**
   * Retrieves a ticket by the unique ticket number.
   * @public
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.ticketNumber
   * @param identifiers - Details for the ticket to retrieve.
   * @param options - Options for the returned ticket data.
   * @adminMethod
   * @returns Ticket.
   */
  function getTicket(identifiers: GetTicketIdentifiers, options?: GetTicketOptions): Promise<TicketingTicket>;
  interface GetTicketIdentifiers {
      /** Event ID to which the ticket belongs. */
      eventId: string;
      /** A unique ticket number which is assigned automatically when creating a ticket. */
      ticketNumber: string;
  }
  interface GetTicketOptions {
      /**
       * Predefined sets of fields to return.
       * - `TICKET_DETAILS`: Returns `ticketNumber`, `orderNumber`, `ticketDefinitionId`, `name`, `price`, `free`, `policy`, `qrCode`, `checkIn`, `orderStatus`, `orderArchived`, `archived`, `orderFullName`, `ticketPdf`, `checkInUrl` and `ticketPdfUrl`.
       * - `GUEST_DETAILS`: Returns `guestDetails`.
       * - `GUEST_FORM`: Returns `guestDetails.form`.
       *
       * Default: If a fieldset is not included in the request, returns only the `memberId` and `anonymized` fields.
       */
      fieldset?: TicketFieldset[];
  }
  /**
   * Checks in 1 or more tickets.
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which the ticket belongs.
   * @param options - Options for tickets to check-in.
   * @adminMethod
   */
  function checkInTickets(eventId: string, options?: CheckInTicketsOptions): Promise<CheckInTicketResponse>;
  interface CheckInTicketsOptions {
      /**
       * Deprecated, use individual ticket numbers.
       * @internal
       */
      orderNumber?: string;
      /** Tickets to check-in. */
      ticketNumber?: string[];
  }
  /**
   * Deletes check-ins for 1 or more tickets.
   * @public
   * @requiredField eventId
   * @param eventId - Event ID to which the ticket belongs.
   * @param options - Options for tickets to delete.
   * @adminMethod
   */
  function deleteTicketCheckIns(eventId: string, options?: DeleteTicketCheckInsOptions): Promise<DeleteTicketCheckInResponse>;
  interface DeleteTicketCheckInsOptions {
      /**
       * Deprecated, use individual ticket numbers.
       * @internal
       */
      orderNumber?: string;
      /** Ticket numbers which check-ins to delete. */
      ticketNumber?: string[];
  }
  /**
   * Updates a ticket.
   * @public
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.ticketNumber
   * @param identifiers - Details for the ticket to update.
   * @param options - Ticket details to update.
   * @adminMethod
   */
  function updateTicket(identifiers: UpdateTicketIdentifiers, options?: UpdateTicketOptions): Promise<UpdateTicketResponse>;
  interface UpdateTicketIdentifiers {
      /** Event ID to which the ticket belongs. */
      eventId: string;
      /** A unique ticket number which is assigned automatically when creating a ticket. */
      ticketNumber: string;
  }
  interface UpdateTicketOptions {
      /**
       * Set of field paths, specifying which parts of this resource to update.
       * When `fields` is empty, the request is interpreted as a full update.
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
      /**
       * Deprecated. Use `guestDetails.form`
       * @internal
       */
      checkoutForm?: FormResponse;
      /** Whether to archive the ticket. */
      archived?: boolean;
      /** Assigned guest details. */
      guestDetails?: GuestDetailsUpdate;
  }
  /**
   * Archives multiple tickets.
   * @public
   * @requiredField eventId
   * @param options - Options for updating the tickets.
   * @param eventId - Event ID to which the ticket belongs.
   * @adminMethod
   */
  function bulkUpdateTickets(eventId: string, options?: BulkUpdateTicketsOptions): Promise<BulkUpdateTicketsResponse>;
  interface BulkUpdateTicketsOptions {
      /** A unique ticket number which is assigned automatically when creating a ticket. */
      ticketNumber?: string[];
      /** Whether tickets are archived. */
      archived?: boolean;
  }
  
  type eventsV1Ticket_universal_d_TicketingTicket = TicketingTicket;
  type eventsV1Ticket_universal_d_CheckIn = CheckIn;
  type eventsV1Ticket_universal_d_OrderStatus = OrderStatus;
  const eventsV1Ticket_universal_d_OrderStatus: typeof OrderStatus;
  type eventsV1Ticket_universal_d_GuestDetails = GuestDetails;
  type eventsV1Ticket_universal_d_FormResponse = FormResponse;
  type eventsV1Ticket_universal_d_InputValue = InputValue;
  type eventsV1Ticket_universal_d_FormattedAddress = FormattedAddress;
  type eventsV1Ticket_universal_d_ChannelType = ChannelType;
  const eventsV1Ticket_universal_d_ChannelType: typeof ChannelType;
  type eventsV1Ticket_universal_d_TicketDetails = TicketDetails;
  type eventsV1Ticket_universal_d_ListTicketsRequest = ListTicketsRequest;
  type eventsV1Ticket_universal_d_TicketFieldset = TicketFieldset;
  const eventsV1Ticket_universal_d_TicketFieldset: typeof TicketFieldset;
  type eventsV1Ticket_universal_d_ListTicketsResponse = ListTicketsResponse;
  type eventsV1Ticket_universal_d_TicketFacets = TicketFacets;
  type eventsV1Ticket_universal_d_TicketFacetCounts = TicketFacetCounts;
  type eventsV1Ticket_universal_d_Counts = Counts;
  type eventsV1Ticket_universal_d_GetTicketRequest = GetTicketRequest;
  type eventsV1Ticket_universal_d_GetTicketResponse = GetTicketResponse;
  type eventsV1Ticket_universal_d_CheckInTicketRequest = CheckInTicketRequest;
  type eventsV1Ticket_universal_d_CheckInTicketResponse = CheckInTicketResponse;
  type eventsV1Ticket_universal_d_OrderUpdated = OrderUpdated;
  type eventsV1Ticket_universal_d_Ticket = Ticket;
  type eventsV1Ticket_universal_d_OnlineConferencingLogin = OnlineConferencingLogin;
  type eventsV1Ticket_universal_d_DeleteTicketCheckInRequest = DeleteTicketCheckInRequest;
  type eventsV1Ticket_universal_d_DeleteTicketCheckInResponse = DeleteTicketCheckInResponse;
  type eventsV1Ticket_universal_d_UpdateTicketRequest = UpdateTicketRequest;
  type eventsV1Ticket_universal_d_GuestDetailsUpdate = GuestDetailsUpdate;
  type eventsV1Ticket_universal_d_UpdateTicketResponse = UpdateTicketResponse;
  type eventsV1Ticket_universal_d_BulkUpdateTicketsRequest = BulkUpdateTicketsRequest;
  type eventsV1Ticket_universal_d_BulkUpdateTicketsResponse = BulkUpdateTicketsResponse;
  type eventsV1Ticket_universal_d_GetDemoTicketRequest = GetDemoTicketRequest;
  type eventsV1Ticket_universal_d_GetDemoTicketResponse = GetDemoTicketResponse;
  const eventsV1Ticket_universal_d_listTickets: typeof listTickets;
  type eventsV1Ticket_universal_d_ListTicketsOptions = ListTicketsOptions;
  const eventsV1Ticket_universal_d_getTicket: typeof getTicket;
  type eventsV1Ticket_universal_d_GetTicketIdentifiers = GetTicketIdentifiers;
  type eventsV1Ticket_universal_d_GetTicketOptions = GetTicketOptions;
  const eventsV1Ticket_universal_d_checkInTickets: typeof checkInTickets;
  type eventsV1Ticket_universal_d_CheckInTicketsOptions = CheckInTicketsOptions;
  const eventsV1Ticket_universal_d_deleteTicketCheckIns: typeof deleteTicketCheckIns;
  type eventsV1Ticket_universal_d_DeleteTicketCheckInsOptions = DeleteTicketCheckInsOptions;
  const eventsV1Ticket_universal_d_updateTicket: typeof updateTicket;
  type eventsV1Ticket_universal_d_UpdateTicketIdentifiers = UpdateTicketIdentifiers;
  type eventsV1Ticket_universal_d_UpdateTicketOptions = UpdateTicketOptions;
  const eventsV1Ticket_universal_d_bulkUpdateTickets: typeof bulkUpdateTickets;
  type eventsV1Ticket_universal_d_BulkUpdateTicketsOptions = BulkUpdateTicketsOptions;
  namespace eventsV1Ticket_universal_d {
    export {
      eventsV1Ticket_universal_d_TicketingTicket as TicketingTicket,
      Money$3 as Money,
      eventsV1Ticket_universal_d_CheckIn as CheckIn,
      eventsV1Ticket_universal_d_OrderStatus as OrderStatus,
      eventsV1Ticket_universal_d_GuestDetails as GuestDetails,
      eventsV1Ticket_universal_d_FormResponse as FormResponse,
      eventsV1Ticket_universal_d_InputValue as InputValue,
      eventsV1Ticket_universal_d_FormattedAddress as FormattedAddress,
      Address$3 as Address,
      AddressStreetOneOf$3 as AddressStreetOneOf,
      StreetAddress$3 as StreetAddress,
      AddressLocation$3 as AddressLocation,
      Subdivision$3 as Subdivision,
      SubdivisionType$3 as SubdivisionType,
      eventsV1Ticket_universal_d_ChannelType as ChannelType,
      eventsV1Ticket_universal_d_TicketDetails as TicketDetails,
      eventsV1Ticket_universal_d_ListTicketsRequest as ListTicketsRequest,
      eventsV1Ticket_universal_d_TicketFieldset as TicketFieldset,
      State$3 as State,
      eventsV1Ticket_universal_d_ListTicketsResponse as ListTicketsResponse,
      FacetCounts$3 as FacetCounts,
      eventsV1Ticket_universal_d_TicketFacets as TicketFacets,
      eventsV1Ticket_universal_d_TicketFacetCounts as TicketFacetCounts,
      eventsV1Ticket_universal_d_Counts as Counts,
      eventsV1Ticket_universal_d_GetTicketRequest as GetTicketRequest,
      eventsV1Ticket_universal_d_GetTicketResponse as GetTicketResponse,
      eventsV1Ticket_universal_d_CheckInTicketRequest as CheckInTicketRequest,
      eventsV1Ticket_universal_d_CheckInTicketResponse as CheckInTicketResponse,
      eventsV1Ticket_universal_d_OrderUpdated as OrderUpdated,
      eventsV1Ticket_universal_d_Ticket as Ticket,
      eventsV1Ticket_universal_d_OnlineConferencingLogin as OnlineConferencingLogin,
      eventsV1Ticket_universal_d_DeleteTicketCheckInRequest as DeleteTicketCheckInRequest,
      eventsV1Ticket_universal_d_DeleteTicketCheckInResponse as DeleteTicketCheckInResponse,
      eventsV1Ticket_universal_d_UpdateTicketRequest as UpdateTicketRequest,
      eventsV1Ticket_universal_d_GuestDetailsUpdate as GuestDetailsUpdate,
      eventsV1Ticket_universal_d_UpdateTicketResponse as UpdateTicketResponse,
      eventsV1Ticket_universal_d_BulkUpdateTicketsRequest as BulkUpdateTicketsRequest,
      eventsV1Ticket_universal_d_BulkUpdateTicketsResponse as BulkUpdateTicketsResponse,
      eventsV1Ticket_universal_d_GetDemoTicketRequest as GetDemoTicketRequest,
      eventsV1Ticket_universal_d_GetDemoTicketResponse as GetDemoTicketResponse,
      MessageEnvelope$4 as MessageEnvelope,
      IdentificationData$4 as IdentificationData,
      IdentificationDataIdOneOf$4 as IdentificationDataIdOneOf,
      WebhookIdentityType$4 as WebhookIdentityType,
      eventsV1Ticket_universal_d_listTickets as listTickets,
      eventsV1Ticket_universal_d_ListTicketsOptions as ListTicketsOptions,
      eventsV1Ticket_universal_d_getTicket as getTicket,
      eventsV1Ticket_universal_d_GetTicketIdentifiers as GetTicketIdentifiers,
      eventsV1Ticket_universal_d_GetTicketOptions as GetTicketOptions,
      eventsV1Ticket_universal_d_checkInTickets as checkInTickets,
      eventsV1Ticket_universal_d_CheckInTicketsOptions as CheckInTicketsOptions,
      eventsV1Ticket_universal_d_deleteTicketCheckIns as deleteTicketCheckIns,
      eventsV1Ticket_universal_d_DeleteTicketCheckInsOptions as DeleteTicketCheckInsOptions,
      eventsV1Ticket_universal_d_updateTicket as updateTicket,
      eventsV1Ticket_universal_d_UpdateTicketIdentifiers as UpdateTicketIdentifiers,
      eventsV1Ticket_universal_d_UpdateTicketOptions as UpdateTicketOptions,
      eventsV1Ticket_universal_d_bulkUpdateTickets as bulkUpdateTickets,
      eventsV1Ticket_universal_d_BulkUpdateTicketsOptions as BulkUpdateTicketsOptions,
    };
  }
  
  interface TicketDefinition$1 {
      /** Ticket definition ID. */
      _id?: string;
      /** Ticket price. */
      price?: Money$2;
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
      dashboard?: Dashboard$2;
      /** Event ID associated with the ticket. */
      eventId?: string;
      /**
       * Configuration of the fixed-rate Wix service fee that is applied at checkout to each ticket sold.
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
      state?: TicketDefinitionStateEnumState[];
      /** Ticket pricing. */
      pricing?: TicketPricing;
  }
  interface Money$2 {
      /**
       * @internal
       * @internal */
      amount?: string;
      /**
       * Three-letter currency code in
       * [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       */
      currency?: string;
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string | null;
  }
  interface Dashboard$2 {
      /** Whether ticket is hidden and cannot be sold. */
      hidden?: boolean;
      /** Number of tickets sold and reserved. */
      sold?: number;
      /** Whether the ticket has limited quantity. */
      limited?: boolean;
      /** Ticket limit. `NULL` for unlimited ticket definitions. */
      quantity?: number | null;
      /** Number of unsold tickets. `NULL` for unlimited ticket definitions. */
      unsold?: number | null;
      /** Number of tickets sold. */
      ticketsSold?: number;
      /** Number of tickets reserved. */
      ticketsReserved?: number;
  }
  interface WixFeeConfig {
      /**
       * Fee calculation method.
       *
       * Supported values: `"FEE_ADDED"`, `"FEE_INCLUDED"`, `"FEE_ADDED_AT_CHECKOUT"`
       *
       * Default: `"FEE_ADDED_AT_CHECKOUT"`
       */
      type?: FeeType;
  }
  enum FeeType {
      /** Fee is added to the ticket price at checkout */
      FEE_ADDED = "FEE_ADDED",
      /** Seller absorbs the fee. It is deducted from the ticket price */
      FEE_INCLUDED = "FEE_INCLUDED",
      /** Fee is added to the ticket price at checkout */
      FEE_ADDED_AT_CHECKOUT = "FEE_ADDED_AT_CHECKOUT"
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
  enum TicketDefinitionStateEnumState {
      INCLUDE_HIDDEN_NOT_ON_SALE = "INCLUDE_HIDDEN_NOT_ON_SALE"
  }
  interface TicketPricing extends TicketPricingPriceOneOf {
      /** Ticket price which is read only. */
      fixedPrice?: Money$2;
      /** Min price per ticket, customizable. */
      minPrice?: Money$2;
      /** Ticket pricing options. */
      pricingOptions?: PricingOptions$1;
      /**
       * Ticket pricing type.
       * @readonly
       */
      pricingType?: Type$2;
  }
  /** @oneof */
  interface TicketPricingPriceOneOf {
      /** Ticket price which is read only. */
      fixedPrice?: Money$2;
      /** Min price per ticket, customizable. */
      minPrice?: Money$2;
      /** Ticket pricing options. */
      pricingOptions?: PricingOptions$1;
  }
  interface PricingOptions$1 {
      /** Multiple ticket pricing options. */
      options?: PricingOption[];
  }
  interface PricingOption {
      /** Ticket pricing option ID. */
      _id?: string | null;
      /** Ticket pricing option name. */
      name?: string | null;
      /** Ticket pricing option price. */
      price?: Money$2;
  }
  enum Type$2 {
      STANDARD = "STANDARD",
      DONATION = "DONATION"
  }
  interface QueryTicketDefinitionsRequest$1 {
      /** Offset. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Limit. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /** Set of fields to return in the response. See [fieldsets](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_ticket-definition-fieldset). */
      fieldset?: TicketDefinitionFieldset[];
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions). */
      filter?: Record<string, any> | null;
      /**
       * Sort order. Defaults to: "created:asc".
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions).
       */
      sort?: string;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions).
       */
      facet?: string[];
  }
  enum TicketDefinitionFieldset {
      /** Include policy in the response. */
      POLICY = "POLICY",
      /** Include dashboard in the response. */
      DASHBOARD = "DASHBOARD"
  }
  interface QueryTicketDefinitionsResponse$1 {
      /** Total ticket definitions matching the given filters. */
      total?: number;
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** Ticket definitions. */
      definitions?: TicketDefinition$1[];
      /** Filter facets. */
      facets?: Record<string, FacetCounts$2>;
  }
  interface FacetCounts$2 {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface QueryTicketDefinitionsV2Request {
      /** Query request object. */
      query?: QueryV2$3;
      /**
       * Consistent read.
       * @internal
       */
      consistentRead?: boolean | null;
  }
  interface QueryV2$3 extends QueryV2PagingMethodOneOf$3 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$3;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$3;
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
      sort?: Sorting$3[];
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$3 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$3;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$3;
  }
  interface Sorting$3 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$3;
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
  enum SortOrder$3 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging$3 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface CursorPaging$3 {
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
  interface QueryTicketDefinitionsV2Response {
      /** Ticket definitions. */
      definitions?: TicketDefinition$1[];
      /** Paging metadata definitions. */
      metadata?: PagingMetadataV2$3;
  }
  interface PagingMetadataV2$3 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$3;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$3 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface ListTicketDefinitionsRequest {
      /** Event ID. */
      eventId?: string[];
      /** Offset. */
      offset?: number;
      /** Paging limit. */
      limit?: number;
      /**
       * Predefined sets of fields to return.
       * - `DASHBOARD`: Returns `dashboard`.
       * - `POLICY`: Returns `policy`.
       *
       * Default: If `fieldset` is omitted from the request,  `id`, `price`, `free`, `name`, `limitPerCheckout`, `orderIndex`, `eventId`.
       *
       */
      fieldset?: TicketDefinitionFieldset[];
      /** Event creator ID. */
      eventCreatorId?: string[];
      /**
       * Filter by ticket definition state.
       *
       * Supported values: `"VISIBLE"`, `"HIDDEN"`, `"FREE"`, `"PAID"`
       */
      state?: State$2[];
      /**
       * Sort order.
       *
       * Default: `"created"`:`"asc"`
       */
      sort?: string;
      /**
       * Ticket sale status.
       *
       * Supported values: `"SALE_SCHEDULED"`, `"SALE_STARTED"`, `"SALE_ENDED"`
       */
      saleStatus?: TicketSaleStatus[];
      /** Filter facets. */
      facet?: string[];
      /**
       * Visible for coupons. For internal use.
       * @internal
       */
      visibleForCoupons?: boolean | null;
      /**
       * For internal use.
       * @internal
       */
      groupBy?: GroupBy;
      /**
       * Ticket definition ID.
       * @internal
       */
      _id?: string[];
  }
  enum State$2 {
      /** Ticket is available for purchase. */
      VISIBLE = "VISIBLE",
      /** Opposite to VISIBLE. */
      HIDDEN = "HIDDEN",
      /** Ticket price is 0. */
      FREE = "FREE",
      /** Ticket price is greater than 0. */
      PAID = "PAID"
  }
  enum GroupBy {
      /** No grouping. */
      NONE = "NONE",
      /** Groups by event created date with descending sorting. */
      EVENT_CREATED_DESC = "EVENT_CREATED_DESC",
      /** Groups by event created date with ascending sorting. */
      EVENT_CREATED_ASC = "EVENT_CREATED_ASC"
  }
  interface ListTicketDefinitionsResponse {
      /** Meta data. */
      metaData?: ResponseMetaData;
      /** Retrieved ticket definitions. */
      definitions?: TicketDefinition$1[];
      /** Filter facets. */
      facets?: Record<string, FacetCounts$2>;
  }
  interface ResponseMetaData {
      /** Number of items in the response. */
      count?: number;
      /** Offset of items. */
      offset?: number;
      /** Total number of matching items. */
      total?: number;
  }
  interface GetTicketDefinitionRequest$1 {
      /** Ticket definition ID. */
      definitionId: string;
      /**
       * Predefined sets of fields to return.
       * - `DASHBOARD`: Returns `dashboard`.
       * - `POLICY`: Returns `policy`.
       *
       * Default: If `fieldset` is omitted from the request,  `id`, `price`, `free`, `name`, `limitPerCheckout`, `orderIndex`, `eventId`.
       */
      fieldset?: TicketDefinitionFieldset[];
  }
  interface GetTicketDefinitionResponse$1 {
      /** Retrieved ticket definition. */
      definition?: TicketDefinition$1;
  }
  interface CreateTicketDefinitionRequest$1 {
      /** Event ID. */
      eventId: string;
      /** Ticket definition data. */
      definition: TicketDefinitionData;
  }
  interface TicketDefinitionData {
      /** Ticket name. */
      name?: string | null;
      /** Ticket price. */
      price?: Money$2;
      /** Ticket description. */
      description?: string | null;
      /** Whether this ticket type is limited in quantity. */
      limited?: boolean;
      /**
       * Limit for this ticket type.
       *
       * `NULL` for unlimited.
       */
      quantity?: number | null;
      /** Custom sort index for manual tickets ordering implementation. */
      orderIndex?: number;
      /** Policy information in plain text (as listed on the ticket). */
      policy?: string | null;
      /** Whether this ticket type is hidden to customers and cannot be purchased. */
      hidden?: boolean;
      /** Configuration of the fixed-rate Wix service fee that is applied to each ticket sold. */
      wixFeeConfig?: WixFeeConfig;
      /** Ticket sale period. */
      salePeriod?: TicketSalePeriod;
      /** Ticket pricing. */
      pricing?: TicketPricing;
  }
  interface CreateTicketDefinitionResponse$1 {
      /** Created ticket definition. */
      definition?: TicketDefinition$1;
  }
  interface TicketDefinitionCreated {
      /** Ticket Definition created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Ticket Definition ID. */
      ticketDefinitionId?: string;
      /** Event ID. */
      eventId?: string;
      /** Originated from. */
      originatedFrom?: OriginatedFrom;
  }
  interface OriginatedFrom {
      /** Instance ID. Indicates the original app instance which current entity originated from. */
      instanceId?: string;
      /** Event ID. Indicates the original event which current entity originated from. */
      eventId?: string;
      /** Event ID. Indicates the original entity which current entity originated from. */
      entityId?: string;
  }
  interface UpdateTicketDefinitionRequest$1 {
      /** Event ID. */
      eventId: string;
      /** Ticket definition ID. */
      definitionId: string;
      /** Ticket definition data. */
      definition?: TicketDefinitionData;
      /**
       * Set of field paths, specifying which parts of ticket definition to update.
       * @internal
       */
      fields?: string[];
  }
  interface UpdateTicketDefinitionResponse$1 {
      /** Updated ticket definition. */
      definition?: TicketDefinition$1;
  }
  interface TicketDefinitionUpdated {
      /** Ticket definition updated timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
      /** Event ID. */
      eventId?: string;
  }
  interface DeleteTicketDefinitionRequest$1 extends DeleteTicketDefinitionRequestDeleteOneOf {
      /** Ticket definitions to delete. */
      byId?: ById;
      /** Whether to delete all event tickets. */
      all?: boolean;
      /** Event ID. */
      eventId: string;
  }
  /** @oneof */
  interface DeleteTicketDefinitionRequestDeleteOneOf {
      /** Ticket definitions to delete. */
      byId?: ById;
      /** Whether to delete all event tickets. */
      all?: boolean;
  }
  interface ById {
      /** Ticket definition IDs. */
      definitionId?: string[];
  }
  interface DeleteTicketDefinitionResponse$1 {
  }
  interface TicketDefinitionDeleted {
      /** Ticket definition deleted timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
      /** Event ID. */
      eventId?: string;
  }
  interface ChangeCurrencyRequest$1 {
      /** Event ID. */
      eventId?: string;
      /** Event currency, in 3-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
      currency: string;
  }
  interface ChangeCurrencyResponse$1 {
  }
  interface BulkCopyTicketDefinitionsByEventIdRequest$1 {
      /** Origin instance ID. */
      originInstanceId?: string | null;
      /** Origin Event ID. */
      originEventId?: string;
      /** Target Event ID. */
      targetEventId?: string;
  }
  interface BulkCopyTicketDefinitionsByEventIdResponse$1 {
      /** Copied ticket definitions. */
      definitions?: CopiedTicketDefinition$1[];
  }
  interface CopiedTicketDefinition$1 {
      /** Origin Ticket definition ID. */
      originTicketDefinitionId?: string;
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
  }
  interface PaidTicketDefinitionExistsRequest {
  }
  interface PaidTicketDefinitionExistsResponse {
      /** Paid exists. */
      paidExists?: boolean;
  }
  interface MessageEnvelope$3 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$3;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$3 extends IdentificationDataIdOneOf$3 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$3;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$3 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$3 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * **Deprecated.** This function will continue to work until November 8, 2024, but a newer version is available. Use [`queryTicketDefinitions()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/queryticketdefinitions) function instead.
   * >**Migration Instructions**.
   * > If this function is already in your code, it will continue to work. To stay compatible with future changes, migrate to [`queryTicketDefinition()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/queryticketdefinitions).
   * > To migrate to the new function:
   * > 1. Add the new import statement:
   * > ```js
   * > import { ticketDefinitionsV2 } from 'wix-events.v2';
   * > ```
   * > 2. Look for any code that uses `ticketDefinitions.queryTicketDefinition()`, and replace it with `ticketDefinitionsV2.queryTicketDefinition()`. Update your code to work with the new `createTicketDefinition()` response properties.
   * > 3. Test your changes to make sure your code behaves as expected.
   *
   * Retrieves a list of up to 100 ticket definitions.
   * @public
   * @adminMethod
   */
  function queryTicketDefinitions$1(options?: QueryTicketDefinitionsOptions$1): Promise<QueryTicketDefinitionsResponse$1>;
  interface QueryTicketDefinitionsOptions$1 {
      /** Offset. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Limit. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /** Set of fields to return in the response. See [fieldsets](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_ticket-definition-fieldset). */
      fieldset?: TicketDefinitionFieldset[];
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions). */
      filter?: Record<string, any> | null;
      /**
       * Sort order. Defaults to: "created:asc".
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions).
       */
      sort?: string;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions).
       */
      facet?: string[];
  }
  /**
   * **Deprecated.** This function will continue to work until October 29, 2024, but a newer version is available at [`queryTicketDefinitions()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/queryticketdefinitions).
   * >**Migration Instructions**.
   * > If this function is already in your code, it will continue to work. To stay compatible with future changes, migrate to [`queryTicketDefinitions()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/queryticketdefinitions).
   * > To migrate to the new function:
   * > 1. Add the new import statement:
   * > ```js
   * > import { ticketDefinitionsV2 } from 'wix-events.v2';
   * > ```
   * > 2. Look for any code that uses `ticketDefinitions.queryTicketDefinitions()`, and replace it with `ticketDefinitionsV2.queryTicketDefinitions()`. Update your code to work with the new `queryTicketDefinition()` response properties.
   * > 3. Test your changes to make sure your code behaves as expected.
   *
   * Retrieves a list of up to 1,000 ticket definitions, given the provided paging and filtering.
   * @internal
   * @adminMethod
   */
  function queryTicketDefinitionsV2(options?: QueryTicketDefinitionsV2Options): DefinitionsQueryBuilder;
  interface QueryTicketDefinitionsV2Options {
      /**
       * Consistent read.
       * @internal
       */
      consistentRead?: boolean | null | undefined;
  }
  interface QueryCursorResult$2 {
      cursors: Cursors$3;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface DefinitionsQueryResult extends QueryCursorResult$2 {
      items: TicketDefinition$1[];
      query: DefinitionsQueryBuilder;
      next: () => Promise<DefinitionsQueryResult>;
      prev: () => Promise<DefinitionsQueryResult>;
  }
  interface DefinitionsQueryBuilder {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => DefinitionsQueryBuilder;
      /** @param cursor - A pointer to specific record */
      skipTo: (cursor: string) => DefinitionsQueryBuilder;
      find: () => Promise<DefinitionsQueryResult>;
  }
  /**
   * **Deprecated.** This function will continue to work until November 8, 2024, but a substitute is available. Use the [`queryTicketDefinitions()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/queryticketdefinitions) function instead.
   * >**Migration Instructions**.
   * > If this function is already in your code, it will continue to work. To stay compatible with future changes, migrate to [`queryTicketDefinitions()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/queryticketdefinitions).
   * > To migrate to the new function:
   * > 1. Add the new import statement:
   * > ```js
   * > import { ticketDefinitionsV2 } from 'wix-events.v2';
   * > ```
   * > 2. Look for any code that uses `ticketDefinitions.queryTicketDefinitions()`, and replace it with `ticketDefinitionsV2.queryTicketDefinitions()`. Update your code to work with the new `queryTicketDefinition()` response properties.
   * > 3. Test your changes to make sure your code behaves as expected.
   *
   * Retrieves a list of up to 100 ticket definitions, with basic filter support.
   * @public
   * @param options - Details for the tickets to retrieve.
   * @adminMethod
   */
  function listTicketDefinitions(options?: ListTicketDefinitionsOptions): Promise<ListTicketDefinitionsResponse>;
  interface ListTicketDefinitionsOptions {
      /** Event ID. */
      eventId?: string[];
      /** Offset. */
      offset?: number;
      /** Paging limit. */
      limit?: number;
      /**
       * Predefined sets of fields to return.
       * - `DASHBOARD`: Returns `dashboard`.
       * - `POLICY`: Returns `policy`.
       *
       * Default: If `fieldset` is omitted from the request,  `id`, `price`, `free`, `name`, `limitPerCheckout`, `orderIndex`, `eventId`.
       */
      fieldset?: TicketDefinitionFieldset[];
      /** Event creator ID. */
      eventCreatorId?: string[];
      /**
       * Filter by ticket definition state.
       *
       * Supported values: `"VISIBLE"`, `"HIDDEN"`, `"FREE"`, `"PAID"`
       */
      state?: State$2[];
      /**
       * Sort order.
       *
       * Default: `"created"`:`"asc"`.
       *
       * See [Ticket Definitions Sort](/wix-events-v2/ticketdefinitions/ticket-definitions-sort) for more information.
       *
       *
       *
       *
       */
      sort?: string;
      /**
       * Ticket sale status.
       *
       * Supported values: `"SALE_SCHEDULED"`, `"SALE_STARTED"`, `"SALE_ENDED"`
       */
      saleStatus?: TicketSaleStatus[];
      /** Filter facets. */
      facet?: string[];
      /**
       * Visible for coupons. For internal use.
       * @internal
       */
      visibleForCoupons?: boolean | null;
      /**
       * For internal use.
       * @internal
       */
      groupBy?: GroupBy;
      /**
       * Ticket definition ID.
       * @internal
       */
      _id?: string[];
  }
  /**
   * **Deprecated.** This function will continue to work until November 8, 2024, but a newer version is available. Use the [`getTicketDefinition()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/getticketdefinition) function instead.
   * >**Migration Instructions**.
   * > If this function is already in your code, it will continue to work. To stay compatible with future changes, migrate to [`getTicketDefinition()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/getticketdefinition).
   * > To migrate to the new function:
   * > 1. Add the new import statement:
   * > ```js
   * > import { ticketDefinitionsV2 } from 'wix-events.v2';
   * > ```
   * > 2. Look for any code that uses `ticketDefinitions.getTicketDefinition()`, and replace it with `ticketDefinitionsV2.getTicketDefinition()`. Update your code to work with the new `getTicketDefinition()` response properties.
   * > 3. Test your changes to make sure your code behaves as expected.
   *
   * Retrieves a ticket definition.
   * @param definitionId - Ticket definition ID.
   * @public
   * @requiredField definitionId
   * @param options - Details for the ticket to retrieve.
   * @adminMethod
   * @returns Retrieved ticket definition.
   */
  function getTicketDefinition$1(definitionId: string, options?: GetTicketDefinitionOptions$1): Promise<TicketDefinition$1>;
  interface GetTicketDefinitionOptions$1 {
      /**
       * Predefined sets of fields to return.
       * - `DASHBOARD`: Returns `dashboard`.
       * - `POLICY`: Returns `policy`.
       *
       * Default: If `fieldset` is omitted from the request,  `id`, `price`, `free`, `name`, `limitPerCheckout`, `orderIndex`, `eventId`.
       */
      fieldset?: TicketDefinitionFieldset[];
  }
  /**
   * **Deprecated.** This function will continue to work until November 8, 2024, but a newer version is available. Use the [`createTicketDefinition()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/createticketdefinition) function instead.
   * >**Migration Instructions**.
   * > If this function is already in your code, it will continue to work. To stay compatible with future changes, migrate to [`createTicketDefinition()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/createticketdefinition).
   * > To migrate to the new function:
   * > 1. Add the new import statement:
   * > ```js
   * > import { ticketDefinitionsV2 } from 'wix-events.v2';
   * > ```
   * > 2. Look for any code that uses `ticketDefinitions.createTicketDefinition()`, and replace it with `ticketDefinitionsV2.createTicketDefinition()`. Update your code to work with the new `createTicketDefinition()` response properties.
   * > 3. Test your changes to make sure your code behaves as expected.
   *
   * Creates a ticket definition (and enables ticket sales).
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   * @requiredField options
   * @requiredField options.definition
   * @requiredField options.definition.name
   * @adminMethod
   */
  function createTicketDefinition$1(eventId: string, options: CreateTicketDefinitionOptions$1): Promise<CreateTicketDefinitionResponse$1>;
  interface CreateTicketDefinitionOptions$1 {
      /** Ticket definition data. */
      definition: TicketDefinitionData;
  }
  /**
   * **Deprecated.** This function will continue to work until November 8, 2024, but a newer version is available. Use the [`updateTicketDefinition()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/updateticketdefinition) function instead.
   * >**Migration Instructions**.
   * > If this function is already in your code, it will continue to work. To stay compatible with future changes, migrate to [`updateTicketDefinition()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/updateticketdefinition).
   * > To migrate to the new function:
   * > 1. Add the new import statement:
   * > ```js
   * > import { ticketDefinitionsV2 } from 'wix-events.v2';
   * > ```
   * > 2. Look for any code that uses `ticketDefinitions.updateTicketDefinition()`, and replace it with `ticketDefinitionsV2.updateTicketDefinition()`. Update your code to work with the new `updateTicketDefinition()` response properties.
   * > 3. Test your changes to make sure your code behaves as expected.
   *
   *
   * Updates a ticket definition.
   *
   * See [Partial Updates](/wix-events-v2/partial-updates) for more information.
   * @param definitionId - Ticket definition ID.
   * @param eventId - Event ID.
   * @public
   * @requiredField definitionId
   * @requiredField eventId
   * @requiredField options.definition.pricing
   * @param identifiers - Details of the ticket definition to update.
   * @param options - Ticket definition details to update.
   * @adminMethod
   */
  function updateTicketDefinition$1(definitionId: string, eventId: string, options?: UpdateTicketDefinitionOptions$1): Promise<UpdateTicketDefinitionResponse$1>;
  interface UpdateTicketDefinitionOptions$1 {
      /** Ticket definition data. */
      definition?: TicketDefinitionData;
      /**
       * Set of field paths, specifying which parts of ticket definition to update.
       * @internal
       */
      fields?: string[];
  }
  /**
   * **Deprecated.** This function will continue to work until November 8, 2024, but a newer version is available. Use the [`deleteTicketDefinition()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/deleteticketdefinition) function instead.
   * >**Migration Instructions**.
   * > If this function is already in your code, it will continue to work. To stay compatible with future changes, migrate to [`deleteTicketDefinition()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/deleteticketdefinition).
   * > To migrate to the new function:
   * > 1. Add the new import statement:
   * > ```js
   * > import { ticketDefinitionsV2 } from 'wix-events.v2';
   * > ```
   * > 2. Look for any code that uses `ticketDefinitions.deleteTicketDefinition()`, and replace it with `ticketDefinitionsV2.deleteTicketDefinition()`. Update your code to work with the new `deleteTicketDefinition()` response properties.
   * > 3. Test your changes to make sure your code behaves as expected.
   *
   * Deletes a ticket definition.
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   * @param options - Details of tickets to delete.
   * @adminMethod
   */
  function deleteTicketDefinition$1(eventId: string, options?: DeleteTicketDefinitionOptions): Promise<void>;
  interface DeleteTicketDefinitionOptions extends DeleteTicketDefinitionRequestDeleteOneOf {
      /** Ticket definitions to delete. */
      byId?: ById;
      /** Whether to delete all event tickets. */
      all?: boolean;
  }
  /**
   * **Deprecated.** This function will continue to work until November 8, 2024, but a newer version is available at [`changeCurrency()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/changecurrency).
   * >**Migration Instructions**.
   * > If this function is already in your code, it will continue to work. To stay compatible with future changes, migrate to [`changeCurrency()`](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitionsv2/changecurrency).
   * > To migrate to the new function:
   * > 1. Add the new import statement:
   * > ```js
   * > import { ticketDefinitionsV2 } from 'wix-events.v2';
   * > ```
   * > 2. Look for any code that uses `ticketDefinitions.changeCurrency()`, and replace it with `ticketDefinitionsV2.changeCurrency()`. Update your code to work with the new `changeCurrency()` response properties.
   * > 3. Test your changes to make sure your code behaves as expected.
   *
   * Changes the currency for all tickets per event.
   *
   * @public
   * @requiredField options.currency
   * @adminMethod
   */
  function changeCurrency$1(options?: ChangeCurrencyOptions$1): Promise<void>;
  interface ChangeCurrencyOptions$1 {
      /** Event ID. */
      eventId?: string;
      /** Event currency, in 3-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
      currency: string;
  }
  
  type eventsV1TicketDefinition_universal_d_WixFeeConfig = WixFeeConfig;
  type eventsV1TicketDefinition_universal_d_FeeType = FeeType;
  const eventsV1TicketDefinition_universal_d_FeeType: typeof FeeType;
  type eventsV1TicketDefinition_universal_d_TicketSalePeriod = TicketSalePeriod;
  type eventsV1TicketDefinition_universal_d_TicketSaleStatus = TicketSaleStatus;
  const eventsV1TicketDefinition_universal_d_TicketSaleStatus: typeof TicketSaleStatus;
  type eventsV1TicketDefinition_universal_d_TicketDefinitionStateEnumState = TicketDefinitionStateEnumState;
  const eventsV1TicketDefinition_universal_d_TicketDefinitionStateEnumState: typeof TicketDefinitionStateEnumState;
  type eventsV1TicketDefinition_universal_d_TicketPricing = TicketPricing;
  type eventsV1TicketDefinition_universal_d_TicketPricingPriceOneOf = TicketPricingPriceOneOf;
  type eventsV1TicketDefinition_universal_d_PricingOption = PricingOption;
  type eventsV1TicketDefinition_universal_d_TicketDefinitionFieldset = TicketDefinitionFieldset;
  const eventsV1TicketDefinition_universal_d_TicketDefinitionFieldset: typeof TicketDefinitionFieldset;
  type eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsV2Request = QueryTicketDefinitionsV2Request;
  type eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsV2Response = QueryTicketDefinitionsV2Response;
  type eventsV1TicketDefinition_universal_d_ListTicketDefinitionsRequest = ListTicketDefinitionsRequest;
  type eventsV1TicketDefinition_universal_d_GroupBy = GroupBy;
  const eventsV1TicketDefinition_universal_d_GroupBy: typeof GroupBy;
  type eventsV1TicketDefinition_universal_d_ListTicketDefinitionsResponse = ListTicketDefinitionsResponse;
  type eventsV1TicketDefinition_universal_d_ResponseMetaData = ResponseMetaData;
  type eventsV1TicketDefinition_universal_d_TicketDefinitionData = TicketDefinitionData;
  type eventsV1TicketDefinition_universal_d_TicketDefinitionCreated = TicketDefinitionCreated;
  type eventsV1TicketDefinition_universal_d_OriginatedFrom = OriginatedFrom;
  type eventsV1TicketDefinition_universal_d_TicketDefinitionUpdated = TicketDefinitionUpdated;
  type eventsV1TicketDefinition_universal_d_DeleteTicketDefinitionRequestDeleteOneOf = DeleteTicketDefinitionRequestDeleteOneOf;
  type eventsV1TicketDefinition_universal_d_ById = ById;
  type eventsV1TicketDefinition_universal_d_TicketDefinitionDeleted = TicketDefinitionDeleted;
  type eventsV1TicketDefinition_universal_d_PaidTicketDefinitionExistsRequest = PaidTicketDefinitionExistsRequest;
  type eventsV1TicketDefinition_universal_d_PaidTicketDefinitionExistsResponse = PaidTicketDefinitionExistsResponse;
  const eventsV1TicketDefinition_universal_d_queryTicketDefinitionsV2: typeof queryTicketDefinitionsV2;
  type eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsV2Options = QueryTicketDefinitionsV2Options;
  type eventsV1TicketDefinition_universal_d_DefinitionsQueryResult = DefinitionsQueryResult;
  type eventsV1TicketDefinition_universal_d_DefinitionsQueryBuilder = DefinitionsQueryBuilder;
  const eventsV1TicketDefinition_universal_d_listTicketDefinitions: typeof listTicketDefinitions;
  type eventsV1TicketDefinition_universal_d_ListTicketDefinitionsOptions = ListTicketDefinitionsOptions;
  type eventsV1TicketDefinition_universal_d_DeleteTicketDefinitionOptions = DeleteTicketDefinitionOptions;
  namespace eventsV1TicketDefinition_universal_d {
    export {
      TicketDefinition$1 as TicketDefinition,
      Money$2 as Money,
      Dashboard$2 as Dashboard,
      eventsV1TicketDefinition_universal_d_WixFeeConfig as WixFeeConfig,
      eventsV1TicketDefinition_universal_d_FeeType as FeeType,
      eventsV1TicketDefinition_universal_d_TicketSalePeriod as TicketSalePeriod,
      eventsV1TicketDefinition_universal_d_TicketSaleStatus as TicketSaleStatus,
      eventsV1TicketDefinition_universal_d_TicketDefinitionStateEnumState as TicketDefinitionStateEnumState,
      eventsV1TicketDefinition_universal_d_TicketPricing as TicketPricing,
      eventsV1TicketDefinition_universal_d_TicketPricingPriceOneOf as TicketPricingPriceOneOf,
      PricingOptions$1 as PricingOptions,
      eventsV1TicketDefinition_universal_d_PricingOption as PricingOption,
      Type$2 as Type,
      QueryTicketDefinitionsRequest$1 as QueryTicketDefinitionsRequest,
      eventsV1TicketDefinition_universal_d_TicketDefinitionFieldset as TicketDefinitionFieldset,
      QueryTicketDefinitionsResponse$1 as QueryTicketDefinitionsResponse,
      FacetCounts$2 as FacetCounts,
      eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsV2Request as QueryTicketDefinitionsV2Request,
      QueryV2$3 as QueryV2,
      QueryV2PagingMethodOneOf$3 as QueryV2PagingMethodOneOf,
      Sorting$3 as Sorting,
      SortOrder$3 as SortOrder,
      Paging$3 as Paging,
      CursorPaging$3 as CursorPaging,
      eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsV2Response as QueryTicketDefinitionsV2Response,
      PagingMetadataV2$3 as PagingMetadataV2,
      Cursors$3 as Cursors,
      eventsV1TicketDefinition_universal_d_ListTicketDefinitionsRequest as ListTicketDefinitionsRequest,
      State$2 as State,
      eventsV1TicketDefinition_universal_d_GroupBy as GroupBy,
      eventsV1TicketDefinition_universal_d_ListTicketDefinitionsResponse as ListTicketDefinitionsResponse,
      eventsV1TicketDefinition_universal_d_ResponseMetaData as ResponseMetaData,
      GetTicketDefinitionRequest$1 as GetTicketDefinitionRequest,
      GetTicketDefinitionResponse$1 as GetTicketDefinitionResponse,
      CreateTicketDefinitionRequest$1 as CreateTicketDefinitionRequest,
      eventsV1TicketDefinition_universal_d_TicketDefinitionData as TicketDefinitionData,
      CreateTicketDefinitionResponse$1 as CreateTicketDefinitionResponse,
      eventsV1TicketDefinition_universal_d_TicketDefinitionCreated as TicketDefinitionCreated,
      eventsV1TicketDefinition_universal_d_OriginatedFrom as OriginatedFrom,
      UpdateTicketDefinitionRequest$1 as UpdateTicketDefinitionRequest,
      UpdateTicketDefinitionResponse$1 as UpdateTicketDefinitionResponse,
      eventsV1TicketDefinition_universal_d_TicketDefinitionUpdated as TicketDefinitionUpdated,
      DeleteTicketDefinitionRequest$1 as DeleteTicketDefinitionRequest,
      eventsV1TicketDefinition_universal_d_DeleteTicketDefinitionRequestDeleteOneOf as DeleteTicketDefinitionRequestDeleteOneOf,
      eventsV1TicketDefinition_universal_d_ById as ById,
      DeleteTicketDefinitionResponse$1 as DeleteTicketDefinitionResponse,
      eventsV1TicketDefinition_universal_d_TicketDefinitionDeleted as TicketDefinitionDeleted,
      ChangeCurrencyRequest$1 as ChangeCurrencyRequest,
      ChangeCurrencyResponse$1 as ChangeCurrencyResponse,
      BulkCopyTicketDefinitionsByEventIdRequest$1 as BulkCopyTicketDefinitionsByEventIdRequest,
      BulkCopyTicketDefinitionsByEventIdResponse$1 as BulkCopyTicketDefinitionsByEventIdResponse,
      CopiedTicketDefinition$1 as CopiedTicketDefinition,
      eventsV1TicketDefinition_universal_d_PaidTicketDefinitionExistsRequest as PaidTicketDefinitionExistsRequest,
      eventsV1TicketDefinition_universal_d_PaidTicketDefinitionExistsResponse as PaidTicketDefinitionExistsResponse,
      MessageEnvelope$3 as MessageEnvelope,
      IdentificationData$3 as IdentificationData,
      IdentificationDataIdOneOf$3 as IdentificationDataIdOneOf,
      WebhookIdentityType$3 as WebhookIdentityType,
      queryTicketDefinitions$1 as queryTicketDefinitions,
      QueryTicketDefinitionsOptions$1 as QueryTicketDefinitionsOptions,
      eventsV1TicketDefinition_universal_d_queryTicketDefinitionsV2 as queryTicketDefinitionsV2,
      eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsV2Options as QueryTicketDefinitionsV2Options,
      eventsV1TicketDefinition_universal_d_DefinitionsQueryResult as DefinitionsQueryResult,
      eventsV1TicketDefinition_universal_d_DefinitionsQueryBuilder as DefinitionsQueryBuilder,
      eventsV1TicketDefinition_universal_d_listTicketDefinitions as listTicketDefinitions,
      eventsV1TicketDefinition_universal_d_ListTicketDefinitionsOptions as ListTicketDefinitionsOptions,
      getTicketDefinition$1 as getTicketDefinition,
      GetTicketDefinitionOptions$1 as GetTicketDefinitionOptions,
      createTicketDefinition$1 as createTicketDefinition,
      CreateTicketDefinitionOptions$1 as CreateTicketDefinitionOptions,
      updateTicketDefinition$1 as updateTicketDefinition,
      UpdateTicketDefinitionOptions$1 as UpdateTicketDefinitionOptions,
      deleteTicketDefinition$1 as deleteTicketDefinition,
      eventsV1TicketDefinition_universal_d_DeleteTicketDefinitionOptions as DeleteTicketDefinitionOptions,
      changeCurrency$1 as changeCurrency,
      ChangeCurrencyOptions$1 as ChangeCurrencyOptions,
    };
  }
  
  interface Policy {
      /**
       * Policy ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the policy is updated. The existing revision must be used when updating a policy to prevent conflicting changes. You'll get an error if you try to use the previous revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time when the policy was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time of the policy's latest update in.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Policy name that is visible in the dashboard and checkout form.
       *
       * Min: 1 character
       *
       * Max: 40 characters
       */
      name?: string;
      /**
       * Policy body, usually containing various terms and conditions.
       *
       * Min: 1 character
       *
       * Max: 50000 characters.
       *
       * **Note**: You can format text using various HTML tags such as `<p>`, `<b>`, `<ul>`, etc.
       */
      body?: string;
      /** ID of the event to which the policy belongs. */
      eventId?: string;
  }
  interface CreatePolicyRequest {
      /** Policy info. */
      policy: Policy;
  }
  interface CreatePolicyResponse {
      /** Created policy. */
      policy?: Policy;
  }
  interface UpdatePolicyRequest {
      /** Policy to update. */
      policy: Policy;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdatePolicyResponse {
      /** The updated policy. */
      policy?: Policy;
  }
  interface UpdatePolicySortIndexRequest {
      /** Policy's ID */
      policyId?: string;
      /** The revision of the event policy. */
      revision?: string;
      /** The sort index of a policy to set. */
      sortIndex?: number;
  }
  interface UpdatePolicySortIndexResponse {
      /** The updated event policy. */
      policy?: Policy;
  }
  interface DeletePolicyRequest {
      /** ID of the policy to delete. */
      policyId: string;
  }
  interface DeletePolicyResponse {
  }
  interface QueryPoliciesRequest {
      /** Query options. See [API Query Langauge](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
      query: QueryV2$2;
  }
  interface QueryV2$2 extends QueryV2PagingMethodOneOf$2 {
      /** Pagination options. */
      paging?: Paging$2;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
      /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1", "fieldName2":{"$operator":"value2"} }`. <br/> <br/> **Example:** <br/> `"filter" : { "id": "2224a9d1-79e6-4549-a5c5-bf7ce5aac1a5", "revision": {"$ne":"1"} }` <br/> <br/> See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/policy-v2/filter-and-sort) for more information. */
      filter?: Record<string, any> | null;
      /** Sort object in the following format: <br/> `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]` <br/> <br/> **Example:** <br/> `[{"fieldName":"createdDate","direction":"DESC"}]` <br/> <br/> See [supported fields](https://dev.wix.com/api/rest/wix-events/policy-v2/filter-and-sort) for more information. */
      sort?: Sorting$2[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$2 {
      /** Pagination options. */
      paging?: Paging$2;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
  }
  interface Sorting$2 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order (ASC/DESC). Defaults to ASC */
      order?: SortOrder$2;
  }
  enum SortOrder$2 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging$2 {
      /** Number of items to load per page. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface CursorPaging$2 {
      /** Number of items to load per page. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryPoliciesResponse {
      /** Event policies. */
      policies?: Policy[];
      /** Query result's metadata. */
      metadata?: PagingMetadataV2$2;
  }
  interface PagingMetadataV2$2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$2;
  }
  interface Cursors$2 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface ReorderEventPoliciesRequest extends ReorderEventPoliciesRequestReferencePolicyOneOf {
      /** Move the given `policyId` before the specified policy. */
      beforePolicyId?: string;
      /** Move the given `policyId` after the specified policy. */
      afterPolicyId?: string;
      /** Event ID. */
      eventId: string;
      /** Event policy ID. */
      policyId: string;
  }
  /** @oneof */
  interface ReorderEventPoliciesRequestReferencePolicyOneOf {
      /**   */
      beforePolicyId?: string;
      /** Move the given `policyId` after the specified policy. */
      afterPolicyId?: string;
  }
  interface ReorderEventPoliciesResponse {
      /** Ordered event policies. */
      policies?: Policy[];
  }
  interface GetPolicyRequest {
      /** Policy ID. */
      policyId: string;
  }
  interface GetPolicyResponse {
      /** The requested policy. */
      policy?: Policy;
  }
  interface EventCopied$1 {
      /** Event created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: Location$2;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig$2;
      /** Event title. */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
      /** Event status. */
      status?: EventStatus$2;
      /** Instance ID. Indicates the original app instance which current event was derived from. */
      derivedFromInstanceId?: string | null;
      /** Event ID. Indicates the original event which current event was derived from. */
      derivedFromEventId?: string | null;
      /**
       * Map of copied ticket definitions from original event.
       * Key represents ticket def id in the original event.
       * Value represents ticket def id in the newly created event.
       */
      ticketDefinitions?: Record<string, string>;
  }
  interface Location$2 {
      /** Location name. */
      name?: string | null;
      /** Location map coordinates. */
      coordinates?: MapCoordinates$2;
      /** Single line address representation. */
      address?: string | null;
      /** Location type. */
      type?: LocationType$2;
      /**
       * Full address derived from formatted single line `address`.
       * When `full_address` is used to create or update the event, deprecated `address` and `coordinates` are ignored.
       * If provided `full_address` has empty `formatted_address` or `coordinates`, it will be auto-completed using Atlas service.
       *
       * Migration notes:
       * - `full_address.formatted_address` is equivalent to `address`.
       * - `full_address.geocode` is equivalent to `coordinates`.
       */
      fullAddress?: Address$2;
      /**
       * Defines event location as TBD (To Be Determined).
       * When event location is not yet defined, `name` is displayed instead of location address.
       * `coordinates`, `address`, `type` and `full_address` are not required when location is TBD.
       */
      tbd?: boolean | null;
  }
  interface MapCoordinates$2 {
      /** Latitude. */
      lat?: number;
      /** Longitude. */
      lng?: number;
  }
  enum LocationType$2 {
      VENUE = "VENUE",
      ONLINE = "ONLINE"
  }
  /** Physical address */
  interface Address$2 extends AddressStreetOneOf$2 {
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress$2;
      /** Main address line (usually street and number) as free text */
      addressLine1?: string | null;
      /** country code */
      country?: string | null;
      /** subdivision (usually state or region) code according to ISO 3166-2 */
      subdivision?: string | null;
      /** city name */
      city?: string | null;
      /** zip/postal code */
      postalCode?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, Floor */
      addressLine2?: string | null;
      /** A string containing the human-readable address of this location */
      formatted?: string | null;
      /** coordinates of the physical address */
      location?: AddressLocation$2;
  }
  /** @oneof */
  interface AddressStreetOneOf$2 {
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress$2;
      /** Main address line (usually street and number) as free text */
      addressLine?: string | null;
  }
  interface StreetAddress$2 {
      /** street number */
      number?: string;
      /** street name */
      name?: string;
      /**
       * apartment number
       * @internal
       */
      apt?: string;
  }
  interface AddressLocation$2 {
      /** address latitude coordinates */
      latitude?: number | null;
      /** address longitude coordinates */
      longitude?: number | null;
  }
  interface Subdivision$2 {
      /** subdivision short code */
      code?: string;
      /** subdivision full-name */
      name?: string;
      /**
       * subdivision level
       * @internal
       */
      type?: SubdivisionType$2;
      /**
       * free text description of subdivision type
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType$2 {
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
  interface ScheduleConfig$2 {
      /**
       * Defines event as TBD (To Be Determined) schedule.
       * When event time is not yet defined, TBD message is displayed instead of event start and end times.
       * `startDate`, `endDate` and `timeZoneId` are not required when schedule is TBD.
       */
      scheduleTbd?: boolean;
      /** TBD message. */
      scheduleTbdMessage?: string | null;
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      /** Whether end date is hidden in the formatted schedule. */
      endDateHidden?: boolean;
      /** Whether time zone is displayed in formatted schedule. */
      showTimeZone?: boolean;
      /** Event recurrences. */
      recurrences?: Recurrences$2;
  }
  interface Recurrences$2 {
      /** Event occurrences. */
      occurrences?: Occurrence$2[];
      /**
       * Recurring event category ID.
       * @readonly
       */
      categoryId?: string | null;
      /**
       * Recurrence status.
       * @readonly
       */
      status?: Status$2;
  }
  interface Occurrence$2 {
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      /** Whether time zone is displayed in formatted schedule. */
      showTimeZone?: boolean;
  }
  enum Status$2 {
      /** Event occurs only once. */
      ONE_TIME = "ONE_TIME",
      /** Event is recurring. */
      RECURRING = "RECURRING",
      /** Marks the next upcoming occurrence of the recurring event. */
      RECURRING_NEXT = "RECURRING_NEXT",
      /** Marks the most recent ended occurrence of the recurring event. */
      RECURRING_LAST_ENDED = "RECURRING_LAST_ENDED",
      /** Marks the most recent canceled occurrence of the recurring event. */
      RECURRING_LAST_CANCELED = "RECURRING_LAST_CANCELED"
  }
  enum EventStatus$2 {
      /** Event is public and scheduled to start */
      SCHEDULED = "SCHEDULED",
      /** Event has started */
      STARTED = "STARTED",
      /** Event has ended */
      ENDED = "ENDED",
      /** Event was canceled */
      CANCELED = "CANCELED",
      /** Event is not public and needs to be published */
      DRAFT = "DRAFT"
  }
  interface Empty$2 {
  }
  interface GetPolicyFromTrashBinRequest {
      /** Policy ID. */
      policyId?: string;
  }
  interface GetPolicyFromTrashBinResponse {
      /** The requested policy. */
      policy?: Policy;
  }
  interface DomainEvent$2 extends DomainEventBodyOneOf$2 {
      createdEvent?: EntityCreatedEvent$2;
      updatedEvent?: EntityUpdatedEvent$2;
      deletedEvent?: EntityDeletedEvent$2;
      actionEvent?: ActionEvent$2;
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
  interface DomainEventBodyOneOf$2 {
      createdEvent?: EntityCreatedEvent$2;
      updatedEvent?: EntityUpdatedEvent$2;
      deletedEvent?: EntityDeletedEvent$2;
      actionEvent?: ActionEvent$2;
  }
  interface EntityCreatedEvent$2 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$2 {
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
  interface EntityDeletedEvent$2 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$2 {
      bodyAsJson?: string;
  }
  interface MessageEnvelope$2 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$2;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$2 extends IdentificationDataIdOneOf$2 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$2;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$2 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$2 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Creates a policy.
   *
   *
   * <!--
   * >  Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * -->
   *
   * The `createPolicy()` function returns a Promise that resolves to the newly-created policy.
   *
   * You can create up to 3 policies per event. If you try to create more than 3, you'll get the "Maximum number of policies for the event has been reached" error.
   * @public
   * @requiredField policy
   * @requiredField policy.body
   * @requiredField policy.eventId
   * @requiredField policy.name
   * @param policy - Policy info.
   * @adminMethod
   * @returns Created policy.
   */
  function createPolicy(policy: Policy): Promise<Policy>;
  /**
   * Updates a policy.
   *
   * <!--
   * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * -->
   *
   * The `updatePolicy()` function returns a Promise that resolves to the newly-updated policy.
   *
   * Each time the policy is updated, `revision` increments by 1. The existing `revision` must be included when updating the policy. This ensures you're working with the latest policy and prevents unintended overwrites.
   * @public
   * @requiredField _id
   * @requiredField policy
   * @requiredField policy.body
   * @requiredField policy.eventId
   * @requiredField policy.name
   * @requiredField policy.revision
   * @param policy - Policy to update.
   * @param _id - Policy ID.
   * @adminMethod
   * @returns The updated policy.
   */
  function updatePolicy(_id: string | null, policy: UpdatePolicy, options?: UpdatePolicyOptions): Promise<Policy>;
  interface UpdatePolicy {
      /**
       * Policy ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Revision number, which increments by 1 each time the policy is updated. The existing revision must be used when updating a policy to prevent conflicting changes. You'll get an error if you try to use the previous revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date policy was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time of the policy's latest update in `yyyy-mm-ddThh:mm:sssZ` format.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Policy name that is visible in the dashboard and checkout form.
       *
       * Min: 1 character
       *
       * Max: 40 characters
       */
      name?: string;
      /**
       * Policy body. Here you can enter various terms and conditions.
       *
       * Min: 1 character
       *
       * Max: 50000 characters
       *
       * **Note**: You can format text using various HTML tags such as `<p>`, `<b>`, `<ul>`, etc.
       */
      body?: string;
      /** ID of the event to which the policy belongs. */
      eventId?: string;
  }
  interface UpdatePolicyOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Permanently deletes a policy.
   *
   *
   * <!--
   * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * -->
   *
   * The `deletePolicy()` function returns a Promise that resolves when the specified policy is deleted.
   *
   * Deleted policies are not returned by the `getPolicy()` or `queryPolicies()` functions.
   * @public
   * @requiredField policyId
   * @param options - Options for Delete Policy function.
   * @param policyId - ID of the policy to delete.
   * @adminMethod
   */
  function deletePolicy(policyId: string): Promise<void>;
  /**
   * Creates a query to retrieve a list of policies, given the provided paging and filter.
   *
   *
   * The `queryPolicies()` function builds a query to retrieve a list of policies and returns a [PoliciesQueryBuilder](https://www.wix.com/velo/reference/wix-events-v2/policies/policiesquerybuilder) object.
   *
   * The returned object contains the query definition which is typically used to run the query using the [`find()`](https://www.wix.com/velo/reference/wix-events-v2/policies/policiesquerybuilder/find) function.
   *
   * You can refine the query by chaining `PoliciesQueryBuilder` functions onto the query. `PoliciesQueryBuilder` functions enable you to sort, filter and control the results that `PoliciesQueryBuilder.find()` returns.
   *
   * The query runs with the following `PoliciesQueryBuilder` defaults that you can override:
   *
   * [`limit`](https://www.wix.com/velo/reference/wix-events-v2/policies/policiesquerybuilder/limit): `50`
   * [`descending`](https://www.wix.com/velo/reference/wix-events-v2/policies/policiesquerybuilder/descending): `_createdDate`
   *
   * The functions that are chained to `queryPolicies()` are applied in the order they are called. For example, if you sort on the `_createdDate` property in ascending order and then on the id property in descending order, the results are sorted by the created date and then, if there are multiple results with the same date, the items are sorted by the id.
   *
   * The table below shows which `PoliciesQueryBuilder` functions are supported for `queryPoliciesGuests()`. You can only use one filter function for each property. If a property is used in more than one filter, only the first filter will work.
   * @public */
  function queryPolicies(): PoliciesQueryBuilder;
  interface QueryCursorResult$1 {
      cursors: Cursors$2;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface PoliciesQueryResult extends QueryCursorResult$1 {
      items: Policy[];
      query: PoliciesQueryBuilder;
      next: () => Promise<PoliciesQueryResult>;
      prev: () => Promise<PoliciesQueryResult>;
  }
  interface PoliciesQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: '_id' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'body' | 'eventId', value: any) => PoliciesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: '_id' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'body' | 'eventId', value: any) => PoliciesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ge: (propertyName: 'revision' | '_createdDate' | '_updatedDate', value: any) => PoliciesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      gt: (propertyName: 'revision' | '_createdDate' | '_updatedDate', value: any) => PoliciesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      le: (propertyName: 'revision' | '_createdDate' | '_updatedDate', value: any) => PoliciesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      lt: (propertyName: 'revision' | '_createdDate' | '_updatedDate', value: any) => PoliciesQueryBuilder;
      in: (propertyName: '_id' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'body' | 'eventId', value: any) => PoliciesQueryBuilder;
      exists: (propertyName: '_id' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'body' | 'eventId', value: boolean) => PoliciesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'_id' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'body' | 'eventId'>) => PoliciesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'_id' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'body' | 'eventId'>) => PoliciesQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => PoliciesQueryBuilder;
      /** @param cursor - A pointer to specific record */
      skipTo: (cursor: string) => PoliciesQueryBuilder;
      find: () => Promise<PoliciesQueryResult>;
  }
  /**
   * Changes policy order in an event dashboard and agreement checkbox on the checkout form.
   * For example, if we have 3 policies in the list, after using this function the 3rd policy will become the 1st, and other policies will move by 1 position. By default, the policies are arranged by the created date in descending order.
   *
   * >  **Note**: it is possible to use both `beforePolicyId` and `afterPolicyId` at the same time but only the last one defined will be executed.
   *
   * <!--
   * >  Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
   * -->
   *
   * The `reorderEventPolicies()` function returns a Promise that resolves to the newly-reordered policy.
   * @param policyId - Event policy ID.
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   * @requiredField policyId
   * @param options - Options for Reorder Event Policies function.
   * @adminMethod
   */
  function reorderEventPolicies(policyId: string, eventId: string, options?: ReorderEventPoliciesOptions): Promise<ReorderEventPoliciesResponse>;
  interface ReorderEventPoliciesOptions extends ReorderEventPoliciesRequestReferencePolicyOneOf {
      /** Move the given `policyId` before the specified policy. */
      beforePolicyId?: string;
      /** Move the given `policyId` after the specified policy. */
      afterPolicyId?: string;
  }
  /**
   * Retrieves a policy by ID.
   *
   *
   * The `getPolicy()` function returns a Promise that resolves to a policy whose ID matches the given ID.
   * @public
   * @requiredField policyId
   * @param policyId - Policy ID.
   * @returns The requested policy.
   */
  function getPolicy(policyId: string): Promise<Policy>;
  
  type eventsV2Policy_universal_d_Policy = Policy;
  type eventsV2Policy_universal_d_CreatePolicyRequest = CreatePolicyRequest;
  type eventsV2Policy_universal_d_CreatePolicyResponse = CreatePolicyResponse;
  type eventsV2Policy_universal_d_UpdatePolicyRequest = UpdatePolicyRequest;
  type eventsV2Policy_universal_d_UpdatePolicyResponse = UpdatePolicyResponse;
  type eventsV2Policy_universal_d_UpdatePolicySortIndexRequest = UpdatePolicySortIndexRequest;
  type eventsV2Policy_universal_d_UpdatePolicySortIndexResponse = UpdatePolicySortIndexResponse;
  type eventsV2Policy_universal_d_DeletePolicyRequest = DeletePolicyRequest;
  type eventsV2Policy_universal_d_DeletePolicyResponse = DeletePolicyResponse;
  type eventsV2Policy_universal_d_QueryPoliciesRequest = QueryPoliciesRequest;
  type eventsV2Policy_universal_d_QueryPoliciesResponse = QueryPoliciesResponse;
  type eventsV2Policy_universal_d_ReorderEventPoliciesRequest = ReorderEventPoliciesRequest;
  type eventsV2Policy_universal_d_ReorderEventPoliciesRequestReferencePolicyOneOf = ReorderEventPoliciesRequestReferencePolicyOneOf;
  type eventsV2Policy_universal_d_ReorderEventPoliciesResponse = ReorderEventPoliciesResponse;
  type eventsV2Policy_universal_d_GetPolicyRequest = GetPolicyRequest;
  type eventsV2Policy_universal_d_GetPolicyResponse = GetPolicyResponse;
  type eventsV2Policy_universal_d_GetPolicyFromTrashBinRequest = GetPolicyFromTrashBinRequest;
  type eventsV2Policy_universal_d_GetPolicyFromTrashBinResponse = GetPolicyFromTrashBinResponse;
  const eventsV2Policy_universal_d_createPolicy: typeof createPolicy;
  const eventsV2Policy_universal_d_updatePolicy: typeof updatePolicy;
  type eventsV2Policy_universal_d_UpdatePolicy = UpdatePolicy;
  type eventsV2Policy_universal_d_UpdatePolicyOptions = UpdatePolicyOptions;
  const eventsV2Policy_universal_d_deletePolicy: typeof deletePolicy;
  const eventsV2Policy_universal_d_queryPolicies: typeof queryPolicies;
  type eventsV2Policy_universal_d_PoliciesQueryResult = PoliciesQueryResult;
  type eventsV2Policy_universal_d_PoliciesQueryBuilder = PoliciesQueryBuilder;
  const eventsV2Policy_universal_d_reorderEventPolicies: typeof reorderEventPolicies;
  type eventsV2Policy_universal_d_ReorderEventPoliciesOptions = ReorderEventPoliciesOptions;
  const eventsV2Policy_universal_d_getPolicy: typeof getPolicy;
  namespace eventsV2Policy_universal_d {
    export {
      eventsV2Policy_universal_d_Policy as Policy,
      eventsV2Policy_universal_d_CreatePolicyRequest as CreatePolicyRequest,
      eventsV2Policy_universal_d_CreatePolicyResponse as CreatePolicyResponse,
      eventsV2Policy_universal_d_UpdatePolicyRequest as UpdatePolicyRequest,
      eventsV2Policy_universal_d_UpdatePolicyResponse as UpdatePolicyResponse,
      eventsV2Policy_universal_d_UpdatePolicySortIndexRequest as UpdatePolicySortIndexRequest,
      eventsV2Policy_universal_d_UpdatePolicySortIndexResponse as UpdatePolicySortIndexResponse,
      eventsV2Policy_universal_d_DeletePolicyRequest as DeletePolicyRequest,
      eventsV2Policy_universal_d_DeletePolicyResponse as DeletePolicyResponse,
      eventsV2Policy_universal_d_QueryPoliciesRequest as QueryPoliciesRequest,
      QueryV2$2 as QueryV2,
      QueryV2PagingMethodOneOf$2 as QueryV2PagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      Paging$2 as Paging,
      CursorPaging$2 as CursorPaging,
      eventsV2Policy_universal_d_QueryPoliciesResponse as QueryPoliciesResponse,
      PagingMetadataV2$2 as PagingMetadataV2,
      Cursors$2 as Cursors,
      eventsV2Policy_universal_d_ReorderEventPoliciesRequest as ReorderEventPoliciesRequest,
      eventsV2Policy_universal_d_ReorderEventPoliciesRequestReferencePolicyOneOf as ReorderEventPoliciesRequestReferencePolicyOneOf,
      eventsV2Policy_universal_d_ReorderEventPoliciesResponse as ReorderEventPoliciesResponse,
      eventsV2Policy_universal_d_GetPolicyRequest as GetPolicyRequest,
      eventsV2Policy_universal_d_GetPolicyResponse as GetPolicyResponse,
      EventCopied$1 as EventCopied,
      Location$2 as Location,
      MapCoordinates$2 as MapCoordinates,
      LocationType$2 as LocationType,
      Address$2 as Address,
      AddressStreetOneOf$2 as AddressStreetOneOf,
      StreetAddress$2 as StreetAddress,
      AddressLocation$2 as AddressLocation,
      Subdivision$2 as Subdivision,
      SubdivisionType$2 as SubdivisionType,
      ScheduleConfig$2 as ScheduleConfig,
      Recurrences$2 as Recurrences,
      Occurrence$2 as Occurrence,
      Status$2 as Status,
      EventStatus$2 as EventStatus,
      Empty$2 as Empty,
      eventsV2Policy_universal_d_GetPolicyFromTrashBinRequest as GetPolicyFromTrashBinRequest,
      eventsV2Policy_universal_d_GetPolicyFromTrashBinResponse as GetPolicyFromTrashBinResponse,
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      MessageEnvelope$2 as MessageEnvelope,
      IdentificationData$2 as IdentificationData,
      IdentificationDataIdOneOf$2 as IdentificationDataIdOneOf,
      WebhookIdentityType$2 as WebhookIdentityType,
      eventsV2Policy_universal_d_createPolicy as createPolicy,
      eventsV2Policy_universal_d_updatePolicy as updatePolicy,
      eventsV2Policy_universal_d_UpdatePolicy as UpdatePolicy,
      eventsV2Policy_universal_d_UpdatePolicyOptions as UpdatePolicyOptions,
      eventsV2Policy_universal_d_deletePolicy as deletePolicy,
      eventsV2Policy_universal_d_queryPolicies as queryPolicies,
      eventsV2Policy_universal_d_PoliciesQueryResult as PoliciesQueryResult,
      eventsV2Policy_universal_d_PoliciesQueryBuilder as PoliciesQueryBuilder,
      eventsV2Policy_universal_d_reorderEventPolicies as reorderEventPolicies,
      eventsV2Policy_universal_d_ReorderEventPoliciesOptions as ReorderEventPoliciesOptions,
      eventsV2Policy_universal_d_getPolicy as getPolicy,
    };
  }
  
  interface V3Event {
      /**
       * Event ID.
       * @readonly
       */
      _id?: string;
      /** Event location. */
      location?: Location$1;
      /** Event date and time settings. */
      dateAndTimeSettings?: DateAndTimeSettings;
      /** Event title. */
      title?: string | null;
      /** Short description that appears under the event title. */
      shortDescription?: string | null;
      /** Detailed description of an event. You can enter the description using rich text format (add various types of markups, such as underlines, italics, bolding, color codes, bullet lists, and links by using HTML formatting tags). */
      detailedDescription?: string | null;
      /**
       * Main event image. <br>
       * **Note:** This field is returned only when the `DETAILS` fieldset is included in the request.
       */
      mainImage?: string;
      /**
       * Unique identifier of the event page. The naming is the same as the event title written in kebab case. For example, if your event title is "Leather Crafting 101", then the slug is "leather-crafting-101".
       * @readonly
       */
      slug?: string;
      /**
       * Date and time when the event was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time when the event was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Event status:
       *
       *   - `UPCOMING`: Event is published and scheduled to start.
       *   - `STARTED`: Event has started.
       *   - `ENDED`: Event has ended.
       *   - `CANCELED`: Event is canceled.
       *   - `DRAFT`: Event is not published.
       * @readonly
       */
      status?: Status$1;
      /**
       * RSVP or ticketing registration details. <br>
       * **Note:** This field is returned only when the `REGISTRATION` fieldset is included in the request.
       */
      registration?: Registration$1;
      /**
       * URLs that allow you to add an event to the Google calendar, or to download an [ICS calendar](https://icscalendar.com/) file. <br>
       * **Note:** This field is returned only when the `DETAILS` fieldset is included in the request.
       * @readonly
       */
      calendarUrls?: CalendarUrls;
      /**
       * Event page URL components. <br>
       * **Note:** This field is returned only when the `URLS` fieldset is included in the request.
       */
      eventPageUrl?: string;
      /**
       * Event registration form. <br>
       * **Note:** This field is returned only when the `FORM` fieldset is included in the request.
       */
      form?: Form$1;
      /**
       * Summary of RSVP or ticket sales. <br>
       * **Note:** This field is returned only when the `DASHBOARD` fieldset is included in the request and you have the "WIX_EVENTS.READ_EVENT_DASHBOARD" permissions.
       */
      summaries?: Summaries;
      /**
       * Instance ID of the site where the event is hosted.
       * @readonly
       */
      instanceId?: string;
      /** Guest list configuration. */
      guestListSettings?: GuestListSettings;
      /**
       * ID of the user who created the event.
       * @readonly
       */
      userId?: string;
      /**
       * Event discussion feed. For internal use.
       * @internal
       */
      feed?: Feed$1;
      /**
       * Online conferencing details. <br>
       * **Note:** This field is returned only when the `ONLINE_CONFERENCING_SESSION` fieldset is included in the request and you have the "WIX_EVENTS.READ_ONLINE_CONFERENCING" permissions.
       */
      onlineConferencing?: OnlineConferencing$1;
      /**
       * SEO settings. <br>
       * **Note:** This field is returned only when the `SEO_SETTINGS` fieldset is included in the request.
       */
      seoSettings?: SeoSettings$1;
      /**
       * Assigned contacts label key.
       * @readonly
       */
      contactLabel?: string | null;
      /**
       * Event schedule details. <br>
       * **Note:** This field is returned only when the `AGENDA` fieldset is included in the request.
       */
      agendaSettings?: AgendaSettings;
      /**
       * Event categories.
       * @internal
       */
      categories?: EventCategories;
      /** Visual settings for event. */
      eventDisplaySettings?: V3EventDisplaySettings;
      /**
       * True if ticket can be customised
       * @internal
       */
      customizableTickets?: boolean | null;
      /**
       * Labelling related data.
       * @internal
       */
      labellingSettings?: V3LabellingSettings;
  }
  interface Location$1 {
      /** Location name. This value is displayed instead of the address when the location is defined as TBD by setting the `locationTbd` property to `true`. */
      name?: string | null;
      /**
       * Location type:
       *
       *   - `VENUE`: The event is on-site at a specific physical location.
       *   - `ONLINE`: The event is online, such as a virtual video conference.
       */
      type?: LocationType$1;
      /** Exact location address. */
      address?: CommonAddress;
      /** Whether the event location is TBD. */
      locationTbd?: boolean | null;
  }
  enum LocationType$1 {
      /** Default value. This value is unused. */
      UNKNOWN_LOCATION = "UNKNOWN_LOCATION",
      VENUE = "VENUE",
      ONLINE = "ONLINE"
  }
  /** Physical address */
  interface CommonAddress extends CommonAddressStreetOneOf {
      /** Street address. */
      streetAddress?: CommonStreetAddress;
      /** Primary address information (street and building number). */
      addressLine1?: string | null;
      /** 2-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string | null;
      /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Zip or postal code. */
      postalCode?: string | null;
      /** Secondary address information (suite or apartment number and room number). */
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
      location?: CommonAddressLocation;
  }
  /** @oneof */
  interface CommonAddressStreetOneOf {
      /** Street address. */
      streetAddress?: CommonStreetAddress;
      /** Primary address information (street and building number). */
      addressLine?: string | null;
  }
  interface CommonStreetAddress {
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
  interface CommonAddressLocation {
      /** Address latitude coordinates. */
      latitude?: number | null;
      /** Address longitude coordinates. */
      longitude?: number | null;
  }
  interface CommonSubdivision {
      /** Short subdivision code. */
      code?: string;
      /** Subdivision full name. */
      name?: string;
      /**
       * Subdivision level
       * @internal
       */
      type?: SubdivisionSubdivisionType;
      /**
       * Free text description of subdivision type.
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionSubdivisionType {
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
  interface DateAndTimeSettings {
      /** Whether the event date and time are TBD. */
      dateAndTimeTbd?: boolean | null;
      /** Message that is displayed when time and date is TBD. */
      dateAndTimeTbdMessage?: string | null;
      /** Event start date. */
      startDate?: Date;
      /** Event end date. */
      endDate?: Date;
      /** Event time zone ID in the [TZ database](https://www.iana.org/time-zones) format. */
      timeZoneId?: string | null;
      /** Whether the end date is hidden in the formatted date and time. */
      hideEndDate?: boolean | null;
      /** Whether the time zone is displayed in the formatted schedule. */
      showTimeZone?: boolean | null;
      /**
       * Repeating event status. Possible values:
       *
       *   - `ONE_TIME`: The event happens only once and can last multiple days.
       *   - `RECURRING`: A series of events that repeat.
       *   - `RECURRING_UPCOMING`: Next event in a schedule of recurring events.
       *   - `RECURRING_RECENTLY_ENDED`: Latest event that ended in a schedule of recurring events.
       *   - `RECURRING_RECENTLY_CANCELED`: Latest canceled event tin a schedule of recurring events.
       * @readonly
       */
      recurrenceStatus?: RecurrenceStatusStatus;
      /** Event repetitions. */
      recurringEvents?: Recurrences$1;
      /** Formatted date and time settings. */
      formatted?: Formatted;
  }
  enum RecurrenceStatusStatus {
      /** Default value. This value is unused. */
      UNKNOWN_STATUS = "UNKNOWN_STATUS",
      /** Event happens only once. */
      ONE_TIME = "ONE_TIME",
      /** Event is repeating and has a list of scheduled repetitions. */
      RECURRING = "RECURRING",
      /** An upcoming event from the list of repetitions. */
      RECURRING_UPCOMING = "RECURRING_UPCOMING",
      /** Latest ended event from the list of repetitions. */
      RECURRING_RECENTLY_ENDED = "RECURRING_RECENTLY_ENDED",
      /** Latest cancelled event from the list of repetitions. */
      RECURRING_RECENTLY_CANCELED = "RECURRING_RECENTLY_CANCELED"
  }
  interface Recurrences$1 {
      /** Individual event dates info. */
      individualEventDates?: Occurrence$1[];
      /**
       * Recurring event category ID.
       * @readonly
       */
      categoryId?: string | null;
  }
  interface Occurrence$1 {
      /** Event start date. */
      startDate?: Date;
      /** Event end date. */
      endDate?: Date;
      /** Event time zone ID in the [TZ database](https://www.iana.org/time-zones) format. */
      timeZoneId?: string | null;
      /** Whether the time zone is displayed in a formatted schedule. */
      showTimeZone?: boolean;
  }
  interface Formatted {
      /**
       * Formatted date and time representation.
       *
       * Example of formatting when an event lasts multiple days and is in the UTC time zone: `September 1, 2015 at 10:20 AM – September 5, 2015 at 12:14 PM`.
       * Example of formatting when an event lasts 1 day and is in the GMT+2 time zone: `February 1, 2018, 12:10 – 2:50 PM GMT+2`.
       * @readonly
       */
      dateAndTime?: string | null;
      /**
       * Formatted start date of the event. Empty for TBD schedules.
       * @readonly
       */
      startDate?: string | null;
      /**
       * Formatted start time of the event. Empty for TBD schedules.
       * @readonly
       */
      startTime?: string | null;
      /**
       * Formatted end date of the event. Empty for TBD schedules or when the end date is hidden.
       * @readonly
       */
      endDate?: string | null;
      /**
       * Formatted end time of the event. Empty for TBD schedules or when the end date is hidden.
       * @readonly
       */
      endTime?: string | null;
  }
  enum Status$1 {
      /** Default value. This value is unused */
      UNKNOWN_EVENT_STATUS = "UNKNOWN_EVENT_STATUS",
      /** Event is public and scheduled to start */
      UPCOMING = "UPCOMING",
      /** Event has started */
      STARTED = "STARTED",
      /** Event has ended */
      ENDED = "ENDED",
      /** Event is canceled */
      CANCELED = "CANCELED",
      /** Event is not public */
      DRAFT = "DRAFT"
  }
  interface Registration$1 {
      /**
       * Current registration type:
       *
       *   - `RSVP`: Guests register by RSVPing to the event.
       *   - `TICKETING`: Guests register by buying tickets.
       *   - `EXTERNAL`: Guests register externally using some other site or platform.
       *   - `NONE`: No registration is required, all guests can attend. This registration type is for only displaying the event details on a site.
       *
       * The property value might change to `EXTERNAL` or `NONE` after initial event creation, depending on any additional configuration applied to the event.
       * @readonly
       */
      type?: RegistrationTypeType;
      /**
       * Registration status. Possible values:
       *
       *   - `CLOSED_AUTOMATICALLY`: Registration is closed after tickets are sold out.
       *   - `CLOSED_MANUALLY`: Registration is closed when the `registration.registrationDisabled` property is set to `true`.
       *   - `OPEN_RSVP`: Guests can start RSVPing to the event.
       *   - `OPEN_RSVP_WAITLIST_ONLY`: Guest list has reached the maximum, new guests are added to a waitlist.
       *   - `OPEN_TICKETS`: Guests can buy tickets to the event.
       *   - `OPEN_EXTERNAL`: Guests register on a different page or web address.
       *   - `SCHEDULED_RSVP`: Registration via RSVP is scheduled for the future.
       * @readonly
       */
      status?: RegistrationStatusStatus;
      /** RSVP registration details. */
      rsvp?: RsvpRegistration;
      /** Ticket registration details. */
      tickets?: TicketsRegistration;
      /** External registration details. */
      external?: ExternalRegistration;
      /**
       * Types of guests allowed to register. Possible values:
       *
       *   - `VISITOR_OR_MEMBER`: All site visitors can RSVP to the event.
       *   - `MEMBER`: Only people who have signed up as members of your site are able to RSVP to the event.
       */
      allowedGuestTypes?: GuestTypeType;
      /**
       * Initial event type which is set when creating an event. Possible values:
       *
       *   - `RSVP`: Guests register by RSVPing to the event.
       *   - `TICKETING`: Guests register by buying tickets.
       *
       *   This property value never changes.
       */
      initialType?: InitialRegistrationTypeType;
      /** Whether the registration is paused. */
      registrationPaused?: boolean;
      /** Whether the registration is disabled. */
      registrationDisabled?: boolean;
  }
  enum RegistrationTypeType {
      /** Default value. This value is unused */
      UNKNOWN_REGISTRATION_TYPE = "UNKNOWN_REGISTRATION_TYPE",
      /** Registration via RSVP */
      RSVP = "RSVP",
      /** Registration via ticket purchase */
      TICKETING = "TICKETING",
      /** External registration */
      EXTERNAL = "EXTERNAL",
      /** Registration not available */
      NONE = "NONE"
  }
  enum RegistrationStatusStatus {
      /** Registration status is not applicable */
      UNKNOWN_REGISTRATION_STATUS = "UNKNOWN_REGISTRATION_STATUS",
      /** Registration to event is closed */
      CLOSED_AUTOMATICALLY = "CLOSED_AUTOMATICALLY",
      /** Registration to event is closed manually */
      CLOSED_MANUALLY = "CLOSED_MANUALLY",
      /** Registration is open via RSVP */
      OPEN_RSVP = "OPEN_RSVP",
      /** Registration to event waitlist is open via RSVP */
      OPEN_RSVP_WAITLIST_ONLY = "OPEN_RSVP_WAITLIST_ONLY",
      /** Registration is open via ticket purchase */
      OPEN_TICKETS = "OPEN_TICKETS",
      /** Registration is open via external URL */
      OPEN_EXTERNAL = "OPEN_EXTERNAL",
      /** Registration will be open via RSVP */
      SCHEDULED_RSVP = "SCHEDULED_RSVP"
  }
  interface RsvpRegistration {
      /**
       * Available answers for registration to an event. Possible values:
       * - `YES_ONLY`: Only a **Yes** answer is available to select when RSVP'ing to an event.
       * - `YES_AND_NO`: Both **Yes** and **No** answers are available to select when RSVP'ing to an event.
       */
      responseType?: ResponseType;
      /** How many guests can RSVP to an event. */
      limit?: number | null;
      /** Whether a waitlist is opened when the total guest limit is reached. If `true`, guests can RSVP to an event and are automatically put in the waitlist with the `IN_WAITLIST` status. */
      waitlistEnabled?: boolean;
      /** Registration start date. */
      startDate?: Date;
      /** Registration end date. */
      endDate?: Date;
  }
  enum ResponseType {
      /** Default value. This value is unused. */
      UNKNOWN_RESPONSE_TYPE = "UNKNOWN_RESPONSE_TYPE",
      /** Only a **Yes** answer is available for the registration. */
      YES_ONLY = "YES_ONLY",
      /** *Yes** and **No** answers are available for the registration. */
      YES_AND_NO = "YES_AND_NO"
  }
  interface TicketsRegistration {
      /** Whether the registration form must be filled out separately for each ticket. */
      guestsAssignedSeparately?: boolean;
      /**
       * Ticket limit per order.
       * Default: 20 tickets.
       */
      ticketLimitPerOrder?: number;
      /**
       * App ID for external ticket stock management.
       * The default ticket stock value is as defined in the `TicketDefinition` object. If the ticket stock is defined in the stock manager app, the default is ignored.
       * @internal
       */
      stockManagerAppId?: string | null;
      /** Ticket price currency. */
      currency?: string | null;
      /**
       * Lowest ticket price.
       * @readonly
       */
      lowestPrice?: Money$1;
      /**
       * Highest ticket price.
       * @readonly
       */
      highestPrice?: Money$1;
      /**
       * Whether all tickets are sold for the event.
       * @readonly
       */
      soldOut?: boolean | null;
      /** How tax is applied. */
      taxSettings?: TaxSettings;
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface Money$1 {
      /** Amount of money in decimal form. A period is used as a decimal separator (for example, `3.99`). */
      value?: string;
      /** Currency code in 3-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
      currency?: string;
      /**
       * Amount of money in decimal form. A period or comma are used as a decimal separator (for example, `1 000,30`).
       * @readonly
       */
      formattedValue?: string | null;
  }
  interface TaxSettings {
      /**
       * Tax application settings:
       *
       *   - `INCLUDED_IN_PRICE`: Deduct the fee from the ticket price for a seller. For example, if you're selling tickets for $10, a service fee of $0.25 is deducted from the price and you'll get $9.75.
       *   - `ADDED_AT_CHECKOUT`: Show the fee iin addition to the ticket price at checkout and a guest pays the fee. For example, if you sell tickets for $10, a customer sees a service fee of $0.25 and pays $10.25 in total.
       */
      type?: TaxType$1;
      /** Tax name. */
      name?: string | null;
      /** Tax rate (for example,`21.55`). */
      rate?: string | null;
      /** Apply tax to donations. */
      appliedToDonations?: boolean | null;
  }
  enum TaxType$1 {
      /** Default value. This value is unused. */
      UNKNOWN_TAX_TYPE = "UNKNOWN_TAX_TYPE",
      /** Tax is included in the ticket price */
      INCLUDED_IN_PRICE = "INCLUDED_IN_PRICE",
      /** Tax is added to the final total at the checkout */
      ADDED_AT_CHECKOUT = "ADDED_AT_CHECKOUT"
  }
  interface ExternalRegistration {
      /** External event registration URL. */
      url?: string | null;
  }
  enum GuestTypeType {
      /** Default value. This value is unused */
      UNKNOWN_GUEST_TYPE = "UNKNOWN_GUEST_TYPE",
      /** Site visitor or member */
      VISITOR_OR_MEMBER = "VISITOR_OR_MEMBER",
      /** Site member */
      MEMBER = "MEMBER"
  }
  enum InitialRegistrationTypeType {
      /** Default value. This value is unused */
      UNKNOWN_INITIAL_REGISTRATION_TYPE = "UNKNOWN_INITIAL_REGISTRATION_TYPE",
      /** Registration via RSVP */
      RSVP = "RSVP",
      /** Registration via ticket purchase */
      TICKETING = "TICKETING"
  }
  interface CalendarUrls {
      /**
       * "Add to Google calendar" URL.
       * @readonly
       */
      google?: string;
      /**
       * "Download ICS calendar file" URL.
       * @readonly
       */
      ics?: string;
  }
  /**
   * The form defines which elements are rendered in the Wix UI during the registration process (RSVP or checkout).
   * It also contains customizable messages and labels.
   *
   *
   * A form is an ordered list of controls (blocks), which accept guest information into a field input.
   *
   * Each control contains one or more nested inputs. For example, `Name` control has two inputs:
   * - First Name
   * - Last Name
   *
   * By default, name and email controls are always required and are pinned to the top of the form.
   */
  interface Form$1 {
      /** Nested fields as an ordered list. */
      controls?: InputControl$1[];
      /** Set of configured form messages. */
      messages?: FormMessages$1;
  }
  /**
   * A block of nested fields.
   * Used to aggregate similar inputs like First Name and Last Name.
   */
  interface InputControl$1 {
      /** Field control type. */
      type?: InputControlType$1;
      /** Whether control is mandatory (such as name & email). When true, only label can be changed. */
      system?: boolean;
      /** Deprecated: Use `id`. */
      name?: string;
      /** Child inputs. */
      inputs?: Input$1[];
      /** Deprecated: use `inputs.label`. */
      label?: string;
      /** Field controls are sorted by this value in ascending order. */
      orderIndex?: number;
      /** Unique control ID. */
      _id?: string;
      /**
       * Whether input control is deleted.
       * @readonly
       */
      deleted?: boolean | null;
  }
  enum InputControlType$1 {
      /** Single text value field. */
      INPUT = "INPUT",
      /** Single text value field. */
      TEXTAREA = "TEXTAREA",
      /** Single-choice field of predefined values. */
      DROPDOWN = "DROPDOWN",
      /** Single-choice field of predefined values. */
      RADIO = "RADIO",
      /** Multiple-choice field of predefined values. */
      CHECKBOX = "CHECKBOX",
      /** First and last name fields. */
      NAME = "NAME",
      /** Additional guests and respective guest names fields. */
      GUEST_CONTROL = "GUEST_CONTROL",
      /** Single-line address field. */
      ADDRESS_SHORT = "ADDRESS_SHORT",
      /** Full address field. */
      ADDRESS_FULL = "ADDRESS_FULL",
      /** Year, month and day fields. */
      DATE = "DATE"
  }
  /** An input of one or multiple text values */
  interface Input$1 {
      /** Field name. */
      name?: string;
      /** Deprecated: use `ValueType.TEXT_ARRAY`. */
      array?: boolean;
      /** Main field label */
      label?: string;
      /** Additional labels for multi-valued fields such as address. */
      additionalLabels?: Record<string, string>;
      /** Predefined choice options for fields, such as dropdown. */
      options?: string[];
      /** Whether field is mandatory. */
      mandatory?: boolean;
      /** Maximum number of accepted characters (relevant for text fields). */
      maxLength?: number;
      /**
       * Type which determines field format.
       * Used to validate submitted response.
       */
      type?: ValueType$1;
      /**
       * A maximum accepted values for array input.
       * Only applicable for inputs of valueType: TEXT_ARRAY.
       */
      maxSize?: number | null;
      /**
       * Preselected option.
       * Currently only applicable for dropdown.
       */
      defaultOptionSelection?: OptionSelection$1;
      /**
       * Additional labels for multi-valued fields such as address.
       * @readonly
       */
      labels?: Label$1[];
  }
  enum ValueType$1 {
      TEXT = "TEXT",
      NUMBER = "NUMBER",
      TEXT_ARRAY = "TEXT_ARRAY",
      DATE_TIME = "DATE_TIME",
      ADDRESS = "ADDRESS"
  }
  /**
   * Describes initially selected option when an input has multiple choices.
   * Defaults to first (0th) option if not configured.
   */
  interface OptionSelection$1 extends OptionSelectionSelectedOptionOneOf$1 {
      /** 0-based index from predefined `input.options` which is selected initially. */
      optionIndex?: number;
      /**
       * Placeholder hint describing expected choices (such as "Please select").
       * Considered an empty choice.
       */
      placeholderText?: string;
  }
  /** @oneof */
  interface OptionSelectionSelectedOptionOneOf$1 {
      /** 0-based index from predefined `input.options` which is selected initially. */
      optionIndex?: number;
      /**
       * Placeholder hint describing expected choices (such as "Please select").
       * Considered an empty choice.
       */
      placeholderText?: string;
  }
  interface Label$1 {
      /** Field name. */
      name?: string;
      /** Field label. */
      label?: string;
  }
  /**
   * Defines form messages shown in UI before, during, and after registration flow.
   * It enables configuration of form titles, response labels, "thank you" messages, and call-to-action texts.
   */
  interface FormMessages$1 {
      /** RSVP form messages. */
      rsvp?: RsvpFormMessages$1;
      /** Checkout form messages. */
      checkout?: CheckoutFormMessages$1;
      /** Messages shown when event registration is closed. */
      registrationClosed?: RegistrationClosedMessages$1;
      /** Messages shown when event tickets are unavailable. */
      ticketsUnavailable?: TicketsUnavailableMessages$1;
  }
  interface RsvpFormMessages$1 {
      /** Label text indicating RSVP `YES` response. */
      rsvpYesOption?: string;
      /** Label text indicating RSVP `NO` response. */
      rsvpNoOption?: string;
      /** Messages shown for RSVP = `YES`. */
      positiveMessages?: Positive$1;
      /** Messages shown for RSVP = `WAITING` (when event is full and waitlist is available). */
      waitlistMessages?: Positive$1;
      /** Messages shown for RSVP = `NO`. */
      negativeMessages?: Negative$1;
      /** "Submit form" call-to-action label text. */
      submitActionLabel?: string;
  }
  /** Confirmation messages shown after registration. */
  interface PositiveResponseConfirmation$1 {
      /** Confirmation message title. */
      title?: string;
      /** Confirmation message text. */
      message?: string;
      /** "Add to calendar" call-to-action label text. */
      addToCalendarActionLabel?: string;
      /** "Share event" call-to-action label text. */
      shareActionLabel?: string;
  }
  /** Confirmation messages shown after registration. */
  interface NegativeResponseConfirmation$1 {
      /** Confirmation message title. */
      title?: string;
      /** "Share event" call-to-action label text. */
      shareActionLabel?: string;
  }
  /** Set of messages shown during registration when RSVP response is positive. */
  interface Positive$1 {
      /** Main form title for positive response. */
      title?: string;
      /** Confirmation messages shown after registration. */
      confirmation?: PositiveResponseConfirmation$1;
  }
  /** A set of messages shown during registration with negative response */
  interface Negative$1 {
      /** Main form title for negative response. */
      title?: string;
      /** Confirmation messages shown after registration. */
      confirmation?: NegativeResponseConfirmation$1;
  }
  interface CheckoutFormMessages$1 {
      /** Main form title for response. */
      title?: string;
      /** Submit form call-to-action label text. */
      submitActionLabel?: string;
      /** Confirmation messages shown after checkout. */
      confirmation?: ResponseConfirmation$1;
  }
  /** Confirmation messages shown after checkout. */
  interface ResponseConfirmation$1 {
      /** Confirmation message title. */
      title?: string;
      /** Confirmation message text. */
      message?: string;
      /** "Download tickets" call-to-action label text. */
      downloadTicketsLabel?: string;
      /** "Add to calendar" call-to-action label text. */
      addToCalendarLabel?: string;
      /** "Share event" call-to-action label text. */
      shareEventLabel?: string;
  }
  interface RegistrationClosedMessages$1 {
      /** Message shown when event registration is closed. */
      message?: string;
      /** "Explore other events" call-to-action label text. */
      exploreEventsActionLabel?: string;
  }
  interface TicketsUnavailableMessages$1 {
      /** Message shown when event tickets are unavailable. */
      message?: string;
      /** "Explore other events" call-to-action label text. */
      exploreEventsActionLabel?: string;
  }
  interface Summaries {
      /** RSVP summary of guests. */
      rsvps?: Rsvps;
      /** Summary of revenue and sold tickets. Archived orders are not included. */
      tickets?: Tickets;
  }
  interface EventsMoney {
      /** *Deprecated:** Use `value` instead. */
      amount?: string;
      /** ISO 4217 format of the currency i.e. `USD`. */
      currency?: string;
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string | null;
  }
  interface Rsvps {
      /**
       * Total number of RSVPs.
       * @readonly
       */
      totalCount?: number;
      /**
       * Number of RSVPs with status `YES`.
       * @readonly
       */
      yesCount?: number;
      /**
       * Number of RSVPs with status `NO`.
       * @readonly
       */
      noCount?: number;
      /**
       * Number of RSVPs in a waitlist.
       * @readonly
       */
      waitlistCount?: number;
  }
  interface Tickets {
      /**
       * Number of sold tickets.
       * @readonly
       */
      ticketsSold?: number;
      /**
       * Total revenue. Taxes and payment provider fees aren't deducted.
       * @readonly
       */
      revenue?: EventsMoney;
      /**
       * Whether the currency is locked and can’t be changed.
       * @readonly
       */
      currencyLocked?: boolean;
      /**
       * Number of orders placed.
       * @readonly
       */
      totalOrders?: number;
      /**
       * Total balance of confirmed transactions.
       * @readonly
       */
      totalSales?: EventsMoney;
  }
  interface GuestListSettings {
      /** Whether the guest list is public for all guests. */
      displayedPublicly?: boolean;
  }
  interface Feed$1 {
      /** Event discussion feed token. */
      token?: string;
  }
  interface OnlineConferencing$1 {
      /** Whether online conferencing is enabled. Not applicable for events, where date and time are TBD. When enabled, links to join the conference are generated and provided to guests. */
      enabled?: boolean;
      /** Conference host ID. */
      providerId?: string | null;
      /**
       * Configured conferencing provider name.
       * @internal
       * @readonly
       */
      providerName?: string;
      /**
       * Conference type. Possible values:
       *
       *   - `MEETING`: Guests can do some actions during the conference, for example talk, turn on camera and show their screen.
       *   - `WEBINAR`: Guests can only watch the conference.
       */
      type?: ConferenceTypeType;
      /** Online conferencing session information. */
      session?: OnlineConferencingSession$1;
  }
  enum ConferenceTypeType {
      /** Default value. This value is unused */
      UNKNOWN_CONFERENCE_TYPE = "UNKNOWN_CONFERENCE_TYPE",
      /** Guests can publish and subscribe to video and audio. */
      MEETING = "MEETING",
      /** Guests can only subscribe to video and audio. */
      WEBINAR = "WEBINAR"
  }
  interface OnlineConferencingSession$1 {
      /**
       * Link for the event host to start the online conference session.
       * @readonly
       */
      hostLink?: string;
      /**
       * Link for guests to join the online conference session.
       * @readonly
       */
      guestLink?: string;
      /**
       * Password required to join the online conferencing session (when relevant).
       * @readonly
       */
      password?: string | null;
      /**
       * Whether the session was created successfully on the event host side.
       * @readonly
       */
      sessionCreated?: boolean | null;
      /**
       * Unique session ID.
       * @readonly
       */
      sessionId?: string | null;
  }
  interface SeoSettings$1 {
      /** URL slug. */
      slug?: string;
      /** Advanced SEO data. */
      advancedSeoData?: SeoSchema$1;
      /**
       * Whether the slug is hidden from the SEO Site Map.
       * @readonly
       */
      hidden?: boolean | null;
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
  interface AgendaSettings {
      /** Whether the schedule is enabled for the event. */
      enabled?: boolean;
      /**
       * Schedule page URL.
       * @readonly
       */
      pageUrl?: string;
  }
  interface EventCategories {
      /** Event categories. */
      categories?: EventCategory[];
  }
  interface EventCategory {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category name. */
      name?: string;
      /**
       * Category creation timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Category is hidden.
       * @readonly
       */
      hidden?: boolean;
      /**
       * Category type.
       * @readonly
       */
      type?: Type$1;
  }
  enum Type$1 {
      /** Created manually by the user. */
      MANUAL = "MANUAL",
      /** Created automatically when publishing recurring events. */
      RECURRING_EVENT = "RECURRING_EVENT",
      /** Created automatically and used to store component events. */
      COMPONENT = "COMPONENT"
  }
  interface V3EventDisplaySettings {
      /** Whether event details button is hidden. Only available for events with no registration. */
      hideEventDetailsButton?: boolean | null;
  }
  interface V3LabellingSettings {
      /**
       * @internal
       * @readonly
       */
      assignedContactsLegacyLabelId?: string | null;
      /**
       * @internal
       * @readonly
       */
      assignedContactsLabelDeleted?: boolean | null;
  }
  interface V3EventStarted {
      /** Event schedule configuration. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
  }
  interface V3EventReminder {
      /** Reminder timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: Location$1;
      /** Event schedule configuration. */
      dateAndTimeSettings?: DateAndTimeSettings;
      /** Event title. */
      title?: string;
      /** ID of the user who created the event. */
      userId?: string | null;
      /** Time until the start of event (currently, reminder letter is triggered 1 day before the start of event). */
      startsIn?: TimeDuration;
  }
  /**
   * A coarse-grained representation of time duration divided into whole constituting components of days, hours, and minutes.
   * For example, 25.5 hours duration is represented as `{ days: 1, hours: 1, minutes: 30 }`.
   */
  interface TimeDuration {
      /** Number of days */
      days?: number;
      /** Number of hours */
      hours?: number;
      /** Number of minutes */
      minutes?: number;
  }
  interface V3EventEnded {
      /** Event end timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
  }
  interface CreateEventRequest {
      /** Event data. */
      event: V3Event;
      /** Whether to create the event as a draft. */
      draft?: boolean;
      /**
       * Predefined sets of fields to return.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  enum RequestedFields {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      /** Include `description`, `mainImage` and `calendarLinks` in the response. */
      DETAILS = "DETAILS",
      /** Include `about` event rich text in the response. */
      TEXTS = "TEXTS",
      /** Include `registration` in the response. */
      REGISTRATION = "REGISTRATION",
      /** Include `eventPageUrl` in the response. */
      URLS = "URLS",
      /** Include `form` in the response. */
      FORM = "FORM",
      /** Include `dashboard` in the response. */
      DASHBOARD = "DASHBOARD",
      /** Include `feed` in the response. */
      FEED = "FEED",
      /** Include `onlineConferencing` in the response. */
      ONLINE_CONFERENCING_SESSION = "ONLINE_CONFERENCING_SESSION",
      /** Include `seoSettings` in the response. */
      SEO_SETTINGS = "SEO_SETTINGS",
      /** Include `agendaSettings` in the response. */
      AGENDA = "AGENDA",
      /** Include `categories` in the response. */
      CATEGORIES = "CATEGORIES",
      CUSTOMIZABLE_TICKETS = "CUSTOMIZABLE_TICKETS"
  }
  interface CreateEventResponse {
      /** Created event. */
      event?: V3Event;
  }
  interface V3EventPublished {
      /** Event publishing timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event status. */
      status?: Status$1;
      /**
       * Event ID. Indicates the original event from which the current event was derived from.
       * Can be used to track the original event and add missing information.
       */
      derivedFromEventId?: string | null;
  }
  interface CloneEventRequest {
      /** Event ID. */
      eventId: string;
      /** Field values to be changed when cloning the event. */
      event?: V3Event;
      /**
       * Fields that are included in this parameter are updated, while all other fields stay the same. If paths are not defined, all field values from the `event` object are updated.
       * @internal
       */
      fieldmask?: string[];
      /** Whether to clone the event as a draft. */
      draft?: boolean;
      /**
       * Predefined sets of fields to return. If both `fields` and `fieldsets` are sent in the request, the union of both lists is returned.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  interface CloneEventResponse {
      /** Cloned event. */
      event?: V3Event;
  }
  interface EventCloned {
      /** Event creation timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: Location$1;
      /** Event date and time settings. */
      dateAndTimeSettings?: DateAndTimeSettings;
      /** Event title. */
      title?: string;
      /** ID of the user who created the event. */
      userId?: string | null;
      /** Event status. */
      status?: Status$1;
      /** Instance ID. Indicates the original app instance from which current event was derived from. */
      derivedFromInstanceId?: string | null;
      /** Event ID. Indicates the original event from which current event was derived from. */
      derivedFromEventId?: string | null;
      /**
       * Map of copied ticket definitions from the original event. <br>
       * Key represents ticket definition ID in the original event. <br>
       * Value represents ticket definition ID in the newly event.
       */
      ticketDefinitions?: Record<string, string>;
  }
  interface UpdateEventRequest {
      /** Field values to be changed. */
      event?: V3Event;
      /**
       * Fields that are included in this parameter are updated, while all other fields stay the same. If paths are not defined, all field values from the `event` object are updated.
       * @internal
       */
      fieldmask?: string[];
      /**
       * Predefined sets of fields to return. If both `fields` and `fieldsets` are sent in the request, the union of both lists is returned.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  interface UpdateEventResponse {
      /** Updated event. */
      event?: V3Event;
  }
  interface PublishDraftEventRequest {
      /** Event ID. */
      eventId: string;
      /**
       * Predefined sets of fields to return. If both `fields` and `fieldsets` are sent in the request, the union of both lists is returned.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  interface PublishDraftEventResponse {
      /** Published event. */
      event?: V3Event;
  }
  interface CancelEventRequest {
      /** Event ID. */
      eventId: string;
      /**
       * Predefined sets of fields to return. If both `fields` and `fieldsets` are sent in the request, the union of both lists is returned.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  interface CancelEventResponse {
      /** Canceled event. */
      event?: V3Event;
  }
  interface V3EventCanceled {
      /** Event cancelation timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event title. */
      title?: string;
      /** ID of the user who created the event. */
      userId?: string | null;
  }
  interface BulkCancelEventsByFilterRequest {
      /** Filter. */
      filter?: QueryV2$1;
  }
  interface QueryV2$1 extends QueryV2PagingMethodOneOf$1 {
      /** Paging options. Can't be used together with `cursorPaging`. */
      paging?: Paging$1;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$1[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$1 {
      /** Paging options. Can't be used together with `cursorPaging`. */
      paging?: Paging$1;
  }
  interface Sorting$1 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /**
       * Sort order.
       * Use `ASC` for ascending order or `DESC` for descending order.
       *
       * Default: `ASC`.
       */
      order?: SortOrder$1;
  }
  enum SortOrder$1 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging$1 {
      /** Number of items to return. See [Paging](https://dev.wix.com/api/rest/getting-started/sorting-and-paging#getting-started_sorting-and-paging_paging) for more information. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface BulkCancelEventsByFilterResponse {
  }
  interface DeleteEventRequest {
      /** Event ID. */
      eventId: string;
  }
  interface DeleteEventResponse {
      /** Deleted event ID. */
      eventId?: string;
  }
  interface BulkDeleteEventsByFilterRequest {
      /** Query options. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
      filter?: QueryV2$1;
  }
  interface BulkDeleteEventsByFilterResponse {
  }
  interface QueryEventsRequest {
      /** Query options. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
      query?: QueryV2$1;
      /**
       * Predefined sets of fields to return.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
      /**
       * Whether draft events should be returned in the response. <br>
       * **Note:** This parameter requires the `WIX_EVENTS.MANAGE_EVENTS` permission.
       */
      includeDrafts?: boolean;
  }
  interface QueryEventsResponse {
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadataV2$1;
      /** List of events. */
      events?: V3Event[];
  }
  interface PagingMetadataV2$1 {
      /** Number of items to return. See [Paging](https://dev.wix.com/api/rest/getting-started/sorting-and-paging#getting-started_sorting-and-paging_paging) for more information. */
      count?: number | null;
      /** Requested offset. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$1;
      /**
       * Whether there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, the current page is the final page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface ExportEventsRequest {
      /** Query options. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
      query?: CommonQueryV2;
  }
  interface CommonQueryV2 extends CommonQueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: CommonPaging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
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
      sort?: CommonSorting[];
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface CommonQueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: CommonPaging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
  }
  interface CommonSorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: CommonSortOrder;
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
  enum CommonSortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface CommonPaging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface CursorPaging$1 {
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
  interface ExportEventsResponse {
      /** Metadata for the paginated results. */
      pagingMetadata?: CommonPagingMetadataV2;
      /** List of events. */
      events?: V3Event[];
  }
  interface CommonPagingMetadataV2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: CommonCursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface CommonCursors {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface CountEventsByStatusRequest {
      /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1" }`. */
      filter?: Record<string, any> | null;
      /** Parameters to count events by. */
      facet?: string[];
      /**
       * Whether draft events should be returned in the response. <br>
       * **Note:** This parameter requires the `WIX_EVENTS.MANAGE_EVENTS` permission.
       */
      includeDrafts?: boolean;
  }
  interface CountEventsByStatusResponse {
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadataV2$1;
      /** Filter facets. */
      facets?: Record<string, FacetCounts$1>;
  }
  interface FacetCounts$1 {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface ListUserEventsRequest {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: Sorting$1[];
      /** Event status. */
      status?: Status$1[];
      /**
       * Wix user filter, by default any.
       * Allows to filter events by user relation to the event among all wix sites.
       */
      userFilter?: UserFilter;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      facet?: string[];
  }
  interface UserFilter {
      /** User who is related to event */
      userId?: string;
      /** Relation of user to event */
      relation?: Relation[];
  }
  enum Relation {
      /**
       * User is attending the event.
       * User has RSVP with status YES or has ordered tickets.
       */
      ATTENDING = "ATTENDING"
  }
  interface ListUserEventsResponse {
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadataV2$1;
      /** List of events. */
      events?: V3Event[];
      /** Filter facets. */
      facets?: Record<string, FacetCounts$1>;
  }
  interface ListEventsByCategoryRequest {
      /** Category ID. */
      categoryId: string;
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /**
       * Predefined sets of fields to return. If both `fields` and `fieldsets` are sent in the request, the union of both lists is returned.
       * - `DETAILS`: Returns `shortDescription`, `mainImage`, and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  interface ListEventsByCategoryResponse {
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadataV2$1;
      /** List of events. */
      events?: V3Event[];
  }
  interface GetEventRequest {
      /** Event ID. */
      eventId: string | null;
      /**
       * Predefined sets of fields to return.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
      /**
       * indicates whether full_address should be resolved
       * @internal
       */
      resolveFullAddress?: boolean;
  }
  interface GetEventResponse {
      /** Event. */
      event?: V3Event;
  }
  interface GetEventBySlugRequest {
      /** URL slug. */
      slug: string | null;
      /**
       * Predefined sets of fields to return.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
      /**
       * indicates whether full_address should be resolved
       * @internal
       */
      resolveFullAddress?: boolean;
  }
  interface GetEventBySlugResponse {
      /** Event. */
      event?: V3Event;
  }
  interface FindEventRequest extends FindEventRequestFindByOneOf {
      /** Event ID. */
      eventId?: string | null;
      /** URL slug. */
      slug?: string | null;
      /**
       * Predefined sets of fields to return.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  /** @oneof */
  interface FindEventRequestFindByOneOf {
      /** Event ID. */
      eventId?: string | null;
      /** URL slug. */
      slug?: string | null;
  }
  interface FindEventResponse {
      /** Event. */
      event?: V3Event;
  }
  interface EventCreated$1 {
      /** Event created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: EventsLocation;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig$1;
      /** Event title. */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
      /** Event status. */
      status?: EventStatus$1;
      /** Instance ID. Indicates the original app instance which current event was derived from. */
      derivedFromInstanceId?: string | null;
      /** Event ID. Indicates the original event which current event was derived from. */
      derivedFromEventId?: string | null;
      /** Event that was created. */
      event?: Event$1;
  }
  interface EventsLocation {
      /** Location name. */
      name?: string | null;
      /** Location map coordinates. */
      coordinates?: MapCoordinates$1;
      /** Single line address representation. */
      address?: string | null;
      /** Location type. */
      type?: LocationLocationType;
      /**
       * Full address derived from formatted single line `address`.
       * When `full_address` is used to create or update the event, deprecated `address` and `coordinates` are ignored.
       * If provided `full_address` has empty `formatted_address` or `coordinates`, it will be auto-completed using Atlas service.
       *
       * Migration notes:
       * - `full_address.formatted_address` is equivalent to `address`.
       * - `full_address.geocode` is equivalent to `coordinates`.
       */
      fullAddress?: Address$1;
      /**
       * Defines event location as TBD (To Be Determined).
       * When event location is not yet defined, `name` is displayed instead of location address.
       * `coordinates`, `address`, `type` and `full_address` are not required when location is TBD.
       */
      tbd?: boolean | null;
  }
  interface MapCoordinates$1 {
      /** Latitude. */
      lat?: number;
      /** Longitude. */
      lng?: number;
  }
  enum LocationLocationType {
      VENUE = "VENUE",
      ONLINE = "ONLINE"
  }
  /** Physical address */
  interface Address$1 extends AddressStreetOneOf$1 {
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress$1;
      /** Main address line (usually street and number) as free text */
      addressLine1?: string | null;
      /** country code */
      country?: string | null;
      /** subdivision (usually state or region) code according to ISO 3166-2 */
      subdivision?: string | null;
      /** city name */
      city?: string | null;
      /** zip/postal code */
      postalCode?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, Floor */
      addressLine2?: string | null;
      /** A string containing the human-readable address of this location */
      formatted?: string | null;
      /** coordinates of the physical address */
      location?: AddressLocation$1;
  }
  /** @oneof */
  interface AddressStreetOneOf$1 {
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress$1;
      /** Main address line (usually street and number) as free text */
      addressLine?: string | null;
  }
  interface StreetAddress$1 {
      /** street number */
      number?: string;
      /** street name */
      name?: string;
      /**
       * apartment number
       * @internal
       */
      apt?: string;
  }
  interface AddressLocation$1 {
      /** address latitude coordinates */
      latitude?: number | null;
      /** address longitude coordinates */
      longitude?: number | null;
  }
  interface Subdivision$1 {
      /** subdivision short code */
      code?: string;
      /** subdivision full-name */
      name?: string;
      /**
       * subdivision level
       * @internal
       */
      type?: SubdivisionType$1;
      /**
       * free text description of subdivision type
       * @internal
       */
      typeInfo?: string | null;
  }
  enum SubdivisionType$1 {
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
  interface ScheduleConfig$1 {
      /**
       * Defines event as TBD (To Be Determined) schedule.
       * When event time is not yet defined, TBD message is displayed instead of event start and end times.
       * `startDate`, `endDate` and `timeZoneId` are not required when schedule is TBD.
       */
      scheduleTbd?: boolean;
      /** TBD message. */
      scheduleTbdMessage?: string | null;
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      /** Whether end date is hidden in the formatted schedule. */
      endDateHidden?: boolean;
      /** Whether time zone is displayed in formatted schedule. */
      showTimeZone?: boolean;
      /** Event recurrences. */
      recurrences?: EventsRecurrences;
  }
  interface EventsRecurrences {
      /** Event occurrences. */
      occurrences?: EventsOccurrence[];
      /**
       * Recurring event category ID.
       * @readonly
       */
      categoryId?: string | null;
      /**
       * Recurrence status.
       * @readonly
       */
      status?: EventsRecurrenceStatusStatus;
  }
  interface EventsOccurrence {
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      /** Whether time zone is displayed in formatted schedule. */
      showTimeZone?: boolean;
  }
  enum EventsRecurrenceStatusStatus {
      /** Event occurs only once. */
      ONE_TIME = "ONE_TIME",
      /** Event is recurring. */
      RECURRING = "RECURRING",
      /** Marks the next upcoming occurrence of the recurring event. */
      RECURRING_NEXT = "RECURRING_NEXT",
      /** Marks the most recent ended occurrence of the recurring event. */
      RECURRING_LAST_ENDED = "RECURRING_LAST_ENDED",
      /** Marks the most recent canceled occurrence of the recurring event. */
      RECURRING_LAST_CANCELED = "RECURRING_LAST_CANCELED"
  }
  enum EventStatus$1 {
      /** Event is public and scheduled to start */
      SCHEDULED = "SCHEDULED",
      /** Event has started */
      STARTED = "STARTED",
      /** Event has ended */
      ENDED = "ENDED",
      /** Event was canceled */
      CANCELED = "CANCELED",
      /** Event is not public and needs to be published */
      DRAFT = "DRAFT"
  }
  interface Event$1 {
      /**
       * Event ID.
       * @readonly
       */
      _id?: string;
      /** Event location. */
      location?: EventsLocation;
      /** Event scheduling. */
      scheduling?: Scheduling$1;
      /** Event title. */
      title?: string;
      /** Event description. */
      description?: string;
      /** Rich-text content displayed in Wix UI - "About Event" section (HTML). */
      about?: string;
      /** Main event image. */
      mainImage?: string;
      /** Event slug URL (generated from event title). */
      slug?: string;
      /** ISO 639-1 language code of the event (used in content translations). */
      language?: string;
      /** Event creation timestamp. */
      created?: Date;
      /** Event modified timestamp. */
      modified?: Date;
      /** Event status. */
      status?: EventStatus$1;
      /** RSVP or ticketing registration details. */
      registration?: EventsRegistration;
      /** "Add to calendar" URLs. */
      calendarLinks?: CalendarLinks$1;
      /** Event page URL components. */
      eventPageUrl?: SiteUrl$1;
      /** Event registration form. */
      form?: Form$1;
      /** Event dashboard summary of RSVP / ticket sales. */
      dashboard?: Dashboard$1;
      /** Instance ID of the site where event is hosted. */
      instanceId?: string;
      /** Guest list configuration. */
      guestListConfig?: GuestListConfig$1;
      /** Event creator user ID. */
      userId?: string;
      /** Event discussion feed. For internal use. */
      feed?: EventsFeed;
      /** Online conferencing details. */
      onlineConferencing?: EventsOnlineConferencing;
      /** SEO settings. */
      seoSettings?: EventsSeoSettings;
      /** Assigned contacts label key. */
      assignedContactsLabel?: string | null;
      /** Agenda details. */
      agenda?: Agenda$1;
      /** Categories this event is assigned to. */
      categories?: Category$1[];
      /** Visual settings for event. */
      eventDisplaySettings?: EventDisplaySettings$1;
      /**
       * @internal
       * @readonly
       */
      customizableTickets?: boolean | null;
      /**
       * Labelling related data.
       * @internal
       */
      labellingSettings?: LabellingSettings$1;
  }
  interface Scheduling$1 {
      /** Schedule configuration. */
      config?: ScheduleConfig$1;
      /** Formatted schedule representation. */
      formatted?: string;
      /** Formatted start date of the event (empty for TBD schedules). */
      startDateFormatted?: string;
      /** Formatted start time of the event (empty for TBD schedules). */
      startTimeFormatted?: string;
      /** Formatted end date of the event (empty for TBD schedules or when end date is hidden). */
      endDateFormatted?: string;
      /** Formatted end time of the event (empty for TBD schedules or when end date is hidden). */
      endTimeFormatted?: string;
  }
  interface EventsRegistration {
      /** Event type. */
      type?: EventType$1;
      /** Event registration status. */
      status?: RegistrationStatus$1;
      /** RSVP collection details. */
      rsvpCollection?: RsvpCollection$1;
      /** Ticketing details. */
      ticketing?: Ticketing$1;
      /** External registration details. */
      external?: ExternalEvent$1;
      /** Types of users allowed to register. */
      restrictedTo?: VisitorType$1;
      /** Initial event type which was set when creating an event. */
      initialType?: EventType$1;
  }
  enum EventType$1 {
      /** Type not available for this request fieldset */
      NA_EVENT_TYPE = "NA_EVENT_TYPE",
      /** Registration via RSVP */
      RSVP = "RSVP",
      /** Registration via ticket purchase */
      TICKETS = "TICKETS",
      /** External registration */
      EXTERNAL = "EXTERNAL",
      /** Registration not available */
      NO_REGISTRATION = "NO_REGISTRATION"
  }
  enum RegistrationStatus$1 {
      /** Registration status is not applicable */
      NA_REGISTRATION_STATUS = "NA_REGISTRATION_STATUS",
      /** Registration to event is closed */
      CLOSED = "CLOSED",
      /** Registration to event is closed manually */
      CLOSED_MANUALLY = "CLOSED_MANUALLY",
      /** Registration is open via RSVP */
      OPEN_RSVP = "OPEN_RSVP",
      /** Registration to event waitlist is open via RSVP */
      OPEN_RSVP_WAITLIST = "OPEN_RSVP_WAITLIST",
      /** Registration is open via ticket purchase */
      OPEN_TICKETS = "OPEN_TICKETS",
      /** Registration is open via external URL */
      OPEN_EXTERNAL = "OPEN_EXTERNAL",
      /** Registration will be open via RSVP */
      SCHEDULED_RSVP = "SCHEDULED_RSVP"
  }
  interface RsvpCollection$1 {
      /** RSVP collection configuration. */
      config?: RsvpCollectionConfig$1;
  }
  interface RsvpCollectionConfig$1 {
      /** Defines the supported RSVP statuses. */
      rsvpStatusOptions?: RsvpStatusOptions$1;
      /**
       * Total guest limit available to register to the event.
       * Additional guests per RSVP are counted towards total guests.
       */
      limit?: number | null;
      /** Whether a waitlist is opened when total guest limit is reached, allowing guests to create RSVP with WAITING RSVP status. */
      waitlist?: boolean;
      /** Registration start timestamp. */
      startDate?: Date;
      /** Registration end timestamp. */
      endDate?: Date;
  }
  enum RsvpStatusOptions$1 {
      /** Only YES RSVP status is available for RSVP registration */
      YES_ONLY = "YES_ONLY",
      /** YES and NO RSVP status options are available for the registration */
      YES_AND_NO = "YES_AND_NO"
  }
  interface Ticketing$1 {
      /** Deprecated. */
      lowestPrice?: string | null;
      /** Deprecated. */
      highestPrice?: string | null;
      /** Currency used in event transactions. */
      currency?: string | null;
      /** Ticketing configuration. */
      config?: TicketingConfig$1;
      /**
       * Price of lowest priced ticket.
       * @readonly
       */
      lowestTicketPrice?: EventsMoney;
      /**
       * Price of highest priced ticket.
       * @readonly
       */
      highestTicketPrice?: EventsMoney;
      /**
       * Formatted price of lowest priced ticket.
       * @readonly
       */
      lowestTicketPriceFormatted?: string | null;
      /**
       * Formatted price of highest priced ticket.
       * @readonly
       */
      highestTicketPriceFormatted?: string | null;
      /**
       * Whether all tickets are sold for this event.
       * @readonly
       */
      soldOut?: boolean | null;
  }
  interface TicketingConfig$1 {
      /** Whether the form must be filled out separately for each ticket. */
      guestAssignedTickets?: boolean;
      /** Tax configuration. */
      taxConfig?: TaxConfig$1;
      /** Limit of tickets that can be purchased per order, default 20. */
      ticketLimitPerOrder?: number;
      /**
       * App Id for external ticket stock management.
       * By default tickets stock is defined in TicketDefinition object.
       * If defined then limitation from TicketDefinition is ignored.
       * @internal
       */
      stockManagerAppId?: string | null;
      /** Duration for which the tickets being bought are reserved. */
      reservationDurationInMinutes?: number | null;
  }
  interface TaxConfig$1 {
      /** Tax application settings. */
      type?: EventsTaxType;
      /** Tax name. */
      name?: string | null;
      /** Tax rate (e.g.,`21.55`). */
      rate?: string | null;
      /** Applies taxes for donations, default true. */
      appliesToDonations?: boolean | null;
  }
  enum EventsTaxType {
      /** Tax is included in the ticket price */
      INCLUDED = "INCLUDED",
      /** Tax is added to the order at the checkout */
      ADDED = "ADDED",
      /** Tax is added to the final total at the checkout */
      ADDED_AT_CHECKOUT = "ADDED_AT_CHECKOUT"
  }
  interface ExternalEvent$1 {
      /** External event registration URL. */
      registration?: string;
  }
  enum VisitorType$1 {
      /** Site visitor (including member) */
      VISITOR = "VISITOR",
      /** Site member */
      MEMBER = "MEMBER",
      /** Site visitor or member */
      VISITOR_OR_MEMBER = "VISITOR_OR_MEMBER"
  }
  interface CalendarLinks$1 {
      /** "Add to Google calendar" URL. */
      google?: string;
      /** "Download ICS calendar file" URL. */
      ics?: string;
  }
  /** Site URL components */
  interface SiteUrl$1 {
      /**
       * Base URL. For premium sites, this will be the domain.
       * For free sites, this would be site URL (e.g `mysite.wixsite.com/mysite`)
       */
      base?: string;
      /** The path to that page - e.g `/my-events/weekly-meetup-2` */
      path?: string;
  }
  interface Dashboard$1 {
      /** Guest RSVP summary. */
      rsvpSummary?: RsvpSummary$1;
      /**
       * Summary of revenue and tickets sold.
       * (Archived orders are not included).
       */
      ticketingSummary?: TicketingSummary$1;
  }
  interface RsvpSummary$1 {
      /** Total number of RSVPs. */
      total?: number;
      /** Number of RSVPs with status `YES`. */
      yes?: number;
      /** Number of RSVPs with status `NO`. */
      no?: number;
      /** Number of RSVPs in waitlist. */
      waitlist?: number;
  }
  interface TicketingSummary$1 {
      /** Number of tickets sold. */
      tickets?: number;
      /**
       * Total revenue, excluding fees.
       * (taxes and payment provider fees are not deducted.)
       */
      revenue?: EventsMoney;
      /** Whether currency is locked and cannot be changed (generally occurs after the first order in the specified currency has been created). */
      currencyLocked?: boolean;
      /** Number of orders placed. */
      orders?: number;
      /** Total balance of confirmed transactions. */
      totalSales?: EventsMoney;
  }
  interface GuestListConfig$1 {
      /** Whether members can see other members attending the event (defaults to true). */
      publicGuestList?: boolean;
  }
  interface EventsFeed {
      /** Event discussion feed token. */
      token?: string;
  }
  interface EventsOnlineConferencing {
      config?: OnlineConferencingConfig$1;
      session?: EventsOnlineConferencingSession;
      /**
       * Configured conferencing provider name.
       * @internal
       * @readonly
       */
      providerName?: string;
  }
  interface OnlineConferencingConfig$1 {
      /**
       * Whether online conferencing is enabled (not supported for TBD schedules).
       * When enabled, links to join conferencing are generated and provided to guests.
       */
      enabled?: boolean;
      /** Conferencing provider ID. */
      providerId?: string | null;
      /** Conference type */
      conferenceType?: ConferenceType$1;
  }
  enum ConferenceType$1 {
      /** Everyone in the meeting can publish and subscribe video and audio. */
      MEETING = "MEETING",
      /** Guests can only subscribe to video and audio. */
      WEBINAR = "WEBINAR"
  }
  interface EventsOnlineConferencingSession {
      /**
       * Link for event host to start the online conference session.
       * @readonly
       */
      hostLink?: string;
      /**
       * Link for guests to join the online conference session.
       * @readonly
       */
      guestLink?: string;
      /**
       * The password required to join online conferencing session (when relevant).
       * @readonly
       */
      password?: string | null;
      /**
       * Indicates that session was created successfully on providers side.
       * @readonly
       */
      sessionCreated?: boolean | null;
      /**
       * Unique session id
       * @readonly
       */
      sessionId?: string | null;
  }
  interface EventsSeoSettings {
      /** URL slug */
      slug?: string;
      /** Advanced SEO data */
      advancedSeoData?: SeoSchema$1;
      /**
       * Hidden from SEO Site Map
       * @readonly
       */
      hidden?: boolean | null;
  }
  interface Agenda$1 {
      /** Whether the schedule is enabled for the event. */
      enabled?: boolean;
      /**
       * Agenda page URL.
       * @readonly
       */
      pageUrl?: SiteUrl$1;
  }
  interface Category$1 {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category name. */
      name?: string;
      /**
       * Category creation timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Assigned events count. Deleted events are excluded.
       * @internal
       * @readonly
       */
      assignedEventsCount?: number | null;
      /**
       * Assigned and assigned draft event counts.
       * @readonly
       */
      counts?: CategoryCounts$1;
      /**
       * Category state. Default - MANUAL.
       * WIX_EVENTS.MANAGE_AUTO_CATEGORIES permission is required to use other states.
       * Field will be ignored on update requests.
       */
      states?: State$1[];
      /**
       * Optionally client defined external ID.
       * @internal
       */
      externalId?: string | null;
  }
  interface CategoryCounts$1 {
      /** Assigned events count. Deleted events are excluded. */
      assignedEventsCount?: number | null;
      /** Assigned draft events count. */
      assignedDraftEventsCount?: number | null;
  }
  enum State$1 {
      /** Created manually by the user. */
      MANUAL = "MANUAL",
      /** Created automatically. */
      AUTO = "AUTO",
      /** Created when publishing recurring events. */
      RECURRING_EVENT = "RECURRING_EVENT",
      /** Category is hidden. */
      HIDDEN = "HIDDEN",
      /** Category is used to store component events. */
      COMPONENT = "COMPONENT"
  }
  interface EventDisplaySettings$1 {
      /** Whether event details button is hidden. Only available for events with no registration. */
      hideEventDetailsButton?: boolean | null;
  }
  interface LabellingSettings$1 {
      /**
       * @internal
       * @readonly
       */
      assignedContactsLegacyLabelId?: string | null;
      /**
       * @internal
       * @readonly
       */
      assignedContactsLabelDeleted?: boolean | null;
  }
  interface Empty$1 {
  }
  interface EventUpdated$1 {
      /** Event update timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: EventsLocation;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig$1;
      /** Event title. */
      title?: string;
      /** Whether schedule configuration was updated. */
      scheduleConfigUpdated?: boolean;
      /**
       * The set of properties which were updated. For example 'title' or 'location'
       * @internal
       */
      fields?: string[];
      /**
       * Whether event has opened new spots with this update.
       * @internal
       */
      newSpotsOpened?: boolean | null;
      /** Updated event */
      event?: Event$1;
  }
  interface EventDeleted$1 {
      /** Event deleted timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event title. */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
      /**
       * Event categories.
       * @internal
       */
      categories?: string[];
  }
  interface EventCopied {
      /** Event created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: EventsLocation;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig$1;
      /** Event title. */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
      /** Event status. */
      status?: EventStatus$1;
      /** Instance ID. Indicates the original app instance which current event was derived from. */
      derivedFromInstanceId?: string | null;
      /** Event ID. Indicates the original event which current event was derived from. */
      derivedFromEventId?: string | null;
      /**
       * Map of copied ticket definitions from original event.
       * Key represents ticket def id in the original event.
       * Value represents ticket def id in the newly created event.
       */
      ticketDefinitions?: Record<string, string>;
  }
  interface EventPublished {
      /** Event publish timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event status. */
      status?: EventStatus$1;
      /**
       * Event ID. Indicates the original event which current event was derived from.
       * Can be used to track the original event and add missing information.
       */
      derivedFromEventId?: string | null;
  }
  interface EventCanceled$1 {
      /** Event canceled timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event title */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
  }
  interface EventStarted {
      /** Event start timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
  }
  interface EventEnded$1 {
      /** Event end timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
  }
  interface EventReminder {
      /** Reminder timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: EventsLocation;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig$1;
      /** Event title. */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
      /** Time until the event starts (currently, reminder is triggered 1 day before event starts). */
      startsIn?: TimeDuration;
  }
  interface DomainEvent$1 extends DomainEventBodyOneOf$1 {
      createdEvent?: EntityCreatedEvent$1;
      updatedEvent?: EntityUpdatedEvent$1;
      deletedEvent?: EntityDeletedEvent$1;
      actionEvent?: ActionEvent$1;
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
  interface DomainEventBodyOneOf$1 {
      createdEvent?: EntityCreatedEvent$1;
      updatedEvent?: EntityUpdatedEvent$1;
      deletedEvent?: EntityDeletedEvent$1;
      actionEvent?: ActionEvent$1;
  }
  interface EntityCreatedEvent$1 {
      entityAsJson?: string;
      /**
       * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
       * @internal
       */
      triggeredByUndelete?: boolean | null;
  }
  interface EntityUpdatedEvent$1 {
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
  interface EntityDeletedEvent$1 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$1 {
      bodyAsJson?: string;
  }
  interface MessageEnvelope$1 {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData$1;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData$1 extends IdentificationDataIdOneOf$1 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType$1;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf$1 {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType$1 {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  /**
   * Creates an event.
   *
   *
   * The event includes a default registration form in the selected language, which consists of input fields for first name, last name, and email. See [Registration Form](https://www.wix.com/velo/reference/wix-events-v2/forms/introduction) for more information.
   *
   * You can create the event as a draft by setting the draft value to true. Otherwise, the event is published right away.
   *
   * The event is automatically set up to send daily summary reports of new guests to your business email.
   * @param event - Event data.
   * @public
   * @requiredField event
   * @requiredField event.dateAndTimeSettings
   * @requiredField event.location
   * @requiredField event.title
   * @param options - Optional fields.
   * @adminMethod
   * @returns Created event.
   */
  function createEvent(event: V3Event, options?: CreateEventOptions): Promise<V3Event>;
  interface CreateEventOptions {
      /** Whether to create the event as a draft. */
      draft?: boolean;
      /**
       * Predefined sets of fields to return.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  /**
   * Clones an event, including the registration form, notifications, multilingual translations and ticket configuration from the original event.
   *
   *
   * The new event's date is automatically set to 14 days from the original event date.
   * If an event with the same title already exists, the new event's title gets a sequence number. For example, if you clone an event named "Leather Crafting 101", the new event's title is "Leather Crafting 101 (1)".  You can change the required entity field values while cloning an event.
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   * @param options - Optional fields.
   * @adminMethod
   */
  function cloneEvent(eventId: string, options?: CloneEventOptions): Promise<CloneEventResponse>;
  interface CloneEventOptions {
      /** Field values to be changed when cloning the event. */
      event?: V3Event;
      /**
       * Fields that are included in this parameter are updated, while all other fields stay the same. If paths are not defined, all field values from the `event` object are updated.
       * @internal
       */
      fieldmask?: string[];
      /** Whether to clone the event as a draft. */
      draft?: boolean;
      /**
       * Predefined sets of fields to return. If both `fields` and `fieldsets` are sent in the request, the union of both lists is returned.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  /**
   * Updates an event.
   * @param _id - Event ID.
   * @public
   * @requiredField _id
   * @param options - Optional fields.
   * @adminMethod
   * @returns Updated event.
   */
  function updateEvent(_id: string, options?: UpdateEventOptions): Promise<V3Event>;
  interface UpdateEventOptions {
      /** Event to update. */
      event: {
          /**
           * Event ID.
           * @readonly
           */
          _id?: string;
          /** Event location. */
          location?: Location$1;
          /** Event date and time settings. */
          dateAndTimeSettings?: DateAndTimeSettings;
          /** Event title. */
          title?: string | null;
          /** Short description that appears under the event title. */
          shortDescription?: string | null;
          /** Detailed description of an event. You can enter the description using rich text format (add various types of markups, such as underlines, italics, bolding, color codes, bullet lists, and links by using HTML formatting tags). */
          detailedDescription?: string | null;
          /**
           * Main event image. <br>
           * **Note:** This field is returned only when the `DETAILS` fieldset is included in the request.
           */
          mainImage?: string;
          /**
           * Unique identifier of the event page. The naming is the same as the event title written in kebab case. For example, if your event title is "Leather Crafting 101", then the slug is "leather-crafting-101".
           * @readonly
           */
          slug?: string;
          /**
           * Date and time when the event was created.
           * @readonly
           */
          _createdDate?: Date;
          /**
           * Date and time when the event was updated.
           * @readonly
           */
          _updatedDate?: Date;
          /**
           * Event status. Possible values:
           *
           *   - `UPCOMING`: The event is published and scheduled to start.
           *   - `STARTED`: The event has started.
           *   - `ENDED`: The event has ended.
           *   - `CANCELED`: The event is canceled.
           *   - `DRAFT`: The event is not published.
           * @readonly
           */
          status?: Status$1;
          /**
           * RSVP or ticketing registration details. <br>
           * **Note:** This field is returned only when the `REGISTRATION` fieldset is included in the request.
           */
          registration?: Registration$1;
          /**
           * URLs that allow you to add an event to the Google calendar, or to download an [ICS calendar](https://icscalendar.com/) file. <br>
           * **Note:** This field is returned only when the `DETAILS` fieldset is included in the request.
           * @readonly
           */
          calendarUrls?: CalendarUrls;
          /**
           * Event page URL components. <br>
           * **Note:** This field is returned only when the `URLS` fieldset is included in the request.
           */
          eventPageUrl?: string;
          /**
           * Event registration form. <br>
           * **Note:** This field is returned only when the `FORM` fieldset is included in the request.
           */
          form?: Form$1;
          /**
           * Summary of RSVP or ticket sales. <br>
           * **Note:** This field is returned only when the `DASHBOARD` fieldset is included in the request and you have the "WIX_EVENTS.READ_EVENT_DASHBOARD" permissions.
           */
          summaries?: Summaries;
          /**
           * Instance ID of the site where the event is hosted.
           * @readonly
           */
          instanceId?: string;
          /** Guest list configuration. */
          guestListSettings?: GuestListSettings;
          /**
           * ID of the user who created the event.
           * @readonly
           */
          userId?: string;
          /**
           * Event discussion feed. For internal use.
           * @internal
           */
          feed?: Feed$1;
          /**
           * Online conferencing details. <br>
           * **Note:** This field is returned only when the `ONLINE_CONFERENCING_SESSION` fieldset is included in the request and you have the "WIX_EVENTS.READ_ONLINE_CONFERENCING" permissions.
           */
          onlineConferencing?: OnlineConferencing$1;
          /**
           * SEO settings. <br>
           * **Note:** This field is returned only when the `SEO_SETTINGS` fieldset is included in the request.
           */
          seoSettings?: SeoSettings$1;
          /**
           * Assigned contacts label key.
           * @readonly
           */
          contactLabel?: string | null;
          /**
           * Event schedule details. <br>
           * **Note:** This field is returned only when the `AGENDA` fieldset is included in the request.
           */
          agendaSettings?: AgendaSettings;
          /**
           * Event categories.
           * @internal
           */
          categories?: EventCategories;
          /** Visual settings for event. */
          eventDisplaySettings?: V3EventDisplaySettings;
          /**
           * True if ticket can be customised
           * @internal
           */
          customizableTickets?: boolean | null;
          /**
           * Labelling related data.
           * @internal
           */
          labellingSettings?: V3LabellingSettings;
      };
      /**
       * Fields that are included in this parameter are updated, while all other fields stay the same. If paths are not defined, all field values from the `event` object are updated.
       * @internal
       */
      fieldmask?: string[];
      /**
       * Predefined sets of fields to return. If both `fields` and `fieldsets` are sent in the request, the union of both lists is returned.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  /**
   * Publishes a draft event to your live site. Once published, the event's status changes from `DRAFT` to `UPCOMING.`
   *
   *
   * It's impossible to revert the `DRAFT` status after publishing. The only option is to clone the event, and then delete the original one.
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   * @param options - Optional fields.
   * @adminMethod
   */
  function publishDraftEvent(eventId: string, options?: PublishDraftEventOptions): Promise<PublishDraftEventResponse>;
  interface PublishDraftEventOptions {
      /**
       * Predefined sets of fields to return. If both `fields` and `fieldsets` are sent in the request, the union of both lists is returned.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  /**
   * Cancels an event.
   *
   *
   * After cancellation, registration for an event is closed. To reuse the event, [clone](https://www.wix.com/velo/reference/wix-events-v2/wixeventsv2/cloneevent) and [publish](https://www.wix.com/velo/reference/wix-events-v2/wixeventsv2/publishdraftevent) it again.
   * If event cancellation notifications are enabled, canceling an event automatically triggers the sending of cancellation emails and/or push notifications to registered guests.
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   * @param options - Optional fields.
   * @adminMethod
   */
  function cancelEvent(eventId: string, options?: CancelEventOptions): Promise<CancelEventResponse>;
  interface CancelEventOptions {
      /**
       * Predefined sets of fields to return. If both `fields` and `fieldsets` are sent in the request, the union of both lists is returned.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  /**
   * Cancels multiple events that meet the given criteria.
   *
   *
   * After cancellation, registration for an event is closed. To reuse the event, [clone](https://www.wix.com/velo/reference/wix-events-v2/wixeventsv2/cloneevent) and [publish](https://www.wix.com/velo/reference/wix-events-v2/wixeventsv2/publishdraftevent) it again.
   * If event cancellation notifications are enabled, canceling an event automatically triggers the sending of cancellation emails and/or push notifications to registered guests.
   * @public
   * @requiredField options.filter.filter
   * @param options - Optional fields.
   * @adminMethod
   */
  function bulkCancelEventsByFilter(options?: BulkCancelEventsByFilterOptions): Promise<void>;
  interface BulkCancelEventsByFilterOptions {
      /** Filter. */
      filter?: QueryV2$1;
  }
  /**
   * Permanently deletes an event. <br> <br>
   * You can retrieve the deleted event through a GDPR access request.
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   * @adminMethod
   */
  function deleteEvent(eventId: string): Promise<DeleteEventResponse>;
  /**
   * Permanently deletes multiple events that meet the given criteria.
   *
   *
   * You can retrieve the deleted events through a GDPR access request.
   * @public
   * @requiredField options.filter.filter
   * @param options - Optional fields.
   * @adminMethod
   */
  function bulkDeleteEventsByFilter(options?: BulkDeleteEventsByFilterOptions): Promise<void>;
  interface BulkDeleteEventsByFilterOptions {
      /** Query options. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
      filter?: QueryV2$1;
  }
  /**
   * Creates a query to retrieve a list of events.
   *
   *
   * The `queryEvents()` function builds a query to retrieve a list of events and returns a [`EventsQueryBuilder`](https://www.wix.com/velo/reference/wix-events-v2/wixeventsv2/eventsquerybuilder) object.
   *
   * The returned object contains the query definition, which is typically used to run the query using the [`find()`](https://www.wix.com/velo/reference/wix-events-v2/wixeventsv2/eventsquerybuilder/find) function.
   *
   * You can refine the query by chaining `EventsQueryBuilder` functions onto the query. `EventsQueryBuilder` functions enable you to sort, filter, and control the results `queryEvents()` returns.
   *
   * `queryEvents()` runs with these `EventsQueryBuilder` defaults, which you can override:
   *
   * - [`skip(0)`](https://www.wix.com/velo/reference/wix-events-v2/wixeventsv2/eventsquerybuilder/skip)
   * - [`limit(50)`](https://www.wix.com/velo/reference/wix-events-v2/wixeventsv2/eventsquerybuilder/limit)
   * - [`descending("_createdDate")`](https://www.wix.com/velo/reference/wix-events-v2/wixeventsv2/eventsquerybuilder/descending)
   *
   * The functions that are chained to `queryEvents()` are applied in the order they're called. For example, if you apply `ascending('title')` and then `descending('status')`, the results are sorted first by the `title`, and then, if there are multiple results with the same `title`, the items are sorted by `status`.
   * @public
   * @param options - Optional fields.
   */
  function queryEvents(options?: QueryEventsOptions): EventsQueryBuilder;
  interface QueryEventsOptions {
      /**
       * Predefined sets of fields to return.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[] | undefined;
      /**
       * Whether draft events should be returned in the response. <br>
       * **Note:** This parameter requires the `WIX_EVENTS.MANAGE_EVENTS` permission.
       */
      includeDrafts?: boolean | undefined;
  }
  interface QueryOffsetResult {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface EventsQueryResult extends QueryOffsetResult {
      items: V3Event[];
      query: EventsQueryBuilder;
      next: () => Promise<EventsQueryResult>;
      prev: () => Promise<EventsQueryResult>;
  }
  interface EventsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: '_id' | 'dateAndTimeSettings.startDate' | 'dateAndTimeSettings.endDate' | 'title' | 'slug' | '_createdDate' | '_updatedDate' | 'status' | 'registration.initialType' | 'userId', value: any) => EventsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: '_id' | 'dateAndTimeSettings.startDate' | 'dateAndTimeSettings.endDate' | 'title' | 'slug' | '_createdDate' | '_updatedDate' | 'status' | 'userId', value: any) => EventsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ge: (propertyName: 'dateAndTimeSettings.startDate' | 'dateAndTimeSettings.endDate' | '_createdDate' | '_updatedDate', value: any) => EventsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      gt: (propertyName: 'dateAndTimeSettings.startDate' | 'dateAndTimeSettings.endDate' | '_createdDate' | '_updatedDate', value: any) => EventsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      le: (propertyName: 'dateAndTimeSettings.startDate' | 'dateAndTimeSettings.endDate' | '_createdDate' | '_updatedDate', value: any) => EventsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      lt: (propertyName: 'dateAndTimeSettings.startDate' | 'dateAndTimeSettings.endDate' | '_createdDate' | '_updatedDate', value: any) => EventsQueryBuilder;
      in: (propertyName: '_id' | 'dateAndTimeSettings.startDate' | 'dateAndTimeSettings.endDate' | 'title' | 'slug' | '_createdDate' | '_updatedDate' | 'status' | 'userId', value: any) => EventsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'_id' | 'dateAndTimeSettings.startDate' | 'dateAndTimeSettings.endDate' | 'title' | 'slug' | '_createdDate' | '_updatedDate'>) => EventsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'_id' | 'dateAndTimeSettings.startDate' | 'dateAndTimeSettings.endDate' | 'title' | 'slug' | '_createdDate' | '_updatedDate'>) => EventsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => EventsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results. */
      skip: (skip: number) => EventsQueryBuilder;
      find: () => Promise<EventsQueryResult>;
  }
  /**
   * Counts events by status.
   * @public
   * @param options - Optional fields.
   */
  function countEventsByStatus(options?: CountEventsByStatusOptions): Promise<CountEventsByStatusResponse>;
  interface CountEventsByStatusOptions {
      /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1" }`. */
      filter?: Record<string, any> | null;
      /** Parameters to count events by. */
      facet?: string[];
      /**
       * Whether draft events should be returned in the response. <br>
       * **Note:** This parameter requires the `WIX_EVENTS.MANAGE_EVENTS` permission.
       */
      includeDrafts?: boolean;
  }
  /**
   * Retrieves a list of up to 100 events that belong to the same event category.
   * @param categoryId - Category ID.
   * @internal
   * @requiredField categoryId
   * @param options - Optional fields.
   */
  function listEventsByCategory(categoryId: string, options?: ListEventsByCategoryOptions): Promise<ListEventsByCategoryResponse>;
  interface ListEventsByCategoryOptions {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /**
       * Predefined sets of fields to return. If both `fields` and `fieldsets` are sent in the request, the union of both lists is returned.
       * - `DETAILS`: Returns `shortDescription`, `mainImage`, and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  /**
   * Retrieves an event by ID.
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   * @param options - Optional fields.
   * @returns Event.
   */
  function getEvent(eventId: string | null, options?: GetEventOptions): Promise<V3Event>;
  interface GetEventOptions {
      /**
       * Predefined sets of fields to return.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
      /**
       * indicates whether full_address should be resolved
       * @internal
       */
      resolveFullAddress?: boolean;
  }
  /**
   * Retrieves an event by the `slug` URL.
   *
   *
   * The slug is the end of an event URL that refers to a specific event. For example, if an events' URL is `https://example.com/events/event/{my-event-slug}`, the slug is `my-event-slug`.
   * @param slug - URL slug.
   * @public
   * @requiredField slug
   * @param options - Optional fields.
   */
  function getEventBySlug(slug: string | null, options?: GetEventBySlugOptions): Promise<GetEventBySlugResponse>;
  interface GetEventBySlugOptions {
      /**
       * Predefined sets of fields to return.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
      /**
       * indicates whether full_address should be resolved
       * @internal
       */
      resolveFullAddress?: boolean;
  }
  /**
   * Finds an event by ID or URL slug.
   *
   *
   * Unlike the [`getEvent`](https://www.wix.com/velo/reference/wix-events-v2/wixeventsv2/getevent) function, which returns a "not found" error, `findEvent()` returns an empty response when an event is not found.
   * @internal
   * @param options - Optional fields.
   */
  function findEvent(options?: FindEventOptions): Promise<FindEventResponse>;
  interface FindEventOptions extends FindEventRequestFindByOneOf {
      /** Event ID. */
      eventId?: string | null;
      /** URL slug. */
      slug?: string | null;
      /**
       * Predefined sets of fields to return.
       * - `DETAILS`: Returns `shortDescription`, `mainImage` and `calendarUrls`.
       * - `TEXTS`: Returns `detailedDescription`.
       * - `REGISTRATION`: Returns `registration`.
       * - `URLS`: Returns `eventPageUrl`.
       * - `FORM`: Returns `form`.
       * - `DASHBOARD`: Returns `summaries`.
       * - `ONLINE_CONFERENCING_SESSION`: Returns `onlineConferencing.session`.
       * - `SEO_SETTINGS`: Returns `seoSettings`.
       * - `AGENDA`: Returns `agendaSettings`.
       * - `CATEGORIES`: Returns `categories`.
       */
      fields?: RequestedFields[];
  }
  
  type eventsV3Event_universal_d_V3Event = V3Event;
  type eventsV3Event_universal_d_CommonAddress = CommonAddress;
  type eventsV3Event_universal_d_CommonAddressStreetOneOf = CommonAddressStreetOneOf;
  type eventsV3Event_universal_d_CommonStreetAddress = CommonStreetAddress;
  type eventsV3Event_universal_d_CommonAddressLocation = CommonAddressLocation;
  type eventsV3Event_universal_d_CommonSubdivision = CommonSubdivision;
  type eventsV3Event_universal_d_SubdivisionSubdivisionType = SubdivisionSubdivisionType;
  const eventsV3Event_universal_d_SubdivisionSubdivisionType: typeof SubdivisionSubdivisionType;
  type eventsV3Event_universal_d_DateAndTimeSettings = DateAndTimeSettings;
  type eventsV3Event_universal_d_RecurrenceStatusStatus = RecurrenceStatusStatus;
  const eventsV3Event_universal_d_RecurrenceStatusStatus: typeof RecurrenceStatusStatus;
  type eventsV3Event_universal_d_Formatted = Formatted;
  type eventsV3Event_universal_d_RegistrationTypeType = RegistrationTypeType;
  const eventsV3Event_universal_d_RegistrationTypeType: typeof RegistrationTypeType;
  type eventsV3Event_universal_d_RegistrationStatusStatus = RegistrationStatusStatus;
  const eventsV3Event_universal_d_RegistrationStatusStatus: typeof RegistrationStatusStatus;
  type eventsV3Event_universal_d_RsvpRegistration = RsvpRegistration;
  type eventsV3Event_universal_d_ResponseType = ResponseType;
  const eventsV3Event_universal_d_ResponseType: typeof ResponseType;
  type eventsV3Event_universal_d_TicketsRegistration = TicketsRegistration;
  type eventsV3Event_universal_d_TaxSettings = TaxSettings;
  type eventsV3Event_universal_d_ExternalRegistration = ExternalRegistration;
  type eventsV3Event_universal_d_GuestTypeType = GuestTypeType;
  const eventsV3Event_universal_d_GuestTypeType: typeof GuestTypeType;
  type eventsV3Event_universal_d_InitialRegistrationTypeType = InitialRegistrationTypeType;
  const eventsV3Event_universal_d_InitialRegistrationTypeType: typeof InitialRegistrationTypeType;
  type eventsV3Event_universal_d_CalendarUrls = CalendarUrls;
  type eventsV3Event_universal_d_Summaries = Summaries;
  type eventsV3Event_universal_d_EventsMoney = EventsMoney;
  type eventsV3Event_universal_d_Rsvps = Rsvps;
  type eventsV3Event_universal_d_Tickets = Tickets;
  type eventsV3Event_universal_d_GuestListSettings = GuestListSettings;
  type eventsV3Event_universal_d_ConferenceTypeType = ConferenceTypeType;
  const eventsV3Event_universal_d_ConferenceTypeType: typeof ConferenceTypeType;
  type eventsV3Event_universal_d_AgendaSettings = AgendaSettings;
  type eventsV3Event_universal_d_EventCategories = EventCategories;
  type eventsV3Event_universal_d_EventCategory = EventCategory;
  type eventsV3Event_universal_d_V3EventDisplaySettings = V3EventDisplaySettings;
  type eventsV3Event_universal_d_V3LabellingSettings = V3LabellingSettings;
  type eventsV3Event_universal_d_V3EventStarted = V3EventStarted;
  type eventsV3Event_universal_d_V3EventReminder = V3EventReminder;
  type eventsV3Event_universal_d_TimeDuration = TimeDuration;
  type eventsV3Event_universal_d_V3EventEnded = V3EventEnded;
  type eventsV3Event_universal_d_CreateEventRequest = CreateEventRequest;
  type eventsV3Event_universal_d_RequestedFields = RequestedFields;
  const eventsV3Event_universal_d_RequestedFields: typeof RequestedFields;
  type eventsV3Event_universal_d_CreateEventResponse = CreateEventResponse;
  type eventsV3Event_universal_d_V3EventPublished = V3EventPublished;
  type eventsV3Event_universal_d_CloneEventRequest = CloneEventRequest;
  type eventsV3Event_universal_d_CloneEventResponse = CloneEventResponse;
  type eventsV3Event_universal_d_EventCloned = EventCloned;
  type eventsV3Event_universal_d_UpdateEventRequest = UpdateEventRequest;
  type eventsV3Event_universal_d_UpdateEventResponse = UpdateEventResponse;
  type eventsV3Event_universal_d_PublishDraftEventRequest = PublishDraftEventRequest;
  type eventsV3Event_universal_d_PublishDraftEventResponse = PublishDraftEventResponse;
  type eventsV3Event_universal_d_CancelEventRequest = CancelEventRequest;
  type eventsV3Event_universal_d_CancelEventResponse = CancelEventResponse;
  type eventsV3Event_universal_d_V3EventCanceled = V3EventCanceled;
  type eventsV3Event_universal_d_BulkCancelEventsByFilterRequest = BulkCancelEventsByFilterRequest;
  type eventsV3Event_universal_d_BulkCancelEventsByFilterResponse = BulkCancelEventsByFilterResponse;
  type eventsV3Event_universal_d_DeleteEventRequest = DeleteEventRequest;
  type eventsV3Event_universal_d_DeleteEventResponse = DeleteEventResponse;
  type eventsV3Event_universal_d_BulkDeleteEventsByFilterRequest = BulkDeleteEventsByFilterRequest;
  type eventsV3Event_universal_d_BulkDeleteEventsByFilterResponse = BulkDeleteEventsByFilterResponse;
  type eventsV3Event_universal_d_QueryEventsRequest = QueryEventsRequest;
  type eventsV3Event_universal_d_QueryEventsResponse = QueryEventsResponse;
  type eventsV3Event_universal_d_ExportEventsRequest = ExportEventsRequest;
  type eventsV3Event_universal_d_CommonQueryV2 = CommonQueryV2;
  type eventsV3Event_universal_d_CommonQueryV2PagingMethodOneOf = CommonQueryV2PagingMethodOneOf;
  type eventsV3Event_universal_d_CommonSorting = CommonSorting;
  type eventsV3Event_universal_d_CommonSortOrder = CommonSortOrder;
  const eventsV3Event_universal_d_CommonSortOrder: typeof CommonSortOrder;
  type eventsV3Event_universal_d_CommonPaging = CommonPaging;
  type eventsV3Event_universal_d_ExportEventsResponse = ExportEventsResponse;
  type eventsV3Event_universal_d_CommonPagingMetadataV2 = CommonPagingMetadataV2;
  type eventsV3Event_universal_d_CommonCursors = CommonCursors;
  type eventsV3Event_universal_d_CountEventsByStatusRequest = CountEventsByStatusRequest;
  type eventsV3Event_universal_d_CountEventsByStatusResponse = CountEventsByStatusResponse;
  type eventsV3Event_universal_d_ListUserEventsRequest = ListUserEventsRequest;
  type eventsV3Event_universal_d_UserFilter = UserFilter;
  type eventsV3Event_universal_d_Relation = Relation;
  const eventsV3Event_universal_d_Relation: typeof Relation;
  type eventsV3Event_universal_d_ListUserEventsResponse = ListUserEventsResponse;
  type eventsV3Event_universal_d_ListEventsByCategoryRequest = ListEventsByCategoryRequest;
  type eventsV3Event_universal_d_ListEventsByCategoryResponse = ListEventsByCategoryResponse;
  type eventsV3Event_universal_d_GetEventRequest = GetEventRequest;
  type eventsV3Event_universal_d_GetEventResponse = GetEventResponse;
  type eventsV3Event_universal_d_GetEventBySlugRequest = GetEventBySlugRequest;
  type eventsV3Event_universal_d_GetEventBySlugResponse = GetEventBySlugResponse;
  type eventsV3Event_universal_d_FindEventRequest = FindEventRequest;
  type eventsV3Event_universal_d_FindEventRequestFindByOneOf = FindEventRequestFindByOneOf;
  type eventsV3Event_universal_d_FindEventResponse = FindEventResponse;
  type eventsV3Event_universal_d_EventsLocation = EventsLocation;
  type eventsV3Event_universal_d_LocationLocationType = LocationLocationType;
  const eventsV3Event_universal_d_LocationLocationType: typeof LocationLocationType;
  type eventsV3Event_universal_d_EventsRecurrences = EventsRecurrences;
  type eventsV3Event_universal_d_EventsOccurrence = EventsOccurrence;
  type eventsV3Event_universal_d_EventsRecurrenceStatusStatus = EventsRecurrenceStatusStatus;
  const eventsV3Event_universal_d_EventsRecurrenceStatusStatus: typeof EventsRecurrenceStatusStatus;
  type eventsV3Event_universal_d_EventsRegistration = EventsRegistration;
  type eventsV3Event_universal_d_EventsTaxType = EventsTaxType;
  const eventsV3Event_universal_d_EventsTaxType: typeof EventsTaxType;
  type eventsV3Event_universal_d_EventsFeed = EventsFeed;
  type eventsV3Event_universal_d_EventsOnlineConferencing = EventsOnlineConferencing;
  type eventsV3Event_universal_d_EventsOnlineConferencingSession = EventsOnlineConferencingSession;
  type eventsV3Event_universal_d_EventsSeoSettings = EventsSeoSettings;
  type eventsV3Event_universal_d_EventCopied = EventCopied;
  type eventsV3Event_universal_d_EventPublished = EventPublished;
  type eventsV3Event_universal_d_EventStarted = EventStarted;
  type eventsV3Event_universal_d_EventReminder = EventReminder;
  const eventsV3Event_universal_d_createEvent: typeof createEvent;
  type eventsV3Event_universal_d_CreateEventOptions = CreateEventOptions;
  const eventsV3Event_universal_d_cloneEvent: typeof cloneEvent;
  type eventsV3Event_universal_d_CloneEventOptions = CloneEventOptions;
  const eventsV3Event_universal_d_updateEvent: typeof updateEvent;
  type eventsV3Event_universal_d_UpdateEventOptions = UpdateEventOptions;
  const eventsV3Event_universal_d_publishDraftEvent: typeof publishDraftEvent;
  type eventsV3Event_universal_d_PublishDraftEventOptions = PublishDraftEventOptions;
  const eventsV3Event_universal_d_cancelEvent: typeof cancelEvent;
  type eventsV3Event_universal_d_CancelEventOptions = CancelEventOptions;
  const eventsV3Event_universal_d_bulkCancelEventsByFilter: typeof bulkCancelEventsByFilter;
  type eventsV3Event_universal_d_BulkCancelEventsByFilterOptions = BulkCancelEventsByFilterOptions;
  const eventsV3Event_universal_d_deleteEvent: typeof deleteEvent;
  const eventsV3Event_universal_d_bulkDeleteEventsByFilter: typeof bulkDeleteEventsByFilter;
  type eventsV3Event_universal_d_BulkDeleteEventsByFilterOptions = BulkDeleteEventsByFilterOptions;
  const eventsV3Event_universal_d_queryEvents: typeof queryEvents;
  type eventsV3Event_universal_d_QueryEventsOptions = QueryEventsOptions;
  type eventsV3Event_universal_d_EventsQueryResult = EventsQueryResult;
  type eventsV3Event_universal_d_EventsQueryBuilder = EventsQueryBuilder;
  const eventsV3Event_universal_d_countEventsByStatus: typeof countEventsByStatus;
  type eventsV3Event_universal_d_CountEventsByStatusOptions = CountEventsByStatusOptions;
  const eventsV3Event_universal_d_listEventsByCategory: typeof listEventsByCategory;
  type eventsV3Event_universal_d_ListEventsByCategoryOptions = ListEventsByCategoryOptions;
  const eventsV3Event_universal_d_getEvent: typeof getEvent;
  type eventsV3Event_universal_d_GetEventOptions = GetEventOptions;
  const eventsV3Event_universal_d_getEventBySlug: typeof getEventBySlug;
  type eventsV3Event_universal_d_GetEventBySlugOptions = GetEventBySlugOptions;
  const eventsV3Event_universal_d_findEvent: typeof findEvent;
  type eventsV3Event_universal_d_FindEventOptions = FindEventOptions;
  namespace eventsV3Event_universal_d {
    export {
      eventsV3Event_universal_d_V3Event as V3Event,
      Location$1 as Location,
      LocationType$1 as LocationType,
      eventsV3Event_universal_d_CommonAddress as CommonAddress,
      eventsV3Event_universal_d_CommonAddressStreetOneOf as CommonAddressStreetOneOf,
      eventsV3Event_universal_d_CommonStreetAddress as CommonStreetAddress,
      eventsV3Event_universal_d_CommonAddressLocation as CommonAddressLocation,
      eventsV3Event_universal_d_CommonSubdivision as CommonSubdivision,
      eventsV3Event_universal_d_SubdivisionSubdivisionType as SubdivisionSubdivisionType,
      eventsV3Event_universal_d_DateAndTimeSettings as DateAndTimeSettings,
      eventsV3Event_universal_d_RecurrenceStatusStatus as RecurrenceStatusStatus,
      Recurrences$1 as Recurrences,
      Occurrence$1 as Occurrence,
      eventsV3Event_universal_d_Formatted as Formatted,
      Status$1 as Status,
      Registration$1 as Registration,
      eventsV3Event_universal_d_RegistrationTypeType as RegistrationTypeType,
      eventsV3Event_universal_d_RegistrationStatusStatus as RegistrationStatusStatus,
      eventsV3Event_universal_d_RsvpRegistration as RsvpRegistration,
      eventsV3Event_universal_d_ResponseType as ResponseType,
      eventsV3Event_universal_d_TicketsRegistration as TicketsRegistration,
      Money$1 as Money,
      eventsV3Event_universal_d_TaxSettings as TaxSettings,
      TaxType$1 as TaxType,
      eventsV3Event_universal_d_ExternalRegistration as ExternalRegistration,
      eventsV3Event_universal_d_GuestTypeType as GuestTypeType,
      eventsV3Event_universal_d_InitialRegistrationTypeType as InitialRegistrationTypeType,
      eventsV3Event_universal_d_CalendarUrls as CalendarUrls,
      Form$1 as Form,
      InputControl$1 as InputControl,
      InputControlType$1 as InputControlType,
      Input$1 as Input,
      ValueType$1 as ValueType,
      OptionSelection$1 as OptionSelection,
      OptionSelectionSelectedOptionOneOf$1 as OptionSelectionSelectedOptionOneOf,
      Label$1 as Label,
      FormMessages$1 as FormMessages,
      RsvpFormMessages$1 as RsvpFormMessages,
      PositiveResponseConfirmation$1 as PositiveResponseConfirmation,
      NegativeResponseConfirmation$1 as NegativeResponseConfirmation,
      Positive$1 as Positive,
      Negative$1 as Negative,
      CheckoutFormMessages$1 as CheckoutFormMessages,
      ResponseConfirmation$1 as ResponseConfirmation,
      RegistrationClosedMessages$1 as RegistrationClosedMessages,
      TicketsUnavailableMessages$1 as TicketsUnavailableMessages,
      eventsV3Event_universal_d_Summaries as Summaries,
      eventsV3Event_universal_d_EventsMoney as EventsMoney,
      eventsV3Event_universal_d_Rsvps as Rsvps,
      eventsV3Event_universal_d_Tickets as Tickets,
      eventsV3Event_universal_d_GuestListSettings as GuestListSettings,
      Feed$1 as Feed,
      OnlineConferencing$1 as OnlineConferencing,
      eventsV3Event_universal_d_ConferenceTypeType as ConferenceTypeType,
      OnlineConferencingSession$1 as OnlineConferencingSession,
      SeoSettings$1 as SeoSettings,
      SeoSchema$1 as SeoSchema,
      Keyword$1 as Keyword,
      Tag$1 as Tag,
      Settings$1 as Settings,
      eventsV3Event_universal_d_AgendaSettings as AgendaSettings,
      eventsV3Event_universal_d_EventCategories as EventCategories,
      eventsV3Event_universal_d_EventCategory as EventCategory,
      Type$1 as Type,
      eventsV3Event_universal_d_V3EventDisplaySettings as V3EventDisplaySettings,
      eventsV3Event_universal_d_V3LabellingSettings as V3LabellingSettings,
      eventsV3Event_universal_d_V3EventStarted as V3EventStarted,
      eventsV3Event_universal_d_V3EventReminder as V3EventReminder,
      eventsV3Event_universal_d_TimeDuration as TimeDuration,
      eventsV3Event_universal_d_V3EventEnded as V3EventEnded,
      eventsV3Event_universal_d_CreateEventRequest as CreateEventRequest,
      eventsV3Event_universal_d_RequestedFields as RequestedFields,
      eventsV3Event_universal_d_CreateEventResponse as CreateEventResponse,
      eventsV3Event_universal_d_V3EventPublished as V3EventPublished,
      eventsV3Event_universal_d_CloneEventRequest as CloneEventRequest,
      eventsV3Event_universal_d_CloneEventResponse as CloneEventResponse,
      eventsV3Event_universal_d_EventCloned as EventCloned,
      eventsV3Event_universal_d_UpdateEventRequest as UpdateEventRequest,
      eventsV3Event_universal_d_UpdateEventResponse as UpdateEventResponse,
      eventsV3Event_universal_d_PublishDraftEventRequest as PublishDraftEventRequest,
      eventsV3Event_universal_d_PublishDraftEventResponse as PublishDraftEventResponse,
      eventsV3Event_universal_d_CancelEventRequest as CancelEventRequest,
      eventsV3Event_universal_d_CancelEventResponse as CancelEventResponse,
      eventsV3Event_universal_d_V3EventCanceled as V3EventCanceled,
      eventsV3Event_universal_d_BulkCancelEventsByFilterRequest as BulkCancelEventsByFilterRequest,
      QueryV2$1 as QueryV2,
      QueryV2PagingMethodOneOf$1 as QueryV2PagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      Paging$1 as Paging,
      eventsV3Event_universal_d_BulkCancelEventsByFilterResponse as BulkCancelEventsByFilterResponse,
      eventsV3Event_universal_d_DeleteEventRequest as DeleteEventRequest,
      eventsV3Event_universal_d_DeleteEventResponse as DeleteEventResponse,
      eventsV3Event_universal_d_BulkDeleteEventsByFilterRequest as BulkDeleteEventsByFilterRequest,
      eventsV3Event_universal_d_BulkDeleteEventsByFilterResponse as BulkDeleteEventsByFilterResponse,
      eventsV3Event_universal_d_QueryEventsRequest as QueryEventsRequest,
      eventsV3Event_universal_d_QueryEventsResponse as QueryEventsResponse,
      PagingMetadataV2$1 as PagingMetadataV2,
      Cursors$1 as Cursors,
      eventsV3Event_universal_d_ExportEventsRequest as ExportEventsRequest,
      eventsV3Event_universal_d_CommonQueryV2 as CommonQueryV2,
      eventsV3Event_universal_d_CommonQueryV2PagingMethodOneOf as CommonQueryV2PagingMethodOneOf,
      eventsV3Event_universal_d_CommonSorting as CommonSorting,
      eventsV3Event_universal_d_CommonSortOrder as CommonSortOrder,
      eventsV3Event_universal_d_CommonPaging as CommonPaging,
      CursorPaging$1 as CursorPaging,
      eventsV3Event_universal_d_ExportEventsResponse as ExportEventsResponse,
      eventsV3Event_universal_d_CommonPagingMetadataV2 as CommonPagingMetadataV2,
      eventsV3Event_universal_d_CommonCursors as CommonCursors,
      eventsV3Event_universal_d_CountEventsByStatusRequest as CountEventsByStatusRequest,
      eventsV3Event_universal_d_CountEventsByStatusResponse as CountEventsByStatusResponse,
      FacetCounts$1 as FacetCounts,
      eventsV3Event_universal_d_ListUserEventsRequest as ListUserEventsRequest,
      eventsV3Event_universal_d_UserFilter as UserFilter,
      eventsV3Event_universal_d_Relation as Relation,
      eventsV3Event_universal_d_ListUserEventsResponse as ListUserEventsResponse,
      eventsV3Event_universal_d_ListEventsByCategoryRequest as ListEventsByCategoryRequest,
      eventsV3Event_universal_d_ListEventsByCategoryResponse as ListEventsByCategoryResponse,
      eventsV3Event_universal_d_GetEventRequest as GetEventRequest,
      eventsV3Event_universal_d_GetEventResponse as GetEventResponse,
      eventsV3Event_universal_d_GetEventBySlugRequest as GetEventBySlugRequest,
      eventsV3Event_universal_d_GetEventBySlugResponse as GetEventBySlugResponse,
      eventsV3Event_universal_d_FindEventRequest as FindEventRequest,
      eventsV3Event_universal_d_FindEventRequestFindByOneOf as FindEventRequestFindByOneOf,
      eventsV3Event_universal_d_FindEventResponse as FindEventResponse,
      EventCreated$1 as EventCreated,
      eventsV3Event_universal_d_EventsLocation as EventsLocation,
      MapCoordinates$1 as MapCoordinates,
      eventsV3Event_universal_d_LocationLocationType as LocationLocationType,
      Address$1 as Address,
      AddressStreetOneOf$1 as AddressStreetOneOf,
      StreetAddress$1 as StreetAddress,
      AddressLocation$1 as AddressLocation,
      Subdivision$1 as Subdivision,
      SubdivisionType$1 as SubdivisionType,
      ScheduleConfig$1 as ScheduleConfig,
      eventsV3Event_universal_d_EventsRecurrences as EventsRecurrences,
      eventsV3Event_universal_d_EventsOccurrence as EventsOccurrence,
      eventsV3Event_universal_d_EventsRecurrenceStatusStatus as EventsRecurrenceStatusStatus,
      EventStatus$1 as EventStatus,
      Event$1 as Event,
      Scheduling$1 as Scheduling,
      eventsV3Event_universal_d_EventsRegistration as EventsRegistration,
      EventType$1 as EventType,
      RegistrationStatus$1 as RegistrationStatus,
      RsvpCollection$1 as RsvpCollection,
      RsvpCollectionConfig$1 as RsvpCollectionConfig,
      RsvpStatusOptions$1 as RsvpStatusOptions,
      Ticketing$1 as Ticketing,
      TicketingConfig$1 as TicketingConfig,
      TaxConfig$1 as TaxConfig,
      eventsV3Event_universal_d_EventsTaxType as EventsTaxType,
      ExternalEvent$1 as ExternalEvent,
      VisitorType$1 as VisitorType,
      CalendarLinks$1 as CalendarLinks,
      SiteUrl$1 as SiteUrl,
      Dashboard$1 as Dashboard,
      RsvpSummary$1 as RsvpSummary,
      TicketingSummary$1 as TicketingSummary,
      GuestListConfig$1 as GuestListConfig,
      eventsV3Event_universal_d_EventsFeed as EventsFeed,
      eventsV3Event_universal_d_EventsOnlineConferencing as EventsOnlineConferencing,
      OnlineConferencingConfig$1 as OnlineConferencingConfig,
      ConferenceType$1 as ConferenceType,
      eventsV3Event_universal_d_EventsOnlineConferencingSession as EventsOnlineConferencingSession,
      eventsV3Event_universal_d_EventsSeoSettings as EventsSeoSettings,
      Agenda$1 as Agenda,
      Category$1 as Category,
      CategoryCounts$1 as CategoryCounts,
      State$1 as State,
      EventDisplaySettings$1 as EventDisplaySettings,
      LabellingSettings$1 as LabellingSettings,
      Empty$1 as Empty,
      EventUpdated$1 as EventUpdated,
      EventDeleted$1 as EventDeleted,
      eventsV3Event_universal_d_EventCopied as EventCopied,
      eventsV3Event_universal_d_EventPublished as EventPublished,
      EventCanceled$1 as EventCanceled,
      eventsV3Event_universal_d_EventStarted as EventStarted,
      EventEnded$1 as EventEnded,
      eventsV3Event_universal_d_EventReminder as EventReminder,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      MessageEnvelope$1 as MessageEnvelope,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
      eventsV3Event_universal_d_createEvent as createEvent,
      eventsV3Event_universal_d_CreateEventOptions as CreateEventOptions,
      eventsV3Event_universal_d_cloneEvent as cloneEvent,
      eventsV3Event_universal_d_CloneEventOptions as CloneEventOptions,
      eventsV3Event_universal_d_updateEvent as updateEvent,
      eventsV3Event_universal_d_UpdateEventOptions as UpdateEventOptions,
      eventsV3Event_universal_d_publishDraftEvent as publishDraftEvent,
      eventsV3Event_universal_d_PublishDraftEventOptions as PublishDraftEventOptions,
      eventsV3Event_universal_d_cancelEvent as cancelEvent,
      eventsV3Event_universal_d_CancelEventOptions as CancelEventOptions,
      eventsV3Event_universal_d_bulkCancelEventsByFilter as bulkCancelEventsByFilter,
      eventsV3Event_universal_d_BulkCancelEventsByFilterOptions as BulkCancelEventsByFilterOptions,
      eventsV3Event_universal_d_deleteEvent as deleteEvent,
      eventsV3Event_universal_d_bulkDeleteEventsByFilter as bulkDeleteEventsByFilter,
      eventsV3Event_universal_d_BulkDeleteEventsByFilterOptions as BulkDeleteEventsByFilterOptions,
      eventsV3Event_universal_d_queryEvents as queryEvents,
      eventsV3Event_universal_d_QueryEventsOptions as QueryEventsOptions,
      eventsV3Event_universal_d_EventsQueryResult as EventsQueryResult,
      eventsV3Event_universal_d_EventsQueryBuilder as EventsQueryBuilder,
      eventsV3Event_universal_d_countEventsByStatus as countEventsByStatus,
      eventsV3Event_universal_d_CountEventsByStatusOptions as CountEventsByStatusOptions,
      eventsV3Event_universal_d_listEventsByCategory as listEventsByCategory,
      eventsV3Event_universal_d_ListEventsByCategoryOptions as ListEventsByCategoryOptions,
      eventsV3Event_universal_d_getEvent as getEvent,
      eventsV3Event_universal_d_GetEventOptions as GetEventOptions,
      eventsV3Event_universal_d_getEventBySlug as getEventBySlug,
      eventsV3Event_universal_d_GetEventBySlugOptions as GetEventBySlugOptions,
      eventsV3Event_universal_d_findEvent as findEvent,
      eventsV3Event_universal_d_FindEventOptions as FindEventOptions,
    };
  }
  
  interface TicketDefinition {
      /**
       * Ticket definition ID.
       * @readonly
       */
      _id?: string | null;
      /** Event ID to which the ticket definition belongs. */
      eventId?: string | null;
      /**
       * Revision number, which increments by 1 each time the ticket definition is updated. To prevent conflicting changes, the existing revision must be used when updating a ticket definition.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time when the ticket definition was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time when the ticket definition was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Ticket definition name. */
      name?: string | null;
      /** Ticket definition description. */
      description?: string | null;
      /** Ticket definition policy. */
      policyText?: string | null;
      /** Whether this ticket definition is hidden to site visitors and can't be purchased. */
      hidden?: boolean;
      /**
       * Whether the ticket has a limited maximum quantity.
       * @readonly
       */
      limited?: boolean;
      /** The maximum number of tickets that can be sold for the event when first defining the event. If a seating map is defined after you created a ticket definition, this property is ignored and `actualLimit` is used instead. */
      initialLimit?: number | null;
      /**
       * The maximum number of tickets that can be sold for the event after adding a seating map to the event. If no seating map is defined, this property is the same as `initialLimit`.
       * @readonly
       */
      actualLimit?: number | null;
      /** Ticket pricing method. */
      pricingMethod?: PricingMethod;
      /**
       * Whether fee is included in the ticket price or customer pays it additionally at checkout. Possible values:
       * - `FEE_INCLUDED`: The fee is deducted from the ticket price for a seller. For example, if you're selling tickets for $10, then a service fee of $0.25 will be deducted from the price and you'll get $9.75.
       * - `FEE_ADDED_AT_CHECKOUT`: The fee is shown in addition to the ticket price at checkout and a guest pays the fee. For example, if you sell tickets for $10, a customer will see a service fee of $0.25 and will pay $10.25 in total.
       */
      feeType?: Type;
      /** Ticket sale period. */
      salePeriod?: SalePeriod;
      /**
       * Ticket sale status. Possible values:
       * - `SALE_SCHEDULED`: Tickets are not on sale yet.
       * - `SALE_STARTED`: Tickets are on sale.
       * - `SALE_ENDED`: Tickets are not on sale.
       * @readonly
       */
      saleStatus?: SaleStatusEnumStatus;
      /**
       * Ticket sales information. <br>
       * **Note:** This field is only returned when `SALES_DETAILS` fieldset is included in the request.
       */
      salesDetails?: SalesDetails;
      /**
       * For proxy.
       * @internal
       * @readonly
       */
      sortIndex?: number;
      /**
       * Number of tickets that can be purchased per checkout. <br>
       * **Note:** If the `actuaLimit` or `salesDetails.unsoldCount` field value is smaller than `limitPerCheckout`, then it overrides this field.
       * @readonly
       */
      limitPerCheckout?: number | null;
      /**
       * Event created timestamp in `yyyy-mm-ddThh:mm:sssZ` format.
       * @internal
       * @readonly
       */
      eventCreatedDate?: Date;
  }
  interface PricingMethod extends PricingMethodPriceOneOf {
      /** Same ticket price for everyone. */
      fixedPrice?: CommonMoney;
      /** Minimum price guests must pay for a ticket. The price can be updated to a higher amount by a guest during the checkout. */
      guestPrice?: CommonMoney;
      /** Sets of various ticket prices. For example, you can charge different prices for children and adults. */
      pricingOptions?: PricingOptions;
      /**
       * Ticket price type. Possible values:
       * - `STANDARD`: All money goes to a seller. Applies to all ticket pricing methods except for `guestPrice`.
       * - `DONATION`: All collected money is a donation. This pricing type is automatically assigned when you select the `guestPrice` pricing method.
       * @readonly
       */
      pricingType?: PricingTypeEnumType;
      /**
       * Whether the ticket is free. To create a free ticket, enter `0` in the `pricingMethod.fixedPrice.value` field.
       * @readonly
       */
      free?: boolean;
  }
  /** @oneof */
  interface PricingMethodPriceOneOf {
      /** Same ticket price for everyone. */
      fixedPrice?: CommonMoney;
      /** Minimum price guests must pay for a ticket. The price can be updated to a higher amount by a guest during the checkout. */
      guestPrice?: CommonMoney;
      /** Sets of various ticket prices. For example, you can charge different prices for children and adults. */
      pricingOptions?: PricingOptions;
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface CommonMoney {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string;
      /** Currency code. Must be a valid [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code (e.g., USD). */
      currency?: string;
  }
  interface PricingOptions {
      /** Ticket price option details. */
      optionDetails?: OptionDetails[];
  }
  interface OptionDetails {
      /** Ticket price option ID. */
      optionId?: string | null;
      /** Ticket price option name, such as "Child Ticket". */
      name?: string | null;
      /** Ticket price. */
      price?: CommonMoney;
  }
  enum PricingTypeEnumType {
      UNKNOWN_PRICING_TYPE = "UNKNOWN_PRICING_TYPE",
      STANDARD = "STANDARD",
      DONATION = "DONATION"
  }
  enum Type {
      UNKNOWN_FEE_TYPE = "UNKNOWN_FEE_TYPE",
      /** Seller absorbs the fee. It is deducted from the ticket price. */
      FEE_INCLUDED = "FEE_INCLUDED",
      /** Fee is added to the ticket price at checkout. */
      FEE_ADDED_AT_CHECKOUT = "FEE_ADDED_AT_CHECKOUT",
      /** Service fee is not collected - available only for free tickets and legacy users. */
      NO_FEE = "NO_FEE"
  }
  interface SalePeriod {
      /** Ticket sale start timestamp. */
      startDate?: Date;
      /** Ticket sale end timestamp. */
      endDate?: Date;
      /** Whether to display the ticket if it's not available to buy. */
      displayNotOnSale?: boolean;
  }
  enum SaleStatusEnumStatus {
      UNKNOWN_SALE_STATUS = "UNKNOWN_SALE_STATUS",
      /** Ticket sale is scheduled to start */
      SALE_SCHEDULED = "SALE_SCHEDULED",
      /** Ticket sale has started */
      SALE_STARTED = "SALE_STARTED",
      /** Ticket sale has ended */
      SALE_ENDED = "SALE_ENDED"
  }
  interface SalesDetails {
      /**
       * Number of tickets that have not been purchased yet. The field is `null` if the ticket quantity is unlimited.
       * @readonly
       */
      unsoldCount?: number | null;
      /**
       * Number of purchased tickets.
       * @readonly
       */
      soldCount?: number | null;
      /**
       * Number of reserved tickets.
       * @readonly
       */
      reservedCount?: number | null;
      /**
       * Whether the tickets are sold out.
       * @readonly
       */
      soldOut?: boolean | null;
  }
  interface InvalidateCache extends InvalidateCacheGetByOneOf {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App;
      /** Invalidate by page id */
      page?: Page;
      /** Invalidate by URI path */
      uri?: URI;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App;
      /** Invalidate by page id */
      page?: Page;
      /** Invalidate by URI path */
      uri?: URI;
      /** Invalidate by file (for media files such as PDFs) */
      file?: File;
  }
  interface App {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface File {
      /** the msid the file is related to */
      metaSiteId?: string;
      /** Invalidate by filename (for media files such as PDFs) */
      fileName?: string;
  }
  interface GetTicketDefinitionSummaryRequest {
      /** Ticket definition id. */
      ticketDefinitionId?: string | null;
  }
  interface GetTicketDefinitionSummaryResponse {
      /** Summary. */
      summary?: TicketDefinitionSummary;
  }
  interface TicketDefinitionSummary {
      /**
       * Ticket definition ID.
       * @readonly
       */
      definitionId?: string | null;
      /**
       * Event ID to which the ticket definition summary belongs.
       * @readonly
       */
      eventId?: string | null;
      /**
       * Date and time of the ticket definition summary latest update in `yyyy-mm-ddThh:mm:sssZ` format.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Reserved count.
       * @readonly
       */
      reservedCount?: number;
      /**
       * Sold count.
       * @readonly
       */
      soldCount?: number;
      /**
       * Paid exists.
       * @readonly
       */
      paidExists?: boolean;
  }
  interface ListEventTicketingSummaryRequest {
      /** Event ID. */
      eventId?: string[];
      /**
       * Consistent read.
       * @internal
       */
      consistentRead?: boolean | null;
  }
  interface ListEventTicketingSummaryResponse {
      /** Ticketing summaries. */
      summaries?: EventTicketingSummary[];
  }
  interface EventTicketingSummary {
      /**
       * Event ID to which the ticketing summary belongs.
       * @readonly
       */
      eventId?: string | null;
      /**
       * Date and time of the ticketing summary latest update in `yyyy-mm-ddThh:mm:sssZ` format.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Whether all tickets are sold for this event.
       * @readonly
       */
      soldOut?: boolean | null;
      /**
       * Price of lowest priced ticket.
       * @readonly
       */
      lowestTicketPrice?: CommonMoney;
      /**
       * Price of highest priced ticket.
       * @readonly
       */
      highestTicketPrice?: CommonMoney;
      /** Currency used in event transactions. */
      currency?: string | null;
      /**
       * Formatted price of lowest priced ticket.
       * @readonly
       */
      lowestTicketPriceFormatted?: string | null;
      /**
       * Formatted price of highest priced ticket.
       * @readonly
       */
      highestTicketPriceFormatted?: string | null;
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
  interface Empty {
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
      /** Reservation ticket quantities. */
      quantities?: TicketQuantity[];
      /** Reservation update timestamp. */
      _updatedDate?: Date;
      /** Reservation counts. */
      counts?: ReservationCount[];
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
  interface TicketQuantity {
      /** Ticket definition ID. */
      ticketDefinitionId?: string | null;
      /** Quantity. */
      quantity?: number | null;
      /** Quantity update timestamp. */
      _updatedDate?: Date;
  }
  interface ReservationCount {
      /** Reservation Count snapshot timestamp. */
      timestamp?: Date;
      /** Ticket Definition ID. */
      ticketDefinitionId?: string;
      /** Confirmed reservation count. */
      confirmedCount?: number;
      /** Pending reservation count. */
      pendingCount?: number;
      /** True if paid ticket reservation exist. */
      paidExists?: boolean;
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
      /** Reservation ticket quantities. */
      quantities?: TicketQuantity[];
      /** Reservation update timestamp. */
      _updatedDate?: Date;
      /** Reservation counts. */
      counts?: ReservationCount[];
  }
  interface EventDeleted {
      /** Event deleted timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event title. */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
      /**
       * Event categories.
       * @internal
       */
      categories?: string[];
  }
  interface UpdateEventTicketingSummaryRequest {
      /** Event ID. */
      eventId?: string;
  }
  interface MessageEnvelope {
      /** App instance ID. */
      instanceId?: string | null;
      /** Event type. */
      eventType?: string;
      /** The identification type and identity data. */
      identity?: IdentificationData;
      /** Stringify payload. */
      data?: string;
  }
  interface IdentificationData extends IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: WebhookIdentityType;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  enum WebhookIdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface CreateTicketDefinitionRequest {
      /** Ticket definition info. */
      ticketDefinition: TicketDefinition;
      /**
       * Predefined sets of fields to return.
       * - `SALES_DETAILS`: Returns `salesDetails`.
       */
      fields?: Field[];
  }
  enum Field {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      /** Include `unsoldCount`, `soldCount`, `reservedCount` and `soldOut` in the response. */
      SALES_DETAILS = "SALES_DETAILS"
  }
  interface CreateTicketDefinitionResponse {
      /** Created ticket definition. */
      ticketDefinition?: TicketDefinition;
  }
  interface UpdateTicketDefinitionRequest {
      /** Ticket definition to update. */
      ticketDefinition: TicketDefinition;
      /**
       * List of exact fields to update. For example, if you define only `name`, all other fields are ignored.
       * @internal
       */
      mask?: string[];
      /**
       * Predefined sets of fields to return.
       * - `SALES_DETAILS`: Returns `salesDetails`.
       */
      fields?: Field[];
  }
  interface UpdateTicketDefinitionResponse {
      /** The updated ticket definition. */
      ticketDefinition?: TicketDefinition;
  }
  interface SalePeriodUpdated {
      /** Ticket definition sale period after update. */
      afterUpdate?: SalePeriod;
  }
  interface GetTicketDefinitionRequest {
      /** Ticket definition ID. */
      ticketDefinitionId: string;
      /**
       * Predefined sets of fields to return.
       * - `SALES_DETAILS`: Returns `salesDetails`.
       */
      fields?: Field[];
  }
  interface GetTicketDefinitionResponse {
      /** The requested ticket definition. */
      ticketDefinition?: TicketDefinition;
  }
  interface DeleteTicketDefinitionRequest {
      /** ID of the ticket definition to delete. */
      ticketDefinitionId: string;
  }
  interface DeleteTicketDefinitionResponse {
  }
  interface ReorderTicketDefinitionsRequest extends ReorderTicketDefinitionsRequestReferenceDefinitionOneOf {
      /** Move the given `definitionId` before the referenced ticket definition. */
      beforeDefinitionId?: string;
      /** Move the given `definitionId` after the referenced ticket definition. */
      afterDefinitionId?: string;
      /** Event ID. */
      eventId: string;
      /** Ticket definition ID. */
      ticketDefinitionId: string;
  }
  /** @oneof */
  interface ReorderTicketDefinitionsRequestReferenceDefinitionOneOf {
      /** Move the given `definitionId` before the referenced ticket definition. */
      beforeDefinitionId?: string;
      /** Move the given `definitionId` after the referenced ticket definition. */
      afterDefinitionId?: string;
  }
  interface ReorderTicketDefinitionsResponse {
  }
  interface UpdateTicketDefinitionSortIndexRequest {
      /** Ticket definition ID */
      ticketDefinitionId?: string;
      /** The revision of the ticket definition */
      revision?: string;
      /** the sort index of a ticket definition to set */
      sortIndex?: number;
      /** Requested fields. */
      fields?: Field[];
  }
  interface UpdateTicketDefinitionSortIndexResponse {
      /** the updated ticket definition */
      ticketDefinition?: TicketDefinition;
  }
  interface QueryTicketDefinitionsRequest {
      /** Query options. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
      query: QueryV2;
      /**
       * Predefined sets of fields to return.
       * - `SALES_DETAILS`: Returns `salesDetails`.
       */
      fields?: Field[];
      /**
       * Consistent read.
       * @internal
       */
      consistentRead?: boolean | null;
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort` parameters. */
      cursorPaging?: CursorPaging;
      /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1", "fieldName2":{"$operator":"value2"} }`. <br/> <br/> **Example:** <br/> `"filter" : { "id": "2224a9d1-79e6-4549-a5c5-bf7ce5aac1a5", "revision": {"$ne":"1"} }` */
      filter?: Record<string, any> | null;
      /** Sort object in the following format: <br/> `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]` <br/> <br/> **Example:** <br/> `[{"fieldName":"createdDate","direction":"DESC"}]` <br/> <br/> See [supported fields](https://dev.wix.com/api/rest/wix-events/policy-v2/filter-and-sort) for more information. */
      sort?: Sorting[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort` parameters. */
      cursorPaging?: CursorPaging;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Defaults to `ASC` */
      order?: SortOrder;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging {
      /** Number of items to load per page. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface CursorPaging {
      /** Number of items to load per page. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       * You can get the relevant cursor token
       * from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryTicketDefinitionsResponse {
      /** List of ticket definitions. */
      ticketDefinitions?: TicketDefinition[];
      /** Metadata for the paginated results. */
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
  }
  interface Cursors {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryAvailableTicketDefinitionsRequest {
      /** Query options. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
      query: QueryV2;
      /**
       * Predefined sets of fields to return.
       * - `SALES_DETAILS`: Returns `salesDetails`.
       */
      fields?: Field[];
  }
  interface QueryAvailableTicketDefinitionsResponse {
      /** List of ticket definitions. */
      ticketDefinitions?: TicketDefinition[];
      /** Metadata for the paginated results. */
      metadata?: PagingMetadataV2;
  }
  interface CountTicketDefinitionsRequest {
      /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1" }`. */
      filter?: Record<string, any> | null;
      /**
       * Parameters to count ticket definitions by.
       *
       * - Max: 20 facets.
       */
      facet?: string[];
  }
  interface CountTicketDefinitionsResponse {
      /** Metadata for the paginated results. */
      metadata?: PagingMetadataV2;
      /** Filter facets. */
      facets?: Record<string, FacetCounts>;
  }
  interface FacetCounts {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface CountAvailableTicketDefinitionsRequest {
      /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1" }`. */
      filter?: Record<string, any> | null;
  }
  interface CountAvailableTicketDefinitionsResponse {
      /** Metadata for the paginated results. */
      metadata?: PagingMetadataV2;
      /** Filter facets. */
      facets?: Record<string, FacetCounts>;
  }
  interface BulkDeleteTicketDefinitionsByFilterRequest {
      /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1" }`. <br/> <br/> **Example:** <br/> `"filter" : { "eventId": "3d3d5c04-ece0-45a8-85f0-11a58edaa192" }` */
      filter: Record<string, any> | null;
  }
  interface BulkDeleteTicketDefinitionsByFilterResponse {
  }
  interface ChangeCurrencyRequest {
      /** Event ID. */
      eventId: string;
      /** Ticket price currency in 3-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
      currency: string;
  }
  interface ChangeCurrencyResponse {
  }
  interface BulkCopyTicketDefinitionsByEventIdRequest {
      /** Origin instance ID. */
      originInstanceId?: string | null;
      /** Origin Event ID. */
      originEventId?: string;
      /** Target Event ID. */
      targetEventId?: string;
  }
  interface BulkCopyTicketDefinitionsByEventIdResponse {
      /** Copied ticket definitions. */
      definitions?: CopiedTicketDefinition[];
  }
  interface CopiedTicketDefinition {
      /** Origin Ticket definition ID. */
      originTicketDefinitionId?: string;
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
  }
  interface EventCanceled {
      /** Event canceled timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event title */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
  }
  interface EventEnded {
      /** Event end timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
  }
  interface EventCreated {
      /** Event created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: Location;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig;
      /** Event title. */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
      /** Event status. */
      status?: EventStatus;
      /** Instance ID. Indicates the original app instance which current event was derived from. */
      derivedFromInstanceId?: string | null;
      /** Event ID. Indicates the original event which current event was derived from. */
      derivedFromEventId?: string | null;
      /** Event that was created. */
      event?: Event;
  }
  interface Location {
      /** Location name. */
      name?: string | null;
      /** Location map coordinates. */
      coordinates?: MapCoordinates;
      /** Single line address representation. */
      address?: string | null;
      /** Location type. */
      type?: LocationType;
      /**
       * Full address derived from formatted single line `address`.
       * When `full_address` is used to create or update the event, deprecated `address` and `coordinates` are ignored.
       * If provided `full_address` has empty `formatted_address` or `coordinates`, it will be auto-completed using Atlas service.
       *
       * Migration notes:
       * - `full_address.formatted_address` is equivalent to `address`.
       * - `full_address.geocode` is equivalent to `coordinates`.
       */
      fullAddress?: Address;
      /**
       * Defines event location as TBD (To Be Determined).
       * When event location is not yet defined, `name` is displayed instead of location address.
       * `coordinates`, `address`, `type` and `full_address` are not required when location is TBD.
       */
      tbd?: boolean | null;
  }
  interface MapCoordinates {
      /** Latitude. */
      lat?: number;
      /** Longitude. */
      lng?: number;
  }
  enum LocationType {
      VENUE = "VENUE",
      ONLINE = "ONLINE"
  }
  /** Physical address */
  interface Address extends AddressStreetOneOf {
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress;
      /** Main address line (usually street and number) as free text */
      addressLine1?: string | null;
      /** country code */
      country?: string | null;
      /** subdivision (usually state or region) code according to ISO 3166-2 */
      subdivision?: string | null;
      /** city name */
      city?: string | null;
      /** zip/postal code */
      postalCode?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, Floor */
      addressLine2?: string | null;
      /** A string containing the human-readable address of this location */
      formatted?: string | null;
      /** coordinates of the physical address */
      location?: AddressLocation;
  }
  /** @oneof */
  interface AddressStreetOneOf {
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress;
      /** Main address line (usually street and number) as free text */
      addressLine?: string | null;
  }
  interface StreetAddress {
      /** street number */
      number?: string;
      /** street name */
      name?: string;
      /**
       * apartment number
       * @internal
       */
      apt?: string;
  }
  interface AddressLocation {
      /** address latitude coordinates */
      latitude?: number | null;
      /** address longitude coordinates */
      longitude?: number | null;
  }
  interface Subdivision {
      /** subdivision short code */
      code?: string;
      /** subdivision full-name */
      name?: string;
      /**
       * subdivision level
       * @internal
       */
      type?: SubdivisionType;
      /**
       * free text description of subdivision type
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
  interface ScheduleConfig {
      /**
       * Defines event as TBD (To Be Determined) schedule.
       * When event time is not yet defined, TBD message is displayed instead of event start and end times.
       * `startDate`, `endDate` and `timeZoneId` are not required when schedule is TBD.
       */
      scheduleTbd?: boolean;
      /** TBD message. */
      scheduleTbdMessage?: string | null;
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      /** Whether end date is hidden in the formatted schedule. */
      endDateHidden?: boolean;
      /** Whether time zone is displayed in formatted schedule. */
      showTimeZone?: boolean;
      /** Event recurrences. */
      recurrences?: Recurrences;
  }
  interface Recurrences {
      /** Event occurrences. */
      occurrences?: Occurrence[];
      /**
       * Recurring event category ID.
       * @readonly
       */
      categoryId?: string | null;
      /**
       * Recurrence status.
       * @readonly
       */
      status?: Status;
  }
  interface Occurrence {
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      /** Whether time zone is displayed in formatted schedule. */
      showTimeZone?: boolean;
  }
  enum Status {
      /** Event occurs only once. */
      ONE_TIME = "ONE_TIME",
      /** Event is recurring. */
      RECURRING = "RECURRING",
      /** Marks the next upcoming occurrence of the recurring event. */
      RECURRING_NEXT = "RECURRING_NEXT",
      /** Marks the most recent ended occurrence of the recurring event. */
      RECURRING_LAST_ENDED = "RECURRING_LAST_ENDED",
      /** Marks the most recent canceled occurrence of the recurring event. */
      RECURRING_LAST_CANCELED = "RECURRING_LAST_CANCELED"
  }
  enum EventStatus {
      /** Event is public and scheduled to start */
      SCHEDULED = "SCHEDULED",
      /** Event has started */
      STARTED = "STARTED",
      /** Event has ended */
      ENDED = "ENDED",
      /** Event was canceled */
      CANCELED = "CANCELED",
      /** Event is not public and needs to be published */
      DRAFT = "DRAFT"
  }
  interface Event {
      /**
       * Event ID.
       * @readonly
       */
      _id?: string;
      /** Event location. */
      location?: Location;
      /** Event scheduling. */
      scheduling?: Scheduling;
      /** Event title. */
      title?: string;
      /** Event description. */
      description?: string;
      /** Rich-text content displayed in Wix UI - "About Event" section (HTML). */
      about?: string;
      /** Main event image. */
      mainImage?: string;
      /** Event slug URL (generated from event title). */
      slug?: string;
      /** ISO 639-1 language code of the event (used in content translations). */
      language?: string;
      /** Event creation timestamp. */
      created?: Date;
      /** Event modified timestamp. */
      modified?: Date;
      /** Event status. */
      status?: EventStatus;
      /** RSVP or ticketing registration details. */
      registration?: Registration;
      /** "Add to calendar" URLs. */
      calendarLinks?: CalendarLinks;
      /** Event page URL components. */
      eventPageUrl?: SiteUrl;
      /** Event registration form. */
      form?: Form;
      /** Event dashboard summary of RSVP / ticket sales. */
      dashboard?: Dashboard;
      /** Instance ID of the site where event is hosted. */
      instanceId?: string;
      /** Guest list configuration. */
      guestListConfig?: GuestListConfig;
      /** Event creator user ID. */
      userId?: string;
      /** Event discussion feed. For internal use. */
      feed?: Feed;
      /** Online conferencing details. */
      onlineConferencing?: OnlineConferencing;
      /** SEO settings. */
      seoSettings?: SeoSettings;
      /** Assigned contacts label key. */
      assignedContactsLabel?: string | null;
      /** Agenda details. */
      agenda?: Agenda;
      /** Categories this event is assigned to. */
      categories?: Category[];
      /** Visual settings for event. */
      eventDisplaySettings?: EventDisplaySettings;
      /**
       * @internal
       * @readonly
       */
      customizableTickets?: boolean | null;
      /**
       * Labelling related data.
       * @internal
       */
      labellingSettings?: LabellingSettings;
  }
  interface Scheduling {
      /** Schedule configuration. */
      config?: ScheduleConfig;
      /** Formatted schedule representation. */
      formatted?: string;
      /** Formatted start date of the event (empty for TBD schedules). */
      startDateFormatted?: string;
      /** Formatted start time of the event (empty for TBD schedules). */
      startTimeFormatted?: string;
      /** Formatted end date of the event (empty for TBD schedules or when end date is hidden). */
      endDateFormatted?: string;
      /** Formatted end time of the event (empty for TBD schedules or when end date is hidden). */
      endTimeFormatted?: string;
  }
  interface Registration {
      /** Event type. */
      type?: EventType;
      /** Event registration status. */
      status?: RegistrationStatus;
      /** RSVP collection details. */
      rsvpCollection?: RsvpCollection;
      /** Ticketing details. */
      ticketing?: Ticketing;
      /** External registration details. */
      external?: ExternalEvent;
      /** Types of users allowed to register. */
      restrictedTo?: VisitorType;
      /** Initial event type which was set when creating an event. */
      initialType?: EventType;
  }
  enum EventType {
      /** Type not available for this request fieldset */
      NA_EVENT_TYPE = "NA_EVENT_TYPE",
      /** Registration via RSVP */
      RSVP = "RSVP",
      /** Registration via ticket purchase */
      TICKETS = "TICKETS",
      /** External registration */
      EXTERNAL = "EXTERNAL",
      /** Registration not available */
      NO_REGISTRATION = "NO_REGISTRATION"
  }
  enum RegistrationStatus {
      /** Registration status is not applicable */
      NA_REGISTRATION_STATUS = "NA_REGISTRATION_STATUS",
      /** Registration to event is closed */
      CLOSED = "CLOSED",
      /** Registration to event is closed manually */
      CLOSED_MANUALLY = "CLOSED_MANUALLY",
      /** Registration is open via RSVP */
      OPEN_RSVP = "OPEN_RSVP",
      /** Registration to event waitlist is open via RSVP */
      OPEN_RSVP_WAITLIST = "OPEN_RSVP_WAITLIST",
      /** Registration is open via ticket purchase */
      OPEN_TICKETS = "OPEN_TICKETS",
      /** Registration is open via external URL */
      OPEN_EXTERNAL = "OPEN_EXTERNAL",
      /** Registration will be open via RSVP */
      SCHEDULED_RSVP = "SCHEDULED_RSVP"
  }
  interface RsvpCollection {
      /** RSVP collection configuration. */
      config?: RsvpCollectionConfig;
  }
  interface RsvpCollectionConfig {
      /** Defines the supported RSVP statuses. */
      rsvpStatusOptions?: RsvpStatusOptions;
      /**
       * Total guest limit available to register to the event.
       * Additional guests per RSVP are counted towards total guests.
       */
      limit?: number | null;
      /** Whether a waitlist is opened when total guest limit is reached, allowing guests to create RSVP with WAITING RSVP status. */
      waitlist?: boolean;
      /** Registration start timestamp. */
      startDate?: Date;
      /** Registration end timestamp. */
      endDate?: Date;
  }
  enum RsvpStatusOptions {
      /** Only YES RSVP status is available for RSVP registration */
      YES_ONLY = "YES_ONLY",
      /** YES and NO RSVP status options are available for the registration */
      YES_AND_NO = "YES_AND_NO"
  }
  interface Ticketing {
      /** Deprecated. */
      lowestPrice?: string | null;
      /** Deprecated. */
      highestPrice?: string | null;
      /** Currency used in event transactions. */
      currency?: string | null;
      /** Ticketing configuration. */
      config?: TicketingConfig;
      /**
       * Price of lowest priced ticket.
       * @readonly
       */
      lowestTicketPrice?: Money;
      /**
       * Price of highest priced ticket.
       * @readonly
       */
      highestTicketPrice?: Money;
      /**
       * Formatted price of lowest priced ticket.
       * @readonly
       */
      lowestTicketPriceFormatted?: string | null;
      /**
       * Formatted price of highest priced ticket.
       * @readonly
       */
      highestTicketPriceFormatted?: string | null;
      /**
       * Whether all tickets are sold for this event.
       * @readonly
       */
      soldOut?: boolean | null;
  }
  interface TicketingConfig {
      /** Whether the form must be filled out separately for each ticket. */
      guestAssignedTickets?: boolean;
      /** Tax configuration. */
      taxConfig?: TaxConfig;
      /** Limit of tickets that can be purchased per order, default 20. */
      ticketLimitPerOrder?: number;
      /**
       * App Id for external ticket stock management.
       * By default tickets stock is defined in TicketDefinition object.
       * If defined then limitation from TicketDefinition is ignored.
       * @internal
       */
      stockManagerAppId?: string | null;
      /** Duration for which the tickets being bought are reserved. */
      reservationDurationInMinutes?: number | null;
  }
  interface TaxConfig {
      /** Tax application settings. */
      type?: TaxType;
      /** Tax name. */
      name?: string | null;
      /** Tax rate (e.g.,`21.55`). */
      rate?: string | null;
      /** Applies taxes for donations, default true. */
      appliesToDonations?: boolean | null;
  }
  enum TaxType {
      /** Tax is included in the ticket price */
      INCLUDED = "INCLUDED",
      /** Tax is added to the order at the checkout */
      ADDED = "ADDED",
      /** Tax is added to the final total at the checkout */
      ADDED_AT_CHECKOUT = "ADDED_AT_CHECKOUT"
  }
  interface Money {
      /** *Deprecated:** Use `value` instead. */
      amount?: string;
      /** ISO 4217 format of the currency i.e. `USD`. */
      currency?: string;
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string | null;
  }
  interface ExternalEvent {
      /** External event registration URL. */
      registration?: string;
  }
  enum VisitorType {
      /** Site visitor (including member) */
      VISITOR = "VISITOR",
      /** Site member */
      MEMBER = "MEMBER",
      /** Site visitor or member */
      VISITOR_OR_MEMBER = "VISITOR_OR_MEMBER"
  }
  interface CalendarLinks {
      /** "Add to Google calendar" URL. */
      google?: string;
      /** "Download ICS calendar file" URL. */
      ics?: string;
  }
  /** Site URL components */
  interface SiteUrl {
      /**
       * Base URL. For premium sites, this will be the domain.
       * For free sites, this would be site URL (e.g `mysite.wixsite.com/mysite`)
       */
      base?: string;
      /** The path to that page - e.g `/my-events/weekly-meetup-2` */
      path?: string;
  }
  /**
   * The form defines which elements are rendered in the Wix UI during the registration process (RSVP or checkout).
   * It also contains customizable messages and labels.
   *
   *
   * A form is an ordered list of controls (blocks), which accept guest information into a field input.
   *
   * Each control contains one or more nested inputs. For example, `Name` control has two inputs:
   * - First Name
   * - Last Name
   *
   * By default, name and email controls are always required and are pinned to the top of the form.
   */
  interface Form {
      /** Nested fields as an ordered list. */
      controls?: InputControl[];
      /** Set of configured form messages. */
      messages?: FormMessages;
  }
  /**
   * A block of nested fields.
   * Used to aggregate similar inputs like First Name and Last Name.
   */
  interface InputControl {
      /** Field control type. */
      type?: InputControlType;
      /** Whether control is mandatory (such as name & email). When true, only label can be changed. */
      system?: boolean;
      /** Deprecated: Use `id`. */
      name?: string;
      /** Child inputs. */
      inputs?: Input[];
      /** Deprecated: use `inputs.label`. */
      label?: string;
      /** Field controls are sorted by this value in ascending order. */
      orderIndex?: number;
      /** Unique control ID. */
      _id?: string;
      /**
       * Whether input control is deleted.
       * @readonly
       */
      deleted?: boolean | null;
  }
  enum InputControlType {
      /** Single text value field. */
      INPUT = "INPUT",
      /** Single text value field. */
      TEXTAREA = "TEXTAREA",
      /** Single-choice field of predefined values. */
      DROPDOWN = "DROPDOWN",
      /** Single-choice field of predefined values. */
      RADIO = "RADIO",
      /** Multiple-choice field of predefined values. */
      CHECKBOX = "CHECKBOX",
      /** First and last name fields. */
      NAME = "NAME",
      /** Additional guests and respective guest names fields. */
      GUEST_CONTROL = "GUEST_CONTROL",
      /** Single-line address field. */
      ADDRESS_SHORT = "ADDRESS_SHORT",
      /** Full address field. */
      ADDRESS_FULL = "ADDRESS_FULL",
      /** Year, month and day fields. */
      DATE = "DATE"
  }
  /** An input of one or multiple text values */
  interface Input {
      /** Field name. */
      name?: string;
      /** Deprecated: use `ValueType.TEXT_ARRAY`. */
      array?: boolean;
      /** Main field label */
      label?: string;
      /** Additional labels for multi-valued fields such as address. */
      additionalLabels?: Record<string, string>;
      /** Predefined choice options for fields, such as dropdown. */
      options?: string[];
      /** Whether field is mandatory. */
      mandatory?: boolean;
      /** Maximum number of accepted characters (relevant for text fields). */
      maxLength?: number;
      /**
       * Type which determines field format.
       * Used to validate submitted response.
       */
      type?: ValueType;
      /**
       * A maximum accepted values for array input.
       * Only applicable for inputs of valueType: TEXT_ARRAY.
       */
      maxSize?: number | null;
      /**
       * Preselected option.
       * Currently only applicable for dropdown.
       */
      defaultOptionSelection?: OptionSelection;
      /**
       * Additional labels for multi-valued fields such as address.
       * @readonly
       */
      labels?: Label[];
  }
  enum ValueType {
      TEXT = "TEXT",
      NUMBER = "NUMBER",
      TEXT_ARRAY = "TEXT_ARRAY",
      DATE_TIME = "DATE_TIME",
      ADDRESS = "ADDRESS"
  }
  /**
   * Describes initially selected option when an input has multiple choices.
   * Defaults to first (0th) option if not configured.
   */
  interface OptionSelection extends OptionSelectionSelectedOptionOneOf {
      /** 0-based index from predefined `input.options` which is selected initially. */
      optionIndex?: number;
      /**
       * Placeholder hint describing expected choices (such as "Please select").
       * Considered an empty choice.
       */
      placeholderText?: string;
  }
  /** @oneof */
  interface OptionSelectionSelectedOptionOneOf {
      /** 0-based index from predefined `input.options` which is selected initially. */
      optionIndex?: number;
      /**
       * Placeholder hint describing expected choices (such as "Please select").
       * Considered an empty choice.
       */
      placeholderText?: string;
  }
  interface Label {
      /** Field name. */
      name?: string;
      /** Field label. */
      label?: string;
  }
  /**
   * Defines form messages shown in UI before, during, and after registration flow.
   * It enables configuration of form titles, response labels, "thank you" messages, and call-to-action texts.
   */
  interface FormMessages {
      /** RSVP form messages. */
      rsvp?: RsvpFormMessages;
      /** Checkout form messages. */
      checkout?: CheckoutFormMessages;
      /** Messages shown when event registration is closed. */
      registrationClosed?: RegistrationClosedMessages;
      /** Messages shown when event tickets are unavailable. */
      ticketsUnavailable?: TicketsUnavailableMessages;
  }
  interface RsvpFormMessages {
      /** Label text indicating RSVP `YES` response. */
      rsvpYesOption?: string;
      /** Label text indicating RSVP `NO` response. */
      rsvpNoOption?: string;
      /** Messages shown for RSVP = `YES`. */
      positiveMessages?: Positive;
      /** Messages shown for RSVP = `WAITING` (when event is full and waitlist is available). */
      waitlistMessages?: Positive;
      /** Messages shown for RSVP = `NO`. */
      negativeMessages?: Negative;
      /** "Submit form" call-to-action label text. */
      submitActionLabel?: string;
  }
  /** Confirmation messages shown after registration. */
  interface PositiveResponseConfirmation {
      /** Confirmation message title. */
      title?: string;
      /** Confirmation message text. */
      message?: string;
      /** "Add to calendar" call-to-action label text. */
      addToCalendarActionLabel?: string;
      /** "Share event" call-to-action label text. */
      shareActionLabel?: string;
  }
  /** Confirmation messages shown after registration. */
  interface NegativeResponseConfirmation {
      /** Confirmation message title. */
      title?: string;
      /** "Share event" call-to-action label text. */
      shareActionLabel?: string;
  }
  /** Set of messages shown during registration when RSVP response is positive. */
  interface Positive {
      /** Main form title for positive response. */
      title?: string;
      /** Confirmation messages shown after registration. */
      confirmation?: PositiveResponseConfirmation;
  }
  /** A set of messages shown during registration with negative response */
  interface Negative {
      /** Main form title for negative response. */
      title?: string;
      /** Confirmation messages shown after registration. */
      confirmation?: NegativeResponseConfirmation;
  }
  interface CheckoutFormMessages {
      /** Main form title for response. */
      title?: string;
      /** Submit form call-to-action label text. */
      submitActionLabel?: string;
      /** Confirmation messages shown after checkout. */
      confirmation?: ResponseConfirmation;
  }
  /** Confirmation messages shown after checkout. */
  interface ResponseConfirmation {
      /** Confirmation message title. */
      title?: string;
      /** Confirmation message text. */
      message?: string;
      /** "Download tickets" call-to-action label text. */
      downloadTicketsLabel?: string;
      /** "Add to calendar" call-to-action label text. */
      addToCalendarLabel?: string;
      /** "Share event" call-to-action label text. */
      shareEventLabel?: string;
  }
  interface RegistrationClosedMessages {
      /** Message shown when event registration is closed. */
      message?: string;
      /** "Explore other events" call-to-action label text. */
      exploreEventsActionLabel?: string;
  }
  interface TicketsUnavailableMessages {
      /** Message shown when event tickets are unavailable. */
      message?: string;
      /** "Explore other events" call-to-action label text. */
      exploreEventsActionLabel?: string;
  }
  interface Dashboard {
      /** Guest RSVP summary. */
      rsvpSummary?: RsvpSummary;
      /**
       * Summary of revenue and tickets sold.
       * (Archived orders are not included).
       */
      ticketingSummary?: TicketingSummary;
  }
  interface RsvpSummary {
      /** Total number of RSVPs. */
      total?: number;
      /** Number of RSVPs with status `YES`. */
      yes?: number;
      /** Number of RSVPs with status `NO`. */
      no?: number;
      /** Number of RSVPs in waitlist. */
      waitlist?: number;
  }
  interface TicketingSummary {
      /** Number of tickets sold. */
      tickets?: number;
      /**
       * Total revenue, excluding fees.
       * (taxes and payment provider fees are not deducted.)
       */
      revenue?: Money;
      /** Whether currency is locked and cannot be changed (generally occurs after the first order in the specified currency has been created). */
      currencyLocked?: boolean;
      /** Number of orders placed. */
      orders?: number;
      /** Total balance of confirmed transactions. */
      totalSales?: Money;
  }
  interface GuestListConfig {
      /** Whether members can see other members attending the event (defaults to true). */
      publicGuestList?: boolean;
  }
  interface Feed {
      /** Event discussion feed token. */
      token?: string;
  }
  interface OnlineConferencing {
      config?: OnlineConferencingConfig;
      session?: OnlineConferencingSession;
      /**
       * Configured conferencing provider name.
       * @internal
       * @readonly
       */
      providerName?: string;
  }
  interface OnlineConferencingConfig {
      /**
       * Whether online conferencing is enabled (not supported for TBD schedules).
       * When enabled, links to join conferencing are generated and provided to guests.
       */
      enabled?: boolean;
      /** Conferencing provider ID. */
      providerId?: string | null;
      /** Conference type */
      conferenceType?: ConferenceType;
  }
  enum ConferenceType {
      /** Everyone in the meeting can publish and subscribe video and audio. */
      MEETING = "MEETING",
      /** Guests can only subscribe to video and audio. */
      WEBINAR = "WEBINAR"
  }
  interface OnlineConferencingSession {
      /**
       * Link for event host to start the online conference session.
       * @readonly
       */
      hostLink?: string;
      /**
       * Link for guests to join the online conference session.
       * @readonly
       */
      guestLink?: string;
      /**
       * The password required to join online conferencing session (when relevant).
       * @readonly
       */
      password?: string | null;
      /**
       * Indicates that session was created successfully on providers side.
       * @readonly
       */
      sessionCreated?: boolean | null;
      /**
       * Unique session id
       * @readonly
       */
      sessionId?: string | null;
  }
  interface SeoSettings {
      /** URL slug */
      slug?: string;
      /** Advanced SEO data */
      advancedSeoData?: SeoSchema;
      /**
       * Hidden from SEO Site Map
       * @readonly
       */
      hidden?: boolean | null;
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
  interface Agenda {
      /** Whether the schedule is enabled for the event. */
      enabled?: boolean;
      /**
       * Agenda page URL.
       * @readonly
       */
      pageUrl?: SiteUrl;
  }
  interface Category {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category name. */
      name?: string;
      /**
       * Category creation timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Assigned events count. Deleted events are excluded.
       * @internal
       * @readonly
       */
      assignedEventsCount?: number | null;
      /**
       * Assigned and assigned draft event counts.
       * @readonly
       */
      counts?: CategoryCounts;
      /**
       * Category state. Default - MANUAL.
       * WIX_EVENTS.MANAGE_AUTO_CATEGORIES permission is required to use other states.
       * Field will be ignored on update requests.
       */
      states?: CategoryStateState[];
      /**
       * Optionally client defined external ID.
       * @internal
       */
      externalId?: string | null;
  }
  interface CategoryCounts {
      /** Assigned events count. Deleted events are excluded. */
      assignedEventsCount?: number | null;
      /** Assigned draft events count. */
      assignedDraftEventsCount?: number | null;
  }
  enum CategoryStateState {
      /** Created manually by the user. */
      MANUAL = "MANUAL",
      /** Created automatically. */
      AUTO = "AUTO",
      /** Created when publishing recurring events. */
      RECURRING_EVENT = "RECURRING_EVENT",
      /** Category is hidden. */
      HIDDEN = "HIDDEN",
      /** Category is used to store component events. */
      COMPONENT = "COMPONENT"
  }
  interface EventDisplaySettings {
      /** Whether event details button is hidden. Only available for events with no registration. */
      hideEventDetailsButton?: boolean | null;
  }
  interface LabellingSettings {
      /**
       * @internal
       * @readonly
       */
      assignedContactsLegacyLabelId?: string | null;
      /**
       * @internal
       * @readonly
       */
      assignedContactsLabelDeleted?: boolean | null;
  }
  interface EventUpdated {
      /** Event update timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: Location;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig;
      /** Event title. */
      title?: string;
      /** Whether schedule configuration was updated. */
      scheduleConfigUpdated?: boolean;
      /**
       * The set of properties which were updated. For example 'title' or 'location'
       * @internal
       */
      fields?: string[];
      /**
       * Whether event has opened new spots with this update.
       * @internal
       */
      newSpotsOpened?: boolean | null;
      /** Updated event */
      event?: Event;
  }
  interface SeatingPlanCategoriesSummaryUpdated {
      /** Seating plan id */
      seatingPlanId?: string;
      /** External seating plan id */
      externalSeatingPlanId?: string | null;
      /** Ticket counts by category */
      categories?: CategoryDetails[];
      /**
       * Summary revision.
       * @readonly
       */
      revision?: string | null;
  }
  interface CategoryDetails {
      /**
       * Seating plan id
       * @readonly
       */
      seatingPlanId?: string | null;
      /**
       * External seating plan id
       * @readonly
       */
      externalSeatingPlanId?: string | null;
      /**
       * External category id
       * @readonly
       */
      externalCategoryId?: string | null;
      /**
       * Total capacity in the category
       * @readonly
       */
      totalCapacity?: number | null;
      /**
       * Already reserved capacity
       * @readonly
       */
      reserved?: number | null;
  }
  interface MetaSiteSpecialEvent extends MetaSiteSpecialEventPayloadOneOf {
      /** Emitted on a meta site creation. */
      siteCreated?: SiteCreated;
      /** Emitted on a meta site transfer completion. */
      siteTransferred?: SiteTransferred;
      /** Emitted on a meta site deletion. */
      siteDeleted?: SiteDeleted;
      /** Emitted on a meta site restoration. */
      siteUndeleted?: SiteUndeleted;
      /** Emitted on the first* publish of the meta site (* switching from unpublished to published state). */
      sitePublished?: SitePublished;
      /** Emitted on a meta site unpublish. */
      siteUnpublished?: SiteUnpublished;
      /** Emitted when meta site is marked as template. */
      siteMarkedAsTemplate?: SiteMarkedAsTemplate;
      /** Emitted when meta site is marked as a WixSite. */
      siteMarkedAsWixSite?: SiteMarkedAsWixSite;
      /** Emitted when an application is provisioned (installed). */
      serviceProvisioned?: ServiceProvisioned;
      /** Emitted when an application is removed (uninstalled). */
      serviceRemoved?: ServiceRemoved;
      /** Emitted when meta site name (URL slug) is changed. */
      siteRenamedPayload?: SiteRenamed;
      /** Emitted when meta site was permanently deleted. */
      hardDeleted?: SiteHardDeleted;
      /** Emitted on a namespace change. */
      namespaceChanged?: NamespaceChanged;
      /** Emitted when Studio is attached. */
      studioAssigned?: StudioAssigned;
      /** Emitted when Studio is detached. */
      studioUnassigned?: StudioUnassigned;
      /** A meta site id. */
      metaSiteId?: string;
      /** A meta site version. Monotonically increasing. */
      version?: string;
      /** A timestamp of the event. */
      timestamp?: string;
      /** A list of "assets" (applications). The same as MetaSiteContext. */
      assets?: Asset[];
  }
  /** @oneof */
  interface MetaSiteSpecialEventPayloadOneOf {
      /** Emitted on a meta site creation. */
      siteCreated?: SiteCreated;
      /** Emitted on a meta site transfer completion. */
      siteTransferred?: SiteTransferred;
      /** Emitted on a meta site deletion. */
      siteDeleted?: SiteDeleted;
      /** Emitted on a meta site restoration. */
      siteUndeleted?: SiteUndeleted;
      /** Emitted on the first* publish of the meta site (* switching from unpublished to published state). */
      sitePublished?: SitePublished;
      /** Emitted on a meta site unpublish. */
      siteUnpublished?: SiteUnpublished;
      /** Emitted when meta site is marked as template. */
      siteMarkedAsTemplate?: SiteMarkedAsTemplate;
      /** Emitted when meta site is marked as a WixSite. */
      siteMarkedAsWixSite?: SiteMarkedAsWixSite;
      /** Emitted when an application is provisioned (installed). */
      serviceProvisioned?: ServiceProvisioned;
      /** Emitted when an application is removed (uninstalled). */
      serviceRemoved?: ServiceRemoved;
      /** Emitted when meta site name (URL slug) is changed. */
      siteRenamedPayload?: SiteRenamed;
      /** Emitted when meta site was permanently deleted. */
      hardDeleted?: SiteHardDeleted;
      /** Emitted on a namespace change. */
      namespaceChanged?: NamespaceChanged;
      /** Emitted when Studio is attached. */
      studioAssigned?: StudioAssigned;
      /** Emitted when Studio is detached. */
      studioUnassigned?: StudioUnassigned;
  }
  interface Asset {
      /** An application definition id (app_id in dev-center). For legacy reasons may be UUID or a string (from Java Enum). */
      appDefId?: string;
      /** An instance id. For legacy reasons may be UUID or a string. */
      instanceId?: string;
      /** An application state. */
      state?: State;
  }
  enum State {
      UNKNOWN = "UNKNOWN",
      ENABLED = "ENABLED",
      DISABLED = "DISABLED",
      PENDING = "PENDING",
      DEMO = "DEMO"
  }
  interface SiteCreated {
      /** A template identifier (empty if not created from a template). */
      originTemplateId?: string;
      /** An account id of the owner. */
      ownerId?: string;
      /** A context in which meta site was created. */
      context?: SiteCreatedContext;
      /**
       * A meta site id from which this site was created.
       *
       * In case of a creation from a template it's a template id.
       * In case of a site duplication ("Save As" in dashboard or duplicate in UM) it's an id of a source site.
       */
      originMetaSiteId?: string | null;
      /** A meta site name (URL slug). */
      siteName?: string;
      /** A namespace. */
      namespace?: Namespace;
  }
  enum SiteCreatedContext {
      /** A valid option, we don't expose all reasons why site might be created. */
      OTHER = "OTHER",
      /** A meta site was created from template. */
      FROM_TEMPLATE = "FROM_TEMPLATE",
      /** A meta site was created by copying of the transfferred meta site. */
      DUPLICATE_BY_SITE_TRANSFER = "DUPLICATE_BY_SITE_TRANSFER",
      /** A copy of existing meta site. */
      DUPLICATE = "DUPLICATE",
      /** A meta site was created as a transfferred site (copy of the original), old flow, should die soon. */
      OLD_SITE_TRANSFER = "OLD_SITE_TRANSFER",
      /** deprecated A meta site was created for Flash editor. */
      FLASH = "FLASH"
  }
  enum Namespace {
      UNKNOWN_NAMESPACE = "UNKNOWN_NAMESPACE",
      /** Default namespace for UGC sites. MetaSites with this namespace will be shown in a user's site list by default. */
      WIX = "WIX",
      /** ShoutOut stand alone product. These are siteless (no actual Wix site, no HtmlWeb). MetaSites with this namespace will *not* be shown in a user's site list by default. */
      SHOUT_OUT = "SHOUT_OUT",
      /** MetaSites created by the Albums product, they appear as part of the Albums app. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      ALBUMS = "ALBUMS",
      /** Part of the WixStores migration flow, a user tries to migrate and gets this site to view and if the user likes it then stores removes this namespace and deletes the old site with the old stores. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      WIX_STORES_TEST_DRIVE = "WIX_STORES_TEST_DRIVE",
      /** Hotels standalone (siteless). MetaSites with this namespace will *not* be shown in a user's site list by default. */
      HOTELS = "HOTELS",
      /** Clubs siteless MetaSites, a club without a wix website. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      CLUBS = "CLUBS",
      /** A partially created ADI website. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      ONBOARDING_DRAFT = "ONBOARDING_DRAFT",
      /** AppBuilder for AppStudio / shmite (c). MetaSites with this namespace will *not* be shown in a user's site list by default. */
      DEV_SITE = "DEV_SITE",
      /** LogoMaker websites offered to the user after logo purchase. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      LOGOS = "LOGOS",
      /** VideoMaker websites offered to the user after video purchase. MetaSites with this namespace will *not* be shown in a user's site list by default. */
      VIDEO_MAKER = "VIDEO_MAKER",
      /** MetaSites with this namespace will *not* be shown in a user's site list by default. */
      PARTNER_DASHBOARD = "PARTNER_DASHBOARD",
      /** MetaSites with this namespace will *not* be shown in a user's site list by default. */
      DEV_CENTER_COMPANY = "DEV_CENTER_COMPANY",
      /**
       * A draft created by HTML editor on open. Upon "first save" it will be moved to be of WIX domain.
       *
       * Meta site with this namespace will *not* be shown in a user's site list by default.
       */
      HTML_DRAFT = "HTML_DRAFT",
      /**
       * the user-journey for Fitness users who want to start from managing their business instead of designing their website.
       * Will be accessible from Site List and will not have a website app.
       * Once the user attaches a site, the site will become a regular wixsite.
       */
      SITELESS_BUSINESS = "SITELESS_BUSINESS",
      /** Belongs to "strategic products" company. Supports new product in the creator's economy space. */
      CREATOR_ECONOMY = "CREATOR_ECONOMY",
      /** It is to be used in the Business First efforts. */
      DASHBOARD_FIRST = "DASHBOARD_FIRST",
      /** Bookings business flow with no site. */
      ANYWHERE = "ANYWHERE",
      /** Namespace for Headless Backoffice with no editor */
      HEADLESS = "HEADLESS",
      /**
       * Namespace for master site that will exist in parent account that will be referenced by subaccounts
       * The site will be used for account level CSM feature for enterprise
       */
      ACCOUNT_MASTER_CMS = "ACCOUNT_MASTER_CMS",
      /** Rise.ai Siteless account management for Gift Cards and Store Credit. */
      RISE = "RISE",
      /**
       * As part of the branded app new funnel, users now can create a meta site that will be branded app first.
       * There's a blank site behind the scene but it's blank).
       * The Mobile company will be the owner of this namespace.
       */
      BRANDED_FIRST = "BRANDED_FIRST"
  }
  /** Site transferred to another user. */
  interface SiteTransferred {
      /** A previous owner id (user that transfers meta site). */
      oldOwnerId?: string;
      /** A new owner id (user that accepts meta site). */
      newOwnerId?: string;
  }
  /** Soft deletion of the meta site. Could be restored. */
  interface SiteDeleted {
      /** A deletion context. */
      deleteContext?: DeleteContext;
  }
  interface DeleteContext {
      /** When the meta site was deleted. */
      dateDeleted?: Date;
      /** A status. */
      deleteStatus?: DeleteStatus;
      /** A reason (flow). */
      deleteOrigin?: string;
      /** A service that deleted it. */
      initiatorId?: string | null;
  }
  enum DeleteStatus {
      UNKNOWN = "UNKNOWN",
      TRASH = "TRASH",
      DELETED = "DELETED",
      PENDING_PURGE = "PENDING_PURGE"
  }
  /** Restoration of the meta site. */
  interface SiteUndeleted {
  }
  /** First publish of a meta site. Or subsequent publish after unpublish. */
  interface SitePublished {
  }
  interface SiteUnpublished {
      /** A list of URLs previously associated with the meta site. */
      urls?: string[];
  }
  interface SiteMarkedAsTemplate {
  }
  interface SiteMarkedAsWixSite {
  }
  interface ServiceProvisioned {
      /** Either UUID or EmbeddedServiceType. */
      appDefId?: string;
      /** Not only UUID. Something here could be something weird. */
      instanceId?: string;
      /** An instance id from which this instance is originated. */
      originInstanceId?: string;
      /** A version. */
      version?: string | null;
  }
  interface ServiceRemoved {
      /** Either UUID or EmbeddedServiceType. */
      appDefId?: string;
      /** Not only UUID. Something here could be something weird. */
      instanceId?: string;
      /** A version. */
      version?: string | null;
  }
  /** Rename of the site. Meaning, free public url has been changed as well. */
  interface SiteRenamed {
      /** A new meta site name (URL slug). */
      newSiteName?: string;
      /** A previous meta site name (URL slug). */
      oldSiteName?: string;
  }
  /**
   * Hard deletion of the meta site.
   *
   * Could not be restored. Therefore it's desirable to cleanup data.
   */
  interface SiteHardDeleted {
      /** A deletion context. */
      deleteContext?: DeleteContext;
  }
  interface NamespaceChanged {
      /** A previous namespace. */
      oldNamespace?: Namespace;
      /** A new namespace. */
      newNamespace?: Namespace;
  }
  /** Assigned Studio editor */
  interface StudioAssigned {
  }
  /** Unassigned Studio editor */
  interface StudioUnassigned {
  }
  interface GetTicketDefinitionFromTrashBinRequest {
      /** Ticket definition ID. */
      ticketDefinitionId?: string;
      /** Requested fields. Not implemented. */
      fields?: Field[];
  }
  interface GetTicketDefinitionFromTrashBinResponse {
      /** The requested ticket definition. */
      ticketDefinition?: TicketDefinition;
  }
  interface ScheduleTimecapsuleTaskRequest {
      /** Definition ID. */
      _id?: string;
      /** Sale period. */
      salePeriod?: SalePeriod;
  }
  interface RescheduleTimecapsuleTaskRequest {
      /** Definition ID. */
      _id?: string;
      /** Sale period. */
      salePeriod?: SalePeriod;
  }
  interface CancelTimecapsuleTaskRequest {
      /** Definition ID. */
      _id?: string;
  }
  /**
   * > **Note:** This function replaces the deprecated `createTicketDefinition()` function. The deprecated function will continue to work until November 8, 2024, but it will not receive updates. To keep any existing code compatible with future changes, see the [migration instructions](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/createticketdefinition).
   *
   *
   * Creates a ticket definition.
   *
   *
   * It is allowed to create up to 100 definitions per event.
   * @param ticketDefinition - Ticket definition info.
   * @public
   * @requiredField ticketDefinition
   * @requiredField ticketDefinition.eventId
   * @requiredField ticketDefinition.feeType
   * @requiredField ticketDefinition.name
   * @requiredField ticketDefinition.pricingMethod
   * @param options - Optional fields.
   * @adminMethod
   * @returns Created ticket definition.
   */
  function createTicketDefinition(ticketDefinition: TicketDefinition, options?: CreateTicketDefinitionOptions): Promise<TicketDefinition>;
  interface CreateTicketDefinitionOptions {
      /**
       * Predefined sets of fields to return.
       * - `SALES_DETAILS`: Returns `salesDetails`.
       */
      fields?: Field[];
  }
  /**
   * > **Note:** This function replaces the deprecated `updateTicketDefinition()` function. The deprecated function will continue to work until November 8, 2024, but it will not receive updates. To keep any existing code compatible with future changes, see the [migration instructions](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/updateticketdefinition).
   *
   * Updates a ticket definition.
   *
   *
   * Each time the ticket definition is updated, `revision` increments by 1. The existing `revision` must be included when updating the ticket definition. This ensures you're working with the latest ticket definition and prevents unintended overwrites.
   * @param _id - Ticket definition ID.
   * @public
   * @requiredField _id
   * @requiredField ticketDefinition
   * @requiredField ticketDefinition.revision
   * @param options - Optional fields.
   * @param ticketDefinition - Ticket definition to update.
   * @adminMethod
   * @returns The updated ticket definition.
   */
  function updateTicketDefinition(_id: string | null, ticketDefinition: UpdateTicketDefinition, options?: UpdateTicketDefinitionOptions): Promise<TicketDefinition>;
  interface UpdateTicketDefinition {
      /**
       * Ticket definition ID.
       * @readonly
       */
      _id?: string | null;
      /** Event ID to which the ticket definition belongs. */
      eventId?: string | null;
      /**
       * Revision number, which increments by 1 each time the ticket definition is updated. To prevent conflicting changes, the existing revision must be used when updating a ticket definition.
       * @readonly
       */
      revision?: string | null;
      /**
       * Date and time when the ticket definition was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time when the ticket definition was updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Ticket definition name. */
      name?: string | null;
      /** Ticket definition description. */
      description?: string | null;
      /** Ticket definition policy. */
      policyText?: string | null;
      /** Whether this ticket definition is hidden to site visitors and can't be purchased. */
      hidden?: boolean;
      /**
       * Whether the ticket has a limited maximum quantity.
       * @readonly
       */
      limited?: boolean;
      /** The maximum number of tickets that can be sold for the event when first defining the event. If a seating map is defined after you created a ticket definition, this property is ignored and `actualLimit` is used instead. */
      initialLimit?: number | null;
      /**
       * The maximum number of tickets that can be sold for the event after adding a seating map to the event. If no seating map is defined, this property is the same as `initialLimit`.
       * @readonly
       */
      actualLimit?: number | null;
      /** Ticket pricing method. */
      pricingMethod?: PricingMethod;
      /**
       * Whether fee is included in the ticket price or customer pays it additionally at checkout. Possible values:
       * - `FEE_INCLUDED`: The fee is deducted from the ticket price for a seller. For example, if you're selling tickets for $10, then a service fee of $0.25 will be deducted from the price and you'll get $9.75.
       * - `FEE_ADDED_AT_CHECKOUT`: The fee is shown in addition to the ticket price at checkout and a guest pays the fee. For example, if you sell tickets for $10, a customer will see a service fee of $0.25 and will pay $10.25 in total.
       */
      feeType?: Type;
      /** Ticket sale period. */
      salePeriod?: SalePeriod;
      /**
       * Ticket sale status. Possible values:
       * - `SALE_SCHEDULED`: Tickets are not on sale yet.
       * - `SALE_STARTED`: Tickets are on sale.
       * - `SALE_ENDED`: Tickets are not on sale.
       * @readonly
       */
      saleStatus?: SaleStatusEnumStatus;
      /**
       * Ticket sales information. <br>
       * **Note:** This field is only returned when `SALES_DETAILS` fieldset is included in the request.
       */
      salesDetails?: SalesDetails;
      /**
       * For proxy.
       * @internal
       * @readonly
       */
      sortIndex?: number;
      /**
       * Number of tickets that can be purchased per checkout. <br>
       * **Note:** If the `actuaLimit` or `salesDetails.unsoldCount` field value is smaller than `limitPerCheckout`, then it overrides this field.
       * @readonly
       */
      limitPerCheckout?: number | null;
      /**
       * Event created timestamp in `yyyy-mm-ddThh:mm:sssZ` format.
       * @internal
       * @readonly
       */
      eventCreatedDate?: Date;
  }
  interface UpdateTicketDefinitionOptions {
      /**
       * List of exact fields to update. For example, if you define only `name`, all other fields are ignored.
       * @internal
       */
      mask?: string[];
      /**
       * Predefined sets of fields to return.
       * - `SALES_DETAILS`: Returns `salesDetails`.
       */
      fields?: Field[];
  }
  /**
   * > **Note:** This function replaces the deprecated `getTicketDefinition()` function. The deprecated function will continue to work until November 8, 2024, but it will not receive updates. To keep any existing code compatible with future changes, see the [migration instructions](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/getticketdefinition).
   *
   * Retrieves a ticket definition by ID.
   * @param ticketDefinitionId - Ticket definition ID.
   * @public
   * @requiredField ticketDefinitionId
   * @param options - Optional fields.
   * @adminMethod
   * @returns The requested ticket definition.
   */
  function getTicketDefinition(ticketDefinitionId: string, options?: GetTicketDefinitionOptions): Promise<TicketDefinition>;
  interface GetTicketDefinitionOptions {
      /**
       * Predefined sets of fields to return.
       * - `SALES_DETAILS`: Returns `salesDetails`.
       */
      fields?: Field[];
  }
  /**
   * > **Note:** This function replaces the deprecated `deleteTicketDefinition()` function. The deprecated function will continue to work until November 8, 2024, but it will not receive updates. To keep any existing code compatible with future changes, see the [migration instructions](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/deleteticketdefinition).
   *
   * Permanently deletes a ticket definition.
   * @param ticketDefinitionId - ID of the ticket definition to delete.
   * @public
   * @requiredField ticketDefinitionId
   * @adminMethod
   */
  function deleteTicketDefinition(ticketDefinitionId: string): Promise<void>;
  /**
   * Changes ticket definitions order in an event dashboard and the list of available tickets in the ticket picker.
   * > **Note:** It is possible to use both `beforeTicketDefinitionId` and `afterTicketDefinitionId` at the same time but only the last one defined will be executed.
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   * @requiredField options.ticketDefinitionId
   * @param options - Optional fields.
   * @adminMethod
   */
  function reorderTicketDefinitions(eventId: string, options?: ReorderTicketDefinitionsOptions): Promise<void>;
  interface ReorderTicketDefinitionsOptions extends ReorderTicketDefinitionsRequestReferenceDefinitionOneOf {
      /** Ticket definition ID. */
      ticketDefinitionId: string;
      /** Move the given `definitionId` before the referenced ticket definition. */
      beforeDefinitionId?: string;
      /** Move the given `definitionId` after the referenced ticket definition. */
      afterDefinitionId?: string;
  }
  /**
   * > **Note:** This function replaces the deprecated `listTicketDefinition()` and `queryTicketDefinitions` functions. The deprecated functions will continue to work until November 8, 2024, but it will not receive updates. To keep any existing code compatible with future changes, see the [migration instructions](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/queryticketdefinitions).
   *
   * Retrieves a list of ticket definitions, given the provided paging, filtering, and sorting.
   * Query Ticket Definitions runs with these defaults, which you can override:
   * - `createdDate` is sorted in `ASC` order
   * - `paging.limit` is `100`
   * - `paging.offset` is `0`
   * @param query - Query options. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details.
   * @public
   * @requiredField query
   * @param options - Optional fields.
   * @adminMethod
   */
  function queryTicketDefinitions(query: QueryV2, options?: QueryTicketDefinitionsOptions): Promise<QueryTicketDefinitionsResponse>;
  interface QueryTicketDefinitionsOptions {
      /**
       * Predefined sets of fields to return.
       * - `SALES_DETAILS`: Returns `salesDetails`.
       */
      fields?: Field[];
      /**
       * Consistent read.
       * @internal
       */
      consistentRead?: boolean | null;
  }
  /**
   * Retrieves a list of available (visible) ticket definitions. Differs from QueryTicketDefinitions by these points:
   * - only visible tickets are returned (not(`hidden`))
   * - required permission is less strict (allowed for site visitors)
   * - `salesDetails` always empty
   * @internal
   * @param options - Optional fields.
   */
  function queryAvailableTicketDefinitions(options?: QueryAvailableTicketDefinitionsOptions): TicketDefinitionsQueryBuilder;
  interface QueryAvailableTicketDefinitionsOptions {
      /**
       * Predefined sets of fields to return.
       * - `SALES_DETAILS`: Returns `salesDetails`.
       */
      fields?: Field[] | undefined;
  }
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface TicketDefinitionsQueryResult extends QueryCursorResult {
      items: TicketDefinition[];
      query: TicketDefinitionsQueryBuilder;
      next: () => Promise<TicketDefinitionsQueryResult>;
      prev: () => Promise<TicketDefinitionsQueryResult>;
  }
  interface TicketDefinitionsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      eq: (propertyName: '_id' | 'eventId' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'pricingMethod.fixedPrice.value' | 'pricingMethod.fixedPrice.currency' | 'pricingMethod.pricingType' | 'pricingMethod.free' | 'feeType' | 'saleStatus', value: any) => TicketDefinitionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ne: (propertyName: '_id' | 'eventId' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'pricingMethod.fixedPrice.value' | 'pricingMethod.fixedPrice.currency' | 'pricingMethod.pricingType' | 'pricingMethod.free' | 'feeType' | 'saleStatus', value: any) => TicketDefinitionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      ge: (propertyName: 'revision' | '_createdDate' | '_updatedDate', value: any) => TicketDefinitionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      gt: (propertyName: 'revision' | '_createdDate' | '_updatedDate', value: any) => TicketDefinitionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      le: (propertyName: 'revision' | '_createdDate' | '_updatedDate', value: any) => TicketDefinitionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       */
      lt: (propertyName: 'revision' | '_createdDate' | '_updatedDate', value: any) => TicketDefinitionsQueryBuilder;
      in: (propertyName: '_id' | 'eventId' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'pricingMethod.fixedPrice.value' | 'pricingMethod.fixedPrice.currency' | 'pricingMethod.pricingType' | 'pricingMethod.free' | 'feeType' | 'saleStatus', value: any) => TicketDefinitionsQueryBuilder;
      exists: (propertyName: '_id' | 'eventId' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'pricingMethod.fixedPrice.value' | 'pricingMethod.fixedPrice.currency' | 'pricingMethod.pricingType' | 'pricingMethod.free' | 'feeType' | 'saleStatus', value: boolean) => TicketDefinitionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      ascending: (...propertyNames: Array<'_id' | 'eventId' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'pricingMethod.fixedPrice.value' | 'pricingMethod.fixedPrice.currency' | 'pricingMethod.pricingType' | 'pricingMethod.free' | 'feeType' | 'saleStatus'>) => TicketDefinitionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments. */
      descending: (...propertyNames: Array<'_id' | 'eventId' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'pricingMethod.fixedPrice.value' | 'pricingMethod.fixedPrice.currency' | 'pricingMethod.pricingType' | 'pricingMethod.free' | 'feeType' | 'saleStatus'>) => TicketDefinitionsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object. */
      limit: (limit: number) => TicketDefinitionsQueryBuilder;
      /** @param cursor - A pointer to specific record */
      skipTo: (cursor: string) => TicketDefinitionsQueryBuilder;
      find: () => Promise<TicketDefinitionsQueryResult>;
  }
  /**
   * Counts ticket definitions by the `saleStatus` and `hidden` fields. <br> <br>
   * To learn about working with _query_ endpoints, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) and [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   * @internal
   * @param options - Optional fields.
   * @adminMethod
   */
  function countTicketDefinitions(options?: CountTicketDefinitionsOptions): Promise<CountTicketDefinitionsResponse>;
  interface CountTicketDefinitionsOptions {
      /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1" }`. */
      filter?: Record<string, any> | null;
      /**
       * Parameters to count ticket definitions by.
       *
       * - Max: 20 facets.
       */
      facet?: string[];
  }
  /**
   * Counts available ticket definitions. <br> <br>
   * To learn about working with _query_ endpoints, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) and [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   * @internal
   * @param options - Optional fields.
   */
  function countAvailableTicketDefinitions(options?: CountAvailableTicketDefinitionsOptions): Promise<CountAvailableTicketDefinitionsResponse>;
  interface CountAvailableTicketDefinitionsOptions {
      /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1" }`. */
      filter?: Record<string, any> | null;
  }
  /**
   * Deletes multiple ticket definitions.
   *
   * All ticket definitions that meet the specified `filter` criteria are deleted.
   * @param filter - Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1" }`. <br/> <br/> **Example:** <br/> `"filter" : { "eventId": "3d3d5c04-ece0-45a8-85f0-11a58edaa192" }`
   * @public
   * @requiredField filter
   * @adminMethod
   */
  function bulkDeleteTicketDefinitionsByFilter(filter: Record<string, any> | null): Promise<void>;
  /**
   * > **Note:** This function replaces the deprecated `changeCurrency()` function. The deprecated function will continue to work until November 8, 2024, but it will not receive updates. To keep any existing code compatible with future changes, see the [migration instructions](https://www.wix.com/velo/reference/wix-events-v2/ticketdefinitions/changecurrency).
   *
   * Changes ticket price currency per event.
   * @param eventId - Event ID.
   * @public
   * @requiredField eventId
   * @requiredField options
   * @requiredField options.currency
   * @param options - Optional fields.
   * @adminMethod
   */
  function changeCurrency(eventId: string, options: ChangeCurrencyOptions): Promise<void>;
  interface ChangeCurrencyOptions {
      /** Ticket price currency in 3-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
      currency: string;
  }
  
  type eventsV3TicketDefinition_universal_d_TicketDefinition = TicketDefinition;
  type eventsV3TicketDefinition_universal_d_PricingMethod = PricingMethod;
  type eventsV3TicketDefinition_universal_d_PricingMethodPriceOneOf = PricingMethodPriceOneOf;
  type eventsV3TicketDefinition_universal_d_CommonMoney = CommonMoney;
  type eventsV3TicketDefinition_universal_d_PricingOptions = PricingOptions;
  type eventsV3TicketDefinition_universal_d_OptionDetails = OptionDetails;
  type eventsV3TicketDefinition_universal_d_PricingTypeEnumType = PricingTypeEnumType;
  const eventsV3TicketDefinition_universal_d_PricingTypeEnumType: typeof PricingTypeEnumType;
  type eventsV3TicketDefinition_universal_d_Type = Type;
  const eventsV3TicketDefinition_universal_d_Type: typeof Type;
  type eventsV3TicketDefinition_universal_d_SalePeriod = SalePeriod;
  type eventsV3TicketDefinition_universal_d_SaleStatusEnumStatus = SaleStatusEnumStatus;
  const eventsV3TicketDefinition_universal_d_SaleStatusEnumStatus: typeof SaleStatusEnumStatus;
  type eventsV3TicketDefinition_universal_d_SalesDetails = SalesDetails;
  type eventsV3TicketDefinition_universal_d_InvalidateCache = InvalidateCache;
  type eventsV3TicketDefinition_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type eventsV3TicketDefinition_universal_d_App = App;
  type eventsV3TicketDefinition_universal_d_Page = Page;
  type eventsV3TicketDefinition_universal_d_URI = URI;
  type eventsV3TicketDefinition_universal_d_File = File;
  type eventsV3TicketDefinition_universal_d_GetTicketDefinitionSummaryRequest = GetTicketDefinitionSummaryRequest;
  type eventsV3TicketDefinition_universal_d_GetTicketDefinitionSummaryResponse = GetTicketDefinitionSummaryResponse;
  type eventsV3TicketDefinition_universal_d_TicketDefinitionSummary = TicketDefinitionSummary;
  type eventsV3TicketDefinition_universal_d_ListEventTicketingSummaryRequest = ListEventTicketingSummaryRequest;
  type eventsV3TicketDefinition_universal_d_ListEventTicketingSummaryResponse = ListEventTicketingSummaryResponse;
  type eventsV3TicketDefinition_universal_d_EventTicketingSummary = EventTicketingSummary;
  type eventsV3TicketDefinition_universal_d_DomainEvent = DomainEvent;
  type eventsV3TicketDefinition_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type eventsV3TicketDefinition_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type eventsV3TicketDefinition_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type eventsV3TicketDefinition_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type eventsV3TicketDefinition_universal_d_ActionEvent = ActionEvent;
  type eventsV3TicketDefinition_universal_d_Empty = Empty;
  type eventsV3TicketDefinition_universal_d_ReservationCreated = ReservationCreated;
  type eventsV3TicketDefinition_universal_d_ReservationStatus = ReservationStatus;
  const eventsV3TicketDefinition_universal_d_ReservationStatus: typeof ReservationStatus;
  type eventsV3TicketDefinition_universal_d_TicketQuantity = TicketQuantity;
  type eventsV3TicketDefinition_universal_d_ReservationCount = ReservationCount;
  type eventsV3TicketDefinition_universal_d_ReservationUpdated = ReservationUpdated;
  type eventsV3TicketDefinition_universal_d_EventDeleted = EventDeleted;
  type eventsV3TicketDefinition_universal_d_UpdateEventTicketingSummaryRequest = UpdateEventTicketingSummaryRequest;
  type eventsV3TicketDefinition_universal_d_MessageEnvelope = MessageEnvelope;
  type eventsV3TicketDefinition_universal_d_IdentificationData = IdentificationData;
  type eventsV3TicketDefinition_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type eventsV3TicketDefinition_universal_d_WebhookIdentityType = WebhookIdentityType;
  const eventsV3TicketDefinition_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  type eventsV3TicketDefinition_universal_d_CreateTicketDefinitionRequest = CreateTicketDefinitionRequest;
  type eventsV3TicketDefinition_universal_d_Field = Field;
  const eventsV3TicketDefinition_universal_d_Field: typeof Field;
  type eventsV3TicketDefinition_universal_d_CreateTicketDefinitionResponse = CreateTicketDefinitionResponse;
  type eventsV3TicketDefinition_universal_d_UpdateTicketDefinitionRequest = UpdateTicketDefinitionRequest;
  type eventsV3TicketDefinition_universal_d_UpdateTicketDefinitionResponse = UpdateTicketDefinitionResponse;
  type eventsV3TicketDefinition_universal_d_SalePeriodUpdated = SalePeriodUpdated;
  type eventsV3TicketDefinition_universal_d_GetTicketDefinitionRequest = GetTicketDefinitionRequest;
  type eventsV3TicketDefinition_universal_d_GetTicketDefinitionResponse = GetTicketDefinitionResponse;
  type eventsV3TicketDefinition_universal_d_DeleteTicketDefinitionRequest = DeleteTicketDefinitionRequest;
  type eventsV3TicketDefinition_universal_d_DeleteTicketDefinitionResponse = DeleteTicketDefinitionResponse;
  type eventsV3TicketDefinition_universal_d_ReorderTicketDefinitionsRequest = ReorderTicketDefinitionsRequest;
  type eventsV3TicketDefinition_universal_d_ReorderTicketDefinitionsRequestReferenceDefinitionOneOf = ReorderTicketDefinitionsRequestReferenceDefinitionOneOf;
  type eventsV3TicketDefinition_universal_d_ReorderTicketDefinitionsResponse = ReorderTicketDefinitionsResponse;
  type eventsV3TicketDefinition_universal_d_UpdateTicketDefinitionSortIndexRequest = UpdateTicketDefinitionSortIndexRequest;
  type eventsV3TicketDefinition_universal_d_UpdateTicketDefinitionSortIndexResponse = UpdateTicketDefinitionSortIndexResponse;
  type eventsV3TicketDefinition_universal_d_QueryTicketDefinitionsRequest = QueryTicketDefinitionsRequest;
  type eventsV3TicketDefinition_universal_d_QueryV2 = QueryV2;
  type eventsV3TicketDefinition_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type eventsV3TicketDefinition_universal_d_Sorting = Sorting;
  type eventsV3TicketDefinition_universal_d_SortOrder = SortOrder;
  const eventsV3TicketDefinition_universal_d_SortOrder: typeof SortOrder;
  type eventsV3TicketDefinition_universal_d_Paging = Paging;
  type eventsV3TicketDefinition_universal_d_CursorPaging = CursorPaging;
  type eventsV3TicketDefinition_universal_d_QueryTicketDefinitionsResponse = QueryTicketDefinitionsResponse;
  type eventsV3TicketDefinition_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type eventsV3TicketDefinition_universal_d_Cursors = Cursors;
  type eventsV3TicketDefinition_universal_d_QueryAvailableTicketDefinitionsRequest = QueryAvailableTicketDefinitionsRequest;
  type eventsV3TicketDefinition_universal_d_QueryAvailableTicketDefinitionsResponse = QueryAvailableTicketDefinitionsResponse;
  type eventsV3TicketDefinition_universal_d_CountTicketDefinitionsRequest = CountTicketDefinitionsRequest;
  type eventsV3TicketDefinition_universal_d_CountTicketDefinitionsResponse = CountTicketDefinitionsResponse;
  type eventsV3TicketDefinition_universal_d_FacetCounts = FacetCounts;
  type eventsV3TicketDefinition_universal_d_CountAvailableTicketDefinitionsRequest = CountAvailableTicketDefinitionsRequest;
  type eventsV3TicketDefinition_universal_d_CountAvailableTicketDefinitionsResponse = CountAvailableTicketDefinitionsResponse;
  type eventsV3TicketDefinition_universal_d_BulkDeleteTicketDefinitionsByFilterRequest = BulkDeleteTicketDefinitionsByFilterRequest;
  type eventsV3TicketDefinition_universal_d_BulkDeleteTicketDefinitionsByFilterResponse = BulkDeleteTicketDefinitionsByFilterResponse;
  type eventsV3TicketDefinition_universal_d_ChangeCurrencyRequest = ChangeCurrencyRequest;
  type eventsV3TicketDefinition_universal_d_ChangeCurrencyResponse = ChangeCurrencyResponse;
  type eventsV3TicketDefinition_universal_d_BulkCopyTicketDefinitionsByEventIdRequest = BulkCopyTicketDefinitionsByEventIdRequest;
  type eventsV3TicketDefinition_universal_d_BulkCopyTicketDefinitionsByEventIdResponse = BulkCopyTicketDefinitionsByEventIdResponse;
  type eventsV3TicketDefinition_universal_d_CopiedTicketDefinition = CopiedTicketDefinition;
  type eventsV3TicketDefinition_universal_d_EventCanceled = EventCanceled;
  type eventsV3TicketDefinition_universal_d_EventEnded = EventEnded;
  type eventsV3TicketDefinition_universal_d_EventCreated = EventCreated;
  type eventsV3TicketDefinition_universal_d_Location = Location;
  type eventsV3TicketDefinition_universal_d_MapCoordinates = MapCoordinates;
  type eventsV3TicketDefinition_universal_d_LocationType = LocationType;
  const eventsV3TicketDefinition_universal_d_LocationType: typeof LocationType;
  type eventsV3TicketDefinition_universal_d_Address = Address;
  type eventsV3TicketDefinition_universal_d_AddressStreetOneOf = AddressStreetOneOf;
  type eventsV3TicketDefinition_universal_d_StreetAddress = StreetAddress;
  type eventsV3TicketDefinition_universal_d_AddressLocation = AddressLocation;
  type eventsV3TicketDefinition_universal_d_Subdivision = Subdivision;
  type eventsV3TicketDefinition_universal_d_SubdivisionType = SubdivisionType;
  const eventsV3TicketDefinition_universal_d_SubdivisionType: typeof SubdivisionType;
  type eventsV3TicketDefinition_universal_d_ScheduleConfig = ScheduleConfig;
  type eventsV3TicketDefinition_universal_d_Recurrences = Recurrences;
  type eventsV3TicketDefinition_universal_d_Occurrence = Occurrence;
  type eventsV3TicketDefinition_universal_d_Status = Status;
  const eventsV3TicketDefinition_universal_d_Status: typeof Status;
  type eventsV3TicketDefinition_universal_d_EventStatus = EventStatus;
  const eventsV3TicketDefinition_universal_d_EventStatus: typeof EventStatus;
  type eventsV3TicketDefinition_universal_d_Event = Event;
  type eventsV3TicketDefinition_universal_d_Scheduling = Scheduling;
  type eventsV3TicketDefinition_universal_d_Registration = Registration;
  type eventsV3TicketDefinition_universal_d_EventType = EventType;
  const eventsV3TicketDefinition_universal_d_EventType: typeof EventType;
  type eventsV3TicketDefinition_universal_d_RegistrationStatus = RegistrationStatus;
  const eventsV3TicketDefinition_universal_d_RegistrationStatus: typeof RegistrationStatus;
  type eventsV3TicketDefinition_universal_d_RsvpCollection = RsvpCollection;
  type eventsV3TicketDefinition_universal_d_RsvpCollectionConfig = RsvpCollectionConfig;
  type eventsV3TicketDefinition_universal_d_RsvpStatusOptions = RsvpStatusOptions;
  const eventsV3TicketDefinition_universal_d_RsvpStatusOptions: typeof RsvpStatusOptions;
  type eventsV3TicketDefinition_universal_d_Ticketing = Ticketing;
  type eventsV3TicketDefinition_universal_d_TicketingConfig = TicketingConfig;
  type eventsV3TicketDefinition_universal_d_TaxConfig = TaxConfig;
  type eventsV3TicketDefinition_universal_d_TaxType = TaxType;
  const eventsV3TicketDefinition_universal_d_TaxType: typeof TaxType;
  type eventsV3TicketDefinition_universal_d_Money = Money;
  type eventsV3TicketDefinition_universal_d_ExternalEvent = ExternalEvent;
  type eventsV3TicketDefinition_universal_d_VisitorType = VisitorType;
  const eventsV3TicketDefinition_universal_d_VisitorType: typeof VisitorType;
  type eventsV3TicketDefinition_universal_d_CalendarLinks = CalendarLinks;
  type eventsV3TicketDefinition_universal_d_SiteUrl = SiteUrl;
  type eventsV3TicketDefinition_universal_d_Form = Form;
  type eventsV3TicketDefinition_universal_d_InputControl = InputControl;
  type eventsV3TicketDefinition_universal_d_InputControlType = InputControlType;
  const eventsV3TicketDefinition_universal_d_InputControlType: typeof InputControlType;
  type eventsV3TicketDefinition_universal_d_Input = Input;
  type eventsV3TicketDefinition_universal_d_ValueType = ValueType;
  const eventsV3TicketDefinition_universal_d_ValueType: typeof ValueType;
  type eventsV3TicketDefinition_universal_d_OptionSelection = OptionSelection;
  type eventsV3TicketDefinition_universal_d_OptionSelectionSelectedOptionOneOf = OptionSelectionSelectedOptionOneOf;
  type eventsV3TicketDefinition_universal_d_Label = Label;
  type eventsV3TicketDefinition_universal_d_FormMessages = FormMessages;
  type eventsV3TicketDefinition_universal_d_RsvpFormMessages = RsvpFormMessages;
  type eventsV3TicketDefinition_universal_d_PositiveResponseConfirmation = PositiveResponseConfirmation;
  type eventsV3TicketDefinition_universal_d_NegativeResponseConfirmation = NegativeResponseConfirmation;
  type eventsV3TicketDefinition_universal_d_Positive = Positive;
  type eventsV3TicketDefinition_universal_d_Negative = Negative;
  type eventsV3TicketDefinition_universal_d_CheckoutFormMessages = CheckoutFormMessages;
  type eventsV3TicketDefinition_universal_d_ResponseConfirmation = ResponseConfirmation;
  type eventsV3TicketDefinition_universal_d_RegistrationClosedMessages = RegistrationClosedMessages;
  type eventsV3TicketDefinition_universal_d_TicketsUnavailableMessages = TicketsUnavailableMessages;
  type eventsV3TicketDefinition_universal_d_Dashboard = Dashboard;
  type eventsV3TicketDefinition_universal_d_RsvpSummary = RsvpSummary;
  type eventsV3TicketDefinition_universal_d_TicketingSummary = TicketingSummary;
  type eventsV3TicketDefinition_universal_d_GuestListConfig = GuestListConfig;
  type eventsV3TicketDefinition_universal_d_Feed = Feed;
  type eventsV3TicketDefinition_universal_d_OnlineConferencing = OnlineConferencing;
  type eventsV3TicketDefinition_universal_d_OnlineConferencingConfig = OnlineConferencingConfig;
  type eventsV3TicketDefinition_universal_d_ConferenceType = ConferenceType;
  const eventsV3TicketDefinition_universal_d_ConferenceType: typeof ConferenceType;
  type eventsV3TicketDefinition_universal_d_OnlineConferencingSession = OnlineConferencingSession;
  type eventsV3TicketDefinition_universal_d_SeoSettings = SeoSettings;
  type eventsV3TicketDefinition_universal_d_SeoSchema = SeoSchema;
  type eventsV3TicketDefinition_universal_d_Keyword = Keyword;
  type eventsV3TicketDefinition_universal_d_Tag = Tag;
  type eventsV3TicketDefinition_universal_d_Settings = Settings;
  type eventsV3TicketDefinition_universal_d_Agenda = Agenda;
  type eventsV3TicketDefinition_universal_d_Category = Category;
  type eventsV3TicketDefinition_universal_d_CategoryCounts = CategoryCounts;
  type eventsV3TicketDefinition_universal_d_CategoryStateState = CategoryStateState;
  const eventsV3TicketDefinition_universal_d_CategoryStateState: typeof CategoryStateState;
  type eventsV3TicketDefinition_universal_d_EventDisplaySettings = EventDisplaySettings;
  type eventsV3TicketDefinition_universal_d_LabellingSettings = LabellingSettings;
  type eventsV3TicketDefinition_universal_d_EventUpdated = EventUpdated;
  type eventsV3TicketDefinition_universal_d_SeatingPlanCategoriesSummaryUpdated = SeatingPlanCategoriesSummaryUpdated;
  type eventsV3TicketDefinition_universal_d_CategoryDetails = CategoryDetails;
  type eventsV3TicketDefinition_universal_d_MetaSiteSpecialEvent = MetaSiteSpecialEvent;
  type eventsV3TicketDefinition_universal_d_MetaSiteSpecialEventPayloadOneOf = MetaSiteSpecialEventPayloadOneOf;
  type eventsV3TicketDefinition_universal_d_Asset = Asset;
  type eventsV3TicketDefinition_universal_d_State = State;
  const eventsV3TicketDefinition_universal_d_State: typeof State;
  type eventsV3TicketDefinition_universal_d_SiteCreated = SiteCreated;
  type eventsV3TicketDefinition_universal_d_SiteCreatedContext = SiteCreatedContext;
  const eventsV3TicketDefinition_universal_d_SiteCreatedContext: typeof SiteCreatedContext;
  type eventsV3TicketDefinition_universal_d_Namespace = Namespace;
  const eventsV3TicketDefinition_universal_d_Namespace: typeof Namespace;
  type eventsV3TicketDefinition_universal_d_SiteTransferred = SiteTransferred;
  type eventsV3TicketDefinition_universal_d_SiteDeleted = SiteDeleted;
  type eventsV3TicketDefinition_universal_d_DeleteContext = DeleteContext;
  type eventsV3TicketDefinition_universal_d_DeleteStatus = DeleteStatus;
  const eventsV3TicketDefinition_universal_d_DeleteStatus: typeof DeleteStatus;
  type eventsV3TicketDefinition_universal_d_SiteUndeleted = SiteUndeleted;
  type eventsV3TicketDefinition_universal_d_SitePublished = SitePublished;
  type eventsV3TicketDefinition_universal_d_SiteUnpublished = SiteUnpublished;
  type eventsV3TicketDefinition_universal_d_SiteMarkedAsTemplate = SiteMarkedAsTemplate;
  type eventsV3TicketDefinition_universal_d_SiteMarkedAsWixSite = SiteMarkedAsWixSite;
  type eventsV3TicketDefinition_universal_d_ServiceProvisioned = ServiceProvisioned;
  type eventsV3TicketDefinition_universal_d_ServiceRemoved = ServiceRemoved;
  type eventsV3TicketDefinition_universal_d_SiteRenamed = SiteRenamed;
  type eventsV3TicketDefinition_universal_d_SiteHardDeleted = SiteHardDeleted;
  type eventsV3TicketDefinition_universal_d_NamespaceChanged = NamespaceChanged;
  type eventsV3TicketDefinition_universal_d_StudioAssigned = StudioAssigned;
  type eventsV3TicketDefinition_universal_d_StudioUnassigned = StudioUnassigned;
  type eventsV3TicketDefinition_universal_d_GetTicketDefinitionFromTrashBinRequest = GetTicketDefinitionFromTrashBinRequest;
  type eventsV3TicketDefinition_universal_d_GetTicketDefinitionFromTrashBinResponse = GetTicketDefinitionFromTrashBinResponse;
  type eventsV3TicketDefinition_universal_d_ScheduleTimecapsuleTaskRequest = ScheduleTimecapsuleTaskRequest;
  type eventsV3TicketDefinition_universal_d_RescheduleTimecapsuleTaskRequest = RescheduleTimecapsuleTaskRequest;
  type eventsV3TicketDefinition_universal_d_CancelTimecapsuleTaskRequest = CancelTimecapsuleTaskRequest;
  const eventsV3TicketDefinition_universal_d_createTicketDefinition: typeof createTicketDefinition;
  type eventsV3TicketDefinition_universal_d_CreateTicketDefinitionOptions = CreateTicketDefinitionOptions;
  const eventsV3TicketDefinition_universal_d_updateTicketDefinition: typeof updateTicketDefinition;
  type eventsV3TicketDefinition_universal_d_UpdateTicketDefinition = UpdateTicketDefinition;
  type eventsV3TicketDefinition_universal_d_UpdateTicketDefinitionOptions = UpdateTicketDefinitionOptions;
  const eventsV3TicketDefinition_universal_d_getTicketDefinition: typeof getTicketDefinition;
  type eventsV3TicketDefinition_universal_d_GetTicketDefinitionOptions = GetTicketDefinitionOptions;
  const eventsV3TicketDefinition_universal_d_deleteTicketDefinition: typeof deleteTicketDefinition;
  const eventsV3TicketDefinition_universal_d_reorderTicketDefinitions: typeof reorderTicketDefinitions;
  type eventsV3TicketDefinition_universal_d_ReorderTicketDefinitionsOptions = ReorderTicketDefinitionsOptions;
  const eventsV3TicketDefinition_universal_d_queryTicketDefinitions: typeof queryTicketDefinitions;
  type eventsV3TicketDefinition_universal_d_QueryTicketDefinitionsOptions = QueryTicketDefinitionsOptions;
  const eventsV3TicketDefinition_universal_d_queryAvailableTicketDefinitions: typeof queryAvailableTicketDefinitions;
  type eventsV3TicketDefinition_universal_d_QueryAvailableTicketDefinitionsOptions = QueryAvailableTicketDefinitionsOptions;
  type eventsV3TicketDefinition_universal_d_TicketDefinitionsQueryResult = TicketDefinitionsQueryResult;
  type eventsV3TicketDefinition_universal_d_TicketDefinitionsQueryBuilder = TicketDefinitionsQueryBuilder;
  const eventsV3TicketDefinition_universal_d_countTicketDefinitions: typeof countTicketDefinitions;
  type eventsV3TicketDefinition_universal_d_CountTicketDefinitionsOptions = CountTicketDefinitionsOptions;
  const eventsV3TicketDefinition_universal_d_countAvailableTicketDefinitions: typeof countAvailableTicketDefinitions;
  type eventsV3TicketDefinition_universal_d_CountAvailableTicketDefinitionsOptions = CountAvailableTicketDefinitionsOptions;
  const eventsV3TicketDefinition_universal_d_bulkDeleteTicketDefinitionsByFilter: typeof bulkDeleteTicketDefinitionsByFilter;
  const eventsV3TicketDefinition_universal_d_changeCurrency: typeof changeCurrency;
  type eventsV3TicketDefinition_universal_d_ChangeCurrencyOptions = ChangeCurrencyOptions;
  namespace eventsV3TicketDefinition_universal_d {
    export {
      eventsV3TicketDefinition_universal_d_TicketDefinition as TicketDefinition,
      eventsV3TicketDefinition_universal_d_PricingMethod as PricingMethod,
      eventsV3TicketDefinition_universal_d_PricingMethodPriceOneOf as PricingMethodPriceOneOf,
      eventsV3TicketDefinition_universal_d_CommonMoney as CommonMoney,
      eventsV3TicketDefinition_universal_d_PricingOptions as PricingOptions,
      eventsV3TicketDefinition_universal_d_OptionDetails as OptionDetails,
      eventsV3TicketDefinition_universal_d_PricingTypeEnumType as PricingTypeEnumType,
      eventsV3TicketDefinition_universal_d_Type as Type,
      eventsV3TicketDefinition_universal_d_SalePeriod as SalePeriod,
      eventsV3TicketDefinition_universal_d_SaleStatusEnumStatus as SaleStatusEnumStatus,
      eventsV3TicketDefinition_universal_d_SalesDetails as SalesDetails,
      eventsV3TicketDefinition_universal_d_InvalidateCache as InvalidateCache,
      eventsV3TicketDefinition_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      eventsV3TicketDefinition_universal_d_App as App,
      eventsV3TicketDefinition_universal_d_Page as Page,
      eventsV3TicketDefinition_universal_d_URI as URI,
      eventsV3TicketDefinition_universal_d_File as File,
      eventsV3TicketDefinition_universal_d_GetTicketDefinitionSummaryRequest as GetTicketDefinitionSummaryRequest,
      eventsV3TicketDefinition_universal_d_GetTicketDefinitionSummaryResponse as GetTicketDefinitionSummaryResponse,
      eventsV3TicketDefinition_universal_d_TicketDefinitionSummary as TicketDefinitionSummary,
      eventsV3TicketDefinition_universal_d_ListEventTicketingSummaryRequest as ListEventTicketingSummaryRequest,
      eventsV3TicketDefinition_universal_d_ListEventTicketingSummaryResponse as ListEventTicketingSummaryResponse,
      eventsV3TicketDefinition_universal_d_EventTicketingSummary as EventTicketingSummary,
      eventsV3TicketDefinition_universal_d_DomainEvent as DomainEvent,
      eventsV3TicketDefinition_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      eventsV3TicketDefinition_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      eventsV3TicketDefinition_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      eventsV3TicketDefinition_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      eventsV3TicketDefinition_universal_d_ActionEvent as ActionEvent,
      eventsV3TicketDefinition_universal_d_Empty as Empty,
      eventsV3TicketDefinition_universal_d_ReservationCreated as ReservationCreated,
      eventsV3TicketDefinition_universal_d_ReservationStatus as ReservationStatus,
      eventsV3TicketDefinition_universal_d_TicketQuantity as TicketQuantity,
      eventsV3TicketDefinition_universal_d_ReservationCount as ReservationCount,
      eventsV3TicketDefinition_universal_d_ReservationUpdated as ReservationUpdated,
      eventsV3TicketDefinition_universal_d_EventDeleted as EventDeleted,
      eventsV3TicketDefinition_universal_d_UpdateEventTicketingSummaryRequest as UpdateEventTicketingSummaryRequest,
      eventsV3TicketDefinition_universal_d_MessageEnvelope as MessageEnvelope,
      eventsV3TicketDefinition_universal_d_IdentificationData as IdentificationData,
      eventsV3TicketDefinition_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      eventsV3TicketDefinition_universal_d_WebhookIdentityType as WebhookIdentityType,
      eventsV3TicketDefinition_universal_d_CreateTicketDefinitionRequest as CreateTicketDefinitionRequest,
      eventsV3TicketDefinition_universal_d_Field as Field,
      eventsV3TicketDefinition_universal_d_CreateTicketDefinitionResponse as CreateTicketDefinitionResponse,
      eventsV3TicketDefinition_universal_d_UpdateTicketDefinitionRequest as UpdateTicketDefinitionRequest,
      eventsV3TicketDefinition_universal_d_UpdateTicketDefinitionResponse as UpdateTicketDefinitionResponse,
      eventsV3TicketDefinition_universal_d_SalePeriodUpdated as SalePeriodUpdated,
      eventsV3TicketDefinition_universal_d_GetTicketDefinitionRequest as GetTicketDefinitionRequest,
      eventsV3TicketDefinition_universal_d_GetTicketDefinitionResponse as GetTicketDefinitionResponse,
      eventsV3TicketDefinition_universal_d_DeleteTicketDefinitionRequest as DeleteTicketDefinitionRequest,
      eventsV3TicketDefinition_universal_d_DeleteTicketDefinitionResponse as DeleteTicketDefinitionResponse,
      eventsV3TicketDefinition_universal_d_ReorderTicketDefinitionsRequest as ReorderTicketDefinitionsRequest,
      eventsV3TicketDefinition_universal_d_ReorderTicketDefinitionsRequestReferenceDefinitionOneOf as ReorderTicketDefinitionsRequestReferenceDefinitionOneOf,
      eventsV3TicketDefinition_universal_d_ReorderTicketDefinitionsResponse as ReorderTicketDefinitionsResponse,
      eventsV3TicketDefinition_universal_d_UpdateTicketDefinitionSortIndexRequest as UpdateTicketDefinitionSortIndexRequest,
      eventsV3TicketDefinition_universal_d_UpdateTicketDefinitionSortIndexResponse as UpdateTicketDefinitionSortIndexResponse,
      eventsV3TicketDefinition_universal_d_QueryTicketDefinitionsRequest as QueryTicketDefinitionsRequest,
      eventsV3TicketDefinition_universal_d_QueryV2 as QueryV2,
      eventsV3TicketDefinition_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      eventsV3TicketDefinition_universal_d_Sorting as Sorting,
      eventsV3TicketDefinition_universal_d_SortOrder as SortOrder,
      eventsV3TicketDefinition_universal_d_Paging as Paging,
      eventsV3TicketDefinition_universal_d_CursorPaging as CursorPaging,
      eventsV3TicketDefinition_universal_d_QueryTicketDefinitionsResponse as QueryTicketDefinitionsResponse,
      eventsV3TicketDefinition_universal_d_PagingMetadataV2 as PagingMetadataV2,
      eventsV3TicketDefinition_universal_d_Cursors as Cursors,
      eventsV3TicketDefinition_universal_d_QueryAvailableTicketDefinitionsRequest as QueryAvailableTicketDefinitionsRequest,
      eventsV3TicketDefinition_universal_d_QueryAvailableTicketDefinitionsResponse as QueryAvailableTicketDefinitionsResponse,
      eventsV3TicketDefinition_universal_d_CountTicketDefinitionsRequest as CountTicketDefinitionsRequest,
      eventsV3TicketDefinition_universal_d_CountTicketDefinitionsResponse as CountTicketDefinitionsResponse,
      eventsV3TicketDefinition_universal_d_FacetCounts as FacetCounts,
      eventsV3TicketDefinition_universal_d_CountAvailableTicketDefinitionsRequest as CountAvailableTicketDefinitionsRequest,
      eventsV3TicketDefinition_universal_d_CountAvailableTicketDefinitionsResponse as CountAvailableTicketDefinitionsResponse,
      eventsV3TicketDefinition_universal_d_BulkDeleteTicketDefinitionsByFilterRequest as BulkDeleteTicketDefinitionsByFilterRequest,
      eventsV3TicketDefinition_universal_d_BulkDeleteTicketDefinitionsByFilterResponse as BulkDeleteTicketDefinitionsByFilterResponse,
      eventsV3TicketDefinition_universal_d_ChangeCurrencyRequest as ChangeCurrencyRequest,
      eventsV3TicketDefinition_universal_d_ChangeCurrencyResponse as ChangeCurrencyResponse,
      eventsV3TicketDefinition_universal_d_BulkCopyTicketDefinitionsByEventIdRequest as BulkCopyTicketDefinitionsByEventIdRequest,
      eventsV3TicketDefinition_universal_d_BulkCopyTicketDefinitionsByEventIdResponse as BulkCopyTicketDefinitionsByEventIdResponse,
      eventsV3TicketDefinition_universal_d_CopiedTicketDefinition as CopiedTicketDefinition,
      eventsV3TicketDefinition_universal_d_EventCanceled as EventCanceled,
      eventsV3TicketDefinition_universal_d_EventEnded as EventEnded,
      eventsV3TicketDefinition_universal_d_EventCreated as EventCreated,
      eventsV3TicketDefinition_universal_d_Location as Location,
      eventsV3TicketDefinition_universal_d_MapCoordinates as MapCoordinates,
      eventsV3TicketDefinition_universal_d_LocationType as LocationType,
      eventsV3TicketDefinition_universal_d_Address as Address,
      eventsV3TicketDefinition_universal_d_AddressStreetOneOf as AddressStreetOneOf,
      eventsV3TicketDefinition_universal_d_StreetAddress as StreetAddress,
      eventsV3TicketDefinition_universal_d_AddressLocation as AddressLocation,
      eventsV3TicketDefinition_universal_d_Subdivision as Subdivision,
      eventsV3TicketDefinition_universal_d_SubdivisionType as SubdivisionType,
      eventsV3TicketDefinition_universal_d_ScheduleConfig as ScheduleConfig,
      eventsV3TicketDefinition_universal_d_Recurrences as Recurrences,
      eventsV3TicketDefinition_universal_d_Occurrence as Occurrence,
      eventsV3TicketDefinition_universal_d_Status as Status,
      eventsV3TicketDefinition_universal_d_EventStatus as EventStatus,
      eventsV3TicketDefinition_universal_d_Event as Event,
      eventsV3TicketDefinition_universal_d_Scheduling as Scheduling,
      eventsV3TicketDefinition_universal_d_Registration as Registration,
      eventsV3TicketDefinition_universal_d_EventType as EventType,
      eventsV3TicketDefinition_universal_d_RegistrationStatus as RegistrationStatus,
      eventsV3TicketDefinition_universal_d_RsvpCollection as RsvpCollection,
      eventsV3TicketDefinition_universal_d_RsvpCollectionConfig as RsvpCollectionConfig,
      eventsV3TicketDefinition_universal_d_RsvpStatusOptions as RsvpStatusOptions,
      eventsV3TicketDefinition_universal_d_Ticketing as Ticketing,
      eventsV3TicketDefinition_universal_d_TicketingConfig as TicketingConfig,
      eventsV3TicketDefinition_universal_d_TaxConfig as TaxConfig,
      eventsV3TicketDefinition_universal_d_TaxType as TaxType,
      eventsV3TicketDefinition_universal_d_Money as Money,
      eventsV3TicketDefinition_universal_d_ExternalEvent as ExternalEvent,
      eventsV3TicketDefinition_universal_d_VisitorType as VisitorType,
      eventsV3TicketDefinition_universal_d_CalendarLinks as CalendarLinks,
      eventsV3TicketDefinition_universal_d_SiteUrl as SiteUrl,
      eventsV3TicketDefinition_universal_d_Form as Form,
      eventsV3TicketDefinition_universal_d_InputControl as InputControl,
      eventsV3TicketDefinition_universal_d_InputControlType as InputControlType,
      eventsV3TicketDefinition_universal_d_Input as Input,
      eventsV3TicketDefinition_universal_d_ValueType as ValueType,
      eventsV3TicketDefinition_universal_d_OptionSelection as OptionSelection,
      eventsV3TicketDefinition_universal_d_OptionSelectionSelectedOptionOneOf as OptionSelectionSelectedOptionOneOf,
      eventsV3TicketDefinition_universal_d_Label as Label,
      eventsV3TicketDefinition_universal_d_FormMessages as FormMessages,
      eventsV3TicketDefinition_universal_d_RsvpFormMessages as RsvpFormMessages,
      eventsV3TicketDefinition_universal_d_PositiveResponseConfirmation as PositiveResponseConfirmation,
      eventsV3TicketDefinition_universal_d_NegativeResponseConfirmation as NegativeResponseConfirmation,
      eventsV3TicketDefinition_universal_d_Positive as Positive,
      eventsV3TicketDefinition_universal_d_Negative as Negative,
      eventsV3TicketDefinition_universal_d_CheckoutFormMessages as CheckoutFormMessages,
      eventsV3TicketDefinition_universal_d_ResponseConfirmation as ResponseConfirmation,
      eventsV3TicketDefinition_universal_d_RegistrationClosedMessages as RegistrationClosedMessages,
      eventsV3TicketDefinition_universal_d_TicketsUnavailableMessages as TicketsUnavailableMessages,
      eventsV3TicketDefinition_universal_d_Dashboard as Dashboard,
      eventsV3TicketDefinition_universal_d_RsvpSummary as RsvpSummary,
      eventsV3TicketDefinition_universal_d_TicketingSummary as TicketingSummary,
      eventsV3TicketDefinition_universal_d_GuestListConfig as GuestListConfig,
      eventsV3TicketDefinition_universal_d_Feed as Feed,
      eventsV3TicketDefinition_universal_d_OnlineConferencing as OnlineConferencing,
      eventsV3TicketDefinition_universal_d_OnlineConferencingConfig as OnlineConferencingConfig,
      eventsV3TicketDefinition_universal_d_ConferenceType as ConferenceType,
      eventsV3TicketDefinition_universal_d_OnlineConferencingSession as OnlineConferencingSession,
      eventsV3TicketDefinition_universal_d_SeoSettings as SeoSettings,
      eventsV3TicketDefinition_universal_d_SeoSchema as SeoSchema,
      eventsV3TicketDefinition_universal_d_Keyword as Keyword,
      eventsV3TicketDefinition_universal_d_Tag as Tag,
      eventsV3TicketDefinition_universal_d_Settings as Settings,
      eventsV3TicketDefinition_universal_d_Agenda as Agenda,
      eventsV3TicketDefinition_universal_d_Category as Category,
      eventsV3TicketDefinition_universal_d_CategoryCounts as CategoryCounts,
      eventsV3TicketDefinition_universal_d_CategoryStateState as CategoryStateState,
      eventsV3TicketDefinition_universal_d_EventDisplaySettings as EventDisplaySettings,
      eventsV3TicketDefinition_universal_d_LabellingSettings as LabellingSettings,
      eventsV3TicketDefinition_universal_d_EventUpdated as EventUpdated,
      eventsV3TicketDefinition_universal_d_SeatingPlanCategoriesSummaryUpdated as SeatingPlanCategoriesSummaryUpdated,
      eventsV3TicketDefinition_universal_d_CategoryDetails as CategoryDetails,
      eventsV3TicketDefinition_universal_d_MetaSiteSpecialEvent as MetaSiteSpecialEvent,
      eventsV3TicketDefinition_universal_d_MetaSiteSpecialEventPayloadOneOf as MetaSiteSpecialEventPayloadOneOf,
      eventsV3TicketDefinition_universal_d_Asset as Asset,
      eventsV3TicketDefinition_universal_d_State as State,
      eventsV3TicketDefinition_universal_d_SiteCreated as SiteCreated,
      eventsV3TicketDefinition_universal_d_SiteCreatedContext as SiteCreatedContext,
      eventsV3TicketDefinition_universal_d_Namespace as Namespace,
      eventsV3TicketDefinition_universal_d_SiteTransferred as SiteTransferred,
      eventsV3TicketDefinition_universal_d_SiteDeleted as SiteDeleted,
      eventsV3TicketDefinition_universal_d_DeleteContext as DeleteContext,
      eventsV3TicketDefinition_universal_d_DeleteStatus as DeleteStatus,
      eventsV3TicketDefinition_universal_d_SiteUndeleted as SiteUndeleted,
      eventsV3TicketDefinition_universal_d_SitePublished as SitePublished,
      eventsV3TicketDefinition_universal_d_SiteUnpublished as SiteUnpublished,
      eventsV3TicketDefinition_universal_d_SiteMarkedAsTemplate as SiteMarkedAsTemplate,
      eventsV3TicketDefinition_universal_d_SiteMarkedAsWixSite as SiteMarkedAsWixSite,
      eventsV3TicketDefinition_universal_d_ServiceProvisioned as ServiceProvisioned,
      eventsV3TicketDefinition_universal_d_ServiceRemoved as ServiceRemoved,
      eventsV3TicketDefinition_universal_d_SiteRenamed as SiteRenamed,
      eventsV3TicketDefinition_universal_d_SiteHardDeleted as SiteHardDeleted,
      eventsV3TicketDefinition_universal_d_NamespaceChanged as NamespaceChanged,
      eventsV3TicketDefinition_universal_d_StudioAssigned as StudioAssigned,
      eventsV3TicketDefinition_universal_d_StudioUnassigned as StudioUnassigned,
      eventsV3TicketDefinition_universal_d_GetTicketDefinitionFromTrashBinRequest as GetTicketDefinitionFromTrashBinRequest,
      eventsV3TicketDefinition_universal_d_GetTicketDefinitionFromTrashBinResponse as GetTicketDefinitionFromTrashBinResponse,
      eventsV3TicketDefinition_universal_d_ScheduleTimecapsuleTaskRequest as ScheduleTimecapsuleTaskRequest,
      eventsV3TicketDefinition_universal_d_RescheduleTimecapsuleTaskRequest as RescheduleTimecapsuleTaskRequest,
      eventsV3TicketDefinition_universal_d_CancelTimecapsuleTaskRequest as CancelTimecapsuleTaskRequest,
      eventsV3TicketDefinition_universal_d_createTicketDefinition as createTicketDefinition,
      eventsV3TicketDefinition_universal_d_CreateTicketDefinitionOptions as CreateTicketDefinitionOptions,
      eventsV3TicketDefinition_universal_d_updateTicketDefinition as updateTicketDefinition,
      eventsV3TicketDefinition_universal_d_UpdateTicketDefinition as UpdateTicketDefinition,
      eventsV3TicketDefinition_universal_d_UpdateTicketDefinitionOptions as UpdateTicketDefinitionOptions,
      eventsV3TicketDefinition_universal_d_getTicketDefinition as getTicketDefinition,
      eventsV3TicketDefinition_universal_d_GetTicketDefinitionOptions as GetTicketDefinitionOptions,
      eventsV3TicketDefinition_universal_d_deleteTicketDefinition as deleteTicketDefinition,
      eventsV3TicketDefinition_universal_d_reorderTicketDefinitions as reorderTicketDefinitions,
      eventsV3TicketDefinition_universal_d_ReorderTicketDefinitionsOptions as ReorderTicketDefinitionsOptions,
      eventsV3TicketDefinition_universal_d_queryTicketDefinitions as queryTicketDefinitions,
      eventsV3TicketDefinition_universal_d_QueryTicketDefinitionsOptions as QueryTicketDefinitionsOptions,
      eventsV3TicketDefinition_universal_d_queryAvailableTicketDefinitions as queryAvailableTicketDefinitions,
      eventsV3TicketDefinition_universal_d_QueryAvailableTicketDefinitionsOptions as QueryAvailableTicketDefinitionsOptions,
      eventsV3TicketDefinition_universal_d_TicketDefinitionsQueryResult as TicketDefinitionsQueryResult,
      eventsV3TicketDefinition_universal_d_TicketDefinitionsQueryBuilder as TicketDefinitionsQueryBuilder,
      eventsV3TicketDefinition_universal_d_countTicketDefinitions as countTicketDefinitions,
      eventsV3TicketDefinition_universal_d_CountTicketDefinitionsOptions as CountTicketDefinitionsOptions,
      eventsV3TicketDefinition_universal_d_countAvailableTicketDefinitions as countAvailableTicketDefinitions,
      eventsV3TicketDefinition_universal_d_CountAvailableTicketDefinitionsOptions as CountAvailableTicketDefinitionsOptions,
      eventsV3TicketDefinition_universal_d_bulkDeleteTicketDefinitionsByFilter as bulkDeleteTicketDefinitionsByFilter,
      eventsV3TicketDefinition_universal_d_changeCurrency as changeCurrency,
      eventsV3TicketDefinition_universal_d_ChangeCurrencyOptions as ChangeCurrencyOptions,
    };
  }
  
  export { eventsV1Category_universal_d as categories, eventsV1Form_universal_d as forms, eventsGuestsV1Guest_universal_d as guests, eventsV1Order_universal_d as orders, eventsV2Policy_universal_d as policies, eventsV1Rsvp_universal_d as rsvp, eventsScheduleV1ScheduleItemSchedule_universal_d as schedule, eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d as scheduleBookmarks, eventsV1TicketDefinition_universal_d as ticketDefinitions, eventsV3TicketDefinition_universal_d as ticketDefinitionsV2, eventsV1Ticket_universal_d as tickets, eventsV3Event_universal_d as wixEventsV2 };
}
