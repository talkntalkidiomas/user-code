declare module "wix-table-reservations-backend" {
  const __debug$2: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** The reservation domain object. */
  interface Reservation {
      /**
       * Reservation ID. Read-Only.
       * @readonly
       */
      _id?: string | null;
      /** Status of the reservation. */
      status?: Status$1;
      /** Reservation source. */
      source?: Source;
      /** Reservation details. */
      details?: Details;
      /** Info about the person the reservation is being made for. */
      reservee?: Reservee;
      /**
       * Info about the person making the reservation.
       * @readonly
       */
      reservedBy?: ReservedBy;
      /** Team message. */
      teamMessage?: string | null;
      /**
       * Date and time when the when reservation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time when the when reservation was changed.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Revision.
       * @readonly
       */
      revision?: string | null;
      /** Decline reason. */
      declineReason?: string | null;
  }
  enum Status$1 {
      UNKNOWN = "UNKNOWN",
      /** The reservation is held for a period of time during which person who makes reservation should fill details. */
      HELD = "HELD",
      /** The reservation has been reserved. */
      RESERVED = "RESERVED",
      /** The reservation has been canceled. */
      CANCELED = "CANCELED",
      /** The reservation has been successfully finished. */
      FINISHED = "FINISHED",
      /** The reservee didn't arrive. */
      NO_SHOW = "NO_SHOW",
      /** The reservee occupied the table. */
      SEATED = "SEATED",
      /** The reservee requested reservation and is waiting for manual approval. */
      REQUESTED = "REQUESTED",
      /** The owner declined reservee's request. */
      DECLINED = "DECLINED"
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
      /** Reservation location ID where reservation is made. */
      reservationLocationId?: string | null;
      /** Table IDs. */
      tableIds?: string[] | null;
      /** Start date of the reservation. */
      startDate?: Date;
      /** End date of the reservation. */
      endDate?: Date;
      /** Party size. */
      partySize?: number | null;
  }
  /** A person the reservation is being made for. */
  interface Reservee {
      /** First name. */
      firstName?: string | null;
      /** Last name. */
      lastName?: string | null;
      /** Email. */
      email?: string | null;
      /** Phone. */
      phone?: string | null;
      /** Marketing consent. */
      marketingConsent?: boolean | null;
      /**
       * Reservee's custom fields,
       *
       * where each key is the custom field definition id,
       * and each value is the field's value for the contact.
       *
       * Empty fields are not returned.
       */
      customFields?: Record<string, any> | null;
      /**
       * CRM contact ID, create new one if not exist.
       * @readonly
       */
      contactId?: string | null;
  }
  /** A person making reservation. */
  interface ReservedBy {
      /**
       * CRM contact ID for the person who made the reservation.
       * @readonly
       */
      contactId?: string | null;
  }
  interface CreateReservationRequest {
      /** Reservation. */
      reservation: Reservation;
      /**
       * If creation is forced.
       * @internal
       */
      force?: boolean;
      /** Ignore table combination conflicts. */
      ignoreTableCombinationConflicts?: TableCombinationConflictType$1[];
      /** Ignore reservation location conflicts. */
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
      /** Reservation id. */
      reservationId: string;
      /**
       * Predefined sets of fields to return.
       * @internal
       */
      fieldSet?: Set$1;
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. */
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
      /** Reservation. */
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
      /** Ignored table combination conflicts. */
      ignoreTableCombinationConflicts?: TableCombinationConflictType$1[];
      /** Ignored reservation location conflicts. */
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
      reservationDetails: HeldReservationDetails;
  }
  /** Reservation details when create reservation in status HELD. */
  interface HeldReservationDetails {
      /** Reservation location ID where reservation is made. */
      reservationLocationId?: string | null;
      /** Start date of the reservation. */
      startDate?: Date;
      /** Party size. */
      partySize?: number | null;
  }
  interface CreateHeldReservationResponse {
      /** Reservation. */
      reservation?: Reservation;
  }
  interface ReserveReservationRequest {
      /** Reservation id. */
      reservationId: string;
      /** Reservee. */
      reservee: Reservee;
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
      /** Reservation id. */
      reservationId: string;
      revision: string | null;
      /** Phone number that was used when the reservation was created. */
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
      /** Reservation id. */
      reservationId: string;
      revision?: string;
  }
  interface DeleteReservationResponse {
  }
  interface ListReservationsRequest {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      paging?: CursorPaging$1;
      /** The way how reservations in response should be sorted. */
      sort?: Sorting$1;
      /** Start date from. */
      startDateFrom?: Date;
      /** Start date to. */
      startDateTo?: Date;
      /** Only reservations with this status should be returned. */
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
      /** Sort order. */
      order?: SortOrder$1;
  }
  enum SortOrder$1 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface ListReservationsResponse {
      /** List of the reservations. */
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
      query: QueryV2$1;
  }
  interface QueryV2$1 extends QueryV2PagingMethodOneOf$1 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
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
      sort?: Sorting$1[];
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$1 {
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
  }
  interface Paging$1 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryReservationsResponse {
      /** List of the reservations. */
      reservations?: Reservation[];
      /** Metadata for the paginated results. */
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
  interface DomainEvent$1 extends DomainEventBodyOneOf$1 {
      createdEvent?: EntityCreatedEvent$1;
      updatedEvent?: EntityUpdatedEvent$1;
      deletedEvent?: EntityDeletedEvent$1;
      actionEvent?: ActionEvent$1;
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent$1;
      /** random GUID so clients can tell if event was already handled */
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
      /**
       * Assuming that all messages including Actions have id
       * Example: The id of the specific order, the id of a specific campaign
       */
      entityId?: string;
      /** The time of the event. Useful if there was a delay in dispatching */
      eventTime?: Date;
      /**
       * A field that should be set if this event was triggered by an anonymize request.
       * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
       * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
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
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent$1;
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
  }
  interface EntityDeletedEvent$1 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
  }
  interface ActionEvent$1 {
      bodyAsJson?: string;
  }
  interface ExtendedFieldsUpdatedEvent$1 {
      currentEntityAsJson?: string;
  }
  interface Empty$1 {
  }
  /**
   * Creates a new reservation.
   * @param reservation - Reservation.
   * @internal
   * @documentationMaturity preview
   * @requiredField reservation
   * @requiredField reservation.details
   * @requiredField reservation.details.partySize
   * @requiredField reservation.details.reservationLocationId
   * @requiredField reservation.details.startDate
   */
  function createReservation(reservation: Reservation, options?: CreateReservationOptions): Promise<CreateReservationResponse>;
  interface CreateReservationOptions {
      /**
       * If creation is forced.
       * @internal
       */
      force?: boolean;
      /** Ignore table combination conflicts. */
      ignoreTableCombinationConflicts?: TableCombinationConflictType$1[];
      /** Ignore reservation location conflicts. */
      ignoreReservationLocationConflicts?: Type$1[];
  }
  /**
   * Get a reservation.
   * @param reservationId - Reservation id.
   * @internal
   * @documentationMaturity preview
   * @requiredField reservationId
   */
  function getReservation(reservationId: string, options?: GetReservationOptions): Promise<GetReservationResponse>;
  interface GetReservationOptions {
      /**
       * Predefined sets of fields to return.
       * @internal
       */
      fieldSet?: Set$1;
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. */
      fieldsets?: Set$1[];
  }
  /**
   * Update a reservation's specified properties.
   * @param _id - Reservation ID. Read-Only.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField reservation
   * @requiredField reservation.revision
   */
  function updateReservation(_id: string | null, reservation: UpdateReservation, options?: UpdateReservationOptions): Promise<UpdateReservationResponse>;
  interface UpdateReservation {
      /**
       * Reservation ID. Read-Only.
       * @readonly
       */
      _id?: string | null;
      /** Status of the reservation. */
      status?: Status$1;
      /** Reservation source. */
      source?: Source;
      /** Reservation details. */
      details?: Details;
      /** Info about the person the reservation is being made for. */
      reservee?: Reservee;
      /**
       * Info about the person making the reservation.
       * @readonly
       */
      reservedBy?: ReservedBy;
      /** Team message. */
      teamMessage?: string | null;
      /**
       * Date and time when the when reservation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Date and time when the when reservation was changed.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Revision.
       * @readonly
       */
      revision?: string | null;
      /** Decline reason. */
      declineReason?: string | null;
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
      /** Ignored table combination conflicts. */
      ignoreTableCombinationConflicts?: TableCombinationConflictType$1[];
      /** Ignored reservation location conflicts. */
      ignoreReservationLocationConflicts?: Type$1[];
  }
  /**
   * Creates a new reservation in a HELD status.
   * @internal
   * @documentationMaturity preview
   * @requiredField reservationDetails
   * @requiredField reservationDetails.partySize
   * @requiredField reservationDetails.reservationLocationId
   * @requiredField reservationDetails.startDate
   */
  function createHeldReservation(reservationDetails: HeldReservationDetails): Promise<CreateHeldReservationResponse>;
  /**
   * Reserve reservation. Change HELD status to RESERVED.
   * @param reservationId - Reservation id.
   * @param reservee - Reservee.
   * @internal
   * @documentationMaturity preview
   * @requiredField reservationId
   * @requiredField reservee
   * @requiredField reservee.firstName
   * @requiredField reservee.phone
   * @requiredField revision
   */
  function reserveReservation(reservationId: string, reservee: Reservee, revision: string | null): Promise<ReserveReservationResponse>;
  /**
   * Cancel reservation. Set reservation status to CANCELED.
   * @param reservationId - Reservation id.
   * @internal
   * @documentationMaturity preview
   * @requiredField reservationId
   * @requiredField revision
   */
  function cancelReservation(reservationId: string, revision: string | null, options?: CancelReservationOptions): Promise<CancelReservationResponse>;
  interface CancelReservationOptions {
      /** Phone number that was used when the reservation was created. */
      phone?: string | null;
  }
  /**
   * Delete reservation. Only reservations in status HELD can be deleted.
   * @param reservationId - Reservation id.
   * @internal
   * @documentationMaturity preview
   * @requiredField reservationId
   * @requiredField revision
   */
  function deleteReservation(reservationId: string, revision: string): Promise<void>;
  /**
   * Lists reservations, given the providing paging and sorting.
   * @internal
   * @documentationMaturity preview
   */
  function listReservations(options?: ListReservationsOptions): Promise<ListReservationsResponse>;
  interface ListReservationsOptions {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      paging?: CursorPaging$1;
      /** The way how reservations in response should be sorted. */
      sort?: Sorting$1;
      /** Start date from. */
      startDateFrom?: Date;
      /** Start date to. */
      startDateTo?: Date;
      /** Only reservations with this status should be returned. */
      status?: Status$1;
  }
  /**
   * Retrieves a list of reservations, given the provided filters, sorting and paging.
   * @internal
   * @documentationMaturity preview
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
  
  type tableReservationsV1Reservation_universal_d_Reservation = Reservation;
  type tableReservationsV1Reservation_universal_d_Source = Source;
  const tableReservationsV1Reservation_universal_d_Source: typeof Source;
  type tableReservationsV1Reservation_universal_d_Details = Details;
  type tableReservationsV1Reservation_universal_d_Reservee = Reservee;
  type tableReservationsV1Reservation_universal_d_ReservedBy = ReservedBy;
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
  type tableReservationsV1Reservation_universal_d_QueryReservationsResponse = QueryReservationsResponse;
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
  namespace tableReservationsV1Reservation_universal_d {
    export {
      __debug$2 as __debug,
      tableReservationsV1Reservation_universal_d_Reservation as Reservation,
      Status$1 as Status,
      tableReservationsV1Reservation_universal_d_Source as Source,
      tableReservationsV1Reservation_universal_d_Details as Details,
      tableReservationsV1Reservation_universal_d_Reservee as Reservee,
      tableReservationsV1Reservation_universal_d_ReservedBy as ReservedBy,
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
      QueryV2$1 as QueryV2,
      QueryV2PagingMethodOneOf$1 as QueryV2PagingMethodOneOf,
      Paging$1 as Paging,
      tableReservationsV1Reservation_universal_d_QueryReservationsResponse as QueryReservationsResponse,
      PagingMetadataV2$1 as PagingMetadataV2,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      ExtendedFieldsUpdatedEvent$1 as ExtendedFieldsUpdatedEvent,
      Empty$1 as Empty,
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
    };
  }
  
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** ReservationLocation is the main entity of ReservationLocationService. */
  interface ReservationLocation {
      /**
       * ReservationLocation ID.
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of a reservation location. Each time the reservation location is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision. */
      revision?: string | null;
      /**
       * Represents the time this ReservationLocation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this ReservationLocation was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Location data.
       * @readonly
       */
      location?: Location;
      /** Reservation configuration. */
      configuration?: Configuration;
      /**
       * Whether this is the default location.
       * @readonly
       */
      default?: boolean | null;
      /**
       * Whether the location is archived.
       * @readonly
       */
      archived?: boolean | null;
  }
  /** Street address. Includes street name, number, and apartment number in separate fields. */
  interface StreetAddress {
      /** Street number. */
      number?: string;
      /** Street name. */
      name?: string;
      /** Apartment number. */
      apt?: string;
  }
  /** Address Geolocation */
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
      /** Street address. Includes street name, number, and apartment number in separate fields. */
      streetAddress?: StreetAddress;
  }
  /**
   * Time periods that this location is open for business. Includes a collection of TimePeriod instances.
   * Aligned with https://developers.google.com/my-business/reference/rest/v4/accounts.locations#businesshours
   * With a few minor adjustments
   */
  interface BusinessSchedule {
      periods?: TimePeriod[];
      /** Exceptions to the business's regular hours. */
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
      openTime?: string;
      /** Day of the week this period ends on. */
      closeDay?: DayOfWeek;
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
      /** Date and Time in 24hr iso-8601 Coordinated universal time (UTC) */
      startDate?: string;
      /** Date and Time in 24hr iso-8601 Coordinated universal time (UTC) */
      endDate?: string;
      isClosed?: boolean;
      comment?: string;
  }
  /** Table definition. Definition of the tables. */
  interface TableDefinition {
      /**
       * Table id.
       * @readonly
       */
      _id?: string | null;
      /** Table name. */
      name?: string;
      /** Min number of seats. */
      seatsMin?: number;
      /** Max number of seats. */
      seatsMax?: number;
      /** Is active. */
      isActive?: boolean | null;
  }
  interface TableCombination$1 {
      /**
       * Table combination id.
       * @readonly
       */
      _id?: string | null;
      /** Ids of tables in the combination. */
      tableIds?: string[] | null;
      /** Min number of seats. */
      seatsMin?: number;
      /** Max number of seats. */
      seatsMax?: number;
      /** Is active. */
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
   * The pace is summarized separately for every 15 mins.
   * Settings a new seat pace of X means that for example between 10:00.000-10:14.999 there will be no more than X new seats.
   */
  interface SeatPacing {
      /** Max number of seats pace. */
      number?: number;
      /** Show if this option is enabled. */
      enabled?: boolean;
  }
  /**
   * Party pacing.
   * The pace is summarized separately for every 15 mins.
   * Settings a new parties pace of X means that for example between 10:00.000-10:14.999 there will be no more than X new parties.
   */
  interface PartyPacing {
      /** Max number of parties pace. */
      number?: number;
      /** Show if this option is enabled. */
      enabled?: boolean;
  }
  /** The party size that can be requested in a single reservation. */
  interface PartiesSize {
      /** Min number of seats. */
      min?: number;
      /** Max number of seats. */
      max?: number;
  }
  /** The party size that can be requested in a single reservation. */
  interface PartySize {
      /** Min number of seats. */
      min?: number;
      /** Max number of seats. */
      max?: number;
  }
  /** Reservation notice period. */
  interface NoticePeriod {
      /** The number of the unit. */
      number?: number;
      /** Time unit. */
      unit?: Unit;
  }
  /** Turnover time rule. A turnover time is defined per party size range. */
  interface TurnoverTimeRule {
      /** Min number of seats. */
      seatsMin?: number;
      /** Max number of seats. */
      seatsMax?: number;
      /** Turnover time in minutes. */
      minutes?: number;
  }
  /** Turnover rule. A turnover time is defined per party size range. */
  interface TurnoverRule {
      /** Min number of seats. */
      minSeats?: number;
      /** Max number of seats. */
      maxSeats?: number;
      /** Turnover time in minutes. */
      minutes?: number;
  }
  /** Manual approval settings. */
  interface ManualApproval extends ManualApprovalValueOneOf {
      /** Party size threshold. */
      partySizeThreshold?: number;
      /** Show if it is shown to UoU. */
      enabled?: boolean;
  }
  /** @oneof */
  interface ManualApprovalValueOneOf {
      /** Party size threshold. */
      partySizeThreshold?: number;
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
      /** Url. */
      url?: string;
      /** Text. */
      text?: string | null;
      /** Show if it is shown to UoU. */
      enabled?: boolean;
  }
  /** @oneof */
  interface TermsAndConditionsValueOneOf {
      /** Url. */
      url?: string;
      /** Text. */
      text?: string | null;
  }
  /** Privacy policy. */
  interface PrivacyPolicy extends PrivacyPolicyValueOneOf {
      /** Url. */
      url?: string;
      /** Text. */
      text?: string | null;
      /** Show if it is shown to UoU. */
      enabled?: boolean;
  }
  /** @oneof */
  interface PrivacyPolicyValueOneOf {
      /** Url. */
      url?: string;
      /** Text. */
      text?: string | null;
  }
  /** Custom field definition. Definition of the fields that are added to the reservation form. */
  interface CustomFieldDefinition {
      /**
       * Custom field id.
       * @readonly
       */
      _id?: string | null;
      /** Field name. */
      name?: string;
      /** Show if field is required. */
      required?: boolean;
  }
  /** Email marketing checkbox. */
  interface EmailMarketingCheckbox {
      /** Show if it is shown to UoU. */
      enabled?: boolean;
      /** Show if checkbox is checked by default. */
      checkedByDefault?: boolean;
  }
  interface OnlineReservations {
      /** Seats pace. */
      seatPacing?: SeatPacing;
      /** Parties pace. */
      partyPacing?: PartyPacing;
      /**
       * Parties size.
       * @internal
       */
      partiesSize?: PartiesSize;
      /** Party size. */
      partySize?: PartySize;
      /** Minimum reservation notice period. */
      minimumReservationNotice?: NoticePeriod;
      /** Default time in minutes for parties turnover. */
      defaultTurnoverTime?: number | null;
      /** Custom turnover time rules. */
      turnoverTimeRules?: TurnoverTimeRule[];
      /**
       * Turnover rules.
       * @internal
       */
      turnoverRules?: TurnoverRule[];
      /** Business schedule for the reservation location. */
      businessSchedule?: BusinessSchedule;
      /** Show if phone number is shown in case of larger party. */
      showPhoneNumber?: boolean | null;
      /** Show if online reservations enabled. */
      onlineReservationsEnabled?: boolean | null;
      /** Manual approval settings. */
      manualApproval?: ManualApproval;
  }
  /** Reservation form settings. */
  interface ReservationForm {
      /** Message that will be shown to UoU in registration form. */
      submitMessage?: string | null;
      /** Show if it is needed to show policies to the UoU. */
      policiesEnabled?: boolean | null;
      /** Terms and conditions. */
      termsAndConditions?: TermsAndConditions;
      /** Privacy policy. */
      privacyPolicy?: PrivacyPolicy;
      /** Fields that User add to the registration form for UoU. */
      customFieldDefinitions?: CustomFieldDefinition[];
      /** Show if it is needed to Validate phone number by SMS. */
      validatePhoneNumber?: boolean | null;
      /** Show if last_name is required in reservation form. Default is false. */
      lastNameRequired?: boolean | null;
      /** Show if email is required in reservation form. Default is false. */
      emailRequired?: boolean | null;
      /** Email marketing checkbox. */
      emailMarketingCheckbox?: EmailMarketingCheckbox;
  }
  /** My reservations field definition. */
  interface MyReservationsField {
      /** Field type. */
      fieldType?: FieldType;
      /**
       * Custom field id.
       * @readonly
       */
      customFieldId?: string | null;
      /** Shown. */
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
  interface Location {
      /**
       * Location ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Location name.
       * @internal
       * @readonly
       */
      name?: string | null;
      /**
       * Location description.
       * @internal
       * @readonly
       */
      description?: string | null;
      /**
       * Fax number.
       * @internal
       * @readonly
       */
      fax?: string | null;
      /**
       * Timezone in `America/New_York` format.
       * @internal
       * @readonly
       */
      timeZone?: string | null;
      /**
       * Email address.
       * @internal
       */
      email?: string | null;
      /**
       * Phone number.
       * @internal
       * @readonly
       */
      phone?: string | null;
      /**
       * Address.
       * @internal
       * @readonly
       */
      address?: Address;
      /**
       * Business schedule. Array of weekly recurring time periods when the location is open for business. Limited to 100 time periods.
       * @internal
       * @readonly
       */
      businessSchedule?: BusinessSchedule;
  }
  interface Configuration {
      /** Location settings based on which reservation availability is calculated. */
      onlineReservations?: OnlineReservations;
      /** Reservation form settings. */
      reservationForm?: ReservationForm;
      /** My reservations fields view. */
      myReservationsFields?: MyReservationsField[];
      /** Table management. */
      tableManagement?: TableManagement;
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
  interface GetReservationLocationRequest {
      /** Id of the ReservationLocation to retrieve */
      reservationLocationId: string;
      /**
       * Predefined sets of fields to return.
       * @internal
       */
      fieldSet?: Set;
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. */
      fieldsets?: Set[];
  }
  enum Set {
      PUBLIC = "PUBLIC",
      FULL = "FULL"
  }
  interface GetReservationLocationResponse {
      /** The retrieved ReservationLocation */
      reservationLocation?: ReservationLocation;
  }
  interface UpdateReservationLocationRequest {
      /** ReservationLocation to be updated, may be partial */
      reservationLocation: ReservationLocation;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface UpdateReservationLocationResponse {
      /** The updated ReservationLocation */
      reservationLocation?: ReservationLocation;
  }
  interface TablesDeleted {
      /** Id of the affected reservationLocation. */
      reservationLocationId?: string;
      /** Ids of deleted tables. */
      tableIds?: string[];
  }
  interface QueryReservationLocationsRequest {
      /** Query expression */
      query: QueryV2;
      /**
       * Predefined sets of fields to return.
       * @internal
       */
      fieldSet?: Set;
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. */
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
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
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
      /** The retrieved ReservationLocations */
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
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. */
      fieldsets?: Set[];
  }
  interface ListReservationLocationsResponse {
      /** Locations. */
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
  interface DomainEvent extends DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
      /** random GUID so clients can tell if event was already handled */
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
      /**
       * Assuming that all messages including Actions have id
       * Example: The id of the specific order, the id of a specific campaign
       */
      entityId?: string;
      /** The time of the event. Useful if there was a delay in dispatching */
      eventTime?: Date;
      /**
       * A field that should be set if this event was triggered by an anonymize request.
       * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
       * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
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
      extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
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
  }
  interface EntityDeletedEvent {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  interface ExtendedFieldsUpdatedEvent {
      currentEntityAsJson?: string;
  }
  interface Empty {
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
      ACCOUNT_MASTER_CMS = "ACCOUNT_MASTER_CMS"
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
  /**
   * Get a ReservationLocation by id
   * @param reservationLocationId - Id of the ReservationLocation to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField reservationLocationId
   */
  function getReservationLocation(reservationLocationId: string, options?: GetReservationLocationOptions): Promise<GetReservationLocationResponse>;
  interface GetReservationLocationOptions {
      /**
       * Predefined sets of fields to return.
       * @internal
       */
      fieldSet?: Set;
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. */
      fieldsets?: Set[];
  }
  /**
   * Update a ReservationLocation, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - ReservationLocation ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField reservationLocation
   * @requiredField reservationLocation.revision
   */
  function updateReservationLocation(_id: string | null, reservationLocation: UpdateReservationLocation, options?: UpdateReservationLocationOptions): Promise<UpdateReservationLocationResponse>;
  interface UpdateReservationLocation {
      /**
       * ReservationLocation ID.
       * @readonly
       */
      _id?: string | null;
      /** Represents the current state of a reservation location. Each time the reservation location is modified, its `revision` changes. for an update operation to succeed, you MUST pass the latest revision. */
      revision?: string | null;
      /**
       * Represents the time this ReservationLocation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this ReservationLocation was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Location data.
       * @readonly
       */
      location?: Location;
      /** Reservation configuration. */
      configuration?: Configuration;
      /**
       * Whether this is the default location.
       * @readonly
       */
      default?: boolean | null;
      /**
       * Whether the location is archived.
       * @readonly
       */
      archived?: boolean | null;
  }
  interface UpdateReservationLocationOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  /**
   * Query ReservationLocations using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   */
  function queryReservationLocations(options?: QueryReservationLocationsOptions): ReservationLocationsQueryBuilder;
  interface QueryReservationLocationsOptions {
      /**
       * Predefined sets of fields to return.
       * @internal
       */
      fieldSet?: Set | undefined;
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. */
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
   * Lists locations, given the providing paging and sorting.
   * @internal
   * @documentationMaturity preview
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
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. */
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
  type tableReservationsV1ReservationLocation_universal_d_Location = Location;
  type tableReservationsV1ReservationLocation_universal_d_Configuration = Configuration;
  type tableReservationsV1ReservationLocation_universal_d_InvalidateCache = InvalidateCache;
  type tableReservationsV1ReservationLocation_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type tableReservationsV1ReservationLocation_universal_d_App = App;
  type tableReservationsV1ReservationLocation_universal_d_Page = Page;
  type tableReservationsV1ReservationLocation_universal_d_URI = URI;
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
  type tableReservationsV1ReservationLocation_universal_d_DomainEvent = DomainEvent;
  type tableReservationsV1ReservationLocation_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type tableReservationsV1ReservationLocation_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type tableReservationsV1ReservationLocation_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type tableReservationsV1ReservationLocation_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type tableReservationsV1ReservationLocation_universal_d_ActionEvent = ActionEvent;
  type tableReservationsV1ReservationLocation_universal_d_ExtendedFieldsUpdatedEvent = ExtendedFieldsUpdatedEvent;
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
      __debug$1 as __debug,
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
      tableReservationsV1ReservationLocation_universal_d_Location as Location,
      tableReservationsV1ReservationLocation_universal_d_Configuration as Configuration,
      tableReservationsV1ReservationLocation_universal_d_InvalidateCache as InvalidateCache,
      tableReservationsV1ReservationLocation_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      tableReservationsV1ReservationLocation_universal_d_App as App,
      tableReservationsV1ReservationLocation_universal_d_Page as Page,
      tableReservationsV1ReservationLocation_universal_d_URI as URI,
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
      tableReservationsV1ReservationLocation_universal_d_DomainEvent as DomainEvent,
      tableReservationsV1ReservationLocation_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      tableReservationsV1ReservationLocation_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      tableReservationsV1ReservationLocation_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      tableReservationsV1ReservationLocation_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      tableReservationsV1ReservationLocation_universal_d_ActionEvent as ActionEvent,
      tableReservationsV1ReservationLocation_universal_d_ExtendedFieldsUpdatedEvent as ExtendedFieldsUpdatedEvent,
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
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface TimeSlot {
      /** Start date. */
      startDate?: Date;
      /** Duration. */
      duration?: number;
      /** Status. */
      status?: Status;
      /**
       * Table combinations.
       * @internal
       */
      tableCombinations?: TableCombination[];
      /** Manual approval. */
      manualApproval?: boolean | null;
  }
  enum Status {
      AVAILABLE = "AVAILABLE",
      UNAVAILABLE = "UNAVAILABLE",
      NON_WORKING_HOURS = "NON_WORKING_HOURS"
  }
  /** Table combination. */
  interface TableCombination {
      /** Table ids. */
      tableIds?: string[];
  }
  interface GetTimeSlotsRequest {
      /** Reservation location id. */
      reservationLocationId: string;
      /** Date. */
      date: Date;
      /** Duration. */
      duration?: number | null;
      /** Party size. */
      partySize: number | null;
      /** Slots before. */
      slotsBefore?: number | null;
      /** Slots after. */
      slotsAfter?: number | null;
  }
  interface GetTimeSlotsResponse {
      /** List of the time slots. */
      timeSlots?: TimeSlot[];
  }
  interface CheckReservationDetailsRequest {
      /** Reservation location id. */
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
      tableCombinations?: V1TableCombination[];
      /** Reservation location conflicts. */
      reservationLocationConflicts?: ReservationLocationConflict[];
      /** Requested table combination state. */
      requestedTableCombination?: V1TableCombination;
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
  interface V1TableCombination {
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
  /**
   * Returns list of the time slots.
   * @param reservationLocationId - Reservation location id.
   * @param date - Date.
   * @param partySize - Party size.
   * @internal
   * @documentationMaturity preview
   * @requiredField date
   * @requiredField partySize
   * @requiredField reservationLocationId
   */
  function getTimeSlots(reservationLocationId: string, date: Date, partySize: number | null, options?: GetTimeSlotsOptions): Promise<GetTimeSlotsResponse>;
  interface GetTimeSlotsOptions {
      /** Duration. */
      duration?: number | null;
      /** Slots before. */
      slotsBefore?: number | null;
      /** Slots after. */
      slotsAfter?: number | null;
  }
  /**
   * Check reservation details.
   * @param reservationLocationId - Reservation location id.
   * @internal
   * @documentationMaturity preview
   * @requiredField options
   * @requiredField options.date
   * @requiredField options.duration
   * @requiredField options.partySize
   * @requiredField reservationLocationId
   */
  function checkReservationDetails(reservationLocationId: string, options: CheckReservationDetailsOptions): Promise<CheckReservationDetailsResponse>;
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
  
  const tableReservationsV1TimeSlot_universal_d___debug: typeof __debug;
  type tableReservationsV1TimeSlot_universal_d_TimeSlot = TimeSlot;
  type tableReservationsV1TimeSlot_universal_d_Status = Status;
  const tableReservationsV1TimeSlot_universal_d_Status: typeof Status;
  type tableReservationsV1TimeSlot_universal_d_TableCombination = TableCombination;
  type tableReservationsV1TimeSlot_universal_d_GetTimeSlotsRequest = GetTimeSlotsRequest;
  type tableReservationsV1TimeSlot_universal_d_GetTimeSlotsResponse = GetTimeSlotsResponse;
  type tableReservationsV1TimeSlot_universal_d_CheckReservationDetailsRequest = CheckReservationDetailsRequest;
  type tableReservationsV1TimeSlot_universal_d_CheckReservationDetailsResponse = CheckReservationDetailsResponse;
  type tableReservationsV1TimeSlot_universal_d_Table = Table;
  type tableReservationsV1TimeSlot_universal_d_TableConflict = TableConflict;
  type tableReservationsV1TimeSlot_universal_d_TableConflictType = TableConflictType;
  const tableReservationsV1TimeSlot_universal_d_TableConflictType: typeof TableConflictType;
  type tableReservationsV1TimeSlot_universal_d_V1TableCombination = V1TableCombination;
  type tableReservationsV1TimeSlot_universal_d_TableCombinationConflict = TableCombinationConflict;
  type tableReservationsV1TimeSlot_universal_d_TableCombinationConflictType = TableCombinationConflictType;
  const tableReservationsV1TimeSlot_universal_d_TableCombinationConflictType: typeof TableCombinationConflictType;
  type tableReservationsV1TimeSlot_universal_d_ReservationLocationConflict = ReservationLocationConflict;
  type tableReservationsV1TimeSlot_universal_d_Type = Type;
  const tableReservationsV1TimeSlot_universal_d_Type: typeof Type;
  const tableReservationsV1TimeSlot_universal_d_getTimeSlots: typeof getTimeSlots;
  type tableReservationsV1TimeSlot_universal_d_GetTimeSlotsOptions = GetTimeSlotsOptions;
  const tableReservationsV1TimeSlot_universal_d_checkReservationDetails: typeof checkReservationDetails;
  type tableReservationsV1TimeSlot_universal_d_CheckReservationDetailsOptions = CheckReservationDetailsOptions;
  namespace tableReservationsV1TimeSlot_universal_d {
    export {
      tableReservationsV1TimeSlot_universal_d___debug as __debug,
      tableReservationsV1TimeSlot_universal_d_TimeSlot as TimeSlot,
      tableReservationsV1TimeSlot_universal_d_Status as Status,
      tableReservationsV1TimeSlot_universal_d_TableCombination as TableCombination,
      tableReservationsV1TimeSlot_universal_d_GetTimeSlotsRequest as GetTimeSlotsRequest,
      tableReservationsV1TimeSlot_universal_d_GetTimeSlotsResponse as GetTimeSlotsResponse,
      tableReservationsV1TimeSlot_universal_d_CheckReservationDetailsRequest as CheckReservationDetailsRequest,
      tableReservationsV1TimeSlot_universal_d_CheckReservationDetailsResponse as CheckReservationDetailsResponse,
      tableReservationsV1TimeSlot_universal_d_Table as Table,
      tableReservationsV1TimeSlot_universal_d_TableConflict as TableConflict,
      tableReservationsV1TimeSlot_universal_d_TableConflictType as TableConflictType,
      tableReservationsV1TimeSlot_universal_d_V1TableCombination as V1TableCombination,
      tableReservationsV1TimeSlot_universal_d_TableCombinationConflict as TableCombinationConflict,
      tableReservationsV1TimeSlot_universal_d_TableCombinationConflictType as TableCombinationConflictType,
      tableReservationsV1TimeSlot_universal_d_ReservationLocationConflict as ReservationLocationConflict,
      tableReservationsV1TimeSlot_universal_d_Type as Type,
      tableReservationsV1TimeSlot_universal_d_getTimeSlots as getTimeSlots,
      tableReservationsV1TimeSlot_universal_d_GetTimeSlotsOptions as GetTimeSlotsOptions,
      tableReservationsV1TimeSlot_universal_d_checkReservationDetails as checkReservationDetails,
      tableReservationsV1TimeSlot_universal_d_CheckReservationDetailsOptions as CheckReservationDetailsOptions,
    };
  }
  
  export { tableReservationsV1ReservationLocation_universal_d as reservationLocations, tableReservationsV1Reservation_universal_d as reservations, tableReservationsV1TimeSlot_universal_d as timeSlots };
}
