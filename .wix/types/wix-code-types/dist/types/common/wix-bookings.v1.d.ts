/**
 * [Read more](https://www.wix.com/corvid/reference/wix-bookings.v1.html#)
 */
declare module 'wix-bookings.v1' {
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-bookings-v1.html#resources)
     */
    const resources: Resources;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-bookings-v1.Resources.html#)
     */
    interface Resources {
        /**
         * Creates a resource.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-v1.Resources.html#createResource)
         */
        createResource(resource: Resources.Resource, options: Resources.CreateResourceOptions): Promise<Resources.CreateResourceResponse>;
        /**
         * Deletes a resource.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-v1.Resources.html#deleteResource)
         */
        deleteResource(_id: string): Promise<Resources.DeleteResourceResponse>;
        /**
         * Updates a resource.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-v1.Resources.html#updateResource)
         */
        updateResource(_id: string, resource: Resources.UpdateResource): Promise<Resources.UpdateResourceResponse>;
        /**
         * Updates a resource's schedule.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-bookings-v1.Resources.html#updateSchedule)
         */
        updateSchedule(resourceId: string, schedule: Resources.Schedule): Promise<Resources.UpdateScheduleResponse>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-bookings-v1.Resources.html#)
     */
    namespace Resources {
        type Address = {
            /**
             * Main address line, usually street and number, as free text.
             */
            addressLine?: string;
            /**
             * Free text providing more detailed address info. Usually contains Apt, Suite, and Floor.
             */
            addressLine2?: string;
            /**
             * City name.
             */
            city?: string;
            /**
             * Country code.
             */
            country?: string;
            /**
             * Country full name.
             */
            countryFullname?: string;
            /**
             * A string containing the full address of this location.
             */
            formattedAddress?: string;
            /**
             * Coordinates of the physical address.
             */
            geocode?: Resources.AddressLocation;
            /**
             * Free text to help find the address.
             */
            hint?: string;
            /**
             * Zip/postal code.
             */
            postalCode?: string;
            /**
             * Street name, number and apartment number.
             */
            streetAddress?: Resources.StreetAddress;
            /**
             * Subdivision. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2).
             */
            subdivision?: string;
            /**
             * Multi-level subdivisions from top to bottom.
             */
            subdivisions?: Array<Resources.Subdivision>;
        };
        type AddressLocation = {
            /**
             * Address latitude.
             */
            latitude?: number;
            /**
             * Address longitude.
             */
            longitude?: number;
        };
        type AddressStreetOneOf = {
            /**
             * Main address line, usually street and number, as free text.
             */
            addressLine?: string;
            /**
             * Street name, number and apartment number.
             */
            streetAddress?: Resources.StreetAddress;
        };
        type Availability = {
            /**
             * Constraints for calculating the schedule's availability.
             */
            constraints?: Resources.AvailabilityConstraints;
            /**
             * Date and time the schedule stops being available for booking. No value indicates no end time.
             */
            end?: Date;
            /**
             * Other schedules that impact the availability calculation. Relevant only when there are availability constraints.
             */
            linkedSchedules?: Array<Resources.LinkedSchedule>;
            /**
             * Date and time the schedule starts to be available for booking.
             */
            start?: Date;
        };
        type AvailabilityConstraints = {
            /**
             * A list of duration options for slots, in minutes. Minimum value for a duration is 1.
             * The availability calculation generates slots with these durations, where there is no conflict with existing sessions or other availability constraints.
             */
            slotDurations?: Array<number>;
            /**
             * An object defining the time between available slots' start times.  For example, a slot with slots_split_interval=5 can start every 5 minutes. The default is the slot duration.
             */
            slotsSplitInterval?: Resources.SplitInterval;
            /**
             * Specify how to split the slots in intervals of minutes.
             * This value indicates the time between available slots' start time. e.g., from 5 minute slots (3:00, 3:05, 3:15) and 1 hour slots (3:00, 4:00, 5:00).
             * Optional. The default is the first duration in slot_durations field.
             * Deprecated. Use the `split_slots_interval.value_in_minutes`.
             */
            splitInterval?: number;
            /**
             * The number of minutes between the `end` of one slot, and the `start` of the next.
             * Minimum value is 0, maximum value is 120.
             */
            timeBetweenSlots?: number;
        };
        type BatchCreateOptions = {
            /**
             * Optional. If provided, the resources field is ignored.
             */
            batchedResources?: Array<Resources.CreateResourceRequest>;
            /**
             * List of resource entities to create.
             */
            resources?: Array<Resources.Resource>;
        };
        type BatchCreateResourceRequest = {
            /**
             * Optional. If provided, the resources field is ignored.
             */
            batchedResources?: Array<Resources.CreateResourceRequest>;
            /**
             * List of resource entities to create.
             */
            resources?: Array<Resources.Resource>;
        };
        type BatchCreateResourceResponse = {
            /**
             * List of the created resources.
             */
            resources?: Array<Resources.Resource>;
        };
        type BatchDeleteResourceRequest = {
            /**
             * List of resource IDs to delete.
             */
            ids: Array<string>;
        };
        type BatchDeleteResourceResponse = {};
        type BatchRequest = {
            /**
             * Cancel multiple schedules.
             * The given schedules move to a CANCELLED status which means that all sessions up until
             * the cancellation point in time are kept, while removing all following sessions.
             */
            cancelRequests?: Array<Resources.CancelScheduleRequest>;
            /**
             * Create multiple schedules.
             */
            createRequests?: Array<Resources.CreateScheduleRequest>;
            /**
             * Update multiple schedules. Not Supported yet.
             */
            updateRequests?: Array<Resources.UpdateScheduleRequest>;
        };
        type BatchResponse = {
            /**
             * Cancelled schedules.
             */
            cancelled?: Array<Resources.Schedule>;
            /**
             * Created schedules.
             */
            created?: Array<Resources.Schedule>;
            /**
             * Updated schedules.
             */
            updated?: Array<Resources.Schedule>;
        };
        type BusinessLocation = {
            /**
             * The ID of the business location. Has to be non-empty
             */
            locationId?: string;
        };
        type BusinessSchedule = {
            /**
             * Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods.
             */
            periods?: Array<Resources.TimePeriod>;
            /**
             * Exceptions to the business's regular hours. The business can be open or closed during the exception.
             */
            specialHourPeriod?: Array<Resources.SpecialHourPeriod>;
        };
        type CalendarConference = {
            /**
             * URL used by a guest to join the conference.
             */
            guestUrl?: string;
            /**
             * URL used by the host to start the conference.
             */
            hostUrl?: string;
        };
        type CancelScheduleRequest = {
            /**
             * Time to cancel the sessions from. Optional. If this field is empty, all of this schedule's sessions will be canceled.
             */
            from?: Date;
            /**
             * Deprecated, use participant_notification
             */
            notifyParticipants?: boolean;
            /**
             * Whether to notify participants about the change, and an optional custom message.
             */
            participantNotification?: Resources.ParticipantNotification;
            /**
             * Whether to preserve future sessions with reservations. Defaults to false.
             */
            preserveFutureSessionsWithParticipants?: boolean;
            /**
             * Schedule ID.
             */
            scheduleId?: string;
        };
        type ConferenceProvider = {
            /**
             * Conferencing provider ID
             */
            providerId?: string;
        };
        type CreateResourceOptions = {
            /**
             * List of schedules to be assigned for the created resource. Currently only a single schedule is allowed.
             * If provided, any schedules in the resource entity will be ignored.
             */
            schedules?: Array<Resources.Schedule>;
        };
        type CreateResourceRequest = {
            /**
             * Resource to create.
             */
            resource: Resources.Resource;
            /**
             * List of schedules to be assigned for the created resource. Currently only a single schedule is allowed.
             * If provided, any schedules in the resource entity will be ignored.
             */
            schedules?: Array<Resources.Schedule>;
        };
        type CreateResourceResponse = {
            /**
             * Created resource.
             */
            resource?: Resources.Resource;
        };
        type CreateScheduleRequest = {
            /**
             * Schedule.
             */
            schedule?: Resources.Schedule;
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
        type DeleteResourceRequest = {
            /**
             * ID of the resource to delete.
             */
            _id: string;
        };
        type DeleteResourceResponse = {
            /**
             * Deleted resource ID.
             */
            _id?: string;
        };
        type ExternalCalendarOverrides = {
            /**
             * Synced description of the external calendar event.
             */
            description?: string;
            /**
             * Synced title of the external calendar event.
             */
            title?: string;
        };
        type Frequency = {
            /**
             * The frequency of the recurrence in weeks. i.e. when this value is 4, the interval occurs every 4 weeks. Optional. The default is 1. minimum: 1, maximum: 52.
             */
            repetition?: number;
        };
        type Interval = {
            /**
             * The day the interval accrue. Optional. The default is the day of the recurring interval's start time.
             */
            daysOfWeek?: string;
            /**
             * The duration of the interval in minutes. Required. Part of the session end time calculation. minimum: 1, maximum: 86400.
             */
            duration?: number;
            /**
             * The hour of the day the interval accrue. must be consistent with the Interval start time. Options. The default is 0. minimum: 0, maximum: 23.
             */
            hourOfDay?: number;
            /**
             * The minutes of hour the interval accrue. must be consistent with the Interval end time. Options. The default is 0. minimum: 0, maximum: 59.
             */
            minuteOfHour?: number;
        };
        type LinkResourceToUserRequest = {
            /**
             * The id of the resource to link.
             */
            resourceId: string;
            /**
             * The id of Wix user to link.
             */
            userId: string;
        };
        type LinkResourceToUserResponse = {
            /**
             * The updated resource.
             */
            resource?: Resources.Resource;
        };
        type LinkedSchedule = {
            /**
             * Schedule ID.
             */
            scheduleId?: string;
            /**
             * Owner ID, of the linked schedule.
             */
            scheduleOwnerId?: string;
            /**
             * Sets this schedule's availability for the duration of the linked schedule's sessions.  Default is `"BUSY"`.
             *
             * If set to `"BUSY"`, this schedule cannot have any available slots during the linked schedule's sessions.
             * If set to `"FREE"`, this schedule can have available slots during the linked schedule's sessions.
             *
             *
             *
             */
            transparency?: string;
        };
        type ListOptions = {
            query?: Resources.Query;
        };
        type ListResourcesRequest = {
            query?: Resources.Query;
        };
        type ListResourcesResponse = {
            metadata?: Resources.QueryMetaData;
            pagingMetadata?: Resources.PagingMetadataV2;
            /**
             * List of resources matching the query object.
             */
            resources?: Array<Resources.Resource>;
        };
        type Location = {
            /**
             * Free text address used when locationType is `OWNER_CUSTOM`.
             */
            address?: string;
            /**
             * Custom address, used when locationType is `"OWNER_CUSTOM"`. Might be used when locationType is `"CUSTOM"` in case the owner sets a custom address for the session which is different from the default.
             */
            customAddress?: Resources.Address;
            /**
             * Location type.
             * One of:
             * - `"OWNER_BUSINESS"` The business address as set in the site’s general settings.
             * - `"OWNER_CUSTOM"` The address as set when creating the service.
             * - `"CUSTOM"` The address set for the individual session.
             */
            locationType?: string;
        };
        type LocationsAddress = {
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
             * Geographic coordinates of location.
             */
            location?: Resources.LocationsAddressLocation;
            /**
             * Postal or zip code.
             */
            postalCode?: string;
            /**
             * Street address. Includes street name, number, and apartment number in separate fields.
             */
            streetAddress?: Resources.LocationsStreetAddress;
            /**
             * Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format.
             */
            subdivision?: string;
        };
        type LocationsAddressLocation = {
            /**
             * Latitude of the location. Must be between -90 and 90.
             */
            latitude?: number;
            /**
             * Longitude of the location. Must be between -180 and 180.
             */
            longitude?: number;
        };
        type LocationsLocation = {
            /**
             * Location ID.
             */
            _id?: string;
            /**
             * Address.
             */
            address?: Resources.LocationsAddress;
            /**
             * Whether the location is archived. Archived locations can't be updated.
             * __Note:__ [Archiving a location](https://dev.wix.com/api/rest/business-info/locations/archive-location)
             * doesn't affect its `status`.
             */
            archived?: boolean;
            /**
             * Business schedule. Array of weekly recurring time periods when the location is open for business. Limited to 100 time periods.
             *
             * __Note:__ Not supported by Wix Bookings.
             */
            businessSchedule?: Resources.BusinessSchedule;
            /**
             * Whether this is the default location. There can only be one default location per site. The default location can't be archived.
             */
            default?: boolean;
            /**
             * Location description.
             */
            description?: string;
            /**
             * Email address.
             */
            email?: string;
            /**
             * Fax number.
             */
            fax?: string;
            /**
             * Location type.
             *
             * **Note:** Currently not supported.
             */
            locationType?: string;
            /**
             * Location name.
             */
            name?: string;
            /**
             * Phone number.
             */
            phone?: string;
            /**
             * Revision number, which increments by 1 each time the location is updated.
             * To prevent conflicting changes, the existing revision must be used when updating a location.
             */
            revision?: string;
            /**
             * Location status. Defaults to `ACTIVE`.
             * __Note:__ [Archiving a location](https://dev.wix.com/api/rest/business-info/locations/archive-location)
             * doesn't affect the location's status. `INACTIVE` is currently not supported.
             */
            status?: string;
            /**
             * Timezone in `America/New_York` format.
             */
            timeZone?: string;
        };
        type LocationsStreetAddress = {
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
             * Number of items returned in the response.
             */
            count?: number;
            /**
             * Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used.
             */
            cursors?: Resources.Cursors;
            /**
             * Offset that was requested.
             */
            offset?: number;
            /**
             * Flag that indicates the server failed to calculate the `total` field.
             */
            tooManyToCount?: boolean;
            /**
             * Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set.
             */
            total?: number;
        };
        type Participant = {
            /**
             * Participant ID. Currently represents the booking.id.
             */
            _id?: string;
            /**
             * Approval status for the participant.
             *
             *
             */
            approvalStatus?: string;
            /**
             * Contact ID.
             */
            contactId?: string;
            /**
             * Participant's email address.
             */
            email?: string;
            /**
             * Whether the participant was inherited from the schedule, as opposed to being booked directly to the session.
             */
            inherited?: boolean;
            /**
             * Participant's name.
             */
            name?: string;
            /**
             * Group or party size. The number of people attending. Defaults to 0. Maximum is 250.
             */
            partySize?: number;
            /**
             * Participant's phone number.
             */
            phone?: string;
        };
        type ParticipantNotification = {
            /**
             * Custom message to send to the participants about the changes to the booking.
             */
            message?: string;
            /**
             * Whether to send the message about the changes to the customer.
             *
             * Default: `false`
             */
            notifyParticipants?: boolean;
        };
        type Price = {
            /**
             * Required payment amount.
             */
            amount?: string;
            /**
             * Currency in which the amount is quoted.
             */
            currency?: string;
            /**
             * Amount of a down payment or deposit as part of the transaction.
             */
            downPayAmount?: string;
        };
        type Query = {
            /**
             * Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fields?: Array<string>;
            /**
             * Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fieldsets?: Array<string>;
            /**
             * Filter object in the following format:
             * `"filter" : {
             * "fieldName1": "value1",
             * "fieldName2":{"$operator":"value2"}
             * }`
             * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
             */
            filter?: any;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: Resources.Paging;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<Resources.Sorting>;
        };
        type QueryMetaData = {
            items?: number;
            offset?: number;
            totalCount?: number;
        };
        type QueryResourcesOptions = {
            query?: Resources.QueryV2;
        };
        type QueryResourcesRequest = {
            query?: Resources.QueryV2;
        };
        type QueryResourcesResponse = {
            pagingMetadata?: Resources.PagingMetadataV2;
            /**
             * List of resources matching the query object.
             */
            resources?: Array<Resources.Resource>;
        };
        type QueryV2 = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            cursorPaging?: Resources.CursorPaging;
            /**
             * Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fields?: Array<string>;
            /**
             * Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned.
             */
            fieldsets?: Array<string>;
            /**
             * Filter object in the following format:
             * `"filter" : {
             * "fieldName1": "value1",
             * "fieldName2":{"$operator":"value2"}
             * }`
             * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
             */
            filter?: Object;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: Resources.Paging;
            /**
             * Sort object in the following format:
             * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
             */
            sort?: Array<Resources.Sorting>;
        };
        type QueryV2PagingMethodOneOf = {
            /**
             * Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`.
             */
            cursorPaging?: Resources.CursorPaging;
            /**
             * Paging options to limit and skip the number of items.
             */
            paging?: Resources.Paging;
        };
        type Rate = {
            /**
             * Mapping between a named price option, for example, adult or child prices, and the price, currency, and down payment amount.
             * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
             */
            labeledPriceOptions?: Record<string, Resources.Price>;
            /**
             * Textual price information used when **Price Per Session** is set to **Custom Price** in the app's service details page.
             * When present in an update request, the `default_varied_price` is ignored to support backward compatibility.
             */
            priceText?: string;
        };
        type RecurringInterval = {
            /**
             * The recurring interval identifier.
             */
            _id?: string;
            /**
             * Specifies the list of linked schedules and the way this link affects the corresponding schedules' availability. Can be calculated from the schedule or overridden on the recurring interval.
             */
            affectedSchedules?: Array<Resources.LinkedSchedule>;
            /**
             * The end time of the recurring interval. Optional. Empty value indicates that there is no end time.
             */
            end?: Date;
            /**
             * The frequency of the interval. Optional. The default is frequency with the default repetition.
             */
            frequency?: Resources.Frequency;
            /**
             * The interval rules. The day, hour and minutes the interval is recurring.
             */
            interval?: Resources.Interval;
            /**
             * The type of recurring interval.
             *
             */
            intervalType?: string;
            /**
             * The start time of the recurring interval. Required.
             */
            start?: Date;
        };
        type Resource = {
            /**
             * Resource ID.
             */
            _id?: string;
            /**
             * Resource description.
             */
            description?: string;
            /**
             * Resource email address.
             */
            email?: string;
            /**
             * Resource images.
             */
            images?: Array<string>;
            /**
             * Resource name.
             */
            name?: string;
            /**
             * Resource phone number.
             */
            phone?: string;
            /**
             * List of IDs of schedules owned by this resource.
             */
            scheduleIds?: Array<string>;
            /**
             * Resource status.
             *
             * One of:
             * - `"CREATED"` Default status.
             * - `"DELETED"` The resource was deleted.
             * - `"UPDATED"` The resource was updated.
             */
            status?: string;
            /**
             * Resource tags. Tags are used to identify, group, and filter the different types of resources. For example, 'staff' or 'room'.
             */
            tags?: Array<string>;
            /**
             * Wix user ID, if the resource is associated with the Wix user.
             * A staff member resource can be associated with a Wix user via assignment of a permissions role in the business manager.
             *
             */
            wixUserId?: string;
        };
        type ResourceNotification = {
            /**
             * Event type.
             */
            event?: string;
            /**
             * Updated resource entity.
             * 'resource.schedules' is deprecated and will not be returned. Please use 'resource.scheduleIds' instead.
             */
            resource?: Resources.Resource;
        };
        type ResourceUpdateScheduleRequest = {
            /**
             * Fieldmask for schedule
             */
            fieldmask?: Array<string>;
            /**
             * Resource ID to update.
             */
            resourceId: string;
            /**
             * Schedule to update.
             */
            schedule?: Resources.Schedule;
        };
        type Schedule = {
            /**
             * Schedule ID.
             */
            _id?: string;
            /**
             * A conference created for the schedule. This is used when a participant is added to a schedule.
             */
            calendarConference?: Resources.CalendarConference;
            /**
             * Maximum number of participants that can be added to the schedule's sessions. Must be at most `1` for schedule whose availability is affected by another schedule. For example, appointment schedules of the Wix Bookings app.
             */
            capacity?: number;
            /**
             * Schedule creation date.
             */
            created?: Date;
            /**
             * Fields which were inherited from the Business Info page under Settings in the Dashboard.
             */
            inheritedFields?: Array<string>;
            /**
             * Default location for the schedule's sessions.
             */
            location?: Resources.Location;
            /**
             * *Partial list** of participants which are registered to sessions in this schedule.
             * Participants who are registered in the schedule are automatically registered to any session that is created for the schedule.
             * To retrieve the full list of schedule participants please use the [Query Extended Bookings API](https://dev.wix.com/api/rest/wix-bookings/bookings-reader-v2/query-extended-bookings).
             */
            participants?: Array<Resources.Participant>;
            /**
             * ID of the schedule's owner entity. This may be a resource ID or a service ID.
             */
            scheduleOwnerId?: string;
            /**
             * Schedule status.
             *
             * One of:
             * - `"CREATED"`
             * - `"CANCELLED"`
             *
             * Default: `"CREATED"`
             */
            status?: string;
            /**
             * Tags for grouping schedules. These tags are the default tags for the schedule's sessions.
             * The Wix Bookings app uses the following predefined tags to set schedule type: `"INDIVIDUAL"`, `"GROUP"`, and `"COURSE"`. Once the schedule type is set using these tags, you cannot update it. In addition to the app's tags, you can create and update your own tags.
             */
            tags?: Array<string>;
            /**
             * Schedule's time zone in [Area/Location](https://en.wikipedia.org/wiki/Tz_database) format. Read-only.
             * Derived from the Wix Business time zone.
             */
            timeZone?: string;
            /**
             * Default title for the schedule's sessions. Maximum length: 6000 characters.
             */
            title?: string;
            /**
             * Number of participants registered to sessions in this schedule, calculated as the sum of the party sizes.
             */
            totalNumberOfParticipants?: number;
            /**
             * Schedule last update date.
             */
            updated?: Date;
            /**
             * Schedule version number, updated each time the schedule is updated.
             */
            version?: number;
        };
        type Sorting = {
            /**
             * Name of the field to sort by.
             */
            fieldName?: string;
            /**
             * Sort order.
             */
            order?: string;
        };
        type SpecialHourPeriod = {
            /**
             * Additional info about the exception. For example, "We close earlier on New Year's Eve."
             */
            comment?: string;
            /**
             * End date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
             */
            endDate?: string;
            /**
             * Whether the business is closed (or the service is not available) during the exception.
             *
             * Default: `true`.
             */
            isClosed?: boolean;
            /**
             * Start date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
             */
            startDate?: string;
        };
        type SplitInterval = {
            /**
             * Whether the slot duration is used as the split interval value.
             * If `same_as_duration` is `true`, the `value_in_minutes` is the sum of the first duration in
             * `schedule.availabilityConstraints.SlotDurations` field, and `schedule.availabilityConstraints.TimeBetweenSlots` field.
             */
            sameAsDuration?: boolean;
            /**
             * Number of minutes between available slots' start times when `same_as_duration` is `false`.
             */
            valueInMinutes?: number;
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
        type Subdivision = {
            /**
             * Subdivision code. Usually state, region, prefecture or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2).
             */
            code?: string;
            /**
             * Subdivision full name.
             */
            name?: string;
        };
        type TimePeriod = {
            /**
             * Day of the week the period ends on.
             */
            closeDay?: string;
            /**
             * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
             * midnight at the end of the specified day.
             *
             * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
             */
            closeTime?: string;
            /**
             * Day of the week the period starts on.
             */
            openDay?: string;
            /**
             * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
             * midnight at the end of the specified day.
             */
            openTime?: string;
        };
        type UnLinkResourceFromOwnerRequest = {
            /**
             * The id of the resource to unlink.
             */
            resourceId: string;
        };
        type UnLinkResourceFromOwnerResponse = {
            /**
             * The updated resource.
             */
            resource?: Resources.Resource;
        };
        type UpdateResource = {
            /**
             * Resource ID.
             */
            _id?: string;
            /**
             * Resource description.
             */
            description?: string;
            /**
             * Resource email address.
             */
            email?: string;
            /**
             * Resource images.
             */
            images?: Array<string>;
            /**
             * Resource name.
             */
            name?: string;
            /**
             * Resource phone number.
             */
            phone?: string;
            /**
             * List of IDs of schedules owned by this resource.
             */
            scheduleIds?: Array<string>;
            /**
             * Resource status.
             *
             * One of:
             * - `"CREATED"` Default status.
             * - `"DELETED"` The resource was deleted.
             * - `"UPDATED"` The resource was updated.
             */
            status?: string;
            /**
             * Resource tags. Tags are used to identify, group, and filter the different types of resources. For example, 'staff' or 'room'.
             */
            tags?: Array<string>;
            /**
             * Wix user ID, if the resource is associated with the Wix user.
             * A staff member resource can be associated with a Wix user via assignment of a permissions role in the business manager.
             *
             */
            wixUserId?: string;
        };
        type UpdateResourceOptions = {};
        type UpdateResourceRequest = {
            /**
             * Field mask of fields to update.
             */
            fieldMask?: Array<string>;
            /**
             * Resource to update.
             */
            resource?: Resources.Resource;
        };
        type UpdateResourceResponse = {
            /**
             * Updated resource.
             */
            resource?: Resources.Resource;
            /**
             * Updated schedules.
             */
            schedules?: Resources.BatchResponse;
        };
        type UpdateScheduleOptions = {};
        type UpdateScheduleRequest = {
            /**
             * Optional. Defaults to false. In case of updated intervals' start time, this field indicates whether to align those interval's time exceptions.
             */
            alignTimeExceptions?: boolean;
            /**
             * Field mask of fields to update.
             */
            fieldMask?: Array<string>;
            /**
             * Deprecated, use participant_notification.
             */
            notifyParticipants?: boolean;
            /**
             * Whether to notify participants about the change, and an optional custom message.
             */
            participantNotification?: Resources.ParticipantNotification;
            /**
             * Schedule.
             */
            schedule?: Resources.Schedule;
        };
        type UpdateScheduleResponse = {
            /**
             * Updated schedule.
             */
            schedule?: Resources.Schedule;
        };
        type Version = {
            /**
             * Participants version number, updated each time the schedule participants are updated.
             */
            participantsVersion?: number;
            /**
             * Schedule version number, updated each time the schedule is updated.
             */
            scheduleVersion?: number;
        };
    }
}
