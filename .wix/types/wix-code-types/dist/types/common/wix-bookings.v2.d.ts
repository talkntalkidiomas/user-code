declare module "wix-bookings.v2" {
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    /**
     * The `TimeSlot` object represents the availability information
     * for an `Appointment` service's specific slot, including:
     *
     * 1. Whether the slot is bookable for the given service?
     *
     * 2. In what location the service is available for this slot?
     *
     * 3. Which available resources can provide the service for this slot?
     *
     * 4. Does booking the slot for the service violates any of the service booking policies?
     *
     * 5. What is the total capacity and remaining capacity of the service at the time of the calculation of the `TimeSlot`?
     *
     * > __Note:__
     * > When the `TimeSlot` has a non empty `NestedTimeSlots`, it represents the availability information
     * > for a given list of `Appointment` services within a specific time slot.
     */
    interface TimeSlot$3 {
        /**
         * Service ID.
         *
         * > Not returned from `MultiServiceAvailabilityTimeSlots` API calls.
         * > Instead, each nested time slot has its own serviceId.
         */
        serviceId?: string | null;
        /**
         * Local start date of the time slot in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate?: string | null;
        /**
         * Local end date of the time slot in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate?: string | null;
        /**
         * Whether the slot is bookable according to the service's booking policies.
         *
         * If booking this time slot does not violates any of the service's booking policies,
         * the returned value is `true`. Otherwise, returns `false`.
         */
        bookable?: boolean | null;
        /** The geographic location of the slot. */
        location?: Location$b;
        /** Total number of spots for the slot. */
        totalCapacity?: number | null;
        /**
         * Remaining number of spots for the slot.
         * For example, for an appointment service with total capacity of 1 spot and one booked spot, the remaining capacity will be 0.
         */
        remainingCapacity?: number | null;
        /**
         * Indicators for booking policy violations for the slot.
         *
         * Each nested field is checked on its own. i.e. if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we will return also slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$5;
        /**
         * List of `AvailableResources` for the time slot.
         * Each `AvailableResources` contains information about available resources of the same type.
         *
         * > Not returned from `MultiServiceAvailabilityTimeSlots` API calls.
         * > Instead, each nested time slot has its own available resources.
         */
        availableResources?: AvailableResources$4[];
        /**
         * > Nested time slots.
         * > Returned only from `MultiServiceAvailabilityTimeSlots` API calls.
         */
        nestedTimeSlots?: NestedTimeSlot$4[];
    }
    interface Location$b {
        /** Business Location ID. Present only if the location is a business location. */
        _id?: string | null;
        /** The location name. */
        name?: string | null;
        /** A string representation for the full address of the location. */
        formattedAddress?: string | null;
        /**
         * The type of location:
         * - `CUSTOM`: The location is specific to this service, and is not derived from the business location.
         * - `BUSINESS`: A business location, either the default business address, or locations defined for the business by the Business Info.
         * - `CUSTOMER`: The location is determined by the customer and is not set up beforehand.
         */
        locationType?: LocationType$b;
    }
    enum LocationType$b {
        UNKNOWN_LOCATION_TYPE = "UNKNOWN_LOCATION_TYPE",
        /** A business location, either the default business address, or locations defined for the business by the Business Info. */
        BUSINESS = "BUSINESS",
        /** The location is unique to this service and isn't defined as one of the business locations. */
        CUSTOM = "CUSTOM",
        /** The location can be determined by the customer and is not set up beforehand. */
        CUSTOMER = "CUSTOMER"
    }
    /** relevant for event based slots, and not for availability based slots */
    interface EventInfo$3 {
    }
    interface WaitingList$5 {
        /** Total number of spots in this wait list. */
        totalCapacity?: number | null;
        /**
         * Number of remaining spots for this wait list.
         * For example, a Yoga event with 10 waitList spots and 3 registered
         * on the waitList has 10 `total_capacity` and 7 `remaining_capacity`.
         */
        remainingCapacity?: number | null;
    }
    interface BookingPolicyViolations$5 {
        /** Bookings policy violation. Too early to book this slot. */
        tooEarlyToBook?: boolean | null;
        /** Bookings policy violation. Too late to book this slot. */
        tooLateToBook?: boolean | null;
        /** Bookings policy violation. Online booking is disabled for the `TimeSlot` service. */
        bookOnlineDisabled?: boolean | null;
    }
    interface AvailableResources$4 {
        /** Resource type ID. */
        resourceTypeId?: string | null;
        /**
         * Available resources for the time slot.
         *
         * + When returned from `ListAvailabilityTimeSlots`, empty by default.
         * + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * contains __up__ to 10 available resources out of those provided.
         *
         * + When returned from `GetAvailabilityTimeSlots`, contains all available resources by default.
         * + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * contains all of the available resources out of those provided.
         *
         *
         * > + When returned from `ListMultiServiceAvailabilityTimeSlots`, empty by default.
         * > + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * > contains __up__ to 10 available resources out of those provided.
         *
         * > + When returned from `GetMultiServiceAvailabilityTimeSlots`, contains all available resources by default.
         * > + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * > contains all of the available resources out of those provided.
         */
        resources?: Resource$6[];
        /**
         * Whether there are more available resources for the slot that are not listed in `resources` due to size limitations.
         * @readonly
         */
        hasMoreAvailableResources?: boolean | null;
    }
    interface Resource$6 {
        /** Resource ID. */
        _id?: string;
        /** Resource name. */
        name?: string | null;
    }
    interface NestedTimeSlot$4 {
        /** Service ID of the nested time slot. */
        serviceId?: string;
        /**
         * Local start date of the nested time slot in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate?: string;
        /**
         * Local end date of the nested time slot in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate?: string;
        /**
         * List of `AvailableResources` for the nested time slot.
         * Each `AvailableResources` contains information about available resources of the same type.
         */
        availableResources?: AvailableResources$4[];
    }
    interface CalculateEventBasedAvailabilityRequest$3 {
        serviceIds: string[];
        from: string;
        to: string;
        timeZone: string;
        /**
         * TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006
         * TODO: Locks are not taken into account. // Class is not supported yet. (relevant only for classes with waiting list)
         * Aliza's suggestion to consider locks in bookable
         */
        bookable?: boolean | null;
        /** support filtering by location type, or by locationId. Other fields like `name` are ignored */
        location?: Location$b[];
        resourceIds?: string[];
        /** if not empty, return slots with openSpots >= X */
        openSpots?: number | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$5;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        slotsPerDay?: number | null;
        cursorPaging?: CursorPaging$b;
    }
    interface CursorPaging$b {
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
    interface CalculateEventBasedAvailabilityResponse$3 {
        slots?: TimeSlot$3[];
        cursorPagingMetadata?: CursorPagingMetadata$8;
    }
    interface CursorPagingMetadata$8 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Offset that was requested. */
        cursors?: Cursors$b;
        /**
         * Indicates if there are more results after the current page.
         * If `true`, another page of results can be retrieved.
         * If `false`, this is the last page.
         */
        hasNext?: boolean | null;
    }
    interface Cursors$b {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface ListEventTimeSlotsRequest$3 {
        /** The services for which the time slots are being returned. */
        serviceIds: string[] | null;
        /**
         * Local start date for which event time slots are returned, in ISO-8601 format.
         * E.g, "2024-01-30T13:30:00".
         * Required, unless `cursorPaging` is provided.
         */
        fromLocalDate: string | null;
        /**
         * Local end date for which event time slots are returned, in ISO-8601 format.
         * E.g, "2024-01-30T13:30:00".
         * Required, unless `cursorPaging` is provided.
         */
        toLocalDate: string | null;
        /**
         * The time zone, in IANA time zone format.
         * Default is the Wix Business time zone.
         */
        timeZone: string | null;
        /** TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006 */
        bookable?: boolean | null;
        /** support filtering by location type, or by locationId. Other fields like `name` are ignored */
        location?: Location$b[];
        /** TODO: maxsize && do we need include_resource_type_id here? also is the behavior is the same as availabilityTimeSlots, we won't return resources by default? */
        resourceIds?: string[] | null;
        /** if not empty, return slots with remainingCapacity >= X */
        remainingCapacity?: number | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$5;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        timeSlotsPerDay?: number | null;
        cursorPaging?: CursorPaging$b;
    }
    interface ListEventTimeSlotsResponse$3 {
        /** TODO: maxsize */
        timeSlots?: TimeSlot$3[];
        /** The time zone, in IANA time zone format. */
        timeZone?: string | null;
        cursorPagingMetadata?: CursorPagingMetadata$8;
    }
    interface ListMultiServiceAvailabilityTimeSlotsRequest$3 {
        /**
         * Services for which the multiService time slots are being returned for.
         * Each service contains its own resources filters within.
         *
         * MinSize: `2`.
         * MaxSize: `8`.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        services?: Service$5[];
        /**
         * Lower boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        fromLocalDate?: string | null;
        /**
         * Upper boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        toLocalDate?: string | null;
        /**
         * Time zone, in IANA time zone format.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        timeZone?: string | null;
        /**
         * Location for which the multiService TimeSlots are being returned for.
         *
         * You can specify location or location type for which the TimeSlots will be returned for.
         * If locationType is `BUSINESS`, you __must__ provide a locationId.
         *
         * <blockquote class="warning">
         * <p><strong>warning:</strong><br/>
         * Supports filtering by location type, or by location ID. </br>
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        location?: Location$b;
        /**
         * Whether the `TimeSlot` is bookable according to all of the services booking policies.
         *
         * If booking any of the `TimeSlot`.`NestedTimeSlot`s violates any of its services bookings policies,
         * returns as `false`. Otherwise, returns as `true`.
         *
         * > __Note:__
         * > A `TimeSlot` with a `NestedTimeSlot` that doesn't meet its service's bookings policies will be returned with `bookable` = false,
         * > while a `TimeSlot` with no available resources will not be returned at all.
         */
        bookable?: boolean | null;
        /**
         * Indicators for service's booking policy violations for booking the `TimeSlot`.
         *
         * A bookable time slot must not violate any policy,
         * therefor, this filter is only relevant when `bookable` filter is false.
         *
         * Each nested field is checked on all `NestedTimeSlot`s. For example, if only one of the `NestedTimeSlot`'s
         * has a service with `tooEarlyToBook` same as in the request, we return the `TimeSlot` regardless of whether
         * the other `NestedTimeSlots` has the same `tooEarlyToBook` as in request.
         *
         * Each nested field is checked on its own. For example, if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we return slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$5;
        /**
         * Maximum number of slots to load for each day. For example, if `timeSlotsPerDay` is set to `3`,
         * we return at most 3 available TimeSlots for each day within the date range specified in request.
         *
         * By default,
         * if `bookable` filter was not specified,
         * and a day has both `bookable` and `un-bookable` slots, `bookable` slots are returned first.
         *
         * If the number of `bookable` slots is less than the requested `timeSlotsPerDay`,
         * `un-bookable` slots will be returned according to the specified filters.
         */
        timeSlotsPerDay?: number | null;
        /**
         * CursorPaging.
         *
         * Enables you to fetch TimeSlots in smaller, more manageable chunks
         * by setting a limit on the number of results returned in response.
         * This is useful in order to enhance efficiency of data retrieval and reduce load on both the client and server.
         *
         * If there are more results than the specified limit, the response will contain a `cursorPagingMetaData`
         * with a cursor pointing to next page of results. In order to fetch the next page of results, you should pass the
         * returned cursor to the next call as `cursorPaging`.`cursor`.
         *
         * For the first call, you should only specify the `limit` for the results page.
         * For each following call, you should only pass the previous returned cursor as `cursorPaging`.`cursor`
         * the `cursorPaging`.`limit`. You may pass a different `limit`.
         * No need to specify any additional parameters.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * If you only provide a <code class="grey-background">cursorPaging</code>. <code class="grey-background">cursor</code>,
         * the response will contain the default size of results which is `1000`.
         * </p>
         * </blockquote>
         */
        cursorPaging?: CommonCursorPaging$3;
    }
    interface Service$5 {
        /** Service ID. */
        serviceId?: string;
        /** Resources to include in response. */
        resourceIds?: string[];
        /**
         * The resource type ID's to include in returned time slots.
         * This is in addition to the specifically requested resources.
         *
         * <blockquote class="important">
         * Currently supported only for Staff Member resource type.
         * Staff Member type ID: 1cd44cf8-756f-41c3-bd90-3e2ffcaf1155
         * </blockquote>
         */
        includeResourceTypeIds?: string[];
    }
    interface CommonCursorPaging$3 {
        /**
         * Number of results to load.
         *
         * Default: `1000`.
         * Max: `1000`.
         */
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
    interface ListMultiServiceAvailabilityTimeSlotsResponse$3 {
        /** Time slots. */
        timeSlots?: TimeSlot$3[];
        /**
         * Time zone, in IANA time zone format.
         * Shared for all TimeSlots in response.
         */
        timeZone?: string | null;
        /**
         * CursorPagingMetaData.
         * Contains information about the next page of results.
         *
         * By default,
         * if there are more than 1000 results,
         * the response will contain a `cursorPagingMetaData` with a cursor to the next page of results.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * <code class="grey-background">count</code> is not supported.</p>
         * </blockquote>
         */
        cursorPagingMetadata?: CommonCursorPagingMetadata$3;
    }
    interface CommonCursorPagingMetadata$3 {
        /** Offset that was requested. */
        cursors?: CommonCursors$3;
        /**
         * Indicates if there are more results after the current page.
         * If `true`, another page of results can be retrieved.
         * If `false`, this is the last page.
         */
        hasNext?: boolean | null;
    }
    interface CommonCursors$3 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface GetMultiServiceAvailabilityTimeSlotRequest$3 {
        /**
         * Services for which the multiService TimeSlots are being returned for.
         * Each service contains its own resources filters within.
         *
         * MinSize: 2.
         * MaxSize: 8.
         */
        services: Service$5[];
        /**
         * Local start date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate: string;
        /**
         * Local end date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate: string;
        /** Time zone, in IANA time zone format. */
        timeZone: string | null;
        /**
         * The location of the time slot.
         *
         * You must provide a specific `locationType`.
         * If locationType is `BUSINESS`, you __must__ also provide a `locationId`.
         *
         * <blockquote class="warning">
         * <p>Supports filtering by location type, or by location ID.
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        location: Location$b;
    }
    interface GetMultiServiceAvailabilityTimeSlotResponse$3 {
        /** Time slot. */
        timeSlot?: TimeSlot$3;
        /** The time zone, in IANA time zone format. */
        timeZone?: string | null;
    }
    interface ListAvailabilityTimeSlotsRequest$3 {
        /**
         * Service ID for which the time slots are being returned for.
         * Currently supported only for services of type `APPOINTMENT`.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        serviceId?: string | null;
        /**
         * Lower boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        fromLocalDate?: string | null;
        /**
         * Upper boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        toLocalDate?: string | null;
        /**
         * Time zone, in IANA time zone format.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        timeZone?: string | null;
        /**
         * Locations to include in response.
         *
         * By default,
         * if no locations are provided,
         * the response contains TimeSlots for all locations where the service is available.
         *
         * You can specify locations or location types for which the time slots will be returned for.
         * If locationType is `BUSINESS`, you __must__ provide a locationId.
         *
         * <blockquote class="warning">
         * <p><strong>warning:</strong><br/>
         * Supports filtering by location type, or by location ID. </br>
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        locations?: Location$b[];
        /**
         * Resources to include in response.
         *
         * If specified,
         * the returned TimeSlots will contain __up__ to 10 available resources out of the provided list.
         * Otherwise, the returned TimeSlots returns with an empty `AvailableResources`.
         */
        resourceIds?: string[];
        /**
         * Resource type ID's to include in response, this is in addition to the requested `resourceIds`.
         *
         * If specified in request, the returned TimeSlots will contain __up__ to 10 `AvailableResources` with `ResourceTypeId`
         * out of those specified, each contains __up__ to 10 available resources of this type.
         */
        includeResourceTypeIds?: string[];
        /**
         * Whether the `TimeSlot` is bookable according to the service's booking policies.
         *
         * If booking this `TimeSlot` does not violates any of the service's booking policies,
         * returns as `true`. Otherwise, returns as `false`.
         *
         * > __Note:__
         * > A time slot that doesn't meet the service's bookings policies will be returned with `bookable` = false,
         * > while a time slot with no available resources will not be returned at all.
         */
        bookable?: boolean | null;
        /**
         * Indicators for service's booking policy violations for booking the `TimeSlot`.
         *
         * A bookable time slot must not violate any policy,
         * therefor, this filter is only relevant when `bookable` filter is false.
         *
         * Each nested field is checked on its own. i.e. if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we return slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$5;
        /**
         * Maximum number of slots to load for each day. For example, if `timeSlotsPerDay` is set to `3`,
         * we return at most 3 available TimeSlots for each day within the date range specified in request.
         *
         * By default,
         * if `bookable` filter was not specified,
         * and a day has both `bookable` and `un-bookable` slots, `bookable` slots are returned first.
         *
         * If the number of `bookable` slots is less than the requested `timeSlotsPerDay`,
         * `un-bookable` slots will be returned according to the specified filters.
         */
        timeSlotsPerDay?: number | null;
        /**
         * CursorPaging.
         *
         * Enables you to fetch results in smaller, more manageable chunks
         * by setting a limit on the number of results returned in response.
         * This is useful in order to enhance efficiency of data retrieval and reduce load on both the client and server.
         *
         * If there are more results than the specified limit, the response will contain a `cursorPagingMetaData`
         * with a cursor pointing to next page of results. In order to fetch the next page of results, you should pass the
         * returned cursor to the next call as `cursorPaging`.`cursor`.
         *
         * For the first call, you should only specify the `limit` for the results page.
         * For each following call, you should only pass `cursorPaging`.`cursor` with the returned cursor from previous call, and
         * a `cursorPaging`.`limit`.
         * No need to specify any additional parameters.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * If you only provide a <code class="grey-background">cursorPaging</code>. <code class="grey-background">cursor</code>,
         * the response will contain the default size of results which is `1000`.
         * </p>
         * </blockquote>
         */
        cursorPaging?: CommonCursorPaging$3;
    }
    interface ListAvailabilityTimeSlotsResponse$3 {
        /** Time slots. */
        timeSlots?: TimeSlot$3[];
        /**
         * Time zone, in IANA time zone format.
         * Shared for all TimeSlots in response.
         */
        timeZone?: string | null;
        /**
         * CursorPagingMetaData.
         * Contains information about the next page of results.
         *
         * By default,
         * if there are more than 1000 results,
         * the response will contain a `cursorPagingMetaData` with a cursor to the next page of results.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * <code class="grey-background">count</code> is not supported.</p>
         * </blockquote>
         */
        cursorPagingMetadata?: CommonCursorPagingMetadata$3;
    }
    interface GetAvailabilityTimeSlotRequest$3 {
        /**
         * Service ID of the time slot.
         * Currently supported only for services of type `APPOINTMENT`.
         */
        serviceId: string;
        /**
         * Local start date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate: string;
        /**
         * Local end date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate: string;
        /** Time zone, in IANA time zone format. */
        timeZone: string | null;
        /**
         * The location of the time slot.
         *
         * You must provide a specific `locationType`.
         * If locationType is `BUSINESS`, you __must__ also provide a `locationId`.
         *
         * <blockquote class="warning">
         * <p>Supports filtering by location type, or by location ID.
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        location: Location$b;
        /**
         * Resources to include in response.
         *
         * If specified,
         * the returned `TimeSlot` contains only the available resources out of provided list.
         * Otherwise, the returned `TimeSlot` returned with all possible `AvailableResources`.
         */
        resourceIds?: string[];
        /**
         * Resource type IDs to include in response, this is in addition to the requested `resourceIds`.
         *
         * If specified in request, the returned `TimeSlot` contains only the `AvailableResources` with `ResourceTypeId`
         * out of those specified, each contains all the available resources of this type.
         */
        includeResourceTypeIds?: string[];
    }
    interface GetAvailabilityTimeSlotResponse$3 {
        /** Time slot. */
        timeSlot?: TimeSlot$3;
        /** Time zone, in IANA time zone format. */
        timeZone?: string | null;
    }
    interface CalculateEventBasedAvailabilityOptions$1 {
        from: string;
        to: string;
        timeZone: string;
        /**
         * TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006
         * TODO: Locks are not taken into account. // Class is not supported yet. (relevant only for classes with waiting list)
         * Aliza's suggestion to consider locks in bookable
         */
        bookable?: boolean | null;
        /** support filtering by location type, or by locationId. Other fields like `name` are ignored */
        location?: Location$b[];
        resourceIds?: string[];
        /** if not empty, return slots with openSpots >= X */
        openSpots?: number | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$5;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        slotsPerDay?: number | null;
        cursorPaging?: CursorPaging$b;
    }
    interface ListEventTimeSlotsOptions$1 {
        /**
         * Local start date for which event time slots are returned, in ISO-8601 format.
         * E.g, "2024-01-30T13:30:00".
         * Required, unless `cursorPaging` is provided.
         */
        fromLocalDate: string | null;
        /**
         * Local end date for which event time slots are returned, in ISO-8601 format.
         * E.g, "2024-01-30T13:30:00".
         * Required, unless `cursorPaging` is provided.
         */
        toLocalDate: string | null;
        /**
         * The time zone, in IANA time zone format.
         * Default is the Wix Business time zone.
         */
        timeZone: string | null;
        /** TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006 */
        bookable?: boolean | null;
        /** support filtering by location type, or by locationId. Other fields like `name` are ignored */
        location?: Location$b[];
        /** TODO: maxsize && do we need include_resource_type_id here? also is the behavior is the same as availabilityTimeSlots, we won't return resources by default? */
        resourceIds?: string[] | null;
        /** if not empty, return slots with remainingCapacity >= X */
        remainingCapacity?: number | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$5;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        timeSlotsPerDay?: number | null;
        cursorPaging?: CursorPaging$b;
    }
    /**
     * Retrieves a list of multiService `TimeSlot`s that match the provided filters.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong><br/>
     * Currently supported only for services of type <code class="grey-background">APPOINTMENT</code>.</p>
     * </blockquote>
     *
     * The request body __must__ include either:
     * + All of the following filters:  `service`.`serviceId`, `fromLocalDate`, `toLocalDate`, `location`, and `timeZone`. You may add additional filters as you wish.
     * + A `cursorPaging` with a valid `cursor` from previous response.
     *
     *
     * Each [TimeSlot](https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/availability-time-slots/time-slot-object) in response
     * represents the availability of the given sequence of services in a specific order, location, and within a given range of time.
     *
     * Each `TimeSlot`.`NestedTimeSlot` represents a single service from the given list. The order of the `NestedTimeSlots` is the same as the order
     * of the given services in request.
     * The first `NestedTimeSlot` has `localStartDate` within the given `fromLocalDate` and `toLocalDate` exclusive,
     * and each following `NestedTimeSlot` has a `localStartDate` that equals to the previous `NestedTimeSlot`'s `localEndDate`.
     *
     * By default,
     * the response contains at most 1000 results.
     * If there are more than 1000 results, we return a `cursorPagingMetadata` with
     * a cursor for the next page of results, regardless of whether a `cursorPaging`
     * was provided in request.
     *
     * > __Notes:__
     * >  + All nested time slots share the same location.
     * >  + You can pass up to 8 services in request.
     *
     * ### AvailableResources in response:
     * The `TimeSlot`.`NestedTimeSlot`'s `AvailableResources` contains information about the resources that are available to provide the service
     * within the `NestedTimeSlot` range of time. Each `AvailableResources` contains information about available resources of the same type.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong><br/>
     * By default,
     * if you don't specify <code class="grey-background">service</code>.<code class="grey-background">includeResourceTypeIds</code>
     * or  <code class="grey-background">service</code>.<code class="grey-background">resourceIds</code> filters in request,
     * we return TimeSlots with <code class="grey-background">NestedTimeSlot</code>s with an empty <code class="grey-background">AvailableResources</code>.
     * <br/><strong>Note:</strong><br/> Not specifying resources filters can be handy in case you want to avoid large response in flows that only
     * interested of whether the time slots are available. [Finding the next available slot within the next 3 months](https://bo.wix.com/wix-docs/rest/all-apis/service-availability/multi-service-availability-time-slots/sample-flows?localViewerId=inbari#all-apis_service-availability_multi-service-availability-time-slots_sample-flows_find-the-first-date-within-the-next-3-months-that-all-selected-services-are-available-for)
     * is an example for such flow.
     * </p>
     * </blockquote>
     *
     *
     * If you wish to get a list of available resources for a `TimeSlot`.`NestedTimeSlot` you should either:
     * + provide `service`.`resourceIds` in request.
     * + provide `service`.`includeResourceTypeIds` in request.
     *
     * __Notes:__
     * + In both cases the returned `TimeSlot`.`NestedTimeSlot` contains  __up__ to 10 `AvailableResources` that match the provided filters. Each `AvailableResources` contains __up__ to 10 available `resources` of the same type that match the provided filters.
     * + If an `AvailableResources` has more available resources which are not listed within it, we return `AvailableResources`.`hasMoreAvailableResources` as true.
     * + If you wish to get the full available resources list for all `NestedTimeSlot` of a specific `TimeSlot`, you should call [GetMultiServiceAvailabilityTimeSlot](https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/multi-service-availability-time-slots/get-multi-service-availability-time-slot).
     *
     *
     * ### Availability VS Bookability
     * An `available` time slot is not necessarily `bookable`.
     * The `bookable` field of a `TimeSlot` indicates whether the customer can book all of the of the services within the given time slot,
     * at a specific period of time.
     * Read more about [Availability VS Bookability](https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/multi-service-availability-time-slots/introduction#all-apis_wix-service-availability_multi-service-availability-time-slots_introduction_availability-vs-bookability).
     *
     * By default,
     * + The response does not contains `unavailable` TimeSlots.For example, if there are no available resources to provide one of the services from `2024-01-30T14:30:00` to `2024-01-30T15:30:00`, we don't return TimeSlots with `NestedTimeSlot`.`localStartDate` within this range for this service.
     * + The response contains both `bookable` and `un-bookable` TimeSlots.For example, if one of the services has a booking policy which enforces booking the service up to 10 minutes before the session starts, we return TimeSlots with the violating `NestedTimeSlot`.`localStartDate`, with `bookable` as `false`. If you want to list only __bookable__ TimeSlots you should pass `bookable` as `true`.
     * + If booking one of the `NestedTimeSlot`s violates one of the corresponding service's booking policies, the `TimeSlot` returns with `bookable` as false. There is no indication which service's policy was violated.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong>
     * Because of DST, there are edge cases where certain times either do not exist or exist twice for a local time zone.
     * Read more about <a href="https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/multi-service-availability-time-slots/introduction#all-apis_wix-service-availability_multi-service-availability-time-slots_introduction_daylight-saving-time-dst-handling">DST Handling</a></p>
     * </blockquote>
     *
     * ### ListAvailabilityTimeSlots runs with the following defaults:
     * + `localStartDate` is sorted in `ASC` order.
     * + `cursorPaging`.`limit` is `1000`.
     * @public
     * @documentationMaturity preview
     */
    function listMultiServiceAvailabilityTimeSlots$1(options?: ListMultiServiceAvailabilityTimeSlotsOptions$1): Promise<ListMultiServiceAvailabilityTimeSlotsResponse$3>;
    interface ListMultiServiceAvailabilityTimeSlotsOptions$1 {
        /**
         * Services for which the multiService time slots are being returned for.
         * Each service contains its own resources filters within.
         *
         * MinSize: `2`.
         * MaxSize: `8`.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        services?: Service$5[];
        /**
         * Lower boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        fromLocalDate?: string | null;
        /**
         * Upper boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        toLocalDate?: string | null;
        /**
         * Time zone, in IANA time zone format.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        timeZone?: string | null;
        /**
         * Location for which the multiService TimeSlots are being returned for.
         *
         * You can specify location or location type for which the TimeSlots will be returned for.
         * If locationType is `BUSINESS`, you __must__ provide a locationId.
         *
         * <blockquote class="warning">
         * <p><strong>warning:</strong><br/>
         * Supports filtering by location type, or by location ID. </br>
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        location?: Location$b;
        /**
         * Whether the `TimeSlot` is bookable according to all of the services booking policies.
         *
         * If booking any of the `TimeSlot`.`NestedTimeSlot`s violates any of its services bookings policies,
         * returns as `false`. Otherwise, returns as `true`.
         *
         * > __Note:__
         * > A `TimeSlot` with a `NestedTimeSlot` that doesn't meet its service's bookings policies will be returned with `bookable` = false,
         * > while a `TimeSlot` with no available resources will not be returned at all.
         */
        bookable?: boolean | null;
        /**
         * Indicators for service's booking policy violations for booking the `TimeSlot`.
         *
         * A bookable time slot must not violate any policy,
         * therefor, this filter is only relevant when `bookable` filter is false.
         *
         * Each nested field is checked on all `NestedTimeSlot`s. For example, if only one of the `NestedTimeSlot`'s
         * has a service with `tooEarlyToBook` same as in the request, we return the `TimeSlot` regardless of whether
         * the other `NestedTimeSlots` has the same `tooEarlyToBook` as in request.
         *
         * Each nested field is checked on its own. For example, if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we return slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$5;
        /**
         * Maximum number of slots to load for each day. For example, if `timeSlotsPerDay` is set to `3`,
         * we return at most 3 available TimeSlots for each day within the date range specified in request.
         *
         * By default,
         * if `bookable` filter was not specified,
         * and a day has both `bookable` and `un-bookable` slots, `bookable` slots are returned first.
         *
         * If the number of `bookable` slots is less than the requested `timeSlotsPerDay`,
         * `un-bookable` slots will be returned according to the specified filters.
         */
        timeSlotsPerDay?: number | null;
        /**
         * CursorPaging.
         *
         * Enables you to fetch TimeSlots in smaller, more manageable chunks
         * by setting a limit on the number of results returned in response.
         * This is useful in order to enhance efficiency of data retrieval and reduce load on both the client and server.
         *
         * If there are more results than the specified limit, the response will contain a `cursorPagingMetaData`
         * with a cursor pointing to next page of results. In order to fetch the next page of results, you should pass the
         * returned cursor to the next call as `cursorPaging`.`cursor`.
         *
         * For the first call, you should only specify the `limit` for the results page.
         * For each following call, you should only pass the previous returned cursor as `cursorPaging`.`cursor`
         * the `cursorPaging`.`limit`. You may pass a different `limit`.
         * No need to specify any additional parameters.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * If you only provide a <code class="grey-background">cursorPaging</code>. <code class="grey-background">cursor</code>,
         * the response will contain the default size of results which is `1000`.
         * </p>
         * </blockquote>
         */
        cursorPaging?: CommonCursorPaging$3;
    }
    /**
     * Retrieves an available multiService `TimeSlot` that match the provided filters.
     *
     * Throws `SlotNotFound` if there is no such available time slot.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong><br/>
     * Currently supported only for services of type <code class="grey-background">APPOINTMENT</code>.</p>
     * </blockquote>
     *
     * By default,
     * if you don't provide a `service`.`includeResourceTypeIds` or `service`.`resourceIds` in request,
     * we return for each `TimeSlot`.`NestedTimeSlot` all `AvailableResources` with all `AvailableResources`.`resources` which are available to provide
     * the corresponding service within the time slot.
     *
     * If you specify `service`.`includeResourceTypeIds` or `service`.`resourceIds` in request,
     * the returned `TimeSlot`.`NestedTimeSlot` for this service will contain only `AvailableResources` with at least one available resource
     * which match the given resources filters,
     * each contains all available resources out of those requested.
     *
     * + Notes:
     * + All nested time slots share the same location.
     * + You can pass up to 8 services.
     *
     * <blockquote class="tip">
     * <p><strong>Tip:</strong><br/>
     * Use this API in order to get the availability of a specific <code class="grey-background">TimeSlot</code> out of those returned from  <code class="grey-background">ListMultiServiceAvailabilityTimeSlots</code> API.</p>
     * </blockquote>
     * @param services - Services for which the multiService TimeSlots are being returned for.
     * Each service contains its own resources filters within.
     *
     * MinSize: 2.
     * MaxSize: 8.
     * @public
     * @documentationMaturity preview
     * @requiredField options
     * @requiredField options.localEndDate
     * @requiredField options.localStartDate
     * @requiredField options.location
     * @requiredField options.location.locationType
     * @requiredField options.timeZone
     * @requiredField services
     * @requiredField services.serviceId
     */
    function getMultiServiceAvailabilityTimeSlot$1(services: Service$5[], options: GetMultiServiceAvailabilityTimeSlotOptions): Promise<GetMultiServiceAvailabilityTimeSlotResponse$3>;
    interface GetMultiServiceAvailabilityTimeSlotOptions {
        /**
         * Local start date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate: string;
        /**
         * Local end date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate: string;
        /** Time zone, in IANA time zone format. */
        timeZone: string | null;
        /**
         * The location of the time slot.
         *
         * You must provide a specific `locationType`.
         * If locationType is `BUSINESS`, you __must__ also provide a `locationId`.
         *
         * <blockquote class="warning">
         * <p>Supports filtering by location type, or by location ID.
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        location: Location$b;
    }
    /**
     * Retrieves a list of `TimeSlot`s that match the provided filters.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong>
     * Currently supported only for services of type <code class="grey-background">APPOINTMENT</code>.</p>
     * </blockquote>
     *
     * The request body __must__ include either:
     * + All of the following filters:  `serviceId`, `fromLocalDate`, `toLocalDate`, and `timeZone`.
     * You may add additional filters as you wish.
     * + A `cursorPaging` with a valid `cursor` from previous response.
     *
     *
     * Each [TimeSlot](https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/availability-time-slots/time-slot-object) in response
     * represents the availability of the service in a specific location,
     * and has a `localStartDate` within the range of the provided `fromLocalDate` and `toLocalDate` exclusive.
     * The `localEndDate` of a `TimeSlot` is calculated as the sum of the `TimeSlot`'s `localStartDate` and the duration of the service.
     *
     * By default,
     * the response contains at most 1000 results.
     * If there are more than 1000 results, we return a `cursorPagingMetadata` with
     * a cursor for the next page of results, regardless of whether a `cursorPaging`
     * was provided in request.
     *
     * ### AvailableResources in response
     * The `TimeSlot`'s `AvailableResources` contains information about the resources that are available to provide the service
     * within the time slot. Each `AvailableResources` contains information about available resources of the same type.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong><br/>
     * By default,
     * if you don't specify <code class="grey-background">includeResourceTypeIds</code>
     * or <code class="grey-background">resourceIds</code> filters in request,
     * we return TimeSlots with an empty <code class="grey-background">AvailableResources</code>.
     * <br/><strong>Note:</strong><br/> Not specifying resources filters can be handy in case you want to avoid large response in flows that only
     * interested of whether the time slots are available. [Finding the next available slot within the next 3 months](https://bo.wix.com/wix-docs/rest/all-apis/service-availability/availability-time-slots/sample-flows?localViewerId=inbari#all-apis_service-availability_availability-time-slots_sample-flows_find-the-first-date-within-the-next-3-months-that-the-selected-service-is-available-for)
     * is an example for such flow.
     * </p>
     * </blockquote>
     *
     * If you wish to get a list of available resources for each `TimeSlot` you should either:
     * + provide `resourceIds` in request.
     * + provide `includeResourceTypeIds` in request.
     *
     * __Notes:__
     * + In both cases the returned TimeSlots contains  __up__ to 10 `AvailableResources` that match the provided filters.
     * Each `AvailableResources` contains __up__ to 10 available `resources` of the same type that match the provided filters.
     * + If an `AvailableResources` has more available resources which are not listed within it,
     * we return `AvailableResources`.`hasMoreAvailableResources` as true.
     * > __Note:__
     * > If you wish to get the full available resources list for a specific `TimeSlot`,
     * > you should call [GetAvailabilityTimeSlot](https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/service-availability-time-slots/get-availability-time-slot).
     *
     *
     * ### Availability VS Bookability
     * An `available` time slot is not necessarily `bookable`.
     * The `bookable` field of a `TimeSlot` indicates whether a customer can book the service within the given time slot,
     * at a specific period of time.
     * Read more about [Availability VS Bookability](https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/service-availability-time-slots/introduction#all-apis_wix-service-availability_service-availability-time-slots_introduction_availability-vs-bookability).
     *
     * By default,
     * + The response does not contains `unavailable` TimeSlots.
     * For example,
     * if there are no available resources to provide the service from `2024-01-30T14:30:00` to `2024-01-30T15:30:00`,
     * we don't return TimeSlots with `localStartDate` within this range.
     * + The response contains both `bookable` and `un-bookable` TimeSlots.
     * For example,
     * if the service has a booking policy which enforces booking the service up to 10 minutes before the session starts,
     * we return TimeSlots with the violating `localStartDate` with `bookable` as false.
     * If you wish to list only available __bookable__ TimeSlots you should pass `bookable` filter as true.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong>
     * Because of DST, there are edge cases where certain times either do not exist or exist twice for a local time zone.
     * Read more about <a href="https://bo.wix.com/wix-docs/rest/all-apis/service-availability/availability-time-slots/introduction?localViewerId=inbari#all-apis_service-availability_availability-time-slots_introduction_daylight-saving-time-dst-handling">DST Handling</a></p>
     * </blockquote>
     *
     *
     * ### ListAvailabilityTimeSlots runs with the following defaults
     * + `localStartDate` is sorted in `ASC` order
     * + `cursorPaging`.`limit` is `1000`
     * @public
     * @documentationMaturity preview
     */
    function listAvailabilityTimeSlots$1(options?: ListAvailabilityTimeSlotsOptions$1): Promise<ListAvailabilityTimeSlotsResponse$3>;
    interface ListAvailabilityTimeSlotsOptions$1 {
        /**
         * Service ID for which the time slots are being returned for.
         * Currently supported only for services of type `APPOINTMENT`.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        serviceId?: string | null;
        /**
         * Lower boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        fromLocalDate?: string | null;
        /**
         * Upper boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        toLocalDate?: string | null;
        /**
         * Time zone, in IANA time zone format.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        timeZone?: string | null;
        /**
         * Locations to include in response.
         *
         * By default,
         * if no locations are provided,
         * the response contains TimeSlots for all locations where the service is available.
         *
         * You can specify locations or location types for which the time slots will be returned for.
         * If locationType is `BUSINESS`, you __must__ provide a locationId.
         *
         * <blockquote class="warning">
         * <p><strong>warning:</strong><br/>
         * Supports filtering by location type, or by location ID. </br>
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        locations?: Location$b[];
        /**
         * Resources to include in response.
         *
         * If specified,
         * the returned TimeSlots will contain __up__ to 10 available resources out of the provided list.
         * Otherwise, the returned TimeSlots returns with an empty `AvailableResources`.
         */
        resourceIds?: string[];
        /**
         * Resource type ID's to include in response, this is in addition to the requested `resourceIds`.
         *
         * If specified in request, the returned TimeSlots will contain __up__ to 10 `AvailableResources` with `ResourceTypeId`
         * out of those specified, each contains __up__ to 10 available resources of this type.
         */
        includeResourceTypeIds?: string[];
        /**
         * Whether the `TimeSlot` is bookable according to the service's booking policies.
         *
         * If booking this `TimeSlot` does not violates any of the service's booking policies,
         * returns as `true`. Otherwise, returns as `false`.
         *
         * > __Note:__
         * > A time slot that doesn't meet the service's bookings policies will be returned with `bookable` = false,
         * > while a time slot with no available resources will not be returned at all.
         */
        bookable?: boolean | null;
        /**
         * Indicators for service's booking policy violations for booking the `TimeSlot`.
         *
         * A bookable time slot must not violate any policy,
         * therefor, this filter is only relevant when `bookable` filter is false.
         *
         * Each nested field is checked on its own. i.e. if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we return slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$5;
        /**
         * Maximum number of slots to load for each day. For example, if `timeSlotsPerDay` is set to `3`,
         * we return at most 3 available TimeSlots for each day within the date range specified in request.
         *
         * By default,
         * if `bookable` filter was not specified,
         * and a day has both `bookable` and `un-bookable` slots, `bookable` slots are returned first.
         *
         * If the number of `bookable` slots is less than the requested `timeSlotsPerDay`,
         * `un-bookable` slots will be returned according to the specified filters.
         */
        timeSlotsPerDay?: number | null;
        /**
         * CursorPaging.
         *
         * Enables you to fetch results in smaller, more manageable chunks
         * by setting a limit on the number of results returned in response.
         * This is useful in order to enhance efficiency of data retrieval and reduce load on both the client and server.
         *
         * If there are more results than the specified limit, the response will contain a `cursorPagingMetaData`
         * with a cursor pointing to next page of results. In order to fetch the next page of results, you should pass the
         * returned cursor to the next call as `cursorPaging`.`cursor`.
         *
         * For the first call, you should only specify the `limit` for the results page.
         * For each following call, you should only pass `cursorPaging`.`cursor` with the returned cursor from previous call, and
         * a `cursorPaging`.`limit`.
         * No need to specify any additional parameters.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * If you only provide a <code class="grey-background">cursorPaging</code>. <code class="grey-background">cursor</code>,
         * the response will contain the default size of results which is `1000`.
         * </p>
         * </blockquote>
         */
        cursorPaging?: CommonCursorPaging$3;
    }
    /**
     * Retrieves an available `TimeSlot` that match the provided filters.
     *
     * Throws `SlotNotFound` if there is no such available time slot.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong><br/>
     * Currently supported only for services of type <code class="grey-background">APPOINTMENT</code>.</p>
     * </blockquote>
     *
     * By default,
     * if you don't provide `includeResourceTypeIds` or `resourceIds` in request,
     * we return all `AvailableResources` with all `AvailableResources`.`resources` which are available to provide
     * the service within the time slot.
     *
     * If you specify `includeResourceTypeIds` or `resourceIds` in request,
     * the returned `TimeSlot` will contain only `AvailableResources` with at least one available resource
     * which match the given resources filters,
     * each contains all available resources out of those requested.
     *
     *
     * <blockquote class="tip">
     * <p><strong>Tip:</strong><br/>
     * Use this API in order to get the availability of a specific <code class="grey-background">TimeSlot</code> out of those returned from  <code class="grey-background">ListAvailabilityTimeSlots</code> API.</p>
     * </blockquote>
     * @param serviceId - Service ID of the time slot.
     * Currently supported only for services of type `APPOINTMENT`.
     * @public
     * @documentationMaturity preview
     * @requiredField options.localEndDate
     * @requiredField options.localStartDate
     * @requiredField options.location
     * @requiredField options.timeZone
     * @requiredField serviceId
     */
    function getAvailabilityTimeSlot$1(serviceId: string, options?: GetAvailabilityTimeSlotOptions$1): Promise<GetAvailabilityTimeSlotResponse$3>;
    interface GetAvailabilityTimeSlotOptions$1 {
        /**
         * Local start date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate: string;
        /**
         * Local end date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate: string;
        /** Time zone, in IANA time zone format. */
        timeZone: string | null;
        /**
         * The location of the time slot.
         *
         * You must provide a specific `locationType`.
         * If locationType is `BUSINESS`, you __must__ also provide a `locationId`.
         *
         * <blockquote class="warning">
         * <p>Supports filtering by location type, or by location ID.
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        location: Location$b;
        /**
         * Resources to include in response.
         *
         * If specified,
         * the returned `TimeSlot` contains only the available resources out of provided list.
         * Otherwise, the returned `TimeSlot` returned with all possible `AvailableResources`.
         */
        resourceIds?: string[];
        /**
         * Resource type IDs to include in response, this is in addition to the requested `resourceIds`.
         *
         * If specified in request, the returned `TimeSlot` contains only the `AvailableResources` with `ResourceTypeId`
         * out of those specified, each contains all the available resources of this type.
         */
        includeResourceTypeIds?: string[];
    }
    const bookingsAvailabilityV2TimeSlot_universal_d___debug: typeof __debug;
    type bookingsAvailabilityV2TimeSlot_universal_d_GetMultiServiceAvailabilityTimeSlotOptions = GetMultiServiceAvailabilityTimeSlotOptions;
    namespace bookingsAvailabilityV2TimeSlot_universal_d {
        export { bookingsAvailabilityV2TimeSlot_universal_d___debug as __debug, TimeSlot$3 as TimeSlot, Location$b as Location, LocationType$b as LocationType, EventInfo$3 as EventInfo, WaitingList$5 as WaitingList, BookingPolicyViolations$5 as BookingPolicyViolations, AvailableResources$4 as AvailableResources, Resource$6 as Resource, NestedTimeSlot$4 as NestedTimeSlot, CalculateEventBasedAvailabilityRequest$3 as CalculateEventBasedAvailabilityRequest, CursorPaging$b as CursorPaging, CalculateEventBasedAvailabilityResponse$3 as CalculateEventBasedAvailabilityResponse, CursorPagingMetadata$8 as CursorPagingMetadata, Cursors$b as Cursors, ListEventTimeSlotsRequest$3 as ListEventTimeSlotsRequest, ListEventTimeSlotsResponse$3 as ListEventTimeSlotsResponse, ListMultiServiceAvailabilityTimeSlotsRequest$3 as ListMultiServiceAvailabilityTimeSlotsRequest, Service$5 as Service, CommonCursorPaging$3 as CommonCursorPaging, ListMultiServiceAvailabilityTimeSlotsResponse$3 as ListMultiServiceAvailabilityTimeSlotsResponse, CommonCursorPagingMetadata$3 as CommonCursorPagingMetadata, CommonCursors$3 as CommonCursors, GetMultiServiceAvailabilityTimeSlotRequest$3 as GetMultiServiceAvailabilityTimeSlotRequest, GetMultiServiceAvailabilityTimeSlotResponse$3 as GetMultiServiceAvailabilityTimeSlotResponse, ListAvailabilityTimeSlotsRequest$3 as ListAvailabilityTimeSlotsRequest, ListAvailabilityTimeSlotsResponse$3 as ListAvailabilityTimeSlotsResponse, GetAvailabilityTimeSlotRequest$3 as GetAvailabilityTimeSlotRequest, GetAvailabilityTimeSlotResponse$3 as GetAvailabilityTimeSlotResponse, CalculateEventBasedAvailabilityOptions$1 as CalculateEventBasedAvailabilityOptions, ListEventTimeSlotsOptions$1 as ListEventTimeSlotsOptions, listMultiServiceAvailabilityTimeSlots$1 as listMultiServiceAvailabilityTimeSlots, ListMultiServiceAvailabilityTimeSlotsOptions$1 as ListMultiServiceAvailabilityTimeSlotsOptions, getMultiServiceAvailabilityTimeSlot$1 as getMultiServiceAvailabilityTimeSlot, bookingsAvailabilityV2TimeSlot_universal_d_GetMultiServiceAvailabilityTimeSlotOptions as GetMultiServiceAvailabilityTimeSlotOptions, listAvailabilityTimeSlots$1 as listAvailabilityTimeSlots, ListAvailabilityTimeSlotsOptions$1 as ListAvailabilityTimeSlotsOptions, getAvailabilityTimeSlot$1 as getAvailabilityTimeSlot, GetAvailabilityTimeSlotOptions$1 as GetAvailabilityTimeSlotOptions, };
    }
    interface SlotAvailability$1 {
        /**
         * The slot for the corresponding session, when the session is either a single session
         * or a specific session generated from a recurring session.
         */
        slot?: Slot$1;
        /**
         * Whether the slot is bookable. Bookability is determined by checking a
         * session's open slots and booking policies. Locks are not taken into
         * account.
         */
        bookable?: boolean;
        /**
         * Total number of spots for this slot.
         * For example, if a session has a total of 10 spots and 3 spots are booked,
         * `spotsTotal` is 10 and `openSpots` is 7.
         */
        totalSpots?: number | null;
        /** Number of open spots for this slot. */
        openSpots?: number | null;
        /** An object describing the slot's waitlist and its occupancy. */
        waitingList?: WaitingList$4;
        /** Booking policy violations for the slot. */
        bookingPolicyViolations?: BookingPolicyViolations$4;
        /**
         * Indicates whether the slot is locked because a waitlist exists.
         * When a slot frees up, the slot is offered to the next customer on the waitlist. Read-only.
         */
        locked?: boolean | null;
        isFromV2?: boolean;
    }
    interface Slot$1 {
        /**
         * ID for the slot's corresponding session, when the session is either a single session
         * or a specific session generated from a recurring session.
         */
        sessionId?: string | null;
        /** Service ID. */
        serviceId?: string;
        /** Schedule ID. */
        scheduleId?: string;
        /**
         * The start time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format.
         *
         * If `timezone` is specified,
         * dates are based on the local date/time. This means that the timezone offset
         * in the `start_date` is ignored.
         */
        startDate?: string | null;
        /**
         * The end time of this slot in
         * [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339) format.
         *
         * If `timezone` is specified,
         * dates are based on the local date/time. This means that the timezone offset
         * in the `end_date` is ignored.
         */
        endDate?: string | null;
        /**
         * The timezone for which slot availability is to be calculated. If specified,
         * dates are based on the local date/time, meaning that the timezone offset
         * in the date's format is ignored.
         */
        timezone?: string | null;
        /**
         * The resource required for this slot. Currently, the only supported resource
         * is the relevant staff member for the slot.
         */
        resource?: SlotResource$1;
        /** Geographic location of the slot. */
        location?: Location$a;
    }
    interface SlotResource$1 {
        /**
         * Resource ID.
         * @readonly
         */
        _id?: string | null;
        /** Resource name. Read only. */
        name?: string | null;
    }
    interface Location$a {
        /**
         * Business location ID. Available only for locations that are business locations,
         * meaning the `location_type` is `"OWNER_BUSINESS"`.
         */
        _id?: string | null;
        /** Location name. */
        name?: string | null;
        /** The full address of this location. */
        formattedAddress?: string | null;
        /**
         * Location type.
         *
         * - `"OWNER_BUSINESS"`: The business address, as set in the site’s general settings.
         * - `"OWNER_CUSTOM"`: The address as set when creating the service.
         * - `"CUSTOM"`: The address as set for the individual session.
         */
        locationType?: LocationType$a;
    }
    enum LocationType$a {
        UNDEFINED = "UNDEFINED",
        OWNER_BUSINESS = "OWNER_BUSINESS",
        OWNER_CUSTOM = "OWNER_CUSTOM",
        CUSTOM = "CUSTOM"
    }
    interface WaitingList$4 {
        /**
         * Total number of spots and open spots for this waitlist.
         * For example, a Yoga class with 10 waitlist spots and 3 registered
         * on the waitlist has 10 `total_spots` and 7 `open_spots`.
         */
        totalSpots?: number | null;
        /** Number of open spots for this waitlist. */
        openSpots?: number | null;
    }
    interface BookingPolicyViolations$4 {
        /** Bookings policy violation. Too early to book this slot. */
        tooEarlyToBook?: boolean | null;
        /** Bookings policy violation. Too late to book this slot. */
        tooLateToBook?: boolean | null;
        /** Bookings policy violation. Online booking is disabled for this slot. */
        bookOnlineDisabled?: boolean | null;
    }
    interface NestedTimeSlot$3 {
        serviceId?: string;
        start?: string;
        end?: string;
        resource?: SlotResource$1;
        /** Schedule ID. */
        scheduleId?: string;
    }
    interface QueryAvailabilityRequest {
        /** Query options. */
        query: QueryV2$5;
        /**
         * The timezone for which slot availability is to be calculated. If specified,
         * dates are based on the local date/time, meaning that the timezone offset
         * in the date's format is ignored.
         */
        timezone?: string | null;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        slotsPerDay?: number | null;
    }
    interface QueryV2$5 extends QueryV2PagingMethodOneOf$5 {
        /**
         * Filter object. You must include the `startDate` and `endDate` in the filter. This avoids large results that can impact performance.
         */
        filter?: Record<string, any> | null;
        /** Currently, only sorting by `startDate` is supported.  */
        sort?: Sorting$6[];
    }
    /** @oneof */
    interface QueryV2PagingMethodOneOf$5 {
    }
    interface Sorting$6 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$6;
    }
    enum SortOrder$6 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface CursorPaging$a {
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
    /**
     * Selected customer choices.
     * These choices are selected by the customer during the booking flow and can be utilized to calculate the corresponding service's configuration properties.
     */
    interface CustomerChoices$3 {
        /**
         * The selected customer duration in minutes.
         * Min: `1 minute`
         * Max: `44639 minutes` (30 days, 23 hours, and 59 minutes)
         */
        durationInMinutes?: number | null;
    }
    interface QueryAvailabilityResponse {
        /** List of slots that potentially can be booked. */
        availabilityEntries?: SlotAvailability$1[];
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
        cursors?: Cursors$a;
    }
    interface Cursors$a {
        /** Cursor string pointing to the next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to the previous page in the list of results. */
        prev?: string | null;
    }
    interface GetSlotAvailabilityRequest$1 {
        /** The slot for which the availability is checked. */
        slot?: Slot$1;
        /**
         * The timezone for which slot availability is to be calculated. If specified,
         * dates are based on the local date/time, meaning that the timezone offset
         * in the date's format is ignored.
         */
        timezone?: string | null;
    }
    interface GetSlotAvailabilityResponse$1 {
        availability?: SlotAvailability$1;
        bookingPolicySettings?: BookingPolicySettings$1;
    }
    interface BookingPolicySettings$1 {
        /**
         * The policy defining the maximum number of participants that can
         * be booked for a slot or a schedule.
         */
        maxParticipantsPerBooking?: number | null;
    }
    interface GetScheduleAvailabilityRequest$1 {
        /** The schedule ID for which availability is being checked. */
        scheduleId: string;
    }
    interface GetScheduleAvailabilityResponse$1 {
        availability?: ScheduleAvailability$1;
        bookingPolicySettings?: BookingPolicySettings$1;
    }
    interface ScheduleAvailability$1 {
        /**
         * The total number of spots defined for the schedule, including
         * both open and non-available spots.
         */
        totalSpots?: number | null;
        /** The number of open spots defined for the schedule. */
        openSpots?: number | null;
        /** Booking policy violations for the schedule. */
        bookingPolicyViolations?: BookingPolicyViolations$4;
    }
    interface CalculateMultiSlotAvailabilityRequest {
        from?: string;
        to?: string;
        timeZone?: string;
        /** TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006 */
        bookable?: boolean | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$4;
        /**
         * support filtering by location type, or by locationId. Other fields like `name` are ignored
         * must be set, and must have locationType. If locationType is `OWNER_BUSINESS`, must have location_id
         */
        location?: Location$a;
        slots?: RuleBasedConstraints[];
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        slotsPerDay?: number | null;
        cursorPaging?: CursorPaging$a;
    }
    interface RuleBasedConstraints {
        serviceId?: string;
        resourcesFilter?: ResourcesFilter;
    }
    interface ResourcesFilter {
        resourceIds?: string[];
    }
    interface CalculateMultiSlotAvailabilityResponse {
        slots?: SlotAvailability$1[];
        cursorPagingMetadata?: CursorPagingMetadata$7;
    }
    interface CursorPagingMetadata$7 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Cursor strings that point to the next page, previous page, or both. */
        cursors?: Cursors$a;
        /**
         * Whether there are more pages to retrieve following the current page.
         *
         * + `true`: Another page of results can be retrieved.
         * + `false`: This is the last page.
         */
        hasNext?: boolean | null;
    }
    /**
     * Retrieves the availability for sessions
     * that match the provided query criteria (paging, filtering, and sorting).
     *
     *
     * The Availability Calendar APIs calculate the availability of sessions for
     * appointments and classes, but not
     * for courses.
     *
     * The entire list of slots is returned in case you want to display both
     * available and non-available slots in the calendar for your customers.
     * Using the `bookable` property, you can limit the display to available
     * slots only.
     *
     * When querying, you must enter a start date and an end date. This avoids very large
     * results that can impact performance.
     *
     * #### Calculating availability
     *
     * The availability is determined
     * by checking:
     * + **The sessions' open slots**. A slot is considered open if the session's
     * capacity is greater than number of participants.
     * + **Booking policies**. Policies that affect whether a slot is considered
     * available include `tooEarlyToBook`, `tooLateToBook`, and `bookOnlineDisabled`.
     *
     * Locked sessions do not impact session availability and `bookable` can
     * be `true` even if `locked` is `true`. For example, if a session has a waitlist and a
     * place frees up, the slot is offered to the customers on the waitlist, one by one. The
     * session remains locked because there is still a waitlist, but for a period of time
     * there is availability, until a customer on the waitlist takes the slot. Locking
     * prevents customers who are not yet on the waitlist from grabbing the slot.
     *
     * #### Handling Daylight Savings Time (DST) for local time zones
     *
     * Because of DST, there are cases where certain times either do not exist
     * or exist twice for a local time zone.
     * For example, the tine `00:05` on September 5th 2021 might not exist in Santiago, Chile,
     * because at `00:00` the clock moved
     * 1 hour forward to `01:00`.
     *
     * In this case, the Availability Calendar APIs take this
     * into account and mediate the time gaps automatically. The non-existent local time is
     * automatically moved forward 1 hour to match local DST. Local times that exist do not change.
     * So if the `queryAvailability()` function is called with a `startDate` of `2021-09-05T00:00:01.000`
     * and an `endDate` of `2021-09-06T00:00:02.000`, `2021-09-05T01:00:01.000` is used in the query
     * instead. The start time shifts one hour forward and the end time remains the same.
     * @param query - Query options.
     * @public
     * @documentationMaturity preview
     * @requiredField query
     * @requiredField query.filter
     * @param options - Additional options for performing the query.
     * @adminMethod
     */
    function queryAvailability(query: QueryV2$5, options?: QueryAvailabilityOptions): Promise<QueryAvailabilityResponse>;
    interface QueryAvailabilityOptions {
        /**
         * The timezone for which slot availability is to be calculated. If specified,
         * dates are based on the local date/time, meaning that the timezone offset
         * in the date's format is ignored.
         */
        timezone?: string | null;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        slotsPerDay?: number | null;
    }
    interface GetSlotAvailabilityOptions$1 {
        /** The slot for which the availability is checked. */
        slot?: Slot$1;
        /**
         * The timezone for which slot availability is to be calculated. If specified,
         * dates are based on the local date/time, meaning that the timezone offset
         * in the date's format is ignored.
         */
        timezone?: string | null;
    }
    interface GetScheduleAvailabilityOptions {
    }
    interface CalculateMultiSlotAvailabilityOptions {
        from?: string;
        to?: string;
        timeZone?: string;
        /** TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006 */
        bookable?: boolean | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$4;
        /**
         * support filtering by location type, or by locationId. Other fields like `name` are ignored
         * must be set, and must have locationType. If locationType is `OWNER_BUSINESS`, must have location_id
         */
        location?: Location$a;
        slots?: RuleBasedConstraints[];
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        slotsPerDay?: number | null;
        cursorPaging?: CursorPaging$a;
    }
    type bookingsAvailabilityV1SlotAvailability_universal_d_QueryAvailabilityRequest = QueryAvailabilityRequest;
    type bookingsAvailabilityV1SlotAvailability_universal_d_QueryAvailabilityResponse = QueryAvailabilityResponse;
    type bookingsAvailabilityV1SlotAvailability_universal_d_CalculateMultiSlotAvailabilityRequest = CalculateMultiSlotAvailabilityRequest;
    type bookingsAvailabilityV1SlotAvailability_universal_d_RuleBasedConstraints = RuleBasedConstraints;
    type bookingsAvailabilityV1SlotAvailability_universal_d_ResourcesFilter = ResourcesFilter;
    type bookingsAvailabilityV1SlotAvailability_universal_d_CalculateMultiSlotAvailabilityResponse = CalculateMultiSlotAvailabilityResponse;
    const bookingsAvailabilityV1SlotAvailability_universal_d_queryAvailability: typeof queryAvailability;
    type bookingsAvailabilityV1SlotAvailability_universal_d_QueryAvailabilityOptions = QueryAvailabilityOptions;
    type bookingsAvailabilityV1SlotAvailability_universal_d_GetScheduleAvailabilityOptions = GetScheduleAvailabilityOptions;
    type bookingsAvailabilityV1SlotAvailability_universal_d_CalculateMultiSlotAvailabilityOptions = CalculateMultiSlotAvailabilityOptions;
    namespace bookingsAvailabilityV1SlotAvailability_universal_d {
        export { SlotAvailability$1 as SlotAvailability, Slot$1 as Slot, SlotResource$1 as SlotResource, Location$a as Location, LocationType$a as LocationType, WaitingList$4 as WaitingList, BookingPolicyViolations$4 as BookingPolicyViolations, NestedTimeSlot$3 as NestedTimeSlot, bookingsAvailabilityV1SlotAvailability_universal_d_QueryAvailabilityRequest as QueryAvailabilityRequest, QueryV2$5 as QueryV2, QueryV2PagingMethodOneOf$5 as QueryV2PagingMethodOneOf, Sorting$6 as Sorting, SortOrder$6 as SortOrder, CursorPaging$a as CursorPaging, CustomerChoices$3 as CustomerChoices, bookingsAvailabilityV1SlotAvailability_universal_d_QueryAvailabilityResponse as QueryAvailabilityResponse, PagingMetadataV2$4 as PagingMetadataV2, Cursors$a as Cursors, GetSlotAvailabilityRequest$1 as GetSlotAvailabilityRequest, GetSlotAvailabilityResponse$1 as GetSlotAvailabilityResponse, BookingPolicySettings$1 as BookingPolicySettings, GetScheduleAvailabilityRequest$1 as GetScheduleAvailabilityRequest, GetScheduleAvailabilityResponse$1 as GetScheduleAvailabilityResponse, ScheduleAvailability$1 as ScheduleAvailability, bookingsAvailabilityV1SlotAvailability_universal_d_CalculateMultiSlotAvailabilityRequest as CalculateMultiSlotAvailabilityRequest, bookingsAvailabilityV1SlotAvailability_universal_d_RuleBasedConstraints as RuleBasedConstraints, bookingsAvailabilityV1SlotAvailability_universal_d_ResourcesFilter as ResourcesFilter, bookingsAvailabilityV1SlotAvailability_universal_d_CalculateMultiSlotAvailabilityResponse as CalculateMultiSlotAvailabilityResponse, CursorPagingMetadata$7 as CursorPagingMetadata, bookingsAvailabilityV1SlotAvailability_universal_d_queryAvailability as queryAvailability, bookingsAvailabilityV1SlotAvailability_universal_d_QueryAvailabilityOptions as QueryAvailabilityOptions, GetSlotAvailabilityOptions$1 as GetSlotAvailabilityOptions, bookingsAvailabilityV1SlotAvailability_universal_d_GetScheduleAvailabilityOptions as GetScheduleAvailabilityOptions, bookingsAvailabilityV1SlotAvailability_universal_d_CalculateMultiSlotAvailabilityOptions as CalculateMultiSlotAvailabilityOptions, };
    }
    /**
     * The `TimeSlot` object represents the availability information
     * for an `Appointment` service's specific slot, including:
     *
     * 1. Whether the slot is bookable for the given service?
     *
     * 2. In what location the service is available for this slot?
     *
     * 3. Which available resources can provide the service for this slot?
     *
     * 4. Does booking the slot for the service violates any of the service booking policies?
     *
     * 5. What is the total capacity and remaining capacity of the service at the time of the calculation of the `TimeSlot`?
     *
     * > __Note:__
     * > When the `TimeSlot` has a non empty `NestedTimeSlots`, it represents the availability information
     * > for a given list of `Appointment` services within a specific time slot.
     */
    interface TimeSlot$2 {
        /**
         * Service ID.
         *
         * > Not returned from `MultiServiceAvailabilityTimeSlots` API calls.
         * > Instead, each nested time slot has its own serviceId.
         */
        serviceId?: string | null;
        /**
         * Local start date of the time slot in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate?: string | null;
        /**
         * Local end date of the time slot in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate?: string | null;
        /**
         * Whether the slot is bookable according to the service's booking policies.
         *
         * If booking this time slot does not violates any of the service's booking policies,
         * the returned value is `true`. Otherwise, returns `false`.
         */
        bookable?: boolean | null;
        /** The geographic location of the slot. */
        location?: Location$9;
        /** Total number of spots for the slot. */
        totalCapacity?: number | null;
        /**
         * Remaining number of spots for the slot.
         * For example, for an appointment service with total capacity of 1 spot and one booked spot, the remaining capacity will be 0.
         */
        remainingCapacity?: number | null;
        /**
         * Indicators for booking policy violations for the slot.
         *
         * Each nested field is checked on its own. i.e. if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we will return also slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$3;
        /**
         * List of `AvailableResources` for the time slot.
         * Each `AvailableResources` contains information about available resources of the same type.
         *
         * > Not returned from `MultiServiceAvailabilityTimeSlots` API calls.
         * > Instead, each nested time slot has its own available resources.
         */
        availableResources?: AvailableResources$3[];
        /**
         * > Nested time slots.
         * > Returned only from `MultiServiceAvailabilityTimeSlots` API calls.
         */
        nestedTimeSlots?: NestedTimeSlot$2[];
    }
    interface Location$9 {
        /** Business Location ID. Present only if the location is a business location. */
        _id?: string | null;
        /** The location name. */
        name?: string | null;
        /** A string representation for the full address of the location. */
        formattedAddress?: string | null;
        /**
         * The type of location:
         * - `CUSTOM`: The location is specific to this service, and is not derived from the business location.
         * - `BUSINESS`: A business location, either the default business address, or locations defined for the business by the Business Info.
         * - `CUSTOMER`: The location is determined by the customer and is not set up beforehand.
         */
        locationType?: LocationType$9;
    }
    enum LocationType$9 {
        UNKNOWN_LOCATION_TYPE = "UNKNOWN_LOCATION_TYPE",
        /** A business location, either the default business address, or locations defined for the business by the Business Info. */
        BUSINESS = "BUSINESS",
        /** The location is unique to this service and isn't defined as one of the business locations. */
        CUSTOM = "CUSTOM",
        /** The location can be determined by the customer and is not set up beforehand. */
        CUSTOMER = "CUSTOMER"
    }
    /** relevant for event based slots, and not for availability based slots */
    interface EventInfo$2 {
    }
    interface WaitingList$3 {
        /** Total number of spots in this wait list. */
        totalCapacity?: number | null;
        /**
         * Number of remaining spots for this wait list.
         * For example, a Yoga event with 10 waitList spots and 3 registered
         * on the waitList has 10 `total_capacity` and 7 `remaining_capacity`.
         */
        remainingCapacity?: number | null;
    }
    interface BookingPolicyViolations$3 {
        /** Bookings policy violation. Too early to book this slot. */
        tooEarlyToBook?: boolean | null;
        /** Bookings policy violation. Too late to book this slot. */
        tooLateToBook?: boolean | null;
        /** Bookings policy violation. Online booking is disabled for the `TimeSlot` service. */
        bookOnlineDisabled?: boolean | null;
    }
    interface AvailableResources$3 {
        /** Resource type ID. */
        resourceTypeId?: string | null;
        /**
         * Available resources for the time slot.
         *
         * + When returned from `ListAvailabilityTimeSlots`, empty by default.
         * + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * contains __up__ to 10 available resources out of those provided.
         *
         * + When returned from `GetAvailabilityTimeSlots`, contains all available resources by default.
         * + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * contains all of the available resources out of those provided.
         *
         *
         * > + When returned from `ListMultiServiceAvailabilityTimeSlots`, empty by default.
         * > + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * > contains __up__ to 10 available resources out of those provided.
         *
         * > + When returned from `GetMultiServiceAvailabilityTimeSlots`, contains all available resources by default.
         * > + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * > contains all of the available resources out of those provided.
         */
        resources?: Resource$5[];
        /**
         * Whether there are more available resources for the slot that are not listed in `resources` due to size limitations.
         * @readonly
         */
        hasMoreAvailableResources?: boolean | null;
    }
    interface Resource$5 {
        /** Resource ID. */
        _id?: string;
        /** Resource name. */
        name?: string | null;
    }
    interface NestedTimeSlot$2 {
        /** Service ID of the nested time slot. */
        serviceId?: string;
        /**
         * Local start date of the nested time slot in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate?: string;
        /**
         * Local end date of the nested time slot in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate?: string;
        /**
         * List of `AvailableResources` for the nested time slot.
         * Each `AvailableResources` contains information about available resources of the same type.
         */
        availableResources?: AvailableResources$3[];
    }
    interface CalculateEventBasedAvailabilityRequest$2 {
        serviceIds: string[];
        from: string;
        to: string;
        timeZone: string;
        /**
         * TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006
         * TODO: Locks are not taken into account. // Class is not supported yet. (relevant only for classes with waiting list)
         * Aliza's suggestion to consider locks in bookable
         */
        bookable?: boolean | null;
        /** support filtering by location type, or by locationId. Other fields like `name` are ignored */
        location?: Location$9[];
        resourceIds?: string[];
        /** if not empty, return slots with openSpots >= X */
        openSpots?: number | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$3;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        slotsPerDay?: number | null;
        cursorPaging?: CursorPaging$9;
    }
    interface CursorPaging$9 {
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
    interface CalculateEventBasedAvailabilityResponse$2 {
        slots?: TimeSlot$2[];
        cursorPagingMetadata?: CursorPagingMetadata$6;
    }
    interface CursorPagingMetadata$6 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Cursor strings that point to the next page, previous page, or both. */
        cursors?: Cursors$9;
        /**
         * Whether there are more pages to retrieve following the current page.
         *
         * + `true`: Another page of results can be retrieved.
         * + `false`: This is the last page.
         */
        hasNext?: boolean | null;
    }
    interface Cursors$9 {
        /** Cursor string pointing to the next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to the previous page in the list of results. */
        prev?: string | null;
    }
    interface ListEventTimeSlotsRequest$2 {
        /** The services for which the time slots are being returned. */
        serviceIds: string[] | null;
        /**
         * Local start date for which event time slots are returned, in ISO-8601 format.
         * E.g, "2024-01-30T13:30:00".
         * Required, unless `cursorPaging` is provided.
         */
        fromLocalDate: string | null;
        /**
         * Local end date for which event time slots are returned, in ISO-8601 format.
         * E.g, "2024-01-30T13:30:00".
         * Required, unless `cursorPaging` is provided.
         */
        toLocalDate: string | null;
        /**
         * The time zone, in IANA time zone format.
         * Default is the Wix Business time zone.
         */
        timeZone: string | null;
        /** TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006 */
        bookable?: boolean | null;
        /** support filtering by location type, or by locationId. Other fields like `name` are ignored */
        location?: Location$9[];
        /** TODO: maxsize && do we need include_resource_type_id here? also is the behavior is the same as availabilityTimeSlots, we won't return resources by default? */
        resourceIds?: string[] | null;
        /** if not empty, return slots with remainingCapacity >= X */
        remainingCapacity?: number | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$3;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        timeSlotsPerDay?: number | null;
        cursorPaging?: CursorPaging$9;
    }
    interface ListEventTimeSlotsResponse$2 {
        /** TODO: maxsize */
        timeSlots?: TimeSlot$2[];
        /** The time zone, in IANA time zone format. */
        timeZone?: string | null;
        cursorPagingMetadata?: CursorPagingMetadata$6;
    }
    interface ListMultiServiceAvailabilityTimeSlotsRequest$2 {
        /**
         * Services for which the multiService time slots are being returned for.
         * Each service contains its own resources filters within.
         *
         * MinSize: `2`.
         * MaxSize: `8`.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        services?: Service$4[];
        /**
         * Lower boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        fromLocalDate?: string | null;
        /**
         * Upper boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        toLocalDate?: string | null;
        /**
         * Time zone, in IANA time zone format.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        timeZone?: string | null;
        /**
         * Location for which the multiService TimeSlots are being returned for.
         *
         * You can specify location or location type for which the TimeSlots will be returned for.
         * If locationType is `BUSINESS`, you __must__ provide a locationId.
         *
         * <blockquote class="warning">
         * <p><strong>warning:</strong><br/>
         * Supports filtering by location type, or by location ID. </br>
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        location?: Location$9;
        /**
         * Whether the `TimeSlot` is bookable according to all of the services booking policies.
         *
         * If booking any of the `TimeSlot`.`NestedTimeSlot`s violates any of its services bookings policies,
         * returns as `false`. Otherwise, returns as `true`.
         *
         * > __Note:__
         * > A `TimeSlot` with a `NestedTimeSlot` that doesn't meet its service's bookings policies will be returned with `bookable` = false,
         * > while a `TimeSlot` with no available resources will not be returned at all.
         */
        bookable?: boolean | null;
        /**
         * Indicators for service's booking policy violations for booking the `TimeSlot`.
         *
         * A bookable time slot must not violate any policy,
         * therefor, this filter is only relevant when `bookable` filter is false.
         *
         * Each nested field is checked on all `NestedTimeSlot`s. For example, if only one of the `NestedTimeSlot`'s
         * has a service with `tooEarlyToBook` same as in the request, we return the `TimeSlot` regardless of whether
         * the other `NestedTimeSlots` has the same `tooEarlyToBook` as in request.
         *
         * Each nested field is checked on its own. For example, if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we return slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$3;
        /**
         * Maximum number of slots to load for each day. For example, if `timeSlotsPerDay` is set to `3`,
         * we return at most 3 available TimeSlots for each day within the date range specified in request.
         *
         * By default,
         * if `bookable` filter was not specified,
         * and a day has both `bookable` and `un-bookable` slots, `bookable` slots are returned first.
         *
         * If the number of `bookable` slots is less than the requested `timeSlotsPerDay`,
         * `un-bookable` slots will be returned according to the specified filters.
         */
        timeSlotsPerDay?: number | null;
        /**
         * CursorPaging.
         *
         * Enables you to fetch TimeSlots in smaller, more manageable chunks
         * by setting a limit on the number of results returned in response.
         * This is useful in order to enhance efficiency of data retrieval and reduce load on both the client and server.
         *
         * If there are more results than the specified limit, the response will contain a `cursorPagingMetaData`
         * with a cursor pointing to next page of results. In order to fetch the next page of results, you should pass the
         * returned cursor to the next call as `cursorPaging`.`cursor`.
         *
         * For the first call, you should only specify the `limit` for the results page.
         * For each following call, you should only pass the previous returned cursor as `cursorPaging`.`cursor`
         * the `cursorPaging`.`limit`. You may pass a different `limit`.
         * No need to specify any additional parameters.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * If you only provide a <code class="grey-background">cursorPaging</code>. <code class="grey-background">cursor</code>,
         * the response will contain the default size of results which is `1000`.
         * </p>
         * </blockquote>
         */
        cursorPaging?: CommonCursorPaging$2;
    }
    interface Service$4 {
        /** Service ID. */
        serviceId?: string;
        /** Resources to include in response. */
        resourceIds?: string[];
        /**
         * The resource type ID's to include in returned time slots.
         * This is in addition to the specifically requested resources.
         *
         * <blockquote class="important">
         * Currently supported only for Staff Member resource type.
         * Staff Member type ID: 1cd44cf8-756f-41c3-bd90-3e2ffcaf1155
         * </blockquote>
         */
        includeResourceTypeIds?: string[];
    }
    interface CommonCursorPaging$2 {
        /**
         * Number of results to load.
         *
         * Default: `1000`.
         * Max: `1000`.
         */
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
    interface ListMultiServiceAvailabilityTimeSlotsResponse$2 {
        /** Time slots. */
        timeSlots?: TimeSlot$2[];
        /**
         * Time zone, in IANA time zone format.
         * Shared for all TimeSlots in response.
         */
        timeZone?: string | null;
        /**
         * CursorPagingMetaData.
         * Contains information about the next page of results.
         *
         * By default,
         * if there are more than 1000 results,
         * the response will contain a `cursorPagingMetaData` with a cursor to the next page of results.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * <code class="grey-background">count</code> is not supported.</p>
         * </blockquote>
         */
        cursorPagingMetadata?: CommonCursorPagingMetadata$2;
    }
    interface CommonCursorPagingMetadata$2 {
        /** Offset that was requested. */
        cursors?: CommonCursors$2;
        /**
         * Indicates if there are more results after the current page.
         * If `true`, another page of results can be retrieved.
         * If `false`, this is the last page.
         */
        hasNext?: boolean | null;
    }
    interface CommonCursors$2 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface GetMultiServiceAvailabilityTimeSlotRequest$2 {
        /**
         * Services for which the multiService TimeSlots are being returned for.
         * Each service contains its own resources filters within.
         *
         * MinSize: 2.
         * MaxSize: 8.
         */
        services: Service$4[];
        /**
         * Local start date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate: string;
        /**
         * Local end date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate: string;
        /** Time zone, in IANA time zone format. */
        timeZone: string | null;
        /**
         * The location of the time slot.
         *
         * You must provide a specific `locationType`.
         * If locationType is `BUSINESS`, you __must__ also provide a `locationId`.
         *
         * <blockquote class="warning">
         * <p>Supports filtering by location type, or by location ID.
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        location: Location$9;
    }
    interface GetMultiServiceAvailabilityTimeSlotResponse$2 {
        /** Time slot. */
        timeSlot?: TimeSlot$2;
        /** The time zone, in IANA time zone format. */
        timeZone?: string | null;
    }
    interface ListAvailabilityTimeSlotsRequest$2 {
        /**
         * Service ID for which the time slots are being returned for.
         * Currently supported only for services of type `APPOINTMENT`.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        serviceId?: string | null;
        /**
         * Lower boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        fromLocalDate?: string | null;
        /**
         * Upper boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        toLocalDate?: string | null;
        /**
         * Time zone, in IANA time zone format.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        timeZone?: string | null;
        /**
         * Locations to include in response.
         *
         * By default,
         * if no locations are provided,
         * the response contains TimeSlots for all locations where the service is available.
         *
         * You can specify locations or location types for which the time slots will be returned for.
         * If locationType is `BUSINESS`, you __must__ provide a locationId.
         *
         * <blockquote class="warning">
         * <p><strong>warning:</strong><br/>
         * Supports filtering by location type, or by location ID. </br>
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        locations?: Location$9[];
        /**
         * Resources to include in response.
         *
         * If specified,
         * the returned TimeSlots will contain __up__ to 10 available resources out of the provided list.
         * Otherwise, the returned TimeSlots returns with an empty `AvailableResources`.
         */
        resourceIds?: string[];
        /**
         * Resource type ID's to include in response, this is in addition to the requested `resourceIds`.
         *
         * If specified in request, the returned TimeSlots will contain __up__ to 10 `AvailableResources` with `ResourceTypeId`
         * out of those specified, each contains __up__ to 10 available resources of this type.
         */
        includeResourceTypeIds?: string[];
        /**
         * Whether the `TimeSlot` is bookable according to the service's booking policies.
         *
         * If booking this `TimeSlot` does not violates any of the service's booking policies,
         * returns as `true`. Otherwise, returns as `false`.
         *
         * > __Note:__
         * > A time slot that doesn't meet the service's bookings policies will be returned with `bookable` = false,
         * > while a time slot with no available resources will not be returned at all.
         */
        bookable?: boolean | null;
        /**
         * Indicators for service's booking policy violations for booking the `TimeSlot`.
         *
         * A bookable time slot must not violate any policy,
         * therefor, this filter is only relevant when `bookable` filter is false.
         *
         * Each nested field is checked on its own. i.e. if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we return slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$3;
        /**
         * Maximum number of slots to load for each day. For example, if `timeSlotsPerDay` is set to `3`,
         * we return at most 3 available TimeSlots for each day within the date range specified in request.
         *
         * By default,
         * if `bookable` filter was not specified,
         * and a day has both `bookable` and `un-bookable` slots, `bookable` slots are returned first.
         *
         * If the number of `bookable` slots is less than the requested `timeSlotsPerDay`,
         * `un-bookable` slots will be returned according to the specified filters.
         */
        timeSlotsPerDay?: number | null;
        /**
         * CursorPaging.
         *
         * Enables you to fetch results in smaller, more manageable chunks
         * by setting a limit on the number of results returned in response.
         * This is useful in order to enhance efficiency of data retrieval and reduce load on both the client and server.
         *
         * If there are more results than the specified limit, the response will contain a `cursorPagingMetaData`
         * with a cursor pointing to next page of results. In order to fetch the next page of results, you should pass the
         * returned cursor to the next call as `cursorPaging`.`cursor`.
         *
         * For the first call, you should only specify the `limit` for the results page.
         * For each following call, you should only pass `cursorPaging`.`cursor` with the returned cursor from previous call, and
         * a `cursorPaging`.`limit`.
         * No need to specify any additional parameters.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * If you only provide a <code class="grey-background">cursorPaging</code>. <code class="grey-background">cursor</code>,
         * the response will contain the default size of results which is `1000`.
         * </p>
         * </blockquote>
         */
        cursorPaging?: CommonCursorPaging$2;
        /**
         * resources filter
         * If specified, only time slots with these resources will be returned.
         */
        resourceTypes?: ResourceType$3[];
    }
    /**
     * Selected customer choices.
     * These choices are selected by the customer during the booking flow and can be utilized to calculate the corresponding service's configuration properties.
     */
    interface CustomerChoices$2 {
        /**
         * The selected customer duration in minutes.
         * Min: `1 minute`
         * Max: `44639 minutes` (30 days, 23 hours, and 59 minutes)
         */
        durationInMinutes?: number | null;
    }
    interface ResourceType$3 {
        /** Resource type ID. */
        resourceTypeId?: string | null;
        /**
         * Resource IDs.
         * The response will contain only slots that have at least one of the specified resources.
         */
        resourceIds?: string[] | null;
    }
    interface ListAvailabilityTimeSlotsResponse$2 {
        /** Time slots. */
        timeSlots?: TimeSlot$2[];
        /**
         * Time zone, in IANA time zone format.
         * Shared for all TimeSlots in response.
         */
        timeZone?: string | null;
        /**
         * CursorPagingMetaData.
         * Contains information about the next page of results.
         *
         * By default,
         * if there are more than 1000 results,
         * the response will contain a `cursorPagingMetaData` with a cursor to the next page of results.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * <code class="grey-background">count</code> is not supported.</p>
         * </blockquote>
         */
        cursorPagingMetadata?: CommonCursorPagingMetadata$2;
    }
    interface GetAvailabilityTimeSlotRequest$2 {
        /**
         * Service ID of the time slot.
         * Currently supported only for services of type `APPOINTMENT`.
         */
        serviceId: string;
        /**
         * Local start date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate: string;
        /**
         * Local end date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate: string;
        /** Time zone, in IANA time zone format. */
        timeZone: string | null;
        /**
         * The location of the time slot.
         *
         * You must provide a specific `locationType`.
         * If locationType is `BUSINESS`, you __must__ also provide a `locationId`.
         *
         * <blockquote class="warning">
         * <p>Supports filtering by location type, or by location ID.
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        location: Location$9;
        /**
         * Resources to include in response.
         *
         * If specified,
         * the returned `TimeSlot` contains only the available resources out of provided list.
         * Otherwise, the returned `TimeSlot` returned with all possible `AvailableResources`.
         */
        resourceIds?: string[];
        /**
         * Resource type IDs to include in response, this is in addition to the requested `resourceIds`.
         *
         * If specified in request, the returned `TimeSlot` contains only the `AvailableResources` with `ResourceTypeId`
         * out of those specified, each contains all the available resources of this type.
         */
        includeResourceTypeIds?: string[];
    }
    interface GetAvailabilityTimeSlotResponse$2 {
        /** Time slot. */
        timeSlot?: TimeSlot$2;
        /** Time zone, in IANA time zone format. */
        timeZone?: string | null;
    }
    /**
     * Retrieves a list of `TimeSlot`s that match the provided filters.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong>
     * Currently supported only for services of type <code class="grey-background">APPOINTMENT</code>.</p>
     * </blockquote>
     *
     * The request body __must__ include either:
     * + All of the following filters:  `serviceId`, `fromLocalDate`, `toLocalDate`, and `timeZone`.
     * You may add additional filters as you wish.
     * + A `cursorPaging` with a valid `cursor` from previous response.
     *
     *
     * Each [TimeSlot](https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/availability-time-slots/time-slot-object) in response
     * represents the availability of the service in a specific location,
     * and has a `localStartDate` within the range of the provided `fromLocalDate` and `toLocalDate` exclusive.
     * The `localEndDate` of a `TimeSlot` is calculated as the sum of the `TimeSlot`'s `localStartDate` and the duration of the service.
     *
     * By default,
     * the response contains at most 1000 results.
     * If there are more than 1000 results, we return a `cursorPagingMetadata` with
     * a cursor for the next page of results, regardless of whether a `cursorPaging`
     * was provided in request.
     *
     * ### AvailableResources in response
     * The `TimeSlot`'s `AvailableResources` contains information about the resources that are available to provide the service
     * within the time slot. Each `AvailableResources` contains information about available resources of the same type.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong><br/>
     * By default,
     * if you don't specify <code class="grey-background">includeResourceTypeIds</code>
     * or <code class="grey-background">resourceIds</code> filters in request,
     * we return TimeSlots with an empty <code class="grey-background">AvailableResources</code>.
     * <br/><strong>Note:</strong><br/> Not specifying resources filters can be handy in case you want to avoid large response in flows that only
     * interested of whether the time slots are available. [Finding the next available slot within the next 3 months](https://bo.wix.com/wix-docs/rest/all-apis/service-availability/availability-time-slots/sample-flows?localViewerId=inbari#all-apis_service-availability_availability-time-slots_sample-flows_find-the-first-date-within-the-next-3-months-that-the-selected-service-is-available-for)
     * is an example for such flow.
     * </p>
     * </blockquote>
     *
     * If you wish to get a list of available resources for each `TimeSlot` you should either:
     * + provide `resourceIds` in request.
     * + provide `includeResourceTypeIds` in request.
     *
     * __Notes:__
     * + In both cases the returned TimeSlots contains  __up__ to 10 `AvailableResources` that match the provided filters.
     * Each `AvailableResources` contains __up__ to 10 available `resources` of the same type that match the provided filters.
     * + If an `AvailableResources` has more available resources which are not listed within it,
     * we return `AvailableResources`.`hasMoreAvailableResources` as true.
     * > __Note:__
     * > If you wish to get the full available resources list for a specific `TimeSlot`,
     * > you should call [GetAvailabilityTimeSlot](https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/service-availability-time-slots/get-availability-time-slot).
     *
     *
     * ### Availability VS Bookability
     * An `available` time slot is not necessarily `bookable`.
     * The `bookable` field of a `TimeSlot` indicates whether a customer can book the service within the given time slot,
     * at a specific period of time.
     * Read more about [Availability VS Bookability](https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/service-availability-time-slots/introduction#all-apis_wix-service-availability_service-availability-time-slots_introduction_availability-vs-bookability).
     *
     * By default,
     * + The response does not contains `unavailable` TimeSlots.
     * For example,
     * if there are no available resources to provide the service from `2024-01-30T14:30:00` to `2024-01-30T15:30:00`,
     * we don't return TimeSlots with `localStartDate` within this range.
     * + The response contains both `bookable` and `un-bookable` TimeSlots.
     * For example,
     * if the service has a booking policy which enforces booking the service up to 10 minutes before the session starts,
     * we return TimeSlots with the violating `localStartDate` with `bookable` as false.
     * If you wish to list only available __bookable__ TimeSlots you should pass `bookable` filter as true.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong>
     * Because of DST, there are edge cases where certain times either do not exist or exist twice for a local time zone.
     * Read more about <a href="https://bo.wix.com/wix-docs/rest/all-apis/service-availability/availability-time-slots/introduction?localViewerId=inbari#all-apis_service-availability_availability-time-slots_introduction_daylight-saving-time-dst-handling">DST Handling</a></p>
     * </blockquote>
     *
     *
     * ### ListAvailabilityTimeSlots runs with the following defaults
     * + `localStartDate` is sorted in `ASC` order
     * + `cursorPaging`.`limit` is `1000`
     * @public
     * @documentationMaturity preview
     */
    function listAvailabilityTimeSlots(options?: ListAvailabilityTimeSlotsOptions): Promise<ListAvailabilityTimeSlotsResponse$2>;
    interface ListAvailabilityTimeSlotsOptions {
        /**
         * Service ID for which the time slots are being returned for.
         * Currently supported only for services of type `APPOINTMENT`.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        serviceId?: string | null;
        /**
         * Lower boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        fromLocalDate?: string | null;
        /**
         * Upper boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        toLocalDate?: string | null;
        /**
         * Time zone, in IANA time zone format.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        timeZone?: string | null;
        /**
         * Locations to include in response.
         *
         * By default,
         * if no locations are provided,
         * the response contains TimeSlots for all locations where the service is available.
         *
         * You can specify locations or location types for which the time slots will be returned for.
         * If locationType is `BUSINESS`, you __must__ provide a locationId.
         *
         * <blockquote class="warning">
         * <p><strong>warning:</strong><br/>
         * Supports filtering by location type, or by location ID. </br>
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        locations?: Location$9[];
        /**
         * Resources to include in response.
         *
         * If specified,
         * the returned TimeSlots will contain __up__ to 10 available resources out of the provided list.
         * Otherwise, the returned TimeSlots returns with an empty `AvailableResources`.
         */
        resourceIds?: string[];
        /**
         * Resource type ID's to include in response, this is in addition to the requested `resourceIds`.
         *
         * If specified in request, the returned TimeSlots will contain __up__ to 10 `AvailableResources` with `ResourceTypeId`
         * out of those specified, each contains __up__ to 10 available resources of this type.
         */
        includeResourceTypeIds?: string[];
        /**
         * Whether the `TimeSlot` is bookable according to the service's booking policies.
         *
         * If booking this `TimeSlot` does not violates any of the service's booking policies,
         * returns as `true`. Otherwise, returns as `false`.
         *
         * > __Note:__
         * > A time slot that doesn't meet the service's bookings policies will be returned with `bookable` = false,
         * > while a time slot with no available resources will not be returned at all.
         */
        bookable?: boolean | null;
        /**
         * Indicators for service's booking policy violations for booking the `TimeSlot`.
         *
         * A bookable time slot must not violate any policy,
         * therefor, this filter is only relevant when `bookable` filter is false.
         *
         * Each nested field is checked on its own. i.e. if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we return slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$3;
        /**
         * Maximum number of slots to load for each day. For example, if `timeSlotsPerDay` is set to `3`,
         * we return at most 3 available TimeSlots for each day within the date range specified in request.
         *
         * By default,
         * if `bookable` filter was not specified,
         * and a day has both `bookable` and `un-bookable` slots, `bookable` slots are returned first.
         *
         * If the number of `bookable` slots is less than the requested `timeSlotsPerDay`,
         * `un-bookable` slots will be returned according to the specified filters.
         */
        timeSlotsPerDay?: number | null;
        /**
         * CursorPaging.
         *
         * Enables you to fetch results in smaller, more manageable chunks
         * by setting a limit on the number of results returned in response.
         * This is useful in order to enhance efficiency of data retrieval and reduce load on both the client and server.
         *
         * If there are more results than the specified limit, the response will contain a `cursorPagingMetaData`
         * with a cursor pointing to next page of results. In order to fetch the next page of results, you should pass the
         * returned cursor to the next call as `cursorPaging`.`cursor`.
         *
         * For the first call, you should only specify the `limit` for the results page.
         * For each following call, you should only pass `cursorPaging`.`cursor` with the returned cursor from previous call, and
         * a `cursorPaging`.`limit`.
         * No need to specify any additional parameters.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * If you only provide a <code class="grey-background">cursorPaging</code>. <code class="grey-background">cursor</code>,
         * the response will contain the default size of results which is `1000`.
         * </p>
         * </blockquote>
         */
        cursorPaging?: CommonCursorPaging$2;
        /**
         * resources filter
         * If specified, only time slots with these resources will be returned.
         */
        resourceTypes?: ResourceType$3[];
    }
    /**
     * Retrieves an available `TimeSlot` that match the provided filters.
     *
     * Throws `SlotNotFound` if there is no such available time slot.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong><br/>
     * Currently supported only for services of type <code class="grey-background">APPOINTMENT</code>.</p>
     * </blockquote>
     *
     * By default,
     * if you don't provide `includeResourceTypeIds` or `resourceIds` in request,
     * we return all `AvailableResources` with all `AvailableResources`.`resources` which are available to provide
     * the service within the time slot.
     *
     * If you specify `includeResourceTypeIds` or `resourceIds` in request,
     * the returned `TimeSlot` will contain only `AvailableResources` with at least one available resource
     * which match the given resources filters,
     * each contains all available resources out of those requested.
     *
     *
     * <blockquote class="tip">
     * <p><strong>Tip:</strong><br/>
     * Use this API in order to get the availability of a specific <code class="grey-background">TimeSlot</code> out of those returned from  <code class="grey-background">ListAvailabilityTimeSlots</code> API.</p>
     * </blockquote>
     * @param serviceId - Service ID of the time slot.
     * Currently supported only for services of type `APPOINTMENT`.
     * @param localStartDate - Local start date of the time slot, in ISO-8601 format.
     * For example, "2024-01-30T13:30:00".
     * @param localEndDate - Local end date of the time slot, in ISO-8601 format.
     * For example, "2024-01-30T14:30:00".
     * @param timeZone - Time zone, in IANA time zone format.
     * @param location - The location of the time slot.
     *
     * You must provide a specific `locationType`.
     * If locationType is `BUSINESS`, you __must__ also provide a `locationId`.
     *
     * <blockquote class="warning">
     * <p>Supports filtering by location type, or by location ID.
     * Other fields like <code class="grey-background">name</code> are ignored.</p>
     * </blockquote>
     * @public
     * @documentationMaturity preview
     * @requiredField localEndDate
     * @requiredField localStartDate
     * @requiredField location
     * @requiredField serviceId
     * @requiredField timeZone
     */
    function getAvailabilityTimeSlot(serviceId: string, localStartDate: string, localEndDate: string, timeZone: string | null, location: Location$9, options?: GetAvailabilityTimeSlotOptions): Promise<GetAvailabilityTimeSlotResponse$2>;
    interface GetAvailabilityTimeSlotOptions {
        /**
         * Resources to include in response.
         *
         * If specified,
         * the returned `TimeSlot` contains only the available resources out of provided list.
         * Otherwise, the returned `TimeSlot` returned with all possible `AvailableResources`.
         */
        resourceIds?: string[];
        /**
         * Resource type IDs to include in response, this is in addition to the requested `resourceIds`.
         *
         * If specified in request, the returned `TimeSlot` contains only the `AvailableResources` with `ResourceTypeId`
         * out of those specified, each contains all the available resources of this type.
         */
        includeResourceTypeIds?: string[];
    }
    const bookingsAvailabilityV2TimeSlotAvailabilityTimeSlots_universal_d_listAvailabilityTimeSlots: typeof listAvailabilityTimeSlots;
    type bookingsAvailabilityV2TimeSlotAvailabilityTimeSlots_universal_d_ListAvailabilityTimeSlotsOptions = ListAvailabilityTimeSlotsOptions;
    const bookingsAvailabilityV2TimeSlotAvailabilityTimeSlots_universal_d_getAvailabilityTimeSlot: typeof getAvailabilityTimeSlot;
    type bookingsAvailabilityV2TimeSlotAvailabilityTimeSlots_universal_d_GetAvailabilityTimeSlotOptions = GetAvailabilityTimeSlotOptions;
    namespace bookingsAvailabilityV2TimeSlotAvailabilityTimeSlots_universal_d {
        export { TimeSlot$2 as TimeSlot, Location$9 as Location, LocationType$9 as LocationType, EventInfo$2 as EventInfo, WaitingList$3 as WaitingList, BookingPolicyViolations$3 as BookingPolicyViolations, AvailableResources$3 as AvailableResources, Resource$5 as Resource, NestedTimeSlot$2 as NestedTimeSlot, CalculateEventBasedAvailabilityRequest$2 as CalculateEventBasedAvailabilityRequest, CursorPaging$9 as CursorPaging, CalculateEventBasedAvailabilityResponse$2 as CalculateEventBasedAvailabilityResponse, CursorPagingMetadata$6 as CursorPagingMetadata, Cursors$9 as Cursors, ListEventTimeSlotsRequest$2 as ListEventTimeSlotsRequest, ListEventTimeSlotsResponse$2 as ListEventTimeSlotsResponse, ListMultiServiceAvailabilityTimeSlotsRequest$2 as ListMultiServiceAvailabilityTimeSlotsRequest, Service$4 as Service, CommonCursorPaging$2 as CommonCursorPaging, ListMultiServiceAvailabilityTimeSlotsResponse$2 as ListMultiServiceAvailabilityTimeSlotsResponse, CommonCursorPagingMetadata$2 as CommonCursorPagingMetadata, CommonCursors$2 as CommonCursors, GetMultiServiceAvailabilityTimeSlotRequest$2 as GetMultiServiceAvailabilityTimeSlotRequest, GetMultiServiceAvailabilityTimeSlotResponse$2 as GetMultiServiceAvailabilityTimeSlotResponse, ListAvailabilityTimeSlotsRequest$2 as ListAvailabilityTimeSlotsRequest, CustomerChoices$2 as CustomerChoices, ResourceType$3 as ResourceType, ListAvailabilityTimeSlotsResponse$2 as ListAvailabilityTimeSlotsResponse, GetAvailabilityTimeSlotRequest$2 as GetAvailabilityTimeSlotRequest, GetAvailabilityTimeSlotResponse$2 as GetAvailabilityTimeSlotResponse, bookingsAvailabilityV2TimeSlotAvailabilityTimeSlots_universal_d_listAvailabilityTimeSlots as listAvailabilityTimeSlots, bookingsAvailabilityV2TimeSlotAvailabilityTimeSlots_universal_d_ListAvailabilityTimeSlotsOptions as ListAvailabilityTimeSlotsOptions, bookingsAvailabilityV2TimeSlotAvailabilityTimeSlots_universal_d_getAvailabilityTimeSlot as getAvailabilityTimeSlot, bookingsAvailabilityV2TimeSlotAvailabilityTimeSlots_universal_d_GetAvailabilityTimeSlotOptions as GetAvailabilityTimeSlotOptions, };
    }
    /**
     * The `TimeSlot` object represents the availability information
     * for an `Appointment` service's specific slot, including:
     *
     * 1. Whether the slot is bookable for the given service?
     *
     * 2. In what location the service is available for this slot?
     *
     * 3. Which available resources can provide the service for this slot?
     *
     * 4. Does booking the slot for the service violates any of the service booking policies?
     *
     * 5. What is the total capacity and remaining capacity of the service at the time of the calculation of the `TimeSlot`?
     *
     * > __Note:__
     * > When the `TimeSlot` has a non empty `NestedTimeSlots`, it represents the availability information
     * > for a given list of `Appointment` services within a specific time slot.
     */
    interface TimeSlot$1 {
        /**
         * Service ID.
         *
         * > Not returned from `MultiServiceAvailabilityTimeSlots` API calls.
         * > Instead, each nested time slot has its own serviceId.
         */
        serviceId?: string | null;
        /**
         * Local start date of the time slot in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate?: string | null;
        /**
         * Local end date of the time slot in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate?: string | null;
        /**
         * Whether the slot is bookable according to the service's booking policies.
         *
         * If booking this time slot does not violates any of the service's booking policies,
         * the returned value is `true`. Otherwise, returns `false`.
         */
        bookable?: boolean | null;
        /** The geographic location of the slot. */
        location?: Location$8;
        /** Total number of spots for the slot. */
        totalCapacity?: number | null;
        /**
         * Remaining number of spots for the slot.
         * For example, for an appointment service with total capacity of 1 spot and one booked spot, the remaining capacity will be 0.
         */
        remainingCapacity?: number | null;
        /**
         * Indicators for booking policy violations for the slot.
         *
         * Each nested field is checked on its own. i.e. if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we will return also slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$2;
        /**
         * List of `AvailableResources` for the time slot.
         * Each `AvailableResources` contains information about available resources of the same type.
         *
         * > Not returned from `MultiServiceAvailabilityTimeSlots` API calls.
         * > Instead, each nested time slot has its own available resources.
         */
        availableResources?: AvailableResources$2[];
        /**
         * > Nested time slots.
         * > Returned only from `MultiServiceAvailabilityTimeSlots` API calls.
         */
        nestedTimeSlots?: NestedTimeSlot$1[];
    }
    interface Location$8 {
        /** Business Location ID. Present only if the location is a business location. */
        _id?: string | null;
        /** The location name. */
        name?: string | null;
        /** A string representation for the full address of the location. */
        formattedAddress?: string | null;
        /**
         * The type of location:
         * - `CUSTOM`: The location is specific to this service, and is not derived from the business location.
         * - `BUSINESS`: A business location, either the default business address, or locations defined for the business by the Business Info.
         * - `CUSTOMER`: The location is determined by the customer and is not set up beforehand.
         */
        locationType?: LocationType$8;
    }
    enum LocationType$8 {
        UNKNOWN_LOCATION_TYPE = "UNKNOWN_LOCATION_TYPE",
        /** A business location, either the default business address, or locations defined for the business by the Business Info. */
        BUSINESS = "BUSINESS",
        /** The location is unique to this service and isn't defined as one of the business locations. */
        CUSTOM = "CUSTOM",
        /** The location can be determined by the customer and is not set up beforehand. */
        CUSTOMER = "CUSTOMER"
    }
    /** relevant for event based slots, and not for availability based slots */
    interface EventInfo$1 {
    }
    interface WaitingList$2 {
        /** Total number of spots in this wait list. */
        totalCapacity?: number | null;
        /**
         * Number of remaining spots for this wait list.
         * For example, a Yoga event with 10 waitList spots and 3 registered
         * on the waitList has 10 `total_capacity` and 7 `remaining_capacity`.
         */
        remainingCapacity?: number | null;
    }
    interface BookingPolicyViolations$2 {
        /** Bookings policy violation. Too early to book this slot. */
        tooEarlyToBook?: boolean | null;
        /** Bookings policy violation. Too late to book this slot. */
        tooLateToBook?: boolean | null;
        /** Bookings policy violation. Online booking is disabled for the `TimeSlot` service. */
        bookOnlineDisabled?: boolean | null;
    }
    interface AvailableResources$2 {
        /** Resource type ID. */
        resourceTypeId?: string | null;
        /**
         * Available resources for the time slot.
         *
         * + When returned from `ListAvailabilityTimeSlots`, empty by default.
         * + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * contains __up__ to 10 available resources out of those provided.
         *
         * + When returned from `GetAvailabilityTimeSlots`, contains all available resources by default.
         * + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * contains all of the available resources out of those provided.
         *
         *
         * > + When returned from `ListMultiServiceAvailabilityTimeSlots`, empty by default.
         * > + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * > contains __up__ to 10 available resources out of those provided.
         *
         * > + When returned from `GetMultiServiceAvailabilityTimeSlots`, contains all available resources by default.
         * > + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * > contains all of the available resources out of those provided.
         */
        resources?: Resource$4[];
        /**
         * Whether there are more available resources for the slot that are not listed in `resources` due to size limitations.
         * @readonly
         */
        hasMoreAvailableResources?: boolean | null;
    }
    interface Resource$4 {
        /** Resource ID. */
        _id?: string;
        /** Resource name. */
        name?: string | null;
    }
    interface NestedTimeSlot$1 {
        /** Service ID of the nested time slot. */
        serviceId?: string;
        /**
         * Local start date of the nested time slot in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate?: string;
        /**
         * Local end date of the nested time slot in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate?: string;
        /**
         * List of `AvailableResources` for the nested time slot.
         * Each `AvailableResources` contains information about available resources of the same type.
         */
        availableResources?: AvailableResources$2[];
    }
    interface CalculateEventBasedAvailabilityRequest$1 {
        serviceIds: string[];
        from: string;
        to: string;
        timeZone: string;
        /**
         * TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006
         * TODO: Locks are not taken into account. // Class is not supported yet. (relevant only for classes with waiting list)
         * Aliza's suggestion to consider locks in bookable
         */
        bookable?: boolean | null;
        /** support filtering by location type, or by locationId. Other fields like `name` are ignored */
        location?: Location$8[];
        resourceIds?: string[];
        /** if not empty, return slots with openSpots >= X */
        openSpots?: number | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$2;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        slotsPerDay?: number | null;
        cursorPaging?: CursorPaging$8;
    }
    interface CursorPaging$8 {
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
    interface CalculateEventBasedAvailabilityResponse$1 {
        slots?: TimeSlot$1[];
        cursorPagingMetadata?: CursorPagingMetadata$5;
    }
    interface CursorPagingMetadata$5 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Cursor strings that point to the next page, previous page, or both. */
        cursors?: Cursors$8;
        /**
         * Whether there are more pages to retrieve following the current page.
         *
         * + `true`: Another page of results can be retrieved.
         * + `false`: This is the last page.
         */
        hasNext?: boolean | null;
    }
    interface Cursors$8 {
        /** Cursor string pointing to the next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to the previous page in the list of results. */
        prev?: string | null;
    }
    interface ListEventTimeSlotsRequest$1 {
        /** The services for which the time slots are being returned. */
        serviceIds: string[] | null;
        /**
         * Local start date for which event time slots are returned, in ISO-8601 format.
         * E.g, "2024-01-30T13:30:00".
         * Required, unless `cursorPaging` is provided.
         */
        fromLocalDate: string | null;
        /**
         * Local end date for which event time slots are returned, in ISO-8601 format.
         * E.g, "2024-01-30T13:30:00".
         * Required, unless `cursorPaging` is provided.
         */
        toLocalDate: string | null;
        /**
         * The time zone, in IANA time zone format.
         * Default is the Wix Business time zone.
         */
        timeZone: string | null;
        /** TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006 */
        bookable?: boolean | null;
        /** support filtering by location type, or by locationId. Other fields like `name` are ignored */
        location?: Location$8[];
        /** TODO: maxsize && do we need include_resource_type_id here? also is the behavior is the same as availabilityTimeSlots, we won't return resources by default? */
        resourceIds?: string[] | null;
        /** if not empty, return slots with remainingCapacity >= X */
        remainingCapacity?: number | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$2;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        timeSlotsPerDay?: number | null;
        cursorPaging?: CursorPaging$8;
    }
    interface ListEventTimeSlotsResponse$1 {
        /** TODO: maxsize */
        timeSlots?: TimeSlot$1[];
        /** The time zone, in IANA time zone format. */
        timeZone?: string | null;
        cursorPagingMetadata?: CursorPagingMetadata$5;
    }
    interface ListMultiServiceAvailabilityTimeSlotsRequest$1 {
        /**
         * Services for which the multiService time slots are being returned for.
         * Each service contains its own resources filters within.
         *
         * MinSize: `2`.
         * MaxSize: `8`.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        services?: Service$3[];
        /**
         * Lower boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        fromLocalDate?: string | null;
        /**
         * Upper boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        toLocalDate?: string | null;
        /**
         * Time zone, in IANA time zone format.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        timeZone?: string | null;
        /**
         * Location for which the multiService TimeSlots are being returned for.
         *
         * You can specify location or location type for which the TimeSlots will be returned for.
         * If locationType is `BUSINESS`, you __must__ provide a locationId.
         *
         * <blockquote class="warning">
         * <p><strong>warning:</strong><br/>
         * Supports filtering by location type, or by location ID. </br>
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        location?: Location$8;
        /**
         * Whether the `TimeSlot` is bookable according to all of the services booking policies.
         *
         * If booking any of the `TimeSlot`.`NestedTimeSlot`s violates any of its services bookings policies,
         * returns as `false`. Otherwise, returns as `true`.
         *
         * > __Note:__
         * > A `TimeSlot` with a `NestedTimeSlot` that doesn't meet its service's bookings policies will be returned with `bookable` = false,
         * > while a `TimeSlot` with no available resources will not be returned at all.
         */
        bookable?: boolean | null;
        /**
         * Indicators for service's booking policy violations for booking the `TimeSlot`.
         *
         * A bookable time slot must not violate any policy,
         * therefor, this filter is only relevant when `bookable` filter is false.
         *
         * Each nested field is checked on all `NestedTimeSlot`s. For example, if only one of the `NestedTimeSlot`'s
         * has a service with `tooEarlyToBook` same as in the request, we return the `TimeSlot` regardless of whether
         * the other `NestedTimeSlots` has the same `tooEarlyToBook` as in request.
         *
         * Each nested field is checked on its own. For example, if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we return slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$2;
        /**
         * Maximum number of slots to load for each day. For example, if `timeSlotsPerDay` is set to `3`,
         * we return at most 3 available TimeSlots for each day within the date range specified in request.
         *
         * By default,
         * if `bookable` filter was not specified,
         * and a day has both `bookable` and `un-bookable` slots, `bookable` slots are returned first.
         *
         * If the number of `bookable` slots is less than the requested `timeSlotsPerDay`,
         * `un-bookable` slots will be returned according to the specified filters.
         */
        timeSlotsPerDay?: number | null;
        /**
         * CursorPaging.
         *
         * Enables you to fetch TimeSlots in smaller, more manageable chunks
         * by setting a limit on the number of results returned in response.
         * This is useful in order to enhance efficiency of data retrieval and reduce load on both the client and server.
         *
         * If there are more results than the specified limit, the response will contain a `cursorPagingMetaData`
         * with a cursor pointing to next page of results. In order to fetch the next page of results, you should pass the
         * returned cursor to the next call as `cursorPaging`.`cursor`.
         *
         * For the first call, you should only specify the `limit` for the results page.
         * For each following call, you should only pass the previous returned cursor as `cursorPaging`.`cursor`
         * the `cursorPaging`.`limit`. You may pass a different `limit`.
         * No need to specify any additional parameters.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * If you only provide a <code class="grey-background">cursorPaging</code>. <code class="grey-background">cursor</code>,
         * the response will contain the default size of results which is `1000`.
         * </p>
         * </blockquote>
         */
        cursorPaging?: CommonCursorPaging$1;
    }
    interface Service$3 {
        /** Service ID. */
        serviceId?: string;
        /** Resources to include in response. */
        resourceIds?: string[];
        /**
         * The resource type ID's to include in returned time slots.
         * This is in addition to the specifically requested resources.
         *
         * <blockquote class="important">
         * Currently supported only for Staff Member resource type.
         * Staff Member type ID: 1cd44cf8-756f-41c3-bd90-3e2ffcaf1155
         * </blockquote>
         */
        includeResourceTypeIds?: string[];
    }
    interface CommonCursorPaging$1 {
        /**
         * Number of results to load.
         *
         * Default: `1000`.
         * Max: `1000`.
         */
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
    interface ListMultiServiceAvailabilityTimeSlotsResponse$1 {
        /** Time slots. */
        timeSlots?: TimeSlot$1[];
        /**
         * Time zone, in IANA time zone format.
         * Shared for all TimeSlots in response.
         */
        timeZone?: string | null;
        /**
         * CursorPagingMetaData.
         * Contains information about the next page of results.
         *
         * By default,
         * if there are more than 1000 results,
         * the response will contain a `cursorPagingMetaData` with a cursor to the next page of results.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * <code class="grey-background">count</code> is not supported.</p>
         * </blockquote>
         */
        cursorPagingMetadata?: CommonCursorPagingMetadata$1;
    }
    interface CommonCursorPagingMetadata$1 {
        /** Offset that was requested. */
        cursors?: CommonCursors$1;
        /**
         * Indicates if there are more results after the current page.
         * If `true`, another page of results can be retrieved.
         * If `false`, this is the last page.
         */
        hasNext?: boolean | null;
    }
    interface CommonCursors$1 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface GetMultiServiceAvailabilityTimeSlotRequest$1 {
        /**
         * Services for which the multiService TimeSlots are being returned for.
         * Each service contains its own resources filters within.
         *
         * MinSize: 2.
         * MaxSize: 8.
         */
        services: Service$3[];
        /**
         * Local start date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate: string;
        /**
         * Local end date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate: string;
        /** Time zone, in IANA time zone format. */
        timeZone: string | null;
        /**
         * The location of the time slot.
         *
         * You must provide a specific `locationType`.
         * If locationType is `BUSINESS`, you __must__ also provide a `locationId`.
         *
         * <blockquote class="warning">
         * <p>Supports filtering by location type, or by location ID.
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        location: Location$8;
    }
    interface GetMultiServiceAvailabilityTimeSlotResponse$1 {
        /** Time slot. */
        timeSlot?: TimeSlot$1;
        /** The time zone, in IANA time zone format. */
        timeZone?: string | null;
    }
    interface ListAvailabilityTimeSlotsRequest$1 {
        /**
         * Service ID for which the time slots are being returned for.
         * Currently supported only for services of type `APPOINTMENT`.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        serviceId?: string | null;
        /**
         * Lower boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        fromLocalDate?: string | null;
        /**
         * Upper boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        toLocalDate?: string | null;
        /**
         * Time zone, in IANA time zone format.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        timeZone?: string | null;
        /**
         * Locations to include in response.
         *
         * By default,
         * if no locations are provided,
         * the response contains TimeSlots for all locations where the service is available.
         *
         * You can specify locations or location types for which the time slots will be returned for.
         * If locationType is `BUSINESS`, you __must__ provide a locationId.
         *
         * <blockquote class="warning">
         * <p><strong>warning:</strong><br/>
         * Supports filtering by location type, or by location ID. </br>
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        locations?: Location$8[];
        /**
         * Resources to include in response.
         *
         * If specified,
         * the returned TimeSlots will contain __up__ to 10 available resources out of the provided list.
         * Otherwise, the returned TimeSlots returns with an empty `AvailableResources`.
         */
        resourceIds?: string[];
        /**
         * Resource type ID's to include in response, this is in addition to the requested `resourceIds`.
         *
         * If specified in request, the returned TimeSlots will contain __up__ to 10 `AvailableResources` with `ResourceTypeId`
         * out of those specified, each contains __up__ to 10 available resources of this type.
         */
        includeResourceTypeIds?: string[];
        /**
         * Whether the `TimeSlot` is bookable according to the service's booking policies.
         *
         * If booking this `TimeSlot` does not violates any of the service's booking policies,
         * returns as `true`. Otherwise, returns as `false`.
         *
         * > __Note:__
         * > A time slot that doesn't meet the service's bookings policies will be returned with `bookable` = false,
         * > while a time slot with no available resources will not be returned at all.
         */
        bookable?: boolean | null;
        /**
         * Indicators for service's booking policy violations for booking the `TimeSlot`.
         *
         * A bookable time slot must not violate any policy,
         * therefor, this filter is only relevant when `bookable` filter is false.
         *
         * Each nested field is checked on its own. i.e. if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we return slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$2;
        /**
         * Maximum number of slots to load for each day. For example, if `timeSlotsPerDay` is set to `3`,
         * we return at most 3 available TimeSlots for each day within the date range specified in request.
         *
         * By default,
         * if `bookable` filter was not specified,
         * and a day has both `bookable` and `un-bookable` slots, `bookable` slots are returned first.
         *
         * If the number of `bookable` slots is less than the requested `timeSlotsPerDay`,
         * `un-bookable` slots will be returned according to the specified filters.
         */
        timeSlotsPerDay?: number | null;
        /**
         * CursorPaging.
         *
         * Enables you to fetch results in smaller, more manageable chunks
         * by setting a limit on the number of results returned in response.
         * This is useful in order to enhance efficiency of data retrieval and reduce load on both the client and server.
         *
         * If there are more results than the specified limit, the response will contain a `cursorPagingMetaData`
         * with a cursor pointing to next page of results. In order to fetch the next page of results, you should pass the
         * returned cursor to the next call as `cursorPaging`.`cursor`.
         *
         * For the first call, you should only specify the `limit` for the results page.
         * For each following call, you should only pass `cursorPaging`.`cursor` with the returned cursor from previous call, and
         * a `cursorPaging`.`limit`.
         * No need to specify any additional parameters.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * If you only provide a <code class="grey-background">cursorPaging</code>. <code class="grey-background">cursor</code>,
         * the response will contain the default size of results which is `1000`.
         * </p>
         * </blockquote>
         */
        cursorPaging?: CommonCursorPaging$1;
        /**
         * resources filter
         * If specified, only time slots with these resources will be returned.
         */
        resourceTypes?: ResourceType$2[];
    }
    /**
     * Selected customer choices.
     * These choices are selected by the customer during the booking flow and can be utilized to calculate the corresponding service's configuration properties.
     */
    interface CustomerChoices$1 {
        /**
         * The selected customer duration in minutes.
         * Min: `1 minute`
         * Max: `44639 minutes` (30 days, 23 hours, and 59 minutes)
         */
        durationInMinutes?: number | null;
    }
    interface ResourceType$2 {
        /** Resource type ID. */
        resourceTypeId?: string | null;
        /**
         * Resource IDs.
         * The response will contain only slots that have at least one of the specified resources.
         */
        resourceIds?: string[] | null;
    }
    interface ListAvailabilityTimeSlotsResponse$1 {
        /** Time slots. */
        timeSlots?: TimeSlot$1[];
        /**
         * Time zone, in IANA time zone format.
         * Shared for all TimeSlots in response.
         */
        timeZone?: string | null;
        /**
         * CursorPagingMetaData.
         * Contains information about the next page of results.
         *
         * By default,
         * if there are more than 1000 results,
         * the response will contain a `cursorPagingMetaData` with a cursor to the next page of results.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * <code class="grey-background">count</code> is not supported.</p>
         * </blockquote>
         */
        cursorPagingMetadata?: CommonCursorPagingMetadata$1;
    }
    interface GetAvailabilityTimeSlotRequest$1 {
        /**
         * Service ID of the time slot.
         * Currently supported only for services of type `APPOINTMENT`.
         */
        serviceId: string;
        /**
         * Local start date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate: string;
        /**
         * Local end date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate: string;
        /** Time zone, in IANA time zone format. */
        timeZone: string | null;
        /**
         * The location of the time slot.
         *
         * You must provide a specific `locationType`.
         * If locationType is `BUSINESS`, you __must__ also provide a `locationId`.
         *
         * <blockquote class="warning">
         * <p>Supports filtering by location type, or by location ID.
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        location: Location$8;
        /**
         * Resources to include in response.
         *
         * If specified,
         * the returned `TimeSlot` contains only the available resources out of provided list.
         * Otherwise, the returned `TimeSlot` returned with all possible `AvailableResources`.
         */
        resourceIds?: string[];
        /**
         * Resource type IDs to include in response, this is in addition to the requested `resourceIds`.
         *
         * If specified in request, the returned `TimeSlot` contains only the `AvailableResources` with `ResourceTypeId`
         * out of those specified, each contains all the available resources of this type.
         */
        includeResourceTypeIds?: string[];
    }
    interface GetAvailabilityTimeSlotResponse$1 {
        /** Time slot. */
        timeSlot?: TimeSlot$1;
        /** Time zone, in IANA time zone format. */
        timeZone?: string | null;
    }
    interface CalculateEventBasedAvailabilityOptions {
        from: string;
        to: string;
        timeZone: string;
        /**
         * TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006
         * TODO: Locks are not taken into account. // Class is not supported yet. (relevant only for classes with waiting list)
         * Aliza's suggestion to consider locks in bookable
         */
        bookable?: boolean | null;
        /** support filtering by location type, or by locationId. Other fields like `name` are ignored */
        location?: Location$8[];
        resourceIds?: string[];
        /** if not empty, return slots with openSpots >= X */
        openSpots?: number | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$2;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        slotsPerDay?: number | null;
        cursorPaging?: CursorPaging$8;
    }
    interface ListEventTimeSlotsOptions {
        /**
         * Local start date for which event time slots are returned, in ISO-8601 format.
         * E.g, "2024-01-30T13:30:00".
         * Required, unless `cursorPaging` is provided.
         */
        fromLocalDate: string | null;
        /**
         * Local end date for which event time slots are returned, in ISO-8601 format.
         * E.g, "2024-01-30T13:30:00".
         * Required, unless `cursorPaging` is provided.
         */
        toLocalDate: string | null;
        /**
         * The time zone, in IANA time zone format.
         * Default is the Wix Business time zone.
         */
        timeZone: string | null;
        /** TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006 */
        bookable?: boolean | null;
        /** support filtering by location type, or by locationId. Other fields like `name` are ignored */
        location?: Location$8[];
        /** TODO: maxsize && do we need include_resource_type_id here? also is the behavior is the same as availabilityTimeSlots, we won't return resources by default? */
        resourceIds?: string[] | null;
        /** if not empty, return slots with remainingCapacity >= X */
        remainingCapacity?: number | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$2;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        timeSlotsPerDay?: number | null;
        cursorPaging?: CursorPaging$8;
    }
    type bookingsAvailabilityV2TimeSlotEventTimeSlots_universal_d_CalculateEventBasedAvailabilityOptions = CalculateEventBasedAvailabilityOptions;
    type bookingsAvailabilityV2TimeSlotEventTimeSlots_universal_d_ListEventTimeSlotsOptions = ListEventTimeSlotsOptions;
    namespace bookingsAvailabilityV2TimeSlotEventTimeSlots_universal_d {
        export { TimeSlot$1 as TimeSlot, Location$8 as Location, LocationType$8 as LocationType, EventInfo$1 as EventInfo, WaitingList$2 as WaitingList, BookingPolicyViolations$2 as BookingPolicyViolations, AvailableResources$2 as AvailableResources, Resource$4 as Resource, NestedTimeSlot$1 as NestedTimeSlot, CalculateEventBasedAvailabilityRequest$1 as CalculateEventBasedAvailabilityRequest, CursorPaging$8 as CursorPaging, CalculateEventBasedAvailabilityResponse$1 as CalculateEventBasedAvailabilityResponse, CursorPagingMetadata$5 as CursorPagingMetadata, Cursors$8 as Cursors, ListEventTimeSlotsRequest$1 as ListEventTimeSlotsRequest, ListEventTimeSlotsResponse$1 as ListEventTimeSlotsResponse, ListMultiServiceAvailabilityTimeSlotsRequest$1 as ListMultiServiceAvailabilityTimeSlotsRequest, Service$3 as Service, CommonCursorPaging$1 as CommonCursorPaging, ListMultiServiceAvailabilityTimeSlotsResponse$1 as ListMultiServiceAvailabilityTimeSlotsResponse, CommonCursorPagingMetadata$1 as CommonCursorPagingMetadata, CommonCursors$1 as CommonCursors, GetMultiServiceAvailabilityTimeSlotRequest$1 as GetMultiServiceAvailabilityTimeSlotRequest, GetMultiServiceAvailabilityTimeSlotResponse$1 as GetMultiServiceAvailabilityTimeSlotResponse, ListAvailabilityTimeSlotsRequest$1 as ListAvailabilityTimeSlotsRequest, CustomerChoices$1 as CustomerChoices, ResourceType$2 as ResourceType, ListAvailabilityTimeSlotsResponse$1 as ListAvailabilityTimeSlotsResponse, GetAvailabilityTimeSlotRequest$1 as GetAvailabilityTimeSlotRequest, GetAvailabilityTimeSlotResponse$1 as GetAvailabilityTimeSlotResponse, bookingsAvailabilityV2TimeSlotEventTimeSlots_universal_d_CalculateEventBasedAvailabilityOptions as CalculateEventBasedAvailabilityOptions, bookingsAvailabilityV2TimeSlotEventTimeSlots_universal_d_ListEventTimeSlotsOptions as ListEventTimeSlotsOptions, };
    }
    /**
     * The `TimeSlot` object represents the availability information
     * for an `Appointment` service's specific slot, including:
     *
     * 1. Whether the slot is bookable for the given service?
     *
     * 2. In what location the service is available for this slot?
     *
     * 3. Which available resources can provide the service for this slot?
     *
     * 4. Does booking the slot for the service violates any of the service booking policies?
     *
     * 5. What is the total capacity and remaining capacity of the service at the time of the calculation of the `TimeSlot`?
     *
     * > __Note:__
     * > When the `TimeSlot` has a non empty `NestedTimeSlots`, it represents the availability information
     * > for a given list of `Appointment` services within a specific time slot.
     */
    interface TimeSlot {
        /**
         * Service ID.
         *
         * > Not returned from `MultiServiceAvailabilityTimeSlots` API calls.
         * > Instead, each nested time slot has its own serviceId.
         */
        serviceId?: string | null;
        /**
         * Local start date of the time slot in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate?: string | null;
        /**
         * Local end date of the time slot in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate?: string | null;
        /**
         * Whether the slot is bookable according to the service's booking policies.
         *
         * If booking this time slot does not violates any of the service's booking policies,
         * the returned value is `true`. Otherwise, returns `false`.
         */
        bookable?: boolean | null;
        /** The geographic location of the slot. */
        location?: Location$7;
        /** Total number of spots for the slot. */
        totalCapacity?: number | null;
        /**
         * Remaining number of spots for the slot.
         * For example, for an appointment service with total capacity of 1 spot and one booked spot, the remaining capacity will be 0.
         */
        remainingCapacity?: number | null;
        /**
         * Indicators for booking policy violations for the slot.
         *
         * Each nested field is checked on its own. i.e. if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we will return also slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$1;
        /**
         * List of `AvailableResources` for the time slot.
         * Each `AvailableResources` contains information about available resources of the same type.
         *
         * > Not returned from `MultiServiceAvailabilityTimeSlots` API calls.
         * > Instead, each nested time slot has its own available resources.
         */
        availableResources?: AvailableResources$1[];
        /**
         * > Nested time slots.
         * > Returned only from `MultiServiceAvailabilityTimeSlots` API calls.
         */
        nestedTimeSlots?: NestedTimeSlot[];
    }
    interface Location$7 {
        /** Business Location ID. Present only if the location is a business location. */
        _id?: string | null;
        /** The location name. */
        name?: string | null;
        /** A string representation for the full address of the location. */
        formattedAddress?: string | null;
        /**
         * The type of location:
         * - `CUSTOM`: The location is specific to this service, and is not derived from the business location.
         * - `BUSINESS`: A business location, either the default business address, or locations defined for the business by the Business Info.
         * - `CUSTOMER`: The location is determined by the customer and is not set up beforehand.
         */
        locationType?: LocationType$7;
    }
    enum LocationType$7 {
        UNKNOWN_LOCATION_TYPE = "UNKNOWN_LOCATION_TYPE",
        /** A business location, either the default business address, or locations defined for the business by the Business Info. */
        BUSINESS = "BUSINESS",
        /** The location is unique to this service and isn't defined as one of the business locations. */
        CUSTOM = "CUSTOM",
        /** The location can be determined by the customer and is not set up beforehand. */
        CUSTOMER = "CUSTOMER"
    }
    /** relevant for event based slots, and not for availability based slots */
    interface EventInfo {
    }
    interface WaitingList$1 {
        /** Total number of spots in this wait list. */
        totalCapacity?: number | null;
        /**
         * Number of remaining spots for this wait list.
         * For example, a Yoga event with 10 waitList spots and 3 registered
         * on the waitList has 10 `total_capacity` and 7 `remaining_capacity`.
         */
        remainingCapacity?: number | null;
    }
    interface BookingPolicyViolations$1 {
        /** Bookings policy violation. Too early to book this slot. */
        tooEarlyToBook?: boolean | null;
        /** Bookings policy violation. Too late to book this slot. */
        tooLateToBook?: boolean | null;
        /** Bookings policy violation. Online booking is disabled for the `TimeSlot` service. */
        bookOnlineDisabled?: boolean | null;
    }
    interface AvailableResources$1 {
        /** Resource type ID. */
        resourceTypeId?: string | null;
        /**
         * Available resources for the time slot.
         *
         * + When returned from `ListAvailabilityTimeSlots`, empty by default.
         * + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * contains __up__ to 10 available resources out of those provided.
         *
         * + When returned from `GetAvailabilityTimeSlots`, contains all available resources by default.
         * + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * contains all of the available resources out of those provided.
         *
         *
         * > + When returned from `ListMultiServiceAvailabilityTimeSlots`, empty by default.
         * > + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * > contains __up__ to 10 available resources out of those provided.
         *
         * > + When returned from `GetMultiServiceAvailabilityTimeSlots`, contains all available resources by default.
         * > + + If you provided `includeResourceTypeIds` or  `resourceIds` in request,
         * > contains all of the available resources out of those provided.
         */
        resources?: Resource$3[];
        /**
         * Whether there are more available resources for the slot that are not listed in `resources` due to size limitations.
         * @readonly
         */
        hasMoreAvailableResources?: boolean | null;
    }
    interface Resource$3 {
        /** Resource ID. */
        _id?: string;
        /** Resource name. */
        name?: string | null;
    }
    interface NestedTimeSlot {
        /** Service ID of the nested time slot. */
        serviceId?: string;
        /**
         * Local start date of the nested time slot in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate?: string;
        /**
         * Local end date of the nested time slot in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate?: string;
        /**
         * List of `AvailableResources` for the nested time slot.
         * Each `AvailableResources` contains information about available resources of the same type.
         */
        availableResources?: AvailableResources$1[];
    }
    interface CalculateEventBasedAvailabilityRequest {
        serviceIds: string[];
        from: string;
        to: string;
        timeZone: string;
        /**
         * TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006
         * TODO: Locks are not taken into account. // Class is not supported yet. (relevant only for classes with waiting list)
         * Aliza's suggestion to consider locks in bookable
         */
        bookable?: boolean | null;
        /** support filtering by location type, or by locationId. Other fields like `name` are ignored */
        location?: Location$7[];
        resourceIds?: string[];
        /** if not empty, return slots with openSpots >= X */
        openSpots?: number | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$1;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        slotsPerDay?: number | null;
        cursorPaging?: CursorPaging$7;
    }
    interface CursorPaging$7 {
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
    interface CalculateEventBasedAvailabilityResponse {
        slots?: TimeSlot[];
        cursorPagingMetadata?: CursorPagingMetadata$4;
    }
    interface CursorPagingMetadata$4 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Cursor strings that point to the next page, previous page, or both. */
        cursors?: Cursors$7;
        /**
         * Whether there are more pages to retrieve following the current page.
         *
         * + `true`: Another page of results can be retrieved.
         * + `false`: This is the last page.
         */
        hasNext?: boolean | null;
    }
    interface Cursors$7 {
        /** Cursor string pointing to the next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to the previous page in the list of results. */
        prev?: string | null;
    }
    interface ListEventTimeSlotsRequest {
        /** The services for which the time slots are being returned. */
        serviceIds: string[] | null;
        /**
         * Local start date for which event time slots are returned, in ISO-8601 format.
         * E.g, "2024-01-30T13:30:00".
         * Required, unless `cursorPaging` is provided.
         */
        fromLocalDate: string | null;
        /**
         * Local end date for which event time slots are returned, in ISO-8601 format.
         * E.g, "2024-01-30T13:30:00".
         * Required, unless `cursorPaging` is provided.
         */
        toLocalDate: string | null;
        /**
         * The time zone, in IANA time zone format.
         * Default is the Wix Business time zone.
         */
        timeZone: string | null;
        /** TODO good definition of what bookable means https://github.com/wix-private/scheduler/pull/18267/files?file-filters%5B%5D=.proto&show-viewed-files=true#r1199809006 */
        bookable?: boolean | null;
        /** support filtering by location type, or by locationId. Other fields like `name` are ignored */
        location?: Location$7[];
        /** TODO: maxsize && do we need include_resource_type_id here? also is the behavior is the same as availabilityTimeSlots, we won't return resources by default? */
        resourceIds?: string[] | null;
        /** if not empty, return slots with remainingCapacity >= X */
        remainingCapacity?: number | null;
        /**
         * each nested field is checked on its own. i.e. if `too_early_to_book` is defined and `too_late_to_book` is not defined
         * we will return slots for which `too_early_to_book` is same as on the request, regardless of `too_late_to_book`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$1;
        /**
         * Maximum number of slots to load for each date. For example, if `slots_per_day` is set to `3`,
         * at most 3 available slots are returned for each day in the date range specified in the query's
         * `filter`.
         *
         * When a day has both bookable and non-bookable slots, bookable slots are returned first.
         * Non-bookable slots are returned according to the specified filters, after all
         * bookable slots are already included.
         */
        timeSlotsPerDay?: number | null;
        cursorPaging?: CursorPaging$7;
    }
    interface ListEventTimeSlotsResponse {
        /** TODO: maxsize */
        timeSlots?: TimeSlot[];
        /** The time zone, in IANA time zone format. */
        timeZone?: string | null;
        cursorPagingMetadata?: CursorPagingMetadata$4;
    }
    interface ListMultiServiceAvailabilityTimeSlotsRequest {
        /**
         * Services for which the multiService time slots are being returned for.
         * Each service contains its own resources filters within.
         *
         * MinSize: `2`.
         * MaxSize: `8`.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        services?: Service$2[];
        /**
         * Lower boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        fromLocalDate?: string | null;
        /**
         * Upper boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        toLocalDate?: string | null;
        /**
         * Time zone, in IANA time zone format.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        timeZone?: string | null;
        /**
         * Location for which the multiService TimeSlots are being returned for.
         *
         * You can specify location or location type for which the TimeSlots will be returned for.
         * If locationType is `BUSINESS`, you __must__ provide a locationId.
         *
         * <blockquote class="warning">
         * <p><strong>warning:</strong><br/>
         * Supports filtering by location type, or by location ID. </br>
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        location?: Location$7;
        /**
         * Whether the `TimeSlot` is bookable according to all of the services booking policies.
         *
         * If booking any of the `TimeSlot`.`NestedTimeSlot`s violates any of its services bookings policies,
         * returns as `false`. Otherwise, returns as `true`.
         *
         * > __Note:__
         * > A `TimeSlot` with a `NestedTimeSlot` that doesn't meet its service's bookings policies will be returned with `bookable` = false,
         * > while a `TimeSlot` with no available resources will not be returned at all.
         */
        bookable?: boolean | null;
        /**
         * Indicators for service's booking policy violations for booking the `TimeSlot`.
         *
         * A bookable time slot must not violate any policy,
         * therefor, this filter is only relevant when `bookable` filter is false.
         *
         * Each nested field is checked on all `NestedTimeSlot`s. For example, if only one of the `NestedTimeSlot`'s
         * has a service with `tooEarlyToBook` same as in the request, we return the `TimeSlot` regardless of whether
         * the other `NestedTimeSlots` has the same `tooEarlyToBook` as in request.
         *
         * Each nested field is checked on its own. For example, if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we return slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$1;
        /**
         * Maximum number of slots to load for each day. For example, if `timeSlotsPerDay` is set to `3`,
         * we return at most 3 available TimeSlots for each day within the date range specified in request.
         *
         * By default,
         * if `bookable` filter was not specified,
         * and a day has both `bookable` and `un-bookable` slots, `bookable` slots are returned first.
         *
         * If the number of `bookable` slots is less than the requested `timeSlotsPerDay`,
         * `un-bookable` slots will be returned according to the specified filters.
         */
        timeSlotsPerDay?: number | null;
        /**
         * CursorPaging.
         *
         * Enables you to fetch TimeSlots in smaller, more manageable chunks
         * by setting a limit on the number of results returned in response.
         * This is useful in order to enhance efficiency of data retrieval and reduce load on both the client and server.
         *
         * If there are more results than the specified limit, the response will contain a `cursorPagingMetaData`
         * with a cursor pointing to next page of results. In order to fetch the next page of results, you should pass the
         * returned cursor to the next call as `cursorPaging`.`cursor`.
         *
         * For the first call, you should only specify the `limit` for the results page.
         * For each following call, you should only pass the previous returned cursor as `cursorPaging`.`cursor`
         * the `cursorPaging`.`limit`. You may pass a different `limit`.
         * No need to specify any additional parameters.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * If you only provide a <code class="grey-background">cursorPaging</code>. <code class="grey-background">cursor</code>,
         * the response will contain the default size of results which is `1000`.
         * </p>
         * </blockquote>
         */
        cursorPaging?: CommonCursorPaging;
    }
    interface Service$2 {
        /** Service ID. */
        serviceId?: string;
        /** Resources to include in response. */
        resourceIds?: string[];
        /**
         * The resource type ID's to include in returned time slots.
         * This is in addition to the specifically requested resources.
         *
         * <blockquote class="important">
         * Currently supported only for Staff Member resource type.
         * Staff Member type ID: 1cd44cf8-756f-41c3-bd90-3e2ffcaf1155
         * </blockquote>
         */
        includeResourceTypeIds?: string[];
    }
    interface CommonCursorPaging {
        /**
         * Number of results to load.
         *
         * Default: `1000`.
         * Max: `1000`.
         */
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
    interface ListMultiServiceAvailabilityTimeSlotsResponse {
        /** Time slots. */
        timeSlots?: TimeSlot[];
        /**
         * Time zone, in IANA time zone format.
         * Shared for all TimeSlots in response.
         */
        timeZone?: string | null;
        /**
         * CursorPagingMetaData.
         * Contains information about the next page of results.
         *
         * By default,
         * if there are more than 1000 results,
         * the response will contain a `cursorPagingMetaData` with a cursor to the next page of results.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * <code class="grey-background">count</code> is not supported.</p>
         * </blockquote>
         */
        cursorPagingMetadata?: CommonCursorPagingMetadata;
    }
    interface CommonCursorPagingMetadata {
        /** Offset that was requested. */
        cursors?: CommonCursors;
        /**
         * Indicates if there are more results after the current page.
         * If `true`, another page of results can be retrieved.
         * If `false`, this is the last page.
         */
        hasNext?: boolean | null;
    }
    interface CommonCursors {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface GetMultiServiceAvailabilityTimeSlotRequest {
        /**
         * Services for which the multiService TimeSlots are being returned for.
         * Each service contains its own resources filters within.
         *
         * MinSize: 2.
         * MaxSize: 8.
         */
        services: Service$2[];
        /**
         * Local start date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate: string;
        /**
         * Local end date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate: string;
        /** Time zone, in IANA time zone format. */
        timeZone: string | null;
        /**
         * The location of the time slot.
         *
         * You must provide a specific `locationType`.
         * If locationType is `BUSINESS`, you __must__ also provide a `locationId`.
         *
         * <blockquote class="warning">
         * <p>Supports filtering by location type, or by location ID.
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        location: Location$7;
    }
    interface GetMultiServiceAvailabilityTimeSlotResponse {
        /** Time slot. */
        timeSlot?: TimeSlot;
        /** The time zone, in IANA time zone format. */
        timeZone?: string | null;
    }
    interface ListAvailabilityTimeSlotsRequest {
        /**
         * Service ID for which the time slots are being returned for.
         * Currently supported only for services of type `APPOINTMENT`.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        serviceId?: string | null;
        /**
         * Lower boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        fromLocalDate?: string | null;
        /**
         * Upper boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        toLocalDate?: string | null;
        /**
         * Time zone, in IANA time zone format.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        timeZone?: string | null;
        /**
         * Locations to include in response.
         *
         * By default,
         * if no locations are provided,
         * the response contains TimeSlots for all locations where the service is available.
         *
         * You can specify locations or location types for which the time slots will be returned for.
         * If locationType is `BUSINESS`, you __must__ provide a locationId.
         *
         * <blockquote class="warning">
         * <p><strong>warning:</strong><br/>
         * Supports filtering by location type, or by location ID. </br>
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        locations?: Location$7[];
        /**
         * Resources to include in response.
         *
         * If specified,
         * the returned TimeSlots will contain __up__ to 10 available resources out of the provided list.
         * Otherwise, the returned TimeSlots returns with an empty `AvailableResources`.
         */
        resourceIds?: string[];
        /**
         * Resource type ID's to include in response, this is in addition to the requested `resourceIds`.
         *
         * If specified in request, the returned TimeSlots will contain __up__ to 10 `AvailableResources` with `ResourceTypeId`
         * out of those specified, each contains __up__ to 10 available resources of this type.
         */
        includeResourceTypeIds?: string[];
        /**
         * Whether the `TimeSlot` is bookable according to the service's booking policies.
         *
         * If booking this `TimeSlot` does not violates any of the service's booking policies,
         * returns as `true`. Otherwise, returns as `false`.
         *
         * > __Note:__
         * > A time slot that doesn't meet the service's bookings policies will be returned with `bookable` = false,
         * > while a time slot with no available resources will not be returned at all.
         */
        bookable?: boolean | null;
        /**
         * Indicators for service's booking policy violations for booking the `TimeSlot`.
         *
         * A bookable time slot must not violate any policy,
         * therefor, this filter is only relevant when `bookable` filter is false.
         *
         * Each nested field is checked on its own. i.e. if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we return slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$1;
        /**
         * Maximum number of slots to load for each day. For example, if `timeSlotsPerDay` is set to `3`,
         * we return at most 3 available TimeSlots for each day within the date range specified in request.
         *
         * By default,
         * if `bookable` filter was not specified,
         * and a day has both `bookable` and `un-bookable` slots, `bookable` slots are returned first.
         *
         * If the number of `bookable` slots is less than the requested `timeSlotsPerDay`,
         * `un-bookable` slots will be returned according to the specified filters.
         */
        timeSlotsPerDay?: number | null;
        /**
         * CursorPaging.
         *
         * Enables you to fetch results in smaller, more manageable chunks
         * by setting a limit on the number of results returned in response.
         * This is useful in order to enhance efficiency of data retrieval and reduce load on both the client and server.
         *
         * If there are more results than the specified limit, the response will contain a `cursorPagingMetaData`
         * with a cursor pointing to next page of results. In order to fetch the next page of results, you should pass the
         * returned cursor to the next call as `cursorPaging`.`cursor`.
         *
         * For the first call, you should only specify the `limit` for the results page.
         * For each following call, you should only pass `cursorPaging`.`cursor` with the returned cursor from previous call, and
         * a `cursorPaging`.`limit`.
         * No need to specify any additional parameters.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * If you only provide a <code class="grey-background">cursorPaging</code>. <code class="grey-background">cursor</code>,
         * the response will contain the default size of results which is `1000`.
         * </p>
         * </blockquote>
         */
        cursorPaging?: CommonCursorPaging;
        /**
         * resources filter
         * If specified, only time slots with these resources will be returned.
         */
        resourceTypes?: ResourceType$1[];
    }
    /**
     * Selected customer choices.
     * These choices are selected by the customer during the booking flow and can be utilized to calculate the corresponding service's configuration properties.
     */
    interface CustomerChoices {
        /**
         * The selected customer duration in minutes.
         * Min: `1 minute`
         * Max: `44639 minutes` (30 days, 23 hours, and 59 minutes)
         */
        durationInMinutes?: number | null;
    }
    interface ResourceType$1 {
        /** Resource type ID. */
        resourceTypeId?: string | null;
        /**
         * Resource IDs.
         * The response will contain only slots that have at least one of the specified resources.
         */
        resourceIds?: string[] | null;
    }
    interface ListAvailabilityTimeSlotsResponse {
        /** Time slots. */
        timeSlots?: TimeSlot[];
        /**
         * Time zone, in IANA time zone format.
         * Shared for all TimeSlots in response.
         */
        timeZone?: string | null;
        /**
         * CursorPagingMetaData.
         * Contains information about the next page of results.
         *
         * By default,
         * if there are more than 1000 results,
         * the response will contain a `cursorPagingMetaData` with a cursor to the next page of results.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * <code class="grey-background">count</code> is not supported.</p>
         * </blockquote>
         */
        cursorPagingMetadata?: CommonCursorPagingMetadata;
    }
    interface GetAvailabilityTimeSlotRequest {
        /**
         * Service ID of the time slot.
         * Currently supported only for services of type `APPOINTMENT`.
         */
        serviceId: string;
        /**
         * Local start date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         */
        localStartDate: string;
        /**
         * Local end date of the time slot, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         */
        localEndDate: string;
        /** Time zone, in IANA time zone format. */
        timeZone: string | null;
        /**
         * The location of the time slot.
         *
         * You must provide a specific `locationType`.
         * If locationType is `BUSINESS`, you __must__ also provide a `locationId`.
         *
         * <blockquote class="warning">
         * <p>Supports filtering by location type, or by location ID.
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         */
        location: Location$7;
        /**
         * Resources to include in response.
         *
         * If specified,
         * the returned `TimeSlot` contains only the available resources out of provided list.
         * Otherwise, the returned `TimeSlot` returned with all possible `AvailableResources`.
         */
        resourceIds?: string[];
        /**
         * Resource type IDs to include in response, this is in addition to the requested `resourceIds`.
         *
         * If specified in request, the returned `TimeSlot` contains only the `AvailableResources` with `ResourceTypeId`
         * out of those specified, each contains all the available resources of this type.
         */
        includeResourceTypeIds?: string[];
    }
    interface GetAvailabilityTimeSlotResponse {
        /** Time slot. */
        timeSlot?: TimeSlot;
        /** Time zone, in IANA time zone format. */
        timeZone?: string | null;
    }
    /**
     * Retrieves a list of multiService `TimeSlot`s that match the provided filters.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong><br/>
     * Currently supported only for services of type <code class="grey-background">APPOINTMENT</code>.</p>
     * </blockquote>
     *
     * The request body __must__ include either:
     * + All of the following filters:  `service`.`serviceId`, `fromLocalDate`, `toLocalDate`, `location`, and `timeZone`. You may add additional filters as you wish.
     * + A `cursorPaging` with a valid `cursor` from previous response.
     *
     *
     * Each [TimeSlot](https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/availability-time-slots/time-slot-object) in response
     * represents the availability of the given sequence of services in a specific order, location, and within a given range of time.
     *
     * Each `TimeSlot`.`NestedTimeSlot` represents a single service from the given list. The order of the `NestedTimeSlots` is the same as the order
     * of the given services in request.
     * The first `NestedTimeSlot` has `localStartDate` within the given `fromLocalDate` and `toLocalDate` exclusive,
     * and each following `NestedTimeSlot` has a `localStartDate` that equals to the previous `NestedTimeSlot`'s `localEndDate`.
     *
     * By default,
     * the response contains at most 1000 results.
     * If there are more than 1000 results, we return a `cursorPagingMetadata` with
     * a cursor for the next page of results, regardless of whether a `cursorPaging`
     * was provided in request.
     *
     * > __Notes:__
     * >  + All nested time slots share the same location.
     * >  + You can pass up to 8 services in request.
     *
     * ### AvailableResources in response:
     * The `TimeSlot`.`NestedTimeSlot`'s `AvailableResources` contains information about the resources that are available to provide the service
     * within the `NestedTimeSlot` range of time. Each `AvailableResources` contains information about available resources of the same type.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong><br/>
     * By default,
     * if you don't specify <code class="grey-background">service</code>.<code class="grey-background">includeResourceTypeIds</code>
     * or  <code class="grey-background">service</code>.<code class="grey-background">resourceIds</code> filters in request,
     * we return TimeSlots with <code class="grey-background">NestedTimeSlot</code>s with an empty <code class="grey-background">AvailableResources</code>.
     * <br/><strong>Note:</strong><br/> Not specifying resources filters can be handy in case you want to avoid large response in flows that only
     * interested of whether the time slots are available. [Finding the next available slot within the next 3 months](https://bo.wix.com/wix-docs/rest/all-apis/service-availability/multi-service-availability-time-slots/sample-flows?localViewerId=inbari#all-apis_service-availability_multi-service-availability-time-slots_sample-flows_find-the-first-date-within-the-next-3-months-that-all-selected-services-are-available-for)
     * is an example for such flow.
     * </p>
     * </blockquote>
     *
     *
     * If you wish to get a list of available resources for a `TimeSlot`.`NestedTimeSlot` you should either:
     * + provide `service`.`resourceIds` in request.
     * + provide `service`.`includeResourceTypeIds` in request.
     *
     * __Notes:__
     * + In both cases the returned `TimeSlot`.`NestedTimeSlot` contains  __up__ to 10 `AvailableResources` that match the provided filters. Each `AvailableResources` contains __up__ to 10 available `resources` of the same type that match the provided filters.
     * + If an `AvailableResources` has more available resources which are not listed within it, we return `AvailableResources`.`hasMoreAvailableResources` as true.
     * + If you wish to get the full available resources list for all `NestedTimeSlot` of a specific `TimeSlot`, you should call [GetMultiServiceAvailabilityTimeSlot](https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/multi-service-availability-time-slots/get-multi-service-availability-time-slot).
     *
     *
     * ### Availability VS Bookability
     * An `available` time slot is not necessarily `bookable`.
     * The `bookable` field of a `TimeSlot` indicates whether the customer can book all of the of the services within the given time slot,
     * at a specific period of time.
     * Read more about [Availability VS Bookability](https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/multi-service-availability-time-slots/introduction#all-apis_wix-service-availability_multi-service-availability-time-slots_introduction_availability-vs-bookability).
     *
     * By default,
     * + The response does not contains `unavailable` TimeSlots.For example, if there are no available resources to provide one of the services from `2024-01-30T14:30:00` to `2024-01-30T15:30:00`, we don't return TimeSlots with `NestedTimeSlot`.`localStartDate` within this range for this service.
     * + The response contains both `bookable` and `un-bookable` TimeSlots.For example, if one of the services has a booking policy which enforces booking the service up to 10 minutes before the session starts, we return TimeSlots with the violating `NestedTimeSlot`.`localStartDate`, with `bookable` as `false`. If you want to list only __bookable__ TimeSlots you should pass `bookable` as `true`.
     * + If booking one of the `NestedTimeSlot`s violates one of the corresponding service's booking policies, the `TimeSlot` returns with `bookable` as false. There is no indication which service's policy was violated.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong>
     * Because of DST, there are edge cases where certain times either do not exist or exist twice for a local time zone.
     * Read more about <a href="https://bo.wix.com/wix-docs/rest/all-apis/wix-service-availability/multi-service-availability-time-slots/introduction#all-apis_wix-service-availability_multi-service-availability-time-slots_introduction_daylight-saving-time-dst-handling">DST Handling</a></p>
     * </blockquote>
     *
     * ### ListAvailabilityTimeSlots runs with the following defaults:
     * + `localStartDate` is sorted in `ASC` order.
     * + `cursorPaging`.`limit` is `1000`.
     * @public
     * @documentationMaturity preview
     */
    function listMultiServiceAvailabilityTimeSlots(options?: ListMultiServiceAvailabilityTimeSlotsOptions): Promise<ListMultiServiceAvailabilityTimeSlotsResponse>;
    interface ListMultiServiceAvailabilityTimeSlotsOptions {
        /**
         * Services for which the multiService time slots are being returned for.
         * Each service contains its own resources filters within.
         *
         * MinSize: `2`.
         * MaxSize: `8`.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        services?: Service$2[];
        /**
         * Lower boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T13:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        fromLocalDate?: string | null;
        /**
         * Upper boundary for `localStartDate` to include in response, in ISO-8601 format.
         * For example, "2024-01-30T14:30:00".
         *
         * Each returned `TimeSlot` in response has a `localStartDate`
         * within the provided `fromLocalDate` and `toLocalDate` exclusive.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        toLocalDate?: string | null;
        /**
         * Time zone, in IANA time zone format.
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        timeZone?: string | null;
        /**
         * Location for which the multiService TimeSlots are being returned for.
         *
         * You can specify location or location type for which the TimeSlots will be returned for.
         * If locationType is `BUSINESS`, you __must__ provide a locationId.
         *
         * <blockquote class="warning">
         * <p><strong>warning:</strong><br/>
         * Supports filtering by location type, or by location ID. </br>
         * Other fields like <code class="grey-background">name</code> are ignored.</p>
         * </blockquote>
         *
         * Required, unless `cursorPaging`.`cursor` is provided.
         */
        location?: Location$7;
        /**
         * Whether the `TimeSlot` is bookable according to all of the services booking policies.
         *
         * If booking any of the `TimeSlot`.`NestedTimeSlot`s violates any of its services bookings policies,
         * returns as `false`. Otherwise, returns as `true`.
         *
         * > __Note:__
         * > A `TimeSlot` with a `NestedTimeSlot` that doesn't meet its service's bookings policies will be returned with `bookable` = false,
         * > while a `TimeSlot` with no available resources will not be returned at all.
         */
        bookable?: boolean | null;
        /**
         * Indicators for service's booking policy violations for booking the `TimeSlot`.
         *
         * A bookable time slot must not violate any policy,
         * therefor, this filter is only relevant when `bookable` filter is false.
         *
         * Each nested field is checked on all `NestedTimeSlot`s. For example, if only one of the `NestedTimeSlot`'s
         * has a service with `tooEarlyToBook` same as in the request, we return the `TimeSlot` regardless of whether
         * the other `NestedTimeSlots` has the same `tooEarlyToBook` as in request.
         *
         * Each nested field is checked on its own. For example, if `tooEarlyToBook` is defined and `bookOnlineDisabled` is not defined
         * we return slots for which `tooEarlyToBook` is same as on the request, regardless of `bookOnlineDisabled`.
         */
        bookingPolicyViolations?: BookingPolicyViolations$1;
        /**
         * Maximum number of slots to load for each day. For example, if `timeSlotsPerDay` is set to `3`,
         * we return at most 3 available TimeSlots for each day within the date range specified in request.
         *
         * By default,
         * if `bookable` filter was not specified,
         * and a day has both `bookable` and `un-bookable` slots, `bookable` slots are returned first.
         *
         * If the number of `bookable` slots is less than the requested `timeSlotsPerDay`,
         * `un-bookable` slots will be returned according to the specified filters.
         */
        timeSlotsPerDay?: number | null;
        /**
         * CursorPaging.
         *
         * Enables you to fetch TimeSlots in smaller, more manageable chunks
         * by setting a limit on the number of results returned in response.
         * This is useful in order to enhance efficiency of data retrieval and reduce load on both the client and server.
         *
         * If there are more results than the specified limit, the response will contain a `cursorPagingMetaData`
         * with a cursor pointing to next page of results. In order to fetch the next page of results, you should pass the
         * returned cursor to the next call as `cursorPaging`.`cursor`.
         *
         * For the first call, you should only specify the `limit` for the results page.
         * For each following call, you should only pass the previous returned cursor as `cursorPaging`.`cursor`
         * the `cursorPaging`.`limit`. You may pass a different `limit`.
         * No need to specify any additional parameters.
         *
         * <blockquote class="important">
         * <p><strong>Important:</strong><br/>
         * If you only provide a <code class="grey-background">cursorPaging</code>. <code class="grey-background">cursor</code>,
         * the response will contain the default size of results which is `1000`.
         * </p>
         * </blockquote>
         */
        cursorPaging?: CommonCursorPaging;
    }
    /**
     * Retrieves an available multiService `TimeSlot` that match the provided filters.
     *
     * Throws `SlotNotFound` if there is no such available time slot.
     *
     * <blockquote class="important">
     * <p><strong>Important:</strong><br/>
     * Currently supported only for services of type <code class="grey-background">APPOINTMENT</code>.</p>
     * </blockquote>
     *
     * By default,
     * if you don't provide a `service`.`includeResourceTypeIds` or `service`.`resourceIds` in request,
     * we return for each `TimeSlot`.`NestedTimeSlot` all `AvailableResources` with all `AvailableResources`.`resources` which are available to provide
     * the corresponding service within the time slot.
     *
     * If you specify `service`.`includeResourceTypeIds` or `service`.`resourceIds` in request,
     * the returned `TimeSlot`.`NestedTimeSlot` for this service will contain only `AvailableResources` with at least one available resource
     * which match the given resources filters,
     * each contains all available resources out of those requested.
     *
     * + Notes:
     * + All nested time slots share the same location.
     * + You can pass up to 8 services.
     *
     * <blockquote class="tip">
     * <p><strong>Tip:</strong><br/>
     * Use this API in order to get the availability of a specific <code class="grey-background">TimeSlot</code> out of those returned from  <code class="grey-background">ListMultiServiceAvailabilityTimeSlots</code> API.</p>
     * </blockquote>
     * @param services - Services for which the multiService TimeSlots are being returned for.
     * Each service contains its own resources filters within.
     *
     * MinSize: 2.
     * MaxSize: 8.
     * @param localStartDate - Local start date of the time slot, in ISO-8601 format.
     * For example, "2024-01-30T13:30:00".
     * @param localEndDate - Local end date of the time slot, in ISO-8601 format.
     * For example, "2024-01-30T14:30:00".
     * @param timeZone - Time zone, in IANA time zone format.
     * @param location - The location of the time slot.
     *
     * You must provide a specific `locationType`.
     * If locationType is `BUSINESS`, you __must__ also provide a `locationId`.
     *
     * <blockquote class="warning">
     * <p>Supports filtering by location type, or by location ID.
     * Other fields like <code class="grey-background">name</code> are ignored.</p>
     * </blockquote>
     * @public
     * @documentationMaturity preview
     * @requiredField localEndDate
     * @requiredField localStartDate
     * @requiredField location
     * @requiredField location.locationType
     * @requiredField services
     * @requiredField services.serviceId
     * @requiredField timeZone
     */
    function getMultiServiceAvailabilityTimeSlot(services: Service$2[], localStartDate: string, localEndDate: string, timeZone: string | null, location: Location$7): Promise<GetMultiServiceAvailabilityTimeSlotResponse>;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_TimeSlot = TimeSlot;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_EventInfo = EventInfo;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_NestedTimeSlot = NestedTimeSlot;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_CalculateEventBasedAvailabilityRequest = CalculateEventBasedAvailabilityRequest;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_CalculateEventBasedAvailabilityResponse = CalculateEventBasedAvailabilityResponse;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListEventTimeSlotsRequest = ListEventTimeSlotsRequest;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListEventTimeSlotsResponse = ListEventTimeSlotsResponse;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListMultiServiceAvailabilityTimeSlotsRequest = ListMultiServiceAvailabilityTimeSlotsRequest;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_CommonCursorPaging = CommonCursorPaging;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListMultiServiceAvailabilityTimeSlotsResponse = ListMultiServiceAvailabilityTimeSlotsResponse;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_CommonCursorPagingMetadata = CommonCursorPagingMetadata;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_CommonCursors = CommonCursors;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_GetMultiServiceAvailabilityTimeSlotRequest = GetMultiServiceAvailabilityTimeSlotRequest;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_GetMultiServiceAvailabilityTimeSlotResponse = GetMultiServiceAvailabilityTimeSlotResponse;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListAvailabilityTimeSlotsRequest = ListAvailabilityTimeSlotsRequest;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_CustomerChoices = CustomerChoices;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListAvailabilityTimeSlotsResponse = ListAvailabilityTimeSlotsResponse;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_GetAvailabilityTimeSlotRequest = GetAvailabilityTimeSlotRequest;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_GetAvailabilityTimeSlotResponse = GetAvailabilityTimeSlotResponse;
    const bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_listMultiServiceAvailabilityTimeSlots: typeof listMultiServiceAvailabilityTimeSlots;
    type bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListMultiServiceAvailabilityTimeSlotsOptions = ListMultiServiceAvailabilityTimeSlotsOptions;
    const bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_getMultiServiceAvailabilityTimeSlot: typeof getMultiServiceAvailabilityTimeSlot;
    namespace bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d {
        export { bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_TimeSlot as TimeSlot, Location$7 as Location, LocationType$7 as LocationType, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_EventInfo as EventInfo, WaitingList$1 as WaitingList, BookingPolicyViolations$1 as BookingPolicyViolations, AvailableResources$1 as AvailableResources, Resource$3 as Resource, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_NestedTimeSlot as NestedTimeSlot, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_CalculateEventBasedAvailabilityRequest as CalculateEventBasedAvailabilityRequest, CursorPaging$7 as CursorPaging, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_CalculateEventBasedAvailabilityResponse as CalculateEventBasedAvailabilityResponse, CursorPagingMetadata$4 as CursorPagingMetadata, Cursors$7 as Cursors, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListEventTimeSlotsRequest as ListEventTimeSlotsRequest, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListEventTimeSlotsResponse as ListEventTimeSlotsResponse, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListMultiServiceAvailabilityTimeSlotsRequest as ListMultiServiceAvailabilityTimeSlotsRequest, Service$2 as Service, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_CommonCursorPaging as CommonCursorPaging, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListMultiServiceAvailabilityTimeSlotsResponse as ListMultiServiceAvailabilityTimeSlotsResponse, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_CommonCursorPagingMetadata as CommonCursorPagingMetadata, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_CommonCursors as CommonCursors, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_GetMultiServiceAvailabilityTimeSlotRequest as GetMultiServiceAvailabilityTimeSlotRequest, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_GetMultiServiceAvailabilityTimeSlotResponse as GetMultiServiceAvailabilityTimeSlotResponse, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListAvailabilityTimeSlotsRequest as ListAvailabilityTimeSlotsRequest, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_CustomerChoices as CustomerChoices, ResourceType$1 as ResourceType, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListAvailabilityTimeSlotsResponse as ListAvailabilityTimeSlotsResponse, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_GetAvailabilityTimeSlotRequest as GetAvailabilityTimeSlotRequest, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_GetAvailabilityTimeSlotResponse as GetAvailabilityTimeSlotResponse, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_listMultiServiceAvailabilityTimeSlots as listMultiServiceAvailabilityTimeSlots, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_ListMultiServiceAvailabilityTimeSlotsOptions as ListMultiServiceAvailabilityTimeSlotsOptions, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d_getMultiServiceAvailabilityTimeSlot as getMultiServiceAvailabilityTimeSlot, };
    }
    interface ExternalCalendar {
    }
    interface ListProvidersRequest {
    }
    interface ListProvidersResponse {
        /**
         * Retrieves a list of the external calendar providers for which the site supports integration.
         *
         *
         * The list of external calendar providers includes:
         *
         * + External calendar providers that are supported by default, such as Google, Apple, and Microsoft.
         * + External calenders for which the site owner has enabled integration by installing an app.
         *
         * For each external calendar provider, the list contains information about supported connection methods and features.
         * For each provider, check `features.connectMethods` to find out whether to use [`connectByCredentials()`](#connect-by-credentials) or [`connectByOAuth()`](#connect-by-o-auth) to establish a connection.
         */
        providers?: Provider[];
    }
    interface Provider {
        /** ID of the external calendar provider. */
        _id?: string | null;
        /** Name of the external calendar provider. */
        name?: string | null;
        /** External calendar provider type. */
        calendarType?: CalendarType$3;
        /** Features the external calendar provider supports. */
        features?: ProviderFeatures;
    }
    enum CalendarType$3 {
        UNDEFINED = "UNDEFINED",
        GOOGLE = "GOOGLE",
        I_CAL = "I_CAL",
        /** Use `MICROSOFT` instead. */
        OUTLOOK = "OUTLOOK",
        /** Use `MICROSOFT` instead. */
        OFFICE_365 = "OFFICE_365",
        MICROSOFT = "MICROSOFT",
        OTHER = "OTHER"
    }
    interface ProviderFeatures {
        /**
         * Supported connection methods.
         *
         * For providers supporting `OAUTH`, connect with the [`connectByOAuth()`](#connect-by-o-auth) function.
         * For providers supporting `CREDENTIALS`, connect with the [`connectByCredentials()`](#connect-by-credentials) function.
         */
        connectMethods?: ConnectMethod[];
        /**
         * Whether the sync configuration can be updated after a connection is established.
         *
         * If `true`, you can update the sync configuration using the [`UpdateSyncConfig()`](#update-sync-config) function.
         */
        updateSyncConfig?: boolean | null;
        /**
         * Whether events can be imported from external calendars to the Wix calendar.
         *
         * + `NOT_SUPPORTED`: Importing events from the external calendar is not supported.
         * + `PRIMARY_CALENDAR_ONLY`: Events can be imported only from an external calendar designated as primary.
         * + `SPECIFIC_CALENDARS`: Events can be imported from specific external calendars. Use [`listCalendars()`](#list-calendars) to get a list of calendars for a connected external calendar account.
         */
        listEventFromCalendars?: ListEventFromCalendars;
        /**
         * Whether Wix calendar sessions can be exported to the external calendar.
         *
         * + `NOT_SUPPORTED`: Exporting events to an external calendar is not supported.
         * + `PRIMARY_CALENDAR_ONLY`: Events can only be exported only to an external calendar designated as primary.
         * + `SPECIFIC_CALENDARS`: Events can be exported to specific external calendars. Use [`listCalendars()`](#list-calendars) to get a list of calendars for a connected external calendar account.
         * + `DEDICATED_CALENDAR`: Events can be exported to a newly created, dedicated external calendar in the connected external calendar account.
         */
        syncToCalendar?: SyncToCalendar;
    }
    enum ConnectMethod {
        UNDEFINED = "UNDEFINED",
        OAUTH = "OAUTH",
        CREDENTIALS = "CREDENTIALS"
    }
    enum ListEventFromCalendars {
        /** Dont use. */
        UNDEFINED = "UNDEFINED",
        /** Listing events from the external calendar is not supported. */
        NOT_SUPPORTED = "NOT_SUPPORTED",
        /** Listing events from the primary external calendar only. */
        PRIMARY_CALENDAR_ONLY = "PRIMARY_CALENDAR_ONLY",
        /**
         * Listing events from specific external calendars.
         * The external calendars can be listed using the `ExternalCalendarService.ListCalendars` API.
         */
        SPECIFIC_CALENDARS = "SPECIFIC_CALENDARS"
    }
    enum SyncToCalendar {
        /** Dont use. */
        UNDEFINED = "UNDEFINED",
        /** Syncing Wix calendar sessions to the external calendar is not supported. */
        NOT_SUPPORTED = "NOT_SUPPORTED",
        /** Syncing Wix calendar sessions to the primary external calendar only. */
        PRIMARY_CALENDAR_ONLY = "PRIMARY_CALENDAR_ONLY",
        /** Syncing Wix calendar sessions to a specific external calendar. */
        SPECIFIC_CALENDAR = "SPECIFIC_CALENDAR",
        /** Syncing Wix calendar sessions to a new external calendar. */
        DEDICATED_CALENDAR = "DEDICATED_CALENDAR"
    }
    interface GetConnectionRequest {
        /** ID of the connection to retrieve. */
        connectionId: string | null;
    }
    interface GetConnectionResponse {
        /** Retrieved external calendar connection. */
        connection?: Connection;
    }
    interface Connection {
        /** External calendar connection ID. */
        _id?: string | null;
        /** ID of the external calendar provider. */
        providerId?: string | null;
        /** External calendar type. */
        calendarType?: CalendarType$3;
        /** ID of the schedule connected to the external calendar. */
        scheduleId?: string | null;
        /** ID of the Wix user the external calendar connection belongs to. */
        userId?: string | null;
        /** ID of the Wix App the external calendar connection belongs to. */
        appId?: string | null;
        /** Email address associated with the external calendar account. Empty until sync is completed successfully. */
        externalAccountEmail?: string | null;
        /**
         * Connection status.
         *
         * + `CONNECTED`: A connection has been established with the external calendar.
         * + `SYNC_IN_PROGRESS`: A sync is in progress.
         * + `SYNCED`: External calendar sync complete.
         * + `DISCONNECTED`: External calendar has been disconnected.
         * + `ERROR`: An error occurred when syncing with the external calendar.
         */
        status?: Status$3;
        /**
         * Reason for the error, if `status` is `ERROR`.
         *
         * + `TOKEN_REVOKED`: External calendar access token revoked.
         * + `EXTERNAL_CALENDAR_CREATION_FAILED`: External calendar creation failed.
         * + `EXTERNAL_CALENDAR_DELETED`: External calendar was deleted.
         */
        errorReason?: ErrorReason;
        /**
         * Sync configuration. Contains settings for enabling, configuring, or disabling functionality, including:
         *
         * + Importing events from one or more specified calendars in the connected external calendar account.
         * + Exporting events from the Wix site's calendar to an external calendar.
         */
        syncConfig?: ConnectionSyncConfig;
    }
    enum Status$3 {
        /** Dont use. */
        UNDEFINED = "UNDEFINED",
        /** External calendar is connected to the corresponding schedule id. */
        CONNECTED = "CONNECTED",
        /** Sync in progress. */
        SYNC_IN_PROGRESS = "SYNC_IN_PROGRESS",
        /** Calendars are in-sync. */
        SYNCED = "SYNCED",
        /** External calender is disconnected. */
        DISCONNECTED = "DISCONNECTED",
        /** The calendars sync is in error state. */
        ERROR = "ERROR"
    }
    enum ErrorReason {
        /** Empty or error reason is unknown. */
        UNDEFINED = "UNDEFINED",
        /** External calendar access token revoked. */
        TOKEN_REVOKED = "TOKEN_REVOKED",
        /** External calendar creation failed. */
        EXTERNAL_CALENDAR_CREATION_FAILED = "EXTERNAL_CALENDAR_CREATION_FAILED",
        /** External Calendar was deleted. */
        EXTERNAL_CALENDAR_DELETED = "EXTERNAL_CALENDAR_DELETED"
    }
    interface ConnectionSyncConfig {
        /**
         * Configuration for importing events from external calendars.
         * If enabled, use the [`listEvents()`](#list-events) function to retrieve a list of events from external calendars.
         */
        listEventFromCalendars?: ConnectionSyncConfigListEventFromCalendars;
        /** Configuration for exporting calendars from the Wix site's calendar to a connected external calendar. */
        syncToCalendar?: ConnectionSyncConfigSyncToCalendar;
    }
    interface Calendar {
        /**
         * External calendar ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Display name of the external calendar.
         * For example, "Primary" or "Birthdays".
         */
        name?: string | null;
    }
    interface PrimaryCalendar {
    }
    interface Calendars {
        calendars?: Calendar[];
    }
    interface DedicatedCalendar {
    }
    interface ConnectionSyncConfigListEventFromCalendars extends ConnectionSyncConfigListEventFromCalendarsListFromOneOf {
        /**
         * Import events only from the primary external calendar. Enable this by passing an empty object.
         *
         * **Note**: Not all external calendar providers designate a primary calendar.
         */
        primaryCalendar?: PrimaryCalendar;
        /**
         * Import events from a list of specified external calendars.
         *
         * **Note**: The list can include the primary calendar.
         */
        calendars?: Calendars;
        /** Whether to enable importing events from external calendars through this connection. */
        enabled?: boolean | null;
    }
    /** @oneof */
    interface ConnectionSyncConfigListEventFromCalendarsListFromOneOf {
        /**
         * Import events only from the primary external calendar. Enable this by passing an empty object.
         *
         * **Note**: Not all external calendar providers designate a primary calendar.
         */
        primaryCalendar?: PrimaryCalendar;
        /**
         * Import events from a list of specified external calendars.
         *
         * **Note**: The list can include the primary calendar.
         */
        calendars?: Calendars;
    }
    interface ConnectionSyncConfigSyncToCalendar extends ConnectionSyncConfigSyncToCalendarSyncToOneOf {
        /** Sync to the primary external calendar. Enable this by passing an empty object. */
        primaryCalendar?: PrimaryCalendar;
        /** Sync to a dedicated external calendar. Enable this by passing an empty object. */
        dedicatedCalendar?: DedicatedCalendar;
        /** Whether to enable exporting events to an external calendars through this connection. */
        enabled?: boolean | null;
    }
    /** @oneof */
    interface ConnectionSyncConfigSyncToCalendarSyncToOneOf {
        /** Sync to the primary external calendar. Enable this by passing an empty object. */
        primaryCalendar?: PrimaryCalendar;
        /** Sync to a dedicated external calendar. Enable this by passing an empty object. */
        dedicatedCalendar?: DedicatedCalendar;
    }
    enum SyncToErrorReason {
        /** No sync error. */
        UNDEFINED = "UNDEFINED",
        /** Could not create calendar to sync sessions to. */
        CALENDAR_CREATION_FAILURE = "CALENDAR_CREATION_FAILURE",
        /** Calendar was deleted while sync was in progress. */
        CALENDAR_DELETED = "CALENDAR_DELETED"
    }
    interface ListConnectionsRequest {
        /**
         * Schedule IDs to filter by. If provided, only connections between external calendars and the specified schedules is returned.
         *
         * Default: Returns all connections.
         */
        scheduleIds?: string[] | null;
        /**
         * Whether to return a partial list of connections if details can't be retrieved for some connections.
         *
         * Default: `false`
         */
        partialFailure?: boolean | null;
    }
    interface ListConnectionsResponse {
        /** List of external calendar connections. */
        connections?: Connection[];
        /** List of provider IDs for connections for which retrieval failed. Returned only if `partialFailure` parameter is `true` in the request. */
        failedProviderIds?: string[] | null;
    }
    interface ConnectByOAuthRequest {
        /** ID of the schedule to connect with the external calendar account. */
        scheduleId: string | null;
        /**
         * ID of the external calendar provider. Find this with the [`listProviders()`](#list-providers) function.
         *
         */
        providerId: string | null;
        /**
         * URL to redirect the user to after they authorize access to the external calendar account.
         *
         * If the connection is successfully established, the user is redirected to this URL with a query parameter `connectionId` containing the new connection ID.
         * If the attempt to connect fails, the user is redirected to this URL with a query parameter `error` containing the error type.
         */
        redirectUrl: string | null;
    }
    interface ConnectByOAuthResponse {
        /** URL of the external calendar authorization page to redirect the user to. */
        oauthUrl?: string | null;
    }
    interface RawHttpRequest {
        body?: Uint8Array;
        pathParams?: PathParametersEntry[];
        queryParams?: QueryParametersEntry[];
        headers?: HeadersEntry[];
        method?: string;
        rawPath?: string;
        rawQuery?: string;
    }
    interface PathParametersEntry {
        key?: string;
        value?: string;
    }
    interface QueryParametersEntry {
        key?: string;
        value?: string;
    }
    interface HeadersEntry {
        key?: string;
        value?: string;
    }
    interface RawHttpResponse {
        body?: Uint8Array;
        statusCode?: number | null;
        headers?: HeadersEntry[];
    }
    interface ConnectByCredentialsRequest {
        /** ID of the schedule to connect with the external calendar account. */
        scheduleId: string | null;
        /** ID of the external calendar provider. Find this with the [`listProviders()`](#list-providers) function. */
        providerId: string | null;
        /** Email address for the external calendar account. */
        email: string | null;
        /** Password for the external calendar account. */
        password: string | null;
    }
    interface ConnectByCredentialsResponse {
        /** Established connection details. */
        connection?: Connection;
    }
    interface ListCalendarsRequest {
        /** ID of the external calendar connection to list calendars for. */
        connectionId: string | null;
    }
    interface ListCalendarsResponse {
        /** List of calendars belonging to the external calendar account. */
        calendars?: Calendar[];
    }
    interface UpdateSyncConfigRequest {
        /** ID of the external calendar connection to update. */
        connectionId: string | null;
        /** Updated sync configuration details. */
        syncConfig: ConnectionSyncConfig;
    }
    interface UpdateSyncConfigResponse {
        /** Connection with updated sync configuration. */
        connection?: Connection;
    }
    interface DisconnectRequest {
        /** ID of the external calendar connection to disconnect. */
        connectionId: string | null;
    }
    interface DisconnectResponse {
        /** Updated connection details. */
        connection?: Connection;
    }
    interface ListEventsRequest {
        /**
         * Date and time from which to retrieve events,
         * formatted according to [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt).
         * Required, unless `cursorPaging.cursor` is provided.
         *
         * Events which start before the `from` time and end after it are included in the returned list.
         */
        from?: string | null;
        /**
         * Date and time until which to retrieve events,
         * formatted according to [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt).
         * Required, unless `cursorPaging.cursor` is provided.
         *
         * Events which start before the `to` time and end after it are included in the returned list.
         */
        to?: string | null;
        /**
         * Schedule IDs to filter by. If provided, the returned list includes only events belonging to external calendars connected to the specified schedules.
         * Maximum of 100 schedule IDs per request.
         */
        scheduleIds?: string[] | null;
        /**
         * Wix user IDs to filter by. If provided, the returned list includes only events belonging to external calendars connected to schedules belonging to the specified Wix users.
         * Maximum of 100 Wix user IDs per request.
         */
        userIds?: string[] | null;
        /**
         * Whether to include only all-day events in the returned list.
         * If `true`, only all-day events are returned.
         * If `false`, only events with a specified time are returned.
         *
         * Default: All events are returned.
         */
        allDay?: boolean | null;
        /**
         * Predefined sets of fields to return.
         * - `NO_PI`: Returns event objects without personal information.
         * - `OWN_PI`: Returns complete event objects, including personal information.
         *
         * Default: `NO_PI`
         */
        fieldsets?: string[];
        /** Pagination options. */
        cursorPaging?: CursorPaging$6;
        /**
         * Whether to return a partial list of events if details can't be retrieved for some connections.
         *
         * Default: `false`
         */
        partialFailure?: boolean | null;
    }
    interface CursorPaging$6 {
        /**
         * Number of events to load.
         * Max: `1000`
         */
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
    interface ListEventsResponse {
        /** List of external calendar events matching the filters. */
        events?: Event$2[];
        /** Paging metadata. */
        pagingMetadata?: CursorPagingMetadata$3;
        /** List of provider IDs for connections for which retrieval of events failed. Returned only if `partialFailure` parameter is `true` in the request. */
        failedProviderIds?: string[] | null;
    }
    /** An external calendar event. */
    interface Event$2 {
        /** ID of the schedule connected to the external calendar the event belongs to. */
        scheduleId?: string | null;
        /** External calendar type. */
        calendarType?: CalendarType$3;
        /**
         * Display name of the external calendar.
         * For example, "Primary" or "Birthdays".
         */
        calendarName?: string | null;
        /** Event title. */
        title?: string | null;
        /** Start date and time of the event (inclusive), formatted according to [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt). */
        start?: string | null;
        /** End date and time of the event (exclusive), formatted according to [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt). */
        end?: string | null;
        /**
         * Whether the event is an all-day event.
         *
         * Default: `false`
         */
        allDay?: boolean | null;
        /**
         * ID of the Wix user the schedule belongs to.
         * For example, the ID of the staff member (resource) who owns the schedule.
         */
        scheduleOwnerId?: string | null;
        /**
         * Name of the Wix user the schedule belongs to.
         * For example, the name of the staff member (resource) who owns the schedule.
         */
        scheduleOwnerName?: string | null;
    }
    interface CursorPagingMetadata$3 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Offset that was requested. */
        cursors?: Cursors$6;
        /**
         * Indicates if there are more results after the current page.
         * If `true`, another page of results can be retrieved.
         * If `false`, this is the last page.
         */
        hasNext?: boolean | null;
    }
    interface Cursors$6 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
    }
    interface ScheduleNotification$3 extends ScheduleNotificationEventOneOf$3 {
        scheduleCreated?: ScheduleCreated$3;
        scheduleUpdated?: ScheduleUpdated$3;
        scheduleCancelled?: ScheduleCancelled$3;
        sessionCreated?: SessionCreated$3;
        sessionUpdated?: SessionUpdated$3;
        sessionCancelled?: SessionCancelled$3;
        availabilityPolicyUpdated?: AvailabilityPolicyUpdated$3;
        intervalSplit?: IntervalSplit$3;
        recurringSessionSplit?: RecurringSessionSplit$3;
        /** Inspect `schedule.scheduleOwnerUserId` on `scheduleUpdated` instead. */
        scheduleUnassignedFromUser?: ScheduleUnassignedFromUser$3;
        preserveFutureSessionsWithParticipants?: boolean | null;
        /** Whether to notify participants about changed sessions. deprecated, use participant_notification */
        notifyParticipants?: boolean;
        /** site properties. Optional. Given in create schedule notification. */
        siteProperties?: SitePropertiesOnScheduleCreation$3;
        instanceId?: string;
    }
    /** @oneof */
    interface ScheduleNotificationEventOneOf$3 {
        scheduleCreated?: ScheduleCreated$3;
        scheduleUpdated?: ScheduleUpdated$3;
        scheduleCancelled?: ScheduleCancelled$3;
        sessionCreated?: SessionCreated$3;
        sessionUpdated?: SessionUpdated$3;
        sessionCancelled?: SessionCancelled$3;
        availabilityPolicyUpdated?: AvailabilityPolicyUpdated$3;
        intervalSplit?: IntervalSplit$3;
        recurringSessionSplit?: RecurringSessionSplit$3;
        /** Inspect `schedule.scheduleOwnerUserId` on `scheduleUpdated` instead. */
        scheduleUnassignedFromUser?: ScheduleUnassignedFromUser$3;
    }
    interface ScheduleCreated$3 {
        schedule?: Schedule$3;
    }
    interface Schedule$3 {
        /** Schedule ID. */
        _id?: string;
        /** ID of the schedule's owner entity. This may be a resource ID or a service ID. */
        scheduleOwnerId?: string | null;
        /**
         * Schedule's time zone in [Area/Location](https://en.wikipedia.org/wiki/Tz_database) format. Read-only.
         * Derived from the Wix Business time zone.
         * @readonly
         */
        timeZone?: string | null;
        /** Deprecated. Please use the [Sessions API](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/session) instead. */
        intervals?: RecurringInterval$3[];
        /** Default title for the schedule's sessions. Maximum length: 6000 characters. */
        title?: string | null;
        /**
         * __Deprecated.__
         * Tags for grouping schedules. These tags are the default tags for the schedule's sessions.
         * The Wix Bookings app uses the following predefined tags to set schedule type: `"INDIVIDUAL"`, `"GROUP"`, and `"COURSE"`. Once the schedule type is set using these tags, you cannot update it. In addition to the app's tags, you can create and update your own tags.
         */
        tags?: string[] | null;
        /** Default location for the schedule's sessions. */
        location?: Location$6;
        /**
         * Maximum number of participants that can be added to the schedule's sessions.
         * Must be at most `1` for schedule whose availability is affected by another schedule. E.g, appointment schedules of the Wix Bookings app.
         */
        capacity?: number | null;
        /** Deprecated. Please use the [Booking Services V2](https://dev.wix.com/api/rest/wix-bookings/services-v2) payment instead. */
        rate?: Rate$3;
        /** __Deprecated.__ */
        availability?: Availability$3;
        /**
         * Number of participants registered to sessions in this schedule, calculated as the sum of the party sizes.
         * @readonly
         */
        totalNumberOfParticipants?: number;
        /**
         * *Partial list** of participants which are registered to sessions in this schedule.
         * Participants who are registered in the schedule are automatically registered to any session that is created for the schedule.
         * To retrieve the full list of schedule participants please use the [Query Extended Bookings API](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings).
         * @readonly
         */
        participants?: Participant$3[];
        /** __Deprecated.__ */
        externalCalendarOverrides?: ExternalCalendarOverrides$3;
        /**
         * Schedule status.
         * @readonly
         */
        status?: ScheduleStatus$3;
        /**
         * Schedule creation date.
         * @readonly
         */
        created?: Date;
        /**
         * Schedule last update date.
         * @readonly
         */
        updated?: Date;
        /**
         * Schedule version number, updated each time the schedule is updated.
         * @readonly
         */
        version?: number;
        /**
         * Fields which were inherited from the Business Info page under Settings in the Dashboard.
         * @readonly
         */
        inheritedFields?: string[];
        /** __Deprecated.__ */
        conferenceProvider?: ConferenceProvider$3;
        /**
         * A conference created for the schedule. This is used when a participant is added to a schedule.
         * **Partially deprecated.** Only `hostUrl` and `guestUrl` are to be supported.
         */
        calendarConference?: CalendarConference$3;
    }
    interface RecurringInterval$3 {
        /**
         * The recurring interval identifier.
         * @readonly
         */
        _id?: string;
        /** The start time of the recurring interval. Required. */
        start?: Date;
        /** The end time of the recurring interval. Optional. Empty value indicates that there is no end time. */
        end?: Date;
        /** The interval rules. The day, hour and minutes the interval is recurring. */
        interval?: Interval$3;
        /** The frequency of the interval. Optional. The default is frequency with the default repetition. */
        frequency?: Frequency$3;
        /** Specifies the list of linked schedules and the way this link affects the corresponding schedules' availability. Can be calculated from the schedule or overridden on the recurring interval. */
        affectedSchedules?: LinkedSchedule$3[];
        /**
         * The type of recurring interval.
         * <!--ONLY:VELO
         * One of:
         * - `"UNDEFINED"` The default value. Sessions for this interval will be of type EVENT.
         * - `"EVENT"` A recurring interval of events.
         * - `"WORKING_HOURS"` A recurring interval for availability.
         * <!--END:ONLY:VELO-->
         */
        intervalType?: RecurringIntervalType$3;
    }
    interface Interval$3 {
        /** The day the interval accrue. Optional. The default is the day of the recurring interval's start time. */
        daysOfWeek?: Day$3;
        /** The hour of the day the interval accrue. must be consistent with the Interval start time. Options. The default is 0. minimum: 0, maximum: 23. */
        hourOfDay?: number | null;
        /** The minutes of hour the interval accrue. must be consistent with the Interval end time. Options. The default is 0. minimum: 0, maximum: 59. */
        minuteOfHour?: number | null;
        /** The duration of the interval in minutes. Required. Part of the session end time calculation. minimum: 1, maximum: 86400. */
        duration?: number;
    }
    enum Day$3 {
        /** Undefined. */
        UNDEFINED = "UNDEFINED",
        /** Monday. */
        MON = "MON",
        /** Tuesday. */
        TUE = "TUE",
        /** Wednesday. */
        WED = "WED",
        /** Thursday. */
        THU = "THU",
        /** Friday. */
        FRI = "FRI",
        /** Saturday. */
        SAT = "SAT",
        /** Sunday. */
        SUN = "SUN"
    }
    interface Frequency$3 {
        /** The frequency of the recurrence in weeks. i.e. when this value is 4, the interval occurs every 4 weeks. Optional. The default is 1. minimum: 1, maximum: 52. */
        repetition?: number | null;
    }
    interface LinkedSchedule$3 {
        /** Schedule ID. */
        scheduleId?: string;
        /**
         * Sets this schedule's availability for the duration of the linked schedule's sessions.  Default is `"BUSY"`.
         * <!--ONLY:REST-->
         * If set to `"BUSY"`, this schedule cannot have any available slots during the linked schedule's sessions.
         * If set to `"FREE"`, this schedule can have available slots during the linked schedule's sessions.
         * <!--END:ONLY:REST-->
         *
         * <!--ONLY:VELO
         * One of:
         * - `"FREE"` This schedule can have available slots during the linked schedule's sessions.
         * - `"BUSY"` This schedule cannot have any available slots during the linked schedule's sessions.
         * <!--END:ONLY:VELO-->
         */
        transparency?: Transparency$3;
        /**
         * Owner ID, of the linked schedule.
         * @readonly
         */
        scheduleOwnerId?: string;
    }
    enum Transparency$3 {
        UNDEFINED = "UNDEFINED",
        /** The schedule can have available slots during the session. */
        FREE = "FREE",
        /** The schedule cannot have available slots during the session. Default value. */
        BUSY = "BUSY"
    }
    enum RecurringIntervalType$3 {
        /** The default value. Sessions for this interval will be of type EVENT. */
        UNDEFINED = "UNDEFINED",
        /** A recurring interval of events */
        EVENT = "EVENT",
        /** Deprecated */
        TIME_AVAILABILITY = "TIME_AVAILABILITY",
        /** A recurring interval for availability */
        AVAILABILITY = "AVAILABILITY"
    }
    interface Location$6 {
        /**
         * Location type.
         * One of:
         * - `"OWNER_BUSINESS"` The business address as set in the site’s general settings.
         * - `"OWNER_CUSTOM"` The address as set when creating the service.
         * - `"CUSTOM"` The address set for the individual session.
         */
        locationType?: LocationType$6;
        /** Free text address used when locationType is `OWNER_CUSTOM`. */
        address?: string | null;
        /** Custom address, used when locationType is `"OWNER_CUSTOM"`. Might be used when locationType is `"CUSTOM"` in case the owner sets a custom address for the session which is different from the default. */
        customAddress?: Address$6;
    }
    enum LocationType$6 {
        UNDEFINED = "UNDEFINED",
        OWNER_BUSINESS = "OWNER_BUSINESS",
        OWNER_CUSTOM = "OWNER_CUSTOM",
        CUSTOM = "CUSTOM"
    }
    /** Physical address */
    interface Address$6 extends AddressStreetOneOf$6 {
        /** Street name, number and apartment number. */
        streetAddress?: StreetAddress$6;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
        /** Country code. */
        country?: string | null;
        /** Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Zip/postal code. */
        postalCode?: string | null;
        /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
        addressLine2?: string | null;
        /** A string containing the full address of this location. */
        formattedAddress?: string | null;
        /** Free text to help find the address. */
        hint?: string | null;
        /** Coordinates of the physical address. */
        geocode?: AddressLocation$6;
        /** Country full name. */
        countryFullname?: string | null;
        /** Multi-level subdivisions from top to bottom. */
        subdivisions?: Subdivision$6[];
    }
    /** @oneof */
    interface AddressStreetOneOf$6 {
        /** Street name, number and apartment number. */
        streetAddress?: StreetAddress$6;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
    }
    interface StreetAddress$6 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /** Apartment number. */
        apt?: string;
    }
    interface AddressLocation$6 {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision$6 {
        /** Subdivision code. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        code?: string;
        /** Subdivision full name. */
        name?: string;
    }
    interface LocationsLocation$3 {
        /**
         * Location ID.
         * @readonly
         */
        _id?: string | null;
        /** Location name. */
        name?: string;
        /** Location description. */
        description?: string | null;
        /**
         * Whether this is the default location. There can only be one default location per site. The default location can't be archived.
         * @readonly
         */
        default?: boolean;
        /**
         * Location status. Defaults to `ACTIVE`.
         * __Note:__ [Archiving a location](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/archivelocation)
         * doesn't affect the location's status. `INACTIVE` is currently not supported.
         */
        status?: LocationStatus$3;
        /**
         * Location type.
         *
         * **Note:** Currently not supported.
         */
        locationType?: LocationsLocationType$3;
        /** Fax number. */
        fax?: string | null;
        /** Timezone in `America/New_York` format. */
        timeZone?: string | null;
        /** Email address. */
        email?: string | null;
        /** Phone number. */
        phone?: string | null;
        /** Address. */
        address?: LocationsAddress$3;
        /**
         * Business schedule. Array of weekly recurring time periods when the location is open for business. Limited to 100 time periods.
         *
         * __Note:__ Not supported by Wix Bookings.
         */
        businessSchedule?: BusinessSchedule$3;
        /**
         * Revision number, which increments by 1 each time the location is updated.
         * To prevent conflicting changes, the existing revision must be used when updating a location.
         */
        revision?: string | null;
        /**
         * Whether the location is archived. Archived locations can't be updated.
         * __Note:__ [Archiving a location](https://www.wix.com/velo/reference/wix-business-tools-v2/locations/archivelocation)
         * doesn't affect its `status`.
         * @readonly
         */
        archived?: boolean;
        /** Location types. */
        locationTypes?: LocationsLocationType$3[];
    }
    /** For future use */
    enum LocationStatus$3 {
        ACTIVE = "ACTIVE",
        INACTIVE = "INACTIVE"
    }
    /** For future use */
    enum LocationsLocationType$3 {
        UNKNOWN = "UNKNOWN",
        BRANCH = "BRANCH",
        OFFICES = "OFFICES",
        RECEPTION = "RECEPTION",
        HEADQUARTERS = "HEADQUARTERS",
        INVENTORY = "INVENTORY"
    }
    interface LocationsAddress$3 {
        /** 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
        country?: string | null;
        /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /** Street address. Includes street name, number, and apartment number in separate fields. */
        streetAddress?: LocationsStreetAddress$3;
        /** Full address of the location. */
        formatted?: string | null;
        /** Geographic coordinates of location. */
        location?: LocationsAddressLocation$3;
    }
    /** Street address. Includes street name, number, and apartment number in separate fields. */
    interface LocationsStreetAddress$3 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /** Apartment number. */
        apt?: string;
    }
    /** Address Geolocation */
    interface LocationsAddressLocation$3 {
        /** Latitude of the location. Must be between -90 and 90. */
        latitude?: number | null;
        /** Longitude of the location. Must be between -180 and 180. */
        longitude?: number | null;
    }
    /** Business schedule. Regular and exceptional time periods when the business is open or the service is available. */
    interface BusinessSchedule$3 {
        /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
        periods?: TimePeriod$3[];
        /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
        specialHourPeriod?: SpecialHourPeriod$3[];
    }
    /** Weekly recurring time periods when the business is regularly open or the service is available. */
    interface TimePeriod$3 {
        /** Day of the week the period starts on. */
        openDay?: DayOfWeek$3;
        /**
         * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
         * midnight at the end of the specified day.
         */
        openTime?: string;
        /** Day of the week the period ends on. */
        closeDay?: DayOfWeek$3;
        /**
         * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
         * midnight at the end of the specified day.
         *
         * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
         */
        closeTime?: string;
    }
    /** Enumerates the days of the week. */
    enum DayOfWeek$3 {
        MONDAY = "MONDAY",
        TUESDAY = "TUESDAY",
        WEDNESDAY = "WEDNESDAY",
        THURSDAY = "THURSDAY",
        FRIDAY = "FRIDAY",
        SATURDAY = "SATURDAY",
        SUNDAY = "SUNDAY"
    }
    /** Exception to the business's regular hours. The business can be open or closed during the exception. */
    interface SpecialHourPeriod$3 {
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
    interface Rate$3 {
        /**
         * Mapping between a named price option, for example, adult or child prices, and the price, currency, and down payment amount.
         * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
         */
        labeledPriceOptions?: Record<string, Price$3>;
        /**
         * Textual price information used when **Price Per Session** is set to **Custom Price** in the app's service details page.
         * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
         */
        priceText?: string | null;
    }
    interface Price$3 {
        /** Required payment amount. */
        amount?: string;
        /** Currency in which the amount is quoted. */
        currency?: string;
        /** Amount of a down payment or deposit as part of the transaction. */
        downPayAmount?: string;
    }
    /**
     * <!-- Needs updating when recurrence has been tested
     * Schedule's availability calculation is executed by the schedule's available intervals and this additional information.
     * Schedule's available intervals are recurring intervals (defined in the schedule) minus sessions that has no more spots for bookings (including time between_slots), or schedule's sessions with open spots for bookings.-->
     */
    interface Availability$3 {
        /** Date and time the schedule starts to be available for booking. */
        start?: Date;
        /** Date and time the schedule stops being available for booking. No value indicates no end time. */
        end?: Date;
        /** Other schedules that impact the availability calculation. Relevant only when there are availability constraints. */
        linkedSchedules?: LinkedSchedule$3[];
        /** Constraints for calculating the schedule's availability. */
        constraints?: AvailabilityConstraints$3;
    }
    /** Describes how to calculate the specific slots that are available for booking. */
    interface AvailabilityConstraints$3 {
        /**
         * A list of duration options for slots, in minutes. Minimum value for a duration is 1.
         * The availability calculation generates slots with these durations, where there is no conflict with existing sessions or other availability constraints.
         */
        slotDurations?: number[];
        /**
         * The number of minutes between the `end` of one slot, and the `start` of the next.
         * Minimum value is 0, maximum value is 120.
         */
        timeBetweenSlots?: number;
        /**
         * Specify how to split the slots in intervals of minutes.
         * This value indicates the time between available slots' start time. e.g., from 5 minute slots (3:00, 3:05, 3:15) and 1 hour slots (3:00, 4:00, 5:00).
         * Optional. The default is the first duration in slot_durations field.
         * Deprecated. Use the `split_slots_interval.value_in_minutes`.
         */
        splitInterval?: number | null;
        /**
         * An object defining the time between available slots' start times.  For example, a slot with slots_split_interval=5 can start every 5 minutes. The default is the slot duration.
         * @readonly
         */
        slotsSplitInterval?: SplitInterval$3;
    }
    /** The time between available slots' start times. For example, For 5 minute slots, 3:00, 3:05, 3:15 etc. For 1 hour slots, 3:00, 4:00, 5:00 etc. */
    interface SplitInterval$3 {
        /**
         * Whether the slot duration is used as the split interval value.
         * If `same_as_duration` is `true`, the `value_in_minutes` is the sum of the first duration in
         * `schedule.availabilityConstraints.SlotDurations` field, and `schedule.availabilityConstraints.TimeBetweenSlots` field.
         */
        sameAsDuration?: boolean | null;
        /** Number of minutes between available slots' start times when `same_as_duration` is `false`. */
        valueInMinutes?: number | null;
    }
    interface Participant$3 {
        /** Participant ID. Currently represents the booking.id. */
        _id?: string;
        /** Contact ID. */
        contactId?: string | null;
        /** Participant's name. */
        name?: string | null;
        /** Participant's phone number. */
        phone?: string | null;
        /** Participant's email address. */
        email?: string | null;
        /** Group or party size. The number of people attending. Defaults to 0. Maximum is 250. */
        partySize?: number;
        /**
         * Approval status for the participant.
         * <!-- Commented out untill updateParticipant is exposed Generally the same status as the booking, unless updated using the `updateParticipant()` API. Defaults to `"UNDEFINED"`.-->
         * <!--ONLY:VELO
         * One of:
         * - `"PENDING"` Pending business approval.
         * - `"APPROVED"` Approved by the business.
         * - `"DECLINED"` Declined by the business.
         * <!--END:ONLY:VELO-->
         */
        approvalStatus?: ApprovalStatus$3;
        /**
         * Whether the participant was inherited from the schedule, as opposed to being booked directly to the session.
         * @readonly
         */
        inherited?: boolean;
    }
    enum ApprovalStatus$3 {
        /** Default. */
        UNDEFINED = "UNDEFINED",
        /** Pending business approval. */
        PENDING = "PENDING",
        /** Approved by the business. */
        APPROVED = "APPROVED",
        /** Declined by the business. */
        DECLINED = "DECLINED"
    }
    interface ExternalCalendarOverrides$3 {
        /** Synced title of the external calendar event. */
        title?: string | null;
        /** Synced description of the external calendar event. */
        description?: string | null;
    }
    enum ScheduleStatus$3 {
        UNDEFINED = "UNDEFINED",
        /** The default value when the schedule is created. */
        CREATED = "CREATED",
        /** The schedule has been canceled. */
        CANCELLED = "CANCELLED"
    }
    interface Version$3 {
        /** Schedule version number, updated each time the schedule is updated. */
        scheduleVersion?: number | null;
        /** Participants version number, updated each time the schedule participants are updated. */
        participantsVersion?: number | null;
    }
    interface ConferenceProvider$3 {
        /** Conferencing provider ID */
        providerId?: string;
    }
    interface CalendarConference$3 {
        /** Wix Calendar conference ID. */
        _id?: string;
        /** Conference meeting ID in the provider's conferencing system. */
        externalId?: string;
        /** Conference provider ID. */
        providerId?: string;
        /** URL used by the host to start the conference. */
        hostUrl?: string;
        /** URL used by a guest to join the conference. */
        guestUrl?: string;
        /** Password to join the conference. */
        password?: string | null;
        /** Conference description. */
        description?: string | null;
        /**
         * Conference type.
         * <!--ONLY:VELO
         * One of:
         * - `"ONLINE_MEETING_PROVIDER"` API-generated online meeting.
         * - `"CUSTOM"` User-defined meeting.
         * <!--END:ONLY:VELO-->
         */
        conferenceType?: ConferenceType$3;
        /** ID of the account owner in the video conferencing service. */
        accountOwnerId?: string | null;
    }
    enum ConferenceType$3 {
        UNDEFINED = "UNDEFINED",
        /** API-generated online meeting. */
        ONLINE_MEETING_PROVIDER = "ONLINE_MEETING_PROVIDER",
        /** User-defined meeting. */
        CUSTOM = "CUSTOM"
    }
    interface ScheduleUpdated$3 {
        /** The old schedule before the update. */
        oldSchedule?: Schedule$3;
        /** The new schedule after the update. */
        newSchedule?: Schedule$3;
        /**
         * Recurring sessions updated event. If this field is given, the reason for the schedule updated event was
         * updating at least one of the given schedule's recurring sessions.
         * This event is triggered by create/update/delete recurring session apis.
         */
        recurringSessions?: RecurringSessionsUpdated$3;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$6;
        /**
         * Whether this notification was created as a result of an anonymization request, such as GDPR.
         * An anonymized participant will have the following details:
         * name = "deleted"
         * phone = "deleted"
         * email = "deleted@deleted.com"
         */
        triggeredByAnonymizeRequest?: boolean | null;
    }
    interface RecurringSessionsUpdated$3 {
        /** Old schedule's recurring session list. */
        oldRecurringSessions?: Session$3[];
        /** New schedule's recurring session list. */
        newRecurringSessions?: Session$3[];
    }
    interface Session$3 {
        /**
         * Session ID.
         * @readonly
         */
        _id?: string | null;
        /** ID of the schedule that the session belongs to. */
        scheduleId?: string;
        /**
         * ID of the resource or service that the session's schedule belongs to.
         * @readonly
         */
        scheduleOwnerId?: string | null;
        /** Original start date and time of the session in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. */
        originalStart?: Date;
        /** An object specifying the start date and time of the session. If the session is a recurring session, `start` must contain a `localDateTime`. */
        start?: CalendarDateTime$3;
        /**
         * An object specifying the end date and time of the session. The `end` time must be after the `start` time and be same type as `start`.
         * If the session is a recurring session, `end` must contain a `localDateTime`.
         */
        end?: CalendarDateTime$3;
        /**
         * An object specifying a list of schedules and the way each schedule's availability is affected by the session. For example, the schedule of an instructor is affected by sessions of the class that they instruct.
         * The array is inherited from the schedule and can be overridden even if the session is a recurring session.
         */
        affectedSchedules?: LinkedSchedule$3[];
        /**
         * Session title.
         * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
         */
        title?: string | null;
        /**
         * __Deprecated.__
         * Tags for the session.
         * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
         */
        tags?: string[] | null;
        /**
         * An object describing the location where the session takes place.
         * Defaults to the schedule location.
         * For single sessions, `session.location.businessLocation` can only be provided for locations that are defined in the schedule using `schedule.location` or `schedule.availability.locations`.
         */
        location?: Location$6;
        /**
         * Maximum number of participants that can be added to the session. Defaults to the schedule capacity.
         * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
         */
        capacity?: number | null;
        /** Deprecated. Please use the [Booking Services V2](https://dev.wix.com/api/rest/wix-bookings/services-v2) payment instead. */
        rate?: Rate$3;
        /**
         * Time reserved after the session end time, derived from the schedule availability constraints and the time between slots. Read-only.
         * If the session is a recurring session, this field must be empty.
         */
        timeReservedAfter?: number | null;
        /**
         * Additional information about the session.
         * Notes are not supported for recurring sessions.
         */
        notes?: string;
        /**
         * The number of participants booked for the session. Read-only.
         * Calculated as the sum of the party sizes.
         * @readonly
         */
        totalNumberOfParticipants?: number;
        /**
         * *Partial list** list of participants booked for the session.
         * The list includes participants who have registered for this specific session, and participants who have registered for a schedule that includes this session.
         * If the session is a recurring session, this field must be empty.
         * To retrieve the full list of session participants please use the [Query Extended Bookings API](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings).
         */
        participants?: Participant$3[];
        /**
         * A list of properties for which values were inherited from the schedule.
         * This does not include participants that were inherited from the schedule.
         * @readonly
         */
        inheritedFields?: string[];
        /** __Deprecated.__ */
        externalCalendarOverrides?: ExternalCalendarOverrides$3;
        /**
         * Session status.
         * <!--ONLY:VELO
         * One of:
         * - `"CONFIRMED"` Default value.
         * - `"CANCELLED"` The session was deleted.
         * <!--END:ONLY:VELO-->
         * @readonly
         */
        status?: SessionStatus$1;
        /**
         * Recurring interval ID. Defined when a session will be a recurring session. read-only. Optional.
         * For exmaple, when creating a class service  with recurring sessions, you add a recurrence rule to create recurring sessions.
         * This field is omitted for single sessions or instances of recurring sessions.
         * Specified when the session was originally generated from a schedule recurring interval.
         * Deprecated. Use `recurringSessionId`.
         * @readonly
         */
        recurringIntervalId?: string | null;
        /**
         * The ID of the recurring session if this session is an instance of a recurrence. Use this ID to update the recurrence and all of the instances.
         * @readonly
         */
        recurringSessionId?: string | null;
        /**
         * Session type.
         * <!--ONLY:VELO
         * One of:
         * - `"EVENT"` Reserved period of time on the schedule. For example, an appointment, class, course, or blocked time. Events are visible in the Dashboard in the Bookings app's [Booking Calendar](https://support.wix.com/en/article/wix-bookings-about-the-wix-bookings-calendar) page.
         * - `"WORKING_HOURS"` Placeholder for available time on a resource’s schedule.
         * <!--END:ONLY:VELO-->
         */
        type?: SessionType$3;
        /**
         * A conference created for the session according to the details set in the schedule's conference provider information.
         * If the session is a recurring session, this field is inherited from the schedule.
         * **Partially deprecated.** Only `hostUrl` and `guestUrl` are to be supported.
         */
        calendarConference?: CalendarConference$3;
        /**
         * A string representing a recurrence rule (RRULE) for a recurring session, as defined in [iCalendar RFC 5545](https://icalendar.org/iCalendar-RFC-5545/3-3-10-recurrence-rule.html).
         * If the session is an instance of a recurrence pattern, the `instanceOfRecurrence` property will be contain the recurrence rule and this property will be empty.
         * The RRULE defines a rule for repeating a session.
         * Supported parameters are:
         *
         * |Keyword|Description|Supported values|
         * |--|--|---|
         * |`FREQ`|The frequency at which the session is recurs. Required.|`WEEKLY`|
         * |`INTERVAL`|How often, in terms of `FREQ`, the session recurs. Default is 1. Optional.|
         * |`UNTIL`|The UTC end date and time of the recurrence. Optional.|
         * |`BYDAY`|Day of the week when the event should recur. Required.|One of: `MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`|
         *
         *
         * For example, a session that repeats every second week on a Monday until January 7, 2022 at 8 AM:
         * `"FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20220107T080000Z"`
         *
         * <!--ORIGINAL COMMENTS:
         * `FREQ` — The frequency with which the session should be repeated (such as DAILY or WEEKLY).
         * Supported `WEEKLY` value is supported.
         * INTERVAL — Works together with FREQ to specify how often the session should be repeated. For example, FREQ=WEEKLY;INTERVAL=2 means once every two weeks. Optional. Default value is 1.
         * COUNT — The number of times this event should be repeated. Not yet supported.
         * UNTIL — The UTC date & time until which the session should be repeated. This parameter is optional. When it is not specified, the event repeats forever.
         * The format is a short ISO date, followed by 'T' and a short time with seconds and without milliseconds, terminated by the UTC designator 'Z'. For example, until Jan. 19th 2018 at 7:00 AM: 'UNTIL=20180119T070000Z'.
         * BYDAY - The days of the week when the event should be repeated. Currently, only a single day is supported. This parameter is mandatory.
         * Possible values are: MO, TU, WE, TH, FR, SA, SU
         * Note that DTSTART and DTEND lines are not allowed in this field; session start and end times are specified in the start and end fields.
         * **Example**: FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20200427T070000Z
         * ORIGINAL COMMENTS-->
         */
        recurrence?: string | null;
        /**
         * A string representing a recurrence rule (RRULE) if the session is an instance of a recurrence pattern.
         * Empty when the session is not an instance of a recurrence rule, or if the session defines a recurrence pattern, and `recurrence` is not empty.
         * @readonly
         */
        instanceOfRecurrence?: string | null;
        /**
         * The session version.
         * Composed by the schedule, session and participants versions.
         * @readonly
         */
        version?: SessionVersion$3;
    }
    interface CalendarDateTime$3 {
        /**
         * UTC date-time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. If a time zone offset is specified, the time is converted to UTC. For example, if you specify  `new Date('2021-01-06T16:00:00.000-07:00')`, the stored value will be `"2021-01-06T23:00:00.000Z"`.
         * Required if `localDateTime` is not specified.
         * If `localDateTime` is specified, `timestamp` is calculated as `localDateTime`, using the business's time zone.
         */
        timestamp?: Date;
        /** An object containing the local date and time for the business's time zone. */
        localDateTime?: LocalDateTime$3;
        /**
         * The time zone. Optional. Derived from the schedule's time zone.
         * In case this field is associated with recurring session, this field is empty.
         * @readonly
         */
        timeZone?: string | null;
    }
    interface LocalDateTime$3 {
        /** Year. 4-digit format. */
        year?: number | null;
        /** Month number, from 1-12. */
        monthOfYear?: number | null;
        /** Day of the month, from 1-31. */
        dayOfMonth?: number | null;
        /** Hour of the day in 24-hour format, from 0-23. */
        hourOfDay?: number | null;
        /** Minute, from 0-59. */
        minutesOfHour?: number | null;
    }
    interface ExternalCalendarInfo$3 {
        /** The external calendar type (e.g. Google Calendar, iCal, etc). */
        calendarType?: CalendarType$3;
    }
    enum SessionStatus$1 {
        UNDEFINED = "UNDEFINED",
        /** The session is confirmed. Default status. */
        CONFIRMED = "CONFIRMED",
        /**
         * The session is cancelled.
         * A cancelled session can be the cancellation of a recurring session that should no longer be displayed or a deleted single session.
         * The ListSessions returns cancelled sessions only if 'includeDelete' flag is set to true.
         */
        CANCELLED = "CANCELLED"
    }
    enum SessionType$3 {
        UNDEFINED = "UNDEFINED",
        /**
         * The session creates an event on the calendar for the owner of the schedule that the session belongs to.
         * Default type.
         */
        EVENT = "EVENT",
        /** The session represents a resource's available working hours. */
        WORKING_HOURS = "WORKING_HOURS",
        /** Deprecated. please use WORKING_HOURS */
        TIME_AVAILABILITY = "TIME_AVAILABILITY",
        /** Deprecated. The session represents a resource's available hours. please use WORKING_HOURS */
        AVAILABILITY = "AVAILABILITY"
    }
    interface SessionVersion$3 {
        /** Incremental version number, which is updated on each change to the session or on changes affecting the session. */
        number?: string | null;
    }
    interface ParticipantNotification$6 {
        /**
         * Whether to send the message about the changes to the customer.
         *
         * Default: `false`
         */
        notifyParticipants?: boolean;
        /** Custom message to send to the participants about the changes to the booking. */
        message?: string | null;
    }
    interface ScheduleCancelled$3 {
        schedule?: Schedule$3;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$6;
        oldSchedule?: Schedule$3;
    }
    interface SessionCreated$3 {
        session?: Session$3;
    }
    interface SessionUpdated$3 {
        oldSession?: Session$3;
        newSession?: Session$3;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$6;
        /**
         * Whether this notification was created as a result of an anonymization request, such as GDPR.
         * An anonymized participant will have the following details:
         * name = "deleted"
         * phone = "deleted"
         * email = "deleted@deleted.com"
         */
        triggeredByAnonymizeRequest?: boolean | null;
    }
    interface SessionCancelled$3 {
        session?: Session$3;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$6;
    }
    interface AvailabilityPolicyUpdated$3 {
        availabilityPolicy?: AvailabilityPolicy$3;
    }
    /** Availability policy applied to all site schedules. */
    interface AvailabilityPolicy$3 {
        /** Specify how to split the schedule slots in intervals of minutes. */
        splitInterval?: SplitInterval$3;
    }
    interface IntervalSplit$3 {
        scheduleId?: string;
        intervals?: RecurringInterval$3[];
        newScheduleVersion?: number | null;
        oldScheduleVersion?: number | null;
    }
    interface RecurringSessionSplit$3 {
        scheduleId?: string;
        recurringSessions?: Session$3[];
        newScheduleVersion?: number | null;
        oldScheduleVersion?: number | null;
    }
    /** Schedule unassigned from user. */
    interface ScheduleUnassignedFromUser$3 {
        /** The Wix user id. */
        userId?: string | null;
        /** The schedule that was unassigned from the user. */
        schedule?: Schedule$3;
    }
    interface MultipleSessionsCreated$3 {
        schedulesWithSessions?: ScheduleWithSessions$3[];
    }
    interface ScheduleWithSessions$3 {
        schedule?: Schedule$3;
        siteProperties?: SitePropertiesOnScheduleCreation$3;
        sessions?: Session$3[];
    }
    interface SitePropertiesOnScheduleCreation$3 {
        /** The global time zone value. */
        timeZone?: string | null;
    }
    interface MigrationEvent$3 {
        migrationData?: MigrationData$3;
    }
    interface MigrationData$3 {
        businessId?: string | null;
        staffs?: StaffData$3[];
    }
    interface StaffData$3 {
        resourceId?: string;
        syncRequestEmail?: string;
        refreshToken?: string;
    }
    interface Empty$3 {
    }
    /**
     * Retrieves a list of the external calendar providers for which the site supports integration.
     *
     *
     * The list of external calendar providers includes:
     *
     * + External calendar providers that are supported by default, such as Google, Apple, and Microsoft.
     * + External calenders for which the site owner has enabled integration by installing an app.
     *
     * For each external calendar provider, the list contains information about supported connection methods and features.
     * For each provider, check `features.connectMethods` to find out whether to use [`connectByCredentials()`](#connect-by-credentials) or [`connectByOAuth()`](#connect-by-o-auth) to establish a connection.
     *
     * @public
     * @documentationMaturity preview
     * @adminMethod
     */
    function listProviders(): Promise<ListProvidersResponse>;
    /**
     * Retrieves an external calendar connection by ID.
     *
     *
     * The external calendar connection contains details of the connection between a Wix site's calendar and calendars hosted by an external provider.
     *
     * The `syncConfig` property contains configuration details for importing events from an external calendar, exporting events to an external calendar, or both.
     * @param connectionId - ID of the connection to retrieve.
     * @public
     * @documentationMaturity preview
     * @requiredField connectionId
     * @adminMethod
     */
    function getConnection(connectionId: string | null): Promise<GetConnectionResponse>;
    /**
     * Retrieves a list of external calendar connections.
     *
     *
     * Each external calendar connections contain details of a connection between a Wix site's calendar and calendars hosted by an external provider.
     *
     * The `syncConfig` property of each connection contains configuration details for importing events from an external calendar, exporting events to an external calendar, or both.
     * @public
     * @documentationMaturity preview
     * @adminMethod
     */
    function listConnections(options?: ListConnectionsOptions): Promise<ListConnectionsResponse>;
    interface ListConnectionsOptions {
        /**
         * Schedule IDs to filter by. If provided, only connections between external calendars and the specified schedules is returned.
         *
         * Default: Returns all connections.
         */
        scheduleIds?: string[] | null;
        /**
         * Whether to return a partial list of connections if details can't be retrieved for some connections.
         *
         * Default: `false`
         */
        partialFailure?: boolean | null;
    }
    /**
     * Connects to an external calendar using the OAuth authorization protocol.
     *
     *
     * The authorization flow should take place as follows:
     *
     * 1. Call the function with the appropriate parameters.
     * 2. Redirect the user to the URL received in the response.
     * 3. The user authorizes access.
     * 4. The user is redirected to the URL you provide in the `redirectUrl` parameter, with a query parameter `connectionId` containing the new connection ID.
     *
     * If the attempt to connect fails, the user is still redirected to the URL you provide in the `redirectUrl` parameter,
     * but with a query parameter `error` containing one of the following values:
     *
     * - `reject`: The user rejected the authorization request.
     * - `unsupported`: Connecting to the user's external account type is not supported by the provider.
     * - `internal`: An error unrelated to the client or the request that prevents the server from fulfilling the request.
     *
     * Once a connection is successfully created, use [`listEvents()`](#list-events) to obtain an up-to-date list of events in the connected external calendars.
     *
     * > **Note:**
     * > Use [`listProviders()`](#list-providers) to find out whether to connect to a particular provider using this endpoint or [`connectByCredentials()`](#connect-by-credentials).
     * @param scheduleId - ID of the schedule to connect with the external calendar account.
     * @param redirectUrl - URL to redirect the user to after they authorize access to the external calendar account.
     *
     * If the connection is successfully established, the user is redirected to this URL with a query parameter `connectionId` containing the new connection ID.
     * If the attempt to connect fails, the user is redirected to this URL with a query parameter `error` containing the error type.
     * @public
     * @documentationMaturity preview
     * @requiredField providerId
     * @requiredField redirectUrl
     * @requiredField scheduleId
     * @param providerId - ID of the external calendar provider. Find this with the [`listProviders()`](#list-providers) function.
     * @adminMethod
     */
    function connectByOAuth(providerId: string | null, scheduleId: string | null, redirectUrl: string | null, options?: ConnectByOAuthOptions): Promise<ConnectByOAuthResponse>;
    interface ConnectByOAuthOptions {
    }
    interface OAuthCompletedOptions {
        body?: Uint8Array;
        pathParams?: PathParametersEntry[];
        queryParams?: QueryParametersEntry[];
        headers?: HeadersEntry[];
        method?: string;
        rawPath?: string;
        rawQuery?: string;
    }
    /**
     * Connects to an external calendar by directly providing the external calendar account credentials.
     *
     *
     * Once a connection is successfully created, use [`listEvents()`](#list-events) to obtain an up-to-date list of events in the connected external calendars.
     *
     * > **Note:**
     * > Use [`listProviders()`](#list-providers) to find out whether to connect to a particular provider using this method or [`connectByOAuth()`](#connect-by-o-auth).
     * @param scheduleId - ID of the schedule to connect with the external calendar account.
     * @param email - Email address for the external calendar account.
     * @param password - Password for the external calendar account.
     * @public
     * @documentationMaturity preview
     * @requiredField email
     * @requiredField password
     * @requiredField providerId
     * @requiredField scheduleId
     * @param providerId - ID of the external calendar provider. Find this with the [`listProviders()`](#list-providers) function.
     * @adminMethod
     */
    function connectByCredentials(providerId: string | null, scheduleId: string | null, email: string | null, password: string | null): Promise<ConnectByCredentialsResponse>;
    /**
     * Retrieves a list of calendars belonging to the connected external calendar account.
     *
     *
     * > **Note:**
     * > Before using this function, establish a connection with an external calendar using [`connectByCredentials()`](#connect-by-credentials) or [`connectByOAuth()`](#connect-by-o-auth).
     * @param connectionId - ID of the external calendar connection to list calendars for.
     * @public
     * @documentationMaturity preview
     * @requiredField connectionId
     * @adminMethod
     */
    function listCalendars(connectionId: string | null): Promise<ListCalendarsResponse>;
    /**
     * Updates the specified external calendar connection's sync configuration.
     *
     *
     * Use Update Sync Config to update a connection's `syncConfig` property.
     * The `syncConfig` property contains settings for enabling, configuring, or disabling functionality, including:
     *
     * + Importing events from one or more specified calendars in the connected external calendar account. If this is enabled, use [`listEvents()`](#list-events) to retrieve a list of events from the external calendar.
     * + Exporting events from the Wix site's calendar to an external calendar.
     *
     * To see an external calendar connection's existing sync configuration, use [`getConnection()`](#get-connection) or [`listConnections()`](#list-connections) and see the `syncConfig` property.
     *
     * > **Note:**
     * > Supported functionality depends on the provider. Use [`listProviders()`](#list-providers) to see details about providers' supported features.
     * @param connectionId - ID of the external calendar connection to update.
     * @param syncConfig - Updated sync configuration details.
     * @public
     * @documentationMaturity preview
     * @requiredField connectionId
     * @requiredField syncConfig
     * @adminMethod
     */
    function updateSyncConfig(connectionId: string | null, syncConfig: ConnectionSyncConfig, options?: UpdateSyncConfigOptions): Promise<UpdateSyncConfigResponse>;
    interface UpdateSyncConfigOptions {
    }
    /**
     * Disconnects from an external calendar.
     *
     *
     * When an external calendar is disconnected, the external calendar connection's `status` is changed to `DISCONNECTED`.
     *
     * After disconnecting, [`listEvents()`](#list-events) no longer returns events from the disconnected external calendar.
     * Exported Wix calendar sessions are deleted from the external calendar.
     * @param connectionId - ID of the external calendar connection to disconnect.
     * @public
     * @documentationMaturity preview
     * @requiredField connectionId
     * @adminMethod
     */
    function disconnect(connectionId: string | null): Promise<DisconnectResponse>;
    /**
     * Retrieves a list of events from all connected external calendars, based on the provided filtering and paging.
     *
     *
     * Use List Events to retrieve an aggregated list of events in the connected external calendars for a specified time range, sorted by start date.
     *
     * > **Note:**
     * > Before using this function, establish a connection with an external calendar using [`connectByCredentials()`](#connect-by-credentials) or [`connectByOAuth()`](#connect-by-o-auth).
     * @public
     * @documentationMaturity preview
     * @adminMethod
     */
    function listEvents(options?: ListEventsOptions): Promise<ListEventsResponse>;
    interface ListEventsOptions {
        /**
         * Date and time from which to retrieve events,
         * formatted according to [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt).
         * Required, unless `cursorPaging.cursor` is provided.
         *
         * Events which start before the `from` time and end after it are included in the returned list.
         */
        from?: string | null;
        /**
         * Date and time until which to retrieve events,
         * formatted according to [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt).
         * Required, unless `cursorPaging.cursor` is provided.
         *
         * Events which start before the `to` time and end after it are included in the returned list.
         */
        to?: string | null;
        /**
         * Schedule IDs to filter by. If provided, the returned list includes only events belonging to external calendars connected to the specified schedules.
         * Maximum of 100 schedule IDs per request.
         */
        scheduleIds?: string[] | null;
        /**
         * Wix user IDs to filter by. If provided, the returned list includes only events belonging to external calendars connected to schedules belonging to the specified Wix users.
         * Maximum of 100 Wix user IDs per request.
         */
        userIds?: string[] | null;
        /**
         * Whether to include only all-day events in the returned list.
         * If `true`, only all-day events are returned.
         * If `false`, only events with a specified time are returned.
         *
         * Default: All events are returned.
         */
        allDay?: boolean | null;
        /**
         * Predefined sets of fields to return.
         * - `NO_PI`: Returns event objects without personal information.
         * - `OWN_PI`: Returns complete event objects, including personal information.
         *
         * Default: `NO_PI`
         */
        fieldsets?: string[];
        /** Pagination options. */
        cursorPaging?: CursorPaging$6;
        /**
         * Whether to return a partial list of events if details can't be retrieved for some connections.
         *
         * Default: `false`
         */
        partialFailure?: boolean | null;
    }
    type bookingsCalendarV2ExternalCalendar_universal_d_ExternalCalendar = ExternalCalendar;
    type bookingsCalendarV2ExternalCalendar_universal_d_ListProvidersRequest = ListProvidersRequest;
    type bookingsCalendarV2ExternalCalendar_universal_d_ListProvidersResponse = ListProvidersResponse;
    type bookingsCalendarV2ExternalCalendar_universal_d_Provider = Provider;
    type bookingsCalendarV2ExternalCalendar_universal_d_ProviderFeatures = ProviderFeatures;
    type bookingsCalendarV2ExternalCalendar_universal_d_ConnectMethod = ConnectMethod;
    const bookingsCalendarV2ExternalCalendar_universal_d_ConnectMethod: typeof ConnectMethod;
    type bookingsCalendarV2ExternalCalendar_universal_d_ListEventFromCalendars = ListEventFromCalendars;
    const bookingsCalendarV2ExternalCalendar_universal_d_ListEventFromCalendars: typeof ListEventFromCalendars;
    type bookingsCalendarV2ExternalCalendar_universal_d_SyncToCalendar = SyncToCalendar;
    const bookingsCalendarV2ExternalCalendar_universal_d_SyncToCalendar: typeof SyncToCalendar;
    type bookingsCalendarV2ExternalCalendar_universal_d_GetConnectionRequest = GetConnectionRequest;
    type bookingsCalendarV2ExternalCalendar_universal_d_GetConnectionResponse = GetConnectionResponse;
    type bookingsCalendarV2ExternalCalendar_universal_d_Connection = Connection;
    type bookingsCalendarV2ExternalCalendar_universal_d_ErrorReason = ErrorReason;
    const bookingsCalendarV2ExternalCalendar_universal_d_ErrorReason: typeof ErrorReason;
    type bookingsCalendarV2ExternalCalendar_universal_d_ConnectionSyncConfig = ConnectionSyncConfig;
    type bookingsCalendarV2ExternalCalendar_universal_d_Calendar = Calendar;
    type bookingsCalendarV2ExternalCalendar_universal_d_PrimaryCalendar = PrimaryCalendar;
    type bookingsCalendarV2ExternalCalendar_universal_d_Calendars = Calendars;
    type bookingsCalendarV2ExternalCalendar_universal_d_DedicatedCalendar = DedicatedCalendar;
    type bookingsCalendarV2ExternalCalendar_universal_d_ConnectionSyncConfigListEventFromCalendars = ConnectionSyncConfigListEventFromCalendars;
    type bookingsCalendarV2ExternalCalendar_universal_d_ConnectionSyncConfigListEventFromCalendarsListFromOneOf = ConnectionSyncConfigListEventFromCalendarsListFromOneOf;
    type bookingsCalendarV2ExternalCalendar_universal_d_ConnectionSyncConfigSyncToCalendar = ConnectionSyncConfigSyncToCalendar;
    type bookingsCalendarV2ExternalCalendar_universal_d_ConnectionSyncConfigSyncToCalendarSyncToOneOf = ConnectionSyncConfigSyncToCalendarSyncToOneOf;
    type bookingsCalendarV2ExternalCalendar_universal_d_SyncToErrorReason = SyncToErrorReason;
    const bookingsCalendarV2ExternalCalendar_universal_d_SyncToErrorReason: typeof SyncToErrorReason;
    type bookingsCalendarV2ExternalCalendar_universal_d_ListConnectionsRequest = ListConnectionsRequest;
    type bookingsCalendarV2ExternalCalendar_universal_d_ListConnectionsResponse = ListConnectionsResponse;
    type bookingsCalendarV2ExternalCalendar_universal_d_ConnectByOAuthRequest = ConnectByOAuthRequest;
    type bookingsCalendarV2ExternalCalendar_universal_d_ConnectByOAuthResponse = ConnectByOAuthResponse;
    type bookingsCalendarV2ExternalCalendar_universal_d_RawHttpRequest = RawHttpRequest;
    type bookingsCalendarV2ExternalCalendar_universal_d_PathParametersEntry = PathParametersEntry;
    type bookingsCalendarV2ExternalCalendar_universal_d_QueryParametersEntry = QueryParametersEntry;
    type bookingsCalendarV2ExternalCalendar_universal_d_HeadersEntry = HeadersEntry;
    type bookingsCalendarV2ExternalCalendar_universal_d_RawHttpResponse = RawHttpResponse;
    type bookingsCalendarV2ExternalCalendar_universal_d_ConnectByCredentialsRequest = ConnectByCredentialsRequest;
    type bookingsCalendarV2ExternalCalendar_universal_d_ConnectByCredentialsResponse = ConnectByCredentialsResponse;
    type bookingsCalendarV2ExternalCalendar_universal_d_ListCalendarsRequest = ListCalendarsRequest;
    type bookingsCalendarV2ExternalCalendar_universal_d_ListCalendarsResponse = ListCalendarsResponse;
    type bookingsCalendarV2ExternalCalendar_universal_d_UpdateSyncConfigRequest = UpdateSyncConfigRequest;
    type bookingsCalendarV2ExternalCalendar_universal_d_UpdateSyncConfigResponse = UpdateSyncConfigResponse;
    type bookingsCalendarV2ExternalCalendar_universal_d_DisconnectRequest = DisconnectRequest;
    type bookingsCalendarV2ExternalCalendar_universal_d_DisconnectResponse = DisconnectResponse;
    type bookingsCalendarV2ExternalCalendar_universal_d_ListEventsRequest = ListEventsRequest;
    type bookingsCalendarV2ExternalCalendar_universal_d_ListEventsResponse = ListEventsResponse;
    const bookingsCalendarV2ExternalCalendar_universal_d_listProviders: typeof listProviders;
    const bookingsCalendarV2ExternalCalendar_universal_d_getConnection: typeof getConnection;
    const bookingsCalendarV2ExternalCalendar_universal_d_listConnections: typeof listConnections;
    type bookingsCalendarV2ExternalCalendar_universal_d_ListConnectionsOptions = ListConnectionsOptions;
    const bookingsCalendarV2ExternalCalendar_universal_d_connectByOAuth: typeof connectByOAuth;
    type bookingsCalendarV2ExternalCalendar_universal_d_ConnectByOAuthOptions = ConnectByOAuthOptions;
    type bookingsCalendarV2ExternalCalendar_universal_d_OAuthCompletedOptions = OAuthCompletedOptions;
    const bookingsCalendarV2ExternalCalendar_universal_d_connectByCredentials: typeof connectByCredentials;
    const bookingsCalendarV2ExternalCalendar_universal_d_listCalendars: typeof listCalendars;
    const bookingsCalendarV2ExternalCalendar_universal_d_updateSyncConfig: typeof updateSyncConfig;
    type bookingsCalendarV2ExternalCalendar_universal_d_UpdateSyncConfigOptions = UpdateSyncConfigOptions;
    const bookingsCalendarV2ExternalCalendar_universal_d_disconnect: typeof disconnect;
    const bookingsCalendarV2ExternalCalendar_universal_d_listEvents: typeof listEvents;
    type bookingsCalendarV2ExternalCalendar_universal_d_ListEventsOptions = ListEventsOptions;
    namespace bookingsCalendarV2ExternalCalendar_universal_d {
        export { bookingsCalendarV2ExternalCalendar_universal_d_ExternalCalendar as ExternalCalendar, bookingsCalendarV2ExternalCalendar_universal_d_ListProvidersRequest as ListProvidersRequest, bookingsCalendarV2ExternalCalendar_universal_d_ListProvidersResponse as ListProvidersResponse, bookingsCalendarV2ExternalCalendar_universal_d_Provider as Provider, CalendarType$3 as CalendarType, bookingsCalendarV2ExternalCalendar_universal_d_ProviderFeatures as ProviderFeatures, bookingsCalendarV2ExternalCalendar_universal_d_ConnectMethod as ConnectMethod, bookingsCalendarV2ExternalCalendar_universal_d_ListEventFromCalendars as ListEventFromCalendars, bookingsCalendarV2ExternalCalendar_universal_d_SyncToCalendar as SyncToCalendar, bookingsCalendarV2ExternalCalendar_universal_d_GetConnectionRequest as GetConnectionRequest, bookingsCalendarV2ExternalCalendar_universal_d_GetConnectionResponse as GetConnectionResponse, bookingsCalendarV2ExternalCalendar_universal_d_Connection as Connection, Status$3 as Status, bookingsCalendarV2ExternalCalendar_universal_d_ErrorReason as ErrorReason, bookingsCalendarV2ExternalCalendar_universal_d_ConnectionSyncConfig as ConnectionSyncConfig, bookingsCalendarV2ExternalCalendar_universal_d_Calendar as Calendar, bookingsCalendarV2ExternalCalendar_universal_d_PrimaryCalendar as PrimaryCalendar, bookingsCalendarV2ExternalCalendar_universal_d_Calendars as Calendars, bookingsCalendarV2ExternalCalendar_universal_d_DedicatedCalendar as DedicatedCalendar, bookingsCalendarV2ExternalCalendar_universal_d_ConnectionSyncConfigListEventFromCalendars as ConnectionSyncConfigListEventFromCalendars, bookingsCalendarV2ExternalCalendar_universal_d_ConnectionSyncConfigListEventFromCalendarsListFromOneOf as ConnectionSyncConfigListEventFromCalendarsListFromOneOf, bookingsCalendarV2ExternalCalendar_universal_d_ConnectionSyncConfigSyncToCalendar as ConnectionSyncConfigSyncToCalendar, bookingsCalendarV2ExternalCalendar_universal_d_ConnectionSyncConfigSyncToCalendarSyncToOneOf as ConnectionSyncConfigSyncToCalendarSyncToOneOf, bookingsCalendarV2ExternalCalendar_universal_d_SyncToErrorReason as SyncToErrorReason, bookingsCalendarV2ExternalCalendar_universal_d_ListConnectionsRequest as ListConnectionsRequest, bookingsCalendarV2ExternalCalendar_universal_d_ListConnectionsResponse as ListConnectionsResponse, bookingsCalendarV2ExternalCalendar_universal_d_ConnectByOAuthRequest as ConnectByOAuthRequest, bookingsCalendarV2ExternalCalendar_universal_d_ConnectByOAuthResponse as ConnectByOAuthResponse, bookingsCalendarV2ExternalCalendar_universal_d_RawHttpRequest as RawHttpRequest, bookingsCalendarV2ExternalCalendar_universal_d_PathParametersEntry as PathParametersEntry, bookingsCalendarV2ExternalCalendar_universal_d_QueryParametersEntry as QueryParametersEntry, bookingsCalendarV2ExternalCalendar_universal_d_HeadersEntry as HeadersEntry, bookingsCalendarV2ExternalCalendar_universal_d_RawHttpResponse as RawHttpResponse, bookingsCalendarV2ExternalCalendar_universal_d_ConnectByCredentialsRequest as ConnectByCredentialsRequest, bookingsCalendarV2ExternalCalendar_universal_d_ConnectByCredentialsResponse as ConnectByCredentialsResponse, bookingsCalendarV2ExternalCalendar_universal_d_ListCalendarsRequest as ListCalendarsRequest, bookingsCalendarV2ExternalCalendar_universal_d_ListCalendarsResponse as ListCalendarsResponse, bookingsCalendarV2ExternalCalendar_universal_d_UpdateSyncConfigRequest as UpdateSyncConfigRequest, bookingsCalendarV2ExternalCalendar_universal_d_UpdateSyncConfigResponse as UpdateSyncConfigResponse, bookingsCalendarV2ExternalCalendar_universal_d_DisconnectRequest as DisconnectRequest, bookingsCalendarV2ExternalCalendar_universal_d_DisconnectResponse as DisconnectResponse, bookingsCalendarV2ExternalCalendar_universal_d_ListEventsRequest as ListEventsRequest, CursorPaging$6 as CursorPaging, bookingsCalendarV2ExternalCalendar_universal_d_ListEventsResponse as ListEventsResponse, Event$2 as Event, CursorPagingMetadata$3 as CursorPagingMetadata, Cursors$6 as Cursors, ScheduleNotification$3 as ScheduleNotification, ScheduleNotificationEventOneOf$3 as ScheduleNotificationEventOneOf, ScheduleCreated$3 as ScheduleCreated, Schedule$3 as Schedule, RecurringInterval$3 as RecurringInterval, Interval$3 as Interval, Day$3 as Day, Frequency$3 as Frequency, LinkedSchedule$3 as LinkedSchedule, Transparency$3 as Transparency, RecurringIntervalType$3 as RecurringIntervalType, Location$6 as Location, LocationType$6 as LocationType, Address$6 as Address, AddressStreetOneOf$6 as AddressStreetOneOf, StreetAddress$6 as StreetAddress, AddressLocation$6 as AddressLocation, Subdivision$6 as Subdivision, LocationsLocation$3 as LocationsLocation, LocationStatus$3 as LocationStatus, LocationsLocationType$3 as LocationsLocationType, LocationsAddress$3 as LocationsAddress, LocationsStreetAddress$3 as LocationsStreetAddress, LocationsAddressLocation$3 as LocationsAddressLocation, BusinessSchedule$3 as BusinessSchedule, TimePeriod$3 as TimePeriod, DayOfWeek$3 as DayOfWeek, SpecialHourPeriod$3 as SpecialHourPeriod, Rate$3 as Rate, Price$3 as Price, Availability$3 as Availability, AvailabilityConstraints$3 as AvailabilityConstraints, SplitInterval$3 as SplitInterval, Participant$3 as Participant, ApprovalStatus$3 as ApprovalStatus, ExternalCalendarOverrides$3 as ExternalCalendarOverrides, ScheduleStatus$3 as ScheduleStatus, Version$3 as Version, ConferenceProvider$3 as ConferenceProvider, CalendarConference$3 as CalendarConference, ConferenceType$3 as ConferenceType, ScheduleUpdated$3 as ScheduleUpdated, RecurringSessionsUpdated$3 as RecurringSessionsUpdated, Session$3 as Session, CalendarDateTime$3 as CalendarDateTime, LocalDateTime$3 as LocalDateTime, ExternalCalendarInfo$3 as ExternalCalendarInfo, SessionStatus$1 as SessionStatus, SessionType$3 as SessionType, SessionVersion$3 as SessionVersion, ParticipantNotification$6 as ParticipantNotification, ScheduleCancelled$3 as ScheduleCancelled, SessionCreated$3 as SessionCreated, SessionUpdated$3 as SessionUpdated, SessionCancelled$3 as SessionCancelled, AvailabilityPolicyUpdated$3 as AvailabilityPolicyUpdated, AvailabilityPolicy$3 as AvailabilityPolicy, IntervalSplit$3 as IntervalSplit, RecurringSessionSplit$3 as RecurringSessionSplit, ScheduleUnassignedFromUser$3 as ScheduleUnassignedFromUser, MultipleSessionsCreated$3 as MultipleSessionsCreated, ScheduleWithSessions$3 as ScheduleWithSessions, SitePropertiesOnScheduleCreation$3 as SitePropertiesOnScheduleCreation, MigrationEvent$3 as MigrationEvent, MigrationData$3 as MigrationData, StaffData$3 as StaffData, Empty$3 as Empty, bookingsCalendarV2ExternalCalendar_universal_d_listProviders as listProviders, bookingsCalendarV2ExternalCalendar_universal_d_getConnection as getConnection, bookingsCalendarV2ExternalCalendar_universal_d_listConnections as listConnections, bookingsCalendarV2ExternalCalendar_universal_d_ListConnectionsOptions as ListConnectionsOptions, bookingsCalendarV2ExternalCalendar_universal_d_connectByOAuth as connectByOAuth, bookingsCalendarV2ExternalCalendar_universal_d_ConnectByOAuthOptions as ConnectByOAuthOptions, bookingsCalendarV2ExternalCalendar_universal_d_OAuthCompletedOptions as OAuthCompletedOptions, bookingsCalendarV2ExternalCalendar_universal_d_connectByCredentials as connectByCredentials, bookingsCalendarV2ExternalCalendar_universal_d_listCalendars as listCalendars, bookingsCalendarV2ExternalCalendar_universal_d_updateSyncConfig as updateSyncConfig, bookingsCalendarV2ExternalCalendar_universal_d_UpdateSyncConfigOptions as UpdateSyncConfigOptions, bookingsCalendarV2ExternalCalendar_universal_d_disconnect as disconnect, bookingsCalendarV2ExternalCalendar_universal_d_listEvents as listEvents, bookingsCalendarV2ExternalCalendar_universal_d_ListEventsOptions as ListEventsOptions, };
    }
    /**
     * The `serviceOptionsAndVariants` object links a service to its variants.
     * You can use it to offer customers different prices for a service,
     * depending on which choices they book.
     * Read more about [service options and variants](https://wix.wixanswers.com/app/kb/article/2e91a25b-b3c2-4cf7-9005-429a4929fc36/en).
     */
    interface ServiceOptionsAndVariants {
        /**
         * ID of the `serviceOptionsAndVariants` object.
         * @readonly
         */
        _id?: string | null;
        /** ID of the service related to these options and variants. */
        serviceId?: string | null;
        /** Service options. Note that currently only a single option is supported per service. */
        options?: ServiceOptions;
        /** Information about the service's variants. */
        variants?: ServiceVariants;
        /**
         * Price of the cheapest service variant.
         * @readonly
         */
        minPrice?: Money$1;
        /**
         * Price of the most expensive service variant.
         * @readonly
         */
        maxPrice?: Money$1;
        /**
         * Revision number, which increments by 1 each time the `serviceOptionsAndVariants` object is updated.
         * To prevent conflicting changes,
         * the current revision must be passed when updating and deleting the `serviceOptionsAndVariants` object.
         *
         * Ignored when creating a `serviceOptionsAndVariants` object.
         */
        revision?: string | null;
    }
    interface ServiceOption extends ServiceOptionOptionSpecificDataOneOf {
        /** Details about the custom option. Available only for `CUSTOM` options. */
        customData?: CustomServiceOption;
        /** ID of the service option. */
        _id?: string;
        /** Type of the service option. */
        type?: ServiceOptionType;
    }
    /** @oneof */
    interface ServiceOptionOptionSpecificDataOneOf {
        /** Details about the custom option. Available only for `CUSTOM` options. */
        customData?: CustomServiceOption;
    }
    enum ServiceOptionType {
        UNKNOWN = "UNKNOWN",
        CUSTOM = "CUSTOM",
        STAFF_MEMBER = "STAFF_MEMBER"
    }
    interface CustomServiceOption {
        /**
         * Name of the service option. For example, `Age group`, `Location`, `Equipment`,
         * or `Time`.
         */
        name?: string;
        /**
         * Available choices for the service option. For example, `child`, `student`,
         * `adult`, and `senior` for a service option named `Age group`. Each value must
         * be unique. The value's case is ignored, meaning `Child` and `child` are
         * considered to be identical. Currently, only a single choice is supported
         * because a service can have only a single option.
         *
         * Max: 1 choice
         */
        choices?: string[];
    }
    interface ServiceVariant {
        /**
         * Choices for the service option. Currently, only a single choice is supported
         * because a service can have only a single option.
         *
         * Max: 1 choice
         */
        choices?: ServiceChoice$3[];
        /** Information about the service variant's price. */
        price?: Money$1;
    }
    interface ServiceChoice$3 extends ServiceChoiceChoiceOneOf$3 {
        /** Name of the custom choice. */
        custom?: string;
        /**
         * ID of the staff member providing the service. This ID is the equivalent of the `resourceId`
         * of the staff member or the `scheduleOwnerId` of the relevant
         * schedule's
         * `availability.linkedSchedules`.
         */
        staffMemberId?: string;
        /** ID of the service option. */
        optionId?: string;
    }
    /** @oneof */
    interface ServiceChoiceChoiceOneOf$3 {
        /** Name of the custom choice. */
        custom?: string;
        /**
         * ID of the staff member providing the service. This ID is the equivalent of the `resourceId`
         * of the staff member or the `scheduleOwnerId` of the relevant
         * [schedule's](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/schedule/schedule-object)
         * `availability.linkedSchedules`.
         */
        staffMemberId?: string;
    }
    /**
     * Money.
     * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
     */
    interface Money$1 {
        /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
        value?: string;
        /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
        currency?: string;
        /** Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative. */
        formattedValue?: string | null;
    }
    interface ServiceOptions {
        /**
         * Values of the service options.
         *
         * Max: 1 service option
         */
        values?: ServiceOption[];
    }
    interface ServiceVariants {
        /** Values of the service variants. */
        values?: ServiceVariant[];
    }
    interface CreateServiceOptionsAndVariantsRequest {
        /** Service options and variants to create. */
        serviceOptionsAndVariants: ServiceOptionsAndVariants;
    }
    interface CreateServiceOptionsAndVariantsResponse {
        /** Information about the created service options and variants. */
        serviceOptionsAndVariants?: ServiceOptionsAndVariants;
    }
    interface CloneServiceOptionsAndVariantsRequest {
        /** ID of the `serviceOptionsAndVariants` object to clone. */
        cloneFromId: string;
        /** ID of the service that will be set for the cloned `serviceOptionsAndVariants` */
        targetServiceId: string;
    }
    interface CloneServiceOptionsAndVariantsResponse {
        /** The cloned `serviceOptionsAndVariants` object. */
        serviceOptionsAndVariants?: ServiceOptionsAndVariants;
    }
    interface GetServiceOptionsAndVariantsRequest {
        /** ID of the `serviceOptionsAndVariants` object to retrieve. */
        serviceOptionsAndVariantsId: string;
    }
    interface GetServiceOptionsAndVariantsResponse {
        /** Retrieved `serviceOptionsAndVariants` object. */
        serviceOptionsAndVariants?: ServiceOptionsAndVariants;
    }
    interface GetServiceOptionsAndVariantsByServiceIdRequest {
        /** ID of the service to retrieve options and variants for. */
        serviceId: string;
    }
    interface GetServiceOptionsAndVariantsByServiceIdResponse {
        /** Retrieved `serviceOptionsAndVariants` object. */
        serviceVariants?: ServiceOptionsAndVariants;
    }
    interface UpdateServiceOptionsAndVariantsRequest {
        /** `ServiceOptionsAndVariants` object to update. */
        serviceOptionsAndVariants: ServiceOptionsAndVariants;
    }
    interface UpdateServiceOptionsAndVariantsResponse {
        /** Updated `serviceOptionsAndVariants` object. */
        serviceOptionsAndVariants?: ServiceOptionsAndVariants;
    }
    interface DeleteServiceOptionsAndVariantsRequest {
        /** ID of the `serviceOptionsAndVariants` object to delete. */
        serviceOptionsAndVariantsId: string;
        /** Revision of the `serviceOptionsAndVariants` object to delete. */
        revision?: string;
    }
    interface DeleteServiceOptionsAndVariantsResponse {
    }
    interface QueryServiceOptionsAndVariantsRequest {
        /** Information about filters, paging, and returned fields. */
        query: QueryV2$4;
    }
    interface QueryV2$4 extends QueryV2PagingMethodOneOf$4 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$4;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$5;
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
        sort?: Sorting$5[];
        /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
        fields?: string[];
        /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
        fieldsets?: string[];
    }
    /** @oneof */
    interface QueryV2PagingMethodOneOf$4 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$4;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$5;
    }
    interface Sorting$5 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$5;
    }
    enum SortOrder$5 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$4 {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface CursorPaging$5 {
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
    interface QueryServiceOptionsAndVariantsResponse {
        /** Retrieved `serviceOptionsAndVariants` objects. */
        serviceOptionsAndVariantsList?: ServiceOptionsAndVariants[];
        /** Paging metadata. */
        pagingMetadata?: PagingMetadataV2$3;
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
        cursors?: Cursors$5;
    }
    interface Cursors$5 {
        /** Cursor string pointing to the next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to the previous page in the list of results. */
        prev?: string | null;
    }
    interface ResourceNotification$1 {
        /**
         * Updated resource entity.
         * 'resource.schedules' is deprecated and will not be returned. Please use 'resource.scheduleIds' instead.
         */
        resource?: Resource$2;
        /** Event type. */
        event?: Event$1;
    }
    interface Resource$2 {
        /**
         * Resource ID.
         * @readonly
         */
        _id?: string | null;
        /** Resource name. */
        name?: string | null;
        /** Resource email address. */
        email?: string | null;
        /** Resource phone number. */
        phone?: string | null;
        /** Resource description. */
        description?: string | null;
        /** Deprecated. Please use tags. */
        tag?: string | null;
        /** Resource tags. Tags are used to identify, group, and filter the different types of resources. For example, 'staff' or 'room'. */
        tags?: string[] | null;
        /** Resource images. */
        images?: string[];
        /** Deprecated. Please use scheduleIds. List of the schedules owned by this resource. Min size 1. */
        schedules?: Schedule$2[];
        /**
         * List of IDs of schedules owned by this resource.
         * @readonly
         */
        scheduleIds?: string[] | null;
        /**
         * Resource status.
         * <!--ONLY:VELO
         * One of:
         * - `"CREATED"` Default status.
         * - `"DELETED"` The resource was deleted.
         * - `"UPDATED"` The resource was updated.
         * <!--END:ONLY:VELO-->
         * @readonly
         */
        status?: ResourceStatus$1;
        /**
         * Wix user ID, if the resource is associated with the Wix user.
         * A staff member resource can be associated with a Wix user via assignment of a permissions role in the business manager.
         * <!--ONLY:VELO
         * Click the **Set Permissions** button for the staff member on the Staff page on your site's dashboard.
         * <!--END:ONLY:VELO-->
         * @readonly
         */
        wixUserId?: string | null;
    }
    interface Schedule$2 {
        /** Schedule ID. */
        _id?: string;
        /** ID of the schedule's owner entity. This may be a resource ID or a service ID. */
        scheduleOwnerId?: string | null;
        /**
         * Schedule's time zone in [Area/Location](https://en.wikipedia.org/wiki/Tz_database) format. Read-only.
         * Derived from the Wix Business time zone.
         * @readonly
         */
        timeZone?: string | null;
        /** Deprecated. Please use the [Sessions API](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/session) instead. */
        intervals?: RecurringInterval$2[];
        /** Default title for the schedule's sessions. Maximum length: 6000 characters. */
        title?: string | null;
        /**
         * __Deprecated.__
         * Tags for grouping schedules. These tags are the default tags for the schedule's sessions.
         * The Wix Bookings app uses the following predefined tags to set schedule type: `"INDIVIDUAL"`, `"GROUP"`, and `"COURSE"`. Once the schedule type is set using these tags, you cannot update it. In addition to the app's tags, you can create and update your own tags.
         */
        tags?: string[] | null;
        /** Default location for the schedule's sessions. */
        location?: Location$5;
        /**
         * Maximum number of participants that can be added to the schedule's sessions.
         * Must be at most `1` for schedule whose availability is affected by another schedule. E.g, appointment schedules of the Wix Bookings app.
         */
        capacity?: number | null;
        /** Deprecated. Please use the [Booking Services V2](https://dev.wix.com/api/rest/wix-bookings/services-v2) payment instead. */
        rate?: Rate$2;
        /** __Deprecated.__ */
        availability?: Availability$2;
        /**
         * Number of participants registered to sessions in this schedule, calculated as the sum of the party sizes.
         * @readonly
         */
        totalNumberOfParticipants?: number;
        /**
         * *Partial list** of participants which are registered to sessions in this schedule.
         * Participants who are registered in the schedule are automatically registered to any session that is created for the schedule.
         * To retrieve the full list of schedule participants please use the [Query Extended Bookings API](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings).
         * @readonly
         */
        participants?: Participant$2[];
        /** __Deprecated.__ */
        externalCalendarOverrides?: ExternalCalendarOverrides$2;
        /**
         * Schedule status.
         * @readonly
         */
        status?: ScheduleStatus$2;
        /**
         * Schedule creation date.
         * @readonly
         */
        created?: Date;
        /**
         * Schedule last update date.
         * @readonly
         */
        updated?: Date;
        /**
         * Schedule version number, updated each time the schedule is updated.
         * @readonly
         */
        version?: number;
        /**
         * Fields which were inherited from the Business Info page under Settings in the Dashboard.
         * @readonly
         */
        inheritedFields?: string[];
        /** __Deprecated.__ */
        conferenceProvider?: ConferenceProvider$2;
        /**
         * A conference created for the schedule. This is used when a participant is added to a schedule.
         * **Partially deprecated.** Only `hostUrl` and `guestUrl` are to be supported.
         */
        calendarConference?: CalendarConference$2;
    }
    interface RecurringInterval$2 {
        /**
         * The recurring interval identifier.
         * @readonly
         */
        _id?: string;
        /** The start time of the recurring interval. Required. */
        start?: Date;
        /** The end time of the recurring interval. Optional. Empty value indicates that there is no end time. */
        end?: Date;
        /** The interval rules. The day, hour and minutes the interval is recurring. */
        interval?: Interval$2;
        /** The frequency of the interval. Optional. The default is frequency with the default repetition. */
        frequency?: Frequency$2;
        /** Specifies the list of linked schedules and the way this link affects the corresponding schedules' availability. Can be calculated from the schedule or overridden on the recurring interval. */
        affectedSchedules?: LinkedSchedule$2[];
        /**
         * The type of recurring interval.
         * <!--ONLY:VELO
         * One of:
         * - `"UNDEFINED"` The default value. Sessions for this interval will be of type EVENT.
         * - `"EVENT"` A recurring interval of events.
         * - `"WORKING_HOURS"` A recurring interval for availability.
         * <!--END:ONLY:VELO-->
         */
        intervalType?: RecurringIntervalType$2;
    }
    interface Interval$2 {
        /** The day the interval accrue. Optional. The default is the day of the recurring interval's start time. */
        daysOfWeek?: Day$2;
        /** The hour of the day the interval accrue. must be consistent with the Interval start time. Options. The default is 0. minimum: 0, maximum: 23. */
        hourOfDay?: number | null;
        /** The minutes of hour the interval accrue. must be consistent with the Interval end time. Options. The default is 0. minimum: 0, maximum: 59. */
        minuteOfHour?: number | null;
        /** The duration of the interval in minutes. Required. Part of the session end time calculation. */
        duration?: number;
    }
    enum Day$2 {
        /** Undefined. */
        UNDEFINED = "UNDEFINED",
        /** Monday. */
        MON = "MON",
        /** Tuesday. */
        TUE = "TUE",
        /** Wednesday. */
        WED = "WED",
        /** Thursday. */
        THU = "THU",
        /** Friday. */
        FRI = "FRI",
        /** Saturday. */
        SAT = "SAT",
        /** Sunday. */
        SUN = "SUN"
    }
    interface Frequency$2 {
        /** The frequency of the recurrence in weeks. i.e. when this value is 4, the interval occurs every 4 weeks. Optional. The default is 1. minimum: 1, maximum: 52. */
        repetition?: number | null;
    }
    interface LinkedSchedule$2 {
        /** Schedule ID. */
        scheduleId?: string;
        /**
         * Sets this schedule's availability for the duration of the linked schedule's sessions.  Default is `"BUSY"`.
         * <!--ONLY:REST-->
         * If set to `"BUSY"`, this schedule cannot have any available slots during the linked schedule's sessions.
         * If set to `"FREE"`, this schedule can have available slots during the linked schedule's sessions.
         * <!--END:ONLY:REST-->
         *
         * <!--ONLY:VELO
         * One of:
         * - `"FREE"` This schedule can have available slots during the linked schedule's sessions.
         * - `"BUSY"` This schedule cannot have any available slots during the linked schedule's sessions.
         * <!--END:ONLY:VELO-->
         */
        transparency?: Transparency$2;
        /**
         * Owner ID, of the linked schedule.
         * @readonly
         */
        scheduleOwnerId?: string;
    }
    enum Transparency$2 {
        UNDEFINED = "UNDEFINED",
        /** The schedule can have available slots during the session. */
        FREE = "FREE",
        /** The schedule cannot have available slots during the session. Default value. */
        BUSY = "BUSY"
    }
    enum RecurringIntervalType$2 {
        /** The default value. Sessions for this interval will be of type EVENT. */
        UNDEFINED = "UNDEFINED",
        /** A recurring interval of events */
        EVENT = "EVENT",
        /** Deprecated */
        TIME_AVAILABILITY = "TIME_AVAILABILITY",
        /** A recurring interval for availability */
        AVAILABILITY = "AVAILABILITY"
    }
    interface Location$5 {
        /**
         * Location type.
         * One of:
         * - `"OWNER_BUSINESS"` The business address as set in the site’s general settings.
         * - `"OWNER_CUSTOM"` The address as set when creating the service.
         * - `"CUSTOM"` The address set for the individual session.
         */
        locationType?: LocationType$5;
        /** Free text address used when locationType is `OWNER_CUSTOM`. */
        address?: string | null;
        /** Custom address, used when locationType is `"OWNER_CUSTOM"`. Might be used when locationType is `"CUSTOM"` in case the owner sets a custom address for the session which is different from the default. */
        customAddress?: Address$5;
    }
    enum LocationType$5 {
        UNDEFINED = "UNDEFINED",
        OWNER_BUSINESS = "OWNER_BUSINESS",
        OWNER_CUSTOM = "OWNER_CUSTOM",
        CUSTOM = "CUSTOM"
    }
    /** Physical address */
    interface Address$5 extends AddressStreetOneOf$5 {
        /** Street name, number and apartment number. */
        streetAddress?: StreetAddress$5;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
        /** Country code. */
        country?: string | null;
        /** Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Zip/postal code. */
        postalCode?: string | null;
        /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
        addressLine2?: string | null;
        /** A string containing the full address of this location. */
        formattedAddress?: string | null;
        /** Free text to help find the address. */
        hint?: string | null;
        /** Coordinates of the physical address. */
        geocode?: AddressLocation$5;
        /** Country full name. */
        countryFullname?: string | null;
        /** Multi-level subdivisions from top to bottom. */
        subdivisions?: Subdivision$5[];
    }
    /** @oneof */
    interface AddressStreetOneOf$5 {
        /** Street name, number and apartment number. */
        streetAddress?: StreetAddress$5;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
    }
    interface StreetAddress$5 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /** Apartment number. */
        apt?: string;
    }
    interface AddressLocation$5 {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision$5 {
        /** Subdivision code. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        code?: string;
        /** Subdivision full name. */
        name?: string;
    }
    interface LocationsLocation$2 {
        /**
         * Location ID.
         * @readonly
         */
        _id?: string | null;
        /** Location name. */
        name?: string;
        /** Location description. */
        description?: string | null;
        /**
         * Whether this is the default location. There can only be one default location per site. The default location can't be archived.
         * @readonly
         */
        default?: boolean;
        /**
         * Location status. Defaults to `ACTIVE`.
         * __Note:__ [Archiving a location](https://dev.wix.com/api/rest/business-info/locations/archive-location)
         * doesn't affect the location's status. `INACTIVE` is currently not supported.
         */
        status?: LocationStatus$2;
        /**
         * Location type.
         *
         * **Note:** Currently not supported.
         */
        locationType?: LocationsLocationType$2;
        /** Fax number. */
        fax?: string | null;
        /** Timezone in `America/New_York` format. */
        timeZone?: string | null;
        /** Email address. */
        email?: string | null;
        /** Phone number. */
        phone?: string | null;
        /** Address. */
        address?: LocationsAddress$2;
        /**
         * Business schedule. Array of weekly recurring time periods when the location is open for business. Limited to 100 time periods.
         *
         * __Note:__ Not supported by Wix Bookings.
         */
        businessSchedule?: BusinessSchedule$2;
        /**
         * Revision number, which increments by 1 each time the location is updated.
         * To prevent conflicting changes, the existing revision must be used when updating a location.
         */
        revision?: string | null;
        /**
         * Whether the location is archived. Archived locations can't be updated.
         * __Note:__ [Archiving a location](https://dev.wix.com/api/rest/business-info/locations/archive-location)
         * doesn't affect its `status`.
         * @readonly
         */
        archived?: boolean;
        /** Location types. */
        locationTypes?: LocationsLocationType$2[];
    }
    /** For future use */
    enum LocationStatus$2 {
        ACTIVE = "ACTIVE",
        INACTIVE = "INACTIVE"
    }
    /** For future use */
    enum LocationsLocationType$2 {
        UNKNOWN = "UNKNOWN",
        BRANCH = "BRANCH",
        OFFICES = "OFFICES",
        RECEPTION = "RECEPTION",
        HEADQUARTERS = "HEADQUARTERS",
        INVENTORY = "INVENTORY"
    }
    interface LocationsAddress$2 {
        /** 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
        country?: string | null;
        /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /** Street address. Includes street name, number, and apartment number in separate fields. */
        streetAddress?: LocationsStreetAddress$2;
        /** Full address of the location. */
        formatted?: string | null;
        /** Geographic coordinates of location. */
        location?: LocationsAddressLocation$2;
    }
    /** Street address. Includes street name, number, and apartment number in separate fields. */
    interface LocationsStreetAddress$2 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /** Apartment number. */
        apt?: string;
    }
    /** Address Geolocation */
    interface LocationsAddressLocation$2 {
        /** Latitude of the location. Must be between -90 and 90. */
        latitude?: number | null;
        /** Longitude of the location. Must be between -180 and 180. */
        longitude?: number | null;
    }
    /** Business schedule. Regular and exceptional time periods when the business is open or the service is available. */
    interface BusinessSchedule$2 {
        /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
        periods?: TimePeriod$2[];
        /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
        specialHourPeriod?: SpecialHourPeriod$2[];
    }
    /** Weekly recurring time periods when the business is regularly open or the service is available. */
    interface TimePeriod$2 {
        /** Day of the week the period starts on. */
        openDay?: DayOfWeek$2;
        /**
         * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
         * midnight at the end of the specified day.
         */
        openTime?: string;
        /** Day of the week the period ends on. */
        closeDay?: DayOfWeek$2;
        /**
         * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
         * midnight at the end of the specified day.
         *
         * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
         */
        closeTime?: string;
    }
    /** Enumerates the days of the week. */
    enum DayOfWeek$2 {
        MONDAY = "MONDAY",
        TUESDAY = "TUESDAY",
        WEDNESDAY = "WEDNESDAY",
        THURSDAY = "THURSDAY",
        FRIDAY = "FRIDAY",
        SATURDAY = "SATURDAY",
        SUNDAY = "SUNDAY"
    }
    /** Exception to the business's regular hours. The business can be open or closed during the exception. */
    interface SpecialHourPeriod$2 {
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
    interface Rate$2 {
        /**
         * Mapping between a named price option, for example, adult or child prices, and the price, currency, and down payment amount.
         * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
         */
        labeledPriceOptions?: Record<string, Price$2>;
        /**
         * Textual price information used when **Price Per Session** is set to **Custom Price** in the app's service details page.
         * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
         */
        priceText?: string | null;
    }
    interface Price$2 {
        /** Required payment amount. */
        amount?: string;
        /** Currency in which the amount is quoted. */
        currency?: string;
        /** Amount of a down payment or deposit as part of the transaction. */
        downPayAmount?: string;
    }
    /**
     * <!-- Needs updating when recurrence has been tested
     * Schedule's availability calculation is executed by the schedule's available intervals and this additional information.
     * Schedule's available intervals are recurring intervals (defined in the schedule) minus sessions that has no more spots for bookings (including time between_slots), or schedule's sessions with open spots for bookings.-->
     */
    interface Availability$2 {
        /** Date and time the schedule starts to be available for booking. */
        start?: Date;
        /** Date and time the schedule stops being available for booking. No value indicates no end time. */
        end?: Date;
        /** Other schedules that impact the availability calculation. Relevant only when there are availability constraints. */
        linkedSchedules?: LinkedSchedule$2[];
        /** Constraints for calculating the schedule's availability. */
        constraints?: AvailabilityConstraints$2;
    }
    /** Describes how to calculate the specific slots that are available for booking. */
    interface AvailabilityConstraints$2 {
        /**
         * A list of duration options for slots, in minutes. Minimum value for a duration is 1.
         * The availability calculation generates slots with these durations, where there is no conflict with existing sessions or other availability constraints.
         */
        slotDurations?: number[];
        /**
         * The number of minutes between the `end` of one slot, and the `start` of the next.
         * Minimum value is 0, maximum value is 120.
         */
        timeBetweenSlots?: number;
        /**
         * Specify how to split the slots in intervals of minutes.
         * This value indicates the time between available slots' start time. e.g., from 5 minute slots (3:00, 3:05, 3:15) and 1 hour slots (3:00, 4:00, 5:00).
         * Optional. The default is the first duration in slot_durations field.
         * Deprecated. Use the `split_slots_interval.value_in_minutes`.
         */
        splitInterval?: number | null;
        /**
         * An object defining the time between available slots' start times.  For example, a slot with slots_split_interval=5 can start every 5 minutes. The default is the slot duration.
         * @readonly
         */
        slotsSplitInterval?: SplitInterval$2;
    }
    /** The time between available slots' start times. For example, For 5 minute slots, 3:00, 3:05, 3:15 etc. For 1 hour slots, 3:00, 4:00, 5:00 etc. */
    interface SplitInterval$2 {
        /**
         * Whether the slot duration is used as the split interval value.
         * If `same_as_duration` is `true`, the `value_in_minutes` is the sum of the first duration in
         * `schedule.availabilityConstraints.SlotDurations` field, and `schedule.availabilityConstraints.TimeBetweenSlots` field.
         */
        sameAsDuration?: boolean | null;
        /** Number of minutes between available slots' start times when `same_as_duration` is `false`. */
        valueInMinutes?: number | null;
    }
    interface Participant$2 {
        /** Participant ID. Currently represents the booking.id. */
        _id?: string;
        /** Contact ID. */
        contactId?: string | null;
        /** Participant's name. */
        name?: string | null;
        /** Participant's phone number. */
        phone?: string | null;
        /** Participant's email address. */
        email?: string | null;
        /** Group or party size. The number of people attending. Defaults to 0. Maximum is 250. */
        partySize?: number;
        /**
         * Approval status for the participant.
         * <!-- Commented out untill updateParticipant is exposed Generally the same status as the booking, unless updated using the `updateParticipant()` API. Defaults to `"UNDEFINED"`.-->
         * <!--ONLY:VELO
         * One of:
         * - `"PENDING"` Pending business approval.
         * - `"APPROVED"` Approved by the business.
         * - `"DECLINED"` Declined by the business.
         * <!--END:ONLY:VELO-->
         */
        approvalStatus?: ApprovalStatus$2;
        /**
         * Whether the participant was inherited from the schedule, as opposed to being booked directly to the session.
         * @readonly
         */
        inherited?: boolean;
    }
    enum ApprovalStatus$2 {
        /** Default. */
        UNDEFINED = "UNDEFINED",
        /** Pending business approval. */
        PENDING = "PENDING",
        /** Approved by the business. */
        APPROVED = "APPROVED",
        /** Declined by the business. */
        DECLINED = "DECLINED"
    }
    interface ExternalCalendarOverrides$2 {
        /** Synced title of the external calendar event. */
        title?: string | null;
        /** Synced description of the external calendar event. */
        description?: string | null;
    }
    enum ScheduleStatus$2 {
        UNDEFINED = "UNDEFINED",
        /** The default value when the schedule is created. */
        CREATED = "CREATED",
        /** The schedule has been canceled. */
        CANCELLED = "CANCELLED"
    }
    interface Version$2 {
        /** Schedule version number, updated each time the schedule is updated. */
        scheduleVersion?: number | null;
        /** Participants version number, updated each time the schedule participants are updated. */
        participantsVersion?: number | null;
    }
    interface ConferenceProvider$2 {
        /** Conferencing provider ID */
        providerId?: string;
    }
    interface CalendarConference$2 {
        /** Wix Calendar conference ID. */
        _id?: string;
        /** Conference meeting ID in the provider's conferencing system. */
        externalId?: string;
        /** Conference provider ID. */
        providerId?: string;
        /** URL used by the host to start the conference. */
        hostUrl?: string;
        /** URL used by a guest to join the conference. */
        guestUrl?: string;
        /** Password to join the conference. */
        password?: string | null;
        /** Conference description. */
        description?: string | null;
        /**
         * Conference type.
         * <!--ONLY:VELO
         * One of:
         * - `"ONLINE_MEETING_PROVIDER"` API-generated online meeting.
         * - `"CUSTOM"` User-defined meeting.
         * <!--END:ONLY:VELO-->
         */
        conferenceType?: ConferenceType$2;
        /** ID of the account owner in the video conferencing service. */
        accountOwnerId?: string | null;
    }
    enum ConferenceType$2 {
        UNDEFINED = "UNDEFINED",
        /** API-generated online meeting. */
        ONLINE_MEETING_PROVIDER = "ONLINE_MEETING_PROVIDER",
        /** User-defined meeting. */
        CUSTOM = "CUSTOM"
    }
    enum ResourceStatus$1 {
        UNDEFINED = "UNDEFINED",
        /** Default status. */
        CREATED = "CREATED",
        /** The resource was deleted. */
        DELETED = "DELETED",
        /** The resource was updated. */
        UPDATED = "UPDATED"
    }
    interface BusinessLocation$1 {
        /** The ID of the business location. Has to be non-empty */
        locationId?: string;
    }
    enum Event$1 {
        UNDEFINED = "UNDEFINED",
        Updated = "Updated",
        Deleted = "Deleted",
        Created = "Created",
        Schedule_Updated = "Schedule_Updated"
    }
    interface Empty$2 {
    }
    /** An event sent in the system once the service is changed. */
    interface ServiceNotification extends ServiceNotificationMetadataOneOf {
        deleteMetadata?: DeleteMetadata;
        /** Updated service entity. */
        service?: Service$1;
        event?: ServiceNotificationEvent;
        policy?: BusinessServicesPolicy;
    }
    /** @oneof */
    interface ServiceNotificationMetadataOneOf {
        deleteMetadata?: DeleteMetadata;
    }
    /** A service describes the business offering that a business provides to its customers. */
    interface Service$1 {
        /**
         * Service ID.
         * @readonly
         */
        _id?: string | null;
        /** Information about the service. */
        info?: ServiceInfo;
        /** Description of the bookings policy for the service. */
        policy?: BookingPolicy$1;
        /** Payment options available for use when booking the service. */
        paymentOptions?: PaymentOptions$1;
        /** ID of the category to which the service belongs. */
        categoryId?: string | null;
        /** ID of the form that visitors fill out when booking the service. */
        bookingFormId?: string | null;
        /**
         * List of schedule IDs for the sessions and slots that can be booked for the service.
         * The list can include schedules with any `status` values, however the Bookings application only uses the schedules with a `status` of `"CREATED"`. There is only one schedule with a status of `"CREATED"` per service. The ID of that schedule must always be the first in the list.
         * @readonly
         */
        scheduleIds?: string[];
        /** Set of custom properties for the service. */
        customProperties?: Record<string, string>;
        /**
         * Service status.
         * @readonly
         */
        status?: ServiceStatus;
        /** Sort order of the service within its category. */
        sortOrder?: number | null;
        /** Advanced SEO data */
        advancedSeoData?: SeoSchema$1;
        /** SEO data */
        seoData?: SeoSchema$1;
        /** Whether a conference is to be generated for the service. */
        includeConferenceOption?: boolean | null;
    }
    /** Information describing the service. */
    interface ServiceInfo {
        /** Service name. */
        name?: string | null;
        /** Service description. */
        description?: string | null;
        /** Images associated with the service. Deprecated. */
        images?: string[];
        /** Short service description. */
        tagLine?: string | null;
        /** Images associated with the service. Optional. Not supported yet. */
        media?: Media$1;
    }
    interface Media$1 {
        /** Images associated with the service. */
        items?: MediaItem$2[];
        /** Primary image associated with the service. */
        mainMedia?: MediaItem$2;
        /** Cover image associated with the service. */
        coverMedia?: MediaItem$2;
    }
    interface MediaItem$2 extends MediaItemItemOneOf$1 {
        /** Image metadata. */
        image?: string;
    }
    /** @oneof */
    interface MediaItemItemOneOf$1 {
        /** Image metadata. */
        image?: string;
    }
    /** A set of rules defining the policies for booking the service for visitors and members. */
    interface BookingPolicy$1 {
        /** Maximum number of participants for a single booking. Defaults to 1. */
        maxParticipantsPerBooking?: number | null;
        /** Minimum number of minutes before the start of a session that a booking can be made. For a schedule, this is relative to the start time of the next session, excluding past sessions. Default value is taken form BusinessServicesPolicy. */
        bookUpToXMinutesBefore?: number | null;
        /** Minimum number of minutes before the start of a session that a booking can be canceled or rescheduled. Default value is taken form BusinessServicesPolicy. */
        cancelRescheduleUpToXMinutesBefore?: number | null;
        /** Whether online booking is available. Defaults to true. */
        isBookOnlineAllowed?: boolean | null;
        /** Whether bookings for the service can be canceled. Defaults to true. */
        isCancelAllowed?: boolean | null;
        /** Whether bookings for the service can be rescheduled. Defaults to true. */
        isRescheduleAllowed?: boolean | null;
        /** How far in advance a booking can be made. Default value is taken form BusinessServicesPolicy. */
        futureBookingsPolicy?: FutureBookingPolicy;
        /** Waitlist policy for the service. Default value is taken form BusinessServicesPolicy. */
        waitingListPolicy?: WaitingListPolicy;
        /** Bookings approval policy for the service. Empty by default. */
        bookingsApprovalPolicy?: BookingsApprovalPolicy;
        /**
         * A list of booking policy field names of fields that override the respective values of the default business booking policy.
         * Currently only 'service.policy.bookUpToXMinutesBefore' field is supported
         */
        overrideBusinessPolicyFields?: string[];
        /**
         * User defined cancellation policy message.
         * @readonly
         */
        cancellationPolicy?: string | null;
    }
    interface FutureBookingPolicy {
        /** Whether a limit is imposed on advance bookings. */
        shouldLimit?: boolean | null;
        /** How far in advance, in minutes, a session can be booked. Defaults to 10,080 minutes (3 days). */
        limitXMinutesToTheFuture?: number | null;
    }
    interface WaitingListPolicy {
        /** Whether waitlisting is enabled for the service. */
        isEnabled?: boolean | null;
        /** Number of spots available in the waitlist. Defaults to 10 spots. */
        capacity?: number | null;
        /** Amount of time a participant is given to book, once notified that a spot is available. Defaults to 10 minutes. */
        timeWindowMinutes?: number | null;
    }
    interface BookingsApprovalPolicy {
        /** Whether bookings to the service require approval. */
        isBusinessApprovalRequired?: boolean | null;
        /** Whether the booking requests affect the session or slot availability. For example, 3 booking requests for a 10-person session will cause the session to have 7 available spots, before the requests are approved. */
        requestsAffectsAvailability?: boolean | null;
    }
    /**
     * Payment options for the service. Multiple payment options can be enabled. For example:
     * For a service to be paid only online using WiX, then set wix_pay_online=true and the rest should be set to false.
     * For a service to accept payment online via Wix or in person, set the wix_pay_online=true & wix_pay_in_person=true.
     */
    interface PaymentOptions$1 {
        /** Whether a booking made for the service can be paid online through Wix. */
        wixPayOnline?: boolean | null;
        /** Whether a booking made for the service can be paid in person. */
        wixPayInPerson?: boolean | null;
        /** Whether a booking made for the service can be paid in a customized way, defined by the API. */
        custom?: boolean | null;
        /** Whether a booking made for the service can be paid using Wix Pricing Plans. */
        wixPaidPlan?: boolean | null;
    }
    enum ServiceStatus {
        /** The default service status. */
        CREATED = "CREATED",
        /** The service is deleted. */
        DELETED = "DELETED"
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
    enum ServiceNotificationEvent {
        Unspecified = "Unspecified",
        Updated = "Updated",
        Deleted = "Deleted",
        Created = "Created"
    }
    /**
     * Defines the Bookings Policy applied to the business's services. The policy can be overridden for a service when setting the `Service.BookingsPolicy` property.
     * Unless overridden, each service inherits the settings in the business policy.
     */
    interface BusinessServicesPolicy {
        /** Minimum amount of time to make a booking before the start of the booked item. For sessions, this is relative to the start time of the session. For schedules, this is relative to the start time of the first session, excluding past sessions. Defaults to 0. */
        bookUpToXMinutesBefore?: number | null;
        /** Minimum time that a booking can be canceled or rescheduled before the session starts. Defaults to 0. */
        cancelRescheduleUpToXMinutesBefore?: number | null;
        /** An object specifying how far in advance a booking can be made. */
        futureBookingsPolicy?: FutureBookingPolicy;
        /** Waitlist policy for the service. Empty by default. */
        waitingListPolicy?: WaitingListPolicy;
        /** User defined cancellation policy message. */
        cancellationPolicy?: string | null;
    }
    interface DeleteMetadata {
        preserveFutureSessionsWithParticipants?: boolean;
        participantNotification?: ParticipantNotification$5;
    }
    interface ParticipantNotification$5 {
        /**
         * Whether to send the message about the changes to the customer.
         *
         * Default: `false`
         */
        notifyParticipants?: boolean;
        /** Custom message to send to the participants about the changes to the booking. */
        message?: string | null;
    }
    interface ScheduleNotification$2 extends ScheduleNotificationEventOneOf$2 {
        scheduleCreated?: ScheduleCreated$2;
        scheduleUpdated?: ScheduleUpdated$2;
        scheduleCancelled?: ScheduleCancelled$2;
        sessionCreated?: SessionCreated$2;
        sessionUpdated?: SessionUpdated$2;
        sessionCancelled?: SessionCancelled$2;
        availabilityPolicyUpdated?: AvailabilityPolicyUpdated$2;
        intervalSplit?: IntervalSplit$2;
        recurringSessionSplit?: RecurringSessionSplit$2;
        /** Inspect `schedule.scheduleOwnerUserId` on `scheduleUpdated` instead. */
        scheduleUnassignedFromUser?: ScheduleUnassignedFromUser$2;
        preserveFutureSessionsWithParticipants?: boolean | null;
        /** Whether to notify participants about changed sessions. deprecated, use participant_notification */
        notifyParticipants?: boolean;
        /** site properties. Optional. Given in create schedule notification. */
        siteProperties?: SitePropertiesOnScheduleCreation$2;
        instanceId?: string;
    }
    /** @oneof */
    interface ScheduleNotificationEventOneOf$2 {
        scheduleCreated?: ScheduleCreated$2;
        scheduleUpdated?: ScheduleUpdated$2;
        scheduleCancelled?: ScheduleCancelled$2;
        sessionCreated?: SessionCreated$2;
        sessionUpdated?: SessionUpdated$2;
        sessionCancelled?: SessionCancelled$2;
        availabilityPolicyUpdated?: AvailabilityPolicyUpdated$2;
        intervalSplit?: IntervalSplit$2;
        recurringSessionSplit?: RecurringSessionSplit$2;
        /** Inspect `schedule.scheduleOwnerUserId` on `scheduleUpdated` instead. */
        scheduleUnassignedFromUser?: ScheduleUnassignedFromUser$2;
    }
    interface ScheduleCreated$2 {
        schedule?: Schedule$2;
    }
    interface ScheduleUpdated$2 {
        /** The old schedule before the update. */
        oldSchedule?: Schedule$2;
        /** The new schedule after the update. */
        newSchedule?: Schedule$2;
        /**
         * Recurring sessions updated event. If this field is given, the reason for the schedule updated event was
         * updating at least one of the given schedule's recurring sessions.
         * This event is triggered by create/update/delete recurring session apis.
         */
        recurringSessions?: RecurringSessionsUpdated$2;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$5;
        /**
         * Whether this notification was created as a result of an anonymization request, such as GDPR.
         * An anonymized participant will have the following details:
         * name = "deleted"
         * phone = "deleted"
         * email = "deleted@deleted.com"
         */
        triggeredByAnonymizeRequest?: boolean | null;
    }
    interface RecurringSessionsUpdated$2 {
        /** Old schedule's recurring session list. */
        oldRecurringSessions?: Session$2[];
        /** New schedule's recurring session list. */
        newRecurringSessions?: Session$2[];
    }
    interface Session$2 {
        /**
         * Session ID.
         * @readonly
         */
        _id?: string | null;
        /** ID of the schedule that the session belongs to. */
        scheduleId?: string;
        /**
         * ID of the resource or service that the session's schedule belongs to.
         * @readonly
         */
        scheduleOwnerId?: string | null;
        /** Original start date and time of the session in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. */
        originalStart?: Date;
        /** An object specifying the start date and time of the session. If the session is a recurring session, `start` must contain a `localDateTime`. */
        start?: CalendarDateTime$2;
        /**
         * An object specifying the end date and time of the session. The `end` time must be after the `start` time and be same type as `start`.
         * If the session is a recurring session, `end` must contain a `localDateTime`.
         */
        end?: CalendarDateTime$2;
        /**
         * An object specifying a list of schedules and the way each schedule's availability is affected by the session. For example, the schedule of an instructor is affected by sessions of the class that they instruct.
         * The array is inherited from the schedule and can be overridden even if the session is a recurring session.
         */
        affectedSchedules?: LinkedSchedule$2[];
        /**
         * Session title.
         * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
         */
        title?: string | null;
        /**
         * __Deprecated.__
         * Tags for the session.
         * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
         */
        tags?: string[] | null;
        /**
         * An object describing the location where the session takes place.
         * Defaults to the schedule location.
         * For single sessions, `session.location.businessLocation` can only be provided for locations that are defined in the schedule using `schedule.location` or `schedule.availability.locations`.
         */
        location?: Location$5;
        /**
         * Maximum number of participants that can be added to the session. Defaults to the schedule capacity.
         * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
         */
        capacity?: number | null;
        /** Deprecated. Please use the [Booking Services V2](https://dev.wix.com/api/rest/wix-bookings/services-v2) payment instead. */
        rate?: Rate$2;
        /**
         * Time reserved after the session end time, derived from the schedule availability constraints and the time between slots. Read-only.
         * If the session is a recurring session, this field must be empty.
         */
        timeReservedAfter?: number | null;
        /**
         * Additional information about the session.
         * Notes are not supported for recurring sessions.
         */
        notes?: string;
        /**
         * The number of participants booked for the session. Read-only.
         * Calculated as the sum of the party sizes.
         * @readonly
         */
        totalNumberOfParticipants?: number;
        /**
         * *Partial list** list of participants booked for the session.
         * The list includes participants who have registered for this specific session, and participants who have registered for a schedule that includes this session.
         * If the session is a recurring session, this field must be empty.
         * To retrieve the full list of session participants please use the [Query Extended Bookings API](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings).
         */
        participants?: Participant$2[];
        /**
         * A list of properties for which values were inherited from the schedule.
         * This does not include participants that were inherited from the schedule.
         * @readonly
         */
        inheritedFields?: string[];
        /** __Deprecated.__ */
        externalCalendarOverrides?: ExternalCalendarOverrides$2;
        /**
         * Session status.
         * <!--ONLY:VELO
         * One of:
         * - `"CONFIRMED"` Default value.
         * - `"CANCELLED"` The session was deleted.
         * <!--END:ONLY:VELO-->
         * @readonly
         */
        status?: Status$2;
        /**
         * Recurring interval ID. Defined when a session will be a recurring session. read-only. Optional.
         * For exmaple, when creating a class service  with recurring sessions, you add a recurrence rule to create recurring sessions.
         * This field is omitted for single sessions or instances of recurring sessions.
         * Specified when the session was originally generated from a schedule recurring interval.
         * Deprecated. Use `recurringSessionId`.
         * @readonly
         */
        recurringIntervalId?: string | null;
        /**
         * The ID of the recurring session if this session is an instance of a recurrence. Use this ID to update the recurrence and all of the instances.
         * @readonly
         */
        recurringSessionId?: string | null;
        /**
         * Session type.
         * <!--ONLY:VELO
         * One of:
         * - `"EVENT"` Reserved period of time on the schedule. For example, an appointment, class, course, or blocked time. Events are visible in the Dashboard in the Bookings app's [Booking Calendar](https://support.wix.com/en/article/wix-bookings-about-the-wix-bookings-calendar) page.
         * - `"WORKING_HOURS"` Placeholder for available time on a resource’s schedule.
         * <!--END:ONLY:VELO-->
         */
        type?: SessionType$2;
        /**
         * A conference created for the session according to the details set in the schedule's conference provider information.
         * If the session is a recurring session, this field is inherited from the schedule.
         * **Partially deprecated.** Only `hostUrl` and `guestUrl` are to be supported.
         */
        calendarConference?: CalendarConference$2;
        /**
         * A string representing a recurrence rule (RRULE) for a recurring session, as defined in [iCalendar RFC 5545](https://icalendar.org/iCalendar-RFC-5545/3-3-10-recurrence-rule.html).
         * If the session is an instance of a recurrence pattern, the `instanceOfRecurrence` property will be contain the recurrence rule and this property will be empty.
         * The RRULE defines a rule for repeating a session.
         * Supported parameters are:
         *
         * |Keyword|Description|Supported values|
         * |--|--|---|
         * |`FREQ`|The frequency at which the session is recurs. Required.|`WEEKLY`|
         * |`INTERVAL`|How often, in terms of `FREQ`, the session recurs. Default is 1. Optional.|
         * |`UNTIL`|The UTC end date and time of the recurrence. Optional.|
         * |`BYDAY`|Day of the week when the event should recur. Required.|One of: `MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`|
         *
         *
         * For example, a session that repeats every second week on a Monday until January 7, 2022 at 8 AM:
         * `"FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20220107T080000Z"`
         *
         * <!--ORIGINAL COMMENTS:
         * `FREQ` — The frequency with which the session should be repeated (such as DAILY or WEEKLY).
         * Supported `WEEKLY` value is supported.
         * INTERVAL — Works together with FREQ to specify how often the session should be repeated. For example, FREQ=WEEKLY;INTERVAL=2 means once every two weeks. Optional. Default value is 1.
         * COUNT — The number of times this event should be repeated. Not yet supported.
         * UNTIL — The UTC date & time until which the session should be repeated. This parameter is optional. When it is not specified, the event repeats forever.
         * The format is a short ISO date, followed by 'T' and a short time with seconds and without milliseconds, terminated by the UTC designator 'Z'. For example, until Jan. 19th 2018 at 7:00 AM: 'UNTIL=20180119T070000Z'.
         * BYDAY - The days of the week when the event should be repeated. Currently, only a single day is supported. This parameter is mandatory.
         * Possible values are: MO, TU, WE, TH, FR, SA, SU
         * Note that DTSTART and DTEND lines are not allowed in this field; session start and end times are specified in the start and end fields.
         * **Example**: FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20200427T070000Z
         * ORIGINAL COMMENTS-->
         */
        recurrence?: string | null;
        /**
         * A string representing a recurrence rule (RRULE) if the session is an instance of a recurrence pattern.
         * Empty when the session is not an instance of a recurrence rule, or if the session defines a recurrence pattern, and `recurrence` is not empty.
         * @readonly
         */
        instanceOfRecurrence?: string | null;
        /**
         * The session version.
         * Composed by the schedule, session and participants versions.
         * @readonly
         */
        version?: SessionVersion$2;
    }
    interface CalendarDateTime$2 {
        /**
         * UTC date-time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. If a time zone offset is specified, the time is converted to UTC. For example, if you specify  `new Date('2021-01-06T16:00:00.000-07:00')`, the stored value will be `"2021-01-06T23:00:00.000Z"`.
         * Required if `localDateTime` is not specified.
         * If `localDateTime` is specified, `timestamp` is calculated as `localDateTime`, using the business's time zone.
         */
        timestamp?: Date;
        /** An object containing the local date and time for the business's time zone. */
        localDateTime?: LocalDateTime$2;
        /**
         * The time zone. Optional. Derived from the schedule's time zone.
         * In case this field is associated with recurring session, this field is empty.
         * @readonly
         */
        timeZone?: string | null;
    }
    interface LocalDateTime$2 {
        /** Year. 4-digit format. */
        year?: number | null;
        /** Month number, from 1-12. */
        monthOfYear?: number | null;
        /** Day of the month, from 1-31. */
        dayOfMonth?: number | null;
        /** Hour of the day in 24-hour format, from 0-23. */
        hourOfDay?: number | null;
        /** Minute, from 0-59. */
        minutesOfHour?: number | null;
    }
    interface ExternalCalendarInfo$2 {
        /** The external calendar type (e.g. Google Calendar, iCal, etc). */
        calendarType?: CalendarType$2;
    }
    enum CalendarType$2 {
        UNDEFINED = "UNDEFINED",
        GOOGLE = "GOOGLE",
        I_CAL = "I_CAL",
        /** Use `MICROSOFT` instead. */
        OUTLOOK = "OUTLOOK",
        /** Use `MICROSOFT` instead. */
        OFFICE_365 = "OFFICE_365",
        MICROSOFT = "MICROSOFT",
        OTHER = "OTHER"
    }
    enum Status$2 {
        UNDEFINED = "UNDEFINED",
        /** The session is confirmed. Default status. */
        CONFIRMED = "CONFIRMED",
        /**
         * The session is cancelled.
         * A cancelled session can be the cancellation of a recurring session that should no longer be displayed or a deleted single session.
         * The ListSessions returns cancelled sessions only if 'includeDelete' flag is set to true.
         */
        CANCELLED = "CANCELLED"
    }
    enum SessionType$2 {
        UNDEFINED = "UNDEFINED",
        /**
         * The session creates an event on the calendar for the owner of the schedule that the session belongs to.
         * Default type.
         */
        EVENT = "EVENT",
        /** The session represents a resource's available working hours. */
        WORKING_HOURS = "WORKING_HOURS",
        /** Deprecated. please use WORKING_HOURS */
        TIME_AVAILABILITY = "TIME_AVAILABILITY",
        /** Deprecated. The session represents a resource's available hours. please use WORKING_HOURS */
        AVAILABILITY = "AVAILABILITY"
    }
    interface SessionVersion$2 {
        /** Incremental version number, which is updated on each change to the session or on changes affecting the session. */
        number?: string | null;
    }
    interface ScheduleCancelled$2 {
        schedule?: Schedule$2;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$5;
        oldSchedule?: Schedule$2;
    }
    interface SessionCreated$2 {
        session?: Session$2;
    }
    interface SessionUpdated$2 {
        oldSession?: Session$2;
        newSession?: Session$2;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$5;
        /**
         * Whether this notification was created as a result of an anonymization request, such as GDPR.
         * An anonymized participant will have the following details:
         * name = "deleted"
         * phone = "deleted"
         * email = "deleted@deleted.com"
         */
        triggeredByAnonymizeRequest?: boolean | null;
    }
    interface SessionCancelled$2 {
        session?: Session$2;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$5;
    }
    interface AvailabilityPolicyUpdated$2 {
        availabilityPolicy?: AvailabilityPolicy$2;
    }
    /** Availability policy applied to all site schedules. */
    interface AvailabilityPolicy$2 {
        /** Specify how to split the schedule slots in intervals of minutes. */
        splitInterval?: SplitInterval$2;
    }
    interface IntervalSplit$2 {
        scheduleId?: string;
        intervals?: RecurringInterval$2[];
        newScheduleVersion?: number | null;
        oldScheduleVersion?: number | null;
    }
    interface RecurringSessionSplit$2 {
        scheduleId?: string;
        recurringSessions?: Session$2[];
        newScheduleVersion?: number | null;
        oldScheduleVersion?: number | null;
    }
    /** Schedule unassigned from user. */
    interface ScheduleUnassignedFromUser$2 {
        /** The Wix user id. */
        userId?: string | null;
        /** The schedule that was unassigned from the user. */
        schedule?: Schedule$2;
    }
    interface MultipleSessionsCreated$2 {
        schedulesWithSessions?: ScheduleWithSessions$2[];
    }
    interface ScheduleWithSessions$2 {
        schedule?: Schedule$2;
        siteProperties?: SitePropertiesOnScheduleCreation$2;
        sessions?: Session$2[];
    }
    interface SitePropertiesOnScheduleCreation$2 {
        /** The global time zone value. */
        timeZone?: string | null;
    }
    interface MigrationEvent$2 {
        migrationData?: MigrationData$2;
    }
    interface MigrationData$2 {
        businessId?: string | null;
        staffs?: StaffData$2[];
    }
    interface StaffData$2 {
        resourceId?: string;
        syncRequestEmail?: string;
        refreshToken?: string;
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
    }
    interface EntityUpdatedEvent$4 {
        /**
         * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
         * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
         * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
         */
        currentEntityAsJson?: string;
    }
    interface EntityDeletedEvent$4 {
        /** Entity that was deleted */
        deletedEntityAsJson?: string | null;
    }
    interface ActionEvent$4 {
        bodyAsJson?: string;
    }
    /** Encapsulates all details written to the Greyhound topic when a site's properties are updated. */
    interface SitePropertiesNotification$1 {
        /** The site ID for which this update notification applies. */
        metasiteId?: string;
        /** The actual update event. */
        event?: SitePropertiesEvent$1;
        /** A convenience set of mappings from the MetaSite ID to its constituent services. */
        translations?: Translation$1[];
        /** Context of the notification */
        changeContext?: ChangeContext$1;
    }
    /** The actual update event for a particular notification. */
    interface SitePropertiesEvent$1 {
        /** Version of the site's properties represented by this update. */
        version?: number;
        /** Updated properties. */
        properties?: Properties$1;
    }
    interface Properties$1 {
        /** Site categories. */
        categories?: Categories$1;
        /** Site locale. */
        locale?: Locale$1;
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
        address?: V4Address$1;
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
        businessSchedule?: BusinessSchedule$2;
        /** Supported languages of a site and the primary language. */
        multilingual?: Multilingual$1;
        /** Cookie policy the site owner defined for their site (before the users interacts with/limits it). */
        consentPolicy?: ConsentPolicy$1;
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
    interface Categories$1 {
        /** Primary site category. */
        primary?: string;
        /** Secondary site category. */
        secondary?: string[];
        /** Business Term Id */
        businessTermId?: string | null;
    }
    interface Locale$1 {
        /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
        languageCode?: string;
        /** Two-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
        country?: string;
    }
    interface V4Address$1 {
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
        hint?: AddressHint$1;
        /** Whether this address represents a physical location. */
        isPhysical?: boolean;
        /** Google-formatted version of this address. */
        googleFormattedAddress?: string;
        /** Street number. */
        streetNumber?: string;
        /** Apartment number. */
        apartmentNumber?: string;
        /** Geographic coordinates of location. */
        coordinates?: GeoCoordinates$1;
    }
    /**
     * Extra information on displayed addresses.
     * This is used for display purposes. Used to add additional data about the address, such as "In the passage".
     * Free text. In addition the user can state where he wants that additional description - before, after, or instead
     * the address string.
     */
    interface AddressHint$1 {
        /** Extra text displayed next to, or instead of, the actual address. */
        text?: string;
        /** Where the extra text should be displayed. */
        placement?: PlacementType$1;
    }
    /** Where the extra text should be displayed: before, after or instead of the actual address. */
    enum PlacementType$1 {
        BEFORE = "BEFORE",
        AFTER = "AFTER",
        REPLACE = "REPLACE"
    }
    /** Geocoordinates for a particular address. */
    interface GeoCoordinates$1 {
        /** Latitude of the location. Must be between -90 and 90. */
        latitude?: number;
        /** Longitude of the location. Must be between -180 and 180. */
        longitude?: number;
    }
    interface Multilingual$1 {
        /** Supported languages list. */
        supportedLanguages?: SupportedLanguage$1[];
        /** Whether to redirect to user language. */
        autoRedirect?: boolean;
    }
    interface SupportedLanguage$1 {
        /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
        languageCode?: string;
        /** Locale. */
        locale?: Locale$1;
        /** Whether the supported language is the primary language for the site. */
        isPrimary?: boolean;
        /** Language icon. */
        countryCode?: string;
        /** How the language will be resolved. For internal use. */
        resolutionMethod?: ResolutionMethod$1;
    }
    enum ResolutionMethod$1 {
        QUERY_PARAM = "QUERY_PARAM",
        SUBDOMAIN = "SUBDOMAIN",
        SUBDIRECTORY = "SUBDIRECTORY"
    }
    interface ConsentPolicy$1 {
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
    interface Translation$1 {
        /** The service type. */
        serviceType?: string;
        /** The application definition ID; this only applies to services of type ThirdPartyApps. */
        appDefId?: string;
        /** The instance ID of the service. */
        instanceId?: string;
    }
    interface ChangeContext$1 extends ChangeContextPayloadOneOf$1 {
        /** Properties were updated. */
        propertiesChange?: PropertiesChange$1;
        /** Default properties were created on site creation. */
        siteCreated?: SiteCreated$1;
        /** Properties were cloned on site cloning. */
        siteCloned?: SiteCloned$1;
    }
    /** @oneof */
    interface ChangeContextPayloadOneOf$1 {
        /** Properties were updated. */
        propertiesChange?: PropertiesChange$1;
        /** Default properties were created on site creation. */
        siteCreated?: SiteCreated$1;
        /** Properties were cloned on site cloning. */
        siteCloned?: SiteCloned$1;
    }
    interface PropertiesChange$1 {
    }
    interface SiteCreated$1 {
        /** Origin template site id. */
        originTemplateId?: string | null;
    }
    interface SiteCloned$1 {
        /** Origin site id. */
        originMetaSiteId?: string;
    }
    /**
     * Creates options and variants for a service.
     *
     * Before creating the `serviceOptionsAndVariants` object you need to anticipate and manually define
     * all variants based on the defined options and their choices. You then pass
     * the `options` and `variants` arrays in the
     * request. Variants aren't automatically calculated from the defined options and choices.
     *
     * __Current Limitations:__
     *
     * + Only a single `serviceOptionsAndVariants` object is supported per service.
     *
     * + Only a single option is supported per `serviceOptionsAndVariants` object. This means that services are limited to a single option. Therefore, `variants`provides pricing details for either all choices of the single option (for `CUSTOM` options) or all staff members providing the service (for `STAFF_MEMBER` options).
     * @param serviceOptionsAndVariants - Service options and variants to create.
     * @public
     * @documentationMaturity preview
     * @requiredField serviceOptionsAndVariants
     * @requiredField serviceOptionsAndVariants.options
     * @requiredField serviceOptionsAndVariants.serviceId
     * @requiredField serviceOptionsAndVariants.variants
     * @adminMethod
     * @returns Information about the created service options and variants.
     */
    function createServiceOptionsAndVariants(serviceOptionsAndVariants: ServiceOptionsAndVariants): Promise<ServiceOptionsAndVariants>;
    /**
     * Clones a `serviceOptionsAndVariants` object. This function can be called, for example, to duplicate a service.
     * The cloned service contains the original service options and variants.
     *
     * Each option
     * in the cloned service has a newly-generated ID that is copied to all choices of the variants in the
     * clone. The cloned service references the service provided in the request by `target_service_id`.
     * @param cloneFromId - ID of the `serviceOptionsAndVariants` object to clone.
     * @param targetServiceId - ID of the service that will be set for the cloned `serviceOptionsAndVariants`
     * @public
     * @documentationMaturity preview
     * @requiredField cloneFromId
     * @requiredField targetServiceId
     * @adminMethod
     */
    function cloneServiceOptionsAndVariants(cloneFromId: string, targetServiceId: string): Promise<CloneServiceOptionsAndVariantsResponse>;
    /**
     * Retrieves a `serviceOptionsAndVariants` object by `service_options_and_variants_id`.
     * @param serviceOptionsAndVariantsId - ID of the `serviceOptionsAndVariants` object to retrieve.
     * @public
     * @documentationMaturity preview
     * @requiredField serviceOptionsAndVariantsId
     * @returns Retrieved `serviceOptionsAndVariants` object.
     */
    function getServiceOptionsAndVariants(serviceOptionsAndVariantsId: string): Promise<ServiceOptionsAndVariants>;
    /**
     * Retrieves a service's options and variants by `service_id`.
     * @param serviceId - ID of the service to retrieve options and variants for.
     * @public
     * @documentationMaturity preview
     * @requiredField serviceId
     */
    function getServiceOptionsAndVariantsByServiceId(serviceId: string): Promise<GetServiceOptionsAndVariantsByServiceIdResponse>;
    /**
     * Updates the specified fields of the `serviceOptionsAndVariants` object.
     *
     * Currently, only a single option is supported per `serviceOptionsAndVariants` object.
     *
     * If you want to update `variants`, you must pass the full list of supported variants.
     *
     * If you want to update `options`, you must pass the full list of supported options.
     * @param _id - ID of the `serviceOptionsAndVariants` object.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField serviceOptionsAndVariants
     * @requiredField serviceOptionsAndVariants.revision
     * @param serviceOptionsAndVariants - Service options and variants to update.
     * @param options - Options for updating the service options and variants.
     * @adminMethod
     * @returns Updated `serviceOptionsAndVariants` object.
     */
    function updateServiceOptionsAndVariants(_id: string | null, serviceOptionsAndVariants: UpdateServiceOptionsAndVariants, options?: UpdateServiceOptionsAndVariantsOptions): Promise<ServiceOptionsAndVariants>;
    interface UpdateServiceOptionsAndVariants {
        /**
         * ID of the `serviceOptionsAndVariants` object.
         * @readonly
         */
        _id?: string | null;
        /** ID of the service related to these options and variants. */
        serviceId?: string | null;
        /** Service options. Note that currently only a single option is supported per service. */
        options?: ServiceOptions;
        /** Information about the service's variants. */
        variants?: ServiceVariants;
        /**
         * Price of the cheapest service variant.
         * @readonly
         */
        minPrice?: Money$1;
        /**
         * Price of the most expensive service variant.
         * @readonly
         */
        maxPrice?: Money$1;
        /**
         * Revision number, which increments by 1 each time the `serviceOptionsAndVariants` object is updated.
         * To prevent conflicting changes,
         * the current revision must be passed when updating and deleting the `serviceOptionsAndVariants` object.
         *
         * Ignored when creating a `serviceOptionsAndVariants` object.
         */
        revision?: string | null;
    }
    interface UpdateServiceOptionsAndVariantsOptions {
    }
    /**
     * Deletes a `serviceOptionsAndVariants` object.
     *
     *
     * Because each service has only a single `serviceOptionsAndVariants` object, the
     * service won't have any supported options and variants any longer. Instead,
     * the standard Wix Bookings service price calculation is used.
     * @param serviceOptionsAndVariantsId - ID of the `serviceOptionsAndVariants` object to delete.
     * @public
     * @documentationMaturity preview
     * @requiredField serviceOptionsAndVariantsId
     * @param options - Options for deleting the service options and variants.
     * @adminMethod
     */
    function deleteServiceOptionsAndVariants(serviceOptionsAndVariantsId: string, options?: DeleteServiceOptionsAndVariantsOptions): Promise<void>;
    interface DeleteServiceOptionsAndVariantsOptions {
        /** Revision of the `serviceOptionsAndVariants` object to delete. */
        revision?: string;
    }
    /**
     * Retrieves a list of `serviceOptionsAndVariants`, given the provided paging, filtering, and sorting.
     *
     * queryServiceOptionsAndVariants() runs with these defaults, which you can override:
     *
     * - `id` is sorted in `ASC` order
     * - `cursorPaging.limit` is `100`
     *
     * For a detailed list of supported filtering operations see
     * [supported filters](https://www.wix.com/velo/reference/wix-bookings-v2/serviceoptionsandvariants/filters).
     * @public
     * @documentationMaturity preview
     */
    function queryServiceOptionsAndVariants(): ServiceOptionsAndVariantsListQueryBuilder;
    interface QueryCursorResult$2 {
        cursors: Cursors$5;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface ServiceOptionsAndVariantsListQueryResult extends QueryCursorResult$2 {
        items: ServiceOptionsAndVariants[];
        query: ServiceOptionsAndVariantsListQueryBuilder;
        next: () => Promise<ServiceOptionsAndVariantsListQueryResult>;
        prev: () => Promise<ServiceOptionsAndVariantsListQueryResult>;
    }
    interface ServiceOptionsAndVariantsListQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "_id" | "serviceId", value: any) => ServiceOptionsAndVariantsListQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "serviceId", value: any) => ServiceOptionsAndVariantsListQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasSome: (propertyName: "variants.values.choices.optionId" | "variants.values.price", value: any[]) => ServiceOptionsAndVariantsListQueryBuilder;
        /**
         * Refines a query to match items where the specified property is in a short list of specified values.
         * @documentationMaturity preview */
        in: (propertyName: "_id" | "serviceId", value: any) => ServiceOptionsAndVariantsListQueryBuilder;
        /**
         * Refines a query to match items where the specified property is in a list of specified values, such as from another table.
         * @documentationMaturity preview */
        exists: (propertyName: "options.values" | "variants.values", value: boolean) => ServiceOptionsAndVariantsListQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => ServiceOptionsAndVariantsListQueryBuilder;
        /** @param cursor - A pointer to specific record
         * @documentationMaturity preview
         */
        skipTo: (cursor: string) => ServiceOptionsAndVariantsListQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<ServiceOptionsAndVariantsListQueryResult>;
    }
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptionsAndVariants = ServiceOptionsAndVariants;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOption = ServiceOption;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptionOptionSpecificDataOneOf = ServiceOptionOptionSpecificDataOneOf;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptionType = ServiceOptionType;
    const bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptionType: typeof ServiceOptionType;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_CustomServiceOption = CustomServiceOption;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceVariant = ServiceVariant;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptions = ServiceOptions;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceVariants = ServiceVariants;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_CreateServiceOptionsAndVariantsRequest = CreateServiceOptionsAndVariantsRequest;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_CreateServiceOptionsAndVariantsResponse = CreateServiceOptionsAndVariantsResponse;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_CloneServiceOptionsAndVariantsRequest = CloneServiceOptionsAndVariantsRequest;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_CloneServiceOptionsAndVariantsResponse = CloneServiceOptionsAndVariantsResponse;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_GetServiceOptionsAndVariantsRequest = GetServiceOptionsAndVariantsRequest;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_GetServiceOptionsAndVariantsResponse = GetServiceOptionsAndVariantsResponse;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_GetServiceOptionsAndVariantsByServiceIdRequest = GetServiceOptionsAndVariantsByServiceIdRequest;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_GetServiceOptionsAndVariantsByServiceIdResponse = GetServiceOptionsAndVariantsByServiceIdResponse;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_UpdateServiceOptionsAndVariantsRequest = UpdateServiceOptionsAndVariantsRequest;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_UpdateServiceOptionsAndVariantsResponse = UpdateServiceOptionsAndVariantsResponse;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_DeleteServiceOptionsAndVariantsRequest = DeleteServiceOptionsAndVariantsRequest;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_DeleteServiceOptionsAndVariantsResponse = DeleteServiceOptionsAndVariantsResponse;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_QueryServiceOptionsAndVariantsRequest = QueryServiceOptionsAndVariantsRequest;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_QueryServiceOptionsAndVariantsResponse = QueryServiceOptionsAndVariantsResponse;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceNotification = ServiceNotification;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceNotificationMetadataOneOf = ServiceNotificationMetadataOneOf;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceInfo = ServiceInfo;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_FutureBookingPolicy = FutureBookingPolicy;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_WaitingListPolicy = WaitingListPolicy;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_BookingsApprovalPolicy = BookingsApprovalPolicy;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceStatus = ServiceStatus;
    const bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceStatus: typeof ServiceStatus;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceNotificationEvent = ServiceNotificationEvent;
    const bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceNotificationEvent: typeof ServiceNotificationEvent;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_BusinessServicesPolicy = BusinessServicesPolicy;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_DeleteMetadata = DeleteMetadata;
    const bookingsCatalogV1ServiceOptionsAndVariants_universal_d_createServiceOptionsAndVariants: typeof createServiceOptionsAndVariants;
    const bookingsCatalogV1ServiceOptionsAndVariants_universal_d_cloneServiceOptionsAndVariants: typeof cloneServiceOptionsAndVariants;
    const bookingsCatalogV1ServiceOptionsAndVariants_universal_d_getServiceOptionsAndVariants: typeof getServiceOptionsAndVariants;
    const bookingsCatalogV1ServiceOptionsAndVariants_universal_d_getServiceOptionsAndVariantsByServiceId: typeof getServiceOptionsAndVariantsByServiceId;
    const bookingsCatalogV1ServiceOptionsAndVariants_universal_d_updateServiceOptionsAndVariants: typeof updateServiceOptionsAndVariants;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_UpdateServiceOptionsAndVariants = UpdateServiceOptionsAndVariants;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_UpdateServiceOptionsAndVariantsOptions = UpdateServiceOptionsAndVariantsOptions;
    const bookingsCatalogV1ServiceOptionsAndVariants_universal_d_deleteServiceOptionsAndVariants: typeof deleteServiceOptionsAndVariants;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_DeleteServiceOptionsAndVariantsOptions = DeleteServiceOptionsAndVariantsOptions;
    const bookingsCatalogV1ServiceOptionsAndVariants_universal_d_queryServiceOptionsAndVariants: typeof queryServiceOptionsAndVariants;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptionsAndVariantsListQueryResult = ServiceOptionsAndVariantsListQueryResult;
    type bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptionsAndVariantsListQueryBuilder = ServiceOptionsAndVariantsListQueryBuilder;
    namespace bookingsCatalogV1ServiceOptionsAndVariants_universal_d {
        export { bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptionsAndVariants as ServiceOptionsAndVariants, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOption as ServiceOption, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptionOptionSpecificDataOneOf as ServiceOptionOptionSpecificDataOneOf, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptionType as ServiceOptionType, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_CustomServiceOption as CustomServiceOption, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceVariant as ServiceVariant, ServiceChoice$3 as ServiceChoice, ServiceChoiceChoiceOneOf$3 as ServiceChoiceChoiceOneOf, Money$1 as Money, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptions as ServiceOptions, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceVariants as ServiceVariants, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_CreateServiceOptionsAndVariantsRequest as CreateServiceOptionsAndVariantsRequest, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_CreateServiceOptionsAndVariantsResponse as CreateServiceOptionsAndVariantsResponse, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_CloneServiceOptionsAndVariantsRequest as CloneServiceOptionsAndVariantsRequest, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_CloneServiceOptionsAndVariantsResponse as CloneServiceOptionsAndVariantsResponse, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_GetServiceOptionsAndVariantsRequest as GetServiceOptionsAndVariantsRequest, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_GetServiceOptionsAndVariantsResponse as GetServiceOptionsAndVariantsResponse, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_GetServiceOptionsAndVariantsByServiceIdRequest as GetServiceOptionsAndVariantsByServiceIdRequest, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_GetServiceOptionsAndVariantsByServiceIdResponse as GetServiceOptionsAndVariantsByServiceIdResponse, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_UpdateServiceOptionsAndVariantsRequest as UpdateServiceOptionsAndVariantsRequest, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_UpdateServiceOptionsAndVariantsResponse as UpdateServiceOptionsAndVariantsResponse, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_DeleteServiceOptionsAndVariantsRequest as DeleteServiceOptionsAndVariantsRequest, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_DeleteServiceOptionsAndVariantsResponse as DeleteServiceOptionsAndVariantsResponse, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_QueryServiceOptionsAndVariantsRequest as QueryServiceOptionsAndVariantsRequest, QueryV2$4 as QueryV2, QueryV2PagingMethodOneOf$4 as QueryV2PagingMethodOneOf, Sorting$5 as Sorting, SortOrder$5 as SortOrder, Paging$4 as Paging, CursorPaging$5 as CursorPaging, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_QueryServiceOptionsAndVariantsResponse as QueryServiceOptionsAndVariantsResponse, PagingMetadataV2$3 as PagingMetadataV2, Cursors$5 as Cursors, ResourceNotification$1 as ResourceNotification, Resource$2 as Resource, Schedule$2 as Schedule, RecurringInterval$2 as RecurringInterval, Interval$2 as Interval, Day$2 as Day, Frequency$2 as Frequency, LinkedSchedule$2 as LinkedSchedule, Transparency$2 as Transparency, RecurringIntervalType$2 as RecurringIntervalType, Location$5 as Location, LocationType$5 as LocationType, Address$5 as Address, AddressStreetOneOf$5 as AddressStreetOneOf, StreetAddress$5 as StreetAddress, AddressLocation$5 as AddressLocation, Subdivision$5 as Subdivision, LocationsLocation$2 as LocationsLocation, LocationStatus$2 as LocationStatus, LocationsLocationType$2 as LocationsLocationType, LocationsAddress$2 as LocationsAddress, LocationsStreetAddress$2 as LocationsStreetAddress, LocationsAddressLocation$2 as LocationsAddressLocation, BusinessSchedule$2 as BusinessSchedule, TimePeriod$2 as TimePeriod, DayOfWeek$2 as DayOfWeek, SpecialHourPeriod$2 as SpecialHourPeriod, Rate$2 as Rate, Price$2 as Price, Availability$2 as Availability, AvailabilityConstraints$2 as AvailabilityConstraints, SplitInterval$2 as SplitInterval, Participant$2 as Participant, ApprovalStatus$2 as ApprovalStatus, ExternalCalendarOverrides$2 as ExternalCalendarOverrides, ScheduleStatus$2 as ScheduleStatus, Version$2 as Version, ConferenceProvider$2 as ConferenceProvider, CalendarConference$2 as CalendarConference, ConferenceType$2 as ConferenceType, ResourceStatus$1 as ResourceStatus, BusinessLocation$1 as BusinessLocation, Event$1 as Event, Empty$2 as Empty, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceNotification as ServiceNotification, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceNotificationMetadataOneOf as ServiceNotificationMetadataOneOf, Service$1 as Service, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceInfo as ServiceInfo, Media$1 as Media, MediaItem$2 as MediaItem, MediaItemItemOneOf$1 as MediaItemItemOneOf, BookingPolicy$1 as BookingPolicy, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_FutureBookingPolicy as FutureBookingPolicy, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_WaitingListPolicy as WaitingListPolicy, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_BookingsApprovalPolicy as BookingsApprovalPolicy, PaymentOptions$1 as PaymentOptions, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceStatus as ServiceStatus, SeoSchema$1 as SeoSchema, Keyword$1 as Keyword, Tag$1 as Tag, Settings$1 as Settings, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceNotificationEvent as ServiceNotificationEvent, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_BusinessServicesPolicy as BusinessServicesPolicy, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_DeleteMetadata as DeleteMetadata, ParticipantNotification$5 as ParticipantNotification, ScheduleNotification$2 as ScheduleNotification, ScheduleNotificationEventOneOf$2 as ScheduleNotificationEventOneOf, ScheduleCreated$2 as ScheduleCreated, ScheduleUpdated$2 as ScheduleUpdated, RecurringSessionsUpdated$2 as RecurringSessionsUpdated, Session$2 as Session, CalendarDateTime$2 as CalendarDateTime, LocalDateTime$2 as LocalDateTime, ExternalCalendarInfo$2 as ExternalCalendarInfo, CalendarType$2 as CalendarType, Status$2 as Status, SessionType$2 as SessionType, SessionVersion$2 as SessionVersion, ScheduleCancelled$2 as ScheduleCancelled, SessionCreated$2 as SessionCreated, SessionUpdated$2 as SessionUpdated, SessionCancelled$2 as SessionCancelled, AvailabilityPolicyUpdated$2 as AvailabilityPolicyUpdated, AvailabilityPolicy$2 as AvailabilityPolicy, IntervalSplit$2 as IntervalSplit, RecurringSessionSplit$2 as RecurringSessionSplit, ScheduleUnassignedFromUser$2 as ScheduleUnassignedFromUser, MultipleSessionsCreated$2 as MultipleSessionsCreated, ScheduleWithSessions$2 as ScheduleWithSessions, SitePropertiesOnScheduleCreation$2 as SitePropertiesOnScheduleCreation, MigrationEvent$2 as MigrationEvent, MigrationData$2 as MigrationData, StaffData$2 as StaffData, DomainEvent$4 as DomainEvent, DomainEventBodyOneOf$4 as DomainEventBodyOneOf, EntityCreatedEvent$4 as EntityCreatedEvent, EntityUpdatedEvent$4 as EntityUpdatedEvent, EntityDeletedEvent$4 as EntityDeletedEvent, ActionEvent$4 as ActionEvent, SitePropertiesNotification$1 as SitePropertiesNotification, SitePropertiesEvent$1 as SitePropertiesEvent, Properties$1 as Properties, Categories$1 as Categories, Locale$1 as Locale, V4Address$1 as V4Address, AddressHint$1 as AddressHint, PlacementType$1 as PlacementType, GeoCoordinates$1 as GeoCoordinates, Multilingual$1 as Multilingual, SupportedLanguage$1 as SupportedLanguage, ResolutionMethod$1 as ResolutionMethod, ConsentPolicy$1 as ConsentPolicy, Translation$1 as Translation, ChangeContext$1 as ChangeContext, ChangeContextPayloadOneOf$1 as ChangeContextPayloadOneOf, PropertiesChange$1 as PropertiesChange, SiteCreated$1 as SiteCreated, SiteCloned$1 as SiteCloned, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_createServiceOptionsAndVariants as createServiceOptionsAndVariants, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_cloneServiceOptionsAndVariants as cloneServiceOptionsAndVariants, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_getServiceOptionsAndVariants as getServiceOptionsAndVariants, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_getServiceOptionsAndVariantsByServiceId as getServiceOptionsAndVariantsByServiceId, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_updateServiceOptionsAndVariants as updateServiceOptionsAndVariants, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_UpdateServiceOptionsAndVariants as UpdateServiceOptionsAndVariants, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_UpdateServiceOptionsAndVariantsOptions as UpdateServiceOptionsAndVariantsOptions, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_deleteServiceOptionsAndVariants as deleteServiceOptionsAndVariants, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_DeleteServiceOptionsAndVariantsOptions as DeleteServiceOptionsAndVariantsOptions, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_queryServiceOptionsAndVariants as queryServiceOptionsAndVariants, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptionsAndVariantsListQueryResult as ServiceOptionsAndVariantsListQueryResult, bookingsCatalogV1ServiceOptionsAndVariants_universal_d_ServiceOptionsAndVariantsListQueryBuilder as ServiceOptionsAndVariantsListQueryBuilder, };
    }
    /** extended bookings */
    interface ExtendedBooking {
        /** Booking. */
        booking?: Booking$2;
        /**
         * Information about which actions the customer can perform for the
         * booking. Available only when passing `withBookingAllowedActions` as `true`.
         */
        allowedActions?: AllowedActions$1;
        /**
         * Information about attendance. Available only when passing
         * `withBookingAttendanceInfo` as `true`.
         */
        attendance?: Attendance$1;
    }
    enum AttendanceStatus$1 {
        NOT_SET = "NOT_SET",
        ATTENDED = "ATTENDED",
        NOT_ATTENDED = "NOT_ATTENDED"
    }
    /** The booking object, version 2. */
    interface Booking$2 extends BookingParticipantsInfoOneOf$2 {
        /** Total number of participants. Available only when the booking includes a single service variant. */
        totalParticipants?: number;
        /**
         * Information about the booked service choices and participants.
         * Available only when the booking includes multiple service variants.
         */
        participantsChoices?: ParticipantChoices$2;
        /**
         * Booking ID.
         * @readonly
         */
        _id?: string | null;
        /** An object describing the slot or schedule that was booked. */
        bookedEntity?: BookedEntity$2;
        /** Contact details of the site visitor or member making the booking. */
        contactDetails?: ContactDetails$2;
        /** Additional custom fields submitted with the booking form. */
        additionalFields?: CustomFormField$2[];
        /**
         * Booking status.
         * One of:
         * - `"CREATED"` - The booking was created.
         * - `"UPDATED"` - The booking was updated.
         * - `"CONFIRMED"` - The booking was confirmed and appears on the bookings calendar.
         * A booking can be manually confirmed using the [`Confirm Or Decline API`](www.example.com).
         * A booking can be automatically confirmed when the following requirements are met:
         * + The service is configured as automatically confirmed.
         * + The system invoked the eCommerce checkout API and created an order.
         * - `"CANCELED"` - The booking has been canceled and synced to the bookings calendar.
         * The booking can be canceled using [`Cancel Booking API`](www.example.com).
         * - `"PENDING"` - The booking is waiting to be confirmed or declined by the owner and the booking is synced to the bookings calendar.
         * Bookings can be manually set as `PENDING` using the [`setAsPending` API](www.example.com), by those with Manage Booking Status permissions scopes.
         * Bookings can be automatically set as `PENDING` when the following requirements are met:
         * + The service is configured as manually confirmed.
         * + Invoking the eCommerce checkout API and an order has been created.
         * - `"WAITING_LIST"` - The booking is on a waiting list.
         * - `"DECLINED"` - The booking was declined by the owner and synced to the Bookings calendar.
         * Bookings can be manually declined using the [`Decline Booking` API](www.example.com) by those with Manage Booking Status permissions scopes.
         * Booking can be automatically declined when one of the following requirements are met:
         * + Invoking the `eCommerce checkout` API and the order declined event has been sent.
         * + Invoking the `eCommerce checkout` API and order approved event has been sent, but the booking is offline and the booking causes a double booking.
         */
        status?: BookingStatus$2;
        /**
         * Payment status.
         * One of:
         * - `"NOT_PAID"` The booking is not paid for.
         * - `"PAID"` The booking is fully paid.
         * - `"PARTIALLY_PAID"` The booking is partially paid.
         * - `"REFUNDED"` The booking is refunded.
         * - `"EXEMPT"` The booking is free of charge.
         * @readonly
         */
        paymentStatus?: PaymentStatus$2;
        /**
         * Selected payment option.
         * One of the payment options offered by the service, or another option if `skipSelectedPaymentOptionValidation` is `true`.
         * When undefined, the payment option is resolved by the service configuration on checkout.
         */
        selectedPaymentOption?: SelectedPaymentOption$2;
        /**
         * Date and time the booking was created.
         * @readonly
         */
        _createdDate?: Date;
        /** External ID provided by the client app on creation. */
        externalUserId?: string | null;
        /** Revision number to be used when updating, rescheduling, or cancelling the booking. Revision number, which increments by 1 each time the booking is updated, rescheduled, or canceled. To prevent conflicting changes,the current revision must be passed when updating the booking. */
        revision?: string | null;
        /**
         * ID of the creator of the Booking.
         * If `appId` and another ID are present, the other ID takes precedence.
         * @readonly
         */
        createdBy?: IdentificationData$3;
        /**
         * The start date of this booking. For a slot, this is the start date of the slot. For a schedule, this is the start date of the first session.
         * @readonly
         */
        startDate?: Date;
        /**
         * The end date of this booking. For a slot, this is the end date of the slot. For a schedule, this is the end date of the last session.
         * @readonly
         */
        endDate?: Date;
        /**
         * Date and time the booking was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /** Custom field data for this object. Extended fields must be configured in the Wix Dev Center before they can be accessed with API calls. */
        extendedFields?: ExtendedFields$4;
        /**
         * Whether this booking overlaps another existing confirmed booking. Returned when: `true`
         * @readonly
         */
        doubleBooked?: boolean | null;
    }
    /** @oneof */
    interface BookingParticipantsInfoOneOf$2 {
        /** Total number of participants. Available only when the booking includes a single service variant. */
        totalParticipants?: number;
        /**
         * Information about the booked service choices and participants.
         * Available only when the booking includes multiple service variants.
         */
        participantsChoices?: ParticipantChoices$2;
    }
    enum MultiServiceBookingType$2 {
        /**
         * Multi service booking will be considered available if its bookings are
         * available as returned from ListMultiServiceAvailabilityTimeSlots API.
         * See [List Multi Service Availability Time Slots] (url) documentation // todo: complete url
         */
        SEQUENTIAL_BOOKINGS = "SEQUENTIAL_BOOKINGS",
        /**
         * Multi service booking will be considered available if each of its bookings is available separately.
         * Not supported yet
         */
        SEPARATE_BOOKINGS = "SEPARATE_BOOKINGS",
        /** Not supported yet */
        PARALLEL_BOOKINGS = "PARALLEL_BOOKINGS"
    }
    interface BookedEntity$2 extends BookedEntityItemOneOf$2 {
        /** The booked slot, once booked becomes a session, The booking is automatically assigned to the session if it already exists, or creates a session if one doesn't already exist. */
        slot?: BookedSlot$2;
        /** The booked schedule. The booking is automatically assigned to the schedule's sessions. */
        schedule?: BookedSchedule$2;
        /**
         * Session title at the time of booking.
         * If session doesn't exist at the time of the booking, service name is used.
         * @readonly
         */
        title?: string | null;
        /**
         * List of tags for the booking.
         * System-assigned tags for sessions and schedules are:
         * + "INDIVIDUAL" Appointments, including appointments with more than 1 participant.
         * + "GROUP" Individual classes.
         * + "COURSE" Courses.
         */
        tags?: string[] | null;
    }
    /** @oneof */
    interface BookedEntityItemOneOf$2 {
        /** The booked slot, once booked becomes a session, The booking is automatically assigned to the session if it already exists, or creates a session if one doesn't already exist. */
        slot?: BookedSlot$2;
        /** The booked schedule. The booking is automatically assigned to the schedule's sessions. */
        schedule?: BookedSchedule$2;
    }
    interface BookedSlot$2 {
        /**
         * ID of the underlying session when session is a single session or generated from a recurring session.
         * If `sessionId` is defined in the `Create Booking` request, the `startDate`, `endDate`, `timezone`, `resource`, and `location` fields are ignored and populated from the existing session's information.
         */
        sessionId?: string | null;
        /** Service ID. */
        serviceId?: string;
        /** Schedule ID. Required. */
        scheduleId?: string;
        /**
         * Calendar 3 event ID
         * If not empty, on all write flows (create / update) gets priority over session_id.
         * so if both session_id and event_id are provided, the session_id that will be set on the booking will be based on the event_id.
         * Otherwise, if event_id is empty on write flow,
         */
        eventId?: string | null;
        /**
         * The start time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format.
         */
        startDate?: string | null;
        /**
         * The end time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format.
         */
        endDate?: string | null;
        /** The timezone according to which the slot was shown to the user when booking, and should be shown in future. */
        timezone?: string | null;
        /**
         * The enriched resource assigned to the slot, can be either the requested resource or the resource chosen by the system.
         * When populated, the given resource will be booked according to it's availability.
         * When empty, If `skip_availability_validation` is `false`, a random available resource will be assigned to the slot upon confirmation,
         * otherwise one of the service resources will be assigned to the slot randomly upon confirmation.
         * This resource is the slot primary resource.
         */
        resource?: BookedResource$2;
        /** Location where the slot's session takes place. */
        location?: Location$4;
    }
    interface BookedResource$2 {
        /** Booked resource ID. */
        _id?: string;
        /** Resource's name at the time of booking. */
        name?: string | null;
        /** Resource's email at the time of booking. */
        email?: string | null;
        /** Resource's schedule ID. */
        scheduleId?: string | null;
    }
    interface Location$4 {
        /**
         * Business location ID. Available only for locations that are business locations,
         * meaning the `location_type` is `"OWNER_BUSINESS"`.
         */
        _id?: string | null;
        /** Location name. */
        name?: string | null;
        /** The full address of this location. */
        formattedAddress?: string | null;
        /**
         * Location type.
         *
         * - `"OWNER_BUSINESS"`: The business address, as set in the site’s general settings.
         * - `"OWNER_CUSTOM"`: The address as set when creating the service.
         * - `"CUSTOM"`: The address as set for the individual session.
         */
        locationType?: LocationType$4;
    }
    enum LocationType$4 {
        UNDEFINED = "UNDEFINED",
        OWNER_BUSINESS = "OWNER_BUSINESS",
        OWNER_CUSTOM = "OWNER_CUSTOM",
        CUSTOM = "CUSTOM"
    }
    interface BookedSchedule$2 {
        /** Schedule ID. */
        scheduleId?: string;
        /** Booked service ID. */
        serviceId?: string | null;
        /**
         * Location where the schedule's sessions take place. Read only.
         * @readonly
         */
        location?: Location$4;
        /** The timezone according to which the slot was shown to the user when booking, and should be shown in future. */
        timezone?: string | null;
        /**
         * The start time of the first session in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format. Required.
         * @readonly
         */
        firstSessionStart?: string | null;
        /**
         * The end time of the last session in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format. Required.
         * @readonly
         */
        lastSessionEnd?: string | null;
    }
    interface ContactDetails$2 {
        /** Contact's ID. */
        contactId?: string | null;
        /** Contact's first name. When populated from a standard booking form, this property corresponds to the **Name** field. */
        firstName?: string | null;
        /** Contact's last name. */
        lastName?: string | null;
        /** Contact's email, used to create a new contact or get existing one from the [Contacts API](https://dev.wix.com/api/rest/contacts/contacts). Used to validate coupon usage limitations per contact. If not passed, the coupon usage limitation will not be enforced. (Coupon usage limitation validation is not supported yet). */
        email?: string | null;
        /** Contact's phone number. */
        phone?: string | null;
        /** Contact's full address. */
        fullAddress?: Address$4;
        /** Contact's time zone. */
        timeZone?: string | null;
        /** Contact's country in [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
        countryCode?: string | null;
    }
    /** Physical address */
    interface Address$4 extends AddressStreetOneOf$4 {
        /** Street name, number and apartment number. */
        streetAddress?: StreetAddress$4;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
        /** Country code. */
        country?: string | null;
        /** Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Zip/postal code. */
        postalCode?: string | null;
        /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
        addressLine2?: string | null;
        /** A string containing the full address of this location. */
        formattedAddress?: string | null;
        /** Free text to help find the address. */
        hint?: string | null;
        /** Coordinates of the physical address. */
        geocode?: AddressLocation$4;
        /** Country full name. */
        countryFullname?: string | null;
        /** Multi-level subdivisions from top to bottom. */
        subdivisions?: Subdivision$4[];
    }
    /** @oneof */
    interface AddressStreetOneOf$4 {
        /** Street name, number and apartment number. */
        streetAddress?: StreetAddress$4;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
    }
    interface StreetAddress$4 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /** Apartment number. */
        apt?: string;
    }
    interface AddressLocation$4 {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision$4 {
        /** Subdivision code. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        code?: string;
        /** Subdivision full name. */
        name?: string;
    }
    interface CustomFormField$2 {
        /** ID of the form field as defined in the form. */
        _id?: string;
        /** Value that was submitted for this field. */
        value?: string | null;
        /**
         * Form field's label at the time of submission.
         * @readonly
         */
        label?: string | null;
        /**
         * <!--ONLY:VELO
         * One of:
         * - `"SHORT_TEXT"`
         * - `"LONG_TEXT"`
         * - `"CHECK_BOX"`
         * <!--END:ONLY:VELO-->
         */
        valueType?: ValueType$2;
    }
    enum ValueType$2 {
        /** Short text. This is the default value type. */
        SHORT_TEXT = "SHORT_TEXT",
        /** Long text */
        LONG_TEXT = "LONG_TEXT",
        /** a text that represent the check box value: if selected the value is "true", otherwise "false". */
        CHECK_BOX = "CHECK_BOX"
    }
    /** Booking status. */
    enum BookingStatus$2 {
        CREATED = "CREATED",
        CONFIRMED = "CONFIRMED",
        CANCELED = "CANCELED",
        PENDING = "PENDING",
        DECLINED = "DECLINED",
        WAITING_LIST = "WAITING_LIST"
    }
    /**
     * Payment status.
     * Automatically updated when using eCom checkout APIs.
     */
    enum PaymentStatus$2 {
        UNDEFINED = "UNDEFINED",
        NOT_PAID = "NOT_PAID",
        PAID = "PAID",
        /** not supported yet. */
        PARTIALLY_PAID = "PARTIALLY_PAID",
        /** not supported yet */
        REFUNDED = "REFUNDED",
        EXEMPT = "EXEMPT"
    }
    /**
     * The selected payment option.
     * One of the payment options offered by the service.
     * This field is be set when the user selects an option during booking.
     * If left undefined, the payment option is resolved by the service configuration on checkout.
     */
    enum SelectedPaymentOption$2 {
        UNDEFINED = "UNDEFINED",
        OFFLINE = "OFFLINE",
        ONLINE = "ONLINE",
        MEMBERSHIP = "MEMBERSHIP",
        /** Payment can only be done using a membership and must be manually redeemed in the dashboard by the site owner. */
        MEMBERSHIP_OFFLINE = "MEMBERSHIP_OFFLINE"
    }
    interface BookingSource$2 {
        /**
         * Platform from which a booking was created
         * <!--ONLY:VELO
         * One of:
         * - `"WEB"` Desktop browser.
         * - `"MOBILE_APP"` Mobile application.
         * <!--END:ONLY:VELO-->
         */
        platform?: Platform$2;
        /**
         * Actor that created this booking.
         * <!--ONLY:VELO
         * One of:
         * - `"BUSINESS"`
         * - `"CUSTOMER"`
         * <!--END:ONLY:VELO-->
         */
        actor?: Actor$2;
        /**
         * Wix site ID of the application that created the booking.
         * @readonly
         */
        appDefId?: string | null;
        /**
         * Name of the application that created the booking, as saved in Wix Developers Center at the time of booking.
         * @readonly
         */
        appName?: string | null;
    }
    enum Platform$2 {
        UNDEFINED_PLATFORM = "UNDEFINED_PLATFORM",
        WEB = "WEB",
        MOBILE_APP = "MOBILE_APP"
    }
    enum Actor$2 {
        UNDEFINED_ACTOR = "UNDEFINED_ACTOR",
        BUSINESS = "BUSINESS",
        CUSTOMER = "CUSTOMER"
    }
    interface ParticipantNotification$4 {
        /**
         * Whether to send the message about the changes to the customer.
         *
         * Default: `false`
         */
        notifyParticipants?: boolean;
        /** Custom message to send to the participants about the changes to the booking. */
        message?: string | null;
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
        /** ID of of a contact in the site's [CRM by Ascend](https://www.wix.com/ascend/crm) system. */
        contactId?: string | null;
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
    enum IdentityType$3 {
        UNKNOWN = "UNKNOWN",
        ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
        MEMBER = "MEMBER",
        WIX_USER = "WIX_USER",
        APP = "APP"
    }
    interface FlowControlSettings$2 {
        /**
         * When true, skips availability checking and allows booking.
         * Requires BOOKINGS.OVERRIDE_AVAILABILITY permissions.
         */
        skipAvailabilityValidation?: boolean;
        /**
         * When true, allows booking a confirmation-required service without requiring confirmation.
         * Requires BOOKINGS.IGNORE_BOOKING_POLICY permissions.
         */
        skipBusinessConfirmation?: boolean;
        /**
         * When true, skips selected payment option checking as defined in `selectedPaymentOption` field
         * and allows booking.
         * Requires BOOKINGS.MANAGE_PAYMENTS permissions.
         */
        skipSelectedPaymentOptionValidation?: boolean;
        /** When true, refunds the booking's payment when the booking is canceled. */
        withRefund?: boolean | null;
    }
    interface ExtendedFields$4 {
        /**
         * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
         * The value of each key is structured according to the schema defined when the extended fields were configured.
         *
         * You can only access fields for which you have the appropriate permissions.
         *
         * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
         */
        namespaces?: Record<string, Record<string, any>>;
    }
    interface ParticipantChoices$2 {
        /** Information about the booked service choices. Includes the number of participants. */
        serviceChoices?: ServiceChoices$2[];
    }
    interface ServiceChoices$2 {
        /** Number of participants for this variant. */
        numberOfParticipants?: number | null;
        /** Service choices for these participants. */
        choices?: ServiceChoice$2[];
    }
    interface ServiceChoice$2 extends ServiceChoiceChoiceOneOf$2 {
        /**
         * Value for one of the choices in the [`CustomServiceOption.choices`](https://example.com) list.
         * Choices are specific values for an option the customer can choose to book. For example,
         * the option `ageGroup` may have these choices: `child`, `student`, `adult`, and `senior`.
         * Each choice may have a different price.
         */
        custom?: string;
        /**
         * ID of the corresponding option for the choice. For example, the choice `child`
         * could correspond to the option `ageGroup`. In this case, `optionId` is the ID
         * for the `ageGroup` option.
         */
        optionId?: string;
    }
    /** @oneof */
    interface ServiceChoiceChoiceOneOf$2 {
        /**
         * Value for one of the choices in the [`CustomServiceOption.choices`](https://example.com) list.
         * Choices are specific values for an option the customer can choose to book. For example,
         * the option `ageGroup` may have these choices: `child`, `student`, `adult`, and `senior`.
         * Each choice may have a different price.
         */
        custom?: string;
    }
    interface MultiServiceBookingInfo$2 {
        /**
         * Multi service booking ID.
         * @readonly
         */
        _id?: string | null;
        /** Multi service booking type. */
        type?: MultiServiceBookingType$2;
    }
    /** Possible allowed actions for a Booking */
    interface AllowedActions$1 {
        /** Whether the customer is allowed to cancel the booking. */
        cancel?: boolean;
        /** Whether the customer is allowed to reschedule the booking. */
        reschedule?: boolean;
        /**
         * Deprecated.
         * Whether the customer is entitled to a refund when canceling the booking.
         */
        refund?: boolean | null;
    }
    interface Attendance$1 {
        /**
         * ID of the attendance object.
         * @readonly
         */
        _id?: string | null;
        /**
         * General Information about the booking's attendance.
         *
         * + `NOT_SET`: There is no available attendance information.
         * + `ATTENDED`: At least 1 participant attended the session.
         * + `NOT_ATTENDED`: No participant attended the session.
         */
        status?: AttendanceStatus$1;
        /** Total number of participants that attended the session. */
        numberOfAttendees?: number;
    }
    interface QueryExtendedBookingRequest {
        /** Information about filters, paging, and sorting. */
        query: QueryV2$3;
        /**
         * Whether information about which actions the customer can perform
         * for the bookings is returned.
         */
        withBookingAllowedActions?: boolean;
        /** Whether information about the attendance for the bookings is returned. */
        withBookingAttendanceInfo?: boolean;
        /**
         * Filters the retrieved bookings by the booking ID that corresponds to
         * specified `sessionId`. The `booking.id` is calculated by calling
         * [Get Session](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/session/get-session)
         * and saving the returned values for `participants.Id`.
         * These participant IDs are then used as `booking.id`.
         * This filter overrides the `booking.id` filter inside the query object.
         *
         * __Note__: Bookings for courses don't include a `sessionId`. For these
         * bookings, you must use this field to filter by session ID.
         */
        sessionId?: string | null;
    }
    interface QueryV2$3 extends QueryV2PagingMethodOneOf$3 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$3;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$4;
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
        sort?: Sorting$4[];
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
        cursorPaging?: CursorPaging$4;
    }
    interface Sorting$4 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$4;
    }
    enum SortOrder$4 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$3 {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface CursorPaging$4 {
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
    interface QueryExtendedBookingResponse {
        /**
         * Retrieved bookings and additional information about attendance or actions
         * the customer can perform
         */
        extendedBookings?: ExtendedBooking[];
        /** Paging metadata. */
        pagingMetadata?: PagingMetadataV2$2;
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
        cursors?: Cursors$4;
    }
    interface Cursors$4 {
        /** Cursor string pointing to the next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to the previous page in the list of results. */
        prev?: string | null;
    }
    interface QueryExtendedBookingsRequest {
        /** Information about filters, paging, and sorting. */
        query: CommonQueryV2;
        /**
         * Whether information about which actions the customer can perform
         * for the bookings is returned.
         */
        withBookingAllowedActions?: boolean;
        /** Whether information about the attendance for the bookings is returned. */
        withBookingAttendanceInfo?: boolean;
    }
    interface CommonQueryV2 extends CommonQueryV2PagingMethodOneOf {
        /** Paging options to limit and skip the number of items. */
        paging?: CommonPaging;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$4;
        /**
         * Filter object in the following format:
         * `"filter" : {
         * "fieldName1": "value1",
         * "fieldName2":{"$operator":"value2"}
         * }`
         * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
         *
         *   See [Supported Filters](https://www.wix.com/velo/reference/wix-bookings-v2/extendedbookings/supported-filters)
         * for a full list.
         */
        filter?: Record<string, any> | null;
        /**
         * Sort object in the following format:
         * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
         */
        sort?: Sorting$4[];
    }
    /** @oneof */
    interface CommonQueryV2PagingMethodOneOf {
        /** Paging options to limit and skip the number of items. */
        paging?: CommonPaging;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$4;
    }
    interface CommonPaging {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface QueryExtendedBookingsResponse {
        /**
         * Retrieved bookings and additional information, such as information about about the attendance or actions
         * the customer can perform.
         */
        extendedBookings?: ExtendedBooking[];
        /** Paging metadata. */
        pagingMetadata?: PagingMetadataV2$2;
    }
    interface QueryOptions$1 {
        /**
         * Whether information about which actions the customer can perform
         * for the bookings is returned.
         */
        withBookingAllowedActions?: boolean;
        /** Whether information about the attendance for the bookings is returned. */
        withBookingAttendanceInfo?: boolean;
        /**
         * Filters the retrieved bookings by the booking ID that corresponds to
         * specified `sessionId`. The `booking.id` is calculated by calling
         * [Get Session](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/session/get-session)
         * and saving the returned values for `participants.Id`.
         * These participant IDs are then used as `booking.id`.
         * This filter overrides the `booking.id` filter inside the query object.
         *
         * __Note__: Bookings for courses don't include a `sessionId`. For these
         * bookings, you must use this field to filter by session ID.
         */
        sessionId?: string | null;
    }
    /**
     * Retrieves a list of bookings, including additional extended information, given the provided paging, filtering, and sorting.
     *
     * Up to 100 extended bookings can be returned per request.
     *
     * `queryExtendedBookings()` runs with these defaults, which you can override:
     *
     * - `createdDate` sorted in `DESC` order
     * - `cursorPaging.limit` is `50`
     *
     *
     * You can retrieve information about which actions the customer can perform
     * for the bookings. To do so, pass `withBookingAllowedActions` as `true`.
     *
     *
     * For field support, see
     * [supported filters](https://www.wix.com/velo/reference/wix-bookings-v2/extendedbookings/supported-filters)
     * for more information.
     *
     * You can specify a filter only once per query. If you specify a filter
     * more than once, only the first filter determines the extended bookings that are returned.
     *
     * When filtering by date, you must use [UTC time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
     *
     * >**Note:** This function is restricted and only runs if you elevate permissions using the [`wix-auth.elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * @public
     * @documentationMaturity preview
     * @requiredField query
     * @param query - Information about filters, paging, and sorting.
     * @param options - Additional options for performing the query.
     */
    function queryExtendedBookings(query: CommonQueryV2, options?: QueryExtendedBookingsOptions): Promise<QueryExtendedBookingsResponse>;
    interface QueryExtendedBookingsOptions {
        /**
         * Whether information about which actions the customer can perform
         * for the bookings is returned.
         */
        withBookingAllowedActions?: boolean;
        /** Whether information about the attendance for the bookings is returned. */
        withBookingAttendanceInfo?: boolean;
    }
    type bookingsReaderV2ExtendedBooking_universal_d_ExtendedBooking = ExtendedBooking;
    type bookingsReaderV2ExtendedBooking_universal_d_QueryExtendedBookingRequest = QueryExtendedBookingRequest;
    type bookingsReaderV2ExtendedBooking_universal_d_QueryExtendedBookingResponse = QueryExtendedBookingResponse;
    type bookingsReaderV2ExtendedBooking_universal_d_QueryExtendedBookingsRequest = QueryExtendedBookingsRequest;
    type bookingsReaderV2ExtendedBooking_universal_d_CommonQueryV2 = CommonQueryV2;
    type bookingsReaderV2ExtendedBooking_universal_d_CommonQueryV2PagingMethodOneOf = CommonQueryV2PagingMethodOneOf;
    type bookingsReaderV2ExtendedBooking_universal_d_CommonPaging = CommonPaging;
    type bookingsReaderV2ExtendedBooking_universal_d_QueryExtendedBookingsResponse = QueryExtendedBookingsResponse;
    const bookingsReaderV2ExtendedBooking_universal_d_queryExtendedBookings: typeof queryExtendedBookings;
    type bookingsReaderV2ExtendedBooking_universal_d_QueryExtendedBookingsOptions = QueryExtendedBookingsOptions;
    namespace bookingsReaderV2ExtendedBooking_universal_d {
        export { bookingsReaderV2ExtendedBooking_universal_d_ExtendedBooking as ExtendedBooking, AttendanceStatus$1 as AttendanceStatus, Booking$2 as Booking, BookingParticipantsInfoOneOf$2 as BookingParticipantsInfoOneOf, MultiServiceBookingType$2 as MultiServiceBookingType, BookedEntity$2 as BookedEntity, BookedEntityItemOneOf$2 as BookedEntityItemOneOf, BookedSlot$2 as BookedSlot, BookedResource$2 as BookedResource, Location$4 as Location, LocationType$4 as LocationType, BookedSchedule$2 as BookedSchedule, ContactDetails$2 as ContactDetails, Address$4 as Address, AddressStreetOneOf$4 as AddressStreetOneOf, StreetAddress$4 as StreetAddress, AddressLocation$4 as AddressLocation, Subdivision$4 as Subdivision, CustomFormField$2 as CustomFormField, ValueType$2 as ValueType, BookingStatus$2 as BookingStatus, PaymentStatus$2 as PaymentStatus, SelectedPaymentOption$2 as SelectedPaymentOption, BookingSource$2 as BookingSource, Platform$2 as Platform, Actor$2 as Actor, ParticipantNotification$4 as ParticipantNotification, IdentificationData$3 as IdentificationData, IdentificationDataIdOneOf$3 as IdentificationDataIdOneOf, IdentityType$3 as IdentityType, FlowControlSettings$2 as FlowControlSettings, ExtendedFields$4 as ExtendedFields, ParticipantChoices$2 as ParticipantChoices, ServiceChoices$2 as ServiceChoices, ServiceChoice$2 as ServiceChoice, ServiceChoiceChoiceOneOf$2 as ServiceChoiceChoiceOneOf, MultiServiceBookingInfo$2 as MultiServiceBookingInfo, AllowedActions$1 as AllowedActions, Attendance$1 as Attendance, bookingsReaderV2ExtendedBooking_universal_d_QueryExtendedBookingRequest as QueryExtendedBookingRequest, QueryV2$3 as QueryV2, QueryV2PagingMethodOneOf$3 as QueryV2PagingMethodOneOf, Sorting$4 as Sorting, SortOrder$4 as SortOrder, Paging$3 as Paging, CursorPaging$4 as CursorPaging, bookingsReaderV2ExtendedBooking_universal_d_QueryExtendedBookingResponse as QueryExtendedBookingResponse, PagingMetadataV2$2 as PagingMetadataV2, Cursors$4 as Cursors, bookingsReaderV2ExtendedBooking_universal_d_QueryExtendedBookingsRequest as QueryExtendedBookingsRequest, bookingsReaderV2ExtendedBooking_universal_d_CommonQueryV2 as CommonQueryV2, bookingsReaderV2ExtendedBooking_universal_d_CommonQueryV2PagingMethodOneOf as CommonQueryV2PagingMethodOneOf, bookingsReaderV2ExtendedBooking_universal_d_CommonPaging as CommonPaging, bookingsReaderV2ExtendedBooking_universal_d_QueryExtendedBookingsResponse as QueryExtendedBookingsResponse, QueryOptions$1 as QueryOptions, bookingsReaderV2ExtendedBooking_universal_d_queryExtendedBookings as queryExtendedBookings, bookingsReaderV2ExtendedBooking_universal_d_QueryExtendedBookingsOptions as QueryExtendedBookingsOptions, };
    }
    /** The `Service` object represents the business offering that a business provides to its customers. */
    interface Service {
        /**
         * Service ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Service type.
         *
         * Supported Values:
         * - "APPOINTMENT"
         * - "CLASS"
         * - "COURSE"
         *
         */
        type?: ServiceType;
        /** Order of a service within a category. */
        sortOrder?: number | null;
        name?: string | null;
        description?: string | null;
        tagLine?: string | null;
        /** Default maximum number of customers that can book the service. The service cannot be booked beyond this capacity. */
        defaultCapacity?: number | null;
        /** Media associated with the service. */
        media?: Media;
        /** Whether the service is hidden from the site. */
        hidden?: boolean | null;
        /** The category the service is associated with. */
        category?: V2Category;
        /** The form used when booking the service. */
        form?: Form;
        /** Payment options for booking the service. */
        payment?: Payment;
        /** Online booking settings. */
        onlineBooking?: OnlineBooking;
        /** Conferencing options for this service. */
        conferencing?: Conferencing;
        /**
         * The locations this service is offered at.
         * In case of multiple (more than 1) location, All locations must be of type `BUSINESS`.
         * For courses only: Currently, only 1 location is supported, for all location types.
         */
        locations?: Location$3[];
        /** Policy determining under what conditions this service can be booked. For example, whether the service can only be booked up to 30 minutes before it begins. */
        bookingPolicy?: BookingPolicy;
        /** The service's schedule, which can be used to manage the service's sessions. */
        schedule?: Schedule$1;
        /** IDs of the staff members providing the service. For appointments only. */
        staffMemberIds?: string[];
        /**
         * A slug is the last part of the URL address that serves as a unique identifier of the service.
         * The list of supported slugs includes past service names for backwards compatibility, and a custom slug if one was set by the business owner.
         * @readonly
         */
        supportedSlugs?: Slug[];
        /**
         * The main slug for the service. `mainSlug` is either taken from the current service name or is a custom slug set by the business owner.
         * `mainSlug` is used to construct the service's URLs.
         * @readonly
         */
        mainSlug?: Slug;
        /**
         * URLs to various service-related pages, such as the calendar page and the booking page.
         * @readonly
         */
        urls?: URLs;
        /**
         * Extensions enabling users to save custom data related to the service.
         * @readonly
         */
        extendedFields?: ExtendedFields$3;
        /** Custom SEO data for the service. */
        seoData?: SeoSchema;
        /**
         * Date and time the service was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the service was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * Revision number, which increments by 1 each time the service is updated. To prevent conflicting changes, the existing revision must be used when updating a service.
         * @readonly
         */
        revision?: string | null;
    }
    enum ServiceType {
        UNKNOWN_SERVICE_TYPE = "UNKNOWN_SERVICE_TYPE",
        /** Service is an appointment. */
        APPOINTMENT = "APPOINTMENT",
        /** Service is a class. */
        CLASS = "CLASS",
        /** Service is a course. */
        COURSE = "COURSE"
    }
    interface Media {
        /** Media items associated with the service. */
        items?: MediaItem$1[];
        /** Primary media associated with the service. */
        mainMedia?: MediaItem$1;
        /** Cover media associated with the service. */
        coverMedia?: MediaItem$1;
    }
    interface MediaItem$1 extends MediaItemItemOneOf {
        /** The image's Wix media URL in the following format: `'wix:image://v1/<uri>/<filename>#originWidth=<width>&originHeight=<height>[&watermark=<watermark_manifest_string>]'`. */
        image?: string;
    }
    /** @oneof */
    interface MediaItemItemOneOf {
        /** The image's Wix media URL in the following format: `'wix:image://v1/<uri>/<filename>#originWidth=<width>&originHeight=<height>[&watermark=<watermark_manifest_string>]'`. */
        image?: string;
    }
    interface V2Category {
        /** Category ID. */
        _id?: string;
        /**
         * Category name.
         * @readonly
         */
        name?: string | null;
        /**
         * Order of a category within a category list.
         * @readonly
         */
        sortOrder?: number | null;
    }
    interface Form {
        /**
         * ID of the form associated with the service.
         * Form information submitted when booking, including contact details, participants, and other form fields, set up for the service.
         */
        _id?: string;
    }
    interface FormSettings {
        /** Whether the service booking form should be hidden from the site. */
        hidden?: boolean | null;
    }
    interface Payment extends PaymentRateOneOf {
        /**
         * The details for the fixed price of the service.
         *
         * Required when: `rateType` is `FIXED`
         */
        fixed?: FixedPayment;
        /**
         * The details for the custom price of the service.
         *
         * Required when: `rateType` is `CUSTOM`
         */
        custom?: CustomPayment;
        /**
         * The details for the varied pricing of the service.
         * Read more about [varied price options](https://support.wix.com/en/article/wix-bookings-about-getting-paid-online#offering-varied-price-options).
         *
         * Required when: `rateType` is `VARIED`
         */
        varied?: VariedPayment;
        /**
         * The rate the customer is expected to pay for the service.
         * Can be:
         * - `FIXED`: The service has a fixed price.
         * - `CUSTOM`: The service has a custom price, expressed as a price description.
         * - `VARIED`: This service is offered with a set of different prices based on different terms.
         * - `NO_FEE`: This service is offered free of charge.
         */
        rateType?: RateType;
        /** The payment options a customer can use to pay for the service. */
        options?: PaymentOptions;
        /**
         * IDs of pricing plans that can be used as payment for the service.
         * @readonly
         */
        pricingPlanIds?: string[];
    }
    /** @oneof */
    interface PaymentRateOneOf {
        /**
         * The details for the fixed price of the service.
         *
         * Required when: `rateType` is `FIXED`
         */
        fixed?: FixedPayment;
        /**
         * The details for the custom price of the service.
         *
         * Required when: `rateType` is `CUSTOM`
         */
        custom?: CustomPayment;
        /**
         * The details for the varied pricing of the service.
         * Read more about [varied price options](https://support.wix.com/en/article/wix-bookings-about-getting-paid-online#offering-varied-price-options).
         *
         * Required when: `rateType` is `VARIED`
         */
        varied?: VariedPayment;
    }
    enum RateType {
        UNKNOWN_RATE_TYPE = "UNKNOWN_RATE_TYPE",
        /** The service has a fixed price. */
        FIXED = "FIXED",
        /** The service has a custom price, expressed as a price description. */
        CUSTOM = "CUSTOM",
        /** This service is offered with a set of different prices based on different terms. */
        VARIED = "VARIED",
        /** This service is offered free of charge. */
        NO_FEE = "NO_FEE"
    }
    interface FixedPayment {
        /**
         * The fixed price required to book the service.
         *
         * Required when: `rateType` is `FIXED`
         */
        price?: Money;
        /**
         * The deposit price required to book the service.
         *
         * Required when: `rateType` is `FIXED` and `paymentOptions.deposit` is `true`
         */
        deposit?: Money;
    }
    /**
     * Money.
     * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
     */
    interface Money {
        /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
        value?: string;
        /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
        currency?: string;
        /** Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative. */
        formattedValue?: string | null;
    }
    interface CustomPayment {
        /** A custom description explaining to the customer how to pay for the service. */
        description?: string | null;
    }
    interface VariedPayment {
        /** The default price for the service without any variants. It will also be used as the default price for any new variant. */
        defaultPrice?: Money;
        /**
         * The deposit price required to book the service.
         *
         * Required when: `rateType` is `VARIED` and `paymentOptions.deposit` is `true`
         */
        deposit?: Money;
        /**
         * The minimal price a customer may pay for this service, based on its variants.
         * @readonly
         */
        minPrice?: Money;
        /**
         * The maximum price a customer may pay for this service, based on its variants.
         * @readonly
         */
        maxPrice?: Money;
    }
    interface PaymentOptions {
        /**
         * Customers can pay for the service online.
         * When `true`:
         * + `rateType` must be either `FIXED` or `VARIED`.
         * + `fixed.price` or `varied.default_price` must be specified respectively. Read more about [getting paid online](https://support.wix.com/en/article/wix-bookings-about-getting-paid-online).
         */
        online?: boolean | null;
        /** Customers can pay for the service in person. */
        inPerson?: boolean | null;
        /**
         * This service requires a deposit to be made online in order to book it.
         * When `true`:
         * + `rateType` must be `VARIED` or `FIXED`.
         * + A `deposit` must be specified.
         */
        deposit?: boolean | null;
        /** Customers can pay for the service using a pricing plan. */
        pricingPlan?: boolean | null;
    }
    interface OnlineBooking {
        /**
         * Whether this service can be booked online.
         * When set to `true`, customers can book the service online. Configuring the payment options is done via `service.payment` property.
         * When set to `false`, customers cannot book the service online, and the service can only be paid for in person.
         */
        enabled?: boolean | null;
        /** Booking the service requires approval by the business owner. */
        requireManualApproval?: boolean | null;
        /** Multiple customers can request to book the same time slot. Relevant when `requireManualApproval` is `true`. */
        allowMultipleRequests?: boolean | null;
    }
    interface Conferencing {
        /** Whether a conference link is generated for the service's sessions. */
        enabled?: boolean | null;
    }
    interface Location$3 extends LocationOptionsOneOf {
        /** The service is offered at the referenced business location, the location has to reference a location from the Business Info [Locations API](https://dev.wix.com/api/rest/business-info/locations). */
        business?: BusinessLocationOptions;
        /** The service is offered at a custom location. */
        custom?: CustomLocationOptions;
        /**
         * The type of location:
         * - `CUSTOM`: The location is specific to this service, and is not derived from the business location.
         * - `BUSINESS`: A business location, as defined for the by the Business Info [Locations API](https://www.wix.com/velo/reference/wix-business-tools-v2/locations).
         * - `CUSTOMER`: Will be determined by the customer. For appointments only.
         */
        type?: LocationType$3;
        /**
         * The location address, based on the location `type`. If `type` is `CUSTOMER`, this address is empty.
         * @readonly
         */
        calculatedAddress?: Address$3;
    }
    /** @oneof */
    interface LocationOptionsOneOf {
        /** The service is offered at the referenced business location, the location has to reference a location from the Business Info [Locations API](https://dev.wix.com/api/rest/business-info/locations). */
        business?: BusinessLocationOptions;
        /** The service is offered at a custom location. */
        custom?: CustomLocationOptions;
    }
    enum LocationType$3 {
        UNKNOWN_LOCATION_TYPE = "UNKNOWN_LOCATION_TYPE",
        /** The location is unique to this service and isn't defined as one of the business locations. `CUSTOM` is the equivalent of the `OWNER_CUSTOM` location type in [Schedules & Sessions API](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions). */
        CUSTOM = "CUSTOM",
        /** The location is one of the business locations available using the Business Info [Locations API](https://dev.wix.com/api/rest/business-info/locations). */
        BUSINESS = "BUSINESS",
        /** The location can be determined by the customer and is not set up beforehand. This is applicable to services of type `APPOINTMENT` only. */
        CUSTOMER = "CUSTOMER"
    }
    interface Address$3 extends AddressStreetOneOf$3 {
        /** Street name and number. */
        streetAddress?: StreetAddress$3;
        /** Main address line, usually street and number as free text. */
        addressLine1?: string | null;
        /** 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
        country?: string | null;
        /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /** Full address of the location. */
        formatted?: string | null;
    }
    /** @oneof */
    interface AddressStreetOneOf$3 {
        /** Street name and number. */
        streetAddress?: StreetAddress$3;
        /** Main address line, usually street and number as free text. */
        addressLine?: string | null;
    }
    /** Street address. Includes street name, number, and apartment number in separate fields. */
    interface StreetAddress$3 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /** Apartment number. */
        apt?: string;
    }
    interface AddressLocation$3 {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface BusinessLocationOptions {
        /** Business location ID. */
        _id?: string;
        /**
         * Business location name.
         * @readonly
         */
        name?: string;
        /**
         * Whether this is the default location. There can only be 1 default location per site. The default location can't be archived.
         * @readonly
         */
        default?: boolean | null;
        /**
         * Business location address. The address is derived from the business location and is read-only.
         * @readonly
         */
        address?: Address$3;
    }
    interface CustomLocationOptions {
        /** A custom address for the location. */
        address?: Address$3;
    }
    /**
     * `BookingPolicy` is the main entity of `BookingPolicyService` and specifies a set of rules for booking a service
     * by visitors and members.
     *
     * Each `BookingPolicy` consists of a number of sub-policies. When the Bookings App is provisioned to a meta site then a
     * default `BookingPolicy` will be created with defaults for each of these sub-policies. This also applies when a request
     * is received to create a new `BookingPolicy` and one or more of these sub-policies are not provided.
     *
     * Sub-policies are defined in separate objects as specified below.
     *
     * - The `LimitEarlyBookingPolicy` object defines the policy for limiting early bookings.
     * - The `LimitLateBookingPolicy` object defines the policy for limiting late bookings.
     * - The `BookAfterStartPolicy` object defines the policy for booking after the start of the schedule.
     * - The `CancellationPolicy` object defines the policy for canceling a booked entity.
     * - The `ReschedulePolicy` object defines the policy for rescheduling booked entity.
     * - The `WaitlistPolicy` object defines the policy for a waitlist.
     * - The `ParticipantsPolicy` object defines the policy regarding the participants per booking.
     * - The `ResourcesPolicy` object defines the policy regarding the resources per booking.
     *
     * By default each sub-policy is disabled. A more detailed specification of the default settings of each sub-policy
     * can be found in the description of the corresponding object.
     *
     * Partial updates are supported on the main entity level, however in order to update a sub-policy the client needs to provide the whole sub-policy object.
     */
    interface BookingPolicy {
        /** The ID to the policy for the booking. */
        _id?: string;
        /**
         * Date and time the policy was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the policy was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * Name of the policy.
         * @readonly
         */
        name?: string | null;
        /**
         * Custom description for the policy. This policy is displayed to the participant.
         * @readonly
         */
        customPolicyDescription?: PolicyDescription;
        /**
         * Whether the policy is the default for the meta site.
         * @readonly
         */
        default?: boolean | null;
        /**
         * Policy for limiting early bookings.
         * @readonly
         */
        limitEarlyBookingPolicy?: LimitEarlyBookingPolicy;
        /**
         * Policy for limiting late bookings.
         * @readonly
         */
        limitLateBookingPolicy?: LimitLateBookingPolicy;
        /**
         * Policy on booking an entity after the start of the schedule.
         * @readonly
         */
        bookAfterStartPolicy?: BookAfterStartPolicy;
        /**
         * Policy for canceling a booked entity.
         * @readonly
         */
        cancellationPolicy?: CancellationPolicy;
        /**
         * Policy for rescheduling a booked entity.
         * @readonly
         */
        reschedulePolicy?: ReschedulePolicy;
        /**
         * Waitlist policy for the service.
         * @readonly
         */
        waitlistPolicy?: WaitlistPolicy;
        /**
         * Policy regarding the participants per booking.
         * @readonly
         */
        participantsPolicy?: ParticipantsPolicy;
        /**
         * Policy for allocating resources.
         * @readonly
         */
        resourcesPolicy?: ResourcesPolicy;
    }
    /** A description of the policy to display to participants. */
    interface PolicyDescription {
        /**
         * Whether the description should be displayed. If `true`, the description is displayed.
         *
         * Default: `false`
         */
        enabled?: boolean;
        /**
         * The description to display.
         *
         * Default: Empty
         * Max length: 2500 characters
         */
        description?: string;
    }
    /** The policy for limiting early bookings. */
    interface LimitEarlyBookingPolicy {
        /**
         * Whether there is a limit on how early a customer
         * can book. When `false`, there is no limit on the earliest
         * booking time and customers can book in advance, as early as they like.
         *
         * Default: `false`
         */
        enabled?: boolean;
        /**
         * Maximum number of minutes before the start of the session that a booking can be made. This value must be greater
         * than `latest_booking_in_minutes` in the `LimitLateBookingPolicy` policy.
         *
         * Default: 10080 minutes (7 days)
         * Min: 1 minute
         */
        earliestBookingInMinutes?: number;
    }
    /**
     * The policy for limiting late bookings.
     *
     * This policy and the `BookAfterStartPolicy` policy cannot be enabled at the same time. So if this policy
     * is enabled, `BookAfterStartPolicy` must be disabled.
     */
    interface LimitLateBookingPolicy {
        /**
         * Whether there is a limit on how late a customer
         * can book. When `false`, there is no limit on the latest
         * booking time and customers can book up to the last minute.
         *
         * Default: `false`
         */
        enabled?: boolean;
        /**
         * Minimum number of minutes before the start of the session that a booking can be made.
         * For a schedule, this is relative to the start time of the next booked session, excluding past-booked sessions.
         * This value must be less than `earliest_booking_in_minutes` in the `LimitEarlyBookingPolicy` policy.
         *
         * Default: 1440 minutes (1 day)
         * Min: 1 minute
         */
        latestBookingInMinutes?: number;
    }
    /**
     * The policy for whether a session can be booked after the start of the schedule.
     * This policy and `LimitLateBookingPolicy` cannot be enabled at the same time. So if this policy
     * is enabled, the `LimitLateBookingPolicy` policy must be disabled.
     */
    interface BookAfterStartPolicy {
        /**
         * Whether booking is allowed after the start of the schedule. When `true`,
         * customers can book after the start of the schedule.
         *
         * Default: `false`
         */
        enabled?: boolean;
    }
    /** The policy for canceling a booked session. */
    interface CancellationPolicy {
        /**
         * Whether canceling a booking is allowed. When `true`, customers
         * can cancel the booking.
         *
         * Default: `false`
         */
        enabled?: boolean;
        /**
         * Whether there is a limit on the latest cancellation time. When `true`,
         * a time limit is enforced.
         *
         * Default: `false`
         */
        limitLatestCancellation?: boolean;
        /**
         * Minimum number of minutes before the start of the booked session that the booking can be canceled.
         *
         * Default: 1440 minutes (1 day)
         * Min: 1 minute
         */
        latestCancellationInMinutes?: number;
    }
    /** The policy for rescheduling a booked session. */
    interface ReschedulePolicy {
        /**
         * Whether rescheduling a booking is allowed. When `true`, customers
         * can reschedule the booking.
         *
         * Default: `false`
         */
        enabled?: boolean;
        /**
         * Whether there is a limit on the latest reschedule time. When `true`,
         * a time limit is enforced.
         *
         * Default: `false`
         */
        limitLatestReschedule?: boolean;
        /**
         * Minimum number of minutes before the start of the booked session that the booking can be rescheduled.
         *
         * Default: 1440 minutes (1 day)
         * Min: 1 minute
         */
        latestRescheduleInMinutes?: number;
    }
    /** The policy for the waitlist. */
    interface WaitlistPolicy {
        /**
         * Whether the session has a waitlist. If `true`, there is a waitlist.
         *
         * Default: `false`
         */
        enabled?: boolean;
        /**
         * Number of spots available in the waitlist.
         *
         * Default: 10 spots
         * Min: 1 spot
         */
        capacity?: number;
        /**
         * Amount of time a participant is given to book, once notified that a spot is available.
         *
         * Default: 10 minutes
         * Min: 1 spot
         */
        reservationTimeInMinutes?: number;
    }
    /** The policy for the maximum number of participants per booking. */
    interface ParticipantsPolicy {
        /**
         * Maximum number of participants allowed.
         *
         * Default: 1 participant
         * Min: 1 participant
         */
        maxParticipantsPerBooking?: number;
    }
    /** The policy regarding the allocation of resources (e.g. staff members). */
    interface ResourcesPolicy {
        /**
         * `true` if this policy is enabled, `false` otherwise.
         * When `false` then the client must always select a resource when booking an appointment.
         */
        enabled?: boolean;
        /**
         * `true`, if it is allowed to automatically assign a resource when booking an appointment,
         * `false`, if the client must always select a resource.
         *
         * Default: `false`
         */
        autoAssignAllowed?: boolean;
    }
    interface Schedule$1 {
        /**
         * Schedule ID, used to manage the service's sessions.
         * @readonly
         */
        _id?: string | null;
        /** Limitations dictating the way session availability is calculated. For appointments only. */
        availabilityConstraints?: AvailabilityConstraints$1;
    }
    interface AvailabilityConstraints$1 {
        /**
         * A list of duration options for sessions, in minutes.
         *
         * The availability calculation generates slots for sessions with these durations, unless there is a conflict with existing sessions or other availability constraints exist.
         * Required for services of type `APPOINTMENT` to allow the customer to book a session of the service. Not relevant for other service types.
         *
         *
         * Min: 1 minute, Max: 30 days, 23 hours, and 59 minutes
         */
        sessionDurations?: number[];
        /**
         * The number of minutes between the end of a session and the start of the next.
         *
         *
         * Min: 0 minutes
         * Max: 720 minutes
         */
        timeBetweenSessions?: number;
    }
    interface StaffMember$1 {
        /**
         * ID of the staff member providing the service, can be used to retrieve resource information using wix-bookings-backend resources API.
         * @readonly
         */
        staffMemberId?: string;
        /** Name of the staff member */
        name?: string | null;
    }
    interface ResourceGroup {
        /**
         * An optional resource group id, if provided it references a resource group in the resource groups API.
         * TODO - referenced_entity annotation
         */
        resourceGroupId?: string | null;
        /**
         * Resource ids, each referencing a resource in resources API. may be a subset of resources within a resource group.
         * TODO - referenced_entity annotation
         */
        resourceIds?: ResourceIds;
        /**
         * How many resources of the group / resource ids are required in order to book the service.
         * Defaults to 1.
         */
        requiredResourcesNumber?: number | null;
        /**
         * If set to `true`, the custom can select the specific resources while booking the service.
         * If set to `false`, the resources required for to book the service would be auto selected at the time of the booking.
         * Defaults to false.
         * @readonly
         */
        selectableResource?: boolean | null;
    }
    interface ResourceIds {
        /** Values of the resource ids. TODO - referenced_entity annotation */
        values?: string[];
    }
    interface ServiceResource extends ServiceResourceSelectionOneOf {
        /** Resource ids, each referencing a resource in resources API. Must be a subset of resources within the selected resource type. */
        resourceIds?: ResourceIds;
        /** The unique identifier for the service resource, if not provided, would default to the resource type id. */
        _id?: string | null;
        resourceType?: ResourceType;
        /**
         * How many resources of the are required in order to book the service.
         * Defaults to 1.
         */
        requiredResourcesNumber?: number | null;
        /**
         * If set to `true`, the customer can select the specific resources while booking the service.
         * If set to `false`, the resources required for to book the service would be auto selected at the time of the booking.
         * Defaults to false.
         * @readonly
         */
        selectableResource?: boolean | null;
    }
    /** @oneof */
    interface ServiceResourceSelectionOneOf {
        /** Resource ids, each referencing a resource in resources API. Must be a subset of resources within the selected resource type. */
        resourceIds?: ResourceIds;
    }
    interface ResourceType {
        /** The type of the resource. */
        _id?: string | null;
        /**
         * The name of the resource type.
         * @readonly
         */
        name?: string | null;
    }
    interface Slug {
        /** The unique part of service's URL that identifies the service's information page. For example, `service-1` in `https:/example.com/services/service-1`. */
        name?: string;
        /**
         * Whether the slug was generated or customized. If `true`, the slug was customized manually by the business owner. Otherwise, the slug was automatically generated from the service name.
         * @readonly
         */
        custom?: boolean | null;
        /**
         * Date and time the slug was created. This is a system field.
         * @readonly
         */
        _createdDate?: Date;
    }
    interface URLs {
        /**
         * The URL for the service page.
         * @readonly
         */
        servicePage?: string;
        /**
         * The URL for the booking entry point. It can be either to the calendar or to the service page.
         * @readonly
         */
        bookingPage?: string;
        /**
         * The URL for the calendar. Can be empty if no calendar exists.
         * @readonly
         */
        calendarPage?: string;
    }
    interface ExtendedFields$3 {
        /**
         * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
         * The value of each key is structured according to the schema defined when the extended fields were configured.
         *
         * You can only access fields for which you have the appropriate permissions.
         *
         * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
         */
        namespaces?: Record<string, Record<string, any>>;
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
    /**
     * Message for reindexing search data to a given search schema. Support both upsert and delete flows as well as
     * performs context manipulation with adding tenant, provided in message to callscope.
     */
    interface ReindexMessage extends ReindexMessageActionOneOf {
        upsert?: Upsert;
        delete?: Delete;
        entityFqdn?: string;
        tenantId?: string;
        eventTime?: Date;
        entityEventSequence?: string | null;
        schema?: Schema;
    }
    /** @oneof */
    interface ReindexMessageActionOneOf {
        upsert?: Upsert;
        delete?: Delete;
    }
    interface Upsert {
        entityId?: string;
        entityAsJson?: string;
    }
    interface Delete {
        entityId?: string;
    }
    interface Schema {
        label?: string;
        clusterName?: string;
    }
    interface SetCustomSlugEvent {
        /** The main slug for the service after the update */
        mainSlug?: Slug;
    }
    interface CreateServiceRequest {
        /** Service to be created. */
        service: Service;
    }
    interface CreateServiceResponse {
        /** The created service. */
        service?: Service;
    }
    interface BulkCreateServicesRequest {
        /** Services to create */
        services: Service[];
        /** `true` if the created entities must be included in the response, otherwise no entities are included in the response. */
        returnEntity?: boolean;
    }
    interface BulkCreateServicesResponse {
        /** The result of each service creation. */
        results?: BulkServiceResult[];
        /** Create statistics. */
        bulkActionMetadata?: BulkActionMetadata$2;
    }
    interface BulkServiceResult {
        itemMetadata?: ItemMetadata$2;
        item?: Service;
    }
    interface ItemMetadata$2 {
        /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
        _id?: string | null;
        /** Index of the item within the request array. Allows for correlation between request and response items. */
        originalIndex?: number;
        /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
        success?: boolean;
        /** Details about the error in case of failure. */
        error?: ApplicationError$2;
    }
    interface ApplicationError$2 {
        /** Error code. */
        code?: string;
        /** Description of the error. */
        description?: string;
        /** Data related to the error. */
        data?: Record<string, any> | null;
    }
    interface BulkActionMetadata$2 {
        /** Number of items that were successfully processed. */
        totalSuccesses?: number;
        /** Number of items that couldn't be processed. */
        totalFailures?: number;
        /** Number of failures without details because detailed failure threshold was exceeded. */
        undetailedFailures?: number;
    }
    interface GetServiceRequest {
        /** ID of the service to retrieve. */
        serviceId: string;
    }
    enum RequestedFields$1 {
        UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
        /** When passed, `service.staff_members` is returned */
        STAFF_MEMBER_DETAILS = "STAFF_MEMBER_DETAILS",
        /** When passed, `service.service_resources.resource_type.name` is returned */
        RESOURCE_TYPE_DETAILS = "RESOURCE_TYPE_DETAILS"
    }
    interface GetServiceResponse {
        /** The retrieved service. */
        service?: Service;
    }
    interface GetServiceAvailabilityConstraintsRequest {
        /** ID of the service to retrieve. */
        serviceId: string;
    }
    interface GetServiceAvailabilityConstraintsResponse {
        /** The retrieved availability constraints of the service. */
        constraints?: ServiceAvailabilityConstraints;
    }
    interface ServiceAvailabilityConstraints {
        /**
         * The booking policy.
         * @readonly
         */
        bookingPolicy?: BookingPolicy;
        /**
         * The service schedule, including the schedule id and availability constraints.
         * @readonly
         */
        schedule?: Schedule$1;
        /**
         * The locations this service is offered at.
         * Only multiple locations of type `BUSINESS` are supported. multiple locations of type `CUSTOM` or `CUSTOMER` are not supported.
         * For courses only: Currently, only 1 location is supported, for all location types.
         * Use `setServiceLocations` method to change the locations this service is offered at.
         * @readonly
         */
        locations?: Location$3[];
        /** @readonly */
        resourceGroups?: ResourceGroup[];
        /**
         * Resource groups required to book the service
         * @readonly
         */
        serviceResources?: ServiceResource[];
        /**
         * The time between available slots' start times.
         * For example, For 5 minute slots, 3:00, 3:05, 3:15 etc. For 1 hour slots, 3:00, 4:00, 5:00 etc.
         * Is applied to all schedules of the site.
         * For appointment only.
         * @readonly
         */
        slotsSplitInterval?: V1SplitInterval;
        /**
         * Online booking settings.
         * @readonly
         */
        onlineBooking?: OnlineBooking;
    }
    /** The time between available slots' start times. For example, For 5 minute slots, 3:00, 3:05, 3:15 etc. For 1 hour slots, 3:00, 4:00, 5:00 etc. */
    interface V1SplitInterval {
        /**
         * Whether the slot duration is used as the split interval value.
         * If `same_as_duration` is `true`, the `value_in_minutes` is the sum of the first duration in
         * `schedule.availabilityConstraints.SlotDurations` field, and `schedule.availabilityConstraints.TimeBetweenSlots` field.
         */
        sameAsDuration?: boolean | null;
        /** Number of minutes between available slots' start times when `same_as_duration` is `false`. */
        valueInMinutes?: number | null;
    }
    interface UpdateServiceRequest {
        /** Service to update. [Partial updates](https://dev.wix.com/api/rest/wix-bookings/bookings/patch-endpoints-and-field-masks-in-update-requests) are supported. */
        service: Service;
    }
    interface UpdateServiceResponse {
        /** The updated service. */
        service?: Service;
    }
    interface BulkUpdateServicesRequest {
        /** Services to update. */
        services?: MaskedService[];
        /** `true` if the updated entities must be included in the response, otherwise no entities are included in the response. */
        returnEntity?: boolean;
    }
    interface MaskedService {
        /** Service to update. [Partial updates](https://dev.wix.com/api/rest/wix-bookings/bookings/patch-endpoints-and-field-masks-in-update-requests) are supported. */
        service?: Service;
    }
    interface BulkUpdateServicesResponse {
        /** The result of each service update. */
        results?: BulkServiceResult[];
        /** Update statistics. */
        bulkActionMetadata?: BulkActionMetadata$2;
    }
    interface DeleteServiceRequest {
        /** ID of the service to delete. */
        serviceId: string;
        /**
         * Whether to preserve future sessions with participants.
         *
         * Default: `false`
         */
        preserveFutureSessionsWithParticipants?: boolean;
        /** Whether to notify participants about the change and an optional custom message. */
        participantNotification?: ParticipantNotification$3;
    }
    interface ParticipantNotification$3 {
        /**
         * Whether to send the message about the changes to the customer.
         *
         * Default: `false`
         */
        notifyParticipants?: boolean | null;
        /** Custom message to send to the participants about the changes to the booking. */
        message?: string | null;
    }
    interface DeleteServiceResponse {
    }
    interface BulkDeleteServicesRequest {
        ids: string[];
        preserveFutureSessionsWithParticipants?: boolean;
        /**
         * Whether to preserve future sessions with participants.
         *
         * Default: `false`.
         */
        participantNotification?: ParticipantNotification$3;
    }
    interface BulkDeleteServicesResponse {
        /** The result of each service removal. */
        results?: BulkServiceResult[];
        /** Update statistics. */
        bulkActionMetadata?: BulkActionMetadata$2;
    }
    interface QueryServicesRequest {
        /** WQL expression. */
        query: QueryV2$2;
    }
    interface QueryV2$2 extends QueryV2PagingMethodOneOf$2 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$2;
        /**
         * Filter object in the following format:
         *
         * `"filter" : {
         * "fieldName1": "value1",
         * "fieldName2":{"$operator":"value2"}
         * }`
         *
         * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`
         *
         * Read more about [supported fields and operators](https://dev.wix.com/api/rest/wix-bookings/services-v2/filtering-and-sorting).
         */
        filter?: Record<string, any> | null;
        /**
         * Sort object in the following format:
         * `[ {"fieldName":"sortField1","order":"ASC"},
         * {"fieldName":"sortField2","order":"DESC"} ]`
         *
         * Read more about [sorting](https://dev.wix.com/api/rest/wix-bookings/services-v2/filtering-and-sorting#wix-bookings_services-v2_filtering-and-sorting_sorting).
         */
        sort?: Sorting$3[];
    }
    /** @oneof */
    interface QueryV2PagingMethodOneOf$2 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$2;
    }
    interface Sorting$3 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$3;
    }
    enum SortOrder$3 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$2 {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface CursorPaging$3 {
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
    interface QueryServicesResponse {
        /** The retrieved services. */
        services?: Service[];
        /** Paging metadata, including offset and count. */
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
        cursors?: Cursors$3;
    }
    interface Cursors$3 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface SearchServicesRequest {
        search: CursorSearch;
    }
    interface CursorSearch extends CursorSearchPagingMethodOneOf {
        /** Cursor pointing to page of results. Can't be used together with 'paging'. 'cursor_paging.cursor' can not be used together with 'filter' or 'sort' */
        cursorPaging?: CursorPaging$3;
        /** A filter object. See documentation [here](https:// bo.wix.com/wix-docs/rnd/platformization-guidelines/api-query-language#platformization-guidelines_api-query-language_defining-in-protobuf) */
        filter?: Record<string, any> | null;
        /** Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}] */
        sort?: Sorting$3[];
        /** Aggregations | Faceted search: refers to a way to explore large amounts of data by displaying summaries about various partitions of the data and later allowing to narrow the navigation to a specific partition. */
        aggregations?: Aggregation[];
        /** Free text to match in searchable fields */
        search?: SearchDetails;
    }
    /** @oneof */
    interface CursorSearchPagingMethodOneOf {
        /** Cursor pointing to page of results. Can't be used together with 'paging'. 'cursor_paging.cursor' can not be used together with 'filter' or 'sort' */
        cursorPaging?: CursorPaging$3;
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
        /** Range buckets */
        buckets?: RangeBucket[];
    }
    interface ScalarAggregation {
        type?: ScalarType;
    }
    interface DateHistogramAggregation {
        interval?: DateHistogramAggregationInterval;
    }
    enum DateHistogramAggregationInterval {
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
    /** nested aggregation expressed through a list of aggregation where each next aggregation is nested within previous one */
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
        /** Boolean search mode */
        mode?: Mode;
        /** Search term or expression */
        expression?: string | null;
        /** Fields to search in. If empty - server will search in own default fields */
        fields?: string[];
        /** Flag if should use auto fuzzy search (allowing typos by a managed proximity algorithm) */
        fuzzy?: boolean;
    }
    enum Mode {
        /** Any */
        OR = "OR",
        /** All */
        AND = "AND"
    }
    interface SearchServicesResponse {
        /** The retrieved services. */
        services?: Service[];
        /** Cursor paging metadata */
        pagingMetadata?: CursorPagingMetadata$2;
        /** Response aggregation data */
        aggregationData?: AggregationData;
    }
    interface CursorPagingMetadata$2 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Use these cursor to paginate between results. [Read more](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_cursor-paging). */
        cursors?: Cursors$3;
        /**
         * Indicates if there are more results after the current page.
         * If `true`, another page of results can be retrieved.
         * If `false`, this is the last page.
         */
        hasNext?: boolean | null;
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
    /**
     * results of `NESTED` aggregation type in a flattened form
     * aggregations in resulting array are keyed by requested aggregation `name`.
     */
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
    interface QueryPoliciesRequest {
        /** WQL expression. */
        query: CursorQuery$1;
    }
    interface CursorQuery$1 extends CursorQueryPagingMethodOneOf$1 {
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$3;
        /**
         * Filter object in the following format:
         * `"filter" : {
         * "fieldName1": "value1",
         * "fieldName2":{"$operator":"value2"}
         * }`
         * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`
         */
        filter?: Record<string, any> | null;
        /**
         * Sort object in the following format:
         * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
         */
        sort?: Sorting$3[];
    }
    /** @oneof */
    interface CursorQueryPagingMethodOneOf$1 {
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$3;
    }
    interface QueryPoliciesResponse {
        /** The retrieved policies. */
        bookingPolicies?: BookingPolicyWithServices[];
        /** Paging metadata, including offset and count. */
        pagingMetadata?: CursorPagingMetadata$2;
    }
    interface BookingPolicyWithServices {
        /** The booking policy. */
        bookingPolicy?: BookingPolicy;
        /** The services associated with the booking policy. Up to 5 services are returned per policy. */
        services?: Service[];
        /** Whether there are more services associated with the booking policy. */
        hasMoreServices?: boolean | null;
        /** The number of services associated with the booking policy. */
        countOfServices?: number;
    }
    interface CountServicesRequest {
        /** The filters for performing the count. */
        filter?: Record<string, any> | null;
    }
    interface CountServicesResponse {
        /** The number of services matching the given filter. */
        count?: number;
    }
    /** An event sent every time a category entity is changed. */
    interface CategoryNotification {
        category?: Category;
        event?: Event;
    }
    /** Categories are used to group multiple services together. A service must be associated with a category in order to be exposed in the Wix Bookings UI. */
    interface Category {
        /**
         * Category ID.
         * @readonly
         */
        _id?: string | null;
        /** Category name. */
        name?: string | null;
        /**
         * Category status.
         * Supported values:
         * - "CREATED". The category is created.
         * - "DELETED". The category is deleted.
         * Default: "CREATED"
         * @readonly
         */
        status?: Status$1;
        /** Sort order of the category in the Dashboard. */
        sortOrder?: number | null;
    }
    enum Status$1 {
        /** Default status. */
        CREATED = "CREATED",
        /** Category is deleted. */
        DELETED = "DELETED"
    }
    enum Event {
        Updated = "Updated",
        Deleted = "Deleted",
        Created = "Created"
    }
    interface Empty$1 {
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
    }
    interface EntityUpdatedEvent$3 {
        /**
         * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
         * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
         * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
         */
        currentEntityAsJson?: string;
    }
    interface EntityDeletedEvent$3 {
        /** Entity that was deleted */
        deletedEntityAsJson?: string | null;
    }
    interface ActionEvent$3 {
        bodyAsJson?: string;
    }
    interface ScheduleNotification$1 extends ScheduleNotificationEventOneOf$1 {
        scheduleCreated?: ScheduleCreated$1;
        scheduleUpdated?: ScheduleUpdated$1;
        scheduleCancelled?: ScheduleCancelled$1;
        sessionCreated?: SessionCreated$1;
        sessionUpdated?: SessionUpdated$1;
        sessionCancelled?: SessionCancelled$1;
        availabilityPolicyUpdated?: AvailabilityPolicyUpdated$1;
        intervalSplit?: IntervalSplit$1;
        recurringSessionSplit?: RecurringSessionSplit$1;
        /** Inspect `schedule.scheduleOwnerUserId` on `scheduleUpdated` instead. */
        scheduleUnassignedFromUser?: ScheduleUnassignedFromUser$1;
        preserveFutureSessionsWithParticipants?: boolean | null;
        /** Whether to notify participants about changed sessions. deprecated, use participant_notification */
        notifyParticipants?: boolean;
        /** site properties. Optional. Given in create schedule notification. */
        siteProperties?: SitePropertiesOnScheduleCreation$1;
        instanceId?: string;
    }
    /** @oneof */
    interface ScheduleNotificationEventOneOf$1 {
        scheduleCreated?: ScheduleCreated$1;
        scheduleUpdated?: ScheduleUpdated$1;
        scheduleCancelled?: ScheduleCancelled$1;
        sessionCreated?: SessionCreated$1;
        sessionUpdated?: SessionUpdated$1;
        sessionCancelled?: SessionCancelled$1;
        availabilityPolicyUpdated?: AvailabilityPolicyUpdated$1;
        intervalSplit?: IntervalSplit$1;
        recurringSessionSplit?: RecurringSessionSplit$1;
        /** Inspect `schedule.scheduleOwnerUserId` on `scheduleUpdated` instead. */
        scheduleUnassignedFromUser?: ScheduleUnassignedFromUser$1;
    }
    interface ScheduleCreated$1 {
        schedule?: V1Schedule;
    }
    interface V1Schedule {
        /** Schedule ID. */
        _id?: string;
        /** ID of the schedule's owner entity. This may be a resource ID or a service ID. */
        scheduleOwnerId?: string | null;
        /**
         * Schedule's time zone in [Area/Location](https://en.wikipedia.org/wiki/Tz_database) format. Read-only.
         * Derived from the Wix Business time zone.
         * @readonly
         */
        timeZone?: string | null;
        /** Deprecated. Please use the [Sessions API](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/session) instead. */
        intervals?: RecurringInterval$1[];
        /** Default title for the schedule's sessions. Maximum length: 6000 characters. */
        title?: string | null;
        /**
         * __Deprecated.__
         * Tags for grouping schedules. These tags are the default tags for the schedule's sessions.
         * The Wix Bookings app uses the following predefined tags to set schedule type: `"INDIVIDUAL"`, `"GROUP"`, and `"COURSE"`. Once the schedule type is set using these tags, you cannot update it. In addition to the app's tags, you can create and update your own tags.
         */
        tags?: string[] | null;
        /** Default location for the schedule's sessions. */
        location?: V1Location;
        /**
         * Maximum number of participants that can be added to the schedule's sessions.
         * Must be at most `1` for schedule whose availability is affected by another schedule. E.g, appointment schedules of the Wix Bookings app.
         */
        capacity?: number | null;
        /** Deprecated. Please use the [Booking Services V2](https://dev.wix.com/api/rest/wix-bookings/services-v2) payment instead. */
        rate?: Rate$1;
        /** __Deprecated.__ */
        availability?: Availability$1;
        /**
         * Number of participants registered to sessions in this schedule, calculated as the sum of the party sizes.
         * @readonly
         */
        totalNumberOfParticipants?: number;
        /**
         * *Partial list** of participants which are registered to sessions in this schedule.
         * Participants who are registered in the schedule are automatically registered to any session that is created for the schedule.
         * To retrieve the full list of schedule participants please use the [Query Extended Bookings API](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings).
         * @readonly
         */
        participants?: Participant$1[];
        /** __Deprecated.__ */
        externalCalendarOverrides?: ExternalCalendarOverrides$1;
        /**
         * Schedule status.
         * @readonly
         */
        status?: ScheduleStatus$1;
        /**
         * Schedule creation date.
         * @readonly
         */
        created?: Date;
        /**
         * Schedule last update date.
         * @readonly
         */
        updated?: Date;
        /**
         * Schedule version number, updated each time the schedule is updated.
         * @readonly
         */
        version?: number;
        /**
         * Fields which were inherited from the Business Info page under Settings in the Dashboard.
         * @readonly
         */
        inheritedFields?: string[];
        /** __Deprecated.__ */
        conferenceProvider?: ConferenceProvider$1;
        /**
         * A conference created for the schedule. This is used when a participant is added to a schedule.
         * **Partially deprecated.** Only `hostUrl` and `guestUrl` are to be supported.
         */
        calendarConference?: CalendarConference$1;
    }
    interface RecurringInterval$1 {
        /**
         * The recurring interval identifier.
         * @readonly
         */
        _id?: string;
        /** The start time of the recurring interval. Required. */
        start?: Date;
        /** The end time of the recurring interval. Optional. Empty value indicates that there is no end time. */
        end?: Date;
        /** The interval rules. The day, hour and minutes the interval is recurring. */
        interval?: Interval$1;
        /** The frequency of the interval. Optional. The default is frequency with the default repetition. */
        frequency?: Frequency$1;
        /** Specifies the list of linked schedules and the way this link affects the corresponding schedules' availability. Can be calculated from the schedule or overridden on the recurring interval. */
        affectedSchedules?: LinkedSchedule$1[];
        /**
         * The type of recurring interval.
         * <!--ONLY:VELO
         * One of:
         * - `"UNDEFINED"` The default value. Sessions for this interval will be of type EVENT.
         * - `"EVENT"` A recurring interval of events.
         * - `"WORKING_HOURS"` A recurring interval for availability.
         * <!--END:ONLY:VELO-->
         */
        intervalType?: RecurringIntervalType$1;
    }
    interface Interval$1 {
        /** The day the interval accrue. Optional. The default is the day of the recurring interval's start time. */
        daysOfWeek?: Day$1;
        /** The hour of the day the interval accrue. must be consistent with the Interval start time. Options. The default is 0. minimum: 0, maximum: 23. */
        hourOfDay?: number | null;
        /** The minutes of hour the interval accrue. must be consistent with the Interval end time. Options. The default is 0. minimum: 0, maximum: 59. */
        minuteOfHour?: number | null;
        /** The duration of the interval in minutes. Required. Part of the session end time calculation. */
        duration?: number;
    }
    enum Day$1 {
        /** Undefined. */
        UNDEFINED = "UNDEFINED",
        /** Monday. */
        MON = "MON",
        /** Tuesday. */
        TUE = "TUE",
        /** Wednesday. */
        WED = "WED",
        /** Thursday. */
        THU = "THU",
        /** Friday. */
        FRI = "FRI",
        /** Saturday. */
        SAT = "SAT",
        /** Sunday. */
        SUN = "SUN"
    }
    interface Frequency$1 {
        /** The frequency of the recurrence in weeks. i.e. when this value is 4, the interval occurs every 4 weeks. Optional. The default is 1. minimum: 1, maximum: 52. */
        repetition?: number | null;
    }
    interface LinkedSchedule$1 {
        /** Schedule ID. */
        scheduleId?: string;
        /**
         * Sets this schedule's availability for the duration of the linked schedule's sessions.  Default is `"BUSY"`.
         * <!--ONLY:REST-->
         * If set to `"BUSY"`, this schedule cannot have any available slots during the linked schedule's sessions.
         * If set to `"FREE"`, this schedule can have available slots during the linked schedule's sessions.
         * <!--END:ONLY:REST-->
         *
         * <!--ONLY:VELO
         * One of:
         * - `"FREE"` This schedule can have available slots during the linked schedule's sessions.
         * - `"BUSY"` This schedule cannot have any available slots during the linked schedule's sessions.
         * <!--END:ONLY:VELO-->
         */
        transparency?: Transparency$1;
        /**
         * Owner ID, of the linked schedule.
         * @readonly
         */
        scheduleOwnerId?: string;
    }
    enum Transparency$1 {
        UNDEFINED = "UNDEFINED",
        /** The schedule can have available slots during the session. */
        FREE = "FREE",
        /** The schedule cannot have available slots during the session. Default value. */
        BUSY = "BUSY"
    }
    enum RecurringIntervalType$1 {
        /** The default value. Sessions for this interval will be of type EVENT. */
        UNDEFINED = "UNDEFINED",
        /** A recurring interval of events */
        EVENT = "EVENT",
        /** Deprecated */
        TIME_AVAILABILITY = "TIME_AVAILABILITY",
        /** A recurring interval for availability */
        AVAILABILITY = "AVAILABILITY"
    }
    interface V1Location {
        /**
         * Location type.
         * One of:
         * - `"OWNER_BUSINESS"` The business address as set in the site’s general settings.
         * - `"OWNER_CUSTOM"` The address as set when creating the service.
         * - `"CUSTOM"` The address set for the individual session.
         */
        locationType?: LocationLocationType$1;
        /** Free text address used when locationType is `OWNER_CUSTOM`. */
        address?: string | null;
        /** Custom address, used when locationType is `"OWNER_CUSTOM"`. Might be used when locationType is `"CUSTOM"` in case the owner sets a custom address for the session which is different from the default. */
        customAddress?: CommonAddress;
    }
    enum LocationLocationType$1 {
        UNDEFINED = "UNDEFINED",
        OWNER_BUSINESS = "OWNER_BUSINESS",
        OWNER_CUSTOM = "OWNER_CUSTOM",
        CUSTOM = "CUSTOM"
    }
    /** Physical address */
    interface CommonAddress extends CommonAddressStreetOneOf {
        /** Street name, number and apartment number. */
        streetAddress?: CommonStreetAddress;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
        /** Country code. */
        country?: string | null;
        /** Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Zip/postal code. */
        postalCode?: string | null;
        /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
        addressLine2?: string | null;
        /** A string containing the full address of this location. */
        formattedAddress?: string | null;
        /** Free text to help find the address. */
        hint?: string | null;
        /** Coordinates of the physical address. */
        geocode?: CommonAddressLocation;
        /** Country full name. */
        countryFullname?: string | null;
        /** Multi-level subdivisions from top to bottom. */
        subdivisions?: Subdivision$3[];
    }
    /** @oneof */
    interface CommonAddressStreetOneOf {
        /** Street name, number and apartment number. */
        streetAddress?: CommonStreetAddress;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
    }
    interface CommonStreetAddress {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /** Apartment number. */
        apt?: string;
    }
    interface CommonAddressLocation {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision$3 {
        /** Subdivision code. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        code?: string;
        /** Subdivision full name. */
        name?: string;
    }
    interface LocationsLocation$1 {
        /**
         * Location ID.
         * @readonly
         */
        _id?: string | null;
        /** Location name. */
        name?: string;
        /** Location description. */
        description?: string | null;
        /**
         * Whether this is the default location. There can only be one default location per site. The default location can't be archived.
         * @readonly
         */
        default?: boolean;
        /**
         * Location status. Defaults to `ACTIVE`.
         * __Note:__ [Archiving a location](https://dev.wix.com/api/rest/business-info/locations/archive-location)
         * doesn't affect the location's status. `INACTIVE` is currently not supported.
         */
        status?: LocationStatus$1;
        /**
         * Location type.
         *
         * **Note:** Currently not supported.
         */
        locationType?: LocationsLocationType$1;
        /** Fax number. */
        fax?: string | null;
        /** Timezone in `America/New_York` format. */
        timeZone?: string | null;
        /** Email address. */
        email?: string | null;
        /** Phone number. */
        phone?: string | null;
        /** Address. */
        address?: LocationsAddress$1;
        /**
         * Business schedule. Array of weekly recurring time periods when the location is open for business. Limited to 100 time periods.
         *
         * __Note:__ Not supported by Wix Bookings.
         */
        businessSchedule?: BusinessSchedule$1;
        /**
         * Revision number, which increments by 1 each time the location is updated.
         * To prevent conflicting changes, the existing revision must be used when updating a location.
         */
        revision?: string | null;
        /**
         * Whether the location is archived. Archived locations can't be updated.
         * __Note:__ [Archiving a location](https://dev.wix.com/api/rest/business-info/locations/archive-location)
         * doesn't affect its `status`.
         * @readonly
         */
        archived?: boolean;
        /** Location types. */
        locationTypes?: LocationsLocationType$1[];
    }
    /** For future use */
    enum LocationStatus$1 {
        ACTIVE = "ACTIVE",
        INACTIVE = "INACTIVE"
    }
    /** For future use */
    enum LocationsLocationType$1 {
        UNKNOWN = "UNKNOWN",
        BRANCH = "BRANCH",
        OFFICES = "OFFICES",
        RECEPTION = "RECEPTION",
        HEADQUARTERS = "HEADQUARTERS",
        INVENTORY = "INVENTORY"
    }
    interface LocationsAddress$1 {
        /** 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
        country?: string | null;
        /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /** Street address. Includes street name, number, and apartment number in separate fields. */
        streetAddress?: LocationsStreetAddress$1;
        /** Full address of the location. */
        formatted?: string | null;
        /** Geographic coordinates of location. */
        location?: LocationsAddressLocation$1;
    }
    /** Street address. Includes street name, number, and apartment number in separate fields. */
    interface LocationsStreetAddress$1 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /** Apartment number. */
        apt?: string;
    }
    /** Address Geolocation */
    interface LocationsAddressLocation$1 {
        /** Latitude of the location. Must be between -90 and 90. */
        latitude?: number | null;
        /** Longitude of the location. Must be between -180 and 180. */
        longitude?: number | null;
    }
    /** Business schedule. Regular and exceptional time periods when the business is open or the service is available. */
    interface BusinessSchedule$1 {
        /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
        periods?: TimePeriod$1[];
        /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
        specialHourPeriod?: SpecialHourPeriod$1[];
    }
    /** Weekly recurring time periods when the business is regularly open or the service is available. */
    interface TimePeriod$1 {
        /** Day of the week the period starts on. */
        openDay?: DayOfWeek$1;
        /**
         * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
         * midnight at the end of the specified day.
         */
        openTime?: string;
        /** Day of the week the period ends on. */
        closeDay?: DayOfWeek$1;
        /**
         * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
         * midnight at the end of the specified day.
         *
         * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
         */
        closeTime?: string;
    }
    /** Enumerates the days of the week. */
    enum DayOfWeek$1 {
        MONDAY = "MONDAY",
        TUESDAY = "TUESDAY",
        WEDNESDAY = "WEDNESDAY",
        THURSDAY = "THURSDAY",
        FRIDAY = "FRIDAY",
        SATURDAY = "SATURDAY",
        SUNDAY = "SUNDAY"
    }
    /** Exception to the business's regular hours. The business can be open or closed during the exception. */
    interface SpecialHourPeriod$1 {
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
    interface Rate$1 {
        /**
         * Mapping between a named price option, for example, adult or child prices, and the price, currency, and down payment amount.
         * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
         */
        labeledPriceOptions?: Record<string, Price$1>;
        /**
         * Textual price information used when **Price Per Session** is set to **Custom Price** in the app's service details page.
         * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
         */
        priceText?: string | null;
    }
    interface Price$1 {
        /** Required payment amount. */
        amount?: string;
        /** Currency in which the amount is quoted. */
        currency?: string;
        /** Amount of a down payment or deposit as part of the transaction. */
        downPayAmount?: string;
    }
    /**
     * <!-- Needs updating when recurrence has been tested
     * Schedule's availability calculation is executed by the schedule's available intervals and this additional information.
     * Schedule's available intervals are recurring intervals (defined in the schedule) minus sessions that has no more spots for bookings (including time between_slots), or schedule's sessions with open spots for bookings.-->
     */
    interface Availability$1 {
        /** Date and time the schedule starts to be available for booking. */
        start?: Date;
        /** Date and time the schedule stops being available for booking. No value indicates no end time. */
        end?: Date;
        /** Other schedules that impact the availability calculation. Relevant only when there are availability constraints. */
        linkedSchedules?: LinkedSchedule$1[];
        /** Constraints for calculating the schedule's availability. */
        constraints?: V1AvailabilityConstraints;
    }
    /** Describes how to calculate the specific slots that are available for booking. */
    interface V1AvailabilityConstraints {
        /**
         * A list of duration options for slots, in minutes. Minimum value for a duration is 1.
         * The availability calculation generates slots with these durations, where there is no conflict with existing sessions or other availability constraints.
         */
        slotDurations?: number[];
        /**
         * The number of minutes between the `end` of one slot, and the `start` of the next.
         * Minimum value is 0, maximum value is 120.
         */
        timeBetweenSlots?: number;
        /**
         * Specify how to split the slots in intervals of minutes.
         * This value indicates the time between available slots' start time. e.g., from 5 minute slots (3:00, 3:05, 3:15) and 1 hour slots (3:00, 4:00, 5:00).
         * Optional. The default is the first duration in slot_durations field.
         * Deprecated. Use the `split_slots_interval.value_in_minutes`.
         */
        splitInterval?: number | null;
        /**
         * An object defining the time between available slots' start times.  For example, a slot with slots_split_interval=5 can start every 5 minutes. The default is the slot duration.
         * @readonly
         */
        slotsSplitInterval?: SplitInterval$1;
    }
    /** The time between available slots' start times. For example, For 5 minute slots, 3:00, 3:05, 3:15 etc. For 1 hour slots, 3:00, 4:00, 5:00 etc. */
    interface SplitInterval$1 {
        /**
         * Whether the slot duration is used as the split interval value.
         * If `same_as_duration` is `true`, the `value_in_minutes` is the sum of the first duration in
         * `schedule.availabilityConstraints.SlotDurations` field, and `schedule.availabilityConstraints.TimeBetweenSlots` field.
         */
        sameAsDuration?: boolean | null;
        /** Number of minutes between available slots' start times when `same_as_duration` is `false`. */
        valueInMinutes?: number | null;
    }
    interface Participant$1 {
        /** Participant ID. Currently represents the booking.id. */
        _id?: string;
        /** Contact ID. */
        contactId?: string | null;
        /** Participant's name. */
        name?: string | null;
        /** Participant's phone number. */
        phone?: string | null;
        /** Participant's email address. */
        email?: string | null;
        /** Group or party size. The number of people attending. Defaults to 0. Maximum is 250. */
        partySize?: number;
        /**
         * Approval status for the participant.
         * <!-- Commented out untill updateParticipant is exposed Generally the same status as the booking, unless updated using the `updateParticipant()` API. Defaults to `"UNDEFINED"`.-->
         * <!--ONLY:VELO
         * One of:
         * - `"PENDING"` Pending business approval.
         * - `"APPROVED"` Approved by the business.
         * - `"DECLINED"` Declined by the business.
         * <!--END:ONLY:VELO-->
         */
        approvalStatus?: ApprovalStatus$1;
        /**
         * Whether the participant was inherited from the schedule, as opposed to being booked directly to the session.
         * @readonly
         */
        inherited?: boolean;
    }
    enum ApprovalStatus$1 {
        /** Default. */
        UNDEFINED = "UNDEFINED",
        /** Pending business approval. */
        PENDING = "PENDING",
        /** Approved by the business. */
        APPROVED = "APPROVED",
        /** Declined by the business. */
        DECLINED = "DECLINED"
    }
    interface ExternalCalendarOverrides$1 {
        /** Synced title of the external calendar event. */
        title?: string | null;
        /** Synced description of the external calendar event. */
        description?: string | null;
    }
    enum ScheduleStatus$1 {
        UNDEFINED = "UNDEFINED",
        /** The default value when the schedule is created. */
        CREATED = "CREATED",
        /** The schedule has been canceled. */
        CANCELLED = "CANCELLED"
    }
    interface Version$1 {
        /** Schedule version number, updated each time the schedule is updated. */
        scheduleVersion?: number | null;
        /** Participants version number, updated each time the schedule participants are updated. */
        participantsVersion?: number | null;
    }
    interface ConferenceProvider$1 {
        /** Conferencing provider ID */
        providerId?: string;
    }
    interface CalendarConference$1 {
        /** Wix Calendar conference ID. */
        _id?: string;
        /** Conference meeting ID in the provider's conferencing system. */
        externalId?: string;
        /** Conference provider ID. */
        providerId?: string;
        /** URL used by the host to start the conference. */
        hostUrl?: string;
        /** URL used by a guest to join the conference. */
        guestUrl?: string;
        /** Password to join the conference. */
        password?: string | null;
        /** Conference description. */
        description?: string | null;
        /**
         * Conference type.
         * <!--ONLY:VELO
         * One of:
         * - `"ONLINE_MEETING_PROVIDER"` API-generated online meeting.
         * - `"CUSTOM"` User-defined meeting.
         * <!--END:ONLY:VELO-->
         */
        conferenceType?: ConferenceType$1;
        /** ID of the account owner in the video conferencing service. */
        accountOwnerId?: string | null;
    }
    enum ConferenceType$1 {
        UNDEFINED = "UNDEFINED",
        /** API-generated online meeting. */
        ONLINE_MEETING_PROVIDER = "ONLINE_MEETING_PROVIDER",
        /** User-defined meeting. */
        CUSTOM = "CUSTOM"
    }
    interface ScheduleUpdated$1 {
        /** The old schedule before the update. */
        oldSchedule?: V1Schedule;
        /** The new schedule after the update. */
        newSchedule?: V1Schedule;
        /**
         * Recurring sessions updated event. If this field is given, the reason for the schedule updated event was
         * updating at least one of the given schedule's recurring sessions.
         * This event is triggered by create/update/delete recurring session apis.
         */
        recurringSessions?: RecurringSessionsUpdated$1;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: V1ParticipantNotification;
        /**
         * Whether this notification was created as a result of an anonymization request, such as GDPR.
         * An anonymized participant will have the following details:
         * name = "deleted"
         * phone = "deleted"
         * email = "deleted@deleted.com"
         */
        triggeredByAnonymizeRequest?: boolean | null;
    }
    interface RecurringSessionsUpdated$1 {
        /** Old schedule's recurring session list. */
        oldRecurringSessions?: Session$1[];
        /** New schedule's recurring session list. */
        newRecurringSessions?: Session$1[];
    }
    interface Session$1 {
        /**
         * Session ID.
         * @readonly
         */
        _id?: string | null;
        /** ID of the schedule that the session belongs to. */
        scheduleId?: string;
        /**
         * ID of the resource or service that the session's schedule belongs to.
         * @readonly
         */
        scheduleOwnerId?: string | null;
        /** Original start date and time of the session in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. */
        originalStart?: Date;
        /** An object specifying the start date and time of the session. If the session is a recurring session, `start` must contain a `localDateTime`. */
        start?: CalendarDateTime$1;
        /**
         * An object specifying the end date and time of the session. The `end` time must be after the `start` time and be same type as `start`.
         * If the session is a recurring session, `end` must contain a `localDateTime`.
         */
        end?: CalendarDateTime$1;
        /**
         * An object specifying a list of schedules and the way each schedule's availability is affected by the session. For example, the schedule of an instructor is affected by sessions of the class that they instruct.
         * The array is inherited from the schedule and can be overridden even if the session is a recurring session.
         */
        affectedSchedules?: LinkedSchedule$1[];
        /**
         * Session title.
         * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
         */
        title?: string | null;
        /**
         * __Deprecated.__
         * Tags for the session.
         * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
         */
        tags?: string[] | null;
        /**
         * An object describing the location where the session takes place.
         * Defaults to the schedule location.
         * For single sessions, `session.location.businessLocation` can only be provided for locations that are defined in the schedule using `schedule.location` or `schedule.availability.locations`.
         */
        location?: V1Location;
        /**
         * Maximum number of participants that can be added to the session. Defaults to the schedule capacity.
         * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
         */
        capacity?: number | null;
        /** Deprecated. Please use the [Booking Services V2](https://dev.wix.com/api/rest/wix-bookings/services-v2) payment instead. */
        rate?: Rate$1;
        /**
         * Time reserved after the session end time, derived from the schedule availability constraints and the time between slots. Read-only.
         * If the session is a recurring session, this field must be empty.
         */
        timeReservedAfter?: number | null;
        /**
         * Additional information about the session.
         * Notes are not supported for recurring sessions.
         */
        notes?: string;
        /**
         * The number of participants booked for the session. Read-only.
         * Calculated as the sum of the party sizes.
         * @readonly
         */
        totalNumberOfParticipants?: number;
        /**
         * *Partial list** list of participants booked for the session.
         * The list includes participants who have registered for this specific session, and participants who have registered for a schedule that includes this session.
         * If the session is a recurring session, this field must be empty.
         * To retrieve the full list of session participants please use the [Query Extended Bookings API](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings).
         */
        participants?: Participant$1[];
        /**
         * A list of properties for which values were inherited from the schedule.
         * This does not include participants that were inherited from the schedule.
         * @readonly
         */
        inheritedFields?: string[];
        /** __Deprecated.__ */
        externalCalendarOverrides?: ExternalCalendarOverrides$1;
        /**
         * Session status.
         * <!--ONLY:VELO
         * One of:
         * - `"CONFIRMED"` Default value.
         * - `"CANCELLED"` The session was deleted.
         * <!--END:ONLY:VELO-->
         * @readonly
         */
        status?: SessionStatus;
        /**
         * Recurring interval ID. Defined when a session will be a recurring session. read-only. Optional.
         * For exmaple, when creating a class service  with recurring sessions, you add a recurrence rule to create recurring sessions.
         * This field is omitted for single sessions or instances of recurring sessions.
         * Specified when the session was originally generated from a schedule recurring interval.
         * Deprecated. Use `recurringSessionId`.
         * @readonly
         */
        recurringIntervalId?: string | null;
        /**
         * The ID of the recurring session if this session is an instance of a recurrence. Use this ID to update the recurrence and all of the instances.
         * @readonly
         */
        recurringSessionId?: string | null;
        /**
         * Session type.
         * <!--ONLY:VELO
         * One of:
         * - `"EVENT"` Reserved period of time on the schedule. For example, an appointment, class, course, or blocked time. Events are visible in the Dashboard in the Bookings app's [Booking Calendar](https://support.wix.com/en/article/wix-bookings-about-the-wix-bookings-calendar) page.
         * - `"WORKING_HOURS"` Placeholder for available time on a resource’s schedule.
         * <!--END:ONLY:VELO-->
         */
        type?: SessionType$1;
        /**
         * A conference created for the session according to the details set in the schedule's conference provider information.
         * If the session is a recurring session, this field is inherited from the schedule.
         * **Partially deprecated.** Only `hostUrl` and `guestUrl` are to be supported.
         */
        calendarConference?: CalendarConference$1;
        /**
         * A string representing a recurrence rule (RRULE) for a recurring session, as defined in [iCalendar RFC 5545](https://icalendar.org/iCalendar-RFC-5545/3-3-10-recurrence-rule.html).
         * If the session is an instance of a recurrence pattern, the `instanceOfRecurrence` property will be contain the recurrence rule and this property will be empty.
         * The RRULE defines a rule for repeating a session.
         * Supported parameters are:
         *
         * |Keyword|Description|Supported values|
         * |--|--|---|
         * |`FREQ`|The frequency at which the session is recurs. Required.|`WEEKLY`|
         * |`INTERVAL`|How often, in terms of `FREQ`, the session recurs. Default is 1. Optional.|
         * |`UNTIL`|The UTC end date and time of the recurrence. Optional.|
         * |`BYDAY`|Day of the week when the event should recur. Required.|One of: `MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`|
         *
         *
         * For example, a session that repeats every second week on a Monday until January 7, 2022 at 8 AM:
         * `"FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20220107T080000Z"`
         *
         * <!--ORIGINAL COMMENTS:
         * `FREQ` — The frequency with which the session should be repeated (such as DAILY or WEEKLY).
         * Supported `WEEKLY` value is supported.
         * INTERVAL — Works together with FREQ to specify how often the session should be repeated. For example, FREQ=WEEKLY;INTERVAL=2 means once every two weeks. Optional. Default value is 1.
         * COUNT — The number of times this event should be repeated. Not yet supported.
         * UNTIL — The UTC date & time until which the session should be repeated. This parameter is optional. When it is not specified, the event repeats forever.
         * The format is a short ISO date, followed by 'T' and a short time with seconds and without milliseconds, terminated by the UTC designator 'Z'. For example, until Jan. 19th 2018 at 7:00 AM: 'UNTIL=20180119T070000Z'.
         * BYDAY - The days of the week when the event should be repeated. Currently, only a single day is supported. This parameter is mandatory.
         * Possible values are: MO, TU, WE, TH, FR, SA, SU
         * Note that DTSTART and DTEND lines are not allowed in this field; session start and end times are specified in the start and end fields.
         * **Example**: FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20200427T070000Z
         * ORIGINAL COMMENTS-->
         */
        recurrence?: string | null;
        /**
         * A string representing a recurrence rule (RRULE) if the session is an instance of a recurrence pattern.
         * Empty when the session is not an instance of a recurrence rule, or if the session defines a recurrence pattern, and `recurrence` is not empty.
         * @readonly
         */
        instanceOfRecurrence?: string | null;
        /**
         * The session version.
         * Composed by the schedule, session and participants versions.
         * @readonly
         */
        version?: SessionVersion$1;
    }
    interface CalendarDateTime$1 {
        /**
         * UTC date-time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. If a time zone offset is specified, the time is converted to UTC. For example, if you specify  `new Date('2021-01-06T16:00:00.000-07:00')`, the stored value will be `"2021-01-06T23:00:00.000Z"`.
         * Required if `localDateTime` is not specified.
         * If `localDateTime` is specified, `timestamp` is calculated as `localDateTime`, using the business's time zone.
         */
        timestamp?: Date;
        /** An object containing the local date and time for the business's time zone. */
        localDateTime?: LocalDateTime$1;
        /**
         * The time zone. Optional. Derived from the schedule's time zone.
         * In case this field is associated with recurring session, this field is empty.
         * @readonly
         */
        timeZone?: string | null;
    }
    interface LocalDateTime$1 {
        /** Year. 4-digit format. */
        year?: number | null;
        /** Month number, from 1-12. */
        monthOfYear?: number | null;
        /** Day of the month, from 1-31. */
        dayOfMonth?: number | null;
        /** Hour of the day in 24-hour format, from 0-23. */
        hourOfDay?: number | null;
        /** Minute, from 0-59. */
        minutesOfHour?: number | null;
    }
    interface ExternalCalendarInfo$1 {
        /** The external calendar type (e.g. Google Calendar, iCal, etc). */
        calendarType?: CalendarType$1;
    }
    enum CalendarType$1 {
        UNDEFINED = "UNDEFINED",
        GOOGLE = "GOOGLE",
        I_CAL = "I_CAL",
        /** Use `MICROSOFT` instead. */
        OUTLOOK = "OUTLOOK",
        /** Use `MICROSOFT` instead. */
        OFFICE_365 = "OFFICE_365",
        MICROSOFT = "MICROSOFT",
        OTHER = "OTHER"
    }
    enum SessionStatus {
        UNDEFINED = "UNDEFINED",
        /** The session is confirmed. Default status. */
        CONFIRMED = "CONFIRMED",
        /**
         * The session is cancelled.
         * A cancelled session can be the cancellation of a recurring session that should no longer be displayed or a deleted single session.
         * The ListSessions returns cancelled sessions only if 'includeDelete' flag is set to true.
         */
        CANCELLED = "CANCELLED"
    }
    enum SessionType$1 {
        UNDEFINED = "UNDEFINED",
        /**
         * The session creates an event on the calendar for the owner of the schedule that the session belongs to.
         * Default type.
         */
        EVENT = "EVENT",
        /** The session represents a resource's available working hours. */
        WORKING_HOURS = "WORKING_HOURS",
        /** Deprecated. please use WORKING_HOURS */
        TIME_AVAILABILITY = "TIME_AVAILABILITY",
        /** Deprecated. The session represents a resource's available hours. please use WORKING_HOURS */
        AVAILABILITY = "AVAILABILITY"
    }
    interface SessionVersion$1 {
        /** Incremental version number, which is updated on each change to the session or on changes affecting the session. */
        number?: string | null;
    }
    interface V1ParticipantNotification {
        /**
         * Whether to send the message about the changes to the customer.
         *
         * Default: `false`
         */
        notifyParticipants?: boolean;
        /** Custom message to send to the participants about the changes to the booking. */
        message?: string | null;
    }
    interface ScheduleCancelled$1 {
        schedule?: V1Schedule;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: V1ParticipantNotification;
        oldSchedule?: V1Schedule;
    }
    interface SessionCreated$1 {
        session?: Session$1;
    }
    interface SessionUpdated$1 {
        oldSession?: Session$1;
        newSession?: Session$1;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: V1ParticipantNotification;
        /**
         * Whether this notification was created as a result of an anonymization request, such as GDPR.
         * An anonymized participant will have the following details:
         * name = "deleted"
         * phone = "deleted"
         * email = "deleted@deleted.com"
         */
        triggeredByAnonymizeRequest?: boolean | null;
    }
    interface SessionCancelled$1 {
        session?: Session$1;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: V1ParticipantNotification;
    }
    interface AvailabilityPolicyUpdated$1 {
        availabilityPolicy?: AvailabilityPolicy$1;
    }
    /** Availability policy applied to all site schedules. */
    interface AvailabilityPolicy$1 {
        /** Specify how to split the schedule slots in intervals of minutes. */
        splitInterval?: SplitInterval$1;
    }
    interface IntervalSplit$1 {
        scheduleId?: string;
        intervals?: RecurringInterval$1[];
        newScheduleVersion?: number | null;
        oldScheduleVersion?: number | null;
    }
    interface RecurringSessionSplit$1 {
        scheduleId?: string;
        recurringSessions?: Session$1[];
        newScheduleVersion?: number | null;
        oldScheduleVersion?: number | null;
    }
    /** Schedule unassigned from user. */
    interface ScheduleUnassignedFromUser$1 {
        /** The Wix user id. */
        userId?: string | null;
        /** The schedule that was unassigned from the user. */
        schedule?: V1Schedule;
    }
    interface MultipleSessionsCreated$1 {
        schedulesWithSessions?: ScheduleWithSessions$1[];
    }
    interface ScheduleWithSessions$1 {
        schedule?: V1Schedule;
        siteProperties?: SitePropertiesOnScheduleCreation$1;
        sessions?: Session$1[];
    }
    interface SitePropertiesOnScheduleCreation$1 {
        /** The global time zone value. */
        timeZone?: string | null;
    }
    interface MigrationEvent$1 {
        migrationData?: MigrationData$1;
    }
    interface MigrationData$1 {
        businessId?: string | null;
        staffs?: StaffData$1[];
    }
    interface StaffData$1 {
        resourceId?: string;
        syncRequestEmail?: string;
        refreshToken?: string;
    }
    interface ResourceNotification {
        /**
         * Updated resource entity.
         * 'resource.schedules' is deprecated and will not be returned. Please use 'resource.scheduleIds' instead.
         */
        resource?: Resource$1;
        /** Event type. */
        event?: ResourceNotificationEvent;
    }
    interface Resource$1 {
        /**
         * Resource ID.
         * @readonly
         */
        _id?: string | null;
        /** Resource name. */
        name?: string | null;
        /** Resource email address. */
        email?: string | null;
        /** Resource phone number. */
        phone?: string | null;
        /** Resource description. */
        description?: string | null;
        /** Deprecated. Please use tags. */
        tag?: string | null;
        /** Resource tags. Tags are used to identify, group, and filter the different types of resources. For example, 'staff' or 'room'. */
        tags?: string[] | null;
        /** Resource images. */
        images?: string[];
        /** Deprecated. Please use scheduleIds. List of the schedules owned by this resource. Min size 1. */
        schedules?: V1Schedule[];
        /**
         * List of IDs of schedules owned by this resource.
         * @readonly
         */
        scheduleIds?: string[] | null;
        /**
         * Resource status.
         * <!--ONLY:VELO
         * One of:
         * - `"CREATED"` Default status.
         * - `"DELETED"` The resource was deleted.
         * - `"UPDATED"` The resource was updated.
         * <!--END:ONLY:VELO-->
         * @readonly
         */
        status?: ResourceStatus;
        /**
         * Wix user ID, if the resource is associated with the Wix user.
         * A staff member resource can be associated with a Wix user via assignment of a permissions role in the business manager.
         * <!--ONLY:VELO
         * Click the **Set Permissions** button for the staff member on the Staff page on your site's dashboard.
         * <!--END:ONLY:VELO-->
         * @readonly
         */
        wixUserId?: string | null;
    }
    enum ResourceStatus {
        UNDEFINED = "UNDEFINED",
        /** Default status. */
        CREATED = "CREATED",
        /** The resource was deleted. */
        DELETED = "DELETED",
        /** The resource was updated. */
        UPDATED = "UPDATED"
    }
    interface BusinessLocation {
        /** The ID of the business location. Has to be non-empty */
        locationId?: string;
    }
    enum ResourceNotificationEvent {
        UNDEFINED = "UNDEFINED",
        Updated = "Updated",
        Deleted = "Deleted",
        Created = "Created",
        Schedule_Updated = "Schedule_Updated"
    }
    interface BenefitNotification {
        /** Plan unique ID */
        planId?: string;
        /** App def ID */
        appDefId?: string;
        /** Current benefit details */
        benefit?: Benefit;
        /** Previous benefit */
        prevBenefit?: Benefit;
        /** Notification event */
        event?: BenefitNotificationEvent;
    }
    interface Benefit {
        /**
         * Benefit unique ID
         * @readonly
         */
        _id?: string | null;
        /** Benefit Type */
        benefitType?: BenefitType;
        /** Resource IDs that serves by this benefit */
        resourceIds?: string[];
        /** Amount of credits that provided by this benefit */
        creditAmount?: number | null;
        /** additional details related to benefit; limited to 20 entries, 20 symbols for key and 20 symbols for value */
        customFields?: Record<string, string>;
        /** return value only in case it required in the ListRequest, true means that benefit's type could be updated */
        editable?: boolean | null;
        /** Benefit behavior */
        behavior?: Behavior;
        /**
         * Id of the app associated with this benefit
         * @readonly
         */
        appDefId?: string | null;
    }
    interface EntryPass {
    }
    interface Discount extends DiscountDiscountOneOf {
        /** Fixed-rate percent off discount */
        percentOffRate?: string;
        /** Absolute amount discount */
        moneyOffAmount?: string;
    }
    /** @oneof */
    interface DiscountDiscountOneOf {
        /** Fixed-rate percent off discount */
        percentOffRate?: string;
        /** Absolute amount discount */
        moneyOffAmount?: string;
    }
    enum BenefitType {
        /** Should never be used */
        UNDEFINED = "UNDEFINED",
        /** Limited benefit type */
        LIMITED = "LIMITED",
        /** Unlimited benefit type */
        UNLIMITED = "UNLIMITED"
    }
    interface Behavior extends BehaviorBehaviorOneOf {
        /** Entry pass for resources, e.g. a ticket for Bookings service or a ticket for Events. */
        defaultBehavior?: EntryPass;
        /** Discount applied to paid resources */
        discount?: Discount;
    }
    /** @oneof */
    interface BehaviorBehaviorOneOf {
        /** Entry pass for resources, e.g. a ticket for Bookings service or a ticket for Events. */
        defaultBehavior?: EntryPass;
        /** Discount applied to paid resources */
        discount?: Discount;
    }
    enum BenefitNotificationEvent {
        Updated = "Updated",
        Deleted = "Deleted",
        Created = "Created"
    }
    interface UserDomainInfoChangedEvent {
        domainName?: string;
        crudType?: CrudType;
        metaSiteId?: string | null;
        changeTime?: Date;
    }
    enum CrudType {
        INVALID_CRUD_TYPE = "INVALID_CRUD_TYPE",
        CREATE = "CREATE",
        UPDATE = "UPDATE",
        DELETE = "DELETE",
        /** Unfortunately this action is used by hibernate save in wix-war */
        CREATE_OR_UPDATE = "CREATE_OR_UPDATE"
    }
    interface HtmlSitePublished {
        /** Application instance ID */
        appInstanceId?: string;
        /** Application type */
        appType?: string;
        /** Revision */
        revision?: string;
        /** MSID */
        metaSiteId?: string | null;
        /** optional branch id if publish is done from branch */
        branchId?: string | null;
        /** The site's last transactionId */
        lastTransactionId?: string | null;
        /** A list of the site's pages */
        pages?: Page[];
        /** Site's publish date */
        publishDate?: string;
    }
    interface Page {
        /** Page's Id */
        _id?: string;
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
        businessSchedule?: BusinessSchedule$1;
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
        siteCreated?: SiteCreated;
        /** Properties were cloned on site cloning. */
        siteCloned?: SiteCloned;
    }
    /** @oneof */
    interface ChangeContextPayloadOneOf {
        /** Properties were updated. */
        propertiesChange?: PropertiesChange;
        /** Default properties were created on site creation. */
        siteCreated?: SiteCreated;
        /** Properties were cloned on site cloning. */
        siteCloned?: SiteCloned;
    }
    interface PropertiesChange {
    }
    interface SiteCreated {
        /** Origin template site id. */
        originTemplateId?: string | null;
    }
    interface SiteCloned {
        /** Origin site id. */
        originMetaSiteId?: string;
    }
    interface SetServiceLocationsRequest {
        /** ID of the service. */
        serviceId: string;
        /** The locations you specify replace the existing service locations. */
        locations: Location$3[];
        /** The action to perform on sessions currently set to a removed location. For example, move existing sessions to a new specified location. */
        removedLocationSessionsAction?: RemovedLocationSessionsAction;
        /** Whether to notify participants about the change of location, and an optional custom message. */
        participantNotification?: ParticipantNotification$3;
    }
    interface RemovedLocationSessionsAction extends RemovedLocationSessionsActionActionOptionsOneOf {
        /** Options related to the action, such as a new location to move existing sessions to. */
        moveToLocationOptions?: MoveToNewLocationsOptions;
        /** The action to perform on sessions currently set to a removed location. For example, move existing sessions to a new specified location. */
        action?: Action;
    }
    /** @oneof */
    interface RemovedLocationSessionsActionActionOptionsOneOf {
        /** Options related to the action, such as a new location to move existing sessions to. */
        moveToLocationOptions?: MoveToNewLocationsOptions;
    }
    enum Action {
        UNKNOWN_ACTION_TYPE = "UNKNOWN_ACTION_TYPE",
        /**
         * Keep future sessions at their current location. This is the default.
         * Note: The location will be set directly on the session. i.e, if the location is currently inherited from the schedule, the inheritance will be overridden.
         */
        KEEP_AT_CURRENT_LOCATION = "KEEP_AT_CURRENT_LOCATION",
        /**
         * Move future sessions to a new location.
         * The new location must be specified in the availability locations to set ('SetAvailabilityLocationsRequest.locations').
         */
        MOVE_TO_LOCATION = "MOVE_TO_LOCATION",
        /**
         * Delete future sessions.
         * Currently not supported.
         */
        DELETE = "DELETE"
    }
    interface MoveToNewLocationsOptions {
        /** The new location to move existing sessions currently set to a removed location, used when `action` is `MOVE_TO_LOCATION`. */
        newLocation?: Location$3;
    }
    interface SetServiceLocationsResponse {
        /** The updated service with the newly set locations. */
        service?: Service;
    }
    interface EnablePricingPlansForServiceRequest {
        /** ID of the service to add the pricing plans to. */
        serviceId: string;
        /** IDs of the pricing plans to connect to the service. */
        pricingPlanIds: string[];
    }
    interface EnablePricingPlansForServiceResponse {
        /** IDs of the pricing plans connected to the service. */
        pricingPlanIds?: string[];
        /** The service after the pricing plans update. */
        service?: Service;
    }
    interface InvalidPricingPlan {
        /** The invalid pricing plan id. */
        _id?: string;
        /** The reason for the pricing plan considered as invalid */
        message?: string;
    }
    interface DisablePricingPlansForServiceRequest {
        /** ID of the service to disconnect the pricing plans from. */
        serviceId: string;
        /** ID of the pricing plans to disconnect from the service. */
        pricingPlanIds?: string[];
    }
    interface DisablePricingPlansForServiceResponse {
        /** The service after the pricing plans update. */
        service?: Service;
    }
    interface SetCustomSlugRequest {
        /** ID of the service to assign the custom slug to. */
        serviceId: string;
        /** The custom name to set as the active slug for the service. */
        slugName: string;
    }
    interface SetCustomSlugResponse {
        /** The new slug set as the active slug for the service. */
        slug?: Slug;
    }
    interface ValidateSlugRequest {
        /** ID of the service to validate the slug name for. */
        serviceId: string;
        /** The custom name to validate as a slug for the service. */
        slugName: string;
    }
    interface ValidateSlugResponse {
        /** Whether the requested slug name is valid. */
        valid?: boolean;
        /** The requested custom slug name to validate. If valid, the slug name can be set as a slug for the service and is populated with the requested slug. Otherwise, `slugName` is empty. */
        slugName?: string | null;
        /** If the slug is invalid, this field is populated with the reasons why the slug is invalid. Validation errors may include `SLUG_IS_TOO_LONG`, `SLUG_CONTAIN_ILLEGAL_CHARACTERS`, and `SLUG_ALREADY_EXISTS`. */
        errors?: InvalidSlugError[];
    }
    enum InvalidSlugError {
        UNKNOWN_SLUG_ERROR = "UNKNOWN_SLUG_ERROR",
        /** The provided slug name contains illegal characters. */
        SLUG_CONTAINS_ILLEGAL_CHARACTERS = "SLUG_CONTAINS_ILLEGAL_CHARACTERS",
        /** The provided slug name already exists for another service. */
        SLUG_ALREADY_EXISTS = "SLUG_ALREADY_EXISTS"
    }
    interface CloneServiceRequest {
        /** ID of a source service */
        sourceServiceId: string;
        /** copy recurring sessions of an active service's schedule */
        copyRecurringSessions?: boolean;
        /** copy benefits with pricing plans that are connected to the source service. If the source service is connected to more than 120 benefits with pricing plans then they will not be copied. In that case the field `error_types` in the response will include `PRICING_PLANS`. */
        copyPricingPlans?: boolean;
        /** whether to hide service from the list or not. Empty means that we will copy this value from the source service without overriding it */
        hideService?: boolean | null;
        /** the name of the clone service. The title of the clone service's schedule will also be set to this name. When this parameter is omitted then the clone service will have the same name as the source service and the clone service's schedule will get the same title as the source service's active schedule. */
        cloneServiceName?: string | null;
    }
    interface CloneServiceResponse {
        /** Cloned service */
        service?: Service;
        /** List of entity types that we failed to clone */
        errors?: CloneErrors[];
    }
    enum CloneErrors {
        UNKNOWN_CLONE_ERROR = "UNKNOWN_CLONE_ERROR",
        /** Failed to clone sessions of active service's schedule */
        SESSIONS = "SESSIONS",
        /** Failed to clone service's options and variants even though source service have them */
        OPTIONS_AND_VARIANTS = "OPTIONS_AND_VARIANTS",
        /** Failed to clone service's form */
        FORM = "FORM",
        /** Failed to clone pricing plans connected to the source service */
        PRICING_PLANS = "PRICING_PLANS"
    }
    interface MultiServiceEnabledNotification {
    }
    /**
     * Creates a new service.
     * @param service - Service to be created.
     * @public
     * @documentationMaturity preview
     * @requiredField service
     * @adminMethod
     * @returns The created service.
     */
    function createService(service: Service): Promise<Service>;
    interface BulkCreateServicesOptions {
        /** `true` if the created entities must be included in the response, otherwise no entities are included in the response. */
        returnEntity?: boolean;
    }
    /**
     * Retrieves a service.
     * @param serviceId - ID of the service to retrieve.
     * @public
     * @documentationMaturity preview
     * @requiredField serviceId
     * @returns The retrieved service.
     */
    function getService(serviceId: string, options?: GetServiceOptions): Promise<Service>;
    interface GetServiceOptions {
    }
    /**
     * Updates a service.
     *
     * [Partial updates](https://dev.wix.com/api/rest/wix-bookings/bookings/patch-endpoints-and-field-masks-in-update-requests) are supported.
     *
     * Each time the service is updated, `revision` increments by 1. You must include the
     * number of the existing revision when
     * updating the service. This ensures you're working with the
     * latest service information and prevents unintended overwrites.
     * @param _id - Service ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField service
     * @requiredField service.revision
     * @adminMethod
     * @returns The updated service.
     */
    function updateService(_id: string | null, service: UpdateService, options?: UpdateServiceOptions): Promise<Service>;
    interface UpdateService {
        /**
         * Service ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Service type.
         *
         * Supported Values:
         * - "APPOINTMENT"
         * - "CLASS"
         * - "COURSE"
         *
         */
        type?: ServiceType;
        /** Order of a service within a category. */
        sortOrder?: number | null;
        name?: string | null;
        description?: string | null;
        tagLine?: string | null;
        /** Default maximum number of customers that can book the service. The service cannot be booked beyond this capacity. */
        defaultCapacity?: number | null;
        /** Media associated with the service. */
        media?: Media;
        /** Whether the service is hidden from the site. */
        hidden?: boolean | null;
        /** The category the service is associated with. */
        category?: V2Category;
        /** The form used when booking the service. */
        form?: Form;
        /** Payment options for booking the service. */
        payment?: Payment;
        /** Online booking settings. */
        onlineBooking?: OnlineBooking;
        /** Conferencing options for this service. */
        conferencing?: Conferencing;
        /**
         * The locations this service is offered at.
         * In case of multiple (more than 1) location, All locations must be of type `BUSINESS`.
         * For courses only: Currently, only 1 location is supported, for all location types.
         */
        locations?: Location$3[];
        /** Policy determining under what conditions this service can be booked. For example, whether the service can only be booked up to 30 minutes before it begins. */
        bookingPolicy?: BookingPolicy;
        /** The service's schedule, which can be used to manage the service's sessions. */
        schedule?: Schedule$1;
        /** IDs of the staff members providing the service. For appointments only. */
        staffMemberIds?: string[];
        /**
         * A slug is the last part of the URL address that serves as a unique identifier of the service.
         * The list of supported slugs includes past service names for backwards compatibility, and a custom slug if one was set by the business owner.
         * @readonly
         */
        supportedSlugs?: Slug[];
        /**
         * The main slug for the service. `mainSlug` is either taken from the current service name or is a custom slug set by the business owner.
         * `mainSlug` is used to construct the service's URLs.
         * @readonly
         */
        mainSlug?: Slug;
        /**
         * URLs to various service-related pages, such as the calendar page and the booking page.
         * @readonly
         */
        urls?: URLs;
        /**
         * Extensions enabling users to save custom data related to the service.
         * @readonly
         */
        extendedFields?: ExtendedFields$3;
        /** Custom SEO data for the service. */
        seoData?: SeoSchema;
        /**
         * Date and time the service was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the service was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * Revision number, which increments by 1 each time the service is updated. To prevent conflicting changes, the existing revision must be used when updating a service.
         * @readonly
         */
        revision?: string | null;
    }
    interface UpdateServiceOptions {
    }
    interface BulkUpdateServicesOptions {
        /** Services to update. */
        services?: MaskedService[];
        /** `true` if the updated entities must be included in the response, otherwise no entities are included in the response. */
        returnEntity?: boolean;
    }
    /**
     * Deletes a service.
     * @param serviceId - ID of the service to delete.
     * @public
     * @documentationMaturity preview
     * @requiredField serviceId
     * @param options - Allows you to configure how to handle the deleted service's future sessions and how to notify the sessions participants.
     * @adminMethod
     */
    function deleteService(serviceId: string, options?: DeleteServiceOptions): Promise<void>;
    interface DeleteServiceOptions {
        /**
         * Whether to preserve future sessions with participants.
         *
         * Default: `false`
         */
        preserveFutureSessionsWithParticipants?: boolean;
        /** Whether to notify participants about the change and an optional custom message. */
        participantNotification?: ParticipantNotification$3;
    }
    interface BulkDeleteServicesOptions {
        preserveFutureSessionsWithParticipants?: boolean;
        /**
         * Whether to preserve future sessions with participants.
         *
         * Default: `false`.
         */
        participantNotification?: ParticipantNotification$3;
    }
    /**
     * Retrieves a list of up to 100 services, given the provided paging, filtering, and sorting.
     * `queryServices()` runs with these defaults, which you can override:
     * + `paging.limit` is `100`.
     * + `paging.offset` is `0`.
     *
     *
     * >**Notes:**
     * > + Use UTC format when filtering with dates.
     * > + Only 1 use of each filter in the same query is supported. If a filter is defined more than once in a query, only the first occurrence is processed.
     * @public
     * @documentationMaturity preview
     */
    function queryServices(options?: QueryServicesOptions): ServicesQueryBuilder;
    interface QueryServicesOptions {
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
    interface ServicesQueryResult extends QueryOffsetResult {
        items: Service[];
        query: ServicesQueryBuilder;
        next: () => Promise<ServicesQueryResult>;
        prev: () => Promise<ServicesQueryResult>;
    }
    interface ServicesQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "type" | "name" | "description" | "tagLine" | "hidden" | "category.id" | "category.name" | "form.id" | "payment.options.online" | "payment.options.inPerson" | "payment.options.pricingPlan" | "onlineBooking.enabled" | "locations.business.id" | "staffMemberIds" | "supportedSlugs.name" | "mainSlug.name", value: any) => ServicesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "type" | "name" | "description" | "tagLine" | "hidden" | "category.id" | "category.name" | "form.id" | "payment.options.online" | "payment.options.inPerson" | "payment.options.pricingPlan" | "onlineBooking.enabled" | "locations.business.id" | "staffMemberIds" | "supportedSlugs.name" | "mainSlug.name", value: any) => ServicesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: "name" | "description" | "tagLine" | "category.id" | "category.name" | "form.id" | "locations.business.id" | "supportedSlugs.name" | "mainSlug.name", value: string) => ServicesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasSome: (propertyName: "type" | "name" | "description" | "tagLine" | "hidden" | "category.id" | "category.name" | "form.id" | "payment.options.online" | "payment.options.inPerson" | "payment.options.pricingPlan" | "onlineBooking.enabled" | "locations.business.id" | "staffMemberIds" | "supportedSlugs.name" | "mainSlug.name", value: any[]) => ServicesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasAll: (propertyName: "staffMemberIds", value: any[]) => ServicesQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "type" | "name" | "description" | "tagLine" | "hidden" | "category.id" | "category.name" | "form.id" | "payment.options.online" | "payment.options.inPerson" | "payment.options.pricingPlan" | "onlineBooking.enabled" | "locations.business.id" | "staffMemberIds" | "supportedSlugs.name" | "mainSlug.name", value: any) => ServicesQueryBuilder;
        /** @documentationMaturity preview */
        exists: (propertyName: "type" | "name" | "description" | "tagLine" | "hidden" | "category.id" | "category.name" | "form.id" | "payment.options.online" | "payment.options.inPerson" | "payment.options.pricingPlan" | "onlineBooking.enabled" | "locations.business.id" | "staffMemberIds" | "supportedSlugs.name" | "mainSlug.name", value: boolean) => ServicesQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => ServicesQueryBuilder;
        /** @param skip - Number of items to skip in the query results before returning the results.
         * @documentationMaturity preview
         */
        skip: (skip: number) => ServicesQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<ServicesQueryResult>;
    }
    interface CountServicesOptions {
        /** The filters for performing the count. */
        filter?: Record<string, any> | null;
    }
    interface SetServiceLocationsOptions {
        /** The action to perform on sessions currently set to a removed location. For example, move existing sessions to a new specified location. */
        removedLocationSessionsAction?: RemovedLocationSessionsAction;
        /** Whether to notify participants about the change of location, and an optional custom message. */
        participantNotification?: ParticipantNotification$3;
    }
    interface DisablePricingPlansForServiceOptions {
        /** ID of the pricing plans to disconnect from the service. */
        pricingPlanIds?: string[];
    }
    interface ValidateSlugOptions {
        /** The custom name to validate as a slug for the service. */
        slugName: string;
    }
    interface CloneServiceOptions {
        /** copy recurring sessions of an active service's schedule */
        copyRecurringSessions?: boolean;
        /** copy benefits with pricing plans that are connected to the source service. If the source service is connected to more than 120 benefits with pricing plans then they will not be copied. In that case the field `error_types` in the response will include `PRICING_PLANS`. */
        copyPricingPlans?: boolean;
        /** whether to hide service from the list or not. Empty means that we will copy this value from the source service without overriding it */
        hideService?: boolean | null;
        /** the name of the clone service. The title of the clone service's schedule will also be set to this name. When this parameter is omitted then the clone service will have the same name as the source service and the clone service's schedule will get the same title as the source service's active schedule. */
        cloneServiceName?: string | null;
    }
    type bookingsServicesV2Service_universal_d_Service = Service;
    type bookingsServicesV2Service_universal_d_ServiceType = ServiceType;
    const bookingsServicesV2Service_universal_d_ServiceType: typeof ServiceType;
    type bookingsServicesV2Service_universal_d_Media = Media;
    type bookingsServicesV2Service_universal_d_MediaItemItemOneOf = MediaItemItemOneOf;
    type bookingsServicesV2Service_universal_d_V2Category = V2Category;
    type bookingsServicesV2Service_universal_d_Form = Form;
    type bookingsServicesV2Service_universal_d_FormSettings = FormSettings;
    type bookingsServicesV2Service_universal_d_Payment = Payment;
    type bookingsServicesV2Service_universal_d_PaymentRateOneOf = PaymentRateOneOf;
    type bookingsServicesV2Service_universal_d_RateType = RateType;
    const bookingsServicesV2Service_universal_d_RateType: typeof RateType;
    type bookingsServicesV2Service_universal_d_FixedPayment = FixedPayment;
    type bookingsServicesV2Service_universal_d_Money = Money;
    type bookingsServicesV2Service_universal_d_CustomPayment = CustomPayment;
    type bookingsServicesV2Service_universal_d_VariedPayment = VariedPayment;
    type bookingsServicesV2Service_universal_d_PaymentOptions = PaymentOptions;
    type bookingsServicesV2Service_universal_d_OnlineBooking = OnlineBooking;
    type bookingsServicesV2Service_universal_d_Conferencing = Conferencing;
    type bookingsServicesV2Service_universal_d_LocationOptionsOneOf = LocationOptionsOneOf;
    type bookingsServicesV2Service_universal_d_BusinessLocationOptions = BusinessLocationOptions;
    type bookingsServicesV2Service_universal_d_CustomLocationOptions = CustomLocationOptions;
    type bookingsServicesV2Service_universal_d_BookingPolicy = BookingPolicy;
    type bookingsServicesV2Service_universal_d_PolicyDescription = PolicyDescription;
    type bookingsServicesV2Service_universal_d_LimitEarlyBookingPolicy = LimitEarlyBookingPolicy;
    type bookingsServicesV2Service_universal_d_LimitLateBookingPolicy = LimitLateBookingPolicy;
    type bookingsServicesV2Service_universal_d_BookAfterStartPolicy = BookAfterStartPolicy;
    type bookingsServicesV2Service_universal_d_CancellationPolicy = CancellationPolicy;
    type bookingsServicesV2Service_universal_d_ReschedulePolicy = ReschedulePolicy;
    type bookingsServicesV2Service_universal_d_WaitlistPolicy = WaitlistPolicy;
    type bookingsServicesV2Service_universal_d_ParticipantsPolicy = ParticipantsPolicy;
    type bookingsServicesV2Service_universal_d_ResourcesPolicy = ResourcesPolicy;
    type bookingsServicesV2Service_universal_d_ResourceGroup = ResourceGroup;
    type bookingsServicesV2Service_universal_d_ResourceIds = ResourceIds;
    type bookingsServicesV2Service_universal_d_ServiceResource = ServiceResource;
    type bookingsServicesV2Service_universal_d_ServiceResourceSelectionOneOf = ServiceResourceSelectionOneOf;
    type bookingsServicesV2Service_universal_d_ResourceType = ResourceType;
    type bookingsServicesV2Service_universal_d_Slug = Slug;
    type bookingsServicesV2Service_universal_d_URLs = URLs;
    type bookingsServicesV2Service_universal_d_SeoSchema = SeoSchema;
    type bookingsServicesV2Service_universal_d_Keyword = Keyword;
    type bookingsServicesV2Service_universal_d_Tag = Tag;
    type bookingsServicesV2Service_universal_d_Settings = Settings;
    type bookingsServicesV2Service_universal_d_ReindexMessage = ReindexMessage;
    type bookingsServicesV2Service_universal_d_ReindexMessageActionOneOf = ReindexMessageActionOneOf;
    type bookingsServicesV2Service_universal_d_Upsert = Upsert;
    type bookingsServicesV2Service_universal_d_Delete = Delete;
    type bookingsServicesV2Service_universal_d_Schema = Schema;
    type bookingsServicesV2Service_universal_d_SetCustomSlugEvent = SetCustomSlugEvent;
    type bookingsServicesV2Service_universal_d_CreateServiceRequest = CreateServiceRequest;
    type bookingsServicesV2Service_universal_d_CreateServiceResponse = CreateServiceResponse;
    type bookingsServicesV2Service_universal_d_BulkCreateServicesRequest = BulkCreateServicesRequest;
    type bookingsServicesV2Service_universal_d_BulkCreateServicesResponse = BulkCreateServicesResponse;
    type bookingsServicesV2Service_universal_d_BulkServiceResult = BulkServiceResult;
    type bookingsServicesV2Service_universal_d_GetServiceRequest = GetServiceRequest;
    type bookingsServicesV2Service_universal_d_GetServiceResponse = GetServiceResponse;
    type bookingsServicesV2Service_universal_d_GetServiceAvailabilityConstraintsRequest = GetServiceAvailabilityConstraintsRequest;
    type bookingsServicesV2Service_universal_d_GetServiceAvailabilityConstraintsResponse = GetServiceAvailabilityConstraintsResponse;
    type bookingsServicesV2Service_universal_d_ServiceAvailabilityConstraints = ServiceAvailabilityConstraints;
    type bookingsServicesV2Service_universal_d_V1SplitInterval = V1SplitInterval;
    type bookingsServicesV2Service_universal_d_UpdateServiceRequest = UpdateServiceRequest;
    type bookingsServicesV2Service_universal_d_UpdateServiceResponse = UpdateServiceResponse;
    type bookingsServicesV2Service_universal_d_BulkUpdateServicesRequest = BulkUpdateServicesRequest;
    type bookingsServicesV2Service_universal_d_MaskedService = MaskedService;
    type bookingsServicesV2Service_universal_d_BulkUpdateServicesResponse = BulkUpdateServicesResponse;
    type bookingsServicesV2Service_universal_d_DeleteServiceRequest = DeleteServiceRequest;
    type bookingsServicesV2Service_universal_d_DeleteServiceResponse = DeleteServiceResponse;
    type bookingsServicesV2Service_universal_d_BulkDeleteServicesRequest = BulkDeleteServicesRequest;
    type bookingsServicesV2Service_universal_d_BulkDeleteServicesResponse = BulkDeleteServicesResponse;
    type bookingsServicesV2Service_universal_d_QueryServicesRequest = QueryServicesRequest;
    type bookingsServicesV2Service_universal_d_QueryServicesResponse = QueryServicesResponse;
    type bookingsServicesV2Service_universal_d_SearchServicesRequest = SearchServicesRequest;
    type bookingsServicesV2Service_universal_d_CursorSearch = CursorSearch;
    type bookingsServicesV2Service_universal_d_CursorSearchPagingMethodOneOf = CursorSearchPagingMethodOneOf;
    type bookingsServicesV2Service_universal_d_Aggregation = Aggregation;
    type bookingsServicesV2Service_universal_d_AggregationKindOneOf = AggregationKindOneOf;
    type bookingsServicesV2Service_universal_d_RangeBucket = RangeBucket;
    type bookingsServicesV2Service_universal_d_SortType = SortType;
    const bookingsServicesV2Service_universal_d_SortType: typeof SortType;
    type bookingsServicesV2Service_universal_d_SortDirection = SortDirection;
    const bookingsServicesV2Service_universal_d_SortDirection: typeof SortDirection;
    type bookingsServicesV2Service_universal_d_MissingValues = MissingValues;
    const bookingsServicesV2Service_universal_d_MissingValues: typeof MissingValues;
    type bookingsServicesV2Service_universal_d_IncludeMissingValuesOptions = IncludeMissingValuesOptions;
    type bookingsServicesV2Service_universal_d_ScalarType = ScalarType;
    const bookingsServicesV2Service_universal_d_ScalarType: typeof ScalarType;
    type bookingsServicesV2Service_universal_d_ValueAggregation = ValueAggregation;
    type bookingsServicesV2Service_universal_d_ValueAggregationOptionsOneOf = ValueAggregationOptionsOneOf;
    type bookingsServicesV2Service_universal_d_NestedAggregationType = NestedAggregationType;
    const bookingsServicesV2Service_universal_d_NestedAggregationType: typeof NestedAggregationType;
    type bookingsServicesV2Service_universal_d_RangeAggregation = RangeAggregation;
    type bookingsServicesV2Service_universal_d_ScalarAggregation = ScalarAggregation;
    type bookingsServicesV2Service_universal_d_DateHistogramAggregation = DateHistogramAggregation;
    type bookingsServicesV2Service_universal_d_DateHistogramAggregationInterval = DateHistogramAggregationInterval;
    const bookingsServicesV2Service_universal_d_DateHistogramAggregationInterval: typeof DateHistogramAggregationInterval;
    type bookingsServicesV2Service_universal_d_NestedAggregationItem = NestedAggregationItem;
    type bookingsServicesV2Service_universal_d_NestedAggregationItemKindOneOf = NestedAggregationItemKindOneOf;
    type bookingsServicesV2Service_universal_d_AggregationType = AggregationType;
    const bookingsServicesV2Service_universal_d_AggregationType: typeof AggregationType;
    type bookingsServicesV2Service_universal_d_NestedAggregation = NestedAggregation;
    type bookingsServicesV2Service_universal_d_GroupByAggregation = GroupByAggregation;
    type bookingsServicesV2Service_universal_d_GroupByAggregationKindOneOf = GroupByAggregationKindOneOf;
    type bookingsServicesV2Service_universal_d_SearchDetails = SearchDetails;
    type bookingsServicesV2Service_universal_d_Mode = Mode;
    const bookingsServicesV2Service_universal_d_Mode: typeof Mode;
    type bookingsServicesV2Service_universal_d_SearchServicesResponse = SearchServicesResponse;
    type bookingsServicesV2Service_universal_d_AggregationData = AggregationData;
    type bookingsServicesV2Service_universal_d_ValueAggregationResult = ValueAggregationResult;
    type bookingsServicesV2Service_universal_d_RangeAggregationResult = RangeAggregationResult;
    type bookingsServicesV2Service_universal_d_NestedAggregationResults = NestedAggregationResults;
    type bookingsServicesV2Service_universal_d_NestedAggregationResultsResultOneOf = NestedAggregationResultsResultOneOf;
    type bookingsServicesV2Service_universal_d_ValueResults = ValueResults;
    type bookingsServicesV2Service_universal_d_RangeResults = RangeResults;
    type bookingsServicesV2Service_universal_d_ScalarResult = ScalarResult;
    type bookingsServicesV2Service_universal_d_NestedValueAggregationResult = NestedValueAggregationResult;
    type bookingsServicesV2Service_universal_d_ValueResult = ValueResult;
    type bookingsServicesV2Service_universal_d_RangeResult = RangeResult;
    type bookingsServicesV2Service_universal_d_NestedResultsScalarResult = NestedResultsScalarResult;
    type bookingsServicesV2Service_universal_d_NestedResultValue = NestedResultValue;
    type bookingsServicesV2Service_universal_d_NestedResultValueResultOneOf = NestedResultValueResultOneOf;
    type bookingsServicesV2Service_universal_d_Results = Results;
    type bookingsServicesV2Service_universal_d_DateHistogramResult = DateHistogramResult;
    type bookingsServicesV2Service_universal_d_GroupByValueResults = GroupByValueResults;
    type bookingsServicesV2Service_universal_d_DateHistogramResults = DateHistogramResults;
    type bookingsServicesV2Service_universal_d_NestedResults = NestedResults;
    type bookingsServicesV2Service_universal_d_AggregationResults = AggregationResults;
    type bookingsServicesV2Service_universal_d_AggregationResultsResultOneOf = AggregationResultsResultOneOf;
    type bookingsServicesV2Service_universal_d_QueryPoliciesRequest = QueryPoliciesRequest;
    type bookingsServicesV2Service_universal_d_QueryPoliciesResponse = QueryPoliciesResponse;
    type bookingsServicesV2Service_universal_d_BookingPolicyWithServices = BookingPolicyWithServices;
    type bookingsServicesV2Service_universal_d_CountServicesRequest = CountServicesRequest;
    type bookingsServicesV2Service_universal_d_CountServicesResponse = CountServicesResponse;
    type bookingsServicesV2Service_universal_d_CategoryNotification = CategoryNotification;
    type bookingsServicesV2Service_universal_d_Category = Category;
    type bookingsServicesV2Service_universal_d_Event = Event;
    const bookingsServicesV2Service_universal_d_Event: typeof Event;
    type bookingsServicesV2Service_universal_d_V1Schedule = V1Schedule;
    type bookingsServicesV2Service_universal_d_V1Location = V1Location;
    type bookingsServicesV2Service_universal_d_CommonAddress = CommonAddress;
    type bookingsServicesV2Service_universal_d_CommonAddressStreetOneOf = CommonAddressStreetOneOf;
    type bookingsServicesV2Service_universal_d_CommonStreetAddress = CommonStreetAddress;
    type bookingsServicesV2Service_universal_d_CommonAddressLocation = CommonAddressLocation;
    type bookingsServicesV2Service_universal_d_V1AvailabilityConstraints = V1AvailabilityConstraints;
    type bookingsServicesV2Service_universal_d_SessionStatus = SessionStatus;
    const bookingsServicesV2Service_universal_d_SessionStatus: typeof SessionStatus;
    type bookingsServicesV2Service_universal_d_V1ParticipantNotification = V1ParticipantNotification;
    type bookingsServicesV2Service_universal_d_ResourceNotification = ResourceNotification;
    type bookingsServicesV2Service_universal_d_ResourceStatus = ResourceStatus;
    const bookingsServicesV2Service_universal_d_ResourceStatus: typeof ResourceStatus;
    type bookingsServicesV2Service_universal_d_BusinessLocation = BusinessLocation;
    type bookingsServicesV2Service_universal_d_ResourceNotificationEvent = ResourceNotificationEvent;
    const bookingsServicesV2Service_universal_d_ResourceNotificationEvent: typeof ResourceNotificationEvent;
    type bookingsServicesV2Service_universal_d_BenefitNotification = BenefitNotification;
    type bookingsServicesV2Service_universal_d_Benefit = Benefit;
    type bookingsServicesV2Service_universal_d_EntryPass = EntryPass;
    type bookingsServicesV2Service_universal_d_Discount = Discount;
    type bookingsServicesV2Service_universal_d_DiscountDiscountOneOf = DiscountDiscountOneOf;
    type bookingsServicesV2Service_universal_d_BenefitType = BenefitType;
    const bookingsServicesV2Service_universal_d_BenefitType: typeof BenefitType;
    type bookingsServicesV2Service_universal_d_Behavior = Behavior;
    type bookingsServicesV2Service_universal_d_BehaviorBehaviorOneOf = BehaviorBehaviorOneOf;
    type bookingsServicesV2Service_universal_d_BenefitNotificationEvent = BenefitNotificationEvent;
    const bookingsServicesV2Service_universal_d_BenefitNotificationEvent: typeof BenefitNotificationEvent;
    type bookingsServicesV2Service_universal_d_UserDomainInfoChangedEvent = UserDomainInfoChangedEvent;
    type bookingsServicesV2Service_universal_d_CrudType = CrudType;
    const bookingsServicesV2Service_universal_d_CrudType: typeof CrudType;
    type bookingsServicesV2Service_universal_d_HtmlSitePublished = HtmlSitePublished;
    type bookingsServicesV2Service_universal_d_Page = Page;
    type bookingsServicesV2Service_universal_d_SitePropertiesNotification = SitePropertiesNotification;
    type bookingsServicesV2Service_universal_d_SitePropertiesEvent = SitePropertiesEvent;
    type bookingsServicesV2Service_universal_d_Properties = Properties;
    type bookingsServicesV2Service_universal_d_Categories = Categories;
    type bookingsServicesV2Service_universal_d_Locale = Locale;
    type bookingsServicesV2Service_universal_d_V4Address = V4Address;
    type bookingsServicesV2Service_universal_d_AddressHint = AddressHint;
    type bookingsServicesV2Service_universal_d_PlacementType = PlacementType;
    const bookingsServicesV2Service_universal_d_PlacementType: typeof PlacementType;
    type bookingsServicesV2Service_universal_d_GeoCoordinates = GeoCoordinates;
    type bookingsServicesV2Service_universal_d_Multilingual = Multilingual;
    type bookingsServicesV2Service_universal_d_SupportedLanguage = SupportedLanguage;
    type bookingsServicesV2Service_universal_d_ResolutionMethod = ResolutionMethod;
    const bookingsServicesV2Service_universal_d_ResolutionMethod: typeof ResolutionMethod;
    type bookingsServicesV2Service_universal_d_ConsentPolicy = ConsentPolicy;
    type bookingsServicesV2Service_universal_d_Translation = Translation;
    type bookingsServicesV2Service_universal_d_ChangeContext = ChangeContext;
    type bookingsServicesV2Service_universal_d_ChangeContextPayloadOneOf = ChangeContextPayloadOneOf;
    type bookingsServicesV2Service_universal_d_PropertiesChange = PropertiesChange;
    type bookingsServicesV2Service_universal_d_SiteCreated = SiteCreated;
    type bookingsServicesV2Service_universal_d_SiteCloned = SiteCloned;
    type bookingsServicesV2Service_universal_d_SetServiceLocationsRequest = SetServiceLocationsRequest;
    type bookingsServicesV2Service_universal_d_RemovedLocationSessionsAction = RemovedLocationSessionsAction;
    type bookingsServicesV2Service_universal_d_RemovedLocationSessionsActionActionOptionsOneOf = RemovedLocationSessionsActionActionOptionsOneOf;
    type bookingsServicesV2Service_universal_d_Action = Action;
    const bookingsServicesV2Service_universal_d_Action: typeof Action;
    type bookingsServicesV2Service_universal_d_MoveToNewLocationsOptions = MoveToNewLocationsOptions;
    type bookingsServicesV2Service_universal_d_SetServiceLocationsResponse = SetServiceLocationsResponse;
    type bookingsServicesV2Service_universal_d_EnablePricingPlansForServiceRequest = EnablePricingPlansForServiceRequest;
    type bookingsServicesV2Service_universal_d_EnablePricingPlansForServiceResponse = EnablePricingPlansForServiceResponse;
    type bookingsServicesV2Service_universal_d_InvalidPricingPlan = InvalidPricingPlan;
    type bookingsServicesV2Service_universal_d_DisablePricingPlansForServiceRequest = DisablePricingPlansForServiceRequest;
    type bookingsServicesV2Service_universal_d_DisablePricingPlansForServiceResponse = DisablePricingPlansForServiceResponse;
    type bookingsServicesV2Service_universal_d_SetCustomSlugRequest = SetCustomSlugRequest;
    type bookingsServicesV2Service_universal_d_SetCustomSlugResponse = SetCustomSlugResponse;
    type bookingsServicesV2Service_universal_d_ValidateSlugRequest = ValidateSlugRequest;
    type bookingsServicesV2Service_universal_d_ValidateSlugResponse = ValidateSlugResponse;
    type bookingsServicesV2Service_universal_d_InvalidSlugError = InvalidSlugError;
    const bookingsServicesV2Service_universal_d_InvalidSlugError: typeof InvalidSlugError;
    type bookingsServicesV2Service_universal_d_CloneServiceRequest = CloneServiceRequest;
    type bookingsServicesV2Service_universal_d_CloneServiceResponse = CloneServiceResponse;
    type bookingsServicesV2Service_universal_d_CloneErrors = CloneErrors;
    const bookingsServicesV2Service_universal_d_CloneErrors: typeof CloneErrors;
    type bookingsServicesV2Service_universal_d_MultiServiceEnabledNotification = MultiServiceEnabledNotification;
    const bookingsServicesV2Service_universal_d_createService: typeof createService;
    type bookingsServicesV2Service_universal_d_BulkCreateServicesOptions = BulkCreateServicesOptions;
    const bookingsServicesV2Service_universal_d_getService: typeof getService;
    type bookingsServicesV2Service_universal_d_GetServiceOptions = GetServiceOptions;
    const bookingsServicesV2Service_universal_d_updateService: typeof updateService;
    type bookingsServicesV2Service_universal_d_UpdateService = UpdateService;
    type bookingsServicesV2Service_universal_d_UpdateServiceOptions = UpdateServiceOptions;
    type bookingsServicesV2Service_universal_d_BulkUpdateServicesOptions = BulkUpdateServicesOptions;
    const bookingsServicesV2Service_universal_d_deleteService: typeof deleteService;
    type bookingsServicesV2Service_universal_d_DeleteServiceOptions = DeleteServiceOptions;
    type bookingsServicesV2Service_universal_d_BulkDeleteServicesOptions = BulkDeleteServicesOptions;
    const bookingsServicesV2Service_universal_d_queryServices: typeof queryServices;
    type bookingsServicesV2Service_universal_d_QueryServicesOptions = QueryServicesOptions;
    type bookingsServicesV2Service_universal_d_ServicesQueryResult = ServicesQueryResult;
    type bookingsServicesV2Service_universal_d_ServicesQueryBuilder = ServicesQueryBuilder;
    type bookingsServicesV2Service_universal_d_CountServicesOptions = CountServicesOptions;
    type bookingsServicesV2Service_universal_d_SetServiceLocationsOptions = SetServiceLocationsOptions;
    type bookingsServicesV2Service_universal_d_DisablePricingPlansForServiceOptions = DisablePricingPlansForServiceOptions;
    type bookingsServicesV2Service_universal_d_ValidateSlugOptions = ValidateSlugOptions;
    type bookingsServicesV2Service_universal_d_CloneServiceOptions = CloneServiceOptions;
    namespace bookingsServicesV2Service_universal_d {
        export { bookingsServicesV2Service_universal_d_Service as Service, bookingsServicesV2Service_universal_d_ServiceType as ServiceType, bookingsServicesV2Service_universal_d_Media as Media, MediaItem$1 as MediaItem, bookingsServicesV2Service_universal_d_MediaItemItemOneOf as MediaItemItemOneOf, bookingsServicesV2Service_universal_d_V2Category as V2Category, bookingsServicesV2Service_universal_d_Form as Form, bookingsServicesV2Service_universal_d_FormSettings as FormSettings, bookingsServicesV2Service_universal_d_Payment as Payment, bookingsServicesV2Service_universal_d_PaymentRateOneOf as PaymentRateOneOf, bookingsServicesV2Service_universal_d_RateType as RateType, bookingsServicesV2Service_universal_d_FixedPayment as FixedPayment, bookingsServicesV2Service_universal_d_Money as Money, bookingsServicesV2Service_universal_d_CustomPayment as CustomPayment, bookingsServicesV2Service_universal_d_VariedPayment as VariedPayment, bookingsServicesV2Service_universal_d_PaymentOptions as PaymentOptions, bookingsServicesV2Service_universal_d_OnlineBooking as OnlineBooking, bookingsServicesV2Service_universal_d_Conferencing as Conferencing, Location$3 as Location, bookingsServicesV2Service_universal_d_LocationOptionsOneOf as LocationOptionsOneOf, LocationType$3 as LocationType, Address$3 as Address, AddressStreetOneOf$3 as AddressStreetOneOf, StreetAddress$3 as StreetAddress, AddressLocation$3 as AddressLocation, bookingsServicesV2Service_universal_d_BusinessLocationOptions as BusinessLocationOptions, bookingsServicesV2Service_universal_d_CustomLocationOptions as CustomLocationOptions, bookingsServicesV2Service_universal_d_BookingPolicy as BookingPolicy, bookingsServicesV2Service_universal_d_PolicyDescription as PolicyDescription, bookingsServicesV2Service_universal_d_LimitEarlyBookingPolicy as LimitEarlyBookingPolicy, bookingsServicesV2Service_universal_d_LimitLateBookingPolicy as LimitLateBookingPolicy, bookingsServicesV2Service_universal_d_BookAfterStartPolicy as BookAfterStartPolicy, bookingsServicesV2Service_universal_d_CancellationPolicy as CancellationPolicy, bookingsServicesV2Service_universal_d_ReschedulePolicy as ReschedulePolicy, bookingsServicesV2Service_universal_d_WaitlistPolicy as WaitlistPolicy, bookingsServicesV2Service_universal_d_ParticipantsPolicy as ParticipantsPolicy, bookingsServicesV2Service_universal_d_ResourcesPolicy as ResourcesPolicy, Schedule$1 as Schedule, AvailabilityConstraints$1 as AvailabilityConstraints, StaffMember$1 as StaffMember, bookingsServicesV2Service_universal_d_ResourceGroup as ResourceGroup, bookingsServicesV2Service_universal_d_ResourceIds as ResourceIds, bookingsServicesV2Service_universal_d_ServiceResource as ServiceResource, bookingsServicesV2Service_universal_d_ServiceResourceSelectionOneOf as ServiceResourceSelectionOneOf, bookingsServicesV2Service_universal_d_ResourceType as ResourceType, bookingsServicesV2Service_universal_d_Slug as Slug, bookingsServicesV2Service_universal_d_URLs as URLs, ExtendedFields$3 as ExtendedFields, bookingsServicesV2Service_universal_d_SeoSchema as SeoSchema, bookingsServicesV2Service_universal_d_Keyword as Keyword, bookingsServicesV2Service_universal_d_Tag as Tag, bookingsServicesV2Service_universal_d_Settings as Settings, bookingsServicesV2Service_universal_d_ReindexMessage as ReindexMessage, bookingsServicesV2Service_universal_d_ReindexMessageActionOneOf as ReindexMessageActionOneOf, bookingsServicesV2Service_universal_d_Upsert as Upsert, bookingsServicesV2Service_universal_d_Delete as Delete, bookingsServicesV2Service_universal_d_Schema as Schema, bookingsServicesV2Service_universal_d_SetCustomSlugEvent as SetCustomSlugEvent, bookingsServicesV2Service_universal_d_CreateServiceRequest as CreateServiceRequest, bookingsServicesV2Service_universal_d_CreateServiceResponse as CreateServiceResponse, bookingsServicesV2Service_universal_d_BulkCreateServicesRequest as BulkCreateServicesRequest, bookingsServicesV2Service_universal_d_BulkCreateServicesResponse as BulkCreateServicesResponse, bookingsServicesV2Service_universal_d_BulkServiceResult as BulkServiceResult, ItemMetadata$2 as ItemMetadata, ApplicationError$2 as ApplicationError, BulkActionMetadata$2 as BulkActionMetadata, bookingsServicesV2Service_universal_d_GetServiceRequest as GetServiceRequest, RequestedFields$1 as RequestedFields, bookingsServicesV2Service_universal_d_GetServiceResponse as GetServiceResponse, bookingsServicesV2Service_universal_d_GetServiceAvailabilityConstraintsRequest as GetServiceAvailabilityConstraintsRequest, bookingsServicesV2Service_universal_d_GetServiceAvailabilityConstraintsResponse as GetServiceAvailabilityConstraintsResponse, bookingsServicesV2Service_universal_d_ServiceAvailabilityConstraints as ServiceAvailabilityConstraints, bookingsServicesV2Service_universal_d_V1SplitInterval as V1SplitInterval, bookingsServicesV2Service_universal_d_UpdateServiceRequest as UpdateServiceRequest, bookingsServicesV2Service_universal_d_UpdateServiceResponse as UpdateServiceResponse, bookingsServicesV2Service_universal_d_BulkUpdateServicesRequest as BulkUpdateServicesRequest, bookingsServicesV2Service_universal_d_MaskedService as MaskedService, bookingsServicesV2Service_universal_d_BulkUpdateServicesResponse as BulkUpdateServicesResponse, bookingsServicesV2Service_universal_d_DeleteServiceRequest as DeleteServiceRequest, ParticipantNotification$3 as ParticipantNotification, bookingsServicesV2Service_universal_d_DeleteServiceResponse as DeleteServiceResponse, bookingsServicesV2Service_universal_d_BulkDeleteServicesRequest as BulkDeleteServicesRequest, bookingsServicesV2Service_universal_d_BulkDeleteServicesResponse as BulkDeleteServicesResponse, bookingsServicesV2Service_universal_d_QueryServicesRequest as QueryServicesRequest, QueryV2$2 as QueryV2, QueryV2PagingMethodOneOf$2 as QueryV2PagingMethodOneOf, Sorting$3 as Sorting, SortOrder$3 as SortOrder, Paging$2 as Paging, CursorPaging$3 as CursorPaging, bookingsServicesV2Service_universal_d_QueryServicesResponse as QueryServicesResponse, PagingMetadataV2$1 as PagingMetadataV2, Cursors$3 as Cursors, bookingsServicesV2Service_universal_d_SearchServicesRequest as SearchServicesRequest, bookingsServicesV2Service_universal_d_CursorSearch as CursorSearch, bookingsServicesV2Service_universal_d_CursorSearchPagingMethodOneOf as CursorSearchPagingMethodOneOf, bookingsServicesV2Service_universal_d_Aggregation as Aggregation, bookingsServicesV2Service_universal_d_AggregationKindOneOf as AggregationKindOneOf, bookingsServicesV2Service_universal_d_RangeBucket as RangeBucket, bookingsServicesV2Service_universal_d_SortType as SortType, bookingsServicesV2Service_universal_d_SortDirection as SortDirection, bookingsServicesV2Service_universal_d_MissingValues as MissingValues, bookingsServicesV2Service_universal_d_IncludeMissingValuesOptions as IncludeMissingValuesOptions, bookingsServicesV2Service_universal_d_ScalarType as ScalarType, bookingsServicesV2Service_universal_d_ValueAggregation as ValueAggregation, bookingsServicesV2Service_universal_d_ValueAggregationOptionsOneOf as ValueAggregationOptionsOneOf, bookingsServicesV2Service_universal_d_NestedAggregationType as NestedAggregationType, bookingsServicesV2Service_universal_d_RangeAggregation as RangeAggregation, bookingsServicesV2Service_universal_d_ScalarAggregation as ScalarAggregation, bookingsServicesV2Service_universal_d_DateHistogramAggregation as DateHistogramAggregation, bookingsServicesV2Service_universal_d_DateHistogramAggregationInterval as DateHistogramAggregationInterval, bookingsServicesV2Service_universal_d_NestedAggregationItem as NestedAggregationItem, bookingsServicesV2Service_universal_d_NestedAggregationItemKindOneOf as NestedAggregationItemKindOneOf, bookingsServicesV2Service_universal_d_AggregationType as AggregationType, bookingsServicesV2Service_universal_d_NestedAggregation as NestedAggregation, bookingsServicesV2Service_universal_d_GroupByAggregation as GroupByAggregation, bookingsServicesV2Service_universal_d_GroupByAggregationKindOneOf as GroupByAggregationKindOneOf, bookingsServicesV2Service_universal_d_SearchDetails as SearchDetails, bookingsServicesV2Service_universal_d_Mode as Mode, bookingsServicesV2Service_universal_d_SearchServicesResponse as SearchServicesResponse, CursorPagingMetadata$2 as CursorPagingMetadata, bookingsServicesV2Service_universal_d_AggregationData as AggregationData, bookingsServicesV2Service_universal_d_ValueAggregationResult as ValueAggregationResult, bookingsServicesV2Service_universal_d_RangeAggregationResult as RangeAggregationResult, bookingsServicesV2Service_universal_d_NestedAggregationResults as NestedAggregationResults, bookingsServicesV2Service_universal_d_NestedAggregationResultsResultOneOf as NestedAggregationResultsResultOneOf, bookingsServicesV2Service_universal_d_ValueResults as ValueResults, bookingsServicesV2Service_universal_d_RangeResults as RangeResults, bookingsServicesV2Service_universal_d_ScalarResult as ScalarResult, bookingsServicesV2Service_universal_d_NestedValueAggregationResult as NestedValueAggregationResult, bookingsServicesV2Service_universal_d_ValueResult as ValueResult, bookingsServicesV2Service_universal_d_RangeResult as RangeResult, bookingsServicesV2Service_universal_d_NestedResultsScalarResult as NestedResultsScalarResult, bookingsServicesV2Service_universal_d_NestedResultValue as NestedResultValue, bookingsServicesV2Service_universal_d_NestedResultValueResultOneOf as NestedResultValueResultOneOf, bookingsServicesV2Service_universal_d_Results as Results, bookingsServicesV2Service_universal_d_DateHistogramResult as DateHistogramResult, bookingsServicesV2Service_universal_d_GroupByValueResults as GroupByValueResults, bookingsServicesV2Service_universal_d_DateHistogramResults as DateHistogramResults, bookingsServicesV2Service_universal_d_NestedResults as NestedResults, bookingsServicesV2Service_universal_d_AggregationResults as AggregationResults, bookingsServicesV2Service_universal_d_AggregationResultsResultOneOf as AggregationResultsResultOneOf, bookingsServicesV2Service_universal_d_QueryPoliciesRequest as QueryPoliciesRequest, CursorQuery$1 as CursorQuery, CursorQueryPagingMethodOneOf$1 as CursorQueryPagingMethodOneOf, bookingsServicesV2Service_universal_d_QueryPoliciesResponse as QueryPoliciesResponse, bookingsServicesV2Service_universal_d_BookingPolicyWithServices as BookingPolicyWithServices, bookingsServicesV2Service_universal_d_CountServicesRequest as CountServicesRequest, bookingsServicesV2Service_universal_d_CountServicesResponse as CountServicesResponse, bookingsServicesV2Service_universal_d_CategoryNotification as CategoryNotification, bookingsServicesV2Service_universal_d_Category as Category, Status$1 as Status, bookingsServicesV2Service_universal_d_Event as Event, Empty$1 as Empty, DomainEvent$3 as DomainEvent, DomainEventBodyOneOf$3 as DomainEventBodyOneOf, EntityCreatedEvent$3 as EntityCreatedEvent, EntityUpdatedEvent$3 as EntityUpdatedEvent, EntityDeletedEvent$3 as EntityDeletedEvent, ActionEvent$3 as ActionEvent, ScheduleNotification$1 as ScheduleNotification, ScheduleNotificationEventOneOf$1 as ScheduleNotificationEventOneOf, ScheduleCreated$1 as ScheduleCreated, bookingsServicesV2Service_universal_d_V1Schedule as V1Schedule, RecurringInterval$1 as RecurringInterval, Interval$1 as Interval, Day$1 as Day, Frequency$1 as Frequency, LinkedSchedule$1 as LinkedSchedule, Transparency$1 as Transparency, RecurringIntervalType$1 as RecurringIntervalType, bookingsServicesV2Service_universal_d_V1Location as V1Location, LocationLocationType$1 as LocationLocationType, bookingsServicesV2Service_universal_d_CommonAddress as CommonAddress, bookingsServicesV2Service_universal_d_CommonAddressStreetOneOf as CommonAddressStreetOneOf, bookingsServicesV2Service_universal_d_CommonStreetAddress as CommonStreetAddress, bookingsServicesV2Service_universal_d_CommonAddressLocation as CommonAddressLocation, Subdivision$3 as Subdivision, LocationsLocation$1 as LocationsLocation, LocationStatus$1 as LocationStatus, LocationsLocationType$1 as LocationsLocationType, LocationsAddress$1 as LocationsAddress, LocationsStreetAddress$1 as LocationsStreetAddress, LocationsAddressLocation$1 as LocationsAddressLocation, BusinessSchedule$1 as BusinessSchedule, TimePeriod$1 as TimePeriod, DayOfWeek$1 as DayOfWeek, SpecialHourPeriod$1 as SpecialHourPeriod, Rate$1 as Rate, Price$1 as Price, Availability$1 as Availability, bookingsServicesV2Service_universal_d_V1AvailabilityConstraints as V1AvailabilityConstraints, SplitInterval$1 as SplitInterval, Participant$1 as Participant, ApprovalStatus$1 as ApprovalStatus, ExternalCalendarOverrides$1 as ExternalCalendarOverrides, ScheduleStatus$1 as ScheduleStatus, Version$1 as Version, ConferenceProvider$1 as ConferenceProvider, CalendarConference$1 as CalendarConference, ConferenceType$1 as ConferenceType, ScheduleUpdated$1 as ScheduleUpdated, RecurringSessionsUpdated$1 as RecurringSessionsUpdated, Session$1 as Session, CalendarDateTime$1 as CalendarDateTime, LocalDateTime$1 as LocalDateTime, ExternalCalendarInfo$1 as ExternalCalendarInfo, CalendarType$1 as CalendarType, bookingsServicesV2Service_universal_d_SessionStatus as SessionStatus, SessionType$1 as SessionType, SessionVersion$1 as SessionVersion, bookingsServicesV2Service_universal_d_V1ParticipantNotification as V1ParticipantNotification, ScheduleCancelled$1 as ScheduleCancelled, SessionCreated$1 as SessionCreated, SessionUpdated$1 as SessionUpdated, SessionCancelled$1 as SessionCancelled, AvailabilityPolicyUpdated$1 as AvailabilityPolicyUpdated, AvailabilityPolicy$1 as AvailabilityPolicy, IntervalSplit$1 as IntervalSplit, RecurringSessionSplit$1 as RecurringSessionSplit, ScheduleUnassignedFromUser$1 as ScheduleUnassignedFromUser, MultipleSessionsCreated$1 as MultipleSessionsCreated, ScheduleWithSessions$1 as ScheduleWithSessions, SitePropertiesOnScheduleCreation$1 as SitePropertiesOnScheduleCreation, MigrationEvent$1 as MigrationEvent, MigrationData$1 as MigrationData, StaffData$1 as StaffData, bookingsServicesV2Service_universal_d_ResourceNotification as ResourceNotification, Resource$1 as Resource, bookingsServicesV2Service_universal_d_ResourceStatus as ResourceStatus, bookingsServicesV2Service_universal_d_BusinessLocation as BusinessLocation, bookingsServicesV2Service_universal_d_ResourceNotificationEvent as ResourceNotificationEvent, bookingsServicesV2Service_universal_d_BenefitNotification as BenefitNotification, bookingsServicesV2Service_universal_d_Benefit as Benefit, bookingsServicesV2Service_universal_d_EntryPass as EntryPass, bookingsServicesV2Service_universal_d_Discount as Discount, bookingsServicesV2Service_universal_d_DiscountDiscountOneOf as DiscountDiscountOneOf, bookingsServicesV2Service_universal_d_BenefitType as BenefitType, bookingsServicesV2Service_universal_d_Behavior as Behavior, bookingsServicesV2Service_universal_d_BehaviorBehaviorOneOf as BehaviorBehaviorOneOf, bookingsServicesV2Service_universal_d_BenefitNotificationEvent as BenefitNotificationEvent, bookingsServicesV2Service_universal_d_UserDomainInfoChangedEvent as UserDomainInfoChangedEvent, bookingsServicesV2Service_universal_d_CrudType as CrudType, bookingsServicesV2Service_universal_d_HtmlSitePublished as HtmlSitePublished, bookingsServicesV2Service_universal_d_Page as Page, bookingsServicesV2Service_universal_d_SitePropertiesNotification as SitePropertiesNotification, bookingsServicesV2Service_universal_d_SitePropertiesEvent as SitePropertiesEvent, bookingsServicesV2Service_universal_d_Properties as Properties, bookingsServicesV2Service_universal_d_Categories as Categories, bookingsServicesV2Service_universal_d_Locale as Locale, bookingsServicesV2Service_universal_d_V4Address as V4Address, bookingsServicesV2Service_universal_d_AddressHint as AddressHint, bookingsServicesV2Service_universal_d_PlacementType as PlacementType, bookingsServicesV2Service_universal_d_GeoCoordinates as GeoCoordinates, bookingsServicesV2Service_universal_d_Multilingual as Multilingual, bookingsServicesV2Service_universal_d_SupportedLanguage as SupportedLanguage, bookingsServicesV2Service_universal_d_ResolutionMethod as ResolutionMethod, bookingsServicesV2Service_universal_d_ConsentPolicy as ConsentPolicy, bookingsServicesV2Service_universal_d_Translation as Translation, bookingsServicesV2Service_universal_d_ChangeContext as ChangeContext, bookingsServicesV2Service_universal_d_ChangeContextPayloadOneOf as ChangeContextPayloadOneOf, bookingsServicesV2Service_universal_d_PropertiesChange as PropertiesChange, bookingsServicesV2Service_universal_d_SiteCreated as SiteCreated, bookingsServicesV2Service_universal_d_SiteCloned as SiteCloned, bookingsServicesV2Service_universal_d_SetServiceLocationsRequest as SetServiceLocationsRequest, bookingsServicesV2Service_universal_d_RemovedLocationSessionsAction as RemovedLocationSessionsAction, bookingsServicesV2Service_universal_d_RemovedLocationSessionsActionActionOptionsOneOf as RemovedLocationSessionsActionActionOptionsOneOf, bookingsServicesV2Service_universal_d_Action as Action, bookingsServicesV2Service_universal_d_MoveToNewLocationsOptions as MoveToNewLocationsOptions, bookingsServicesV2Service_universal_d_SetServiceLocationsResponse as SetServiceLocationsResponse, bookingsServicesV2Service_universal_d_EnablePricingPlansForServiceRequest as EnablePricingPlansForServiceRequest, bookingsServicesV2Service_universal_d_EnablePricingPlansForServiceResponse as EnablePricingPlansForServiceResponse, bookingsServicesV2Service_universal_d_InvalidPricingPlan as InvalidPricingPlan, bookingsServicesV2Service_universal_d_DisablePricingPlansForServiceRequest as DisablePricingPlansForServiceRequest, bookingsServicesV2Service_universal_d_DisablePricingPlansForServiceResponse as DisablePricingPlansForServiceResponse, bookingsServicesV2Service_universal_d_SetCustomSlugRequest as SetCustomSlugRequest, bookingsServicesV2Service_universal_d_SetCustomSlugResponse as SetCustomSlugResponse, bookingsServicesV2Service_universal_d_ValidateSlugRequest as ValidateSlugRequest, bookingsServicesV2Service_universal_d_ValidateSlugResponse as ValidateSlugResponse, bookingsServicesV2Service_universal_d_InvalidSlugError as InvalidSlugError, bookingsServicesV2Service_universal_d_CloneServiceRequest as CloneServiceRequest, bookingsServicesV2Service_universal_d_CloneServiceResponse as CloneServiceResponse, bookingsServicesV2Service_universal_d_CloneErrors as CloneErrors, bookingsServicesV2Service_universal_d_MultiServiceEnabledNotification as MultiServiceEnabledNotification, bookingsServicesV2Service_universal_d_createService as createService, bookingsServicesV2Service_universal_d_BulkCreateServicesOptions as BulkCreateServicesOptions, bookingsServicesV2Service_universal_d_getService as getService, bookingsServicesV2Service_universal_d_GetServiceOptions as GetServiceOptions, bookingsServicesV2Service_universal_d_updateService as updateService, bookingsServicesV2Service_universal_d_UpdateService as UpdateService, bookingsServicesV2Service_universal_d_UpdateServiceOptions as UpdateServiceOptions, bookingsServicesV2Service_universal_d_BulkUpdateServicesOptions as BulkUpdateServicesOptions, bookingsServicesV2Service_universal_d_deleteService as deleteService, bookingsServicesV2Service_universal_d_DeleteServiceOptions as DeleteServiceOptions, bookingsServicesV2Service_universal_d_BulkDeleteServicesOptions as BulkDeleteServicesOptions, bookingsServicesV2Service_universal_d_queryServices as queryServices, bookingsServicesV2Service_universal_d_QueryServicesOptions as QueryServicesOptions, bookingsServicesV2Service_universal_d_ServicesQueryResult as ServicesQueryResult, bookingsServicesV2Service_universal_d_ServicesQueryBuilder as ServicesQueryBuilder, bookingsServicesV2Service_universal_d_CountServicesOptions as CountServicesOptions, bookingsServicesV2Service_universal_d_SetServiceLocationsOptions as SetServiceLocationsOptions, bookingsServicesV2Service_universal_d_DisablePricingPlansForServiceOptions as DisablePricingPlansForServiceOptions, bookingsServicesV2Service_universal_d_ValidateSlugOptions as ValidateSlugOptions, bookingsServicesV2Service_universal_d_CloneServiceOptions as CloneServiceOptions, };
    }
    /** StaffMember is the main entity of Bookings StaffMembers. used to manage staff providing services */
    interface StaffMember {
        /**
         * StaffMember ID
         * @readonly
         */
        _id?: string | null;
        /** Staff member's name. */
        name?: string | null;
        /** Staff member's email address. */
        email?: string | null;
        /** Staff member's phone number. */
        phone?: string | null;
        /** Description, For example: "The best masseuse in all of the land" */
        description?: string | null;
        /** Main media of the staff */
        mainMedia?: MediaItem;
        /**
         * The related calendar resource id, same as `resource.id`
         * @readonly
         */
        resourceId?: string | null;
        /**
         * The related calendar resource
         * @readonly
         */
        resource?: Resource;
        /**
         * Wix user details, if the resource is associated with the Wix user.
         * A staff member resource can be associated with a Wix user via assignment of a permissions role in the business manager.
         * @readonly
         */
        associatedWixIdentity?: AssociatedWixIdentity;
        /**
         * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision
         * @readonly
         */
        revision?: string | null;
        /**
         * Represents the time this StaffMember was created
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Represents the time this StaffMember was last updated
         * @readonly
         */
        _updatedDate?: Date;
        /** Extensions enabling users to save custom data related to the staff members. */
        extendedFields?: ExtendedFields$2;
    }
    interface MediaItem extends MediaItemMediaOneOf {
        /** Staff members cover image. */
        image?: string;
    }
    /** @oneof */
    interface MediaItemMediaOneOf {
        /** Staff members cover image. */
        image?: string;
    }
    interface Resource {
        /** The related calendar resource id, same as `resourceId`. */
        _id?: string | null;
        /** this schedule contains the sessions in which this resource is available for booking. */
        workingHoursSchedules?: WorkingHoursSchedule[];
        /** this schedule contains the sessions in which this resource is booked. */
        eventsSchedule?: EventSchedule;
        /** True if any `resource.workingHoursSchedules.shared` is true */
        usesDefaultWorkingHours?: boolean;
    }
    interface WorkingHoursSchedule {
        /** The related schedule ID */
        _id?: string | null;
        /** `true` if it is a shared schedule (e.g. from a business or location), `false` or empty if this is a custom schedule specific to the resource. */
        shared?: boolean;
    }
    interface EventSchedule {
        /** The related schedule ID */
        _id?: string | null;
    }
    /** A staff member resource can be associated with a Wix user via assignment of a permissions role in the business manager. */
    interface AssociatedWixIdentity {
        /** Users identification data, if the resource is associated with the user. */
        identificationData?: IdentificationData$2;
        /**
         * Staff members connection status to the user.
         * @readonly
         */
        connectionStatus?: AssociatedWixIdentityConnectionStatusEnumConnectionStatus;
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
        /** ID of of a contact in the site's [CRM by Ascend](https://www.wix.com/ascend/crm) system. */
        contactId?: string | null;
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
    enum IdentityType$2 {
        UNKNOWN = "UNKNOWN",
        ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
        MEMBER = "MEMBER",
        WIX_USER = "WIX_USER",
        APP = "APP"
    }
    enum AssociatedWixIdentityConnectionStatusEnumConnectionStatus {
        /** User connection status is unknown. Only returned when conditional field for status is not selected. */
        UNKNOWN = "UNKNOWN",
        /** User is connected to the staff member. */
        CONNECTED = "CONNECTED",
        /** User connection is pending. */
        PENDING = "PENDING",
        /** Pending connections invite has expired. */
        EXPIRED = "EXPIRED",
        /** User is disconnected from the staff member. */
        DISCONNECTED = "DISCONNECTED"
    }
    interface AssociatedConferencingProviders {
        /** Conferencing accounts that are connected to this staff. */
        items?: AssociatedConferencingProvider[];
    }
    interface AssociatedConferencingProvider {
        /** Conferencing provider id, e.g. Zoom integration identifier. */
        _id?: string;
        /** Provider name, e.g. Zoom. */
        name?: string;
        /** Connection status. */
        connectionStatus?: ConnectionStatus;
        /** Conferencing account email. Might not match staff email. */
        accountEmail?: string | null;
    }
    enum ConnectionStatus {
        UNKNOWN = "UNKNOWN",
        /** Provider is connected to site and user is authenticated. */
        CONNECTED = "CONNECTED",
        /** Provider is not connected to site or user is not authenticated. */
        DISCONNECTED = "DISCONNECTED"
    }
    interface ExtendedFields$2 {
        /**
         * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
         * The value of each key is structured according to the schema defined when the extended fields were configured.
         *
         * You can only access fields for which you have the appropriate permissions.
         *
         * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
         */
        namespaces?: Record<string, Record<string, any>>;
    }
    interface CreateStaffMemberRequest {
        /** StaffMember to be created. */
        staffMember: StaffMember;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    enum RequestedFields {
        UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
        /** Fields inside `resource` */
        RESOURCE_DETAILS = "RESOURCE_DETAILS",
        /** Fields inside `associatedConferencingProviders` */
        ASSOCIATED_CONFERENCING_PROVIDERS = "ASSOCIATED_CONFERENCING_PROVIDERS",
        /** `associatedWixIdentity.connectionStatus` */
        ASSOCIATED_IDENTITY_STATUS = "ASSOCIATED_IDENTITY_STATUS"
    }
    interface CreateStaffMemberResponse {
        /** The created StaffMember. */
        staffMember?: StaffMember;
    }
    interface GetStaffMemberRequest {
        /** ID of the StaffMember to retrieve. */
        staffMemberId: string;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface GetStaffMemberResponse {
        /** The requested StaffMember. */
        staffMember?: StaffMember;
    }
    interface UpdateStaffMemberRequest {
        /** StaffMember to be updated, may be partial. */
        staffMember: StaffMember;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface UpdateStaffMemberResponse {
        /** Updated StaffMember. */
        staffMember?: StaffMember;
    }
    interface DeleteStaffMemberRequest {
        /** Id of the StaffMember to delete. */
        staffMemberId: string;
    }
    interface DeleteStaffMemberResponse {
    }
    interface StaffMemberDisconnectedFromUser {
        staffMember?: StaffMember;
    }
    interface QueryStaffMembersRequest {
        /** WQL expression. */
        query?: CursorQuery;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface CursorQuery extends CursorQueryPagingMethodOneOf {
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$2;
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
        sort?: Sorting$2[];
    }
    /** @oneof */
    interface CursorQueryPagingMethodOneOf {
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$2;
    }
    interface Sorting$2 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$2;
    }
    enum SortOrder$2 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface CursorPaging$2 {
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
    interface QueryStaffMembersResponse {
        /** List of StaffMembers. */
        staffMembers?: StaffMember[];
        /** Paging metadata */
        pagingMetadata?: CursorPagingMetadata$1;
    }
    interface CursorPagingMetadata$1 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Offset that was requested. */
        cursors?: Cursors$2;
        /**
         * Indicates if there are more results after the current page.
         * If `true`, another page of results can be retrieved.
         * If `false`, this is the last page.
         */
        hasNext?: boolean | null;
    }
    interface Cursors$2 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface CountStaffMembersRequest {
        /** Filter to apply on staff members to count */
        filter?: Record<string, any> | null;
    }
    interface CountStaffMembersResponse {
        /** The number of staff members matching the given filter. */
        count?: number;
    }
    interface ConnectToUserRequest {
        /** Id of the StaffMember to connect to. */
        staffMemberId: string;
        /** Email of the user to send invitation to. The staff existing email would be used if not provided. */
        email?: string | null;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface ConnectToUserResponse {
        /** Updated StaffMember. */
        staffMember?: StaffMember;
    }
    interface StaffMemberConnectedToUser {
        staffMember?: StaffMember;
    }
    interface ConnectStaffMemberToUserRequest {
        /** Id of the StaffMember to connect to. */
        staffMemberId: string;
        /** Email of the user to send invitation to. The staff existing email would be used if not provided. */
        email?: string | null;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface ConnectStaffMemberToUserResponse {
        /** Updated StaffMember. */
        staffMember?: StaffMember;
    }
    interface DisconnectUserRequest {
        /** Id of the StaffMember to disconnect. */
        staffMemberId: string;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface DisconnectUserResponse {
        /** Updated StaffMember. */
        staffMember?: StaffMember;
    }
    interface DisconnectStaffMemberFromUserRequest {
        /** Id of the StaffMember to disconnect. */
        staffMemberId: string;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface DisconnectStaffMemberFromUserResponse {
        /** Updated StaffMember. */
        staffMember?: StaffMember;
    }
    interface AssignCustomScheduleRequest {
        /** Id of the StaffMember to assign to. */
        staffMemberId: string;
        /** Id of a schedule to assign. */
        scheduleId: string;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface AssignCustomScheduleResponse {
        /** Updated StaffMember. */
        staffMember?: StaffMember;
    }
    interface AssignBusinessScheduleRequest {
        /** Id of the StaffMember to assign to. */
        staffMemberId: string;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface AssignBusinessScheduleResponse {
        /** Updated StaffMember. */
        staffMember?: StaffMember;
    }
    interface RestoreStaffRequest {
        /** Id of the StaffMember to restore. */
        staffMemberId?: string;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface RestoreStaffResponse {
        /** Restored staff member. */
        staffMember?: StaffMember;
    }
    interface ImportStaffMemberRequest {
        /** StaffMember to be created. */
        staffMember?: StaffMember;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface ImportStaffMemberResponse {
        /** The imported StaffMember. */
        staffMember?: StaffMember;
    }
    interface Empty {
    }
    interface PolicyRemovedFromContributor {
        accountId?: string;
        metaSiteId?: string;
        policyIds?: string[];
    }
    interface PolicyUpdatedForContributor {
        accountId?: string;
        metaSiteId?: string;
        oldPolicyIds?: string[];
        newPolicyIds?: string[];
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
    }
    interface EntityUpdatedEvent$2 {
        /**
         * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
         * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
         * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
         */
        currentEntityAsJson?: string;
    }
    interface EntityDeletedEvent$2 {
        /** Entity that was deleted */
        deletedEntityAsJson?: string | null;
    }
    interface ActionEvent$2 {
        bodyAsJson?: string;
    }
    interface ScheduleNotification extends ScheduleNotificationEventOneOf {
        scheduleCreated?: ScheduleCreated;
        scheduleUpdated?: ScheduleUpdated;
        scheduleCancelled?: ScheduleCancelled;
        sessionCreated?: SessionCreated;
        sessionUpdated?: SessionUpdated;
        sessionCancelled?: SessionCancelled;
        availabilityPolicyUpdated?: AvailabilityPolicyUpdated;
        intervalSplit?: IntervalSplit;
        recurringSessionSplit?: RecurringSessionSplit;
        /** Inspect `schedule.scheduleOwnerUserId` on `scheduleUpdated` instead. */
        scheduleUnassignedFromUser?: ScheduleUnassignedFromUser;
        preserveFutureSessionsWithParticipants?: boolean | null;
        /** Whether to notify participants about changed sessions. deprecated, use participant_notification */
        notifyParticipants?: boolean;
        /** site properties. Optional. Given in create schedule notification. */
        siteProperties?: SitePropertiesOnScheduleCreation;
        instanceId?: string;
    }
    /** @oneof */
    interface ScheduleNotificationEventOneOf {
        scheduleCreated?: ScheduleCreated;
        scheduleUpdated?: ScheduleUpdated;
        scheduleCancelled?: ScheduleCancelled;
        sessionCreated?: SessionCreated;
        sessionUpdated?: SessionUpdated;
        sessionCancelled?: SessionCancelled;
        availabilityPolicyUpdated?: AvailabilityPolicyUpdated;
        intervalSplit?: IntervalSplit;
        recurringSessionSplit?: RecurringSessionSplit;
        /** Inspect `schedule.scheduleOwnerUserId` on `scheduleUpdated` instead. */
        scheduleUnassignedFromUser?: ScheduleUnassignedFromUser;
    }
    interface ScheduleCreated {
        schedule?: Schedule;
    }
    interface Schedule {
        /** Schedule ID. */
        _id?: string;
        /** ID of the schedule's owner entity. This may be a resource ID or a service ID. */
        scheduleOwnerId?: string | null;
        /**
         * Schedule's time zone in [Area/Location](https://en.wikipedia.org/wiki/Tz_database) format. Read-only.
         * Derived from the Wix Business time zone.
         * @readonly
         */
        timeZone?: string | null;
        /** Deprecated. Please use the [Sessions API](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/session) instead. */
        intervals?: RecurringInterval[];
        /** Default title for the schedule's sessions. Maximum length: 6000 characters. */
        title?: string | null;
        /**
         * __Deprecated.__
         * Tags for grouping schedules. These tags are the default tags for the schedule's sessions.
         * The Wix Bookings app uses the following predefined tags to set schedule type: `"INDIVIDUAL"`, `"GROUP"`, and `"COURSE"`. Once the schedule type is set using these tags, you cannot update it. In addition to the app's tags, you can create and update your own tags.
         */
        tags?: string[] | null;
        /** Default location for the schedule's sessions. */
        location?: Location$2;
        /**
         * Maximum number of participants that can be added to the schedule's sessions.
         * Must be at most `1` for schedule whose availability is affected by another schedule. E.g, appointment schedules of the Wix Bookings app.
         */
        capacity?: number | null;
        /** Deprecated. Please use the [Booking Services V2](https://dev.wix.com/api/rest/wix-bookings/services-v2) payment instead. */
        rate?: Rate;
        /** __Deprecated.__ */
        availability?: Availability;
        /**
         * Number of participants registered to sessions in this schedule, calculated as the sum of the party sizes.
         * @readonly
         */
        totalNumberOfParticipants?: number;
        /**
         * *Partial list** of participants which are registered to sessions in this schedule.
         * Participants who are registered in the schedule are automatically registered to any session that is created for the schedule.
         * To retrieve the full list of schedule participants please use the [Query Extended Bookings API](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings).
         * @readonly
         */
        participants?: Participant[];
        /** __Deprecated.__ */
        externalCalendarOverrides?: ExternalCalendarOverrides;
        /**
         * Schedule status.
         * @readonly
         */
        status?: ScheduleStatus;
        /**
         * Schedule creation date.
         * @readonly
         */
        created?: Date;
        /**
         * Schedule last update date.
         * @readonly
         */
        updated?: Date;
        /**
         * Schedule version number, updated each time the schedule is updated.
         * @readonly
         */
        version?: number;
        /**
         * Fields which were inherited from the Business Info page under Settings in the Dashboard.
         * @readonly
         */
        inheritedFields?: string[];
        /** __Deprecated.__ */
        conferenceProvider?: ConferenceProvider;
        /**
         * A conference created for the schedule. This is used when a participant is added to a schedule.
         * **Partially deprecated.** Only `hostUrl` and `guestUrl` are to be supported.
         */
        calendarConference?: CalendarConference;
    }
    interface RecurringInterval {
        /**
         * The recurring interval identifier.
         * @readonly
         */
        _id?: string;
        /** The start time of the recurring interval. Required. */
        start?: Date;
        /** The end time of the recurring interval. Optional. Empty value indicates that there is no end time. */
        end?: Date;
        /** The interval rules. The day, hour and minutes the interval is recurring. */
        interval?: Interval;
        /** The frequency of the interval. Optional. The default is frequency with the default repetition. */
        frequency?: Frequency;
        /** Specifies the list of linked schedules and the way this link affects the corresponding schedules' availability. Can be calculated from the schedule or overridden on the recurring interval. */
        affectedSchedules?: LinkedSchedule[];
        /**
         * The type of recurring interval.
         * <!--ONLY:VELO
         * One of:
         * - `"UNDEFINED"` The default value. Sessions for this interval will be of type EVENT.
         * - `"EVENT"` A recurring interval of events.
         * - `"WORKING_HOURS"` A recurring interval for availability.
         * <!--END:ONLY:VELO-->
         */
        intervalType?: RecurringIntervalType;
    }
    interface Interval {
        /** The day the interval accrue. Optional. The default is the day of the recurring interval's start time. */
        daysOfWeek?: Day;
        /** The hour of the day the interval accrue. must be consistent with the Interval start time. Options. The default is 0. minimum: 0, maximum: 23. */
        hourOfDay?: number | null;
        /** The minutes of hour the interval accrue. must be consistent with the Interval end time. Options. The default is 0. minimum: 0, maximum: 59. */
        minuteOfHour?: number | null;
        /** The duration of the interval in minutes. Required. Part of the session end time calculation. */
        duration?: number;
    }
    enum Day {
        /** Undefined. */
        UNDEFINED = "UNDEFINED",
        /** Monday. */
        MON = "MON",
        /** Tuesday. */
        TUE = "TUE",
        /** Wednesday. */
        WED = "WED",
        /** Thursday. */
        THU = "THU",
        /** Friday. */
        FRI = "FRI",
        /** Saturday. */
        SAT = "SAT",
        /** Sunday. */
        SUN = "SUN"
    }
    interface Frequency {
        /** The frequency of the recurrence in weeks. i.e. when this value is 4, the interval occurs every 4 weeks. Optional. The default is 1. minimum: 1, maximum: 52. */
        repetition?: number | null;
    }
    interface LinkedSchedule {
        /** Schedule ID. */
        scheduleId?: string;
        /**
         * Sets this schedule's availability for the duration of the linked schedule's sessions.  Default is `"BUSY"`.
         * <!--ONLY:REST-->
         * If set to `"BUSY"`, this schedule cannot have any available slots during the linked schedule's sessions.
         * If set to `"FREE"`, this schedule can have available slots during the linked schedule's sessions.
         * <!--END:ONLY:REST-->
         *
         * <!--ONLY:VELO
         * One of:
         * - `"FREE"` This schedule can have available slots during the linked schedule's sessions.
         * - `"BUSY"` This schedule cannot have any available slots during the linked schedule's sessions.
         * <!--END:ONLY:VELO-->
         */
        transparency?: Transparency;
        /**
         * Owner ID, of the linked schedule.
         * @readonly
         */
        scheduleOwnerId?: string;
    }
    enum Transparency {
        UNDEFINED = "UNDEFINED",
        /** The schedule can have available slots during the session. */
        FREE = "FREE",
        /** The schedule cannot have available slots during the session. Default value. */
        BUSY = "BUSY"
    }
    enum RecurringIntervalType {
        /** The default value. Sessions for this interval will be of type EVENT. */
        UNDEFINED = "UNDEFINED",
        /** A recurring interval of events */
        EVENT = "EVENT",
        /** Deprecated */
        TIME_AVAILABILITY = "TIME_AVAILABILITY",
        /** A recurring interval for availability */
        AVAILABILITY = "AVAILABILITY"
    }
    interface Location$2 {
        /**
         * Location type.
         * One of:
         * - `"OWNER_BUSINESS"` The business address as set in the site’s general settings.
         * - `"OWNER_CUSTOM"` The address as set when creating the service.
         * - `"CUSTOM"` The address set for the individual session.
         */
        locationType?: LocationType$2;
        /** Free text address used when locationType is `OWNER_CUSTOM`. */
        address?: string | null;
        /** Custom address, used when locationType is `"OWNER_CUSTOM"`. Might be used when locationType is `"CUSTOM"` in case the owner sets a custom address for the session which is different from the default. */
        customAddress?: Address$2;
    }
    enum LocationType$2 {
        UNDEFINED = "UNDEFINED",
        OWNER_BUSINESS = "OWNER_BUSINESS",
        OWNER_CUSTOM = "OWNER_CUSTOM",
        CUSTOM = "CUSTOM"
    }
    /** Physical address */
    interface Address$2 extends AddressStreetOneOf$2 {
        /** Street name, number and apartment number. */
        streetAddress?: StreetAddress$2;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
        /** Country code. */
        country?: string | null;
        /** Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Zip/postal code. */
        postalCode?: string | null;
        /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
        addressLine2?: string | null;
        /** A string containing the full address of this location. */
        formattedAddress?: string | null;
        /** Free text to help find the address. */
        hint?: string | null;
        /** Coordinates of the physical address. */
        geocode?: AddressLocation$2;
        /** Country full name. */
        countryFullname?: string | null;
        /** Multi-level subdivisions from top to bottom. */
        subdivisions?: Subdivision$2[];
    }
    /** @oneof */
    interface AddressStreetOneOf$2 {
        /** Street name, number and apartment number. */
        streetAddress?: StreetAddress$2;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
    }
    interface StreetAddress$2 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /** Apartment number. */
        apt?: string;
    }
    interface AddressLocation$2 {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision$2 {
        /** Subdivision code. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        code?: string;
        /** Subdivision full name. */
        name?: string;
    }
    interface LocationsLocation {
        /**
         * Location ID.
         * @readonly
         */
        _id?: string | null;
        /** Location name. */
        name?: string;
        /** Location description. */
        description?: string | null;
        /**
         * Whether this is the default location. There can only be one default location per site. The default location can't be archived.
         * @readonly
         */
        default?: boolean;
        /**
         * Location status. Defaults to `ACTIVE`.
         * __Note:__ [Archiving a location](https://dev.wix.com/api/rest/business-info/locations/archive-location)
         * doesn't affect the location's status. `INACTIVE` is currently not supported.
         */
        status?: LocationStatus;
        /**
         * Location type.
         *
         * **Note:** Currently not supported.
         */
        locationType?: LocationsLocationType;
        /** Fax number. */
        fax?: string | null;
        /** Timezone in `America/New_York` format. */
        timeZone?: string | null;
        /** Email address. */
        email?: string | null;
        /** Phone number. */
        phone?: string | null;
        /** Address. */
        address?: LocationsAddress;
        /**
         * Business schedule. Array of weekly recurring time periods when the location is open for business. Limited to 100 time periods.
         *
         * __Note:__ Not supported by Wix Bookings.
         */
        businessSchedule?: BusinessSchedule;
        /**
         * Revision number, which increments by 1 each time the location is updated.
         * To prevent conflicting changes, the existing revision must be used when updating a location.
         */
        revision?: string | null;
        /**
         * Whether the location is archived. Archived locations can't be updated.
         * __Note:__ [Archiving a location](https://dev.wix.com/api/rest/business-info/locations/archive-location)
         * doesn't affect its `status`.
         * @readonly
         */
        archived?: boolean;
        /** Location types. */
        locationTypes?: LocationsLocationType[];
    }
    /** For future use */
    enum LocationStatus {
        ACTIVE = "ACTIVE",
        INACTIVE = "INACTIVE"
    }
    /** For future use */
    enum LocationsLocationType {
        UNKNOWN = "UNKNOWN",
        BRANCH = "BRANCH",
        OFFICES = "OFFICES",
        RECEPTION = "RECEPTION",
        HEADQUARTERS = "HEADQUARTERS",
        INVENTORY = "INVENTORY"
    }
    interface LocationsAddress {
        /** 2-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
        country?: string | null;
        /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format. */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /** Street address. Includes street name, number, and apartment number in separate fields. */
        streetAddress?: LocationsStreetAddress;
        /** Full address of the location. */
        formatted?: string | null;
        /** Geographic coordinates of location. */
        location?: LocationsAddressLocation;
    }
    /** Street address. Includes street name, number, and apartment number in separate fields. */
    interface LocationsStreetAddress {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /** Apartment number. */
        apt?: string;
    }
    /** Address Geolocation */
    interface LocationsAddressLocation {
        /** Latitude of the location. Must be between -90 and 90. */
        latitude?: number | null;
        /** Longitude of the location. Must be between -180 and 180. */
        longitude?: number | null;
    }
    /** Business schedule. Regular and exceptional time periods when the business is open or the service is available. */
    interface BusinessSchedule {
        /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
        periods?: TimePeriod[];
        /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
        specialHourPeriod?: SpecialHourPeriod[];
    }
    /** Weekly recurring time periods when the business is regularly open or the service is available. */
    interface TimePeriod {
        /** Day of the week the period starts on. */
        openDay?: DayOfWeek;
        /**
         * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
         * midnight at the end of the specified day.
         */
        openTime?: string;
        /** Day of the week the period ends on. */
        closeDay?: DayOfWeek;
        /**
         * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
         * midnight at the end of the specified day.
         *
         * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
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
    /** Exception to the business's regular hours. The business can be open or closed during the exception. */
    interface SpecialHourPeriod {
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
    interface Rate {
        /**
         * Mapping between a named price option, for example, adult or child prices, and the price, currency, and down payment amount.
         * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
         */
        labeledPriceOptions?: Record<string, Price>;
        /**
         * Textual price information used when **Price Per Session** is set to **Custom Price** in the app's service details page.
         * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
         */
        priceText?: string | null;
    }
    interface Price {
        /** Required payment amount. */
        amount?: string;
        /** Currency in which the amount is quoted. */
        currency?: string;
        /** Amount of a down payment or deposit as part of the transaction. */
        downPayAmount?: string;
    }
    /**
     * <!-- Needs updating when recurrence has been tested
     * Schedule's availability calculation is executed by the schedule's available intervals and this additional information.
     * Schedule's available intervals are recurring intervals (defined in the schedule) minus sessions that has no more spots for bookings (including time between_slots), or schedule's sessions with open spots for bookings.-->
     */
    interface Availability {
        /** Date and time the schedule starts to be available for booking. */
        start?: Date;
        /** Date and time the schedule stops being available for booking. No value indicates no end time. */
        end?: Date;
        /** Other schedules that impact the availability calculation. Relevant only when there are availability constraints. */
        linkedSchedules?: LinkedSchedule[];
        /** Constraints for calculating the schedule's availability. */
        constraints?: AvailabilityConstraints;
    }
    /** Describes how to calculate the specific slots that are available for booking. */
    interface AvailabilityConstraints {
        /**
         * A list of duration options for slots, in minutes. Minimum value for a duration is 1.
         * The availability calculation generates slots with these durations, where there is no conflict with existing sessions or other availability constraints.
         */
        slotDurations?: number[];
        /**
         * The number of minutes between the `end` of one slot, and the `start` of the next.
         * Minimum value is 0, maximum value is 120.
         */
        timeBetweenSlots?: number;
        /**
         * Specify how to split the slots in intervals of minutes.
         * This value indicates the time between available slots' start time. e.g., from 5 minute slots (3:00, 3:05, 3:15) and 1 hour slots (3:00, 4:00, 5:00).
         * Optional. The default is the first duration in slot_durations field.
         * Deprecated. Use the `split_slots_interval.value_in_minutes`.
         */
        splitInterval?: number | null;
        /**
         * An object defining the time between available slots' start times.  For example, a slot with slots_split_interval=5 can start every 5 minutes. The default is the slot duration.
         * @readonly
         */
        slotsSplitInterval?: SplitInterval;
    }
    /** The time between available slots' start times. For example, For 5 minute slots, 3:00, 3:05, 3:15 etc. For 1 hour slots, 3:00, 4:00, 5:00 etc. */
    interface SplitInterval {
        /**
         * Whether the slot duration is used as the split interval value.
         * If `same_as_duration` is `true`, the `value_in_minutes` is the sum of the first duration in
         * `schedule.availabilityConstraints.SlotDurations` field, and `schedule.availabilityConstraints.TimeBetweenSlots` field.
         */
        sameAsDuration?: boolean | null;
        /** Number of minutes between available slots' start times when `same_as_duration` is `false`. */
        valueInMinutes?: number | null;
    }
    interface Participant {
        /** Participant ID. Currently represents the booking.id. */
        _id?: string;
        /** Contact ID. */
        contactId?: string | null;
        /** Participant's name. */
        name?: string | null;
        /** Participant's phone number. */
        phone?: string | null;
        /** Participant's email address. */
        email?: string | null;
        /** Group or party size. The number of people attending. Defaults to 0. Maximum is 250. */
        partySize?: number;
        /**
         * Approval status for the participant.
         * <!-- Commented out untill updateParticipant is exposed Generally the same status as the booking, unless updated using the `updateParticipant()` API. Defaults to `"UNDEFINED"`.-->
         * <!--ONLY:VELO
         * One of:
         * - `"PENDING"` Pending business approval.
         * - `"APPROVED"` Approved by the business.
         * - `"DECLINED"` Declined by the business.
         * <!--END:ONLY:VELO-->
         */
        approvalStatus?: ApprovalStatus;
        /**
         * Whether the participant was inherited from the schedule, as opposed to being booked directly to the session.
         * @readonly
         */
        inherited?: boolean;
    }
    enum ApprovalStatus {
        /** Default. */
        UNDEFINED = "UNDEFINED",
        /** Pending business approval. */
        PENDING = "PENDING",
        /** Approved by the business. */
        APPROVED = "APPROVED",
        /** Declined by the business. */
        DECLINED = "DECLINED"
    }
    interface ExternalCalendarOverrides {
        /** Synced title of the external calendar event. */
        title?: string | null;
        /** Synced description of the external calendar event. */
        description?: string | null;
    }
    enum ScheduleStatus {
        UNDEFINED = "UNDEFINED",
        /** The default value when the schedule is created. */
        CREATED = "CREATED",
        /** The schedule has been canceled. */
        CANCELLED = "CANCELLED"
    }
    interface Version {
        /** Schedule version number, updated each time the schedule is updated. */
        scheduleVersion?: number | null;
        /** Participants version number, updated each time the schedule participants are updated. */
        participantsVersion?: number | null;
    }
    interface ConferenceProvider {
        /** Conferencing provider ID */
        providerId?: string;
    }
    interface CalendarConference {
        /** Wix Calendar conference ID. */
        _id?: string;
        /** Conference meeting ID in the provider's conferencing system. */
        externalId?: string;
        /** Conference provider ID. */
        providerId?: string;
        /** URL used by the host to start the conference. */
        hostUrl?: string;
        /** URL used by a guest to join the conference. */
        guestUrl?: string;
        /** Password to join the conference. */
        password?: string | null;
        /** Conference description. */
        description?: string | null;
        /**
         * Conference type.
         * <!--ONLY:VELO
         * One of:
         * - `"ONLINE_MEETING_PROVIDER"` API-generated online meeting.
         * - `"CUSTOM"` User-defined meeting.
         * <!--END:ONLY:VELO-->
         */
        conferenceType?: ConferenceType;
        /** ID of the account owner in the video conferencing service. */
        accountOwnerId?: string | null;
    }
    enum ConferenceType {
        UNDEFINED = "UNDEFINED",
        /** API-generated online meeting. */
        ONLINE_MEETING_PROVIDER = "ONLINE_MEETING_PROVIDER",
        /** User-defined meeting. */
        CUSTOM = "CUSTOM"
    }
    interface ScheduleUpdated {
        /** The old schedule before the update. */
        oldSchedule?: Schedule;
        /** The new schedule after the update. */
        newSchedule?: Schedule;
        /**
         * Recurring sessions updated event. If this field is given, the reason for the schedule updated event was
         * updating at least one of the given schedule's recurring sessions.
         * This event is triggered by create/update/delete recurring session apis.
         */
        recurringSessions?: RecurringSessionsUpdated;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$2;
        /**
         * Whether this notification was created as a result of an anonymization request, such as GDPR.
         * An anonymized participant will have the following details:
         * name = "deleted"
         * phone = "deleted"
         * email = "deleted@deleted.com"
         */
        triggeredByAnonymizeRequest?: boolean | null;
    }
    interface RecurringSessionsUpdated {
        /** Old schedule's recurring session list. */
        oldRecurringSessions?: Session[];
        /** New schedule's recurring session list. */
        newRecurringSessions?: Session[];
    }
    interface Session {
        /**
         * Session ID.
         * @readonly
         */
        _id?: string | null;
        /** ID of the schedule that the session belongs to. */
        scheduleId?: string;
        /**
         * ID of the resource or service that the session's schedule belongs to.
         * @readonly
         */
        scheduleOwnerId?: string | null;
        /** Original start date and time of the session in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. */
        originalStart?: Date;
        /** An object specifying the start date and time of the session. If the session is a recurring session, `start` must contain a `localDateTime`. */
        start?: CalendarDateTime;
        /**
         * An object specifying the end date and time of the session. The `end` time must be after the `start` time and be same type as `start`.
         * If the session is a recurring session, `end` must contain a `localDateTime`.
         */
        end?: CalendarDateTime;
        /**
         * An object specifying a list of schedules and the way each schedule's availability is affected by the session. For example, the schedule of an instructor is affected by sessions of the class that they instruct.
         * The array is inherited from the schedule and can be overridden even if the session is a recurring session.
         */
        affectedSchedules?: LinkedSchedule[];
        /**
         * Session title.
         * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
         */
        title?: string | null;
        /**
         * __Deprecated.__
         * Tags for the session.
         * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
         */
        tags?: string[] | null;
        /**
         * An object describing the location where the session takes place.
         * Defaults to the schedule location.
         * For single sessions, `session.location.businessLocation` can only be provided for locations that are defined in the schedule using `schedule.location` or `schedule.availability.locations`.
         */
        location?: Location$2;
        /**
         * Maximum number of participants that can be added to the session. Defaults to the schedule capacity.
         * The value is inherited from the schedule and can be overridden unless the session is a recurring session.
         */
        capacity?: number | null;
        /** Deprecated. Please use the [Booking Services V2](https://dev.wix.com/api/rest/wix-bookings/services-v2) payment instead. */
        rate?: Rate;
        /**
         * Time reserved after the session end time, derived from the schedule availability constraints and the time between slots. Read-only.
         * If the session is a recurring session, this field must be empty.
         */
        timeReservedAfter?: number | null;
        /**
         * Additional information about the session.
         * Notes are not supported for recurring sessions.
         */
        notes?: string;
        /**
         * The number of participants booked for the session. Read-only.
         * Calculated as the sum of the party sizes.
         * @readonly
         */
        totalNumberOfParticipants?: number;
        /**
         * *Partial list** list of participants booked for the session.
         * The list includes participants who have registered for this specific session, and participants who have registered for a schedule that includes this session.
         * If the session is a recurring session, this field must be empty.
         * To retrieve the full list of session participants please use the [Query Extended Bookings API](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings).
         */
        participants?: Participant[];
        /**
         * A list of properties for which values were inherited from the schedule.
         * This does not include participants that were inherited from the schedule.
         * @readonly
         */
        inheritedFields?: string[];
        /** __Deprecated.__ */
        externalCalendarOverrides?: ExternalCalendarOverrides;
        /**
         * Session status.
         * <!--ONLY:VELO
         * One of:
         * - `"CONFIRMED"` Default value.
         * - `"CANCELLED"` The session was deleted.
         * <!--END:ONLY:VELO-->
         * @readonly
         */
        status?: Status;
        /**
         * Recurring interval ID. Defined when a session will be a recurring session. read-only. Optional.
         * For exmaple, when creating a class service  with recurring sessions, you add a recurrence rule to create recurring sessions.
         * This field is omitted for single sessions or instances of recurring sessions.
         * Specified when the session was originally generated from a schedule recurring interval.
         * Deprecated. Use `recurringSessionId`.
         * @readonly
         */
        recurringIntervalId?: string | null;
        /**
         * The ID of the recurring session if this session is an instance of a recurrence. Use this ID to update the recurrence and all of the instances.
         * @readonly
         */
        recurringSessionId?: string | null;
        /**
         * Session type.
         * <!--ONLY:VELO
         * One of:
         * - `"EVENT"` Reserved period of time on the schedule. For example, an appointment, class, course, or blocked time. Events are visible in the Dashboard in the Bookings app's [Booking Calendar](https://support.wix.com/en/article/wix-bookings-about-the-wix-bookings-calendar) page.
         * - `"WORKING_HOURS"` Placeholder for available time on a resource’s schedule.
         * <!--END:ONLY:VELO-->
         */
        type?: SessionType;
        /**
         * A conference created for the session according to the details set in the schedule's conference provider information.
         * If the session is a recurring session, this field is inherited from the schedule.
         * **Partially deprecated.** Only `hostUrl` and `guestUrl` are to be supported.
         */
        calendarConference?: CalendarConference;
        /**
         * A string representing a recurrence rule (RRULE) for a recurring session, as defined in [iCalendar RFC 5545](https://icalendar.org/iCalendar-RFC-5545/3-3-10-recurrence-rule.html).
         * If the session is an instance of a recurrence pattern, the `instanceOfRecurrence` property will be contain the recurrence rule and this property will be empty.
         * The RRULE defines a rule for repeating a session.
         * Supported parameters are:
         *
         * |Keyword|Description|Supported values|
         * |--|--|---|
         * |`FREQ`|The frequency at which the session is recurs. Required.|`WEEKLY`|
         * |`INTERVAL`|How often, in terms of `FREQ`, the session recurs. Default is 1. Optional.|
         * |`UNTIL`|The UTC end date and time of the recurrence. Optional.|
         * |`BYDAY`|Day of the week when the event should recur. Required.|One of: `MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`|
         *
         *
         * For example, a session that repeats every second week on a Monday until January 7, 2022 at 8 AM:
         * `"FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20220107T080000Z"`
         *
         * <!--ORIGINAL COMMENTS:
         * `FREQ` — The frequency with which the session should be repeated (such as DAILY or WEEKLY).
         * Supported `WEEKLY` value is supported.
         * INTERVAL — Works together with FREQ to specify how often the session should be repeated. For example, FREQ=WEEKLY;INTERVAL=2 means once every two weeks. Optional. Default value is 1.
         * COUNT — The number of times this event should be repeated. Not yet supported.
         * UNTIL — The UTC date & time until which the session should be repeated. This parameter is optional. When it is not specified, the event repeats forever.
         * The format is a short ISO date, followed by 'T' and a short time with seconds and without milliseconds, terminated by the UTC designator 'Z'. For example, until Jan. 19th 2018 at 7:00 AM: 'UNTIL=20180119T070000Z'.
         * BYDAY - The days of the week when the event should be repeated. Currently, only a single day is supported. This parameter is mandatory.
         * Possible values are: MO, TU, WE, TH, FR, SA, SU
         * Note that DTSTART and DTEND lines are not allowed in this field; session start and end times are specified in the start and end fields.
         * **Example**: FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;UNTIL=20200427T070000Z
         * ORIGINAL COMMENTS-->
         */
        recurrence?: string | null;
        /**
         * A string representing a recurrence rule (RRULE) if the session is an instance of a recurrence pattern.
         * Empty when the session is not an instance of a recurrence rule, or if the session defines a recurrence pattern, and `recurrence` is not empty.
         * @readonly
         */
        instanceOfRecurrence?: string | null;
        /**
         * The session version.
         * Composed by the schedule, session and participants versions.
         * @readonly
         */
        version?: SessionVersion;
    }
    interface CalendarDateTime {
        /**
         * UTC date-time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)) format. If a time zone offset is specified, the time is converted to UTC. For example, if you specify  `new Date('2021-01-06T16:00:00.000-07:00')`, the stored value will be `"2021-01-06T23:00:00.000Z"`.
         * Required if `localDateTime` is not specified.
         * If `localDateTime` is specified, `timestamp` is calculated as `localDateTime`, using the business's time zone.
         */
        timestamp?: Date;
        /** An object containing the local date and time for the business's time zone. */
        localDateTime?: LocalDateTime;
        /**
         * The time zone. Optional. Derived from the schedule's time zone.
         * In case this field is associated with recurring session, this field is empty.
         * @readonly
         */
        timeZone?: string | null;
    }
    interface LocalDateTime {
        /** Year. 4-digit format. */
        year?: number | null;
        /** Month number, from 1-12. */
        monthOfYear?: number | null;
        /** Day of the month, from 1-31. */
        dayOfMonth?: number | null;
        /** Hour of the day in 24-hour format, from 0-23. */
        hourOfDay?: number | null;
        /** Minute, from 0-59. */
        minutesOfHour?: number | null;
    }
    interface ExternalCalendarInfo {
        /** The external calendar type (e.g. Google Calendar, iCal, etc). */
        calendarType?: CalendarType;
    }
    enum CalendarType {
        UNDEFINED = "UNDEFINED",
        GOOGLE = "GOOGLE",
        I_CAL = "I_CAL",
        /** Use `MICROSOFT` instead. */
        OUTLOOK = "OUTLOOK",
        /** Use `MICROSOFT` instead. */
        OFFICE_365 = "OFFICE_365",
        MICROSOFT = "MICROSOFT",
        OTHER = "OTHER"
    }
    enum Status {
        UNDEFINED = "UNDEFINED",
        /** The session is confirmed. Default status. */
        CONFIRMED = "CONFIRMED",
        /**
         * The session is cancelled.
         * A cancelled session can be the cancellation of a recurring session that should no longer be displayed or a deleted single session.
         * The ListSessions returns cancelled sessions only if 'includeDelete' flag is set to true.
         */
        CANCELLED = "CANCELLED"
    }
    enum SessionType {
        UNDEFINED = "UNDEFINED",
        /**
         * The session creates an event on the calendar for the owner of the schedule that the session belongs to.
         * Default type.
         */
        EVENT = "EVENT",
        /** The session represents a resource's available working hours. */
        WORKING_HOURS = "WORKING_HOURS",
        /** Deprecated. please use WORKING_HOURS */
        TIME_AVAILABILITY = "TIME_AVAILABILITY",
        /** Deprecated. The session represents a resource's available hours. please use WORKING_HOURS */
        AVAILABILITY = "AVAILABILITY"
    }
    interface SessionVersion {
        /** Incremental version number, which is updated on each change to the session or on changes affecting the session. */
        number?: string | null;
    }
    interface ParticipantNotification$2 {
        /**
         * Whether to send the message about the changes to the customer.
         *
         * Default: `false`
         */
        notifyParticipants?: boolean;
        /** Custom message to send to the participants about the changes to the booking. */
        message?: string | null;
    }
    interface ScheduleCancelled {
        schedule?: Schedule;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$2;
        oldSchedule?: Schedule;
    }
    interface SessionCreated {
        session?: Session;
    }
    interface SessionUpdated {
        oldSession?: Session;
        newSession?: Session;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$2;
        /**
         * Whether this notification was created as a result of an anonymization request, such as GDPR.
         * An anonymized participant will have the following details:
         * name = "deleted"
         * phone = "deleted"
         * email = "deleted@deleted.com"
         */
        triggeredByAnonymizeRequest?: boolean | null;
    }
    interface SessionCancelled {
        session?: Session;
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$2;
    }
    interface AvailabilityPolicyUpdated {
        availabilityPolicy?: AvailabilityPolicy;
    }
    /** Availability policy applied to all site schedules. */
    interface AvailabilityPolicy {
        /** Specify how to split the schedule slots in intervals of minutes. */
        splitInterval?: SplitInterval;
    }
    interface IntervalSplit {
        scheduleId?: string;
        intervals?: RecurringInterval[];
        newScheduleVersion?: number | null;
        oldScheduleVersion?: number | null;
    }
    interface RecurringSessionSplit {
        scheduleId?: string;
        recurringSessions?: Session[];
        newScheduleVersion?: number | null;
        oldScheduleVersion?: number | null;
    }
    /** Schedule unassigned from user. */
    interface ScheduleUnassignedFromUser {
        /** The Wix user id. */
        userId?: string | null;
        /** The schedule that was unassigned from the user. */
        schedule?: Schedule;
    }
    interface MultipleSessionsCreated {
        schedulesWithSessions?: ScheduleWithSessions[];
    }
    interface ScheduleWithSessions {
        schedule?: Schedule;
        siteProperties?: SitePropertiesOnScheduleCreation;
        sessions?: Session[];
    }
    interface SitePropertiesOnScheduleCreation {
        /** The global time zone value. */
        timeZone?: string | null;
    }
    interface MigrationEvent {
        migrationData?: MigrationData;
    }
    interface MigrationData {
        businessId?: string | null;
        staffs?: StaffData[];
    }
    interface StaffData {
        resourceId?: string;
        syncRequestEmail?: string;
        refreshToken?: string;
    }
    interface CreateStaffMemberOptions {
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface GetStaffMemberOptions {
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface UpdateStaffMember {
        /**
         * StaffMember ID
         * @readonly
         */
        _id?: string | null;
        /** Staff member's name. */
        name?: string | null;
        /** Staff member's email address. */
        email?: string | null;
        /** Staff member's phone number. */
        phone?: string | null;
        /** Description, For example: "The best masseuse in all of the land" */
        description?: string | null;
        /** Main media of the staff */
        mainMedia?: MediaItem;
        /**
         * The related calendar resource id, same as `resource.id`
         * @readonly
         */
        resourceId?: string | null;
        /**
         * The related calendar resource
         * @readonly
         */
        resource?: Resource;
        /**
         * Wix user details, if the resource is associated with the Wix user.
         * A staff member resource can be associated with a Wix user via assignment of a permissions role in the business manager.
         * @readonly
         */
        associatedWixIdentity?: AssociatedWixIdentity;
        /**
         * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision
         * @readonly
         */
        revision?: string | null;
        /**
         * Represents the time this StaffMember was created
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Represents the time this StaffMember was last updated
         * @readonly
         */
        _updatedDate?: Date;
        /** Extensions enabling users to save custom data related to the staff members. */
        extendedFields?: ExtendedFields$2;
    }
    interface UpdateStaffMemberOptions {
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface QueryStaffMembersOptions {
        /** Conditional fields to return. */
        fields?: RequestedFields[] | undefined;
    }
    interface QueryCursorResult$1 {
        cursors: Cursors$2;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface StaffMembersQueryResult extends QueryCursorResult$1 {
        items: StaffMember[];
        query: StaffMembersQueryBuilder;
        next: () => Promise<StaffMembersQueryResult>;
        prev: () => Promise<StaffMembersQueryResult>;
    }
    interface StaffMembersQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "_id" | "name" | "email" | "phone" | "description" | "resourceId" | "resource.id" | "associatedWixIdentity" | "associatedWixIdentity.identificationData" | "associatedWixIdentity.identificationData.wixUserId" | "associatedWixIdentity.identificationData.contactId" | "_createdDate" | "_updatedDate", value: any) => StaffMembersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "name" | "email" | "phone" | "description" | "resourceId" | "resource.id" | "associatedWixIdentity" | "associatedWixIdentity.identificationData" | "associatedWixIdentity.identificationData.wixUserId" | "associatedWixIdentity.identificationData.contactId" | "_createdDate" | "_updatedDate", value: any) => StaffMembersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ge: (propertyName: "_createdDate" | "_updatedDate", value: any) => StaffMembersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "_createdDate" | "_updatedDate", value: any) => StaffMembersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: "_createdDate" | "_updatedDate", value: any) => StaffMembersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "_createdDate" | "_updatedDate", value: any) => StaffMembersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: "_id" | "description" | "resourceId" | "resource.id" | "associatedWixIdentity.identificationData.wixUserId" | "associatedWixIdentity.identificationData.contactId", value: string) => StaffMembersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasSome: (propertyName: "_id" | "description" | "resourceId" | "resource.id" | "associatedWixIdentity" | "associatedWixIdentity.identificationData" | "associatedWixIdentity.identificationData.wixUserId" | "associatedWixIdentity.identificationData.contactId" | "_createdDate" | "_updatedDate", value: any[]) => StaffMembersQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "_id" | "name" | "email" | "phone" | "description" | "resourceId" | "resource.id" | "associatedWixIdentity" | "associatedWixIdentity.identificationData" | "associatedWixIdentity.identificationData.wixUserId" | "associatedWixIdentity.identificationData.contactId" | "_createdDate" | "_updatedDate", value: any) => StaffMembersQueryBuilder;
        /** @documentationMaturity preview */
        exists: (propertyName: "_id" | "name" | "email" | "phone" | "description" | "resourceId" | "resource.id" | "associatedWixIdentity" | "associatedWixIdentity.identificationData" | "associatedWixIdentity.identificationData.wixUserId" | "associatedWixIdentity.identificationData.contactId" | "_createdDate" | "_updatedDate", value: boolean) => StaffMembersQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"_id" | "description" | "resourceId" | "resource.id" | "associatedWixIdentity" | "associatedWixIdentity.identificationData" | "associatedWixIdentity.identificationData.wixUserId" | "associatedWixIdentity.identificationData.contactId" | "associatedWixIdentity.identificationData.identityType" | "default" | "_createdDate" | "_updatedDate">) => StaffMembersQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"_id" | "description" | "resourceId" | "resource.id" | "associatedWixIdentity" | "associatedWixIdentity.identificationData" | "associatedWixIdentity.identificationData.wixUserId" | "associatedWixIdentity.identificationData.contactId" | "associatedWixIdentity.identificationData.identityType" | "default" | "_createdDate" | "_updatedDate">) => StaffMembersQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => StaffMembersQueryBuilder;
        /** @param cursor - A pointer to specific record
         * @documentationMaturity preview
         */
        skipTo: (cursor: string) => StaffMembersQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<StaffMembersQueryResult>;
    }
    interface CountStaffMembersOptions {
        /** Filter to apply on staff members to count */
        filter?: Record<string, any> | null;
    }
    interface ConnectToUserOptions {
        /** Email of the user to send invitation to. The staff existing email would be used if not provided. */
        email?: string | null;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface ConnectStaffMemberToUserOptions {
        /** Email of the user to send invitation to. The staff existing email would be used if not provided. */
        email?: string | null;
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface DisconnectUserOptions {
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface DisconnectStaffMemberFromUserOptions {
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface AssignCustomScheduleOptions {
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    interface AssignBusinessScheduleOptions {
        /** Conditional fields to return. */
        fields?: RequestedFields[];
    }
    type bookingsStaffV1StaffMember_universal_d_StaffMember = StaffMember;
    type bookingsStaffV1StaffMember_universal_d_MediaItem = MediaItem;
    type bookingsStaffV1StaffMember_universal_d_MediaItemMediaOneOf = MediaItemMediaOneOf;
    type bookingsStaffV1StaffMember_universal_d_Resource = Resource;
    type bookingsStaffV1StaffMember_universal_d_WorkingHoursSchedule = WorkingHoursSchedule;
    type bookingsStaffV1StaffMember_universal_d_EventSchedule = EventSchedule;
    type bookingsStaffV1StaffMember_universal_d_AssociatedWixIdentity = AssociatedWixIdentity;
    type bookingsStaffV1StaffMember_universal_d_AssociatedWixIdentityConnectionStatusEnumConnectionStatus = AssociatedWixIdentityConnectionStatusEnumConnectionStatus;
    const bookingsStaffV1StaffMember_universal_d_AssociatedWixIdentityConnectionStatusEnumConnectionStatus: typeof AssociatedWixIdentityConnectionStatusEnumConnectionStatus;
    type bookingsStaffV1StaffMember_universal_d_AssociatedConferencingProviders = AssociatedConferencingProviders;
    type bookingsStaffV1StaffMember_universal_d_AssociatedConferencingProvider = AssociatedConferencingProvider;
    type bookingsStaffV1StaffMember_universal_d_ConnectionStatus = ConnectionStatus;
    const bookingsStaffV1StaffMember_universal_d_ConnectionStatus: typeof ConnectionStatus;
    type bookingsStaffV1StaffMember_universal_d_CreateStaffMemberRequest = CreateStaffMemberRequest;
    type bookingsStaffV1StaffMember_universal_d_RequestedFields = RequestedFields;
    const bookingsStaffV1StaffMember_universal_d_RequestedFields: typeof RequestedFields;
    type bookingsStaffV1StaffMember_universal_d_CreateStaffMemberResponse = CreateStaffMemberResponse;
    type bookingsStaffV1StaffMember_universal_d_GetStaffMemberRequest = GetStaffMemberRequest;
    type bookingsStaffV1StaffMember_universal_d_GetStaffMemberResponse = GetStaffMemberResponse;
    type bookingsStaffV1StaffMember_universal_d_UpdateStaffMemberRequest = UpdateStaffMemberRequest;
    type bookingsStaffV1StaffMember_universal_d_UpdateStaffMemberResponse = UpdateStaffMemberResponse;
    type bookingsStaffV1StaffMember_universal_d_DeleteStaffMemberRequest = DeleteStaffMemberRequest;
    type bookingsStaffV1StaffMember_universal_d_DeleteStaffMemberResponse = DeleteStaffMemberResponse;
    type bookingsStaffV1StaffMember_universal_d_StaffMemberDisconnectedFromUser = StaffMemberDisconnectedFromUser;
    type bookingsStaffV1StaffMember_universal_d_QueryStaffMembersRequest = QueryStaffMembersRequest;
    type bookingsStaffV1StaffMember_universal_d_CursorQuery = CursorQuery;
    type bookingsStaffV1StaffMember_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
    type bookingsStaffV1StaffMember_universal_d_QueryStaffMembersResponse = QueryStaffMembersResponse;
    type bookingsStaffV1StaffMember_universal_d_CountStaffMembersRequest = CountStaffMembersRequest;
    type bookingsStaffV1StaffMember_universal_d_CountStaffMembersResponse = CountStaffMembersResponse;
    type bookingsStaffV1StaffMember_universal_d_ConnectToUserRequest = ConnectToUserRequest;
    type bookingsStaffV1StaffMember_universal_d_ConnectToUserResponse = ConnectToUserResponse;
    type bookingsStaffV1StaffMember_universal_d_StaffMemberConnectedToUser = StaffMemberConnectedToUser;
    type bookingsStaffV1StaffMember_universal_d_ConnectStaffMemberToUserRequest = ConnectStaffMemberToUserRequest;
    type bookingsStaffV1StaffMember_universal_d_ConnectStaffMemberToUserResponse = ConnectStaffMemberToUserResponse;
    type bookingsStaffV1StaffMember_universal_d_DisconnectUserRequest = DisconnectUserRequest;
    type bookingsStaffV1StaffMember_universal_d_DisconnectUserResponse = DisconnectUserResponse;
    type bookingsStaffV1StaffMember_universal_d_DisconnectStaffMemberFromUserRequest = DisconnectStaffMemberFromUserRequest;
    type bookingsStaffV1StaffMember_universal_d_DisconnectStaffMemberFromUserResponse = DisconnectStaffMemberFromUserResponse;
    type bookingsStaffV1StaffMember_universal_d_AssignCustomScheduleRequest = AssignCustomScheduleRequest;
    type bookingsStaffV1StaffMember_universal_d_AssignCustomScheduleResponse = AssignCustomScheduleResponse;
    type bookingsStaffV1StaffMember_universal_d_AssignBusinessScheduleRequest = AssignBusinessScheduleRequest;
    type bookingsStaffV1StaffMember_universal_d_AssignBusinessScheduleResponse = AssignBusinessScheduleResponse;
    type bookingsStaffV1StaffMember_universal_d_RestoreStaffRequest = RestoreStaffRequest;
    type bookingsStaffV1StaffMember_universal_d_RestoreStaffResponse = RestoreStaffResponse;
    type bookingsStaffV1StaffMember_universal_d_ImportStaffMemberRequest = ImportStaffMemberRequest;
    type bookingsStaffV1StaffMember_universal_d_ImportStaffMemberResponse = ImportStaffMemberResponse;
    type bookingsStaffV1StaffMember_universal_d_Empty = Empty;
    type bookingsStaffV1StaffMember_universal_d_PolicyRemovedFromContributor = PolicyRemovedFromContributor;
    type bookingsStaffV1StaffMember_universal_d_PolicyUpdatedForContributor = PolicyUpdatedForContributor;
    type bookingsStaffV1StaffMember_universal_d_ScheduleNotification = ScheduleNotification;
    type bookingsStaffV1StaffMember_universal_d_ScheduleNotificationEventOneOf = ScheduleNotificationEventOneOf;
    type bookingsStaffV1StaffMember_universal_d_ScheduleCreated = ScheduleCreated;
    type bookingsStaffV1StaffMember_universal_d_Schedule = Schedule;
    type bookingsStaffV1StaffMember_universal_d_RecurringInterval = RecurringInterval;
    type bookingsStaffV1StaffMember_universal_d_Interval = Interval;
    type bookingsStaffV1StaffMember_universal_d_Day = Day;
    const bookingsStaffV1StaffMember_universal_d_Day: typeof Day;
    type bookingsStaffV1StaffMember_universal_d_Frequency = Frequency;
    type bookingsStaffV1StaffMember_universal_d_LinkedSchedule = LinkedSchedule;
    type bookingsStaffV1StaffMember_universal_d_Transparency = Transparency;
    const bookingsStaffV1StaffMember_universal_d_Transparency: typeof Transparency;
    type bookingsStaffV1StaffMember_universal_d_RecurringIntervalType = RecurringIntervalType;
    const bookingsStaffV1StaffMember_universal_d_RecurringIntervalType: typeof RecurringIntervalType;
    type bookingsStaffV1StaffMember_universal_d_LocationsLocation = LocationsLocation;
    type bookingsStaffV1StaffMember_universal_d_LocationStatus = LocationStatus;
    const bookingsStaffV1StaffMember_universal_d_LocationStatus: typeof LocationStatus;
    type bookingsStaffV1StaffMember_universal_d_LocationsLocationType = LocationsLocationType;
    const bookingsStaffV1StaffMember_universal_d_LocationsLocationType: typeof LocationsLocationType;
    type bookingsStaffV1StaffMember_universal_d_LocationsAddress = LocationsAddress;
    type bookingsStaffV1StaffMember_universal_d_LocationsStreetAddress = LocationsStreetAddress;
    type bookingsStaffV1StaffMember_universal_d_LocationsAddressLocation = LocationsAddressLocation;
    type bookingsStaffV1StaffMember_universal_d_BusinessSchedule = BusinessSchedule;
    type bookingsStaffV1StaffMember_universal_d_TimePeriod = TimePeriod;
    type bookingsStaffV1StaffMember_universal_d_DayOfWeek = DayOfWeek;
    const bookingsStaffV1StaffMember_universal_d_DayOfWeek: typeof DayOfWeek;
    type bookingsStaffV1StaffMember_universal_d_SpecialHourPeriod = SpecialHourPeriod;
    type bookingsStaffV1StaffMember_universal_d_Rate = Rate;
    type bookingsStaffV1StaffMember_universal_d_Price = Price;
    type bookingsStaffV1StaffMember_universal_d_Availability = Availability;
    type bookingsStaffV1StaffMember_universal_d_AvailabilityConstraints = AvailabilityConstraints;
    type bookingsStaffV1StaffMember_universal_d_SplitInterval = SplitInterval;
    type bookingsStaffV1StaffMember_universal_d_Participant = Participant;
    type bookingsStaffV1StaffMember_universal_d_ApprovalStatus = ApprovalStatus;
    const bookingsStaffV1StaffMember_universal_d_ApprovalStatus: typeof ApprovalStatus;
    type bookingsStaffV1StaffMember_universal_d_ExternalCalendarOverrides = ExternalCalendarOverrides;
    type bookingsStaffV1StaffMember_universal_d_ScheduleStatus = ScheduleStatus;
    const bookingsStaffV1StaffMember_universal_d_ScheduleStatus: typeof ScheduleStatus;
    type bookingsStaffV1StaffMember_universal_d_Version = Version;
    type bookingsStaffV1StaffMember_universal_d_ConferenceProvider = ConferenceProvider;
    type bookingsStaffV1StaffMember_universal_d_CalendarConference = CalendarConference;
    type bookingsStaffV1StaffMember_universal_d_ConferenceType = ConferenceType;
    const bookingsStaffV1StaffMember_universal_d_ConferenceType: typeof ConferenceType;
    type bookingsStaffV1StaffMember_universal_d_ScheduleUpdated = ScheduleUpdated;
    type bookingsStaffV1StaffMember_universal_d_RecurringSessionsUpdated = RecurringSessionsUpdated;
    type bookingsStaffV1StaffMember_universal_d_Session = Session;
    type bookingsStaffV1StaffMember_universal_d_CalendarDateTime = CalendarDateTime;
    type bookingsStaffV1StaffMember_universal_d_LocalDateTime = LocalDateTime;
    type bookingsStaffV1StaffMember_universal_d_ExternalCalendarInfo = ExternalCalendarInfo;
    type bookingsStaffV1StaffMember_universal_d_CalendarType = CalendarType;
    const bookingsStaffV1StaffMember_universal_d_CalendarType: typeof CalendarType;
    type bookingsStaffV1StaffMember_universal_d_Status = Status;
    const bookingsStaffV1StaffMember_universal_d_Status: typeof Status;
    type bookingsStaffV1StaffMember_universal_d_SessionType = SessionType;
    const bookingsStaffV1StaffMember_universal_d_SessionType: typeof SessionType;
    type bookingsStaffV1StaffMember_universal_d_SessionVersion = SessionVersion;
    type bookingsStaffV1StaffMember_universal_d_ScheduleCancelled = ScheduleCancelled;
    type bookingsStaffV1StaffMember_universal_d_SessionCreated = SessionCreated;
    type bookingsStaffV1StaffMember_universal_d_SessionUpdated = SessionUpdated;
    type bookingsStaffV1StaffMember_universal_d_SessionCancelled = SessionCancelled;
    type bookingsStaffV1StaffMember_universal_d_AvailabilityPolicyUpdated = AvailabilityPolicyUpdated;
    type bookingsStaffV1StaffMember_universal_d_AvailabilityPolicy = AvailabilityPolicy;
    type bookingsStaffV1StaffMember_universal_d_IntervalSplit = IntervalSplit;
    type bookingsStaffV1StaffMember_universal_d_RecurringSessionSplit = RecurringSessionSplit;
    type bookingsStaffV1StaffMember_universal_d_ScheduleUnassignedFromUser = ScheduleUnassignedFromUser;
    type bookingsStaffV1StaffMember_universal_d_MultipleSessionsCreated = MultipleSessionsCreated;
    type bookingsStaffV1StaffMember_universal_d_ScheduleWithSessions = ScheduleWithSessions;
    type bookingsStaffV1StaffMember_universal_d_SitePropertiesOnScheduleCreation = SitePropertiesOnScheduleCreation;
    type bookingsStaffV1StaffMember_universal_d_MigrationEvent = MigrationEvent;
    type bookingsStaffV1StaffMember_universal_d_MigrationData = MigrationData;
    type bookingsStaffV1StaffMember_universal_d_StaffData = StaffData;
    type bookingsStaffV1StaffMember_universal_d_CreateStaffMemberOptions = CreateStaffMemberOptions;
    type bookingsStaffV1StaffMember_universal_d_GetStaffMemberOptions = GetStaffMemberOptions;
    type bookingsStaffV1StaffMember_universal_d_UpdateStaffMember = UpdateStaffMember;
    type bookingsStaffV1StaffMember_universal_d_UpdateStaffMemberOptions = UpdateStaffMemberOptions;
    type bookingsStaffV1StaffMember_universal_d_QueryStaffMembersOptions = QueryStaffMembersOptions;
    type bookingsStaffV1StaffMember_universal_d_StaffMembersQueryResult = StaffMembersQueryResult;
    type bookingsStaffV1StaffMember_universal_d_StaffMembersQueryBuilder = StaffMembersQueryBuilder;
    type bookingsStaffV1StaffMember_universal_d_CountStaffMembersOptions = CountStaffMembersOptions;
    type bookingsStaffV1StaffMember_universal_d_ConnectToUserOptions = ConnectToUserOptions;
    type bookingsStaffV1StaffMember_universal_d_ConnectStaffMemberToUserOptions = ConnectStaffMemberToUserOptions;
    type bookingsStaffV1StaffMember_universal_d_DisconnectUserOptions = DisconnectUserOptions;
    type bookingsStaffV1StaffMember_universal_d_DisconnectStaffMemberFromUserOptions = DisconnectStaffMemberFromUserOptions;
    type bookingsStaffV1StaffMember_universal_d_AssignCustomScheduleOptions = AssignCustomScheduleOptions;
    type bookingsStaffV1StaffMember_universal_d_AssignBusinessScheduleOptions = AssignBusinessScheduleOptions;
    namespace bookingsStaffV1StaffMember_universal_d {
        export { bookingsStaffV1StaffMember_universal_d_StaffMember as StaffMember, bookingsStaffV1StaffMember_universal_d_MediaItem as MediaItem, bookingsStaffV1StaffMember_universal_d_MediaItemMediaOneOf as MediaItemMediaOneOf, bookingsStaffV1StaffMember_universal_d_Resource as Resource, bookingsStaffV1StaffMember_universal_d_WorkingHoursSchedule as WorkingHoursSchedule, bookingsStaffV1StaffMember_universal_d_EventSchedule as EventSchedule, bookingsStaffV1StaffMember_universal_d_AssociatedWixIdentity as AssociatedWixIdentity, IdentificationData$2 as IdentificationData, IdentificationDataIdOneOf$2 as IdentificationDataIdOneOf, IdentityType$2 as IdentityType, bookingsStaffV1StaffMember_universal_d_AssociatedWixIdentityConnectionStatusEnumConnectionStatus as AssociatedWixIdentityConnectionStatusEnumConnectionStatus, bookingsStaffV1StaffMember_universal_d_AssociatedConferencingProviders as AssociatedConferencingProviders, bookingsStaffV1StaffMember_universal_d_AssociatedConferencingProvider as AssociatedConferencingProvider, bookingsStaffV1StaffMember_universal_d_ConnectionStatus as ConnectionStatus, ExtendedFields$2 as ExtendedFields, bookingsStaffV1StaffMember_universal_d_CreateStaffMemberRequest as CreateStaffMemberRequest, bookingsStaffV1StaffMember_universal_d_RequestedFields as RequestedFields, bookingsStaffV1StaffMember_universal_d_CreateStaffMemberResponse as CreateStaffMemberResponse, bookingsStaffV1StaffMember_universal_d_GetStaffMemberRequest as GetStaffMemberRequest, bookingsStaffV1StaffMember_universal_d_GetStaffMemberResponse as GetStaffMemberResponse, bookingsStaffV1StaffMember_universal_d_UpdateStaffMemberRequest as UpdateStaffMemberRequest, bookingsStaffV1StaffMember_universal_d_UpdateStaffMemberResponse as UpdateStaffMemberResponse, bookingsStaffV1StaffMember_universal_d_DeleteStaffMemberRequest as DeleteStaffMemberRequest, bookingsStaffV1StaffMember_universal_d_DeleteStaffMemberResponse as DeleteStaffMemberResponse, bookingsStaffV1StaffMember_universal_d_StaffMemberDisconnectedFromUser as StaffMemberDisconnectedFromUser, bookingsStaffV1StaffMember_universal_d_QueryStaffMembersRequest as QueryStaffMembersRequest, bookingsStaffV1StaffMember_universal_d_CursorQuery as CursorQuery, bookingsStaffV1StaffMember_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf, Sorting$2 as Sorting, SortOrder$2 as SortOrder, CursorPaging$2 as CursorPaging, bookingsStaffV1StaffMember_universal_d_QueryStaffMembersResponse as QueryStaffMembersResponse, CursorPagingMetadata$1 as CursorPagingMetadata, Cursors$2 as Cursors, bookingsStaffV1StaffMember_universal_d_CountStaffMembersRequest as CountStaffMembersRequest, bookingsStaffV1StaffMember_universal_d_CountStaffMembersResponse as CountStaffMembersResponse, bookingsStaffV1StaffMember_universal_d_ConnectToUserRequest as ConnectToUserRequest, bookingsStaffV1StaffMember_universal_d_ConnectToUserResponse as ConnectToUserResponse, bookingsStaffV1StaffMember_universal_d_StaffMemberConnectedToUser as StaffMemberConnectedToUser, bookingsStaffV1StaffMember_universal_d_ConnectStaffMemberToUserRequest as ConnectStaffMemberToUserRequest, bookingsStaffV1StaffMember_universal_d_ConnectStaffMemberToUserResponse as ConnectStaffMemberToUserResponse, bookingsStaffV1StaffMember_universal_d_DisconnectUserRequest as DisconnectUserRequest, bookingsStaffV1StaffMember_universal_d_DisconnectUserResponse as DisconnectUserResponse, bookingsStaffV1StaffMember_universal_d_DisconnectStaffMemberFromUserRequest as DisconnectStaffMemberFromUserRequest, bookingsStaffV1StaffMember_universal_d_DisconnectStaffMemberFromUserResponse as DisconnectStaffMemberFromUserResponse, bookingsStaffV1StaffMember_universal_d_AssignCustomScheduleRequest as AssignCustomScheduleRequest, bookingsStaffV1StaffMember_universal_d_AssignCustomScheduleResponse as AssignCustomScheduleResponse, bookingsStaffV1StaffMember_universal_d_AssignBusinessScheduleRequest as AssignBusinessScheduleRequest, bookingsStaffV1StaffMember_universal_d_AssignBusinessScheduleResponse as AssignBusinessScheduleResponse, bookingsStaffV1StaffMember_universal_d_RestoreStaffRequest as RestoreStaffRequest, bookingsStaffV1StaffMember_universal_d_RestoreStaffResponse as RestoreStaffResponse, bookingsStaffV1StaffMember_universal_d_ImportStaffMemberRequest as ImportStaffMemberRequest, bookingsStaffV1StaffMember_universal_d_ImportStaffMemberResponse as ImportStaffMemberResponse, bookingsStaffV1StaffMember_universal_d_Empty as Empty, bookingsStaffV1StaffMember_universal_d_PolicyRemovedFromContributor as PolicyRemovedFromContributor, bookingsStaffV1StaffMember_universal_d_PolicyUpdatedForContributor as PolicyUpdatedForContributor, DomainEvent$2 as DomainEvent, DomainEventBodyOneOf$2 as DomainEventBodyOneOf, EntityCreatedEvent$2 as EntityCreatedEvent, EntityUpdatedEvent$2 as EntityUpdatedEvent, EntityDeletedEvent$2 as EntityDeletedEvent, ActionEvent$2 as ActionEvent, bookingsStaffV1StaffMember_universal_d_ScheduleNotification as ScheduleNotification, bookingsStaffV1StaffMember_universal_d_ScheduleNotificationEventOneOf as ScheduleNotificationEventOneOf, bookingsStaffV1StaffMember_universal_d_ScheduleCreated as ScheduleCreated, bookingsStaffV1StaffMember_universal_d_Schedule as Schedule, bookingsStaffV1StaffMember_universal_d_RecurringInterval as RecurringInterval, bookingsStaffV1StaffMember_universal_d_Interval as Interval, bookingsStaffV1StaffMember_universal_d_Day as Day, bookingsStaffV1StaffMember_universal_d_Frequency as Frequency, bookingsStaffV1StaffMember_universal_d_LinkedSchedule as LinkedSchedule, bookingsStaffV1StaffMember_universal_d_Transparency as Transparency, bookingsStaffV1StaffMember_universal_d_RecurringIntervalType as RecurringIntervalType, Location$2 as Location, LocationType$2 as LocationType, Address$2 as Address, AddressStreetOneOf$2 as AddressStreetOneOf, StreetAddress$2 as StreetAddress, AddressLocation$2 as AddressLocation, Subdivision$2 as Subdivision, bookingsStaffV1StaffMember_universal_d_LocationsLocation as LocationsLocation, bookingsStaffV1StaffMember_universal_d_LocationStatus as LocationStatus, bookingsStaffV1StaffMember_universal_d_LocationsLocationType as LocationsLocationType, bookingsStaffV1StaffMember_universal_d_LocationsAddress as LocationsAddress, bookingsStaffV1StaffMember_universal_d_LocationsStreetAddress as LocationsStreetAddress, bookingsStaffV1StaffMember_universal_d_LocationsAddressLocation as LocationsAddressLocation, bookingsStaffV1StaffMember_universal_d_BusinessSchedule as BusinessSchedule, bookingsStaffV1StaffMember_universal_d_TimePeriod as TimePeriod, bookingsStaffV1StaffMember_universal_d_DayOfWeek as DayOfWeek, bookingsStaffV1StaffMember_universal_d_SpecialHourPeriod as SpecialHourPeriod, bookingsStaffV1StaffMember_universal_d_Rate as Rate, bookingsStaffV1StaffMember_universal_d_Price as Price, bookingsStaffV1StaffMember_universal_d_Availability as Availability, bookingsStaffV1StaffMember_universal_d_AvailabilityConstraints as AvailabilityConstraints, bookingsStaffV1StaffMember_universal_d_SplitInterval as SplitInterval, bookingsStaffV1StaffMember_universal_d_Participant as Participant, bookingsStaffV1StaffMember_universal_d_ApprovalStatus as ApprovalStatus, bookingsStaffV1StaffMember_universal_d_ExternalCalendarOverrides as ExternalCalendarOverrides, bookingsStaffV1StaffMember_universal_d_ScheduleStatus as ScheduleStatus, bookingsStaffV1StaffMember_universal_d_Version as Version, bookingsStaffV1StaffMember_universal_d_ConferenceProvider as ConferenceProvider, bookingsStaffV1StaffMember_universal_d_CalendarConference as CalendarConference, bookingsStaffV1StaffMember_universal_d_ConferenceType as ConferenceType, bookingsStaffV1StaffMember_universal_d_ScheduleUpdated as ScheduleUpdated, bookingsStaffV1StaffMember_universal_d_RecurringSessionsUpdated as RecurringSessionsUpdated, bookingsStaffV1StaffMember_universal_d_Session as Session, bookingsStaffV1StaffMember_universal_d_CalendarDateTime as CalendarDateTime, bookingsStaffV1StaffMember_universal_d_LocalDateTime as LocalDateTime, bookingsStaffV1StaffMember_universal_d_ExternalCalendarInfo as ExternalCalendarInfo, bookingsStaffV1StaffMember_universal_d_CalendarType as CalendarType, bookingsStaffV1StaffMember_universal_d_Status as Status, bookingsStaffV1StaffMember_universal_d_SessionType as SessionType, bookingsStaffV1StaffMember_universal_d_SessionVersion as SessionVersion, ParticipantNotification$2 as ParticipantNotification, bookingsStaffV1StaffMember_universal_d_ScheduleCancelled as ScheduleCancelled, bookingsStaffV1StaffMember_universal_d_SessionCreated as SessionCreated, bookingsStaffV1StaffMember_universal_d_SessionUpdated as SessionUpdated, bookingsStaffV1StaffMember_universal_d_SessionCancelled as SessionCancelled, bookingsStaffV1StaffMember_universal_d_AvailabilityPolicyUpdated as AvailabilityPolicyUpdated, bookingsStaffV1StaffMember_universal_d_AvailabilityPolicy as AvailabilityPolicy, bookingsStaffV1StaffMember_universal_d_IntervalSplit as IntervalSplit, bookingsStaffV1StaffMember_universal_d_RecurringSessionSplit as RecurringSessionSplit, bookingsStaffV1StaffMember_universal_d_ScheduleUnassignedFromUser as ScheduleUnassignedFromUser, bookingsStaffV1StaffMember_universal_d_MultipleSessionsCreated as MultipleSessionsCreated, bookingsStaffV1StaffMember_universal_d_ScheduleWithSessions as ScheduleWithSessions, bookingsStaffV1StaffMember_universal_d_SitePropertiesOnScheduleCreation as SitePropertiesOnScheduleCreation, bookingsStaffV1StaffMember_universal_d_MigrationEvent as MigrationEvent, bookingsStaffV1StaffMember_universal_d_MigrationData as MigrationData, bookingsStaffV1StaffMember_universal_d_StaffData as StaffData, bookingsStaffV1StaffMember_universal_d_CreateStaffMemberOptions as CreateStaffMemberOptions, bookingsStaffV1StaffMember_universal_d_GetStaffMemberOptions as GetStaffMemberOptions, bookingsStaffV1StaffMember_universal_d_UpdateStaffMember as UpdateStaffMember, bookingsStaffV1StaffMember_universal_d_UpdateStaffMemberOptions as UpdateStaffMemberOptions, bookingsStaffV1StaffMember_universal_d_QueryStaffMembersOptions as QueryStaffMembersOptions, bookingsStaffV1StaffMember_universal_d_StaffMembersQueryResult as StaffMembersQueryResult, bookingsStaffV1StaffMember_universal_d_StaffMembersQueryBuilder as StaffMembersQueryBuilder, bookingsStaffV1StaffMember_universal_d_CountStaffMembersOptions as CountStaffMembersOptions, bookingsStaffV1StaffMember_universal_d_ConnectToUserOptions as ConnectToUserOptions, bookingsStaffV1StaffMember_universal_d_ConnectStaffMemberToUserOptions as ConnectStaffMemberToUserOptions, bookingsStaffV1StaffMember_universal_d_DisconnectUserOptions as DisconnectUserOptions, bookingsStaffV1StaffMember_universal_d_DisconnectStaffMemberFromUserOptions as DisconnectStaffMemberFromUserOptions, bookingsStaffV1StaffMember_universal_d_AssignCustomScheduleOptions as AssignCustomScheduleOptions, bookingsStaffV1StaffMember_universal_d_AssignBusinessScheduleOptions as AssignBusinessScheduleOptions, };
    }
    /**
     * The `Attendance` object represents the attendance information
     * for a booked session, such as:
     *
     * + Did anyone attend the session?
     * + How many people attended the session?
     *
     * The number of session `Attendance` objects available depends on the booking type:
     * + Appointment bookings have 1 `Attendance` object per appointment session.
     * + Class bookings have 1 `Attendance` object for each session of the class. The number of sessions for a class is defined in Schedule and Sessions [`schedule.capacity`](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/schedule/schedule-object) property.
     * + Course bookings have an `Attendance` object for each session of the course. For example, if there are 12 sessions in a course, there are 12 `Attendance` objects. The number of sessions for a class is defined in Schedule and Sessions [`schedule.capacity`](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/schedule/schedule-object) property.
     */
    interface Attendance {
        /**
         * ID of the `Attendance` object.
         * @readonly
         */
        _id?: string | null;
        /** Corresponding booking ID. */
        bookingId?: string | null;
        /** Corresponding session ID. */
        sessionId?: string | null;
        /**
         * Status indicating if any participants attended the session:
         *
         * + `NOT_SET`: There is no available attendance information.
         * + `ATTENDED`: At least a single participant attended the session.
         * + `NOT_ATTENDED`: No participants attended the session.
         */
        status?: AttendanceStatus;
        /**
         * Total number of participants that attended the session. By default, the number
         * of attendees is set to `1`, but you can set a number to greater than `1` if multiple
         * participants attended.
         *
         * Do not set to `0` to indicate that no one attended the session. Instead, set the `status` field to `NOT_ATTENDED`.
         *
         * Default: 1
         */
        numberOfAttendees?: number;
    }
    enum AttendanceStatus {
        NOT_SET = "NOT_SET",
        ATTENDED = "ATTENDED",
        NOT_ATTENDED = "NOT_ATTENDED"
    }
    interface GetAttendanceRequest {
        /** ID of the object that contains the attendance information that you want to retrieve. */
        attendanceId: string;
    }
    interface GetAttendanceResponse {
        /** The retrieved attendance information for the booked session. */
        attendance?: Attendance;
    }
    interface SetAttendanceRequest {
        /** The attendance information for a booked session that you want to create or update. */
        attendance: Attendance;
    }
    interface SetAttendanceResponse {
        /** The created or updated attendance information for the booked session. */
        attendance?: Attendance;
    }
    interface BulkSetAttendanceRequest {
        /** The attendance information for a booked sessions that you want to create or update. */
        attendanceList: Attendance[];
        returnFullEntity?: boolean;
    }
    interface BulkSetAttendanceResponse {
        /** The created or updated attendance information for the booked sessions. */
        results?: BulkAttendanceResult[];
        /** Total successes and failures of the bulk set attendance action. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface BulkAttendanceResult {
        item?: Attendance;
        itemMetadata?: ItemMetadata$1;
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
    interface QueryAttendanceRequest {
        /** Query options. */
        query: QueryV2$1;
    }
    interface QueryV2$1 extends QueryV2PagingMethodOneOf$1 {
        /** Cursors to navigate through the result pages using `next` and `prev`. */
        cursorPaging?: CursorPaging$1;
        /**
         * Filter object. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more information.
         *
         * For a detailed list of supported fields and operators, see [Supported Filters and Sorting](https://dev.wix.com/api/rest/wix-bookings/attendance/supported-filters).
         *
         * Max: 1 filter
         */
        filter?: Record<string, any> | null;
        /**
         * Sort object in the following format:
         * `[ {"fieldName":"sortField1","order":"ASC"}, {"fieldName":"sortField2","order":"DESC"} ]`
         *
         * For details about sorting, see [Supported Filters and Sorting](https://dev.wix.com/api/rest/wix-bookings/attendance/supported-filters).
         */
        sort?: Sorting$1[];
    }
    /** @oneof */
    interface QueryV2PagingMethodOneOf$1 {
        /** Cursors to navigate through the result pages using `next` and `prev`. */
        cursorPaging?: CursorPaging$1;
    }
    interface Sorting$1 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$1;
    }
    /**
     * Sort order. Use `ASC` for ascending order or `DESC` for descending order.
     *
     * Default: `ASC`.
     */
    enum SortOrder$1 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$1 {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface CursorPaging$1 {
        /**
         * Number of `Attendance` objects to return.
         *
         * Default: `50`
         * Maximum: `1000`
         */
        limit?: number | null;
        /**
         * Pointer to the next or previous page in the list of results.
         *
         * You can get the relevant cursor token
         * from the `pagingMetadata` object in the previous call's response.
         *
         * Not relevant for the first request.
         */
        cursor?: string | null;
    }
    /** List of objects that contain attendance information. */
    interface QueryAttendanceResponse {
        /** List of objects that contain attendance information for a booked session. */
        attendances?: Attendance[];
        /** Details on the paged set of results returned. */
        pagingMetadata?: CursorPagingMetadata;
    }
    /** This is the preferred message for cursor-paging enabled services */
    interface CursorPagingMetadata {
        /** Use these cursors to paginate between results. [Read more](https://dev.wix.com/api/rest/getting-started/api-query-language#getting-started_api-query-language_cursor-paging). */
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
    }
    interface EntityUpdatedEvent$1 {
        /**
         * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
         * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
         * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
         */
        currentEntityAsJson?: string;
    }
    interface EntityDeletedEvent$1 {
        /** Entity that was deleted */
        deletedEntityAsJson?: string | null;
    }
    interface ActionEvent$1 {
        bodyAsJson?: string;
    }
    /**
     * Retrieves attendance information by ID.
     * @param attendanceId - ID of the object that contains the attendance information that you want to retrieve.
     * @public
     * @documentationMaturity preview
     * @requiredField attendanceId
     * @returns The retrieved attendance information for the booked session.
     */
    function getAttendance(attendanceId: string): Promise<Attendance>;
    /**
     * Sets information about whether a booking's session was attended. This information
     * is saved in an `Attendance` object.
     *
     *
     * If attendance was already set, meaning the `Attendance` object already exists, the
     * existing attendance information is updated. Otherwise, a new `Attendance` object
     * is created.
     *
     * By default, the number
     * of attendees is set to `1`, but you can set a number to greater than `1` if multiple
     * participants attended. Do not set to `0` to indicate that no one attended the session.
     * Instead, set the `status` field to `NOT_ATTENDED`.
     *
     * > __Note:__ Make sure your code validates that:
     * >  + There is no mismatch between `numberOfAttendees` and `attendanceStatus` to make sure, for example, that `attendanceStatus` is not `NOT_ATTENDED` while `numberOfAttendees` is `5`.
     * >  + The attendance's `numberOfAttendees` and the booking's `numberOfParticipants` correspond. For example, the number of attendees usually should not exceed the booking's intended number of participants (unless perhaps you allow walk-ins that did not sign up in advance).
     * @param attendance - The attendance information for a booked session that you want to create or update.
     * @public
     * @documentationMaturity preview
     * @requiredField attendance
     * @requiredField attendance.bookingId
     * @requiredField attendance.status
     * @adminMethod
     */
    function setAttendance(attendance: Attendance): Promise<SetAttendanceResponse>;
    /**
     * Sets information about whether a booking's session was attended for multiple bookings
     *
     *
     * See [SetAttendance](https://dev.wix.com/docs/rest/api-reference/wix-bookings/attendance/set-attendance) documentation for more information.
     *
     * If any of the attendance list required fields were not passed on the request or if the caller doesn't have the required permissions to set the attendance, the call fails.
     * If the request contains attendance info for unavailable sessions, the call completes successfully but the attendance info for the unavailable sessions are not created and are not considered as failures in the response.
     * @param attendanceList - The attendance information for a booked sessions that you want to create or update.
     * @public
     * @documentationMaturity preview
     * @requiredField attendanceList
     * @requiredField attendanceList.bookingId
     * @requiredField attendanceList.status
     * @adminMethod
     */
    function bulkSetAttendance(attendanceList: Attendance[], options?: BulkSetAttendanceOptions): Promise<BulkSetAttendanceResponse>;
    interface BulkSetAttendanceOptions {
        returnFullEntity?: boolean;
    }
    /**
     * Retrieves attendance information for booked sessions, given the provided paging, filtering, and sorting.
     *
     *
     * When querying attendance information, you can query from the perspective of:
     * + **A booking.** Specify a booking ID to retrieve attendance information
     * for all sessions related to that booking.
     * + **A session.** Specify a session ID to  retrieve attendance information
     * for all bookings related to that session.
     *
     * For example, query by a course's `bookingId` and `status = "NOT_ATTENDED"` to
     * retrieve the attendance of a given participant in a course. For example, this query
     * helps you determine if a participant booked the course
     * but did not attend most of its sessions, taking away spots for other potential participants.
     *
     * Query Attendance runs with the following defaults, which you can override:
     *
     * - `id` sorted in `ASC` order
     * - `cursorPaging.limit` is `50`
     *
     * For field support, see [supported filters](https://dev.wix.com/api/rest/wix-bookings/attendance/supported-filters).
     *
     * > __Notes__:
     * > + Another way to retrieve attendance information is to call Bookings Reader V2's [Query Extended Bookings](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings) with `withBookingAttendanceInfo` as `true`.
     * > + Up to 100 results can be returned per request.
     * > + Only 1 filter is supported per query. If you define multiple filters in the same query, only the first is processed.
     *
     * To learn about working with query endpoints, see
     * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
     * @public
     * @documentationMaturity preview
     */
    function queryAttendance(): AttendancesQueryBuilder;
    interface QueryCursorResult {
        cursors: Cursors$1;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface AttendancesQueryResult extends QueryCursorResult {
        items: Attendance[];
        query: AttendancesQueryBuilder;
        next: () => Promise<AttendancesQueryResult>;
        prev: () => Promise<AttendancesQueryResult>;
    }
    interface AttendancesQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "_id" | "bookingId" | "sessionId" | "status" | "numberOfAttendees", value: any) => AttendancesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "bookingId" | "sessionId" | "status" | "numberOfAttendees", value: any) => AttendancesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ge: (propertyName: "numberOfAttendees", value: any) => AttendancesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "numberOfAttendees", value: any) => AttendancesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: "numberOfAttendees", value: any) => AttendancesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "numberOfAttendees", value: any) => AttendancesQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "_id" | "bookingId" | "sessionId" | "status" | "numberOfAttendees", value: any) => AttendancesQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"_id" | "bookingId" | "sessionId" | "status" | "numberOfAttendees">) => AttendancesQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"numberOfAttendees">) => AttendancesQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => AttendancesQueryBuilder;
        /** @param cursor - A pointer to specific record
         * @documentationMaturity preview
         */
        skipTo: (cursor: string) => AttendancesQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<AttendancesQueryResult>;
    }
    type bookingsV2Attendance_universal_d_Attendance = Attendance;
    type bookingsV2Attendance_universal_d_AttendanceStatus = AttendanceStatus;
    const bookingsV2Attendance_universal_d_AttendanceStatus: typeof AttendanceStatus;
    type bookingsV2Attendance_universal_d_GetAttendanceRequest = GetAttendanceRequest;
    type bookingsV2Attendance_universal_d_GetAttendanceResponse = GetAttendanceResponse;
    type bookingsV2Attendance_universal_d_SetAttendanceRequest = SetAttendanceRequest;
    type bookingsV2Attendance_universal_d_SetAttendanceResponse = SetAttendanceResponse;
    type bookingsV2Attendance_universal_d_BulkSetAttendanceRequest = BulkSetAttendanceRequest;
    type bookingsV2Attendance_universal_d_BulkSetAttendanceResponse = BulkSetAttendanceResponse;
    type bookingsV2Attendance_universal_d_BulkAttendanceResult = BulkAttendanceResult;
    type bookingsV2Attendance_universal_d_QueryAttendanceRequest = QueryAttendanceRequest;
    type bookingsV2Attendance_universal_d_QueryAttendanceResponse = QueryAttendanceResponse;
    type bookingsV2Attendance_universal_d_CursorPagingMetadata = CursorPagingMetadata;
    const bookingsV2Attendance_universal_d_getAttendance: typeof getAttendance;
    const bookingsV2Attendance_universal_d_setAttendance: typeof setAttendance;
    const bookingsV2Attendance_universal_d_bulkSetAttendance: typeof bulkSetAttendance;
    type bookingsV2Attendance_universal_d_BulkSetAttendanceOptions = BulkSetAttendanceOptions;
    const bookingsV2Attendance_universal_d_queryAttendance: typeof queryAttendance;
    type bookingsV2Attendance_universal_d_AttendancesQueryResult = AttendancesQueryResult;
    type bookingsV2Attendance_universal_d_AttendancesQueryBuilder = AttendancesQueryBuilder;
    namespace bookingsV2Attendance_universal_d {
        export { bookingsV2Attendance_universal_d_Attendance as Attendance, bookingsV2Attendance_universal_d_AttendanceStatus as AttendanceStatus, bookingsV2Attendance_universal_d_GetAttendanceRequest as GetAttendanceRequest, bookingsV2Attendance_universal_d_GetAttendanceResponse as GetAttendanceResponse, bookingsV2Attendance_universal_d_SetAttendanceRequest as SetAttendanceRequest, bookingsV2Attendance_universal_d_SetAttendanceResponse as SetAttendanceResponse, bookingsV2Attendance_universal_d_BulkSetAttendanceRequest as BulkSetAttendanceRequest, bookingsV2Attendance_universal_d_BulkSetAttendanceResponse as BulkSetAttendanceResponse, bookingsV2Attendance_universal_d_BulkAttendanceResult as BulkAttendanceResult, ItemMetadata$1 as ItemMetadata, ApplicationError$1 as ApplicationError, BulkActionMetadata$1 as BulkActionMetadata, bookingsV2Attendance_universal_d_QueryAttendanceRequest as QueryAttendanceRequest, QueryV2$1 as QueryV2, QueryV2PagingMethodOneOf$1 as QueryV2PagingMethodOneOf, Sorting$1 as Sorting, SortOrder$1 as SortOrder, Paging$1 as Paging, CursorPaging$1 as CursorPaging, bookingsV2Attendance_universal_d_QueryAttendanceResponse as QueryAttendanceResponse, bookingsV2Attendance_universal_d_CursorPagingMetadata as CursorPagingMetadata, Cursors$1 as Cursors, DomainEvent$1 as DomainEvent, DomainEventBodyOneOf$1 as DomainEventBodyOneOf, EntityCreatedEvent$1 as EntityCreatedEvent, EntityUpdatedEvent$1 as EntityUpdatedEvent, EntityDeletedEvent$1 as EntityDeletedEvent, ActionEvent$1 as ActionEvent, bookingsV2Attendance_universal_d_getAttendance as getAttendance, bookingsV2Attendance_universal_d_setAttendance as setAttendance, bookingsV2Attendance_universal_d_bulkSetAttendance as bulkSetAttendance, bookingsV2Attendance_universal_d_BulkSetAttendanceOptions as BulkSetAttendanceOptions, bookingsV2Attendance_universal_d_queryAttendance as queryAttendance, bookingsV2Attendance_universal_d_AttendancesQueryResult as AttendancesQueryResult, bookingsV2Attendance_universal_d_AttendancesQueryBuilder as AttendancesQueryBuilder, };
    }
    /** The booking object, version 2. */
    interface Booking$1 extends BookingParticipantsInfoOneOf$1 {
        /** Total number of participants. Available only when the booking includes a single service variant. */
        totalParticipants?: number;
        /**
         * Information about the booked service choices and participants.
         * Available only when the booking includes multiple service variants.
         */
        participantsChoices?: ParticipantChoices$1;
        /**
         * Booking ID.
         * @readonly
         */
        _id?: string | null;
        /** An object describing the slot or schedule that was booked. */
        bookedEntity?: BookedEntity$1;
        /** Contact details of the site visitor or member making the booking. */
        contactDetails?: ContactDetails$1;
        /** Additional custom fields submitted with the booking form. */
        additionalFields?: CustomFormField$1[];
        /**
         * Booking status.
         * One of:
         * - `"CREATED"` - The booking was created.
         * - `"UPDATED"` - The booking was updated.
         * - `"CONFIRMED"` - The booking has been confirmed and appears on the bookings calendar.
         * Booking can be automatically confirmed when the following requirements are met:
         * + The service is configured as automatically confirmed.
         * + Invoking eCommerce checkout API and an order has been created.
         * - `"CANCELED"` - The booking has been canceled and synced to bookings calendar.
         * The booking can be canceled using cancel cancelBooking().
         * - `"PENDING"` - The booking waiting to be confirmed or declined buy the owner and is synced to bookings calendar.
         * Booking can be automatically set as pending when the following requirements are met:
         * + The Service is configured as manually confirmed.
         * + Invoking the eCommerce checkout API and an order has been created.
         * - `"WAITING_LIST"` - The booking is pending on a waiting list.
         * - `"DECLINED"` - The booking was declined by the owner and synced to bookings calendar.
         * Booking can be manually declined using declineBooking() and requires manage booking permissions.
         * Booking can be automatically declined when the following requirements are met:
         * + Invoking eCommerce checkout API and the order declined event has been sent.
         * + Invoking eCommerce checkout API and order approved event has been sent, but the booking is offline and the booking causes a double booking.
         */
        status?: BookingStatus$1;
        /**
         * Payment status.
         * One of:
         * - `"NOT_PAID"` The booking is not paid for.
         * - `"PAID"` The booking is fully paid.
         * - `"PARTIALLY_PAID"` The booking is partially paid.
         * - `"REFUNDED"` The booking is refunded.
         * - `"EXEMPT"` The booking is free of charge.
         * @readonly
         */
        paymentStatus?: PaymentStatus$1;
        /**
         * Selected payment option.
         * One of the payment options offered by the service, or another option if `skipSelectedPaymentOptionValidation` is `true`.
         * When undefined, the payment option is resolved by the service configuration on checkout.
         */
        selectedPaymentOption?: SelectedPaymentOption$1;
        /**
         * Date and time the booking was created.
         * @readonly
         */
        _createdDate?: Date;
        /** External ID provided by the client app on creation. */
        externalUserId?: string | null;
        /** Revision number to be used when updating, rescheduling, or cancelling the booking. Revision number, which increments by 1 each time the booking is updated, rescheduled, or canceled. To prevent conflicting changes,the current revision must be passed when updating the booking. */
        revision?: string | null;
        /**
         * ID of the creator of the Booking.
         * If `appId` and another ID are present, the other ID takes precedence.
         * @readonly
         */
        createdBy?: CommonIdentificationData;
        /**
         * The start date of this booking. For a slot, this is the start date of the slot. For a schedule, this is the start date of the first session.
         * @readonly
         */
        startDate?: Date;
        /**
         * The end date of this booking. For a slot, this is the end date of the slot. For a schedule, this is the end date of the last session.
         * @readonly
         */
        endDate?: Date;
        /**
         * Date and time the booking was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /** Custom field data for this object. Extended fields must be configured in the Wix Dev Center before they can be accessed with API calls. */
        extendedFields?: ExtendedFields$1;
        /**
         * Whether this booking overlaps another existing confirmed booking. Returned when: `true`
         * @readonly
         */
        doubleBooked?: boolean | null;
    }
    /** @oneof */
    interface BookingParticipantsInfoOneOf$1 {
        /** Total number of participants. Available only when the booking includes a single service variant. */
        totalParticipants?: number;
        /**
         * Information about the booked service choices and participants.
         * Available only when the booking includes multiple service variants.
         */
        participantsChoices?: ParticipantChoices$1;
    }
    enum MultiServiceBookingType$1 {
        /**
         * Multi service booking will be considered available if its bookings are
         * available as returned from ListMultiServiceAvailabilityTimeSlots API.
         * See [List Multi Service Availability Time Slots] (url) documentation // todo: complete url
         */
        SEQUENTIAL_BOOKINGS = "SEQUENTIAL_BOOKINGS",
        /**
         * Multi service booking will be considered available if each of its bookings is available separately.
         * Not supported yet
         */
        SEPARATE_BOOKINGS = "SEPARATE_BOOKINGS",
        /** Not supported yet */
        PARALLEL_BOOKINGS = "PARALLEL_BOOKINGS"
    }
    interface BookedEntity$1 extends BookedEntityItemOneOf$1 {
        /** The booked slot, once booked becomes a session, The booking is automatically assigned to the session if it already exists, or creates a session if one doesn't already exist. */
        slot?: BookedSlot$1;
        /** The booked schedule. The booking is automatically assigned to the schedule's sessions. */
        schedule?: BookedSchedule$1;
        /**
         * Session title at the time of booking.
         * If session doesn't exist at the time of the booking, service name is used.
         * @readonly
         */
        title?: string | null;
        /**
         * List of tags for the booking.
         * System-assigned tags for sessions and schedules are:
         * + "INDIVIDUAL" Appointments, including appointments with more than 1 participant.
         * + "GROUP" Individual classes.
         * + "COURSE" Courses.
         */
        tags?: string[] | null;
    }
    /** @oneof */
    interface BookedEntityItemOneOf$1 {
        /** The booked slot, once booked becomes a session, The booking is automatically assigned to the session if it already exists, or creates a session if one doesn't already exist. */
        slot?: BookedSlot$1;
        /** The booked schedule. The booking is automatically assigned to the schedule's sessions. */
        schedule?: BookedSchedule$1;
    }
    interface BookedSlot$1 {
        /**
         * ID of the underlying session when session is a single session or generated from a recurring session.
         * If `sessionId` is defined in the `Create Booking` request, the `startDate`, `endDate`, `timezone`, `resource`, and `location` fields are ignored and populated from the existing session's information.
         */
        sessionId?: string | null;
        /** Service ID. */
        serviceId?: string;
        /** Schedule ID. Required. */
        scheduleId?: string;
        /**
         * Calendar 3 event ID
         * If not empty, on all write flows (create / update) gets priority over session_id.
         * so if both session_id and event_id are provided, the session_id that will be set on the booking will be based on the event_id.
         * Otherwise, if event_id is empty on write flow,
         */
        eventId?: string | null;
        /**
         * The start time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format.
         */
        startDate?: string | null;
        /**
         * The end time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format.
         */
        endDate?: string | null;
        /** The timezone according to which the slot was shown to the user when booking, and should be shown in future. */
        timezone?: string | null;
        /**
         * The enriched resource assigned to the slot, can be either the requested resource or the resource chosen by the system.
         * When populated, the given resource will be booked according to it's availability.
         * When empty, If `skip_availability_validation` is `false`, a random available resource will be assigned to the slot upon confirmation,
         * otherwise one of the service resources will be assigned to the slot randomly upon confirmation.
         * This resource is the slot primary resource.
         */
        resource?: BookedResource$1;
        /** Location where the slot's session takes place. */
        location?: Location$1;
    }
    interface BookedResource$1 {
        /** Booked resource ID. */
        _id?: string;
        /** Resource's name at the time of booking. */
        name?: string | null;
        /** Resource's email at the time of booking. */
        email?: string | null;
        /** Resource's schedule ID. */
        scheduleId?: string | null;
    }
    interface Location$1 {
        /**
         * Business location ID. Available only for locations that are business locations,
         * meaning the `location_type` is `"OWNER_BUSINESS"`.
         */
        _id?: string | null;
        /** Location name. */
        name?: string | null;
        /** The full address of this location. */
        formattedAddress?: string | null;
        /**
         * Location type.
         *
         * - `"OWNER_BUSINESS"`: The business address, as set in the site’s general settings.
         * - `"OWNER_CUSTOM"`: The address as set when creating the service.
         * - `"CUSTOM"`: The address as set for the individual session.
         */
        locationType?: LocationType$1;
    }
    enum LocationType$1 {
        UNDEFINED = "UNDEFINED",
        OWNER_BUSINESS = "OWNER_BUSINESS",
        OWNER_CUSTOM = "OWNER_CUSTOM",
        CUSTOM = "CUSTOM"
    }
    interface BookedSchedule$1 {
        /** Schedule ID. */
        scheduleId?: string;
        /** Booked service ID. */
        serviceId?: string | null;
        /**
         * Location where the schedule's sessions take place. Read only.
         * @readonly
         */
        location?: Location$1;
        /** The timezone according to which the slot was shown to the user when booking, and should be shown in future. */
        timezone?: string | null;
        /**
         * The start time of the first session in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format. Required.
         * @readonly
         */
        firstSessionStart?: string | null;
        /**
         * The end time of the last session in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format. Required.
         * @readonly
         */
        lastSessionEnd?: string | null;
    }
    interface ContactDetails$1 {
        /** Contact's ID. */
        contactId?: string | null;
        /** Contact's first name. When populated from a standard booking form, this property corresponds to the **Name** field. */
        firstName?: string | null;
        /** Contact's last name. */
        lastName?: string | null;
        /** Contact's email, used to create a new contact or get existing one from the [Contacts API](https://www.wix.com/velo/reference/wix-crm/contacts/introduction). Used to validate coupon usage limitations per contact. If not passed, the coupon usage limitation will not be enforced. (Coupon usage limitation validation is not supported yet). */
        email?: string | null;
        /** Contact's phone number. */
        phone?: string | null;
        /** Contact's full address. */
        fullAddress?: Address$1;
        /** Contact's time zone. */
        timeZone?: string | null;
        /** Contact's country in [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
        countryCode?: string | null;
    }
    /** Physical address */
    interface Address$1 extends AddressStreetOneOf$1 {
        /** Street name, number and apartment number. */
        streetAddress?: StreetAddress$1;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
        /** Country code. */
        country?: string | null;
        /** Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Zip/postal code. */
        postalCode?: string | null;
        /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
        addressLine2?: string | null;
        /** A string containing the full address of this location. */
        formattedAddress?: string | null;
        /** Free text to help find the address. */
        hint?: string | null;
        /** Coordinates of the physical address. */
        geocode?: AddressLocation$1;
        /** Country full name. */
        countryFullname?: string | null;
        /** Multi-level subdivisions from top to bottom. */
        subdivisions?: Subdivision$1[];
    }
    /** @oneof */
    interface AddressStreetOneOf$1 {
        /** Street name, number and apartment number. */
        streetAddress?: StreetAddress$1;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
    }
    interface StreetAddress$1 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /** Apartment number. */
        apt?: string;
    }
    interface AddressLocation$1 {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision$1 {
        /** Subdivision code. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        code?: string;
        /** Subdivision full name. */
        name?: string;
    }
    interface CustomFormField$1 {
        /** ID of the form field as defined in the form. */
        _id?: string;
        /** Value that was submitted for this field. */
        value?: string | null;
        /**
         * Form field's label at the time of submission.
         * @readonly
         */
        label?: string | null;
        /**
         * One of:
         * - `"SHORT_TEXT"`
         * - `"LONG_TEXT"`
         * - `"CHECK_BOX"`
         */
        valueType?: ValueType$1;
    }
    enum ValueType$1 {
        /** Short text. This is the default value type. */
        SHORT_TEXT = "SHORT_TEXT",
        /** Long text */
        LONG_TEXT = "LONG_TEXT",
        /** a text that represent the check box value: if selected the value is "true", otherwise "false". */
        CHECK_BOX = "CHECK_BOX"
    }
    /** Booking status. */
    enum BookingStatus$1 {
        CREATED = "CREATED",
        CONFIRMED = "CONFIRMED",
        CANCELED = "CANCELED",
        PENDING = "PENDING",
        DECLINED = "DECLINED",
        WAITING_LIST = "WAITING_LIST"
    }
    /**
     * Payment status.
     * Automatically updated when using eCom checkout APIs.
     */
    enum PaymentStatus$1 {
        UNDEFINED = "UNDEFINED",
        NOT_PAID = "NOT_PAID",
        PAID = "PAID",
        /** not supported yet. */
        PARTIALLY_PAID = "PARTIALLY_PAID",
        /** not supported yet */
        REFUNDED = "REFUNDED",
        EXEMPT = "EXEMPT"
    }
    /**
     * The selected payment option.
     * One of the payment options offered by the service.
     * This field is be set when the user selects an option during booking.
     * If left undefined, the payment option is resolved by the service configuration on checkout.
     */
    enum SelectedPaymentOption$1 {
        UNDEFINED = "UNDEFINED",
        OFFLINE = "OFFLINE",
        ONLINE = "ONLINE",
        MEMBERSHIP = "MEMBERSHIP",
        /** Payment can only be done using a membership and must be manually redeemed in the dashboard by the site owner. */
        MEMBERSHIP_OFFLINE = "MEMBERSHIP_OFFLINE"
    }
    interface BookingSource$1 {
        /**
         * Platform from which a booking was created
         * <!--ONLY:VELO
         * One of:
         * - `"WEB"` Desktop browser.
         * - `"MOBILE_APP"` Mobile application.
         * <!--END:ONLY:VELO-->
         */
        platform?: Platform$1;
        /**
         * Actor that created this booking.
         * <!--ONLY:VELO
         * One of:
         * - `"BUSINESS"`
         * - `"CUSTOMER"`
         * <!--END:ONLY:VELO-->
         */
        actor?: Actor$1;
        /**
         * Wix site ID of the application that created the booking.
         * @readonly
         */
        appDefId?: string | null;
        /**
         * Name of the application that created the booking, as saved in Wix Developers Center at the time of booking.
         * @readonly
         */
        appName?: string | null;
    }
    enum Platform$1 {
        UNDEFINED_PLATFORM = "UNDEFINED_PLATFORM",
        WEB = "WEB",
        MOBILE_APP = "MOBILE_APP"
    }
    enum Actor$1 {
        UNDEFINED_ACTOR = "UNDEFINED_ACTOR",
        BUSINESS = "BUSINESS",
        CUSTOMER = "CUSTOMER"
    }
    interface ParticipantNotification$1 {
        /**
         * Whether to send the message about the changes to the customer.
         *
         * Default: `false`
         */
        notifyParticipants?: boolean;
        /** Custom message to send to the participants about the changes to the booking. */
        message?: string | null;
    }
    interface CommonIdentificationData extends CommonIdentificationDataIdOneOf {
        /** ID of a site visitor that has not logged in to the site. */
        anonymousVisitorId?: string;
        /** ID of a site visitor that has logged in to the site. */
        memberId?: string;
        /** ID of a Wix user (site owner, contributor, etc.). */
        wixUserId?: string;
        /** ID of an app. */
        appId?: string;
        /** ID of of a contact in the site's [CRM by Ascend](https://www.wix.com/ascend/crm) system. */
        contactId?: string | null;
    }
    /** @oneof */
    interface CommonIdentificationDataIdOneOf {
        /** ID of a site visitor that has not logged in to the site. */
        anonymousVisitorId?: string;
        /** ID of a site visitor that has logged in to the site. */
        memberId?: string;
        /** ID of a Wix user (site owner, contributor, etc.). */
        wixUserId?: string;
        /** ID of an app. */
        appId?: string;
    }
    enum IdentificationDataIdentityType {
        UNKNOWN = "UNKNOWN",
        ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
        MEMBER = "MEMBER",
        WIX_USER = "WIX_USER",
        APP = "APP"
    }
    interface FlowControlSettings$1 {
        /**
         * When true, skips availability checking and allows booking.
         * Requires BOOKINGS.OVERRIDE_AVAILABILITY permissions.
         */
        skipAvailabilityValidation?: boolean;
        /**
         * When true, allows booking a confirmation-required service without requiring confirmation.
         * Requires BOOKINGS.IGNORE_BOOKING_POLICY permissions.
         */
        skipBusinessConfirmation?: boolean;
        /**
         * When true, skips selected payment option checking as defined in `selectedPaymentOption` field
         * and allows booking.
         * Requires BOOKINGS.MANAGE_PAYMENTS permissions.
         */
        skipSelectedPaymentOptionValidation?: boolean;
        /** When true, refunds the booking's payment when the booking is canceled. */
        withRefund?: boolean | null;
    }
    interface ExtendedFields$1 {
        /**
         * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
         * The value of each key is structured according to the schema defined when the extended fields were configured.
         *
         * You can only access fields for which you have the appropriate permissions.
         *
         * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
         */
        namespaces?: Record<string, Record<string, any>>;
    }
    interface ParticipantChoices$1 {
        /** Information about the booked service choices. Includes the number of participants. */
        serviceChoices?: ServiceChoices$1[];
    }
    interface ServiceChoices$1 {
        /** Number of participants for this variant. */
        numberOfParticipants?: number | null;
        /** Service choices for these participants. */
        choices?: ServiceChoice$1[];
    }
    interface ServiceChoice$1 extends ServiceChoiceChoiceOneOf$1 {
        /**
         * Value for one of the choices in the `CustomServiceOption.choices` list.
         * Choices are specific values for an option the customer can choose to book. For example,
         * the option `ageGroup` may have these choices: `child`, `student`, `adult`, and `senior`.
         * Each choice may have a different price.
         */
        custom?: string;
        /**
         * ID of the corresponding option for the choice. For example, the choice `child`
         * could correspond to the option `ageGroup`. In this case, `optionId` is the ID
         * for the `ageGroup` option.
         */
        optionId?: string;
    }
    /** @oneof */
    interface ServiceChoiceChoiceOneOf$1 {
        /**
         * Value for one of the choices in the [`CustomServiceOption.choices`](https://example.com) list.
         * Choices are specific values for an option the customer can choose to book. For example,
         * the option `ageGroup` may have these choices: `child`, `student`, `adult`, and `senior`.
         * Each choice may have a different price.
         */
        custom?: string;
    }
    interface MultiServiceBookingInfo$1 {
        /**
         * Multi service booking ID.
         * @readonly
         */
        _id?: string | null;
        /** Multi service booking type. */
        type?: MultiServiceBookingType$1;
    }
    interface CreateMultiServiceBookingRequest {
        /** The bookings to create as multi service booking. */
        bookings: Booking$1[];
        /** Information about a message to send to the customer. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         * Default: `true`.
         */
        sendSmsReminder?: boolean | null;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before creating the booking or if additional payment options are
         * accepted.
         */
        flowControlSettings?: CreateBookingFlowControlSettings;
        /** Whether to return the created bookings entities. */
        returnFullEntity?: boolean;
        /**
         * Multi service booking type.
         * One of:
         * - `"SEQUENTIAL_BOOKINGS"` Multi service booking will be considered available if its bookings are available as returned from ListMultiServiceAvailabilityTimeSlots API.
         * - `"SEPARATE_BOOKINGS"` Not supported yet.
         * - `"PARALLEL_BOOKINGS"` Not supported yet.
         */
        multiServiceBookingType?: MultiServiceBookingType$1;
    }
    interface CreateBookingFlowControlSettings {
        /**
         * Whether the availability is checked before creating the booking. When
         * passing `false` a booking is only created when the slot or schedule is
         * available.
         * Default: `false`.
         */
        skipAvailabilityValidation?: boolean;
        /**
         * Whether `PENDING` bookings are automatically set to `CONFIRMED` for
         * services that normally require the owner's manual confirmation. Your
         * app must have the `BOOKINGS.OVERRIDE_AVAILABILITY` permission scope
         * when passing `true`.
         * Default: `false`.
         */
        skipBusinessConfirmation?: boolean;
        /**
         * Whether customers can pay using a payment method that isn't supported
         * for the service, but that's supported for other services. Your app
         * must have the `BOOKINGS.MANAGE_PAYMENTS` permission scope when passing
         * `true`.
         * Default: `false`.
         */
        skipSelectedPaymentOptionValidation?: boolean;
    }
    interface CreateMultiServiceBookingResponse {
        /**
         * Created multi service booking.
         * Contains the booking results on the same order as passed on the request.
         */
        multiServiceBooking?: MultiServiceBooking;
    }
    interface MultiServiceBooking {
        /** Multi service booking ID. */
        _id?: string | null;
        /** The created bookings which are part of the multi service booking */
        bookings?: BookingResult[];
    }
    interface BookingResult {
        /** Booking ID. */
        bookingId?: string | null;
        /** Booking entity. */
        booking?: Booking$1;
    }
    interface RescheduleMultiServiceBookingRequest {
        /** ID of the multi service booking to reschedule it's related bookings. */
        multiServiceBookingId: string | null;
        /** Bookings to reschedule. */
        rescheduleBookingsInfo: RescheduleMultiServiceBookingRequestRescheduleBookingInfo[];
        /** Information about whether to notify the customer about the rescheduling and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * rescheduling flow are changed. For example, whether the availability of
         * the new slot is checked before rescheduling the booking or if you can
         * reschedule the booking even though the rescheduling policy doesn't allow it.
         */
        flowControlSettings?: RescheduleBookingFlowControlSettings;
        /** Whether to return the rescheduled bookings entities. */
        returnFullEntity?: boolean;
    }
    interface V2Slot {
        /** Identifier for underlying session when session is a single session or generated from a recurring session. Required. */
        sessionId?: string | null;
        /** Service identifier. Required. */
        serviceId?: string;
        /** Schedule identifier. Required. */
        scheduleId?: string;
        /** The start time of this Slot (formatted according to RFC3339). Required. */
        startDate?: string | null;
        /** The end time of this Slot (formatted according to RFC3339). Required. */
        endDate?: string | null;
        /** The timezone according to which the slot is calculated presented. */
        timezone?: string | null;
        /**
         * The resource required for this slot.
         * When populated, the given resource will be assigned to the slot upon confirmation according to it's availability.
         * When empty, If `skip_availability_validation` is `false`, a random available resource will be assigned to the slot upon confirmation,
         * otherwise one of the service resources will be assigned to the slot randomly upon confirmation.
         */
        resource?: SlotSlotResource;
        /** Geographic location of the slot. */
        location?: SlotLocation;
    }
    enum LocationLocationType {
        UNDEFINED = "UNDEFINED",
        OWNER_BUSINESS = "OWNER_BUSINESS",
        OWNER_CUSTOM = "OWNER_CUSTOM",
        CUSTOM = "CUSTOM"
    }
    interface SlotSlotResource {
        /**
         * Resource ID
         * @readonly
         */
        _id?: string | null;
        /** Read only. Resource name. */
        name?: string | null;
    }
    interface SlotLocation {
        /** Business Location ID. Present if the location is a business location. */
        _id?: string | null;
        /** Location name. */
        name?: string | null;
        /** A string containing the full address of this location. */
        formattedAddress?: string | null;
        /**
         * Location type.
         * One of:
         * - `"OWNER_BUSINESS"` The business address as set in the site’s general settings.
         * - `"OWNER_CUSTOM"` The address as set when creating the service.
         * - `"CUSTOM"` The address set for the individual session.
         */
        locationType?: LocationLocationType;
    }
    interface RescheduleMultiServiceBookingRequestRescheduleBookingInfo extends RescheduleMultiServiceBookingRequestRescheduleBookingInfoParticipantsInfoOneOf {
        /**
         * Total number of participants. Available only for services with
         * variants.
         * Pass when all participants book the same variant.
         */
        totalParticipants?: number;
        /**
         * Information about the service choices to book. Available only for services with
         * variants.
         * Pass when not all participants book the same variant.
         */
        participantsChoices?: ParticipantChoices$1;
        /** ID of the booking to reschedule. */
        bookingId?: string | null;
        /** Information about the new slot. */
        slot?: V2Slot;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision?: string | null;
    }
    /** @oneof */
    interface RescheduleMultiServiceBookingRequestRescheduleBookingInfoParticipantsInfoOneOf {
        /**
         * Total number of participants. Available only for services with
         * variants.
         * Pass when all participants book the same variant.
         */
        totalParticipants?: number;
        /**
         * Information about the service choices to book. Available only for services with
         * variants.
         * Pass when not all participants book the same variant.
         */
        participantsChoices?: ParticipantChoices$1;
    }
    interface RescheduleBookingFlowControlSettings {
        /**
         * Whether the rescheduling policy applies when rescheduling the booking.
         * When passing `false` you can only cancel a booking if the rescheduling
         * policy allows it.
         * Default: `false`.
         * <!--ONLY:VELO
         * Requires "Manage Wix Bookings App" and "Manage Bookings' Calendar" [roles](https://support.wix.com/en/article/roles-permissions-overview#bookings-admin).
         * <!--END:ONLY:VELO-->
         */
        ignoreReschedulePolicy?: boolean;
        /**
         * Whether the availability is checked before rescheduling the booking.
         * When passing `false` a booking is only created when the slot or
         * schedule is available.
         * Default: `false`.
         */
        skipAvailabilityValidation?: boolean;
        /**
         * Whether the rescheduled booking's status is automatically set to
         * `CONFIRMED` for services that normally require the owner's manual
         * confirmation.
         * Default: `false`.
         */
        skipBusinessConfirmation?: boolean;
    }
    interface RescheduleMultiServiceBookingResponse {
        /** Rescheduled multi service booking. */
        multiServiceBooking?: MultiServiceBooking;
    }
    interface BookingRescheduled extends BookingRescheduledPreviousParticipantsInfoOneOf {
        /** The previous total number of participants. Available only when the booking includes a single service variant. */
        previousTotalParticipants?: number;
        /**
         * Information about the previous booked service choices and participants.
         * Available only when the booking includes multiple service variants.
         */
        previousParticipantsChoices?: ParticipantChoices$1;
        /** The rescheduled booking object. */
        booking?: Booking$1;
        /** Information about whether to notify the customer about the rescheduling and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * rescheduling flow are changed. For example, whether the availability of
         * the new slot is checked before rescheduling the booking or if you can
         * reschedule the booking even though the rescheduling policy doesn't allow it.
         */
        flowControlSettings?: RescheduleBookingFlowControlSettings;
        /** ID of the rescheduling initiator. */
        initiatedBy?: IdentificationData$1;
        /** The previous status of the booking. */
        previousStatus?: BookingStatus$1;
        /** An object describing the previous slot or schedule of the booking. */
        previousBookedEntity?: BookedEntity$1;
        /** The previous start date of the booking. For a slot, this is the start date of the slot. For a schedule, this is the start date of the first session. */
        previousStartDate?: Date;
        /** The previous end date of the booking. For a slot, this is the end date of the slot. For a schedule, this is the end date of the last session. */
        previousEndDate?: Date;
    }
    /** @oneof */
    interface BookingRescheduledPreviousParticipantsInfoOneOf {
        /** The previous total number of participants. Available only when the booking includes a single service variant. */
        previousTotalParticipants?: number;
        /**
         * Information about the previous booked service choices and participants.
         * Available only when the booking includes multiple service variants.
         */
        previousParticipantsChoices?: ParticipantChoices$1;
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
        /**
         * ID of of a contact in the site's [CRM by Ascend](https://www.wix.com/ascend/crm) system.
         * @readonly
         */
        contactId?: string | null;
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
    enum IdentityType$1 {
        UNKNOWN = "UNKNOWN",
        ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
        MEMBER = "MEMBER",
        WIX_USER = "WIX_USER",
        APP = "APP"
    }
    interface GetMultiServiceBookingAvailabilityRequest {
        multiServiceBookingId: string | null;
    }
    interface GetMultiServiceBookingAvailabilityResponse {
        /** Whether these bookings are bookable. */
        bookable?: boolean;
        /** Total number of spots for this availability. */
        totalCapacity?: number | null;
        /** Number of open spots for this availability. */
        remainingCapacity?: number | null;
        /** Indicators for policy violations of the multi service booking. */
        policyViolations?: BookingPolicyViolations;
        /** Multi service booking policy settings */
        policySettings?: BookingPolicySettings;
        /** Info of the bookings this availability was calculated for. */
        multiServiceBookingInfo?: GetMultiServiceBookingAvailabilityResponseBookingInfo[];
    }
    interface BookingPolicyViolations {
        /** Bookings policy violation. Too early to book this slot. */
        tooEarlyToBook?: boolean | null;
        /** Bookings policy violation. Too late to book this slot. */
        tooLateToBook?: boolean | null;
        /** Bookings policy violation. Online booking is disabled for this slot. */
        bookOnlineDisabled?: boolean | null;
    }
    interface BookingPolicySettings {
        /** Booking policy settings for a given Slot/Schedule */
        maxParticipantsPerBooking?: number | null;
    }
    interface GetMultiServiceBookingAvailabilityResponseBookingInfo {
        /** Booking id */
        bookingId?: string | null;
    }
    interface CancelMultiServiceBookingRequest {
        /** ID of the multi service booking to cancel it's related bookings. */
        multiServiceBookingId: string | null;
        /** Information about whether to notify the customer about the cancelation and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * cancelation flow are changed. For example, whether the you can cancel
         * a booking even though the cancelation policy doesn't allow it or whether
         * to issue a refund.
         */
        flowControlSettings?: CancelBookingFlowControlSettings;
        /** Whether to return the canceled bookings entities. */
        returnFullEntity?: boolean;
    }
    interface CancelBookingFlowControlSettings {
        /**
         * Whether the cancelation policy applies when canceling the booking. When
         * passing `false` you can only cancel a booking if the cancelation policy
         * allows it.
         * Default: `false`.
         * <!--ONLY:VELO
         * Requires "Manage Wix Bookings App" and "Manage Bookings' Calendar" [roles](https://support.wix.com/en/article/roles-permissions-overview#bookings-admin).
         * <!--END:ONLY:VELO-->
         */
        ignoreCancellationPolicy?: boolean | null;
        /**
         * Whether to issue a refund when canceling the booking.
         * The refund will be issued only if the booking is refundable.
         * Currently, booking is considered refundable when it was paid by membership.
         * If passing `true`, the booking flow control settings will be set with refund,
         * otherwise, either if `false` is passed or the field remains empty,
         * the booking flow control settings will be set with no refund.
         * Default: `false`.
         */
        withRefund?: boolean | null;
    }
    interface CancelMultiServiceBookingResponse {
        /** Canceled multi service booking. */
        multiServiceBooking?: MultiServiceBooking;
    }
    interface BookingCanceled {
        /** The canceled booking object. */
        booking?: Booking$1;
        /** Information about whether to notify the customer about the cancelation and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * cancelation flow are changed. For example, whether you can cancel
         * a booking even though the cancelation policy doesn't allow it or whether
         * to issue a refund.
         */
        flowControlSettings?: CancelBookingFlowControlSettings;
        /** ID of the cancelation initiator. */
        initiatedBy?: IdentificationData$1;
        /** The previous status of the booking. */
        previousStatus?: BookingStatus$1;
    }
    interface MarkMultiServiceBookingAsPendingRequest {
        /** ID of the multi service booking to mark as pending it's related bookings. */
        multiServiceBookingId: string | null;
        /** Bookings to mark as pending. */
        markAsPendingBookingsInfo?: BookingInfo[];
        /** Information about whether to notify the customer upon manual confirmation and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         */
        sendSmsReminder?: boolean | null;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /** Whether to return the pending bookings entities. */
        returnFullEntity?: boolean;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before updating the booking.
         */
        flowControlSettings?: MarkBookingAsPendingFlowControlSettings;
    }
    interface BookingInfo {
        /** ID of the booking. */
        bookingId?: string | null;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision?: string | null;
        /**
         * Payment status to set for the booking.
         * One of:
         * - `"NOT_PAID"` The booking is not paid for.
         * - `"PAID"` The booking is fully paid.
         * - `"PARTIALLY_PAID"` The booking is partially paid.
         * - `"REFUNDED"` The booking is refunded.
         * - `"EXEMPT"` The booking is free of charge.
         */
        paymentStatus?: PaymentStatus$1;
    }
    interface MarkBookingAsPendingFlowControlSettings {
        /**
         * Whether should check for double bookings before updating the booking as pending.
         * When passing `false` a booking is only being updated with status PENDING
         * Default: `false`.
         */
        checkAvailabilityValidation?: boolean;
        /**
         * Whether should validate that the given booking to be marked as pending, has a booking.slot.serviceId
         * of a pending approval service.
         * Default: `false`.
         */
        skipPendingApprovalServiceValidation?: boolean;
    }
    interface MarkMultiServiceBookingAsPendingResponse {
        /** Pending multi service booking. */
        multiServiceBooking?: MultiServiceBooking;
    }
    interface ConfirmMultiServiceBookingRequest {
        /** ID of the multi service booking to confirm it's related bookings. */
        multiServiceBookingId: string | null;
        /** Bookings to confirm. */
        confirmBookingsInfo?: BookingInfo[];
        /** Information about whether to notify the customer about the confirmation and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         */
        sendSmsReminder?: boolean | null;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /** Whether to return the confirmed bookings entities. */
        returnFullEntity?: boolean;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * confirmation flow are changed. For example, whether the availability is
         * checked before confirming the booking.
         */
        flowControlSettings?: ConfirmBookingFlowControlSettings;
    }
    interface ConfirmBookingFlowControlSettings {
        /**
         * todo: docs any-resource flow behavior
         * Whether the availability is checked before confirming the booking.
         * When passing `false` a booking is only being updated with status CONFIRMED
         * Default: `false`.
         */
        checkAvailabilityValidation?: boolean;
    }
    interface ConfirmMultiServiceBookingResponse {
        /** Confirmed multi service booking. */
        multiServiceBooking?: MultiServiceBooking;
    }
    interface BookingConfirmed {
        /** The confirmed booking object. */
        booking?: Booking$1;
        /** Information about whether to notify the customer about the confirmation and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         */
        sendSmsReminder?: boolean | null;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /** ID of the confirmation initiator. */
        initiatedBy?: IdentificationData$1;
        /** The previous status of the booking. */
        previousStatus?: BookingStatus$1;
        /** The previous payment status of the booking. */
        previousPaymentStatus?: PaymentStatus$1;
    }
    interface DeclineMultiServiceBookingRequest {
        /** ID of the multi service booking to decline it's related bookings. */
        multiServiceBookingId: string | null;
        /** Bookings to decline. */
        declineBookingsInfo?: BookingInfo[];
        /** Information about whether to notify the customer about the decline and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /** Whether to return the declined bookings entities. */
        returnFullEntity?: boolean;
    }
    interface DeclineMultiServiceBookingResponse {
        /** Declined multi service booking. */
        multiServiceBooking?: MultiServiceBooking;
    }
    interface BookingDeclined {
        /** The declined booking object. */
        booking?: Booking$1;
        /** Information about whether to notify the customer about the decline and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /** ID of the decline initiator. */
        initiatedBy?: IdentificationData$1;
        /** The previous status of the booking. */
        previousStatus?: BookingStatus$1;
        /** The previous payment status of the booking. */
        previousPaymentStatus?: PaymentStatus$1;
    }
    interface BulkGetMultiServiceBookingAllowedActionsRequest {
        /** The multi service booking ids to get the allowedActions for. */
        multiServiceBookingIds: string[] | null;
    }
    interface BulkGetMultiServiceBookingAllowedActionsResponse {
        results?: BulkCalculateAllowedActionsResult[];
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface BulkCalculateAllowedActionsResult {
        /** (id, indexInGivenSeq, isSuccessful, error) */
        itemMetadata?: ItemMetadata;
        item?: AllowedActions;
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
    /** Possible allowed actions for a Booking */
    interface AllowedActions {
        /** Is cancel booking allowed */
        cancel?: boolean;
        /** Is reschedule booking allowed */
        reschedule?: boolean;
    }
    interface BulkActionMetadata {
        /** Number of items that were successfully processed. */
        totalSuccesses?: number;
        /** Number of items that couldn't be processed. */
        totalFailures?: number;
        /** Number of failures without details because detailed failure threshold was exceeded. */
        undetailedFailures?: number;
    }
    interface MarkAsMultiServiceBookingRequest {
        /** IDs of the bookings to mark as multi service booking. */
        bookingIds: string[] | null;
        /**
         * Multi service booking type.
         * One of:
         * - `"SEQUENTIAL_BOOKINGS"` Multi service booking will be considered available if its bookings are available as returned from ListMultiServiceAvailabilityTimeSlots API.
         * - `"SEPARATE_BOOKINGS"` Not supported yet.
         * - `"PARALLEL_BOOKINGS"` Not supported yet.
         */
        multiServiceBookingType?: MultiServiceBookingType$1;
    }
    interface MarkAsMultiServiceBookingResponse {
        /** Multi service booking ID. */
        multiServiceBookingId?: string | null;
    }
    interface GetMultiServiceBookingRequest {
        /** Multi service booking ID. */
        multiServiceBookingId: string | null;
    }
    interface GetMultiServiceBookingResponse {
        /** Multi service booking. */
        multiServiceBooking?: MultiServiceBooking;
        metadata?: MultiServiceBookingMetadata;
    }
    interface MultiServiceBookingMetadata {
        /**
         * Total number of the scheduled bookings within the multi service booking, including bookings which were not retrieved due to lack of read permissions.
         * Scheduled bookings are bookings with status CONFIRMED or PENDING.
         */
        totalNumberOfScheduledBookings?: number | null;
    }
    interface AddBookingsToMultiServiceBookingRequest {
        /** ID of the multi service booking. */
        multiServiceBookingId: string | null;
        /** List of bookings ids and their revisions to add to the multi service booking. */
        bookings: BookingIdAndRevision[];
        /** Whether to return the bookings entities. */
        returnFullEntity?: boolean;
    }
    interface BookingIdAndRevision {
        /** ID of the booking. */
        bookingId?: string | null;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision?: string | null;
    }
    interface AddBookingsToMultiServiceBookingResponse {
        /** The bookings that were added to the multi service booking. */
        bookings?: BookingResult[];
    }
    interface RemoveBookingsFromMultiServiceBookingRequest {
        /** ID of the multi service booking. */
        multiServiceBookingId: string | null;
        /** List of bookings ids and their revisions to remove from the multi service booking. */
        bookings?: BookingIdAndRevision[];
        /** Whether to return the bookings entities. */
        returnFullEntity?: boolean;
    }
    interface RemoveBookingsFromMultiServiceBookingResponse {
        /** The bookings that were removed from the multi service booking. */
        bookings?: BookingResult[];
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
    }
    interface EntityUpdatedEvent {
        /**
         * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
         * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
         * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
         */
        currentEntityAsJson?: string;
    }
    interface EntityDeletedEvent {
        /** Entity that was deleted */
        deletedEntityAsJson?: string | null;
    }
    interface ActionEvent {
        bodyAsJson?: string;
    }
    interface BookingChanged {
        /** The booking before the changes. */
        previousBooking?: Booking$1;
        /** The booking after the changes. */
        currentBooking?: Booking$1;
    }
    interface CreateBookingRequest {
        /** The booking to create. */
        booking: Booking$1;
        /** Information about a message to send to the customer. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         * Default: `true`.
         */
        sendSmsReminder?: boolean | null;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before creating the booking or if additional payment options are
         * accepted.
         */
        flowControlSettings?: CreateBookingFlowControlSettings;
    }
    interface CreateBookingResponse {
        /** Created booking. */
        booking?: Booking$1;
    }
    /**
     * The `fieldMask` should not include both the `numberOfParticipants` and `participantsInfo` paths. Including both results
     * in an error. `participantsInfo` is preferred over `numberOfParticipants`.
     */
    interface UpdateBookingRequest {
        booking: Booking$1;
    }
    interface UpdateBookingResponse {
        booking?: Booking$1;
    }
    interface LegacyCreateBookingRequest {
        booking: Booking$1;
    }
    interface LegacyCreateBookingResponse {
        booking?: Booking$1;
    }
    /**
     * The `fieldMask` for each booking should not include both the `numberOfParticipants` and `participantsInfo` paths. Including both results
     * in an error. `participantsInfo` is preferred over `numberOfParticipants`.
     */
    interface BulkUpdateBookingRequest {
        bookings: MaskedBooking[];
    }
    interface MaskedBooking {
        booking?: Booking$1;
    }
    interface BulkUpdateBookingResponse {
        results?: ItemMetadata[];
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface BulkCreateBookingRequest {
        /**
         * Bookings to create.
         * Max: 8 bookings.
         */
        createBookingsInfo: CreateBookingInfo[];
        /** Whether to return the created bookings entities. */
        returnFullEntity?: boolean;
    }
    interface CreateBookingInfo {
        /** The booking to create */
        booking?: Booking$1;
        /** Information about a message to send to the customer. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         * Default: `true`.
         */
        sendSmsReminder?: boolean | null;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before creating the booking or if additional payment options are
         * accepted.
         */
        flowControlSettings?: CreateBookingFlowControlSettings;
    }
    interface BulkCreateBookingResponse {
        /**
         * Bulk create booking results.
         * Whether it successfully created each booking, providing the corresponding error message if a failure occurred, and includes the created booking entity if the `returnFullEntity` is `true`.
         */
        results?: BulkBookingResult[];
        /** Total successes and failures of the bulk create booking action. */
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface BulkBookingResult {
        itemMetadata?: ItemMetadata;
        item?: Booking$1;
    }
    interface RescheduleBookingRequest extends RescheduleBookingRequestParticipantsInfoOneOf {
        /**
         * Total number of participants. Available only for services with
         * variants.
         * Pass when all participants book the same variant.
         */
        totalParticipants?: number;
        /**
         * Information about the service choices to book. Available only for services with
         * variants.
         * Pass when not all participants book the same variant.
         */
        participantsChoices?: ParticipantChoices$1;
        /** ID of the booking to reschedule. */
        bookingId: string;
        /** Information about the new slot. */
        slot: V2Slot;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
        /**
         * Information about whether to notify the customer about the rescheduling and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * rescheduling flow are changed. For example, whether the availability of
         * the new slot is checked before rescheduling the booking or if you can
         * reschedule the booking even though the rescheduling policy doesn't allow it.
         */
        flowControlSettings?: RescheduleBookingFlowControlSettings;
    }
    /** @oneof */
    interface RescheduleBookingRequestParticipantsInfoOneOf {
        /**
         * Total number of participants. Available only for services with
         * variants.
         * Pass when all participants book the same variant.
         */
        totalParticipants?: number;
        /**
         * Information about the service choices to book. Available only for services with
         * variants.
         * Pass when not all participants book the same variant.
         */
        participantsChoices?: ParticipantChoices$1;
    }
    interface RescheduleBookingResponse {
        /** Rescheduled booking. */
        booking?: Booking$1;
    }
    interface BulkRescheduleBookingRequest {
        /** Reschedule multiple bookings to multiple slots. */
        slotsBookings: SlotBookings[];
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$1;
    }
    interface BulkRescheduleBookingRequestBooking {
        /** ID of the bookings to be rescheduled. */
        _id?: string;
        revision?: string | null;
    }
    /** Bookings to be rescheduled to the given slot. */
    interface SlotBookings {
        /** The bookings details. */
        bookings?: BulkRescheduleBookingRequestBooking[];
        /**
         * The slot to which the bookings were rescheduled.
         * This bookings are automatically assigned to the session, if given. Otherwise, a new session is created.
         */
        slot?: BookedSlot$1;
    }
    interface BulkRescheduleBookingResponse {
        /** The bulk reschedule results. For each booking, the results contain the metadata of the reschedule action. */
        results?: ItemMetadata[];
        /** Total successes and failures of the bulk reschedule action. */
        bulkActionMetadata?: BulkActionMetadata;
    }
    /** Update the booked schedule of multiple bookings to the given schedule. */
    interface BulkUpdateBookedScheduleRequest {
        /** The bookings whose booked schedule is to be updated to the given schedule. */
        bookings: BookingDetails[];
        /** The ID of the schedule to be updated. */
        scheduleId: string;
        /** Whether to notify participants about the change and an optional custom message. */
        participantNotification?: ParticipantNotification$1;
    }
    interface BookingDetails {
        /** ID of the bookings to be updated. */
        _id?: string;
        revision?: string | null;
    }
    interface BulkUpdateBookedScheduleResponse {
        /** The bulk update results. For each booking, the results contain the metadata of the update action. */
        results?: ItemMetadata[];
        /** Total successes and failures of the bulk update action. */
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface QueryBookingsRequest {
        query: QueryV2;
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
        /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
        fields?: string[];
        /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
        fieldsets?: string[];
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
    interface QueryBookingsResponse {
        bookings?: Booking$1[];
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
    }
    interface Cursors {
        /** Cursor string pointing to the next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to the previous page in the list of results. */
        prev?: string | null;
    }
    interface ConfirmRequest {
        /** ID of the booking to be confirmed. */
        _id?: string;
        /** Whether to notify the participants about the booking confirmation, and an optional custom message. */
        participantNotification?: ParticipantNotification$1;
    }
    interface ConfirmResponse {
        /** Confirmed booking. */
        booking?: Booking$1;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
    }
    interface ConfirmBookingRequest {
        /** ID of the booking to confirm. */
        bookingId: string;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
        /**
         * Information about whether to notify the customer about the confirmation and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         */
        sendSmsReminder?: boolean | null;
        /**
         * Payment status to set for the booking.
         * One of:
         * - `"NOT_PAID"` The booking is not paid for.
         * - `"PAID"` The booking is fully paid.
         * - `"PARTIALLY_PAID"` The booking is partially paid.
         * - `"REFUNDED"` The booking is refunded.
         * - `"EXEMPT"` The booking is free of charge.
         */
        paymentStatus?: PaymentStatus$1;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before confirming the booking.
         */
        flowControlSettings?: ConfirmBookingFlowControlSettings;
    }
    interface ConfirmBookingResponse {
        booking?: Booking$1;
    }
    interface PartySizeRequest extends PartySizeRequestPartySizeForOneOf {
        sessionId?: string | null;
        scheduleId?: string | null;
    }
    /** @oneof */
    interface PartySizeRequestPartySizeForOneOf {
        sessionId?: string | null;
        scheduleId?: string | null;
    }
    interface PartySizeResponse {
        partySize?: number | null;
    }
    interface ConsistentQueryBookingsRequest {
        query?: QueryV2;
    }
    interface ConsistentQueryBookingsResponse {
        bookings?: Booking$1[];
        pagingMetadata?: PagingMetadataV2;
    }
    interface SetBookingSessionIdRequest {
        /** ID of the booking to set its sessionId. */
        _id: string;
        /** The sessionId to be set. */
        sessionId?: string;
    }
    interface SetBookingSessionIdResponse {
        /** The updated booking. */
        booking?: Booking$1;
    }
    interface UpdateExtendedFieldsRequest {
        /** ID of the entity to update. */
        _id: string;
        /** Identifier for the app whose extended fields are being updated. */
        namespace: string;
        /** Data to update. Structured according to the [schema](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields#json-schema-for-extended-fields) defined when the extended fields were configured. */
        namespaceData: Record<string, any> | null;
    }
    interface UpdateExtendedFieldsResponse {
        /** Identifier for the app whose extended field data was updated. */
        namespace?: string;
        /** Updated data. */
        namespaceData?: Record<string, any> | null;
    }
    interface DeclineBookingRequest {
        /** ID of the booking to decline. */
        bookingId: string;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
        /**
         * Information about whether to notify the customer about the decline and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
        /**
         * Payment status to set on the booking.
         * One of:
         * - `"NOT_PAID"` The booking is not paid for.
         * - `"PAID"` The booking is fully paid.
         * - `"PARTIALLY_PAID"` The booking is partially paid.
         * - `"REFUNDED"` The booking is refunded.
         * - `"EXEMPT"` The booking is free of charge.
         */
        paymentStatus?: PaymentStatus$1;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
    }
    interface DeclineBookingResponse {
        /** eclined booking */
        booking?: Booking$1;
    }
    interface CancelBookingRequest {
        /** ID of the booking to cancel. */
        bookingId: string;
        /**
         * Information about whether to notify the customer about the cancelation and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * cancelation flow are changed. For example, whether the you can cancel
         * a booking even though the cancelation policy doesn't allow it or whether
         * to issue a refund.
         */
        flowControlSettings?: CancelBookingFlowControlSettings;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes,
         * the current revision must be passed when managing the booking.
         */
        revision: string | null;
    }
    interface CancelBookingResponse {
        /** Canceled booking. */
        booking?: Booking$1;
    }
    interface UpdateNumberOfParticipantsRequest extends UpdateNumberOfParticipantsRequestParticipantsInfoOneOf {
        /**
         * Total number of participants. Available only for services with
         * variants.
         * Pass when all participants book the same variant.
         */
        totalParticipants?: number;
        /**
         * Information about the service choices to book. Available only for services with
         * variants.
         * Pass when not all participants book the same variant.
         */
        participantsChoices?: ParticipantChoices$1;
        /** ID of the booking to update the number of participants for. */
        bookingId: string;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
    }
    /** @oneof */
    interface UpdateNumberOfParticipantsRequestParticipantsInfoOneOf {
        /**
         * Total number of participants. Available only for services with
         * variants.
         * Pass when all participants book the same variant.
         */
        totalParticipants?: number;
        /**
         * Information about the service choices to book. Available only for services with
         * variants.
         * Pass when not all participants book the same variant.
         */
        participantsChoices?: ParticipantChoices$1;
    }
    interface UpdateNumberOfParticipantsResponse {
        /** Booking with updated number of participants. */
        booking?: Booking$1;
    }
    interface NumberOfParticipantsUpdated extends NumberOfParticipantsUpdatedPreviousParticipantsInfoOneOf {
        /** The previous total number of participants. Available only when the booking includes a single service variant. */
        previousTotalParticipants?: number;
        /**
         * Information about the previous booked service choices and participants.
         * Available only when the booking includes multiple service variants.
         */
        previousParticipantsChoices?: ParticipantChoices$1;
        /** The updated booking object. */
        booking?: Booking$1;
        /** ID of the participant number update initiator. */
        initiatedBy?: IdentificationData$1;
    }
    /** @oneof */
    interface NumberOfParticipantsUpdatedPreviousParticipantsInfoOneOf {
        /** The previous total number of participants. Available only when the booking includes a single service variant. */
        previousTotalParticipants?: number;
        /**
         * Information about the previous booked service choices and participants.
         * Available only when the booking includes multiple service variants.
         */
        previousParticipantsChoices?: ParticipantChoices$1;
    }
    interface CalculateAllowedActionsRequest {
        /** The booking id that we want to calculate the allowedActions for */
        bookingId: string | null;
    }
    interface CalculateAllowedActionsResponse {
        allowedActions?: AllowedActions;
    }
    interface BulkCalculateAllowedActionsRequest {
        /** The booking id's that we want to calculate the allowedActions for */
        bookingIds: string[] | null;
    }
    interface BulkCalculateAllowedActionsResponse {
        results?: BulkCalculateAllowedActionsResult[];
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface GetSlotAvailabilityRequest {
        /** The slot for which the availability is checked. */
        slot?: V2Slot;
        /** The timezone for which availability is to be calculated. */
        timezone?: string | null;
    }
    interface GetSlotAvailabilityResponse {
        availability?: SlotAvailability;
        bookingPolicySettings?: BookingPolicySettings;
    }
    interface SlotAvailability {
        /** Identifier for underlying session when session is a single session or generated from a recurring session. Required. */
        slot?: V2Slot;
        /** Whether this available slot is bookable. */
        bookable?: boolean;
        /**
         * Total number of spots for this availability.
         * For example, for a class of 10 spots with 3 spots booked, `spotsTotal` is 10, `openSpots` is 7.
         */
        totalSpots?: number | null;
        /**
         * Number of open spots for this availability.
         * For appointment if there are existing bookings with overlapping time, service & resource, `openSpots` is 0, otherwise `openSpots` is 1.
         */
        openSpots?: number | null;
        /** An object describing the slot's waiting-list and its occupancy. */
        waitingList?: WaitingList;
        /** Indicators for booking policy violations for the slot. */
        bookingPolicyViolations?: BookingPolicyViolations;
        /** Indicates whether this slot is locked. */
        locked?: boolean | null;
    }
    interface WaitingList {
        /**
         * Total number of spots and open spots for this waiting list.
         * For example, a Yoga class of 10 waiting list spots with 3 registered on the waiting list  has total_spots: 10 and open_spots: 7.
         */
        totalSpots?: number | null;
        openSpots?: number | null;
    }
    interface AvailableResources {
        /** Resource type ID. */
        resourceTypeId?: string | null;
        /**
         * Available resources for the slot.
         * maxSize defined by 135 staff members + 3 resource types and 50 resources per type.
         * Availability-2 currently have no maxSize defined.
         */
        resourceIds?: string[];
    }
    interface GetScheduleAvailabilityRequest {
        /** The schedule ID for which availability is checked. */
        scheduleId: string;
    }
    interface GetScheduleAvailabilityResponse {
        availability?: ScheduleAvailability;
        bookingPolicySettings?: BookingPolicySettings;
    }
    interface ScheduleAvailability {
        totalSpots?: number | null;
        openSpots?: number | null;
        /** Indicators of booking policy violations for the given Schedule. */
        bookingPolicyViolations?: BookingPolicyViolations;
    }
    interface MarkBookingAsPendingRequest {
        /** ID of the booking to mark as PENDING. */
        bookingId: string;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
        /**
         * Information about whether to notify the customer and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         */
        sendSmsReminder?: boolean | null;
        /**
         * Payment status to set for the booking.
         * One of:
         * - `"NOT_PAID"` The booking is not paid for.
         * - `"PAID"` The booking is fully paid.
         * - `"PARTIALLY_PAID"` The booking is partially paid.
         * - `"REFUNDED"` The booking is refunded.
         * - `"EXEMPT"` The booking is free of charge.
         */
        paymentStatus?: PaymentStatus$1;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before updating the booking's status.
         */
        flowControlSettings?: MarkBookingAsPendingFlowControlSettings;
    }
    interface MarkBookingAsPendingResponse {
        /** The updated booking */
        booking?: Booking$1;
    }
    interface BookingMarkedAsPending {
        /** The booking object that was marked as pending. */
        booking?: Booking$1;
        /** Information about whether to notify the customer upon manual confirmation of the pending booking and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         */
        sendSmsReminder?: boolean | null;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /** ID of the mark as pending initiator. */
        initiatedBy?: IdentificationData$1;
        /** The previous status of the booking. */
        previousStatus?: BookingStatus$1;
        /** The previous payment status of the booking. */
        previousPaymentStatus?: PaymentStatus$1;
    }
    interface MigrationCheckIfClashesWithBlockedTimeRequest {
        msidAndBookingIds?: MsidAndBookingId[];
    }
    interface MsidAndBookingId {
        msid?: string;
        bookingId?: string;
    }
    interface MigrationCheckIfClashesWithBlockedTimeResponse {
        clashes?: Clash[];
    }
    interface Clash {
        msid?: string;
        bookingId?: string;
        sessionId?: string;
        resourceName?: string;
        contactName?: string;
    }
    interface ConfirmOrDeclineBookingRequest {
        /** ID of the booking to confirm or decline. */
        bookingId: string;
        /** Current payment status of the booking. */
        paymentStatus?: PaymentStatus$1;
    }
    interface ConfirmOrDeclineBookingResponse {
        booking?: Booking$1;
    }
    interface BulkConfirmOrDeclineBookingRequest {
        /** The bookings to confirm or decline. */
        details: BulkConfirmOrDeclineBookingRequestBookingDetails[];
        /**
         * Whether to return the confirmed or declined bookings entities.
         * Not supported yet, currently the entity is not returned.
         */
        returnEntity?: boolean;
    }
    interface BulkConfirmOrDeclineBookingRequestBookingDetails {
        /** ID of the booking to confirm or decline. */
        bookingId?: string;
        /** Current payment status of the booking. */
        paymentStatus?: PaymentStatus$1;
    }
    interface BulkConfirmOrDeclineBookingResponse {
        /**
         * The bulk confirm or decline results.
         * For each booking, the results contain the metadata of the confirm or decline action.
         */
        results?: BulkBookingResult[];
        /** Total successes and failures of the bulk confirm or decline action. */
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface V2CreateBookingRequest extends V2CreateBookingRequestBookableItemOneOf, V2CreateBookingRequestParticipantsInfoOneOf {
        /**
         * Information about the slot to create a booking for.
         * If you set `slot.location.locationType` to `CUSTOM`, the created slot's
         * location is set to `slot.location.formattedAddress` when provided.
         * Otherwise it's set to `contactDetails.fullAddress.formattedAddress`.
         */
        slot?: Slot;
        /** Information about the schedule to create a booking for. */
        schedule?: BookedSchedule$1;
        /** Contact details of the customer booking the service. */
        contactDetails?: ContactDetails$1;
        /**
         * Booking status.
         * One of:
         * - `"CREATED"` - The booking was created.
         * - `"UPDATED"` - The booking was updated.
         * - `"CONFIRMED"` - The booking has been confirmed and appears on the bookings calendar.
         * Booking can be manually confirmed using the Set As Confirmed endpoint.
         * Booking can be automatically confirmed when the following requirements are met:
         * + The service is configured as automatically confirmed.
         * + Invoking eCommerce checkout API and an order has been created.
         * - `"CANCELED"` - The booking has been canceled and synced to bookings calendar.
         * The booking can be canceled using cancel API.
         * - `"PENDING"` - The booking waiting to be confirmed or declined buy the owner and is synced to bookings calendar.
         * Bookings can be manually set as pending using setAsPending API, requires manage booking status permissions.
         * Booking can be automatically set as pending when the following requirements are met:
         * + The Service is configured as manually confirmed.
         * + Invoking the eCommerce checkout API and an order has been created.
         * - `"WAITING_LIST"` - The booking is pending on a waiting list.
         * Booking can be created with this status when invoking waiting list join API.
         * - `"DECLINED"` - The booking was declined by the owner and synced to bookings calendar.
         * Booking can be manually declined using decline API and requires manage booking permissions.
         * Booking can be automatically declined when the following requirements are met:
         * + Invoking eCommerce checkout API and the order declined event has been sent.
         * + Invoking eCommerce checkout API and order approved event has been sent, but the booking is offline and the booking causes a double booking.
         */
        status?: BookingStatus$1;
        /**
         * Additional custom fields of the booking form. The customer must provide
         * information for each field when booking the service. For example, that they
         * bring their own towels or whether they use a wheelchair.
         *
         * Max: 100 fields
         */
        additionalFields?: CustomFormField$1[];
        /**
         * Total number of participants. Available only when the service doesn't have
         * [variants](https://dev.wix.com/api/rest/wix-bookings/service-options-and-variants/introduction).
         *
         * Max: `20`
         */
        numberOfParticipants?: number | null;
        /**
         * Internal business note. Not visible to the customer.
         *
         * Max: 200 characters
         */
        internalBusinessNote?: string | null;
        /**
         * Payment option the customer intends to use.
         * Must be one of the payment options defined for the service, unless
         * you pass `flowControlSettings.skipSelectedPaymentOptionValidation` as `true`.
         */
        selectedPaymentOption?: SelectedPaymentOption$1;
        /**
         * Identifies the source (platform, actor and app) that created this booking.
         * This property of the booking cannot be changed.
         * The app_def_id and app_name will be resolved automatically.
         * TODO GAP See if we need this - might be able to get this data from the headers?
         */
        bookingSource?: BookingSource$1;
        /**
         * A user identifier of an external application user that initiated the book request.
         * Allows an external application to later identify its own bookings and correlate to its own internal users
         */
        externalUserId?: string | null;
        /** Information about a message to send to the customer. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         *
         * Default: `true`.
         */
        sendSmsReminder?: boolean | null;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before creating the booking or if additional payment options are
         * accepted.
         */
        flowControlSettings?: CreateBookingRequestFlowControlSettings;
    }
    /** @oneof */
    interface V2CreateBookingRequestBookableItemOneOf {
        /**
         * Information about the slot to create a booking for.
         * If you set `slot.location.locationType` to `CUSTOM`, the created slot's
         * location is set to `slot.location.formattedAddress` when provided.
         * Otherwise it's set to `contactDetails.fullAddress.formattedAddress`.
         */
        slot?: Slot;
        /** Information about the schedule to create a booking for. */
        schedule?: BookedSchedule$1;
    }
    /** @oneof */
    interface V2CreateBookingRequestParticipantsInfoOneOf {
    }
    interface Slot {
        /**
         * ID for the slot's corresponding session, when the session is either a single session
         * or a specific session generated from a recurring session.
         */
        sessionId?: string | null;
        /** Service ID. */
        serviceId?: string;
        /** Schedule ID. */
        scheduleId?: string;
        /**
         * The start time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format.
         *
         * If `timezone` is specified,
         * dates are based on the local date/time. This means that the timezone offset
         * in the `start_date` is ignored.
         */
        startDate?: string | null;
        /**
         * The end time of this slot in
         * [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339) format.
         *
         * If `timezone` is specified,
         * dates are based on the local date/time. This means that the timezone offset
         * in the `end_date` is ignored.
         */
        endDate?: string | null;
        /**
         * The timezone for which slot availability is to be calculated.
         *
         * Learn more about [handling Daylight Savings Time (DST) for local time zones](https://dev.wix.com/api/rest/wix-bookings/availability-calendar/query-availability#wix-bookings_availability-calendar_query-availability_handling-daylight-savings-time-dst-for-local-time-zones)
         * when calculating availability.
         */
        timezone?: string | null;
        /**
         * The resource required for this slot. Currently, the only supported resource
         * is the relevant staff member for the slot.
         */
        resource?: SlotResource;
        /** Geographic location of the slot. */
        location?: Location$1;
    }
    interface SlotResource {
        /**
         * Resource ID.
         * @readonly
         */
        _id?: string | null;
        /** Resource name. Read only. */
        name?: string | null;
    }
    interface CreateBookingRequestFlowControlSettings {
        /**
         * Whether the availability is checked before creating the booking. When
         * passing `false` a booking is only created when the slot or schedule is
         * available. Your app must have the `BOOKINGS.OVERRIDE_AVAILABILITY`
         * permission scope when passing `true`.
         *
         * Default: `false`.
         */
        skipAvailabilityValidation?: boolean;
        /**
         * Whether `PENDING` bookings are automatically set to `CONFIRMED` for
         * services that normally require the owner's manual confirmation. Your
         * app must have the `BOOKINGS.OVERRIDE_AVAILABILITY` permission scope
         * when passing `true`.
         *
         * Default: `false`.
         */
        skipBusinessConfirmation?: boolean;
        /**
         * Whether customers can pay using a payment method that isn't supported
         * for the service, but that's supported for other services. Your app
         * must have the `BOOKINGS.MANAGE_PAYMENTS` permission scope when passing
         * `true`.
         *
         * Default: `false`.
         */
        skipSelectedPaymentOptionValidation?: boolean;
    }
    interface V2CreateBookingResponse {
        /** Created booking. */
        booking?: Booking$1;
    }
    interface V2CancelBookingRequest {
        /** ID of the booking to cancel. */
        bookingId: string;
        /**
         * Information about whether to notify the customer about the cancelation and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes,
         * the current revision must be passed when managing the booking.
         */
        revision: string | null;
    }
    interface V2CancelBookingRequestFlowControlSettings {
        /**
         * Whether the cancelation policy applies when canceling the booking. When
         * passing `false` you can only cancel a booking if the cancelation policy
         * allows it. Your app must have the `BOOKINGS.IGNORE_BOOKING_POLICY `
         * permission scope when passing `true`.
         *
         * Default: `false`.
         *
         * <!--ONLY:VELO
         * Requires "Manage Wix Bookings App" and "Manage Bookings' Calendar" [roles](https://support.wix.com/en/article/roles-permissions-overview#bookings-admin).
         * <!--END:ONLY:VELO-->
         */
        ignoreCancellationPolicy?: boolean;
        /**
         * Whether to issue a refund when canceling the booking.
         * The refund will be issued only if the booking is refundable.
         * Currently, booking is considered refundable when it was paid by membership.
         * If passing `true`, the booking flow control settings will be set with refund,
         * otherwise, either if `false` is passed or the field remains empty,
         * the booking flow control settings will be set with no refund.
         *
         * Default: `false`.
         */
        withRefund?: boolean | null;
    }
    interface V2CancelBookingResponse {
        /** Canceled booking. */
        booking?: Booking$1;
    }
    interface V2RescheduleBookingRequest extends V2RescheduleBookingRequestParticipantsInfoOneOf {
        /** Id of the booking to reschedule. */
        bookingId: string;
        /** Information about the new slot. */
        slot: Slot;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
        /**
         * Information about whether to notify the customer about the rescheduling and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
    }
    /** @oneof */
    interface V2RescheduleBookingRequestParticipantsInfoOneOf {
    }
    interface V2RescheduleBookingRequestFlowControlSettings {
        /**
         * Whether the rescheduling policy applies when rescheduling the booking.
         * When passing `false` you can only cancel a booking if the rescheduling
         * policy allows it. Your app must have the `BOOKINGS.IGNORE_BOOKING_POLICY `
         * permission scope when passing `true`.
         *
         * Default: `false`.
         *
         * <!--ONLY:VELO
         * Requires "Manage Wix Bookings App" and "Manage Bookings' Calendar" [roles](https://support.wix.com/en/article/roles-permissions-overview#bookings-admin).
         * <!--END:ONLY:VELO-->
         */
        ignoreReschedulePolicy?: boolean;
        /**
         * Whether the availability is checked before rescheduling the booking.
         * When passing `false` a booking is only created when the slot or
         * schedule is available. Your app must have the `BOOKINGS.OVERRIDE_AVAILABILITY`
         * permission scope when passing `true`.
         *
         * Default: `false`.
         */
        skipAvailabilityValidation?: boolean;
        /**
         * Whether the rescheduled booking's status is automatically set to
         * `CONFIRMED` for services that normally require the owner's manual
         * confirmation. Your app must have the `BOOKINGS.OVERRIDE_AVAILABILITY`
         * permission scope when passing `true`.
         *
         * Default: `false`.
         */
        skipBusinessConfirmation?: boolean;
    }
    interface V2RescheduleBookingResponse {
        /** Rescheduled booking. */
        booking?: Booking$1;
    }
    interface V2ConfirmBookingRequest {
        /** ID of the booking to confirm. */
        bookingId: string;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
        /**
         * Information about whether to notify the customer about the confirmation and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
    }
    interface V2ConfirmBookingResponse {
        booking?: Booking$1;
    }
    interface V2DeclineBookingRequest {
        /** ID of the booking to decline. */
        bookingId: string;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
        /**
         * Information about whether to notify the customer about the decline and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
    }
    interface V2DeclineBookingResponse {
        /** Declined booking. */
        booking?: Booking$1;
    }
    interface V2UpdateNumberOfParticipantsRequest extends V2UpdateNumberOfParticipantsRequestParticipantsInfoOneOf {
        /** ID of the booking to update the number of participants for. */
        bookingId: string;
        /** Updated number of participants. */
        numberOfParticipants?: number | null;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
    }
    /** @oneof */
    interface V2UpdateNumberOfParticipantsRequestParticipantsInfoOneOf {
    }
    interface V2UpdateNumberOfParticipantsResponse {
        /** Booking with updated number of participants. */
        booking?: Booking$1;
    }
    interface CreateMultiServiceBookingOptions {
        /** Information about a message to send to the customer. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         * Default: `true`.
         */
        sendSmsReminder?: boolean | null;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before creating the booking or if additional payment options are
         * accepted.
         */
        flowControlSettings?: CreateBookingFlowControlSettings;
        /** Whether to return the created bookings entities. */
        returnFullEntity?: boolean;
        /**
         * Multi service booking type.
         * One of:
         * - `"SEQUENTIAL_BOOKINGS"` Multi service booking will be considered available if its bookings are available as returned from ListMultiServiceAvailabilityTimeSlots API.
         * - `"SEPARATE_BOOKINGS"` Not supported yet.
         * - `"PARALLEL_BOOKINGS"` Not supported yet.
         */
        multiServiceBookingType?: MultiServiceBookingType$1;
    }
    interface RescheduleMultiServiceBookingOptions {
        /** Information about whether to notify the customer about the rescheduling and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * rescheduling flow are changed. For example, whether the availability of
         * the new slot is checked before rescheduling the booking or if you can
         * reschedule the booking even though the rescheduling policy doesn't allow it.
         */
        flowControlSettings?: RescheduleBookingFlowControlSettings;
        /** Whether to return the rescheduled bookings entities. */
        returnFullEntity?: boolean;
    }
    interface CancelMultiServiceBookingOptions {
        /** Information about whether to notify the customer about the cancelation and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * cancelation flow are changed. For example, whether the you can cancel
         * a booking even though the cancelation policy doesn't allow it or whether
         * to issue a refund.
         */
        flowControlSettings?: CancelBookingFlowControlSettings;
        /** Whether to return the canceled bookings entities. */
        returnFullEntity?: boolean;
    }
    interface MarkMultiServiceBookingAsPendingOptions {
        /** Bookings to mark as pending. */
        markAsPendingBookingsInfo?: BookingInfo[];
        /** Information about whether to notify the customer upon manual confirmation and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         */
        sendSmsReminder?: boolean | null;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /** Whether to return the pending bookings entities. */
        returnFullEntity?: boolean;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before updating the booking.
         */
        flowControlSettings?: MarkBookingAsPendingFlowControlSettings;
    }
    interface ConfirmMultiServiceBookingOptions {
        /** Bookings to confirm. */
        confirmBookingsInfo?: BookingInfo[];
        /** Information about whether to notify the customer about the confirmation and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         */
        sendSmsReminder?: boolean | null;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /** Whether to return the confirmed bookings entities. */
        returnFullEntity?: boolean;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * confirmation flow are changed. For example, whether the availability is
         * checked before confirming the booking.
         */
        flowControlSettings?: ConfirmBookingFlowControlSettings;
    }
    interface DeclineMultiServiceBookingOptions {
        /** Bookings to decline. */
        declineBookingsInfo?: BookingInfo[];
        /** Information about whether to notify the customer about the decline and the message to send. */
        participantNotification?: ParticipantNotification$1;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /** Whether to return the declined bookings entities. */
        returnFullEntity?: boolean;
    }
    interface MarkAsMultiServiceBookingOptions {
        /**
         * Multi service booking type.
         * One of:
         * - `"SEQUENTIAL_BOOKINGS"` Multi service booking will be considered available if its bookings are available as returned from ListMultiServiceAvailabilityTimeSlots API.
         * - `"SEPARATE_BOOKINGS"` Not supported yet.
         * - `"PARALLEL_BOOKINGS"` Not supported yet.
         */
        multiServiceBookingType?: MultiServiceBookingType$1;
    }
    interface AddBookingsToMultiServiceBookingOptions {
        /** List of bookings ids and their revisions to add to the multi service booking. */
        bookings: BookingIdAndRevision[];
        /** Whether to return the bookings entities. */
        returnFullEntity?: boolean;
    }
    interface RemoveBookingsFromMultiServiceBookingOptions {
        /** List of bookings ids and their revisions to remove from the multi service booking. */
        bookings?: BookingIdAndRevision[];
        /** Whether to return the bookings entities. */
        returnFullEntity?: boolean;
    }
    /**
     * Creates a booking.
     *
     *
     * To create a booking for an appointment or a session of a class, pass a booking with the relevant `slot`.
     *
     * To create a booking for the entire course, pass a booking with the relevant `schedule`.
     * You can use the Query Availability endpoint to check the availability beforehand.
     *
     * If you create a booking for an existing session, we recommend that you only pass `slot.sessionId`.
     * Then, any specified slot details are calculated.
     *
     * If you create a booking for a new session, we recommend to call Query Availability first.
     * Then, pass the retrieved `availability.slot` object as the BookedEntity.Slot of the booking in the request.
     *
     * Bookings are created with a status of `CREATED`.
     * `CREATED` bookings don't appear on the business calendar and don't affect a related schedule's availability.
     *
     * To create a booking with a given status, pass a booking with the wanted status.
     * This is only permitted for site Owners.
     *
     * You can pass a `participantNotification.message` to notify the customer of the booking with a message.
     * It's also necessary to pass `participantNotification.notifyParticipants`as `true` to send the message.
     *
     * You can pass `sendSmsReminder` as `true`, if you want an SMS reminder to be sent to the phone number specified in the ContactDetails, 24 hours before the session starts.
     *
     * When creating a booking you must pass either `participantsChoices` or `totalParticipants`. If you pass `participantsChoices`, all the
     * provided choices must exist for the service, otherwise the call returns an `INVALID_SERVICE_CHOICES` error.
     *
     * When creating a booking, you can pass `selectedPaymentOption`.
     * This specifies which payment method the customer plans to use.
     * But it's possible for them to later use another supported payment method.
     *
     * You can skip the checkout and payment flow if you call Confirm Or Decline Booking otherwise, after you create the booking, you can use the
     * Wix eCommerce APIs (coming soon) for the checkout and payment flow or use a different service for checkout.
     * @param booking - The booking to create.
     * @public
     * @documentationMaturity preview
     * @requiredField booking
     * @requiredField booking.additionalFields._id
     * @requiredField booking.bookedEntity
     */
    function createBooking(booking: Booking$1, options?: CreateBookingOptions): Promise<CreateBookingResponse>;
    interface CreateBookingOptions {
        /** Information about a message to send to the customer. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         * Default: `true`.
         */
        sendSmsReminder?: boolean | null;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before creating the booking or if additional payment options are
         * accepted.
         */
        flowControlSettings?: CreateBookingFlowControlSettings;
    }
    interface UpdateBooking {
        /** Total number of participants. Available only when the booking includes a single service variant. */
        totalParticipants?: number;
        /**
         * Information about the booked service choices and participants.
         * Available only when the booking includes multiple service variants.
         */
        participantsChoices?: ParticipantChoices$1;
        /**
         * Booking ID.
         * @readonly
         */
        _id?: string | null;
        /** An object describing the slot or schedule that was booked. */
        bookedEntity?: BookedEntity$1;
        /** Contact details of the site visitor or member making the booking. */
        contactDetails?: ContactDetails$1;
        /** Additional custom fields submitted with the booking form. */
        additionalFields?: CustomFormField$1[];
        /**
         * Booking status.
         * One of:
         * - `"CREATED"` - The booking was created.
         * - `"UPDATED"` - The booking was updated.
         * - `"CONFIRMED"` - The booking has been confirmed and appears on the bookings calendar.
         * Booking can be automatically confirmed when the following requirements are met:
         * + The service is configured as automatically confirmed.
         * + Invoking eCommerce checkout API and an order has been created.
         * - `"CANCELED"` - The booking has been canceled and synced to bookings calendar.
         * The booking can be canceled using cancel cancelBooking().
         * - `"PENDING"` - The booking waiting to be confirmed or declined buy the owner and is synced to bookings calendar.
         * Booking can be automatically set as pending when the following requirements are met:
         * + The Service is configured as manually confirmed.
         * + Invoking the eCommerce checkout API and an order has been created.
         * - `"WAITING_LIST"` - The booking is pending on a waiting list.
         * - `"DECLINED"` - The booking was declined by the owner and synced to bookings calendar.
         * Booking can be manually declined using declineBooking() and requires manage booking permissions.
         * Booking can be automatically declined when the following requirements are met:
         * + Invoking eCommerce checkout API and the order declined event has been sent.
         * + Invoking eCommerce checkout API and order approved event has been sent, but the booking is offline and the booking causes a double booking.
         */
        status?: BookingStatus$1;
        /**
         * Payment status.
         * One of:
         * - `"NOT_PAID"` The booking is not paid for.
         * - `"PAID"` The booking is fully paid.
         * - `"PARTIALLY_PAID"` The booking is partially paid.
         * - `"REFUNDED"` The booking is refunded.
         * - `"EXEMPT"` The booking is free of charge.
         * @readonly
         */
        paymentStatus?: PaymentStatus$1;
        /**
         * Selected payment option.
         * One of the payment options offered by the service, or another option if `skipSelectedPaymentOptionValidation` is `true`.
         * When undefined, the payment option is resolved by the service configuration on checkout.
         */
        selectedPaymentOption?: SelectedPaymentOption$1;
        /**
         * Date and time the booking was created.
         * @readonly
         */
        _createdDate?: Date;
        /** External ID provided by the client app on creation. */
        externalUserId?: string | null;
        /** Revision number to be used when updating, rescheduling, or cancelling the booking. Revision number, which increments by 1 each time the booking is updated, rescheduled, or canceled. To prevent conflicting changes,the current revision must be passed when updating the booking. */
        revision?: string | null;
        /**
         * ID of the creator of the Booking.
         * If `appId` and another ID are present, the other ID takes precedence.
         * @readonly
         */
        createdBy?: CommonIdentificationData;
        /**
         * The start date of this booking. For a slot, this is the start date of the slot. For a schedule, this is the start date of the first session.
         * @readonly
         */
        startDate?: Date;
        /**
         * The end date of this booking. For a slot, this is the end date of the slot. For a schedule, this is the end date of the last session.
         * @readonly
         */
        endDate?: Date;
        /**
         * Date and time the booking was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /** Custom field data for this object. Extended fields must be configured in the Wix Dev Center before they can be accessed with API calls. */
        extendedFields?: ExtendedFields$1;
        /**
         * Whether this booking overlaps another existing confirmed booking. Returned when: `true`
         * @readonly
         */
        doubleBooked?: boolean | null;
    }
    interface UpdateBookingOptions {
    }
    /**
     * Creates multiple bookings.
     *
     *
     * See [`createBooking()`](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/createbooking) documentation.
     *
     * If for any of the bookings required fields were not passed on the request or if the caller doesn't have the required permissions to create such booking, the call will fail.
     * If the request contains unavailable bookings, the call will be completed successfully, but the unavailable bookings will not be created and will be considered as a failure on the response.
     * @param createBookingsInfo - Bookings to create.
     * Max: 8 bookings.
     * @public
     * @documentationMaturity preview
     * @requiredField createBookingsInfo
     * @requiredField createBookingsInfo.booking
     * @requiredField createBookingsInfo.booking.additionalFields._id
     * @requiredField createBookingsInfo.booking.bookedEntity
     */
    function bulkCreateBooking(createBookingsInfo: CreateBookingInfo[], options?: BulkCreateBookingOptions): Promise<BulkCreateBookingResponse>;
    interface BulkCreateBookingOptions {
        /** Whether to return the created bookings entities. */
        returnFullEntity?: boolean;
    }
    /**
     * Reschedules a booking to a different slot or session.
     *
     *
     * You can only reschedule bookings for appointments or classes, you can't
     * reschedule course bookings.
     *
     * The old session is removed from the calendar and the new session is
     * added.
     *
     * If you reschedule a booking for a class session the new session must be an
     * existing session for the same class.
     *
     * You can pass a `participantNotification.message` to notify the customer of
     * the rescheduling. You also need to pass `participantNotification.notifyParticipants`
     * as `true` to actually send the message.
     *
     * In case the service has
     * variants, you can call this endpoint to update the booking's `totalParticipants` or `participantsChoices`.
     * If you provide `participantsChoices`, all of the provided choices must exist for
     * the service. Otherwise, the call returns an `INVALID_SERVICE_CHOICES` error.
     * If you omit `participantsChoices` in the request, the existing choices are
     * kept and not replaced with an empty object.
     *
     * <!-- INTERNAL PERMISSION COMMENT:
     * You need to have the `BOOKINGS.NUMBER_OF_PARTICIPANTS_UPDATE` permission
     * to reschedule bookings including `participantsInfo`.
     * <!--END: INTERNAL PERMISSION COMMENT-->
     *
     * In case you want to reschedule a booking on behalf of a customer, we recommend
     * to pass `flowControlSettings.ignoreReschedulePolicy` as `false`. This
     * ensures that the rescheduling is validated against the service's rescheduling
     * policy.
     * @param bookingId - ID of the booking to reschedule.
     * @param slot - Information about the new slot.
     * @public
     * @documentationMaturity preview
     * @requiredField bookingId
     * @requiredField options.revision
     * @requiredField slot
     * @param options - An object representing the available options for rescheduling a booking.
     * @adminMethod
     */
    function rescheduleBooking(bookingId: string, slot: V2Slot, options?: RescheduleBookingOptions): Promise<RescheduleBookingResponse>;
    interface RescheduleBookingOptions extends RescheduleBookingRequestParticipantsInfoOneOf {
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
        /**
         * Information about whether to notify the customer about the rescheduling and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * rescheduling flow are changed. For example, whether the availability of
         * the new slot is checked before rescheduling the booking or if you can
         * reschedule the booking even though the rescheduling policy doesn't allow it.
         */
        flowControlSettings?: RescheduleBookingFlowControlSettings;
        /**
         * Total number of participants. Available only for services with
         * variants.
         * Pass when all participants book the same variant.
         */
        totalParticipants?: number;
        /**
         * Information about the service choices to book. Available only for services with
         * variants.
         * Pass when not all participants book the same variant.
         */
        participantsChoices?: ParticipantChoices$1;
    }
    interface BulkRescheduleBookingOptions {
        /** Whether to notify participants about the change and an optional custom message */
        participantNotification?: ParticipantNotification$1;
    }
    interface BulkUpdateBookedScheduleOptions {
        /** The ID of the schedule to be updated. */
        scheduleId: string;
        /** Whether to notify participants about the change and an optional custom message. */
        participantNotification?: ParticipantNotification$1;
    }
    interface QueryOptions {
    }
    /**
     * Confirms a booking request and changes the booking status to `CONFIRMED`.
     *
     *
     * Calling this method doesn't check whether a slot or schedule is still
     * available at this time.
     *
     * You can only confirm bookings for services that require the owner's manual
     * approval for bookings and that have a status of `PENDING`.
     *
     * For appointment services the slot may become unavailable, depending on the
     * [service's](https://support.wix.com/en/article/creating-the-right-booking-service-for-your-business)
     * `policy.bookingApprovalPolicy.requestsAffectsAvailability`.
     *
     * Calling this method also changes the
     * [session's](https://www.wix.com/velo/reference/wix-bookings-backend/sessions/getsession)
     * `participants.approvalStatus` to `APPROVED`.
     *
     * You can pass a `participantNotification.message` to notify the customer of
     * the confirmation. You also need to pass `participantNotification.notifyParticipants`
     * as `true` to actually send the message.
     *
     * Bookings are automatically confirmed when the
     * service is configured to automatically confirm
     * bookings and the [eCommerce order](https://www.wix.com/velo/reference/wix-ecom-backend/orders)
     * has been approved. The slot's or schedule's availability is checked just
     * before confirming the booking as part of the automatic flow.
     * @param bookingId - ID of the booking to confirm.
     * @param revision - Revision number, which increments by 1 each time the booking is updated.
     * To prevent conflicting changes, the current revision must be passed when
     * managing the booking.
     * @public
     * @documentationMaturity preview
     * @requiredField bookingId
     * @requiredField revision
     * @param options - An object representing the available options for canceling a booking.
     * @adminMethod
     */
    function confirmBooking(bookingId: string, revision: string | null, options?: ConfirmBookingOptions): Promise<ConfirmBookingResponse>;
    interface ConfirmBookingOptions {
        /**
         * Information about whether to notify the customer about the confirmation and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         */
        sendSmsReminder?: boolean | null;
        /**
         * Payment status to set for the booking.
         * One of:
         * - `"NOT_PAID"` The booking is not paid for.
         * - `"PAID"` The booking is fully paid.
         * - `"PARTIALLY_PAID"` The booking is partially paid.
         * - `"REFUNDED"` The booking is refunded.
         * - `"EXEMPT"` The booking is free of charge.
         */
        paymentStatus?: PaymentStatus$1;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before confirming the booking.
         */
        flowControlSettings?: ConfirmBookingFlowControlSettings;
    }
    interface PartySizeOptions extends PartySizeRequestPartySizeForOneOf {
        sessionId?: string | null;
        scheduleId?: string | null;
    }
    interface ConsistentQueryOptions {
        query?: QueryV2;
    }
    interface SetBookingSessionIdOptions {
        /** The sessionId to be set. */
        sessionId?: string;
    }
    /**
     * Updates the extended fields for a booking.
     *
     *
     * Extended fields must first be configured in the Wix Developers Center.
     *
     * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
     * @param _id - ID of the entity to update.
     * @param namespace - Identifier for the app whose extended fields are being updated.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField namespace
     * @requiredField options
     * @requiredField options.namespaceData
     * @adminMethod
     */
    function updateExtendedFields(_id: string, namespace: string, options: UpdateExtendedFieldsOptions): Promise<UpdateExtendedFieldsResponse>;
    interface UpdateExtendedFieldsOptions {
        /** Data to update. Structured according to the [schema](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields#json-schema-for-extended-fields) defined when the extended fields were configured. */
        namespaceData: Record<string, any> | null;
    }
    /**
     * Declines a `PENDING` booking request and changes the booking status to
     * `DECLINED`.
     *
     * Calling this method also changes the
     * [session's](https://www.wix.com/velo/reference/wix-bookings-backend/sessions/getsession)
     * `participants.approvalStatus` to `DECLINED`.
     *
     * You can only decline bookings for services that require the owner's manual
     * approval for bookings and that have a status of `PENDING`.
     *
     * You can pass a `participantNotification.message` to notify the customer of
     * the decline. You also need to pass `participantNotification.notifyParticipants`
     * as `true` to actually send the message.
     * @param bookingId - ID of the booking to decline.
     * @param revision - Revision number, which increments by 1 each time the booking is updated.
     * To prevent conflicting changes, the current revision must be passed when
     * managing the booking.
     * @public
     * @documentationMaturity preview
     * @requiredField bookingId
     * @requiredField revision
     * @param options - An object representing the available options for declining a booking.
     * @adminMethod
     */
    function declineBooking(bookingId: string, revision: string | null, options?: DeclineBookingOptions): Promise<DeclineBookingResponse>;
    interface DeclineBookingOptions {
        /**
         * Information about whether to notify the customer about the decline and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
        /**
         * Payment status to set on the booking.
         * One of:
         * - `"NOT_PAID"` The booking is not paid for.
         * - `"PAID"` The booking is fully paid.
         * - `"PARTIALLY_PAID"` The booking is partially paid.
         * - `"REFUNDED"` The booking is refunded.
         * - `"EXEMPT"` The booking is free of charge.
         */
        paymentStatus?: PaymentStatus$1;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
    }
    /**
     * Cancels a booking.
     *
     *
     * The booking status changes to `CANCELED`.
     *
     * If the booking was for an appointment, the corresponding session is
     * deleted from the business calendar.
     *
     * If the booking was for a class or course, the participants are removed
     * from the class session or the course. But the course or class session
     * remains on the business calendar.
     *
     * You can pass a `participantNotification.message` to notify the customer of
     * the cancelation. You also need to pass `participantNotification.notifyParticipants`
     * as `true` to actually send the message.
     *
     * In case you want to cancel a booking on behalf of a customer, we recommend
     * to pass `flowControlSettings.ignoreCancellationPolicy` as `false`. This
     * ensures that the cancelation is validated against the service's cancelation
     * policy.
     * @param bookingId - ID of the booking to cancel.
     * @public
     * @documentationMaturity preview
     * @requiredField bookingId
     * @requiredField options.revision
     * @param options - An object representing the available options for canceling a booking.
     * @adminMethod
     */
    function cancelBooking(bookingId: string, options?: CancelBookingOptions): Promise<CancelBookingResponse>;
    interface CancelBookingOptions {
        /**
         * Information about whether to notify the customer about the cancelation and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * cancelation flow are changed. For example, whether the you can cancel
         * a booking even though the cancelation policy doesn't allow it or whether
         * to issue a refund.
         */
        flowControlSettings?: CancelBookingFlowControlSettings;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes,
         * the current revision must be passed when managing the booking.
         */
        revision: string | null;
    }
    /**
     * Updates the number of participants for a booking.
     *
     *
     * You can only update the number of participants for class and course
     * bookings, you can't update it for appointment bookings.
     *
     * Calling this method also changes the
     * [session's](https://www.wix.com/velo/reference/wix-bookings-backend/sessions/getsession)
     * `totalNumberOfParticipants`.
     *
     * When updating the number of participants for a booking you must pass either
     * `participantsChoices` or `totalParticipants`. If you pass `participantsChoices`
     * for services that have variants,
     * all of the provided choices must exist for the service. Otherwise, the
     * call returns an `INVALID_SERVICE_CHOICES` error.
     * @param bookingId - ID of the booking to update the number of participants for.
     * @public
     * @documentationMaturity preview
     * @requiredField bookingId
     * @requiredField options.revision
     * @adminMethod
     */
    function updateNumberOfParticipants(bookingId: string, options?: UpdateNumberOfParticipantsOptions): Promise<UpdateNumberOfParticipantsResponse>;
    interface UpdateNumberOfParticipantsOptions extends UpdateNumberOfParticipantsRequestParticipantsInfoOneOf {
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
        /**
         * Total number of participants. Available only for services with
         * variants.
         * Pass when all participants book the same variant.
         */
        totalParticipants?: number;
        /**
         * Information about the service choices to book. Available only for services with
         * variants.
         * Pass when not all participants book the same variant.
         */
        participantsChoices?: ParticipantChoices$1;
    }
    interface GetSlotAvailabilityOptions {
        /** The slot for which the availability is checked. */
        slot?: V2Slot;
        /** The timezone for which availability is to be calculated. */
        timezone?: string | null;
    }
    interface MarkBookingAsPendingOptions {
        /**
         * Information about whether to notify the customer and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         */
        sendSmsReminder?: boolean | null;
        /**
         * Payment status to set for the booking.
         * One of:
         * - `"NOT_PAID"` The booking is not paid for.
         * - `"PAID"` The booking is fully paid.
         * - `"PARTIALLY_PAID"` The booking is partially paid.
         * - `"REFUNDED"` The booking is refunded.
         * - `"EXEMPT"` The booking is free of charge.
         */
        paymentStatus?: PaymentStatus$1;
        /** Whether this booking overlaps with another existing confirmed booking. */
        doubleBooked?: boolean | null;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before updating the booking's status.
         */
        flowControlSettings?: MarkBookingAsPendingFlowControlSettings;
    }
    /**
     * Use `confirmOrDeclineBooking()` to determine if the booking is valid, payment is received, and the booking can be processed.
     * Call `confirmOrDeclineBooking()` after checkout or after calling `createBooking()` to verify the booking.
     *
     * + If a session is valid and payment is received, the booking is visible on the calendar.
     * + If a session is double booked, `confirmOrDeclineBooking()` can catch this and decline the duplicate booking, the booking is not visible on the calendar.
     * @param bookingId - ID of the booking to confirm or decline.
     * @public
     * @documentationMaturity preview
     * @requiredField bookingId
     * @adminMethod
     */
    function confirmOrDeclineBooking(bookingId: string, options?: ConfirmOrDeclineBookingOptions): Promise<ConfirmOrDeclineBookingResponse>;
    interface ConfirmOrDeclineBookingOptions {
        /** Current payment status of the booking. */
        paymentStatus?: PaymentStatus$1;
    }
    /**
     * Confirm or decline multiple bookings.
     * See [Confirm Or Decline Booking] (https://dev.wix.com/api/rest/wix-bookings/confirmation/confirm-or-decline-booking) documentation.
     * @param details - The bookings to confirm or decline.
     * @public
     * @documentationMaturity preview
     * @requiredField details
     * @requiredField details.bookingId
     * @adminMethod
     */
    function bulkConfirmOrDeclineBooking(details: BulkConfirmOrDeclineBookingRequestBookingDetails[], options?: BulkConfirmOrDeclineBookingOptions): Promise<BulkConfirmOrDeclineBookingResponse>;
    interface BulkConfirmOrDeclineBookingOptions {
        /**
         * Whether to return the confirmed or declined bookings entities.
         * Not supported yet, currently the entity is not returned.
         */
        returnEntity?: boolean;
    }
    interface BookingsGatewayCreateBookingOptions extends V2CreateBookingRequestBookableItemOneOf, V2CreateBookingRequestParticipantsInfoOneOf {
        /**
         * Information about the slot to create a booking for.
         * If you set `slot.location.locationType` to `CUSTOM`, the created slot's
         * location is set to `slot.location.formattedAddress` when provided.
         * Otherwise it's set to `contactDetails.fullAddress.formattedAddress`.
         */
        slot?: Slot;
        /** Information about the schedule to create a booking for. */
        schedule?: BookedSchedule$1;
        /** Contact details of the customer booking the service. */
        contactDetails?: ContactDetails$1;
        /**
         * Booking status.
         * One of:
         * - `"CREATED"` - The booking was created.
         * - `"UPDATED"` - The booking was updated.
         * - `"CONFIRMED"` - The booking has been confirmed and appears on the bookings calendar.
         * Booking can be manually confirmed using the Set As Confirmed endpoint.
         * Booking can be automatically confirmed when the following requirements are met:
         * + The service is configured as automatically confirmed.
         * + Invoking eCommerce checkout API and an order has been created.
         * - `"CANCELED"` - The booking has been canceled and synced to bookings calendar.
         * The booking can be canceled using cancel API.
         * - `"PENDING"` - The booking waiting to be confirmed or declined buy the owner and is synced to bookings calendar.
         * Bookings can be manually set as pending using setAsPending API, requires manage booking status permissions.
         * Booking can be automatically set as pending when the following requirements are met:
         * + The Service is configured as manually confirmed.
         * + Invoking the eCommerce checkout API and an order has been created.
         * - `"WAITING_LIST"` - The booking is pending on a waiting list.
         * Booking can be created with this status when invoking waiting list join API.
         * - `"DECLINED"` - The booking was declined by the owner and synced to bookings calendar.
         * Booking can be manually declined using decline API and requires manage booking permissions.
         * Booking can be automatically declined when the following requirements are met:
         * + Invoking eCommerce checkout API and the order declined event has been sent.
         * + Invoking eCommerce checkout API and order approved event has been sent, but the booking is offline and the booking causes a double booking.
         */
        status?: BookingStatus$1;
        /**
         * Additional custom fields of the booking form. The customer must provide
         * information for each field when booking the service. For example, that they
         * bring their own towels or whether they use a wheelchair.
         *
         * Max: 100 fields
         */
        additionalFields?: CustomFormField$1[];
        /**
         * Total number of participants. Available only when the service doesn't have
         * [variants](https://dev.wix.com/api/rest/wix-bookings/service-options-and-variants/introduction).
         *
         * Max: `20`
         */
        numberOfParticipants?: number | null;
        /**
         * Internal business note. Not visible to the customer.
         *
         * Max: 200 characters
         */
        internalBusinessNote?: string | null;
        /**
         * Payment option the customer intends to use.
         * Must be one of the payment options defined for the service, unless
         * you pass `flowControlSettings.skipSelectedPaymentOptionValidation` as `true`.
         */
        selectedPaymentOption?: SelectedPaymentOption$1;
        /**
         * Identifies the source (platform, actor and app) that created this booking.
         * This property of the booking cannot be changed.
         * The app_def_id and app_name will be resolved automatically.
         * TODO GAP See if we need this - might be able to get this data from the headers?
         */
        bookingSource?: BookingSource$1;
        /**
         * A user identifier of an external application user that initiated the book request.
         * Allows an external application to later identify its own bookings and correlate to its own internal users
         */
        externalUserId?: string | null;
        /** Information about a message to send to the customer. */
        participantNotification?: ParticipantNotification$1;
        /**
         * Whether to send an SMS reminder to the customer 24 hours before the
         * session starts. The phone number is taken from `contactDetails.phone`.
         *
         * Default: `true`.
         */
        sendSmsReminder?: boolean | null;
        /**
         * Information about whether specific procedures of the standard Wix Bookings
         * creation flow are changed. For example, whether the availability is
         * checked before creating the booking or if additional payment options are
         * accepted.
         */
        flowControlSettings?: CreateBookingRequestFlowControlSettings;
    }
    interface BookingsGatewayCancelBookingOptions {
        /**
         * Information about whether to notify the customer about the cancelation and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes,
         * the current revision must be passed when managing the booking.
         */
        revision: string | null;
    }
    interface BookingsGatewayRescheduleBookingOptions extends V2RescheduleBookingRequestParticipantsInfoOneOf {
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
        /**
         * Information about whether to notify the customer about the rescheduling and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
    }
    interface BookingsGatewayConfirmBookingOptions {
        /**
         * Information about whether to notify the customer about the confirmation and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
    }
    interface BookingsGatewayDeclineBookingOptions {
        /**
         * Information about whether to notify the customer about the decline and
         * the message to send.
         */
        participantNotification?: ParticipantNotification$1;
    }
    interface BookingsGatewayUpdateNumberOfParticipantsOptions extends V2UpdateNumberOfParticipantsRequestParticipantsInfoOneOf {
        /** Updated number of participants. */
        numberOfParticipants?: number | null;
        /**
         * Revision number, which increments by 1 each time the booking is updated.
         * To prevent conflicting changes, the current revision must be passed when
         * managing the booking.
         */
        revision: string | null;
    }
    type bookingsV2Booking_universal_d_CommonIdentificationData = CommonIdentificationData;
    type bookingsV2Booking_universal_d_CommonIdentificationDataIdOneOf = CommonIdentificationDataIdOneOf;
    type bookingsV2Booking_universal_d_IdentificationDataIdentityType = IdentificationDataIdentityType;
    const bookingsV2Booking_universal_d_IdentificationDataIdentityType: typeof IdentificationDataIdentityType;
    type bookingsV2Booking_universal_d_CreateMultiServiceBookingRequest = CreateMultiServiceBookingRequest;
    type bookingsV2Booking_universal_d_CreateBookingFlowControlSettings = CreateBookingFlowControlSettings;
    type bookingsV2Booking_universal_d_CreateMultiServiceBookingResponse = CreateMultiServiceBookingResponse;
    type bookingsV2Booking_universal_d_MultiServiceBooking = MultiServiceBooking;
    type bookingsV2Booking_universal_d_BookingResult = BookingResult;
    type bookingsV2Booking_universal_d_RescheduleMultiServiceBookingRequest = RescheduleMultiServiceBookingRequest;
    type bookingsV2Booking_universal_d_V2Slot = V2Slot;
    type bookingsV2Booking_universal_d_LocationLocationType = LocationLocationType;
    const bookingsV2Booking_universal_d_LocationLocationType: typeof LocationLocationType;
    type bookingsV2Booking_universal_d_SlotSlotResource = SlotSlotResource;
    type bookingsV2Booking_universal_d_SlotLocation = SlotLocation;
    type bookingsV2Booking_universal_d_RescheduleMultiServiceBookingRequestRescheduleBookingInfo = RescheduleMultiServiceBookingRequestRescheduleBookingInfo;
    type bookingsV2Booking_universal_d_RescheduleMultiServiceBookingRequestRescheduleBookingInfoParticipantsInfoOneOf = RescheduleMultiServiceBookingRequestRescheduleBookingInfoParticipantsInfoOneOf;
    type bookingsV2Booking_universal_d_RescheduleBookingFlowControlSettings = RescheduleBookingFlowControlSettings;
    type bookingsV2Booking_universal_d_RescheduleMultiServiceBookingResponse = RescheduleMultiServiceBookingResponse;
    type bookingsV2Booking_universal_d_BookingRescheduled = BookingRescheduled;
    type bookingsV2Booking_universal_d_BookingRescheduledPreviousParticipantsInfoOneOf = BookingRescheduledPreviousParticipantsInfoOneOf;
    type bookingsV2Booking_universal_d_GetMultiServiceBookingAvailabilityRequest = GetMultiServiceBookingAvailabilityRequest;
    type bookingsV2Booking_universal_d_GetMultiServiceBookingAvailabilityResponse = GetMultiServiceBookingAvailabilityResponse;
    type bookingsV2Booking_universal_d_BookingPolicyViolations = BookingPolicyViolations;
    type bookingsV2Booking_universal_d_BookingPolicySettings = BookingPolicySettings;
    type bookingsV2Booking_universal_d_GetMultiServiceBookingAvailabilityResponseBookingInfo = GetMultiServiceBookingAvailabilityResponseBookingInfo;
    type bookingsV2Booking_universal_d_CancelMultiServiceBookingRequest = CancelMultiServiceBookingRequest;
    type bookingsV2Booking_universal_d_CancelBookingFlowControlSettings = CancelBookingFlowControlSettings;
    type bookingsV2Booking_universal_d_CancelMultiServiceBookingResponse = CancelMultiServiceBookingResponse;
    type bookingsV2Booking_universal_d_BookingCanceled = BookingCanceled;
    type bookingsV2Booking_universal_d_MarkMultiServiceBookingAsPendingRequest = MarkMultiServiceBookingAsPendingRequest;
    type bookingsV2Booking_universal_d_BookingInfo = BookingInfo;
    type bookingsV2Booking_universal_d_MarkBookingAsPendingFlowControlSettings = MarkBookingAsPendingFlowControlSettings;
    type bookingsV2Booking_universal_d_MarkMultiServiceBookingAsPendingResponse = MarkMultiServiceBookingAsPendingResponse;
    type bookingsV2Booking_universal_d_ConfirmMultiServiceBookingRequest = ConfirmMultiServiceBookingRequest;
    type bookingsV2Booking_universal_d_ConfirmBookingFlowControlSettings = ConfirmBookingFlowControlSettings;
    type bookingsV2Booking_universal_d_ConfirmMultiServiceBookingResponse = ConfirmMultiServiceBookingResponse;
    type bookingsV2Booking_universal_d_BookingConfirmed = BookingConfirmed;
    type bookingsV2Booking_universal_d_DeclineMultiServiceBookingRequest = DeclineMultiServiceBookingRequest;
    type bookingsV2Booking_universal_d_DeclineMultiServiceBookingResponse = DeclineMultiServiceBookingResponse;
    type bookingsV2Booking_universal_d_BookingDeclined = BookingDeclined;
    type bookingsV2Booking_universal_d_BulkGetMultiServiceBookingAllowedActionsRequest = BulkGetMultiServiceBookingAllowedActionsRequest;
    type bookingsV2Booking_universal_d_BulkGetMultiServiceBookingAllowedActionsResponse = BulkGetMultiServiceBookingAllowedActionsResponse;
    type bookingsV2Booking_universal_d_BulkCalculateAllowedActionsResult = BulkCalculateAllowedActionsResult;
    type bookingsV2Booking_universal_d_ItemMetadata = ItemMetadata;
    type bookingsV2Booking_universal_d_ApplicationError = ApplicationError;
    type bookingsV2Booking_universal_d_AllowedActions = AllowedActions;
    type bookingsV2Booking_universal_d_BulkActionMetadata = BulkActionMetadata;
    type bookingsV2Booking_universal_d_MarkAsMultiServiceBookingRequest = MarkAsMultiServiceBookingRequest;
    type bookingsV2Booking_universal_d_MarkAsMultiServiceBookingResponse = MarkAsMultiServiceBookingResponse;
    type bookingsV2Booking_universal_d_GetMultiServiceBookingRequest = GetMultiServiceBookingRequest;
    type bookingsV2Booking_universal_d_GetMultiServiceBookingResponse = GetMultiServiceBookingResponse;
    type bookingsV2Booking_universal_d_MultiServiceBookingMetadata = MultiServiceBookingMetadata;
    type bookingsV2Booking_universal_d_AddBookingsToMultiServiceBookingRequest = AddBookingsToMultiServiceBookingRequest;
    type bookingsV2Booking_universal_d_BookingIdAndRevision = BookingIdAndRevision;
    type bookingsV2Booking_universal_d_AddBookingsToMultiServiceBookingResponse = AddBookingsToMultiServiceBookingResponse;
    type bookingsV2Booking_universal_d_RemoveBookingsFromMultiServiceBookingRequest = RemoveBookingsFromMultiServiceBookingRequest;
    type bookingsV2Booking_universal_d_RemoveBookingsFromMultiServiceBookingResponse = RemoveBookingsFromMultiServiceBookingResponse;
    type bookingsV2Booking_universal_d_DomainEvent = DomainEvent;
    type bookingsV2Booking_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
    type bookingsV2Booking_universal_d_EntityCreatedEvent = EntityCreatedEvent;
    type bookingsV2Booking_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
    type bookingsV2Booking_universal_d_EntityDeletedEvent = EntityDeletedEvent;
    type bookingsV2Booking_universal_d_ActionEvent = ActionEvent;
    type bookingsV2Booking_universal_d_BookingChanged = BookingChanged;
    type bookingsV2Booking_universal_d_CreateBookingRequest = CreateBookingRequest;
    type bookingsV2Booking_universal_d_CreateBookingResponse = CreateBookingResponse;
    type bookingsV2Booking_universal_d_UpdateBookingRequest = UpdateBookingRequest;
    type bookingsV2Booking_universal_d_UpdateBookingResponse = UpdateBookingResponse;
    type bookingsV2Booking_universal_d_LegacyCreateBookingRequest = LegacyCreateBookingRequest;
    type bookingsV2Booking_universal_d_LegacyCreateBookingResponse = LegacyCreateBookingResponse;
    type bookingsV2Booking_universal_d_BulkUpdateBookingRequest = BulkUpdateBookingRequest;
    type bookingsV2Booking_universal_d_MaskedBooking = MaskedBooking;
    type bookingsV2Booking_universal_d_BulkUpdateBookingResponse = BulkUpdateBookingResponse;
    type bookingsV2Booking_universal_d_BulkCreateBookingRequest = BulkCreateBookingRequest;
    type bookingsV2Booking_universal_d_CreateBookingInfo = CreateBookingInfo;
    type bookingsV2Booking_universal_d_BulkCreateBookingResponse = BulkCreateBookingResponse;
    type bookingsV2Booking_universal_d_BulkBookingResult = BulkBookingResult;
    type bookingsV2Booking_universal_d_RescheduleBookingRequest = RescheduleBookingRequest;
    type bookingsV2Booking_universal_d_RescheduleBookingRequestParticipantsInfoOneOf = RescheduleBookingRequestParticipantsInfoOneOf;
    type bookingsV2Booking_universal_d_RescheduleBookingResponse = RescheduleBookingResponse;
    type bookingsV2Booking_universal_d_BulkRescheduleBookingRequest = BulkRescheduleBookingRequest;
    type bookingsV2Booking_universal_d_BulkRescheduleBookingRequestBooking = BulkRescheduleBookingRequestBooking;
    type bookingsV2Booking_universal_d_SlotBookings = SlotBookings;
    type bookingsV2Booking_universal_d_BulkRescheduleBookingResponse = BulkRescheduleBookingResponse;
    type bookingsV2Booking_universal_d_BulkUpdateBookedScheduleRequest = BulkUpdateBookedScheduleRequest;
    type bookingsV2Booking_universal_d_BookingDetails = BookingDetails;
    type bookingsV2Booking_universal_d_BulkUpdateBookedScheduleResponse = BulkUpdateBookedScheduleResponse;
    type bookingsV2Booking_universal_d_QueryBookingsRequest = QueryBookingsRequest;
    type bookingsV2Booking_universal_d_QueryV2 = QueryV2;
    type bookingsV2Booking_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
    type bookingsV2Booking_universal_d_Sorting = Sorting;
    type bookingsV2Booking_universal_d_SortOrder = SortOrder;
    const bookingsV2Booking_universal_d_SortOrder: typeof SortOrder;
    type bookingsV2Booking_universal_d_Paging = Paging;
    type bookingsV2Booking_universal_d_CursorPaging = CursorPaging;
    type bookingsV2Booking_universal_d_QueryBookingsResponse = QueryBookingsResponse;
    type bookingsV2Booking_universal_d_PagingMetadataV2 = PagingMetadataV2;
    type bookingsV2Booking_universal_d_Cursors = Cursors;
    type bookingsV2Booking_universal_d_ConfirmRequest = ConfirmRequest;
    type bookingsV2Booking_universal_d_ConfirmResponse = ConfirmResponse;
    type bookingsV2Booking_universal_d_ConfirmBookingRequest = ConfirmBookingRequest;
    type bookingsV2Booking_universal_d_ConfirmBookingResponse = ConfirmBookingResponse;
    type bookingsV2Booking_universal_d_PartySizeRequest = PartySizeRequest;
    type bookingsV2Booking_universal_d_PartySizeRequestPartySizeForOneOf = PartySizeRequestPartySizeForOneOf;
    type bookingsV2Booking_universal_d_PartySizeResponse = PartySizeResponse;
    type bookingsV2Booking_universal_d_ConsistentQueryBookingsRequest = ConsistentQueryBookingsRequest;
    type bookingsV2Booking_universal_d_ConsistentQueryBookingsResponse = ConsistentQueryBookingsResponse;
    type bookingsV2Booking_universal_d_SetBookingSessionIdRequest = SetBookingSessionIdRequest;
    type bookingsV2Booking_universal_d_SetBookingSessionIdResponse = SetBookingSessionIdResponse;
    type bookingsV2Booking_universal_d_UpdateExtendedFieldsRequest = UpdateExtendedFieldsRequest;
    type bookingsV2Booking_universal_d_UpdateExtendedFieldsResponse = UpdateExtendedFieldsResponse;
    type bookingsV2Booking_universal_d_DeclineBookingRequest = DeclineBookingRequest;
    type bookingsV2Booking_universal_d_DeclineBookingResponse = DeclineBookingResponse;
    type bookingsV2Booking_universal_d_CancelBookingRequest = CancelBookingRequest;
    type bookingsV2Booking_universal_d_CancelBookingResponse = CancelBookingResponse;
    type bookingsV2Booking_universal_d_UpdateNumberOfParticipantsRequest = UpdateNumberOfParticipantsRequest;
    type bookingsV2Booking_universal_d_UpdateNumberOfParticipantsRequestParticipantsInfoOneOf = UpdateNumberOfParticipantsRequestParticipantsInfoOneOf;
    type bookingsV2Booking_universal_d_UpdateNumberOfParticipantsResponse = UpdateNumberOfParticipantsResponse;
    type bookingsV2Booking_universal_d_NumberOfParticipantsUpdated = NumberOfParticipantsUpdated;
    type bookingsV2Booking_universal_d_NumberOfParticipantsUpdatedPreviousParticipantsInfoOneOf = NumberOfParticipantsUpdatedPreviousParticipantsInfoOneOf;
    type bookingsV2Booking_universal_d_CalculateAllowedActionsRequest = CalculateAllowedActionsRequest;
    type bookingsV2Booking_universal_d_CalculateAllowedActionsResponse = CalculateAllowedActionsResponse;
    type bookingsV2Booking_universal_d_BulkCalculateAllowedActionsRequest = BulkCalculateAllowedActionsRequest;
    type bookingsV2Booking_universal_d_BulkCalculateAllowedActionsResponse = BulkCalculateAllowedActionsResponse;
    type bookingsV2Booking_universal_d_GetSlotAvailabilityRequest = GetSlotAvailabilityRequest;
    type bookingsV2Booking_universal_d_GetSlotAvailabilityResponse = GetSlotAvailabilityResponse;
    type bookingsV2Booking_universal_d_SlotAvailability = SlotAvailability;
    type bookingsV2Booking_universal_d_WaitingList = WaitingList;
    type bookingsV2Booking_universal_d_AvailableResources = AvailableResources;
    type bookingsV2Booking_universal_d_GetScheduleAvailabilityRequest = GetScheduleAvailabilityRequest;
    type bookingsV2Booking_universal_d_GetScheduleAvailabilityResponse = GetScheduleAvailabilityResponse;
    type bookingsV2Booking_universal_d_ScheduleAvailability = ScheduleAvailability;
    type bookingsV2Booking_universal_d_MarkBookingAsPendingRequest = MarkBookingAsPendingRequest;
    type bookingsV2Booking_universal_d_MarkBookingAsPendingResponse = MarkBookingAsPendingResponse;
    type bookingsV2Booking_universal_d_BookingMarkedAsPending = BookingMarkedAsPending;
    type bookingsV2Booking_universal_d_MigrationCheckIfClashesWithBlockedTimeRequest = MigrationCheckIfClashesWithBlockedTimeRequest;
    type bookingsV2Booking_universal_d_MsidAndBookingId = MsidAndBookingId;
    type bookingsV2Booking_universal_d_MigrationCheckIfClashesWithBlockedTimeResponse = MigrationCheckIfClashesWithBlockedTimeResponse;
    type bookingsV2Booking_universal_d_Clash = Clash;
    type bookingsV2Booking_universal_d_ConfirmOrDeclineBookingRequest = ConfirmOrDeclineBookingRequest;
    type bookingsV2Booking_universal_d_ConfirmOrDeclineBookingResponse = ConfirmOrDeclineBookingResponse;
    type bookingsV2Booking_universal_d_BulkConfirmOrDeclineBookingRequest = BulkConfirmOrDeclineBookingRequest;
    type bookingsV2Booking_universal_d_BulkConfirmOrDeclineBookingRequestBookingDetails = BulkConfirmOrDeclineBookingRequestBookingDetails;
    type bookingsV2Booking_universal_d_BulkConfirmOrDeclineBookingResponse = BulkConfirmOrDeclineBookingResponse;
    type bookingsV2Booking_universal_d_V2CreateBookingRequest = V2CreateBookingRequest;
    type bookingsV2Booking_universal_d_V2CreateBookingRequestBookableItemOneOf = V2CreateBookingRequestBookableItemOneOf;
    type bookingsV2Booking_universal_d_V2CreateBookingRequestParticipantsInfoOneOf = V2CreateBookingRequestParticipantsInfoOneOf;
    type bookingsV2Booking_universal_d_Slot = Slot;
    type bookingsV2Booking_universal_d_SlotResource = SlotResource;
    type bookingsV2Booking_universal_d_CreateBookingRequestFlowControlSettings = CreateBookingRequestFlowControlSettings;
    type bookingsV2Booking_universal_d_V2CreateBookingResponse = V2CreateBookingResponse;
    type bookingsV2Booking_universal_d_V2CancelBookingRequest = V2CancelBookingRequest;
    type bookingsV2Booking_universal_d_V2CancelBookingRequestFlowControlSettings = V2CancelBookingRequestFlowControlSettings;
    type bookingsV2Booking_universal_d_V2CancelBookingResponse = V2CancelBookingResponse;
    type bookingsV2Booking_universal_d_V2RescheduleBookingRequest = V2RescheduleBookingRequest;
    type bookingsV2Booking_universal_d_V2RescheduleBookingRequestParticipantsInfoOneOf = V2RescheduleBookingRequestParticipantsInfoOneOf;
    type bookingsV2Booking_universal_d_V2RescheduleBookingRequestFlowControlSettings = V2RescheduleBookingRequestFlowControlSettings;
    type bookingsV2Booking_universal_d_V2RescheduleBookingResponse = V2RescheduleBookingResponse;
    type bookingsV2Booking_universal_d_V2ConfirmBookingRequest = V2ConfirmBookingRequest;
    type bookingsV2Booking_universal_d_V2ConfirmBookingResponse = V2ConfirmBookingResponse;
    type bookingsV2Booking_universal_d_V2DeclineBookingRequest = V2DeclineBookingRequest;
    type bookingsV2Booking_universal_d_V2DeclineBookingResponse = V2DeclineBookingResponse;
    type bookingsV2Booking_universal_d_V2UpdateNumberOfParticipantsRequest = V2UpdateNumberOfParticipantsRequest;
    type bookingsV2Booking_universal_d_V2UpdateNumberOfParticipantsRequestParticipantsInfoOneOf = V2UpdateNumberOfParticipantsRequestParticipantsInfoOneOf;
    type bookingsV2Booking_universal_d_V2UpdateNumberOfParticipantsResponse = V2UpdateNumberOfParticipantsResponse;
    type bookingsV2Booking_universal_d_CreateMultiServiceBookingOptions = CreateMultiServiceBookingOptions;
    type bookingsV2Booking_universal_d_RescheduleMultiServiceBookingOptions = RescheduleMultiServiceBookingOptions;
    type bookingsV2Booking_universal_d_CancelMultiServiceBookingOptions = CancelMultiServiceBookingOptions;
    type bookingsV2Booking_universal_d_MarkMultiServiceBookingAsPendingOptions = MarkMultiServiceBookingAsPendingOptions;
    type bookingsV2Booking_universal_d_ConfirmMultiServiceBookingOptions = ConfirmMultiServiceBookingOptions;
    type bookingsV2Booking_universal_d_DeclineMultiServiceBookingOptions = DeclineMultiServiceBookingOptions;
    type bookingsV2Booking_universal_d_MarkAsMultiServiceBookingOptions = MarkAsMultiServiceBookingOptions;
    type bookingsV2Booking_universal_d_AddBookingsToMultiServiceBookingOptions = AddBookingsToMultiServiceBookingOptions;
    type bookingsV2Booking_universal_d_RemoveBookingsFromMultiServiceBookingOptions = RemoveBookingsFromMultiServiceBookingOptions;
    const bookingsV2Booking_universal_d_createBooking: typeof createBooking;
    type bookingsV2Booking_universal_d_CreateBookingOptions = CreateBookingOptions;
    type bookingsV2Booking_universal_d_UpdateBooking = UpdateBooking;
    type bookingsV2Booking_universal_d_UpdateBookingOptions = UpdateBookingOptions;
    const bookingsV2Booking_universal_d_bulkCreateBooking: typeof bulkCreateBooking;
    type bookingsV2Booking_universal_d_BulkCreateBookingOptions = BulkCreateBookingOptions;
    const bookingsV2Booking_universal_d_rescheduleBooking: typeof rescheduleBooking;
    type bookingsV2Booking_universal_d_RescheduleBookingOptions = RescheduleBookingOptions;
    type bookingsV2Booking_universal_d_BulkRescheduleBookingOptions = BulkRescheduleBookingOptions;
    type bookingsV2Booking_universal_d_BulkUpdateBookedScheduleOptions = BulkUpdateBookedScheduleOptions;
    type bookingsV2Booking_universal_d_QueryOptions = QueryOptions;
    const bookingsV2Booking_universal_d_confirmBooking: typeof confirmBooking;
    type bookingsV2Booking_universal_d_ConfirmBookingOptions = ConfirmBookingOptions;
    type bookingsV2Booking_universal_d_PartySizeOptions = PartySizeOptions;
    type bookingsV2Booking_universal_d_ConsistentQueryOptions = ConsistentQueryOptions;
    type bookingsV2Booking_universal_d_SetBookingSessionIdOptions = SetBookingSessionIdOptions;
    const bookingsV2Booking_universal_d_updateExtendedFields: typeof updateExtendedFields;
    type bookingsV2Booking_universal_d_UpdateExtendedFieldsOptions = UpdateExtendedFieldsOptions;
    const bookingsV2Booking_universal_d_declineBooking: typeof declineBooking;
    type bookingsV2Booking_universal_d_DeclineBookingOptions = DeclineBookingOptions;
    const bookingsV2Booking_universal_d_cancelBooking: typeof cancelBooking;
    type bookingsV2Booking_universal_d_CancelBookingOptions = CancelBookingOptions;
    const bookingsV2Booking_universal_d_updateNumberOfParticipants: typeof updateNumberOfParticipants;
    type bookingsV2Booking_universal_d_UpdateNumberOfParticipantsOptions = UpdateNumberOfParticipantsOptions;
    type bookingsV2Booking_universal_d_GetSlotAvailabilityOptions = GetSlotAvailabilityOptions;
    type bookingsV2Booking_universal_d_MarkBookingAsPendingOptions = MarkBookingAsPendingOptions;
    const bookingsV2Booking_universal_d_confirmOrDeclineBooking: typeof confirmOrDeclineBooking;
    type bookingsV2Booking_universal_d_ConfirmOrDeclineBookingOptions = ConfirmOrDeclineBookingOptions;
    const bookingsV2Booking_universal_d_bulkConfirmOrDeclineBooking: typeof bulkConfirmOrDeclineBooking;
    type bookingsV2Booking_universal_d_BulkConfirmOrDeclineBookingOptions = BulkConfirmOrDeclineBookingOptions;
    type bookingsV2Booking_universal_d_BookingsGatewayCreateBookingOptions = BookingsGatewayCreateBookingOptions;
    type bookingsV2Booking_universal_d_BookingsGatewayCancelBookingOptions = BookingsGatewayCancelBookingOptions;
    type bookingsV2Booking_universal_d_BookingsGatewayRescheduleBookingOptions = BookingsGatewayRescheduleBookingOptions;
    type bookingsV2Booking_universal_d_BookingsGatewayConfirmBookingOptions = BookingsGatewayConfirmBookingOptions;
    type bookingsV2Booking_universal_d_BookingsGatewayDeclineBookingOptions = BookingsGatewayDeclineBookingOptions;
    type bookingsV2Booking_universal_d_BookingsGatewayUpdateNumberOfParticipantsOptions = BookingsGatewayUpdateNumberOfParticipantsOptions;
    namespace bookingsV2Booking_universal_d {
        export { Booking$1 as Booking, BookingParticipantsInfoOneOf$1 as BookingParticipantsInfoOneOf, MultiServiceBookingType$1 as MultiServiceBookingType, BookedEntity$1 as BookedEntity, BookedEntityItemOneOf$1 as BookedEntityItemOneOf, BookedSlot$1 as BookedSlot, BookedResource$1 as BookedResource, Location$1 as Location, LocationType$1 as LocationType, BookedSchedule$1 as BookedSchedule, ContactDetails$1 as ContactDetails, Address$1 as Address, AddressStreetOneOf$1 as AddressStreetOneOf, StreetAddress$1 as StreetAddress, AddressLocation$1 as AddressLocation, Subdivision$1 as Subdivision, CustomFormField$1 as CustomFormField, ValueType$1 as ValueType, BookingStatus$1 as BookingStatus, PaymentStatus$1 as PaymentStatus, SelectedPaymentOption$1 as SelectedPaymentOption, BookingSource$1 as BookingSource, Platform$1 as Platform, Actor$1 as Actor, ParticipantNotification$1 as ParticipantNotification, bookingsV2Booking_universal_d_CommonIdentificationData as CommonIdentificationData, bookingsV2Booking_universal_d_CommonIdentificationDataIdOneOf as CommonIdentificationDataIdOneOf, bookingsV2Booking_universal_d_IdentificationDataIdentityType as IdentificationDataIdentityType, FlowControlSettings$1 as FlowControlSettings, ExtendedFields$1 as ExtendedFields, ParticipantChoices$1 as ParticipantChoices, ServiceChoices$1 as ServiceChoices, ServiceChoice$1 as ServiceChoice, ServiceChoiceChoiceOneOf$1 as ServiceChoiceChoiceOneOf, MultiServiceBookingInfo$1 as MultiServiceBookingInfo, bookingsV2Booking_universal_d_CreateMultiServiceBookingRequest as CreateMultiServiceBookingRequest, bookingsV2Booking_universal_d_CreateBookingFlowControlSettings as CreateBookingFlowControlSettings, bookingsV2Booking_universal_d_CreateMultiServiceBookingResponse as CreateMultiServiceBookingResponse, bookingsV2Booking_universal_d_MultiServiceBooking as MultiServiceBooking, bookingsV2Booking_universal_d_BookingResult as BookingResult, bookingsV2Booking_universal_d_RescheduleMultiServiceBookingRequest as RescheduleMultiServiceBookingRequest, bookingsV2Booking_universal_d_V2Slot as V2Slot, bookingsV2Booking_universal_d_LocationLocationType as LocationLocationType, bookingsV2Booking_universal_d_SlotSlotResource as SlotSlotResource, bookingsV2Booking_universal_d_SlotLocation as SlotLocation, bookingsV2Booking_universal_d_RescheduleMultiServiceBookingRequestRescheduleBookingInfo as RescheduleMultiServiceBookingRequestRescheduleBookingInfo, bookingsV2Booking_universal_d_RescheduleMultiServiceBookingRequestRescheduleBookingInfoParticipantsInfoOneOf as RescheduleMultiServiceBookingRequestRescheduleBookingInfoParticipantsInfoOneOf, bookingsV2Booking_universal_d_RescheduleBookingFlowControlSettings as RescheduleBookingFlowControlSettings, bookingsV2Booking_universal_d_RescheduleMultiServiceBookingResponse as RescheduleMultiServiceBookingResponse, bookingsV2Booking_universal_d_BookingRescheduled as BookingRescheduled, bookingsV2Booking_universal_d_BookingRescheduledPreviousParticipantsInfoOneOf as BookingRescheduledPreviousParticipantsInfoOneOf, IdentificationData$1 as IdentificationData, IdentificationDataIdOneOf$1 as IdentificationDataIdOneOf, IdentityType$1 as IdentityType, bookingsV2Booking_universal_d_GetMultiServiceBookingAvailabilityRequest as GetMultiServiceBookingAvailabilityRequest, bookingsV2Booking_universal_d_GetMultiServiceBookingAvailabilityResponse as GetMultiServiceBookingAvailabilityResponse, bookingsV2Booking_universal_d_BookingPolicyViolations as BookingPolicyViolations, bookingsV2Booking_universal_d_BookingPolicySettings as BookingPolicySettings, bookingsV2Booking_universal_d_GetMultiServiceBookingAvailabilityResponseBookingInfo as GetMultiServiceBookingAvailabilityResponseBookingInfo, bookingsV2Booking_universal_d_CancelMultiServiceBookingRequest as CancelMultiServiceBookingRequest, bookingsV2Booking_universal_d_CancelBookingFlowControlSettings as CancelBookingFlowControlSettings, bookingsV2Booking_universal_d_CancelMultiServiceBookingResponse as CancelMultiServiceBookingResponse, bookingsV2Booking_universal_d_BookingCanceled as BookingCanceled, bookingsV2Booking_universal_d_MarkMultiServiceBookingAsPendingRequest as MarkMultiServiceBookingAsPendingRequest, bookingsV2Booking_universal_d_BookingInfo as BookingInfo, bookingsV2Booking_universal_d_MarkBookingAsPendingFlowControlSettings as MarkBookingAsPendingFlowControlSettings, bookingsV2Booking_universal_d_MarkMultiServiceBookingAsPendingResponse as MarkMultiServiceBookingAsPendingResponse, bookingsV2Booking_universal_d_ConfirmMultiServiceBookingRequest as ConfirmMultiServiceBookingRequest, bookingsV2Booking_universal_d_ConfirmBookingFlowControlSettings as ConfirmBookingFlowControlSettings, bookingsV2Booking_universal_d_ConfirmMultiServiceBookingResponse as ConfirmMultiServiceBookingResponse, bookingsV2Booking_universal_d_BookingConfirmed as BookingConfirmed, bookingsV2Booking_universal_d_DeclineMultiServiceBookingRequest as DeclineMultiServiceBookingRequest, bookingsV2Booking_universal_d_DeclineMultiServiceBookingResponse as DeclineMultiServiceBookingResponse, bookingsV2Booking_universal_d_BookingDeclined as BookingDeclined, bookingsV2Booking_universal_d_BulkGetMultiServiceBookingAllowedActionsRequest as BulkGetMultiServiceBookingAllowedActionsRequest, bookingsV2Booking_universal_d_BulkGetMultiServiceBookingAllowedActionsResponse as BulkGetMultiServiceBookingAllowedActionsResponse, bookingsV2Booking_universal_d_BulkCalculateAllowedActionsResult as BulkCalculateAllowedActionsResult, bookingsV2Booking_universal_d_ItemMetadata as ItemMetadata, bookingsV2Booking_universal_d_ApplicationError as ApplicationError, bookingsV2Booking_universal_d_AllowedActions as AllowedActions, bookingsV2Booking_universal_d_BulkActionMetadata as BulkActionMetadata, bookingsV2Booking_universal_d_MarkAsMultiServiceBookingRequest as MarkAsMultiServiceBookingRequest, bookingsV2Booking_universal_d_MarkAsMultiServiceBookingResponse as MarkAsMultiServiceBookingResponse, bookingsV2Booking_universal_d_GetMultiServiceBookingRequest as GetMultiServiceBookingRequest, bookingsV2Booking_universal_d_GetMultiServiceBookingResponse as GetMultiServiceBookingResponse, bookingsV2Booking_universal_d_MultiServiceBookingMetadata as MultiServiceBookingMetadata, bookingsV2Booking_universal_d_AddBookingsToMultiServiceBookingRequest as AddBookingsToMultiServiceBookingRequest, bookingsV2Booking_universal_d_BookingIdAndRevision as BookingIdAndRevision, bookingsV2Booking_universal_d_AddBookingsToMultiServiceBookingResponse as AddBookingsToMultiServiceBookingResponse, bookingsV2Booking_universal_d_RemoveBookingsFromMultiServiceBookingRequest as RemoveBookingsFromMultiServiceBookingRequest, bookingsV2Booking_universal_d_RemoveBookingsFromMultiServiceBookingResponse as RemoveBookingsFromMultiServiceBookingResponse, bookingsV2Booking_universal_d_DomainEvent as DomainEvent, bookingsV2Booking_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf, bookingsV2Booking_universal_d_EntityCreatedEvent as EntityCreatedEvent, bookingsV2Booking_universal_d_EntityUpdatedEvent as EntityUpdatedEvent, bookingsV2Booking_universal_d_EntityDeletedEvent as EntityDeletedEvent, bookingsV2Booking_universal_d_ActionEvent as ActionEvent, bookingsV2Booking_universal_d_BookingChanged as BookingChanged, bookingsV2Booking_universal_d_CreateBookingRequest as CreateBookingRequest, bookingsV2Booking_universal_d_CreateBookingResponse as CreateBookingResponse, bookingsV2Booking_universal_d_UpdateBookingRequest as UpdateBookingRequest, bookingsV2Booking_universal_d_UpdateBookingResponse as UpdateBookingResponse, bookingsV2Booking_universal_d_LegacyCreateBookingRequest as LegacyCreateBookingRequest, bookingsV2Booking_universal_d_LegacyCreateBookingResponse as LegacyCreateBookingResponse, bookingsV2Booking_universal_d_BulkUpdateBookingRequest as BulkUpdateBookingRequest, bookingsV2Booking_universal_d_MaskedBooking as MaskedBooking, bookingsV2Booking_universal_d_BulkUpdateBookingResponse as BulkUpdateBookingResponse, bookingsV2Booking_universal_d_BulkCreateBookingRequest as BulkCreateBookingRequest, bookingsV2Booking_universal_d_CreateBookingInfo as CreateBookingInfo, bookingsV2Booking_universal_d_BulkCreateBookingResponse as BulkCreateBookingResponse, bookingsV2Booking_universal_d_BulkBookingResult as BulkBookingResult, bookingsV2Booking_universal_d_RescheduleBookingRequest as RescheduleBookingRequest, bookingsV2Booking_universal_d_RescheduleBookingRequestParticipantsInfoOneOf as RescheduleBookingRequestParticipantsInfoOneOf, bookingsV2Booking_universal_d_RescheduleBookingResponse as RescheduleBookingResponse, bookingsV2Booking_universal_d_BulkRescheduleBookingRequest as BulkRescheduleBookingRequest, bookingsV2Booking_universal_d_BulkRescheduleBookingRequestBooking as BulkRescheduleBookingRequestBooking, bookingsV2Booking_universal_d_SlotBookings as SlotBookings, bookingsV2Booking_universal_d_BulkRescheduleBookingResponse as BulkRescheduleBookingResponse, bookingsV2Booking_universal_d_BulkUpdateBookedScheduleRequest as BulkUpdateBookedScheduleRequest, bookingsV2Booking_universal_d_BookingDetails as BookingDetails, bookingsV2Booking_universal_d_BulkUpdateBookedScheduleResponse as BulkUpdateBookedScheduleResponse, bookingsV2Booking_universal_d_QueryBookingsRequest as QueryBookingsRequest, bookingsV2Booking_universal_d_QueryV2 as QueryV2, bookingsV2Booking_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf, bookingsV2Booking_universal_d_Sorting as Sorting, bookingsV2Booking_universal_d_SortOrder as SortOrder, bookingsV2Booking_universal_d_Paging as Paging, bookingsV2Booking_universal_d_CursorPaging as CursorPaging, bookingsV2Booking_universal_d_QueryBookingsResponse as QueryBookingsResponse, bookingsV2Booking_universal_d_PagingMetadataV2 as PagingMetadataV2, bookingsV2Booking_universal_d_Cursors as Cursors, bookingsV2Booking_universal_d_ConfirmRequest as ConfirmRequest, bookingsV2Booking_universal_d_ConfirmResponse as ConfirmResponse, bookingsV2Booking_universal_d_ConfirmBookingRequest as ConfirmBookingRequest, bookingsV2Booking_universal_d_ConfirmBookingResponse as ConfirmBookingResponse, bookingsV2Booking_universal_d_PartySizeRequest as PartySizeRequest, bookingsV2Booking_universal_d_PartySizeRequestPartySizeForOneOf as PartySizeRequestPartySizeForOneOf, bookingsV2Booking_universal_d_PartySizeResponse as PartySizeResponse, bookingsV2Booking_universal_d_ConsistentQueryBookingsRequest as ConsistentQueryBookingsRequest, bookingsV2Booking_universal_d_ConsistentQueryBookingsResponse as ConsistentQueryBookingsResponse, bookingsV2Booking_universal_d_SetBookingSessionIdRequest as SetBookingSessionIdRequest, bookingsV2Booking_universal_d_SetBookingSessionIdResponse as SetBookingSessionIdResponse, bookingsV2Booking_universal_d_UpdateExtendedFieldsRequest as UpdateExtendedFieldsRequest, bookingsV2Booking_universal_d_UpdateExtendedFieldsResponse as UpdateExtendedFieldsResponse, bookingsV2Booking_universal_d_DeclineBookingRequest as DeclineBookingRequest, bookingsV2Booking_universal_d_DeclineBookingResponse as DeclineBookingResponse, bookingsV2Booking_universal_d_CancelBookingRequest as CancelBookingRequest, bookingsV2Booking_universal_d_CancelBookingResponse as CancelBookingResponse, bookingsV2Booking_universal_d_UpdateNumberOfParticipantsRequest as UpdateNumberOfParticipantsRequest, bookingsV2Booking_universal_d_UpdateNumberOfParticipantsRequestParticipantsInfoOneOf as UpdateNumberOfParticipantsRequestParticipantsInfoOneOf, bookingsV2Booking_universal_d_UpdateNumberOfParticipantsResponse as UpdateNumberOfParticipantsResponse, bookingsV2Booking_universal_d_NumberOfParticipantsUpdated as NumberOfParticipantsUpdated, bookingsV2Booking_universal_d_NumberOfParticipantsUpdatedPreviousParticipantsInfoOneOf as NumberOfParticipantsUpdatedPreviousParticipantsInfoOneOf, bookingsV2Booking_universal_d_CalculateAllowedActionsRequest as CalculateAllowedActionsRequest, bookingsV2Booking_universal_d_CalculateAllowedActionsResponse as CalculateAllowedActionsResponse, bookingsV2Booking_universal_d_BulkCalculateAllowedActionsRequest as BulkCalculateAllowedActionsRequest, bookingsV2Booking_universal_d_BulkCalculateAllowedActionsResponse as BulkCalculateAllowedActionsResponse, bookingsV2Booking_universal_d_GetSlotAvailabilityRequest as GetSlotAvailabilityRequest, bookingsV2Booking_universal_d_GetSlotAvailabilityResponse as GetSlotAvailabilityResponse, bookingsV2Booking_universal_d_SlotAvailability as SlotAvailability, bookingsV2Booking_universal_d_WaitingList as WaitingList, bookingsV2Booking_universal_d_AvailableResources as AvailableResources, bookingsV2Booking_universal_d_GetScheduleAvailabilityRequest as GetScheduleAvailabilityRequest, bookingsV2Booking_universal_d_GetScheduleAvailabilityResponse as GetScheduleAvailabilityResponse, bookingsV2Booking_universal_d_ScheduleAvailability as ScheduleAvailability, bookingsV2Booking_universal_d_MarkBookingAsPendingRequest as MarkBookingAsPendingRequest, bookingsV2Booking_universal_d_MarkBookingAsPendingResponse as MarkBookingAsPendingResponse, bookingsV2Booking_universal_d_BookingMarkedAsPending as BookingMarkedAsPending, bookingsV2Booking_universal_d_MigrationCheckIfClashesWithBlockedTimeRequest as MigrationCheckIfClashesWithBlockedTimeRequest, bookingsV2Booking_universal_d_MsidAndBookingId as MsidAndBookingId, bookingsV2Booking_universal_d_MigrationCheckIfClashesWithBlockedTimeResponse as MigrationCheckIfClashesWithBlockedTimeResponse, bookingsV2Booking_universal_d_Clash as Clash, bookingsV2Booking_universal_d_ConfirmOrDeclineBookingRequest as ConfirmOrDeclineBookingRequest, bookingsV2Booking_universal_d_ConfirmOrDeclineBookingResponse as ConfirmOrDeclineBookingResponse, bookingsV2Booking_universal_d_BulkConfirmOrDeclineBookingRequest as BulkConfirmOrDeclineBookingRequest, bookingsV2Booking_universal_d_BulkConfirmOrDeclineBookingRequestBookingDetails as BulkConfirmOrDeclineBookingRequestBookingDetails, bookingsV2Booking_universal_d_BulkConfirmOrDeclineBookingResponse as BulkConfirmOrDeclineBookingResponse, bookingsV2Booking_universal_d_V2CreateBookingRequest as V2CreateBookingRequest, bookingsV2Booking_universal_d_V2CreateBookingRequestBookableItemOneOf as V2CreateBookingRequestBookableItemOneOf, bookingsV2Booking_universal_d_V2CreateBookingRequestParticipantsInfoOneOf as V2CreateBookingRequestParticipantsInfoOneOf, bookingsV2Booking_universal_d_Slot as Slot, bookingsV2Booking_universal_d_SlotResource as SlotResource, bookingsV2Booking_universal_d_CreateBookingRequestFlowControlSettings as CreateBookingRequestFlowControlSettings, bookingsV2Booking_universal_d_V2CreateBookingResponse as V2CreateBookingResponse, bookingsV2Booking_universal_d_V2CancelBookingRequest as V2CancelBookingRequest, bookingsV2Booking_universal_d_V2CancelBookingRequestFlowControlSettings as V2CancelBookingRequestFlowControlSettings, bookingsV2Booking_universal_d_V2CancelBookingResponse as V2CancelBookingResponse, bookingsV2Booking_universal_d_V2RescheduleBookingRequest as V2RescheduleBookingRequest, bookingsV2Booking_universal_d_V2RescheduleBookingRequestParticipantsInfoOneOf as V2RescheduleBookingRequestParticipantsInfoOneOf, bookingsV2Booking_universal_d_V2RescheduleBookingRequestFlowControlSettings as V2RescheduleBookingRequestFlowControlSettings, bookingsV2Booking_universal_d_V2RescheduleBookingResponse as V2RescheduleBookingResponse, bookingsV2Booking_universal_d_V2ConfirmBookingRequest as V2ConfirmBookingRequest, bookingsV2Booking_universal_d_V2ConfirmBookingResponse as V2ConfirmBookingResponse, bookingsV2Booking_universal_d_V2DeclineBookingRequest as V2DeclineBookingRequest, bookingsV2Booking_universal_d_V2DeclineBookingResponse as V2DeclineBookingResponse, bookingsV2Booking_universal_d_V2UpdateNumberOfParticipantsRequest as V2UpdateNumberOfParticipantsRequest, bookingsV2Booking_universal_d_V2UpdateNumberOfParticipantsRequestParticipantsInfoOneOf as V2UpdateNumberOfParticipantsRequestParticipantsInfoOneOf, bookingsV2Booking_universal_d_V2UpdateNumberOfParticipantsResponse as V2UpdateNumberOfParticipantsResponse, bookingsV2Booking_universal_d_CreateMultiServiceBookingOptions as CreateMultiServiceBookingOptions, bookingsV2Booking_universal_d_RescheduleMultiServiceBookingOptions as RescheduleMultiServiceBookingOptions, bookingsV2Booking_universal_d_CancelMultiServiceBookingOptions as CancelMultiServiceBookingOptions, bookingsV2Booking_universal_d_MarkMultiServiceBookingAsPendingOptions as MarkMultiServiceBookingAsPendingOptions, bookingsV2Booking_universal_d_ConfirmMultiServiceBookingOptions as ConfirmMultiServiceBookingOptions, bookingsV2Booking_universal_d_DeclineMultiServiceBookingOptions as DeclineMultiServiceBookingOptions, bookingsV2Booking_universal_d_MarkAsMultiServiceBookingOptions as MarkAsMultiServiceBookingOptions, bookingsV2Booking_universal_d_AddBookingsToMultiServiceBookingOptions as AddBookingsToMultiServiceBookingOptions, bookingsV2Booking_universal_d_RemoveBookingsFromMultiServiceBookingOptions as RemoveBookingsFromMultiServiceBookingOptions, bookingsV2Booking_universal_d_createBooking as createBooking, bookingsV2Booking_universal_d_CreateBookingOptions as CreateBookingOptions, bookingsV2Booking_universal_d_UpdateBooking as UpdateBooking, bookingsV2Booking_universal_d_UpdateBookingOptions as UpdateBookingOptions, bookingsV2Booking_universal_d_bulkCreateBooking as bulkCreateBooking, bookingsV2Booking_universal_d_BulkCreateBookingOptions as BulkCreateBookingOptions, bookingsV2Booking_universal_d_rescheduleBooking as rescheduleBooking, bookingsV2Booking_universal_d_RescheduleBookingOptions as RescheduleBookingOptions, bookingsV2Booking_universal_d_BulkRescheduleBookingOptions as BulkRescheduleBookingOptions, bookingsV2Booking_universal_d_BulkUpdateBookedScheduleOptions as BulkUpdateBookedScheduleOptions, bookingsV2Booking_universal_d_QueryOptions as QueryOptions, bookingsV2Booking_universal_d_confirmBooking as confirmBooking, bookingsV2Booking_universal_d_ConfirmBookingOptions as ConfirmBookingOptions, bookingsV2Booking_universal_d_PartySizeOptions as PartySizeOptions, bookingsV2Booking_universal_d_ConsistentQueryOptions as ConsistentQueryOptions, bookingsV2Booking_universal_d_SetBookingSessionIdOptions as SetBookingSessionIdOptions, bookingsV2Booking_universal_d_updateExtendedFields as updateExtendedFields, bookingsV2Booking_universal_d_UpdateExtendedFieldsOptions as UpdateExtendedFieldsOptions, bookingsV2Booking_universal_d_declineBooking as declineBooking, bookingsV2Booking_universal_d_DeclineBookingOptions as DeclineBookingOptions, bookingsV2Booking_universal_d_cancelBooking as cancelBooking, bookingsV2Booking_universal_d_CancelBookingOptions as CancelBookingOptions, bookingsV2Booking_universal_d_updateNumberOfParticipants as updateNumberOfParticipants, bookingsV2Booking_universal_d_UpdateNumberOfParticipantsOptions as UpdateNumberOfParticipantsOptions, bookingsV2Booking_universal_d_GetSlotAvailabilityOptions as GetSlotAvailabilityOptions, bookingsV2Booking_universal_d_MarkBookingAsPendingOptions as MarkBookingAsPendingOptions, bookingsV2Booking_universal_d_confirmOrDeclineBooking as confirmOrDeclineBooking, bookingsV2Booking_universal_d_ConfirmOrDeclineBookingOptions as ConfirmOrDeclineBookingOptions, bookingsV2Booking_universal_d_bulkConfirmOrDeclineBooking as bulkConfirmOrDeclineBooking, bookingsV2Booking_universal_d_BulkConfirmOrDeclineBookingOptions as BulkConfirmOrDeclineBookingOptions, bookingsV2Booking_universal_d_BookingsGatewayCreateBookingOptions as BookingsGatewayCreateBookingOptions, bookingsV2Booking_universal_d_BookingsGatewayCancelBookingOptions as BookingsGatewayCancelBookingOptions, bookingsV2Booking_universal_d_BookingsGatewayRescheduleBookingOptions as BookingsGatewayRescheduleBookingOptions, bookingsV2Booking_universal_d_BookingsGatewayConfirmBookingOptions as BookingsGatewayConfirmBookingOptions, bookingsV2Booking_universal_d_BookingsGatewayDeclineBookingOptions as BookingsGatewayDeclineBookingOptions, bookingsV2Booking_universal_d_BookingsGatewayUpdateNumberOfParticipantsOptions as BookingsGatewayUpdateNumberOfParticipantsOptions, };
    }
    interface PriceInfo extends PriceInfoTotalPriceOneOf {
        /**
         * Calculated total price. Available only when the
         * service's
         * price has been set up as a numerical value in the
         * `schedule.rate.labeledPriceOptions` object.
         */
        calculatedPrice?: number;
        /**
         * Description of the total price. Available only when the
         * service's
         * price has been set up as a text value in the
         * `schedule.rate.priceText` property.
         */
        priceDescription?: string;
        /** List of line items, including the number of participants and the price per participant. */
        bookingLineItems?: BookingLineItem[];
        /**
         * Total deposit the customer must pay when booking the service.
         *
         * Available when: The service includes a deposit.
         */
        deposit?: number | null;
    }
    /** @oneof */
    interface PriceInfoTotalPriceOneOf {
        /**
         * Calculated total price. Available only when the
         * [service](https://dev.wix.com/api/rest/wix-bookings/services/service/create-service)'s
         * price has been set up as a numerical value in the
         * [`schedule.rate.labeledPriceOptions`](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/schedule/schedule-object) object.
         */
        calculatedPrice?: number;
        /**
         * Description of the total price. Available only when the
         * [service](https://dev.wix.com/api/rest/wix-bookings/services/service/create-service)'s
         * price has been set up as a text value in the
         * [`schedule.rate.priceText`](https://dev.wix.com/api/rest/wix-bookings/schedules-and-sessions/schedule/schedule-object) property.
         */
        priceDescription?: string;
    }
    interface BookingLineItem {
        /**
         * Service ID.
         *
         * Required when not using Wix Booking's default pricing logic.
         */
        serviceId?: string | null;
        /** Resource ID. Required for services of type appointment or class. */
        resourceId?: string | null;
        /**
         * Custom choices. Choices are specific values for an option the customer can choose to book.
         * For example, the option `ageGroup` may have these choices: `child`, `student`, `adult`, and `senior`.
         * Each choice may have a different price.
         */
        choices?: ServiceChoice[];
        /** Number of participants for the line item. */
        numberOfParticipants?: number | null;
        /**
         * Price per participant for the line item.
         * @readonly
         */
        pricePerParticipant?: number | null;
    }
    interface ServiceChoice extends ServiceChoiceChoiceOneOf {
        /**
         * Value for one of the choices in the `CustomServiceOption.choices` list.
         * Choices are specific values for an option the customer can choose to book. For example,
         * the option `ageGroup` may have these choices: `child`, `student`, `adult`, and `senior`.
         * Each choice may have a different price.
         */
        custom?: string;
        /**
         * ID of the corresponding option for the choice. For example, the choice `child`
         * could correspond to the option `ageGroup`. In this case, `optionId` is the ID
         * for the `ageGroup` option.
         */
        optionId?: string;
    }
    /** @oneof */
    interface ServiceChoiceChoiceOneOf {
        /**
         * Value for one of the choices in the `CustomServiceOption.choices` list.
         * Choices are specific values for an option the customer can choose to book. For example,
         * the option `ageGroup` may have these choices: `child`, `student`, `adult`, and `senior`.
         * Each choice may have a different price.
         */
        custom?: string;
    }
    interface PreviewPriceRequest {
        /** List of line items to preview the price for. */
        bookingLineItems: BookingLineItem[];
    }
    interface PreviewPriceResponse {
        /** Information about each line item's price and the estimated total price based on the line items. */
        priceInfo?: PriceInfo;
    }
    interface CalculatePriceRequest {
        /** Booking to calculate the price for. */
        booking: Booking;
    }
    /** The booking object, version 2. */
    interface Booking extends BookingParticipantsInfoOneOf {
        /** Total number of participants. Available only when the booking includes a single service variant. */
        totalParticipants?: number;
        /**
         * Information about the booked service choices and participants.
         * Available only when the booking includes multiple service variants.
         */
        participantsChoices?: ParticipantChoices;
        /**
         * Booking ID.
         * @readonly
         */
        _id?: string | null;
        /** An object describing the slot or schedule that was booked. */
        bookedEntity?: BookedEntity;
        /** Contact details of the site visitor or member making the booking. */
        contactDetails?: ContactDetails;
        /** Additional custom fields submitted with the booking form. */
        additionalFields?: CustomFormField[];
        /**
         * Booking status.
         * One of:
         * - `"CREATED"` - The booking was created.
         * - `"UPDATED"` - The booking was updated.
         * - `"CONFIRMED"` - The booking was confirmed and appears on the bookings calendar. A booking can be manually confirmed using the [`confirmOrDecline()`](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/confirmordeclinebooking) API. A booking can be automatically confirmed when the following requirements are met:
         *     + The service is configured as automatically confirmed.
         *     + The system invoked the eCommerce checkout API and created an order.
         * - `"CANCELED"` - The booking has been canceled and synced to the bookings calendar.
         * The booking can be canceled using [`cancelBooking()`](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/cancelbooking) API.
         * - `"PENDING"` - The booking is waiting to be confirmed or declined by the owner and the booking is synced to the bookings calendar.
         * Bookings can be manually set as `PENDING` using the `setAsPending()` API, by those with Manage Booking Status permissions scopes.
         * Bookings can be automatically set as `PENDING` when the following requirements are met:
         *     + The service is configured as manually confirmed.
         *     + Invoking the eCommerce checkout API and an order has been created.
         * - `"WAITING_LIST"` - The booking is on a waiting list.
         * - `"DECLINED"` - The booking was declined by the owner and synced to the Bookings calendar. Bookings can be manually declined using the [`declineBooking()`](https://www.wix.com/velo/reference/wix-bookings-v2/bookings/declinebooking) API by those with Manage Booking Status permission scopes. Bookings can be automatically declined when one of the following requirements are met:
         *     + Invoking the `eCommerce checkout` API and the order declined event has been sent.
         *     + Invoking the `eCommerce checkout` API and order approved event has been sent, but the booking is offline and the booking causes a double booking.
         */
        status?: BookingStatus;
        /**
         * Payment status.
         * One of:
         * - `"NOT_PAID"` The booking is not paid for.
         * - `"PAID"` The booking is fully paid.
         * - `"PARTIALLY_PAID"` The booking is partially paid.
         * - `"REFUNDED"` The booking is refunded.
         * - `"EXEMPT"` The booking is free of charge.
         * @readonly
         */
        paymentStatus?: PaymentStatus;
        /**
         * Selected payment option.
         *
         * Supported values: `"OFFLINE"`, `"ONLINE"`, `"MEMBERSHIP"`, `"MEMBERSHIP_OFFLINE"`.
         *
         * One of the payment options offered by the service, or another option if `skipSelectedPaymentOptionValidation` is `true`.
         * When undefined, the payment option is resolved by the service configuration on checkout.
         */
        selectedPaymentOption?: SelectedPaymentOption;
        /**
         * Date and time the booking was created.
         * @readonly
         */
        _createdDate?: Date;
        /** External ID provided by the client app on creation. */
        externalUserId?: string | null;
        /** Revision number to be used when updating, rescheduling, or cancelling the booking. Revision number, which increments by 1 each time the booking is updated, rescheduled, or canceled. To prevent conflicting changes,the current revision must be passed when updating the booking. */
        revision?: string | null;
        /**
         * ID of the creator of the Booking.
         * If `appId` and another ID are present, the other ID takes precedence.
         * @readonly
         */
        createdBy?: IdentificationData;
        /**
         * The start date of this booking. For a slot, this is the start date of the slot. For a schedule, this is the start date of the first session.
         * @readonly
         */
        startDate?: Date;
        /**
         * The end date of this booking. For a slot, this is the end date of the slot. For a schedule, this is the end date of the last session.
         * @readonly
         */
        endDate?: Date;
        /**
         * Date and time the booking was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /** Custom field data for this object. Extended fields must be configured in the Wix Dev Center before they can be accessed with API calls. */
        extendedFields?: ExtendedFields;
        /**
         * Whether this booking overlaps another existing confirmed booking. Returned when: `true`
         * @readonly
         */
        doubleBooked?: boolean | null;
    }
    /** @oneof */
    interface BookingParticipantsInfoOneOf {
        /** Total number of participants. Available only when the booking includes a single service variant. */
        totalParticipants?: number;
        /**
         * Information about the booked service choices and participants.
         * Available only when the booking includes multiple service variants.
         */
        participantsChoices?: ParticipantChoices;
    }
    enum MultiServiceBookingType {
        /**
         * Multi service booking will be considered available if its bookings are
         * available as returned from ListMultiServiceAvailabilityTimeSlots API.
         * See [List Multi Service Availability Time Slots] (url) documentation // todo: complete url
         */
        SEQUENTIAL_BOOKINGS = "SEQUENTIAL_BOOKINGS",
        /**
         * Multi service booking will be considered available if each of its bookings is available separately.
         * Not supported yet
         */
        SEPARATE_BOOKINGS = "SEPARATE_BOOKINGS",
        /** Not supported yet */
        PARALLEL_BOOKINGS = "PARALLEL_BOOKINGS"
    }
    interface BookedEntity extends BookedEntityItemOneOf {
        /** The booked slot, once booked becomes a session, The booking is automatically assigned to the session if it already exists, or creates a session if one doesn't already exist. */
        slot?: BookedSlot;
        /** The booked schedule. The booking is automatically assigned to the schedule's sessions. */
        schedule?: BookedSchedule;
        /**
         * Session title at the time of booking.
         * If session doesn't exist at the time of the booking, service name is used.
         * @readonly
         */
        title?: string | null;
        /**
         * List of tags for the booking.
         * System-assigned tags for sessions and schedules are:
         * + "INDIVIDUAL" Appointments, including appointments with more than 1 participant.
         * + "GROUP" Individual classes.
         * + "COURSE" Courses.
         */
        tags?: string[] | null;
    }
    /** @oneof */
    interface BookedEntityItemOneOf {
        /** The booked slot, once booked becomes a session, The booking is automatically assigned to the session if it already exists, or creates a session if one doesn't already exist. */
        slot?: BookedSlot;
        /** The booked schedule. The booking is automatically assigned to the schedule's sessions. */
        schedule?: BookedSchedule;
    }
    interface BookedSlot {
        /**
         * ID of the underlying session when session is a single session or generated from a recurring session.
         * If `sessionId` is defined in the `Create Booking` request, the `startDate`, `endDate`, `timezone`, `resource`, and `location` fields are ignored and populated from the existing session's information.
         */
        sessionId?: string | null;
        /** Service ID. */
        serviceId?: string;
        /** Schedule ID. Required. */
        scheduleId?: string;
        /**
         * Calendar 3 event ID
         * If not empty, on all write flows (create / update) gets priority over session_id.
         * so if both session_id and event_id are provided, the session_id that will be set on the booking will be based on the event_id.
         * Otherwise, if event_id is empty on write flow,
         */
        eventId?: string | null;
        /**
         * The start time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format.
         */
        startDate?: string | null;
        /**
         * The end time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format.
         */
        endDate?: string | null;
        /** The timezone according to which the slot was shown to the user when booking, and should be shown in future. */
        timezone?: string | null;
        /**
         * The enriched resource assigned to the slot, can be either the requested resource or the resource chosen by the system.
         * When populated, the given resource will be booked according to it's availability.
         * When empty, If `skip_availability_validation` is `false`, a random available resource will be assigned to the slot upon confirmation,
         * otherwise one of the service resources will be assigned to the slot randomly upon confirmation.
         * This resource is the slot primary resource.
         */
        resource?: BookedResource;
        /** Location where the slot's session takes place. */
        location?: Location;
    }
    interface BookedResource {
        /** Booked resource ID. */
        _id?: string;
        /** Resource's name at the time of booking. */
        name?: string | null;
        /** Resource's email at the time of booking. */
        email?: string | null;
        /** Resource's schedule ID. */
        scheduleId?: string | null;
    }
    interface Location {
        /**
         * Business location ID. Available only for locations that are business locations,
         * meaning the `location_type` is `"OWNER_BUSINESS"`.
         */
        _id?: string | null;
        /** Location name. */
        name?: string | null;
        /** The full address of this location. */
        formattedAddress?: string | null;
        /**
         * Location type.
         *
         * - `"OWNER_BUSINESS"`: The business address, as set in the site’s general settings.
         * - `"OWNER_CUSTOM"`: The address as set when creating the service.
         * - `"CUSTOM"`: The address as set for the individual session.
         */
        locationType?: LocationType;
    }
    enum LocationType {
        UNDEFINED = "UNDEFINED",
        OWNER_BUSINESS = "OWNER_BUSINESS",
        OWNER_CUSTOM = "OWNER_CUSTOM",
        CUSTOM = "CUSTOM"
    }
    interface BookedSchedule {
        /** Schedule ID. */
        scheduleId?: string;
        /** Booked service ID. */
        serviceId?: string | null;
        /**
         * Location where the schedule's sessions take place. Read only.
         * @readonly
         */
        location?: Location;
        /** The timezone according to which the slot was shown to the user when booking, and should be shown in future. */
        timezone?: string | null;
        /**
         * The start time of the first session in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format. Required.
         * @readonly
         */
        firstSessionStart?: string | null;
        /**
         * The end time of the last session in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
         * format. Required.
         * @readonly
         */
        lastSessionEnd?: string | null;
    }
    interface ContactDetails {
        /** Contact's ID. */
        contactId?: string | null;
        /** Contact's first name. When populated from a standard booking form, this property corresponds to the **Name** field. */
        firstName?: string | null;
        /** Contact's last name. */
        lastName?: string | null;
        /** Contact's email, used to create a new contact or get existing one from the [Contacts API](https://www.wix.com/velo/reference/wix-crm/contacts). Used to validate coupon usage limitations per contact. If not passed, the coupon usage limitation will not be enforced. (Coupon usage limitation validation is not supported yet). */
        email?: string | null;
        /** Contact's phone number. */
        phone?: string | null;
        /** Contact's full address. */
        fullAddress?: Address;
        /** Contact's time zone. */
        timeZone?: string | null;
        /** Contact's country in [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
        countryCode?: string | null;
    }
    /** Physical address */
    interface Address extends AddressStreetOneOf {
        /** Street name, number and apartment number. */
        streetAddress?: StreetAddress;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
        /** Country code. */
        country?: string | null;
        /** Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Zip/postal code. */
        postalCode?: string | null;
        /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
        addressLine2?: string | null;
        /** A string containing the full address of this location. */
        formattedAddress?: string | null;
        /** Free text to help find the address. */
        hint?: string | null;
        /** Coordinates of the physical address. */
        geocode?: AddressLocation;
        /** Country full name. */
        countryFullname?: string | null;
        /** Multi-level subdivisions from top to bottom. */
        subdivisions?: Subdivision[];
    }
    /** @oneof */
    interface AddressStreetOneOf {
        /** Street name, number and apartment number. */
        streetAddress?: StreetAddress;
        /** Main address line, usually street and number, as free text. */
        addressLine?: string | null;
    }
    interface StreetAddress {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /** Apartment number. */
        apt?: string;
    }
    interface AddressLocation {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision {
        /** Subdivision code. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        code?: string;
        /** Subdivision full name. */
        name?: string;
    }
    interface CustomFormField {
        /** ID of the form field as defined in the form. */
        _id?: string;
        /** Value that was submitted for this field. */
        value?: string | null;
        /**
         * Form field's label at the time of submission.
         * @readonly
         */
        label?: string | null;
        /**
         * Form field value's type at the time of submission.
         *
         * Supported values: `"SHORT_TEXT"`, `"LONG_TEXT"`, `"CHECK_BOX"`
         */
        valueType?: ValueType;
    }
    enum ValueType {
        /** Short text. This is the default value type. */
        SHORT_TEXT = "SHORT_TEXT",
        /** Long text */
        LONG_TEXT = "LONG_TEXT",
        /** a text that represent the check box value: if selected the value is "true", otherwise "false". */
        CHECK_BOX = "CHECK_BOX"
    }
    /** Booking status. */
    enum BookingStatus {
        CREATED = "CREATED",
        CONFIRMED = "CONFIRMED",
        CANCELED = "CANCELED",
        PENDING = "PENDING",
        DECLINED = "DECLINED",
        WAITING_LIST = "WAITING_LIST"
    }
    /**
     * Payment status.
     * Automatically updated when using eCom checkout APIs.
     */
    enum PaymentStatus {
        UNDEFINED = "UNDEFINED",
        NOT_PAID = "NOT_PAID",
        PAID = "PAID",
        /** not supported yet. */
        PARTIALLY_PAID = "PARTIALLY_PAID",
        /** not supported yet */
        REFUNDED = "REFUNDED",
        EXEMPT = "EXEMPT"
    }
    /**
     * The selected payment option.
     * One of the payment options offered by the service.
     * This field is be set when the user selects an option during booking.
     * If left undefined, the payment option is resolved by the service configuration on checkout.
     */
    enum SelectedPaymentOption {
        UNDEFINED = "UNDEFINED",
        OFFLINE = "OFFLINE",
        ONLINE = "ONLINE",
        MEMBERSHIP = "MEMBERSHIP",
        /** Payment can only be done using a membership and must be manually redeemed in the dashboard by the site owner. */
        MEMBERSHIP_OFFLINE = "MEMBERSHIP_OFFLINE"
    }
    interface BookingSource {
        /**
         * Platform from which a booking was created
         * <!--ONLY:VELO
         * One of:
         * - `"WEB"` Desktop browser.
         * - `"MOBILE_APP"` Mobile application.
         * <!--END:ONLY:VELO-->
         */
        platform?: Platform;
        /**
         * Actor that created this booking.
         * <!--ONLY:VELO
         * One of:
         * - `"BUSINESS"`
         * - `"CUSTOMER"`
         * <!--END:ONLY:VELO-->
         */
        actor?: Actor;
        /**
         * Wix site ID of the application that created the booking.
         * @readonly
         */
        appDefId?: string | null;
        /**
         * Name of the application that created the booking, as saved in Wix Developers Center at the time of booking.
         * @readonly
         */
        appName?: string | null;
    }
    enum Platform {
        UNDEFINED_PLATFORM = "UNDEFINED_PLATFORM",
        WEB = "WEB",
        MOBILE_APP = "MOBILE_APP"
    }
    enum Actor {
        UNDEFINED_ACTOR = "UNDEFINED_ACTOR",
        BUSINESS = "BUSINESS",
        CUSTOMER = "CUSTOMER"
    }
    interface ParticipantNotification {
        /**
         * Whether to send the message about the changes to the customer.
         *
         * Default: `false`
         */
        notifyParticipants?: boolean;
        /** Custom message to send to the participants about the changes to the booking. */
        message?: string | null;
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
        /** ID of of a contact in the site's [CRM by Ascend](https://www.wix.com/ascend/crm) system. */
        contactId?: string | null;
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
    enum IdentityType {
        UNKNOWN = "UNKNOWN",
        ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
        MEMBER = "MEMBER",
        WIX_USER = "WIX_USER",
        APP = "APP"
    }
    interface FlowControlSettings {
        /**
         * When true, skips availability checking and allows booking.
         * Requires BOOKINGS.OVERRIDE_AVAILABILITY permissions.
         */
        skipAvailabilityValidation?: boolean;
        /**
         * When true, allows booking a confirmation-required service without requiring confirmation.
         * Requires BOOKINGS.IGNORE_BOOKING_POLICY permissions.
         */
        skipBusinessConfirmation?: boolean;
        /**
         * When true, skips selected payment option checking as defined in `selectedPaymentOption` field
         * and allows booking.
         * Requires BOOKINGS.MANAGE_PAYMENTS permissions.
         */
        skipSelectedPaymentOptionValidation?: boolean;
        /** When true, refunds the booking's payment when the booking is canceled. */
        withRefund?: boolean | null;
    }
    interface ExtendedFields {
        /**
         * Data Extensions extended fields expressed as a set of key-value pairs:
         *
         * `key:value`
         *
         * + `key` is the namespace, type `string`.
         * + `value` is the data of the extended fields data, type `struct`.
         */
        namespaces?: Record<string, Record<string, any>>;
    }
    interface ParticipantChoices {
        /** Information about the booked service choices. Includes the number of participants. */
        serviceChoices?: ServiceChoices[];
    }
    interface ServiceChoices {
        /** Number of participants for this variant. */
        numberOfParticipants?: number | null;
        /** Service choices for these participants. */
        choices?: ServiceChoice[];
    }
    interface MultiServiceBookingInfo {
        /**
         * Multi service booking ID.
         * @readonly
         */
        _id?: string | null;
        /** Multi service booking type. */
        type?: MultiServiceBookingType;
    }
    interface CalculatePriceResponse {
        /** Information about each line item's price and the actual total base price. */
        priceInfo?: PriceInfo;
    }
    /**
     * Previews the base price for a set of line items belonging to the same service
     * before a potential booking is actually created.
     *
     *
     *
     * The returned price preview information about each line
     * item's price and sums up each line item's price.
     *
     * The previewed price is not the actual price that will be used to charge the customer.
     * `Preview Price` only estimates the base price by adding up the price
     * of each line item before
     * the booking is actually created.
     *
     * Use [`Calculate Price`](https://www.wix.com/velo/reference/wix-bookings-v2/pricing/calculateprice) to get the base price
     * after the booking is created.
     *
     * Passing line items that belong to different services results in an error.
     *
     * ## Calculating the previewed price
     *
     * Wix Bookings has its own default pricing logic for previewing the price. You must
     * pass the `serviceId` in the `slot`
     * or `schedule` object to [`previewPrice()`].
     *
     * You cannot call `previewPrice()` if you have customized Bookings pricing logic using the
     * [Bookings Pricing Integration REST SPI](https://dev.wix.com/api/rest/wix-bookings/pricing-integration-spi). Calling `previewPrice` if custom pricing
     * logic has been implemented for the site results in an error.
     * @param bookingLineItems - List of line items to preview the price for.
     * @public
     * @documentationMaturity preview
     * @requiredField bookingLineItems
     */
    function previewPrice(bookingLineItems: BookingLineItem[]): Promise<PreviewPriceResponse>;
    /**
     * Calculates the base price of a booking.
     *
     *
     *
     * You can call [`calculatePrice()`](https://www.wix.com/velo/reference/wix-bookings-v2/pricing/calculateprice) after a booking is created. The returned calculated price includes information about each line
     * item's price and the booking's total price.
     *
     * You can use [`previewPrice()`](https://www.wix.com/velo/reference/wix-bookings-v2/pricing/previewprice) to get the base price
     * before a booking is created.
     *
     * The calculated price is the base price that will be used as a basis for charging the customer.
     * During checkout, additional taxes
     * and fees might be added to this base price.
     *
     * ## Calculating the price
     *
     * Wix Bookings has its own default pricing logic for calculating the price. When
     * using Wix Bookings' default pricing logic, you must pass the `serviceId` in the `slot`
     * or `schedule` object to [`calculatePrice()`](https://www.wix.com/velo/reference/wix-bookings-v2/pricing/calculateprice).
     *
     * Alternatively you can customize the pricing logic using the
     * [Bookings Pricing Integration REST SPI](https://dev.wix.com/api/rest/wix-bookings/pricing-integration-spi).
     * If you integrate with a pricing provider, the customized pricing logic becomes
     * the default logic. This means that, if the Pricing Integration SPI is implemented,
     * when calling `calculatePrice()`,
     * the customized logic is used instead.
     * @param booking - Booking to calculate the price for.
     * @public
     * @documentationMaturity preview
     * @requiredField booking
     */
    function calculatePrice(booking: Booking): Promise<CalculatePriceResponse>;
    type bookingsV2PriceInfo_universal_d_PriceInfo = PriceInfo;
    type bookingsV2PriceInfo_universal_d_PriceInfoTotalPriceOneOf = PriceInfoTotalPriceOneOf;
    type bookingsV2PriceInfo_universal_d_BookingLineItem = BookingLineItem;
    type bookingsV2PriceInfo_universal_d_ServiceChoice = ServiceChoice;
    type bookingsV2PriceInfo_universal_d_ServiceChoiceChoiceOneOf = ServiceChoiceChoiceOneOf;
    type bookingsV2PriceInfo_universal_d_PreviewPriceRequest = PreviewPriceRequest;
    type bookingsV2PriceInfo_universal_d_PreviewPriceResponse = PreviewPriceResponse;
    type bookingsV2PriceInfo_universal_d_CalculatePriceRequest = CalculatePriceRequest;
    type bookingsV2PriceInfo_universal_d_Booking = Booking;
    type bookingsV2PriceInfo_universal_d_BookingParticipantsInfoOneOf = BookingParticipantsInfoOneOf;
    type bookingsV2PriceInfo_universal_d_MultiServiceBookingType = MultiServiceBookingType;
    const bookingsV2PriceInfo_universal_d_MultiServiceBookingType: typeof MultiServiceBookingType;
    type bookingsV2PriceInfo_universal_d_BookedEntity = BookedEntity;
    type bookingsV2PriceInfo_universal_d_BookedEntityItemOneOf = BookedEntityItemOneOf;
    type bookingsV2PriceInfo_universal_d_BookedSlot = BookedSlot;
    type bookingsV2PriceInfo_universal_d_BookedResource = BookedResource;
    type bookingsV2PriceInfo_universal_d_Location = Location;
    type bookingsV2PriceInfo_universal_d_LocationType = LocationType;
    const bookingsV2PriceInfo_universal_d_LocationType: typeof LocationType;
    type bookingsV2PriceInfo_universal_d_BookedSchedule = BookedSchedule;
    type bookingsV2PriceInfo_universal_d_ContactDetails = ContactDetails;
    type bookingsV2PriceInfo_universal_d_Address = Address;
    type bookingsV2PriceInfo_universal_d_AddressStreetOneOf = AddressStreetOneOf;
    type bookingsV2PriceInfo_universal_d_StreetAddress = StreetAddress;
    type bookingsV2PriceInfo_universal_d_AddressLocation = AddressLocation;
    type bookingsV2PriceInfo_universal_d_Subdivision = Subdivision;
    type bookingsV2PriceInfo_universal_d_CustomFormField = CustomFormField;
    type bookingsV2PriceInfo_universal_d_ValueType = ValueType;
    const bookingsV2PriceInfo_universal_d_ValueType: typeof ValueType;
    type bookingsV2PriceInfo_universal_d_BookingStatus = BookingStatus;
    const bookingsV2PriceInfo_universal_d_BookingStatus: typeof BookingStatus;
    type bookingsV2PriceInfo_universal_d_PaymentStatus = PaymentStatus;
    const bookingsV2PriceInfo_universal_d_PaymentStatus: typeof PaymentStatus;
    type bookingsV2PriceInfo_universal_d_SelectedPaymentOption = SelectedPaymentOption;
    const bookingsV2PriceInfo_universal_d_SelectedPaymentOption: typeof SelectedPaymentOption;
    type bookingsV2PriceInfo_universal_d_BookingSource = BookingSource;
    type bookingsV2PriceInfo_universal_d_Platform = Platform;
    const bookingsV2PriceInfo_universal_d_Platform: typeof Platform;
    type bookingsV2PriceInfo_universal_d_Actor = Actor;
    const bookingsV2PriceInfo_universal_d_Actor: typeof Actor;
    type bookingsV2PriceInfo_universal_d_ParticipantNotification = ParticipantNotification;
    type bookingsV2PriceInfo_universal_d_IdentificationData = IdentificationData;
    type bookingsV2PriceInfo_universal_d_IdentificationDataIdOneOf = IdentificationDataIdOneOf;
    type bookingsV2PriceInfo_universal_d_IdentityType = IdentityType;
    const bookingsV2PriceInfo_universal_d_IdentityType: typeof IdentityType;
    type bookingsV2PriceInfo_universal_d_FlowControlSettings = FlowControlSettings;
    type bookingsV2PriceInfo_universal_d_ExtendedFields = ExtendedFields;
    type bookingsV2PriceInfo_universal_d_ParticipantChoices = ParticipantChoices;
    type bookingsV2PriceInfo_universal_d_ServiceChoices = ServiceChoices;
    type bookingsV2PriceInfo_universal_d_MultiServiceBookingInfo = MultiServiceBookingInfo;
    type bookingsV2PriceInfo_universal_d_CalculatePriceResponse = CalculatePriceResponse;
    const bookingsV2PriceInfo_universal_d_previewPrice: typeof previewPrice;
    const bookingsV2PriceInfo_universal_d_calculatePrice: typeof calculatePrice;
    namespace bookingsV2PriceInfo_universal_d {
        export { bookingsV2PriceInfo_universal_d_PriceInfo as PriceInfo, bookingsV2PriceInfo_universal_d_PriceInfoTotalPriceOneOf as PriceInfoTotalPriceOneOf, bookingsV2PriceInfo_universal_d_BookingLineItem as BookingLineItem, bookingsV2PriceInfo_universal_d_ServiceChoice as ServiceChoice, bookingsV2PriceInfo_universal_d_ServiceChoiceChoiceOneOf as ServiceChoiceChoiceOneOf, bookingsV2PriceInfo_universal_d_PreviewPriceRequest as PreviewPriceRequest, bookingsV2PriceInfo_universal_d_PreviewPriceResponse as PreviewPriceResponse, bookingsV2PriceInfo_universal_d_CalculatePriceRequest as CalculatePriceRequest, bookingsV2PriceInfo_universal_d_Booking as Booking, bookingsV2PriceInfo_universal_d_BookingParticipantsInfoOneOf as BookingParticipantsInfoOneOf, bookingsV2PriceInfo_universal_d_MultiServiceBookingType as MultiServiceBookingType, bookingsV2PriceInfo_universal_d_BookedEntity as BookedEntity, bookingsV2PriceInfo_universal_d_BookedEntityItemOneOf as BookedEntityItemOneOf, bookingsV2PriceInfo_universal_d_BookedSlot as BookedSlot, bookingsV2PriceInfo_universal_d_BookedResource as BookedResource, bookingsV2PriceInfo_universal_d_Location as Location, bookingsV2PriceInfo_universal_d_LocationType as LocationType, bookingsV2PriceInfo_universal_d_BookedSchedule as BookedSchedule, bookingsV2PriceInfo_universal_d_ContactDetails as ContactDetails, bookingsV2PriceInfo_universal_d_Address as Address, bookingsV2PriceInfo_universal_d_AddressStreetOneOf as AddressStreetOneOf, bookingsV2PriceInfo_universal_d_StreetAddress as StreetAddress, bookingsV2PriceInfo_universal_d_AddressLocation as AddressLocation, bookingsV2PriceInfo_universal_d_Subdivision as Subdivision, bookingsV2PriceInfo_universal_d_CustomFormField as CustomFormField, bookingsV2PriceInfo_universal_d_ValueType as ValueType, bookingsV2PriceInfo_universal_d_BookingStatus as BookingStatus, bookingsV2PriceInfo_universal_d_PaymentStatus as PaymentStatus, bookingsV2PriceInfo_universal_d_SelectedPaymentOption as SelectedPaymentOption, bookingsV2PriceInfo_universal_d_BookingSource as BookingSource, bookingsV2PriceInfo_universal_d_Platform as Platform, bookingsV2PriceInfo_universal_d_Actor as Actor, bookingsV2PriceInfo_universal_d_ParticipantNotification as ParticipantNotification, bookingsV2PriceInfo_universal_d_IdentificationData as IdentificationData, bookingsV2PriceInfo_universal_d_IdentificationDataIdOneOf as IdentificationDataIdOneOf, bookingsV2PriceInfo_universal_d_IdentityType as IdentityType, bookingsV2PriceInfo_universal_d_FlowControlSettings as FlowControlSettings, bookingsV2PriceInfo_universal_d_ExtendedFields as ExtendedFields, bookingsV2PriceInfo_universal_d_ParticipantChoices as ParticipantChoices, bookingsV2PriceInfo_universal_d_ServiceChoices as ServiceChoices, bookingsV2PriceInfo_universal_d_MultiServiceBookingInfo as MultiServiceBookingInfo, bookingsV2PriceInfo_universal_d_CalculatePriceResponse as CalculatePriceResponse, bookingsV2PriceInfo_universal_d_previewPrice as previewPrice, bookingsV2PriceInfo_universal_d_calculatePrice as calculatePrice, };
    }
    export { bookingsV2Attendance_universal_d as attendance, bookingsAvailabilityV1SlotAvailability_universal_d as availabilityCalendar, bookingsAvailabilityV2TimeSlotAvailabilityTimeSlots_universal_d as availabilityTimeSlots, bookingsV2Booking_universal_d as bookings, bookingsAvailabilityV2TimeSlotEventTimeSlots_universal_d as eventTimeSlots, bookingsReaderV2ExtendedBooking_universal_d as extendedBookings, bookingsCalendarV2ExternalCalendar_universal_d as externalCalendars, bookingsAvailabilityV2TimeSlotMultiServiceAvailabilityTimeSlots_universal_d as multiServiceAvailabilityTimeSlots, bookingsV2PriceInfo_universal_d as pricing, bookingsAvailabilityV2TimeSlot_universal_d as serviceAvailability, bookingsCatalogV1ServiceOptionsAndVariants_universal_d as serviceOptionsAndVariants, bookingsServicesV2Service_universal_d as services, bookingsStaffV1StaffMember_universal_d as staffMembers };
}
