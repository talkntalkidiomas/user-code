/**
 * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations.v2.html#)
 */
declare module 'wix-table-reservations.v2' {
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.html#reservationLocations)
     */
    const reservationLocations: ReservationLocations;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.html#reservations)
     */
    const reservations: Reservations;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.html#timeSlots)
     */
    const timeSlots: TimeSlots;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Events.html#)
     */
    interface Events {
        /**
         * Triggered when a held reservation is created.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Events.html#onReservationCreated)
         */
        onReservationCreated(event: Events.tableReservationsV1ReservationReservationCreated): void;
        /**
         * Triggered when a reservation location is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Events.html#onReservationLocationCreated)
         */
        onReservationLocationCreated(event: Events.tableReservationsV1ReservationLocationReservationLocationCreated): void;
        /**
         * Triggered when a reservation location is updated.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Events.html#onReservationLocationUpdated)
         */
        onReservationLocationUpdated(event: Events.tableReservationsV1ReservationLocationReservationLocationUpdated): void;
        /**
         * Triggered when a reservation is canceled.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Events.html#onReservationUpdated)
         */
        onReservationUpdated(event: Events.tableReservationsV1ReservationReservationUpdated): void;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.html#)
     */
    interface ReservationLocations {
        /**
         * Retrieves a reservation location by ID.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.html#getReservationLocation)
         */
        getReservationLocation(reservationLocationId: string, options: ReservationLocations.GetReservationLocationOptions): Promise<ReservationLocations.ReservationLocation>;
        /**
         * Retrieves a list of up to 100 reservation locations.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.html#listReservationLocations)
         */
        listReservationLocations(options: ReservationLocations.ListReservationLocationsOptions): Promise<ReservationLocations.ListReservationLocationsResponse>;
        /**
         * Creates a query to retrieve a list of reservation locations.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.html#queryReservationLocations)
         */
        queryReservationLocations(options: ReservationLocations.QueryReservationLocationsOptions): ReservationLocations.ReservationLocationsQueryBuilder;
        /**
         * Updates a reservation location. Supports partial updates.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.html#updateReservationLocation)
         */
        updateReservationLocation(_id: string, reservationLocation: ReservationLocations.UpdateReservationLocation): Promise<ReservationLocations.ReservationLocation>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.html#)
     */
    interface Reservations {
        /**
         * Cancels a reservation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.html#cancelReservation)
         */
        cancelReservation(reservationId: string, revision: string, options: Reservations.CancelReservationOptions): Promise<Reservations.CancelReservationResponse>;
        /**
         * Creates a new temporary reservation and holds it for the customer for 10 minutes.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.html#createHeldReservation)
         */
        createHeldReservation(reservationDetails: Reservations.HeldReservationDetails): Promise<Reservations.CreateHeldReservationResponse>;
        /**
         * Creates a new reservation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.html#createReservation)
         */
        createReservation(reservation: Reservations.Reservation, options: Reservations.CreateReservationOptions): Promise<Reservations.Reservation>;
        /**
         * Retrieves a reservation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.html#getReservation)
         */
        getReservation(reservationId: string, options: Reservations.GetReservationOptions): Promise<Reservations.Reservation>;
        /**
         * Retrieves a list of up to 100 reservations.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.html#listReservations)
         */
        listReservations(options: Reservations.ListReservationsOptions): Promise<Reservations.ListReservationsResponse>;
        /**
         * Creates a query to retrieve a list of reservations.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.html#queryReservations)
         */
        queryReservations(): Reservations.ReservationsQueryBuilder;
        /**
         * Reserves or requests a held reservation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.html#reserveReservation)
         */
        reserveReservation(reservationId: string, reservee: Reservations.Reservee, revision: string): Promise<Reservations.ReserveReservationResponse>;
        /**
         * Updates a reservation.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.html#updateReservation)
         */
        updateReservation(_id: string, reservation: Reservations.UpdateReservation, options: Reservations.UpdateReservationOptions): Promise<Reservations.Reservation>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.TimeSlots.html#)
     */
    interface TimeSlots {
        /**
         * Returns a list of time slots at a given restaurant on a given `date`, and their availability for a given `partySize`.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.TimeSlots.html#getTimeSlots)
         */
        getTimeSlots(reservationLocationId: string, date: Date, partySize: number, options: TimeSlots.GetTimeSlotsOptions): Promise<TimeSlots.GetTimeSlotsResponse>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Events.html#)
     */
    namespace Events {
        type tableReservationsV1ReservationActionEvent = {
            bodyAsJson?: string;
        };
        type tableReservationsV1ReservationAggregation = {
            dateHistogram?: Events.tableReservationsV1ReservationDateHistogramAggregation;
            fieldPath?: string;
            groupBy?: Events.tableReservationsV1ReservationGroupByAggregation;
            name?: string;
            nested?: Events.tableReservationsV1ReservationNestedAggregation;
            range?: Events.tableReservationsV1ReservationRangeAggregation;
            scalar?: Events.tableReservationsV1ReservationScalarAggregation;
            /**
             * Supported values:
             * - `'DATE_HISTOGRAM'`
             * - `'NESTED'`
             * - `'RANGE'`
             * - `'SCALAR'`
             * - `'UNKNOWN_AGGREGATION_TYPE'`
             * - `'VALUE'`
             */
            type?: string;
            value?: Events.tableReservationsV1ReservationValueAggregation;
        };
        type tableReservationsV1ReservationAggregationData = {
            /**
             * key = aggregation name (as derived from search request)
             */
            results?: Array<Events.tableReservationsV1ReservationAggregationResults>;
        };
        type tableReservationsV1ReservationAggregationKindOneOf = {
            dateHistogram?: Events.tableReservationsV1ReservationDateHistogramAggregation;
            nested?: Events.tableReservationsV1ReservationNestedAggregation;
            range?: Events.tableReservationsV1ReservationRangeAggregation;
            scalar?: Events.tableReservationsV1ReservationScalarAggregation;
            value?: Events.tableReservationsV1ReservationValueAggregation;
        };
        type tableReservationsV1ReservationAggregationResults = {
            dateHistogram?: Events.tableReservationsV1ReservationDateHistogramResults;
            fieldPath?: string;
            groupedByValue?: Events.tableReservationsV1ReservationGroupByValueResults;
            name?: string;
            nested?: Events.tableReservationsV1ReservationNestedResults;
            ranges?: Events.tableReservationsV1ReservationRangeResults;
            scalar?: Events.tableReservationsV1ReservationScalarResult;
            /**
             * Supported values:
             * - `'DATE_HISTOGRAM'`
             * - `'NESTED'`
             * - `'RANGE'`
             * - `'SCALAR'`
             * - `'UNKNOWN_AGGREGATION_TYPE'`
             * - `'VALUE'`
             */
            type?: string;
            values?: Events.tableReservationsV1ReservationValueResults;
        };
        type tableReservationsV1ReservationAggregationResultsResultOneOf = {
            dateHistogram?: Events.tableReservationsV1ReservationDateHistogramResults;
            groupedByValue?: Events.tableReservationsV1ReservationGroupByValueResults;
            nested?: Events.tableReservationsV1ReservationNestedResults;
            ranges?: Events.tableReservationsV1ReservationRangeResults;
            scalar?: Events.tableReservationsV1ReservationScalarResult;
            values?: Events.tableReservationsV1ReservationValueResults;
        };
        type tableReservationsV1ReservationBackendEventMetadata = {
            /**
             * ID of the entity associated with the event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Event ID.
             */
            id: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest: boolean;
        };
        type tableReservationsV1ReservationCancelReservationRequest = {
            /**
             * The phone number that was provided when the reservation was created.
             *
             * This is required for reservations with any `source` other than `WALK_IN`.
             *
             * This requirement provides additional security by ensuring that the canceling party knows both the reservation's `reservationId` and the reservee's `phone`.
             */
            phone?: string;
            /**
             * Reservation ID.
             */
            reservationId: string;
            /**
             * Revision number.
             *
             * Include the existing `revision` to prevent conflicting updates to reservations.
             */
            revision: string;
        };
        type tableReservationsV1ReservationCancelReservationResponse = {
            /**
             * Reservation.
             */
            reservation?: Events.tableReservationsV1ReservationReservation;
        };
        type tableReservationsV1ReservationCreateHeldReservationRequest = {
            /**
             * Held reservation information to update.
             */
            reservationDetails: Events.tableReservationsV1ReservationHeldReservationDetails;
        };
        type tableReservationsV1ReservationCreateHeldReservationResponse = {
            /**
             * Reservation.
             */
            reservation?: Events.tableReservationsV1ReservationReservation;
        };
        type tableReservationsV1ReservationCreateReservationRequest = {
            /**
             * Ignored reservation location conflicts of the types included in the array. This ensures that the reservation is created even if the given conflicts would normally prevent it.
             *
             * Possible values:
             * * `"PARTY_PACING"`: The restaurant cannot accommodate a party of the given size according to party pacing settings.
             * * `"SEAT_PACING"`: The required number of seats are unavailable according to seat pacing settings.
             */
            ignoreReservationLocationConflicts?: Array<string>;
            /**
             * Ignore table combination conflicts of the types included in the array. This ensures that the reservation is created even if the given conflicts would normally prevent it.
             *
             * Possible values:
             * * `"RESERVED"`: One or more of the chosen tables are already reserved.
             * * `"TOO_BIG"`: The party is too big for the selected table.
             * * `"TOO_SMALL"`: The party is too small for the selected table.
             * * `"OFFLINE_ONLY"`: The restaurant does not allow online reservations.
             */
            ignoreTableCombinationConflicts?: Array<string>;
            /**
             * Reservation details.
             */
            reservation: Events.tableReservationsV1ReservationReservation;
        };
        type tableReservationsV1ReservationCreateReservationResponse = {
            /**
             * Reservation.
             */
            reservation?: Events.tableReservationsV1ReservationReservation;
        };
        type tableReservationsV1ReservationCursorPaging = {
            /**
             * Pointer to the next or previous page in the list of results.
             *
             * You can get the relevant cursor token
             * from the `pagingMetadata` object in the previous call's response.
             * Not relevant for the first request.
             */
            cursor?: string;
            /**
             * Number of items to load.
             */
            limit?: number;
        };
        type tableReservationsV1ReservationCursorPagingMetadata = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Offset that was requested.
             */
            cursors?: Events.tableReservationsV1ReservationCursors;
            /**
             * Indicates if there are more results after the current page.
             * If `true`, another page of results can be retrieved.
             * If `false`, this is the last page.
             */
            hasNext?: boolean;
        };
        type tableReservationsV1ReservationCursorQuery = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            cursorPaging?: Events.tableReservationsV1ReservationCursorPaging;
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
            filter?: Object;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<Events.tableReservationsV1ReservationSorting>;
        };
        type tableReservationsV1ReservationCursorQueryPagingMethodOneOf = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            cursorPaging?: Events.tableReservationsV1ReservationCursorPaging;
        };
        type tableReservationsV1ReservationCursorSearch = {
            /**
             * Aggregations | Faceted search: refers to a way to explore large amounts of data by displaying summaries about various partitions of the data and later allowing to narrow the navigation to a specific partition.
             */
            aggregations?: Array<Events.tableReservationsV1ReservationAggregation>;
            /**
             * Cursor pointing to page of results. Can't be used together with 'paging'. 'cursor_paging.cursor' can not be used together with 'filter' or 'sort'
             */
            cursorPaging?: Events.tableReservationsV1ReservationCursorPaging;
            /**
             * A filter object. See the filter section [here](https://dev.wix.com/docs/rnd-general/articles/p13n-guidelines-aips/guidance-aips/wix-api-basics/1011-wql-wix-query-language)
             */
            filter?: Object;
            /**
             * free text to match in searchable fields
             */
            search?: Events.tableReservationsV1ReservationSearchDetails;
            /**
             * Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]
             */
            sort?: Array<Events.tableReservationsV1ReservationSorting>;
        };
        type tableReservationsV1ReservationCursorSearchPagingMethodOneOf = {
            /**
             * Cursor pointing to page of results. Can't be used together with 'paging'. 'cursor_paging.cursor' can not be used together with 'filter' or 'sort'
             */
            cursorPaging?: Events.tableReservationsV1ReservationCursorPaging;
        };
        type tableReservationsV1ReservationCursors = {
            /**
             * Cursor pointing to next page in the list of results.
             */
            next?: string;
            /**
             * Cursor pointing to previous page in the list of results.
             */
            prev?: string;
        };
        type tableReservationsV1ReservationDateHistogramAggregation = {
            /**
             * Supported values:
             * - `'DAY'`
             * - `'HOUR'`
             * - `'MINUTE'`
             * - `'MONTH'`
             * - `'SECOND'`
             * - `'UNKNOWN_INTERVAL'`
             * - `'WEEK'`
             * - `'YEAR'`
             */
            interval?: string;
        };
        type tableReservationsV1ReservationDateHistogramResult = {
            count?: number;
            value?: string;
        };
        type tableReservationsV1ReservationDateHistogramResults = {
            results?: Array<Events.tableReservationsV1ReservationDateHistogramResult>;
        };
        type tableReservationsV1ReservationDeleteReservationRequest = {
            /**
             * Reservation ID.
             */
            reservationId: string;
            revision?: string;
        };
        type tableReservationsV1ReservationDeleteReservationResponse = {};
        type tableReservationsV1ReservationDetails = {
            /**
             * End date and time of the reservation.
             */
            endDate?: Date;
            /**
             * Party size.
             */
            partySize?: number;
            /**
             * ID of the reservation location at which this reservation will be made.
             */
            reservationLocationId?: string;
            /**
             * Start date and time of the reservation.
             */
            startDate?: Date;
            /**
             * IDs of tables used for this reservation.
             */
            tableIds?: Array<string>;
        };
        type tableReservationsV1ReservationDomainEvent = {
            /**
             * Unique event ID.
             * Allows clients to ignore duplicate webhooks.
             */
            _id?: string;
            actionEvent?: Events.tableReservationsV1ReservationActionEvent;
            createdEvent?: Events.tableReservationsV1ReservationEntityCreatedEvent;
            deletedEvent?: Events.tableReservationsV1ReservationEntityDeletedEvent;
            /**
             * A sequence number defining the order of updates to the underlying entity.
             * For example, given that some entity was updated at 16:00 and than again at 16:01,
             * it is guaranteed that the sequence number of the second update is strictly higher than the first.
             * As the consumer, you can use this value to ensure that you handle messages in the correct order.
             * To do so, you will need to persist this number on your end, and compare the sequence number from the
             * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
             */
            entityEventSequence?: string;
            /**
             * Assumes actions are also always typed to an entity_type
             * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
             */
            entityFqdn?: string;
            /**
             * ID of the entity associated with the event.
             */
            entityId?: string;
            /**
             * Event timestamp.
             */
            eventTime?: Date;
            /**
             * If present, indicates the action that triggered the event.
             */
            originatedFrom?: string;
            /**
             * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
             * This is although the created/updated/deleted notion is duplication of the oneof types
             * Example: created/updated/deleted/started/completed/email_opened
             */
            slug?: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application
             * (for example, GDPR).
             */
            triggeredByAnonymizeRequest?: boolean;
            updatedEvent?: Events.tableReservationsV1ReservationEntityUpdatedEvent;
        };
        type tableReservationsV1ReservationDomainEventBodyOneOf = {
            actionEvent?: Events.tableReservationsV1ReservationActionEvent;
            createdEvent?: Events.tableReservationsV1ReservationEntityCreatedEvent;
            deletedEvent?: Events.tableReservationsV1ReservationEntityDeletedEvent;
            updatedEvent?: Events.tableReservationsV1ReservationEntityUpdatedEvent;
        };
        type tableReservationsV1ReservationEmpty = {};
        type tableReservationsV1ReservationEntityCreatedEvent = {
            entityAsJson?: string;
        };
        type tableReservationsV1ReservationEntityDeletedEvent = {
            /**
             * Entity that was deleted
             */
            deletedEntityAsJson?: string;
        };
        type tableReservationsV1ReservationEntityUpdatedEvent = {
            /**
             * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
             * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
             * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
             */
            currentEntityAsJson?: string;
        };
        type tableReservationsV1ReservationGetReservationRequest = {
            /**
             * Array of named, predefined sets of projected fields to be returned.
             *
             * - `PUBLIC`: Returns `id`, `status`, `details.reservationLocationId`, `details.startDate`, `details.endDate`, `details.partySize`, `createdDate`, `revision`, `declineReason`.
             * `configuration.reservationForm.customFieldDefinitions`, `configuration.reservationForm.lastNameRequired`, `configuration.reservationForm.emailRequired`, `configuration.reservationForm.emailMarketingCheckbox`.
             * - `FULL`: Returns all fields.
             *
             * Default: If `fields` is omitted from the request, `PUBLIC`.
             */
            fieldsets?: Array<string>;
            /**
             * Reservation ID.
             */
            reservationId: string;
        };
        type tableReservationsV1ReservationGetReservationResponse = {
            /**
             * Reservation.
             */
            reservation?: Events.tableReservationsV1ReservationReservation;
        };
        type tableReservationsV1ReservationGroupByAggregation = {
            fieldPath?: string;
            name?: string;
            value?: Events.tableReservationsV1ReservationValueAggregation;
        };
        type tableReservationsV1ReservationGroupByAggregationKindOneOf = {
            value?: Events.tableReservationsV1ReservationValueAggregation;
        };
        type tableReservationsV1ReservationGroupByValueResults = {
            results?: Array<Events.tableReservationsV1ReservationNestedValueAggregationResult>;
        };
        type tableReservationsV1ReservationHeldReservationDetails = {
            /**
             * Party size.
             */
            partySize?: number;
            /**
             * ID of the reservation location where the reservation is made.
             */
            reservationLocationId?: string;
            /**
             * Start date and time of the reservation.
             */
            startDate?: Date;
        };
        type tableReservationsV1ReservationIncludeMissingValuesOptions = {
            /**
             * can specify custom bucket name. Defaults are [string -> "N/A"], [int -> "0"], [bool -> "false"] ...
             */
            addToBucket?: string;
        };
        type tableReservationsV1ReservationListReservationsRequest = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            paging?: Events.tableReservationsV1ReservationCursorPaging;
            /**
             * Defines how reservations in the response are sorted.
             */
            sort?: Events.tableReservationsV1ReservationSorting;
            /**
             * Only reservations starting after this date are returned.
             */
            startDateFrom?: Date;
            /**
             * Only reservations starting before this date are returned.
             */
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
            status?: string;
        };
        type tableReservationsV1ReservationListReservationsResponse = {
            /**
             * Metadata for the paginated results.
             */
            pagingMetadata?: Events.tableReservationsV1ReservationCursorPagingMetadata;
            /**
             * List of reservations.
             */
            reservations?: Array<Events.tableReservationsV1ReservationReservation>;
        };
        type tableReservationsV1ReservationLocationActionEvent = {
            bodyAsJson?: string;
        };
        type tableReservationsV1ReservationLocationAddress = {
            /**
             * City name.
             */
            city?: string;
            /**
             * 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
             */
            country?: string;
            /**
             * Full address of the location.
             */
            formatted?: string;
            /**
             * Geographic coordinates of the location.
             */
            location?: Events.tableReservationsV1ReservationLocationAddressLocation;
            /**
             * Postal or zip code.
             */
            postalCode?: string;
            /**
             * Street address of the location. Includes street name, number, and apartment number in separate fields.
             */
            streetAddress?: Events.tableReservationsV1ReservationLocationStreetAddress;
            /**
             * Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
             */
            subdivision?: string;
        };
        type tableReservationsV1ReservationLocationAddressLocation = {
            /**
             * Latitude of the location. Must be between -90 and 90.
             */
            latitude?: number;
            /**
             * Longitude of the location. Must be between -180 and 180.
             */
            longitude?: number;
        };
        type tableReservationsV1ReservationLocationApp = {
            /**
             * The AppDefId
             */
            appDefId?: string;
            /**
             * The instance Id
             */
            instanceId?: string;
        };
        type tableReservationsV1ReservationLocationAsset = {
            /**
             * An application definition id (app_id in dev-center). For legacy reasons may be UUID or a string (from Java Enum).
             */
            appDefId?: string;
            /**
             * An instance id. For legacy reasons may be UUID or a string.
             */
            instanceId?: string;
            /**
             * An application state.
             */
            state?: string;
        };
        type tableReservationsV1ReservationLocationAssignedFromFloatingReason = {};
        type tableReservationsV1ReservationLocationBackendEventMetadata = {
            /**
             * ID of the entity associated with the event.
             */
            entityId: string;
            /**
             * Event timestamp.
             */
            eventTime: string;
            /**
             * Event ID.
             */
            id: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application (for example, [GDPR](https://support.wix.com/en/article/gdpr-frequently-asked-questions)). For advanced users.
             */
            triggeredByAnonymizeRequest: boolean;
        };
        type tableReservationsV1ReservationLocationBooleanFeature = {};
        type tableReservationsV1ReservationLocationBusinessSchedule = {
            periods?: Array<Events.tableReservationsV1ReservationLocationTimePeriod>;
            /**
             * Time periods during which this location is open. Each period represents a range of hours during the week during which the location is
             * open.
             *
             * Max: 100 time periods
             */
            specialHourPeriod?: Array<Events.tableReservationsV1ReservationLocationSpecialHourPeriod>;
        };
        type tableReservationsV1ReservationLocationCancelRequestedReason = {};
        type tableReservationsV1ReservationLocationCheckReservationLocationsCreatedRequest = {};
        type tableReservationsV1ReservationLocationCheckReservationLocationsCreatedResponse = {
            /**
             * Reservation locations created.
             */
            created?: boolean;
        };
        type tableReservationsV1ReservationLocationConfiguration = {
            /**
             * "My reservations" field details.
             *
             * These are the fields that appear in the "My reservations" section of the Table Reservations page on the restaurant's Wix site dashboard.
             */
            myReservationsFields?: Array<Events.tableReservationsV1ReservationLocationMyReservationsField>;
            /**
             * Settings for this location that are used to determine restaurant availability for reservations made online.
             */
            onlineReservations?: Events.tableReservationsV1ReservationLocationOnlineReservations;
            /**
             * Reservation form settings.
             */
            reservationForm?: Events.tableReservationsV1ReservationLocationReservationForm;
            /**
             * Table management settings.
             */
            tableManagement?: Events.tableReservationsV1ReservationLocationTableManagement;
        };
        type tableReservationsV1ReservationLocationContractSwitchedReason = {};
        type tableReservationsV1ReservationLocationCursorPaging = {
            /**
             * Pointer to the next or previous page in the list of results.
             *
             * You can get the relevant cursor token
             * from the `pagingMetadata` object in the previous call's response.
             * Not relevant for the first request.
             */
            cursor?: string;
            /**
             * Number of items to load.
             */
            limit?: number;
        };
        type tableReservationsV1ReservationLocationCursorPagingMetadata = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Offset that was requested.
             */
            cursors?: Events.tableReservationsV1ReservationLocationCursors;
            /**
             * Indicates if there are more results after the current page.
             * If `true`, another page of results can be retrieved.
             * If `false`, this is the last page.
             */
            hasNext?: boolean;
        };
        type tableReservationsV1ReservationLocationCursors = {
            /**
             * Cursor pointing to next page in the list of results.
             */
            next?: string;
            /**
             * Cursor pointing to previous page in the list of results.
             */
            prev?: string;
        };
        type tableReservationsV1ReservationLocationCustomFieldDefinition = {
            /**
             * Custom field ID.
             */
            _id?: string;
            /**
             * Custom field name.
             */
            name?: string;
            /**
             * Whether the custom field is required.
             *
             * Default: `false`
             */
            required?: boolean;
        };
        type tableReservationsV1ReservationLocationDeleteContext = {
            /**
             * When the meta site was deleted.
             */
            dateDeleted?: Date;
            /**
             * A reason (flow).
             */
            deleteOrigin?: string;
            /**
             * A status.
             */
            deleteStatus?: string;
            /**
             * A service that deleted it.
             */
            initiatorId?: string;
        };
        type tableReservationsV1ReservationLocationDeleteOrphanReservationLocationRequest = {
            /**
             * Id of the ReservationLocation.
             */
            reservationLocationId?: string;
        };
        type tableReservationsV1ReservationLocationDeleteOrphanReservationLocationResponse = {};
        type tableReservationsV1ReservationLocationDomainEvent = {
            /**
             * Unique event ID.
             * Allows clients to ignore duplicate webhooks.
             */
            _id?: string;
            actionEvent?: Events.tableReservationsV1ReservationLocationActionEvent;
            createdEvent?: Events.tableReservationsV1ReservationLocationEntityCreatedEvent;
            deletedEvent?: Events.tableReservationsV1ReservationLocationEntityDeletedEvent;
            /**
             * A sequence number defining the order of updates to the underlying entity.
             * For example, given that some entity was updated at 16:00 and than again at 16:01,
             * it is guaranteed that the sequence number of the second update is strictly higher than the first.
             * As the consumer, you can use this value to ensure that you handle messages in the correct order.
             * To do so, you will need to persist this number on your end, and compare the sequence number from the
             * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
             */
            entityEventSequence?: string;
            /**
             * Assumes actions are also always typed to an entity_type
             * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
             */
            entityFqdn?: string;
            /**
             * ID of the entity associated with the event.
             */
            entityId?: string;
            /**
             * Event timestamp.
             */
            eventTime?: Date;
            /**
             * If present, indicates the action that triggered the event.
             */
            originatedFrom?: string;
            /**
             * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
             * This is although the created/updated/deleted notion is duplication of the oneof types
             * Example: created/updated/deleted/started/completed/email_opened
             */
            slug?: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application
             * (for example, GDPR).
             */
            triggeredByAnonymizeRequest?: boolean;
            updatedEvent?: Events.tableReservationsV1ReservationLocationEntityUpdatedEvent;
        };
        type tableReservationsV1ReservationLocationDomainEventBodyOneOf = {
            actionEvent?: Events.tableReservationsV1ReservationLocationActionEvent;
            createdEvent?: Events.tableReservationsV1ReservationLocationEntityCreatedEvent;
            deletedEvent?: Events.tableReservationsV1ReservationLocationEntityDeletedEvent;
            updatedEvent?: Events.tableReservationsV1ReservationLocationEntityUpdatedEvent;
        };
        type tableReservationsV1ReservationLocationEmailMarketingCheckbox = {
            /**
             * Whether the checkbox is checked by default.
             *
             * Default: `false`
             */
            checkedByDefault?: boolean;
            /**
             * Whether the checkbox is shown to the customer.
             *
             * Default: `false`
             */
            enabled?: boolean;
        };
        type tableReservationsV1ReservationLocationEmpty = {};
        type tableReservationsV1ReservationLocationEntityCreatedEvent = {
            entityAsJson?: string;
        };
        type tableReservationsV1ReservationLocationEntityDeletedEvent = {
            /**
             * Entity that was deleted
             */
            deletedEntityAsJson?: string;
        };
        type tableReservationsV1ReservationLocationEntityUpdatedEvent = {
            /**
             * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
             * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
             * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
             */
            currentEntityAsJson?: string;
        };
        type tableReservationsV1ReservationLocationFeature = {
            /**
             * ID of the feature. __Note:__ Isn't unique. For example, all features that
             * are available to free Wix accounts or site in some capacity have
             * `{"id": "DEFAULT"}`. Use `uniqueName` as unique identifier for a feature.
             */
            _id?: string;
            /**
             * Deprecated. Use `enabled` instead.
             */
            booleanFeature?: Events.tableReservationsV1ReservationLocationBooleanFeature;
            /**
             * Information about whether the feature belongs to a Wix account or site.
             * Account features have `context.userId`. Site features have `context.metaSiteId` in case
             * they're assigned to a specific site. Site features that aren't assigned to
             * a specific site have neither ID.
             */
            context?: Events.tableReservationsV1ReservationLocationFeatureContext;
            /**
             * Deprecated.
             */
            createdAt?: Date;
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
             * Metadata of the feature. Wix Premium uses the metadata object to indicate
             * that customers who purchase a product with the feature also get
             * access to an additional product. For these bundled products `metadata`
             * looks like this: `{"tpa": "{"appDefId": "sample-app-def-id-1234567890", "vendorProductId": "sample-productId"}}"`.
             * But you can use the `metadata` property for other purposes, too.
             */
            metadata?: Record<string, string>;
            /**
             * Deprecated. Use `quotaInfo` instead.
             */
            quotaFeature?: Events.tableReservationsV1ReservationLocationQuotaFeature;
            /**
             * Information about how often customers can use the feature during a specific
             * period. Available only for quota features.
             */
            quotaInfo?: Events.tableReservationsV1ReservationLocationQuotaInfo;
            /**
             * ID of the [subscription](https://bo.wix.com/wix-docs/rest/premium/premium-subscriptions-manager/subscription-object)
             * to which the feature instance belongs.
             */
            subscriptionId?: string;
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
             * Deprecated.
             */
            updatedAt?: Date;
        };
        type tableReservationsV1ReservationLocationFeatureCancelled = {
            /**
             * Information about the feature cancellation.
             */
            cancelRequest?: Events.tableReservationsV1ReservationLocationCancelRequestedReason;
            /**
             * Information about the contract switch.
             */
            contractSwitched?: Events.tableReservationsV1ReservationLocationContractSwitchedReason;
            /**
             * Canceled feature.
             */
            feature?: Events.tableReservationsV1ReservationLocationFeature;
            /**
             * Information about a transfer to the account.
             * __Deprecated__. Use `reason.transferred_to_account` instead.
             */
            transferredToAccount?: string;
            /**
             * Information about a transfer to the account.
             */
            transferredToAnotherAccount?: Events.tableReservationsV1ReservationLocationTransferredToAnotherAccountReason;
        };
        type tableReservationsV1ReservationLocationFeatureCancelledReasonOneOf = {
            /**
             * Information about the feature cancellation.
             */
            cancelRequest?: Events.tableReservationsV1ReservationLocationCancelRequestedReason;
            /**
             * Information about the contract switch.
             */
            contractSwitched?: Events.tableReservationsV1ReservationLocationContractSwitchedReason;
            /**
             * Information about a transfer to the account.
             */
            transferredToAnotherAccount?: Events.tableReservationsV1ReservationLocationTransferredToAnotherAccountReason;
        };
        type tableReservationsV1ReservationLocationFeatureContext = {
            /**
             * ID of the meta site that the feature instance is assigned to.
             * Only available for site level feature instances that are assigned to a Wix
             * site. Not available for account level and unassigned site level feature
             * instances.
             */
            metaSiteId?: string;
            /**
             * ID of the Wix account that the feature instance belongs to.
             * Available for both site and account level feature instances.
             */
            userId?: string;
        };
        type tableReservationsV1ReservationLocationFeatureDisabled = {
            /**
             * Disabled feature. Includes information about the feature's new state,
             * possibly its new context.
             */
            feature?: Events.tableReservationsV1ReservationLocationFeature;
            /**
             * ID of the meta site for which the feature has been disabled.
             */
            metaSiteId?: string;
            /**
             * Information about a feature that's been reassigned to a different
             * site.
             */
            reassignedToAnotherSite?: Events.tableReservationsV1ReservationLocationReassignedToAnotherSiteReason;
            /**
             * Information about a feature that's been replaced by a feature from a
             * different subscription.
             */
            replacedByAnotherSubscription?: Events.tableReservationsV1ReservationLocationReplacedByAnotherSubscriptionReason;
            /**
             * Information about a feature that's no longer assigned to a site.
             */
            unassingedToFloating?: Events.tableReservationsV1ReservationLocationUnAssingedToFloatingReason;
        };
        type tableReservationsV1ReservationLocationFeatureDisabledReasonOneOf = {
            /**
             * Information about a feature that's been reassigned to a different
             * site.
             */
            reassignedToAnotherSite?: Events.tableReservationsV1ReservationLocationReassignedToAnotherSiteReason;
            /**
             * Information about a feature that's been replaced by a feature from a
             * different subscription.
             */
            replacedByAnotherSubscription?: Events.tableReservationsV1ReservationLocationReplacedByAnotherSubscriptionReason;
            /**
             * Information about a feature that's no longer assigned to a site.
             */
            unassingedToFloating?: Events.tableReservationsV1ReservationLocationUnAssingedToFloatingReason;
        };
        type tableReservationsV1ReservationLocationFeatureEnabled = {
            /**
             * Information about a feature that hadn't been assigned to site.
             */
            assignedFromFloating?: Events.tableReservationsV1ReservationLocationAssignedFromFloatingReason;
            /**
             * Information about the contract switch.
             */
            contractSwitched?: Events.tableReservationsV1ReservationLocationContractSwitchedReason;
            /**
             * Enabled feature.
             */
            feature?: Events.tableReservationsV1ReservationLocationFeature;
            /**
             * Information about the manually created features.
             */
            manualFeatureCreation?: Events.tableReservationsV1ReservationLocationManualFeatureCreationReason;
            /**
             * Information about a feature that was migrated from legacy.
             */
            migratedFromLegacy?: Events.tableReservationsV1ReservationLocationMigratedFromLegacyReason;
            /**
             * Information about the new feature.
             */
            newFeature?: Events.tableReservationsV1ReservationLocationNewFeatureReason;
            /**
             * Information about a transfer from another site.
             * __Deprecated__. Use `reason.reassigned_from_site` instead.
             */
            reassignedFromMetasite?: string;
            /**
             * Information about a transfer from another site.
             */
            reassignedFromSite?: Events.tableReservationsV1ReservationLocationReassignedFromSiteReason;
            /**
             * Information about a transfer from another account.
             * __Deprecated__. Use `reason.transferred_from_another_account` instead.
             */
            transferredFromAccount?: string;
            /**
             * Information about a transfer from another account.
             */
            transferredFromAnotherAccount?: Events.tableReservationsV1ReservationLocationTransferredFromAnotherAccountReason;
        };
        type tableReservationsV1ReservationLocationFeatureEnabledReasonOneOf = {
            /**
             * Information about a feature that hadn't been assigned to site.
             */
            assignedFromFloating?: Events.tableReservationsV1ReservationLocationAssignedFromFloatingReason;
            /**
             * Information about the contract switch.
             */
            contractSwitched?: Events.tableReservationsV1ReservationLocationContractSwitchedReason;
            /**
             * Information about the manually created features.
             */
            manualFeatureCreation?: Events.tableReservationsV1ReservationLocationManualFeatureCreationReason;
            /**
             * Information about a feature that was migrated from legacy.
             */
            migratedFromLegacy?: Events.tableReservationsV1ReservationLocationMigratedFromLegacyReason;
            /**
             * Information about the new feature.
             */
            newFeature?: Events.tableReservationsV1ReservationLocationNewFeatureReason;
            /**
             * Information about a transfer from another site.
             */
            reassignedFromSite?: Events.tableReservationsV1ReservationLocationReassignedFromSiteReason;
            /**
             * Information about a transfer from another account.
             */
            transferredFromAnotherAccount?: Events.tableReservationsV1ReservationLocationTransferredFromAnotherAccountReason;
        };
        type tableReservationsV1ReservationLocationFeatureEvent = {
            /**
             * Information about an event that cancels a feature for the user.
             * Triggered for example, when a feature is canceled, transferred to
             * another account, or the user switched to a different contract.
             */
            cancelled?: Events.tableReservationsV1ReservationLocationFeatureCancelled;
            /**
             * Information about an event that disables a feature for the user.
             * Triggered for example, when a feature is unassigned from a site,
             * reassigned to a different site, or the user switched to a different contract.
             */
            disabled?: Events.tableReservationsV1ReservationLocationFeatureDisabled;
            /**
             * Information about an event that makes a feature eligible to the user.
             * Triggered for example, for new features or when a feature is reassigned
             * to an account or a site.
             */
            enabled?: Events.tableReservationsV1ReservationLocationFeatureEnabled;
            /**
             * Timestamp of the event in
             * [UTC time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
             */
            timestamp?: Date;
            /**
             * Information about an event that updates a feature. An `updated` event
             * is triggered for example by the
             * [Report Quota Usage](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/report-quota-usage)
             * and [Reset Usage Counter](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/reset-usage-counter)
             * endpoints.
             */
            updated?: Events.tableReservationsV1ReservationLocationFeatureUpdated;
        };
        type tableReservationsV1ReservationLocationFeatureEventEventOneOf = {
            /**
             * Information about an event that cancels a feature for the user.
             * Triggered for example, when a feature is canceled, transferred to
             * another account, or the user switched to a different contract.
             */
            cancelled?: Events.tableReservationsV1ReservationLocationFeatureCancelled;
            /**
             * Information about an event that disables a feature for the user.
             * Triggered for example, when a feature is unassigned from a site,
             * reassigned to a different site, or the user switched to a different contract.
             */
            disabled?: Events.tableReservationsV1ReservationLocationFeatureDisabled;
            /**
             * Information about an event that makes a feature eligible to the user.
             * Triggered for example, for new features or when a feature is reassigned
             * to an account or a site.
             */
            enabled?: Events.tableReservationsV1ReservationLocationFeatureEnabled;
            /**
             * Information about an event that updates a feature. An `updated` event
             * is triggered for example by the
             * [Report Quota Usage](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/report-quota-usage)
             * and [Reset Usage Counter](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/reset-usage-counter)
             * endpoints.
             */
            updated?: Events.tableReservationsV1ReservationLocationFeatureUpdated;
        };
        type tableReservationsV1ReservationLocationFeatureQuantityInfoOneOf = {
            /**
             * Deprecated. Use `enabled` instead.
             */
            booleanFeature?: Events.tableReservationsV1ReservationLocationBooleanFeature;
            /**
             * Deprecated. Use `quotaInfo` instead.
             */
            quotaFeature?: Events.tableReservationsV1ReservationLocationQuotaFeature;
        };
        type tableReservationsV1ReservationLocationFeatureUpdated = {
            /**
             * Information about a feature that doesn't have a usage quota.
             */
            booleanFeature?: Events.tableReservationsV1ReservationLocationBooleanFeature;
            /**
             * Information about the contract switch.
             */
            contractSwitched?: Events.tableReservationsV1ReservationLocationContractSwitchedReason;
            /**
             * Updated feature. Includes information about the feature's new state and
             * possibly its new context.
             */
            feature?: Events.tableReservationsV1ReservationLocationFeature;
            /**
             * Information about a feature that has a usage quota.
             */
            quotaFeature?: Events.tableReservationsV1ReservationLocationQuotaFeature;
        };
        type tableReservationsV1ReservationLocationFeatureUpdatedPreviousQuantityInfoOneOf = {
            /**
             * Information about a feature that doesn't have a usage quota.
             */
            booleanFeature?: Events.tableReservationsV1ReservationLocationBooleanFeature;
            /**
             * Information about a feature that has a usage quota.
             */
            quotaFeature?: Events.tableReservationsV1ReservationLocationQuotaFeature;
        };
        type tableReservationsV1ReservationLocationFeatureUpdatedReasonOneOf = {
            /**
             * Information about the contract switch.
             */
            contractSwitched?: Events.tableReservationsV1ReservationLocationContractSwitchedReason;
        };
        type tableReservationsV1ReservationLocationGetReservationLocationRequest = {
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
            fieldsets?: Array<string>;
            /**
             * ID of the ReservationLocation to retrieve.
             */
            reservationLocationId: string;
        };
        type tableReservationsV1ReservationLocationGetReservationLocationResponse = {
            /**
             * The retrieved reservation location.
             */
            reservationLocation?: Events.tableReservationsV1ReservationLocationReservationLocation;
        };
        type tableReservationsV1ReservationLocationInvalidateCache = {
            /**
             * Invalidate by App
             */
            app?: Events.tableReservationsV1ReservationLocationApp;
            /**
             * Is local DS
             */
            localDc?: boolean;
            /**
             * Invalidate by msId. NOT recommended, as this will invalidate the entire site cache!
             */
            metaSiteId?: string;
            /**
             * Invalidate by page id
             */
            page?: Events.tableReservationsV1ReservationLocationPage;
            /**
             * tell us why you're invalidating the cache. You don't need to add your app name
             */
            reason?: string;
            /**
             * Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache!
             */
            siteId?: string;
            /**
             * Invalidate by URI path
             */
            uri?: Events.tableReservationsV1ReservationLocationUri;
        };
        type tableReservationsV1ReservationLocationInvalidateCacheGetByOneOf = {
            /**
             * Invalidate by App
             */
            app?: Events.tableReservationsV1ReservationLocationApp;
            /**
             * Invalidate by msId. NOT recommended, as this will invalidate the entire site cache!
             */
            metaSiteId?: string;
            /**
             * Invalidate by page id
             */
            page?: Events.tableReservationsV1ReservationLocationPage;
            /**
             * Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache!
             */
            siteId?: string;
            /**
             * Invalidate by URI path
             */
            uri?: Events.tableReservationsV1ReservationLocationUri;
        };
        type tableReservationsV1ReservationLocationListReservationLocationsRequest = {
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
            fieldsets?: Array<string>;
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            paging?: Events.tableReservationsV1ReservationLocationCursorPaging;
            /**
             * Sorting for the locations list.
             */
            sort?: Events.tableReservationsV1ReservationLocationSorting;
        };
        type tableReservationsV1ReservationLocationListReservationLocationsResponse = {
            /**
             * Metadata for the paginated results.
             */
            pagingMetadata?: Events.tableReservationsV1ReservationLocationCursorPagingMetadata;
            /**
             * Locations list.
             */
            reservationLocations?: Array<Events.tableReservationsV1ReservationLocationReservationLocation>;
        };
        type tableReservationsV1ReservationLocationLocation = {
            /**
             * Location ID.
             */
            _id?: string;
        };
        type tableReservationsV1ReservationLocationManualApproval = {
            /**
             * Custom approvals provider id.
             */
            customApprovalsProviderId?: string;
            /**
             * Whether manual approval is required for online reservations.
             */
            enabled?: boolean;
            /**
             * The minimum party size that requires manual approval.
             */
            partySizeThreshold?: number;
        };
        type tableReservationsV1ReservationLocationManualApprovalValueOneOf = {
            /**
             * Custom approvals provider id.
             */
            customApprovalsProviderId?: string;
            /**
             * The minimum party size that requires manual approval.
             */
            partySizeThreshold?: number;
        };
        type tableReservationsV1ReservationLocationManualFeatureCreationReason = {};
        type tableReservationsV1ReservationLocationMetaSiteSpecialEvent = {
            /**
             * A list of "assets" (applications). The same as MetaSiteContext.
             */
            assets?: Array<Events.tableReservationsV1ReservationLocationAsset>;
            /**
             * Emitted when meta site was permanently deleted.
             */
            hardDeleted?: Events.tableReservationsV1ReservationLocationSiteHardDeleted;
            /**
             * A meta site id.
             */
            metaSiteId?: string;
            /**
             * Emitted on a namespace change.
             */
            namespaceChanged?: Events.tableReservationsV1ReservationLocationNamespaceChanged;
            /**
             * Emitted when an application is provisioned (installed).
             */
            serviceProvisioned?: Events.tableReservationsV1ReservationLocationServiceProvisioned;
            /**
             * Emitted when an application is removed (uninstalled).
             */
            serviceRemoved?: Events.tableReservationsV1ReservationLocationServiceRemoved;
            /**
             * Emitted on a meta site creation.
             */
            siteCreated?: Events.tableReservationsV1ReservationLocationSiteCreated;
            /**
             * Emitted on a meta site deletion.
             */
            siteDeleted?: Events.tableReservationsV1ReservationLocationSiteDeleted;
            /**
             * Emitted when meta site is marked as template.
             */
            siteMarkedAsTemplate?: Events.tableReservationsV1ReservationLocationSiteMarkedAsTemplate;
            /**
             * Emitted when meta site is marked as a WixSite.
             */
            siteMarkedAsWixSite?: Events.tableReservationsV1ReservationLocationSiteMarkedAsWixSite;
            /**
             * Emitted on the first* publish of the meta site (* switching from unpublished to published state).
             */
            sitePublished?: Events.tableReservationsV1ReservationLocationSitePublished;
            /**
             * Emitted when meta site name (URL slug) is changed.
             */
            siteRenamedPayload?: Events.tableReservationsV1ReservationLocationSiteRenamed;
            /**
             * Emitted on a meta site transfer completion.
             */
            siteTransferred?: Events.tableReservationsV1ReservationLocationSiteTransferred;
            /**
             * Emitted on a meta site restoration.
             */
            siteUndeleted?: Events.tableReservationsV1ReservationLocationSiteUndeleted;
            /**
             * Emitted on a meta site unpublish.
             */
            siteUnpublished?: Events.tableReservationsV1ReservationLocationSiteUnpublished;
            /**
             * Emitted when Studio is attached.
             */
            studioAssigned?: Events.tableReservationsV1ReservationLocationStudioAssigned;
            /**
             * Emitted when Studio is detached.
             */
            studioUnassigned?: Events.tableReservationsV1ReservationLocationStudioUnassigned;
            /**
             * A timestamp of the event.
             */
            timestamp?: string;
            /**
             * A meta site version. Monotonically increasing.
             */
            version?: string;
        };
        type tableReservationsV1ReservationLocationMetaSiteSpecialEventPayloadOneOf = {
            /**
             * Emitted when meta site was permanently deleted.
             */
            hardDeleted?: Events.tableReservationsV1ReservationLocationSiteHardDeleted;
            /**
             * Emitted on a namespace change.
             */
            namespaceChanged?: Events.tableReservationsV1ReservationLocationNamespaceChanged;
            /**
             * Emitted when an application is provisioned (installed).
             */
            serviceProvisioned?: Events.tableReservationsV1ReservationLocationServiceProvisioned;
            /**
             * Emitted when an application is removed (uninstalled).
             */
            serviceRemoved?: Events.tableReservationsV1ReservationLocationServiceRemoved;
            /**
             * Emitted on a meta site creation.
             */
            siteCreated?: Events.tableReservationsV1ReservationLocationSiteCreated;
            /**
             * Emitted on a meta site deletion.
             */
            siteDeleted?: Events.tableReservationsV1ReservationLocationSiteDeleted;
            /**
             * Emitted when meta site is marked as template.
             */
            siteMarkedAsTemplate?: Events.tableReservationsV1ReservationLocationSiteMarkedAsTemplate;
            /**
             * Emitted when meta site is marked as a WixSite.
             */
            siteMarkedAsWixSite?: Events.tableReservationsV1ReservationLocationSiteMarkedAsWixSite;
            /**
             * Emitted on the first* publish of the meta site (* switching from unpublished to published state).
             */
            sitePublished?: Events.tableReservationsV1ReservationLocationSitePublished;
            /**
             * Emitted when meta site name (URL slug) is changed.
             */
            siteRenamedPayload?: Events.tableReservationsV1ReservationLocationSiteRenamed;
            /**
             * Emitted on a meta site transfer completion.
             */
            siteTransferred?: Events.tableReservationsV1ReservationLocationSiteTransferred;
            /**
             * Emitted on a meta site restoration.
             */
            siteUndeleted?: Events.tableReservationsV1ReservationLocationSiteUndeleted;
            /**
             * Emitted on a meta site unpublish.
             */
            siteUnpublished?: Events.tableReservationsV1ReservationLocationSiteUnpublished;
            /**
             * Emitted when Studio is attached.
             */
            studioAssigned?: Events.tableReservationsV1ReservationLocationStudioAssigned;
            /**
             * Emitted when Studio is detached.
             */
            studioUnassigned?: Events.tableReservationsV1ReservationLocationStudioUnassigned;
        };
        type tableReservationsV1ReservationLocationMigrateOldRestaurantSettingsRequest = {
            /**
             * Mode.
             */
            mode?: string;
            /**
             * Override not default.
             */
            overrideNotDefault?: boolean;
        };
        type tableReservationsV1ReservationLocationMigrateOldRestaurantSettingsResponse = {
            /**
             * Migration results.
             */
            migrationResults?: Array<Events.tableReservationsV1ReservationLocationMigrationResult>;
        };
        type tableReservationsV1ReservationLocationMigratedFromLegacyReason = {};
        type tableReservationsV1ReservationLocationMigrationParsingError = {
            /**
             * Message.
             */
            message?: string;
            /**
             * Field.
             */
            path?: string;
            /**
             * Target.
             */
            target?: Object;
        };
        type tableReservationsV1ReservationLocationMigrationResult = {
            /**
             * Migration parsing errors.
             */
            migrationParsingErrors?: Array<Events.tableReservationsV1ReservationLocationMigrationParsingError>;
            /**
             * Old settings.
             */
            oldSettings?: Object;
            /**
             * Parsed settings.
             */
            parsedSettings?: Events.tableReservationsV1ReservationLocationParsedSettings;
            /**
             * The migrated ReservationLocation.
             */
            reservationLocation?: Events.tableReservationsV1ReservationLocationReservationLocation;
        };
        type tableReservationsV1ReservationLocationMyReservationsField = {
            /**
             * Custom field ID.
             *
             * This should only be provided if the `fieldType` is `CUSTOM_FIELD`, in which case it is required and must match the ID of a custom field in the `customFieldDefinitions` array of the `reservationForm`.
             */
            customFieldId?: string;
            /**
             * Field type.
             */
            fieldType?: string;
            /**
             * Whether the field is shown.
             */
            shown?: boolean;
        };
        type tableReservationsV1ReservationLocationNamespaceChanged = {
            /**
             * A new namespace.
             */
            newNamespace?: string;
            /**
             * A previous namespace.
             */
            oldNamespace?: string;
        };
        type tableReservationsV1ReservationLocationNewFeatureReason = {};
        type tableReservationsV1ReservationLocationNoticePeriod = {
            /**
             * The quantity of the chosen time unit.
             */
            number?: number;
            /**
             * Time unit.
             */
            unit?: string;
        };
        type tableReservationsV1ReservationLocationOldCustomField = {
            label?: string;
            required?: boolean;
        };
        type tableReservationsV1ReservationLocationOldInstant = {
            day?: number;
            hour?: number;
            minute?: number;
            month?: number;
            year?: number;
        };
        type tableReservationsV1ReservationLocationOldPolicy = {
            isPlainText?: boolean;
            value?: string;
        };
        type tableReservationsV1ReservationLocationOldScheduleException = {
            available?: boolean;
            comment?: string;
            end?: Events.tableReservationsV1ReservationLocationOldInstant;
            start?: Events.tableReservationsV1ReservationLocationOldInstant;
        };
        type tableReservationsV1ReservationLocationOldScheduleInterval = {
            durationMins?: number;
            minuteOfWeek?: number;
        };
        type tableReservationsV1ReservationLocationOldTerms = {
            isPlainText?: boolean;
            value?: string;
        };
        type tableReservationsV1ReservationLocationOnlineReservations = {
            /**
             * The location's business schedule.
             *
             * By default, the business schedule of a reservation location uses the values of its location's business schedule. However, after the first time a reservation location's business schedule has been modified, it stores and uses its own values and no longer mirrors its location's business schedule.
             * Limited to 100 time periods.
             */
            businessSchedule?: Events.tableReservationsV1ReservationLocationBusinessSchedule;
            /**
             * Default turnover time in minutes.
             *
             * Turnover time is how much time a party is allotted for their entire reservation - from being seated to leaving the restaurant.
             */
            defaultTurnoverTime?: number;
            /**
             * Manual approval settings.
             */
            manualApproval?: Events.tableReservationsV1ReservationLocationManualApproval;
            /**
             * Minimum reservation notice.
             *
             * The minimum amount of time that must be allowed between making a reservation and that reservation's start time.
             */
            minimumReservationNotice?: Events.tableReservationsV1ReservationLocationNoticePeriod;
            /**
             * Whether online reservations are enabled.
             */
            onlineReservationsEnabled?: boolean;
            /**
             * Party pacing settings.
             *
             * The maximum number of party reservations that can start within a 15-minute period.
             * For example, a party pacing of 5 would mean that no more than 5 parties could make a reservation for the period between `10:00.000`-`10:14.999`.
             */
            partyPacing?: Events.tableReservationsV1ReservationLocationPartyPacing;
            /**
             * Party size limits for a reservation.
             */
            partySize?: Events.tableReservationsV1ReservationLocationPartySize;
            /**
             * Seat pacing settings.
             *
             * The maximum number of seats that can be filled by new reservations within a 15-minute period.
             * For example, setting a seat pacing of 15 would mean that between `10:00.000`-`10:14.999` there will be no more than 15 new seats available for reservation.
             */
            seatPacing?: Events.tableReservationsV1ReservationLocationSeatPacing;
            /**
             * Whether a phone number is shown.
             */
            showPhoneNumber?: boolean;
            /**
             * Custom turnover time rules.
             *
             * This allows you to set different turnover times for different party sizes.
             */
            turnoverTimeRules?: Array<Events.tableReservationsV1ReservationLocationTurnoverTimeRule>;
        };
        type tableReservationsV1ReservationLocationPage = {
            /**
             * the msid the page is on
             */
            metaSiteId?: string;
            /**
             * Invalidate by Page ID
             */
            pageId?: string;
        };
        type tableReservationsV1ReservationLocationPaging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type tableReservationsV1ReservationLocationPagingMetadataV2 = {
            /**
             * Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used.
             */
            cursors?: Events.tableReservationsV1ReservationLocationCursors;
            /**
             * Offset that was requested.
             */
            offset?: number;
        };
        type tableReservationsV1ReservationLocationParsedSettings = {
            available?: boolean;
            customFields?: Array<Events.tableReservationsV1ReservationLocationOldCustomField>;
            futureDelayMins?: number;
            locale?: string;
            partySizeMax?: number;
            partySizeMin?: number;
            privacyPolicy?: Events.tableReservationsV1ReservationLocationOldPolicy;
            scheduleExceptions?: Array<Events.tableReservationsV1ReservationLocationOldScheduleException>;
            termsAndConditions?: Events.tableReservationsV1ReservationLocationOldTerms;
            weeklySchedule?: Array<Events.tableReservationsV1ReservationLocationOldScheduleInterval>;
        };
        type tableReservationsV1ReservationLocationPartiesSize = {
            /**
             * Maximum number of seats a party can reserve.
             */
            max?: number;
            /**
             * Minimum number of seats a party can reserve.
             */
            min?: number;
        };
        type tableReservationsV1ReservationLocationPartyPacing = {
            /**
             * Whether this option is enabled.
             */
            enabled?: boolean;
            /**
             * Maximum number of new party reservations that can be made every 15 minutes.
             */
            number?: number;
        };
        type tableReservationsV1ReservationLocationPartySize = {
            /**
             * Maximum number of seats a party can reserve.
             */
            max?: number;
            /**
             * Minimum number of seats a party can reserve.
             */
            min?: number;
        };
        type tableReservationsV1ReservationLocationPrivacyPolicy = {
            /**
             * Whether the privacy policy is shown to the customer.
             *
             * Default: `false`
             */
            enabled?: boolean;
            /**
             * Privacy policy text.
             */
            text?: string;
            /**
             * Privacy policy URL.
             */
            url?: string;
        };
        type tableReservationsV1ReservationLocationPrivacyPolicyValueOneOf = {
            /**
             * Privacy policy text.
             */
            text?: string;
            /**
             * Privacy policy URL.
             */
            url?: string;
        };
        type tableReservationsV1ReservationLocationQueryReservationLocationsRequest = {
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
            fieldsets?: Array<string>;
            /**
             * Query options.
             */
            query: Events.tableReservationsV1ReservationLocationQueryV2;
        };
        type tableReservationsV1ReservationLocationQueryReservationLocationsResponse = {
            /**
             * Metadata for the paginated results.
             */
            pagingMetadata?: Events.tableReservationsV1ReservationLocationPagingMetadataV2;
            /**
             * List of reservation locations
             */
            reservationLocations?: Array<Events.tableReservationsV1ReservationLocationReservationLocation>;
        };
        type tableReservationsV1ReservationLocationQueryV2 = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            cursorPaging?: Events.tableReservationsV1ReservationLocationCursorPaging;
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
            filter?: Object;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: Events.tableReservationsV1ReservationLocationPaging;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<Events.tableReservationsV1ReservationLocationSorting>;
        };
        type tableReservationsV1ReservationLocationQueryV2PagingMethodOneOf = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            cursorPaging?: Events.tableReservationsV1ReservationLocationCursorPaging;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: Events.tableReservationsV1ReservationLocationPaging;
        };
        type tableReservationsV1ReservationLocationQuotaFeature = {
            /**
             * Default (or Freemium) quota limitation. if left undefined the free feature has unlimited amount.
             */
            limit?: string;
            /**
             * Periodic time-frame to reset the usage counter. You may use NO_PERIOD if counter shouldn't be reset.
             */
            period?: string;
            /**
             * Usage measurement units (seconds? MBs? unitless?). Usage reported will be counted in multiples of this basic unit.
             */
            units?: string;
        };
        type tableReservationsV1ReservationLocationQuotaInfo = {
            /**
             * How often the customer has used the feature during the current
             * period.
             */
            currentUsage?: string;
            /**
             * How often the customer is allowed to use the feature during the specified
             * period. `null` means that the customer has unlimited access to the feature.
             */
            limit?: string;
            /**
             * Time frame for the usage limitation. `NO_PERIOD` means that `remainingUsage`
             * isn't automatically reset to the feature's `limit` after a specific period.
             * You may still manually call
             * [Reset Usage Counter](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/reset-usage-counter).
             */
            period?: string;
            /**
             * How often the customer can still use the feature during the current
             * period. `null` means that the customer has unlimited access to the feature.
             */
            remainingUsage?: string;
        };
        type tableReservationsV1ReservationLocationReassignedFromSiteReason = {
            /**
             * Information about a transfer from another site.
             */
            reassignedFromMetasite?: string;
        };
        type tableReservationsV1ReservationLocationReassignedToAnotherSiteReason = {
            /**
             * Information about a transfer to the site.
             */
            reassignedToMetasite?: string;
        };
        type tableReservationsV1ReservationLocationReplacedByAnotherSubscriptionReason = {};
        type tableReservationsV1ReservationLocationReservationForm = {
            /**
             * Custom fields you wish to add to the registration form for the customer to fill in.
             */
            customFieldDefinitions?: Array<Events.tableReservationsV1ReservationLocationCustomFieldDefinition>;
            /**
             * Email marketing checkbox settings.
             */
            emailMarketingCheckbox?: Events.tableReservationsV1ReservationLocationEmailMarketingCheckbox;
            /**
             * Whether an email is required in the reservation form.
             *
             * Default: `false`
             */
            emailRequired?: boolean;
            /**
             * Whether a last_name is required in the reservation form.
             *
             * Default: `false`
             */
            lastNameRequired?: boolean;
            /**
             * Whether to show policies (the terms and conditions, and the privacy policy) to the customer.
             */
            policiesEnabled?: boolean;
            /**
             * Settings for displaying the privacy policy.
             */
            privacyPolicy?: Events.tableReservationsV1ReservationLocationPrivacyPolicy;
            /**
             * A message shown to the customer in the registration form.
             */
            submitMessage?: string;
            /**
             * Settings for displaying the terms and conditions.
             */
            termsAndConditions?: Events.tableReservationsV1ReservationLocationTermsAndConditions;
        };
        type tableReservationsV1ReservationLocationReservationLocation = {
            /**
             * The date and time this reservation location was created.
             */
            _createdDate?: Date;
            /**
             * Reservation location ID.
             */
            _id?: string;
            /**
             * The date and time this reservation location was last updated.
             */
            _updatedDate?: Date;
            /**
             * Whether this reservation location's `location` is archived.
             */
            archived?: boolean;
            /**
             * Reservation location configuration.
             */
            configuration?: Events.tableReservationsV1ReservationLocationConfiguration;
            /**
             * Whether this reservation location's `location` is the default location of the business.
             */
            default?: boolean;
            /**
             * Physical location details.
             *
             * Locations can be created and configured using the [Locations API](https://dev.wix.com/docs/rest/api-reference/business-info/locations/introduction)
             * or on the [Business Info](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsettings/business-info) page in the Dashboard.
             */
            location?: Events.tableReservationsV1ReservationLocationLocation;
            /**
             * Represents the current state of a reservation location. Each time the reservation location is modified, its `revision` changes. For an update operation to succeed, you must pass the latest revision.
             */
            revision?: string;
        };
        type tableReservationsV1ReservationLocationReservationLocationCreated = {
            /**
             * Information about the reservation location that was created.
             */
            entity: Events.tableReservationsV1ReservationLocationReservationLocation;
            /**
             * Event metadata.
             */
            metadata: Events.tableReservationsV1ReservationLocationBackendEventMetadata;
        };
        type tableReservationsV1ReservationLocationReservationLocationUpdated = {
            /**
             * Information about the reservation location that was updated.
             */
            entity: Events.tableReservationsV1ReservationLocationReservationLocation;
            /**
             * Event metadata.
             */
            metadata: Events.tableReservationsV1ReservationLocationBackendEventMetadata;
        };
        type tableReservationsV1ReservationLocationSeatPacing = {
            /**
             * Whether this option is enabled.
             */
            enabled?: boolean;
            /**
             * Maximum number of seats that can be reserved every 15 minutes.
             */
            number?: number;
        };
        type tableReservationsV1ReservationLocationServiceProvisioned = {
            /**
             * Either UUID or EmbeddedServiceType.
             */
            appDefId?: string;
            /**
             * Not only UUID. Something here could be something weird.
             */
            instanceId?: string;
            /**
             * An instance id from which this instance is originated.
             */
            originInstanceId?: string;
            /**
             * A version.
             */
            version?: string;
        };
        type tableReservationsV1ReservationLocationServiceRemoved = {
            /**
             * Either UUID or EmbeddedServiceType.
             */
            appDefId?: string;
            /**
             * Not only UUID. Something here could be something weird.
             */
            instanceId?: string;
            /**
             * A version.
             */
            version?: string;
        };
        type tableReservationsV1ReservationLocationSiteCreated = {
            /**
             * A context in which meta site was created.
             */
            context?: string;
            /**
             * A namespace.
             */
            namespace?: string;
            /**
             * A meta site id from which this site was created.
             *
             * In case of a creation from a template it's a template id.
             * In case of a site duplication ("Save As" in dashboard or duplicate in UM) it's an id of a source site.
             */
            originMetaSiteId?: string;
            /**
             * A template identifier (empty if not created from a template).
             */
            originTemplateId?: string;
            /**
             * An account id of the owner.
             */
            ownerId?: string;
            /**
             * A meta site name (URL slug).
             */
            siteName?: string;
        };
        type tableReservationsV1ReservationLocationSiteDeleted = {
            /**
             * A deletion context.
             */
            deleteContext?: Events.tableReservationsV1ReservationLocationDeleteContext;
        };
        type tableReservationsV1ReservationLocationSiteHardDeleted = {
            /**
             * A deletion context.
             */
            deleteContext?: Events.tableReservationsV1ReservationLocationDeleteContext;
        };
        type tableReservationsV1ReservationLocationSiteMarkedAsTemplate = {};
        type tableReservationsV1ReservationLocationSiteMarkedAsWixSite = {};
        type tableReservationsV1ReservationLocationSitePublished = {};
        type tableReservationsV1ReservationLocationSiteRenamed = {
            /**
             * A new meta site name (URL slug).
             */
            newSiteName?: string;
            /**
             * A previous meta site name (URL slug).
             */
            oldSiteName?: string;
        };
        type tableReservationsV1ReservationLocationSiteTransferred = {
            /**
             * A new owner id (user that accepts meta site).
             */
            newOwnerId?: string;
            /**
             * A previous owner id (user that transfers meta site).
             */
            oldOwnerId?: string;
        };
        type tableReservationsV1ReservationLocationSiteUndeleted = {};
        type tableReservationsV1ReservationLocationSiteUnpublished = {
            /**
             * A list of URLs previously associated with the meta site.
             */
            urls?: Array<string>;
        };
        type tableReservationsV1ReservationLocationSorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             *
             * Use `ASC` for ascending order or `DESC` for descending order. Defaults to `ASC`.
             */
            order?: string;
        };
        type tableReservationsV1ReservationLocationSpecialHourPeriod = {
            /**
             * Additional details about the period.
             */
            comment?: string;
            /**
             * End date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#combined_date_and_time_representations) format.
             */
            endDate?: string;
            /**
             * Whether or not the location is closed during this period.
             */
            isClosed?: boolean;
            /**
             * Start date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#combined_date_and_time_representations) format.
             */
            startDate?: string;
        };
        type tableReservationsV1ReservationLocationStreetAddress = {
            /**
             * Apartment number.
             */
            apt?: string;
            /**
             * Street name.
             */
            name?: string;
            /**
             * Street number.
             */
            number?: string;
        };
        type tableReservationsV1ReservationLocationStudioAssigned = {};
        type tableReservationsV1ReservationLocationStudioUnassigned = {};
        type tableReservationsV1ReservationLocationTableCombination = {
            /**
             * Table combination ID.
             */
            _id?: string;
            /**
             * Whether the table combination is active (available to be reserved).
             */
            isActive?: boolean;
            /**
             * Maximum number of seats that can be reserved in this table combination.
             */
            seatsMax?: number;
            /**
             * Minimum number of seats that can be reserved in this table combination.
             */
            seatsMin?: number;
            /**
             * IDs of tables in the combination.
             */
            tableIds?: Array<string>;
        };
        type tableReservationsV1ReservationLocationTableDefinition = {
            /**
             * Table ID.
             */
            _id?: string;
            /**
             * Whether the table is active (available to be reserved).
             */
            isActive?: boolean;
            /**
             * Table name.
             */
            name?: string;
            /**
             * Maximum number of seats.
             */
            seatsMax?: number;
            /**
             * Minimum number of seats.
             */
            seatsMin?: number;
        };
        type tableReservationsV1ReservationLocationTableManagement = {
            /**
             * Deleted table definitions.
             */
            deletedTableDefinitions?: Array<Events.tableReservationsV1ReservationLocationTableDefinition>;
            /**
             * Table combinations.
             */
            tableCombinations?: Array<Events.tableReservationsV1ReservationLocationTableCombination>;
            /**
             * Table definitions.
             */
            tableDefinitions?: Array<Events.tableReservationsV1ReservationLocationTableDefinition>;
        };
        type tableReservationsV1ReservationLocationTablesDeleted = {
            /**
             * ID of the affected reservation location.
             */
            reservationLocationId?: string;
            /**
             * IDs of deleted tables.
             */
            tableIds?: Array<string>;
        };
        type tableReservationsV1ReservationLocationTermsAndConditions = {
            /**
             * Whether the terms and conditions are shown to the customer.
             *
             * Default: `false`
             */
            enabled?: boolean;
            /**
             * Terms and conditions text.
             */
            text?: string;
            /**
             * Terms and conditions URL.
             */
            url?: string;
        };
        type tableReservationsV1ReservationLocationTermsAndConditionsValueOneOf = {
            /**
             * Terms and conditions text.
             */
            text?: string;
            /**
             * Terms and conditions URL.
             */
            url?: string;
        };
        type tableReservationsV1ReservationLocationTimePeriod = {
            /**
             * Day of the week this period ends on.
             */
            closeDay?: string;
            /**
             * Time this period ends in 24hr [ISO 8601](http://www.w3.org/TR/NOTE-datetime) extended format (hh:mm). Valid values are `00:00-24:00`, where `24:00` represents
             * midnight at the end of the specified day field.
             *
             * This is the last time a reservation can be made at the restaurant, not the time the restaurant closes its doors.
             */
            closeTime?: string;
            /**
             * Day of the week this period starts on.
             */
            openDay?: string;
            /**
             * Time this period starts in 24hr [ISO 8601](http://www.w3.org/TR/NOTE-datetime) extended format (hh:mm). Valid values are `00:00-24:00`, where `24:00` represents
             * midnight at the end of the specified day field.
             */
            openTime?: string;
        };
        type tableReservationsV1ReservationLocationTransferredFromAnotherAccountReason = {
            /**
             * Information about a transfer from another account.
             */
            transferredFromAccount?: string;
        };
        type tableReservationsV1ReservationLocationTransferredToAnotherAccountReason = {
            /**
             * Information about a transfer to the account.
             */
            transferredToAccount?: string;
        };
        type tableReservationsV1ReservationLocationTurnoverRule = {
            /**
             * Maximum number of seats to qualify for this rule.
             */
            maxSeats?: number;
            /**
             * Minimum number of seats to qualify for this rule.
             */
            minSeats?: number;
            /**
             * Turnover time in minutes for qualifying parties.
             */
            minutes?: number;
        };
        type tableReservationsV1ReservationLocationTurnoverTimeRule = {
            /**
             * Turnover time in minutes for qualifying parties.
             */
            minutes?: number;
            /**
             * Maximum number of seats to qualify for this rule.
             */
            seatsMax?: number;
            /**
             * Minimum number of seats to qualify for this rule.
             */
            seatsMin?: number;
        };
        type tableReservationsV1ReservationLocationUnAssingedToFloatingReason = {};
        type tableReservationsV1ReservationLocationUpdateReservationLocationRequest = {
            /**
             * ReservationLocation to be updated, may be partial.
             */
            reservationLocation: Events.tableReservationsV1ReservationLocationReservationLocation;
        };
        type tableReservationsV1ReservationLocationUpdateReservationLocationResponse = {
            /**
             * The updated reservation location.
             */
            reservationLocation?: Events.tableReservationsV1ReservationLocationReservationLocation;
        };
        type tableReservationsV1ReservationLocationUri = {
            /**
             * the msid the URI is on
             */
            metaSiteId?: string;
            /**
             * URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes
             */
            uriPath?: string;
        };
        type tableReservationsV1ReservationMigrationNote = {};
        type tableReservationsV1ReservationNestedAggregation = {
            nestedAggregations?: Array<Events.tableReservationsV1ReservationNestedAggregationItem>;
        };
        type tableReservationsV1ReservationNestedAggregationItem = {
            dateHistogram?: Events.tableReservationsV1ReservationDateHistogramAggregation;
            fieldPath?: string;
            name?: string;
            range?: Events.tableReservationsV1ReservationRangeAggregation;
            scalar?: Events.tableReservationsV1ReservationScalarAggregation;
            /**
             * Supported values:
             * - `'DATE_HISTOGRAM'`
             * - `'RANGE'`
             * - `'SCALAR'`
             * - `'UNKNOWN_AGGREGATION_TYPE'`
             * - `'VALUE'`
             */
            type?: string;
            value?: Events.tableReservationsV1ReservationValueAggregation;
        };
        type tableReservationsV1ReservationNestedAggregationItemKindOneOf = {
            dateHistogram?: Events.tableReservationsV1ReservationDateHistogramAggregation;
            range?: Events.tableReservationsV1ReservationRangeAggregation;
            scalar?: Events.tableReservationsV1ReservationScalarAggregation;
            value?: Events.tableReservationsV1ReservationValueAggregation;
        };
        type tableReservationsV1ReservationNestedAggregationResults = {
            fieldPath?: string;
            name?: string;
            ranges?: Events.tableReservationsV1ReservationRangeResults;
            scalar?: Events.tableReservationsV1ReservationScalarResult;
            /**
             * Supported values:
             * - `'DATE_HISTOGRAM'`
             * - `'NESTED'`
             * - `'RANGE'`
             * - `'SCALAR'`
             * - `'UNKNOWN_AGGREGATION_TYPE'`
             * - `'VALUE'`
             */
            type?: string;
            values?: Events.tableReservationsV1ReservationValueResults;
        };
        type tableReservationsV1ReservationNestedAggregationResultsResultOneOf = {
            ranges?: Events.tableReservationsV1ReservationRangeResults;
            scalar?: Events.tableReservationsV1ReservationScalarResult;
            values?: Events.tableReservationsV1ReservationValueResults;
        };
        type tableReservationsV1ReservationNestedResultValue = {
            dateHistogram?: Events.tableReservationsV1ReservationValueResult;
            range?: Events.tableReservationsV1ReservationRangeResult;
            scalar?: Events.tableReservationsV1ReservationNestedResultsScalarResult;
            value?: Events.tableReservationsV1ReservationValueResult;
        };
        type tableReservationsV1ReservationNestedResultValueResultOneOf = {
            dateHistogram?: Events.tableReservationsV1ReservationValueResult;
            range?: Events.tableReservationsV1ReservationRangeResult;
            scalar?: Events.tableReservationsV1ReservationNestedResultsScalarResult;
            value?: Events.tableReservationsV1ReservationValueResult;
        };
        type tableReservationsV1ReservationNestedResults = {
            results?: Array<Events.tableReservationsV1ReservationResults>;
        };
        type tableReservationsV1ReservationNestedResultsScalarResult = {
            value?: number;
        };
        type tableReservationsV1ReservationNestedValueAggregationResult = {
            nestedResults?: Events.tableReservationsV1ReservationNestedAggregationResults;
            value?: string;
        };
        type tableReservationsV1ReservationQueryReservationsRequest = {
            /**
             * Query to select reservations.
             */
            query: Events.tableReservationsV1ReservationCursorQuery;
        };
        type tableReservationsV1ReservationQueryReservationsResponse = {
            /**
             * Metadata for the paginated results.
             */
            pagingMetadata?: Events.tableReservationsV1ReservationCursorPagingMetadata;
            /**
             * List of reservations.
             */
            reservations?: Array<Events.tableReservationsV1ReservationReservation>;
        };
        type tableReservationsV1ReservationRangeAggregation = {
            buckets?: Array<Events.tableReservationsV1ReservationRangeBucket>;
        };
        type tableReservationsV1ReservationRangeAggregationResult = {
            count?: number;
            from?: number;
            to?: number;
        };
        type tableReservationsV1ReservationRangeBucket = {
            /**
             * Inclusive lower bound of the range. Required if to is not given.
             */
            from?: number;
            /**
             * Exclusive upper bound of the range. Required if from is not given.
             */
            to?: number;
        };
        type tableReservationsV1ReservationRangeResult = {
            count?: number;
            from?: number;
            to?: number;
        };
        type tableReservationsV1ReservationRangeResults = {
            results?: Array<Events.tableReservationsV1ReservationRangeAggregationResult>;
        };
        type tableReservationsV1ReservationReservation = {
            /**
             * Date and time the reservation was created.
             */
            _createdDate?: Date;
            /**
             * Reservation ID.
             */
            _id?: string;
            /**
             * Date and time the reservation was changed.
             */
            _updatedDate?: Date;
            /**
             * The reason the reservation was declined.
             */
            declineReason?: string;
            /**
             * Reservation details.
             */
            details?: Events.tableReservationsV1ReservationDetails;
            /**
             * Information about the person making the reservation.
             *
             * This field is required if the reservation's `status` is anything other than `WALK_IN`.
             */
            reservedBy?: Events.tableReservationsV1ReservationReservedBy;
            /**
             * Information about the person the reservation is being made for.
             *
             * A reservation created with any `source` other than `WALK_IN` requires the `reservation.reservee.phone` and `reservation.reservee.firstName` fields.
             * Attempting to create a reservation without these fields results in an error.
             */
            reservee?: Events.tableReservationsV1ReservationReservee;
            /**
             * Revision number, which increments by 1 each time the reservation is updated.
             * To prevent conflicting changes, the current revision must be passed when updating the reservation.
             *
             * Ignored when creating a reservation.
             */
            revision?: string;
            /**
             * Reservation source.
             *
             * This indicates how the reservation was made.
             * * `ONLINE` indicates that the customer made the reservation through a website or app.
             * * `OFFLINE` indicates that the reservation was made by a restaurant employee, for example when a customer calls to make a reservation.
             * * `WALK-IN` indicates that the customer did not make a reservation beforehand, and the reservation was entered into the system by a restaurant employee when the customer arrived at the restaurant.
             */
            source?: string;
            /**
             * Status of the reservation.
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
             * See the [Reservation Lifecycle article](https://dev.wix.com/docs/rest/api-reference/wix-restaurants/reservations/reservations/the-reservation-lifecycle) for an explanation of the role of statuses in the reservation lifecycle.
             */
            status?: string;
            /**
             * Team message.
             *
             * A message for the restaurant staff containing any additional information regarding the reservation, such as special requirements for the guests.
             */
            teamMessage?: string;
        };
        type tableReservationsV1ReservationReservationCanceled = {
            /**
             * Reserved reservation.
             */
            reservation?: Events.tableReservationsV1ReservationReservation;
        };
        type tableReservationsV1ReservationReservationCreated = {
            /**
             * Information about the reservation that was created.
             */
            entity: Events.tableReservationsV1ReservationReservation;
            /**
             * Event metadata.
             */
            metadata: Events.tableReservationsV1ReservationBackendEventMetadata;
        };
        type tableReservationsV1ReservationReservationDataUpdated = {
            /**
             * Old reservation.
             */
            oldReservation?: Events.tableReservationsV1ReservationReservation;
            /**
             * Reserved reservation.
             */
            reservation?: Events.tableReservationsV1ReservationReservation;
        };
        type tableReservationsV1ReservationReservationDetailsConflicts = {
            /**
             * Reservation location conflicts.
             */
            reservationLocationConflicts?: Array<Events.tableReservationsV1ReservationReservationLocationConflict>;
            /**
             * Table combinations conflicts.
             */
            tableCombinationConflicts?: Array<Events.tableReservationsV1ReservationTableCombinationConflict>;
        };
        type tableReservationsV1ReservationReservationLocationConflict = {
            /**
             * Reservation location conflict type.
             */
            type?: string;
        };
        type tableReservationsV1ReservationReservationReserved = {
            /**
             * Reserved reservation.
             */
            reservation?: Events.tableReservationsV1ReservationReservation;
        };
        type tableReservationsV1ReservationReservationUpdated = {
            /**
             * Information about the reservation that was updated.
             */
            entity: Events.tableReservationsV1ReservationReservation;
            /**
             * Event metadata.
             */
            metadata: Events.tableReservationsV1ReservationBackendEventMetadata;
        };
        type tableReservationsV1ReservationReserveReservationRequest = {
            /**
             * Reservation ID.
             */
            reservationId: string;
            /**
             * Reservee details.
             */
            reservee: Events.tableReservationsV1ReservationReservee;
            /**
             * Revision number.
             *
             * Include the existing `revision` to prevent conflicting updates to reservations.
             */
            revision: string;
        };
        type tableReservationsV1ReservationReserveReservationResponse = {
            /**
             * Reservation.
             */
            reservation?: Events.tableReservationsV1ReservationReservation;
        };
        type tableReservationsV1ReservationReservedBy = {
            /**
             * Contact ID for the person who made the reservation. If a contact with this ID does not exist on the site, one will be created.
             */
            contactId?: string;
        };
        type tableReservationsV1ReservationReservee = {
            /**
             * Contact ID. If a contact with this ID does not exist on the site, one will be created.
             */
            contactId?: string;
            /**
             * Custom fields for the reservee in key-value pairs.
             *
             * The key is the custom field's ID, and the value is the custom field's value. For example, a custom field for allergies might have the key-value pair `f4283b2d-6340-4cf9-bae7-8769e6b62127 : "Nuts, Seafood"`.
             *
             * Empty fields are not returned.
             */
            customFields?: Object;
            /**
             * Email address.
             */
            email?: string;
            /**
             * First name.
             *
             * This field is required if the reservation's `status` is anything other than `WALK_IN`.
             */
            firstName?: string;
            /**
             * Last name.
             */
            lastName?: string;
            /**
             * Whether the reservee has given marketing consent.
             */
            marketingConsent?: boolean;
            /**
             * Phone number.
             *
             * This property should begin with a +, followed by the country code, and then the rest of the phone number. For example, `"+972555555555"`.
             *
             * This field is required if the reservation's `status` is anything other than `WALK_IN`.
             */
            phone?: string;
        };
        type tableReservationsV1ReservationResults = {
            results?: Record<string, Events.tableReservationsV1ReservationNestedResultValue>;
        };
        type tableReservationsV1ReservationScalarAggregation = {
            /**
             * Supported values:
             * - `'AVG'`
             * - `'COUNT_DISTINCT'`
             * - `'MAX'`
             * - `'MIN'`
             * - `'SUM'`
             * - `'UNKNOWN_SCALAR_TYPE'`
             */
            type?: string;
        };
        type tableReservationsV1ReservationScalarResult = {
            /**
             * Supported values:
             * - `'AVG'`
             * - `'COUNT_DISTINCT'`
             * - `'MAX'`
             * - `'MIN'`
             * - `'SUM'`
             * - `'UNKNOWN_SCALAR_TYPE'`
             */
            type?: string;
            value?: number;
        };
        type tableReservationsV1ReservationSearchDetails = {
            /**
             * search term or expression
             */
            expression?: string;
            /**
             * fields to search in. if empty - server will search in own default fields
             */
            fields?: Array<string>;
            /**
             * flag if should use auto fuzzy search (allowing typos by a managed proximity algorithm)
             */
            fuzzy?: boolean;
            /**
             * boolean search mode
             */
            mode?: string;
        };
        type tableReservationsV1ReservationSearchReservationsRequest = {
            /**
             * Search query.
             */
            search: Events.tableReservationsV1ReservationCursorSearch;
        };
        type tableReservationsV1ReservationSearchReservationsResponse = {
            /**
             * Aggregation data.
             */
            aggregationData?: Events.tableReservationsV1ReservationAggregationData;
            /**
             * Cursor paging metadata.
             */
            pagingMetadata?: Events.tableReservationsV1ReservationCursorPagingMetadata;
            /**
             * List of Reservations.
             */
            reservations?: Array<Events.tableReservationsV1ReservationReservation>;
        };
        type tableReservationsV1ReservationSorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             *
             * Use `ASC` for ascending order or `DESC` for descending order. Defaults to `ASC`.
             */
            order?: string;
        };
        type tableReservationsV1ReservationTableCombinationConflict = {
            /**
             * Conflict type.
             */
            type?: string;
        };
        type tableReservationsV1ReservationTableWithReservationConflicts = {
            /**
             * List of reservation ids.
             */
            reservationIds?: Array<string>;
            /**
             * Table id.
             */
            tableId?: string;
        };
        type tableReservationsV1ReservationUpdateReservationRequest = {
            /**
             * Ignored reservation location conflicts of the types included in the array. This ensures that the reservation is updated even if the given conflicts would normally prevent it.
             *
             * Possible values:
             * * `"PARTY_PACING"`: The restaurant cannot accommodate a party of the given size according to party pacing settings.
             * * `"SEAT_PACING"`: The required number of seats are unavailable according to seat pacing settings.
             */
            ignoreReservationLocationConflicts?: Array<string>;
            /**
             * Ignore table combination conflicts of the types included in the array. This ensures that the reservation is updated even if the given conflicts would normally prevent it.
             *
             * Possible values:
             * * `"RESERVED"`: One or more of the chosen tables are already reserved.
             * * `"TOO_BIG"`: The party is too big for the selected table.
             * * `"TOO_SMALL"`: The party is too small for the selected table.
             * * `"OFFLINE_ONLY"`: The restaurant does not allow online reservations.
             */
            ignoreTableCombinationConflicts?: Array<string>;
            /**
             * Reservation information to update.
             */
            reservation: Events.tableReservationsV1ReservationReservation;
        };
        type tableReservationsV1ReservationUpdateReservationResponse = {
            /**
             * Reservation.
             */
            reservation?: Events.tableReservationsV1ReservationReservation;
        };
        type tableReservationsV1ReservationValueAggregation = {
            /**
             * options for including missing values
             */
            includeOptions?: Events.tableReservationsV1ReservationIncludeMissingValuesOptions;
            /**
             * How many aggregations would you like to return? Can be between 1 and 250. 10 is the default.
             */
            limit?: number;
            /**
             * should missing values be included or excluded from the aggregation results. Default is EXCLUDE
             */
            missingValues?: string;
            /**
             * Supported values:
             * - `'ASC'`
             * - `'DESC'`
             */
            sortDirection?: string;
            /**
             * Supported values:
             * - `'COUNT'`
             * - `'VALUE'`
             */
            sortType?: string;
        };
        type tableReservationsV1ReservationValueAggregationOptionsOneOf = {
            /**
             * options for including missing values
             */
            includeOptions?: Events.tableReservationsV1ReservationIncludeMissingValuesOptions;
        };
        type tableReservationsV1ReservationValueAggregationResult = {
            count?: number;
            value?: string;
        };
        type tableReservationsV1ReservationValueResult = {
            count?: number;
            value?: string;
        };
        type tableReservationsV1ReservationValueResults = {
            results?: Array<Events.tableReservationsV1ReservationValueAggregationResult>;
        };
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.html#)
     */
    namespace ReservationLocations {
        type ActionEvent = {
            bodyAsJson?: string;
        };
        type Address = {
            /**
             * City name.
             */
            city?: string;
            /**
             * 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
             */
            country?: string;
            /**
             * Full address of the location.
             */
            formatted?: string;
            /**
             * Geographic coordinates of the location.
             */
            location?: ReservationLocations.AddressLocation;
            /**
             * Postal or zip code.
             */
            postalCode?: string;
            /**
             * Street address of the location. Includes street name, number, and apartment number in separate fields.
             */
            streetAddress?: ReservationLocations.StreetAddress;
            /**
             * Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
             */
            subdivision?: string;
        };
        type AddressLocation = {
            /**
             * Latitude of the location. Must be between -90 and 90.
             */
            latitude?: number;
            /**
             * Longitude of the location. Must be between -180 and 180.
             */
            longitude?: number;
        };
        type App = {
            /**
             * The AppDefId
             */
            appDefId?: string;
            /**
             * The instance Id
             */
            instanceId?: string;
        };
        type Asset = {
            /**
             * An application definition id (app_id in dev-center). For legacy reasons may be UUID or a string (from Java Enum).
             */
            appDefId?: string;
            /**
             * An instance id. For legacy reasons may be UUID or a string.
             */
            instanceId?: string;
            /**
             * An application state.
             */
            state?: string;
        };
        type AssignedFromFloatingReason = {};
        type BooleanFeature = {};
        type BusinessSchedule = {
            periods?: Array<ReservationLocations.TimePeriod>;
            /**
             * Time periods during which this location is open. Each period represents a range of hours during the week during which the location is
             * open.
             *
             * Max: 100 time periods
             */
            specialHourPeriod?: Array<ReservationLocations.SpecialHourPeriod>;
        };
        type CancelRequestedReason = {};
        type CheckReservationLocationsCreatedRequest = {};
        type CheckReservationLocationsCreatedResponse = {
            /**
             * Reservation locations created.
             */
            created?: boolean;
        };
        type Configuration = {
            /**
             * "My reservations" field details.
             *
             * These are the fields that appear in the "My reservations" section of the Table Reservations page on the restaurant's Wix site dashboard.
             */
            myReservationsFields?: Array<ReservationLocations.MyReservationsField>;
            /**
             * Settings for this location that are used to determine restaurant availability for reservations made online.
             */
            onlineReservations?: ReservationLocations.OnlineReservations;
            /**
             * Reservation form settings.
             */
            reservationForm?: ReservationLocations.ReservationForm;
            /**
             * Table management settings.
             */
            tableManagement?: ReservationLocations.TableManagement;
        };
        type ContractSwitchedReason = {};
        type CursorPaging = {
            /**
             * Pointer to the next or previous page in the list of results.
             *
             * You can get the relevant cursor token
             * from the `pagingMetadata` object in the previous call's response.
             * Not relevant for the first request.
             */
            cursor?: string;
            /**
             * Number of items to load.
             */
            limit?: number;
        };
        type CursorPagingMetadata = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Offset that was requested.
             */
            cursors?: ReservationLocations.Cursors;
            /**
             * Indicates if there are more results after the current page.
             * If `true`, another page of results can be retrieved.
             * If `false`, this is the last page.
             */
            hasNext?: boolean;
        };
        type Cursors = {
            /**
             * Cursor pointing to next page in the list of results.
             */
            next?: string;
            /**
             * Cursor pointing to previous page in the list of results.
             */
            prev?: string;
        };
        type CustomFieldDefinition = {
            /**
             * Custom field ID.
             */
            _id?: string;
            /**
             * Custom field name.
             */
            name?: string;
            /**
             * Whether the custom field is required.
             *
             * Default: `false`
             */
            required?: boolean;
        };
        type DeleteContext = {
            /**
             * When the meta site was deleted.
             */
            dateDeleted?: Date;
            /**
             * A reason (flow).
             */
            deleteOrigin?: string;
            /**
             * A status.
             */
            deleteStatus?: string;
            /**
             * A service that deleted it.
             */
            initiatorId?: string;
        };
        type DeleteOrphanReservationLocationRequest = {
            /**
             * Id of the ReservationLocation.
             */
            reservationLocationId?: string;
        };
        type DeleteOrphanReservationLocationResponse = {};
        type DomainEvent = {
            /**
             * Unique event ID.
             * Allows clients to ignore duplicate webhooks.
             */
            _id?: string;
            actionEvent?: ReservationLocations.ActionEvent;
            createdEvent?: ReservationLocations.EntityCreatedEvent;
            deletedEvent?: ReservationLocations.EntityDeletedEvent;
            /**
             * A sequence number defining the order of updates to the underlying entity.
             * For example, given that some entity was updated at 16:00 and than again at 16:01,
             * it is guaranteed that the sequence number of the second update is strictly higher than the first.
             * As the consumer, you can use this value to ensure that you handle messages in the correct order.
             * To do so, you will need to persist this number on your end, and compare the sequence number from the
             * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
             */
            entityEventSequence?: string;
            /**
             * Assumes actions are also always typed to an entity_type
             * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
             */
            entityFqdn?: string;
            /**
             * ID of the entity associated with the event.
             */
            entityId?: string;
            /**
             * Event timestamp.
             */
            eventTime?: Date;
            /**
             * If present, indicates the action that triggered the event.
             */
            originatedFrom?: string;
            /**
             * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
             * This is although the created/updated/deleted notion is duplication of the oneof types
             * Example: created/updated/deleted/started/completed/email_opened
             */
            slug?: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application
             * (for example, GDPR).
             */
            triggeredByAnonymizeRequest?: boolean;
            updatedEvent?: ReservationLocations.EntityUpdatedEvent;
        };
        type DomainEventBodyOneOf = {
            actionEvent?: ReservationLocations.ActionEvent;
            createdEvent?: ReservationLocations.EntityCreatedEvent;
            deletedEvent?: ReservationLocations.EntityDeletedEvent;
            updatedEvent?: ReservationLocations.EntityUpdatedEvent;
        };
        type EmailMarketingCheckbox = {
            /**
             * Whether the checkbox is checked by default.
             *
             * Default: `false`
             */
            checkedByDefault?: boolean;
            /**
             * Whether the checkbox is shown to the customer.
             *
             * Default: `false`
             */
            enabled?: boolean;
        };
        type Empty = {};
        type EntityCreatedEvent = {
            entityAsJson?: string;
        };
        type EntityDeletedEvent = {
            /**
             * Entity that was deleted
             */
            deletedEntityAsJson?: string;
        };
        type EntityUpdatedEvent = {
            /**
             * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
             * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
             * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
             */
            currentEntityAsJson?: string;
        };
        type Feature = {
            /**
             * ID of the feature. __Note:__ Isn't unique. For example, all features that
             * are available to free Wix accounts or site in some capacity have
             * `{"id": "DEFAULT"}`. Use `uniqueName` as unique identifier for a feature.
             */
            _id?: string;
            /**
             * Deprecated. Use `enabled` instead.
             */
            booleanFeature?: ReservationLocations.BooleanFeature;
            /**
             * Information about whether the feature belongs to a Wix account or site.
             * Account features have `context.userId`. Site features have `context.metaSiteId` in case
             * they're assigned to a specific site. Site features that aren't assigned to
             * a specific site have neither ID.
             */
            context?: ReservationLocations.FeatureContext;
            /**
             * Deprecated.
             */
            createdAt?: Date;
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
             * Metadata of the feature. Wix Premium uses the metadata object to indicate
             * that customers who purchase a product with the feature also get
             * access to an additional product. For these bundled products `metadata`
             * looks like this: `{"tpa": "{"appDefId": "sample-app-def-id-1234567890", "vendorProductId": "sample-productId"}}"`.
             * But you can use the `metadata` property for other purposes, too.
             */
            metadata?: Record<string, string>;
            /**
             * Deprecated. Use `quotaInfo` instead.
             */
            quotaFeature?: ReservationLocations.QuotaFeature;
            /**
             * Information about how often customers can use the feature during a specific
             * period. Available only for quota features.
             */
            quotaInfo?: ReservationLocations.QuotaInfo;
            /**
             * ID of the [subscription](https://bo.wix.com/wix-docs/rest/premium/premium-subscriptions-manager/subscription-object)
             * to which the feature instance belongs.
             */
            subscriptionId?: string;
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
             * Deprecated.
             */
            updatedAt?: Date;
        };
        type FeatureCancelled = {
            /**
             * Information about the feature cancellation.
             */
            cancelRequest?: ReservationLocations.CancelRequestedReason;
            /**
             * Information about the contract switch.
             */
            contractSwitched?: ReservationLocations.ContractSwitchedReason;
            /**
             * Canceled feature.
             */
            feature?: ReservationLocations.Feature;
            /**
             * Information about a transfer to the account.
             * __Deprecated__. Use `reason.transferred_to_account` instead.
             */
            transferredToAccount?: string;
            /**
             * Information about a transfer to the account.
             */
            transferredToAnotherAccount?: ReservationLocations.TransferredToAnotherAccountReason;
        };
        type FeatureCancelledReasonOneOf = {
            /**
             * Information about the feature cancellation.
             */
            cancelRequest?: ReservationLocations.CancelRequestedReason;
            /**
             * Information about the contract switch.
             */
            contractSwitched?: ReservationLocations.ContractSwitchedReason;
            /**
             * Information about a transfer to the account.
             */
            transferredToAnotherAccount?: ReservationLocations.TransferredToAnotherAccountReason;
        };
        type FeatureContext = {
            /**
             * ID of the meta site that the feature instance is assigned to.
             * Only available for site level feature instances that are assigned to a Wix
             * site. Not available for account level and unassigned site level feature
             * instances.
             */
            metaSiteId?: string;
            /**
             * ID of the Wix account that the feature instance belongs to.
             * Available for both site and account level feature instances.
             */
            userId?: string;
        };
        type FeatureDisabled = {
            /**
             * Disabled feature. Includes information about the feature's new state,
             * possibly its new context.
             */
            feature?: ReservationLocations.Feature;
            /**
             * ID of the meta site for which the feature has been disabled.
             */
            metaSiteId?: string;
            /**
             * Information about a feature that's been reassigned to a different
             * site.
             */
            reassignedToAnotherSite?: ReservationLocations.ReassignedToAnotherSiteReason;
            /**
             * Information about a feature that's been replaced by a feature from a
             * different subscription.
             */
            replacedByAnotherSubscription?: ReservationLocations.ReplacedByAnotherSubscriptionReason;
            /**
             * Information about a feature that's no longer assigned to a site.
             */
            unassingedToFloating?: ReservationLocations.UnAssingedToFloatingReason;
        };
        type FeatureDisabledReasonOneOf = {
            /**
             * Information about a feature that's been reassigned to a different
             * site.
             */
            reassignedToAnotherSite?: ReservationLocations.ReassignedToAnotherSiteReason;
            /**
             * Information about a feature that's been replaced by a feature from a
             * different subscription.
             */
            replacedByAnotherSubscription?: ReservationLocations.ReplacedByAnotherSubscriptionReason;
            /**
             * Information about a feature that's no longer assigned to a site.
             */
            unassingedToFloating?: ReservationLocations.UnAssingedToFloatingReason;
        };
        type FeatureEnabled = {
            /**
             * Information about a feature that hadn't been assigned to site.
             */
            assignedFromFloating?: ReservationLocations.AssignedFromFloatingReason;
            /**
             * Information about the contract switch.
             */
            contractSwitched?: ReservationLocations.ContractSwitchedReason;
            /**
             * Enabled feature.
             */
            feature?: ReservationLocations.Feature;
            /**
             * Information about the manually created features.
             */
            manualFeatureCreation?: ReservationLocations.ManualFeatureCreationReason;
            /**
             * Information about a feature that was migrated from legacy.
             */
            migratedFromLegacy?: ReservationLocations.MigratedFromLegacyReason;
            /**
             * Information about the new feature.
             */
            newFeature?: ReservationLocations.NewFeatureReason;
            /**
             * Information about a transfer from another site.
             * __Deprecated__. Use `reason.reassigned_from_site` instead.
             */
            reassignedFromMetasite?: string;
            /**
             * Information about a transfer from another site.
             */
            reassignedFromSite?: ReservationLocations.ReassignedFromSiteReason;
            /**
             * Information about a transfer from another account.
             * __Deprecated__. Use `reason.transferred_from_another_account` instead.
             */
            transferredFromAccount?: string;
            /**
             * Information about a transfer from another account.
             */
            transferredFromAnotherAccount?: ReservationLocations.TransferredFromAnotherAccountReason;
        };
        type FeatureEnabledReasonOneOf = {
            /**
             * Information about a feature that hadn't been assigned to site.
             */
            assignedFromFloating?: ReservationLocations.AssignedFromFloatingReason;
            /**
             * Information about the contract switch.
             */
            contractSwitched?: ReservationLocations.ContractSwitchedReason;
            /**
             * Information about the manually created features.
             */
            manualFeatureCreation?: ReservationLocations.ManualFeatureCreationReason;
            /**
             * Information about a feature that was migrated from legacy.
             */
            migratedFromLegacy?: ReservationLocations.MigratedFromLegacyReason;
            /**
             * Information about the new feature.
             */
            newFeature?: ReservationLocations.NewFeatureReason;
            /**
             * Information about a transfer from another site.
             */
            reassignedFromSite?: ReservationLocations.ReassignedFromSiteReason;
            /**
             * Information about a transfer from another account.
             */
            transferredFromAnotherAccount?: ReservationLocations.TransferredFromAnotherAccountReason;
        };
        type FeatureEvent = {
            /**
             * Information about an event that cancels a feature for the user.
             * Triggered for example, when a feature is canceled, transferred to
             * another account, or the user switched to a different contract.
             */
            cancelled?: ReservationLocations.FeatureCancelled;
            /**
             * Information about an event that disables a feature for the user.
             * Triggered for example, when a feature is unassigned from a site,
             * reassigned to a different site, or the user switched to a different contract.
             */
            disabled?: ReservationLocations.FeatureDisabled;
            /**
             * Information about an event that makes a feature eligible to the user.
             * Triggered for example, for new features or when a feature is reassigned
             * to an account or a site.
             */
            enabled?: ReservationLocations.FeatureEnabled;
            /**
             * Timestamp of the event in
             * [UTC time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
             */
            timestamp?: Date;
            /**
             * Information about an event that updates a feature. An `updated` event
             * is triggered for example by the
             * [Report Quota Usage](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/report-quota-usage)
             * and [Reset Usage Counter](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/reset-usage-counter)
             * endpoints.
             */
            updated?: ReservationLocations.FeatureUpdated;
        };
        type FeatureEventEventOneOf = {
            /**
             * Information about an event that cancels a feature for the user.
             * Triggered for example, when a feature is canceled, transferred to
             * another account, or the user switched to a different contract.
             */
            cancelled?: ReservationLocations.FeatureCancelled;
            /**
             * Information about an event that disables a feature for the user.
             * Triggered for example, when a feature is unassigned from a site,
             * reassigned to a different site, or the user switched to a different contract.
             */
            disabled?: ReservationLocations.FeatureDisabled;
            /**
             * Information about an event that makes a feature eligible to the user.
             * Triggered for example, for new features or when a feature is reassigned
             * to an account or a site.
             */
            enabled?: ReservationLocations.FeatureEnabled;
            /**
             * Information about an event that updates a feature. An `updated` event
             * is triggered for example by the
             * [Report Quota Usage](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/report-quota-usage)
             * and [Reset Usage Counter](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/reset-usage-counter)
             * endpoints.
             */
            updated?: ReservationLocations.FeatureUpdated;
        };
        type FeatureQuantityInfoOneOf = {
            /**
             * Deprecated. Use `enabled` instead.
             */
            booleanFeature?: ReservationLocations.BooleanFeature;
            /**
             * Deprecated. Use `quotaInfo` instead.
             */
            quotaFeature?: ReservationLocations.QuotaFeature;
        };
        type FeatureUpdated = {
            /**
             * Information about a feature that doesn't have a usage quota.
             */
            booleanFeature?: ReservationLocations.BooleanFeature;
            /**
             * Information about the contract switch.
             */
            contractSwitched?: ReservationLocations.ContractSwitchedReason;
            /**
             * Updated feature. Includes information about the feature's new state and
             * possibly its new context.
             */
            feature?: ReservationLocations.Feature;
            /**
             * Information about a feature that has a usage quota.
             */
            quotaFeature?: ReservationLocations.QuotaFeature;
        };
        type FeatureUpdatedPreviousQuantityInfoOneOf = {
            /**
             * Information about a feature that doesn't have a usage quota.
             */
            booleanFeature?: ReservationLocations.BooleanFeature;
            /**
             * Information about a feature that has a usage quota.
             */
            quotaFeature?: ReservationLocations.QuotaFeature;
        };
        type FeatureUpdatedReasonOneOf = {
            /**
             * Information about the contract switch.
             */
            contractSwitched?: ReservationLocations.ContractSwitchedReason;
        };
        type GetReservationLocationOptions = {
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
            fieldsets?: Array<string>;
        };
        type GetReservationLocationRequest = {
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
            fieldsets?: Array<string>;
            /**
             * ID of the ReservationLocation to retrieve.
             */
            reservationLocationId: string;
        };
        type GetReservationLocationResponse = {
            /**
             * The retrieved reservation location.
             */
            reservationLocation?: ReservationLocations.ReservationLocation;
        };
        type InvalidateCache = {
            /**
             * Invalidate by App
             */
            app?: ReservationLocations.App;
            /**
             * Is local DS
             */
            localDc?: boolean;
            /**
             * Invalidate by msId. NOT recommended, as this will invalidate the entire site cache!
             */
            metaSiteId?: string;
            /**
             * Invalidate by page id
             */
            page?: ReservationLocations.Page;
            /**
             * tell us why you're invalidating the cache. You don't need to add your app name
             */
            reason?: string;
            /**
             * Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache!
             */
            siteId?: string;
            /**
             * Invalidate by URI path
             */
            uri?: ReservationLocations.URI;
        };
        type InvalidateCacheGetByOneOf = {
            /**
             * Invalidate by App
             */
            app?: ReservationLocations.App;
            /**
             * Invalidate by msId. NOT recommended, as this will invalidate the entire site cache!
             */
            metaSiteId?: string;
            /**
             * Invalidate by page id
             */
            page?: ReservationLocations.Page;
            /**
             * Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache!
             */
            siteId?: string;
            /**
             * Invalidate by URI path
             */
            uri?: ReservationLocations.URI;
        };
        type ListReservationLocationsOptions = {
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
            fieldsets?: Array<string>;
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            paging?: ReservationLocations.CursorPaging;
            /**
             * Sorting for the locations list.
             */
            sort?: ReservationLocations.Sorting;
        };
        type ListReservationLocationsRequest = {
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
            fieldsets?: Array<string>;
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            paging?: ReservationLocations.CursorPaging;
            /**
             * Sorting for the locations list.
             */
            sort?: ReservationLocations.Sorting;
        };
        type ListReservationLocationsResponse = {
            /**
             * Metadata for the paginated results.
             */
            pagingMetadata?: ReservationLocations.CursorPagingMetadata;
            /**
             * Locations list.
             */
            reservationLocations?: Array<ReservationLocations.ReservationLocation>;
        };
        type Location = {
            /**
             * Location ID.
             */
            _id?: string;
        };
        type ManualApproval = {
            /**
             * Custom approvals provider id.
             */
            customApprovalsProviderId?: string;
            /**
             * Whether manual approval is required for online reservations.
             */
            enabled?: boolean;
            /**
             * The minimum party size that requires manual approval.
             */
            partySizeThreshold?: number;
        };
        type ManualApprovalValueOneOf = {
            /**
             * Custom approvals provider id.
             */
            customApprovalsProviderId?: string;
            /**
             * The minimum party size that requires manual approval.
             */
            partySizeThreshold?: number;
        };
        type ManualFeatureCreationReason = {};
        type MetaSiteSpecialEvent = {
            /**
             * A list of "assets" (applications). The same as MetaSiteContext.
             */
            assets?: Array<ReservationLocations.Asset>;
            /**
             * Emitted when meta site was permanently deleted.
             */
            hardDeleted?: ReservationLocations.SiteHardDeleted;
            /**
             * A meta site id.
             */
            metaSiteId?: string;
            /**
             * Emitted on a namespace change.
             */
            namespaceChanged?: ReservationLocations.NamespaceChanged;
            /**
             * Emitted when an application is provisioned (installed).
             */
            serviceProvisioned?: ReservationLocations.ServiceProvisioned;
            /**
             * Emitted when an application is removed (uninstalled).
             */
            serviceRemoved?: ReservationLocations.ServiceRemoved;
            /**
             * Emitted on a meta site creation.
             */
            siteCreated?: ReservationLocations.SiteCreated;
            /**
             * Emitted on a meta site deletion.
             */
            siteDeleted?: ReservationLocations.SiteDeleted;
            /**
             * Emitted when meta site is marked as template.
             */
            siteMarkedAsTemplate?: ReservationLocations.SiteMarkedAsTemplate;
            /**
             * Emitted when meta site is marked as a WixSite.
             */
            siteMarkedAsWixSite?: ReservationLocations.SiteMarkedAsWixSite;
            /**
             * Emitted on the first* publish of the meta site (* switching from unpublished to published state).
             */
            sitePublished?: ReservationLocations.SitePublished;
            /**
             * Emitted when meta site name (URL slug) is changed.
             */
            siteRenamedPayload?: ReservationLocations.SiteRenamed;
            /**
             * Emitted on a meta site transfer completion.
             */
            siteTransferred?: ReservationLocations.SiteTransferred;
            /**
             * Emitted on a meta site restoration.
             */
            siteUndeleted?: ReservationLocations.SiteUndeleted;
            /**
             * Emitted on a meta site unpublish.
             */
            siteUnpublished?: ReservationLocations.SiteUnpublished;
            /**
             * Emitted when Studio is attached.
             */
            studioAssigned?: ReservationLocations.StudioAssigned;
            /**
             * Emitted when Studio is detached.
             */
            studioUnassigned?: ReservationLocations.StudioUnassigned;
            /**
             * A timestamp of the event.
             */
            timestamp?: string;
            /**
             * A meta site version. Monotonically increasing.
             */
            version?: string;
        };
        type MetaSiteSpecialEventPayloadOneOf = {
            /**
             * Emitted when meta site was permanently deleted.
             */
            hardDeleted?: ReservationLocations.SiteHardDeleted;
            /**
             * Emitted on a namespace change.
             */
            namespaceChanged?: ReservationLocations.NamespaceChanged;
            /**
             * Emitted when an application is provisioned (installed).
             */
            serviceProvisioned?: ReservationLocations.ServiceProvisioned;
            /**
             * Emitted when an application is removed (uninstalled).
             */
            serviceRemoved?: ReservationLocations.ServiceRemoved;
            /**
             * Emitted on a meta site creation.
             */
            siteCreated?: ReservationLocations.SiteCreated;
            /**
             * Emitted on a meta site deletion.
             */
            siteDeleted?: ReservationLocations.SiteDeleted;
            /**
             * Emitted when meta site is marked as template.
             */
            siteMarkedAsTemplate?: ReservationLocations.SiteMarkedAsTemplate;
            /**
             * Emitted when meta site is marked as a WixSite.
             */
            siteMarkedAsWixSite?: ReservationLocations.SiteMarkedAsWixSite;
            /**
             * Emitted on the first* publish of the meta site (* switching from unpublished to published state).
             */
            sitePublished?: ReservationLocations.SitePublished;
            /**
             * Emitted when meta site name (URL slug) is changed.
             */
            siteRenamedPayload?: ReservationLocations.SiteRenamed;
            /**
             * Emitted on a meta site transfer completion.
             */
            siteTransferred?: ReservationLocations.SiteTransferred;
            /**
             * Emitted on a meta site restoration.
             */
            siteUndeleted?: ReservationLocations.SiteUndeleted;
            /**
             * Emitted on a meta site unpublish.
             */
            siteUnpublished?: ReservationLocations.SiteUnpublished;
            /**
             * Emitted when Studio is attached.
             */
            studioAssigned?: ReservationLocations.StudioAssigned;
            /**
             * Emitted when Studio is detached.
             */
            studioUnassigned?: ReservationLocations.StudioUnassigned;
        };
        type MigrateOldRestaurantSettingsRequest = {
            /**
             * Mode.
             */
            mode?: string;
            /**
             * Override not default.
             */
            overrideNotDefault?: boolean;
        };
        type MigrateOldRestaurantSettingsResponse = {
            /**
             * Migration results.
             */
            migrationResults?: Array<ReservationLocations.MigrationResult>;
        };
        type MigratedFromLegacyReason = {};
        type MigrationParsingError = {
            /**
             * Message.
             */
            message?: string;
            /**
             * Field.
             */
            path?: string;
            /**
             * Target.
             */
            target?: Object;
        };
        type MigrationResult = {
            /**
             * Migration parsing errors.
             */
            migrationParsingErrors?: Array<ReservationLocations.MigrationParsingError>;
            /**
             * Old settings.
             */
            oldSettings?: Object;
            /**
             * Parsed settings.
             */
            parsedSettings?: ReservationLocations.ParsedSettings;
            /**
             * The migrated ReservationLocation.
             */
            reservationLocation?: ReservationLocations.ReservationLocation;
        };
        type MyReservationsField = {
            /**
             * Custom field ID.
             *
             * This should only be provided if the `fieldType` is `CUSTOM_FIELD`, in which case it is required and must match the ID of a custom field in the `customFieldDefinitions` array of the `reservationForm`.
             */
            customFieldId?: string;
            /**
             * Field type.
             */
            fieldType?: string;
            /**
             * Whether the field is shown.
             */
            shown?: boolean;
        };
        type NamespaceChanged = {
            /**
             * A new namespace.
             */
            newNamespace?: string;
            /**
             * A previous namespace.
             */
            oldNamespace?: string;
        };
        type NewFeatureReason = {};
        type NoticePeriod = {
            /**
             * The quantity of the chosen time unit.
             */
            number?: number;
            /**
             * Time unit.
             *
             * Supported values:
             * 'UNKNOWN', 'MINUTES, 'HOURS', 'DAYS'.
             */
            unit?: string;
        };
        type OldCustomField = {
            label?: string;
            required?: boolean;
        };
        type OldInstant = {
            day?: number;
            hour?: number;
            minute?: number;
            month?: number;
            year?: number;
        };
        type OldPolicy = {
            isPlainText?: boolean;
            value?: string;
        };
        type OldScheduleException = {
            available?: boolean;
            comment?: string;
            end?: ReservationLocations.OldInstant;
            start?: ReservationLocations.OldInstant;
        };
        type OldScheduleInterval = {
            durationMins?: number;
            minuteOfWeek?: number;
        };
        type OldTerms = {
            isPlainText?: boolean;
            value?: string;
        };
        type OnlineReservations = {
            /**
             * The location's business schedule.
             *
             * By default, the business schedule of a reservation location uses the values of its location's business schedule. However, after the first time a reservation location's business schedule has been modified, it stores and uses its own values and no longer mirrors its location's business schedule.
             * Limited to 100 time periods.
             */
            businessSchedule?: ReservationLocations.BusinessSchedule;
            /**
             * Default turnover time in minutes.
             *
             * Turnover time is how much time a party is allotted for their entire reservation - from being seated to leaving the restaurant.
             */
            defaultTurnoverTime?: number;
            /**
             * Manual approval settings.
             */
            manualApproval?: ReservationLocations.ManualApproval;
            /**
             * Minimum reservation notice.
             *
             * The minimum amount of time that must be allowed between making a reservation and that reservation's start time.
             */
            minimumReservationNotice?: ReservationLocations.NoticePeriod;
            /**
             * Whether online reservations are enabled.
             */
            onlineReservationsEnabled?: boolean;
            /**
             * Party pacing settings.
             *
             * The maximum number of party reservations that can start within a 15-minute period.
             * For example, a party pacing of 5 would mean that no more than 5 parties could make a reservation for the period between `10:00.000`-`10:14.999`.
             */
            partyPacing?: ReservationLocations.PartyPacing;
            /**
             * Party size limits for a reservation.
             */
            partySize?: ReservationLocations.PartySize;
            /**
             * Seat pacing settings.
             *
             * The maximum number of seats that can be filled by new reservations within a 15-minute period.
             * For example, setting a seat pacing of 15 would mean that between `10:00.000`-`10:14.999` there will be no more than 15 new seats available for reservation.
             */
            seatPacing?: ReservationLocations.SeatPacing;
            /**
             * Whether a phone number is shown.
             */
            showPhoneNumber?: boolean;
            /**
             * Custom turnover time rules.
             *
             * This allows you to set different turnover times for different party sizes.
             */
            turnoverTimeRules?: Array<ReservationLocations.TurnoverTimeRule>;
        };
        type Page = {
            /**
             * the msid the page is on
             */
            metaSiteId?: string;
            /**
             * Invalidate by Page ID
             */
            pageId?: string;
        };
        type Paging = {
            /**
             * Number of items to load.
             */
            limit?: number;
            /**
             * Number of items to skip in the current sort order.
             */
            offset?: number;
        };
        type PagingMetadataV2 = {
            /**
             * Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used.
             */
            cursors?: ReservationLocations.Cursors;
            /**
             * Offset that was requested.
             */
            offset?: number;
        };
        type ParsedSettings = {
            available?: boolean;
            customFields?: Array<ReservationLocations.OldCustomField>;
            futureDelayMins?: number;
            locale?: string;
            partySizeMax?: number;
            partySizeMin?: number;
            privacyPolicy?: ReservationLocations.OldPolicy;
            scheduleExceptions?: Array<ReservationLocations.OldScheduleException>;
            termsAndConditions?: ReservationLocations.OldTerms;
            weeklySchedule?: Array<ReservationLocations.OldScheduleInterval>;
        };
        type PartiesSize = {
            /**
             * Maximum number of seats a party can reserve.
             */
            max?: number;
            /**
             * Minimum number of seats a party can reserve.
             */
            min?: number;
        };
        type PartyPacing = {
            /**
             * Whether this option is enabled.
             */
            enabled?: boolean;
            /**
             * Maximum number of new party reservations that can be made every 15 minutes.
             */
            number?: number;
        };
        type PartySize = {
            /**
             * Maximum number of seats a party can reserve.
             */
            max?: number;
            /**
             * Minimum number of seats a party can reserve.
             */
            min?: number;
        };
        type PrivacyPolicy = {
            /**
             * Whether the privacy policy is shown to the customer.
             *
             * Default: `false`
             */
            enabled?: boolean;
            /**
             * Privacy policy text.
             */
            text?: string;
            /**
             * Privacy policy URL.
             */
            url?: string;
        };
        type PrivacyPolicyValueOneOf = {
            /**
             * Privacy policy text.
             */
            text?: string;
            /**
             * Privacy policy URL.
             */
            url?: string;
        };
        type QueryReservationLocationsOptions = {
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
            fieldsets?: Array<string>;
        };
        type QueryReservationLocationsRequest = {
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
            fieldsets?: Array<string>;
            /**
             * Query options.
             */
            query: ReservationLocations.QueryV2;
        };
        type QueryReservationLocationsResponse = {
            /**
             * Metadata for the paginated results.
             */
            pagingMetadata?: ReservationLocations.PagingMetadataV2;
            /**
             * List of reservation locations
             */
            reservationLocations?: Array<ReservationLocations.ReservationLocation>;
        };
        type QueryV2 = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            cursorPaging?: ReservationLocations.CursorPaging;
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
            filter?: Object;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: ReservationLocations.Paging;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<ReservationLocations.Sorting>;
        };
        type QueryV2PagingMethodOneOf = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            cursorPaging?: ReservationLocations.CursorPaging;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: ReservationLocations.Paging;
        };
        type QuotaFeature = {
            /**
             * Default (or Freemium) quota limitation. if left undefined the free feature has unlimited amount.
             */
            limit?: string;
            /**
             * Periodic time-frame to reset the usage counter. You may use NO_PERIOD if counter shouldn't be reset.
             */
            period?: string;
            /**
             * Usage measurement units (seconds? MBs? unitless?). Usage reported will be counted in multiples of this basic unit.
             */
            units?: string;
        };
        type QuotaInfo = {
            /**
             * How often the customer has used the feature during the current
             * period.
             */
            currentUsage?: string;
            /**
             * How often the customer is allowed to use the feature during the specified
             * period. `null` means that the customer has unlimited access to the feature.
             */
            limit?: string;
            /**
             * Time frame for the usage limitation. `NO_PERIOD` means that `remainingUsage`
             * isn't automatically reset to the feature's `limit` after a specific period.
             * You may still manually call
             * [Reset Usage Counter](https://bo.wix.com/wix-docs/rest/premium/premium-features-manager/reset-usage-counter).
             */
            period?: string;
            /**
             * How often the customer can still use the feature during the current
             * period. `null` means that the customer has unlimited access to the feature.
             */
            remainingUsage?: string;
        };
        type ReassignedFromSiteReason = {
            /**
             * Information about a transfer from another site.
             */
            reassignedFromMetasite?: string;
        };
        type ReassignedToAnotherSiteReason = {
            /**
             * Information about a transfer to the site.
             */
            reassignedToMetasite?: string;
        };
        type ReplacedByAnotherSubscriptionReason = {};
        type ReservationForm = {
            /**
             * Custom fields you wish to add to the registration form for the customer to fill in.
             */
            customFieldDefinitions?: Array<ReservationLocations.CustomFieldDefinition>;
            /**
             * Email marketing checkbox settings.
             */
            emailMarketingCheckbox?: ReservationLocations.EmailMarketingCheckbox;
            /**
             * Whether an email is required in the reservation form.
             *
             * Default: `false`
             */
            emailRequired?: boolean;
            /**
             * Whether a last_name is required in the reservation form.
             *
             * Default: `false`
             */
            lastNameRequired?: boolean;
            /**
             * Whether to show policies (the terms and conditions, and the privacy policy) to the customer.
             */
            policiesEnabled?: boolean;
            /**
             * Settings for displaying the privacy policy.
             */
            privacyPolicy?: ReservationLocations.PrivacyPolicy;
            /**
             * A message shown to the customer in the registration form.
             */
            submitMessage?: string;
            /**
             * Settings for displaying the terms and conditions.
             */
            termsAndConditions?: ReservationLocations.TermsAndConditions;
        };
        type ReservationLocation = {
            /**
             * The date and time this reservation location was created.
             */
            _createdDate?: Date;
            /**
             * Reservation location ID.
             */
            _id?: string;
            /**
             * The date and time this reservation location was last updated.
             */
            _updatedDate?: Date;
            /**
             * Whether this reservation location's `location` is archived.
             */
            archived?: boolean;
            /**
             * Reservation location configuration.
             */
            configuration?: ReservationLocations.Configuration;
            /**
             * Whether this reservation location's `location` is the default location of the business.
             */
            default?: boolean;
            /**
             * Physical location details.
             *
             * Locations can be created and configured using the [Locations API](https://dev.wix.com/docs/rest/api-reference/business-info/locations/introduction)
             * or on the [Business Info](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsettings/business-info) page in the Dashboard.
             */
            location?: ReservationLocations.Location;
            /**
             * Represents the current state of a reservation location. Each time the reservation location is modified, its `revision` changes. For an update operation to succeed, you must pass the latest revision.
             */
            revision?: string;
        };
        type SeatPacing = {
            /**
             * Whether this option is enabled.
             */
            enabled?: boolean;
            /**
             * Maximum number of seats that can be reserved every 15 minutes.
             */
            number?: number;
        };
        type ServiceProvisioned = {
            /**
             * Either UUID or EmbeddedServiceType.
             */
            appDefId?: string;
            /**
             * Not only UUID. Something here could be something weird.
             */
            instanceId?: string;
            /**
             * An instance id from which this instance is originated.
             */
            originInstanceId?: string;
            /**
             * A version.
             */
            version?: string;
        };
        type ServiceRemoved = {
            /**
             * Either UUID or EmbeddedServiceType.
             */
            appDefId?: string;
            /**
             * Not only UUID. Something here could be something weird.
             */
            instanceId?: string;
            /**
             * A version.
             */
            version?: string;
        };
        type SiteCreated = {
            /**
             * A context in which meta site was created.
             */
            context?: string;
            /**
             * A namespace.
             */
            namespace?: string;
            /**
             * A meta site id from which this site was created.
             *
             * In case of a creation from a template it's a template id.
             * In case of a site duplication ("Save As" in dashboard or duplicate in UM) it's an id of a source site.
             */
            originMetaSiteId?: string;
            /**
             * A template identifier (empty if not created from a template).
             */
            originTemplateId?: string;
            /**
             * An account id of the owner.
             */
            ownerId?: string;
            /**
             * A meta site name (URL slug).
             */
            siteName?: string;
        };
        type SiteDeleted = {
            /**
             * A deletion context.
             */
            deleteContext?: ReservationLocations.DeleteContext;
        };
        type SiteHardDeleted = {
            /**
             * A deletion context.
             */
            deleteContext?: ReservationLocations.DeleteContext;
        };
        type SiteMarkedAsTemplate = {};
        type SiteMarkedAsWixSite = {};
        type SitePublished = {};
        type SiteRenamed = {
            /**
             * A new meta site name (URL slug).
             */
            newSiteName?: string;
            /**
             * A previous meta site name (URL slug).
             */
            oldSiteName?: string;
        };
        type SiteTransferred = {
            /**
             * A new owner id (user that accepts meta site).
             */
            newOwnerId?: string;
            /**
             * A previous owner id (user that transfers meta site).
             */
            oldOwnerId?: string;
        };
        type SiteUndeleted = {};
        type SiteUnpublished = {
            /**
             * A list of URLs previously associated with the meta site.
             */
            urls?: Array<string>;
        };
        type Sorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             *
             * Use `ASC` for ascending order or `DESC` for descending order. Defaults to `ASC`.
             */
            order?: string;
        };
        type SpecialHourPeriod = {
            /**
             * Additional details about the period.
             */
            comment?: string;
            /**
             * End date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#combined_date_and_time_representations) format.
             */
            endDate?: string;
            /**
             * Whether or not the location is closed during this period.
             */
            isClosed?: boolean;
            /**
             * Start date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#combined_date_and_time_representations) format.
             */
            startDate?: string;
        };
        type StreetAddress = {
            /**
             * Apartment number.
             */
            apt?: string;
            /**
             * Street name.
             */
            name?: string;
            /**
             * Street number.
             */
            number?: string;
        };
        type StudioAssigned = {};
        type StudioUnassigned = {};
        type TableCombination = {
            /**
             * Table combination ID.
             */
            _id?: string;
            /**
             * Whether the table combination is active (available to be reserved).
             */
            isActive?: boolean;
            /**
             * Maximum number of seats that can be reserved in this table combination.
             */
            seatsMax?: number;
            /**
             * Minimum number of seats that can be reserved in this table combination.
             */
            seatsMin?: number;
            /**
             * IDs of tables in the combination.
             */
            tableIds?: Array<string>;
        };
        type TableDefinition = {
            /**
             * Table ID.
             */
            _id?: string;
            /**
             * Whether the table is active (available to be reserved).
             */
            isActive?: boolean;
            /**
             * Table name.
             */
            name?: string;
            /**
             * Maximum number of seats.
             */
            seatsMax?: number;
            /**
             * Minimum number of seats.
             */
            seatsMin?: number;
        };
        type TableManagement = {
            /**
             * Deleted table definitions.
             */
            deletedTableDefinitions?: Array<ReservationLocations.TableDefinition>;
            /**
             * Table combinations.
             */
            tableCombinations?: Array<ReservationLocations.TableCombination>;
            /**
             * Table definitions.
             */
            tableDefinitions?: Array<ReservationLocations.TableDefinition>;
        };
        type TablesDeleted = {
            /**
             * ID of the affected reservation location.
             */
            reservationLocationId?: string;
            /**
             * IDs of deleted tables.
             */
            tableIds?: Array<string>;
        };
        type TermsAndConditions = {
            /**
             * Whether the terms and conditions are shown to the customer.
             *
             * Default: `false`
             */
            enabled?: boolean;
            /**
             * Terms and conditions text.
             */
            text?: string;
            /**
             * Terms and conditions URL.
             */
            url?: string;
        };
        type TermsAndConditionsValueOneOf = {
            /**
             * Terms and conditions text.
             */
            text?: string;
            /**
             * Terms and conditions URL.
             */
            url?: string;
        };
        type TimePeriod = {
            /**
             * Day of the week this period ends on.
             */
            closeDay?: string;
            /**
             * Time this period ends in 24hr [ISO 8601](http://www.w3.org/TR/NOTE-datetime) extended format (hh:mm). Valid values are `00:00-24:00`, where `24:00` represents
             * midnight at the end of the specified day field.
             *
             * This is the last time a reservation can be made at the restaurant, not the time the restaurant closes its doors.
             */
            closeTime?: string;
            /**
             * Day of the week this period starts on.
             */
            openDay?: string;
            /**
             * Time this period starts in 24hr [ISO 8601](http://www.w3.org/TR/NOTE-datetime) extended format (hh:mm). Valid values are `00:00-24:00`, where `24:00` represents
             * midnight at the end of the specified day field.
             */
            openTime?: string;
        };
        type TransferredFromAnotherAccountReason = {
            /**
             * Information about a transfer from another account.
             */
            transferredFromAccount?: string;
        };
        type TransferredToAnotherAccountReason = {
            /**
             * Information about a transfer to the account.
             */
            transferredToAccount?: string;
        };
        type TurnoverRule = {
            /**
             * Maximum number of seats to qualify for this rule.
             */
            maxSeats?: number;
            /**
             * Minimum number of seats to qualify for this rule.
             */
            minSeats?: number;
            /**
             * Turnover time in minutes for qualifying parties.
             */
            minutes?: number;
        };
        type TurnoverTimeRule = {
            /**
             * Turnover time in minutes for qualifying parties.
             */
            minutes?: number;
            /**
             * Maximum number of seats to qualify for this rule.
             */
            seatsMax?: number;
            /**
             * Minimum number of seats to qualify for this rule.
             */
            seatsMin?: number;
        };
        type URI = {
            /**
             * the msid the URI is on
             */
            metaSiteId?: string;
            /**
             * URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes
             */
            uriPath?: string;
        };
        type UnAssingedToFloatingReason = {};
        type UpdateReservationLocation = {
            /**
             * The date and time this reservation location was created.
             */
            _createdDate?: Date;
            /**
             * Reservation location ID.
             */
            _id?: string;
            /**
             * The date and time this reservation location was last updated.
             */
            _updatedDate?: Date;
            /**
             * Whether this reservation location's `location` is archived.
             */
            archived?: boolean;
            /**
             * Reservation location configuration.
             */
            configuration?: ReservationLocations.Configuration;
            /**
             * Whether this reservation location's `location` is the default location of the business.
             */
            default?: boolean;
            /**
             * Physical location details.
             *
             * Locations can be created and configured using the [Locations API](https://dev.wix.com/docs/rest/api-reference/business-info/locations/introduction)
             * or on the [Business Info](https://www.wix.com/my-account/site-selector/?buttonText=Select%20Site&title=Select%20a%20Site&autoSelectOnSingleSite=true&actionUrl=https:%2F%2Fwww.wix.com%2Fdashboard%2F%7B%7BmetaSiteId%7D%7D%2Fsettings/business-info) page in the Dashboard.
             */
            location?: ReservationLocations.Location;
            /**
             * Represents the current state of a reservation location. Each time the reservation location is modified, its `revision` changes. For an update operation to succeed, you must pass the latest revision.
             */
            revision?: string;
        };
        type UpdateReservationLocationOptions = {};
        type UpdateReservationLocationRequest = {
            /**
             * ReservationLocation to be updated, may be partial.
             */
            reservationLocation: ReservationLocations.ReservationLocation;
        };
        type UpdateReservationLocationResponse = {
            /**
             * The updated reservation location.
             */
            reservationLocation?: ReservationLocations.ReservationLocation;
        };
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryBuilder.html#)
         */
        interface ReservationLocationsQueryBuilder {
            /**
             * Refines a query to match items where the specified property equals the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryBuilder.html#eq)
             */
            eq(propertyName: string, value: any): ReservationLocations.ReservationLocationsQueryBuilder;
            /**
             * Returns the query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryBuilder.html#find)
             */
            find(): Promise<ReservationLocations.ReservationLocationsQueryResult>;
            /**
             * Refines a query to only match items where the specified property conatins any of the values in the provided array of values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryBuilder.html#in)
             */
            in(propertyName: string, value: any): ReservationLocations.ReservationLocationsQueryBuilder;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryBuilder.html#limit)
             */
            limit(limit: number): ReservationLocations.ReservationLocationsQueryBuilder;
            /**
             * Refines a query to match items where the specified property doesn't equal the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryBuilder.html#ne)
             */
            ne(propertyName: string, value: any): ReservationLocations.ReservationLocationsQueryBuilder;
            /**
             * Refines a query that skips to a specific record.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryBuilder.html#skipTo)
             */
            skipTo(cursor: string): ReservationLocations.ReservationLocationsQueryBuilder;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryResult.html#)
         */
        interface ReservationLocationsQueryResult {
            /**
             * Returns the query cursors.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryResult.html#cursors)
             */
            cursors: ReservationLocations.Cursors;
            /**
             * Returns an array of `reservationLocations` items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryResult.html#items)
             */
            items: Array<ReservationLocations.ReservationLocation>;
            /**
             * Returns the number of items in the current page of results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryResult.html#length)
             */
            length: number;
            /**
             * Returns the requested page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryResult.html#pageSize)
             */
            pageSize: number;
            /**
             * Returns the `ReservationLocationsQueryBuilder` object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryResult.html#query)
             */
            query: ReservationLocations.ReservationLocationsQueryBuilder;
            /**
             * Indicates whether the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates whether the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryResult.html#next)
             */
            next(): Promise<ReservationLocations.ReservationLocationsQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryResult.html#prev)
             */
            prev(): Promise<ReservationLocations.ReservationLocationsQueryResult>;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryBuilder.html#)
         */
        namespace ReservationLocationsQueryBuilder {
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.ReservationLocations.ReservationLocationsQueryResult.html#)
         */
        namespace ReservationLocationsQueryResult {
        }
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.html#)
     */
    namespace Reservations {
        type ActionEvent = {
            bodyAsJson?: string;
        };
        type Aggregation = {
            dateHistogram?: Reservations.DateHistogramAggregation;
            fieldPath?: string;
            groupBy?: Reservations.GroupByAggregation;
            name?: string;
            nested?: Reservations.NestedAggregation;
            range?: Reservations.RangeAggregation;
            scalar?: Reservations.ScalarAggregation;
            /**
             * Supported values:
             * - `'DATE_HISTOGRAM'`
             * - `'NESTED'`
             * - `'RANGE'`
             * - `'SCALAR'`
             * - `'UNKNOWN_AGGREGATION_TYPE'`
             * - `'VALUE'`
             */
            type?: string;
            value?: Reservations.ValueAggregation;
        };
        type AggregationData = {
            /**
             * key = aggregation name (as derived from search request)
             */
            results?: Array<Reservations.AggregationResults>;
        };
        type AggregationKindOneOf = {
            dateHistogram?: Reservations.DateHistogramAggregation;
            nested?: Reservations.NestedAggregation;
            range?: Reservations.RangeAggregation;
            scalar?: Reservations.ScalarAggregation;
            value?: Reservations.ValueAggregation;
        };
        type AggregationResults = {
            dateHistogram?: Reservations.DateHistogramResults;
            fieldPath?: string;
            groupedByValue?: Reservations.GroupByValueResults;
            name?: string;
            nested?: Reservations.NestedResults;
            ranges?: Reservations.RangeResults;
            scalar?: Reservations.ScalarResult;
            /**
             * Supported values:
             * - `'DATE_HISTOGRAM'`
             * - `'NESTED'`
             * - `'RANGE'`
             * - `'SCALAR'`
             * - `'UNKNOWN_AGGREGATION_TYPE'`
             * - `'VALUE'`
             */
            type?: string;
            values?: Reservations.ValueResults;
        };
        type AggregationResultsResultOneOf = {
            dateHistogram?: Reservations.DateHistogramResults;
            groupedByValue?: Reservations.GroupByValueResults;
            nested?: Reservations.NestedResults;
            ranges?: Reservations.RangeResults;
            scalar?: Reservations.ScalarResult;
            values?: Reservations.ValueResults;
        };
        type CancelReservationOptions = {
            /**
             * The phone number that was provided when the reservation was created.
             *
             * This is required for reservations with any `source` other than `WALK_IN`.
             *
             * This requirement provides additional security by ensuring that the canceling party knows both the reservation's `reservationId` and the reservee's `phone`.
             */
            phone?: string;
        };
        type CancelReservationRequest = {
            /**
             * The phone number that was provided when the reservation was created.
             *
             * This is required for reservations with any `source` other than `WALK_IN`.
             *
             * This requirement provides additional security by ensuring that the canceling party knows both the reservation's `reservationId` and the reservee's `phone`.
             */
            phone?: string;
            /**
             * Reservation ID.
             */
            reservationId: string;
            /**
             * Revision number.
             *
             * Include the existing `revision` to prevent conflicting updates to reservations.
             */
            revision: string;
        };
        type CancelReservationResponse = {
            /**
             * Reservation.
             */
            reservation?: Reservations.Reservation;
        };
        type CreateHeldReservationRequest = {
            /**
             * Held reservation information to update.
             */
            reservationDetails: Reservations.HeldReservationDetails;
        };
        type CreateHeldReservationResponse = {
            /**
             * Reservation.
             */
            reservation?: Reservations.Reservation;
        };
        type CreateReservationOptions = {
            /**
             * Ignored reservation location conflicts of the types included in the array. This ensures that the reservation is created even if the given conflicts would normally prevent it.
             *
             * Possible values:
             * * `"PARTY_PACING"`: The restaurant cannot accommodate a party of the given size according to party pacing settings.
             * * `"SEAT_PACING"`: The required number of seats are unavailable according to seat pacing settings.
             */
            ignoreReservationLocationConflicts?: Array<string>;
            /**
             * Ignore table combination conflicts of the types included in the array. This ensures that the reservation is created even if the given conflicts would normally prevent it.
             *
             * Possible values:
             * * `"RESERVED"`: One or more of the chosen tables are already reserved.
             * * `"TOO_BIG"`: The party is too big for the selected table.
             * * `"TOO_SMALL"`: The party is too small for the selected table.
             * * `"OFFLINE_ONLY"`: The restaurant does not allow online reservations.
             */
            ignoreTableCombinationConflicts?: Array<string>;
        };
        type CreateReservationRequest = {
            /**
             * Ignored reservation location conflicts of the types included in the array. This ensures that the reservation is created even if the given conflicts would normally prevent it.
             *
             * Possible values:
             * * `"PARTY_PACING"`: The restaurant cannot accommodate a party of the given size according to party pacing settings.
             * * `"SEAT_PACING"`: The required number of seats are unavailable according to seat pacing settings.
             */
            ignoreReservationLocationConflicts?: Array<string>;
            /**
             * Ignore table combination conflicts of the types included in the array. This ensures that the reservation is created even if the given conflicts would normally prevent it.
             *
             * Possible values:
             * * `"RESERVED"`: One or more of the chosen tables are already reserved.
             * * `"TOO_BIG"`: The party is too big for the selected table.
             * * `"TOO_SMALL"`: The party is too small for the selected table.
             * * `"OFFLINE_ONLY"`: The restaurant does not allow online reservations.
             */
            ignoreTableCombinationConflicts?: Array<string>;
            /**
             * Reservation details.
             */
            reservation: Reservations.Reservation;
        };
        type CreateReservationResponse = {
            /**
             * Reservation.
             */
            reservation?: Reservations.Reservation;
        };
        type CursorPaging = {
            /**
             * Pointer to the next or previous page in the list of results.
             *
             * You can get the relevant cursor token
             * from the `pagingMetadata` object in the previous call's response.
             * Not relevant for the first request.
             */
            cursor?: string;
            /**
             * Number of items to load.
             */
            limit?: number;
        };
        type CursorPagingMetadata = {
            /**
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Offset that was requested.
             */
            cursors?: Reservations.Cursors;
            /**
             * Indicates if there are more results after the current page.
             * If `true`, another page of results can be retrieved.
             * If `false`, this is the last page.
             */
            hasNext?: boolean;
        };
        type CursorQuery = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            cursorPaging?: Reservations.CursorPaging;
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
            filter?: Object;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<Reservations.Sorting>;
        };
        type CursorQueryPagingMethodOneOf = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            cursorPaging?: Reservations.CursorPaging;
        };
        type CursorSearch = {
            /**
             * Aggregations | Faceted search: refers to a way to explore large amounts of data by displaying summaries about various partitions of the data and later allowing to narrow the navigation to a specific partition.
             */
            aggregations?: Array<Reservations.Aggregation>;
            /**
             * Cursor pointing to page of results. Can't be used together with 'paging'. 'cursor_paging.cursor' can not be used together with 'filter' or 'sort'
             */
            cursorPaging?: Reservations.CursorPaging;
            /**
             * A filter object. See the filter section [here](https://dev.wix.com/docs/rnd-general/articles/p13n-guidelines-aips/guidance-aips/wix-api-basics/1011-wql-wix-query-language)
             */
            filter?: Object;
            /**
             * free text to match in searchable fields
             */
            search?: Reservations.SearchDetails;
            /**
             * Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]
             */
            sort?: Array<Reservations.Sorting>;
        };
        type CursorSearchPagingMethodOneOf = {
            /**
             * Cursor pointing to page of results. Can't be used together with 'paging'. 'cursor_paging.cursor' can not be used together with 'filter' or 'sort'
             */
            cursorPaging?: Reservations.CursorPaging;
        };
        type Cursors = {
            /**
             * Cursor pointing to next page in the list of results.
             */
            next?: string;
            /**
             * Cursor pointing to previous page in the list of results.
             */
            prev?: string;
        };
        type DateHistogramAggregation = {
            /**
             * Supported values:
             * - `'DAY'`
             * - `'HOUR'`
             * - `'MINUTE'`
             * - `'MONTH'`
             * - `'SECOND'`
             * - `'UNKNOWN_INTERVAL'`
             * - `'WEEK'`
             * - `'YEAR'`
             */
            interval?: string;
        };
        type DateHistogramResult = {
            count?: number;
            value?: string;
        };
        type DateHistogramResults = {
            results?: Array<Reservations.DateHistogramResult>;
        };
        type DeleteReservationRequest = {
            /**
             * Reservation ID.
             */
            reservationId: string;
            revision?: string;
        };
        type DeleteReservationResponse = {};
        type Details = {
            /**
             * End date and time of the reservation.
             */
            endDate?: Date;
            /**
             * Party size.
             */
            partySize?: number;
            /**
             * ID of the reservation location at which this reservation will be made.
             */
            reservationLocationId?: string;
            /**
             * Start date and time of the reservation.
             */
            startDate?: Date;
            /**
             * IDs of tables used for this reservation.
             */
            tableIds?: Array<string>;
        };
        type DomainEvent = {
            /**
             * Unique event ID.
             * Allows clients to ignore duplicate webhooks.
             */
            _id?: string;
            actionEvent?: Reservations.ActionEvent;
            /**
             * Information about the reservation that was created and event metadata.
             */
            createdEvent?: Reservations.EntityCreatedEvent;
            deletedEvent?: Reservations.EntityDeletedEvent;
            /**
             * A sequence number defining the order of updates to the underlying entity.
             * For example, given that some entity was updated at 16:00 and than again at 16:01,
             * it is guaranteed that the sequence number of the second update is strictly higher than the first.
             * As the consumer, you can use this value to ensure that you handle messages in the correct order.
             * To do so, you will need to persist this number on your end, and compare the sequence number from the
             * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
             */
            entityEventSequence?: string;
            /**
             * Assumes actions are also always typed to an entity_type
             * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
             */
            entityFqdn?: string;
            /**
             * ID of the entity associated with the event.
             */
            entityId?: string;
            /**
             * Event timestamp.
             */
            eventTime?: Date;
            /**
             * If present, indicates the action that triggered the event.
             */
            originatedFrom?: string;
            /**
             * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
             * This is although the created/updated/deleted notion is duplication of the oneof types
             * Example: created/updated/deleted/started/completed/email_opened
             */
            slug?: string;
            /**
             * Whether the event was triggered as a result of a privacy regulation application
             * (for example, GDPR).
             */
            triggeredByAnonymizeRequest?: boolean;
            /**
             * Information about the reservation that was updated and event metadata.
             */
            updatedEvent?: Reservations.EntityUpdatedEvent;
        };
        type DomainEventBodyOneOf = {
            actionEvent?: Reservations.ActionEvent;
            createdEvent?: Reservations.EntityCreatedEvent;
            deletedEvent?: Reservations.EntityDeletedEvent;
            updatedEvent?: Reservations.EntityUpdatedEvent;
        };
        type Empty = {};
        type EntityCreatedEvent = {
            /**
             * Information about the reservation that was created in JSON format.
             */
            entityAsJson?: string;
        };
        type EntityDeletedEvent = {
            /**
             * Entity that was deleted
             */
            deletedEntityAsJson?: string;
        };
        type EntityUpdatedEvent = {
            /**
             * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
             * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
             * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
             */
            currentEntityAsJson?: string;
        };
        type GetReservationOptions = {
            /**
             * Array of named, predefined sets of projected fields to be returned.
             *
             * Supported values: `PUBLIC`, `FULL`.
             *
             * Calling this method with `fieldsets` set to `FULL` requires additional permissions. See this API's Introduction article for more information.
             */
            fieldsets?: Array<string>;
        };
        type GetReservationRequest = {
            /**
             * Array of named, predefined sets of projected fields to be returned.
             *
             * Supported values: `PUBLIC`, `FULL`.
             *
             * Calling this method with `fieldsets` set to `FULL` requires additional permissions. See this API's Introduction article for more information.
             */
            fieldsets?: Array<string>;
            /**
             * Reservation ID.
             */
            reservationId: string;
        };
        type GetReservationResponse = {
            /**
             * Reservation.
             */
            reservation?: Reservations.Reservation;
        };
        type GroupByAggregation = {
            fieldPath?: string;
            name?: string;
            value?: Reservations.ValueAggregation;
        };
        type GroupByAggregationKindOneOf = {
            value?: Reservations.ValueAggregation;
        };
        type GroupByValueResults = {
            results?: Array<Reservations.NestedValueAggregationResult>;
        };
        type HeldReservationDetails = {
            /**
             * Party size.
             */
            partySize?: number;
            /**
             * ID of the reservation location where the reservation is made.
             */
            reservationLocationId?: string;
            /**
             * Start date and time of the reservation.
             */
            startDate?: Date;
        };
        type IncludeMissingValuesOptions = {
            /**
             * can specify custom bucket name. Defaults are [string -> "N/A"], [int -> "0"], [bool -> "false"] ...
             */
            addToBucket?: string;
        };
        type ListReservationsOptions = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            paging?: Reservations.CursorPaging;
            /**
             * Defines how reservations in the response are sorted.
             */
            sort?: Reservations.Sorting;
            /**
             * Only reservations starting after this date are returned.
             */
            startDateFrom?: Date;
            /**
             * Only reservations starting before this date are returned.
             */
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
            status?: string;
        };
        type ListReservationsRequest = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            paging?: Reservations.CursorPaging;
            /**
             * Defines how reservations in the response are sorted.
             */
            sort?: Reservations.Sorting;
            /**
             * Only reservations starting after this date are returned.
             */
            startDateFrom?: Date;
            /**
             * Only reservations starting before this date are returned.
             */
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
            status?: string;
        };
        type ListReservationsResponse = {
            /**
             * Metadata for the paginated results.
             */
            pagingMetadata?: Reservations.CursorPagingMetadata;
            /**
             * List of reservations.
             */
            reservations?: Array<Reservations.Reservation>;
        };
        type MigrationNote = {};
        type NestedAggregation = {
            nestedAggregations?: Array<Reservations.NestedAggregationItem>;
        };
        type NestedAggregationItem = {
            dateHistogram?: Reservations.DateHistogramAggregation;
            fieldPath?: string;
            name?: string;
            range?: Reservations.RangeAggregation;
            scalar?: Reservations.ScalarAggregation;
            /**
             * Supported values:
             * - `'DATE_HISTOGRAM'`
             * - `'RANGE'`
             * - `'SCALAR'`
             * - `'UNKNOWN_AGGREGATION_TYPE'`
             * - `'VALUE'`
             */
            type?: string;
            value?: Reservations.ValueAggregation;
        };
        type NestedAggregationItemKindOneOf = {
            dateHistogram?: Reservations.DateHistogramAggregation;
            range?: Reservations.RangeAggregation;
            scalar?: Reservations.ScalarAggregation;
            value?: Reservations.ValueAggregation;
        };
        type NestedAggregationResults = {
            fieldPath?: string;
            name?: string;
            ranges?: Reservations.RangeResults;
            scalar?: Reservations.ScalarResult;
            /**
             * Supported values:
             * - `'DATE_HISTOGRAM'`
             * - `'NESTED'`
             * - `'RANGE'`
             * - `'SCALAR'`
             * - `'UNKNOWN_AGGREGATION_TYPE'`
             * - `'VALUE'`
             */
            type?: string;
            values?: Reservations.ValueResults;
        };
        type NestedAggregationResultsResultOneOf = {
            ranges?: Reservations.RangeResults;
            scalar?: Reservations.ScalarResult;
            values?: Reservations.ValueResults;
        };
        type NestedResultValue = {
            dateHistogram?: Reservations.ValueResult;
            range?: Reservations.RangeResult;
            scalar?: Reservations.NestedResultsScalarResult;
            value?: Reservations.ValueResult;
        };
        type NestedResultValueResultOneOf = {
            dateHistogram?: Reservations.ValueResult;
            range?: Reservations.RangeResult;
            scalar?: Reservations.NestedResultsScalarResult;
            value?: Reservations.ValueResult;
        };
        type NestedResults = {
            results?: Array<Reservations.Results>;
        };
        type NestedResultsScalarResult = {
            value?: number;
        };
        type NestedValueAggregationResult = {
            nestedResults?: Reservations.NestedAggregationResults;
            value?: string;
        };
        type QueryReservationsRequest = {
            /**
             * Query to select reservations.
             */
            query: Reservations.CursorQuery;
        };
        type QueryReservationsResponse = {
            /**
             * Metadata for the paginated results.
             */
            pagingMetadata?: Reservations.CursorPagingMetadata;
            /**
             * List of reservations.
             */
            reservations?: Array<Reservations.Reservation>;
        };
        type RangeAggregation = {
            buckets?: Array<Reservations.RangeBucket>;
        };
        type RangeAggregationResult = {
            count?: number;
            from?: number;
            to?: number;
        };
        type RangeBucket = {
            /**
             * Inclusive lower bound of the range. Required if to is not given.
             */
            from?: number;
            /**
             * Exclusive upper bound of the range. Required if from is not given.
             */
            to?: number;
        };
        type RangeResult = {
            count?: number;
            from?: number;
            to?: number;
        };
        type RangeResults = {
            results?: Array<Reservations.RangeAggregationResult>;
        };
        type Reservation = {
            /**
             * Date and time the reservation was created.
             */
            _createdDate?: Date;
            /**
             * Reservation ID.
             */
            _id?: string;
            /**
             * Date and time the reservation was changed.
             */
            _updatedDate?: Date;
            /**
             * The reason the reservation was declined.
             */
            declineReason?: string;
            /**
             * Reservation details.
             */
            details?: Reservations.Details;
            /**
             * Information about the person making the reservation.
             *
             * This field is required if the reservation's `status` is anything other than `WALK_IN`.
             */
            reservedBy?: Reservations.ReservedBy;
            /**
             * Information about the person the reservation is being made for.
             *
             * A reservation created with any `source` other than `WALK_IN` requires the `reservation.reservee.phone` and `reservation.reservee.firstName` fields.
             * Attempting to create a reservation without these fields results in an error.
             */
            reservee?: Reservations.Reservee;
            /**
             * Revision number, which increments by 1 each time the reservation is updated.
             * To prevent conflicting changes, the current revision must be passed when updating the reservation.
             *
             * Ignored when creating a reservation.
             */
            revision?: string;
            /**
             * Reservation source.
             *
             * This indicates how the reservation was made.
             * * `ONLINE` indicates that the customer made the reservation through a website or app.
             * * `OFFLINE` indicates that the reservation was made by a restaurant employee, for example when a customer calls to make a reservation.
             * * `WALK-IN` indicates that the customer did not make a reservation beforehand, and the reservation was entered into the system by a restaurant employee when the customer arrived at the restaurant.
             */
            source?: string;
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
            status?: string;
            /**
             * Team message.
             *
             * A message for the restaurant staff containing any additional information regarding the reservation, such as special requirements for the guests.
             */
            teamMessage?: string;
        };
        type ReservationCanceled = {
            /**
             * Reserved reservation.
             */
            reservation?: Reservations.Reservation;
        };
        type ReservationDataUpdated = {
            /**
             * Old reservation.
             */
            oldReservation?: Reservations.Reservation;
            /**
             * Reserved reservation.
             */
            reservation?: Reservations.Reservation;
        };
        type ReservationDetailsConflicts = {
            /**
             * Reservation location conflicts.
             */
            reservationLocationConflicts?: Array<Reservations.ReservationLocationConflict>;
            /**
             * Table combinations conflicts.
             */
            tableCombinationConflicts?: Array<Reservations.TableCombinationConflict>;
        };
        type ReservationLocationConflict = {
            /**
             * Reservation location conflict type.
             */
            type?: string;
        };
        type ReservationReserved = {
            /**
             * Reserved reservation.
             */
            reservation?: Reservations.Reservation;
        };
        type ReserveReservationRequest = {
            /**
             * Reservation ID.
             */
            reservationId: string;
            /**
             * Reservee details.
             */
            reservee: Reservations.Reservee;
            /**
             * Revision number.
             *
             * Include the existing `revision` to prevent conflicting updates to reservations.
             */
            revision: string;
        };
        type ReserveReservationResponse = {
            /**
             * Reservation.
             */
            reservation?: Reservations.Reservation;
        };
        type ReservedBy = {
            /**
             * Contact ID for the person who made the reservation. If a contact with this ID does not exist on the site, one will be created.
             */
            contactId?: string;
        };
        type Reservee = {
            /**
             * Contact ID. If a contact with this ID does not exist on the site, one will be created.
             */
            contactId?: string;
            /**
             * Custom fields for the reservee in key-value pairs.
             *
             * The key is the custom field's ID, and the value is the custom field's value. For example, a custom field for allergies might have the key-value pair `f4283b2d-6340-4cf9-bae7-8769e6b62127 : "Nuts, Seafood"`.
             *
             * Empty fields are not returned.
             */
            customFields?: Object;
            /**
             * Email address.
             */
            email?: string;
            /**
             * First name.
             *
             * This field is required if the reservation's `status` is anything other than `WALK_IN`.
             */
            firstName?: string;
            /**
             * Last name.
             */
            lastName?: string;
            /**
             * Whether the reservee has given marketing consent.
             */
            marketingConsent?: boolean;
            /**
             * Phone number.
             *
             * This property should begin with a +, followed by the country code, and then the rest of the phone number. For example, `"+972555555555"`.
             *
             * This field is required if the reservation's `status` is anything other than `WALK_IN`.
             */
            phone?: string;
        };
        type Results = {
            results?: Record<string, Reservations.NestedResultValue>;
        };
        type ScalarAggregation = {
            /**
             * Supported values:
             * - `'AVG'`
             * - `'COUNT_DISTINCT'`
             * - `'MAX'`
             * - `'MIN'`
             * - `'SUM'`
             * - `'UNKNOWN_SCALAR_TYPE'`
             */
            type?: string;
        };
        type ScalarResult = {
            /**
             * Supported values:
             * - `'AVG'`
             * - `'COUNT_DISTINCT'`
             * - `'MAX'`
             * - `'MIN'`
             * - `'SUM'`
             * - `'UNKNOWN_SCALAR_TYPE'`
             */
            type?: string;
            value?: number;
        };
        type SearchDetails = {
            /**
             * search term or expression
             */
            expression?: string;
            /**
             * fields to search in. if empty - server will search in own default fields
             */
            fields?: Array<string>;
            /**
             * flag if should use auto fuzzy search (allowing typos by a managed proximity algorithm)
             */
            fuzzy?: boolean;
            /**
             * boolean search mode
             */
            mode?: string;
        };
        type SearchReservationsRequest = {
            /**
             * Search query.
             */
            search: Reservations.CursorSearch;
        };
        type SearchReservationsResponse = {
            /**
             * Aggregation data.
             */
            aggregationData?: Reservations.AggregationData;
            /**
             * Cursor paging metadata.
             */
            pagingMetadata?: Reservations.CursorPagingMetadata;
            /**
             * List of Reservations.
             */
            reservations?: Array<Reservations.Reservation>;
        };
        type Sorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             *
             * Use `ASC` for ascending order or `DESC` for descending order. Defaults to `ASC`.
             */
            order?: string;
        };
        type TableCombinationConflict = {
            /**
             * Conflict type.
             */
            type?: string;
        };
        type TableWithReservationConflicts = {
            /**
             * List of reservation ids.
             */
            reservationIds?: Array<string>;
            /**
             * Table id.
             */
            tableId?: string;
        };
        type UpdateReservation = {
            /**
             * Date and time the reservation was created.
             */
            _createdDate?: Date;
            /**
             * Reservation ID.
             */
            _id?: string;
            /**
             * Date and time the reservation was changed.
             */
            _updatedDate?: Date;
            /**
             * The reason the reservation was declined.
             */
            declineReason?: string;
            /**
             * Reservation details.
             */
            details?: Reservations.Details;
            /**
             * Information about the person making the reservation.
             *
             * This field is required if the reservation's `status` is anything other than `WALK_IN`.
             */
            reservedBy?: Reservations.ReservedBy;
            /**
             * Information about the person the reservation is being made for.
             *
             * A reservation created with any `source` other than `WALK_IN` requires the `reservation.reservee.phone` and `reservation.reservee.firstName` fields.
             * Attempting to create a reservation without these fields results in an error.
             */
            reservee?: Reservations.Reservee;
            /**
             * Revision number, which increments by 1 each time the reservation is updated.
             * To prevent conflicting changes, the current revision must be passed when updating the reservation.
             *
             * Ignored when creating a reservation.
             */
            revision?: string;
            /**
             * Reservation source.
             *
             * This indicates how the reservation was made.
             * * `ONLINE` indicates that the customer made the reservation through a website or app.
             * * `OFFLINE` indicates that the reservation was made by a restaurant employee, for example when a customer calls to make a reservation.
             * * `WALK-IN` indicates that the customer did not make a reservation beforehand, and the reservation was entered into the system by a restaurant employee when the customer arrived at the restaurant.
             */
            source?: string;
            /**
             * Status of the reservation.
             *
             * See the article for this API titled "The Reservation Lifecycle" in the menu on the left for more details on each of the statuses, and an explanation of the reservation lifecycle.
             */
            status?: string;
            /**
             * Team message.
             *
             * A message for the restaurant staff containing any additional information regarding the reservation, such as special requirements for the guests.
             */
            teamMessage?: string;
        };
        type UpdateReservationOptions = {
            /**
             * Ignored reservation location conflicts of the types included in the array. This ensures that the reservation is updated even if the given conflicts would normally prevent it.
             *
             * Possible values:
             * * `"PARTY_PACING"`: The restaurant cannot accommodate a party of the given size according to party pacing settings.
             * * `"SEAT_PACING"`: The required number of seats are unavailable according to seat pacing settings.
             */
            ignoreReservationLocationConflicts?: Array<string>;
            /**
             * Ignore table combination conflicts of the types included in the array. This ensures that the reservation is updated even if the given conflicts would normally prevent it.
             *
             * Possible values:
             * * `"RESERVED"`: One or more of the chosen tables are already reserved.
             * * `"TOO_BIG"`: The party is too big for the selected table.
             * * `"TOO_SMALL"`: The party is too small for the selected table.
             * * `"OFFLINE_ONLY"`: The restaurant does not allow online reservations.
             */
            ignoreTableCombinationConflicts?: Array<string>;
        };
        type UpdateReservationRequest = {
            /**
             * Ignored reservation location conflicts of the types included in the array. This ensures that the reservation is updated even if the given conflicts would normally prevent it.
             *
             * Possible values:
             * * `"PARTY_PACING"`: The restaurant cannot accommodate a party of the given size according to party pacing settings.
             * * `"SEAT_PACING"`: The required number of seats are unavailable according to seat pacing settings.
             */
            ignoreReservationLocationConflicts?: Array<string>;
            /**
             * Ignore table combination conflicts of the types included in the array. This ensures that the reservation is updated even if the given conflicts would normally prevent it.
             *
             * Possible values:
             * * `"RESERVED"`: One or more of the chosen tables are already reserved.
             * * `"TOO_BIG"`: The party is too big for the selected table.
             * * `"TOO_SMALL"`: The party is too small for the selected table.
             * * `"OFFLINE_ONLY"`: The restaurant does not allow online reservations.
             */
            ignoreTableCombinationConflicts?: Array<string>;
            /**
             * Reservation information to update.
             */
            reservation: Reservations.Reservation;
        };
        type UpdateReservationResponse = {
            /**
             * Reservation.
             */
            reservation?: Reservations.Reservation;
        };
        type ValueAggregation = {
            /**
             * options for including missing values
             */
            includeOptions?: Reservations.IncludeMissingValuesOptions;
            /**
             * How many aggregations would you like to return? Can be between 1 and 250. 10 is the default.
             */
            limit?: number;
            /**
             * should missing values be included or excluded from the aggregation results. Default is EXCLUDE
             */
            missingValues?: string;
            /**
             * Supported values:
             * - `'ASC'`
             * - `'DESC'`
             */
            sortDirection?: string;
            /**
             * Supported values:
             * - `'COUNT'`
             * - `'VALUE'`
             */
            sortType?: string;
        };
        type ValueAggregationOptionsOneOf = {
            /**
             * options for including missing values
             */
            includeOptions?: Reservations.IncludeMissingValuesOptions;
        };
        type ValueAggregationResult = {
            count?: number;
            value?: string;
        };
        type ValueResult = {
            count?: number;
            value?: string;
        };
        type ValueResults = {
            results?: Array<Reservations.ValueAggregationResult>;
        };
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#)
         */
        interface ReservationsQueryBuilder {
            /**
             * Adds a sort to a query, sorting by the specified properties in ascending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#ascending)
             */
            ascending(propertyNames: Array<string>): Reservations.ReservationsQueryBuilder;
            /**
             * Adds a sort to a query, sorting by the specified properties in descending order.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#descending)
             */
            descending(propertyNames: Array<string>): Reservations.ReservationsQueryBuilder;
            /**
             * Refines a query to match items where the specified property equals the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#eq)
             */
            eq(propertyName: string, value: any): Reservations.ReservationsQueryBuilder;
            /**
             * Returns the query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#find)
             */
            find(): Promise<Reservations.ReservationsQueryResult>;
            /**
             * Refines a query to match items where the specified property is greater than or equal to the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#ge)
             */
            ge(propertyName: string, value: any): Reservations.ReservationsQueryBuilder;
            /**
             * Refines a query to match items where the specified property is greater than the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#gt)
             */
            gt(propertyName: string, value: any): Reservations.ReservationsQueryBuilder;
            /**
             * Refines a query to only match items where the specified property conatins any of the values in the provided array of values.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#in)
             */
            in(propertyName: string, value: any): Reservations.ReservationsQueryBuilder;
            /**
             * Refines a query to match items where the specified property is less than or equal to the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#le)
             */
            le(propertyName: string, value: any): Reservations.ReservationsQueryBuilder;
            /**
             * Limits the number of items the query returns.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#limit)
             */
            limit(limit: number): Reservations.ReservationsQueryBuilder;
            /**
             * Refines a query to match items where the specified property is less than the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#lt)
             */
            lt(propertyName: string, value: any): Reservations.ReservationsQueryBuilder;
            /**
             * Refines a query to match items where the specified property doesn't equal the specified value.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#ne)
             */
            ne(propertyName: string, value: any): Reservations.ReservationsQueryBuilder;
            /**
             * Refines a query that skips to a specific record.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#skipTo)
             */
            skipTo(cursor: string): Reservations.ReservationsQueryBuilder;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryResult.html#)
         */
        interface ReservationsQueryResult {
            /**
             * Returns the query cursors.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryResult.html#cursors)
             */
            cursors: Reservations.Cursors;
            /**
             * Returns an array of `reservations` items that match the query.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryResult.html#items)
             */
            items: Array<Reservations.Reservation>;
            /**
             * Returns the number of items in the current page of results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryResult.html#length)
             */
            length: number;
            /**
             * Returns the requested page size.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryResult.html#pageSize)
             */
            pageSize: number;
            /**
             * Returns the `ReservationsQueryBuilder` object used to get the current results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryResult.html#query)
             */
            query: Reservations.ReservationsQueryBuilder;
            /**
             * Indicates whether the query has more results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryResult.html#hasNext)
             */
            hasNext(): boolean;
            /**
             * Indicates whether the query has previous results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryResult.html#hasPrev)
             */
            hasPrev(): boolean;
            /**
             * Retrieves the next page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryResult.html#next)
             */
            next(): Promise<Reservations.ReservationsQueryResult>;
            /**
             * Retrieves the previous page of query results.
             * 	[Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryResult.html#prev)
             */
            prev(): Promise<Reservations.ReservationsQueryResult>;
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryBuilder.html#)
         */
        namespace ReservationsQueryBuilder {
        }
        /**
         * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.Reservations.ReservationsQueryResult.html#)
         */
        namespace ReservationsQueryResult {
        }
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-table-reservations-v2.TimeSlots.html#)
     */
    namespace TimeSlots {
        type CheckReservationDetailsOptions = {
            /**
             * Date.
             */
            date: Date;
            /**
             * Duration.
             */
            duration: number;
            /**
             * Reservation, that should be ignored during the check.
             */
            excludeReservationId?: string;
            /**
             * Party size.
             */
            partySize: number;
            /**
             * Requested table combination.
             */
            tableIds?: Array<string>;
        };
        type CheckReservationDetailsRequest = {
            /**
             * Date.
             */
            date: Date;
            /**
             * Duration.
             */
            duration: number;
            /**
             * Reservation, that should be ignored during the check.
             */
            excludeReservationId?: string;
            /**
             * Party size.
             */
            partySize: number;
            /**
             * Reservation location ID.
             */
            reservationLocationId: string;
            /**
             * Requested table combination.
             */
            tableIds?: Array<string>;
        };
        type CheckReservationDetailsResponse = {
            /**
             * Requested table combination state.
             */
            requestedTableCombination?: TimeSlots.TableCombination;
            /**
             * Reservation location conflicts.
             */
            reservationLocationConflicts?: Array<TimeSlots.ReservationLocationConflict>;
            /**
             * Table combinations states.
             */
            tableCombinations?: Array<TimeSlots.TableCombination>;
            /**
             * List of reserved tables with corresponding reservation ids.
             */
            tableReservedConflicts?: Array<TimeSlots.TableReservedConflict>;
            /**
             * Tables states.
             */
            tables?: Array<TimeSlots.Table>;
        };
        type GetTimeSlotsOptions = {
            /**
             * Duration in minutes of the time slot.
             *
             * Min: `5`
             */
            duration?: number;
            /**
             * The number of time slots to retrieve after the given `date`.
             */
            slotsAfter?: number;
            /**
             * The number of time slots to retrieve before the given `date`.
             */
            slotsBefore?: number;
        };
        type GetTimeSlotsRequest = {
            /**
             * Date and time for which to retrieve a time slot.
             */
            date: Date;
            /**
             * Duration in minutes of the time slot.
             *
             * Min: `5`
             */
            duration?: number;
            /**
             * Size of the party that needs to be seated during this time slot.
             *
             * Min: `1`
             */
            partySize: number;
            /**
             * ID of the reservation location for which to retrieve time slots.
             */
            reservationLocationId: string;
            /**
             * The number of time slots to retrieve after the given `date`.
             */
            slotsAfter?: number;
            /**
             * The number of time slots to retrieve before the given `date`.
             */
            slotsBefore?: number;
        };
        type GetTimeSlotsResponse = {
            /**
             * A list of time slots and their availability according to the given party size.
             */
            timeSlots?: Array<TimeSlots.TimeSlot>;
        };
        type ReservationLocationConflict = {
            /**
             * Reservation location conflict type.
             */
            type?: string;
        };
        type Table = {
            _id?: string;
            /**
             * Table conflicts.
             */
            tableConflicts?: Array<TimeSlots.TableConflict>;
        };
        type TableCombination = {
            tableCombinationConflicts?: Array<TimeSlots.TableCombinationConflict>;
            tableIds?: Array<string>;
        };
        type TableCombinationConflict = {
            /**
             * Conflict type.
             */
            type?: string;
        };
        type TableConflict = {
            /**
             * Conflict type.
             */
            type?: string;
        };
        type TableReservedConflict = {
            /**
             * List of reservation ids.
             */
            reservationIds?: Array<string>;
            /**
             * Table id.
             */
            tableId?: string;
        };
        type TimeSlot = {
            /**
             * Duration in minutes of this time slot.
             */
            duration?: number;
            /**
             * Whether manual approval is required to make a reservation in this time slot.
             */
            manualApproval?: boolean;
            /**
             * Start date and time of this time slot.
             */
            startDate?: Date;
            /**
             * Availability status of this time slot.
             *
             * * `AVAILABLE`: The restaurant can accommodate a party of the given size in this time slot.
             * * `UNAVAILABLE`: The restaurant can't accommodate a party of the given size in this time slot.
             * * `NON_WORKING_HOURS`: The restaurant is not open during this time slot.
             */
            status?: string;
        };
        type TimeSlotTableCombination = {
            /**
             * Table IDs of the tables in the combination.
             */
            tableIds?: Array<string>;
        };
    }
}
