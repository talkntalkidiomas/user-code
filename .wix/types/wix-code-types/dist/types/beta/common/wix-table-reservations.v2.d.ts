declare module "wix-table-reservations.v2" {
  /** The reservation domain object. */
  interface Reservation {
      /**
       * Reservation ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Status of the reservation.
       *
       * Supported values:
       *
       * * `HELD`: The reservation is temporary and will expire in 10 minutes if its status isn’t changed. This phase temporarily reserves the required number of seats and tables for a given party size at a chosen time while a customer enters details and/or confirms their reservation request.
       * * `REQUESTED`: A customer finished requesting this reservation, meaning they have added all necessary details and confirmed the request. Restaurant staff can now either approve or decline the reservation request.
       * * `DECLINED`: The restaurant’s owner or staff declined the customer’s request to make the reservation.
       * * `RESERVED`: The reservation is confirmed.
       * * `SEATED`: The customer is currently occupying the table.
       * * `CANCELED`: The reservation is canceled.
       * * `NO_SHOW`: The customer didn't show up for their reservation.
       * * `FINISHED`: The reservation completed successfully.
       *
       *
       * See the article for this API titled "The Reservation Lifecycle" in the menu on the left for more details on each of the statuses, and an explanation of the reservation lifecycle.
       */
      status?: Status$1;
      /**
       * Reservation source.
       *
       * This indicates how the reservation was made.
       * * `ONLINE` indicates that the customer made the reservation through a website or app.
       * * `OFFLINE` indicates that the reservation was made by a restaurant employee, for example when a customer calls to make a reservation.
       * * `WALK-IN` indicates that the customer did not make a reservation beforehand, and the reservation was entered into the system by a restaurant employee when the customer arrived at the restaurant.
       */
      source?: Source;
      /** Reservation details. */
      details?: Details;
      /**
       * Information about the person the reservation is being made for.
       *
       * A reservation created with any `source` other than `WALK_IN` requires the `reservation.reservee.phone` and `reservation.reservee.firstName` fields.
       * Attempting to create a reservation without these fields results in an error.
       */
      reservee?: Reservee;
      /**
       * Information about the person making the reservation.
       *
       * This field is required if the reservation's `status` is anything other than `WALK_IN`.
       * @readonly
       */
      reservedBy?: ReservedBy;
      /**
       * Team message.
       *
       * A message for the restaurant staff containing any additional information regarding the reservation, such as special requirements for the guests.
       */
      teamMessage?: string | null;
      /**
       * Date and time the reservation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the reservation was changed.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Revision number, which increments by 1 each time the reservation is updated.
       * To prevent conflicting changes, the current revision must be passed when updating the reservation.
       *
       * Ignored when creating a reservation.
       * @readonly
       */
      revision?: string | null;
      /** The reason the reservation was declined. */
      declineReason?: string | null;
      /**
       * Migration notes.
       * @internal
       * @readonly
       */
      migrationNotes?: MigrationNote[];
      /**
       * List of reserved tables with corresponding reservation ids. It includes only info of tables from details.tableIds
       * if that tables are used in other reservations. It's a read only field, that is calculated on the server side.
       * @internal
       * @readonly
       */
      tablesWithReservationConflicts?: TableWithReservationConflicts[];
      /**
       * Payment status.
       * @readonly
       */
      paymentStatus?: PaymentStatus;
  }
  enum Status$1 {
      UNKNOWN = "UNKNOWN",
      /** The reservation is held for 10 minutes, during which time the reservee should fill in their details. */
      HELD = "HELD",
      /** The reservation has been reserved. */
      RESERVED = "RESERVED",
      /** The reservation has been canceled. */
      CANCELED = "CANCELED",
      /** The reservation has finished successfully. */
      FINISHED = "FINISHED",
      /** The reservee didn't arrive. */
      NO_SHOW = "NO_SHOW",
      /** The reservee occupied the table. */
      SEATED = "SEATED",
      /** The reservee requested a reservation and is waiting for manual approval. */
      REQUESTED = "REQUESTED",
      /** The owner declined a reservee's request. */
      DECLINED = "DECLINED",
      /** The reservation is held for 10 minutes from the created time, during which time the reservee should pay. After payment is completed status will be changed automatically to RESERVED. */
      PAYMENT_PENDING = "PAYMENT_PENDING"
  }
  enum Source {
      UNKNOWN = "UNKNOWN",
      /** The reservation is created by a User. */
      OFFLINE = "OFFLINE",
      /** The reservation is created by UoU. */
      ONLINE = "ONLINE",
      /** The reservation is created by a User. It can be created without reservee data. */
      WALK_IN = "WALK_IN"
  }
  /** Reservation details. */
  interface Details {
      /** ID of the reservation location at which this reservation will be made. */
      reservationLocationId?: string | null;
      /** IDs of tables used for this reservation. */
      tableIds?: string[] | null;
      /** Start date and time of the reservation. */
      startDate?: Date;
      /** End date and time of the reservation. */
      endDate?: Date;
      /** Party size. */
      partySize?: number | null;
      /**
       * Whether reservation was created with manual approval.
       * @internal
       * @readonly
       */
      manualApproval?: boolean | null;
  }
  /** The person the reservation is being made for. */
  interface Reservee {
      /**
       * First name.
       *
       * This field is required if the reservation's `status` is anything other than `WALK_IN`.
       */
      firstName?: string | null;
      /** Last name. */
      lastName?: string | null;
      /** Email address. */
      email?: string | null;
      /**
       * Phone number.
       *
       * This property should begin with a +, followed by the country code, and then the rest of the phone number. For example, `"+972555555555"`.
       *
       * This field is required if the reservation's `status` is anything other than `WALK_IN`.
       */
      phone?: string | null;
      /** Whether the reservee has given marketing consent. */
      marketingConsent?: boolean | null;
      /**
       * Custom fields for the reservee in key-value pairs.
       *
       * The key is the custom field's ID, and the value is the custom field's value. For example, a custom field for allergies might have the key-value pair `f4283b2d-6340-4cf9-bae7-8769e6b62127 : "Nuts, Seafood"`.
       *
       * Empty fields are not returned.
       */
      customFields?: Record<string, any> | null;
      /**
       * Contact ID. If a contact with this ID does not exist on the site, one will be created.
       * @readonly
       */
      contactId?: string | null;
  }
  /** A person making reservation. */
  interface ReservedBy {
      /**
       * Contact ID for the person who made the reservation. If a contact with this ID does not exist on the site, one will be created.
       * @readonly
       */
      contactId?: string | null;
  }
  /** Migration note. */
  interface MigrationNote {
      /**
       * Name of label.
       * @internal
       * @readonly
       */
      name?: string | null;
      /**
       * @internal
       * @readonly
       */
      value?: string | null;
  }
  /** Table with reservation conflicts. */
  interface TableWithReservationConflicts {
      /** Table id. */
      tableId?: string;
      /** List of reservation ids. */
      reservationIds?: string[];
  }
  enum PaymentStatus {
      UNKNOWN = "UNKNOWN",
      /** A reservation is free of charge. */
      FREE = "FREE",
      /** A payment is not received yet. */
      NOT_PAID = "NOT_PAID",
      /** A corresponding to reservation order was fully payed. */
      PAID = "PAID",
      /** A corresponding to reservation order was refunded, but refund amount is less than order total price. */
      PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
      /** A corresponding to reservation order was fully refunded. The refund amount equals total price. */
      FULLY_REFUNDED = "FULLY_REFUNDED",
      /** A corresponding to reservation order was partially payed. */
      PARTIALLY_PAID = "PARTIALLY_PAID"
  }
  interface CreateReservationRequest {
      /** Reservation details. */
      reservation: Reservation;
      /**
       * If creation is forced.
       * @internal
       */
      force?: boolean;
      /**
       * Ignore table combination conflicts of the types included in the array. This ensures that the reservation is created even if the given conflicts would normally prevent it.
       *
       * Possible values:
       * * `"RESERVED"`: One or more of the chosen tables are already reserved.
       * * `"TOO_BIG"`: The party is too big for the selected table.
       * * `"TOO_SMALL"`: The party is too small for the selected table.
       * * `"OFFLINE_ONLY"`: The restaurant does not allow online reservations.
       */
      ignoreTableCombinationConflicts?: TableCombinationConflictType$1[];
      /**
       * Ignored reservation location conflicts of the types included in the array. This ensures that the reservation is created even if the given conflicts would normally prevent it.
       *
       * Possible values:
       * * `"PARTY_PACING"`: The restaurant cannot accommodate a party of the given size according to party pacing settings.
       * * `"SEAT_PACING"`: The required number of seats are unavailable according to seat pacing settings.
       */
      ignoreReservationLocationConflicts?: Type$1[];
  }
  enum TableCombinationConflictType$1 {
      UNKNOWN = "UNKNOWN",
      RESERVED = "RESERVED",
      TOO_BIG = "TOO_BIG",
      TOO_SMALL = "TOO_SMALL",
      OFFLINE_ONLY = "OFFLINE_ONLY"
  }
  enum Type$1 {
      UNKNOWN = "UNKNOWN",
      PARTY_PACING = "PARTY_PACING",
      SEAT_PACING = "SEAT_PACING"
  }
  interface CreateReservationResponse {
      /** Reservation. */
      reservation?: Reservation;
  }
  interface ReservationDetailsConflicts {
      /** Table combinations conflicts. */
      tableCombinationConflicts?: TableCombinationConflict$1[];
      /** Reservation location conflicts. */
      reservationLocationConflicts?: ReservationLocationConflict$1[];
  }
  interface TableCombinationConflict$1 {
      /** Conflict type. */
      type?: TableCombinationConflictType$1;
  }
  interface ReservationLocationConflict$1 {
      /** Reservation location conflict type. */
      type?: Type$1;
  }
  interface GetReservationRequest {
      /** Reservation ID. */
      reservationId: string;
      /**
       * Predefined sets of fields to return.
       *
       * Supported values: `PUBLIC`, `FULL`.
       *
       * The 'FULL` fieldset can only be retrieved by users with the `MANAGE RESERVATIONS (MEDIUM)` or `MANAGE RESERVATIONS (FULL)` permission scopes.
       * @internal
       */
      fieldSet?: Set$1;
      /**
       * Array of named, predefined sets of projected fields to be returned.
       *
       * Supported values: `PUBLIC`, `FULL`.
       *
       * Calling this method with `fieldsets` set to `FULL` requires additional permissions. See this API's Introduction article for more information.
       */
      fieldsets?: Set$1[];
  }
  enum Set$1 {
      PUBLIC = "PUBLIC",
      FULL = "FULL"
  }
  interface GetReservationResponse {
      /** Reservation. */
      reservation?: Reservation;
  }
  interface UpdateReservationRequest {
      /** Reservation information to update. */
      reservation: Reservation;
      /**
       * Field mask.
       * @internal
       */
      mask?: string[];
      /**
       * If update should be forced.
       * @internal
       */
      force?: boolean;
      /**
       * Ignore table combination conflicts of the types included in the array. This ensures that the reservation is updated even if the given conflicts would normally prevent it.
       *
       * Possible values:
       * * `"RESERVED"`: One or more of the chosen tables are already reserved.
       * * `"TOO_BIG"`: The party is too big for the selected table.
       * * `"TOO_SMALL"`: The party is too small for the selected table.
       * * `"OFFLINE_ONLY"`: The restaurant does not allow online reservations.
       */
      ignoreTableCombinationConflicts?: TableCombinationConflictType$1[];
      /**
       * Ignored reservation location conflicts of the types included in the array. This ensures that the reservation is updated even if the given conflicts would normally prevent it.
       *
       * Possible values:
       * * `"PARTY_PACING"`: The restaurant cannot accommodate a party of the given size according to party pacing settings.
       * * `"SEAT_PACING"`: The required number of seats are unavailable according to seat pacing settings.
       */
      ignoreReservationLocationConflicts?: Type$1[];
  }
  interface UpdateReservationResponse {
      /** Reservation. */
      reservation?: Reservation;
  }
  interface ReservationDataUpdated {
      /** Reserved reservation. */
      reservation?: Reservation;
      /** Old reservation. */
      oldReservation?: Reservation;
  }
  interface CreateHeldReservationRequest {
      /** Held reservation information to update. */
      reservationDetails: HeldReservationDetails;
  }
  /** Reservation details when create reservation in status HELD. */
  interface HeldReservationDetails {
      /** ID of the reservation location where the reservation is made. */
      reservationLocationId?: string | null;
      /** Start date and time of the reservation. */
      startDate?: Date;
      /** Party size. */
      partySize?: number | null;
  }
  interface CreateHeldReservationResponse {
      /** Reservation. */
      reservation?: Reservation;
  }
  interface ReserveReservationRequest {
      /** Reservation ID. */
      reservationId: string;
      /** Reservee details. */
      reservee: Reservee;
      /**
       * Revision number.
       *
       * Include the existing `revision` to prevent conflicting updates to reservations.
       */
      revision: string | null;
  }
  interface ReserveReservationResponse {
      /** Reservation. */
      reservation?: Reservation;
  }
  interface ReservationReserved {
      /** Reserved reservation. */
      reservation?: Reservation;
  }
  interface CancelReservationRequest {
      /** Reservation ID. */
      reservationId: string;
      /**
       * Revision number.
       *
       * Include the existing `revision` to prevent conflicting updates to reservations.
       */
      revision: string | null;
      /**
       * The phone number that was provided when the reservation was created.
       *
       * This is required for reservations with any `source` other than `WALK_IN`.
       *
       * This requirement provides additional security by ensuring that the canceling party knows both the reservation's `reservationId` and the reservee's `phone`.
       */
      phone?: string | null;
  }
  interface CancelReservationResponse {
      /** Reservation. */
      reservation?: Reservation;
  }
  interface ReservationCanceled {
      /** Reserved reservation. */
      reservation?: Reservation;
  }
  interface DeleteReservationRequest {
      /** Reservation ID. */
      reservationId: string;
      revision?: string;
  }
  interface DeleteReservationResponse {
  }
  interface ListReservationsRequest {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      paging?: CursorPaging$1;
      /** Defines how reservations in the response are sorted. */
      sort?: Sorting$1;
      /** Only reservations starting after this date are returned. */
      startDateFrom?: Date;
      /** Only reservations starting before this date are returned. */
      startDateTo?: Date;
      /**
       * Only reservations with this status are returned.
       *
       * * `HELD`: The reservation is temporary and will expire in 10 minutes if its status isn’t changed. This phase temporarily reserves the required number of seats and tables for a given party size at a chosen time while a customer enters details and/or confirms their reservation request.
       * * `REQUESTED`: A customer finished requesting this reservation, meaning they have added all necessary details and confirmed the request. Restaurant staff can now either approve or decline the reservation request.
       * * `DECLINED`: The restaurant’s owner or staff declined the customer’s request to make the reservation.
       * * `RESERVED`: The reservation is confirmed.
       * * `SEATED`: The customer is currently occupying the table.
       * * `CANCELED`: The reservation is canceled.
       * * `NO_SHOW`: The customer didn't show up for their reservation.
       * * `FINISHED`: The reservation completed successfully.
       */
      status?: Status$1;
  }
  interface CursorPaging$1 {
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
  interface Sorting$1 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /**
       * Sort order.
       *
       * Use `ASC` for ascending order or `DESC` for descending order. Defaults to `ASC`.
       */
      order?: SortOrder$1;
  }
  enum SortOrder$1 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface ListReservationsResponse {
      /** List of reservations. */
      reservations?: Reservation[];
      /** Metadata for the paginated results. */
      pagingMetadata?: CursorPagingMetadata$1;
  }
  interface CursorPagingMetadata$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$1;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryReservationsRequest {
      /** Query to select reservations. */
      query: CursorQuery;
  }
  interface CursorQuery extends CursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       *
       * For a detailed list of supported operations, see the [Supported Filters and Sorting](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/reservations/sorting-and-filtering) article.
       * To learn how to query reservations, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$1[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
  }
  interface QueryReservationsResponse {
      /** List of reservations. */
      reservations?: Reservation[];
      /** Metadata for the paginated results. */
      pagingMetadata?: CursorPagingMetadata$1;
  }
  interface SearchReservationsRequest {
      /** Search query. */
      search: CursorSearch;
  }
  interface CursorSearch extends CursorSearchPagingMethodOneOf {
      /** Cursor pointing to page of results. Can't be used together with 'paging'. 'cursor_paging.cursor' can not be used together with 'filter' or 'sort' */
      cursorPaging?: CursorPaging$1;
      /** A filter object. See the filter section [here](https://dev.wix.com/docs/rnd-general/articles/p13n-guidelines-aips/guidance-aips/wix-api-basics/1011-wql-wix-query-language) */
      filter?: Record<string, any> | null;
      /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
      sort?: Sorting$1[];
      /** Aggregations | Faceted search: refers to a way to explore large amounts of data by displaying summaries about various partitions of the data and later allowing to narrow the navigation to a specific partition. */
      aggregations?: Aggregation[];
      /** free text to match in searchable fields */
      search?: SearchDetails;
      /** Time zone to adjust date-time-based filters and aggregations. ISO 8601 or IANA time zone database format. */
      timeZone?: string | null;
  }
  /** @oneof */
  interface CursorSearchPagingMethodOneOf {
      /** Cursor pointing to page of results. Can't be used together with 'paging'. 'cursor_paging.cursor' can not be used together with 'filter' or 'sort' */
      cursorPaging?: CursorPaging$1;
  }
  interface Aggregation extends AggregationKindOneOf {
      value?: ValueAggregation;
      range?: RangeAggregation;
      scalar?: ScalarAggregation;
      dateHistogram?: DateHistogramAggregation;
      nested?: NestedAggregation;
      name?: string | null;
      type?: AggregationType;
      fieldPath?: string;
      groupBy?: GroupByAggregation;
  }
  /** @oneof */
  interface AggregationKindOneOf {
      value?: ValueAggregation;
      range?: RangeAggregation;
      scalar?: ScalarAggregation;
      dateHistogram?: DateHistogramAggregation;
      nested?: NestedAggregation;
  }
  interface RangeBucket {
      /** Inclusive lower bound of the range. Required if to is not given. */
      from?: number | null;
      /** Exclusive upper bound of the range. Required if from is not given. */
      to?: number | null;
  }
  enum SortType {
      COUNT = "COUNT",
      VALUE = "VALUE"
  }
  enum SortDirection {
      DESC = "DESC",
      ASC = "ASC"
  }
  enum MissingValues {
      EXCLUDE = "EXCLUDE",
      INCLUDE = "INCLUDE"
  }
  interface IncludeMissingValuesOptions {
      /** can specify custom bucket name. Defaults are [string -> "N/A"], [int -> "0"], [bool -> "false"] ... */
      addToBucket?: string;
  }
  enum ScalarType {
      UNKNOWN_SCALAR_TYPE = "UNKNOWN_SCALAR_TYPE",
      COUNT_DISTINCT = "COUNT_DISTINCT",
      MIN = "MIN",
      MAX = "MAX",
      SUM = "SUM",
      AVG = "AVG"
  }
  interface ValueAggregation extends ValueAggregationOptionsOneOf {
      /** options for including missing values */
      includeOptions?: IncludeMissingValuesOptions;
      sortType?: SortType;
      sortDirection?: SortDirection;
      /** How many aggregations would you like to return? Can be between 1 and 250. 10 is the default. */
      limit?: number | null;
      /** should missing values be included or excluded from the aggregation results. Default is EXCLUDE */
      missingValues?: MissingValues;
  }
  /** @oneof */
  interface ValueAggregationOptionsOneOf {
      /** options for including missing values */
      includeOptions?: IncludeMissingValuesOptions;
  }
  enum NestedAggregationType {
      UNKNOWN_AGGREGATION_TYPE = "UNKNOWN_AGGREGATION_TYPE",
      VALUE = "VALUE",
      RANGE = "RANGE",
      SCALAR = "SCALAR",
      DATE_HISTOGRAM = "DATE_HISTOGRAM"
  }
  interface RangeAggregation {
      buckets?: RangeBucket[];
  }
  interface ScalarAggregation {
      type?: ScalarType;
  }
  interface DateHistogramAggregation {
      interval?: Interval;
  }
  enum Interval {
      UNKNOWN_INTERVAL = "UNKNOWN_INTERVAL",
      YEAR = "YEAR",
      MONTH = "MONTH",
      WEEK = "WEEK",
      DAY = "DAY",
      HOUR = "HOUR",
      MINUTE = "MINUTE",
      SECOND = "SECOND"
  }
  interface NestedAggregationItem extends NestedAggregationItemKindOneOf {
      value?: ValueAggregation;
      range?: RangeAggregation;
      scalar?: ScalarAggregation;
      dateHistogram?: DateHistogramAggregation;
      name?: string | null;
      type?: NestedAggregationType;
      fieldPath?: string;
  }
  /** @oneof */
  interface NestedAggregationItemKindOneOf {
      value?: ValueAggregation;
      range?: RangeAggregation;
      scalar?: ScalarAggregation;
      dateHistogram?: DateHistogramAggregation;
  }
  enum AggregationType {
      UNKNOWN_AGGREGATION_TYPE = "UNKNOWN_AGGREGATION_TYPE",
      VALUE = "VALUE",
      RANGE = "RANGE",
      SCALAR = "SCALAR",
      DATE_HISTOGRAM = "DATE_HISTOGRAM",
      NESTED = "NESTED"
  }
  interface NestedAggregation {
      nestedAggregations?: NestedAggregationItem[];
  }
  interface GroupByAggregation extends GroupByAggregationKindOneOf {
      value?: ValueAggregation;
      name?: string | null;
      fieldPath?: string;
  }
  /** @oneof */
  interface GroupByAggregationKindOneOf {
      value?: ValueAggregation;
  }
  interface SearchDetails {
      /** boolean search mode */
      mode?: Mode$1;
      /** search term or expression */
      expression?: string | null;
      /** fields to search in. if empty - server will search in own default fields */
      fields?: string[];
      /** flag if should use auto fuzzy search (allowing typos by a managed proximity algorithm) */
      fuzzy?: boolean;
  }
  enum Mode$1 {
      /** any */
      OR = "OR",
      /** all */
      AND = "AND"
  }
  interface SearchReservationsResponse {
      /** List of Reservations. */
      reservations?: Reservation[];
      /** Cursor paging metadata. */
      pagingMetadata?: CursorPagingMetadata$1;
      /** Aggregation data. */
      aggregationData?: AggregationData;
  }
  interface AggregationData {
      /** key = aggregation name (as derived from search request) */
      results?: AggregationResults[];
  }
  interface ValueAggregationResult {
      value?: string;
      count?: number;
  }
  interface RangeAggregationResult {
      from?: number | null;
      to?: number | null;
      count?: number;
  }
  interface NestedAggregationResults extends NestedAggregationResultsResultOneOf {
      values?: ValueResults;
      ranges?: RangeResults;
      scalar?: ScalarResult;
      name?: string;
      type?: AggregationType;
      fieldPath?: string;
  }
  /** @oneof */
  interface NestedAggregationResultsResultOneOf {
      values?: ValueResults;
      ranges?: RangeResults;
      scalar?: ScalarResult;
  }
  interface ValueResults {
      results?: ValueAggregationResult[];
  }
  interface RangeResults {
      results?: RangeAggregationResult[];
  }
  interface ScalarResult {
      type?: ScalarType;
      value?: number;
  }
  interface NestedValueAggregationResult {
      value?: string;
      nestedResults?: NestedAggregationResults;
  }
  interface ValueResult {
      value?: string;
      count?: number | null;
  }
  interface RangeResult {
      from?: number | null;
      to?: number | null;
      count?: number | null;
  }
  interface NestedResultsScalarResult {
      value?: number;
  }
  interface NestedResultValue extends NestedResultValueResultOneOf {
      value?: ValueResult;
      range?: RangeResult;
      scalar?: NestedResultsScalarResult;
      dateHistogram?: ValueResult;
  }
  /** @oneof */
  interface NestedResultValueResultOneOf {
      value?: ValueResult;
      range?: RangeResult;
      scalar?: NestedResultsScalarResult;
      dateHistogram?: ValueResult;
  }
  interface Results {
      results?: Record<string, NestedResultValue>;
  }
  interface DateHistogramResult {
      value?: string;
      count?: number;
  }
  interface GroupByValueResults {
      results?: NestedValueAggregationResult[];
  }
  interface DateHistogramResults {
      results?: DateHistogramResult[];
  }
  interface NestedResults {
      results?: Results[];
  }
  interface AggregationResults extends AggregationResultsResultOneOf {
      values?: ValueResults;
      ranges?: RangeResults;
      scalar?: ScalarResult;
      groupedByValue?: GroupByValueResults;
      dateHistogram?: DateHistogramResults;
      nested?: NestedResults;
      name?: string;
      type?: AggregationType;
      fieldPath?: string;
  }
  /** @oneof */
  interface AggregationResultsResultOneOf {
      values?: ValueResults;
      ranges?: RangeResults;
      scalar?: ScalarResult;
      groupedByValue?: GroupByValueResults;
      dateHistogram?: DateHistogramResults;
      nested?: NestedResults;
  }
  interface DomainEvent$1 extends DomainEventBodyOneOf$1 {
      /** Information about the reservation that was created and event metadata. */
      createdEvent?: EntityCreatedEvent$1;
      /** Information about the reservation that was updated and event metadata. */
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
      /** Information about the reservation that was created in JSON format. */
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
  interface Empty$1 {
  }
  interface RemoveReservationMigrationNotesRequest {
      /** Reservation ID. */
      reservationId?: string;
      /** Revision. */
      revision?: string;
  }
  interface RemoveReservationMigrationNotesResponse {
      reservation?: Reservation;
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
   * Creates a new reservation.
   *
   * `createReservation()` accepts and requires different fields depending on the `status` provided and your permissions.
   *
   * **Status and source**
   *
   * If a `status` is not provided, it will be set to:
   * * `RESERVED` if manual approval is not required for confirmation
   * * `REQUESTED` if manual approval is required for confirmation.
   *
   * A reservation created with any `source` other than `WALK_IN` requires the `reservation.reservee.phone` and `reservation.reservee.firstName` fields.
   * Attempting to create a reservation without these fields will result in an error.
   *
   * **Permissions**
   *
   * Including the fields `status`, `source`, `reservation.details.tableIds`, `reservation.details.endDate`, `ignoreReservationLocationConflicts`, or `ignoreTableCombinationConflicts` in the request requires additional permissions. See this API's Introduction article for more information.
   *
   * If `source` is not provided, its value is set depending on the permissions of the user making the call. See this API's Introduction article for more information.
   *
   *
   *  > **Note:** `createReservation()` requires all details of the reservation upfront. The process of creating a reservation can be broken up using `createHeldReservation`.  `createHeldReservation` creates a temporary reservation that expires automatically unless it is completed with the addition of more details using `reserveReservation()`.
   * @param reservation - Reservation details.
   * @public
   * @documentationMaturity preview
   * @requiredField reservation
   * @requiredField reservation.details
   * @requiredField reservation.details.partySize
   * @requiredField reservation.details.reservationLocationId
   * @requiredField reservation.details.startDate
   * @param options - Options for creating the reservation.
   * @returns Reservation.
   */
  function createReservation(reservation: Reservation, options?: CreateReservationOptions): Promise<Reservation>;
  interface CreateReservationOptions {
      /**
       * If creation is forced.
       * @internal
       */
      force?: boolean;
      /**
       * Ignore table combination conflicts of the types included in the array. This ensures that the reservation is created even if the given conflicts would normally prevent it.
       *
       * Possible values:
       * * `"RESERVED"`: One or more of the chosen tables are already reserved.
       * * `"TOO_BIG"`: The party is too big for the selected table.
       * * `"TOO_SMALL"`: The party is too small for the selected table.
       * * `"OFFLINE_ONLY"`: The restaurant does not allow online reservations.
       */
      ignoreTableCombinationConflicts?: TableCombinationConflictType$1[];
      /**
       * Ignored reservation location conflicts of the types included in the array. This ensures that the reservation is created even if the given conflicts would normally prevent it.
       *
       * Possible values:
       * * `"PARTY_PACING"`: The restaurant cannot accommodate a party of the given size according to party pacing settings.
       * * `"SEAT_PACING"`: The required number of seats are unavailable according to seat pacing settings.
       */
      ignoreReservationLocationConflicts?: Type$1[];
  }
  /**
   * Retrieves a reservation.
   *
   * Calling this method with `fieldsets` set to `FULL` requires additional permissions. See this API's Introduction article for more information.
   * @param reservationId - Reservation ID.
   * @public
   * @documentationMaturity preview
   * @requiredField reservationId
   * @returns Reservation.
   */
  function getReservation(reservationId: string, options?: GetReservationOptions): Promise<Reservation>;
  interface GetReservationOptions {
      /**
       * Predefined sets of fields to return.
       *
       * Supported values: `PUBLIC`, `FULL`.
       *
       * The 'FULL` fieldset can only be retrieved by users with the `MANAGE RESERVATIONS (MEDIUM)` or `MANAGE RESERVATIONS (FULL)` permission scopes.
       * @internal
       */
      fieldSet?: Set$1;
      /**
       * Array of named, predefined sets of projected fields to be returned.
       *
       * Supported values: `PUBLIC`, `FULL`.
       *
       * Calling this method with `fieldsets` set to `FULL` requires additional permissions. See this API's Introduction article for more information.
       */
      fieldsets?: Set$1[];
  }
  /**
   * Updates a reservation.
   *
   * Including the fields `status`, `source`, `reservation.details.tableIds`, `reservation.details.endDate`, `ignoreReservationLocationConflicts`, and `ignoreTableCombinationConflicts` in the request requires additional permissions. See this API's Introduction article for more information.
   *
   * Each time the reservation is updated, revision increments by 1. The existing revision must be included when updating the reservation. This ensures you're working with the latest reservation information, and it prevents unintended overwrites.
   * @param _id - Reservation ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField reservation
   * @requiredField reservation.revision
   * @param options - Options for updating the reservation.
   * @param reservation - Reservation information to update.
   * @adminMethod
   * @returns Reservation.
   */
  function updateReservation(_id: string | null, reservation: UpdateReservation, options?: UpdateReservationOptions): Promise<Reservation>;
  interface UpdateReservation {
      /**
       * Reservation ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Status of the reservation.
       *
       * See the article for this API titled "The Reservation Lifecycle" in the menu on the left for more details on each of the statuses, and an explanation of the reservation lifecycle.
       */
      status?: Status$1;
      /**
       * Reservation source.
       *
       * This indicates how the reservation was made.
       * * `ONLINE` indicates that the customer made the reservation through a website or app.
       * * `OFFLINE` indicates that the reservation was made by a restaurant employee, for example when a customer calls to make a reservation.
       * * `WALK-IN` indicates that the customer did not make a reservation beforehand, and the reservation was entered into the system by a restaurant employee when the customer arrived at the restaurant.
       */
      source?: Source;
      /** Reservation details. */
      details?: Details;
      /**
       * Information about the person the reservation is being made for.
       *
       * A reservation created with any `source` other than `WALK_IN` requires the `reservation.reservee.phone` and `reservation.reservee.firstName` fields.
       * Attempting to create a reservation without these fields results in an error.
       */
      reservee?: Reservee;
      /**
       * Information about the person making the reservation.
       *
       * This field is required if the reservation's `status` is anything other than `WALK_IN`.
       * @readonly
       */
      reservedBy?: ReservedBy;
      /**
       * Team message.
       *
       * A message for the restaurant staff containing any additional information regarding the reservation, such as special requirements for the guests.
       */
      teamMessage?: string | null;
      /**
       * Date and time the reservation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time the reservation was changed.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Revision number, which increments by 1 each time the reservation is updated.
       * To prevent conflicting changes, the current revision must be passed when updating the reservation.
       *
       * Ignored when creating a reservation.
       * @readonly
       */
      revision?: string | null;
      /** The reason the reservation was declined. */
      declineReason?: string | null;
      /**
       * Migration notes.
       * @internal
       * @readonly
       */
      migrationNotes?: MigrationNote[];
      /**
       * List of reserved tables with corresponding reservation ids. It includes only info of tables from details.tableIds
       * if that tables are used in other reservations. It's a read only field, that is calculated on the server side.
       * @internal
       * @readonly
       */
      tablesWithReservationConflicts?: TableWithReservationConflicts[];
      /**
       * Payment status.
       * @readonly
       */
      paymentStatus?: PaymentStatus;
  }
  interface UpdateReservationOptions {
      /**
       * Field mask.
       * @internal
       */
      mask?: string[];
      /**
       * If update should be forced.
       * @internal
       */
      force?: boolean;
      /**
       * Ignore table combination conflicts of the types included in the array. This ensures that the reservation is updated even if the given conflicts would normally prevent it.
       *
       * Possible values:
       * * `"RESERVED"`: One or more of the chosen tables are already reserved.
       * * `"TOO_BIG"`: The party is too big for the selected table.
       * * `"TOO_SMALL"`: The party is too small for the selected table.
       * * `"OFFLINE_ONLY"`: The restaurant does not allow online reservations.
       */
      ignoreTableCombinationConflicts?: TableCombinationConflictType$1[];
      /**
       * Ignored reservation location conflicts of the types included in the array. This ensures that the reservation is updated even if the given conflicts would normally prevent it.
       *
       * Possible values:
       * * `"PARTY_PACING"`: The restaurant cannot accommodate a party of the given size according to party pacing settings.
       * * `"SEAT_PACING"`: The required number of seats are unavailable according to seat pacing settings.
       */
      ignoreReservationLocationConflicts?: Type$1[];
  }
  /**
   * Creates a new temporary reservation and holds it for the customer for 10 minutes.
   *
   * Creates a new reservation with the `HELD` status. `HELD` reservations are intended to reserve seats and tables for a party in a selected time slot while they enter further reservation details, such as names and contact information. Reservations with the `HELD` status are only valid for 10 minutes. Trying to change a `HELD` reservation’s status after 10 minutes returns an error.
   *
   * You cannot call `updateReservation()` to change a reservation’s status from `HELD`. Trying to do so returns an error. Instead, you should use `reserveReservation()`.
   *
   * If you do not wish to have `HELD` reservations in your flow, you can create a reservation with all required details using `createReservation()`.
   *
   * @param reservationDetails - Held reservation information to update.
   * @public
   * @documentationMaturity preview
   * @requiredField reservationDetails
   * @requiredField reservationDetails.partySize
   * @requiredField reservationDetails.reservationLocationId
   * @requiredField reservationDetails.startDate
   */
  function createHeldReservation(reservationDetails: HeldReservationDetails): Promise<CreateHeldReservationResponse>;
  /**
   * Reserves or requests a held reservation.
   *
   * Held reservations are temporary reservations with the `HELD` status created by `createHeldReservation()`.
   *
   * They are intended to reserve seats and tables for a party in a selected time slot while they enter further reservation details, such as names and contact information. Reservations with the `HELD` status are only valid for 10 minutes. Trying to call `Reserve Reservation` with a held reservation older than 10 minutes returns an error.
   *
   * `Reserve Reservation` changes a reservation's `HELD` status to:
   * * `RESERVED` if the reservation's reservation location does not require manual approval.
   * * `REQUESTED` if the reservation's reservation location requires manual approval.
   * @param reservationId - Reservation ID.
   * @param reservee - Reservee details.
   * @param revision - Revision number.
   *
   * Include the existing `revision` to prevent conflicting updates to reservations.
   * @public
   * @documentationMaturity preview
   * @requiredField reservationId
   * @requiredField reservee
   * @requiredField reservee.firstName
   * @requiredField reservee.phone
   * @requiredField revision
   */
  function reserveReservation(reservationId: string, reservee: Reservee, revision: string | null): Promise<ReserveReservationResponse>;
  /**
   * Cancels a reservation.
   *
   * Sets the reservation status to `CANCELED`.
   * @param reservationId - Reservation ID.
   * @param revision - Revision number.
   *
   * Include the existing `revision` to prevent conflicting updates to reservations.
   * @public
   * @documentationMaturity preview
   * @requiredField reservationId
   * @requiredField revision
   * @param options - Options for canceling the reservation.
   */
  function cancelReservation(reservationId: string, revision: string | null, options?: CancelReservationOptions): Promise<CancelReservationResponse>;
  interface CancelReservationOptions {
      /**
       * The phone number that was provided when the reservation was created.
       *
       * This is required for reservations with any `source` other than `WALK_IN`.
       *
       * This requirement provides additional security by ensuring that the canceling party knows both the reservation's `reservationId` and the reservee's `phone`.
       */
      phone?: string | null;
  }
  /**
   * Deletes a reservation. Only reservations with the `HELD` status can be deleted.
   * @param reservationId - Reservation ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField reservationId
   * @requiredField revision
   */
  function deleteReservation(reservationId: string, revision: string): Promise<void>;
  /**
   * Retrieves a list of up to 100 reservations.
   * @public
   * @documentationMaturity preview
   * @param options - Options for listing the reservations.
   * @adminMethod
   */
  function listReservations(options?: ListReservationsOptions): Promise<ListReservationsResponse>;
  interface ListReservationsOptions {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      paging?: CursorPaging$1;
      /** Defines how reservations in the response are sorted. */
      sort?: Sorting$1;
      /** Only reservations starting after this date are returned. */
      startDateFrom?: Date;
      /** Only reservations starting before this date are returned. */
      startDateTo?: Date;
      /**
       * Only reservations with this status are returned.
       *
       * * `HELD`: The reservation is temporary and will expire in 10 minutes if its status isn’t changed. This phase temporarily reserves the required number of seats and tables for a given party size at a chosen time while a customer enters details and/or confirms their reservation request.
       * * `REQUESTED`: A customer finished requesting this reservation, meaning they have added all necessary details and confirmed the request. Restaurant staff can now either approve or decline the reservation request.
       * * `DECLINED`: The restaurant’s owner or staff declined the customer’s request to make the reservation.
       * * `RESERVED`: The reservation is confirmed.
       * * `SEATED`: The customer is currently occupying the table.
       * * `CANCELED`: The reservation is canceled.
       * * `NO_SHOW`: The customer didn't show up for their reservation.
       * * `FINISHED`: The reservation completed successfully.
       */
      status?: Status$1;
  }
  /**
   * Creates a query to retrieve a list of reservations.
   *
   * The `queryReservations()` function builds a query to retrieve a list of reservations and returns a [`ReservationsQueryBuilder`](#ReservationsQueryBuilder) object.
   *
   * The returned object contains the query definition, which is used to run the query using the [find()](#ReservationsQueryBuilder/find) function.
   *
   * You can refine the query by chaining `ReservationsQueryBuilder` functions onto the query. `ReservationsQueryBuilder` functions enable you to filter, sort, and control the results that `queryReservations()` returns.
   *
   * `queryReservations()` runs with the following `ReservationsQueryBuilder` defaults, which you can override:
   *
   * * [`skip(0)`](#ReservationsQueryBuilder/skip)
   * * [`limit(50)`](#ReservationsQueryBuilder/limit)
   * * [`descending('_createdDate')`](#ReservationsQueryBuilder/descending)
   *
   * The following `ReservationsQueryBuilder` functions are supported for `queryReservations()`. For a full description of the reservation object, see the object returned for the [`items`](#ReservationsQueryResult/items) property in [`ReservationsQueryResult`](#ReservationsQueryResult).
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryReservations(): ReservationsQueryBuilder;
  interface QueryCursorResult$1 {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ReservationsQueryResult extends QueryCursorResult$1 {
      items: Reservation[];
      query: ReservationsQueryBuilder;
      next: () => Promise<ReservationsQueryResult>;
      prev: () => Promise<ReservationsQueryResult>;
  }
  interface ReservationsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'status' | 'details.startDate', value: any) => ReservationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'status' | 'details.startDate', value: any) => ReservationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: 'details.startDate', value: any) => ReservationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: 'details.startDate', value: any) => ReservationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: 'details.startDate', value: any) => ReservationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: 'details.startDate', value: any) => ReservationsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'status' | 'details.startDate', value: any) => ReservationsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'details.startDate'>) => ReservationsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'details.startDate'>) => ReservationsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ReservationsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ReservationsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ReservationsQueryResult>;
  }
  /** @param search - Search query.
   * @public
   * @documentationMaturity preview
   * @requiredField search
   * @adminMethod
   */
  function searchReservations(search: CursorSearch): Promise<SearchReservationsResponse>;
  
  type tableReservationsV1Reservation_universal_d_Reservation = Reservation;
  type tableReservationsV1Reservation_universal_d_Source = Source;
  const tableReservationsV1Reservation_universal_d_Source: typeof Source;
  type tableReservationsV1Reservation_universal_d_Details = Details;
  type tableReservationsV1Reservation_universal_d_Reservee = Reservee;
  type tableReservationsV1Reservation_universal_d_ReservedBy = ReservedBy;
  type tableReservationsV1Reservation_universal_d_MigrationNote = MigrationNote;
  type tableReservationsV1Reservation_universal_d_TableWithReservationConflicts = TableWithReservationConflicts;
  type tableReservationsV1Reservation_universal_d_PaymentStatus = PaymentStatus;
  const tableReservationsV1Reservation_universal_d_PaymentStatus: typeof PaymentStatus;
  type tableReservationsV1Reservation_universal_d_CreateReservationRequest = CreateReservationRequest;
  type tableReservationsV1Reservation_universal_d_CreateReservationResponse = CreateReservationResponse;
  type tableReservationsV1Reservation_universal_d_ReservationDetailsConflicts = ReservationDetailsConflicts;
  type tableReservationsV1Reservation_universal_d_GetReservationRequest = GetReservationRequest;
  type tableReservationsV1Reservation_universal_d_GetReservationResponse = GetReservationResponse;
  type tableReservationsV1Reservation_universal_d_UpdateReservationRequest = UpdateReservationRequest;
  type tableReservationsV1Reservation_universal_d_UpdateReservationResponse = UpdateReservationResponse;
  type tableReservationsV1Reservation_universal_d_ReservationDataUpdated = ReservationDataUpdated;
  type tableReservationsV1Reservation_universal_d_CreateHeldReservationRequest = CreateHeldReservationRequest;
  type tableReservationsV1Reservation_universal_d_HeldReservationDetails = HeldReservationDetails;
  type tableReservationsV1Reservation_universal_d_CreateHeldReservationResponse = CreateHeldReservationResponse;
  type tableReservationsV1Reservation_universal_d_ReserveReservationRequest = ReserveReservationRequest;
  type tableReservationsV1Reservation_universal_d_ReserveReservationResponse = ReserveReservationResponse;
  type tableReservationsV1Reservation_universal_d_ReservationReserved = ReservationReserved;
  type tableReservationsV1Reservation_universal_d_CancelReservationRequest = CancelReservationRequest;
  type tableReservationsV1Reservation_universal_d_CancelReservationResponse = CancelReservationResponse;
  type tableReservationsV1Reservation_universal_d_ReservationCanceled = ReservationCanceled;
  type tableReservationsV1Reservation_universal_d_DeleteReservationRequest = DeleteReservationRequest;
  type tableReservationsV1Reservation_universal_d_DeleteReservationResponse = DeleteReservationResponse;
  type tableReservationsV1Reservation_universal_d_ListReservationsRequest = ListReservationsRequest;
  type tableReservationsV1Reservation_universal_d_ListReservationsResponse = ListReservationsResponse;
  type tableReservationsV1Reservation_universal_d_QueryReservationsRequest = QueryReservationsRequest;
  type tableReservationsV1Reservation_universal_d_CursorQuery = CursorQuery;
  type tableReservationsV1Reservation_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type tableReservationsV1Reservation_universal_d_QueryReservationsResponse = QueryReservationsResponse;
  type tableReservationsV1Reservation_universal_d_SearchReservationsRequest = SearchReservationsRequest;
  type tableReservationsV1Reservation_universal_d_CursorSearch = CursorSearch;
  type tableReservationsV1Reservation_universal_d_CursorSearchPagingMethodOneOf = CursorSearchPagingMethodOneOf;
  type tableReservationsV1Reservation_universal_d_Aggregation = Aggregation;
  type tableReservationsV1Reservation_universal_d_AggregationKindOneOf = AggregationKindOneOf;
  type tableReservationsV1Reservation_universal_d_RangeBucket = RangeBucket;
  type tableReservationsV1Reservation_universal_d_SortType = SortType;
  const tableReservationsV1Reservation_universal_d_SortType: typeof SortType;
  type tableReservationsV1Reservation_universal_d_SortDirection = SortDirection;
  const tableReservationsV1Reservation_universal_d_SortDirection: typeof SortDirection;
  type tableReservationsV1Reservation_universal_d_MissingValues = MissingValues;
  const tableReservationsV1Reservation_universal_d_MissingValues: typeof MissingValues;
  type tableReservationsV1Reservation_universal_d_IncludeMissingValuesOptions = IncludeMissingValuesOptions;
  type tableReservationsV1Reservation_universal_d_ScalarType = ScalarType;
  const tableReservationsV1Reservation_universal_d_ScalarType: typeof ScalarType;
  type tableReservationsV1Reservation_universal_d_ValueAggregation = ValueAggregation;
  type tableReservationsV1Reservation_universal_d_ValueAggregationOptionsOneOf = ValueAggregationOptionsOneOf;
  type tableReservationsV1Reservation_universal_d_NestedAggregationType = NestedAggregationType;
  const tableReservationsV1Reservation_universal_d_NestedAggregationType: typeof NestedAggregationType;
  type tableReservationsV1Reservation_universal_d_RangeAggregation = RangeAggregation;
  type tableReservationsV1Reservation_universal_d_ScalarAggregation = ScalarAggregation;
  type tableReservationsV1Reservation_universal_d_DateHistogramAggregation = DateHistogramAggregation;
  type tableReservationsV1Reservation_universal_d_Interval = Interval;
  const tableReservationsV1Reservation_universal_d_Interval: typeof Interval;
  type tableReservationsV1Reservation_universal_d_NestedAggregationItem = NestedAggregationItem;
  type tableReservationsV1Reservation_universal_d_NestedAggregationItemKindOneOf = NestedAggregationItemKindOneOf;
  type tableReservationsV1Reservation_universal_d_AggregationType = AggregationType;
  const tableReservationsV1Reservation_universal_d_AggregationType: typeof AggregationType;
  type tableReservationsV1Reservation_universal_d_NestedAggregation = NestedAggregation;
  type tableReservationsV1Reservation_universal_d_GroupByAggregation = GroupByAggregation;
  type tableReservationsV1Reservation_universal_d_GroupByAggregationKindOneOf = GroupByAggregationKindOneOf;
  type tableReservationsV1Reservation_universal_d_SearchDetails = SearchDetails;
  type tableReservationsV1Reservation_universal_d_SearchReservationsResponse = SearchReservationsResponse;
  type tableReservationsV1Reservation_universal_d_AggregationData = AggregationData;
  type tableReservationsV1Reservation_universal_d_ValueAggregationResult = ValueAggregationResult;
  type tableReservationsV1Reservation_universal_d_RangeAggregationResult = RangeAggregationResult;
  type tableReservationsV1Reservation_universal_d_NestedAggregationResults = NestedAggregationResults;
  type tableReservationsV1Reservation_universal_d_NestedAggregationResultsResultOneOf = NestedAggregationResultsResultOneOf;
  type tableReservationsV1Reservation_universal_d_ValueResults = ValueResults;
  type tableReservationsV1Reservation_universal_d_RangeResults = RangeResults;
  type tableReservationsV1Reservation_universal_d_ScalarResult = ScalarResult;
  type tableReservationsV1Reservation_universal_d_NestedValueAggregationResult = NestedValueAggregationResult;
  type tableReservationsV1Reservation_universal_d_ValueResult = ValueResult;
  type tableReservationsV1Reservation_universal_d_RangeResult = RangeResult;
  type tableReservationsV1Reservation_universal_d_NestedResultsScalarResult = NestedResultsScalarResult;
  type tableReservationsV1Reservation_universal_d_NestedResultValue = NestedResultValue;
  type tableReservationsV1Reservation_universal_d_NestedResultValueResultOneOf = NestedResultValueResultOneOf;
  type tableReservationsV1Reservation_universal_d_Results = Results;
  type tableReservationsV1Reservation_universal_d_DateHistogramResult = DateHistogramResult;
  type tableReservationsV1Reservation_universal_d_GroupByValueResults = GroupByValueResults;
  type tableReservationsV1Reservation_universal_d_DateHistogramResults = DateHistogramResults;
  type tableReservationsV1Reservation_universal_d_NestedResults = NestedResults;
  type tableReservationsV1Reservation_universal_d_AggregationResults = AggregationResults;
  type tableReservationsV1Reservation_universal_d_AggregationResultsResultOneOf = AggregationResultsResultOneOf;
  type tableReservationsV1Reservation_universal_d_RemoveReservationMigrationNotesRequest = RemoveReservationMigrationNotesRequest;
  type tableReservationsV1Reservation_universal_d_RemoveReservationMigrationNotesResponse = RemoveReservationMigrationNotesResponse;
  const tableReservationsV1Reservation_universal_d_createReservation: typeof createReservation;
  type tableReservationsV1Reservation_universal_d_CreateReservationOptions = CreateReservationOptions;
  const tableReservationsV1Reservation_universal_d_getReservation: typeof getReservation;
  type tableReservationsV1Reservation_universal_d_GetReservationOptions = GetReservationOptions;
  const tableReservationsV1Reservation_universal_d_updateReservation: typeof updateReservation;
  type tableReservationsV1Reservation_universal_d_UpdateReservation = UpdateReservation;
  type tableReservationsV1Reservation_universal_d_UpdateReservationOptions = UpdateReservationOptions;
  const tableReservationsV1Reservation_universal_d_createHeldReservation: typeof createHeldReservation;
  const tableReservationsV1Reservation_universal_d_reserveReservation: typeof reserveReservation;
  const tableReservationsV1Reservation_universal_d_cancelReservation: typeof cancelReservation;
  type tableReservationsV1Reservation_universal_d_CancelReservationOptions = CancelReservationOptions;
  const tableReservationsV1Reservation_universal_d_deleteReservation: typeof deleteReservation;
  const tableReservationsV1Reservation_universal_d_listReservations: typeof listReservations;
  type tableReservationsV1Reservation_universal_d_ListReservationsOptions = ListReservationsOptions;
  const tableReservationsV1Reservation_universal_d_queryReservations: typeof queryReservations;
  type tableReservationsV1Reservation_universal_d_ReservationsQueryResult = ReservationsQueryResult;
  type tableReservationsV1Reservation_universal_d_ReservationsQueryBuilder = ReservationsQueryBuilder;
  const tableReservationsV1Reservation_universal_d_searchReservations: typeof searchReservations;
  namespace tableReservationsV1Reservation_universal_d {
    export {
      tableReservationsV1Reservation_universal_d_Reservation as Reservation,
      Status$1 as Status,
      tableReservationsV1Reservation_universal_d_Source as Source,
      tableReservationsV1Reservation_universal_d_Details as Details,
      tableReservationsV1Reservation_universal_d_Reservee as Reservee,
      tableReservationsV1Reservation_universal_d_ReservedBy as ReservedBy,
      tableReservationsV1Reservation_universal_d_MigrationNote as MigrationNote,
      tableReservationsV1Reservation_universal_d_TableWithReservationConflicts as TableWithReservationConflicts,
      tableReservationsV1Reservation_universal_d_PaymentStatus as PaymentStatus,
      tableReservationsV1Reservation_universal_d_CreateReservationRequest as CreateReservationRequest,
      TableCombinationConflictType$1 as TableCombinationConflictType,
      Type$1 as Type,
      tableReservationsV1Reservation_universal_d_CreateReservationResponse as CreateReservationResponse,
      tableReservationsV1Reservation_universal_d_ReservationDetailsConflicts as ReservationDetailsConflicts,
      TableCombinationConflict$1 as TableCombinationConflict,
      ReservationLocationConflict$1 as ReservationLocationConflict,
      tableReservationsV1Reservation_universal_d_GetReservationRequest as GetReservationRequest,
      Set$1 as Set,
      tableReservationsV1Reservation_universal_d_GetReservationResponse as GetReservationResponse,
      tableReservationsV1Reservation_universal_d_UpdateReservationRequest as UpdateReservationRequest,
      tableReservationsV1Reservation_universal_d_UpdateReservationResponse as UpdateReservationResponse,
      tableReservationsV1Reservation_universal_d_ReservationDataUpdated as ReservationDataUpdated,
      tableReservationsV1Reservation_universal_d_CreateHeldReservationRequest as CreateHeldReservationRequest,
      tableReservationsV1Reservation_universal_d_HeldReservationDetails as HeldReservationDetails,
      tableReservationsV1Reservation_universal_d_CreateHeldReservationResponse as CreateHeldReservationResponse,
      tableReservationsV1Reservation_universal_d_ReserveReservationRequest as ReserveReservationRequest,
      tableReservationsV1Reservation_universal_d_ReserveReservationResponse as ReserveReservationResponse,
      tableReservationsV1Reservation_universal_d_ReservationReserved as ReservationReserved,
      tableReservationsV1Reservation_universal_d_CancelReservationRequest as CancelReservationRequest,
      tableReservationsV1Reservation_universal_d_CancelReservationResponse as CancelReservationResponse,
      tableReservationsV1Reservation_universal_d_ReservationCanceled as ReservationCanceled,
      tableReservationsV1Reservation_universal_d_DeleteReservationRequest as DeleteReservationRequest,
      tableReservationsV1Reservation_universal_d_DeleteReservationResponse as DeleteReservationResponse,
      tableReservationsV1Reservation_universal_d_ListReservationsRequest as ListReservationsRequest,
      CursorPaging$1 as CursorPaging,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      tableReservationsV1Reservation_universal_d_ListReservationsResponse as ListReservationsResponse,
      CursorPagingMetadata$1 as CursorPagingMetadata,
      Cursors$1 as Cursors,
      tableReservationsV1Reservation_universal_d_QueryReservationsRequest as QueryReservationsRequest,
      tableReservationsV1Reservation_universal_d_CursorQuery as CursorQuery,
      tableReservationsV1Reservation_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      tableReservationsV1Reservation_universal_d_QueryReservationsResponse as QueryReservationsResponse,
      tableReservationsV1Reservation_universal_d_SearchReservationsRequest as SearchReservationsRequest,
      tableReservationsV1Reservation_universal_d_CursorSearch as CursorSearch,
      tableReservationsV1Reservation_universal_d_CursorSearchPagingMethodOneOf as CursorSearchPagingMethodOneOf,
      tableReservationsV1Reservation_universal_d_Aggregation as Aggregation,
      tableReservationsV1Reservation_universal_d_AggregationKindOneOf as AggregationKindOneOf,
      tableReservationsV1Reservation_universal_d_RangeBucket as RangeBucket,
      tableReservationsV1Reservation_universal_d_SortType as SortType,
      tableReservationsV1Reservation_universal_d_SortDirection as SortDirection,
      tableReservationsV1Reservation_universal_d_MissingValues as MissingValues,
      tableReservationsV1Reservation_universal_d_IncludeMissingValuesOptions as IncludeMissingValuesOptions,
      tableReservationsV1Reservation_universal_d_ScalarType as ScalarType,
      tableReservationsV1Reservation_universal_d_ValueAggregation as ValueAggregation,
      tableReservationsV1Reservation_universal_d_ValueAggregationOptionsOneOf as ValueAggregationOptionsOneOf,
      tableReservationsV1Reservation_universal_d_NestedAggregationType as NestedAggregationType,
      tableReservationsV1Reservation_universal_d_RangeAggregation as RangeAggregation,
      tableReservationsV1Reservation_universal_d_ScalarAggregation as ScalarAggregation,
      tableReservationsV1Reservation_universal_d_DateHistogramAggregation as DateHistogramAggregation,
      tableReservationsV1Reservation_universal_d_Interval as Interval,
      tableReservationsV1Reservation_universal_d_NestedAggregationItem as NestedAggregationItem,
      tableReservationsV1Reservation_universal_d_NestedAggregationItemKindOneOf as NestedAggregationItemKindOneOf,
      tableReservationsV1Reservation_universal_d_AggregationType as AggregationType,
      tableReservationsV1Reservation_universal_d_NestedAggregation as NestedAggregation,
      tableReservationsV1Reservation_universal_d_GroupByAggregation as GroupByAggregation,
      tableReservationsV1Reservation_universal_d_GroupByAggregationKindOneOf as GroupByAggregationKindOneOf,
      tableReservationsV1Reservation_universal_d_SearchDetails as SearchDetails,
      Mode$1 as Mode,
      tableReservationsV1Reservation_universal_d_SearchReservationsResponse as SearchReservationsResponse,
      tableReservationsV1Reservation_universal_d_AggregationData as AggregationData,
      tableReservationsV1Reservation_universal_d_ValueAggregationResult as ValueAggregationResult,
      tableReservationsV1Reservation_universal_d_RangeAggregationResult as RangeAggregationResult,
      tableReservationsV1Reservation_universal_d_NestedAggregationResults as NestedAggregationResults,
      tableReservationsV1Reservation_universal_d_NestedAggregationResultsResultOneOf as NestedAggregationResultsResultOneOf,
      tableReservationsV1Reservation_universal_d_ValueResults as ValueResults,
      tableReservationsV1Reservation_universal_d_RangeResults as RangeResults,
      tableReservationsV1Reservation_universal_d_ScalarResult as ScalarResult,
      tableReservationsV1Reservation_universal_d_NestedValueAggregationResult as NestedValueAggregationResult,
      tableReservationsV1Reservation_universal_d_ValueResult as ValueResult,
      tableReservationsV1Reservation_universal_d_RangeResult as RangeResult,
      tableReservationsV1Reservation_universal_d_NestedResultsScalarResult as NestedResultsScalarResult,
      tableReservationsV1Reservation_universal_d_NestedResultValue as NestedResultValue,
      tableReservationsV1Reservation_universal_d_NestedResultValueResultOneOf as NestedResultValueResultOneOf,
      tableReservationsV1Reservation_universal_d_Results as Results,
      tableReservationsV1Reservation_universal_d_DateHistogramResult as DateHistogramResult,
      tableReservationsV1Reservation_universal_d_GroupByValueResults as GroupByValueResults,
      tableReservationsV1Reservation_universal_d_DateHistogramResults as DateHistogramResults,
      tableReservationsV1Reservation_universal_d_NestedResults as NestedResults,
      tableReservationsV1Reservation_universal_d_AggregationResults as AggregationResults,
      tableReservationsV1Reservation_universal_d_AggregationResultsResultOneOf as AggregationResultsResultOneOf,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      Empty$1 as Empty,
      tableReservationsV1Reservation_universal_d_RemoveReservationMigrationNotesRequest as RemoveReservationMigrationNotesRequest,
      tableReservationsV1Reservation_universal_d_RemoveReservationMigrationNotesResponse as RemoveReservationMigrationNotesResponse,
      MessageEnvelope$1 as MessageEnvelope,
      IdentificationData$1 as IdentificationData,
      IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf,
      WebhookIdentityType$1 as WebhookIdentityType,
      tableReservationsV1Reservation_universal_d_createReservation as createReservation,
      tableReservationsV1Reservation_universal_d_CreateReservationOptions as CreateReservationOptions,
      tableReservationsV1Reservation_universal_d_getReservation as getReservation,
      tableReservationsV1Reservation_universal_d_GetReservationOptions as GetReservationOptions,
      tableReservationsV1Reservation_universal_d_updateReservation as updateReservation,
      tableReservationsV1Reservation_universal_d_UpdateReservation as UpdateReservation,
      tableReservationsV1Reservation_universal_d_UpdateReservationOptions as UpdateReservationOptions,
      tableReservationsV1Reservation_universal_d_createHeldReservation as createHeldReservation,
      tableReservationsV1Reservation_universal_d_reserveReservation as reserveReservation,
      tableReservationsV1Reservation_universal_d_cancelReservation as cancelReservation,
      tableReservationsV1Reservation_universal_d_CancelReservationOptions as CancelReservationOptions,
      tableReservationsV1Reservation_universal_d_deleteReservation as deleteReservation,
      tableReservationsV1Reservation_universal_d_listReservations as listReservations,
      tableReservationsV1Reservation_universal_d_ListReservationsOptions as ListReservationsOptions,
      tableReservationsV1Reservation_universal_d_queryReservations as queryReservations,
      tableReservationsV1Reservation_universal_d_ReservationsQueryResult as ReservationsQueryResult,
      tableReservationsV1Reservation_universal_d_ReservationsQueryBuilder as ReservationsQueryBuilder,
      tableReservationsV1Reservation_universal_d_searchReservations as searchReservations,
    };
  }
  
  interface ReservationLocation {
      /**
       * Reservation location ID.
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of a reservation location. Each time the reservation location is modified, its `revision` changes. For an update operation to succeed, you must pass the latest revision. */
      revision?: string | null;
      /**
       * The date and time this reservation location was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * The date and time this reservation location was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Physical location details.
       *
       * Locations can be created and configured using the [Locations API](https://dev.wix.com/docs/rest/api-reference/business-info/locations/introduction)
       * or on the [Business Info](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsettings/business-info) page in the Dashboard.
       * @readonly
       */
      location?: Location;
      /** Reservation location configuration. */
      configuration?: Configuration;
      /**
       * Whether this reservation location's `location` is the default location of the business.
       * @readonly
       */
      default?: boolean | null;
      /**
       * Whether this reservation location's `location` is archived.
       * @readonly
       */
      archived?: boolean | null;
      /**
       * PRIVATE Seating plan ID.
       * @internal
       */
      seatingPlanId?: string | null;
      /**
       * Currency code. Must be valid ISO 4217 currency code (e.g., USD).
       * @internal
       * @readonly
       */
      currency?: string | null;
  }
  interface StreetAddress {
      /** Street number. */
      number?: string;
      /** Street name. */
      name?: string;
      /** Apartment number. */
      apt?: string;
  }
  /** Address geolocation information. */
  interface AddressLocation {
      /** Latitude of the location. Must be between -90 and 90. */
      latitude?: number | null;
      /** Longitude of the location. Must be between -180 and 180. */
      longitude?: number | null;
  }
  interface Address {
      /** 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
      country?: string | null;
      /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Postal or zip code. */
      postalCode?: string | null;
      /** Street address of the location. Includes street name, number, and apartment number in separate fields. */
      streetAddress?: StreetAddress;
      /** Full address of the location. */
      formatted?: string | null;
      /** Geographic coordinates of the location. */
      location?: AddressLocation;
  }
  /**
   * Time periods that this location is open for business. Includes a collection of TimePeriod instances.
   * Aligned with https://developers.google.com/my-business/reference/rest/v4/accounts.locations#businesshours
   * With a few minor adjustments
   */
  interface BusinessSchedule {
      periods?: TimePeriod[];
      /**
       * Time periods during which this location is open. Each period represents a range of hours during the week during which the location is
       * open.
       *
       * Max: 100 time periods
       */
      specialHourPeriod?: SpecialHourPeriod[];
  }
  /**
   * A span of time that the business is open,
   * starting on the specified open day/time and closing on the specified close day/time.
   * Closing time must occur after the opening time, for example later in the same day, or on a subsequent day.
   */
  interface TimePeriod {
      /** Day of the week this period starts on. */
      openDay?: DayOfWeek;
      /**
       * Time this period starts in 24hr [ISO 8601](http://www.w3.org/TR/NOTE-datetime) extended format (hh:mm). Valid values are `00:00-24:00`, where `24:00` represents
       * midnight at the end of the specified day field.
       */
      openTime?: string;
      /** Day of the week this period ends on. */
      closeDay?: DayOfWeek;
      /**
       * Time this period ends in 24hr [ISO 8601](http://www.w3.org/TR/NOTE-datetime) extended format (hh:mm). Valid values are `00:00-24:00`, where `24:00` represents
       * midnight at the end of the specified day field.
       *
       * This is the last time a reservation can be made at the restaurant, not the time the restaurant closes its doors.
       */
      closeTime?: string;
  }
  /** Enumerates the days of the week. */
  enum DayOfWeek {
      MONDAY = "MONDAY",
      TUESDAY = "TUESDAY",
      WEDNESDAY = "WEDNESDAY",
      THURSDAY = "THURSDAY",
      FRIDAY = "FRIDAY",
      SATURDAY = "SATURDAY",
      SUNDAY = "SUNDAY"
  }
  /** Set of time periods when a location's operational hours differ from its normal business hours. */
  interface SpecialHourPeriod {
      /** Start date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#combined_date_and_time_representations) format. */
      startDate?: string;
      /** End date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#combined_date_and_time_representations) format. */
      endDate?: string;
      /** Whether or not the location is closed during this period. */
      isClosed?: boolean;
      /** Additional details about the period. */
      comment?: string;
  }
  interface TableDefinition {
      /**
       * Table ID.
       * @readonly
       */
      _id?: string | null;
      /** Table name. */
      name?: string;
      /** Minimum number of seats. */
      seatsMin?: number;
      /** Maximum number of seats. */
      seatsMax?: number;
      /** Whether the table is active (available to be reserved). */
      isActive?: boolean | null;
  }
  interface TableCombination$1 {
      /**
       * Table combination ID.
       * @readonly
       */
      _id?: string | null;
      /** IDs of tables in the combination. */
      tableIds?: string[] | null;
      /** Minimum number of seats that can be reserved in this table combination. */
      seatsMin?: number;
      /** Maximum number of seats that can be reserved in this table combination. */
      seatsMax?: number;
      /** Whether the table combination is active (available to be reserved). */
      isActive?: boolean | null;
  }
  enum Unit {
      UNKNOWN = "UNKNOWN",
      MINUTES = "MINUTES",
      HOURS = "HOURS",
      DAYS = "DAYS"
  }
  /**
   * Seat pacing.
   * The maximum number of seats that can be filled by new reservations within a 15-minute period.
   * For example, setting a seat pacing of 15 would mean that between `10:00.000`-`10:14.999` there will be no more than 15 new seats available for reservation.
   */
  interface SeatPacing {
      /** Maximum number of seats that can be reserved every 15 minutes. */
      number?: number;
      /** Whether this option is enabled. */
      enabled?: boolean;
  }
  /**
   * Party pacing.
   * The maximum number of party reservations that can start within a 15-minute period.
   * For example, a party pacing of 5 would mean that no more than 5 parties could make a reservation for the period between `10:00.000`-`10:14.999`.
   */
  interface PartyPacing {
      /** Maximum number of new party reservations that can be made every 15 minutes. */
      number?: number;
      /** Whether this option is enabled. */
      enabled?: boolean;
  }
  /** The party size limits for a single reservation. */
  interface PartiesSize {
      /** Minimum number of seats a party can reserve. */
      min?: number;
      /** Maximum number of seats a party can reserve. */
      max?: number;
  }
  /** The party size limits for a single reservation. */
  interface PartySize {
      /** Minimum number of seats a party can reserve. */
      min?: number;
      /** Maximum number of seats a party can reserve. */
      max?: number;
  }
  /**
   * Reservation notice period.
   *
   * The period of time between making a reservation and that reservation's start time. Reservations cannot be made after the start of this period.
   */
  interface NoticePeriod {
      /** The quantity of the chosen time unit. */
      number?: number;
      /**
       * Time unit.
       *
       * Supported values:
       * 'UNKNOWN', 'MINUTES, 'HOURS', 'DAYS'.
       */
      unit?: Unit;
  }
  /** Turnover time rule. A turnover time is defined per party size range. */
  interface TurnoverTimeRule {
      /** Minimum number of seats to qualify for this rule. */
      seatsMin?: number;
      /** Maximum number of seats to qualify for this rule. */
      seatsMax?: number;
      /** Turnover time in minutes for qualifying parties. */
      minutes?: number;
  }
  /** Turnover rule. A turnover time is defined per party size range. */
  interface TurnoverRule {
      /** Minimum number of seats to qualify for this rule. */
      minSeats?: number;
      /** Maximum number of seats to qualify for this rule. */
      maxSeats?: number;
      /** Turnover time in minutes for qualifying parties. */
      minutes?: number;
  }
  /** Manual approval settings. */
  interface ManualApproval extends ManualApprovalValueOneOf {
      /** The minimum party size that requires manual approval. */
      partySizeThreshold?: number;
      /** Custom approvals provider id. */
      customApprovalsProviderId?: string;
      /** Whether manual approval is required for online reservations. */
      enabled?: boolean;
  }
  /** @oneof */
  interface ManualApprovalValueOneOf {
      /** The minimum party size that requires manual approval. */
      partySizeThreshold?: number;
      /** Custom approvals provider id. */
      customApprovalsProviderId?: string;
  }
  /** Type of the field. */
  enum FieldType {
      UNKNOWN = "UNKNOWN",
      TABLE = "TABLE",
      START_DATE = "START_DATE",
      END_DATE = "END_DATE",
      CREATED_DATE = "CREATED_DATE",
      UPDATED_DATE = "UPDATED_DATE",
      PARTY_SIZE = "PARTY_SIZE",
      FIRST_NAME = "FIRST_NAME",
      LAST_NAME = "LAST_NAME",
      EMAIL = "EMAIL",
      PHONE = "PHONE",
      ADDITIONAL_INFO = "ADDITIONAL_INFO",
      TEAM_MESSAGE = "TEAM_MESSAGE",
      CUSTOM_FIELD = "CUSTOM_FIELD",
      STATUS = "STATUS"
  }
  /** Terms and conditions. */
  interface TermsAndConditions extends TermsAndConditionsValueOneOf {
      /** Terms and conditions URL. */
      url?: string;
      /** Terms and conditions text. */
      text?: string | null;
      /**
       * Whether the terms and conditions are shown to the customer.
       *
       * Default: `false`
       */
      enabled?: boolean;
  }
  /** @oneof */
  interface TermsAndConditionsValueOneOf {
      /** Terms and conditions URL. */
      url?: string;
      /** Terms and conditions text. */
      text?: string | null;
  }
  /** Privacy policy. */
  interface PrivacyPolicy extends PrivacyPolicyValueOneOf {
      /** Privacy policy URL. */
      url?: string;
      /** Privacy policy text. */
      text?: string | null;
      /**
       * Whether the privacy policy is shown to the customer.
       *
       * Default: `false`
       */
      enabled?: boolean;
  }
  /** @oneof */
  interface PrivacyPolicyValueOneOf {
      /** Privacy policy URL. */
      url?: string;
      /** Privacy policy text. */
      text?: string | null;
  }
  /** Custom field definition. Definitions of the fields that are added to the reservation form. */
  interface CustomFieldDefinition {
      /**
       * Custom field ID.
       * @readonly
       */
      _id?: string | null;
      /** Custom field name. */
      name?: string;
      /**
       * Whether the custom field is required.
       *
       * Default: `false`
       */
      required?: boolean;
  }
  /** Email marketing checkbox. */
  interface EmailMarketingCheckbox {
      /**
       * Whether the checkbox is shown to the customer.
       *
       * Default: `false`
       */
      enabled?: boolean;
      /**
       * Whether the checkbox is checked by default.
       *
       * Default: `false`
       */
      checkedByDefault?: boolean;
  }
  interface OnlineReservations {
      /**
       * Seat pacing settings.
       *
       * The maximum number of seats that can be filled by new reservations within a 15-minute period.
       * For example, setting a seat pacing of 15 would mean that between `10:00.000`-`10:14.999` there will be no more than 15 new seats available for reservation.
       */
      seatPacing?: SeatPacing;
      /**
       * Party pacing settings.
       *
       * The maximum number of party reservations that can start within a 15-minute period.
       * For example, a party pacing of 5 would mean that no more than 5 parties could make a reservation for the period between `10:00.000`-`10:14.999`.
       */
      partyPacing?: PartyPacing;
      /**
       * PRIVATE Party size limits.
       * @internal
       */
      partiesSize?: PartiesSize;
      /** Party size limits for a reservation. */
      partySize?: PartySize;
      /**
       * Minimum reservation notice.
       *
       * The minimum amount of time that must be allowed between making a reservation and that reservation's start time.
       */
      minimumReservationNotice?: NoticePeriod;
      /**
       * Default turnover time in minutes.
       *
       * Turnover time is how much time a party is allotted for their entire reservation - from being seated to leaving the restaurant.
       */
      defaultTurnoverTime?: number | null;
      /**
       * Custom turnover time rules.
       *
       * This allows you to set different turnover times for different party sizes.
       */
      turnoverTimeRules?: TurnoverTimeRule[];
      /**
       * PRIVATE Turnover rules.
       * @internal
       */
      turnoverRules?: TurnoverRule[];
      /**
       * The location's business schedule.
       *
       * By default, the business schedule of a reservation location uses the values of its location's business schedule. However, after the first time a reservation location's business schedule has been modified, it stores and uses its own values and no longer mirrors its location's business schedule.
       * Limited to 100 time periods.
       */
      businessSchedule?: BusinessSchedule;
      /** Whether a phone number is shown. */
      showPhoneNumber?: boolean | null;
      /** Whether online reservations are enabled. */
      onlineReservationsEnabled?: boolean | null;
      /** Manual approval settings. */
      manualApproval?: ManualApproval;
      /**
       * Interval between timeslots in minutes.
       * @internal
       */
      timeSlotInterval?: number | null;
  }
  /** Reservation form settings. */
  interface ReservationForm {
      /** A message shown to the customer in the registration form. */
      submitMessage?: string | null;
      /** Whether to show policies (the terms and conditions, and the privacy policy) to the customer. */
      policiesEnabled?: boolean | null;
      /** Settings for displaying the terms and conditions. */
      termsAndConditions?: TermsAndConditions;
      /** Settings for displaying the privacy policy. */
      privacyPolicy?: PrivacyPolicy;
      /** Custom fields you wish to add to the registration form for the customer to fill in. */
      customFieldDefinitions?: CustomFieldDefinition[];
      /**
       * Whether a last_name is required in the reservation form.
       *
       * Default: `false`
       */
      lastNameRequired?: boolean | null;
      /**
       * Whether an email is required in the reservation form.
       *
       * Default: `false`
       */
      emailRequired?: boolean | null;
      /** Email marketing checkbox settings. */
      emailMarketingCheckbox?: EmailMarketingCheckbox;
  }
  /** My reservations field definition. */
  interface MyReservationsField {
      /** Field type. */
      fieldType?: FieldType;
      /**
       * Custom field ID.
       *
       * This should only be provided if the `fieldType` is `CUSTOM_FIELD`, in which case it is required and must match the ID of a custom field in the `customFieldDefinitions` array of the `reservationForm`.
       * @readonly
       */
      customFieldId?: string | null;
      /** Whether the field is shown. */
      shown?: boolean;
  }
  interface TableManagement {
      /** Table definitions. */
      tableDefinitions?: TableDefinition[];
      /** Deleted table definitions. */
      deletedTableDefinitions?: TableDefinition[];
      /** Table combinations. */
      tableCombinations?: TableCombination$1[];
  }
  /** Reservation payment. */
  interface ReservationPayment {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99) */
      value?: string;
      /** Minimum party size for payment policy application. */
      minPartySize?: number;
  }
  interface Location {
      /**
       * Location ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * PRIVATE Location name.
       * @internal
       * @readonly
       */
      name?: string | null;
      /**
       * PRIVATE Location description.
       * @internal
       * @readonly
       */
      description?: string | null;
      /**
       * PRIVATE Fax number for the location.
       * @internal
       * @readonly
       */
      fax?: string | null;
      /**
       * PRIVATE Timezone of the location in `America/New_York` format.
       * @internal
       * @readonly
       */
      timeZone?: string | null;
      /**
       * PRIVATE Email address for the location.
       * @internal
       */
      email?: string | null;
      /**
       * PRIVATE Phone number for the location.
       * @internal
       * @readonly
       */
      phone?: string | null;
      /**
       * PRIVATE Address of the location.
       * @internal
       * @readonly
       */
      address?: Address;
      /**
       * PRIVATE
       * The location's business schedule.
       * A business schedule is an operational timetable of the business. It is represented by an array of weekly recurring time periods when the location is open for business. The business schedule is limited to 100 time periods.
       * @internal
       * @readonly
       */
      businessSchedule?: BusinessSchedule;
  }
  interface Configuration {
      /** Settings for this location that are used to determine restaurant availability for reservations made online. */
      onlineReservations?: OnlineReservations;
      /** Reservation form settings. */
      reservationForm?: ReservationForm;
      /**
       * "My reservations" field details.
       *
       * These are the fields that appear in the "My reservations" section of the Table Reservations page on the restaurant's Wix site dashboard.
       */
      myReservationsFields?: MyReservationsField[];
      /** Table management settings. */
      tableManagement?: TableManagement;
      /**
       * Reservation payment.
       * @internal
       */
      reservationPayment?: ReservationPayment;
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
  interface GetReservationLocationRequest {
      /** ID of the ReservationLocation to retrieve. */
      reservationLocationId: string;
      /**
       * Predefined sets of fields to return.
       * @internal
       */
      fieldSet?: Set;
      /**
       * Array of named, predefined sets of projected fields to be returned.
       *
       * - `PUBLIC`: Returns `id`, `archived`, `location`, `default`, `configuration.onlineReservations.partiesSize`, `configuration.onlineReservations.minimumReservationNotice`, `configuration.onlineReservations.businessSchedule`,
       * `configuration.onlineReservations.showPhoneNumber`, `configuration.onlineReservations.onlineReservationsEnabled`, `configuration.onlineReservations.manualApproval`, `configuration.reservationForm.submitMessage`,
       * `configuration.reservationForm.policiesEnabled`, `configuration.reservationForm.termsAndConditions`, `configuration.reservationForm.privacyPolicy`,
       * `configuration.reservationForm.customFieldDefinitions`, `configuration.reservationForm.lastNameRequired`, `configuration.reservationForm.emailRequired`, `configuration.reservationForm.emailMarketingCheckbox`.
       * - `FULL`: Returns all fields.
       *
       * Default: `PUBLIC`.
       */
      fieldsets?: Set[];
  }
  enum Set {
      PUBLIC = "PUBLIC",
      FULL = "FULL"
  }
  interface GetReservationLocationResponse {
      /** The retrieved reservation location. */
      reservationLocation?: ReservationLocation;
  }
  interface UpdateReservationLocationRequest {
      /** ReservationLocation to be updated, may be partial. */
      reservationLocation: ReservationLocation;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateReservationLocationResponse {
      /** The updated reservation location. */
      reservationLocation?: ReservationLocation;
  }
  interface TablesDeleted {
      /** ID of the affected reservation location. */
      reservationLocationId?: string;
      /** IDs of deleted tables. */
      tableIds?: string[];
  }
  interface QueryReservationLocationsRequest {
      /** Query options. */
      query: QueryV2;
      /**
       * Predefined sets of fields to return.
       * @internal
       */
      fieldSet?: Set;
      /**
       * Array of named, predefined sets of projected fields to be returned.
       *
       * - `PUBLIC`: Returns `id`, `archived`, `location`, `default`, `configuration.onlineReservations.partiesSize`, `configuration.onlineReservations.minimumReservationNotice`, `configuration.onlineReservations.businessSchedule`,
       * `configuration.onlineReservations.showPhoneNumber`, `configuration.onlineReservations.onlineReservationsEnabled`, `configuration.onlineReservations.manualApproval`, `configuration.reservationForm.submitMessage`,
       * `configuration.reservationForm.policiesEnabled`, `configuration.reservationForm.termsAndConditions`, `configuration.reservationForm.privacyPolicy`,
       * `configuration.reservationForm.customFieldDefinitions`, `configuration.reservationForm.lastNameRequired`, `configuration.reservationForm.emailRequired`, `configuration.reservationForm.emailMarketingCheckbox`.
       * - `FULL`: Returns all fields.
       *
       * Default: `PUBLIC`.
       */
      fieldsets?: Set[];
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       *
       * For a detailed list of supported operations, see the [Supported Filters and Sorting](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/reservations/sorting-and-filtering) article.
       * To learn how to query reservations, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
  }
  interface Sorting {
      /** Name of the field to sort by. */
      fieldName?: string;
      /**
       * Sort order.
       *
       * Use `ASC` for ascending order or `DESC` for descending order. Defaults to `ASC`.
       */
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
  interface QueryReservationLocationsResponse {
      /** List of reservation locations */
      reservationLocations?: ReservationLocation[];
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface PagingMetadataV2 {
      /** Offset that was requested. */
      offset?: number | null;
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
  interface ListReservationLocationsRequest {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      paging?: CursorPaging;
      /** Sorting for the locations list. */
      sort?: Sorting;
      /**
       * Predefined sets of fields to return.
       * @internal
       */
      fieldSet?: Set;
      /**
       * Array of named, predefined sets of projected fields to be returned.
       *
       * - `PUBLIC`: Returns `id`, `archived`, `location`, `default`, `configuration.onlineReservations.partiesSize`, `configuration.onlineReservations.minimumReservationNotice`, `configuration.onlineReservations.businessSchedule`,
       * `configuration.onlineReservations.showPhoneNumber`, `configuration.onlineReservations.onlineReservationsEnabled`, `configuration.onlineReservations.manualApproval`, `configuration.reservationForm.submitMessage`,
       * `configuration.reservationForm.policiesEnabled`, `configuration.reservationForm.termsAndConditions`, `configuration.reservationForm.privacyPolicy`,
       * `configuration.reservationForm.customFieldDefinitions`, `configuration.reservationForm.lastNameRequired`, `configuration.reservationForm.emailRequired`, `configuration.reservationForm.emailMarketingCheckbox`.
       * - `FULL`: Returns all fields.
       *
       * Default: `PUBLIC`.
       */
      fieldsets?: Set[];
  }
  interface ListReservationLocationsResponse {
      /** Locations list. */
      reservationLocations?: ReservationLocation[];
      /** Metadata for the paginated results. */
      pagingMetadata?: CursorPagingMetadata;
  }
  interface CursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface DeleteOrphanReservationLocationRequest {
      /** Id of the ReservationLocation. */
      reservationLocationId?: string;
  }
  interface DeleteOrphanReservationLocationResponse {
  }
  interface MigrateOldRestaurantSettingsRequest {
      /** Mode. */
      mode?: Mode;
      /** Override not default. */
      overrideNotDefault?: boolean;
  }
  enum Mode {
      /** DRY RUN. */
      UNDEFINED = "UNDEFINED",
      DRY_RUN = "DRY_RUN",
      MIGRATE = "MIGRATE",
      FORCE_MIGRATE = "FORCE_MIGRATE"
  }
  interface MigrateOldRestaurantSettingsResponse {
      /** Migration results. */
      migrationResults?: MigrationResult[];
  }
  interface ParsedSettings {
      futureDelayMins?: number | null;
      partySizeMin?: number | null;
      partySizeMax?: number | null;
      weeklySchedule?: OldScheduleInterval[];
      customFields?: OldCustomField[];
      privacyPolicy?: OldPolicy;
      termsAndConditions?: OldTerms;
      scheduleExceptions?: OldScheduleException[];
      available?: boolean | null;
      locale?: string | null;
  }
  interface OldScheduleInterval {
      durationMins?: number;
      minuteOfWeek?: number;
  }
  interface OldCustomField {
      label?: string;
      required?: boolean;
  }
  interface OldPolicy {
      value?: string;
      isPlainText?: boolean;
  }
  interface OldTerms {
      value?: string;
      isPlainText?: boolean;
  }
  interface OldScheduleException {
      available?: boolean;
      comment?: string | null;
      start?: OldInstant;
      end?: OldInstant;
  }
  interface OldInstant {
      year?: number;
      month?: number;
      day?: number;
      hour?: number;
      minute?: number;
  }
  interface MigrationParsingError {
      /** Field. */
      path?: string;
      /** Message. */
      message?: string;
      /** Target. */
      target?: Record<string, any> | null;
  }
  interface MigrationResult {
      /** The migrated ReservationLocation. */
      reservationLocation?: ReservationLocation;
      /** Old settings. */
      oldSettings?: Record<string, any> | null;
      /** Parsed settings. */
      parsedSettings?: ParsedSettings;
      /** Migration parsing errors. */
      migrationParsingErrors?: MigrationParsingError[];
  }
  interface CheckReservationLocationsCreatedRequest {
  }
  interface CheckReservationLocationsCreatedResponse {
      /** Reservation locations created. */
      created?: boolean;
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
  /** Encapsulates all details written to the Greyhound topic when a site's properties are updated. */
  interface SitePropertiesNotification {
      /** The site ID for which this update notification applies. */
      metasiteId?: string;
      /** The actual update event. */
      event?: SitePropertiesEvent;
      /** A convenience set of mappings from the MetaSite ID to its constituent services. */
      translations?: Translation[];
      /** Context of the notification */
      changeContext?: ChangeContext;
  }
  /** The actual update event for a particular notification. */
  interface SitePropertiesEvent {
      /** Version of the site's properties represented by this update. */
      version?: number;
      /**
       * Set of properties that were updated - corresponds to the fields in "properties".
       * @internal
       */
      fields?: string[];
      /** Updated properties. */
      properties?: Properties;
  }
  interface Properties {
      /** Site categories. */
      categories?: Categories;
      /** Site locale. */
      locale?: Locale;
      /**
       * Site language.
       *
       * Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * Site currency format used to bill customers.
       *
       * Three-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       */
      paymentCurrency?: string | null;
      /** Timezone in `America/New_York` format. */
      timeZone?: string | null;
      /** Email address. */
      email?: string | null;
      /** Phone number. */
      phone?: string | null;
      /** Fax number. */
      fax?: string | null;
      /** Address. */
      address?: V4Address;
      /** Site display name. */
      siteDisplayName?: string | null;
      /** Business name. */
      businessName?: string | null;
      /** Path to the site's logo in Wix Media (without Wix Media base URL). */
      logo?: string | null;
      /** Site description. */
      description?: string | null;
      /**
       * Business schedule. Regular and exceptional time periods when the business is open or the service is available.
       *
       * __Note:__ Not supported by Wix Bookings.
       */
      businessSchedule?: V4BusinessSchedule;
      /** Supported languages of a site and the primary language. */
      multilingual?: Multilingual;
      /** Cookie policy the site owner defined for their site (before the users interacts with/limits it). */
      consentPolicy?: ConsentPolicy;
      /**
       * Supported values: `FITNESS SERVICE`, `RESTAURANT`, `BLOG`, `STORE`, `EVENT`, `UNKNOWN`.
       *
       * Site business type.
       */
      businessConfig?: string | null;
      /** External site url that uses Wix as its headless business solution */
      externalSiteUrl?: string | null;
      /** Track clicks analytics */
      trackClicksAnalytics?: boolean;
  }
  interface Categories {
      /** Primary site category. */
      primary?: string;
      /** Secondary site category. */
      secondary?: string[];
      /** Business Term Id */
      businessTermId?: string | null;
  }
  interface Locale {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Two-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string;
  }
  interface V4Address {
      /** Street name. */
      street?: string;
      /** City name. */
      city?: string;
      /** Two-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
      country?: string;
      /** State. */
      state?: string;
      /** Zip or postal code. */
      zip?: string;
      /** Extra information to be displayed in the address. */
      hint?: AddressHint;
      /** Whether this address represents a physical location. */
      isPhysical?: boolean;
      /** Google-formatted version of this address. */
      googleFormattedAddress?: string;
      /** Street number. */
      streetNumber?: string;
      /** Apartment number. */
      apartmentNumber?: string;
      /** Geographic coordinates of location. */
      coordinates?: GeoCoordinates;
  }
  /**
   * Extra information on displayed addresses.
   * This is used for display purposes. Used to add additional data about the address, such as "In the passage".
   * Free text. In addition the user can state where he wants that additional description - before, after, or instead
   * the address string.
   */
  interface AddressHint {
      /** Extra text displayed next to, or instead of, the actual address. */
      text?: string;
      /** Where the extra text should be displayed. */
      placement?: PlacementType;
  }
  /** Where the extra text should be displayed: before, after or instead of the actual address. */
  enum PlacementType {
      BEFORE = "BEFORE",
      AFTER = "AFTER",
      REPLACE = "REPLACE"
  }
  /** Geocoordinates for a particular address. */
  interface GeoCoordinates {
      /** Latitude of the location. Must be between -90 and 90. */
      latitude?: number;
      /** Longitude of the location. Must be between -180 and 180. */
      longitude?: number;
  }
  /** Business schedule. Regular and exceptional time periods when the business is open or the service is available. */
  interface V4BusinessSchedule {
      /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
      periods?: V4TimePeriod[];
      /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
      specialHourPeriod?: V4SpecialHourPeriod[];
  }
  /** Weekly recurring time periods when the business is regularly open or the service is available. */
  interface V4TimePeriod {
      /** Day of the week the period starts on. */
      openDay?: V4DayOfWeek;
      /**
       * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
       * midnight at the end of the specified day.
       */
      openTime?: string;
      /** Day of the week the period ends on. */
      closeDay?: V4DayOfWeek;
      /**
       * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
       * midnight at the end of the specified day.
       *
       * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
       */
      closeTime?: string;
  }
  /** Enumerates the days of the week. */
  enum V4DayOfWeek {
      MONDAY = "MONDAY",
      TUESDAY = "TUESDAY",
      WEDNESDAY = "WEDNESDAY",
      THURSDAY = "THURSDAY",
      FRIDAY = "FRIDAY",
      SATURDAY = "SATURDAY",
      SUNDAY = "SUNDAY"
  }
  /** Exception to the business's regular hours. The business can be open or closed during the exception. */
  interface V4SpecialHourPeriod {
      /** Start date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      startDate?: string;
      /** End date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      endDate?: string;
      /**
       * Whether the business is closed (or the service is not available) during the exception.
       *
       * Default: `true`.
       */
      isClosed?: boolean;
      /** Additional info about the exception. For example, "We close earlier on New Year's Eve." */
      comment?: string;
  }
  interface Multilingual {
      /** Supported languages list. */
      supportedLanguages?: SupportedLanguage[];
      /** Whether to redirect to user language. */
      autoRedirect?: boolean;
  }
  interface SupportedLanguage {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Locale. */
      locale?: Locale;
      /** Whether the supported language is the primary language for the site. */
      isPrimary?: boolean;
      /** Language icon. */
      countryCode?: string;
      /** How the language will be resolved. For internal use. */
      resolutionMethod?: ResolutionMethod;
  }
  enum ResolutionMethod {
      QUERY_PARAM = "QUERY_PARAM",
      SUBDOMAIN = "SUBDOMAIN",
      SUBDIRECTORY = "SUBDIRECTORY"
  }
  interface ConsentPolicy {
      /** Whether the site uses cookies that are essential to site operation. */
      essential?: boolean | null;
      /** Whether the site uses cookies that affect site performance and other functional measurements. */
      functional?: boolean | null;
      /** Whether the site uses cookies that collect analytics about how the site is used (in order to improve it). */
      analytics?: boolean | null;
      /** Whether the site uses cookies that collect information allowing better customization of the experience for a current visitor. */
      advertising?: boolean | null;
      /** CCPA compliance flag. */
      dataToThirdParty?: boolean | null;
  }
  /** A single mapping from the MetaSite ID to a particular service. */
  interface Translation {
      /** The service type. */
      serviceType?: string;
      /** The application definition ID; this only applies to services of type ThirdPartyApps. */
      appDefId?: string;
      /** The instance ID of the service. */
      instanceId?: string;
  }
  interface ChangeContext extends ChangeContextPayloadOneOf {
      /** Properties were updated. */
      propertiesChange?: PropertiesChange;
      /** Default properties were created on site creation. */
      siteCreated?: V4SiteCreated;
      /** Properties were cloned on site cloning. */
      siteCloned?: SiteCloned;
  }
  /** @oneof */
  interface ChangeContextPayloadOneOf {
      /** Properties were updated. */
      propertiesChange?: PropertiesChange;
      /** Default properties were created on site creation. */
      siteCreated?: V4SiteCreated;
      /** Properties were cloned on site cloning. */
      siteCloned?: SiteCloned;
  }
  interface PropertiesChange {
  }
  interface V4SiteCreated {
      /** Origin template site id. */
      originTemplateId?: string | null;
  }
  interface SiteCloned {
      /** Origin site id. */
      originMetaSiteId?: string;
  }
  interface FeatureEvent extends FeatureEventEventOneOf {
      /**
       * Information about an event that makes a feature eligible to the user.
       * Triggered for example, for new features or when a feature is reassigned
       * to an account or a site.
       */
      enabled?: FeatureEnabled;
      /**
       * Information about an event that disables a feature for the user.
       * Triggered for example, when a feature is unassigned from a site,
       * reassigned to a different site, or the user switched to a different contract.
       */
      disabled?: FeatureDisabled;
      /**
       * Information about an event that updates a feature. An `updated` event
       * is triggered for example by the
       * [Report Quota Usage](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/report-quota-usage)
       * and [Reset Usage Counter](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/reset-usage-counter)
       * endpoints.
       */
      updated?: FeatureUpdated;
      /**
       * Information about an event that cancels a feature for the user.
       * Triggered for example, when a feature is canceled, transferred to
       * another account, or the user switched to a different contract.
       */
      cancelled?: FeatureCancelled;
      /**
       * Timestamp of the event in
       * [UTC time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
       */
      timestamp?: Date;
  }
  /** @oneof */
  interface FeatureEventEventOneOf {
      /**
       * Information about an event that makes a feature eligible to the user.
       * Triggered for example, for new features or when a feature is reassigned
       * to an account or a site.
       */
      enabled?: FeatureEnabled;
      /**
       * Information about an event that disables a feature for the user.
       * Triggered for example, when a feature is unassigned from a site,
       * reassigned to a different site, or the user switched to a different contract.
       */
      disabled?: FeatureDisabled;
      /**
       * Information about an event that updates a feature. An `updated` event
       * is triggered for example by the
       * [Report Quota Usage](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/report-quota-usage)
       * and [Reset Usage Counter](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/reset-usage-counter)
       * endpoints.
       */
      updated?: FeatureUpdated;
      /**
       * Information about an event that cancels a feature for the user.
       * Triggered for example, when a feature is canceled, transferred to
       * another account, or the user switched to a different contract.
       */
      cancelled?: FeatureCancelled;
  }
  /** Feature created or enabled after disabled state */
  interface FeatureEnabled extends FeatureEnabledReasonOneOf {
      /** Information about a transfer from another account. */
      transferredFromAnotherAccount?: TransferredFromAnotherAccountReason;
      /** Information about a transfer from another site. */
      reassignedFromSite?: ReassignedFromSiteReason;
      /** Information about a feature that hadn't been assigned to site. */
      assignedFromFloating?: AssignedFromFloatingReason;
      /** Information about the new feature. */
      newFeature?: NewFeatureReason;
      /** Information about the contract switch. */
      contractSwitched?: ContractSwitchedReason;
      /** Information about the manually created features. */
      manualFeatureCreation?: ManualFeatureCreationReason;
      /** Information about a feature that was migrated from legacy. */
      migratedFromLegacy?: MigratedFromLegacyReason;
      /** Enabled feature. */
      feature?: Feature;
      /**
       * Information about a transfer from another account.
       * __Deprecated__. Use `reason.transferred_from_another_account` instead.
       */
      transferredFromAccount?: string | null;
      /**
       * Information about a transfer from another site.
       * __Deprecated__. Use `reason.reassigned_from_site` instead.
       */
      reassignedFromMetasite?: string | null;
  }
  /** @oneof */
  interface FeatureEnabledReasonOneOf {
      /** Information about a transfer from another account. */
      transferredFromAnotherAccount?: TransferredFromAnotherAccountReason;
      /** Information about a transfer from another site. */
      reassignedFromSite?: ReassignedFromSiteReason;
      /** Information about a feature that hadn't been assigned to site. */
      assignedFromFloating?: AssignedFromFloatingReason;
      /** Information about the new feature. */
      newFeature?: NewFeatureReason;
      /** Information about the contract switch. */
      contractSwitched?: ContractSwitchedReason;
      /** Information about the manually created features. */
      manualFeatureCreation?: ManualFeatureCreationReason;
      /** Information about a feature that was migrated from legacy. */
      migratedFromLegacy?: MigratedFromLegacyReason;
  }
  interface Feature extends FeatureQuantityInfoOneOf {
      /** Deprecated. Use `enabled` instead. */
      booleanFeature?: BooleanFeature;
      /** Deprecated. Use `quotaInfo` instead. */
      quotaFeature?: QuotaFeature;
      /**
       * ID of the feature. __Note:__ Isn't unique. For example, all features that
       * are available to free Wix accounts or site in some capacity have
       * `{"id": "DEFAULT"}`. Use `uniqueName` as unique identifier for a feature.
       * @readonly
       */
      _id?: string;
      /**
       * Unique name of the feature. Only lower case letters, numbers, and dashes
       * `-` are supported. Used in the endpoints of the
       * [Features Manager API](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/introduction)
       * to specify the feature. Not visible to customers. We recommend to start
       * the unique name with a prefix describing your organization or Wix company.
       * For example, `bookings` or `crm`.
       *
       * Min: 2 characters
       * Max: 50 characters
       */
      uniqueName?: string;
      /**
       * Information about whether the feature belongs to a Wix account or site.
       * Account features have `context.userId`. Site features have `context.metaSiteId` in case
       * they're assigned to a specific site. Site features that aren't assigned to
       * a specific site have neither ID.
       */
      context?: FeatureContext;
      /**
       * Deprecated.
       * @readonly
       */
      createdAt?: Date;
      /**
       * Deprecated.
       * @readonly
       */
      updatedAt?: Date;
      /**
       * Information about how often customers can use the feature during a specific
       * period. Available only for quota features.
       */
      quotaInfo?: QuotaInfo;
      /**
       * Whether the customer is currently allowed to use the feature.
       * `true` means that the customer can use the feature. This means a boolean
       * feature is active or a quota feature has remaining usage.
       * `false` means that the customer can't use the feature.
       * This means a boolean feature isn't active or a quota feature doesn't
       * have remaining usage.
       */
      enabled?: boolean;
      /**
       * ID of the [subscription](https://bo.wix.com/wix-docs/rest/premium/premium-subscriptions-manager/subscription-object)
       * to which the feature instance belongs.
       */
      subscriptionId?: string | null;
      /**
       * Metadata of the feature. Wix Premium uses the metadata object to indicate
       * that customers who purchase a product with the feature also get
       * access to an additional product. For these bundled products `metadata`
       * looks like this: `{"tpa": "{"appDefId": "sample-app-def-id-1234567890", "vendorProductId": "sample-productId"}}"`.
       * But you can use the `metadata` property for other purposes, too.
       */
      metadata?: Record<string, string>;
  }
  /** @oneof */
  interface FeatureQuantityInfoOneOf {
      /** Deprecated. Use `enabled` instead. */
      booleanFeature?: BooleanFeature;
      /** Deprecated. Use `quotaInfo` instead. */
      quotaFeature?: QuotaFeature;
  }
  /**
   * Context this feature is currently connected to.
   * Note: Do not confuse with feature scope which is configured in the product catalog
   * and defines in which context the product can be used
   */
  interface FeatureContext {
      /**
       * ID of the Wix account that the feature instance belongs to.
       * Available for both site and account level feature instances.
       */
      userId?: string;
      /**
       * ID of the meta site that the feature instance is assigned to.
       * Only available for site level feature instances that are assigned to a Wix
       * site. Not available for account level and unassigned site level feature
       * instances.
       */
      metaSiteId?: string | null;
  }
  /**
   * A feature that can be either "enabled" or "disabled". The default/freemium setting is always OFF, and the premium setting is always ON (meaning, unlimited usage without tracking).
   * A boolean feature is similar to a quantitive feature with a default limit of 0 and UNLIMITED premium limit (although a bit simplified).
   */
  interface BooleanFeature {
  }
  /** A feature with a periodic usage limitation. The default limit is defined in the Feature Spec, the Premium limits are defined in the respective ProductFeature. */
  interface QuotaFeature {
      /** Default (or Freemium) quota limitation. if left undefined the free feature has unlimited amount. */
      limit?: string | null;
      /** Periodic time-frame to reset the usage counter. You may use NO_PERIOD if counter shouldn't be reset. */
      period?: FeaturePeriod;
      /** Usage measurement units (seconds? MBs? unitless?). Usage reported will be counted in multiples of this basic unit. */
      units?: string | null;
  }
  /** Determines the reset cycle of the feature usage. */
  enum FeaturePeriod {
      NO_PERIOD = "NO_PERIOD",
      MILLISECOND = "MILLISECOND",
      SECOND = "SECOND",
      MINUTE = "MINUTE",
      HOUR = "HOUR",
      DAY = "DAY",
      WEEK = "WEEK",
      MONTH = "MONTH",
      YEAR = "YEAR"
  }
  interface QuotaInfo {
      /**
       * How often the customer is allowed to use the feature during the specified
       * period. `null` means that the customer has unlimited access to the feature.
       */
      limit?: string | null;
      /**
       * Time frame for the usage limitation. `NO_PERIOD` means that `remainingUsage`
       * isn't automatically reset to the feature's `limit` after a specific period.
       * You may still manually call
       * [Reset Usage Counter](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/reset-usage-counter).
       */
      period?: FeaturePeriod;
      /**
       * How often the customer has used the feature during the current
       * period.
       */
      currentUsage?: string;
      /**
       * How often the customer can still use the feature during the current
       * period. `null` means that the customer has unlimited access to the feature.
       */
      remainingUsage?: string | null;
  }
  /** Subscription transferred from another account, features on the current account were enabled. */
  interface TransferredFromAnotherAccountReason {
      /** Information about a transfer from another account. */
      transferredFromAccount?: string;
  }
  /** Subscription moved from one site to another in the same account, features enabled on the target site */
  interface ReassignedFromSiteReason {
      /** Information about a transfer from another site. */
      reassignedFromMetasite?: string;
  }
  /** Subscription was floating and assigned to site, features enabled on the target site */
  interface AssignedFromFloatingReason {
  }
  /** New subscription created and features created as enabled */
  interface NewFeatureReason {
  }
  /** Subscription was upgraded or downgraded, as a result new features enabled, missing features disabled , quantities are updated */
  interface ContractSwitchedReason {
  }
  /** a call to CreateFeature in features-writer, creates feature that is not attached to subscription */
  interface ManualFeatureCreationReason {
  }
  /** Subscription created due to migration from old premium model */
  interface MigratedFromLegacyReason {
  }
  /** Feature disabled and can be enabled in the future */
  interface FeatureDisabled extends FeatureDisabledReasonOneOf {
      /** Information about a feature that's no longer assigned to a site. */
      unassingedToFloating?: UnAssingedToFloatingReason;
      /**
       * Information about a feature that's been replaced by a feature from a
       * different subscription.
       */
      replacedByAnotherSubscription?: ReplacedByAnotherSubscriptionReason;
      /**
       * Information about a feature that's been reassigned to a different
       * site.
       */
      reassignedToAnotherSite?: ReassignedToAnotherSiteReason;
      /**
       * Disabled feature. Includes information about the feature's new state,
       * possibly its new context.
       */
      feature?: Feature;
      /** ID of the meta site for which the feature has been disabled. */
      metaSiteId?: string | null;
  }
  /** @oneof */
  interface FeatureDisabledReasonOneOf {
      /** Information about a feature that's no longer assigned to a site. */
      unassingedToFloating?: UnAssingedToFloatingReason;
      /**
       * Information about a feature that's been replaced by a feature from a
       * different subscription.
       */
      replacedByAnotherSubscription?: ReplacedByAnotherSubscriptionReason;
      /**
       * Information about a feature that's been reassigned to a different
       * site.
       */
      reassignedToAnotherSite?: ReassignedToAnotherSiteReason;
  }
  /** Subscription was unassigned from the site and moved into floating state */
  interface UnAssingedToFloatingReason {
  }
  /** Another subscription was assigned to the site, causing existing features on this site to be disabled */
  interface ReplacedByAnotherSubscriptionReason {
  }
  /** Subscription was assigned to another site, causing  features on the origin  site to be disabled. */
  interface ReassignedToAnotherSiteReason {
      /** Information about a transfer to the site. */
      reassignedToMetasite?: string;
  }
  /** Feature updated, for example Quota was increased due to upgrade */
  interface FeatureUpdated extends FeatureUpdatedPreviousQuantityInfoOneOf, FeatureUpdatedReasonOneOf {
      /** Information about a feature that doesn't have a usage quota. */
      booleanFeature?: BooleanFeature;
      /** Information about a feature that has a usage quota. */
      quotaFeature?: QuotaFeature;
      /** Information about the contract switch. */
      contractSwitched?: ContractSwitchedReason;
      /**
       * Updated feature. Includes information about the feature's new state and
       * possibly its new context.
       */
      feature?: Feature;
  }
  /** @oneof */
  interface FeatureUpdatedPreviousQuantityInfoOneOf {
      /** Information about a feature that doesn't have a usage quota. */
      booleanFeature?: BooleanFeature;
      /** Information about a feature that has a usage quota. */
      quotaFeature?: QuotaFeature;
  }
  /** @oneof */
  interface FeatureUpdatedReasonOneOf {
      /** Information about the contract switch. */
      contractSwitched?: ContractSwitchedReason;
  }
  /** Feature was permanently cancelled */
  interface FeatureCancelled extends FeatureCancelledReasonOneOf {
      /** Information about a transfer to the account. */
      transferredToAnotherAccount?: TransferredToAnotherAccountReason;
      /** Information about the contract switch. */
      contractSwitched?: ContractSwitchedReason;
      /** Information about the feature cancellation. */
      cancelRequest?: CancelRequestedReason;
      /** Canceled feature. */
      feature?: Feature;
      /**
       * Information about a transfer to the account.
       * __Deprecated__. Use `reason.transferred_to_account` instead.
       */
      transferredToAccount?: string | null;
  }
  /** @oneof */
  interface FeatureCancelledReasonOneOf {
      /** Information about a transfer to the account. */
      transferredToAnotherAccount?: TransferredToAnotherAccountReason;
      /** Information about the contract switch. */
      contractSwitched?: ContractSwitchedReason;
      /** Information about the feature cancellation. */
      cancelRequest?: CancelRequestedReason;
  }
  /** Subscription was transferred to another account, features in the origin account were cancelled */
  interface TransferredToAnotherAccountReason {
      /** Information about a transfer to the account. */
      transferredToAccount?: string;
  }
  /** Cancellation was requested from the subscription manager api, might be a result of billing event, or direct call */
  interface CancelRequestedReason {
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
  /**
   * Retrieves a reservation location by ID.
   *
   * The `FULL` fieldset can only be retrieved by users with the `READ RESERVATION LOCATIONS (FULL)` or `MANAGE RESERVATION LOCATIONS` permission scopes.
   * @param reservationLocationId - ID of the ReservationLocation to retrieve.
   * @public
   * @documentationMaturity preview
   * @requiredField reservationLocationId
   * @param options - An object representing the available options for retrieving a reservation location.
   * @returns The retrieved reservation location.
   */
  function getReservationLocation(reservationLocationId: string, options?: GetReservationLocationOptions): Promise<ReservationLocation>;
  interface GetReservationLocationOptions {
      /**
       * Predefined sets of fields to return.
       * @internal
       */
      fieldSet?: Set;
      /**
       * Array of named, predefined sets of projected fields to be returned.
       *
       * - `PUBLIC`: Returns `id`, `archived`, `location`, `default`, `configuration.onlineReservations.partiesSize`, `configuration.onlineReservations.minimumReservationNotice`, `configuration.onlineReservations.businessSchedule`,
       * `configuration.onlineReservations.showPhoneNumber`, `configuration.onlineReservations.onlineReservationsEnabled`, `configuration.onlineReservations.manualApproval`, `configuration.reservationForm.submitMessage`,
       * `configuration.reservationForm.policiesEnabled`, `configuration.reservationForm.termsAndConditions`, `configuration.reservationForm.privacyPolicy`,
       * `configuration.reservationForm.customFieldDefinitions`, `configuration.reservationForm.lastNameRequired`, `configuration.reservationForm.emailRequired`, `configuration.reservationForm.emailMarketingCheckbox`.
       * - `FULL`: Returns all fields.
       *
       * Default: `PUBLIC`.
       */
      fieldsets?: Set[];
  }
  /**
   * Updates a reservation location. Supports partial updates.
   *
   * Each time the reservation location is updated, `revision` increments by 1. The existing revision must be included when updating the reservation location. This ensures you're working with the latest reservation location information, and it prevents unintended overwrites.
   *
   * You cannot use this endpoint to change a reservation location's `location` object. Attempting to do so will cause the server to return an application error.
   * @param _id - Reservation location ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField reservationLocation
   * @requiredField reservationLocation.configuration.onlineReservations.manualApproval
   * @requiredField reservationLocation.revision
   * @param reservationLocation - Reservation location information to update.
   * @adminMethod
   * @returns The updated reservation location.
   */
  function updateReservationLocation(_id: string | null, reservationLocation: UpdateReservationLocation, options?: UpdateReservationLocationOptions): Promise<ReservationLocation>;
  interface UpdateReservationLocation {
      /**
       * Reservation location ID.
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of a reservation location. Each time the reservation location is modified, its `revision` changes. For an update operation to succeed, you must pass the latest revision. */
      revision?: string | null;
      /**
       * The date and time this reservation location was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * The date and time this reservation location was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Physical location details.
       *
       * Locations can be created and configured using the [Locations API](https://dev.wix.com/docs/rest/api-reference/business-info/locations/introduction)
       * or on the [Business Info](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsettings/business-info) page in the Dashboard.
       * @readonly
       */
      location?: Location;
      /** Reservation location configuration. */
      configuration?: Configuration;
      /**
       * Whether this reservation location's `location` is the default location of the business.
       * @readonly
       */
      default?: boolean | null;
      /**
       * Whether this reservation location's `location` is archived.
       * @readonly
       */
      archived?: boolean | null;
      /**
       * PRIVATE Seating plan ID.
       * @internal
       */
      seatingPlanId?: string | null;
      /**
       * Currency code. Must be valid ISO 4217 currency code (e.g., USD).
       * @internal
       * @readonly
       */
      currency?: string | null;
  }
  interface UpdateReservationLocationOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Creates a query to retrieve a list of reservation locations.
   *
   *
   * The `queryReservationLocations()` function builds a query to retrieve a list of reservation locations and returns a [`ReservationLocationsQueryBuilder`](#ReservationLocationsQueryBuilder) object.
   *
   * The returned object contains the query definition, which is used to run the query using the [find()](#ReservationLocationsQueryBuilder/find) function.
   *
   * You can refine the query by chaining `ReservationLocationsQueryBuilder` functions onto the query. `ReservationLocationsQueryBuilder` functions enable you to filter, sort, and control the results that `queryReservationLocations()` returns.
   *
   * `queryReservationLocations()` runs with the following `ReservationLocationsQueryBuilder` defaults, which you can override:
   *
   * * [`skip(0)`](#ReservationLocationsQueryBuilder/skip)
   * * [`limit(50)`](#ReservationLocationsQueryBuilder/limit)
   * * [`descending('_createdDate')`](#ReservationLocationsQueryBuilder/descending)
   *
   * The following `ReservationLocationsQueryBuilder` functions are supported for `queryReservationLocations()`. For a full description of the reservation location object, see the object returned for the [`items`](#ReservationLocationsQueryResult/items) property in [`ReservationLocationsQueryResult`](#ReservationLocationsQueryResult).
   * @public
   * @documentationMaturity preview
   * @param options - An object representing the available options for querying reservation locations.
   */
  function queryReservationLocations(options?: QueryReservationLocationsOptions): ReservationLocationsQueryBuilder;
  interface QueryReservationLocationsOptions {
      /**
       * Predefined sets of fields to return.
       * @internal
       */
      fieldSet?: Set | undefined;
      /**
       * Array of named, predefined sets of projected fields to be returned.
       *
       * - `PUBLIC`: Returns `id`, `archived`, `location`, `default`, `configuration.onlineReservations.partiesSize`, `configuration.onlineReservations.minimumReservationNotice`, `configuration.onlineReservations.businessSchedule`,
       * `configuration.onlineReservations.showPhoneNumber`, `configuration.onlineReservations.onlineReservationsEnabled`, `configuration.onlineReservations.manualApproval`, `configuration.reservationForm.submitMessage`,
       * `configuration.reservationForm.policiesEnabled`, `configuration.reservationForm.termsAndConditions`, `configuration.reservationForm.privacyPolicy`,
       * `configuration.reservationForm.customFieldDefinitions`, `configuration.reservationForm.lastNameRequired`, `configuration.reservationForm.emailRequired`, `configuration.reservationForm.emailMarketingCheckbox`.
       * - `FULL`: Returns all fields.
       *
       * Default: `PUBLIC`.
       */
      fieldsets?: Set[] | undefined;
  }
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ReservationLocationsQueryResult extends QueryCursorResult {
      items: ReservationLocation[];
      query: ReservationLocationsQueryBuilder;
      next: () => Promise<ReservationLocationsQueryResult>;
      prev: () => Promise<ReservationLocationsQueryResult>;
  }
  interface ReservationLocationsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id', value: any) => ReservationLocationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id', value: any) => ReservationLocationsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id', value: any) => ReservationLocationsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ReservationLocationsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ReservationLocationsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ReservationLocationsQueryResult>;
  }
  /**
   * Retrieves a list of up to 100 reservation locations.
   *
   * The `FULL` fieldset can only be retrieved by users with the `READ RESERVATION LOCATIONS (FULL)` or `MANAGE RESERVATION LOCATIONS` permission scopes.
   * @public
   * @documentationMaturity preview
   * @param options - An object representing the available options for listing reservation locations.
   */
  function listReservationLocations(options?: ListReservationLocationsOptions): Promise<ListReservationLocationsResponse>;
  interface ListReservationLocationsOptions {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      paging?: CursorPaging;
      /** Sorting for the locations list. */
      sort?: Sorting;
      /**
       * Predefined sets of fields to return.
       * @internal
       */
      fieldSet?: Set;
      /**
       * Array of named, predefined sets of projected fields to be returned.
       *
       * - `PUBLIC`: Returns `id`, `archived`, `location`, `default`, `configuration.onlineReservations.partiesSize`, `configuration.onlineReservations.minimumReservationNotice`, `configuration.onlineReservations.businessSchedule`,
       * `configuration.onlineReservations.showPhoneNumber`, `configuration.onlineReservations.onlineReservationsEnabled`, `configuration.onlineReservations.manualApproval`, `configuration.reservationForm.submitMessage`,
       * `configuration.reservationForm.policiesEnabled`, `configuration.reservationForm.termsAndConditions`, `configuration.reservationForm.privacyPolicy`,
       * `configuration.reservationForm.customFieldDefinitions`, `configuration.reservationForm.lastNameRequired`, `configuration.reservationForm.emailRequired`, `configuration.reservationForm.emailMarketingCheckbox`.
       * - `FULL`: Returns all fields.
       *
       * Default: `PUBLIC`.
       */
      fieldsets?: Set[];
  }
  
  type tableReservationsV1ReservationLocation_universal_d_ReservationLocation = ReservationLocation;
  type tableReservationsV1ReservationLocation_universal_d_StreetAddress = StreetAddress;
  type tableReservationsV1ReservationLocation_universal_d_AddressLocation = AddressLocation;
  type tableReservationsV1ReservationLocation_universal_d_Address = Address;
  type tableReservationsV1ReservationLocation_universal_d_BusinessSchedule = BusinessSchedule;
  type tableReservationsV1ReservationLocation_universal_d_TimePeriod = TimePeriod;
  type tableReservationsV1ReservationLocation_universal_d_DayOfWeek = DayOfWeek;
  const tableReservationsV1ReservationLocation_universal_d_DayOfWeek: typeof DayOfWeek;
  type tableReservationsV1ReservationLocation_universal_d_SpecialHourPeriod = SpecialHourPeriod;
  type tableReservationsV1ReservationLocation_universal_d_TableDefinition = TableDefinition;
  type tableReservationsV1ReservationLocation_universal_d_Unit = Unit;
  const tableReservationsV1ReservationLocation_universal_d_Unit: typeof Unit;
  type tableReservationsV1ReservationLocation_universal_d_SeatPacing = SeatPacing;
  type tableReservationsV1ReservationLocation_universal_d_PartyPacing = PartyPacing;
  type tableReservationsV1ReservationLocation_universal_d_PartiesSize = PartiesSize;
  type tableReservationsV1ReservationLocation_universal_d_PartySize = PartySize;
  type tableReservationsV1ReservationLocation_universal_d_NoticePeriod = NoticePeriod;
  type tableReservationsV1ReservationLocation_universal_d_TurnoverTimeRule = TurnoverTimeRule;
  type tableReservationsV1ReservationLocation_universal_d_TurnoverRule = TurnoverRule;
  type tableReservationsV1ReservationLocation_universal_d_ManualApproval = ManualApproval;
  type tableReservationsV1ReservationLocation_universal_d_ManualApprovalValueOneOf = ManualApprovalValueOneOf;
  type tableReservationsV1ReservationLocation_universal_d_FieldType = FieldType;
  const tableReservationsV1ReservationLocation_universal_d_FieldType: typeof FieldType;
  type tableReservationsV1ReservationLocation_universal_d_TermsAndConditions = TermsAndConditions;
  type tableReservationsV1ReservationLocation_universal_d_TermsAndConditionsValueOneOf = TermsAndConditionsValueOneOf;
  type tableReservationsV1ReservationLocation_universal_d_PrivacyPolicy = PrivacyPolicy;
  type tableReservationsV1ReservationLocation_universal_d_PrivacyPolicyValueOneOf = PrivacyPolicyValueOneOf;
  type tableReservationsV1ReservationLocation_universal_d_CustomFieldDefinition = CustomFieldDefinition;
  type tableReservationsV1ReservationLocation_universal_d_EmailMarketingCheckbox = EmailMarketingCheckbox;
  type tableReservationsV1ReservationLocation_universal_d_OnlineReservations = OnlineReservations;
  type tableReservationsV1ReservationLocation_universal_d_ReservationForm = ReservationForm;
  type tableReservationsV1ReservationLocation_universal_d_MyReservationsField = MyReservationsField;
  type tableReservationsV1ReservationLocation_universal_d_TableManagement = TableManagement;
  type tableReservationsV1ReservationLocation_universal_d_ReservationPayment = ReservationPayment;
  type tableReservationsV1ReservationLocation_universal_d_Location = Location;
  type tableReservationsV1ReservationLocation_universal_d_Configuration = Configuration;
  type tableReservationsV1ReservationLocation_universal_d_InvalidateCache = InvalidateCache;
  type tableReservationsV1ReservationLocation_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type tableReservationsV1ReservationLocation_universal_d_App = App;
  type tableReservationsV1ReservationLocation_universal_d_Page = Page;
  type tableReservationsV1ReservationLocation_universal_d_URI = URI;
  type tableReservationsV1ReservationLocation_universal_d_File = File;
  type tableReservationsV1ReservationLocation_universal_d_GetReservationLocationRequest = GetReservationLocationRequest;
  type tableReservationsV1ReservationLocation_universal_d_Set = Set;
  const tableReservationsV1ReservationLocation_universal_d_Set: typeof Set;
  type tableReservationsV1ReservationLocation_universal_d_GetReservationLocationResponse = GetReservationLocationResponse;
  type tableReservationsV1ReservationLocation_universal_d_UpdateReservationLocationRequest = UpdateReservationLocationRequest;
  type tableReservationsV1ReservationLocation_universal_d_UpdateReservationLocationResponse = UpdateReservationLocationResponse;
  type tableReservationsV1ReservationLocation_universal_d_TablesDeleted = TablesDeleted;
  type tableReservationsV1ReservationLocation_universal_d_QueryReservationLocationsRequest = QueryReservationLocationsRequest;
  type tableReservationsV1ReservationLocation_universal_d_QueryV2 = QueryV2;
  type tableReservationsV1ReservationLocation_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type tableReservationsV1ReservationLocation_universal_d_Sorting = Sorting;
  type tableReservationsV1ReservationLocation_universal_d_SortOrder = SortOrder;
  const tableReservationsV1ReservationLocation_universal_d_SortOrder: typeof SortOrder;
  type tableReservationsV1ReservationLocation_universal_d_Paging = Paging;
  type tableReservationsV1ReservationLocation_universal_d_CursorPaging = CursorPaging;
  type tableReservationsV1ReservationLocation_universal_d_QueryReservationLocationsResponse = QueryReservationLocationsResponse;
  type tableReservationsV1ReservationLocation_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type tableReservationsV1ReservationLocation_universal_d_Cursors = Cursors;
  type tableReservationsV1ReservationLocation_universal_d_ListReservationLocationsRequest = ListReservationLocationsRequest;
  type tableReservationsV1ReservationLocation_universal_d_ListReservationLocationsResponse = ListReservationLocationsResponse;
  type tableReservationsV1ReservationLocation_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type tableReservationsV1ReservationLocation_universal_d_DeleteOrphanReservationLocationRequest = DeleteOrphanReservationLocationRequest;
  type tableReservationsV1ReservationLocation_universal_d_DeleteOrphanReservationLocationResponse = DeleteOrphanReservationLocationResponse;
  type tableReservationsV1ReservationLocation_universal_d_MigrateOldRestaurantSettingsRequest = MigrateOldRestaurantSettingsRequest;
  type tableReservationsV1ReservationLocation_universal_d_Mode = Mode;
  const tableReservationsV1ReservationLocation_universal_d_Mode: typeof Mode;
  type tableReservationsV1ReservationLocation_universal_d_MigrateOldRestaurantSettingsResponse = MigrateOldRestaurantSettingsResponse;
  type tableReservationsV1ReservationLocation_universal_d_ParsedSettings = ParsedSettings;
  type tableReservationsV1ReservationLocation_universal_d_OldScheduleInterval = OldScheduleInterval;
  type tableReservationsV1ReservationLocation_universal_d_OldCustomField = OldCustomField;
  type tableReservationsV1ReservationLocation_universal_d_OldPolicy = OldPolicy;
  type tableReservationsV1ReservationLocation_universal_d_OldTerms = OldTerms;
  type tableReservationsV1ReservationLocation_universal_d_OldScheduleException = OldScheduleException;
  type tableReservationsV1ReservationLocation_universal_d_OldInstant = OldInstant;
  type tableReservationsV1ReservationLocation_universal_d_MigrationParsingError = MigrationParsingError;
  type tableReservationsV1ReservationLocation_universal_d_MigrationResult = MigrationResult;
  type tableReservationsV1ReservationLocation_universal_d_CheckReservationLocationsCreatedRequest = CheckReservationLocationsCreatedRequest;
  type tableReservationsV1ReservationLocation_universal_d_CheckReservationLocationsCreatedResponse = CheckReservationLocationsCreatedResponse;
  type tableReservationsV1ReservationLocation_universal_d_DomainEvent = DomainEvent;
  type tableReservationsV1ReservationLocation_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type tableReservationsV1ReservationLocation_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type tableReservationsV1ReservationLocation_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type tableReservationsV1ReservationLocation_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type tableReservationsV1ReservationLocation_universal_d_ActionEvent = ActionEvent;
  type tableReservationsV1ReservationLocation_universal_d_Empty = Empty;
  type tableReservationsV1ReservationLocation_universal_d_MetaSiteSpecialEvent = MetaSiteSpecialEvent;
  type tableReservationsV1ReservationLocation_universal_d_MetaSiteSpecialEventPayloadOneOf = MetaSiteSpecialEventPayloadOneOf;
  type tableReservationsV1ReservationLocation_universal_d_Asset = Asset;
  type tableReservationsV1ReservationLocation_universal_d_State = State;
  const tableReservationsV1ReservationLocation_universal_d_State: typeof State;
  type tableReservationsV1ReservationLocation_universal_d_SiteCreated = SiteCreated;
  type tableReservationsV1ReservationLocation_universal_d_SiteCreatedContext = SiteCreatedContext;
  const tableReservationsV1ReservationLocation_universal_d_SiteCreatedContext: typeof SiteCreatedContext;
  type tableReservationsV1ReservationLocation_universal_d_Namespace = Namespace;
  const tableReservationsV1ReservationLocation_universal_d_Namespace: typeof Namespace;
  type tableReservationsV1ReservationLocation_universal_d_SiteTransferred = SiteTransferred;
  type tableReservationsV1ReservationLocation_universal_d_SiteDeleted = SiteDeleted;
  type tableReservationsV1ReservationLocation_universal_d_DeleteContext = DeleteContext;
  type tableReservationsV1ReservationLocation_universal_d_DeleteStatus = DeleteStatus;
  const tableReservationsV1ReservationLocation_universal_d_DeleteStatus: typeof DeleteStatus;
  type tableReservationsV1ReservationLocation_universal_d_SiteUndeleted = SiteUndeleted;
  type tableReservationsV1ReservationLocation_universal_d_SitePublished = SitePublished;
  type tableReservationsV1ReservationLocation_universal_d_SiteUnpublished = SiteUnpublished;
  type tableReservationsV1ReservationLocation_universal_d_SiteMarkedAsTemplate = SiteMarkedAsTemplate;
  type tableReservationsV1ReservationLocation_universal_d_SiteMarkedAsWixSite = SiteMarkedAsWixSite;
  type tableReservationsV1ReservationLocation_universal_d_ServiceProvisioned = ServiceProvisioned;
  type tableReservationsV1ReservationLocation_universal_d_ServiceRemoved = ServiceRemoved;
  type tableReservationsV1ReservationLocation_universal_d_SiteRenamed = SiteRenamed;
  type tableReservationsV1ReservationLocation_universal_d_SiteHardDeleted = SiteHardDeleted;
  type tableReservationsV1ReservationLocation_universal_d_NamespaceChanged = NamespaceChanged;
  type tableReservationsV1ReservationLocation_universal_d_StudioAssigned = StudioAssigned;
  type tableReservationsV1ReservationLocation_universal_d_StudioUnassigned = StudioUnassigned;
  type tableReservationsV1ReservationLocation_universal_d_SitePropertiesNotification = SitePropertiesNotification;
  type tableReservationsV1ReservationLocation_universal_d_SitePropertiesEvent = SitePropertiesEvent;
  type tableReservationsV1ReservationLocation_universal_d_Properties = Properties;
  type tableReservationsV1ReservationLocation_universal_d_Categories = Categories;
  type tableReservationsV1ReservationLocation_universal_d_Locale = Locale;
  type tableReservationsV1ReservationLocation_universal_d_V4Address = V4Address;
  type tableReservationsV1ReservationLocation_universal_d_AddressHint = AddressHint;
  type tableReservationsV1ReservationLocation_universal_d_PlacementType = PlacementType;
  const tableReservationsV1ReservationLocation_universal_d_PlacementType: typeof PlacementType;
  type tableReservationsV1ReservationLocation_universal_d_GeoCoordinates = GeoCoordinates;
  type tableReservationsV1ReservationLocation_universal_d_V4BusinessSchedule = V4BusinessSchedule;
  type tableReservationsV1ReservationLocation_universal_d_V4TimePeriod = V4TimePeriod;
  type tableReservationsV1ReservationLocation_universal_d_V4DayOfWeek = V4DayOfWeek;
  const tableReservationsV1ReservationLocation_universal_d_V4DayOfWeek: typeof V4DayOfWeek;
  type tableReservationsV1ReservationLocation_universal_d_V4SpecialHourPeriod = V4SpecialHourPeriod;
  type tableReservationsV1ReservationLocation_universal_d_Multilingual = Multilingual;
  type tableReservationsV1ReservationLocation_universal_d_SupportedLanguage = SupportedLanguage;
  type tableReservationsV1ReservationLocation_universal_d_ResolutionMethod = ResolutionMethod;
  const tableReservationsV1ReservationLocation_universal_d_ResolutionMethod: typeof ResolutionMethod;
  type tableReservationsV1ReservationLocation_universal_d_ConsentPolicy = ConsentPolicy;
  type tableReservationsV1ReservationLocation_universal_d_Translation = Translation;
  type tableReservationsV1ReservationLocation_universal_d_ChangeContext = ChangeContext;
  type tableReservationsV1ReservationLocation_universal_d_ChangeContextPayloadOneOf = ChangeContextPayloadOneOf;
  type tableReservationsV1ReservationLocation_universal_d_PropertiesChange = PropertiesChange;
  type tableReservationsV1ReservationLocation_universal_d_V4SiteCreated = V4SiteCreated;
  type tableReservationsV1ReservationLocation_universal_d_SiteCloned = SiteCloned;
  type tableReservationsV1ReservationLocation_universal_d_FeatureEvent = FeatureEvent;
  type tableReservationsV1ReservationLocation_universal_d_FeatureEventEventOneOf = FeatureEventEventOneOf;
  type tableReservationsV1ReservationLocation_universal_d_FeatureEnabled = FeatureEnabled;
  type tableReservationsV1ReservationLocation_universal_d_FeatureEnabledReasonOneOf = FeatureEnabledReasonOneOf;
  type tableReservationsV1ReservationLocation_universal_d_Feature = Feature;
  type tableReservationsV1ReservationLocation_universal_d_FeatureQuantityInfoOneOf = FeatureQuantityInfoOneOf;
  type tableReservationsV1ReservationLocation_universal_d_FeatureContext = FeatureContext;
  type tableReservationsV1ReservationLocation_universal_d_BooleanFeature = BooleanFeature;
  type tableReservationsV1ReservationLocation_universal_d_QuotaFeature = QuotaFeature;
  type tableReservationsV1ReservationLocation_universal_d_FeaturePeriod = FeaturePeriod;
  const tableReservationsV1ReservationLocation_universal_d_FeaturePeriod: typeof FeaturePeriod;
  type tableReservationsV1ReservationLocation_universal_d_QuotaInfo = QuotaInfo;
  type tableReservationsV1ReservationLocation_universal_d_TransferredFromAnotherAccountReason = TransferredFromAnotherAccountReason;
  type tableReservationsV1ReservationLocation_universal_d_ReassignedFromSiteReason = ReassignedFromSiteReason;
  type tableReservationsV1ReservationLocation_universal_d_AssignedFromFloatingReason = AssignedFromFloatingReason;
  type tableReservationsV1ReservationLocation_universal_d_NewFeatureReason = NewFeatureReason;
  type tableReservationsV1ReservationLocation_universal_d_ContractSwitchedReason = ContractSwitchedReason;
  type tableReservationsV1ReservationLocation_universal_d_ManualFeatureCreationReason = ManualFeatureCreationReason;
  type tableReservationsV1ReservationLocation_universal_d_MigratedFromLegacyReason = MigratedFromLegacyReason;
  type tableReservationsV1ReservationLocation_universal_d_FeatureDisabled = FeatureDisabled;
  type tableReservationsV1ReservationLocation_universal_d_FeatureDisabledReasonOneOf = FeatureDisabledReasonOneOf;
  type tableReservationsV1ReservationLocation_universal_d_UnAssingedToFloatingReason = UnAssingedToFloatingReason;
  type tableReservationsV1ReservationLocation_universal_d_ReplacedByAnotherSubscriptionReason = ReplacedByAnotherSubscriptionReason;
  type tableReservationsV1ReservationLocation_universal_d_ReassignedToAnotherSiteReason = ReassignedToAnotherSiteReason;
  type tableReservationsV1ReservationLocation_universal_d_FeatureUpdated = FeatureUpdated;
  type tableReservationsV1ReservationLocation_universal_d_FeatureUpdatedPreviousQuantityInfoOneOf = FeatureUpdatedPreviousQuantityInfoOneOf;
  type tableReservationsV1ReservationLocation_universal_d_FeatureUpdatedReasonOneOf = FeatureUpdatedReasonOneOf;
  type tableReservationsV1ReservationLocation_universal_d_FeatureCancelled = FeatureCancelled;
  type tableReservationsV1ReservationLocation_universal_d_FeatureCancelledReasonOneOf = FeatureCancelledReasonOneOf;
  type tableReservationsV1ReservationLocation_universal_d_TransferredToAnotherAccountReason = TransferredToAnotherAccountReason;
  type tableReservationsV1ReservationLocation_universal_d_CancelRequestedReason = CancelRequestedReason;
  type tableReservationsV1ReservationLocation_universal_d_MessageEnvelope = MessageEnvelope;
  type tableReservationsV1ReservationLocation_universal_d_IdentificationData = IdentificationData;
  type tableReservationsV1ReservationLocation_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
  type tableReservationsV1ReservationLocation_universal_d_WebhookIdentityType = WebhookIdentityType;
  const tableReservationsV1ReservationLocation_universal_d_WebhookIdentityType: typeof WebhookIdentityType;
  const tableReservationsV1ReservationLocation_universal_d_getReservationLocation: typeof getReservationLocation;
  type tableReservationsV1ReservationLocation_universal_d_GetReservationLocationOptions = GetReservationLocationOptions;
  const tableReservationsV1ReservationLocation_universal_d_updateReservationLocation: typeof updateReservationLocation;
  type tableReservationsV1ReservationLocation_universal_d_UpdateReservationLocation = UpdateReservationLocation;
  type tableReservationsV1ReservationLocation_universal_d_UpdateReservationLocationOptions = UpdateReservationLocationOptions;
  const tableReservationsV1ReservationLocation_universal_d_queryReservationLocations: typeof queryReservationLocations;
  type tableReservationsV1ReservationLocation_universal_d_QueryReservationLocationsOptions = QueryReservationLocationsOptions;
  type tableReservationsV1ReservationLocation_universal_d_ReservationLocationsQueryResult = ReservationLocationsQueryResult;
  type tableReservationsV1ReservationLocation_universal_d_ReservationLocationsQueryBuilder = ReservationLocationsQueryBuilder;
  const tableReservationsV1ReservationLocation_universal_d_listReservationLocations: typeof listReservationLocations;
  type tableReservationsV1ReservationLocation_universal_d_ListReservationLocationsOptions = ListReservationLocationsOptions;
  namespace tableReservationsV1ReservationLocation_universal_d {
    export {
      tableReservationsV1ReservationLocation_universal_d_ReservationLocation as ReservationLocation,
      tableReservationsV1ReservationLocation_universal_d_StreetAddress as StreetAddress,
      tableReservationsV1ReservationLocation_universal_d_AddressLocation as AddressLocation,
      tableReservationsV1ReservationLocation_universal_d_Address as Address,
      tableReservationsV1ReservationLocation_universal_d_BusinessSchedule as BusinessSchedule,
      tableReservationsV1ReservationLocation_universal_d_TimePeriod as TimePeriod,
      tableReservationsV1ReservationLocation_universal_d_DayOfWeek as DayOfWeek,
      tableReservationsV1ReservationLocation_universal_d_SpecialHourPeriod as SpecialHourPeriod,
      tableReservationsV1ReservationLocation_universal_d_TableDefinition as TableDefinition,
      TableCombination$1 as TableCombination,
      tableReservationsV1ReservationLocation_universal_d_Unit as Unit,
      tableReservationsV1ReservationLocation_universal_d_SeatPacing as SeatPacing,
      tableReservationsV1ReservationLocation_universal_d_PartyPacing as PartyPacing,
      tableReservationsV1ReservationLocation_universal_d_PartiesSize as PartiesSize,
      tableReservationsV1ReservationLocation_universal_d_PartySize as PartySize,
      tableReservationsV1ReservationLocation_universal_d_NoticePeriod as NoticePeriod,
      tableReservationsV1ReservationLocation_universal_d_TurnoverTimeRule as TurnoverTimeRule,
      tableReservationsV1ReservationLocation_universal_d_TurnoverRule as TurnoverRule,
      tableReservationsV1ReservationLocation_universal_d_ManualApproval as ManualApproval,
      tableReservationsV1ReservationLocation_universal_d_ManualApprovalValueOneOf as ManualApprovalValueOneOf,
      tableReservationsV1ReservationLocation_universal_d_FieldType as FieldType,
      tableReservationsV1ReservationLocation_universal_d_TermsAndConditions as TermsAndConditions,
      tableReservationsV1ReservationLocation_universal_d_TermsAndConditionsValueOneOf as TermsAndConditionsValueOneOf,
      tableReservationsV1ReservationLocation_universal_d_PrivacyPolicy as PrivacyPolicy,
      tableReservationsV1ReservationLocation_universal_d_PrivacyPolicyValueOneOf as PrivacyPolicyValueOneOf,
      tableReservationsV1ReservationLocation_universal_d_CustomFieldDefinition as CustomFieldDefinition,
      tableReservationsV1ReservationLocation_universal_d_EmailMarketingCheckbox as EmailMarketingCheckbox,
      tableReservationsV1ReservationLocation_universal_d_OnlineReservations as OnlineReservations,
      tableReservationsV1ReservationLocation_universal_d_ReservationForm as ReservationForm,
      tableReservationsV1ReservationLocation_universal_d_MyReservationsField as MyReservationsField,
      tableReservationsV1ReservationLocation_universal_d_TableManagement as TableManagement,
      tableReservationsV1ReservationLocation_universal_d_ReservationPayment as ReservationPayment,
      tableReservationsV1ReservationLocation_universal_d_Location as Location,
      tableReservationsV1ReservationLocation_universal_d_Configuration as Configuration,
      tableReservationsV1ReservationLocation_universal_d_InvalidateCache as InvalidateCache,
      tableReservationsV1ReservationLocation_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      tableReservationsV1ReservationLocation_universal_d_App as App,
      tableReservationsV1ReservationLocation_universal_d_Page as Page,
      tableReservationsV1ReservationLocation_universal_d_URI as URI,
      tableReservationsV1ReservationLocation_universal_d_File as File,
      tableReservationsV1ReservationLocation_universal_d_GetReservationLocationRequest as GetReservationLocationRequest,
      tableReservationsV1ReservationLocation_universal_d_Set as Set,
      tableReservationsV1ReservationLocation_universal_d_GetReservationLocationResponse as GetReservationLocationResponse,
      tableReservationsV1ReservationLocation_universal_d_UpdateReservationLocationRequest as UpdateReservationLocationRequest,
      tableReservationsV1ReservationLocation_universal_d_UpdateReservationLocationResponse as UpdateReservationLocationResponse,
      tableReservationsV1ReservationLocation_universal_d_TablesDeleted as TablesDeleted,
      tableReservationsV1ReservationLocation_universal_d_QueryReservationLocationsRequest as QueryReservationLocationsRequest,
      tableReservationsV1ReservationLocation_universal_d_QueryV2 as QueryV2,
      tableReservationsV1ReservationLocation_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      tableReservationsV1ReservationLocation_universal_d_Sorting as Sorting,
      tableReservationsV1ReservationLocation_universal_d_SortOrder as SortOrder,
      tableReservationsV1ReservationLocation_universal_d_Paging as Paging,
      tableReservationsV1ReservationLocation_universal_d_CursorPaging as CursorPaging,
      tableReservationsV1ReservationLocation_universal_d_QueryReservationLocationsResponse as QueryReservationLocationsResponse,
      tableReservationsV1ReservationLocation_universal_d_PagingMetadataV2 as PagingMetadataV2,
      tableReservationsV1ReservationLocation_universal_d_Cursors as Cursors,
      tableReservationsV1ReservationLocation_universal_d_ListReservationLocationsRequest as ListReservationLocationsRequest,
      tableReservationsV1ReservationLocation_universal_d_ListReservationLocationsResponse as ListReservationLocationsResponse,
      tableReservationsV1ReservationLocation_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      tableReservationsV1ReservationLocation_universal_d_DeleteOrphanReservationLocationRequest as DeleteOrphanReservationLocationRequest,
      tableReservationsV1ReservationLocation_universal_d_DeleteOrphanReservationLocationResponse as DeleteOrphanReservationLocationResponse,
      tableReservationsV1ReservationLocation_universal_d_MigrateOldRestaurantSettingsRequest as MigrateOldRestaurantSettingsRequest,
      tableReservationsV1ReservationLocation_universal_d_Mode as Mode,
      tableReservationsV1ReservationLocation_universal_d_MigrateOldRestaurantSettingsResponse as MigrateOldRestaurantSettingsResponse,
      tableReservationsV1ReservationLocation_universal_d_ParsedSettings as ParsedSettings,
      tableReservationsV1ReservationLocation_universal_d_OldScheduleInterval as OldScheduleInterval,
      tableReservationsV1ReservationLocation_universal_d_OldCustomField as OldCustomField,
      tableReservationsV1ReservationLocation_universal_d_OldPolicy as OldPolicy,
      tableReservationsV1ReservationLocation_universal_d_OldTerms as OldTerms,
      tableReservationsV1ReservationLocation_universal_d_OldScheduleException as OldScheduleException,
      tableReservationsV1ReservationLocation_universal_d_OldInstant as OldInstant,
      tableReservationsV1ReservationLocation_universal_d_MigrationParsingError as MigrationParsingError,
      tableReservationsV1ReservationLocation_universal_d_MigrationResult as MigrationResult,
      tableReservationsV1ReservationLocation_universal_d_CheckReservationLocationsCreatedRequest as CheckReservationLocationsCreatedRequest,
      tableReservationsV1ReservationLocation_universal_d_CheckReservationLocationsCreatedResponse as CheckReservationLocationsCreatedResponse,
      tableReservationsV1ReservationLocation_universal_d_DomainEvent as DomainEvent,
      tableReservationsV1ReservationLocation_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      tableReservationsV1ReservationLocation_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      tableReservationsV1ReservationLocation_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      tableReservationsV1ReservationLocation_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      tableReservationsV1ReservationLocation_universal_d_ActionEvent as ActionEvent,
      tableReservationsV1ReservationLocation_universal_d_Empty as Empty,
      tableReservationsV1ReservationLocation_universal_d_MetaSiteSpecialEvent as MetaSiteSpecialEvent,
      tableReservationsV1ReservationLocation_universal_d_MetaSiteSpecialEventPayloadOneOf as MetaSiteSpecialEventPayloadOneOf,
      tableReservationsV1ReservationLocation_universal_d_Asset as Asset,
      tableReservationsV1ReservationLocation_universal_d_State as State,
      tableReservationsV1ReservationLocation_universal_d_SiteCreated as SiteCreated,
      tableReservationsV1ReservationLocation_universal_d_SiteCreatedContext as SiteCreatedContext,
      tableReservationsV1ReservationLocation_universal_d_Namespace as Namespace,
      tableReservationsV1ReservationLocation_universal_d_SiteTransferred as SiteTransferred,
      tableReservationsV1ReservationLocation_universal_d_SiteDeleted as SiteDeleted,
      tableReservationsV1ReservationLocation_universal_d_DeleteContext as DeleteContext,
      tableReservationsV1ReservationLocation_universal_d_DeleteStatus as DeleteStatus,
      tableReservationsV1ReservationLocation_universal_d_SiteUndeleted as SiteUndeleted,
      tableReservationsV1ReservationLocation_universal_d_SitePublished as SitePublished,
      tableReservationsV1ReservationLocation_universal_d_SiteUnpublished as SiteUnpublished,
      tableReservationsV1ReservationLocation_universal_d_SiteMarkedAsTemplate as SiteMarkedAsTemplate,
      tableReservationsV1ReservationLocation_universal_d_SiteMarkedAsWixSite as SiteMarkedAsWixSite,
      tableReservationsV1ReservationLocation_universal_d_ServiceProvisioned as ServiceProvisioned,
      tableReservationsV1ReservationLocation_universal_d_ServiceRemoved as ServiceRemoved,
      tableReservationsV1ReservationLocation_universal_d_SiteRenamed as SiteRenamed,
      tableReservationsV1ReservationLocation_universal_d_SiteHardDeleted as SiteHardDeleted,
      tableReservationsV1ReservationLocation_universal_d_NamespaceChanged as NamespaceChanged,
      tableReservationsV1ReservationLocation_universal_d_StudioAssigned as StudioAssigned,
      tableReservationsV1ReservationLocation_universal_d_StudioUnassigned as StudioUnassigned,
      tableReservationsV1ReservationLocation_universal_d_SitePropertiesNotification as SitePropertiesNotification,
      tableReservationsV1ReservationLocation_universal_d_SitePropertiesEvent as SitePropertiesEvent,
      tableReservationsV1ReservationLocation_universal_d_Properties as Properties,
      tableReservationsV1ReservationLocation_universal_d_Categories as Categories,
      tableReservationsV1ReservationLocation_universal_d_Locale as Locale,
      tableReservationsV1ReservationLocation_universal_d_V4Address as V4Address,
      tableReservationsV1ReservationLocation_universal_d_AddressHint as AddressHint,
      tableReservationsV1ReservationLocation_universal_d_PlacementType as PlacementType,
      tableReservationsV1ReservationLocation_universal_d_GeoCoordinates as GeoCoordinates,
      tableReservationsV1ReservationLocation_universal_d_V4BusinessSchedule as V4BusinessSchedule,
      tableReservationsV1ReservationLocation_universal_d_V4TimePeriod as V4TimePeriod,
      tableReservationsV1ReservationLocation_universal_d_V4DayOfWeek as V4DayOfWeek,
      tableReservationsV1ReservationLocation_universal_d_V4SpecialHourPeriod as V4SpecialHourPeriod,
      tableReservationsV1ReservationLocation_universal_d_Multilingual as Multilingual,
      tableReservationsV1ReservationLocation_universal_d_SupportedLanguage as SupportedLanguage,
      tableReservationsV1ReservationLocation_universal_d_ResolutionMethod as ResolutionMethod,
      tableReservationsV1ReservationLocation_universal_d_ConsentPolicy as ConsentPolicy,
      tableReservationsV1ReservationLocation_universal_d_Translation as Translation,
      tableReservationsV1ReservationLocation_universal_d_ChangeContext as ChangeContext,
      tableReservationsV1ReservationLocation_universal_d_ChangeContextPayloadOneOf as ChangeContextPayloadOneOf,
      tableReservationsV1ReservationLocation_universal_d_PropertiesChange as PropertiesChange,
      tableReservationsV1ReservationLocation_universal_d_V4SiteCreated as V4SiteCreated,
      tableReservationsV1ReservationLocation_universal_d_SiteCloned as SiteCloned,
      tableReservationsV1ReservationLocation_universal_d_FeatureEvent as FeatureEvent,
      tableReservationsV1ReservationLocation_universal_d_FeatureEventEventOneOf as FeatureEventEventOneOf,
      tableReservationsV1ReservationLocation_universal_d_FeatureEnabled as FeatureEnabled,
      tableReservationsV1ReservationLocation_universal_d_FeatureEnabledReasonOneOf as FeatureEnabledReasonOneOf,
      tableReservationsV1ReservationLocation_universal_d_Feature as Feature,
      tableReservationsV1ReservationLocation_universal_d_FeatureQuantityInfoOneOf as FeatureQuantityInfoOneOf,
      tableReservationsV1ReservationLocation_universal_d_FeatureContext as FeatureContext,
      tableReservationsV1ReservationLocation_universal_d_BooleanFeature as BooleanFeature,
      tableReservationsV1ReservationLocation_universal_d_QuotaFeature as QuotaFeature,
      tableReservationsV1ReservationLocation_universal_d_FeaturePeriod as FeaturePeriod,
      tableReservationsV1ReservationLocation_universal_d_QuotaInfo as QuotaInfo,
      tableReservationsV1ReservationLocation_universal_d_TransferredFromAnotherAccountReason as TransferredFromAnotherAccountReason,
      tableReservationsV1ReservationLocation_universal_d_ReassignedFromSiteReason as ReassignedFromSiteReason,
      tableReservationsV1ReservationLocation_universal_d_AssignedFromFloatingReason as AssignedFromFloatingReason,
      tableReservationsV1ReservationLocation_universal_d_NewFeatureReason as NewFeatureReason,
      tableReservationsV1ReservationLocation_universal_d_ContractSwitchedReason as ContractSwitchedReason,
      tableReservationsV1ReservationLocation_universal_d_ManualFeatureCreationReason as ManualFeatureCreationReason,
      tableReservationsV1ReservationLocation_universal_d_MigratedFromLegacyReason as MigratedFromLegacyReason,
      tableReservationsV1ReservationLocation_universal_d_FeatureDisabled as FeatureDisabled,
      tableReservationsV1ReservationLocation_universal_d_FeatureDisabledReasonOneOf as FeatureDisabledReasonOneOf,
      tableReservationsV1ReservationLocation_universal_d_UnAssingedToFloatingReason as UnAssingedToFloatingReason,
      tableReservationsV1ReservationLocation_universal_d_ReplacedByAnotherSubscriptionReason as ReplacedByAnotherSubscriptionReason,
      tableReservationsV1ReservationLocation_universal_d_ReassignedToAnotherSiteReason as ReassignedToAnotherSiteReason,
      tableReservationsV1ReservationLocation_universal_d_FeatureUpdated as FeatureUpdated,
      tableReservationsV1ReservationLocation_universal_d_FeatureUpdatedPreviousQuantityInfoOneOf as FeatureUpdatedPreviousQuantityInfoOneOf,
      tableReservationsV1ReservationLocation_universal_d_FeatureUpdatedReasonOneOf as FeatureUpdatedReasonOneOf,
      tableReservationsV1ReservationLocation_universal_d_FeatureCancelled as FeatureCancelled,
      tableReservationsV1ReservationLocation_universal_d_FeatureCancelledReasonOneOf as FeatureCancelledReasonOneOf,
      tableReservationsV1ReservationLocation_universal_d_TransferredToAnotherAccountReason as TransferredToAnotherAccountReason,
      tableReservationsV1ReservationLocation_universal_d_CancelRequestedReason as CancelRequestedReason,
      tableReservationsV1ReservationLocation_universal_d_MessageEnvelope as MessageEnvelope,
      tableReservationsV1ReservationLocation_universal_d_IdentificationData as IdentificationData,
      tableReservationsV1ReservationLocation_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf,
      tableReservationsV1ReservationLocation_universal_d_WebhookIdentityType as WebhookIdentityType,
      tableReservationsV1ReservationLocation_universal_d_getReservationLocation as getReservationLocation,
      tableReservationsV1ReservationLocation_universal_d_GetReservationLocationOptions as GetReservationLocationOptions,
      tableReservationsV1ReservationLocation_universal_d_updateReservationLocation as updateReservationLocation,
      tableReservationsV1ReservationLocation_universal_d_UpdateReservationLocation as UpdateReservationLocation,
      tableReservationsV1ReservationLocation_universal_d_UpdateReservationLocationOptions as UpdateReservationLocationOptions,
      tableReservationsV1ReservationLocation_universal_d_queryReservationLocations as queryReservationLocations,
      tableReservationsV1ReservationLocation_universal_d_QueryReservationLocationsOptions as QueryReservationLocationsOptions,
      tableReservationsV1ReservationLocation_universal_d_ReservationLocationsQueryResult as ReservationLocationsQueryResult,
      tableReservationsV1ReservationLocation_universal_d_ReservationLocationsQueryBuilder as ReservationLocationsQueryBuilder,
      tableReservationsV1ReservationLocation_universal_d_listReservationLocations as listReservationLocations,
      tableReservationsV1ReservationLocation_universal_d_ListReservationLocationsOptions as ListReservationLocationsOptions,
    };
  }
  
  interface TimeSlot {
      /** Start date and time of this time slot. */
      startDate?: Date;
      /** Duration in minutes of this time slot. */
      duration?: number;
      /**
       * Availability status of this time slot.
       *
       * * `AVAILABLE`: The restaurant can accommodate a party of the given size in this time slot.
       * * `UNAVAILABLE`: The restaurant can't accommodate a party of the given size in this time slot.
       * * `NON_WORKING_HOURS`: The restaurant is not open during this time slot.
       */
      status?: Status;
      /**
       * Table combinations.
       * @internal
       */
      tableCombinations?: TimeSlotTableCombination[];
      /** Whether manual approval is required to make a reservation in this time slot. */
      manualApproval?: boolean | null;
      /**
       * Whether payment is required to make a reservation in this time slot.
       * @internal
       */
      paymentRequired?: boolean | null;
  }
  enum Status {
      AVAILABLE = "AVAILABLE",
      UNAVAILABLE = "UNAVAILABLE",
      NON_WORKING_HOURS = "NON_WORKING_HOURS"
  }
  /** Table combination. */
  interface TimeSlotTableCombination {
      /** Table IDs of the tables in the combination. */
      tableIds?: string[];
  }
  interface GetTimeSlotsRequest {
      /** ID of the reservation location for which to retrieve time slots. */
      reservationLocationId: string;
      /** Date and time for which to retrieve a time slot. */
      date: Date;
      /**
       * Duration in minutes of the time slot.
       *
       * Min: `5`
       */
      duration?: number | null;
      /**
       * Size of the party that needs to be seated during this time slot.
       *
       * Min: `1`
       */
      partySize: number | null;
      /** The number of time slots to retrieve before the given `date`. */
      slotsBefore?: number | null;
      /** The number of time slots to retrieve after the given `date`. */
      slotsAfter?: number | null;
  }
  interface GetTimeSlotsResponse {
      /** A list of time slots and their availability according to the given party size. */
      timeSlots?: TimeSlot[];
  }
  interface CheckReservationDetailsRequest {
      /** Reservation location ID. */
      reservationLocationId: string;
      /** Date. */
      date: Date;
      /** Duration. */
      duration: number | null;
      /** Party size. */
      partySize: number | null;
      /** Reservation, that should be ignored during the check. */
      excludeReservationId?: string | null;
      /** Requested table combination. */
      tableIds?: string[];
  }
  interface CheckReservationDetailsResponse {
      /** Tables states. */
      tables?: Table[];
      /** Table combinations states. */
      tableCombinations?: TableCombination[];
      /** Reservation location conflicts. */
      reservationLocationConflicts?: ReservationLocationConflict[];
      /** Requested table combination state. */
      requestedTableCombination?: TableCombination;
      /** List of reserved tables with corresponding reservation ids. */
      tableReservedConflicts?: TableReservedConflict[];
      /** Whether manual approval is required to make a reservation in this time slot. */
      manualApproval?: boolean | null;
      /** Whether payment is required to make a reservation in this time slot. */
      paymentRequired?: boolean | null;
  }
  interface Table {
      _id?: string;
      /** Table conflicts. */
      tableConflicts?: TableConflict[];
  }
  interface TableConflict {
      /** Conflict type. */
      type?: TableConflictType;
  }
  enum TableConflictType {
      UNKNOWN = "UNKNOWN",
      TABLE_RESERVED = "TABLE_RESERVED",
      TABLE_TOO_BIG = "TABLE_TOO_BIG",
      TABLE_TOO_SMALL = "TABLE_TOO_SMALL",
      OFFLINE_ONLY = "OFFLINE_ONLY"
  }
  interface TableCombination {
      tableIds?: string[];
      tableCombinationConflicts?: TableCombinationConflict[];
  }
  interface TableCombinationConflict {
      /** Conflict type. */
      type?: TableCombinationConflictType;
  }
  enum TableCombinationConflictType {
      UNKNOWN = "UNKNOWN",
      RESERVED = "RESERVED",
      TOO_BIG = "TOO_BIG",
      TOO_SMALL = "TOO_SMALL",
      OFFLINE_ONLY = "OFFLINE_ONLY"
  }
  interface ReservationLocationConflict {
      /** Reservation location conflict type. */
      type?: Type;
  }
  enum Type {
      UNKNOWN = "UNKNOWN",
      PARTY_PACING = "PARTY_PACING",
      SEAT_PACING = "SEAT_PACING"
  }
  interface TableReservedConflict {
      /** Table id. */
      tableId?: string;
      /** List of reservation ids. */
      reservationIds?: string[];
  }
  /**
   * Returns a list of time slots at a given restaurant on a given `date`, and their availability for a given `partySize`.
   *
   * Without passing optional parameters, the list will contain a single time slot at the given `date`.
   * Use `slotsBefore` and `slotsAfter` to get additional time slots before and after the given `date`.
   *
   * If you do not provide a `duration`, the duration will be calculated automatically based on the reservation location's configuration.
   * The reservation location's settings used to determine the duration are its `defaultTurnoverTime` and `turnoverTimeRules`. These specify how much time should be allotted for a reservation of a party of a given size.
   *
   * The `startDate`s of time slots in the response are 15 minutes apart regardless of the `duration` provided.
   * @param reservationLocationId - ID of the reservation location for which to retrieve time slots.
   * @param date - Date and time for which to retrieve a time slot.
   * @param partySize - Size of the party that needs to be seated during this time slot.
   *
   * Min: `1`
   * @public
   * @documentationMaturity preview
   * @requiredField date
   * @requiredField partySize
   * @requiredField reservationLocationId
   * @param options - Options for retrieving the time slots.
   */
  function getTimeSlots(reservationLocationId: string, date: Date, partySize: number | null, options?: GetTimeSlotsOptions): Promise<GetTimeSlotsResponse>;
  interface GetTimeSlotsOptions {
      /**
       * Duration in minutes of the time slot.
       *
       * Min: `5`
       */
      duration?: number | null;
      /** The number of time slots to retrieve before the given `date`. */
      slotsBefore?: number | null;
      /** The number of time slots to retrieve after the given `date`. */
      slotsAfter?: number | null;
  }
  /**
   * Check reservation details.
   * @param reservationLocationId - Reservation location ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField options.date
   * @requiredField options.duration
   * @requiredField options.partySize
   * @requiredField reservationLocationId
   * @adminMethod
   */
  function checkReservationDetails(reservationLocationId: string, options?: CheckReservationDetailsOptions): Promise<CheckReservationDetailsResponse>;
  interface CheckReservationDetailsOptions {
      /** Date. */
      date: Date;
      /** Duration. */
      duration: number | null;
      /** Party size. */
      partySize: number | null;
      /** Reservation, that should be ignored during the check. */
      excludeReservationId?: string | null;
      /** Requested table combination. */
      tableIds?: string[];
  }
  
  type tableReservationsV1TimeSlot_universal_d_TimeSlot = TimeSlot;
  type tableReservationsV1TimeSlot_universal_d_Status = Status;
  const tableReservationsV1TimeSlot_universal_d_Status: typeof Status;
  type tableReservationsV1TimeSlot_universal_d_TimeSlotTableCombination = TimeSlotTableCombination;
  type tableReservationsV1TimeSlot_universal_d_GetTimeSlotsRequest = GetTimeSlotsRequest;
  type tableReservationsV1TimeSlot_universal_d_GetTimeSlotsResponse = GetTimeSlotsResponse;
  type tableReservationsV1TimeSlot_universal_d_CheckReservationDetailsRequest = CheckReservationDetailsRequest;
  type tableReservationsV1TimeSlot_universal_d_CheckReservationDetailsResponse = CheckReservationDetailsResponse;
  type tableReservationsV1TimeSlot_universal_d_Table = Table;
  type tableReservationsV1TimeSlot_universal_d_TableConflict = TableConflict;
  type tableReservationsV1TimeSlot_universal_d_TableConflictType = TableConflictType;
  const tableReservationsV1TimeSlot_universal_d_TableConflictType: typeof TableConflictType;
  type tableReservationsV1TimeSlot_universal_d_TableCombination = TableCombination;
  type tableReservationsV1TimeSlot_universal_d_TableCombinationConflict = TableCombinationConflict;
  type tableReservationsV1TimeSlot_universal_d_TableCombinationConflictType = TableCombinationConflictType;
  const tableReservationsV1TimeSlot_universal_d_TableCombinationConflictType: typeof TableCombinationConflictType;
  type tableReservationsV1TimeSlot_universal_d_ReservationLocationConflict = ReservationLocationConflict;
  type tableReservationsV1TimeSlot_universal_d_Type = Type;
  const tableReservationsV1TimeSlot_universal_d_Type: typeof Type;
  type tableReservationsV1TimeSlot_universal_d_TableReservedConflict = TableReservedConflict;
  const tableReservationsV1TimeSlot_universal_d_getTimeSlots: typeof getTimeSlots;
  type tableReservationsV1TimeSlot_universal_d_GetTimeSlotsOptions = GetTimeSlotsOptions;
  const tableReservationsV1TimeSlot_universal_d_checkReservationDetails: typeof checkReservationDetails;
  type tableReservationsV1TimeSlot_universal_d_CheckReservationDetailsOptions = CheckReservationDetailsOptions;
  namespace tableReservationsV1TimeSlot_universal_d {
    export {
      tableReservationsV1TimeSlot_universal_d_TimeSlot as TimeSlot,
      tableReservationsV1TimeSlot_universal_d_Status as Status,
      tableReservationsV1TimeSlot_universal_d_TimeSlotTableCombination as TimeSlotTableCombination,
      tableReservationsV1TimeSlot_universal_d_GetTimeSlotsRequest as GetTimeSlotsRequest,
      tableReservationsV1TimeSlot_universal_d_GetTimeSlotsResponse as GetTimeSlotsResponse,
      tableReservationsV1TimeSlot_universal_d_CheckReservationDetailsRequest as CheckReservationDetailsRequest,
      tableReservationsV1TimeSlot_universal_d_CheckReservationDetailsResponse as CheckReservationDetailsResponse,
      tableReservationsV1TimeSlot_universal_d_Table as Table,
      tableReservationsV1TimeSlot_universal_d_TableConflict as TableConflict,
      tableReservationsV1TimeSlot_universal_d_TableConflictType as TableConflictType,
      tableReservationsV1TimeSlot_universal_d_TableCombination as TableCombination,
      tableReservationsV1TimeSlot_universal_d_TableCombinationConflict as TableCombinationConflict,
      tableReservationsV1TimeSlot_universal_d_TableCombinationConflictType as TableCombinationConflictType,
      tableReservationsV1TimeSlot_universal_d_ReservationLocationConflict as ReservationLocationConflict,
      tableReservationsV1TimeSlot_universal_d_Type as Type,
      tableReservationsV1TimeSlot_universal_d_TableReservedConflict as TableReservedConflict,
      tableReservationsV1TimeSlot_universal_d_getTimeSlots as getTimeSlots,
      tableReservationsV1TimeSlot_universal_d_GetTimeSlotsOptions as GetTimeSlotsOptions,
      tableReservationsV1TimeSlot_universal_d_checkReservationDetails as checkReservationDetails,
      tableReservationsV1TimeSlot_universal_d_CheckReservationDetailsOptions as CheckReservationDetailsOptions,
    };
  }
  
  export { tableReservationsV1ReservationLocation_universal_d as reservationLocations, tableReservationsV1Reservation_universal_d as reservations, tableReservationsV1TimeSlot_universal_d as timeSlots };
}
