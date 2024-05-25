declare module "wix-events.v3" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
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
       * Date and time when the ticket definition was created in `yyyy-mm-ddThh:mm:sssZ` format.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time of the ticket definition's latest update in `yyyy-mm-ddThh:mm:sssZ` format.
       * @readonly
       */
      _updatedDate?: Date;
      name?: string | null;
      description?: string | null;
      policyText?: string | null;
      /** Whether this ticket definition is hidden to customers and cannot be purchased. */
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
      /** Whether fee is included in the ticket price or customer pays it additionally at checkout. <br> <br> `FEE_INCLUDED`: The fee is deducted from the ticket price for a seller. For example, if you're selling tickets for $10, then a service fee of $0.25 will be deducted from the price and you'll get $9.75 <br> <br> `FEE_ADDED_AT_CHECKOUT`: The fee is shown in addition to the ticket price at checkout and a guest pays the fee. For example, if you sell tickets for $10, a customer will see a service fee of $0.25 and will pay $10.25 in total. */
      feeType?: Type;
      /** Ticket sale period. */
      salePeriod?: SalePeriod;
      /**
       * Ticket sale status. <br> <br> `SALE_SCHEDULED`: Tickets are not on sale yet. <br> <br> `SALE_STARTED`: Tickets are on sale. <br> <br> `SALE_ENDED`: Tickets are not on sale.
       * @readonly
       */
      saleStatus?: SaleStatusEnumStatus;
      /** Ticket sales information. */
      salesDetails?: SalesDetails;
      /**
       * For proxy.
       * @internal
       * @readonly
       */
      sortIndex?: number;
      /**
       * Limit of tickets that can be purchased per checkout.
       * Takes the smaller value between event ticket_limit_per_order and actual_limit values.
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
      fixedPrice?: Money;
      /** Minimum price guests must pay for a ticket. The price can be updated to a higher amount by a guest during the checkout. */
      guestPrice?: Money;
      /** Sets of various ticket prices. For example, you can charge different prices for children and adults. */
      pricingOptions?: PricingOptions;
      /**
       * Ticket price type. <br> <br> `STANDARD`: All money goes to a seller. Applies to all ticket pricing methods except for `guestPrice`. <br> <br> `DONATION`: All collected money is a donation. This pricing type is automatically assigned when the `guestPrice` pricing method is selected.
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
      fixedPrice?: Money;
      /** Minimum price guests must pay for a ticket. The price can be updated to a higher amount by a guest during the checkout. */
      guestPrice?: Money;
      /** Sets of various ticket prices. For example, you can charge different prices for children and adults. */
      pricingOptions?: PricingOptions;
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface Money {
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
      price?: Money;
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
      /** Ticket sale start timestamp in `yyyy-mm-ddThh:mm:sssZ` format. */
      startDate?: Date;
      /** Ticket sale end timestamp in `yyyy-mm-ddThh:mm:sssZ` format. */
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
      lowestTicketPrice?: Money;
      /**
       * Price of highest priced ticket.
       * @readonly
       */
      highestTicketPrice?: Money;
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
  interface CreateTicketDefinitionRequest {
      /** Ticket definition info. */
      ticketDefinition: TicketDefinition;
      /** Requested fields. */
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
       * List of exact fields to update. For example, if you define only the `name`, all other fields are ignored.
       * @internal
       */
      mask?: string[];
      /** Requested fields. */
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
      /** Requested fields. */
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
  interface BulkDeleteTicketDefinitionsByFilterRequest {
      /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1" }`. <br/> <br/> **Example:** <br/> `"filter" : { "eventId": "3d3d5c04-ece0-45a8-85f0-11a58edaa192" }` */
      filter: Record<string, any> | null;
  }
  interface BulkDeleteTicketDefinitionsByFilterResponse {
  }
  interface ChangeCurrencyRequest {
      /** Event ID. */
      eventId: string;
      /** Event currency, in 3-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
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
  }
  interface SeatingPlanSummaryUpdated {
      /** Seating plan id */
      seatingPlanId?: string;
      /** External seating plan id */
      externalSeatingPlanId?: string | null;
  }
  interface SeatingPlanCategoriesSummaryUpdated {
      /** Seating plan id */
      seatingPlanId?: string;
      /** External seating plan id */
      externalSeatingPlanId?: string | null;
      /** Ticket counts by category */
      categories?: CategoryDetails[];
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
      siteCreated?: SiteCreated;
      siteTransferred?: SiteTransferred;
      siteDeleted?: SiteDeleted;
      siteUndeleted?: SiteUndeleted;
      sitePublished?: SitePublished;
      siteUnpublished?: SiteUnpublished;
      siteMarkedAsTemplate?: SiteMarkedAsTemplate;
      siteMarkedAsWixSite?: SiteMarkedAsWixSite;
      serviceProvisioned?: ServiceProvisioned;
      serviceRemoved?: ServiceRemoved;
      siteRenamedPayload?: SiteRenamed;
      hardDeleted?: SiteHardDeleted;
      namespaceChanged?: NamespaceChanged;
      studioAssigned?: StudioAssigned;
      studioUnassigned?: StudioUnassigned;
      metaSiteId?: string;
      version?: string;
      timestamp?: string;
      assets?: Asset[];
  }
  /** @oneof */
  interface MetaSiteSpecialEventPayloadOneOf {
      siteCreated?: SiteCreated;
      siteTransferred?: SiteTransferred;
      siteDeleted?: SiteDeleted;
      siteUndeleted?: SiteUndeleted;
      sitePublished?: SitePublished;
      siteUnpublished?: SiteUnpublished;
      siteMarkedAsTemplate?: SiteMarkedAsTemplate;
      siteMarkedAsWixSite?: SiteMarkedAsWixSite;
      serviceProvisioned?: ServiceProvisioned;
      serviceRemoved?: ServiceRemoved;
      siteRenamedPayload?: SiteRenamed;
      hardDeleted?: SiteHardDeleted;
      namespaceChanged?: NamespaceChanged;
      studioAssigned?: StudioAssigned;
      studioUnassigned?: StudioUnassigned;
  }
  interface Asset {
      appDefId?: string;
      instanceId?: string;
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
      originTemplateId?: string;
      ownerId?: string;
      context?: SiteCreatedContext;
      /**
       * A meta site id from which this site was created.
       *
       * In case of a creation from a template it's a template id.
       * In case of a site duplication ("Save As" in dashboard or duplicate in UM) it's an id of a source site.
       */
      originMetaSiteId?: string | null;
      siteName?: string;
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
      deleteContext?: DeleteContext;
  }
  interface DeleteContext {
      dateDeleted?: Date;
      deleteStatus?: DeleteStatus;
      deleteOrigin?: string;
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
      originInstanceId?: string;
      version?: string | null;
  }
  interface ServiceRemoved {
      appDefId?: string;
      instanceId?: string;
      version?: string | null;
  }
  /** Rename of the site. Meaning, free public url has been changed as well. */
  interface SiteRenamed {
      newSiteName?: string;
      oldSiteName?: string;
  }
  /**
   * Hard deletion of the meta site.
   *
   * Could not be restored. Therefore it's desirable to cleanup data.
   */
  interface SiteHardDeleted {
      deleteContext?: DeleteContext;
  }
  interface NamespaceChanged {
      oldNamespace?: Namespace;
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
  /**
   * Creates a ticket definition. Allowed to create up to 100 definitions per event.
   * @param ticketDefinition - Ticket definition info.
   * @public
   * @documentationMaturity preview
   * @requiredField ticketDefinition
   * @requiredField ticketDefinition.eventId
   * @requiredField ticketDefinition.feeType
   * @requiredField ticketDefinition.name
   * @requiredField ticketDefinition.pricingMethod
   * @adminMethod
   * @returns Created ticket definition.
   */
  function createTicketDefinition(ticketDefinition: TicketDefinition, options?: CreateTicketDefinitionOptions): Promise<TicketDefinition>;
  interface CreateTicketDefinitionOptions {
      /** Requested fields. */
      fields?: Field[];
  }
  /**
   * Updates a ticket definition.
   * Each time the ticket definition is updated, `revision` increments by 1. The existing `revision` must be included when updating the ticket definition. This ensures you're working with the latest ticket definition and prevents unintended overwrites.
   * @param _id - Ticket definition ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField ticketDefinition
   * @requiredField ticketDefinition.revision
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
       * Date and time when the ticket definition was created in `yyyy-mm-ddThh:mm:sssZ` format.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time of the ticket definition's latest update in `yyyy-mm-ddThh:mm:sssZ` format.
       * @readonly
       */
      _updatedDate?: Date;
      name?: string | null;
      description?: string | null;
      policyText?: string | null;
      /** Whether this ticket definition is hidden to customers and cannot be purchased. */
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
      /** Whether fee is included in the ticket price or customer pays it additionally at checkout. <br> <br> `FEE_INCLUDED`: The fee is deducted from the ticket price for a seller. For example, if you're selling tickets for $10, then a service fee of $0.25 will be deducted from the price and you'll get $9.75 <br> <br> `FEE_ADDED_AT_CHECKOUT`: The fee is shown in addition to the ticket price at checkout and a guest pays the fee. For example, if you sell tickets for $10, a customer will see a service fee of $0.25 and will pay $10.25 in total. */
      feeType?: Type;
      /** Ticket sale period. */
      salePeriod?: SalePeriod;
      /**
       * Ticket sale status. <br> <br> `SALE_SCHEDULED`: Tickets are not on sale yet. <br> <br> `SALE_STARTED`: Tickets are on sale. <br> <br> `SALE_ENDED`: Tickets are not on sale.
       * @readonly
       */
      saleStatus?: SaleStatusEnumStatus;
      /** Ticket sales information. */
      salesDetails?: SalesDetails;
      /**
       * For proxy.
       * @internal
       * @readonly
       */
      sortIndex?: number;
      /**
       * Limit of tickets that can be purchased per checkout.
       * Takes the smaller value between event ticket_limit_per_order and actual_limit values.
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
       * List of exact fields to update. For example, if you define only the `name`, all other fields are ignored.
       * @internal
       */
      mask?: string[];
      /** Requested fields. */
      fields?: Field[];
  }
  /**
   * Retrieves a ticket definition.
   * @param ticketDefinitionId - Ticket definition ID.
   * @public
   * @documentationMaturity preview
   * @requiredField ticketDefinitionId
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
   * Permanently deletes a ticket definition.
   * @param ticketDefinitionId - ID of the ticket definition to delete.
   * @public
   * @documentationMaturity preview
   * @requiredField ticketDefinitionId
   * @adminMethod
   */
  function deleteTicketDefinition(ticketDefinitionId: string): Promise<void>;
  /**
   * Changes ticket definitions order in an event dashboard and the list of available tickets in the ticket picker.
   * > **Note:** It is possible to use both `beforeTicketDefinitionId` and `afterTicketDefinitionId` at the same time but only the last one defined will be executed.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @requiredField options.ticketDefinitionId
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
   * Retrieves a list of ticket definitions, given the provided paging, filtering, and sorting.
   * Query Ticket Definitions runs with these defaults, which you can override:
   * - `createdDate` is sorted in `ASC` order
   * - `paging.limit` is `100`
   * - `paging.offset` is `0`
   * For field support for filters and sorting, see [Ticket Definitions: Supported Filters and Sorting](https://dev.wix.com/api/rest/wix-events/ticket-definitions-v3/filter-and-sort).
   * To learn about working with _Query_ endpoints, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language), [Sorting and Paging](https://dev.wix.com/api/rest/getting-started/pagination), and [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   * @param query - Query options. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details.
   * @public
   * @documentationMaturity preview
   * @requiredField query
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
   * @documentationMaturity preview
   */
  function queryAvailableTicketDefinitions(options?: QueryAvailableTicketDefinitionsOptions): TicketDefinitionsQueryBuilder;
  interface QueryAvailableTicketDefinitionsOptions {
      /** Requested fields. */
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
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'eventId' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'pricingMethod.fixedPrice.value' | 'pricingMethod.fixedPrice.currency' | 'pricingMethod.pricingType' | 'pricingMethod.free' | 'feeType' | 'saleStatus', value: any) => TicketDefinitionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'eventId' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'pricingMethod.fixedPrice.value' | 'pricingMethod.fixedPrice.currency' | 'pricingMethod.pricingType' | 'pricingMethod.free' | 'feeType' | 'saleStatus', value: any) => TicketDefinitionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: 'revision' | '_createdDate' | '_updatedDate', value: any) => TicketDefinitionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: 'revision' | '_createdDate' | '_updatedDate', value: any) => TicketDefinitionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: 'revision' | '_createdDate' | '_updatedDate', value: any) => TicketDefinitionsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: 'revision' | '_createdDate' | '_updatedDate', value: any) => TicketDefinitionsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'eventId' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'pricingMethod.fixedPrice.value' | 'pricingMethod.fixedPrice.currency' | 'pricingMethod.pricingType' | 'pricingMethod.free' | 'feeType' | 'saleStatus', value: any) => TicketDefinitionsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id' | 'eventId' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'pricingMethod.fixedPrice.value' | 'pricingMethod.fixedPrice.currency' | 'pricingMethod.pricingType' | 'pricingMethod.free' | 'feeType' | 'saleStatus', value: boolean) => TicketDefinitionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'eventId' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'pricingMethod.fixedPrice.value' | 'pricingMethod.fixedPrice.currency' | 'pricingMethod.pricingType' | 'pricingMethod.free' | 'feeType' | 'saleStatus'>) => TicketDefinitionsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'eventId' | 'revision' | '_createdDate' | '_updatedDate' | 'name' | 'description' | 'pricingMethod.fixedPrice.value' | 'pricingMethod.fixedPrice.currency' | 'pricingMethod.pricingType' | 'pricingMethod.free' | 'feeType' | 'saleStatus'>) => TicketDefinitionsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => TicketDefinitionsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => TicketDefinitionsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<TicketDefinitionsQueryResult>;
  }
  /**
   * Counts ticket definitions by the `saleStatus` and `hidden` fields. <br> <br>
   * To learn about working with _query_ endpoints, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) and [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
   * @internal
   * @documentationMaturity preview
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
   * Deletes multiple ticket definitions. <br> <br>
   * All ticket definitions that meet the specified `filter` criteria are deleted.
   * @param filter - Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1" }`. <br/> <br/> **Example:** <br/> `"filter" : { "eventId": "3d3d5c04-ece0-45a8-85f0-11a58edaa192" }`
   * @public
   * @documentationMaturity preview
   * @requiredField filter
   * @adminMethod
   */
  function bulkDeleteTicketDefinitionsByFilter(filter: Record<string, any> | null): Promise<void>;
  /**
   * Changes the currency for all tickets (per event).
   * @param eventId - Event ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField eventId
   * @requiredField options
   * @requiredField options.currency
   * @adminMethod
   */
  function changeCurrency(eventId: string, options: ChangeCurrencyOptions): Promise<void>;
  interface ChangeCurrencyOptions {
      /** Event currency, in 3-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
      currency: string;
  }
  
  const eventsV3TicketDefinition_universal_d___debug: typeof __debug;
  type eventsV3TicketDefinition_universal_d_TicketDefinition = TicketDefinition;
  type eventsV3TicketDefinition_universal_d_PricingMethod = PricingMethod;
  type eventsV3TicketDefinition_universal_d_PricingMethodPriceOneOf = PricingMethodPriceOneOf;
  type eventsV3TicketDefinition_universal_d_Money = Money;
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
  type eventsV3TicketDefinition_universal_d_EventUpdated = EventUpdated;
  type eventsV3TicketDefinition_universal_d_SeatingPlanSummaryUpdated = SeatingPlanSummaryUpdated;
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
  const eventsV3TicketDefinition_universal_d_bulkDeleteTicketDefinitionsByFilter: typeof bulkDeleteTicketDefinitionsByFilter;
  const eventsV3TicketDefinition_universal_d_changeCurrency: typeof changeCurrency;
  type eventsV3TicketDefinition_universal_d_ChangeCurrencyOptions = ChangeCurrencyOptions;
  namespace eventsV3TicketDefinition_universal_d {
    export {
      eventsV3TicketDefinition_universal_d___debug as __debug,
      eventsV3TicketDefinition_universal_d_TicketDefinition as TicketDefinition,
      eventsV3TicketDefinition_universal_d_PricingMethod as PricingMethod,
      eventsV3TicketDefinition_universal_d_PricingMethodPriceOneOf as PricingMethodPriceOneOf,
      eventsV3TicketDefinition_universal_d_Money as Money,
      eventsV3TicketDefinition_universal_d_PricingOptions as PricingOptions,
      eventsV3TicketDefinition_universal_d_OptionDetails as OptionDetails,
      eventsV3TicketDefinition_universal_d_PricingTypeEnumType as PricingTypeEnumType,
      eventsV3TicketDefinition_universal_d_Type as Type,
      eventsV3TicketDefinition_universal_d_SalePeriod as SalePeriod,
      eventsV3TicketDefinition_universal_d_SaleStatusEnumStatus as SaleStatusEnumStatus,
      eventsV3TicketDefinition_universal_d_SalesDetails as SalesDetails,
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
      eventsV3TicketDefinition_universal_d_EventUpdated as EventUpdated,
      eventsV3TicketDefinition_universal_d_SeatingPlanSummaryUpdated as SeatingPlanSummaryUpdated,
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
      eventsV3TicketDefinition_universal_d_bulkDeleteTicketDefinitionsByFilter as bulkDeleteTicketDefinitionsByFilter,
      eventsV3TicketDefinition_universal_d_changeCurrency as changeCurrency,
      eventsV3TicketDefinition_universal_d_ChangeCurrencyOptions as ChangeCurrencyOptions,
    };
  }
  
  export { eventsV3TicketDefinition_universal_d as ticketDefinitions };
}
